"use client";

import { ReactNode } from "react";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";

interface AnimateOnViewProps {
  children: ReactNode;
  className?: string;
  animation?: "fade" | "slideUp" | "slideLeft" | "slideRight" | "scale";
  duration?: number;
  delay?: number;
  threshold?: number;
}

export function AnimateOnView({
  children,
  className = "",
  animation = "fade",
  duration = 0.6,
  delay = 0,
  threshold = 0.2,
}: AnimateOnViewProps) {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: true,
    rootMargin: "0px 0px -100px 0px",
  });

  const animations = {
    fade: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    slideUp: {
      hidden: { opacity: 0, y: 40 },
      visible: { opacity: 1, y: 0 },
    },
    slideLeft: {
      hidden: { opacity: 0, x: 40 },
      visible: { opacity: 1, x: 0 },
    },
    slideRight: {
      hidden: { opacity: 0, x: -40 },
      visible: { opacity: 1, x: 0 },
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 },
    },
  };

  const selectedAnimation = animations[animation];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={selectedAnimation}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
