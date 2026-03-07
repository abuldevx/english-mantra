"use client";

import { useProgress } from "@/contexts/ProgressContext";

export default function ProgressPage() {
  const { progress, totalPatternsLearned } = useProgress();

  return (
    <div className="mx-auto max-w-4xl px-4 py-6">
      <h1 className="text-2xl font-bold mb-2">Your Progress</h1>
      <p className="text-muted text-sm mb-6">
        Track your English learning journey
      </p>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
        <StatCard
          icon="🔥"
          value={progress.currentStreak}
          label="Day Streak"
        />
        <StatCard
          icon="📚"
          value={totalPatternsLearned}
          label="Patterns Learned"
        />
        <StatCard
          icon="🔖"
          value={progress.bookmarkedPatterns.length}
          label="Bookmarks"
        />
        <StatCard
          icon="🏆"
          value={progress.longestStreak}
          label="Best Streak"
        />
      </div>

      {/* Achievements */}
      <section className="mb-8">
        <h2 className="text-lg font-bold mb-3">Achievements</h2>
        {progress.achievements.length === 0 ? (
          <div className="text-center py-8 text-muted border border-card-border rounded-xl bg-card">
            <p className="text-3xl mb-2">🏅</p>
            <p className="text-sm">Start practicing to earn achievements!</p>
            <p className="font-bangla text-xs mt-1">
              অ্যাচিভমেন্ট অর্জন করতে অনুশীলন শুরু করুন!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
            {progress.achievements.map((id) => (
              <div key={id} className="text-center p-3 bg-card rounded-lg border border-card-border">
                <span className="text-2xl">🏅</span>
                <p className="text-xs mt-1">{id}</p>
              </div>
            ))}
          </div>
        )}
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

function StatCard({
  icon,
  value,
  label,
}: {
  icon: string;
  value: number;
  label: string;
}) {
  return (
    <div className="p-4 rounded-xl border border-card-border bg-card text-center">
      <span className="text-2xl">{icon}</span>
      <div className="text-2xl font-bold mt-1">{value}</div>
      <div className="text-xs text-muted">{label}</div>
    </div>
  );
}
