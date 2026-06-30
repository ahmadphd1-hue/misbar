import { client } from "../../../sanity/client";
import { urlFor } from "../../../sanity/imageUrl";
import Link from "next/link";
import AddToCartButton from "../../../components/AddToCartButton";

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // جلب المنتجات حسب التصنيف
  const products = await client.fetch(
    `*[_type == "product" && category == $slug]`,
    { slug }
  );

  return (
    <main className="max-w-7xl mx-auto px-4 py-12 min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-10 border-b border-slate-700 pb-4 capitalize">
        {slug === "ip" ? "كاميرات IP" : slug}
      </h1>

      {products.length === 0 ? (
        <p className="text-slate-400 text-lg text-center">لا توجد منتجات في هذا التصنيف حالياً.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product: any) => (
            <div 
              key={product._id} 
              className="bg-[#1A2236] border border-slate-700 rounded-xl overflow-hidden hover:border-blue-500 hover:shadow-2xl transition-all duration-300 flex flex-col"
            >
              {/* الرابط للمنتج */}
              <Link href={product.slug?.current ? `/product/${product.slug.current}` : "#"} className="flex-grow">
                {product.image && (
                  <div className="h-48 w-full bg-[#0D1B2E] flex items-center justify-center overflow-hidden">
                    <img 
                      src={urlFor(product.image).url()} 
                      alt={product.name} 
                      className="h-full w-full object-cover"
                    />
                  </div>
                )}
                <div className="p-4">
                  <h2 className="text-sm font-bold text-slate-300 mb-2 truncate">{product.name}</h2>
                  <span className="text-white font-black text-lg">{product.price} ر.س</span>
                </div>
              </Link>
              
              {/* زر الشراء المستقل */}
              <div className="p-4 pt-0">
                <AddToCartButton product={product} />
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}