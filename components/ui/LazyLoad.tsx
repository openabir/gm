"use client";

import { ReactNode } from "react";
import { useInView } from "react-intersection-observer";

interface LazyLoadProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
  triggerOnce?: boolean;
  rootMargin?: string;
}

export function LazyLoad({
  children,
  className = "",
  threshold = 0.1,
  triggerOnce = true,
  rootMargin = "50px",
}: LazyLoadProps) {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce,
    rootMargin,
  });

  return (
    <div ref={ref} className={className}>
      {inView ? children : <div className="min-h-[200px]" />}
    </div>
  );
}
