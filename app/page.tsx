import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Hero from "@/components/homepage/Hero";
import Why from "@/components/homepage/why";
import AboutPreview from "@/components/homepage/AboutPreview";
import ProcessWorkflow from "@/components/homepage/ProcessWorkflow";
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
      <Navbar />
      <main>
        <Hero />
        <Why />
        <AboutPreview />
        <ProcessWorkflow />
        <ToolsTechnologies />
        <HomeCTA />
      </main>
      <Footer />
    </div>
  );
}
