"use client";

import { useState } from "react";
import type { PatternExample } from "@/types/pattern";
import { useSettings } from "@/contexts/SettingsContext";

const topicIcons: Record<string, string> = {
  daily_life: "🏠",
  food: "🍚",
  health: "🏥",
  work: "💼",
  travel: "🚌",
  relationships: "👨‍👩‍👦",
  shopping: "🏪",
  education: "📚",
  religion: "🕌",
  finance: "💰",
  emergency: "🚨",
};

const stageConfig: Record<number, { color: string; label: string; labelBn: string }> = {
  1: { color: "bg-success/20 text-success", label: "Memorize", labelBn: "মুখস্থ" },
  2: { color: "bg-warning/20 text-warning", label: "Modify", labelBn: "পরিবর্তন" },
  3: { color: "bg-primary/20 text-primary", label: "Create", labelBn: "তৈরি করো" },
};

interface PatternExamplesProps {
  examples: PatternExample[];
  initialCount?: number;
}

export function PatternExamples({ examples, initialCount = 5 }: PatternExamplesProps) {
  const { settings } = useSettings();
  const [showAll, setShowAll] = useState(false);
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  // Auto-expand the first miniStory so users learn they can tap
  const firstStoryIndex = examples.findIndex((e) => e.miniStory);
  const [expandedStories, setExpandedStories] = useState<Set<number>>(
    () => new Set(firstStoryIndex >= 0 ? [firstStoryIndex] : [])
  );

  // Get unique topic areas for filter chips
  const topicAreas = Array.from(
    new Set(examples.map((e) => e.topicArea).filter(Boolean))
  ) as string[];

  // Filter examples by topic area
  const filteredExamples = activeFilter
    ? examples.filter((e) => e.topicArea === activeFilter)
    : examples;

  const visibleExamples = showAll
    ? filteredExamples
    : filteredExamples.slice(0, initialCount);

  const toggleStory = (index: number) => {
    setExpandedStories((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  return (
    <div className="space-y-3">
      {/* Topic Area Filter Chips */}
      {topicAreas.length > 1 && (
        <div className="flex flex-wrap gap-1.5 mb-2">
          <button
            onClick={() => setActiveFilter(null)}
            className={`px-2.5 py-1 rounded-full text-xs font-medium transition-colors ${
              activeFilter === null
                ? "bg-primary text-white"
                : "bg-muted-bg text-muted hover:bg-primary-light"
            }`}
          >
            All ({examples.length})
          </button>
          {topicAreas.map((topic) => {
            const count = examples.filter((e) => e.topicArea === topic).length;
            return (
              <button
                key={topic}
                onClick={() => setActiveFilter(activeFilter === topic ? null : topic)}
                className={`px-2.5 py-1 rounded-full text-xs font-medium transition-colors ${
                  activeFilter === topic
                    ? "bg-primary text-white"
                    : "bg-muted-bg text-muted hover:bg-primary-light"
                }`}
              >
                {topicIcons[topic] || "📌"} {topic.replace("_", " ")} ({count})
              </button>
            );
          })}
        </div>
      )}

      {/* Stage Legend */}
      {examples.some((e) => e.stage) && (
        <div className="flex items-center gap-3 text-[10px] text-muted">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-success/20" />
            <span className="font-bangla">মুখস্থ</span>
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-warning/20" />
            <span className="font-bangla">পরিবর্তন</span>
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-primary/20" />
            <span className="font-bangla">তৈরি করো</span>
          </span>
        </div>
      )}

      {/* Examples List */}
      {visibleExamples.map((example, i) => {
        const globalIndex = examples.indexOf(example);
        const stage = example.stage ? stageConfig[example.stage] : null;
        const hasStory = !!example.miniStory;
        const isStoryExpanded = expandedStories.has(globalIndex);

        return (
          <div
            key={globalIndex}
            className="rounded-lg bg-muted-bg border border-card-border overflow-hidden"
          >
            {/* MiniStory (collapsible) */}
            {hasStory && isStoryExpanded && (
              <div className="px-3 pt-2.5 pb-2 bg-accent-light/50 border-b border-card-border">
                <p className="font-bangla text-sm leading-relaxed">
                  <span className="mr-1">{example.miniStory!.icon}</span>
                  {example.miniStory!.situation_bn}
                </p>
              </div>
            )}

            <div className="p-3">
              <div className="flex items-start gap-2">
                {/* Number + Stage badge */}
                <div className="flex items-center gap-1 shrink-0 mt-0.5">
                  <span className="text-xs text-muted font-mono">
                    {globalIndex + 1}.
                  </span>
                  {stage && (
                    <span
                      className={`w-2 h-2 rounded-full ${stage.color.split(" ")[0]}`}
                      title={`${stage.labelBn} (${stage.label})`}
                    />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <p className="font-medium">{example.en}</p>
                  {settings.showBangla && (
                    <>
                      <p className="font-bangla text-muted mt-0.5">{example.bn}</p>
                      {example.pronunciation_bn && (
                        <button
                          onClick={() => {
                            if ("speechSynthesis" in window) {
                              window.speechSynthesis.cancel();
                              const u = new SpeechSynthesisUtterance(example.en);
                              u.lang = "en-US";
                              u.rate = 0.8;
                              window.speechSynthesis.speak(u);
                            }
                          }}
                          className="font-bangla text-xs text-primary/70 mt-0.5 italic hover:text-primary transition-colors cursor-pointer text-left"
                        >
                          🗣️ {example.pronunciation_bn}
                        </button>
                      )}
                    </>
                  )}
                </div>

                {/* Action buttons */}
                <div className="flex items-center gap-1 shrink-0">
                  {hasStory && (
                    <button
                      onClick={() => toggleStory(globalIndex)}
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm transition-colors ${
                        isStoryExpanded
                          ? "bg-accent-light text-accent"
                          : "text-muted hover:text-accent hover:bg-accent-light"
                      }`}
                      title="Show story context"
                      aria-label="গল্প দেখো (Show story)"
                      aria-expanded={isStoryExpanded}
                    >
                      {example.miniStory!.icon}
                    </button>
                  )}
                  <PatternAudioButton text={example.en} />
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Show more / Topic filter info */}
      <div className="flex items-center justify-between">
        {filteredExamples.length > initialCount && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-sm text-primary hover:underline font-medium"
          >
            {showAll
              ? "Show less"
              : `Show all ${filteredExamples.length} examples`}
          </button>
        )}
        {activeFilter && (
          <button
            onClick={() => setActiveFilter(null)}
            className="text-xs text-muted hover:text-foreground"
          >
            Clear filter
          </button>
        )}
      </div>
    </div>
  );
}

function PatternAudioButton({ text }: { text: string }) {
  const [playing, setPlaying] = useState(false);

  const speak = () => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "en-US";
      utterance.rate = 0.9;
      utterance.onstart = () => setPlaying(true);
      utterance.onend = () => setPlaying(false);
      utterance.onerror = () => setPlaying(false);
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
      className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
        playing
          ? "bg-primary/20 text-primary animate-pulse"
          : "text-muted hover:text-primary hover:bg-primary-light"
      }`}
      title="Listen"
      aria-label="শোনো (Listen)"
    >
      {playing ? "🔈" : "🔊"}
    </button>
  );
}
