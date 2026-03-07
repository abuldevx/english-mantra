import { PatternCategory } from "@/types/pattern";

export const categoryB12: PatternCategory = {
  id: "B12",
  slug: "describing-processes",
  name: "Describing Processes",
  name_bn: "প্রক্রিয়া বর্ণনা করা",
  description:
    "Learn how to describe step-by-step processes, instructions, and how things work.",
  description_bn:
    "ধাপে ধাপে প্রক্রিয়া, নির্দেশনা এবং জিনিস কীভাবে কাজ করে তা বর্ণনা করতে শিখুন।",
  icon: "⚙️",
  group: "B",
  groupName: "Describing People, Things & Situations",
  groupName_bn: "মানুষ, জিনিস এবং পরিস্থিতি বর্ণনা",
  difficulty: "intermediate",
  patterns: [
    {
      id: "B12.1",
      formula: "First, you [ACTION]. Then, you [ACTION]",
      formula_bn: "প্রথমে, আপনি [কাজ]। তারপর, আপনি [কাজ]",
      patternName: "Sequential Steps",
      patternName_bn: "ধারাবাহিক ধাপ",
      slots: [
        {
          name: "ACTION",
          description: "The first step in the process",
          description_bn: "প্রক্রিয়ার প্রথম ধাপ",
          acceptedTypes: ["verb_phrase"],
          examples: ["wash your hands", "turn on the computer", "read the instructions"],
        },
        {
          name: "ACTION",
          description: "The next step in the process",
          description_bn: "প্রক্রিয়ার পরবর্তী ধাপ",
          acceptedTypes: ["verb_phrase"],
          examples: ["dry them", "open the file", "follow the steps"],
        },
      ],
      examples: [
        {
          en: "First, you wash your hands. Then, you dry them with a towel.",
          bn: "প্রথমে, আপনি হাত ধুয়ে নিন। তারপর, তোয়ালে দিয়ে মুছুন।",
          slotValues: {
            ACTION: "wash your hands",
            ACTION2: "dry them with a towel",
          },
          topicArea: "health",
        },
        {
          en: "First, you boil the water. Then, you add the tea leaves.",
          bn: "প্রথমে, পানি ফুটান। তারপর, চা পাতা দিন।",
          slotValues: {
            ACTION: "boil the water",
            ACTION2: "add the tea leaves",
          },
          topicArea: "food",
        },
        {
          en: "First, you turn on the computer. Then, you open the program.",
          bn: "প্রথমে, কম্পিউটার চালু করুন। তারপর, প্রোগ্রামটি খুলুন।",
          slotValues: {
            ACTION: "turn on the computer",
            ACTION2: "open the program",
          },
          topicArea: "work",
        },
        {
          en: "First, you read the question carefully. Then, you write your answer.",
          bn: "প্রথমে, প্রশ্নটি মনোযোগ দিয়ে পড়ুন। তারপর, উত্তর লিখুন।",
          slotValues: {
            ACTION: "read the question carefully",
            ACTION2: "write your answer",
          },
          topicArea: "education",
        },
        {
          en: "First, you pack your bags. Then, you check your passport.",
          bn: "প্রথমে, ব্যাগ গোছান। তারপর, পাসপোর্ট চেক করুন।",
          slotValues: {
            ACTION: "pack your bags",
            ACTION2: "check your passport",
          },
          topicArea: "travel",
        },
        {
          en: "First, you check the price. Then, you pay at the counter.",
          bn: "প্রথমে, দাম দেখুন। তারপর, কাউন্টারে টাকা দিন।",
          slotValues: {
            ACTION: "check the price",
            ACTION2: "pay at the counter",
          },
          topicArea: "shopping",
        },
        {
          en: "First, you wake up early. Then, you brush your teeth.",
          bn: "প্রথমে, তাড়াতাড়ি ওঠুন। তারপর, দাঁত মাজুন।",
          slotValues: {
            ACTION: "wake up early",
            ACTION2: "brush your teeth",
          },
          topicArea: "daily_life",
        },
        {
          en: "First, you say hello. Then, you introduce yourself.",
          bn: "প্রথমে, হ্যালো বলুন। তারপর, নিজের পরিচয় দিন।",
          slotValues: {
            ACTION: "say hello",
            ACTION2: "introduce yourself",
          },
          topicArea: "relationships",
        },
        {
          en: "First, you preheat the oven. Then, you place the cake inside.",
          bn: "প্রথমে, ওভেন গরম করুন। তারপর, কেক ভিতরে রাখুন।",
          slotValues: {
            ACTION: "preheat the oven",
            ACTION2: "place the cake inside",
          },
          topicArea: "food",
        },
        {
          en: "First, you fill in the form. Then, you submit it at the counter.",
          bn: "প্রথমে, ফর্মটি পূরণ করুন। তারপর, কাউন্টারে জমা দিন।",
          slotValues: {
            ACTION: "fill in the form",
            ACTION2: "submit it at the counter",
          },
          topicArea: "work",
        },
        {
          en: "First, you warm up your body. Then, you start exercising.",
          bn: "প্রথমে, শরীর ওয়ার্ম আপ করুন। তারপর, ব্যায়াম শুরু করুন।",
          slotValues: {
            ACTION: "warm up your body",
            ACTION2: "start exercising",
          },
          topicArea: "health",
        },
        {
          en: "First, you find a quiet place. Then, you open your book.",
          bn: "প্রথমে, একটি শান্ত জায়গা খুঁজুন। তারপর, বই খুলুন।",
          slotValues: {
            ACTION: "find a quiet place",
            ACTION2: "open your book",
          },
          topicArea: "education",
        },
        {
          en: "First, you book the ticket online. Then, you print the confirmation.",
          bn: "প্রথমে, অনলাইনে টিকেট বুক করুন। তারপর, কনফার্মেশন প্রিন্ট করুন।",
          slotValues: {
            ACTION: "book the ticket online",
            ACTION2: "print the confirmation",
          },
          topicArea: "travel",
        },
        {
          en: "First, you try on the shoes. Then, you decide if they fit.",
          bn: "প্রথমে, জুতা পরে দেখুন। তারপর, ঠিক হয়েছে কি না সিদ্ধান্ত নিন।",
          slotValues: {
            ACTION: "try on the shoes",
            ACTION2: "decide if they fit",
          },
          topicArea: "shopping",
        },
        {
          en: "First, you greet your guests. Then, you offer them tea.",
          bn: "প্রথমে, অতিথিদের অভ্যর্থনা করুন। তারপর, চা দিন।",
          slotValues: {
            ACTION: "greet your guests",
            ACTION2: "offer them tea",
          },
          topicArea: "relationships",
        },
      ],
      formality: "polite",
      difficulty: "intermediate",
      usageNote:
        "'First... Then...' is the simplest way to describe a sequence. You can extend it with 'After that...', 'Next...', 'Finally...'.",
      usageNote_bn:
        "'First... Then...' ধারাবাহিকতা বর্ণনার সবচেয়ে সহজ উপায়। 'After that...', 'Next...', 'Finally...' দিয়ে বাড়ানো যায়।",
      combinableWith: ["B12.2", "B12.3"],
      banglaStructureMap:
        "প্রথমে [ACTION] (ধাপ ১) + তারপর [ACTION] (ধাপ ২)",
    },
    {
      id: "B12.2",
      formula: "[THING] works by [DOING]",
      formula_bn: "[জিনিস] [কাজ] করে কাজ করে",
      patternName: "Explaining How Something Works",
      patternName_bn: "কিছু কীভাবে কাজ করে ব্যাখ্যা",
      slots: [
        {
          name: "THING",
          description: "The device, system, or process",
          description_bn: "যন্ত্র, সিস্টেম বা প্রক্রিয়া",
          acceptedTypes: ["noun", "noun_phrase"],
          examples: ["A fan", "Solar panels", "This app"],
        },
        {
          name: "DOING",
          description: "A gerund (-ing) explaining the mechanism",
          description_bn: "একটি gerund (-ing) যা প্রক্রিয়া ব্যাখ্যা করে",
          acceptedTypes: ["gerund"],
          examples: [
            "spinning blades",
            "converting sunlight",
            "tracking your location",
          ],
        },
      ],
      examples: [
        {
          en: "A fan works by spinning its blades to push air.",
          bn: "পাখা তার ব্লেড ঘুরিয়ে বাতাস ঠেলে কাজ করে।",
          slotValues: {
            THING: "A fan",
            DOING: "spinning its blades to push air",
          },
          topicArea: "daily_life",
        },
        {
          en: "Solar panels work by converting sunlight into electricity.",
          bn: "সোলার প্যানেল সূর্যের আলোকে বিদ্যুতে রূপান্তর করে কাজ করে।",
          slotValues: {
            THING: "Solar panels",
            DOING: "converting sunlight into electricity",
          },
          topicArea: "education",
        },
        {
          en: "This app works by tracking your daily steps.",
          bn: "এই অ্যাপটি তোমার দৈনিক পদক্ষেপ ট্র্যাক করে কাজ করে।",
          slotValues: {
            THING: "This app",
            DOING: "tracking your daily steps",
          },
          topicArea: "health",
        },
        {
          en: "A thermostat works by sensing the room temperature.",
          bn: "থার্মোস্ট্যাট রুমের তাপমাত্রা অনুভব করে কাজ করে।",
          slotValues: {
            THING: "A thermostat",
            DOING: "sensing the room temperature",
          },
          topicArea: "daily_life",
        },
        {
          en: "Email works by sending digital messages through the internet.",
          bn: "ইমেইল ইন্টারনেটের মাধ্যমে ডিজিটাল বার্তা পাঠিয়ে কাজ করে।",
          slotValues: {
            THING: "Email",
            DOING: "sending digital messages through the internet",
          },
          topicArea: "work",
        },
        {
          en: "A rice cooker works by heating water to steam the rice.",
          bn: "রাইস কুকার পানি গরম করে ভাত সেদ্ধ করে কাজ করে।",
          slotValues: {
            THING: "A rice cooker",
            DOING: "heating water to steam the rice",
          },
          topicArea: "food",
        },
        {
          en: "GPS works by using satellites to find your location.",
          bn: "জিপিএস স্যাটেলাইট ব্যবহার করে তোমার অবস্থান খুঁজে কাজ করে।",
          slotValues: {
            THING: "GPS",
            DOING: "using satellites to find your location",
          },
          topicArea: "travel",
        },
        {
          en: "A barcode scanner works by reading black and white lines.",
          bn: "বারকোড স্ক্যানার কালো ও সাদা লাইন পড়ে কাজ করে।",
          slotValues: {
            THING: "A barcode scanner",
            DOING: "reading black and white lines",
          },
          topicArea: "shopping",
        },
        {
          en: "A vaccine works by training the immune system to fight disease.",
          bn: "টিকা রোগ প্রতিরোধ ব্যবস্থাকে রোগের বিরুদ্ধে লড়াই করতে প্রশিক্ষিত করে কাজ করে।",
          slotValues: {
            THING: "A vaccine",
            DOING: "training the immune system to fight disease",
          },
          topicArea: "health",
        },
        {
          en: "A search engine works by indexing millions of web pages.",
          bn: "সার্চ ইঞ্জিন লক্ষ লক্ষ ওয়েব পেজ ইনডেক্স করে কাজ করে।",
          slotValues: {
            THING: "A search engine",
            DOING: "indexing millions of web pages",
          },
          topicArea: "education",
        },
        {
          en: "A vending machine works by accepting coins and dispensing items.",
          bn: "ভেন্ডিং মেশিন কয়েন নিয়ে এবং আইটেম দিয়ে কাজ করে।",
          slotValues: {
            THING: "A vending machine",
            DOING: "accepting coins and dispensing items",
          },
          topicArea: "shopping",
        },
        {
          en: "Air conditioning works by cooling warm air and circulating it.",
          bn: "এয়ার কন্ডিশন গরম বাতাস ঠান্ডা করে এবং সঞ্চালন করে কাজ করে।",
          slotValues: {
            THING: "Air conditioning",
            DOING: "cooling warm air and circulating it",
          },
          topicArea: "daily_life",
        },
        {
          en: "Online banking works by connecting your account to the internet.",
          bn: "অনলাইন ব্যাংকিং তোমার অ্যাকাউন্ট ইন্টারনেটে সংযুক্ত করে কাজ করে।",
          slotValues: {
            THING: "Online banking",
            DOING: "connecting your account to the internet",
          },
          topicArea: "work",
        },
        {
          en: "A pressure cooker works by trapping steam to cook food faster.",
          bn: "প্রেশার কুকার বাষ্প আটকে দ্রুত খাবার রান্না করে কাজ করে।",
          slotValues: {
            THING: "A pressure cooker",
            DOING: "trapping steam to cook food faster",
          },
          topicArea: "food",
        },
        {
          en: "A compass works by detecting the Earth's magnetic field.",
          bn: "কম্পাস পৃথিবীর চৌম্বক ক্ষেত্র শনাক্ত করে কাজ করে।",
          slotValues: {
            THING: "A compass",
            DOING: "detecting the Earth's magnetic field",
          },
          topicArea: "travel",
        },
      ],
      formality: "polite",
      difficulty: "intermediate",
      usageNote:
        "'Works by + gerund' explains the mechanism behind something. It's very useful for describing technology and machines.",
      usageNote_bn:
        "'Works by + gerund' কিছুর পিছনের প্রক্রিয়া ব্যাখ্যা করে। প্রযুক্তি ও যন্ত্র বর্ণনায় এটি খুব দরকারী।",
      combinableWith: ["B12.1", "B12.3"],
      banglaStructureMap:
        "[THING] (কর্তা) + [DOING] (gerund) + করে কাজ করে (ক্রিয়া)",
    },
    {
      id: "B12.3",
      formula: "To [ACTION], you need to [ACTION]",
      formula_bn: "[কাজ] করতে, তোমাকে [কাজ] করতে হবে",
      patternName: "Requirement for a Process",
      patternName_bn: "প্রক্রিয়ার জন্য প্রয়োজনীয়তা",
      slots: [
        {
          name: "ACTION",
          description: "The goal or desired outcome",
          description_bn: "লক্ষ্য বা কাঙ্ক্ষিত ফলাফল",
          acceptedTypes: ["verb_phrase"],
          examples: ["make tea", "open an account", "lose weight"],
        },
        {
          name: "ACTION",
          description: "The necessary step or requirement",
          description_bn: "প্রয়োজনীয় ধাপ বা প্রয়োজনীয়তা",
          acceptedTypes: ["verb_phrase"],
          examples: ["boil water first", "bring your ID", "exercise regularly"],
        },
      ],
      examples: [
        {
          en: "To make tea, you need to boil water first.",
          bn: "চা বানাতে, প্রথমে পানি ফুটাতে হবে।",
          slotValues: {
            ACTION: "make tea",
            ACTION2: "boil water first",
          },
          topicArea: "food",
        },
        {
          en: "To open a bank account, you need to bring your ID.",
          bn: "ব্যাংক অ্যাকাউন্ট খুলতে, পরিচয়পত্র আনতে হবে।",
          slotValues: {
            ACTION: "open a bank account",
            ACTION2: "bring your ID",
          },
          topicArea: "daily_life",
        },
        {
          en: "To lose weight, you need to exercise regularly.",
          bn: "ওজন কমাতে, নিয়মিত ব্যায়াম করতে হবে।",
          slotValues: {
            ACTION: "lose weight",
            ACTION2: "exercise regularly",
          },
          topicArea: "health",
        },
        {
          en: "To pass the exam, you need to study every day.",
          bn: "পরীক্ষায় পাস করতে, প্রতিদিন পড়তে হবে।",
          slotValues: {
            ACTION: "pass the exam",
            ACTION2: "study every day",
          },
          topicArea: "education",
        },
        {
          en: "To get a promotion, you need to show initiative.",
          bn: "পদোন্নতি পেতে, উদ্যোগ দেখাতে হবে।",
          slotValues: {
            ACTION: "get a promotion",
            ACTION2: "show initiative",
          },
          topicArea: "work",
        },
        {
          en: "To travel abroad, you need to get a passport.",
          bn: "বিদেশ ভ্রমণ করতে, পাসপোর্ট করাতে হবে।",
          slotValues: {
            ACTION: "travel abroad",
            ACTION2: "get a passport",
          },
          topicArea: "travel",
        },
        {
          en: "To get a refund, you need to keep the receipt.",
          bn: "রিফান্ড পেতে, রসিদ রাখতে হবে।",
          slotValues: {
            ACTION: "get a refund",
            ACTION2: "keep the receipt",
          },
          topicArea: "shopping",
        },
        {
          en: "To build trust, you need to be honest.",
          bn: "বিশ্বাস গড়ে তুলতে, সৎ হতে হবে।",
          slotValues: {
            ACTION: "build trust",
            ACTION2: "be honest",
          },
          topicArea: "relationships",
        },
        {
          en: "To cook biryani, you need to marinate the chicken first.",
          bn: "বিরিয়ানি রান্না করতে, প্রথমে মুরগি মেরিনেট করতে হবে।",
          slotValues: {
            ACTION: "cook biryani",
            ACTION2: "marinate the chicken first",
          },
          topicArea: "food",
        },
        {
          en: "To stay healthy, you need to drink plenty of water.",
          bn: "সুস্থ থাকতে, প্রচুর পানি পান করতে হবে।",
          slotValues: {
            ACTION: "stay healthy",
            ACTION2: "drink plenty of water",
          },
          topicArea: "health",
        },
        {
          en: "To learn a language, you need to practice speaking.",
          bn: "ভাষা শিখতে, কথা বলার অনুশীলন করতে হবে।",
          slotValues: {
            ACTION: "learn a language",
            ACTION2: "practice speaking",
          },
          topicArea: "education",
        },
        {
          en: "To finish the project, you need to work overtime.",
          bn: "প্রকল্প শেষ করতে, ওভারটাইম কাজ করতে হবে।",
          slotValues: {
            ACTION: "finish the project",
            ACTION2: "work overtime",
          },
          topicArea: "work",
        },
        {
          en: "To book a flight, you need to visit the website.",
          bn: "ফ্লাইট বুক করতে, ওয়েবসাইটে যেতে হবে।",
          slotValues: {
            ACTION: "book a flight",
            ACTION2: "visit the website",
          },
          topicArea: "travel",
        },
        {
          en: "To get a good deal, you need to compare prices.",
          bn: "ভালো দর পেতে, দাম তুলনা করতে হবে।",
          slotValues: {
            ACTION: "get a good deal",
            ACTION2: "compare prices",
          },
          topicArea: "shopping",
        },
        {
          en: "To wake up early, you need to go to bed on time.",
          bn: "তাড়াতাড়ি উঠতে, সময়মতো ঘুমাতে যেতে হবে।",
          slotValues: {
            ACTION: "wake up early",
            ACTION2: "go to bed on time",
          },
          topicArea: "daily_life",
        },
      ],
      formality: "polite",
      difficulty: "intermediate",
      usageNote:
        "'To [goal], you need to [requirement]' connects a goal with its necessary step. Very useful for giving instructions and advice.",
      usageNote_bn:
        "'To [goal], you need to [requirement]' একটি লক্ষ্যের সাথে প্রয়োজনীয় ধাপ সংযুক্ত করে। নির্দেশনা ও পরামর্শ দিতে খুব দরকারী।",
      combinableWith: ["B12.1", "B12.4"],
      banglaStructureMap:
        "[ACTION] (লক্ষ্য) + করতে + তোমাকে [ACTION] (প্রয়োজনীয়তা) + করতে হবে",
    },
    {
      id: "B12.4",
      formula: "After [DOING], you [ACTION]",
      formula_bn: "[কাজ] করার পর, আপনি [কাজ]",
      patternName: "Step After Completion",
      patternName_bn: "সমাপ্তির পরের ধাপ",
      slots: [
        {
          name: "DOING",
          description: "The first action (gerund form)",
          description_bn: "প্রথম কাজ (gerund রূপ)",
          acceptedTypes: ["gerund"],
          examples: ["washing", "finishing", "eating"],
        },
        {
          name: "ACTION",
          description: "The action that follows",
          description_bn: "পরবর্তী কাজ",
          acceptedTypes: ["verb_phrase"],
          examples: ["dry your hands", "review your work", "clear the table"],
        },
      ],
      examples: [
        {
          en: "After washing the vegetables, you cut them into pieces.",
          bn: "সবজি ধোয়ার পর, টুকরো করে কাটুন।",
          slotValues: {
            DOING: "washing the vegetables",
            ACTION: "cut them into pieces",
          },
          topicArea: "food",
        },
        {
          en: "After finishing the assignment, you submit it online.",
          bn: "অ্যাসাইনমেন্ট শেষ করার পর, অনলাইনে জমা দিন।",
          slotValues: {
            DOING: "finishing the assignment",
            ACTION: "submit it online",
          },
          topicArea: "education",
        },
        {
          en: "After eating dinner, you brush your teeth.",
          bn: "রাতের খাবার খাওয়ার পর, দাঁত মাজুন।",
          slotValues: {
            DOING: "eating dinner",
            ACTION: "brush your teeth",
          },
          topicArea: "daily_life",
        },
        {
          en: "After applying the cream, you wait for fifteen minutes.",
          bn: "ক্রিম লাগানোর পর, পনেরো মিনিট অপেক্ষা করুন।",
          slotValues: {
            DOING: "applying the cream",
            ACTION: "wait for fifteen minutes",
          },
          topicArea: "health",
        },
        {
          en: "After writing the report, you send it to your manager.",
          bn: "রিপোর্ট লেখার পর, ম্যানেজারকে পাঠান।",
          slotValues: {
            DOING: "writing the report",
            ACTION: "send it to your manager",
          },
          topicArea: "work",
        },
        {
          en: "After checking in, you go to the departure gate.",
          bn: "চেক ইন করার পর, ডিপার্চার গেটে যান।",
          slotValues: {
            DOING: "checking in",
            ACTION: "go to the departure gate",
          },
          topicArea: "travel",
        },
        {
          en: "After trying on the clothes, you decide which one to buy.",
          bn: "কাপড় পরে দেখার পর, কোনটা কিনবেন ঠিক করুন।",
          slotValues: {
            DOING: "trying on the clothes",
            ACTION: "decide which one to buy",
          },
          topicArea: "shopping",
        },
        {
          en: "After greeting your guests, you offer them snacks.",
          bn: "অতিথিদের অভ্যর্থনার পর, তাদের নাস্তা দিন।",
          slotValues: {
            DOING: "greeting your guests",
            ACTION: "offer them snacks",
          },
          topicArea: "relationships",
        },
        {
          en: "After mixing the ingredients, you pour the batter into the pan.",
          bn: "উপকরণ মেশানোর পর, মিশ্রণটি প্যানে ঢালুন।",
          slotValues: {
            DOING: "mixing the ingredients",
            ACTION: "pour the batter into the pan",
          },
          topicArea: "food",
        },
        {
          en: "After reading the chapter, you answer the questions at the end.",
          bn: "অধ্যায় পড়ার পর, শেষের প্রশ্নগুলোর উত্তর দিন।",
          slotValues: {
            DOING: "reading the chapter",
            ACTION: "answer the questions at the end",
          },
          topicArea: "education",
        },
        {
          en: "After taking the medicine, you rest for a while.",
          bn: "ওষুধ খাওয়ার পর, কিছুক্ষণ বিশ্রাম নিন।",
          slotValues: {
            DOING: "taking the medicine",
            ACTION: "rest for a while",
          },
          topicArea: "health",
        },
        {
          en: "After completing the form, you attach the required documents.",
          bn: "ফর্ম পূরণের পর, প্রয়োজনীয় কাগজপত্র সংযুক্ত করুন।",
          slotValues: {
            DOING: "completing the form",
            ACTION: "attach the required documents",
          },
          topicArea: "work",
        },
        {
          en: "After landing, you collect your luggage from the belt.",
          bn: "অবতরণের পর, বেল্ট থেকে লাগেজ সংগ্রহ করুন।",
          slotValues: {
            DOING: "landing",
            ACTION: "collect your luggage from the belt",
          },
          topicArea: "travel",
        },
        {
          en: "After paying, you collect your receipt.",
          bn: "টাকা দেওয়ার পর, রসিদ নিন।",
          slotValues: {
            DOING: "paying",
            ACTION: "collect your receipt",
          },
          topicArea: "shopping",
        },
        {
          en: "After waking up, you drink a glass of warm water.",
          bn: "ঘুম থেকে ওঠার পর, এক গ্লাস গরম পানি পান করুন।",
          slotValues: {
            DOING: "waking up",
            ACTION: "drink a glass of warm water",
          },
          topicArea: "daily_life",
        },
      ],
      formality: "polite",
      difficulty: "intermediate",
      usageNote:
        "'After + gerund' introduces the preceding step before stating the next action. Very common in instructions and recipes.",
      usageNote_bn:
        "'After + gerund' পরবর্তী কাজ বলার আগে পূর্ববর্তী ধাপ প্রবর্তন করে। নির্দেশনা ও রেসিপিতে খুব সাধারণ।",
      combinableWith: ["B12.1", "B12.5"],
      banglaStructureMap:
        "[DOING] (gerund) + করার পর + আপনি [ACTION] (পরবর্তী কাজ)",
    },
    {
      id: "B12.5",
      formula: "Make sure you [ACTION] before [DOING]",
      formula_bn: "[কাজ] করার আগে অবশ্যই [কাজ] করুন",
      patternName: "Precaution Before a Step",
      patternName_bn: "একটি ধাপের আগে সতর্কতা",
      slots: [
        {
          name: "ACTION",
          description: "The necessary precaution or preparation",
          description_bn: "প্রয়োজনীয় সতর্কতা বা প্রস্তুতি",
          acceptedTypes: ["verb_phrase"],
          examples: ["check the expiry date", "save your work", "lock the door"],
        },
        {
          name: "DOING",
          description: "The main activity (gerund form)",
          description_bn: "মূল কাজ (gerund রূপ)",
          acceptedTypes: ["gerund"],
          examples: ["buying the product", "shutting down", "leaving home"],
        },
      ],
      examples: [
        {
          en: "Make sure you check the expiry date before buying the product.",
          bn: "পণ্য কেনার আগে অবশ্যই মেয়াদ উত্তীর্ণের তারিখ দেখুন।",
          slotValues: {
            ACTION: "check the expiry date",
            DOING: "buying the product",
          },
          topicArea: "shopping",
        },
        {
          en: "Make sure you save your work before shutting down the computer.",
          bn: "কম্পিউটার বন্ধ করার আগে অবশ্যই কাজ সেভ করুন।",
          slotValues: {
            ACTION: "save your work",
            DOING: "shutting down the computer",
          },
          topicArea: "work",
        },
        {
          en: "Make sure you lock the door before leaving home.",
          bn: "বাড়ি থেকে বের হওয়ার আগে অবশ্যই দরজা তালা দিন।",
          slotValues: {
            ACTION: "lock the door",
            DOING: "leaving home",
          },
          topicArea: "daily_life",
        },
        {
          en: "Make sure you wash the rice before cooking it.",
          bn: "ভাত রান্না করার আগে অবশ্যই ধুয়ে নিন।",
          slotValues: {
            ACTION: "wash the rice",
            DOING: "cooking it",
          },
          topicArea: "food",
        },
        {
          en: "Make sure you read the instructions before starting the test.",
          bn: "পরীক্ষা শুরু করার আগে অবশ্যই নির্দেশনা পড়ুন।",
          slotValues: {
            ACTION: "read the instructions",
            DOING: "starting the test",
          },
          topicArea: "education",
        },
        {
          en: "Make sure you check your blood pressure before taking the medicine.",
          bn: "ওষুধ খাওয়ার আগে অবশ্যই রক্তচাপ মাপুন।",
          slotValues: {
            ACTION: "check your blood pressure",
            DOING: "taking the medicine",
          },
          topicArea: "health",
        },
        {
          en: "Make sure you charge your phone before going on the trip.",
          bn: "ভ্রমণে যাওয়ার আগে অবশ্যই ফোন চার্জ করুন।",
          slotValues: {
            ACTION: "charge your phone",
            DOING: "going on the trip",
          },
          topicArea: "travel",
        },
        {
          en: "Make sure you apologize before it's too late.",
          bn: "দেরি হওয়ার আগে অবশ্যই ক্ষমা চান।",
          slotValues: {
            ACTION: "apologize",
            DOING: "it's too late",
          },
          topicArea: "relationships",
        },
        {
          en: "Make sure you taste the soup before serving it.",
          bn: "পরিবেশনের আগে অবশ্যই স্যুপ চেখে দেখুন।",
          slotValues: {
            ACTION: "taste the soup",
            DOING: "serving it",
          },
          topicArea: "food",
        },
        {
          en: "Make sure you review your notes before the exam.",
          bn: "পরীক্ষার আগে অবশ্যই নোটগুলো রিভিউ করুন।",
          slotValues: {
            ACTION: "review your notes",
            DOING: "the exam",
          },
          topicArea: "education",
        },
        {
          en: "Make sure you eat something before taking this medicine.",
          bn: "এই ওষুধ খাওয়ার আগে অবশ্যই কিছু খান।",
          slotValues: {
            ACTION: "eat something",
            DOING: "taking this medicine",
          },
          topicArea: "health",
        },
        {
          en: "Make sure you back up the data before updating the software.",
          bn: "সফটওয়্যার আপডেট করার আগে অবশ্যই ডেটা ব্যাকআপ নিন।",
          slotValues: {
            ACTION: "back up the data",
            DOING: "updating the software",
          },
          topicArea: "work",
        },
        {
          en: "Make sure you confirm the reservation before traveling.",
          bn: "ভ্রমণের আগে অবশ্যই রিজার্ভেশন নিশ্চিত করুন।",
          slotValues: {
            ACTION: "confirm the reservation",
            DOING: "traveling",
          },
          topicArea: "travel",
        },
        {
          en: "Make sure you compare prices before buying online.",
          bn: "অনলাইনে কেনার আগে অবশ্যই দাম তুলনা করুন।",
          slotValues: {
            ACTION: "compare prices",
            DOING: "buying online",
          },
          topicArea: "shopping",
        },
        {
          en: "Make sure you stretch before exercising.",
          bn: "ব্যায়াম করার আগে অবশ্যই স্ট্রেচ করুন।",
          slotValues: {
            ACTION: "stretch",
            DOING: "exercising",
          },
          topicArea: "health",
        },
      ],
      formality: "polite",
      difficulty: "intermediate",
      usageNote:
        "'Make sure you... before...' gives a warning or reminder about a necessary precaution. Very common in instructions and safety advice.",
      usageNote_bn:
        "'Make sure you... before...' প্রয়োজনীয় সতর্কতা সম্পর্কে সতর্কবার্তা বা স্মরণ দেয়। নির্দেশনা ও নিরাপত্তা পরামর্শে খুব সাধারণ।",
      combinableWith: ["B12.1", "B12.4"],
      banglaStructureMap:
        "[DOING] (gerund) + করার আগে + অবশ্যই [ACTION] (সতর্কতা) + করুন",
    },
  ],
};
