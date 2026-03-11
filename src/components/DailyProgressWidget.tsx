"use client";

import { useProgress } from "@/contexts/ProgressContext";
import { useSettings } from "@/contexts/SettingsContext";
import Link from "next/link";

export function DailyProgressWidget() {
  const { progress, totalPatternsLearned } = useProgress();
  const { settings } = useSettings();

  // Count patterns practiced today
  const todayPracticeCount = Object.values(progress.completedPatterns).filter((p) => {
    const today = new Date().toISOString().split("T")[0];
    const practiceDate = new Date(p.lastPracticed).toISOString().split("T")[0];
    return today === practiceDate;
  }).length;

  const dailyGoal = settings.dailyGoal || 10;
  const percentage = Math.min(100, Math.round((todayPracticeCount / dailyGoal) * 100));
  const goalMet = todayPracticeCount >= dailyGoal;

  return (
    <div className="p-4 rounded-xl border border-card-border bg-card mb-6">
      <div className="flex items-center justify-between mb-3">
        <div>
          <h2 className="text-sm font-bold">Today&apos;s Progress</h2>
          <p className="text-[10px] text-muted font-bangla">আজকের অগ্রগতি</p>
        </div>
        {progress.currentStreak > 0 && (
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-warning-light text-sm font-medium">
            <span>&#128293;</span>
            <span>{progress.currentStreak}</span>
            <span className="text-xs text-muted font-bangla">দিন</span>
          </div>
        )}
      </div>

      {/* Progress bar */}
      <div className="mb-2">
        <div className="flex items-center justify-between text-xs mb-1">
          <span>{todayPracticeCount}/{dailyGoal} patterns</span>
          <span className="font-bangla text-muted">{todayPracticeCount}/{dailyGoal} প্যাটার্ন</span>
        </div>
        <div className="h-3 rounded-full bg-muted-bg overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-500 ease-out"
            style={{
              width: `${percentage}%`,
              background: goalMet ? 'var(--success)' : 'var(--primary)',
            }}
          />
        </div>
      </div>

      {/* Status message */}
      <div className="flex items-center justify-between">
        <p className="text-xs text-muted">
          {goalMet
            ? "Goal complete! Great job!"
            : `${dailyGoal - todayPracticeCount} more to go`}
        </p>
        {!goalMet && (
          <Link
            href="/practice/daily"
            className="text-xs text-primary font-medium hover:underline"
          >
            Practice Now
          </Link>
        )}
        {goalMet && (
          <span className="text-xs text-success font-medium">&#10003; Done</span>
        )}
      </div>

      {/* Quick stats row */}
      <div className="flex items-center gap-4 mt-3 pt-3 border-t border-card-border text-xs text-muted">
        <span>&#128218; {totalPatternsLearned} learned</span>
        <span>&#128278; {progress.bookmarkedPatterns.length} saved</span>
        <span>&#127942; Best: {progress.longestStreak} days</span>
      </div>
    </div>
  );
}
