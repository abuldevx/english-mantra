"use client";

import { useState, useEffect } from "react";
import { useAudio } from "@/hooks/useAudio";
import type { PatternVariation } from "@/types/pattern";

interface VariationsStepProps {
  variations: PatternVariation[];
  onComplete: () => void;
}

/**
 * "আরো রূপ" (More Forms)
 *
 * Walkthrough of all pattern variations (past, negative, question, future, etc.)
 * Each variation is a listen card with formula + one example.
 * Ends with a summary card showing all formulas side by side.
 *
 * Technique: Variation exposure + chunking
 */
export function VariationsStep({ variations, onComplete }: VariationsStepProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showSummary, setShowSummary] = useState(false);
  const { speakEn, playing } = useAudio();

  const variation = variations[currentIndex];
  const example = variation?.examples?.[0];

  // Auto-play the example when card changes
  useEffect(() => {
    if (example && !showSummary) {
      const timer = setTimeout(() => {
        speakEn(example.en);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, showSummary]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleNext = () => {
    if (currentIndex < variations.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setShowSummary(true);
    }
  };

  // Summary card — all variations at a glance
  if (showSummary) {
    return (
      <div className="flex flex-col items-center px-4 py-6 min-h-[70vh] justify-center">
        <p className="font-bangla text-xs text-muted mb-2">সব রূপ একসাথে</p>
        <p className="font-bangla text-base font-bold mb-6">মনে রাখো এগুলো:</p>

        <div className="w-full max-w-sm space-y-2 mb-8">
          {variations.map((v, i) => {
            const ex = v.examples?.[0];
            const isWarning = v.variant === "continuous_warning" || v.variant === "mistake";
            return (
              <button
                key={i}
                onClick={() => ex && speakEn(ex.en)}
                disabled={playing}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl border text-left transition-colors ${
                  isWarning
                    ? "border-danger/30 bg-danger/5 hover:bg-danger/10"
                    : "border-card-border bg-card hover:border-primary/30"
                }`}
              >
                <span className="text-lg shrink-0">
                  {isWarning ? "⚠️" : "🔊"}
                </span>
                <div className="flex-1 min-w-0">
                  <p className={`font-bangla text-sm font-medium ${isWarning ? "text-danger" : ""}`}>
                    {v.label_bn}
                    {isWarning && " — এটা ভুল!"}
                  </p>
                  {ex?.pronunciation_bn && (
                    <p className="font-bangla text-xs text-muted truncate">
                      {ex.pronunciation_bn}
                    </p>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        <button
          onClick={onComplete}
          className="w-full max-w-xs py-4 rounded-xl bg-primary text-white font-bangla font-bold text-lg hover:bg-primary/90 transition-colors min-h-[60px]"
        >
          পরের ধাপ →
        </button>

        {/* Skip link */}
        <button
          onClick={onComplete}
          className="mt-4 text-xs text-muted font-bangla hover:text-foreground transition-colors"
        >
          এড়িয়ে যাও →
        </button>
      </div>
    );
  }

  if (!variation || !example) return null;

  const isWarning = variation.variant === "continuous_warning" || variation.variant === "mistake";

  return (
    <div className="flex flex-col items-center px-4 py-6 min-h-[70vh] justify-center">
      <p className="font-bangla text-xs text-muted mb-2">
        আরো রূপ 🔄 ({currentIndex + 1}/{variations.length})
      </p>

      {/* Variation label */}
      <div className={`w-full max-w-sm p-4 rounded-xl border-2 mb-6 ${
        isWarning
          ? "border-danger/30 bg-danger/5"
          : "border-primary/20 bg-primary/5"
      }`}>
        <p className={`font-bangla text-sm font-bold mb-1 ${isWarning ? "text-danger" : "text-primary"}`}>
          {isWarning ? "⚠️ এটা ভুল!" : variation.label_bn}
        </p>
        {/* Formula pronunciation */}
        <button
          onClick={() => speakEn(variation.formula.replace(/\[.*?\]/g, "something"))}
          disabled={playing}
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <span>🔊</span>
          <span className={`font-bangla text-base italic ${isWarning ? "text-danger/70 line-through" : "text-primary/70"}`}>
            {variation.formula_bn}
          </span>
        </button>
      </div>

      {/* Example */}
      <p className="font-bangla text-xs text-muted mb-2">
        {isWarning ? "ভুল:" : "যেমন:"}
      </p>
      <p className="font-bangla text-lg mb-4 text-center">
        &ldquo;{example.bn}&rdquo;
      </p>
      <div className="text-xl text-muted mb-4">↓</div>
      <p className={`text-xl font-bold mb-2 text-center ${isWarning ? "text-danger line-through" : "text-primary"}`}>
        &ldquo;{example.en}&rdquo;
      </p>

      {/* Show the correct version for warnings */}
      {isWarning && variation.examples?.[1] && (
        <p className="text-lg font-bold text-success mb-2 text-center">
          ✅ &ldquo;{variation.examples[1].en}&rdquo;
        </p>
      )}

      {/* Pronunciation */}
      {example.pronunciation_bn && (
        <button
          onClick={() => speakEn(isWarning && variation.examples?.[1] ? variation.examples[1].en : example.en)}
          disabled={playing}
          className="flex items-center gap-2 px-4 py-3 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors mb-6 min-h-[48px]"
        >
          <span>🔊</span>
          <span className="font-bangla text-sm text-primary/80 italic">
            {isWarning && variation.examples?.[1]?.pronunciation_bn
              ? variation.examples[1].pronunciation_bn
              : example.pronunciation_bn}
          </span>
        </button>
      )}

      {/* Echo button */}
      <button
        onClick={() => speakEn(isWarning && variation.examples?.[1] ? variation.examples[1].en : example.en)}
        disabled={playing}
        className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-muted-bg hover:bg-card-border transition-colors mb-8 font-bangla text-sm"
      >
        🔁 আবার শোনো ও বলো
      </button>

      {/* Next button */}
      <button
        onClick={handleNext}
        className="w-full max-w-xs py-4 rounded-xl bg-primary text-white font-bangla font-bold text-lg hover:bg-primary/90 transition-colors min-h-[60px]"
      >
        {currentIndex < variations.length - 1 ? "পরের রূপ →" : "সব দেখেছি →"}
      </button>

      {/* Dot indicator */}
      <div className="flex items-center gap-2 mt-6">
        {variations.map((_, i) => (
          <div
            key={i}
            className={`w-2.5 h-2.5 rounded-full ${
              i < currentIndex
                ? "bg-success"
                : i === currentIndex
                ? "bg-primary"
                : "bg-muted-bg"
            }`}
          />
        ))}
      </div>

      {/* Skip link */}
      <button
        onClick={onComplete}
        className="mt-4 text-xs text-muted font-bangla hover:text-foreground transition-colors"
      >
        এড়িয়ে যাও →
      </button>
    </div>
  );
}
