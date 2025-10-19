import React from "react";
import Image from "next/image";

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Discovery & Strategy",
      description:
        "We dive deep into your business goals, target audience, and market landscape to craft a customized marketing strategy that aligns with your vision and objectives.",
    },
    {
      number: 2,
      title: "Creative Planning & Content Development",
      description:
        "Our creative experts design impactful visuals, write engaging content, and plan campaign assets that connect with your audience across every platform.",
    },
    {
      number: 3,
      title: "Channel Selection & Campaign Setup",
      description:
        "We identify the right digital channels — from SEO and Google Ads to social media and email — and set up data-backed campaigns tailored to your audience's behavior.",
    },
    {
      number: 4,
      title: "Implementation & Optimization",
      description:
        "Our AI-powered tools execute campaigns across multiple platforms while continuously testing, analyzing, and refining for top performance and ROI.",
    },
    {
      number: 5,
      title: "Performance Tracking & Analytics",
      description:
        "We monitor every key metric — traffic, engagement, conversions, and ROI — through detailed dashboards and reports that keep you informed at every stage.",
    },
    {
      number: 6,
      title: "Growth & Scaling",
      description:
        "With proven strategies and data-backed success, we scale your campaigns, expand reach, and fine-tune targeting to accelerate long-term growth.",
    },
  ];

  return (
    <section className="py-10 overflow-x-hidden">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-normal mb-4">
            How does it work?
          </h2>
          <p className="text-xl text-orange-800/70 max-w-3xl">
            Discover our streamlined process that transforms your digital
            marketing vision into measurable results.
          </p>
        </div>

        <div className="relative mt-12 lg:mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="flex items-center  gap-4 mb-6">
                  <div className="flex items-center justify-center w-16 h-16 border-2  border-orange-600/30 rounded-full flex-shrink-0">
                    <h1 className="text-3xl font-bold text-orange-600">{step.number}</h1>
                  </div>
                  <h3 className="text-2xl font-semibold text-left">
                    {step.title}
                  </h3>
                </div>
                <div className="mt-4">
                  <p className="text-muted-foreground text-justify">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
