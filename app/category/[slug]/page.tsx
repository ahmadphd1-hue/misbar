import { client } from "@/sanity/client";

import ProductCard from "@/components/ProductCard";



export default async function CategoryPage({

params,

}: {

params: Promise<{ slug: string }>;

}) {

const { slug } = await params;



const products = await client.fetch(

`*[_type == "product" && category == $slug && isHidden != true] | order(_createdAt desc)`,

{ slug }

);



const titles: Record<string, string> = {

cameras: "كاميرات",

ip: "كاميرات IP",

accessories: "ملحقات",

};



return (

<main className="max-w-7xl mx-auto px-3 md:px-4 py-8 min-h-screen">

<h1 className="text-3xl font-bold mb-8 border-b border-slate-300 pb-4 text-slate-900">

{titles[slug] ?? slug}

</h1>



{products.length === 0 ? (

<p className="text-slate-500 text-lg text-center">

لا توجد منتجات في هذا التصنيف حالياً.

</p>

) : (

<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">

{products.map((product: any) => (

<ProductCard key={product._id} product={product} />

))}

</div>

)}

</main>

);

} 