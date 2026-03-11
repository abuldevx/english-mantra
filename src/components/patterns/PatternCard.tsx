"use client";

import Link from "next/link";
import type { Pattern } from "@/types/pattern";
import { PatternFormula } from "./PatternFormula";
import { DifficultyBadge } from "./DifficultyBadge";
import { FormalityBadge } from "./FormalityBadge";
import { useProgress } from "@/contexts/ProgressContext";
import { getMasteryLevel, masteryConfig } from "@/lib/mastery";

interface PatternCardProps {
  pattern: Pattern;
  categorySlug: string;
  showExampleCount?: boolean;
}

export function PatternCard({ pattern, categorySlug, showExampleCount = true }: PatternCardProps) {
  const { progress } = useProgress();
  const mastery = getMasteryLevel(progress.completedPatterns[pattern.id]);
  const masteryInfo = masteryConfig[mastery];
  const hasTeachingContent =
    pattern.conversionSteps ||
    (pattern.commonMistakes && pattern.commonMistakes.length > 0) ||
    (pattern.usageSituations && pattern.usageSituations.length > 0) ||
    (pattern.sentenceBuilding && pattern.sentenceBuilding.length > 0);

  const variationCount = pattern.variations?.length ?? 0;

  return (
    <Link
      href={`/pattern/${pattern.id}`}
      className="block p-4 rounded-xl border border-card-border bg-card hover:border-primary/30 hover:shadow-sm transition-all"
    >
      <div className="flex items-start justify-between gap-2 mb-2">
        <div className="flex items-center gap-1.5">
          <span className={`text-xs ${masteryInfo.color}`} title={`${masteryInfo.label_bn} (${masteryInfo.label})`}>
            {masteryInfo.icon}
          </span>
          <span className="text-xs text-muted font-mono">{pattern.id}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <DifficultyBadge difficulty={pattern.difficulty} />
          <FormalityBadge formality={pattern.formality} />
        </div>
      </div>

      {/* Bangla concept as primary label when available */}
      {pattern.concept_bn && (
        <p className="font-bangla text-base font-bold mb-1">{pattern.concept_bn}</p>
      )}

      <PatternFormula
        formula={pattern.formula}
        formula_bn={pattern.formula_bn}
        size="sm"
      />

      <div className="mt-2 flex items-center gap-2 text-xs text-muted">
        {showExampleCount && (
          <span>{pattern.examples.length} examples</span>
        )}
        {variationCount > 0 && (
          <span>· {variationCount} variations</span>
        )}
        {hasTeachingContent && (
          <span className="ml-auto flex items-center gap-1" title="Full lesson available">
            {pattern.usageSituations && pattern.usageSituations.length > 0 && <span>📌</span>}
            {pattern.commonMistakes && pattern.commonMistakes.length > 0 && <span>⚠️</span>}
            {pattern.simpleRules && pattern.simpleRules.length > 0 && <span>📏</span>}
            {pattern.sentenceBuilding && pattern.sentenceBuilding.length > 0 && <span>🧩</span>}
          </span>
        )}
      </div>
    </Link>
  );
}
