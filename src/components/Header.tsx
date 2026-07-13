"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";

const NAV_LINKS = [
  { href: "#chi-siamo", label: "Chi siamo" },
  { href: "#pacchetti", label: "Pacchetti" },
  { href: "#eventi", label: "Eventi" },
  { href: "#abbigliamento", label: "Abbigliamento" },
  { href: "#contatti", label: "Contatti" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-background/80 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <a href="#home" className="group flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Team Salim"
            width={36}
            height={36}
            priority
            className="transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_18px_rgba(59,130,255,0.5)]"
          />
          <span className="font-heading text-lg tracking-wide text-foreground">
            TEAM SALIM
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-sm font-medium text-foreground-muted transition-colors hover:text-foreground"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent-glow transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="text-foreground md:hidden"
          aria-label={isOpen ? "Chiudi menu" : "Apri menu"}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </Container>

      {isOpen && (
        <nav className="flex flex-col gap-1 border-t border-white/5 bg-background px-4 pb-4 md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="rounded-md px-3 py-3 text-sm font-medium text-foreground-muted transition-colors hover:bg-background-surface hover:text-accent-glow"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
