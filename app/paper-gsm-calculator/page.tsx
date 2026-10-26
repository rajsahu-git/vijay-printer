"use client";
import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HubCardIllustrations from "@/components/HubCardIllustrations";
import { Calculator, ArrowLeft, RefreshCw, Info, Check, Copy } from "lucide-react";

export default function PaperGsmCalculatorPage() {
  // Mode: "calculate-weight" or "calculate-gsm"
  const [mode, setMode] = useState<"weight" | "gsm">("weight");

  // Inputs for Weight Calculation
  const [lengthInches, setLengthInches] = useState<number>(23);
  const [widthInches, setWidthInches] = useState<number>(36);
  const [gsm, setGsm] = useState<number>(130);
  const [sheets, setSheets] = useState<number>(500); // 1 ream default
  const [ratePerKg, setRatePerKg] = useState<number>(85);

  // Inputs for GSM determination
  const [sheetWeightGrams, setSheetWeightGrams] = useState<number>(25.8);
  const [sampleLengthInches, setSampleLengthInches] = useState<number>(23);
  const [sampleWidthInches, setSampleWidthInches] = useState<number>(36);

  // Preset Sheet Sizes (in inches)
  const PRESETS = [
    { name: "Standard 23\" × 36\" (Imperial)", l: 23, w: 36 },
    { name: "Crown 20\" × 30\"", l: 20, w: 30 },
    { name: "Demy 18\" × 23\"", l: 18, w: 23 },
    { name: "Royal 25\" × 36\"", l: 25, w: 36 },
    { name: "Double Crown 30\" × 40\"", l: 30, w: 40 },
    { name: "A4 Size (8.27\" × 11.69\")", l: 8.27, w: 11.69 },
    { name: "A3 Size (11.69\" × 16.54\")", l: 11.69, w: 16.54 },
    { name: "12\" × 18\" (Digital Paper)", l: 12, w: 18 },
    { name: "13\" × 19\" (Digital Paper)", l: 13, w: 19 },
  ];

  // Common GSM presets
  const GSM_PRESETS = [70, 80, 90, 100, 130, 170, 210, 250, 300, 350, 400];

  // Calculation formulas:
  // Ream Weight in Kg (500 sheets): (Length_in × Width_in × GSM) / 3100
  // Single Sheet Area in square meters = (Length_in * 0.0254) * (Width_in * 0.0254) = Area_m2
  // Single Sheet Weight in Grams = Area_m2 * GSM
  // Total weight in Kg = (Single Sheet Weight in grams * sheets) / 1000
  const areaM2 = (lengthInches * 0.0254) * (widthInches * 0.0254);
  const singleSheetGrams = areaM2 * gsm;
  const totalWeightKg = (singleSheetGrams * sheets) / 1000;
  const reamWeightKg = (lengthInches * widthInches * gsm) / 3100; // standard Indian printing industry formula
  const estimatedCost = totalWeightKg * ratePerKg;

  // Reverse calculate GSM:
  // Area_sqm = (sampleLength * 0.0254) * (sampleWidth * 0.0254)
  // Calculated GSM = sheetWeightGrams / Area_sqm
  const sampleAreaM2 = (sampleLengthInches * 0.0254) * (sampleWidthInches * 0.0254);
  const calculatedGsm = sampleAreaM2 > 0 ? sheetWeightGrams / sampleAreaM2 : 0;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Header */}
        <section className="bg-white border-b border-slate-200 py-10 md:py-14 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 mx-auto mb-4">
              <HubCardIllustrations type="paper-gsm-calculator" className="w-full h-full" />
            </div>
            <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-2">
              Paper GSM &amp; Grammage Calculator
            </h1>
            <p className="text-slate-500 text-sm max-w-xl mx-auto mb-4">
              Free-to-use precision Paper Grammage Calculator — simple, accurate, and developed for printing presses, publishers, and packaging converters.
            </p>
            <nav className="inline-flex items-center gap-2 text-xs text-slate-500">
              <Link href="/" className="hover:text-amber-600">Home</Link>
              <span>/</span>
              <span className="text-slate-800 font-semibold">Paper GSM Calculator</span>
            </nav>
          </div>
        </section>

        {/* Calculator Body */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {/* Mode Switcher */}
          <div className="flex justify-center mb-8">
            <div className="bg-slate-200/80 p-1 rounded-2xl inline-flex gap-1">
              <button
                onClick={() => setMode("weight")}
                className={`px-5 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all ${
                  mode === "weight"
                    ? "bg-white text-slate-900 shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Calculate Paper Weight &amp; Cost
              </button>
              <button
                onClick={() => setMode("gsm")}
                className={`px-5 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all ${
                  mode === "gsm"
                    ? "bg-white text-slate-900 shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Determine GSM from Sample Weight
              </button>
            </div>
          </div>

          {mode === "weight" ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Inputs Column */}
              <div className="lg:col-span-7 bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <Calculator size={20} className="text-amber-500" />
                  Enter Paper Specifications
                </h3>

                {/* Preset Sizes */}
                <div className="mb-6">
                  <label className="block text-xs font-bold text-slate-600 mb-2">
                    Quick Preset Paper Sizes:
                  </label>
                  <select
                    onChange={(e) => {
                      const idx = parseInt(e.target.value);
                      if (!isNaN(idx)) {
                        setLengthInches(PRESETS[idx].l);
                        setWidthInches(PRESETS[idx].w);
                      }
                    }}
                    className="w-full bg-slate-50 border border-slate-200 text-xs font-semibold rounded-xl px-3.5 py-2.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    <option value="">Select standard paper size preset...</option>
                    {PRESETS.map((p, i) => (
                      <option key={p.name} value={i}>
                        {p.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Length & Width */}
                <div className="grid grid-cols-2 gap-4 mb-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Length (Inches)
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      value={lengthInches}
                      onChange={(e) => setLengthInches(parseFloat(e.target.value) || 0)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Width (Inches)
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      value={widthInches}
                      onChange={(e) => setWidthInches(parseFloat(e.target.value) || 0)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                </div>

                {/* GSM */}
                <div className="mb-5">
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-xs font-bold text-slate-700">Grammage (GSM / g/m²)</label>
                    <span className="text-xs font-bold text-amber-600">{gsm} GSM</span>
                  </div>
                  <input
                    type="number"
                    value={gsm}
                    onChange={(e) => setGsm(parseFloat(e.target.value) || 0)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 mb-2.5"
                  />
                  {/* GSM quick pills */}
                  <div className="flex flex-wrap gap-1.5">
                    {GSM_PRESETS.map((g) => (
                      <button
                        key={g}
                        onClick={() => setGsm(g)}
                        className={`text-[11px] font-mono px-2.5 py-1 rounded-lg transition-colors ${
                          gsm === g
                            ? "bg-amber-500 text-slate-950 font-bold"
                            : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                        }`}
                      >
                        {g}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Sheets & Rate */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Quantity (Total Sheets)
                    </label>
                    <input
                      type="number"
                      value={sheets}
                      onChange={(e) => setSheets(parseInt(e.target.value) || 0)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                    <span className="text-[10px] text-slate-400 mt-1 block">
                      {(sheets / 500).toFixed(1)} Reams (500 sheets/ream)
                    </span>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Paper Rate (₹ / Kg)
                    </label>
                    <input
                      type="number"
                      value={ratePerKg}
                      onChange={(e) => setRatePerKg(parseFloat(e.target.value) || 0)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                    <span className="text-[10px] text-slate-400 mt-1 block">Optional for cost estimation</span>
                  </div>
                </div>
              </div>

              {/* Output Results Card */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-3xl p-6 md:p-8 shadow-xl">
                  <span className="text-xs uppercase tracking-widest text-amber-400 font-bold block mb-1">
                    Calculation Results
                  </span>
                  <h4 className="text-xl font-bold mb-6">Weight &amp; Cost Estimation</h4>

                  <div className="space-y-4">
                    <div className="bg-white/10 rounded-2xl p-4 backdrop-blur-sm">
                      <span className="text-xs text-slate-300 block">Total Consignment Weight</span>
                      <span className="text-3xl font-extrabold text-amber-400">
                        {totalWeightKg.toFixed(2)} <span className="text-base text-white font-normal">Kg</span>
                      </span>
                      <span className="text-[11px] text-slate-400 block mt-0.5">
                        ({(totalWeightKg * 2.20462).toFixed(2)} lbs)
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-white/5 rounded-xl p-3 border border-white/10">
                        <span className="text-[11px] text-slate-400 block">Weight Per Ream</span>
                        <span className="text-lg font-bold text-white">
                          {reamWeightKg.toFixed(2)} Kg
                        </span>
                        <span className="text-[10px] text-slate-500 block">500 sheets standard</span>
                      </div>

                      <div className="bg-white/5 rounded-xl p-3 border border-white/10">
                        <span className="text-[11px] text-slate-400 block">Single Sheet</span>
                        <span className="text-lg font-bold text-white">
                          {singleSheetGrams.toFixed(2)} g
                        </span>
                        <span className="text-[10px] text-slate-500 block">{(areaM2).toFixed(3)} m² area</span>
                      </div>
                    </div>

                    <div className="bg-amber-500/20 border border-amber-500/30 rounded-2xl p-4">
                      <span className="text-xs text-amber-300 block">Estimated Paper Cost (@ ₹{ratePerKg}/Kg)</span>
                      <span className="text-2xl font-black text-white">
                        ₹ {Math.round(estimatedCost).toLocaleString()}
                      </span>
                      <span className="text-[10px] text-amber-200/70 block mt-0.5">
                        ₹ {(estimatedCost / (sheets || 1)).toFixed(2)} per sheet
                      </span>
                    </div>
                  </div>
                </div>

                {/* Industry Formula Note */}
                <div className="bg-white rounded-2xl p-5 border border-slate-200 text-xs text-slate-600">
                  <div className="flex items-center gap-2 font-bold text-slate-900 mb-1">
                    <Info size={16} className="text-amber-500" />
                    Standard Indian Printing Formula
                  </div>
                  <p className="font-mono bg-slate-50 p-2 rounded-lg text-slate-700 text-[11px] my-2">
                    Ream Weight (Kg) = (Length&quot; × Width&quot; × GSM) ÷ 3100
                  </p>
                  <p className="text-[11px] text-slate-500">
                    Where 3100 is the constant derived from imperial inches to metric square meter conversion for a standard 500-sheet ream.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            /* Reverse calculate GSM from sample */
            <div className="max-w-2xl mx-auto bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <RefreshCw size={20} className="text-amber-500" />
                Find GSM by Weighing a Sheet Sample
              </h3>
              <p className="text-xs text-slate-500 mb-6">
                Weigh one sheet on a precision digital gram scale and enter its dimensions to determine the exact paper grammage.
              </p>

              <div className="space-y-4 mb-8">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Weight of 1 Sheet (Grams)
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    value={sheetWeightGrams}
                    onChange={(e) => setSheetWeightGrams(parseFloat(e.target.value) || 0)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Sample Length (Inches)
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      value={sampleLengthInches}
                      onChange={(e) => setSampleLengthInches(parseFloat(e.target.value) || 0)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Sample Width (Inches)
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      value={sampleWidthInches}
                      onChange={(e) => setSampleWidthInches(parseFloat(e.target.value) || 0)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                </div>
              </div>

              {/* Calculated GSM result */}
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 text-center">
                <span className="text-xs uppercase tracking-wider font-bold text-amber-800 block mb-1">
                  Determined Grammage
                </span>
                <span className="text-4xl font-black text-amber-600 block">
                  {Math.round(calculatedGsm)} <span className="text-xl text-slate-800">GSM</span>
                </span>
                <span className="text-xs text-slate-600 mt-2 block">
                  Exact value: {calculatedGsm.toFixed(2)} g/m²
                </span>
              </div>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
