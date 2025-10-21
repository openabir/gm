"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CircleCheckBig } from "lucide-react";
import Image from "next/image";

const detailedServices = [
  {
    id: 1,
    name: "Search Engine Optimization (SEO)",
    description:
      "Rank higher and get discovered by your target audience through strategic SEO optimization.",
    benefits: [
      "Improved Google visibility and organic rankings",
      "Higher quality traffic and lead generation",
      "SEO-optimized content that performs",
      "Technical audits and on-page optimization",
    ],
    image: "/services/SEO analytics team-rafiki.svg",
    reverse: false,
  },
  {
    id: 2,
    name: "Pay-Per-Click Advertising (PPC)",
    description:
      "Drive immediate, high-intent traffic with data-driven ad campaigns across Google, Meta, and LinkedIn.",
    benefits: [
      "Targeted campaigns with precise audience segmentation",
      "Lower cost-per-acquisition through optimization",
      "Transparent reporting and actionable insights",
      "Continuous A/B testing for maximum ROI",
    ],
    image: "/services/Marketing-amico.svg",
    reverse: true,
  },
  {
    id: 3,
    name: "Social Media Marketing (SMM)",
    description:
      "Build authentic relationships with your audience through strategic social media management and campaigns.",
    benefits: [
      "Increased engagement and brand awareness",
      "Consistent brand storytelling across platforms",
      "Performance analytics and growth insights",
      "Influencer collaborations and paid campaigns",
    ],
    image: "/services/SocialMediaMarketing-cuate.svg",
    reverse: false,
  },
  {
    id: 4,
    name: "Content Marketing",
    description:
      "Craft compelling content that informs, engages, and converts your audience while building authority.",
    benefits: [
      "High-quality, SEO-optimized blog posts and articles",
      "Increased user engagement and dwell time",
      "Improved brand authority and thought leadership",
      "Data-driven content strategies for conversions",
    ],
    image: "/services/Blog-amico.svg",
    reverse: true,
  },
];

export default function DetailedServices() {
  return (
    <section className="relative w-full overflow-hidden py-16 sm:py-20 md:py-24 lg:py-28 bg-gray-50 dark:bg-gray-900/50">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-18 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            What We Do Best
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our core services and see how we drive measurable results
          </p>
        </div>

        {/* Service Items */}
        <div className="space-y-20 sm:space-y-24 md:space-y-28 lg:space-y-32">
          {detailedServices.map((service) => (
            <ServiceItem
              key={service.id}
              service={service}
              reverse={service.reverse}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceItem({
  service,
  reverse,
}: {
  service: (typeof detailedServices)[0];
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
      <div
        className={`space-y-4 sm:space-y-5 md:space-y-6 ${
          reverse ? "lg:order-2" : ""
        }`}
      >
        <motion.div
          initial={{ opacity: 0, x: reverse ? 50 : -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            {service.name}
          </h3>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            {service.description}
          </p>
        </motion.div>

        {/* Benefits List */}
        <motion.ul
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-3 sm:space-y-4"
        >
          {service.benefits.map((benefit, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: reverse ? 30 : -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className="flex items-start gap-2 sm:gap-3"
            >
              <CircleCheckBig className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 text-orange-500 mt-0.5 sm:mt-1" />

              <span className="text-sm sm:text-base">{benefit}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>

      {/* Image */}
      <motion.div
        initial={{ opacity: 0, x: reverse ? -50 : 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
        className={`relative ${reverse ? "lg:order-1" : ""}`}
      >
        <div className="relative w-full max-w-md mx-auto aspect-square">
          <Image
            src={service.image}
            alt={service.name}
            fill
            className="object-contain drop-shadow-2xl"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 500px"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
