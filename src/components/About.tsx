import { disciplines } from "@/data/disciplines";
import { Container } from "@/components/ui/Container";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
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
            description="Team Salim è una palestra di arti marziali a Vergato, nel cuore dell'Appennino Bolognese. Alleniamo atleti di ogni livello, dal principiante all'agonista, con un approccio serio, tecnico e orientato al miglioramento costante."
          />
        </SectionReveal>

        <div className="mt-16 divide-y divide-white/10 border-y border-white/10">
          {disciplines.map((discipline, index) => (
            <SectionReveal key={discipline.id} delay={index * 80}>
              <div className="group grid grid-cols-[3rem_1fr] items-center gap-6 py-8 transition-colors duration-300 hover:bg-white/[0.02] sm:grid-cols-[5rem_1fr_1fr] sm:gap-10">
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
            </SectionReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
