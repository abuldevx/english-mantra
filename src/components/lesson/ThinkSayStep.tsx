"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useAudio } from "@/hooks/useAudio";
import type { PatternExample } from "@/types/pattern";

interface ThinkSayStepProps {
  examples: PatternExample[];
  onComplete: (results: boolean[]) => void;
}

/**
 * Phase 2: "এবার তুমি বলো" (Now You Say It)
 *
 * 3 rounds of Pimsleur anticipation:
 * - Show Bangla prompt + countdown
 * - User tries to produce English from memory
 * - Reveal answer with echo/shadowing
 * - Self-assess: পেরেছি (got it) / পারিনি (couldn't)
 *
 * Uses: Pimsleur Anticipation + Testing Effect + Generation Effect
 */
export function ThinkSayStep({ examples, onComplete }: ThinkSayStepProps) {
  const [currentRound, setCurrentRound] = useState(0);
  const [phase, setPhase] = useState<"challenge" | "answer">("challenge");
  const [countdown, setCountdown] = useState(5);
  const [results, setResults] = useState<boolean[]>([]);
  const { speakEn, playing } = useAudio();
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const rounds = examples.slice(0, 3);
  const round = rounds[currentRound];

  // Countdown timer
  useEffect(() => {
    if (phase !== "challenge") return;

    setCountdown(5);
    timerRef.current = setInterval(() => {
      setCountdown((prev) => {
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
  }, [phase, currentRound]);

  const handleReveal = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    setPhase("answer");
    // Auto-play English audio
    if (round) {
      setTimeout(() => speakEn(round.en), 300);
    }
  }, [round, speakEn]);

  // Auto-reveal when countdown hits 0
  useEffect(() => {
    if (countdown === 0 && phase === "challenge") {
      handleReveal();
    }
  }, [countdown, phase, handleReveal]);

  const handleAssess = (gotIt: boolean) => {
    const newResults = [...results, gotIt];

    if (!gotIt && round) {
      // On পারিনি: play audio twice for extra exposure
      speakEn(round.en, () => {
        setTimeout(() => speakEn(round.en), 800);
      });
    }

    if (currentRound < rounds.length - 1) {
      // Small delay before moving to next round
      const delay = gotIt ? 500 : 2500;
      setTimeout(() => {
        setResults(newResults);
        setCurrentRound(currentRound + 1);
        setPhase("challenge");
      }, delay);
    } else {
      // All rounds done
      setTimeout(() => {
        onComplete(newResults);
      }, gotIt ? 500 : 2000);
    }

    setResults(newResults);
  };

  if (!round) return null;

  // Countdown circle progress (SVG)
  const circumference = 2 * Math.PI * 22;
  const progress = (countdown / 5) * circumference;

  return (
    <div className="flex flex-col items-center px-4 py-6 min-h-[70vh] justify-center">
      {phase === "challenge" ? (
        /* Challenge View */
        <>
          {/* MiniStory context */}
          {round.miniStory && (
            <div className="flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-muted-bg">
              <span className="text-xl">{round.miniStory.icon}</span>
              <span className="font-bangla text-sm text-muted">
                {round.miniStory.situation_bn}
              </span>
            </div>
          )}

          {/* Bangla prompt */}
          <p className="font-bangla text-xs text-muted mb-2">তুমি বাংলায় বলো:</p>
          <p className="font-bangla text-xl font-bold mb-8 text-center leading-relaxed">
            &ldquo;{round.bn}&rdquo;
          </p>

          {/* Challenge text */}
          <p className="font-bangla text-base text-primary mb-6">
            ইংরেজিতে কী বলবে? 🤔
          </p>

          {/* Encouragement */}
          <p className="font-bangla text-sm text-muted mb-6">
            ভাবো... মুখে বলো...
          </p>

          {/* Countdown circle */}
          <div className="relative w-16 h-16 mb-8">
            <svg className="w-16 h-16 -rotate-90" viewBox="0 0 48 48">
              <circle
                cx="24"
                cy="24"
                r="22"
                fill="none"
                stroke="var(--muted-bg)"
                strokeWidth="3"
              />
              <circle
                cx="24"
                cy="24"
                r="22"
                fill="none"
                stroke="var(--primary)"
                strokeWidth="3"
                strokeDasharray={circumference}
                strokeDashoffset={circumference - progress}
                strokeLinecap="round"
                className="transition-all duration-1000 ease-linear"
              />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-lg font-bold text-primary">
              {countdown}
            </span>
          </div>

          {/* Reveal button — disabled for first 3 seconds */}
          <button
            onClick={handleReveal}
            disabled={countdown > 2}
            className="w-full max-w-xs py-4 rounded-xl bg-muted-bg text-foreground font-bangla font-bold text-base hover:bg-card-border transition-all min-h-[60px] disabled:opacity-40 disabled:cursor-not-allowed"
          >
            🔓 উত্তর দেখো
          </button>
        </>
      ) : (
        /* Answer View */
        <>
          {/* What you should say */}
          <p className="font-bangla text-xs text-muted mb-3">তুমি বলবে:</p>

          {/* English sentence — big and bold */}
          <p className="text-2xl font-bold text-primary mb-3 text-center">
            &ldquo;{round.en}&rdquo;
          </p>

          {/* Pronunciation — tappable */}
          {round.pronunciation_bn && (
            <button
              onClick={() => speakEn(round.en)}
              disabled={playing}
              className="flex items-center gap-2 px-4 py-3 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors mb-4 min-h-[48px]"
            >
              <span className="text-lg">🔊</span>
              <span className="font-bangla text-base text-primary/80 italic">
                {round.pronunciation_bn}
              </span>
            </button>
          )}

          {/* Echo/shadowing button */}
          <button
            onClick={() => speakEn(round.en)}
            disabled={playing}
            className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-muted-bg hover:bg-card-border transition-colors mb-8 font-bangla text-sm"
          >
            🔁 আবার শোনো ও বলো
          </button>

          <hr className="w-full max-w-xs border-card-border mb-6" />

          {/* Self-assessment */}
          <p className="font-bangla text-base mb-4">পেরেছো? 😊</p>

          <div className="flex gap-4 w-full max-w-xs">
            <button
              onClick={() => handleAssess(true)}
              className="flex-1 py-4 rounded-xl bg-success/10 border-2 border-success/30 text-success font-bangla font-bold text-base hover:bg-success/20 transition-colors min-h-[60px]"
            >
              ✅ পেরেছি
            </button>
            <button
              onClick={() => handleAssess(false)}
              className="flex-1 py-4 rounded-xl bg-danger/10 border-2 border-danger/30 text-danger font-bangla font-bold text-base hover:bg-danger/20 transition-colors min-h-[60px]"
            >
              ❌ পারিনি
            </button>
          </div>

          {/* Encouragement shown after পারিনি (when results already has a false) */}
          {results.length > 0 && results[results.length - 1] === false && (
            <p className="font-bangla text-sm text-muted mt-4">
              কোনো সমস্যা নেই! আবার শোনো 💪
            </p>
          )}
        </>
      )}

      {/* Round indicator */}
      <div className="flex items-center gap-3 mt-8">
        <span className="font-bangla text-xs text-muted">
          Round {currentRound + 1}/{rounds.length}
        </span>
        <div className="flex gap-1.5">
          {rounds.map((_, i) => (
            <div
              key={i}
              className={`w-2.5 h-2.5 rounded-full ${
                i < results.length
                  ? results[i]
                    ? "bg-success"
                    : "bg-danger"
                  : i === currentRound
                  ? "bg-primary"
                  : "bg-muted-bg"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
