const { createClient } = require("@sanity/client");
const fs = require("fs");
const path = require("path");

function loadEnv() {
  const envPath = path.join(__dirname, ".env.local");
  const env = fs.readFileSync(envPath, "utf8");
  const m = env.match(/SANITY_API_TOKEN\s*=\s*"([^"]+)"/);
  if (!m) throw new Error("token not found");
  return m[1];
}

const token = loadEnv();
const client = createClient({
  projectId: "nc1cxoz6",
  dataset: "production",
  token,
  apiVersion: "2024-01-01",
  useCdn: false,
});

function slugifyArabic(text) {
  return text
    .toString()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\u0600-\u06FF\u0660-\u0669a-zA-Z0-9\-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");
}

async function run() {
  const products = await client.fetch('*[_type == "product"]{_id,name,slug}');
  const fixes = [
    { match: /AUDIOKIT/i, newName: "طقم صوتيات هيكفيجن" },
    { match: /1083G2/i, newName: "كاميرا مراقبة هيكفيجن خارجية 8 ميجابكسل" },
  ];
  for (const product of products) {
    for (const fix of fixes) {
      if (fix.match.test(product.name) && product.name !== fix.newName) {
        const newSlug = slugifyArabic(fix.newName);
        await client
          .patch(product._id)
          .set({ name: fix.newName, slug: { _type: "slug", current: newSlug } })
          .commit();
        console.log("Updated:", product.name, "->", fix.newName);
      }
    }
  }
  console.log("Done");
}

run().catch((e) => {
  console.error(e.message);
  process.exit(1);
});
