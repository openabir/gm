"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

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
    image: "/placeholder-seo.jpg",
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
    image: "/placeholder-ppc.jpg",
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
    image: "/placeholder-social.jpg",
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
    image: "/placeholder-content.jpg",
    reverse: true,
  },
];

export default function DetailedServices() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What We Do Best
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our core services and see how we drive measurable results
          </p>
        </div>

        {/* Service Items */}
        <div className="space-y-32">
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
      className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
        reverse ? "lg:flex-row-reverse" : ""
      }`}
    >
      {/* Text Content */}
      <div className={`space-y-6 ${reverse ? "lg:order-2" : ""}`}>
        <motion.div
          initial={{ opacity: 0, x: reverse ? 50 : -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            {service.name}
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {service.description}
          </p>
        </motion.div>

        {/* Benefits List */}
        <motion.ul
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-4"
        >
          {service.benefits.map((benefit, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: reverse ? 30 : -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className="flex items-start gap-3"
            >
              <svg
                className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5"
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
              <span className="text-base text-gray-700 dark:text-gray-300">
                {benefit}
              </span>
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
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-orange-100 to-orange-200 dark:from-orange-900/20 dark:to-orange-800/10 shadow-2xl">
          {/* Placeholder for image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center p-8">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-orange-500/20 flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-orange-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <p className="text-sm text-muted-foreground font-medium">
                {service.name} Illustration
              </p>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -z-10 top-8 -right-8 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute -z-10 -bottom-8 -left-8 w-72 h-72 bg-orange-600/10 rounded-full blur-3xl" />
      </motion.div>
    </motion.div>
  );
}
