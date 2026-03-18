import Link from "next/link";

export default function PracticePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-6">
      <h1 className="text-2xl font-bold mb-1 font-bangla">অনুশীলন</h1>
      <p className="text-sm text-muted">Practice</p>
      <p className="text-muted text-sm mb-6 font-bangla">
        ইংরেজি শক্তিশালী করো প্রতিদিনের অনুশীলনে
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <PracticeOption
          href="/practice/daily"
          icon="🔥"
          title="Daily Practice"
          title_bn="দৈনিক অনুশীলন"
          description="প্রতিদিন ১০টি প্যাটার্ন: ৫টি রিভিউ + ৫টি নতুন"
        />
        <PracticeOption
          href="/categories"
          icon="📚"
          title="Practice by Category"
          title_bn="বিষয় অনুযায়ী অনুশীলন"
          description="যেকোনো বিষয় বেছে নিয়ে অনুশীলন করো"
        />
        <PracticeOption
          href="/practice/review"
          icon="🔄"
          title="Review Due Patterns"
          title_bn="রিভিউ করার সময় হয়েছে"
          description="যেগুলো রিভিউ করার সময় হয়েছে সেগুলো দেখো"
        />
        <PracticeOption
          href="/bookmarks"
          icon="🔖"
          title="Practice Bookmarks"
          title_bn="বুকমার্ক অনুশীলন"
          description="তোমার সেভ করা প্যাটার্ন অনুশীলন করো"
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
      <h3 className="font-semibold mt-3 font-bangla">{title_bn}</h3>
      <p className="text-xs text-muted">{title}</p>
      <p className="text-xs text-muted mt-1 font-bangla">{description}</p>
    </Link>
  );
}
