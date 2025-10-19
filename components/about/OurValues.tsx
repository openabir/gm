"use client";
import { motion } from "motion/react";
import { Target, Lightbulb, Users, TrendingUp } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description:
      "We are committed to delivering measurable results that align with your business objectives and drive real growth.",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description:
      "We embrace creativity and cutting-edge strategies to keep your brand ahead of the competition.",
  },
  {
    icon: Users,
    title: "Client-Centric",
    description:
      "Your success is our success. We build lasting partnerships based on trust, transparency, and collaboration.",
  },
  {
    icon: TrendingUp,
    title: "Data-Driven",
    description:
      "Every decision is backed by insights and analytics to ensure optimal performance and continuous improvement.",
  },
];

export default function OurValues() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-transparent via-orange-50/30 to-transparent dark:via-orange-950/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Our <span className="font-cursive text-orange-600">Values</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The principles that guide everything we do
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative h-full p-8 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 transition-all duration-300 hover:border-orange-500/50 hover:shadow-xl hover:shadow-orange-500/10">
                  {/* Gradient Background on Hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/0 to-orange-500/0 group-hover:from-orange-500/5 group-hover:to-orange-500/10 transition-all duration-500" />

                  {/* Content */}
                  <div className="relative space-y-4">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="inline-flex p-3 rounded-xl bg-orange-100 dark:bg-orange-900/30 text-orange-600"
                    >
                      <Icon className="w-6 h-6" />
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-2xl font-semibold">{value.title}</h3>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
