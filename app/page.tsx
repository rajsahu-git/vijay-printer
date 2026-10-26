"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HubServicesGrid from "@/components/HubServicesGrid";
import ServicesGrid from "@/components/ServicesGrid";
import PortfolioGallery from "@/components/PortfolioGallery";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import QuoteCalculatorModal from "@/components/QuoteCalculatorModal";

export default function Home() {
  const [showQuote, setShowQuote] = useState(false);

  return (
    <>
      <Navbar />
      <main>
        <Hero onQuoteClick={() => setShowQuote(true)} />
        {/* Hub Services Grid matching Screenshot 1 */}
        <HubServicesGrid />
        <ServicesGrid />
        <PortfolioGallery />
        {/* <Pricing onQuoteClick={() => setShowQuote(true)} /> */}
        <Testimonials />
      </main>
      <Footer />
      {showQuote && <QuoteCalculatorModal onClose={() => setShowQuote(false)} />}
    </>
  );
}

