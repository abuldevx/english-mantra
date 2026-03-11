# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Start dev server
- `npm run build` — Production build (verifies TypeScript + generates 310 static pages)
- `npm run lint` — ESLint
- Node.js >=22.0.0 required (Next.js 16.1.6 dependency)

## Architecture

**EnglishMantra** is a Next.js 16 App Router PWA that teaches English speaking to Bangla speakers through pattern formulas (slot-based templates), not grammar rules.

### Content System (the core)

The app is built around a 3-layer content hierarchy:

1. **CategoryGroup** (`src/content/category-groups.ts`) — 24 groups (A–X), each with a difficulty level, color, and list of category IDs
2. **CategoryMeta** (`src/content/index.ts`) — lightweight index of all 293 categories (id, slug, name, name_bn, group, icon). This file also contains `getCategoryById`, `getCategoryBySlug`, `getPatternById` helpers
3. **Category files** (`src/content/categories/{ID}.ts`) — each exports `const category{ID}: PatternCategory` with full pattern data. Lazy-loaded via dynamic imports in `src/lib/content.ts`

**Adding a new category requires 3 steps:**
1. Create `src/content/categories/{ID}.ts` exporting `category{ID}: PatternCategory`
2. Add a `CategoryMeta` entry to the `categoryMeta` array in `src/content/index.ts`
3. Add the ID to the relevant group's `categoryIds` array in `src/content/category-groups.ts`

### Pattern Structure

Each pattern has: `id` (e.g. "A1.3"), `formula` with `[SLOT]` placeholders, `formula_bn`, `slots[]` (with accepted types and examples), `examples[]` (15 per pattern, each with `en`, `bn`, `slotValues`, `topicArea`), `formality` ("casual" | "polite" | "formal" | "very_formal"), `difficulty`, `usageNote`, `usageNote_bn`.

### Type System

All types live in `src/types/pattern.ts`: `PatternCategory`, `Pattern`, `Slot`, `PatternExample`, `CategoryGroup`, `Formality`, `Difficulty`, `SlotType`.

### State Management

Two React Contexts with localStorage persistence:
- `ProgressContext` (`src/contexts/ProgressContext.tsx`) — tracks learned patterns, bookmarks, streaks, confidence ratings, SRS scheduling. Key: `"pe-progress"`
- `SettingsContext` (`src/contexts/SettingsContext.tsx`) — dark mode, show Bangla toggle, font size, practice level, daily goal. Key: `"pe-settings"`

### Key Conventions

- **Bilingual fields**: every user-facing string has both English and `_bn` (Bangla) variants
- **Path alias**: `@/*` maps to `./src/*`
- **Export naming**: category files export `category{ID}` in camelCase (e.g. `categoryA1`, `categoryX10`)
- **Pattern IDs**: `{CategoryID}.{number}` (e.g. "C14.5")
- **Static generation**: all `/categories/[slug]` pages are pre-rendered via `generateStaticParams`
- **Styling**: Tailwind CSS 4 with CSS variable theming in `globals.css`. Dark mode via variables. Bangla text uses `font-bangla` class (Hind Siliguri font)
- **Formality values**: only `"casual"`, `"polite"`, `"formal"`, `"very_formal"` — never `"neutral"`
