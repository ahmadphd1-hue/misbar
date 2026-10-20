"use client";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import Link from "next/link";
import { urlFor } from "@/sanity/imageUrl";
import { Price } from "@/components/SarSymbol";

const SHIPPING_FEE = 15;
const FREE_SHIPPING_THRESHOLD = 400;

export default function CartPage() {
  const { cart, removeFromCart, increaseQty, decreaseQty, clearCart } =
    useCart();
  const [deliveryType, setDeliveryType] = useState("pickup");

  // الحسابات
  const subtotal = cart.reduce(
    (sum: number, item: any) =>
      sum + (Number(item.price) || 0) * (Number(item.quantity) || 1),
    0
  );
  const includedTax = subtotal - subtotal / 1.15;
  const isFreeShipping = subtotal >= FREE_SHIPPING_THRESHOLD;
  const shipping = deliveryType === "shipping" && !isFreeShipping ? SHIPPING_FEE : 0;
  const total = subtotal + shipping;

  if (cart.length === 0) {
    return (
      <main className="max-w-4xl mx-auto px-4 py-16 bg-white text-slate-900">
        <div className="max-w-md mx-auto text-center bg-white border border-slate-200 rounded-xl p-8">
          <h1 className="text-2xl font-bold mb-4">سلة التسوق</h1>
          <p className="text-slate-500 mb-6">السلة فارغة حالياً.</p>
          <Link
            href="/"
            className="inline-block bg-blue-600 text-white font-bold px-6 py-3 rounded-full hover:bg-blue-700 transition"
          >
            العودة للمتجر
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="max-w-4xl mx-auto px-4 py-12 bg-white text-slate-900">
      <h1 className="text-3xl font-bold mb-8">سلة التسوق</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {/* قائمة المنتجات */}
        <div className="md:col-span-2">
          <div className="space-y-4">
            {cart.map((item: any, index: number) => (
              <div
                key={item._id || index}
                className="relative bg-white border border-slate-200 rounded-xl p-4 flex gap-4 shadow-sm"
              >
                {/* زر الحذف */}
                <button
                  onClick={() => removeFromCart(item._id)}
                  aria-label="حذف المنتج"
                  className="absolute top-3 left-3 w-9 h-9 flex items-center justify-center rounded-full bg-red-500 text-white text-lg leading-none hover:bg-red-600 transition"
                >
                  ✕
                </button>

                {/* صورة المنتج */}
                <div className="w-20 h-20 shrink-0 bg-white border border-slate-100 rounded-lg overflow-hidden">
                  {item.image && (
                    <img
                      src={urlFor(item.image).url()}
                      alt={item.name}
                      className="w-full h-full object-contain"
                    />
                  )}
                </div>

                {/* التفاصيل */}
                <div className="flex-1 min-w-0">
                  <h2 className="text-sm font-bold text-slate-900 line-clamp-2 pl-8">
                    {item.name}
                  </h2>
                  <p className="text-xs text-slate-500 mt-1">
                    <Price value={Number(item.price) || 0} />
                  </p>

                  <div className="mt-3 flex items-center justify-between gap-3">
                    {/* عدّاد الكمية */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => decreaseQty(item._id)}
                        aria-label="تقليل الكمية"
                        className="w-8 h-8 flex items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 leading-none hover:bg-slate-100 transition"
                      >
                        −
                      </button>
                      <span className="min-w-6 text-center font-bold text-slate-900">
                        {item.quantity || 1}
                      </span>
                      <button
                        onClick={() => increaseQty(item._id)}
                        aria-label="زيادة الكمية"
                        className="w-8 h-8 flex items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 leading-none hover:bg-slate-100 transition"
                      >
                        +
                      </button>
                    </div>

                    {/* إجمالي السطر */}
                    <span className="font-black text-slate-900">
                      <Price
                        value={
                          (Number(item.price) || 0) *
                          (Number(item.quantity) || 1)
                        }
                      />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={clearCart}
            className="mt-4 text-sm text-slate-500 hover:text-red-600 transition"
          >
            تفريغ السلة
          </button>
        </div>

        {/* ملخص الطلب */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 h-fit shadow-sm">
          <h2 className="text-xl font-bold mb-4 text-slate-900">ملخص الطلب</h2>

          {/* خيارات التوصيل */}
          <div className="space-y-2 mb-4">
            <label className="flex items-center gap-2 cursor-pointer text-slate-900">
              <input
                type="radio"
                checked={deliveryType === "pickup"}
                onChange={() => setDeliveryType("pickup")}
              />
              استلام من الفرع (مجاناً)
            </label>
            <label className="flex items-center gap-2 cursor-pointer text-slate-900">
              <input
                type="radio"
                checked={deliveryType === "shipping"}
                onChange={() => setDeliveryType("shipping")}
              />
              {isFreeShipping ? (
                "توصيل (مجاني)"
              ) : (
                <span className="inline-flex items-center gap-1">
                  توصيل (<Price value={SHIPPING_FEE} />)
                </span>
              )}
            </label>
            {deliveryType === "shipping" && !isFreeShipping && (
              <p className="text-xs text-slate-500 pt-1">
                أضف{" "}
                <Price
                  value={Number(
                    (FREE_SHIPPING_THRESHOLD - subtotal).toFixed(2)
                  )}
                />{" "}
                للحصول على توصيل مجاني
              </p>
            )}
          </div>

          <div className="border-t border-slate-200 pt-4 space-y-2">
            <div className="flex justify-between text-slate-600">
              <span>المجموع الفرعي:</span>
              <span>
                <Price value={subtotal} />
              </span>
            </div>
            <div className="flex justify-between text-slate-600">
              <span>ضريبة القيمة المضافة (مشمولة في السعر):</span>
              <span>
                <Price value={Number(includedTax.toFixed(2))} />
              </span>
            </div>
            <div className="flex justify-between text-slate-600">
              <span>التوصيل:</span>
              <span>
                <Price value={shipping} />
              </span>
            </div>
            <div className="flex justify-between text-xl font-bold text-slate-900 pt-2 border-t border-slate-200">
              <span>الإجمالي:</span>
              <span>
                <Price value={Number(total.toFixed(2))} />
              </span>
            </div>
          </div>

          {/* زر الواتساب */}
          <button
            onClick={() => {
              const itemsList = cart
                .map((item: any) => {
                  const qty = Number(item.quantity) || 1;
                  const lineTotal = (Number(item.price) || 0) * qty;
                  return `- ${item.name} × ${qty}: ${lineTotal} ر.س`;
                })
                .join("\n");
              const deliveryText =
                deliveryType === "shipping"
                  ? isFreeShipping
                    ? "توصيل (مجاني)"
                    : `توصيل (${SHIPPING_FEE} ر.س)`
                  : "استلام من الفرع (مجاناً)";
              const message = `أهلاً، أرغب بطلب المنتجات التالية:\n\n${itemsList}\n\nنوع التوصيل: ${deliveryText}\nالإجمالي شامل الضريبة: ${total.toFixed(2)} ر.س\n\nبانتظار تأكيد الطلب.`;
              const whatsappUrl = `https://wa.me/966532999563?text=${encodeURIComponent(message)}`;
              window.open(whatsappUrl, "_blank");
            }}
            className="w-full mt-6 bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700 transition shadow-lg"
          >
            إتمام الطلب عبر واتساب 💬
          </button>
        </div>
      </div>
    </main>
  );
}
