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

async function run() {
  const products = await client.fetch('*[_type == "product"]{_id, name, description}');
  const remaining = products.filter((x) => !x.description || x.description === "منتج من مسبار");
  console.log("remaining", remaining.length);
  remaining.forEach((x) => console.log(x.name));
}

run().catch((e) => { console.error(e.message); process.exit(1); });
