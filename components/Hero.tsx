"use client";
import { Sparkles, BookOpen } from "lucide-react";

interface HeroProps {
  onQuoteClick: () => void;
}

export default function Hero({ onQuoteClick }: HeroProps) {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-red-950 via-red-900 to-amber-900 text-white"
    >
      {/* Decorative mandala pattern overlay */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Ccircle cx='60' cy='60' r='50' fill='none' stroke='%23D4AF37' stroke-width='1'/%3E%3Ccircle cx='60' cy='60' r='35' fill='none' stroke='%23D4AF37' stroke-width='1'/%3E%3Ccircle cx='60' cy='60' r='20' fill='none' stroke='%23D4AF37' stroke-width='1'/%3E%3Cline x1='10' y1='60' x2='110' y2='60' stroke='%23D4AF37' stroke-width='0.5'/%3E%3Cline x1='60' y1='10' x2='60' y2='110' stroke='%23D4AF37' stroke-width='0.5'/%3E%3Cline x1='25' y1='25' x2='95' y2='95' stroke='%23D4AF37' stroke-width='0.5'/%3E%3Cline x1='95' y1='25' x2='25' y2='95' stroke='%23D4AF37' stroke-width='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: "120px 120px",
        }}
      />

      {/* Gold border frame */}
      <div className="absolute inset-4 border border-amber-400/30 rounded-lg pointer-events-none" />
      <div className="absolute inset-6 border border-amber-400/15 rounded-lg pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 py-24 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide uppercase">
          <Sparkles size={12} />
          Premium Indian Print Studio
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 tracking-tight">
          Crafting{" "}
          <span className="text-amber-400">Timeless</span> Indian
          <br />
          Invitations &amp; Premium
          <br />
          <span className="text-amber-400">Print Stationery</span>
        </h1>

        <p className="text-amber-100/80 text-lg md:text-xl max-w-2xl mx-auto mb-4 leading-relaxed">
          Exquisite <strong className="text-amber-300">Shaadi Kankotri Cards</strong>, Velvet &amp; Acrylic Boxes,{" "}
          <strong className="text-amber-300">Hot-Foil Stamping</strong>, Embossing &amp; High-End Business Cards —
          crafted with love for every occasion.
        </p>

        {/* Highlights */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 text-sm">
          {["✦ Gold Foil Stamping", "✦ Velvet Boxes", "✦ Acrylic Cards", "✦ Spot UV", "✦ Pan-India Shipping"].map(
            (tag) => (
              <span key={tag} className="bg-amber-500/20 border border-amber-400/30 text-amber-200 px-3 py-1 rounded-full">
                {tag}
              </span>
            )
          )}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#gallery"
            className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-amber-950 font-bold px-8 py-3.5 rounded-full transition-colors shadow-lg"
          >
            <BookOpen size={18} />
            Explore Sample Catalog
          </a>
          <button
            onClick={onQuoteClick}
            className="flex items-center justify-center gap-2 border-2 border-amber-400 text-amber-300 hover:bg-amber-400/10 font-bold px-8 py-3.5 rounded-full transition-colors"
          >
            <Sparkles size={18} />
            Request Price Quote
          </button>
        </div>
      </div>
    </section>
  );
}
