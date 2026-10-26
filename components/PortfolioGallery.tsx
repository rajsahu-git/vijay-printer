"use client";
import { useState } from "react";
import { X, ZoomIn } from "lucide-react";

type Category = "All" | "Wedding Cards" | "Birthday & Events" | "Visiting Cards" | "Custom Box Packaging";

interface GalleryItem {
  id: number;
  title: string;
  category: Exclude<Category, "All">;
  technique: string;
  paper: string;
  moq: string;
  color: string;
  emoji: string;
}

const items: GalleryItem[] = [
  { id: 1, title: "Royal Gold Kankotri", category: "Wedding Cards", technique: "Gold Foil Stamping", paper: "300 GSM Art Card", moq: "100 pcs", color: "from-amber-800 to-red-900", emoji: "💍" },
  { id: 2, title: "Velvet Embossed Invite", category: "Wedding Cards", technique: "Embossing + Velvet", paper: "400 GSM Velvet", moq: "50 pcs", color: "from-red-900 to-rose-900", emoji: "🌹" },
  { id: 3, title: "Acrylic Wedding Card", category: "Wedding Cards", technique: "Acrylic UV Print", paper: "3mm Acrylic", moq: "25 pcs", color: "from-sky-800 to-indigo-900", emoji: "💎" },
  { id: 4, title: "Floral Birthday Invite", category: "Birthday & Events", technique: "Full Color Offset", paper: "250 GSM Matte", moq: "100 pcs", color: "from-pink-700 to-fuchsia-900", emoji: "🎂" },
  { id: 5, title: "Corporate Event Card", category: "Birthday & Events", technique: "Spot UV + Foil", paper: "350 GSM Gloss", moq: "200 pcs", color: "from-slate-700 to-slate-900", emoji: "🎉" },
  { id: 6, title: "Luxury Business Card", category: "Visiting Cards", technique: "Soft Touch + Spot UV", paper: "600 GSM Duplex", moq: "100 pcs", color: "from-zinc-700 to-zinc-900", emoji: "💼" },
  { id: 7, title: "Metal Finish Visiting", category: "Visiting Cards", technique: "Metal Foil Lamination", paper: "Metal Core 0.5mm", moq: "50 pcs", color: "from-yellow-700 to-amber-900", emoji: "✨" },
  { id: 8, title: "Velvet Gift Box", category: "Custom Box Packaging", technique: "Velvet Wrap + Ribbon", paper: "Rigid Board + Velvet", moq: "25 pcs", color: "from-purple-800 to-violet-900", emoji: "🎁" },
  { id: 9, title: "Acrylic Card Box", category: "Custom Box Packaging", technique: "Laser Engraved Acrylic", paper: "5mm Clear Acrylic", moq: "10 pcs", color: "from-teal-700 to-cyan-900", emoji: "📦" },
];

const categories: Category[] = ["All", "Wedding Cards", "Birthday & Events", "Visiting Cards", "Custom Box Packaging"];

export default function PortfolioGallery() {
  const [active, setActive] = useState<Category>("All");
  const [selected, setSelected] = useState<GalleryItem | null>(null);

  const filtered = active === "All" ? items : items.filter((i) => i.category === active);

  return (
    <section id="gallery" className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-amber-600 font-semibold text-sm uppercase tracking-widest mb-2">Our Work</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-red-900">Sample Portfolio</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all border ${
                active === cat
                  ? "bg-red-900 text-white border-red-900 shadow-md"
                  : "bg-white text-amber-900 border-amber-200 hover:border-amber-400"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelected(item)}
              className="group cursor-pointer rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-amber-100"
            >
              {/* Placeholder visual */}
              <div className={`relative h-52 bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                <span className="text-7xl opacity-80">{item.emoji}</span>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity" size={32} />
                </div>
                <span className="absolute top-3 right-3 bg-amber-500 text-amber-950 text-xs font-bold px-2.5 py-1 rounded-full">
                  {item.technique}
                </span>
              </div>
              <div className="p-4 bg-white">
                <h3 className="font-bold text-red-900 text-base">{item.title}</h3>
                <p className="text-amber-700 text-xs mt-1">{item.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-md w-full overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`h-56 bg-gradient-to-br ${selected.color} flex items-center justify-center relative`}>
              <span className="text-8xl">{selected.emoji}</span>
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-3 bg-black/40 text-white rounded-full p-1.5 hover:bg-black/60 transition-colors"
              >
                <X size={18} />
              </button>
            </div>
            <div className="p-6">
              <span className="text-xs font-semibold text-amber-600 uppercase tracking-widest">{selected.category}</span>
              <h3 className="text-2xl font-extrabold text-red-900 mt-1 mb-4">{selected.title}</h3>
              <div className="grid grid-cols-3 gap-3 text-center">
                {[
                  { label: "Paper Quality", value: selected.paper },
                  { label: "Technique", value: selected.technique },
                  { label: "Min. Order", value: selected.moq },
                ].map((d) => (
                  <div key={d.label} className="bg-amber-50 rounded-xl p-3">
                    <p className="text-xs text-amber-600 font-medium mb-1">{d.label}</p>
                    <p className="text-xs font-bold text-red-900">{d.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
