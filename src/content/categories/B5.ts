import { PatternCategory } from "@/types/pattern";

export const categoryB5: PatternCategory = {
  id: "B5",
  slug: "relative-clauses",
  name: "Relative Clauses",
  name_bn: "সম্পর্কসূচক উপবাক্য",
  description:
    "Learn how to use relative clauses with who, that, where, and whose to add details about people, things, and places.",
  description_bn:
    "মানুষ, জিনিস এবং জায়গা সম্পর্কে বিস্তারিত যোগ করতে who, that, where, এবং whose সহ সম্পর্কসূচক উপবাক্য ব্যবহার করতে শিখুন।",
  icon: "🔗",
  group: "B",
  groupName: "Describing People, Things & Situations",
  groupName_bn: "মানুষ, জিনিস এবং পরিস্থিতি বর্ণনা",
  difficulty: "intermediate",
  patterns: [
    {
      id: "B5.1",
      formula: "[PERSON] who [ACTION] is [DESCRIPTION]",
      formula_bn: "যে [ব্যক্তি] [কাজ] করে সে [বর্ণনা]",
      patternName: "Relative Clause with 'Who'",
      patternName_bn: "'Who' দিয়ে সম্পর্কসূচক উপবাক্য",
      slots: [
        {
          name: "PERSON",
          description:
            "A noun phrase referring to a person, preceded by 'the' or a determiner",
          description_bn:
            "একটি বিশেষ্য পদবন্ধ যা একজন ব্যক্তিকে নির্দেশ করে, 'the' বা নির্দেশক দ্বারা পূর্বে",
          acceptedTypes: ["person", "noun"],
          examples: ["The man", "The teacher", "The woman"],
        },
        {
          name: "ACTION",
          description: "A verb phrase describing what the person does or did",
          description_bn: "একটি ক্রিয়া পদবন্ধ যা ব্যক্তি কী করে বা করেছে তা বর্ণনা করে",
          acceptedTypes: ["verb", "clause"],
          examples: ["teaches us", "lives next door", "helped me"],
        },
        {
          name: "DESCRIPTION",
          description: "An adjective or descriptive phrase about the person",
          description_bn: "ব্যক্তি সম্পর্কে একটি বিশেষণ বা বর্ণনামূলক পদবন্ধ",
          acceptedTypes: ["adjective", "description"],
          examples: ["very kind", "my uncle", "a great cook"],
        },
      ],
      examples: [
        {
          en: "The man who lives next door is a doctor.",
          bn: "যে লোকটি পাশের বাড়িতে থাকে সে একজন ডাক্তার।",
          slotValues: {
            PERSON: "The man",
            ACTION: "lives next door",
            DESCRIPTION: "a doctor",
          },
          topicArea: "daily_life",
        },
        {
          en: "The teacher who taught me English is very patient.",
          bn: "যে শিক্ষক আমাকে ইংরেজি শিখিয়েছেন তিনি খুব ধৈর্যশীল।",
          slotValues: {
            PERSON: "The teacher",
            ACTION: "taught me English",
            DESCRIPTION: "very patient",
          },
          topicArea: "education",
        },
        {
          en: "The woman who runs this shop is my aunt.",
          bn: "যে মহিলা এই দোকান চালান তিনি আমার খালা।",
          slotValues: {
            PERSON: "The woman",
            ACTION: "runs this shop",
            DESCRIPTION: "my aunt",
          },
          topicArea: "shopping",
        },
        {
          en: "The person who called you is my colleague.",
          bn: "যে ব্যক্তি তোমাকে ফোন করেছিল সে আমার সহকর্মী।",
          slotValues: {
            PERSON: "The person",
            ACTION: "called you",
            DESCRIPTION: "my colleague",
          },
          topicArea: "work",
        },
        {
          en: "The chef who cooked this meal is amazing.",
          bn: "যে শেফ এই খাবার রান্না করেছে সে অসাধারণ।",
          slotValues: {
            PERSON: "The chef",
            ACTION: "cooked this meal",
            DESCRIPTION: "amazing",
          },
          topicArea: "food",
        },
        {
          en: "The girl who sits beside me is very smart.",
          bn: "যে মেয়েটি আমার পাশে বসে সে খুব চালাক।",
          slotValues: {
            PERSON: "The girl",
            ACTION: "sits beside me",
            DESCRIPTION: "very smart",
          },
          topicArea: "education",
        },
        {
          en: "The doctor who treated me is well-known.",
          bn: "যে ডাক্তার আমার চিকিৎসা করেছিলেন তিনি সুপরিচিত।",
          slotValues: {
            PERSON: "The doctor",
            ACTION: "treated me",
            DESCRIPTION: "well-known",
          },
          topicArea: "health",
        },
        {
          en: "The friend who helped me move is very strong.",
          bn: "যে বন্ধু আমাকে বাসা বদলাতে সাহায্য করেছে সে খুব শক্তিশালী।",
          slotValues: {
            PERSON: "The friend",
            ACTION: "helped me move",
            DESCRIPTION: "very strong",
          },
          topicArea: "relationships",
        },
        {
          en: "The driver who took us to the airport is very careful.",
          bn: "যে ড্রাইভার আমাদের বিমানবন্দরে নিয়ে গিয়েছিল সে খুব সাবধানী।",
          slotValues: {
            PERSON: "The driver",
            ACTION: "took us to the airport",
            DESCRIPTION: "very careful",
          },
          topicArea: "travel",
        },
        {
          en: "The boy who delivers newspapers is hardworking.",
          bn: "যে ছেলেটি পত্রিকা বিলি করে সে পরিশ্রমী।",
          slotValues: {
            PERSON: "The boy",
            ACTION: "delivers newspapers",
            DESCRIPTION: "hardworking",
          },
          topicArea: "work",
        },
        {
          en: "The neighbor who waters our plants is very kind.",
          bn: "যে প্রতিবেশী আমাদের গাছে পানি দেয় সে খুব দয়ালু।",
          slotValues: {
            PERSON: "The neighbor",
            ACTION: "waters our plants",
            DESCRIPTION: "very kind",
          },
          topicArea: "relationships",
        },
        {
          en: "The student who won the prize is in my class.",
          bn: "যে ছাত্র পুরস্কার জিতেছে সে আমার ক্লাসে।",
          slotValues: {
            PERSON: "The student",
            ACTION: "won the prize",
            DESCRIPTION: "in my class",
          },
          topicArea: "education",
        },
        {
          en: "The nurse who checked my blood pressure is new here.",
          bn: "যে নার্স আমার রক্তচাপ মেপেছিলেন তিনি এখানে নতুন।",
          slotValues: {
            PERSON: "The nurse",
            ACTION: "checked my blood pressure",
            DESCRIPTION: "new here",
          },
          topicArea: "health",
        },
        {
          en: "The guide who showed us around is very knowledgeable.",
          bn: "যে গাইড আমাদের ঘুরিয়ে দেখিয়েছিল সে খুব জ্ঞানী।",
          slotValues: {
            PERSON: "The guide",
            ACTION: "showed us around",
            DESCRIPTION: "very knowledgeable",
          },
          topicArea: "travel",
        },
        {
          en: "The lady who sold me this sari is very polite.",
          bn: "যে মহিলা আমাকে এই শাড়ি বিক্রি করেছেন তিনি খুব ভদ্র।",
          slotValues: {
            PERSON: "The lady",
            ACTION: "sold me this sari",
            DESCRIPTION: "very polite",
          },
          topicArea: "shopping",
        },
      ],
      formality: "polite",
      difficulty: "intermediate",
      usageNote:
        "'Who' introduces a relative clause about a person. It acts as the subject of the relative clause.",
      usageNote_bn:
        "'Who' একজন ব্যক্তি সম্পর্কে সম্পর্কসূচক উপবাক্য প্রবর্তন করে। এটি সম্পর্কসূচক উপবাক্যের কর্তা হিসেবে কাজ করে।",
      combinableWith: ["B5.2", "B5.4"],
      banglaStructureMap:
        "যে [PERSON] (কর্তা) + [ACTION] (ক্রিয়া) + করে + সে [DESCRIPTION] (বর্ণনা)",
    },
    {
      id: "B5.2",
      formula: "The [THING] that I [ACTION+ED] is [DESCRIPTION]",
      formula_bn: "আমি যে [জিনিস] [কাজ] করেছি তা [বর্ণনা]",
      patternName: "Relative Clause with 'That' (Object)",
      patternName_bn: "'That' দিয়ে সম্পর্কসূচক উপবাক্য (কর্ম)",
      slots: [
        {
          name: "THING",
          description: "A noun being described (the object of the relative clause)",
          description_bn:
            "একটি বিশেষ্য যা বর্ণনা করা হচ্ছে (সম্পর্কসূচক উপবাক্যের কর্ম)",
          acceptedTypes: ["noun"],
          examples: ["book", "phone", "cake"],
        },
        {
          name: "ACTION+ED",
          description: "A past tense verb describing what was done to the thing",
          description_bn:
            "একটি অতীত কালের ক্রিয়া যা জিনিসটির সাথে কী করা হয়েছে তা বর্ণনা করে",
          acceptedTypes: ["verb", "past_participle"],
          examples: ["bought", "read", "ordered"],
        },
        {
          name: "DESCRIPTION",
          description:
            "An adjective or phrase describing the thing",
          description_bn: "জিনিসটি সম্পর্কে একটি বিশেষণ বা বর্ণনামূলক পদবন্ধ",
          acceptedTypes: ["adjective", "description"],
          examples: ["really good", "broken", "on the table"],
        },
      ],
      examples: [
        {
          en: "The book that I bought is very interesting.",
          bn: "আমি যে বইটি কিনেছি তা খুব আকর্ষণীয়।",
          slotValues: {
            THING: "book",
            "ACTION+ED": "bought",
            DESCRIPTION: "very interesting",
          },
          topicArea: "education",
        },
        {
          en: "The phone that I ordered arrived today.",
          bn: "আমি যে ফোনটি অর্ডার করেছিলাম তা আজ এসেছে।",
          slotValues: {
            THING: "phone",
            "ACTION+ED": "ordered",
            DESCRIPTION: "arrived today",
          },
          topicArea: "shopping",
        },
        {
          en: "The cake that I baked is for your birthday.",
          bn: "আমি যে কেকটি বানিয়েছি তা তোমার জন্মদিনের জন্য।",
          slotValues: {
            THING: "cake",
            "ACTION+ED": "baked",
            DESCRIPTION: "for your birthday",
          },
          topicArea: "food",
        },
        {
          en: "The movie that I watched was really touching.",
          bn: "আমি যে সিনেমাটি দেখেছি তা সত্যিই হৃদয়স্পর্শী ছিল।",
          slotValues: {
            THING: "movie",
            "ACTION+ED": "watched",
            DESCRIPTION: "really touching",
          },
          topicArea: "daily_life",
        },
        {
          en: "The report that I submitted has some errors.",
          bn: "আমি যে রিপোর্টটি জমা দিয়েছি তাতে কিছু ভুল আছে।",
          slotValues: {
            THING: "report",
            "ACTION+ED": "submitted",
            DESCRIPTION: "has some errors",
          },
          topicArea: "work",
        },
        {
          en: "The medicine that I took made me drowsy.",
          bn: "আমি যে ওষুধটি খেয়েছি তা আমাকে ঘুম পাড়িয়ে দিয়েছে।",
          slotValues: {
            THING: "medicine",
            "ACTION+ED": "took",
            DESCRIPTION: "made me drowsy",
          },
          topicArea: "health",
        },
        {
          en: "The hotel that I booked is near the beach.",
          bn: "আমি যে হোটেলটি বুক করেছি তা সমুদ্র সৈকতের কাছে।",
          slotValues: {
            THING: "hotel",
            "ACTION+ED": "booked",
            DESCRIPTION: "near the beach",
          },
          topicArea: "travel",
        },
        {
          en: "The shirt that I wore yesterday is dirty.",
          bn: "আমি গতকাল যে শার্টটি পরেছিলাম তা নোংরা।",
          slotValues: {
            THING: "shirt",
            "ACTION+ED": "wore yesterday",
            DESCRIPTION: "dirty",
          },
          topicArea: "daily_life",
        },
        {
          en: "The gift that I received is beautiful.",
          bn: "আমি যে উপহারটি পেয়েছি তা সুন্দর।",
          slotValues: {
            THING: "gift",
            "ACTION+ED": "received",
            DESCRIPTION: "beautiful",
          },
          topicArea: "relationships",
        },
        {
          en: "The recipe that I tried turned out great.",
          bn: "আমি যে রেসিপিটি চেষ্টা করেছি তা দারুণ হয়েছে।",
          slotValues: {
            THING: "recipe",
            "ACTION+ED": "tried",
            DESCRIPTION: "turned out great",
          },
          topicArea: "food",
        },
        {
          en: "The project that I completed was challenging.",
          bn: "আমি যে প্রকল্পটি শেষ করেছি তা চ্যালেঞ্জিং ছিল।",
          slotValues: {
            THING: "project",
            "ACTION+ED": "completed",
            DESCRIPTION: "challenging",
          },
          topicArea: "work",
        },
        {
          en: "The dress that I picked is on sale.",
          bn: "আমি যে পোশাকটি বেছেছি তা সেলে আছে।",
          slotValues: {
            THING: "dress",
            "ACTION+ED": "picked",
            DESCRIPTION: "on sale",
          },
          topicArea: "shopping",
        },
        {
          en: "The course that I enrolled in starts next week.",
          bn: "আমি যে কোর্সে ভর্তি হয়েছি তা আগামী সপ্তাহে শুরু হবে।",
          slotValues: {
            THING: "course",
            "ACTION+ED": "enrolled in",
            DESCRIPTION: "starts next week",
          },
          topicArea: "education",
        },
        {
          en: "The ticket that I lost was for tonight's show.",
          bn: "আমি যে টিকিটটি হারিয়েছি তা আজ রাতের শো-এর ছিল।",
          slotValues: {
            THING: "ticket",
            "ACTION+ED": "lost",
            DESCRIPTION: "for tonight's show",
          },
          topicArea: "daily_life",
        },
        {
          en: "The letter that I wrote never reached her.",
          bn: "আমি যে চিঠিটি লিখেছিলাম তা কখনো তার কাছে পৌঁছায়নি।",
          slotValues: {
            THING: "letter",
            "ACTION+ED": "wrote",
            DESCRIPTION: "never reached her",
          },
          topicArea: "relationships",
        },
      ],
      formality: "polite",
      difficulty: "intermediate",
      usageNote:
        "'That' introduces a relative clause where the noun is the object. 'That' can often be omitted in speech: 'The book I bought'.",
      usageNote_bn:
        "'That' এমন সম্পর্কসূচক উপবাক্য প্রবর্তন করে যেখানে বিশেষ্যটি কর্ম। কথ্য ভাষায় 'that' প্রায়ই বাদ দেওয়া যায়: 'The book I bought'।",
      combinableWith: ["B5.1", "B5.3"],
      banglaStructureMap:
        "আমি যে [THING] (কর্ম) + [ACTION+ED] (ক্রিয়া) + করেছি + তা [DESCRIPTION] (বর্ণনা)",
    },
    {
      id: "B5.3",
      formula: "The [PLACE] where I [ACTION] is [DESCRIPTION]",
      formula_bn: "আমি যে [জায়গায়] [কাজ] করি সেটা [বর্ণনা]",
      patternName: "Relative Clause with 'Where'",
      patternName_bn: "'Where' দিয়ে সম্পর্কসূচক উপবাক্য",
      slots: [
        {
          name: "PLACE",
          description: "A noun referring to a place or location",
          description_bn: "একটি বিশেষ্য যা একটি জায়গা বা অবস্থান নির্দেশ করে",
          acceptedTypes: ["place", "noun"],
          examples: ["restaurant", "park", "office"],
        },
        {
          name: "ACTION",
          description: "A verb phrase describing what you do at that place",
          description_bn: "একটি ক্রিয়া পদবন্ধ যা সেই জায়গায় আপনি কী করেন তা বর্ণনা করে",
          acceptedTypes: ["verb", "clause"],
          examples: ["work", "grew up", "usually eat"],
        },
        {
          name: "DESCRIPTION",
          description: "An adjective or phrase describing the place",
          description_bn: "জায়গাটি সম্পর্কে একটি বিশেষণ বা বর্ণনামূলক পদবন্ধ",
          acceptedTypes: ["adjective", "description"],
          examples: ["very quiet", "closing down", "near the river"],
        },
      ],
      examples: [
        {
          en: "The restaurant where I usually eat is closed today.",
          bn: "আমি যে রেস্তোরাঁয় সাধারণত খাই সেটা আজ বন্ধ।",
          slotValues: {
            PLACE: "restaurant",
            ACTION: "usually eat",
            DESCRIPTION: "closed today",
          },
          topicArea: "food",
        },
        {
          en: "The park where I go jogging is beautiful.",
          bn: "আমি যে পার্কে জগিং করতে যাই সেটা সুন্দর।",
          slotValues: {
            PLACE: "park",
            ACTION: "go jogging",
            DESCRIPTION: "beautiful",
          },
          topicArea: "health",
        },
        {
          en: "The office where I work is in the city center.",
          bn: "আমি যে অফিসে কাজ করি সেটা শহরের কেন্দ্রে।",
          slotValues: {
            PLACE: "office",
            ACTION: "work",
            DESCRIPTION: "in the city center",
          },
          topicArea: "work",
        },
        {
          en: "The school where I studied is very old.",
          bn: "আমি যে স্কুলে পড়েছি সেটা খুব পুরনো।",
          slotValues: {
            PLACE: "school",
            ACTION: "studied",
            DESCRIPTION: "very old",
          },
          topicArea: "education",
        },
        {
          en: "The village where I grew up is near the river.",
          bn: "আমি যে গ্রামে বড় হয়েছি সেটা নদীর কাছে।",
          slotValues: {
            PLACE: "village",
            ACTION: "grew up",
            DESCRIPTION: "near the river",
          },
          topicArea: "daily_life",
        },
        {
          en: "The hotel where we stayed was excellent.",
          bn: "আমরা যে হোটেলে ছিলাম সেটা চমৎকার ছিল।",
          slotValues: {
            PLACE: "hotel",
            ACTION: "stayed",
            DESCRIPTION: "excellent",
          },
          topicArea: "travel",
        },
        {
          en: "The market where I buy vegetables is very crowded.",
          bn: "আমি যে বাজারে সবজি কিনি সেটা খুব ভিড়।",
          slotValues: {
            PLACE: "market",
            ACTION: "buy vegetables",
            DESCRIPTION: "very crowded",
          },
          topicArea: "shopping",
        },
        {
          en: "The hospital where she was born has been renovated.",
          bn: "যে হাসপাতালে সে জন্মেছিল সেটা সংস্কার করা হয়েছে।",
          slotValues: {
            PLACE: "hospital",
            ACTION: "she was born",
            DESCRIPTION: "has been renovated",
          },
          topicArea: "health",
        },
        {
          en: "The cafe where we first met is special to me.",
          bn: "আমরা যে ক্যাফেতে প্রথম দেখা হয়েছিল সেটা আমার কাছে বিশেষ।",
          slotValues: {
            PLACE: "cafe",
            ACTION: "first met",
            DESCRIPTION: "special to me",
          },
          topicArea: "relationships",
        },
        {
          en: "The library where I study is always quiet.",
          bn: "আমি যে লাইব্রেরিতে পড়ি সেটা সবসময় শান্ত।",
          slotValues: {
            PLACE: "library",
            ACTION: "study",
            DESCRIPTION: "always quiet",
          },
          topicArea: "education",
        },
        {
          en: "The city where I was transferred is very hot.",
          bn: "আমাকে যে শহরে বদলি করা হয়েছে সেটা খুব গরম।",
          slotValues: {
            PLACE: "city",
            ACTION: "was transferred",
            DESCRIPTION: "very hot",
          },
          topicArea: "work",
        },
        {
          en: "The beach where we had a picnic is not far from here.",
          bn: "আমরা যে সৈকতে পিকনিক করেছিলাম সেটা এখান থেকে বেশি দূরে নয়।",
          slotValues: {
            PLACE: "beach",
            ACTION: "had a picnic",
            DESCRIPTION: "not far from here",
          },
          topicArea: "travel",
        },
        {
          en: "The kitchen where my mother cooks is small but tidy.",
          bn: "আমার মা যে রান্নাঘরে রান্না করেন সেটা ছোট কিন্তু গোছানো।",
          slotValues: {
            PLACE: "kitchen",
            ACTION: "my mother cooks",
            DESCRIPTION: "small but tidy",
          },
          topicArea: "food",
        },
        {
          en: "The shop where I bought this is having a sale now.",
          bn: "আমি যে দোকান থেকে এটা কিনেছি সেখানে এখন সেল চলছে।",
          slotValues: {
            PLACE: "shop",
            ACTION: "bought this",
            DESCRIPTION: "having a sale now",
          },
          topicArea: "shopping",
        },
        {
          en: "The place where I feel most relaxed is my garden.",
          bn: "আমি যে জায়গায় সবচেয়ে আরাম অনুভব করি সেটা আমার বাগান।",
          slotValues: {
            PLACE: "place",
            ACTION: "feel most relaxed",
            DESCRIPTION: "my garden",
          },
          topicArea: "daily_life",
        },
      ],
      formality: "polite",
      difficulty: "intermediate",
      usageNote:
        "'Where' introduces a relative clause about a place. It replaces 'in which' or 'at which' in more formal English.",
      usageNote_bn:
        "'Where' একটি জায়গা সম্পর্কে সম্পর্কসূচক উপবাক্য প্রবর্তন করে। এটি আরও আনুষ্ঠানিক ইংরেজিতে 'in which' বা 'at which'-এর জায়গায় ব্যবহৃত হয়।",
      combinableWith: ["B5.1", "B5.2"],
      banglaStructureMap:
        "আমি যে [PLACE]-এ (স্থান + বিভক্তি) + [ACTION] (ক্রিয়া) + করি + সেটা [DESCRIPTION] (বর্ণনা)",
    },
    {
      id: "B5.4",
      formula: "The [PERSON] whose [THING] is [DESCRIPTION]",
      formula_bn: "যে [ব্যক্তির] [জিনিস] [বর্ণনা]",
      patternName: "Relative Clause with 'Whose' (Possession)",
      patternName_bn: "'Whose' দিয়ে সম্পর্কসূচক উপবাক্য (অধিকার)",
      slots: [
        {
          name: "PERSON",
          description: "A noun referring to a person",
          description_bn: "একটি বিশেষ্য যা একজন ব্যক্তিকে নির্দেশ করে",
          acceptedTypes: ["person", "noun"],
          examples: ["man", "woman", "student"],
        },
        {
          name: "THING",
          description:
            "A noun belonging to the person (the possessed item)",
          description_bn:
            "ব্যক্তির অধিকারভুক্ত একটি বিশেষ্য (অধিকৃত জিনিস)",
          acceptedTypes: ["noun"],
          examples: ["car", "daughter", "phone"],
        },
        {
          name: "DESCRIPTION",
          description:
            "A predicate describing the person or providing additional information",
          description_bn:
            "ব্যক্তিকে বর্ণনা করা বা অতিরিক্ত তথ্য প্রদান করা একটি বিধেয়",
          acceptedTypes: ["adjective", "description", "clause"],
          examples: ["my neighbor", "a famous writer", "standing over there"],
        },
      ],
      examples: [
        {
          en: "The man whose car broke down is waiting for help.",
          bn: "যে লোকটির গাড়ি নষ্ট হয়ে গেছে সে সাহায্যের অপেক্ষায় আছে।",
          slotValues: {
            PERSON: "man",
            THING: "car broke down",
            DESCRIPTION: "waiting for help",
          },
          topicArea: "travel",
        },
        {
          en: "The student whose essay won the award is in my class.",
          bn: "যে ছাত্রের রচনা পুরস্কার জিতেছে সে আমার ক্লাসে।",
          slotValues: {
            PERSON: "student",
            THING: "essay won the award",
            DESCRIPTION: "in my class",
          },
          topicArea: "education",
        },
        {
          en: "The woman whose bag was stolen reported it to the police.",
          bn: "যে মহিলার ব্যাগ চুরি হয়েছিল তিনি পুলিশে রিপোর্ট করেছেন।",
          slotValues: {
            PERSON: "woman",
            THING: "bag was stolen",
            DESCRIPTION: "reported it to the police",
          },
          topicArea: "daily_life",
        },
        {
          en: "The colleague whose idea got selected is very happy.",
          bn: "যে সহকর্মীর আইডিয়া নির্বাচিত হয়েছে সে খুব খুশি।",
          slotValues: {
            PERSON: "colleague",
            THING: "idea got selected",
            DESCRIPTION: "very happy",
          },
          topicArea: "work",
        },
        {
          en: "The chef whose restaurant is famous trained in Paris.",
          bn: "যে শেফের রেস্তোরাঁ বিখ্যাত সে প্যারিসে প্রশিক্ষণ নিয়েছে।",
          slotValues: {
            PERSON: "chef",
            THING: "restaurant is famous",
            DESCRIPTION: "trained in Paris",
          },
          topicArea: "food",
        },
        {
          en: "The patient whose condition improved can go home.",
          bn: "যে রোগীর অবস্থার উন্নতি হয়েছে সে বাড়ি যেতে পারে।",
          slotValues: {
            PERSON: "patient",
            THING: "condition improved",
            DESCRIPTION: "can go home",
          },
          topicArea: "health",
        },
        {
          en: "The neighbor whose dog barks all night is annoying.",
          bn: "যে প্রতিবেশীর কুকুর সারারাত ঘেউ ঘেউ করে সে বিরক্তিকর।",
          slotValues: {
            PERSON: "neighbor",
            THING: "dog barks all night",
            DESCRIPTION: "annoying",
          },
          topicArea: "daily_life",
        },
        {
          en: "The teacher whose class I enjoy is retiring this year.",
          bn: "যে শিক্ষকের ক্লাস আমি উপভোগ করি তিনি এ বছর অবসর নিচ্ছেন।",
          slotValues: {
            PERSON: "teacher",
            THING: "class I enjoy",
            DESCRIPTION: "retiring this year",
          },
          topicArea: "education",
        },
        {
          en: "The friend whose wedding I attended lives abroad.",
          bn: "যে বন্ধুর বিয়েতে আমি গিয়েছিলাম সে বিদেশে থাকে।",
          slotValues: {
            PERSON: "friend",
            THING: "wedding I attended",
            DESCRIPTION: "lives abroad",
          },
          topicArea: "relationships",
        },
        {
          en: "The driver whose license expired cannot drive.",
          bn: "যে চালকের লাইসেন্সের মেয়াদ শেষ সে গাড়ি চালাতে পারবে না।",
          slotValues: {
            PERSON: "driver",
            THING: "license expired",
            DESCRIPTION: "cannot drive",
          },
          topicArea: "travel",
        },
        {
          en: "The author whose book I am reading is from India.",
          bn: "যে লেখকের বই আমি পড়ছি তিনি ভারতের।",
          slotValues: {
            PERSON: "author",
            THING: "book I am reading",
            DESCRIPTION: "from India",
          },
          topicArea: "education",
        },
        {
          en: "The seller whose prices are lowest gets the most customers.",
          bn: "যে বিক্রেতার দাম সবচেয়ে কম সে সবচেয়ে বেশি কাস্টমার পায়।",
          slotValues: {
            PERSON: "seller",
            THING: "prices are lowest",
            DESCRIPTION: "gets the most customers",
          },
          topicArea: "shopping",
        },
        {
          en: "The manager whose team won the contract is celebrating.",
          bn: "যে ম্যানেজারের দল চুক্তি পেয়েছে সে উদযাপন করছে।",
          slotValues: {
            PERSON: "manager",
            THING: "team won the contract",
            DESCRIPTION: "celebrating",
          },
          topicArea: "work",
        },
        {
          en: "The child whose parents are doctors wants to be a teacher.",
          bn: "যে শিশুর বাবা-মা ডাক্তার সে শিক্ষক হতে চায়।",
          slotValues: {
            PERSON: "child",
            THING: "parents are doctors",
            DESCRIPTION: "wants to be a teacher",
          },
          topicArea: "relationships",
        },
        {
          en: "The doctor whose clinic is nearby is very experienced.",
          bn: "যে ডাক্তারের ক্লিনিক কাছে তিনি খুব অভিজ্ঞ।",
          slotValues: {
            PERSON: "doctor",
            THING: "clinic is nearby",
            DESCRIPTION: "very experienced",
          },
          topicArea: "health",
        },
      ],
      formality: "polite",
      difficulty: "intermediate",
      usageNote:
        "'Whose' shows possession in relative clauses. It can refer to people and sometimes things. It replaces 'his/her/their' in the clause.",
      usageNote_bn:
        "'Whose' সম্পর্কসূচক উপবাক্যে অধিকার দেখায়। এটি মানুষ এবং কখনো কখনো জিনিসকে নির্দেশ করতে পারে। এটি উপবাক্যে 'his/her/their'-এর জায়গায় ব্যবহৃত হয়।",
      combinableWith: ["B5.1", "B5.2"],
      banglaStructureMap:
        "যে [PERSON]-র (কর্তা + বিভক্তি) + [THING] (অধিকৃত জিনিস) + সে [DESCRIPTION] (বর্ণনা)",
    },
    {
      id: "B5.5",
      formula: "The [TIME] when [CLAUSE] was [DESCRIPTION]",
      formula_bn: "যে [সময়] [বাক্যাংশ] সেটা ছিল [বর্ণনা]",
      patternName: "Temporal Relative",
      patternName_bn: "সময়ভিত্তিক সম্পর্কসূচক উপবাক্য",
      slots: [
        {
          name: "TIME",
          description: "A noun referring to a time or period",
          description_bn: "একটি বিশেষ্য যা একটি সময় বা সময়কাল নির্দেশ করে",
          acceptedTypes: ["time", "noun"],
          examples: ["day", "moment", "year"],
        },
        {
          name: "CLAUSE",
          description: "A clause describing what happened at that time",
          description_bn: "একটি উপবাক্য যা সেই সময়ে কী ঘটেছিল তা বর্ণনা করে",
          acceptedTypes: ["clause"],
          examples: ["we first met", "I graduated", "it all changed"],
        },
        {
          name: "DESCRIPTION",
          description: "An adjective or phrase describing that time",
          description_bn: "সেই সময় সম্পর্কে একটি বিশেষণ বা বর্ণনামূলক পদবন্ধ",
          acceptedTypes: ["adjective", "description"],
          examples: ["unforgettable", "the happiest", "truly special"],
        },
      ],
      examples: [
        {
          en: "The day when we first met was unforgettable.",
          bn: "যেদিন আমরা প্রথম দেখা করেছিলাম সেটা ছিল অবিস্মরণীয়।",
          slotValues: { TIME: "day", CLAUSE: "we first met", DESCRIPTION: "unforgettable" },
          topicArea: "relationships",
        },
        {
          en: "The moment when I heard the news was shocking.",
          bn: "যে মুহূর্তে আমি খবরটা শুনেছিলাম সেটা ছিল হতবাক করা।",
          slotValues: { TIME: "moment", CLAUSE: "I heard the news", DESCRIPTION: "shocking" },
          topicArea: "daily_life",
        },
        {
          en: "The year when I graduated was the best year of my life.",
          bn: "যে বছর আমি স্নাতক হয়েছিলাম সেটা ছিল আমার জীবনের সেরা বছর।",
          slotValues: { TIME: "year", CLAUSE: "I graduated", DESCRIPTION: "the best year of my life" },
          topicArea: "education",
        },
        {
          en: "The evening when we had that dinner was lovely.",
          bn: "যে সন্ধ্যায় আমরা সেই ডিনার করেছিলাম সেটা ছিল চমৎকার।",
          slotValues: { TIME: "evening", CLAUSE: "we had that dinner", DESCRIPTION: "lovely" },
          topicArea: "food",
        },
        {
          en: "The summer when I traveled alone was life-changing.",
          bn: "যে গ্রীষ্মে আমি একা ভ্রমণ করেছিলাম সেটা ছিল জীবন বদলে দেওয়া।",
          slotValues: { TIME: "summer", CLAUSE: "I traveled alone", DESCRIPTION: "life-changing" },
          topicArea: "travel",
        },
        {
          en: "The morning when I got the job offer was incredible.",
          bn: "যে সকালে আমি চাকরির অফার পেয়েছিলাম সেটা ছিল অবিশ্বাস্য।",
          slotValues: { TIME: "morning", CLAUSE: "I got the job offer", DESCRIPTION: "incredible" },
          topicArea: "work",
        },
        {
          en: "The night when the storm hit was terrifying.",
          bn: "যে রাতে ঝড় এসেছিল সেটা ছিল ভয়ংকর।",
          slotValues: { TIME: "night", CLAUSE: "the storm hit", DESCRIPTION: "terrifying" },
          topicArea: "daily_life",
        },
        {
          en: "The week when I was in the hospital was really tough.",
          bn: "যে সপ্তাহে আমি হাসপাতালে ছিলাম সেটা ছিল সত্যিই কঠিন।",
          slotValues: { TIME: "week", CLAUSE: "I was in the hospital", DESCRIPTION: "really tough" },
          topicArea: "health",
        },
        {
          en: "The time when I started cooking was a turning point.",
          bn: "যে সময় আমি রান্না শুরু করেছিলাম সেটা ছিল একটি টার্নিং পয়েন্ট।",
          slotValues: { TIME: "time", CLAUSE: "I started cooking", DESCRIPTION: "a turning point" },
          topicArea: "food",
        },
        {
          en: "The day when the shop opened was really exciting.",
          bn: "যেদিন দোকানটা খুলেছিল সেটা ছিল সত্যিই উত্তেজনাপূর্ণ।",
          slotValues: { TIME: "day", CLAUSE: "the shop opened", DESCRIPTION: "really exciting" },
          topicArea: "shopping",
        },
        {
          en: "The moment when I saw her smile was priceless.",
          bn: "যে মুহূর্তে আমি তার হাসি দেখেছিলাম সেটা ছিল অমূল্য।",
          slotValues: { TIME: "moment", CLAUSE: "I saw her smile", DESCRIPTION: "priceless" },
          topicArea: "relationships",
        },
        {
          en: "The semester when I studied abroad was amazing.",
          bn: "যে সেমিস্টারে আমি বিদেশে পড়েছিলাম সেটা ছিল দারুণ।",
          slotValues: { TIME: "semester", CLAUSE: "I studied abroad", DESCRIPTION: "amazing" },
          topicArea: "education",
        },
        {
          en: "The afternoon when we went hiking was so peaceful.",
          bn: "যে বিকেলে আমরা হাইকিংয়ে গিয়েছিলাম সেটা ছিল খুবই শান্তিপূর্ণ।",
          slotValues: { TIME: "afternoon", CLAUSE: "we went hiking", DESCRIPTION: "so peaceful" },
          topicArea: "travel",
        },
        {
          en: "The period when I worked overtime was exhausting.",
          bn: "যে সময়কালে আমি ওভারটাইম করেছিলাম সেটা ছিল ক্লান্তিকর।",
          slotValues: { TIME: "period", CLAUSE: "I worked overtime", DESCRIPTION: "exhausting" },
          topicArea: "work",
        },
        {
          en: "The winter when I recovered from surgery was long.",
          bn: "যে শীতে আমি অপারেশন থেকে সুস্থ হচ্ছিলাম সেটা ছিল দীর্ঘ।",
          slotValues: { TIME: "winter", CLAUSE: "I recovered from surgery", DESCRIPTION: "long" },
          topicArea: "health",
        },
      ],
      formality: "polite",
      difficulty: "intermediate",
      usageNote:
        "'When' introduces a relative clause about a time. It replaces 'in which' or 'at which' in more formal English.",
      usageNote_bn:
        "'When' একটি সময় সম্পর্কে সম্পর্কসূচক উপবাক্য প্রবর্তন করে। এটি আরও আনুষ্ঠানিক ইংরেজিতে 'in which' বা 'at which'-এর জায়গায় ব্যবহৃত হয়।",
      combinableWith: ["B5.3", "B5.6"],
      banglaStructureMap:
        "যে [TIME] (সময়) + [CLAUSE] (উপবাক্য) + সেটা ছিল [DESCRIPTION] (বর্ণনা)",
    },
    {
      id: "B5.6",
      formula: "The reason why [CLAUSE] is [EXPLANATION]",
      formula_bn: "যে কারণে [বাক্যাংশ] তা হলো [ব্যাখ্যা]",
      patternName: "Reason Relative",
      patternName_bn: "কারণভিত্তিক সম্পর্কসূচক উপবাক্য",
      slots: [
        {
          name: "CLAUSE",
          description: "A clause describing the situation or action",
          description_bn: "একটি উপবাক্য যা পরিস্থিতি বা কাজ বর্ণনা করে",
          acceptedTypes: ["clause"],
          examples: ["I left early", "she's upset", "we changed the plan"],
        },
        {
          name: "EXPLANATION",
          description: "The reason or explanation",
          description_bn: "কারণ বা ব্যাখ্যা",
          acceptedTypes: ["clause", "description"],
          examples: ["because of the traffic", "that I was tired", "simple"],
        },
      ],
      examples: [
        {
          en: "The reason why I left early is that I was feeling sick.",
          bn: "যে কারণে আমি তাড়াতাড়ি চলে গিয়েছিলাম তা হলো আমার শরীর খারাপ লাগছিল।",
          slotValues: { CLAUSE: "I left early", EXPLANATION: "that I was feeling sick" },
          topicArea: "health",
        },
        {
          en: "The reason why she's upset is that nobody called her.",
          bn: "যে কারণে সে মন খারাপ করেছে তা হলো কেউ তাকে ফোন করেনি।",
          slotValues: { CLAUSE: "she's upset", EXPLANATION: "that nobody called her" },
          topicArea: "relationships",
        },
        {
          en: "The reason why I chose this school is the quality of education.",
          bn: "যে কারণে আমি এই স্কুল বেছেছি তা হলো শিক্ষার মান।",
          slotValues: { CLAUSE: "I chose this school", EXPLANATION: "the quality of education" },
          topicArea: "education",
        },
        {
          en: "The reason why we eat early is to stay healthy.",
          bn: "যে কারণে আমরা তাড়াতাড়ি খাই তা হলো সুস্থ থাকা।",
          slotValues: { CLAUSE: "we eat early", EXPLANATION: "to stay healthy" },
          topicArea: "food",
        },
        {
          en: "The reason why he travels so much is his job.",
          bn: "যে কারণে সে এত ভ্রমণ করে তা হলো তার চাকরি।",
          slotValues: { CLAUSE: "he travels so much", EXPLANATION: "his job" },
          topicArea: "travel",
        },
        {
          en: "The reason why I changed my job is better opportunities.",
          bn: "যে কারণে আমি চাকরি বদলেছি তা হলো আরও ভালো সুযোগ।",
          slotValues: { CLAUSE: "I changed my job", EXPLANATION: "better opportunities" },
          topicArea: "work",
        },
        {
          en: "The reason why the shop closed is low sales.",
          bn: "যে কারণে দোকান বন্ধ হয়েছে তা হলো কম বিক্রি।",
          slotValues: { CLAUSE: "the shop closed", EXPLANATION: "low sales" },
          topicArea: "shopping",
        },
        {
          en: "The reason why I wake up early is to exercise.",
          bn: "যে কারণে আমি তাড়াতাড়ি ঘুম থেকে উঠি তা হলো ব্যায়াম করা।",
          slotValues: { CLAUSE: "I wake up early", EXPLANATION: "to exercise" },
          topicArea: "daily_life",
        },
        {
          en: "The reason why they moved is that the rent was too high.",
          bn: "যে কারণে তারা চলে গেছে তা হলো ভাড়া খুব বেশি ছিল।",
          slotValues: { CLAUSE: "they moved", EXPLANATION: "that the rent was too high" },
          topicArea: "daily_life",
        },
        {
          en: "The reason why I love this restaurant is the authentic taste.",
          bn: "যে কারণে আমি এই রেস্তোরাঁ ভালোবাসি তা হলো খাঁটি স্বাদ।",
          slotValues: { CLAUSE: "I love this restaurant", EXPLANATION: "the authentic taste" },
          topicArea: "food",
        },
        {
          en: "The reason why I missed the flight is the traffic jam.",
          bn: "যে কারণে আমি ফ্লাইট মিস করেছি তা হলো যানজট।",
          slotValues: { CLAUSE: "I missed the flight", EXPLANATION: "the traffic jam" },
          topicArea: "travel",
        },
        {
          en: "The reason why she studies hard is to get a scholarship.",
          bn: "যে কারণে সে কঠোর পরিশ্রম করে পড়ে তা হলো বৃত্তি পাওয়া।",
          slotValues: { CLAUSE: "she studies hard", EXPLANATION: "to get a scholarship" },
          topicArea: "education",
        },
        {
          en: "The reason why I see the doctor regularly is my blood pressure.",
          bn: "যে কারণে আমি নিয়মিত ডাক্তার দেখাই তা হলো আমার রক্তচাপ।",
          slotValues: { CLAUSE: "I see the doctor regularly", EXPLANATION: "my blood pressure" },
          topicArea: "health",
        },
        {
          en: "The reason why we hired him is his experience.",
          bn: "যে কারণে আমরা তাকে নিয়োগ দিয়েছি তা হলো তার অভিজ্ঞতা।",
          slotValues: { CLAUSE: "we hired him", EXPLANATION: "his experience" },
          topicArea: "work",
        },
        {
          en: "The reason why I trust her is that she's always honest.",
          bn: "যে কারণে আমি তাকে বিশ্বাস করি তা হলো সে সবসময় সৎ।",
          slotValues: { CLAUSE: "I trust her", EXPLANATION: "that she's always honest" },
          topicArea: "relationships",
        },
      ],
      formality: "polite",
      difficulty: "intermediate",
      usageNote:
        "'Why' introduces a relative clause explaining a reason. It can be used with 'the reason' to add formality. 'Why' can often be omitted.",
      usageNote_bn:
        "'Why' একটি কারণ ব্যাখ্যাকারী সম্পর্কসূচক উপবাক্য প্রবর্তন করে। আনুষ্ঠানিকতা যোগ করতে 'the reason'-এর সাথে ব্যবহার করা যায়। 'Why' প্রায়ই বাদ দেওয়া যায়।",
      combinableWith: ["B5.5", "B5.1"],
      banglaStructureMap:
        "যে কারণে (The reason why) + [CLAUSE] (উপবাক্য) + তা হলো [EXPLANATION] (ব্যাখ্যা)",
    },
  ],
};
