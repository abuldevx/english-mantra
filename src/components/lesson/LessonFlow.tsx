"use client";

import { useState, useMemo } from "react";
import type { Pattern, Confidence } from "@/types/pattern";
import { ProgressBar } from "./ProgressBar";
import { ListenStep } from "./ListenStep";
import { ThinkSayStep } from "./ThinkSayStep";
import { MistakesStep } from "./MistakesStep";
import { VariationsStep } from "./VariationsStep";
import { DialogueStep } from "./DialogueStep";
import { ResponseStep } from "./ResponseStep";
import { DoneStep } from "./DoneStep";

interface LessonFlowProps {
  pattern: Pattern;
  nextPattern?: { id: string; formula: string; patternName_bn: string } | null;
  onComplete: (confidence: Confidence) => void;
  onNextLesson?: (patternId: string) => void;
}

type Phase = "listen" | "think_say" | "mistakes" | "variations" | "dialogue" | "response" | "done";

interface Section {
  key: Phase;
  icon: string;
  label: string;
}

/** Build dynamic section list based on available pattern data */
function getActiveSections(pattern: Pattern): Section[] {
  const sections: Section[] = [
    { key: "listen", icon: "👂", label: "শোনো" },
    { key: "think_say", icon: "🗣️", label: "বলো" },
  ];

  if (pattern.commonMistakes && pattern.commonMistakes.length > 0) {
    sections.push({ key: "mistakes", icon: "🔍", label: "ভুল ধরো" });
  }
  if (pattern.variations && pattern.variations.length > 0) {
    sections.push({ key: "variations", icon: "🔄", label: "আরো রূপ" });
  }
  if (pattern.dialogueChains && pattern.dialogueChains.length > 0) {
    sections.push({ key: "dialogue", icon: "💬", label: "কথোপকথন" });
  }
  if (pattern.answerTemplates && pattern.answerTemplates.length > 0) {
    sections.push({ key: "response", icon: "🎤", label: "উত্তর দাও" });
  }

  sections.push({ key: "done", icon: "🎉", label: "পারো!" });
  return sections;
}

/**
 * Compute confidence from aggregated scores.
 * Say: 0-3 points (self-assessment)
 * Mistakes: 0-4 points (correct taps)
 * Total: 0-7 → Confidence 1-5
 */
function computeConfidence(sayCorrect: number, mistakeCorrect: number): Confidence {
  const total = sayCorrect + mistakeCorrect;
  const maxPoints = 3 + 4; // 7
  const ratio = total / maxPoints;

  if (ratio >= 0.85) return 5; // 6-7 correct
  if (ratio >= 0.7) return 4;  // 5 correct
  if (ratio >= 0.43) return 3; // 3-4 correct
  if (ratio >= 0.28) return 2; // 2 correct
  return 1;                     // 0-1 correct
}

/**
 * "বন্ধুর সাথে শেখা" — Deep lesson flow (A-Z mastery)
 *
 * 7 dynamic sections using ALL available pattern content:
 * 1. শোনো (Listen) — 3 examples, ~25s
 * 2. বলো (Say) — 3 examples with anticipation, ~45s
 * 3. ভুল ধরো (Spot Mistakes) — common mistakes drill, ~40s
 * 4. আরো রূপ (More Forms) — all variations, ~60s
 * 5. কথোপকথন (Conversation) — dialogue practice, ~60s
 * 6. উত্তর দাও (Respond) — answer template practice, ~45s
 * 7. পারো! (Mastery) — celebration + reference, ~30s
 *
 * Sections 3-6 are dynamic — only shown if pattern has the data.
 * Total: ~5-6 minutes for complete mastery.
 */
export function LessonFlow({ pattern, nextPattern, onComplete, onNextLesson }: LessonFlowProps) {
  const sections = useMemo(() => getActiveSections(pattern), [pattern]);

  const [currentPhaseKey, setCurrentPhaseKey] = useState<Phase>("listen");
  const [thinkSayResults, setThinkSayResults] = useState<boolean[]>([]);
  const [mistakeScore, setMistakeScore] = useState(0);
  const [completeCalled, setCompleteCalled] = useState(false);

  const currentIndex = sections.findIndex((s) => s.key === currentPhaseKey);

  /** Advance to the next section in the dynamic list */
  const goNextSection = () => {
    const nextIdx = currentIndex + 1;
    if (nextIdx < sections.length) {
      setCurrentPhaseKey(sections[nextIdx].key);
    }
  };

  /** Fire onComplete when we have enough scoring data (after Say step at minimum) */
  const fireComplete = (sayResults: boolean[], mistakes: number) => {
    if (completeCalled) return;
    const sayCorrect = sayResults.filter(Boolean).length;
    const confidence = computeConfidence(sayCorrect, mistakes);
    onComplete(confidence);
    setCompleteCalled(true);
  };

  return (
    <div className="relative">
      <ProgressBar sections={sections} currentIndex={currentIndex} />

      <div className="max-w-lg mx-auto">
        {currentPhaseKey === "listen" && (
          <ListenStep
            examples={pattern.examples.slice(0, 3)}
            onComplete={goNextSection}
          />
        )}

        {currentPhaseKey === "think_say" && (
          <ThinkSayStep
            examples={pattern.examples.slice(3, 6)}
            onComplete={(results) => {
              setThinkSayResults(results);
              // If no mistakes section, fire complete now
              if (!pattern.commonMistakes?.length) {
                fireComplete(results, 0);
              }
              goNextSection();
            }}
          />
        )}

        {currentPhaseKey === "mistakes" && (
          <MistakesStep
            mistakes={pattern.commonMistakes || []}
            bonusExamples={pattern.examples.slice(6, 8)}
            onComplete={(correctCount) => {
              setMistakeScore(correctCount);
              fireComplete(thinkSayResults, correctCount);
              goNextSection();
            }}
          />
        )}

        {currentPhaseKey === "variations" && (
          <VariationsStep
            variations={pattern.variations || []}
            onComplete={goNextSection}
          />
        )}

        {currentPhaseKey === "dialogue" && (
          <DialogueStep
            dialogues={pattern.dialogueChains || []}
            onComplete={goNextSection}
          />
        )}

        {currentPhaseKey === "response" && (
          <ResponseStep
            templates={pattern.answerTemplates || []}
            onComplete={goNextSection}
          />
        )}

        {currentPhaseKey === "done" && (
          <DoneStep
            pattern={pattern}
            results={thinkSayResults}
            mistakeScore={mistakeScore}
            nextPattern={nextPattern}
            onFinish={() => {
              if (typeof window !== "undefined") {
                window.location.href = "/";
              }
            }}
            onNextLesson={onNextLesson ? (id) => onNextLesson(id) : undefined}
          />
        )}
      </div>
    </div>
  );
}
