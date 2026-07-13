"use client";

import { ArrowUpRight } from "lucide-react";
import { products } from "@/data/products";
import { Container } from "@/components/ui/Container";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductArt } from "@/components/ui/ProductArt";
import { WHATSAPP_LINK } from "@/lib/constants";
import { useParallax } from "@/lib/hooks/useParallax";

export function Shop() {
  const blob = useParallax<HTMLDivElement>(0.1);

  return (
    <section id="abbigliamento" className="relative overflow-hidden py-28">
      <div
        ref={blob}
        className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-accent-cyan/10 blur-[100px]"
      />

      <Container className="relative">
        <SectionReveal>
          <SectionHeading
            eyebrow="Merchandise ufficiale"
            title="Abbigliamento"
            ghost="WEAR"
            align="left"
          />
        </SectionReveal>

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2">
          {products.map((product, index) => (
            <SectionReveal key={product.id} delay={index * 100}>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <ProductArt product={product} index={index} />
                <div className="mt-4 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-foreground-muted">
                      {product.category}
                    </p>
                    <h3 className="mt-1 font-heading text-2xl uppercase tracking-wide text-foreground transition-colors group-hover:text-accent-glow">
                      {product.name}
                    </h3>
                  </div>
                  <span className="mt-1 inline-flex shrink-0 items-center gap-1 text-xs font-semibold uppercase tracking-wide text-accent-glow opacity-0 transition-all duration-300 group-hover:opacity-100">
                    Ordina
                    <ArrowUpRight
                      size={14}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </span>
                </div>
              </a>
            </SectionReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
