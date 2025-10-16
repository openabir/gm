import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import WhatWeDo from "@/components/sections/WhatWeDo";
import Results from "@/components/sections/Results";
import Team from "@/components/sections/Team";
import WhyPartner from "@/components/sections/WhyPartner";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/Footer";
import LazySection from "@/components/ui/LazySection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <WhatWeDo />
        <LazySection>
          <Results />
        </LazySection>
        <LazySection>
          <Team />
        </LazySection>
        <LazySection>
          <WhyPartner />
        </LazySection>
        <LazySection>
          <FAQ />
        </LazySection>
      </main>
      <Footer />
    </div>
  );
}
