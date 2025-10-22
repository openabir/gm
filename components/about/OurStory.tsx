"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function OurStory() {
  return (
    <section
      id="our-story"
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
            className="order-2 lg:order-1 w-full flex items-center justify-center"
          >
            <Image
              src="/Story-amico.svg"
              alt="Our Story - Team collaboration"
              width={600}
              height={600}
              className="w-full h-auto max-w-full"
              priority={false}
            />
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
                Our <span className="text-orange-600">Story</span>
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground">
                From vision to venture
              </p>
            </div>

            <div className="space-y-4 sm:space-y-5 text-muted-foreground leading-relaxed text-base sm:text-lg">
              <p>
                <strong className="text-foreground">Founded in 2023, </strong>{" "}
                our company was built on a shared belief — that creativity and
                data together can redefine how marketing drives growth. What
                began as a small, focused team has become a full-service digital
                agency shaping impactful brand experiences across industries.
              </p>
              <p>
                We were born in the digital era, built to evolve with it.{" "}
                <strong className="text-foreground">
                  Innovation, precision, and measurable outcomes{" "}
                </strong>{" "}
                define everything we do.
              </p>
              <p>
                <strong className="text-foreground">
                  Today, we partner with ambitious brands{" "}
                </strong>{" "}
                to transform ideas into results. Our strategists, designers, and
                analysts work with one unified goal — to help your brand rise,
                resonate, and lead in a fast-changing world.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
