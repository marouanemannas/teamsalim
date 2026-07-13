import type { Metadata } from "next";
import { programs } from "@/data/programs";
import { DisciplinePage } from "@/components/DisciplinePage";

const program = programs.find((p) => p.id === "personal-training")!;

export const metadata: Metadata = {
  title: `${program.name} — Team Salim`,
  description: program.tagline,
};

export default function PersonalTrainingPage() {
  return <DisciplinePage discipline={program} />;
}
