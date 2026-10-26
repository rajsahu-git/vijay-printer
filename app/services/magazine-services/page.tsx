"use client";
import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HubCardIllustrations from "@/components/HubCardIllustrations";
import { BookOpen, Download, Calendar, ArrowRight, Star } from "lucide-react";

const EDITIONS = [
  {
    issue: "October 2026 Special",
    headline: "The Rise of High-Speed Digital Embellishment & Foil Stamping",
    pages: "72 Pages",
    month: "October 2026",
    color: "from-blue-600 to-indigo-800",
  },
  {
    issue: "September 2026 Edition",
    headline: "Offset vs Digital Economics in Commercial Book Production",
    pages: "68 Pages",
    month: "September 2026",
    color: "from-teal-600 to-cyan-800",
  },
  {
    issue: "August 2026 Edition",
    headline: "Eco-friendly Inks, Biodegradable Coatings & Sustainable Substrates",
    pages: "64 Pages",
    month: "August 2026",
    color: "from-amber-600 to-rose-700",
  },
];

export default function MagazineServicesPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <section className="bg-white border-b border-slate-200 py-12 md:py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-24 h-24 mx-auto mb-4">
              <HubCardIllustrations type="magazine-services" className="w-full h-full" />
            </div>
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-2">
              Printers Club Today Pvt. Ltd.
            </span>
            <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
              Printers Club Today Magazine
            </h1>
            <p className="text-slate-600 text-sm md:text-base max-w-2xl mx-auto mb-6 leading-relaxed">
              Not just a magazine — India&apos;s fastest growing printing industry platform with monthly news, market trends, machine reviews, and business insights.
            </p>
            <nav className="inline-flex items-center gap-2 text-xs text-slate-500">
              <Link href="/" className="hover:text-amber-600">Home</Link>
              <span>/</span>
              <span className="text-slate-800 font-semibold">Magazine Services</span>
            </nav>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-slate-900">Latest Monthly Issues</h2>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-4 py-2.5 rounded-full transition-colors">
              Subscribe Free (Print Edition)
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {EDITIONS.map((ed) => (
              <div
                key={ed.issue}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all flex flex-col"
              >
                <div className={`p-8 bg-gradient-to-br ${ed.color} text-white aspect-[4/3] flex flex-col justify-between`}>
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono uppercase tracking-wider bg-white/20 px-2.5 py-0.5 rounded">
                      {ed.month}
                    </span>
                    <BookOpen size={18} />
                  </div>
                  <div>
                    <span className="text-xs text-white/80 block mb-1">{ed.issue}</span>
                    <h3 className="font-bold text-lg leading-snug">{ed.headline}</h3>
                  </div>
                </div>

                <div className="p-6 flex items-center justify-between">
                  <span className="text-xs text-slate-500">{ed.pages} • Full Color PDF</span>
                  <button
                    onClick={() => alert(`Downloading ${ed.issue} PDF...`)}
                    className="inline-flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-3.5 py-2 rounded-xl transition-colors"
                  >
                    <Download size={14} /> Read Issue
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
