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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
  : process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? new URL(`https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`)
    : new URL("http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: "مسبار | كاميرات المراقبة والأنظمة الأمنية",
  description:
    "متجر مسبار لأنظمة المراقبة وكاميرات الأمن في عرعر. نوفر أفضل الكاميرات والأنظمة بأعلى جودة.",
  // Favicon and Apple touch icon come from app/icon.png and app/apple-icon.png.
  openGraph: {
    type: "website",
    locale: "ar_SA",
    url: "/",
    siteName: "مسبار",
    title: "مسبار | كاميرات المراقبة والأنظمة الأمنية",
    description: "متجر مسبار لأنظمة المراقبة وكاميرات الأمن في عرعر.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "مسبار | كاميرات المراقبة والأنظمة الأمنية",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "مسبار | كاميرات المراقبة والأنظمة الأمنية",
    description: "متجر مسبار لأنظمة المراقبة وكاميرات الأمن في عرعر.",
    images: ["/og-image.png"],
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
