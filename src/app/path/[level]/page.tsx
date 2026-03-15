"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { useProgress } from "@/contexts/ProgressContext";
import { learningPath, getLevelById, getLevelProgress } from "@/content/learning-path";
import { categoryMeta } from "@/content/index";

export default function LevelDetailPage() {
  const params = useParams();
  const levelId = Number(params.level);
  const level = getLevelById(levelId);
  const { progress } = useProgress();
  const completedPatternIds = Object.keys(progress.completedPatterns);

  if (!level) {
    return (
      <div className="mx-auto max-w-lg px-4 py-6 text-center">
        <p className="text-4xl mb-3">❓</p>
        <p className="text-lg font-bold">Level not found</p>
        <Link href="/path" className="text-primary text-sm mt-2 inline-block hover:underline">
          ← Back to Learning Path
        </Link>
      </div>
    );
  }

  const prog = getLevelProgress(level.id, completedPatternIds);
  const prevLevel = getLevelById(levelId - 1);
  const nextLevel = getLevelById(levelId + 1);

  // Get category details for this level
  const categories = level.categoryIds.map((catId) => {
    const meta = categoryMeta.find((c) => c.id === catId);
    const hasPracticed = completedPatternIds.some((pid) => pid.startsWith(catId + "."));
    return { ...meta, hasPracticed };
  }).filter((c) => c.id); // Filter out any missing categories

  // Group by first letter (group)
  const grouped = categories.reduce((acc, cat) => {
    const group = cat.group || "?";
    if (!acc[group]) acc[group] = [];
    acc[group].push(cat);
    return acc;
  }, {} as Record<string, typeof categories>);

  return (
    <div className="mx-auto max-w-lg px-4 py-6">
      {/* Back link */}
      <Link href="/path" className="text-sm text-muted hover:text-primary mb-4 inline-block">
        ← শেখার পথ (Learning Path)
      </Link>

      {/* Level header */}
      <div className="text-center mb-6">
        <span className="text-5xl block mb-2">{level.icon}</span>
        <div className="flex items-center justify-center gap-2 mb-1">
          <span className={`text-xs font-bold px-2 py-0.5 rounded ${level.color} text-white`}>
            Level {level.id}
          </span>
          <h1 className="text-2xl font-bold font-bangla">{level.name_bn}</h1>
        </div>
        <p className="text-sm text-muted">{level.name_en} — {level.tagline_en}</p>
        <p className="text-sm text-muted font-bangla mt-1">{level.tagline_bn}</p>

        {/* Progress */}
        <div className="mt-3 max-w-xs mx-auto">
          <div className="flex items-center justify-between text-xs text-muted mb-1">
            <span>{prog.practiced}/{prog.total} categories</span>
            <span>{prog.percentage}%</span>
          </div>
          <div className="h-2 rounded-full bg-muted-bg overflow-hidden">
            <div
              className="h-full rounded-full bg-primary transition-all duration-500"
              style={{ width: `${prog.percentage}%` }}
            />
          </div>
        </div>
      </div>

      {/* Speaking powers */}
      <div className="p-4 rounded-xl border border-card-border bg-card mb-6">
        <h2 className="font-bold text-sm mb-2 font-bangla">
          এই লেভেলে তুমি যা পারবে ✨
        </h2>
        <p className="text-[10px] text-muted mb-3">What you&apos;ll be able to do</p>
        <ul className="space-y-2">
          {level.speakingPowers_bn.map((power, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-success shrink-0 mt-0.5">✓</span>
              <div>
                <span className="font-bangla text-sm">{power}</span>
                {level.speakingPowers_en[i] && (
                  <span className="text-[10px] text-muted block">{level.speakingPowers_en[i]}</span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Categories by group */}
      <div className="space-y-4">
        <h2 className="font-bold text-sm font-bangla">
          ক্যাটাগরি ({categories.length})
        </h2>
        {Object.entries(grouped).map(([group, cats]) => (
          <div key={group}>
            <p className="text-[10px] text-muted uppercase tracking-wider mb-2">
              Group {group}
            </p>
            <div className="space-y-1.5">
              {cats.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/categories/${cat.slug}`}
                  className={`flex items-center gap-3 p-3 rounded-lg border transition-colors ${
                    cat.hasPracticed
                      ? "border-success/30 bg-success/5"
                      : "border-card-border bg-card hover:border-primary/30"
                  }`}
                >
                  <span className="text-xl shrink-0">{cat.icon}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{cat.name}</p>
                    <p className="text-xs text-muted font-bangla truncate">{cat.name_bn}</p>
                  </div>
                  {cat.hasPracticed && (
                    <span className="text-success text-sm shrink-0">✓</span>
                  )}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between mt-6 pt-4 border-t border-card-border">
        {prevLevel ? (
          <Link
            href={`/path/${prevLevel.id}`}
            className="text-sm text-muted hover:text-primary"
          >
            ← {prevLevel.icon} {prevLevel.name_bn}
          </Link>
        ) : (
          <span />
        )}
        {nextLevel ? (
          <Link
            href={`/path/${nextLevel.id}`}
            className="text-sm text-primary hover:underline font-medium"
          >
            {nextLevel.icon} {nextLevel.name_bn} →
          </Link>
        ) : (
          <span className="text-sm text-muted font-bangla">🏆 সর্বোচ্চ লেভেল!</span>
        )}
      </div>
    </div>
  );
}
