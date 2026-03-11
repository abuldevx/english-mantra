"use client";

import { useEffect, useState, useCallback } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import type { Pattern, PatternCategory, PatternExample, Confidence } from "@/types/pattern";
import { useProgress } from "@/contexts/ProgressContext";
import { useSettings } from "@/contexts/SettingsContext";
import { getCategoryIdBySlug } from "@/content/index";
import { selectExerciseType, type ExerciseType } from "@/lib/exerciseSelector";
import { getAllExamples } from "@/lib/patternHelpers";
import ExerciseContainer from "@/components/practice/ExerciseContainer";

interface PracticeItem {
  pattern: Pattern;
  example: PatternExample;
  exerciseType: ExerciseType;
}

export default function CategoryPracticePage() {
  const params = useParams();
  const slug = params.slug as string;
  const categoryId = getCategoryIdBySlug(slug);

  const [category, setCategory] = useState<PatternCategory | null>(null);
  const [items, setItems] = useState<PracticeItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showConfidence, setShowConfidence] = useState(false);
  const [lastCorrect, setLastCorrect] = useState(false);
  const { progress, markPatternPracticed } = useProgress();
  const { settings } = useSettings();

  useEffect(() => {
    async function load() {
      if (!categoryId) {
        setLoading(false);
        return;
      }
      try {
        const mod = await import(`@/content/categories/${categoryId}`);
        const cat = mod[`category${categoryId}`] as PatternCategory;
        setCategory(cat);
        const practiceItems: PracticeItem[] = cat.patterns
          .filter((p) => getAllExamples(p).length > 0)
          .map((pattern) => {
            const allExamples = getAllExamples(pattern);
            const exIdx = Math.floor(Math.random() * allExamples.length);
            return {
              pattern,
              example: allExamples[exIdx],
              exerciseType: selectExerciseType(pattern, settings.practiceLevel),
            };
          });
        setItems(practiceItems.sort(() => Math.random() - 0.5));
      } catch {
        // not available
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [categoryId, settings.practiceLevel]);

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
        setCompleted(true);
      } else {
        setCurrentIndex((i) => i + 1);
      }
    },
    [currentIndex, currentItem, items.length, markPatternPracticed]
  );

  if (loading) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-6">
        <div className="animate-pulse h-48 bg-muted-bg rounded-xl" />
      </div>
    );
  }

  if (!category || items.length === 0) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-6 text-center">
        <p className="text-muted">Content not available yet for this category.</p>
        <Link href="/categories" className="text-primary text-sm mt-4 inline-block hover:underline">
          Browse Categories
        </Link>
      </div>
    );
  }

  if (completed) {
    const percentage = Math.round((score / items.length) * 100);
    return (
      <div className="mx-auto max-w-4xl px-4 py-6 text-center">
        <p className="text-6xl mb-4 animate-celebrate-bounce">&#127881;</p>
        <h1 className="text-2xl font-bold mb-2">Category Complete!</h1>
        <p className="text-muted font-bangla mb-1">বিভাগ সম্পন্ন!</p>
        <p className="text-muted mb-2">{category.name}</p>
        <p className="text-muted font-bangla text-sm mb-4">{category.name_bn}</p>

        {/* Stats card */}
        <div className="inline-flex items-center gap-4 p-4 rounded-xl bg-card border border-card-border mb-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">{score}</div>
            <div className="text-xs text-muted">Correct</div>
            <div className="text-[10px] text-muted font-bangla">সঠিক</div>
          </div>
          <div className="w-px h-10 bg-card-border" />
          <div className="text-center">
            <div className="text-2xl font-bold">{items.length}</div>
            <div className="text-xs text-muted">Total</div>
            <div className="text-[10px] text-muted font-bangla">মোট</div>
          </div>
          <div className="w-px h-10 bg-card-border" />
          <div className="text-center">
            <div className="text-2xl font-bold text-success">{percentage}%</div>
            <div className="text-xs text-muted">Score</div>
            <div className="text-[10px] text-muted font-bangla">স্কোর</div>
          </div>
        </div>

        {/* Visual percentage bar */}
        <div className="max-w-xs mx-auto mb-4">
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

        {/* Streak */}
        {progress.currentStreak > 0 && (
          <div className="mb-6 animate-celebrate">
            <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-warning-light border border-warning/30 text-sm font-medium">
              &#128293; Streak: {progress.currentStreak} day{progress.currentStreak > 1 ? "s" : ""}!
              <span className="font-bangla text-xs text-muted">({progress.currentStreak} দিন)</span>
            </span>
          </div>
        )}

        <div className="flex gap-3 justify-center">
          <Link
            href={`/practice/${slug}`}
            className="px-5 py-2.5 rounded-lg border border-card-border text-sm hover:bg-card transition-colors font-medium"
          >
            Practice More
          </Link>
          <Link
            href="/"
            className="px-5 py-2.5 rounded-lg border border-card-border text-sm hover:bg-card transition-colors font-medium"
          >
            Go Home
          </Link>
          <Link
            href={`/categories/${slug}`}
            className="px-5 py-2.5 rounded-lg bg-primary text-white text-sm hover:bg-primary/90 transition-colors font-medium"
          >
            Back to Category
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-6">
      {/* Progress */}
      <div className="flex items-center gap-3 mb-4">
        <Link href={`/categories/${slug}`} className="text-muted hover:text-foreground text-sm">
          {category.name}
        </Link>
        <div className="flex-1 h-2 rounded-full bg-muted-bg overflow-hidden">
          <div
            className="h-full rounded-full bg-primary transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / items.length) * 100}%` }}
          />
        </div>
        <span className="text-sm text-muted">{currentIndex + 1}/{items.length}</span>
      </div>

      {/* Exercise */}
      <ExerciseContainer
        key={currentIndex}
        pattern={currentItem.pattern}
        category={category}
        example={currentItem.example}
        exerciseType={currentItem.exerciseType}
        practiceLevel={settings.practiceLevel}
        onComplete={handleExerciseComplete}
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
