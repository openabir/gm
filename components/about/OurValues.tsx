"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const sections = [
  {
    id: "mission",
    icon: "🎯",
    title: "Mission",
    subtitle: "What Drives Us Daily",
    description:
      "Empowering brands with creative and data-driven solutions that drive measurable growth. We&apos;re committed to transforming how businesses connect with their audiences through innovative digital strategies.",
  },
  {
    id: "vision",
    icon: "🚀",
    title: "Vision",
    subtitle: "The Impact We Want to Create",
    description:
      "To redefine digital excellence through innovation and impact. We envision a future where every brand we touch becomes a leader in their industry, powered by strategic marketing that delivers real results.",
  },
  {
    id: "values",
    icon: "💡",
    title: "Values",
    subtitle: "The Principles Guiding Our Team",
    description:
      "Integrity, innovation, collaboration, and continuous improvement. These core values shape every decision we make and every relationship we build, ensuring we deliver excellence with authenticity.",
  },
];

export default function OurValues() {
  return (
    <section className="relative w-full overflow-hidden py-16 sm:py-20 md:py-24 lg:py-28 bg-gradient-to-b from-transparent via-orange-50/30 to-transparent dark:via-orange-950/10">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 md:mb-20 space-y-4 sm:space-y-6"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Mission, Vision & <span className="text-orange-600">Values</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            The foundation of everything we do
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <Card className="relative h-full p-6 sm:p-8 border border-gray-200 dark:border-gray-800 hover:border-orange-500/50 hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-900">
                {/* Gradient Background on Hover */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-orange-500/0 to-orange-500/0 group-hover:from-orange-500/5 group-hover:to-orange-500/10 transition-all duration-500" />

                {/* Content */}
                <div className="relative space-y-4">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="text-4xl sm:text-5xl"
                  >
                    {section.icon}
                  </motion.div>

                  {/* Title */}
                  <div className="space-y-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-orange-600">
                      {section.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      {section.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {section.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
