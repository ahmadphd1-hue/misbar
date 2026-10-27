import Link from "next/link";

export default function DualBanners() {
  return (
    <section id="help" className="max-w-7xl mx-auto px-4 mt-16 grid md:grid-cols-2 gap-4">
      <div className="rounded-[28px] bg-ink text-white p-8 md:p-10">
        <p className="text-white/60 text-sm font-semibold">استشارة مجانية</p>
        <h3 className="mt-2 text-2xl md:text-3xl font-extrabold leading-snug">لا تعرف أي نظام يناسبك؟</h3>
        <p className="mt-3 text-white/70 leading-7 text-sm md:text-base">أخبرنا بمساحة المكان وعدد الكاميرات، ونرشح لك الأنسب.</p>
        <a href="https://wa.me/966532999563" className="mt-6 inline-grid place-items-center h-11 px-6 rounded-full bg-white text-ink font-bold text-sm">
          ابدأ المحادثة
        </a>
      </div>
      <div className="rounded-[28px] bg-fog p-8 md:p-10">
        <p className="text-sub text-sm font-semibold">خدماتنا</p>
        <h3 className="mt-2 text-2xl md:text-3xl font-extrabold leading-snug">من الاختيار إلى التشغيل</h3>
        <p className="mt-3 text-sub leading-7 text-sm md:text-base">تعرّف على خدمات المتجر ومواقع التوصيل وسياسة الاستبدال والاسترجاع.</p>
        <Link href="/services" className="mt-6 inline-grid place-items-center h-11 px-6 rounded-full bg-ink text-white font-bold text-sm">
          اكتشف الخدمات
        </Link>
      </div>
    </section>
  );
}
