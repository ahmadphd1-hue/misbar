"use client";

import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import Image from "next/image";

export default function ProductSearch({ products }: { products: any[] }) {
  const [query, setQuery] = useState("");

  const filteredProducts = products.filter((product: any) => {
    if (!query.trim()) return true;
    const name = product?.name?.toLowerCase() || "";
    return name.includes(query.toLowerCase());
  });

  return (
    <div>
      <section className="relative -mx-3 md:-mx-4 mb-10">
        <div className="relative h-[220px] sm:h-[280px] md:h-[360px] lg:h-[420px] w-full">
          <Image
            src="/hero-image.jpg"
            alt="مسبار لأنظمة المراقبة"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/30" />
          <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
            <h2 className="text-white text-xl sm:text-2xl md:text-4xl lg:text-5xl font-black leading-tight">
              أمان منزلك وشركتك يبدأ من هنا...
            </h2>
          </div>
        </div>

        <div className="relative -mt-8 px-3 md:-mt-10 md:px-4">
          <div className="mx-auto max-w-3xl">
            <div className="relative shadow-lg rounded-full bg-white">
              <svg
                className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="ابحث عن الكاميرات, DVR, الراوترات, او ملحقات الأمن..."
                className="w-full rounded-full border border-slate-200 bg-white px-12 py-3 text-sm md:text-base text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
        {filteredProducts.map((product: any) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <p className="text-center text-slate-500 mt-10">لا توجد نتائج للبحث</p>
      )}
    </div>
  );
}
