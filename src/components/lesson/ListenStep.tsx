"use client";

import { useState, useEffect } from "react";
import { useAudio } from "@/hooks/useAudio";
import type { PatternExample } from "@/types/pattern";

interface ListenStepProps {
  examples: PatternExample[];
  onComplete: () => void;
}

/**
 * Phase 1: "শোনো ও বোঝো" (Listen & Discover)
 *
 * 3 examples shown ONE AT A TIME as full-screen cards.
 * The brain discovers the pattern through repetition — AHA moment.
 * Uses: Comprehensible Input + Chunking + Emotional Encoding
 */
export function ListenStep({ examples, onComplete }: ListenStepProps) {
  const [currentCard, setCurrentCard] = useState(0);
  const { speakEn, playing } = useAudio();
  const cards = examples.slice(0, 3);

  const card = cards[currentCard];

  // Auto-play English audio when card appears
  useEffect(() => {
    if (card) {
      const timer = setTimeout(() => {
        speakEn(card.en);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [currentCard]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleNext = () => {
    if (currentCard < cards.length - 1) {
      setCurrentCard(currentCard + 1);
    } else {
      onComplete();
    }
  };

  if (!card) return null;

  return (
    <div className="flex flex-col items-center px-4 py-6 min-h-[70vh] justify-center">
      {/* MiniStory context */}
      {card.miniStory && (
        <div className="flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-muted-bg">
          <span className="text-xl">{card.miniStory.icon}</span>
          <span className="font-bangla text-sm text-muted">
            {card.miniStory.situation_bn}
          </span>
        </div>
      )}

      {/* Bangla thought — what you already say */}
      <p className="font-bangla text-xs text-muted mb-2">তুমি বাংলায় বলো:</p>
      <p className="font-bangla text-xl font-bold mb-8 leading-relaxed text-center">
        &ldquo;{card.bn}&rdquo;
      </p>

      {/* Arrow */}
      <div className="text-2xl text-muted mb-6">↓</div>

      {/* English — how to say it */}
      <p className="font-bangla text-xs text-muted mb-2">ইংরেজিতে বলো:</p>
      <p className="text-2xl font-bold text-primary mb-3 text-center">
        &ldquo;{card.en}&rdquo;
      </p>

      {/* Pronunciation — tappable for audio */}
      {card.pronunciation_bn && (
        <button
          onClick={() => speakEn(card.en)}
          disabled={playing}
          className="flex items-center gap-2 px-4 py-3 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors mb-8 min-h-[48px]"
        >
          <span className="text-lg">🔊</span>
          <span className="font-bangla text-base text-primary/80 italic">
            {card.pronunciation_bn}
          </span>
        </button>
      )}

      {/* "শুনেছি" advance button */}
      <button
        onClick={handleNext}
        className="w-full max-w-xs py-4 rounded-xl bg-primary text-white font-bangla font-bold text-lg hover:bg-primary/90 transition-colors min-h-[60px]"
      >
        শুনেছি →
      </button>

      {/* Dot indicator */}
      <div className="flex items-center gap-2 mt-6">
        {cards.map((_, i) => (
          <div
            key={i}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              i === currentCard
                ? "bg-primary scale-125"
                : i < currentCard
                ? "bg-primary/40"
                : "bg-muted-bg"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
