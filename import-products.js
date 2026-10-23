// import-products.js
const path = require("path");
const fs = require("fs");
const XLSX = require("xlsx");
const { createClient } = require("@sanity/client");

// اسم ملف الإكسل (تأكد من الاسم بالضبط)
const EXCEL_FILE = "Products.xlsx"; 
const DEFAULT_DESCRIPTION = "منتج من مسبار";

// قراءة ملف .env.local
function loadEnvLocal() {
  const envPath = path.join(__dirname, ".env.local");
  if (!fs.existsSync(envPath)) return;

  const contents = fs.readFileSync(envPath, "utf8");
  for (const rawLine of contents.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith("#")) continue;
    const eq = line.indexOf("=");
    if (eq === -1) continue;
    const key = line.slice(0, eq).trim();
    let value = line.slice(eq + 1).trim();
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    if (!(key in process.env)) process.env[key] = value;
  }
}
loadEnvLocal();

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

if (!projectId || !dataset) {
  console.error("Missing NEXT_PUBLIC_SANITY_PROJECT_ID or NEXT_PUBLIC_SANITY_DATASET in .env.local");
  process.exit(1);
}

// الاتصال بـ Sanity مع التوكن (مهم جداً للرفع)
const client = createClient({
  projectId,
  dataset,
  apiVersion: "2023-05-03",
  useCdn: false,
  token: process.env.SANITY_API_TOKEN, 
});

function mapCategory(rawCategory) {
  const value = String(rawCategory || "").trim().toLowerCase();
  if (value.includes("ip")) return "ip";
  if (value.includes("camera")) return "cameras";
  return "accessories";
}

function slugify(name) {
  const base = String(name || "").trim().toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "") 
    .replace(/[\u064B-\u0652]/g, "") 
    .replace(/[^\p{L}\p{N}]+/gu, "-") 
    .replace(/^-+|-+$/g, "") 
    .replace(/-{2,}/g, "-") 
    .slice(0, 96);
  return base || "product";
}

function parsePrice(rawPrice) {
  if (rawPrice === null || rawPrice === undefined) return null;
  const cleaned = String(rawPrice).replace(/[^\d.-]/g, "").trim();
  if (!cleaned) return null;
  const value = Number(cleaned);
  return Number.isFinite(value) ? value : null;
}

function uniqueSlug(baseSlug, usedSlugs) {
  let slug = baseSlug;
  let counter = 2;
  while (usedSlugs.has(slug)) {
    slug = `${baseSlug}-${counter}`;
    counter += 1;
  }
  usedSlugs.add(slug);
  return slug;
}

async function main() {
  const excelPath = path.join(__dirname, EXCEL_FILE);
  if (!fs.existsSync(excelPath)) {
    console.error(`Excel file not found: ${excelPath}`);
    process.exit(1);
  }

  console.log(`Reading: ${excelPath}`);
  const workbook = XLSX.readFile(excelPath);
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  const rows = XLSX.utils.sheet_to_json(sheet, { header: "A", raw: false, defval: "" });

  const dataRows = rows.slice(1);
  console.log(`Found ${dataRows.length} data row(s).\n`);

  let uploaded = 0;
  let skipped = 0;
  const usedSlugs = new Set();

  for (let i = 0; i < dataRows.length; i++) {
    const row = dataRows[i];
    const rowNumber = i + 2;
    const name = String(row.A || "").trim();
    const rawCategory = row.C;
    const rawDescription = String(row.D || "").trim();
    const rawLanguage = String(row.F || "").trim();
    const rawPrice = row.G;

    if (!name) {
      skipped += 1;
      continue;
    }

    const price = parsePrice(rawPrice);
    if (price === null) {
      skipped += 1;
      console.log(`- Row ${rowNumber}: skipped ("${name}") - invalid price.`);
      continue;
    }

    const category = mapCategory(rawCategory);
    const language = rawLanguage || "ar";
    const description = rawDescription || DEFAULT_DESCRIPTION;
    const slug = uniqueSlug(slugify(name), usedSlugs);

    const doc = {
      _type: "product",
      name,
      slug: { _type: "slug", current: slug },
      price,
      category,
      language,
      description,
    };

    try {
      const created = await client.create(doc);
      uploaded += 1;
      console.log(`✓ Uploaded [${uploaded}]: ${name}`);
    } catch (error) {
      skipped += 1;
      console.error(`✗ Failed to upload "${name}":`, error.message);
    }
  }

  console.log(`\nDone. Uploaded: ${uploaded}, Skipped/Failed: ${skipped}, Total rows: ${dataRows.length}`);
}

main().catch((error) => {
  console.error("Fatal error:", error);
  process.exit(1);
});