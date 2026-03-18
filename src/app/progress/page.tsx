"use client";

import { useProgress, ACHIEVEMENTS } from "@/contexts/ProgressContext";
import { getMasteryLevel, masteryConfig, type MasteryLevel } from "@/lib/mastery";

export default function ProgressPage() {
  const { progress, totalPatternsLearned } = useProgress();

  // Calculate mastery breakdown
  const masteryBreakdown = Object.values(progress.completedPatterns).reduce(
    (acc, p) => {
      const level = getMasteryLevel(p);
      acc[level]++;
      return acc;
    },
    { new: 0, familiar: 0, confident: 0, master: 0 } as Record<MasteryLevel, number>
  );

  return (
    <div className="mx-auto max-w-4xl px-4 py-6">
      <h1 className="text-2xl font-bold mb-1 font-bangla">তোমার অগ্রগতি</h1>
      <p className="text-sm text-muted mb-1">Your Progress</p>
      <p className="text-muted text-sm mb-1 font-bangla">তোমার ইংরেজি শেখার যাত্রা দেখো</p>
      <p className="text-muted text-xs mb-6">Track your English learning journey</p>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
        <StatCard icon="🔥" value={progress.currentStreak} label_bn="দিনের স্ট্রিক" label="Day Streak" />
        <StatCard icon="📚" value={totalPatternsLearned} label_bn="প্যাটার্ন শেখা হয়েছে" label="Patterns Learned" />
        <StatCard icon="🔖" value={progress.bookmarkedPatterns.length} label_bn="বুকমার্ক" label="Bookmarks" />
        <StatCard icon="🏆" value={progress.longestStreak} label_bn="সেরা স্ট্রিক" label="Best Streak" />
      </div>

      {/* Mastery Breakdown */}
      {totalPatternsLearned > 0 && (
        <div className="p-4 rounded-xl border border-card-border bg-card mb-8">
          <h3 className="text-sm font-bold mb-1 font-bangla">দক্ষতার স্তর</h3>
          <p className="text-[10px] text-muted mb-3">Mastery Levels</p>
          <div className="flex items-center gap-4 text-sm">
            {(["master", "confident", "familiar"] as MasteryLevel[]).map(
              (level) => {
                const config = masteryConfig[level];
                return (
                  <div key={level} className={`flex items-center gap-1 ${config.color}`}>
                    <span>{config.icon}</span>
                    <span className="font-bold">{masteryBreakdown[level]}</span>
                    <span className="text-xs font-bangla">{config.label_bn}</span>
                  </div>
                );
              }
            )}
          </div>
          {/* Mastery bar */}
          <div className="h-2 rounded-full bg-muted-bg overflow-hidden flex mt-3">
            {(["master", "confident", "familiar"] as MasteryLevel[]).map(
              (level) =>
                masteryBreakdown[level] > 0 && (
                  <div
                    key={level}
                    className={`h-full ${
                      level === "master"
                        ? "bg-primary"
                        : level === "confident"
                          ? "bg-success"
                          : "bg-warning"
                    }`}
                    style={{
                      width: `${(masteryBreakdown[level] / totalPatternsLearned) * 100}%`,
                    }}
                  />
                )
            )}
          </div>
        </div>
      )}

      {/* Achievements Grid */}
      <section className="mb-8">
        <h2 className="text-lg font-bold mb-1 font-bangla">অর্জন</h2>
        <p className="text-xs text-muted mb-3">Achievements</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {ACHIEVEMENTS.map((achievement) => {
            const unlocked = progress.achievements.includes(achievement.id);
            return (
              <div
                key={achievement.id}
                className={`p-3 rounded-xl border text-center transition-all ${
                  unlocked
                    ? "border-primary/30 bg-primary-light/50"
                    : "border-card-border bg-card opacity-60"
                }`}
              >
                <span className={`text-3xl block mb-1 ${unlocked ? "" : "grayscale"}`}>
                  {unlocked ? achievement.icon : "🔒"}
                </span>
                <p className="text-xs font-medium">{achievement.label}</p>
                <p className="text-[10px] text-muted font-bangla">{achievement.label_bn}</p>
                <p className="text-[10px] text-muted mt-1">
                  {unlocked ? achievement.description : achievement.description_bn}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Recently Practiced */}
      <section>
        <h2 className="text-lg font-bold mb-1 font-bangla">সম্প্রতি অনুশীলন</h2>
        <p className="text-xs text-muted mb-3">Recently Practiced</p>
        {totalPatternsLearned === 0 ? (
          <div className="text-center py-8 text-muted border border-card-border rounded-xl bg-card">
            <p className="text-sm font-bangla">এখনো কোনো প্যাটার্ন অনুশীলন করা হয়নি। শেখা শুরু করো!</p>
            <p className="text-xs text-muted mt-1">No patterns practiced yet. Start learning!</p>
          </div>
        ) : (
          <div className="space-y-2">
            {Object.entries(progress.completedPatterns)
              .sort(([, a], [, b]) => b.lastPracticed - a.lastPracticed)
              .slice(0, 10)
              .map(([id, prog]) => {
                const level = getMasteryLevel(prog);
                const mConfig = masteryConfig[level];
                return (
                  <div
                    key={id}
                    className="flex items-center justify-between p-3 rounded-lg bg-card border border-card-border"
                  >
                    <div className="flex items-center gap-2">
                      <span className={mConfig.color} title={mConfig.label_bn}>
                        {mConfig.icon}
                      </span>
                      <div>
                        <span className="font-mono text-sm">{id}</span>
                        <span className="text-xs text-muted ml-2">
                          {prog.practiceCount}x
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span
                          key={star}
                          className={`text-xs ${
                            star <= prog.confidence
                              ? "text-amber-400"
                              : "text-muted/30"
                          }`}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
          </div>
        )}
      </section>
    </div>
  );
}

function StatCard({ icon, value, label, label_bn }: { icon: string; value: number; label: string; label_bn: string }) {
  return (
    <div className="p-4 rounded-xl border border-card-border bg-card text-center">
      <span className="text-2xl">{icon}</span>
      <div className="text-2xl font-bold mt-1">{value}</div>
      <div className="text-xs text-muted">{label}</div>
      <div className="text-[10px] text-muted font-bangla">{label_bn}</div>
    </div>
  );
}
