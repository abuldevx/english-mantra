"use client";

import { useProgress } from "@/contexts/ProgressContext";
import Link from "next/link";

export default function ReviewPage() {
  const { progress } = useProgress();

  const now = Date.now();
  const duePatterns = Object.entries(progress.completedPatterns)
    .filter(([, p]) => p.nextReviewDate <= now)
    .sort(([, a], [, b]) => a.nextReviewDate - b.nextReviewDate);

  const upcomingPatterns = Object.entries(progress.completedPatterns)
    .filter(([, p]) => p.nextReviewDate > now)
    .sort(([, a], [, b]) => a.nextReviewDate - b.nextReviewDate)
    .slice(0, 10);

  return (
    <div className="mx-auto max-w-4xl px-4 py-6">
      <h1 className="text-2xl font-bold mb-1">Review Due Patterns</h1>
      <p className="font-bangla text-muted text-sm mb-1">পুনরালোচনার প্যাটার্ন</p>
      <p className="text-muted text-sm mb-6">
        Patterns scheduled for review based on spaced repetition
      </p>

      {duePatterns.length === 0 && upcomingPatterns.length === 0 && (
        <div className="text-center py-16 text-muted">
          <p className="text-4xl mb-3">🎯</p>
          <p className="text-lg mb-1">No patterns to review</p>
          <p className="text-sm">Practice some patterns first, then come back for review!</p>
          <Link href="/practice/daily" className="text-primary text-sm mt-4 inline-block hover:underline">
            Start Daily Practice
          </Link>
        </div>
      )}

      {duePatterns.length > 0 && (
        <section className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-danger animate-pulse" />
            <h2 className="font-bold">Due Now ({duePatterns.length})</h2>
          </div>
          <div className="space-y-2">
            {duePatterns.map(([id, prog]) => (
              <Link
                key={id}
                href={`/pattern/${id}`}
                className="flex items-center justify-between p-3 rounded-lg border border-card-border bg-card hover:border-primary/30 transition-all"
              >
                <div>
                  <span className="font-mono text-sm">{id}</span>
                  <span className="text-xs text-muted ml-2">
                    Last: {new Date(prog.lastPracticed).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      className={`text-xs ${star <= prog.confidence ? "text-amber-400" : "text-muted/30"}`}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {upcomingPatterns.length > 0 && (
        <section>
          <h2 className="font-bold mb-3">Coming Up</h2>
          <div className="space-y-2">
            {upcomingPatterns.map(([id, prog]) => {
              const daysUntil = Math.ceil((prog.nextReviewDate - now) / 86400000);
              return (
                <div
                  key={id}
                  className="flex items-center justify-between p-3 rounded-lg border border-card-border bg-card"
                >
                  <div>
                    <span className="font-mono text-sm">{id}</span>
                    <span className="text-xs text-muted ml-2">
                      in {daysUntil} day{daysUntil !== 1 ? "s" : ""}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span
                        key={star}
                        className={`text-xs ${star <= prog.confidence ? "text-amber-400" : "text-muted/30"}`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
}
