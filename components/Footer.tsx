"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

// Types
interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface ContactItem {
  label: string;
  value: string;
  icon: React.ReactNode;
  href?: string;
}

interface SocialLink {
  href: string;
  label: string;
  icon: React.ReactNode;
}

// Data
const NAVIGATION_LINKS: FooterSection = {
  title: "Quick Links",
  links: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Works", href: "/works" },
  ],
};

const CONTACT_INFO: ContactItem[] = [
  {
    label: "Phone",
    value: "+91 98635 12125",
    href: "tel:+91986512125",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    ),
  },
  {
    label: "Email",
    value: "growthmarg@gmail.com",
    href: "mailto:growthmarg@gmail.com",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    label: "Address",
    value: "East Badarghat, Agartala, Tripura 799003",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
];

const SOCIAL_LINKS: SocialLink[] = [
  {
    href: "https://twitter.com/growthmarg",
    label: "Twitter",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
        <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
      </svg>
    ),
  },
  {
    href: "https://www.instagram.com/growthmarg.in/",
    label: "Instagram",
    icon: (
      <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
        <circle cx="15" cy="15" r="4" />
        <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
      </svg>
    ),
  },
  {
    href: "https://www.facebook.com/growthmarg",
    label: "Facebook",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
        <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
      </svg>
    ),
  },
];

const COMPANY_INFO = {
  name: "GROWTHMARG",
  description:
    "Empowering businesses with innovative digital solutions. We transform ideas into impactful digital experiences that drive growth and success.",
  copyright: `© Copyright ${new Date().getFullYear()} GrowthMarg. All rights reserved.`,
};

// MapBox Configuration
const MAPBOX_CONFIG = {
  latitude: 23.823595,
  longitude: 91.271521,
  zoom: 10,
};

// Sub-components
const CompanyLogo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      <Link
        href="/"
        aria-label="Go home"
        title={COMPANY_INFO.name}
        className="inline-flex items-center group"
      >
        <span className="text-3xl font-bold tracking-wide group-hover:text-primary-light transition-colors duration-300">
          {COMPANY_INFO.name}
        </span>
      </Link>
    </motion.div>
  );
};

const FooterLinkSection = ({ title, links }: FooterSection) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      <h3 className="font-semibold tracking-wide text-2xl mb-4">{title}</h3>
      <ul className="space-y-3 text-xl">
        {links.map((link, index) => (
          <motion.li
            key={link.label}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
          >
            <Link
              href={link.href}
              className="hover:text-orange-300 transition-colors duration-300"
            >
              {link.label}
            </Link>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <h3 className="font-semibold tracking-wide text-2xl mb-4">Contact Us</h3>
      <ul className="space-y-3">
        {CONTACT_INFO.map((contact, index) => (
          <motion.li
            key={contact.label}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
            className="flex items-start gap-3"
          >
            <span className="text-primary-light mt-1">{contact.icon}</span>
            <div className="flex-1">
              {contact.href ? (
                <a
                  href={contact.href}
                  className="hover:text-white transition-colors duration-300 text-xl"
                >
                  {contact.value}
                </a>
              ) : (
                <span className="text-xl">{contact.value}</span>
              )}
            </div>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

const MapSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <h3 className="font-semibold tracking-wide text-2xl mb-4">
        Our Location
      </h3>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="relative w-full h-64 rounded-lg overflow-hidden"
      >
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: 0 }}
          src={`https://www.openstreetmap.org/export/embed.html?bbox=${
            MAPBOX_CONFIG.longitude - 0.01
          }%2C${MAPBOX_CONFIG.latitude - 0.01}%2C${
            MAPBOX_CONFIG.longitude + 0.01
          }%2C${MAPBOX_CONFIG.latitude + 0.01}&layer=mapnik&marker=${
            MAPBOX_CONFIG.latitude
          }%2C${MAPBOX_CONFIG.longitude}`}
          title="GrowthMarg Location"
          className="grayscale hover:grayscale-0 transition-all duration-300"
        />
      </motion.div>
    </motion.div>
  );
};

const SocialLinks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div className="flex items-center mt-4 space-x-4 sm:mt-0">
      {SOCIAL_LINKS.map((social, index) => (
        <motion.div
          key={social.label}
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          whileHover={{ scale: 1.2, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link
            ref={index === 0 ? ref : undefined}
            href={social.href}
            aria-label={social.label}
            className="hover:text-orange-300 transition-colors duration-300"
          >
            {social.icon}
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

const WaveDivider = () => (
  <svg
    className="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 text-orange-500"
    preserveAspectRatio="none"
    viewBox="0 0 1440 54"
  >
    <path
      fill="currentColor"
      d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
    />
  </svg>
); // Main component
export const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <>
      <footer className="relative mt-16 bg-orange-500" ref={ref}>
        <WaveDivider />

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8"
        >
          {/* Main Footer Content */}
          <div className="grid gap-8 mb-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Company Info Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="md:max-w-md"
            >
              <CompanyLogo />
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-4 text-lg leading-relaxed"
              >
                {COMPANY_INFO.description}
              </motion.p>
            </motion.div>

            {/* Navigation Links */}
            <FooterLinkSection {...NAVIGATION_LINKS} />

            {/* Contact Information */}
            <ContactSection />

            {/* Map Section */}
            <MapSection />
          </div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col justify-between py-5 border-y border-gray-800 sm:flex-row items-center gap-4"
          >
            <p className="text-sm">{COMPANY_INFO.copyright}</p>
            <SocialLinks />
          </motion.div>
        </motion.div>
      </footer>
    </>
  );
};
