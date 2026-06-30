"use client";
import { useCart } from "@/context/CartContext";

export default function AddToCartButton({ product }: { product: any }) {
  const { addToCart } = useCart();

  return (
    <button 
      onClick={() => {
        console.log("تم الضغط! المنتج هو:", product); // للتجربة
        addToCart(product);
      }}
      className="w-full bg-blue-600 py-2 rounded-lg font-bold hover:bg-blue-700 transition"
    >
      إضافة للسلة
    </button>
  );
}