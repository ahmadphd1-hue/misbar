"use client";
import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

const links = [
  { href: "/", label: "الرئيسية" },
  { href: "/category/cameras", label: "كاميرات" },
  { href: "/category/ip", label: "كاميرات IP" },
  { href: "/category/accessories", label: "ملحقات" },
  { href: "/services", label: "خدماتنا" }, // <--- هذا السطر الجديد
];

export default function Navbar() {
  const { cart } = useCart();
  const [open, setOpen] = useState(false);

  const totalQty = cart.reduce(
    (sum: number, item: any) => sum + (Number(item.quantity) || 0),
    0
  );

  return (
    <>
      <header className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          {/* القائمة (يمين) */}
          <button
            onClick={() => setOpen(true)}
            aria-label="فتح القائمة"
            className="p-2 -mr-2 text-slate-800"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="18" x2="20" y2="18" />
            </svg>
          </button>

          {/* الشعار (وسط) */}
          <Link href="/" className="text-2xl font-black text-blue-700">
            مسبار
          </Link>

          {/* السلة (يسار) */}
          <Link
            href="/cart"
            aria-label="السلة"
            className="relative p-2 -ml-2 text-slate-800"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 7h12l-1 13H7L6 7z" />
              <path d="M9 7a3 3 0 0 1 6 0" />
            </svg>
            {totalQty > 0 && (
              <span className="absolute top-0 left-0 min-w-5 h-5 px-1 flex items-center justify-center rounded-full bg-red-500 text-white text-xs font-bold">
                {totalQty}
              </span>
            )}
          </Link>
        </div>
      </header>

      {/* خلفية معتمة */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 bg-black/50"
        />
      )}

      {/* القائمة الجانبية */}
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-72 max-w-[80%] bg-white shadow-xl transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-4 h-16 border-b border-slate-200">
          <span className="text-xl font-black text-blue-700">مسبار</span>
          <button
            onClick={() => setOpen(false)}
            aria-label="إغلاق القائمة"
            className="p-2 text-slate-800 text-2xl leading-none"
          >
            ✕
          </button>
        </div>

        <nav className="flex flex-col">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="px-5 py-4 text-lg font-semibold text-slate-800 border-b border-slate-100 active:bg-slate-100"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}