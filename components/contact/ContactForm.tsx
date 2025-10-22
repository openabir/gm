"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FormInput } from "./FormInput";
import { FormTextarea } from "./FormTextarea";
import { FormSelect } from "./FormSelect";
import { FormStatus } from "./FormStatus";

const CATEGORIES = [
  "General Inquiry",
  "SEO Services",
  "Social Media Marketing",
  "Web Development",
  "Content Marketing",
  "PPC Advertising",
  "Branding",
  "Other",
];

interface FormData {
  name: string;
  email: string;
  phone: string;
  category: string;
  message: string;
}

interface SubmitStatus {
  type: "success" | "error" | null;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    category: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>({
    type: null,
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          ...formData,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus({
          type: "success",
          message: "Thank you! Your message has been sent successfully. we will contact you shortly.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          category: "",
          message: "",
        });
      } else {
        throw new Error("Submission failed");
      }
    } catch {
      setSubmitStatus({
        type: "error",
        message: "Oops! Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mb-8"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Send us a Message
        </h2>
        <p className="text-muted-foreground text-base sm:text-lg md:text-xl">
          Fill out the form below and we&apos;ll get back to you within 24
          hours.
        </p>
      </motion.div>

      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        <FormInput
          id="name"
          name="name"
          label="Full Name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="John Doe"
          required
        />

        <FormInput
          id="email"
          name="email"
          label="Email Address"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="john@example.com"
          required
        />

        <FormInput
          id="phone"
          name="phone"
          label="Phone Number"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          placeholder="+91 98635 12125"
          required
        />

        <FormSelect
          id="category"
          name="category"
          label="Category"
          value={formData.category}
          onChange={handleChange}
          options={CATEGORIES}
          placeholder="Select a category"
        />

        <FormTextarea
          id="message"
          name="message"
          label="Message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your project..."
          rows={5}
          required
        />

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white text-base sm:text-lg px-8 py-6 shadow-lg shadow-orange-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <Loader className="w-5 h-5 animate-spin" />
              Sending...
            </span>
          ) : (
            <span className="flex items-center justify-center gap-2">
              Send Message
              <Send className="w-5 h-5" />
            </span>
          )}
        </Button>

        <FormStatus status={submitStatus} />
      </motion.form>
    </div>
  );
}
