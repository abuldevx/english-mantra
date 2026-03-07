import { PatternCategory } from "@/types/pattern";

export const categoryE6: PatternCategory = {
  id: "E6",
  slug: "expressing-worry-concern",
  name: "Expressing Worry & Concern",
  name_bn: "উদ্বেগ ও চিন্তা প্রকাশ",
  description:
    "Learn how to express your worries and concerns naturally in English.",
  description_bn:
    "ইংরেজিতে স্বাভাবিকভাবে আপনার উদ্বেগ ও চিন্তা প্রকাশ করতে শিখুন।",
  icon: "😟",
  group: "E",
  groupName: "Opinions, Emotions & Attitudes",
  groupName_bn: "মতামত, আবেগ ও দৃষ্টিভঙ্গি",
  difficulty: "intermediate",
  patterns: [
    {
      id: "E6.1",
      formula: "I'm worried about [THING]",
      formula_bn: "আমি [বিষয়] নিয়ে চিন্তিত",
      patternName: "Expressing Worry",
      patternName_bn: "উদ্বেগ প্রকাশ",
      slots: [
        {
          name: "THING",
          description: "A noun phrase describing what worries you",
          description_bn:
            "একটি বিশেষ্য পদবন্ধ যা আপনাকে কী চিন্তিত করে তা বর্ণনা করে",
          acceptedTypes: ["noun_phrase", "gerund"],
          examples: ["the exam", "my health", "losing my job"],
        },
      ],
      examples: [
        {
          en: "I'm worried about the exam.",
          bn: "আমি পরীক্ষা নিয়ে চিন্তিত।",
          slotValues: { THING: "the exam" },
          topicArea: "education",
        },
        {
          en: "I'm worried about my health.",
          bn: "আমি আমার স্বাস্থ্য নিয়ে চিন্তিত।",
          slotValues: { THING: "my health" },
          topicArea: "health",
        },
        {
          en: "I'm worried about losing my job.",
          bn: "আমি চাকরি হারানো নিয়ে চিন্তিত।",
          slotValues: { THING: "losing my job" },
          topicArea: "work",
        },
        {
          en: "I'm worried about the weather tomorrow.",
          bn: "আমি আগামীকালের আবহাওয়া নিয়ে চিন্তিত।",
          slotValues: { THING: "the weather tomorrow" },
          topicArea: "daily_life",
        },
        {
          en: "I'm worried about the food safety here.",
          bn: "আমি এখানকার খাবারের নিরাপত্তা নিয়ে চিন্তিত।",
          slotValues: { THING: "the food safety here" },
          topicArea: "food",
        },
        {
          en: "I'm worried about the flight delay.",
          bn: "আমি ফ্লাইট দেরি হওয়া নিয়ে চিন্তিত।",
          slotValues: { THING: "the flight delay" },
          topicArea: "travel",
        },
        {
          en: "I'm worried about my relationship with my sister.",
          bn: "আমি আমার বোনের সাথে সম্পর্ক নিয়ে চিন্তিত।",
          slotValues: { THING: "my relationship with my sister" },
          topicArea: "relationships",
        },
        {
          en: "I'm worried about the rising prices.",
          bn: "আমি ক্রমবর্ধমান দাম নিয়ে চিন্তিত।",
          slotValues: { THING: "the rising prices" },
          topicArea: "shopping",
        },
        {
          en: "I'm worried about the project deadline.",
          bn: "আমি প্রকল্পের ডেডলাইন নিয়ে চিন্তিত।",
          slotValues: { THING: "the project deadline" },
          topicArea: "work",
        },
        {
          en: "I'm worried about my son's grades.",
          bn: "আমি আমার ছেলের গ্রেড নিয়ে চিন্তিত।",
          slotValues: { THING: "my son's grades" },
          topicArea: "education",
        },
        {
          en: "I'm worried about the side effects of the medicine.",
          bn: "আমি ওষুধের পার্শ্বপ্রতিক্রিয়া নিয়ে চিন্তিত।",
          slotValues: { THING: "the side effects of the medicine" },
          topicArea: "health",
        },
        {
          en: "I'm worried about not having enough time.",
          bn: "আমি পর্যাপ্ত সময় না থাকা নিয়ে চিন্তিত।",
          slotValues: { THING: "not having enough time" },
          topicArea: "daily_life",
        },
        {
          en: "I'm worried about the safety of the area.",
          bn: "আমি এলাকার নিরাপত্তা নিয়ে চিন্তিত।",
          slotValues: { THING: "the safety of the area" },
          topicArea: "travel",
        },
        {
          en: "I'm worried about our spending this month.",
          bn: "আমি এই মাসের খরচ নিয়ে চিন্তিত।",
          slotValues: { THING: "our spending this month" },
          topicArea: "shopping",
        },
        {
          en: "I'm worried about my parents being alone.",
          bn: "আমি বাবা-মায়ের একা থাকা নিয়ে চিন্তিত।",
          slotValues: { THING: "my parents being alone" },
          topicArea: "relationships",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "The most common way to express worry. Natural in everyday conversation.",
      usageNote_bn:
        "উদ্বেগ প্রকাশের সবচেয়ে সাধারণ উপায়। দৈনন্দিন কথোপকথনে স্বাভাবিক।",
    },
    {
      id: "E6.2",
      formula: "What if [CLAUSE]?",
      formula_bn: "যদি [উক্তি] হয়?",
      patternName: "Anxious What-If",
      patternName_bn: "উদ্বিগ্ন যদি-কি",
      slots: [
        {
          name: "CLAUSE",
          description:
            "A clause describing a feared or concerning possibility",
          description_bn:
            "একটি উপবাক্য যা একটি ভয়ংকর বা উদ্বেগজনক সম্ভাবনা বর্ণনা করে",
          acceptedTypes: ["clause"],
          examples: [
            "it rains",
            "I fail the interview",
            "they don't like my idea",
          ],
        },
      ],
      examples: [
        {
          en: "What if it rains?",
          bn: "যদি বৃষ্টি হয়?",
          slotValues: { CLAUSE: "it rains" },
          topicArea: "daily_life",
        },
        {
          en: "What if I fail the interview?",
          bn: "যদি আমি ইন্টারভিউতে ফেল করি?",
          slotValues: { CLAUSE: "I fail the interview" },
          topicArea: "work",
        },
        {
          en: "What if they don't like my idea?",
          bn: "যদি ওরা আমার আইডিয়া পছন্দ না করে?",
          slotValues: { CLAUSE: "they don't like my idea" },
          topicArea: "work",
        },
        {
          en: "What if the food isn't fresh?",
          bn: "যদি খাবার তাজা না হয়?",
          slotValues: { CLAUSE: "the food isn't fresh" },
          topicArea: "food",
        },
        {
          en: "What if we miss the flight?",
          bn: "যদি আমরা ফ্লাইট মিস করি?",
          slotValues: { CLAUSE: "we miss the flight" },
          topicArea: "travel",
        },
        {
          en: "What if I don't pass the exam?",
          bn: "যদি আমি পরীক্ষায় পাশ না করি?",
          slotValues: { CLAUSE: "I don't pass the exam" },
          topicArea: "education",
        },
        {
          en: "What if the treatment doesn't work?",
          bn: "যদি চিকিৎসা কাজ না করে?",
          slotValues: { CLAUSE: "the treatment doesn't work" },
          topicArea: "health",
        },
        {
          en: "What if she gets angry with me?",
          bn: "যদি সে আমার উপর রাগ করে?",
          slotValues: { CLAUSE: "she gets angry with me" },
          topicArea: "relationships",
        },
        {
          en: "What if the product is defective?",
          bn: "যদি পণ্যটি ত্রুটিপূর্ণ হয়?",
          slotValues: { CLAUSE: "the product is defective" },
          topicArea: "shopping",
        },
        {
          en: "What if we run out of money?",
          bn: "যদি আমাদের টাকা শেষ হয়ে যায়?",
          slotValues: { CLAUSE: "we run out of money" },
          topicArea: "daily_life",
        },
        {
          en: "What if no one shows up?",
          bn: "যদি কেউ না আসে?",
          slotValues: { CLAUSE: "no one shows up" },
          topicArea: "work",
        },
        {
          en: "What if the restaurant is fully booked?",
          bn: "যদি রেস্তোরাঁ পুরোপুরি বুকড থাকে?",
          slotValues: { CLAUSE: "the restaurant is fully booked" },
          topicArea: "food",
        },
        {
          en: "What if the hotel isn't as good as the pictures?",
          bn: "যদি হোটেল ছবির মতো ভালো না হয়?",
          slotValues: { CLAUSE: "the hotel isn't as good as the pictures" },
          topicArea: "travel",
        },
        {
          en: "What if my condition gets worse?",
          bn: "যদি আমার অবস্থা আরও খারাপ হয়?",
          slotValues: { CLAUSE: "my condition gets worse" },
          topicArea: "health",
        },
        {
          en: "What if he doesn't forgive me?",
          bn: "যদি সে আমাকে ক্ষমা না করে?",
          slotValues: { CLAUSE: "he doesn't forgive me" },
          topicArea: "relationships",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "Expresses anxiety about future possibilities. Very natural when voicing fears and concerns.",
      usageNote_bn:
        "ভবিষ্যৎ সম্ভাবনা নিয়ে উদ্বেগ প্রকাশ করে। ভয় ও চিন্তা ব্যক্ত করার সময় খুবই স্বাভাবিক।",
    },
    {
      id: "E6.3",
      formula: "[THING] is bothering me",
      formula_bn: "[বিষয়] আমাকে বিরক্ত করছে",
      patternName: "Persistent Concern",
      patternName_bn: "চলমান উদ্বেগ",
      slots: [
        {
          name: "THING",
          description:
            "A noun phrase describing something that keeps troubling you",
          description_bn:
            "একটি বিশেষ্য পদবন্ধ যা আপনাকে ক্রমাগত বিরক্ত করছে",
          acceptedTypes: ["noun_phrase", "gerund"],
          examples: [
            "this headache",
            "the noise outside",
            "something he said",
          ],
        },
      ],
      examples: [
        {
          en: "This headache is bothering me.",
          bn: "এই মাথাব্যথা আমাকে বিরক্ত করছে।",
          slotValues: { THING: "This headache" },
          topicArea: "health",
        },
        {
          en: "The noise outside is bothering me.",
          bn: "বাইরের শব্দ আমাকে বিরক্ত করছে।",
          slotValues: { THING: "The noise outside" },
          topicArea: "daily_life",
        },
        {
          en: "Something he said is bothering me.",
          bn: "সে যা বলেছে তা আমাকে বিরক্ত করছে।",
          slotValues: { THING: "Something he said" },
          topicArea: "relationships",
        },
        {
          en: "The deadline is bothering me.",
          bn: "ডেডলাইন আমাকে বিরক্ত করছে।",
          slotValues: { THING: "The deadline" },
          topicArea: "work",
        },
        {
          en: "The taste of this water is bothering me.",
          bn: "এই পানির স্বাদ আমাকে বিরক্ত করছে।",
          slotValues: { THING: "The taste of this water" },
          topicArea: "food",
        },
        {
          en: "The long layover is bothering me.",
          bn: "লম্বা ট্রানজিট আমাকে বিরক্ত করছে।",
          slotValues: { THING: "The long layover" },
          topicArea: "travel",
        },
        {
          en: "My low grade is bothering me.",
          bn: "আমার কম নম্বর আমাকে বিরক্ত করছে।",
          slotValues: { THING: "My low grade" },
          topicArea: "education",
        },
        {
          en: "The lack of communication is bothering me.",
          bn: "যোগাযোগের অভাব আমাকে বিরক্ত করছে।",
          slotValues: { THING: "The lack of communication" },
          topicArea: "relationships",
        },
        {
          en: "The high price of groceries is bothering me.",
          bn: "মুদি দোকানের বেশি দাম আমাকে বিরক্ত করছে।",
          slotValues: { THING: "The high price of groceries" },
          topicArea: "shopping",
        },
        {
          en: "My knee pain is bothering me.",
          bn: "আমার হাঁটুর ব্যথা আমাকে বিরক্ত করছে।",
          slotValues: { THING: "My knee pain" },
          topicArea: "health",
        },
        {
          en: "The workload is bothering me.",
          bn: "কাজের চাপ আমাকে বিরক্ত করছে।",
          slotValues: { THING: "The workload" },
          topicArea: "work",
        },
        {
          en: "The traffic every morning is bothering me.",
          bn: "প্রতি সকালের ট্রাফিক আমাকে বিরক্ত করছে।",
          slotValues: { THING: "The traffic every morning" },
          topicArea: "travel",
        },
        {
          en: "The spicy food is bothering my stomach.",
          bn: "ঝাল খাবার আমার পেটকে বিরক্ত করছে।",
          slotValues: { THING: "The spicy food" },
          topicArea: "food",
        },
        {
          en: "The homework assignment is bothering me.",
          bn: "বাড়ির কাজ আমাকে বিরক্ত করছে।",
          slotValues: { THING: "The homework assignment" },
          topicArea: "education",
        },
        {
          en: "Something about this deal is bothering me.",
          bn: "এই চুক্তির কিছু একটা আমাকে বিরক্ত করছে।",
          slotValues: { THING: "Something about this deal" },
          topicArea: "shopping",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "Describes something that keeps troubling your mind. Natural and direct in casual conversation.",
      usageNote_bn:
        "এমন কিছু বর্ণনা করে যা ক্রমাগত আপনার মনকে বিরক্ত করছে। অনানুষ্ঠানিক কথোপকথনে স্বাভাবিক ও সরাসরি।",
    },
    {
      id: "E6.4",
      formula: "I'm concerned about [THING]",
      formula_bn: "আমি [বিষয়] নিয়ে উদ্বিগ্ন",
      patternName: "Formal Concern",
      patternName_bn: "আনুষ্ঠানিক উদ্বেগ",
      slots: [
        {
          name: "THING",
          description:
            "A noun phrase describing what concerns you, often used in professional settings",
          description_bn:
            "একটি বিশেষ্য পদবন্ধ যা আপনার উদ্বেগ বর্ণনা করে, প্রায়ই পেশাদার পরিবেশে ব্যবহৃত",
          acceptedTypes: ["noun_phrase", "gerund"],
          examples: [
            "the team's performance",
            "the quality of the product",
            "her well-being",
          ],
        },
      ],
      examples: [
        {
          en: "I'm concerned about the team's performance.",
          bn: "আমি দলের কর্মক্ষমতা নিয়ে উদ্বিগ্ন।",
          slotValues: { THING: "the team's performance" },
          topicArea: "work",
        },
        {
          en: "I'm concerned about the quality of the product.",
          bn: "আমি পণ্যের মান নিয়ে উদ্বিগ্ন।",
          slotValues: { THING: "the quality of the product" },
          topicArea: "shopping",
        },
        {
          en: "I'm concerned about her well-being.",
          bn: "আমি তার সুস্থতা নিয়ে উদ্বিগ্ন।",
          slotValues: { THING: "her well-being" },
          topicArea: "relationships",
        },
        {
          en: "I'm concerned about the children's nutrition.",
          bn: "আমি বাচ্চাদের পুষ্টি নিয়ে উদ্বিগ্ন।",
          slotValues: { THING: "the children's nutrition" },
          topicArea: "food",
        },
        {
          en: "I'm concerned about the road conditions.",
          bn: "আমি রাস্তার অবস্থা নিয়ে উদ্বিগ্ন।",
          slotValues: { THING: "the road conditions" },
          topicArea: "travel",
        },
        {
          en: "I'm concerned about the student dropout rate.",
          bn: "আমি শিক্ষার্থী ঝরে পড়ার হার নিয়ে উদ্বিগ্ন।",
          slotValues: { THING: "the student dropout rate" },
          topicArea: "education",
        },
        {
          en: "I'm concerned about the spread of the virus.",
          bn: "আমি ভাইরাস ছড়িয়ে পড়া নিয়ে উদ্বিগ্ন।",
          slotValues: { THING: "the spread of the virus" },
          topicArea: "health",
        },
        {
          en: "I'm concerned about the environmental impact.",
          bn: "আমি পরিবেশগত প্রভাব নিয়ে উদ্বিগ্ন।",
          slotValues: { THING: "the environmental impact" },
          topicArea: "daily_life",
        },
        {
          en: "I'm concerned about the project's timeline.",
          bn: "আমি প্রকল্পের সময়সীমা নিয়ে উদ্বিগ্ন।",
          slotValues: { THING: "the project's timeline" },
          topicArea: "work",
        },
        {
          en: "I'm concerned about the rising cost of living.",
          bn: "আমি বাড়তে থাকা জীবনযাত্রার খরচ নিয়ে উদ্বিগ্ন।",
          slotValues: { THING: "the rising cost of living" },
          topicArea: "shopping",
        },
        {
          en: "I'm concerned about my father's blood pressure.",
          bn: "আমি আমার বাবার রক্তচাপ নিয়ে উদ্বিগ্ন।",
          slotValues: { THING: "my father's blood pressure" },
          topicArea: "health",
        },
        {
          en: "I'm concerned about the lack of parking near the restaurant.",
          bn: "আমি রেস্তোরাঁর কাছে পার্কিংয়ের অভাব নিয়ে উদ্বিগ্ন।",
          slotValues: { THING: "the lack of parking near the restaurant" },
          topicArea: "food",
        },
        {
          en: "I'm concerned about the visa process.",
          bn: "আমি ভিসা প্রক্রিয়া নিয়ে উদ্বিগ্ন।",
          slotValues: { THING: "the visa process" },
          topicArea: "travel",
        },
        {
          en: "I'm concerned about the quality of education here.",
          bn: "আমি এখানকার শিক্ষার মান নিয়ে উদ্বিগ্ন।",
          slotValues: { THING: "the quality of education here" },
          topicArea: "education",
        },
        {
          en: "I'm concerned about their friendship falling apart.",
          bn: "আমি তাদের বন্ধুত্ব ভেঙে যাওয়া নিয়ে উদ্বিগ্ন।",
          slotValues: { THING: "their friendship falling apart" },
          topicArea: "relationships",
        },
      ],
      formality: "formal",
      difficulty: "intermediate",
      usageNote:
        "More formal than 'worried'. Often used in professional, medical, and official contexts.",
      usageNote_bn:
        "'Worried'-এর চেয়ে বেশি আনুষ্ঠানিক। প্রায়ই পেশাদার, চিকিৎসা এবং সরকারি প্রসঙ্গে ব্যবহৃত।",
    },
    {
      id: "E6.5",
      formula: "I'm afraid [CLAUSE]",
      formula_bn: "আমি ভয় পাচ্ছি [উক্তি]",
      patternName: "Fearful Worry",
      patternName_bn: "ভয়মিশ্রিত উদ্বেগ",
      slots: [
        {
          name: "CLAUSE",
          description:
            "A clause expressing what you fear might happen or be true",
          description_bn:
            "একটি উপবাক্য যা আপনি ভয় পাচ্ছেন কী ঘটতে পারে বা সত্য হতে পারে তা প্রকাশ করে",
          acceptedTypes: ["clause"],
          examples: [
            "we might be late",
            "this won't end well",
            "I made a mistake",
          ],
        },
      ],
      examples: [
        {
          en: "I'm afraid we might be late.",
          bn: "আমি ভয় পাচ্ছি আমরা দেরি করে ফেলতে পারি।",
          slotValues: { CLAUSE: "we might be late" },
          topicArea: "daily_life",
        },
        {
          en: "I'm afraid this won't end well.",
          bn: "আমি ভয় পাচ্ছি এটা ভালোভাবে শেষ হবে না।",
          slotValues: { CLAUSE: "this won't end well" },
          topicArea: "daily_life",
        },
        {
          en: "I'm afraid I made a mistake.",
          bn: "আমি ভয় পাচ্ছি আমি ভুল করে ফেলেছি।",
          slotValues: { CLAUSE: "I made a mistake" },
          topicArea: "work",
        },
        {
          en: "I'm afraid the company might downsize.",
          bn: "আমি ভয় পাচ্ছি কোম্পানি ছাঁটাই করতে পারে।",
          slotValues: { CLAUSE: "the company might downsize" },
          topicArea: "work",
        },
        {
          en: "I'm afraid the milk has gone bad.",
          bn: "আমি ভয় পাচ্ছি দুধ নষ্ট হয়ে গেছে।",
          slotValues: { CLAUSE: "the milk has gone bad" },
          topicArea: "food",
        },
        {
          en: "I'm afraid we'll miss the connection.",
          bn: "আমি ভয় পাচ্ছি আমরা কানেকটিং ফ্লাইট মিস করব।",
          slotValues: { CLAUSE: "we'll miss the connection" },
          topicArea: "travel",
        },
        {
          en: "I'm afraid I won't be able to graduate on time.",
          bn: "আমি ভয় পাচ্ছি সময়মতো গ্র্যাজুয়েশন করতে পারব না।",
          slotValues: { CLAUSE: "I won't be able to graduate on time" },
          topicArea: "education",
        },
        {
          en: "I'm afraid it might be something serious.",
          bn: "আমি ভয় পাচ্ছি এটা গুরুতর কিছু হতে পারে।",
          slotValues: { CLAUSE: "it might be something serious" },
          topicArea: "health",
        },
        {
          en: "I'm afraid I hurt her feelings.",
          bn: "আমি ভয় পাচ্ছি আমি তার মন ভেঙে দিয়েছি।",
          slotValues: { CLAUSE: "I hurt her feelings" },
          topicArea: "relationships",
        },
        {
          en: "I'm afraid the item is out of stock.",
          bn: "আমি ভয় পাচ্ছি জিনিসটা স্টকে নেই।",
          slotValues: { CLAUSE: "the item is out of stock" },
          topicArea: "shopping",
        },
        {
          en: "I'm afraid the results won't be good.",
          bn: "আমি ভয় পাচ্ছি ফলাফল ভালো হবে না।",
          slotValues: { CLAUSE: "the results won't be good" },
          topicArea: "education",
        },
        {
          en: "I'm afraid the surgery might be necessary.",
          bn: "আমি ভয় পাচ্ছি অস্ত্রোপচারের প্রয়োজন হতে পারে।",
          slotValues: { CLAUSE: "the surgery might be necessary" },
          topicArea: "health",
        },
        {
          en: "I'm afraid the project will go over budget.",
          bn: "আমি ভয় পাচ্ছি প্রকল্পের খরচ বাজেট ছাড়িয়ে যাবে।",
          slotValues: { CLAUSE: "the project will go over budget" },
          topicArea: "work",
        },
        {
          en: "I'm afraid the food might have allergens.",
          bn: "আমি ভয় পাচ্ছি খাবারে অ্যালার্জেন থাকতে পারে।",
          slotValues: { CLAUSE: "the food might have allergens" },
          topicArea: "food",
        },
        {
          en: "I'm afraid they're drifting apart.",
          bn: "আমি ভয় পাচ্ছি তারা দূরে সরে যাচ্ছে।",
          slotValues: { CLAUSE: "they're drifting apart" },
          topicArea: "relationships",
        },
      ],
      formality: "polite",
      difficulty: "intermediate",
      usageNote:
        "Can express genuine fear or be used as a polite softener when delivering bad news ('I'm afraid so').",
      usageNote_bn:
        "সত্যিকারের ভয় প্রকাশ করতে পারে বা খারাপ খবর দেওয়ার সময় বিনয়ী ভাবে ব্যবহার করা যায় ('I'm afraid so')।",
    },
    {
      id: "E6.6",
      formula: "I can't shake the feeling that [CLAUSE]",
      formula_bn: "আমি এই অনুভূতি দূর করতে পারছি না যে [বাক্যাংশ]",
      patternName: "Persistent Worry (Can't Shake the Feeling)",
      patternName_bn: "চলমান উদ্বেগ (অনুভূতি দূর করতে না পারা)",
      slots: [
        {
          name: "CLAUSE",
          description: "A clause describing the persistent feeling or worry",
          description_bn: "একটি উপবাক্য যা ক্রমাগত অনুভূতি বা উদ্বেগ বর্ণনা করে",
          acceptedTypes: ["clause"],
          examples: [
            "something is wrong",
            "I forgot something",
            "we're being watched",
          ],
        },
      ],
      examples: [
        {
          en: "I can't shake the feeling that something is wrong.",
          bn: "আমি এই অনুভূতি দূর করতে পারছি না যে কিছু একটা ভুল আছে।",
          slotValues: { CLAUSE: "something is wrong" },
          topicArea: "daily_life",
        },
        {
          en: "I can't shake the feeling that I forgot something.",
          bn: "আমি এই অনুভূতি দূর করতে পারছি না যে আমি কিছু ভুলে গেছি।",
          slotValues: { CLAUSE: "I forgot something" },
          topicArea: "daily_life",
        },
        {
          en: "I can't shake the feeling that he's hiding something.",
          bn: "আমি এই অনুভূতি দূর করতে পারছি না যে সে কিছু লুকাচ্ছে।",
          slotValues: { CLAUSE: "he's hiding something" },
          topicArea: "relationships",
        },
        {
          en: "I can't shake the feeling that I made the wrong choice.",
          bn: "আমি এই অনুভূতি দূর করতে পারছি না যে আমি ভুল সিদ্ধান্ত নিয়েছি।",
          slotValues: { CLAUSE: "I made the wrong choice" },
          topicArea: "daily_life",
        },
        {
          en: "I can't shake the feeling that the project will fail.",
          bn: "আমি এই অনুভূতি দূর করতে পারছি না যে প্রকল্পটি ব্যর্থ হবে।",
          slotValues: { CLAUSE: "the project will fail" },
          topicArea: "work",
        },
        {
          en: "I can't shake the feeling that I left the stove on.",
          bn: "আমি এই অনুভূতি দূর করতে পারছি না যে আমি চুলা চালু রেখে এসেছি।",
          slotValues: { CLAUSE: "I left the stove on" },
          topicArea: "food",
        },
        {
          en: "I can't shake the feeling that the exam didn't go well.",
          bn: "আমি এই অনুভূতি দূর করতে পারছি না যে পরীক্ষা ভালো হয়নি।",
          slotValues: { CLAUSE: "the exam didn't go well" },
          topicArea: "education",
        },
        {
          en: "I can't shake the feeling that my symptoms are getting worse.",
          bn: "আমি এই অনুভূতি দূর করতে পারছি না যে আমার লক্ষণগুলো আরও খারাপ হচ্ছে।",
          slotValues: { CLAUSE: "my symptoms are getting worse" },
          topicArea: "health",
        },
        {
          en: "I can't shake the feeling that we took the wrong road.",
          bn: "আমি এই অনুভূতি দূর করতে পারছি না যে আমরা ভুল পথে গেছি।",
          slotValues: { CLAUSE: "we took the wrong road" },
          topicArea: "travel",
        },
        {
          en: "I can't shake the feeling that someone is following us.",
          bn: "আমি এই অনুভূতি দূর করতে পারছি না যে কেউ আমাদের অনুসরণ করছে।",
          slotValues: { CLAUSE: "someone is following us" },
          topicArea: "daily_life",
        },
        {
          en: "I can't shake the feeling that I've been overcharged.",
          bn: "আমি এই অনুভূতি দূর করতে পারছি না যে আমার কাছ থেকে বেশি টাকা নেওয়া হয়েছে।",
          slotValues: { CLAUSE: "I've been overcharged" },
          topicArea: "shopping",
        },
        {
          en: "I can't shake the feeling that she's upset with me.",
          bn: "আমি এই অনুভূতি দূর করতে পারছি না যে সে আমার উপর রাগ করেছে।",
          slotValues: { CLAUSE: "she's upset with me" },
          topicArea: "relationships",
        },
        {
          en: "I can't shake the feeling that I'll be fired.",
          bn: "আমি এই অনুভূতি দূর করতে পারছি না যে আমাকে বরখাস্ত করা হবে।",
          slotValues: { CLAUSE: "I'll be fired" },
          topicArea: "work",
        },
        {
          en: "I can't shake the feeling that something bad will happen.",
          bn: "আমি এই অনুভূতি দূর করতে পারছি না যে খারাপ কিছু ঘটবে।",
          slotValues: { CLAUSE: "something bad will happen" },
          topicArea: "daily_life",
        },
        {
          en: "I can't shake the feeling that the medicine isn't working.",
          bn: "আমি এই অনুভূতি দূর করতে পারছি না যে ওষুধ কাজ করছে না।",
          slotValues: { CLAUSE: "the medicine isn't working" },
          topicArea: "health",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "'Can't shake the feeling' is an idiomatic expression meaning a persistent worry or intuition that you cannot get rid of.",
      usageNote_bn:
        "'Can't shake the feeling' একটি বাগধারা যার অর্থ একটি ক্রমাগত উদ্বেগ বা অনুমান যা আপনি দূর করতে পারছেন না।",
    },
  ],
};
