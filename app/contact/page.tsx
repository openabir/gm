import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/contact/ContactSection";

export const metadata: Metadata = {
  title: "Contact Us | GrowthMarg",
  description:
    "Get in touch with GrowthMarg. Let's discuss how we can help grow your business with our AI-driven marketing solutions.",
  keywords: "contact, GrowthMarg, digital marketing agency, Tripura",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <ContactSection />
      </main>
    </div>
  );
}
