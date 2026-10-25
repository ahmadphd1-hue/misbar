import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-10 bg-white min-h-screen">
      <h1 className="text-3xl font-black text-slate-900 mb-6">شروط الاستخدام والأحكام</h1>
      <div className="text-slate-700 leading-8 space-y-6 text-base">
        
        <p>مرحباً بك في <strong>متجر مؤسسة مسبار التميز لتقنية المعلومات</strong>. باستخدامك لهذا الموقع أو إتمام أي طلب، فإنك توافق على الشروط والأحكام التالية. نرجو قراءتها بعناية.</p>

        <div>
          <h2 className="text-xl font-bold text-slate-900 mb-2">١. طبيعة الخدمة</h2>
          <p>مؤسسة مسبار التميز لتقنية المعلومات هي متجر متخصص في بيع وتركيب كاميرات المراقبة والأنظمة الأمنية. لدينا فرع في مدينة عرعر، ونوفر خدماتنا أيضاً عبر الموقع الإلكتروني لتسهيل الطلب عليك. جميع المنتجات المعروضة تخضع للتوفر في المخزون.</p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-900 mb-2">٢. الطلبات والأسعار</h2>
          <ul className="list-disc list-inside space-y-2 mr-2">
            <li>جميع الأسعار المعروضة على الموقع <strong>شاملة لضريبة القيمة المضافة (15%)</strong>.</li>
            <li>نحتفظ بحق تعديل الأسعار أو إيقاف أي منتج في أي وقت دون إشعار مسبق، ما لم يتم تأكيد الطلب.</li>
            <li>لتأكيد الطلب، يتم التواصل مع العميل. الطلب يعتبر نهائياً فقط بعد تأكيدنا له.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-900 mb-2">٣. التوصيل والشحن</h2>
          <ul className="list-disc list-inside space-y-2 mr-2">
            <li>داخل مدينة عرعر: يتم التوصيل حتى باب المنزل بالسعر المعروض في الموقع، ويكون التوصيل مجانياً إذا كان الطلب مؤهلاً.</li>
            <li><strong>خارج مدينة عرعر:</strong> يتم الاتفاق على طريقة الشحن وتكلفته مع العميل قبل إتمام الطلب.</li>
            <li>نحن غير مسؤولين عن أي تأخير في التوصيل ناتج عن ظروف خارجة عن إرادتنا.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-900 mb-2">٤. الاستبدال والاسترجاع</h2>
          <p>تخضع عمليات الاستبدال والاسترجاع لـ <Link href="/info/returns" className="text-blue-600 underline">سياسة الاستبدال والاسترجاع</Link> الخاصة بنا. لا يتم استرجاع أو استبدال المنتجات التي تم تركيبها أو استخدامها.</p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-900 mb-2">٥. الدفع</h2>
          <p>حالياً، يتم الدفع عبر الاتفاق المباشر معنا (الدفع عند الاستلام أو تحويل بنكي باسم المؤسسة). نحن غير مسؤولين عن أي مبالغ يتم تحويلها إلى طرف ثالث.</p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-900 mb-2">٦. استخدام الموقع</h2>
          <ul className="list-disc list-inside space-y-2 mr-2">
            <li>يجب أن تكون بعمر 18 عاماً أو أكثر لاستخدام هذا الموقع.</li>
            <li>يُمنع استخدام الموقع لأي أغراض غير قانونية أو مخالفة للأنظمة في المملكة العربية السعودية.</li>
            <li>جميع محتويات الموقع ملك لمؤسسة مسبار التميز لتقنية المعلومات، ويُمنع نسخها دون إذن.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-900 mb-2">٧. المسؤولية والصور</h2>
          <p>نبذل قصارى جهدنا لتوفير معلومات دقيقة عن المنتجات. ومع ذلك، لا نضمن خلو الموقع من الأخطاء التقنية في الأسعار. في حال وجود خطأ في السعر، يتم إلغاء الطلب وإشعار العميل.</p>
          <p className="mt-2 text-sm text-slate-600">* الصور المعروضة في الموقع هي لأغراض توضيحية فقط، وقد لا تعكس بدقة 100% الشكل النهائي للمنتج.</p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-900 mb-2">٨. التعديلات</h2>
          <p>نحتفظ بحق تحديث أو تعديل هذه الشروط في أي وقت. استمرارك في استخدام الموقع بعد التعديلات يعتبر موافقة عليها.</p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-900 mb-2">٩. القانون المطبق</h2>
          <p>تخضع هذه الشروط وتُفسر وفقاً للأنظمة والقوانين المعمول بها في <strong>المملكة العربية السعودية</strong>.</p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-900 mb-2">١٠. التواصل</h2>
          <p>لأي استفسار، يمكنك التواصل معنا على رقم الجوال: <strong>0532999563</strong></p>
          <p className="mt-2">موقعنا: طريق الملك فيصل، الروضة، عرعر 73312</p>
          <p className="mt-2">رقم السجل التجاري: 3450181031</p>
          <p className="mt-1">الرقم الضريبي: 311476091700003</p>
        </div>

        <p className="text-xs text-slate-500 mt-8 pt-4 border-t">آخر تحديث: {new Date().toLocaleDateString('ar-SA')}</p>
      </div>

      <Link href="/" className="inline-block mt-10 text-blue-600 font-bold hover:underline">
        ← العودة للرئيسية
      </Link>
    </main>
  );
}
