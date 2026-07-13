"use client";

import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { stats } from "@/data/stats";
import { heroGalleryImages } from "@/data/heroGallery";
import { Container } from "@/components/ui/Container";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { StatCounter } from "@/components/ui/StatCounter";
import { MarqueeGallery } from "@/components/ui/MarqueeGallery";
import { useParallax } from "@/lib/hooks/useParallax";

export function Hero() {
  const [mounted, setMounted] = useState(false);
  const blobA = useParallax<HTMLDivElement>(0.12);
  const blobB = useParallax<HTMLDivElement>(-0.08);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pb-24 pt-32 sm:pb-28"
    >
      <div className="pointer-events-none absolute inset-0">
        <div
          ref={blobA}
          className="absolute left-1/2 top-1/4 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-accent-cobalt/25 blur-[110px]"
        />
        <div
          ref={blobB}
          className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-accent-cyan/10 blur-[90px]"
        />
      </div>

      <div className="relative flex w-full flex-col items-center">
        <Container className="relative">
          <div className="flex flex-col items-center text-center">
            <p
              className={`text-xs font-semibold uppercase tracking-[0.4em] text-accent-glow transition-all duration-700 ease-out ${
                mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: "100ms" }}
            >
              Dal 1995 · Vergato, Bologna
            </p>

            <div className="relative mt-3">
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 translate-x-[6px] translate-y-[6px] select-none whitespace-nowrap font-heading text-[clamp(3rem,15vw,10rem)] uppercase leading-none text-transparent [-webkit-text-stroke:1px_rgba(59,130,255,0.22)]"
              >
                Team Salim
              </span>
              <h1
                className={`relative whitespace-nowrap font-heading text-[clamp(3rem,15vw,10rem)] uppercase leading-none tracking-tight text-foreground transition-all duration-1000 ease-out ${
                  mounted
                    ? "translate-y-0 opacity-100 blur-none"
                    : "translate-y-10 opacity-0 blur-sm"
                }`}
                style={{
                  transitionDelay: "180ms",
                  willChange: "transform, opacity, filter",
                }}
              >
                Team Salim
              </h1>
            </div>
          </div>
        </Container>

        <div
          className={`relative left-1/2 mt-10 w-screen max-w-none -translate-x-1/2 transition-all duration-700 ease-out ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
          style={{ transitionDelay: "280ms" }}
        >
          <MarqueeGallery items={heroGalleryImages} />
        </div>

        <Container className="relative">
          <div className="flex flex-col items-center text-center">
            <p
              className={`mt-10 max-w-xl text-lg text-foreground-muted transition-all duration-700 ease-out sm:text-xl ${
                mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: "380ms" }}
            >
              Dal 1995, la palestra di arti marziali di Vergato. MMA, Muay
              Thai, K-1 e Kickboxing, con lo stesso motto da sempre: dare il
              massimo.
            </p>

            <div
              className={`mt-10 flex flex-col gap-4 transition-all duration-700 ease-out sm:flex-row ${
                mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: "460ms" }}
            >
              <a
                href="#attivita"
                className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:scale-[1.03] hover:bg-accent-glow hover:shadow-[0_0_35px_rgba(59,130,255,0.4)]"
              >
                Scopri le attività
              </a>
              <WhatsAppButton variant="outline" label="Scrivici su WhatsApp" />
            </div>

            <div
              className={`mt-14 grid w-full max-w-lg grid-cols-3 divide-x divide-white/10 border-t border-white/10 pt-8 transition-all duration-700 ease-out ${
                mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: "580ms" }}
            >
              {stats.map((stat) => (
                <StatCounter
                  key={stat.id}
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                />
              ))}
            </div>
          </div>
        </Container>
      </div>

      <ChevronDown
        aria-hidden
        size={22}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce text-foreground-muted/50"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-accent-dark/15 to-transparent"
        style={{ clipPath: "polygon(0 100%, 100% 45%, 100% 100%)" }}
      />
    </section>
  );
}
