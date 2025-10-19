"use client";
import React, { useRef, useEffect, useState, useMemo } from "react";
import { motion } from "motion/react";

export const TextHoverEffect = ({
  text,
  className,
  textSize = "text-8xl md:text-9xl",
  loop = false,
  separator = "⟡",
  height = "auto",
  viewBoxHeight = "150",
}: {
  text: string;
  automatic?: boolean;
  className?: string;
  textSize?: string;
  loop?: boolean;
  separator?: string;
  height?: string;
  viewBoxHeight?: string;
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [maskPosition, setMaskPosition] = useState({ cx: "50%", cy: "50%" });

  // Generate unique IDs for this instance
  const uniqueId = useMemo(() => Math.random().toString(36).substr(2, 9), []);
  const gradientId = `textGradient-${uniqueId}`;
  const maskGradientId = `revealMask-${uniqueId}`;
  const maskId = `textMask-${uniqueId}`;

  // Create looped text if loop is enabled
  const displayText = useMemo(() => {
    if (loop) {
      // Repeat the text multiple times with separator
      return Array(10).fill(text).join(separator);
    }
    return text;
  }, [text, loop, separator]);

  useEffect(() => {
    if (svgRef.current && cursor.x !== null && cursor.y !== null) {
      const svgRect = svgRef.current.getBoundingClientRect();
      const cxPercentage = ((cursor.x - svgRect.left) / svgRect.width) * 100;
      const cyPercentage = ((cursor.y - svgRect.top) / svgRect.height) * 100;
      setMaskPosition({
        cx: `${cxPercentage}%`,
        cy: `${cyPercentage}%`,
      });
    }
  }, [cursor]);

  return (
    <svg
      ref={svgRef}
      width="100%"
      height={height}
      viewBox={`0 0 1200 ${viewBoxHeight}`}
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
      className={`select-none ${className || ""}`}
    >
      <defs>
        <linearGradient
          id={gradientId}
          gradientUnits="userSpaceOnUse"
          cx="50%"
          cy="50%"
          r="25%"
        >
          <>
            <stop offset="0%" stopColor="#eab308" />
            <stop offset="25%" stopColor="#ef4444" />
            <stop offset="50%" stopColor="#3b82f6" />
            <stop offset="75%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </>
        </linearGradient>

        <motion.radialGradient
          id={maskGradientId}
          gradientUnits="userSpaceOnUse"
          r="20%"
          animate={maskPosition}
          transition={{ duration: 0, ease: "linear" }}
        >
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </motion.radialGradient>
        <mask id={maskId}>
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill={`url(#${maskGradientId})`}
          />
        </mask>

        {/* Add glow filter */}
        <filter id={`glow-${uniqueId}`}>
          <feGaussianBlur
            stdDeviation={hovered ? "4" : "2"}
            result="coloredBlur"
          />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.5"
        className={`fill-transparent stroke-neutral-300 font-[helvetica] ${textSize} font-bold dark:stroke-neutral-700`}
        style={{ opacity: 0.4 }}
      >
        {displayText}
      </text>
      <motion.text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.5"
        className={`fill-transparent stroke-neutral-200 font-[helvetica] ${textSize} font-bold dark:stroke-neutral-800`}
        initial={{ strokeDashoffset: 1000, strokeDasharray: 1000 }}
        animate={{
          strokeDashoffset: 0,
          strokeDasharray: 1000,
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
        }}
      >
        {displayText}
      </motion.text>
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        stroke={`url(#${gradientId})`}
        strokeWidth="0.8"
        mask={`url(#${maskId})`}
        filter={`url(#glow-${uniqueId})`}
        className={`fill-transparent font-[helvetica] ${textSize} font-bold`}
        style={{ opacity: hovered ? 1 : 0.5 }}
      >
        {displayText}
      </text>
    </svg>
  );
};
