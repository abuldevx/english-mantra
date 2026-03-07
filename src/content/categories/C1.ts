import { PatternCategory } from "@/types/pattern";

export const categoryC1: PatternCategory = {
  id: "C1",
  slug: "present-habits",
  name: "What You Regularly Do (Present Habits)",
  name_bn: "আপনি নিয়মিত যা করেন (বর্তমান অভ্যাস)",
  description:
    "Learn how to talk about your daily routines, habits, and things you do regularly using present simple patterns.",
  description_bn:
    "বর্তমান সাধারণ প্যাটার্ন ব্যবহার করে আপনার দৈনিক রুটিন, অভ্যাস এবং নিয়মিত কাজ সম্পর্কে কথা বলতে শিখুন।",
  icon: "🔄",
  group: "C",
  groupName: "Actions & Time Patterns",
  groupName_bn: "কর্ম এবং সময়ের প্যাটার্ন",
  difficulty: "beginner",
  patterns: [
    {
      id: "C1.1",
      formula: "I [ACTION] every [TIME]",
      formula_bn: "আমি প্রতি [সময়] [কাজ] করি",
      patternName: "Regular Routine",
      patternName_bn: "নিয়মিত রুটিন",
      slots: [
        {
          name: "ACTION",
          description: "A base verb describing a habitual activity",
          description_bn: "একটি মূল ক্রিয়া যা অভ্যাসগত কার্যকলাপ বর্ণনা করে",
          acceptedTypes: ["verb"],
          examples: ["exercise", "cook", "study"],
        },
        {
          name: "TIME",
          description: "A time expression indicating frequency",
          description_bn: "একটি সময়সূচক অভিব্যক্তি যা পুনরাবৃত্তি নির্দেশ করে",
          acceptedTypes: ["time"],
          examples: ["day", "morning", "weekend"],
        },
      ],
      examples: [
        {
          en: "I exercise every morning.",
          bn: "আমি প্রতি সকালে ব্যায়াম করি।",
          slotValues: { ACTION: "exercise", TIME: "morning" },
          topicArea: "health",
        },
        {
          en: "I cook dinner every evening.",
          bn: "আমি প্রতি সন্ধ্যায় রাতের খাবার রান্না করি।",
          slotValues: { ACTION: "cook dinner", TIME: "evening" },
          topicArea: "food",
        },
        {
          en: "I study English every day.",
          bn: "আমি প্রতিদিন ইংরেজি পড়ি।",
          slotValues: { ACTION: "study English", TIME: "day" },
          topicArea: "education",
        },
        {
          en: "I call my parents every week.",
          bn: "আমি প্রতি সপ্তাহে আমার বাবা-মাকে ফোন করি।",
          slotValues: { ACTION: "call my parents", TIME: "week" },
          topicArea: "relationships",
        },
        {
          en: "I check my email every hour.",
          bn: "আমি প্রতি ঘণ্টায় আমার ইমেইল চেক করি।",
          slotValues: { ACTION: "check my email", TIME: "hour" },
          topicArea: "work",
        },
        {
          en: "I go to the gym every afternoon.",
          bn: "আমি প্রতি বিকেলে জিমে যাই।",
          slotValues: { ACTION: "go to the gym", TIME: "afternoon" },
          topicArea: "health",
        },
        {
          en: "I read a book every night.",
          bn: "আমি প্রতি রাতে একটি বই পড়ি।",
          slotValues: { ACTION: "read a book", TIME: "night" },
          topicArea: "education",
        },
        {
          en: "I water the plants every morning.",
          bn: "আমি প্রতি সকালে গাছে পানি দিই।",
          slotValues: { ACTION: "water the plants", TIME: "morning" },
          topicArea: "daily_life",
        },
        {
          en: "I visit my grandparents every month.",
          bn: "আমি প্রতি মাসে আমার দাদা-দাদিকে দেখতে যাই।",
          slotValues: { ACTION: "visit my grandparents", TIME: "month" },
          topicArea: "relationships",
        },
        {
          en: "I clean my room every weekend.",
          bn: "আমি প্রতি সপ্তাহান্তে আমার ঘর পরিষ্কার করি।",
          slotValues: { ACTION: "clean my room", TIME: "weekend" },
          topicArea: "daily_life",
        },
        {
          en: "I go shopping every Saturday.",
          bn: "আমি প্রতি শনিবার কেনাকাটা করতে যাই।",
          slotValues: { ACTION: "go shopping", TIME: "Saturday" },
          topicArea: "shopping",
        },
        {
          en: "I take a walk every evening.",
          bn: "আমি প্রতি সন্ধ্যায় হাঁটতে যাই।",
          slotValues: { ACTION: "take a walk", TIME: "evening" },
          topicArea: "health",
        },
        {
          en: "I attend a meeting every Monday.",
          bn: "আমি প্রতি সোমবার একটি মিটিংয়ে যোগ দিই।",
          slotValues: { ACTION: "attend a meeting", TIME: "Monday" },
          topicArea: "work",
        },
        {
          en: "I eat breakfast every morning.",
          bn: "আমি প্রতি সকালে নাস্তা খাই।",
          slotValues: { ACTION: "eat breakfast", TIME: "morning" },
          topicArea: "food",
        },
        {
          en: "I travel somewhere every summer.",
          bn: "আমি প্রতি গ্রীষ্মে কোথাও ভ্রমণ করি।",
          slotValues: { ACTION: "travel somewhere", TIME: "summer" },
          topicArea: "travel",
        },
      ],
      formality: "casual",
      difficulty: "beginner",
      usageNote:
        "Use this pattern to describe things you do on a regular schedule. 'Every' emphasizes the consistency of the habit.",
      usageNote_bn:
        "এই প্যাটার্নটি ব্যবহার করুন নিয়মিত সময়সূচি অনুযায়ী আপনি যা করেন তা বর্ণনা করতে। 'Every' অভ্যাসের ধারাবাহিকতার উপর জোর দেয়।",
      combinableWith: ["C1.2"],
      banglaStructureMap:
        "আমি (Subject) + প্রতি [TIME] (Time) + [ACTION] (Verb) + করি (Aux)",
    },
    {
      id: "C1.2",
      formula: "I usually/always/often [ACTION]",
      formula_bn: "আমি সাধারণত/সবসময়/প্রায়ই [কাজ] করি",
      patternName: "Frequency Adverb Habit",
      patternName_bn: "পুনরাবৃত্তিমূলক ক্রিয়াবিশেষণ অভ্যাস",
      slots: [
        {
          name: "ACTION",
          description:
            "A base verb or verb phrase describing a regular activity",
          description_bn:
            "একটি মূল ক্রিয়া বা ক্রিয়া পদবন্ধ যা নিয়মিত কাজ বর্ণনা করে",
          acceptedTypes: ["verb"],
          examples: ["wake up early", "eat lunch at noon", "take the bus"],
        },
      ],
      examples: [
        {
          en: "I usually wake up at 6 AM.",
          bn: "আমি সাধারণত সকাল ৬টায় উঠি।",
          slotValues: { ACTION: "wake up at 6 AM" },
          topicArea: "daily_life",
        },
        {
          en: "I always brush my teeth before bed.",
          bn: "আমি সবসময় ঘুমানোর আগে দাঁত মাজি।",
          slotValues: { ACTION: "brush my teeth before bed" },
          topicArea: "health",
        },
        {
          en: "I often eat lunch at my desk.",
          bn: "আমি প্রায়ই আমার ডেস্কে দুপুরের খাবার খাই।",
          slotValues: { ACTION: "eat lunch at my desk" },
          topicArea: "work",
        },
        {
          en: "I usually take the bus to work.",
          bn: "আমি সাধারণত বাসে করে কাজে যাই।",
          slotValues: { ACTION: "take the bus to work" },
          topicArea: "travel",
        },
        {
          en: "I always drink coffee in the morning.",
          bn: "আমি সবসময় সকালে কফি পান করি।",
          slotValues: { ACTION: "drink coffee in the morning" },
          topicArea: "food",
        },
        {
          en: "I often go for a run after work.",
          bn: "আমি প্রায়ই কাজের পরে দৌড়াতে যাই।",
          slotValues: { ACTION: "go for a run after work" },
          topicArea: "health",
        },
        {
          en: "I usually study at the library.",
          bn: "আমি সাধারণত লাইব্রেরিতে পড়ি।",
          slotValues: { ACTION: "study at the library" },
          topicArea: "education",
        },
        {
          en: "I always say please and thank you.",
          bn: "আমি সবসময় প্লিজ এবং থ্যাংক ইউ বলি।",
          slotValues: { ACTION: "say please and thank you" },
          topicArea: "daily_life",
        },
        {
          en: "I often cook for my friends.",
          bn: "আমি প্রায়ই আমার বন্ধুদের জন্য রান্না করি।",
          slotValues: { ACTION: "cook for my friends" },
          topicArea: "relationships",
        },
        {
          en: "I usually finish work by 5 PM.",
          bn: "আমি সাধারণত বিকাল ৫টার মধ্যে কাজ শেষ করি।",
          slotValues: { ACTION: "finish work by 5 PM" },
          topicArea: "work",
        },
        {
          en: "I always carry an umbrella.",
          bn: "আমি সবসময় একটি ছাতা সাথে রাখি।",
          slotValues: { ACTION: "carry an umbrella" },
          topicArea: "daily_life",
        },
        {
          en: "I often compare prices before buying.",
          bn: "আমি প্রায়ই কেনার আগে দাম তুলনা করি।",
          slotValues: { ACTION: "compare prices before buying" },
          topicArea: "shopping",
        },
        {
          en: "I usually read before going to sleep.",
          bn: "আমি সাধারণত ঘুমানোর আগে পড়ি।",
          slotValues: { ACTION: "read before going to sleep" },
          topicArea: "education",
        },
        {
          en: "I always call my mother on Fridays.",
          bn: "আমি সবসময় শুক্রবারে আমার মাকে ফোন করি।",
          slotValues: { ACTION: "call my mother on Fridays" },
          topicArea: "relationships",
        },
        {
          en: "I often try new restaurants.",
          bn: "আমি প্রায়ই নতুন রেস্তোরাঁ চেষ্টা করি।",
          slotValues: { ACTION: "try new restaurants" },
          topicArea: "food",
        },
      ],
      formality: "casual",
      difficulty: "beginner",
      usageNote:
        "Use frequency adverbs (usually, always, often) before the main verb. 'Always' = 100%, 'usually' = ~80%, 'often' = ~60%.",
      usageNote_bn:
        "পুনরাবৃত্তিমূলক ক্রিয়াবিশেষণ (usually, always, often) মূল ক্রিয়ার আগে ব্যবহার করুন। 'Always' = ১০০%, 'usually' = ~৮০%, 'often' = ~৬০%।",
      combinableWith: ["C1.1", "C1.3"],
      banglaStructureMap:
        "আমি (Subject) + সাধারণত/সবসময়/প্রায়ই (Adverb) + [ACTION] (Verb) + করি (Aux)",
    },
    {
      id: "C1.3",
      formula: "I sometimes [ACTION]",
      formula_bn: "আমি মাঝে মাঝে [কাজ] করি",
      patternName: "Occasional Habit",
      patternName_bn: "মাঝে মাঝে অভ্যাস",
      slots: [
        {
          name: "ACTION",
          description: "A base verb or verb phrase for something done occasionally",
          description_bn:
            "একটি মূল ক্রিয়া বা ক্রিয়া পদবন্ধ যা মাঝে মাঝে করা হয়",
          acceptedTypes: ["verb"],
          examples: ["skip breakfast", "work from home", "eat out"],
        },
      ],
      examples: [
        {
          en: "I sometimes skip breakfast.",
          bn: "আমি মাঝে মাঝে নাস্তা বাদ দিই।",
          slotValues: { ACTION: "skip breakfast" },
          topicArea: "food",
        },
        {
          en: "I sometimes work from home.",
          bn: "আমি মাঝে মাঝে বাসা থেকে কাজ করি।",
          slotValues: { ACTION: "work from home" },
          topicArea: "work",
        },
        {
          en: "I sometimes go for a swim.",
          bn: "আমি মাঝে মাঝে সাঁতার কাটতে যাই।",
          slotValues: { ACTION: "go for a swim" },
          topicArea: "health",
        },
        {
          en: "I sometimes forget my keys.",
          bn: "আমি মাঝে মাঝে আমার চাবি ভুলে যাই।",
          slotValues: { ACTION: "forget my keys" },
          topicArea: "daily_life",
        },
        {
          en: "I sometimes eat out with friends.",
          bn: "আমি মাঝে মাঝে বন্ধুদের সাথে বাইরে খাই।",
          slotValues: { ACTION: "eat out with friends" },
          topicArea: "relationships",
        },
        {
          en: "I sometimes take a different route.",
          bn: "আমি মাঝে মাঝে অন্য রাস্তা দিয়ে যাই।",
          slotValues: { ACTION: "take a different route" },
          topicArea: "travel",
        },
        {
          en: "I sometimes stay up late studying.",
          bn: "আমি মাঝে মাঝে রাত জেগে পড়াশোনা করি।",
          slotValues: { ACTION: "stay up late studying" },
          topicArea: "education",
        },
        {
          en: "I sometimes buy things on impulse.",
          bn: "আমি মাঝে মাঝে আবেগের বশে জিনিস কিনি।",
          slotValues: { ACTION: "buy things on impulse" },
          topicArea: "shopping",
        },
        {
          en: "I sometimes walk to the office.",
          bn: "আমি মাঝে মাঝে হেঁটে অফিসে যাই।",
          slotValues: { ACTION: "walk to the office" },
          topicArea: "work",
        },
        {
          en: "I sometimes watch movies alone.",
          bn: "আমি মাঝে মাঝে একা সিনেমা দেখি।",
          slotValues: { ACTION: "watch movies alone" },
          topicArea: "daily_life",
        },
        {
          en: "I sometimes try cooking new recipes.",
          bn: "আমি মাঝে মাঝে নতুন রেসিপি রান্না করার চেষ্টা করি।",
          slotValues: { ACTION: "try cooking new recipes" },
          topicArea: "food",
        },
        {
          en: "I sometimes take a nap after lunch.",
          bn: "আমি মাঝে মাঝে দুপুরের খাবারের পর ঘুমাই।",
          slotValues: { ACTION: "take a nap after lunch" },
          topicArea: "health",
        },
        {
          en: "I sometimes visit bookstores on weekends.",
          bn: "আমি মাঝে মাঝে সপ্তাহান্তে বইয়ের দোকানে যাই।",
          slotValues: { ACTION: "visit bookstores on weekends" },
          topicArea: "shopping",
        },
        {
          en: "I sometimes help my neighbors.",
          bn: "আমি মাঝে মাঝে আমার প্রতিবেশীদের সাহায্য করি।",
          slotValues: { ACTION: "help my neighbors" },
          topicArea: "relationships",
        },
        {
          en: "I sometimes travel by train.",
          bn: "আমি মাঝে মাঝে ট্রেনে ভ্রমণ করি।",
          slotValues: { ACTION: "travel by train" },
          topicArea: "travel",
        },
      ],
      formality: "casual",
      difficulty: "beginner",
      usageNote:
        "'Sometimes' indicates ~30-40% frequency. It can go at the beginning or middle of the sentence.",
      usageNote_bn:
        "'Sometimes' প্রায় ৩০-৪০% পুনরাবৃত্তি নির্দেশ করে। এটি বাক্যের শুরুতে বা মাঝে বসতে পারে।",
      combinableWith: ["C1.2", "C1.4"],
      banglaStructureMap:
        "আমি (Subject) + মাঝে মাঝে (Adverb) + [ACTION] (Verb) + করি (Aux)",
    },
    {
      id: "C1.4",
      formula: "I rarely/never [ACTION]",
      formula_bn: "আমি খুব কমই/কখনো না [কাজ] করি",
      patternName: "Infrequent or No Habit",
      patternName_bn: "বিরল বা শূন্য অভ্যাস",
      slots: [
        {
          name: "ACTION",
          description: "A base verb or verb phrase for something done rarely or never",
          description_bn:
            "একটি মূল ক্রিয়া বা ক্রিয়া পদবন্ধ যা খুব কমই বা কখনো করা হয় না",
          acceptedTypes: ["verb"],
          examples: ["eat junk food", "miss deadlines", "complain"],
        },
      ],
      examples: [
        {
          en: "I rarely eat junk food.",
          bn: "আমি খুব কমই জাঙ্ক ফুড খাই।",
          slotValues: { ACTION: "eat junk food" },
          topicArea: "food",
        },
        {
          en: "I never miss deadlines.",
          bn: "আমি কখনো ডেডলাইন মিস করি না।",
          slotValues: { ACTION: "miss deadlines" },
          topicArea: "work",
        },
        {
          en: "I rarely get sick.",
          bn: "আমি খুব কমই অসুস্থ হই।",
          slotValues: { ACTION: "get sick" },
          topicArea: "health",
        },
        {
          en: "I never drink soda.",
          bn: "আমি কখনো সোডা পান করি না।",
          slotValues: { ACTION: "drink soda" },
          topicArea: "food",
        },
        {
          en: "I rarely watch television.",
          bn: "আমি খুব কমই টেলিভিশন দেখি।",
          slotValues: { ACTION: "watch television" },
          topicArea: "daily_life",
        },
        {
          en: "I never argue with my colleagues.",
          bn: "আমি কখনো আমার সহকর্মীদের সাথে তর্ক করি না।",
          slotValues: { ACTION: "argue with my colleagues" },
          topicArea: "work",
        },
        {
          en: "I rarely take taxis.",
          bn: "আমি খুব কমই ট্যাক্সিতে চড়ি।",
          slotValues: { ACTION: "take taxis" },
          topicArea: "travel",
        },
        {
          en: "I never skip my classes.",
          bn: "আমি কখনো আমার ক্লাস বাদ দিই না।",
          slotValues: { ACTION: "skip my classes" },
          topicArea: "education",
        },
        {
          en: "I rarely complain about anything.",
          bn: "আমি খুব কমই কোনো কিছু নিয়ে অভিযোগ করি।",
          slotValues: { ACTION: "complain about anything" },
          topicArea: "daily_life",
        },
        {
          en: "I never go to bed after midnight.",
          bn: "আমি কখনো মধ্যরাতের পরে ঘুমাতে যাই না।",
          slotValues: { ACTION: "go to bed after midnight" },
          topicArea: "health",
        },
        {
          en: "I rarely spend money on luxury items.",
          bn: "আমি খুব কমই বিলাসদ্রব্যে টাকা খরচ করি।",
          slotValues: { ACTION: "spend money on luxury items" },
          topicArea: "shopping",
        },
        {
          en: "I never forget my friends' birthdays.",
          bn: "আমি কখনো আমার বন্ধুদের জন্মদিন ভুলি না।",
          slotValues: { ACTION: "forget my friends' birthdays" },
          topicArea: "relationships",
        },
        {
          en: "I rarely eat out during weekdays.",
          bn: "আমি খুব কমই কর্মদিবসে বাইরে খাই।",
          slotValues: { ACTION: "eat out during weekdays" },
          topicArea: "food",
        },
        {
          en: "I never travel without a plan.",
          bn: "আমি কখনো পরিকল্পনা ছাড়া ভ্রমণ করি না।",
          slotValues: { ACTION: "travel without a plan" },
          topicArea: "travel",
        },
        {
          en: "I rarely use social media.",
          bn: "আমি খুব কমই সোশ্যাল মিডিয়া ব্যবহার করি।",
          slotValues: { ACTION: "use social media" },
          topicArea: "daily_life",
        },
      ],
      formality: "casual",
      difficulty: "beginner",
      usageNote:
        "'Rarely' means almost never (~5-10%). 'Never' means 0%. Note: 'never' already carries negation, so don't use 'don't' with it.",
      usageNote_bn:
        "'Rarely' মানে প্রায় কখনো না (~৫-১০%)। 'Never' মানে ০%। লক্ষ্য করুন: 'never' নিজেই নেতিবাচক, তাই এর সাথে 'don't' ব্যবহার করবেন না।",
      combinableWith: ["C1.3", "C1.5"],
      banglaStructureMap:
        "আমি (Subject) + খুব কমই/কখনো না (Adverb) + [ACTION] (Verb) + করি (Aux)",
    },
    {
      id: "C1.5",
      formula: "I don't [ACTION]",
      formula_bn: "আমি [কাজ] করি না",
      patternName: "Negative Habit",
      patternName_bn: "নেতিবাচক অভ্যাস",
      slots: [
        {
          name: "ACTION",
          description: "A base verb or verb phrase for something you do not do",
          description_bn:
            "একটি মূল ক্রিয়া বা ক্রিয়া পদবন্ধ যা আপনি করেন না",
          acceptedTypes: ["verb"],
          examples: ["smoke", "eat meat", "drive to work"],
        },
      ],
      examples: [
        {
          en: "I don't smoke.",
          bn: "আমি ধূমপান করি না।",
          slotValues: { ACTION: "smoke" },
          topicArea: "health",
        },
        {
          en: "I don't eat meat.",
          bn: "আমি মাংস খাই না।",
          slotValues: { ACTION: "eat meat" },
          topicArea: "food",
        },
        {
          en: "I don't drive to work.",
          bn: "আমি গাড়ি চালিয়ে কাজে যাই না।",
          slotValues: { ACTION: "drive to work" },
          topicArea: "travel",
        },
        {
          en: "I don't like waking up early.",
          bn: "আমি সকালে তাড়াতাড়ি উঠতে পছন্দ করি না।",
          slotValues: { ACTION: "like waking up early" },
          topicArea: "daily_life",
        },
        {
          en: "I don't work on Sundays.",
          bn: "আমি রবিবারে কাজ করি না।",
          slotValues: { ACTION: "work on Sundays" },
          topicArea: "work",
        },
        {
          en: "I don't drink alcohol.",
          bn: "আমি মদ পান করি না।",
          slotValues: { ACTION: "drink alcohol" },
          topicArea: "health",
        },
        {
          en: "I don't spend much on clothes.",
          bn: "আমি জামাকাপড়ে বেশি খরচ করি না।",
          slotValues: { ACTION: "spend much on clothes" },
          topicArea: "shopping",
        },
        {
          en: "I don't speak French.",
          bn: "আমি ফরাসি ভাষায় কথা বলি না।",
          slotValues: { ACTION: "speak French" },
          topicArea: "education",
        },
        {
          en: "I don't enjoy crowded places.",
          bn: "আমি ভিড়ের জায়গা উপভোগ করি না।",
          slotValues: { ACTION: "enjoy crowded places" },
          topicArea: "daily_life",
        },
        {
          en: "I don't eat spicy food.",
          bn: "আমি ঝাল খাবার খাই না।",
          slotValues: { ACTION: "eat spicy food" },
          topicArea: "food",
        },
        {
          en: "I don't trust strangers easily.",
          bn: "আমি সহজে অপরিচিতদের বিশ্বাস করি না।",
          slotValues: { ACTION: "trust strangers easily" },
          topicArea: "relationships",
        },
        {
          en: "I don't use public transport often.",
          bn: "আমি প্রায়ই গণপরিবহন ব্যবহার করি না।",
          slotValues: { ACTION: "use public transport often" },
          topicArea: "travel",
        },
        {
          en: "I don't watch horror movies.",
          bn: "আমি ভয়ের সিনেমা দেখি না।",
          slotValues: { ACTION: "watch horror movies" },
          topicArea: "daily_life",
        },
        {
          en: "I don't take work calls after 6 PM.",
          bn: "আমি সন্ধ্যা ৬টার পরে কাজের ফোন ধরি না।",
          slotValues: { ACTION: "take work calls after 6 PM" },
          topicArea: "work",
        },
        {
          en: "I don't lend money to people.",
          bn: "আমি মানুষকে টাকা ধার দিই না।",
          slotValues: { ACTION: "lend money to people" },
          topicArea: "relationships",
        },
      ],
      formality: "casual",
      difficulty: "beginner",
      usageNote:
        "Use 'don't' + base verb to express things you choose not to do as a habit. For third person, use 'doesn't'.",
      usageNote_bn:
        "অভ্যাসগতভাবে যা করেন না তা প্রকাশ করতে 'don't' + মূল ক্রিয়া ব্যবহার করুন। তৃতীয় পুরুষে 'doesn't' ব্যবহার করুন।",
      combinableWith: ["C1.4"],
      banglaStructureMap:
        "আমি (Subject) + [ACTION] (Verb) + করি না (Neg Aux)",
    },
    {
      id: "C1.6",
      formula: "I tend to [ACTION]",
      formula_bn: "আমার [কাজ] করার প্রবণতা আছে",
      patternName: "Tendency",
      patternName_bn: "প্রবণতা",
      slots: [
        {
          name: "ACTION",
          description: "A base verb or verb phrase describing a natural tendency",
          description_bn:
            "একটি মূল ক্রিয়া বা ক্রিয়া পদবন্ধ যা স্বাভাবিক প্রবণতা বর্ণনা করে",
          acceptedTypes: ["verb"],
          examples: ["overthink things", "eat late", "forget names"],
        },
      ],
      examples: [
        {
          en: "I tend to overthink things.",
          bn: "আমার জিনিসগুলো নিয়ে বেশি চিন্তা করার প্রবণতা আছে।",
          slotValues: { ACTION: "overthink things" },
          topicArea: "daily_life",
        },
        {
          en: "I tend to eat late at night.",
          bn: "আমার রাতে দেরি করে খাওয়ার প্রবণতা আছে।",
          slotValues: { ACTION: "eat late at night" },
          topicArea: "food",
        },
        {
          en: "I tend to get lost in new cities.",
          bn: "আমার নতুন শহরে হারিয়ে যাওয়ার প্রবণতা আছে।",
          slotValues: { ACTION: "get lost in new cities" },
          topicArea: "travel",
        },
        {
          en: "I tend to procrastinate before exams.",
          bn: "আমার পরীক্ষার আগে গড়িমসি করার প্রবণতা আছে।",
          slotValues: { ACTION: "procrastinate before exams" },
          topicArea: "education",
        },
        {
          en: "I tend to stay late at the office.",
          bn: "আমার অফিসে দেরি পর্যন্ত থাকার প্রবণতা আছে।",
          slotValues: { ACTION: "stay late at the office" },
          topicArea: "work",
        },
        {
          en: "I tend to skip breakfast when I'm busy.",
          bn: "আমার ব্যস্ত থাকলে নাস্তা বাদ দেওয়ার প্রবণতা আছে।",
          slotValues: { ACTION: "skip breakfast when I'm busy" },
          topicArea: "health",
        },
        {
          en: "I tend to buy things I don't need.",
          bn: "আমার দরকার নেই এমন জিনিস কেনার প্রবণতা আছে।",
          slotValues: { ACTION: "buy things I don't need" },
          topicArea: "shopping",
        },
        {
          en: "I tend to worry about my family.",
          bn: "আমার পরিবার নিয়ে চিন্তা করার প্রবণতা আছে।",
          slotValues: { ACTION: "worry about my family" },
          topicArea: "relationships",
        },
        {
          en: "I tend to sleep in on weekends.",
          bn: "আমার সপ্তাহান্তে দেরি করে ঘুমানোর প্রবণতা আছে।",
          slotValues: { ACTION: "sleep in on weekends" },
          topicArea: "daily_life",
        },
        {
          en: "I tend to order the same dish every time.",
          bn: "আমার প্রতিবার একই খাবার অর্ডার করার প্রবণতা আছে।",
          slotValues: { ACTION: "order the same dish every time" },
          topicArea: "food",
        },
        {
          en: "I tend to overpack when I travel.",
          bn: "আমার ভ্রমণের সময় বেশি জিনিসপত্র নেওয়ার প্রবণতা আছে।",
          slotValues: { ACTION: "overpack when I travel" },
          topicArea: "travel",
        },
        {
          en: "I tend to take detailed notes in class.",
          bn: "আমার ক্লাসে বিস্তারিত নোট নেওয়ার প্রবণতা আছে।",
          slotValues: { ACTION: "take detailed notes in class" },
          topicArea: "education",
        },
        {
          en: "I tend to check emails first thing in the morning.",
          bn: "আমার সকালে প্রথমেই ইমেইল চেক করার প্রবণতা আছে।",
          slotValues: { ACTION: "check emails first thing in the morning" },
          topicArea: "work",
        },
        {
          en: "I tend to drink a lot of water.",
          bn: "আমার অনেক বেশি পানি পান করার প্রবণতা আছে।",
          slotValues: { ACTION: "drink a lot of water" },
          topicArea: "health",
        },
        {
          en: "I tend to avoid crowded places.",
          bn: "আমার ভিড়ের জায়গা এড়িয়ে চলার প্রবণতা আছে।",
          slotValues: { ACTION: "avoid crowded places" },
          topicArea: "daily_life",
        },
      ],
      formality: "polite",
      difficulty: "beginner",
      usageNote:
        "'Tend to' describes a natural inclination or habit. It sounds softer than 'always' and suggests a pattern rather than a strict rule.",
      usageNote_bn:
        "'Tend to' একটি স্বাভাবিক প্রবণতা বা অভ্যাস বর্ণনা করে। এটি 'always'-এর চেয়ে নরম শোনায় এবং কঠোর নিয়মের বদলে একটি ধরন নির্দেশ করে।",
      combinableWith: ["C1.2", "C1.3"],
      banglaStructureMap:
        "আমার (Subject + Possessive) + [ACTION] (Verb) + করার প্রবণতা আছে (Tendency marker)",
    },
  ],
};
