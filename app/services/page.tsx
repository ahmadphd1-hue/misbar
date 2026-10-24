import Link from "next/link";

const services = [
  {
    title: "تركيب وصيانة كاميرات المراقبة",
    desc: "تركيب احترافي لجميع أنواع الكاميرات (داخلية وخارجية)، مع صيانة دورية وحلول للأعطال.",
    icon: "🛠️",
  },
  {
    title: "برمجة وفك رموز NVR/DVR",
    desc: "فك رموز أجهزة التسجيل، إعادة ضبط المصنع، وبرمجة الأجهزة لتعمل مع تطبيقات الجوال.",
    icon: "🔓",
  },
  {
    title: "برمجة شبكات وواي فاي",
    desc: "إعداد راوترات، تقوية إشارة الواي فاي، وتركيب شبكات سلكية ولاسلكية للمنازل والشركات.",
    icon: "📶",
  },
  {
    title: "تركيب أنظمة الانتركم",
    desc: "توريد وتركيب أنظمة الانتركم الصوتية والمرئية، وربطها مع أبواب المنزل.",
    icon: "🎙️",
  },
];

export default function ServicesPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-10 bg-slate-50 min-h-screen">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-black text-slate-900 mb-3">خدماتنا</h1>
        <p className="text-slate-600">نقدم لك حلولاً متكاملة تتجاوز بيع الأجهزة لتشمل التركيب، البرمجة، والصيانة.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="text-3xl mb-3">{service.icon}</div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h2>
              <p className="text-slate-600 text-sm leading-7">{service.desc}</p>
            </div>
            
            <a
              href={`https://wa.me/966532999563?text=${encodeURIComponent(`أرغب بطلب خدمة: ${service.title}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block text-center w-full bg-green-600 text-white font-bold py-3 rounded-lg hover:bg-green-700 transition"
            >
              اطلب الخدمة عبر واتساب
            </a>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link href="/" className="text-blue-600 font-bold hover:underline">
          ← العودة للرئيسية
        </Link>
      </div>
    </main>
  );
}