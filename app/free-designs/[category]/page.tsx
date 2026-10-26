"use client";
import React, { useState, useMemo } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DesignPreviewSvg from "@/components/DesignPreviewSvg";
import { DESIGN_CATEGORIES, DESIGNS_DATABASE, DesignItem } from "@/data/designsData";
import {
  Search,
  Download,
  Eye,
  Filter,
  Check,
  ArrowLeft,
  X,
  FileCheck,
  Printer,
  Sparkles,
  Share2,
  Heart,
  Layers,
  SlidersHorizontal,
} from "lucide-react";

export default function CategoryDesignsPage() {
  const params = useParams();
  const router = useRouter();
  const categorySlug = (params?.category as string) || "visiting-card";

  // State
  const [search, setSearch] = useState("");
  const [selectedFormat, setSelectedFormat] = useState<string>("ALL");
  const [sortBy, setSortBy] = useState<"popular" | "downloads" | "title">("popular");
  const [previewModalDesign, setPreviewModalDesign] = useState<DesignItem | null>(null);
  const [downloadSuccessId, setDownloadSuccessId] = useState<string | null>(null);
  const [likedMap, setLikedMap] = useState<Record<string, boolean>>({});

  // Current category info
  const currentCategory = useMemo(() => {
    return DESIGN_CATEGORIES.find((c) => c.slug === categorySlug) || DESIGN_CATEGORIES[0];
  }, [categorySlug]);

  // Filtered designs
  const designs = useMemo(() => {
    let list = DESIGNS_DATABASE.filter((d) => d.categorySlug === categorySlug);

    // If current category has few items in seed, also supplement with other items for display richness
    if (list.length < 4) {
      list = DESIGNS_DATABASE;
    }

    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (d) =>
          d.title.toLowerCase().includes(q) ||
          d.description.toLowerCase().includes(q) ||
          d.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    if (selectedFormat !== "ALL") {
      list = list.filter((d) => d.formats.includes(selectedFormat as any));
    }

    if (sortBy === "downloads") {
      list = [...list].sort((a, b) => b.downloads - a.downloads);
    } else if (sortBy === "popular") {
      list = [...list].sort((a, b) => b.likes - a.likes);
    } else if (sortBy === "title") {
      list = [...list].sort((a, b) => a.title.localeCompare(b.title));
    }

    return list;
  }, [categorySlug, search, selectedFormat, sortBy]);

  // Handle simulated download
  const handleDownload = (design: DesignItem, format: string) => {
    // Generate sample text file as download demonstration
    const blob = new Blob(
      [
        `Template: ${design.title}\nCategory: ${design.category}\nFormat: ${format}\nDimensions: ${design.dimensions}\nResolution: ${design.dpi} DPI\nColor Mode: ${design.colorMode}\n\nDownloaded from Vijay Printers Free Design Templates Hub.\n100% Free for Commercial & Personal Print Work.`,
      ],
      { type: "text/plain;charset=utf-8" }
    );
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${design.title.toLowerCase().replace(/[^a-z0-9]/g, "_")}_${format.toLowerCase()}_template.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    setDownloadSuccessId(design.id);
    setTimeout(() => {
      setDownloadSuccessId(null);
    }, 3000);
  };

  const toggleLike = (id: string) => {
    setLikedMap((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Breadcrumb & Navigation Bar */}
        <section className="bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <nav className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                  <Link href="/" className="hover:text-amber-600 transition-colors">
                    Home
                  </Link>
                  <span>/</span>
                  <Link href="/free-designs" className="hover:text-amber-600 transition-colors">
                    Free Design Templates
                  </Link>
                  <span>/</span>
                  <span className="text-slate-900 font-semibold">{currentCategory.name}</span>
                </nav>

                <div className="flex items-center gap-3">
                  <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900">
                    {currentCategory.name} Designs
                  </h1>
                  <span className="bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full border border-amber-200">
                    {currentCategory.count} Available
                  </span>
                </div>
                <p className="text-slate-500 text-xs md:text-sm mt-1 max-w-2xl">
                  {currentCategory.desc} Ready to edit in CorelDRAW, Adobe Illustrator, or Photoshop.
                </p>
              </div>

              <Link
                href="/free-designs"
                className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 px-4 py-2 rounded-full w-fit transition-colors"
              >
                <ArrowLeft size={14} /> Back to All Categories
              </Link>
            </div>

            {/* Category Switcher Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pt-6 pb-1 scrollbar-none">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider shrink-0 mr-2">
                Categories:
              </span>
              {DESIGN_CATEGORIES.map((cat) => {
                const isActive = cat.slug === categorySlug;
                return (
                  <button
                    key={cat.slug}
                    onClick={() => router.push(`/free-designs/${cat.slug}`)}
                    className={`shrink-0 px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-2 ${
                      isActive
                        ? "bg-slate-900 text-white shadow-md shadow-slate-900/10"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    }`}
                  >
                    <span>{cat.name}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                        isActive ? "bg-amber-500 text-slate-900 font-extrabold" : "bg-slate-200 text-slate-600"
                      }`}
                    >
                      {cat.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Filter and Content Area */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Controls Bar */}
          <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm mb-8 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-grow max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input
                type="text"
                placeholder={`Search ${currentCategory.name.toLowerCase()} templates...`}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all"
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {/* Format Filter Buttons */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 lg:pb-0">
              <span className="text-xs font-semibold text-slate-500 mr-2 flex items-center gap-1">
                <Layers size={14} /> Format:
              </span>
              {["ALL", "CDR", "PSD", "AI", "PDF"].map((fmt) => (
                <button
                  key={fmt}
                  onClick={() => setSelectedFormat(fmt)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                    selectedFormat === fmt
                      ? "bg-amber-500 text-slate-900 shadow-sm"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {fmt}
                </button>
              ))}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2">
              <SlidersHorizontal size={14} className="text-slate-400" />
              <span className="text-xs font-semibold text-slate-500">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-slate-50 border border-slate-200 text-xs font-semibold rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-800"
              >
                <option value="popular">Most Popular</option>
                <option value="downloads">Most Downloaded</option>
                <option value="title">Title (A - Z)</option>
              </select>
            </div>
          </div>

          {/* Download Success Banner */}
          {downloadSuccessId && (
            <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center justify-between animate-fadeIn">
              <div className="flex items-center gap-2">
                <Check className="text-emerald-600" size={18} />
                <span>Template downloaded successfully! Ready to import into your design software.</span>
              </div>
              <button onClick={() => setDownloadSuccessId(null)} className="text-emerald-700 hover:text-emerald-900">
                <X size={16} />
              </button>
            </div>
          )}

          {/* Multiple Designs Grid */}
          {designs.length === 0 ? (
            <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center max-w-md mx-auto my-12">
              <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-4 text-slate-400">
                <Search size={28} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">No designs found</h3>
              <p className="text-slate-500 text-xs mb-6">
                No templates matched &quot;{search}&quot; with format &quot;{selectedFormat}&quot;. Try resetting your filters.
              </p>
              <button
                onClick={() => {
                  setSearch("");
                  setSelectedFormat("ALL");
                }}
                className="px-4 py-2 rounded-xl bg-amber-500 text-slate-900 font-bold text-xs hover:bg-amber-400 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {designs.map((design) => {
                const isLiked = likedMap[design.id];

                return (
                  <div
                    key={design.id}
                    className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-amber-300 transition-all duration-300 flex flex-col"
                  >
                    {/* Realistic Preview Canvas */}
                    <div className="relative aspect-[16/11] bg-slate-100 overflow-hidden border-b border-slate-100 p-3 flex items-center justify-center">
                      <DesignPreviewSvg type={design.previewType} className="w-full h-full object-contain" />

                      {/* Top Badges */}
                      <div className="absolute top-3 left-3 flex items-center gap-1.5">
                        <span className="bg-emerald-600 text-white text-[10px] font-black px-2 py-0.5 rounded-full shadow-sm">
                          FREE
                        </span>
                        <span className="bg-slate-900/80 backdrop-blur-sm text-white text-[10px] font-mono px-2 py-0.5 rounded-full">
                          {design.dpi} DPI
                        </span>
                      </div>

                      {/* Favorite Button */}
                      <button
                        onClick={() => toggleLike(design.id)}
                        className={`absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-sm transition-all ${
                          isLiked
                            ? "bg-rose-500 text-white"
                            : "bg-white/80 text-slate-600 hover:bg-white hover:text-rose-500 shadow-sm"
                        }`}
                        title="Save to favorites"
                      >
                        <Heart size={14} className={isLiked ? "fill-current" : ""} />
                      </button>

                      {/* Hover Overlay with Quick View */}
                      <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                        <button
                          onClick={() => setPreviewModalDesign(design)}
                          className="bg-white text-slate-900 font-bold text-xs px-3.5 py-2 rounded-full shadow-lg flex items-center gap-1.5 hover:bg-amber-400 transition-colors"
                        >
                          <Eye size={14} /> Quick View
                        </button>
                      </div>
                    </div>

                    {/* Design Card Details */}
                    <div className="p-5 flex flex-col flex-grow">
                      {/* Dimensions & Color info */}
                      <div className="flex items-center justify-between text-[11px] text-slate-400 font-medium mb-1.5">
                        <span>{design.dimensions}</span>
                        <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-semibold text-[10px]">
                          CMYK Ready
                        </span>
                      </div>

                      {/* Title */}
                      <h3
                        onClick={() => setPreviewModalDesign(design)}
                        className="text-base font-bold text-slate-900 hover:text-amber-600 cursor-pointer transition-colors line-clamp-1 mb-2"
                      >
                        {design.title}
                      </h3>

                      <p className="text-slate-500 text-xs line-clamp-2 leading-relaxed mb-4">
                        {design.description}
                      </p>

                      {/* Format Badges */}
                      <div className="flex flex-wrap items-center gap-1.5 mb-5">
                        {design.formats.map((fmt) => (
                          <span
                            key={fmt}
                            className="bg-slate-100 text-slate-700 font-mono font-bold text-[10px] px-2 py-0.5 rounded border border-slate-200"
                          >
                            .{fmt.toLowerCase()}
                          </span>
                        ))}
                      </div>

                      {/* Bottom Action Bar */}
                      <div className="mt-auto pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                        <span className="text-[11px] text-slate-400">
                          {design.downloads.toLocaleString()} DLs
                        </span>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => setPreviewModalDesign(design)}
                            className="p-2 rounded-xl text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors"
                            title="Inspect Specs"
                          >
                            <Eye size={16} />
                          </button>

                          <button
                            onClick={() => handleDownload(design, design.formats[0])}
                            className="inline-flex items-center gap-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs px-3.5 py-2 rounded-xl shadow-sm transition-all active:scale-95"
                          >
                            <Download size={14} /> Download Free
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Printing Guidelines Section */}
          <div className="mt-16 bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
            <div className="flex items-center gap-2 text-amber-600 font-bold text-sm mb-2">
              <Printer size={18} />
              <span>Production &amp; Printing Specifications for {currentCategory.name}</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              How to Prepare These Files for Your Offset / Digital Press
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-xs text-slate-600">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <span className="font-bold text-slate-900 block mb-1">Bleed &amp; Margin</span>
                Includes 0.125 inch (3mm) bleed around all edges. Keep text 0.15 inch inside cutting line.
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <span className="font-bold text-slate-900 block mb-1">Color Mode</span>
                Pre-configured in CMYK FOGRA39 / US Web Coated (SWOP) v2. Converts without color shifting.
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <span className="font-bold text-slate-900 block mb-1">Die-Cut Lines</span>
                Cutter lines are kept on a dedicated spot-color layer named &ldquo;CUT_LINE&rdquo; for plotters.
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <span className="font-bold text-slate-900 block mb-1">Font Outlines</span>
                All text elements are preserved as live editable text + converted curve layers included.
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Quick View / Full Preview Modal */}
      {previewModalDesign && (
        <div
          onClick={() => setPreviewModalDesign(null)}
          className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto cursor-pointer"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-200 my-8 cursor-default"
          >
            {/* Modal Header */}
            <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50">
              <div>
                <span className="text-[11px] font-bold text-amber-600 uppercase tracking-wider">
                  {previewModalDesign.category} Template
                </span>
                <h3 className="text-lg font-bold text-slate-900">{previewModalDesign.title}</h3>
              </div>
              <button
                onClick={() => setPreviewModalDesign(null)}
                className="w-8 h-8 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-700 flex items-center justify-center transition-colors"
              >
                <X size={16} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              {/* Preview Canvas */}
              <div className="aspect-[16/10] bg-slate-100 rounded-2xl overflow-hidden border border-slate-200 p-4 flex items-center justify-center mb-6">
                <DesignPreviewSvg type={previewModalDesign.previewType} className="w-full h-full object-contain" />
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6 text-xs">
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <span className="text-slate-400 block text-[10px]">Dimensions</span>
                  <span className="font-bold text-slate-800">{previewModalDesign.dimensions}</span>
                </div>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <span className="text-slate-400 block text-[10px]">Resolution</span>
                  <span className="font-bold text-slate-800">{previewModalDesign.dpi} DPI</span>
                </div>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <span className="text-slate-400 block text-[10px]">Color Setup</span>
                  <span className="font-bold text-slate-800">{previewModalDesign.colorMode}</span>
                </div>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <span className="text-slate-400 block text-[10px]">License</span>
                  <span className="font-bold text-emerald-700">Free Commercial</span>
                </div>
              </div>

              <p className="text-slate-600 text-xs mb-6 leading-relaxed">
                {previewModalDesign.description}
              </p>

              {/* Formats download options */}
              <div>
                <span className="text-xs font-bold text-slate-900 block mb-3">
                  Choose Download Format (All Vector Source Files):
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {previewModalDesign.formats.map((fmt) => (
                    <button
                      key={fmt}
                      onClick={() => handleDownload(previewModalDesign, fmt)}
                      className="flex items-center justify-between p-3 rounded-xl border border-slate-200 bg-slate-50 hover:bg-amber-50 hover:border-amber-300 transition-colors group text-left"
                    >
                      <div>
                        <span className="block font-mono font-bold text-sm text-slate-800 group-hover:text-amber-800">
                          .{fmt.toLowerCase()}
                        </span>
                        <span className="text-[10px] text-slate-400">Source File</span>
                      </div>
                      <Download size={16} className="text-slate-400 group-hover:text-amber-600" />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span className="flex items-center gap-1.5">
                <FileCheck size={14} className="text-emerald-600" />
                Verified no missing fonts or broken links
              </span>
              <button
                onClick={() => setPreviewModalDesign(null)}
                className="px-4 py-2 rounded-xl text-slate-600 hover:text-slate-900 font-semibold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
