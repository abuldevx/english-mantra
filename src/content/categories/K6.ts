import { PatternCategory } from "@/types/pattern";

export const categoryK6: PatternCategory = {
  id: "K6",
  slug: "promising-committing",
  name: "Promising & Committing",
  name_bn: "প্রতিশ্রুতি ও অঙ্গীকার",
  description:
    "Learn patterns for making promises, commitments, and assurances.",
  description_bn:
    "প্রতিশ্রুতি, অঙ্গীকার ও আশ্বাস দেওয়ার ধরন শিখুন।",
  icon: "🤝",
  group: "K",
  groupName: "Reported Speech & Communication",
  groupName_bn: "পরোক্ষ উক্তি ও যোগাযোগ",
  difficulty: "intermediate",
  patterns: [
    {
      id: "K6.1",
      formula: "I promise to [ACTION]",
      formula_bn: "আমি [কাজ] করার প্রতিশ্রুতি দিচ্ছি",
      patternName: "Making a Promise",
      patternName_bn: "প্রতিশ্রুতি দেওয়া",
      slots: [
        {
          name: "ACTION",
          description: "The action you commit to doing",
          description_bn: "যে কাজ করার অঙ্গীকার করছেন",
          acceptedTypes: ["verb_phrase"],
          examples: [
            "be on time",
            "help you with that",
            "call you tomorrow",
          ],
        },
      ],
      examples: [
        {
          en: "I promise to be on time.",
          bn: "আমি সময়মতো আসার প্রতিশ্রুতি দিচ্ছি।",
          slotValues: { ACTION: "be on time" },
          topicArea: "daily_life",
        },
        {
          en: "I promise to help you with the project.",
          bn: "আমি প্রজেক্টে তোমাকে সাহায্য করার প্রতিশ্রুতি দিচ্ছি।",
          slotValues: { ACTION: "help you with the project" },
          topicArea: "work",
        },
        {
          en: "I promise to call you tomorrow.",
          bn: "আমি আগামীকাল তোমাকে ফোন করার প্রতিশ্রুতি দিচ্ছি।",
          slotValues: { ACTION: "call you tomorrow" },
          topicArea: "relationships",
        },
        {
          en: "I promise to study harder this semester.",
          bn: "আমি এই সেমিস্টারে আরও পরিশ্রম করে পড়ার প্রতিশ্রুতি দিচ্ছি।",
          slotValues: { ACTION: "study harder this semester" },
          topicArea: "education",
        },
        {
          en: "I promise to eat healthier from now on.",
          bn: "আমি এখন থেকে স্বাস্থ্যকর খাবার খাওয়ার প্রতিশ্রুতি দিচ্ছি।",
          slotValues: { ACTION: "eat healthier from now on" },
          topicArea: "food",
        },
        {
          en: "I promise to take better care of myself.",
          bn: "আমি নিজের আরও ভালো যত্ন নেওয়ার প্রতিশ্রুতি দিচ্ছি।",
          slotValues: { ACTION: "take better care of myself" },
          topicArea: "health",
        },
        {
          en: "I promise to bring you a gift from my trip.",
          bn: "আমি ভ্রমণ থেকে তোমার জন্য উপহার আনার প্রতিশ্রুতি দিচ্ছি।",
          slotValues: { ACTION: "bring you a gift from my trip" },
          topicArea: "travel",
        },
        {
          en: "I promise to pay you back by Friday.",
          bn: "আমি শুক্রবারের মধ্যে তোমার টাকা ফেরত দেওয়ার প্রতিশ্রুতি দিচ্ছি।",
          slotValues: { ACTION: "pay you back by Friday" },
          topicArea: "shopping",
        },
        {
          en: "I promise to finish the assignment on time.",
          bn: "আমি সময়মতো অ্যাসাইনমেন্ট শেষ করার প্রতিশ্রুতি দিচ্ছি।",
          slotValues: { ACTION: "finish the assignment on time" },
          topicArea: "education",
        },
        {
          en: "I promise to keep your secret.",
          bn: "আমি তোমার গোপন কথা রাখার প্রতিশ্রুতি দিচ্ছি।",
          slotValues: { ACTION: "keep your secret" },
          topicArea: "relationships",
        },
        {
          en: "I promise to cook dinner tonight.",
          bn: "আমি আজ রাতে রান্না করার প্রতিশ্রুতি দিচ্ছি।",
          slotValues: { ACTION: "cook dinner tonight" },
          topicArea: "food",
        },
        {
          en: "I promise to exercise every morning.",
          bn: "আমি প্রতিদিন সকালে ব্যায়াম করার প্রতিশ্রুতি দিচ্ছি।",
          slotValues: { ACTION: "exercise every morning" },
          topicArea: "health",
        },
        {
          en: "I promise to submit the report before the deadline.",
          bn: "আমি ডেডলাইনের আগে রিপোর্ট জমা দেওয়ার প্রতিশ্রুতি দিচ্ছি।",
          slotValues: {
            ACTION: "submit the report before the deadline",
          },
          topicArea: "work",
        },
        {
          en: "I promise to visit you when I'm in town.",
          bn: "আমি শহরে গেলে তোমার সাথে দেখা করার প্রতিশ্রুতি দিচ্ছি।",
          slotValues: { ACTION: "visit you when I'm in town" },
          topicArea: "travel",
        },
        {
          en: "I promise to be more careful with money.",
          bn: "আমি টাকা নিয়ে আরও সাবধান থাকার প্রতিশ্রুতি দিচ্ছি।",
          slotValues: { ACTION: "be more careful with money" },
          topicArea: "shopping",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "'I promise to' creates a strong personal commitment. Breaking a promise can damage trust.",
      usageNote_bn:
        "'I promise to' একটি শক্তিশালী ব্যক্তিগত অঙ্গীকার তৈরি করে। প্রতিশ্রুতি ভাঙলে বিশ্বাস নষ্ট হতে পারে।",
    },
    {
      id: "K6.2",
      formula: "I'll make sure [CLAUSE]",
      formula_bn: "আমি নিশ্চিত করব যে [উপবাক্য]",
      patternName: "Assuring an Outcome",
      patternName_bn: "ফলাফলের আশ্বাস দেওয়া",
      slots: [
        {
          name: "CLAUSE",
          description: "The outcome you are assuring",
          description_bn: "যে ফলাফলের আশ্বাস দিচ্ছেন",
          acceptedTypes: ["clause"],
          examples: [
            "it gets done",
            "everything is ready",
            "you get home safely",
          ],
        },
      ],
      examples: [
        {
          en: "I'll make sure it gets done on time.",
          bn: "আমি নিশ্চিত করব যে সময়মতো হয়ে যাবে।",
          slotValues: { CLAUSE: "it gets done on time" },
          topicArea: "work",
        },
        {
          en: "I'll make sure everything is ready for the meeting.",
          bn: "আমি নিশ্চিত করব যে মিটিংয়ের জন্য সব প্রস্তুত থাকবে।",
          slotValues: {
            CLAUSE: "everything is ready for the meeting",
          },
          topicArea: "work",
        },
        {
          en: "I'll make sure you get home safely.",
          bn: "আমি নিশ্চিত করব যে তুমি নিরাপদে বাড়ি পৌঁছাবে।",
          slotValues: { CLAUSE: "you get home safely" },
          topicArea: "daily_life",
        },
        {
          en: "I'll make sure the food is fresh.",
          bn: "আমি নিশ্চিত করব যে খাবার তাজা থাকবে।",
          slotValues: { CLAUSE: "the food is fresh" },
          topicArea: "food",
        },
        {
          en: "I'll make sure the children do their homework.",
          bn: "আমি নিশ্চিত করব যে বাচ্চারা তাদের হোমওয়ার্ক করবে।",
          slotValues: {
            CLAUSE: "the children do their homework",
          },
          topicArea: "education",
        },
        {
          en: "I'll make sure you have a comfortable stay.",
          bn: "আমি নিশ্চিত করব যে তোমার আরামদায়ক থাকা হবে।",
          slotValues: { CLAUSE: "you have a comfortable stay" },
          topicArea: "travel",
        },
        {
          en: "I'll make sure the medicine is taken on time.",
          bn: "আমি নিশ্চিত করব যে সময়মতো ওষুধ খাওয়া হবে।",
          slotValues: {
            CLAUSE: "the medicine is taken on time",
          },
          topicArea: "health",
        },
        {
          en: "I'll make sure everyone gets invited.",
          bn: "আমি নিশ্চিত করব যে সবাইকে দাওয়াত দেওয়া হবে।",
          slotValues: { CLAUSE: "everyone gets invited" },
          topicArea: "relationships",
        },
        {
          en: "I'll make sure the order is correct.",
          bn: "আমি নিশ্চিত করব যে অর্ডার ঠিক আছে।",
          slotValues: { CLAUSE: "the order is correct" },
          topicArea: "shopping",
        },
        {
          en: "I'll make sure the presentation is polished.",
          bn: "আমি নিশ্চিত করব যে প্রেজেন্টেশন পরিমার্জিত হবে।",
          slotValues: {
            CLAUSE: "the presentation is polished",
          },
          topicArea: "work",
        },
        {
          en: "I'll make sure we leave on time.",
          bn: "আমি নিশ্চিত করব যে আমরা সময়মতো রওনা দেব।",
          slotValues: { CLAUSE: "we leave on time" },
          topicArea: "travel",
        },
        {
          en: "I'll make sure the house is clean before they arrive.",
          bn: "আমি নিশ্চিত করব যে তারা আসার আগে ঘর পরিষ্কার হবে।",
          slotValues: {
            CLAUSE: "the house is clean before they arrive",
          },
          topicArea: "relationships",
        },
        {
          en: "I'll make sure the kids eat their vegetables.",
          bn: "আমি নিশ্চিত করব যে বাচ্চারা সবজি খাবে।",
          slotValues: {
            CLAUSE: "the kids eat their vegetables",
          },
          topicArea: "food",
        },
        {
          en: "I'll make sure the notes are shared with everyone.",
          bn: "আমি নিশ্চিত করব যে নোটগুলো সবার সাথে শেয়ার করা হবে।",
          slotValues: {
            CLAUSE: "the notes are shared with everyone",
          },
          topicArea: "education",
        },
        {
          en: "I'll make sure you don't miss your appointment.",
          bn: "আমি নিশ্চিত করব যে তোমার অ্যাপয়েন্টমেন্ট মিস হবে না।",
          slotValues: {
            CLAUSE: "you don't miss your appointment",
          },
          topicArea: "health",
        },
      ],
      formality: "polite",
      difficulty: "intermediate",
      usageNote:
        "'I'll make sure' shows responsibility and commitment. It's slightly softer than 'I promise'.",
      usageNote_bn:
        "'I'll make sure' দায়িত্ব ও অঙ্গীকার প্রকাশ করে। এটি 'I promise' এর চেয়ে একটু নরম।",
    },
    {
      id: "K6.3",
      formula: "You have my word that [CLAUSE]",
      formula_bn: "আমার কথা দিচ্ছি যে [উপবাক্য]",
      patternName: "Giving Your Word",
      patternName_bn: "কথা দেওয়া",
      slots: [
        {
          name: "CLAUSE",
          description: "A solemn commitment or guarantee",
          description_bn: "একটি গুরুগম্ভীর অঙ্গীকার বা গ্যারান্টি",
          acceptedTypes: ["clause"],
          examples: [
            "I will not let you down",
            "this won't happen again",
            "the quality will be excellent",
          ],
        },
      ],
      examples: [
        {
          en: "You have my word that I will not let you down.",
          bn: "আমার কথা দিচ্ছি আমি তোমাকে হতাশ করব না।",
          slotValues: { CLAUSE: "I will not let you down" },
          topicArea: "relationships",
        },
        {
          en: "You have my word that this won't happen again.",
          bn: "আমার কথা দিচ্ছি এটা আর হবে না।",
          slotValues: { CLAUSE: "this won't happen again" },
          topicArea: "daily_life",
        },
        {
          en: "You have my word that the project will be completed on time.",
          bn: "আমার কথা দিচ্ছি প্রজেক্ট সময়মতো শেষ হবে।",
          slotValues: {
            CLAUSE: "the project will be completed on time",
          },
          topicArea: "work",
        },
        {
          en: "You have my word that I will return the book next week.",
          bn: "আমার কথা দিচ্ছি আগামী সপ্তাহে বই ফেরত দেব।",
          slotValues: {
            CLAUSE: "I will return the book next week",
          },
          topicArea: "education",
        },
        {
          en: "You have my word that the food will be delicious.",
          bn: "আমার কথা দিচ্ছি খাবার সুস্বাদু হবে।",
          slotValues: {
            CLAUSE: "the food will be delicious",
          },
          topicArea: "food",
        },
        {
          en: "You have my word that I will take my medicine regularly.",
          bn: "আমার কথা দিচ্ছি আমি নিয়মিত ওষুধ খাব।",
          slotValues: {
            CLAUSE: "I will take my medicine regularly",
          },
          topicArea: "health",
        },
        {
          en: "You have my word that your information will be kept private.",
          bn: "আমার কথা দিচ্ছি আপনার তথ্য গোপন রাখা হবে।",
          slotValues: {
            CLAUSE: "your information will be kept private",
          },
          topicArea: "work",
        },
        {
          en: "You have my word that I will be there on time.",
          bn: "আমার কথা দিচ্ছি আমি সময়মতো সেখানে থাকব।",
          slotValues: {
            CLAUSE: "I will be there on time",
          },
          topicArea: "daily_life",
        },
        {
          en: "You have my word that the trip will be worth it.",
          bn: "আমার কথা দিচ্ছি ভ্রমণটা মূল্যবান হবে।",
          slotValues: {
            CLAUSE: "the trip will be worth it",
          },
          topicArea: "travel",
        },
        {
          en: "You have my word that you will get a full refund.",
          bn: "আমার কথা দিচ্ছি আপনি পুরো টাকা ফেরত পাবেন।",
          slotValues: {
            CLAUSE: "you will get a full refund",
          },
          topicArea: "shopping",
        },
        {
          en: "You have my word that I will support you no matter what.",
          bn: "আমার কথা দিচ্ছি যাই হোক আমি তোমার পাশে থাকব।",
          slotValues: {
            CLAUSE: "I will support you no matter what",
          },
          topicArea: "relationships",
        },
        {
          en: "You have my word that the delivery will arrive by tomorrow.",
          bn: "আমার কথা দিচ্ছি ডেলিভারি আগামীকালের মধ্যে পৌঁছাবে।",
          slotValues: {
            CLAUSE: "the delivery will arrive by tomorrow",
          },
          topicArea: "shopping",
        },
        {
          en: "You have my word that I will finish my studies.",
          bn: "আমার কথা দিচ্ছি আমি পড়াশোনা শেষ করব।",
          slotValues: {
            CLAUSE: "I will finish my studies",
          },
          topicArea: "education",
        },
        {
          en: "You have my word that the arrangements will be perfect.",
          bn: "আমার কথা দিচ্ছি আয়োজন নিখুঁত হবে।",
          slotValues: {
            CLAUSE: "the arrangements will be perfect",
          },
          topicArea: "travel",
        },
        {
          en: "You have my word that I will follow the doctor's advice.",
          bn: "আমার কথা দিচ্ছি আমি ডাক্তারের পরামর্শ মানব।",
          slotValues: {
            CLAUSE: "I will follow the doctor's advice",
          },
          topicArea: "health",
        },
      ],
      formality: "formal",
      difficulty: "intermediate",
      usageNote:
        "'You have my word' is a formal and strong way to promise. It carries personal honor.",
      usageNote_bn:
        "'You have my word' প্রতিশ্রুতি দেওয়ার একটি আনুষ্ঠানিক ও শক্তিশালী উপায়। এতে ব্যক্তিগত সম্মান জড়িত।",
    },
    {
      id: "K6.4",
      formula: "I guarantee that [CLAUSE]",
      formula_bn: "আমি গ্যারান্টি দিচ্ছি যে [উপবাক্য]",
      patternName: "Giving a Guarantee",
      patternName_bn: "গ্যারান্টি দেওয়া",
      slots: [
        {
          name: "CLAUSE",
          description: "The guaranteed outcome",
          description_bn: "গ্যারান্টিযুক্ত ফলাফল",
          acceptedTypes: ["clause"],
          examples: [
            "you'll love it",
            "it won't break",
            "the service will improve",
          ],
        },
      ],
      examples: [
        {
          en: "I guarantee that you'll love this place.",
          bn: "আমি গ্যারান্টি দিচ্ছি তোমার এই জায়গা ভালো লাগবে।",
          slotValues: { CLAUSE: "you'll love this place" },
          topicArea: "travel",
        },
        {
          en: "I guarantee that the product won't break.",
          bn: "আমি গ্যারান্টি দিচ্ছি পণ্যটি ভাঙবে না।",
          slotValues: { CLAUSE: "the product won't break" },
          topicArea: "shopping",
        },
        {
          en: "I guarantee that the service will improve.",
          bn: "আমি গ্যারান্টি দিচ্ছি সেবার মান উন্নত হবে।",
          slotValues: { CLAUSE: "the service will improve" },
          topicArea: "work",
        },
        {
          en: "I guarantee that you'll feel better after resting.",
          bn: "আমি গ্যারান্টি দিচ্ছি বিশ্রামের পর তোমার ভালো লাগবে।",
          slotValues: {
            CLAUSE: "you'll feel better after resting",
          },
          topicArea: "health",
        },
        {
          en: "I guarantee that the food will be to your liking.",
          bn: "আমি গ্যারান্টি দিচ্ছি খাবার তোমার পছন্দ হবে।",
          slotValues: {
            CLAUSE: "the food will be to your liking",
          },
          topicArea: "food",
        },
        {
          en: "I guarantee that this method works.",
          bn: "আমি গ্যারান্টি দিচ্ছি এই পদ্ধতি কাজ করে।",
          slotValues: { CLAUSE: "this method works" },
          topicArea: "education",
        },
        {
          en: "I guarantee that you won't regret it.",
          bn: "আমি গ্যারান্টি দিচ্ছি তুমি অনুতাপ করবে না।",
          slotValues: { CLAUSE: "you won't regret it" },
          topicArea: "daily_life",
        },
        {
          en: "I guarantee that the work will be done properly.",
          bn: "আমি গ্যারান্টি দিচ্ছি কাজটা ঠিকমতো হবে।",
          slotValues: {
            CLAUSE: "the work will be done properly",
          },
          topicArea: "work",
        },
        {
          en: "I guarantee that you'll have a wonderful time.",
          bn: "আমি গ্যারান্টি দিচ্ছি তুমি দারুণ সময় কাটাবে।",
          slotValues: {
            CLAUSE: "you'll have a wonderful time",
          },
          topicArea: "travel",
        },
        {
          en: "I guarantee that the price won't change.",
          bn: "আমি গ্যারান্টি দিচ্ছি দাম পরিবর্তন হবে না।",
          slotValues: { CLAUSE: "the price won't change" },
          topicArea: "shopping",
        },
        {
          en: "I guarantee that she will be happy with the gift.",
          bn: "আমি গ্যারান্টি দিচ্ছি উপহারটায় সে খুশি হবে।",
          slotValues: {
            CLAUSE: "she will be happy with the gift",
          },
          topicArea: "relationships",
        },
        {
          en: "I guarantee that the recipe will turn out great.",
          bn: "আমি গ্যারান্টি দিচ্ছি রেসিপিটা দারুণ হবে।",
          slotValues: {
            CLAUSE: "the recipe will turn out great",
          },
          topicArea: "food",
        },
        {
          en: "I guarantee that the treatment is safe.",
          bn: "আমি গ্যারান্টি দিচ্ছি চিকিৎসা নিরাপদ।",
          slotValues: { CLAUSE: "the treatment is safe" },
          topicArea: "health",
        },
        {
          en: "I guarantee that this book will change your perspective.",
          bn: "আমি গ্যারান্টি দিচ্ছি এই বই তোমার দৃষ্টিভঙ্গি বদলে দেবে।",
          slotValues: {
            CLAUSE: "this book will change your perspective",
          },
          topicArea: "education",
        },
        {
          en: "I guarantee that everyone will enjoy the party.",
          bn: "আমি গ্যারান্টি দিচ্ছি সবাই পার্টি উপভোগ করবে।",
          slotValues: {
            CLAUSE: "everyone will enjoy the party",
          },
          topicArea: "relationships",
        },
      ],
      formality: "polite",
      difficulty: "intermediate",
      usageNote:
        "'I guarantee' is a very confident promise. In business, it often has legal implications.",
      usageNote_bn:
        "'I guarantee' একটি অত্যন্ত আত্মবিশ্বাসী প্রতিশ্রুতি। ব্যবসায় এর প্রায়ই আইনি তাৎপর্য থাকে।",
    },
    {
      id: "K6.5",
      formula: "I won't let you down",
      formula_bn: "আমি তোমাকে হতাশ করব না",
      patternName: "Reassuring Commitment",
      patternName_bn: "আশ্বাসমূলক অঙ্গীকার",
      slots: [],
      examples: [
        {
          en: "I won't let you down. Trust me.",
          bn: "আমি তোমাকে হতাশ করব না। আমার উপর বিশ্বাস রাখো।",
          slotValues: {},
          topicArea: "relationships",
        },
        {
          en: "I won't let you down. The report will be perfect.",
          bn: "আমি আপনাকে হতাশ করব না। রিপোর্ট নিখুঁত হবে।",
          slotValues: {},
          topicArea: "work",
        },
        {
          en: "I won't let you down. I'll pass the exam.",
          bn: "আমি তোমাকে হতাশ করব না। আমি পরীক্ষায় পাশ করব।",
          slotValues: {},
          topicArea: "education",
        },
        {
          en: "I won't let you down. Dinner will be ready on time.",
          bn: "আমি তোমাকে হতাশ করব না। রাতের খাবার সময়মতো তৈরি হবে।",
          slotValues: {},
          topicArea: "food",
        },
        {
          en: "I won't let you down. I'll be at the airport to pick you up.",
          bn: "আমি তোমাকে হতাশ করব না। তোমাকে নিতে বিমানবন্দরে থাকব।",
          slotValues: {},
          topicArea: "travel",
        },
        {
          en: "I won't let you down. I'll take my health seriously.",
          bn: "আমি তোমাকে হতাশ করব না। আমি আমার স্বাস্থ্য গুরুত্বের সাথে নেব।",
          slotValues: {},
          topicArea: "health",
        },
        {
          en: "I won't let you down. Give me one more chance.",
          bn: "আমি তোমাকে হতাশ করব না। আমাকে আরেকটা সুযোগ দাও।",
          slotValues: {},
          topicArea: "relationships",
        },
        {
          en: "I won't let you down. The delivery will be on schedule.",
          bn: "আমি আপনাকে হতাশ করব না। ডেলিভারি সময়মতো হবে।",
          slotValues: {},
          topicArea: "shopping",
        },
        {
          en: "I won't let you down. I'm committed to this team.",
          bn: "আমি আপনাদের হতাশ করব না। আমি এই দলের প্রতি প্রতিশ্রুতিবদ্ধ।",
          slotValues: {},
          topicArea: "work",
        },
        {
          en: "I won't let you down, Mom. I'll study hard.",
          bn: "আমি তোমাকে হতাশ করব না, মা। আমি কঠোর পরিশ্রম করে পড়ব।",
          slotValues: {},
          topicArea: "education",
        },
        {
          en: "I won't let you down. The event will be a success.",
          bn: "আমি তোমাকে হতাশ করব না। অনুষ্ঠান সফল হবে।",
          slotValues: {},
          topicArea: "daily_life",
        },
        {
          en: "I won't let you down. I'll follow the diet plan.",
          bn: "আমি তোমাকে হতাশ করব না। আমি ডায়েট প্ল্যান মানব।",
          slotValues: {},
          topicArea: "food",
        },
        {
          en: "I won't let you down. I'll make the arrangements for the trip.",
          bn: "আমি তোমাকে হতাশ করব না। ভ্রমণের আয়োজন আমি করব।",
          slotValues: {},
          topicArea: "travel",
        },
        {
          en: "I won't let you down. I'll get the best price for you.",
          bn: "আমি আপনাকে হতাশ করব না। আপনার জন্য সেরা দাম পাব।",
          slotValues: {},
          topicArea: "shopping",
        },
        {
          en: "I won't let you down. I'll always be there for you.",
          bn: "আমি তোমাকে হতাশ করব না। আমি সবসময় তোমার পাশে থাকব।",
          slotValues: {},
          topicArea: "relationships",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "'I won't let you down' is an emotional and personal commitment. It's commonly used to reassure someone who is relying on you.",
      usageNote_bn:
        "'I won't let you down' একটি আবেগপূর্ণ ও ব্যক্তিগত অঙ্গীকার। কেউ আপনার উপর নির্ভর করলে তাকে আশ্বস্ত করতে সাধারণত ব্যবহৃত হয়।",
    },
  ],
};
