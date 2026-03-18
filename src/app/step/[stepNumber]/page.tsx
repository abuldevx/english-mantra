"use client";

import { useEffect, useState, useCallback } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import {
  getStepByNumber,
  getPhaseInfo,
  isStepUnlocked,
  TOTAL_STEPS,
} from "@/content/building-blocks";
import type { BuildingBlock } from "@/content/building-blocks";
import { getPatternById } from "@/lib/content";
import type { Pattern, PatternCategory, PatternVariation, StructuredWordMap } from "@/types/pattern";
import { PatternFormula } from "@/components/patterns/PatternFormula";
import WordBankExercise from "@/components/practice/WordBankExercise";
import { useProgress } from "@/contexts/ProgressContext";
import { useSettings } from "@/contexts/SettingsContext";

export default function StepPage() {
  const params = useParams();
  const router = useRouter();
  const stepNumber = Number(params.stepNumber);
  const { progress, completeBuildingBlockStep, isStepCompleted } = useProgress();
  const { settings } = useSettings();

  const [block, setBlock] = useState<BuildingBlock | null>(null);
  const [pattern, setPattern] = useState<Pattern | null>(null);
  const [category, setCategory] = useState<PatternCategory | null>(null);
  const [combinePatterns, setCombinePatterns] = useState<Pattern[]>([]);
  const [loading, setLoading] = useState(true);
  const [completed, setCompleted] = useState(false);
  const [practiceScore, setPracticeScore] = useState({ correct: 0, total: 0 });

  useEffect(() => {
    async function load() {
      setLoading(true);
      const b = getStepByNumber(stepNumber);
      if (!b) {
        setBlock(null);
        setLoading(false);
        return;
      }
      setBlock(b);
      setCompleted(isStepCompleted(stepNumber));

      // Load the main pattern
      const result = await getPatternById(b.patternId);
      if (result) {
        setPattern(result.pattern);
        setCategory(result.category);
      }

      // Load combine patterns if needed
      if (b.buildingType === "combine" && b.combinePatternIds) {
        const loaded: Pattern[] = [];
        for (const pid of b.combinePatternIds) {
          const r = await getPatternById(pid);
          if (r) loaded.push(r.pattern);
        }
        setCombinePatterns(loaded);
      }

      setLoading(false);
    }
    load();
  }, [stepNumber, isStepCompleted]);

  const handleComplete = useCallback(() => {
    completeBuildingBlockStep(stepNumber);
    setCompleted(true);
  }, [completeBuildingBlockStep, stepNumber]);

  const handleNext = useCallback(() => {
    if (stepNumber < TOTAL_STEPS) {
      router.push(`/step/${stepNumber + 1}`);
    } else {
      router.push("/path/blocks");
    }
  }, [router, stepNumber]);

  if (loading) {
    return (
      <div className="mx-auto max-w-lg px-4 py-6">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-muted-bg rounded w-1/3" />
          <div className="h-6 bg-muted-bg rounded w-2/3" />
          <div className="h-40 bg-muted-bg rounded-xl mt-6" />
        </div>
      </div>
    );
  }

  if (!block) {
    return (
      <div className="mx-auto max-w-lg px-4 py-6 text-center">
        <p className="text-muted text-lg font-bangla">এই ধাপ পাওয়া যায়নি</p>
        <p className="text-sm text-muted mt-1">Step not found</p>
        <Link
          href="/path/blocks"
          className="text-primary text-sm mt-4 inline-block hover:underline"
        >
          পথে ফিরে যাও
        </Link>
      </div>
    );
  }

  // Check if step is locked
  const unlocked = isStepUnlocked(stepNumber, progress.buildingBlockSteps);
  if (!unlocked) {
    return (
      <div className="mx-auto max-w-lg px-4 py-6 text-center">
        <div className="text-5xl mb-4">🔒</div>
        <p className="font-bangla text-lg font-bold mb-2">
          এই ধাপ এখনো খোলা হয়নি
        </p>
        <p className="text-sm text-muted mb-4">
          আগের ধাপগুলো শেষ করো
        </p>
        <Link
          href={`/step/${stepNumber - 1}`}
          className="inline-block px-6 py-3 rounded-xl bg-primary text-white font-medium font-bangla"
        >
          ধাপ {stepNumber - 1} এ যাও →
        </Link>
      </div>
    );
  }

  const phaseInfo = getPhaseInfo(block.phase);

  return (
    <div className="mx-auto max-w-lg px-4 py-6 pb-24">
      {/* Step Header */}
      <StepHeader
        block={block}
        phaseInfo={phaseInfo}
        completed={completed}
      />

      {/* Content based on type */}
      {block.buildingType === "new" && pattern && (
        <NewStepContent
          block={block}
          pattern={pattern}
          settings={settings}
          practiceScore={practiceScore}
          setPracticeScore={setPracticeScore}
        />
      )}

      {block.buildingType === "variation" && pattern && (
        <VariationStepContent
          block={block}
          pattern={pattern}
          settings={settings}
          practiceScore={practiceScore}
          setPracticeScore={setPracticeScore}
        />
      )}

      {block.buildingType === "combine" && pattern && (
        <CombineStepContent
          block={block}
          pattern={pattern}
          combinePatterns={combinePatterns}
          settings={settings}
          practiceScore={practiceScore}
          setPracticeScore={setPracticeScore}
        />
      )}

      {block.buildingType === "checkpoint" && (
        <CheckpointContent block={block} phaseInfo={phaseInfo} />
      )}

      {/* Complete & Next Button */}
      <div className="mt-8 space-y-3">
        {!completed ? (
          <button
            onClick={handleComplete}
            className="w-full py-4 rounded-xl bg-primary text-white font-bangla font-bold text-lg shadow-lg hover:bg-primary/90 transition-all active:scale-95"
          >
            পারি! পরেরটা শেখো →
          </button>
        ) : (
          <div className="space-y-3">
            <div className="p-4 rounded-xl bg-success/10 border border-success/30 text-center">
              <p className="font-bangla text-sm font-bold text-success">
                ✅ এই ধাপ শেষ!
              </p>
              <p className="font-bangla text-xs text-muted mt-1">
                {block.unlockMessage_bn}
              </p>
            </div>
            {stepNumber < TOTAL_STEPS && (
              <button
                onClick={handleNext}
                className="w-full py-4 rounded-xl bg-primary text-white font-bangla font-bold text-lg shadow-lg hover:bg-primary/90 transition-all active:scale-95"
              >
                পরের ধাপে যাও →
              </button>
            )}
          </div>
        )}

        {/* Navigation */}
        <div className="flex items-center justify-between pt-3 border-t border-card-border">
          {stepNumber > 1 ? (
            <Link
              href={`/step/${stepNumber - 1}`}
              className="text-sm text-primary hover:underline font-bangla"
            >
              ← আগের ধাপ
            </Link>
          ) : (
            <div />
          )}
          <Link
            href="/path/blocks"
            className="text-sm text-muted hover:text-primary font-bangla"
          >
            পুরো পথ দেখো
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ================================================================
   STEP HEADER
   ================================================================ */

function StepHeader({
  block,
  phaseInfo,
  completed,
}: {
  block: BuildingBlock;
  phaseInfo: ReturnType<typeof getPhaseInfo>;
  completed: boolean;
}) {
  return (
    <div className="mb-6">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-muted mb-3">
        <Link href="/path/blocks" className="hover:text-primary">
          পথ
        </Link>
        <span>/</span>
        <span>
          {phaseInfo.icon} {phaseInfo.name_bn}
        </span>
        <span>/</span>
        <span className="text-foreground">ধাপ {block.step}</span>
      </div>

      {/* Step number + progress */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-primary">
            ধাপ {block.step}
          </span>
          <span className="text-xs text-muted">/ {TOTAL_STEPS}</span>
          {completed && <span className="text-success">✅</span>}
        </div>
        <span
          className={`px-2 py-1 rounded-lg text-[10px] font-bold ${
            block.buildingType === "new"
              ? "bg-primary/10 text-primary"
              : block.buildingType === "variation"
              ? "bg-warning-light text-warning"
              : block.buildingType === "combine"
              ? "bg-accent-light text-accent"
              : "bg-success/10 text-success"
          }`}
        >
          {block.buildingType === "new"
            ? "🆕 নতুন"
            : block.buildingType === "variation"
            ? "🔄 বদল"
            : block.buildingType === "combine"
            ? "🔗 জোড়া"
            : "🏁 চেকপয়েন্ট"}
        </span>
      </div>

      {/* Title */}
      <h1 className="font-bangla text-xl font-bold mb-1">{block.title_bn}</h1>
      <p className="text-sm text-muted">{block.title_en}</p>

      {/* Progress bar for current phase */}
      <div className="mt-3 flex items-center gap-2">
        <div className="flex-1 h-1.5 rounded-full bg-muted-bg overflow-hidden">
          <div
            className="h-full rounded-full bg-primary transition-all"
            style={{
              width: `${((block.step - phaseInfo.steps[0]) / (phaseInfo.steps[1] - phaseInfo.steps[0] + 1)) * 100}%`,
            }}
          />
        </div>
        <span className="text-[10px] text-muted font-bangla">
          {phaseInfo.name_bn}
        </span>
      </div>
    </div>
  );
}

/* ================================================================
   NEW STEP — Learn a new pattern
   ================================================================ */

function NewStepContent({
  block,
  pattern,
  settings,
  practiceScore,
  setPracticeScore,
}: {
  block: BuildingBlock;
  pattern: Pattern;
  settings: { showBangla: boolean };
  practiceScore: { correct: number; total: number };
  setPracticeScore: React.Dispatch<React.SetStateAction<{ correct: number; total: number }>>;
}) {
  return (
    <div>
      {/* Unlock message */}
      <div className="p-4 rounded-xl bg-primary/5 border border-primary/20 mb-6">
        <p className="font-bangla text-sm text-primary font-medium">
          💡 {block.unlockMessage_bn}
        </p>
      </div>

      {/* Formula */}
      <div className="p-4 rounded-xl border border-primary/20 bg-primary-light mb-6">
        <div className="text-xs font-medium text-primary mb-2 font-bangla">
          এভাবে বলো
        </div>
        <PatternFormula
          formula={block.formula}
          formula_bn={block.formula_bn}
          slots={pattern.slots}
          size="lg"
        />
        {pattern.formulaPronunciation_bn && (
          <p className="font-bangla text-sm text-muted mt-2">
            🗣️ উচ্চারণ: {pattern.formulaPronunciation_bn}
          </p>
        )}
        <div className="mt-3">
          <AudioPlayer text={block.formula.replace(/\[.*?\]/g, "something")} />
        </div>
      </div>

      {/* Chunks */}
      {pattern.chunks && pattern.chunks.length > 0 && (
        <div className="mb-6">
          <SectionHeader icon="🎯" title="মুখস্থ করো" titleEn="Memorize" />
          <div className="flex flex-wrap gap-2">
            {pattern.chunks.map((chunk, i) => (
              <div
                key={i}
                className="p-3 rounded-xl bg-primary-light border border-primary/20 flex items-center gap-3"
              >
                <div>
                  <p className="text-base font-bold text-primary">{chunk.en}</p>
                  <p className="font-bangla text-sm">{chunk.bn}</p>
                </div>
                <div className="pl-3 border-l border-primary/20">
                  <p className="font-bangla text-xs text-muted">উচ্চারণ:</p>
                  <p className="font-bangla text-sm font-medium">
                    {chunk.pronunciation_bn}
                  </p>
                </div>
                <AudioPlayer text={chunk.en} />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Word Bridge */}
      {pattern.wordMap && (
        <div className="mb-6">
          <SectionHeader icon="🗺️" title="শব্দ-সেতু" titleEn="Word bridge" />
          <WordBridgeMap wordMap={pattern.wordMap} />
        </div>
      )}

      {/* Conversion Steps */}
      {pattern.conversionSteps && (
        <div className="mb-6">
          <SectionHeader
            icon="🔄"
            title="বাংলা → ইংরেজি"
            titleEn="Step by step"
          />
          <ConversionStepsDisplay steps={pattern.conversionSteps} />
        </div>
      )}

      {/* Examples (first 5) */}
      <div className="mb-6">
        <SectionHeader icon="📝" title="উদাহরণ" titleEn="Examples" />
        <div className="space-y-2">
          {pattern.examples.slice(0, 5).map((ex, i) => (
            <div
              key={i}
              className="p-3 rounded-lg bg-card border border-card-border"
            >
              <div className="flex items-start gap-3">
                <span className="text-xs text-muted font-mono shrink-0 mt-1">
                  {i + 1}.
                </span>
                <div className="flex-1">
                  <p className="text-sm font-medium">{ex.en}</p>
                  {settings.showBangla && (
                    <p className="font-bangla text-sm text-muted">{ex.bn}</p>
                  )}
                  {ex.pronunciation_bn && (
                    <p className="font-bangla text-xs text-muted/60 mt-0.5">
                      🗣️ {ex.pronunciation_bn}
                    </p>
                  )}
                </div>
                <AudioPlayer text={ex.en} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Practice */}
      <QuickPractice
        pattern={pattern}
        exerciseCount={3}
        practiceScore={practiceScore}
        setPracticeScore={setPracticeScore}
      />

      {/* Link to full pattern */}
      <div className="mt-4 text-center">
        <Link
          href={`/pattern/${pattern.id}`}
          className="text-xs text-muted hover:text-primary font-bangla"
        >
          📖 পুরো প্যাটার্ন দেখো ({pattern.id})
        </Link>
      </div>
    </div>
  );
}

/* ================================================================
   VARIATION STEP — Modify an existing pattern
   ================================================================ */

function VariationStepContent({
  block,
  pattern,
  settings,
  practiceScore,
  setPracticeScore,
}: {
  block: BuildingBlock;
  pattern: Pattern;
  settings: { showBangla: boolean };
  practiceScore: { correct: number; total: number };
  setPracticeScore: React.Dispatch<React.SetStateAction<{ correct: number; total: number }>>;
}) {
  // Find matching variation from pattern data
  const variation = pattern.variations?.find(
    (v) => v.variant === block.variationKey
  );

  return (
    <div>
      {/* Base → Variation comparison */}
      <div className="p-4 rounded-xl bg-warning-light border border-warning/20 mb-6">
        <p className="font-bangla text-sm text-warning font-medium mb-3">
          🔄 তুমি জানো → এবার শেখো
        </p>
        <div className="space-y-2">
          <div className="p-3 rounded-lg bg-card/80">
            <p className="text-xs text-muted font-bangla mb-1">তুমি জানো:</p>
            <p className="text-sm font-medium">{pattern.formula}</p>
            <p className="font-bangla text-sm text-muted">{pattern.formula_bn}</p>
          </div>
          <div className="text-center text-lg">↓</div>
          <div className="p-3 rounded-lg bg-primary-light border border-primary/20">
            <p className="text-xs text-primary font-bangla mb-1">
              এবার শেখো:
            </p>
            <p className="text-sm font-bold text-primary">{block.formula}</p>
            <p className="font-bangla text-sm">{block.formula_bn}</p>
          </div>
        </div>
      </div>

      {/* Audio */}
      <div className="mb-6">
        <AudioPlayer text={block.formula.replace(/\[.*?\]/g, "something")} />
      </div>

      {/* Unlock message */}
      <div className="p-3 rounded-xl bg-primary/5 border border-primary/20 mb-6">
        <p className="font-bangla text-sm text-primary">
          💡 {block.unlockMessage_bn}
        </p>
      </div>

      {/* Variation examples */}
      {variation && variation.examples.length > 0 && (
        <div className="mb-6">
          <SectionHeader icon="📝" title="উদাহরণ" titleEn="Examples" />
          <div className="space-y-2">
            {variation.examples.map((ex, i) => (
              <div
                key={i}
                className="p-3 rounded-lg bg-card border border-card-border"
              >
                <p className="text-sm font-medium">{ex.en}</p>
                {settings.showBangla && (
                  <p className="font-bangla text-sm text-muted">{ex.bn}</p>
                )}
                {ex.pronunciation_bn && (
                  <p className="font-bangla text-xs text-muted/60 mt-0.5">
                    🗣️ {ex.pronunciation_bn}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Fallback: show first 3 examples if no variation data */}
      {(!variation || variation.examples.length === 0) && (
        <div className="mb-6">
          <SectionHeader icon="📝" title="উদাহরণ" titleEn="Examples" />
          <div className="space-y-2">
            {pattern.examples.slice(0, 3).map((ex, i) => (
              <div
                key={i}
                className="p-3 rounded-lg bg-card border border-card-border"
              >
                <p className="text-sm font-medium">{ex.en}</p>
                {settings.showBangla && (
                  <p className="font-bangla text-sm text-muted">{ex.bn}</p>
                )}
                {ex.pronunciation_bn && (
                  <p className="font-bangla text-xs text-muted/60 mt-0.5">
                    🗣️ {ex.pronunciation_bn}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Quick Practice */}
      <QuickPractice
        pattern={pattern}
        exerciseCount={2}
        effectiveFormula={block.formula}
        practiceScore={practiceScore}
        setPracticeScore={setPracticeScore}
      />
    </div>
  );
}

/* ================================================================
   COMBINE STEP — Combine 2+ patterns
   ================================================================ */

function CombineStepContent({
  block,
  pattern,
  combinePatterns,
  settings,
  practiceScore,
  setPracticeScore,
}: {
  block: BuildingBlock;
  pattern: Pattern;
  combinePatterns: Pattern[];
  settings: { showBangla: boolean };
  practiceScore: { correct: number; total: number };
  setPracticeScore: React.Dispatch<React.SetStateAction<{ correct: number; total: number }>>;
}) {
  return (
    <div>
      {/* Combine intro */}
      <div className="p-4 rounded-xl bg-accent-light border border-accent/20 mb-6 text-center">
        <p className="text-3xl mb-2">🔗</p>
        <p className="font-bangla text-base font-bold text-accent">
          তুমি ২টা ব্লক জানো। এখন জোড়া লাগাও!
        </p>
        <p className="text-xs text-muted mt-1">
          Combine what you&apos;ve learned!
        </p>
      </div>

      {/* Show patterns side by side */}
      {combinePatterns.length > 0 && (
        <div className="grid gap-3 mb-6">
          {combinePatterns.map((p) => (
            <div
              key={p.id}
              className="p-3 rounded-xl bg-card border border-card-border"
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-mono text-muted">{p.id}</span>
                <span className="font-bangla text-xs text-muted">
                  {p.patternName_bn}
                </span>
              </div>
              <PatternFormula
                formula={p.formula}
                formula_bn={p.formula_bn}
                slots={p.slots}
                size="md"
              />
            </div>
          ))}
        </div>
      )}

      {/* Combined example */}
      {block.combineExample && (
        <div className="p-4 rounded-xl bg-primary-light border border-primary/20 mb-6">
          <SectionHeader
            icon="✨"
            title="জোড়া লাগিয়ে বলো"
            titleEn="Say it combined"
          />
          <div className="p-3 rounded-lg bg-card/80">
            <p className="text-base font-bold">{block.combineExample.en}</p>
            <p className="font-bangla text-sm text-muted mt-1">
              {block.combineExample.bn}
            </p>
          </div>
          <div className="mt-3">
            <AudioPlayer text={block.combineExample.en} />
          </div>
        </div>
      )}

      {/* Unlock message */}
      <div className="p-3 rounded-xl bg-primary/5 border border-primary/20 mb-6">
        <p className="font-bangla text-sm text-primary">
          💡 {block.unlockMessage_bn}
        </p>
      </div>

      {/* Quick Practice with main pattern */}
      <QuickPractice
        pattern={pattern}
        exerciseCount={1}
        practiceScore={practiceScore}
        setPracticeScore={setPracticeScore}
      />
    </div>
  );
}

/* ================================================================
   CHECKPOINT — Phase completion celebration
   ================================================================ */

function CheckpointContent({
  block,
  phaseInfo,
}: {
  block: BuildingBlock;
  phaseInfo: ReturnType<typeof getPhaseInfo>;
}) {
  return (
    <div className="text-center py-8">
      <div className="text-6xl mb-4">🎉</div>
      <h2 className="font-bangla text-2xl font-bold mb-3 text-primary">
        অভিনন্দন!
      </h2>
      <p className="text-sm text-muted mb-6">Congratulations!</p>

      {block.checkpointMessage_bn && (
        <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20 mb-6 text-left">
          <p className="font-bangla text-base leading-relaxed">
            {block.checkpointMessage_bn}
          </p>
        </div>
      )}

      <div className="p-4 rounded-xl bg-card border border-card-border mb-6">
        <div className="flex items-center justify-center gap-3 mb-2">
          <span className="text-2xl">{phaseInfo.icon}</span>
          <div>
            <p className="font-bangla font-bold">{phaseInfo.name_bn}</p>
            <p className="text-xs text-muted">{phaseInfo.name_en}</p>
          </div>
        </div>
        <p className="font-bangla text-sm text-muted">
          {phaseInfo.description_bn}
        </p>
      </div>

      {block.phase < 4 && (
        <p className="font-bangla text-sm text-muted">
          পরের ফেজ: {getPhaseInfo((block.phase + 1) as 1 | 2 | 3 | 4).icon}{" "}
          {getPhaseInfo((block.phase + 1) as 1 | 2 | 3 | 4).name_bn}
        </p>
      )}
    </div>
  );
}

/* ================================================================
   SHARED COMPONENTS
   ================================================================ */

function SectionHeader({
  icon,
  title,
  titleEn,
}: {
  icon: string;
  title: string;
  titleEn: string;
}) {
  return (
    <div className="flex items-center gap-2 mb-3">
      <span className="text-base">{icon}</span>
      <h2 className="font-bangla text-sm font-bold">{title}</h2>
      <span className="text-xs text-muted">({titleEn})</span>
    </div>
  );
}

function AudioPlayer({ text }: { text: string }) {
  const [playing, setPlaying] = useState(false);
  const [ttsAvailable, setTtsAvailable] = useState(true);

  useEffect(() => {
    setTtsAvailable(
      typeof window !== "undefined" && "speechSynthesis" in window
    );
  }, []);

  const speak = () => {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.rate = 0.85;
    utterance.onstart = () => setPlaying(true);
    utterance.onend = () => setPlaying(false);
    utterance.onerror = () => setPlaying(false);
    window.speechSynthesis.speak(utterance);
  };

  if (!ttsAvailable) return null;

  return (
    <button
      onClick={speak}
      className={`shrink-0 p-2 rounded-lg border text-sm transition-colors ${
        playing
          ? "border-primary bg-primary-light text-primary"
          : "border-card-border bg-card text-muted hover:text-foreground"
      }`}
      title="উচ্চারণ শোনো"
    >
      {playing ? "🔊" : "🔈"}
    </button>
  );
}

function WordBridgeMap({ wordMap }: { wordMap: StructuredWordMap }) {
  const typeColors = {
    direct: "bg-card border-card-border text-foreground",
    added: "bg-warning-light border-warning/30 text-warning",
    moved: "bg-primary-light border-primary/30 text-primary",
    split: "bg-accent-light border-accent/30 text-accent",
  };

  return (
    <div className="p-4 rounded-xl bg-card border border-card-border">
      <div className="mb-3">
        <div className="text-xs text-muted mb-1 font-bangla">বাংলা:</div>
        <p className="font-bangla text-base font-medium">
          {wordMap.bn_sentence}
        </p>
      </div>
      <div className="text-center text-muted text-lg mb-3">↓</div>
      <div className="mb-4">
        <div className="text-xs text-muted mb-1">English:</div>
        <p className="text-base font-medium">{wordMap.en_sentence}</p>
      </div>
      <div className="flex flex-wrap gap-2">
        {wordMap.mappings.map((m, i) => (
          <div
            key={i}
            className={`px-3 py-2 rounded-lg border text-center ${typeColors[m.type]}`}
          >
            <p className="font-bangla text-xs">{m.bn_word}</p>
            <p className="text-xs font-bold mt-0.5">↓</p>
            <p className="text-sm font-medium">{m.en_word}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ConversionStepsDisplay({
  steps,
}: {
  steps: NonNullable<Pattern["conversionSteps"]>;
}) {
  return (
    <div className="p-4 rounded-xl bg-card border border-card-border">
      <p className="font-bangla text-sm mb-3">
        <span className="text-muted">তুমি মনে মনে বলো: </span>
        <span className="font-medium">
          &ldquo;{steps.banglaThought}&rdquo;
        </span>
      </p>
      <div className="space-y-2">
        {steps.steps.map((step, i) => (
          <div key={i} className="flex items-start gap-3 pl-2">
            <span className="shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center mt-0.5">
              {i + 1}
            </span>
            <div>
              <p className="font-bangla text-sm">{step.step_bn}</p>
              <p className="text-sm font-medium text-primary mt-0.5">
                &rarr; &ldquo;{step.result}&rdquo;
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 pt-3 border-t border-card-border flex items-center gap-2">
        <span className="text-success font-bold text-sm">✅</span>
        <div>
          <p className="font-bangla text-sm">
            &ldquo;{steps.finalResult_bn}&rdquo;
          </p>
          <p className="text-sm font-bold">
            = &ldquo;{steps.finalResult}&rdquo;
          </p>
        </div>
      </div>
    </div>
  );
}

function QuickPractice({
  pattern,
  exerciseCount,
  effectiveFormula,
  practiceScore,
  setPracticeScore,
}: {
  pattern: Pattern;
  exerciseCount: number;
  effectiveFormula?: string;
  practiceScore: { correct: number; total: number };
  setPracticeScore: React.Dispatch<React.SetStateAction<{ correct: number; total: number }>>;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [exampleIndex, setExampleIndex] = useState(() =>
    Math.floor(Math.random() * pattern.examples.length)
  );
  const [showResult, setShowResult] = useState(false);
  const [lastCorrect, setLastCorrect] = useState(false);

  const hasSlots =
    pattern.slots.length > 0 && /\[([A-Z_]+)\]/.test(pattern.formula);

  if (!hasSlots) return null;

  const example = pattern.examples[exampleIndex];
  const isDone = currentIndex >= exerciseCount;

  const handleAnswer = (correct: boolean) => {
    setLastCorrect(correct);
    setShowResult(true);
    setPracticeScore((prev) => ({
      correct: prev.correct + (correct ? 1 : 0),
      total: prev.total + 1,
    }));
  };

  const nextQuestion = () => {
    setShowResult(false);
    setCurrentIndex((prev) => prev + 1);
    let next = Math.floor(Math.random() * pattern.examples.length);
    if (pattern.examples.length > 1) {
      while (next === exampleIndex) {
        next = Math.floor(Math.random() * pattern.examples.length);
      }
    }
    setExampleIndex(next);
  };

  if (isDone) {
    return (
      <div className="p-4 rounded-xl bg-success/5 border border-success/20 text-center">
        <p className="font-bangla text-sm font-bold text-success mb-1">
          অনুশীলন শেষ!
        </p>
        <p className="text-xs text-muted">
          {practiceScore.correct}/{practiceScore.total} সঠিক
        </p>
      </div>
    );
  }

  return (
    <div className="p-4 rounded-xl border-2 border-primary/20 bg-primary-light">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="text-lg">🎯</span>
          <h2 className="font-bangla text-sm font-bold">অনুশীলন করো</h2>
          <span className="text-xs text-muted">
            ({currentIndex + 1}/{exerciseCount})
          </span>
        </div>
        {practiceScore.total > 0 && (
          <span className="text-xs font-medium px-2 py-1 rounded-full bg-card">
            {practiceScore.correct}/{practiceScore.total}
          </span>
        )}
      </div>

      <div className="mb-3 p-3 rounded-lg bg-card">
        <p className="font-bangla text-sm mb-1 text-muted">ইংরেজিতে বলো:</p>
        <p className="font-bangla font-medium">{example.bn}</p>
      </div>

      {!showResult ? (
        <WordBankExercise
          key={`${currentIndex}-${exampleIndex}`}
          pattern={pattern}
          example={example}
          practiceLevel={1}
          onAnswer={handleAnswer}
          effectiveFormula={effectiveFormula}
        />
      ) : (
        <div className="space-y-3">
          <div
            className={`p-3 rounded-lg text-center ${
              lastCorrect
                ? "bg-success-light border border-success/30"
                : "bg-danger-light border border-danger/30"
            }`}
          >
            <p className="font-bangla text-sm font-medium">
              {lastCorrect ? "সঠিক! দারুণ!" : "আবার চেষ্টা করো!"}
            </p>
            <p className="text-sm font-medium mt-1">{example.en}</p>
            {example.pronunciation_bn && (
              <p className="font-bangla text-xs text-muted mt-1">
                🗣️ {example.pronunciation_bn}
              </p>
            )}
          </div>
          {currentIndex < exerciseCount - 1 ? (
            <button
              onClick={nextQuestion}
              className="w-full py-2.5 rounded-lg bg-primary text-white text-sm font-medium font-bangla hover:bg-primary/90 transition-colors"
            >
              পরের প্রশ্ন →
            </button>
          ) : (
            <button
              onClick={nextQuestion}
              className="w-full py-2.5 rounded-lg bg-success text-white text-sm font-medium font-bangla hover:bg-success/90 transition-colors"
            >
              অনুশীলন শেষ ✅
            </button>
          )}
        </div>
      )}
    </div>
  );
}
