"use client";
import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HubCardIllustrations from "@/components/HubCardIllustrations";
import { Search, Tag, MapPin, CheckCircle, PhoneCall, ShieldCheck, PlusCircle } from "lucide-react";

const MACHINES = [
  {
    id: "m1",
    title: "Heidelberg Speedmaster SM 74 (4-Color Offset)",
    category: "Offset Press",
    condition: "Pre-Owned (Refurbished)",
    year: "2018",
    price: "₹ 38,50,000",
    location: "Ahmedabad, Gujarat",
    seller: "Krupa Print Machinery",
    verified: true,
  },
  {
    id: "m2",
    title: "Konica Minolta AccurioPress C4070 (Digital Color)",
    category: "Digital Production",
    condition: "Certified Pre-Owned",
    year: "2021",
    price: "₹ 14,20,000",
    location: "Mumbai, Maharashtra",
    seller: "Apex Digi Systems",
    verified: true,
  },
  {
    id: "m3",
    title: "Polar 115 High-Speed Paper Cutting Machine",
    category: "Post-Press / Finishing",
    condition: "Pre-Owned (Excellent)",
    year: "2017",
    price: "₹ 8,90,000",
    location: "Surat, Gujarat",
    seller: "Classic Equipments",
    verified: true,
  },
  {
    id: "m4",
    title: "Semi-Automatic Heavy Duty Foil Stamping & Die Cutter",
    category: "Die-Cutting / Foil",
    condition: "Brand New",
    year: "2026",
    price: "₹ 6,50,000",
    location: "Rajkot, Gujarat",
    seller: "Shreeji Machinery Works",
    verified: true,
  },
];

export default function BuySellMachinesPage() {
  const [filterCat, setFilterCat] = useState("ALL");

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <section className="bg-white border-b border-slate-200 py-12 md:py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-24 h-24 mx-auto mb-4">
              <HubCardIllustrations type="buy-sell-machines" className="w-full h-full" />
            </div>
            <span className="text-xs font-bold text-amber-600 uppercase tracking-widest block mb-2">
              New Deals • Direct Seller Connect
            </span>
            <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
              Buy &amp; Sell Printing Machines
            </h1>
            <p className="text-slate-600 text-sm md:text-base max-w-2xl mx-auto mb-6 leading-relaxed">
              Free online marketplace for buying and selling printing machinery — offset presses, digital production printers, paper cutters, and lamination machines from trusted sellers.
            </p>
            <nav className="inline-flex items-center gap-2 text-xs text-slate-500">
              <Link href="/" className="hover:text-amber-600">Home</Link>
              <span>/</span>
              <span className="text-slate-800 font-semibold">Buy &amp; Sell Machines</span>
            </nav>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Featured Machinery Listings</h2>
              <p className="text-slate-500 text-xs mt-1">Verified equipment with direct contact to sellers</p>
            </div>
            <button
              onClick={() => alert("Post an Ad feature: Please contact WhatsApp support to list your machine for free!")}
              className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs px-5 py-2.5 rounded-full shadow-sm transition-all"
            >
              <PlusCircle size={16} /> Post Free Machine Listing
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {MACHINES.map((m) => (
              <div
                key={m.id}
                className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full">
                      {m.category}
                    </span>
                    <span className="text-xs font-semibold text-slate-500">{m.condition} ({m.year})</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{m.title}</h3>
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-4">
                    <MapPin size={14} className="text-slate-400" />
                    <span>{m.location}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1 text-emerald-700 font-semibold">
                      <ShieldCheck size={14} /> Verified Seller: {m.seller}
                    </span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 block">Asking Price</span>
                    <span className="text-xl font-black text-amber-600">{m.price}</span>
                  </div>
                  <button
                    onClick={() => alert(`Connecting you to seller: ${m.seller} for ${m.title}`)}
                    className="inline-flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs px-4 py-2.5 rounded-xl transition-colors"
                  >
                    <PhoneCall size={14} /> Contact Seller
                  </button>
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
