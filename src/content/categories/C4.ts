import { PatternCategory } from "@/types/pattern";

export const categoryC4: PatternCategory = {
  id: "C4",
  slug: "future-actions",
  name: "What Will Happen (Future)",
  name_bn: "যা ঘটবে (ভবিষ্যৎ)",
  description:
    "Learn how to talk about future plans, intentions, and predictions using common future tense patterns.",
  description_bn:
    "সাধারণ ভবিষ্যৎ কালের প্যাটার্ন ব্যবহার করে ভবিষ্যৎ পরিকল্পনা, উদ্দেশ্য এবং পূর্বাভাস সম্পর্কে কথা বলতে শিখুন।",
  icon: "⏩",
  group: "C",
  groupName: "Actions & Time Patterns",
  groupName_bn: "কর্ম এবং সময়ের প্যাটার্ন",
  difficulty: "beginner",
  patterns: [
    {
      id: "C4.1",
      formula: "I will [ACTION]",
      formula_bn: "আমি [কাজ] করব",
      patternName: "Simple Future",
      patternName_bn: "সাধারণ ভবিষ্যৎ",
      slots: [
        {
          name: "ACTION",
          description:
            "A base verb or verb phrase for a future action or decision",
          description_bn:
            "ভবিষ্যৎ কাজ বা সিদ্ধান্তের জন্য একটি মূল ক্রিয়া বা ক্রিয়া পদবন্ধ",
          acceptedTypes: ["verb"],
          examples: ["help you", "call you later", "finish this"],
        },
      ],
      examples: [
        {
          en: "I will help you with your homework.",
          bn: "আমি তোমার বাড়ির কাজে সাহায্য করব।",
          slotValues: { ACTION: "help you with your homework" },
          topicArea: "education",
        },
        {
          en: "I will call you later.",
          bn: "আমি তোমাকে পরে ফোন করব।",
          slotValues: { ACTION: "call you later" },
          topicArea: "relationships",
        },
        {
          en: "I will finish this report by tomorrow.",
          bn: "আমি আগামীকালের মধ্যে এই রিপোর্ট শেষ করব।",
          slotValues: { ACTION: "finish this report by tomorrow" },
          topicArea: "work",
        },
        {
          en: "I will cook dinner tonight.",
          bn: "আমি আজ রাতে রাতের খাবার রান্না করব।",
          slotValues: { ACTION: "cook dinner tonight" },
          topicArea: "food",
        },
        {
          en: "I will see the doctor on Monday.",
          bn: "আমি সোমবারে ডাক্তার দেখাব।",
          slotValues: { ACTION: "see the doctor on Monday" },
          topicArea: "health",
        },
        {
          en: "I will buy a new phone next week.",
          bn: "আমি আগামী সপ্তাহে একটি নতুন ফোন কিনব।",
          slotValues: { ACTION: "buy a new phone next week" },
          topicArea: "shopping",
        },
        {
          en: "I will take a taxi to the airport.",
          bn: "আমি বিমানবন্দরে ট্যাক্সিতে যাব।",
          slotValues: { ACTION: "take a taxi to the airport" },
          topicArea: "travel",
        },
        {
          en: "I will clean the kitchen after dinner.",
          bn: "আমি রাতের খাবারের পর রান্নাঘর পরিষ্কার করব।",
          slotValues: { ACTION: "clean the kitchen after dinner" },
          topicArea: "daily_life",
        },
        {
          en: "I will send you the documents.",
          bn: "আমি তোমাকে কাগজপত্র পাঠাব।",
          slotValues: { ACTION: "send you the documents" },
          topicArea: "work",
        },
        {
          en: "I will try the new restaurant downtown.",
          bn: "আমি শহরের কেন্দ্রে নতুন রেস্তোরাঁটি চেষ্টা করব।",
          slotValues: { ACTION: "try the new restaurant downtown" },
          topicArea: "food",
        },
        {
          en: "I will visit you this weekend.",
          bn: "আমি এই সপ্তাহান্তে তোমার সাথে দেখা করব।",
          slotValues: { ACTION: "visit you this weekend" },
          topicArea: "relationships",
        },
        {
          en: "I will start exercising from tomorrow.",
          bn: "আমি আগামীকাল থেকে ব্যায়াম শুরু করব।",
          slotValues: { ACTION: "start exercising from tomorrow" },
          topicArea: "health",
        },
        {
          en: "I will return the book to the library.",
          bn: "আমি বইটি লাইব্রেরিতে ফেরত দেব।",
          slotValues: { ACTION: "return the book to the library" },
          topicArea: "education",
        },
        {
          en: "I will pay for the tickets.",
          bn: "আমি টিকিটের টাকা দেব।",
          slotValues: { ACTION: "pay for the tickets" },
          topicArea: "travel",
        },
        {
          en: "I will fix the leaking tap.",
          bn: "আমি পানি পড়া কলটি ঠিক করব।",
          slotValues: { ACTION: "fix the leaking tap" },
          topicArea: "daily_life",
        },
      ],
      formality: "casual",
      difficulty: "beginner",
      usageNote:
        "'Will' is used for spontaneous decisions, promises, offers, and predictions. It's often contracted to 'I'll' in speech.",
      usageNote_bn:
        "'Will' স্বতঃস্ফূর্ত সিদ্ধান্ত, প্রতিশ্রুতি, প্রস্তাব এবং পূর্বাভাসের জন্য ব্যবহৃত হয়। কথা বলার সময় এটি প্রায়ই 'I'll' হিসেবে সংক্ষিপ্ত হয়।",
      combinableWith: ["C4.2"],
      banglaStructureMap:
        "আমি (Subject) + [ACTION] (Verb) + করব (Future Aux)",
    },
    {
      id: "C4.2",
      formula: "I'm going to [ACTION]",
      formula_bn: "আমি [কাজ] করতে যাচ্ছি",
      patternName: "Planned Future",
      patternName_bn: "পরিকল্পিত ভবিষ্যৎ",
      slots: [
        {
          name: "ACTION",
          description:
            "A base verb or verb phrase for a planned future action",
          description_bn:
            "পরিকল্পিত ভবিষ্যৎ কাজের জন্য একটি মূল ক্রিয়া বা ক্রিয়া পদবন্ধ",
          acceptedTypes: ["verb"],
          examples: ["learn cooking", "apply for a job", "move to a new city"],
        },
      ],
      examples: [
        {
          en: "I'm going to learn cooking this year.",
          bn: "আমি এই বছর রান্না শিখতে যাচ্ছি।",
          slotValues: { ACTION: "learn cooking this year" },
          topicArea: "food",
        },
        {
          en: "I'm going to apply for a new job.",
          bn: "আমি একটি নতুন চাকরির জন্য আবেদন করতে যাচ্ছি।",
          slotValues: { ACTION: "apply for a new job" },
          topicArea: "work",
        },
        {
          en: "I'm going to move to a new city.",
          bn: "আমি একটি নতুন শহরে চলে যেতে যাচ্ছি।",
          slotValues: { ACTION: "move to a new city" },
          topicArea: "daily_life",
        },
        {
          en: "I'm going to study abroad next year.",
          bn: "আমি আগামী বছর বিদেশে পড়তে যাচ্ছি।",
          slotValues: { ACTION: "study abroad next year" },
          topicArea: "education",
        },
        {
          en: "I'm going to join a gym next month.",
          bn: "আমি আগামী মাসে জিমে যোগ দিতে যাচ্ছি।",
          slotValues: { ACTION: "join a gym next month" },
          topicArea: "health",
        },
        {
          en: "I'm going to visit my grandparents this weekend.",
          bn: "আমি এই সপ্তাহান্তে আমার দাদা-দাদিকে দেখতে যাচ্ছি।",
          slotValues: { ACTION: "visit my grandparents this weekend" },
          topicArea: "relationships",
        },
        {
          en: "I'm going to buy a laptop tomorrow.",
          bn: "আমি আগামীকাল একটি ল্যাপটপ কিনতে যাচ্ছি।",
          slotValues: { ACTION: "buy a laptop tomorrow" },
          topicArea: "shopping",
        },
        {
          en: "I'm going to take a vacation next month.",
          bn: "আমি আগামী মাসে ছুটি নিতে যাচ্ছি।",
          slotValues: { ACTION: "take a vacation next month" },
          topicArea: "travel",
        },
        {
          en: "I'm going to start a new project at work.",
          bn: "আমি কাজে একটি নতুন প্রজেক্ট শুরু করতে যাচ্ছি।",
          slotValues: { ACTION: "start a new project at work" },
          topicArea: "work",
        },
        {
          en: "I'm going to prepare biryani for the guests.",
          bn: "আমি অতিথিদের জন্য বিরিয়ানি তৈরি করতে যাচ্ছি।",
          slotValues: { ACTION: "prepare biryani for the guests" },
          topicArea: "food",
        },
        {
          en: "I'm going to read fifty books this year.",
          bn: "আমি এই বছর পঞ্চাশটি বই পড়তে যাচ্ছি।",
          slotValues: { ACTION: "read fifty books this year" },
          topicArea: "education",
        },
        {
          en: "I'm going to quit smoking.",
          bn: "আমি ধূমপান ছাড়তে যাচ্ছি।",
          slotValues: { ACTION: "quit smoking" },
          topicArea: "health",
        },
        {
          en: "I'm going to paint my bedroom walls.",
          bn: "আমি আমার শোবার ঘরের দেয়াল রং করতে যাচ্ছি।",
          slotValues: { ACTION: "paint my bedroom walls" },
          topicArea: "daily_life",
        },
        {
          en: "I'm going to surprise my wife on her birthday.",
          bn: "আমি আমার স্ত্রীকে তার জন্মদিনে সারপ্রাইজ দিতে যাচ্ছি।",
          slotValues: { ACTION: "surprise my wife on her birthday" },
          topicArea: "relationships",
        },
        {
          en: "I'm going to book a flight to Cox's Bazar.",
          bn: "আমি কক্সবাজারে ফ্লাইট বুক করতে যাচ্ছি।",
          slotValues: { ACTION: "book a flight to Cox's Bazar" },
          topicArea: "travel",
        },
      ],
      formality: "casual",
      difficulty: "beginner",
      usageNote:
        "'Going to' is used for plans and intentions you have already decided on. It implies prior thought, unlike 'will' which can be spontaneous.",
      usageNote_bn:
        "'Going to' ইতোমধ্যে নেওয়া পরিকল্পনা ও উদ্দেশ্যের জন্য ব্যবহৃত হয়। এটি পূর্বচিন্তা বোঝায়, 'will'-এর বিপরীতে যা স্বতঃস্ফূর্ত হতে পারে।",
      combinableWith: ["C4.1", "C4.3"],
      banglaStructureMap:
        "আমি (Subject) + [ACTION] (Verb) + করতে যাচ্ছি (Future Prog Aux)",
    },
    {
      id: "C4.3",
      formula: "I plan to [ACTION]",
      formula_bn: "আমি [কাজ] করার পরিকল্পনা করছি",
      patternName: "Stated Plan",
      patternName_bn: "বিবৃত পরিকল্পনা",
      slots: [
        {
          name: "ACTION",
          description:
            "A base verb or verb phrase for an action you are planning",
          description_bn:
            "আপনি যে কাজের পরিকল্পনা করছেন তার জন্য একটি মূল ক্রিয়া বা ক্রিয়া পদবন্ধ",
          acceptedTypes: ["verb"],
          examples: ["save money", "travel to Europe", "finish my degree"],
        },
      ],
      examples: [
        {
          en: "I plan to save money this year.",
          bn: "আমি এই বছর টাকা জমানোর পরিকল্পনা করছি।",
          slotValues: { ACTION: "save money this year" },
          topicArea: "daily_life",
        },
        {
          en: "I plan to travel to Europe next summer.",
          bn: "আমি আগামী গ্রীষ্মে ইউরোপ ভ্রমণের পরিকল্পনা করছি।",
          slotValues: { ACTION: "travel to Europe next summer" },
          topicArea: "travel",
        },
        {
          en: "I plan to finish my degree by next year.",
          bn: "আমি আগামী বছরের মধ্যে আমার ডিগ্রি শেষ করার পরিকল্পনা করছি।",
          slotValues: { ACTION: "finish my degree by next year" },
          topicArea: "education",
        },
        {
          en: "I plan to start my own business.",
          bn: "আমি নিজের ব্যবসা শুরু করার পরিকল্পনা করছি।",
          slotValues: { ACTION: "start my own business" },
          topicArea: "work",
        },
        {
          en: "I plan to eat healthier from now on.",
          bn: "আমি এখন থেকে স্বাস্থ্যকর খাওয়ার পরিকল্পনা করছি।",
          slotValues: { ACTION: "eat healthier from now on" },
          topicArea: "health",
        },
        {
          en: "I plan to propose to my girlfriend.",
          bn: "আমি আমার বান্ধবীকে প্রস্তাব দেওয়ার পরিকল্পনা করছি।",
          slotValues: { ACTION: "propose to my girlfriend" },
          topicArea: "relationships",
        },
        {
          en: "I plan to renovate the kitchen.",
          bn: "আমি রান্নাঘর সংস্কার করার পরিকল্পনা করছি।",
          slotValues: { ACTION: "renovate the kitchen" },
          topicArea: "daily_life",
        },
        {
          en: "I plan to buy a house next year.",
          bn: "আমি আগামী বছর একটি বাড়ি কেনার পরিকল্পনা করছি।",
          slotValues: { ACTION: "buy a house next year" },
          topicArea: "shopping",
        },
        {
          en: "I plan to learn a new language.",
          bn: "আমি একটি নতুন ভাষা শেখার পরিকল্পনা করছি।",
          slotValues: { ACTION: "learn a new language" },
          topicArea: "education",
        },
        {
          en: "I plan to switch to a vegetarian diet.",
          bn: "আমি নিরামিষ খাবারে যাওয়ার পরিকল্পনা করছি।",
          slotValues: { ACTION: "switch to a vegetarian diet" },
          topicArea: "food",
        },
        {
          en: "I plan to run a marathon next spring.",
          bn: "আমি আগামী বসন্তে একটি ম্যারাথনে দৌড়ানোর পরিকল্পনা করছি।",
          slotValues: { ACTION: "run a marathon next spring" },
          topicArea: "health",
        },
        {
          en: "I plan to invite everyone to the party.",
          bn: "আমি সবাইকে পার্টিতে দাওয়াত দেওয়ার পরিকল্পনা করছি।",
          slotValues: { ACTION: "invite everyone to the party" },
          topicArea: "relationships",
        },
        {
          en: "I plan to ask for a raise next quarter.",
          bn: "আমি আগামী ত্রৈমাসিকে বেতন বৃদ্ধির কথা বলার পরিকল্পনা করছি।",
          slotValues: { ACTION: "ask for a raise next quarter" },
          topicArea: "work",
        },
        {
          en: "I plan to explore the countryside during my trip.",
          bn: "আমি ভ্রমণের সময় গ্রামাঞ্চল ঘুরে দেখার পরিকল্পনা করছি।",
          slotValues: { ACTION: "explore the countryside during my trip" },
          topicArea: "travel",
        },
        {
          en: "I plan to open a restaurant someday.",
          bn: "আমি কোনোদিন একটি রেস্তোরাঁ খোলার পরিকল্পনা করছি।",
          slotValues: { ACTION: "open a restaurant someday" },
          topicArea: "food",
        },
      ],
      formality: "polite",
      difficulty: "beginner",
      usageNote:
        "'I plan to' is slightly more formal than 'I'm going to' and emphasizes deliberate planning. It sounds professional and thoughtful.",
      usageNote_bn:
        "'I plan to' 'I'm going to'-এর চেয়ে সামান্য বেশি আনুষ্ঠানিক এবং ইচ্ছাকৃত পরিকল্পনার উপর জোর দেয়। এটি পেশাদার এবং চিন্তাশীল শোনায়।",
      combinableWith: ["C4.2"],
      banglaStructureMap:
        "আমি (Subject) + [ACTION] (Verb) + করার পরিকল্পনা করছি (Plan Aux)",
    },
    {
      id: "C4.4",
      formula: "I'm thinking of [DOING]",
      formula_bn: "আমি [কাজ] করার কথা ভাবছি",
      patternName: "Considering Future Action",
      patternName_bn: "ভবিষ্যৎ কাজ বিবেচনা",
      slots: [
        {
          name: "DOING",
          description:
            "A verb in -ing form for an action you are considering",
          description_bn:
            "একটি -ing রূপের ক্রিয়া যে কাজটি আপনি বিবেচনা করছেন",
          acceptedTypes: ["gerund"],
          examples: ["changing", "buying", "starting"],
        },
      ],
      examples: [
        {
          en: "I'm thinking of changing my career.",
          bn: "আমি আমার ক্যারিয়ার বদলানোর কথা ভাবছি।",
          slotValues: { DOING: "changing my career" },
          topicArea: "work",
        },
        {
          en: "I'm thinking of buying a new car.",
          bn: "আমি একটি নতুন গাড়ি কেনার কথা ভাবছি।",
          slotValues: { DOING: "buying a new car" },
          topicArea: "shopping",
        },
        {
          en: "I'm thinking of starting a blog.",
          bn: "আমি একটি ব্লগ শুরু করার কথা ভাবছি।",
          slotValues: { DOING: "starting a blog" },
          topicArea: "daily_life",
        },
        {
          en: "I'm thinking of taking a cooking class.",
          bn: "আমি একটি রান্নার ক্লাস নেওয়ার কথা ভাবছি।",
          slotValues: { DOING: "taking a cooking class" },
          topicArea: "food",
        },
        {
          en: "I'm thinking of going back to school.",
          bn: "আমি আবার স্কুলে ফিরে যাওয়ার কথা ভাবছি।",
          slotValues: { DOING: "going back to school" },
          topicArea: "education",
        },
        {
          en: "I'm thinking of trying yoga.",
          bn: "আমি যোগব্যায়াম করার কথা ভাবছি।",
          slotValues: { DOING: "trying yoga" },
          topicArea: "health",
        },
        {
          en: "I'm thinking of visiting Turkey this year.",
          bn: "আমি এই বছর তুরস্ক যাওয়ার কথা ভাবছি।",
          slotValues: { DOING: "visiting Turkey this year" },
          topicArea: "travel",
        },
        {
          en: "I'm thinking of inviting my old classmates.",
          bn: "আমি আমার পুরনো সহপাঠীদের দাওয়াত দেওয়ার কথা ভাবছি।",
          slotValues: { DOING: "inviting my old classmates" },
          topicArea: "relationships",
        },
        {
          en: "I'm thinking of working from home more often.",
          bn: "আমি আরও বেশি বাসা থেকে কাজ করার কথা ভাবছি।",
          slotValues: { DOING: "working from home more often" },
          topicArea: "work",
        },
        {
          en: "I'm thinking of getting a pet.",
          bn: "আমি একটি পোষা প্রাণী নেওয়ার কথা ভাবছি।",
          slotValues: { DOING: "getting a pet" },
          topicArea: "daily_life",
        },
        {
          en: "I'm thinking of selling my old laptop.",
          bn: "আমি আমার পুরনো ল্যাপটপ বিক্রি করার কথা ভাবছি।",
          slotValues: { DOING: "selling my old laptop" },
          topicArea: "shopping",
        },
        {
          en: "I'm thinking of learning to play guitar.",
          bn: "আমি গিটার বাজানো শেখার কথা ভাবছি।",
          slotValues: { DOING: "learning to play guitar" },
          topicArea: "education",
        },
        {
          en: "I'm thinking of going on a diet.",
          bn: "আমি ডায়েটে যাওয়ার কথা ভাবছি।",
          slotValues: { DOING: "going on a diet" },
          topicArea: "health",
        },
        {
          en: "I'm thinking of hosting a dinner party.",
          bn: "আমি একটি ডিনার পার্টি দেওয়ার কথা ভাবছি।",
          slotValues: { DOING: "hosting a dinner party" },
          topicArea: "food",
        },
        {
          en: "I'm thinking of moving closer to my parents.",
          bn: "আমি আমার বাবা-মায়ের কাছে চলে যাওয়ার কথা ভাবছি।",
          slotValues: { DOING: "moving closer to my parents" },
          topicArea: "relationships",
        },
      ],
      formality: "casual",
      difficulty: "beginner",
      usageNote:
        "'Thinking of' + gerund (-ing) expresses a possibility you are considering. It's less certain than 'going to' or 'plan to'. You can also say 'thinking about'.",
      usageNote_bn:
        "'Thinking of' + gerund (-ing) আপনি যে সম্ভাবনা বিবেচনা করছেন তা প্রকাশ করে। এটি 'going to' বা 'plan to'-এর চেয়ে কম নিশ্চিত। আপনি 'thinking about'-ও বলতে পারেন।",
      combinableWith: ["C4.2", "C4.5"],
      banglaStructureMap:
        "আমি (Subject) + [DOING] (Verb) + করার কথা ভাবছি (Consider Aux)",
    },
    {
      id: "C4.5",
      formula: "I'll probably [ACTION]",
      formula_bn: "আমি সম্ভবত [কাজ] করব",
      patternName: "Likely Future Action",
      patternName_bn: "সম্ভাব্য ভবিষ্যৎ কাজ",
      slots: [
        {
          name: "ACTION",
          description:
            "A base verb or verb phrase for a likely future action",
          description_bn:
            "সম্ভাব্য ভবিষ্যৎ কাজের জন্য একটি মূল ক্রিয়া বা ক্রিয়া পদবন্ধ",
          acceptedTypes: ["verb"],
          examples: ["stay home", "order food", "take a nap"],
        },
      ],
      examples: [
        {
          en: "I'll probably stay home tonight.",
          bn: "আমি সম্ভবত আজ রাতে বাসায় থাকব।",
          slotValues: { ACTION: "stay home tonight" },
          topicArea: "daily_life",
        },
        {
          en: "I'll probably order food for dinner.",
          bn: "আমি সম্ভবত রাতের খাবারের জন্য খাবার অর্ডার করব।",
          slotValues: { ACTION: "order food for dinner" },
          topicArea: "food",
        },
        {
          en: "I'll probably take a nap after lunch.",
          bn: "আমি সম্ভবত দুপুরের খাবারের পর একটু ঘুমাব।",
          slotValues: { ACTION: "take a nap after lunch" },
          topicArea: "health",
        },
        {
          en: "I'll probably work late today.",
          bn: "আমি সম্ভবত আজ দেরি করে কাজ করব।",
          slotValues: { ACTION: "work late today" },
          topicArea: "work",
        },
        {
          en: "I'll probably take the earlier bus.",
          bn: "আমি সম্ভবত আগের বাসটি ধরব।",
          slotValues: { ACTION: "take the earlier bus" },
          topicArea: "travel",
        },
        {
          en: "I'll probably study at the library tomorrow.",
          bn: "আমি সম্ভবত আগামীকাল লাইব্রেরিতে পড়ব।",
          slotValues: { ACTION: "study at the library tomorrow" },
          topicArea: "education",
        },
        {
          en: "I'll probably call my sister later.",
          bn: "আমি সম্ভবত পরে আমার বোনকে ফোন করব।",
          slotValues: { ACTION: "call my sister later" },
          topicArea: "relationships",
        },
        {
          en: "I'll probably buy it if it's on sale.",
          bn: "আমি সম্ভবত সেটা কিনব যদি সেল থাকে।",
          slotValues: { ACTION: "buy it if it's on sale" },
          topicArea: "shopping",
        },
        {
          en: "I'll probably skip the gym today.",
          bn: "আমি সম্ভবত আজ জিম বাদ দেব।",
          slotValues: { ACTION: "skip the gym today" },
          topicArea: "health",
        },
        {
          en: "I'll probably finish this chapter by tonight.",
          bn: "আমি সম্ভবত আজ রাতের মধ্যে এই অধ্যায়টি শেষ করব।",
          slotValues: { ACTION: "finish this chapter by tonight" },
          topicArea: "education",
        },
        {
          en: "I'll probably eat out with colleagues.",
          bn: "আমি সম্ভবত সহকর্মীদের সাথে বাইরে খাব।",
          slotValues: { ACTION: "eat out with colleagues" },
          topicArea: "work",
        },
        {
          en: "I'll probably go for a walk if the weather is nice.",
          bn: "আমি সম্ভবত হাঁটতে যাব যদি আবহাওয়া ভালো থাকে।",
          slotValues: { ACTION: "go for a walk if the weather is nice" },
          topicArea: "daily_life",
        },
        {
          en: "I'll probably cook something simple tonight.",
          bn: "আমি সম্ভবত আজ রাতে সাধারণ কিছু রান্না করব।",
          slotValues: { ACTION: "cook something simple tonight" },
          topicArea: "food",
        },
        {
          en: "I'll probably take the train instead of flying.",
          bn: "আমি সম্ভবত বিমানের বদলে ট্রেনে যাব।",
          slotValues: { ACTION: "take the train instead of flying" },
          topicArea: "travel",
        },
        {
          en: "I'll probably meet my old friends this weekend.",
          bn: "আমি সম্ভবত এই সপ্তাহান্তে আমার পুরনো বন্ধুদের সাথে দেখা করব।",
          slotValues: { ACTION: "meet my old friends this weekend" },
          topicArea: "relationships",
        },
      ],
      formality: "casual",
      difficulty: "beginner",
      usageNote:
        "'Probably' adds a sense of likelihood without full certainty. It's placed between 'will' and the main verb. It softens the statement.",
      usageNote_bn:
        "'Probably' পূর্ণ নিশ্চয়তা ছাড়াই সম্ভাবনার অনুভূতি যোগ করে। এটি 'will' এবং মূল ক্রিয়ার মধ্যে বসে। এটি বক্তব্যকে নরম করে।",
      combinableWith: ["C4.1", "C4.4"],
      banglaStructureMap:
        "আমি (Subject) + সম্ভবত (Adverb) + [ACTION] (Verb) + করব (Future Aux)",
    },
  ],
};
