import type { Difficulty } from "@/types/pattern";

const labels: Record<Difficulty, string> = {
  beginner: "Beginner",
  intermediate: "Intermediate",
  advanced: "Advanced",
};

const labels_bn: Record<Difficulty, string> = {
  beginner: "প্রাথমিক",
  intermediate: "মাধ্যমিক",
  advanced: "উন্নত",
};

export function DifficultyBadge({
  difficulty,
  showBangla,
}: {
  difficulty: Difficulty;
  showBangla?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium badge-${difficulty}`}
    >
      {showBangla ? labels_bn[difficulty] : labels[difficulty]}
    </span>
  );
}
