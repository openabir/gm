"use client";

import React from "react";
import Image from "next/image";

const logos = [
  { name: "Figma", src: "/tools/figma.svg" },
  { name: "GitHub", src: "/tools/github.svg" },
  { name: "Gmail", src: "/tools/gmail.svg" },
  { name: "Google Ads", src: "/tools/googleads.svg" },
  { name: "HubSpot", src: "/tools/hubspot.svg" },
  { name: "Instagram", src: "/tools/instagram.svg" },
  { name: "Notion", src: "/tools/notion.svg" },
  { name: "Slack", src: "/tools/slack.svg" },
  { name: "Webflow", src: "/tools/webflow.svg" },
  { name: "WhatsApp", src: "/tools/whatsapp.svg" },
  { name: "WordPress", src: "/tools/wordpress.svg" },
  { name: "Zoom", src: "/tools/zoom.svg" },
  { name: "Meta", src: "/tools/meta.svg" },
];

const Integrations = () => {
  return (
    <section className="mt-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold mb-4">
            Next-Gen Tools to Keep You Ahead of the Curve
          </h2>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-8 items-center justify-items-center">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="relative w-20 h-20 flex items-center justify-center p-2 rounded-lg"
              title={logo.name}
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={80}
                height={80}
                className="object-contain grayscale opacity-70 dark:invert"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Integrations;
