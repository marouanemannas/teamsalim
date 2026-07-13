import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/ui/Container";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { FeaturedGalleryPlaceholder } from "@/components/ui/FeaturedGalleryPlaceholder";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

interface DisciplinePageContent {
  name: string;
  tagline: string;
  story: string[];
  /** Se false, la pagina non mostra la galleria placeholder. Default: true. */
  gallery?: boolean;
  image?: string;
}

interface DisciplinePageProps {
  discipline: DisciplinePageContent;
}

export function DisciplinePage({ discipline }: DisciplinePageProps) {
  const showGallery = discipline.gallery ?? true;

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
                href="/#chi-siamo"
                className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-foreground-muted transition-colors duration-300 hover:text-accent-glow"
              >
                <ArrowLeft
                  size={14}
                  className="transition-transform duration-300 group-hover:-translate-x-1"
                />
                Torna alla home
              </Link>
            </SectionReveal>

            <SectionReveal delay={80}>
              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.4em] text-accent-glow">
                Team Salim
              </p>
              <h1 className="mt-3 font-heading text-[clamp(3rem,12vw,7rem)] uppercase leading-none tracking-tight text-foreground">
                {discipline.name}
              </h1>
              <p className="mt-6 max-w-xl text-lg text-foreground-muted sm:text-xl">
                {discipline.tagline}
              </p>
            </SectionReveal>
          </Container>
        </section>

        <section className="relative py-16 sm:py-20">
          <Container>
            <div
              className={`grid gap-10 ${showGallery ? "lg:grid-cols-2 lg:gap-16" : ""}`}
            >
              <SectionReveal delay={100}>
                <div
                  className={`flex flex-col gap-6 ${
                    showGallery ? "h-full justify-center" : "mx-auto max-w-2xl"
                  }`}
                >
                  {discipline.story.map((paragraph) => (
                    <p key={paragraph} className="text-foreground-muted sm:text-lg">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </SectionReveal>

              <SectionReveal delay={180}>
                {showGallery ? (
                  <FeaturedGalleryPlaceholder
                    label={discipline.name}
                    src={discipline.image}
                    sizes="(min-width: 1024px) 45vw, 100vw"
                  />
                ) : (
                  <div className="mx-auto max-w-2xl border-t border-white/10 pt-10">
                    <p className="font-heading text-3xl uppercase leading-tight tracking-tight text-foreground sm:text-4xl">
                      {discipline.tagline}
                    </p>
                  </div>
                )}
              </SectionReveal>
            </div>
          </Container>
        </section>

        <section className="relative py-20 sm:py-24">
          <Container className="flex flex-col items-center text-center">
            <SectionReveal>
              <p className="font-heading text-3xl uppercase tracking-wide text-foreground sm:text-4xl">
                Vuoi provare {discipline.name}?
              </p>
              <p className="mx-auto mt-3 max-w-md text-foreground-muted">
                Scrivici e ti diamo tutte le informazioni per iniziare da Team
                Salim.
              </p>
              <WhatsAppButton
                className="mt-8"
                label="Mettiti in contatto con il team"
              />
            </SectionReveal>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
