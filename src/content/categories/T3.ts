import { PatternCategory } from "@/types/pattern";

export const categoryT3: PatternCategory = {
  id: "T3",
  slug: "ordering-buying",
  name: "Ordering & Buying",
  name_bn: "অর্ডার করা ও কেনাকাটা",
  description:
    "Learn how to order food, buy things, and handle transactions in English.",
  description_bn:
    "ইংরেজিতে খাবার অর্ডার করা, জিনিস কেনা এবং লেনদেন পরিচালনা করতে শিখুন।",
  icon: "🛒",
  group: "T",
  groupName: "Situational Patterns",
  groupName_bn: "পরিস্থিতিগত প্যাটার্ন",
  difficulty: "beginner",
  patterns: [
    {
      id: "T3.1",
      formula: "I'll have [THING], please",
      formula_bn: "আমি [জিনিস] নেব, প্লিজ",
      patternName: "Ordering (Polite)",
      patternName_bn: "অর্ডার করা (বিনয়ী)",
      slots: [
        {
          name: "THING",
          description:
            "A food item, drink, or product you want to order",
          description_bn:
            "একটি খাবার, পানীয়, বা পণ্য যা আপনি অর্ডার করতে চান",
          acceptedTypes: ["noun", "noun_phrase"],
          examples: ["the chicken curry", "a coffee", "two of those"],
        },
      ],
      examples: [
        {
          en: "I'll have the chicken curry, please.",
          bn: "আমি চিকেন কারি নেব, প্লিজ।",
          slotValues: { THING: "the chicken curry" },
          topicArea: "food",
        },
        {
          en: "I'll have a coffee, please.",
          bn: "আমি একটা কফি নেব, প্লিজ।",
          slotValues: { THING: "a coffee" },
          topicArea: "food",
        },
        {
          en: "I'll have two of those, please.",
          bn: "আমি ওগুলো থেকে দুটো নেব, প্লিজ।",
          slotValues: { THING: "two of those" },
          topicArea: "shopping",
        },
        {
          en: "I'll have the grilled fish, please.",
          bn: "আমি গ্রিলড ফিশ নেব, প্লিজ।",
          slotValues: { THING: "the grilled fish" },
          topicArea: "food",
        },
        {
          en: "I'll have a glass of orange juice, please.",
          bn: "আমি এক গ্লাস কমলার জুস নেব, প্লিজ।",
          slotValues: { THING: "a glass of orange juice" },
          topicArea: "food",
        },
        {
          en: "I'll have the vegetable soup, please.",
          bn: "আমি সবজির স্যুপ নেব, প্লিজ।",
          slotValues: { THING: "the vegetable soup" },
          topicArea: "food",
        },
        {
          en: "I'll have a slice of cake, please.",
          bn: "আমি এক টুকরো কেক নেব, প্লিজ।",
          slotValues: { THING: "a slice of cake" },
          topicArea: "food",
        },
        {
          en: "I'll have the set menu, please.",
          bn: "আমি সেট মেনু নেব, প্লিজ।",
          slotValues: { THING: "the set menu" },
          topicArea: "food",
        },
        {
          en: "I'll have a bottle of water, please.",
          bn: "আমি এক বোতল পানি নেব, প্লিজ।",
          slotValues: { THING: "a bottle of water" },
          topicArea: "food",
        },
        {
          en: "I'll have the large size, please.",
          bn: "আমি বড় সাইজটা নেব, প্লিজ।",
          slotValues: { THING: "the large size" },
          topicArea: "shopping",
        },
        {
          en: "I'll have the same as her, please.",
          bn: "আমি উনার মতোই নেব, প্লিজ।",
          slotValues: { THING: "the same as her" },
          topicArea: "food",
        },
        {
          en: "I'll have a dozen eggs, please.",
          bn: "আমি এক ডজন ডিম নেব, প্লিজ।",
          slotValues: { THING: "a dozen eggs" },
          topicArea: "shopping",
        },
        {
          en: "I'll have the chocolate ice cream, please.",
          bn: "আমি চকলেট আইসক্রিম নেব, প্লিজ।",
          slotValues: { THING: "the chocolate ice cream" },
          topicArea: "food",
        },
        {
          en: "I'll have a round-trip ticket, please.",
          bn: "আমি একটা যাওয়া-আসার টিকিট নেব, প্লিজ।",
          slotValues: { THING: "a round-trip ticket" },
          topicArea: "travel",
        },
        {
          en: "I'll have the blue one, please.",
          bn: "আমি নীলটা নেব, প্লিজ।",
          slotValues: { THING: "the blue one" },
          topicArea: "shopping",
        },
      ],
      formality: "polite",
      difficulty: "beginner",
      usageNote:
        "The most common way to order in restaurants or cafes. Adding 'please' makes it polite.",
      usageNote_bn:
        "রেস্তোরাঁ বা ক্যাফেতে অর্ডার করার সবচেয়ে সাধারণ উপায়। 'প্লিজ' যোগ করলে এটি বিনয়ী হয়।",
      combinableWith: ["T3.2"],
      banglaStructureMap:
        "আমি (Subject) + [THING] (Object) + নেব (Verb) + প্লিজ (Politeness marker)",
    },
    {
      id: "T3.2",
      formula: "How much is [THING]?",
      formula_bn: "[জিনিসের] দাম কত?",
      patternName: "Asking the Price",
      patternName_bn: "দাম জিজ্ঞাসা",
      slots: [
        {
          name: "THING",
          description: "An item or service whose price you want to know",
          description_bn:
            "একটি জিনিস বা সেবা যার দাম আপনি জানতে চান",
          acceptedTypes: ["noun", "noun_phrase"],
          examples: ["this shirt", "a kilo of rice", "the repair"],
        },
      ],
      examples: [
        {
          en: "How much is this shirt?",
          bn: "এই শার্টের দাম কত?",
          slotValues: { THING: "this shirt" },
          topicArea: "shopping",
        },
        {
          en: "How much is a kilo of rice?",
          bn: "এক কেজি চালের দাম কত?",
          slotValues: { THING: "a kilo of rice" },
          topicArea: "shopping",
        },
        {
          en: "How much is the repair?",
          bn: "মেরামতের খরচ কত?",
          slotValues: { THING: "the repair" },
          topicArea: "daily_life",
        },
        {
          en: "How much is this bag?",
          bn: "এই ব্যাগের দাম কত?",
          slotValues: { THING: "this bag" },
          topicArea: "shopping",
        },
        {
          en: "How much is the taxi to the airport?",
          bn: "বিমানবন্দর পর্যন্ত ট্যাক্সির ভাড়া কত?",
          slotValues: { THING: "the taxi to the airport" },
          topicArea: "travel",
        },
        {
          en: "How much is a cup of tea here?",
          bn: "এখানে এক কাপ চায়ের দাম কত?",
          slotValues: { THING: "a cup of tea here" },
          topicArea: "food",
        },
        {
          en: "How much is the monthly subscription?",
          bn: "মাসিক সাবস্ক্রিপশনের দাম কত?",
          slotValues: { THING: "the monthly subscription" },
          topicArea: "daily_life",
        },
        {
          en: "How much is the consultation fee?",
          bn: "পরামর্শ ফি কত?",
          slotValues: { THING: "the consultation fee" },
          topicArea: "health",
        },
        {
          en: "How much is the textbook?",
          bn: "পাঠ্যবইটির দাম কত?",
          slotValues: { THING: "the textbook" },
          topicArea: "education",
        },
        {
          en: "How much is a one-way ticket?",
          bn: "একমুখী টিকিটের দাম কত?",
          slotValues: { THING: "a one-way ticket" },
          topicArea: "travel",
        },
        {
          en: "How much is that necklace?",
          bn: "ঐ নেকলেসটির দাম কত?",
          slotValues: { THING: "that necklace" },
          topicArea: "shopping",
        },
        {
          en: "How much is the buffet?",
          bn: "বুফের দাম কত?",
          slotValues: { THING: "the buffet" },
          topicArea: "food",
        },
        {
          en: "How much is the room per night?",
          bn: "রুমের ভাড়া প্রতি রাতে কত?",
          slotValues: { THING: "the room per night" },
          topicArea: "travel",
        },
        {
          en: "How much is the annual membership?",
          bn: "বার্ষিক সদস্যপদের দাম কত?",
          slotValues: { THING: "the annual membership" },
          topicArea: "daily_life",
        },
        {
          en: "How much is a haircut?",
          bn: "চুল কাটার খরচ কত?",
          slotValues: { THING: "a haircut" },
          topicArea: "daily_life",
        },
      ],
      formality: "casual",
      difficulty: "beginner",
      usageNote:
        "The most direct way to ask about the price of something. Works in shops, markets, and restaurants.",
      usageNote_bn:
        "কোনো কিছুর দাম জানার সবচেয়ে সরাসরি উপায়। দোকান, বাজার এবং রেস্তোরাঁয় কাজ করে।",
      combinableWith: ["T3.3"],
      banglaStructureMap:
        "[THING]-এর (Object + Possessive) + দাম (Noun) + কত (Question word)?",
    },
    {
      id: "T3.3",
      formula: "Can I pay by [METHOD]?",
      formula_bn: "আমি কি [পদ্ধতিতে] পেমেন্ট করতে পারি?",
      patternName: "Asking About Payment",
      patternName_bn: "পেমেন্ট পদ্ধতি জিজ্ঞাসা",
      slots: [
        {
          name: "METHOD",
          description: "A payment method or instrument",
          description_bn: "একটি পেমেন্ট পদ্ধতি বা মাধ্যম",
          acceptedTypes: ["noun", "noun_phrase"],
          examples: ["card", "cash", "mobile banking"],
        },
      ],
      examples: [
        {
          en: "Can I pay by card?",
          bn: "আমি কি কার্ডে পেমেন্ট করতে পারি?",
          slotValues: { METHOD: "card" },
          topicArea: "shopping",
        },
        {
          en: "Can I pay by cash?",
          bn: "আমি কি নগদে পেমেন্ট করতে পারি?",
          slotValues: { METHOD: "cash" },
          topicArea: "shopping",
        },
        {
          en: "Can I pay by mobile banking?",
          bn: "আমি কি মোবাইল ব্যাংকিংয়ে পেমেন্ট করতে পারি?",
          slotValues: { METHOD: "mobile banking" },
          topicArea: "shopping",
        },
        {
          en: "Can I pay by credit card?",
          bn: "আমি কি ক্রেডিট কার্ডে পেমেন্ট করতে পারি?",
          slotValues: { METHOD: "credit card" },
          topicArea: "food",
        },
        {
          en: "Can I pay by check?",
          bn: "আমি কি চেকে পেমেন্ট করতে পারি?",
          slotValues: { METHOD: "check" },
          topicArea: "daily_life",
        },
        {
          en: "Can I pay by installments?",
          bn: "আমি কি কিস্তিতে পেমেন্ট করতে পারি?",
          slotValues: { METHOD: "installments" },
          topicArea: "shopping",
        },
        {
          en: "Can I pay by bKash?",
          bn: "আমি কি বিকাশে পেমেন্ট করতে পারি?",
          slotValues: { METHOD: "bKash" },
          topicArea: "shopping",
        },
        {
          en: "Can I pay by debit card?",
          bn: "আমি কি ডেবিট কার্ডে পেমেন্ট করতে পারি?",
          slotValues: { METHOD: "debit card" },
          topicArea: "travel",
        },
        {
          en: "Can I pay by bank transfer?",
          bn: "আমি কি ব্যাংক ট্রান্সফারে পেমেন্ট করতে পারি?",
          slotValues: { METHOD: "bank transfer" },
          topicArea: "work",
        },
        {
          en: "Can I pay by online payment?",
          bn: "আমি কি অনলাইন পেমেন্টে দিতে পারি?",
          slotValues: { METHOD: "online payment" },
          topicArea: "shopping",
        },
        {
          en: "Can I pay by Apple Pay?",
          bn: "আমি কি অ্যাপল পে দিয়ে পেমেন্ট করতে পারি?",
          slotValues: { METHOD: "Apple Pay" },
          topicArea: "shopping",
        },
        {
          en: "Can I pay by foreign currency?",
          bn: "আমি কি বিদেশি মুদ্রায় পেমেন্ট করতে পারি?",
          slotValues: { METHOD: "foreign currency" },
          topicArea: "travel",
        },
        {
          en: "Can I pay by Nagad?",
          bn: "আমি কি নগদে পেমেন্ট করতে পারি?",
          slotValues: { METHOD: "Nagad" },
          topicArea: "daily_life",
        },
        {
          en: "Can I pay by traveler's check?",
          bn: "আমি কি ট্রাভেলার্স চেকে পেমেন্ট করতে পারি?",
          slotValues: { METHOD: "traveler's check" },
          topicArea: "travel",
        },
        {
          en: "Can I pay by contactless?",
          bn: "আমি কি কন্ট্যাক্টলেসে পেমেন্ট করতে পারি?",
          slotValues: { METHOD: "contactless" },
          topicArea: "shopping",
        },
      ],
      formality: "polite",
      difficulty: "beginner",
      usageNote:
        "A practical question to ask before completing a purchase. Essential for shopping and dining.",
      usageNote_bn:
        "কেনাকাটা সম্পন্ন করার আগে জিজ্ঞাসা করার একটি ব্যবহারিক প্রশ্ন। কেনাকাটা ও খাওয়াদাওয়ার জন্য অপরিহার্য।",
      combinableWith: ["T3.2"],
      banglaStructureMap:
        "আমি কি (Subject + Question) + [METHOD]-এ (Method + Postposition) + পেমেন্ট করতে পারি (Verb)?",
    },
    {
      id: "T3.4",
      formula: "I'm looking for [THING]",
      formula_bn: "আমি [জিনিস] খুঁজছি",
      patternName: "Searching for an Item",
      patternName_bn: "জিনিস খোঁজা",
      slots: [
        {
          name: "THING",
          description:
            "A specific item, product, or type of thing you want to find",
          description_bn:
            "একটি নির্দিষ্ট জিনিস, পণ্য, বা ধরনের জিনিস যা আপনি খুঁজতে চান",
          acceptedTypes: ["noun", "noun_phrase"],
          examples: ["a birthday gift", "size 10 shoes", "a good restaurant"],
        },
      ],
      examples: [
        {
          en: "I'm looking for a birthday gift.",
          bn: "আমি একটি জন্মদিনের উপহার খুঁজছি।",
          slotValues: { THING: "a birthday gift" },
          topicArea: "shopping",
        },
        {
          en: "I'm looking for size 10 shoes.",
          bn: "আমি ১০ সাইজের জুতা খুঁজছি।",
          slotValues: { THING: "size 10 shoes" },
          topicArea: "shopping",
        },
        {
          en: "I'm looking for a good restaurant nearby.",
          bn: "আমি কাছে একটি ভালো রেস্তোরাঁ খুঁজছি।",
          slotValues: { THING: "a good restaurant nearby" },
          topicArea: "food",
        },
        {
          en: "I'm looking for a laptop bag.",
          bn: "আমি একটি ল্যাপটপ ব্যাগ খুঁজছি।",
          slotValues: { THING: "a laptop bag" },
          topicArea: "shopping",
        },
        {
          en: "I'm looking for the electronics section.",
          bn: "আমি ইলেকট্রনিক্স সেকশন খুঁজছি।",
          slotValues: { THING: "the electronics section" },
          topicArea: "shopping",
        },
        {
          en: "I'm looking for a pharmacy.",
          bn: "আমি একটি ফার্মেসি খুঁজছি।",
          slotValues: { THING: "a pharmacy" },
          topicArea: "health",
        },
        {
          en: "I'm looking for a budget hotel.",
          bn: "আমি একটি সাশ্রয়ী হোটেল খুঁজছি।",
          slotValues: { THING: "a budget hotel" },
          topicArea: "travel",
        },
        {
          en: "I'm looking for a black formal shirt.",
          bn: "আমি একটি কালো ফর্মাল শার্ট খুঁজছি।",
          slotValues: { THING: "a black formal shirt" },
          topicArea: "shopping",
        },
        {
          en: "I'm looking for organic vegetables.",
          bn: "আমি জৈব সবজি খুঁজছি।",
          slotValues: { THING: "organic vegetables" },
          topicArea: "food",
        },
        {
          en: "I'm looking for a book on grammar.",
          bn: "আমি ব্যাকরণের উপর একটি বই খুঁজছি।",
          slotValues: { THING: "a book on grammar" },
          topicArea: "education",
        },
        {
          en: "I'm looking for a charger for my phone.",
          bn: "আমি ফোনের জন্য একটি চার্জার খুঁজছি।",
          slotValues: { THING: "a charger for my phone" },
          topicArea: "daily_life",
        },
        {
          en: "I'm looking for a souvenir from this city.",
          bn: "আমি এই শহরের একটি স্মারক খুঁজছি।",
          slotValues: { THING: "a souvenir from this city" },
          topicArea: "travel",
        },
        {
          en: "I'm looking for children's clothing.",
          bn: "আমি বাচ্চাদের জামাকাপড় খুঁজছি।",
          slotValues: { THING: "children's clothing" },
          topicArea: "shopping",
        },
        {
          en: "I'm looking for a part-time job.",
          bn: "আমি একটি খণ্ডকালীন চাকরি খুঁজছি।",
          slotValues: { THING: "a part-time job" },
          topicArea: "work",
        },
        {
          en: "I'm looking for a wedding gift.",
          bn: "আমি একটি বিয়ের উপহার খুঁজছি।",
          slotValues: { THING: "a wedding gift" },
          topicArea: "relationships",
        },
      ],
      formality: "casual",
      difficulty: "beginner",
      usageNote:
        "A very natural way to tell a shopkeeper or someone what you're trying to find. Works in stores, markets, and online.",
      usageNote_bn:
        "দোকানদার বা কাউকে আপনি কী খুঁজছেন তা বলার একটি খুবই স্বাভাবিক উপায়। দোকান, বাজার এবং অনলাইনে কাজ করে।",
      combinableWith: ["T3.5"],
      banglaStructureMap:
        "আমি (Subject) + [THING] (Object) + খুঁজছি (Verb - Progressive)",
    },
    {
      id: "T3.5",
      formula: "Do you have [THING] in [SIZE/COLOR]?",
      formula_bn: "আপনাদের কাছে [আকার/রঙে] [জিনিস] আছে?",
      patternName: "Asking About Variants",
      patternName_bn: "ভ্যারিয়েন্ট জিজ্ঞাসা",
      slots: [
        {
          name: "THING",
          description: "The item you are interested in",
          description_bn: "যে জিনিসটিতে আপনি আগ্রহী",
          acceptedTypes: ["noun", "noun_phrase"],
          examples: ["this dress", "these shoes", "this jacket"],
        },
        {
          name: "SIZE/COLOR",
          description: "A size, color, or other variant specification",
          description_bn: "একটি আকার, রঙ, বা অন্য ভ্যারিয়েন্ট বিবরণ",
          acceptedTypes: ["adjective", "noun"],
          examples: ["red", "medium", "a larger size"],
        },
      ],
      examples: [
        {
          en: "Do you have this dress in red?",
          bn: "আপনাদের কাছে এই ড্রেসটি লাল রঙে আছে?",
          slotValues: { THING: "this dress", "SIZE/COLOR": "red" },
          topicArea: "shopping",
        },
        {
          en: "Do you have these shoes in size 9?",
          bn: "আপনাদের কাছে এই জুতাগুলো ৯ সাইজে আছে?",
          slotValues: { THING: "these shoes", "SIZE/COLOR": "size 9" },
          topicArea: "shopping",
        },
        {
          en: "Do you have this jacket in black?",
          bn: "আপনাদের কাছে এই জ্যাকেটটি কালো রঙে আছে?",
          slotValues: { THING: "this jacket", "SIZE/COLOR": "black" },
          topicArea: "shopping",
        },
        {
          en: "Do you have this shirt in medium?",
          bn: "আপনাদের কাছে এই শার্টটি মিডিয়াম সাইজে আছে?",
          slotValues: { THING: "this shirt", "SIZE/COLOR": "medium" },
          topicArea: "shopping",
        },
        {
          en: "Do you have this bag in brown?",
          bn: "আপনাদের কাছে এই ব্যাগটি বাদামি রঙে আছে?",
          slotValues: { THING: "this bag", "SIZE/COLOR": "brown" },
          topicArea: "shopping",
        },
        {
          en: "Do you have this phone in white?",
          bn: "আপনাদের কাছে এই ফোনটি সাদা রঙে আছে?",
          slotValues: { THING: "this phone", "SIZE/COLOR": "white" },
          topicArea: "shopping",
        },
        {
          en: "Do you have this in a larger size?",
          bn: "আপনাদের কাছে এটি আরও বড় সাইজে আছে?",
          slotValues: { THING: "this", "SIZE/COLOR": "a larger size" },
          topicArea: "shopping",
        },
        {
          en: "Do you have these pants in blue?",
          bn: "আপনাদের কাছে এই প্যান্টগুলো নীল রঙে আছে?",
          slotValues: { THING: "these pants", "SIZE/COLOR": "blue" },
          topicArea: "shopping",
        },
        {
          en: "Do you have this scarf in green?",
          bn: "আপনাদের কাছে এই স্কার্ফটি সবুজ রঙে আছে?",
          slotValues: { THING: "this scarf", "SIZE/COLOR": "green" },
          topicArea: "shopping",
        },
        {
          en: "Do you have this watch in gold?",
          bn: "আপনাদের কাছে এই ঘড়িটি সোনালি রঙে আছে?",
          slotValues: { THING: "this watch", "SIZE/COLOR": "gold" },
          topicArea: "shopping",
        },
        {
          en: "Do you have this in extra large?",
          bn: "আপনাদের কাছে এটি এক্সট্রা লার্জে আছে?",
          slotValues: { THING: "this", "SIZE/COLOR": "extra large" },
          topicArea: "shopping",
        },
        {
          en: "Do you have this hat in small?",
          bn: "আপনাদের কাছে এই টুপিটি ছোট সাইজে আছে?",
          slotValues: { THING: "this hat", "SIZE/COLOR": "small" },
          topicArea: "shopping",
        },
        {
          en: "Do you have this sofa in grey?",
          bn: "আপনাদের কাছে এই সোফাটি ধূসর রঙে আছে?",
          slotValues: { THING: "this sofa", "SIZE/COLOR": "grey" },
          topicArea: "shopping",
        },
        {
          en: "Do you have this in a different color?",
          bn: "আপনাদের কাছে এটি অন্য রঙে আছে?",
          slotValues: { THING: "this", "SIZE/COLOR": "a different color" },
          topicArea: "shopping",
        },
        {
          en: "Do you have this laptop in silver?",
          bn: "আপনাদের কাছে এই ল্যাপটপটি রুপালি রঙে আছে?",
          slotValues: { THING: "this laptop", "SIZE/COLOR": "silver" },
          topicArea: "shopping",
        },
      ],
      formality: "casual",
      difficulty: "beginner",
      usageNote:
        "Essential for shopping when you want a specific variant of a product. Very commonly used in clothing stores.",
      usageNote_bn:
        "কোনো পণ্যের নির্দিষ্ট ভ্যারিয়েন্ট চাইলে কেনাকাটার জন্য অপরিহার্য। পোশাকের দোকানে খুবই সাধারণভাবে ব্যবহৃত।",
      combinableWith: ["T3.4"],
      banglaStructureMap:
        "আপনাদের কাছে (Location) + [SIZE/COLOR]-এ (Variant + Postposition) + [THING] (Object) + আছে (Verb)?",
    },
  ],
};
