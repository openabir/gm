"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  TrendingUp,
  Zap,
  Target,
  Users,
  BarChart3,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full overflow-x-clip pt-16 sm:pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-orange-100/30 dark:from-gray-900 dark:via-gray-800 dark:to-orange-900/10">
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,165,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,165,0,0.05)_1px,transparent_1px)] bg-[size:32px_32px] sm:bg-[size:48px_48px] md:bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000,transparent)]" />

        {/* Floating Orbs - Animated */}
        <motion.div
          animate={{
            y: [0, 30, 0],
            x: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-10 sm:top-20 left-4 sm:left-10 w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 bg-orange-400/20 rounded-full blur-2xl sm:blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, -40, 0],
            x: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-10 sm:bottom-20 right-4 sm:right-10 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-orange-500/10 rounded-full blur-2xl sm:blur-3xl"
        />

        {/* Floating Decorative Elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 right-1/4 hidden lg:block"
        >
          <div className="relative">
            <Sparkles className="w-8 h-8 text-orange-500/40" />
            <div className="absolute inset-0 blur-md">
              <Sparkles className="w-8 h-8 text-orange-500/20" />
            </div>
          </div>
        </motion.div>

        <motion.div
          animate={{
            y: [0, 25, 0],
            rotate: [0, -15, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-1/3 left-1/4 hidden lg:block"
        >
          <div className="relative">
            <TrendingUp className="w-10 h-10 text-orange-400/30" />
            <div className="absolute inset-0 blur-md">
              <TrendingUp className="w-10 h-10 text-orange-400/15" />
            </div>
          </div>
        </motion.div>

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/2 left-1/3 hidden md:block"
        >
          <Zap className="w-6 h-6 text-orange-500/20" />
        </motion.div>
      </div>

      {/* Content Container */}
      <div className="relative min-h-screen flex items-center justify-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Content */}
          <div className="text-center space-y-6 sm:space-y-8 md:space-y-10 py-12 sm:py-16 md:py-20">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 dark:bg-orange-900/30 border border-orange-200 dark:border-orange-800/50 text-orange-700 dark:text-orange-300"
            >
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">
                Tripura&apos;s First AI-Powered Marketing Agency
              </span>
            </motion.div>

            {/* Main Heading - Animated */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight">
                <span className="inline-block">
                  YOUR GROWTH,
                  <motion.span
                    animate={{
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 3,
                    }}
                    className="inline-block ml-4"
                  >
                    🚀
                  </motion.span>
                </span>
                <br />
                <span className="relative inline-block mt-2">
                  <span className="relative z-10 font-cursive font-normal text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600">
                    our obsession
                  </span>
                  {/* Decorative underline */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent origin-left"
                  />
                </span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto text-muted-foreground leading-relaxed"
            >
              Transform your brand with{" "}
              <span className="text-orange-600 font-semibold">
                data-driven strategies
              </span>
              ,{" "}
              <span className="text-orange-600 font-semibold">
                AI-powered insights
              </span>
              , and creative excellence.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 sm:pt-6"
            >
              <Link href="/contact" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="group relative w-full sm:w-auto bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white text-sm sm:text-base md:text-lg px-6 sm:px-8 py-5 sm:py-6 shadow-lg shadow-orange-500/30"
                >
                  <span className="flex items-center gap-2">
                    Get Started Free
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </Link>
              <Link href="/services" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-2 border-orange-500/50 hover:border-orange-500 hover:bg-orange-500/10 text-sm sm:text-base md:text-lg px-6 sm:px-8 py-5 sm:py-6"
                >
                  <span className="flex items-center gap-2">
                    View Services
                    <Target className="w-4 h-4 sm:w-5 sm:h-5" />
                  </span>
                </Button>
              </Link>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="pt-12"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="inline-flex flex-col items-center gap-2 text-muted-foreground"
              >
                <span className="text-xs sm:text-sm">Scroll to explore</span>
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Decorative Arrows */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 0.1, x: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute left-8 top-1/2 hidden xl:block"
        >
          <svg
            width="120"
            height="120"
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-orange-500"
          >
            <path
              d="M60 20 L60 100 M60 100 L45 85 M60 100 L75 85"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="60" cy="20" r="8" fill="currentColor" opacity="0.5" />
          </svg>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 0.1, x: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute right-8 top-1/2 hidden xl:block"
        >
          <svg
            width="120"
            height="120"
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-orange-500"
          >
            <path
              d="M20 60 L100 60 M100 60 L85 45 M100 60 L85 75"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="20" cy="60" r="8" fill="currentColor" opacity="0.5" />
          </svg>
        </motion.div>
      </div>

      {/* Bottom Fade Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 md:h-24 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none" />
    </section>
  );
}
