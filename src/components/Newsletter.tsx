"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

// TODO: integrare con un servizio newsletter reale (es. Supabase, Resend, Mailchimp).
export function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    setEmail("");
  }

  return (
    <section
      className="relative py-28"
      style={{
        background:
          "linear-gradient(180deg, var(--background) 0%, var(--background-surface) 35%, var(--background) 100%)",
      }}
    >
      <Container>
        <SectionReveal className="mx-auto max-w-xl text-center">
          <SectionHeading
            eyebrow="Resta aggiornato"
            title="Newsletter"
            ghost="NEWS"
            description="Iscriviti per ricevere aggiornamenti su eventi, promozioni e novità di Team Salim."
          />

          <form
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="La tua email"
              className="w-full flex-1 rounded-full border border-white/15 bg-transparent px-5 py-3 text-sm text-foreground placeholder:text-foreground-muted focus:border-accent focus:outline-none"
            />
            <button
              type="submit"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-accent px-6 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:bg-accent"
            >
              Iscriviti
              <Send
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </button>
          </form>

          {submitted && (
            <p className="mt-4 text-sm text-accent-glow">
              Grazie per l&apos;iscrizione!
            </p>
          )}
        </SectionReveal>
      </Container>
    </section>
  );
}
