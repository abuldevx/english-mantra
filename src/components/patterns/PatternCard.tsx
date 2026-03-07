"use client";

import Link from "next/link";
import type { Pattern } from "@/types/pattern";
import { PatternFormula } from "./PatternFormula";
import { DifficultyBadge } from "./DifficultyBadge";
import { FormalityBadge } from "./FormalityBadge";

interface PatternCardProps {
  pattern: Pattern;
  categorySlug: string;
  showExampleCount?: boolean;
}

export function PatternCard({ pattern, categorySlug, showExampleCount = true }: PatternCardProps) {
  return (
    <Link
      href={`/pattern/${pattern.id}`}
      className="block p-4 rounded-xl border border-card-border bg-card hover:border-primary/30 hover:shadow-sm transition-all"
    >
      <div className="flex items-start justify-between gap-2 mb-2">
        <span className="text-xs text-muted font-mono">{pattern.id}</span>
        <div className="flex items-center gap-1.5">
          <DifficultyBadge difficulty={pattern.difficulty} />
          <FormalityBadge formality={pattern.formality} />
        </div>
      </div>

      <PatternFormula
        formula={pattern.formula}
        formula_bn={pattern.formula_bn}
        size="sm"
      />

      {showExampleCount && (
        <div className="mt-2 text-xs text-muted">
          {pattern.examples.length} examples
        </div>
      )}
    </Link>
  );
}
