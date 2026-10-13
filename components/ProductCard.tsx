import Link from "next/link";
import { urlFor } from "@/sanity/imageUrl";
import AddToCartButton from "@/components/AddToCartButton";

export default function ProductCard({ product }: { product: any }) {
  const hasDiscount = product.oldPrice && product.oldPrice > product.price;
  const href = product.slug?.current ? `/product/${product.slug.current}` : "#";

  return (
    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden flex flex-col shadow-md transition-all duration-200 active:scale-[0.97] active:shadow-xl active:border-blue-500 hover:-translate-y-1 hover:shadow-xl">
      <Link href={href} className="flex-grow block">
        <div className="relative aspect-square w-full bg-white">
          {product.badge && (
            <span className="absolute top-2 right-2 z-10 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-md">
              {product.badge}
            </span>
          )}
          {product.image && (
            <img
              src={urlFor(product.image).url()}
              alt={product.name}
              className="h-full w-full object-contain"
            />
          )}
        </div>

        <div className="px-4 pt-4 text-center">
          <h2 className="text-base font-bold text-slate-800 leading-7 line-clamp-3 min-h-[5.25rem]">
            {product.name}
          </h2>

          <div className="mt-3 flex items-center justify-center gap-3">
            <span className="text-xl font-black text-slate-900">
              {product.price} ر.س
            </span>
            {hasDiscount && (
              <span className="text-sm text-slate-400 line-through">
                {product.oldPrice}
              </span>
            )}
          </div>
        </div>
      </Link>

      <div className="p-4">
        <AddToCartButton product={product} />
      </div>
    </div>
  );
}