"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import type { Pattern, PatternCategory, PatternExample } from "@/types/pattern";
import { useProgress } from "@/contexts/ProgressContext";
import { useSettings } from "@/contexts/SettingsContext";
import type { Confidence } from "@/types/pattern";
import { categoryMeta } from "@/content/index";
import { selectExerciseType, type ExerciseType } from "@/lib/exerciseSelector";
import ExerciseContainer from "@/components/practice/ExerciseContainer";

interface PracticeItem {
  pattern: Pattern;
  category: PatternCategory;
  example: PatternExample;
  exerciseType: ExerciseType;
}

export default function DailyPracticePage() {
  const [items, setItems] = useState<PracticeItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);
  const [completed, setCompleted] = useState(false);
  const [showConfidence, setShowConfidence] = useState(false);
  const [lastCorrect, setLastCorrect] = useState(false);
  const { markPatternPracticed, updateStreak } = useProgress();
  const { settings } = useSettings();

  useEffect(() => {
    async function loadPractice() {
      const practiceItems: PracticeItem[] = [];

      // Load from ALL categories
      const allCategoryIds = categoryMeta.map((c) => c.id);

      for (const catId of allCategoryIds) {
        try {
          const mod = await import(`@/content/categories/${catId}`);
          const cat = mod[`category${catId}`] as PatternCategory;
          for (const pattern of cat.patterns) {
            if (pattern.examples.length > 0) {
              const randomExample = Math.floor(
                Math.random() * pattern.examples.length
              );
              practiceItems.push({
                pattern,
                category: cat,
                example: pattern.examples[randomExample],
                exerciseType: selectExerciseType(pattern, settings.practiceLevel),
              });
            }
          }
        } catch {
          // Category not available yet
        }
      }

      // Shuffle and take dailyGoal
      const shuffled = practiceItems.sort(() => Math.random() - 0.5);
      setItems(shuffled.slice(0, settings.dailyGoal));
      setLoading(false);
    }
    loadPractice();
  }, [settings.dailyGoal, settings.practiceLevel]);

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

  if (loading) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-6">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-muted-bg rounded w-1/2" />
          <div className="h-48 bg-muted-bg rounded-xl" />
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-6 text-center">
        <p className="text-4xl mb-3">📚</p>
        <p className="text-lg font-bold mb-1">No practice content available yet</p>
        <p className="text-muted text-sm">Content is being generated. Check back soon!</p>
        <Link href="/categories" className="text-primary text-sm mt-4 inline-block hover:underline">
          Browse Available Categories
        </Link>
      </div>
    );
  }

  if (completed) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-6 text-center">
        <p className="text-5xl mb-4">🎉</p>
        <h1 className="text-2xl font-bold mb-2">Practice Complete!</h1>
        <p className="text-muted mb-6">
          You practiced {items.length} patterns today
        </p>
        <div className="inline-flex items-center gap-4 p-4 rounded-xl bg-card border border-card-border mb-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">{score}</div>
            <div className="text-xs text-muted">Correct</div>
          </div>
          <div className="w-px h-10 bg-card-border" />
          <div className="text-center">
            <div className="text-2xl font-bold">{items.length}</div>
            <div className="text-xs text-muted">Total</div>
          </div>
          <div className="w-px h-10 bg-card-border" />
          <div className="text-center">
            <div className="text-2xl font-bold text-success">
              {Math.round((score / items.length) * 100)}%
            </div>
            <div className="text-xs text-muted">Score</div>
          </div>
        </div>
        <div className="flex gap-3 justify-center">
          <Link
            href="/practice"
            className="px-4 py-2 rounded-lg border border-card-border text-sm hover:bg-card transition-colors"
          >
            Back to Practice
          </Link>
          <Link
            href="/progress"
            className="px-4 py-2 rounded-lg bg-primary text-white text-sm hover:bg-primary/90 transition-colors"
          >
            View Progress
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-6">
      {/* Progress bar */}
      <div className="flex items-center gap-3 mb-6">
        <div className="flex-1 h-2 rounded-full bg-muted-bg overflow-hidden">
          <div
            className="h-full rounded-full bg-primary transition-all duration-300"
            style={{
              width: `${((currentIndex + 1) / items.length) * 100}%`,
            }}
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
