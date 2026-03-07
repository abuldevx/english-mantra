import type { Formality } from "@/types/pattern";

const config: Record<Formality, { label: string; color: string }> = {
  casual: { label: "Casual", color: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" },
  polite: { label: "Polite", color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400" },
  formal: { label: "Formal", color: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400" },
  very_formal: { label: "Very Formal", color: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400" },
};

export function FormalityBadge({ formality }: { formality: Formality }) {
  const { label, color } = config[formality];
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${color}`}>
      {label}
    </span>
  );
}
