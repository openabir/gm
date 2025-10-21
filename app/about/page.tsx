import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import AboutHero from "@/components/about/AboutHero";
import OurStory from "@/components/about/OurStory";
import OurValues from "@/components/about/OurValues";
import Team from "@/components/about/Team";
import OurApproach from "@/components/about/OurApproach";
import Achievements from "@/components/about/Achievements";
import AboutCTA from "@/components/about/AboutCTA";
import { Metadata } from "next";

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
        <OurApproach />
        <Achievements />
        <AboutCTA />
      </main>
      <Footer />
    </div>
  );
}
