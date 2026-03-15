"use client";

import { useState, useEffect, useMemo } from "react";
import { useAudio } from "@/hooks/useAudio";
import { useProgress } from "@/contexts/ProgressContext";
import type { Pattern } from "@/types/pattern";

interface DoneStepProps {
  pattern: Pattern;
  results: boolean[];
  mistakeScore?: number;
  nextPattern?: { id: string; formula: string; patternName_bn: string } | null;
  onFinish: () => void;
  onNextLesson?: (id: string) => void;
}

function getResultMessage(sayCorrect: number, mistakeCorrect: number, hasMistakes: boolean): { message: string; emoji: string } {
  const total = sayCorrect + mistakeCorrect;
  const max = hasMistakes ? 7 : 3;
  const ratio = total / max;

  if (ratio >= 0.85) return { message: "দারুণ! তুমি চ্যাম্পিয়ন!", emoji: "🏆" };
  if (ratio >= 0.7) return { message: "ভালো হচ্ছে!", emoji: "👏" };
  if (ratio >= 0.4) return { message: "চালিয়ে যাও, পারবে!", emoji: "💪" };
  return { message: "কোনো সমস্যা নেই, আবার শোনো!", emoji: "🤗" };
}

/** Collapsible section */
function CollapsibleSection({ title, icon, children }: { title: string; icon: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full max-w-sm border border-card-border rounded-xl overflow-hidden mb-3">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-2 px-4 py-3 bg-card hover:bg-muted-bg transition-colors text-left"
      >
        <span>{icon}</span>
        <span className="font-bangla text-sm font-medium flex-1">{title}</span>
        <span className={`text-muted transition-transform ${open ? "rotate-180" : ""}`}>▾</span>
      </button>
      {open && <div className="px-4 py-3 border-t border-card-border">{children}</div>}
    </div>
  );
}

/**
 * "পারো! 🎉" (You Got It!) — Deep mastery celebration
 *
 * Shows: celebration + formula + chunks + sentence building +
 * usage situations + memory trick + bonus phrase + variations
 *
 * All reference sections are collapsible to keep initial view clean.
 */
export function DoneStep({ pattern, results, mistakeScore = 0, nextPattern, onFinish, onNextLesson }: DoneStepProps) {
  const { speakEn, playing } = useAudio();
  const { progress } = useProgress();
  const [showConfetti, setShowConfetti] = useState(true);

  const sayCorrect = results.filter(Boolean).length;
  const hasMistakes = (pattern.commonMistakes?.length || 0) > 0;
  const totalCorrect = sayCorrect + mistakeScore;
  const totalMax = hasMistakes ? 7 : 3;
  const { message, emoji } = getResultMessage(sayCorrect, mistakeScore, hasMistakes);

  // Random bonus phrase (~30% chance)
  const bonusPhrase = useMemo(() => {
    if (Math.random() > 0.3) return null;
    const candidates = pattern.examples.filter((e) => (e.stage || 1) >= 2);
    if (candidates.length === 0) return null;
    return candidates[Math.floor(Math.random() * candidates.length)];
  }, [pattern.examples]);

  const chunks = pattern.chunks || [];
  const sentenceBuilding = pattern.sentenceBuilding || [];
  const usageSituations = pattern.usageSituations || [];
  const memoryTrick = pattern.memoryTrick_bn;

  // Hide confetti after animation
  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center text-center px-4 py-6 min-h-[70vh] relative overflow-hidden">
      {/* CSS Confetti */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50" aria-hidden>
          {Array.from({ length: 30 }).map((_, i) => (
            <span
              key={i}
              className="confetti-piece"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 0.5}s`,
                backgroundColor: ["#2563eb", "#16a34a", "#ca8a04", "#dc2626", "#8b5cf6", "#ec4899"][i % 6],
              }}
            />
          ))}
        </div>
      )}

      {/* Celebration header */}
      <div className="text-6xl mb-3 animate-bounce">🎉</div>
      <h2 className="font-bangla text-2xl font-bold mb-1">তুমি পারো!</h2>
      {pattern.concept_bn && (
        <p className="font-bangla text-sm text-muted mb-2">
          &ldquo;{pattern.concept_bn}&rdquo; এখন A-Z শিখেছো!
        </p>
      )}

      {/* Results summary */}
      <div className="flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-muted-bg">
        <span>{emoji}</span>
        <span className="font-bangla text-sm">
          {totalCorrect}/{totalMax} পেরেছি — {message}
        </span>
      </div>

      {/* Formula card */}
      <div className="w-full max-w-sm p-4 rounded-xl bg-success/5 border-2 border-success/20 mb-5">
        <p className="font-bangla text-xs text-muted mb-1">মনে রাখো:</p>
        {pattern.formulaPronunciation_bn ? (
          <button
            onClick={() => speakEn(pattern.formula.replace(/\[.*?\]/g, "something"))}
            disabled={playing}
            className="flex items-center justify-center gap-2 w-full py-2 hover:bg-success/10 rounded-lg transition-colors"
          >
            <span className="text-lg">🔊</span>
            <span className="font-bangla text-lg font-bold text-success">
              {pattern.formulaPronunciation_bn}
            </span>
          </button>
        ) : (
          <p className="font-bold text-lg">{pattern.formula}</p>
        )}
        {memoryTrick && (
          <p className="font-bangla text-xs text-muted mt-2 italic">
            💡 {memoryTrick}
          </p>
        )}
      </div>

      {/* Chunks — fixed phrases to remember */}
      {chunks.length > 0 && (
        <CollapsibleSection title="গুরুত্বপূর্ণ টুকরো" icon="🧩">
          <div className="space-y-2">
            {chunks.map((chunk, i) => (
              <button
                key={i}
                onClick={() => speakEn(chunk.en)}
                disabled={playing}
                className="w-full flex items-center gap-3 px-3 py-2 rounded-lg bg-muted-bg hover:bg-card-border transition-colors text-left"
              >
                <span className="shrink-0">🔊</span>
                <div>
                  <p className="text-sm font-medium">{chunk.en}</p>
                  <p className="font-bangla text-xs text-muted">
                    {chunk.pronunciation_bn} = {chunk.bn}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </CollapsibleSection>
      )}

      {/* Sentence building — combine with other patterns */}
      {sentenceBuilding.length > 0 && (
        <CollapsibleSection title="একসাথে বলো" icon="🔗">
          <div className="space-y-3">
            {sentenceBuilding.map((sb, i) => (
              <div key={i} className="text-left">
                <p className="text-xs text-muted mb-1">
                  + {sb.previousFormula}
                </p>
                <button
                  onClick={() => speakEn(sb.combined)}
                  disabled={playing}
                  className="w-full px-3 py-2 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors text-left"
                >
                  <p className="text-sm font-medium">{sb.combined}</p>
                  <p className="font-bangla text-xs text-muted">{sb.combined_bn}</p>
                </button>
              </div>
            ))}
          </div>
        </CollapsibleSection>
      )}

      {/* Usage situations */}
      {usageSituations.length > 0 && (
        <CollapsibleSection title="কোথায় ব্যবহার করবে" icon="📍">
          <div className="space-y-2">
            {usageSituations.map((sit, i) => (
              <button
                key={i}
                onClick={() => speakEn(sit.exampleSentence)}
                disabled={playing}
                className="w-full px-3 py-2 rounded-lg bg-muted-bg hover:bg-card-border transition-colors text-left"
              >
                <p className="font-bangla text-xs text-muted">{sit.situation_bn}</p>
                <p className="text-sm font-medium">{sit.exampleSentence}</p>
                <p className="font-bangla text-xs text-muted">{sit.exampleSentence_bn}</p>
              </button>
            ))}
          </div>
        </CollapsibleSection>
      )}

      {/* Bonus phrase (variable reward) */}
      {bonusPhrase && (
        <div className="w-full max-w-sm p-4 rounded-xl border-2 border-warning/40 bg-warning/5 mb-5">
          <p className="font-bangla text-xs text-warning mb-2">⭐ বোনাস বাক্য!</p>
          <button
            onClick={() => speakEn(bonusPhrase.en)}
            disabled={playing}
            className="w-full text-center hover:opacity-80 transition-opacity"
          >
            <p className="font-bold text-base mb-1">{bonusPhrase.en}</p>
            {bonusPhrase.pronunciation_bn && (
              <p className="font-bangla text-sm text-muted italic">
                🔊 {bonusPhrase.pronunciation_bn}
              </p>
            )}
            <p className="font-bangla text-xs text-muted mt-1">{bonusPhrase.bn}</p>
          </button>
        </div>
      )}

      {/* Streak */}
      {progress.currentStreak > 0 && (
        <p className="font-bangla text-sm text-muted mb-5">
          🔥 {progress.currentStreak} দিনে ধারাবাহিক! চালিয়ে যাও!
        </p>
      )}

      {/* Action buttons */}
      <div className="w-full max-w-xs space-y-3">
        {nextPattern && onNextLesson && (
          <button
            onClick={() => onNextLesson(nextPattern.id)}
            className="w-full py-4 rounded-xl bg-primary text-white font-bangla font-bold text-lg hover:bg-primary/90 transition-colors min-h-[60px]"
          >
            📖 পরের পাঠ শুরু করো →
          </button>
        )}
        <button
          onClick={onFinish}
          className={`w-full py-3.5 rounded-xl font-bangla font-medium text-base transition-colors min-h-[52px] ${
            nextPattern && onNextLesson
              ? "bg-muted-bg text-foreground hover:bg-card-border"
              : "bg-primary text-white hover:bg-primary/90"
          }`}
        >
          🏠 হোমে ফিরে যাও
        </button>
      </div>

      {/* Confetti CSS */}
      <style jsx>{`
        .confetti-piece {
          position: fixed;
          top: -10px;
          width: 8px;
          height: 8px;
          border-radius: 2px;
          animation: confetti-fall 2.5s ease-out forwards;
        }
        @keyframes confetti-fall {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
