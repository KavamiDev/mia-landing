"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import BentoGrid from "@/components/BentoGrid";
import Marquee from "@/components/Marquee";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />
      <Hero />
      <Features />
      <Marquee />
      <BentoGrid />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
