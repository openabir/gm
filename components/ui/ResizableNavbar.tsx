"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
} from "@/components/ui/resizable-navbar";

export default function ResizableNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Services", link: "/services" },
    { name: "Works", link: "/works" },
    { name: "About Us", link: "/about" },
  ];

  return (
    <Navbar className="top-0">
      {/* Desktop Navigation */}
      <NavBody>
        {/* Logo */}
        <Link
          href="/"
          className="relative z-20 flex items-center space-x-2 px-2 py-1"
        >
          <Image
            src="/logo.svg"
            alt="Growth Marg"
            width={200}
            height={40}
            className="h-8 w-auto"
          />
        </Link>

        {/* Nav Items */}
        <NavItems items={navItems} />

        {/* Theme Toggle */}
        <div className="relative z-20">
          <ThemeToggle />
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 px-2 py-1">
            <Image
              src="/logo.svg"
              alt="Growth Marg"
              width={150}
              height={30}
              className="h-6 w-auto"
            />
          </Link>

          {/* Right Side - Theme Toggle and Menu */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <MobileNavToggle
              isOpen={isOpen}
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>
        </MobileNavHeader>

        {/* Mobile Menu */}
        <MobileNavMenu isOpen={isOpen} onClose={() => setIsOpen(false)}>
          {navItems.map((item, idx) => (
            <a
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={() => setIsOpen(false)}
              className="w-full px-4 py-3 text-left text-base font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-100"
            >
              {item.name}
            </a>
          ))}
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
