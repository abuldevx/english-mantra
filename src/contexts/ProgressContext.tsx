"use client";

import { createContext, useContext, useEffect, useState, ReactNode, useCallback } from "react";
import type { UserProgress, PatternProgress, Confidence } from "@/types/pattern";

export interface AchievementDef {
  id: string;
  icon: string;
  label: string;
  label_bn: string;
  description: string;
  description_bn: string;
  check: (progress: UserProgress) => boolean;
}

export const ACHIEVEMENTS: AchievementDef[] = [
  {
    id: "first_practice",
    icon: "🎯",
    label: "First Step",
    label_bn: "প্রথম পদক্ষেপ",
    description: "Complete your first practice",
    description_bn: "প্রথম অনুশীলন সম্পন্ন করো",
    check: (p) => Object.keys(p.completedPatterns).length >= 1,
  },
  {
    id: "pattern_5",
    icon: "📚",
    label: "Quick Learner",
    label_bn: "দ্রুত শিক্ষার্থী",
    description: "Learn 5 patterns",
    description_bn: "৫টি প্যাটার্ন শেখো",
    check: (p) => Object.keys(p.completedPatterns).length >= 5,
  },
  {
    id: "pattern_10",
    icon: "🌟",
    label: "Pattern Collector",
    label_bn: "প্যাটার্ন সংগ্রাহক",
    description: "Learn 10 patterns",
    description_bn: "১০টি প্যাটার্ন শেখো",
    check: (p) => Object.keys(p.completedPatterns).length >= 10,
  },
  {
    id: "pattern_25",
    icon: "💎",
    label: "Dedicated Student",
    label_bn: "নিবেদিত ছাত্র",
    description: "Learn 25 patterns",
    description_bn: "২৫টি প্যাটার্ন শেখো",
    check: (p) => Object.keys(p.completedPatterns).length >= 25,
  },
  {
    id: "pattern_50",
    icon: "👑",
    label: "Pattern Master",
    label_bn: "প্যাটার্ন মাস্টার",
    description: "Learn 50 patterns",
    description_bn: "৫০টি প্যাটার্ন শেখো",
    check: (p) => Object.keys(p.completedPatterns).length >= 50,
  },
  {
    id: "streak_3",
    icon: "🔥",
    label: "On Fire",
    label_bn: "জ্বলছে",
    description: "3-day streak",
    description_bn: "৩ দিনের স্ট্রিক",
    check: (p) => p.longestStreak >= 3,
  },
  {
    id: "streak_7",
    icon: "⭐",
    label: "Week Warrior",
    label_bn: "সপ্তাহের যোদ্ধা",
    description: "7-day streak",
    description_bn: "৭ দিনের স্ট্রিক",
    check: (p) => p.longestStreak >= 7,
  },
  {
    id: "streak_30",
    icon: "🏆",
    label: "Month Master",
    label_bn: "মাসের মাস্টার",
    description: "30-day streak",
    description_bn: "৩০ দিনের স্ট্রিক",
    check: (p) => p.longestStreak >= 30,
  },
  {
    id: "confident",
    icon: "💪",
    label: "Confident Speaker",
    label_bn: "আত্মবিশ্বাসী বক্তা",
    description: "Reach 'Easy' on 10 patterns",
    description_bn: "১০টি প্যাটার্নে 'সহজ' পাও",
    check: (p) => Object.values(p.completedPatterns).filter((pp) => pp.confidence >= 5).length >= 10,
  },
  {
    id: "bookworm",
    icon: "🔖",
    label: "Bookworm",
    label_bn: "বইপোকা",
    description: "Bookmark 10 patterns",
    description_bn: "১০টি প্যাটার্ন বুকমার্ক করো",
    check: (p) => p.bookmarkedPatterns.length >= 10,
  },
];

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
  todayPracticeCount: number;
  updateStreak: () => void;
}

const ProgressContext = createContext<ProgressContextType>({
  progress: defaultProgress,
  markPatternPracticed: () => {},
  toggleBookmark: () => {},
  isBookmarked: () => false,
  getPatternProgress: () => undefined,
  totalPatternsLearned: 0,
  todayPracticeCount: 0,
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

  const checkAchievements = useCallback((currentProgress: UserProgress) => {
    const newAchievements = ACHIEVEMENTS
      .filter((a) => !currentProgress.achievements.includes(a.id) && a.check(currentProgress))
      .map((a) => a.id);

    if (newAchievements.length > 0) {
      setProgress((prev) => ({
        ...prev,
        achievements: [...prev.achievements, ...newAchievements],
      }));
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    checkAchievements(progress);
  }, [progress.completedPatterns, progress.bookmarkedPatterns, progress.longestStreak, mounted, checkAchievements]);

  const todayPracticeCount = Object.values(progress.completedPatterns).filter((p) => {
    const today = new Date().toISOString().split("T")[0];
    const practiceDate = new Date(p.lastPracticed).toISOString().split("T")[0];
    return today === practiceDate;
  }).length;

  return (
    <ProgressContext.Provider
      value={{
        progress,
        markPatternPracticed,
        toggleBookmark,
        isBookmarked,
        getPatternProgress,
        totalPatternsLearned,
        todayPracticeCount,
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
