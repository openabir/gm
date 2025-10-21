import { Metadata } from "next";
import { Footer } from "@/components/Footer";
import ResizableNavbar from "@/components/ui/ResizableNavbar";
import ServicesHero from "@/components/services/ServicesHero";
import ServiceOverviewGrid from "@/components/services/ServiceOverviewGrid";
import DetailedServices from "@/components/services/DetailedServices";
import Testimonials from "@/components/services/Testimonials";
import CTASection from "@/components/services/CTASection";

export const metadata: Metadata = {
  title: "Digital Marketing Services | SEO, PPC, Social Media & More",
  description:
    "Full-suite digital marketing services designed to elevate your brand. From SEO and PPC to content marketing and web development. Drive real growth with GrowthMarg.",
  keywords:
    "digital marketing, SEO, PPC, social media marketing, content marketing, web design, email marketing, branding",
  openGraph: {
    title: "Digital Marketing Services That Drive Real Growth",
    description:
      "From SEO to full-funnel marketing, we help brands reach, engage, and convert their ideal audience.",
    type: "website",
  },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <ResizableNavbar />
      <main>
        <ServicesHero />
        <ServiceOverviewGrid />
        <DetailedServices />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
