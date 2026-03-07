import { PatternCategory } from "@/types/pattern";

export const categoryK7: PatternCategory = {
  id: "K7",
  slug: "complaining",
  name: "Complaining",
  name_bn: "অভিযোগ করা",
  description:
    "Learn patterns for making complaints politely and effectively.",
  description_bn:
    "ভদ্রভাবে ও কার্যকরভাবে অভিযোগ করার ধরন শিখুন।",
  icon: "😤",
  group: "K",
  groupName: "Reported Speech & Communication",
  groupName_bn: "পরোক্ষ উক্তি ও যোগাযোগ",
  difficulty: "intermediate",
  patterns: [
    {
      id: "K7.1",
      formula: "I'd like to complain about [THING]",
      formula_bn: "আমি [বিষয়] নিয়ে অভিযোগ জানাতে চাই",
      patternName: "Formal Complaint",
      patternName_bn: "আনুষ্ঠানিক অভিযোগ",
      slots: [
        {
          name: "THING",
          description: "The subject of the complaint",
          description_bn: "অভিযোগের বিষয়",
          acceptedTypes: ["noun_phrase", "topic"],
          examples: [
            "the service",
            "the noise level",
            "a product I bought",
          ],
        },
      ],
      examples: [
        {
          en: "I'd like to complain about the service.",
          bn: "আমি সেবা নিয়ে অভিযোগ জানাতে চাই।",
          slotValues: { THING: "the service" },
          topicArea: "shopping",
        },
        {
          en: "I'd like to complain about the noise level.",
          bn: "আমি শব্দের মাত্রা নিয়ে অভিযোগ জানাতে চাই।",
          slotValues: { THING: "the noise level" },
          topicArea: "daily_life",
        },
        {
          en: "I'd like to complain about a product I bought yesterday.",
          bn: "আমি গতকাল কেনা একটি পণ্য নিয়ে অভিযোগ জানাতে চাই।",
          slotValues: { THING: "a product I bought yesterday" },
          topicArea: "shopping",
        },
        {
          en: "I'd like to complain about the food quality.",
          bn: "আমি খাবারের মান নিয়ে অভিযোগ জানাতে চাই।",
          slotValues: { THING: "the food quality" },
          topicArea: "food",
        },
        {
          en: "I'd like to complain about the room condition.",
          bn: "আমি ঘরের অবস্থা নিয়ে অভিযোগ জানাতে চাই।",
          slotValues: { THING: "the room condition" },
          topicArea: "travel",
        },
        {
          en: "I'd like to complain about the late delivery.",
          bn: "আমি দেরিতে ডেলিভারি নিয়ে অভিযোগ জানাতে চাই।",
          slotValues: { THING: "the late delivery" },
          topicArea: "shopping",
        },
        {
          en: "I'd like to complain about the working conditions.",
          bn: "আমি কাজের পরিবেশ নিয়ে অভিযোগ জানাতে চাই।",
          slotValues: { THING: "the working conditions" },
          topicArea: "work",
        },
        {
          en: "I'd like to complain about the waiting time.",
          bn: "আমি অপেক্ষার সময় নিয়ে অভিযোগ জানাতে চাই।",
          slotValues: { THING: "the waiting time" },
          topicArea: "health",
        },
        {
          en: "I'd like to complain about the internet connection.",
          bn: "আমি ইন্টারনেট সংযোগ নিয়ে অভিযোগ জানাতে চাই।",
          slotValues: { THING: "the internet connection" },
          topicArea: "daily_life",
        },
        {
          en: "I'd like to complain about the class schedule.",
          bn: "আমি ক্লাসের সময়সূচি নিয়ে অভিযোগ জানাতে চাই।",
          slotValues: { THING: "the class schedule" },
          topicArea: "education",
        },
        {
          en: "I'd like to complain about the overcharging on my bill.",
          bn: "আমি আমার বিলে অতিরিক্ত চার্জ নিয়ে অভিযোগ জানাতে চাই।",
          slotValues: { THING: "the overcharging on my bill" },
          topicArea: "shopping",
        },
        {
          en: "I'd like to complain about the behavior of the staff.",
          bn: "আমি কর্মীদের আচরণ নিয়ে অভিযোগ জানাতে চাই।",
          slotValues: { THING: "the behavior of the staff" },
          topicArea: "work",
        },
        {
          en: "I'd like to complain about the flight delay.",
          bn: "আমি ফ্লাইট বিলম্ব নিয়ে অভিযোগ জানাতে চাই।",
          slotValues: { THING: "the flight delay" },
          topicArea: "travel",
        },
        {
          en: "I'd like to complain about the cold food we were served.",
          bn: "আমি ঠান্ডা খাবার পরিবেশন নিয়ে অভিযোগ জানাতে চাই।",
          slotValues: { THING: "the cold food we were served" },
          topicArea: "food",
        },
        {
          en: "I'd like to complain about the lack of parking.",
          bn: "আমি পার্কিংয়ের অভাব নিয়ে অভিযোগ জানাতে চাই।",
          slotValues: { THING: "the lack of parking" },
          topicArea: "daily_life",
        },
      ],
      formality: "formal",
      difficulty: "intermediate",
      usageNote:
        "'I'd like to complain about' is a polite and formal way to introduce a complaint, especially in businesses and offices.",
      usageNote_bn:
        "'I'd like to complain about' অভিযোগ জানানোর একটি ভদ্র ও আনুষ্ঠানিক উপায়, বিশেষ করে ব্যবসা ও অফিসে।",
    },
    {
      id: "K7.2",
      formula: "I have a problem with [THING]",
      formula_bn: "[বিষয়] নিয়ে আমার সমস্যা আছে",
      patternName: "Stating a Problem",
      patternName_bn: "সমস্যা জানানো",
      slots: [
        {
          name: "THING",
          description: "The problematic item or situation",
          description_bn: "সমস্যাযুক্ত বিষয় বা পরিস্থিতি",
          acceptedTypes: ["noun_phrase", "topic"],
          examples: [
            "my order",
            "the air conditioning",
            "the billing",
          ],
        },
      ],
      examples: [
        {
          en: "I have a problem with my order.",
          bn: "আমার অর্ডার নিয়ে সমস্যা আছে।",
          slotValues: { THING: "my order" },
          topicArea: "shopping",
        },
        {
          en: "I have a problem with the air conditioning.",
          bn: "এয়ার কন্ডিশনিং নিয়ে আমার সমস্যা আছে।",
          slotValues: { THING: "the air conditioning" },
          topicArea: "travel",
        },
        {
          en: "I have a problem with the billing.",
          bn: "বিলিং নিয়ে আমার সমস্যা আছে।",
          slotValues: { THING: "the billing" },
          topicArea: "shopping",
        },
        {
          en: "I have a problem with the taste of this dish.",
          bn: "এই পদের স্বাদ নিয়ে আমার সমস্যা আছে।",
          slotValues: { THING: "the taste of this dish" },
          topicArea: "food",
        },
        {
          en: "I have a problem with the schedule change.",
          bn: "সময়সূচি পরিবর্তন নিয়ে আমার সমস্যা আছে।",
          slotValues: { THING: "the schedule change" },
          topicArea: "work",
        },
        {
          en: "I have a problem with the prescription.",
          bn: "প্রেসক্রিপশন নিয়ে আমার সমস্যা আছে।",
          slotValues: { THING: "the prescription" },
          topicArea: "health",
        },
        {
          en: "I have a problem with my neighbor's loud music.",
          bn: "আমার প্রতিবেশীর জোরে গান নিয়ে আমার সমস্যা আছে।",
          slotValues: { THING: "my neighbor's loud music" },
          topicArea: "relationships",
        },
        {
          en: "I have a problem with the grading system.",
          bn: "গ্রেডিং সিস্টেম নিয়ে আমার সমস্যা আছে।",
          slotValues: { THING: "the grading system" },
          topicArea: "education",
        },
        {
          en: "I have a problem with the water supply.",
          bn: "পানি সরবরাহ নিয়ে আমার সমস্যা আছে।",
          slotValues: { THING: "the water supply" },
          topicArea: "daily_life",
        },
        {
          en: "I have a problem with the hotel room I was given.",
          bn: "আমাকে যে হোটেল রুম দেওয়া হয়েছে সেটা নিয়ে সমস্যা আছে।",
          slotValues: { THING: "the hotel room I was given" },
          topicArea: "travel",
        },
        {
          en: "I have a problem with the return policy.",
          bn: "রিটার্ন পলিসি নিয়ে আমার সমস্যা আছে।",
          slotValues: { THING: "the return policy" },
          topicArea: "shopping",
        },
        {
          en: "I have a problem with the portion size.",
          bn: "পরিবেশনের পরিমাণ নিয়ে আমার সমস্যা আছে।",
          slotValues: { THING: "the portion size" },
          topicArea: "food",
        },
        {
          en: "I have a problem with the assignment deadline.",
          bn: "অ্যাসাইনমেন্টের ডেডলাইন নিয়ে আমার সমস্যা আছে।",
          slotValues: { THING: "the assignment deadline" },
          topicArea: "education",
        },
        {
          en: "I have a problem with the way the meeting was handled.",
          bn: "মিটিং যেভাবে পরিচালনা হয়েছে সেটা নিয়ে আমার সমস্যা আছে।",
          slotValues: {
            THING: "the way the meeting was handled",
          },
          topicArea: "work",
        },
        {
          en: "I have a problem with the long wait for an appointment.",
          bn: "অ্যাপয়েন্টমেন্টের জন্য দীর্ঘ অপেক্ষা নিয়ে আমার সমস্যা আছে।",
          slotValues: {
            THING: "the long wait for an appointment",
          },
          topicArea: "health",
        },
      ],
      formality: "polite",
      difficulty: "intermediate",
      usageNote:
        "'I have a problem with' is a direct but polite way to introduce an issue or complaint.",
      usageNote_bn:
        "'I have a problem with' সরাসরি কিন্তু ভদ্রভাবে সমস্যা বা অভিযোগ জানানোর উপায়।",
    },
    {
      id: "K7.3",
      formula: "I'm not happy with [THING]",
      formula_bn: "আমি [বিষয়] নিয়ে সন্তুষ্ট নই",
      patternName: "Expressing Dissatisfaction",
      patternName_bn: "অসন্তোষ প্রকাশ",
      slots: [
        {
          name: "THING",
          description: "What you are unhappy about",
          description_bn: "যে বিষয়ে আপনি অসন্তুষ্ট",
          acceptedTypes: ["noun_phrase", "topic"],
          examples: [
            "the quality",
            "the way things turned out",
            "this situation",
          ],
        },
      ],
      examples: [
        {
          en: "I'm not happy with the quality of this product.",
          bn: "আমি এই পণ্যের মান নিয়ে সন্তুষ্ট নই।",
          slotValues: { THING: "the quality of this product" },
          topicArea: "shopping",
        },
        {
          en: "I'm not happy with the way things turned out.",
          bn: "আমি বিষয়গুলো যেভাবে হয়েছে তা নিয়ে সন্তুষ্ট নই।",
          slotValues: { THING: "the way things turned out" },
          topicArea: "daily_life",
        },
        {
          en: "I'm not happy with this situation at work.",
          bn: "আমি কাজের এই পরিস্থিতি নিয়ে সন্তুষ্ট নই।",
          slotValues: { THING: "this situation at work" },
          topicArea: "work",
        },
        {
          en: "I'm not happy with the food we were served.",
          bn: "আমি আমাদের পরিবেশিত খাবার নিয়ে সন্তুষ্ট নই।",
          slotValues: { THING: "the food we were served" },
          topicArea: "food",
        },
        {
          en: "I'm not happy with the hotel facilities.",
          bn: "আমি হোটেলের সুবিধা নিয়ে সন্তুষ্ট নই।",
          slotValues: { THING: "the hotel facilities" },
          topicArea: "travel",
        },
        {
          en: "I'm not happy with the treatment I received.",
          bn: "আমি যে চিকিৎসা পেয়েছি তা নিয়ে সন্তুষ্ট নই।",
          slotValues: { THING: "the treatment I received" },
          topicArea: "health",
        },
        {
          en: "I'm not happy with my exam results.",
          bn: "আমি আমার পরীক্ষার ফলাফল নিয়ে সন্তুষ্ট নই।",
          slotValues: { THING: "my exam results" },
          topicArea: "education",
        },
        {
          en: "I'm not happy with how he spoke to me.",
          bn: "সে আমার সাথে যেভাবে কথা বলেছে তা নিয়ে আমি সন্তুষ্ট নই।",
          slotValues: { THING: "how he spoke to me" },
          topicArea: "relationships",
        },
        {
          en: "I'm not happy with the price increase.",
          bn: "আমি দাম বাড়ানো নিয়ে সন্তুষ্ট নই।",
          slotValues: { THING: "the price increase" },
          topicArea: "shopping",
        },
        {
          en: "I'm not happy with the team's performance.",
          bn: "আমি দলের পারফরম্যান্স নিয়ে সন্তুষ্ট নই।",
          slotValues: { THING: "the team's performance" },
          topicArea: "work",
        },
        {
          en: "I'm not happy with the cleanliness of the restaurant.",
          bn: "আমি রেস্তোরাঁর পরিচ্ছন্নতা নিয়ে সন্তুষ্ট নই।",
          slotValues: {
            THING: "the cleanliness of the restaurant",
          },
          topicArea: "food",
        },
        {
          en: "I'm not happy with the taxi service.",
          bn: "আমি ট্যাক্সি সেবা নিয়ে সন্তুষ্ট নই।",
          slotValues: { THING: "the taxi service" },
          topicArea: "travel",
        },
        {
          en: "I'm not happy with the teaching method.",
          bn: "আমি পড়ানোর পদ্ধতি নিয়ে সন্তুষ্ট নই।",
          slotValues: { THING: "the teaching method" },
          topicArea: "education",
        },
        {
          en: "I'm not happy with the long waiting time at the clinic.",
          bn: "আমি ক্লিনিকে দীর্ঘ অপেক্ষার সময় নিয়ে সন্তুষ্ট নই।",
          slotValues: {
            THING: "the long waiting time at the clinic",
          },
          topicArea: "health",
        },
        {
          en: "I'm not happy with the electricity situation in our area.",
          bn: "আমি আমাদের এলাকার বিদ্যুৎ পরিস্থিতি নিয়ে সন্তুষ্ট নই।",
          slotValues: {
            THING: "the electricity situation in our area",
          },
          topicArea: "daily_life",
        },
      ],
      formality: "polite",
      difficulty: "intermediate",
      usageNote:
        "'I'm not happy with' is a measured way to express dissatisfaction without being aggressive.",
      usageNote_bn:
        "'I'm not happy with' আক্রমণাত্মক না হয়ে অসন্তোষ প্রকাশের একটি পরিমিত উপায়।",
    },
    {
      id: "K7.4",
      formula: "This isn't what I [VERB]",
      formula_bn: "আমি যা [ক্রিয়া] এটা তা নয়",
      patternName: "Unmet Expectations",
      patternName_bn: "অপূর্ণ প্রত্যাশা",
      slots: [
        {
          name: "VERB",
          description: "The expectation verb (expected, ordered, asked for)",
          description_bn: "প্রত্যাশার ক্রিয়া (আশা করেছিলাম, অর্ডার করেছিলাম, চেয়েছিলাম)",
          acceptedTypes: ["verb_phrase"],
          examples: ["expected", "ordered", "asked for", "was promised"],
        },
      ],
      examples: [
        {
          en: "This isn't what I expected.",
          bn: "আমি যা আশা করেছিলাম এটা তা নয়।",
          slotValues: { VERB: "expected" },
          topicArea: "daily_life",
        },
        {
          en: "This isn't what I ordered.",
          bn: "আমি যা অর্ডার করেছিলাম এটা তা নয়।",
          slotValues: { VERB: "ordered" },
          topicArea: "food",
        },
        {
          en: "This isn't what I asked for.",
          bn: "আমি যা চেয়েছিলাম এটা তা নয়।",
          slotValues: { VERB: "asked for" },
          topicArea: "shopping",
        },
        {
          en: "This isn't what I was promised.",
          bn: "আমাকে যা প্রতিশ্রুতি দেওয়া হয়েছিল এটা তা নয়।",
          slotValues: { VERB: "was promised" },
          topicArea: "work",
        },
        {
          en: "This isn't what I paid for.",
          bn: "আমি যার জন্য টাকা দিয়েছিলাম এটা তা নয়।",
          slotValues: { VERB: "paid for" },
          topicArea: "shopping",
        },
        {
          en: "This isn't what I booked.",
          bn: "আমি যা বুক করেছিলাম এটা তা নয়।",
          slotValues: { VERB: "booked" },
          topicArea: "travel",
        },
        {
          en: "This isn't what I signed up for.",
          bn: "আমি যার জন্য নাম লিখিয়েছিলাম এটা তা নয়।",
          slotValues: { VERB: "signed up for" },
          topicArea: "education",
        },
        {
          en: "This isn't what I was told.",
          bn: "আমাকে যা বলা হয়েছিল এটা তা নয়।",
          slotValues: { VERB: "was told" },
          topicArea: "health",
        },
        {
          en: "This isn't what I had in mind.",
          bn: "আমার মনে যা ছিল এটা তা নয়।",
          slotValues: { VERB: "had in mind" },
          topicArea: "daily_life",
        },
        {
          en: "This isn't what I requested.",
          bn: "আমি যা অনুরোধ করেছিলাম এটা তা নয়।",
          slotValues: { VERB: "requested" },
          topicArea: "food",
        },
        {
          en: "This isn't what I was looking for.",
          bn: "আমি যা খুঁজছিলাম এটা তা নয়।",
          slotValues: { VERB: "was looking for" },
          topicArea: "shopping",
        },
        {
          en: "This isn't what I agreed to.",
          bn: "আমি যাতে রাজি হয়েছিলাম এটা তা নয়।",
          slotValues: { VERB: "agreed to" },
          topicArea: "work",
        },
        {
          en: "This isn't what I reserved.",
          bn: "আমি যা রিজার্ভ করেছিলাম এটা তা নয়।",
          slotValues: { VERB: "reserved" },
          topicArea: "travel",
        },
        {
          en: "This isn't what I was taught.",
          bn: "আমাকে যা শেখানো হয়েছিল এটা তা নয়।",
          slotValues: { VERB: "was taught" },
          topicArea: "education",
        },
        {
          en: "This isn't what I was hoping for.",
          bn: "আমি যা আশা করছিলাম এটা তা নয়।",
          slotValues: { VERB: "was hoping for" },
          topicArea: "relationships",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "'This isn't what I...' expresses disappointment when something doesn't match your expectations.",
      usageNote_bn:
        "'This isn't what I...' কিছু আপনার প্রত্যাশার সাথে না মিললে হতাশা প্রকাশ করে।",
    },
    {
      id: "K7.5",
      formula: "I'm sorry, but I have to say that [CLAUSE]",
      formula_bn: "দুঃখিত, কিন্তু আমাকে বলতে হবে যে [উপবাক্য]",
      patternName: "Polite but Firm Complaint",
      patternName_bn: "ভদ্র কিন্তু দৃঢ় অভিযোগ",
      slots: [
        {
          name: "CLAUSE",
          description: "The complaint phrased diplomatically",
          description_bn: "কূটনৈতিকভাবে বলা অভিযোগ",
          acceptedTypes: ["clause"],
          examples: [
            "this is unacceptable",
            "I'm very disappointed",
            "the quality is not up to standard",
          ],
        },
      ],
      examples: [
        {
          en: "I'm sorry, but I have to say that this is unacceptable.",
          bn: "দুঃখিত, কিন্তু আমাকে বলতে হবে যে এটা গ্রহণযোগ্য নয়।",
          slotValues: { CLAUSE: "this is unacceptable" },
          topicArea: "daily_life",
        },
        {
          en: "I'm sorry, but I have to say that I'm very disappointed with the service.",
          bn: "দুঃখিত, কিন্তু আমাকে বলতে হবে যে সেবায় আমি খুব হতাশ।",
          slotValues: {
            CLAUSE: "I'm very disappointed with the service",
          },
          topicArea: "shopping",
        },
        {
          en: "I'm sorry, but I have to say that the food was cold.",
          bn: "দুঃখিত, কিন্তু আমাকে বলতে হবে যে খাবার ঠান্ডা ছিল।",
          slotValues: { CLAUSE: "the food was cold" },
          topicArea: "food",
        },
        {
          en: "I'm sorry, but I have to say that the room was not clean.",
          bn: "দুঃখিত, কিন্তু আমাকে বলতে হবে যে ঘরটা পরিষ্কার ছিল না।",
          slotValues: { CLAUSE: "the room was not clean" },
          topicArea: "travel",
        },
        {
          en: "I'm sorry, but I have to say that the quality is not up to standard.",
          bn: "দুঃখিত, কিন্তু আমাকে বলতে হবে যে মান মানসম্মত নয়।",
          slotValues: {
            CLAUSE: "the quality is not up to standard",
          },
          topicArea: "shopping",
        },
        {
          en: "I'm sorry, but I have to say that the meeting was poorly organized.",
          bn: "দুঃখিত, কিন্তু আমাকে বলতে হবে যে মিটিং খারাপভাবে আয়োজিত হয়েছিল।",
          slotValues: {
            CLAUSE: "the meeting was poorly organized",
          },
          topicArea: "work",
        },
        {
          en: "I'm sorry, but I have to say that I was kept waiting too long.",
          bn: "দুঃখিত, কিন্তু আমাকে বলতে হবে যে আমাকে অনেক বেশি সময় অপেক্ষা করানো হয়েছে।",
          slotValues: {
            CLAUSE: "I was kept waiting too long",
          },
          topicArea: "health",
        },
        {
          en: "I'm sorry, but I have to say that the course content is outdated.",
          bn: "দুঃখিত, কিন্তু আমাকে বলতে হবে যে কোর্সের বিষয়বস্তু পুরনো।",
          slotValues: {
            CLAUSE: "the course content is outdated",
          },
          topicArea: "education",
        },
        {
          en: "I'm sorry, but I have to say that your behavior was rude.",
          bn: "দুঃখিত, কিন্তু আমাকে বলতে হবে যে আপনার আচরণ অভদ্র ছিল।",
          slotValues: {
            CLAUSE: "your behavior was rude",
          },
          topicArea: "relationships",
        },
        {
          en: "I'm sorry, but I have to say that the delivery was damaged.",
          bn: "দুঃখিত, কিন্তু আমাকে বলতে হবে যে ডেলিভারি ক্ষতিগ্রস্ত ছিল।",
          slotValues: {
            CLAUSE: "the delivery was damaged",
          },
          topicArea: "shopping",
        },
        {
          en: "I'm sorry, but I have to say that the tour was not worth the price.",
          bn: "দুঃখিত, কিন্তু আমাকে বলতে হবে যে ট্যুর দামের তুলনায় ভালো ছিল না।",
          slotValues: {
            CLAUSE: "the tour was not worth the price",
          },
          topicArea: "travel",
        },
        {
          en: "I'm sorry, but I have to say that the project management has been poor.",
          bn: "দুঃখিত, কিন্তু আমাকে বলতে হবে যে প্রকল্প ব্যবস্থাপনা খারাপ ছিল।",
          slotValues: {
            CLAUSE: "the project management has been poor",
          },
          topicArea: "work",
        },
        {
          en: "I'm sorry, but I have to say that the portions were too small.",
          bn: "দুঃখিত, কিন্তু আমাকে বলতে হবে যে পরিবেশন অনেক কম ছিল।",
          slotValues: {
            CLAUSE: "the portions were too small",
          },
          topicArea: "food",
        },
        {
          en: "I'm sorry, but I have to say that I wasn't given clear instructions.",
          bn: "দুঃখিত, কিন্তু আমাকে বলতে হবে যে আমাকে স্পষ্ট নির্দেশনা দেওয়া হয়নি।",
          slotValues: {
            CLAUSE: "I wasn't given clear instructions",
          },
          topicArea: "education",
        },
        {
          en: "I'm sorry, but I have to say that the diagnosis seems wrong.",
          bn: "দুঃখিত, কিন্তু আমাকে বলতে হবে যে রোগ নির্ণয় ভুল মনে হচ্ছে।",
          slotValues: {
            CLAUSE: "the diagnosis seems wrong",
          },
          topicArea: "health",
        },
      ],
      formality: "formal",
      difficulty: "intermediate",
      usageNote:
        "Starting with 'I'm sorry, but I have to say that' softens the complaint while still being assertive. Useful in professional settings.",
      usageNote_bn:
        "'I'm sorry, but I have to say that' দিয়ে শুরু করলে অভিযোগ নরম হয় তবুও দৃঢ় থাকে। পেশাদার পরিবেশে কার্যকর।",
    },
  ],
};
