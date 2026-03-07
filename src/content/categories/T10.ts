import { PatternCategory } from "@/types/pattern";

export const categoryT10: PatternCategory = {
  id: "T10",
  slug: "cost-price-value",
  name: "Cost, Price & Value",
  name_bn: "খরচ, মূল্য ও মান",
  description:
    "Learn how to talk about costs, prices, expenses, and value in English.",
  description_bn:
    "ইংরেজিতে খরচ, দাম, ব্যয় এবং মান নিয়ে কথা বলতে শিখুন।",
  icon: "💰",
  group: "T",
  groupName: "Situational Patterns",
  groupName_bn: "পরিস্থিতিগত প্যাটার্ন",
  difficulty: "beginner",
  patterns: [
    {
      id: "T10.1",
      formula: "[THING] costs [AMOUNT]",
      formula_bn: "[জিনিসের] দাম [পরিমাণ]",
      patternName: "Stating the Price",
      patternName_bn: "দাম জানানো",
      slots: [
        {
          name: "THING",
          description: "An item, service, or product with a price",
          description_bn: "একটি জিনিস, সেবা, বা পণ্য যার দাম আছে",
          acceptedTypes: ["noun", "noun_phrase"],
          examples: ["this phone", "a haircut", "the ticket"],
        },
        {
          name: "AMOUNT",
          description: "The price or cost in money",
          description_bn: "টাকায় দাম বা খরচ",
          acceptedTypes: ["amount", "number", "noun_phrase"],
          examples: ["500 taka", "$50", "about 1000 taka"],
        },
      ],
      examples: [
        {
          en: "This phone costs 25,000 taka.",
          bn: "এই ফোনের দাম ২৫,০০০ টাকা।",
          slotValues: { THING: "This phone", AMOUNT: "25,000 taka" },
          topicArea: "shopping",
        },
        {
          en: "A haircut costs 200 taka.",
          bn: "চুল কাটার দাম ২০০ টাকা।",
          slotValues: { THING: "A haircut", AMOUNT: "200 taka" },
          topicArea: "daily_life",
        },
        {
          en: "The ticket costs 500 taka.",
          bn: "টিকিটের দাম ৫০০ টাকা।",
          slotValues: { THING: "The ticket", AMOUNT: "500 taka" },
          topicArea: "travel",
        },
        {
          en: "A cup of coffee costs 150 taka here.",
          bn: "এখানে এক কাপ কফির দাম ১৫০ টাকা।",
          slotValues: { THING: "A cup of coffee", AMOUNT: "150 taka here" },
          topicArea: "food",
        },
        {
          en: "The consultation costs 1,000 taka.",
          bn: "পরামর্শের খরচ ১,০০০ টাকা।",
          slotValues: { THING: "The consultation", AMOUNT: "1,000 taka" },
          topicArea: "health",
        },
        {
          en: "This course costs $200.",
          bn: "এই কোর্সের দাম ২০০ ডলার।",
          slotValues: { THING: "This course", AMOUNT: "$200" },
          topicArea: "education",
        },
        {
          en: "A taxi to the airport costs about 800 taka.",
          bn: "বিমানবন্দর পর্যন্ত ট্যাক্সির ভাড়া প্রায় ৮০০ টাকা।",
          slotValues: {
            THING: "A taxi to the airport",
            AMOUNT: "about 800 taka",
          },
          topicArea: "travel",
        },
        {
          en: "The shirt costs 1,500 taka.",
          bn: "শার্টের দাম ১,৫০০ টাকা।",
          slotValues: { THING: "The shirt", AMOUNT: "1,500 taka" },
          topicArea: "shopping",
        },
        {
          en: "A gym membership costs 3,000 taka per month.",
          bn: "জিম মেম্বারশিপের খরচ প্রতি মাসে ৩,০০০ টাকা।",
          slotValues: {
            THING: "A gym membership",
            AMOUNT: "3,000 taka per month",
          },
          topicArea: "health",
        },
        {
          en: "The textbook costs 600 taka.",
          bn: "পাঠ্যবইটির দাম ৬০০ টাকা।",
          slotValues: { THING: "The textbook", AMOUNT: "600 taka" },
          topicArea: "education",
        },
        {
          en: "Lunch at the cafeteria costs 120 taka.",
          bn: "ক্যাফেটেরিয়ায় দুপুরের খাবারের দাম ১২০ টাকা।",
          slotValues: {
            THING: "Lunch at the cafeteria",
            AMOUNT: "120 taka",
          },
          topicArea: "food",
        },
        {
          en: "The repair costs 2,000 taka.",
          bn: "মেরামতের খরচ ২,০০০ টাকা।",
          slotValues: { THING: "The repair", AMOUNT: "2,000 taka" },
          topicArea: "daily_life",
        },
        {
          en: "A hotel room costs 5,000 taka per night.",
          bn: "হোটেল রুমের দাম প্রতি রাতে ৫,০০০ টাকা।",
          slotValues: {
            THING: "A hotel room",
            AMOUNT: "5,000 taka per night",
          },
          topicArea: "travel",
        },
        {
          en: "The wedding dress costs 15,000 taka.",
          bn: "বিয়ের পোশাকের দাম ১৫,০০০ টাকা।",
          slotValues: { THING: "The wedding dress", AMOUNT: "15,000 taka" },
          topicArea: "relationships",
        },
        {
          en: "Internet service costs 700 taka a month.",
          bn: "ইন্টারনেট সেবার খরচ মাসে ৭০০ টাকা।",
          slotValues: {
            THING: "Internet service",
            AMOUNT: "700 taka a month",
          },
          topicArea: "daily_life",
        },
      ],
      formality: "casual",
      difficulty: "beginner",
      usageNote:
        "A direct and simple way to state the price of something. Very useful in everyday shopping and transactions.",
      usageNote_bn:
        "কোনো কিছুর দাম জানানোর সরাসরি ও সহজ উপায়। দৈনন্দিন কেনাকাটা ও লেনদেনে খুবই উপযোগী।",
      combinableWith: ["T10.5"],
      banglaStructureMap:
        "[THING]-এর (Subject + Possessive) + দাম (Noun) + [AMOUNT] (Amount)",
    },
    {
      id: "T10.2",
      formula: "I can't afford [THING]",
      formula_bn: "আমি [জিনিস] কেনার সামর্থ্য রাখি না",
      patternName: "Expressing Inability to Pay",
      patternName_bn: "পেমেন্টে অসমর্থতা প্রকাশ",
      slots: [
        {
          name: "THING",
          description: "Something that is too expensive for you",
          description_bn: "এমন কিছু যা আপনার জন্য অত্যন্ত ব্যয়বহুল",
          acceptedTypes: ["noun", "noun_phrase", "to_verb"],
          examples: ["a new car", "to eat out every day", "that apartment"],
        },
      ],
      examples: [
        {
          en: "I can't afford a new car.",
          bn: "আমি নতুন গাড়ি কেনার সামর্থ্য রাখি না।",
          slotValues: { THING: "a new car" },
          topicArea: "daily_life",
        },
        {
          en: "I can't afford to eat out every day.",
          bn: "আমি প্রতিদিন বাইরে খাওয়ার সামর্থ্য রাখি না।",
          slotValues: { THING: "to eat out every day" },
          topicArea: "food",
        },
        {
          en: "I can't afford that apartment.",
          bn: "আমি ঐ ফ্ল্যাট নেওয়ার সামর্থ্য রাখি না।",
          slotValues: { THING: "that apartment" },
          topicArea: "daily_life",
        },
        {
          en: "I can't afford private tuition.",
          bn: "আমি প্রাইভেট টিউশনের সামর্থ্য রাখি না।",
          slotValues: { THING: "private tuition" },
          topicArea: "education",
        },
        {
          en: "I can't afford the latest iPhone.",
          bn: "আমি সর্বশেষ আইফোন কেনার সামর্থ্য রাখি না।",
          slotValues: { THING: "the latest iPhone" },
          topicArea: "shopping",
        },
        {
          en: "I can't afford to travel abroad right now.",
          bn: "আমি এই মুহূর্তে বিদেশ ভ্রমণের সামর্থ্য রাখি না।",
          slotValues: { THING: "to travel abroad right now" },
          topicArea: "travel",
        },
        {
          en: "I can't afford the surgery.",
          bn: "আমি অপারেশনের খরচ বহন করার সামর্থ্য রাখি না।",
          slotValues: { THING: "the surgery" },
          topicArea: "health",
        },
        {
          en: "I can't afford designer clothes.",
          bn: "আমি ডিজাইনার জামাকাপড়ের সামর্থ্য রাখি না।",
          slotValues: { THING: "designer clothes" },
          topicArea: "shopping",
        },
        {
          en: "I can't afford to take a day off.",
          bn: "আমি একদিন ছুটি নেওয়ার সামর্থ্য রাখি না।",
          slotValues: { THING: "to take a day off" },
          topicArea: "work",
        },
        {
          en: "I can't afford a gym membership.",
          bn: "আমি জিম মেম্বারশিপের সামর্থ্য রাখি না।",
          slotValues: { THING: "a gym membership" },
          topicArea: "health",
        },
        {
          en: "I can't afford to buy a house.",
          bn: "আমি বাড়ি কেনার সামর্থ্য রাখি না।",
          slotValues: { THING: "to buy a house" },
          topicArea: "daily_life",
        },
        {
          en: "I can't afford the exam preparation course.",
          bn: "আমি পরীক্ষা প্রস্তুতি কোর্সের সামর্থ্য রাখি না।",
          slotValues: { THING: "the exam preparation course" },
          topicArea: "education",
        },
        {
          en: "I can't afford a five-star hotel.",
          bn: "আমি পাঁচতারা হোটেলের সামর্থ্য রাখি না।",
          slotValues: { THING: "a five-star hotel" },
          topicArea: "travel",
        },
        {
          en: "I can't afford organic food all the time.",
          bn: "আমি সবসময় জৈব খাবারের সামর্থ্য রাখি না।",
          slotValues: { THING: "organic food all the time" },
          topicArea: "food",
        },
        {
          en: "I can't afford a big wedding.",
          bn: "আমি বড় বিয়ের সামর্থ্য রাখি না।",
          slotValues: { THING: "a big wedding" },
          topicArea: "relationships",
        },
      ],
      formality: "casual",
      difficulty: "beginner",
      usageNote:
        "An honest way to express that something is beyond your budget. Not rude, just factual.",
      usageNote_bn:
        "কোনো কিছু আপনার বাজেটের বাইরে তা প্রকাশ করার একটি সৎ উপায়। অভদ্র নয়, শুধু বাস্তবসম্মত।",
      combinableWith: ["T10.5"],
      banglaStructureMap:
        "আমি (Subject) + [THING] (Object) + কেনার সামর্থ্য রাখি না (Verb - Negative)",
    },
    {
      id: "T10.3",
      formula: "[THING] is a good deal",
      formula_bn: "[জিনিসটি] ভালো দর",
      patternName: "Expressing Good Value",
      patternName_bn: "ভালো মান প্রকাশ",
      slots: [
        {
          name: "THING",
          description:
            "An item, service, or offer that represents good value",
          description_bn:
            "একটি জিনিস, সেবা, বা অফার যা ভালো মান উপস্থাপন করে",
          acceptedTypes: ["noun", "noun_phrase"],
          examples: ["this laptop", "the combo meal", "that offer"],
        },
      ],
      examples: [
        {
          en: "This laptop is a good deal.",
          bn: "এই ল্যাপটপটি ভালো দর।",
          slotValues: { THING: "This laptop" },
          topicArea: "shopping",
        },
        {
          en: "The combo meal is a good deal.",
          bn: "কম্বো মিলটি ভালো দর।",
          slotValues: { THING: "The combo meal" },
          topicArea: "food",
        },
        {
          en: "That offer is a good deal.",
          bn: "ঐ অফারটি ভালো দর।",
          slotValues: { THING: "That offer" },
          topicArea: "shopping",
        },
        {
          en: "The annual subscription is a good deal.",
          bn: "বার্ষিক সাবস্ক্রিপশনটি ভালো দর।",
          slotValues: { THING: "The annual subscription" },
          topicArea: "daily_life",
        },
        {
          en: "This package tour is a good deal.",
          bn: "এই প্যাকেজ ট্যুরটি ভালো দর।",
          slotValues: { THING: "This package tour" },
          topicArea: "travel",
        },
        {
          en: "The family plan is a good deal.",
          bn: "ফ্যামিলি প্ল্যানটি ভালো দর।",
          slotValues: { THING: "The family plan" },
          topicArea: "health",
        },
        {
          en: "This bundle is a good deal.",
          bn: "এই বান্ডেলটি ভালো দর।",
          slotValues: { THING: "This bundle" },
          topicArea: "shopping",
        },
        {
          en: "The early bird discount is a good deal.",
          bn: "আর্লি বার্ড ডিসকাউন্টটি ভালো দর।",
          slotValues: { THING: "The early bird discount" },
          topicArea: "travel",
        },
        {
          en: "The online course at that price is a good deal.",
          bn: "ঐ দামে অনলাইন কোর্সটি ভালো দর।",
          slotValues: { THING: "The online course at that price" },
          topicArea: "education",
        },
        {
          en: "The buffet lunch is a good deal.",
          bn: "বুফে লাঞ্চটি ভালো দর।",
          slotValues: { THING: "The buffet lunch" },
          topicArea: "food",
        },
        {
          en: "This second-hand car is a good deal.",
          bn: "এই সেকেন্ড-হ্যান্ড গাড়িটি ভালো দর।",
          slotValues: { THING: "This second-hand car" },
          topicArea: "daily_life",
        },
        {
          en: "The two-for-one offer is a good deal.",
          bn: "দুইটার দামে একটা ফ্রি অফারটি ভালো দর।",
          slotValues: { THING: "The two-for-one offer" },
          topicArea: "shopping",
        },
        {
          en: "The room rate with breakfast is a good deal.",
          bn: "সকালের নাশতাসহ রুমের রেটটি ভালো দর।",
          slotValues: { THING: "The room rate with breakfast" },
          topicArea: "travel",
        },
        {
          en: "The health insurance plan is a good deal.",
          bn: "স্বাস্থ্য বীমা পরিকল্পনাটি ভালো দর।",
          slotValues: { THING: "The health insurance plan" },
          topicArea: "health",
        },
        {
          en: "The semester fee at this college is a good deal.",
          bn: "এই কলেজে সেমিস্টার ফি ভালো দর।",
          slotValues: { THING: "The semester fee at this college" },
          topicArea: "education",
        },
      ],
      formality: "casual",
      difficulty: "beginner",
      usageNote:
        "Used to express that something offers good value for money. Great for recommending things to others.",
      usageNote_bn:
        "কোনো কিছু টাকার বিনিময়ে ভালো মান দেয় তা প্রকাশ করতে ব্যবহৃত হয়। অন্যদের কাছে জিনিস সুপারিশ করতে দুর্দান্ত।",
      combinableWith: ["T10.1"],
      banglaStructureMap:
        "[THING]-টি (Subject + Suffix) + ভালো দর (Predicate)",
    },
    {
      id: "T10.4",
      formula: "I spent [AMOUNT] on [THING]",
      formula_bn: "আমি [জিনিসে] [পরিমাণ] খরচ করেছি",
      patternName: "Talking About Spending",
      patternName_bn: "খরচ সম্পর্কে বলা",
      slots: [
        {
          name: "AMOUNT",
          description: "The amount of money you spent",
          description_bn: "আপনি যে পরিমাণ টাকা খরচ করেছেন",
          acceptedTypes: ["amount", "number", "noun_phrase"],
          examples: ["5,000 taka", "a lot of money", "almost half my salary"],
        },
        {
          name: "THING",
          description: "What you spent the money on",
          description_bn: "কীসে আপনি টাকা খরচ করেছেন",
          acceptedTypes: ["noun", "noun_phrase"],
          examples: ["groceries", "a new phone", "the vacation"],
        },
      ],
      examples: [
        {
          en: "I spent 5,000 taka on groceries.",
          bn: "আমি মুদি দোকানে ৫,০০০ টাকা খরচ করেছি।",
          slotValues: { AMOUNT: "5,000 taka", THING: "groceries" },
          topicArea: "food",
        },
        {
          en: "I spent a lot of money on a new phone.",
          bn: "আমি একটি নতুন ফোনে অনেক টাকা খরচ করেছি।",
          slotValues: { AMOUNT: "a lot of money", THING: "a new phone" },
          topicArea: "shopping",
        },
        {
          en: "I spent almost half my salary on the vacation.",
          bn: "আমি ছুটিতে আমার বেতনের প্রায় অর্ধেক খরচ করেছি।",
          slotValues: {
            AMOUNT: "almost half my salary",
            THING: "the vacation",
          },
          topicArea: "travel",
        },
        {
          en: "I spent 2,000 taka on medicine.",
          bn: "আমি ওষুধে ২,০০০ টাকা খরচ করেছি।",
          slotValues: { AMOUNT: "2,000 taka", THING: "medicine" },
          topicArea: "health",
        },
        {
          en: "I spent 10,000 taka on books this semester.",
          bn: "আমি এই সেমিস্টারে বইয়ে ১০,০০০ টাকা খরচ করেছি।",
          slotValues: {
            AMOUNT: "10,000 taka",
            THING: "books this semester",
          },
          topicArea: "education",
        },
        {
          en: "I spent 3,000 taka on a birthday gift.",
          bn: "আমি জন্মদিনের উপহারে ৩,০০০ টাকা খরচ করেছি।",
          slotValues: { AMOUNT: "3,000 taka", THING: "a birthday gift" },
          topicArea: "relationships",
        },
        {
          en: "I spent too much on clothes last month.",
          bn: "আমি গত মাসে কাপড়ে অনেক বেশি খরচ করেছি।",
          slotValues: { AMOUNT: "too much", THING: "clothes last month" },
          topicArea: "shopping",
        },
        {
          en: "I spent 1,500 taka on lunch for the team.",
          bn: "আমি টিমের দুপুরের খাবারে ১,৫০০ টাকা খরচ করেছি।",
          slotValues: {
            AMOUNT: "1,500 taka",
            THING: "lunch for the team",
          },
          topicArea: "work",
        },
        {
          en: "I spent 500 taka on bus fare this week.",
          bn: "আমি এই সপ্তাহে বাসের ভাড়ায় ৫০০ টাকা খরচ করেছি।",
          slotValues: {
            AMOUNT: "500 taka",
            THING: "bus fare this week",
          },
          topicArea: "travel",
        },
        {
          en: "I spent 8,000 taka on a doctor's visit.",
          bn: "আমি ডাক্তারের কাছে যেতে ৮,০০০ টাকা খরচ করেছি।",
          slotValues: { AMOUNT: "8,000 taka", THING: "a doctor's visit" },
          topicArea: "health",
        },
        {
          en: "I spent 20,000 taka on online courses.",
          bn: "আমি অনলাইন কোর্সে ২০,০০০ টাকা খরচ করেছি।",
          slotValues: { AMOUNT: "20,000 taka", THING: "online courses" },
          topicArea: "education",
        },
        {
          en: "I spent a fortune on my wedding.",
          bn: "আমি আমার বিয়েতে অনেক টাকা খরচ করেছি।",
          slotValues: { AMOUNT: "a fortune", THING: "my wedding" },
          topicArea: "relationships",
        },
        {
          en: "I spent 600 taka on a pizza.",
          bn: "আমি একটি পিৎজায় ৬০০ টাকা খরচ করেছি।",
          slotValues: { AMOUNT: "600 taka", THING: "a pizza" },
          topicArea: "food",
        },
        {
          en: "I spent 4,000 taka on home repairs.",
          bn: "আমি বাড়ির মেরামতে ৪,০০০ টাকা খরচ করেছি।",
          slotValues: { AMOUNT: "4,000 taka", THING: "home repairs" },
          topicArea: "daily_life",
        },
        {
          en: "I spent 15,000 taka on office supplies.",
          bn: "আমি অফিস সরবরাহে ১৫,০০০ টাকা খরচ করেছি।",
          slotValues: { AMOUNT: "15,000 taka", THING: "office supplies" },
          topicArea: "work",
        },
      ],
      formality: "casual",
      difficulty: "beginner",
      usageNote:
        "Used to talk about past expenses. A common topic in everyday conversation about money and budgeting.",
      usageNote_bn:
        "অতীত খরচ সম্পর্কে কথা বলতে ব্যবহৃত হয়। অর্থ ও বাজেট নিয়ে দৈনন্দিন কথোপকথনে একটি সাধারণ বিষয়।",
      combinableWith: ["T10.1"],
      banglaStructureMap:
        "আমি (Subject) + [THING]-এ (Object + Postposition) + [AMOUNT] (Amount) + খরচ করেছি (Verb - Past)",
    },
    {
      id: "T10.5",
      formula: "That's too expensive",
      formula_bn: "এটা অনেক বেশি দামি",
      patternName: "Expressing High Price",
      patternName_bn: "বেশি দাম প্রকাশ",
      slots: [],
      examples: [
        {
          en: "That's too expensive.",
          bn: "এটা অনেক বেশি দামি।",
          slotValues: {},
          topicArea: "shopping",
        },
        {
          en: "That's too expensive for a shirt.",
          bn: "একটি শার্টের জন্য এটা অনেক বেশি দামি।",
          slotValues: {},
          topicArea: "shopping",
        },
        {
          en: "That's too expensive for me right now.",
          bn: "এই মুহূর্তে আমার জন্য এটা অনেক বেশি দামি।",
          slotValues: {},
          topicArea: "daily_life",
        },
        {
          en: "That's too expensive. Do you have something cheaper?",
          bn: "এটা অনেক বেশি দামি। আরও সস্তা কিছু আছে?",
          slotValues: {},
          topicArea: "shopping",
        },
        {
          en: "That's too expensive for a meal.",
          bn: "একবেলার খাবারের জন্য এটা অনেক বেশি দামি।",
          slotValues: {},
          topicArea: "food",
        },
        {
          en: "That's too expensive. I'll look elsewhere.",
          bn: "এটা অনেক বেশি দামি। আমি অন্য জায়গায় দেখব।",
          slotValues: {},
          topicArea: "shopping",
        },
        {
          en: "That's too expensive for a bus ticket.",
          bn: "একটি বাস টিকিটের জন্য এটা অনেক বেশি দামি।",
          slotValues: {},
          topicArea: "travel",
        },
        {
          en: "That's too expensive. Can you give me a discount?",
          bn: "এটা অনেক বেশি দামি। আমাকে কি একটু ছাড় দিতে পারবেন?",
          slotValues: {},
          topicArea: "shopping",
        },
        {
          en: "That's too expensive for a doctor's visit.",
          bn: "ডাক্তারের কাছে যাওয়ার জন্য এটা অনেক বেশি দামি।",
          slotValues: {},
          topicArea: "health",
        },
        {
          en: "That's too expensive. I need to think about it.",
          bn: "এটা অনেক বেশি দামি। আমাকে ভেবে দেখতে হবে।",
          slotValues: {},
          topicArea: "daily_life",
        },
        {
          en: "That's too expensive for a one-night stay.",
          bn: "এক রাতের থাকার জন্য এটা অনেক বেশি দামি।",
          slotValues: {},
          topicArea: "travel",
        },
        {
          en: "That's too expensive for a beginner's course.",
          bn: "একটি শুরুর কোর্সের জন্য এটা অনেক বেশি দামি।",
          slotValues: {},
          topicArea: "education",
        },
        {
          en: "That's too expensive. I'll wait for a sale.",
          bn: "এটা অনেক বেশি দামি। আমি সেলের জন্য অপেক্ষা করব।",
          slotValues: {},
          topicArea: "shopping",
        },
        {
          en: "That's too expensive compared to other places.",
          bn: "অন্যান্য জায়গার তুলনায় এটা অনেক বেশি দামি।",
          slotValues: {},
          topicArea: "food",
        },
        {
          en: "That's too expensive for what it is.",
          bn: "যা এটা, তার তুলনায় এটা অনেক বেশি দামি।",
          slotValues: {},
          topicArea: "work",
        },
      ],
      formality: "casual",
      difficulty: "beginner",
      usageNote:
        "A common and natural reaction when something costs more than expected. Can be softened with 'a bit' or 'quite'.",
      usageNote_bn:
        "যখন কোনো কিছুর দাম প্রত্যাশার চেয়ে বেশি হয় তখন একটি সাধারণ ও স্বাভাবিক প্রতিক্রিয়া। 'a bit' বা 'quite' দিয়ে নরম করা যায়।",
      combinableWith: ["T10.2"],
      banglaStructureMap:
        "এটা (Subject) + অনেক বেশি দামি (Predicate - Adjective)",
    },
  ],
};
