const fs = require("fs");
let s = fs.readFileSync("components/Footer.tsx", "utf8");
s = s.replace("متجر مؤسسة مسبار التميز لتقنية المعلومات", "مؤسسة مسبار التميز لتقنية المعلومات");
s = s.replace(
  "جميع الحقوق محفوظة.</p>",
  "جميع الحقوق محفوظة.</p>\n          <p className=\"mt-1\">س.ت: 3450181031 | الرقم الضريبي: 311476091700003</p>"
);
fs.writeFileSync("components/Footer.tsx", s);
console.log("done");
