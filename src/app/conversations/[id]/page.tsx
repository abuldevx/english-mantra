"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { getConversationById } from "@/content/verification-conversations";
import { useSettings } from "@/contexts/SettingsContext";

export default function ConversationDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const conversation = getConversationById(id);
  const { settings } = useSettings();
  const [revealedTurns, setRevealedTurns] = useState<Set<number>>(new Set([0]));
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  if (!conversation) {
    return (
      <div className="mx-auto max-w-lg px-4 py-6 text-center">
        <p className="text-4xl mb-3">❓</p>
        <p className="text-lg font-bold">Conversation not found</p>
        <Link href="/conversations" className="text-primary text-sm mt-2 inline-block hover:underline">
          ← Back to Conversations
        </Link>
      </div>
    );
  }

  const revealNext = () => {
    const nextIndex = revealedTurns.size;
    if (nextIndex < conversation.turns.length) {
      setRevealedTurns((prev) => new Set([...prev, nextIndex]));
    }
  };

  const revealAll = () => {
    setRevealedTurns(new Set(conversation.turns.map((_, i) => i)));
  };

  const speak = (text: string, index: number) => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "en-US";
      utterance.rate = 0.85;
      utterance.onstart = () => setPlayingIndex(index);
      utterance.onend = () => setPlayingIndex(null);
      utterance.onerror = () => setPlayingIndex(null);
      window.speechSynthesis.speak(utterance);
    }
  };

  const allRevealed = revealedTurns.size >= conversation.turns.length;

  return (
    <div className="mx-auto max-w-lg px-4 py-6">
      {/* Back link */}
      <Link href="/conversations" className="text-sm text-muted hover:text-primary mb-4 inline-block">
        ← কথোপকথন (Conversations)
      </Link>

      {/* Header */}
      <div className="text-center mb-6">
        <span className="text-4xl block mb-2">{conversation.icon}</span>
        <h1 className="text-xl font-bold font-bangla">{conversation.title_bn}</h1>
        <p className="text-sm text-muted">{conversation.title_en}</p>
        <p className="text-xs text-muted font-bangla mt-2 p-2 rounded-lg bg-muted-bg">
          {conversation.situation_bn}
        </p>
      </div>

      {/* Chat bubbles */}
      <div className="space-y-3 mb-6">
        {conversation.turns.map((turn, i) => {
          if (!revealedTurns.has(i)) return null;

          const isYou = turn.speaker_bn === "তুমি";
          const isPlaying = playingIndex === i;

          return (
            <div
              key={i}
              className={`flex ${isYou ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[85%] rounded-2xl p-3 ${
                  isYou
                    ? "bg-primary text-white rounded-br-sm"
                    : "bg-card border border-card-border rounded-bl-sm"
                }`}
              >
                {/* Speaker label */}
                <p className={`text-[10px] font-bangla mb-1 ${isYou ? "text-white/70" : "text-muted"}`}>
                  {turn.speaker_bn}
                </p>

                {/* English */}
                <p className={`font-medium text-sm ${isYou ? "text-white" : ""}`}>
                  {turn.en}
                </p>

                {/* Bangla */}
                {settings.showBangla && (
                  <>
                    <p className={`font-bangla text-sm mt-1 ${isYou ? "text-white/80" : "text-muted"}`}>
                      {turn.bn}
                    </p>
                    {turn.pronunciation_bn && (
                      <p className={`font-bangla text-xs mt-0.5 italic ${isYou ? "text-white/60" : "text-primary/70"}`}>
                        🗣️ {turn.pronunciation_bn}
                      </p>
                    )}
                  </>
                )}

                {/* Pattern badge + audio */}
                <div className="flex items-center justify-between mt-2">
                  {turn.patternId && (
                    <Link
                      href={`/pattern/${turn.patternId}`}
                      className={`text-[10px] px-1.5 py-0.5 rounded ${
                        isYou
                          ? "bg-white/20 text-white hover:bg-white/30"
                          : "bg-primary/10 text-primary hover:bg-primary/20"
                      } transition-colors`}
                    >
                      {turn.patternId}
                    </Link>
                  )}
                  <button
                    onClick={() => speak(turn.en, i)}
                    className={`text-sm p-1 rounded-full transition-colors ${
                      isPlaying
                        ? isYou ? "bg-white/30 animate-pulse" : "bg-primary/20 animate-pulse"
                        : isYou ? "hover:bg-white/20" : "hover:bg-primary/10"
                    }`}
                    title="Listen"
                  >
                    {isPlaying ? "🔈" : "🔊"}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Reveal controls */}
      {!allRevealed && (
        <div className="flex items-center justify-center gap-3 mb-6">
          <button
            onClick={revealNext}
            className="px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            পরের কথা দেখো →
          </button>
          <button
            onClick={revealAll}
            className="px-4 py-2 rounded-lg border border-card-border text-sm text-muted hover:bg-card transition-colors"
          >
            সব দেখো
          </button>
        </div>
      )}

      {/* Patterns used summary */}
      {allRevealed && (
        <div className="p-4 rounded-xl border border-card-border bg-card">
          <h2 className="font-bold text-sm font-bangla mb-2">
            কোন প্যাটার্ন ব্যবহার হয়েছে?
          </h2>
          <p className="text-[10px] text-muted mb-3">Patterns used in this conversation</p>
          <div className="flex flex-wrap gap-1.5">
            {conversation.patternsUsed.map((pid) => (
              <Link
                key={pid}
                href={`/pattern/${pid}`}
                className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
              >
                {pid}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
