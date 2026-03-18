"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useProgress } from "@/contexts/ProgressContext";
import { useSettings } from "@/contexts/SettingsContext";
import { getDueCount } from "@/lib/recommendations";
import { getMasteryCounts, masteryConfig, type MasteryLevel } from "@/lib/mastery";
import { getNextStep, getPhaseInfo, getCompletedCount, TOTAL_STEPS } from "@/content/building-blocks";
import type { PracticeLevel } from "@/types/pattern";

const levelOptions = [
  {
    level: 1,
    label_bn: "আমি একদম নতুন",
    label_en: "I'm completely new",
    icon: "🌱",
  },
  {
    level: 2,
    label_bn: "আমি কিছু কিছু জানি",
    label_en: "I know some",
    icon: "🌿",
  },
  {
    level: 3,
    label_bn: "আমি পড়তে পারি, বলতে পারি না",
    label_en: "I can read, can't speak",
    icon: "🌳",
  },
];

function WelcomeModal() {
  const [showModal, setShowModal] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState<PracticeLevel>(1);
  const { updateSettings } = useSettings();
  const router = useRouter();

  useEffect(() => {
    const onboarded = localStorage.getItem("pe-onboarded");
    if (!onboarded) {
      setShowModal(true);
    }
  }, []);

  if (!showModal) return null;

  const handleStart = () => {
    localStorage.setItem("pe-onboarded", "true");
    updateSettings({ practiceLevel: selectedLevel });
    setShowModal(false);
    router.push("/step/1");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: "linear-gradient(135deg, var(--primary), #1d4ed8)" }}
    >
      <div className="w-full max-w-md mx-4 flex flex-col items-center text-center text-white px-6 py-10">
        {/* Logo */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold tracking-tight">
            <span className="text-white">English</span>
            <span className="text-white/80">Mantra</span>
          </h2>
        </div>

        {/* Main heading */}
        <h1 className="font-bangla text-3xl font-bold mb-3 leading-tight">
          ইংরেজি শেখা এত সহজ!
        </h1>
        <p className="text-sm text-white/70 mb-4">
          Learning English is this easy!
        </p>

        {/* Subheading */}
        <p className="font-bangla text-base text-white/90 mb-2 leading-relaxed">
          তুমি বাংলায় যা ভাবো → আমরা ইংরেজিতে বলা শেখাবো
        </p>

        {/* Tagline */}
        <p className="font-bangla text-sm text-white/70 mb-8">
          কোনো গ্রামার নাই। কোনো নিয়ম মুখস্থ নাই।
        </p>

        {/* Level selector */}
        <div className="w-full space-y-3 mb-8">
          <p className="font-bangla text-sm text-white/80 mb-1">
            তোমার লেভেল বাছো:
          </p>
          {levelOptions.map((opt) => (
            <button
              key={opt.level}
              onClick={() => setSelectedLevel(opt.level as PracticeLevel)}
              className={`w-full flex items-center gap-3 p-4 rounded-xl transition-all text-left ${
                selectedLevel === opt.level
                  ? "bg-white text-primary shadow-lg scale-[1.02]"
                  : "bg-white/15 text-white hover:bg-white/25"
              }`}
            >
              <span className="text-2xl">{opt.icon}</span>
              <div className="flex-1">
                <p className={`font-bangla font-bold text-sm ${
                  selectedLevel === opt.level ? "text-primary" : "text-white"
                }`}>
                  {opt.label_bn}
                </p>
                <p className={`text-xs ${
                  selectedLevel === opt.level ? "text-primary/60" : "text-white/60"
                }`}>
                  {opt.label_en}
                </p>
              </div>
              {selectedLevel === opt.level && (
                <span className="text-primary text-lg font-bold">✓</span>
              )}
            </button>
          ))}
        </div>

        {/* Start button */}
        <button
          onClick={handleStart}
          className="w-full py-4 rounded-xl bg-white text-primary font-bangla font-bold text-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all active:scale-95"
        >
          শুরু করো →
        </button>
      </div>
    </div>
  );
}

export function HomeClient() {
  const { progress, todayPracticeCount } = useProgress();
  const { settings } = useSettings();

  const dueCount = getDueCount(progress.completedPatterns);
  const totalPatterned = Object.keys(progress.completedPatterns).length;
  const dailyGoal = settings.dailyGoal || 10;
  const dailyPercentage = Math.min(100, Math.round((todayPracticeCount / dailyGoal) * 100));

  // Overall mastery counts
  const allPatternIds = Object.keys(progress.completedPatterns);
  const mastery = getMasteryCounts(allPatternIds, progress.completedPatterns);

  // Building block progress
  const nextBlock = getNextStep(progress.buildingBlockSteps);
  const completedBlockCount = getCompletedCount(progress.buildingBlockSteps);
  const blockProgressPercent = Math.round((completedBlockCount / TOTAL_STEPS) * 100);
  const currentPhaseInfo = nextBlock ? getPhaseInfo(nextBlock.phase) : null;

  return (
    <>
    <WelcomeModal />
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

      {/* Building Block — Hero CTA */}
      {nextBlock ? (
        <Link
          href={`/step/${nextBlock.step}`}
          className="block w-full p-5 rounded-2xl bg-primary text-white mb-4 hover:bg-primary/90 transition-colors shadow-lg"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-white/70 font-bangla">
              🧱 বিল্ডিং ব্লক পথ
            </span>
            <span className="text-xs text-white/70">
              {completedBlockCount}/{TOTAL_STEPS}
            </span>
          </div>
          <div className="h-1.5 rounded-full bg-white/20 overflow-hidden mb-3">
            <div
              className="h-full rounded-full bg-white/60 transition-all"
              style={{ width: `${blockProgressPercent}%` }}
            />
          </div>
          <div className="flex items-center gap-4">
            <span className="text-4xl">📖</span>
            <div className="flex-1">
              <p className="font-bangla font-bold text-lg">
                ধাপ {nextBlock.step}: {nextBlock.title_bn}
              </p>
              <p className="text-sm text-white/90 font-mono mt-0.5">
                {nextBlock.formula}
              </p>
              <p className="font-bangla text-xs text-white/70 mt-1">
                {nextBlock.unlockMessage_bn}
              </p>
            </div>
            <span className="text-2xl">→</span>
          </div>
          {currentPhaseInfo && (
            <p className="text-xs text-white/50 mt-2 font-bangla">
              {currentPhaseInfo.icon} {currentPhaseInfo.name_bn}
            </p>
          )}
        </Link>
      ) : (
        <div className="p-5 rounded-2xl bg-success/10 border border-success/30 mb-4 text-center">
          <p className="text-3xl mb-2">🎉</p>
          <p className="font-bangla font-bold text-lg text-success">
            সব ধাপ শেষ!
          </p>
          <p className="text-xs text-muted">All 100 steps completed!</p>
        </div>
      )}

      {/* Building Block Path Banner */}
      <Link
        href="/path/blocks"
        className="block p-3 rounded-xl border-2 border-primary/30 bg-primary/5 mb-4 hover:border-primary/50 transition-colors"
      >
        <div className="flex items-center gap-3">
          <span className="text-2xl">🧱</span>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="font-bangla font-bold text-sm">
                পুরো পথ দেখো
              </span>
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-primary text-white">
                {completedBlockCount}/{TOTAL_STEPS}
              </span>
            </div>
            <p className="text-xs text-muted font-bangla">
              {currentPhaseInfo ? `${currentPhaseInfo.icon} ${currentPhaseInfo.name_bn}` : "সব শেষ!"}
            </p>
          </div>
          <span className="text-muted">→</span>
        </div>
      </Link>

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
    </>
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
