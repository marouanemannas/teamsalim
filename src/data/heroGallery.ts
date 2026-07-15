import { nottebiancaImage } from "@/lib/nottebianca";

export interface HeroGalleryImage {
  src: string;
  alt: string;
}

// Selezione di foto reali della palestra (Notte Bianca + allenamenti),
// già usate altrove nel sito, per la mini galleria scorrevole dell'Hero.
export const heroGalleryImages: HeroGalleryImage[] = [
  { src: nottebiancaImage("1.jpeg"), alt: "Team Salim — allenamento" },
  { src: nottebiancaImage("2.jpeg"), alt: "Team Salim — K-1" },
  { src: nottebiancaImage("349.jpeg"), alt: "Team Salim — MMA" },
  { src: nottebiancaImage("16.jpeg"), alt: "Team Salim — Kickboxing" },
  { src: nottebiancaImage("26.jpeg"), alt: "Team Salim — Personal Training" },
  { src: nottebiancaImage("32.jpeg"), alt: "Team Salim — Allenamento di gruppo" },
  { src: nottebiancaImage("451.jpeg"), alt: "Team Salim — Muay Thai" },
  { src: nottebiancaImage("45.jpeg"), alt: "Team Salim — White Fight Night 2026" },
  { src: nottebiancaImage("55.jpeg"), alt: "Team Salim — White Fight Night 2026" },
  { src: nottebiancaImage("66.jpeg"), alt: "Team Salim — White Fight Night 2026" },
  { src: nottebiancaImage("74.jpeg"), alt: "Team Salim — White Fight Night 2026" },
  { src: nottebiancaImage("85.jpeg"), alt: "Team Salim — White Fight Night 2026" },
  { src: nottebiancaImage("95.jpeg"), alt: "Team Salim — White Fight Night 2026" },
  { src: nottebiancaImage("105.jpeg"), alt: "Team Salim — White Fight Night 2026" },
  { src: nottebiancaImage("116.jpeg"), alt: "Team Salim — White Fight Night 2026" },
  { src: nottebiancaImage("126.jpeg"), alt: "Team Salim — White Fight Night 2026" },
];
