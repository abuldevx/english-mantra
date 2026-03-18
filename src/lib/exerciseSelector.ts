import type { Pattern, PracticeLevel } from "@/types/pattern";

export type ExerciseType = "bangla-first" | "slot-fill" | "word-bank";

const weights: Record<
  PracticeLevel,
  { banglaFirst: number; slotFill: number }
> = {
  1: { banglaFirst: 0, slotFill: 15 },  // 0% bangla, 15% slot, 85% wordbank
  2: { banglaFirst: 15, slotFill: 40 }, // 15% bangla, 25% slot, 60% wordbank
  3: { banglaFirst: 25, slotFill: 65 }, // 25% bangla, 40% slot, 35% wordbank
  4: { banglaFirst: 30, slotFill: 85 }, // 30% bangla, 55% slot, 15% wordbank
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
