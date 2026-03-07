"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import type { Pattern, PatternCategory } from "@/types/pattern";
import { PatternFormula } from "@/components/patterns/PatternFormula";
import { PatternExamples } from "@/components/patterns/PatternExamples";
import { DifficultyBadge } from "@/components/patterns/DifficultyBadge";
import { FormalityBadge } from "@/components/patterns/FormalityBadge";
import { BanglaStructureMap } from "@/components/patterns/BanglaStructureMap";
import { useProgress } from "@/contexts/ProgressContext";
import { useSettings } from "@/contexts/SettingsContext";

export default function PatternDetailPage() {
  const params = useParams();
  const patternId = params.id as string;
  const [pattern, setPattern] = useState<Pattern | null>(null);
  const [category, setCategory] = useState<PatternCategory | null>(null);
  const [loading, setLoading] = useState(true);
  const { toggleBookmark, isBookmarked } = useProgress();
  const { settings } = useSettings();

  useEffect(() => {
    async function load() {
      // Extract category ID from pattern ID (e.g., "A1.1" -> "A1")
      const dotIndex = patternId.lastIndexOf(".");
      if (dotIndex === -1) {
        setLoading(false);
        return;
      }
      const categoryId = patternId.substring(0, dotIndex);

      try {
        const mod = await import(`@/content/categories/${categoryId}`);
        const cat = mod[`category${categoryId}`] as PatternCategory;
        setCategory(cat);
        const found = cat.patterns.find((p) => p.id === patternId);
        setPattern(found || null);
      } catch {
        setPattern(null);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [patternId]);

  if (loading) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-6">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-muted-bg rounded w-2/3" />
          <div className="h-4 bg-muted-bg rounded w-1/2" />
          <div className="h-32 bg-muted-bg rounded-xl mt-6" />
        </div>
      </div>
    );
  }

  if (!pattern || !category) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-6 text-center">
        <p className="text-muted text-lg">Pattern not found</p>
        <Link href="/categories" className="text-primary text-sm mt-4 inline-block hover:underline">
          Browse Categories
        </Link>
      </div>
    );
  }

  const bookmarked = isBookmarked(patternId);

  return (
    <div className="mx-auto max-w-4xl px-4 py-6">
      {/* Breadcrumb */}
      <nav className="text-sm text-muted mb-4">
        <Link href="/" className="hover:text-foreground">Home</Link>
        <span className="mx-2">/</span>
        <Link href={`/categories/${category.slug}`} className="hover:text-foreground">
          {category.id}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">{pattern.id}</span>
      </nav>

      {/* Pattern Header */}
      <div className="mb-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono text-muted">{pattern.id}</span>
              <DifficultyBadge difficulty={pattern.difficulty} />
              <FormalityBadge formality={pattern.formality} />
            </div>
            <h1 className="text-lg font-bold mb-1">{pattern.patternName}</h1>
            {settings.showBangla && (
              <p className="font-bangla text-muted">{pattern.patternName_bn}</p>
            )}
          </div>
          <button
            onClick={() => toggleBookmark(patternId)}
            className={`text-xl p-2 rounded-lg transition-colors ${
              bookmarked
                ? "text-amber-500 bg-amber-50 dark:bg-amber-900/20"
                : "text-muted hover:text-amber-500 hover:bg-card"
            }`}
            title={bookmarked ? "Remove bookmark" : "Add bookmark"}
          >
            {bookmarked ? "★" : "☆"}
          </button>
        </div>
      </div>

      {/* Formula */}
      <div className="p-4 rounded-xl border border-primary/20 bg-primary-light mb-6">
        <div className="text-xs font-medium text-primary mb-2">Pattern Formula</div>
        <PatternFormula
          formula={pattern.formula}
          formula_bn={pattern.formula_bn}
          size="lg"
        />
      </div>

      {/* Audio */}
      <div className="mb-6">
        <AudioPlayer text={pattern.formula.replace(/\[.*?\]/g, "something")} />
      </div>

      {/* Bangla Structure Map */}
      {pattern.banglaStructureMap && (
        <div className="mb-6">
          <BanglaStructureMap mapping={pattern.banglaStructureMap} />
        </div>
      )}

      {/* Slots */}
      <div className="mb-6">
        <h2 className="text-sm font-bold mb-3">Slots</h2>
        <div className="space-y-2">
          {pattern.slots.map((slot) => (
            <div key={slot.name} className="p-3 rounded-lg bg-card border border-card-border">
              <div className="flex items-center gap-2 mb-1">
                <span className="slot text-xs">{slot.name}</span>
                <span className="text-xs text-muted">{slot.description}</span>
              </div>
              {settings.showBangla && (
                <p className="font-bangla text-xs text-muted mb-1">{slot.description_bn}</p>
              )}
              <div className="flex flex-wrap gap-1.5 mt-2">
                {slot.examples.map((ex) => (
                  <span
                    key={ex}
                    className="text-xs px-2 py-0.5 rounded bg-muted-bg text-muted"
                  >
                    {ex}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Usage Note */}
      {pattern.usageNote && (
        <div className="mb-6 p-3 rounded-lg bg-warning-light border border-card-border">
          <div className="text-xs font-medium text-warning mb-1">Usage Note</div>
          <p className="text-sm">{pattern.usageNote}</p>
          {settings.showBangla && pattern.usageNote_bn && (
            <p className="font-bangla text-sm text-muted mt-1">{pattern.usageNote_bn}</p>
          )}
        </div>
      )}

      {/* Examples */}
      <div className="mb-6">
        <h2 className="text-sm font-bold mb-3">
          Examples ({pattern.examples.length})
        </h2>
        <PatternExamples examples={pattern.examples} initialCount={10} />
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-4 border-t border-card-border">
        <Link
          href={`/categories/${category.slug}`}
          className="text-sm text-primary hover:underline"
        >
          Back to {category.name}
        </Link>
        <Link
          href={`/practice/${category.slug}`}
          className="px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-colors"
        >
          Practice This Category
        </Link>
      </div>
    </div>
  );
}

function AudioPlayer({ text }: { text: string }) {
  const [playing, setPlaying] = useState(false);

  const speak = () => {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.rate = 0.85;
    utterance.onstart = () => setPlaying(true);
    utterance.onend = () => setPlaying(false);
    utterance.onerror = () => setPlaying(false);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <button
      onClick={speak}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg border text-sm font-medium transition-colors ${
        playing
          ? "border-primary bg-primary-light text-primary"
          : "border-card-border bg-card text-muted hover:text-foreground"
      }`}
    >
      <span>{playing ? "🔊" : "🔈"}</span>
      <span>{playing ? "Playing..." : "Listen to pronunciation"}</span>
    </button>
  );
}
