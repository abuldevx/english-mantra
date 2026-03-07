import { PatternCategory } from "@/types/pattern";

export const categoryE7: PatternCategory = {
  id: "E7",
  slug: "expressing-anger-frustration",
  name: "Expressing Anger & Frustration",
  name_bn: "রাগ ও হতাশা প্রকাশ",
  description:
    "Learn how to express anger and frustration appropriately in English.",
  description_bn:
    "ইংরেজিতে যথাযথভাবে রাগ ও হতাশা প্রকাশ করতে শিখুন।",
  icon: "😤",
  group: "E",
  groupName: "Opinions, Emotions & Attitudes",
  groupName_bn: "মতামত, আবেগ ও দৃষ্টিভঙ্গি",
  difficulty: "intermediate",
  patterns: [
    {
      id: "E7.1",
      formula: "I'm upset about [THING]",
      formula_bn: "আমি [বিষয়] নিয়ে মন খারাপ",
      patternName: "Expressing Upset",
      patternName_bn: "মনঃক্ষুণ্ণতা প্রকাশ",
      slots: [
        {
          name: "THING",
          description: "A noun phrase describing what upset you",
          description_bn:
            "একটি বিশেষ্য পদবন্ধ যা আপনাকে কী মনঃক্ষুণ্ণ করেছে তা বর্ণনা করে",
          acceptedTypes: ["noun_phrase", "gerund"],
          examples: [
            "the decision",
            "what happened yesterday",
            "being treated unfairly",
          ],
        },
      ],
      examples: [
        {
          en: "I'm upset about the decision.",
          bn: "আমি সিদ্ধান্তটা নিয়ে মন খারাপ।",
          slotValues: { THING: "the decision" },
          topicArea: "work",
        },
        {
          en: "I'm upset about what happened yesterday.",
          bn: "আমি গতকাল যা হয়েছে তা নিয়ে মন খারাপ।",
          slotValues: { THING: "what happened yesterday" },
          topicArea: "daily_life",
        },
        {
          en: "I'm upset about being treated unfairly.",
          bn: "আমি অন্যায্য আচরণ নিয়ে মন খারাপ।",
          slotValues: { THING: "being treated unfairly" },
          topicArea: "work",
        },
        {
          en: "I'm upset about the cold food they served.",
          bn: "আমি তাদের পরিবেশন করা ঠান্ডা খাবার নিয়ে মন খারাপ।",
          slotValues: { THING: "the cold food they served" },
          topicArea: "food",
        },
        {
          en: "I'm upset about the cancelled trip.",
          bn: "আমি বাতিল হওয়া ট্রিপ নিয়ে মন খারাপ।",
          slotValues: { THING: "the cancelled trip" },
          topicArea: "travel",
        },
        {
          en: "I'm upset about my exam results.",
          bn: "আমি আমার পরীক্ষার ফলাফল নিয়ে মন খারাপ।",
          slotValues: { THING: "my exam results" },
          topicArea: "education",
        },
        {
          en: "I'm upset about the long wait at the clinic.",
          bn: "আমি ক্লিনিকে দীর্ঘ অপেক্ষা নিয়ে মন খারাপ।",
          slotValues: { THING: "the long wait at the clinic" },
          topicArea: "health",
        },
        {
          en: "I'm upset about what he said to me.",
          bn: "আমি সে আমাকে যা বলেছে তা নিয়ে মন খারাপ।",
          slotValues: { THING: "what he said to me" },
          topicArea: "relationships",
        },
        {
          en: "I'm upset about the broken item I received.",
          bn: "আমি ভাঙা পণ্য পাওয়া নিয়ে মন খারাপ।",
          slotValues: { THING: "the broken item I received" },
          topicArea: "shopping",
        },
        {
          en: "I'm upset about missing the deadline.",
          bn: "আমি ডেডলাইন মিস করা নিয়ে মন খারাপ।",
          slotValues: { THING: "missing the deadline" },
          topicArea: "work",
        },
        {
          en: "I'm upset about the noise in the neighborhood.",
          bn: "আমি পাড়ার শব্দ নিয়ে মন খারাপ।",
          slotValues: { THING: "the noise in the neighborhood" },
          topicArea: "daily_life",
        },
        {
          en: "I'm upset about the rude waiter.",
          bn: "আমি অভদ্র ওয়েটার নিয়ে মন খারাপ।",
          slotValues: { THING: "the rude waiter" },
          topicArea: "food",
        },
        {
          en: "I'm upset about the delayed diagnosis.",
          bn: "আমি দেরিতে রোগ নির্ণয় নিয়ে মন খারাপ।",
          slotValues: { THING: "the delayed diagnosis" },
          topicArea: "health",
        },
        {
          en: "I'm upset about the change in schedule.",
          bn: "আমি সময়সূচী পরিবর্তন নিয়ে মন খারাপ।",
          slotValues: { THING: "the change in schedule" },
          topicArea: "education",
        },
        {
          en: "I'm upset about not being invited.",
          bn: "আমি আমন্ত্রিত না হওয়া নিয়ে মন খারাপ।",
          slotValues: { THING: "not being invited" },
          topicArea: "relationships",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "A moderate way to express displeasure. Less aggressive than 'angry' but clearly shows your feelings are hurt.",
      usageNote_bn:
        "অসন্তুষ্টি প্রকাশের মাঝারি উপায়। 'Angry'-এর চেয়ে কম আক্রমণাত্মক কিন্তু স্পষ্টভাবে দেখায় আপনার মন খারাপ।",
    },
    {
      id: "E7.2",
      formula: "I'm frustrated with [THING]",
      formula_bn: "আমি [বিষয়] নিয়ে ক্ষুব্ধ",
      patternName: "Expressing Frustration",
      patternName_bn: "ক্ষোভ প্রকাশ",
      slots: [
        {
          name: "THING",
          description:
            "A noun phrase describing what frustrates you",
          description_bn:
            "একটি বিশেষ্য পদবন্ধ যা আপনাকে কী ক্ষুব্ধ করছে তা বর্ণনা করে",
          acceptedTypes: ["noun_phrase", "gerund"],
          examples: [
            "the slow internet",
            "this situation",
            "not being heard",
          ],
        },
      ],
      examples: [
        {
          en: "I'm frustrated with the slow internet.",
          bn: "আমি ধীর ইন্টারনেট নিয়ে ক্ষুব্ধ।",
          slotValues: { THING: "the slow internet" },
          topicArea: "daily_life",
        },
        {
          en: "I'm frustrated with this situation.",
          bn: "আমি এই পরিস্থিতি নিয়ে ক্ষুব্ধ।",
          slotValues: { THING: "this situation" },
          topicArea: "daily_life",
        },
        {
          en: "I'm frustrated with not being heard.",
          bn: "আমি কথা না শোনা নিয়ে ক্ষুব্ধ।",
          slotValues: { THING: "not being heard" },
          topicArea: "relationships",
        },
        {
          en: "I'm frustrated with the constant delays.",
          bn: "আমি ক্রমাগত দেরি নিয়ে ক্ষুব্ধ।",
          slotValues: { THING: "the constant delays" },
          topicArea: "work",
        },
        {
          en: "I'm frustrated with the poor service at this restaurant.",
          bn: "আমি এই রেস্তোরাঁর খারাপ সেবা নিয়ে ক্ষুব্ধ।",
          slotValues: { THING: "the poor service at this restaurant" },
          topicArea: "food",
        },
        {
          en: "I'm frustrated with the delayed flights.",
          bn: "আমি বিলম্বিত ফ্লাইটগুলো নিয়ে ক্ষুব্ধ।",
          slotValues: { THING: "the delayed flights" },
          topicArea: "travel",
        },
        {
          en: "I'm frustrated with the confusing syllabus.",
          bn: "আমি বিভ্রান্তিকর সিলেবাস নিয়ে ক্ষুব্ধ।",
          slotValues: { THING: "the confusing syllabus" },
          topicArea: "education",
        },
        {
          en: "I'm frustrated with the long waiting time for the appointment.",
          bn: "আমি অ্যাপয়েন্টমেন্টের দীর্ঘ অপেক্ষা নিয়ে ক্ষুব্ধ।",
          slotValues: { THING: "the long waiting time for the appointment" },
          topicArea: "health",
        },
        {
          en: "I'm frustrated with the return policy.",
          bn: "আমি রিটার্ন পলিসি নিয়ে ক্ষুব্ধ।",
          slotValues: { THING: "the return policy" },
          topicArea: "shopping",
        },
        {
          en: "I'm frustrated with the lack of transparency.",
          bn: "আমি স্বচ্ছতার অভাব নিয়ে ক্ষুব্ধ।",
          slotValues: { THING: "the lack of transparency" },
          topicArea: "work",
        },
        {
          en: "I'm frustrated with the unreliable bus schedule.",
          bn: "আমি অনির্ভরযোগ্য বাসের সময়সূচি নিয়ে ক্ষুব্ধ।",
          slotValues: { THING: "the unreliable bus schedule" },
          topicArea: "travel",
        },
        {
          en: "I'm frustrated with the same arguments over and over.",
          bn: "আমি বারবার একই তর্ক নিয়ে ক্ষুব্ধ।",
          slotValues: { THING: "the same arguments over and over" },
          topicArea: "relationships",
        },
        {
          en: "I'm frustrated with the limited menu options.",
          bn: "আমি সীমিত মেনু অপশন নিয়ে ক্ষুব্ধ।",
          slotValues: { THING: "the limited menu options" },
          topicArea: "food",
        },
        {
          en: "I'm frustrated with the outdated textbooks.",
          bn: "আমি পুরনো পাঠ্যবই নিয়ে ক্ষুব্ধ।",
          slotValues: { THING: "the outdated textbooks" },
          topicArea: "education",
        },
        {
          en: "I'm frustrated with the insurance paperwork.",
          bn: "আমি বীমার কাগজপত্র নিয়ে ক্ষুব্ধ।",
          slotValues: { THING: "the insurance paperwork" },
          topicArea: "health",
        },
      ],
      formality: "polite",
      difficulty: "intermediate",
      usageNote:
        "Implies repeated annoyance or difficulties. Professional and measured way to express anger.",
      usageNote_bn:
        "বারবার বিরক্তি বা অসুবিধা বোঝায়। রাগ প্রকাশের পেশাদার ও সংযত উপায়।",
    },
    {
      id: "E7.3",
      formula: "I've had enough of [THING]",
      formula_bn: "আমি [বিষয়] সহ্য করতে আর পারছি না",
      patternName: "Reaching Breaking Point",
      patternName_bn: "সীমায় পৌঁছানো",
      slots: [
        {
          name: "THING",
          description:
            "A noun phrase or gerund describing what has pushed you past your limit",
          description_bn:
            "একটি বিশেষ্য পদবন্ধ বা ক্রিয়াবাচক বিশেষ্য যা আপনাকে সীমার বাইরে নিয়ে গেছে",
          acceptedTypes: ["noun_phrase", "gerund"],
          examples: [
            "this nonsense",
            "waiting around",
            "people being late",
          ],
        },
      ],
      examples: [
        {
          en: "I've had enough of this nonsense.",
          bn: "আমি এই বাজে কথা সহ্য করতে আর পারছি না।",
          slotValues: { THING: "this nonsense" },
          topicArea: "daily_life",
        },
        {
          en: "I've had enough of waiting around.",
          bn: "আমি অপেক্ষা করা সহ্য করতে আর পারছি না।",
          slotValues: { THING: "waiting around" },
          topicArea: "daily_life",
        },
        {
          en: "I've had enough of people being late.",
          bn: "আমি মানুষের দেরি করা সহ্য করতে আর পারছি না।",
          slotValues: { THING: "people being late" },
          topicArea: "work",
        },
        {
          en: "I've had enough of the overtime.",
          bn: "আমি ওভারটাইম সহ্য করতে আর পারছি না।",
          slotValues: { THING: "the overtime" },
          topicArea: "work",
        },
        {
          en: "I've had enough of takeout food.",
          bn: "আমি বাইরের খাবার সহ্য করতে আর পারছি না।",
          slotValues: { THING: "takeout food" },
          topicArea: "food",
        },
        {
          en: "I've had enough of flight cancellations.",
          bn: "আমি ফ্লাইট বাতিল হওয়া সহ্য করতে আর পারছি না।",
          slotValues: { THING: "flight cancellations" },
          topicArea: "travel",
        },
        {
          en: "I've had enough of boring lectures.",
          bn: "আমি একঘেয়ে লেকচার সহ্য করতে আর পারছি না।",
          slotValues: { THING: "boring lectures" },
          topicArea: "education",
        },
        {
          en: "I've had enough of these pills.",
          bn: "আমি এই ওষুধ সহ্য করতে আর পারছি না।",
          slotValues: { THING: "these pills" },
          topicArea: "health",
        },
        {
          en: "I've had enough of being ignored.",
          bn: "আমি উপেক্ষিত হওয়া সহ্য করতে আর পারছি না।",
          slotValues: { THING: "being ignored" },
          topicArea: "relationships",
        },
        {
          en: "I've had enough of poor customer service.",
          bn: "আমি খারাপ কাস্টমার সার্ভিস সহ্য করতে আর পারছি না।",
          slotValues: { THING: "poor customer service" },
          topicArea: "shopping",
        },
        {
          en: "I've had enough of the traffic jams.",
          bn: "আমি ট্রাফিক জ্যাম সহ্য করতে আর পারছি না।",
          slotValues: { THING: "the traffic jams" },
          topicArea: "travel",
        },
        {
          en: "I've had enough of excuses.",
          bn: "আমি অজুহাত সহ্য করতে আর পারছি না।",
          slotValues: { THING: "excuses" },
          topicArea: "relationships",
        },
        {
          en: "I've had enough of reheated food.",
          bn: "আমি গরম করা বাসি খাবার সহ্য করতে আর পারছি না।",
          slotValues: { THING: "reheated food" },
          topicArea: "food",
        },
        {
          en: "I've had enough of micromanagement.",
          bn: "আমি মাইক্রোম্যানেজমেন্ট সহ্য করতে আর পারছি না।",
          slotValues: { THING: "micromanagement" },
          topicArea: "work",
        },
        {
          en: "I've had enough of unnecessary tests.",
          bn: "আমি অপ্রয়োজনীয় পরীক্ষা-নিরীক্ষা সহ্য করতে আর পারছি না।",
          slotValues: { THING: "unnecessary tests" },
          topicArea: "health",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "Expresses extreme frustration and implies you want something to stop. Strong emotional expression.",
      usageNote_bn:
        "চরম হতাশা প্রকাশ করে এবং বোঝায় আপনি চান কিছু বন্ধ হোক। শক্তিশালী আবেগ প্রকাশ।",
    },
    {
      id: "E7.4",
      formula: "It really annoys me when [CLAUSE]",
      formula_bn: "আমি সত্যিই বিরক্ত হই যখন [উক্তি]",
      patternName: "Habitual Annoyance",
      patternName_bn: "অভ্যাসগত বিরক্তি",
      slots: [
        {
          name: "CLAUSE",
          description:
            "A clause describing a recurring situation that annoys you",
          description_bn:
            "একটি উপবাক্য যা পুনরাবৃত্তিমূলক বিরক্তিকর পরিস্থিতি বর্ণনা করে",
          acceptedTypes: ["clause"],
          examples: [
            "people cut in line",
            "my phone freezes",
            "no one cleans up",
          ],
        },
      ],
      examples: [
        {
          en: "It really annoys me when people cut in line.",
          bn: "আমি সত্যিই বিরক্ত হই যখন মানুষ লাইনে সামনে ঢুকে পড়ে।",
          slotValues: { CLAUSE: "people cut in line" },
          topicArea: "daily_life",
        },
        {
          en: "It really annoys me when my phone freezes.",
          bn: "আমি সত্যিই বিরক্ত হই যখন আমার ফোন হ্যাং করে।",
          slotValues: { CLAUSE: "my phone freezes" },
          topicArea: "daily_life",
        },
        {
          en: "It really annoys me when no one cleans up after meetings.",
          bn: "আমি সত্যিই বিরক্ত হই যখন মিটিংয়ের পর কেউ গুছিয়ে রাখে না।",
          slotValues: { CLAUSE: "no one cleans up after meetings" },
          topicArea: "work",
        },
        {
          en: "It really annoys me when my order is wrong.",
          bn: "আমি সত্যিই বিরক্ত হই যখন আমার অর্ডার ভুল আসে।",
          slotValues: { CLAUSE: "my order is wrong" },
          topicArea: "food",
        },
        {
          en: "It really annoys me when flights are delayed without explanation.",
          bn: "আমি সত্যিই বিরক্ত হই যখন কোনো ব্যাখ্যা ছাড়াই ফ্লাইট দেরি হয়।",
          slotValues: { CLAUSE: "flights are delayed without explanation" },
          topicArea: "travel",
        },
        {
          en: "It really annoys me when students talk during the lecture.",
          bn: "আমি সত্যিই বিরক্ত হই যখন লেকচারের সময় ছাত্ররা কথা বলে।",
          slotValues: { CLAUSE: "students talk during the lecture" },
          topicArea: "education",
        },
        {
          en: "It really annoys me when the doctor is an hour late.",
          bn: "আমি সত্যিই বিরক্ত হই যখন ডাক্তার এক ঘণ্টা দেরি করেন।",
          slotValues: { CLAUSE: "the doctor is an hour late" },
          topicArea: "health",
        },
        {
          en: "It really annoys me when people don't reply to messages.",
          bn: "আমি সত্যিই বিরক্ত হই যখন মানুষ মেসেজের উত্তর দেয় না।",
          slotValues: { CLAUSE: "people don't reply to messages" },
          topicArea: "relationships",
        },
        {
          en: "It really annoys me when prices change at checkout.",
          bn: "আমি সত্যিই বিরক্ত হই যখন চেকআউটের সময় দাম বদলে যায়।",
          slotValues: { CLAUSE: "prices change at checkout" },
          topicArea: "shopping",
        },
        {
          en: "It really annoys me when people take credit for my work.",
          bn: "আমি সত্যিই বিরক্ত হই যখন মানুষ আমার কাজের কৃতিত্ব নেয়।",
          slotValues: { CLAUSE: "people take credit for my work" },
          topicArea: "work",
        },
        {
          en: "It really annoys me when food is served lukewarm.",
          bn: "আমি সত্যিই বিরক্ত হই যখন খাবার কুসুম গরম পরিবেশন করা হয়।",
          slotValues: { CLAUSE: "food is served lukewarm" },
          topicArea: "food",
        },
        {
          en: "It really annoys me when people are inconsiderate.",
          bn: "আমি সত্যিই বিরক্ত হই যখন মানুষ অবিবেচক হয়।",
          slotValues: { CLAUSE: "people are inconsiderate" },
          topicArea: "relationships",
        },
        {
          en: "It really annoys me when the bus doesn't stop.",
          bn: "আমি সত্যিই বিরক্ত হই যখন বাস দাঁড়ায় না।",
          slotValues: { CLAUSE: "the bus doesn't stop" },
          topicArea: "travel",
        },
        {
          en: "It really annoys me when homework is assigned over holidays.",
          bn: "আমি সত্যিই বিরক্ত হই যখন ছুটিতে বাড়ির কাজ দেওয়া হয়।",
          slotValues: { CLAUSE: "homework is assigned over holidays" },
          topicArea: "education",
        },
        {
          en: "It really annoys me when I have to wait for test results.",
          bn: "আমি সত্যিই বিরক্ত হই যখন পরীক্ষার ফলাফলের জন্য অপেক্ষা করতে হয়।",
          slotValues: { CLAUSE: "I have to wait for test results" },
          topicArea: "health",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "Used to describe recurring annoyances. The 'when' clause makes it about patterns, not a single event.",
      usageNote_bn:
        "পুনরাবৃত্তিমূলক বিরক্তি বর্ণনায় ব্যবহৃত। 'When' উপবাক্য এটিকে একটি ঘটনা নয়, বরং ধরন সম্পর্কে করে।",
    },
    {
      id: "E7.5",
      formula: "I'm sick and tired of [THING]",
      formula_bn: "আমি [বিষয়] একেবারে সহ্য করতে পারছি না",
      patternName: "Extreme Frustration",
      patternName_bn: "চরম ক্ষোভ",
      slots: [
        {
          name: "THING",
          description:
            "A noun phrase or gerund describing something you can no longer tolerate",
          description_bn:
            "একটি বিশেষ্য পদবন্ধ বা ক্রিয়াবাচক বিশেষ্য যা আপনি আর সহ্য করতে পারছেন না",
          acceptedTypes: ["noun_phrase", "gerund"],
          examples: [
            "the same old routine",
            "being disrespected",
            "empty promises",
          ],
        },
      ],
      examples: [
        {
          en: "I'm sick and tired of the same old routine.",
          bn: "আমি একই পুরনো রুটিন একেবারে সহ্য করতে পারছি না।",
          slotValues: { THING: "the same old routine" },
          topicArea: "daily_life",
        },
        {
          en: "I'm sick and tired of being disrespected.",
          bn: "আমি অসম্মানিত হওয়া একেবারে সহ্য করতে পারছি না।",
          slotValues: { THING: "being disrespected" },
          topicArea: "relationships",
        },
        {
          en: "I'm sick and tired of empty promises.",
          bn: "আমি ফাঁকা প্রতিশ্রুতি একেবারে সহ্য করতে পারছি না।",
          slotValues: { THING: "empty promises" },
          topicArea: "work",
        },
        {
          en: "I'm sick and tired of junk food.",
          bn: "আমি জাঙ্ক ফুড একেবারে সহ্য করতে পারছি না।",
          slotValues: { THING: "junk food" },
          topicArea: "food",
        },
        {
          en: "I'm sick and tired of delayed buses.",
          bn: "আমি দেরিতে আসা বাস একেবারে সহ্য করতে পারছি না।",
          slotValues: { THING: "delayed buses" },
          topicArea: "travel",
        },
        {
          en: "I'm sick and tired of memorizing without understanding.",
          bn: "আমি না বুঝে মুখস্থ করা একেবারে সহ্য করতে পারছি না।",
          slotValues: { THING: "memorizing without understanding" },
          topicArea: "education",
        },
        {
          en: "I'm sick and tired of being in pain all the time.",
          bn: "আমি সারাক্ষণ ব্যথায় থাকা একেবারে সহ্য করতে পারছি না।",
          slotValues: { THING: "being in pain all the time" },
          topicArea: "health",
        },
        {
          en: "I'm sick and tired of being blamed for everything.",
          bn: "আমি সবকিছুর জন্য দোষী হওয়া একেবারে সহ্য করতে পারছি না।",
          slotValues: { THING: "being blamed for everything" },
          topicArea: "relationships",
        },
        {
          en: "I'm sick and tired of hidden charges.",
          bn: "আমি লুকানো চার্জ একেবারে সহ্য করতে পারছি না।",
          slotValues: { THING: "hidden charges" },
          topicArea: "shopping",
        },
        {
          en: "I'm sick and tired of working weekends.",
          bn: "আমি সাপ্তাহিক ছুটিতে কাজ করা একেবারে সহ্য করতে পারছি না।",
          slotValues: { THING: "working weekends" },
          topicArea: "work",
        },
        {
          en: "I'm sick and tired of tasteless hospital food.",
          bn: "আমি স্বাদহীন হাসপাতালের খাবার একেবারে সহ্য করতে পারছি না।",
          slotValues: { THING: "tasteless hospital food" },
          topicArea: "food",
        },
        {
          en: "I'm sick and tired of long commutes.",
          bn: "আমি দীর্ঘ যাতায়াত একেবারে সহ্য করতে পারছি না।",
          slotValues: { THING: "long commutes" },
          topicArea: "travel",
        },
        {
          en: "I'm sick and tired of group projects where nobody contributes.",
          bn: "আমি গ্রুপ প্রকল্প একেবারে সহ্য করতে পারছি না যেখানে কেউ অবদান রাখে না।",
          slotValues: { THING: "group projects where nobody contributes" },
          topicArea: "education",
        },
        {
          en: "I'm sick and tired of the medication side effects.",
          bn: "আমি ওষুধের পার্শ্বপ্রতিক্রিয়া একেবারে সহ্য করতে পারছি না।",
          slotValues: { THING: "the medication side effects" },
          topicArea: "health",
        },
        {
          en: "I'm sick and tired of fake discounts.",
          bn: "আমি ভুয়া ছাড় একেবারে সহ্য করতে পারছি না।",
          slotValues: { THING: "fake discounts" },
          topicArea: "shopping",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "Very strong, informal expression of extreme frustration. Use only in casual settings or when genuinely angry.",
      usageNote_bn:
        "চরম হতাশার অত্যন্ত জোরালো, অনানুষ্ঠানিক প্রকাশ। শুধু অনানুষ্ঠানিক পরিবেশে বা সত্যিই রাগান্বিত হলে ব্যবহার করুন।",
    },
  ],
};
