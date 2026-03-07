import { PatternCategory } from "@/types/pattern";

export const categoryX10: PatternCategory = {
  id: "X10",
  slug: "confusing-word-pairs",
  name: "Confusing Word Pairs",
  name_bn: "বিভ্রান্তিকর শব্দ জোড়া",
  description:
    "Stop confusing these commonly mixed-up word pairs. Bangla speakers often swap these because they share similar Bangla translations.",
  description_bn:
    "এই সাধারণভাবে গুলিয়ে ফেলা শব্দ জোড়া বিভ্রান্তি বন্ধ করুন। বাংলা ভাষীরা প্রায়ই এগুলো গুলিয়ে ফেলে কারণ বাংলায় একই অনুবাদ।",
  icon: "🔄",
  group: "X",
  groupName: "Common Mistakes by Bangla Speakers",
  groupName_bn: "বাংলা ভাষীদের সাধারণ ভুল",
  difficulty: "beginner",
  patterns: [
    {
      id: "X10.1",
      formula: "[PERSON] said [CLAUSE] / [PERSON] told [PERSON] [CLAUSE]",
      formula_bn:
        "[ব্যক্তি] বলেছিল [উপবাক্য] / [ব্যক্তি] [ব্যক্তি]-কে বলেছিল [উপবাক্য]",
      patternName: "Say vs Tell",
      patternName_bn: "Say বনাম Tell",
      slots: [
        {
          name: "PERSON",
          description:
            "SAY = no person needed after it. TELL = always needs a person after it.",
          description_bn:
            "SAY = এর পরে ব্যক্তি লাগে না। TELL = এর পরে সবসময় ব্যক্তি লাগে।",
          acceptedTypes: ["person"],
          examples: ["He", "She", "The teacher"],
        },
        {
          name: "CLAUSE",
          description: "What was said",
          description_bn: "কী বলা হয়েছিল",
          acceptedTypes: ["clause"],
          examples: ["it was raining", "to come early"],
        },
      ],
      examples: [
        {
          en: "He said he was tired.",
          bn: "সে বলেছিল সে ক্লান্ত।",
          slotValues: { PERSON: "He", CLAUSE: "he was tired" },
          topicArea: "daily_life",
        },
        {
          en: "She told me to wait.",
          bn: "সে আমাকে অপেক্ষা করতে বলেছিল।",
          slotValues: { PERSON: "She", CLAUSE: "to wait" },
          topicArea: "daily_life",
        },
        {
          en: "They said the restaurant was closed.",
          bn: "তারা বলেছিল রেস্তোরাঁ বন্ধ।",
          slotValues: {
            PERSON: "They",
            CLAUSE: "the restaurant was closed",
          },
          topicArea: "food",
        },
        {
          en: "He told her the truth.",
          bn: "সে তাকে সত্যি কথা বলেছিল।",
          slotValues: { PERSON: "He", CLAUSE: "the truth" },
          topicArea: "relationships",
        },
        {
          en: "My father said I should study harder.",
          bn: "আমার বাবা বলেছিলেন আমার আরও পড়া উচিত।",
          slotValues: {
            PERSON: "My father",
            CLAUSE: "I should study harder",
          },
          topicArea: "education",
        },
        {
          en: "The doctor told him to rest.",
          bn: "ডাক্তার তাকে বিশ্রাম নিতে বলেছিলেন।",
          slotValues: { PERSON: "The doctor", CLAUSE: "to rest" },
          topicArea: "health",
        },
        {
          en: "She said she couldn't come.",
          bn: "সে বলেছিল সে আসতে পারবে না।",
          slotValues: { PERSON: "She", CLAUSE: "she couldn't come" },
          topicArea: "daily_life",
        },
        {
          en: "The boss told us to finish by Friday.",
          bn: "বস আমাদের শুক্রবারের মধ্যে শেষ করতে বলেছিলেন।",
          slotValues: {
            PERSON: "The boss",
            CLAUSE: "to finish by Friday",
          },
          topicArea: "work",
        },
        {
          en: "He said it was raining.",
          bn: "সে বলেছিল বৃষ্টি হচ্ছে।",
          slotValues: { PERSON: "He", CLAUSE: "it was raining" },
          topicArea: "daily_life",
        },
        {
          en: "She told me a secret.",
          bn: "সে আমাকে একটা গোপন কথা বলেছিল।",
          slotValues: { PERSON: "She", CLAUSE: "a secret" },
          topicArea: "relationships",
        },
        {
          en: "They said the flight was delayed.",
          bn: "তারা বলেছিল ফ্লাইট দেরি হয়েছে।",
          slotValues: {
            PERSON: "They",
            CLAUSE: "the flight was delayed",
          },
          topicArea: "travel",
        },
        {
          en: "My teacher told me to practice more.",
          bn: "আমার শিক্ষক আমাকে আরও অনুশীলন করতে বলেছিলেন।",
          slotValues: {
            PERSON: "My teacher",
            CLAUSE: "to practice more",
          },
          topicArea: "education",
        },
        {
          en: "He said goodbye and left.",
          bn: "সে বিদায় বলে চলে গেল।",
          slotValues: { PERSON: "He", CLAUSE: "goodbye" },
          topicArea: "daily_life",
        },
        {
          en: "She told him about the meeting.",
          bn: "সে তাকে মিটিং সম্পর্কে বলেছিল।",
          slotValues: { PERSON: "She", CLAUSE: "about the meeting" },
          topicArea: "work",
        },
        {
          en: "The guide said the temple was 500 years old.",
          bn: "গাইড বলেছিলেন মন্দিরটি ৫০০ বছর পুরনো।",
          slotValues: {
            PERSON: "The guide",
            CLAUSE: "the temple was 500 years old",
          },
          topicArea: "travel",
        },
      ],
      formality: "casual",
      difficulty: "beginner",
      usageNote:
        "SAY: 'He said that...' (no person needed). TELL: 'He told ME that...' (person required). In Bangla, 'বলা' covers both. Common mistakes: 'He said me' (wrong — use told). 'He told that' (wrong — needs a person: 'He told me that').",
      usageNote_bn:
        "SAY: 'He said that...' (ব্যক্তি লাগে না)। TELL: 'He told ME that...' (ব্যক্তি আবশ্যক)। বাংলায় 'বলা' দুটোই বোঝায়। সাধারণ ভুল: 'He said me' (ভুল — told ব্যবহার করুন)। 'He told that' (ভুল — ব্যক্তি লাগে: 'He told me that')।",
      banglaStructureMap:
        "SAY: [PERSON] + বলেছিল (said) + [CLAUSE] | TELL: [PERSON] + [ব্যক্তি]-কে + বলেছিল (told) + [CLAUSE]",
    },
    {
      id: "X10.2",
      formula: "Bring [THING] here / Take [THING] there",
      formula_bn: "[জিনিস] এখানে আনো / [জিনিস] ওখানে নিয়ে যাও",
      patternName: "Bring vs Take",
      patternName_bn: "Bring বনাম Take",
      slots: [
        {
          name: "THING",
          description:
            "BRING = movement toward the speaker. TAKE = movement away from the speaker.",
          description_bn:
            "BRING = বক্তার দিকে চলাচল। TAKE = বক্তার থেকে দূরে চলাচল।",
          acceptedTypes: ["noun", "noun_phrase"],
          examples: ["the book", "your umbrella", "this gift"],
        },
      ],
      examples: [
        {
          en: "Bring me a glass of water.",
          bn: "আমার জন্য এক গ্লাস পানি আনো।",
          slotValues: { THING: "a glass of water" },
          topicArea: "daily_life",
        },
        {
          en: "Take this letter to the post office.",
          bn: "এই চিঠিটি পোস্ট অফিসে নিয়ে যাও।",
          slotValues: { THING: "this letter" },
          topicArea: "daily_life",
        },
        {
          en: "Please bring your notebook to class.",
          bn: "দয়া করে তোমার খাতা ক্লাসে আনো।",
          slotValues: { THING: "your notebook" },
          topicArea: "education",
        },
        {
          en: "Take the kids to school.",
          bn: "বাচ্চাদের স্কুলে নিয়ে যাও।",
          slotValues: { THING: "the kids" },
          topicArea: "daily_life",
        },
        {
          en: "Can you bring some food to the party?",
          bn: "তুমি কি পার্টিতে কিছু খাবার আনতে পারো?",
          slotValues: { THING: "some food" },
          topicArea: "food",
        },
        {
          en: "Don't forget to take your umbrella.",
          bn: "তোমার ছাতা নিয়ে যেতে ভুলো না।",
          slotValues: { THING: "your umbrella" },
          topicArea: "daily_life",
        },
        {
          en: "Bring your sister next time.",
          bn: "পরের বার তোমার বোনকে আনো।",
          slotValues: { THING: "your sister" },
          topicArea: "relationships",
        },
        {
          en: "I'll take this gift to grandmother.",
          bn: "আমি এই উপহারটি দাদির কাছে নিয়ে যাবো।",
          slotValues: { THING: "this gift" },
          topicArea: "relationships",
        },
        {
          en: "Bring me the report when it's ready.",
          bn: "রিপোর্ট তৈরি হলে আমার কাছে আনো।",
          slotValues: { THING: "the report" },
          topicArea: "work",
        },
        {
          en: "Take these documents to the manager.",
          bn: "এই কাগজপত্রগুলো ম্যানেজারের কাছে নিয়ে যাও।",
          slotValues: { THING: "these documents" },
          topicArea: "work",
        },
        {
          en: "I'll bring dessert to dinner tonight.",
          bn: "আজ রাতের খাবারে আমি ডেজার্ট আনবো।",
          slotValues: { THING: "dessert" },
          topicArea: "food",
        },
        {
          en: "Take your medicine with you.",
          bn: "তোমার ওষুধ সাথে নিয়ে যাও।",
          slotValues: { THING: "your medicine" },
          topicArea: "health",
        },
        {
          en: "Bring your passport when you come.",
          bn: "আসার সময় তোমার পাসপোর্ট আনো।",
          slotValues: { THING: "your passport" },
          topicArea: "travel",
        },
        {
          en: "Take this bag to the car.",
          bn: "এই ব্যাগটি গাড়িতে নিয়ে যাও।",
          slotValues: { THING: "this bag" },
          topicArea: "travel",
        },
        {
          en: "Can you bring me my phone from the table?",
          bn: "তুমি কি টেবিল থেকে আমার ফোনটা আনতে পারো?",
          slotValues: { THING: "my phone" },
          topicArea: "daily_life",
        },
      ],
      formality: "casual",
      difficulty: "beginner",
      usageNote:
        "BRING = toward the speaker (আনো/come with it). TAKE = away from the speaker (নিয়ে যাও/go with it). In Bangla, 'আনা' (bring/come) and 'নিয়ে যাওয়া' (take/go) exist, but speakers often confuse the English versions. Remember: BRING here, TAKE there.",
      usageNote_bn:
        "BRING = বক্তার দিকে (আনো)। TAKE = বক্তার থেকে দূরে (নিয়ে যাও)। বাংলায় 'আনা' এবং 'নিয়ে যাওয়া' আছে, কিন্তু ভাষীরা প্রায়ই ইংরেজি সংস্করণ গুলিয়ে ফেলে। মনে রাখুন: BRING এখানে, TAKE ওখানে।",
      banglaStructureMap:
        "BRING [THING] (আনো) = toward speaker | TAKE [THING] (নিয়ে যাও) = away from speaker",
    },
    {
      id: "X10.3",
      formula: "Can I borrow [THING]? / Can you lend me [THING]?",
      formula_bn:
        "আমি কি [জিনিস] ধার নিতে পারি? / তুমি কি আমাকে [জিনিস] ধার দিতে পারো?",
      patternName: "Lend vs Borrow",
      patternName_bn: "Lend বনাম Borrow",
      slots: [
        {
          name: "THING",
          description:
            "BORROW = you receive temporarily. LEND = you give temporarily. The direction matters!",
          description_bn:
            "BORROW = আপনি সাময়িকভাবে গ্রহণ করেন। LEND = আপনি সাময়িকভাবে দেন। দিক গুরুত্বপূর্ণ!",
          acceptedTypes: ["noun", "noun_phrase"],
          examples: ["your pen", "some money", "your car"],
        },
      ],
      examples: [
        {
          en: "Can I borrow your pen?",
          bn: "আমি কি তোমার কলম ধার নিতে পারি?",
          slotValues: { THING: "your pen" },
          topicArea: "education",
        },
        {
          en: "Can you lend me some money?",
          bn: "তুমি কি আমাকে কিছু টাকা ধার দিতে পারো?",
          slotValues: { THING: "some money" },
          topicArea: "daily_life",
        },
        {
          en: "I borrowed a book from the library.",
          bn: "আমি লাইব্রেরি থেকে একটি বই ধার নিয়েছি।",
          slotValues: { THING: "a book" },
          topicArea: "education",
        },
        {
          en: "She lent me her umbrella.",
          bn: "সে আমাকে তার ছাতা ধার দিয়েছে।",
          slotValues: { THING: "her umbrella" },
          topicArea: "daily_life",
        },
        {
          en: "Can I borrow your charger?",
          bn: "আমি কি তোমার চার্জার ধার নিতে পারি?",
          slotValues: { THING: "your charger" },
          topicArea: "daily_life",
        },
        {
          en: "He lent his car to his friend.",
          bn: "সে তার বন্ধুকে গাড়ি ধার দিয়েছে।",
          slotValues: { THING: "his car" },
          topicArea: "daily_life",
        },
        {
          en: "I need to borrow a calculator for the exam.",
          bn: "পরীক্ষার জন্য আমাকে একটা ক্যালকুলেটর ধার নিতে হবে।",
          slotValues: { THING: "a calculator" },
          topicArea: "education",
        },
        {
          en: "Could you lend me your notes?",
          bn: "তুমি কি আমাকে তোমার নোট ধার দিতে পারো?",
          slotValues: { THING: "your notes" },
          topicArea: "education",
        },
        {
          en: "She borrowed my jacket for the evening.",
          bn: "সে সন্ধ্যার জন্য আমার জ্যাকেট ধার নিয়েছে।",
          slotValues: { THING: "my jacket" },
          topicArea: "daily_life",
        },
        {
          en: "I can lend you my bike.",
          bn: "আমি তোমাকে আমার বাইক ধার দিতে পারি।",
          slotValues: { THING: "my bike" },
          topicArea: "travel",
        },
        {
          en: "Can I borrow your phone for a minute?",
          bn: "আমি কি এক মিনিটের জন্য তোমার ফোন ধার নিতে পারি?",
          slotValues: { THING: "your phone" },
          topicArea: "daily_life",
        },
        {
          en: "The bank lent him the money for the house.",
          bn: "ব্যাংক তাকে বাড়ির জন্য টাকা ধার দিয়েছে।",
          slotValues: { THING: "the money" },
          topicArea: "daily_life",
        },
        {
          en: "I borrowed some sugar from my neighbor.",
          bn: "আমি প্রতিবেশীর কাছ থেকে কিছু চিনি ধার নিয়েছি।",
          slotValues: { THING: "some sugar" },
          topicArea: "food",
        },
        {
          en: "Will you lend me your dictionary?",
          bn: "তুমি কি আমাকে তোমার অভিধান ধার দেবে?",
          slotValues: { THING: "your dictionary" },
          topicArea: "education",
        },
        {
          en: "He borrowed a suit for the interview.",
          bn: "সে ইন্টারভিউয়ের জন্য একটি স্যুট ধার নিয়েছে।",
          slotValues: { THING: "a suit" },
          topicArea: "work",
        },
      ],
      formality: "casual",
      difficulty: "beginner",
      usageNote:
        "BORROW = receive temporarily (ধার নেওয়া). You borrow FROM someone. LEND = give temporarily (ধার দেওয়া). You lend TO someone. In Bangla, 'ধার' covers both directions. Common mistake: 'Can you borrow me your pen?' (wrong). Right: 'Can you LEND me your pen?' or 'Can I BORROW your pen?'",
      usageNote_bn:
        "BORROW = সাময়িকভাবে গ্রহণ করা (ধার নেওয়া)। কারো কাছ থেকে borrow করেন। LEND = সাময়িকভাবে দেওয়া (ধার দেওয়া)। কাউকে lend করেন। বাংলায় 'ধার' উভয় দিকই বোঝায়। সাধারণ ভুল: 'Can you borrow me your pen?' (ভুল)। সঠিক: 'Can you LEND me your pen?' বা 'Can I BORROW your pen?'",
      banglaStructureMap:
        "BORROW: আমি + [THING] + ধার নিতে পারি? | LEND: তুমি + আমাকে + [THING] + ধার দিতে পারো?",
    },
    {
      id: "X10.4",
      formula: "[PERSON] teaches [SUBJECT] / [PERSON] learns [SUBJECT]",
      formula_bn: "[ব্যক্তি] [বিষয়] শেখায় / [ব্যক্তি] [বিষয়] শেখে",
      patternName: "Learn vs Teach",
      patternName_bn: "Learn বনাম Teach",
      slots: [
        {
          name: "PERSON",
          description: "The person who teaches or learns",
          description_bn: "যে ব্যক্তি শেখায় বা শেখে",
          acceptedTypes: ["person"],
          examples: ["The teacher", "I", "My mother"],
        },
        {
          name: "SUBJECT",
          description:
            "TEACH = give knowledge to others. LEARN = receive knowledge.",
          description_bn:
            "TEACH = অন্যদের জ্ঞান দেওয়া। LEARN = জ্ঞান গ্রহণ করা।",
          acceptedTypes: ["noun", "noun_phrase", "to_verb"],
          examples: ["English", "math", "to cook"],
        },
      ],
      examples: [
        {
          en: "The teacher teaches us English.",
          bn: "শিক্ষক আমাদের ইংরেজি শেখান।",
          slotValues: { PERSON: "The teacher", SUBJECT: "us English" },
          topicArea: "education",
        },
        {
          en: "I am learning to drive.",
          bn: "আমি গাড়ি চালানো শিখছি।",
          slotValues: { PERSON: "I", SUBJECT: "to drive" },
          topicArea: "daily_life",
        },
        {
          en: "My mother taught me to cook.",
          bn: "আমার মা আমাকে রান্না শিখিয়েছেন।",
          slotValues: { PERSON: "My mother", SUBJECT: "me to cook" },
          topicArea: "food",
        },
        {
          en: "He is learning French.",
          bn: "সে ফরাসি ভাষা শিখছে।",
          slotValues: { PERSON: "He", SUBJECT: "French" },
          topicArea: "education",
        },
        {
          en: "She teaches math at a school.",
          bn: "সে একটি স্কুলে গণিত শেখায়।",
          slotValues: { PERSON: "She", SUBJECT: "math" },
          topicArea: "work",
        },
        {
          en: "I learned to swim when I was young.",
          bn: "আমি ছোটবেলায় সাঁতার শিখেছিলাম।",
          slotValues: { PERSON: "I", SUBJECT: "to swim" },
          topicArea: "health",
        },
        {
          en: "He teaches his children good manners.",
          bn: "সে তার সন্তানদের ভালো আচার-ব্যবহার শেখায়।",
          slotValues: {
            PERSON: "He",
            SUBJECT: "his children good manners",
          },
          topicArea: "relationships",
        },
        {
          en: "I want to learn guitar.",
          bn: "আমি গিটার শিখতে চাই।",
          slotValues: { PERSON: "I", SUBJECT: "guitar" },
          topicArea: "daily_life",
        },
        {
          en: "My grandfather taught me to fish.",
          bn: "আমার দাদা আমাকে মাছ ধরা শিখিয়েছিলেন।",
          slotValues: { PERSON: "My grandfather", SUBJECT: "me to fish" },
          topicArea: "daily_life",
        },
        {
          en: "She is learning to code.",
          bn: "সে কোডিং শিখছে।",
          slotValues: { PERSON: "She", SUBJECT: "to code" },
          topicArea: "education",
        },
        {
          en: "He teaches yoga every morning.",
          bn: "সে প্রতি সকালে যোগব্যায়াম শেখায়।",
          slotValues: { PERSON: "He", SUBJECT: "yoga" },
          topicArea: "health",
        },
        {
          en: "We are learning about history.",
          bn: "আমরা ইতিহাস সম্পর্কে শিখছি।",
          slotValues: { PERSON: "We", SUBJECT: "about history" },
          topicArea: "education",
        },
        {
          en: "This app teaches you grammar.",
          bn: "এই অ্যাপ আপনাকে ব্যাকরণ শেখায়।",
          slotValues: { PERSON: "This app", SUBJECT: "you grammar" },
          topicArea: "education",
        },
        {
          en: "I learned a lot from that course.",
          bn: "আমি সেই কোর্স থেকে অনেক কিছু শিখেছি।",
          slotValues: { PERSON: "I", SUBJECT: "a lot from that course" },
          topicArea: "education",
        },
        {
          en: "Who taught you English?",
          bn: "কে তোমাকে ইংরেজি শিখিয়েছে?",
          slotValues: { PERSON: "Who", SUBJECT: "you English" },
          topicArea: "education",
        },
      ],
      formality: "casual",
      difficulty: "beginner",
      usageNote:
        "Bangla 'শেখানো' and 'শেখা' sound similar. Learn = you receive knowledge. Teach = you give knowledge to others. Common mistake: 'He learned me English' (wrong). Right: 'He TAUGHT me English.' Another mistake: 'She teaches from her teacher' (wrong). Right: 'She LEARNS from her teacher.'",
      usageNote_bn:
        "বাংলা 'শেখানো' এবং 'শেখা' একই রকম শোনায়। Learn = আপনি জ্ঞান গ্রহণ করেন। Teach = আপনি অন্যদের জ্ঞান দেন। সাধারণ ভুল: 'He learned me English' (ভুল)। সঠিক: 'He TAUGHT me English.' আরেকটি ভুল: 'She teaches from her teacher' (ভুল)। সঠিক: 'She LEARNS from her teacher.'",
      banglaStructureMap:
        "TEACH: [PERSON] + [কাউকে] + শেখায় | LEARN: [PERSON] + [SUBJECT] + শেখে",
    },
    {
      id: "X10.5",
      formula:
        "I see [THING] / I watch [THING] / I look at [THING]",
      formula_bn:
        "আমি [জিনিস] দেখি (লক্ষ্য করি) / আমি [জিনিস] দেখি (মনোযোগ দিয়ে) / আমি [জিনিস] দিকে তাকাই",
      patternName: "See vs Watch vs Look",
      patternName_bn: "See বনাম Watch বনাম Look",
      slots: [
        {
          name: "THING",
          description:
            "SEE = notice without effort. WATCH = observe actively over time. LOOK AT = direct your eyes at something.",
          description_bn:
            "SEE = চেষ্টা ছাড়াই লক্ষ্য করা। WATCH = সময় ধরে সক্রিয়ভাবে পর্যবেক্ষণ। LOOK AT = কোনো কিছুর দিকে চোখ ফেরানো।",
          acceptedTypes: ["noun", "noun_phrase"],
          examples: ["a bird", "TV", "the painting"],
        },
      ],
      examples: [
        {
          en: "I can see the mountains from here.",
          bn: "আমি এখান থেকে পাহাড় দেখতে পাচ্ছি।",
          slotValues: { THING: "the mountains" },
          topicArea: "travel",
        },
        {
          en: "We watch TV every evening.",
          bn: "আমরা প্রতি সন্ধ্যায় টিভি দেখি।",
          slotValues: { THING: "TV" },
          topicArea: "daily_life",
        },
        {
          en: "Look at this beautiful painting!",
          bn: "এই সুন্দর ছবিটা দেখো!",
          slotValues: { THING: "this beautiful painting" },
          topicArea: "daily_life",
        },
        {
          en: "I saw a snake in the garden.",
          bn: "আমি বাগানে একটা সাপ দেখেছি।",
          slotValues: { THING: "a snake" },
          topicArea: "daily_life",
        },
        {
          en: "He watches cricket matches on weekends.",
          bn: "সে সপ্তাহান্তে ক্রিকেট ম্যাচ দেখে।",
          slotValues: { THING: "cricket matches" },
          topicArea: "daily_life",
        },
        {
          en: "Look at the sky, it's so clear today!",
          bn: "আকাশের দিকে তাকাও, আজ কত পরিষ্কার!",
          slotValues: { THING: "the sky" },
          topicArea: "daily_life",
        },
        {
          en: "I see my neighbor every morning.",
          bn: "আমি প্রতি সকালে আমার প্রতিবেশীকে দেখি।",
          slotValues: { THING: "my neighbor" },
          topicArea: "relationships",
        },
        {
          en: "She is watching a movie right now.",
          bn: "সে এখন একটি সিনেমা দেখছে।",
          slotValues: { THING: "a movie" },
          topicArea: "daily_life",
        },
        {
          en: "Look at this photo of our trip.",
          bn: "আমাদের ভ্রমণের এই ছবিটা দেখো।",
          slotValues: { THING: "this photo" },
          topicArea: "travel",
        },
        {
          en: "Can you see that bird on the tree?",
          bn: "তুমি কি গাছের ওপর সেই পাখিটা দেখতে পাচ্ছো?",
          slotValues: { THING: "that bird" },
          topicArea: "daily_life",
        },
        {
          en: "The children are watching cartoons.",
          bn: "বাচ্চারা কার্টুন দেখছে।",
          slotValues: { THING: "cartoons" },
          topicArea: "daily_life",
        },
        {
          en: "Look at the board, please.",
          bn: "বোর্ডের দিকে তাকাও, প্লিজ।",
          slotValues: { THING: "the board" },
          topicArea: "education",
        },
        {
          en: "I didn't see anyone at the office.",
          bn: "আমি অফিসে কাউকে দেখিনি।",
          slotValues: { THING: "anyone" },
          topicArea: "work",
        },
        {
          en: "He watches the news every night.",
          bn: "সে প্রতি রাতে খবর দেখে।",
          slotValues: { THING: "the news" },
          topicArea: "daily_life",
        },
        {
          en: "Look at me when I'm talking to you.",
          bn: "আমি যখন তোমার সাথে কথা বলছি তখন আমার দিকে তাকাও।",
          slotValues: { THING: "me" },
          topicArea: "relationships",
        },
      ],
      formality: "casual",
      difficulty: "beginner",
      usageNote:
        "In Bangla, 'দেখা' covers see, watch, and look. In English: SEE = notice without trying (I see a bird). WATCH = pay attention for a period (I watch TV). LOOK AT = direct your eyes intentionally (Look at this!). Wrong: 'I am seeing TV' (use watching). Wrong: 'I watched an accident happen' (use saw — it was unexpected).",
      usageNote_bn:
        "বাংলায় 'দেখা' see, watch এবং look সবকিছু বোঝায়। ইংরেজিতে: SEE = চেষ্টা ছাড়াই লক্ষ্য করা (I see a bird)। WATCH = সময় ধরে মনোযোগ দেওয়া (I watch TV)। LOOK AT = ইচ্ছাকৃতভাবে চোখ ফেরানো (Look at this!)। ভুল: 'I am seeing TV' (watching ব্যবহার করুন)। ভুল: 'I watched an accident happen' (saw ব্যবহার করুন — অপ্রত্যাশিত ছিল)।",
      banglaStructureMap:
        "SEE: আমি + [THING] + দেখতে পাই (notice) | WATCH: আমি + [THING] + দেখি (actively) | LOOK AT: আমি + [THING] + দিকে তাকাই (gaze)",
    },
  ],
};
