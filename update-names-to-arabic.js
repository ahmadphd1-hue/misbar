const { createClient } = require("@sanity/client");
const fs = require("fs");
const path = require("path");

function loadEnv() {
  const envPath = path.join(__dirname, ".env.local");
  if (!fs.existsSync(envPath)) {
    throw new Error(".env.local not found");
  }
  const env = fs.readFileSync(envPath, "utf8");
  const tokenMatch = env.match(/SANITY_API_TOKEN\s*=\s*"([^"]+)"/);
  if (!tokenMatch) {
    throw new Error("SANITY_API_TOKEN not found in .env.local");
  }
  return tokenMatch[1];
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
  "DVR IDS-7216HUHI-M2/XT 16CH UPTO 8MP": "جهاز تسجيل كاميرات (DVR) هيكفيجن 16 قناة - يدعم حتى 8 ميجابكسل",
  "CABLE HDMI DANSAT 1.5M": "كيبل HDMI 1.5 متر",
  "HARD DISK 2TB WD": "هاردسك تخزين داخلي 2 تيرابايت ويسترن ديجيتال (WD)",
  "HARD DISK TOSHIBA 2TB ORIGNAL": "هاردسك تخزين داخلي توشيبا 2 تيرابايت أصلي",
  "CAMERA HIKVISION IP DUAL-LENS 6MP 63G2P-LIUF/SRB": "كاميرا مراقبة IP هيكفيجن عدسة مزدوجة 6 ميجابكسل",
  "HARD DISK 1TB WD": "هاردسك تخزين داخلي 1 تيرابايت ويسترن ديجيتال (WD)",
  "HUAWEI 5G/4G CPE BALONG 500": "راوتر هواوي شبكات 5G/4G",
  "ROUTER TP LINK AC750 DUAL BAND WIFI": "راوتر تبي لنك ثنائي النطاق AC750",
  "HIVISION ETHERNET DS-3E1510P-EI SWITCH 8 PORTS": "سويتش شبكة إيثرنت هيكفيجن 8 منافذ",
  "HIKVISION ETHERNET DS-3E1505P-EI/M SWITCH 4 PORTS": "سويتش شبكة إيثرنت هيكفيجن 4 منافذ",
  "HIKVISION IP VIDEO INTERCOM KIT DS-KIS610P": "نظام انتركوم فيديو IP من هيكفيجن",
  "HIKVISION IP VIDEO INTERCOM KIT DS-KIS603-P": "نظام انتركوم فيديو IP من هيكفيجن",
  "DVR DAHUA DH-XVR5108HS 8CH UPTO 5MP": "جهاز تسجيل كاميرات (DVR) داهوا 8 قناة - يدعم حتى 5 ميجابكسل",
  "HIKVISION AUDIOKIT DS-QAEOKA60206-4": "طقم صوتيات هيكفيجن",
  "DVR IDS-7216HQHI-M1/XT UPTO 3K/5MP": "جهاز تسجيل كاميرات (DVR) هيكفيجن 16 قناة - يدعم حتى 3K ميجابكسل",
  "DVR IDS-7208HTHI-M2/XT 8CH 8MP": "جهاز تسجيل كاميرات (DVR) هيكفيجن 8 قناة - دقة 8 ميجابكسل",
  "DVR IDS-7204HTHI-M1/XT 4CH 8MP": "جهاز تسجيل كاميرات (DVR) هيكفيجن 4 قناة - دقة 8 ميجابكسl",
  "DVR IDS-7208HUHI-M1/XT 8CH UPTO 8MP": "جهاز تسجيل كاميرات (DVR) هيكفيجن 8 قناة - يدعم حتى 8 ميجابكسل",
  "DVR IDS-7204HQHI-M1/XT 4CH UPTO 3K/5MP": "جهاز تسجيل كاميرات (DVR) هيكفيجن 4 قناة - يدعم حتى 3K ميجابكسل",
  "DVR IDS-7208HQHI-M1/XT 8CH UPTO 3K/5MP": "جهاز تسجيل كاميرات (DVR) هيكفيجن 8 قناة - يدعم حتى 3K ميجابكسل",
  "EZVIZ SMART HOME CAMERA H3 OUTDOOR": "كاميرا ايزفيز خارجية H3",
  "IMOU RANGER 2 2K": "كاميرا إيمو رينجر 2 بدقة 2K",
  "CAMERA HIKVISION IP 8MP T83G2-2LI OUTDOOR BIG": "كاميرا مراقبة IP هيكفيجن خارجية كبيرة 8 ميجابكسل",
  "EZVIZ SMART HOME CAMERA H6C PRO 2K": "كاميرا إيزفيز الذكية H6C Pro بدقة 2K",
  "CAMERA HIKVISION IP 6MP 1163G2-LIU INDOOR": "كاميرا مراقبة IP هيكفيجن داخلية 6 ميجابكسل",
  "CAMERA HIKVISION IP 8MP 1083G2-LIU OUTDOOR": "كاميرا مراقبة IP هيكفيجن خارجية 8 ميجابكسل",
  "CAMERA HIKVISION IP 2MP 1123G2-LIU INDOOR": "كاميرا مراقبة IP هيكفيجن داخلية 2 ميجابكسل",
  "CAMERA HIKVISION IP 6MP 1063G2-LIU OUTDOOR": "كاميرا مراقبة IP هيكفيجن خارجية 6 ميجابكسل",
  "CAMERA HIKVISION IP 5MP 1053G0-I OUTDOOR": "كاميرا مراقبة IP هيكفيجن خارجية 5 ميجابكسل",
  "CAMERA HIKVISION IP 2MP 1023G2-LIU OUTDOOR": "كاميرا مراقبة IP هيكفيجن خارجية 2 ميجابكسل",
  "CAMERA DAHUA T1A51N-U INDOOR 25M": "كاميرا مراقبة داهوا داخلية 25 متر",
  "CAMERA HIKVISION IP 5MP 53G0-I INDOOR H.265": "كاميرا مراقبة IP هيكفيجن داخلية 5 ميجابكسل",
  "CAMERA HIKVISION 5MP COLOR VU OUTDOOR HFT-F": "كاميرا مراقبة هيكفيجن خارجية 5 ميجابكسل ملونة",
  "CAMERA DAHUA 5MP B1A51N OUTDOOR 20M": "كاميرا مراقبة داهوا خارجية 5 ميجابكسل 20 متر",
  "CAMERA HIKVISION 4K LPF INDOOR 20M": "كاميرا مراقبة هيكفيجن داخلية بدقة 4K مدى 20 متر",
  "CAMERA HIKVISION 3K LPFS COLOR VU OUTDOOR": "كاميرا مراقبة هيكفيجن خارجية ملونة بدقة 3K",
  "CAMERA HIKVISION 3K LFS OUTDOOR BIG 40M": "كاميرا مراقبة هيكفيجن خارجية كبيرة بدقة 3K مدى 40 متر",
  "CAMERA HIKVISION 4K LPF OUTDOOR SMALL 20M": "كاميرا مراقبة هيكفيجن خارجية صغيرة بدقة 4K مدى 20 متر",
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
  try {
    const products = await client.fetch(`*[_type == "product"]{_id, name, slug}`);
    console.log(`Found ${products.length} products`);

    for (const product of products) {
      const oldName = product.name;
      const newName = nameMap[oldName];

      if (newName) {
        const newSlug = product.slug?.current || slugifyArabic(newName);
        await client
          .patch(product._id)
          .set({
            name: newName,
            slug: { _type: "slug", current: newSlug },
          })
          .commit();

        console.log(`Updated: ${oldName} -> ${newName}`);
      }
    }
    console.log("Done");
  } catch (err) {
    console.error("Error:", err.message);
  }
}

run();
