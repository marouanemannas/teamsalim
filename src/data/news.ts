import type { ImageGridItem } from "@/components/ui/ImageGrid";
import { nottebiancaImage } from "@/lib/nottebianca";

export interface NewsExternalLink {
  label: string;
  url: string;
}

export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  date: string; // ISO string (YYYY-MM-DD)
  excerpt: string;
  coverImage: string;
  body: string[];
  gallery: ImageGridItem[];
  externalLink?: NewsExternalLink;
  href: string;
}

// Un solo articolo per ora: la struttura ad array è pensata per accogliere
// futuri articoli/notizie senza modifiche alla sezione home o al template.
export const news: NewsArticle[] = [
  {
    id: "white-fight-night-2026",
    slug: "white-fight-night-2026",
    title: "White Fight Night 2026",
    date: "2026-06-20",
    excerpt:
      "Il torneo di boxe organizzato da Team Salim durante la Notte Bianca di Vergato: una serata di incontri e pubblico delle grandi occasioni.",
    coverImage: nottebiancaImage("45.jpeg"),
    body: [
      "Il 20 giugno 2026, in occasione della Notte Bianca di Vergato, Team Salim ha portato in piazza il proprio ring: la White Fight Night, una serata di incontri di boxe che ha trasformato il centro del paese in un'arena a cielo aperto.",
      "Una lunga scaletta di match ha tenuto il pubblico in piedi fino a notte fonda, tra applausi, urla di incoraggiamento e le luci del ring. Atleti di Team Salim e di altre palestre si sono affrontati in un clima di sport vero, fatto di rispetto prima ancora che di competizione.",
      "Per Team Salim non è stata solo una serata di sport, ma un modo per restituire alla città quello che la città ha dato alla palestra in oltre quarant'anni di storia: una piazza piena, famiglie, ragazzi, curiosi e appassionati, tutti riuniti intorno allo stesso ring.",
    ],
    gallery: [
      {
        alt: "White Fight Night 2026 — foto 1",
        src: nottebiancaImage("55.jpeg"),
      },
      {
        alt: "White Fight Night 2026 — foto 2",
        src: nottebiancaImage("66.jpeg"),
      },
      {
        alt: "White Fight Night 2026 — foto 3",
        src: nottebiancaImage("74.jpeg"),
      },
      {
        alt: "White Fight Night 2026 — foto 4",
        src: nottebiancaImage("85.jpeg"),
      },
      {
        alt: "White Fight Night 2026 — foto 5",
        src: nottebiancaImage("95.jpeg"),
      },
      {
        alt: "White Fight Night 2026 — foto 6",
        src: nottebiancaImage("105.jpeg"),
      },
      {
        alt: "White Fight Night 2026 — foto 7",
        src: nottebiancaImage("116.jpeg"),
      },
      {
        alt: "White Fight Night 2026 — foto 8",
        src: nottebiancaImage("126.jpeg"),
      },
    ],
    externalLink: {
      label: "Leggi l'approfondimento su Al Jaliya24",
      url: "https://aljaliya24.tv/2026/07/white-fight-night-2026-بفيرغاتو-الإيطالية-حين-تتحول-الر/",
    },
    href: "/news/white-fight-night-2026",
  },
];
