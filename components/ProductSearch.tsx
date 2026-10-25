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
      <div className="mb-6 overflow-hidden rounded-xl shadow-sm">
        <Image
          src="/hero-image.jpg"
          alt="مسبار لأنظمة المراقبة"
          width={1920}
          height={640}
          className="w-full h-48 md:h-64 object-cover"
          priority
        />
      </div>

      <div className="mb-6">
        <div className="relative max-w-xl mx-auto">
          <svg
            className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400"
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
            placeholder="ابحث عن منتج..."
            className="w-full rounded-full border border-slate-200 bg-white px-10 py-2 text-sm text-slate-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
          />
        </div>
      </div>

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
