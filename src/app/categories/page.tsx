"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { categoryGroups, getGroupById } from "@/content/category-groups";
import { categoryMeta } from "@/content/index";
import { GroupCard } from "@/components/patterns/GroupCard";
import { DifficultyBadge } from "@/components/patterns/DifficultyBadge";
import type { Difficulty } from "@/types/pattern";

function CategoriesContent() {
  const searchParams = useSearchParams();
  const selectedGroup = searchParams.get("group");
  const [filterDifficulty, setFilterDifficulty] = useState<Difficulty | "all">("all");
  const [searchQuery, setSearchQuery] = useState("");

  // If a group is selected, show its categories
  if (selectedGroup) {
    const group = getGroupById(selectedGroup);
    if (!group) {
      return (
        <div className="mx-auto max-w-6xl px-4 py-6 text-center">
          <p className="text-muted font-bangla">গ্রুপ পাওয়া যায়নি</p>
          <Link href="/categories" className="text-primary text-sm mt-4 inline-block hover:underline font-bangla">
            সব গ্রুপে ফিরে যান
          </Link>
        </div>
      );
    }

    const categories = categoryMeta.filter((c) => c.group === selectedGroup);

    return (
      <div className="mx-auto max-w-6xl px-4 py-6">
        {/* Back link */}
        <Link
          href="/categories"
          className="inline-flex items-center gap-1 text-sm text-muted hover:text-foreground mb-4 transition-colors"
        >
          <span>←</span> সব গ্রুপ
        </Link>

        {/* Group header */}
        <div className="flex items-start gap-3 mb-6">
          <div
            className={`w-14 h-14 rounded-xl ${group.color} flex items-center justify-center text-3xl text-white shrink-0`}
          >
            {group.icon}
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-mono text-muted">Group {group.id}</span>
              <DifficultyBadge difficulty={group.difficulty} />
            </div>
            <h1 className="text-xl font-bold font-bangla">{group.name_bn}</h1>
            <p className="text-sm text-muted">{group.name}</p>
            <p className="text-sm text-muted mt-1">{group.description}</p>
          </div>
        </div>

        {/* Category list */}
        <div className="space-y-2">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/categories/${cat.slug}`}
              className="flex items-center gap-3 p-4 rounded-xl border border-card-border bg-card hover:border-primary/30 hover:shadow-sm transition-all"
            >
              <span className="text-2xl">{cat.icon}</span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-xs font-mono text-muted">{cat.id}</span>
                </div>
                <h3 className="font-semibold text-sm font-bangla">{cat.name_bn}</h3>
                <p className="text-xs text-muted mt-0.5">{cat.name}</p>
              </div>
              <span className="text-muted text-lg">→</span>
            </Link>
          ))}
        </div>

        {categories.length === 0 && (
          <p className="text-center text-muted py-8">No categories in this group yet.</p>
        )}
      </div>
    );
  }

  // Default: show all groups
  const filteredGroups = categoryGroups.filter((group) => {
    if (filterDifficulty !== "all" && group.difficulty !== filterDifficulty) return false;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      return (
        group.name.toLowerCase().includes(q) ||
        group.name_bn.includes(searchQuery) ||
        group.id.toLowerCase() === q ||
        group.description.toLowerCase().includes(q)
      );
    }
    return true;
  });

  return (
    <div className="mx-auto max-w-6xl px-4 py-6">
      <h1 className="text-2xl font-bold mb-1 font-bangla">সব বিভাগ</h1>
      <p className="text-sm text-muted mb-4">All Categories</p>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <input
          type="text"
          placeholder="খুঁজুন..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-1 px-3 py-2 rounded-lg border border-card-border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
        />
        <div className="flex gap-2">
          {(["all", "beginner", "intermediate", "advanced"] as const).map((level) => (
            <button
              key={level}
              onClick={() => setFilterDifficulty(level)}
              className={`px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                filterDifficulty === level
                  ? "bg-primary text-white"
                  : "bg-card border border-card-border text-muted hover:text-foreground"
              }`}
            >
              {level === "all" ? "সব" : level === "beginner" ? "সহজ" : level === "intermediate" ? "মাঝারি" : "কঠিন"}
            </button>
          ))}
        </div>
      </div>

      {/* Groups Grid */}
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {filteredGroups.map((group) => (
          <GroupCard key={group.id} group={group} />
        ))}
      </div>

      {filteredGroups.length === 0 && (
        <div className="text-center py-12 text-muted">
          <p className="text-lg mb-1">No groups found</p>
          <p className="text-sm">Try adjusting your search or filter</p>
        </div>
      )}
    </div>
  );
}

export default function CategoriesPage() {
  return (
    <Suspense
      fallback={
        <div className="mx-auto max-w-6xl px-4 py-6">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-muted-bg rounded w-1/3" />
            <div className="h-48 bg-muted-bg rounded-xl" />
          </div>
        </div>
      }
    >
      <CategoriesContent />
    </Suspense>
  );
}
