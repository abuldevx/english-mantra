import type { Pattern, PatternExample } from "@/types/pattern";

/**
 * Get all examples from a pattern, including variation examples.
 * Useful for practice and search indexing.
 */
export function getAllExamples(pattern: Pattern): PatternExample[] {
  const all = [...pattern.examples];
  if (pattern.variations) {
    for (const variation of pattern.variations) {
      all.push(...variation.examples);
    }
  }
  return all;
}
