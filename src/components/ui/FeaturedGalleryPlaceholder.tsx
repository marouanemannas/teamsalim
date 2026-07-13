import Image from "next/image";
import { Camera } from "lucide-react";

interface FeaturedGalleryPlaceholderProps {
  label: string;
  className?: string;
  /** Classe Tailwind per il rapporto d'aspetto del riquadro. Default: 4:3. */
  aspect?: string;
  /** Se presente, mostra questa foto reale al posto del placeholder. */
  src?: string;
  /** Attributo sizes per next/image, da adattare al contesto d'uso. */
  sizes?: string;
}

export function FeaturedGalleryPlaceholder({
  label,
  className = "",
  aspect = "aspect-[4/3]",
  src,
  sizes = "(min-width: 1024px) 45vw, 100vw",
}: FeaturedGalleryPlaceholderProps) {
  return (
    <div
      className={`relative ${aspect} overflow-hidden rounded-tr-[3rem] rounded-bl-[3rem] border border-white/10 ${
        src ? "" : "bg-gradient-to-br from-accent-cobalt/30 via-background-elevated to-background-surface"
      } ${className}`}
    >
      {src ? (
        <Image
          src={src}
          alt={`Team Salim — ${label}`}
          fill
          sizes={sizes}
          className="object-cover"
        />
      ) : (
        <>
          <span
            aria-hidden
            className="pointer-events-none absolute -left-6 top-1/2 -translate-y-1/2 -rotate-6 select-none whitespace-nowrap font-heading text-[clamp(3rem,9vw,6rem)] uppercase leading-none text-transparent [-webkit-text-stroke:1px_rgba(245,246,247,0.08)]"
          >
            {label}
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <Camera
              size={64}
              strokeWidth={1}
              className="text-foreground/50 drop-shadow-[0_0_25px_rgba(30,90,255,0.3)]"
            />
          </div>
          <p className="absolute inset-x-0 bottom-4 text-center text-[0.65rem] font-medium uppercase tracking-[0.2em] text-foreground-muted/70 sm:text-xs">
            Galleria — presto le foto di atleti ed eventi {label}
          </p>
        </>
      )}
    </div>
  );
}
