"use client";

import { useState } from "react";
import Link from "next/link";
import { useProgress } from "@/contexts/ProgressContext";
import {
  buildingBlocks,
  getPhaseInfo,
  getPhaseSteps,
  getNextStep,
  getCompletedCount,
  isStepUnlocked,
  TOTAL_STEPS,
} from "@/content/building-blocks";
import type { BuildingBlock } from "@/content/building-blocks";

const typeIcons: Record<BuildingBlock["buildingType"], string> = {
  new: "🆕",
  variation: "🔄",
  combine: "🔗",
  checkpoint: "🏁",
};

const typeLabels: Record<BuildingBlock["buildingType"], string> = {
  new: "নতুন",
  variation: "বদল",
  combine: "জোড়া",
  checkpoint: "চেকপয়েন্ট",
};

export default function BuildingBlockPathPage() {
  const { progress, isStepCompleted } = useProgress();
  const completedSteps = progress.buildingBlockSteps;
  const completedCount = getCompletedCount(completedSteps);
  const nextStep = getNextStep(completedSteps);
  const progressPercent = Math.round((completedCount / TOTAL_STEPS) * 100);

  const phases = [1, 2, 3, 4] as const;

  return (
    <div className="mx-auto max-w-lg px-4 py-6 pb-24">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="font-bangla text-2xl font-bold mb-1">
          বিল্ডিং ব্লক পথ
        </h1>
        <p className="text-sm text-muted">Building Block Path</p>
      </div>

      {/* Overall Progress */}
      <div className="p-4 rounded-xl border border-card-border bg-card mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="font-bangla text-sm font-bold">মোট অগ্রগতি</span>
          <span className="text-sm font-medium">
            {completedCount}/{TOTAL_STEPS}
          </span>
        </div>
        <div className="h-3 rounded-full bg-muted-bg overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-500 ease-out"
            style={{
              width: `${progressPercent}%`,
              background:
                progressPercent >= 100 ? "var(--success)" : "var(--primary)",
            }}
          />
        </div>
        <p className="text-xs text-muted mt-1 text-right">{progressPercent}%</p>
      </div>

      {/* Phases */}
      <div className="space-y-4">
        {phases.map((phase) => (
          <PhaseSection
            key={phase}
            phase={phase}
            completedSteps={completedSteps}
            nextStep={nextStep}
            isStepCompleted={isStepCompleted}
          />
        ))}
      </div>

      {/* Footer link */}
      <div className="mt-8 text-center">
        <Link
          href="/categories"
          className="text-sm text-muted hover:text-primary transition-colors font-bangla"
        >
          📚 সব ক্যাটাগরি দেখো
        </Link>
      </div>
    </div>
  );
}

function PhaseSection({
  phase,
  completedSteps,
  nextStep,
  isStepCompleted,
}: {
  phase: 1 | 2 | 3 | 4;
  completedSteps: number[];
  nextStep: BuildingBlock | null;
  isStepCompleted: (step: number) => boolean;
}) {
  const info = getPhaseInfo(phase);
  const steps = getPhaseSteps(phase);
  const phaseCompletedCount = steps.filter((s) =>
    completedSteps.includes(s.step)
  ).length;
  const isPhaseUnlocked = isStepUnlocked(info.steps[0], completedSteps);
  const isCurrentPhase = nextStep
    ? nextStep.phase === phase
    : false;

  const [expanded, setExpanded] = useState(isCurrentPhase || phase === 1);

  return (
    <div
      className={`rounded-xl border overflow-hidden transition-colors ${
        isPhaseUnlocked
          ? "border-card-border bg-card"
          : "border-card-border/50 bg-muted-bg/30"
      }`}
    >
      {/* Phase Header */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full p-4 flex items-center gap-3 cursor-pointer"
      >
        <span className="text-2xl">{info.icon}</span>
        <div className="flex-1 text-left">
          <div className="flex items-center gap-2">
            <span className="font-bangla font-bold text-sm">
              {info.name_bn}
            </span>
            <span className="text-xs text-muted">({info.name_en})</span>
            {isCurrentPhase && (
              <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-primary text-white">
                এখানে আছো
              </span>
            )}
          </div>
          <p className="font-bangla text-xs text-muted mt-0.5">
            {info.description_bn}
          </p>
          <div className="flex items-center gap-2 mt-1">
            <div className="flex-1 h-1.5 rounded-full bg-muted-bg overflow-hidden">
              <div
                className="h-full rounded-full bg-success transition-all"
                style={{
                  width: `${(phaseCompletedCount / steps.length) * 100}%`,
                }}
              />
            </div>
            <span className="text-[10px] text-muted shrink-0">
              {phaseCompletedCount}/{steps.length}
            </span>
          </div>
        </div>
        <span
          className="text-muted text-xs transition-transform duration-200"
          style={{ transform: expanded ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          ▼
        </span>
      </button>

      {/* Step List */}
      {expanded && (
        <div className="px-4 pb-4 space-y-1">
          {steps.map((block) => {
            const completed = isStepCompleted(block.step);
            const isCurrent = nextStep?.step === block.step;
            const unlocked = isStepUnlocked(block.step, completedSteps);

            return (
              <StepRow
                key={block.step}
                block={block}
                completed={completed}
                isCurrent={isCurrent}
                unlocked={unlocked}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

function StepRow({
  block,
  completed,
  isCurrent,
  unlocked,
}: {
  block: BuildingBlock;
  completed: boolean;
  isCurrent: boolean;
  unlocked: boolean;
}) {
  const content = (
    <div
      className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
        isCurrent
          ? "bg-primary/10 border border-primary/30"
          : completed
          ? "bg-success/5 border border-success/20"
          : unlocked
          ? "bg-card border border-card-border hover:border-primary/30"
          : "bg-muted-bg/50 border border-transparent opacity-50"
      }`}
    >
      {/* Status indicator */}
      <div className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold">
        {completed ? (
          <span className="text-success">✅</span>
        ) : isCurrent ? (
          <span className="w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center animate-pulse">
            {block.step}
          </span>
        ) : (
          <span
            className={`w-7 h-7 rounded-full flex items-center justify-center ${
              unlocked
                ? "bg-muted-bg text-muted"
                : "bg-muted-bg/50 text-muted/50"
            }`}
          >
            {unlocked ? block.step : "🔒"}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1.5">
          <span className="text-xs">{typeIcons[block.buildingType]}</span>
          <span
            className={`font-bangla text-sm font-medium truncate ${
              !unlocked ? "text-muted/50" : ""
            }`}
          >
            {block.title_bn}
          </span>
        </div>
        <p
          className={`text-xs truncate mt-0.5 font-mono ${
            !unlocked ? "text-muted/30" : "text-muted"
          }`}
        >
          {block.formula}
        </p>
      </div>

      {/* Type badge */}
      <span
        className={`shrink-0 text-[10px] font-bangla px-1.5 py-0.5 rounded ${
          !unlocked
            ? "text-muted/30"
            : "text-muted bg-muted-bg"
        }`}
      >
        {typeLabels[block.buildingType]}
      </span>

      {/* Current indicator */}
      {isCurrent && (
        <span className="shrink-0 text-xs text-primary font-bangla font-bold">
          ←
        </span>
      )}
    </div>
  );

  if ((completed || isCurrent || unlocked) && block.buildingType !== "checkpoint") {
    return (
      <Link href={`/step/${block.step}`} className="block">
        {content}
      </Link>
    );
  }

  if (completed && block.buildingType === "checkpoint") {
    return (
      <Link href={`/step/${block.step}`} className="block">
        {content}
      </Link>
    );
  }

  return content;
}
