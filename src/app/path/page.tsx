"use client";

import Link from "next/link";
import { useProgress } from "@/contexts/ProgressContext";
import { learningPath, getLevelProgress, getCurrentLevel } from "@/content/learning-path";

export default function LearningPathPage() {
  const { progress } = useProgress();
  const completedPatternIds = Object.keys(progress.completedPatterns);
  const currentLevel = getCurrentLevel(completedPatternIds);

  return (
    <div className="mx-auto max-w-lg px-4 py-6">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold mb-1">
          <span className="font-bangla">শেখার পথ</span>
        </h1>
        <p className="text-sm text-muted">Learning Path — Survival to Master</p>
        <p className="text-xs text-muted font-bangla mt-1">
          ধাপে ধাপে বেঁচে থাকা থেকে মাস্টার
        </p>
      </div>

      {/* Staircase — beginner at top, master at bottom */}
      <div className="space-y-3">
        {learningPath.map((level) => {
          const prog = getLevelProgress(level.id, completedPatternIds);
          const isCurrent = level.id === currentLevel;
          const isCompleted = prog.percentage >= 80;
          const isLocked = level.id > currentLevel + 1;

          return (
            <Link
              key={level.id}
              href={`/path/${level.id}`}
              className={`block p-4 rounded-xl border-2 transition-all ${
                isCurrent
                  ? "border-primary bg-primary/5 shadow-md"
                  : isCompleted
                    ? "border-success/50 bg-success/5"
                    : isLocked
                      ? "border-card-border bg-card opacity-60"
                      : "border-card-border bg-card hover:border-primary/30"
              }`}
            >
              <div className="flex items-start gap-3">
                {/* Level number + icon */}
                <div className="flex flex-col items-center shrink-0">
                  <span className="text-3xl">{level.icon}</span>
                  <span className={`text-[10px] font-bold mt-1 px-1.5 py-0.5 rounded ${level.color} text-white`}>
                    L{level.id}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h2 className="font-bold font-bangla text-lg">
                      {level.name_bn}
                    </h2>
                    {isCompleted && <span className="text-success">✓</span>}
                    {isCurrent && (
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary text-white font-medium">
                        এখানে আছো
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-muted">{level.name_en}</p>
                  <p className="font-bangla text-sm text-muted mt-1">
                    {level.tagline_bn}
                  </p>

                  {/* Progress bar */}
                  <div className="mt-2">
                    <div className="flex items-center justify-between text-[10px] text-muted mb-1">
                      <span>{prog.practiced}/{prog.total} categories</span>
                      <span>{prog.percentage}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-muted-bg overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{
                          width: `${prog.percentage}%`,
                          background: isCompleted
                            ? "var(--success)"
                            : isCurrent
                              ? "var(--primary)"
                              : "var(--muted)",
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Arrow */}
                <span className="text-muted shrink-0 mt-2">→</span>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Bottom stats */}
      <div className="mt-6 p-3 rounded-lg bg-card border border-card-border text-center">
        <p className="text-xs text-muted font-bangla">
          মোট {learningPath.reduce((sum, l) => sum + l.categoryIds.length, 0)} টি ক্যাটাগরি • ৬টি লেভেল
        </p>
        <p className="text-[10px] text-muted mt-0.5">
          {completedPatternIds.length} patterns practiced total
        </p>
      </div>
    </div>
  );
}
