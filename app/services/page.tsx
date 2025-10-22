import { Metadata } from "next";
import dynamic from "next/dynamic";
import { Footer } from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ServicesHero from "@/components/services/ServicesHero";
import Loading from "@/components/ui/Loading";

// Lazy load below-fold components for better performance
const ServiceOverviewGrid = dynamic(
  () => import("@/components/services/ServiceOverviewGrid"),
  { ssr: true, loading: () => <Loading /> }
);
const DetailedServices = dynamic(
  () => import("@/components/services/DetailedServices"),
  { ssr: true, loading: () => <Loading /> }
);
const CTASection = dynamic(() => import("@/components/services/CTASection"), {
  ssr: true,
  loading: () => <Loading />,
});

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
      <Navbar />
      <main>
        <ServicesHero />
        <ServiceOverviewGrid />
        <DetailedServices />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
