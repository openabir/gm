"use client";

import Image from "next/image";
import { useState, useEffect, useCallback, useRef } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export default function Navbar({
  isBannerVisible = true,
}: {
  isBannerVisible?: boolean;
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    const scrollThreshold = 80; // Minimum scroll distance to trigger hide/show
    const scrollDelta = 5; // Minimum delta to prevent jitter

    // Clear any existing timeout
    if (scrollTimeout.current) {
      clearTimeout(scrollTimeout.current);
    }

    // Debounce the visibility change
    scrollTimeout.current = setTimeout(() => {
      if (currentScrollY < scrollThreshold) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current + scrollDelta) {
        // Scrolling down with threshold
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY.current - scrollDelta) {
        // Scrolling up with threshold
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    }, 50); // 50ms debounce

    ticking.current = false;
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(handleScroll);
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, [handleScroll]);

  const navLinks = [
    { href: "/services", label: "Services" },
    { href: "/works", label: "Works" },
    { href: "/about", label: "About Us" },
  ];

  return (
    <>
      {/* Modern Minimal Navbar */}
      <nav
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ease-out backdrop-blur-md bg-background/80 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{ top: isBannerVisible ? "56px" : "0px" }}
      >
        <div className="relative">
          {/* Content */}
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              {/* Logo */}
              <a
                href="#hero"
                className="flex items-center gap-2 shrink-0 group transition-transform hover:scale-105"
              >
                <Image
                  src="/logo.svg"
                  alt="Growth Marg"
                  width={200}
                  height={200}
                  className="h-10 w-auto"
                />
              </a>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-10 bg-transparent">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="relative text-sm font-medium text-foreground/80 hover:text-foreground transition-colors group"
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full" />
                  </a>
                ))}

                {/* Theme Toggle */}
                <ThemeToggle />
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden flex items-center gap-2">
                <ThemeToggle />
                <button
                  className="p-2.5 rounded-full hover:bg-foreground/5 transition-colors"
                  aria-label="Toggle menu"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  {isMobileMenuOpen ? (
                    <X className="w-5 h-5" />
                  ) : (
                    <Menu className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Menu Panel */}
          <div className="absolute top-20 left-0 right-0 mx-4 bg-background/95 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden animate-in slide-in-from-top duration-300">
            <nav className="p-6 space-y-1">
              {navLinks.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-base font-medium text-foreground/80 hover:text-foreground hover:bg-foreground/5 transition-all py-3 px-4 rounded-xl"
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
