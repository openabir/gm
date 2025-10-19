"use client";
import { useState } from "react";
import Hero from "@/components/homepage/Hero";
import Choose from "@/components/homepage/WhyChoose";
import Integrations from "@/components/homepage/Integrations";
import Solution from "@/components/homepage/Solution";
import HowItWorks from "@/components/homepage/HowItWorks";
import FAQ from "@/components/homepage/FAQ";
import Footer from "@/components/Footer";
import { LazyLoad } from "@/components/ui/LazyLoad";
import { StickyBanner } from "@/components/ui/sticky-banner";
import ResizableNavbar from "@/components/ui/ResizableNavbar";

export default function Home() {

  return (
    <div className="min-h-screen">
      <StickyBanner
        className="bg-gradient-to-r from-orange-500 to-orange-600"
      >
        <p className="text-sm md:text-base text-white font-medium">
          🎉 Special Offer: Get 20% off on all digital marketing packages this
          month!{" "}
          <a
            href="/services"
            className="underline font-semibold hover:text-orange-100"
          >
            Learn More →
          </a>
        </p>
      </StickyBanner>
      <ResizableNavbar />
      <main>
        <Hero />
        <LazyLoad>
          <Choose />
        </LazyLoad>
        <LazyLoad>
          <Integrations />
        </LazyLoad>
        <LazyLoad>
          <Solution />
        </LazyLoad>
        <LazyLoad>
          <HowItWorks />
        </LazyLoad>
        <LazyLoad>
          <FAQ />
        </LazyLoad>
      </main>
      <Footer />
    </div>
  );
}
