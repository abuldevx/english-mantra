# EnglishMantra — Content Guide

## Project Overview
- Next.js 16 PWA teaching English speaking to ALL Bangladeshi people
- Pattern formula system (slot-based templates), NOT grammar rules
- Bangla-first approach: start from Bangla thought → convert to English
- Target: ALL Bangladeshis — students, office workers, shopkeepers, garment workers, rickshaw pullers, farmers, homemakers, overseas workers
- Content should be varied enough that EVERYONE sees their life, accessible enough that non-educated users can follow

## Category Scaling Pattern (follow EXACTLY when enhancing any category)

### Reference files
- `src/content/categories/G2.ts` — Gold standard reference (4025 lines)
- `src/content/categories/A1.ts` — Second reference (3308 lines)
- `src/types/pattern.ts` — All type definitions
- `src/content/bridge-rules.ts` — BR1-BR12 valid IDs

### Per-pattern enhancement checklist
For EVERY pattern, add ALL of these fields:

1. **concept_bn** — Primary Bangla concept word (e.g., "চাই", "কোথায়")
2. **formulaPronunciation_bn** — Bangla phonetic of formula (e.g., "আই ওয়ান্ট [জিনিস]")
3. **bridgeRuleIds** — Reference BR1-BR12 from bridge-rules.ts
4. **conversionSteps** — Start from Bangla thought, 3 steps to English
5. **commonMistakes** — 3-4 mistakes with simple Bangla explanation (NO grammar terms)
6. **simpleRules** — 3-4 rules in spoken Bangla (NO grammar terms ever)
7. **usageSituations** — 3-4 real Bangladesh daily life situations
8. **sentenceBuilding** — 2 combos with previously learned patterns
9. **memoryTrick_bn** — Memory aid in simple spoken Bangla
10. **chunks** — 3-4 fixed phrases with pronunciation_bn
11. **wordMap** — Visual Bangla→English word mapping with bridge rule refs
12. **answerTemplates** — 3-4 templates (for questions: how to answer; for statements: how others respond)
13. **variations** — 3-5 (past, negative, question, future + pattern-specific), each with 3 examples + pronunciation_bn
14. **dialogueChains** — 1 per-pattern dialogue in Bangladesh context

### Per-example enhancement
For ALL 15 examples in each pattern:
- **pronunciation_bn** — 100% coverage, Bangla phonetic of English sentence
- **stage** — 5×stage1, 5×stage2, 5×stage3 (strictly 5/5/5 distribution)
- **miniStory** — 5-6 per pattern, everyday Bangladesh situations
- **topicArea** — Assign relevant topic

### Cross-pattern dialogues
- Add 3-5 cross-pattern dialogues per category
- Each 6-10 turns with pronunciation_bn on every turn
- Set in real Bangladesh locations (see `docs/bangladesh-scenarios.md`)

### Content rules — NEVER violate
1. **Zero grammar terms** in any _bn field — no "Subject", "Object", "Verb", "বিশেষ্য", "পদবন্ধ", "উপবাক্য", "ক্রিয়া", "Copula", "Complement"
2. **banglaStructureMap** format: `"বাংলা: ... → English: ..."`
3. **patternName_bn** in natural spoken Bangla (e.g., "চাই বলা" not "সাধারণ চাওয়া")
4. **usageNote_bn** in simple spoken Bangla with pronunciation guides
5. **Slot description_bn** in plain Bangla (e.g., "যে জিনিস তুমি চাও" not "যেকোনো বিশেষ্য পদবন্ধ")
6. Vocabulary spans ALL segments — professional, daily life, rural, urban
7. Replace non-BD references (pizza→biryani) but KEEP professional terms (appointment, reservation) with clear Bangla explanations
8. Bangla explanations must be clear enough for non-educated users

### Bangladesh scenario locations (use across all categories)
See `docs/bangladesh-scenarios.md` for the full list of 12 life areas.

### Implementation approach
- 3 sequential agents editing the same file (they can't run in parallel)
- Agent 1: First 2-3 patterns
- Agent 2: Next 2-3 patterns
- Agent 3: Last 1-2 patterns + category-level fixes + cross-pattern dialogues
- Verify: `npx tsc --noEmit` + `npm run build` after each agent

### Content Audit & Fix Playbook (run AFTER scaling any category)

When fixing/auditing any category, run these 15 checks:

**Examples quality:**
1. Replace non-Bangladeshi references (pizza→biryani, laptop→phone)
2. Reduce vocabulary redundancy (same word in 3+ patterns → keep in 2, diversify rest)
3. Check ALL 12 Bangladesh scenario areas are represented (see `bangladesh-scenarios.md`)
4. Fix stage distribution — must be exactly 5/5/5 per pattern
5. Add missing miniStories (every miniStory must match its example sentence!)

**Teaching fields:**
6. Answer templates cover diverse responders (shopkeeper, doctor, conductor, office colleague, family)
7. UsageSituations cover: bazaar, transport, pharmacy, finance, government, social
8. MiniStory matches example sentence (NO mismatches — critical bug source)

**Dialogues:**
9. Every pattern has at least 1 dialogue chain with 4+ turns
10. Add cross-pattern dialogues (chai stall, bus stand, bazaar combining multiple patterns)
11. Remove judgmental examples ("Why do you eat so much rice?") → neutral alternatives

**Organization:**
12. TopicArea distribution is balanced — no area >15% of total, religion/finance must exist
13. Answer templates match what real Bangladeshi people say (landmark-based directions, taka bargaining)

**Vocabulary:**
14. Keep professional terms but add clear Bangla explanations
15. No Western-only concepts without BD equivalent

### Verification checklist
1. `npx tsc --noEmit` passes
2. `npm run build` succeeds
3. Every example has `pronunciation_bn` (100%)
4. Every example has `stage` (5/5/5 per pattern)
5. No grammar terms in any `_bn` field
6. All `banglaStructureMap` follow format: `"বাংলা: ... → English: ..."`
7. All `bridgeRuleIds` reference valid BR1-BR12
8. All dialogue `patternId` refs are valid
9. Vocabulary spans all segments — professional AND daily life
10. MiniStories match their example sentences (no mismatches)
11. All 12 Bangladesh scenario areas from `bangladesh-scenarios.md` represented
12. Content works for educated professionals AND non-educated workers
