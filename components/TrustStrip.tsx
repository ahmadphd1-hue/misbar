export default function TrustStrip() {
  return (
    <section className="max-w-7xl mx-auto px-4 mt-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-5 py-6 border-y border-line text-sm">
        <div className="flex items-center gap-3">
          <span className="w-10 h-10 rounded-full bg-fog grid place-items-center">🚚</span>
          <div>
            <b className="block">توصيل مجاني</b>
            <span className="text-sub text-xs">فوق 400 ريال</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-10 h-10 rounded-full bg-fog grid place-items-center">🧾</span>
          <div>
            <b className="block">شامل الضريبة</b>
            <span className="text-sub text-xs">أسعار نهائية</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-10 h-10 rounded-full bg-fog grid place-items-center">💬</span>
          <div>
            <b className="block">دعم واتساب</b>
            <span className="text-sub text-xs">نرد عليك مباشرة</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-10 h-10 rounded-full bg-fog grid place-items-center">📍</span>
          <div>
            <b className="block">متجر في عرعر</b>
            <span className="text-sub text-xs">خدمة محلية</span>
          </div>
        </div>
      </div>
    </section>
  );
}
