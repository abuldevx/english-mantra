"use client";

import { useProgress, ACHIEVEMENTS } from "@/contexts/ProgressContext";

export default function ProgressPage() {
  const { progress, totalPatternsLearned } = useProgress();

  return (
    <div className="mx-auto max-w-4xl px-4 py-6">
      <h1 className="text-2xl font-bold mb-1">Your Progress</h1>
      <p className="text-sm text-muted font-bangla mb-1">তোমার অগ্রগতি</p>
      <p className="text-muted text-sm mb-6">Track your English learning journey</p>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
        <StatCard icon="🔥" value={progress.currentStreak} label="Day Streak" label_bn="দিনের স্ট্রিক" />
        <StatCard icon="📚" value={totalPatternsLearned} label="Patterns Learned" label_bn="প্যাটার্ন শেখা হয়েছে" />
        <StatCard icon="🔖" value={progress.bookmarkedPatterns.length} label="Bookmarks" label_bn="বুকমার্ক" />
        <StatCard icon="🏆" value={progress.longestStreak} label="Best Streak" label_bn="সেরা স্ট্রিক" />
      </div>

      {/* Achievements Grid */}
      <section className="mb-8">
        <h2 className="text-lg font-bold mb-1">Achievements</h2>
        <p className="text-xs text-muted font-bangla mb-3">অ্যাচিভমেন্ট</p>
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
        <h2 className="text-lg font-bold mb-3">Recently Practiced</h2>
        {totalPatternsLearned === 0 ? (
          <div className="text-center py-8 text-muted border border-card-border rounded-xl bg-card">
            <p className="text-sm">No patterns practiced yet. Start learning!</p>
          </div>
        ) : (
          <div className="space-y-2">
            {Object.entries(progress.completedPatterns)
              .sort(([, a], [, b]) => b.lastPracticed - a.lastPracticed)
              .slice(0, 10)
              .map(([id, prog]) => (
                <div
                  key={id}
                  className="flex items-center justify-between p-3 rounded-lg bg-card border border-card-border"
                >
                  <div>
                    <span className="font-mono text-sm">{id}</span>
                    <span className="text-xs text-muted ml-2">
                      Practiced {prog.practiceCount}x
                    </span>
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
              ))}
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
