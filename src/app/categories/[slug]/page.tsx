import { notFound } from "next/navigation";
import { categoryMeta, getCategoryIdBySlug } from "@/content/index";
import { CategoryDetailClient } from "./CategoryDetailClient";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return categoryMeta.map((cat) => ({ slug: cat.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const meta = categoryMeta.find((c) => c.slug === slug);
  if (!meta) return { title: "Category Not Found" };
  return {
    title: `${meta.name} — EnglishMantra`,
    description: `Learn ${meta.name} patterns with examples and Bangla translations`,
  };
}

export default async function CategoryDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const categoryId = getCategoryIdBySlug(slug);
  if (!categoryId) notFound();

  return <CategoryDetailClient categoryId={categoryId} slug={slug} />;
}
