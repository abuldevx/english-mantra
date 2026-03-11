import type { UserProgress } from "@/types/pattern";
import type { CategoryMeta } from "@/content/index";
import { categoryGroups } from "@/content/category-groups";

/**
 * Recommend the next pattern to learn.
 *
 * Strategy:
 * 1. Prefer categories the user has started but not finished
 * 2. Prefer beginner categories, then intermediate, then advanced
 * 3. Within a category, pick the first unlearned pattern
 */
export function getNextPatternId(
  completedPatterns: UserProgress["completedPatterns"],
  allCategoryMeta: CategoryMeta[]
): string | null {
  const completedIds = new Set(Object.keys(completedPatterns));

  // Sort groups by difficulty: beginner first
  const orderedGroups = [...categoryGroups].sort((a, b) => {
    const order = { beginner: 0, intermediate: 1, advanced: 2 };
    return order[a.difficulty] - order[b.difficulty];
  });

  // First pass: find categories with partial progress (started but not all patterns done)
  for (const group of orderedGroups) {
    for (const catId of group.categoryIds) {
      const meta = allCategoryMeta.find((c) => c.id === catId);
      if (!meta) continue;

      // Check if ANY pattern in this category is completed
      const hasStarted = completedIds.has(`${catId}.1`) ||
        [...completedIds].some((id) => id.startsWith(`${catId}.`));

      if (hasStarted) {
        // Find first incomplete pattern (try patterns 1-20)
        for (let i = 1; i <= 20; i++) {
          const pid = `${catId}.${i}`;
          if (!completedIds.has(pid)) {
            return pid;
          }
        }
      }
    }
  }

  // Second pass: find first unstarted category
  for (const group of orderedGroups) {
    for (const catId of group.categoryIds) {
      const meta = allCategoryMeta.find((c) => c.id === catId);
      if (!meta) continue;

      const hasStarted = [...completedIds].some((id) => id.startsWith(`${catId}.`));
      if (!hasStarted) {
        return `${catId}.1`;
      }
    }
  }

  return null;
}

/**
 * Count SRS-due patterns.
 */
export function getDueCount(completedPatterns: UserProgress["completedPatterns"]): number {
  const now = Date.now();
  return Object.values(completedPatterns).filter((p) => p.nextReviewDate <= now).length;
}
