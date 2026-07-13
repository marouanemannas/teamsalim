import Image from "next/image";
import { Camera } from "lucide-react";

export interface ImageGridItem {
  src?: string;
  alt: string;
}

interface ImageGridProps {
  items: ImageGridItem[];
  className?: string;
}

export function ImageGrid({ items, className = "" }: ImageGridProps) {
  return (
    <div className={`grid grid-cols-2 gap-4 sm:grid-cols-3 ${className}`}>
      {items.map((item) => (
        <div
          key={item.alt}
          className="relative aspect-[4/3] overflow-hidden rounded-tr-2xl rounded-bl-2xl border border-white/10 bg-gradient-to-br from-accent-cobalt/25 via-background-elevated to-background-surface"
        >
          {item.src ? (
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(min-width: 1024px) 30vw, 45vw"
              className="object-cover"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <Camera size={28} strokeWidth={1.25} className="text-foreground/40" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
