import { PatternCategory } from "@/types/pattern";

export const categoryB3: PatternCategory = {
  id: "B3",
  slug: "there-is-are",
  name: "'There Is/Are' Patterns",
  name_bn: "'There Is/Are' প্যাটার্নসমূহ",
  description:
    "Learn how to talk about the existence or presence of things using 'there is' and 'there are' patterns.",
  description_bn:
    "'There is' এবং 'there are' প্যাটার্ন ব্যবহার করে জিনিসের অস্তিত্ব বা উপস্থিতি সম্পর্কে কথা বলতে শিখুন।",
  icon: "📍",
  group: "B",
  groupName: "Describing People, Things & Situations",
  groupName_bn: "মানুষ, জিনিস এবং পরিস্থিতি বর্ণনা",
  difficulty: "beginner",
  patterns: [
    {
      id: "B3.1",
      formula: "There is [THING] in [PLACE]",
      formula_bn: "[জায়গায়] [জিনিস] আছে",
      patternName: "Stating Existence",
      patternName_bn: "অস্তিত্ব জানানো",
      slots: [
        {
          name: "THING",
          description:
            "A singular noun or uncountable noun that exists somewhere",
          description_bn:
            "একটি একবচন বিশেষ্য বা অগণনীয় বিশেষ্য যা কোথাও আছে",
          acceptedTypes: ["noun"],
          examples: ["a park", "some water", "a hospital"],
        },
        {
          name: "PLACE",
          description: "A location or place",
          description_bn: "একটি অবস্থান বা জায়গা",
          acceptedTypes: ["place"],
          examples: ["my neighborhood", "the fridge", "this city"],
        },
      ],
      examples: [
        {
          en: "There is a park near my house.",
          bn: "আমার বাড়ির কাছে একটি পার্ক আছে।",
          slotValues: { THING: "a park", PLACE: "near my house" },
          topicArea: "daily_life",
        },
        {
          en: "There is some milk in the fridge.",
          bn: "ফ্রিজে কিছু দুধ আছে।",
          slotValues: { THING: "some milk", PLACE: "the fridge" },
          topicArea: "food",
        },
        {
          en: "There is a hospital on this street.",
          bn: "এই রাস্তায় একটি হাসপাতাল আছে।",
          slotValues: { THING: "a hospital", PLACE: "this street" },
          topicArea: "health",
        },
        {
          en: "There is a meeting at three o'clock.",
          bn: "তিনটায় একটি মিটিং আছে।",
          slotValues: { THING: "a meeting", PLACE: "at three o'clock" },
          topicArea: "work",
        },
        {
          en: "There is a good school in our area.",
          bn: "আমাদের এলাকায় একটি ভালো স্কুল আছে।",
          slotValues: { THING: "a good school", PLACE: "our area" },
          topicArea: "education",
        },
        {
          en: "There is a beautiful mosque in this town.",
          bn: "এই শহরে একটি সুন্দর মসজিদ আছে।",
          slotValues: {
            THING: "a beautiful mosque",
            PLACE: "this town",
          },
          topicArea: "travel",
        },
        {
          en: "There is a sale at the mall.",
          bn: "মলে সেল চলছে।",
          slotValues: { THING: "a sale", PLACE: "the mall" },
          topicArea: "shopping",
        },
        {
          en: "There is a cat on the roof.",
          bn: "ছাদে একটি বিড়াল আছে।",
          slotValues: { THING: "a cat", PLACE: "the roof" },
          topicArea: "daily_life",
        },
        {
          en: "There is a lot of traffic on the highway.",
          bn: "হাইওয়েতে অনেক যানজট আছে।",
          slotValues: {
            THING: "a lot of traffic",
            PLACE: "the highway",
          },
          topicArea: "travel",
        },
        {
          en: "There is a new restaurant in the neighborhood.",
          bn: "পাড়ায় একটি নতুন রেস্তোরাঁ আছে।",
          slotValues: {
            THING: "a new restaurant",
            PLACE: "the neighborhood",
          },
          topicArea: "food",
        },
        {
          en: "There is a problem with my computer.",
          bn: "আমার কম্পিউটারে একটি সমস্যা আছে।",
          slotValues: {
            THING: "a problem",
            PLACE: "with my computer",
          },
          topicArea: "work",
        },
        {
          en: "There is a library in the university.",
          bn: "বিশ্ববিদ্যালয়ে একটি লাইব্রেরি আছে।",
          slotValues: {
            THING: "a library",
            PLACE: "the university",
          },
          topicArea: "education",
        },
        {
          en: "There is a pharmacy around the corner.",
          bn: "কোণার কাছে একটি ফার্মেসি আছে।",
          slotValues: {
            THING: "a pharmacy",
            PLACE: "around the corner",
          },
          topicArea: "health",
        },
        {
          en: "There is a discount on electronics.",
          bn: "ইলেকট্রনিকসে ছাড় আছে।",
          slotValues: {
            THING: "a discount",
            PLACE: "on electronics",
          },
          topicArea: "shopping",
        },
        {
          en: "There is a letter for you on the table.",
          bn: "টেবিলে তোমার জন্য একটি চিঠি আছে।",
          slotValues: {
            THING: "a letter for you",
            PLACE: "on the table",
          },
          topicArea: "relationships",
        },
      ],
      formality: "casual",
      difficulty: "beginner",
      usageNote:
        "Use 'there is' for singular/uncountable nouns and 'there are' for plural nouns. Very fundamental English pattern.",
      usageNote_bn:
        "একবচন/অগণনীয় বিশেষ্যের জন্য 'there is' এবং বহুবচনের জন্য 'there are' ব্যবহার করুন। খুবই মৌলিক ইংরেজি প্যাটার্ন।",
      combinableWith: ["B3.2", "B3.3"],
      banglaStructureMap:
        "[PLACE]-এ (স্থান + বিভক্তি) + [THING] (কর্তা) + আছে (ক্রিয়া)",
    },
    {
      id: "B3.2",
      formula: "Is there [THING] near here?",
      formula_bn: "এখানে কাছে কি [জিনিস] আছে?",
      patternName: "Asking About Existence",
      patternName_bn: "অস্তিত্ব সম্পর্কে জিজ্ঞাসা",
      slots: [
        {
          name: "THING",
          description: "A noun or noun phrase you are looking for",
          description_bn: "একটি বিশেষ্য বা বিশেষ্য পদবন্ধ যা আপনি খুঁজছেন",
          acceptedTypes: ["noun"],
          examples: ["a bank", "a restroom", "any good hotels"],
        },
      ],
      examples: [
        {
          en: "Is there a bank near here?",
          bn: "এখানে কাছে কি কোনো ব্যাংক আছে?",
          slotValues: { THING: "a bank" },
          topicArea: "daily_life",
        },
        {
          en: "Is there a restroom nearby?",
          bn: "কাছাকাছি কি কোনো টয়লেট আছে?",
          slotValues: { THING: "a restroom" },
          topicArea: "travel",
        },
        {
          en: "Is there any good restaurant around here?",
          bn: "এদিকে কি কোনো ভালো রেস্তোরাঁ আছে?",
          slotValues: { THING: "any good restaurant" },
          topicArea: "food",
        },
        {
          en: "Is there a pharmacy near here?",
          bn: "এখানে কাছে কি কোনো ফার্মেসি আছে?",
          slotValues: { THING: "a pharmacy" },
          topicArea: "health",
        },
        {
          en: "Is there a shopping mall in this area?",
          bn: "এই এলাকায় কি কোনো শপিং মল আছে?",
          slotValues: { THING: "a shopping mall" },
          topicArea: "shopping",
        },
        {
          en: "Is there any Wi-Fi available here?",
          bn: "এখানে কি ওয়াই-ফাই পাওয়া যায়?",
          slotValues: { THING: "any Wi-Fi available" },
          topicArea: "work",
        },
        {
          en: "Is there a bus stop near here?",
          bn: "এখানে কাছে কি কোনো বাস স্টপ আছে?",
          slotValues: { THING: "a bus stop" },
          topicArea: "travel",
        },
        {
          en: "Is there a bookstore in this neighborhood?",
          bn: "এই পাড়ায় কি কোনো বইয়ের দোকান আছে?",
          slotValues: { THING: "a bookstore" },
          topicArea: "education",
        },
        {
          en: "Is there any milk left?",
          bn: "দুধ কি আর বাকি আছে?",
          slotValues: { THING: "any milk left" },
          topicArea: "food",
        },
        {
          en: "Is there anyone who can help me?",
          bn: "এমন কেউ কি আছে যে আমাকে সাহায্য করতে পারে?",
          slotValues: { THING: "anyone who can help me" },
          topicArea: "daily_life",
        },
        {
          en: "Is there a doctor on duty?",
          bn: "কি কোনো ডাক্তার ডিউটিতে আছেন?",
          slotValues: { THING: "a doctor on duty" },
          topicArea: "health",
        },
        {
          en: "Is there a meeting today?",
          bn: "আজ কি কোনো মিটিং আছে?",
          slotValues: { THING: "a meeting today" },
          topicArea: "work",
        },
        {
          en: "Is there a hotel with a swimming pool?",
          bn: "সুইমিং পুলসহ কি কোনো হোটেল আছে?",
          slotValues: { THING: "a hotel with a swimming pool" },
          topicArea: "travel",
        },
        {
          en: "Is there a warranty on this product?",
          bn: "এই পণ্যে কি ওয়ারেন্টি আছে?",
          slotValues: { THING: "a warranty on this product" },
          topicArea: "shopping",
        },
        {
          en: "Is there anything I can do for you?",
          bn: "আমি কি তোমার জন্য কিছু করতে পারি?",
          slotValues: { THING: "anything I can do for you" },
          topicArea: "relationships",
        },
      ],
      formality: "polite",
      difficulty: "beginner",
      usageNote:
        "This question form is extremely useful when traveling or in unfamiliar places. It's polite and natural.",
      usageNote_bn:
        "ভ্রমণের সময় বা অপরিচিত জায়গায় এই প্রশ্ন রূপটি অত্যন্ত কার্যকর। এটি ভদ্র ও স্বাভাবিক।",
      combinableWith: ["B3.1"],
      banglaStructureMap:
        "এখানে কাছে (স্থান) + কি (প্রশ্নবোধক) + [THING] (কর্তা) + আছে (ক্রিয়া)?",
    },
    {
      id: "B3.3",
      formula: "There isn't any [THING]",
      formula_bn: "কোনো [জিনিস] নেই",
      patternName: "Stating Non-Existence",
      patternName_bn: "অনুপস্থিতি জানানো",
      slots: [
        {
          name: "THING",
          description: "A noun or noun phrase that doesn't exist or isn't available",
          description_bn:
            "একটি বিশেষ্য বা বিশেষ্য পদবন্ধ যা নেই বা পাওয়া যাচ্ছে না",
          acceptedTypes: ["noun"],
          examples: ["sugar", "seats", "time"],
        },
      ],
      examples: [
        {
          en: "There isn't any sugar left.",
          bn: "চিনি আর কিছু বাকি নেই।",
          slotValues: { THING: "sugar left" },
          topicArea: "food",
        },
        {
          en: "There isn't any room in the car.",
          bn: "গাড়িতে কোনো জায়গা নেই।",
          slotValues: { THING: "room in the car" },
          topicArea: "travel",
        },
        {
          en: "There isn't any clean water here.",
          bn: "এখানে কোনো পরিষ্কার পানি নেই।",
          slotValues: { THING: "clean water here" },
          topicArea: "health",
        },
        {
          en: "There isn't any homework today.",
          bn: "আজ কোনো হোমওয়ার্ক নেই।",
          slotValues: { THING: "homework today" },
          topicArea: "education",
        },
        {
          en: "There isn't any parking available.",
          bn: "কোনো পার্কিং পাওয়া যাচ্ছে না।",
          slotValues: { THING: "parking available" },
          topicArea: "travel",
        },
        {
          en: "There isn't any milk in the fridge.",
          bn: "ফ্রিজে কোনো দুধ নেই।",
          slotValues: { THING: "milk in the fridge" },
          topicArea: "food",
        },
        {
          en: "There isn't any time to waste.",
          bn: "নষ্ট করার কোনো সময় নেই।",
          slotValues: { THING: "time to waste" },
          topicArea: "work",
        },
        {
          en: "There isn't any signal in this area.",
          bn: "এই এলাকায় কোনো সিগন্যাল নেই।",
          slotValues: { THING: "signal in this area" },
          topicArea: "daily_life",
        },
        {
          en: "There isn't any proof of that.",
          bn: "এর কোনো প্রমাণ নেই।",
          slotValues: { THING: "proof of that" },
          topicArea: "work",
        },
        {
          en: "There isn't any discount on this item.",
          bn: "এই পণ্যে কোনো ছাড় নেই।",
          slotValues: { THING: "discount on this item" },
          topicArea: "shopping",
        },
        {
          en: "There isn't any good news yet.",
          bn: "এখনো কোনো ভালো খবর নেই।",
          slotValues: { THING: "good news yet" },
          topicArea: "daily_life",
        },
        {
          en: "There isn't any other option.",
          bn: "অন্য কোনো উপায় নেই।",
          slotValues: { THING: "other option" },
          topicArea: "daily_life",
        },
        {
          en: "There isn't any electricity right now.",
          bn: "এই মুহূর্তে কোনো বিদ্যুৎ নেই।",
          slotValues: { THING: "electricity right now" },
          topicArea: "daily_life",
        },
        {
          en: "There isn't any medicine for this at home.",
          bn: "বাড়িতে এর কোনো ওষুধ নেই।",
          slotValues: { THING: "medicine for this at home" },
          topicArea: "health",
        },
        {
          en: "There isn't any reason to worry.",
          bn: "চিন্তা করার কোনো কারণ নেই।",
          slotValues: { THING: "reason to worry" },
          topicArea: "relationships",
        },
      ],
      formality: "casual",
      difficulty: "beginner",
      usageNote:
        "Use 'there isn't any' for uncountable/singular nouns and 'there aren't any' for plural nouns.",
      usageNote_bn:
        "অগণনীয়/একবচনের জন্য 'there isn't any' এবং বহুবচনের জন্য 'there aren't any' ব্যবহার করুন।",
      combinableWith: ["B3.1", "B3.2"],
      banglaStructureMap:
        "কোনো (নেতিবাচক নির্দেশক) + [THING] (কর্তা) + নেই (নেতিবাচক ক্রিয়া)",
    },
    {
      id: "B3.4",
      formula: "There used to be [THING]",
      formula_bn: "আগে [জিনিস] ছিল",
      patternName: "Past Existence",
      patternName_bn: "অতীত অস্তিত্ব",
      slots: [
        {
          name: "THING",
          description:
            "A noun or noun phrase that existed in the past but no longer does",
          description_bn:
            "একটি বিশেষ্য বা বিশেষ্য পদবন্ধ যা অতীতে ছিল কিন্তু এখন আর নেই",
          acceptedTypes: ["noun"],
          examples: ["a cinema", "a big tree", "many shops"],
        },
      ],
      examples: [
        {
          en: "There used to be a cinema here.",
          bn: "এখানে আগে একটি সিনেমা হল ছিল।",
          slotValues: { THING: "a cinema here" },
          topicArea: "daily_life",
        },
        {
          en: "There used to be a big tree in front of the house.",
          bn: "বাড়ির সামনে আগে একটি বড় গাছ ছিল।",
          slotValues: {
            THING: "a big tree in front of the house",
          },
          topicArea: "daily_life",
        },
        {
          en: "There used to be many shops on this road.",
          bn: "এই রাস্তায় আগে অনেক দোকান ছিল।",
          slotValues: { THING: "many shops on this road" },
          topicArea: "shopping",
        },
        {
          en: "There used to be a lake near our village.",
          bn: "আমাদের গ্রামের কাছে আগে একটি পুকুর ছিল।",
          slotValues: { THING: "a lake near our village" },
          topicArea: "travel",
        },
        {
          en: "There used to be a playground in this area.",
          bn: "এই এলাকায় আগে একটি খেলার মাঠ ছিল।",
          slotValues: { THING: "a playground in this area" },
          topicArea: "daily_life",
        },
        {
          en: "There used to be a bakery on the corner.",
          bn: "কোণায় আগে একটি বেকারি ছিল।",
          slotValues: { THING: "a bakery on the corner" },
          topicArea: "food",
        },
        {
          en: "There used to be a good doctor in this clinic.",
          bn: "এই ক্লিনিকে আগে একজন ভালো ডাক্তার ছিলেন।",
          slotValues: { THING: "a good doctor in this clinic" },
          topicArea: "health",
        },
        {
          en: "There used to be fewer cars on the road.",
          bn: "রাস্তায় আগে কম গাড়ি ছিল।",
          slotValues: { THING: "fewer cars on the road" },
          topicArea: "travel",
        },
        {
          en: "There used to be a canteen in our office.",
          bn: "আমাদের অফিসে আগে একটি ক্যান্টিন ছিল।",
          slotValues: { THING: "a canteen in our office" },
          topicArea: "work",
        },
        {
          en: "There used to be a bookshop near the school.",
          bn: "স্কুলের কাছে আগে একটি বইয়ের দোকান ছিল।",
          slotValues: { THING: "a bookshop near the school" },
          topicArea: "education",
        },
        {
          en: "There used to be more fish in this river.",
          bn: "এই নদীতে আগে বেশি মাছ ছিল।",
          slotValues: { THING: "more fish in this river" },
          topicArea: "daily_life",
        },
        {
          en: "There used to be a night market here every Friday.",
          bn: "এখানে আগে প্রতি শুক্রবার রাতের বাজার বসতো।",
          slotValues: {
            THING: "a night market here every Friday",
          },
          topicArea: "shopping",
        },
        {
          en: "There used to be a bridge across the river.",
          bn: "নদীর উপর আগে একটি সেতু ছিল।",
          slotValues: { THING: "a bridge across the river" },
          topicArea: "travel",
        },
        {
          en: "There used to be a strong bond between them.",
          bn: "তাদের মধ্যে আগে দৃঢ় বন্ধন ছিল।",
          slotValues: {
            THING: "a strong bond between them",
          },
          topicArea: "relationships",
        },
        {
          en: "There used to be a garden behind the office.",
          bn: "অফিসের পিছনে আগে একটি বাগান ছিল।",
          slotValues: {
            THING: "a garden behind the office",
          },
          topicArea: "work",
        },
      ],
      formality: "casual",
      difficulty: "beginner",
      usageNote:
        "'There used to be' talks about something that existed in the past but doesn't exist anymore. It often carries a sense of nostalgia.",
      usageNote_bn:
        "'There used to be' এমন কিছু সম্পর্কে বলে যা অতীতে ছিল কিন্তু এখন আর নেই। এটি প্রায়ই স্মৃতিকাতরতার অনুভূতি বহন করে।",
      combinableWith: ["B3.1"],
      banglaStructureMap:
        "আগে (সময়) + [THING] (কর্তা) + ছিল (অতীত ক্রিয়া)",
    },
    {
      id: "B3.5",
      formula: "There seems to be [PROBLEM]",
      formula_bn: "[সমস্যা] আছে বলে মনে হচ্ছে",
      patternName: "Polite Problem Statement",
      patternName_bn: "ভদ্রভাবে সমস্যা জানানো",
      slots: [
        {
          name: "PROBLEM",
          description:
            "A noun or noun phrase describing an issue, problem, or unexpected situation",
          description_bn:
            "একটি বিশেষ্য বা বিশেষ্য পদবন্ধ যা একটি সমস্যা বা অপ্রত্যাশিত পরিস্থিতি বর্ণনা করে",
          acceptedTypes: ["noun"],
          examples: [
            "a mistake",
            "a misunderstanding",
            "a problem with the order",
          ],
        },
      ],
      examples: [
        {
          en: "There seems to be a mistake in the bill.",
          bn: "বিলে একটি ভুল আছে বলে মনে হচ্ছে।",
          slotValues: { PROBLEM: "a mistake in the bill" },
          topicArea: "shopping",
        },
        {
          en: "There seems to be a misunderstanding.",
          bn: "একটি ভুল বোঝাবুঝি আছে বলে মনে হচ্ছে।",
          slotValues: { PROBLEM: "a misunderstanding" },
          topicArea: "relationships",
        },
        {
          en: "There seems to be a problem with the internet.",
          bn: "ইন্টারনেটে একটি সমস্যা আছে বলে মনে হচ্ছে।",
          slotValues: { PROBLEM: "a problem with the internet" },
          topicArea: "daily_life",
        },
        {
          en: "There seems to be a delay in the delivery.",
          bn: "ডেলিভারিতে বিলম্ব হচ্ছে বলে মনে হচ্ছে।",
          slotValues: { PROBLEM: "a delay in the delivery" },
          topicArea: "shopping",
        },
        {
          en: "There seems to be a leak in the pipe.",
          bn: "পাইপে লিক আছে বলে মনে হচ্ছে।",
          slotValues: { PROBLEM: "a leak in the pipe" },
          topicArea: "daily_life",
        },
        {
          en: "There seems to be a shortage of staff.",
          bn: "কর্মী সংকট আছে বলে মনে হচ্ছে।",
          slotValues: { PROBLEM: "a shortage of staff" },
          topicArea: "work",
        },
        {
          en: "There seems to be an error in this document.",
          bn: "এই দলিলে একটি ত্রুটি আছে বলে মনে হচ্ছে।",
          slotValues: { PROBLEM: "an error in this document" },
          topicArea: "work",
        },
        {
          en: "There seems to be a bug in the software.",
          bn: "সফটওয়্যারে একটি বাগ আছে বলে মনে হচ্ছে।",
          slotValues: { PROBLEM: "a bug in the software" },
          topicArea: "work",
        },
        {
          en: "There seems to be some confusion about the schedule.",
          bn: "সময়সূচি নিয়ে কিছু বিভ্রান্তি আছে বলে মনে হচ্ছে।",
          slotValues: {
            PROBLEM: "some confusion about the schedule",
          },
          topicArea: "education",
        },
        {
          en: "There seems to be an issue with the payment.",
          bn: "পেমেন্ট নিয়ে একটি সমস্যা আছে বলে মনে হচ্ছে।",
          slotValues: { PROBLEM: "an issue with the payment" },
          topicArea: "shopping",
        },
        {
          en: "There seems to be a side effect from this medicine.",
          bn: "এই ওষুধের পার্শ্বপ্রতিক্রিয়া আছে বলে মনে হচ্ছে।",
          slotValues: {
            PROBLEM: "a side effect from this medicine",
          },
          topicArea: "health",
        },
        {
          en: "There seems to be a traffic jam ahead.",
          bn: "সামনে যানজট আছে বলে মনে হচ্ছে।",
          slotValues: { PROBLEM: "a traffic jam ahead" },
          topicArea: "travel",
        },
        {
          en: "There seems to be a power outage in the area.",
          bn: "এলাকায় বিদ্যুৎ বিভ্রাট আছে বলে মনে হচ্ছে।",
          slotValues: { PROBLEM: "a power outage in the area" },
          topicArea: "daily_life",
        },
        {
          en: "There seems to be a gap in your resume.",
          bn: "তোমার জীবনবৃত্তান্তে একটি ফাঁক আছে বলে মনে হচ্ছে।",
          slotValues: { PROBLEM: "a gap in your resume" },
          topicArea: "work",
        },
        {
          en: "There seems to be some tension between them.",
          bn: "তাদের মধ্যে কিছু উত্তেজনা আছে বলে মনে হচ্ছে।",
          slotValues: { PROBLEM: "some tension between them" },
          topicArea: "relationships",
        },
      ],
      formality: "polite",
      difficulty: "beginner",
      usageNote:
        "'There seems to be' is a polite and indirect way to point out problems. It's much softer than 'There is a problem'.",
      usageNote_bn:
        "'There seems to be' সমস্যা তুলে ধরার একটি ভদ্র ও পরোক্ষ উপায়। এটি 'There is a problem' বলার চেয়ে অনেক নরম।",
      combinableWith: ["B3.1", "B3.3"],
      banglaStructureMap:
        "[PROBLEM] (কর্তা) + আছে বলে মনে হচ্ছে (ক্রিয়া + সংশয়)",
    },
    {
      id: "B3.6",
      formula: "There's no [THING] left",
      formula_bn: "[জিনিস] আর বাকি নেই",
      patternName: "Depletion",
      patternName_bn: "শেষ হয়ে যাওয়া",
      slots: [
        {
          name: "THING",
          description: "A noun or noun phrase that has run out or been used up",
          description_bn:
            "একটি বিশেষ্য বা বিশেষ্য পদবন্ধ যা শেষ হয়ে গেছে বা ব্যবহৃত হয়ে গেছে",
          acceptedTypes: ["noun"],
          examples: ["milk", "time", "seats"],
        },
      ],
      examples: [
        {
          en: "There's no milk left.",
          bn: "দুধ আর বাকি নেই।",
          slotValues: { THING: "milk" },
          topicArea: "food",
        },
        {
          en: "There's no time left.",
          bn: "সময় আর বাকি নেই।",
          slotValues: { THING: "time" },
          topicArea: "daily_life",
        },
        {
          en: "There are no seats left.",
          bn: "আসন আর বাকি নেই।",
          slotValues: { THING: "seats" },
          topicArea: "travel",
        },
        {
          en: "There's no food left in the fridge.",
          bn: "ফ্রিজে খাবার আর বাকি নেই।",
          slotValues: { THING: "food" },
          topicArea: "food",
        },
        {
          en: "There's no money left in my account.",
          bn: "আমার অ্যাকাউন্টে টাকা আর বাকি নেই।",
          slotValues: { THING: "money" },
          topicArea: "shopping",
        },
        {
          en: "There's no hot water left.",
          bn: "গরম পানি আর বাকি নেই।",
          slotValues: { THING: "hot water" },
          topicArea: "daily_life",
        },
        {
          en: "There are no tickets left for the show.",
          bn: "শো-এর টিকিট আর বাকি নেই।",
          slotValues: { THING: "tickets" },
          topicArea: "daily_life",
        },
        {
          en: "There's no space left in the parking lot.",
          bn: "পার্কিং লটে জায়গা আর বাকি নেই।",
          slotValues: { THING: "space" },
          topicArea: "travel",
        },
        {
          en: "There's no battery left on my phone.",
          bn: "আমার ফোনে চার্জ আর বাকি নেই।",
          slotValues: { THING: "battery" },
          topicArea: "daily_life",
        },
        {
          en: "There's no sugar left in the kitchen.",
          bn: "রান্নাঘরে চিনি আর বাকি নেই।",
          slotValues: { THING: "sugar" },
          topicArea: "food",
        },
        {
          en: "There are no copies left of this book.",
          bn: "এই বইয়ের কপি আর বাকি নেই।",
          slotValues: { THING: "copies" },
          topicArea: "education",
        },
        {
          en: "There's no medicine left at home.",
          bn: "বাড়িতে ওষুধ আর বাকি নেই।",
          slotValues: { THING: "medicine" },
          topicArea: "health",
        },
        {
          en: "There's no patience left in me.",
          bn: "আমার মধ্যে ধৈর্য আর বাকি নেই।",
          slotValues: { THING: "patience" },
          topicArea: "relationships",
        },
        {
          en: "There are no vacation days left this year.",
          bn: "এই বছর ছুটির দিন আর বাকি নেই।",
          slotValues: { THING: "vacation days" },
          topicArea: "work",
        },
        {
          en: "There's no stock left of that item.",
          bn: "সেই জিনিসের স্টক আর বাকি নেই।",
          slotValues: { THING: "stock" },
          topicArea: "shopping",
        },
      ],
      formality: "casual",
      difficulty: "beginner",
      usageNote:
        "Use 'there's no... left' for uncountable/singular and 'there are no... left' for plural nouns. 'Left' means remaining.",
      usageNote_bn:
        "অগণনীয়/একবচনের জন্য 'there's no... left' এবং বহুবচনের জন্য 'there are no... left' ব্যবহার করুন। 'Left' মানে অবশিষ্ট।",
      combinableWith: ["B3.3"],
      banglaStructureMap:
        "[THING] (কর্তা) + আর (More) + বাকি নেই (Left + Negative)",
    },
  ],
};
