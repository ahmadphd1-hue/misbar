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

const nameMap = {
  "DVR-IDS 7216HQHI-M1/XT UPTO 3K/5MP": "جهاز تسجيل كاميرات (DVR) هيكفيجن 16 قناة - يدعم حتى 3K ميجابكسل",
  "HIKVISION AUDIOKIT DS-QAEOKA60206-4": "طقم صوتيات هيكفيجن",
  "CAMERA HIKVISION 3K LPFS OUTDOOR SMALL 20M": "كاميرا مراقبة هيكفيجن خارجية صغيرة بدقة 3K مدى 20 متر",
  "CAMERA HIKVISION 3K LPFS INDOOR 20M": "كاميرا مراقبة هيكفيجن داخلية بدقة 3K مدى 20 متر",
  "8MP Outdoor Camera (60m)": "كاميرا مراقبة هيكفيجن خارجية 8 ميجابكسل مدى 60 متر",
  "CAMERA HIKVISION 2MP EXIPF OUTDOOR 20M": "كاميرا مراقبة هيكفيجن خارجية 2 ميجابكسل مدى 20 متر",
  "CAMERA HIKVISION 2MP EXIPF INDOOR 20M": "كاميرا مراقبة هيكفيجن داخلية 2 ميجابكسل مدى 20 متر",
};

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
  for (const product of products) {
    const newName = nameMap[product.name];
    if (newName) {
      const newSlug = slugifyArabic(newName);
      await client
        .patch(product._id)
        .set({ name: newName, slug: { _type: "slug", current: newSlug } })
        .commit();
      console.log("Updated:", product.name, "->", newName);
    }
  }
  console.log("Done");
}

run().catch((e) => {
  console.error(e.message);
  process.exit(1);
});
