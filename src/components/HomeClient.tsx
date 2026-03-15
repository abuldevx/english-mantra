"use client";

import Link from "next/link";
import { useProgress } from "@/contexts/ProgressContext";
import { useSettings } from "@/contexts/SettingsContext";
import { categoryMeta } from "@/content/index";
import { getNextPatternId, getDueCount } from "@/lib/recommendations";
import { getMasteryCounts, masteryConfig, type MasteryLevel } from "@/lib/mastery";
import { getCurrentLevel, getLevelById } from "@/content/learning-path";

export function HomeClient() {
  const { progress, todayPracticeCount } = useProgress();
  const { settings } = useSettings();

  const dueCount = getDueCount(progress.completedPatterns);
  const nextPatternId = getNextPatternId(progress.completedPatterns, categoryMeta);
  const totalPatterned = Object.keys(progress.completedPatterns).length;
  const dailyGoal = settings.dailyGoal || 10;
  const dailyPercentage = Math.min(100, Math.round((todayPracticeCount / dailyGoal) * 100));

  // Overall mastery counts
  const allPatternIds = Object.keys(progress.completedPatterns);
  const mastery = getMasteryCounts(allPatternIds, progress.completedPatterns);
  const currentLevelId = getCurrentLevel(allPatternIds);
  const currentLevel = getLevelById(currentLevelId);

  return (
    <div className="mx-auto max-w-lg px-4 py-6">
      {/* Greeting */}
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold mb-1">
          <span className="text-primary">English</span>Mantra
        </h1>
        <p className="font-bangla text-lg">
          আজকে কী করবে?
        </p>
        <p className="text-sm text-muted">What will you do today?</p>
      </div>

      {/* Next Lesson — Hero CTA */}
      {nextPatternId && (
        <Link
          href={`/learn/${nextPatternId}`}
          className="block w-full p-5 rounded-2xl bg-primary text-white mb-4 hover:bg-primary/90 transition-colors shadow-lg"
        >
          <div className="flex items-center gap-4">
            <span className="text-4xl">📖</span>
            <div className="flex-1">
              <p className="font-bangla font-bold text-lg">পরের পাঠ শুরু করো</p>
              <p className="text-xs text-white/70">Start next lesson — 3 min</p>
              <p className="text-sm text-white/90 font-mono mt-1">
                {nextPatternId}
              </p>
            </div>
            <span className="text-2xl">→</span>
          </div>
        </Link>
      )}

      {/* Learning Path Banner */}
      {currentLevel && (
        <Link
          href="/path"
          className="block p-3 rounded-xl border-2 border-primary/30 bg-primary/5 mb-4 hover:border-primary/50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl">{currentLevel.icon}</span>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="font-bangla font-bold text-sm">
                  শেখার পথ
                </span>
                <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${currentLevel.color} text-white`}>
                  L{currentLevel.id}
                </span>
              </div>
              <p className="text-xs text-muted font-bangla">
                {currentLevel.name_bn} — {currentLevel.tagline_bn}
              </p>
            </div>
            <span className="text-muted">→</span>
          </div>
        </Link>
      )}

      {/* Action Buttons */}
      <div className="grid grid-cols-3 gap-2 mb-6">
        <ActionButton
          href="/practice/review"
          icon="🔄"
          label_bn="রিভিউ"
          label="Review"
          badge={dueCount > 0 ? `${dueCount}` : undefined}
          muted={dueCount === 0}
          subtitle={dueCount === 0 ? "✓ ঠিক আছে" : undefined}
        />
        <ActionButton
          href="/practice/daily"
          icon="💪"
          label_bn="অনুশীলন"
          label="Practice"
        />
        <ActionButton
          href="/categories"
          icon="📚"
          label_bn="ক্যাটাগরি"
          label="Browse"
        />
      </div>

      {/* Daily Progress */}
      <div className="p-4 rounded-xl border border-card-border bg-card mb-4">
        <div className="flex items-center justify-between mb-2">
          <div>
            <p className="text-sm font-bold">
              আজকের অগ্রগতি
            </p>
            <p className="text-[10px] text-muted">Today&apos;s Progress</p>
          </div>
          {progress.currentStreak > 0 && (
            <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-warning-light text-sm font-medium">
              <span>🔥</span>
              <span>{progress.currentStreak}</span>
              <span className="text-[10px] text-muted font-bangla">
                দিন
              </span>
            </div>
          )}
        </div>

        {/* Progress bar */}
        <div className="flex items-center justify-between text-xs mb-1">
          <span>{todayPracticeCount}/{dailyGoal} patterns</span>
          <span className="font-bangla text-muted">
            {todayPracticeCount}/{dailyGoal} প্যাটার্ন
          </span>
        </div>
        <div className="h-2.5 rounded-full bg-muted-bg overflow-hidden mb-3">
          <div
            className="h-full rounded-full transition-all duration-500 ease-out"
            style={{
              width: `${dailyPercentage}%`,
              background: dailyPercentage >= 100 ? "var(--success)" : "var(--primary)",
            }}
          />
        </div>

        {/* Mastery summary */}
        {totalPatterned > 0 && (
          <div className="flex items-center gap-3 pt-2 border-t border-card-border text-xs">
            {(["master", "confident", "familiar"] as MasteryLevel[]).map(
              (level) =>
                mastery[level] > 0 && (
                  <span key={level} className={`flex items-center gap-0.5 ${masteryConfig[level].color}`}>
                    {masteryConfig[level].icon} {mastery[level]}
                  </span>
                )
            )}
            <span className="text-muted ml-auto">
              {totalPatterned} total
            </span>
          </div>
        )}
      </div>

      {/* Quick links */}
      <div className="flex items-center justify-center gap-4 text-xs text-muted">
        <Link href="/search" className="hover:text-primary transition-colors">
          🔍 খুঁজো (Search)
        </Link>
        <Link href="/progress" className="hover:text-primary transition-colors">
          📊 অগ্রগতি (Progress)
        </Link>
        <Link href="/bookmarks" className="hover:text-primary transition-colors">
          🔖 বুকমার্ক (Saved)
        </Link>
      </div>
    </div>
  );
}

function ActionButton({
  href,
  icon,
  label_bn,
  label,
  badge,
  muted,
  subtitle,
}: {
  href: string;
  icon: string;
  label_bn: string;
  label: string;
  badge?: string;
  muted?: boolean;
  subtitle?: string;
}) {
  return (
    <Link
      href={href}
      className={`relative flex flex-col items-center gap-1 p-5 rounded-xl border transition-all min-h-[100px] justify-center ${
        muted
          ? "border-card-border bg-card text-muted"
          : "border-card-border bg-card hover:border-primary/30 hover:shadow-sm"
      }`}
    >
      {badge && (
        <span className="absolute top-2 right-2 px-1.5 py-0.5 rounded-full bg-danger text-white text-[10px] font-bold min-w-[20px] text-center">
          {badge}
        </span>
      )}
      <span className="text-3xl">{icon}</span>
      <span className="font-bangla text-sm font-medium">{label_bn}</span>
      {subtitle ? (
        <span className="font-bangla text-[10px] text-success">{subtitle}</span>
      ) : (
        <span className="text-[10px] text-muted">{label}</span>
      )}
    </Link>
  );
}
