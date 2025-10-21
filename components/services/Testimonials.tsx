"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    id: 1,
    quote:
      "GrowthMarg transformed our digital presence completely. Within 6 months, our organic traffic increased by 240% and lead quality improved dramatically. Their strategic approach and dedication are unmatched.",
    author: "Sarah Johnson",
    position: "CEO",
    company: "TechStart Solutions",
    image: "/placeholder-avatar-1.jpg",
  },
  {
    id: 2,
    quote:
      "The ROI we've seen from their PPC campaigns has been incredible. They don't just run ads — they understand our business and craft strategies that actually convert. Highly recommended!",
    author: "Michael Chen",
    position: "Marketing Director",
    company: "E-commerce Pro",
    image: "/placeholder-avatar-2.jpg",
  },
  {
    id: 3,
    quote:
      "Working with GrowthMarg has been a game-changer. Their content marketing strategy helped us establish thought leadership in our industry, and our engagement rates have never been better.",
    author: "Emily Rodriguez",
    position: "Founder",
    company: "Creative Studio Inc",
    image: "/placeholder-avatar-3.jpg",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-20 lg:py-28" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Client Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don&apos;t just take our word for it — hear from businesses
            we&apos;ve helped grow
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="relative bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 hover:border-orange-500/50 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                {/* Quote Icon */}
                <div className="mb-6">
                  <svg
                    className="w-10 h-10 text-orange-500/30"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                {/* Quote */}
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 flex-grow">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-gray-200 dark:border-gray-800">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.position}, {testimonial.company}
                    </p>
                  </div>
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/0 to-orange-600/0 group-hover:from-orange-500/5 group-hover:to-orange-600/5 transition-all duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Bar */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 p-8 rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100/30 dark:from-orange-900/10 dark:to-orange-800/5"
        >
          {[
            { value: "500+", label: "Happy Clients" },
            { value: "240%", label: "Avg. Traffic Growth" },
            { value: "98%", label: "Client Satisfaction" },
            { value: "5+ Years", label: "Industry Experience" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-4xl font-bold text-orange-600 dark:text-orange-400 mb-2">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </motion.div> */}
      </div>
    </section>
  );
}
