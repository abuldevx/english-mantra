import Link from "next/link";
import type { CategoryGroup } from "@/types/pattern";
import { DifficultyBadge } from "./DifficultyBadge";

interface GroupCardProps {
  group: CategoryGroup;
  completedCount?: number;
}

export function GroupCard({ group, completedCount = 0 }: GroupCardProps) {
  const totalCategories = group.categoryIds.length;
  const progressPercent = totalCategories > 0 ? Math.round((completedCount / totalCategories) * 100) : 0;

  return (
    <Link
      href={`/categories?group=${group.id}`}
      className="block p-4 rounded-xl border border-card-border bg-card hover:border-primary/30 hover:shadow-md transition-all"
    >
      <div className="flex items-start gap-3">
        <div
          className={`w-12 h-12 rounded-xl ${group.color} flex items-center justify-center text-2xl text-white shrink-0`}
        >
          {group.icon}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-mono text-muted">Group {group.id}</span>
            <DifficultyBadge difficulty={group.difficulty} />
          </div>
          <h3 className="font-semibold text-sm leading-tight truncate">
            {group.name}
          </h3>
          <p className="font-bangla text-xs text-muted mt-0.5 truncate">
            {group.name_bn}
          </p>
          <div className="flex items-center gap-2 mt-2">
            <div className="flex-1 h-1.5 rounded-full bg-muted-bg overflow-hidden">
              <div
                className="h-full rounded-full bg-primary transition-all"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <span className="text-[10px] text-muted whitespace-nowrap">
              {totalCategories} categories
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
