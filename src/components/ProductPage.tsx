import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/ui/Container";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { FeaturedGalleryPlaceholder } from "@/components/ui/FeaturedGalleryPlaceholder";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { getProductWhatsAppMessage } from "@/lib/whatsapp";
import type { Product } from "@/data/products";

interface ProductPageProps {
  product: Product;
}

export function ProductPage({ product }: ProductPageProps) {
  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden pb-16 pt-32 sm:pt-40">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-0 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-accent-cobalt/20 blur-[110px]" />
          </div>

          <Container className="relative">
            <SectionReveal>
              <Link
                href="/#abbigliamento"
                className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-foreground-muted transition-colors duration-300 hover:text-accent-glow"
              >
                <ArrowLeft
                  size={14}
                  className="transition-transform duration-300 group-hover:-translate-x-1"
                />
                Torna all&apos;abbigliamento
              </Link>
            </SectionReveal>

            <SectionReveal delay={80}>
              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.4em] text-accent-glow">
                {product.category}
              </p>
              <h1 className="mt-3 font-heading text-[clamp(3rem,12vw,7rem)] uppercase leading-none tracking-tight text-foreground">
                {product.name}
              </h1>
            </SectionReveal>
          </Container>
        </section>

        <section className="relative py-16 sm:py-20">
          <Container>
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              <SectionReveal delay={100}>
                <div className="flex h-full flex-col justify-center gap-6">
                  <p className="text-foreground-muted sm:text-lg">
                    {product.description}
                  </p>
                </div>
              </SectionReveal>

              <SectionReveal delay={180}>
                <FeaturedGalleryPlaceholder
                  label={product.name}
                  sizes="(min-width: 1024px) 45vw, 100vw"
                />
              </SectionReveal>
            </div>
          </Container>
        </section>

        <section className="relative py-20 sm:py-24">
          <Container className="flex flex-col items-center text-center">
            <SectionReveal>
              <p className="font-heading text-3xl uppercase tracking-wide text-foreground sm:text-4xl">
                Ti interessa questo capo?
              </p>
              <p className="mx-auto mt-3 max-w-md text-foreground-muted">
                Scrivici per info su disponibilità e taglie.
              </p>
              <WhatsAppButton
                className="mt-8"
                label="Scrivici su WhatsApp"
                message={getProductWhatsAppMessage(product.name)}
              />
            </SectionReveal>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
