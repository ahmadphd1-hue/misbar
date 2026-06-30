import { client } from "@/sanity/client";
import { urlFor } from "@/sanity/imageUrl";
import Link from "next/link";
import AddToCartButton from "@/components/AddToCartButton";

export default async function Home() {
  const products = await client.fetch('*[_type == "product"]');

  return (
    <main className="max-w-7xl mx-auto px-4 py-12">
      {/* 1. قسم الواجهة الفخمة (Hero Section) */}
      <div className="bg-gradient-to-r from-blue-900 to-black p-12 rounded-2xl mb-12 text-center border border-slate-700">
        <h1 className="text-5xl font-extrabold mb-4 text-white">متجر مسبار</h1>
        <p className="text-gray-300 text-lg">أحدث كاميرات المراقبة والأنظمة الأمنية بضمان الجودة</p>
      </div>

      {/* 2. شبكة المنتجات (Product Grid) */}
      <h2 className="text-2xl font-bold mb-6 text-white">المنتجات المميزة</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product: any) => (
          <div key={product._id} className="bg-[#1A2236] p-4 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300">
            <Link href={`/product/${product.slug?.current}`}>
              {product.image && (
                <img
                  src={urlFor(product.image).url()}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
              )}
              <h2 className="text-white font-bold mb-2 truncate">{product.name}</h2>
              <p className="text-blue-400 font-bold mb-4">{product.price} ر.س</p>
            </Link>
            <AddToCartButton product={product} />
          </div>
        ))}
      </div>
    </main>
  );
}