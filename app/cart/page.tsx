"use client";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

export default function CartPage() {
  const { cart } = useCart();
  const [deliveryType, setDeliveryType] = useState("pickup"); 

  // الحسابات
  const subtotal = cart.reduce((sum: number, item: any) => sum + (Number(item.price) || 0), 0);
  const tax = subtotal * 0.15; 
  const shipping = deliveryType === "shipping" ? 15 : 0;
  const total = subtotal + tax + shipping;

  return (
    <main className="max-w-4xl mx-auto px-4 py-12 text-white">
      <h1 className="text-3xl font-bold mb-8">سلة التسوق</h1>

      {cart.length === 0 ? (
        <p className="text-gray-400">السلة فارغة حالياً.</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          {/* قائمة المنتجات */}
          <div className="md:col-span-2 space-y-4">
            {cart.map((item: any, index: number) => (
              <div key={index} className="p-4 bg-[#1A2236] rounded-lg flex justify-between border border-slate-700">
                <span>{item.name}</span>
                <span className="text-blue-400 font-bold">{item.price} ر.س</span>
              </div>
            ))}
          </div>

          {/* ملخص الطلب */}
          <div className="bg-[#1A2236] p-6 rounded-xl border border-slate-700 h-fit">
            <h2 className="text-xl font-bold mb-4">ملخص الطلب</h2>
            
            {/* خيارات التوصيل */}
            <div className="space-y-2 mb-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" checked={deliveryType === "pickup"} onChange={() => setDeliveryType("pickup")} />
                استلام من الفرع (مجاناً)
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" checked={deliveryType === "shipping"} onChange={() => setDeliveryType("shipping")} />
                توصيل (15 ر.س)
              </label>
            </div>

            <div className="border-t border-slate-700 pt-4 space-y-2">
              <div className="flex justify-between text-gray-400"><span>المجموع الفرعي:</span> <span>{subtotal} ر.س</span></div>
              <div className="flex justify-between text-gray-400"><span>الضريبة (15%):</span> <span>{tax.toFixed(2)} ر.س</span></div>
              <div className="flex justify-between text-gray-400"><span>التوصيل:</span> <span>{shipping} ر.س</span></div>
              <div className="flex justify-between text-xl font-bold text-white pt-2 border-t border-slate-700">
                <span>الإجمالي:</span> <span>{total.toFixed(2)} ر.س</span>
              </div>
            </div>
            
            {/* زر الواتساب */}
            <button 
              onClick={() => {
                const itemsList = cart.map((item: any) => `- ${item.name}: ${item.price} ر.س`).join('\n');
                const deliveryText = deliveryType === "shipping" ? "توصيل (15 ر.س)" : "استلام من الفرع (مجاناً)";
                const message = `أهلاً، أرغب بطلب المنتجات التالية:\n\n${itemsList}\n\nنوع التوصيل: ${deliveryText}\nالإجمالي: ${total.toFixed(2)} ر.س\n\nبانتظار تأكيد الطلب.`;
                const whatsappUrl = `https://wa.me/966532999563?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
              }}
              className="w-full mt-6 bg-green-600 py-3 rounded-lg font-bold hover:bg-green-700 transition shadow-lg"
            >
              إتمام الطلب عبر واتساب 💬
            </button>
          </div>
        </div>
      )}
    </main>
  );
}