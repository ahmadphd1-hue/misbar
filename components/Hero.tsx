import Link from "next/link";

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-4 pt-5">
      <div className="rounded-[28px] bg-fog overflow-hidden grid md:grid-cols-2 items-center">
        <div className="p-8 md:p-14 order-2 md:order-1">
          <p className="text-accent font-bold text-sm">كاميرات المراقبة والأنظمة الأمنية</p>
          <h1 className="mt-3 text-[34px] md:text-[56px] font-extrabold leading-[1.15] tracking-tight">
            أمان منزلك وشركتك.
            <br />
            بوضوح لا يُضاهى.
          </h1>
          <p className="mt-4 text-sub text-base md:text-lg leading-8 max-w-md">
            كاميرات هيكفيجن وداهوا وإيزفيز بدقة تصل إلى 8 ميجابكسل، مع أسعار شاملة الضريبة.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link href="#shop" className="h-12 px-7 rounded-full bg-ink text-white font-bold grid place-items-center hover:bg-black/80 transition">
              تسوق الآن
            </Link>
            <Link href="https://wa.me/966532999563" className="h-12 px-3 text-accent font-bold grid place-items-center hover:underline">
              اسأل خبير ←
            </Link>
          </div>
        </div>
        <div
          className="relative order-1 md:order-2 h-64 md:h-[460px] grid place-items-center"
          style={{ background: "radial-gradient(circle at 50% 55%,#fff 0,transparent 65%)" }}
        >
          <svg viewBox="0 0 400 300" className="w-[78%] max-w-md drop-shadow-[0_30px_40px_rgba(0,0,0,.18)]">
            <defs>
              <linearGradient id="b" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#fff" />
                <stop offset="1" stopColor="#D9D9DE" />
              </linearGradient>
              <radialGradient id="l" cx=".4" cy=".35">
                <stop offset="0" stopColor="#3a6fb0" />
                <stop offset=".45" stopColor="#101a2c" />
                <stop offset="1" stopColor="#05070c" />
              </radialGradient>
            </defs>
            <rect x="150" y="205" width="40" height="55" rx="8" fill="#C9C9CF" />
            <rect x="120" y="250" width="100" height="14" rx="7" fill="#B8B8BF" />
            <path d="M70 110c0-24 20-42 46-42h196c22 0 40 18 40 40v40c0 22-18 40-40 40H116c-26 0-46-18-46-42Z" fill="url(#b)" />
            <path d="M60 78h260c10 0 18 8 18 18v6H60Z" fill="#fff" opacity=".9" />
            <circle cx="130" cy="130" r="52" fill="#E4E4E9" />
            <circle cx="130" cy="130" r="42" fill="url(#l)" />
            <circle cx="130" cy="130" r="18" fill="#05070c" />
            <circle cx="116" cy="116" r="7" fill="#fff" opacity=".55" />
            <circle cx="270" cy="130" r="6" fill="#0071E3" />
          </svg>
          <span className="absolute top-5 start-5 flex items-center gap-2 text-[12px] font-bold bg-white rounded-full px-3 py-1.5 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-red-500 blink"></span>مباشر · 4K
          </span>
        </div>
      </div>
    </section>
  );
}
