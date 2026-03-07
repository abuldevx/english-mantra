import { PatternCategory } from "@/types/pattern";

export const categoryT2: PatternCategory = {
  id: "T2",
  slug: "appointments-arrangements",
  name: "Appointments & Arrangements",
  name_bn: "অ্যাপয়েন্টমেন্ট ও ব্যবস্থাপনা",
  description:
    "Learn how to make, change, and manage appointments and arrangements in English.",
  description_bn:
    "ইংরেজিতে অ্যাপয়েন্টমেন্ট ও ব্যবস্থা তৈরি, পরিবর্তন এবং পরিচালনা করতে শিখুন।",
  icon: "📅",
  group: "T",
  groupName: "Situational Patterns",
  groupName_bn: "পরিস্থিতিগত প্যাটার্ন",
  difficulty: "beginner",
  patterns: [
    {
      id: "T2.1",
      formula: "I'd like to make an appointment for [TIME]",
      formula_bn: "আমি [সময়ের] জন্য একটি অ্যাপয়েন্টমেন্ট নিতে চাই",
      patternName: "Making an Appointment",
      patternName_bn: "অ্যাপয়েন্টমেন্ট নেওয়া",
      slots: [
        {
          name: "TIME",
          description: "A specific time, date, or day for the appointment",
          description_bn:
            "অ্যাপয়েন্টমেন্টের জন্য একটি নির্দিষ্ট সময়, তারিখ, বা দিন",
          acceptedTypes: ["time", "time_expression"],
          examples: ["tomorrow morning", "3 PM", "next Monday"],
        },
      ],
      examples: [
        {
          en: "I'd like to make an appointment for tomorrow morning.",
          bn: "আমি আগামীকাল সকালের জন্য একটি অ্যাপয়েন্টমেন্ট নিতে চাই।",
          slotValues: { TIME: "tomorrow morning" },
          topicArea: "health",
        },
        {
          en: "I'd like to make an appointment for 3 PM.",
          bn: "আমি বিকাল ৩টার জন্য একটি অ্যাপয়েন্টমেন্ট নিতে চাই।",
          slotValues: { TIME: "3 PM" },
          topicArea: "health",
        },
        {
          en: "I'd like to make an appointment for next Monday.",
          bn: "আমি আগামী সোমবারের জন্য একটি অ্যাপয়েন্টমেন্ট নিতে চাই।",
          slotValues: { TIME: "next Monday" },
          topicArea: "work",
        },
        {
          en: "I'd like to make an appointment for this Friday.",
          bn: "আমি এই শুক্রবারের জন্য একটি অ্যাপয়েন্টমেন্ট নিতে চাই।",
          slotValues: { TIME: "this Friday" },
          topicArea: "daily_life",
        },
        {
          en: "I'd like to make an appointment for 10 o'clock.",
          bn: "আমি ১০টার জন্য একটি অ্যাপয়েন্টমেন্ট নিতে চাই।",
          slotValues: { TIME: "10 o'clock" },
          topicArea: "health",
        },
        {
          en: "I'd like to make an appointment for the afternoon.",
          bn: "আমি বিকালের জন্য একটি অ্যাপয়েন্টমেন্ট নিতে চাই।",
          slotValues: { TIME: "the afternoon" },
          topicArea: "daily_life",
        },
        {
          en: "I'd like to make an appointment for next week.",
          bn: "আমি আগামী সপ্তাহের জন্য একটি অ্যাপয়েন্টমেন্ট নিতে চাই।",
          slotValues: { TIME: "next week" },
          topicArea: "work",
        },
        {
          en: "I'd like to make an appointment for Saturday morning.",
          bn: "আমি শনিবার সকালের জন্য একটি অ্যাপয়েন্টমেন্ট নিতে চাই।",
          slotValues: { TIME: "Saturday morning" },
          topicArea: "health",
        },
        {
          en: "I'd like to make an appointment for 2:30 PM.",
          bn: "আমি দুপুর ২:৩০-এর জন্য একটি অ্যাপয়েন্টমেন্ট নিতে চাই।",
          slotValues: { TIME: "2:30 PM" },
          topicArea: "daily_life",
        },
        {
          en: "I'd like to make an appointment for the end of the month.",
          bn: "আমি মাসের শেষের দিকের জন্য একটি অ্যাপয়েন্টমেন্ট নিতে চাই।",
          slotValues: { TIME: "the end of the month" },
          topicArea: "work",
        },
        {
          en: "I'd like to make an appointment for early morning.",
          bn: "আমি ভোরবেলার জন্য একটি অ্যাপয়েন্টমেন্ট নিতে চাই।",
          slotValues: { TIME: "early morning" },
          topicArea: "health",
        },
        {
          en: "I'd like to make an appointment for Wednesday evening.",
          bn: "আমি বুধবার সন্ধ্যার জন্য একটি অ্যাপয়েন্টমেন্ট নিতে চাই।",
          slotValues: { TIME: "Wednesday evening" },
          topicArea: "daily_life",
        },
        {
          en: "I'd like to make an appointment for the first week of April.",
          bn: "আমি এপ্রিলের প্রথম সপ্তাহের জন্য একটি অ্যাপয়েন্টমেন্ট নিতে চাই।",
          slotValues: { TIME: "the first week of April" },
          topicArea: "education",
        },
        {
          en: "I'd like to make an appointment for lunchtime.",
          bn: "আমি দুপুরের খাবারের সময়ের জন্য একটি অ্যাপয়েন্টমেন্ট নিতে চাই।",
          slotValues: { TIME: "lunchtime" },
          topicArea: "work",
        },
        {
          en: "I'd like to make an appointment for as soon as possible.",
          bn: "আমি যত তাড়াতাড়ি সম্ভব একটি অ্যাপয়েন্টমেন্ট নিতে চাই।",
          slotValues: { TIME: "as soon as possible" },
          topicArea: "health",
        },
      ],
      formality: "polite",
      difficulty: "beginner",
      usageNote:
        "The standard polite way to schedule an appointment at a doctor's office, salon, or office.",
      usageNote_bn:
        "ডাক্তারের চেম্বার, সেলুন, বা অফিসে অ্যাপয়েন্টমেন্ট নেওয়ার মানসম্মত বিনয়ী উপায়।",
      combinableWith: ["T2.4"],
      banglaStructureMap:
        "আমি (Subject) + [TIME]-এর জন্য (Time + Postposition) + একটি অ্যাপয়েন্টমেন্ট নিতে চাই (Object + Verb)",
    },
    {
      id: "T2.2",
      formula: "Can we reschedule to [TIME]?",
      formula_bn: "আমরা কি [সময়ে] পুনঃনির্ধারণ করতে পারি?",
      patternName: "Rescheduling",
      patternName_bn: "পুনঃসময় নির্ধারণ",
      slots: [
        {
          name: "TIME",
          description: "The new time, date, or day you want to move to",
          description_bn:
            "নতুন সময়, তারিখ, বা দিন যেখানে আপনি স্থানান্তর করতে চান",
          acceptedTypes: ["time", "time_expression"],
          examples: ["next Tuesday", "the following week", "4 PM"],
        },
      ],
      examples: [
        {
          en: "Can we reschedule to next Tuesday?",
          bn: "আমরা কি আগামী মঙ্গলবারে পুনঃনির্ধারণ করতে পারি?",
          slotValues: { TIME: "next Tuesday" },
          topicArea: "work",
        },
        {
          en: "Can we reschedule to the following week?",
          bn: "আমরা কি পরের সপ্তাহে পুনঃনির্ধারণ করতে পারি?",
          slotValues: { TIME: "the following week" },
          topicArea: "work",
        },
        {
          en: "Can we reschedule to 4 PM?",
          bn: "আমরা কি বিকাল ৪টায় পুনঃনির্ধারণ করতে পারি?",
          slotValues: { TIME: "4 PM" },
          topicArea: "daily_life",
        },
        {
          en: "Can we reschedule to tomorrow?",
          bn: "আমরা কি আগামীকালে পুনঃনির্ধারণ করতে পারি?",
          slotValues: { TIME: "tomorrow" },
          topicArea: "health",
        },
        {
          en: "Can we reschedule to Monday morning?",
          bn: "আমরা কি সোমবার সকালে পুনঃনির্ধারণ করতে পারি?",
          slotValues: { TIME: "Monday morning" },
          topicArea: "work",
        },
        {
          en: "Can we reschedule to sometime next month?",
          bn: "আমরা কি আগামী মাসের কোনো একটা সময়ে পুনঃনির্ধারণ করতে পারি?",
          slotValues: { TIME: "sometime next month" },
          topicArea: "daily_life",
        },
        {
          en: "Can we reschedule to after lunch?",
          bn: "আমরা কি দুপুরের খাবারের পরে পুনঃনির্ধারণ করতে পারি?",
          slotValues: { TIME: "after lunch" },
          topicArea: "work",
        },
        {
          en: "Can we reschedule to 9 AM?",
          bn: "আমরা কি সকাল ৯টায় পুনঃনির্ধারণ করতে পারি?",
          slotValues: { TIME: "9 AM" },
          topicArea: "education",
        },
        {
          en: "Can we reschedule to this weekend?",
          bn: "আমরা কি এই সপ্তাহান্তে পুনঃনির্ধারণ করতে পারি?",
          slotValues: { TIME: "this weekend" },
          topicArea: "relationships",
        },
        {
          en: "Can we reschedule to Friday afternoon?",
          bn: "আমরা কি শুক্রবার বিকালে পুনঃনির্ধারণ করতে পারি?",
          slotValues: { TIME: "Friday afternoon" },
          topicArea: "work",
        },
        {
          en: "Can we reschedule to the day after tomorrow?",
          bn: "আমরা কি পরশুতে পুনঃনির্ধারণ করতে পারি?",
          slotValues: { TIME: "the day after tomorrow" },
          topicArea: "health",
        },
        {
          en: "Can we reschedule to an earlier time?",
          bn: "আমরা কি আরও আগের সময়ে পুনঃনির্ধারণ করতে পারি?",
          slotValues: { TIME: "an earlier time" },
          topicArea: "daily_life",
        },
        {
          en: "Can we reschedule to next Thursday at 2?",
          bn: "আমরা কি আগামী বৃহস্পতিবার ২টায় পুনঃনির্ধারণ করতে পারি?",
          slotValues: { TIME: "next Thursday at 2" },
          topicArea: "education",
        },
        {
          en: "Can we reschedule to the evening?",
          bn: "আমরা কি সন্ধ্যায় পুনঃনির্ধারণ করতে পারি?",
          slotValues: { TIME: "the evening" },
          topicArea: "relationships",
        },
        {
          en: "Can we reschedule to later this week?",
          bn: "আমরা কি এই সপ্তাহের পরে পুনঃনির্ধারণ করতে পারি?",
          slotValues: { TIME: "later this week" },
          topicArea: "work",
        },
      ],
      formality: "polite",
      difficulty: "beginner",
      usageNote:
        "A polite and common way to request changing a scheduled meeting or appointment to a different time.",
      usageNote_bn:
        "একটি নির্ধারিত মিটিং বা অ্যাপয়েন্টমেন্ট ভিন্ন সময়ে পরিবর্তনের অনুরোধ করার বিনয়ী ও সাধারণ উপায়।",
      combinableWith: ["T2.3"],
      banglaStructureMap:
        "আমরা কি (Subject + Question) + [TIME]-এ (Time + Postposition) + পুনঃনির্ধারণ করতে পারি (Verb)?",
    },
    {
      id: "T2.3",
      formula: "When is a good time for you?",
      formula_bn: "আপনার জন্য কোন সময়টা ভালো?",
      patternName: "Asking About Availability",
      patternName_bn: "সময়ের সুবিধা জানতে চাওয়া",
      slots: [],
      examples: [
        {
          en: "When is a good time for you?",
          bn: "আপনার জন্য কোন সময়টা ভালো?",
          slotValues: {},
          topicArea: "work",
        },
        {
          en: "When is a good time for you to meet?",
          bn: "আপনার জন্য দেখা করার কোন সময়টা ভালো?",
          slotValues: {},
          topicArea: "work",
        },
        {
          en: "When is a good time for you to talk?",
          bn: "আপনার জন্য কথা বলার কোন সময়টা ভালো?",
          slotValues: {},
          topicArea: "relationships",
        },
        {
          en: "When is a good time for you this week?",
          bn: "এই সপ্তাহে আপনার জন্য কোন সময়টা ভালো?",
          slotValues: {},
          topicArea: "daily_life",
        },
        {
          en: "When is a good time for you to visit the doctor?",
          bn: "আপনার জন্য ডাক্তারের কাছে যাওয়ার কোন সময়টা ভালো?",
          slotValues: {},
          topicArea: "health",
        },
        {
          en: "When is a good time for you to discuss the project?",
          bn: "আপনার জন্য প্রজেক্ট আলোচনা করার কোন সময়টা ভালো?",
          slotValues: {},
          topicArea: "work",
        },
        {
          en: "When is a good time for you to have dinner?",
          bn: "আপনার জন্য রাতের খাবার খাওয়ার কোন সময়টা ভালো?",
          slotValues: {},
          topicArea: "food",
        },
        {
          en: "When is a good time for you tomorrow?",
          bn: "আগামীকাল আপনার জন্য কোন সময়টা ভালো?",
          slotValues: {},
          topicArea: "daily_life",
        },
        {
          en: "When is a good time for you to review my work?",
          bn: "আপনার জন্য আমার কাজ পর্যালোচনা করার কোন সময়টা ভালো?",
          slotValues: {},
          topicArea: "education",
        },
        {
          en: "When is a good time for you to go shopping?",
          bn: "আপনার জন্য কেনাকাটা করতে যাওয়ার কোন সময়টা ভালো?",
          slotValues: {},
          topicArea: "shopping",
        },
        {
          en: "When is a good time for you to call?",
          bn: "আপনার জন্য ফোন করার কোন সময়টা ভালো?",
          slotValues: {},
          topicArea: "daily_life",
        },
        {
          en: "When is a good time for you to start the trip?",
          bn: "আপনার জন্য যাত্রা শুরু করার কোন সময়টা ভালো?",
          slotValues: {},
          topicArea: "travel",
        },
        {
          en: "When is a good time for you next week?",
          bn: "আগামী সপ্তাহে আপনার জন্য কোন সময়টা ভালো?",
          slotValues: {},
          topicArea: "work",
        },
        {
          en: "When is a good time for you to drop by?",
          bn: "আপনার জন্য একটু ঘুরে আসার কোন সময়টা ভালো?",
          slotValues: {},
          topicArea: "relationships",
        },
        {
          en: "When is a good time for you to check in?",
          bn: "আপনার জন্য চেক-ইন করার কোন সময়টা ভালো?",
          slotValues: {},
          topicArea: "travel",
        },
      ],
      formality: "polite",
      difficulty: "beginner",
      usageNote:
        "A considerate way to let the other person choose a convenient time. Shows respect for their schedule.",
      usageNote_bn:
        "অন্য ব্যক্তিকে সুবিধাজনক সময় বেছে নিতে দেওয়ার একটি বিবেচনাশীল উপায়। তাদের সময়সূচির প্রতি সম্মান দেখায়।",
      combinableWith: ["T2.1", "T2.4"],
      banglaStructureMap:
        "আপনার জন্য (Beneficiary + Postposition) + কোন সময়টা (Question word) + ভালো (Adjective)?",
    },
    {
      id: "T2.4",
      formula: "I'm available on [DAY]",
      formula_bn: "আমি [দিনে] ফ্রি আছি",
      patternName: "Stating Availability",
      patternName_bn: "সময়ের সুবিধা জানানো",
      slots: [
        {
          name: "DAY",
          description: "A specific day, date, or time period when you are free",
          description_bn:
            "একটি নির্দিষ্ট দিন, তারিখ, বা সময়কাল যখন আপনি ফ্রি",
          acceptedTypes: ["time", "time_expression"],
          examples: ["Monday", "weekends", "the 15th"],
        },
      ],
      examples: [
        {
          en: "I'm available on Monday.",
          bn: "আমি সোমবারে ফ্রি আছি।",
          slotValues: { DAY: "Monday" },
          topicArea: "work",
        },
        {
          en: "I'm available on weekends.",
          bn: "আমি সপ্তাহান্তে ফ্রি আছি।",
          slotValues: { DAY: "weekends" },
          topicArea: "daily_life",
        },
        {
          en: "I'm available on the 15th.",
          bn: "আমি ১৫ তারিখে ফ্রি আছি।",
          slotValues: { DAY: "the 15th" },
          topicArea: "work",
        },
        {
          en: "I'm available on Tuesday afternoon.",
          bn: "আমি মঙ্গলবার বিকালে ফ্রি আছি।",
          slotValues: { DAY: "Tuesday afternoon" },
          topicArea: "education",
        },
        {
          en: "I'm available on Thursday and Friday.",
          bn: "আমি বৃহস্পতিবার ও শুক্রবারে ফ্রি আছি।",
          slotValues: { DAY: "Thursday and Friday" },
          topicArea: "work",
        },
        {
          en: "I'm available on any day this week.",
          bn: "আমি এই সপ্তাহে যেকোনো দিনে ফ্রি আছি।",
          slotValues: { DAY: "any day this week" },
          topicArea: "daily_life",
        },
        {
          en: "I'm available on Sunday morning.",
          bn: "আমি রবিবার সকালে ফ্রি আছি।",
          slotValues: { DAY: "Sunday morning" },
          topicArea: "relationships",
        },
        {
          en: "I'm available on the first of next month.",
          bn: "আমি আগামী মাসের ১ তারিখে ফ্রি আছি।",
          slotValues: { DAY: "the first of next month" },
          topicArea: "health",
        },
        {
          en: "I'm available on Wednesday after 3 PM.",
          bn: "আমি বুধবার বিকাল ৩টার পরে ফ্রি আছি।",
          slotValues: { DAY: "Wednesday after 3 PM" },
          topicArea: "work",
        },
        {
          en: "I'm available on most evenings.",
          bn: "আমি বেশিরভাগ সন্ধ্যায় ফ্রি আছি।",
          slotValues: { DAY: "most evenings" },
          topicArea: "education",
        },
        {
          en: "I'm available on the 20th of March.",
          bn: "আমি ২০শে মার্চে ফ্রি আছি।",
          slotValues: { DAY: "the 20th of March" },
          topicArea: "daily_life",
        },
        {
          en: "I'm available on Saturday all day.",
          bn: "আমি শনিবার সারাদিন ফ্রি আছি।",
          slotValues: { DAY: "Saturday all day" },
          topicArea: "relationships",
        },
        {
          en: "I'm available on public holidays.",
          bn: "আমি সরকারি ছুটির দিনে ফ্রি আছি।",
          slotValues: { DAY: "public holidays" },
          topicArea: "daily_life",
        },
        {
          en: "I'm available on alternate Fridays.",
          bn: "আমি একান্তর শুক্রবারে ফ্রি আছি।",
          slotValues: { DAY: "alternate Fridays" },
          topicArea: "work",
        },
        {
          en: "I'm available on the last day of the semester.",
          bn: "আমি সেমিস্টারের শেষ দিনে ফ্রি আছি।",
          slotValues: { DAY: "the last day of the semester" },
          topicArea: "education",
        },
      ],
      formality: "casual",
      difficulty: "beginner",
      usageNote:
        "A simple and direct way to share when you are free. Often used in response to 'When is a good time for you?'",
      usageNote_bn:
        "আপনি কখন ফ্রি তা জানানোর একটি সহজ ও সরাসরি উপায়। প্রায়ই 'আপনার জন্য কোন সময়টা ভালো?'-এর উত্তরে ব্যবহৃত হয়।",
      combinableWith: ["T2.3"],
      responsePatterns: ["T2.3"],
      banglaStructureMap:
        "আমি (Subject) + [DAY]-এ (Time + Postposition) + ফ্রি আছি (Adjective + Verb)",
    },
    {
      id: "T2.5",
      formula: "Let's set a time for [EVENT]",
      formula_bn: "চলো [ইভেন্টের] জন্য একটা সময় ঠিক করি",
      patternName: "Proposing to Schedule",
      patternName_bn: "সময় নির্ধারণের প্রস্তাব",
      slots: [
        {
          name: "EVENT",
          description:
            "An activity, meeting, or event that needs to be scheduled",
          description_bn:
            "একটি কার্যকলাপ, মিটিং, বা ইভেন্ট যা সময় নির্ধারণ করা দরকার",
          acceptedTypes: ["noun", "noun_phrase", "event"],
          examples: ["the meeting", "our lunch", "the interview"],
        },
      ],
      examples: [
        {
          en: "Let's set a time for the meeting.",
          bn: "চলো মিটিংয়ের জন্য একটা সময় ঠিক করি।",
          slotValues: { EVENT: "the meeting" },
          topicArea: "work",
        },
        {
          en: "Let's set a time for our lunch.",
          bn: "চলো আমাদের দুপুরের খাবারের জন্য একটা সময় ঠিক করি।",
          slotValues: { EVENT: "our lunch" },
          topicArea: "food",
        },
        {
          en: "Let's set a time for the interview.",
          bn: "চলো ইন্টারভিউয়ের জন্য একটা সময় ঠিক করি।",
          slotValues: { EVENT: "the interview" },
          topicArea: "work",
        },
        {
          en: "Let's set a time for the study group.",
          bn: "চলো স্টাডি গ্রুপের জন্য একটা সময় ঠিক করি।",
          slotValues: { EVENT: "the study group" },
          topicArea: "education",
        },
        {
          en: "Let's set a time for the party.",
          bn: "চলো পার্টির জন্য একটা সময় ঠিক করি।",
          slotValues: { EVENT: "the party" },
          topicArea: "relationships",
        },
        {
          en: "Let's set a time for the doctor's visit.",
          bn: "চলো ডাক্তারের কাছে যাওয়ার জন্য একটা সময় ঠিক করি।",
          slotValues: { EVENT: "the doctor's visit" },
          topicArea: "health",
        },
        {
          en: "Let's set a time for the video call.",
          bn: "চলো ভিডিও কলের জন্য একটা সময় ঠিক করি।",
          slotValues: { EVENT: "the video call" },
          topicArea: "work",
        },
        {
          en: "Let's set a time for our trip.",
          bn: "চলো আমাদের ভ্রমণের জন্য একটা সময় ঠিক করি।",
          slotValues: { EVENT: "our trip" },
          topicArea: "travel",
        },
        {
          en: "Let's set a time for the presentation.",
          bn: "চলো উপস্থাপনার জন্য একটা সময় ঠিক করি।",
          slotValues: { EVENT: "the presentation" },
          topicArea: "work",
        },
        {
          en: "Let's set a time for the parent-teacher meeting.",
          bn: "চলো অভিভাবক-শিক্ষক মিটিংয়ের জন্য একটা সময় ঠিক করি।",
          slotValues: { EVENT: "the parent-teacher meeting" },
          topicArea: "education",
        },
        {
          en: "Let's set a time for dinner together.",
          bn: "চলো একসাথে রাতের খাবারের জন্য একটা সময় ঠিক করি।",
          slotValues: { EVENT: "dinner together" },
          topicArea: "relationships",
        },
        {
          en: "Let's set a time for the follow-up appointment.",
          bn: "চলো ফলো-আপ অ্যাপয়েন্টমেন্টের জন্য একটা সময় ঠিক করি।",
          slotValues: { EVENT: "the follow-up appointment" },
          topicArea: "health",
        },
        {
          en: "Let's set a time for the shopping trip.",
          bn: "চলো কেনাকাটার জন্য একটা সময় ঠিক করি।",
          slotValues: { EVENT: "the shopping trip" },
          topicArea: "shopping",
        },
        {
          en: "Let's set a time for the team-building event.",
          bn: "চলো টিম-বিল্ডিং ইভেন্টের জন্য একটা সময় ঠিক করি।",
          slotValues: { EVENT: "the team-building event" },
          topicArea: "work",
        },
        {
          en: "Let's set a time for the barbecue.",
          bn: "চলো বারবিকিউয়ের জন্য একটা সময় ঠিক করি।",
          slotValues: { EVENT: "the barbecue" },
          topicArea: "food",
        },
      ],
      formality: "casual",
      difficulty: "beginner",
      usageNote:
        "An informal and collaborative way to propose scheduling something together.",
      usageNote_bn:
        "একসাথে কিছু সময় নির্ধারণের প্রস্তাব দেওয়ার একটি অনানুষ্ঠানিক ও সহযোগিতামূলক উপায়।",
      combinableWith: ["T2.3", "T2.4"],
      banglaStructureMap:
        "চলো (Let's) + [EVENT]-এর জন্য (Event + Postposition) + একটা সময় ঠিক করি (Object + Verb)",
    },
  ],
};
