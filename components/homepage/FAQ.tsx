"use client";

import React, { useState } from "react";

export default function FAQ() {
  const [faq, setFaq] = useState([
    {
      question: "What services do you offer?",
      answer:
        "We offer a comprehensive range of digital marketing services including SEO, social media marketing, content creation, email marketing, PPC advertising, and AI-driven marketing automation.",
      open: false,
    },
    {
      question: "How does AI improve marketing results?",
      answer:
        "Our AI technology analyzes data patterns, predicts customer behavior, optimizes ad spend, and personalizes content at scale — resulting in higher ROI and more effective campaigns.",
      open: false,
    },
    {
      question: "What industries do you work with?",
      answer:
        "We work with businesses across various industries including e-commerce, SaaS, healthcare, education, real estate, and local businesses looking to expand their digital presence.",
      open: false,
    },
    {
      question: "How long does it take to see results?",
      answer:
        "While some improvements can be seen within weeks, sustainable growth typically takes 3-6 months. We focus on long-term strategies that deliver consistent, measurable results.",
      open: false,
    },
    {
      question: "Do you work with businesses outside Tripura?",
      answer:
        "Absolutely! While we&apos;re based in Tripura, we serve clients globally. Our digital-first approach allows us to deliver exceptional results regardless of location.",
      open: false,
    },
  ]);

  const toggleFaq = (index: number) => {
    setFaq(
      faq.map((item, i) => {
        if (i === index) {
          item.open = !item.open;
        } else {
          item.open = false;
        }

        return item;
      })
    );
  };

  return (
    <section className="py-10 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="w-full mx-auto text-center">
          <h2 className="text-3xl leading-tight sm:text-4xl lg:text-7xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-4 text-xl leading-relaxed text-orange-800/70">
            Got questions? We&apos;ve got answers
          </p>
        </div>

        <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
          {faq.map((item, index) => (
            <div
              key={index}
              className="transition-all duration-200 cursor-pointer rounded-lg"
            >
              <button
                type="button"
                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                onClick={() => toggleFaq(index)}
              >
                <span className="flex text-lg font-semibold">
                  {" "}
                  {item.question}{" "}
                </span>

                <svg
                  className={`w-6 h-6 transition-transform duration-200 ${
                    item.open ? "rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div
                className={`${
                  item.open ? "block" : "hidden"
                } px-4 pb-5 sm:px-6 sm:pb-6`}
              >
                <p className="text-muted-foreground">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xl text-muted-foreground mt-9">
          Didn&apos;t find the answer you are looking for?{" "}
          <a
            href="/contact"
            className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700"
          >
            Contact our support
          </a>
        </p>
      </div>
    </section>
  );
}
