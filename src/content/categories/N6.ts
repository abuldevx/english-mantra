import { PatternCategory } from "@/types/pattern";

export const categoryN6: PatternCategory = {
  id: "N6",
  slug: "another-other-the-other",
  name: "Another / Other / The Other",
  name_bn: "Another / Other / The Other",
  description:
    "Distinguish between another, other, the other, and others in various contexts.",
  description_bn:
    "বিভিন্ন প্রসঙ্গে another, other, the other এবং others-এর পার্থক্য শিখুন।",
  icon: "🔄",
  group: "N",
  groupName: "Articles, Determiners & Quantifiers",
  groupName_bn: "আর্টিকেল, নির্ধারক ও পরিমাণবাচক",
  difficulty: "intermediate",
  patterns: [
    {
      id: "N6.1",
      formula: "I need another [THING]",
      formula_bn: "আমার আরেকটা [জিনিস] দরকার",
      patternName: "Another (One More)",
      patternName_bn: "Another (আরেকটা)",
      slots: [
        {
          name: "THING",
          description: "A singular countable noun",
          description_bn: "একটি একবচন গণনাযোগ্য বিশেষ্য",
          acceptedTypes: ["noun"],
          examples: ["cup of tea", "chance", "day"],
        },
      ],
      examples: [
        {
          en: "I need another cup of tea.",
          bn: "আমার আরেক কাপ চা দরকার।",
          slotValues: { THING: "cup of tea" },
          topicArea: "food",
        },
        {
          en: "I need another chance.",
          bn: "আমার আরেকটা সুযোগ দরকার।",
          slotValues: { THING: "chance" },
          topicArea: "work",
        },
        {
          en: "I need another day to finish.",
          bn: "শেষ করতে আমার আরেকটা দিন দরকার।",
          slotValues: { THING: "day to finish" },
          topicArea: "work",
        },
        {
          en: "Can I have another plate?",
          bn: "আমি কি আরেকটা প্লেট পেতে পারি?",
          slotValues: { THING: "plate" },
          topicArea: "food",
        },
        {
          en: "Let's try another restaurant.",
          bn: "চলো আরেকটা রেস্তোরাঁ চেষ্টা করি।",
          slotValues: { THING: "restaurant" },
          topicArea: "food",
        },
        {
          en: "I need another opinion.",
          bn: "আমার আরেকটা মতামত দরকার।",
          slotValues: { THING: "opinion" },
          topicArea: "health",
        },
        {
          en: "She bought another dress.",
          bn: "সে আরেকটা ড্রেস কিনেছে।",
          slotValues: { THING: "dress" },
          topicArea: "shopping",
        },
        {
          en: "We need another volunteer.",
          bn: "আমাদের আরেকজন স্বেচ্ছাসেবক দরকার।",
          slotValues: { THING: "volunteer" },
          topicArea: "work",
        },
        {
          en: "He failed and wants another attempt.",
          bn: "সে ফেল করেছে এবং আরেকটা চেষ্টা চায়।",
          slotValues: { THING: "attempt" },
          topicArea: "education",
        },
        {
          en: "Can we book another room?",
          bn: "আমরা কি আরেকটা রুম বুক করতে পারি?",
          slotValues: { THING: "room" },
          topicArea: "travel",
        },
        {
          en: "I made another mistake.",
          bn: "আমি আরেকটা ভুল করেছি।",
          slotValues: { THING: "mistake" },
          topicArea: "daily_life",
        },
        {
          en: "She asked for another glass of water.",
          bn: "সে আরেক গ্লাস পানি চেয়েছে।",
          slotValues: { THING: "glass of water" },
          topicArea: "food",
        },
        {
          en: "The doctor recommended another test.",
          bn: "ডাক্তার আরেকটা পরীক্ষা করতে বলেছেন।",
          slotValues: { THING: "test" },
          topicArea: "health",
        },
        {
          en: "I need another pair of shoes.",
          bn: "আমার আরেক জোড়া জুতো দরকার।",
          slotValues: { THING: "pair of shoes" },
          topicArea: "shopping",
        },
        {
          en: "We should take another route.",
          bn: "আমাদের আরেকটা রাস্তায় যাওয়া উচিত।",
          slotValues: { THING: "route" },
          topicArea: "travel",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "'Another' means 'one more' or 'a different one'. It's always used with singular countable nouns.",
      usageNote_bn:
        "'Another' মানে 'আরেকটা' বা 'একটি ভিন্ন'। এটি সবসময় একবচন গণনাযোগ্য বিশেষ্যের সাথে ব্যবহৃত হয়।",
    },
    {
      id: "N6.2",
      formula: "The other [THING] is [DESC]",
      formula_bn: "অন্য [জিনিসটা] [বর্ণনা]",
      patternName: "The Other (Specific Remaining)",
      patternName_bn: "The Other (নির্দিষ্ট বাকিটা)",
      slots: [
        {
          name: "THING",
          description: "A specific noun (the remaining one of two or a group)",
          description_bn:
            "একটি নির্দিষ্ট বিশেষ্য (দুটোর মধ্যে বাকিটা বা দলের বাকি অংশ)",
          acceptedTypes: ["noun"],
          examples: ["shoe", "option", "side"],
        },
        {
          name: "DESC",
          description: "An adjective or descriptive phrase",
          description_bn: "একটি বিশেষণ বা বর্ণনামূলক পদবন্ধ",
          acceptedTypes: ["adjective", "adjective_phrase"],
          examples: ["under the bed", "better", "quieter"],
        },
      ],
      examples: [
        {
          en: "The other shoe is under the bed.",
          bn: "অন্য জুতোটা বিছানার নিচে।",
          slotValues: { THING: "shoe", DESC: "under the bed" },
          topicArea: "daily_life",
        },
        {
          en: "The other option is better.",
          bn: "অন্য অপশনটা ভালো।",
          slotValues: { THING: "option", DESC: "better" },
          topicArea: "work",
        },
        {
          en: "The other side of the river is quieter.",
          bn: "নদীর অন্য পাড় শান্ত।",
          slotValues: { THING: "side of the river", DESC: "quieter" },
          topicArea: "travel",
        },
        {
          en: "The other restaurant was cheaper.",
          bn: "অন্য রেস্তোরাঁটা সস্তা ছিল।",
          slotValues: { THING: "restaurant", DESC: "cheaper" },
          topicArea: "food",
        },
        {
          en: "The other doctor is available now.",
          bn: "অন্য ডাক্তার এখন আছেন।",
          slotValues: { THING: "doctor", DESC: "available now" },
          topicArea: "health",
        },
        {
          en: "The other bag is heavier.",
          bn: "অন্য ব্যাগটা ভারী।",
          slotValues: { THING: "bag", DESC: "heavier" },
          topicArea: "travel",
        },
        {
          en: "The other room is bigger.",
          bn: "অন্য ঘরটা বড়।",
          slotValues: { THING: "room", DESC: "bigger" },
          topicArea: "daily_life",
        },
        {
          en: "The other team played well too.",
          bn: "অন্য দলটাও ভালো খেলেছে।",
          slotValues: { THING: "team", DESC: "played well too" },
          topicArea: "daily_life",
        },
        {
          en: "The other book is more interesting.",
          bn: "অন্য বইটা বেশি আকর্ষণীয়।",
          slotValues: { THING: "book", DESC: "more interesting" },
          topicArea: "education",
        },
        {
          en: "The other color suits you better.",
          bn: "অন্য রংটা তোমাকে বেশি মানায়।",
          slotValues: { THING: "color", DESC: "suits you better" },
          topicArea: "shopping",
        },
        {
          en: "The other candidate was more experienced.",
          bn: "অন্য প্রার্থী বেশি অভিজ্ঞ ছিল।",
          slotValues: { THING: "candidate", DESC: "more experienced" },
          topicArea: "work",
        },
        {
          en: "The other dish had more spice.",
          bn: "অন্য খাবারটায় বেশি মশলা ছিল।",
          slotValues: { THING: "dish", DESC: "had more spice" },
          topicArea: "food",
        },
        {
          en: "The other pharmacy is closer.",
          bn: "অন্য ফার্মেসিটা কাছে।",
          slotValues: { THING: "pharmacy", DESC: "closer" },
          topicArea: "health",
        },
        {
          en: "The other road is less crowded.",
          bn: "অন্য রাস্তাটায় কম ভিড়।",
          slotValues: { THING: "road", DESC: "less crowded" },
          topicArea: "travel",
        },
        {
          en: "The other student finished first.",
          bn: "অন্য ছাত্রটি আগে শেষ করেছে।",
          slotValues: { THING: "student", DESC: "finished first" },
          topicArea: "education",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "'The other' refers to a specific remaining one when there are two, or the rest of a known group.",
      usageNote_bn:
        "'The other' দুটোর মধ্যে বাকি নির্দিষ্ট একটি, বা একটি পরিচিত দলের বাকি অংশ বোঝায়।",
    },
    {
      id: "N6.3",
      formula: "Some [PEOPLE/THINGS]... others [ACTION/DESC]",
      formula_bn: "কেউ কেউ/কিছু... অন্যরা [কাজ/বর্ণনা]",
      patternName: "Some... Others",
      patternName_bn: "কেউ... অন্যরা",
      slots: [
        {
          name: "PEOPLE/THINGS",
          description: "A plural noun for the first group",
          description_bn: "প্রথম দলের জন্য বহুবচন বিশেষ্য",
          acceptedTypes: ["noun"],
          examples: ["people", "students", "days"],
        },
        {
          name: "ACTION/DESC",
          description:
            "What the second group does or is like",
          description_bn: "দ্বিতীয় দল কী করে বা কেমন",
          acceptedTypes: ["verb_phrase", "adjective_phrase"],
          examples: ["prefer tea", "disagree", "are harder"],
        },
      ],
      examples: [
        {
          en: "Some people like coffee; others prefer tea.",
          bn: "কেউ কেউ কফি পছন্দ করে; অন্যরা চা পছন্দ করে।",
          slotValues: {
            "PEOPLE/THINGS": "people",
            "ACTION/DESC": "prefer tea",
          },
          topicArea: "food",
        },
        {
          en: "Some students passed; others failed.",
          bn: "কিছু ছাত্র পাশ করেছে; অন্যরা ফেল করেছে।",
          slotValues: { "PEOPLE/THINGS": "students", "ACTION/DESC": "failed" },
          topicArea: "education",
        },
        {
          en: "Some days are good; others are terrible.",
          bn: "কিছু দিন ভালো; অন্য দিনগুলো খারাপ।",
          slotValues: {
            "PEOPLE/THINGS": "days",
            "ACTION/DESC": "are terrible",
          },
          topicArea: "daily_life",
        },
        {
          en: "Some agreed with the decision; others disagreed.",
          bn: "কেউ কেউ সিদ্ধান্তে রাজি ছিল; অন্যরা রাজি ছিল না।",
          slotValues: {
            "PEOPLE/THINGS": "colleagues",
            "ACTION/DESC": "disagreed",
          },
          topicArea: "work",
        },
        {
          en: "Some patients recovered quickly; others took months.",
          bn: "কিছু রোগী দ্রুত সুস্থ হয়েছে; অন্যদের মাসখানেক লেগেছে।",
          slotValues: {
            "PEOPLE/THINGS": "patients",
            "ACTION/DESC": "took months",
          },
          topicArea: "health",
        },
        {
          en: "Some roads are smooth; others are full of potholes.",
          bn: "কিছু রাস্তা মসৃণ; অন্যগুলো গর্তে ভরা।",
          slotValues: {
            "PEOPLE/THINGS": "roads",
            "ACTION/DESC": "are full of potholes",
          },
          topicArea: "travel",
        },
        {
          en: "Some shops offer discounts; others don't.",
          bn: "কিছু দোকান ডিসকাউন্ট দেয়; অন্যরা দেয় না।",
          slotValues: { "PEOPLE/THINGS": "shops", "ACTION/DESC": "don't" },
          topicArea: "shopping",
        },
        {
          en: "Some friends help you; others just talk.",
          bn: "কিছু বন্ধু সাহায্য করে; অন্যরা শুধু কথা বলে।",
          slotValues: {
            "PEOPLE/THINGS": "friends",
            "ACTION/DESC": "just talk",
          },
          topicArea: "relationships",
        },
        {
          en: "Some dishes are mild; others are very spicy.",
          bn: "কিছু খাবার মৃদু; অন্যগুলো অনেক ঝাল।",
          slotValues: {
            "PEOPLE/THINGS": "dishes",
            "ACTION/DESC": "are very spicy",
          },
          topicArea: "food",
        },
        {
          en: "Some teachers are strict; others are relaxed.",
          bn: "কিছু শিক্ষক কড়া; অন্যরা নরম।",
          slotValues: {
            "PEOPLE/THINGS": "teachers",
            "ACTION/DESC": "are relaxed",
          },
          topicArea: "education",
        },
        {
          en: "Some tasks are easy; others require more effort.",
          bn: "কিছু কাজ সহজ; অন্যগুলোতে বেশি পরিশ্রম লাগে।",
          slotValues: {
            "PEOPLE/THINGS": "tasks",
            "ACTION/DESC": "require more effort",
          },
          topicArea: "work",
        },
        {
          en: "Some medicines work fast; others take time.",
          bn: "কিছু ওষুধ দ্রুত কাজ করে; অন্যগুলো সময় নেয়।",
          slotValues: {
            "PEOPLE/THINGS": "medicines",
            "ACTION/DESC": "take time",
          },
          topicArea: "health",
        },
        {
          en: "Some cities are noisy; others are peaceful.",
          bn: "কিছু শহর কোলাহলপূর্ণ; অন্যগুলো শান্ত।",
          slotValues: {
            "PEOPLE/THINGS": "cities",
            "ACTION/DESC": "are peaceful",
          },
          topicArea: "travel",
        },
        {
          en: "Some neighbors are helpful; others keep to themselves.",
          bn: "কিছু প্রতিবেশী সাহায্যকারী; অন্যরা নিজেদের মধ্যেই থাকে।",
          slotValues: {
            "PEOPLE/THINGS": "neighbors",
            "ACTION/DESC": "keep to themselves",
          },
          topicArea: "relationships",
        },
        {
          en: "Some products are cheap; others are overpriced.",
          bn: "কিছু পণ্য সস্তা; অন্যগুলো বেশি দামি।",
          slotValues: {
            "PEOPLE/THINGS": "products",
            "ACTION/DESC": "are overpriced",
          },
          topicArea: "shopping",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "'Some... others' is used to contrast two groups. 'Others' (without 'the') refers to additional, unspecified members of a group.",
      usageNote_bn:
        "'Some... others' দুটি দলের মধ্যে তুলনা করতে ব্যবহৃত হয়। 'Others' ('the' ছাড়া) অতিরিক্ত, অনির্দিষ্ট সদস্য বোঝায়।",
    },
    {
      id: "N6.4",
      formula: "Other [THINGS] are [DESC]",
      formula_bn: "অন্য [জিনিসগুলো] [বর্ণনা]",
      patternName: "Other (Additional Unspecified)",
      patternName_bn: "Other (অতিরিক্ত অনির্দিষ্ট)",
      slots: [
        {
          name: "THINGS",
          description: "A plural noun for unspecified additional items",
          description_bn: "অতিরিক্ত অনির্দিষ্ট আইটেমের জন্য বহুবচন বিশেষ্য",
          acceptedTypes: ["noun", "noun_phrase"],
          examples: ["countries", "reasons", "options"],
        },
        {
          name: "DESC",
          description: "An adjective or descriptive phrase",
          description_bn: "একটি বিশেষণ বা বর্ণনামূলক পদবন্ধ",
          acceptedTypes: ["adjective", "adjective_phrase"],
          examples: ["also affected", "more important", "available"],
        },
      ],
      examples: [
        {
          en: "Other countries also have this problem.",
          bn: "অন্য দেশগুলোরও এই সমস্যা আছে।",
          slotValues: {
            THINGS: "countries",
            DESC: "also have this problem",
          },
          topicArea: "daily_life",
        },
        {
          en: "There are other reasons to consider.",
          bn: "বিবেচনা করার মতো অন্য কারণও আছে।",
          slotValues: { THINGS: "reasons", DESC: "to consider" },
          topicArea: "work",
        },
        {
          en: "Other options are available.",
          bn: "অন্য অপশনও পাওয়া যায়।",
          slotValues: { THINGS: "options", DESC: "available" },
          topicArea: "shopping",
        },
        {
          en: "Other students also had complaints.",
          bn: "অন্য ছাত্রদেরও অভিযোগ ছিল।",
          slotValues: { THINGS: "students", DESC: "also had complaints" },
          topicArea: "education",
        },
        {
          en: "Other doctors may have different opinions.",
          bn: "অন্য ডাক্তারদের ভিন্ন মতামত থাকতে পারে।",
          slotValues: {
            THINGS: "doctors",
            DESC: "may have different opinions",
          },
          topicArea: "health",
        },
        {
          en: "Other cities have better public transport.",
          bn: "অন্য শহরগুলোতে বেশি ভালো গণপরিবহন আছে।",
          slotValues: {
            THINGS: "cities",
            DESC: "have better public transport",
          },
          topicArea: "travel",
        },
        {
          en: "Other dishes on the menu looked good too.",
          bn: "মেনুর অন্য খাবারগুলোও ভালো দেখাচ্ছিল।",
          slotValues: {
            THINGS: "dishes on the menu",
            DESC: "looked good too",
          },
          topicArea: "food",
        },
        {
          en: "Other employees had similar concerns.",
          bn: "অন্য কর্মচারীদেরও একই রকম উদ্বেগ ছিল।",
          slotValues: {
            THINGS: "employees",
            DESC: "had similar concerns",
          },
          topicArea: "work",
        },
        {
          en: "Other families in the area are friendly.",
          bn: "এলাকার অন্য পরিবারগুলো বন্ধুসুলভ।",
          slotValues: {
            THINGS: "families in the area",
            DESC: "are friendly",
          },
          topicArea: "relationships",
        },
        {
          en: "Other hotels might be more affordable.",
          bn: "অন্য হোটেলগুলো বেশি সাশ্রয়ী হতে পারে।",
          slotValues: {
            THINGS: "hotels",
            DESC: "might be more affordable",
          },
          topicArea: "travel",
        },
        {
          en: "Other subjects are harder.",
          bn: "অন্য বিষয়গুলো কঠিন।",
          slotValues: { THINGS: "subjects", DESC: "are harder" },
          topicArea: "education",
        },
        {
          en: "Other brands are more expensive.",
          bn: "অন্য ব্র্যান্ডগুলো বেশি দামি।",
          slotValues: { THINGS: "brands", DESC: "are more expensive" },
          topicArea: "shopping",
        },
        {
          en: "Other symptoms may appear later.",
          bn: "অন্য লক্ষণ পরে দেখা দিতে পারে।",
          slotValues: { THINGS: "symptoms", DESC: "may appear later" },
          topicArea: "health",
        },
        {
          en: "Other people might disagree.",
          bn: "অন্য লোকেরা দ্বিমত করতে পারে।",
          slotValues: { THINGS: "people", DESC: "might disagree" },
          topicArea: "daily_life",
        },
        {
          en: "Other restaurants close earlier.",
          bn: "অন্য রেস্তোরাঁগুলো আগে বন্ধ হয়।",
          slotValues: { THINGS: "restaurants", DESC: "close earlier" },
          topicArea: "food",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "'Other' (without 'the') + plural noun refers to additional, unspecified members of a group. It's different from 'the other' which is specific.",
      usageNote_bn:
        "'Other' ('the' ছাড়া) + বহুবচন বিশেষ্য একটি দলের অতিরিক্ত, অনির্দিষ্ট সদস্য বোঝায়। 'The other' নির্দিষ্ট, যা ভিন্ন।",
    },
    {
      id: "N6.5",
      formula: "The others [ACTION+ED]",
      formula_bn: "বাকিরা [কাজ করেছে]",
      patternName: "The Others (Remaining Group)",
      patternName_bn: "The Others (বাকি দল)",
      slots: [
        {
          name: "ACTION+ED",
          description: "A verb phrase describing what the remaining group did",
          description_bn:
            "বাকি দল কী করেছে তা বর্ণনাকারী ক্রিয়া পদবন্ধ",
          acceptedTypes: ["verb_phrase"],
          examples: ["went home", "stayed behind", "agreed"],
        },
      ],
      examples: [
        {
          en: "I left early, but the others stayed.",
          bn: "আমি তাড়াতাড়ি চলে গেছি, কিন্তু বাকিরা থেকেছে।",
          slotValues: { "ACTION+ED": "stayed" },
          topicArea: "daily_life",
        },
        {
          en: "Two students passed; the others failed.",
          bn: "দুজন ছাত্র পাশ করেছে; বাকিরা ফেল করেছে।",
          slotValues: { "ACTION+ED": "failed" },
          topicArea: "education",
        },
        {
          en: "I took one bag; the others are in the car.",
          bn: "আমি একটা ব্যাগ নিয়েছি; বাকিগুলো গাড়িতে।",
          slotValues: { "ACTION+ED": "are in the car" },
          topicArea: "travel",
        },
        {
          en: "Some ordered biryani; the others chose pasta.",
          bn: "কেউ কেউ বিরিয়ানি অর্ডার করেছে; বাকিরা পাস্তা বেছেছে।",
          slotValues: { "ACTION+ED": "chose pasta" },
          topicArea: "food",
        },
        {
          en: "One doctor was busy; the others were available.",
          bn: "একজন ডাক্তার ব্যস্ত ছিলেন; বাকিরা ছিলেন।",
          slotValues: { "ACTION+ED": "were available" },
          topicArea: "health",
        },
        {
          en: "He finished first; the others took longer.",
          bn: "সে আগে শেষ করেছে; বাকিদের বেশি সময় লেগেছে।",
          slotValues: { "ACTION+ED": "took longer" },
          topicArea: "work",
        },
        {
          en: "I kept one shirt; the others I returned.",
          bn: "আমি একটা শার্ট রেখেছি; বাকিগুলো ফেরত দিয়েছি।",
          slotValues: { "ACTION+ED": "I returned" },
          topicArea: "shopping",
        },
        {
          en: "She agreed, but the others didn't.",
          bn: "সে রাজি ছিল, কিন্তু বাকিরা ছিল না।",
          slotValues: { "ACTION+ED": "didn't" },
          topicArea: "work",
        },
        {
          en: "I read three chapters; the others are for tomorrow.",
          bn: "আমি তিনটা অধ্যায় পড়েছি; বাকিগুলো আগামীকালের জন্য।",
          slotValues: { "ACTION+ED": "are for tomorrow" },
          topicArea: "education",
        },
        {
          en: "Two friends came; the others cancelled.",
          bn: "দুজন বন্ধু এসেছে; বাকিরা বাতিল করেছে।",
          slotValues: { "ACTION+ED": "cancelled" },
          topicArea: "relationships",
        },
        {
          en: "We visited one museum; the others were closed.",
          bn: "আমরা একটা জাদুঘর দেখেছি; বাকিগুলো বন্ধ ছিল।",
          slotValues: { "ACTION+ED": "were closed" },
          topicArea: "travel",
        },
        {
          en: "I tried one dish; the others looked too spicy.",
          bn: "আমি একটা খাবার চেখেছি; বাকিগুলো অনেক ঝাল দেখাচ্ছিল।",
          slotValues: { "ACTION+ED": "looked too spicy" },
          topicArea: "food",
        },
        {
          en: "One patient recovered; the others are still in treatment.",
          bn: "একজন রোগী সুস্থ হয়েছে; বাকিরা এখনো চিকিৎসাধীন।",
          slotValues: { "ACTION+ED": "are still in treatment" },
          topicArea: "health",
        },
        {
          en: "I completed my task; the others are still working.",
          bn: "আমি আমার কাজ শেষ করেছি; বাকিরা এখনো করছে।",
          slotValues: { "ACTION+ED": "are still working" },
          topicArea: "work",
        },
        {
          en: "We invited everyone, but the others couldn't make it.",
          bn: "আমরা সবাইকে আমন্ত্রণ করেছি, কিন্তু বাকিরা আসতে পারেনি।",
          slotValues: { "ACTION+ED": "couldn't make it" },
          topicArea: "relationships",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "'The others' (with 'the') refers to the specific remaining members of a known group. Without a noun, 'others' acts as a pronoun.",
      usageNote_bn:
        "'The others' ('the' সহ) একটি পরিচিত দলের নির্দিষ্ট বাকি সদস্যদের বোঝায়। বিশেষ্য ছাড়া 'others' সর্বনাম হিসেবে কাজ করে।",
    },
  ],
};
