"use client";

import { motion } from "framer-motion";

const MAPBOX_CONFIG = {
  latitude: 23.823595,
  longitude: 91.271521,
};

export default function LocationMap() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="w-full"
    >
      <h3 className="text-lg sm:text-xl font-semibold mb-4">Our Location</h3>
      <div className="relative w-full h-48 sm:h-56 md:h-64 rounded-xl overflow-hidden shadow-2xl">
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: 0 }}
          src={`https://www.openstreetmap.org/export/embed.html?bbox=${
            MAPBOX_CONFIG.longitude - 0.01
          }%2C${MAPBOX_CONFIG.latitude - 0.01}%2C${
            MAPBOX_CONFIG.longitude + 0.01
          }%2C${MAPBOX_CONFIG.latitude + 0.01}&layer=mapnik&marker=${
            MAPBOX_CONFIG.latitude
          }%2C${MAPBOX_CONFIG.longitude}`}
          title="GrowthMarg Location"
        />
      </div>
    </motion.div>
  );
}
