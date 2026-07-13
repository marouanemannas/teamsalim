import type { Metadata } from "next";
import { disciplines } from "@/data/disciplines";
import { DisciplinePage } from "@/components/DisciplinePage";

const discipline = disciplines.find((d) => d.id === "k-1")!;

export const metadata: Metadata = {
  title: `${discipline.name} — Team Salim`,
  description: discipline.tagline,
};

export default function K1Page() {
  return <DisciplinePage discipline={discipline} />;
}
