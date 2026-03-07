"use client";

import { createContext, useContext, useEffect, useState, ReactNode, useCallback } from "react";
import type { UserProgress, PatternProgress, Confidence } from "@/types/pattern";

const defaultProgress: UserProgress = {
  completedPatterns: {},
  bookmarkedPatterns: [],
  currentStreak: 0,
  longestStreak: 0,
  lastActiveDate: "",
  totalPracticeMinutes: 0,
  achievements: [],
  settings: {
    showBangla: true,
    banglaFirst: false,
    displayMode: "side_by_side",
    fontSize: "medium",
    darkMode: "system",
    practiceLevel: 1,
    dailyGoal: 10,
  },
};

interface ProgressContextType {
  progress: UserProgress;
  markPatternPracticed: (patternId: string, confidence: Confidence) => void;
  toggleBookmark: (patternId: string) => void;
  isBookmarked: (patternId: string) => boolean;
  getPatternProgress: (patternId: string) => PatternProgress | undefined;
  totalPatternsLearned: number;
  updateStreak: () => void;
}

const ProgressContext = createContext<ProgressContextType>({
  progress: defaultProgress,
  markPatternPracticed: () => {},
  toggleBookmark: () => {},
  isBookmarked: () => false,
  getPatternProgress: () => undefined,
  totalPatternsLearned: 0,
  updateStreak: () => {},
});

// SRS intervals in days based on confidence
function getNextInterval(currentInterval: number, confidence: Confidence): number {
  const multipliers: Record<Confidence, number> = {
    1: 0.5,  // struggled — review sooner
    2: 1,    // hard — same interval
    3: 1.5,  // okay — slightly longer
    4: 2,    // good — double
    5: 2.5,  // easy — much longer
  };
  const next = Math.round(currentInterval * multipliers[confidence]);
  return Math.max(1, Math.min(next, 60)); // clamp 1-60 days
}

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useState<UserProgress>(defaultProgress);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("pe-progress");
    if (stored) {
      try {
        setProgress({ ...defaultProgress, ...JSON.parse(stored) });
      } catch {
        // ignore
      }
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem("pe-progress", JSON.stringify(progress));
  }, [progress, mounted]);

  const markPatternPracticed = useCallback((patternId: string, confidence: Confidence) => {
    setProgress((prev) => {
      const existing = prev.completedPatterns[patternId];
      const now = Date.now();
      const currentInterval = existing?.srsInterval || 1;
      const nextInterval = getNextInterval(currentInterval, confidence);

      return {
        ...prev,
        completedPatterns: {
          ...prev.completedPatterns,
          [patternId]: {
            firstSeen: existing?.firstSeen || now,
            lastPracticed: now,
            practiceCount: (existing?.practiceCount || 0) + 1,
            confidence,
            nextReviewDate: now + nextInterval * 24 * 60 * 60 * 1000,
            srsInterval: nextInterval,
          },
        },
      };
    });
  }, []);

  const toggleBookmark = useCallback((patternId: string) => {
    setProgress((prev) => {
      const bookmarks = prev.bookmarkedPatterns.includes(patternId)
        ? prev.bookmarkedPatterns.filter((id) => id !== patternId)
        : [...prev.bookmarkedPatterns, patternId];
      return { ...prev, bookmarkedPatterns: bookmarks };
    });
  }, []);

  const isBookmarked = useCallback(
    (patternId: string) => progress.bookmarkedPatterns.includes(patternId),
    [progress.bookmarkedPatterns]
  );

  const getPatternProgress = useCallback(
    (patternId: string) => progress.completedPatterns[patternId],
    [progress.completedPatterns]
  );

  const totalPatternsLearned = Object.keys(progress.completedPatterns).length;

  const updateStreak = useCallback(() => {
    setProgress((prev) => {
      const today = new Date().toISOString().split("T")[0];
      if (prev.lastActiveDate === today) return prev;

      const yesterday = new Date(Date.now() - 86400000).toISOString().split("T")[0];
      const newStreak = prev.lastActiveDate === yesterday ? prev.currentStreak + 1 : 1;

      return {
        ...prev,
        lastActiveDate: today,
        currentStreak: newStreak,
        longestStreak: Math.max(prev.longestStreak, newStreak),
      };
    });
  }, []);

  return (
    <ProgressContext.Provider
      value={{
        progress,
        markPatternPracticed,
        toggleBookmark,
        isBookmarked,
        getPatternProgress,
        totalPatternsLearned,
        updateStreak,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  return useContext(ProgressContext);
}
