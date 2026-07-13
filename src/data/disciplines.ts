export interface Discipline {
  id: string;
  name: string;
  description: string;
  icon: "swords" | "flame" | "hand" | "zap";
}

export const disciplines: Discipline[] = [
  {
    id: "mma",
    name: "MMA",
    description:
      "Arti marziali miste: tecniche di striking e grappling per un combattimento completo, a 360 gradi.",
    icon: "swords",
  },
  {
    id: "muay-thai",
    name: "Muay Thai",
    description:
      "L'arte delle otto armi: pugni, calci, gomiti e ginocchia, direttamente dalla tradizione thailandese.",
    icon: "flame",
  },
  {
    id: "k-1",
    name: "K-1",
    description:
      "Kickboxing da combattimento in stile giapponese: potenza, ritmo e precisione sul ring.",
    icon: "zap",
  },
  {
    id: "kickboxing",
    name: "Kickboxing",
    description:
      "Il connubio tra boxe e calci: la disciplina ideale per allenarsi e migliorare condizione fisica e tecnica.",
    icon: "hand",
  },
];
