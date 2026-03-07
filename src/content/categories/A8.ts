import { PatternCategory } from "@/types/pattern";

export const categoryA8: PatternCategory = {
  id: "A8",
  slug: "expressing-wishes-and-dreams",
  name: "Expressing Wishes and Dreams",
  name_bn: "ইচ্ছা ও স্বপ্ন প্রকাশ করা",
  description:
    "Learn how to talk about things you wish for, dream about, or hope could happen.",
  description_bn:
    "আপনি যা কামনা করেন, যার স্বপ্ন দেখেন, বা যা ঘটলে ভালো হতো সে সম্পর্কে কথা বলতে শিখুন।",
  icon: "✨",
  group: "A",
  groupName: "Wanting, Needing & Preferences",
  groupName_bn: "চাওয়া, প্রয়োজন এবং পছন্দ",
  difficulty: "intermediate",
  prerequisites: ["A1", "A5"],
  patterns: [
    {
      id: "A8.1",
      formula: "I wish I could [ACTION]",
      formula_bn: "যদি আমি [কাজ] করতে পারতাম",
      patternName: "Wishing for Ability",
      patternName_bn: "সক্ষমতার কামনা",
      slots: [
        {
          name: "ACTION",
          description:
            "A base-form verb phrase describing something you wish you were able to do",
          description_bn:
            "একটি মূল-রূপ ক্রিয়া পদবন্ধ যা আপনি করতে পারলে ভালো হতো",
          acceptedTypes: ["verb"],
          examples: ["fly", "speak French", "travel the world"],
        },
      ],
      examples: [
        {
          en: "I wish I could fly.",
          bn: "যদি আমি উড়তে পারতাম!",
          slotValues: { ACTION: "fly" },
          topicArea: "daily_life",
        },
        {
          en: "I wish I could speak French.",
          bn: "যদি আমি ফরাসি বলতে পারতাম!",
          slotValues: { ACTION: "speak French" },
          topicArea: "education",
        },
        {
          en: "I wish I could travel the world.",
          bn: "যদি আমি সারা বিশ্ব ঘুরতে পারতাম!",
          slotValues: { ACTION: "travel the world" },
          topicArea: "travel",
        },
        {
          en: "I wish I could cook like my mother.",
          bn: "যদি আমি আমার মায়ের মতো রান্না করতে পারতাম!",
          slotValues: { ACTION: "cook like my mother" },
          topicArea: "food",
        },
        {
          en: "I wish I could take a year off.",
          bn: "যদি আমি এক বছরের ছুটি নিতে পারতাম!",
          slotValues: { ACTION: "take a year off" },
          topicArea: "work",
        },
        {
          en: "I wish I could run a marathon.",
          bn: "যদি আমি ম্যারাথন দৌড়াতে পারতাম!",
          slotValues: { ACTION: "run a marathon" },
          topicArea: "health",
        },
        {
          en: "I wish I could spend more time with you.",
          bn: "যদি আমি তোমার সাথে আরও বেশি সময় কাটাতে পারতাম!",
          slotValues: { ACTION: "spend more time with you" },
          topicArea: "relationships",
        },
        {
          en: "I wish I could afford that.",
          bn: "যদি আমি সেটা কিনতে সামর্থ্য রাখতাম!",
          slotValues: { ACTION: "afford that" },
          topicArea: "shopping",
        },
        {
          en: "I wish I could play the guitar.",
          bn: "যদি আমি গিটার বাজাতে পারতাম!",
          slotValues: { ACTION: "play the guitar" },
          topicArea: "daily_life",
        },
        {
          en: "I wish I could eat anything without gaining weight.",
          bn: "যদি আমি ওজন না বাড়িয়ে যেকোনো কিছু খেতে পারতাম!",
          slotValues: { ACTION: "eat anything without gaining weight" },
          topicArea: "food",
        },
        {
          en: "I wish I could visit Japan.",
          bn: "যদি আমি জাপান ঘুরতে পারতাম!",
          slotValues: { ACTION: "visit Japan" },
          topicArea: "travel",
        },
        {
          en: "I wish I could change my career.",
          bn: "যদি আমি আমার ক্যারিয়ার পরিবর্তন করতে পারতাম!",
          slotValues: { ACTION: "change my career" },
          topicArea: "work",
        },
        {
          en: "I wish I could go back to university.",
          bn: "যদি আমি বিশ্ববিদ্যালয়ে ফিরে যেতে পারতাম!",
          slotValues: { ACTION: "go back to university" },
          topicArea: "education",
        },
        {
          en: "I wish I could heal faster.",
          bn: "যদি আমি আরও দ্রুত সুস্থ হতে পারতাম!",
          slotValues: { ACTION: "heal faster" },
          topicArea: "health",
        },
        {
          en: "I wish I could see my old friends again.",
          bn: "যদি আমি আমার পুরনো বন্ধুদের আবার দেখতে পারতাম!",
          slotValues: { ACTION: "see my old friends again" },
          topicArea: "relationships",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "'I wish I could' expresses a desire for something that is currently not possible. Uses the subjunctive mood.",
      usageNote_bn:
        "'I wish I could' এমন কিছুর ইচ্ছা প্রকাশ করে যা বর্তমানে সম্ভব নয়। সাবজাংটিভ মুড ব্যবহার করে।",
      combinableWith: ["A8.5"],
      banglaStructureMap:
        "যদি আমি (If + Subject) + [ACTION] (Verb phrase) + করতে পারতাম (Ability + Past)",
    },
    {
      id: "A8.2",
      formula: "If only I could [ACTION]",
      formula_bn: "যদি আমি শুধু [কাজ] করতে পারতাম",
      patternName: "Emphatic Wish",
      patternName_bn: "জোরালো ইচ্ছা",
      slots: [
        {
          name: "ACTION",
          description:
            "A base-form verb phrase describing something you desperately wish for",
          description_bn:
            "একটি মূল-রূপ ক্রিয়া পদবন্ধ যা আপনি তীব্রভাবে কামনা করেন",
          acceptedTypes: ["verb"],
          examples: ["turn back time", "be there", "start over"],
        },
      ],
      examples: [
        {
          en: "If only I could turn back time.",
          bn: "যদি আমি শুধু সময়কে পেছনে ফেরাতে পারতাম!",
          slotValues: { ACTION: "turn back time" },
          topicArea: "daily_life",
        },
        {
          en: "If only I could be there with you.",
          bn: "যদি আমি শুধু তোমার সাথে সেখানে থাকতে পারতাম!",
          slotValues: { ACTION: "be there with you" },
          topicArea: "relationships",
        },
        {
          en: "If only I could start over.",
          bn: "যদি আমি শুধু আবার শুরু করতে পারতাম!",
          slotValues: { ACTION: "start over" },
          topicArea: "daily_life",
        },
        {
          en: "If only I could get that promotion.",
          bn: "যদি আমি শুধু সেই পদোন্নতি পেতে পারতাম!",
          slotValues: { ACTION: "get that promotion" },
          topicArea: "work",
        },
        {
          en: "If only I could understand this chapter.",
          bn: "যদি আমি শুধু এই অধ্যায়টি বুঝতে পারতাম!",
          slotValues: { ACTION: "understand this chapter" },
          topicArea: "education",
        },
        {
          en: "If only I could taste my grandmother's cooking again.",
          bn: "যদি আমি শুধু আবার দাদির রান্না খেতে পারতাম!",
          slotValues: { ACTION: "taste my grandmother's cooking again" },
          topicArea: "food",
        },
        {
          en: "If only I could visit every country in the world.",
          bn: "যদি আমি শুধু পৃথিবীর প্রতিটি দেশ ঘুরতে পারতাম!",
          slotValues: { ACTION: "visit every country in the world" },
          topicArea: "travel",
        },
        {
          en: "If only I could get rid of this pain.",
          bn: "যদি আমি শুধু এই ব্যথা থেকে মুক্তি পেতে পারতাম!",
          slotValues: { ACTION: "get rid of this pain" },
          topicArea: "health",
        },
        {
          en: "If only I could afford to buy a house.",
          bn: "যদি আমি শুধু একটা বাড়ি কেনার সামর্থ্য রাখতাম!",
          slotValues: { ACTION: "afford to buy a house" },
          topicArea: "shopping",
        },
        {
          en: "If only I could sleep peacefully.",
          bn: "যদি আমি শুধু শান্তিতে ঘুমাতে পারতাম!",
          slotValues: { ACTION: "sleep peacefully" },
          topicArea: "health",
        },
        {
          en: "If only I could work from anywhere.",
          bn: "যদি আমি শুধু যেকোনো জায়গা থেকে কাজ করতে পারতাম!",
          slotValues: { ACTION: "work from anywhere" },
          topicArea: "work",
        },
        {
          en: "If only I could speak to her one more time.",
          bn: "যদি আমি শুধু তার সাথে আরেকবার কথা বলতে পারতাম!",
          slotValues: { ACTION: "speak to her one more time" },
          topicArea: "relationships",
        },
        {
          en: "If only I could master English quickly.",
          bn: "যদি আমি শুধু দ্রুত ইংরেজি আয়ত্ত করতে পারতাম!",
          slotValues: { ACTION: "master English quickly" },
          topicArea: "education",
        },
        {
          en: "If only I could eat sushi in Tokyo.",
          bn: "যদি আমি শুধু টোকিওতে সুশি খেতে পারতাম!",
          slotValues: { ACTION: "eat sushi in Tokyo" },
          topicArea: "food",
        },
        {
          en: "If only I could explore the Amazon rainforest.",
          bn: "যদি আমি শুধু আমাজন রেইনফরেস্ট ঘুরতে পারতাম!",
          slotValues: { ACTION: "explore the Amazon rainforest" },
          topicArea: "travel",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "'If only' is more emotional and emphatic than 'I wish'. It expresses a stronger sense of longing.",
      usageNote_bn:
        "'If only' হলো 'I wish'-এর চেয়ে বেশি আবেগপূর্ণ এবং জোরালো। এটি আরও তীব্র আকাঙ্ক্ষা প্রকাশ করে।",
      combinableWith: ["A8.1"],
      banglaStructureMap:
        "যদি আমি শুধু (If only + Subject) + [ACTION] (Verb phrase) + করতে পারতাম (Ability + Past)",
    },
    {
      id: "A8.3",
      formula: "I dream of [DOING]",
      formula_bn: "আমি [করার] স্বপ্ন দেখি",
      patternName: "Dreaming About Something",
      patternName_bn: "কিছুর স্বপ্ন দেখা",
      slots: [
        {
          name: "DOING",
          description: "A gerund (-ing form) phrase describing your dream",
          description_bn:
            "একটি জেরান্ড (-ing রূপ) পদবন্ধ যা আপনার স্বপ্ন বর্ণনা করে",
          acceptedTypes: ["gerund"],
          examples: [
            "traveling to Europe",
            "starting my own business",
            "living by the sea",
          ],
        },
      ],
      examples: [
        {
          en: "I dream of traveling to Europe.",
          bn: "আমি ইউরোপ ভ্রমণের স্বপ্ন দেখি।",
          slotValues: { DOING: "traveling to Europe" },
          topicArea: "travel",
        },
        {
          en: "I dream of starting my own business.",
          bn: "আমি নিজের ব্যবসা শুরু করার স্বপ্ন দেখি।",
          slotValues: { DOING: "starting my own business" },
          topicArea: "work",
        },
        {
          en: "I dream of living by the sea.",
          bn: "আমি সমুদ্রের ধারে বাস করার স্বপ্ন দেখি।",
          slotValues: { DOING: "living by the sea" },
          topicArea: "daily_life",
        },
        {
          en: "I dream of becoming a doctor.",
          bn: "আমি ডাক্তার হওয়ার স্বপ্ন দেখি।",
          slotValues: { DOING: "becoming a doctor" },
          topicArea: "education",
        },
        {
          en: "I dream of opening a restaurant.",
          bn: "আমি একটা রেস্তোরাঁ খোলার স্বপ্ন দেখি।",
          slotValues: { DOING: "opening a restaurant" },
          topicArea: "food",
        },
        {
          en: "I dream of running a full marathon.",
          bn: "আমি পুরো ম্যারাথন দৌড়ানোর স্বপ্ন দেখি।",
          slotValues: { DOING: "running a full marathon" },
          topicArea: "health",
        },
        {
          en: "I dream of having a big family.",
          bn: "আমি একটি বড় পরিবার থাকার স্বপ্ন দেখি।",
          slotValues: { DOING: "having a big family" },
          topicArea: "relationships",
        },
        {
          en: "I dream of buying my own house.",
          bn: "আমি নিজের বাড়ি কেনার স্বপ্ন দেখি।",
          slotValues: { DOING: "buying my own house" },
          topicArea: "shopping",
        },
        {
          en: "I dream of writing a novel.",
          bn: "আমি একটি উপন্যাস লেখার স্বপ্ন দেখি।",
          slotValues: { DOING: "writing a novel" },
          topicArea: "education",
        },
        {
          en: "I dream of climbing Mount Everest.",
          bn: "আমি মাউন্ট এভারেস্টে আরোহণের স্বপ্ন দেখি।",
          slotValues: { DOING: "climbing Mount Everest" },
          topicArea: "travel",
        },
        {
          en: "I dream of getting promoted to manager.",
          bn: "আমি ম্যানেজার পদে পদোন্নতির স্বপ্ন দেখি।",
          slotValues: { DOING: "getting promoted to manager" },
          topicArea: "work",
        },
        {
          en: "I dream of cooking for a hundred people.",
          bn: "আমি একশো মানুষের জন্য রান্না করার স্বপ্ন দেখি।",
          slotValues: { DOING: "cooking for a hundred people" },
          topicArea: "food",
        },
        {
          en: "I dream of being completely fit and healthy.",
          bn: "আমি সম্পূর্ণ ফিট ও সুস্থ থাকার স্বপ্ন দেখি।",
          slotValues: { DOING: "being completely fit and healthy" },
          topicArea: "health",
        },
        {
          en: "I dream of reuniting with my childhood friends.",
          bn: "আমি আমার ছেলেবেলার বন্ধুদের সাথে পুনর্মিলনের স্বপ্ন দেখি।",
          slotValues: { DOING: "reuniting with my childhood friends" },
          topicArea: "relationships",
        },
        {
          en: "I dream of owning a vintage car.",
          bn: "আমি একটা ভিন্টেজ গাড়ির মালিক হওয়ার স্বপ্ন দেখি।",
          slotValues: { DOING: "owning a vintage car" },
          topicArea: "shopping",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "'Dream of' is followed by a gerund. It expresses a long-held aspiration or ambition.",
      usageNote_bn:
        "'Dream of'-এর পরে জেরান্ড আসে। এটি দীর্ঘদিনের আকাঙ্ক্ষা বা উচ্চাকাঙ্ক্ষা প্রকাশ করে।",
      combinableWith: ["A8.1", "A8.5"],
      banglaStructureMap:
        "আমি (Subject) + [DOING] (Gerund phrase)-এর + স্বপ্ন দেখি (Verb)",
    },
    {
      id: "A8.4",
      formula: "Wouldn't it be great if [CLAUSE]?",
      formula_bn: "[উপবাক্য] হলে কি দারুণ হতো না?",
      patternName: "Hypothetical Dream Question",
      patternName_bn: "কাল্পনিক স্বপ্ন প্রশ্ন",
      slots: [
        {
          name: "CLAUSE",
          description:
            "A past-tense clause describing a hypothetical desirable situation",
          description_bn:
            "একটি অতীতকালের উপবাক্য যা একটি কাল্পনিক কাঙ্ক্ষিত পরিস্থিতি বর্ণনা করে",
          acceptedTypes: ["clause"],
          examples: [
            "we could all work from home",
            "there were no exams",
            "food was free",
          ],
        },
      ],
      examples: [
        {
          en: "Wouldn't it be great if we could all work from home?",
          bn: "আমরা সবাই বাসা থেকে কাজ করতে পারলে কি দারুণ হতো না?",
          slotValues: { CLAUSE: "we could all work from home" },
          topicArea: "work",
        },
        {
          en: "Wouldn't it be great if there were no exams?",
          bn: "পরীক্ষা না থাকলে কি দারুণ হতো না?",
          slotValues: { CLAUSE: "there were no exams" },
          topicArea: "education",
        },
        {
          en: "Wouldn't it be great if food was free?",
          bn: "খাবার বিনামূল্যে হলে কি দারুণ হতো না?",
          slotValues: { CLAUSE: "food was free" },
          topicArea: "food",
        },
        {
          en: "Wouldn't it be great if we could teleport?",
          bn: "আমরা টেলিপোর্ট করতে পারলে কি দারুণ হতো না?",
          slotValues: { CLAUSE: "we could teleport" },
          topicArea: "travel",
        },
        {
          en: "Wouldn't it be great if nobody got sick?",
          bn: "কেউ অসুস্থ না হলে কি দারুণ হতো না?",
          slotValues: { CLAUSE: "nobody got sick" },
          topicArea: "health",
        },
        {
          en: "Wouldn't it be great if we lived closer to each other?",
          bn: "আমরা একে অপরের কাছাকাছি থাকলে কি দারুণ হতো না?",
          slotValues: { CLAUSE: "we lived closer to each other" },
          topicArea: "relationships",
        },
        {
          en: "Wouldn't it be great if everything was on sale?",
          bn: "সবকিছু সেলে থাকলে কি দারুণ হতো না?",
          slotValues: { CLAUSE: "everything was on sale" },
          topicArea: "shopping",
        },
        {
          en: "Wouldn't it be great if weekends were three days long?",
          bn: "সাপ্তাহিক ছুটি তিন দিন হলে কি দারুণ হতো না?",
          slotValues: { CLAUSE: "weekends were three days long" },
          topicArea: "daily_life",
        },
        {
          en: "Wouldn't it be great if we could travel without a visa?",
          bn: "ভিসা ছাড়া ভ্রমণ করতে পারলে কি দারুণ হতো না?",
          slotValues: { CLAUSE: "we could travel without a visa" },
          topicArea: "travel",
        },
        {
          en: "Wouldn't it be great if learning was always fun?",
          bn: "পড়াশোনা সবসময় মজার হলে কি দারুণ হতো না?",
          slotValues: { CLAUSE: "learning was always fun" },
          topicArea: "education",
        },
        {
          en: "Wouldn't it be great if we had more holidays?",
          bn: "আমাদের আরও ছুটি থাকলে কি দারুণ হতো না?",
          slotValues: { CLAUSE: "we had more holidays" },
          topicArea: "work",
        },
        {
          en: "Wouldn't it be great if home-cooked meals were always ready?",
          bn: "ঘরে রান্না করা খাবার সবসময় তৈরি থাকলে কি দারুণ হতো না?",
          slotValues: { CLAUSE: "home-cooked meals were always ready" },
          topicArea: "food",
        },
        {
          en: "Wouldn't it be great if there was a cure for every disease?",
          bn: "প্রতিটি রোগের চিকিৎসা থাকলে কি দারুণ হতো না?",
          slotValues: { CLAUSE: "there was a cure for every disease" },
          topicArea: "health",
        },
        {
          en: "Wouldn't it be great if we could all understand each other?",
          bn: "আমরা সবাই একে অপরকে বুঝতে পারলে কি দারুণ হতো না?",
          slotValues: { CLAUSE: "we could all understand each other" },
          topicArea: "relationships",
        },
        {
          en: "Wouldn't it be great if quality products were always affordable?",
          bn: "মানসম্পন্ন পণ্য সবসময় সাশ্রয়ী হলে কি দারুণ হতো না?",
          slotValues: { CLAUSE: "quality products were always affordable" },
          topicArea: "shopping",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "A rhetorical question used to daydream or share hypothetical wishes. Uses the past tense for the hypothetical clause.",
      usageNote_bn:
        "দিবাস্বপ্ন বা কাল্পনিক ইচ্ছা শেয়ার করতে ব্যবহৃত অলংকারিক প্রশ্ন। কাল্পনিক উপবাক্যের জন্য অতীতকাল ব্যবহার করে।",
      combinableWith: ["A8.1"],
      banglaStructureMap:
        "[CLAUSE] (Hypothetical clause) + হলে কি দারুণ হতো না (Wouldn't it be great)?",
    },
    {
      id: "A8.5",
      formula: "I've always wanted to [ACTION]",
      formula_bn: "আমি সবসময় [কাজ] করতে চেয়েছি",
      patternName: "Lifelong Desire",
      patternName_bn: "দীর্ঘদিনের আকাঙ্ক্ষা",
      slots: [
        {
          name: "ACTION",
          description:
            "A base-form verb phrase describing something you have always desired",
          description_bn:
            "একটি মূল-রূপ ক্রিয়া পদবন্ধ যা আপনি সবসময় চেয়েছেন",
          acceptedTypes: ["verb"],
          examples: [
            "visit Paris",
            "learn to paint",
            "write a book",
          ],
        },
      ],
      examples: [
        {
          en: "I've always wanted to visit Paris.",
          bn: "আমি সবসময় প্যারিস ঘুরতে চেয়েছি।",
          slotValues: { ACTION: "visit Paris" },
          topicArea: "travel",
        },
        {
          en: "I've always wanted to learn to paint.",
          bn: "আমি সবসময় ছবি আঁকা শিখতে চেয়েছি।",
          slotValues: { ACTION: "learn to paint" },
          topicArea: "education",
        },
        {
          en: "I've always wanted to write a book.",
          bn: "আমি সবসময় একটা বই লিখতে চেয়েছি।",
          slotValues: { ACTION: "write a book" },
          topicArea: "education",
        },
        {
          en: "I've always wanted to try sushi.",
          bn: "আমি সবসময় সুশি খেয়ে দেখতে চেয়েছি।",
          slotValues: { ACTION: "try sushi" },
          topicArea: "food",
        },
        {
          en: "I've always wanted to start my own company.",
          bn: "আমি সবসময় নিজের কোম্পানি শুরু করতে চেয়েছি।",
          slotValues: { ACTION: "start my own company" },
          topicArea: "work",
        },
        {
          en: "I've always wanted to climb a mountain.",
          bn: "আমি সবসময় পাহাড়ে উঠতে চেয়েছি।",
          slotValues: { ACTION: "climb a mountain" },
          topicArea: "health",
        },
        {
          en: "I've always wanted to have a close group of friends.",
          bn: "আমি সবসময় ঘনিষ্ঠ বন্ধুদের একটা দল চেয়েছি।",
          slotValues: { ACTION: "have a close group of friends" },
          topicArea: "relationships",
        },
        {
          en: "I've always wanted to own a leather jacket.",
          bn: "আমি সবসময় একটা চামড়ার জ্যাকেট কিনতে চেয়েছি।",
          slotValues: { ACTION: "own a leather jacket" },
          topicArea: "shopping",
        },
        {
          en: "I've always wanted to live abroad.",
          bn: "আমি সবসময় বিদেশে থাকতে চেয়েছি।",
          slotValues: { ACTION: "live abroad" },
          topicArea: "daily_life",
        },
        {
          en: "I've always wanted to make biryani from scratch.",
          bn: "আমি সবসময় একদম শুরু থেকে বিরিয়ানি বানাতে চেয়েছি।",
          slotValues: { ACTION: "make biryani from scratch" },
          topicArea: "food",
        },
        {
          en: "I've always wanted to see the Northern Lights.",
          bn: "আমি সবসময় উত্তরের আলো (অরোরা) দেখতে চেয়েছি।",
          slotValues: { ACTION: "see the Northern Lights" },
          topicArea: "travel",
        },
        {
          en: "I've always wanted to be my own boss.",
          bn: "আমি সবসময় নিজের বস হতে চেয়েছি।",
          slotValues: { ACTION: "be my own boss" },
          topicArea: "work",
        },
        {
          en: "I've always wanted to learn to swim properly.",
          bn: "আমি সবসময় ঠিকমতো সাঁতার শিখতে চেয়েছি।",
          slotValues: { ACTION: "learn to swim properly" },
          topicArea: "health",
        },
        {
          en: "I've always wanted to tell you how I feel.",
          bn: "আমি সবসময় তোমাকে বলতে চেয়েছি আমি কেমন অনুভব করি।",
          slotValues: { ACTION: "tell you how I feel" },
          topicArea: "relationships",
        },
        {
          en: "I've always wanted to build my own PC.",
          bn: "আমি সবসময় নিজের পিসি তৈরি করতে চেয়েছি।",
          slotValues: { ACTION: "build my own PC" },
          topicArea: "shopping",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "Present perfect ('I've always wanted') shows a desire that started in the past and continues to the present.",
      usageNote_bn:
        "পূর্ণ বর্তমান ('I've always wanted') একটি ইচ্ছা দেখায় যা অতীতে শুরু হয়েছে এবং বর্তমানেও চলছে।",
      combinableWith: ["A8.1", "A8.3"],
      banglaStructureMap:
        "আমি সবসময় (Subject + Always) + [ACTION] (Verb phrase) + করতে চেয়েছি (Present Perfect Want)",
    },
    {
      id: "A8.6",
      formula: "I can't wait to [ACTION]",
      formula_bn: "আমি [কাজ] করতে অপেক্ষা করতে পারছি না",
      patternName: "Anticipation",
      patternName_bn: "প্রত্যাশা",
      slots: [
        {
          name: "ACTION",
          description:
            "A base-form verb phrase describing something you are excited about",
          description_bn:
            "একটি মূল-রূপ ক্রিয়া পদবন্ধ যা আপনি উত্তেজিত সে বিষয়ে",
          acceptedTypes: ["verb"],
          examples: ["see you", "start my new job", "go on vacation"],
        },
      ],
      examples: [
        {
          en: "I can't wait to see you.",
          bn: "আমি তোমাকে দেখতে অপেক্ষা করতে পারছি না।",
          slotValues: { ACTION: "see you" },
          topicArea: "relationships",
        },
        {
          en: "I can't wait to start my new job.",
          bn: "আমি আমার নতুন চাকরি শুরু করতে অপেক্ষা করতে পারছি না।",
          slotValues: { ACTION: "start my new job" },
          topicArea: "work",
        },
        {
          en: "She can't wait to go on vacation.",
          bn: "সে ছুটিতে যেতে অপেক্ষা করতে পারছে না।",
          slotValues: { ACTION: "go on vacation" },
          topicArea: "travel",
        },
        {
          en: "I can't wait to taste the biryani.",
          bn: "আমি বিরিয়ানি খেতে অপেক্ষা করতে পারছি না।",
          slotValues: { ACTION: "taste the biryani" },
          topicArea: "food",
        },
        {
          en: "He can't wait to graduate.",
          bn: "সে স্নাতক হতে অপেক্ষা করতে পারছে না।",
          slotValues: { ACTION: "graduate" },
          topicArea: "education",
        },
        {
          en: "I can't wait to move into the new house.",
          bn: "আমি নতুন বাড়িতে উঠতে অপেক্ষা করতে পারছি না।",
          slotValues: { ACTION: "move into the new house" },
          topicArea: "daily_life",
        },
        {
          en: "We can't wait to meet the baby.",
          bn: "আমরা বাচ্চাকে দেখতে অপেক্ষা করতে পারছি না।",
          slotValues: { ACTION: "meet the baby" },
          topicArea: "relationships",
        },
        {
          en: "I can't wait to try the new restaurant.",
          bn: "আমি নতুন রেস্তোরাঁ চেষ্টা করতে অপেক্ষা করতে পারছি না।",
          slotValues: { ACTION: "try the new restaurant" },
          topicArea: "food",
        },
        {
          en: "She can't wait to start her fitness program.",
          bn: "সে তার ফিটনেস প্রোগ্রাম শুরু করতে অপেক্ষা করতে পারছে না।",
          slotValues: { ACTION: "start her fitness program" },
          topicArea: "health",
        },
        {
          en: "I can't wait to open my presents.",
          bn: "আমি আমার উপহারগুলো খুলতে অপেক্ষা করতে পারছি না।",
          slotValues: { ACTION: "open my presents" },
          topicArea: "shopping",
        },
        {
          en: "He can't wait to visit Paris.",
          bn: "সে প্যারিস ঘুরতে অপেক্ষা করতে পারছে না।",
          slotValues: { ACTION: "visit Paris" },
          topicArea: "travel",
        },
        {
          en: "I can't wait to finish this project.",
          bn: "আমি এই প্রজেক্ট শেষ করতে অপেক্ষা করতে পারছি না।",
          slotValues: { ACTION: "finish this project" },
          topicArea: "work",
        },
        {
          en: "They can't wait to see the concert.",
          bn: "তারা কনসার্ট দেখতে অপেক্ষা করতে পারছে না।",
          slotValues: { ACTION: "see the concert" },
          topicArea: "daily_life",
        },
        {
          en: "I can't wait to learn how to swim.",
          bn: "আমি সাঁতার শিখতে অপেক্ষা করতে পারছি না।",
          slotValues: { ACTION: "learn how to swim" },
          topicArea: "health",
        },
        {
          en: "She can't wait to read the new book.",
          bn: "সে নতুন বইটি পড়তে অপেক্ষা করতে পারছে না।",
          slotValues: { ACTION: "read the new book" },
          topicArea: "education",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "'I can't wait to' expresses strong excitement and anticipation about something in the near future. It's very common in casual English.",
      usageNote_bn:
        "'I can't wait to' নিকট ভবিষ্যতে কিছুর প্রতি তীব্র উত্তেজনা ও প্রত্যাশা প্রকাশ করে। অনানুষ্ঠানিক ইংরেজিতে খুবই সাধারণ।",
      combinableWith: ["A8.5"],
      banglaStructureMap:
        "আমি (Subject) + [ACTION] (Verb phrase) + করতে অপেক্ষা করতে পারছি না (Can't wait)",
    },
    {
      id: "A8.7",
      formula: "My dream is to [ACTION]",
      formula_bn: "আমার স্বপ্ন হলো [কাজ] করা",
      patternName: "Dream Statement",
      patternName_bn: "স্বপ্ন বিবৃতি",
      slots: [
        {
          name: "ACTION",
          description:
            "A base-form verb phrase describing your dream or aspiration",
          description_bn:
            "একটি মূল-রূপ ক্রিয়া পদবন্ধ যা আপনার স্বপ্ন বা আকাঙ্ক্ষা বর্ণনা করে",
          acceptedTypes: ["verb"],
          examples: ["travel the world", "become a doctor", "write a novel"],
        },
      ],
      examples: [
        {
          en: "My dream is to travel the world.",
          bn: "আমার স্বপ্ন হলো সারা বিশ্ব ভ্রমণ করা।",
          slotValues: { ACTION: "travel the world" },
          topicArea: "travel",
        },
        {
          en: "My dream is to become a doctor.",
          bn: "আমার স্বপ্ন হলো ডাক্তার হওয়া।",
          slotValues: { ACTION: "become a doctor" },
          topicArea: "education",
        },
        {
          en: "Her dream is to write a novel.",
          bn: "তার স্বপ্ন হলো একটি উপন্যাস লেখা।",
          slotValues: { ACTION: "write a novel" },
          topicArea: "education",
        },
        {
          en: "My dream is to open my own restaurant.",
          bn: "আমার স্বপ্ন হলো নিজের রেস্তোরাঁ খোলা।",
          slotValues: { ACTION: "open my own restaurant" },
          topicArea: "food",
        },
        {
          en: "His dream is to run a marathon.",
          bn: "তার স্বপ্ন হলো ম্যারাথন দৌড়ানো।",
          slotValues: { ACTION: "run a marathon" },
          topicArea: "health",
        },
        {
          en: "My dream is to build a house for my parents.",
          bn: "আমার স্বপ্ন হলো বাবা-মায়ের জন্য একটি বাড়ি তৈরি করা।",
          slotValues: { ACTION: "build a house for my parents" },
          topicArea: "relationships",
        },
        {
          en: "My dream is to start my own business.",
          bn: "আমার স্বপ্ন হলো নিজের ব্যবসা শুরু করা।",
          slotValues: { ACTION: "start my own business" },
          topicArea: "work",
        },
        {
          en: "Her dream is to live in a peaceful village.",
          bn: "তার স্বপ্ন হলো একটি শান্তিপূর্ণ গ্রামে থাকা।",
          slotValues: { ACTION: "live in a peaceful village" },
          topicArea: "daily_life",
        },
        {
          en: "My dream is to speak five languages.",
          bn: "আমার স্বপ্ন হলো পাঁচটি ভাষায় কথা বলা।",
          slotValues: { ACTION: "speak five languages" },
          topicArea: "education",
        },
        {
          en: "His dream is to climb Mount Everest.",
          bn: "তার স্বপ্ন হলো মাউন্ট এভারেস্টে আরোহণ করা।",
          slotValues: { ACTION: "climb Mount Everest" },
          topicArea: "travel",
        },
        {
          en: "My dream is to retire early.",
          bn: "আমার স্বপ্ন হলো তাড়াতাড়ি অবসর নেওয়া।",
          slotValues: { ACTION: "retire early" },
          topicArea: "work",
        },
        {
          en: "My dream is to own a bakery.",
          bn: "আমার স্বপ্ন হলো একটি বেকারি-এর মালিক হওয়া।",
          slotValues: { ACTION: "own a bakery" },
          topicArea: "food",
        },
        {
          en: "Her dream is to help underprivileged children.",
          bn: "তার স্বপ্ন হলো সুবিধাবঞ্চিত শিশুদের সাহায্য করা।",
          slotValues: { ACTION: "help underprivileged children" },
          topicArea: "relationships",
        },
        {
          en: "My dream is to buy a sports car.",
          bn: "আমার স্বপ্ন হলো একটি স্পোর্টস কার কেনা।",
          slotValues: { ACTION: "buy a sports car" },
          topicArea: "shopping",
        },
        {
          en: "My dream is to complete a triathlon.",
          bn: "আমার স্বপ্ন হলো একটি ট্রায়াথলন সম্পন্ন করা।",
          slotValues: { ACTION: "complete a triathlon" },
          topicArea: "health",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "'My dream is to' uses the infinitive and is a clear, direct way to express life goals and aspirations.",
      usageNote_bn:
        "'My dream is to' ইনফিনিটিভ ব্যবহার করে এবং জীবনের লক্ষ্য ও আকাঙ্ক্ষা প্রকাশ করার একটি স্পষ্ট, সরাসরি উপায়।",
      combinableWith: ["A8.3", "A8.5"],
      banglaStructureMap:
        "আমার স্বপ্ন হলো (My dream is) + [ACTION] (Verb phrase) + করা (To do)",
    },
  ],
};
