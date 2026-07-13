import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { news } from "@/data/news";
import { Container } from "@/components/ui/Container";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeaturedGalleryPlaceholder } from "@/components/ui/FeaturedGalleryPlaceholder";

function formatDate(iso: string) {
  return new Intl.DateTimeFormat("it-IT", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(iso));
}

export function News() {
  return (
    <section id="news" className="relative py-20">
      <Container>
        <SectionReveal>
          <SectionHeading
            eyebrow="Dal mondo Team Salim"
            title="News"
            ghost="NEWS"
            align="left"
          />
        </SectionReveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {news.map((article, index) => (
            <SectionReveal
              key={article.id}
              delay={index * 80}
              className="h-full"
            >
              <Link href={article.href} className="group flex h-full flex-col">
                <FeaturedGalleryPlaceholder
                  label={article.title}
                  aspect="aspect-[16/10]"
                  src={article.coverImage}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
                <div className="mt-4 flex flex-1 flex-col">
                  <p className="text-xs font-medium uppercase tracking-wide text-foreground-muted">
                    {formatDate(article.date)}
                  </p>
                  <h3 className="mt-1 font-heading text-2xl uppercase tracking-wide text-foreground transition-colors duration-300 group-hover:text-accent-glow">
                    {article.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-foreground-muted">
                    {article.excerpt}
                  </p>
                  <span className="mt-4 inline-flex w-fit items-center gap-1 text-xs font-semibold uppercase tracking-wide text-accent-glow">
                    Leggi di più
                    <ArrowUpRight
                      size={14}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </span>
                </div>
              </Link>
            </SectionReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
