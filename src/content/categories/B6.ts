import { PatternCategory } from "@/types/pattern";

export const categoryB6: PatternCategory = {
  id: "B6",
  slug: "cleft-sentences",
  name: "Cleft Sentences (Emphasis)",
  name_bn: "বিভক্ত বাক্য (জোর দেওয়া)",
  description:
    "Emphasize parts of a sentence using cleft structures like what-clefts, it-clefts, and fronting.",
  description_bn:
    "What-cleft, it-cleft এবং fronting-এর মতো ক্লেফট কাঠামো ব্যবহার করে বাক্যের অংশে জোর দিন।",
  icon: "🎯",
  group: "B",
  groupName: "Describing People, Things & Situations",
  groupName_bn: "মানুষ, জিনিস এবং পরিস্থিতি বর্ণনা",
  difficulty: "intermediate",
  patterns: [
    {
      id: "B6.1",
      formula: "What I [ACTION] is [THING]",
      formula_bn: "আমি যা [কাজ] তা হলো [জিনিস]",
      patternName: "What-Cleft for Emphasis",
      patternName_bn: "What-ক্লেফট জোর দেওয়া",
      slots: [
        {
          name: "ACTION",
          description: "A verb describing what you do, want, or need",
          description_bn: "একটি ক্রিয়া যা আপনি কী করেন, চান বা প্রয়োজন তা বর্ণনা করে",
          acceptedTypes: ["verb", "verb_phrase"],
          examples: ["want", "need", "like"],
        },
        {
          name: "THING",
          description: "The emphasized element — what you want, need, or like",
          description_bn: "জোর দেওয়া উপাদান — আপনি যা চান, প্রয়োজন বা পছন্দ করেন",
          acceptedTypes: ["noun", "noun_phrase", "to_verb"],
          examples: ["a good rest", "more time", "to travel"],
        },
      ],
      examples: [
        {
          en: "What I want is a good rest.",
          bn: "আমি যা চাই তা হলো ভালো বিশ্রাম।",
          slotValues: { ACTION: "want", THING: "a good rest" },
          topicArea: "daily_life",
        },
        {
          en: "What I need is more time.",
          bn: "আমার যা দরকার তা হলো আরও সময়।",
          slotValues: { ACTION: "need", THING: "more time" },
          topicArea: "work",
        },
        {
          en: "What I like is honesty.",
          bn: "আমি যা পছন্দ করি তা হলো সততা।",
          slotValues: { ACTION: "like", THING: "honesty" },
          topicArea: "relationships",
        },
        {
          en: "What I enjoy is cooking for my family.",
          bn: "আমি যা উপভোগ করি তা হলো পরিবারের জন্য রান্না করা।",
          slotValues: { ACTION: "enjoy", THING: "cooking for my family" },
          topicArea: "food",
        },
        {
          en: "What I really miss is my hometown.",
          bn: "আমি সত্যিই যা মিস করি তা হলো আমার জন্মশহর।",
          slotValues: { ACTION: "really miss", THING: "my hometown" },
          topicArea: "travel",
        },
        {
          en: "What I mean is we should leave early.",
          bn: "আমি যা বলতে চাইছি তা হলো আমাদের তাড়াতাড়ি বেরোনো উচিত।",
          slotValues: { ACTION: "mean", THING: "we should leave early" },
          topicArea: "daily_life",
        },
        {
          en: "What I love is reading before bed.",
          bn: "আমি যা ভালোবাসি তা হলো ঘুমানোর আগে পড়া।",
          slotValues: { ACTION: "love", THING: "reading before bed" },
          topicArea: "education",
        },
        {
          en: "What I suggest is a short break.",
          bn: "আমি যা পরামর্শ দিচ্ছি তা হলো একটু বিরতি।",
          slotValues: { ACTION: "suggest", THING: "a short break" },
          topicArea: "work",
        },
        {
          en: "What I hate is wasting food.",
          bn: "আমি যা ঘৃণা করি তা হলো খাবার নষ্ট করা।",
          slotValues: { ACTION: "hate", THING: "wasting food" },
          topicArea: "food",
        },
        {
          en: "What I remember is her smile.",
          bn: "আমি যা মনে রেখেছি তা হলো তার হাসি।",
          slotValues: { ACTION: "remember", THING: "her smile" },
          topicArea: "relationships",
        },
        {
          en: "What I hope for is a better future.",
          bn: "আমি যা আশা করি তা হলো একটি উজ্জ্বল ভবিষ্যৎ।",
          slotValues: { ACTION: "hope for", THING: "a better future" },
          topicArea: "daily_life",
        },
        {
          en: "What I fear is losing my health.",
          bn: "আমি যা ভয় পাই তা হলো স্বাস্থ্য হারানো।",
          slotValues: { ACTION: "fear", THING: "losing my health" },
          topicArea: "health",
        },
        {
          en: "What I admire is their dedication.",
          bn: "আমি যা প্রশংসা করি তা হলো তাদের নিষ্ঠা।",
          slotValues: { ACTION: "admire", THING: "their dedication" },
          topicArea: "work",
        },
        {
          en: "What I prefer is tea over coffee.",
          bn: "আমি যা পছন্দ করি তা হলো কফির চেয়ে চা।",
          slotValues: { ACTION: "prefer", THING: "tea over coffee" },
          topicArea: "food",
        },
        {
          en: "What I believe is that hard work pays off.",
          bn: "আমি যা বিশ্বাস করি তা হলো কঠোর পরিশ্রমের ফল পাওয়া যায়।",
          slotValues: { ACTION: "believe", THING: "that hard work pays off" },
          topicArea: "education",
        },
      ],
      formality: "polite",
      difficulty: "intermediate",
      usageNote:
        "What-clefts emphasize the object or complement. They are common in both spoken and written English.",
      usageNote_bn:
        "What-cleft কর্ম বা পূরক অংশে জোর দেয়। এগুলো কথ্য এবং লিখিত উভয় ইংরেজিতে সাধারণ।",
      combinableWith: ["B6.2", "B6.3"],
      banglaStructureMap:
        "আমি যা [ACTION] (ক্রিয়া) + তা হলো [THING] (জোর দেওয়া অংশ)",
    },
    {
      id: "B6.2",
      formula: "It was [PERSON] who [CLAUSE]",
      formula_bn: "এটা [ব্যক্তি] যে [উপবাক্য]",
      patternName: "It-Cleft for Person Emphasis",
      patternName_bn: "It-ক্লেফট ব্যক্তি জোর",
      slots: [
        {
          name: "PERSON",
          description: "The person being emphasized",
          description_bn: "যে ব্যক্তির উপর জোর দেওয়া হচ্ছে",
          acceptedTypes: ["person", "noun_phrase"],
          examples: ["my brother", "the teacher", "Rahim"],
        },
        {
          name: "CLAUSE",
          description: "A clause describing what the person did",
          description_bn: "একটি উপবাক্য যা ব্যক্তি কী করেছে তা বর্ণনা করে",
          acceptedTypes: ["clause"],
          examples: ["helped me", "found the keys", "called the police"],
        },
      ],
      examples: [
        {
          en: "It was my brother who helped me move.",
          bn: "আমার ভাইই আমাকে বাসা বদলাতে সাহায্য করেছিল।",
          slotValues: { PERSON: "my brother", CLAUSE: "helped me move" },
          topicArea: "relationships",
        },
        {
          en: "It was the teacher who inspired me to study.",
          bn: "শিক্ষকই আমাকে পড়াশোনায় অনুপ্রাণিত করেছিলেন।",
          slotValues: { PERSON: "the teacher", CLAUSE: "inspired me to study" },
          topicArea: "education",
        },
        {
          en: "It was Rahim who found the lost wallet.",
          bn: "রহিমই হারানো মানিব্যাগ খুঁজে পেয়েছিল।",
          slotValues: { PERSON: "Rahim", CLAUSE: "found the lost wallet" },
          topicArea: "daily_life",
        },
        {
          en: "It was my mother who taught me to cook.",
          bn: "আমার মাই আমাকে রান্না শিখিয়েছিলেন।",
          slotValues: { PERSON: "my mother", CLAUSE: "taught me to cook" },
          topicArea: "food",
        },
        {
          en: "It was the manager who approved the leave.",
          bn: "ম্যানেজারই ছুটি অনুমোদন করেছিলেন।",
          slotValues: { PERSON: "the manager", CLAUSE: "approved the leave" },
          topicArea: "work",
        },
        {
          en: "It was my friend who recommended this doctor.",
          bn: "আমার বন্ধুই এই ডাক্তারের কথা জানিয়েছিল।",
          slotValues: { PERSON: "my friend", CLAUSE: "recommended this doctor" },
          topicArea: "health",
        },
        {
          en: "It was the driver who noticed the problem first.",
          bn: "ড্রাইভারই প্রথম সমস্যাটি লক্ষ্য করেছিল।",
          slotValues: {
            PERSON: "the driver",
            CLAUSE: "noticed the problem first",
          },
          topicArea: "travel",
        },
        {
          en: "It was my sister who bought this gift for you.",
          bn: "আমার বোনই তোমার জন্য এই উপহার কিনেছিল।",
          slotValues: {
            PERSON: "my sister",
            CLAUSE: "bought this gift for you",
          },
          topicArea: "shopping",
        },
        {
          en: "It was the chef who created this special dish.",
          bn: "শেফই এই বিশেষ পদটি তৈরি করেছিলেন।",
          slotValues: {
            PERSON: "the chef",
            CLAUSE: "created this special dish",
          },
          topicArea: "food",
        },
        {
          en: "It was my father who encouraged me the most.",
          bn: "আমার বাবাই আমাকে সবচেয়ে বেশি উৎসাহিত করেছিলেন।",
          slotValues: {
            PERSON: "my father",
            CLAUSE: "encouraged me the most",
          },
          topicArea: "relationships",
        },
        {
          en: "It was the new student who answered correctly.",
          bn: "নতুন ছাত্রটিই সঠিক উত্তর দিয়েছিল।",
          slotValues: {
            PERSON: "the new student",
            CLAUSE: "answered correctly",
          },
          topicArea: "education",
        },
        {
          en: "It was my colleague who organized the event.",
          bn: "আমার সহকর্মীই অনুষ্ঠানটি আয়োজন করেছিল।",
          slotValues: {
            PERSON: "my colleague",
            CLAUSE: "organized the event",
          },
          topicArea: "work",
        },
        {
          en: "It was the doctor who saved his life.",
          bn: "ডাক্তারই তার জীবন বাঁচিয়েছিলেন।",
          slotValues: { PERSON: "the doctor", CLAUSE: "saved his life" },
          topicArea: "health",
        },
        {
          en: "It was the guide who showed us the hidden trail.",
          bn: "গাইডই আমাদের লুকানো পথটি দেখিয়েছিল।",
          slotValues: {
            PERSON: "the guide",
            CLAUSE: "showed us the hidden trail",
          },
          topicArea: "travel",
        },
        {
          en: "It was the shopkeeper who gave us a discount.",
          bn: "দোকানদারই আমাদের ছাড় দিয়েছিলেন।",
          slotValues: {
            PERSON: "the shopkeeper",
            CLAUSE: "gave us a discount",
          },
          topicArea: "shopping",
        },
      ],
      formality: "polite",
      difficulty: "intermediate",
      usageNote:
        "It-clefts with 'who' emphasize the person responsible for an action. Very common in storytelling and clarifications.",
      usageNote_bn:
        "'Who' সহ it-cleft কোনো কাজের জন্য দায়ী ব্যক্তির উপর জোর দেয়। গল্প বলা এবং স্পষ্টীকরণে খুবই সাধারণ।",
      combinableWith: ["B6.1", "B6.3"],
      banglaStructureMap:
        "[PERSON]-ই (জোর দেওয়া ব্যক্তি) + [CLAUSE] (কাজের বর্ণনা)",
    },
    {
      id: "B6.3",
      formula: "It is [THING] that [CLAUSE]",
      formula_bn: "এটা [জিনিস] যা [উপবাক্য]",
      patternName: "It-Cleft for Thing/Fact Emphasis",
      patternName_bn: "It-ক্লেফট জিনিস/তথ্য জোর",
      slots: [
        {
          name: "THING",
          description: "The thing or fact being emphasized",
          description_bn: "যে জিনিস বা তথ্যের উপর জোর দেওয়া হচ্ছে",
          acceptedTypes: ["noun", "noun_phrase"],
          examples: ["the price", "this book", "patience"],
        },
        {
          name: "CLAUSE",
          description: "A clause that gives more information about the emphasized element",
          description_bn: "একটি উপবাক্য যা জোর দেওয়া উপাদান সম্পর্কে আরও তথ্য দেয়",
          acceptedTypes: ["clause"],
          examples: ["matters most", "I worry about", "makes the difference"],
        },
      ],
      examples: [
        {
          en: "It is the price that worries me.",
          bn: "দামটাই আমাকে চিন্তিত করে।",
          slotValues: { THING: "the price", CLAUSE: "worries me" },
          topicArea: "shopping",
        },
        {
          en: "It is hard work that leads to success.",
          bn: "কঠোর পরিশ্রমই সাফল্যের দিকে নিয়ে যায়।",
          slotValues: { THING: "hard work", CLAUSE: "leads to success" },
          topicArea: "work",
        },
        {
          en: "It is this book that changed my life.",
          bn: "এই বইটিই আমার জীবন বদলে দিয়েছে।",
          slotValues: { THING: "this book", CLAUSE: "changed my life" },
          topicArea: "education",
        },
        {
          en: "It is patience that you need right now.",
          bn: "ধৈর্যই তোমার এখন দরকার।",
          slotValues: { THING: "patience", CLAUSE: "you need right now" },
          topicArea: "daily_life",
        },
        {
          en: "It is the weather that ruins our plans.",
          bn: "আবহাওয়াই আমাদের পরিকল্পনা নষ্ট করে।",
          slotValues: { THING: "the weather", CLAUSE: "ruins our plans" },
          topicArea: "travel",
        },
        {
          en: "It is fresh ingredients that make the food tasty.",
          bn: "তাজা উপকরণই খাবারকে সুস্বাদু করে।",
          slotValues: {
            THING: "fresh ingredients",
            CLAUSE: "make the food tasty",
          },
          topicArea: "food",
        },
        {
          en: "It is regular exercise that keeps you fit.",
          bn: "নিয়মিত ব্যায়ামই তোমাকে সুস্থ রাখে।",
          slotValues: {
            THING: "regular exercise",
            CLAUSE: "keeps you fit",
          },
          topicArea: "health",
        },
        {
          en: "It is trust that holds relationships together.",
          bn: "বিশ্বাসই সম্পর্ককে ধরে রাখে।",
          slotValues: {
            THING: "trust",
            CLAUSE: "holds relationships together",
          },
          topicArea: "relationships",
        },
        {
          en: "It is the deadline that is causing stress.",
          bn: "ডেডলাইনটাই মানসিক চাপ সৃষ্টি করছে।",
          slotValues: {
            THING: "the deadline",
            CLAUSE: "is causing stress",
          },
          topicArea: "work",
        },
        {
          en: "It is your attitude that makes the difference.",
          bn: "তোমার মনোভাবই পার্থক্য তৈরি করে।",
          slotValues: {
            THING: "your attitude",
            CLAUSE: "makes the difference",
          },
          topicArea: "daily_life",
        },
        {
          en: "It is the location that attracted us.",
          bn: "অবস্থানটিই আমাদের আকৃষ্ট করেছিল।",
          slotValues: { THING: "the location", CLAUSE: "attracted us" },
          topicArea: "travel",
        },
        {
          en: "It is quality that matters, not quantity.",
          bn: "গুণমানই গুরুত্বপূর্ণ, পরিমাণ নয়।",
          slotValues: {
            THING: "quality",
            CLAUSE: "matters, not quantity",
          },
          topicArea: "shopping",
        },
        {
          en: "It is practice that makes you fluent.",
          bn: "অনুশীলনই তোমাকে সাবলীল করে।",
          slotValues: { THING: "practice", CLAUSE: "makes you fluent" },
          topicArea: "education",
        },
        {
          en: "It is the spice that gives the curry its flavor.",
          bn: "মশলাই তরকারিকে তার স্বাদ দেয়।",
          slotValues: {
            THING: "the spice",
            CLAUSE: "gives the curry its flavor",
          },
          topicArea: "food",
        },
        {
          en: "It is sleep that your body needs most.",
          bn: "ঘুমই তোমার শরীরের সবচেয়ে বেশি দরকার।",
          slotValues: {
            THING: "sleep",
            CLAUSE: "your body needs most",
          },
          topicArea: "health",
        },
      ],
      formality: "polite",
      difficulty: "intermediate",
      usageNote:
        "It-clefts with 'that' emphasize a thing, idea, or fact. They make the important part of the sentence stand out clearly.",
      usageNote_bn:
        "'That' সহ it-cleft একটি জিনিস, ধারণা বা তথ্যের উপর জোর দেয়। এগুলো বাক্যের গুরুত্বপূর্ণ অংশকে স্পষ্টভাবে তুলে ধরে।",
      combinableWith: ["B6.1", "B6.2"],
      banglaStructureMap:
        "[THING]-ই (জোর দেওয়া জিনিস) + যা [CLAUSE] (উপবাক্য)",
    },
    {
      id: "B6.4",
      formula: "The thing is, [CLAUSE]",
      formula_bn: "ব্যাপার হলো, [উপবাক্য]",
      patternName: "Fronting with 'The thing is'",
      patternName_bn: "'The thing is' দিয়ে শুরু করা",
      slots: [
        {
          name: "CLAUSE",
          description: "A statement or explanation that follows",
          description_bn: "একটি বিবৃতি বা ব্যাখ্যা যা পরে আসে",
          acceptedTypes: ["clause", "statement"],
          examples: [
            "I don't have enough money",
            "we need more time",
            "she already knows",
          ],
        },
      ],
      examples: [
        {
          en: "The thing is, I don't have enough money.",
          bn: "ব্যাপার হলো, আমার কাছে যথেষ্ট টাকা নেই।",
          slotValues: { CLAUSE: "I don't have enough money" },
          topicArea: "shopping",
        },
        {
          en: "The thing is, we need more time to prepare.",
          bn: "ব্যাপার হলো, প্রস্তুত হতে আমাদের আরও সময় দরকার।",
          slotValues: { CLAUSE: "we need more time to prepare" },
          topicArea: "work",
        },
        {
          en: "The thing is, she already knows the truth.",
          bn: "ব্যাপার হলো, সে ইতিমধ্যে সত্যি জানে।",
          slotValues: { CLAUSE: "she already knows the truth" },
          topicArea: "relationships",
        },
        {
          en: "The thing is, the exam is tomorrow.",
          bn: "ব্যাপার হলো, পরীক্ষা কাল।",
          slotValues: { CLAUSE: "the exam is tomorrow" },
          topicArea: "education",
        },
        {
          en: "The thing is, I forgot to bring my passport.",
          bn: "ব্যাপার হলো, আমি পাসপোর্ট আনতে ভুলে গেছি।",
          slotValues: { CLAUSE: "I forgot to bring my passport" },
          topicArea: "travel",
        },
        {
          en: "The thing is, I'm allergic to nuts.",
          bn: "ব্যাপার হলো, বাদামে আমার অ্যালার্জি আছে।",
          slotValues: { CLAUSE: "I'm allergic to nuts" },
          topicArea: "food",
        },
        {
          en: "The thing is, the doctor said I need rest.",
          bn: "ব্যাপার হলো, ডাক্তার বলেছেন আমার বিশ্রাম দরকার।",
          slotValues: { CLAUSE: "the doctor said I need rest" },
          topicArea: "health",
        },
        {
          en: "The thing is, nobody told me about the meeting.",
          bn: "ব্যাপার হলো, কেউ আমাকে মিটিংয়ের কথা জানায়নি।",
          slotValues: { CLAUSE: "nobody told me about the meeting" },
          topicArea: "work",
        },
        {
          en: "The thing is, I can't swim.",
          bn: "ব্যাপার হলো, আমি সাঁতার জানি না।",
          slotValues: { CLAUSE: "I can't swim" },
          topicArea: "daily_life",
        },
        {
          en: "The thing is, the shop was already closed.",
          bn: "ব্যাপার হলো, দোকান ইতিমধ্যে বন্ধ ছিল।",
          slotValues: { CLAUSE: "the shop was already closed" },
          topicArea: "shopping",
        },
        {
          en: "The thing is, he never apologized.",
          bn: "ব্যাপার হলো, সে কখনো ক্ষমা চায়নি।",
          slotValues: { CLAUSE: "he never apologized" },
          topicArea: "relationships",
        },
        {
          en: "The thing is, I haven't finished reading the chapter.",
          bn: "ব্যাপার হলো, আমি অধ্যায়টি পড়া শেষ করিনি।",
          slotValues: { CLAUSE: "I haven't finished reading the chapter" },
          topicArea: "education",
        },
        {
          en: "The thing is, the flight got cancelled.",
          bn: "ব্যাপার হলো, ফ্লাইটটি বাতিল হয়ে গেছে।",
          slotValues: { CLAUSE: "the flight got cancelled" },
          topicArea: "travel",
        },
        {
          en: "The thing is, I left my medicine at home.",
          bn: "ব্যাপার হলো, আমি আমার ওষুধ বাড়িতে রেখে এসেছি।",
          slotValues: { CLAUSE: "I left my medicine at home" },
          topicArea: "health",
        },
        {
          en: "The thing is, the food here is not fresh.",
          bn: "ব্যাপার হলো, এখানকার খাবার তাজা নয়।",
          slotValues: { CLAUSE: "the food here is not fresh" },
          topicArea: "food",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "'The thing is' is used to introduce a key fact or problem in conversation. It adds a sense of explanation or confession.",
      usageNote_bn:
        "'The thing is' কথোপকথনে একটি মূল তথ্য বা সমস্যা উপস্থাপন করতে ব্যবহৃত হয়। এটি ব্যাখ্যা বা স্বীকারোক্তির ভাব যোগ করে।",
      combinableWith: ["B6.1", "B6.5"],
      banglaStructureMap: "ব্যাপার হলো (প্রবর্তক) + [CLAUSE] (মূল তথ্য)",
    },
    {
      id: "B6.5",
      formula: "All I [ACTION] is [THING]",
      formula_bn: "আমি শুধু যা [কাজ] তা হলো [জিনিস]",
      patternName: "All-Cleft for Emphasis",
      patternName_bn: "All-ক্লেফট জোর দেওয়া",
      slots: [
        {
          name: "ACTION",
          description: "A verb describing what you want or do",
          description_bn: "একটি ক্রিয়া যা আপনি কী চান বা করেন তা বর্ণনা করে",
          acceptedTypes: ["verb", "verb_phrase"],
          examples: ["want", "need", "ask for"],
        },
        {
          name: "THING",
          description: "The single emphasized thing you want or need",
          description_bn: "একমাত্র জোর দেওয়া জিনিস যা আপনি চান বা প্রয়োজন",
          acceptedTypes: ["noun", "noun_phrase", "to_verb"],
          examples: ["peace", "a chance", "to be heard"],
        },
      ],
      examples: [
        {
          en: "All I want is a cup of tea.",
          bn: "আমি শুধু যা চাই তা হলো এক কাপ চা।",
          slotValues: { ACTION: "want", THING: "a cup of tea" },
          topicArea: "food",
        },
        {
          en: "All I need is one more day.",
          bn: "আমার শুধু আরও একটা দিন দরকার।",
          slotValues: { ACTION: "need", THING: "one more day" },
          topicArea: "work",
        },
        {
          en: "All I ask for is honesty.",
          bn: "আমি শুধু সততা চাই।",
          slotValues: { ACTION: "ask for", THING: "honesty" },
          topicArea: "relationships",
        },
        {
          en: "All I know is that she left early.",
          bn: "আমি শুধু এটুকু জানি যে সে তাড়াতাড়ি চলে গেছে।",
          slotValues: { ACTION: "know", THING: "that she left early" },
          topicArea: "daily_life",
        },
        {
          en: "All I want is to pass this exam.",
          bn: "আমি শুধু এই পরীক্ষায় পাস করতে চাই।",
          slotValues: { ACTION: "want", THING: "to pass this exam" },
          topicArea: "education",
        },
        {
          en: "All I need is some fresh air.",
          bn: "আমার শুধু একটু তাজা বাতাস দরকার।",
          slotValues: { ACTION: "need", THING: "some fresh air" },
          topicArea: "health",
        },
        {
          en: "All I wish for is a safe journey.",
          bn: "আমি শুধু একটি নিরাপদ যাত্রা কামনা করি।",
          slotValues: { ACTION: "wish for", THING: "a safe journey" },
          topicArea: "travel",
        },
        {
          en: "All I can say is thank you.",
          bn: "আমি শুধু ধন্যবাদ বলতে পারি।",
          slotValues: { ACTION: "can say", THING: "thank you" },
          topicArea: "relationships",
        },
        {
          en: "All I did was ask a question.",
          bn: "আমি শুধু একটা প্রশ্ন করেছিলাম।",
          slotValues: { ACTION: "did", THING: "ask a question" },
          topicArea: "education",
        },
        {
          en: "All I care about is my family's happiness.",
          bn: "আমি শুধু আমার পরিবারের সুখ নিয়ে চিন্তা করি।",
          slotValues: {
            ACTION: "care about",
            THING: "my family's happiness",
          },
          topicArea: "relationships",
        },
        {
          en: "All I want is a good night's sleep.",
          bn: "আমি শুধু একটা ভালো রাতের ঘুম চাই।",
          slotValues: { ACTION: "want", THING: "a good night's sleep" },
          topicArea: "health",
        },
        {
          en: "All I had was a sandwich for lunch.",
          bn: "দুপুরে আমি শুধু একটা স্যান্ডউইচ খেয়েছিলাম।",
          slotValues: { ACTION: "had", THING: "a sandwich for lunch" },
          topicArea: "food",
        },
        {
          en: "All I remember is a bright light.",
          bn: "আমি শুধু একটি উজ্জ্বল আলো মনে করতে পারি।",
          slotValues: { ACTION: "remember", THING: "a bright light" },
          topicArea: "daily_life",
        },
        {
          en: "All I need is a new pair of shoes.",
          bn: "আমার শুধু এক জোড়া নতুন জুতা দরকার।",
          slotValues: { ACTION: "need", THING: "a new pair of shoes" },
          topicArea: "shopping",
        },
        {
          en: "All I wanted was a chance to explain.",
          bn: "আমি শুধু ব্যাখ্যা করার একটা সুযোগ চেয়েছিলাম।",
          slotValues: { ACTION: "wanted", THING: "a chance to explain" },
          topicArea: "work",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "'All I [verb] is...' limits the scope to one thing, creating strong emphasis. Very natural in spoken English.",
      usageNote_bn:
        "'All I [verb] is...' সুযোগকে একটি জিনিসে সীমাবদ্ধ করে, শক্তিশালী জোর তৈরি করে। কথ্য ইংরেজিতে খুব স্বাভাবিক।",
      combinableWith: ["B6.1", "B6.4"],
      banglaStructureMap:
        "আমি শুধু যা [ACTION] (ক্রিয়া) + তা হলো [THING] (জোর দেওয়া অংশ)",
    },
    {
      id: "B6.6",
      formula: "What really matters is [THING]",
      formula_bn: "আসলে যেটা গুরুত্বপূর্ণ তা হলো [জিনিস]",
      patternName: "Value Emphasis (What Really Matters)",
      patternName_bn: "মূল্য জোর (আসলে যেটা গুরুত্বপূর্ণ)",
      slots: [
        {
          name: "THING",
          description: "The thing that is truly important",
          description_bn: "যেটি সত্যিই গুরুত্বপূর্ণ",
          acceptedTypes: ["noun", "noun_phrase", "gerund", "clause"],
          examples: ["your health", "being honest", "that you tried"],
        },
      ],
      examples: [
        {
          en: "What really matters is your health.",
          bn: "আসলে যেটা গুরুত্বপূর্ণ তা হলো তোমার স্বাস্থ্য।",
          slotValues: { THING: "your health" },
          topicArea: "health",
        },
        {
          en: "What really matters is being honest.",
          bn: "আসলে যেটা গুরুত্বপূর্ণ তা হলো সৎ থাকা।",
          slotValues: { THING: "being honest" },
          topicArea: "relationships",
        },
        {
          en: "What really matters is that you tried.",
          bn: "আসলে যেটা গুরুত্বপূর্ণ তা হলো তুমি চেষ্টা করেছ।",
          slotValues: { THING: "that you tried" },
          topicArea: "education",
        },
        {
          en: "What really matters is the quality, not the price.",
          bn: "আসলে যেটা গুরুত্বপূর্ণ তা হলো গুণমান, দাম নয়।",
          slotValues: { THING: "the quality, not the price" },
          topicArea: "shopping",
        },
        {
          en: "What really matters is spending time together.",
          bn: "আসলে যেটা গুরুত্বপূর্ণ তা হলো একসাথে সময় কাটানো।",
          slotValues: { THING: "spending time together" },
          topicArea: "relationships",
        },
        {
          en: "What really matters is how you treat people.",
          bn: "আসলে যেটা গুরুত্বপূর্ণ তা হলো তুমি মানুষের সাথে কেমন ব্যবহার কর।",
          slotValues: { THING: "how you treat people" },
          topicArea: "daily_life",
        },
        {
          en: "What really matters is the effort, not the result.",
          bn: "আসলে যেটা গুরুত্বপূর্ণ তা হলো প্রচেষ্টা, ফলাফল নয়।",
          slotValues: { THING: "the effort, not the result" },
          topicArea: "work",
        },
        {
          en: "What really matters is that everyone is safe.",
          bn: "আসলে যেটা গুরুত্বপূর্ণ তা হলো সবাই নিরাপদ।",
          slotValues: { THING: "that everyone is safe" },
          topicArea: "daily_life",
        },
        {
          en: "What really matters is your happiness.",
          bn: "আসলে যেটা গুরুত্বপূর্ণ তা হলো তোমার সুখ।",
          slotValues: { THING: "your happiness" },
          topicArea: "relationships",
        },
        {
          en: "What really matters is getting the job done.",
          bn: "আসলে যেটা গুরুত্বপূর্ণ তা হলো কাজটা শেষ করা।",
          slotValues: { THING: "getting the job done" },
          topicArea: "work",
        },
        {
          en: "What really matters is the taste, not the appearance.",
          bn: "আসলে যেটা গুরুত্বপূর্ণ তা হলো স্বাদ, চেহারা নয়।",
          slotValues: { THING: "the taste, not the appearance" },
          topicArea: "food",
        },
        {
          en: "What really matters is having good friends.",
          bn: "আসলে যেটা গুরুত্বপূর্ণ তা হলো ভালো বন্ধু থাকা।",
          slotValues: { THING: "having good friends" },
          topicArea: "relationships",
        },
        {
          en: "What really matters is the experience, not the destination.",
          bn: "আসলে যেটা গুরুত্বপূর্ণ তা হলো অভিজ্ঞতা, গন্তব্য নয়।",
          slotValues: { THING: "the experience, not the destination" },
          topicArea: "travel",
        },
        {
          en: "What really matters is learning from your mistakes.",
          bn: "আসলে যেটা গুরুত্বপূর্ণ তা হলো ভুল থেকে শেখা।",
          slotValues: { THING: "learning from your mistakes" },
          topicArea: "education",
        },
        {
          en: "What really matters is that you're feeling better.",
          bn: "আসলে যেটা গুরুত্বপূর্ণ তা হলো তুমি ভালো অনুভব করছ।",
          slotValues: { THING: "that you're feeling better" },
          topicArea: "health",
        },
      ],
      formality: "polite",
      difficulty: "intermediate",
      usageNote:
        "'What really matters is...' is a value cleft that strongly emphasizes what is truly important, often contrasting with less important things.",
      usageNote_bn:
        "'What really matters is...' একটি মূল্য ক্লেফট যা সত্যিই গুরুত্বপূর্ণ বিষয়কে জোরালোভাবে তুলে ধরে, প্রায়ই কম গুরুত্বপূর্ণ বিষয়ের সাথে তুলনা করে।",
      combinableWith: ["B6.1", "B6.5"],
      banglaStructureMap:
        "আসলে যেটা গুরুত্বপূর্ণ (What really matters) + তা হলো [THING] (জোর দেওয়া অংশ)",
    },
  ],
};
