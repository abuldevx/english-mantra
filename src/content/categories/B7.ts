import { PatternCategory } from "@/types/pattern";

export const categoryB7: PatternCategory = {
  id: "B7",
  slug: "defining-explaining-things",
  name: "Defining and Explaining Things",
  name_bn: "জিনিস সংজ্ঞায়িত ও ব্যাখ্যা করা",
  description:
    "Learn how to define, explain, and describe what things are, what they mean, and what they are used for.",
  description_bn:
    "জিনিস কী, এর অর্থ কী এবং এটি কীসের জন্য ব্যবহৃত হয় তা সংজ্ঞায়িত, ব্যাখ্যা এবং বর্ণনা করতে শিখুন।",
  icon: "📖",
  group: "B",
  groupName: "Describing People, Things & Situations",
  groupName_bn: "মানুষ, জিনিস এবং পরিস্থিতি বর্ণনা",
  difficulty: "intermediate",
  patterns: [
    {
      id: "B7.1",
      formula: "[THING] is something that [CLAUSE]",
      formula_bn: "[জিনিস] এমন কিছু যা [উপবাক্য]",
      patternName: "Defining with 'Something That'",
      patternName_bn: "'Something That' দিয়ে সংজ্ঞা",
      slots: [
        {
          name: "THING",
          description: "The thing or concept being defined",
          description_bn: "যে জিনিস বা ধারণা সংজ্ঞায়িত করা হচ্ছে",
          acceptedTypes: ["noun", "noun_phrase"],
          examples: ["Happiness", "A passport", "Honesty"],
        },
        {
          name: "CLAUSE",
          description: "A clause explaining what the thing is or does",
          description_bn: "একটি উপবাক্য যা জিনিসটি কী বা কী করে তা ব্যাখ্যা করে",
          acceptedTypes: ["clause"],
          examples: [
            "everyone wants",
            "you need for travel",
            "people respect",
          ],
        },
      ],
      examples: [
        {
          en: "Happiness is something that everyone wants.",
          bn: "সুখ এমন কিছু যা সবাই চায়।",
          slotValues: { THING: "Happiness", CLAUSE: "everyone wants" },
          topicArea: "daily_life",
        },
        {
          en: "A passport is something that you need for international travel.",
          bn: "পাসপোর্ট এমন কিছু যা আন্তর্জাতিক ভ্রমণের জন্য দরকার।",
          slotValues: {
            THING: "A passport",
            CLAUSE: "you need for international travel",
          },
          topicArea: "travel",
        },
        {
          en: "Honesty is something that people respect.",
          bn: "সততা এমন কিছু যা মানুষ সম্মান করে।",
          slotValues: { THING: "Honesty", CLAUSE: "people respect" },
          topicArea: "relationships",
        },
        {
          en: "A dictionary is something that helps you learn new words.",
          bn: "অভিধান এমন কিছু যা নতুন শব্দ শিখতে সাহায্য করে।",
          slotValues: {
            THING: "A dictionary",
            CLAUSE: "helps you learn new words",
          },
          topicArea: "education",
        },
        {
          en: "A resume is something that employers ask for.",
          bn: "জীবনবৃত্তান্ত এমন কিছু যা নিয়োগকর্তারা চান।",
          slotValues: { THING: "A resume", CLAUSE: "employers ask for" },
          topicArea: "work",
        },
        {
          en: "Rice is something that we eat every day.",
          bn: "ভাত এমন কিছু যা আমরা প্রতিদিন খাই।",
          slotValues: { THING: "Rice", CLAUSE: "we eat every day" },
          topicArea: "food",
        },
        {
          en: "A thermometer is something that measures temperature.",
          bn: "থার্মোমিটার এমন কিছু যা তাপমাত্রা মাপে।",
          slotValues: {
            THING: "A thermometer",
            CLAUSE: "measures temperature",
          },
          topicArea: "health",
        },
        {
          en: "A receipt is something that you get after buying something.",
          bn: "রসিদ এমন কিছু যা কিছু কেনার পরে পাওয়া যায়।",
          slotValues: {
            THING: "A receipt",
            CLAUSE: "you get after buying something",
          },
          topicArea: "shopping",
        },
        {
          en: "Trust is something that takes time to build.",
          bn: "বিশ্বাস এমন কিছু যা গড়ে তুলতে সময় লাগে।",
          slotValues: { THING: "Trust", CLAUSE: "takes time to build" },
          topicArea: "relationships",
        },
        {
          en: "Sunscreen is something that protects your skin.",
          bn: "সানস্ক্রিন এমন কিছু যা তোমার ত্বক রক্ষা করে।",
          slotValues: {
            THING: "Sunscreen",
            CLAUSE: "protects your skin",
          },
          topicArea: "health",
        },
        {
          en: "A map is something that helps you find your way.",
          bn: "মানচিত্র এমন কিছু যা পথ খুঁজে পেতে সাহায্য করে।",
          slotValues: {
            THING: "A map",
            CLAUSE: "helps you find your way",
          },
          topicArea: "travel",
        },
        {
          en: "Patience is something that every teacher needs.",
          bn: "ধৈর্য এমন কিছু যা প্রতিটি শিক্ষকের দরকার।",
          slotValues: {
            THING: "Patience",
            CLAUSE: "every teacher needs",
          },
          topicArea: "education",
        },
        {
          en: "A deadline is something that you must not miss.",
          bn: "ডেডলাইন এমন কিছু যা মিস করা উচিত নয়।",
          slotValues: {
            THING: "A deadline",
            CLAUSE: "you must not miss",
          },
          topicArea: "work",
        },
        {
          en: "A warranty is something that protects your purchase.",
          bn: "ওয়ারেন্টি এমন কিছু যা তোমার কেনাকাটা সুরক্ষিত রাখে।",
          slotValues: {
            THING: "A warranty",
            CLAUSE: "protects your purchase",
          },
          topicArea: "shopping",
        },
        {
          en: "Breakfast is something that gives you energy for the day.",
          bn: "সকালের নাস্তা এমন কিছু যা সারাদিনের শক্তি দেয়।",
          slotValues: {
            THING: "Breakfast",
            CLAUSE: "gives you energy for the day",
          },
          topicArea: "food",
        },
      ],
      formality: "polite",
      difficulty: "intermediate",
      usageNote:
        "This pattern is ideal for defining abstract or everyday nouns in simple terms.",
      usageNote_bn:
        "এই প্যাটার্নটি বিমূর্ত বা দৈনন্দিন বিশেষ্যকে সহজ ভাষায় সংজ্ঞায়িত করার জন্য আদর্শ।",
      combinableWith: ["B7.2", "B7.3"],
      banglaStructureMap:
        "[THING] (বিশেষ্য) + এমন কিছু যা (সংযোজক) + [CLAUSE] (ব্যাখ্যা)",
    },
    {
      id: "B7.2",
      formula: "[THING] is used for [DOING]",
      formula_bn: "[জিনিস] [কাজ]-এর জন্য ব্যবহৃত হয়",
      patternName: "Explaining Purpose with 'Used For'",
      patternName_bn: "'Used For' দিয়ে উদ্দেশ্য ব্যাখ্যা",
      slots: [
        {
          name: "THING",
          description: "A tool, object, or item",
          description_bn: "একটি যন্ত্র, বস্তু বা আইটেম",
          acceptedTypes: ["noun", "noun_phrase"],
          examples: ["A knife", "A calculator", "Soap"],
        },
        {
          name: "DOING",
          description: "A gerund (-ing) describing the purpose",
          description_bn: "একটি gerund (-ing) যা উদ্দেশ্য বর্ণনা করে",
          acceptedTypes: ["gerund"],
          examples: ["cutting", "calculating", "cleaning"],
        },
      ],
      examples: [
        {
          en: "A knife is used for cutting.",
          bn: "ছুরি কাটার জন্য ব্যবহৃত হয়।",
          slotValues: { THING: "A knife", DOING: "cutting" },
          topicArea: "food",
        },
        {
          en: "A calculator is used for solving math problems.",
          bn: "ক্যালকুলেটর গণিত সমস্যা সমাধানের জন্য ব্যবহৃত হয়।",
          slotValues: {
            THING: "A calculator",
            DOING: "solving math problems",
          },
          topicArea: "education",
        },
        {
          en: "Soap is used for cleaning.",
          bn: "সাবান পরিষ্কার করার জন্য ব্যবহৃত হয়।",
          slotValues: { THING: "Soap", DOING: "cleaning" },
          topicArea: "daily_life",
        },
        {
          en: "A stethoscope is used for listening to the heart.",
          bn: "স্টেথোস্কোপ হৃদপিণ্ডের শব্দ শোনার জন্য ব্যবহৃত হয়।",
          slotValues: {
            THING: "A stethoscope",
            DOING: "listening to the heart",
          },
          topicArea: "health",
        },
        {
          en: "A printer is used for printing documents.",
          bn: "প্রিন্টার ডকুমেন্ট প্রিন্ট করার জন্য ব্যবহৃত হয়।",
          slotValues: { THING: "A printer", DOING: "printing documents" },
          topicArea: "work",
        },
        {
          en: "A suitcase is used for carrying clothes when you travel.",
          bn: "সুটকেস ভ্রমণের সময় কাপড় বহন করার জন্য ব্যবহৃত হয়।",
          slotValues: {
            THING: "A suitcase",
            DOING: "carrying clothes when you travel",
          },
          topicArea: "travel",
        },
        {
          en: "A shopping cart is used for holding items while you shop.",
          bn: "শপিং কার্ট কেনাকাটার সময় জিনিস রাখার জন্য ব্যবহৃত হয়।",
          slotValues: {
            THING: "A shopping cart",
            DOING: "holding items while you shop",
          },
          topicArea: "shopping",
        },
        {
          en: "A blender is used for making smoothies.",
          bn: "ব্লেন্ডার স্মুদি তৈরির জন্য ব্যবহৃত হয়।",
          slotValues: { THING: "A blender", DOING: "making smoothies" },
          topicArea: "food",
        },
        {
          en: "A pen is used for writing.",
          bn: "কলম লেখার জন্য ব্যবহৃত হয়।",
          slotValues: { THING: "A pen", DOING: "writing" },
          topicArea: "education",
        },
        {
          en: "An umbrella is used for protecting yourself from rain.",
          bn: "ছাতা বৃষ্টি থেকে নিজেকে রক্ষা করার জন্য ব্যবহৃত হয়।",
          slotValues: {
            THING: "An umbrella",
            DOING: "protecting yourself from rain",
          },
          topicArea: "daily_life",
        },
        {
          en: "A bandage is used for wrapping wounds.",
          bn: "ব্যান্ডেজ ক্ষত পট্টি বাঁধার জন্য ব্যবহৃত হয়।",
          slotValues: { THING: "A bandage", DOING: "wrapping wounds" },
          topicArea: "health",
        },
        {
          en: "A stapler is used for attaching papers together.",
          bn: "স্ট্যাপলার কাগজ একসাথে জোড়া লাগানোর জন্য ব্যবহৃত হয়।",
          slotValues: {
            THING: "A stapler",
            DOING: "attaching papers together",
          },
          topicArea: "work",
        },
        {
          en: "A compass is used for finding direction.",
          bn: "কম্পাস দিক নির্ণয়ের জন্য ব্যবহৃত হয়।",
          slotValues: { THING: "A compass", DOING: "finding direction" },
          topicArea: "travel",
        },
        {
          en: "A frying pan is used for cooking food on the stove.",
          bn: "ফ্রাইং প্যান চুলায় খাবার রান্নার জন্য ব্যবহৃত হয়।",
          slotValues: {
            THING: "A frying pan",
            DOING: "cooking food on the stove",
          },
          topicArea: "food",
        },
        {
          en: "A barcode scanner is used for checking prices.",
          bn: "বারকোড স্ক্যানার দাম দেখার জন্য ব্যবহৃত হয়।",
          slotValues: {
            THING: "A barcode scanner",
            DOING: "checking prices",
          },
          topicArea: "shopping",
        },
      ],
      formality: "polite",
      difficulty: "intermediate",
      usageNote:
        "This passive pattern is ideal for explaining the function of tools and objects. The gerund (-ing form) always follows 'for'.",
      usageNote_bn:
        "এই প্যাসিভ প্যাটার্নটি সরঞ্জাম ও বস্তুর কাজ ব্যাখ্যা করার জন্য আদর্শ। 'For'-এর পরে সবসময় gerund (-ing রূপ) আসে।",
      combinableWith: ["B7.1", "B7.3"],
      banglaStructureMap:
        "[THING] (বিশেষ্য) + [DOING] (gerund)-এর জন্য + ব্যবহৃত হয় (ক্রিয়া)",
    },
    {
      id: "B7.3",
      formula: "[THING] means [EXPLANATION]",
      formula_bn: "[জিনিস] মানে [ব্যাখ্যা]",
      patternName: "Giving Meaning with 'Means'",
      patternName_bn: "'Means' দিয়ে অর্থ দেওয়া",
      slots: [
        {
          name: "THING",
          description: "A word, phrase, or concept to be explained",
          description_bn: "একটি শব্দ, পদবন্ধ বা ধারণা যা ব্যাখ্যা করা হবে",
          acceptedTypes: ["noun", "noun_phrase"],
          examples: ["Punctual", "ASAP", "Bilingual"],
        },
        {
          name: "EXPLANATION",
          description: "The meaning or definition",
          description_bn: "অর্থ বা সংজ্ঞা",
          acceptedTypes: ["clause", "noun_phrase", "description"],
          examples: [
            "on time",
            "as soon as possible",
            "speaking two languages",
          ],
        },
      ],
      examples: [
        {
          en: "'Punctual' means arriving on time.",
          bn: "'Punctual' মানে সময়মতো আসা।",
          slotValues: { THING: "Punctual", EXPLANATION: "arriving on time" },
          topicArea: "work",
        },
        {
          en: "'ASAP' means as soon as possible.",
          bn: "'ASAP' মানে যত তাড়াতাড়ি সম্ভব।",
          slotValues: { THING: "ASAP", EXPLANATION: "as soon as possible" },
          topicArea: "work",
        },
        {
          en: "'Bilingual' means being able to speak two languages.",
          bn: "'Bilingual' মানে দুটি ভাষায় কথা বলতে পারা।",
          slotValues: {
            THING: "Bilingual",
            EXPLANATION: "being able to speak two languages",
          },
          topicArea: "education",
        },
        {
          en: "'Organic' means grown without chemicals.",
          bn: "'Organic' মানে রাসায়নিক ছাড়া চাষ করা।",
          slotValues: {
            THING: "Organic",
            EXPLANATION: "grown without chemicals",
          },
          topicArea: "food",
        },
        {
          en: "'Fever' means having a high body temperature.",
          bn: "'Fever' মানে শরীরের তাপমাত্রা বেশি থাকা।",
          slotValues: {
            THING: "Fever",
            EXPLANATION: "having a high body temperature",
          },
          topicArea: "health",
        },
        {
          en: "'Visa' means official permission to enter a country.",
          bn: "'Visa' মানে একটি দেশে প্রবেশের আনুষ্ঠানিক অনুমতি।",
          slotValues: {
            THING: "Visa",
            EXPLANATION: "official permission to enter a country",
          },
          topicArea: "travel",
        },
        {
          en: "'Discount' means a reduction in price.",
          bn: "'Discount' মানে দামে ছাড়।",
          slotValues: {
            THING: "Discount",
            EXPLANATION: "a reduction in price",
          },
          topicArea: "shopping",
        },
        {
          en: "'Loyalty' means staying faithful and supportive.",
          bn: "'Loyalty' মানে বিশ্বস্ত এবং সহায়ক থাকা।",
          slotValues: {
            THING: "Loyalty",
            EXPLANATION: "staying faithful and supportive",
          },
          topicArea: "relationships",
        },
        {
          en: "'Commute' means traveling regularly to work.",
          bn: "'Commute' মানে নিয়মিত কর্মস্থলে যাতায়াত করা।",
          slotValues: {
            THING: "Commute",
            EXPLANATION: "traveling regularly to work",
          },
          topicArea: "daily_life",
        },
        {
          en: "'Allergy' means a bad reaction to certain things.",
          bn: "'Allergy' মানে নির্দিষ্ট কিছুতে খারাপ প্রতিক্রিয়া।",
          slotValues: {
            THING: "Allergy",
            EXPLANATION: "a bad reaction to certain things",
          },
          topicArea: "health",
        },
        {
          en: "'Scholarship' means financial help for students.",
          bn: "'Scholarship' মানে শিক্ষার্থীদের জন্য আর্থিক সহায়তা।",
          slotValues: {
            THING: "Scholarship",
            EXPLANATION: "financial help for students",
          },
          topicArea: "education",
        },
        {
          en: "'Vegetarian' means someone who does not eat meat.",
          bn: "'Vegetarian' মানে যে ব্যক্তি মাংস খায় না।",
          slotValues: {
            THING: "Vegetarian",
            EXPLANATION: "someone who does not eat meat",
          },
          topicArea: "food",
        },
        {
          en: "'Overtime' means working extra hours beyond the normal schedule.",
          bn: "'Overtime' মানে স্বাভাবিক সময়ের বাইরে অতিরিক্ত ঘণ্টা কাজ করা।",
          slotValues: {
            THING: "Overtime",
            EXPLANATION: "working extra hours beyond the normal schedule",
          },
          topicArea: "work",
        },
        {
          en: "'Souvenir' means a small gift you buy to remember a trip.",
          bn: "'Souvenir' মানে ভ্রমণ মনে রাখতে কেনা ছোট উপহার।",
          slotValues: {
            THING: "Souvenir",
            EXPLANATION: "a small gift you buy to remember a trip",
          },
          topicArea: "travel",
        },
        {
          en: "'Refund' means getting your money back after returning a product.",
          bn: "'Refund' মানে পণ্য ফেরত দেওয়ার পর টাকা ফেরত পাওয়া।",
          slotValues: {
            THING: "Refund",
            EXPLANATION: "getting your money back after returning a product",
          },
          topicArea: "shopping",
        },
      ],
      formality: "polite",
      difficulty: "intermediate",
      usageNote:
        "Use 'means' to explain the definition of a word or concept. The explanation can be a noun phrase, gerund, or short clause.",
      usageNote_bn:
        "একটি শব্দ বা ধারণার সংজ্ঞা ব্যাখ্যা করতে 'means' ব্যবহার করুন। ব্যাখ্যাটি বিশেষ্য পদবন্ধ, gerund বা ছোট উপবাক্য হতে পারে।",
      combinableWith: ["B7.1", "B7.4"],
      banglaStructureMap:
        "[THING] (শব্দ/ধারণা) + মানে (সংযোজক) + [EXPLANATION] (অর্থ/সংজ্ঞা)",
    },
    {
      id: "B7.4",
      formula: "[THING] is a type of [CATEGORY]",
      formula_bn: "[জিনিস] হলো এক ধরনের [শ্রেণী]",
      patternName: "Classifying with 'A Type Of'",
      patternName_bn: "'A Type Of' দিয়ে শ্রেণীবিভাগ",
      slots: [
        {
          name: "THING",
          description: "A specific item being classified",
          description_bn: "একটি নির্দিষ্ট আইটেম যাকে শ্রেণীবদ্ধ করা হচ্ছে",
          acceptedTypes: ["noun", "noun_phrase"],
          examples: ["A mango", "Football", "Paracetamol"],
        },
        {
          name: "CATEGORY",
          description: "The broader category or group it belongs to",
          description_bn: "বৃহত্তর শ্রেণী বা দল যেটিতে এটি পড়ে",
          acceptedTypes: ["noun", "noun_phrase"],
          examples: ["fruit", "sport", "medicine"],
        },
      ],
      examples: [
        {
          en: "A mango is a type of fruit.",
          bn: "আম হলো এক ধরনের ফল।",
          slotValues: { THING: "A mango", CATEGORY: "fruit" },
          topicArea: "food",
        },
        {
          en: "Football is a type of sport.",
          bn: "ফুটবল হলো এক ধরনের খেলা।",
          slotValues: { THING: "Football", CATEGORY: "sport" },
          topicArea: "daily_life",
        },
        {
          en: "Paracetamol is a type of medicine.",
          bn: "প্যারাসিটামল হলো এক ধরনের ওষুধ।",
          slotValues: { THING: "Paracetamol", CATEGORY: "medicine" },
          topicArea: "health",
        },
        {
          en: "A rickshaw is a type of vehicle.",
          bn: "রিকশা হলো এক ধরনের যানবাহন।",
          slotValues: { THING: "A rickshaw", CATEGORY: "vehicle" },
          topicArea: "travel",
        },
        {
          en: "A sari is a type of traditional clothing.",
          bn: "শাড়ি হলো এক ধরনের ঐতিহ্যবাহী পোশাক।",
          slotValues: { THING: "A sari", CATEGORY: "traditional clothing" },
          topicArea: "shopping",
        },
        {
          en: "Chemistry is a type of science.",
          bn: "রসায়ন হলো এক ধরনের বিজ্ঞান।",
          slotValues: { THING: "Chemistry", CATEGORY: "science" },
          topicArea: "education",
        },
        {
          en: "Accounting is a type of profession.",
          bn: "হিসাবরক্ষণ হলো এক ধরনের পেশা।",
          slotValues: { THING: "Accounting", CATEGORY: "profession" },
          topicArea: "work",
        },
        {
          en: "A tiger is a type of wild animal.",
          bn: "বাঘ হলো এক ধরনের বন্যপ্রাণী।",
          slotValues: { THING: "A tiger", CATEGORY: "wild animal" },
          topicArea: "daily_life",
        },
        {
          en: "Biryani is a type of rice dish.",
          bn: "বিরিয়ানি হলো এক ধরনের চালের খাবার।",
          slotValues: { THING: "Biryani", CATEGORY: "rice dish" },
          topicArea: "food",
        },
        {
          en: "Marriage is a type of relationship.",
          bn: "বিয়ে হলো এক ধরনের সম্পর্ক।",
          slotValues: { THING: "Marriage", CATEGORY: "relationship" },
          topicArea: "relationships",
        },
        {
          en: "Yoga is a type of exercise.",
          bn: "যোগব্যায়াম হলো এক ধরনের ব্যায়াম।",
          slotValues: { THING: "Yoga", CATEGORY: "exercise" },
          topicArea: "health",
        },
        {
          en: "A ferry is a type of boat used for transport.",
          bn: "ফেরি হলো এক ধরনের নৌকা যা পরিবহনে ব্যবহৃত হয়।",
          slotValues: {
            THING: "A ferry",
            CATEGORY: "boat used for transport",
          },
          topicArea: "travel",
        },
        {
          en: "A novel is a type of book.",
          bn: "উপন্যাস হলো এক ধরনের বই।",
          slotValues: { THING: "A novel", CATEGORY: "book" },
          topicArea: "education",
        },
        {
          en: "A supermarket is a type of store.",
          bn: "সুপারমার্কেট হলো এক ধরনের দোকান।",
          slotValues: { THING: "A supermarket", CATEGORY: "store" },
          topicArea: "shopping",
        },
        {
          en: "Teamwork is a type of skill.",
          bn: "দলগত কাজ হলো এক ধরনের দক্ষতা।",
          slotValues: { THING: "Teamwork", CATEGORY: "skill" },
          topicArea: "work",
        },
      ],
      formality: "polite",
      difficulty: "intermediate",
      usageNote:
        "Use 'a type of' or 'a kind of' to classify something into a broader category. Useful in definitions and explanations.",
      usageNote_bn:
        "কিছুকে বৃহত্তর শ্রেণীতে শ্রেণীবদ্ধ করতে 'a type of' বা 'a kind of' ব্যবহার করুন। সংজ্ঞা ও ব্যাখ্যায় দরকারী।",
      combinableWith: ["B7.1", "B7.5"],
      banglaStructureMap:
        "[THING] (বিশেষ্য) + হলো এক ধরনের (শ্রেণীবিভাগ) + [CATEGORY] (শ্রেণী)",
    },
    {
      id: "B7.5",
      formula: "[THING] is like [COMPARISON]",
      formula_bn: "[জিনিস] হলো [তুলনা]-র মতো",
      patternName: "Explaining by Comparison",
      patternName_bn: "তুলনা দিয়ে ব্যাখ্যা",
      slots: [
        {
          name: "THING",
          description: "The thing being explained",
          description_bn: "যে জিনিস ব্যাখ্যা করা হচ্ছে",
          acceptedTypes: ["noun", "noun_phrase"],
          examples: ["Learning a language", "Life", "Friendship"],
        },
        {
          name: "COMPARISON",
          description: "Something similar used to explain the thing",
          description_bn: "জিনিসটি ব্যাখ্যা করতে ব্যবহৃত অনুরূপ কিছু",
          acceptedTypes: ["noun_phrase", "clause"],
          examples: [
            "riding a bicycle",
            "a journey",
            "a two-way street",
          ],
        },
      ],
      examples: [
        {
          en: "Learning a language is like riding a bicycle — you get better with practice.",
          bn: "ভাষা শেখা সাইকেল চালানোর মতো — অনুশীলনে ভালো হও।",
          slotValues: {
            THING: "Learning a language",
            COMPARISON: "riding a bicycle",
          },
          topicArea: "education",
        },
        {
          en: "Life is like a journey with many turns.",
          bn: "জীবন অনেক বাঁক ওয়ালা যাত্রার মতো।",
          slotValues: {
            THING: "Life",
            COMPARISON: "a journey with many turns",
          },
          topicArea: "daily_life",
        },
        {
          en: "Friendship is like a plant — it needs care to grow.",
          bn: "বন্ধুত্ব একটি গাছের মতো — বেড়ে ওঠার জন্য যত্ন দরকার।",
          slotValues: { THING: "Friendship", COMPARISON: "a plant" },
          topicArea: "relationships",
        },
        {
          en: "Cooking is like art — you need creativity.",
          bn: "রান্না শিল্পের মতো — সৃজনশীলতা দরকার।",
          slotValues: { THING: "Cooking", COMPARISON: "art" },
          topicArea: "food",
        },
        {
          en: "A good boss is like a good coach.",
          bn: "একজন ভালো বস একজন ভালো কোচের মতো।",
          slotValues: { THING: "A good boss", COMPARISON: "a good coach" },
          topicArea: "work",
        },
        {
          en: "Health is like wealth — you don't realize its value until you lose it.",
          bn: "স্বাস্থ্য সম্পদের মতো — হারানোর আগে এর মূল্য বোঝা যায় না।",
          slotValues: { THING: "Health", COMPARISON: "wealth" },
          topicArea: "health",
        },
        {
          en: "Traveling is like reading a book — it opens your mind.",
          bn: "ভ্রমণ একটি বই পড়ার মতো — এটি মনকে খুলে দেয়।",
          slotValues: {
            THING: "Traveling",
            COMPARISON: "reading a book",
          },
          topicArea: "travel",
        },
        {
          en: "Shopping online is like window shopping from your couch.",
          bn: "অনলাইন কেনাকাটা সোফায় বসে জানালা দিয়ে দোকান দেখার মতো।",
          slotValues: {
            THING: "Shopping online",
            COMPARISON: "window shopping from your couch",
          },
          topicArea: "shopping",
        },
        {
          en: "A good teacher is like a guiding light.",
          bn: "একজন ভালো শিক্ষক পথপ্রদর্শক আলোর মতো।",
          slotValues: {
            THING: "A good teacher",
            COMPARISON: "a guiding light",
          },
          topicArea: "education",
        },
        {
          en: "Trust is like glass — once broken, it's hard to fix.",
          bn: "বিশ্বাস কাচের মতো — একবার ভাঙলে জোড়া দেওয়া কঠিন।",
          slotValues: { THING: "Trust", COMPARISON: "glass" },
          topicArea: "relationships",
        },
        {
          en: "Running a business is like sailing a ship.",
          bn: "ব্যবসা চালানো জাহাজ চালানোর মতো।",
          slotValues: {
            THING: "Running a business",
            COMPARISON: "sailing a ship",
          },
          topicArea: "work",
        },
        {
          en: "Waking up early is like winning half the day.",
          bn: "সকালে ওঠা দিনের অর্ধেক জিতে নেওয়ার মতো।",
          slotValues: {
            THING: "Waking up early",
            COMPARISON: "winning half the day",
          },
          topicArea: "daily_life",
        },
        {
          en: "Good food is like good music — it brings people together.",
          bn: "ভালো খাবার ভালো গানের মতো — এটি মানুষকে একত্রিত করে।",
          slotValues: { THING: "Good food", COMPARISON: "good music" },
          topicArea: "food",
        },
        {
          en: "Recovering from illness is like climbing a hill slowly.",
          bn: "অসুখ থেকে সেরে ওঠা ধীরে ধীরে পাহাড়ে ওঠার মতো।",
          slotValues: {
            THING: "Recovering from illness",
            COMPARISON: "climbing a hill slowly",
          },
          topicArea: "health",
        },
        {
          en: "Exploring a new city is like opening a surprise gift.",
          bn: "নতুন শহর ঘুরে দেখা চমকপ্রদ উপহার খোলার মতো।",
          slotValues: {
            THING: "Exploring a new city",
            COMPARISON: "opening a surprise gift",
          },
          topicArea: "travel",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "'Is like' introduces an analogy or comparison to make an explanation clearer. Very common in everyday conversation.",
      usageNote_bn:
        "'Is like' একটি উপমা বা তুলনা প্রবর্তন করে ব্যাখ্যা আরও স্পষ্ট করতে। দৈনন্দিন কথোপকথনে খুব সাধারণ।",
      combinableWith: ["B7.1", "B7.4"],
      banglaStructureMap:
        "[THING] (বিশেষ্য) + [COMPARISON]-র মতো (তুলনা)",
    },
    {
      id: "B7.6",
      formula: "By [WORD], I mean [EXPLANATION]",
      formula_bn: "[শব্দ] বলতে আমি [ব্যাখ্যা] বোঝাচ্ছি",
      patternName: "Clarifying Definition",
      patternName_bn: "সংজ্ঞা স্পষ্টকরণ",
      slots: [
        {
          name: "WORD",
          description: "The word or phrase being clarified",
          description_bn: "যে শব্দ বা পদবন্ধ স্পষ্ট করা হচ্ছে",
          acceptedTypes: ["noun", "noun_phrase", "adjective"],
          examples: ["soon", "close", "cheap"],
        },
        {
          name: "EXPLANATION",
          description: "The specific meaning or clarification",
          description_bn: "নির্দিষ্ট অর্থ বা স্পষ্টীকরণ",
          acceptedTypes: ["clause", "noun_phrase", "description"],
          examples: [
            "within this week",
            "walking distance",
            "under 500 taka",
          ],
        },
      ],
      examples: [
        {
          en: "By 'soon,' I mean within this week.",
          bn: "'শীঘ্রই' বলতে আমি এই সপ্তাহের মধ্যে বোঝাচ্ছি।",
          slotValues: { WORD: "soon", EXPLANATION: "within this week" },
          topicArea: "daily_life",
        },
        {
          en: "By 'close,' I mean walking distance.",
          bn: "'কাছে' বলতে আমি হাঁটার দূরত্ব বোঝাচ্ছি।",
          slotValues: { WORD: "close", EXPLANATION: "walking distance" },
          topicArea: "travel",
        },
        {
          en: "By 'cheap,' I mean under 500 taka.",
          bn: "'সস্তা' বলতে আমি ৫০০ টাকার নিচে বোঝাচ্ছি।",
          slotValues: { WORD: "cheap", EXPLANATION: "under 500 taka" },
          topicArea: "shopping",
        },
        {
          en: "By 'early,' I mean before 7 AM.",
          bn: "'তাড়াতাড়ি' বলতে আমি সকাল ৭টার আগে বোঝাচ্ছি।",
          slotValues: { WORD: "early", EXPLANATION: "before 7 AM" },
          topicArea: "daily_life",
        },
        {
          en: "By 'good,' I mean above 80 percent.",
          bn: "'ভালো' বলতে আমি ৮০ শতাংশের উপরে বোঝাচ্ছি।",
          slotValues: { WORD: "good", EXPLANATION: "above 80 percent" },
          topicArea: "education",
        },
        {
          en: "By 'nearby,' I mean within one kilometer.",
          bn: "'কাছাকাছি' বলতে আমি এক কিলোমিটারের মধ্যে বোঝাচ্ছি।",
          slotValues: { WORD: "nearby", EXPLANATION: "within one kilometer" },
          topicArea: "travel",
        },
        {
          en: "By 'experience,' I mean at least two years.",
          bn: "'অভিজ্ঞতা' বলতে আমি কমপক্ষে দুই বছর বোঝাচ্ছি।",
          slotValues: { WORD: "experience", EXPLANATION: "at least two years" },
          topicArea: "work",
        },
        {
          en: "By 'family,' I mean my parents and siblings.",
          bn: "'পরিবার' বলতে আমি আমার বাবা-মা এবং ভাই-বোন বোঝাচ্ছি।",
          slotValues: {
            WORD: "family",
            EXPLANATION: "my parents and siblings",
          },
          topicArea: "relationships",
        },
        {
          en: "By 'regularly,' I mean every day.",
          bn: "'নিয়মিত' বলতে আমি প্রতিদিন বোঝাচ্ছি।",
          slotValues: { WORD: "regularly", EXPLANATION: "every day" },
          topicArea: "health",
        },
        {
          en: "By 'healthy,' I mean no sugar or oil.",
          bn: "'স্বাস্থ্যকর' বলতে আমি চিনি বা তেল ছাড়া বোঝাচ্ছি।",
          slotValues: { WORD: "healthy", EXPLANATION: "no sugar or oil" },
          topicArea: "food",
        },
        {
          en: "By 'small,' I mean one bedroom.",
          bn: "'ছোট' বলতে আমি এক বেডরুম বোঝাচ্ছি।",
          slotValues: { WORD: "small", EXPLANATION: "one bedroom" },
          topicArea: "daily_life",
        },
        {
          en: "By 'free,' I mean no cost at all.",
          bn: "'ফ্রি' বলতে আমি একদম বিনা খরচে বোঝাচ্ছি।",
          slotValues: { WORD: "free", EXPLANATION: "no cost at all" },
          topicArea: "shopping",
        },
        {
          en: "By 'fluent,' I mean you can have a conversation.",
          bn: "'সাবলীল' বলতে আমি কথোপকথন করতে পারা বোঝাচ্ছি।",
          slotValues: {
            WORD: "fluent",
            EXPLANATION: "you can have a conversation",
          },
          topicArea: "education",
        },
        {
          en: "By 'urgent,' I mean it needs to be done today.",
          bn: "'জরুরি' বলতে আমি আজকেই করতে হবে বোঝাচ্ছি।",
          slotValues: {
            WORD: "urgent",
            EXPLANATION: "it needs to be done today",
          },
          topicArea: "work",
        },
        {
          en: "By 'fresh,' I mean made this morning.",
          bn: "'তাজা' বলতে আমি আজ সকালে তৈরি বোঝাচ্ছি।",
          slotValues: { WORD: "fresh", EXPLANATION: "made this morning" },
          topicArea: "food",
        },
      ],
      formality: "polite",
      difficulty: "intermediate",
      usageNote:
        "'By [word], I mean...' is used to clarify or specify what you intend by a particular word. It helps avoid misunderstandings in conversations.",
      usageNote_bn:
        "'By [word], I mean...' একটি নির্দিষ্ট শব্দ দ্বারা আপনি কী বোঝাচ্ছেন তা স্পষ্ট করতে ব্যবহৃত হয়। কথোপকথনে ভুল বোঝাবুঝি এড়াতে এটি সাহায্য করে।",
      combinableWith: ["B7.3", "B7.5"],
      banglaStructureMap:
        "[WORD] (শব্দ) + বলতে আমি (সংযোজক) + [EXPLANATION] (ব্যাখ্যা) + বোঝাচ্ছি (ক্রিয়া)",
    },
    {
      id: "B7.7",
      formula: "In other words, [CLAUSE]",
      formula_bn: "অন্যভাবে বলতে গেলে, [উপবাক্য]",
      patternName: "Rephrasing for Clarity",
      patternName_bn: "স্পষ্টতার জন্য পুনর্বিন্যাস",
      slots: [
        {
          name: "CLAUSE",
          description: "A rephrased or simplified version of what was said",
          description_bn:
            "যা বলা হয়েছে তার পুনর্বিন্যাসিত বা সরলীকৃত সংস্করণ",
          acceptedTypes: ["clause"],
          examples: [
            "we need more time",
            "it's too expensive",
            "she said no",
          ],
        },
      ],
      examples: [
        {
          en: "In other words, we need more time.",
          bn: "অন্যভাবে বলতে গেলে, আমাদের আরও সময় দরকার।",
          slotValues: { CLAUSE: "we need more time" },
          topicArea: "work",
        },
        {
          en: "In other words, it's too expensive.",
          bn: "অন্যভাবে বলতে গেলে, এটি অনেক দামি।",
          slotValues: { CLAUSE: "it's too expensive" },
          topicArea: "shopping",
        },
        {
          en: "In other words, she said no.",
          bn: "অন্যভাবে বলতে গেলে, সে না বলেছে।",
          slotValues: { CLAUSE: "she said no" },
          topicArea: "relationships",
        },
        {
          en: "In other words, you have to start over.",
          bn: "অন্যভাবে বলতে গেলে, তোমাকে আবার শুরু করতে হবে।",
          slotValues: { CLAUSE: "you have to start over" },
          topicArea: "work",
        },
        {
          en: "In other words, the plan didn't work.",
          bn: "অন্যভাবে বলতে গেলে, পরিকল্পনা কাজ করেনি।",
          slotValues: { CLAUSE: "the plan didn't work" },
          topicArea: "daily_life",
        },
        {
          en: "In other words, he's not coming.",
          bn: "অন্যভাবে বলতে গেলে, সে আসছে না।",
          slotValues: { CLAUSE: "he's not coming" },
          topicArea: "relationships",
        },
        {
          en: "In other words, we can't afford it.",
          bn: "অন্যভাবে বলতে গেলে, আমাদের সামর্থ্য নেই।",
          slotValues: { CLAUSE: "we can't afford it" },
          topicArea: "shopping",
        },
        {
          en: "In other words, you're fired.",
          bn: "অন্যভাবে বলতে গেলে, তোমার চাকরি গেছে।",
          slotValues: { CLAUSE: "you're fired" },
          topicArea: "work",
        },
        {
          en: "In other words, it means the same thing.",
          bn: "অন্যভাবে বলতে গেলে, এটি একই জিনিস বোঝায়।",
          slotValues: { CLAUSE: "it means the same thing" },
          topicArea: "education",
        },
        {
          en: "In other words, we should try harder.",
          bn: "অন্যভাবে বলতে গেলে, আমাদের আরও চেষ্টা করা উচিত।",
          slotValues: { CLAUSE: "we should try harder" },
          topicArea: "daily_life",
        },
        {
          en: "In other words, they're closing the shop.",
          bn: "অন্যভাবে বলতে গেলে, তারা দোকান বন্ধ করছে।",
          slotValues: { CLAUSE: "they're closing the shop" },
          topicArea: "shopping",
        },
        {
          en: "In other words, you need to practice more.",
          bn: "অন্যভাবে বলতে গেলে, তোমাকে আরও অনুশীলন করতে হবে।",
          slotValues: { CLAUSE: "you need to practice more" },
          topicArea: "education",
        },
        {
          en: "In other words, the meeting is canceled.",
          bn: "অন্যভাবে বলতে গেলে, মিটিং বাতিল হয়েছে।",
          slotValues: { CLAUSE: "the meeting is canceled" },
          topicArea: "work",
        },
        {
          en: "In other words, keep it simple.",
          bn: "অন্যভাবে বলতে গেলে, সহজ রাখো।",
          slotValues: { CLAUSE: "keep it simple" },
          topicArea: "daily_life",
        },
        {
          en: "In other words, we agree on everything.",
          bn: "অন্যভাবে বলতে গেলে, আমরা সবকিছুতে একমত।",
          slotValues: { CLAUSE: "we agree on everything" },
          topicArea: "relationships",
        },
      ],
      formality: "polite",
      difficulty: "intermediate",
      usageNote:
        "'In other words' is used to rephrase or simplify what has just been said. It helps make your point clearer and easier to understand.",
      usageNote_bn:
        "'In other words' যা বলা হয়েছে তা পুনরায় বলতে বা সহজ করতে ব্যবহৃত হয়। এটি আপনার বক্তব্য আরও স্পষ্ট এবং বোঝার সহজ করতে সাহায্য করে।",
      combinableWith: ["B7.3", "B7.6"],
      banglaStructureMap:
        "অন্যভাবে বলতে গেলে (সূচনা) + [CLAUSE] (পুনর্বিন্যাসিত উপবাক্য)",
    },
  ],
};
