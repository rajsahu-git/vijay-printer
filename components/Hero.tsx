"use client";
import { Sparkles, BookOpen } from "lucide-react";

interface HeroProps {
  onQuoteClick: () => void;
}

export default function Hero({ onQuoteClick }: HeroProps) {
  return (
    <section
      id="home"
      className="relative overflow-hidden text-white"
      style={{
        background: `
          radial-gradient(ellipse 75% 55% at 50% 0%, rgba(245, 158, 11, 0.24) 0%, transparent 65%),
          radial-gradient(ellipse 65% 52% at 88% 28%, rgba(225, 29, 72, 0.28) 0%, transparent 60%),
          radial-gradient(ellipse 60% 50% at 12% 65%, rgba(190, 18, 60, 0.32) 0%, transparent 60%),
          linear-gradient(180deg, #260309 0%, #450614 36%, #5a091a 70%, #200207 100%)
        `,
      }}
    >
      {/* Subtle traditional Indian celebration jaali micro-pattern */}
      <div
        className="absolute inset-0 opacity-[0.045] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #fef08a 1px, transparent 0)`,
          backgroundSize: "28px 28px",
        }}
      />

      {/* Frame accents with subtle gold celebration hairline border */}
      <div className="absolute inset-4 sm:inset-6 border border-amber-400/20 rounded-2xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 py-16 sm:py-24 text-center">
        {/* Prestige Indian Celebration Badge */}
        <div className="inline-flex items-center gap-2 bg-amber-400/15 border border-amber-400/35 text-amber-300 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide uppercase backdrop-blur-sm shadow-sm">
          <Sparkles size={13} className="text-amber-400" />
          <span>Premium Indian Print Studio · Alpha 3D</span>
        </div>

        {/* Elegant Headline with Royal Gold Foil Accents */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.18] mb-6 tracking-tight drop-shadow-md text-white">
          Crafting <span className="font-serif italic text-amber-300 font-normal">Timeless</span> Indian Invitations
          <br className="hidden sm:inline" />
          {" "}&amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-300 to-amber-400">Luxury Print Stationery</span>
        </h1>

        {/* Subtitle */}
        <p className="text-amber-50/90 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed font-normal">
          Exquisite <strong className="text-amber-300 font-semibold">Shaadi Kankotri Cards</strong>, Velvet &amp; Acrylic Boxes,{" "}
          <strong className="text-white font-semibold">Hot-Foil Stamping</strong>, Embossing &amp; 3D Signage —
          crafted with devotion for every celebration.
        </p>

        {/* Highlight Service Badges */}
        <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3 mb-10 text-xs sm:text-sm">
          {[
            "✦ Printing",
            "✦ Media",
            "✦ Advertising solutions",
            "✦ stationery",
          ].map((tag) => (
            <span
              key={tag}
              className="bg-white/10 hover:bg-white/15 border border-amber-400/25 hover:border-amber-400/45 text-amber-100 px-4 py-1.5 rounded-full backdrop-blur-sm transition-all shadow-xs"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#gallery"
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-bold px-8 py-3.5 rounded-full transition-all shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02] text-sm sm:text-base"
          >
            <BookOpen size={18} />
            Explore Sample Catalog
          </a>

        </div>
      </div>
    </section>
  );
}
