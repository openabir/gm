"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { FaXTwitter, FaFacebookF, FaInstagram } from "react-icons/fa6";
import { Phone, Mail, MapPin } from "lucide-react";

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
    icon: <Phone className="w-6 h-6" />,
  },
  {
    label: "Email",
    value: "growthmarg@gmail.com",
    href: "mailto:growthmarg@gmail.com",
    icon: <Mail className="w-6 h-6" />,
  },
  {
    label: "Address",
    value: "East Badarghat, Agartala, Tripura 799003",
    icon: <MapPin className="w-6 h-6" />,
  },
];

const SOCIAL_LINKS: SocialLink[] = [
  {
    href: "https://twitter.com/growthmarg",
    label: "Twitter",
    icon: <FaXTwitter className="w-5 h-5" />,
  },
  {
    href: "https://www.instagram.com/growthmarg.in/",
    label: "Instagram",
    icon: <FaInstagram className="w-5 h-5" />,
  },
  {
    href: "https://www.facebook.com/growthmarg",
    label: "Facebook",
    icon: <FaFacebookF className="w-5 h-5" />,
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
      <footer className="relative mt-16 bg-gradient-to-b from-orange-500 via-80% to-red-500" ref={ref}>
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
            <div className="flex flex-col sm:flex-row items-center gap-2 text-sm">
              <p>{COMPANY_INFO.copyright}</p>
              <span className="hidden sm:inline">•</span>
              <p>
                Designed by{" "}
                <a
                  href="https://github.com/openabir"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold dark:hover:text-black hover:text-white transition-colors duration-300"
                >
                  a6ir
                </a>
              </p>
            </div>
            <SocialLinks />
          </motion.div>
        </motion.div>
      </footer>
    </>
  );
};
