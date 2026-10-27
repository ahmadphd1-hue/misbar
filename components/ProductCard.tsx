"use client";

import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/imageUrl";
import { useCart } from "@/context/CartContext";
import { CategoryIcon } from "@/components/icons";

export default function ProductCard({ product }: { product: any }) {
  const { addToCart } = useCart();
  const href = product.slug?.current ? `/product/${product.slug.current}` : "#";

  const getIconType = () => {
    const name = (product.name || "").toLowerCase();
    if (name.includes("dvr") || name.includes("nvr") || name.includes("تسجيل")) return "dvr";
    if (name.includes("hdd") || name.includes("هارد")) return "hdd";
    if (name.includes("switch") || name.includes("سويتش") || name.includes("راوتر") || name.includes("net")) return "net";
    if (name.includes("انتركم") || name.includes("intercom")) return "int";
    if (name.includes("dome") || name.includes("داخلية")) return "dome";
    return "cam";
  };

  return (
    <article className="pc rounded-2xl bg-white border border-line overflow-hidden flex flex-col">
      <Link href={href} className="flex flex-col grow">
        <div className="pimg relative bg-fog aspect-[4/3] grid place-items-center">
          {product.image ? (
            <Image
              src={urlFor(product.image).width(600).height(450).url()}
              alt={product.name || "منتج"}
              width={600}
              height={450}
              className="w-full h-full object-contain p-4"
            />
          ) : (
            <CategoryIcon type={getIconType()} size={92} />
          )}
          {product.spec && (
            <span className="absolute top-3 start-3 text-[11px] font-bold bg-white rounded-full px-2.5 py-1">
              {product.spec}
            </span>
          )}
        </div>
        <div className="p-4 flex flex-col grow">
          {product.brand && <span className="text-[11px] font-bold text-sub">{product.brand}</span>}
          <h3 className="mt-1 text-[14px] font-bold leading-6 line-clamp-2">{product.name}</h3>
          <div className="mt-auto pt-4 flex items-end justify-between gap-2">
            <div>
              <div className="text-xl font-extrabold leading-none">
                {Number(product.price) || 0} <span className="text-xs font-semibold">ر.س</span>
              </div>
              <div className="text-[11px] text-sub mt-1">شامل الضريبة</div>
            </div>
            <button
              onClick={(e) => {
                e.preventDefault();
                addToCart(product);
              }}
              className="add w-10 h-10 rounded-full bg-ink text-white grid place-items-center hover:bg-accent transition shrink-0"
              aria-label="إضافة للسلة"
            >
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                <path d="M12 5v14M5 12h14" />
              </svg>
            </button>
          </div>
        </div>
      </Link>
    </article>
  );
}
