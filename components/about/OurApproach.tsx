"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const approaches = [
  {
    id: 1,
    name: "Discovery & Strategy",
    description:
      "We start by understanding your business, audience, and goals. Through comprehensive research and analysis, we develop a customized roadmap that aligns with your vision and drives measurable results.",
    benefits: [
      "In-depth market and competitor analysis",
      "Audience research and persona development",
      "Strategic roadmap with clear KPIs",
      "Collaborative planning sessions",
    ],
    icon: (
      <svg
        className="w-12 h-12"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    ),
    reverse: false,
  },
  {
    id: 2,
    name: "Execution & Optimization",
    description:
      "Our expert team brings strategies to life with precision and creativity. We implement campaigns across multiple channels while continuously monitoring and optimizing performance for maximum impact.",
    benefits: [
      "Multi-channel campaign execution",
      "Creative content and design production",
      "Real-time performance monitoring",
      "Continuous A/B testing and refinement",
    ],
    icon: (
      <svg
        className="w-12 h-12"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    reverse: true,
  },
  {
    id: 3,
    name: "Growth & Partnership",
    description:
      "Success is just the beginning. We scale winning strategies, explore new opportunities, and evolve with your business. Our partnership approach ensures long-term, sustainable growth.",
    benefits: [
      "Scalable growth strategies",
      "Transparent reporting and insights",
      "Regular strategy reviews and updates",
      "Dedicated account management",
    ],
    icon: (
      <svg
        className="w-12 h-12"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    ),
    reverse: false,
  },
];

export default function OurApproach() {
  return (
    <section className="relative w-full overflow-hidden py-16 sm:py-20 md:py-24 lg:py-28 bg-gray-50 dark:bg-gray-900/50">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20 md:mb-24 space-y-4 sm:space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            How We <span className="text-orange-600">Work</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Our proven process for delivering exceptional results
          </p>
        </div>

        {/* Approach Items */}
        <div className="space-y-20 sm:space-y-24 md:space-y-28 lg:space-y-32">
          {approaches.map((approach) => (
            <ApproachItem
              key={approach.id}
              approach={approach}
              reverse={approach.reverse}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ApproachItem({
  approach,
  reverse,
}: {
  approach: (typeof approaches)[0];
  reverse: boolean;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center ${
        reverse ? "lg:flex-row-reverse" : ""
      }`}
    >
      {/* Text Content */}
      <div className={`space-y-6 sm:space-y-8 ${reverse ? "lg:order-2" : ""}`}>
        <motion.div
          initial={{ opacity: 0, x: reverse ? 50 : -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            {approach.name}
          </h3>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            {approach.description}
          </p>
        </motion.div>

        {/* Benefits List */}
        <motion.ul
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-3 sm:space-y-4"
        >
          {approach.benefits.map((benefit, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: reverse ? 30 : -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className="flex items-start gap-3"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600 flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                {benefit}
              </span>
            </motion.li>
          ))}
        </motion.ul>
      </div>

      {/* Icon/Visual */}
      <motion.div
        initial={{ opacity: 0, x: reverse ? -50 : 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
        className={`relative overflow-hidden ${reverse ? "lg:order-1" : ""}`}
      >
        <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-2xl">
          {/* Icon Display */}
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-orange-50/50 to-orange-100/50 dark:from-gray-900/50 dark:to-gray-800/50">
            <div className="text-center p-4 sm:p-6 md:p-8">
              <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto mb-4 sm:mb-6 rounded-full bg-gradient-to-br from-orange-500/30 to-orange-600/30 flex items-center justify-center">
                <div className="text-orange-600 dark:text-orange-400">
                  {approach.icon}
                </div>
              </div>
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-200">
                {approach.name}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
