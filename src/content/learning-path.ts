// Learning Path: 6 progressive levels from Survival to Master
// Organizes all 301 categories into a clear learning staircase
// Following CEFR + Pimsleur + Michel Thomas worldwide standards

export interface LearningLevel {
  id: number;
  name_en: string;
  name_bn: string;
  tagline_en: string;
  tagline_bn: string;
  icon: string;
  color: string; // Tailwind color class
  categoryIds: string[];
  speakingPowers_bn: string[]; // What you CAN DO after this level
  speakingPowers_en: string[];
}

export const learningPath: LearningLevel[] = [
  // ==================== Level 1: বেঁচে থাকা (Survival) ====================
  {
    id: 1,
    name_en: "Survival",
    name_bn: "বেঁচে থাকা",
    tagline_en: "I can handle basic needs",
    tagline_bn: "আমি নিজের দরকার মেটাতে পারি",
    icon: "🆘",
    color: "bg-red-500",
    categoryIds: [
      // A: Basic wanting (A1-A3)
      "A1", "A2", "A3",
      // B: Basic descriptions (B1-B3)
      "B1", "B2", "B3",
      // G: Basic questions (G1-G2)
      "G1", "G2",
      // H: Greetings & introductions (H1-H3)
      "H1", "H2", "H3",
      // L: Basic time (L1, L6)
      "L1", "L6",
      // M: Basic location (M1-M2)
      "M1", "M2",
      // T: Survival situations
      "T1",  // Asking for information
      "T3",  // Ordering & buying
      "T6",  // Health & sickness
      "T10", // Cost, price & value
      "T11", // Food & eating
      "T32", // Emergency situations
    ],
    speakingPowers_bn: [
      "জিনিস চাইতে পারি",
      "দাম জিজ্ঞেস করতে পারি",
      "রাস্তা জিজ্ঞেস করতে পারি",
      "খাবার অর্ডার করতে পারি",
      "ডাক্তারকে সমস্যা বলতে পারি",
      "জরুরি সাহায্য চাইতে পারি",
      "নিজের পরিচয় দিতে পারি",
    ],
    speakingPowers_en: [
      "Ask for things I need",
      "Ask prices and pay",
      "Ask for directions",
      "Order food",
      "Describe health problems",
      "Ask for emergency help",
      "Introduce myself",
    ],
  },

  // ==================== Level 2: প্রতিদিন (Daily Life) ====================
  {
    id: 2,
    name_en: "Daily Life",
    name_bn: "প্রতিদিন",
    tagline_en: "I can handle my day",
    tagline_bn: "আমি সারাদিন চালাতে পারি",
    icon: "🏠",
    color: "bg-orange-500",
    categoryIds: [
      // A: More wanting & preferences (A4-A10)
      "A4", "A5", "A6", "A7", "A8", "A9", "A10",
      // B: More descriptions (B4-B12)
      "B4", "B5", "B6", "B7", "B8", "B9", "B10", "B11", "B12",
      // C: Actions & time (C1-C10)
      "C1", "C2", "C3", "C4", "C5", "C6", "C7", "C8", "C9", "C10",
      // L: Time expressions (L2-L5)
      "L2", "L3", "L4", "L5",
      // M: More places (M3-M8)
      "M3", "M4", "M5", "M6", "M7", "M8",
      // N: Articles & quantifiers (N1-N7)
      "N1", "N2", "N3", "N4", "N5", "N6", "N7",
      // T: Daily situations
      "T7",  // Weather
      "T8",  // Work & jobs
      "T12", // Technology
      "T13", // Travel
      "T20", // Habits & routines
      "T21", // Sleep
      "T22", // Physical sensations
    ],
    speakingPowers_bn: [
      "সারাদিনের রুটিন বলতে পারি",
      "অতীত ও ভবিষ্যৎ নিয়ে কথা বলতে পারি",
      "মানুষ ও জিনিস বর্ণনা করতে পারি",
      "কাজ ও চাকরি নিয়ে কথা বলতে পারি",
      "ভ্রমণ ও যাতায়াত সামলাতে পারি",
      "আবহাওয়া নিয়ে কথা বলতে পারি",
    ],
    speakingPowers_en: [
      "Describe my daily routine",
      "Talk about past and future",
      "Describe people and things",
      "Talk about work and jobs",
      "Handle travel and transport",
      "Talk about weather",
    ],
  },

  // ==================== Level 3: গল্প করা (Conversation) ====================
  {
    id: 3,
    name_en: "Conversation",
    name_bn: "গল্প করা",
    tagline_en: "I can have real conversations",
    tagline_bn: "আমি আসল কথোপকথন করতে পারি",
    icon: "💬",
    color: "bg-green-500",
    categoryIds: [
      // D: Basic ability & obligation (D1-D4)
      "D1", "D2", "D3", "D4",
      // E: All opinions & emotions (E1-E15)
      "E1", "E2", "E3", "E4", "E5", "E6", "E7", "E8", "E9", "E10", "E11", "E12", "E13", "E14", "E15",
      // F: Suggestions & offers (F1-F7)
      "F1", "F2", "F3", "F4", "F5", "F6", "F7",
      // G: More question types (G3-G8)
      "G3", "G4", "G5", "G6", "G7", "G8",
      // H: Social interactions (H4-H11)
      "H4", "H5", "H6", "H7", "H8", "H9", "H10", "H11",
      // O: Basic storytelling (O1-O5)
      "O1", "O2", "O3", "O4", "O5",
      // T: Conversational situations
      "T9",  // Education
      "T14", // Relationships
      "T15", // Plans & goals
      "T25", // Memories
      "T26", // Hope
      "T27", // Fear
      // NEW categories for natural conversation
      "H12", // Listener responses (uh-huh, I see)
      "H13", // Self-correction (I mean...)
      "R16", // Conversation fillers (well, actually)
      "T36", // Fixed phrases (no worries, sounds good)
    ],
    speakingPowers_bn: [
      "মতামত দিতে ও নিতে পারি",
      "গল্প বলতে পারি",
      "আবেগ প্রকাশ করতে পারি",
      "পরামর্শ দিতে পারি",
      "সায় দিতে ও দ্বিমত করতে পারি",
      "কথা শুনে সাড়া দিতে পারি",
      "ভুল হলে সুন্দর করে ঠিক করতে পারি",
    ],
    speakingPowers_en: [
      "Give and receive opinions",
      "Tell stories",
      "Express emotions",
      "Give advice and suggestions",
      "Agree and disagree",
      "Show I'm listening actively",
      "Correct myself naturally",
    ],
  },

  // ==================== Level 4: স্বাভাবিক (Natural) ====================
  {
    id: 4,
    name_en: "Natural",
    name_bn: "স্বাভাবিক",
    tagline_en: "I sound like a real English speaker",
    tagline_bn: "আমাকে আসল ইংরেজি বলা মানুষের মতো শোনায়",
    icon: "🌟",
    color: "bg-blue-500",
    categoryIds: [
      // B: Advanced descriptions (B13-B15)
      "B13", "B14", "B15",
      // C: Advanced action patterns (C11-C15)
      "C11", "C12", "C13", "C14", "C15",
      // D: More modals (D5-D7)
      "D5", "D6", "D7",
      // G: Advanced questions (G9-G15)
      "G9", "G10", "G11", "G12", "G13", "G14", "G15",
      // I: Comparing & contrasting (I1-I10)
      "I1", "I2", "I3", "I4", "I5", "I6", "I7", "I8", "I9", "I10",
      // J: Reasoning & conditions (J1-J12)
      "J1", "J2", "J3", "J4", "J5", "J6", "J7", "J8", "J9", "J10", "J11", "J12",
      // O: Advanced narrating (O6-O10)
      "O6", "O7", "O8", "O9", "O10",
      // T: Advanced situations
      "T16", // Negotiating
      "T17", // Predictions
      "T18", // Speculating present
      "T19", // Speculating past
      "T23", // Age & life stages
      "T24", // Ability progress
      // NEW categories for natural speech
      "X11", // Casual speech (gonna, wanna)
      "N8",  // Degree expressions (kind of, pretty much)
      "X12", // Collocations (make/do/take)
      "X13", // Connected speech (djeet, coulda)
    ],
    speakingPowers_bn: [
      "ছোট করে কথা বলতে পারি (gonna, wanna)",
      "কোন শব্দের সাথে কোনটা বসে জানি",
      "দ্রুত ইংরেজি বুঝতে পারি",
      "তুলনা ও বৈপরীত্য বলতে পারি",
      "কারণ ও ফলাফল বোঝাতে পারি",
      "শর্ত বুঝে কথা বলতে পারি",
    ],
    speakingPowers_en: [
      "Use casual short forms (gonna, wanna)",
      "Use correct word partnerships",
      "Understand fast spoken English",
      "Compare and contrast things",
      "Explain causes and results",
      "Use conditional patterns",
    ],
  },

  // ==================== Level 5: পেশাদার (Professional) ====================
  {
    id: 5,
    name_en: "Professional",
    name_bn: "পেশাদার",
    tagline_en: "I can handle formal situations",
    tagline_bn: "আমি আনুষ্ঠানিক পরিস্থিতি সামলাতে পারি",
    icon: "💼",
    color: "bg-purple-500",
    categoryIds: [
      // K: Reported speech (K1-K10)
      "K1", "K2", "K3", "K4", "K5", "K6", "K7", "K8", "K9", "K10",
      // Q: Advice & instructions (Q1-Q8)
      "Q1", "Q2", "Q3", "Q4", "Q5", "Q6", "Q7", "Q8",
      // T: Professional situations
      "T2",  // Appointments
      "T4",  // Phone calls
      "T5",  // Email/messaging
      "T28", // Problems & solutions
      "T29", // Opinions past events
      "T30", // Readiness
      "T31", // Banking & money
      "T33", // Housing & rent
      "T34", // Social media
      "T35", // Driving & traffic
      // V: Politeness & register (V1-V8)
      "V1", "V2", "V3", "V4", "V5", "V6", "V7", "V8",
      // W: Academic & professional (W1-W15)
      "W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8", "W9", "W10", "W11", "W12", "W13", "W14", "W15",
    ],
    speakingPowers_bn: [
      "ইন্টারভিউ দিতে পারি",
      "ফর্মাল ইমেইল লিখতে পারি",
      "মিটিং-এ কথা বলতে পারি",
      "ফোনে কথা বলতে পারি",
      "অন্যের কথা রিপোর্ট করতে পারি",
      "ভদ্র ও আনুষ্ঠানিক ভাষা ব্যবহার করতে পারি",
    ],
    speakingPowers_en: [
      "Handle job interviews",
      "Write formal emails",
      "Speak in meetings",
      "Handle phone calls",
      "Report what others said",
      "Switch between casual and formal",
    ],
  },

  // ==================== Level 6: মাস্টার (Master) ====================
  {
    id: 6,
    name_en: "Master",
    name_bn: "মাস্টার",
    tagline_en: "I can express anything precisely",
    tagline_bn: "আমি যেকোনো কিছু নিখুঁতভাবে বলতে পারি",
    icon: "👑",
    color: "bg-yellow-500",
    categoryIds: [
      // P: Exclamations & emphasis (P1-P7)
      "P1", "P2", "P3", "P4", "P5", "P6", "P7",
      // R: Logical & discourse (R1-R15)
      "R1", "R2", "R3", "R4", "R5", "R6", "R7", "R8", "R9", "R10", "R11", "R12", "R13", "R14", "R15",
      // S: Advanced structural (S1-S20)
      "S1", "S2", "S3", "S4", "S5", "S6", "S7", "S8", "S9", "S10", "S11", "S12", "S13", "S14", "S15", "S16", "S17", "S18", "S19", "S20",
      // U: Idiom patterns (U1-U15)
      "U1", "U2", "U3", "U4", "U5", "U6", "U7", "U8", "U9", "U10", "U11", "U12", "U13", "U14", "U15",
      // V: Casual & ironic (V9-V10)
      "V9", "V10",
      // X: Common mistakes awareness (X1-X10)
      "X1", "X2", "X3", "X4", "X5", "X6", "X7", "X8", "X9", "X10",
    ],
    speakingPowers_bn: [
      "বাগধারা ব্যবহার করতে পারি",
      "জটিল বাক্য বানাতে পারি",
      "হাসি-ঠাট্টা করতে পারি ইংরেজিতে",
      "যেকোনো বিষয়ে কথা বলতে পারি",
      "সাধারণ ভুল এড়াতে পারি",
      "জোর দিয়ে কথা বলতে পারি",
    ],
    speakingPowers_en: [
      "Use idioms naturally",
      "Build complex sentences",
      "Use humor and irony",
      "Discuss any topic confidently",
      "Avoid common Bangla-speaker mistakes",
      "Emphasize and exclaim effectively",
    ],
  },
];

// Helper functions

export function getLevelById(id: number): LearningLevel | undefined {
  return learningPath.find((l) => l.id === id);
}

export function getLevelForCategory(categoryId: string): LearningLevel | undefined {
  return learningPath.find((l) => l.categoryIds.includes(categoryId));
}

export function getLevelProgress(
  levelId: number,
  completedPatternIds: string[]
): { total: number; practiced: number; percentage: number } {
  const level = getLevelById(levelId);
  if (!level) return { total: 0, practiced: 0, percentage: 0 };

  const total = level.categoryIds.length;
  // Count categories that have at least one practiced pattern
  const practiced = level.categoryIds.filter((catId) =>
    completedPatternIds.some((pid) => pid.startsWith(catId + "."))
  ).length;

  return {
    total,
    practiced,
    percentage: total > 0 ? Math.round((practiced / total) * 100) : 0,
  };
}

export function getCurrentLevel(completedPatternIds: string[]): number {
  // Find the highest level where user has practiced at least 50% of categories
  for (let i = learningPath.length - 1; i >= 0; i--) {
    const progress = getLevelProgress(learningPath[i].id, completedPatternIds);
    if (progress.percentage >= 50) {
      return learningPath[i].id;
    }
  }
  return 1; // Default to Level 1
}
