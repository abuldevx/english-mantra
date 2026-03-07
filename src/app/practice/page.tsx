import Link from "next/link";

export default function PracticePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-6">
      <h1 className="text-2xl font-bold mb-2">Practice</h1>
      <p className="text-muted text-sm mb-6">
        Strengthen your English skills with daily practice exercises
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <PracticeOption
          href="/practice/daily"
          icon="🔥"
          title="Daily Practice"
          title_bn="দৈনিক অনুশীলন"
          description="10 patterns per day: 5 review + 5 new"
        />
        <PracticeOption
          href="/categories"
          icon="📚"
          title="Practice by Category"
          title_bn="বিষয় অনুযায়ী অনুশীলন"
          description="Pick a specific category to practice"
        />
        <PracticeOption
          href="/practice/review"
          icon="🔄"
          title="Review Due Patterns"
          title_bn="পুনরালোচনার প্যাটার্ন"
          description="Review patterns scheduled by spaced repetition"
        />
        <PracticeOption
          href="/bookmarks"
          icon="🔖"
          title="Practice Bookmarks"
          title_bn="বুকমার্ক অনুশীলন"
          description="Practice your saved patterns"
        />
      </div>
    </div>
  );
}

function PracticeOption({
  href,
  icon,
  title,
  title_bn,
  description,
}: {
  href: string;
  icon: string;
  title: string;
  title_bn: string;
  description: string;
}) {
  return (
    <Link
      href={href}
      className="block p-5 rounded-xl border border-card-border bg-card hover:border-primary/30 hover:shadow-sm transition-all"
    >
      <span className="text-3xl">{icon}</span>
      <h3 className="font-semibold mt-3">{title}</h3>
      <p className="font-bangla text-sm text-muted">{title_bn}</p>
      <p className="text-xs text-muted mt-1">{description}</p>
    </Link>
  );
}
