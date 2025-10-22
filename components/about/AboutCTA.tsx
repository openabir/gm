"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CircleCheck } from "lucide-react";

export default function AboutCTA() {
  return (
    <section className="relative w-full overflow-hidden py-16 sm:py-20 md:py-24 lg:py-32">
      {/* Gradient Background with Parallax Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-orange-900/30 to-gray-900">
        {/* Animated Gradient Orbs */}
        <motion.div
          className="absolute top-0 left-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-orange-500/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 100, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-orange-600/30 rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.6, 0.3, 0.6],
            x: [0, -100, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6 sm:space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-block"
          >
            <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-orange-500/20 backdrop-blur-sm border border-orange-500/30 text-orange-300 text-xs sm:text-sm font-medium">
              <svg
                className="w-3 h-3 sm:w-4 sm:h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
              Let&apos;s Create Something Amazing
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold  leading-tight"
          >
            Let&apos;s Build Something
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              Remarkable Together
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl  max-w-2xl mx-auto leading-relaxed"
          >
            Ready to transform your brand&apos;s digital presence? Let&apos;s
            start a conversation about your goals and how we can help you
            achieve them.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 sm:pt-6"
          >
            <Link href="/contact">
              <Button
                size="lg"
                className="relative group bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg overflow-hidden w-full sm:w-auto"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Contact Us
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
              </Button>
            </Link>
            <Link href="/services">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-orange-500/50 hover:border-orange-500 px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg backdrop-blur-sm w-full sm:w-auto"
              >
                Book a Free Consultation
              </Button>
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 pt-8 sm:pt-12 text-xs sm:text-sm"
          >
            <div className="flex items-center gap-2">
              <CircleCheck className="w-5 h-5 text-orange-500" />
              <span>Free strategy session</span>
            </div>
            <div className="flex items-center gap-2">
              <CircleCheck className="w-5 h-5 text-orange-500" />
              <span>No long-term contracts</span>
            </div>
            <div className="flex items-center gap-2">
              <CircleCheck className="w-5 h-5 text-orange-500" />
              <span>Results guaranteed</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
