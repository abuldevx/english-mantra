import type { PatternProgress } from "@/types/pattern";

export type MasteryLevel = "new" | "familiar" | "confident" | "master";

export function getMasteryLevel(progress?: PatternProgress): MasteryLevel {
  if (!progress) return "new";
  if (progress.confidence >= 5 && progress.practiceCount >= 5) return "master";
  if (progress.confidence >= 4 && progress.practiceCount >= 3) return "confident";
  return "familiar";
}

export const masteryConfig: Record<
  MasteryLevel,
  { icon: string; label: string; label_bn: string; color: string; bgColor: string }
> = {
  new: {
    icon: "⚪",
    label: "New",
    label_bn: "নতুন",
    color: "text-muted",
    bgColor: "bg-muted-bg",
  },
  familiar: {
    icon: "🟡",
    label: "Familiar",
    label_bn: "চেনা",
    color: "text-warning",
    bgColor: "bg-warning-light",
  },
  confident: {
    icon: "🟢",
    label: "Confident",
    label_bn: "পারি",
    color: "text-success",
    bgColor: "bg-success-light",
  },
  master: {
    icon: "⭐",
    label: "Master",
    label_bn: "মাস্টার",
    color: "text-primary",
    bgColor: "bg-primary-light",
  },
};

/**
 * Count patterns at each mastery level given a list of pattern IDs and user progress.
 */
export function getMasteryCounts(
  patternIds: string[],
  completedPatterns: Record<string, PatternProgress>
): Record<MasteryLevel, number> {
  const counts: Record<MasteryLevel, number> = {
    new: 0,
    familiar: 0,
    confident: 0,
    master: 0,
  };
  for (const id of patternIds) {
    const level = getMasteryLevel(completedPatterns[id]);
    counts[level]++;
  }
  return counts;
}
