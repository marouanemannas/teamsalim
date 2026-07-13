"use client";

import { useEffect, useRef } from "react";

export function useParallax<T extends HTMLElement>(speed = 0.15) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    // Promote the element to its own GPU compositing layer up front, so the
    // (expensive, blurred) pixels are rasterized once and every subsequent
    // scroll frame is a cheap GPU-composited translate instead of a repaint.
    node.style.willChange = "transform";
    node.style.backfaceVisibility = "hidden";
    node.style.transform = "translate3d(0, 0, 0)";

    let frame = 0;
    function onScroll() {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        if (!node) return;
        node.style.transform = `translate3d(0, ${window.scrollY * speed}px, 0)`;
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [speed]);

  return ref;
}
