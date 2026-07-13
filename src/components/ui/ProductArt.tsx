import { Shirt, Swords, type LucideIcon } from "lucide-react";
import type { Product } from "@/data/products";

const ICONS: Record<Product["icon"], LucideIcon> = {
  shirt: Shirt,
  swords: Swords,
};

const TONES = [
  "from-accent-cobalt/50 via-background-elevated to-background-surface",
  "from-accent-dark/50 via-background-elevated to-background-surface",
  "from-accent/40 via-background-elevated to-background-surface",
  "from-accent-cyan/20 via-background-elevated to-background-surface",
];

interface ProductArtProps {
  product: Product;
  index: number;
}

export function ProductArt({ product, index }: ProductArtProps) {
  const Icon = ICONS[product.icon];
  const tone = TONES[index % TONES.length];
  const rotation = index % 2 === 0 ? "-rotate-6" : "rotate-6";

  return (
    <div
      className={`relative aspect-[4/5] overflow-hidden rounded-tr-[3rem] rounded-bl-[3rem] border border-white/10 bg-gradient-to-br ${tone} transition-transform duration-500 group-hover:scale-[1.02]`}
    >
      <span
        aria-hidden
        className={`pointer-events-none absolute -left-6 top-1/2 -translate-y-1/2 select-none whitespace-nowrap font-heading text-[clamp(4rem,10vw,7rem)] uppercase leading-none text-transparent [-webkit-text-stroke:1px_rgba(245,246,247,0.08)] ${rotation}`}
      >
        {product.category}
      </span>

      <div className="absolute inset-0 flex items-center justify-center">
        <Icon
          size={88}
          strokeWidth={1}
          className="text-foreground/70 drop-shadow-[0_0_25px_rgba(30,90,255,0.35)] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
        />
      </div>
    </div>
  );
}
