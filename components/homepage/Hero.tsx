"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden pt-16 sm:pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-orange-100/30 dark:from-gray-900 dark:via-gray-800 dark:to-orange-900/10">
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,165,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,165,0,0.05)_1px,transparent_1px)] bg-[size:32px_32px] sm:bg-[size:48px_48px] md:bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000,transparent)]" />

        {/* Floating Orbs - Responsive sizing */}
        <div className="absolute top-10 sm:top-20 left-4 sm:left-10 w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 bg-orange-400/20 rounded-full blur-2xl sm:blur-3xl" />
        <div className="absolute bottom-10 sm:bottom-20 right-4 sm:right-10 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-orange-500/10 rounded-full blur-2xl sm:blur-3xl" />
      </div>

      {/* Content Container */}
      <div className="relative min-h-screen flex items-center justify-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Content */}
          <div className="text-center space-y-6 sm:space-y-8 md:space-y-10 py-12 sm:py-16 md:py-20">
            {/* Main Heading - Responsive text sizing */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold leading-tight tracking-tight">
              YOUR GROWTH, <br />
              <span className="font-normal text-orange-500">Amplified</span>
            </h1>

            {/* Description - Responsive spacing and sizing */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto text-muted-foreground">
              Tripura&apos;s first AI driven marketing agency, from the comfort
              of your home.
            </p>

            {/* CTA Button - Responsive sizing */}
            <div className="pt-4 sm:pt-6">
              <Link href="/services">
                <Button
                  size="lg"
                  className="text-sm sm:text-base md:text-lg px-6 sm:px-8 py-5 sm:py-6"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Fade Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 md:h-24 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none" />
    </section>
  );
}
