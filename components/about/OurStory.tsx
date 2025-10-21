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
            className="relative order-2 lg:order-1"
          >
            <motion.div
              whileInView={{ scale: [0.95, 1] }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative w-full aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl"
            >
              {/* Placeholder - Replace with actual image */}
              <Image
                src="/demo.jpg"
                alt="Our Story - Team collaboration"
                fill
                className="object-cover"
              />
            </motion.div>
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
                From humble beginnings to industry leaders
              </p>
            </div>

            <div className="space-y-4 sm:space-y-5 text-muted-foreground leading-relaxed text-base sm:text-lg">
              <p>
                <strong className="text-foreground">
                  Born from a passion for creativity and data,
                </strong>{" "}
                we started with one goal — to make marketing meaningful. What
                began in 2015 as a small team of passionate marketers has grown
                into a full-service digital agency trusted by brands worldwide.
              </p>
              <p>
                Our journey has been defined by{" "}
                <strong className="text-foreground">
                  innovation, creativity, and an unwavering commitment
                </strong>{" "}
                to delivering exceptional results for our clients. We&apos;ve
                evolved with the ever-changing digital landscape, always staying
                ahead of trends and technologies.
              </p>
              <p>
                Today, we help ambitious brands{" "}
                <strong className="text-foreground">
                  connect, engage, and grow
                </strong>{" "}
                through strategic digital innovation. We&apos;re proud to be a
                team of strategists, creatives, and analysts who share a common
                goal: making your brand stand out and succeed in a crowded
                marketplace.
              </p>
            </div>

            {/* Timeline */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 pt-6 sm:pt-8">
              {[
                { year: "2015", event: "Company Founded" },
                { year: "2018", event: "100+ Clients" },
                { year: "2021", event: "Team of 50+" },
                { year: "2024", event: "Global Expansion" },
              ].map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="space-y-1"
                >
                  <div className="text-xl sm:text-2xl font-bold text-orange-600">
                    {milestone.year}
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground">
                    {milestone.event}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
