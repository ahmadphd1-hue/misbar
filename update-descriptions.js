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

const descriptionMap = {
  "CAMERA HIKVISION 5MP IT3ZE OUTDOOR 40M  BIG": "كاميرا هيكفيجن خارجية بدقة 5 ميجابكسل. توفر رؤية ليلية قوية تصل إلى 40 متر، مع تصميم كبير ومتين مقاوم للعوامل الجوية.",
  "CAMERA HIKVISION IP 5MP 1053G0-I OUTDOOR": "كاميرا هيكفيجن خارجية بدقة 5 ميجابكسل. تقدم صورة نقية وتفاصيل دقيقة، مع خاصية PoE لتوصيل كيبل واحد فقط.",
  "CAMERA HIKVISION IP 2MP 1023G2-LIU OUTDOOR": "كاميرا هيكفيجن خارجية بدقة 2 ميجابكسل. حل اقتصادي وعملي لتأمين مدخل المنزل أو المحل، مع رؤية ليلية ممتازة.",
  "CAMERA HIKVISION IP 6MP 1063G2-LIU OUTDOOR": "كاميرا هيكفيجن خارجية بدقة 6 ميجابكسل. توفر توازناً مثالياً بين الجودة والسعر، مع رؤية ليلية واضحة وتصميم مقاوم للماء.",
  "CAMERA HIKVISION IP 6MP 1163G2-LIU INDOOR": "كاميرا هيكفيجن داخلية بدقة 6 ميجابكسل. توفر صورة واضحة للغاية، مع خاصية اكتشاف الحركة وإرسال تنبيهات للجوال.",
  "CAMERA HIKVISION 8MP 1083G2-LIU OUTDOOR": "كاميرا هيكفيجن خارجية بدقة 8 ميجابكسل. تجمع بين الوضوح الفائق في الليل والنهار، والتصميم المتين المقاوم للعوامل الجوية.",
  "EZVIZ SMART HOME CAMERA H3 OUTDOOR": "كاميرا إزفيز ذكية خارجية. مقاومة للأمطار، تدعم الرؤية الليلية الملونة والتحكم من الجوال، لتطمئن على منزلك من أي مكان.",
  "IMOU RANGER 2 2K": "كاميرا إيمو داخلية متحركة بدقة 2K. تتبع الحركة وتوفر رؤية 360 درجة، مثالية لمراقبة الأطفال أو الحيوانات الأليفة.",
  "DVR IDS-7204HQHI-M1/XT 4CH UPTO 3K/5MP": "جهاز تسجيل 4 قنوات. يوفر دقة عالية (3K/5MP) وسهولة في الإعداد، مثالي لتأمين المنزل بأقل تكلفة وأعلى جودة.",
  "NVR DS-9632NI-M8": "جهاز تسجيل شبكة NVR من هيكفيجن بـ 32 قناة. مثالي للأنظمة الكبيرة، يدعم دقة عالية وسعة تخزين كبيرة.",
  "NVR DS-7608NXI-K1/8PPUHK SAUDI MADE": "جهاز تسجيل شبكة NVR من هيكفيجن مصنوع في السعودية، يدعم 8 قنوات مع PoE لسهولة التوصيل والتركيب.",
  "HIKVISION AUDIOKIT DS-QAE0KA60206-4": "طقم صوت هيكفيجن. لتوزيع الصوت بوضوح في المحلات والمساجد والمنازل، مع تحكم كامل في مستوى الصوت.",
  "HIKVISION IP VIDEO INTERCOM KIT DS-KIS610P": "طقم انتركم مرئي هيكفيجن. يسمح لك برؤية والتحدث مع الزوار من داخل المنزل بأمان، مع جودة صورة عالية.",
  "HIKVISION VILLA ANALOG KIT DS-KIS212 (B)": "طقم انتركم أنالوج للفلل من هيكفيجن. حل عملي وآمن للتحكم في دخول الزوار، بتصميم متين وسهل الاستخدام.",
  "HIVISION ETHERNET DS-3E1510P-EI SWITCH 8 PORTS": "سويتش شبكة هيكفيجن بـ 8 منافذ. يدعم تقنية PoE لتوصيل الكاميرات بكيبل واحد فقط للبيانات والكهرباء، مثالي للأنظمة المتوسطة.",
  "CABLE FUJISTAR FS-CAT-6 306 (WHITE)": "كيبل شبكي Cat6 فجيستار بطول 306 متر. عالي الجودة للتمديدات داخلية وخارجية، يدعم سرعات عالية واستقرار في الاتصال.",
  "CABLE FUJISTAR FS-CAT-6 4 PAIRS WATER PROOF": "كيبل شبكي Cat6 مقاوم للماء بـ 4 أزواج. مثالي للتمديدات الخارجية وحماية التوصيلات من الرطوبة.",
  "STAR BRO TV STAND 14\"*42: SB319": "حامل تلفزيون ستار برو متين وقوي. مناسب للعديد من أحجام الشاشات، بتصميم أنيق وسهل التركيب.",
  "ADAPTER FUJISTAR SM-6007 12V": "محول طاقة فوجيستار 12 فولت. مثالي لتشغيل الكاميرات وأجهزة المراقبة، بجودة عالية وأمان تام.",
  "CABLE S TAR BRO CAT-6 15M": "كيبل شبكي Cat6 بطول 15 متر. جاهز للاستخدام مباشرة، يوفر اتصالاً مستقرًا وسريعًا.",
  "CABLE FUJISTAR CAT-6 FS-OPC-70B 70M": "كيبل شبكي Cat6 فجيستار بطول 70 متر. مثالي للتمديدات المتوسطة في أنظمة المراقبة والشبكات.",
  "ULTRA GOLD SINGLE LNBF UG-101": "راس استقبال قمر صناعي أحادي من الترا جولد. استقبال قوي ونقي للقنوات مع تقليل التشويش.",
  "MICRODIGIT HDMI 4 PORT SPLITTER MD4K104": "موزع HDMI بـ 4 منافذ من مايكرو ديجيت. يوزع إشارة HDMI إلى 4 شاشات في نفس الوقت، يدعم 4K.",
  "HONTON SOLER CAMERA S45": "كاميرا شمسية ذكية من هانتون. تعمل بالطاقة الشمسية، مثالية للمناطق النائية بدون كهرباء، مع مراقبة عن بعد.",
  "CAMERA WLL MOUNT STAND BRL30": "حامل جدار لكاميرات المراقبة بطول مناسب. متين وسهل التركيب، يوفر زاوية تثبيت مثالية.",
  "CAMERA WLL MOUNT STAND BRL80": "حامل جدار طويل لكاميرات المراقبة. مثالي لارتفاعات أكبر لتوفير تغطية أوسع للمنطقة المراد مراقبتها.",
  "DVR IDS-7216HUHI-M2/XT 16CH UPTO 8MP": "جهاز تسجيل احترافي يدعم 16 قناة بدقة تصل إلى 8 ميجابكسل. يوفر مرونة عالية للمنشآت الكبيرة ويضمن تسجيلاً واضحاً ومستمراً على مدار الساعة.",
  "CAMERA INSTALLATION AND SERVICES": "خدمة تركيب وصيانة أنظمة المراقبة. يشمل التركيب البرمجة والتشغيل والتدريب من قبل فني متخصص.",
  "CORNING 3M CABLE BY METER": "كيبل كورنينج الأصلي بالياردة/المتر. عالي الجودة للتمديدات الاحترافية لأنظمة المراقبة والشبكات.",
  "PLASTIC DECORE": "اكسسوارات التزيين البلاستيكية للتركيبات. تستخدم لتغليف الكابلات وإضفاء مظهر أنيق ونظيف.",
  "CAMERA HIKVISION 3K LFS OUTDOOR BIG 40M": "كاميرا هيكفيجن خارجية كبيرة بدقة 3K. توفر رؤية ليلية استثنائية تصل إلى 40 متر، مثالية للمساحات المفتوحة والمستودعات الكبيرة.",
  "CAMERA DAHUA 5MP B1A51N OUTDOOR 20M": "كاميرا داهوا خارجية بدقة 5 ميجابكسل. توفر رؤية ليلية واضحة حتى 20 متر، وهيكل قوي يتحمل أشعة الشمس والأمطار.",
  "CAMERA HIKVISION IP 5MP 53G0-I INDOOR H.265": "كاميرا هيكفيجن داخلية بدقة 5 ميجابكسل. تدعم تقنية ضغط H.265 لتوفير مساحة التخزين، مع وضوح عالي في المراقبة الداخلية.",
  "CAMERA HIKVISION IP 2MP 1123G2-LIU INDOOR": "كاميرا هيكفيجن داخلية اقتصادية بدقة 2 ميجابكسل. خيار ممتاز للمراقبة اليومية، مع دعم الرؤية الليلية والاتصال بالشبكة.",
  "EZVIZ SMART HOME CAMERA H6C PRO 2K": "كاميرا إزفيز ذكية بدقة 2K. تتميز بالتحكم الآلي (Pan/Tilt) والرؤية الليلية الملونة، لتمنحك تغطية كاملة بجودة عالية.",
  "HIKVISION IP VIDEO INTERCOM KIT DS-KIS603-P": "طقم انتركم مرئي هيكفيجن. حل أمني ذكي للتحكم في دخول الزوار، بشاشة داخلية عالية الوضوح وتصميم عصري.",
  "HIKVISION ETHERNET DS-3E1505P-EI/M SWITCH 4 PORTS": "سويتش شبكة هيكفيجن بـ 4 منافذ PoE. مثالي للأنظمة الصغيرة التي تتطلب توصيلاً مستقراً وآمناً للكاميرات.",
  "ROUTER TP LINK AC750 DUAL BAND WIFI": "راوتر تي بي لينك ثنائي النطاق. يوفر تغطية واي فاي واسعة وسرعة عالية للأجهزة الذكية وأنظمة المراقبة المتصلة بالشبكة.",
};

async function run() {
  try {
    const products = await client.fetch('*[_type == "product"]{_id, name, description}');
    console.log(`Found ${products.length} products`);
    for (const product of products) {
      const desc = descriptionMap[product.name];
      if (desc && (!product.description || product.description.trim() === "منتج من مسبار" || product.description.trim() === "")) {
        await client.patch(product._id).set({ description: desc }).commit();
        console.log(`Updated: ${product.name}`);
      }
    }
    console.log("Done");
  } catch (err) {
    console.error("Error:", err.message);
  }
}

run();
