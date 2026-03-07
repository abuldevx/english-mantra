import { PatternCategory } from "@/types/pattern";

export const categoryB2: PatternCategory = {
  id: "B2",
  slug: "sensory-verbs",
  name: "Describing with Linking/Sensory Verbs",
  name_bn: "সংযোগকারী/সংবেদী ক্রিয়া দিয়ে বর্ণনা",
  description:
    "Learn how to describe things using sensory and linking verbs like look, sound, smell, taste, feel, seem, and appear.",
  description_bn:
    "look, sound, smell, taste, feel, seem, এবং appear-এর মতো সংবেদী ও সংযোগকারী ক্রিয়া ব্যবহার করে জিনিস বর্ণনা করতে শিখুন।",
  icon: "👁️",
  group: "B",
  groupName: "Describing People, Things & Situations",
  groupName_bn: "মানুষ, জিনিস এবং পরিস্থিতি বর্ণনা",
  difficulty: "beginner",
  patterns: [
    {
      id: "B2.1",
      formula: "[THING] looks [DESCRIPTION]",
      formula_bn: "[জিনিস] দেখতে [বর্ণনা]",
      patternName: "Visual Description",
      patternName_bn: "দৃশ্যমান বর্ণনা",
      slots: [
        {
          name: "THING",
          description: "A noun or noun phrase being described visually",
          description_bn:
            "একটি বিশেষ্য বা বিশেষ্য পদবন্ধ যা দৃশ্যত বর্ণনা করা হচ্ছে",
          acceptedTypes: ["noun"],
          examples: ["This painting", "The sky", "Your house"],
        },
        {
          name: "DESCRIPTION",
          description: "An adjective describing the visual appearance",
          description_bn: "একটি বিশেষণ যা দৃশ্যমান চেহারা বর্ণনা করে",
          acceptedTypes: ["adjective", "description"],
          examples: ["amazing", "dark", "clean"],
        },
      ],
      examples: [
        {
          en: "This painting looks amazing.",
          bn: "এই ছবিটা দেখতে অসাধারণ।",
          slotValues: { THING: "This painting", DESCRIPTION: "amazing" },
          topicArea: "daily_life",
        },
        {
          en: "The sky looks beautiful tonight.",
          bn: "আজ রাতে আকাশ দেখতে সুন্দর।",
          slotValues: {
            THING: "The sky",
            DESCRIPTION: "beautiful tonight",
          },
          topicArea: "daily_life",
        },
        {
          en: "Your house looks very cozy.",
          bn: "তোমার বাড়িটা দেখতে খুব আরামদায়ক।",
          slotValues: { THING: "Your house", DESCRIPTION: "very cozy" },
          topicArea: "daily_life",
        },
        {
          en: "The food looks delicious.",
          bn: "খাবারটা দেখতে সুস্বাদু।",
          slotValues: { THING: "The food", DESCRIPTION: "delicious" },
          topicArea: "food",
        },
        {
          en: "That shirt looks expensive.",
          bn: "ওই শার্টটা দেখতে দামি।",
          slotValues: { THING: "That shirt", DESCRIPTION: "expensive" },
          topicArea: "shopping",
        },
        {
          en: "The office looks neat and organized.",
          bn: "অফিসটা দেখতে পরিচ্ছন্ন ও গোছানো।",
          slotValues: {
            THING: "The office",
            DESCRIPTION: "neat and organized",
          },
          topicArea: "work",
        },
        {
          en: "The hotel looks wonderful from outside.",
          bn: "হোটেলটা বাইরে থেকে দেখতে চমৎকার।",
          slotValues: {
            THING: "The hotel",
            DESCRIPTION: "wonderful from outside",
          },
          topicArea: "travel",
        },
        {
          en: "This medicine looks like a vitamin.",
          bn: "এই ওষুধটা দেখতে ভিটামিনের মতো।",
          slotValues: {
            THING: "This medicine",
            DESCRIPTION: "like a vitamin",
          },
          topicArea: "health",
        },
        {
          en: "The textbook looks really thick.",
          bn: "পাঠ্যবইটা দেখতে সত্যিই মোটা।",
          slotValues: {
            THING: "The textbook",
            DESCRIPTION: "really thick",
          },
          topicArea: "education",
        },
        {
          en: "The garden looks lovely in spring.",
          bn: "বসন্তে বাগানটা দেখতে মনোরম।",
          slotValues: {
            THING: "The garden",
            DESCRIPTION: "lovely in spring",
          },
          topicArea: "daily_life",
        },
        {
          en: "The cake looks homemade.",
          bn: "কেকটা দেখতে ঘরে তৈরি মনে হচ্ছে।",
          slotValues: { THING: "The cake", DESCRIPTION: "homemade" },
          topicArea: "food",
        },
        {
          en: "That bag looks perfect for travel.",
          bn: "ওই ব্যাগটা দেখতে ভ্রমণের জন্য চমৎকার।",
          slotValues: {
            THING: "That bag",
            DESCRIPTION: "perfect for travel",
          },
          topicArea: "shopping",
        },
        {
          en: "The report looks incomplete.",
          bn: "রিপোর্টটা দেখতে অসম্পূর্ণ।",
          slotValues: { THING: "The report", DESCRIPTION: "incomplete" },
          topicArea: "work",
        },
        {
          en: "The wound looks infected.",
          bn: "ক্ষতটা দেখতে সংক্রমিত মনে হচ্ছে।",
          slotValues: { THING: "The wound", DESCRIPTION: "infected" },
          topicArea: "health",
        },
        {
          en: "The beach looks so peaceful.",
          bn: "সমুদ্র সৈকতটা দেখতে এত শান্ত।",
          slotValues: { THING: "The beach", DESCRIPTION: "so peaceful" },
          topicArea: "travel",
        },
      ],
      formality: "casual",
      difficulty: "beginner",
      usageNote:
        "'Looks' here is a linking verb describing visual impression, not the action of looking at something.",
      usageNote_bn:
        "এখানে 'Looks' একটি সংযোগকারী ক্রিয়া যা দৃশ্যমান ধারণা বর্ণনা করে, কিছু দেখার ক্রিয়া নয়।",
      combinableWith: ["B2.2", "B2.4"],
      banglaStructureMap:
        "[THING] (কর্তা) + দেখতে (সংযোগকারী) + [DESCRIPTION] (বিশেষণ)",
    },
    {
      id: "B2.2",
      formula: "[THING] sounds [DESCRIPTION]",
      formula_bn: "[জিনিস] শুনতে [বর্ণনা]",
      patternName: "Auditory Description",
      patternName_bn: "শ্রবণমূলক বর্ণনা",
      slots: [
        {
          name: "THING",
          description:
            "A noun, noun phrase, or idea being described by how it sounds",
          description_bn:
            "একটি বিশেষ্য, বিশেষ্য পদবন্ধ, বা ধারণা যা শুনতে কেমন তা বর্ণনা করা হচ্ছে",
          acceptedTypes: ["noun"],
          examples: ["That idea", "The music", "Your plan"],
        },
        {
          name: "DESCRIPTION",
          description: "An adjective describing the auditory quality or impression",
          description_bn:
            "একটি বিশেষণ যা শব্দের গুণ বা ধারণা বর্ণনা করে",
          acceptedTypes: ["adjective", "description"],
          examples: ["great", "loud", "interesting"],
        },
      ],
      examples: [
        {
          en: "That sounds great!",
          bn: "ওটা দারুণ শোনাচ্ছে!",
          slotValues: { THING: "That", DESCRIPTION: "great" },
          topicArea: "daily_life",
        },
        {
          en: "The music sounds beautiful.",
          bn: "গানটা শুনতে সুন্দর।",
          slotValues: { THING: "The music", DESCRIPTION: "beautiful" },
          topicArea: "daily_life",
        },
        {
          en: "Your plan sounds interesting.",
          bn: "তোমার পরিকল্পনা শুনতে আকর্ষণীয়।",
          slotValues: { THING: "Your plan", DESCRIPTION: "interesting" },
          topicArea: "work",
        },
        {
          en: "The alarm sounds too loud.",
          bn: "অ্যালার্মটা শুনতে খুব জোরে।",
          slotValues: { THING: "The alarm", DESCRIPTION: "too loud" },
          topicArea: "daily_life",
        },
        {
          en: "That excuse sounds fake.",
          bn: "ওই অজুহাতটা শুনতে মিথ্যা মনে হচ্ছে।",
          slotValues: { THING: "That excuse", DESCRIPTION: "fake" },
          topicArea: "relationships",
        },
        {
          en: "The recipe sounds easy to follow.",
          bn: "রেসিপিটা শুনতে সহজ মনে হচ্ছে।",
          slotValues: {
            THING: "The recipe",
            DESCRIPTION: "easy to follow",
          },
          topicArea: "food",
        },
        {
          en: "This course sounds useful.",
          bn: "এই কোর্সটা শুনতে কাজের মনে হচ্ছে।",
          slotValues: { THING: "This course", DESCRIPTION: "useful" },
          topicArea: "education",
        },
        {
          en: "The engine sounds strange.",
          bn: "ইঞ্জিনটা শুনতে অদ্ভুত লাগছে।",
          slotValues: { THING: "The engine", DESCRIPTION: "strange" },
          topicArea: "travel",
        },
        {
          en: "That deal sounds too good to be true.",
          bn: "ওই চুক্তিটা শুনতে সত্যি হওয়ার পক্ষে বেশি ভালো।",
          slotValues: {
            THING: "That deal",
            DESCRIPTION: "too good to be true",
          },
          topicArea: "shopping",
        },
        {
          en: "His explanation sounds reasonable.",
          bn: "তার ব্যাখ্যা শুনতে যুক্তিসঙ্গত।",
          slotValues: {
            THING: "His explanation",
            DESCRIPTION: "reasonable",
          },
          topicArea: "work",
        },
        {
          en: "The diagnosis sounds serious.",
          bn: "রোগ নির্ণয়টা শুনতে গুরুতর মনে হচ্ছে।",
          slotValues: { THING: "The diagnosis", DESCRIPTION: "serious" },
          topicArea: "health",
        },
        {
          en: "Your suggestion sounds perfect.",
          bn: "তোমার পরামর্শ শুনতে চমৎকার।",
          slotValues: {
            THING: "Your suggestion",
            DESCRIPTION: "perfect",
          },
          topicArea: "work",
        },
        {
          en: "The new policy sounds complicated.",
          bn: "নতুন নীতিটা শুনতে জটিল মনে হচ্ছে।",
          slotValues: {
            THING: "The new policy",
            DESCRIPTION: "complicated",
          },
          topicArea: "work",
        },
        {
          en: "That trip sounds amazing.",
          bn: "ওই ভ্রমণটা শুনতে অসাধারণ।",
          slotValues: { THING: "That trip", DESCRIPTION: "amazing" },
          topicArea: "travel",
        },
        {
          en: "The lecture sounds boring.",
          bn: "লেকচারটা শুনতে বিরক্তিকর।",
          slotValues: { THING: "The lecture", DESCRIPTION: "boring" },
          topicArea: "education",
        },
      ],
      formality: "casual",
      difficulty: "beginner",
      usageNote:
        "'Sounds' can describe actual audio quality or your impression of an idea/plan. Very commonly used in conversation.",
      usageNote_bn:
        "'Sounds' প্রকৃত শব্দের গুণ বা কোনো ধারণা/পরিকল্পনার ব্যাপারে আপনার ধারণা বর্ণনা করতে পারে। কথোপকথনে খুব সাধারণভাবে ব্যবহৃত।",
      combinableWith: ["B2.1", "B2.4"],
      banglaStructureMap:
        "[THING] (কর্তা) + শুনতে (সংযোগকারী) + [DESCRIPTION] (বিশেষণ)",
    },
    {
      id: "B2.3",
      formula: "[THING] smells/tastes/feels [DESCRIPTION]",
      formula_bn: "[জিনিসের] গন্ধ/স্বাদ/অনুভূতি [বর্ণনা]",
      patternName: "Sensory Description (Smell/Taste/Touch)",
      patternName_bn: "সংবেদী বর্ণনা (গন্ধ/স্বাদ/স্পর্শ)",
      slots: [
        {
          name: "THING",
          description: "A noun or noun phrase being described by a sense",
          description_bn:
            "একটি বিশেষ্য বা বিশেষ্য পদবন্ধ যা ইন্দ্রিয় দিয়ে বর্ণনা করা হচ্ছে",
          acceptedTypes: ["noun"],
          examples: ["The coffee", "This fabric", "The soup"],
        },
        {
          name: "DESCRIPTION",
          description:
            "An adjective describing the sensory quality (smell, taste, or touch)",
          description_bn:
            "একটি বিশেষণ যা সংবেদী গুণ (গন্ধ, স্বাদ, বা স্পর্শ) বর্ণনা করে",
          acceptedTypes: ["adjective", "description"],
          examples: ["wonderful", "spicy", "soft"],
        },
      ],
      examples: [
        {
          en: "The coffee smells wonderful.",
          bn: "কফির গন্ধ দারুণ।",
          slotValues: { THING: "The coffee", DESCRIPTION: "wonderful" },
          topicArea: "food",
        },
        {
          en: "This soup tastes amazing.",
          bn: "এই স্যুপের স্বাদ অসাধারণ।",
          slotValues: { THING: "This soup", DESCRIPTION: "amazing" },
          topicArea: "food",
        },
        {
          en: "The blanket feels so soft.",
          bn: "কম্বলটা অনুভবে খুব নরম।",
          slotValues: { THING: "The blanket", DESCRIPTION: "so soft" },
          topicArea: "shopping",
        },
        {
          en: "The flowers smell fresh.",
          bn: "ফুলগুলোর গন্ধ তাজা।",
          slotValues: { THING: "The flowers", DESCRIPTION: "fresh" },
          topicArea: "daily_life",
        },
        {
          en: "The cake tastes too sweet.",
          bn: "কেকের স্বাদ বেশি মিষ্টি।",
          slotValues: { THING: "The cake", DESCRIPTION: "too sweet" },
          topicArea: "food",
        },
        {
          en: "This fabric feels like silk.",
          bn: "এই কাপড়টা অনুভবে সিল্কের মতো।",
          slotValues: { THING: "This fabric", DESCRIPTION: "like silk" },
          topicArea: "shopping",
        },
        {
          en: "The medicine tastes bitter.",
          bn: "ওষুধের স্বাদ তেতো।",
          slotValues: { THING: "The medicine", DESCRIPTION: "bitter" },
          topicArea: "health",
        },
        {
          en: "The kitchen smells like garlic.",
          bn: "রান্নাঘরে রসুনের গন্ধ।",
          slotValues: {
            THING: "The kitchen",
            DESCRIPTION: "like garlic",
          },
          topicArea: "food",
        },
        {
          en: "The water feels cold.",
          bn: "পানি অনুভবে ঠান্ডা।",
          slotValues: { THING: "The water", DESCRIPTION: "cold" },
          topicArea: "daily_life",
        },
        {
          en: "This perfume smells expensive.",
          bn: "এই পারফিউমের গন্ধ দামি।",
          slotValues: { THING: "This perfume", DESCRIPTION: "expensive" },
          topicArea: "shopping",
        },
        {
          en: "The biryani tastes authentic.",
          bn: "বিরিয়ানির স্বাদ আসল।",
          slotValues: { THING: "The biryani", DESCRIPTION: "authentic" },
          topicArea: "food",
        },
        {
          en: "The hotel room smells clean.",
          bn: "হোটেলের ঘরে পরিষ্কার গন্ধ।",
          slotValues: { THING: "The hotel room", DESCRIPTION: "clean" },
          topicArea: "travel",
        },
        {
          en: "The sand feels warm under my feet.",
          bn: "পায়ের নিচে বালি অনুভবে গরম।",
          slotValues: {
            THING: "The sand",
            DESCRIPTION: "warm under my feet",
          },
          topicArea: "travel",
        },
        {
          en: "Something smells burnt in the office.",
          bn: "অফিসে কিছু একটা পোড়া গন্ধ হচ্ছে।",
          slotValues: {
            THING: "Something",
            DESCRIPTION: "burnt in the office",
          },
          topicArea: "work",
        },
        {
          en: "The tea tastes different today.",
          bn: "আজ চায়ের স্বাদ অন্যরকম।",
          slotValues: {
            THING: "The tea",
            DESCRIPTION: "different today",
          },
          topicArea: "food",
        },
      ],
      formality: "casual",
      difficulty: "beginner",
      usageNote:
        "These sensory verbs (smell, taste, feel) act as linking verbs and are followed by adjectives, not adverbs.",
      usageNote_bn:
        "এই সংবেদী ক্রিয়াগুলো (smell, taste, feel) সংযোগকারী ক্রিয়া হিসেবে কাজ করে এবং এদের পরে বিশেষণ বসে, ক্রিয়া-বিশেষণ নয়।",
      combinableWith: ["B2.1", "B2.2"],
      banglaStructureMap:
        "[THING]-এর (কর্তা + বিভক্তি) + গন্ধ/স্বাদ/অনুভূতি (সংবেদন) + [DESCRIPTION] (বিশেষণ)",
    },
    {
      id: "B2.4",
      formula: "[THING] seems [DESCRIPTION]",
      formula_bn: "[জিনিস] [বর্ণনা] মনে হচ্ছে",
      patternName: "Expressing Impression",
      patternName_bn: "ধারণা প্রকাশ",
      slots: [
        {
          name: "THING",
          description: "A noun, noun phrase, or situation being evaluated",
          description_bn:
            "একটি বিশেষ্য, বিশেষ্য পদবন্ধ, বা পরিস্থিতি যা মূল্যায়ন করা হচ্ছে",
          acceptedTypes: ["noun"],
          examples: ["The situation", "This problem", "The weather"],
        },
        {
          name: "DESCRIPTION",
          description:
            "An adjective or phrase describing the impression or perception",
          description_bn:
            "একটি বিশেষণ বা পদবন্ধ যা ধারণা বা উপলব্ধি বর্ণনা করে",
          acceptedTypes: ["adjective", "description"],
          examples: ["difficult", "normal", "under control"],
        },
      ],
      examples: [
        {
          en: "The situation seems serious.",
          bn: "পরিস্থিতি গুরুতর মনে হচ্ছে।",
          slotValues: { THING: "The situation", DESCRIPTION: "serious" },
          topicArea: "daily_life",
        },
        {
          en: "This problem seems easy to solve.",
          bn: "এই সমস্যাটা সমাধান করা সহজ মনে হচ্ছে।",
          slotValues: {
            THING: "This problem",
            DESCRIPTION: "easy to solve",
          },
          topicArea: "work",
        },
        {
          en: "The weather seems unpredictable today.",
          bn: "আজ আবহাওয়া অনিশ্চিত মনে হচ্ছে।",
          slotValues: {
            THING: "The weather",
            DESCRIPTION: "unpredictable today",
          },
          topicArea: "travel",
        },
        {
          en: "Everything seems fine.",
          bn: "সবকিছু ঠিক আছে মনে হচ্ছে।",
          slotValues: { THING: "Everything", DESCRIPTION: "fine" },
          topicArea: "daily_life",
        },
        {
          en: "The test seems harder than expected.",
          bn: "পরীক্ষাটা আশার চেয়ে কঠিন মনে হচ্ছে।",
          slotValues: {
            THING: "The test",
            DESCRIPTION: "harder than expected",
          },
          topicArea: "education",
        },
        {
          en: "The project seems almost done.",
          bn: "প্রকল্পটা প্রায় শেষ মনে হচ্ছে।",
          slotValues: {
            THING: "The project",
            DESCRIPTION: "almost done",
          },
          topicArea: "work",
        },
        {
          en: "This restaurant seems popular.",
          bn: "এই রেস্তোরাঁটা জনপ্রিয় মনে হচ্ছে।",
          slotValues: {
            THING: "This restaurant",
            DESCRIPTION: "popular",
          },
          topicArea: "food",
        },
        {
          en: "The price seems reasonable.",
          bn: "দামটা যুক্তিসঙ্গত মনে হচ্ছে।",
          slotValues: { THING: "The price", DESCRIPTION: "reasonable" },
          topicArea: "shopping",
        },
        {
          en: "His condition seems stable.",
          bn: "তার অবস্থা স্থিতিশীল মনে হচ্ছে।",
          slotValues: { THING: "His condition", DESCRIPTION: "stable" },
          topicArea: "health",
        },
        {
          en: "The traffic seems lighter than usual.",
          bn: "যানজট স্বাভাবিকের চেয়ে কম মনে হচ্ছে।",
          slotValues: {
            THING: "The traffic",
            DESCRIPTION: "lighter than usual",
          },
          topicArea: "travel",
        },
        {
          en: "The homework seems straightforward.",
          bn: "হোমওয়ার্কটা সোজাসাপ্টা মনে হচ্ছে।",
          slotValues: {
            THING: "The homework",
            DESCRIPTION: "straightforward",
          },
          topicArea: "education",
        },
        {
          en: "This job seems perfect for you.",
          bn: "এই চাকরিটা তোমার জন্য একদম ঠিক মনে হচ্ছে।",
          slotValues: {
            THING: "This job",
            DESCRIPTION: "perfect for you",
          },
          topicArea: "work",
        },
        {
          en: "The relationship seems complicated.",
          bn: "সম্পর্কটা জটিল মনে হচ্ছে।",
          slotValues: {
            THING: "The relationship",
            DESCRIPTION: "complicated",
          },
          topicArea: "relationships",
        },
        {
          en: "The treatment seems to be working.",
          bn: "চিকিৎসা কাজ করছে মনে হচ্ছে।",
          slotValues: {
            THING: "The treatment",
            DESCRIPTION: "to be working",
          },
          topicArea: "health",
        },
        {
          en: "The quality seems good for the price.",
          bn: "দামের তুলনায় মান ভালো মনে হচ্ছে।",
          slotValues: {
            THING: "The quality",
            DESCRIPTION: "good for the price",
          },
          topicArea: "shopping",
        },
      ],
      formality: "polite",
      difficulty: "beginner",
      usageNote:
        "'Seems' adds a layer of uncertainty or politeness. It's softer than saying something 'is' a certain way.",
      usageNote_bn:
        "'Seems' অনিশ্চয়তা বা ভদ্রতার একটি স্তর যোগ করে। এটি কিছু 'is' বলার চেয়ে নরম।",
      combinableWith: ["B2.5"],
      banglaStructureMap:
        "[THING] (কর্তা) + [DESCRIPTION] (বিশেষণ) + মনে হচ্ছে (ক্রিয়া)",
    },
    {
      id: "B2.5",
      formula: "[THING] appears [DESCRIPTION]",
      formula_bn: "[জিনিস] [বর্ণনা] প্রতীয়মান হচ্ছে",
      patternName: "Formal Impression",
      patternName_bn: "আনুষ্ঠানিক ধারণা",
      slots: [
        {
          name: "THING",
          description:
            "A noun, noun phrase, or situation being described formally",
          description_bn:
            "একটি বিশেষ্য, বিশেষ্য পদবন্ধ, বা পরিস্থিতি যা আনুষ্ঠানিকভাবে বর্ণনা করা হচ্ছে",
          acceptedTypes: ["noun"],
          examples: ["The data", "The company", "The damage"],
        },
        {
          name: "DESCRIPTION",
          description:
            "An adjective or phrase describing how something appears based on evidence",
          description_bn:
            "একটি বিশেষণ বা পদবন্ধ যা প্রমাণের ভিত্তিতে কিছু কেমন দেখাচ্ছে তা বর্ণনা করে",
          acceptedTypes: ["adjective", "description"],
          examples: ["accurate", "successful", "minor"],
        },
      ],
      examples: [
        {
          en: "The data appears accurate.",
          bn: "তথ্য সঠিক বলে প্রতীয়মান হচ্ছে।",
          slotValues: { THING: "The data", DESCRIPTION: "accurate" },
          topicArea: "work",
        },
        {
          en: "The company appears to be growing.",
          bn: "কোম্পানি বৃদ্ধি পাচ্ছে বলে মনে হচ্ছে।",
          slotValues: {
            THING: "The company",
            DESCRIPTION: "to be growing",
          },
          topicArea: "work",
        },
        {
          en: "The damage appears minor.",
          bn: "ক্ষতি সামান্য বলে প্রতীয়মান হচ্ছে।",
          slotValues: { THING: "The damage", DESCRIPTION: "minor" },
          topicArea: "daily_life",
        },
        {
          en: "The patient appears to be recovering.",
          bn: "রোগী সুস্থ হয়ে উঠছে বলে মনে হচ্ছে।",
          slotValues: {
            THING: "The patient",
            DESCRIPTION: "to be recovering",
          },
          topicArea: "health",
        },
        {
          en: "The results appear promising.",
          bn: "ফলাফল আশাব্যঞ্জক বলে প্রতীয়মান হচ্ছে।",
          slotValues: { THING: "The results", DESCRIPTION: "promising" },
          topicArea: "education",
        },
        {
          en: "The market appears unstable.",
          bn: "বাজার অস্থিতিশীল বলে মনে হচ্ছে।",
          slotValues: { THING: "The market", DESCRIPTION: "unstable" },
          topicArea: "work",
        },
        {
          en: "The building appears safe to enter.",
          bn: "ভবনে প্রবেশ করা নিরাপদ বলে মনে হচ্ছে।",
          slotValues: {
            THING: "The building",
            DESCRIPTION: "safe to enter",
          },
          topicArea: "daily_life",
        },
        {
          en: "The product appears genuine.",
          bn: "পণ্যটি আসল বলে প্রতীয়মান হচ্ছে।",
          slotValues: { THING: "The product", DESCRIPTION: "genuine" },
          topicArea: "shopping",
        },
        {
          en: "The road appears blocked ahead.",
          bn: "সামনে রাস্তা বন্ধ বলে মনে হচ্ছে।",
          slotValues: {
            THING: "The road",
            DESCRIPTION: "blocked ahead",
          },
          topicArea: "travel",
        },
        {
          en: "The infection appears to be spreading.",
          bn: "সংক্রমণ ছড়াচ্ছে বলে মনে হচ্ছে।",
          slotValues: {
            THING: "The infection",
            DESCRIPTION: "to be spreading",
          },
          topicArea: "health",
        },
        {
          en: "The food appears fresh.",
          bn: "খাবার তাজা বলে মনে হচ্ছে।",
          slotValues: { THING: "The food", DESCRIPTION: "fresh" },
          topicArea: "food",
        },
        {
          en: "The contract appears valid.",
          bn: "চুক্তি বৈধ বলে প্রতীয়মান হচ্ছে।",
          slotValues: { THING: "The contract", DESCRIPTION: "valid" },
          topicArea: "work",
        },
        {
          en: "The study appears well-researched.",
          bn: "গবেষণাটি ভালোভাবে করা হয়েছে বলে মনে হচ্ছে।",
          slotValues: {
            THING: "The study",
            DESCRIPTION: "well-researched",
          },
          topicArea: "education",
        },
        {
          en: "The relationship appears strong.",
          bn: "সম্পর্কটি মজবুত বলে মনে হচ্ছে।",
          slotValues: {
            THING: "The relationship",
            DESCRIPTION: "strong",
          },
          topicArea: "relationships",
        },
        {
          en: "The flight appears to be on time.",
          bn: "ফ্লাইট সময়মতো আছে বলে মনে হচ্ছে।",
          slotValues: {
            THING: "The flight",
            DESCRIPTION: "to be on time",
          },
          topicArea: "travel",
        },
      ],
      formality: "formal",
      difficulty: "beginner",
      usageNote:
        "'Appears' is more formal than 'seems' or 'looks'. It's common in professional, academic, and official contexts.",
      usageNote_bn:
        "'Appears' 'seems' বা 'looks'-এর চেয়ে বেশি আনুষ্ঠানিক। এটি পেশাদার, একাডেমিক, এবং সরকারি প্রসঙ্গে সাধারণ।",
      combinableWith: ["B2.4"],
      banglaStructureMap:
        "[THING] (কর্তা) + [DESCRIPTION] (বিশেষণ) + বলে প্রতীয়মান হচ্ছে (ক্রিয়া)",
    },
  ],
};
