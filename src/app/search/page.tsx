"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import type { SearchResult } from "@/types/pattern";
import { categoryMeta } from "@/content/index";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [indexing, setIndexing] = useState(false);
  const [indexReady, setIndexReady] = useState(false);
  const debounceRef = useRef<ReturnType<typeof setTimeout>>(null);

  // Preload search index in background
  useEffect(() => {
    setIndexing(true);
    import("@/lib/searchIndex").then((mod) => {
      mod.getSearchIndex().then(() => {
        setIndexing(false);
        setIndexReady(true);
      });
    });
  }, []);

  // Debounced search
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    if (debounceRef.current) clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(async () => {
      setLoading(true);
      try {
        const { search } = await import("@/lib/searchIndex");
        const searchResults = await search(query, 40);
        setResults(searchResults);
      } catch {
        // Fallback to basic category search
        const q = query.toLowerCase().trim();
        const fallbackResults: SearchResult[] = categoryMeta
          .filter(
            (cat) =>
              cat.name.toLowerCase().includes(q) ||
              cat.name_bn.includes(query) ||
              cat.id.toLowerCase().includes(q)
          )
          .map((cat) => ({
            type: "category" as const,
            id: cat.id,
            title: cat.name,
            title_bn: cat.name_bn,
            categoryId: cat.id,
            categorySlug: cat.slug,
            difficulty: "beginner" as const,
            matchedText: cat.name,
          }));
        setResults(fallbackResults);
      } finally {
        setLoading(false);
      }
    }, 300);

    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [query]);

  // Group results
  const patternResults = results.filter((r) => r.type === "pattern");
  const exampleResults = results.filter((r) => r.type === "example");

  return (
    <div className="mx-auto max-w-4xl px-4 py-6">
      <h1 className="text-2xl font-bold mb-2">Search Patterns</h1>
      <p className="text-muted text-sm mb-4">
        Search by English phrase, Bangla phrase, pattern formula, or category name
      </p>

      <div className="relative mb-6">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search... (e.g. 'want', 'চাই', 'A1')"
          className="w-full px-4 py-3 rounded-xl border border-card-border bg-card text-base focus:outline-none focus:ring-2 focus:ring-primary/30"
          autoFocus
        />
        {(loading || (indexing && query.trim())) && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin" />
          </div>
        )}
      </div>

      {/* Indexing indicator */}
      {indexing && !indexReady && (
        <div className="text-center text-sm text-muted mb-4 flex items-center justify-center gap-2">
          <div className="w-3 h-3 border-2 border-primary border-t-transparent rounded-full animate-spin" />
          Building search index...
        </div>
      )}

      {/* No results */}
      {query.trim() && !loading && results.length === 0 && (
        <div className="text-center py-12 text-muted">
          <p className="text-lg mb-1">No results found</p>
          <p className="text-sm">Try a different search term</p>
        </div>
      )}

      {/* Pattern Results */}
      {patternResults.length > 0 && (
        <div className="mb-6">
          <h2 className="text-sm font-semibold text-muted mb-3">
            Patterns ({patternResults.length})
          </h2>
          <div className="space-y-2">
            {patternResults.map((result) => (
              <Link
                key={`p-${result.id}`}
                href={`/categories/${result.categorySlug}`}
                className="block p-3 rounded-lg border border-card-border bg-card hover:border-primary/30 transition-all"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-xs font-mono text-muted">{result.id}</span>
                      <span
                        className={`text-[10px] px-1.5 py-0.5 rounded-full font-medium ${
                          result.difficulty === "beginner"
                            ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
                            : result.difficulty === "intermediate"
                            ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300"
                            : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300"
                        }`}
                      >
                        {result.difficulty}
                      </span>
                    </div>
                    <p className="font-medium text-sm">{result.title}</p>
                    {result.title_bn && (
                      <p className="font-bangla text-xs text-muted mt-0.5">{result.title_bn}</p>
                    )}
                  </div>
                  <span className="text-[10px] text-muted bg-muted-bg px-2 py-0.5 rounded-full whitespace-nowrap">
                    {result.categoryId}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Example Results */}
      {exampleResults.length > 0 && (
        <div>
          <h2 className="text-sm font-semibold text-muted mb-3">
            Examples ({exampleResults.length})
          </h2>
          <div className="space-y-2">
            {exampleResults.map((result, idx) => (
              <Link
                key={`e-${result.id}-${idx}`}
                href={`/categories/${result.categorySlug}`}
                className="block p-3 rounded-lg border border-card-border bg-card hover:border-primary/30 transition-all"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm">{result.title}</p>
                    {result.title_bn && (
                      <p className="font-bangla text-xs text-muted mt-0.5">{result.title_bn}</p>
                    )}
                  </div>
                  <span className="text-[10px] text-muted bg-muted-bg px-2 py-0.5 rounded-full whitespace-nowrap">
                    {result.categoryId}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Empty state */}
      {!query.trim() && (
        <div className="text-center py-12 text-muted">
          <p className="text-3xl mb-3">🔍</p>
          <p>Search across all {categoryMeta.length} categories</p>
          <p className="text-sm mt-1">Patterns, examples, and translations</p>
          <p className="font-bangla text-sm mt-1">
            প্যাটার্ন এবং ক্যাটাগরি খুঁজতে টাইপ করুন
          </p>
        </div>
      )}
    </div>
  );
}
