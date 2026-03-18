import type { Pattern, PatternExample } from "@/types/pattern";

/**
 * Get all examples from a pattern, including variation examples.
 * Useful for search indexing where variation context is not needed.
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

/** Variation context attached to an example for practice display */
export interface VariationInfo {
  variant: string;
  label_bn: string;
  formula: string;
  formula_bn: string;
}

/** Example with optional variation context */
export interface ExampleWithVariation {
  example: PatternExample;
  variation?: VariationInfo;
}

/**
 * Get all examples with variation context attached.
 * Use this for practice flows where you need to display the correct formula.
 */
export function getAllExamplesWithContext(pattern: Pattern): ExampleWithVariation[] {
  const results: ExampleWithVariation[] = pattern.examples.map((example) => ({
    example,
    variation: undefined,
  }));

  if (pattern.variations) {
    for (const v of pattern.variations) {
      for (const example of v.examples) {
        results.push({
          example,
          variation: {
            variant: v.variant,
            label_bn: v.label_bn,
            formula: v.formula,
            formula_bn: v.formula_bn,
          },
        });
      }
    }
  }

  return results;
}
