import { client } from "@/sanity/client";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import CategoryRow from "@/components/CategoryRow";
import ProductTabs from "@/components/ProductTabs";
import DualBanners from "@/components/DualBanners";
import Link from "next/link";

export default async function Home() {
  const products = await client.fetch(
    '*[_type == "product" && isHidden != true] | order(_createdAt desc){_id, name, price, brand, spec, category, slug, image}'
  );

  return (
    <main>
      <Hero />
      <TrustStrip />
      <CategoryRow />
      <section id="shop" className="max-w-7xl mx-auto px-4 mt-16">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">وصل حديثاً</h2>
          <Link href="/category/accessories" className="text-accent text-sm font-bold whitespace-nowrap">
            عرض كل المنتجات ←
          </Link>
        </div>
        <ProductTabs products={products} />
      </section>
      <DualBanners />
    </main>
  );
}
