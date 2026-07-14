"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { disciplines } from "@/data/disciplines";
import { Container } from "@/components/ui/Container";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeaturedGalleryPlaceholder } from "@/components/ui/FeaturedGalleryPlaceholder";
import { LinkButton } from "@/components/ui/LinkButton";

export function About() {
  const [openId, setOpenId] = useState<string | null>(
    disciplines[0]?.id ?? null,
  );

  return (
    <section
      id="chi-siamo"
      className="relative py-28"
      style={{
        background:
          "linear-gradient(180deg, var(--background) 0%, var(--background-surface) 18%, var(--background-surface) 82%, var(--background) 100%)",
      }}
    >
      <Container>
        <SectionReveal>
          <SectionHeading
            eyebrow="Chi siamo"
            title="Discipline"
            ghost="04"
            align="left"
            description="Con oltre 40 anni di esperienza nelle arti marziali, il metodo di Salim si allena su quattro discipline. Accogliamo atleti di ogni livello, dal principiante all'agonista, con lo stesso approccio serio e tecnico che ha reso Team Salim un nome che vince in Italia e nel mondo."
          />
        </SectionReveal>

        <div className="mt-16 divide-y divide-white/10 border-y border-white/10">
          {disciplines.map((discipline, index) => {
            const isOpen = openId === discipline.id;

            return (
              <SectionReveal key={discipline.id} delay={index * 80}>
                <div>
                  <button
                    type="button"
                    onClick={() => setOpenId(isOpen ? null : discipline.id)}
                    aria-expanded={isOpen}
                    className="group flex w-full items-center gap-4 py-8 text-left transition-colors duration-300 hover:bg-white/[0.02] sm:gap-6"
                  >
                    <div className="grid flex-1 grid-cols-[3rem_1fr] items-center gap-6 sm:grid-cols-[5rem_1fr_1fr] sm:gap-10">
                      <span className="font-heading text-3xl text-foreground-muted/40 transition-colors duration-300 group-hover:text-accent-glow sm:text-5xl">
                        0{index + 1}
                      </span>
                      <h3 className="font-heading text-2xl uppercase tracking-wide text-foreground transition-transform duration-300 group-hover:translate-x-2 sm:text-4xl">
                        {discipline.name}
                      </h3>
                      <p className="col-span-2 text-sm text-foreground-muted sm:col-span-1 sm:text-base">
                        {discipline.description}
                      </p>
                    </div>
                    <ChevronDown
                      aria-hidden
                      size={20}
                      className={`shrink-0 text-foreground-muted transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-accent-glow" : ""
                      }`}
                    />
                  </button>

                  <div
                    className="grid transition-all duration-500 ease-out"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <div className="grid gap-8 pb-10 sm:grid-cols-2 sm:gap-10 sm:pl-[7.5rem]">
                        <div className="flex flex-col items-start gap-6">
                          <p className="text-sm text-foreground-muted sm:text-base">
                            {discipline.detail}
                          </p>
                          <LinkButton
                            href={discipline.href}
                            label="Scopri di più"
                            variant="outline"
                          />
                        </div>
                        <FeaturedGalleryPlaceholder
                          label={discipline.name}
                          src={discipline.image}
                          sizes="(min-width: 640px) 45vw, 100vw"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
