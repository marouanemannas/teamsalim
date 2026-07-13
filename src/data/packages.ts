export interface Package {
  id: string;
  name: string;
  tagline: string;
  features: string[];
  highlighted?: boolean;
}

export const packages: Package[] = [
  {
    id: "base",
    name: "Base",
    tagline: "Per iniziare con costanza",
    features: [
      "Accesso a 1 disciplina a scelta",
      "2 allenamenti a settimana",
      "Accesso spogliatoi",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    tagline: "Per chi si allena sul serio",
    features: [
      "Accesso a 2 discipline a scelta",
      "Allenamenti illimitati",
      "Accesso spogliatoi e doccia",
      "Sconto sull'abbigliamento ufficiale",
    ],
    highlighted: true,
  },
  {
    id: "elite",
    name: "Elite",
    tagline: "Per gli agonisti",
    features: [
      "Accesso a tutte le discipline",
      "Allenamenti illimitati",
      "1 lezione privata al mese",
      "Accesso prioritario agli eventi",
    ],
  },
];
