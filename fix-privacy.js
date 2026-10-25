const fs = require("fs");
let s = fs.readFileSync("app/info/privacy/page.tsx", "utf8");
s = s.replace("مؤسسة مؤسسة مسبار التميز لتقنية المعلومات", "مؤسسة مسبار التميز لتقنية المعلومات");
s = s.replace(
  "<li>رقم الجوال: 0532999563</li>",
  "<li>رقم الجوال: 0532999563</li>\n            <li>رقم السجل التجاري: 3450181031</li>\n            <li>الرقم الضريبي: 311476091700003</li>"
);
fs.writeFileSync("app/info/privacy/page.tsx", s);
console.log("done");
