interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  ghost?: string;
  align?: "left" | "center";
  description?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  ghost,
  align = "center",
  description,
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      className={`relative ${isCenter ? "mx-auto max-w-2xl text-center" : "max-w-xl"}`}
    >
      {ghost && (
        <span
          aria-hidden
          className={`pointer-events-none absolute -top-8 select-none whitespace-nowrap font-heading text-[clamp(4rem,12vw,9rem)] uppercase leading-none text-transparent [-webkit-text-stroke:1px_rgba(59,130,255,0.14)] sm:-top-12 ${
            isCenter ? "left-1/2 -translate-x-1/2" : "-left-1"
          }`}
        >
          {ghost}
        </span>
      )}

      <div className="relative">
        {eyebrow && (
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.35em] text-accent-glow">
            {eyebrow}
          </span>
        )}
        <h2 className="font-heading text-5xl uppercase leading-[0.95] tracking-wide text-foreground sm:text-6xl md:text-7xl">
          {title}
        </h2>
        {description && (
          <p className="mt-4 text-foreground-muted">{description}</p>
        )}
      </div>
    </div>
  );
}
