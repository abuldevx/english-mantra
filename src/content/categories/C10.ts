import { PatternCategory } from "@/types/pattern";

export const categoryC10: PatternCategory = {
  id: "C10",
  slug: "future-progress-completion",
  name: "Future Progress & Completion",
  name_bn: "ভবিষ্যৎ অগ্রগতি এবং সমাপ্তি",
  description:
    "Talk about actions in progress at a future time and actions that will be completed by a future deadline.",
  description_bn:
    "ভবিষ্যতের কোনো সময়ে চলমান কাজ এবং ভবিষ্যতের কোনো সময়সীমার মধ্যে সম্পন্ন হবে এমন কাজ সম্পর্কে বলুন।",
  icon: "⏳",
  group: "C",
  groupName: "Actions & Time Patterns",
  groupName_bn: "কর্ম এবং সময়ের প্যাটার্ন",
  difficulty: "intermediate",
  patterns: [
    {
      id: "C10.1",
      formula: "At [TIME] tomorrow, I will be [DOING]",
      formula_bn: "আগামীকাল [সময়]-এ, আমি [কাজ] করছি থাকব",
      patternName: "Future Continuous (Specific Time)",
      patternName_bn: "ফিউচার কন্টিনিউয়াস (নির্দিষ্ট সময়)",
      slots: [
        {
          name: "TIME",
          description: "A specific time in the future",
          description_bn: "ভবিষ্যতের একটি নির্দিষ্ট সময়",
          acceptedTypes: ["time"],
          examples: ["10 AM", "noon", "3 PM"],
        },
        {
          name: "DOING",
          description: "A verb in -ing form for the activity in progress",
          description_bn: "চলমান কাজের জন্য একটি -ing রূপের ক্রিয়া",
          acceptedTypes: ["gerund"],
          examples: ["working", "traveling", "sleeping"],
        },
      ],
      examples: [
        {
          en: "At 10 AM tomorrow, I will be working on my project.",
          bn: "আগামীকাল সকাল ১০টায়, আমি আমার প্রকল্পে কাজ করছি থাকব।",
          slotValues: { TIME: "10 AM", DOING: "working on my project" },
          topicArea: "work",
        },
        {
          en: "At noon tomorrow, I will be having lunch with my team.",
          bn: "আগামীকাল দুপুরে, আমি আমার দলের সাথে দুপুরের খাবার খাচ্ছি থাকব।",
          slotValues: { TIME: "noon", DOING: "having lunch with my team" },
          topicArea: "food",
        },
        {
          en: "At 3 PM tomorrow, I will be attending a lecture.",
          bn: "আগামীকাল বিকাল ৩টায়, আমি লেকচারে থাকব।",
          slotValues: { TIME: "3 PM", DOING: "attending a lecture" },
          topicArea: "education",
        },
        {
          en: "At 7 AM tomorrow, I will be jogging in the park.",
          bn: "আগামীকাল সকাল ৭টায়, আমি পার্কে দৌড়াচ্ছি থাকব।",
          slotValues: { TIME: "7 AM", DOING: "jogging in the park" },
          topicArea: "health",
        },
        {
          en: "At 9 PM tomorrow, I will be watching a movie.",
          bn: "আগামীকাল রাত ৯টায়, আমি সিনেমা দেখছি থাকব।",
          slotValues: { TIME: "9 PM", DOING: "watching a movie" },
          topicArea: "daily_life",
        },
        {
          en: "At 6 AM tomorrow, I will be flying to Dubai.",
          bn: "আগামীকাল ভোর ৬টায়, আমি দুবাইয়ের উদ্দেশ্যে উড়ছি থাকব।",
          slotValues: { TIME: "6 AM", DOING: "flying to Dubai" },
          topicArea: "travel",
        },
        {
          en: "At 4 PM tomorrow, I will be shopping for groceries.",
          bn: "আগামীকাল বিকাল ৪টায়, আমি বাজার করছি থাকব।",
          slotValues: { TIME: "4 PM", DOING: "shopping for groceries" },
          topicArea: "shopping",
        },
        {
          en: "At 8 PM tomorrow, I will be having dinner with my family.",
          bn: "আগামীকাল রাত ৮টায়, আমি পরিবারের সাথে রাতের খাবার খাচ্ছি থাকব।",
          slotValues: {
            TIME: "8 PM",
            DOING: "having dinner with my family",
          },
          topicArea: "relationships",
        },
        {
          en: "At 11 AM tomorrow, I will be presenting to the board.",
          bn: "আগামীকাল সকাল ১১টায়, আমি বোর্ডের কাছে উপস্থাপনা দিচ্ছি থাকব।",
          slotValues: { TIME: "11 AM", DOING: "presenting to the board" },
          topicArea: "work",
        },
        {
          en: "At 1 PM tomorrow, I will be cooking lunch.",
          bn: "আগামীকাল দুপুর ১টায়, আমি দুপুরের খাবার রান্না করছি থাকব।",
          slotValues: { TIME: "1 PM", DOING: "cooking lunch" },
          topicArea: "food",
        },
        {
          en: "At 2 PM tomorrow, I will be taking an exam.",
          bn: "আগামীকাল দুপুর ২টায়, আমি পরীক্ষা দিচ্ছি থাকব।",
          slotValues: { TIME: "2 PM", DOING: "taking an exam" },
          topicArea: "education",
        },
        {
          en: "At 5 PM tomorrow, I will be doing yoga.",
          bn: "আগামীকাল বিকাল ৫টায়, আমি যোগব্যায়াম করছি থাকব।",
          slotValues: { TIME: "5 PM", DOING: "doing yoga" },
          topicArea: "health",
        },
        {
          en: "At midnight tomorrow, I will be sleeping.",
          bn: "আগামীকাল মধ্যরাতে, আমি ঘুমাচ্ছি থাকব।",
          slotValues: { TIME: "midnight", DOING: "sleeping" },
          topicArea: "daily_life",
        },
        {
          en: "At 10 PM tomorrow, I will be chatting with my friends.",
          bn: "আগামীকাল রাত ১০টায়, আমি বন্ধুদের সাথে গল্প করছি থাকব।",
          slotValues: {
            TIME: "10 PM",
            DOING: "chatting with my friends",
          },
          topicArea: "relationships",
        },
        {
          en: "At 3 PM tomorrow, I will be driving to the airport.",
          bn: "আগামীকাল বিকাল ৩টায়, আমি বিমানবন্দরে যাচ্ছি থাকব।",
          slotValues: { TIME: "3 PM", DOING: "driving to the airport" },
          topicArea: "travel",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "The future continuous (will be + -ing) describes an action that will be in progress at a specific future time. It paints a picture of what will be happening.",
      usageNote_bn:
        "ফিউচার কন্টিনিউয়াস (will be + -ing) ভবিষ্যতের একটি নির্দিষ্ট সময়ে চলমান কাজ বর্ণনা করে। এটি কী ঘটছে থাকবে তার একটি ছবি আঁকে।",
      combinableWith: ["C10.2", "C10.3"],
      banglaStructureMap:
        "আগামীকাল [TIME] (Time) + এ + আমি (Subject) + [DOING] (Verb-ing) + করছি থাকব (Future Continuous)",
    },
    {
      id: "C10.2",
      formula: "By [TIME], I will have [PAST PARTICIPLE]",
      formula_bn: "[সময়]-এর মধ্যে, আমি [কাজ] করে ফেলব",
      patternName: "Future Perfect (Deadline)",
      patternName_bn: "ফিউচার পারফেক্ট (সময়সীমা)",
      slots: [
        {
          name: "TIME",
          description: "A future deadline or time reference",
          description_bn: "একটি ভবিষ্যৎ সময়সীমা বা সময়ের রেফারেন্স",
          acceptedTypes: ["time", "time_expression"],
          examples: ["next Friday", "the end of this year", "tomorrow evening"],
        },
        {
          name: "PAST PARTICIPLE",
          description:
            "A verb in past participle form for the action to be completed",
          description_bn:
            "সম্পন্ন করা হবে এমন কাজের জন্য অতীত কৃদন্ত রূপের একটি ক্রিয়া",
          acceptedTypes: ["past_participle"],
          examples: ["finished", "saved", "completed"],
        },
      ],
      examples: [
        {
          en: "By next Friday, I will have finished the report.",
          bn: "আগামী শুক্রবারের মধ্যে, আমি রিপোর্ট শেষ করে ফেলব।",
          slotValues: {
            TIME: "next Friday",
            "PAST PARTICIPLE": "finished the report",
          },
          topicArea: "work",
        },
        {
          en: "By the end of this year, I will have saved enough for a car.",
          bn: "এই বছরের শেষের মধ্যে, আমি গাড়ির জন্য যথেষ্ট জমিয়ে ফেলব।",
          slotValues: {
            TIME: "the end of this year",
            "PAST PARTICIPLE": "saved enough for a car",
          },
          topicArea: "shopping",
        },
        {
          en: "By tomorrow evening, I will have completed the assignment.",
          bn: "আগামীকাল সন্ধ্যার মধ্যে, আমি অ্যাসাইনমেন্ট শেষ করে ফেলব।",
          slotValues: {
            TIME: "tomorrow evening",
            "PAST PARTICIPLE": "completed the assignment",
          },
          topicArea: "education",
        },
        {
          en: "By next month, I will have lost five kilograms.",
          bn: "আগামী মাসের মধ্যে, আমি পাঁচ কেজি কমিয়ে ফেলব।",
          slotValues: {
            TIME: "next month",
            "PAST PARTICIPLE": "lost five kilograms",
          },
          topicArea: "health",
        },
        {
          en: "By 8 PM, I will have cooked dinner.",
          bn: "রাত ৮টার মধ্যে, আমি রাতের খাবার রান্না করে ফেলব।",
          slotValues: { TIME: "8 PM", "PAST PARTICIPLE": "cooked dinner" },
          topicArea: "food",
        },
        {
          en: "By next summer, I will have visited ten countries.",
          bn: "আগামী গ্রীষ্মের মধ্যে, আমি দশটি দেশ ঘুরে ফেলব।",
          slotValues: {
            TIME: "next summer",
            "PAST PARTICIPLE": "visited ten countries",
          },
          topicArea: "travel",
        },
        {
          en: "By the end of the day, I will have cleaned the entire house.",
          bn: "দিনের শেষের মধ্যে, আমি পুরো ঘর পরিষ্কার করে ফেলব।",
          slotValues: {
            TIME: "the end of the day",
            "PAST PARTICIPLE": "cleaned the entire house",
          },
          topicArea: "daily_life",
        },
        {
          en: "By our anniversary, I will have planned a surprise.",
          bn: "আমাদের বার্ষিকীর মধ্যে, আমি একটি চমক পরিকল্পনা করে ফেলব।",
          slotValues: {
            TIME: "our anniversary",
            "PAST PARTICIPLE": "planned a surprise",
          },
          topicArea: "relationships",
        },
        {
          en: "By next week, I will have submitted all the documents.",
          bn: "আগামী সপ্তাহের মধ্যে, আমি সব কাগজপত্র জমা দিয়ে ফেলব।",
          slotValues: {
            TIME: "next week",
            "PAST PARTICIPLE": "submitted all the documents",
          },
          topicArea: "work",
        },
        {
          en: "By December, I will have read fifty books this year.",
          bn: "ডিসেম্বরের মধ্যে, আমি এই বছর পঞ্চাশটি বই পড়ে ফেলব।",
          slotValues: {
            TIME: "December",
            "PAST PARTICIPLE": "read fifty books this year",
          },
          topicArea: "education",
        },
        {
          en: "By lunchtime, I will have finished shopping.",
          bn: "দুপুরের খাবারের আগে, আমি কেনাকাটা শেষ করে ফেলব।",
          slotValues: {
            TIME: "lunchtime",
            "PAST PARTICIPLE": "finished shopping",
          },
          topicArea: "shopping",
        },
        {
          en: "By the end of this month, I will have run 100 kilometers.",
          bn: "এই মাসের শেষের মধ্যে, আমি ১০০ কিলোমিটার দৌড়ে ফেলব।",
          slotValues: {
            TIME: "the end of this month",
            "PAST PARTICIPLE": "run 100 kilometers",
          },
          topicArea: "health",
        },
        {
          en: "By tonight, I will have prepared all the food.",
          bn: "আজ রাতের মধ্যে, আমি সব খাবার তৈরি করে ফেলব।",
          slotValues: {
            TIME: "tonight",
            "PAST PARTICIPLE": "prepared all the food",
          },
          topicArea: "food",
        },
        {
          en: "By the time you arrive, I will have set up the room.",
          bn: "তুমি পৌঁছানোর মধ্যে, আমি ঘর সাজিয়ে ফেলব।",
          slotValues: {
            TIME: "the time you arrive",
            "PAST PARTICIPLE": "set up the room",
          },
          topicArea: "daily_life",
        },
        {
          en: "By next year, I will have been to Japan twice.",
          bn: "আগামী বছরের মধ্যে, আমি দুইবার জাপানে যেয়ে ফেলব।",
          slotValues: {
            TIME: "next year",
            "PAST PARTICIPLE": "been to Japan twice",
          },
          topicArea: "travel",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "The future perfect (will have + past participle) describes an action that will be completed before a future deadline. 'By' introduces the deadline.",
      usageNote_bn:
        "ফিউচার পারফেক্ট (will have + past participle) ভবিষ্যতের একটি সময়সীমার আগে সম্পন্ন হবে এমন কাজ বর্ণনা করে। 'By' সময়সীমা পরিচয় করায়।",
      combinableWith: ["C10.1", "C10.3"],
      banglaStructureMap:
        "[TIME] (Time) + এর মধ্যে + আমি (Subject) + [PP] (Verb) + করে ফেলব (Future Perfect)",
    },
    {
      id: "C10.3",
      formula: "I will still be [DOING] when [EVENT]",
      formula_bn: "যখন [ঘটনা], আমি তখনও [কাজ] করছি থাকব",
      patternName: "Ongoing Future Action",
      patternName_bn: "চলমান ভবিষ্যৎ কাজ",
      slots: [
        {
          name: "DOING",
          description: "A verb in -ing form for the ongoing activity",
          description_bn: "চলমান কাজের জন্য একটি -ing রূপের ক্রিয়া",
          acceptedTypes: ["gerund"],
          examples: ["working", "studying", "cooking"],
        },
        {
          name: "EVENT",
          description: "A future event or time that will interrupt or coincide",
          description_bn:
            "একটি ভবিষ্যৎ ঘটনা বা সময় যা বাধা দেবে বা মিলবে",
          acceptedTypes: ["event", "clause"],
          examples: ["you get home", "the meeting starts", "they arrive"],
        },
      ],
      examples: [
        {
          en: "I will still be working when you get home.",
          bn: "তুমি বাড়ি ফিরলেও আমি তখনও কাজ করছি থাকব।",
          slotValues: { DOING: "working", EVENT: "you get home" },
          topicArea: "work",
        },
        {
          en: "I will still be studying when the sun comes up.",
          bn: "সূর্য উঠলেও আমি তখনও পড়ছি থাকব।",
          slotValues: { DOING: "studying", EVENT: "the sun comes up" },
          topicArea: "education",
        },
        {
          en: "I will still be cooking when the guests arrive.",
          bn: "অতিথিরা এলেও আমি তখনও রান্না করছি থাকব।",
          slotValues: { DOING: "cooking", EVENT: "the guests arrive" },
          topicArea: "food",
        },
        {
          en: "I will still be exercising when you wake up.",
          bn: "তুমি ঘুম থেকে উঠলেও আমি তখনও ব্যায়াম করছি থাকব।",
          slotValues: { DOING: "exercising", EVENT: "you wake up" },
          topicArea: "health",
        },
        {
          en: "I will still be traveling when the new year starts.",
          bn: "নববর্ষ শুরু হলেও আমি তখনও ভ্রমণ করছি থাকব।",
          slotValues: { DOING: "traveling", EVENT: "the new year starts" },
          topicArea: "travel",
        },
        {
          en: "I will still be cleaning when they come to visit.",
          bn: "তারা দেখা করতে এলেও আমি তখনও পরিষ্কার করছি থাকব।",
          slotValues: { DOING: "cleaning", EVENT: "they come to visit" },
          topicArea: "daily_life",
        },
        {
          en: "I will still be shopping when the store closes.",
          bn: "দোকান বন্ধ হলেও আমি তখনও কেনাকাটা করছি থাকব।",
          slotValues: { DOING: "shopping", EVENT: "the store closes" },
          topicArea: "shopping",
        },
        {
          en: "I will still be waiting for you when you finish your class.",
          bn: "তোমার ক্লাস শেষ হলেও আমি তখনও তোমার জন্য অপেক্ষা করছি থাকব।",
          slotValues: {
            DOING: "waiting for you",
            EVENT: "you finish your class",
          },
          topicArea: "relationships",
        },
        {
          en: "I will still be preparing the presentation when the meeting starts.",
          bn: "মিটিং শুরু হলেও আমি তখনও প্রেজেন্টেশন তৈরি করছি থাকব।",
          slotValues: {
            DOING: "preparing the presentation",
            EVENT: "the meeting starts",
          },
          topicArea: "work",
        },
        {
          en: "I will still be baking the cake when the party begins.",
          bn: "পার্টি শুরু হলেও আমি তখনও কেক বানাচ্ছি থাকব।",
          slotValues: {
            DOING: "baking the cake",
            EVENT: "the party begins",
          },
          topicArea: "food",
        },
        {
          en: "I will still be writing my thesis when graduation day comes.",
          bn: "গ্র্যাজুয়েশনের দিন এলেও আমি তখনও থিসিস লিখছি থাকব।",
          slotValues: {
            DOING: "writing my thesis",
            EVENT: "graduation day comes",
          },
          topicArea: "education",
        },
        {
          en: "I will still be running when you finish your walk.",
          bn: "তোমার হাঁটা শেষ হলেও আমি তখনও দৌড়াচ্ছি থাকব।",
          slotValues: {
            DOING: "running",
            EVENT: "you finish your walk",
          },
          topicArea: "health",
        },
        {
          en: "I will still be packing when the taxi arrives.",
          bn: "ট্যাক্সি এলেও আমি তখনও ব্যাগ গোছাচ্ছি থাকব।",
          slotValues: { DOING: "packing", EVENT: "the taxi arrives" },
          topicArea: "travel",
        },
        {
          en: "I will still be reading when you go to sleep.",
          bn: "তুমি ঘুমাতে গেলেও আমি তখনও পড়ছি থাকব।",
          slotValues: { DOING: "reading", EVENT: "you go to sleep" },
          topicArea: "daily_life",
        },
        {
          en: "I will still be talking to her when you call me.",
          bn: "তুমি ফোন করলেও আমি তখনও তার সাথে কথা বলছি থাকব।",
          slotValues: {
            DOING: "talking to her",
            EVENT: "you call me",
          },
          topicArea: "relationships",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "'Will still be + -ing' emphasizes that an action will continue even when another future event happens. 'Still' stresses the continuation.",
      usageNote_bn:
        "'Will still be + -ing' জোর দেয় যে অন্য একটি ভবিষ্যৎ ঘটনা ঘটলেও একটি কাজ চলতে থাকবে। 'Still' ধারাবাহিকতার উপর জোর দেয়।",
      combinableWith: ["C10.1"],
      banglaStructureMap:
        "যখন [EVENT] (ঘটনা) + আমি (Subject) + তখনও + [DOING] (Verb-ing) + করছি থাকব (Future Continuous)",
    },
    {
      id: "C10.4",
      formula: "By [TIME], I will have been [DOING] for [DURATION]",
      formula_bn: "[সময়]-এর মধ্যে, আমি [সময়কাল] ধরে [কাজ] করছি থাকব",
      patternName: "Future Perfect Continuous",
      patternName_bn: "ফিউচার পারফেক্ট কন্টিনিউয়াস",
      slots: [
        {
          name: "TIME",
          description: "A future reference point",
          description_bn: "একটি ভবিষ্যৎ রেফারেন্স পয়েন্ট",
          acceptedTypes: ["time", "time_expression"],
          examples: ["next month", "December", "next year"],
        },
        {
          name: "DOING",
          description: "A verb in -ing form for the ongoing action",
          description_bn: "চলমান কাজের জন্য একটি -ing রূপের ক্রিয়া",
          acceptedTypes: ["gerund"],
          examples: ["working", "living", "studying"],
        },
        {
          name: "DURATION",
          description: "The length of time the action will have continued",
          description_bn: "কাজটি কতক্ষণ ধরে চলমান থাকবে তার সময়কাল",
          acceptedTypes: ["time"],
          examples: ["five years", "six months", "ten years"],
        },
      ],
      examples: [
        {
          en: "By next month, I will have been working here for five years.",
          bn: "আগামী মাসের মধ্যে, আমি এখানে পাঁচ বছর ধরে কাজ করছি থাকব।",
          slotValues: {
            TIME: "next month",
            DOING: "working here",
            DURATION: "five years",
          },
          topicArea: "work",
        },
        {
          en: "By December, I will have been studying English for two years.",
          bn: "ডিসেম্বরের মধ্যে, আমি দুই বছর ধরে ইংরেজি পড়ছি থাকব।",
          slotValues: {
            TIME: "December",
            DOING: "studying English",
            DURATION: "two years",
          },
          topicArea: "education",
        },
        {
          en: "By next year, I will have been living in this city for a decade.",
          bn: "আগামী বছরের মধ্যে, আমি এই শহরে এক দশক ধরে থাকছি।",
          slotValues: {
            TIME: "next year",
            DOING: "living in this city",
            DURATION: "a decade",
          },
          topicArea: "daily_life",
        },
        {
          en: "By March, I will have been dieting for six months.",
          bn: "মার্চের মধ্যে, আমি ছয় মাস ধরে ডায়েট করছি থাকব।",
          slotValues: {
            TIME: "March",
            DOING: "dieting",
            DURATION: "six months",
          },
          topicArea: "health",
        },
        {
          en: "By our anniversary, I will have been cooking for her for ten years.",
          bn: "আমাদের বার্ষিকীর মধ্যে, আমি দশ বছর ধরে তার জন্য রান্না করছি থাকব।",
          slotValues: {
            TIME: "our anniversary",
            DOING: "cooking for her",
            DURATION: "ten years",
          },
          topicArea: "food",
        },
        {
          en: "By July, I will have been traveling for three months.",
          bn: "জুলাইয়ের মধ্যে, আমি তিন মাস ধরে ভ্রমণ করছি থাকব।",
          slotValues: {
            TIME: "July",
            DOING: "traveling",
            DURATION: "three months",
          },
          topicArea: "travel",
        },
        {
          en: "By the end of this month, I will have been saving for a year.",
          bn: "এই মাসের শেষের মধ্যে, আমি এক বছর ধরে জমাচ্ছি থাকব।",
          slotValues: {
            TIME: "the end of this month",
            DOING: "saving",
            DURATION: "a year",
          },
          topicArea: "shopping",
        },
        {
          en: "By next week, I will have been dating her for two years.",
          bn: "আগামী সপ্তাহের মধ্যে, আমি দুই বছর ধরে তার সাথে সম্পর্কে থাকব।",
          slotValues: {
            TIME: "next week",
            DOING: "dating her",
            DURATION: "two years",
          },
          topicArea: "relationships",
        },
        {
          en: "By Friday, I will have been managing this project for a month.",
          bn: "শুক্রবারের মধ্যে, আমি এক মাস ধরে এই প্রকল্প পরিচালনা করছি থাকব।",
          slotValues: {
            TIME: "Friday",
            DOING: "managing this project",
            DURATION: "a month",
          },
          topicArea: "work",
        },
        {
          en: "By June, I will have been attending this course for one year.",
          bn: "জুনের মধ্যে, আমি এক বছর ধরে এই কোর্সে যাচ্ছি থাকব।",
          slotValues: {
            TIME: "June",
            DOING: "attending this course",
            DURATION: "one year",
          },
          topicArea: "education",
        },
        {
          en: "By tomorrow, I will have been fasting for 24 hours.",
          bn: "আগামীকালের মধ্যে, আমি ২৪ ঘণ্টা ধরে রোজা রাখছি থাকব।",
          slotValues: {
            TIME: "tomorrow",
            DOING: "fasting",
            DURATION: "24 hours",
          },
          topicArea: "health",
        },
        {
          en: "By next year, I will have been cooking professionally for five years.",
          bn: "আগামী বছরের মধ্যে, আমি পাঁচ বছর ধরে পেশাদারভাবে রান্না করছি থাকব।",
          slotValues: {
            TIME: "next year",
            DOING: "cooking professionally",
            DURATION: "five years",
          },
          topicArea: "food",
        },
        {
          en: "By next summer, I will have been backpacking for six months.",
          bn: "আগামী গ্রীষ্মের মধ্যে, আমি ছয় মাস ধরে ব্যাকপ্যাকিং করছি থাকব।",
          slotValues: {
            TIME: "next summer",
            DOING: "backpacking",
            DURATION: "six months",
          },
          topicArea: "travel",
        },
        {
          en: "By evening, I will have been cleaning for four hours.",
          bn: "সন্ধ্যার মধ্যে, আমি চার ঘণ্টা ধরে পরিষ্কার করছি থাকব।",
          slotValues: {
            TIME: "evening",
            DOING: "cleaning",
            DURATION: "four hours",
          },
          topicArea: "daily_life",
        },
        {
          en: "By our wedding, I will have been knowing him for eight years.",
          bn: "আমাদের বিয়ের মধ্যে, আমি তাকে আট বছর ধরে চিনছি থাকব।",
          slotValues: {
            TIME: "our wedding",
            DOING: "knowing him",
            DURATION: "eight years",
          },
          topicArea: "relationships",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "The future perfect continuous (will have been + -ing) emphasizes the duration of an action that will have been in progress up to a future point. Use 'for' with the duration.",
      usageNote_bn:
        "ফিউচার পারফেক্ট কন্টিনিউয়াস (will have been + -ing) ভবিষ্যতের একটি বিন্দু পর্যন্ত চলমান কাজের সময়কালের উপর জোর দেয়। সময়কালের সাথে 'for' ব্যবহার করুন।",
      combinableWith: ["C10.1", "C10.2"],
      banglaStructureMap:
        "[TIME] (Time) + এর মধ্যে + আমি (Subject) + [DURATION] (Duration) + ধরে + [DOING] (Verb-ing) + করছি থাকব (Future Perfect Continuous)",
    },
    {
      id: "C10.5",
      formula: "I won't have [PAST PARTICIPLE] by [TIME]",
      formula_bn: "[সময়]-এর মধ্যে আমি [কাজ] করে ফেলতে পারব না",
      patternName: "Future Perfect Negative",
      patternName_bn: "ফিউচার পারফেক্ট নেতিবাচক",
      slots: [
        {
          name: "PAST PARTICIPLE",
          description:
            "A verb in past participle form for the action that won't be completed",
          description_bn:
            "যে কাজ সম্পন্ন হবে না তার জন্য অতীত কৃদন্ত রূপের একটি ক্রিয়া",
          acceptedTypes: ["past_participle"],
          examples: ["finished", "arrived", "learned"],
        },
        {
          name: "TIME",
          description: "A future deadline by which the action won't be done",
          description_bn:
            "একটি ভবিষ্যৎ সময়সীমা যার মধ্যে কাজটি সম্পন্ন হবে না",
          acceptedTypes: ["time", "time_expression"],
          examples: ["Monday", "next week", "tomorrow"],
        },
      ],
      examples: [
        {
          en: "I won't have finished the project by Monday.",
          bn: "সোমবারের মধ্যে আমি প্রকল্পটি শেষ করতে পারব না।",
          slotValues: {
            "PAST PARTICIPLE": "finished the project",
            TIME: "Monday",
          },
          topicArea: "work",
        },
        {
          en: "I won't have read the whole book by the exam.",
          bn: "পরীক্ষার মধ্যে আমি পুরো বইটি পড়ে ফেলতে পারব না।",
          slotValues: {
            "PAST PARTICIPLE": "read the whole book",
            TIME: "the exam",
          },
          topicArea: "education",
        },
        {
          en: "I won't have saved enough by next month.",
          bn: "আগামী মাসের মধ্যে আমি যথেষ্ট জমাতে পারব না।",
          slotValues: {
            "PAST PARTICIPLE": "saved enough",
            TIME: "next month",
          },
          topicArea: "shopping",
        },
        {
          en: "I won't have cooked everything by 7 PM.",
          bn: "সন্ধ্যা ৭টার মধ্যে আমি সব রান্না করে ফেলতে পারব না।",
          slotValues: {
            "PAST PARTICIPLE": "cooked everything",
            TIME: "7 PM",
          },
          topicArea: "food",
        },
        {
          en: "I won't have recovered fully by next week.",
          bn: "আগামী সপ্তাহের মধ্যে আমি পুরোপুরি সুস্থ হতে পারব না।",
          slotValues: {
            "PAST PARTICIPLE": "recovered fully",
            TIME: "next week",
          },
          topicArea: "health",
        },
        {
          en: "I won't have arrived by noon.",
          bn: "দুপুরের মধ্যে আমি পৌঁছাতে পারব না।",
          slotValues: { "PAST PARTICIPLE": "arrived", TIME: "noon" },
          topicArea: "travel",
        },
        {
          en: "I won't have cleaned the house by the time they come.",
          bn: "তারা আসার মধ্যে আমি ঘর পরিষ্কার করে ফেলতে পারব না।",
          slotValues: {
            "PAST PARTICIPLE": "cleaned the house",
            TIME: "the time they come",
          },
          topicArea: "daily_life",
        },
        {
          en: "I won't have called everyone by tonight.",
          bn: "আজ রাতের মধ্যে আমি সবাইকে ফোন করতে পারব না।",
          slotValues: {
            "PAST PARTICIPLE": "called everyone",
            TIME: "tonight",
          },
          topicArea: "relationships",
        },
        {
          en: "I won't have completed the training by Friday.",
          bn: "শুক্রবারের মধ্যে আমি প্রশিক্ষণ শেষ করতে পারব না।",
          slotValues: {
            "PAST PARTICIPLE": "completed the training",
            TIME: "Friday",
          },
          topicArea: "work",
        },
        {
          en: "I won't have learned all the chapters by the test date.",
          bn: "পরীক্ষার তারিখের মধ্যে আমি সব অধ্যায় শিখে ফেলতে পারব না।",
          slotValues: {
            "PAST PARTICIPLE": "learned all the chapters",
            TIME: "the test date",
          },
          topicArea: "education",
        },
        {
          en: "I won't have bought all the gifts by Christmas.",
          bn: "বড়দিনের মধ্যে আমি সব উপহার কিনতে পারব না।",
          slotValues: {
            "PAST PARTICIPLE": "bought all the gifts",
            TIME: "Christmas",
          },
          topicArea: "shopping",
        },
        {
          en: "I won't have prepared the menu by tomorrow.",
          bn: "আগামীকালের মধ্যে আমি মেনু তৈরি করতে পারব না।",
          slotValues: {
            "PAST PARTICIPLE": "prepared the menu",
            TIME: "tomorrow",
          },
          topicArea: "food",
        },
        {
          en: "I won't have lost enough weight by summer.",
          bn: "গ্রীষ্মের মধ্যে আমি যথেষ্ট ওজন কমাতে পারব না।",
          slotValues: {
            "PAST PARTICIPLE": "lost enough weight",
            TIME: "summer",
          },
          topicArea: "health",
        },
        {
          en: "I won't have reached the hotel by check-in time.",
          bn: "চেক-ইন টাইমের মধ্যে আমি হোটেলে পৌঁছাতে পারব না।",
          slotValues: {
            "PAST PARTICIPLE": "reached the hotel",
            TIME: "check-in time",
          },
          topicArea: "travel",
        },
        {
          en: "I won't have organized everything by the event.",
          bn: "অনুষ্ঠানের মধ্যে আমি সব গোছাতে পারব না।",
          slotValues: {
            "PAST PARTICIPLE": "organized everything",
            TIME: "the event",
          },
          topicArea: "daily_life",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "'Won't have + past participle' expresses that something will NOT be completed before a future deadline. It is useful for managing expectations.",
      usageNote_bn:
        "'Won't have + past participle' প্রকাশ করে যে কিছু ভবিষ্যতের সময়সীমার আগে সম্পন্ন হবে না। প্রত্যাশা পরিচালনার জন্য এটি কার্যকর।",
      combinableWith: ["C10.2"],
      banglaStructureMap:
        "[TIME] (Time) + এর মধ্যে + আমি (Subject) + [PP] (Verb) + করে ফেলতে পারব না (Neg Future Perfect)",
    },
  ],
};
