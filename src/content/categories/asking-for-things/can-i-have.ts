import type { Pattern } from "@/types/pattern";

export const patternA2_1: Pattern = {
  id: "A2.1",
  formula: "Can I have [THING]?",
  formula_bn: "আমি কি [জিনিস] পেতে পারি?",
  patternName: "Casual Request",
  patternName_bn: "সাধারণ অনুরোধ",
  formulaPronunciation_bn: "ক্যান আই হ্যাভ [জিনিস]?",
  concept_bn: "পেতে পারি",
  slots: [
    {
      name: "THING",
      description: "A noun or noun phrase you are requesting",
      description_bn: "যে জিনিস তুমি চাইছো",
      acceptedTypes: ["noun"],
      examples: ["a glass of water", "the bill", "some sugar"],
    },
  ],
  examples: [
    {
      en: "Can I have a glass of water?",
      bn: "আমি কি এক গ্লাস পানি পেতে পারি?",
      pronunciation_bn: "ক্যান আই হ্যাভ এ গ্লাস অফ ওয়াটার?",
      slotValues: { THING: "a glass of water" },
      topicArea: "daily_life",
      stage: 1,
      miniStory: {
        situation_bn: "তুমি রিকশায় বসে আছো, খুব গরম পড়ছে। রাস্তার পাশে একটা দোকান দেখে নেমে গেলে। দোকানদারকে বলছো।",
        icon: "💧",
      },
    },
    {
      en: "Can I have the bill, please?",
      bn: "আমি কি বিলটা পেতে পারি, প্লিজ?",
      pronunciation_bn: "ক্যান আই হ্যাভ দা বিল, প্লিজ?",
      slotValues: { THING: "the bill" },
      topicArea: "food",
      stage: 1,
      miniStory: {
        situation_bn: "তুমি রেস্টুরেন্টে খাওয়া শেষ করেছো। এখন টাকা দিয়ে বের হতে চাও। ওয়েটারকে ডেকে বলছো।",
        icon: "🧾",
      },
    },
    {
      en: "Can I have some sugar?",
      bn: "আমি কি একটু চিনি পেতে পারি?",
      pronunciation_bn: "ক্যান আই হ্যাভ সাম সুগার?",
      slotValues: { THING: "some sugar" },
      topicArea: "food",
      stage: 1,
      miniStory: {
        situation_bn: "তুমি চায়ের দোকানে বসে চা খাচ্ছো। চায়ে চিনি কম দিয়েছে। দোকানদারকে বলছো।",
        icon: "☕",
      },
    },
    {
      en: "Can I have a receipt?",
      bn: "আমি কি একটা রসিদ পেতে পারি?",
      pronunciation_bn: "ক্যান আই হ্যাভ এ রিসিট?",
      slotValues: { THING: "a receipt" },
      topicArea: "shopping",
      stage: 1,
    },
    {
      en: "Can I have a day off tomorrow?",
      bn: "আমি কি আগামীকাল একটা ছুটি পেতে পারি?",
      pronunciation_bn: "ক্যান আই হ্যাভ এ ডে অফ টুমরো?",
      slotValues: { THING: "a day off tomorrow" },
      topicArea: "work",
      stage: 1,
      miniStory: {
        situation_bn: "তোমার মায়ের শরীর খারাপ। তুমি তাকে হাসপাতালে নিয়ে যেতে চাও। বসকে বলছো ছুটি দিতে।",
        icon: "📅",
      },
    },
    {
      en: "Can I have your phone number?",
      bn: "আমি কি তোমার ফোন নম্বর পেতে পারি?",
      pronunciation_bn: "ক্যান আই হ্যাভ ইয়োর ফোন নাম্বার?",
      slotValues: { THING: "your phone number" },
      topicArea: "relationships",
      stage: 2,
    },
    {
      en: "Can I have a window seat?",
      bn: "আমি কি জানালার পাশের সিট পেতে পারি?",
      pronunciation_bn: "ক্যান আই হ্যাভ এ উইন্ডো সিট?",
      slotValues: { THING: "a window seat" },
      topicArea: "travel",
      stage: 2,
      miniStory: {
        situation_bn: "তুমি বাস কাউন্টারে টিকিট কিনছো ঢাকা থেকে চট্টগ্রাম যাবে। জানালার পাশে বসতে চাও।",
        icon: "🚌",
      },
    },
    {
      en: "Can I have some more time?",
      bn: "আমি কি আরেকটু সময় পেতে পারি?",
      pronunciation_bn: "ক্যান আই হ্যাভ সাম মোর টাইম?",
      slotValues: { THING: "some more time" },
      topicArea: "education",
      stage: 2,
    },
    {
      en: "Can I have a tissue?",
      bn: "আমি কি একটা টিস্যু পেতে পারি?",
      pronunciation_bn: "ক্যান আই হ্যাভ এ টিস্যু?",
      slotValues: { THING: "a tissue" },
      topicArea: "health",
      stage: 2,
    },
    {
      en: "Can I have a menu?",
      bn: "আমি কি একটা মেনু পেতে পারি?",
      pronunciation_bn: "ক্যান আই হ্যাভ এ মেনু?",
      slotValues: { THING: "a menu" },
      topicArea: "food",
      stage: 2,
      miniStory: {
        situation_bn: "তুমি বন্ধুদের সাথে রেস্টুরেন্টে গেছো। বসেছো, কিন্তু মেনু পাওনি। ওয়েটারকে ডেকে বলছো।",
        icon: "📋",
      },
    },
    {
      en: "Can I have a map of the city?",
      bn: "আমি কি শহরের একটা মানচিত্র পেতে পারি?",
      pronunciation_bn: "ক্যান আই হ্যাভ এ ম্যাপ অফ দা সিটি?",
      slotValues: { THING: "a map of the city" },
      topicArea: "travel",
      stage: 3,
    },
    {
      en: "Can I have an extension on the deadline?",
      bn: "আমি কি সময়সীমায় একটু বাড়তি সময় পেতে পারি?",
      pronunciation_bn: "ক্যান আই হ্যাভ অ্যান এক্সটেনশন অন দা ডেডলাইন?",
      slotValues: { THING: "an extension on the deadline" },
      topicArea: "work",
      stage: 3,
    },
    {
      en: "Can I have a bag for this?",
      bn: "আমি কি এটার জন্য একটা ব্যাগ পেতে পারি?",
      pronunciation_bn: "ক্যান আই হ্যাভ এ ব্যাগ ফর দিস?",
      slotValues: { THING: "a bag for this" },
      topicArea: "shopping",
      stage: 3,
    },
    {
      en: "Can I have a blanket?",
      bn: "আমি কি একটা কম্বল পেতে পারি?",
      pronunciation_bn: "ক্যান আই হ্যাভ এ ব্ল্যাংকেট?",
      slotValues: { THING: "a blanket" },
      topicArea: "travel",
      stage: 3,
    },
    {
      en: "Can I have an appointment for next week?",
      bn: "আমি কি আগামী সপ্তাহের জন্য একটা অ্যাপয়েন্টমেন্ট পেতে পারি?",
      pronunciation_bn: "ক্যান আই হ্যাভ অ্যান অ্যাপয়েন্টমেন্ট ফর নেক্সট উইক?",
      slotValues: { THING: "an appointment for next week" },
      topicArea: "health",
      stage: 3,
    },
  ],
  formality: "casual",
  difficulty: "beginner",
  usageNote: "A simple, common way to ask for things. Slightly informal but widely accepted.",
  usageNote_bn: "কিছু চাওয়ার সবচেয়ে সহজ উপায়। 'ক্যান আই হ্যাভ' বলে যেকোনো জিনিস চাইতে পারো — দোকানে, রেস্টুরেন্টে, অফিসে, সবখানে চলে।",
  combinableWith: ["A1.1"],
  responsePatterns: ["B2.1"],
  banglaStructureMap: "বাংলা: আমি কি [জিনিস] পেতে পারি? → English: Can I have [THING]?",

  // ===== TEACHING FIELDS =====

  bridgeRuleIds: ["BR1", "BR3", "BR4"],

  conversionSteps: {
    banglaThought: "তুমি বাংলায় বলো: 'আমি কি একগ্লাস পানি পেতে পারি?'",
    steps: [
      {
        step_bn: "'পারি কি' = 'Can' — বাংলায় 'পারি' শেষে, ইংরেজিতে 'Can' একদম শুরুতে বসে",
        result: "Can",
      },
      {
        step_bn: "'আমি' = 'I' — কে চাইছে সেটা বলো",
        result: "Can I",
      },
      {
        step_bn: "'পেতে' = 'have' — চাওয়ার শব্দ যোগ করো",
        result: "Can I have",
      },
      {
        step_bn: "'একগ্লাস পানি' = 'a glass of water' — জিনিসের নাম শেষে বলো",
        result: "Can I have a glass of water?",
      },
    ],
    finalResult: "Can I have a glass of water?",
    finalResult_bn: "আমি কি একগ্লাস পানি পেতে পারি?",
  },

  commonMistakes: [
    {
      wrong: "I can have water?",
      correct: "Can I have water?",
      explanation_bn: "চাইতে হলে 'Can' আগে আনো — 'Can I have'। 'I can have' বললে মানে হয় 'আমি পেতে পারি' (বলছো, চাইছো না)।",
    },
    {
      wrong: "Can I have water.",
      correct: "Can I have water?",
      explanation_bn: "এটা একটা চাওয়া, তাই শেষে প্রশ্নচিহ্ন (?) দিতে হবে।",
    },
    {
      wrong: "Can I has some sugar?",
      correct: "Can I have some sugar?",
      explanation_bn: "'Can'-এর পরে সবসময় 'have' বসে, 'has' না। 'I'-এর সাথে সবসময় 'have'।",
    },
    {
      wrong: "Can I having a tissue?",
      correct: "Can I have a tissue?",
      explanation_bn: "'Can'-এর পরে '-ing' যোগ করো না। সরাসরি 'have' বলো।",
    },
  ],

  simpleRules: [
    {
      rule_bn: "'Can I have' দিয়ে শুরু করো, তারপর জিনিসের নাম বলো",
      example: "Can I have a glass of water?",
    },
    {
      rule_bn: "একটা জিনিস চাইতে 'a' বসাও, নির্দিষ্ট জিনিস চাইতে 'the' বসাও",
      example: "Can I have a receipt? / Can I have the bill?",
    },
    {
      rule_bn: "'কিছু' বোঝাতে 'some' বসাও — 'Can I have some sugar?'",
      example: "Can I have some water? / Can I have some rice?",
    },
    {
      rule_bn: "আরও ভদ্র করতে শেষে 'please' যোগ করো",
      example: "Can I have the bill, please?",
    },
  ],

  usageSituations: [
    {
      situation_bn: "দোকানে কিছু কিনতে চাও",
      situation_en: "When buying something at a shop",
      exampleSentence: "Can I have a bag for this?",
      exampleSentence_bn: "আমি কি এটার জন্য একটা ব্যাগ পেতে পারি?",
    },
    {
      situation_bn: "রেস্টুরেন্টে খাবার অর্ডার করতে চাও",
      situation_en: "When ordering food at a restaurant",
      exampleSentence: "Can I have a menu?",
      exampleSentence_bn: "আমি কি একটা মেনু পেতে পারি?",
    },
    {
      situation_bn: "ফার্মেসিতে ওষুধ চাও",
      situation_en: "When asking for medicine at a pharmacy",
      exampleSentence: "Can I have some paracetamol?",
      exampleSentence_bn: "আমি কি একটু প্যারাসিটামল পেতে পারি?",
    },
    {
      situation_bn: "অফিসে বসের কাছে ছুটি চাও",
      situation_en: "When asking for leave at the office",
      exampleSentence: "Can I have a day off tomorrow?",
      exampleSentence_bn: "আমি কি আগামীকাল একটা ছুটি পেতে পারি?",
    },
  ],

  sentenceBuilding: [
    {
      previousPatternId: "A1.1",
      previousFormula: "I want [THING]",
      previousFormula_bn: "আমি [জিনিস] চাই",
      combined: "I want water. Can I have a glass?",
      combined_bn: "আমি পানি চাই। আমি কি এক গ্লাস পেতে পারি?",
    },
    {
      previousPatternId: "A1.2",
      previousFormula: "I need [THING]",
      previousFormula_bn: "আমার [জিনিস] দরকার",
      combined: "I need medicine. Can I have some paracetamol?",
      combined_bn: "আমার ওষুধ দরকার। আমি কি একটু প্যারাসিটামল পেতে পারি?",
    },
  ],

  memoryTrick_bn: "'ক্যান আই হ্যাভ' মানে 'পেতে পারি কি' — দোকানে ঢুকে এটা বলো আর জিনিসের নাম বলো! মনে রাখো: ক্যান-আই-হ্যাভ = কিনিস!",

  chunks: [
    { en: "Can I have", bn: "আমি কি পেতে পারি", pronunciation_bn: "ক্যান আই হ্যাভ" },
    { en: "Can I have some", bn: "আমি কি কিছু পেতে পারি", pronunciation_bn: "ক্যান আই হ্যাভ সাম" },
    { en: "Can I have a", bn: "আমি কি একটা পেতে পারি", pronunciation_bn: "ক্যান আই হ্যাভ এ" },
    { en: "Can I have the", bn: "আমি কি ওইটা পেতে পারি", pronunciation_bn: "ক্যান আই হ্যাভ দা" },
  ],

  wordMap: {
    bn_sentence: "আমি কি একগ্লাস পানি পেতে পারি?",
    en_sentence: "Can I have a glass of water?",
    mappings: [
      { bn_word: "পারি কি", en_word: "Can", type: "moved", bridgeRuleId: "BR3" },
      { bn_word: "আমি", en_word: "I", type: "direct" },
      { bn_word: "পেতে", en_word: "have", type: "moved", bridgeRuleId: "BR1" },
      { bn_word: "একগ্লাস", en_word: "a glass of", type: "split", bridgeRuleId: "BR4" },
      { bn_word: "পানি", en_word: "water", type: "direct" },
    ],
  },

  answerTemplates: [
    {
      situation_bn: "যখন দোকানদার তোমার চাওয়া শুনে রাজি হয়",
      question: "Can I have a glass of water?",
      question_bn: "আমি কি এক গ্লাস পানি পেতে পারি?",
      answerFormula: "Sure, here you go.",
      answerFormula_bn: "অবশ্যই, এই নাও।",
      pronunciation_bn: "শিওর, হিয়ার ইউ গো।",
      examples: [
        { answer: "Sure, here you go.", answer_bn: "অবশ্যই, এই নাও।", pronunciation_bn: "শিওর, হিয়ার ইউ গো।" },
        { answer: "Of course!", answer_bn: "অবশ্যই!", pronunciation_bn: "অফ কোর্স!" },
        { answer: "Yes, one moment please.", answer_bn: "হ্যাঁ, একটু অপেক্ষা করো।", pronunciation_bn: "ইয়েস, ওয়ান মোমেন্ট প্লিজ।" },
      ],
      notes_bn: "দোকানদার বা ওয়েটার সাধারণত 'Sure' বা 'Of course' বলে রাজি হয়।",
    },
    {
      situation_bn: "যখন ডাক্তার বা ফার্মেসির লোক তোমার চাওয়া শুনে",
      question: "Can I have some paracetamol?",
      question_bn: "আমি কি একটু প্যারাসিটামল পেতে পারি?",
      answerFormula: "Of course. How many do you need?",
      answerFormula_bn: "অবশ্যই। কয়টা লাগবে?",
      pronunciation_bn: "অফ কোর্স। হাও মেনি ডু ইউ নিড?",
      examples: [
        { answer: "Of course. How many do you need?", answer_bn: "অবশ্যই। কয়টা লাগবে?", pronunciation_bn: "অফ কোর্স। হাও মেনি ডু ইউ নিড?" },
        { answer: "Yes, here you are.", answer_bn: "হ্যাঁ, এই নাও।", pronunciation_bn: "ইয়েস, হিয়ার ইউ আর।" },
        { answer: "Sure, that will be fifty taka.", answer_bn: "অবশ্যই, পঞ্চাশ টাকা হবে।", pronunciation_bn: "শিওর, দ্যাট উইল বি ফিফটি টাকা।" },
      ],
      notes_bn: "ফার্মেসিতে বা ক্লিনিকে 'Of course' বলে সাধারণত আরও কিছু জিজ্ঞেস করে।",
    },
    {
      situation_bn: "যখন অফিসে বস তোমার ছুটির কথা শুনে",
      question: "Can I have a day off tomorrow?",
      question_bn: "আমি কি আগামীকাল একটা ছুটি পেতে পারি?",
      answerFormula: "Let me check. / Sure, no problem.",
      answerFormula_bn: "দেখি। / অবশ্যই, কোনো সমস্যা নেই।",
      pronunciation_bn: "লেট মি চেক। / শিওর, নো প্রবলেম।",
      examples: [
        { answer: "Sure, no problem.", answer_bn: "অবশ্যই, কোনো সমস্যা নেই।", pronunciation_bn: "শিওর, নো প্রবলেম।" },
        { answer: "Let me check the schedule.", answer_bn: "শিডিউল দেখে বলি।", pronunciation_bn: "লেট মি চেক দা শিডিউল।" },
        { answer: "Sorry, not tomorrow.", answer_bn: "দুঃখিত, আগামীকাল না।", pronunciation_bn: "সরি, নট টুমরো।" },
      ],
      notes_bn: "বস 'no problem' বললে ছুটি পেলে, 'let me check' মানে দেখবে।",
    },
    {
      situation_bn: "যখন রেস্টুরেন্টে ওয়েটার তোমার অর্ডার শুনে",
      question: "Can I have a menu?",
      question_bn: "আমি কি একটা মেনু পেতে পারি?",
      answerFormula: "Sure, just a moment.",
      answerFormula_bn: "অবশ্যই, একটু দাঁড়ান।",
      pronunciation_bn: "শিওর, জাস্ট এ মোমেন্ট।",
      examples: [
        { answer: "Sure, here's the menu.", answer_bn: "অবশ্যই, এই নিন মেনু।", pronunciation_bn: "শিওর, হিয়ার্স দা মেনু।" },
        { answer: "Right away, sir.", answer_bn: "এখনই আনছি, স্যার।", pronunciation_bn: "রাইট অ্যাওয়ে, স্যার।" },
        { answer: "One second, please.", answer_bn: "এক সেকেন্ড, প্লিজ।", pronunciation_bn: "ওয়ান সেকেন্ড, প্লিজ।" },
      ],
      notes_bn: "ওয়েটার সাধারণত 'Sure' বা 'Right away' বলে মেনু এনে দেয়।",
    },
  ],

  dialogueChains: [
    {
      id: "dc-a2.1-1",
      title_bn: "বাজারে দোকানে",
      title_en: "At a shop in the bazaar",
      situation_bn: "তুমি বাজারে গেছো কিছু জিনিস কিনতে। দোকানদারের কাছে বলছো কী চাও।",
      icon: "🛒",
      turns: [
        { speaker_bn: "তুমি", en: "Can I have a kilo of rice?", bn: "আমি কি এক কেজি চাল পেতে পারি?", pronunciation_bn: "ক্যান আই হ্যাভ এ কিলো অফ রাইস?", patternId: "A2.1" },
        { speaker_bn: "দোকানদার", en: "Sure, here you go. Anything else?", bn: "অবশ্যই, এই নাও। আর কিছু?", pronunciation_bn: "শিওর, হিয়ার ইউ গো। এনিথিং এলস?" },
        { speaker_bn: "তুমি", en: "Can I have some sugar too?", bn: "আমি কি একটু চিনিও পেতে পারি?", pronunciation_bn: "ক্যান আই হ্যাভ সাম সুগার টু?", patternId: "A2.1" },
        { speaker_bn: "দোকানদার", en: "Of course. How much?", bn: "অবশ্যই। কতটুকু?", pronunciation_bn: "অফ কোর্স। হাও মাচ?" },
        { speaker_bn: "তুমি", en: "Half a kilo, please. Can I have a bag for this?", bn: "আধা কেজি, প্লিজ। আমি কি এটার জন্য একটা ব্যাগ পেতে পারি?", pronunciation_bn: "হাফ এ কিলো, প্লিজ। ক্যান আই হ্যাভ এ ব্যাগ ফর দিস?", patternId: "A2.1" },
        { speaker_bn: "দোকানদার", en: "Sure. That will be two hundred taka.", bn: "অবশ্যই। দুইশো টাকা হবে।", pronunciation_bn: "শিওর। দ্যাট উইল বি টু হান্ড্রেড টাকা।" },
        { speaker_bn: "তুমি", en: "Can I have a receipt?", bn: "আমি কি একটা রসিদ পেতে পারি?", pronunciation_bn: "ক্যান আই হ্যাভ এ রিসিট?", patternId: "A2.1" },
      ],
      patternsUsed: ["A2.1"],
    },
    {
      id: "dc-cross-a2.1-a1.1",
      title_bn: "চায়ের দোকানে — চাওয়া আর অনুরোধ",
      title_en: "At the tea stall — wanting and requesting",
      situation_bn: "তুমি বন্ধুর সাথে চায়ের দোকানে গেছো। কী চাও বলছো আর দোকানদারকে অনুরোধ করছো।",
      icon: "☕",
      turns: [
        { speaker_bn: "বন্ধু", en: "What do you want?", bn: "তুমি কী চাও?", pronunciation_bn: "হোয়াট ডু ইউ ওয়ান্ট?" },
        { speaker_bn: "তুমি", en: "I want tea.", bn: "আমি চা চাই।", pronunciation_bn: "আই ওয়ান্ট টি।", patternId: "A1.1" },
        { speaker_bn: "তুমি (দোকানদারকে)", en: "Can I have two cups of tea?", bn: "আমি কি দুই কাপ চা পেতে পারি?", pronunciation_bn: "ক্যান আই হ্যাভ টু কাপস অফ টি?", patternId: "A2.1" },
        { speaker_bn: "দোকানদার", en: "Sure. With sugar?", bn: "অবশ্যই। চিনি দেবো?", pronunciation_bn: "শিওর। উইথ সুগার?" },
        { speaker_bn: "তুমি", en: "Can I have some biscuits too?", bn: "আমি কি কিছু বিস্কুটও পেতে পারি?", pronunciation_bn: "ক্যান আই হ্যাভ সাম বিস্কিটস টু?", patternId: "A2.1" },
        { speaker_bn: "দোকানদার", en: "Here you go!", bn: "এই নাও!", pronunciation_bn: "হিয়ার ইউ গো!" },
      ],
      patternsUsed: ["A2.1", "A1.1"],
    },
  ],

  variations: [
    // 1. Past
    {
      variant: "past",
      label: "Past (অতীত)",
      label_bn: "অতীত",
      formula: "Could I have had [THING]?",
      formula_bn: "আমি কি [জিনিস] পেতে পারতাম?",
      examples: [
        {
          en: "Could I have had a glass of water?",
          bn: "আমি কি এক গ্লাস পানি পেতে পারতাম?",
          pronunciation_bn: "কুড আই হ্যাভ হ্যাড এ গ্লাস অফ ওয়াটার?",
          slotValues: { THING: "a glass of water" },
          topicArea: "daily_life",
        },
        {
          en: "Could I have had the bill earlier?",
          bn: "আমি কি আরো আগে বিলটা পেতে পারতাম?",
          pronunciation_bn: "কুড আই হ্যাভ হ্যাড দা বিল আর্লিয়ার?",
          slotValues: { THING: "the bill earlier" },
          topicArea: "food",
        },
        {
          en: "Could I have had a receipt?",
          bn: "আমি কি একটা রসিদ পেতে পারতাম?",
          pronunciation_bn: "কুড আই হ্যাভ হ্যাড এ রিসিট?",
          slotValues: { THING: "a receipt" },
          topicArea: "shopping",
        },
      ],
    },
    // 2. Negative
    {
      variant: "negative",
      label: "Negative (না)",
      label_bn: "না",
      formula: "Can't I have [THING]?",
      formula_bn: "আমি কি [জিনিস] পেতে পারি না?",
      examples: [
        {
          en: "Can't I have a day off?",
          bn: "আমি কি একটা ছুটি পেতে পারি না?",
          pronunciation_bn: "ক্যান্ট আই হ্যাভ এ ডে অফ?",
          slotValues: { THING: "a day off" },
          topicArea: "work",
        },
        {
          en: "Can't I have some more time?",
          bn: "আমি কি আরেকটু সময় পেতে পারি না?",
          pronunciation_bn: "ক্যান্ট আই হ্যাভ সাম মোর টাইম?",
          slotValues: { THING: "some more time" },
          topicArea: "education",
        },
        {
          en: "Can't I have a window seat?",
          bn: "আমি কি জানালার পাশের সিট পেতে পারি না?",
          pronunciation_bn: "ক্যান্ট আই হ্যাভ এ উইন্ডো সিট?",
          slotValues: { THING: "a window seat" },
          topicArea: "travel",
        },
      ],
    },
    // 3. Future
    {
      variant: "future",
      label: "Future (ভবিষ্যৎ)",
      label_bn: "ভবিষ্যৎ",
      formula: "Will I be able to have [THING]?",
      formula_bn: "আমি কি [জিনিস] পেতে পারবো?",
      examples: [
        {
          en: "Will I be able to have a seat by the window?",
          bn: "আমি কি জানালার পাশে সিট পেতে পারবো?",
          pronunciation_bn: "উইল আই বি এবল টু হ্যাভ এ সিট বাই দা উইন্ডো?",
          slotValues: { THING: "a seat by the window" },
          topicArea: "travel",
        },
        {
          en: "Will I be able to have an appointment tomorrow?",
          bn: "আমি কি আগামীকাল অ্যাপয়েন্টমেন্ট পেতে পারবো?",
          pronunciation_bn: "উইল আই বি এবল টু হ্যাভ অ্যান অ্যাপয়েন্টমেন্ট টুমরো?",
          slotValues: { THING: "an appointment tomorrow" },
          topicArea: "health",
        },
        {
          en: "Will I be able to have the report by Friday?",
          bn: "আমি কি শুক্রবারের মধ্যে রিপোর্টটা পেতে পারবো?",
          pronunciation_bn: "উইল আই বি এবল টু হ্যাভ দা রিপোর্ট বাই ফ্রাইডে?",
          slotValues: { THING: "the report by Friday" },
          topicArea: "work",
        },
      ],
    },
    // 4. He/She
    {
      variant: "he_she",
      label: "He/She (সে)",
      label_bn: "সে",
      formula: "Can he/she have [THING]?",
      formula_bn: "সে কি [জিনিস] পেতে পারে?",
      examples: [
        {
          en: "Can she have a glass of juice?",
          bn: "সে কি এক গ্লাস জুস পেতে পারে?",
          pronunciation_bn: "ক্যান শি হ্যাভ এ গ্লাস অফ জুস?",
          slotValues: { THING: "a glass of juice" },
          topicArea: "food",
        },
        {
          en: "Can he have a day off?",
          bn: "সে কি একটা ছুটি পেতে পারে?",
          pronunciation_bn: "ক্যান হি হ্যাভ এ ডে অফ?",
          slotValues: { THING: "a day off" },
          topicArea: "work",
        },
        {
          en: "Can she have an extra blanket?",
          bn: "সে কি একটা বাড়তি কম্বল পেতে পারে?",
          pronunciation_bn: "ক্যান শি হ্যাভ অ্যান এক্সট্রা ব্ল্যাংকেট?",
          slotValues: { THING: "an extra blanket" },
          topicArea: "travel",
        },
      ],
    },
    // 5. It
    {
      variant: "it",
      label: "It (এটা)",
      label_bn: "এটা",
      formula: "Can it have [THING]?",
      formula_bn: "এটাতে কি [জিনিস] থাকতে পারে?",
      examples: [
        {
          en: "Can it have extra cheese?",
          bn: "এটাতে কি বাড়তি চিজ থাকতে পারে?",
          pronunciation_bn: "ক্যান ইট হ্যাভ এক্সট্রা চিজ?",
          slotValues: { THING: "extra cheese" },
          topicArea: "food",
        },
        {
          en: "Can it have a different color?",
          bn: "এটাতে কি অন্য রঙ থাকতে পারে?",
          pronunciation_bn: "ক্যান ইট হ্যাভ এ ডিফারেন্ট কালার?",
          slotValues: { THING: "a different color" },
          topicArea: "shopping",
        },
        {
          en: "Can it have less sugar?",
          bn: "এটাতে কি চিনি কম থাকতে পারে?",
          pronunciation_bn: "ক্যান ইট হ্যাভ লেস সুগার?",
          slotValues: { THING: "less sugar" },
          topicArea: "food",
        },
      ],
    },
    // 6. By Name
    {
      variant: "name",
      label: "By Name (নাম দিয়ে)",
      label_bn: "নাম দিয়ে",
      formula: "Can [NAME] have [THING]?",
      formula_bn: "[নাম] কি [জিনিস] পেতে পারে?",
      examples: [
        {
          en: "Can Rahim have a glass of water?",
          bn: "রহিম কি এক গ্লাস পানি পেতে পারে?",
          pronunciation_bn: "ক্যান রহিম হ্যাভ এ গ্লাস অফ ওয়াটার?",
          slotValues: { THING: "a glass of water" },
          topicArea: "daily_life",
        },
        {
          en: "Can Fatema have a day off tomorrow?",
          bn: "ফাতেমা কি আগামীকাল ছুটি পেতে পারে?",
          pronunciation_bn: "ক্যান ফাতেমা হ্যাভ এ ডে অফ টুমরো?",
          slotValues: { THING: "a day off tomorrow" },
          topicArea: "work",
        },
        {
          en: "Can Karim have the menu?",
          bn: "করিম কি মেনুটা পেতে পারে?",
          pronunciation_bn: "ক্যান করিম হ্যাভ দা মেনু?",
          slotValues: { THING: "the menu" },
          topicArea: "food",
        },
      ],
    },
    // 7. Polite
    {
      variant: "polite",
      label: "Polite (বিনয়ী)",
      label_bn: "বিনয়ী",
      formula: "Could I possibly have [THING]?",
      formula_bn: "আমি কি দয়া করে [জিনিস] পেতে পারি?",
      examples: [
        {
          en: "Could I possibly have a glass of water?",
          bn: "আমি কি দয়া করে এক গ্লাস পানি পেতে পারি?",
          pronunciation_bn: "কুড আই পসিবলি হ্যাভ এ গ্লাস অফ ওয়াটার?",
          slotValues: { THING: "a glass of water" },
          topicArea: "daily_life",
        },
        {
          en: "Could I possibly have a window seat?",
          bn: "আমি কি দয়া করে জানালার পাশের সিট পেতে পারি?",
          pronunciation_bn: "কুড আই পসিবলি হ্যাভ এ উইন্ডো সিট?",
          slotValues: { THING: "a window seat" },
          topicArea: "travel",
        },
        {
          en: "Could I possibly have an appointment this week?",
          bn: "আমি কি দয়া করে এই সপ্তাহে একটা অ্যাপয়েন্টমেন্ট পেতে পারি?",
          pronunciation_bn: "কুড আই পসিবলি হ্যাভ অ্যান অ্যাপয়েন্টমেন্ট দিস উইক?",
          slotValues: { THING: "an appointment this week" },
          topicArea: "health",
        },
      ],
    },
  ],
};
