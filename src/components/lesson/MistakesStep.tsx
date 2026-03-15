"use client";

import { useState, useMemo } from "react";
import { useAudio } from "@/hooks/useAudio";
import type { CommonMistake, PatternExample } from "@/types/pattern";

interface MistakesStepProps {
  mistakes: CommonMistake[];
  bonusExamples?: PatternExample[];
  onComplete: (correctCount: number) => void;
}

/**
 * "ভুল ধরো" (Spot Mistakes)
 *
 * Shows wrong vs correct sentences. User taps the correct one.
 * Low-pressure game — wrong tap gets encouragement, not punishment.
 *
 * Technique: Error awareness + pattern strengthening
 */
export function MistakesStep({ mistakes, bonusExamples = [], onComplete }: MistakesStepProps) {
  const [currentRound, setCurrentRound] = useState(0);
  const [selected, setSelected] = useState<"wrong" | "correct" | null>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [showBonus, setShowBonus] = useState(false);
  const [bonusIndex, setBonusIndex] = useState(0);
  const { speakEn, playing } = useAudio();

  const rounds = mistakes.slice(0, 4);
  const round = rounds[currentRound];

  // Randomly position correct/wrong for each round
  const positions = useMemo(
    () => rounds.map(() => Math.random() > 0.5),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [rounds.length]
  );
  const correctOnTop = positions[currentRound];

  const handleSelect = (choice: "wrong" | "correct") => {
    if (selected) return;
    setSelected(choice);

    // Always play the correct sentence
    if (round) speakEn(round.correct);

    if (choice === "correct") {
      setCorrectCount((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentRound < rounds.length - 1) {
      setSelected(null);
      setCurrentRound(currentRound + 1);
    } else {
      // Check if we need bonus examples (≤2 correct and we have bonus examples)
      const finalCount = correctCount + (selected === "correct" ? 0 : 0); // already counted
      if (finalCount <= 2 && bonusExamples.length > 0) {
        setShowBonus(true);
      } else {
        onComplete(correctCount);
      }
    }
  };

  // Bonus example cards (reinforcement after poor performance)
  if (showBonus) {
    const bonus = bonusExamples[bonusIndex];
    if (!bonus) {
      onComplete(correctCount);
      return null;
    }

    return (
      <div className="flex flex-col items-center px-4 py-6 min-h-[70vh] justify-center">
        <p className="font-bangla text-xs text-muted mb-2">আরও শোনো 👂</p>

        {bonus.miniStory && (
          <div className="flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-muted-bg">
            <span className="text-xl">{bonus.miniStory.icon}</span>
            <span className="font-bangla text-sm text-muted">
              {bonus.miniStory.situation_bn}
            </span>
          </div>
        )}

        <p className="font-bangla text-lg font-bold mb-4 text-center">
          &ldquo;{bonus.bn}&rdquo;
        </p>
        <div className="text-xl text-muted mb-4">↓</div>
        <p className="text-xl font-bold text-primary mb-2 text-center">
          &ldquo;{bonus.en}&rdquo;
        </p>
        {bonus.pronunciation_bn && (
          <button
            onClick={() => speakEn(bonus.en)}
            disabled={playing}
            className="flex items-center gap-2 px-4 py-3 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors mb-6"
          >
            <span>🔊</span>
            <span className="font-bangla text-sm text-primary/80 italic">
              {bonus.pronunciation_bn}
            </span>
          </button>
        )}

        <button
          onClick={() => {
            if (bonusIndex < bonusExamples.length - 1) {
              setBonusIndex(bonusIndex + 1);
            } else {
              onComplete(correctCount);
            }
          }}
          className="w-full max-w-xs py-4 rounded-xl bg-primary text-white font-bangla font-bold text-lg hover:bg-primary/90 transition-colors min-h-[60px]"
        >
          {bonusIndex < bonusExamples.length - 1 ? "শুনেছি →" : "পরের ধাপ →"}
        </button>
      </div>
    );
  }

  if (!round) return null;

  const topSentence = correctOnTop ? round.correct : round.wrong;
  const bottomSentence = correctOnTop ? round.wrong : round.correct;
  const topType = correctOnTop ? "correct" : "wrong";
  const bottomType = correctOnTop ? "wrong" : "correct";

  return (
    <div className="flex flex-col items-center px-4 py-6 min-h-[70vh] justify-center">
      <p className="font-bangla text-xs text-muted mb-2">ভুল ধরো 🔍</p>
      <p className="font-bangla text-base mb-6">কোনটা ঠিক?</p>

      {/* Option A (top) */}
      <button
        onClick={() => handleSelect(topType)}
        disabled={!!selected}
        className={`w-full max-w-sm p-4 rounded-xl border-2 text-left mb-3 transition-all min-h-[60px] ${
          selected
            ? topType === "correct"
              ? "border-success bg-success/10"
              : "border-danger bg-danger/10"
            : "border-card-border bg-card hover:border-primary/40"
        }`}
      >
        <p className={`font-medium text-lg ${
          selected && topType === "wrong" ? "line-through text-danger/60" : ""
        }`}>
          &ldquo;{topSentence}&rdquo;
        </p>
        {selected && topType === "correct" && (
          <span className="text-success text-sm font-bangla">✅ ঠিক!</span>
        )}
        {selected && topType === "wrong" && (
          <span className="text-danger text-sm font-bangla">❌ ভুল</span>
        )}
      </button>

      {/* Option B (bottom) */}
      <button
        onClick={() => handleSelect(bottomType)}
        disabled={!!selected}
        className={`w-full max-w-sm p-4 rounded-xl border-2 text-left mb-6 transition-all min-h-[60px] ${
          selected
            ? bottomType === "correct"
              ? "border-success bg-success/10"
              : "border-danger bg-danger/10"
            : "border-card-border bg-card hover:border-primary/40"
        }`}
      >
        <p className={`font-medium text-lg ${
          selected && bottomType === "wrong" ? "line-through text-danger/60" : ""
        }`}>
          &ldquo;{bottomSentence}&rdquo;
        </p>
        {selected && bottomType === "correct" && (
          <span className="text-success text-sm font-bangla">✅ ঠিক!</span>
        )}
        {selected && bottomType === "wrong" && (
          <span className="text-danger text-sm font-bangla">❌ ভুল</span>
        )}
      </button>

      {/* Explanation after selection */}
      {selected && (
        <div className={`w-full max-w-sm p-4 rounded-xl mb-6 ${
          selected === "correct"
            ? "bg-success/5 border border-success/20"
            : "bg-warning/5 border border-warning/20"
        }`}>
          {selected === "correct" ? (
            <p className="font-bangla text-sm mb-1">✅ ঠিক ধরেছো!</p>
          ) : (
            <p className="font-bangla text-sm mb-1">কোনো সমস্যা নেই! মনে রাখো:</p>
          )}
          <p className="font-bangla text-sm text-muted">
            💡 {round.explanation_bn}
          </p>
        </div>
      )}

      {/* Next button */}
      {selected && (
        <button
          onClick={handleNext}
          className="w-full max-w-xs py-4 rounded-xl bg-primary text-white font-bangla font-bold text-lg hover:bg-primary/90 transition-colors min-h-[60px]"
        >
          {currentRound < rounds.length - 1 ? "পরেরটা →" : "পরের ধাপ →"}
        </button>
      )}

      {/* Round indicator */}
      <div className="flex items-center gap-2 mt-6">
        {rounds.map((_, i) => (
          <div
            key={i}
            className={`w-2.5 h-2.5 rounded-full ${
              i < currentRound
                ? "bg-success"
                : i === currentRound
                ? "bg-primary"
                : "bg-muted-bg"
            }`}
          />
        ))}
      </div>

      {/* Skip link */}
      <button
        onClick={() => onComplete(correctCount)}
        className="mt-4 text-xs text-muted font-bangla hover:text-foreground transition-colors"
      >
        এড়িয়ে যাও →
      </button>
    </div>
  );
}
