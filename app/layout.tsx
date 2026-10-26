import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vijay printers | Premium Indian Wedding Invitations & Print Studio",
  description:
    "Luxury Shaadi Kankotri cards, gold foil stamping, velvet & acrylic boxes, premium business cards. Pan-India shipping. Get instant WhatsApp quote.",
  keywords: "wedding cards, kankotri, gold foil, business cards, printing, Surat, Gujarat",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-full flex flex-col bg-amber-50 font-sans antialiased">{children}</body>
    </html>
  );
}
