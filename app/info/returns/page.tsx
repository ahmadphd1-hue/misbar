import Link from "next/link";

export default function ReturnsPage() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-10 bg-white min-h-screen">
      <h1 className="text-3xl font-black text-slate-900 mb-6">سياسة الاستبدال والاسترجاع</h1>
      <div className="text-slate-700 leading-8 space-y-4 text-base">
        <p>نحرص في <strong>مسبار</strong> على رضاك التام. يمكنك طلب الاستبدال أو الاسترجاع وفقاً للشروط التالية:</p>
        <ul className="list-disc list-inside space-y-2 mr-2">
          <li>يجب أن يكون المنتج بحالته الأصلية (في تغليفه) ولم يتم استخدامه أو تركيبه.</li>
          <li>الاحتفاظ بالفاتورة الأصلية أو إثبات الشراء.</li>
          <li>تقديم طلب الاسترجاع خلال <strong>3 أيام</strong> من تاريخ الاستلام.</li>
          <li>في حال وجود عيب مصنعي، نتحمل نحن تكاليف الاستبدال بالكامل.</li>
          <li>لا يشمل الاسترجاع المنتجات التي تم تركيبها أو تلفت بسبب سوء الاستخدام.</li>
        </ul>
        <p className="font-bold mt-4 text-slate-900 bg-slate-100 p-4 rounded-lg">
          لطلب استرجاع أو استبدال، يرجى التواصل معنا عبر الواتساب مع إرفاق رقم طلبك وصورة للمنتج.
        </p>
      </div>
      <Link href="/" className="inline-block mt-10 text-blue-600 font-bold hover:underline">
        ← العودة للرئيسية
      </Link>
    </main>
  );
}