import { PatternCategory } from "@/types/pattern";

export const categoryF6: PatternCategory = {
  id: "F6",
  slug: "warning-cautioning",
  name: "Warning & Cautioning",
  name_bn: "সতর্ক করা ও সাবধান করা",
  description:
    "Learn how to warn and caution others in English using common patterns.",
  description_bn:
    "সাধারণ প্যাটার্ন ব্যবহার করে ইংরেজিতে অন্যদের সতর্ক ও সাবধান করতে শিখুন।",
  icon: "⚠️",
  group: "F",
  groupName: "Suggestions, Offers & Invitations",
  groupName_bn: "পরামর্শ, প্রস্তাব এবং আমন্ত্রণ",
  difficulty: "intermediate",
  patterns: [
    {
      id: "F6.1",
      formula: "Be careful with [THING]",
      formula_bn: "[জিনিস] নিয়ে সাবধান থেকো",
      patternName: "General Warning",
      patternName_bn: "সাধারণ সতর্কতা",
      slots: [
        {
          name: "THING",
          description: "A noun or noun phrase representing the source of danger or concern",
          description_bn: "বিপদ বা উদ্বেগের উৎস বোঝায় এমন একটি বিশেষ্য বা বিশেষ্য পদবন্ধ",
          acceptedTypes: ["noun", "noun_phrase"],
          examples: ["the hot stove", "your words", "that knife"],
        },
      ],
      examples: [
        {
          en: "Be careful with the hot stove.",
          bn: "গরম চুলা নিয়ে সাবধান থেকো।",
          slotValues: { THING: "the hot stove" },
          topicArea: "food",
        },
        {
          en: "Be careful with your words.",
          bn: "তোমার কথায় সাবধান থেকো।",
          slotValues: { THING: "your words" },
          topicArea: "relationships",
        },
        {
          en: "Be careful with that knife.",
          bn: "সেই ছুরি নিয়ে সাবধান থেকো।",
          slotValues: { THING: "that knife" },
          topicArea: "daily_life",
        },
        {
          en: "Be careful with the slippery road.",
          bn: "পিচ্ছিল রাস্তায় সাবধান থেকো।",
          slotValues: { THING: "the slippery road" },
          topicArea: "travel",
        },
        {
          en: "Be careful with the chemicals in the lab.",
          bn: "ল্যাবের রাসায়নিক পদার্থ নিয়ে সাবধান থেকো।",
          slotValues: { THING: "the chemicals in the lab" },
          topicArea: "education",
        },
        {
          en: "Be careful with the confidential files.",
          bn: "গোপনীয় ফাইলগুলো নিয়ে সাবধান থেকো।",
          slotValues: { THING: "the confidential files" },
          topicArea: "work",
        },
        {
          en: "Be careful with the heavy weights.",
          bn: "ভারী ওজন নিয়ে সাবধান থেকো।",
          slotValues: { THING: "the heavy weights" },
          topicArea: "health",
        },
        {
          en: "Be careful with your credit card.",
          bn: "তোমার ক্রেডিট কার্ড নিয়ে সাবধান থেকো।",
          slotValues: { THING: "your credit card" },
          topicArea: "shopping",
        },
        {
          en: "Be careful with the glass. It's fragile.",
          bn: "গ্লাসটা নিয়ে সাবধান থেকো। এটা ভঙ্গুর।",
          slotValues: { THING: "the glass" },
          topicArea: "daily_life",
        },
        {
          en: "Be careful with the spicy sauce.",
          bn: "ঝাল সস নিয়ে সাবধান থেকো।",
          slotValues: { THING: "the spicy sauce" },
          topicArea: "food",
        },
        {
          en: "Be careful with your passport.",
          bn: "তোমার পাসপোর্ট নিয়ে সাবধান থেকো।",
          slotValues: { THING: "your passport" },
          topicArea: "travel",
        },
        {
          en: "Be careful with the exam paper.",
          bn: "পরীক্ষার কাগজ নিয়ে সাবধান থেকো।",
          slotValues: { THING: "the exam paper" },
          topicArea: "education",
        },
        {
          en: "Be careful with the office printer.",
          bn: "অফিসের প্রিন্টার নিয়ে সাবধান থেকো।",
          slotValues: { THING: "the office printer" },
          topicArea: "work",
        },
        {
          en: "Be careful with your back when lifting.",
          bn: "ওঠানোর সময় তোমার পিঠ নিয়ে সাবধান থেকো।",
          slotValues: { THING: "your back when lifting" },
          topicArea: "health",
        },
        {
          en: "Be careful with the children near the pool.",
          bn: "পুলের কাছে বাচ্চাদের নিয়ে সাবধান থেকো।",
          slotValues: { THING: "the children near the pool" },
          topicArea: "relationships",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "A direct and friendly warning. Can be used in any situation to alert someone about a potential risk.",
      usageNote_bn:
        "একটি সরাসরি ও বন্ধুত্বপূর্ণ সতর্কতা। সম্ভাব্য ঝুঁকি সম্পর্কে কাউকে সতর্ক করতে যেকোনো পরিস্থিতিতে ব্যবহার করা যায়।",
      combinableWith: ["F6.4"],
      responsePatterns: [],
      banglaStructureMap:
        "[THING] (বিশেষ্য) + নিয়ে (Postposition) + সাবধান থেকো (Be careful)",
    },
    {
      id: "F6.2",
      formula: "Watch out for [THING]",
      formula_bn: "[জিনিস] থেকে সাবধান",
      patternName: "Alert Warning",
      patternName_bn: "সচেতনতামূলক সতর্কতা",
      slots: [
        {
          name: "THING",
          description: "A noun or noun phrase representing a specific hazard",
          description_bn: "একটি নির্দিষ্ট বিপদ বোঝায় এমন একটি বিশেষ্য বা বিশেষ্য পদবন্ধ",
          acceptedTypes: ["noun", "noun_phrase"],
          examples: ["pickpockets", "the ice on the road", "fake products"],
        },
      ],
      examples: [
        {
          en: "Watch out for pickpockets in the market.",
          bn: "বাজারে পকেটমার থেকে সাবধান।",
          slotValues: { THING: "pickpockets in the market" },
          topicArea: "shopping",
        },
        {
          en: "Watch out for the ice on the road.",
          bn: "রাস্তার বরফ থেকে সাবধান।",
          slotValues: { THING: "the ice on the road" },
          topicArea: "travel",
        },
        {
          en: "Watch out for spoiled food.",
          bn: "নষ্ট খাবার থেকে সাবধান।",
          slotValues: { THING: "spoiled food" },
          topicArea: "food",
        },
        {
          en: "Watch out for the car!",
          bn: "গাড়ি থেকে সাবধান!",
          slotValues: { THING: "the car" },
          topicArea: "daily_life",
        },
        {
          en: "Watch out for scam websites.",
          bn: "প্রতারণামূলক ওয়েবসাইট থেকে সাবধান।",
          slotValues: { THING: "scam websites" },
          topicArea: "education",
        },
        {
          en: "Watch out for hidden fees in the contract.",
          bn: "চুক্তিতে লুকানো ফি থেকে সাবধান।",
          slotValues: { THING: "hidden fees in the contract" },
          topicArea: "work",
        },
        {
          en: "Watch out for dehydration in this heat.",
          bn: "এই গরমে পানিশূন্যতা থেকে সাবধান।",
          slotValues: { THING: "dehydration in this heat" },
          topicArea: "health",
        },
        {
          en: "Watch out for toxic people.",
          bn: "বিষাক্ত মানুষদের থেকে সাবধান।",
          slotValues: { THING: "toxic people" },
          topicArea: "relationships",
        },
        {
          en: "Watch out for the wet floor.",
          bn: "ভেজা মেঝে থেকে সাবধান।",
          slotValues: { THING: "the wet floor" },
          topicArea: "daily_life",
        },
        {
          en: "Watch out for allergic ingredients.",
          bn: "অ্যালার্জিযুক্ত উপাদান থেকে সাবধান।",
          slotValues: { THING: "allergic ingredients" },
          topicArea: "food",
        },
        {
          en: "Watch out for wild animals on the trail.",
          bn: "ট্রেইলে বন্যপ্রাণী থেকে সাবধান।",
          slotValues: { THING: "wild animals on the trail" },
          topicArea: "travel",
        },
        {
          en: "Watch out for plagiarism in your thesis.",
          bn: "তোমার থিসিসে চুরি থেকে সাবধান।",
          slotValues: { THING: "plagiarism in your thesis" },
          topicArea: "education",
        },
        {
          en: "Watch out for phishing emails.",
          bn: "ফিশিং ইমেইল থেকে সাবধান।",
          slotValues: { THING: "phishing emails" },
          topicArea: "work",
        },
        {
          en: "Watch out for muscle strain if you overdo it.",
          bn: "বেশি করলে পেশির টান থেকে সাবধান।",
          slotValues: { THING: "muscle strain if you overdo it" },
          topicArea: "health",
        },
        {
          en: "Watch out for fake products online.",
          bn: "অনলাইনে নকল পণ্য থেকে সাবধান।",
          slotValues: { THING: "fake products online" },
          topicArea: "shopping",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "A more urgent warning than 'be careful'. It alerts someone to a specific danger they might not see.",
      usageNote_bn:
        "'Be careful'-এর চেয়ে বেশি জরুরি সতর্কতা। এটি কাউকে একটি নির্দিষ্ট বিপদ সম্পর্কে সচেতন করে যা তারা দেখতে পায়নি।",
      combinableWith: ["F6.1"],
      responsePatterns: [],
      banglaStructureMap:
        "[THING] (বিশেষ্য) + থেকে (Postposition) + সাবধান (Watch out)",
    },
    {
      id: "F6.3",
      formula: "If you [ACTION], [CONSEQUENCE]",
      formula_bn: "যদি তুমি [কাজ] করো, [পরিণতি]",
      patternName: "Conditional Warning",
      patternName_bn: "শর্তমূলক সতর্কতা",
      slots: [
        {
          name: "ACTION",
          description: "A verb or verb phrase describing the risky action",
          description_bn: "ঝুঁকিপূর্ণ কাজ বর্ণনা করে এমন একটি ক্রিয়া বা ক্রিয়া পদবন্ধ",
          acceptedTypes: ["verb", "verb_phrase"],
          examples: ["don't study", "eat too much", "drive too fast"],
        },
        {
          name: "CONSEQUENCE",
          description: "A clause describing the negative result",
          description_bn: "নেতিবাচক ফলাফল বর্ণনা করে এমন একটি উপবাক্য",
          acceptedTypes: ["clause"],
          examples: [
            "you'll fail the exam",
            "you'll feel sick",
            "you might have an accident",
          ],
        },
      ],
      examples: [
        {
          en: "If you don't study, you'll fail the exam.",
          bn: "যদি তুমি না পড়ো, পরীক্ষায় ফেল করবে।",
          slotValues: {
            ACTION: "don't study",
            CONSEQUENCE: "you'll fail the exam",
          },
          topicArea: "education",
        },
        {
          en: "If you eat too much, you'll feel sick.",
          bn: "যদি বেশি খাও, অসুস্থ লাগবে।",
          slotValues: {
            ACTION: "eat too much",
            CONSEQUENCE: "you'll feel sick",
          },
          topicArea: "food",
        },
        {
          en: "If you drive too fast, you might have an accident.",
          bn: "যদি খুব জোরে গাড়ি চালাও, দুর্ঘটনা হতে পারে।",
          slotValues: {
            ACTION: "drive too fast",
            CONSEQUENCE: "you might have an accident",
          },
          topicArea: "travel",
        },
        {
          en: "If you skip meals, you'll lose energy.",
          bn: "যদি খাবার বাদ দাও, শক্তি কমে যাবে।",
          slotValues: {
            ACTION: "skip meals",
            CONSEQUENCE: "you'll lose energy",
          },
          topicArea: "health",
        },
        {
          en: "If you miss the deadline, you'll lose the client.",
          bn: "যদি ডেডলাইন মিস করো, ক্লায়েন্ট হারাবে।",
          slotValues: {
            ACTION: "miss the deadline",
            CONSEQUENCE: "you'll lose the client",
          },
          topicArea: "work",
        },
        {
          en: "If you don't apologize, you'll lose your friend.",
          bn: "যদি ক্ষমা না চাও, বন্ধু হারাবে।",
          slotValues: {
            ACTION: "don't apologize",
            CONSEQUENCE: "you'll lose your friend",
          },
          topicArea: "relationships",
        },
        {
          en: "If you buy without checking, you might get cheated.",
          bn: "যদি না দেখে কেনো, ঠকে যেতে পারো।",
          slotValues: {
            ACTION: "buy without checking",
            CONSEQUENCE: "you might get cheated",
          },
          topicArea: "shopping",
        },
        {
          en: "If you stay up late, you'll be tired tomorrow.",
          bn: "যদি দেরি করে জাগো, কাল ক্লান্ত থাকবে।",
          slotValues: {
            ACTION: "stay up late",
            CONSEQUENCE: "you'll be tired tomorrow",
          },
          topicArea: "daily_life",
        },
        {
          en: "If you don't drink enough water, you'll get dehydrated.",
          bn: "যদি পর্যাপ্ত পানি না খাও, পানিশূন্যতা হবে।",
          slotValues: {
            ACTION: "don't drink enough water",
            CONSEQUENCE: "you'll get dehydrated",
          },
          topicArea: "health",
        },
        {
          en: "If you add too much salt, the dish will be ruined.",
          bn: "যদি বেশি লবণ দাও, রান্না নষ্ট হয়ে যাবে।",
          slotValues: {
            ACTION: "add too much salt",
            CONSEQUENCE: "the dish will be ruined",
          },
          topicArea: "food",
        },
        {
          en: "If you don't check the weather, you might get caught in the rain.",
          bn: "যদি আবহাওয়া না দেখো, বৃষ্টিতে আটকে পড়তে পারো।",
          slotValues: {
            ACTION: "don't check the weather",
            CONSEQUENCE: "you might get caught in the rain",
          },
          topicArea: "travel",
        },
        {
          en: "If you don't submit your assignment, you'll get zero marks.",
          bn: "যদি অ্যাসাইনমেন্ট জমা না দাও, শূন্য নম্বর পাবে।",
          slotValues: {
            ACTION: "don't submit your assignment",
            CONSEQUENCE: "you'll get zero marks",
          },
          topicArea: "education",
        },
        {
          en: "If you keep coming late, you'll get fired.",
          bn: "যদি দেরি করে আসতে থাকো, চাকরি চলে যাবে।",
          slotValues: {
            ACTION: "keep coming late",
            CONSEQUENCE: "you'll get fired",
          },
          topicArea: "work",
        },
        {
          en: "If you spend without budgeting, you'll run out of money.",
          bn: "যদি বাজেট ছাড়া খরচ করো, টাকা ফুরিয়ে যাবে।",
          slotValues: {
            ACTION: "spend without budgeting",
            CONSEQUENCE: "you'll run out of money",
          },
          topicArea: "shopping",
        },
        {
          en: "If you ignore their feelings, the relationship will suffer.",
          bn: "যদি তাদের অনুভূতি উপেক্ষা করো, সম্পর্ক ক্ষতিগ্রস্ত হবে।",
          slotValues: {
            ACTION: "ignore their feelings",
            CONSEQUENCE: "the relationship will suffer",
          },
          topicArea: "relationships",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "A conditional warning that shows cause and effect. Useful for explaining potential consequences of actions.",
      usageNote_bn:
        "একটি শর্তমূলক সতর্কতা যা কারণ ও ফলাফল দেখায়। কাজের সম্ভাব্য পরিণতি ব্যাখ্যা করতে কার্যকর।",
      combinableWith: ["F6.1"],
      responsePatterns: [],
      banglaStructureMap:
        "যদি তুমি (If you) + [ACTION] (ক্রিয়া) + করো, (Condition) + [CONSEQUENCE] (পরিণতি)",
    },
    {
      id: "F6.4",
      formula: "Make sure you [ACTION]",
      formula_bn: "নিশ্চিত করো তুমি [কাজ] করো",
      patternName: "Precautionary Advice",
      patternName_bn: "সতর্কতামূলক পরামর্শ",
      slots: [
        {
          name: "ACTION",
          description: "Base form of a verb or verb phrase representing the precaution",
          description_bn: "সতর্কতামূলক কাজ বোঝায় এমন ক্রিয়ার মূল রূপ বা ক্রিয়া পদবন্ধ",
          acceptedTypes: ["verb", "verb_phrase"],
          examples: ["lock the door", "wear sunscreen", "save your work"],
        },
      ],
      examples: [
        {
          en: "Make sure you lock the door before leaving.",
          bn: "নিশ্চিত করো বের হওয়ার আগে দরজা তালা দিয়েছো।",
          slotValues: { ACTION: "lock the door before leaving" },
          topicArea: "daily_life",
        },
        {
          en: "Make sure you wash the vegetables.",
          bn: "নিশ্চিত করো সবজি ধুয়েছো।",
          slotValues: { ACTION: "wash the vegetables" },
          topicArea: "food",
        },
        {
          en: "Make sure you carry your ID.",
          bn: "নিশ্চিত করো পরিচয়পত্র সাথে আছে।",
          slotValues: { ACTION: "carry your ID" },
          topicArea: "travel",
        },
        {
          en: "Make sure you read the instructions carefully.",
          bn: "নিশ্চিত করো নির্দেশনাগুলো মনোযোগ দিয়ে পড়েছো।",
          slotValues: { ACTION: "read the instructions carefully" },
          topicArea: "education",
        },
        {
          en: "Make sure you save your work regularly.",
          bn: "নিশ্চিত করো নিয়মিত কাজ সেভ করছো।",
          slotValues: { ACTION: "save your work regularly" },
          topicArea: "work",
        },
        {
          en: "Make sure you wear sunscreen.",
          bn: "নিশ্চিত করো সানস্ক্রিন লাগিয়েছো।",
          slotValues: { ACTION: "wear sunscreen" },
          topicArea: "health",
        },
        {
          en: "Make sure you check the return policy.",
          bn: "নিশ্চিত করো রিটার্ন পলিসি দেখেছো।",
          slotValues: { ACTION: "check the return policy" },
          topicArea: "shopping",
        },
        {
          en: "Make sure you call your mother.",
          bn: "নিশ্চিত করো মাকে ফোন করেছো।",
          slotValues: { ACTION: "call your mother" },
          topicArea: "relationships",
        },
        {
          en: "Make sure you turn off the stove.",
          bn: "নিশ্চিত করো চুলা বন্ধ করেছো।",
          slotValues: { ACTION: "turn off the stove" },
          topicArea: "daily_life",
        },
        {
          en: "Make sure you check the expiry date.",
          bn: "নিশ্চিত করো মেয়াদ উত্তীর্ণের তারিখ দেখেছো।",
          slotValues: { ACTION: "check the expiry date" },
          topicArea: "food",
        },
        {
          en: "Make sure you arrive at the airport early.",
          bn: "নিশ্চিত করো বিমানবন্দরে তাড়াতাড়ি পৌঁছেছো।",
          slotValues: { ACTION: "arrive at the airport early" },
          topicArea: "travel",
        },
        {
          en: "Make sure you cite your sources.",
          bn: "নিশ্চিত করো তথ্যসূত্র উল্লেখ করেছো।",
          slotValues: { ACTION: "cite your sources" },
          topicArea: "education",
        },
        {
          en: "Make sure you back up the data.",
          bn: "নিশ্চিত করো ডেটার ব্যাকআপ রেখেছো।",
          slotValues: { ACTION: "back up the data" },
          topicArea: "work",
        },
        {
          en: "Make sure you stretch before exercising.",
          bn: "নিশ্চিত করো ব্যায়ামের আগে স্ট্রেচ করেছো।",
          slotValues: { ACTION: "stretch before exercising" },
          topicArea: "health",
        },
        {
          en: "Make sure you keep the receipt.",
          bn: "নিশ্চিত করো রশিদটা রেখেছো।",
          slotValues: { ACTION: "keep the receipt" },
          topicArea: "shopping",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "A practical warning that instructs someone to take a precaution. Very common in everyday speech.",
      usageNote_bn:
        "একটি ব্যবহারিক সতর্কতা যা কাউকে সতর্কতামূলক পদক্ষেপ নিতে নির্দেশ দেয়। দৈনন্দিন কথোপকথনে খুব সাধারণ।",
      combinableWith: ["F6.1"],
      responsePatterns: [],
      banglaStructureMap:
        "নিশ্চিত করো (Make sure) + তুমি (you) + [ACTION] (ক্রিয়া) + করো (Verb)",
    },
    {
      id: "F6.5",
      formula: "Whatever you do, don't [ACTION]",
      formula_bn: "যাই করো, [কাজ] করো না",
      patternName: "Strong Warning",
      patternName_bn: "শক্তিশালী সতর্কতা",
      slots: [
        {
          name: "ACTION",
          description: "Base form of a verb or verb phrase representing the forbidden action",
          description_bn: "নিষিদ্ধ কাজ বোঝায় এমন ক্রিয়ার মূল রূপ বা ক্রিয়া পদবন্ধ",
          acceptedTypes: ["verb", "verb_phrase"],
          examples: ["touch that wire", "tell anyone", "open the door"],
        },
      ],
      examples: [
        {
          en: "Whatever you do, don't touch that wire.",
          bn: "যাই করো, সেই তার ধরো না।",
          slotValues: { ACTION: "touch that wire" },
          topicArea: "daily_life",
        },
        {
          en: "Whatever you do, don't eat the street food there.",
          bn: "যাই করো, সেখানে রাস্তার খাবার খেও না।",
          slotValues: { ACTION: "eat the street food there" },
          topicArea: "food",
        },
        {
          en: "Whatever you do, don't lose your passport.",
          bn: "যাই করো, পাসপোর্ট হারিও না।",
          slotValues: { ACTION: "lose your passport" },
          topicArea: "travel",
        },
        {
          en: "Whatever you do, don't cheat on the exam.",
          bn: "যাই করো, পরীক্ষায় নকল করো না।",
          slotValues: { ACTION: "cheat on the exam" },
          topicArea: "education",
        },
        {
          en: "Whatever you do, don't sign the contract without reading it.",
          bn: "যাই করো, না পড়ে চুক্তি সই করো না।",
          slotValues: { ACTION: "sign the contract without reading it" },
          topicArea: "work",
        },
        {
          en: "Whatever you do, don't skip your medication.",
          bn: "যাই করো, ওষুধ খেতে ভুলো না।",
          slotValues: { ACTION: "skip your medication" },
          topicArea: "health",
        },
        {
          en: "Whatever you do, don't give out your PIN number.",
          bn: "যাই করো, তোমার পিন নম্বর কাউকে দিও না।",
          slotValues: { ACTION: "give out your PIN number" },
          topicArea: "shopping",
        },
        {
          en: "Whatever you do, don't lie to your partner.",
          bn: "যাই করো, তোমার সঙ্গীর কাছে মিথ্যা বোলো না।",
          slotValues: { ACTION: "lie to your partner" },
          topicArea: "relationships",
        },
        {
          en: "Whatever you do, don't leave the stove on.",
          bn: "যাই করো, চুলা চালু রেখে যেও না।",
          slotValues: { ACTION: "leave the stove on" },
          topicArea: "daily_life",
        },
        {
          en: "Whatever you do, don't drink the tap water there.",
          bn: "যাই করো, সেখানে কলের পানি খেও না।",
          slotValues: { ACTION: "drink the tap water there" },
          topicArea: "travel",
        },
        {
          en: "Whatever you do, don't microwave metal.",
          bn: "যাই করো, মাইক্রোওয়েভে ধাতু দিও না।",
          slotValues: { ACTION: "microwave metal" },
          topicArea: "food",
        },
        {
          en: "Whatever you do, don't plagiarize your essay.",
          bn: "যাই করো, রচনায় চুরি করো না।",
          slotValues: { ACTION: "plagiarize your essay" },
          topicArea: "education",
        },
        {
          en: "Whatever you do, don't delete the backup files.",
          bn: "যাই করো, ব্যাকআপ ফাইল মুছো না।",
          slotValues: { ACTION: "delete the backup files" },
          topicArea: "work",
        },
        {
          en: "Whatever you do, don't exercise on an empty stomach.",
          bn: "যাই করো, খালি পেটে ব্যায়াম করো না।",
          slotValues: { ACTION: "exercise on an empty stomach" },
          topicArea: "health",
        },
        {
          en: "Whatever you do, don't forget to say thank you.",
          bn: "যাই করো, ধন্যবাদ বলতে ভুলো না।",
          slotValues: { ACTION: "forget to say thank you" },
          topicArea: "relationships",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "An emphatic warning for something critical. 'Whatever you do' adds urgency and emphasis.",
      usageNote_bn:
        "গুরুত্বপূর্ণ কিছুর জন্য জোরালো সতর্কতা। 'Whatever you do' জরুরি অনুভূতি ও জোর যোগ করে।",
      combinableWith: ["F6.3"],
      responsePatterns: [],
      banglaStructureMap:
        "যাই করো (Whatever you do) + [ACTION] (ক্রিয়া) + করো না (Don't)",
    },
  ],
};
