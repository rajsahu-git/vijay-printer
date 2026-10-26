"use client";
import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HubCardIllustrations from "@/components/HubCardIllustrations";
import { Calendar, MapPin, Users, Award, ArrowRight, CheckCircle, ExternalLink } from "lucide-react";

const EXPOS = [
  {
    title: "India Print Expo 2026 - Mumbai",
    organizer: "Printers Club Expo Pvt. Ltd.",
    date: "November 18 - 21, 2026",
    venue: "Bombay Exhibition Centre (NESCO), Goregaon, Mumbai",
    stalls: "450+ Exhibitors",
    visitors: "35,000+ Trade Visitors",
    tag: "Flagship Event",
  },
  {
    title: "Gujarat Print Pack & Sign Summit",
    organizer: "Printers Club Expo Pvt. Ltd.",
    date: "January 14 - 17, 2027",
    venue: "Mahatma Mandir Convention Centre, Gandhinagar, Gujarat",
    stalls: "280+ Exhibitors",
    visitors: "22,000+ Trade Visitors",
    tag: "Upcoming",
  },
  {
    title: "South India Digital & Offset Printing Expo",
    organizer: "Printers Club Expo Pvt. Ltd.",
    date: "March 05 - 08, 2027",
    venue: "Chennai Trade Centre, Nandambakkam, Chennai",
    stalls: "320+ Exhibitors",
    visitors: "28,000+ Trade Visitors",
    tag: "Booking Open",
  },
];

export default function PrintingExhibitionPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <section className="bg-white border-b border-slate-200 py-12 md:py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-24 h-24 mx-auto mb-4">
              <HubCardIllustrations type="printing-exhibition" className="w-full h-full" />
            </div>
            <span className="text-xs font-bold text-rose-600 uppercase tracking-widest block mb-2">
              Printers Club Expo Pvt. Ltd.
            </span>
            <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
              India&apos;s Biggest Printing Expo Series
            </h1>
            <p className="text-slate-600 text-sm md:text-base max-w-2xl mx-auto mb-6 leading-relaxed">
              Exploring next-generation digital printing, offset packaging, UV curing machinery, and sustainable consumables for the future of the printing industry.
            </p>
            <nav className="inline-flex items-center gap-2 text-xs text-slate-500">
              <Link href="/" className="hover:text-amber-600">Home</Link>
              <span>/</span>
              <span className="text-slate-800 font-semibold">Printing Exhibition</span>
            </nav>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Upcoming Expo Editions</h2>
              <p className="text-slate-500 text-xs mt-1">Book your stall or register for a free trade visitor badge</p>
            </div>
            <button className="bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs px-4 py-2.5 rounded-full transition-colors">
              Download Exhibitor Kit
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {EXPOS.map((expo) => (
              <div
                key={expo.title}
                className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-lg transition-all flex flex-col"
              >
                <span className="text-[10px] font-bold text-rose-600 bg-rose-50 px-2.5 py-1 rounded-full w-fit mb-3">
                  {expo.tag}
                </span>
                <h3 className="text-lg font-bold text-slate-900 mb-4">{expo.title}</h3>

                <div className="space-y-2.5 text-xs text-slate-600 mb-6 flex-grow">
                  <div className="flex items-start gap-2">
                    <Calendar size={15} className="text-slate-400 mt-0.5 shrink-0" />
                    <span>{expo.date}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin size={15} className="text-slate-400 mt-0.5 shrink-0" />
                    <span>{expo.venue}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Users size={15} className="text-slate-400 mt-0.5 shrink-0" />
                    <span>{expo.visitors}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs px-3.5 py-2 rounded-xl transition-colors">
                    Register Free Pass
                  </button>
                  <button className="text-rose-600 font-bold text-xs hover:text-rose-700">
                    Stall Layout &rarr;
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
