import { nottebiancaImage } from "@/lib/nottebianca";

export interface Discipline {
  id: string;
  name: string;
  description: string;
  detail: string;
  tagline: string;
  story: string[];
  href: string;
  icon: "swords" | "flame" | "hand" | "zap";
  image: string;
}

export const disciplines: Discipline[] = [
  {
    id: "mma",
    name: "MMA",
    description:
      "Arti marziali miste: tecniche di striking e grappling per un combattimento completo, a 360 gradi.",
    detail:
      "Da Team Salim l'MMA è il banco di prova definitivo: striking e grappling si allenano insieme, sotto lo sguardo di Hafid e del suo staff, per formare atleti completi capaci di adattarsi a qualsiasi fase del combattimento. Un percorso esigente, pensato per chi vuole mettersi davvero alla prova.",
    tagline: "Striking e grappling, senza compromessi.",
    story: [
      "Da Team Salim l'MMA non è una moda: è la disciplina che mette alla prova tutto quello che un atleta ha costruito nelle altre arti marziali. Qui si allena il combattimento nella sua forma più completa, in piedi e a terra, con Hafid e lo staff a seguire ogni fase del lavoro.",
      "Chi sceglie l'MMA a Vergato entra in un percorso esigente, pensato per chi vuole davvero mettersi alla prova — che l'obiettivo sia la gabbia o semplicemente la versione più completa di sé stesso.",
    ],
    href: "/mma",
    icon: "swords",
    image: nottebiancaImage("349.jpeg"),
  },
  {
    id: "muay-thai",
    name: "Muay Thai",
    description:
      "L'arte delle otto armi: pugni, calci, gomiti e ginocchia, direttamente dalla tradizione thailandese.",
    detail:
      "La Muay Thai è una delle discipline storiche di Team Salim, quella su cui Hafid ha costruito gran parte della sua carriera da atleta. Le otto armi si insegnano con rispetto per la tradizione thailandese, ma con lo sguardo sempre puntato al ring: tecnica, ritmo e condizionamento fisico al centro di ogni lezione.",
    tagline: "L'arte delle otto armi, dalla tradizione al ring.",
    story: [
      "La Muay Thai è una delle discipline su cui è cresciuta Team Salim: è lo sport su cui Hafid ha costruito gran parte della sua carriera da atleta, ed è ancora oggi il cuore pulsante della palestra.",
      "Ogni lezione unisce il rispetto per la tradizione thailandese a un lavoro tecnico serrato: pugni, calci, gomiti e ginocchia, allenati con la cura di chi questo sport lo ha vissuto sulla propria pelle.",
    ],
    href: "/muay-thai",
    icon: "flame",
    image: nottebiancaImage("451.jpeg"),
  },
  {
    id: "k-1",
    name: "K-1",
    description:
      "Kickboxing da combattimento in stile giapponese: potenza, ritmo e precisione sul ring.",
    detail:
      "Il K-1 da Team Salim unisce la potenza dello striking giapponese alla precisione che Hafid ha portato dalle sue esperienze internazionali. Le lezioni alternano lavoro tecnico e condizionamento ad alta intensità, per atleti che vogliono affrontare il ring con potenza e controllo.",
    tagline: "Potenza e precisione in stile giapponese.",
    story: [
      "Il K-1 porta a Vergato lo striking da combattimento in stile giapponese: un ring dove contano potenza, ritmo e controllo, in egual misura.",
      "Hafid ha portato in questa disciplina l'esperienza maturata nelle competizioni internazionali, e la trasmette con lo stesso approccio esigente che ha reso Team Salim un nome che vince, dentro e fuori dal ring.",
    ],
    href: "/k1",
    icon: "zap",
    image: nottebiancaImage("2.jpeg"),
  },
  {
    id: "kickboxing",
    name: "Kickboxing",
    description:
      "Il connubio tra boxe e calci: la disciplina ideale per allenarsi e migliorare condizione fisica e tecnica.",
    detail:
      "La Kickboxing è la porta d'ingresso più naturale nel mondo Team Salim: unisce boxe e calci in un allenamento completo, accessibile a chi inizia ma comunque curato nei dettagli tecnici da Hafid e dallo staff. Perfetta per chi vuole allenarsi sul serio, con o senza ambizioni agonistiche.",
    tagline: "Boxe e calci, la porta d'ingresso a Team Salim.",
    story: [
      "La Kickboxing è spesso il primo passo nel mondo Team Salim: unisce boxe e calci in un allenamento completo, accessibile a chi inizia ma comunque curato in ogni dettaglio tecnico.",
      "Che l'obiettivo sia gareggiare o semplicemente allenarsi sul serio, qui la Kickboxing si insegna con lo stesso rigore delle altre discipline — perché a Team Salim, anche chi comincia, dà il massimo.",
    ],
    href: "/kickboxing",
    icon: "hand",
    image: nottebiancaImage("16.jpeg"),
  },
];
