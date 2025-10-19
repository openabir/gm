"use client";
import {
  TrendingUp,
  Target,
  BarChart3,
  Share2,
  Component,
  Zap,
} from "lucide-react";

export default function Why() {
  const items = [
    {
      title: "Strategic Growth Solutions",
      description:
        "We create long-term, KPI-driven marketing strategies that align with your business goals and drive sustainable growth.",
      icon: TrendingUp,
    },
    {
      title: "Full-Funnel Marketing Expertise",
      description:
        "We manage campaigns across every stage of the customer journey to ensure consistent engagement and maximum conversions.",
      icon: Target,
    },
    {
      title: "Analytics-Driven Decision Making",
      description:
        "We use real-time data, predictive insights, and performance analytics to guide every marketing decision.",
      icon: BarChart3,
    },
    {
      title: "Integrated Omnichannel Execution",
      description:
        "We deliver unified, consistent brand experiences across all digital channels for amplified impact.",
      icon: Share2,
    },
    {
      title: "Create Design That Drive Action ",
      description:
        "We create visuals that captivate your audience and compel them to act, turning passive scrollers into active customers.",
      icon: Component,
    },
    {
      title: "Agile Growth Experimentation",
      description:
        "We drive continuous improvement through structured testing, rapid iteration, and data-backed optimization.",
      icon: Zap,
    },
  ];

  return (
    <div className="px-4 mx-auto max-w-7xl">
      <div className="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:mt-24">
        {items.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="p-4 sm:p-6 md:p-8 lg:p-14 md:border-l md:border-gray-200 dark:md:border-neutral-800 first:md:border-l-0 md:[&:nth-child(3n+1)]:border-l-0 md:[&:nth-child(n+4)]:border-t border-orange-500"
            >
              <div className="mx-auto w-12 h-12 flex items-center justify-center">
                <Icon className="w-12 h-12 text-foreground" strokeWidth={1.5} />
              </div>
              <h3 className="mt-8 sm:mt-10 md:mt-12 text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                {item.title}
              </h3>
              <p className="mt-3 sm:mt-4 md:mt-5 text-sm sm:text-base text-gray-600 dark:text-gray-400">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
