"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import type {
  Pattern,
  PatternCategory,
  PatternVariation,
  DialogueChain,
  StructuredWordMap,
  AnswerTemplate,
} from "@/types/pattern";
import { PatternFormula } from "@/components/patterns/PatternFormula";
import { PatternExamples } from "@/components/patterns/PatternExamples";
import { DifficultyBadge } from "@/components/patterns/DifficultyBadge";
import { FormalityBadge } from "@/components/patterns/FormalityBadge";
import { BanglaStructureMap } from "@/components/patterns/BanglaStructureMap";
import { getBridgeRules } from "@/content/bridge-rules";
import { useProgress } from "@/contexts/ProgressContext";
import { useSettings } from "@/contexts/SettingsContext";
import { getMasteryLevel, masteryConfig } from "@/lib/mastery";
import { getCategoryImportSlug } from "@/content/index";
import WordBankExercise from "@/components/practice/WordBankExercise";

type TabId = "learn" | "practice" | "use";

const TABS: { id: TabId; icon: string; label_bn: string; label: string }[] = [
  { id: "learn", icon: "📖", label_bn: "শেখো", label: "Learn" },
  { id: "practice", icon: "✏️", label_bn: "অনুশীলন", label: "Practice" },
  { id: "use", icon: "💬", label_bn: "ব্যবহার", label: "Use" },
];

export default function PatternDetailPage() {
  const params = useParams();
  const patternId = params.id as string;
  const [pattern, setPattern] = useState<Pattern | null>(null);
  const [category, setCategory] = useState<PatternCategory | null>(null);
  const [loading, setLoading] = useState(true);
  const { progress, toggleBookmark, isBookmarked } = useProgress();
  const { settings } = useSettings();

  // Default tab: if user has practiced this pattern, show Practice tab
  const hasPracticed = !!progress.completedPatterns[patternId];
  const [activeTab, setActiveTab] = useState<TabId>(hasPracticed ? "practice" : "learn");

  // Sync tab with URL hash
  useEffect(() => {
    const hash = window.location.hash.replace("#", "") as TabId;
    if (hash && TABS.some((t) => t.id === hash)) {
      setActiveTab(hash);
    }
  }, []);

  const handleTabChange = (tab: TabId) => {
    setActiveTab(tab);
    window.history.replaceState(null, "", `#${tab}`);
  };

  useEffect(() => {
    async function load() {
      const dotIndex = patternId.lastIndexOf(".");
      if (dotIndex === -1) {
        setLoading(false);
        return;
      }
      const categoryId = patternId.substring(0, dotIndex);

      try {
        const mod = await import(`@/content/categories/${getCategoryImportSlug(categoryId)}`);
        const cat = mod[`category${categoryId}`] as PatternCategory;
        setCategory(cat);
        const found = cat.patterns.find((p) => p.id === patternId);
        setPattern(found || null);
      } catch {
        setPattern(null);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [patternId]);

  if (loading) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-6">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-muted-bg rounded w-2/3" />
          <div className="h-4 bg-muted-bg rounded w-1/2" />
          <div className="h-32 bg-muted-bg rounded-xl mt-6" />
        </div>
      </div>
    );
  }

  if (!pattern || !category) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-6 text-center">
        <p className="text-muted text-lg">Pattern not found</p>
        <Link href="/categories" className="text-primary text-sm mt-4 inline-block hover:underline">
          Browse Categories
        </Link>
      </div>
    );
  }

  const bookmarked = isBookmarked(patternId);
  const mastery = getMasteryLevel(progress.completedPatterns[patternId]);
  const masteryInfo = masteryConfig[mastery];
  const appliedBridgeRules = pattern.bridgeRuleIds
    ? getBridgeRules(pattern.bridgeRuleIds)
    : [];

  // Check if Use tab has any content
  const hasUseContent =
    (pattern.usageSituations && pattern.usageSituations.length > 0) ||
    (pattern.answerTemplates && pattern.answerTemplates.length > 0) ||
    (pattern.dialogueChains && pattern.dialogueChains.length > 0) ||
    (pattern.sentenceBuilding && pattern.sentenceBuilding.length > 0);

  const visibleTabs = hasUseContent ? TABS : TABS.filter((t) => t.id !== "use");

  // Find adjacent patterns for prev/next navigation
  const patternIndex = category.patterns.findIndex((p) => p.id === patternId);
  const prevPattern = patternIndex > 0 ? category.patterns[patternIndex - 1] : null;
  const nextPattern = patternIndex < category.patterns.length - 1 ? category.patterns[patternIndex + 1] : null;

  return (
    <div className="mx-auto max-w-4xl px-4 py-6">
      {/* Breadcrumb */}
      <nav className="text-sm text-muted mb-4">
        <Link href="/" className="hover:text-foreground">Home</Link>
        <span className="mx-2">/</span>
        <Link href={`/categories/${category.slug}`} className="hover:text-foreground">
          {category.id}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">{pattern.id}</span>
      </nav>

      {/* Pattern Header — Always visible above tabs */}
      <div className="mb-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className={`text-sm ${masteryInfo.color}`} title={`${masteryInfo.label_bn} (${masteryInfo.label})`}>
                {masteryInfo.icon}
              </span>
              <span className="text-xs font-mono text-muted">{pattern.id}</span>
              <DifficultyBadge difficulty={pattern.difficulty} />
              <FormalityBadge formality={pattern.formality} />
            </div>
            {pattern.concept_bn ? (
              <>
                <h1 className="font-bangla text-2xl font-bold mb-1">{pattern.concept_bn}</h1>
                <p className="text-lg text-muted">{pattern.patternName}</p>
                {settings.showBangla && (
                  <p className="font-bangla text-muted text-sm">{pattern.patternName_bn}</p>
                )}
              </>
            ) : (
              <>
                <h1 className="text-lg font-bold mb-1">{pattern.patternName}</h1>
                {settings.showBangla && (
                  <p className="font-bangla text-muted">{pattern.patternName_bn}</p>
                )}
              </>
            )}
          </div>
          <button
            onClick={() => toggleBookmark(patternId)}
            className={`text-xl p-2 rounded-lg transition-colors ${
              bookmarked
                ? "text-amber-500 bg-amber-50 dark:bg-amber-900/20"
                : "text-muted hover:text-amber-500 hover:bg-card"
            }`}
            title={bookmarked ? "Remove bookmark" : "Add bookmark"}
            aria-label={bookmarked ? "বুকমার্ক সরাও (Remove bookmark)" : "বুকমার্ক করো (Add bookmark)"}
          >
            {bookmarked ? "★" : "☆"}
          </button>
        </div>
      </div>

      {/* Tab Navigation — Sticky below header */}
      <div className="sticky top-14 z-10 bg-background pb-1 mb-4 -mx-4 px-4 pt-1">
        <div className="flex gap-1 p-1 rounded-xl bg-muted-bg">
          {visibleTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`flex-1 flex flex-col items-center gap-0.5 py-2.5 rounded-lg text-xs font-medium transition-all ${
                activeTab === tab.id
                  ? "bg-card text-foreground shadow-sm"
                  : "text-muted hover:text-foreground"
              }`}
            >
              <span className="text-base leading-none">{tab.icon}</span>
              <span className="font-bangla">{tab.label_bn}</span>
              <span className="text-[10px] opacity-60">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      {activeTab === "learn" && (
        <LearnTabContent
          pattern={pattern}
          appliedBridgeRules={appliedBridgeRules}
          settings={settings}
        />
      )}

      {activeTab === "practice" && (
        <PracticeTabContent
          pattern={pattern}
          category={category}
          settings={settings}
        />
      )}

      {activeTab === "use" && (
        <UseTabContent
          pattern={pattern}
          category={category}
          settings={settings}
        />
      )}

      {/* Prev/Next Pattern Navigation */}
      {(prevPattern || nextPattern) && (
        <div className="flex items-stretch gap-2 pt-4 mt-4 border-t border-card-border">
          {prevPattern ? (
            <Link
              href={`/pattern/${prevPattern.id}`}
              className="flex-1 p-3 rounded-xl bg-card border border-card-border hover:border-primary/30 transition-colors text-left"
            >
              <span className="text-xs text-muted font-bangla">← আগের</span>
              <p className="text-sm font-medium mt-0.5 truncate">{prevPattern.patternName}</p>
              {prevPattern.patternName_bn && (
                <p className="font-bangla text-xs text-muted truncate">{prevPattern.patternName_bn}</p>
              )}
            </Link>
          ) : (
            <div className="flex-1" />
          )}
          {nextPattern ? (
            <Link
              href={`/pattern/${nextPattern.id}`}
              className="flex-1 p-3 rounded-xl bg-card border border-card-border hover:border-primary/30 transition-colors text-right"
            >
              <span className="text-xs text-muted font-bangla">পরের →</span>
              <p className="text-sm font-medium mt-0.5 truncate">{nextPattern.patternName}</p>
              {nextPattern.patternName_bn && (
                <p className="font-bangla text-xs text-muted truncate">{nextPattern.patternName_bn}</p>
              )}
            </Link>
          ) : (
            <div className="flex-1" />
          )}
        </div>
      )}

      {/* Navigation — Always visible */}
      <div className="flex items-center justify-between pt-3 mt-3 border-t border-card-border">
        <Link
          href={`/categories/${category.slug}`}
          className="text-sm text-primary hover:underline font-bangla"
        >
          ← {category.name_bn || category.name}
        </Link>
        <Link
          href={`/practice/${category.slug}`}
          className="px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-colors font-bangla"
        >
          অনুশীলন করো
        </Link>
      </div>
    </div>
  );
}

/* ================================================================
   TAB 1: LEARN — Core pattern understanding
   ================================================================ */

interface LearnTabProps {
  pattern: Pattern;
  appliedBridgeRules: ReturnType<typeof getBridgeRules>;
  settings: { showBangla: boolean };
}

function LearnTabContent({ pattern, appliedBridgeRules, settings }: LearnTabProps) {
  return (
    <div>
      {/* Chunks — "মুখস্থ করো" */}
      {pattern.chunks && pattern.chunks.length > 0 && (
        <div className="mb-6">
          <SectionHeader icon="🎯" title="মুখস্থ করো" titleEn="Memorize as one unit" />
          <div className="flex flex-wrap gap-2">
            {pattern.chunks.map((chunk, i) => (
              <div key={i} className="p-3 rounded-xl bg-primary-light border border-primary/20 flex items-center gap-3">
                <div>
                  <p className="text-base font-bold text-primary">{chunk.en}</p>
                  <p className="font-bangla text-sm">{chunk.bn}</p>
                </div>
                <div className="pl-3 border-l border-primary/20">
                  <p className="font-bangla text-xs text-muted">উচ্চারণ:</p>
                  <p className="font-bangla text-sm font-medium">{chunk.pronunciation_bn}</p>
                </div>
                <AudioPlayer text={chunk.en} />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Formula */}
      <div className="p-4 rounded-xl border border-primary/20 bg-primary-light mb-6">
        <div className="text-xs font-medium text-primary mb-2 font-bangla">এভাবে বলো <span className="opacity-60">(Pattern Formula)</span></div>
        <PatternFormula
          formula={pattern.formula}
          formula_bn={pattern.formula_bn}
          slots={pattern.slots}
          size="lg"
        />
        {pattern.formulaPronunciation_bn && (
          <p className="font-bangla text-sm text-muted mt-1">
            উচ্চারণ: {pattern.formulaPronunciation_bn}
          </p>
        )}
      </div>

      {/* Bridge Rule Badges */}
      {appliedBridgeRules.length > 0 && (
        <div className="mb-6">
          <div className="text-xs text-muted mb-2 font-bangla">এই প্যাটার্নে যে সেতু নিয়ম কাজ করে:</div>
          <div className="flex flex-wrap gap-1.5">
            {appliedBridgeRules.map((rule) => (
              <Link
                key={rule.id}
                href="/bridge-rules"
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-card border border-card-border text-xs hover:border-primary/30 transition-colors"
                title={rule.description_bn}
              >
                <span>{rule.icon}</span>
                <span className="font-bangla">{rule.shortName_bn}</span>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Audio */}
      <div className="mb-6">
        <AudioPlayer text={pattern.formula.replace(/\[.*?\]/g, "something")} />
      </div>

      {/* Word Bridge Map */}
      {pattern.wordMap && (
        <div className="mb-6">
          <SectionHeader icon="🗺️" title="শব্দ-সেতু" titleEn="Word bridge" />
          <WordBridgeMap wordMap={pattern.wordMap} />
        </div>
      )}

      {/* Conversion Steps */}
      {pattern.conversionSteps && (
        <div className="mb-6">
          <SectionHeader icon="🔄" title="বাংলা → ইংরেজি" titleEn="Step by step" />
          <div className="p-4 rounded-xl bg-card border border-card-border">
            <p className="font-bangla text-sm mb-3">
              <span className="text-muted">তুমি মনে মনে বলো: </span>
              <span className="font-medium">&ldquo;{pattern.conversionSteps.banglaThought}&rdquo;</span>
            </p>
            <div className="space-y-2">
              {pattern.conversionSteps.steps.map((step, i) => (
                <div key={i} className="flex items-start gap-3 pl-2">
                  <span className="shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center mt-0.5">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-bangla text-sm">{step.step_bn}</p>
                    <p className="text-sm font-medium text-primary mt-0.5">&rarr; &ldquo;{step.result}&rdquo;</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-3 pt-3 border-t border-card-border flex items-center gap-2">
              <span className="text-success font-bold text-sm">✅</span>
              <div>
                <p className="font-bangla text-sm">
                  &ldquo;{pattern.conversionSteps.finalResult_bn}&rdquo;
                </p>
                <p className="text-sm font-bold">= &ldquo;{pattern.conversionSteps.finalResult}&rdquo;</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bangla Structure Map (legacy) */}
      {pattern.banglaStructureMap && !pattern.wordMap && (
        <div className="mb-6">
          <BanglaStructureMap mapping={pattern.banglaStructureMap} />
        </div>
      )}

      {/* Slots */}
      <div className="mb-6">
        <h2 className="text-sm font-bold mb-3 font-bangla">খালি জায়গায় বসাও <span className="text-xs text-muted font-normal">(Slots)</span></h2>
        <div className="space-y-2">
          {pattern.slots.map((slot) => (
            <div key={slot.name} className="p-3 rounded-lg bg-card border border-card-border">
              <div className="flex items-center gap-2 mb-1">
                <span className="slot text-xs">{slot.name}</span>
                <span className="text-xs text-muted">{slot.description}</span>
              </div>
              {settings.showBangla && (
                <p className="font-bangla text-xs text-muted mb-1">{slot.description_bn}</p>
              )}
              <div className="flex flex-wrap gap-1.5 mt-2">
                {slot.examples.map((ex) => (
                  <span key={ex} className="text-xs px-2 py-0.5 rounded bg-muted-bg text-muted">
                    {ex}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Usage Note */}
      {pattern.usageNote && (
        <div className="mb-6 p-3 rounded-lg bg-warning-light border border-card-border">
          <div className="text-xs font-medium text-warning mb-1 font-bangla">কোথায় ব্যবহার করবে <span className="opacity-60">(Usage Note)</span></div>
          <p className="text-sm">{pattern.usageNote}</p>
          {settings.showBangla && pattern.usageNote_bn && (
            <p className="font-bangla text-sm text-muted mt-1">{pattern.usageNote_bn}</p>
          )}
        </div>
      )}

      {/* Simple Rules */}
      {pattern.simpleRules && pattern.simpleRules.length > 0 && (
        <CollapsibleSection icon="📏" title="সহজ নিয়ম" titleEn="Simple rules">
          <div className="space-y-2">
            {pattern.simpleRules.map((rule, i) => (
              <div key={i} className="p-3 rounded-lg bg-card border border-card-border">
                <p className="font-bangla text-sm font-medium mb-1">{rule.rule_bn}</p>
                <p className="text-xs text-muted italic">{rule.example}</p>
              </div>
            ))}
          </div>
        </CollapsibleSection>
      )}

      {/* Memory Trick */}
      {pattern.memoryTrick_bn && (
        <div className="mb-6 p-4 rounded-xl bg-accent-light border border-accent/20">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-base">💡</span>
            <span className="font-bangla text-sm font-bold text-accent">মনে রাখার কৌশল</span>
            <span className="text-xs text-muted">Memory trick</span>
          </div>
          <p className="font-bangla text-sm leading-relaxed">{pattern.memoryTrick_bn}</p>
        </div>
      )}
    </div>
  );
}

/* ================================================================
   TAB 2: PRACTICE — Examples, mistakes, variations
   ================================================================ */

interface PracticeTabProps {
  pattern: Pattern;
  category: PatternCategory;
  settings: { showBangla: boolean };
}

function PracticeTabContent({ pattern, category }: PracticeTabProps) {
  return (
    <div>
      {/* Inline Practice Exercise */}
      <InlinePractice pattern={pattern} />

      {/* Examples */}
      <div className="mb-6">
        <h2 className="text-sm font-bold mb-3 font-bangla">
          উদাহরণ ({pattern.examples.length}) <span className="text-xs text-muted font-normal">(Examples)</span>
        </h2>
        <PatternExamples examples={pattern.examples} initialCount={10} />
      </div>

      {/* Common Mistakes */}
      {pattern.commonMistakes && pattern.commonMistakes.length > 0 && (
        <CollapsibleSection icon="⚠️" title="সাধারণ ভুল" titleEn="Common mistakes" defaultOpen>
          <div className="space-y-2">
            {pattern.commonMistakes.map((mistake, i) => (
              <div key={i} className="p-3 rounded-xl bg-card border border-card-border">
                <div className="flex items-start gap-2 mb-2">
                  <span className="text-danger font-bold text-sm shrink-0">✗</span>
                  <p className="text-sm line-through text-danger/80">{mistake.wrong}</p>
                </div>
                <div className="flex items-start gap-2 mb-2">
                  <span className="text-success font-bold text-sm shrink-0">✓</span>
                  <p className="text-sm font-medium text-success">{mistake.correct}</p>
                </div>
                <p className="font-bangla text-xs text-muted pl-5">{mistake.explanation_bn}</p>
              </div>
            ))}
          </div>
        </CollapsibleSection>
      )}

      {/* Variations */}
      {pattern.variations && pattern.variations.length > 0 && (
        <CollapsibleSection icon="⏰" title="অন্যান্য রূপ" titleEn="Variations" defaultOpen>
          <VariationsSection variations={pattern.variations} />
        </CollapsibleSection>
      )}

      {/* Practice CTA */}
      <div className="mt-6 text-center">
        <Link
          href={`/practice/${category.slug}`}
          className="inline-block px-6 py-3 rounded-xl bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
        >
          <span className="font-bangla">✏️ এই ক্যাটাগরি অনুশীলন করো</span>
          <span className="block text-xs opacity-80 mt-0.5">Practice This Category</span>
        </Link>
      </div>
    </div>
  );
}

/* ================================================================
   TAB 3: USE — Real-world application
   ================================================================ */

interface UseTabProps {
  pattern: Pattern;
  category: PatternCategory;
  settings: { showBangla: boolean };
}

function UseTabContent({ pattern, category, settings }: UseTabProps) {
  const hasContent =
    (pattern.usageSituations && pattern.usageSituations.length > 0) ||
    (pattern.answerTemplates && pattern.answerTemplates.length > 0) ||
    (pattern.dialogueChains && pattern.dialogueChains.length > 0) ||
    (pattern.sentenceBuilding && pattern.sentenceBuilding.length > 0);

  if (!hasContent) {
    return (
      <div className="text-center py-12 text-muted">
        <p className="text-3xl mb-3">💬</p>
        <p className="text-sm font-bangla">এই প্যাটার্নের ব্যবহারিক উদাহরণ শীঘ্রই আসছে</p>
        <p className="text-xs mt-1">Usage examples coming soon</p>
        <Link
          href={`/practice/${category.slug}`}
          className="text-primary text-sm mt-4 inline-block hover:underline"
        >
          Practice this category instead
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Usage Situations */}
      {pattern.usageSituations && pattern.usageSituations.length > 0 && (
        <div className="mb-6">
          <SectionHeader icon="📌" title="কখন ব্যবহার করবেন" titleEn="When to use" />
          <div className="space-y-2">
            {pattern.usageSituations.map((sit, i) => (
              <div key={i} className="p-3 rounded-lg bg-card border border-card-border">
                <p className="font-bangla text-sm font-medium">{sit.situation_bn}</p>
                <p className="text-xs text-muted mb-1">{sit.situation_en}</p>
                <div className="mt-1.5 pl-3 border-l-2 border-primary/30">
                  <p className="text-sm font-medium">{sit.exampleSentence}</p>
                  {settings.showBangla && (
                    <p className="font-bangla text-sm text-muted">{sit.exampleSentence_bn}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Answer Templates */}
      {pattern.answerTemplates && pattern.answerTemplates.length > 0 && (
        <div className="mb-6">
          <SectionHeader icon="📋" title="উত্তর দাও" titleEn="How to Answer" />
          <div className="space-y-3">
            {pattern.answerTemplates.map((template, i) => (
              <AnswerTemplateCard key={i} template={template} />
            ))}
          </div>
        </div>
      )}

      {/* Dialogue Chains */}
      {pattern.dialogueChains && pattern.dialogueChains.length > 0 && (
        <div className="mb-6">
          <SectionHeader icon="💬" title="কথা বলো" titleEn="Real conversation" />
          {pattern.dialogueChains.map((dialogue) => (
            <DialogueChainSection key={dialogue.id} dialogue={dialogue} />
          ))}
        </div>
      )}

      {/* Sentence Building */}
      {pattern.sentenceBuilding && pattern.sentenceBuilding.length > 0 && (
        <div className="mb-6">
          <SectionHeader icon="🧩" title="বাক্য তৈরি করো" titleEn="Build sentences" />
          <div className="space-y-3">
            {pattern.sentenceBuilding.map((build, i) => (
              <div key={i} className="p-4 rounded-xl bg-card border border-card-border">
                <div className="text-xs text-muted mb-2 font-bangla">
                  আগে শেখা ({build.previousPatternId}):
                </div>
                <p className="text-sm mb-1">
                  <span className="font-medium">{build.previousFormula}</span>
                </p>
                {settings.showBangla && (
                  <p className="font-bangla text-sm text-muted mb-3">{build.previousFormula_bn}</p>
                )}
                <div className="pt-3 border-t border-card-border">
                  <div className="text-xs text-muted mb-1 font-bangla">মিলিয়ে বলো:</div>
                  <p className="text-sm font-medium">{build.combined}</p>
                  {settings.showBangla && (
                    <p className="font-bangla text-sm text-muted mt-0.5">{build.combined_bn}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/* ================================================================
   INLINE PRACTICE — Word Bank exercise inside Practice tab
   ================================================================ */

function InlinePractice({ pattern }: { pattern: Pattern }) {
  const [currentIndex, setCurrentIndex] = useState(() =>
    Math.floor(Math.random() * pattern.examples.length)
  );
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [lastCorrect, setLastCorrect] = useState(false);

  const example = pattern.examples[currentIndex];
  const hasSlots = pattern.slots.length > 0 && /\[([A-Z_]+)\]/.test(pattern.formula);

  if (!hasSlots) return null;

  const handleAnswer = (correct: boolean) => {
    setLastCorrect(correct);
    setShowResult(true);
    setTotal((t) => t + 1);
    if (correct) setScore((s) => s + 1);
  };

  const nextQuestion = () => {
    setShowResult(false);
    let next = Math.floor(Math.random() * pattern.examples.length);
    if (pattern.examples.length > 1) {
      while (next === currentIndex) {
        next = Math.floor(Math.random() * pattern.examples.length);
      }
    }
    setCurrentIndex(next);
  };

  return (
    <div className="mb-6 p-4 rounded-xl border-2 border-primary/20 bg-primary-light">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="text-lg">🎯</span>
          <h2 className="font-bangla text-sm font-bold">এখানে অনুশীলন করো</h2>
          <span className="text-xs text-muted">(Practice here)</span>
        </div>
        {total > 0 && (
          <span className="text-xs font-medium px-2 py-1 rounded-full bg-card">
            {score}/{total}
          </span>
        )}
      </div>

      <div className="mb-3 p-3 rounded-lg bg-card">
        <p className="font-bangla text-sm mb-1 text-muted">
          ইংরেজিতে বলো:
        </p>
        <p className="font-bangla font-medium">{example.bn}</p>
      </div>

      {!showResult ? (
        <WordBankExercise
          key={currentIndex}
          pattern={pattern}
          example={example}
          practiceLevel={1}
          onAnswer={handleAnswer}
        />
      ) : (
        <div className="space-y-3">
          <div className={`p-3 rounded-lg text-center ${
            lastCorrect
              ? "bg-success-light border border-success/30"
              : "bg-danger-light border border-danger/30"
          }`}>
            <p className="font-bangla text-sm font-medium">
              {lastCorrect ? "সঠিক! দারুণ!" : "আবার চেষ্টা করো!"}
            </p>
            <p className="text-sm font-medium mt-1">{example.en}</p>
            {example.pronunciation_bn && (
              <p className="font-bangla text-xs text-muted mt-1">🗣️ {example.pronunciation_bn}</p>
            )}
          </div>
          <button
            onClick={nextQuestion}
            className="w-full py-2.5 rounded-lg bg-primary text-white text-sm font-medium font-bangla hover:bg-primary/90 transition-colors"
          >
            পরের প্রশ্ন →
          </button>
        </div>
      )}
    </div>
  );
}

/* ================================================================
   SHARED SUB-COMPONENTS
   ================================================================ */

function SectionHeader({ icon, title, titleEn }: { icon: string; title: string; titleEn: string }) {
  return (
    <div className="flex items-center gap-2 mb-3">
      <span className="text-base">{icon}</span>
      <h2 className="font-bangla text-sm font-bold">{title}</h2>
      <span className="text-xs text-muted">({titleEn})</span>
    </div>
  );
}

function CollapsibleSection({
  icon,
  title,
  titleEn,
  children,
  defaultOpen = false,
}: {
  icon: string;
  title: string;
  titleEn: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="mb-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center gap-2 mb-3 group cursor-pointer"
      >
        <span className="text-base">{icon}</span>
        <h2 className="font-bangla text-sm font-bold">{title}</h2>
        <span className="text-xs text-muted">({titleEn})</span>
        <span className="ml-auto text-muted text-xs transition-transform duration-200" style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}>
          ▼
        </span>
      </button>
      {isOpen && children}
    </div>
  );
}

function WordBridgeMap({ wordMap }: { wordMap: StructuredWordMap }) {
  const typeColors = {
    direct: "bg-card border-card-border text-foreground",
    added: "bg-warning-light border-warning/30 text-warning",
    moved: "bg-primary-light border-primary/30 text-primary",
    split: "bg-accent-light border-accent/30 text-accent",
  };

  const typeLabels: Record<string, string> = {
    direct: "",
    added: "যোগ হয়েছে",
    moved: "জায়গা বদলেছে",
    split: "ভাগ হয়েছে",
  };

  return (
    <div className="p-4 rounded-xl bg-card border border-card-border">
      <div className="mb-3">
        <div className="text-xs text-muted mb-1 font-bangla">বাংলা:</div>
        <p className="font-bangla text-base font-medium">{wordMap.bn_sentence}</p>
      </div>
      <div className="text-center text-muted text-lg mb-3">↓</div>
      <div className="mb-4">
        <div className="text-xs text-muted mb-1">English:</div>
        <p className="text-base font-medium">{wordMap.en_sentence}</p>
      </div>
      <div className="flex flex-wrap gap-2">
        {wordMap.mappings.map((m, i) => (
          <div key={i} className={`px-3 py-2 rounded-lg border text-center ${typeColors[m.type]}`}>
            <p className="font-bangla text-xs">{m.bn_word}</p>
            <p className="text-xs font-bold mt-0.5">↓</p>
            <p className="text-sm font-medium">{m.en_word}</p>
            {typeLabels[m.type] && (
              <p className="font-bangla text-[10px] mt-0.5 opacity-70">{typeLabels[m.type]}</p>
            )}
          </div>
        ))}
      </div>
      <div className="mt-3 pt-3 border-t border-card-border flex flex-wrap gap-3 text-[10px]">
        <span className="flex items-center gap-1">
          <span className="w-2.5 h-2.5 rounded bg-card border border-card-border" />
          <span className="font-bangla">সরাসরি</span>
        </span>
        <span className="flex items-center gap-1">
          <span className="w-2.5 h-2.5 rounded bg-warning-light border border-warning/30" />
          <span className="font-bangla">যোগ হয়েছে</span>
        </span>
        <span className="flex items-center gap-1">
          <span className="w-2.5 h-2.5 rounded bg-primary-light border border-primary/30" />
          <span className="font-bangla">জায়গা বদলেছে</span>
        </span>
      </div>
    </div>
  );
}

function DialogueChainSection({ dialogue }: { dialogue: DialogueChain }) {
  const isUser = (speaker: string) => speaker === "তুমি";

  return (
    <div className="p-4 rounded-xl bg-card border border-card-border mb-3">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-lg">{dialogue.icon}</span>
        <div>
          <p className="font-bangla text-sm font-bold">{dialogue.title_bn}</p>
          <p className="text-xs text-muted">{dialogue.title_en}</p>
        </div>
      </div>
      <p className="font-bangla text-xs text-muted mb-4 p-2 rounded-lg bg-muted-bg">{dialogue.situation_bn}</p>
      <div className="space-y-3">
        {dialogue.turns.map((turn, i) => {
          const userMsg = isUser(turn.speaker_bn);
          return (
            <div key={i} className={`flex ${userMsg ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-[85%] p-3 rounded-2xl ${
                userMsg
                  ? "bg-primary text-white rounded-br-sm"
                  : "bg-muted-bg text-foreground rounded-bl-sm"
              }`}>
                <div className={`text-[10px] font-bangla mb-1 ${userMsg ? "text-white/70" : "text-muted"}`}>
                  {turn.speaker_bn}
                  {turn.patternId && (
                    <span className={`ml-1.5 px-1.5 py-0.5 rounded text-[9px] ${
                      userMsg ? "bg-white/20" : "bg-primary/10 text-primary"
                    }`}>
                      {turn.patternId}
                    </span>
                  )}
                </div>
                <p className="text-sm font-medium">{turn.en}</p>
                <p className={`font-bangla text-xs mt-0.5 ${userMsg ? "text-white/80" : "text-muted"}`}>{turn.bn}</p>
                {turn.pronunciation_bn && (
                  <p className={`font-bangla text-[10px] mt-0.5 italic ${
                    userMsg ? "text-white/60" : "text-primary/60"
                  }`}>
                    🗣️ {turn.pronunciation_bn}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function VariationsSection({ variations }: { variations: PatternVariation[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const { settings } = useSettings();
  const active = variations[activeIndex];

  return (
    <div>
      <div className="flex flex-wrap gap-1.5 mb-3">
        {variations.map((v, i) => (
          <button
            key={v.variant}
            onClick={() => setActiveIndex(i)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              i === activeIndex
                ? "bg-primary text-white"
                : "bg-muted-bg text-muted hover:text-foreground"
            }`}
          >
            <span className="font-bangla">{v.label_bn}</span>
            <span className="ml-1 opacity-70">({v.label.split(" (")[0]})</span>
          </button>
        ))}
      </div>
      {active && (
        <div className="p-4 rounded-xl bg-card border border-card-border">
          <div className="mb-3">
            <PatternFormula formula={active.formula} formula_bn={active.formula_bn} size="md" />
          </div>
          {active.examples.length > 0 && (
            <div className="space-y-2">
              {active.examples.map((ex, i) => (
                <div key={i} className="p-2 rounded-lg bg-muted-bg">
                  <p className="text-sm font-medium">{ex.en}</p>
                  {settings.showBangla && (
                    <p className="font-bangla text-sm text-muted">{ex.bn}</p>
                  )}
                  {ex.pronunciation_bn && (
                    <p className="font-bangla text-xs text-muted/60 mt-0.5">🔊 {ex.pronunciation_bn}</p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function AnswerTemplateCard({ template }: { template: AnswerTemplate }) {
  return (
    <div className="p-4 rounded-xl bg-card border border-card-border">
      <div className="flex items-start gap-2 mb-3">
        <span className="text-sm shrink-0">📍</span>
        <p className="font-bangla text-sm font-medium text-accent">{template.situation_bn}</p>
      </div>
      <div className="mb-3 pl-6">
        <div className="text-[10px] text-muted mb-0.5 uppercase tracking-wide font-bangla">প্রশ্ন</div>
        <p className="text-sm font-medium">{template.question}</p>
        <p className="font-bangla text-xs text-muted">{template.question_bn}</p>
      </div>
      <div className="mb-3 pl-6 p-3 rounded-lg bg-success/5 border border-success/20">
        <div className="text-[10px] text-success mb-0.5 uppercase tracking-wide font-bangla">উত্তর</div>
        <p className="text-sm font-medium text-success">{template.answerFormula}</p>
        <p className="font-bangla text-xs text-muted mt-0.5">{template.answerFormula_bn}</p>
        <p className="font-bangla text-xs text-primary/70 mt-0.5 italic">
          🗣️ {template.pronunciation_bn}
        </p>
      </div>
      {template.examples.length > 0 && (
        <div className="pl-6 space-y-1.5">
          <div className="text-[10px] text-muted uppercase tracking-wide font-bangla">উদাহরণ</div>
          {template.examples.map((ex, i) => (
            <div key={i} className="flex items-start gap-2">
              <span className="text-xs text-muted shrink-0 mt-0.5">•</span>
              <div>
                <p className="text-sm">{ex.answer}</p>
                <p className="font-bangla text-xs text-muted">{ex.answer_bn}</p>
                {ex.pronunciation_bn && (
                  <p className="font-bangla text-[10px] text-primary/60 italic">
                    🗣️ {ex.pronunciation_bn}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
      {template.notes_bn && (
        <div className="mt-3 pl-6 pt-2 border-t border-card-border">
          <p className="font-bangla text-xs text-muted">💡 {template.notes_bn}</p>
        </div>
      )}
    </div>
  );
}

function AudioPlayer({ text }: { text: string }) {
  const [playing, setPlaying] = useState(false);
  const [ttsAvailable, setTtsAvailable] = useState(true);

  useEffect(() => {
    setTtsAvailable(typeof window !== "undefined" && "speechSynthesis" in window);
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

  if (!ttsAvailable) {
    return (
      <div className="flex items-center gap-2 px-4 py-2 rounded-lg border border-card-border bg-card text-muted text-sm">
        <span>🔇</span>
        <span className="font-bangla">আপনার ডিভাইসে অডিও নেই</span>
      </div>
    );
  }

  return (
    <button
      onClick={speak}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg border text-sm font-medium transition-colors ${
        playing
          ? "border-primary bg-primary-light text-primary"
          : "border-card-border bg-card text-muted hover:text-foreground"
      }`}
    >
      <span>{playing ? "🔊" : "🔈"}</span>
      <span className="font-bangla">{playing ? "বাজছে..." : "উচ্চারণ শোনো"}</span>
    </button>
  );
}
