import type { Metadata } from "next";
import { Cormorant_Garamond, Karla } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const karla = Karla({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "The Time Tech — Premium Online Business Courses",
    template: "%s | The Time Tech",
  },
  description:
    "Live instructor-led courses in Shopify e-commerce, Amazon FBA and digital marketing. Invest in time, build your future.",
  authors: [{ name: "The Time Tech" }],
  icons: {
    icon: "/images/logo.png",
  },
  openGraph: {
    title: "The Time Tech — Premium Online Business Courses",
    description:
      "Live instructor-led courses in Shopify e-commerce, Amazon FBA and digital marketing.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${karla.variable}`}>
      <body className="min-h-screen bg-background text-foreground antialiased">{children}</body>
    </html>
  );
}
