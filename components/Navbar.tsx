"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, MessageCircle, Sparkles, Layers } from "lucide-react";
import SVGComponent from "./../data/Logo";
const WA_NUMBER = "919530072011";
const WA_MSG = encodeURIComponent("Hello! I'd like to get a quote from Vijay Printers.");

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 font-black text-xl text-slate-900 tracking-tight group">
          {/* <span className="text-2xl transform group-hover:rotate-12 transition-transform">🪔</span> */}
          <span className="bg-gradient-to-r lg:mt-4 lg:-ml-12 from-amber-600 to-amber-800 bg-clip-text text-transparent font-serif">
            <SVGComponent />
          </span>
          
        </Link>


        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-700">
          <Link href="/" className="hover:text-amber-600 transition-colors">
            Home
          </Link>
          <Link
            href="/free-designs"
            className="flex items-center gap-1.5 hover:text-amber-600 transition-colors"
          >
            <span>Free Designs</span>
            <span className="bg-amber-500 text-slate-950 text-[10px] font-black px-1.5 py-0.2 rounded-full">
              550+
            </span>
          </Link>
          {/* <Link href="/paper-gsm-calculator" className="hover:text-amber-600 transition-colors">
            GSM Calculator
          </Link> */}
          <Link href="/services/buy-sell-machines" className="hover:text-amber-600 transition-colors">
            Machines
          </Link>
          <Link href="/services/printing-exhibition" className="hover:text-amber-600 transition-colors">
            Exhibitions
          </Link>
          <Link href="/services/printing-services" className="hover:text-amber-600 transition-colors">
            Print Services
          </Link>
        </nav>

        {/* CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <Link
            href="/free-designs"
            className="flex items-center gap-1.5 text-xs font-bold text-amber-700 bg-amber-50 hover:bg-amber-100 border border-amber-200 px-3.5 py-2 rounded-full transition-colors"
          >
            <Sparkles size={14} className="text-amber-600" />
            <span>Templates Hub</span>
          </Link>
          <a
            href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-4 py-2 rounded-full shadow-sm transition-colors"
          >
            <MessageCircle size={15} />
            WhatsApp Quote
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-slate-800 p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-5 py-4 flex flex-col gap-3 text-sm font-semibold text-slate-700 shadow-xl">
          <Link href="/" onClick={() => setOpen(false)} className="py-1 hover:text-amber-600">
            Home
          </Link>
          <Link
            href="/free-designs"
            onClick={() => setOpen(false)}
            className="py-1 flex items-center justify-between text-amber-600 font-bold"
          >
            <span>Free Design Templates</span>
            <span className="bg-amber-500 text-slate-950 text-[10px] font-black px-2 py-0.5 rounded-full">
              550+ Free
            </span>
          </Link>
          <Link href="/paper-gsm-calculator" onClick={() => setOpen(false)} className="py-1 hover:text-amber-600">
            Paper GSM Calculator
          </Link>
          <Link href="/services/buy-sell-machines" onClick={() => setOpen(false)} className="py-1 hover:text-amber-600">
            Buy &amp; Sell Machines
          </Link>
          <Link href="/services/printing-exhibition" onClick={() => setOpen(false)} className="py-1 hover:text-amber-600">
            Printing Exhibitions
          </Link>
          <Link href="/services/magazine-services" onClick={() => setOpen(false)} className="py-1 hover:text-amber-600">
            Magazine Services
          </Link>
          <Link href="/services/software-services" onClick={() => setOpen(false)} className="py-1 hover:text-amber-600">
            Order Management Software
          </Link>
          <Link href="/services/printing-services" onClick={() => setOpen(false)} className="py-1 hover:text-amber-600">
            Printing Services Catalog
          </Link>
          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-emerald-600 text-white font-bold text-xs px-4 py-2.5 rounded-xl"
            >
              <MessageCircle size={16} /> WhatsApp Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

