"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { PatternCategory } from "@/types/pattern";
import { PatternCard } from "@/components/patterns/PatternCard";
import { DifficultyBadge } from "@/components/patterns/DifficultyBadge";

interface CategoryDetailClientProps {
  categoryId: string;
  slug: string;
}

export function CategoryDetailClient({ categoryId, slug }: CategoryDetailClientProps) {
  const [category, setCategory] = useState<PatternCategory | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const mod = await import(`@/content/categories/${categoryId}`);
        const cat = mod[`category${categoryId}`] as PatternCategory;
        setCategory(cat);
      } catch {
        setCategory(null);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [categoryId]);

  if (loading) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-6">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-muted-bg rounded w-2/3" />
          <div className="h-4 bg-muted-bg rounded w-1/2" />
          <div className="space-y-3 mt-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-24 bg-muted-bg rounded-xl" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (!category) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-6 text-center">
        <p className="text-muted">Category content not available yet.</p>
        <p className="text-sm text-muted mt-1">
          This category is being generated. Check back soon!
        </p>
        <Link href="/categories" className="text-primary text-sm mt-4 inline-block hover:underline">
          Back to Categories
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-6">
      {/* Breadcrumb */}
      <nav className="text-sm text-muted mb-4">
        <Link href="/" className="hover:text-foreground">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href="/categories" className="hover:text-foreground">
          Categories
        </Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">{category.id}</span>
      </nav>

      {/* Category Header */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-3xl">{category.icon}</span>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-muted">{category.id}</span>
              <DifficultyBadge difficulty={category.difficulty} />
            </div>
            <h1 className="text-2xl font-bold">{category.name}</h1>
            <p className="font-bangla text-muted">{category.name_bn}</p>
          </div>
        </div>
        <p className="text-sm text-muted mt-2">{category.description}</p>
        <p className="font-bangla text-sm text-muted mt-0.5">
          {category.description_bn}
        </p>
        <div className="mt-3 text-sm text-muted">
          {category.patterns.length} patterns in this category
        </div>
      </div>

      {/* Pattern List */}
      <div className="space-y-3">
        {category.patterns.map((pattern) => (
          <PatternCard
            key={pattern.id}
            pattern={pattern}
            categorySlug={slug}
          />
        ))}
      </div>
    </div>
  );
}
