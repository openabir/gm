"use client";

import { ReactNode, useEffect, useRef } from "react";
import Lenis from "lenis";

export function LenisProvider({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const rafRef = useRef<number | undefined>();

  useEffect(() => {
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
      prevent: (node: HTMLElement) => {
        // Prevent Lenis from affecting dialog overlays and content
        return (
          node.closest('[data-slot="dialog-overlay"]') !== null ||
          node.closest('[data-slot="dialog-content"]') !== null ||
          node.closest('[role="dialog"]') !== null
        );
      },
    });

    function raf(time: number) {
      lenisRef.current?.raf(time);
      rafRef.current = requestAnimationFrame(raf);
    }

    rafRef.current = requestAnimationFrame(raf);

    // Listen for dialog state changes
    const observer = new MutationObserver(() => {
      const dialogOpen = document.querySelector(
        '[data-state="open"][data-slot="dialog-overlay"]'
      );
      if (dialogOpen) {
        lenisRef.current?.stop();
      } else {
        lenisRef.current?.start();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["data-state"],
    });

    return () => {
      observer.disconnect();
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      lenisRef.current?.destroy();
      lenisRef.current = null;
    };
  }, []);

  return <>{children}</>;
}
