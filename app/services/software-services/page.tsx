"use client";
import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HubCardIllustrations from "@/components/HubCardIllustrations";
import { CheckCircle2, Laptop, BarChart3, Clock, ShieldCheck, ArrowRight, Download } from "lucide-react";

export default function SoftwareServicesPage() {
  const features = [
    "Job Card Generation & Production Tracking (Offset & Digital)",
    "Automatic Paper Calculation & Wastage Margins",
    "Customer WhatsApp Order Status Updates & Billing",
    "Inventory & Paper Stock Management",
    "One-Click Quotation & GST Invoicing",
    "Operator Task Assignment & Delivery Scheduling",
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <section className="bg-white border-b border-slate-200 py-12 md:py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-24 h-24 mx-auto mb-4">
              <HubCardIllustrations type="software-services" className="w-full h-full" />
            </div>
            <span className="text-xs font-bold text-teal-600 uppercase tracking-widest block mb-2">
              Free Print Shop Management
            </span>
            <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
              Printing Order Management Software
            </h1>
            <p className="text-slate-600 text-sm md:text-base max-w-2xl mx-auto mb-6 leading-relaxed">
              Simple, powerful, and designed to streamline your daily print shop operations. From quotation to plate making, printing, cutting, and delivery.
            </p>
            <nav className="inline-flex items-center gap-2 text-xs text-slate-500">
              <Link href="/" className="hover:text-amber-600">Home</Link>
              <span>/</span>
              <span className="text-slate-800 font-semibold">Software Services</span>
            </nav>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="text-xs font-bold text-teal-600 uppercase tracking-wider block mb-2">
                  Built For Indian Printers
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">
                  Run Your Entire Print Shop on Autopilot
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  No complex setup required. Track every job card from design approval to plate making, printing, lamination, die-punching, and dispatch.
                </p>

                <div className="space-y-3 mb-8">
                  {features.map((f) => (
                    <div key={f} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                      <CheckCircle2 size={16} className="text-teal-600 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => alert("Free Community Edition download starting...")}
                    className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs px-5 py-3 rounded-xl transition-all shadow-md shadow-teal-600/20"
                  >
                    <Download size={16} /> Download Free Edition
                  </button>
                  <button
                    onClick={() => alert("Demo booked! Our team will contact you shortly.")}
                    className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs px-5 py-3 rounded-xl transition-all"
                  >
                    Request Live Demo
                  </button>
                </div>
              </div>

              {/* Graphic Feature Box */}
              <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-xl space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <span className="text-xs font-bold text-teal-400">Live Dashboard Preview</span>
                  <span className="text-[10px] bg-teal-500/20 text-teal-300 px-2 py-0.5 rounded font-mono">Active</span>
                </div>
                <div className="bg-slate-800/60 p-3 rounded-xl text-xs space-y-2">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Job #4082 - Royal Wedding Cards</span>
                    <span className="text-amber-400 font-bold">In Foil Press</span>
                  </div>
                  <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-amber-400 h-full w-3/4 rounded-full"></div>
                  </div>
                </div>
                <div className="bg-slate-800/60 p-3 rounded-xl text-xs space-y-2">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Job #4083 - 500 Letterheads (Apex)</span>
                    <span className="text-emerald-400 font-bold">Cutting Ready</span>
                  </div>
                  <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-emerald-400 h-full w-full rounded-full"></div>
                  </div>
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
