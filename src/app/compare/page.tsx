"use client";

import { useState, useEffect } from "react";
import type { Pattern, PatternCategory } from "@/types/pattern";
import { PatternFormula } from "@/components/patterns/PatternFormula";
import { DifficultyBadge } from "@/components/patterns/DifficultyBadge";
import { FormalityBadge } from "@/components/patterns/FormalityBadge";
import { useSettings } from "@/contexts/SettingsContext";
import { getCategoryImportSlug } from "@/content/index";

// Pre-defined comparison sets
const comparisonSets = [
  {
    title: "Want vs Need vs Would Like",
    title_bn: "চাই বনাম দরকার বনাম চাইতাম",
    patterns: [
      { catId: "A1", patternIdx: 0 }, // I want [THING]
      { catId: "A1", patternIdx: 1 }, // I need [THING]
    ],
  },
  {
    title: "Can vs Could vs Be Able To",
    title_bn: "পারি বনাম পারতাম বনাম সক্ষম",
    patterns: [
      { catId: "D1", patternIdx: 0 }, // I can [ACTION]
      { catId: "D1", patternIdx: 2 }, // I'm able to [ACTION]
    ],
  },
  {
    title: "Will vs Going To",
    title_bn: "Will বনাম Going To",
    patterns: [
      { catId: "C4", patternIdx: 0 }, // I will [ACTION]
      { catId: "C4", patternIdx: 1 }, // I'm going to [ACTION]
    ],
  },
];

export default function ComparePage() {
  const [loadedPatterns, setLoadedPatterns] = useState<Record<string, PatternCategory>>({});
  const [loading, setLoading] = useState(true);
  const { settings } = useSettings();

  useEffect(() => {
    async function loadCategories() {
      const catIds = new Set(comparisonSets.flatMap((s) => s.patterns.map((p) => p.catId)));
      const loaded: Record<string, PatternCategory> = {};

      for (const catId of catIds) {
        try {
          const mod = await import(`@/content/categories/${getCategoryImportSlug(catId)}`);
          loaded[catId] = mod[`category${catId}`];
        } catch {
          // not available yet
        }
      }
      setLoadedPatterns(loaded);
      setLoading(false);
    }
    loadCategories();
  }, []);

  if (loading) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-6">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-muted-bg rounded w-1/2" />
          <div className="h-48 bg-muted-bg rounded-xl" />
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-6">
      <h1 className="text-2xl font-bold mb-1">Compare Patterns</h1>
      <p className="font-bangla text-muted text-sm mb-1">প্যাটার্ন তুলনা করুন</p>
      <p className="text-muted text-sm mb-6">
        See the differences between similar patterns side by side
      </p>

      <div className="space-y-8">
        {comparisonSets.map((set, setIdx) => {
          const resolvedPatterns = set.patterns
            .map((p) => {
              const cat = loadedPatterns[p.catId];
              if (!cat || !cat.patterns[p.patternIdx]) return null;
              return { pattern: cat.patterns[p.patternIdx], category: cat };
            })
            .filter(Boolean) as { pattern: Pattern; category: PatternCategory }[];

          if (resolvedPatterns.length < 2) return null;

          return (
            <div key={setIdx} className="rounded-xl border border-card-border overflow-hidden">
              <div className="p-4 bg-card border-b border-card-border">
                <h2 className="font-bold">{set.title}</h2>
                {settings.showBangla && (
                  <p className="font-bangla text-sm text-muted">{set.title_bn}</p>
                )}
              </div>

              <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-card-border">
                {resolvedPatterns.map(({ pattern, category }) => (
                  <div key={pattern.id} className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-mono text-muted">{pattern.id}</span>
                      <DifficultyBadge difficulty={pattern.difficulty} />
                      <FormalityBadge formality={pattern.formality} />
                    </div>
                    <PatternFormula
                      formula={pattern.formula}
                      formula_bn={pattern.formula_bn}
                      size="sm"
                    />
                    {pattern.usageNote && (
                      <p className="text-xs text-muted mt-2 italic">{pattern.usageNote}</p>
                    )}
                    <div className="mt-3 space-y-1.5">
                      {pattern.examples.slice(0, 3).map((ex, i) => (
                        <div key={i} className="text-xs">
                          <p>{ex.en}</p>
                          {settings.showBangla && (
                            <p className="font-bangla text-muted">{ex.bn}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
