import { PatternCategory } from "@/types/pattern";

export const categoryT1: PatternCategory = {
  id: "T1",
  slug: "asking-giving-information",
  name: "Asking for & Giving Information",
  name_bn: "তথ্য জানতে চাওয়া ও দেওয়া",
  description:
    "Learn how to ask for and provide information clearly in everyday English situations.",
  description_bn:
    "দৈনন্দিন ইংরেজি পরিস্থিতিতে স্পষ্টভাবে তথ্য জানতে চাওয়া ও প্রদান করতে শিখুন।",
  icon: "ℹ️",
  group: "T",
  groupName: "Situational Patterns",
  groupName_bn: "পরিস্থিতিগত প্যাটার্ন",
  difficulty: "beginner",
  patterns: [
    {
      id: "T1.1",
      formula: "I'd like information about [THING]",
      formula_bn: "আমি [বিষয়] সম্পর্কে তথ্য চাই",
      patternName: "Requesting Information (Polite)",
      patternName_bn: "তথ্য অনুরোধ (বিনয়ী)",
      slots: [
        {
          name: "THING",
          description: "A topic, subject, or item you want to know about",
          description_bn:
            "একটি বিষয়, প্রসঙ্গ, বা জিনিস যা সম্পর্কে আপনি জানতে চান",
          acceptedTypes: ["noun", "noun_phrase", "topic"],
          examples: ["the train schedule", "your courses", "visa requirements"],
        },
      ],
      examples: [
        {
          en: "I'd like information about the train schedule.",
          bn: "আমি ট্রেনের সময়সূচি সম্পর্কে তথ্য চাই।",
          slotValues: { THING: "the train schedule" },
          topicArea: "travel",
        },
        {
          en: "I'd like information about your courses.",
          bn: "আমি আপনাদের কোর্সগুলো সম্পর্কে তথ্য চাই।",
          slotValues: { THING: "your courses" },
          topicArea: "education",
        },
        {
          en: "I'd like information about visa requirements.",
          bn: "আমি ভিসার শর্তাবলি সম্পর্কে তথ্য চাই।",
          slotValues: { THING: "visa requirements" },
          topicArea: "travel",
        },
        {
          en: "I'd like information about the job opening.",
          bn: "আমি চাকরির শূন্যপদ সম্পর্কে তথ্য চাই।",
          slotValues: { THING: "the job opening" },
          topicArea: "work",
        },
        {
          en: "I'd like information about membership fees.",
          bn: "আমি সদস্যপদ ফি সম্পর্কে তথ্য চাই।",
          slotValues: { THING: "membership fees" },
          topicArea: "daily_life",
        },
        {
          en: "I'd like information about the warranty.",
          bn: "আমি ওয়ারেন্টি সম্পর্কে তথ্য চাই।",
          slotValues: { THING: "the warranty" },
          topicArea: "shopping",
        },
        {
          en: "I'd like information about nearby hospitals.",
          bn: "আমি কাছের হাসপাতালগুলো সম্পর্কে তথ্য চাই।",
          slotValues: { THING: "nearby hospitals" },
          topicArea: "health",
        },
        {
          en: "I'd like information about the return policy.",
          bn: "আমি ফেরত নীতি সম্পর্কে তথ্য চাই।",
          slotValues: { THING: "the return policy" },
          topicArea: "shopping",
        },
        {
          en: "I'd like information about your menu.",
          bn: "আমি আপনাদের মেনু সম্পর্কে তথ্য চাই।",
          slotValues: { THING: "your menu" },
          topicArea: "food",
        },
        {
          en: "I'd like information about the exam schedule.",
          bn: "আমি পরীক্ষার সময়সূচি সম্পর্কে তথ্য চাই।",
          slotValues: { THING: "the exam schedule" },
          topicArea: "education",
        },
        {
          en: "I'd like information about insurance plans.",
          bn: "আমি বীমা পরিকল্পনা সম্পর্কে তথ্য চাই।",
          slotValues: { THING: "insurance plans" },
          topicArea: "health",
        },
        {
          en: "I'd like information about the apartment for rent.",
          bn: "আমি ভাড়ার ফ্ল্যাটটি সম্পর্কে তথ্য চাই।",
          slotValues: { THING: "the apartment for rent" },
          topicArea: "daily_life",
        },
        {
          en: "I'd like information about your delivery options.",
          bn: "আমি আপনাদের ডেলিভারি অপশনগুলো সম্পর্কে তথ্য চাই।",
          slotValues: { THING: "your delivery options" },
          topicArea: "shopping",
        },
        {
          en: "I'd like information about the scholarship program.",
          bn: "আমি বৃত্তি প্রোগ্রাম সম্পর্কে তথ্য চাই।",
          slotValues: { THING: "the scholarship program" },
          topicArea: "education",
        },
        {
          en: "I'd like information about weekend activities.",
          bn: "আমি সপ্তাহান্তের কার্যক্রম সম্পর্কে তথ্য চাই।",
          slotValues: { THING: "weekend activities" },
          topicArea: "daily_life",
        },
      ],
      formality: "polite",
      difficulty: "beginner",
      usageNote:
        "A polite and formal way to ask for information. Suitable for offices, shops, and service counters.",
      usageNote_bn:
        "তথ্য জানতে চাওয়ার একটি বিনয়ী ও আনুষ্ঠানিক উপায়। অফিস, দোকান এবং সেবা কাউন্টারে উপযুক্ত।",
      combinableWith: ["T1.2"],
      banglaStructureMap:
        "আমি (Subject) + [THING] সম্পর্কে (Topic + Postposition) + তথ্য চাই (Object + Verb)",
    },
    {
      id: "T1.2",
      formula: "Can you tell me about [THING]?",
      formula_bn: "আপনি কি আমাকে [বিষয়] সম্পর্কে বলতে পারবেন?",
      patternName: "Asking for Details",
      patternName_bn: "বিস্তারিত জানতে চাওয়া",
      slots: [
        {
          name: "THING",
          description: "A topic or subject you want explained",
          description_bn: "একটি বিষয় বা প্রসঙ্গ যা আপনি ব্যাখ্যা চান",
          acceptedTypes: ["noun", "noun_phrase", "topic"],
          examples: ["this product", "the process", "your experience"],
        },
      ],
      examples: [
        {
          en: "Can you tell me about this product?",
          bn: "আপনি কি আমাকে এই পণ্যটি সম্পর্কে বলতে পারবেন?",
          slotValues: { THING: "this product" },
          topicArea: "shopping",
        },
        {
          en: "Can you tell me about the registration process?",
          bn: "আপনি কি আমাকে নিবন্ধন প্রক্রিয়া সম্পর্কে বলতে পারবেন?",
          slotValues: { THING: "the registration process" },
          topicArea: "education",
        },
        {
          en: "Can you tell me about the bus routes?",
          bn: "আপনি কি আমাকে বাসের রুটগুলো সম্পর্কে বলতে পারবেন?",
          slotValues: { THING: "the bus routes" },
          topicArea: "travel",
        },
        {
          en: "Can you tell me about today's specials?",
          bn: "আপনি কি আমাকে আজকের স্পেশাল আইটেমগুলো সম্পর্কে বলতে পারবেন?",
          slotValues: { THING: "today's specials" },
          topicArea: "food",
        },
        {
          en: "Can you tell me about the side effects?",
          bn: "আপনি কি আমাকে পার্শ্বপ্রতিক্রিয়াগুলো সম্পর্কে বলতে পারবেন?",
          slotValues: { THING: "the side effects" },
          topicArea: "health",
        },
        {
          en: "Can you tell me about the company culture?",
          bn: "আপনি কি আমাকে কোম্পানির সংস্কৃতি সম্পর্কে বলতে পারবেন?",
          slotValues: { THING: "the company culture" },
          topicArea: "work",
        },
        {
          en: "Can you tell me about the neighborhood?",
          bn: "আপনি কি আমাকে এলাকাটি সম্পর্কে বলতে পারবেন?",
          slotValues: { THING: "the neighborhood" },
          topicArea: "daily_life",
        },
        {
          en: "Can you tell me about the payment options?",
          bn: "আপনি কি আমাকে পেমেন্ট অপশনগুলো সম্পর্কে বলতে পারবেন?",
          slotValues: { THING: "the payment options" },
          topicArea: "shopping",
        },
        {
          en: "Can you tell me about your family?",
          bn: "আপনি কি আমাকে আপনার পরিবার সম্পর্কে বলতে পারবেন?",
          slotValues: { THING: "your family" },
          topicArea: "relationships",
        },
        {
          en: "Can you tell me about the homework?",
          bn: "আপনি কি আমাকে হোমওয়ার্ক সম্পর্কে বলতে পারবেন?",
          slotValues: { THING: "the homework" },
          topicArea: "education",
        },
        {
          en: "Can you tell me about your work experience?",
          bn: "আপনি কি আমাকে আপনার কাজের অভিজ্ঞতা সম্পর্কে বলতে পারবেন?",
          slotValues: { THING: "your work experience" },
          topicArea: "work",
        },
        {
          en: "Can you tell me about the check-in time?",
          bn: "আপনি কি আমাকে চেক-ইনের সময় সম্পর্কে বলতে পারবেন?",
          slotValues: { THING: "the check-in time" },
          topicArea: "travel",
        },
        {
          en: "Can you tell me about the treatment options?",
          bn: "আপনি কি আমাকে চিকিৎসার বিকল্পগুলো সম্পর্কে বলতে পারবেন?",
          slotValues: { THING: "the treatment options" },
          topicArea: "health",
        },
        {
          en: "Can you tell me about the ingredients?",
          bn: "আপনি কি আমাকে উপকরণগুলো সম্পর্কে বলতে পারবেন?",
          slotValues: { THING: "the ingredients" },
          topicArea: "food",
        },
        {
          en: "Can you tell me about the event schedule?",
          bn: "আপনি কি আমাকে অনুষ্ঠানের সময়সূচি সম্পর্কে বলতে পারবেন?",
          slotValues: { THING: "the event schedule" },
          topicArea: "daily_life",
        },
      ],
      formality: "polite",
      difficulty: "beginner",
      usageNote:
        "A friendly and natural way to ask for information in conversation. Works in both casual and semi-formal contexts.",
      usageNote_bn:
        "কথোপকথনে তথ্য জানতে চাওয়ার একটি বন্ধুত্বপূর্ণ ও স্বাভাবিক উপায়। অনানুষ্ঠানিক ও আধা-আনুষ্ঠানিক উভয় পরিবেশে কাজ করে।",
      combinableWith: ["T1.1"],
      banglaStructureMap:
        "আপনি কি (Subject + Question) + আমাকে (Indirect Object) + [THING] সম্পর্কে (Topic) + বলতে পারবেন (Verb)?",
    },
    {
      id: "T1.3",
      formula: "Here's the information you asked for",
      formula_bn: "এই যে আপনি যে তথ্য চেয়েছিলেন",
      patternName: "Providing Requested Information",
      patternName_bn: "অনুরোধকৃত তথ্য প্রদান",
      slots: [],
      examples: [
        {
          en: "Here's the information you asked for.",
          bn: "এই যে আপনি যে তথ্য চেয়েছিলেন।",
          slotValues: {},
          topicArea: "work",
        },
        {
          en: "Here's the information you asked for about the prices.",
          bn: "এই যে আপনি দামগুলো সম্পর্কে যে তথ্য চেয়েছিলেন।",
          slotValues: {},
          topicArea: "shopping",
        },
        {
          en: "Here's the information you asked for regarding the schedule.",
          bn: "এই যে সময়সূচি সম্পর্কে আপনি যে তথ্য চেয়েছিলেন।",
          slotValues: {},
          topicArea: "education",
        },
        {
          en: "Here's the information you asked for about the flight.",
          bn: "এই যে ফ্লাইট সম্পর্কে আপনি যে তথ্য চেয়েছিলেন।",
          slotValues: {},
          topicArea: "travel",
        },
        {
          en: "Here's the information you asked for about the medicine.",
          bn: "এই যে ওষুধ সম্পর্কে আপনি যে তথ্য চেয়েছিলেন।",
          slotValues: {},
          topicArea: "health",
        },
        {
          en: "Here's the information you asked for about the project.",
          bn: "এই যে প্রজেক্ট সম্পর্কে আপনি যে তথ্য চেয়েছিলেন।",
          slotValues: {},
          topicArea: "work",
        },
        {
          en: "Here's the information you asked for about the restaurant.",
          bn: "এই যে রেস্তোরাঁ সম্পর্কে আপনি যে তথ্য চেয়েছিলেন।",
          slotValues: {},
          topicArea: "food",
        },
        {
          en: "Here's the information you asked for about the meeting.",
          bn: "এই যে মিটিং সম্পর্কে আপনি যে তথ্য চেয়েছিলেন।",
          slotValues: {},
          topicArea: "work",
        },
        {
          en: "Here's the information you asked for about the course fees.",
          bn: "এই যে কোর্স ফি সম্পর্কে আপনি যে তথ্য চেয়েছিলেন।",
          slotValues: {},
          topicArea: "education",
        },
        {
          en: "Here's the information you asked for about the hotel.",
          bn: "এই যে হোটেল সম্পর্কে আপনি যে তথ্য চেয়েছিলেন।",
          slotValues: {},
          topicArea: "travel",
        },
        {
          en: "Here's the information you asked for about the test results.",
          bn: "এই যে পরীক্ষার ফলাফল সম্পর্কে আপনি যে তথ্য চেয়েছিলেন।",
          slotValues: {},
          topicArea: "health",
        },
        {
          en: "Here's the information you asked for about the warranty.",
          bn: "এই যে ওয়ারেন্টি সম্পর্কে আপনি যে তথ্য চেয়েছিলেন।",
          slotValues: {},
          topicArea: "shopping",
        },
        {
          en: "Here's the information you asked for about the event.",
          bn: "এই যে অনুষ্ঠান সম্পর্কে আপনি যে তথ্য চেয়েছিলেন।",
          slotValues: {},
          topicArea: "daily_life",
        },
        {
          en: "Here's the information you asked for about the recipe.",
          bn: "এই যে রেসিপি সম্পর্কে আপনি যে তথ্য চেয়েছিলেন।",
          slotValues: {},
          topicArea: "food",
        },
        {
          en: "Here's the information you asked for about the internship.",
          bn: "এই যে ইন্টার্নশিপ সম্পর্কে আপনি যে তথ্য চেয়েছিলেন।",
          slotValues: {},
          topicArea: "work",
        },
      ],
      formality: "polite",
      difficulty: "beginner",
      usageNote:
        "Used when handing over or presenting information someone previously requested. Very common in professional and service settings.",
      usageNote_bn:
        "কেউ আগে তথ্য চাইলে তা দেওয়ার সময় ব্যবহৃত হয়। পেশাদার ও সেবামূলক পরিবেশে খুবই সাধারণ।",
      combinableWith: ["T1.1"],
      responsePatterns: ["T1.1"],
      banglaStructureMap:
        "এই যে (Presentative) + আপনি যে তথ্য চেয়েছিলেন (Relative clause)",
    },
    {
      id: "T1.4",
      formula: "I was wondering about [THING]",
      formula_bn: "আমি [বিষয়] সম্পর্কে জানতে চাচ্ছিলাম",
      patternName: "Soft Information Request",
      patternName_bn: "নরম তথ্য অনুরোধ",
      slots: [
        {
          name: "THING",
          description:
            "A topic or question you want to politely bring up",
          description_bn:
            "একটি বিষয় বা প্রশ্ন যা আপনি বিনয়ের সাথে উত্থাপন করতে চান",
          acceptedTypes: ["noun", "noun_phrase", "topic"],
          examples: [
            "the deadline",
            "your availability",
            "the price",
          ],
        },
      ],
      examples: [
        {
          en: "I was wondering about the deadline.",
          bn: "আমি সময়সীমা সম্পর্কে জানতে চাচ্ছিলাম।",
          slotValues: { THING: "the deadline" },
          topicArea: "work",
        },
        {
          en: "I was wondering about your availability.",
          bn: "আমি আপনার সময় সম্পর্কে জানতে চাচ্ছিলাম।",
          slotValues: { THING: "your availability" },
          topicArea: "daily_life",
        },
        {
          en: "I was wondering about the price.",
          bn: "আমি দাম সম্পর্কে জানতে চাচ্ছিলাম।",
          slotValues: { THING: "the price" },
          topicArea: "shopping",
        },
        {
          en: "I was wondering about the admission process.",
          bn: "আমি ভর্তি প্রক্রিয়া সম্পর্কে জানতে চাচ্ছিলাম।",
          slotValues: { THING: "the admission process" },
          topicArea: "education",
        },
        {
          en: "I was wondering about the weather forecast.",
          bn: "আমি আবহাওয়ার পূর্বাভাস সম্পর্কে জানতে চাচ্ছিলাম।",
          slotValues: { THING: "the weather forecast" },
          topicArea: "daily_life",
        },
        {
          en: "I was wondering about the parking situation.",
          bn: "আমি পার্কিংয়ের ব্যবস্থা সম্পর্কে জানতে চাচ্ছিলাম।",
          slotValues: { THING: "the parking situation" },
          topicArea: "travel",
        },
        {
          en: "I was wondering about the dosage.",
          bn: "আমি ওষুধের মাত্রা সম্পর্কে জানতে চাচ্ছিলাম।",
          slotValues: { THING: "the dosage" },
          topicArea: "health",
        },
        {
          en: "I was wondering about the menu options.",
          bn: "আমি মেনুর বিকল্পগুলো সম্পর্কে জানতে চাচ্ছিলাম।",
          slotValues: { THING: "the menu options" },
          topicArea: "food",
        },
        {
          en: "I was wondering about the salary range.",
          bn: "আমি বেতনের পরিসীমা সম্পর্কে জানতে চাচ্ছিলাম।",
          slotValues: { THING: "the salary range" },
          topicArea: "work",
        },
        {
          en: "I was wondering about the refund policy.",
          bn: "আমি ফেরত নীতি সম্পর্কে জানতে চাচ্ছিলাম।",
          slotValues: { THING: "the refund policy" },
          topicArea: "shopping",
        },
        {
          en: "I was wondering about the class schedule.",
          bn: "আমি ক্লাসের সময়সূচি সম্পর্কে জানতে চাচ্ছিলাম।",
          slotValues: { THING: "the class schedule" },
          topicArea: "education",
        },
        {
          en: "I was wondering about your trip.",
          bn: "আমি আপনার ভ্রমণ সম্পর্কে জানতে চাচ্ছিলাম।",
          slotValues: { THING: "your trip" },
          topicArea: "travel",
        },
        {
          en: "I was wondering about the vaccination schedule.",
          bn: "আমি টিকার সময়সূচি সম্পর্কে জানতে চাচ্ছিলাম।",
          slotValues: { THING: "the vaccination schedule" },
          topicArea: "health",
        },
        {
          en: "I was wondering about the opening hours.",
          bn: "আমি খোলার সময় সম্পর্কে জানতে চাচ্ছিলাম।",
          slotValues: { THING: "the opening hours" },
          topicArea: "daily_life",
        },
        {
          en: "I was wondering about your wedding plans.",
          bn: "আমি আপনার বিয়ের পরিকল্পনা সম্পর্কে জানতে চাচ্ছিলাম।",
          slotValues: { THING: "your wedding plans" },
          topicArea: "relationships",
        },
      ],
      formality: "polite",
      difficulty: "beginner",
      usageNote:
        "This is a very soft and indirect way to ask for information. The past continuous makes it sound less demanding.",
      usageNote_bn:
        "এটি তথ্য জানতে চাওয়ার একটি খুবই নরম ও পরোক্ষ উপায়। অতীত ধারাবাহিক কাল এটিকে কম দাবিদার করে তোলে।",
      combinableWith: ["T1.2"],
      banglaStructureMap:
        "আমি (Subject) + [THING] সম্পর্কে (Topic + Postposition) + জানতে চাচ্ছিলাম (Verb)",
    },
    {
      id: "T1.5",
      formula: "Let me explain [THING]",
      formula_bn: "আমাকে [বিষয়] ব্যাখ্যা করতে দিন",
      patternName: "Offering an Explanation",
      patternName_bn: "ব্যাখ্যা দেওয়া",
      slots: [
        {
          name: "THING",
          description:
            "A topic, concept, or situation you want to clarify for someone",
          description_bn:
            "একটি বিষয়, ধারণা, বা পরিস্থিতি যা আপনি কাউকে স্পষ্ট করতে চান",
          acceptedTypes: ["noun", "noun_phrase", "topic"],
          examples: ["the procedure", "how it works", "the situation"],
        },
      ],
      examples: [
        {
          en: "Let me explain the procedure.",
          bn: "আমাকে পদ্ধতিটি ব্যাখ্যা করতে দিন।",
          slotValues: { THING: "the procedure" },
          topicArea: "work",
        },
        {
          en: "Let me explain how it works.",
          bn: "আমাকে এটি কীভাবে কাজ করে ব্যাখ্যা করতে দিন।",
          slotValues: { THING: "how it works" },
          topicArea: "daily_life",
        },
        {
          en: "Let me explain the situation.",
          bn: "আমাকে পরিস্থিতিটি ব্যাখ্যা করতে দিন।",
          slotValues: { THING: "the situation" },
          topicArea: "daily_life",
        },
        {
          en: "Let me explain the rules.",
          bn: "আমাকে নিয়মগুলো ব্যাখ্যা করতে দিন।",
          slotValues: { THING: "the rules" },
          topicArea: "education",
        },
        {
          en: "Let me explain the directions.",
          bn: "আমাকে দিকনির্দেশনা ব্যাখ্যা করতে দিন।",
          slotValues: { THING: "the directions" },
          topicArea: "travel",
        },
        {
          en: "Let me explain the symptoms.",
          bn: "আমাকে উপসর্গগুলো ব্যাখ্যা করতে দিন।",
          slotValues: { THING: "the symptoms" },
          topicArea: "health",
        },
        {
          en: "Let me explain the recipe.",
          bn: "আমাকে রেসিপিটি ব্যাখ্যা করতে দিন।",
          slotValues: { THING: "the recipe" },
          topicArea: "food",
        },
        {
          en: "Let me explain the discount offer.",
          bn: "আমাকে ছাড়ের অফারটি ব্যাখ্যা করতে দিন।",
          slotValues: { THING: "the discount offer" },
          topicArea: "shopping",
        },
        {
          en: "Let me explain the benefits.",
          bn: "আমাকে সুবিধাগুলো ব্যাখ্যা করতে দিন।",
          slotValues: { THING: "the benefits" },
          topicArea: "work",
        },
        {
          en: "Let me explain the assignment.",
          bn: "আমাকে অ্যাসাইনমেন্টটি ব্যাখ্যা করতে দিন।",
          slotValues: { THING: "the assignment" },
          topicArea: "education",
        },
        {
          en: "Let me explain the booking process.",
          bn: "আমাকে বুকিং প্রক্রিয়া ব্যাখ্যা করতে দিন।",
          slotValues: { THING: "the booking process" },
          topicArea: "travel",
        },
        {
          en: "Let me explain the dosage instructions.",
          bn: "আমাকে ওষুধের মাত্রার নির্দেশনা ব্যাখ্যা করতে দিন।",
          slotValues: { THING: "the dosage instructions" },
          topicArea: "health",
        },
        {
          en: "Let me explain the reason for the delay.",
          bn: "আমাকে বিলম্বের কারণটি ব্যাখ্যা করতে দিন।",
          slotValues: { THING: "the reason for the delay" },
          topicArea: "work",
        },
        {
          en: "Let me explain the difference between the two.",
          bn: "আমাকে দুটোর মধ্যে পার্থক্যটি ব্যাখ্যা করতে দিন।",
          slotValues: { THING: "the difference between the two" },
          topicArea: "shopping",
        },
        {
          en: "Let me explain my point of view.",
          bn: "আমাকে আমার দৃষ্টিভঙ্গি ব্যাখ্যা করতে দিন।",
          slotValues: { THING: "my point of view" },
          topicArea: "relationships",
        },
      ],
      formality: "polite",
      difficulty: "beginner",
      usageNote:
        "A helpful way to introduce an explanation. It signals that you're about to provide clarity on a topic.",
      usageNote_bn:
        "ব্যাখ্যা শুরু করার একটি সহায়ক উপায়। এটি ইঙ্গিত দেয় যে আপনি একটি বিষয়ে স্পষ্টতা দিতে চলেছেন।",
      combinableWith: ["T1.3"],
      banglaStructureMap:
        "আমাকে (Subject + Particle) + [THING] (Object) + ব্যাখ্যা করতে দিন (Verb + Imperative)",
    },
  ],
};
