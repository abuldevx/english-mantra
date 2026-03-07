"use client";

import { useState } from "react";
import Link from "next/link";
import { categoryMeta } from "@/content/index";
import { useSettings } from "@/contexts/SettingsContext";

// Pattern combination chains showing how patterns connect
const combinationExamples = [
  {
    title: "Want + Reason",
    title_bn: "চাওয়া + কারণ",
    chain: ["A1", "J1"],
    formula: "I want [THING] because [REASON]",
    formula_bn: "আমি [জিনিস] চাই কারণ [কারণ]",
    examples: [
      { en: "I want to leave early because I have a meeting.", bn: "আমি তাড়াতাড়ি যেতে চাই কারণ আমার একটা মিটিং আছে।" },
      { en: "I want a new laptop because mine is too slow.", bn: "আমি নতুন ল্যাপটপ চাই কারণ আমারটা খুব ধীর।" },
      { en: "I want to learn English because I need it for work.", bn: "আমি ইংরেজি শিখতে চাই কারণ কাজের জন্য দরকার।" },
    ],
  },
  {
    title: "Want + So That",
    title_bn: "চাওয়া + যাতে",
    chain: ["A1", "J4"],
    formula: "I want [THING] so that [RESULT]",
    formula_bn: "আমি [জিনিস] চাই যাতে [ফলাফল]",
    examples: [
      { en: "I want to save money so that I can travel.", bn: "আমি টাকা জমাতে চাই যাতে ভ্রমণ করতে পারি।" },
      { en: "I want to study hard so that I can pass the exam.", bn: "আমি কঠোর পড়াশোনা করতে চাই যাতে পরীক্ষায় পাশ করতে পারি।" },
    ],
  },
  {
    title: "If + Will",
    title_bn: "যদি + তাহলে",
    chain: ["J7", "C4"],
    formula: "If [CONDITION], I will [ACTION]",
    formula_bn: "যদি [শর্ত], আমি [কাজ] করব",
    examples: [
      { en: "If it rains, I will stay home.", bn: "যদি বৃষ্টি হয়, আমি বাড়িতে থাকব।" },
      { en: "If I get the job, I will celebrate.", bn: "যদি আমি চাকরি পাই, আমি উদযাপন করব।" },
      { en: "If you help me, I will finish faster.", bn: "যদি তুমি আমাকে সাহায্য করো, আমি দ্রুত শেষ করব।" },
    ],
  },
  {
    title: "Think + Because",
    title_bn: "মনে করি + কারণ",
    chain: ["E1", "J1"],
    formula: "I think [CLAUSE] because [REASON]",
    formula_bn: "আমি মনে করি [উপবাক্য] কারণ [কারণ]",
    examples: [
      { en: "I think he is right because he has experience.", bn: "আমি মনে করি সে ঠিক বলছে কারণ তার অভিজ্ঞতা আছে।" },
      { en: "I think we should leave because it's getting late.", bn: "আমি মনে করি আমাদের যাওয়া উচিত কারণ রাত হয়ে যাচ্ছে।" },
    ],
  },
  {
    title: "Although + Still",
    title_bn: "যদিও + তবুও",
    chain: ["J3", "E1"],
    formula: "Although [CLAUSE], I still [ACTION]",
    formula_bn: "যদিও [উপবাক্য], আমি তবুও [কাজ]",
    examples: [
      { en: "Although it was raining, I still went for a walk.", bn: "যদিও বৃষ্টি হচ্ছিল, আমি তবুও হাঁটতে গেলাম।" },
      { en: "Although I was tired, I still finished the project.", bn: "যদিও আমি ক্লান্ত ছিলাম, আমি তবুও প্রজেক্ট শেষ করলাম।" },
    ],
  },
  {
    title: "Can + But Need",
    title_bn: "পারি + কিন্তু দরকার",
    chain: ["D1", "A1"],
    formula: "I can [ACTION], but I need [THING]",
    formula_bn: "আমি [কাজ] পারি, কিন্তু আমার [জিনিস] দরকার",
    examples: [
      { en: "I can cook, but I need the recipe.", bn: "আমি রান্না করতে পারি, কিন্তু আমার রেসিপি দরকার।" },
      { en: "I can drive, but I need a car.", bn: "আমি গাড়ি চালাতে পারি, কিন্তু আমার একটা গাড়ি দরকার।" },
    ],
  },
  {
    title: "Used To + But Now",
    title_bn: "আগে করতাম + কিন্তু এখন",
    chain: ["C7", "C2"],
    formula: "I used to [ACTION], but now I [ACTION]",
    formula_bn: "আমি আগে [কাজ] করতাম, কিন্তু এখন আমি [কাজ] করি",
    examples: [
      { en: "I used to walk to work, but now I drive.", bn: "আমি আগে হেঁটে অফিসে যেতাম, কিন্তু এখন গাড়ি চালাই।" },
      { en: "I used to hate reading, but now I love it.", bn: "আমি আগে পড়তে ঘৃণা করতাম, কিন্তু এখন ভালোবাসি।" },
    ],
  },
  {
    title: "Should + Because",
    title_bn: "উচিত + কারণ",
    chain: ["D2", "J1"],
    formula: "You should [ACTION] because [REASON]",
    formula_bn: "তোমার [কাজ] করা উচিত কারণ [কারণ]",
    examples: [
      { en: "You should rest because you look tired.", bn: "তোমার বিশ্রাম নেওয়া উচিত কারণ তোমাকে ক্লান্ত দেখাচ্ছে।" },
      { en: "You should study more because the exam is next week.", bn: "তোমার আরও পড়া উচিত কারণ পরীক্ষা আগামী সপ্তাহে।" },
    ],
  },
];

export default function CombinationsPage() {
  const { settings } = useSettings();
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  return (
    <div className="mx-auto max-w-4xl px-4 py-6">
      <h1 className="text-2xl font-bold mb-1">Pattern Combinations</h1>
      <p className="font-bangla text-muted text-sm mb-1">প্যাটার্ন সংমিশ্রণ</p>
      <p className="text-muted text-sm mb-6">
        See how patterns chain together to build complex sentences
      </p>

      <div className="space-y-4">
        {combinationExamples.map((combo, idx) => {
          const isOpen = selectedIdx === idx;
          const chainCats = combo.chain
            .map((id) => categoryMeta.find((c) => c.id === id))
            .filter(Boolean);

          return (
            <div
              key={idx}
              className="rounded-xl border border-card-border bg-card overflow-hidden"
            >
              <button
                onClick={() => setSelectedIdx(isOpen ? null : idx)}
                className="w-full p-4 text-left flex items-center justify-between hover:bg-muted-bg/50 transition-colors"
              >
                <div>
                  <h3 className="font-bold text-sm">{combo.title}</h3>
                  {settings.showBangla && (
                    <p className="font-bangla text-xs text-muted">{combo.title_bn}</p>
                  )}
                  <div className="flex items-center gap-1.5 mt-1.5">
                    {chainCats.map((cat, i) => (
                      <span key={cat!.id} className="flex items-center gap-1">
                        {i > 0 && <span className="text-muted text-xs">+</span>}
                        <span className="text-xs px-1.5 py-0.5 rounded bg-primary-light text-primary font-mono">
                          {cat!.id}
                        </span>
                      </span>
                    ))}
                  </div>
                </div>
                <span className="text-muted text-lg">{isOpen ? "−" : "+"}</span>
              </button>

              {isOpen && (
                <div className="p-4 border-t border-card-border">
                  {/* Combined formula */}
                  <div className="p-3 rounded-lg bg-primary-light mb-4">
                    <div className="text-xs text-primary font-medium mb-1">Combined Formula</div>
                    <p className="font-semibold">{combo.formula}</p>
                    {settings.showBangla && (
                      <p className="font-bangla text-sm text-muted mt-0.5">{combo.formula_bn}</p>
                    )}
                  </div>

                  {/* Examples */}
                  <div className="space-y-2">
                    {combo.examples.map((ex, i) => (
                      <div key={i} className="p-2 rounded-lg bg-muted-bg">
                        <p className="text-sm">{ex.en}</p>
                        {settings.showBangla && (
                          <p className="font-bangla text-xs text-muted mt-0.5">{ex.bn}</p>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Links to categories */}
                  <div className="flex gap-2 mt-3">
                    {chainCats.map((cat) => (
                      <Link
                        key={cat!.id}
                        href={`/categories/${cat!.slug}`}
                        className="text-xs text-primary hover:underline"
                      >
                        {cat!.icon} {cat!.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
