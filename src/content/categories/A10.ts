import { PatternCategory } from "@/types/pattern";

export const categoryA10: PatternCategory = {
  id: "A10",
  slug: "would-rather-had-better-might-as-well",
  name: "Would Rather / Had Better / Might As Well",
  name_bn: "বরং / করা ভালো / না হয় করাই যাক",
  description:
    "Learn modal-like expressions for preferences, warnings, and resignation in English.",
  description_bn:
    "পছন্দ, সতর্কতা এবং সম্মতি প্রকাশের জন্য ইংরেজিতে মডাল-সদৃশ অভিব্যক্তি শিখুন।",
  icon: "🤔",
  group: "A",
  groupName: "Wanting, Needing & Preferences",
  groupName_bn: "চাওয়া, প্রয়োজন এবং পছন্দ",
  difficulty: "intermediate",
  prerequisites: ["A5", "A6"],
  patterns: [
    {
      id: "A10.1",
      formula: "I'd rather [ACTION] than [ACTION]",
      formula_bn: "আমি [কাজ] করার চেয়ে বরং [কাজ] করব",
      patternName: "Strong Preference (Rather...Than)",
      patternName_bn: "দৃঢ় পছন্দ (বরং...চেয়ে)",
      slots: [
        {
          name: "ACTION",
          description:
            "Two base-form verb phrases being compared (preferred vs less preferred)",
          description_bn:
            "তুলনা করা হচ্ছে এমন দুটি মূল-রূপ ক্রিয়া পদবন্ধ (পছন্দের বনাম কম পছন্দের)",
          acceptedTypes: ["verb"],
          examples: ["stay in | go out", "read | watch TV", "cook | eat out"],
        },
      ],
      examples: [
        {
          en: "I'd rather stay in than go out tonight.",
          bn: "আমি আজ রাতে বাইরে যাওয়ার চেয়ে বরং ঘরে থাকব।",
          slotValues: { ACTION: "stay in | go out tonight" },
          topicArea: "daily_life",
        },
        {
          en: "I'd rather read than watch TV.",
          bn: "আমি টিভি দেখার চেয়ে বরং পড়ব।",
          slotValues: { ACTION: "read | watch TV" },
          topicArea: "daily_life",
        },
        {
          en: "I'd rather cook than eat out.",
          bn: "আমি বাইরে খাওয়ার চেয়ে বরং রান্না করব।",
          slotValues: { ACTION: "cook | eat out" },
          topicArea: "food",
        },
        {
          en: "I'd rather take the train than drive.",
          bn: "আমি গাড়ি চালানোর চেয়ে বরং ট্রেনে যাব।",
          slotValues: { ACTION: "take the train | drive" },
          topicArea: "travel",
        },
        {
          en: "I'd rather work in a team than work alone.",
          bn: "আমি একা কাজ করার চেয়ে বরং দলে কাজ করব।",
          slotValues: { ACTION: "work in a team | work alone" },
          topicArea: "work",
        },
        {
          en: "I'd rather exercise in the morning than at night.",
          bn: "আমি রাতে ব্যায়াম করার চেয়ে বরং সকালে করব।",
          slotValues: { ACTION: "exercise in the morning | exercise at night" },
          topicArea: "health",
        },
        {
          en: "I'd rather study at a library than at home.",
          bn: "আমি বাসায় পড়ার চেয়ে বরং লাইব্রেরিতে পড়ব।",
          slotValues: { ACTION: "study at a library | study at home" },
          topicArea: "education",
        },
        {
          en: "I'd rather spend time with family than go to a party.",
          bn: "আমি পার্টিতে যাওয়ার চেয়ে বরং পরিবারের সাথে সময় কাটাব।",
          slotValues: {
            ACTION: "spend time with family | go to a party",
          },
          topicArea: "relationships",
        },
        {
          en: "I'd rather save money than buy something expensive.",
          bn: "আমি দামি কিছু কেনার চেয়ে বরং টাকা জমাব।",
          slotValues: { ACTION: "save money | buy something expensive" },
          topicArea: "shopping",
        },
        {
          en: "I'd rather have water than soda.",
          bn: "আমি সোডার চেয়ে বরং পানি খাব।",
          slotValues: { ACTION: "have water | have soda" },
          topicArea: "food",
        },
        {
          en: "I'd rather fly direct than have a layover.",
          bn: "আমি ট্রানজিটের চেয়ে বরং সরাসরি উড়ব।",
          slotValues: { ACTION: "fly direct | have a layover" },
          topicArea: "travel",
        },
        {
          en: "I'd rather be honest than pretend everything is fine.",
          bn: "আমি সব ঠিক আছে ভান করার চেয়ে বরং সৎ থাকব।",
          slotValues: {
            ACTION: "be honest | pretend everything is fine",
          },
          topicArea: "relationships",
        },
        {
          en: "I'd rather take a walk than take a nap.",
          bn: "আমি ঘুমানোর চেয়ে বরং হাঁটতে যাব।",
          slotValues: { ACTION: "take a walk | take a nap" },
          topicArea: "health",
        },
        {
          en: "I'd rather learn by doing than by listening to lectures.",
          bn: "আমি লেকচার শোনার চেয়ে বরং করে শিখব।",
          slotValues: {
            ACTION: "learn by doing | listen to lectures",
          },
          topicArea: "education",
        },
        {
          en: "I'd rather finish this tonight than rush tomorrow.",
          bn: "আমি আগামীকাল তাড়াহুড়ো করার চেয়ে বরং আজ রাতেই শেষ করব।",
          slotValues: { ACTION: "finish this tonight | rush tomorrow" },
          topicArea: "work",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "'I'd rather' + base verb + 'than' + base verb. Both verbs stay in base form. Don't use 'to' after 'rather'.",
      usageNote_bn:
        "'I'd rather' + মূল ক্রিয়া + 'than' + মূল ক্রিয়া। উভয় ক্রিয়া মূল রূপে থাকে। 'rather'-এর পরে 'to' ব্যবহার করবেন না।",
      combinableWith: ["A5.2"],
      banglaStructureMap:
        "আমি (Subject) + [ACTION2] করার চেয়ে (Comparison) + বরং [ACTION1] করব (Preferred verb + Future)",
    },
    {
      id: "A10.2",
      formula: "You'd better [ACTION]",
      formula_bn: "তোমার [কাজ] করা ভালো",
      patternName: "Strong Advice / Warning",
      patternName_bn: "জোরালো পরামর্শ / সতর্কতা",
      slots: [
        {
          name: "ACTION",
          description:
            "A base-form verb phrase giving strong advice or a warning",
          description_bn:
            "একটি মূল-রূপ ক্রিয়া পদবন্ধ যা জোরালো পরামর্শ বা সতর্কতা দেয়",
          acceptedTypes: ["verb"],
          examples: ["hurry up", "study hard", "see a doctor"],
        },
      ],
      examples: [
        {
          en: "You'd better hurry up.",
          bn: "তোমার তাড়াতাড়ি করা ভালো।",
          slotValues: { ACTION: "hurry up" },
          topicArea: "daily_life",
        },
        {
          en: "You'd better study hard for the exam.",
          bn: "তোমার পরীক্ষার জন্য কঠোর পড়াশোনা করা ভালো।",
          slotValues: { ACTION: "study hard for the exam" },
          topicArea: "education",
        },
        {
          en: "You'd better see a doctor.",
          bn: "তোমার ডাক্তার দেখানো ভালো।",
          slotValues: { ACTION: "see a doctor" },
          topicArea: "health",
        },
        {
          en: "You'd better finish the report on time.",
          bn: "তোমার সময়মতো রিপোর্ট শেষ করা ভালো।",
          slotValues: { ACTION: "finish the report on time" },
          topicArea: "work",
        },
        {
          en: "You'd better eat something before we leave.",
          bn: "আমরা রওনা দেওয়ার আগে তোমার কিছু খেয়ে নেওয়া ভালো।",
          slotValues: { ACTION: "eat something before we leave" },
          topicArea: "food",
        },
        {
          en: "You'd better book the hotel in advance.",
          bn: "তোমার আগে থেকে হোটেল বুক করা ভালো।",
          slotValues: { ACTION: "book the hotel in advance" },
          topicArea: "travel",
        },
        {
          en: "You'd better apologize to her.",
          bn: "তোমার তার কাছে ক্ষমা চাওয়া ভালো।",
          slotValues: { ACTION: "apologize to her" },
          topicArea: "relationships",
        },
        {
          en: "You'd better check the return policy.",
          bn: "তোমার রিটার্ন পলিসি দেখে নেওয়া ভালো।",
          slotValues: { ACTION: "check the return policy" },
          topicArea: "shopping",
        },
        {
          en: "You'd better take an umbrella.",
          bn: "তোমার ছাতা নিয়ে যাওয়া ভালো।",
          slotValues: { ACTION: "take an umbrella" },
          topicArea: "daily_life",
        },
        {
          en: "You'd better get some rest.",
          bn: "তোমার একটু বিশ্রাম নেওয়া ভালো।",
          slotValues: { ACTION: "get some rest" },
          topicArea: "health",
        },
        {
          en: "You'd better save some money for emergencies.",
          bn: "তোমার জরুরি অবস্থার জন্য কিছু টাকা জমানো ভালো।",
          slotValues: { ACTION: "save some money for emergencies" },
          topicArea: "shopping",
        },
        {
          en: "You'd better submit the assignment today.",
          bn: "তোমার আজই অ্যাসাইনমেন্ট জমা দেওয়া ভালো।",
          slotValues: { ACTION: "submit the assignment today" },
          topicArea: "education",
        },
        {
          en: "You'd better call your mother.",
          bn: "তোমার মাকে ফোন করা ভালো।",
          slotValues: { ACTION: "call your mother" },
          topicArea: "relationships",
        },
        {
          en: "You'd better arrive early for the flight.",
          bn: "তোমার ফ্লাইটের জন্য তাড়াতাড়ি পৌঁছানো ভালো।",
          slotValues: { ACTION: "arrive early for the flight" },
          topicArea: "travel",
        },
        {
          en: "You'd better not skip lunch.",
          bn: "তোমার দুপুরের খাবার বাদ না দেওয়াই ভালো।",
          slotValues: { ACTION: "not skip lunch" },
          topicArea: "food",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "'You'd better' (= You had better) gives strong advice with an implied consequence. It can sound like a warning.",
      usageNote_bn:
        "'You'd better' (= You had better) একটি অন্তর্নিহিত পরিণতিসহ জোরালো পরামর্শ দেয়। এটি সতর্কতার মতো শোনাতে পারে।",
      combinableWith: ["A10.5"],
      banglaStructureMap:
        "তোমার (Possessor) + [ACTION] (Verb phrase) + করা ভালো (Advice + Better)",
    },
    {
      id: "A10.3",
      formula: "We might as well [ACTION]",
      formula_bn: "আমরা না হয় [কাজ] করিই",
      patternName: "Resigned Acceptance / Suggestion",
      patternName_bn: "সম্মতিমূলক গ্রহণ / পরামর্শ",
      slots: [
        {
          name: "ACTION",
          description:
            "A base-form verb phrase for something you agree to do since there's no better option",
          description_bn:
            "একটি মূল-রূপ ক্রিয়া পদবন্ধ যা আপনি করতে রাজি কারণ আর ভালো বিকল্প নেই",
          acceptedTypes: ["verb"],
          examples: [
            "go home",
            "try it",
            "take a break",
          ],
        },
      ],
      examples: [
        {
          en: "We might as well go home.",
          bn: "আমরা না হয় বাড়ি যাই।",
          slotValues: { ACTION: "go home" },
          topicArea: "daily_life",
        },
        {
          en: "We might as well try it.",
          bn: "আমরা না হয় চেষ্টা করেই দেখি।",
          slotValues: { ACTION: "try it" },
          topicArea: "daily_life",
        },
        {
          en: "We might as well take a break.",
          bn: "আমরা না হয় একটু বিরতি নিই।",
          slotValues: { ACTION: "take a break" },
          topicArea: "work",
        },
        {
          en: "We might as well order pizza.",
          bn: "আমরা না হয় পিৎজা অর্ডার করিই।",
          slotValues: { ACTION: "order pizza" },
          topicArea: "food",
        },
        {
          en: "We might as well walk since the bus isn't coming.",
          bn: "বাস আসছে না তাই আমরা না হয় হেঁটেই যাই।",
          slotValues: { ACTION: "walk since the bus isn't coming" },
          topicArea: "travel",
        },
        {
          en: "We might as well start studying now.",
          bn: "আমরা না হয় এখনই পড়া শুরু করি।",
          slotValues: { ACTION: "start studying now" },
          topicArea: "education",
        },
        {
          en: "We might as well get a checkup while we're here.",
          bn: "আমরা যখন এখানেই আছি, না হয় চেকআপ করিয়ে নিই।",
          slotValues: { ACTION: "get a checkup while we're here" },
          topicArea: "health",
        },
        {
          en: "We might as well talk to each other about it.",
          bn: "আমরা না হয় এ বিষয়ে একে অপরের সাথে কথা বলি।",
          slotValues: { ACTION: "talk to each other about it" },
          topicArea: "relationships",
        },
        {
          en: "We might as well buy it now while it's on sale.",
          bn: "এখন সেলে আছে, আমরা না হয় কিনেই ফেলি।",
          slotValues: { ACTION: "buy it now while it's on sale" },
          topicArea: "shopping",
        },
        {
          en: "We might as well finish the whole thing today.",
          bn: "আমরা না হয় আজই পুরোটা শেষ করি।",
          slotValues: { ACTION: "finish the whole thing today" },
          topicArea: "work",
        },
        {
          en: "We might as well eat here since we're already inside.",
          bn: "আমরা যখন ভেতরেই আছি, না হয় এখানেই খাই।",
          slotValues: { ACTION: "eat here since we're already inside" },
          topicArea: "food",
        },
        {
          en: "We might as well take the scenic route.",
          bn: "আমরা না হয় সুন্দর পথ দিয়েই যাই।",
          slotValues: { ACTION: "take the scenic route" },
          topicArea: "travel",
        },
        {
          en: "We might as well stay for the whole class.",
          bn: "আমরা না হয় পুরো ক্লাসটাই থাকি।",
          slotValues: { ACTION: "stay for the whole class" },
          topicArea: "education",
        },
        {
          en: "We might as well tell them the truth.",
          bn: "আমরা না হয় তাদের সত্যি কথাটাই বলি।",
          slotValues: { ACTION: "tell them the truth" },
          topicArea: "relationships",
        },
        {
          en: "We might as well rest since the gym is closed.",
          bn: "জিম বন্ধ তাই আমরা না হয় বিশ্রামই নিই।",
          slotValues: { ACTION: "rest since the gym is closed" },
          topicArea: "health",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "'Might as well' suggests doing something because there's no reason not to, or nothing better to do. It carries a sense of resignation.",
      usageNote_bn:
        "'Might as well' পরামর্শ দেয় কিছু করার কারণ না করার কোনো কারণ নেই, বা আর ভালো কিছু করার নেই। এটি একটি সম্মতির অনুভূতি বহন করে।",
      combinableWith: ["A10.1"],
      banglaStructureMap:
        "আমরা না হয় (Subject + Resigned) + [ACTION] (Verb phrase) + করিই (Emphatic verb)",
    },
    {
      id: "A10.4",
      formula: "I'd sooner [ACTION] than [ACTION]",
      formula_bn: "আমি [কাজ] করার চেয়ে বরং [কাজ] করব",
      patternName: "Emphatic Preference (Sooner...Than)",
      patternName_bn: "জোরালো পছন্দ (বরং...চেয়ে)",
      slots: [
        {
          name: "ACTION",
          description:
            "Two base-form verb phrases: the strongly preferred action and the rejected alternative",
          description_bn:
            "দুটি মূল-রূপ ক্রিয়া পদবন্ধ: দৃঢ়ভাবে পছন্দের কাজ এবং প্রত্যাখ্যাত বিকল্প",
          acceptedTypes: ["verb"],
          examples: [
            "walk | take that crowded bus",
            "starve | eat bad food",
            "resign | work under him",
          ],
        },
      ],
      examples: [
        {
          en: "I'd sooner walk than take that crowded bus.",
          bn: "আমি সেই ঠাসাঠাসি বাসে চড়ার চেয়ে বরং হাঁটব।",
          slotValues: { ACTION: "walk | take that crowded bus" },
          topicArea: "travel",
        },
        {
          en: "I'd sooner starve than eat bad food.",
          bn: "আমি খারাপ খাবার খাওয়ার চেয়ে বরং না খেয়ে থাকব।",
          slotValues: { ACTION: "starve | eat bad food" },
          topicArea: "food",
        },
        {
          en: "I'd sooner resign than work under him.",
          bn: "আমি তার অধীনে কাজ করার চেয়ে বরং পদত্যাগ করব।",
          slotValues: { ACTION: "resign | work under him" },
          topicArea: "work",
        },
        {
          en: "I'd sooner stay home than go to that boring party.",
          bn: "আমি সেই বিরক্তিকর পার্টিতে যাওয়ার চেয়ে বরং বাড়িতে থাকব।",
          slotValues: { ACTION: "stay home | go to that boring party" },
          topicArea: "daily_life",
        },
        {
          en: "I'd sooner fail honestly than cheat.",
          bn: "আমি নকল করার চেয়ে বরং সৎভাবে ফেল করব।",
          slotValues: { ACTION: "fail honestly | cheat" },
          topicArea: "education",
        },
        {
          en: "I'd sooner spend more than buy something low-quality.",
          bn: "আমি নিম্নমানের কিছু কেনার চেয়ে বরং বেশি খরচ করব।",
          slotValues: {
            ACTION: "spend more | buy something low-quality",
          },
          topicArea: "shopping",
        },
        {
          en: "I'd sooner go to bed early than take sleeping pills.",
          bn: "আমি ঘুমের ওষুধ খাওয়ার চেয়ে বরং তাড়াতাড়ি ঘুমাতে যাব।",
          slotValues: {
            ACTION: "go to bed early | take sleeping pills",
          },
          topicArea: "health",
        },
        {
          en: "I'd sooner be alone than be with the wrong person.",
          bn: "আমি ভুল মানুষের সাথে থাকার চেয়ে বরং একা থাকব।",
          slotValues: {
            ACTION: "be alone | be with the wrong person",
          },
          topicArea: "relationships",
        },
        {
          en: "I'd sooner cook at home than eat fast food.",
          bn: "আমি ফাস্ট ফুড খাওয়ার চেয়ে বরং বাড়িতে রান্না করব।",
          slotValues: { ACTION: "cook at home | eat fast food" },
          topicArea: "food",
        },
        {
          en: "I'd sooner drive all night than stay at a bad hotel.",
          bn: "আমি খারাপ হোটেলে থাকার চেয়ে বরং সারারাত গাড়ি চালাব।",
          slotValues: {
            ACTION: "drive all night | stay at a bad hotel",
          },
          topicArea: "travel",
        },
        {
          en: "I'd sooner do the work myself than trust someone unreliable.",
          bn: "আমি অবিশ্বস্ত কাউকে বিশ্বাস করার চেয়ে বরং নিজেই কাজটা করব।",
          slotValues: {
            ACTION: "do the work myself | trust someone unreliable",
          },
          topicArea: "work",
        },
        {
          en: "I'd sooner read the book than watch the movie.",
          bn: "আমি সিনেমা দেখার চেয়ে বরং বই পড়ব।",
          slotValues: { ACTION: "read the book | watch the movie" },
          topicArea: "daily_life",
        },
        {
          en: "I'd sooner study all night than go unprepared.",
          bn: "আমি অপ্রস্তুত যাওয়ার চেয়ে বরং সারারাত পড়ব।",
          slotValues: { ACTION: "study all night | go unprepared" },
          topicArea: "education",
        },
        {
          en: "I'd sooner skip dessert than have something I don't like.",
          bn: "আমি পছন্দ নয় এমন কিছু খাওয়ার চেয়ে বরং ডেজার্ট বাদ দেব।",
          slotValues: {
            ACTION: "skip dessert | have something I don't like",
          },
          topicArea: "food",
        },
        {
          en: "I'd sooner pay more than compromise on safety.",
          bn: "আমি নিরাপত্তায় আপস করার চেয়ে বরং বেশি টাকা দেব।",
          slotValues: {
            ACTION: "pay more | compromise on safety",
          },
          topicArea: "health",
        },
      ],
      formality: "polite",
      difficulty: "intermediate",
      usageNote:
        "'I'd sooner' is a stronger, more emphatic version of 'I'd rather'. It implies the second option is quite undesirable.",
      usageNote_bn:
        "'I'd sooner' হলো 'I'd rather'-এর আরও শক্তিশালী, জোরালো রূপ। এটি বোঝায় যে দ্বিতীয় বিকল্পটি বেশ অনাকাঙ্ক্ষিত।",
      combinableWith: ["A10.1", "A5.2"],
      banglaStructureMap:
        "আমি (Subject) + [ACTION2] করার চেয়ে (Comparison) + বরং [ACTION1] করব (Preferred + Emphatic)",
    },
    {
      id: "A10.5",
      formula: "You had better not [ACTION]",
      formula_bn: "তোমার [কাজ] না করাই ভালো",
      patternName: "Negative Warning / Advice",
      patternName_bn: "নেতিবাচক সতর্কতা / পরামর্শ",
      slots: [
        {
          name: "ACTION",
          description:
            "A base-form verb phrase describing the action being warned against",
          description_bn:
            "একটি মূল-রূপ ক্রিয়া পদবন্ধ যা থেকে বিরত থাকতে সতর্ক করা হচ্ছে",
          acceptedTypes: ["verb"],
          examples: ["be late", "touch that", "forget your passport"],
        },
      ],
      examples: [
        {
          en: "You had better not be late.",
          bn: "তোমার দেরি না করাই ভালো।",
          slotValues: { ACTION: "be late" },
          topicArea: "daily_life",
        },
        {
          en: "You had better not touch that.",
          bn: "তোমার ওটা না ছোঁয়াই ভালো।",
          slotValues: { ACTION: "touch that" },
          topicArea: "daily_life",
        },
        {
          en: "You had better not forget your passport.",
          bn: "তোমার পাসপোর্ট না ভোলাই ভালো।",
          slotValues: { ACTION: "forget your passport" },
          topicArea: "travel",
        },
        {
          en: "You had better not miss the deadline.",
          bn: "তোমার ডেডলাইন মিস না করাই ভালো।",
          slotValues: { ACTION: "miss the deadline" },
          topicArea: "work",
        },
        {
          en: "You had better not eat that expired food.",
          bn: "তোমার সেই মেয়াদোত্তীর্ণ খাবার না খাওয়াই ভালো।",
          slotValues: { ACTION: "eat that expired food" },
          topicArea: "food",
        },
        {
          en: "You had better not skip your classes.",
          bn: "তোমার ক্লাস বাদ না দেওয়াই ভালো।",
          slotValues: { ACTION: "skip your classes" },
          topicArea: "education",
        },
        {
          en: "You had better not ignore those symptoms.",
          bn: "তোমার সেই লক্ষণগুলো উপেক্ষা না করাই ভালো।",
          slotValues: { ACTION: "ignore those symptoms" },
          topicArea: "health",
        },
        {
          en: "You had better not lie to her.",
          bn: "তোমার তার কাছে মিথ্যা না বলাই ভালো।",
          slotValues: { ACTION: "lie to her" },
          topicArea: "relationships",
        },
        {
          en: "You had better not lose the receipt.",
          bn: "তোমার রসিদটা না হারানোই ভালো।",
          slotValues: { ACTION: "lose the receipt" },
          topicArea: "shopping",
        },
        {
          en: "You had better not drive in this storm.",
          bn: "তোমার এই ঝড়ে গাড়ি না চালানোই ভালো।",
          slotValues: { ACTION: "drive in this storm" },
          topicArea: "travel",
        },
        {
          en: "You had better not tell anyone about this.",
          bn: "তোমার কাউকে এ বিষয়ে না বলাই ভালো।",
          slotValues: { ACTION: "tell anyone about this" },
          topicArea: "relationships",
        },
        {
          en: "You had better not stay up all night before the exam.",
          bn: "তোমার পরীক্ষার আগের রাতে সারারাত না জাগাই ভালো।",
          slotValues: {
            ACTION: "stay up all night before the exam",
          },
          topicArea: "education",
        },
        {
          en: "You had better not leave that report unfinished.",
          bn: "তোমার সেই রিপোর্ট অসম্পূর্ণ না রাখাই ভালো।",
          slotValues: { ACTION: "leave that report unfinished" },
          topicArea: "work",
        },
        {
          en: "You had better not eat too much before bed.",
          bn: "তোমার ঘুমের আগে বেশি না খাওয়াই ভালো।",
          slotValues: { ACTION: "eat too much before bed" },
          topicArea: "food",
        },
        {
          en: "You had better not skip your medication.",
          bn: "তোমার ওষুধ বাদ না দেওয়াই ভালো।",
          slotValues: { ACTION: "skip your medication" },
          topicArea: "health",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "'You had better not' is the negative form. It's a strong warning, implying bad consequences if the action is done.",
      usageNote_bn:
        "'You had better not' হলো নেতিবাচক রূপ। এটি একটি শক্তিশালী সতর্কতা, যা বোঝায় কাজটি করলে খারাপ পরিণতি হবে।",
      combinableWith: ["A10.2"],
      banglaStructureMap:
        "তোমার (Possessor) + [ACTION] (Verb phrase) + না করাই ভালো (Negative + Advice)",
    },
  ],
};
