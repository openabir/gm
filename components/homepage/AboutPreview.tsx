"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AboutPreview() {
  return (
    <section
      id="about-preview"
      className="relative w-full overflow-hidden py-16 sm:py-20 md:py-24 lg:py-28"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Image Side with Scale Animation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative w-full aspect-square">
              <Image
                src="/Team work-amico.svg"
                alt="About GrowthMarg - Creative team collaboration"
                fill
                className="object-contain"
              />
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-24 h-24 sm:w-32 sm:h-32 bg-orange-500/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-32 h-32 sm:w-40 sm:h-40 bg-orange-600/10 rounded-full blur-3xl" />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 sm:space-y-8 order-1 lg:order-2"
          >
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                We Combine{" "}
                <span className="text-orange-600">Creative Strategy</span>
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground">
                And intelligent marketing to help brands grow with purpose
              </p>
            </div>

            <div className="space-y-4 sm:space-y-5 text-muted-foreground leading-relaxed text-base sm:text-lg">
              <p>
                <strong className="text-foreground">
                  Born from a passion for creativity and data,
                </strong>{" "}
                we&apos;ve built a digital marketing agency that delivers real,
                measurable results. Our approach blends strategic thinking with
                cutting-edge execution.
              </p>
              <p>
                From SEO and content marketing to paid advertising and brand
                strategy, we create{" "}
                <strong className="text-foreground">
                  integrated campaigns
                </strong>{" "}
                that don&apos;t just look great — they perform exceptionally.
              </p>
              <p>
                We&apos;re not just another agency. We&apos;re your growth
                partner, committed to understanding your business and delivering
                strategies that move the needle.
              </p>
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-2 sm:pt-4"
            >
              <Link href="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-orange-500/50 hover:border-orange-500 hover:bg-orange-500/10 px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg"
                >
                  Learn More About Us
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-2"
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
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
