"use client";
import { useState } from "react";
import { useCart } from "@/context/CartContext";

export default function AddToCartButton({ product }: { product: any }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleClick = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <button
      onClick={handleClick}
      className={`w-full ${
        added ? "bg-green-600" : "bg-blue-600"
      } py-3 rounded-full text-white font-bold transition`}
    >
      {added ? "تمت الإضافة للسلة 😍" : "إضافة للسلة"}
    </button>
  );
}
