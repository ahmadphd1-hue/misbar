import Link from "next/link";

export default function LocationPage() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-10 bg-white min-h-screen">
      <h1 className="text-3xl font-black text-slate-900 mb-6">موقعنا والتوصيل</h1>
      
      <div className="text-slate-700 leading-8 space-y-8 text-base">
        {/* العنوان */}
        <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
          <h2 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
            📍 موقع المتجر
          </h2>
          <p className="font-semibold text-lg">مسبار لأنظمة المراقبة</p>
          <p className="text-slate-600 mt-1">طريق الملك فيصل، الروضة، عرعر 73312</p>
          <p className="text-sm text-slate-500 mt-3">
            (يمكنك مراسلتنا عبر الواتساب للحصول على الموقع الدقيق على الخريطة).
          </p>
        </div>

        {/* التوصيل */}
        <div>
          <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
            🚚 سياسة التوصيل
          </h2>
          <ul className="list-disc list-inside space-y-3 mr-2">
            <li>
              <strong>داخل مدينة عرعر:</strong> 
              <br />
              <span className="text-slate-600">يتم التوصيل حتى باب المنزل. (التوصيل مجاني للطلبات فوق 400 ريال).</span>
            </li>
            <li>
              <strong>خارج مدينة عرعر:</strong> 
              <br />
              <span className="text-slate-600">يتم الشحن عبر شركات الشحن المعتمدة (مثل سمسا، أرامكس). يتم الاتفاق على تكلفة الشحن مع العميل عبر الواتساب قبل إتمام الطلب.</span>
            </li>
          </ul>
        </div>
      </div>

      <Link href="/" className="inline-block mt-10 text-blue-600 font-bold hover:underline">
        ← العودة للرئيسية
      </Link>
    </main>
  );
}