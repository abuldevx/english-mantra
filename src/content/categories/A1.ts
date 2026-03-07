import { PatternCategory } from "@/types/pattern";

export const categoryA1: PatternCategory = {
  id: "A1",
  slug: "expressing-wants-needs",
  name: "Expressing What You Want/Need",
  name_bn: "আপনি কী চান/প্রয়োজন তা প্রকাশ করা",
  description:
    "Learn how to express your wants and needs clearly in English using common patterns.",
  description_bn:
    "সাধারণ প্যাটার্ন ব্যবহার করে ইংরেজিতে আপনার চাওয়া ও প্রয়োজন স্পষ্টভাবে প্রকাশ করতে শিখুন।",
  icon: "🎯",
  group: "A",
  groupName: "Wanting, Needing & Preferences",
  groupName_bn: "চাওয়া, প্রয়োজন এবং পছন্দ",
  difficulty: "beginner",
  patterns: [
    {
      id: "A1.1",
      formula: "I want [THING]",
      formula_bn: "আমি [জিনিস] চাই",
      patternName: "Simple Want",
      patternName_bn: "সাধারণ চাওয়া",
      slots: [
        {
          name: "THING",
          description: "Any noun, noun phrase, or 'to + verb'",
          description_bn: "যেকোনো বিশেষ্য, বিশেষ্য পদবন্ধ, বা 'to + ক্রিয়া'",
          acceptedTypes: ["noun", "to_verb"],
          examples: ["water", "a new phone", "to go home"],
        },
      ],
      examples: [
        {
          en: "I want water.",
          bn: "আমি পানি চাই।",
          slotValues: { THING: "water" },
          topicArea: "daily_life",
        },
        {
          en: "I want a cup of tea.",
          bn: "আমি এক কাপ চা চাই।",
          slotValues: { THING: "a cup of tea" },
          topicArea: "food",
        },
        {
          en: "I want to go home.",
          bn: "আমি বাড়ি যেতে চাই।",
          slotValues: { THING: "to go home" },
          topicArea: "daily_life",
        },
        {
          en: "I want a promotion.",
          bn: "আমি পদোন্নতি চাই।",
          slotValues: { THING: "a promotion" },
          topicArea: "work",
        },
        {
          en: "I want some rest.",
          bn: "আমি একটু বিশ্রাম চাই।",
          slotValues: { THING: "some rest" },
          topicArea: "health",
        },
        {
          en: "I want to learn English.",
          bn: "আমি ইংরেজি শিখতে চাই।",
          slotValues: { THING: "to learn English" },
          topicArea: "education",
        },
        {
          en: "I want a window seat.",
          bn: "আমি জানালার পাশের সিট চাই।",
          slotValues: { THING: "a window seat" },
          topicArea: "travel",
        },
        {
          en: "I want two tickets.",
          bn: "আমি দুটো টিকিট চাই।",
          slotValues: { THING: "two tickets" },
          topicArea: "travel",
        },
        {
          en: "I want a better salary.",
          bn: "আমি আরও ভালো বেতন চাই।",
          slotValues: { THING: "a better salary" },
          topicArea: "work",
        },
        {
          en: "I want fried rice.",
          bn: "আমি ফ্রাইড রাইস চাই।",
          slotValues: { THING: "fried rice" },
          topicArea: "food",
        },
        {
          en: "I want to talk to you.",
          bn: "আমি তোমার সাথে কথা বলতে চাই।",
          slotValues: { THING: "to talk to you" },
          topicArea: "relationships",
        },
        {
          en: "I want a discount.",
          bn: "আমি ছাড় চাই।",
          slotValues: { THING: "a discount" },
          topicArea: "shopping",
        },
        {
          en: "I want to see a doctor.",
          bn: "আমি ডাক্তার দেখাতে চাই।",
          slotValues: { THING: "to see a doctor" },
          topicArea: "health",
        },
        {
          en: "I want a new laptop.",
          bn: "আমি একটি নতুন ল্যাপটপ চাই।",
          slotValues: { THING: "a new laptop" },
          topicArea: "shopping",
        },
        {
          en: "I want to spend more time with my family.",
          bn: "আমি পরিবারের সাথে আরও বেশি সময় কাটাতে চাই।",
          slotValues: { THING: "to spend more time with my family" },
          topicArea: "relationships",
        },
      ],
      formality: "casual",
      difficulty: "beginner",
      usageNote:
        "This is the most direct way to state a want. It can sound blunt in formal situations.",
      usageNote_bn:
        "এটি চাওয়া প্রকাশের সবচেয়ে সরাসরি উপায়। আনুষ্ঠানিক পরিস্থিতিতে এটি কিছুটা রূঢ় শোনাতে পারে।",
      combinableWith: ["A3.1"],
      responsePatterns: ["B1.1"],
      banglaStructureMap: "আমি (Subject) + [THING] (Object) + চাই (Verb)",
    },
    {
      id: "A1.2",
      formula: "I need [THING]",
      formula_bn: "আমার [জিনিস] দরকার",
      patternName: "Expressing Need",
      patternName_bn: "প্রয়োজন প্রকাশ",
      slots: [
        {
          name: "THING",
          description: "Any noun, noun phrase, or 'to + verb'",
          description_bn: "যেকোনো বিশেষ্য, বিশেষ্য পদবন্ধ, বা 'to + ক্রিয়া'",
          acceptedTypes: ["noun", "to_verb"],
          examples: ["help", "a pen", "to finish this"],
        },
      ],
      examples: [
        {
          en: "I need help.",
          bn: "আমার সাহায্য দরকার।",
          slotValues: { THING: "help" },
          topicArea: "daily_life",
        },
        {
          en: "I need a pen.",
          bn: "আমার একটা কলম দরকার।",
          slotValues: { THING: "a pen" },
          topicArea: "education",
        },
        {
          en: "I need to finish this report.",
          bn: "আমার এই রিপোর্টটি শেষ করা দরকার।",
          slotValues: { THING: "to finish this report" },
          topicArea: "work",
        },
        {
          en: "I need some medicine.",
          bn: "আমার কিছু ওষুধ দরকার।",
          slotValues: { THING: "some medicine" },
          topicArea: "health",
        },
        {
          en: "I need a taxi.",
          bn: "আমার একটা ট্যাক্সি দরকার।",
          slotValues: { THING: "a taxi" },
          topicArea: "travel",
        },
        {
          en: "I need more time.",
          bn: "আমার আরও সময় দরকার।",
          slotValues: { THING: "more time" },
          topicArea: "work",
        },
        {
          en: "I need to eat something.",
          bn: "আমার কিছু খাওয়া দরকার।",
          slotValues: { THING: "to eat something" },
          topicArea: "food",
        },
        {
          en: "I need a break.",
          bn: "আমার একটু বিরতি দরকার।",
          slotValues: { THING: "a break" },
          topicArea: "work",
        },
        {
          en: "I need to study harder.",
          bn: "আমার আরও কঠোর পড়াশোনা করা দরকার।",
          slotValues: { THING: "to study harder" },
          topicArea: "education",
        },
        {
          en: "I need a glass of water.",
          bn: "আমার এক গ্লাস পানি দরকার।",
          slotValues: { THING: "a glass of water" },
          topicArea: "daily_life",
        },
        {
          en: "I need new shoes.",
          bn: "আমার নতুন জুতো দরকার।",
          slotValues: { THING: "new shoes" },
          topicArea: "shopping",
        },
        {
          en: "I need to call my mother.",
          bn: "আমার মাকে ফোন করা দরকার।",
          slotValues: { THING: "to call my mother" },
          topicArea: "relationships",
        },
        {
          en: "I need a hotel room.",
          bn: "আমার একটি হোটেল রুম দরকার।",
          slotValues: { THING: "a hotel room" },
          topicArea: "travel",
        },
        {
          en: "I need a bigger bag.",
          bn: "আমার আরও বড় একটা ব্যাগ দরকার।",
          slotValues: { THING: "a bigger bag" },
          topicArea: "shopping",
        },
        {
          en: "I need to exercise more.",
          bn: "আমার আরও বেশি ব্যায়াম করা দরকার।",
          slotValues: { THING: "to exercise more" },
          topicArea: "health",
        },
      ],
      formality: "casual",
      difficulty: "beginner",
      usageNote:
        "'Need' implies necessity, stronger than 'want'. Appropriate in most situations.",
      usageNote_bn:
        "'Need' প্রয়োজনীয়তা বোঝায়, 'want'-এর চেয়ে জোরালো। বেশিরভাগ পরিস্থিতিতে উপযুক্ত।",
      combinableWith: ["A3.1"],
      responsePatterns: ["B1.1"],
      banglaStructureMap: "আমার (Subject) + [THING] (Object) + দরকার (Verb)",
    },
    {
      id: "A1.3",
      formula: "What I need is [THING]",
      formula_bn: "আমার যা দরকার তা হলো [জিনিস]",
      patternName: "Emphatic Need",
      patternName_bn: "জোরালো প্রয়োজন",
      slots: [
        {
          name: "THING",
          description:
            "A noun, noun phrase, or clause that you specifically need",
          description_bn:
            "একটি বিশেষ্য, বিশেষ্য পদবন্ধ, বা উপবাক্য যা আপনার বিশেষভাবে দরকার",
          acceptedTypes: ["noun", "clause"],
          examples: [
            "a good night's sleep",
            "some peace and quiet",
            "your support",
          ],
        },
      ],
      examples: [
        {
          en: "What I need is a good night's sleep.",
          bn: "আমার যা দরকার তা হলো একটা ভালো রাতের ঘুম।",
          slotValues: { THING: "a good night's sleep" },
          topicArea: "health",
        },
        {
          en: "What I need is some peace and quiet.",
          bn: "আমার যা দরকার তা হলো কিছুটা শান্তি ও নীরবতা।",
          slotValues: { THING: "some peace and quiet" },
          topicArea: "daily_life",
        },
        {
          en: "What I need is your support.",
          bn: "আমার যা দরকার তা হলো তোমার সমর্থন।",
          slotValues: { THING: "your support" },
          topicArea: "relationships",
        },
        {
          en: "What I need is a proper meal.",
          bn: "আমার যা দরকার তা হলো একটি ঠিকমতো খাবার।",
          slotValues: { THING: "a proper meal" },
          topicArea: "food",
        },
        {
          en: "What I need is a vacation.",
          bn: "আমার যা দরকার তা হলো একটি ছুটি।",
          slotValues: { THING: "a vacation" },
          topicArea: "travel",
        },
        {
          en: "What I need is a clear explanation.",
          bn: "আমার যা দরকার তা হলো একটি স্পষ্ট ব্যাখ্যা।",
          slotValues: { THING: "a clear explanation" },
          topicArea: "education",
        },
        {
          en: "What I need is more practice.",
          bn: "আমার যা দরকার তা হলো আরও অনুশীলন।",
          slotValues: { THING: "more practice" },
          topicArea: "education",
        },
        {
          en: "What I need is a pay raise.",
          bn: "আমার যা দরকার তা হলো বেতন বৃদ্ধি।",
          slotValues: { THING: "a pay raise" },
          topicArea: "work",
        },
        {
          en: "What I need is honesty.",
          bn: "আমার যা দরকার তা হলো সততা।",
          slotValues: { THING: "honesty" },
          topicArea: "relationships",
        },
        {
          en: "What I need is a warm cup of coffee.",
          bn: "আমার যা দরকার তা হলো এক কাপ গরম কফি।",
          slotValues: { THING: "a warm cup of coffee" },
          topicArea: "food",
        },
        {
          en: "What I need is better equipment.",
          bn: "আমার যা দরকার তা হলো আরও ভালো সরঞ্জাম।",
          slotValues: { THING: "better equipment" },
          topicArea: "work",
        },
        {
          en: "What I need is a reliable internet connection.",
          bn: "আমার যা দরকার তা হলো একটি নির্ভরযোগ্য ইন্টারনেট সংযোগ।",
          slotValues: { THING: "a reliable internet connection" },
          topicArea: "daily_life",
        },
        {
          en: "What I need is fresh air.",
          bn: "আমার যা দরকার তা হলো তাজা বাতাস।",
          slotValues: { THING: "fresh air" },
          topicArea: "health",
        },
        {
          en: "What I need is a return ticket.",
          bn: "আমার যা দরকার তা হলো একটি ফেরার টিকিট।",
          slotValues: { THING: "a return ticket" },
          topicArea: "travel",
        },
        {
          en: "What I need is a waterproof jacket.",
          bn: "আমার যা দরকার তা হলো একটি জলরোধী জ্যাকেট।",
          slotValues: { THING: "a waterproof jacket" },
          topicArea: "shopping",
        },
      ],
      formality: "polite",
      difficulty: "beginner",
      usageNote:
        "This cleft sentence structure emphasizes the specific thing you need. It sounds more thoughtful than 'I need'.",
      usageNote_bn:
        "এই ক্লেফ্ট বাক্য গঠন আপনার নির্দিষ্ট প্রয়োজনকে জোর দেয়। এটি 'I need'-এর চেয়ে বেশি চিন্তাশীল শোনায়।",
      combinableWith: ["A1.2"],
      banglaStructureMap:
        "আমার যা দরকার (Subject clause) + তা হলো (Copula) + [THING] (Complement)",
    },
    {
      id: "A1.4",
      formula: "All I want is [THING]",
      formula_bn: "আমি শুধু [জিনিস] চাই",
      patternName: "Emphasizing a Single Want",
      patternName_bn: "একটিমাত্র চাওয়ায় জোর দেওয়া",
      slots: [
        {
          name: "THING",
          description:
            "A noun, noun phrase, or 'to + verb' representing your sole desire",
          description_bn:
            "একটি বিশেষ্য, বিশেষ্য পদবন্ধ, বা 'to + ক্রিয়া' যা আপনার একমাত্র চাওয়া",
          acceptedTypes: ["noun", "to_verb"],
          examples: ["happiness", "to be left alone", "a simple life"],
        },
      ],
      examples: [
        {
          en: "All I want is happiness.",
          bn: "আমি শুধু সুখ চাই।",
          slotValues: { THING: "happiness" },
          topicArea: "daily_life",
        },
        {
          en: "All I want is to be left alone.",
          bn: "আমি শুধু একা থাকতে চাই।",
          slotValues: { THING: "to be left alone" },
          topicArea: "daily_life",
        },
        {
          en: "All I want is a fair chance.",
          bn: "আমি শুধু একটি ন্যায্য সুযোগ চাই।",
          slotValues: { THING: "a fair chance" },
          topicArea: "work",
        },
        {
          en: "All I want is some chocolate.",
          bn: "আমি শুধু কিছু চকলেট চাই।",
          slotValues: { THING: "some chocolate" },
          topicArea: "food",
        },
        {
          en: "All I want is to pass the exam.",
          bn: "আমি শুধু পরীক্ষায় পাশ করতে চাই।",
          slotValues: { THING: "to pass the exam" },
          topicArea: "education",
        },
        {
          en: "All I want is a window seat.",
          bn: "আমি শুধু জানালার পাশের সিট চাই।",
          slotValues: { THING: "a window seat" },
          topicArea: "travel",
        },
        {
          en: "All I want is good health.",
          bn: "আমি শুধু সুস্বাস্থ্য চাই।",
          slotValues: { THING: "good health" },
          topicArea: "health",
        },
        {
          en: "All I want is your trust.",
          bn: "আমি শুধু তোমার বিশ্বাস চাই।",
          slotValues: { THING: "your trust" },
          topicArea: "relationships",
        },
        {
          en: "All I want is a refund.",
          bn: "আমি শুধু টাকা ফেরত চাই।",
          slotValues: { THING: "a refund" },
          topicArea: "shopping",
        },
        {
          en: "All I want is to sleep in.",
          bn: "আমি শুধু দেরি করে ঘুমাতে চাই।",
          slotValues: { THING: "to sleep in" },
          topicArea: "daily_life",
        },
        {
          en: "All I want is one more chance.",
          bn: "আমি শুধু আরেকটি সুযোগ চাই।",
          slotValues: { THING: "one more chance" },
          topicArea: "work",
        },
        {
          en: "All I want is a home-cooked meal.",
          bn: "আমি শুধু ঘরে রান্না করা খাবার চাই।",
          slotValues: { THING: "a home-cooked meal" },
          topicArea: "food",
        },
        {
          en: "All I want is to make my parents proud.",
          bn: "আমি শুধু আমার বাবা-মাকে গর্বিত করতে চাই।",
          slotValues: { THING: "to make my parents proud" },
          topicArea: "relationships",
        },
        {
          en: "All I want is a quiet weekend.",
          bn: "আমি শুধু একটি শান্ত সপ্তাহান্ত চাই।",
          slotValues: { THING: "a quiet weekend" },
          topicArea: "daily_life",
        },
        {
          en: "All I want is to get better at this.",
          bn: "আমি শুধু এতে আরও ভালো হতে চাই।",
          slotValues: { THING: "to get better at this" },
          topicArea: "education",
        },
      ],
      formality: "casual",
      difficulty: "beginner",
      usageNote:
        "This pattern emphasizes simplicity—you're saying you don't ask for much, just this one thing.",
      usageNote_bn:
        "এই প্যাটার্ন সরলতার উপর জোর দেয়—আপনি বলছেন আপনি বেশি কিছু চান না, শুধু এই একটি জিনিস।",
      combinableWith: ["A1.1"],
      banglaStructureMap:
        "আমি শুধু (Subject + Emphasis) + [THING] (Object) + চাই (Verb)",
    },
    {
      id: "A1.5",
      formula: "I'm dying for [THING]",
      formula_bn: "আমি [জিনিসের] জন্য মরছি / আমার [জিনিস] খুব দরকার",
      patternName: "Desperate Want (Informal)",
      patternName_bn: "তীব্র চাওয়া (অনানুষ্ঠানিক)",
      slots: [
        {
          name: "THING",
          description:
            "A noun or noun phrase you strongly crave or desperately need",
          description_bn:
            "একটি বিশেষ্য বা বিশেষ্য পদবন্ধ যা আপনি তীব্রভাবে চান বা যার জন্য মরিয়া",
          acceptedTypes: ["noun", "gerund"],
          examples: ["a cold drink", "some sleep", "a pizza"],
        },
      ],
      examples: [
        {
          en: "I'm dying for a cold drink.",
          bn: "আমি একটা ঠান্ডা পানীয়ের জন্য মরছি।",
          slotValues: { THING: "a cold drink" },
          topicArea: "food",
        },
        {
          en: "I'm dying for some sleep.",
          bn: "ঘুমের জন্য আমার প্রাণ যায় যায়।",
          slotValues: { THING: "some sleep" },
          topicArea: "health",
        },
        {
          en: "I'm dying for a pizza.",
          bn: "আমি একটা পিৎজার জন্য মরছি।",
          slotValues: { THING: "a pizza" },
          topicArea: "food",
        },
        {
          en: "I'm dying for a vacation.",
          bn: "আমি ছুটির জন্য মরছি।",
          slotValues: { THING: "a vacation" },
          topicArea: "travel",
        },
        {
          en: "I'm dying for a cup of coffee.",
          bn: "আমি এক কাপ কফির জন্য মরছি।",
          slotValues: { THING: "a cup of coffee" },
          topicArea: "food",
        },
        {
          en: "I'm dying for some fresh air.",
          bn: "আমি একটু তাজা বাতাসের জন্য মরছি।",
          slotValues: { THING: "some fresh air" },
          topicArea: "health",
        },
        {
          en: "I'm dying for a day off.",
          bn: "আমি একটা ছুটির দিনের জন্য মরছি।",
          slotValues: { THING: "a day off" },
          topicArea: "work",
        },
        {
          en: "I'm dying for some good news.",
          bn: "আমি কিছু ভালো খবরের জন্য মরছি।",
          slotValues: { THING: "some good news" },
          topicArea: "daily_life",
        },
        {
          en: "I'm dying for a massage.",
          bn: "আমি একটা ম্যাসাজের জন্য মরছি।",
          slotValues: { THING: "a massage" },
          topicArea: "health",
        },
        {
          en: "I'm dying for an ice cream.",
          bn: "আমি একটা আইসক্রিমের জন্য মরছি।",
          slotValues: { THING: "an ice cream" },
          topicArea: "food",
        },
        {
          en: "I'm dying for a conversation with someone.",
          bn: "আমি কারো সাথে একটু আড্ডা দেওয়ার জন্য মরছি।",
          slotValues: { THING: "a conversation with someone" },
          topicArea: "relationships",
        },
        {
          en: "I'm dying for a new pair of shoes.",
          bn: "আমি একজোড়া নতুন জুতোর জন্য মরছি।",
          slotValues: { THING: "a new pair of shoes" },
          topicArea: "shopping",
        },
        {
          en: "I'm dying for a chance to travel abroad.",
          bn: "আমি বিদেশ ভ্রমণের সুযোগের জন্য মরছি।",
          slotValues: { THING: "a chance to travel abroad" },
          topicArea: "travel",
        },
        {
          en: "I'm dying for a promotion.",
          bn: "আমি পদোন্নতির জন্য মরছি।",
          slotValues: { THING: "a promotion" },
          topicArea: "work",
        },
        {
          en: "I'm dying for a good book to read.",
          bn: "আমি পড়ার জন্য একটা ভালো বইয়ের জন্য মরছি।",
          slotValues: { THING: "a good book to read" },
          topicArea: "education",
        },
      ],
      formality: "casual",
      difficulty: "beginner",
      usageNote:
        "Very informal idiom. Use only with friends or in casual settings. It means you want something very badly.",
      usageNote_bn:
        "খুবই অনানুষ্ঠানিক বাগধারা। শুধু বন্ধুদের সাথে বা অনানুষ্ঠানিক পরিবেশে ব্যবহার করুন। এর মানে আপনি কিছু খুব বেশি চান।",
      combinableWith: ["A1.1"],
      banglaStructureMap:
        "আমি (Subject) + [THING]-এর জন্য (Object + Postposition) + মরছি (Verb)",
    },
    {
      id: "A1.6",
      formula: "I'd like [THING]",
      formula_bn: "আমি [জিনিস] চাইতাম / আমি [জিনিস] নিতে চাই",
      patternName: "Polite Way of Expressing Wants",
      patternName_bn: "বিনয়ী চাওয়া প্রকাশ",
      slots: [
        {
          name: "THING",
          description:
            "A noun, noun phrase, or 'to + verb' representing what you politely want",
          description_bn:
            "একটি বিশেষ্য, বিশেষ্য পদবন্ধ, বা 'to + ক্রিয়া' যা আপনি বিনয়ের সাথে চান",
          acceptedTypes: ["noun", "to_verb"],
          examples: ["a cup of coffee", "to speak to the manager", "some information"],
        },
      ],
      examples: [
        {
          en: "I'd like a cup of coffee.",
          bn: "আমি এক কাপ কফি নিতে চাই।",
          slotValues: { THING: "a cup of coffee" },
          topicArea: "food",
        },
        {
          en: "I'd like to speak to the manager.",
          bn: "আমি ম্যানেজারের সাথে কথা বলতে চাই।",
          slotValues: { THING: "to speak to the manager" },
          topicArea: "work",
        },
        {
          en: "I'd like some information.",
          bn: "আমি কিছু তথ্য চাইতাম।",
          slotValues: { THING: "some information" },
          topicArea: "daily_life",
        },
        {
          en: "I'd like a table for two.",
          bn: "আমি দুজনের জন্য একটা টেবিল চাইতাম।",
          slotValues: { THING: "a table for two" },
          topicArea: "food",
        },
        {
          en: "I'd like to make a reservation.",
          bn: "আমি একটা রিজার্ভেশন করতে চাই।",
          slotValues: { THING: "to make a reservation" },
          topicArea: "travel",
        },
        {
          en: "I'd like the chicken please.",
          bn: "আমি চিকেনটা নেব, প্লিজ।",
          slotValues: { THING: "the chicken" },
          topicArea: "food",
        },
        {
          en: "I'd like to know the price.",
          bn: "আমি দাম জানতে চাই।",
          slotValues: { THING: "to know the price" },
          topicArea: "shopping",
        },
        {
          en: "I'd like a window seat.",
          bn: "আমি জানালার পাশের সিট চাইতাম।",
          slotValues: { THING: "a window seat" },
          topicArea: "travel",
        },
        {
          en: "I'd like to cancel my order.",
          bn: "আমি আমার অর্ডার বাতিল করতে চাই।",
          slotValues: { THING: "to cancel my order" },
          topicArea: "shopping",
        },
        {
          en: "I'd like some time to think.",
          bn: "আমি ভাবার জন্য কিছুটা সময় চাইতাম।",
          slotValues: { THING: "some time to think" },
          topicArea: "daily_life",
        },
        {
          en: "I'd like to try this on.",
          bn: "আমি এটা পরে দেখতে চাই।",
          slotValues: { THING: "to try this on" },
          topicArea: "shopping",
        },
        {
          en: "I'd like the bill please.",
          bn: "আমি বিলটা চাইতাম, প্লিজ।",
          slotValues: { THING: "the bill" },
          topicArea: "food",
        },
        {
          en: "I'd like to schedule a meeting.",
          bn: "আমি একটা মিটিং নির্ধারণ করতে চাই।",
          slotValues: { THING: "to schedule a meeting" },
          topicArea: "work",
        },
        {
          en: "I'd like a glass of water.",
          bn: "আমি এক গ্লাস পানি চাইতাম।",
          slotValues: { THING: "a glass of water" },
          topicArea: "daily_life",
        },
        {
          en: "I'd like to change my appointment.",
          bn: "আমি আমার অ্যাপয়েন্টমেন্ট পরিবর্তন করতে চাই।",
          slotValues: { THING: "to change my appointment" },
          topicArea: "health",
        },
      ],
      formality: "polite",
      difficulty: "beginner",
      usageNote:
        "\"I'd like\" (I would like) is a polite and softened way of saying \"I want\". It's appropriate in restaurants, shops, offices, and any formal or semi-formal situation.",
      usageNote_bn:
        "\"I'd like\" (I would like) হলো \"I want\" বলার একটি বিনয়ী এবং নরম উপায়। রেস্তোরাঁ, দোকান, অফিস এবং যেকোনো আনুষ্ঠানিক বা আধা-আনুষ্ঠানিক পরিস্থিতিতে উপযুক্ত।",
      combinableWith: ["A1.1", "A2.1"],
      banglaStructureMap:
        "আমি (Subject) + [THING] (Object) + চাইতাম / নিতে চাই (Verb - Polite)",
    },
    {
      id: "A1.7",
      formula: "I could use [THING]",
      formula_bn: "আমার [জিনিস] দরকার হতে পারে / আমার [জিনিস] হলে ভালো হতো",
      patternName: "Casual Way of Expressing Need",
      patternName_bn: "সাধারণভাবে প্রয়োজন প্রকাশ",
      slots: [
        {
          name: "THING",
          description:
            "A noun or noun phrase representing what you casually need",
          description_bn:
            "একটি বিশেষ্য বা বিশেষ্য পদবন্ধ যা আপনার সাধারণভাবে দরকার",
          acceptedTypes: ["noun"],
          examples: ["some help", "a break", "a cup of tea"],
        },
      ],
      examples: [
        {
          en: "I could use some help.",
          bn: "আমার একটু সাহায্য হলে ভালো হতো।",
          slotValues: { THING: "some help" },
          topicArea: "daily_life",
        },
        {
          en: "I could use a break.",
          bn: "আমার একটু বিরতি হলে ভালো হতো।",
          slotValues: { THING: "a break" },
          topicArea: "work",
        },
        {
          en: "I could use a cup of tea.",
          bn: "আমার এক কাপ চা হলে ভালো হতো।",
          slotValues: { THING: "a cup of tea" },
          topicArea: "food",
        },
        {
          en: "I could use some advice.",
          bn: "আমার কিছু পরামর্শ হলে ভালো হতো।",
          slotValues: { THING: "some advice" },
          topicArea: "daily_life",
        },
        {
          en: "I could use more sleep.",
          bn: "আমার আরও ঘুম হলে ভালো হতো।",
          slotValues: { THING: "more sleep" },
          topicArea: "health",
        },
        {
          en: "I could use a vacation.",
          bn: "আমার একটা ছুটি হলে ভালো হতো।",
          slotValues: { THING: "a vacation" },
          topicArea: "travel",
        },
        {
          en: "I could use a new phone.",
          bn: "আমার একটা নতুন ফোন হলে ভালো হতো।",
          slotValues: { THING: "a new phone" },
          topicArea: "shopping",
        },
        {
          en: "I could use some fresh air.",
          bn: "আমার একটু তাজা বাতাস হলে ভালো হতো।",
          slotValues: { THING: "some fresh air" },
          topicArea: "health",
        },
        {
          en: "I could use a ride to the office.",
          bn: "আমার অফিসে যাওয়ার জন্য একটা রাইড হলে ভালো হতো।",
          slotValues: { THING: "a ride to the office" },
          topicArea: "work",
        },
        {
          en: "I could use your support.",
          bn: "আমার তোমার সমর্থন হলে ভালো হতো।",
          slotValues: { THING: "your support" },
          topicArea: "relationships",
        },
        {
          en: "I could use a good meal.",
          bn: "আমার একটা ভালো খাবার হলে ভালো হতো।",
          slotValues: { THING: "a good meal" },
          topicArea: "food",
        },
        {
          en: "I could use more practice.",
          bn: "আমার আরও অনুশীলন হলে ভালো হতো।",
          slotValues: { THING: "more practice" },
          topicArea: "education",
        },
        {
          en: "I could use some rest.",
          bn: "আমার কিছুটা বিশ্রাম হলে ভালো হতো।",
          slotValues: { THING: "some rest" },
          topicArea: "health",
        },
        {
          en: "I could use a friend right now.",
          bn: "আমার এখন একজন বন্ধু হলে ভালো হতো।",
          slotValues: { THING: "a friend right now" },
          topicArea: "relationships",
        },
        {
          en: "I could use extra time.",
          bn: "আমার অতিরিক্ত সময় হলে ভালো হতো।",
          slotValues: { THING: "extra time" },
          topicArea: "education",
        },
      ],
      formality: "casual",
      difficulty: "beginner",
      usageNote:
        "'I could use' is an informal, understated way to express that you need something. It sounds more relaxed and less direct than 'I need'. Common in everyday American English.",
      usageNote_bn:
        "'I could use' হলো কিছু দরকার তা প্রকাশ করার একটি অনানুষ্ঠানিক, সংযত উপায়। এটি 'I need'-এর চেয়ে বেশি স্বাচ্ছন্দ্যময় এবং কম সরাসরি শোনায়। দৈনন্দিন আমেরিকান ইংরেজিতে সাধারণ।",
      combinableWith: ["A1.2", "A1.5"],
      banglaStructureMap:
        "আমার (Subject) + [THING] (Object) + হলে ভালো হতো (Conditional Need)",
    },
  ],
};
