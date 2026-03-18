"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import type { Pattern, PatternCategory, Confidence } from "@/types/pattern";
import { LessonFlow } from "@/components/lesson/LessonFlow";
import { useProgress } from "@/contexts/ProgressContext";
import { categoryMeta, getCategoryImportSlug } from "@/content/index";
import { getNextPatternId } from "@/lib/recommendations";

export default function LearnPage() {
  const params = useParams();
  const router = useRouter();
  const patternId = params.patternId as string;
  const [pattern, setPattern] = useState<Pattern | null>(null);
  const [category, setCategory] = useState<PatternCategory | null>(null);
  const [nextPattern, setNextPattern] = useState<{
    id: string;
    formula: string;
    patternName_bn: string;
  } | null>(null);
  const [loading, setLoading] = useState(true);
  const { progress, markPatternPracticed, updateStreak } = useProgress();

  useEffect(() => {
    async function load() {
      const dotIndex = patternId.lastIndexOf(".");
      if (dotIndex === -1) {
        setLoading(false);
        return;
      }
      const categoryId = patternId.substring(0, dotIndex);

      try {
        const mod = await import(`@/content/categories/${getCategoryImportSlug(categoryId)}`);
        const cat = mod[`category${categoryId}`] as PatternCategory;
        setCategory(cat);
        const found = cat.patterns.find((p) => p.id === patternId);
        setPattern(found || null);

        // Find the next pattern in this category
        if (found) {
          const currentIndex = cat.patterns.indexOf(found);
          const nextInCategory = cat.patterns[currentIndex + 1];
          if (nextInCategory) {
            setNextPattern({
              id: nextInCategory.id,
              formula: nextInCategory.formula,
              patternName_bn: nextInCategory.patternName_bn,
            });
          } else {
            // No more patterns in this category — find next from recommendations
            const nextId = getNextPatternId(
              { ...progress.completedPatterns, [patternId]: {} as never },
              categoryMeta
            );
            if (nextId && nextId !== patternId) {
              // Load the next pattern's info
              const nextDotIndex = nextId.lastIndexOf(".");
              if (nextDotIndex !== -1) {
                const nextCatId = nextId.substring(0, nextDotIndex);
                try {
                  const nextImportPath = getCategoryImportSlug(nextCatId);
                  const nextMod = await import(
                    `@/content/categories/${nextImportPath}`
                  );
                  const nextCat = nextMod[
                    `category${nextCatId}`
                  ] as PatternCategory;
                  const nextP = nextCat.patterns.find((p) => p.id === nextId);
                  if (nextP) {
                    setNextPattern({
                      id: nextP.id,
                      formula: nextP.formula,
                      patternName_bn: nextP.patternName_bn,
                    });
                  }
                } catch {
                  // ignore — no next pattern preview
                }
              }
            }
          }
        }
      } catch {
        setPattern(null);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [patternId]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleComplete = (confidence: Confidence) => {
    markPatternPracticed(patternId, confidence);
    updateStreak();
  };

  const handleNextLesson = (nextPatternId: string) => {
    router.push(`/learn/${nextPatternId}`);
  };

  if (loading) {
    return (
      <div className="mx-auto max-w-lg px-4 py-6">
        <div className="animate-pulse space-y-4">
          <div className="h-2 bg-muted-bg rounded w-full" />
          <div className="h-32 bg-muted-bg rounded-xl mt-12" />
          <div className="h-8 bg-muted-bg rounded-xl mt-4" />
        </div>
      </div>
    );
  }

  if (!pattern || !category) {
    return (
      <div className="mx-auto max-w-lg px-4 py-6 text-center">
        <p className="text-4xl mb-4">😕</p>
        <p className="font-bangla text-lg mb-2">প্যাটার্ন পাওয়া যায়নি</p>
        <p className="text-sm text-muted mb-4">Pattern not found</p>
        <Link
          href="/"
          className="text-primary text-sm hover:underline"
        >
          হোমে ফিরে যাও
        </Link>
      </div>
    );
  }

  return (
    <LessonFlow
      pattern={pattern}
      nextPattern={nextPattern}
      onComplete={handleComplete}
      onNextLesson={handleNextLesson}
    />
  );
}
