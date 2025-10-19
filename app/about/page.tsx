import ResizableNavbar from "@/components/ui/ResizableNavbar";
import Footer from "@/components/Footer";
import AboutHero from "@/components/about/AboutHero";
import Team from "@/components/about/Team";
import OurStory from "@/components/about/OurStory";
import OurValues from "@/components/about/OurValues";

export const metadata = {
  title: "About Us - Our Story & Team",
  description:
    "Learn about our mission, values, and the team behind our success.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <ResizableNavbar />
      <main>
        <AboutHero />
        <OurStory />
        <OurValues />
        <Team />
      </main>
      <Footer />
    </div>
  );
}
