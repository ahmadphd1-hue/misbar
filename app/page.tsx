import { client } from "@/sanity/client";
import ProductSearch from "@/components/ProductSearch";

export default async function Home() {
  const products = await client.fetch(
    '*[_type == "product" && isHidden != true] | order(_createdAt desc)'
  );

  return (
    <main className="max-w-7xl mx-auto px-3 md:px-4 py-6 min-h-screen">
      <div className="mb-6 text-center md:text-right">
        <h1 className="text-2xl md:text-4xl font-black text-slate-900 mb-2">
          أهلاً بك في مسبار
        </h1>
        <p className="text-slate-500">
          متجر متخصص في كاميرات المراقبة والأنظمة الأمنية في مدينة عرعر
        </p>
      </div>

      <ProductSearch products={products} />
    </main>
  );
}
