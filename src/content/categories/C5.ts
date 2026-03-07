import { PatternCategory } from "@/types/pattern";

export const categoryC5: PatternCategory = {
  id: "C5",
  slug: "experience-duration",
  name: "Experience & Duration (Have Done)",
  name_bn: "অভিজ্ঞতা এবং সময়কাল (করেছি)",
  description:
    "Learn how to talk about life experiences and ongoing durations using the present perfect tense.",
  description_bn:
    "বর্তমান পূর্ণ কাল ব্যবহার করে জীবনের অভিজ্ঞতা এবং চলমান সময়কাল সম্পর্কে কথা বলতে শিখুন।",
  icon: "✅",
  group: "C",
  groupName: "Actions & Time Patterns",
  groupName_bn: "কর্ম এবং সময়ের প্যাটার্ন",
  difficulty: "intermediate",
  patterns: [
    {
      id: "C5.1",
      formula: "I have [PAST PARTICIPLE]",
      formula_bn: "আমি [কাজ] করেছি",
      patternName: "Life Experience",
      patternName_bn: "জীবনের অভিজ্ঞতা",
      slots: [
        {
          name: "PAST PARTICIPLE",
          description:
            "A verb in past participle form describing a completed experience",
          description_bn:
            "একটি অতীত কৃদন্ত রূপের ক্রিয়া যা সম্পন্ন অভিজ্ঞতা বর্ণনা করে",
          acceptedTypes: ["past_participle"],
          examples: ["visited Paris", "eaten sushi", "read that book"],
        },
      ],
      examples: [
        {
          en: "I have visited Paris twice.",
          bn: "আমি দুইবার প্যারিস ঘুরেছি।",
          slotValues: { "PAST PARTICIPLE": "visited Paris twice" },
          topicArea: "travel",
        },
        {
          en: "I have eaten sushi before.",
          bn: "আমি আগে সুশি খেয়েছি।",
          slotValues: { "PAST PARTICIPLE": "eaten sushi before" },
          topicArea: "food",
        },
        {
          en: "I have read that book already.",
          bn: "আমি সেই বইটি ইতোমধ্যে পড়েছি।",
          slotValues: { "PAST PARTICIPLE": "read that book already" },
          topicArea: "education",
        },
        {
          en: "I have finished my assignment.",
          bn: "আমি আমার অ্যাসাইনমেন্ট শেষ করেছি।",
          slotValues: { "PAST PARTICIPLE": "finished my assignment" },
          topicArea: "education",
        },
        {
          en: "I have met the new manager.",
          bn: "আমি নতুন ম্যানেজারের সাথে দেখা করেছি।",
          slotValues: { "PAST PARTICIPLE": "met the new manager" },
          topicArea: "work",
        },
        {
          en: "I have tried acupuncture.",
          bn: "আমি আকুপাংচার চেষ্টা করেছি।",
          slotValues: { "PAST PARTICIPLE": "tried acupuncture" },
          topicArea: "health",
        },
        {
          en: "I have spoken to her about this.",
          bn: "আমি এই বিষয়ে তার সাথে কথা বলেছি।",
          slotValues: { "PAST PARTICIPLE": "spoken to her about this" },
          topicArea: "relationships",
        },
        {
          en: "I have bought everything we need.",
          bn: "আমি আমাদের প্রয়োজনীয় সব কিছু কিনেছি।",
          slotValues: { "PAST PARTICIPLE": "bought everything we need" },
          topicArea: "shopping",
        },
        {
          en: "I have cleaned the whole apartment.",
          bn: "আমি পুরো অ্যাপার্টমেন্ট পরিষ্কার করেছি।",
          slotValues: { "PAST PARTICIPLE": "cleaned the whole apartment" },
          topicArea: "daily_life",
        },
        {
          en: "I have cooked this recipe many times.",
          bn: "আমি এই রেসিপি অনেকবার রান্না করেছি।",
          slotValues: { "PAST PARTICIPLE": "cooked this recipe many times" },
          topicArea: "food",
        },
        {
          en: "I have completed the training program.",
          bn: "আমি প্রশিক্ষণ কার্যক্রম সম্পন্ন করেছি।",
          slotValues: { "PAST PARTICIPLE": "completed the training program" },
          topicArea: "work",
        },
        {
          en: "I have traveled to ten different countries.",
          bn: "আমি দশটি ভিন্ন দেশে ভ্রমণ করেছি।",
          slotValues: {
            "PAST PARTICIPLE": "traveled to ten different countries",
          },
          topicArea: "travel",
        },
        {
          en: "I have lost five kilograms this year.",
          bn: "আমি এই বছর পাঁচ কেজি ওজন কমিয়েছি।",
          slotValues: {
            "PAST PARTICIPLE": "lost five kilograms this year",
          },
          topicArea: "health",
        },
        {
          en: "I have fixed the broken shelf.",
          bn: "আমি ভাঙা তাকটি ঠিক করেছি।",
          slotValues: { "PAST PARTICIPLE": "fixed the broken shelf" },
          topicArea: "daily_life",
        },
        {
          en: "I have known him since childhood.",
          bn: "আমি তাকে শৈশব থেকে চিনি।",
          slotValues: { "PAST PARTICIPLE": "known him since childhood" },
          topicArea: "relationships",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "The present perfect (have + past participle) connects past experiences to the present. Use it when the exact time doesn't matter or isn't specified.",
      usageNote_bn:
        "বর্তমান পূর্ণ কাল (have + past participle) অতীত অভিজ্ঞতাকে বর্তমানের সাথে সংযুক্ত করে। সঠিক সময় গুরুত্বপূর্ণ না হলে বা নির্দিষ্ট না হলে এটি ব্যবহার করুন।",
      combinableWith: ["C5.2", "C5.3"],
      banglaStructureMap:
        "আমি (Subject) + [PAST PARTICIPLE] (Verb) + করেছি (Perfect Aux)",
    },
    {
      id: "C5.2",
      formula: "I have never [PAST PARTICIPLE]",
      formula_bn: "আমি কখনো [কাজ] করিনি",
      patternName: "No Experience",
      patternName_bn: "অভিজ্ঞতা নেই",
      slots: [
        {
          name: "PAST PARTICIPLE",
          description:
            "A verb in past participle form for something you have not experienced",
          description_bn:
            "একটি অতীত কৃদন্ত রূপের ক্রিয়া যা আপনি অনুভব করেননি",
          acceptedTypes: ["past_participle"],
          examples: ["been to Europe", "seen snow", "driven a car"],
        },
      ],
      examples: [
        {
          en: "I have never been to Europe.",
          bn: "আমি কখনো ইউরোপে যাইনি।",
          slotValues: { "PAST PARTICIPLE": "been to Europe" },
          topicArea: "travel",
        },
        {
          en: "I have never seen snow.",
          bn: "আমি কখনো তুষারপাত দেখিনি।",
          slotValues: { "PAST PARTICIPLE": "seen snow" },
          topicArea: "daily_life",
        },
        {
          en: "I have never driven a car.",
          bn: "আমি কখনো গাড়ি চালাইনি।",
          slotValues: { "PAST PARTICIPLE": "driven a car" },
          topicArea: "travel",
        },
        {
          en: "I have never eaten lobster.",
          bn: "আমি কখনো লবস্টার খাইনি।",
          slotValues: { "PAST PARTICIPLE": "eaten lobster" },
          topicArea: "food",
        },
        {
          en: "I have never failed an exam.",
          bn: "আমি কখনো পরীক্ষায় ফেল করিনি।",
          slotValues: { "PAST PARTICIPLE": "failed an exam" },
          topicArea: "education",
        },
        {
          en: "I have never broken a bone.",
          bn: "আমি কখনো হাড় ভাঙিনি।",
          slotValues: { "PAST PARTICIPLE": "broken a bone" },
          topicArea: "health",
        },
        {
          en: "I have never worked night shifts.",
          bn: "আমি কখনো রাতের শিফটে কাজ করিনি।",
          slotValues: { "PAST PARTICIPLE": "worked night shifts" },
          topicArea: "work",
        },
        {
          en: "I have never lied to my parents.",
          bn: "আমি কখনো আমার বাবা-মায়ের কাছে মিথ্যা বলিনি।",
          slotValues: { "PAST PARTICIPLE": "lied to my parents" },
          topicArea: "relationships",
        },
        {
          en: "I have never bought anything online.",
          bn: "আমি কখনো অনলাইনে কিছু কিনিনি।",
          slotValues: { "PAST PARTICIPLE": "bought anything online" },
          topicArea: "shopping",
        },
        {
          en: "I have never cooked for a large group.",
          bn: "আমি কখনো বড় দলের জন্য রান্না করিনি।",
          slotValues: { "PAST PARTICIPLE": "cooked for a large group" },
          topicArea: "food",
        },
        {
          en: "I have never lived alone.",
          bn: "আমি কখনো একা থাকিনি।",
          slotValues: { "PAST PARTICIPLE": "lived alone" },
          topicArea: "daily_life",
        },
        {
          en: "I have never given a public speech.",
          bn: "আমি কখনো জনসম্মুখে বক্তৃতা দিইনি।",
          slotValues: { "PAST PARTICIPLE": "given a public speech" },
          topicArea: "work",
        },
        {
          en: "I have never stayed in a five-star hotel.",
          bn: "আমি কখনো পাঁচতারা হোটেলে থাকিনি।",
          slotValues: { "PAST PARTICIPLE": "stayed in a five-star hotel" },
          topicArea: "travel",
        },
        {
          en: "I have never taken a yoga class.",
          bn: "আমি কখনো যোগব্যায়ামের ক্লাস নিইনি।",
          slotValues: { "PAST PARTICIPLE": "taken a yoga class" },
          topicArea: "health",
        },
        {
          en: "I have never read a book in English.",
          bn: "আমি কখনো ইংরেজিতে বই পড়িনি।",
          slotValues: { "PAST PARTICIPLE": "read a book in English" },
          topicArea: "education",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "'Never' goes between 'have' and the past participle. This pattern is commonly used in conversations about life experiences, often in the game 'Never Have I Ever'.",
      usageNote_bn:
        "'Never' 'have' এবং past participle-এর মধ্যে বসে। এই প্যাটার্ন সাধারণত জীবনের অভিজ্ঞতা নিয়ে কথোপকথনে ব্যবহৃত হয়, প্রায়ই 'Never Have I Ever' খেলায়।",
      combinableWith: ["C5.1", "C5.3"],
      banglaStructureMap:
        "আমি (Subject) + কখনো (Adverb) + [PAST PARTICIPLE] (Verb) + করিনি (Neg Perfect Aux)",
    },
    {
      id: "C5.3",
      formula: "Have you ever [PAST PARTICIPLE]?",
      formula_bn: "তুমি কি কখনো [কাজ] করেছ?",
      patternName: "Asking About Experience",
      patternName_bn: "অভিজ্ঞতা সম্পর্কে জিজ্ঞাসা",
      slots: [
        {
          name: "PAST PARTICIPLE",
          description:
            "A verb in past participle form for the experience you are asking about",
          description_bn:
            "একটি অতীত কৃদন্ত রূপের ক্রিয়া যে অভিজ্ঞতা সম্পর্কে আপনি জিজ্ঞাসা করছেন",
          acceptedTypes: ["past_participle"],
          examples: ["been to Japan", "tried skydiving", "met a celebrity"],
        },
      ],
      examples: [
        {
          en: "Have you ever been to Japan?",
          bn: "তুমি কি কখনো জাপানে গিয়েছ?",
          slotValues: { "PAST PARTICIPLE": "been to Japan" },
          topicArea: "travel",
        },
        {
          en: "Have you ever tried skydiving?",
          bn: "তুমি কি কখনো স্কাইডাইভিং করেছ?",
          slotValues: { "PAST PARTICIPLE": "tried skydiving" },
          topicArea: "health",
        },
        {
          en: "Have you ever met a celebrity?",
          bn: "তুমি কি কখনো কোনো সেলিব্রিটির সাথে দেখা করেছ?",
          slotValues: { "PAST PARTICIPLE": "met a celebrity" },
          topicArea: "daily_life",
        },
        {
          en: "Have you ever cooked a full meal by yourself?",
          bn: "তুমি কি কখনো নিজে পুরো একটি খাবার রান্না করেছ?",
          slotValues: {
            "PAST PARTICIPLE": "cooked a full meal by yourself",
          },
          topicArea: "food",
        },
        {
          en: "Have you ever worked abroad?",
          bn: "তুমি কি কখনো বিদেশে কাজ করেছ?",
          slotValues: { "PAST PARTICIPLE": "worked abroad" },
          topicArea: "work",
        },
        {
          en: "Have you ever written a poem?",
          bn: "তুমি কি কখনো কবিতা লিখেছ?",
          slotValues: { "PAST PARTICIPLE": "written a poem" },
          topicArea: "education",
        },
        {
          en: "Have you ever lost your wallet?",
          bn: "তুমি কি কখনো তোমার মানিব্যাগ হারিয়েছ?",
          slotValues: { "PAST PARTICIPLE": "lost your wallet" },
          topicArea: "daily_life",
        },
        {
          en: "Have you ever donated blood?",
          bn: "তুমি কি কখনো রক্তদান করেছ?",
          slotValues: { "PAST PARTICIPLE": "donated blood" },
          topicArea: "health",
        },
        {
          en: "Have you ever ridden a horse?",
          bn: "তুমি কি কখনো ঘোড়ায় চড়েছ?",
          slotValues: { "PAST PARTICIPLE": "ridden a horse" },
          topicArea: "travel",
        },
        {
          en: "Have you ever bought something you regretted?",
          bn: "তুমি কি কখনো এমন কিছু কিনেছ যা পরে আফসোস হয়েছে?",
          slotValues: {
            "PAST PARTICIPLE": "bought something you regretted",
          },
          topicArea: "shopping",
        },
        {
          en: "Have you ever forgotten someone's birthday?",
          bn: "তুমি কি কখনো কারো জন্মদিন ভুলে গিয়েছ?",
          slotValues: {
            "PAST PARTICIPLE": "forgotten someone's birthday",
          },
          topicArea: "relationships",
        },
        {
          en: "Have you ever eaten something really spicy?",
          bn: "তুমি কি কখনো খুব ঝাল কিছু খেয়েছ?",
          slotValues: {
            "PAST PARTICIPLE": "eaten something really spicy",
          },
          topicArea: "food",
        },
        {
          en: "Have you ever given a presentation at work?",
          bn: "তুমি কি কখনো কাজে প্রেজেন্টেশন দিয়েছ?",
          slotValues: {
            "PAST PARTICIPLE": "given a presentation at work",
          },
          topicArea: "work",
        },
        {
          en: "Have you ever studied all night?",
          bn: "তুমি কি কখনো সারারাত পড়েছ?",
          slotValues: { "PAST PARTICIPLE": "studied all night" },
          topicArea: "education",
        },
        {
          en: "Have you ever lived in a different city?",
          bn: "তুমি কি কখনো অন্য শহরে থেকেছ?",
          slotValues: { "PAST PARTICIPLE": "lived in a different city" },
          topicArea: "daily_life",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "Move 'Have' to the front to form a question. 'Ever' means 'at any time in your life'. This is the most common way to ask about someone's life experiences.",
      usageNote_bn:
        "প্রশ্ন করতে 'Have' সামনে আনুন। 'Ever' মানে 'তোমার জীবনে কোনো সময়'। এটি কারো জীবনের অভিজ্ঞতা সম্পর্কে জিজ্ঞাসা করার সবচেয়ে সাধারণ উপায়।",
      combinableWith: ["C5.1", "C5.2"],
      banglaStructureMap:
        "তুমি কি (Subject + Q) + কখনো (Adverb) + [PAST PARTICIPLE] (Verb) + করেছ? (Perfect Aux + Q)",
    },
    {
      id: "C5.4",
      formula: "I have been [DOING] for/since [TIME]",
      formula_bn: "আমি [সময়] ধরে/থেকে [কাজ] করছি",
      patternName: "Duration of Activity",
      patternName_bn: "কাজের সময়কাল",
      slots: [
        {
          name: "DOING",
          description:
            "A verb in -ing form for an activity that started in the past and continues",
          description_bn:
            "একটি -ing রূপের ক্রিয়া যা অতীতে শুরু হয়ে চলমান আছে",
          acceptedTypes: ["gerund"],
          examples: ["working", "studying", "living"],
        },
        {
          name: "TIME",
          description:
            "A duration (for) or starting point (since) of the activity",
          description_bn:
            "কাজের সময়কাল (for) বা শুরুর বিন্দু (since)",
          acceptedTypes: ["time"],
          examples: ["three years", "2019", "two hours"],
        },
      ],
      examples: [
        {
          en: "I have been working here for five years.",
          bn: "আমি পাঁচ বছর ধরে এখানে কাজ করছি।",
          slotValues: { DOING: "working here", TIME: "five years" },
          topicArea: "work",
        },
        {
          en: "I have been studying English since January.",
          bn: "আমি জানুয়ারি থেকে ইংরেজি পড়ছি।",
          slotValues: { DOING: "studying English", TIME: "January" },
          topicArea: "education",
        },
        {
          en: "I have been living in this city for ten years.",
          bn: "আমি দশ বছর ধরে এই শহরে থাকছি।",
          slotValues: { DOING: "living in this city", TIME: "ten years" },
          topicArea: "daily_life",
        },
        {
          en: "I have been waiting for you for an hour.",
          bn: "আমি এক ঘণ্টা ধরে তোমার জন্য অপেক্ষা করছি।",
          slotValues: { DOING: "waiting for you", TIME: "an hour" },
          topicArea: "relationships",
        },
        {
          en: "I have been cooking since morning.",
          bn: "আমি সকাল থেকে রান্না করছি।",
          slotValues: { DOING: "cooking", TIME: "morning" },
          topicArea: "food",
        },
        {
          en: "I have been exercising for three months.",
          bn: "আমি তিন মাস ধরে ব্যায়াম করছি।",
          slotValues: { DOING: "exercising", TIME: "three months" },
          topicArea: "health",
        },
        {
          en: "I have been traveling since last week.",
          bn: "আমি গত সপ্তাহ থেকে ভ্রমণ করছি।",
          slotValues: { DOING: "traveling", TIME: "last week" },
          topicArea: "travel",
        },
        {
          en: "I have been saving money for six months.",
          bn: "আমি ছয় মাস ধরে টাকা জমাচ্ছি।",
          slotValues: { DOING: "saving money", TIME: "six months" },
          topicArea: "shopping",
        },
        {
          en: "I have been reading this book for two weeks.",
          bn: "আমি দুই সপ্তাহ ধরে এই বইটি পড়ছি।",
          slotValues: { DOING: "reading this book", TIME: "two weeks" },
          topicArea: "education",
        },
        {
          en: "I have been feeling tired since yesterday.",
          bn: "আমি গতকাল থেকে ক্লান্ত অনুভব করছি।",
          slotValues: { DOING: "feeling tired", TIME: "yesterday" },
          topicArea: "health",
        },
        {
          en: "I have been managing this team since 2022.",
          bn: "আমি ২০২২ সাল থেকে এই দলটি পরিচালনা করছি।",
          slotValues: { DOING: "managing this team", TIME: "2022" },
          topicArea: "work",
        },
        {
          en: "I have been looking for a new apartment for weeks.",
          bn: "আমি কয়েক সপ্তাহ ধরে একটি নতুন অ্যাপার্টমেন্ট খুঁজছি।",
          slotValues: { DOING: "looking for a new apartment", TIME: "weeks" },
          topicArea: "daily_life",
        },
        {
          en: "I have been talking to him for half an hour.",
          bn: "আমি আধা ঘণ্টা ধরে তার সাথে কথা বলছি।",
          slotValues: { DOING: "talking to him", TIME: "half an hour" },
          topicArea: "relationships",
        },
        {
          en: "I have been trying this recipe since last night.",
          bn: "আমি গত রাত থেকে এই রেসিপি চেষ্টা করছি।",
          slotValues: { DOING: "trying this recipe", TIME: "last night" },
          topicArea: "food",
        },
        {
          en: "I have been planning this trip for months.",
          bn: "আমি কয়েক মাস ধরে এই ভ্রমণের পরিকল্পনা করছি।",
          slotValues: { DOING: "planning this trip", TIME: "months" },
          topicArea: "travel",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "Use 'for' with durations (for two hours, for five years) and 'since' with specific starting points (since Monday, since 2020). This tense emphasizes that the activity is still ongoing.",
      usageNote_bn:
        "সময়কালের সাথে 'for' ব্যবহার করুন (for two hours, for five years) এবং নির্দিষ্ট শুরুর বিন্দুর সাথে 'since' (since Monday, since 2020)। এই কাল জোর দেয় যে কাজটি এখনও চলমান।",
      combinableWith: ["C5.1"],
      banglaStructureMap:
        "আমি (Subject) + [TIME] ধরে/থেকে (Duration) + [DOING] (Verb) + করছি (Perf Prog Aux)",
    },
    {
      id: "C5.5",
      formula: "I haven't [PAST PARTICIPLE] yet",
      formula_bn: "আমি এখনো [কাজ] করিনি",
      patternName: "Not Yet Done",
      patternName_bn: "এখনো হয়নি",
      slots: [
        {
          name: "PAST PARTICIPLE",
          description:
            "A verb in past participle form for something expected but not done yet",
          description_bn:
            "একটি অতীত কৃদন্ত রূপের ক্রিয়া যা প্রত্যাশিত কিন্তু এখনো হয়নি",
          acceptedTypes: ["past_participle"],
          examples: ["finished", "decided", "told"],
        },
      ],
      examples: [
        {
          en: "I haven't finished my homework yet.",
          bn: "আমি এখনো আমার বাড়ির কাজ শেষ করিনি।",
          slotValues: { "PAST PARTICIPLE": "finished my homework" },
          topicArea: "education",
        },
        {
          en: "I haven't decided what to eat yet.",
          bn: "আমি এখনো কী খাব তা ঠিক করিনি।",
          slotValues: { "PAST PARTICIPLE": "decided what to eat" },
          topicArea: "food",
        },
        {
          en: "I haven't told my parents yet.",
          bn: "আমি এখনো আমার বাবা-মাকে বলিনি।",
          slotValues: { "PAST PARTICIPLE": "told my parents" },
          topicArea: "relationships",
        },
        {
          en: "I haven't replied to the email yet.",
          bn: "আমি এখনো ইমেইলের উত্তর দিইনি।",
          slotValues: { "PAST PARTICIPLE": "replied to the email" },
          topicArea: "work",
        },
        {
          en: "I haven't booked the hotel yet.",
          bn: "আমি এখনো হোটেল বুক করিনি।",
          slotValues: { "PAST PARTICIPLE": "booked the hotel" },
          topicArea: "travel",
        },
        {
          en: "I haven't taken my medicine yet.",
          bn: "আমি এখনো আমার ওষুধ খাইনি।",
          slotValues: { "PAST PARTICIPLE": "taken my medicine" },
          topicArea: "health",
        },
        {
          en: "I haven't paid the electricity bill yet.",
          bn: "আমি এখনো বিদ্যুৎ বিল দিইনি।",
          slotValues: { "PAST PARTICIPLE": "paid the electricity bill" },
          topicArea: "daily_life",
        },
        {
          en: "I haven't bought a gift for her yet.",
          bn: "আমি এখনো তার জন্য উপহার কিনিনি।",
          slotValues: { "PAST PARTICIPLE": "bought a gift for her" },
          topicArea: "shopping",
        },
        {
          en: "I haven't submitted my application yet.",
          bn: "আমি এখনো আমার আবেদনপত্র জমা দিইনি।",
          slotValues: { "PAST PARTICIPLE": "submitted my application" },
          topicArea: "work",
        },
        {
          en: "I haven't read the new chapter yet.",
          bn: "আমি এখনো নতুন অধ্যায়টি পড়িনি।",
          slotValues: { "PAST PARTICIPLE": "read the new chapter" },
          topicArea: "education",
        },
        {
          en: "I haven't eaten lunch yet.",
          bn: "আমি এখনো দুপুরের খাবার খাইনি।",
          slotValues: { "PAST PARTICIPLE": "eaten lunch" },
          topicArea: "food",
        },
        {
          en: "I haven't called the doctor yet.",
          bn: "আমি এখনো ডাক্তারকে ফোন করিনি।",
          slotValues: { "PAST PARTICIPLE": "called the doctor" },
          topicArea: "health",
        },
        {
          en: "I haven't cleaned my room yet.",
          bn: "আমি এখনো আমার ঘর পরিষ্কার করিনি।",
          slotValues: { "PAST PARTICIPLE": "cleaned my room" },
          topicArea: "daily_life",
        },
        {
          en: "I haven't packed my bags yet.",
          bn: "আমি এখনো আমার ব্যাগ গোছাইনি।",
          slotValues: { "PAST PARTICIPLE": "packed my bags" },
          topicArea: "travel",
        },
        {
          en: "I haven't apologized to her yet.",
          bn: "আমি এখনো তার কাছে ক্ষমা চাইনি।",
          slotValues: { "PAST PARTICIPLE": "apologized to her" },
          topicArea: "relationships",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "'Yet' goes at the end of the sentence and implies the action is expected to happen. It is only used in negative and question forms with the present perfect.",
      usageNote_bn:
        "'Yet' বাক্যের শেষে বসে এবং বোঝায় যে কাজটি ঘটবে বলে প্রত্যাশা করা হচ্ছে। এটি শুধুমাত্র বর্তমান পূর্ণ কালের নেতিবাচক এবং প্রশ্ন রূপে ব্যবহৃত হয়।",
      combinableWith: ["C5.1", "C5.4"],
      banglaStructureMap:
        "আমি (Subject) + এখনো (Adverb) + [PAST PARTICIPLE] (Verb) + করিনি (Neg Perfect Aux)",
    },
    {
      id: "C5.6",
      formula: "I've just [PAST PARTICIPLE]",
      formula_bn: "আমি এইমাত্র [কাজ সম্পন্ন করেছি]",
      patternName: "Recent Completion (Have Just)",
      patternName_bn: "সাম্প্রতিক সমাপ্তি (Have Just)",
      slots: [
        {
          name: "PAST PARTICIPLE",
          description:
            "A verb in past participle form for something completed moments ago",
          description_bn:
            "কিছুক্ষণ আগে সম্পন্ন হওয়া কিছুর জন্য অতীত কৃদন্ত রূপের একটি ক্রিয়া",
          acceptedTypes: ["past_participle"],
          examples: ["finished the report", "arrived", "heard the news"],
        },
      ],
      examples: [
        {
          en: "I've just finished the report.",
          bn: "আমি এইমাত্র রিপোর্ট শেষ করেছি।",
          slotValues: { "PAST PARTICIPLE": "finished the report" },
          topicArea: "work",
        },
        {
          en: "She's just arrived.",
          bn: "সে এইমাত্র পৌঁছেছে।",
          slotValues: { "PAST PARTICIPLE": "arrived" },
          topicArea: "daily_life",
        },
        {
          en: "We've just heard the news.",
          bn: "আমরা এইমাত্র খবরটি শুনেছি।",
          slotValues: { "PAST PARTICIPLE": "heard the news" },
          topicArea: "daily_life",
        },
        {
          en: "I've just eaten breakfast.",
          bn: "আমি এইমাত্র নাস্তা খেয়েছি।",
          slotValues: { "PAST PARTICIPLE": "eaten breakfast" },
          topicArea: "food",
        },
        {
          en: "He's just left for the airport.",
          bn: "সে এইমাত্র বিমানবন্দরের উদ্দেশ্যে রওনা দিয়েছে।",
          slotValues: { "PAST PARTICIPLE": "left for the airport" },
          topicArea: "travel",
        },
        {
          en: "I've just spoken to the manager.",
          bn: "আমি এইমাত্র ম্যানেজারের সাথে কথা বলেছি।",
          slotValues: { "PAST PARTICIPLE": "spoken to the manager" },
          topicArea: "work",
        },
        {
          en: "She's just passed her driving test.",
          bn: "সে এইমাত্র ড্রাইভিং পরীক্ষায় পাস করেছে।",
          slotValues: { "PAST PARTICIPLE": "passed her driving test" },
          topicArea: "education",
        },
        {
          en: "I've just taken my medicine.",
          bn: "আমি এইমাত্র আমার ওষুধ খেয়েছি।",
          slotValues: { "PAST PARTICIPLE": "taken my medicine" },
          topicArea: "health",
        },
        {
          en: "We've just booked our hotel.",
          bn: "আমরা এইমাত্র আমাদের হোটেল বুক করেছি।",
          slotValues: { "PAST PARTICIPLE": "booked our hotel" },
          topicArea: "travel",
        },
        {
          en: "He's just called his mother.",
          bn: "সে এইমাত্র তার মাকে ফোন করেছে।",
          slotValues: { "PAST PARTICIPLE": "called his mother" },
          topicArea: "relationships",
        },
        {
          en: "I've just bought a new laptop.",
          bn: "আমি এইমাত্র একটি নতুন ল্যাপটপ কিনেছি।",
          slotValues: { "PAST PARTICIPLE": "bought a new laptop" },
          topicArea: "shopping",
        },
        {
          en: "She's just finished cleaning the house.",
          bn: "সে এইমাত্র ঘর পরিষ্কার করা শেষ করেছে।",
          slotValues: { "PAST PARTICIPLE": "finished cleaning the house" },
          topicArea: "daily_life",
        },
        {
          en: "I've just submitted my assignment.",
          bn: "আমি এইমাত্র আমার অ্যাসাইনমেন্ট জমা দিয়েছি।",
          slotValues: { "PAST PARTICIPLE": "submitted my assignment" },
          topicArea: "education",
        },
        {
          en: "We've just tried that new restaurant.",
          bn: "আমরা এইমাত্র সেই নতুন রেস্তোরাঁটি ট্রাই করেছি।",
          slotValues: { "PAST PARTICIPLE": "tried that new restaurant" },
          topicArea: "food",
        },
        {
          en: "He's just recovered from the flu.",
          bn: "সে এইমাত্র ফ্লু থেকে সেরে উঠেছে।",
          slotValues: { "PAST PARTICIPLE": "recovered from the flu" },
          topicArea: "health",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "'Have/has just + past participle' emphasizes that an action was completed very recently, moments ago. In British English, this is the preferred form. In American English, the simple past with 'just' is also common.",
      usageNote_bn:
        "'Have/has just + past participle' জোর দেয় যে একটি কাজ খুব সম্প্রতি, কিছুক্ষণ আগে সম্পন্ন হয়েছে। ব্রিটিশ ইংরেজিতে এটি পছন্দের রূপ। আমেরিকান ইংরেজিতে 'just'-সহ সিম্পল পাস্টও সাধারণ।",
      combinableWith: ["C5.1", "C5.5"],
      banglaStructureMap:
        "আমি (Subject) + এইমাত্র (Adverb) + [PAST PARTICIPLE] (Verb) + করেছি (Perfect Aux)",
    },
    {
      id: "C5.7",
      formula: "So far, I've [PAST PARTICIPLE] [AMOUNT/THING]",
      formula_bn: "এখন পর্যন্ত, আমি [পরিমাণ/জিনিস] [সম্পন্ন করেছি]",
      patternName: "Progress So Far",
      patternName_bn: "এখন পর্যন্ত অগ্রগতি",
      slots: [
        {
          name: "PAST PARTICIPLE",
          description:
            "A verb in past participle form for the progress or achievement so far",
          description_bn:
            "এখন পর্যন্ত অগ্রগতি বা অর্জনের জন্য অতীত কৃদন্ত রূপের একটি ক্রিয়া",
          acceptedTypes: ["past_participle"],
          examples: ["read three chapters", "visited five countries", "completed half the work"],
        },
        {
          name: "AMOUNT/THING",
          description:
            "A noun phrase specifying the quantity or thing achieved",
          description_bn:
            "অর্জিত পরিমাণ বা জিনিস নির্দিষ্ট করে একটি বিশেষ্য পদ",
          acceptedTypes: ["noun", "noun_phrase"],
          examples: ["three chapters", "five countries", "half the work"],
        },
      ],
      examples: [
        {
          en: "So far, I've read three chapters.",
          bn: "এখন পর্যন্ত, আমি তিনটি অধ্যায় পড়েছি।",
          slotValues: { "PAST PARTICIPLE": "read", "AMOUNT/THING": "three chapters" },
          topicArea: "education",
        },
        {
          en: "So far, we've visited five countries.",
          bn: "এখন পর্যন্ত, আমরা পাঁচটি দেশ ঘুরেছি।",
          slotValues: { "PAST PARTICIPLE": "visited", "AMOUNT/THING": "five countries" },
          topicArea: "travel",
        },
        {
          en: "So far, she's completed half the work.",
          bn: "এখন পর্যন্ত, সে অর্ধেক কাজ শেষ করেছে।",
          slotValues: { "PAST PARTICIPLE": "completed", "AMOUNT/THING": "half the work" },
          topicArea: "work",
        },
        {
          en: "So far, I've saved ten thousand taka.",
          bn: "এখন পর্যন্ত, আমি দশ হাজার টাকা জমিয়েছি।",
          slotValues: { "PAST PARTICIPLE": "saved", "AMOUNT/THING": "ten thousand taka" },
          topicArea: "shopping",
        },
        {
          en: "So far, he's lost five kilograms.",
          bn: "এখন পর্যন্ত, সে পাঁচ কেজি ওজন কমিয়েছে।",
          slotValues: { "PAST PARTICIPLE": "lost", "AMOUNT/THING": "five kilograms" },
          topicArea: "health",
        },
        {
          en: "So far, I've cooked seven different recipes this month.",
          bn: "এখন পর্যন্ত, আমি এই মাসে সাতটি ভিন্ন রেসিপি রান্না করেছি।",
          slotValues: { "PAST PARTICIPLE": "cooked", "AMOUNT/THING": "seven different recipes" },
          topicArea: "food",
        },
        {
          en: "So far, we've finished two projects.",
          bn: "এখন পর্যন্ত, আমরা দুটি প্রকল্প শেষ করেছি।",
          slotValues: { "PAST PARTICIPLE": "finished", "AMOUNT/THING": "two projects" },
          topicArea: "work",
        },
        {
          en: "So far, I've walked eight thousand steps today.",
          bn: "এখন পর্যন্ত, আমি আজ আট হাজার পদক্ষেপ হেঁটেছি।",
          slotValues: { "PAST PARTICIPLE": "walked", "AMOUNT/THING": "eight thousand steps" },
          topicArea: "health",
        },
        {
          en: "So far, she's written four essays.",
          bn: "এখন পর্যন্ত, সে চারটি রচনা লিখেছে।",
          slotValues: { "PAST PARTICIPLE": "written", "AMOUNT/THING": "four essays" },
          topicArea: "education",
        },
        {
          en: "So far, I've cleaned three rooms.",
          bn: "এখন পর্যন্ত, আমি তিনটি ঘর পরিষ্কার করেছি।",
          slotValues: { "PAST PARTICIPLE": "cleaned", "AMOUNT/THING": "three rooms" },
          topicArea: "daily_life",
        },
        {
          en: "So far, we've tried six restaurants in this city.",
          bn: "এখন পর্যন্ত, আমরা এই শহরে ছয়টি রেস্তোরাঁ ট্রাই করেছি।",
          slotValues: { "PAST PARTICIPLE": "tried", "AMOUNT/THING": "six restaurants" },
          topicArea: "food",
        },
        {
          en: "So far, I've contacted ten clients.",
          bn: "এখন পর্যন্ত, আমি দশজন ক্লায়েন্টের সাথে যোগাযোগ করেছি।",
          slotValues: { "PAST PARTICIPLE": "contacted", "AMOUNT/THING": "ten clients" },
          topicArea: "work",
        },
        {
          en: "So far, he's traveled to three cities on this trip.",
          bn: "এখন পর্যন্ত, সে এই ভ্রমণে তিনটি শহর ঘুরেছে।",
          slotValues: { "PAST PARTICIPLE": "traveled to", "AMOUNT/THING": "three cities" },
          topicArea: "travel",
        },
        {
          en: "So far, I've met all my old friends.",
          bn: "এখন পর্যন্ত, আমি আমার সব পুরোনো বন্ধুদের সাথে দেখা করেছি।",
          slotValues: { "PAST PARTICIPLE": "met", "AMOUNT/THING": "all my old friends" },
          topicArea: "relationships",
        },
        {
          en: "So far, she's bought presents for everyone.",
          bn: "এখন পর্যন্ত, সে সবার জন্য উপহার কিনেছে।",
          slotValues: { "PAST PARTICIPLE": "bought", "AMOUNT/THING": "presents for everyone" },
          topicArea: "shopping",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "'So far' means 'up to this point in time' and is used with the present perfect to describe progress or achievements that may continue. It emphasizes that more can still happen.",
      usageNote_bn:
        "'So far' অর্থ 'এই মুহূর্ত পর্যন্ত' এবং চলমান থাকতে পারে এমন অগ্রগতি বা অর্জন বর্ণনা করতে প্রেজেন্ট পারফেক্টের সাথে ব্যবহৃত হয়। এটি জোর দেয় যে আরও ঘটতে পারে।",
      combinableWith: ["C5.1", "C5.4"],
      banglaStructureMap:
        "এখন পর্যন্ত (Adverb) + আমি (Subject) + [AMOUNT/THING] (Object) + [PP] (Verb) + করেছি (Perfect Aux)",
    },
  ],
};
