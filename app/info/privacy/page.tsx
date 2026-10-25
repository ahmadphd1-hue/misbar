import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-10 bg-white min-h-screen">
      <h1 className="text-3xl font-black text-slate-900 mb-6">سياسة الخصوصية</h1>
      
      <div className="text-slate-700 leading-8 space-y-6 text-base">
        
        <p>
          تلتزم مؤسسة مسبار التميز لتقنية المعلومات بحماية خصوصية زوارها وعملائها، وتطبق أحكام نظام حماية البيانات الشخصية في المملكة العربية السعودية.
        </p>

        <div>
          <h2 className="text-xl font-bold text-slate-900 mb-2">١. بيانات التواصل معنا</h2>
          <ul className="list-disc list-inside space-y-1 mr-2">
            <li>اسم المؤسسة: مؤسسة مسبار التميز لتقنية المعلومات.</li>
            <li>النشاط: بيع وتركيب كاميرات المراقبة والأنظمة الأمنية.</li>
            <li>العنوان: طريق الملك فيصل، الروضة، عرعر 73312، المملكة العربية السعودية.</li>
            <li>رقم الجوال: 0532999563</li>
            <li>رقم السجل التجاري: 3450181031</li>
            <li>الرقم الضريبي: 311476091700003</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-900 mb-2">٢. البيانات التي نجمعها</h2>
          <p>نقوم بجمع الحد الأدنى من البيانات اللازمة لتقديم الخدمة، وهي:</p>
          <ul className="list-disc list-inside space-y-1 mr-2">
            <li><strong>بيانات التواصل:</strong> الاسم الكامل، ورقم الجوال.</li>
            <li><strong>بيانات التوصيل:</strong> المدينة (والعنوان عند الاتفاق).</li>
            <li><strong>بيانات الطلب:</strong> المنتجات التي اخترتها، الكميات، وإجمالي السعر.</li>
          </ul>
          <p className="text-sm text-slate-500 mt-2">* جمع هذه البيانات إلزامي لإتمام طلبك وإيصاله إليك.</p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-900 mb-2">٣. كيف نجمع بياناتك والغرض من جمعها</h2>
          <p><strong>نجمع البيانات مباشرة منك</strong> عند قيامك بتعبئة نموذج السلة (الاسم، الجوال، المدينة)، ويكون الغرض من ذلك:</p>
          <ul className="list-disc list-inside space-y-1 mr-2">
            <li>تجهيز الطلب وتأكيده  .</li>
            <li>توصيل المنتج إلى موقعك.</li>
            <li>تقديم الدعم الفني وخدمات الصيانة.</li>
          </ul>
          <p className="mt-2"><strong>المسوغ النظامي:</strong> نعتمد على "موافقتك" عند إدخال بياناتك، و"تنفيذ الالتزام التعاقدي" (توصيل الطلب).</p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-900 mb-2">٤. مشاركة البيانات مع أطراف أخرى</h2>
          <p>نحن لا نبيع بياناتك لأغراض تسويقية. نشارك بياناتك فقط مع:</p>
          <ul className="list-disc list-inside space-y-1 mr-2">
            <li><strong>شركة التوصيل (المندوب):</strong> الاسم والجوال والعنوان (لإيصال الطلب).</li>
            <li><strong>مقدمي الخدمات السحابية:</strong> (مزودي الاستضافة وقاعدة البيانات) لتشغيل الموقع فقط.</li>
            <li><strong>الجهات الرسمية:</strong> في حال طلبت ذلك بموجب الأنظمة السعودية.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-900 mb-2">٥. تخزين البيانات ومدة الاحتفاظ</h2>
          <p>
            يتم تخزين بياناتك على خوادم سحابية آمنة (من خلال مزودي الاستضافة الذين نتعامل معهم). 
            نحتفظ ببياناتك لمدة لا تتجاوز <strong>سنة واحدة</strong> من تاريخ آخر طلب لك، أو للمدة التي تطلبها الأنظمة (مثل الالتزامات الضريبية)، وبعدها يتم إتلافها أو إخفاء هويتها بشكل آمن.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-900 mb-2">٦. حقوقك المتعلقة ببياناتك</h2>
          <p>وفقاً للنظام، يحق لك:</p>
          <ul className="list-disc list-inside space-y-2 mr-2">
            <li><strong>الحق في العلم:</strong> معرفة كيف نجمع بياناتك ونعالجها (وهذا ما توضحه هذه الصفحة).</li>
            <li><strong>الحق في الوصول:</strong> طلب نسخة من بياناتك المحفوظة لدينا.</li>
            <li><strong>الحق في التصحيح:</strong> طلب تعديل أي بيانات غير دقيقة.</li>
            <li><strong>الحق في الإتلاف:</strong> طلب حذف بياناتك (إذا لم تمنعنا الأنظمة من ذلك).</li>
            <li><strong>الحق في سحب الموافقة:</strong> يحق لك سحب موافقتك على استخدام البيانات في أي وقت.</li>
          </ul>
          <p className="mt-2">لممارسة أي من هذه الحقوق، يرجى التواصل معنا عبر رقم الجوال الموضح أعلاه، وسيتم الاستجابة لطلبك خلال ٣٠ يوماً كحد أقصى.</p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-900 mb-2">٧. تقديم الشكاوى</h2>
          <p>إذا كان لديك أي شكوى بخصوص معالجة بياناتك، يمكنك التواصل معنا وسنعمل على حلها. وفي حال عدم رضاك عن النتيجة، يحق لك تقديم شكوى إلى:</p>
          <p className="font-semibold mt-1">الهيئة السعودية للبيانات والذكاء الاصطناعي (SDAIA)</p>
          <p className="text-sm text-slate-500">الرياض، المملكة العربية السعودية - الموقع: sdaia.gov.sa</p>
        </div>

        <p className="text-xs text-slate-500 mt-8 pt-4 border-t">آخر تحديث: {new Date().toLocaleDateString('ar-SA')}</p>
      </div>

      <Link href="/" className="inline-block mt-10 text-blue-600 font-bold hover:underline">
        ← العودة للرئيسية
      </Link>
    </main>
  );
}
