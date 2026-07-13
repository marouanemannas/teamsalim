"use client";

import {
  Baby,
  Flame,
  Hand,
  Swords,
  UserRound,
  Users,
  Venus,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { activities, type Activity } from "@/data/activities";
import { Container } from "@/components/ui/Container";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LinkButton } from "@/components/ui/LinkButton";
import { useParallax } from "@/lib/hooks/useParallax";

const ICONS: Record<Activity["icon"], LucideIcon> = {
  swords: Swords,
  flame: Flame,
  zap: Zap,
  hand: Hand,
  venus: Venus,
  baby: Baby,
  user: UserRound,
  users: Users,
};

const CATEGORIES: { id: Activity["category"]; label: string }[] = [
  { id: "combattimento", label: "Discipline da combattimento" },
  { id: "percorsi", label: "Percorsi dedicati" },
  { id: "individuale", label: "Allenamento su misura" },
];

// Le discipline da combattimento e le altre attività condividono lo stesso
// "peso" visivo (stessa taglia di card): a cambiare è solo l'accento
// cromatico e il verso dell'arrotondamento degli angoli, per distinguere le
// categorie senza farne sembrare una principale e l'altra secondaria.
const CATEGORY_STYLES: Record<
  Activity["category"],
  { corner: string; accent: string; hoverBorder: string }
> = {
  combattimento: {
    corner: "rounded-tr-[2.5rem] rounded-bl-[2.5rem]",
    accent: "text-accent-glow",
    hoverBorder: "hover:border-accent-ice/40",
  },
  percorsi: {
    corner: "rounded-tl-[2.5rem] rounded-br-[2.5rem]",
    accent: "text-accent-cyan",
    hoverBorder: "hover:border-accent-cyan/40",
  },
  individuale: {
    corner: "rounded-tl-[2.5rem] rounded-br-[2.5rem]",
    accent: "text-accent-cyan",
    hoverBorder: "hover:border-accent-cyan/40",
  },
};

export function Activities() {
  const blob = useParallax<HTMLDivElement>(0.08);

  return (
    <section id="attivita" className="relative overflow-hidden py-28">
      <div
        ref={blob}
        className="pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full bg-accent-cobalt/20 blur-[100px]"
      />

      <Container className="relative">
        <SectionReveal>
          <SectionHeading
            eyebrow="Allenati con noi"
            title="Attività"
            ghost="TRAIN"
          />
        </SectionReveal>

        <div className="mt-16 space-y-16">
          {CATEGORIES.map((category, categoryIndex) => {
            const items = activities.filter((a) => a.category === category.id);
            const style = CATEGORY_STYLES[category.id];

            return (
              <div key={category.id}>
                <SectionReveal delay={categoryIndex * 60}>
                  <span
                    className={`mb-6 block text-xs font-semibold uppercase tracking-[0.35em] ${style.accent}`}
                  >
                    {category.label}
                  </span>
                </SectionReveal>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {items.map((activity, index) => {
                    const Icon = ICONS[activity.icon];
                    return (
                      <SectionReveal
                        key={activity.id}
                        delay={categoryIndex * 60 + index * 80}
                        className="h-full"
                      >
                        <div
                          className={`group flex h-full flex-col border border-white/10 bg-background-surface p-8 transition-all duration-300 hover:-translate-y-1 ${style.corner} ${style.hoverBorder}`}
                        >
                          <Icon
                            size={32}
                            strokeWidth={1.25}
                            className={style.accent}
                          />
                          <h3 className="mt-4 font-heading text-3xl uppercase tracking-wide text-foreground">
                            {activity.name}
                          </h3>
                          <p className="mt-2 flex-1 text-sm text-foreground-muted">
                            {activity.description}
                          </p>
                          <LinkButton
                            className="mt-6 w-full"
                            variant="outline"
                            href={activity.href}
                            label={`Scopri ${activity.name}`}
                          />
                        </div>
                      </SectionReveal>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
