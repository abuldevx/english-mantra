"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import type { Pattern, PatternCategory, PatternExample, Confidence } from "@/types/pattern";
import { useProgress } from "@/contexts/ProgressContext";
import { useSettings } from "@/contexts/SettingsContext";
import { categoryMeta, getCategoryImportSlug } from "@/content/index";
import { selectExerciseType, type ExerciseType } from "@/lib/exerciseSelector";
import { getAllExamplesWithContext, type VariationInfo } from "@/lib/patternHelpers";
import { getMasteryLevel, masteryConfig } from "@/lib/mastery";
import ExerciseContainer from "@/components/practice/ExerciseContainer";

interface PracticeItem {
  pattern: Pattern;
  category: PatternCategory;
  example: PatternExample;
  exerciseType: ExerciseType;
  variationInfo?: VariationInfo;
}

export default function ReviewPage() {
  const { progress, markPatternPracticed, updateStreak } = useProgress();
  const { settings } = useSettings();

  // Practice mode state
  const [practicing, setPracticing] = useState(false);
  const [items, setItems] = useState<PracticeItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [showConfidence, setShowConfidence] = useState(false);
  const [lastCorrect, setLastCorrect] = useState(false);

  const now = Date.now();
  const duePatterns = Object.entries(progress.completedPatterns)
    .filter(([, p]) => p.nextReviewDate <= now)
    .sort(([, a], [, b]) => a.confidence - b.confidence); // weakest first

  const upcomingPatterns = Object.entries(progress.completedPatterns)
    .filter(([, p]) => p.nextReviewDate > now)
    .sort(([, a], [, b]) => a.nextReviewDate - b.nextReviewDate)
    .slice(0, 10);

  const startReview = useCallback(async () => {
    setLoading(true);
    setPracticing(true);

    const dueIds = new Set(duePatterns.map(([id]) => id));
    const practiceItems: PracticeItem[] = [];

    const allCategoryIds = categoryMeta.map((c) => c.id);
    for (const catId of allCategoryIds) {
      try {
        const mod = await import(`@/content/categories/${getCategoryImportSlug(catId)}`);
        const cat = mod[`category${catId}`] as PatternCategory;
        for (const pattern of cat.patterns) {
          if (dueIds.has(pattern.id)) {
            const allWithContext = getAllExamplesWithContext(pattern);
            if (allWithContext.length > 0) {
              const picked = allWithContext[Math.floor(Math.random() * allWithContext.length)];
              practiceItems.push({
                pattern,
                category: cat,
                example: picked.example,
                exerciseType: selectExerciseType(pattern, settings.practiceLevel),
                variationInfo: picked.variation,
              });
            }
            dueIds.delete(pattern.id);
          }
        }
      } catch {
        // Category not available
      }
      if (dueIds.size === 0) break;
    }

    // Sort by confidence (weakest first)
    practiceItems.sort((a, b) => {
      const confA = progress.completedPatterns[a.pattern.id]?.confidence ?? 3;
      const confB = progress.completedPatterns[b.pattern.id]?.confidence ?? 3;
      return confA - confB;
    });

    setItems(practiceItems);
    setCurrentIndex(0);
    setScore(0);
    setCompleted(false);
    setLoading(false);
  }, [duePatterns, settings.practiceLevel, progress.completedPatterns]);

  const currentItem = items[currentIndex];

  const handleExerciseComplete = useCallback((correct: boolean) => {
    if (correct) setScore((s) => s + 1);
    setLastCorrect(correct);
    setShowConfidence(true);
  }, []);

  const handleNext = useCallback(
    (confidence: Confidence) => {
      markPatternPracticed(currentItem.pattern.id, confidence);
      setShowConfidence(false);

      if (currentIndex + 1 >= items.length) {
        updateStreak();
        setCompleted(true);
      } else {
        setCurrentIndex((i) => i + 1);
      }
    },
    [currentIndex, items.length, currentItem, markPatternPracticed, updateStreak]
  );

  // Practice mode: loading
  if (practicing && loading) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-6">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-muted-bg rounded w-1/2" />
          <div className="h-48 bg-muted-bg rounded-xl" />
        </div>
      </div>
    );
  }

  // Practice mode: completed
  if (practicing && completed) {
    const percentage = items.length > 0 ? Math.round((score / items.length) * 100) : 0;
    return (
      <div className="mx-auto max-w-4xl px-4 py-6 text-center">
        <p className="text-6xl mb-4 animate-celebrate-bounce">&#127881;</p>
        <h1 className="text-2xl font-bold mb-1 font-bangla">রিভিউ সম্পন্ন!</h1>
        <p className="text-sm text-muted mb-2">Review Complete!</p>
        <p className="text-muted mb-6">
          You reviewed {items.length} pattern{items.length !== 1 ? "s" : ""}
        </p>

        <div className="inline-flex items-center gap-4 p-4 rounded-xl bg-card border border-card-border mb-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">{score}</div>
            <div className="text-xs text-muted">Correct</div>
            <div className="text-[10px] text-muted font-bangla">সঠিক</div>
          </div>
          <div className="w-px h-10 bg-card-border" />
          <div className="text-center">
            <div className="text-2xl font-bold">{items.length}</div>
            <div className="text-xs text-muted">Reviewed</div>
            <div className="text-[10px] text-muted font-bangla">রিভিউ</div>
          </div>
          <div className="w-px h-10 bg-card-border" />
          <div className="text-center">
            <div className="text-2xl font-bold text-success">{percentage}%</div>
            <div className="text-xs text-muted">Score</div>
            <div className="text-[10px] text-muted font-bangla">স্কোর</div>
          </div>
        </div>

        <div className="max-w-xs mx-auto mb-6">
          <div className="h-3 rounded-full bg-muted-bg overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-1000 ease-out"
              style={{
                width: `${percentage}%`,
                background: percentage >= 80 ? 'var(--success)' : percentage >= 50 ? 'var(--warning)' : 'var(--danger)',
              }}
            />
          </div>
        </div>

        <div className="flex gap-3 justify-center">
          <button
            onClick={() => { setPracticing(false); setCompleted(false); }}
            className="px-5 py-2.5 rounded-lg border border-card-border text-sm hover:bg-card transition-colors font-medium"
          >
            <span className="font-bangla">রিভিউতে ফিরো</span>
            <span className="block text-[10px] text-muted">Back to Review</span>
          </button>
          <Link
            href="/"
            className="px-5 py-2.5 rounded-lg border border-card-border text-sm hover:bg-card transition-colors font-medium"
          >
            <span className="font-bangla">হোমে যাও</span>
            <span className="block text-[10px] text-muted">Go Home</span>
          </Link>
          <Link
            href="/progress"
            className="px-5 py-2.5 rounded-lg bg-primary text-white text-sm hover:bg-primary/90 transition-colors font-medium"
          >
            <span className="font-bangla">অগ্রগতি দেখো</span>
            <span className="block text-[10px] text-white/70">View Progress</span>
          </Link>
        </div>
      </div>
    );
  }

  // Practice mode: exercising
  if (practicing && items.length > 0 && currentItem) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-6">
        {/* Progress bar */}
        <div className="flex items-center gap-3 mb-6">
          <div className="flex-1 h-2 rounded-full bg-muted-bg overflow-hidden">
            <div
              className="h-full rounded-full bg-primary transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / items.length) * 100}%` }}
            />
          </div>
          <span className="text-sm text-muted whitespace-nowrap">
            {currentIndex + 1}/{items.length}
          </span>
        </div>

        {/* Exercise */}
        <ExerciseContainer
          key={currentIndex}
          pattern={currentItem.pattern}
          category={currentItem.category}
          example={currentItem.example}
          exerciseType={currentItem.exerciseType}
          practiceLevel={settings.practiceLevel}
          onComplete={handleExerciseComplete}
          variationInfo={currentItem.variationInfo}
        />

        {/* Confidence rating */}
        {showConfidence && (
          <div className="mt-4 p-4 rounded-xl border border-card-border bg-card">
            <p className="text-xs text-muted mb-1">
              {lastCorrect ? "Great! " : ""}How well did you know this?
            </p>
            <p className="text-[10px] text-muted font-bangla mb-3">
              {lastCorrect ? "দারুণ! " : ""}তুমি কতটা ভালো জানতে?
            </p>
            <div className="grid grid-cols-4 gap-2">
              {([
                { level: 1 as Confidence, label: "Again", label_bn: "আবার", emoji: "😰", interval: "1 day", color: "border-danger hover:bg-danger/10 text-danger" },
                { level: 2 as Confidence, label: "Hard", label_bn: "কঠিন", emoji: "😐", interval: "3 days", color: "border-warning hover:bg-warning/10 text-warning" },
                { level: 4 as Confidence, label: "Good", label_bn: "ভালো", emoji: "🙂", interval: "7 days", color: "border-primary hover:bg-primary/10 text-primary" },
                { level: 5 as Confidence, label: "Easy", label_bn: "সহজ", emoji: "😊", interval: "14 days", color: "border-success hover:bg-success/10 text-success" },
              ] as const).map(({ level, label, label_bn, emoji, interval, color }) => (
                <button
                  key={level}
                  onClick={() => handleNext(level)}
                  className={`flex flex-col items-center gap-1 py-3 min-h-[48px] rounded-xl border-2 ${color} bg-card transition-all hover:scale-[1.03] active:scale-95`}
                >
                  <span className="text-xl leading-none">{emoji}</span>
                  <span className="text-xs font-medium">{label}</span>
                  <span className="text-[10px] font-bangla opacity-70">{label_bn}</span>
                  <span className="text-[9px] opacity-50">{interval}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  // Browse mode (default)
  return (
    <div className="mx-auto max-w-4xl px-4 py-6">
      <h1 className="text-2xl font-bold mb-1 font-bangla">রিভিউ করার সময় হয়েছে</h1>
      <p className="text-sm text-muted mb-1">Review Due Patterns</p>
      <p className="text-muted text-sm mb-6 font-bangla">
        স্পেসড রিপিটিশন অনুযায়ী রিভিউ করার সময় হয়েছে
      </p>

      {/* Review All CTA */}
      {duePatterns.length > 0 && (
        <button
          onClick={startReview}
          className="w-full mb-6 p-4 rounded-xl bg-primary text-white hover:bg-primary/90 transition-colors"
        >
          <div className="flex items-center justify-between">
            <div className="text-left">
              <p className="font-bold">
                সব রিভিউ করো (Review All)
              </p>
              <p className="text-sm opacity-80 font-bangla">
                {duePatterns.length}টি প্যাটার্ন
              </p>
            </div>
            <span className="text-2xl">&#8594;</span>
          </div>
        </button>
      )}

      {duePatterns.length === 0 && upcomingPatterns.length === 0 && (
        <div className="text-center py-16 text-muted">
          <p className="text-4xl mb-3">&#127919;</p>
          <p className="text-lg mb-1 font-bangla">কোনো প্যাটার্ন রিভিউ করার নেই</p>
          <p className="text-sm text-muted mb-1">No patterns to review</p>
          <p className="text-sm font-bangla mb-1">আগে কিছু প্যাটার্ন অনুশীলন করো, তারপর রিভিউ করতে আসো!</p>
          <p className="text-xs text-muted">Practice some patterns first, then come back for review!</p>
          <Link href="/practice/daily" className="text-primary text-sm mt-4 inline-block hover:underline font-bangla">
            দৈনিক অনুশীলন শুরু করো
            <span className="ml-1 text-xs text-muted">Start Daily Practice</span>
          </Link>
        </div>
      )}

      {duePatterns.length > 0 && (
        <section className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-danger animate-pulse" />
            <h2 className="font-bold font-bangla">এখনই রিভিউ করো ({duePatterns.length})</h2>
            <span className="text-xs text-muted">Due Now</span>
          </div>
          <div className="space-y-2">
            {duePatterns.map(([id, prog]) => {
              const level = getMasteryLevel(prog);
              const mConfig = masteryConfig[level];
              return (
                <Link
                  key={id}
                  href={`/pattern/${id}`}
                  className="flex items-center justify-between p-3 rounded-lg border border-card-border bg-card hover:border-primary/30 transition-all"
                >
                  <div className="flex items-center gap-2">
                    <span className={mConfig.color}>{mConfig.icon}</span>
                    <div>
                      <span className="font-mono text-sm">{id}</span>
                      <span className="text-xs text-muted ml-2">
                        Last: {new Date(prog.lastPracticed).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs text-muted font-bangla">{mConfig.label_bn}</span>
                </Link>
              );
            })}
          </div>
        </section>
      )}

      {upcomingPatterns.length > 0 && (
        <section>
          <h2 className="font-bold mb-1 font-bangla">আসছে</h2>
          <p className="text-xs text-muted mb-3">Coming Up</p>
          <div className="space-y-2">
            {upcomingPatterns.map(([id, prog]) => {
              const daysUntil = Math.ceil((prog.nextReviewDate - now) / 86400000);
              const level = getMasteryLevel(prog);
              const mConfig = masteryConfig[level];
              return (
                <div
                  key={id}
                  className="flex items-center justify-between p-3 rounded-lg border border-card-border bg-card"
                >
                  <div className="flex items-center gap-2">
                    <span className={mConfig.color}>{mConfig.icon}</span>
                    <div>
                      <span className="font-mono text-sm">{id}</span>
                      <span className="text-xs text-muted ml-2">
                        in {daysUntil} day{daysUntil !== 1 ? "s" : ""}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs text-muted font-bangla">{mConfig.label_bn}</span>
                </div>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
}
