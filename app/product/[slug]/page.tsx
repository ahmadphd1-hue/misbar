import { client } from "@/sanity/client";
import { urlFor } from "@/sanity/imageUrl";
import AddToCartButton from "@/components/AddToCartButton";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const product = await client.fetch(
    `*[_type == "product" && slug.current == $slug][0]`,
    { slug }
  );

  if (!product) notFound();

  const hasDiscount = product.oldPrice && product.oldPrice > product.price;

  return (
    <main className="max-w-3xl mx-auto pb-28">
      <div className="relative w-full h-64 sm: h-80 bg-white">
        {product.badge && (
          <span className="absolute top-3 right-3 z-10 bg-red-500 text-white text-sm font-bold px-4 py-1 rounded-md">
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

      <div className="px-4 pt-5">
        <h1 className="text-2xl font-black text-slate-900 leading-9">
          {product.name}
        </h1>

        <div className="mt-3 flex items-center gap-3">
          <span className="text-3xl font-black text-slate-900">
            {product.price} ر.س
          </span>
          {hasDiscount && (
            <span className="text-lg text-slate-400 line-through">
              {product.oldPrice}
            </span>
          )}
        </div>

        {product.description && (
          <div className="mt-6 bg-white border border-slate-200 rounded-xl p-4">
            <h2 className="text-lg font-bold text-slate-900 mb-2">
              وصف المنتج
            </h2>
            <p className="text-slate-700 leading-8 whitespace-pre-line">
              {product.description}
            </p>
          </div>
        )}

        <Link href="/" className="inline-block mt-6 text-blue-700 font-semibold">
          ← العودة للمتجر
        </Link>
      </div>

      <div className="fixed bottom-0 inset-x-0 z-30 bg-white border-t border-slate-200 p-3 shadow-[0_-4px_12px_rgba(0,0,0,0.08)]">
        <div className="max-w-3xl mx-auto">
          <AddToCartButton product={product} />
        </div>
      </div>
    </main>
  );
}