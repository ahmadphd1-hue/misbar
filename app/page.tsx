import { client } from "@/sanity/client";
import { urlFor } from "@/sanity/imageUrl";
import Link from "next/link";
import AddToCartButton from "@/components/AddToCartButton"; // 1. استيراد الزر

export default async function Home() {
  // 2. تصحيح: أضفنا علامات تنصيص حول الاستعلام
  const products = await client.fetch('*[_type == "product"]');

  return (
    <main className="max-w-7xl mx-auto px-4 py-12 min-h-screen">
      <div className="mb-12 text-center md:text-right">
        <h1 className="text-4xl font-extrabold text-white mb-4">أهلاً بك في مسبار</h1>
        <p className="text-slate-400">تصفح أحدث كاميرات المراقبة والأنظمة الأمنية</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product: any) => (
          <div key={product._id} className="bg-[#1A2236] border border-slate-700 rounded-xl overflow-hidden hover:border-blue-500 transition-all duration-300 group">
            {/* الجزء القابل للضغط (الصورة + العنوان) */}
            <Link href={product.slug?.current ? `/product/${product.slug.current}` : "#"}>
              <div className="h-48 w-full bg-[#0D1B2E] flex items-center justify-center overflow-hidden">
                {product.image && (
                  <img 
                    src={urlFor(product.image).url()} 
                    alt={product.name} 
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                )}
              </div>
              <div className="p-4">
                <h2 className="text-sm font-bold text-slate-300 mb-2 truncate">{product.name}</h2>
                <span className="text-white font-black text-lg">{product.price} ر.س</span>
              </div>
            </Link>
            
            {/* 3. زر الشراء (خارج رابط المنتج لتجنب تداخل الأزرار) */}
            <div className="p-4 pt-0">
               <AddToCartButton product={product} />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}