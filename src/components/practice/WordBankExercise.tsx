"use client";

import { useState, useMemo } from "react";
import type { Pattern, PatternExample, PracticeLevel } from "@/types/pattern";
import SlotFillExercise from "./SlotFillExercise";

interface WordBankExerciseProps {
  pattern: Pattern;
  example: PatternExample;
  practiceLevel: PracticeLevel;
  onAnswer: (correct: boolean) => void;
  effectiveFormula?: string;
}

function shuffle<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function getSlotInfo(formula: string) {
  const match = /\[([A-Z_]+)\]/.exec(formula);
  return match ? match[1] : null;
}

function generateDistractors(
  correctAnswer: string,
  slotName: string,
  pattern: Pattern,
  count: number
): string[] {
  const distractors = new Set<string>();
  const correct = correctAnswer.toLowerCase().trim();

  // From other examples in same pattern
  for (const ex of pattern.examples) {
    const val = ex.slotValues[slotName];
    if (val && val.toLowerCase().trim() !== correct) {
      distractors.add(val);
    }
    if (distractors.size >= count) break;
  }

  // From slot examples
  if (distractors.size < count) {
    const slot = pattern.slots.find((s) => s.name === slotName);
    if (slot) {
      for (const ex of slot.examples) {
        if (ex.toLowerCase().trim() !== correct) {
          distractors.add(ex);
        }
        if (distractors.size >= count) break;
      }
    }
  }

  return Array.from(distractors).slice(0, count);
}

export default function WordBankExercise({
  pattern,
  example,
  practiceLevel,
  onAnswer,
  effectiveFormula,
}: WordBankExerciseProps) {
  const [selected, setSelected] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  // Level 3: first letter hint with free typing
  const [typedAnswer, setTypedAnswer] = useState("");

  const formula = effectiveFormula ?? pattern.formula;
  const slotName = useMemo(() => getSlotInfo(formula), [formula]);
  const correctAnswer = slotName ? example.slotValues[slotName] || "" : "";

  // Level 4 → delegate to SlotFill
  if (practiceLevel === 4) {
    return <SlotFillExercise pattern={pattern} example={example} onAnswer={onAnswer} effectiveFormula={effectiveFormula} />;
  }

  const wordBank = useMemo(() => {
    if (!slotName || practiceLevel === 3) return [];
    const distractorCount = practiceLevel === 1 ? 3 : 5; // 4 or 6 total
    const distractors = generateDistractors(correctAnswer, slotName, pattern, distractorCount);
    return shuffle([correctAnswer, ...distractors]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slotName, correctAnswer, practiceLevel]);

  const formulaDisplay = useMemo(() => {
    return formula.replace(/\[([A-Z_]+)\]/, "______");
  }, [formula]);

  const handleSelect = (word: string) => {
    const correct = word.toLowerCase().trim() === correctAnswer.toLowerCase().trim();
    setSelected(word);
    setIsCorrect(correct);
    setSubmitted(true);
    onAnswer(correct);
  };

  const handleLevel3Submit = () => {
    const correct = typedAnswer.toLowerCase().trim() === correctAnswer.toLowerCase().trim();
    setSelected(typedAnswer);
    setIsCorrect(correct);
    setSubmitted(true);
    onAnswer(correct);
  };

  return (
    <div className="space-y-4">
      {/* Bangla hint */}
      <div className="p-4 rounded-lg bg-accent-light">
        <div className="text-xs text-accent mb-1">Complete the pattern:</div>
        <p className="font-bangla text-lg font-medium">{example.bn}</p>
      </div>

      {/* Formula with blank */}
      <div className="p-4 rounded-lg bg-muted-bg text-center">
        <p className="text-base font-medium">{formulaDisplay}</p>
      </div>

      {/* Level 3: First letter hint */}
      {practiceLevel === 3 && !submitted && (
        <div className="space-y-3">
          <div className="text-sm text-muted text-center">
            Hint: starts with &quot;<span className="font-bold text-primary">{correctAnswer.charAt(0)}</span>&quot;
          </div>
          <input
            type="text"
            value={typedAnswer}
            onChange={(e) => setTypedAnswer(e.target.value)}
            onKeyDown={(e) =>
              e.key === "Enter" && typedAnswer.trim() && handleLevel3Submit()
            }
            placeholder="Type your answer..."
            className="w-full px-4 py-3 rounded-lg border border-card-border bg-background text-base focus:outline-none focus:ring-2 focus:ring-primary/30"
            autoFocus
          />
          <button
            onClick={handleLevel3Submit}
            disabled={!typedAnswer.trim()}
            className="w-full py-3 rounded-lg bg-primary text-white font-medium disabled:opacity-50"
          >
            Check Answer
          </button>
        </div>
      )}

      {/* Level 1-2: Word bank buttons */}
      {practiceLevel < 3 && !submitted && (
        <div className={`grid gap-2 ${practiceLevel === 1 ? "grid-cols-2" : "grid-cols-3"}`}>
          {wordBank.map((word, i) => (
            <button
              key={i}
              onClick={() => handleSelect(word)}
              className="py-3 px-3 rounded-lg border-2 border-card-border bg-card hover:border-primary hover:bg-primary/5 transition-all text-sm font-medium text-center"
            >
              {word}
            </button>
          ))}
        </div>
      )}

      {/* Feedback */}
      {submitted && (
        <div className="space-y-2">
          <div
            className={`p-3 rounded-lg ${
              isCorrect
                ? "bg-success-light border border-success/30"
                : "bg-danger-light border border-danger/30"
            }`}
          >
            <div className="text-xs font-medium mb-1">
              {isCorrect ? "Correct!" : "Not quite"}
            </div>
            {!isCorrect && (
              <p className="text-sm">
                You chose: <span className="font-medium">{selected}</span>
                <br />
                Expected: <span className="font-medium">{correctAnswer}</span>
              </p>
            )}
          </div>
          <div className="p-3 rounded-lg bg-success-light border border-success/30">
            <div className="text-xs font-medium text-success mb-1">Full sentence:</div>
            <p className="text-sm font-medium">{example.en}</p>
          </div>
        </div>
      )}
    </div>
  );
}
