"use client";
import { ChevronRight } from "lucide-react";
import StackedCards from "../others/StackedCards";

export default function WhatWeDo() {
  return (
    <section className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-normal mb-4">
            Why Choose A Professional <br /> Digital Marketing Company?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl">
            From driving traffic to building brands, we create integrated
            strategies tailored to your unique goals. Our expertise becomes your
            advantage
          </p>
        </div>

        <StackedCards />
        
        <div className=" mt-20">
          <a href="/services" className="inline-block group">
            <p className="text-2xl transition-all duration-300 group-hover:translate-x-2 group-hover:scale-110">
              Explore <span className="font-cursive text-orange-600">our</span>{" "}
              services
              <span>
                {" "}
                <ChevronRight className="inline-block text-orange-600 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}
