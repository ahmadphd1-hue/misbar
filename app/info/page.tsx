import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-10 bg-white min-h-screen">
      <h1 className="text-3xl font-black text-slate-900 mb-6">من نحن</h1>
      <div className="text-slate-700 leading-8 space-y-4 text-base">
        <p>
          مرحباً بك في <strong>مسبار لأنظمة المراقبة</strong>، وجهتك الأولى لحلول الأمن والسلامة في مدينة عرعر.
        </p>
        <p>
          نحن نؤمن بأن الأمان ليس رفاهية، بل ضرورة. لذلك نحرص على توفير أفضل كاميرات المراقبة وأنظمة الشبكات من كبرى العلامات التجارية العالمية (مثل Hikvision و Dahua)، بأعلى معايير الجودة وأسعار تنافسية تناسب الجميع.
        </p>
        <p>
          لا نكتفي بالبيع فقط، بل نقدم لك حلولاً متكاملة تشمل الاستشارة، والتركيب، والصيانة، مع ضمان حقيقي ودعم فني مستمر. فريقنا جاهز لخدمتك واختيار ما يناسب منزلك أو منشأتك.
        </p>
        <p className="font-bold text-blue-700 mt-4">
          مسبار.. عينك التي لا تنام. 👁️
        </p>
      </div>
      <Link href="/" className="inline-block mt-10 text-blue-600 font-bold hover:underline">
        ← العودة للرئيسية
      </Link>
    </main>
  );
}