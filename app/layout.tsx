import type { Metadata, Viewport } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "600", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "مسبار | كاميرات المراقبة والأنظمة الأمنية",
  description:
    "متجر مسبار لأنظمة المراقبة وكاميرات الأمن في عرعر. نوفر أفضل الكاميرات والأنظمة بأعلى جودة.",
  icons: {
    icon: "/misbar-logo.png",
  },
  openGraph: {
    title: "مسبار | كاميرات المراقبة والأنظمة الأمنية",
    description: "متجر مسبار لأنظمة المراقبة وكاميرات الأمن في عرعر.",
    images: [
      {
        url: "/misbar-logo.png",
        width: 1200,
        height: 630,
        alt: "مسبار",
      },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${cairo.className} bg-slate-50 text-slate-900 antialiased min-h-screen flex flex-col`}
      >
        <CartProvider>
          <AnnouncementBar />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
