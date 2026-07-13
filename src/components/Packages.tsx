"use client";

import { Check } from "lucide-react";
import { packages } from "@/data/packages";
import { Container } from "@/components/ui/Container";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { useParallax } from "@/lib/hooks/useParallax";

export function Packages() {
  const blob = useParallax<HTMLDivElement>(0.08);

  return (
    <section id="pacchetti" className="relative overflow-hidden py-28">
      <div
        ref={blob}
        className="pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full bg-accent-cobalt/20 blur-[100px]"
      />

      <Container className="relative">
        <SectionReveal>
          <SectionHeading
            eyebrow="Allenati con noi"
            title="Pacchetti"
            ghost="MEMBER"
          />
        </SectionReveal>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {packages.map((pkg, index) => (
            <SectionReveal
              key={pkg.id}
              delay={index * 100}
              className={`h-full ${index === 1 ? "md:-translate-y-6" : ""}`}
            >
              <div
                className={`group flex h-full flex-col rounded-tr-[2.5rem] rounded-bl-[2.5rem] p-8 transition-all duration-300 hover:-translate-y-1 ${
                  pkg.highlighted
                    ? "border border-accent/60 bg-background-elevated shadow-[0_0_50px_rgba(30,90,255,0.25)]"
                    : "border border-white/10 bg-background-surface hover:border-accent-ice/40"
                }`}
              >
                {pkg.highlighted && (
                  <span className="mb-4 inline-block w-fit rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-wide text-foreground">
                    Il più scelto
                  </span>
                )}
                <span className="font-heading text-sm uppercase tracking-[0.3em] text-accent-glow">
                  0{index + 1}
                </span>
                <h3 className="mt-2 font-heading text-3xl uppercase tracking-wide text-foreground">
                  {pkg.name}
                </h3>
                <p className="mt-1 text-sm text-foreground-muted">
                  {pkg.tagline}
                </p>

                <ul className="mt-6 flex-1 space-y-3">
                  {pkg.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-foreground-muted"
                    >
                      <Check
                        size={18}
                        className="mt-0.5 shrink-0 text-accent-glow"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <WhatsAppButton
                  className="mt-8 w-full"
                  variant={pkg.highlighted ? "solid" : "outline"}
                  label={`Scegli ${pkg.name}`}
                  message={`Ciao! Sono interessato al pacchetto ${pkg.name}. Potreste darmi maggiori informazioni?`}
                />
              </div>
            </SectionReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
