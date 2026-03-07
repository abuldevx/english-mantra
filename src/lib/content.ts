import type { PatternCategory, Pattern } from "@/types/pattern";
import { categoryGroups } from "@/content/category-groups";

// Registry of all category modules - lazy loaded
const categoryModules: Record<string, () => Promise<{ default: PatternCategory }>> = {};

// Auto-register all category files
function registerCategories() {
  // We'll build this dynamically from all groups
  for (const group of categoryGroups) {
    for (const catId of group.categoryIds) {
      categoryModules[catId] = () =>
        import(`@/content/categories/${catId}`).then((mod) => ({
          default: mod[`category${catId}`],
        }));
    }
  }
}

registerCategories();

// Cache for loaded categories
const categoryCache = new Map<string, PatternCategory>();

export async function getCategoryById(id: string): Promise<PatternCategory | null> {
  if (categoryCache.has(id)) return categoryCache.get(id)!;

  const loader = categoryModules[id];
  if (!loader) return null;

  try {
    const mod = await loader();
    const category = mod.default;
    categoryCache.set(id, category);
    return category;
  } catch {
    return null;
  }
}

export async function getCategoryBySlug(slug: string): Promise<PatternCategory | null> {
  // Load all to find by slug — in practice we'd have an index
  for (const group of categoryGroups) {
    for (const catId of group.categoryIds) {
      const cat = await getCategoryById(catId);
      if (cat && cat.slug === slug) return cat;
    }
  }
  return null;
}

export async function getAllCategories(): Promise<PatternCategory[]> {
  const categories: PatternCategory[] = [];
  for (const group of categoryGroups) {
    for (const catId of group.categoryIds) {
      const cat = await getCategoryById(catId);
      if (cat) categories.push(cat);
    }
  }
  return categories;
}

export async function getCategoriesByGroup(groupId: string): Promise<PatternCategory[]> {
  const group = categoryGroups.find((g) => g.id === groupId);
  if (!group) return [];

  const categories: PatternCategory[] = [];
  for (const catId of group.categoryIds) {
    const cat = await getCategoryById(catId);
    if (cat) categories.push(cat);
  }
  return categories;
}

export async function getPatternById(patternId: string): Promise<{ pattern: Pattern; category: PatternCategory } | null> {
  // Pattern ID format: "A1.1" — extract category ID "A1"
  const dotIndex = patternId.lastIndexOf(".");
  if (dotIndex === -1) return null;

  const categoryId = patternId.substring(0, dotIndex);
  const category = await getCategoryById(categoryId);
  if (!category) return null;

  const pattern = category.patterns.find((p) => p.id === patternId);
  if (!pattern) return null;

  return { pattern, category };
}

// Get all available slugs for static generation
export function getAllCategorySlugs(): { slug: string; id: string }[] {
  const slugs: { slug: string; id: string }[] = [];
  // We need a sync way to get slugs — use a flat mapping
  return slugs;
}

export { categoryGroups };
