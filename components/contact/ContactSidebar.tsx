"use client";

import { motion } from "framer-motion";
import ContactInfo from "./ContactInfo";
import LocationMap from "./LocationMap";
import SocialLinks from "./SocialLinks";

export default function ContactSidebar() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="relative bg-gradient-to-br from-orange-500 to-orange-600 dark:from-orange-600 dark:to-orange-700 text-white p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-between overflow-y-auto"
    >
      <div className="space-y-8 sm:space-y-10">
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Get In Touch
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-orange-50 max-w-md">
            Have a project in mind? Let&apos;s discuss how we can help your
            business grow.
          </p>
        </div>

        <ContactInfo />
        <LocationMap />
      </div>

      <SocialLinks />
    </motion.div>
  );
}
