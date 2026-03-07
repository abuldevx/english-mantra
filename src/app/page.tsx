import { categoryGroups } from "@/content/category-groups";
import { GroupCard } from "@/components/patterns/GroupCard";
import Link from "next/link";

export default function HomePage() {
  const beginnerGroups = categoryGroups.filter((g) => g.difficulty === "beginner");
  const intermediateGroups = categoryGroups.filter((g) => g.difficulty === "intermediate");
  const advancedGroups = categoryGroups.filter((g) => g.difficulty === "advanced");

  const totalCategories = categoryGroups.reduce(
    (sum, g) => sum + g.categoryIds.length,
    0
  );

  return (
    <div className="mx-auto max-w-6xl px-4 py-6">
      {/* Hero */}
      <section className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">
          <span className="text-primary">English</span>Mantra
        </h1>
        <p className="text-muted max-w-lg mx-auto">
          Learn English the easy way! Fill slots in proven pattern formulas to
          build unlimited sentences.
        </p>
        <p className="font-bangla text-muted text-sm mt-1">
          সহজ উপায়ে ইংরেজি শিখুন! প্যাটার্ন ফর্মুলায় স্লট পূরণ করে অসীম
          বাক্য তৈরি করুন।
        </p>
        <div className="flex items-center justify-center gap-4 mt-4 text-sm">
          <div className="px-3 py-1.5 rounded-lg bg-primary-light text-primary font-medium">
            {categoryGroups.length} Groups
          </div>
          <div className="px-3 py-1.5 rounded-lg bg-success-light text-success font-medium">
            {totalCategories} Categories
          </div>
          <div className="px-3 py-1.5 rounded-lg bg-accent-light text-accent font-medium">
            ~2,980 Patterns
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
        <QuickAction
          href="/practice"
          icon="✏️"
          label="Daily Practice"
          label_bn="দৈনিক অনুশীলন"
        />
        <QuickAction
          href="/search"
          icon="🔍"
          label="Search Patterns"
          label_bn="প্যাটার্ন খুঁজুন"
        />
        <QuickAction
          href="/mistakes"
          icon="⚠️"
          label="Common Mistakes"
          label_bn="সাধারণ ভুল"
        />
        <QuickAction
          href="/bookmarks"
          icon="🔖"
          label="Bookmarks"
          label_bn="বুকমার্ক"
        />
      </section>

      {/* Beginner Groups */}
      <section className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <span className="inline-block w-3 h-3 rounded-full bg-success" />
          <h2 className="text-lg font-bold">Start Here — Beginner</h2>
          <span className="font-bangla text-sm text-muted">(প্রাথমিক)</span>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {beginnerGroups.map((group) => (
            <GroupCard key={group.id} group={group} />
          ))}
        </div>
      </section>

      {/* Intermediate Groups */}
      <section className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <span className="inline-block w-3 h-3 rounded-full bg-warning" />
          <h2 className="text-lg font-bold">Level Up — Intermediate</h2>
          <span className="font-bangla text-sm text-muted">(মাধ্যমিক)</span>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {intermediateGroups.map((group) => (
            <GroupCard key={group.id} group={group} />
          ))}
        </div>
      </section>

      {/* Advanced Groups */}
      <section className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <span className="inline-block w-3 h-3 rounded-full bg-danger" />
          <h2 className="text-lg font-bold">Master — Advanced</h2>
          <span className="font-bangla text-sm text-muted">(উন্নত)</span>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {advancedGroups.map((group) => (
            <GroupCard key={group.id} group={group} />
          ))}
        </div>
      </section>
    </div>
  );
}

function QuickAction({
  href,
  icon,
  label,
  label_bn,
}: {
  href: string;
  icon: string;
  label: string;
  label_bn: string;
}) {
  return (
    <Link
      href={href}
      className="flex flex-col items-center gap-1.5 p-3 rounded-xl border border-card-border bg-card hover:border-primary/30 hover:shadow-sm transition-all text-center"
    >
      <span className="text-2xl">{icon}</span>
      <span className="text-xs font-medium">{label}</span>
      <span className="font-bangla text-[10px] text-muted">{label_bn}</span>
    </Link>
  );
}
