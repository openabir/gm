"use client";

import { motion } from "framer-motion";
import ContactSidebar from "./ContactSidebar";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section className="relative w-full min-h-screen pt-16 sm:pt-20 overflow-hidden">
      <div className="w-full h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left Side - Contact Info */}
          <ContactSidebar />

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative bg-background p-6 sm:p-8 md:p-12 lg:p-16 overflow-y-auto"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
