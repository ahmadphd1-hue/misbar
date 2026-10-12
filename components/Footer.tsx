export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 mt-12">
      <div className="max-w-7xl mx-auto px-4 py-8 text-center">
        <h2 className="text-xl font-black text-white mb-2">مسبار</h2>
        <p className="text-sm text-slate-400 mb-5">
          كاميرات المراقبة والأنظمة الأمنية
        </p>

        <a
          href="https://wa.me/966532999563"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold text-sm px-6 py-3 rounded-full transition-colors"
        >
          تواصل معنا عبر واتساب
        </a>

        <p className="text-xs text-slate-500 mt-6">
          &copy; {new Date().getFullYear()} متجر مسبار لأنظمة المراقبة. جميع
          الحقوق محفوظة.
        </p>
      </div>
    </footer>
  );
}