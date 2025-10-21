"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { CircleCheckBig } from "lucide-react";
import { useRef } from "react";
import Image from "next/image";

const processes = [
  {
    id: 1,
    name: "Discovery & Strategy",
    description:
      "We start by understanding your business, audience, and goals. Through comprehensive research and analysis, we develop a customized roadmap that aligns with your vision.",
    benefits: [
      "In-depth market and competitor analysis",
      "Audience research and persona development",
      "Strategic roadmap with clear KPIs",
    ],
    image: "/process/Discovery.svg",
    reverse: false,
  },
  {
    id: 2,
    name: "Implementation & Optimization",
    description:
      "Our expert team brings strategies to life with precision and creativity. We implement campaigns across multiple channels while continuously monitoring and optimizing performance.",
    benefits: [
      "Multi-channel campaign execution",
      "Creative content and design production",
      "Real-time performance monitoring",
    ],
    image: "/process/Optmize-pana.svg",
    reverse: true,
  },
  {
    id: 3,
    name: "Growth & Scaling",
    description:
      "Success is just the beginning. We scale winning strategies, explore new opportunities, and evolve with your business for long-term, sustainable growth.",
    benefits: [
      "Scalable growth strategies",
      "Transparent reporting and insights",
      "Dedicated account management",
    ],
    image: "/process/Growth-pana.svg",
    reverse: false,
  },
];

export default function ProcessWorkflow() {
  return (
    <section className="relative w-full overflow-hidden py-16 sm:py-20 md:py-24 lg:py-28">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 sm:mb-20 md:mb-24 text-center space-y-4 sm:space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-medium leading-tight">
            How we{" "}
            <span className="font-cursive text-orange-600">
              deliver results
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mx-auto max-w-3xl">
            Our proven three-step process for driving measurable growth
          </p>
        </div>

        {/* Process Items */}
        <div className="space-y-20 sm:space-y-24 md:space-y-28 lg:space-y-32">
          {processes.map((process) => (
            <ProcessItem
              key={process.id}
              process={process}
              reverse={process.reverse}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessItem({
  process,
  reverse,
}: {
  process: (typeof processes)[0];
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
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 sm:mb-6">
            {process.name}
          </h3>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            {process.description}
          </p>
        </motion.div>

        {/* Benefits List */}
        <motion.ul
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-3 sm:space-y-4"
        >
          {process.benefits.map((benefit, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: reverse ? 30 : -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className="flex items-start gap-3"
            >
              <CircleCheckBig className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 text-orange-500 mt-0.5" />
              <span className="text-sm sm:text-base">{benefit}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>

      {/* SVG Visual - Clean & Responsive */}
      <motion.div
        initial={{ opacity: 0, x: reverse ? -50 : 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
        className={`relative ${reverse ? "lg:order-1" : ""}`}
      >
        {/* SVG Image - No background, just the image */}
        <div className="relative w-full aspect-square mx-auto">
          <Image
            src={process.image}
            alt={process.name}
            fill
            className="object-contain drop-shadow-2xl"
            priority={process.id === 1}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
