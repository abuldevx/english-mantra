import Link from "next/link";
import type { PatternCategory } from "@/types/pattern";
import { DifficultyBadge } from "./DifficultyBadge";

interface CategoryCardProps {
  category: PatternCategory;
  patternCount?: number;
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      href={`/categories/${category.slug}`}
      className="block p-4 rounded-xl border border-card-border bg-card hover:border-primary/30 hover:shadow-sm transition-all"
    >
      <div className="flex items-start gap-3">
        <span className="text-2xl">{category.icon}</span>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-mono text-muted">{category.id}</span>
            <DifficultyBadge difficulty={category.difficulty} />
          </div>
          <h3 className="font-semibold text-sm leading-tight">
            {category.name}
          </h3>
          <p className="font-bangla text-xs text-muted mt-0.5">
            {category.name_bn}
          </p>
          <p className="text-xs text-muted mt-1.5 line-clamp-2">
            {category.description}
          </p>
          <div className="mt-2 text-xs text-muted">
            {category.patterns.length} patterns
          </div>
        </div>
      </div>
    </Link>
  );
}
