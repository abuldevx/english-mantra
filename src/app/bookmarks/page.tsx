"use client";

import { useProgress } from "@/contexts/ProgressContext";
import Link from "next/link";

export default function BookmarksPage() {
  const { progress } = useProgress();

  return (
    <div className="mx-auto max-w-4xl px-4 py-6">
      <h1 className="text-2xl font-bold mb-1 font-bangla">বুকমার্ক</h1>
      <p className="text-sm text-muted">Bookmarks</p>
      <p className="text-muted text-sm mb-6 font-bangla">তোমার সেভ করা প্যাটার্ন</p>

      {progress.bookmarkedPatterns.length === 0 ? (
        <div className="text-center py-16 text-muted">
          <p className="text-4xl mb-3">🔖</p>
          <p className="text-lg mb-1 font-bangla">এখনো কোনো বুকমার্ক নেই</p>
          <p className="text-sm text-muted">No bookmarks yet</p>
          <p className="font-bangla text-sm mt-1">
            যেকোনো প্যাটার্নে স্টার আইকনে ট্যাপ করো এখানে সেভ করতে
          </p>
          <p className="text-sm text-muted mt-0.5">
            Tap the star icon on any pattern to save it here
          </p>
          <Link href="/categories" className="inline-block mt-4 text-primary hover:underline text-sm font-bangla">
            বিভাগ দেখো
            <span className="ml-1 text-xs text-muted">Browse Categories</span>
          </Link>
        </div>
      ) : (
        <div className="space-y-2">
          {progress.bookmarkedPatterns.map((id) => (
            <Link
              key={id}
              href={`/pattern/${id}`}
              className="block p-3 rounded-lg border border-card-border bg-card hover:border-primary/30 transition-all"
            >
              <span className="font-mono text-sm">{id}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
