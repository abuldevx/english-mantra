"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { categoryMeta } from "@/content/index";

// Situation-to-category mapping
const situationMap: Record<string, { keywords: string[]; keywords_bn: string[]; categoryIds: string[] }> = {
  restaurant: {
    keywords: ["restaurant", "food", "eat", "order", "menu", "waiter", "hungry", "meal", "dinner", "lunch"],
    keywords_bn: ["রেস্তোরাঁ", "খাবার", "খাওয়া", "অর্ডার", "ক্ষুধা"],
    categoryIds: ["A2", "T3", "T11", "G7", "H4"],
  },
  doctor: {
    keywords: ["doctor", "hospital", "sick", "ill", "health", "pain", "hurt", "medicine", "fever", "appointment"],
    keywords_bn: ["ডাক্তার", "হাসপাতাল", "অসুস্থ", "ব্যথা", "জ্বর"],
    categoryIds: ["T6", "T22", "B1", "G6", "T2"],
  },
  shopping: {
    keywords: ["shop", "buy", "store", "price", "discount", "expensive", "cheap", "cost", "money", "pay"],
    keywords_bn: ["কেনাকাটা", "দোকান", "দাম", "ছাড়", "টাকা"],
    categoryIds: ["T3", "T10", "A2", "G7", "T16"],
  },
  travel: {
    keywords: ["travel", "trip", "flight", "hotel", "airport", "ticket", "train", "bus", "vacation", "visit"],
    keywords_bn: ["ভ্রমণ", "যাত্রা", "বিমান", "হোটেল", "টিকিট"],
    categoryIds: ["T13", "M2", "M5", "G14", "T2"],
  },
  work: {
    keywords: ["work", "job", "office", "boss", "colleague", "meeting", "salary", "project", "deadline", "interview"],
    keywords_bn: ["কাজ", "চাকরি", "অফিস", "বস", "সহকর্মী"],
    categoryIds: ["T8", "W11", "W12", "T15", "A1"],
  },
  introduction: {
    keywords: ["meet", "introduce", "new", "hello", "name", "first time", "greet", "nice to meet"],
    keywords_bn: ["পরিচয়", "নতুন", "দেখা", "সালাম"],
    categoryIds: ["H1", "H2", "H6", "G2", "H3"],
  },
  permission: {
    keywords: ["permission", "allow", "can i", "let me", "may i", "possible"],
    keywords_bn: ["অনুমতি", "যেতে পারি", "করতে পারি"],
    categoryIds: ["A4", "Q5", "Q6", "D6", "V1"],
  },
  complaint: {
    keywords: ["complaint", "problem", "broken", "not working", "bad", "wrong", "issue", "terrible"],
    keywords_bn: ["অভিযোগ", "সমস্যা", "খারাপ", "ভাঙা"],
    categoryIds: ["K7", "T28", "E10", "E7", "A2"],
  },
  opinion: {
    keywords: ["opinion", "think", "agree", "disagree", "believe", "feel about"],
    keywords_bn: ["মতামত", "মনে করি", "একমত", "বিশ্বাস"],
    categoryIds: ["E1", "E2", "G9", "D4", "V5"],
  },
  future: {
    keywords: ["future", "plan", "going to", "will", "next year", "dream", "goal", "hope"],
    keywords_bn: ["ভবিষ্যৎ", "পরিকল্পনা", "স্বপ্ন", "লক্ষ্য", "আশা"],
    categoryIds: ["C4", "T15", "A8", "T17", "T26"],
  },
  apology: {
    keywords: ["sorry", "apologize", "forgive", "mistake", "fault", "my bad"],
    keywords_bn: ["দুঃখিত", "ক্ষমা", "ভুল"],
    categoryIds: ["H5", "A9", "E14", "V4"],
  },
  phone: {
    keywords: ["phone", "call", "message", "text", "ring", "voicemail"],
    keywords_bn: ["ফোন", "কল", "মেসেজ"],
    categoryIds: ["T4", "T5", "H3", "K5"],
  },
};

export default function FindPage() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase().trim();

    const matchedCategoryIds = new Set<string>();

    for (const situation of Object.values(situationMap)) {
      const keywordMatch = situation.keywords.some((kw) => q.includes(kw) || kw.includes(q));
      const bnMatch = situation.keywords_bn.some((kw) => query.includes(kw));
      if (keywordMatch || bnMatch) {
        situation.categoryIds.forEach((id) => matchedCategoryIds.add(id));
      }
    }

    // Also do direct category name search
    categoryMeta.forEach((cat) => {
      if (
        cat.name.toLowerCase().includes(q) ||
        cat.name_bn.includes(query) ||
        cat.id.toLowerCase() === q
      ) {
        matchedCategoryIds.add(cat.id);
      }
    });

    return Array.from(matchedCategoryIds)
      .map((id) => categoryMeta.find((c) => c.id === id))
      .filter(Boolean);
  }, [query]);

  return (
    <div className="mx-auto max-w-4xl px-4 py-6">
      <h1 className="text-2xl font-bold mb-1">What Do I Say?</h1>
      <p className="font-bangla text-muted text-sm mb-1">আমি কী বলব?</p>
      <p className="text-muted text-sm mb-6">
        Describe your situation and we&apos;ll find the right patterns for you
      </p>

      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="e.g. 'restaurant', 'ক্ষুধার্ত', 'doctor', 'shopping'..."
        className="w-full px-4 py-3 rounded-xl border border-card-border bg-card text-base focus:outline-none focus:ring-2 focus:ring-primary/30 mb-6"
        autoFocus
      />

      {/* Quick Situation Buttons */}
      {!query.trim() && (
        <div className="mb-6">
          <p className="text-sm font-medium mb-3">Common situations:</p>
          <div className="flex flex-wrap gap-2">
            {Object.keys(situationMap).map((situation) => (
              <button
                key={situation}
                onClick={() => setQuery(situation)}
                className="px-3 py-1.5 rounded-lg bg-card border border-card-border text-sm hover:border-primary/30 transition-colors capitalize"
              >
                {situation}
              </button>
            ))}
          </div>
        </div>
      )}

      {query.trim() && results.length === 0 && (
        <div className="text-center py-12 text-muted">
          <p className="text-lg mb-1">No matching patterns found</p>
          <p className="text-sm">Try describing your situation differently</p>
        </div>
      )}

      {results.length > 0 && (
        <div className="space-y-2">
          <p className="text-sm text-muted mb-3">
            {results.length} categories match your situation
          </p>
          {results.map((cat) =>
            cat ? (
              <Link
                key={cat.id}
                href={`/categories/${cat.slug}`}
                className="block p-4 rounded-xl border border-card-border bg-card hover:border-primary/30 transition-all"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{cat.icon}</span>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-muted">{cat.id}</span>
                      <span className="font-medium">{cat.name}</span>
                    </div>
                    <p className="font-bangla text-sm text-muted">{cat.name_bn}</p>
                  </div>
                </div>
              </Link>
            ) : null
          )}
        </div>
      )}
    </div>
  );
}
