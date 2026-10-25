const fs = require("fs");
let s = fs.readFileSync("app/info/privacy/page.tsx", "utf8");
const start = s.indexOf("<p>");
const end = s.indexOf("</p>", start) + 4;
const replacement = "<p>\n          تلتزم مؤسسة مسبار التميز لتقنية المعلومات بحماية خصوصية زوارها وعملائها، وتطبق أحكام نظام حماية البيانات الشخصية في المملكة العربية السعودية.\n        </p>";
s = s.slice(0, start) + replacement + s.slice(end);
fs.writeFileSync("app/info/privacy/page.tsx", s);
console.log("done");
