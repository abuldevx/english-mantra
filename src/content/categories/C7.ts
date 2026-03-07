import { PatternCategory } from "@/types/pattern";

export const categoryC7: PatternCategory = {
  id: "C7",
  slug: "past-habits",
  name: "Past Habits (Used To / Would)",
  name_bn: "অতীতের অভ্যাস (করতাম)",
  description:
    "Talk about things you regularly did in the past but no longer do, using 'used to' and 'would'.",
  description_bn:
    "'used to' এবং 'would' ব্যবহার করে অতীতে নিয়মিত করতেন কিন্তু এখন আর করেন না এমন কাজ সম্পর্কে বলুন।",
  icon: "🔙",
  group: "C",
  groupName: "Actions & Time Patterns",
  groupName_bn: "কর্ম এবং সময়ের প্যাটার্ন",
  difficulty: "intermediate",
  patterns: [
    {
      id: "C7.1",
      formula: "I used to [ACTION]",
      formula_bn: "আমি [কাজ] করতাম",
      patternName: "Past Habit with Used To",
      patternName_bn: "Used To দিয়ে অতীত অভ্যাস",
      slots: [
        {
          name: "ACTION",
          description:
            "A base verb or verb phrase for something you did regularly in the past",
          description_bn:
            "অতীতে নিয়মিত করতেন এমন কাজের জন্য একটি মূল ক্রিয়া বা ক্রিয়া পদবন্ধ",
          acceptedTypes: ["verb"],
          examples: ["play football", "live in Dhaka", "watch cartoons"],
        },
      ],
      examples: [
        {
          en: "I used to play football every weekend.",
          bn: "আমি প্রতি সপ্তাহান্তে ফুটবল খেলতাম।",
          slotValues: { ACTION: "play football every weekend" },
          topicArea: "health",
        },
        {
          en: "I used to live in Dhaka.",
          bn: "আমি ঢাকায় থাকতাম।",
          slotValues: { ACTION: "live in Dhaka" },
          topicArea: "daily_life",
        },
        {
          en: "I used to watch cartoons every morning.",
          bn: "আমি প্রতি সকালে কার্টুন দেখতাম।",
          slotValues: { ACTION: "watch cartoons every morning" },
          topicArea: "daily_life",
        },
        {
          en: "I used to eat rice for breakfast.",
          bn: "আমি নাস্তায় ভাত খেতাম।",
          slotValues: { ACTION: "eat rice for breakfast" },
          topicArea: "food",
        },
        {
          en: "I used to walk to school.",
          bn: "আমি হেঁটে স্কুলে যেতাম।",
          slotValues: { ACTION: "walk to school" },
          topicArea: "education",
        },
        {
          en: "I used to work the night shift.",
          bn: "আমি রাতের শিফটে কাজ করতাম।",
          slotValues: { ACTION: "work the night shift" },
          topicArea: "work",
        },
        {
          en: "I used to visit my grandparents every summer.",
          bn: "আমি প্রতি গ্রীষ্মে দাদা-দাদিকে দেখতে যেতাম।",
          slotValues: { ACTION: "visit my grandparents every summer" },
          topicArea: "relationships",
        },
        {
          en: "I used to take the bus to the office.",
          bn: "আমি বাসে করে অফিসে যেতাম।",
          slotValues: { ACTION: "take the bus to the office" },
          topicArea: "travel",
        },
        {
          en: "I used to spend a lot on clothes.",
          bn: "আমি জামাকাপড়ে অনেক টাকা খরচ করতাম।",
          slotValues: { ACTION: "spend a lot on clothes" },
          topicArea: "shopping",
        },
        {
          en: "I used to drink tea, but now I prefer coffee.",
          bn: "আমি চা খেতাম, কিন্তু এখন কফি পছন্দ করি।",
          slotValues: { ACTION: "drink tea" },
          topicArea: "food",
        },
        {
          en: "I used to run every morning before work.",
          bn: "আমি কাজের আগে প্রতি সকালে দৌড়াতাম।",
          slotValues: { ACTION: "run every morning before work" },
          topicArea: "health",
        },
        {
          en: "I used to read comics as a child.",
          bn: "আমি ছোটবেলায় কমিকস পড়তাম।",
          slotValues: { ACTION: "read comics as a child" },
          topicArea: "education",
        },
        {
          en: "I used to share a room with my brother.",
          bn: "আমি আমার ভাইয়ের সাথে একটি ঘরে থাকতাম।",
          slotValues: { ACTION: "share a room with my brother" },
          topicArea: "relationships",
        },
        {
          en: "I used to travel by train a lot.",
          bn: "আমি অনেক ট্রেনে ভ্রমণ করতাম।",
          slotValues: { ACTION: "travel by train a lot" },
          topicArea: "travel",
        },
        {
          en: "I used to work from home before the office moved closer.",
          bn: "অফিস কাছে আসার আগে আমি বাসা থেকে কাজ করতাম।",
          slotValues: {
            ACTION: "work from home before the office moved closer",
          },
          topicArea: "work",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "'Used to' describes past habits or states that are no longer true. It always refers to a repeated action or long-lasting state in the past.",
      usageNote_bn:
        "'Used to' অতীতের অভ্যাস বা অবস্থা বর্ণনা করে যা এখন আর সত্য নয়। এটি সবসময় অতীতে পুনরাবৃত্ত কাজ বা দীর্ঘস্থায়ী অবস্থাকে বোঝায়।",
      combinableWith: ["C7.2", "C7.3"],
      banglaStructureMap:
        "আমি (Subject) + [ACTION] (Verb) + করতাম (Past Habitual Aux)",
    },
    {
      id: "C7.2",
      formula: "I didn't use to [ACTION]",
      formula_bn: "আমি [কাজ] করতাম না",
      patternName: "Negative Past Habit",
      patternName_bn: "নেতিবাচক অতীত অভ্যাস",
      slots: [
        {
          name: "ACTION",
          description:
            "A base verb for something you did not do in the past but might do now",
          description_bn:
            "এমন কাজের মূল ক্রিয়া যা আপনি অতীতে করতেন না কিন্তু এখন করতে পারেন",
          acceptedTypes: ["verb"],
          examples: ["like vegetables", "exercise", "wake up early"],
        },
      ],
      examples: [
        {
          en: "I didn't use to like vegetables.",
          bn: "আমি শাকসবজি পছন্দ করতাম না।",
          slotValues: { ACTION: "like vegetables" },
          topicArea: "food",
        },
        {
          en: "I didn't use to exercise regularly.",
          bn: "আমি নিয়মিত ব্যায়াম করতাম না।",
          slotValues: { ACTION: "exercise regularly" },
          topicArea: "health",
        },
        {
          en: "I didn't use to wake up early.",
          bn: "আমি সকালে তাড়াতাড়ি উঠতাম না।",
          slotValues: { ACTION: "wake up early" },
          topicArea: "daily_life",
        },
        {
          en: "I didn't use to speak English well.",
          bn: "আমি ভালো ইংরেজি বলতে পারতাম না।",
          slotValues: { ACTION: "speak English well" },
          topicArea: "education",
        },
        {
          en: "I didn't use to enjoy cooking.",
          bn: "আমি রান্না উপভোগ করতাম না।",
          slotValues: { ACTION: "enjoy cooking" },
          topicArea: "food",
        },
        {
          en: "I didn't use to go to the gym.",
          bn: "আমি জিমে যেতাম না।",
          slotValues: { ACTION: "go to the gym" },
          topicArea: "health",
        },
        {
          en: "I didn't use to read books much.",
          bn: "আমি বেশি বই পড়তাম না।",
          slotValues: { ACTION: "read books much" },
          topicArea: "education",
        },
        {
          en: "I didn't use to travel alone.",
          bn: "আমি একা ভ্রমণ করতাম না।",
          slotValues: { ACTION: "travel alone" },
          topicArea: "travel",
        },
        {
          en: "I didn't use to save money.",
          bn: "আমি টাকা জমাতাম না।",
          slotValues: { ACTION: "save money" },
          topicArea: "shopping",
        },
        {
          en: "I didn't use to work on weekends.",
          bn: "আমি সপ্তাহান্তে কাজ করতাম না।",
          slotValues: { ACTION: "work on weekends" },
          topicArea: "work",
        },
        {
          en: "I didn't use to talk to strangers.",
          bn: "আমি অপরিচিতদের সাথে কথা বলতাম না।",
          slotValues: { ACTION: "talk to strangers" },
          topicArea: "relationships",
        },
        {
          en: "I didn't use to drink coffee.",
          bn: "আমি কফি খেতাম না।",
          slotValues: { ACTION: "drink coffee" },
          topicArea: "food",
        },
        {
          en: "I didn't use to care about my health.",
          bn: "আমি আমার স্বাস্থ্যের দিকে খেয়াল করতাম না।",
          slotValues: { ACTION: "care about my health" },
          topicArea: "health",
        },
        {
          en: "I didn't use to take public transport.",
          bn: "আমি গণপরিবহন ব্যবহার করতাম না।",
          slotValues: { ACTION: "take public transport" },
          topicArea: "travel",
        },
        {
          en: "I didn't use to stay up late.",
          bn: "আমি রাত জাগতাম না।",
          slotValues: { ACTION: "stay up late" },
          topicArea: "daily_life",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "In the negative form, use 'didn't use to' (without 'd' on 'use'). This shows something was NOT a habit in the past.",
      usageNote_bn:
        "নেতিবাচক রূপে 'didn't use to' ব্যবহার করুন ('use'-এ 'd' ছাড়া)। এটি দেখায় যে কিছু অতীতে অভ্যাস ছিল না।",
      combinableWith: ["C7.1", "C7.3"],
      banglaStructureMap:
        "আমি (Subject) + [ACTION] (Verb) + করতাম না (Neg Past Habitual Aux)",
    },
    {
      id: "C7.3",
      formula: "I would [ACTION] every [TIME]",
      formula_bn: "আমি প্রতি [সময়] [কাজ] করতাম",
      patternName: "Past Repeated Action with Would",
      patternName_bn: "Would দিয়ে অতীতের পুনরাবৃত্ত কাজ",
      slots: [
        {
          name: "ACTION",
          description:
            "A base verb for a repeated past action (not a state verb)",
          description_bn:
            "পুনরাবৃত্ত অতীত কাজের জন্য একটি মূল ক্রিয়া (অবস্থাসূচক নয়)",
          acceptedTypes: ["verb"],
          examples: ["play outside", "go fishing", "visit the market"],
        },
        {
          name: "TIME",
          description: "A time expression indicating when the action repeated",
          description_bn: "কাজটি কখন পুনরাবৃত্ত হতো তা নির্দেশ করা সময়সূচক",
          acceptedTypes: ["time"],
          examples: ["summer", "weekend", "evening"],
        },
      ],
      examples: [
        {
          en: "I would play outside every afternoon as a kid.",
          bn: "ছোটবেলায় আমি প্রতি বিকেলে বাইরে খেলতাম।",
          slotValues: { ACTION: "play outside", TIME: "afternoon" },
          topicArea: "daily_life",
        },
        {
          en: "I would go fishing every weekend with my father.",
          bn: "আমি প্রতি সপ্তাহান্তে আমার বাবার সাথে মাছ ধরতে যেতাম।",
          slotValues: { ACTION: "go fishing", TIME: "weekend" },
          topicArea: "relationships",
        },
        {
          en: "I would visit the market every Saturday morning.",
          bn: "আমি প্রতি শনিবার সকালে বাজারে যেতাম।",
          slotValues: { ACTION: "visit the market", TIME: "Saturday morning" },
          topicArea: "shopping",
        },
        {
          en: "I would eat ice cream every summer evening.",
          bn: "আমি প্রতি গ্রীষ্মের সন্ধ্যায় আইসক্রিম খেতাম।",
          slotValues: { ACTION: "eat ice cream", TIME: "summer evening" },
          topicArea: "food",
        },
        {
          en: "I would study at the library every night.",
          bn: "আমি প্রতি রাতে লাইব্রেরিতে পড়তাম।",
          slotValues: { ACTION: "study at the library", TIME: "night" },
          topicArea: "education",
        },
        {
          en: "I would swim in the river every morning.",
          bn: "আমি প্রতি সকালে নদীতে সাঁতার কাটতাম।",
          slotValues: { ACTION: "swim in the river", TIME: "morning" },
          topicArea: "health",
        },
        {
          en: "I would take the train every Monday.",
          bn: "আমি প্রতি সোমবার ট্রেনে যেতাম।",
          slotValues: { ACTION: "take the train", TIME: "Monday" },
          topicArea: "travel",
        },
        {
          en: "I would help my mother cook every evening.",
          bn: "আমি প্রতি সন্ধ্যায় মায়ের রান্নায় সাহায্য করতাম।",
          slotValues: { ACTION: "help my mother cook", TIME: "evening" },
          topicArea: "food",
        },
        {
          en: "I would write in my diary every night.",
          bn: "আমি প্রতি রাতে ডায়েরিতে লিখতাম।",
          slotValues: { ACTION: "write in my diary", TIME: "night" },
          topicArea: "daily_life",
        },
        {
          en: "I would attend meetings every Friday.",
          bn: "আমি প্রতি শুক্রবার মিটিংয়ে যোগ দিতাম।",
          slotValues: { ACTION: "attend meetings", TIME: "Friday" },
          topicArea: "work",
        },
        {
          en: "I would ride my bicycle every morning.",
          bn: "আমি প্রতি সকালে সাইকেল চালাতাম।",
          slotValues: { ACTION: "ride my bicycle", TIME: "morning" },
          topicArea: "health",
        },
        {
          en: "I would call my grandmother every Sunday.",
          bn: "আমি প্রতি রবিবার দাদিকে ফোন করতাম।",
          slotValues: { ACTION: "call my grandmother", TIME: "Sunday" },
          topicArea: "relationships",
        },
        {
          en: "I would browse the bookshop every weekend.",
          bn: "আমি প্রতি সপ্তাহান্তে বইয়ের দোকান ঘুরতাম।",
          slotValues: { ACTION: "browse the bookshop", TIME: "weekend" },
          topicArea: "shopping",
        },
        {
          en: "I would walk along the beach every evening.",
          bn: "আমি প্রতি সন্ধ্যায় সমুদ্রতীর ধরে হাঁটতাম।",
          slotValues: { ACTION: "walk along the beach", TIME: "evening" },
          topicArea: "travel",
        },
        {
          en: "I would practice math problems every day after school.",
          bn: "আমি স্কুলের পর প্রতিদিন গণিত অনুশীলন করতাম।",
          slotValues: {
            ACTION: "practice math problems",
            TIME: "day after school",
          },
          topicArea: "education",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "'Would' can replace 'used to' for repeated past ACTIONS, but NOT for past states. You cannot say 'I would live in Dhaka' (state). Use 'used to' for states.",
      usageNote_bn:
        "'Would' পুনরাবৃত্ত অতীত কাজের জন্য 'used to' এর বদলে ব্যবহার করা যায়, কিন্তু অতীত অবস্থার জন্য নয়। 'I would live in Dhaka' বলা যায় না (অবস্থা)। অবস্থার জন্য 'used to' ব্যবহার করুন।",
      combinableWith: ["C7.1"],
      banglaStructureMap:
        "আমি (Subject) + প্রতি [TIME] (Time) + [ACTION] (Verb) + করতাম (Past Habitual Aux)",
    },
    {
      id: "C7.4",
      formula: "Did you use to [ACTION]?",
      formula_bn: "তুমি কি [কাজ] করতে?",
      patternName: "Asking About Past Habits",
      patternName_bn: "অতীত অভ্যাস সম্পর্কে জিজ্ঞাসা",
      slots: [
        {
          name: "ACTION",
          description: "A base verb for a past habit you are asking about",
          description_bn:
            "আপনি যে অতীত অভ্যাস সম্পর্কে জিজ্ঞাসা করছেন তার জন্য একটি মূল ক্রিয়া",
          acceptedTypes: ["verb"],
          examples: ["play sports", "live here", "watch that show"],
        },
      ],
      examples: [
        {
          en: "Did you use to play sports in school?",
          bn: "তুমি কি স্কুলে খেলাধুলা করতে?",
          slotValues: { ACTION: "play sports in school" },
          topicArea: "health",
        },
        {
          en: "Did you use to live in this neighborhood?",
          bn: "তুমি কি এই পাড়ায় থাকতে?",
          slotValues: { ACTION: "live in this neighborhood" },
          topicArea: "daily_life",
        },
        {
          en: "Did you use to watch that TV show?",
          bn: "তুমি কি সেই টিভি শো দেখতে?",
          slotValues: { ACTION: "watch that TV show" },
          topicArea: "daily_life",
        },
        {
          en: "Did you use to eat street food?",
          bn: "তুমি কি রাস্তার খাবার খেতে?",
          slotValues: { ACTION: "eat street food" },
          topicArea: "food",
        },
        {
          en: "Did you use to study late at night?",
          bn: "তুমি কি রাত জেগে পড়তে?",
          slotValues: { ACTION: "study late at night" },
          topicArea: "education",
        },
        {
          en: "Did you use to work in a different company?",
          bn: "তুমি কি অন্য কোম্পানিতে কাজ করতে?",
          slotValues: { ACTION: "work in a different company" },
          topicArea: "work",
        },
        {
          en: "Did you use to hang out with them?",
          bn: "তুমি কি তাদের সাথে আড্ডা দিতে?",
          slotValues: { ACTION: "hang out with them" },
          topicArea: "relationships",
        },
        {
          en: "Did you use to travel a lot?",
          bn: "তুমি কি অনেক ভ্রমণ করতে?",
          slotValues: { ACTION: "travel a lot" },
          topicArea: "travel",
        },
        {
          en: "Did you use to shop at that mall?",
          bn: "তুমি কি সেই মলে কেনাকাটা করতে?",
          slotValues: { ACTION: "shop at that mall" },
          topicArea: "shopping",
        },
        {
          en: "Did you use to cook your own meals?",
          bn: "তুমি কি নিজে রান্না করতে?",
          slotValues: { ACTION: "cook your own meals" },
          topicArea: "food",
        },
        {
          en: "Did you use to go jogging in the morning?",
          bn: "তুমি কি সকালে দৌড়াতে যেতে?",
          slotValues: { ACTION: "go jogging in the morning" },
          topicArea: "health",
        },
        {
          en: "Did you use to ride a bicycle to school?",
          bn: "তুমি কি সাইকেলে স্কুলে যেতে?",
          slotValues: { ACTION: "ride a bicycle to school" },
          topicArea: "travel",
        },
        {
          en: "Did you use to take extra classes?",
          bn: "তুমি কি অতিরিক্ত ক্লাস নিতে?",
          slotValues: { ACTION: "take extra classes" },
          topicArea: "education",
        },
        {
          en: "Did you use to stay at your grandparents' house?",
          bn: "তুমি কি দাদা-দাদির বাড়িতে থাকতে?",
          slotValues: { ACTION: "stay at your grandparents' house" },
          topicArea: "relationships",
        },
        {
          en: "Did you use to have a different routine?",
          bn: "তুমি কি আলাদা রুটিন অনুসরণ করতে?",
          slotValues: { ACTION: "have a different routine" },
          topicArea: "daily_life",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "In questions, use 'Did you use to ...?' (not 'used to'). This is a common way to ask someone about their past lifestyle or habits.",
      usageNote_bn:
        "প্রশ্নে 'Did you use to ...?' ব্যবহার করুন ('used to' নয়)। কারো অতীত জীবনযাত্রা বা অভ্যাস সম্পর্কে জিজ্ঞাসা করার এটি একটি সাধারণ উপায়।",
      combinableWith: ["C7.1", "C7.2"],
      banglaStructureMap:
        "তুমি কি (Subject + Q) + [ACTION] (Verb) + করতে? (Past Habitual Q)",
    },
    {
      id: "C7.5",
      formula: "I used to [ACTION], but now I [NEW ACTION]",
      formula_bn: "আমি আগে [কাজ] করতাম, কিন্তু এখন আমি [নতুন কাজ] করি",
      patternName: "Past vs Present Contrast",
      patternName_bn: "অতীত বনাম বর্তমান তুলনা",
      slots: [
        {
          name: "ACTION",
          description: "A base verb for the old habit",
          description_bn: "পুরোনো অভ্যাসের জন্য একটি মূল ক্রিয়া",
          acceptedTypes: ["verb"],
          examples: ["hate reading", "eat junk food", "stay up late"],
        },
        {
          name: "NEW ACTION",
          description: "A base verb for the current habit or situation",
          description_bn: "বর্তমান অভ্যাস বা পরিস্থিতির জন্য একটি মূল ক্রিয়া",
          acceptedTypes: ["verb"],
          examples: ["love it", "eat healthy", "sleep early"],
        },
      ],
      examples: [
        {
          en: "I used to hate reading, but now I love it.",
          bn: "আমি আগে পড়তে ঘৃণা করতাম, কিন্তু এখন ভালোবাসি।",
          slotValues: { ACTION: "hate reading", "NEW ACTION": "love it" },
          topicArea: "education",
        },
        {
          en: "I used to eat junk food, but now I eat healthy.",
          bn: "আমি আগে জাঙ্ক ফুড খেতাম, কিন্তু এখন স্বাস্থ্যকর খাবার খাই।",
          slotValues: {
            ACTION: "eat junk food",
            "NEW ACTION": "eat healthy",
          },
          topicArea: "food",
        },
        {
          en: "I used to stay up late, but now I sleep early.",
          bn: "আমি আগে রাত জাগতাম, কিন্তু এখন তাড়াতাড়ি ঘুমাই।",
          slotValues: {
            ACTION: "stay up late",
            "NEW ACTION": "sleep early",
          },
          topicArea: "daily_life",
        },
        {
          en: "I used to drive to work, but now I cycle.",
          bn: "আমি আগে গাড়ি চালিয়ে কাজে যেতাম, কিন্তু এখন সাইকেল চালাই।",
          slotValues: { ACTION: "drive to work", "NEW ACTION": "cycle" },
          topicArea: "travel",
        },
        {
          en: "I used to be shy, but now I am more confident.",
          bn: "আমি আগে লাজুক ছিলাম, কিন্তু এখন আরও আত্মবিশ্বাসী।",
          slotValues: {
            ACTION: "be shy",
            "NEW ACTION": "am more confident",
          },
          topicArea: "relationships",
        },
        {
          en: "I used to skip breakfast, but now I never miss it.",
          bn: "আমি আগে নাস্তা বাদ দিতাম, কিন্তু এখন কখনো বাদ দিই না।",
          slotValues: {
            ACTION: "skip breakfast",
            "NEW ACTION": "never miss it",
          },
          topicArea: "health",
        },
        {
          en: "I used to spend too much, but now I budget carefully.",
          bn: "আমি আগে অনেক খরচ করতাম, কিন্তু এখন সাবধানে বাজেট করি।",
          slotValues: {
            ACTION: "spend too much",
            "NEW ACTION": "budget carefully",
          },
          topicArea: "shopping",
        },
        {
          en: "I used to work alone, but now I lead a team.",
          bn: "আমি আগে একা কাজ করতাম, কিন্তু এখন একটি দল পরিচালনা করি।",
          slotValues: {
            ACTION: "work alone",
            "NEW ACTION": "lead a team",
          },
          topicArea: "work",
        },
        {
          en: "I used to struggle with math, but now I find it easy.",
          bn: "আমি আগে গণিতে সমস্যা হতো, কিন্তু এখন সহজ মনে হয়।",
          slotValues: {
            ACTION: "struggle with math",
            "NEW ACTION": "find it easy",
          },
          topicArea: "education",
        },
        {
          en: "I used to eat out every day, but now I cook at home.",
          bn: "আমি আগে প্রতিদিন বাইরে খেতাম, কিন্তু এখন বাসায় রান্না করি।",
          slotValues: {
            ACTION: "eat out every day",
            "NEW ACTION": "cook at home",
          },
          topicArea: "food",
        },
        {
          en: "I used to avoid the gym, but now I go every day.",
          bn: "আমি আগে জিম এড়িয়ে চলতাম, কিন্তু এখন প্রতিদিন যাই।",
          slotValues: {
            ACTION: "avoid the gym",
            "NEW ACTION": "go every day",
          },
          topicArea: "health",
        },
        {
          en: "I used to live with my parents, but now I live on my own.",
          bn: "আমি আগে বাবা-মায়ের সাথে থাকতাম, কিন্তু এখন একা থাকি।",
          slotValues: {
            ACTION: "live with my parents",
            "NEW ACTION": "live on my own",
          },
          topicArea: "daily_life",
        },
        {
          en: "I used to fly economy, but now I fly business class.",
          bn: "আমি আগে ইকোনমি ক্লাসে উড়তাম, কিন্তু এখন বিজনেস ক্লাসে উড়ি।",
          slotValues: {
            ACTION: "fly economy",
            "NEW ACTION": "fly business class",
          },
          topicArea: "travel",
        },
        {
          en: "I used to ignore my colleagues, but now I talk to everyone.",
          bn: "আমি আগে সহকর্মীদের এড়িয়ে যেতাম, কিন্তু এখন সবার সাথে কথা বলি।",
          slotValues: {
            ACTION: "ignore my colleagues",
            "NEW ACTION": "talk to everyone",
          },
          topicArea: "work",
        },
        {
          en: "I used to be afraid of dogs, but now I have two.",
          bn: "আমি আগে কুকুরকে ভয় পেতাম, কিন্তু এখন আমার দুটি কুকুর আছে।",
          slotValues: {
            ACTION: "be afraid of dogs",
            "NEW ACTION": "have two",
          },
          topicArea: "relationships",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "Contrasting 'used to' with 'but now' highlights personal change and growth. This pattern is great for storytelling and reflecting on the past.",
      usageNote_bn:
        "'used to' কে 'but now' এর সাথে তুলনা করলে ব্যক্তিগত পরিবর্তন এবং বৃদ্ধি তুলে ধরা হয়। এই প্যাটার্নটি গল্প বলা এবং অতীতের প্রতিফলনের জন্য দারুণ।",
      combinableWith: ["C7.1", "C7.2"],
      banglaStructureMap:
        "আমি (Subject) + আগে + [ACTION] (Verb) + করতাম (Past Hab) + কিন্তু + এখন + [NEW ACTION] (Verb) + করি (Present Aux)",
    },
    {
      id: "C7.6",
      formula: "There was a time when I [ACTION]",
      formula_bn: "একটা সময় ছিল যখন আমি [কাজ] করতাম",
      patternName: "Past Period (There Was a Time When)",
      patternName_bn: "অতীত সময়কাল (একটা সময় ছিল যখন)",
      slots: [
        {
          name: "ACTION",
          description:
            "A past tense verb or verb phrase describing what you used to do during that period",
          description_bn:
            "সেই সময়কালে আপনি কী করতেন তা বর্ণনা করা একটি অতীতকালীন ক্রিয়া বা ক্রিয়া পদবন্ধ",
          acceptedTypes: ["verb"],
          examples: ["couldn't speak English", "lived in the village", "used to be scared of water"],
        },
      ],
      examples: [
        {
          en: "There was a time when I couldn't speak English.",
          bn: "একটা সময় ছিল যখন আমি ইংরেজি বলতে পারতাম না।",
          slotValues: { ACTION: "couldn't speak English" },
          topicArea: "education",
        },
        {
          en: "There was a time when we lived in the village.",
          bn: "একটা সময় ছিল যখন আমরা গ্রামে থাকতাম।",
          slotValues: { ACTION: "lived in the village" },
          topicArea: "daily_life",
        },
        {
          en: "There was a time when I used to be scared of water.",
          bn: "একটা সময় ছিল যখন আমি পানিকে ভয় পেতাম।",
          slotValues: { ACTION: "used to be scared of water" },
          topicArea: "daily_life",
        },
        {
          en: "There was a time when I worked double shifts every day.",
          bn: "একটা সময় ছিল যখন আমি প্রতিদিন ডাবল শিফটে কাজ করতাম।",
          slotValues: { ACTION: "worked double shifts every day" },
          topicArea: "work",
        },
        {
          en: "There was a time when I ate rice three times a day.",
          bn: "একটা সময় ছিল যখন আমি দিনে তিনবার ভাত খেতাম।",
          slotValues: { ACTION: "ate rice three times a day" },
          topicArea: "food",
        },
        {
          en: "There was a time when I didn't have a phone.",
          bn: "একটা সময় ছিল যখন আমার ফোন ছিল না।",
          slotValues: { ACTION: "didn't have a phone" },
          topicArea: "daily_life",
        },
        {
          en: "There was a time when we used to walk to school barefoot.",
          bn: "একটা সময় ছিল যখন আমরা খালি পায়ে স্কুলে হেঁটে যেতাম।",
          slotValues: { ACTION: "used to walk to school barefoot" },
          topicArea: "education",
        },
        {
          en: "There was a time when I couldn't afford new clothes.",
          bn: "একটা সময় ছিল যখন আমি নতুন জামা কিনতে পারতাম না।",
          slotValues: { ACTION: "couldn't afford new clothes" },
          topicArea: "shopping",
        },
        {
          en: "There was a time when I ran five kilometers every morning.",
          bn: "একটা সময় ছিল যখন আমি প্রতি সকালে পাঁচ কিলোমিটার দৌড়াতাম।",
          slotValues: { ACTION: "ran five kilometers every morning" },
          topicArea: "health",
        },
        {
          en: "There was a time when I dreamed of traveling abroad.",
          bn: "একটা সময় ছিল যখন আমি বিদেশ ভ্রমণের স্বপ্ন দেখতাম।",
          slotValues: { ACTION: "dreamed of traveling abroad" },
          topicArea: "travel",
        },
        {
          en: "There was a time when I didn't know how to cook.",
          bn: "একটা সময় ছিল যখন আমি রান্না করতে জানতাম না।",
          slotValues: { ACTION: "didn't know how to cook" },
          topicArea: "food",
        },
        {
          en: "There was a time when we were very close friends.",
          bn: "একটা সময় ছিল যখন আমরা খুব ঘনিষ্ঠ বন্ধু ছিলাম।",
          slotValues: { ACTION: "were very close friends" },
          topicArea: "relationships",
        },
        {
          en: "There was a time when I struggled with math.",
          bn: "একটা সময় ছিল যখন আমি গণিতে কষ্ট পেতাম।",
          slotValues: { ACTION: "struggled with math" },
          topicArea: "education",
        },
        {
          en: "There was a time when I was afraid of public speaking.",
          bn: "একটা সময় ছিল যখন আমি জনসম্মুখে কথা বলতে ভয় পেতাম।",
          slotValues: { ACTION: "was afraid of public speaking" },
          topicArea: "work",
        },
        {
          en: "There was a time when I used to fall sick every winter.",
          bn: "একটা সময় ছিল যখন আমি প্রতি শীতে অসুস্থ হতাম।",
          slotValues: { ACTION: "used to fall sick every winter" },
          topicArea: "health",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "'There was a time when...' marks a specific past period in your life. It adds a reflective, storytelling quality.",
      usageNote_bn:
        "'There was a time when...' আপনার জীবনের একটি নির্দিষ্ট অতীত সময়কাল চিহ্নিত করে। এটি একটি প্রতিফলনমূলক, গল্প বলার ভাব যোগ করে।",
      combinableWith: ["C7.1", "C7.5"],
      banglaStructureMap:
        "একটা সময় ছিল (Intro) + যখন (When) + আমি (Subject) + [ACTION] (Verb) + করতাম (Past Habitual Aux)",
    },
  ],
};
