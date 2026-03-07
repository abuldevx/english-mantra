"use client";

import { useState } from "react";
import type { Pattern, PatternCategory, PatternExample, PracticeLevel } from "@/types/pattern";
import type { ExerciseType } from "@/lib/exerciseSelector";
import SlotFillExercise from "./SlotFillExercise";
import WordBankExercise from "./WordBankExercise";

interface ExerciseContainerProps {
  pattern: Pattern;
  category: PatternCategory;
  example: PatternExample;
  exerciseType: ExerciseType;
  practiceLevel: PracticeLevel;
  onComplete: (correct: boolean) => void;
}

function BanglaFirstExercise({
  example,
  onComplete,
}: {
  example: PatternExample;
  onComplete: (correct: boolean) => void;
}) {
  const [answer, setAnswer] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);

  const isCorrect =
    answer.trim().toLowerCase() ===
    example.en.toLowerCase().replace(/[.!?]$/, "");

  const handleCheck = () => {
    setShowAnswer(true);
  };

  return (
    <div className="space-y-4">
      <div className="p-4 rounded-lg bg-accent-light">
        <div className="text-xs text-accent mb-1">Translate to English:</div>
        <p className="font-bangla text-lg font-medium">{example.bn}</p>
      </div>

      {!showAnswer ? (
        <div className="space-y-3">
          <input
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && answer.trim() && handleCheck()}
            placeholder="Type the English sentence..."
            className="w-full px-4 py-3 rounded-lg border border-card-border bg-background text-base focus:outline-none focus:ring-2 focus:ring-primary/30"
            autoFocus
          />
          <button
            onClick={handleCheck}
            disabled={!answer.trim()}
            className="w-full py-3 rounded-lg bg-primary text-white font-medium disabled:opacity-50 transition-colors hover:bg-primary/90"
          >
            Check Answer
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          <div
            className={`p-3 rounded-lg ${
              isCorrect
                ? "bg-success-light border border-success/30"
                : "bg-danger-light border border-danger/30"
            }`}
          >
            <div className="text-xs font-medium mb-1">
              {isCorrect ? "Correct!" : "Your answer:"}
            </div>
            <p className="text-sm">{answer || "(empty)"}</p>
          </div>

          <div className="p-3 rounded-lg bg-success-light border border-success/30">
            <div className="text-xs font-medium text-success mb-1">Correct answer:</div>
            <p className="text-sm font-medium">{example.en}</p>
          </div>

          <button
            onClick={() => onComplete(isCorrect)}
            className="w-full py-3 rounded-lg bg-primary text-white font-medium transition-colors hover:bg-primary/90"
          >
            Continue
          </button>
        </div>
      )}
    </div>
  );
}

export default function ExerciseContainer({
  pattern,
  category,
  example,
  exerciseType,
  practiceLevel,
  onComplete,
}: ExerciseContainerProps) {
  const [exerciseDone, setExerciseDone] = useState(false);
  const [wasCorrect, setWasCorrect] = useState(false);

  const handleAnswer = (correct: boolean) => {
    setWasCorrect(correct);
    setExerciseDone(true);
    // For BanglaFirst, onComplete is called via the Continue button inside it
    if (exerciseType !== "bangla-first") {
      // Don't auto-complete — wait for parent to show confidence rating
      onComplete(correct);
    }
  };

  return (
    <div className="p-6 rounded-xl border border-card-border bg-card">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="text-xs text-muted">{category.name} — {pattern.id}</div>
          <div className="text-sm font-medium text-primary">
            Pattern: {pattern.formula}
          </div>
        </div>
        <span
          className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
            exerciseType === "bangla-first"
              ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
              : exerciseType === "slot-fill"
              ? "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300"
              : "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300"
          }`}
        >
          {exerciseType === "bangla-first"
            ? "Translate"
            : exerciseType === "slot-fill"
            ? "Fill Slot"
            : "Word Bank"}
        </span>
      </div>

      {/* Exercise */}
      {exerciseType === "bangla-first" && (
        <BanglaFirstExercise
          example={example}
          onComplete={(correct) => {
            setWasCorrect(correct);
            setExerciseDone(true);
            onComplete(correct);
          }}
        />
      )}

      {exerciseType === "slot-fill" && !exerciseDone && (
        <SlotFillExercise
          pattern={pattern}
          example={example}
          onAnswer={handleAnswer}
        />
      )}

      {exerciseType === "word-bank" && !exerciseDone && (
        <WordBankExercise
          pattern={pattern}
          example={example}
          practiceLevel={practiceLevel}
          onAnswer={handleAnswer}
        />
      )}

      {/* For slot-fill and word-bank, show the result state after answering */}
      {exerciseDone && exerciseType !== "bangla-first" && (
        <div className="mt-3 text-center text-sm text-muted">
          {wasCorrect ? "Great job!" : "Keep practicing!"}
        </div>
      )}
    </div>
  );
}
