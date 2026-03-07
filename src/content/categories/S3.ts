import { PatternCategory } from "@/types/pattern";

export const categoryS3: PatternCategory = {
  id: "S3",
  slug: "subjunctive-patterns",
  name: "Subjunctive Patterns",
  name_bn: "সাবজাংটিভ প্যাটার্ন",
  description: "Express suggestions, demands, and importance using the subjunctive mood",
  description_bn: "সাবজাংটিভ মুড ব্যবহার করে পরামর্শ, দাবি এবং গুরুত্ব প্রকাশ করুন",
  icon: "📋",
  group: "S",
  groupName: "Advanced Structural Patterns",
  groupName_bn: "উন্নত গঠনমূলক প্যাটার্ন",
  difficulty: "advanced",
  patterns: [
    {
      id: "S3.1",
      formula: "I suggest that [PERSON] [BASE VERB]",
      formula_bn: "আমি পরামর্শ দিচ্ছি যে [ব্যক্তি] [মূল ক্রিয়া]",
      patternName: "Suggest + Subjunctive",
      patternName_bn: "পরামর্শ + সাবজাংটিভ",
      slots: [
        {
          name: "PERSON",
          description: "The person being advised",
          description_bn: "যাকে পরামর্শ দেওয়া হচ্ছে",
          acceptedTypes: ["person", "noun_phrase"],
          examples: ["he", "she", "the student"],
        },
        {
          name: "BASE VERB",
          description: "The base form of the verb (no -s, no -ed)",
          description_bn: "ক্রিয়ার মূল রূপ (-s বা -ed ছাড়া)",
          acceptedTypes: ["verb_phrase"],
          examples: ["take a break", "study harder", "see a doctor"],
        },
      ],
      examples: [
        {
          en: "I suggest that he take a break.",
          bn: "আমি পরামর্শ দিচ্ছি যে সে একটু বিশ্রাম নিক।",
          slotValues: { PERSON: "he", "BASE VERB": "take a break" },
        },
        {
          en: "I suggest that she study harder for the exam.",
          bn: "আমি পরামর্শ দিচ্ছি যে সে পরীক্ষার জন্য আরও কঠোর পড়াশোনা করুক।",
          slotValues: { PERSON: "she", "BASE VERB": "study harder for the exam" },
        },
        {
          en: "I suggest that the patient see a specialist.",
          bn: "আমি পরামর্শ দিচ্ছি যে রোগী একজন বিশেষজ্ঞ দেখাক।",
          slotValues: { PERSON: "the patient", "BASE VERB": "see a specialist" },
        },
        {
          en: "I suggest that he apologize to her immediately.",
          bn: "আমি পরামর্শ দিচ্ছি যে সে অবিলম্বে তার কাছে ক্ষমা চাইক।",
          slotValues: { PERSON: "he", "BASE VERB": "apologize to her immediately" },
        },
        {
          en: "I suggest that the company invest in new technology.",
          bn: "আমি পরামর্শ দিচ্ছি যে কোম্পানি নতুন প্রযুক্তিতে বিনিয়োগ করুক।",
          slotValues: { PERSON: "the company", "BASE VERB": "invest in new technology" },
        },
        {
          en: "I suggest that everyone arrive on time tomorrow.",
          bn: "আমি পরামর্শ দিচ্ছি যে আগামীকাল সবাই সময়মতো আসুক।",
          slotValues: { PERSON: "everyone", "BASE VERB": "arrive on time tomorrow" },
        },
        {
          en: "I suggest that she apply for the scholarship.",
          bn: "আমি পরামর্শ দিচ্ছি যে সে বৃত্তির জন্য আবেদন করুক।",
          slotValues: { PERSON: "she", "BASE VERB": "apply for the scholarship" },
        },
        {
          en: "I suggest that the manager reconsider the decision.",
          bn: "আমি পরামর্শ দিচ্ছি যে ম্যানেজার সিদ্ধান্তটি পুনর্বিবেচনা করুক।",
          slotValues: { PERSON: "the manager", "BASE VERB": "reconsider the decision" },
        },
        {
          en: "I suggest that he save more money each month.",
          bn: "আমি পরামর্শ দিচ্ছি যে সে প্রতি মাসে আরও বেশি টাকা সঞ্চয় করুক।",
          slotValues: { PERSON: "he", "BASE VERB": "save more money each month" },
        },
        {
          en: "I suggest that the team practice every day.",
          bn: "আমি পরামর্শ দিচ্ছি যে দল প্রতিদিন অনুশীলন করুক।",
          slotValues: { PERSON: "the team", "BASE VERB": "practice every day" },
        },
        {
          en: "I suggest that she take some time off.",
          bn: "আমি পরামর্শ দিচ্ছি যে সে কিছুটা ছুটি নিক।",
          slotValues: { PERSON: "she", "BASE VERB": "take some time off" },
        },
        {
          en: "I suggest that he consult a lawyer before signing.",
          bn: "আমি পরামর্শ দিচ্ছি যে সে স্বাক্ষর করার আগে একজন আইনজীবীর পরামর্শ নিক।",
          slotValues: { PERSON: "he", "BASE VERB": "consult a lawyer before signing" },
        },
        {
          en: "I suggest that the student revise the essay.",
          bn: "আমি পরামর্শ দিচ্ছি যে ছাত্রটি রচনাটি সংশোধন করুক।",
          slotValues: { PERSON: "the student", "BASE VERB": "revise the essay" },
        },
        {
          en: "I suggest that we leave before it gets dark.",
          bn: "আমি পরামর্শ দিচ্ছি যে অন্ধকার হওয়ার আগে আমরা চলে যাই।",
          slotValues: { PERSON: "we", "BASE VERB": "leave before it gets dark" },
        },
        {
          en: "I suggest that the government provide more funding.",
          bn: "আমি পরামর্শ দিচ্ছি যে সরকার আরও তহবিল দিক।",
          slotValues: { PERSON: "the government", "BASE VERB": "provide more funding" },
        },
      ],
      formality: "formal",
      difficulty: "advanced",
    },
    {
      id: "S3.2",
      formula: "It's important that [PERSON] [BASE VERB]",
      formula_bn: "এটা গুরুত্বপূর্ণ যে [ব্যক্তি] [মূল ক্রিয়া]",
      patternName: "Important + Subjunctive",
      patternName_bn: "গুরুত্বপূর্ণ + সাবজাংটিভ",
      slots: [
        {
          name: "PERSON",
          description: "The person who should do something",
          description_bn: "যার কিছু করা উচিত",
          acceptedTypes: ["person", "noun_phrase"],
          examples: ["he", "she", "everyone"],
        },
        {
          name: "BASE VERB",
          description: "The base form of the verb",
          description_bn: "ক্রিয়ার মূল রূপ",
          acceptedTypes: ["verb_phrase"],
          examples: ["be on time", "understand the rules", "follow the guidelines"],
        },
      ],
      examples: [
        {
          en: "It's important that he be on time for the interview.",
          bn: "এটা গুরুত্বপূর্ণ যে সে সাক্ষাৎকারে সময়মতো থাকুক।",
          slotValues: { PERSON: "he", "BASE VERB": "be on time for the interview" },
        },
        {
          en: "It's important that everyone understand the rules.",
          bn: "এটা গুরুত্বপূর্ণ যে সবাই নিয়মগুলো বুঝুক।",
          slotValues: { PERSON: "everyone", "BASE VERB": "understand the rules" },
        },
        {
          en: "It's important that she follow the doctor's advice.",
          bn: "এটা গুরুত্বপূর্ণ যে সে ডাক্তারের পরামর্শ মানুক।",
          slotValues: { PERSON: "she", "BASE VERB": "follow the doctor's advice" },
        },
        {
          en: "It's important that the children eat healthy food.",
          bn: "এটা গুরুত্বপূর্ণ যে বাচ্চারা স্বাস্থ্যকর খাবার খাক।",
          slotValues: { PERSON: "the children", "BASE VERB": "eat healthy food" },
        },
        {
          en: "It's important that he stay focused during the exam.",
          bn: "এটা গুরুত্বপূর্ণ যে সে পরীক্ষার সময় মনোযোগী থাকুক।",
          slotValues: { PERSON: "he", "BASE VERB": "stay focused during the exam" },
        },
        {
          en: "It's important that the report be submitted by Friday.",
          bn: "এটা গুরুত্বপূর্ণ যে রিপোর্টটি শুক্রবারের মধ্যে জমা দেওয়া হোক।",
          slotValues: { PERSON: "the report", "BASE VERB": "be submitted by Friday" },
        },
        {
          en: "It's important that she not miss any classes.",
          bn: "এটা গুরুত্বপূর্ণ যে সে কোনো ক্লাস মিস না করুক।",
          slotValues: { PERSON: "she", "BASE VERB": "not miss any classes" },
        },
        {
          en: "It's important that we respect each other's opinions.",
          bn: "এটা গুরুত্বপূর্ণ যে আমরা একে অপরের মতামতকে সম্মান করি।",
          slotValues: { PERSON: "we", "BASE VERB": "respect each other's opinions" },
        },
        {
          en: "It's important that the patient rest for a few days.",
          bn: "এটা গুরুত্বপূর্ণ যে রোগী কয়েকদিন বিশ্রাম নিক।",
          slotValues: { PERSON: "the patient", "BASE VERB": "rest for a few days" },
        },
        {
          en: "It's important that he attend the meeting in person.",
          bn: "এটা গুরুত্বপূর্ণ যে সে সশরীরে মিটিংয়ে যোগ দিক।",
          slotValues: { PERSON: "he", "BASE VERB": "attend the meeting in person" },
        },
        {
          en: "It's important that the company maintain high standards.",
          bn: "এটা গুরুত্বপূর্ণ যে কোম্পানি উচ্চ মানদণ্ড বজায় রাখুক।",
          slotValues: { PERSON: "the company", "BASE VERB": "maintain high standards" },
        },
        {
          en: "It's important that she learn from her mistakes.",
          bn: "এটা গুরুত্বপূর্ণ যে সে তার ভুল থেকে শিখুক।",
          slotValues: { PERSON: "she", "BASE VERB": "learn from her mistakes" },
        },
        {
          en: "It's important that every student participate in the discussion.",
          bn: "এটা গুরুত্বপূর্ণ যে প্রতিটি ছাত্র আলোচনায় অংশ নিক।",
          slotValues: { PERSON: "every student", "BASE VERB": "participate in the discussion" },
        },
        {
          en: "It's important that he keep his promises.",
          bn: "এটা গুরুত্বপূর্ণ যে সে তার প্রতিশ্রুতি রাখুক।",
          slotValues: { PERSON: "he", "BASE VERB": "keep his promises" },
        },
        {
          en: "It's important that the information remain confidential.",
          bn: "এটা গুরুত্বপূর্ণ যে তথ্যটি গোপনীয় থাকুক।",
          slotValues: { PERSON: "the information", "BASE VERB": "remain confidential" },
        },
      ],
      formality: "formal",
      difficulty: "advanced",
    },
    {
      id: "S3.3",
      formula: "I demand that [PERSON] [BASE VERB]",
      formula_bn: "আমি দাবি করছি যে [ব্যক্তি] [মূল ক্রিয়া]",
      patternName: "Demand + Subjunctive",
      patternName_bn: "দাবি + সাবজাংটিভ",
      slots: [
        {
          name: "PERSON",
          description: "The person being demanded of",
          description_bn: "যার কাছে দাবি করা হচ্ছে",
          acceptedTypes: ["person", "noun_phrase"],
          examples: ["he", "the company", "they"],
        },
        {
          name: "BASE VERB",
          description: "The base form of the verb",
          description_bn: "ক্রিয়ার মূল রূপ",
          acceptedTypes: ["verb_phrase"],
          examples: ["apologize", "pay the fine", "return the money"],
        },
      ],
      examples: [
        {
          en: "I demand that he apologize to the staff.",
          bn: "আমি দাবি করছি যে সে কর্মীদের কাছে ক্ষমা চাইক।",
          slotValues: { PERSON: "he", "BASE VERB": "apologize to the staff" },
        },
        {
          en: "I demand that the company pay the workers fairly.",
          bn: "আমি দাবি করছি যে কোম্পানি শ্রমিকদের ন্যায্যভাবে বেতন দিক।",
          slotValues: { PERSON: "the company", "BASE VERB": "pay the workers fairly" },
        },
        {
          en: "I demand that they return my deposit immediately.",
          bn: "আমি দাবি করছি যে তারা অবিলম্বে আমার জামানত ফেরত দিক।",
          slotValues: { PERSON: "they", "BASE VERB": "return my deposit immediately" },
        },
        {
          en: "I demand that he explain his behavior.",
          bn: "আমি দাবি করছি যে সে তার আচরণের ব্যাখ্যা দিক।",
          slotValues: { PERSON: "he", "BASE VERB": "explain his behavior" },
        },
        {
          en: "I demand that the landlord fix the plumbing.",
          bn: "আমি দাবি করছি যে বাড়িওয়ালা প্লাম্বিং ঠিক করুক।",
          slotValues: { PERSON: "the landlord", "BASE VERB": "fix the plumbing" },
        },
        {
          en: "I demand that she be given a fair trial.",
          bn: "আমি দাবি করছি যে তাকে একটি সুষ্ঠু বিচার দেওয়া হোক।",
          slotValues: { PERSON: "she", "BASE VERB": "be given a fair trial" },
        },
        {
          en: "I demand that the restaurant replace this meal.",
          bn: "আমি দাবি করছি যে রেস্তোরাঁ এই খাবারটি বদলে দিক।",
          slotValues: { PERSON: "the restaurant", "BASE VERB": "replace this meal" },
        },
        {
          en: "I demand that he stop spreading false information.",
          bn: "আমি দাবি করছি যে সে মিথ্যা তথ্য ছড়ানো বন্ধ করুক।",
          slotValues: { PERSON: "he", "BASE VERB": "stop spreading false information" },
        },
        {
          en: "I demand that the school provide better facilities.",
          bn: "আমি দাবি করছি যে স্কুল আরও ভালো সুবিধা প্রদান করুক।",
          slotValues: { PERSON: "the school", "BASE VERB": "provide better facilities" },
        },
        {
          en: "I demand that they investigate the matter thoroughly.",
          bn: "আমি দাবি করছি যে তারা বিষয়টি পুঙ্খানুপুঙ্খভাবে তদন্ত করুক।",
          slotValues: { PERSON: "they", "BASE VERB": "investigate the matter thoroughly" },
        },
        {
          en: "I demand that the airline compensate the passengers.",
          bn: "আমি দাবি করছি যে বিমান সংস্থা যাত্রীদের ক্ষতিপূরণ দিক।",
          slotValues: { PERSON: "the airline", "BASE VERB": "compensate the passengers" },
        },
        {
          en: "I demand that he resign from his position.",
          bn: "আমি দাবি করছি যে সে তার পদ থেকে পদত্যাগ করুক।",
          slotValues: { PERSON: "he", "BASE VERB": "resign from his position" },
        },
        {
          en: "I demand that the contract be reviewed by a lawyer.",
          bn: "আমি দাবি করছি যে চুক্তিটি একজন আইনজীবী দ্বারা পর্যালোচনা করা হোক।",
          slotValues: { PERSON: "the contract", "BASE VERB": "be reviewed by a lawyer" },
        },
        {
          en: "I demand that she receive proper medical treatment.",
          bn: "আমি দাবি করছি যে সে সঠিক চিকিৎসা পাক।",
          slotValues: { PERSON: "she", "BASE VERB": "receive proper medical treatment" },
        },
        {
          en: "I demand that the government take immediate action.",
          bn: "আমি দাবি করছি যে সরকার অবিলম্বে ব্যবস্থা নিক।",
          slotValues: { PERSON: "the government", "BASE VERB": "take immediate action" },
        },
      ],
      formality: "very_formal",
      difficulty: "advanced",
    },
    {
      id: "S3.4",
      formula: "It's essential that [PERSON] [BASE VERB]",
      formula_bn: "এটা অপরিহার্য যে [ব্যক্তি] [মূল ক্রিয়া]",
      patternName: "Essential + Subjunctive",
      patternName_bn: "অপরিহার্য + সাবজাংটিভ",
      slots: [
        {
          name: "PERSON",
          description: "The person who must do something",
          description_bn: "যার কিছু করা আবশ্যক",
          acceptedTypes: ["person", "noun_phrase"],
          examples: ["he", "she", "the team"],
        },
        {
          name: "BASE VERB",
          description: "The base form of the verb",
          description_bn: "ক্রিয়ার মূল রূপ",
          acceptedTypes: ["verb_phrase"],
          examples: ["complete the form", "wear a helmet", "notify the authorities"],
        },
      ],
      examples: [
        {
          en: "It's essential that he complete the form before the deadline.",
          bn: "এটা অপরিহার্য যে সে সময়সীমার আগে ফর্মটি সম্পূর্ণ করুক।",
          slotValues: { PERSON: "he", "BASE VERB": "complete the form before the deadline" },
        },
        {
          en: "It's essential that every cyclist wear a helmet.",
          bn: "এটা অপরিহার্য যে প্রতিটি সাইক্লিস্ট হেলমেট পরুক।",
          slotValues: { PERSON: "every cyclist", "BASE VERB": "wear a helmet" },
        },
        {
          en: "It's essential that she notify the authorities immediately.",
          bn: "এটা অপরিহার্য যে সে অবিলম্বে কর্তৃপক্ষকে জানাক।",
          slotValues: { PERSON: "she", "BASE VERB": "notify the authorities immediately" },
        },
        {
          en: "It's essential that the team work together on this project.",
          bn: "এটা অপরিহার্য যে দল এই প্রকল্পে একসাথে কাজ করুক।",
          slotValues: { PERSON: "the team", "BASE VERB": "work together on this project" },
        },
        {
          en: "It's essential that he take his medication regularly.",
          bn: "এটা অপরিহার্য যে সে নিয়মিত ওষুধ খাক।",
          slotValues: { PERSON: "he", "BASE VERB": "take his medication regularly" },
        },
        {
          en: "It's essential that the data be backed up daily.",
          bn: "এটা অপরিহার্য যে প্রতিদিন ডেটা ব্যাকআপ নেওয়া হোক।",
          slotValues: { PERSON: "the data", "BASE VERB": "be backed up daily" },
        },
        {
          en: "It's essential that she arrive before the ceremony starts.",
          bn: "এটা অপরিহার্য যে অনুষ্ঠান শুরু হওয়ার আগে সে পৌঁছুক।",
          slotValues: { PERSON: "she", "BASE VERB": "arrive before the ceremony starts" },
        },
        {
          en: "It's essential that every employee read the safety guidelines.",
          bn: "এটা অপরিহার্য যে প্রতিটি কর্মচারী নিরাপত্তা নির্দেশিকা পড়ুক।",
          slotValues: { PERSON: "every employee", "BASE VERB": "read the safety guidelines" },
        },
        {
          en: "It's essential that the witness tell the truth.",
          bn: "এটা অপরিহার্য যে সাক্ষী সত্য বলুক।",
          slotValues: { PERSON: "the witness", "BASE VERB": "tell the truth" },
        },
        {
          en: "It's essential that he not be late for the flight.",
          bn: "এটা অপরিহার্য যে ফ্লাইটের জন্য সে দেরি না করুক।",
          slotValues: { PERSON: "he", "BASE VERB": "not be late for the flight" },
        },
        {
          en: "It's essential that the building meet safety standards.",
          bn: "এটা অপরিহার্য যে ভবনটি নিরাপত্তা মানদণ্ড পূরণ করুক।",
          slotValues: { PERSON: "the building", "BASE VERB": "meet safety standards" },
        },
        {
          en: "It's essential that she prepare thoroughly for the presentation.",
          bn: "এটা অপরিহার্য যে সে উপস্থাপনার জন্য পুঙ্খানুপুঙ্খভাবে প্রস্তুতি নিক।",
          slotValues: { PERSON: "she", "BASE VERB": "prepare thoroughly for the presentation" },
        },
        {
          en: "It's essential that the driver check the brakes before starting.",
          bn: "এটা অপরিহার্য যে চালক শুরু করার আগে ব্রেক পরীক্ষা করুক।",
          slotValues: { PERSON: "the driver", "BASE VERB": "check the brakes before starting" },
        },
        {
          en: "It's essential that the patient drink plenty of water.",
          bn: "এটা অপরিহার্য যে রোগী প্রচুর পানি পান করুক।",
          slotValues: { PERSON: "the patient", "BASE VERB": "drink plenty of water" },
        },
        {
          en: "It's essential that all members vote on the proposal.",
          bn: "এটা অপরিহার্য যে সব সদস্য প্রস্তাবে ভোট দিক।",
          slotValues: { PERSON: "all members", "BASE VERB": "vote on the proposal" },
        },
      ],
      formality: "formal",
      difficulty: "advanced",
    },
    {
      id: "S3.5",
      formula: "I recommend that [PERSON] [BASE VERB]",
      formula_bn: "আমি সুপারিশ করছি যে [ব্যক্তি] [মূল ক্রিয়া]",
      patternName: "Recommend + Subjunctive",
      patternName_bn: "সুপারিশ + সাবজাংটিভ",
      slots: [
        {
          name: "PERSON",
          description: "The person being recommended to",
          description_bn: "যাকে সুপারিশ করা হচ্ছে",
          acceptedTypes: ["person", "noun_phrase"],
          examples: ["he", "she", "the student"],
        },
        {
          name: "BASE VERB",
          description: "The base form of the verb",
          description_bn: "ক্রিয়ার মূল রূপ",
          acceptedTypes: ["verb_phrase"],
          examples: ["read this book", "visit that museum", "try the local food"],
        },
      ],
      examples: [
        {
          en: "I recommend that he read this book before the class.",
          bn: "আমি সুপারিশ করছি যে সে ক্লাসের আগে এই বইটি পড়ুক।",
          slotValues: { PERSON: "he", "BASE VERB": "read this book before the class" },
        },
        {
          en: "I recommend that she visit the museum while she's in town.",
          bn: "আমি সুপারিশ করছি যে শহরে থাকাকালীন সে জাদুঘরটি দেখুক।",
          slotValues: { PERSON: "she", "BASE VERB": "visit the museum while she's in town" },
        },
        {
          en: "I recommend that the student review the previous chapters.",
          bn: "আমি সুপারিশ করছি যে ছাত্রটি আগের অধ্যায়গুলো পুনরায় পড়ুক।",
          slotValues: { PERSON: "the student", "BASE VERB": "review the previous chapters" },
        },
        {
          en: "I recommend that he start with the beginner course.",
          bn: "আমি সুপারিশ করছি যে সে শিক্ষানবিশ কোর্স দিয়ে শুরু করুক।",
          slotValues: { PERSON: "he", "BASE VERB": "start with the beginner course" },
        },
        {
          en: "I recommend that everyone try the local cuisine.",
          bn: "আমি সুপারিশ করছি যে সবাই স্থানীয় রান্না চেষ্টা করুক।",
          slotValues: { PERSON: "everyone", "BASE VERB": "try the local cuisine" },
        },
        {
          en: "I recommend that she get a second opinion from another doctor.",
          bn: "আমি সুপারিশ করছি যে সে অন্য একজন ডাক্তারের কাছ থেকে দ্বিতীয় মতামত নিক।",
          slotValues: { PERSON: "she", "BASE VERB": "get a second opinion from another doctor" },
        },
        {
          en: "I recommend that the applicant submit all documents early.",
          bn: "আমি সুপারিশ করছি যে আবেদনকারী তাড়াতাড়ি সব নথি জমা দিক।",
          slotValues: { PERSON: "the applicant", "BASE VERB": "submit all documents early" },
        },
        {
          en: "I recommend that he exercise at least three times a week.",
          bn: "আমি সুপারিশ করছি যে সে সপ্তাহে অন্তত তিনবার ব্যায়াম করুক।",
          slotValues: { PERSON: "he", "BASE VERB": "exercise at least three times a week" },
        },
        {
          en: "I recommend that the company hire more staff.",
          bn: "আমি সুপারিশ করছি যে কোম্পানি আরও কর্মী নিয়োগ করুক।",
          slotValues: { PERSON: "the company", "BASE VERB": "hire more staff" },
        },
        {
          en: "I recommend that she speak to a counselor.",
          bn: "আমি সুপারিশ করছি যে সে একজন পরামর্শদাতার সাথে কথা বলুক।",
          slotValues: { PERSON: "she", "BASE VERB": "speak to a counselor" },
        },
        {
          en: "I recommend that the patient avoid spicy food.",
          bn: "আমি সুপারিশ করছি যে রোগী ঝাল খাবার এড়িয়ে চলুক।",
          slotValues: { PERSON: "the patient", "BASE VERB": "avoid spicy food" },
        },
        {
          en: "I recommend that he learn a second language.",
          bn: "আমি সুপারিশ করছি যে সে একটি দ্বিতীয় ভাষা শিখুক।",
          slotValues: { PERSON: "he", "BASE VERB": "learn a second language" },
        },
        {
          en: "I recommend that the couple discuss the matter openly.",
          bn: "আমি সুপারিশ করছি যে দম্পতি বিষয়টি খোলামেলাভাবে আলোচনা করুক।",
          slotValues: { PERSON: "the couple", "BASE VERB": "discuss the matter openly" },
        },
        {
          en: "I recommend that she wear comfortable shoes for the hike.",
          bn: "আমি সুপারিশ করছি যে সে হাইকিংয়ের জন্য আরামদায়ক জুতা পরুক।",
          slotValues: { PERSON: "she", "BASE VERB": "wear comfortable shoes for the hike" },
        },
        {
          en: "I recommend that the travelers buy insurance before the trip.",
          bn: "আমি সুপারিশ করছি যে ভ্রমণকারীরা ভ্রমণের আগে বীমা কিনুক।",
          slotValues: { PERSON: "the travelers", "BASE VERB": "buy insurance before the trip" },
        },
      ],
      formality: "formal",
      difficulty: "advanced",
    },
  ],
};
