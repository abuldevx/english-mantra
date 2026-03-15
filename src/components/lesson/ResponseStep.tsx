"use client";

import { useState, useEffect, useRef } from "react";
import { useAudio } from "@/hooks/useAudio";
import type { AnswerTemplate } from "@/types/pattern";

interface ResponseStepProps {
  templates: AnswerTemplate[];
  onComplete: () => void;
}

/**
 * "উত্তর দাও" (Respond)
 *
 * Someone asks a question. User practices responding.
 * Light anticipation (4s thinking time, no countdown circle).
 * Reveals answer formula + example answers.
 *
 * Technique: Response practice + real-world simulation
 */
export function ResponseStep({ templates, onComplete }: ResponseStepProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [phase, setPhase] = useState<"think" | "reveal">("think");
  const [thinkTime, setThinkTime] = useState(4);
  const { speakEn, playing } = useAudio();
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const template = templates[currentIndex];

  // Auto-play question and start think timer
  useEffect(() => {
    if (!template || phase !== "think") return;

    // Play the question
    setTimeout(() => speakEn(template.question), 400);

    // Start thinking countdown
    setThinkTime(4);
    timerRef.current = setInterval(() => {
      setThinkTime((prev) => {
        if (prev <= 1) {
          if (timerRef.current) clearInterval(timerRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentIndex, phase]); // eslint-disable-line react-hooks/exhaustive-deps

  // Auto-reveal when think time runs out
  useEffect(() => {
    if (thinkTime === 0 && phase === "think") {
      handleReveal();
    }
  }, [thinkTime, phase]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleReveal = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setPhase("reveal");
  };

  const handleNext = () => {
    if (currentIndex < templates.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setPhase("think");
    } else {
      onComplete();
    }
  };

  if (!template) return null;

  return (
    <div className="flex flex-col items-center px-4 py-6 min-h-[70vh] justify-center">
      <p className="font-bangla text-xs text-muted mb-2">
        উত্তর দাও 🎤 ({currentIndex + 1}/{templates.length})
      </p>

      {phase === "think" ? (
        <>
          {/* Situation context */}
          <p className="font-bangla text-sm text-muted mb-4 text-center">
            {template.situation_bn}
          </p>

          {/* The question being asked */}
          <button
            onClick={() => speakEn(template.question)}
            disabled={playing}
            className="w-full max-w-sm p-4 rounded-xl bg-muted-bg border border-card-border mb-3 hover:bg-card-border transition-colors"
          >
            <p className="text-xl font-bold text-center mb-1">
              🔊 &ldquo;{template.question}&rdquo;
            </p>
            <p className="font-bangla text-sm text-muted text-center">
              {template.question_bn}
            </p>
          </button>

          {/* Thinking prompt */}
          <p className="font-bangla text-base text-primary mb-4">
            তুমি কীভাবে উত্তর দেবে? 🤔
          </p>
          <p className="font-bangla text-sm text-muted mb-8">ভাবো... বলো...</p>

          {/* Reveal button */}
          <button
            onClick={handleReveal}
            disabled={thinkTime > 2}
            className="w-full max-w-xs py-4 rounded-xl bg-muted-bg text-foreground font-bangla font-bold text-base hover:bg-card-border transition-all min-h-[60px] disabled:opacity-40 disabled:cursor-not-allowed"
          >
            🔓 উত্তর দেখো
          </button>
        </>
      ) : (
        <>
          {/* Answer formula */}
          <div className="w-full max-w-sm p-4 rounded-xl bg-success/5 border-2 border-success/20 mb-4">
            <p className="font-bangla text-xs text-muted mb-1">উত্তর:</p>
            <p className="font-bold text-lg text-center mb-1">
              {template.answerFormula}
            </p>
            <button
              onClick={() => speakEn(template.answerFormula.replace(/\[.*?\]/g, "something"))}
              disabled={playing}
              className="flex items-center justify-center gap-2 w-full py-1 hover:opacity-80"
            >
              <span>🔊</span>
              <span className="font-bangla text-sm text-success/70 italic">
                {template.pronunciation_bn}
              </span>
            </button>
          </div>

          {/* Example answers */}
          <div className="w-full max-w-sm mb-4">
            <p className="font-bangla text-xs text-muted mb-2">যেমন:</p>
            <div className="space-y-2">
              {template.examples.slice(0, 3).map((ex, i) => (
                <button
                  key={i}
                  onClick={() => speakEn(ex.answer)}
                  disabled={playing}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-card border border-card-border hover:border-primary/30 transition-colors text-left"
                >
                  <span className="text-lg shrink-0">🔊</span>
                  <div>
                    <p className="text-sm font-medium">{ex.answer}</p>
                    {ex.pronunciation_bn && (
                      <p className="font-bangla text-xs text-muted italic">
                        {ex.pronunciation_bn}
                      </p>
                    )}
                    <p className="font-bangla text-xs text-muted">{ex.answer_bn}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Notes/tip */}
          {template.notes_bn && (
            <div className="w-full max-w-sm p-3 rounded-xl bg-primary/5 border border-primary/20 mb-6">
              <p className="font-bangla text-sm text-primary/80">
                💡 {template.notes_bn}
              </p>
            </div>
          )}

          {/* Next button */}
          <button
            onClick={handleNext}
            className="w-full max-w-xs py-4 rounded-xl bg-primary text-white font-bangla font-bold text-lg hover:bg-primary/90 transition-colors min-h-[60px]"
          >
            {currentIndex < templates.length - 1 ? "পরেরটা →" : "পরের ধাপ →"}
          </button>
        </>
      )}

      {/* Dot indicator */}
      <div className="flex items-center gap-2 mt-6">
        {templates.map((_, i) => (
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
