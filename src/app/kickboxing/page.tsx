import type { Metadata } from "next";
import { disciplines } from "@/data/disciplines";
import { DisciplinePage } from "@/components/DisciplinePage";

const discipline = disciplines.find((d) => d.id === "kickboxing")!;

export const metadata: Metadata = {
  title: `${discipline.name} — Team Salim`,
  description: discipline.tagline,
};

export default function KickboxingPage() {
  return <DisciplinePage discipline={discipline} />;
}
