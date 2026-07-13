import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { NewsArticle } from "@/data/news";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/ui/Container";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { FeaturedGalleryPlaceholder } from "@/components/ui/FeaturedGalleryPlaceholder";
import { ImageGrid } from "@/components/ui/ImageGrid";

function formatDate(iso: string) {
  return new Intl.DateTimeFormat("it-IT", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(iso));
}

interface NewsArticlePageProps {
  article: NewsArticle;
}

export function NewsArticlePage({ article }: NewsArticlePageProps) {
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
                href="/#news"
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
                {formatDate(article.date)}
              </p>
              <h1 className="mt-3 font-heading text-[clamp(2.5rem,10vw,6rem)] uppercase leading-none tracking-tight text-foreground">
                {article.title}
              </h1>
              <p className="mt-6 max-w-xl text-lg text-foreground-muted sm:text-xl">
                {article.excerpt}
              </p>
            </SectionReveal>
          </Container>
        </section>

        <section className="relative py-8 sm:py-10">
          <Container>
            <SectionReveal>
              <FeaturedGalleryPlaceholder
                label={article.title}
                aspect="aspect-[16/9]"
                src={article.coverImage}
                sizes="100vw"
              />
            </SectionReveal>
          </Container>
        </section>

        <section className="relative py-16 sm:py-20">
          <Container>
            <div className="mx-auto flex max-w-2xl flex-col gap-6">
              <SectionReveal delay={100}>
                <div className="flex flex-col gap-6">
                  {article.body.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-foreground-muted sm:text-lg"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </SectionReveal>

              {article.externalLink && (
                <SectionReveal delay={160}>
                  <a
                    href={article.externalLink.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-2 inline-flex w-fit items-center gap-2 text-sm font-semibold uppercase tracking-wide text-accent-glow"
                  >
                    {article.externalLink.label}
                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                </SectionReveal>
              )}
            </div>
          </Container>
        </section>

        <section className="relative py-16 sm:py-20">
          <Container>
            <SectionReveal>
              <span className="mb-6 block text-xs font-semibold uppercase tracking-[0.35em] text-accent-glow">
                Galleria
              </span>
            </SectionReveal>
            <SectionReveal delay={80}>
              <ImageGrid items={article.gallery} />
            </SectionReveal>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
