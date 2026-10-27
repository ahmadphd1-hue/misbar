import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 bg-fog text-[13px]">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="col-span-2 md:col-span-1">
          <div className="font-extrabold text-xl">مسبار</div>
          <p className="mt-2 text-sub leading-6">كاميرات المراقبة والأنظمة الأمنية في عرعر.</p>
        </div>
        <div>
          <b>المتجر</b>
          <ul className="mt-3 space-y-2 text-sub">
            <li><Link href="/">الرئيسية</Link></li>
            <li><Link href="/category/cameras">كاميرات</Link></li>
            <li><Link href="/category/ip">كاميرات IP</Link></li>
            <li><Link href="/category/accessories">ملحقات</Link></li>
          </ul>
        </div>
        <div>
          <b>معلومات</b>
          <ul className="mt-3 space-y-2 text-sub">
            <li><Link href="/info">من نحن</Link></li>
            <li><Link href="/services">خدماتنا</Link></li>
            <li><Link href="/info/location">موقعنا والتوصيل</Link></li>
          </ul>
        </div>
        <div>
          <b>السياسات</b>
          <ul className="mt-3 space-y-2 text-sub">
            <li><Link href="/info/returns">الاستبدال والاسترجاع</Link></li>
            <li><Link href="/info/privacy">الخصوصية</Link></li>
            <li><Link href="/info/terms">شروط الاستخدام</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="max-w-7xl mx-auto px-4 py-5 text-center">
          <p className="text-sub text-xs">© {new Date().getFullYear()} مؤسسة مسبار التميز لتقنية المعلومات. جميع الحقوق محفوظة.</p>
          <p className="mt-1 text-xs text-slate-500">س.ت: 3450181031 | الرقم الضريبي: 311476091700003</p>
        </div>
      </div>
    </footer>
  );
}
