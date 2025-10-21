"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const tools = [
  {
    name: "Google Analytics",
    category: "Analytics",
    icon: "/tools/google-analytics-svgrepo-com.svg",
  },
  {
    name: "Google Ads",
    category: "Advertising",
    icon: "/tools/google-ads-svgrepo-com.svg",
  },
  {
    name: "Meta Ads",
    category: "Social Media",
    icon: "/tools/meta-svgrepo-com.svg",
  },
  {
    name: "HubSpot",
    category: "Marketing Automation",
    icon: "/tools/hubspot-svgrepo-com.svg",
  },
  { name: "SEMrush", category: "SEO", icon: "/tools/Semrush-svgrepo-com.svg" },
  {
    name: "Mailchimp",
    category: "Email Marketing",
    icon: "/tools/mailchimp-svgrepo-com.svg",
  },
  {
    name: "WordPress",
    category: "CMS",
    icon: "/tools/wordpress-color-svgrepo-com.svg",
  },
  {
    name: "Shopify",
    category: "E-commerce",
    icon: "/tools/shopify-svgrepo-com.svg",
  },
  { name: "Figma", category: "Design", icon: "/tools/figma-svgrepo-com.svg" },
  {
    name: "Adobe Creative Cloud",
    category: "Design",
    icon: "/tools/adobe-creative-cloud-svgrepo-com.svg",
  },
  {
    name: "Hotjar",
    category: "UX Analytics",
    icon: "/tools/hotjar-svgrepo-com.svg",
  },
  {
    name: "Zapier",
    category: "Automation",
    icon: "/tools/zapier-svgrepo-com.svg",
  },
  {
    name: "Notion",
    category: "Productivity",
    icon: "/tools/notion-svgrepo-com.svg",
  },
];

export default function ToolsTechnologies() {
  // Duplicate tools array for seamless infinite scroll
  const duplicatedTools = [...tools, ...tools, ...tools];

  return (
    <section className="relative w-full overflow-hidden py-16 sm:py-20 md:py-24 lg:py-28">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 md:mb-20 space-y-4 sm:space-y-6"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Powered by Industry-Leading{" "}
            <span className="text-orange-600">Tools</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            We leverage the best platforms and technologies to keep you ahead of
            the competition
          </p>
        </motion.div>

        {/* Infinite Scroll Container */}
        <div className="relative">
          {/* Gradient Blur Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-32 md:w-48 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-32 md:w-48 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          {/* Scrolling Track */}
          <div className="flex overflow-hidden">
            <motion.div
              className="flex gap-6 sm:gap-8 md:gap-12"
              animate={{
                x: [0, -(160 * tools.length)],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 60,
                  ease: "linear",
                },
              }}
            >
              {duplicatedTools.map((tool, index) => (
                <div
                  key={`${tool.name}-${index}`}
                  className="flex-shrink-0 group"
                >
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 flex items-center justify-center p-3 sm:p-4 md:p-6">
                    <Image
                      src={tool.icon}
                      alt={tool.name}
                      fill
                      className="object-contain p-3 sm:p-4 md:p-6"
                      sizes="(max-width: 640px) 80px, (max-width: 768px) 96px, 128px"
                    />
                  </div>

                  {/* Tool Info */}
                  <div className="text-center mt-2 sm:mt-3 space-y-1">
                    <p className="text-xs sm:text-sm font-semibold">
                      {tool.name}
                    </p>
                    <p className="text-[10px] sm:text-xs text-muted-foreground">
                      {tool.category}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Bottom Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-sm sm:text-base text-muted-foreground mt-8 sm:mt-12"
        >
          And many more tools tailored to your specific needs
        </motion.p>
      </div>
    </section>
  );
}
