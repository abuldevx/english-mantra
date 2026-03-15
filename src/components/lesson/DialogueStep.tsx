"use client";

import { useState, useEffect, useRef } from "react";
import { useAudio } from "@/hooks/useAudio";
import type { DialogueChain } from "@/types/pattern";

interface DialogueStepProps {
  dialogues: DialogueChain[];
  onComplete: () => void;
}

/**
 * "কথোপকথন" (Conversation)
 *
 * Chat-bubble UI (WhatsApp-style). Turns appear one at a time.
 * "তুমি" turns are hidden — user tries to produce, then taps to reveal.
 * Other speaker turns auto-reveal and auto-play.
 *
 * Technique: Contextual learning + anticipation + social encoding
 */
export function DialogueStep({ dialogues, onComplete }: DialogueStepProps) {
  const [dialogueIndex, setDialogueIndex] = useState(0);
  const [visibleTurns, setVisibleTurns] = useState(0);
  const [revealedUserTurns, setRevealedUserTurns] = useState<Set<number>>(new Set());
  const { speakEn, playing } = useAudio();
  const scrollRef = useRef<HTMLDivElement>(null);
  const autoRevealRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const dialogue = dialogues[dialogueIndex];
  const turns = dialogue?.turns || [];
  const currentTurn = turns[visibleTurns - 1];
  const isUserTurn = currentTurn?.speaker_bn === "তুমি";

  // Show first turn on mount
  useEffect(() => {
    setVisibleTurns(1);
  }, [dialogueIndex]);

  // Auto-play audio for non-user turns and set up auto-reveal for user turns
  useEffect(() => {
    if (visibleTurns === 0 || !currentTurn) return;

    if (isUserTurn && !revealedUserTurns.has(visibleTurns - 1)) {
      // Auto-reveal user turn after 4 seconds
      autoRevealRef.current = setTimeout(() => {
        revealUserTurn();
      }, 4000);
      return () => {
        if (autoRevealRef.current) clearTimeout(autoRevealRef.current);
      };
    } else {
      // Non-user turn: auto-play audio
      const timer = setTimeout(() => {
        speakEn(currentTurn.en);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [visibleTurns, dialogueIndex]); // eslint-disable-line react-hooks/exhaustive-deps

  // Scroll to bottom when turns change
  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [visibleTurns, revealedUserTurns.size]);

  const revealUserTurn = () => {
    if (autoRevealRef.current) clearTimeout(autoRevealRef.current);
    const idx = visibleTurns - 1;
    setRevealedUserTurns((prev) => new Set(prev).add(idx));
    if (turns[idx]) speakEn(turns[idx].en);
  };

  const advanceTurn = () => {
    if (visibleTurns < turns.length) {
      setVisibleTurns(visibleTurns + 1);
    }
  };

  const handleNextDialogue = () => {
    if (dialogueIndex < dialogues.length - 1) {
      setDialogueIndex(dialogueIndex + 1);
      setVisibleTurns(0);
      setRevealedUserTurns(new Set());
    } else {
      onComplete();
    }
  };

  if (!dialogue) return null;

  const allTurnsShown = visibleTurns >= turns.length;
  const currentTurnRevealed = !isUserTurn || revealedUserTurns.has(visibleTurns - 1);

  return (
    <div className="flex flex-col px-4 py-6 min-h-[70vh]">
      {/* Header */}
      <div className="text-center mb-4">
        <p className="font-bangla text-xs text-muted mb-1">কথোপকথন 💬</p>
        <div className="flex items-center justify-center gap-2">
          <span className="text-xl">{dialogue.icon}</span>
          <span className="font-bangla text-sm font-medium">{dialogue.title_bn}</span>
        </div>
        <p className="font-bangla text-xs text-muted mt-1">{dialogue.situation_bn}</p>
      </div>

      {/* Chat area */}
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto space-y-3 mb-4 max-h-[50vh]"
      >
        {turns.slice(0, visibleTurns).map((turn, i) => {
          const isUser = turn.speaker_bn === "তুমি";
          const isRevealed = !isUser || revealedUserTurns.has(i);
          const isCurrent = i === visibleTurns - 1;

          return (
            <div
              key={i}
              className={`flex flex-col ${isUser ? "items-end" : "items-start"}`}
            >
              {/* Speaker label */}
              <span className="font-bangla text-[10px] text-muted mb-0.5 px-1">
                {turn.speaker_bn}
              </span>

              {/* Bubble */}
              {isRevealed ? (
                <button
                  onClick={() => speakEn(turn.en)}
                  disabled={playing}
                  className={`max-w-[80%] px-4 py-3 rounded-2xl text-left transition-colors ${
                    isUser
                      ? "bg-primary text-white rounded-br-md hover:bg-primary/90"
                      : "bg-muted-bg rounded-bl-md hover:bg-card-border"
                  }`}
                >
                  <p className="text-sm font-medium">{turn.en}</p>
                  <p className="font-bangla text-xs mt-0.5 opacity-80">{turn.bn}</p>
                  {turn.pronunciation_bn && (
                    <p className={`font-bangla text-[10px] mt-0.5 italic ${
                      isUser ? "text-white/60" : "text-muted"
                    }`}>
                      🔊 {turn.pronunciation_bn}
                    </p>
                  )}
                </button>
              ) : (
                /* Hidden user turn */
                <button
                  onClick={revealUserTurn}
                  className="max-w-[80%] px-6 py-4 rounded-2xl rounded-br-md bg-primary/20 border-2 border-dashed border-primary/40 text-center min-h-[60px]"
                >
                  <p className="text-lg">🤔</p>
                  <p className="font-bangla text-xs text-primary">
                    {isCurrent ? "ভাবো... তারপর ট্যাপ করো" : "????"}
                  </p>
                </button>
              )}
            </div>
          );
        })}
      </div>

      {/* Action buttons */}
      <div className="space-y-2">
        {!allTurnsShown && currentTurnRevealed && (
          <button
            onClick={advanceTurn}
            className="w-full py-4 rounded-xl bg-primary text-white font-bangla font-bold text-base hover:bg-primary/90 transition-colors min-h-[60px]"
          >
            পরের লাইন →
          </button>
        )}

        {allTurnsShown && currentTurnRevealed && (
          <button
            onClick={handleNextDialogue}
            className="w-full py-4 rounded-xl bg-primary text-white font-bangla font-bold text-base hover:bg-primary/90 transition-colors min-h-[60px]"
          >
            {dialogueIndex < dialogues.length - 1 ? "পরের কথোপকথন →" : "পরের ধাপ →"}
          </button>
        )}
      </div>

      {/* Skip link */}
      <button
        onClick={onComplete}
        className="mt-3 text-xs text-muted font-bangla hover:text-foreground transition-colors text-center"
      >
        এড়িয়ে যাও →
      </button>
    </div>
  );
}
