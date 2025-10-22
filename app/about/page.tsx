import { Metadata } from "next";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import AboutHero from "@/components/about/AboutHero";
import Loading from "@/components/ui/Loading";

// Lazy load below-fold components for better performance
const OurStory = dynamic(() => import("@/components/about/OurStory"), {
  ssr: true,
  loading: () => <Loading />,
});
const OurValues = dynamic(() => import("@/components/about/OurValues"), {
  ssr: true,
  loading: () => <Loading />,
});
const Team = dynamic(() => import("@/components/about/Team"), {
  ssr: true,
  loading: () => <Loading />,
});
const AboutCTA = dynamic(() => import("@/components/about/AboutCTA"), {
  ssr: true,
  loading: () => <Loading />,
});

export const metadata: Metadata = {
  title: "About Us | GrowthMarg - Our Story, Mission & Team",
  description:
    "Learn about our digital marketing agency, mission, values, and the talented team behind our success. Discover how we help brands grow through innovation and strategic excellence.",
  keywords:
    "about us, digital marketing agency, our team, our mission, our values, agency story",
  openGraph: {
    title: "About Us - Meet the Team Behind GrowthMarg",
    description:
      "A creative team blending design, data, and technology to help ambitious brands grow and thrive.",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <AboutHero />
        <OurStory />
        <OurValues />
        <Team />
        <AboutCTA />
      </main>
      <Footer />
    </div>
  );
}
