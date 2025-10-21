import { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { StickyBanner } from "@/components/ui/sticky-banner";
import ResizableNavbar from "@/components/ui/ResizableNavbar";
import Hero from "@/components/homepage/Hero";
import FeaturedServices from "@/components/homepage/FeaturedServices";
import AboutPreview from "@/components/homepage/AboutPreview";
import ProcessWorkflow from "@/components/homepage/ProcessWorkflow";
import HomeTestimonials from "@/components/homepage/HomeTestimonials";
import ToolsTechnologies from "@/components/homepage/ToolsTechnologies";
import HomeCTA from "@/components/homepage/HomeCTA";

export const metadata: Metadata = {
  title: "GrowthMarg | AI-Driven Digital Marketing Agency in Tripura",
  description:
    "We combine creative strategy and intelligent marketing to help brands grow with purpose. From SEO and PPC to content marketing and web development - drive real growth with Tripura's first AI-driven marketing agency.",
  keywords:
    "digital marketing, AI marketing, SEO, PPC, social media marketing, content marketing, web design, Tripura marketing agency, GrowthMarg",
  openGraph: {
    title: "Your Growth, Amplified | GrowthMarg",
    description:
      "Tripura's first AI-driven marketing agency. We help brands reach, engage, and convert their ideal audience through strategic digital innovation.",
    type: "website",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <StickyBanner className="bg-gradient-to-r from-orange-500 to-orange-600">
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
        <FeaturedServices />
        <AboutPreview />
        <ProcessWorkflow />
        <HomeTestimonials />
        <ToolsTechnologies />
        <HomeCTA />
      </main>
      <Footer />
    </div>
  );
}
