"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface Service {
  id: number;
  title: string;
  tagline: string;
  description: string;
  outcomes: string[];
  open: boolean;
}

const servicesData: Omit<Service, "open">[] = [
  {
    id: 1,
    title: "Search Engine Optimization (SEO)",
    tagline: "Rank higher. Get discovered. Grow organically.",
    description:
      "We optimize your website to achieve higher search engine rankings and drive qualified traffic. From in-depth keyword research to technical SEO audits, on-page optimization, link-building, and performance tracking — we help your brand dominate search results.",
    outcomes: [
      "Improved Google visibility",
      "Higher organic traffic & lead quality",
      "SEO-optimized content that performs",
    ],
  },
  {
    id: 2,
    title: "Pay-Per-Click Advertising (PPC)",
    tagline: "Instant visibility. Measurable performance.",
    description:
      "We design and manage data-driven ad campaigns across Google, Meta, LinkedIn, and other platforms to generate immediate, high-intent traffic. Through precise targeting, A/B testing, and ongoing optimization, we ensure maximum ROI from every click.",
    outcomes: [
      "Targeted ad campaigns",
      "Lower cost-per-acquisition (CPA)",
      "Transparent reporting and insights",
    ],
  },
  {
    id: 3,
    title: "Social Media Marketing (SMM)",
    tagline: "Connect, engage, and grow your community.",
    description:
      "We create and manage social media strategies that build authentic relationships with your audience. From eye-catching visuals and content calendars to paid campaigns and influencer collaborations — we help your brand stand out across every platform.",
    outcomes: [
      "Increased engagement and brand awareness",
      "Consistent brand storytelling",
      "Performance analytics and growth insights",
    ],
  },
  {
    id: 4,
    title: "Content Marketing",
    tagline: "Content that informs, engages, and converts.",
    description:
      "We craft compelling blog posts, landing pages, videos, and visuals that resonate with your audience and strengthen your online authority. Our content strategies are data-driven, SEO-friendly, and designed to move users through the conversion funnel.",
    outcomes: [
      "High-quality, SEO-optimized content",
      "Increased user engagement and dwell time",
      "Improved brand authority",
    ],
  },
  {
    id: 5,
    title: "Email Marketing & Automation",
    tagline: "Personalized communication that drives loyalty.",
    description:
      "We design email campaigns that nurture relationships, boost retention, and generate conversions. With advanced automation and segmentation, your messages reach the right people at the right time — every time.",
    outcomes: [
      "Automated email workflows",
      "Lead nurturing and re-engagement",
      "Detailed campaign analytics",
    ],
  },
  {
    id: 6,
    title: "Conversion Rate Optimization (CRO)",
    tagline: "Turn visitors into loyal customers.",
    description:
      "Our CRO experts analyze user behavior, run A/B tests, and optimize landing pages to improve your conversion funnel. We focus on enhancing usability, design, and messaging to drive measurable growth.",
    outcomes: [
      "Improved conversion rates",
      "Data-backed UX enhancements",
      "Higher ROI across marketing campaigns",
    ],
  },
  {
    id: 7,
    title: "Branding & Creative Strategy",
    tagline: "Build a brand that people remember.",
    description:
      "From logos and color systems to brand messaging and tone of voice, we craft identities that inspire trust and recognition. We align creativity with strategy to communicate your story effectively.",
    outcomes: [
      "Distinct brand identity",
      "Consistent visual and verbal design",
      "Emotional connection with audiences",
    ],
  },
  {
    id: 8,
    title: "Web Design & Development",
    tagline: "Performance-focused websites that convert.",
    description:
      "We design responsive, fast, and SEO-friendly websites that deliver seamless user experiences. Whether it's a landing page or a full-scale e-commerce site, we build with clarity, creativity, and conversion in mind.",
    outcomes: [
      "Custom, high-speed, mobile-optimized websites",
      "SEO integration & analytics setup",
      "Scalable design systems",
    ],
  },
  {
    id: 9,
    title: "Influencer & Affiliate Marketing",
    tagline: "Expand reach through trusted voices.",
    description:
      "We connect your brand with the right influencers and affiliates to amplify awareness and credibility. Each campaign is tailored to your target audience, ensuring genuine engagement and measurable returns.",
    outcomes: [
      "Increased reach and brand advocacy",
      "Strategic partnerships",
      "Transparent performance tracking",
    ],
  },
  {
    id: 10,
    title: "Online Reputation Management (ORM)",
    tagline: "Protect, manage, and elevate your brand image.",
    description:
      "We monitor and manage your brand's online presence — addressing reviews, mentions, and social feedback. Our proactive ORM strategies strengthen trust and ensure your reputation remains positive.",
    outcomes: [
      "Reputation monitoring & review management",
      "Crisis response & recovery",
      "Improved customer sentiment",
    ],
  },
  {
    id: 11,
    title: "Analytics & Performance Tracking",
    tagline: "Data that drives smarter decisions.",
    description:
      "We integrate advanced analytics tools to track user behavior, campaign performance, and ROI. From custom dashboards to monthly insights, we turn data into actionable business intelligence.",
    outcomes: [
      "Real-time performance insights",
      "Transparent reporting",
      "Continuous optimization support",
    ],
  },
  {
    id: 12,
    title: "Video Marketing",
    tagline: "Visual stories that inspire and convert.",
    description:
      "We script, design, and produce videos that tell your story — from brand films and product demos to short-form social content. Each video is crafted to engage, inform, and drive results.",
    outcomes: [
      "Story-driven video campaigns",
      "High-quality production & editing",
      "Multi-platform optimization",
    ],
  },
  {
    id: 13,
    title: "E-commerce Marketing",
    tagline: "Grow sales. Build loyalty. Scale your store.",
    description:
      "We develop multi-channel strategies to increase your e-commerce revenue — using product ads, retargeting, email automation, and data analytics to optimize every customer journey.",
    outcomes: [
      "Higher conversions & repeat purchases",
      "Optimized product listings & campaigns",
      "Actionable e-commerce insights",
    ],
  },
  {
    id: 14,
    title: "Local SEO & Google Business Optimization",
    tagline: "Be found where it matters most.",
    description:
      "We optimize your business for local searches and maps, helping you dominate your area and attract nearby customers. Perfect for service providers, restaurants, and local brands.",
    outcomes: [
      "Google My Business optimization",
      "Local keyword targeting",
      "Improved map visibility & local rankings",
    ],
  },
];

export default function ServicesGrid() {
  const [services, setServices] = useState<Service[]>(
    servicesData.map((service) => ({ ...service, open: false }))
  );

  const toggleService = (index: number) => {
    setServices(
      services.map((item, i) => ({
        ...item,
        open: i === index ? !item.open : false,
      }))
    );
  };

  return (
    <section className="py-16 sm:py-20 lg:py-28">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="w-full mx-auto text-center mb-12">
          <h1 className="text-4xl leading-tight sm:text-5xl lg:text-7xl font-bold">
            Our Services
          </h1>
          <p className="mx-auto mt-6 text-lg sm:text-xl leading-relaxed text-muted-foreground max-w-3xl">
            From strategy to execution, our full-suite digital marketing
            services are designed to elevate your brand, enhance performance,
            and ensure measurable business growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`group relative overflow-hidden rounded-xl transition-all duration-300 cursor-pointer ${
                service.open
                  ? "md:col-span-2 lg:col-span-3 bg-gradient-to-br from-orange-50 to-orange-100/50 dark:from-orange-950/20 dark:to-orange-900/10"
                  : "bg-white dark:bg-gray-900 hover:shadow-lg border border-gray-200 dark:border-gray-800"
              }`}
              onClick={() => toggleService(index)}
            >
              <div className="p-6">
                {/* Card Header - Always Visible */}
                <div className="flex items-start justify-between gap-4">
                  <h3
                    className={`font-bold transition-all duration-300 ${
                      service.open
                        ? "text-2xl sm:text-3xl text-orange-600"
                        : "text-xl group-hover:text-orange-600"
                    }`}
                  >
                    {service.title}
                  </h3>
                  <ChevronDown
                    className={`w-6 h-6 flex-shrink-0 text-orange-600 transition-transform duration-300 ${
                      service.open ? "rotate-180" : ""
                    }`}
                  />
                </div>

                {/* Expanded Content */}
                {service.open && (
                  <div className="mt-6 space-y-6 animate-in fade-in slide-in-from-top-4 duration-500">
                    {/* Tagline */}
                    <p className="text-lg sm:text-xl font-semibold text-orange-700 dark:text-orange-400">
                      {service.tagline}
                    </p>

                    {/* Description */}
                    <p className="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                      {service.description}
                    </p>

                    {/* Outcomes */}
                    <div>
                      <h4 className="font-semibold text-lg mb-3">
                        What you get:
                      </h4>
                      <ul className="space-y-2">
                        {service.outcomes.map((outcome, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                          >
                            <svg
                              className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            <span>{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {/* Collapsed State - Show tagline as preview */}
                {!service.open && (
                  <p className="mt-3 text-sm text-muted-foreground line-clamp-2">
                    {service.tagline}
                  </p>
                )}
              </div>

              {/* Hover Indicator (when collapsed) */}
              {!service.open && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              )}
            </div>
          ))}
        </div>

        {/* Closing Statement */}
        <div className="mt-16 text-center">
          <p className="text-lg sm:text-xl text-muted-foreground italic max-w-4xl mx-auto">
            &ldquo;From strategy to execution, our full-suite digital marketing
            services are designed to elevate your brand, enhance performance,
            and ensure measurable business growth.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
