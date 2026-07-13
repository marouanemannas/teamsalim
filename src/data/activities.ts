export type ActivityCategory = "combattimento" | "percorsi" | "individuale";

export interface Activity {
  id: string;
  name: string;
  description: string;
  category: ActivityCategory;
  icon: "swords" | "flame" | "zap" | "hand" | "venus" | "baby" | "user" | "users";
  /** Pagina interna dedicata a cui punta il bottone della card. */
  href: string;
}

export const activities: Activity[] = [
  {
    id: "mma",
    name: "MMA",
    description:
      "Striking e grappling in un unico percorso, per formare atleti completi a 360 gradi.",
    category: "combattimento",
    icon: "swords",
    href: "/mma",
  },
  {
    id: "muay-thai",
    name: "Muay Thai",
    description:
      "L'arte delle otto armi: pugni, calci, gomiti e ginocchia, dalla tradizione thailandese al ring.",
    category: "combattimento",
    icon: "flame",
    href: "/muay-thai",
  },
  {
    id: "k-1",
    name: "K-1",
    description:
      "Kickboxing da combattimento in stile giapponese: potenza, ritmo e precisione.",
    category: "combattimento",
    icon: "zap",
    href: "/k1",
  },
  {
    id: "kickboxing",
    name: "Kickboxing",
    description:
      "Boxe e calci in un allenamento completo: la disciplina ideale per iniziare sul serio.",
    category: "combattimento",
    icon: "hand",
    href: "/kickboxing",
  },
  {
    id: "corsi-donne",
    name: "Corsi Donne",
    description:
      "Un ambiente dedicato per allenarsi, imparare a difendersi e stare in forma, senza pressioni.",
    category: "percorsi",
    icon: "venus",
    href: "/corsi-donne",
  },
  {
    id: "corsi-bambini",
    name: "Corsi Bambini",
    description:
      "Disciplina, rispetto e coordinazione fin da piccoli, in un ambiente sicuro e divertente.",
    category: "percorsi",
    icon: "baby",
    href: "/corsi-bambini",
  },
  {
    id: "personal-training",
    name: "Personal Training",
    description:
      "Allenamento individuale con Hafid o con lo staff, costruito sui tuoi obiettivi specifici.",
    category: "individuale",
    icon: "user",
    href: "/personal-training",
  },
  {
    id: "allenamenti-gruppo",
    name: "Allenamenti di gruppo",
    description:
      "La spinta della squadra: allenarsi insieme, spingersi a vicenda, superare i propri limiti.",
    category: "individuale",
    icon: "users",
    href: "/allenamenti-di-gruppo",
  },
];
