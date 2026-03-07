// Core slot types that can fill pattern formulas
export type SlotType =
  | "noun"
  | "noun_phrase"
  | "verb"
  | "verb_phrase"
  | "to_verb"
  | "gerund"
  | "adjective"
  | "adjective_phrase"
  | "adverb"
  | "person"
  | "place"
  | "time"
  | "time_expression"
  | "number"
  | "amount"
  | "clause"
  | "past_participle"
  | "feeling"
  | "reason"
  | "condition"
  | "description"
  | "result"
  | "event"
  | "topic"
  | "statement"
  | string; // Allow additional types from content

export type Formality = "casual" | "polite" | "formal" | "very_formal";
export type Difficulty = "beginner" | "intermediate" | "advanced";
export type DisplayMode = "en_first" | "bn_first" | "side_by_side";
export type FontSize = "small" | "medium" | "large" | "xlarge";
export type PracticeLevel = 1 | 2 | 3 | 4;
export type Confidence = 1 | 2 | 3 | 4 | 5;

export interface Slot {
  name: string; // "THING", "ACTION", "PERSON"
  description: string; // "Any noun or 'to + verb'"
  description_bn: string; // Bangla description
  acceptedTypes: SlotType[];
  examples: string[]; // ["water", "food", "to eat"]
}

export interface PatternExample {
  en: string; // "I want water"
  bn: string; // "আমি পানি চাই"
  slotValues: Record<string, string>;
  topicArea?: string; // "daily_life", "health", "work"
}

export interface Pattern {
  id: string; // "A1.1"
  formula: string; // "I want [THING]"
  formula_bn: string; // "আমি [কিছু] চাই"
  patternName: string;
  patternName_bn: string;
  slots: Slot[];
  examples: PatternExample[];
  formality: Formality;
  difficulty: Difficulty;
  usageNote?: string;
  usageNote_bn?: string;
  combinableWith?: string[]; // Pattern IDs
  responsePatterns?: string[]; // Response pair IDs
  banglaStructureMap?: string; // Visual SOV<>SVO mapping
}

export interface PatternCategory {
  id: string; // "A1"
  slug: string; // "expressing-wants-needs"
  name: string; // "Expressing What You Want/Need"
  name_bn: string;
  description: string;
  description_bn: string;
  icon: string; // Emoji
  group: string; // "A"
  groupName: string; // "Wanting, Needing & Preferences"
  groupName_bn: string;
  difficulty: Difficulty;
  patterns: Pattern[];
  prerequisites?: string[]; // Category IDs
}

export interface CategoryGroup {
  id: string; // "A"
  name: string; // "Wanting, Needing & Preferences"
  name_bn: string;
  icon: string;
  description: string;
  description_bn: string;
  difficulty: Difficulty;
  categoryIds: string[];
  color: string; // Tailwind color class
}

export interface PatternProgress {
  firstSeen: number;
  lastPracticed: number;
  practiceCount: number;
  confidence: Confidence;
  nextReviewDate: number; // SRS scheduling
  srsInterval: number; // Days until next review
}

export interface UserSettings {
  showBangla: boolean;
  banglaFirst: boolean;
  displayMode: DisplayMode;
  fontSize: FontSize;
  darkMode: boolean | "system";
  practiceLevel: PracticeLevel;
  dailyGoal: number;
  reminderTime?: string; // "09:00"
}

export interface UserProgress {
  completedPatterns: Record<string, PatternProgress>;
  bookmarkedPatterns: string[];
  currentStreak: number;
  longestStreak: number;
  lastActiveDate: string;
  totalPracticeMinutes: number;
  achievements: string[];
  settings: UserSettings;
}

// Search result type
export interface SearchResult {
  type: "pattern" | "category" | "example";
  id: string;
  title: string;
  title_bn?: string;
  subtitle?: string;
  categoryId: string;
  categorySlug: string;
  difficulty: Difficulty;
  matchedText: string;
}
