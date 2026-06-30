"use client";
import Link from "next/link";
// هذا هو الحل النهائي الذي لا يخطئ أبداً:
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const { cart } = useCart();
  // ... باقي الكود كما هو

  return (
    <nav className="bg-black p-4 border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center text-white">
        <Link href="/" className="font-bold">مسبار</Link>
        
        <div className="flex gap-4 items-center">
          <Link href="/" className="hover:text-blue-400">الرئيسية</Link>
          <Link href="/category/cameras" className="hover:text-blue-400">كاميرات</Link>
          <Link href="/category/ip" className="hover:text-blue-400">IP</Link>
          <Link href="/category/accessories" className="hover:text-blue-400">ملحقات</Link>
          
          <Link 
            href="/cart" 
            className="bg-blue-600 px-4 py-2 rounded-lg font-bold hover:bg-blue-700 transition"
          >
            السلة ({cart.length})
          </Link>
        </div>
      </div>
    </nav>
  );
}