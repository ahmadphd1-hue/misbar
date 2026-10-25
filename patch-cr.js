const fs = require("fs");
const p = "app/info/privacy/page.tsx";
let s = fs.readFileSync(p, "utf8");
const old = `          <ul className="list-disc list-inside space-y-1 mr-2">
            <li>اسم المؤسسة: مؤسسة مؤسسة مسبار التميز لتقنية المعلومات.</li>
            <li>النشاط: بيع وتركيب كاميرات المراقبة والأنظمة الأمنية.</li>
            <li>العنوان: طريق الملك فيصل، الروضة، عرعر 73312، المملكة العربية السعودية.</li>
            <li>رقم الجوال: 0532999563</li>
          </ul>`;
const neu = `          <ul className="list-disc list-inside space-y-1 mr-2">
            <li>اسم المؤسسة: مؤسسة مسبار التميز لتقنية المعلومات.</li>
            <li>النشاط: بيع وتركيب كاميرات المراقبة والأنظمة الأمنية.</li>
            <li>العنوان: طريق الملك فيصل، الروضة، عرعر 73312، المملكة العربية السعودية.</li>
            <li>رقم الجوال: 0532999563</li>
            <li>رقم السجل التجاري: 3450181031</li>
            <li>الرقم الضريبي: 311476091700003</li>
          </ul>`;
if (s.indexOf(old) !== -1) {
  s = s.split(old).join(neu);
  fs.writeFileSync(p, s);
  console.log("ok");
} else {
  console.log("no");
}
