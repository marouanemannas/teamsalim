// Numeri placeholder — da sostituire con i dati reali della palestra.
export interface Stat {
  id: string;
  value: number;
  suffix?: string;
  label: string;
}

export const stats: Stat[] = [
  { id: "anni", value: 10, suffix: "+", label: "Anni di attività" },
  { id: "atleti", value: 250, suffix: "+", label: "Atleti tesserati" },
  { id: "discipline", value: 4, label: "Discipline insegnate" },
];
