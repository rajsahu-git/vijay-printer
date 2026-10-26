"use client";
import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HubCardIllustrations from "@/components/HubCardIllustrations";
import { Check, Sparkles, MessageCircle, ArrowRight } from "lucide-react";

const SERVICES_LIST = [
  {
    title: "Visiting Cards & Business Cards",
    specs: "350-400 GSM Art Card, Spot UV, Velvet Lamination, Gold / Silver Foil, Embossing",
    price: "Starts at ₹ 250 / 100 pcs",
  },
  {
    title: "Brochures, Pamphlets & Flyers",
    specs: "130-170 GSM Gloss / Matt Art Paper, Bi-Fold, Tri-Fold, Multi-page booklet",
    price: "Starts at ₹ 1.20 / piece",
  },
  {
    title: "Corporate Stationery & Letterheads",
    specs: "100 GSM Bond Paper, Executive Cotton Paper, Matching Envelopes & Folders",
    price: "Starts at ₹ 450 / 500 pcs",
  },
  {
    title: "Posters & Flex / Vinyl Banners",
    specs: "High-resolution Eco-solvent & UV print on Star Flex, Backlit, and Vinyl with lamination",
    price: "Starts at ₹ 14 / sq. ft.",
  },
  {
    title: "Wedding Cards & Luxury Boxes",
    specs: "Laser cut, MDF rigid boxes, velvet lining, gold screen printing & wax seals",
    price: "Custom quotation",
  },
  {
    title: "Product Packaging & Mono Cartons",
    specs: "FBB / Duplex board, drip-off UV, window patching, automatic die punching & gluing",
    price: "Direct manufacturer rates",
  },
];

export default function PrintingServicesPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <section className="bg-white border-b border-slate-200 py-12 md:py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-24 h-24 mx-auto mb-4">
              <HubCardIllustrations type="printing-services" className="w-full h-full" />
            </div>
            <span className="text-xs font-bold text-amber-600 uppercase tracking-widest block mb-2">
              Commercial &amp; Digital Print Studio
            </span>
            <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
              Premium Printing Services
            </h1>
            <p className="text-slate-600 text-sm md:text-base max-w-2xl mx-auto mb-6 leading-relaxed">
              A wide range of premium printing services — visiting cards, pamphlets, posters, stationery, and packaging at direct press competitive prices.
            </p>
            <nav className="inline-flex items-center gap-2 text-xs text-slate-500">
              <Link href="/" className="hover:text-amber-600">Home</Link>
              <span>/</span>
              <span className="text-slate-800 font-semibold">Printing Services</span>
            </nav>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {SERVICES_LIST.map((s) => (
              <div
                key={s.title}
                className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{s.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">{s.specs}</p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full">
                    {s.price}
                  </span>
                  <a
                    href="https://wa.me/919999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-slate-900 hover:text-green-600"
                  >
                    Inquire <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
