"use client";

import { motion } from "framer-motion";
import { FaXTwitter, FaFacebookF, FaInstagram } from "react-icons/fa6";
import { IconType } from "react-icons";

const SOCIAL_LINKS = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/growthmarg.in/",
    icon: FaInstagram,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/growthmarg",
    icon: FaFacebookF,
  },
  {
    name: "X (Formerly Twitter)",
    href: "https://x.com/growthmarg",
    icon: FaXTwitter,
  },
];

interface SocialLinkItemProps {
  name: string;
  href: string;
  icon: IconType;
  index: number;
}

function SocialLinkItem({
  name,
  href,
  icon: IconComponent,
  index,
}: SocialLinkItemProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
      aria-label={name}
    >
      <IconComponent className="w-6 h-6" />
    </motion.a>
  );
}

export default function SocialLinks() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="pt-8 mt-8 border-t border-white/20"
    >
      <h3 className="text-lg sm:text-xl font-semibold mb-4">Follow Us</h3>
      <div className="flex items-center gap-4">
        {SOCIAL_LINKS.map((social, index) => (
          <SocialLinkItem key={social.name} {...social} index={index} />
        ))}
      </div>
    </motion.div>
  );
}
