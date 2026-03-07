"use client";

import { useState, useMemo } from "react";
import type { Pattern, PatternExample } from "@/types/pattern";

interface SlotFillExerciseProps {
  pattern: Pattern;
  example: PatternExample;
  onAnswer: (correct: boolean) => void;
}

interface FormulaPart {
  text: string;
  slotName: string | null;
}

function parseFormula(formula: string): FormulaPart[] {
  const parts: FormulaPart[] = [];
  const regex = /\[([A-Z_]+)\]/g;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(formula)) !== null) {
    if (match.index > lastIndex) {
      parts.push({ text: formula.substring(lastIndex, match.index), slotName: null });
    }
    parts.push({ text: "", slotName: match[1] });
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < formula.length) {
    parts.push({ text: formula.substring(lastIndex), slotName: null });
  }

  return parts;
}

function validateAnswer(
  userAnswer: string,
  slotName: string,
  example: PatternExample,
  allExamples: PatternExample[]
): boolean {
  const normalized = userAnswer.toLowerCase().trim();
  if (!normalized) return false;

  // Check current example
  const expected = example.slotValues[slotName];
  if (expected && normalized === expected.toLowerCase().trim()) return true;

  // Accept any valid value from other examples
  for (const ex of allExamples) {
    const val = ex.slotValues[slotName];
    if (val && normalized === val.toLowerCase().trim()) return true;
  }

  return false;
}

export default function SlotFillExercise({
  pattern,
  example,
  onAnswer,
}: SlotFillExerciseProps) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [results, setResults] = useState<Record<string, boolean>>({});

  const parts = useMemo(() => parseFormula(pattern.formula), [pattern.formula]);
  const slotNames = useMemo(
    () => parts.filter((p) => p.slotName).map((p) => p.slotName!),
    [parts]
  );

  const handleSubmit = () => {
    const newResults: Record<string, boolean> = {};
    let allCorrect = true;

    for (const slotName of slotNames) {
      const userAnswer = answers[slotName] || "";
      const correct = validateAnswer(userAnswer, slotName, example, pattern.examples);
      newResults[slotName] = correct;
      if (!correct) allCorrect = false;
    }

    setResults(newResults);
    setSubmitted(true);
    onAnswer(allCorrect);
  };

  const canSubmit = slotNames.every((s) => (answers[s] || "").trim().length > 0);

  return (
    <div className="space-y-4">
      {/* Bangla hint */}
      <div className="p-4 rounded-lg bg-accent-light">
        <div className="text-xs text-accent mb-1">Fill in the slot:</div>
        <p className="font-bangla text-lg font-medium">{example.bn}</p>
      </div>

      {/* Formula with inputs */}
      <div className="p-4 rounded-lg bg-muted-bg">
        <div className="flex flex-wrap items-center gap-1 text-base font-medium">
          {parts.map((part, i) =>
            part.slotName ? (
              <input
                key={i}
                type="text"
                value={answers[part.slotName] || ""}
                onChange={(e) =>
                  setAnswers((prev) => ({ ...prev, [part.slotName!]: e.target.value }))
                }
                onKeyDown={(e) => e.key === "Enter" && canSubmit && !submitted && handleSubmit()}
                disabled={submitted}
                placeholder={part.slotName}
                className={`inline-block mx-1 px-3 py-1.5 border-b-2 bg-background rounded-t text-center min-w-[100px] text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 ${
                  submitted
                    ? results[part.slotName]
                      ? "border-success bg-success-light"
                      : "border-danger bg-danger-light"
                    : "border-primary"
                }`}
                autoFocus={i === parts.findIndex((p) => p.slotName !== null)}
              />
            ) : (
              <span key={i}>{part.text}</span>
            )
          )}
        </div>
      </div>

      {/* Submit */}
      {!submitted && (
        <button
          onClick={handleSubmit}
          disabled={!canSubmit}
          className="w-full py-3 rounded-lg bg-primary text-white font-medium disabled:opacity-50 transition-colors hover:bg-primary/90"
        >
          Check Answer
        </button>
      )}

      {/* Feedback */}
      {submitted && (
        <div className="space-y-2">
          {slotNames.map((slotName) => (
            <div
              key={slotName}
              className={`p-3 rounded-lg ${
                results[slotName]
                  ? "bg-success-light border border-success/30"
                  : "bg-danger-light border border-danger/30"
              }`}
            >
              <div className="text-xs font-medium mb-1">
                [{slotName}]: {results[slotName] ? "Correct!" : "Not quite"}
              </div>
              {!results[slotName] && (
                <p className="text-sm">
                  Expected: <span className="font-medium">{example.slotValues[slotName]}</span>
                  {answers[slotName] && (
                    <span className="text-muted"> (you wrote: {answers[slotName]})</span>
                  )}
                </p>
              )}
            </div>
          ))}

          <div className="p-3 rounded-lg bg-success-light border border-success/30">
            <div className="text-xs font-medium text-success mb-1">Full sentence:</div>
            <p className="text-sm font-medium">{example.en}</p>
          </div>
        </div>
      )}
    </div>
  );
}
