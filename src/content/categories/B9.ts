import { PatternCategory } from "@/types/pattern";

export const categoryB9: PatternCategory = {
  id: "B9",
  slug: "describing-personality-character",
  name: "Describing Personality & Character",
  name_bn: "ব্যক্তিত্ব ও চরিত্র বর্ণনা করা",
  description:
    "Learn how to describe someone's personality, character traits, habits, and tendencies.",
  description_bn:
    "কারো ব্যক্তিত্ব, চরিত্রের বৈশিষ্ট্য, অভ্যাস এবং প্রবণতা বর্ণনা করতে শিখুন।",
  icon: "💭",
  group: "B",
  groupName: "Describing People, Things & Situations",
  groupName_bn: "মানুষ, জিনিস এবং পরিস্থিতি বর্ণনা",
  difficulty: "intermediate",
  patterns: [
    {
      id: "B9.1",
      formula: "[PERSON] is the kind of person who [ACTION]",
      formula_bn: "[ব্যক্তি] এমন ধরনের মানুষ যে [কাজ]",
      patternName: "Character Type Description",
      patternName_bn: "চরিত্র ধরন বর্ণনা",
      slots: [
        {
          name: "PERSON",
          description: "The person being described",
          description_bn: "যে ব্যক্তিকে বর্ণনা করা হচ্ছে",
          acceptedTypes: ["person"],
          examples: ["He", "She", "My teacher"],
        },
        {
          name: "ACTION",
          description: "A habitual action that defines their character",
          description_bn: "একটি অভ্যাসগত কাজ যা তাদের চরিত্র সংজ্ঞায়িত করে",
          acceptedTypes: ["clause", "verb_phrase"],
          examples: [
            "always helps others",
            "never gives up",
            "listens carefully",
          ],
        },
      ],
      examples: [
        {
          en: "He is the kind of person who always helps others.",
          bn: "সে এমন ধরনের মানুষ যে সবসময় অন্যদের সাহায্য করে।",
          slotValues: { PERSON: "He", ACTION: "always helps others" },
          topicArea: "relationships",
        },
        {
          en: "She is the kind of person who never gives up.",
          bn: "সে এমন ধরনের মানুষ যে কখনো হাল ছাড়ে না।",
          slotValues: { PERSON: "She", ACTION: "never gives up" },
          topicArea: "work",
        },
        {
          en: "My teacher is the kind of person who listens carefully.",
          bn: "আমার শিক্ষক এমন ধরনের মানুষ যিনি মনোযোগ দিয়ে শোনেন।",
          slotValues: { PERSON: "My teacher", ACTION: "listens carefully" },
          topicArea: "education",
        },
        {
          en: "He is the kind of person who makes everyone laugh.",
          bn: "সে এমন ধরনের মানুষ যে সবাইকে হাসায়।",
          slotValues: { PERSON: "He", ACTION: "makes everyone laugh" },
          topicArea: "relationships",
        },
        {
          en: "She is the kind of person who remembers birthdays.",
          bn: "সে এমন ধরনের মানুষ যে জন্মদিন মনে রাখে।",
          slotValues: { PERSON: "She", ACTION: "remembers birthdays" },
          topicArea: "relationships",
        },
        {
          en: "My boss is the kind of person who values hard work.",
          bn: "আমার বস এমন ধরনের মানুষ যিনি কঠোর পরিশ্রমকে মূল্য দেন।",
          slotValues: { PERSON: "My boss", ACTION: "values hard work" },
          topicArea: "work",
        },
        {
          en: "He is the kind of person who stays calm under pressure.",
          bn: "সে এমন ধরনের মানুষ যে চাপের মধ্যেও শান্ত থাকে।",
          slotValues: {
            PERSON: "He",
            ACTION: "stays calm under pressure",
          },
          topicArea: "work",
        },
        {
          en: "She is the kind of person who shares her food with everyone.",
          bn: "সে এমন ধরনের মানুষ যে সবার সাথে খাবার ভাগ করে।",
          slotValues: {
            PERSON: "She",
            ACTION: "shares her food with everyone",
          },
          topicArea: "food",
        },
        {
          en: "My doctor is the kind of person who explains things patiently.",
          bn: "আমার ডাক্তার এমন ধরনের মানুষ যিনি ধৈর্য ধরে জিনিস ব্যাখ্যা করেন।",
          slotValues: {
            PERSON: "My doctor",
            ACTION: "explains things patiently",
          },
          topicArea: "health",
        },
        {
          en: "He is the kind of person who always plans ahead.",
          bn: "সে এমন ধরনের মানুষ যে সবসময় আগে থেকে পরিকল্পনা করে।",
          slotValues: { PERSON: "He", ACTION: "always plans ahead" },
          topicArea: "travel",
        },
        {
          en: "She is the kind of person who speaks her mind.",
          bn: "সে এমন ধরনের মানুষ যে মনের কথা বলে।",
          slotValues: { PERSON: "She", ACTION: "speaks her mind" },
          topicArea: "daily_life",
        },
        {
          en: "My neighbor is the kind of person who greets everyone warmly.",
          bn: "আমার প্রতিবেশী এমন ধরনের মানুষ যিনি সবাইকে আন্তরিকভাবে অভিবাদন জানান।",
          slotValues: {
            PERSON: "My neighbor",
            ACTION: "greets everyone warmly",
          },
          topicArea: "daily_life",
        },
        {
          en: "He is the kind of person who studies until he understands.",
          bn: "সে এমন ধরনের মানুষ যে বুঝে নেওয়া পর্যন্ত পড়ে।",
          slotValues: {
            PERSON: "He",
            ACTION: "studies until he understands",
          },
          topicArea: "education",
        },
        {
          en: "She is the kind of person who bargains at every shop.",
          bn: "সে এমন ধরনের মানুষ যে প্রতিটি দোকানে দরাদরি করে।",
          slotValues: {
            PERSON: "She",
            ACTION: "bargains at every shop",
          },
          topicArea: "shopping",
        },
        {
          en: "My father is the kind of person who never complains.",
          bn: "আমার বাবা এমন ধরনের মানুষ যিনি কখনো অভিযোগ করেন না।",
          slotValues: { PERSON: "My father", ACTION: "never complains" },
          topicArea: "relationships",
        },
      ],
      formality: "polite",
      difficulty: "intermediate",
      usageNote:
        "'The kind of person who...' is a powerful way to summarize someone's character through their typical behavior.",
      usageNote_bn:
        "'The kind of person who...' কারো সাধারণ আচরণের মাধ্যমে চরিত্র সংক্ষেপে বর্ণনা করার একটি শক্তিশালী উপায়।",
      combinableWith: ["B9.2", "B9.3"],
      banglaStructureMap:
        "[PERSON] (কর্তা) + এমন ধরনের মানুষ যে (সংজ্ঞায়ক) + [ACTION] (কাজ)",
    },
    {
      id: "B9.2",
      formula: "[PERSON] tends to [ACTION]",
      formula_bn: "[ব্যক্তি] [কাজ] করার প্রবণতা আছে",
      patternName: "Describing Tendencies",
      patternName_bn: "প্রবণতা বর্ণনা",
      slots: [
        {
          name: "PERSON",
          description: "The person being described",
          description_bn: "যে ব্যক্তিকে বর্ণনা করা হচ্ছে",
          acceptedTypes: ["person"],
          examples: ["He", "She", "My brother"],
        },
        {
          name: "ACTION",
          description: "A base form verb describing a habitual tendency",
          description_bn: "একটি মূল ক্রিয়া যা অভ্যাসগত প্রবণতা বর্ণনা করে",
          acceptedTypes: ["verb", "verb_phrase"],
          examples: ["worry too much", "talk a lot", "be late"],
        },
      ],
      examples: [
        {
          en: "He tends to worry too much.",
          bn: "তার বেশি চিন্তা করার প্রবণতা আছে।",
          slotValues: { PERSON: "He", ACTION: "worry too much" },
          topicArea: "daily_life",
        },
        {
          en: "She tends to talk a lot when she is nervous.",
          bn: "নার্ভাস হলে তার অনেক কথা বলার প্রবণতা আছে।",
          slotValues: {
            PERSON: "She",
            ACTION: "talk a lot when she is nervous",
          },
          topicArea: "relationships",
        },
        {
          en: "My brother tends to be late for everything.",
          bn: "আমার ভাইয়ের সবকিছুতে দেরি হওয়ার প্রবণতা আছে।",
          slotValues: {
            PERSON: "My brother",
            ACTION: "be late for everything",
          },
          topicArea: "daily_life",
        },
        {
          en: "He tends to overthink simple things.",
          bn: "তার সহজ বিষয়ে বেশি চিন্তা করার প্রবণতা আছে।",
          slotValues: { PERSON: "He", ACTION: "overthink simple things" },
          topicArea: "education",
        },
        {
          en: "She tends to be very organized at work.",
          bn: "কাজে তার খুব গোছানো থাকার প্রবণতা আছে।",
          slotValues: {
            PERSON: "She",
            ACTION: "be very organized at work",
          },
          topicArea: "work",
        },
        {
          en: "My mother tends to cook too much food.",
          bn: "আমার মায়ের অনেক বেশি খাবার রান্না করার প্রবণতা আছে।",
          slotValues: {
            PERSON: "My mother",
            ACTION: "cook too much food",
          },
          topicArea: "food",
        },
        {
          en: "He tends to avoid going to the doctor.",
          bn: "তার ডাক্তারের কাছে যাওয়া এড়িয়ে চলার প্রবণতা আছে।",
          slotValues: {
            PERSON: "He",
            ACTION: "avoid going to the doctor",
          },
          topicArea: "health",
        },
        {
          en: "She tends to take photos everywhere she goes.",
          bn: "যেখানেই যায় তার ছবি তোলার প্রবণতা আছে।",
          slotValues: {
            PERSON: "She",
            ACTION: "take photos everywhere she goes",
          },
          topicArea: "travel",
        },
        {
          en: "He tends to spend too much money on gadgets.",
          bn: "তার গ্যাজেটে অনেক বেশি টাকা খরচ করার প্রবণতা আছে।",
          slotValues: {
            PERSON: "He",
            ACTION: "spend too much money on gadgets",
          },
          topicArea: "shopping",
        },
        {
          en: "She tends to be very quiet in meetings.",
          bn: "মিটিংয়ে তার খুব চুপচাপ থাকার প্রবণতা আছে।",
          slotValues: {
            PERSON: "She",
            ACTION: "be very quiet in meetings",
          },
          topicArea: "work",
        },
        {
          en: "My friend tends to forget important dates.",
          bn: "আমার বন্ধুর গুরুত্বপূর্ণ তারিখ ভুলে যাওয়ার প্রবণতা আছে।",
          slotValues: {
            PERSON: "My friend",
            ACTION: "forget important dates",
          },
          topicArea: "relationships",
        },
        {
          en: "He tends to stay up late studying.",
          bn: "তার দেরি করে জেগে পড়াশোনা করার প্রবণতা আছে।",
          slotValues: { PERSON: "He", ACTION: "stay up late studying" },
          topicArea: "education",
        },
        {
          en: "She tends to eat very quickly.",
          bn: "তার খুব দ্রুত খাওয়ার প্রবণতা আছে।",
          slotValues: { PERSON: "She", ACTION: "eat very quickly" },
          topicArea: "food",
        },
        {
          en: "He tends to catch a cold during winter.",
          bn: "শীতকালে তার সর্দি লাগার প্রবণতা আছে।",
          slotValues: {
            PERSON: "He",
            ACTION: "catch a cold during winter",
          },
          topicArea: "health",
        },
        {
          en: "She tends to overpack when traveling.",
          bn: "ভ্রমণে তার বেশি জিনিসপত্র গোছানোর প্রবণতা আছে।",
          slotValues: { PERSON: "She", ACTION: "overpack when traveling" },
          topicArea: "travel",
        },
      ],
      formality: "polite",
      difficulty: "intermediate",
      usageNote:
        "'Tends to' describes habitual behavior without making it sound like a criticism. It softens the observation.",
      usageNote_bn:
        "'Tends to' সমালোচনা না করেই অভ্যাসগত আচরণ বর্ণনা করে। এটি পর্যবেক্ষণকে নরম করে।",
      combinableWith: ["B9.1", "B9.3"],
      banglaStructureMap:
        "[PERSON]-র (কর্তা + বিভক্তি) + [ACTION] (কাজ) + করার প্রবণতা আছে (ক্রিয়া)",
    },
    {
      id: "B9.3",
      formula: "[PERSON] is really [ADJECTIVE]",
      formula_bn: "[ব্যক্তি] সত্যিই [বিশেষণ]",
      patternName: "Character Trait with Intensifier",
      patternName_bn: "তীব্রতাসূচক সহ চরিত্র বৈশিষ্ট্য",
      slots: [
        {
          name: "PERSON",
          description: "The person being described",
          description_bn: "যে ব্যক্তিকে বর্ণনা করা হচ্ছে",
          acceptedTypes: ["person"],
          examples: ["He", "She", "My friend"],
        },
        {
          name: "ADJECTIVE",
          description: "A personality adjective",
          description_bn: "একটি ব্যক্তিত্ব বিশেষণ",
          acceptedTypes: ["adjective"],
          examples: ["generous", "patient", "stubborn"],
        },
      ],
      examples: [
        {
          en: "He is really generous.",
          bn: "সে সত্যিই উদার।",
          slotValues: { PERSON: "He", ADJECTIVE: "generous" },
          topicArea: "relationships",
        },
        {
          en: "She is really patient with children.",
          bn: "সে সত্যিই বাচ্চাদের সাথে ধৈর্যশীল।",
          slotValues: { PERSON: "She", ADJECTIVE: "patient with children" },
          topicArea: "relationships",
        },
        {
          en: "My friend is really stubborn.",
          bn: "আমার বন্ধু সত্যিই জেদি।",
          slotValues: { PERSON: "My friend", ADJECTIVE: "stubborn" },
          topicArea: "relationships",
        },
        {
          en: "She is really hardworking.",
          bn: "সে সত্যিই পরিশ্রমী।",
          slotValues: { PERSON: "She", ADJECTIVE: "hardworking" },
          topicArea: "work",
        },
        {
          en: "He is really shy around new people.",
          bn: "নতুন মানুষের সামনে সে সত্যিই লাজুক।",
          slotValues: {
            PERSON: "He",
            ADJECTIVE: "shy around new people",
          },
          topicArea: "daily_life",
        },
        {
          en: "My teacher is really encouraging.",
          bn: "আমার শিক্ষক সত্যিই উৎসাহদায়ক।",
          slotValues: { PERSON: "My teacher", ADJECTIVE: "encouraging" },
          topicArea: "education",
        },
        {
          en: "She is really adventurous.",
          bn: "সে সত্যিই দুঃসাহসিক।",
          slotValues: { PERSON: "She", ADJECTIVE: "adventurous" },
          topicArea: "travel",
        },
        {
          en: "He is really honest about everything.",
          bn: "সে সবকিছুতে সত্যিই সৎ।",
          slotValues: {
            PERSON: "He",
            ADJECTIVE: "honest about everything",
          },
          topicArea: "daily_life",
        },
        {
          en: "My boss is really demanding.",
          bn: "আমার বস সত্যিই চাহিদা বেশি।",
          slotValues: { PERSON: "My boss", ADJECTIVE: "demanding" },
          topicArea: "work",
        },
        {
          en: "She is really thoughtful.",
          bn: "সে সত্যিই চিন্তাশীল।",
          slotValues: { PERSON: "She", ADJECTIVE: "thoughtful" },
          topicArea: "relationships",
        },
        {
          en: "He is really disciplined about his diet.",
          bn: "সে তার খাদ্যাভ্যাসে সত্যিই শৃঙ্খলাবদ্ধ।",
          slotValues: {
            PERSON: "He",
            ADJECTIVE: "disciplined about his diet",
          },
          topicArea: "food",
        },
        {
          en: "My sister is really creative.",
          bn: "আমার বোন সত্যিই সৃজনশীল।",
          slotValues: { PERSON: "My sister", ADJECTIVE: "creative" },
          topicArea: "daily_life",
        },
        {
          en: "He is really careful about his health.",
          bn: "সে তার স্বাস্থ্য সম্পর্কে সত্যিই সতর্ক।",
          slotValues: {
            PERSON: "He",
            ADJECTIVE: "careful about his health",
          },
          topicArea: "health",
        },
        {
          en: "She is really polite to everyone.",
          bn: "সে সবার সাথে সত্যিই ভদ্র।",
          slotValues: {
            PERSON: "She",
            ADJECTIVE: "polite to everyone",
          },
          topicArea: "shopping",
        },
        {
          en: "My grandfather is really wise.",
          bn: "আমার দাদা সত্যিই বিজ্ঞ।",
          slotValues: { PERSON: "My grandfather", ADJECTIVE: "wise" },
          topicArea: "education",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "'Really' intensifies the personality adjective. You can also use 'very', 'extremely', or 'incredibly' for variety.",
      usageNote_bn:
        "'Really' ব্যক্তিত্ব বিশেষণকে তীব্র করে। বৈচিত্র্যের জন্য 'very', 'extremely' বা 'incredibly'ও ব্যবহার করা যায়।",
      combinableWith: ["B9.1", "B9.4"],
      banglaStructureMap:
        "[PERSON] (কর্তা) + সত্যিই (তীব্রতাসূচক) + [ADJECTIVE] (বিশেষণ)",
    },
    {
      id: "B9.4",
      formula: "[PERSON] is known for being [ADJECTIVE]",
      formula_bn: "[ব্যক্তি] [বিশেষণ] হওয়ার জন্য পরিচিত",
      patternName: "Reputation Description",
      patternName_bn: "সুনাম বর্ণনা",
      slots: [
        {
          name: "PERSON",
          description: "The person being described",
          description_bn: "যে ব্যক্তিকে বর্ণনা করা হচ্ছে",
          acceptedTypes: ["person"],
          examples: ["He", "She", "Our principal"],
        },
        {
          name: "ADJECTIVE",
          description: "A personality trait they are known for",
          description_bn: "একটি ব্যক্তিত্ব বৈশিষ্ট্য যার জন্য তারা পরিচিত",
          acceptedTypes: ["adjective", "adjective_phrase"],
          examples: ["strict", "very kind", "extremely punctual"],
        },
      ],
      examples: [
        {
          en: "He is known for being very strict.",
          bn: "সে খুব কঠোর হওয়ার জন্য পরিচিত।",
          slotValues: { PERSON: "He", ADJECTIVE: "very strict" },
          topicArea: "education",
        },
        {
          en: "She is known for being extremely generous.",
          bn: "সে অত্যন্ত উদার হওয়ার জন্য পরিচিত।",
          slotValues: { PERSON: "She", ADJECTIVE: "extremely generous" },
          topicArea: "relationships",
        },
        {
          en: "Our principal is known for being fair to everyone.",
          bn: "আমাদের প্রধান শিক্ষক সবার প্রতি ন্যায্য হওয়ার জন্য পরিচিত।",
          slotValues: {
            PERSON: "Our principal",
            ADJECTIVE: "fair to everyone",
          },
          topicArea: "education",
        },
        {
          en: "He is known for being hardworking.",
          bn: "সে পরিশ্রমী হওয়ার জন্য পরিচিত।",
          slotValues: { PERSON: "He", ADJECTIVE: "hardworking" },
          topicArea: "work",
        },
        {
          en: "She is known for being very friendly.",
          bn: "সে খুব বন্ধুভাবাপন্ন হওয়ার জন্য পরিচিত।",
          slotValues: { PERSON: "She", ADJECTIVE: "very friendly" },
          topicArea: "daily_life",
        },
        {
          en: "The chef is known for being creative with recipes.",
          bn: "শেফ রেসিপিতে সৃজনশীল হওয়ার জন্য পরিচিত।",
          slotValues: {
            PERSON: "The chef",
            ADJECTIVE: "creative with recipes",
          },
          topicArea: "food",
        },
        {
          en: "My doctor is known for being thorough.",
          bn: "আমার ডাক্তার পুঙ্খানুপুঙ্খ হওয়ার জন্য পরিচিত।",
          slotValues: { PERSON: "My doctor", ADJECTIVE: "thorough" },
          topicArea: "health",
        },
        {
          en: "She is known for being very adventurous.",
          bn: "সে খুব দুঃসাহসিক হওয়ার জন্য পরিচিত।",
          slotValues: { PERSON: "She", ADJECTIVE: "very adventurous" },
          topicArea: "travel",
        },
        {
          en: "He is known for being honest in business.",
          bn: "সে ব্যবসায় সৎ হওয়ার জন্য পরিচিত।",
          slotValues: {
            PERSON: "He",
            ADJECTIVE: "honest in business",
          },
          topicArea: "shopping",
        },
        {
          en: "My mother is known for being the best cook in the family.",
          bn: "আমার মা পরিবারের সেরা রাঁধুনি হওয়ার জন্য পরিচিত।",
          slotValues: {
            PERSON: "My mother",
            ADJECTIVE: "the best cook in the family",
          },
          topicArea: "food",
        },
        {
          en: "The manager is known for being supportive.",
          bn: "ম্যানেজার সহায়ক হওয়ার জন্য পরিচিত।",
          slotValues: { PERSON: "The manager", ADJECTIVE: "supportive" },
          topicArea: "work",
        },
        {
          en: "He is known for being very calm in difficult situations.",
          bn: "সে কঠিন পরিস্থিতিতে খুব শান্ত হওয়ার জন্য পরিচিত।",
          slotValues: {
            PERSON: "He",
            ADJECTIVE: "very calm in difficult situations",
          },
          topicArea: "daily_life",
        },
        {
          en: "She is known for being extremely punctual.",
          bn: "সে অত্যন্ত সময়নিষ্ঠ হওয়ার জন্য পরিচিত।",
          slotValues: { PERSON: "She", ADJECTIVE: "extremely punctual" },
          topicArea: "work",
        },
        {
          en: "My grandfather is known for being a great storyteller.",
          bn: "আমার দাদা একজন দারুণ গল্পকার হওয়ার জন্য পরিচিত।",
          slotValues: {
            PERSON: "My grandfather",
            ADJECTIVE: "a great storyteller",
          },
          topicArea: "relationships",
        },
        {
          en: "The professor is known for being tough but inspiring.",
          bn: "প্রফেসর কঠোর কিন্তু অনুপ্রেরণাদায়ক হওয়ার জন্য পরিচিত।",
          slotValues: {
            PERSON: "The professor",
            ADJECTIVE: "tough but inspiring",
          },
          topicArea: "education",
        },
      ],
      formality: "polite",
      difficulty: "intermediate",
      usageNote:
        "'Is known for being...' talks about someone's established reputation. It implies others also recognize this trait.",
      usageNote_bn:
        "'Is known for being...' কারো প্রতিষ্ঠিত সুনাম সম্পর্কে বলে। এটি বোঝায় যে অন্যরাও এই বৈশিষ্ট্য চেনে।",
      combinableWith: ["B9.1", "B9.3"],
      banglaStructureMap:
        "[PERSON] (কর্তা) + [ADJECTIVE] (বিশেষণ) + হওয়ার জন্য পরিচিত (ক্রিয়া)",
    },
    {
      id: "B9.5",
      formula: "[PERSON] can be [ADJECTIVE] sometimes",
      formula_bn: "[ব্যক্তি] মাঝে মাঝে [বিশেষণ] হতে পারে",
      patternName: "Occasional Character Trait",
      patternName_bn: "মাঝে মাঝে চরিত্র বৈশিষ্ট্য",
      slots: [
        {
          name: "PERSON",
          description: "The person being described",
          description_bn: "যে ব্যক্তিকে বর্ণনা করা হচ্ছে",
          acceptedTypes: ["person"],
          examples: ["He", "She", "My sister"],
        },
        {
          name: "ADJECTIVE",
          description: "A personality trait that appears occasionally",
          description_bn: "একটি ব্যক্তিত্ব বৈশিষ্ট্য যা মাঝে মাঝে দেখা যায়",
          acceptedTypes: ["adjective"],
          examples: ["moody", "impatient", "a bit selfish"],
        },
      ],
      examples: [
        {
          en: "He can be moody sometimes.",
          bn: "সে মাঝে মাঝে মেজাজি হতে পারে।",
          slotValues: { PERSON: "He", ADJECTIVE: "moody" },
          topicArea: "relationships",
        },
        {
          en: "She can be impatient sometimes.",
          bn: "সে মাঝে মাঝে অধৈর্য হতে পারে।",
          slotValues: { PERSON: "She", ADJECTIVE: "impatient" },
          topicArea: "daily_life",
        },
        {
          en: "My sister can be a bit selfish sometimes.",
          bn: "আমার বোন মাঝে মাঝে একটু স্বার্থপর হতে পারে।",
          slotValues: { PERSON: "My sister", ADJECTIVE: "a bit selfish" },
          topicArea: "relationships",
        },
        {
          en: "He can be very funny sometimes.",
          bn: "সে মাঝে মাঝে খুব মজার হতে পারে।",
          slotValues: { PERSON: "He", ADJECTIVE: "very funny" },
          topicArea: "daily_life",
        },
        {
          en: "She can be forgetful sometimes.",
          bn: "সে মাঝে মাঝে ভুলোমনা হতে পারে।",
          slotValues: { PERSON: "She", ADJECTIVE: "forgetful" },
          topicArea: "work",
        },
        {
          en: "My teacher can be strict sometimes.",
          bn: "আমার শিক্ষক মাঝে মাঝে কঠোর হতে পারেন।",
          slotValues: { PERSON: "My teacher", ADJECTIVE: "strict" },
          topicArea: "education",
        },
        {
          en: "He can be overprotective sometimes.",
          bn: "সে মাঝে মাঝে অতি সুরক্ষামূলক হতে পারে।",
          slotValues: { PERSON: "He", ADJECTIVE: "overprotective" },
          topicArea: "relationships",
        },
        {
          en: "She can be picky about food sometimes.",
          bn: "সে মাঝে মাঝে খাবার নিয়ে বাছবিচার করতে পারে।",
          slotValues: { PERSON: "She", ADJECTIVE: "picky about food" },
          topicArea: "food",
        },
        {
          en: "My boss can be unpredictable sometimes.",
          bn: "আমার বস মাঝে মাঝে অনির্ণেয় হতে পারেন।",
          slotValues: { PERSON: "My boss", ADJECTIVE: "unpredictable" },
          topicArea: "work",
        },
        {
          en: "He can be quite sensitive sometimes.",
          bn: "সে মাঝে মাঝে বেশ সংবেদনশীল হতে পারে।",
          slotValues: { PERSON: "He", ADJECTIVE: "quite sensitive" },
          topicArea: "relationships",
        },
        {
          en: "She can be overly cautious sometimes.",
          bn: "সে মাঝে মাঝে অতিরিক্ত সতর্ক হতে পারে।",
          slotValues: { PERSON: "She", ADJECTIVE: "overly cautious" },
          topicArea: "health",
        },
        {
          en: "My friend can be a bit lazy sometimes.",
          bn: "আমার বন্ধু মাঝে মাঝে একটু অলস হতে পারে।",
          slotValues: { PERSON: "My friend", ADJECTIVE: "a bit lazy" },
          topicArea: "education",
        },
        {
          en: "He can be very generous sometimes.",
          bn: "সে মাঝে মাঝে খুব উদার হতে পারে।",
          slotValues: { PERSON: "He", ADJECTIVE: "very generous" },
          topicArea: "shopping",
        },
        {
          en: "She can be indecisive sometimes.",
          bn: "সে মাঝে মাঝে সিদ্ধান্তহীন হতে পারে।",
          slotValues: { PERSON: "She", ADJECTIVE: "indecisive" },
          topicArea: "travel",
        },
        {
          en: "My colleague can be too talkative sometimes.",
          bn: "আমার সহকর্মী মাঝে মাঝে বেশি বাচাল হতে পারে।",
          slotValues: {
            PERSON: "My colleague",
            ADJECTIVE: "too talkative",
          },
          topicArea: "work",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "'Can be... sometimes' is a diplomatic way to mention someone's negative or occasional traits without being too direct.",
      usageNote_bn:
        "'Can be... sometimes' কারো নেতিবাচক বা মাঝে মাঝে দেখা বৈশিষ্ট্য খুব সরাসরি না বলে কূটনৈতিকভাবে উল্লেখ করার উপায়।",
      combinableWith: ["B9.2", "B9.3"],
      banglaStructureMap:
        "[PERSON] (কর্তা) + মাঝে মাঝে (সময়) + [ADJECTIVE] (বিশেষণ) + হতে পারে (ক্রিয়া)",
    },
  ],
};
