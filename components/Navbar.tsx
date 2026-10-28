"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, MessageCircle, Sparkles } from "lucide-react";
import Alpha3DLogo from "@/components/Alpha3DLogo";

const WA_NUMBER = "919530072011";
const WA_MSG = encodeURIComponent("Hello! I'd like to get a quote from Alpha 3D Advertisement.");

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200/80  text-slate-800"
          : "bg-white/95 backdrop-blur-md border-b  text-slate-800 "
      }`}
    >
      {/* Signature Indian Celebration Gold & Crimson registration hairline */}
      <div className="h-[2.5px] w-full bg-gradient-to-r from-amber-400 via-rose-500 via-amber-300 to-rose-600" />

      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between transition-all duration-300 ${
          scrolled ? "h-24 py-1.5" : "h-20 sm:h-32 py-4"
        } gap-4`}
      >
        {/* Logo - cleanly sized, smoothly shrinking on scroll */}
        <Link
          href="/"
          className="flex items-center group transition-transform hover:scale-[1.02] shrink-0"
          aria-label="Alpha 3D Advertisers Home"
        >
          <div
            className={`flex items-center justify-center transition-all duration-300 ${
              scrolled
                ? "bg-transparent p-0 border-transparent shadow-none"
                : "bg-white/95 rounded-lg px-2.5 py-1 shadow-sm border border-white/20"
            }`}
          >
            <Alpha3DLogo
              className={`w-auto object-contain transition-all duration-300 ease-in-out ${
                scrolled
                  ? "h-9 sm:h-16 max-w-[140px] sm:max-w-[160px]"
                  : "h-12 sm:h-24 max-w-[180px] sm:max-w-[210px] drop-shadow-xs"
              }`}
            />
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav
          className={`hidden lg:flex items-center gap-6 xl:gap-8 text-xs xl:text-[13px] font-bold tracking-wider uppercase transition-colors duration-300 ${
            scrolled ? "text-slate-700" : "text-slate-700"
          }`}
        >
          <Link
            href="/"
            className={`transition-colors py-1 ${
              scrolled ? "hover:text-amber-600" : "hover:text-amber-600"
            }`}
          >
            Home
          </Link>
          <Link
            href="/services/printing-services"
            className={`transition-colors py-1 ${
              scrolled ? "hover:text-amber-600" : "hover:text-amber-600"
            }`}
          >
            Our Services
          </Link>
          <Link
            href="/free-designs"
            className={`flex items-center gap-1.5 transition-colors py-1 ${
              scrolled ? "hover:text-amber-600" : "hover:text-amber-600"
            }`}
          >
            <span>Free Designs</span>
            <span
              className={`text-[10px] font-black px-1.5 py-0.2 rounded-full tracking-normal shadow-xs ${
                scrolled
                  ? "bg-amber-500 text-slate-950"
                  : "bg-amber-400 text-slate-950"
              }`}
            >
              550+
            </span>
          </Link>
                    <a
            href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-white text-xs font-bold px-4 py-2 rounded-md tracking-wider uppercase transition-all shadow-md hover:shadow-lg bg-emerald-600 hover:bg-emerald-700"
          >
            <MessageCircle size={15} />
            <span>WhatsApp Quote</span>
          </a>
          {/* <Link
            href="/services/buy-sell-machines"
            className={`transition-colors py-1 ${
              scrolled ? "hover:text-amber-600" : "hover:text-amber-300"
            }`}
          >
            Machines
          </Link>
          <Link
            href="/services/printing-exhibition"
            className={`transition-colors py-1 ${
              scrolled ? "hover:text-amber-600" : "hover:text-amber-300"
            }`}
          >
            Exhibitions
          </Link>
          <Link
            href="/services/magazine-services"
            className={`transition-colors py-1 ${
              scrolled ? "hover:text-amber-600" : "hover:text-amber-300"
            }`}
          >
            Magazine
          </Link> */}
        </nav>

        {/* Action CTAs */}


        {/* Mobile menu toggle */}
        <button
          className={`lg:hidden p-2 rounded-lg transition-colors ${
            scrolled
              ? "text-slate-800 hover:bg-slate-100"
              : "text-slate-700 hover:bg-slate-100"
          }`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {open && (
        <div
          className={`lg:hidden border-t px-6 py-5 flex flex-col gap-3.5 text-xs font-bold tracking-wider uppercase shadow-2xl backdrop-blur-xl ${
            scrolled
              ? "bg-white border-slate-200 text-slate-800"
              : "bg-[#260309]/98 border-amber-500/20 text-white"
          }`}
        >
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className={`py-1 ${scrolled ? "hover:text-amber-600" : "hover:text-amber-300"}`}
          >
            Home
          </Link>
          <Link
            href="/services/printing-services"
            onClick={() => setOpen(false)}
            className={`py-1 ${scrolled ? "hover:text-amber-600" : "hover:text-amber-300"}`}
          >
            Our Services
          </Link>
          <Link
            href="/free-designs"
            onClick={() => setOpen(false)}
            className={`py-1 flex items-center justify-between ${
              scrolled ? "text-amber-600" : "text-amber-300"
            }`}
          >
            <span>Free Designs</span>
            <span
              className={`text-[10px] font-black px-2 py-0.5 rounded-full tracking-normal ${
                scrolled
                  ? "bg-amber-500 text-slate-950"
                  : "bg-amber-400 text-slate-950"
              }`}
            >
              550+ Free
            </span>
          </Link>
          <Link
            href="/services/buy-sell-machines"
            onClick={() => setOpen(false)}
            className={`py-1 ${scrolled ? "hover:text-amber-600" : "hover:text-amber-300"}`}
          >
            Machines
          </Link>
          <Link
            href="/services/printing-exhibition"
            onClick={() => setOpen(false)}
            className={`py-1 ${scrolled ? "hover:text-amber-600" : "hover:text-amber-300"}`}
          >
            Printing Exhibitions
          </Link>
          <Link
            href="/services/magazine-services"
            onClick={() => setOpen(false)}
            className={`py-1 ${scrolled ? "hover:text-amber-600" : "hover:text-amber-300"}`}
          >
            Magazine Services
          </Link>
          <div className={`pt-3 border-t flex flex-col gap-2 ${scrolled ? "border-slate-100" : "border-amber-500/20"}`}>
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-4 py-2.5 rounded-md tracking-wider uppercase"
            >
              <MessageCircle size={15} /> WhatsApp Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
