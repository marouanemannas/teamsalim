import { nottebiancaImage } from "@/lib/nottebianca";

export interface Program {
  id: string;
  name: string;
  tagline: string;
  story: string[];
  href: string;
  /** Se false, la pagina dedicata non mostra la galleria placeholder. */
  gallery: boolean;
  image?: string;
}

export const programs: Program[] = [
  {
    id: "corsi-donne",
    name: "Corsi Donne",
    tagline: "Un ambiente tutto per te, senza pressioni.",
    story: [
      "I Corsi Donne di Team Salim nascono per chi vuole allenarsi in un contesto pensato su misura: niente paragoni, niente competizione forzata, solo la libertà di imparare al proprio ritmo — che l'obiettivo sia la forma fisica, la sicurezza personale o semplicemente ritagliarsi un momento per sé.",
      "Le lezioni sono guidate con la stessa cura tecnica che contraddistingue ogni disciplina della palestra, ma in un gruppo dove ci si conosce, ci si sostiene e si cresce insieme — dentro e fuori dal tatami.",
    ],
    href: "/corsi-donne",
    gallery: false,
  },
  {
    id: "corsi-bambini",
    name: "Corsi Bambini",
    tagline: "Disciplina, rispetto e divertimento fin da piccoli.",
    story: [
      "I Corsi Bambini sono il primo passo nel mondo Team Salim: un modo per imparare le basi delle arti marziali giocando, sviluppando coordinazione, concentrazione e rispetto per i compagni e per gli istruttori.",
      "Non si tratta di formare piccoli campioni a tutti i costi, ma di dare ai più piccoli gli strumenti — fisici e caratteriali — che restano per tutta la vita: disciplina, autocontrollo, e la voglia di dare il massimo in quello che si fa.",
    ],
    href: "/corsi-bambini",
    gallery: false,
  },
  {
    id: "personal-training",
    name: "Personal Training",
    tagline: "Allenamento individuale con Hafid o con lo staff.",
    story: [
      "Il Personal Training è il modo più diretto per allenarsi da Team Salim: un percorso costruito interamente sui tuoi obiettivi, seguito passo passo da Hafid o da uno degli istruttori dello staff.",
      "Che tu debba prepararti per una competizione, recuperare dopo un infortunio o semplicemente accelerare i tuoi progressi, qui l'attenzione è tutta per te — con lo stesso rigore che la palestra applica ai suoi atleti agonisti.",
    ],
    href: "/personal-training",
    gallery: true,
    image: nottebiancaImage("WhatsApp Image 2026-06-25 at 12.48.47 (1).jpeg"),
  },
  {
    id: "allenamenti-gruppo",
    name: "Allenamenti di gruppo",
    tagline: "La spinta della squadra, per superare i propri limiti.",
    story: [
      "Gli Allenamenti di gruppo sono il cuore pulsante di Team Salim: la sala piena, il ritmo che si costruisce insieme agli altri atleti, un'energia che da soli è difficile ritrovare.",
      "Ogni sessione è pensata per spingere ciascuno oltre i propri limiti, con il supporto di chi si allena al tuo fianco e la guida di uno staff che non lascia mai indietro nessuno.",
    ],
    href: "/allenamenti-di-gruppo",
    gallery: true,
    image: nottebiancaImage("WhatsApp Image 2026-06-25 at 12.48.49.jpeg"),
  },
];
