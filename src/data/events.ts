// Dati mock: in futuro questo modulo esporrà una fetch verso Supabase
// mantenendo la stessa interfaccia EventItem, senza modificare i componenti.

export interface EventItem {
  id: string;
  date: string; // ISO string (YYYY-MM-DD)
  title: string;
  description: string;
}

export const events: EventItem[] = [
  {
    id: "open-day",
    date: "2026-09-06",
    title: "Open Day Team Salim",
    description:
      "Giornata di prove gratuite per tutte le discipline: MMA, Muay Thai, K-1 e Kickboxing. Porta un amico!",
  },
  {
    id: "seminario-muay-thai",
    date: "2026-09-20",
    title: "Seminario di Muay Thai",
    description:
      "Seminario tecnico con istruttore ospite dedicato al clinch e alle combinazioni di gomiti e ginocchia.",
  },
  {
    id: "gala-amatoriale",
    date: "2026-10-11",
    title: "Gala Amatoriale",
    description:
      "Serata di incontri amatoriali tra gli atleti della palestra, aperta a soci e famiglie.",
  },
];
