// Numeri placeholder — da sostituire con i dati reali della palestra.
export interface Stat {
  id: string;
  value: number;
  suffix?: string;
  label: string;
}

export const stats: Stat[] = [
  { id: "anni", value: 40, suffix: "+", label: "Anni di storia" },
  { id: "atleti", value: 350, suffix: "+", label: "Atleti tesserati" },
  { id: "discipline", value: 4, suffix: "+", label: "Discipline insegnate" },
];
