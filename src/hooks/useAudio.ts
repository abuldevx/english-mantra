"use client";

import { useState, useCallback, useRef } from "react";

/**
 * Web Speech API wrapper for text-to-speech.
 * Supports English sentences and Bangla pronunciation guides.
 * Zero bandwidth cost — runs entirely in the browser.
 */
export function useAudio() {
  const [playing, setPlaying] = useState(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  const stop = useCallback(() => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
    setPlaying(false);
    utteranceRef.current = null;
  }, []);

  const speak = useCallback(
    (text: string, options?: { lang?: "en" | "bn"; rate?: number; onEnd?: () => void }) => {
      if (typeof window === "undefined" || !("speechSynthesis" in window)) return;

      // Cancel any ongoing speech
      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = options?.lang === "bn" ? "bn-BD" : "en-US";
      utterance.rate = options?.rate ?? 0.9;

      utterance.onstart = () => setPlaying(true);
      utterance.onend = () => {
        setPlaying(false);
        utteranceRef.current = null;
        options?.onEnd?.();
      };
      utterance.onerror = () => {
        setPlaying(false);
        utteranceRef.current = null;
      };

      utteranceRef.current = utterance;
      window.speechSynthesis.speak(utterance);
    },
    []
  );

  /**
   * Speak English text, then optionally call onEnd.
   */
  const speakEn = useCallback(
    (text: string, onEnd?: () => void) => {
      speak(text, { lang: "en", rate: 0.85, onEnd });
    },
    [speak]
  );

  /**
   * Speak Bangla pronunciation guide text.
   * Uses Bengali TTS voice if available, otherwise falls back to default.
   */
  const speakBn = useCallback(
    (text: string, onEnd?: () => void) => {
      speak(text, { lang: "bn", rate: 0.9, onEnd });
    },
    [speak]
  );

  /**
   * Play a sequence: Bangla thought → pause → English sentence.
   * Perfect for the "শোনো" (Listen) step.
   */
  const speakSequence = useCallback(
    (bnText: string, enText: string, onEnd?: () => void) => {
      speakBn(bnText, () => {
        // Small pause between languages
        setTimeout(() => {
          speakEn(enText, onEnd);
        }, 600);
      });
    },
    [speakBn, speakEn]
  );

  return {
    playing,
    speak,
    speakEn,
    speakBn,
    speakSequence,
    stop,
  };
}
