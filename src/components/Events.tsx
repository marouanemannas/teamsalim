import { Calendar } from "lucide-react";
import { events } from "@/data/events";
import { Container } from "@/components/ui/Container";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

function formatEventDate(iso: string) {
  return new Intl.DateTimeFormat("it-IT", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(iso));
}

export function Events() {
  return (
    <section
      id="eventi"
      className="relative py-28"
      style={{
        background:
          "linear-gradient(180deg, var(--background) 0%, var(--background-surface) 22%, var(--background-surface) 78%, var(--background) 100%)",
      }}
    >
      <Container>
        <SectionReveal>
          <SectionHeading eyebrow="Non perderteli" title="Eventi" ghost="LIVE" />
        </SectionReveal>

        <div className="relative mt-16 pl-8 sm:pl-12">
          <div className="absolute left-2 top-2 bottom-2 w-px bg-gradient-to-b from-accent via-accent-glow/40 to-transparent sm:left-3" />

          <div className="space-y-12">
            {events.map((event, index) => (
              <SectionReveal key={event.id} delay={index * 100}>
                <div className="relative">
                  <span className="absolute -left-8 top-1.5 h-3.5 w-3.5 rounded-full bg-accent-glow shadow-[0_0_16px_rgba(59,130,255,0.7)] sm:-left-11" />

                  <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent-glow">
                    <Calendar size={14} />
                    {formatEventDate(event.date)}
                  </div>
                  <h3 className="mt-3 font-heading text-2xl uppercase tracking-wide text-foreground sm:text-3xl">
                    {event.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-sm text-foreground-muted">
                    {event.description}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
