"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const { cart } = useCart();
  const totalQty = cart.reduce((sum: number, item: any) => sum + (Number(item.quantity) || 0), 0);

  return (
    <header className="sticky top-0 z-40 bg-white/85 backdrop-blur-xl border-b border-line">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center gap-4 lg:gap-8">
        <Link href="/" className="flex items-center gap-2 font-extrabold text-[22px] tracking-tight shrink-0 text-ink">
          <svg width="26" height="26" viewBox="0 0 26 26">
            <circle cx="13" cy="13" r="11" fill="none" stroke="#111113" strokeWidth="2.4" />
            <circle cx="13" cy="13" r="4.5" fill="#0071E3" />
          </svg>
          مسبار
        </Link>
        <div className="hidden md:flex flex-1 max-w-xl mx-auto">
          <label className="w-full flex items-center gap-2 h-11 px-4 rounded-full bg-fog focus-within:ring-2 ring-accent/40 transition">
            <svg width="18" height="18" fill="none" stroke="#6E6E73" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" />
            </svg>
            <input className="bg-transparent outline-none w-full text-sm" placeholder="ابحث عن كاميرا، جهاز تسجيل، ملحق..." />
          </label>
        </div>
        <div className="flex items-center gap-1 ms-auto md:ms-0">
          <button className="md:hidden w-10 h-10 grid place-items-center" aria-label="بحث">
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" />
            </svg>
          </button>
          <button className="w-10 h-10 grid place-items-center" aria-label="حسابي">
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 21c1-4 4.5-6 8-6s7 2 8 6" />
            </svg>
          </button>
          <Link href="/cart" className="relative w-10 h-10 grid place-items-center" aria-label="السلة">
            <svg width="21" height="21" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <path d="M5 8h14l-1 12H6L5 8Z" />
              <path d="M9 8V6a3 3 0 0 1 6 0v2" />
            </svg>
            {totalQty > 0 && (
              <span className="absolute top-0.5 end-0.5 min-w-[18px] h-[18px] px-1 rounded-full bg-accent text-white text-[10px] font-bold grid place-items-center">
                {totalQty}
              </span>
            )}
          </Link>
        </div>
      </div>
      <nav className="border-t border-line/60">
        <div className="max-w-7xl mx-auto px-4 scroll-x flex gap-7 h-11 items-center text-[13.5px] font-semibold text-sub whitespace-nowrap">
          <Link href="/" className="text-ink">الرئيسية</Link>
          <Link href="/category/cameras" className="hover:text-ink">كاميرات</Link>
          <Link href="/category/ip" className="hover:text-ink">كاميرات IP</Link>
          <Link href="/category/accessories" className="hover:text-ink">أجهزة التسجيل</Link>
          <Link href="/category/accessories" className="hover:text-ink">التخزين</Link>
          <Link href="/category/accessories" className="hover:text-ink">الشبكات</Link>
          <Link href="/category/accessories" className="hover:text-ink">ملحقات</Link>
          <Link href="/services" className="hover:text-ink">خدماتنا</Link>
        </div>
      </nav>
    </header>
  );
}
