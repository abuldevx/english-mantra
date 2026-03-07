"use client";

import { useState } from "react";
import type { PatternExample } from "@/types/pattern";
import { useSettings } from "@/contexts/SettingsContext";

interface PatternExamplesProps {
  examples: PatternExample[];
  initialCount?: number;
}

export function PatternExamples({ examples, initialCount = 5 }: PatternExamplesProps) {
  const { settings } = useSettings();
  const [showAll, setShowAll] = useState(false);

  const visibleExamples = showAll ? examples : examples.slice(0, initialCount);

  return (
    <div className="space-y-2">
      {visibleExamples.map((example, i) => (
        <div
          key={i}
          className="p-3 rounded-lg bg-muted-bg border border-card-border"
        >
          <div className="flex items-start gap-2">
            <span className="text-xs text-muted font-mono mt-0.5 shrink-0">
              {i + 1}.
            </span>
            <div className="flex-1">
              <p className="font-medium">{example.en}</p>
              {settings.showBangla && (
                <p className="font-bangla text-muted mt-0.5">{example.bn}</p>
              )}
            </div>
            <PatternAudioButton text={example.en} />
          </div>
        </div>
      ))}

      {examples.length > initialCount && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-sm text-primary hover:underline font-medium"
        >
          {showAll
            ? "Show less"
            : `Show all ${examples.length} examples`}
        </button>
      )}
    </div>
  );
}

function PatternAudioButton({ text }: { text: string }) {
  const speak = () => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "en-US";
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        speak();
      }}
      className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-muted hover:text-primary hover:bg-primary-light transition-colors"
      title="Listen"
    >
      🔊
    </button>
  );
}
