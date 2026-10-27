"use client";

import { useState } from "react";
import ProductCard from "@/components/ProductCard";

const cats = ["الكل", "كاميرات", "التسجيل", "التخزين", "الشبكات"];

export default function ProductTabs({ products }: { products: any[] }) {
  const [cur, setCur] = useState("الكل");

  const filtered = products.filter((item: any) => {
    if (cur === "الكل") return true;
    const name = (item.name || "").toLowerCase();
    const cat = (item.category || "").toLowerCase();
    if (cur === "كاميرات") return name.includes("كاميرا") || cat.includes("كاميرا") || cat.includes("camera");
    if (cur === "التسجيل") return name.includes("dvr") || name.includes("nvr") || name.includes("تسجيل");
    if (cur === "التخزين") return name.includes("هارد") || name.includes("hdd") || name.includes("ssd") || name.includes("تخزين");
    if (cur === "الشبكات") return name.includes("سويتش") || name.includes("switch") || name.includes("راوتر") || name.includes("شبك");
    return true;
  });

  return (
    <div>
      <div className="mt-5 scroll-x flex gap-2">
        {cats.map((c) => (
          <button
            key={c}
            onClick={() => setCur(c)}
            className={`tab shrink-0 h-9 px-5 rounded-full text-sm font-bold transition ${c === cur ? "bg-ink text-white" : "bg-fog text-ink hover:bg-line"}`}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
        {filtered.map((product: any) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}
