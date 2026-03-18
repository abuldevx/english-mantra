import type { PatternCategory } from "@/types/pattern";
import { patternA2_1 } from "./can-i-have";
import { patternA2_2 } from "./could-i-get";
import { patternA2_3 } from "./may-i-have";
import { patternA2_4 } from "./do-you-have";
import { patternA2_5 } from "./is-it-possible-to-get";
import { patternA2_6 } from "./ill-take";

export const categoryA2: PatternCategory = {
  id: "A2",
  slug: "asking-for-things",
  name: "Asking for Things",
  name_bn: "কিছু চাওয়া বা অনুরোধ করা",
  description:
    "Learn polite and casual ways to ask for things in English.",
  description_bn:
    "ইংরেজিতে বিনয়ের সাথে এবং সাধারণভাবে কিছু চাওয়ার উপায় শিখুন।",
  icon: "🛒",
  group: "A",
  groupName: "Wanting, Needing & Preferences",
  groupName_bn: "চাওয়া, প্রয়োজন এবং পছন্দ",
  difficulty: "beginner",
  prerequisites: ["A1"],
  patterns: [
    patternA2_1,
    patternA2_2,
    patternA2_3,
    patternA2_4,
    patternA2_5,
    patternA2_6,
  ],
};
