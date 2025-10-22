"use client";

import Image from "next/image";
import { FaXTwitter, FaLinkedin } from "react-icons/fa6";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  description: string;
  social?: {
    twitter?: string;
    linkedin?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Mr. Arijit Biswas",
    role: "Co-Founder & CEO",
    image: "/arijit.webp",
    description:
      "Passionate digital marketing startegist dedicated to helping brands grow through creativity, data and innovation. With 3 years + hands on experience across social media, branding and advertising, blends strategy with storytelling to drive real results.",
    social: {
      twitter: "https://x.com/",
      linkedin: "https://linkedin.com/",
    },
  },
  {
    id: 2,
    name: "Mr. Abhimay Debnath",
    role: "Co-Founder & CPO",
    image: "/abhimay.webp",
    description:
      "Passionate creative lead who drives the execution behind every campaign. With expertise in videography, editing, and visual storytelling, he ensures each brand message is delivered with impact and precision.",
    social: {
      twitter: "https://x.com/",
      linkedin: "https://linkedin.com/",
    },
  },
];

export default function Team() {
  return (
    <section className="relative w-full overflow-hidden py-16 sm:py-20 md:py-24 lg:py-28">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20 space-y-4 sm:space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold leading-tight">
            Meet the{" "}
            <span className="text-cursive text-orange-600">Founders</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            The minds behind the mission
          </p>
        </div>

        {/* Team Cards Grid - 2 members centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
          {teamMembers.map((member) => (
            <div key={member.id} className="group h-full">
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-neutral-100 to-neutral-50 dark:from-neutral-800 dark:to-neutral-900 shadow-lg h-full flex flex-col">
                {/* Image Container */}
                <div className="relative w-full aspect-[4/3] overflow-hidden rounded-t-3xl flex-shrink-0">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6 space-y-4 flex-grow flex flex-col">
                  {/* Name & Role */}
                  <div className="space-y-1">
                    <h3 className="text-xl font-semibold text-foreground">
                      {member.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {member.role}
                    </p>
                  </div>

                  {/* Social Icons */}
                  {member.social && (
                    <div className="flex items-center gap-3">
                      {member.social.twitter && (
                        <a
                          href={member.social.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-foreground transition-colors"
                          aria-label="Twitter"
                        >
                          <FaXTwitter className="w-4 h-4" />
                        </a>
                      )}
                      {member.social.linkedin && (
                        <a
                          href={member.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-foreground transition-colors"
                          aria-label="LinkedIn"
                        >
                          <FaLinkedin className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  )}

                  {/* Description - with line clamp */}
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {member.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
