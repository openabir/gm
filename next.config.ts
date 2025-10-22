import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Performance optimizations */
  reactStrictMode: true,

  // Optimize images
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.rareblocks.xyz",
        pathname: "/collection/**",
      },
    ],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year
  },

  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  // Experimental features for better performance
  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "motion/react",
      "framer-motion",
      "react-icons",
      "@radix-ui/react-accordion",
      "@radix-ui/react-dialog",
      "@radix-ui/react-hover-card",
      "@radix-ui/react-slot",
    ],
  },

  // Enable compression
  compress: true,

  // Production source maps (disable for smaller builds)
  productionBrowserSourceMaps: false,
};

export default nextConfig;
