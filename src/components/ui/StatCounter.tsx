"use client";

import { useCountUp } from "@/lib/hooks/useCountUp";

interface StatCounterProps {
  value: number;
  suffix?: string;
  label: string;
}

export function StatCounter({ value, suffix = "", label }: StatCounterProps) {
  const { ref, value: current } = useCountUp(value);

  return (
    <div ref={ref} className="flex flex-col items-center gap-1 px-2">
      <span className="font-heading text-3xl text-foreground sm:text-4xl">
        {current}
        {suffix}
      </span>
      <span className="text-center text-[0.65rem] font-medium uppercase tracking-[0.2em] text-foreground-muted sm:text-xs">
        {label}
      </span>
    </div>
  );
}
