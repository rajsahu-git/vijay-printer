"use client";
import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DesignPreviewSvg from "@/components/DesignPreviewSvg";
import { DESIGN_CATEGORIES, DESIGNS_DATABASE } from "@/data/designsData";
import { Search, Download, Sparkles, ChevronRight, CheckCircle2, ArrowRight } from "lucide-react";

export default function FreeDesignsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredDesigns = DESIGNS_DATABASE.filter((d) => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      d.title.toLowerCase().includes(q) ||
      d.category.toLowerCase().includes(q) ||
      d.tags.some((t) => t.toLowerCase().includes(q))
    );
  });

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Top Header Banner matching Screenshot 2 */}
        <section className="bg-white border-b border-slate-200/80 py-12 md:py-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-wider uppercase mb-3">
              FREE DESIGNS
            </h1>
            <p className="text-slate-500 text-sm md:text-base font-normal max-w-2xl mx-auto mb-6">
              We are happy to help printing press / advertising agencies
            </p>

            {/* Breadcrumb matching Screenshot 2 */}
            <nav className="inline-flex items-center gap-2 text-xs md:text-sm text-slate-500">
              <Link href="/" className="hover:text-amber-600 transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-slate-800 font-semibold">Free Design Templates</span>
            </nav>
          </div>
        </section>

        {/* Categories Section matching Screenshot 2 */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          {/* Search Bar & Quick Stats */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input
                type="text"
                placeholder="Search templates (e.g. visiting card, royal gold, clinic)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-full border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 shadow-sm transition-all"
              />
            </div>

            <div className="flex items-center gap-2 text-xs font-medium text-slate-600">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Available Formats:</span>
              <span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-mono font-bold">CDR</span>
              <span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-mono font-bold">PSD</span>
              <span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-mono font-bold">AI</span>
              <span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-mono font-bold">PDF</span>
            </div>
          </div>

          {/* Category Cards matching Screenshot 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {DESIGN_CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                href={`/free-designs/${cat.slug}`}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:border-amber-300 transition-all duration-300 flex flex-col"
              >
                {/* Mockup Preview Area */}
                <div className="relative w-full aspect-[4/3] bg-slate-100 overflow-hidden border-b border-slate-100">
                  <DesignPreviewSvg
                    type={`category-${cat.previewType}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="bg-white/95 text-slate-900 text-xs font-bold px-3.5 py-1.5 rounded-full shadow-md flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      View All Designs <ChevronRight size={14} />
                    </span>
                  </div>
                </div>

                {/* Card Info matching Screenshot 2 */}
                <div className="p-5 text-center flex-grow flex flex-col justify-center">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-600 transition-colors mb-1.5">
                    {cat.name}
                  </h3>
                  <p className="text-sm font-bold text-amber-600">
                    Free Designs Available : <span className="text-amber-700">{cat.count}</span>
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Quick Browse: Multiple Designs Highlight */}
          <div className="mt-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
              <div>
                <div className="flex items-center gap-2">
                  <Sparkles size={18} className="text-amber-500" />
                  <h2 className="text-2xl font-bold text-slate-900">Popular Free Design Templates</h2>
                </div>
                <p className="text-slate-500 text-sm mt-1">
                  Ready-to-print CorelDRAW (.cdr) and Photoshop (.psd) files with cutlines and CMYK colors
                </p>
              </div>

              <Link
                href="/free-designs/visiting-card"
                className="inline-flex items-center gap-1 text-sm font-bold text-amber-600 hover:text-amber-700"
              >
                Explore all categories <ArrowRight size={16} />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredDesigns.slice(0, 8).map((design) => (
                <div
                  key={design.id}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col group"
                >
                  <div className="relative aspect-[16/10] bg-slate-50 border-b border-slate-100 p-3 flex items-center justify-center">
                    <DesignPreviewSvg type={design.previewType} className="w-full h-full object-contain" />
                    <span className="absolute top-2.5 right-2.5 bg-emerald-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                      FREE
                    </span>
                  </div>

                  <div className="p-4 flex flex-col flex-grow">
                    <span className="text-[11px] font-semibold text-amber-600 uppercase tracking-wider mb-1">
                      {design.category}
                    </span>
                    <h4 className="font-bold text-slate-900 text-sm line-clamp-1 group-hover:text-amber-600 transition-colors mb-2">
                      {design.title}
                    </h4>

                    {/* Format Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {design.formats.map((fmt) => (
                        <span key={fmt} className="text-[10px] bg-slate-100 text-slate-700 font-mono font-semibold px-1.5 py-0.5 rounded">
                          {fmt}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto pt-3 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs text-slate-400">
                        {design.downloads.toLocaleString()} downloads
                      </span>
                      <Link
                        href={`/free-designs/${design.categorySlug}`}
                        className="inline-flex items-center gap-1 text-xs font-bold text-amber-600 hover:text-amber-800"
                      >
                        Details <ChevronRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Value Highlights */}
          <div className="mt-16 bg-amber-50/70 border border-amber-200 rounded-3xl p-8 md:p-10">
            <h3 className="text-xl md:text-2xl font-bold text-amber-950 mb-4 text-center">
              Why Printers &amp; Designers Trust Our Free Templates
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-emerald-600 shrink-0 mt-0.5" size={20} />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">100% Print-Ready (300 DPI CMYK)</h4>
                  <p className="text-slate-600 text-xs mt-1">Pre-configured bleed margins, safe zones, and standard cutter guidelines.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-emerald-600 shrink-0 mt-0.5" size={20} />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Editable Vector CorelDRAW &amp; PSD</h4>
                  <p className="text-slate-600 text-xs mt-1">Compatible with CorelDRAW X7 up to 2024, Adobe Photoshop, and Illustrator.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-emerald-600 shrink-0 mt-0.5" size={20} />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Free Commercial Use</h4>
                  <p className="text-slate-600 text-xs mt-1">No watermark, no attribution required. Edit and print directly for your clients.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
