"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AboutPreview() {
  return (
    <section id="about-preview" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side with Scale Animation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              whileInView={{ scale: [0.95, 1] }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-orange-100 to-orange-50 dark:from-orange-900/20 dark:to-orange-800/10 shadow-2xl"
            >
              {/* Placeholder - Replace with actual image */}
              <Image
                src="/demo.jpg"
                alt="About GrowthMarg - Creative team collaboration"
                fill
                className="object-cover"
              />

              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-orange-500/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-orange-600/10 rounded-full blur-3xl" />
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                We Combine{" "}
                <span className="text-orange-600">Creative Strategy</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                And intelligent marketing to help brands grow with purpose
              </p>
            </div>

            <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
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
              className="pt-4"
            >
              <Link href="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-orange-500/50 hover:border-orange-500 hover:bg-orange-500/10 px-8 py-6 text-lg"
                >
                  Learn More About Us
                  <svg
                    className="w-5 h-5 ml-2"
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
