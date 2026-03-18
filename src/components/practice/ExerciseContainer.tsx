"use client";

import { useState } from "react";
import type { Pattern, PatternCategory, PatternExample, PracticeLevel } from "@/types/pattern";
import type { ExerciseType } from "@/lib/exerciseSelector";
import type { VariationInfo } from "@/lib/patternHelpers";
import SlotFillExercise from "./SlotFillExercise";
import WordBankExercise from "./WordBankExercise";

interface ExerciseContainerProps {
  pattern: Pattern;
  category: PatternCategory;
  example: PatternExample;
  exerciseType: ExerciseType;
  practiceLevel: PracticeLevel;
  onComplete: (correct: boolean) => void;
  variationInfo?: VariationInfo;
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
        <div className="text-xs text-accent mb-1 font-bangla">ইংরেজিতে বলো:</div>
        <p className="font-bangla text-lg font-medium">{example.bn}</p>
      </div>

      {!showAnswer ? (
        <div className="space-y-3">
          <input
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && answer.trim() && handleCheck()}
            placeholder="ইংরেজিতে লেখো..."
            className="w-full px-4 py-3 rounded-lg border border-card-border bg-background text-base focus:outline-none focus:ring-2 focus:ring-primary/30"
            autoFocus
          />
          <button
            onClick={handleCheck}
            disabled={!answer.trim()}
            className="w-full py-3 rounded-lg bg-primary text-white font-medium disabled:opacity-50 transition-colors hover:bg-primary/90"
          >
            উত্তর দেখো
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          <div
            className={`p-3 rounded-lg ${
              isCorrect
                ? "bg-success-light border border-success/30 animate-celebrate"
                : "bg-danger-light border border-danger/30 animate-shake"
            }`}
          >
            {isCorrect && (
              <div className="flex items-center gap-2 mb-1">
                <span className="text-lg animate-celebrate">&#10003;</span>
                <span className="text-xs font-medium font-bangla">সঠিক!</span>
                <span className="text-xs font-bold text-success animate-fadeUp">+1</span>
              </div>
            )}
            {!isCorrect && (
              <div className="text-xs font-medium mb-1 font-bangla">তোমার উত্তর:</div>
            )}
            <p className="text-sm">{answer || "(empty)"}</p>
          </div>

          {!isCorrect && (
            <div className="p-3 rounded-lg bg-success-light border border-success/30">
              <div className="text-xs font-medium text-success mb-1 font-bangla">সঠিক উত্তর:</div>
              <p className="text-sm font-medium">{example.en}</p>
              {example.pronunciation_bn && (
                <p className="text-xs text-muted font-bangla mt-1">{example.pronunciation_bn}</p>
              )}
            </div>
          )}

          {isCorrect && (
            <div className="p-3 rounded-lg bg-success-light border border-success/30">
              <div className="text-xs font-medium text-success mb-1 font-bangla">সঠিক উত্তর:</div>
              <p className="text-sm font-medium">{example.en}</p>
            </div>
          )}

          <button
            onClick={() => onComplete(isCorrect)}
            className="w-full py-3 rounded-lg bg-primary text-white font-medium transition-colors hover:bg-primary/90"
          >
            পরের প্রশ্ন →
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
  variationInfo,
}: ExerciseContainerProps) {
  const effectiveFormula = variationInfo?.formula ?? pattern.formula;
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
            <span className="font-bangla">ছক:</span> {effectiveFormula}
          </div>
          {variationInfo && (
            <span className="inline-flex items-center gap-1 mt-1 px-2 py-0.5 rounded-full bg-accent-light border border-accent/20 text-[10px] font-medium">
              <span className="font-bangla">{variationInfo.label_bn}</span>
            </span>
          )}
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
          <span className="font-bangla">
            {exerciseType === "bangla-first"
              ? "অনুবাদ"
              : exerciseType === "slot-fill"
              ? "ঘর পূরণ"
              : "শব্দ বাছাই"}
          </span>
        </span>
      </div>

      {/* MiniStory context */}
      {example.miniStory && (
        <div className="mb-4 p-3 rounded-lg bg-warning-light border border-warning/20">
          <div className="flex items-start gap-2">
            <span className="text-lg leading-none">{example.miniStory.icon}</span>
            <p className="font-bangla text-sm text-foreground/80">{example.miniStory.situation_bn}</p>
          </div>
        </div>
      )}

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
          effectiveFormula={effectiveFormula}
        />
      )}

      {exerciseType === "word-bank" && !exerciseDone && (
        <WordBankExercise
          pattern={pattern}
          example={example}
          practiceLevel={practiceLevel}
          onAnswer={handleAnswer}
          effectiveFormula={effectiveFormula}
        />
      )}

      {/* For slot-fill and word-bank, show the result state after answering */}
      {exerciseDone && exerciseType !== "bangla-first" && (
        <div className={`mt-3 text-center relative ${wasCorrect ? "animate-celebrate" : "animate-shake"}`}>
          {wasCorrect ? (
            <div className="flex items-center justify-center gap-2">
              <span className="text-2xl text-success">&#10003;</span>
              <span className="text-sm font-medium text-success font-bangla">দারুণ!</span>
              <span className="text-sm font-bold text-success animate-fadeUp">+1</span>
            </div>
          ) : (
            <div className="space-y-2">
              <span className="text-sm text-muted font-bangla">আবার চেষ্টা করো!</span>
              {example.pronunciation_bn && (
                <p className="text-xs text-muted font-bangla">
                  উচ্চারণ: {example.pronunciation_bn}
                </p>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
