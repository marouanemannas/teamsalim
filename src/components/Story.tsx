import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { nottebiancaImage } from "@/lib/nottebianca";

const PORTRAIT_IMAGE = nottebiancaImage("485.jpeg");

export function Story() {
  return (
    <section
      id="storia"
      className="relative py-28"
      style={{
        background:
          "linear-gradient(180deg, var(--background) 0%, var(--background-surface) 18%, var(--background-surface) 82%, var(--background) 100%)",
      }}
    >
      <Container>
        <SectionReveal>
          <SectionHeading
            eyebrow="La nostra storia"
            title="Il Maestro"
            ghost="23"
            align="left"
          />
        </SectionReveal>

        <div className="mt-16 grid gap-10 lg:grid-cols-[minmax(0,22rem)_1fr] lg:gap-16">
          <SectionReveal delay={80}>
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-tr-[3rem] rounded-bl-[3rem] border border-white/10 lg:mx-0">
              <Image
                src={PORTRAIT_IMAGE}
                alt="Team Salim"
                fill
                sizes="(min-width: 1024px) 22rem, 90vw"
                className="object-cover"
                priority
              />
            </div>
          </SectionReveal>

          <div className="flex flex-col gap-6">
            <SectionReveal delay={140}>
              <p className="text-lg text-foreground-muted sm:text-xl">
                <span className="font-semibold text-foreground">
                  Con oltre 40 anni di esperienza nelle arti marziali
                </span>
                , Hafid Salim ha dedicato la vita all&apos;insegnamento e alla
                competizione. Prima di Team Salim, ha gestito per circa dieci
                anni una palestra a Porretta Terme, formando atleti e
                appassionati della zona. Nel 2023 nasce Team Salim a Vergato,
                dove oggi porta la stessa dedizione ed esperienza a una nuova
                generazione di atleti.
              </p>
            </SectionReveal>

            <SectionReveal delay={200}>
              <p className="text-foreground-muted">
                Nato in Marocco, Hafid ha combattuto a livello professionistico
                in boxe, kickboxing, K-1 e Muay Thai, in Marocco e nel mondo,
                prima di stabilirsi in Italia. Oggi è una leggenda del paese:
                maestro, coach, saggio delle arti marziali con decenni di
                esperienza sul ring.
              </p>
            </SectionReveal>

            <SectionReveal delay={260}>
              <p className="text-foreground-muted">
                Oggi, è ancora il primo ad arrivare e l&apos;ultimo a uscire
                dalla palestra. Segue ogni
                allenamento, tiene lezioni
                private, ed è affiancato da un team di istruttori che portano
                avanti il suo metodo — ma resta sempre lui a guidare la
                squadra.
              </p>
            </SectionReveal>

            <SectionReveal delay={320}>
              <p className="text-foreground-muted">
                I suoi atleti competono e vincono a livello nazionale e
                internazionale, in ogni categoria d&apos;età. Una palestra di
                paese che si misura — e vince — con il resto del mondo.
              </p>
            </SectionReveal>

            <SectionReveal delay={380}>
              <div className="mt-4 border-t border-white/10 pt-6">
                <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.35em] text-accent-glow">
                  Il nostro motto
                </span>
                <p className="font-heading text-4xl uppercase leading-none tracking-tight text-foreground sm:text-5xl">
                  Dare il massimo.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
