import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-10 bg-white min-h-screen">
      <h1 className="text-3xl font-black text-slate-900 mb-6">سياسة الخصوصية</h1>
      <div className="text-slate-700 leading-8 space-y-6 text-base">
        
        <p>نحن في <strong>مسبار لأنظمة المراقبة</strong> نحترم خصوصيتك ونلتزم بحماية بياناتك الشخصية وفقاً لنظام حماية البيانات الشخصية في المملكة العربية السعودية.</p>

        <div>
          <h2 className="text-xl font-bold text-slate-900 mb-2">١. البيانات التي نجمعها</h2>
          <p>عند إتمام طلبك عبر الموقع، نجمع البيانات التالية:</p>
          <ul className="list-disc list-inside space-y-1 mr-2">
            <li>الاسم الكامل.</li>
            <li>رقم الجوال.</li>
            <li>المدينة (لأغراض التوصيل).</li>
            <li>تفاصيل الطلب (المنتجات المطلوبة والكمية).</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-900 mb-2">٢. كيف نستخدم بياناتك</h2>
          <p>نستخدم بياناتك فقط للأغراض التالية:</p>
          <ul className="list-disc list-inside space-y-1 mr-2">
            <li>تجهيز طلبك وتوصيله إليك.</li>
            <li>التواصل معك بخصوص الطلب (عبر الواتساب).</li>
            <li>تحسين جودة خدماتنا.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-900 mb-2">٣. مشاركة البيانات</h2>
          <p>نحن لا نبيع بياناتك. قد نشاركها مع:</p>
          <ul className="list-disc list-inside space-y-1 mr-2">
            <li>شركة التوصيل (لتوصيل طلبك).</li>
            <li>مزودي الخدمات التقنية (مثل استضافة الموقع وقاعدة البيانات) لتشغيل الموقع فقط.</li>
            <li>الجهات الحكومية إذا طلبت ذلك بموجب النظام.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-900 mb-2">٤. حماية البيانات ومدة الاحتفاظ</h2>
          <p>نتخذ إجراءات أمنية مناسبة لحماية بياناتك. نحتفظ ببياناتك للمدة اللازمة لتنفيذ الطلب، أو للمدة التي يطلبها النظام (مثل الالتزامات الضريبية).</p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-900 mb-2">٥. حقوقك</h2>
          <p>وفقاً للنظام، يحق لك:</p>
          <ul className="list-disc list-inside space-y-1 mr-2">
            <li>طلب نسخة من بياناتك المحفوظة لدينا.</li>
            <li>طلب تصحيح أي بيانات غير دقيقة.</li>
            <li>طلب حذف بياناتك (إذا لم يكن هناك التزام نظامي بالاحتفاظ بها).</li>
          </ul>
          <p className="mt-2">لممارسة أي من هذه الحقوق، تواصل معنا عبر الواتساب.</p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-900 mb-2">٦. التواصل</h2>
          <p>لأي استفسار بخصوص الخصوصية، تواصل معنا عبر:</p>
          <p className="font-semibold text-blue-700">واتساب: 0532999563</p>
        </div>

        <p className="text-xs text-slate-500 mt-8 pt-4 border-t">آخر تحديث: {new Date().toLocaleDateString('ar-SA')}</p>
      </div>

      <Link href="/" className="inline-block mt-10 text-blue-600 font-bold hover:underline">
        ← العودة للرئيسية
      </Link>
    </main>
  );
}