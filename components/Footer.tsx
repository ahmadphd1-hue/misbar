import Link from "next/link";

const storeLinks = [
  { href: "/", label: "الرئيسية" },
  { href: "/category/cameras", label: "كاميرات" },
  { href: "/category/ip", label: "كاميرات IP" },
  { href: "/category/accessories", label: "ملحقات" },
];

const infoLinks = [
  { href: "/services", label: "خدماتنا" }, // <--- السطر الجديد
  { href: "/info", label: "من نحن" },
  { href: "/info/returns", label: "سياسة الاستبدال والاسترجاع" },
  { href: "/info/location", label: "موقعنا والتوصيل" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 mt-12">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-right">
          
          {/* العلامة التجارية */}
          <div>
            <h2 className="text-2xl font-black text-white mb-2">مسبار</h2>
            <p className="text-sm text-slate-400 leading-7">
              كاميرات المراقبة والأنظمة الأمنية في عرعر.
            </p>
            <a
              href="https://wa.me/966532999563"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold text-sm px-6 py-3 rounded-full transition-colors"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 18.15h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.2 8.2 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.86.85-.86 2.07 0 1.21.89 2.39 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28z" />
              </svg>
              تواصل معنا عبر واتساب
            </a>
          </div>

          {/* روابط المتجر */}
          <nav aria-label="روابط المتجر">
            <h3 className="text-base font-bold text-white mb-4">المتجر</h3>
            <ul className="space-y-3">
              {storeLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* معلومات */}
          <nav aria-label="معلومات">
            <h3 className="text-base font-bold text-white mb-4">معلومات</h3>
            <ul className="space-y-3">
              {infoLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-6 text-center">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} متجر مسبار لأنظمة المراقبة. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
}