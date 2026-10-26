"use client";
import React from "react";
import Link from "next/link";
import HubCardIllustrations from "./HubCardIllustrations";
import { ArrowRight, Sparkles } from "lucide-react";

export interface HubCardItem {
  id: string;
  title: string;
  subtitle?: string;
  subtitleColor?: string;
  desc: string;
  href: string;
  illustrationType: string;
  badge?: string;
  highlight?: boolean;
}

export const HUB_CARDS: HubCardItem[] = [
  {
    id: "printing-exhibition",
    title: "Printing Exhibition",
    subtitle: "Printers Club Expo Pvt. Ltd.",
    subtitleColor: "text-rose-600",
    desc: "India's Biggest Printing Expo Series — exploring new technologies and the future of the printing industry.",
    href: "/services/printing-exhibition",
    illustrationType: "printing-exhibition",
  },
  {
    id: "magazine-services",
    title: "Magazine Services",
    subtitle: "Printers Club Today Pvt. Ltd.",
    subtitleColor: "text-blue-600",
    desc: "Not just a magazine — India's fastest growing printing industry platform with news, trends, and insights.",
    href: "/services/magazine-services",
    illustrationType: "magazine-services",
  },
  {
    id: "printing-services",
    title: "Printing Services",
    desc: "A wide range of premium printing services — visiting cards, pamphlets, posters, stationery, and much more at competitive prices.",
    href: "/services/printing-services",
    illustrationType: "printing-services",
  },
  {
    id: "buy-sell-machines",
    title: "Buy & Sell Machines",
    desc: "Free online marketplace for buying and selling printing machines — both new and pre-owned equipment from trusted sellers.",
    href: "/services/buy-sell-machines",
    illustrationType: "buy-sell-machines",
  },
  {
    id: "free-design-files",
    title: "Free Design Files",
    desc: "Download free design templates and graphic resources crafted exclusively for printers and advertising agencies.",
    href: "/free-designs",
    illustrationType: "free-design-files",
    badge: "Popular • Nested Pages",
    highlight: true,
  },
  {
    id: "paper-gsm-calculator",
    title: "Paper GSM Calculator",
    desc: "Free-to-use Paper GSM & Grammage Calculator — simple, accurate, and developed by Printers Club of India Limited.",
    href: "/paper-gsm-calculator",
    illustrationType: "paper-gsm-calculator",
    badge: "Interactive Tool",
  },
  {
    id: "software-services",
    title: "Software Services",
    desc: "Free Printing Order Management Software — simple, powerful, and designed to streamline your daily print shop operations.",
    href: "/services/software-services",
    illustrationType: "software-services",
  },
];

export default function HubServicesGrid() {
  return (
    <section className="bg-slate-50/70 py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles size={14} className="text-amber-600" />
            Complete Printing Ecosystem
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Printers Services &amp; Industry Hub
          </h2>
          <p className="mt-3 text-slate-600 text-base md:text-lg">
            Explore free design templates, machinery marketplace, exhibitions, software tools, and calculators designed for the printing industry.
          </p>
        </div>

        {/* Row 1: 4 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {HUB_CARDS.slice(0, 4).map((card) => (
            <Link
              key={card.id}
              href={card.href}
              className="group relative bg-white rounded-3xl p-7 flex flex-col items-center text-center border border-slate-100 shadow-[0_4px_24px_rgba(0,0,0,0.05)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.1)] hover:-translate-y-1.5 transition-all duration-300"
            >
              <div className="w-28 h-28 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300">
                <HubCardIllustrations type={card.illustrationType} className="w-full h-full" />
              </div>

              <h3 className="text-xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors mb-1.5">
                {card.title}
              </h3>

              {card.subtitle && (
                <p className={`text-xs font-semibold mb-3 ${card.subtitleColor || "text-slate-500"}`}>
                  {card.subtitle}
                </p>
              )}

              <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-6 flex-grow">
                {card.desc}
              </p>

              <div className="mt-auto inline-flex items-center gap-1.5 text-xs font-bold text-slate-400 group-hover:text-amber-600 transition-colors">
                <span>Explore</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {/* Row 2: 3 Cards Centered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {HUB_CARDS.slice(4, 7).map((card) => (
            <Link
              key={card.id}
              href={card.href}
              className={`group relative bg-white rounded-3xl p-7 flex flex-col items-center text-center border shadow-[0_4px_24px_rgba(0,0,0,0.05)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.1)] hover:-translate-y-1.5 transition-all duration-300 ${
                card.highlight
                  ? "border-amber-200 ring-2 ring-amber-400/20 shadow-amber-500/5"
                  : "border-slate-100"
              }`}
            >
              {card.badge && (
                <span className="absolute top-4 right-4 bg-amber-500 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow-sm">
                  {card.badge}
                </span>
              )}

              <div className="w-28 h-28 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300">
                <HubCardIllustrations type={card.illustrationType} className="w-full h-full" />
              </div>

              <h3 className="text-xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors mb-1.5">
                {card.title}
              </h3>

              {card.subtitle && (
                <p className={`text-xs font-semibold mb-3 ${card.subtitleColor || "text-slate-500"}`}>
                  {card.subtitle}
                </p>
              )}

              <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-6 flex-grow">
                {card.desc}
              </p>

              <div className="mt-auto inline-flex items-center gap-1.5 text-xs font-bold text-slate-400 group-hover:text-amber-600 transition-colors">
                <span>{card.id === "free-design-files" ? "Browse 550+ Designs" : "Open Tool"}</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
