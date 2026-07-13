"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { disciplines } from "@/data/disciplines";
import { stats } from "@/data/stats";
import { Container } from "@/components/ui/Container";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { StatCounter } from "@/components/ui/StatCounter";
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

      <Container className="relative">
        <div className="flex flex-col items-center text-center">
          <div
            className={`mb-6 transition-all duration-700 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            <Image
              src="/logo.png"
              alt="Team Salim"
              width={72}
              height={72}
              priority
              className="drop-shadow-[0_0_35px_rgba(30,90,255,0.3)]"
            />
          </div>

          <p
            className={`mb-3 text-xs font-semibold uppercase tracking-[0.4em] text-accent-glow transition-all duration-700 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            Vergato · Bologna
          </p>

          <div className="relative">
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

          <p
            className={`mt-6 max-w-xl text-lg text-foreground-muted transition-all duration-700 ease-out sm:text-xl ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: "320ms" }}
          >
            Palestra di arti marziali. MMA, Muay Thai, K-1 e Kickboxing per
            chi vuole allenarsi sul serio.
          </p>

          <div
            className={`mt-8 flex flex-wrap items-center justify-center gap-3 transition-all duration-700 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: "420ms" }}
          >
            {disciplines.map((discipline) => (
              <span
                key={discipline.id}
                className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-sm font-medium text-foreground-muted backdrop-blur-sm"
              >
                {discipline.name}
              </span>
            ))}
          </div>

          <div
            className={`mt-10 flex flex-col gap-4 transition-all duration-700 ease-out sm:flex-row ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: "520ms" }}
          >
            <a
              href="#pacchetti"
              className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:scale-[1.03] hover:bg-accent-glow hover:shadow-[0_0_35px_rgba(59,130,255,0.4)]"
            >
              Scopri i pacchetti
            </a>
            <WhatsAppButton
              variant="outline"
              label="Scrivici su WhatsApp"
              message="Ciao! Vorrei avere maggiori informazioni su Team Salim."
            />
          </div>

          <div
            className={`mt-16 grid w-full max-w-lg grid-cols-3 divide-x divide-white/10 border-t border-white/10 pt-8 transition-all duration-700 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: "620ms" }}
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
