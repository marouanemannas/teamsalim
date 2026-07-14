"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import type { HeroGalleryImage } from "@/data/heroGallery";

interface MarqueeGalleryProps {
  items: HeroGalleryImage[];
  className?: string;
}

const AUTO_SCROLL_SPEED = 34; // px/sec
const RESUME_DELAY = 2500; // ms di inattività prima di riprendere lo scroll automatico

export function MarqueeGallery({ items, className = "" }: MarqueeGalleryProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const halfWidthRef = useRef(0);
  const pausedRef = useRef(false);
  const draggingRef = useRef(false);
  const dragStartRef = useRef({ x: 0, offset: 0 });
  const resumeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const loopItems = [...items, ...items];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    function measure() {
      if (track) halfWidthRef.current = track.scrollWidth / 2;
    }
    measure();

    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(track);

    let frame = 0;
    let last = performance.now();

    function tick(now: number) {
      const dt = now - last;
      last = now;

      const half = halfWidthRef.current;
      if (!pausedRef.current && !reduceMotion && half > 0 && track) {
        offsetRef.current -= (AUTO_SCROLL_SPEED * dt) / 1000;
        if (offsetRef.current <= -half) offsetRef.current += half;
        track.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
      }
      frame = requestAnimationFrame(tick);
    }
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    };
  }, []);

  function normalizeOffset() {
    const half = halfWidthRef.current;
    if (half <= 0) return;
    while (offsetRef.current <= -half) offsetRef.current += half;
    while (offsetRef.current > 0) offsetRef.current -= half;
  }

  function handlePointerDown(e: React.PointerEvent<HTMLDivElement>) {
    // Drag manuale solo per mouse: su touch/penna lasciamo che il tocco
    // scorra la pagina normalmente (nessun setPointerCapture, nessuna pausa
    // dell'auto-scroll), invece di intercettarlo per il trascinamento.
    if (e.pointerType !== "mouse") return;
    draggingRef.current = true;
    pausedRef.current = true;
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    dragStartRef.current = { x: e.clientX, offset: offsetRef.current };
    e.currentTarget.setPointerCapture(e.pointerId);
  }

  function handlePointerMove(e: React.PointerEvent<HTMLDivElement>) {
    if (e.pointerType !== "mouse") return;
    if (!draggingRef.current || !trackRef.current) return;
    const dx = e.clientX - dragStartRef.current.x;
    offsetRef.current = dragStartRef.current.offset + dx;
    normalizeOffset();
    trackRef.current.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
  }

  function endDrag(e: React.PointerEvent<HTMLDivElement>) {
    if (e.pointerType !== "mouse") return;
    if (!draggingRef.current) return;
    draggingRef.current = false;
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(() => {
      pausedRef.current = false;
    }, RESUME_DELAY);
  }

  return (
    <div
      className={`relative w-full select-none overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] ${className}`}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      onPointerLeave={endDrag}
    >
      <div
        ref={trackRef}
        className="flex w-max cursor-grab gap-4 will-change-transform active:cursor-grabbing"
      >
        {loopItems.map((item, index) => (
          <div
            key={`${item.alt}-${index}`}
            className="relative h-36 w-52 flex-shrink-0 overflow-hidden rounded-xl border border-white/10 sm:h-44 sm:w-64"
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              draggable={false}
              sizes="(min-width: 640px) 16rem, 13rem"
              className="pointer-events-none object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
