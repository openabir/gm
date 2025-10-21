"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

const CONTACT_INFO = [
  {
    icon: <Phone className="w-6 h-6" />,
    label: "Phone",
    value: "+91 98635 12125",
    href: "tel:+919863512125",
  },
  {
    icon: <Mail className="w-6 h-6" />,
    label: "Email",
    value: "growthmarg@gmail.com",
    href: "mailto:growthmarg@gmail.com",
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    label: "Address",
    value: "East Badarghat, Agartala, Tripura 799003",
    href: null,
  },
];

interface ContactInfoItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string | null;
  index: number;
}

function ContactInfoItem({
  icon,
  label,
  value,
  href,
  index,
}: ContactInfoItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
      className="flex items-start gap-4"
    >
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
        {icon}
      </div>
      <div>
        <p className="text-sm text-orange-100 mb-1">{label}</p>
        {href ? (
          <a
            href={href}
            className="text-base sm:text-lg font-medium hover:text-orange-100 transition-colors"
          >
            {value}
          </a>
        ) : (
          <p className="text-base sm:text-lg font-medium">{value}</p>
        )}
      </div>
    </motion.div>
  );
}

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      {CONTACT_INFO.map((info, index) => (
        <ContactInfoItem key={info.label} {...info} index={index} />
      ))}
    </div>
  );
}
