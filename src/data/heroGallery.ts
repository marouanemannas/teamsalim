import { nottebiancaImage } from "@/lib/nottebianca";

export interface HeroGalleryImage {
  src: string;
  alt: string;
}

// Selezione di foto reali della palestra (Notte Bianca + allenamenti),
// già usate altrove nel sito, per la mini galleria scorrevole dell'Hero.
export const heroGalleryImages: HeroGalleryImage[] = [
  { src: nottebiancaImage("WhatsApp Image 2026-06-25 at 12.48.40.jpeg"), alt: "Team Salim — allenamento" },
  { src: nottebiancaImage("WhatsApp Image 2026-06-25 at 12.48.41.jpeg"), alt: "Team Salim — K-1" },
  { src: nottebiancaImage("WhatsApp Image 2026-06-25 at 13.14.44.jpeg"), alt: "Team Salim — MMA" },
  { src: nottebiancaImage("WhatsApp Image 2026-06-25 at 12.48.44 (2).jpeg"), alt: "Team Salim — Kickboxing" },
  { src: nottebiancaImage("WhatsApp Image 2026-06-25 at 12.48.47 (1).jpeg"), alt: "Team Salim — Personal Training" },
  { src: nottebiancaImage("WhatsApp Image 2026-06-25 at 12.48.49.jpeg"), alt: "Team Salim — Allenamento di gruppo" },
  { src: nottebiancaImage("WhatsApp Image 2026-06-25 at 22.08.27 (1).jpeg"), alt: "Team Salim — Muay Thai" },
  { src: nottebiancaImage("WhatsApp Image 2026-06-25 at 12.50.45.jpeg"), alt: "Team Salim — White Fight Night 2026" },
  { src: nottebiancaImage("WhatsApp Image 2026-06-25 at 12.51.07.jpeg"), alt: "Team Salim — White Fight Night 2026" },
  { src: nottebiancaImage("WhatsApp Image 2026-06-25 at 12.51.15 (1).jpeg"), alt: "Team Salim — White Fight Night 2026" },
  { src: nottebiancaImage("WhatsApp Image 2026-06-25 at 12.51.21.jpeg"), alt: "Team Salim — White Fight Night 2026" },
  { src: nottebiancaImage("WhatsApp Image 2026-06-25 at 12.51.28.jpeg"), alt: "Team Salim — White Fight Night 2026" },
  { src: nottebiancaImage("WhatsApp Image 2026-06-25 at 12.51.35.jpeg"), alt: "Team Salim — White Fight Night 2026" },
  { src: nottebiancaImage("WhatsApp Image 2026-06-25 at 12.53.51.jpeg"), alt: "Team Salim — White Fight Night 2026" },
  { src: nottebiancaImage("WhatsApp Image 2026-06-25 at 12.54.11 (1).jpeg"), alt: "Team Salim — White Fight Night 2026" },
  { src: nottebiancaImage("WhatsApp Image 2026-06-25 at 12.54.16 (1).jpeg"), alt: "Team Salim — White Fight Night 2026" },
];
