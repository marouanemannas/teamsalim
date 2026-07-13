import type { Metadata } from "next";
import { programs } from "@/data/programs";
import { DisciplinePage } from "@/components/DisciplinePage";

const program = programs.find((p) => p.id === "corsi-donne")!;

export const metadata: Metadata = {
  title: `${program.name} — Team Salim`,
  description: program.tagline,
};

export default function CorsiDonnePage() {
  return <DisciplinePage discipline={program} />;
}
