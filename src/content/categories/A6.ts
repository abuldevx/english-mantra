import { PatternCategory } from "@/types/pattern";

export const categoryA6: PatternCategory = {
  id: "A6",
  slug: "expressing-priorities",
  name: "Expressing Priorities",
  name_bn: "অগ্রাধিকার প্রকাশ করা",
  description:
    "Learn how to express what matters most, what comes first, and what your priorities are.",
  description_bn:
    "কোনটি সবচেয়ে গুরুত্বপূর্ণ, কোনটি আগে আসে এবং আপনার অগ্রাধিকার কী তা প্রকাশ করতে শিখুন।",
  icon: "🥇",
  group: "A",
  groupName: "Wanting, Needing & Preferences",
  groupName_bn: "চাওয়া, প্রয়োজন এবং পছন্দ",
  difficulty: "intermediate",
  prerequisites: ["A1", "A5"],
  patterns: [
    {
      id: "A6.1",
      formula: "The most important thing is [THING]",
      formula_bn: "সবচেয়ে গুরুত্বপূর্ণ বিষয় হলো [জিনিস]",
      patternName: "Stating Top Priority",
      patternName_bn: "শীর্ষ অগ্রাধিকার জানানো",
      slots: [
        {
          name: "THING",
          description:
            "A noun, noun phrase, gerund, or clause stating the priority",
          description_bn:
            "একটি বিশেষ্য, বিশেষ্য পদবন্ধ, জেরান্ড, বা উপবাক্য যা অগ্রাধিকার জানায়",
          acceptedTypes: ["noun", "gerund", "clause"],
          examples: ["your health", "staying focused", "that we finish on time"],
        },
      ],
      examples: [
        {
          en: "The most important thing is your health.",
          bn: "সবচেয়ে গুরুত্বপূর্ণ বিষয় হলো তোমার স্বাস্থ্য।",
          slotValues: { THING: "your health" },
          topicArea: "health",
        },
        {
          en: "The most important thing is staying focused.",
          bn: "সবচেয়ে গুরুত্বপূর্ণ বিষয় হলো মনোযোগী থাকা।",
          slotValues: { THING: "staying focused" },
          topicArea: "work",
        },
        {
          en: "The most important thing is that we finish on time.",
          bn: "সবচেয়ে গুরুত্বপূর্ণ বিষয় হলো আমরা যেন সময়মতো শেষ করি।",
          slotValues: { THING: "that we finish on time" },
          topicArea: "work",
        },
        {
          en: "The most important thing is family.",
          bn: "সবচেয়ে গুরুত্বপূর্ণ বিষয় হলো পরিবার।",
          slotValues: { THING: "family" },
          topicArea: "relationships",
        },
        {
          en: "The most important thing is getting a good education.",
          bn: "সবচেয়ে গুরুত্বপূর্ণ বিষয় হলো ভালো শিক্ষা পাওয়া।",
          slotValues: { THING: "getting a good education" },
          topicArea: "education",
        },
        {
          en: "The most important thing is safety when traveling.",
          bn: "সবচেয়ে গুরুত্বপূর্ণ বিষয় হলো ভ্রমণের সময় নিরাপত্তা।",
          slotValues: { THING: "safety when traveling" },
          topicArea: "travel",
        },
        {
          en: "The most important thing is eating healthy.",
          bn: "সবচেয়ে গুরুত্বপূর্ণ বিষয় হলো স্বাস্থ্যকর খাওয়া।",
          slotValues: { THING: "eating healthy" },
          topicArea: "food",
        },
        {
          en: "The most important thing is being happy.",
          bn: "সবচেয়ে গুরুত্বপূর্ণ বিষয় হলো সুখী থাকা।",
          slotValues: { THING: "being happy" },
          topicArea: "daily_life",
        },
        {
          en: "The most important thing is quality, not price.",
          bn: "সবচেয়ে গুরুত্বপূর্ণ বিষয় হলো মান, দাম নয়।",
          slotValues: { THING: "quality, not price" },
          topicArea: "shopping",
        },
        {
          en: "The most important thing is trust in a relationship.",
          bn: "সবচেয়ে গুরুত্বপূর্ণ বিষয় হলো সম্পর্কে বিশ্বাস।",
          slotValues: { THING: "trust in a relationship" },
          topicArea: "relationships",
        },
        {
          en: "The most important thing is keeping the team motivated.",
          bn: "সবচেয়ে গুরুত্বপূর্ণ বিষয় হলো দলকে উৎসাহিত রাখা।",
          slotValues: { THING: "keeping the team motivated" },
          topicArea: "work",
        },
        {
          en: "The most important thing is regular exercise.",
          bn: "সবচেয়ে গুরুত্বপূর্ণ বিষয় হলো নিয়মিত ব্যায়াম।",
          slotValues: { THING: "regular exercise" },
          topicArea: "health",
        },
        {
          en: "The most important thing is that everyone understands.",
          bn: "সবচেয়ে গুরুত্বপূর্ণ বিষয় হলো সবাই যেন বোঝে।",
          slotValues: { THING: "that everyone understands" },
          topicArea: "education",
        },
        {
          en: "The most important thing is enjoying the journey.",
          bn: "সবচেয়ে গুরুত্বপূর্ণ বিষয় হলো যাত্রা উপভোগ করা।",
          slotValues: { THING: "enjoying the journey" },
          topicArea: "travel",
        },
        {
          en: "The most important thing is staying true to yourself.",
          bn: "সবচেয়ে গুরুত্বপূর্ণ বিষয় হলো নিজের প্রতি সৎ থাকা।",
          slotValues: { THING: "staying true to yourself" },
          topicArea: "daily_life",
        },
      ],
      formality: "polite",
      difficulty: "intermediate",
      usageNote:
        "A clear, emphatic way to state what matters most. Can be followed by a supporting reason.",
      usageNote_bn:
        "সবচেয়ে গুরুত্বপূর্ণ বিষয় বলার একটি স্পষ্ট, জোরালো উপায়। পরে একটি সমর্থনকারী কারণ দেওয়া যায়।",
      combinableWith: ["A6.3"],
      banglaStructureMap:
        "সবচেয়ে গুরুত্বপূর্ণ বিষয় (Subject) + হলো (Copula) + [THING] (Complement)",
    },
    {
      id: "A6.2",
      formula: "[THING] comes first",
      formula_bn: "[জিনিস] সবার আগে",
      patternName: "First Priority",
      patternName_bn: "প্রথম অগ্রাধিকার",
      slots: [
        {
          name: "THING",
          description: "A noun or noun phrase that is your first priority",
          description_bn:
            "একটি বিশেষ্য বা বিশেষ্য পদবন্ধ যা আপনার প্রথম অগ্রাধিকার",
          acceptedTypes: ["noun"],
          examples: ["Family", "Safety", "My studies"],
        },
      ],
      examples: [
        {
          en: "Family comes first.",
          bn: "পরিবার সবার আগে।",
          slotValues: { THING: "Family" },
          topicArea: "relationships",
        },
        {
          en: "Safety comes first.",
          bn: "নিরাপত্তা সবার আগে।",
          slotValues: { THING: "Safety" },
          topicArea: "daily_life",
        },
        {
          en: "My studies come first.",
          bn: "আমার পড়াশোনা সবার আগে।",
          slotValues: { THING: "My studies" },
          topicArea: "education",
        },
        {
          en: "Health comes first.",
          bn: "স্বাস্থ্য সবার আগে।",
          slotValues: { THING: "Health" },
          topicArea: "health",
        },
        {
          en: "Customer satisfaction comes first.",
          bn: "গ্রাহক সন্তুষ্টি সবার আগে।",
          slotValues: { THING: "Customer satisfaction" },
          topicArea: "work",
        },
        {
          en: "Quality comes first.",
          bn: "মান সবার আগে।",
          slotValues: { THING: "Quality" },
          topicArea: "shopping",
        },
        {
          en: "My children come first.",
          bn: "আমার সন্তানরা সবার আগে।",
          slotValues: { THING: "My children" },
          topicArea: "relationships",
        },
        {
          en: "Nutrition comes first.",
          bn: "পুষ্টি সবার আগে।",
          slotValues: { THING: "Nutrition" },
          topicArea: "food",
        },
        {
          en: "Preparation comes first.",
          bn: "প্রস্তুতি সবার আগে।",
          slotValues: { THING: "Preparation" },
          topicArea: "travel",
        },
        {
          en: "My career comes first right now.",
          bn: "এই মুহূর্তে আমার ক্যারিয়ার সবার আগে।",
          slotValues: { THING: "My career" },
          topicArea: "work",
        },
        {
          en: "Mental health comes first.",
          bn: "মানসিক স্বাস্থ্য সবার আগে।",
          slotValues: { THING: "Mental health" },
          topicArea: "health",
        },
        {
          en: "Your happiness comes first.",
          bn: "তোমার সুখ সবার আগে।",
          slotValues: { THING: "Your happiness" },
          topicArea: "relationships",
        },
        {
          en: "Education comes first in our family.",
          bn: "আমাদের পরিবারে শিক্ষা সবার আগে।",
          slotValues: { THING: "Education" },
          topicArea: "education",
        },
        {
          en: "Freshness comes first when buying food.",
          bn: "খাবার কেনার সময় তাজা হওয়া সবার আগে।",
          slotValues: { THING: "Freshness" },
          topicArea: "food",
        },
        {
          en: "Comfort comes first when choosing shoes.",
          bn: "জুতো বাছাইয়ে আরাম সবার আগে।",
          slotValues: { THING: "Comfort" },
          topicArea: "shopping",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "Short and punchy. Very natural in everyday speech to state what you prioritize.",
      usageNote_bn:
        "সংক্ষিপ্ত এবং জোরালো। আপনি কাকে/কীসে অগ্রাধিকার দেন তা বলার জন্য দৈনন্দিন কথায় খুবই স্বাভাবিক।",
      combinableWith: ["A6.1"],
      banglaStructureMap: "[THING] (Subject) + সবার আগে (Adverb of priority)",
    },
    {
      id: "A6.3",
      formula: "My top priority is [THING]",
      formula_bn: "আমার শীর্ষ অগ্রাধিকার হলো [জিনিস]",
      patternName: "Explicit Priority Statement",
      patternName_bn: "স্পষ্ট অগ্রাধিকার বিবৃতি",
      slots: [
        {
          name: "THING",
          description:
            "A noun, noun phrase, or gerund phrase stating your top priority",
          description_bn:
            "একটি বিশেষ্য, বিশেষ্য পদবন্ধ, বা জেরান্ড পদবন্ধ যা আপনার শীর্ষ অগ্রাধিকার জানায়",
          acceptedTypes: ["noun", "gerund"],
          examples: [
            "getting promoted",
            "my family's well-being",
            "saving money",
          ],
        },
      ],
      examples: [
        {
          en: "My top priority is getting promoted.",
          bn: "আমার শীর্ষ অগ্রাধিকার হলো পদোন্নতি পাওয়া।",
          slotValues: { THING: "getting promoted" },
          topicArea: "work",
        },
        {
          en: "My top priority is my family's well-being.",
          bn: "আমার শীর্ষ অগ্রাধিকার হলো আমার পরিবারের মঙ্গল।",
          slotValues: { THING: "my family's well-being" },
          topicArea: "relationships",
        },
        {
          en: "My top priority is saving money.",
          bn: "আমার শীর্ষ অগ্রাধিকার হলো টাকা জমানো।",
          slotValues: { THING: "saving money" },
          topicArea: "shopping",
        },
        {
          en: "My top priority is learning English.",
          bn: "আমার শীর্ষ অগ্রাধিকার হলো ইংরেজি শেখা।",
          slotValues: { THING: "learning English" },
          topicArea: "education",
        },
        {
          en: "My top priority is staying healthy.",
          bn: "আমার শীর্ষ অগ্রাধিকার হলো সুস্থ থাকা।",
          slotValues: { THING: "staying healthy" },
          topicArea: "health",
        },
        {
          en: "My top priority is finding a good hotel.",
          bn: "আমার শীর্ষ অগ্রাধিকার হলো একটি ভালো হোটেল খুঁজে পাওয়া।",
          slotValues: { THING: "finding a good hotel" },
          topicArea: "travel",
        },
        {
          en: "My top priority is eating properly.",
          bn: "আমার শীর্ষ অগ্রাধিকার হলো ঠিকমতো খাওয়া।",
          slotValues: { THING: "eating properly" },
          topicArea: "food",
        },
        {
          en: "My top priority is finishing this project.",
          bn: "আমার শীর্ষ অগ্রাধিকার হলো এই প্রকল্পটি শেষ করা।",
          slotValues: { THING: "finishing this project" },
          topicArea: "work",
        },
        {
          en: "My top priority is spending time with my kids.",
          bn: "আমার শীর্ষ অগ্রাধিকার হলো আমার বাচ্চাদের সাথে সময় কাটানো।",
          slotValues: { THING: "spending time with my kids" },
          topicArea: "relationships",
        },
        {
          en: "My top priority is passing the exam.",
          bn: "আমার শীর্ষ অগ্রাধিকার হলো পরীক্ষায় পাশ করা।",
          slotValues: { THING: "passing the exam" },
          topicArea: "education",
        },
        {
          en: "My top priority is reducing stress.",
          bn: "আমার শীর্ষ অগ্রাধিকার হলো মানসিক চাপ কমানো।",
          slotValues: { THING: "reducing stress" },
          topicArea: "health",
        },
        {
          en: "My top priority is getting the best deal.",
          bn: "আমার শীর্ষ অগ্রাধিকার হলো সেরা দাম পাওয়া।",
          slotValues: { THING: "getting the best deal" },
          topicArea: "shopping",
        },
        {
          en: "My top priority is making a good first impression.",
          bn: "আমার শীর্ষ অগ্রাধিকার হলো ভালো প্রথম ধারণা তৈরি করা।",
          slotValues: { THING: "making a good first impression" },
          topicArea: "work",
        },
        {
          en: "My top priority is seeing the Eiffel Tower.",
          bn: "আমার শীর্ষ অগ্রাধিকার হলো আইফেল টাওয়ার দেখা।",
          slotValues: { THING: "seeing the Eiffel Tower" },
          topicArea: "travel",
        },
        {
          en: "My top priority is maintaining a balanced diet.",
          bn: "আমার শীর্ষ অগ্রাধিকার হলো সুষম খাদ্যাভ্যাস বজায় রাখা।",
          slotValues: { THING: "maintaining a balanced diet" },
          topicArea: "food",
        },
      ],
      formality: "polite",
      difficulty: "intermediate",
      usageNote:
        "Clear and professional-sounding. Common in both casual and formal settings.",
      usageNote_bn:
        "স্পষ্ট এবং পেশাদার শোনায়। সাধারণ এবং আনুষ্ঠানিক উভয় পরিবেশেই সাধারণ।",
      combinableWith: ["A6.1", "A6.2"],
      banglaStructureMap:
        "আমার শীর্ষ অগ্রাধিকার (Subject) + হলো (Copula) + [THING] (Complement)",
    },
    {
      id: "A6.4",
      formula: "[THING] matters more than [THING]",
      formula_bn: "[জিনিস]-এর চেয়ে [জিনিস] বেশি গুরুত্বপূর্ণ",
      patternName: "Comparative Priority",
      patternName_bn: "তুলনামূলক অগ্রাধিকার",
      slots: [
        {
          name: "THING",
          description: "Two nouns or noun phrases being compared in importance",
          description_bn:
            "গুরুত্বের দিক থেকে তুলনা করা হচ্ছে এমন দুটি বিশেষ্য বা বিশেষ্য পদবন্ধ",
          acceptedTypes: ["noun"],
          examples: ["Health", "money", "Experience", "a degree"],
        },
      ],
      examples: [
        {
          en: "Health matters more than money.",
          bn: "টাকার চেয়ে স্বাস্থ্য বেশি গুরুত্বপূর্ণ।",
          slotValues: { THING: "Health | money" },
          topicArea: "health",
        },
        {
          en: "Experience matters more than a degree.",
          bn: "ডিগ্রির চেয়ে অভিজ্ঞতা বেশি গুরুত্বপূর্ণ।",
          slotValues: { THING: "Experience | a degree" },
          topicArea: "work",
        },
        {
          en: "Kindness matters more than looks.",
          bn: "চেহারার চেয়ে দয়া বেশি গুরুত্বপূর্ণ।",
          slotValues: { THING: "Kindness | looks" },
          topicArea: "relationships",
        },
        {
          en: "Understanding matters more than memorizing.",
          bn: "মুখস্থ করার চেয়ে বোঝা বেশি গুরুত্বপূর্ণ।",
          slotValues: { THING: "Understanding | memorizing" },
          topicArea: "education",
        },
        {
          en: "Taste matters more than appearance.",
          bn: "চেহারার চেয়ে স্বাদ বেশি গুরুত্বপূর্ণ।",
          slotValues: { THING: "Taste | appearance" },
          topicArea: "food",
        },
        {
          en: "Safety matters more than speed.",
          bn: "গতির চেয়ে নিরাপত্তা বেশি গুরুত্বপূর্ণ।",
          slotValues: { THING: "Safety | speed" },
          topicArea: "travel",
        },
        {
          en: "Quality matters more than quantity.",
          bn: "পরিমাণের চেয়ে মান বেশি গুরুত্বপূর্ণ।",
          slotValues: { THING: "Quality | quantity" },
          topicArea: "shopping",
        },
        {
          en: "Happiness matters more than success.",
          bn: "সাফল্যের চেয়ে সুখ বেশি গুরুত্বপূর্ণ।",
          slotValues: { THING: "Happiness | success" },
          topicArea: "daily_life",
        },
        {
          en: "Teamwork matters more than individual effort.",
          bn: "ব্যক্তিগত প্রচেষ্টার চেয়ে দলগত কাজ বেশি গুরুত্বপূর্ণ।",
          slotValues: { THING: "Teamwork | individual effort" },
          topicArea: "work",
        },
        {
          en: "Sleep matters more than you think.",
          bn: "আপনি যা মনে করেন তার চেয়ে ঘুম বেশি গুরুত্বপূর্ণ।",
          slotValues: { THING: "Sleep | you think" },
          topicArea: "health",
        },
        {
          en: "Loyalty matters more than talent.",
          bn: "প্রতিভার চেয়ে আনুগত্য বেশি গুরুত্বপূর্ণ।",
          slotValues: { THING: "Loyalty | talent" },
          topicArea: "relationships",
        },
        {
          en: "Practice matters more than theory.",
          bn: "তত্ত্বের চেয়ে অনুশীলন বেশি গুরুত্বপূর্ণ।",
          slotValues: { THING: "Practice | theory" },
          topicArea: "education",
        },
        {
          en: "The experience matters more than the destination.",
          bn: "গন্তব্যের চেয়ে অভিজ্ঞতা বেশি গুরুত্বপূর্ণ।",
          slotValues: { THING: "The experience | the destination" },
          topicArea: "travel",
        },
        {
          en: "Freshness matters more than brand.",
          bn: "ব্র্যান্ডের চেয়ে তাজা হওয়া বেশি গুরুত্বপূর্ণ।",
          slotValues: { THING: "Freshness | brand" },
          topicArea: "food",
        },
        {
          en: "Durability matters more than style.",
          bn: "স্টাইলের চেয়ে স্থায়িত্ব বেশি গুরুত্বপূর্ণ।",
          slotValues: { THING: "Durability | style" },
          topicArea: "shopping",
        },
      ],
      formality: "polite",
      difficulty: "intermediate",
      usageNote:
        "A natural way to compare the importance of two things. Can be used to share values or opinions.",
      usageNote_bn:
        "দুটি জিনিসের গুরুত্ব তুলনা করার একটি স্বাভাবিক উপায়। মূল্যবোধ বা মতামত শেয়ার করতে ব্যবহার করা যায়।",
      combinableWith: ["A6.1", "A6.2"],
      banglaStructureMap:
        "[THING2]-এর চেয়ে (Comparison) + [THING1] (Subject) + বেশি গুরুত্বপূর্ণ (Predicate)",
    },
    {
      id: "A6.5",
      formula: "Above all, I [ACTION]",
      formula_bn: "সর্বোপরি, আমি [কাজ] করি",
      patternName: "Above All Else",
      patternName_bn: "সবকিছুর ঊর্ধ্বে",
      slots: [
        {
          name: "ACTION",
          description:
            "A verb phrase describing the action or value you prioritize above everything",
          description_bn:
            "একটি ক্রিয়া পদবন্ধ যা আপনি সবকিছুর ঊর্ধ্বে রাখেন এমন কাজ বা মূল্যবোধ বর্ণনা করে",
          acceptedTypes: ["verb"],
          examples: [
            "value honesty",
            "want my children to be happy",
            "believe in hard work",
          ],
        },
      ],
      examples: [
        {
          en: "Above all, I value honesty.",
          bn: "সর্বোপরি, আমি সততাকে মূল্য দিই।",
          slotValues: { ACTION: "value honesty" },
          topicArea: "relationships",
        },
        {
          en: "Above all, I want my children to be happy.",
          bn: "সর্বোপরি, আমি চাই আমার সন্তানরা সুখী হোক।",
          slotValues: { ACTION: "want my children to be happy" },
          topicArea: "relationships",
        },
        {
          en: "Above all, I believe in hard work.",
          bn: "সর্বোপরি, আমি কঠোর পরিশ্রমে বিশ্বাস করি।",
          slotValues: { ACTION: "believe in hard work" },
          topicArea: "work",
        },
        {
          en: "Above all, I need to take care of my health.",
          bn: "সর্বোপরি, আমার স্বাস্থ্যের যত্ন নেওয়া দরকার।",
          slotValues: { ACTION: "need to take care of my health" },
          topicArea: "health",
        },
        {
          en: "Above all, I want to enjoy the food.",
          bn: "সর্বোপরি, আমি খাবার উপভোগ করতে চাই।",
          slotValues: { ACTION: "want to enjoy the food" },
          topicArea: "food",
        },
        {
          en: "Above all, I want to travel safely.",
          bn: "সর্বোপরি, আমি নিরাপদে ভ্রমণ করতে চাই।",
          slotValues: { ACTION: "want to travel safely" },
          topicArea: "travel",
        },
        {
          en: "Above all, I want to learn something useful.",
          bn: "সর্বোপরি, আমি কিছু উপযোগী জিনিস শিখতে চাই।",
          slotValues: { ACTION: "want to learn something useful" },
          topicArea: "education",
        },
        {
          en: "Above all, I want value for money.",
          bn: "সর্বোপরি, আমি টাকার বিনিময়ে মূল্য চাই।",
          slotValues: { ACTION: "want value for money" },
          topicArea: "shopping",
        },
        {
          en: "Above all, I care about doing the right thing.",
          bn: "সর্বোপরি, আমি সঠিক কাজ করাকে গুরুত্ব দিই।",
          slotValues: { ACTION: "care about doing the right thing" },
          topicArea: "daily_life",
        },
        {
          en: "Above all, I respect my parents.",
          bn: "সর্বোপরি, আমি আমার বাবা-মাকে সম্মান করি।",
          slotValues: { ACTION: "respect my parents" },
          topicArea: "relationships",
        },
        {
          en: "Above all, I prioritize my team's morale.",
          bn: "সর্বোপরি, আমি আমার দলের মনোবলকে অগ্রাধিকার দিই।",
          slotValues: { ACTION: "prioritize my team's morale" },
          topicArea: "work",
        },
        {
          en: "Above all, I want to stay fit.",
          bn: "সর্বোপরি, আমি ফিট থাকতে চাই।",
          slotValues: { ACTION: "want to stay fit" },
          topicArea: "health",
        },
        {
          en: "Above all, I appreciate fresh ingredients.",
          bn: "সর্বোপরি, আমি তাজা উপকরণের কদর করি।",
          slotValues: { ACTION: "appreciate fresh ingredients" },
          topicArea: "food",
        },
        {
          en: "Above all, I want to see new places.",
          bn: "সর্বোপরি, আমি নতুন জায়গা দেখতে চাই।",
          slotValues: { ACTION: "want to see new places" },
          topicArea: "travel",
        },
        {
          en: "Above all, I strive for excellence.",
          bn: "সর্বোপরি, আমি শ্রেষ্ঠত্বের জন্য চেষ্টা করি।",
          slotValues: { ACTION: "strive for excellence" },
          topicArea: "education",
        },
      ],
      formality: "formal",
      difficulty: "intermediate",
      usageNote:
        "'Above all' is an emphatic phrase meaning 'more than anything else'. It adds weight and sincerity to a statement.",
      usageNote_bn:
        "'Above all' হলো একটি জোরালো বাক্যাংশ যার অর্থ 'অন্য সব কিছুর চেয়ে বেশি'। এটি একটি বক্তব্যে গুরুত্ব ও আন্তরিকতা যোগ করে।",
      combinableWith: ["A6.1", "A6.3"],
      banglaStructureMap:
        "সর্বোপরি (Emphasis) + আমি (Subject) + [ACTION] (Verb phrase) + করি (Verb)",
    },
  ],
};
