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

// Mini-story context for making examples memorable (6-22x better recall)
export interface MiniStory {
  situation_bn: string; // "তুমি নতুন স্কুলে গেছো। পাশের বেঞ্চে একটা ছেলে বসে আছে।"
  icon: string; // "🏫"
}

// Answer template — teaches how to RESPOND to a pattern
export interface AnswerTemplate {
  situation_bn: string; // "যখন কেউ 'What is your name?' জিজ্ঞেস করে"
  question: string; // "What is your name?"
  question_bn: string; // "তোমার নাম কী?"
  answerFormula: string; // "My name is [NAME]."
  answerFormula_bn: string; // "আমার নাম [নাম]।"
  pronunciation_bn: string; // "মাই নেইম ইজ [নাম]।"
  examples: {
    answer: string;
    answer_bn: string;
    pronunciation_bn: string;
  }[];
  notes_bn?: string; // "নিজের নাম বলার সময় 'My name is' দিয়ে শুরু করো"
}

export interface PatternExample {
  en: string; // "I want water"
  bn: string; // "আমি পানি চাই"
  pronunciation_bn?: string; // "আই ওয়ান্ট ওয়াটার" — Bangla phonetic
  slotValues: Record<string, string>;
  topicArea?: string; // "daily_life", "health", "work"
  stage?: number; // Learning stage (1=memorize, 2=modify, 3=create)
  miniStory?: MiniStory; // Situational context for memory
}

// Step-by-step Bangla → English conversion guide
export interface ConversionStep {
  step_bn: string; // "প্রশ্নের শব্দ দিয়ে শুরু করো"
  result: string; // "Where"
}

export interface ConversionGuide {
  banglaThought: string; // "তুমি বাংলায় বলো: 'বাথরুম কোথায়?'"
  steps: ConversionStep[];
  finalResult: string; // "Where is the bathroom?"
  finalResult_bn: string; // "বাথরুম কোথায়?"
}

// Common mistakes Bangla speakers make with a specific pattern
export interface CommonMistake {
  wrong: string; // "Where the bathroom?"
  correct: string; // "Where is the bathroom?"
  explanation_bn: string; // "'is' বাদ দেওয়া যাবে না"
}

// Simple rules in Bangla (NO grammar terms)
export interface SimpleRule {
  rule_bn: string; // "একটা জিনিস → 'is', অনেক জিনিস → 'are'"
  example: string; // "Where is the key? / Where are the keys?"
}

// Real-life situations where you'd use this pattern
export interface UsageSituation {
  situation_bn: string; // "রাস্তায় হারিয়ে গেলে"
  situation_en: string; // "When lost on the road"
  exampleSentence: string; // "Where is the bus stop?"
  exampleSentence_bn: string; // "বাস স্টপ কোথায়?"
}

// Sentence building using this pattern + a previously learned pattern
export interface SentenceBuild {
  previousPatternId: string; // "A1.1"
  previousFormula: string; // "I want [THING]"
  previousFormula_bn: string; // "আমি [জিনিস] চাই"
  combined: string; // "Where is the water? I want water."
  combined_bn: string; // "পানি কোথায়? আমি পানি চাই।"
}

// Tense/form variation within a pattern
export interface PatternVariation {
  variant: string; // "past", "future", "informal", "how_much", etc.
  label: string; // "Past (অতীত)"
  label_bn: string; // "অতীত"
  formula: string; // "Where was [THING]?"
  formula_bn: string; // "[জিনিস] কোথায় ছিল?"
  examples: PatternExample[];
}

// Fixed phrase to memorize as a single unit
export interface Chunk {
  en: string; // "Where is"
  bn: string; // "কোথায়"
  pronunciation_bn: string; // "হোয়্যার ইজ"
}

// A turn in a dialogue chain
export interface DialogueTurn {
  speaker_bn: string; // "তুমি" or "অন্যজন" or "দোকানদার"
  en: string; // "Where is the hospital?"
  bn: string; // "হাসপাতাল কোথায়?"
  pronunciation_bn?: string; // "হোয়্যার ইজ দা হসপিটাল?"
  patternId?: string; // "G2.2" — links to which pattern is used
}

// Complete conversation showing patterns in context
export interface DialogueChain {
  id: string;
  title_bn: string; // "হাসপাতাল খুঁজতে"
  title_en: string; // "Finding a hospital"
  situation_bn: string; // "তুমি অসুস্থ, হাসপাতাল খুঁজছো"
  icon: string; // "🏥"
  turns: DialogueTurn[];
  patternsUsed: string[]; // ["G2.2", "G2.9", "H1.1"]
}

// A single word-to-word mapping in a sentence
export interface WordMapping {
  bn_word: string; // "কী"
  en_word: string; // "What"
  type: "direct" | "added" | "moved" | "split";
  // direct = same meaning, stays in place
  // added = doesn't exist in Bangla (is, a, the, do)
  // moved = exists but changed position (question words)
  // split = one Bangla word → multiple English words
  bridgeRuleId?: string; // "BR2" — which bridge rule explains this
}

// Visual word-by-word Bangla↔English mapping
export interface StructuredWordMap {
  bn_sentence: string; // "তোমার নাম কী?"
  en_sentence: string; // "What is your name?"
  mappings: WordMapping[];
}

// Universal bridge rule (Bangla→English conversion principle)
export interface BridgeRule {
  id: string; // "BR1"
  name_bn: string; // "শব্দক্রম উল্টাও"
  shortName_bn: string; // "ক্রম"
  description_bn: string;
  banglaWay: string; // "আমি পানি চাই"
  englishWay: string; // "I want water"
  icon: string; // "🔄"
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

  // Teaching fields
  concept_bn?: string; // Primary Bangla concept label, e.g. "কোথায়"
  conversionSteps?: ConversionGuide; // Step-by-step Bangla → English
  commonMistakes?: CommonMistake[]; // Bangla speaker errors for this pattern
  simpleRules?: SimpleRule[]; // Bangla-native rules (no grammar terms)
  usageSituations?: UsageSituation[]; // Real-life when-to-use scenarios
  sentenceBuilding?: SentenceBuild[]; // Combine with previously learned patterns
  memoryTrick_bn?: string; // Memory aid/analogy in Bangla

  // Variation fields
  variations?: PatternVariation[]; // Tense/form variations
  pluralNote?: string; // "Plural: Where are [THINGS]?"
  pluralNote_bn?: string;
  informalAlt?: string; // "How come [CLAUSE]?"
  informalAlt_bn?: string;

  // New teaching enhancements
  chunks?: Chunk[]; // Fixed phrases to memorize as units
  formulaPronunciation_bn?: string; // "হোয়াট ইজ [জিনিস]?" — Bangla phonetic
  bridgeRuleIds?: string[]; // ["BR2", "BR3"] — which universal bridge rules apply
  dialogueChains?: DialogueChain[]; // Conversations showing pattern in context
  wordMap?: StructuredWordMap; // Visual word-by-word Bangla↔English mapping
  answerTemplates?: AnswerTemplate[]; // How to respond/understand responses
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
  buildingBlockSteps: number[]; // Completed building block step numbers
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
