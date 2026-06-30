import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/Navbar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body className="bg-[#0A0E1A] text-white">
        <CartProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}