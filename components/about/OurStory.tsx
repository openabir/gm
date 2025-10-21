"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function OurStory() {
  return (
    <section id="our-story" className="py-20 md:py-32">
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
                alt="Our Story - Team collaboration"
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
                Our <span className="text-orange-600">Story</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                From humble beginnings to industry leaders
              </p>
            </div>

            <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
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
            <div className="grid grid-cols-2 gap-6 pt-8">
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
                  <div className="text-2xl font-bold text-orange-600">
                    {milestone.year}
                  </div>
                  <div className="text-sm text-muted-foreground">
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
