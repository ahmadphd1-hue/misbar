// process-images.js
// ---------------------------------------------------------------------------
// 1. Reads products.xlsx (Name in column A).
// 2. Skips rows whose Name contains "remove".
// 3. Matches each product to a file in ./product-images/ (case-insensitive,
//    ignoring extra words such as "mod" / "modified").
// 4. Uploads matched images to Sanity and patches the product's `image`.
// 5. Renames products whose Excel name contains "mod"/"modified" (word removed).
// 6. / 7. Sets isHidden=false when an image was found, true otherwise.
// ---------------------------------------------------------------------------
// Usage:
//   node process-images.js            # performs uploads + patches
//   node process-images.js --dry-run  # only reports what would happen
// ---------------------------------------------------------------------------

const fs = require("fs");
const path = require("path");
const XLSX = require("xlsx");
const { createClient } = require("@sanity/client");

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------

const EXCEL_FILE = process.env.EXCEL_FILE || "products.xlsx";
const IMAGE_DIR = path.join(__dirname, "product-images");
const IMAGE_EXT = /\.(jpe?g|png|webp|gif|bmp|tiff?)$/i;

// Minimum similarity (0..1) required to accept an image match.
const MIN_MATCH_SCORE = 0.6;

// Words ignored when comparing product names with file names.
const NOISE_WORDS = new Set([
  "mod",
  "modified",
  "copy",
  "image",
  "img",
  "photo",
  "picture",
  "new",
]);

const DRY_RUN =
  process.argv.includes("--dry-run") || process.env.DRY_RUN === "1";

// ---------------------------------------------------------------------------
// Environment (.env.local)
// ---------------------------------------------------------------------------

function loadEnvLocal() {
  const envPath = path.join(__dirname, ".env.local");
  if (!fs.existsSync(envPath)) return;

  for (const rawLine of fs.readFileSync(envPath, "utf8").split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith("#")) continue;

    const eq = line.indexOf("=");
    if (eq === -1) continue;

    const key = line.slice(0, eq).trim();
    let value = line.slice(eq + 1).trim();

    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    if (!(key in process.env)) process.env[key] = value;
  }
}

loadEnvLocal();

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

if (!projectId || !dataset) {
  console.error(
    "Missing NEXT_PUBLIC_SANITY_PROJECT_ID / NEXT_PUBLIC_SANITY_DATASET in .env.local"
  );
  process.exit(1);
}

if (!process.env.SANITY_API_TOKEN) {
  console.warn(
    "⚠ No SANITY_API_TOKEN found. Uploads/patches will fail if the dataset is not public-writable.\n"
  );
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: "2023-05-03",
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

// ---------------------------------------------------------------------------
// Name helpers
// ---------------------------------------------------------------------------

function normalize(str) {
  return String(str || "")
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/['"`]/g, "")
    .replace(/[^a-z0-9\u0600-\u06FF]+/g, " ")
    .trim();
}

function tokenize(str) {
  return normalize(str)
    .split(/\s+/)
    .filter((token) => token && !NOISE_WORDS.has(token));
}

// Dice coefficient over token sets.
function similarity(aTokens, bTokens) {
  const a = new Set(aTokens);
  const b = new Set(bTokens);
  if (!a.size || !b.size) return 0;

  let intersection = 0;
  for (const token of a) if (b.has(token)) intersection += 1;

  return (2 * intersection) / (a.size + b.size);
}

// Removes standalone "mod"/"modified" words from a product name.
function stripModifierWords(name) {
  return String(name || "")
    .split(/\s+/)
    .filter((word) => !/^(mod|modified)$/i.test(word))
    .join(" ")
    .replace(/\s{2,}/g, " ")
    .trim();
}

function hasModifierWord(name) {
  return /\b(mod|modified)\b/i.test(String(name || ""));
}

function slugify(name) {
  const base = String(name || "")
    .trim()
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[\u064B-\u0652]/g, "")
    .replace(/[^\p{L}\p{N}]+/gu, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-")
    .slice(0, 96);

  return base || "product";
}

function contentTypeFor(file) {
  const ext = path.extname(file).toLowerCase();
  if (ext === ".png") return "image/png";
  if (ext === ".webp") return "image/webp";
  if (ext === ".gif") return "image/gif";
  return "image/jpeg";
}

// ---------------------------------------------------------------------------
// Data loading
// ---------------------------------------------------------------------------

function readProducts() {
  const excelPath = path.join(__dirname, EXCEL_FILE);
  if (!fs.existsSync(excelPath)) {
    console.error(`Excel file not found: ${excelPath}`);
    process.exit(1);
  }

  const workbook = XLSX.readFile(excelPath);
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  const rows = XLSX.utils.sheet_to_json(sheet, {
    header: "A",
    raw: false,
    defval: "",
  });

  const products = [];
  const skipped = [];

  rows.slice(1).forEach((row, index) => {
    const rowNumber = index + 2;
    const name = String(row.A || "").trim();

    if (!name) return; // ignore fully blank rows

    if (/remove/i.test(name)) {
      skipped.push({ rowNumber, name });
      return;
    }

    products.push({ rowNumber, name });
  });

  return { products, skipped };
}

function readImages() {
  if (!fs.existsSync(IMAGE_DIR)) {
    console.error(`Image folder not found: ${IMAGE_DIR}`);
    process.exit(1);
  }

  return fs
    .readdirSync(IMAGE_DIR)
    .filter((file) => IMAGE_EXT.test(file))
    .map((file) => ({
      file,
      fullPath: path.join(IMAGE_DIR, file),
      tokens: tokenize(path.parse(file).name),
    }));
}

// Unique greedy assignment: one image per product, one product per image.
function matchImages(products, images) {
  const candidates = [];

  for (const product of products) {
    const productTokens = tokenize(product.name);

    for (const image of images) {
      const score = similarity(productTokens, image.tokens);
      if (score >= MIN_MATCH_SCORE) {
        candidates.push({ product, image, score });
      }
    }
  }

  candidates.sort((a, b) => b.score - a.score);

  const usedProducts = new Set();
  const usedImages = new Set();
  const matches = new Map();

  for (const candidate of candidates) {
    if (usedProducts.has(candidate.product.name)) continue;
    if (usedImages.has(candidate.image.file)) continue;

    usedProducts.add(candidate.product.name);
    usedImages.add(candidate.image.file);
    matches.set(candidate.product.name, candidate);
  }

  return matches;
}

async function fetchSanityProducts() {
  return client.fetch(
    `*[_type == "product" && !(_id in path("drafts.**"))]{
      _id,
      name,
      slug,
      isHidden,
      "imageAssetId": image.asset->_id,
      "imageFilename": image.asset->originalFilename
    }`
  );
}

// Finds every Sanity document belonging to an Excel product name.
function findDocuments(productName, targetName, docs) {
  const rawNorm = normalize(productName);
  const targetNorm = normalize(targetName);

  // 1) Exact name match (original or "mod"-stripped name).
  let matched = docs.filter((doc) => {
    const docNorm = normalize(doc.name);
    return docNorm === rawNorm || docNorm === targetNorm;
  });

  // 2) Fall back to slug match.
  if (!matched.length) {
    const rawSlug = slugify(productName);
    const targetSlug = slugify(targetName);
    matched = docs.filter(
      (doc) =>
        doc.slug &&
        (doc.slug.current === rawSlug || doc.slug.current === targetSlug)
    );
  }

  // 3) Last resort: strong fuzzy match against existing names.
  if (!matched.length) {
    let best = null;
    for (const doc of docs) {
      if (!doc.name) continue;
      const score = similarity(tokenize(productName), tokenize(doc.name));
      if (!best || score > best.score) best = { doc, score };
    }
    if (best && best.score >= 0.9) matched = [best.doc];
  }

  return matched;
}

// ---------------------------------------------------------------------------
// Sanity operations
// ---------------------------------------------------------------------------

async function uploadImage(image) {
  if (DRY_RUN) {
    return { assetId: "dry-run", assetRef: "dry-run", dryRun: true };
  }

  const asset = await client.assets.upload("image", fs.createReadStream(image.fullPath), {
    filename: image.file,
    contentType: contentTypeFor(image.file),
  });

  return { assetId: asset._id, assetRef: asset._id, dryRun: false };
}

async function patchDocument(doc, fields) {
  if (DRY_RUN) return;
  await client.patch(doc._id).set(fields).commit();
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  console.log(`Excel : ${EXCEL_FILE}`);
  console.log(`Images: ./product-images`);
  console.log(DRY_RUN ? "\n*** DRY RUN - nothing will be written ***\n" : "");

  const { products, skipped } = readProducts();
  const images = readImages();

  console.log(`Products (after skipping): ${products.length}`);
  console.log(`Skipped rows: ${skipped.length}`);
  console.log(`Image files: ${images.length}`);

  if (skipped.length) {
    console.log("\n--- SKIPPED ROWS (contain 'remove') ---");
    skipped.forEach((s) => console.log(`  row ${s.rowNumber}: ${s.name}`));
  }

  const matches = matchImages(products, images);

  console.log("\n--- IMAGE MATCHES ---");
  for (const product of products) {
    const match = matches.get(product.name);
    if (match) {
      console.log(
        `  ✓ row ${product.rowNumber}: ${product.name}\n` +
          `      -> ${match.image.file} (score ${match.score.toFixed(3)})`
      );
    } else {
      console.log(`  ✗ row ${product.rowNumber}: ${product.name} -> NO IMAGE`);
    }
  }

  const docs = await fetchSanityProducts();
  console.log(`\nSanity product documents: ${docs.length}`);

  const stats = {
    uploaded: 0,
    wouldUpload: 0,
    reused: 0,
    hidden: 0,
    shown: 0,
    renamed: 0,
    patchedDocs: 0,
    noDocument: 0,
    failed: 0,
  };

  console.log("\n--- PROCESSING ---");

  for (const product of products) {
    const match = matches.get(product.name);
    const targetName = hasModifierWord(product.name)
      ? stripModifierWords(product.name)
      : product.name;

    const matchedDocs = findDocuments(product.name, targetName, docs);

    if (!matchedDocs.length) {
      stats.noDocument += 1;
      console.log(`  ✗ row ${product.rowNumber}: no Sanity document for "${product.name}"`);
      continue;
    }

    // Rename first (applies whether or not an image was found).
    if (targetName !== product.name) {
      for (const doc of matchedDocs) {
        if (doc.name !== targetName) {
          await patchDocument(doc, { name: targetName });
          doc.name = targetName;
          stats.renamed += 1;
        }
      }
      console.log(`  ↻ row ${product.rowNumber}: renamed to "${targetName}"`);
    }

    if (!match) {
      // No image -> hide every matching document.
      for (const doc of matchedDocs) {
        await patchDocument(doc, { isHidden: true });
        doc.isHidden = true;
        stats.patchedDocs += 1;
      }
      stats.hidden += 1;
      continue;
    }

    // Reuse an already-uploaded asset with the same filename when possible.
    const existing = matchedDocs.find(
      (doc) =>
        doc.imageAssetId &&
        doc.imageFilename &&
        doc.imageFilename.toLowerCase() === match.image.file.toLowerCase()
    );

    let assetId;
    let assetRef;

    if (existing) {
      assetId = existing.imageAssetId;
      assetRef = existing.imageAssetId;
      stats.reused += 1;
      console.log(`  ↩ row ${product.rowNumber}: reusing existing asset for "${match.image.file}"`);
    } else {
      try {
        const uploaded = await uploadImage(match.image);
        assetId = uploaded.assetId;
        assetRef = uploaded.assetRef;
        if (uploaded.dryRun) stats.wouldUpload += 1;
        else stats.uploaded += 1;
      } catch (error) {
        stats.failed += 1;
        console.log(`  ✗ row ${product.rowNumber}: upload failed - ${error.message}`);
        continue;
      }
    }

    for (const doc of matchedDocs) {
      await patchDocument(doc, {
        image: {
          _type: "image",
          asset: { _type: "reference", _ref: assetRef },
        },
        isHidden: false,
      });
      doc.imageAssetId = assetId;
      doc.imageFilename = match.image.file;
      doc.isHidden = false;
      stats.patchedDocs += 1;
    }

    stats.shown += 1;

    if (matchedDocs.length > 1) {
      console.log(
        `  ! row ${product.rowNumber}: ${matchedDocs.length} duplicate documents patched`
      );
    }
  }

  console.log("\n=== SUMMARY ===");
  console.log(`Products with image (isHidden=false): ${stats.shown}`);
  console.log(`Products without image (isHidden=true): ${stats.hidden}`);
  console.log(`Images uploaded: ${stats.uploaded}`);
  if (DRY_RUN) console.log(`Images that WOULD be uploaded: ${stats.wouldUpload}`);
  console.log(`Images reused: ${stats.reused}`);
  console.log(`Names updated: ${stats.renamed}`);
  console.log(`Documents patched: ${stats.patchedDocs}`);
  console.log(`Products with no Sanity document: ${stats.noDocument}`);
  console.log(`Failures: ${stats.failed}`);
  if (DRY_RUN) console.log("\n(dry run - no changes were written)");
}

if (require.main === module) {
  main().catch((error) => {
    console.error("Fatal error:", error);
    process.exit(1);
  });
}

module.exports = {
  normalize,
  tokenize,
  similarity,
  stripModifierWords,
  hasModifierWord,
  slugify,
  matchImages,
  findDocuments,
};
