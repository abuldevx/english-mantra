import { PatternCategory } from "@/types/pattern";

export const categoryK10: PatternCategory = {
  id: "K10",
  slug: "paraphrasing-summarizing",
  name: "Paraphrasing & Summarizing",
  name_bn: "ভাবানুবাদ ও সারসংক্ষেপ",
  description:
    "Learn to rephrase ideas and summarize information in different words.",
  description_bn:
    "ভিন্ন শব্দে ধারণা পুনর্গঠন করতে এবং তথ্যের সারসংক্ষেপ করতে শিখুন।",
  icon: "📝",
  group: "K",
  groupName: "Reported Speech & Communication",
  groupName_bn: "পরোক্ষ উক্তি ও যোগাযোগ",
  difficulty: "intermediate",
  patterns: [
    {
      id: "K10.1",
      formula: "In other words, [CLAUSE]",
      formula_bn: "অন্যভাবে বলতে গেলে, [উপবাক্য]",
      patternName: "Rephrasing for Clarity",
      patternName_bn: "স্পষ্টতার জন্য পুনর্গঠন",
      slots: [
        {
          name: "CLAUSE",
          description: "The rephrased version of what was said",
          description_bn: "যা বলা হয়েছে তার পুনর্গঠিত রূপ",
          acceptedTypes: ["clause"],
          examples: [
            "we need to start over",
            "he doesn't agree",
            "the project is behind schedule",
          ],
        },
      ],
      examples: [
        {
          en: "The deadline has passed. In other words, we need to start over.",
          bn: "ডেডলাইন পার হয়ে গেছে। অন্যভাবে বলতে গেলে, আমাদের আবার শুরু করতে হবে।",
          slotValues: { CLAUSE: "we need to start over" },
          topicArea: "work",
        },
        {
          en: "He shook his head. In other words, he doesn't agree.",
          bn: "সে মাথা নেড়েছে। অন্যভাবে বলতে গেলে, সে রাজি নয়।",
          slotValues: { CLAUSE: "he doesn't agree" },
          topicArea: "daily_life",
        },
        {
          en: "The budget has been cut by half. In other words, the project is behind schedule.",
          bn: "বাজেট অর্ধেক কমানো হয়েছে। অন্যভাবে বলতে গেলে, প্রজেক্ট পিছিয়ে পড়েছে।",
          slotValues: {
            CLAUSE: "the project is behind schedule",
          },
          topicArea: "work",
        },
        {
          en: "The dish uses no oil. In other words, it's very healthy.",
          bn: "এই পদে তেল ব্যবহার হয়নি। অন্যভাবে বলতে গেলে, এটা খুবই স্বাস্থ্যকর।",
          slotValues: { CLAUSE: "it's very healthy" },
          topicArea: "food",
        },
        {
          en: "The flights are fully booked. In other words, we can't travel this weekend.",
          bn: "সব ফ্লাইট বুক হয়ে গেছে। অন্যভাবে বলতে গেলে, এই সপ্তাহান্তে আমরা ভ্রমণ করতে পারব না।",
          slotValues: {
            CLAUSE: "we can't travel this weekend",
          },
          topicArea: "travel",
        },
        {
          en: "Your blood pressure is elevated. In other words, you need to reduce salt.",
          bn: "আপনার রক্তচাপ বেশি। অন্যভাবে বলতে গেলে, আপনাকে লবণ কমাতে হবে।",
          slotValues: { CLAUSE: "you need to reduce salt" },
          topicArea: "health",
        },
        {
          en: "The syllabus has been updated. In other words, we need to buy new books.",
          bn: "সিলেবাস আপডেট হয়েছে। অন্যভাবে বলতে গেলে, নতুন বই কিনতে হবে।",
          slotValues: {
            CLAUSE: "we need to buy new books",
          },
          topicArea: "education",
        },
        {
          en: "She hasn't replied to any messages. In other words, she's avoiding us.",
          bn: "সে কোনো মেসেজের উত্তর দেয়নি। অন্যভাবে বলতে গেলে, সে আমাদের এড়িয়ে চলছে।",
          slotValues: { CLAUSE: "she's avoiding us" },
          topicArea: "relationships",
        },
        {
          en: "The sale ends today. In other words, buy it now or pay full price.",
          bn: "সেল আজ শেষ। অন্যভাবে বলতে গেলে, এখনই কেনো নয়তো পুরো দাম দিতে হবে।",
          slotValues: {
            CLAUSE: "buy it now or pay full price",
          },
          topicArea: "shopping",
        },
        {
          en: "He said it would take some time. In other words, don't expect quick results.",
          bn: "সে বলেছে এটাতে সময় লাগবে। অন্যভাবে বলতে গেলে, দ্রুত ফলাফল আশা করো না।",
          slotValues: {
            CLAUSE: "don't expect quick results",
          },
          topicArea: "work",
        },
        {
          en: "The recipe requires many ingredients. In other words, it's quite complicated.",
          bn: "রেসিপিতে অনেক উপকরণ লাগে। অন্যভাবে বলতে গেলে, এটা বেশ জটিল।",
          slotValues: { CLAUSE: "it's quite complicated" },
          topicArea: "food",
        },
        {
          en: "The visa takes three weeks to process. In other words, apply now if you want to travel next month.",
          bn: "ভিসা প্রসেস হতে তিন সপ্তাহ লাগে। অন্যভাবে বলতে গেলে, আগামী মাসে ভ্রমণ করতে চাইলে এখনই আবেদন করো।",
          slotValues: {
            CLAUSE: "apply now if you want to travel next month",
          },
          topicArea: "travel",
        },
        {
          en: "The doctor wants to see you again. In other words, the treatment isn't finished yet.",
          bn: "ডাক্তার আপনাকে আবার দেখতে চান। অন্যভাবে বলতে গেলে, চিকিৎসা এখনো শেষ হয়নি।",
          slotValues: {
            CLAUSE: "the treatment isn't finished yet",
          },
          topicArea: "health",
        },
        {
          en: "The exam covers the entire book. In other words, everything is important.",
          bn: "পরীক্ষায় পুরো বই আসবে। অন্যভাবে বলতে গেলে, সবকিছুই গুরুত্বপূর্ণ।",
          slotValues: { CLAUSE: "everything is important" },
          topicArea: "education",
        },
        {
          en: "He cancelled dinner plans. In other words, he's not interested.",
          bn: "সে রাতের খাবারের পরিকল্পনা বাতিল করেছে। অন্যভাবে বলতে গেলে, সে আগ্রহী নয়।",
          slotValues: { CLAUSE: "he's not interested" },
          topicArea: "relationships",
        },
      ],
      formality: "polite",
      difficulty: "intermediate",
      usageNote:
        "'In other words' introduces a simpler or clearer version of what was just said. It helps the listener understand better.",
      usageNote_bn:
        "'In other words' যা বলা হয়েছে তার সহজ বা স্পষ্ট রূপ পরিচয় করায়। এটি শ্রোতাকে ভালোভাবে বুঝতে সাহায্য করে।",
    },
    {
      id: "K10.2",
      formula: "To put it simply, [CLAUSE]",
      formula_bn: "সহজভাবে বলতে গেলে, [উপবাক্য]",
      patternName: "Simplifying a Point",
      patternName_bn: "একটি বিষয় সরল করা",
      slots: [
        {
          name: "CLAUSE",
          description: "A simplified version of the point",
          description_bn: "বিষয়ের সরলীকৃত রূপ",
          acceptedTypes: ["clause"],
          examples: [
            "we ran out of money",
            "the plan didn't work",
            "we need more time",
          ],
        },
      ],
      examples: [
        {
          en: "To put it simply, we ran out of money.",
          bn: "সহজভাবে বলতে গেলে, আমাদের টাকা শেষ হয়ে গেছে।",
          slotValues: { CLAUSE: "we ran out of money" },
          topicArea: "shopping",
        },
        {
          en: "To put it simply, the plan didn't work.",
          bn: "সহজভাবে বলতে গেলে, পরিকল্পনা কাজ করেনি।",
          slotValues: { CLAUSE: "the plan didn't work" },
          topicArea: "work",
        },
        {
          en: "To put it simply, we need more time.",
          bn: "সহজভাবে বলতে গেলে, আমাদের আরও সময় দরকার।",
          slotValues: { CLAUSE: "we need more time" },
          topicArea: "work",
        },
        {
          en: "To put it simply, too much sugar is bad for you.",
          bn: "সহজভাবে বলতে গেলে, অতিরিক্ত চিনি শরীরের জন্য খারাপ।",
          slotValues: {
            CLAUSE: "too much sugar is bad for you",
          },
          topicArea: "health",
        },
        {
          en: "To put it simply, the test was very hard.",
          bn: "সহজভাবে বলতে গেলে, পরীক্ষা অনেক কঠিন ছিল।",
          slotValues: { CLAUSE: "the test was very hard" },
          topicArea: "education",
        },
        {
          en: "To put it simply, they loved the food.",
          bn: "সহজভাবে বলতে গেলে, তাদের খাবার খুব ভালো লেগেছে।",
          slotValues: { CLAUSE: "they loved the food" },
          topicArea: "food",
        },
        {
          en: "To put it simply, the trip was a disaster.",
          bn: "সহজভাবে বলতে গেলে, ভ্রমণটা বিপর্যয় ছিল।",
          slotValues: { CLAUSE: "the trip was a disaster" },
          topicArea: "travel",
        },
        {
          en: "To put it simply, she's not coming back.",
          bn: "সহজভাবে বলতে গেলে, সে ফিরে আসছে না।",
          slotValues: { CLAUSE: "she's not coming back" },
          topicArea: "relationships",
        },
        {
          en: "To put it simply, the product is too expensive for what it offers.",
          bn: "সহজভাবে বলতে গেলে, যা দেয় তার তুলনায় পণ্যটি অনেক দামি।",
          slotValues: {
            CLAUSE: "the product is too expensive for what it offers",
          },
          topicArea: "shopping",
        },
        {
          en: "To put it simply, practice is the key to success.",
          bn: "সহজভাবে বলতে গেলে, অনুশীলনই সাফল্যের চাবিকাঠি।",
          slotValues: {
            CLAUSE: "practice is the key to success",
          },
          topicArea: "education",
        },
        {
          en: "To put it simply, the company needs to change direction.",
          bn: "সহজভাবে বলতে গেলে, কোম্পানিকে দিক পরিবর্তন করতে হবে।",
          slotValues: {
            CLAUSE: "the company needs to change direction",
          },
          topicArea: "work",
        },
        {
          en: "To put it simply, you need to eat less and move more.",
          bn: "সহজভাবে বলতে গেলে, কম খেতে হবে আর বেশি নড়াচড়া করতে হবে।",
          slotValues: {
            CLAUSE: "you need to eat less and move more",
          },
          topicArea: "health",
        },
        {
          en: "To put it simply, fresh ingredients make better food.",
          bn: "সহজভাবে বলতে গেলে, তাজা উপকরণে ভালো খাবার হয়।",
          slotValues: {
            CLAUSE: "fresh ingredients make better food",
          },
          topicArea: "food",
        },
        {
          en: "To put it simply, the longer the journey, the more you learn.",
          bn: "সহজভাবে বলতে গেলে, যাত্রা যত দীর্ঘ, শেখাও তত বেশি।",
          slotValues: {
            CLAUSE: "the longer the journey, the more you learn",
          },
          topicArea: "travel",
        },
        {
          en: "To put it simply, communication is the foundation of any relationship.",
          bn: "সহজভাবে বলতে গেলে, যোগাযোগ যেকোনো সম্পর্কের ভিত্তি।",
          slotValues: {
            CLAUSE: "communication is the foundation of any relationship",
          },
          topicArea: "relationships",
        },
      ],
      formality: "polite",
      difficulty: "intermediate",
      usageNote:
        "'To put it simply' signals that you are about to give a shorter, easier-to-understand version of something complex.",
      usageNote_bn:
        "'To put it simply' বোঝায় যে আপনি জটিল কিছুর একটি সংক্ষিপ্ত, সহজবোধ্য সংস্করণ দিতে যাচ্ছেন।",
    },
    {
      id: "K10.3",
      formula: "What I mean is [CLAUSE]",
      formula_bn: "আমি যা বলতে চাইছি তা হলো [উপবাক্য]",
      patternName: "Clarifying Your Meaning",
      patternName_bn: "আপনার অর্থ স্পষ্ট করা",
      slots: [
        {
          name: "CLAUSE",
          description: "A clearer expression of your point",
          description_bn: "আপনার বক্তব্যের স্পষ্ট প্রকাশ",
          acceptedTypes: ["clause"],
          examples: [
            "we should wait",
            "it's not the right time",
            "everyone needs to contribute",
          ],
        },
      ],
      examples: [
        {
          en: "What I mean is, we should wait before making a decision.",
          bn: "আমি যা বলতে চাইছি তা হলো, সিদ্ধান্ত নেওয়ার আগে আমাদের অপেক্ষা করা উচিত।",
          slotValues: {
            CLAUSE: "we should wait before making a decision",
          },
          topicArea: "work",
        },
        {
          en: "What I mean is, it's not the right time to travel.",
          bn: "আমি যা বলতে চাইছি তা হলো, ভ্রমণের উপযুক্ত সময় এটা নয়।",
          slotValues: {
            CLAUSE: "it's not the right time to travel",
          },
          topicArea: "travel",
        },
        {
          en: "What I mean is, everyone needs to contribute equally.",
          bn: "আমি যা বলতে চাইছি তা হলো, সবাইকে সমানভাবে অবদান রাখতে হবে।",
          slotValues: {
            CLAUSE: "everyone needs to contribute equally",
          },
          topicArea: "work",
        },
        {
          en: "What I mean is, the food here is authentic.",
          bn: "আমি যা বলতে চাইছি তা হলো, এখানকার খাবার আসল।",
          slotValues: {
            CLAUSE: "the food here is authentic",
          },
          topicArea: "food",
        },
        {
          en: "What I mean is, exercise doesn't have to be boring.",
          bn: "আমি যা বলতে চাইছি তা হলো, ব্যায়াম বিরক্তিকর হতে হবে এমন না।",
          slotValues: {
            CLAUSE: "exercise doesn't have to be boring",
          },
          topicArea: "health",
        },
        {
          en: "What I mean is, we should study smarter, not harder.",
          bn: "আমি যা বলতে চাইছি তা হলো, আমাদের বেশি নয়, বুদ্ধিমানভাবে পড়া উচিত।",
          slotValues: {
            CLAUSE: "we should study smarter, not harder",
          },
          topicArea: "education",
        },
        {
          en: "What I mean is, I'm not angry, just disappointed.",
          bn: "আমি যা বলতে চাইছি তা হলো, আমি রাগ করিনি, শুধু হতাশ।",
          slotValues: {
            CLAUSE: "I'm not angry, just disappointed",
          },
          topicArea: "relationships",
        },
        {
          en: "What I mean is, quality matters more than quantity.",
          bn: "আমি যা বলতে চাইছি তা হলো, পরিমাণের চেয়ে মান বেশি গুরুত্বপূর্ণ।",
          slotValues: {
            CLAUSE: "quality matters more than quantity",
          },
          topicArea: "shopping",
        },
        {
          en: "What I mean is, you should take a break if you're feeling overwhelmed.",
          bn: "আমি যা বলতে চাইছি তা হলো, চাপ বেশি লাগলে একটু বিরতি নেওয়া উচিত।",
          slotValues: {
            CLAUSE: "you should take a break if you're feeling overwhelmed",
          },
          topicArea: "daily_life",
        },
        {
          en: "What I mean is, homemade food is always better.",
          bn: "আমি যা বলতে চাইছি তা হলো, ঘরে তৈরি খাবার সবসময় ভালো।",
          slotValues: {
            CLAUSE: "homemade food is always better",
          },
          topicArea: "food",
        },
        {
          en: "What I mean is, the project needs a fresh approach.",
          bn: "আমি যা বলতে চাইছি তা হলো, প্রজেক্টে নতুন দৃষ্টিভঙ্গি দরকার।",
          slotValues: {
            CLAUSE: "the project needs a fresh approach",
          },
          topicArea: "work",
        },
        {
          en: "What I mean is, we should explore more before deciding where to go.",
          bn: "আমি যা বলতে চাইছি তা হলো, কোথায় যাবো ঠিক করার আগে আরও খুঁজে দেখা উচিত।",
          slotValues: {
            CLAUSE: "we should explore more before deciding where to go",
          },
          topicArea: "travel",
        },
        {
          en: "What I mean is, prevention is better than cure.",
          bn: "আমি যা বলতে চাইছি তা হলো, প্রতিকারের চেয়ে প্রতিরোধ ভালো।",
          slotValues: {
            CLAUSE: "prevention is better than cure",
          },
          topicArea: "health",
        },
        {
          en: "What I mean is, you can learn a lot from your mistakes.",
          bn: "আমি যা বলতে চাইছি তা হলো, ভুল থেকে অনেক কিছু শেখা যায়।",
          slotValues: {
            CLAUSE: "you can learn a lot from your mistakes",
          },
          topicArea: "education",
        },
        {
          en: "What I mean is, I care about you and want the best for you.",
          bn: "আমি যা বলতে চাইছি তা হলো, আমি তোমার জন্য চিন্তিত এবং তোমার ভালো চাই।",
          slotValues: {
            CLAUSE: "I care about you and want the best for you",
          },
          topicArea: "relationships",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "'What I mean is' is used to clarify or correct something you've said. It helps prevent misunderstandings.",
      usageNote_bn:
        "'What I mean is' আপনি যা বলেছেন তা স্পষ্ট করতে বা সংশোধন করতে ব্যবহৃত হয়। এটি ভুল বোঝাবুঝি এড়াতে সাহায্য করে।",
    },
    {
      id: "K10.4",
      formula: "Basically, [CLAUSE]",
      formula_bn: "মূলত, [উপবাক্য]",
      patternName: "Summarizing Briefly",
      patternName_bn: "সংক্ষেপে সারসংক্ষেপ",
      slots: [
        {
          name: "CLAUSE",
          description: "A brief summary of the main point",
          description_bn: "মূল বিষয়ের সংক্ষিপ্ত সারাংশ",
          acceptedTypes: ["clause"],
          examples: [
            "we need to try harder",
            "everything went well",
            "the plan is to expand",
          ],
        },
      ],
      examples: [
        {
          en: "Basically, we need to try harder.",
          bn: "মূলত, আমাদের আরও চেষ্টা করতে হবে।",
          slotValues: { CLAUSE: "we need to try harder" },
          topicArea: "work",
        },
        {
          en: "Basically, everything went well.",
          bn: "মূলত, সবকিছু ভালোভাবে হয়েছে।",
          slotValues: { CLAUSE: "everything went well" },
          topicArea: "daily_life",
        },
        {
          en: "Basically, the plan is to expand the business.",
          bn: "মূলত, পরিকল্পনা হলো ব্যবসা বড় করা।",
          slotValues: {
            CLAUSE: "the plan is to expand the business",
          },
          topicArea: "work",
        },
        {
          en: "Basically, you just mix everything together and cook it.",
          bn: "মূলত, সবকিছু একসাথে মিশিয়ে রান্না করলেই হবে।",
          slotValues: {
            CLAUSE: "you just mix everything together and cook it",
          },
          topicArea: "food",
        },
        {
          en: "Basically, the train takes you straight to Chattogram.",
          bn: "মূলত, ট্রেন তোমাকে সরাসরি চট্টগ্রাম নিয়ে যাবে।",
          slotValues: {
            CLAUSE: "the train takes you straight to Chattogram",
          },
          topicArea: "travel",
        },
        {
          en: "Basically, drink more water and eat less salt.",
          bn: "মূলত, বেশি পানি খাও আর কম লবণ খাও।",
          slotValues: {
            CLAUSE: "drink more water and eat less salt",
          },
          topicArea: "health",
        },
        {
          en: "Basically, the exam tests your understanding, not memorization.",
          bn: "মূলত, পরীক্ষা তোমার বোধশক্তি যাচাই করে, মুখস্থ নয়।",
          slotValues: {
            CLAUSE: "the exam tests your understanding, not memorization",
          },
          topicArea: "education",
        },
        {
          en: "Basically, they had a misunderstanding and stopped talking.",
          bn: "মূলত, তাদের ভুল বোঝাবুঝি হয়েছে এবং কথা বন্ধ হয়ে গেছে।",
          slotValues: {
            CLAUSE: "they had a misunderstanding and stopped talking",
          },
          topicArea: "relationships",
        },
        {
          en: "Basically, the cheaper one is just as good.",
          bn: "মূলত, সস্তাটাও ঠিক ততটাই ভালো।",
          slotValues: {
            CLAUSE: "the cheaper one is just as good",
          },
          topicArea: "shopping",
        },
        {
          en: "Basically, the meeting was a waste of time.",
          bn: "মূলত, মিটিং সময়ের অপচয় ছিল।",
          slotValues: {
            CLAUSE: "the meeting was a waste of time",
          },
          topicArea: "work",
        },
        {
          en: "Basically, the curry is easy to make once you know the spices.",
          bn: "মূলত, মশলা জানা থাকলে তরকারি বানানো সহজ।",
          slotValues: {
            CLAUSE: "the curry is easy to make once you know the spices",
          },
          topicArea: "food",
        },
        {
          en: "Basically, you should start exercising today, not tomorrow.",
          bn: "মূলত, আগামীকাল নয়, আজই ব্যায়াম শুরু করা উচিত।",
          slotValues: {
            CLAUSE: "you should start exercising today, not tomorrow",
          },
          topicArea: "health",
        },
        {
          en: "Basically, the museum is worth visiting.",
          bn: "মূলত, জাদুঘরটি দেখার মতো।",
          slotValues: {
            CLAUSE: "the museum is worth visiting",
          },
          topicArea: "travel",
        },
        {
          en: "Basically, the more you read, the better your English gets.",
          bn: "মূলত, যত বেশি পড়বে, ইংরেজি তত ভালো হবে।",
          slotValues: {
            CLAUSE: "the more you read, the better your English gets",
          },
          topicArea: "education",
        },
        {
          en: "Basically, friends are like family you choose.",
          bn: "মূলত, বন্ধুরা হলো সেই পরিবার যা তুমি বেছে নাও।",
          slotValues: {
            CLAUSE: "friends are like family you choose",
          },
          topicArea: "relationships",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "'Basically' introduces the core point of something, stripping away unnecessary details. Common in both spoken and written English.",
      usageNote_bn:
        "'Basically' অপ্রয়োজনীয় বিস্তারিত বাদ দিয়ে মূল বিষয় তুলে ধরে। কথ্য ও লিখিত উভয় ইংরেজিতেই সাধারণ।",
    },
    {
      id: "K10.5",
      formula: "To sum up, [CLAUSE]",
      formula_bn: "সংক্ষেপে বলতে গেলে, [উপবাক্য]",
      patternName: "Final Summary",
      patternName_bn: "চূড়ান্ত সারসংক্ষেপ",
      slots: [
        {
          name: "CLAUSE",
          description: "A concluding summary statement",
          description_bn: "একটি উপসংহারমূলক সারাংশ বক্তব্য",
          acceptedTypes: ["clause"],
          examples: [
            "it was a productive day",
            "we need to improve our communication",
            "the trip was unforgettable",
          ],
        },
      ],
      examples: [
        {
          en: "To sum up, it was a productive day at work.",
          bn: "সংক্ষেপে বলতে গেলে, কাজের দিনটা ফলপ্রসূ ছিল।",
          slotValues: {
            CLAUSE: "it was a productive day at work",
          },
          topicArea: "work",
        },
        {
          en: "To sum up, we need to improve our communication.",
          bn: "সংক্ষেপে বলতে গেলে, আমাদের যোগাযোগ উন্নত করতে হবে।",
          slotValues: {
            CLAUSE: "we need to improve our communication",
          },
          topicArea: "work",
        },
        {
          en: "To sum up, the trip was unforgettable.",
          bn: "সংক্ষেপে বলতে গেলে, ভ্রমণটি অবিস্মরণীয় ছিল।",
          slotValues: {
            CLAUSE: "the trip was unforgettable",
          },
          topicArea: "travel",
        },
        {
          en: "To sum up, the food was great but the service was slow.",
          bn: "সংক্ষেপে বলতে গেলে, খাবার ভালো ছিল কিন্তু সেবা ধীর ছিল।",
          slotValues: {
            CLAUSE: "the food was great but the service was slow",
          },
          topicArea: "food",
        },
        {
          en: "To sum up, regular exercise can change your life.",
          bn: "সংক্ষেপে বলতে গেলে, নিয়মিত ব্যায়াম জীবন বদলে দিতে পারে।",
          slotValues: {
            CLAUSE: "regular exercise can change your life",
          },
          topicArea: "health",
        },
        {
          en: "To sum up, the course was both challenging and rewarding.",
          bn: "সংক্ষেপে বলতে গেলে, কোর্সটি চ্যালেঞ্জিং ও ফলপ্রসূ দুটোই ছিল।",
          slotValues: {
            CLAUSE: "the course was both challenging and rewarding",
          },
          topicArea: "education",
        },
        {
          en: "To sum up, honesty is the key to a good relationship.",
          bn: "সংক্ষেপে বলতে গেলে, সততা একটি ভালো সম্পর্কের চাবিকাঠি।",
          slotValues: {
            CLAUSE: "honesty is the key to a good relationship",
          },
          topicArea: "relationships",
        },
        {
          en: "To sum up, always compare prices before you buy.",
          bn: "সংক্ষেপে বলতে গেলে, কেনার আগে সবসময় দাম তুলনা করুন।",
          slotValues: {
            CLAUSE: "always compare prices before you buy",
          },
          topicArea: "shopping",
        },
        {
          en: "To sum up, the event was a huge success.",
          bn: "সংক্ষেপে বলতে গেলে, অনুষ্ঠান বিশাল সাফল্য ছিল।",
          slotValues: {
            CLAUSE: "the event was a huge success",
          },
          topicArea: "daily_life",
        },
        {
          en: "To sum up, Bangladesh has so much to offer travelers.",
          bn: "সংক্ষেপে বলতে গেলে, ভ্রমণকারীদের জন্য বাংলাদেশে অনেক কিছু আছে।",
          slotValues: {
            CLAUSE: "Bangladesh has so much to offer travelers",
          },
          topicArea: "travel",
        },
        {
          en: "To sum up, a balanced diet is essential for good health.",
          bn: "সংক্ষেপে বলতে গেলে, সুস্বাস্থ্যের জন্য সুষম খাদ্য অপরিহার্য।",
          slotValues: {
            CLAUSE: "a balanced diet is essential for good health",
          },
          topicArea: "food",
        },
        {
          en: "To sum up, the team performed beyond expectations.",
          bn: "সংক্ষেপে বলতে গেলে, দলটি প্রত্যাশার চেয়ে ভালো করেছে।",
          slotValues: {
            CLAUSE: "the team performed beyond expectations",
          },
          topicArea: "work",
        },
        {
          en: "To sum up, learning never stops.",
          bn: "সংক্ষেপে বলতে গেলে, শেখার শেষ নেই।",
          slotValues: { CLAUSE: "learning never stops" },
          topicArea: "education",
        },
        {
          en: "To sum up, prevention is always better and cheaper than treatment.",
          bn: "সংক্ষেপে বলতে গেলে, প্রতিরোধ সবসময় চিকিৎসার চেয়ে ভালো ও সস্তা।",
          slotValues: {
            CLAUSE: "prevention is always better and cheaper than treatment",
          },
          topicArea: "health",
        },
        {
          en: "To sum up, the people you meet along the way matter the most.",
          bn: "সংক্ষেপে বলতে গেলে, পথে যাদের সাথে দেখা হয় তারাই সবচেয়ে গুরুত্বপূর্ণ।",
          slotValues: {
            CLAUSE: "the people you meet along the way matter the most",
          },
          topicArea: "relationships",
        },
      ],
      formality: "polite",
      difficulty: "intermediate",
      usageNote:
        "'To sum up' is used at the end of a discussion or speech to give a final overview. It's common in presentations and essays.",
      usageNote_bn:
        "'To sum up' আলোচনা বা বক্তৃতার শেষে চূড়ান্ত সংক্ষিপ্তসার দিতে ব্যবহৃত হয়। প্রেজেন্টেশন ও রচনায় এটি সাধারণ।",
    },
  ],
};
