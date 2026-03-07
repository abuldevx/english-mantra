import { PatternCategory } from "@/types/pattern";

export const categoryB4: PatternCategory = {
  id: "B4",
  slug: "it-is-patterns",
  name: "'It Is' Patterns",
  name_bn: "'It Is' প্যাটার্নসমূহ",
  description:
    "Learn how to use 'it is' patterns to describe situations, express opinions, and talk about time, cost, and outcomes.",
  description_bn:
    "'It is' প্যাটার্ন ব্যবহার করে পরিস্থিতি বর্ণনা, মতামত প্রকাশ, এবং সময়, খরচ ও ফলাফল সম্পর্কে কথা বলতে শিখুন।",
  icon: "💡",
  group: "B",
  groupName: "Describing People, Things & Situations",
  groupName_bn: "মানুষ, জিনিস এবং পরিস্থিতি বর্ণনা",
  difficulty: "beginner",
  patterns: [
    {
      id: "B4.1",
      formula: "It is [ADJECTIVE] to [ACTION]",
      formula_bn: "[কাজ] করা [বিশেষণ]",
      patternName: "Evaluating Actions",
      patternName_bn: "কাজের মূল্যায়ন",
      slots: [
        {
          name: "ADJECTIVE",
          description: "An adjective that evaluates the action",
          description_bn: "একটি বিশেষণ যা কাজটির মূল্যায়ন করে",
          acceptedTypes: ["adjective"],
          examples: ["important", "difficult", "easy"],
        },
        {
          name: "ACTION",
          description: "A verb phrase (base form) describing the action",
          description_bn: "একটি ক্রিয়া পদবন্ধ (মূল রূপ) যা কাজটি বর্ণনা করে",
          acceptedTypes: ["verb"],
          examples: ["learn a new language", "stay healthy", "find a job"],
        },
      ],
      examples: [
        {
          en: "It is important to eat breakfast.",
          bn: "সকালের নাশতা খাওয়া গুরুত্বপূর্ণ।",
          slotValues: { ADJECTIVE: "important", ACTION: "eat breakfast" },
          topicArea: "health",
        },
        {
          en: "It is difficult to learn a new language.",
          bn: "নতুন ভাষা শেখা কঠিন।",
          slotValues: {
            ADJECTIVE: "difficult",
            ACTION: "learn a new language",
          },
          topicArea: "education",
        },
        {
          en: "It is easy to make mistakes.",
          bn: "ভুল করা সহজ।",
          slotValues: { ADJECTIVE: "easy", ACTION: "make mistakes" },
          topicArea: "daily_life",
        },
        {
          en: "It is nice to meet you.",
          bn: "আপনার সাথে দেখা হয়ে ভালো লাগলো।",
          slotValues: { ADJECTIVE: "nice", ACTION: "meet you" },
          topicArea: "relationships",
        },
        {
          en: "It is hard to find a good job these days.",
          bn: "আজকাল একটি ভালো চাকরি খুঁজে পাওয়া কঠিন।",
          slotValues: {
            ADJECTIVE: "hard",
            ACTION: "find a good job these days",
          },
          topicArea: "work",
        },
        {
          en: "It is dangerous to drive in the rain.",
          bn: "বৃষ্টিতে গাড়ি চালানো বিপজ্জনক।",
          slotValues: {
            ADJECTIVE: "dangerous",
            ACTION: "drive in the rain",
          },
          topicArea: "travel",
        },
        {
          en: "It is necessary to study regularly.",
          bn: "নিয়মিত পড়াশোনা করা প্রয়োজন।",
          slotValues: {
            ADJECTIVE: "necessary",
            ACTION: "study regularly",
          },
          topicArea: "education",
        },
        {
          en: "It is fun to cook with friends.",
          bn: "বন্ধুদের সাথে রান্না করা মজার।",
          slotValues: {
            ADJECTIVE: "fun",
            ACTION: "cook with friends",
          },
          topicArea: "food",
        },
        {
          en: "It is wise to save money.",
          bn: "টাকা জমানো বুদ্ধিমানের কাজ।",
          slotValues: { ADJECTIVE: "wise", ACTION: "save money" },
          topicArea: "daily_life",
        },
        {
          en: "It is rude to interrupt someone.",
          bn: "কাউকে থামিয়ে দেওয়া অভদ্র।",
          slotValues: {
            ADJECTIVE: "rude",
            ACTION: "interrupt someone",
          },
          topicArea: "relationships",
        },
        {
          en: "It is expensive to travel abroad.",
          bn: "বিদেশ ভ্রমণ করা ব্যয়বহুল।",
          slotValues: {
            ADJECTIVE: "expensive",
            ACTION: "travel abroad",
          },
          topicArea: "travel",
        },
        {
          en: "It is healthy to drink enough water.",
          bn: "পর্যাপ্ত পানি পান করা স্বাস্থ্যকর।",
          slotValues: {
            ADJECTIVE: "healthy",
            ACTION: "drink enough water",
          },
          topicArea: "health",
        },
        {
          en: "It is better to ask first.",
          bn: "আগে জিজ্ঞেস করা ভালো।",
          slotValues: { ADJECTIVE: "better", ACTION: "ask first" },
          topicArea: "work",
        },
        {
          en: "It is relaxing to listen to music.",
          bn: "গান শোনা আরামদায়ক।",
          slotValues: {
            ADJECTIVE: "relaxing",
            ACTION: "listen to music",
          },
          topicArea: "daily_life",
        },
        {
          en: "It is cheaper to buy in bulk.",
          bn: "পাইকারি কেনা সস্তা।",
          slotValues: { ADJECTIVE: "cheaper", ACTION: "buy in bulk" },
          topicArea: "shopping",
        },
      ],
      formality: "polite",
      difficulty: "beginner",
      usageNote:
        "This pattern uses 'it' as a dummy subject to evaluate or comment on an action. Very common in both spoken and written English.",
      usageNote_bn:
        "এই প্যাটার্ন একটি কাজের মূল্যায়ন করতে 'it' ডামি সাবজেক্ট হিসেবে ব্যবহার করে। কথ্য এবং লিখিত উভয় ইংরেজিতে খুবই সাধারণ।",
      combinableWith: ["B4.2"],
      banglaStructureMap:
        "[ACTION] করা (ক্রিয়া + করা) + [ADJECTIVE] (বিশেষণ)",
    },
    {
      id: "B4.2",
      formula: "It is [ADJECTIVE] that [CLAUSE]",
      formula_bn: "এটা [বিশেষণ] যে [উপবাক্য]",
      patternName: "Commenting on Facts",
      patternName_bn: "তথ্য সম্পর্কে মন্তব্য",
      slots: [
        {
          name: "ADJECTIVE",
          description: "An adjective expressing an opinion or evaluation",
          description_bn: "একটি বিশেষণ যা মতামত বা মূল্যায়ন প্রকাশ করে",
          acceptedTypes: ["adjective"],
          examples: ["surprising", "obvious", "unfortunate"],
        },
        {
          name: "CLAUSE",
          description: "A complete clause (subject + verb) stating a fact or situation",
          description_bn:
            "একটি সম্পূর্ণ উপবাক্য (কর্তা + ক্রিয়া) যা একটি তথ্য বা পরিস্থিতি বলে",
          acceptedTypes: ["clause"],
          examples: [
            "he passed the exam",
            "prices are going up",
            "she left without saying goodbye",
          ],
        },
      ],
      examples: [
        {
          en: "It is surprising that he passed the exam.",
          bn: "এটা আশ্চর্যের যে সে পরীক্ষায় পাশ করেছে।",
          slotValues: {
            ADJECTIVE: "surprising",
            CLAUSE: "he passed the exam",
          },
          topicArea: "education",
        },
        {
          en: "It is obvious that she is talented.",
          bn: "এটা স্পষ্ট যে সে প্রতিভাবান।",
          slotValues: {
            ADJECTIVE: "obvious",
            CLAUSE: "she is talented",
          },
          topicArea: "daily_life",
        },
        {
          en: "It is unfortunate that the flight is delayed.",
          bn: "এটা দুর্ভাগ্যজনক যে ফ্লাইট দেরি হচ্ছে।",
          slotValues: {
            ADJECTIVE: "unfortunate",
            CLAUSE: "the flight is delayed",
          },
          topicArea: "travel",
        },
        {
          en: "It is clear that we need more practice.",
          bn: "এটা স্পষ্ট যে আমাদের আরও অনুশীলন দরকার।",
          slotValues: {
            ADJECTIVE: "clear",
            CLAUSE: "we need more practice",
          },
          topicArea: "education",
        },
        {
          en: "It is strange that nobody called.",
          bn: "এটা অদ্ভুত যে কেউ ফোন করেনি।",
          slotValues: {
            ADJECTIVE: "strange",
            CLAUSE: "nobody called",
          },
          topicArea: "relationships",
        },
        {
          en: "It is wonderful that you got promoted.",
          bn: "এটা দারুণ যে তুমি পদোন্নতি পেয়েছ।",
          slotValues: {
            ADJECTIVE: "wonderful",
            CLAUSE: "you got promoted",
          },
          topicArea: "work",
        },
        {
          en: "It is sad that the shop closed down.",
          bn: "এটা দুঃখজনক যে দোকানটি বন্ধ হয়ে গেছে।",
          slotValues: {
            ADJECTIVE: "sad",
            CLAUSE: "the shop closed down",
          },
          topicArea: "shopping",
        },
        {
          en: "It is likely that it will rain tomorrow.",
          bn: "সম্ভবত আগামীকাল বৃষ্টি হবে।",
          slotValues: {
            ADJECTIVE: "likely",
            CLAUSE: "it will rain tomorrow",
          },
          topicArea: "daily_life",
        },
        {
          en: "It is true that exercise improves health.",
          bn: "এটা সত্য যে ব্যায়াম স্বাস্থ্যের উন্নতি করে।",
          slotValues: {
            ADJECTIVE: "true",
            CLAUSE: "exercise improves health",
          },
          topicArea: "health",
        },
        {
          en: "It is worrying that prices keep rising.",
          bn: "এটা উদ্বেগজনক যে দাম বাড়তেই থাকছে।",
          slotValues: {
            ADJECTIVE: "worrying",
            CLAUSE: "prices keep rising",
          },
          topicArea: "shopping",
        },
        {
          en: "It is good that you arrived safely.",
          bn: "ভালো হয়েছে যে তুমি নিরাপদে পৌঁছেছ।",
          slotValues: {
            ADJECTIVE: "good",
            CLAUSE: "you arrived safely",
          },
          topicArea: "travel",
        },
        {
          en: "It is unfair that he lost his job.",
          bn: "এটা অন্যায় যে সে চাকরি হারিয়েছে।",
          slotValues: {
            ADJECTIVE: "unfair",
            CLAUSE: "he lost his job",
          },
          topicArea: "work",
        },
        {
          en: "It is amazing that she speaks five languages.",
          bn: "এটা বিস্ময়কর যে সে পাঁচটি ভাষায় কথা বলে।",
          slotValues: {
            ADJECTIVE: "amazing",
            CLAUSE: "she speaks five languages",
          },
          topicArea: "education",
        },
        {
          en: "It is important that children eat healthy food.",
          bn: "এটা গুরুত্বপূর্ণ যে শিশুরা স্বাস্থ্যকর খাবার খায়।",
          slotValues: {
            ADJECTIVE: "important",
            CLAUSE: "children eat healthy food",
          },
          topicArea: "food",
        },
        {
          en: "It is reassuring that the doctor is experienced.",
          bn: "এটা আশ্বস্তকর যে ডাক্তার অভিজ্ঞ।",
          slotValues: {
            ADJECTIVE: "reassuring",
            CLAUSE: "the doctor is experienced",
          },
          topicArea: "health",
        },
      ],
      formality: "polite",
      difficulty: "beginner",
      usageNote:
        "This pattern lets you express an opinion about a fact or situation. The 'that' clause contains the fact you are commenting on.",
      usageNote_bn:
        "এই প্যাটার্ন আপনাকে একটি তথ্য বা পরিস্থিতি সম্পর্কে মতামত প্রকাশ করতে দেয়। 'that' উপবাক্যে আপনি যে তথ্য সম্পর্কে মন্তব্য করছেন তা থাকে।",
      combinableWith: ["B4.1"],
      banglaStructureMap:
        "এটা (ডামি কর্তা) + [ADJECTIVE] (বিশেষণ) + যে (সংযোজক) + [CLAUSE] (উপবাক্য)",
    },
    {
      id: "B4.3",
      formula: "It takes [TIME] to [ACTION]",
      formula_bn: "[কাজ] করতে [সময়] লাগে",
      patternName: "Describing Duration",
      patternName_bn: "সময়কাল বর্ণনা",
      slots: [
        {
          name: "TIME",
          description: "A time expression (how long something takes)",
          description_bn: "একটি সময় প্রকাশ (কত সময় লাগে)",
          acceptedTypes: ["time", "noun"],
          examples: ["two hours", "a long time", "about thirty minutes"],
        },
        {
          name: "ACTION",
          description: "A verb phrase describing the activity",
          description_bn: "একটি ক্রিয়া পদবন্ধ যা কাজটি বর্ণনা করে",
          acceptedTypes: ["verb"],
          examples: ["get there", "cook this dish", "learn to drive"],
        },
      ],
      examples: [
        {
          en: "It takes two hours to get there.",
          bn: "সেখানে যেতে দুই ঘণ্টা লাগে।",
          slotValues: { TIME: "two hours", ACTION: "get there" },
          topicArea: "travel",
        },
        {
          en: "It takes a long time to learn English well.",
          bn: "ভালোভাবে ইংরেজি শিখতে অনেক সময় লাগে।",
          slotValues: {
            TIME: "a long time",
            ACTION: "learn English well",
          },
          topicArea: "education",
        },
        {
          en: "It takes about thirty minutes to cook rice.",
          bn: "ভাত রান্না করতে প্রায় ত্রিশ মিনিট লাগে।",
          slotValues: {
            TIME: "about thirty minutes",
            ACTION: "cook rice",
          },
          topicArea: "food",
        },
        {
          en: "It takes patience to raise children.",
          bn: "সন্তান বড় করতে ধৈর্য লাগে।",
          slotValues: { TIME: "patience", ACTION: "raise children" },
          topicArea: "relationships",
        },
        {
          en: "It takes ten minutes to walk to the office.",
          bn: "অফিসে হেঁটে যেতে দশ মিনিট লাগে।",
          slotValues: {
            TIME: "ten minutes",
            ACTION: "walk to the office",
          },
          topicArea: "work",
        },
        {
          en: "It takes a week to recover from this flu.",
          bn: "এই ফ্লু থেকে সেরে উঠতে এক সপ্তাহ লাগে।",
          slotValues: {
            TIME: "a week",
            ACTION: "recover from this flu",
          },
          topicArea: "health",
        },
        {
          en: "It takes courage to speak the truth.",
          bn: "সত্য বলতে সাহস লাগে।",
          slotValues: { TIME: "courage", ACTION: "speak the truth" },
          topicArea: "relationships",
        },
        {
          en: "It takes only five minutes to make tea.",
          bn: "চা বানাতে মাত্র পাঁচ মিনিট লাগে।",
          slotValues: {
            TIME: "only five minutes",
            ACTION: "make tea",
          },
          topicArea: "food",
        },
        {
          en: "It takes three days to deliver the package.",
          bn: "প্যাকেজ পৌঁছাতে তিন দিন লাগে।",
          slotValues: {
            TIME: "three days",
            ACTION: "deliver the package",
          },
          topicArea: "shopping",
        },
        {
          en: "It takes years to become an expert.",
          bn: "বিশেষজ্ঞ হতে বছরের পর বছর লাগে।",
          slotValues: { TIME: "years", ACTION: "become an expert" },
          topicArea: "work",
        },
        {
          en: "It takes fifteen minutes to get to the airport.",
          bn: "বিমানবন্দরে যেতে পনেরো মিনিট লাগে।",
          slotValues: {
            TIME: "fifteen minutes",
            ACTION: "get to the airport",
          },
          topicArea: "travel",
        },
        {
          en: "It takes hard work to succeed.",
          bn: "সফল হতে কঠোর পরিশ্রম লাগে।",
          slotValues: { TIME: "hard work", ACTION: "succeed" },
          topicArea: "work",
        },
        {
          en: "It takes about an hour to finish the homework.",
          bn: "হোমওয়ার্ক শেষ করতে প্রায় এক ঘণ্টা লাগে।",
          slotValues: {
            TIME: "about an hour",
            ACTION: "finish the homework",
          },
          topicArea: "education",
        },
        {
          en: "It takes six months to build the house.",
          bn: "বাড়িটি তৈরি করতে ছয় মাস লাগে।",
          slotValues: {
            TIME: "six months",
            ACTION: "build the house",
          },
          topicArea: "daily_life",
        },
        {
          en: "It takes a lot of practice to play the guitar.",
          bn: "গিটার বাজাতে অনেক অনুশীলন লাগে।",
          slotValues: {
            TIME: "a lot of practice",
            ACTION: "play the guitar",
          },
          topicArea: "education",
        },
      ],
      formality: "casual",
      difficulty: "beginner",
      usageNote:
        "'It takes' can describe literal time duration or abstract requirements like patience, courage, etc.",
      usageNote_bn:
        "'It takes' আক্ষরিক সময়কাল বা ধৈর্য, সাহস ইত্যাদির মতো বিমূর্ত প্রয়োজনীয়তা বর্ণনা করতে পারে।",
      combinableWith: ["B4.4"],
      banglaStructureMap:
        "[ACTION] করতে (ক্রিয়া + বিভক্তি) + [TIME] (সময়) + লাগে (ক্রিয়া)",
    },
    {
      id: "B4.4",
      formula: "It costs [AMOUNT] to [ACTION]",
      formula_bn: "[কাজ] করতে [পরিমাণ] খরচ হয়",
      patternName: "Describing Cost",
      patternName_bn: "খরচ বর্ণনা",
      slots: [
        {
          name: "AMOUNT",
          description: "A monetary amount or cost expression",
          description_bn: "একটি আর্থিক পরিমাণ বা খরচের অভিব্যক্তি",
          acceptedTypes: ["number", "noun"],
          examples: ["a lot of money", "$50", "nothing"],
        },
        {
          name: "ACTION",
          description: "A verb phrase describing what the cost is for",
          description_bn:
            "একটি ক্রিয়া পদবন্ধ যা বর্ণনা করে খরচ কিসের জন্য",
          acceptedTypes: ["verb"],
          examples: ["fix the car", "eat at that restaurant", "fly to London"],
        },
      ],
      examples: [
        {
          en: "It costs a lot of money to travel abroad.",
          bn: "বিদেশ ভ্রমণ করতে অনেক টাকা খরচ হয়।",
          slotValues: {
            AMOUNT: "a lot of money",
            ACTION: "travel abroad",
          },
          topicArea: "travel",
        },
        {
          en: "It costs nothing to be kind.",
          bn: "দয়ালু হতে কোনো খরচ হয় না।",
          slotValues: { AMOUNT: "nothing", ACTION: "be kind" },
          topicArea: "relationships",
        },
        {
          en: "It costs about $50 to fill up the tank.",
          bn: "ট্যাংক ভর্তি করতে প্রায় ৫০ ডলার খরচ হয়।",
          slotValues: { AMOUNT: "about $50", ACTION: "fill up the tank" },
          topicArea: "travel",
        },
        {
          en: "It costs a fortune to send children to private school.",
          bn: "বাচ্চাদের প্রাইভেট স্কুলে পাঠাতে অনেক টাকা খরচ হয়।",
          slotValues: {
            AMOUNT: "a fortune",
            ACTION: "send children to private school",
          },
          topicArea: "education",
        },
        {
          en: "It costs less to cook at home.",
          bn: "বাড়িতে রান্না করতে কম খরচ হয়।",
          slotValues: { AMOUNT: "less", ACTION: "cook at home" },
          topicArea: "food",
        },
        {
          en: "It costs too much to eat out every day.",
          bn: "প্রতিদিন বাইরে খেতে অনেক বেশি খরচ হয়।",
          slotValues: {
            AMOUNT: "too much",
            ACTION: "eat out every day",
          },
          topicArea: "food",
        },
        {
          en: "It costs around 500 taka to see a specialist.",
          bn: "বিশেষজ্ঞ ডাক্তার দেখাতে প্রায় ৫০০ টাকা খরচ হয়।",
          slotValues: {
            AMOUNT: "around 500 taka",
            ACTION: "see a specialist",
          },
          topicArea: "health",
        },
        {
          en: "It costs a lot to maintain an old car.",
          bn: "একটি পুরনো গাড়ি রক্ষণাবেক্ষণ করতে অনেক খরচ হয়।",
          slotValues: {
            AMOUNT: "a lot",
            ACTION: "maintain an old car",
          },
          topicArea: "daily_life",
        },
        {
          en: "It costs extra to get express delivery.",
          bn: "এক্সপ্রেস ডেলিভারি পেতে বাড়তি খরচ হয়।",
          slotValues: {
            AMOUNT: "extra",
            ACTION: "get express delivery",
          },
          topicArea: "shopping",
        },
        {
          en: "It costs more to live in the city.",
          bn: "শহরে থাকতে বেশি খরচ হয়।",
          slotValues: { AMOUNT: "more", ACTION: "live in the city" },
          topicArea: "daily_life",
        },
        {
          en: "It costs almost nothing to make this dish.",
          bn: "এই খাবারটি তৈরি করতে প্রায় কোনো খরচ হয় না।",
          slotValues: {
            AMOUNT: "almost nothing",
            ACTION: "make this dish",
          },
          topicArea: "food",
        },
        {
          en: "It costs thousands to renovate a kitchen.",
          bn: "রান্নাঘর সংস্কার করতে হাজার হাজার টাকা খরচ হয়।",
          slotValues: {
            AMOUNT: "thousands",
            ACTION: "renovate a kitchen",
          },
          topicArea: "daily_life",
        },
        {
          en: "It costs double during the holiday season.",
          bn: "ছুটির মৌসুমে দ্বিগুণ খরচ হয়।",
          slotValues: {
            AMOUNT: "double",
            ACTION: "travel during the holiday season",
          },
          topicArea: "travel",
        },
        {
          en: "It costs a small fee to join the library.",
          bn: "লাইব্রেরিতে ভর্তি হতে সামান্য ফি লাগে।",
          slotValues: {
            AMOUNT: "a small fee",
            ACTION: "join the library",
          },
          topicArea: "education",
        },
        {
          en: "It costs quite a bit to hire a good lawyer.",
          bn: "একজন ভালো আইনজীবী নিয়োগ করতে বেশ খরচ হয়।",
          slotValues: {
            AMOUNT: "quite a bit",
            ACTION: "hire a good lawyer",
          },
          topicArea: "work",
        },
      ],
      formality: "casual",
      difficulty: "beginner",
      usageNote:
        "Similar structure to 'it takes'. Can describe literal monetary cost or metaphorical cost (effort, sacrifice).",
      usageNote_bn:
        "'It takes'-এর মতো গঠন। আক্ষরিক আর্থিক খরচ বা রূপক খরচ (প্রচেষ্টা, ত্যাগ) বর্ণনা করতে পারে।",
      combinableWith: ["B4.3"],
      banglaStructureMap:
        "[ACTION] করতে (ক্রিয়া + বিভক্তি) + [AMOUNT] (পরিমাণ) + খরচ হয় (ক্রিয়া)",
    },
    {
      id: "B4.5",
      formula: "It turns out that [CLAUSE]",
      formula_bn: "দেখা গেল যে [উপবাক্য]",
      patternName: "Revealing Outcomes",
      patternName_bn: "ফলাফল প্রকাশ",
      slots: [
        {
          name: "CLAUSE",
          description:
            "A complete clause revealing something unexpected or newly discovered",
          description_bn:
            "একটি সম্পূর্ণ উপবাক্য যা অপ্রত্যাশিত বা নতুন আবিষ্কৃত কিছু প্রকাশ করে",
          acceptedTypes: ["clause"],
          examples: [
            "he was right all along",
            "the shop was closed",
            "we had the wrong address",
          ],
        },
      ],
      examples: [
        {
          en: "It turns out that he was right all along.",
          bn: "দেখা গেল যে সে শুরু থেকেই ঠিক ছিল।",
          slotValues: { CLAUSE: "he was right all along" },
          topicArea: "relationships",
        },
        {
          en: "It turns out that the shop was already closed.",
          bn: "দেখা গেল যে দোকানটা আগেই বন্ধ হয়ে গিয়েছিল।",
          slotValues: { CLAUSE: "the shop was already closed" },
          topicArea: "shopping",
        },
        {
          en: "It turns out that we had the wrong address.",
          bn: "দেখা গেল যে আমাদের ঠিকানা ভুল ছিল।",
          slotValues: { CLAUSE: "we had the wrong address" },
          topicArea: "travel",
        },
        {
          en: "It turns out that the exam was postponed.",
          bn: "দেখা গেল যে পরীক্ষা স্থগিত করা হয়েছে।",
          slotValues: { CLAUSE: "the exam was postponed" },
          topicArea: "education",
        },
        {
          en: "It turns out that the food was undercooked.",
          bn: "দেখা গেল যে খাবারটা কম সিদ্ধ ছিল।",
          slotValues: { CLAUSE: "the food was undercooked" },
          topicArea: "food",
        },
        {
          en: "It turns out that she already knew about it.",
          bn: "দেখা গেল যে সে আগে থেকেই এটা জানতো।",
          slotValues: { CLAUSE: "she already knew about it" },
          topicArea: "relationships",
        },
        {
          en: "It turns out that the meeting was cancelled.",
          bn: "দেখা গেল যে মিটিং বাতিল করা হয়েছে।",
          slotValues: { CLAUSE: "the meeting was cancelled" },
          topicArea: "work",
        },
        {
          en: "It turns out that the cheaper option was better.",
          bn: "দেখা গেল যে সস্তা বিকল্পটাই ভালো ছিল।",
          slotValues: { CLAUSE: "the cheaper option was better" },
          topicArea: "shopping",
        },
        {
          en: "It turns out that he is allergic to peanuts.",
          bn: "দেখা গেল যে তার চিনাবাদামে অ্যালার্জি।",
          slotValues: { CLAUSE: "he is allergic to peanuts" },
          topicArea: "health",
        },
        {
          en: "It turns out that the flight was overbooked.",
          bn: "দেখা গেল যে ফ্লাইটে অতিরিক্ত বুকিং হয়ে গিয়েছিল।",
          slotValues: { CLAUSE: "the flight was overbooked" },
          topicArea: "travel",
        },
        {
          en: "It turns out that they are neighbors.",
          bn: "দেখা গেল যে তারা প্রতিবেশী।",
          slotValues: { CLAUSE: "they are neighbors" },
          topicArea: "relationships",
        },
        {
          en: "It turns out that the report had several errors.",
          bn: "দেখা গেল যে রিপোর্টে বেশ কিছু ভুল ছিল।",
          slotValues: { CLAUSE: "the report had several errors" },
          topicArea: "work",
        },
        {
          en: "It turns out that the symptoms were not serious.",
          bn: "দেখা গেল যে উপসর্গগুলো গুরুতর ছিল না।",
          slotValues: { CLAUSE: "the symptoms were not serious" },
          topicArea: "health",
        },
        {
          en: "It turns out that the answer was in the first chapter.",
          bn: "দেখা গেল যে উত্তরটি প্রথম অধ্যায়েই ছিল।",
          slotValues: {
            CLAUSE: "the answer was in the first chapter",
          },
          topicArea: "education",
        },
        {
          en: "It turns out that cooking is easier than I thought.",
          bn: "দেখা গেল যে রান্না করা আমার ধারণার চেয়ে সহজ।",
          slotValues: {
            CLAUSE: "cooking is easier than I thought",
          },
          topicArea: "food",
        },
      ],
      formality: "casual",
      difficulty: "beginner",
      usageNote:
        "'It turns out' introduces information that is surprising or contrary to what was expected. Great for storytelling.",
      usageNote_bn:
        "'It turns out' এমন তথ্য উপস্থাপন করে যা আশ্চর্যজনক বা প্রত্যাশার বিপরীত। গল্প বলার জন্য দারুণ।",
      combinableWith: ["B4.2"],
      banglaStructureMap:
        "দেখা গেল (ক্রিয়া) + যে (সংযোজক) + [CLAUSE] (উপবাক্য)",
    },
    {
      id: "B4.6",
      formula: "It's no wonder that [CLAUSE]",
      formula_bn: "অবাক হওয়ার কিছু নেই যে [বাক্যাংশ]",
      patternName: "Explanation",
      patternName_bn: "ব্যাখ্যা",
      slots: [
        {
          name: "CLAUSE",
          description:
            "A complete clause stating a logical or expected outcome",
          description_bn:
            "একটি সম্পূর্ণ উপবাক্য যা একটি যৌক্তিক বা প্রত্যাশিত ফলাফল বলে",
          acceptedTypes: ["clause"],
          examples: [
            "he's tired — he worked all day",
            "she passed — she studied so hard",
          ],
        },
      ],
      examples: [
        {
          en: "It's no wonder that he's tired — he worked all day.",
          bn: "অবাক হওয়ার কিছু নেই যে সে ক্লান্ত — সে সারাদিন কাজ করেছে।",
          slotValues: { CLAUSE: "he's tired — he worked all day" },
          topicArea: "work",
        },
        {
          en: "It's no wonder she passed — she studied so hard.",
          bn: "অবাক হওয়ার কিছু নেই যে সে পাস করেছে — সে অনেক পড়েছে।",
          slotValues: { CLAUSE: "she passed — she studied so hard" },
          topicArea: "education",
        },
        {
          en: "It's no wonder that the restaurant is always full — the food is amazing.",
          bn: "অবাক হওয়ার কিছু নেই যে রেস্তোরাঁ সবসময় ভরা থাকে — খাবার অসাধারণ।",
          slotValues: { CLAUSE: "the restaurant is always full — the food is amazing" },
          topicArea: "food",
        },
        {
          en: "It's no wonder that she's healthy — she exercises every day.",
          bn: "অবাক হওয়ার কিছু নেই যে সে সুস্থ — সে প্রতিদিন ব্যায়াম করে।",
          slotValues: { CLAUSE: "she's healthy — she exercises every day" },
          topicArea: "health",
        },
        {
          en: "It's no wonder that they're best friends — they've known each other since childhood.",
          bn: "অবাক হওয়ার কিছু নেই যে তারা সেরা বন্ধু — তারা ছোটবেলা থেকে একে অপরকে চেনে।",
          slotValues: { CLAUSE: "they're best friends — they've known each other since childhood" },
          topicArea: "relationships",
        },
        {
          en: "It's no wonder that he got promoted — he's the hardest worker in the team.",
          bn: "অবাক হওয়ার কিছু নেই যে সে পদোন্নতি পেয়েছে — সে দলের সবচেয়ে পরিশ্রমী।",
          slotValues: { CLAUSE: "he got promoted — he's the hardest worker in the team" },
          topicArea: "work",
        },
        {
          en: "It's no wonder that the shop is popular — their prices are great.",
          bn: "অবাক হওয়ার কিছু নেই যে দোকানটি জনপ্রিয় — তাদের দাম দারুণ।",
          slotValues: { CLAUSE: "the shop is popular — their prices are great" },
          topicArea: "shopping",
        },
        {
          en: "It's no wonder that you're sleepy — you stayed up all night.",
          bn: "অবাক হওয়ার কিছু নেই যে তোমার ঘুম পাচ্ছে — তুমি সারারাত জেগে ছিলে।",
          slotValues: { CLAUSE: "you're sleepy — you stayed up all night" },
          topicArea: "daily_life",
        },
        {
          en: "It's no wonder that tourism is booming — the country is beautiful.",
          bn: "অবাক হওয়ার কিছু নেই যে পর্যটন বাড়ছে — দেশটি সুন্দর।",
          slotValues: { CLAUSE: "tourism is booming — the country is beautiful" },
          topicArea: "travel",
        },
        {
          en: "It's no wonder that he's nervous — it's his first interview.",
          bn: "অবাক হওয়ার কিছু নেই যে সে নার্ভাস — এটা তার প্রথম ইন্টারভিউ।",
          slotValues: { CLAUSE: "he's nervous — it's his first interview" },
          topicArea: "work",
        },
        {
          en: "It's no wonder that the cake is delicious — she's a professional baker.",
          bn: "অবাক হওয়ার কিছু নেই যে কেকটা সুস্বাদু — সে একজন পেশাদার বেকার।",
          slotValues: { CLAUSE: "the cake is delicious — she's a professional baker" },
          topicArea: "food",
        },
        {
          en: "It's no wonder that he speaks English well — he lived abroad for years.",
          bn: "অবাক হওয়ার কিছু নেই যে সে ভালো ইংরেজি বলে — সে বছরের পর বছর বিদেশে থেকেছে।",
          slotValues: { CLAUSE: "he speaks English well — he lived abroad for years" },
          topicArea: "education",
        },
        {
          en: "It's no wonder that she's recovering fast — she follows the doctor's advice strictly.",
          bn: "অবাক হওয়ার কিছু নেই যে সে দ্রুত সুস্থ হচ্ছে — সে কঠোরভাবে ডাক্তারের পরামর্শ মানে।",
          slotValues: { CLAUSE: "she's recovering fast — she follows the doctor's advice strictly" },
          topicArea: "health",
        },
        {
          en: "It's no wonder that they love him — he's always kind to everyone.",
          bn: "অবাক হওয়ার কিছু নেই যে তারা তাকে ভালোবাসে — সে সবার সাথে সবসময় দয়ালু।",
          slotValues: { CLAUSE: "they love him — he's always kind to everyone" },
          topicArea: "relationships",
        },
        {
          en: "It's no wonder that the place is crowded — there's a huge sale going on.",
          bn: "অবাক হওয়ার কিছু নেই যে জায়গাটা ভিড় — বিশাল সেল চলছে।",
          slotValues: { CLAUSE: "the place is crowded — there's a huge sale going on" },
          topicArea: "shopping",
        },
      ],
      formality: "polite",
      difficulty: "beginner",
      usageNote:
        "'It's no wonder' is used to say that something is not surprising given the circumstances. It can be followed by 'that' or used without it.",
      usageNote_bn:
        "'It's no wonder' পরিস্থিতি বিবেচনায় কিছু আশ্চর্যের না বলতে ব্যবহৃত হয়। এটি 'that' সহ বা ছাড়া ব্যবহার করা যায়।",
      combinableWith: ["B4.2"],
      banglaStructureMap:
        "অবাক হওয়ার কিছু নেই (No wonder) + যে (That) + [CLAUSE] (উপবাক্য)",
    },
  ],
};
