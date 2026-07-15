"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

type Status = "idle" | "loading" | "success" | "error";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage(null);

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        setStatus("error");
        setMessage(data?.error ?? "Errore durante l'iscrizione. Riprova più tardi.");
        return;
      }

      setStatus("success");
      setMessage(data?.message ?? "Iscrizione avvenuta! Grazie.");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Errore di rete. Controlla la connessione e riprova.");
    }
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
              autoComplete="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="La tua email"
              disabled={status === "loading"}
              suppressHydrationWarning
              className="w-full flex-1 rounded-full border border-white/15 bg-transparent px-5 py-3 text-sm text-foreground placeholder:text-foreground-muted focus:border-accent focus:outline-none disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-accent px-6 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:bg-accent disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "loading" ? "Invio..." : "Iscriviti"}
              <Send
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </button>
          </form>

          {status === "success" && message && (
            <p className="mt-4 text-sm text-accent-glow">{message}</p>
          )}
          {status === "error" && message && (
            <p className="mt-4 text-sm text-red-400">{message}</p>
          )}
        </SectionReveal>
      </Container>
    </section>
  );
}
