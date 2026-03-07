import { PatternCategory } from "@/types/pattern";

export const categoryX7: PatternCategory = {
  id: "X7",
  slug: "uncountable-noun-mistakes",
  name: "Uncountable Noun Mistakes",
  name_bn: "অগণনীয় বিশেষ্য ভুল",
  description:
    "Fix mistakes with uncountable nouns. Bangla treats most nouns as countable, but English has strict rules about uncountable nouns.",
  description_bn:
    "অগণনীয় বিশেষ্যের ভুল ঠিক করুন। বাংলায় বেশিরভাগ বিশেষ্য গণনীয়, কিন্তু ইংরেজিতে অগণনীয় বিশেষ্যের কঠোর নিয়ম আছে।",
  icon: "📊",
  group: "X",
  groupName: "Common Mistakes by Bangla Speakers",
  groupName_bn: "বাংলা ভাষীদের সাধারণ ভুল",
  difficulty: "beginner",
  patterns: [
    {
      id: "X7.1",
      formula: "I need [UNCOUNTABLE NOUN]",
      formula_bn: "আমার [অগণনীয় বিশেষ্য] দরকার",
      patternName: "No Plural -s on Uncountable",
      patternName_bn: "অগণনীয়তে বহুবচন -s নেই",
      slots: [
        {
          name: "UNCOUNTABLE NOUN",
          description:
            "An uncountable noun — never add -s. Wrong: informations, furnitures, advices",
          description_bn:
            "একটি অগণনীয় বিশেষ্য — কখনো -s যোগ করবেন না। ভুল: informations, furnitures, advices",
          acceptedTypes: ["noun"],
          examples: ["information", "furniture", "advice"],
        },
      ],
      examples: [
        {
          en: "I need information about the course.",
          bn: "আমার কোর্স সম্পর্কে তথ্য দরকার।",
          slotValues: { "UNCOUNTABLE NOUN": "information" },
          topicArea: "education",
        },
        {
          en: "We need new furniture for the office.",
          bn: "আমাদের অফিসের জন্য নতুন আসবাবপত্র দরকার।",
          slotValues: { "UNCOUNTABLE NOUN": "furniture" },
          topicArea: "work",
        },
        {
          en: "She gave me good advice.",
          bn: "সে আমাকে ভালো পরামর্শ দিয়েছে।",
          slotValues: { "UNCOUNTABLE NOUN": "advice" },
          topicArea: "daily_life",
        },
        {
          en: "How much luggage do you have?",
          bn: "তোমার কতটা মালপত্র আছে?",
          slotValues: { "UNCOUNTABLE NOUN": "luggage" },
          topicArea: "travel",
        },
        {
          en: "We need more equipment for the lab.",
          bn: "আমাদের ল্যাবের জন্য আরও সরঞ্জাম দরকার।",
          slotValues: { "UNCOUNTABLE NOUN": "equipment" },
          topicArea: "education",
        },
        {
          en: "I have a lot of homework today.",
          bn: "আজ আমার অনেক বাড়ির কাজ আছে।",
          slotValues: { "UNCOUNTABLE NOUN": "homework" },
          topicArea: "education",
        },
        {
          en: "Knowledge is power.",
          bn: "জ্ঞানই শক্তি।",
          slotValues: { "UNCOUNTABLE NOUN": "knowledge" },
          topicArea: "education",
        },
        {
          en: "More research is needed on this topic.",
          bn: "এই বিষয়ে আরও গবেষণা দরকার।",
          slotValues: { "UNCOUNTABLE NOUN": "research" },
          topicArea: "education",
        },
        {
          en: "The police found new evidence.",
          bn: "পুলিশ নতুন প্রমাণ পেয়েছে।",
          slotValues: { "UNCOUNTABLE NOUN": "evidence" },
          topicArea: "daily_life",
        },
        {
          en: "We are making good progress.",
          bn: "আমরা ভালো অগ্রগতি করছি।",
          slotValues: { "UNCOUNTABLE NOUN": "progress" },
          topicArea: "work",
        },
        {
          en: "There is too much traffic today.",
          bn: "আজ খুব বেশি যানজট আছে।",
          slotValues: { "UNCOUNTABLE NOUN": "traffic" },
          topicArea: "travel",
        },
        {
          en: "The weather is nice today.",
          bn: "আজ আবহাওয়া সুন্দর।",
          slotValues: { "UNCOUNTABLE NOUN": "weather" },
          topicArea: "daily_life",
        },
        {
          en: "I heard some interesting news.",
          bn: "আমি কিছু মজার খবর শুনেছি।",
          slotValues: { "UNCOUNTABLE NOUN": "news" },
          topicArea: "daily_life",
        },
        {
          en: "I enjoy listening to music.",
          bn: "আমি গান শুনতে পছন্দ করি।",
          slotValues: { "UNCOUNTABLE NOUN": "music" },
          topicArea: "daily_life",
        },
        {
          en: "Can I have some bread?",
          bn: "আমি কি কিছু রুটি পেতে পারি?",
          slotValues: { "UNCOUNTABLE NOUN": "bread" },
          topicArea: "food",
        },
      ],
      formality: "casual",
      difficulty: "beginner",
      usageNote:
        "Bangla speakers often add -s to uncountable nouns because Bangla treats most nouns as countable. In English, these nouns NEVER take -s: information (not informations), furniture (not furnitures), advice (not advices).",
      usageNote_bn:
        "বাংলা ভাষীরা প্রায়ই অগণনীয় বিশেষ্যে -s যোগ করে কারণ বাংলায় বেশিরভাগ বিশেষ্য গণনীয়। ইংরেজিতে এই বিশেষ্যগুলোতে কখনো -s হয় না: information (informations নয়), furniture (furnitures নয়), advice (advices নয়)।",
      banglaStructureMap:
        "আমার (Subject) + [UNCOUNTABLE NOUN] (Object — no -s) + দরকার (Verb)",
    },
    {
      id: "X7.2",
      formula: "How [MUCH/MANY] [NOUN]?",
      formula_bn: "কত [MUCH/MANY] [বিশেষ্য]?",
      patternName: "Much vs Many",
      patternName_bn: "Much বনাম Many",
      slots: [
        {
          name: "MUCH/MANY",
          description:
            "Use 'much' for uncountable nouns, 'many' for countable plural nouns",
          description_bn:
            "অগণনীয় বিশেষ্যের জন্য 'much', গণনীয় বহুবচন বিশেষ্যের জন্য 'many' ব্যবহার করুন",
          acceptedTypes: ["adjective"],
          examples: ["much", "many"],
        },
        {
          name: "NOUN",
          description: "The noun — countable or uncountable",
          description_bn: "বিশেষ্য — গণনীয় বা অগণনীয়",
          acceptedTypes: ["noun"],
          examples: ["water", "books", "money"],
        },
      ],
      examples: [
        {
          en: "How much water do you drink daily?",
          bn: "তুমি প্রতিদিন কতটুকু পানি পান করো?",
          slotValues: { "MUCH/MANY": "much", NOUN: "water" },
          topicArea: "health",
        },
        {
          en: "How many books do you have?",
          bn: "তোমার কতগুলো বই আছে?",
          slotValues: { "MUCH/MANY": "many", NOUN: "books" },
          topicArea: "education",
        },
        {
          en: "How much money do you need?",
          bn: "তোমার কত টাকা দরকার?",
          slotValues: { "MUCH/MANY": "much", NOUN: "money" },
          topicArea: "daily_life",
        },
        {
          en: "How many students are in the class?",
          bn: "ক্লাসে কতজন ছাত্র আছে?",
          slotValues: { "MUCH/MANY": "many", NOUN: "students" },
          topicArea: "education",
        },
        {
          en: "How much time do we have?",
          bn: "আমাদের কতটুকু সময় আছে?",
          slotValues: { "MUCH/MANY": "much", NOUN: "time" },
          topicArea: "daily_life",
        },
        {
          en: "How many friends did you invite?",
          bn: "তুমি কতজন বন্ধুকে আমন্ত্রণ জানিয়েছো?",
          slotValues: { "MUCH/MANY": "many", NOUN: "friends" },
          topicArea: "relationships",
        },
        {
          en: "How much sugar do you want in your tea?",
          bn: "তোমার চায়ে কতটুকু চিনি চাও?",
          slotValues: { "MUCH/MANY": "much", NOUN: "sugar" },
          topicArea: "food",
        },
        {
          en: "How many eggs do we need?",
          bn: "আমাদের কতগুলো ডিম দরকার?",
          slotValues: { "MUCH/MANY": "many", NOUN: "eggs" },
          topicArea: "food",
        },
        {
          en: "How much experience do you have?",
          bn: "তোমার কতটুকু অভিজ্ঞতা আছে?",
          slotValues: { "MUCH/MANY": "much", NOUN: "experience" },
          topicArea: "work",
        },
        {
          en: "How many languages do you speak?",
          bn: "তুমি কয়টি ভাষায় কথা বলো?",
          slotValues: { "MUCH/MANY": "many", NOUN: "languages" },
          topicArea: "education",
        },
        {
          en: "How much milk is left?",
          bn: "কতটুকু দুধ বাকি আছে?",
          slotValues: { "MUCH/MANY": "much", NOUN: "milk" },
          topicArea: "food",
        },
        {
          en: "How many tickets do you want?",
          bn: "তুমি কয়টি টিকিট চাও?",
          slotValues: { "MUCH/MANY": "many", NOUN: "tickets" },
          topicArea: "travel",
        },
        {
          en: "How much homework did the teacher give?",
          bn: "শিক্ষক কতটুকু বাড়ির কাজ দিয়েছেন?",
          slotValues: { "MUCH/MANY": "much", NOUN: "homework" },
          topicArea: "education",
        },
        {
          en: "How many chairs do we need?",
          bn: "আমাদের কতগুলো চেয়ার দরকার?",
          slotValues: { "MUCH/MANY": "many", NOUN: "chairs" },
          topicArea: "daily_life",
        },
        {
          en: "How much rice should I cook?",
          bn: "আমি কতটুকু ভাত রান্না করবো?",
          slotValues: { "MUCH/MANY": "much", NOUN: "rice" },
          topicArea: "food",
        },
      ],
      formality: "casual",
      difficulty: "beginner",
      usageNote:
        "In Bangla, 'কত' is used for both countable and uncountable nouns. In English, you MUST choose: MUCH for uncountable (water, money, time) and MANY for countable (books, people, chairs). Wrong: 'How many water?' or 'How much books?'",
      usageNote_bn:
        "বাংলায় 'কত' গণনীয় এবং অগণনীয় উভয় বিশেষ্যের জন্য ব্যবহার হয়। ইংরেজিতে আপনাকে অবশ্যই বেছে নিতে হবে: অগণনীয়র জন্য MUCH (water, money, time) এবং গণনীয়র জন্য MANY (books, people, chairs)।",
      banglaStructureMap:
        "কত (How much/many) + [NOUN] (Object) + আছে/দরকার (Verb)",
    },
    {
      id: "X7.3",
      formula: "a [COUNTER] of [UNCOUNTABLE]",
      formula_bn: "এক [গণনাকারী] [অগণনীয়]",
      patternName: "A Piece/Bit of (Counting Uncountable Things)",
      patternName_bn: "একটুকরো/একটু (অগণনীয় জিনিস গোনা)",
      slots: [
        {
          name: "COUNTER",
          description:
            "A counter word: piece, glass, cup, slice, loaf, bottle, grain, bar, sheet, drop, bit",
          description_bn:
            "একটি গণনাকারী শব্দ: piece, glass, cup, slice, loaf, bottle, grain, bar, sheet, drop, bit",
          acceptedTypes: ["noun"],
          examples: ["piece", "glass", "cup", "slice"],
        },
        {
          name: "UNCOUNTABLE",
          description: "An uncountable noun you want to count",
          description_bn: "একটি অগণনীয় বিশেষ্য যা আপনি গুনতে চান",
          acceptedTypes: ["noun"],
          examples: ["information", "water", "bread"],
        },
      ],
      examples: [
        {
          en: "Can I get a piece of information?",
          bn: "আমি কি একটি তথ্য পেতে পারি?",
          slotValues: { COUNTER: "piece", UNCOUNTABLE: "information" },
          topicArea: "daily_life",
        },
        {
          en: "I'd like a glass of water.",
          bn: "আমি এক গ্লাস পানি চাই।",
          slotValues: { COUNTER: "glass", UNCOUNTABLE: "water" },
          topicArea: "food",
        },
        {
          en: "Would you like a cup of tea?",
          bn: "তুমি কি এক কাপ চা নেবে?",
          slotValues: { COUNTER: "cup", UNCOUNTABLE: "tea" },
          topicArea: "food",
        },
        {
          en: "I ate a slice of bread.",
          bn: "আমি এক টুকরো রুটি খেয়েছি।",
          slotValues: { COUNTER: "slice", UNCOUNTABLE: "bread" },
          topicArea: "food",
        },
        {
          en: "Let me give you a piece of advice.",
          bn: "আমি তোমাকে একটি পরামর্শ দিই।",
          slotValues: { COUNTER: "piece", UNCOUNTABLE: "advice" },
          topicArea: "daily_life",
        },
        {
          en: "We need a piece of furniture for the corner.",
          bn: "আমাদের কোণার জন্য একটি আসবাবপত্র দরকার।",
          slotValues: { COUNTER: "piece", UNCOUNTABLE: "furniture" },
          topicArea: "shopping",
        },
        {
          en: "Please buy a bottle of milk.",
          bn: "দয়া করে এক বোতল দুধ কিনো।",
          slotValues: { COUNTER: "bottle", UNCOUNTABLE: "milk" },
          topicArea: "shopping",
        },
        {
          en: "There isn't a grain of rice left.",
          bn: "একটি চালও বাকি নেই।",
          slotValues: { COUNTER: "grain", UNCOUNTABLE: "rice" },
          topicArea: "food",
        },
        {
          en: "I need a bar of soap.",
          bn: "আমার একটি সাবান দরকার।",
          slotValues: { COUNTER: "bar", UNCOUNTABLE: "soap" },
          topicArea: "shopping",
        },
        {
          en: "Can you pass me a sheet of paper?",
          bn: "তুমি কি আমাকে এক পাতা কাগজ দিতে পারো?",
          slotValues: { COUNTER: "sheet", UNCOUNTABLE: "paper" },
          topicArea: "education",
        },
        {
          en: "I have a piece of luggage.",
          bn: "আমার একটি মালপত্র আছে।",
          slotValues: { COUNTER: "piece", UNCOUNTABLE: "luggage" },
          topicArea: "travel",
        },
        {
          en: "We bought a loaf of bread.",
          bn: "আমরা এক পাউরুটি কিনেছি।",
          slotValues: { COUNTER: "loaf", UNCOUNTABLE: "bread" },
          topicArea: "food",
        },
        {
          en: "Not a drop of water was wasted.",
          bn: "এক ফোঁটা পানিও নষ্ট হয়নি।",
          slotValues: { COUNTER: "drop", UNCOUNTABLE: "water" },
          topicArea: "daily_life",
        },
        {
          en: "I just heard a piece of news.",
          bn: "আমি এইমাত্র একটি খবর শুনলাম।",
          slotValues: { COUNTER: "piece", UNCOUNTABLE: "news" },
          topicArea: "daily_life",
        },
        {
          en: "I could use a bit of help.",
          bn: "আমার একটু সাহায্য হলে ভালো হতো।",
          slotValues: { COUNTER: "bit", UNCOUNTABLE: "help" },
          topicArea: "daily_life",
        },
      ],
      formality: "casual",
      difficulty: "beginner",
      usageNote:
        "Since uncountable nouns can't be counted directly, English uses counter words: a PIECE of advice, a GLASS of water, a SLICE of bread. Bangla uses similar counters (এক গ্লাস, এক টুকরো) so this concept is familiar — just learn which English counter goes with which noun.",
      usageNote_bn:
        "যেহেতু অগণনীয় বিশেষ্য সরাসরি গোনা যায় না, ইংরেজি গণনাকারী শব্দ ব্যবহার করে: a PIECE of advice, a GLASS of water, a SLICE of bread। বাংলায়ও একই রকম গণনাকারী আছে (এক গ্লাস, এক টুকরো) তাই ধারণাটি পরিচিত — শুধু শিখুন কোন ইংরেজি গণনাকারী কোন বিশেষ্যের সাথে যায়।",
      banglaStructureMap:
        "এক (a) + [COUNTER] (গণনাকারী) + [UNCOUNTABLE] (অগণনীয় বিশেষ্য)",
    },
    {
      id: "X7.4",
      formula: "[FEWER/LESS] [NOUN]",
      formula_bn: "[কম] [বিশেষ্য]",
      patternName: "Less vs Fewer",
      patternName_bn: "Less বনাম Fewer",
      slots: [
        {
          name: "FEWER/LESS",
          description:
            "Use 'fewer' for countable plural nouns, 'less' for uncountable nouns",
          description_bn:
            "গণনীয় বহুবচন বিশেষ্যের জন্য 'fewer', অগণনীয় বিশেষ্যের জন্য 'less' ব্যবহার করুন",
          acceptedTypes: ["adjective"],
          examples: ["fewer", "less"],
        },
        {
          name: "NOUN",
          description: "The noun — countable plural or uncountable",
          description_bn: "বিশেষ্য — গণনীয় বহুবচন বা অগণনীয়",
          acceptedTypes: ["noun"],
          examples: ["people", "water", "mistakes"],
        },
      ],
      examples: [
        {
          en: "There are fewer people today.",
          bn: "আজ কম লোক আছে।",
          slotValues: { "FEWER/LESS": "fewer", NOUN: "people" },
          topicArea: "daily_life",
        },
        {
          en: "I should drink less coffee.",
          bn: "আমার কম কফি পান করা উচিত।",
          slotValues: { "FEWER/LESS": "less", NOUN: "coffee" },
          topicArea: "health",
        },
        {
          en: "We need fewer chairs in this room.",
          bn: "এই ঘরে আমাদের কম চেয়ার দরকার।",
          slotValues: { "FEWER/LESS": "fewer", NOUN: "chairs" },
          topicArea: "daily_life",
        },
        {
          en: "Please use less sugar.",
          bn: "দয়া করে কম চিনি ব্যবহার করুন।",
          slotValues: { "FEWER/LESS": "less", NOUN: "sugar" },
          topicArea: "food",
        },
        {
          en: "There are fewer students this year.",
          bn: "এ বছর কম ছাত্র আছে।",
          slotValues: { "FEWER/LESS": "fewer", NOUN: "students" },
          topicArea: "education",
        },
        {
          en: "I have less time now.",
          bn: "আমার এখন কম সময় আছে।",
          slotValues: { "FEWER/LESS": "less", NOUN: "time" },
          topicArea: "daily_life",
        },
        {
          en: "There were fewer cars on the road.",
          bn: "রাস্তায় কম গাড়ি ছিল।",
          slotValues: { "FEWER/LESS": "fewer", NOUN: "cars" },
          topicArea: "travel",
        },
        {
          en: "We should eat less salt.",
          bn: "আমাদের কম লবণ খাওয়া উচিত।",
          slotValues: { "FEWER/LESS": "less", NOUN: "salt" },
          topicArea: "health",
        },
        {
          en: "Fewer mistakes were made this time.",
          bn: "এবার কম ভুল হয়েছে।",
          slotValues: { "FEWER/LESS": "fewer", NOUN: "mistakes" },
          topicArea: "work",
        },
        {
          en: "I want to spend less money.",
          bn: "আমি কম টাকা খরচ করতে চাই।",
          slotValues: { "FEWER/LESS": "less", NOUN: "money" },
          topicArea: "daily_life",
        },
        {
          en: "Fewer options are available now.",
          bn: "এখন কম বিকল্প পাওয়া যাচ্ছে।",
          slotValues: { "FEWER/LESS": "fewer", NOUN: "options" },
          topicArea: "shopping",
        },
        {
          en: "There is less traffic at night.",
          bn: "রাতে কম যানজট থাকে।",
          slotValues: { "FEWER/LESS": "less", NOUN: "traffic" },
          topicArea: "travel",
        },
        {
          en: "Fewer workers came to the factory.",
          bn: "কম শ্রমিক কারখানায় এসেছিল।",
          slotValues: { "FEWER/LESS": "fewer", NOUN: "workers" },
          topicArea: "work",
        },
        {
          en: "We need less noise in the library.",
          bn: "লাইব্রেরিতে আমাদের কম শব্দ দরকার।",
          slotValues: { "FEWER/LESS": "less", NOUN: "noise" },
          topicArea: "education",
        },
        {
          en: "Fewer tourists visit in winter.",
          bn: "শীতকালে কম পর্যটক আসে।",
          slotValues: { "FEWER/LESS": "fewer", NOUN: "tourists" },
          topicArea: "travel",
        },
      ],
      formality: "casual",
      difficulty: "beginner",
      usageNote:
        "In Bangla, 'কম' is used for both countable and uncountable nouns. In English, use FEWER for countable nouns (fewer people, fewer books) and LESS for uncountable nouns (less water, less time). Wrong: 'less people' or 'fewer water'.",
      usageNote_bn:
        "বাংলায় 'কম' গণনীয় এবং অগণনীয় উভয় বিশেষ্যের জন্য ব্যবহার হয়। ইংরেজিতে গণনীয় বিশেষ্যের জন্য FEWER (fewer people, fewer books) এবং অগণনীয় বিশেষ্যের জন্য LESS (less water, less time) ব্যবহার করুন।",
      banglaStructureMap:
        "কম (Fewer/Less) + [NOUN] (বিশেষ্য) + আছে/ছিল (Verb)",
    },
    {
      id: "X7.5",
      formula: "I want [SOME/ANY] [UNCOUNTABLE]",
      formula_bn: "আমি [কিছু] [অগণনীয়] চাই",
      patternName: "Some/Any with Uncountable",
      patternName_bn: "অগণনীয়র সাথে Some/Any",
      slots: [
        {
          name: "SOME/ANY",
          description:
            "Use 'some' in positive sentences, 'any' in questions and negatives. Never use 'a' with uncountable nouns.",
          description_bn:
            "ইতিবাচক বাক্যে 'some', প্রশ্ন ও নেতিবাচক বাক্যে 'any' ব্যবহার করুন। অগণনীয় বিশেষ্যের সাথে কখনো 'a' ব্যবহার করবেন না।",
          acceptedTypes: ["adjective"],
          examples: ["some", "any"],
        },
        {
          name: "UNCOUNTABLE",
          description:
            "An uncountable noun. Wrong: 'a rice', 'a water'. Right: 'some rice', 'some water'",
          description_bn:
            "একটি অগণনীয় বিশেষ্য। ভুল: 'a rice', 'a water'। সঠিক: 'some rice', 'some water'",
          acceptedTypes: ["noun"],
          examples: ["rice", "water", "milk"],
        },
      ],
      examples: [
        {
          en: "I want some rice.",
          bn: "আমি কিছু ভাত চাই।",
          slotValues: { "SOME/ANY": "some", UNCOUNTABLE: "rice" },
          topicArea: "food",
        },
        {
          en: "Do you have any water?",
          bn: "তোমার কি কিছু পানি আছে?",
          slotValues: { "SOME/ANY": "any", UNCOUNTABLE: "water" },
          topicArea: "food",
        },
        {
          en: "I need some milk for the recipe.",
          bn: "রেসিপির জন্য আমার কিছু দুধ দরকার।",
          slotValues: { "SOME/ANY": "some", UNCOUNTABLE: "milk" },
          topicArea: "food",
        },
        {
          en: "We don't have any sugar.",
          bn: "আমাদের কোনো চিনি নেই।",
          slotValues: { "SOME/ANY": "any", UNCOUNTABLE: "sugar" },
          topicArea: "food",
        },
        {
          en: "I'd like some coffee, please.",
          bn: "আমি কিছু কফি চাই, প্লিজ।",
          slotValues: { "SOME/ANY": "some", UNCOUNTABLE: "coffee" },
          topicArea: "food",
        },
        {
          en: "Is there any space left?",
          bn: "কি কোনো জায়গা বাকি আছে?",
          slotValues: { "SOME/ANY": "any", UNCOUNTABLE: "space" },
          topicArea: "daily_life",
        },
        {
          en: "I want some help with this.",
          bn: "এটায় আমি কিছু সাহায্য চাই।",
          slotValues: { "SOME/ANY": "some", UNCOUNTABLE: "help" },
          topicArea: "daily_life",
        },
        {
          en: "Do you have any experience in this field?",
          bn: "এই ক্ষেত্রে তোমার কি কোনো অভিজ্ঞতা আছে?",
          slotValues: { "SOME/ANY": "any", UNCOUNTABLE: "experience" },
          topicArea: "work",
        },
        {
          en: "I need some money for the trip.",
          bn: "ট্রিপের জন্য আমার কিছু টাকা দরকার।",
          slotValues: { "SOME/ANY": "some", UNCOUNTABLE: "money" },
          topicArea: "travel",
        },
        {
          en: "There isn't any evidence.",
          bn: "কোনো প্রমাণ নেই।",
          slotValues: { "SOME/ANY": "any", UNCOUNTABLE: "evidence" },
          topicArea: "daily_life",
        },
        {
          en: "Can I have some juice?",
          bn: "আমি কি কিছু জুস পেতে পারি?",
          slotValues: { "SOME/ANY": "some", UNCOUNTABLE: "juice" },
          topicArea: "food",
        },
        {
          en: "I don't have any free time.",
          bn: "আমার কোনো অবসর সময় নেই।",
          slotValues: { "SOME/ANY": "any", UNCOUNTABLE: "free time" },
          topicArea: "daily_life",
        },
        {
          en: "We need some furniture for the new house.",
          bn: "নতুন বাড়ির জন্য আমাদের কিছু আসবাবপত্র দরকার।",
          slotValues: { "SOME/ANY": "some", UNCOUNTABLE: "furniture" },
          topicArea: "shopping",
        },
        {
          en: "Do you want any butter on your toast?",
          bn: "তোমার টোস্টে কি কিছু মাখন চাও?",
          slotValues: { "SOME/ANY": "any", UNCOUNTABLE: "butter" },
          topicArea: "food",
        },
        {
          en: "I got some advice from my teacher.",
          bn: "আমি আমার শিক্ষকের কাছ থেকে কিছু পরামর্শ পেয়েছি।",
          slotValues: { "SOME/ANY": "some", UNCOUNTABLE: "advice" },
          topicArea: "education",
        },
      ],
      formality: "casual",
      difficulty: "beginner",
      usageNote:
        "Bangla speakers often say 'a rice' or 'a water' because Bangla uses 'একটু ভাত' or 'একটু পানি'. In English, NEVER use 'a/an' with uncountable nouns. Use SOME in positive sentences ('I want some rice') and ANY in questions and negatives ('Do you have any water?', 'I don't have any money').",
      usageNote_bn:
        "বাংলা ভাষীরা প্রায়ই 'a rice' বা 'a water' বলে কারণ বাংলায় 'একটু ভাত' বা 'একটু পানি' বলা হয়। ইংরেজিতে অগণনীয় বিশেষ্যের সাথে কখনো 'a/an' ব্যবহার করবেন না। ইতিবাচক বাক্যে SOME ('I want some rice') এবং প্রশ্ন ও নেতিবাচক বাক্যে ANY ('Do you have any water?', 'I don't have any money') ব্যবহার করুন।",
      banglaStructureMap:
        "আমি (Subject) + কিছু/কোনো (Some/Any) + [UNCOUNTABLE] (Object) + চাই (Verb)",
    },
  ],
};
