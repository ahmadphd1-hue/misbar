const fs = require("fs");
let s = fs.readFileSync("components/Footer.tsx", "utf8");
const old = '          <p>© {new Date().getFullYear()} مؤسسة مسبار التميز لتقنية المعلومات. جميع الحقوق محفوظة.</p>';
const neu = '          <p>© {new Date().getFullYear()} مؤسسة مسبار التميز لتقنية المعلومات. جميع الحقوق محفوظة.</p>\n          <p className="mt-1">س.ت: 3450181031 | الرقم الضريبي: 311476091700003</p>';
if (s.indexOf(old) !== -1) {
  s = s.split(old).join(neu);
  fs.writeFileSync("components/Footer.tsx", s);
  console.log("ok");
} else {
  console.log("no");
}
