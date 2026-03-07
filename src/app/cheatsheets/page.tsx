"use client";

import { useState } from "react";
import { categoryGroups } from "@/content/category-groups";
import { categoryMeta } from "@/content/index";
import { useSettings } from "@/contexts/SettingsContext";

export default function CheatsheetsPage() {
  const [selectedGroup, setSelectedGroup] = useState(categoryGroups[0].id);
  const { settings } = useSettings();
  const group = categoryGroups.find((g) => g.id === selectedGroup)!;
  const categories = categoryMeta.filter((c) => c.group === selectedGroup);

  return (
    <div className="mx-auto max-w-4xl px-4 py-6">
      <h1 className="text-2xl font-bold mb-1">Cheat Sheets</h1>
      <p className="font-bangla text-muted text-sm mb-1">দ্রুত রেফারেন্স কার্ড</p>
      <p className="text-muted text-sm mb-6">
        Quick reference cards for each group — swipe through the essentials
      </p>

      {/* Group Selector */}
      <div className="flex gap-2 overflow-x-auto pb-3 mb-6 -mx-4 px-4 scrollbar-hide">
        {categoryGroups.map((g) => (
          <button
            key={g.id}
            onClick={() => setSelectedGroup(g.id)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
              selectedGroup === g.id
                ? "bg-primary text-white"
                : "bg-card border border-card-border text-muted hover:text-foreground"
            }`}
          >
            <span>{g.icon}</span>
            <span>Group {g.id}</span>
          </button>
        ))}
      </div>

      {/* Cheat Sheet Card */}
      <div className="rounded-xl border-2 border-primary/20 bg-card overflow-hidden">
        <div className={`p-4 ${group.color} text-white`}>
          <div className="flex items-center gap-2">
            <span className="text-2xl">{group.icon}</span>
            <div>
              <h2 className="font-bold text-lg">Group {group.id}: {group.name}</h2>
              {settings.showBangla && (
                <p className="text-white/80 text-sm font-bangla">{group.name_bn}</p>
              )}
            </div>
          </div>
          <p className="text-sm text-white/80 mt-1">{group.description}</p>
        </div>

        <div className="p-4">
          <h3 className="text-sm font-bold mb-3">Categories in this group ({categories.length})</h3>
          <div className="space-y-2">
            {categories.map((cat, i) => (
              <div key={cat.id} className="flex items-start gap-3 p-2 rounded-lg bg-muted-bg">
                <span className="text-lg mt-0.5">{cat.icon}</span>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-muted">{cat.id}</span>
                    <span className="font-medium text-sm">{cat.name}</span>
                  </div>
                  {settings.showBangla && (
                    <p className="font-bangla text-xs text-muted">{cat.name_bn}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation hint */}
      <div className="text-center mt-6 text-sm text-muted">
        Select a group above to see its cheat sheet
      </div>
    </div>
  );
}
