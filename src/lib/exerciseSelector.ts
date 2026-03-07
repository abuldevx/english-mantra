import type { Pattern, PracticeLevel } from "@/types/pattern";

export type ExerciseType = "bangla-first" | "slot-fill" | "word-bank";

const weights: Record<
  PracticeLevel,
  { banglaFirst: number; slotFill: number }
> = {
  1: { banglaFirst: 50, slotFill: 70 }, // 50% bangla, 20% slot, 30% wordbank
  2: { banglaFirst: 30, slotFill: 60 }, // 30% bangla, 30% slot, 40% wordbank
  3: { banglaFirst: 30, slotFill: 80 }, // 30% bangla, 50% slot, 20% wordbank
  4: { banglaFirst: 20, slotFill: 90 }, // 20% bangla, 70% slot, 10% wordbank
};

export function selectExerciseType(
  pattern: Pattern,
  practiceLevel: PracticeLevel
): ExerciseType {
  // No slots → always BanglaFirst
  const hasSlots =
    pattern.slots.length > 0 &&
    /\[([A-Z_]+)\]/.test(pattern.formula);

  if (!hasSlots) return "bangla-first";

  const w = weights[practiceLevel];
  const rand = Math.random() * 100;

  if (rand < w.banglaFirst) return "bangla-first";
  if (rand < w.slotFill) return "slot-fill";
  return "word-bank";
}
