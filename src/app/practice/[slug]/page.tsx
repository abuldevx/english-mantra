"use client";

import { useEffect, useState, useCallback } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import type { Pattern, PatternCategory, PatternExample, Confidence } from "@/types/pattern";
import { useProgress } from "@/contexts/ProgressContext";
import { useSettings } from "@/contexts/SettingsContext";
import { getCategoryIdBySlug } from "@/content/index";
import { selectExerciseType, type ExerciseType } from "@/lib/exerciseSelector";
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
  const { markPatternPracticed } = useProgress();
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
          .filter((p) => p.examples.length > 0)
          .map((pattern) => {
            const exIdx = Math.floor(Math.random() * pattern.examples.length);
            return {
              pattern,
              example: pattern.examples[exIdx],
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
    return (
      <div className="mx-auto max-w-4xl px-4 py-6 text-center">
        <p className="text-5xl mb-4">🎉</p>
        <h1 className="text-2xl font-bold mb-2">Category Complete!</h1>
        <p className="text-muted mb-2">{category.name}</p>
        <p className="text-muted text-sm mb-6">
          Score: {score}/{items.length} ({Math.round((score / items.length) * 100)}%)
        </p>
        <div className="flex gap-3 justify-center">
          <Link href={`/categories/${slug}`} className="px-4 py-2 rounded-lg border border-card-border text-sm">
            Back to Category
          </Link>
          <Link href="/practice" className="px-4 py-2 rounded-lg bg-primary text-white text-sm">
            More Practice
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
          <p className="text-xs text-muted mb-2">
            {lastCorrect ? "Great! " : ""}How well did you know this?
          </p>
          <div className="flex gap-2">
            {([
              { level: 1 as Confidence, label: "Again", color: "bg-danger" },
              { level: 2 as Confidence, label: "Hard", color: "bg-warning" },
              { level: 3 as Confidence, label: "OK", color: "bg-amber-500" },
              { level: 4 as Confidence, label: "Good", color: "bg-success" },
              { level: 5 as Confidence, label: "Easy", color: "bg-primary" },
            ] as const).map(({ level, label, color }) => (
              <button
                key={level}
                onClick={() => handleNext(level)}
                className={`flex-1 py-2 rounded-lg text-white text-xs font-medium ${color} hover:opacity-90 transition-opacity`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
