import type { SearchResult, Difficulty } from "@/types/pattern";
import { categoryMeta } from "@/content/index";

// FlexSearch types (flexsearch doesn't ship great TS types)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type FlexDocument = any;

interface SearchDoc {
  id: string;
  type: "pattern" | "example";
  categoryId: string;
  categorySlug: string;
  patternId: string;
  title: string;
  title_bn: string;
  content: string;
  content_bn: string;
  difficulty: Difficulty;
}

let searchIndex: FlexDocument | null = null;
let indexBuilt = false;
let building = false;
const store = new Map<string, SearchDoc>();

export async function getSearchIndex(): Promise<FlexDocument> {
  if (searchIndex && indexBuilt) return searchIndex;
  if (building) {
    // Wait for build to complete
    while (building) {
      await new Promise((r) => setTimeout(r, 100));
    }
    return searchIndex!;
  }

  building = true;

  const FlexSearch = await import("flexsearch");
  searchIndex = new FlexSearch.Document({
    document: {
      id: "id",
      index: ["title", "content", "content_bn"],
      store: false,
    },
    tokenize: "forward",
  });

  // Index all categories
  for (const catMeta of categoryMeta) {
    try {
      const mod = await import(`@/content/categories/${catMeta.id}`);
      const category = mod[`category${catMeta.id}`];
      if (!category?.patterns) continue;

      for (const pattern of category.patterns) {
        // Index pattern formula
        const patternDoc: SearchDoc = {
          id: `p:${pattern.id}`,
          type: "pattern",
          categoryId: category.id,
          categorySlug: category.slug,
          patternId: pattern.id,
          title: pattern.formula,
          title_bn: pattern.formula_bn,
          content: `${pattern.formula} ${pattern.patternName} ${pattern.usageNote || ""}`,
          content_bn: `${pattern.formula_bn} ${pattern.patternName_bn} ${pattern.usageNote_bn || ""}`,
          difficulty: pattern.difficulty,
        };
        searchIndex!.add(patternDoc);
        store.set(patternDoc.id, patternDoc);

        // Index examples
        for (let i = 0; i < pattern.examples.length; i++) {
          const ex = pattern.examples[i];
          const exDoc: SearchDoc = {
            id: `e:${pattern.id}:${i}`,
            type: "example",
            categoryId: category.id,
            categorySlug: category.slug,
            patternId: pattern.id,
            title: ex.en,
            title_bn: ex.bn,
            content: ex.en,
            content_bn: ex.bn,
            difficulty: pattern.difficulty,
          };
          searchIndex!.add(exDoc);
          store.set(exDoc.id, exDoc);
        }
      }
    } catch {
      // Category not available
    }
  }

  indexBuilt = true;
  building = false;
  return searchIndex!;
}

export async function search(
  query: string,
  limit = 30
): Promise<SearchResult[]> {
  const index = await getSearchIndex();
  const rawResults = index.search(query, { limit, enrich: false });

  // Collect unique IDs from all field results
  const seen = new Set<string>();
  const results: SearchResult[] = [];

  for (const fieldResult of rawResults) {
    for (const docId of fieldResult.result) {
      const id = String(docId);
      if (seen.has(id)) continue;
      seen.add(id);

      const doc = store.get(id);
      if (!doc) continue;

      results.push({
        type: doc.type,
        id: doc.patternId,
        title: doc.title,
        title_bn: doc.title_bn,
        categoryId: doc.categoryId,
        categorySlug: doc.categorySlug,
        difficulty: doc.difficulty,
        matchedText: doc.content,
      });
    }
  }

  return results.slice(0, limit);
}

export function isIndexBuilt(): boolean {
  return indexBuilt;
}

export function isIndexBuilding(): boolean {
  return building;
}
