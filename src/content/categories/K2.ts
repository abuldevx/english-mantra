import { PatternCategory } from "@/types/pattern";

export const categoryK2: PatternCategory = {
  id: "K2",
  slug: "reporting-questions",
  name: "Reporting Questions",
  name_bn: "প্রশ্ন প্রতিবেদন",
  description:
    "Learn to report questions that others asked using indirect speech.",
  description_bn:
    "পরোক্ষ উক্তি ব্যবহার করে অন্যরা কী জিজ্ঞাসা করেছে তা জানাতে শিখুন।",
  icon: "❓",
  group: "K",
  groupName: "Reported Speech & Communication",
  groupName_bn: "পরোক্ষ উক্তি ও যোগাযোগ",
  difficulty: "intermediate",
  patterns: [
    {
      id: "K2.1",
      formula: "[PERSON] asked me if [CLAUSE]",
      formula_bn: "[ব্যক্তি] আমাকে জিজ্ঞাসা করেছে [উপবাক্য] কিনা",
      patternName: "Reporting Yes/No Questions",
      patternName_bn: "হ্যাঁ/না প্রশ্ন প্রতিবেদন",
      slots: [
        {
          name: "PERSON",
          description: "The person who asked the question",
          description_bn: "যে ব্যক্তি প্রশ্ন করেছে",
          acceptedTypes: ["person"],
          examples: ["She", "He", "My mom", "The interviewer"],
        },
        {
          name: "CLAUSE",
          description:
            "The yes/no question reported as a statement clause",
          description_bn: "হ্যাঁ/না প্রশ্ন বিবৃতি আকারে",
          acceptedTypes: ["clause"],
          examples: [
            "I was coming to the party",
            "I had finished my homework",
            "I could help",
          ],
        },
      ],
      examples: [
        {
          en: "She asked me if I was coming to the party.",
          bn: "সে আমাকে জিজ্ঞাসা করেছে আমি পার্টিতে আসছি কিনা।",
          slotValues: {
            PERSON: "She",
            CLAUSE: "I was coming to the party",
          },
          topicArea: "relationships",
        },
        {
          en: "He asked me if I had finished my homework.",
          bn: "সে আমাকে জিজ্ঞাসা করেছে আমি হোমওয়ার্ক শেষ করেছি কিনা।",
          slotValues: {
            PERSON: "He",
            CLAUSE: "I had finished my homework",
          },
          topicArea: "education",
        },
        {
          en: "My mom asked me if I had eaten lunch.",
          bn: "আমার মা আমাকে জিজ্ঞাসা করেছেন আমি দুপুরের খাবার খেয়েছি কিনা।",
          slotValues: {
            PERSON: "My mom",
            CLAUSE: "I had eaten lunch",
          },
          topicArea: "food",
        },
        {
          en: "The interviewer asked me if I had any experience.",
          bn: "ইন্টারভিউয়ার আমাকে জিজ্ঞাসা করেছেন আমার কোনো অভিজ্ঞতা আছে কিনা।",
          slotValues: {
            PERSON: "The interviewer",
            CLAUSE: "I had any experience",
          },
          topicArea: "work",
        },
        {
          en: "She asked me if I could help her move.",
          bn: "সে আমাকে জিজ্ঞাসা করেছে আমি তাকে বাসা বদলাতে সাহায্য করতে পারি কিনা।",
          slotValues: {
            PERSON: "She",
            CLAUSE: "I could help her move",
          },
          topicArea: "daily_life",
        },
        {
          en: "The doctor asked me if I was feeling any pain.",
          bn: "ডাক্তার আমাকে জিজ্ঞাসা করেছেন আমার কোথাও ব্যথা লাগছে কিনা।",
          slotValues: {
            PERSON: "The doctor",
            CLAUSE: "I was feeling any pain",
          },
          topicArea: "health",
        },
        {
          en: "He asked me if I wanted to go for a walk.",
          bn: "সে আমাকে জিজ্ঞাসা করেছে আমি হাঁটতে যেতে চাই কিনা।",
          slotValues: {
            PERSON: "He",
            CLAUSE: "I wanted to go for a walk",
          },
          topicArea: "health",
        },
        {
          en: "My boss asked me if I could work overtime.",
          bn: "আমার বস আমাকে জিজ্ঞাসা করেছেন আমি ওভারটাইম করতে পারি কিনা।",
          slotValues: {
            PERSON: "My boss",
            CLAUSE: "I could work overtime",
          },
          topicArea: "work",
        },
        {
          en: "She asked me if I had ever been to Cox's Bazar.",
          bn: "সে আমাকে জিজ্ঞাসা করেছে আমি কখনো কক্সবাজার গিয়েছি কিনা।",
          slotValues: {
            PERSON: "She",
            CLAUSE: "I had ever been to Cox's Bazar",
          },
          topicArea: "travel",
        },
        {
          en: "The teacher asked me if I understood the lesson.",
          bn: "শিক্ষক আমাকে জিজ্ঞাসা করেছেন আমি পাঠ বুঝেছি কিনা।",
          slotValues: {
            PERSON: "The teacher",
            CLAUSE: "I understood the lesson",
          },
          topicArea: "education",
        },
        {
          en: "He asked me if I liked the food.",
          bn: "সে আমাকে জিজ্ঞাসা করেছে আমার খাবার ভালো লেগেছে কিনা।",
          slotValues: {
            PERSON: "He",
            CLAUSE: "I liked the food",
          },
          topicArea: "food",
        },
        {
          en: "My friend asked me if I was free this weekend.",
          bn: "আমার বন্ধু আমাকে জিজ্ঞাসা করেছে এই সপ্তাহান্তে আমি ফ্রি আছি কিনা।",
          slotValues: {
            PERSON: "My friend",
            CLAUSE: "I was free this weekend",
          },
          topicArea: "relationships",
        },
        {
          en: "The shopkeeper asked me if I needed a bag.",
          bn: "দোকানদার আমাকে জিজ্ঞাসা করেছে আমার ব্যাগ দরকার কিনা।",
          slotValues: {
            PERSON: "The shopkeeper",
            CLAUSE: "I needed a bag",
          },
          topicArea: "shopping",
        },
        {
          en: "She asked me if I was married.",
          bn: "সে আমাকে জিজ্ঞাসা করেছে আমি বিবাহিত কিনা।",
          slotValues: {
            PERSON: "She",
            CLAUSE: "I was married",
          },
          topicArea: "relationships",
        },
        {
          en: "He asked me if I knew the way to the station.",
          bn: "সে আমাকে জিজ্ঞাসা করেছে আমি স্টেশনের রাস্তা জানি কিনা।",
          slotValues: {
            PERSON: "He",
            CLAUSE: "I knew the way to the station",
          },
          topicArea: "travel",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "Use 'if' or 'whether' to report yes/no questions. The word order becomes statement order (not question order).",
      usageNote_bn:
        "হ্যাঁ/না প্রশ্ন জানাতে 'if' বা 'whether' ব্যবহার করুন। শব্দের ক্রম বিবৃতির মতো হয় (প্রশ্নের মতো নয়)।",
    },
    {
      id: "K2.2",
      formula: "[PERSON] asked what [CLAUSE]",
      formula_bn: "[ব্যক্তি] জিজ্ঞাসা করেছে কী [উপবাক্য]",
      patternName: "Reporting 'What' Questions",
      patternName_bn: "'কী' প্রশ্ন প্রতিবেদন",
      slots: [
        {
          name: "PERSON",
          description: "The person who asked",
          description_bn: "যে ব্যক্তি জিজ্ঞাসা করেছে",
          acceptedTypes: ["person"],
          examples: ["She", "He", "My brother", "The customer"],
        },
        {
          name: "CLAUSE",
          description: "The 'what' question in statement form",
          description_bn: "'কী' প্রশ্ন বিবৃতি আকারে",
          acceptedTypes: ["clause"],
          examples: [
            "my name was",
            "I was doing",
            "happened at the meeting",
          ],
        },
      ],
      examples: [
        {
          en: "She asked what my name was.",
          bn: "সে জিজ্ঞাসা করেছে আমার নাম কী।",
          slotValues: { PERSON: "She", CLAUSE: "my name was" },
          topicArea: "daily_life",
        },
        {
          en: "He asked what I was doing.",
          bn: "সে জিজ্ঞাসা করেছে আমি কী করছি।",
          slotValues: { PERSON: "He", CLAUSE: "I was doing" },
          topicArea: "daily_life",
        },
        {
          en: "My brother asked what happened at the meeting.",
          bn: "আমার ভাই জিজ্ঞাসা করেছে মিটিংয়ে কী হয়েছে।",
          slotValues: {
            PERSON: "My brother",
            CLAUSE: "happened at the meeting",
          },
          topicArea: "work",
        },
        {
          en: "The customer asked what the price was.",
          bn: "ক্রেতা জিজ্ঞাসা করেছে দাম কত।",
          slotValues: {
            PERSON: "The customer",
            CLAUSE: "the price was",
          },
          topicArea: "shopping",
        },
        {
          en: "She asked what time the movie started.",
          bn: "সে জিজ্ঞাসা করেছে সিনেমা কটায় শুরু হবে।",
          slotValues: {
            PERSON: "She",
            CLAUSE: "time the movie started",
          },
          topicArea: "daily_life",
        },
        {
          en: "He asked what I wanted for dinner.",
          bn: "সে জিজ্ঞাসা করেছে রাতের খাবারে আমি কী চাই।",
          slotValues: {
            PERSON: "He",
            CLAUSE: "I wanted for dinner",
          },
          topicArea: "food",
        },
        {
          en: "The teacher asked what the answer was.",
          bn: "শিক্ষক জিজ্ঞাসা করেছেন উত্তর কী।",
          slotValues: {
            PERSON: "The teacher",
            CLAUSE: "the answer was",
          },
          topicArea: "education",
        },
        {
          en: "My friend asked what I thought about the book.",
          bn: "আমার বন্ধু জিজ্ঞাসা করেছে বইটা সম্পর্কে আমার কী মনে হয়।",
          slotValues: {
            PERSON: "My friend",
            CLAUSE: "I thought about the book",
          },
          topicArea: "education",
        },
        {
          en: "She asked what the doctor had said.",
          bn: "সে জিজ্ঞাসা করেছে ডাক্তার কী বলেছেন।",
          slotValues: {
            PERSON: "She",
            CLAUSE: "the doctor had said",
          },
          topicArea: "health",
        },
        {
          en: "He asked what I was planning for the weekend.",
          bn: "সে জিজ্ঞাসা করেছে সপ্তাহান্তে আমার কী পরিকল্পনা।",
          slotValues: {
            PERSON: "He",
            CLAUSE: "I was planning for the weekend",
          },
          topicArea: "daily_life",
        },
        {
          en: "The waiter asked what we would like to order.",
          bn: "ওয়েটার জিজ্ঞাসা করেছে আমরা কী অর্ডার করতে চাই।",
          slotValues: {
            PERSON: "The waiter",
            CLAUSE: "we would like to order",
          },
          topicArea: "food",
        },
        {
          en: "My mother asked what I had learned at school.",
          bn: "আমার মা জিজ্ঞাসা করেছেন স্কুলে আমি কী শিখেছি।",
          slotValues: {
            PERSON: "My mother",
            CLAUSE: "I had learned at school",
          },
          topicArea: "education",
        },
        {
          en: "She asked what the best route to the airport was.",
          bn: "সে জিজ্ঞাসা করেছে বিমানবন্দরে যাওয়ার সেরা রাস্তা কোনটি।",
          slotValues: {
            PERSON: "She",
            CLAUSE: "the best route to the airport was",
          },
          topicArea: "travel",
        },
        {
          en: "The manager asked what the problem was.",
          bn: "ম্যানেজার জিজ্ঞাসা করেছেন সমস্যা কী।",
          slotValues: {
            PERSON: "The manager",
            CLAUSE: "the problem was",
          },
          topicArea: "work",
        },
        {
          en: "He asked what kind of phone I was using.",
          bn: "সে জিজ্ঞাসা করেছে আমি কোন ধরনের ফোন ব্যবহার করি।",
          slotValues: {
            PERSON: "He",
            CLAUSE: "kind of phone I was using",
          },
          topicArea: "shopping",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "When reporting 'what' questions, keep statement word order: 'asked what the price was' (not 'asked what was the price').",
      usageNote_bn:
        "'What' প্রশ্ন জানানোর সময় বিবৃতির শব্দক্রম রাখুন: 'asked what the price was' ('asked what was the price' নয়)।",
    },
    {
      id: "K2.3",
      formula: "[PERSON] asked where [CLAUSE]",
      formula_bn: "[ব্যক্তি] জিজ্ঞাসা করেছে কোথায় [উপবাক্য]",
      patternName: "Reporting 'Where' Questions",
      patternName_bn: "'কোথায়' প্রশ্ন প্রতিবেদন",
      slots: [
        {
          name: "PERSON",
          description: "The person who asked",
          description_bn: "যে ব্যক্তি জিজ্ঞাসা করেছে",
          acceptedTypes: ["person"],
          examples: ["She", "He", "The tourist", "My dad"],
        },
        {
          name: "CLAUSE",
          description: "The 'where' question in statement form",
          description_bn: "'কোথায়' প্রশ্ন বিবৃতি আকারে",
          acceptedTypes: ["clause"],
          examples: [
            "the bathroom was",
            "I lived",
            "we should go for dinner",
          ],
        },
      ],
      examples: [
        {
          en: "She asked where the bathroom was.",
          bn: "সে জিজ্ঞাসা করেছে বাথরুম কোথায়।",
          slotValues: { PERSON: "She", CLAUSE: "the bathroom was" },
          topicArea: "daily_life",
        },
        {
          en: "He asked where I lived.",
          bn: "সে জিজ্ঞাসা করেছে আমি কোথায় থাকি।",
          slotValues: { PERSON: "He", CLAUSE: "I lived" },
          topicArea: "daily_life",
        },
        {
          en: "The tourist asked where the nearest hotel was.",
          bn: "পর্যটক জিজ্ঞাসা করেছে নিকটতম হোটেল কোথায়।",
          slotValues: {
            PERSON: "The tourist",
            CLAUSE: "the nearest hotel was",
          },
          topicArea: "travel",
        },
        {
          en: "My dad asked where I had put his glasses.",
          bn: "আমার বাবা জিজ্ঞাসা করেছেন আমি তাঁর চশমা কোথায় রেখেছি।",
          slotValues: {
            PERSON: "My dad",
            CLAUSE: "I had put his glasses",
          },
          topicArea: "daily_life",
        },
        {
          en: "She asked where we should go for dinner.",
          bn: "সে জিজ্ঞাসা করেছে রাতের খাবারের জন্য আমরা কোথায় যাব।",
          slotValues: {
            PERSON: "She",
            CLAUSE: "we should go for dinner",
          },
          topicArea: "food",
        },
        {
          en: "The patient asked where the pharmacy was.",
          bn: "রোগী জিজ্ঞাসা করেছে ফার্মেসি কোথায়।",
          slotValues: {
            PERSON: "The patient",
            CLAUSE: "the pharmacy was",
          },
          topicArea: "health",
        },
        {
          en: "He asked where I had bought my shoes.",
          bn: "সে জিজ্ঞাসা করেছে আমি জুতা কোথা থেকে কিনেছি।",
          slotValues: {
            PERSON: "He",
            CLAUSE: "I had bought my shoes",
          },
          topicArea: "shopping",
        },
        {
          en: "My colleague asked where the meeting was being held.",
          bn: "আমার সহকর্মী জিজ্ঞাসা করেছে মিটিং কোথায় হচ্ছে।",
          slotValues: {
            PERSON: "My colleague",
            CLAUSE: "the meeting was being held",
          },
          topicArea: "work",
        },
        {
          en: "She asked where I had gone on vacation.",
          bn: "সে জিজ্ঞাসা করেছে আমি ছুটিতে কোথায় গিয়েছিলাম।",
          slotValues: {
            PERSON: "She",
            CLAUSE: "I had gone on vacation",
          },
          topicArea: "travel",
        },
        {
          en: "The student asked where the library was.",
          bn: "ছাত্রটি জিজ্ঞাসা করেছে লাইব্রেরি কোথায়।",
          slotValues: {
            PERSON: "The student",
            CLAUSE: "the library was",
          },
          topicArea: "education",
        },
        {
          en: "He asked where I was going after work.",
          bn: "সে জিজ্ঞাসা করেছে কাজের পরে আমি কোথায় যাচ্ছি।",
          slotValues: {
            PERSON: "He",
            CLAUSE: "I was going after work",
          },
          topicArea: "work",
        },
        {
          en: "My sister asked where I had kept the keys.",
          bn: "আমার বোন জিজ্ঞাসা করেছে আমি চাবি কোথায় রেখেছি।",
          slotValues: {
            PERSON: "My sister",
            CLAUSE: "I had kept the keys",
          },
          topicArea: "daily_life",
        },
        {
          en: "She asked where the children were playing.",
          bn: "সে জিজ্ঞাসা করেছে বাচ্চারা কোথায় খেলছে।",
          slotValues: {
            PERSON: "She",
            CLAUSE: "the children were playing",
          },
          topicArea: "relationships",
        },
        {
          en: "The driver asked where I wanted to be dropped off.",
          bn: "ড্রাইভার জিজ্ঞাসা করেছে আমি কোথায় নামতে চাই।",
          slotValues: {
            PERSON: "The driver",
            CLAUSE: "I wanted to be dropped off",
          },
          topicArea: "travel",
        },
        {
          en: "He asked where the best place to eat was.",
          bn: "সে জিজ্ঞাসা করেছে খাওয়ার সেরা জায়গা কোথায়।",
          slotValues: {
            PERSON: "He",
            CLAUSE: "the best place to eat was",
          },
          topicArea: "food",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "Reported 'where' questions keep the question word but change to statement order.",
      usageNote_bn:
        "পরোক্ষ 'where' প্রশ্নে প্রশ্নবাচক শব্দ থাকে তবে বিবৃতির ক্রম হয়।",
    },
    {
      id: "K2.4",
      formula: "[PERSON] asked why [CLAUSE]",
      formula_bn: "[ব্যক্তি] জিজ্ঞাসা করেছে কেন [উপবাক্য]",
      patternName: "Reporting 'Why' Questions",
      patternName_bn: "'কেন' প্রশ্ন প্রতিবেদন",
      slots: [
        {
          name: "PERSON",
          description: "The person who asked why",
          description_bn: "যে ব্যক্তি কেন জিজ্ঞাসা করেছে",
          acceptedTypes: ["person"],
          examples: ["She", "He", "My mother", "The teacher"],
        },
        {
          name: "CLAUSE",
          description: "The reason question in statement form",
          description_bn: "কারণ প্রশ্ন বিবৃতি আকারে",
          acceptedTypes: ["clause"],
          examples: [
            "I was late",
            "the project failed",
            "I had changed my mind",
          ],
        },
      ],
      examples: [
        {
          en: "She asked why I was late.",
          bn: "সে জিজ্ঞাসা করেছে আমি কেন দেরি করলাম।",
          slotValues: { PERSON: "She", CLAUSE: "I was late" },
          topicArea: "daily_life",
        },
        {
          en: "He asked why the project had failed.",
          bn: "সে জিজ্ঞাসা করেছে প্রজেক্ট কেন ব্যর্থ হয়েছে।",
          slotValues: { PERSON: "He", CLAUSE: "the project had failed" },
          topicArea: "work",
        },
        {
          en: "My mother asked why I hadn't called her.",
          bn: "আমার মা জিজ্ঞাসা করেছেন আমি কেন তাঁকে ফোন করিনি।",
          slotValues: {
            PERSON: "My mother",
            CLAUSE: "I hadn't called her",
          },
          topicArea: "relationships",
        },
        {
          en: "The teacher asked why I had missed the class.",
          bn: "শিক্ষক জিজ্ঞাসা করেছেন আমি কেন ক্লাস মিস করেছি।",
          slotValues: {
            PERSON: "The teacher",
            CLAUSE: "I had missed the class",
          },
          topicArea: "education",
        },
        {
          en: "She asked why I had changed my mind.",
          bn: "সে জিজ্ঞাসা করেছে আমি কেন মত বদলেছি।",
          slotValues: {
            PERSON: "She",
            CLAUSE: "I had changed my mind",
          },
          topicArea: "daily_life",
        },
        {
          en: "The doctor asked why I had stopped taking the medicine.",
          bn: "ডাক্তার জিজ্ঞাসা করেছেন আমি কেন ওষুধ খাওয়া বন্ধ করেছি।",
          slotValues: {
            PERSON: "The doctor",
            CLAUSE: "I had stopped taking the medicine",
          },
          topicArea: "health",
        },
        {
          en: "He asked why the restaurant was so crowded.",
          bn: "সে জিজ্ঞাসা করেছে রেস্তোরাঁয় এত ভিড় কেন।",
          slotValues: {
            PERSON: "He",
            CLAUSE: "the restaurant was so crowded",
          },
          topicArea: "food",
        },
        {
          en: "My boss asked why the report wasn't ready.",
          bn: "আমার বস জিজ্ঞাসা করেছেন রিপোর্ট কেন তৈরি হয়নি।",
          slotValues: {
            PERSON: "My boss",
            CLAUSE: "the report wasn't ready",
          },
          topicArea: "work",
        },
        {
          en: "She asked why I was looking so sad.",
          bn: "সে জিজ্ঞাসা করেছে আমি এত মন খারাপ কেন।",
          slotValues: {
            PERSON: "She",
            CLAUSE: "I was looking so sad",
          },
          topicArea: "relationships",
        },
        {
          en: "The customer asked why the delivery was so late.",
          bn: "ক্রেতা জিজ্ঞাসা করেছে ডেলিভারি এত দেরি কেন।",
          slotValues: {
            PERSON: "The customer",
            CLAUSE: "the delivery was so late",
          },
          topicArea: "shopping",
        },
        {
          en: "He asked why I wanted to travel alone.",
          bn: "সে জিজ্ঞাসা করেছে আমি কেন একা ভ্রমণ করতে চাই।",
          slotValues: {
            PERSON: "He",
            CLAUSE: "I wanted to travel alone",
          },
          topicArea: "travel",
        },
        {
          en: "My friend asked why I hadn't told him earlier.",
          bn: "আমার বন্ধু জিজ্ঞাসা করেছে আমি কেন তাকে আগে বলিনি।",
          slotValues: {
            PERSON: "My friend",
            CLAUSE: "I hadn't told him earlier",
          },
          topicArea: "relationships",
        },
        {
          en: "The professor asked why the students weren't paying attention.",
          bn: "প্রফেসর জিজ্ঞাসা করেছেন ছাত্ররা কেন মনোযোগ দিচ্ছে না।",
          slotValues: {
            PERSON: "The professor",
            CLAUSE: "the students weren't paying attention",
          },
          topicArea: "education",
        },
        {
          en: "She asked why the flight had been canceled.",
          bn: "সে জিজ্ঞাসা করেছে ফ্লাইট কেন বাতিল হয়েছে।",
          slotValues: {
            PERSON: "She",
            CLAUSE: "the flight had been canceled",
          },
          topicArea: "travel",
        },
        {
          en: "He asked why I was spending so much money.",
          bn: "সে জিজ্ঞাসা করেছে আমি এত টাকা খরচ করছি কেন।",
          slotValues: {
            PERSON: "He",
            CLAUSE: "I was spending so much money",
          },
          topicArea: "shopping",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "Reported 'why' questions often imply the asker wanted a reason or justification.",
      usageNote_bn:
        "পরোক্ষ 'why' প্রশ্ন প্রায়ই বোঝায় যে জিজ্ঞাসাকারী একটি কারণ বা যুক্তি চেয়েছিল।",
    },
    {
      id: "K2.5",
      formula: "[PERSON] wanted to know [CLAUSE]",
      formula_bn: "[ব্যক্তি] জানতে চেয়েছে [উপবাক্য]",
      patternName: "Reporting with 'Wanted to Know'",
      patternName_bn: "'জানতে চাওয়া' দিয়ে প্রতিবেদন",
      slots: [
        {
          name: "PERSON",
          description: "The person who wanted information",
          description_bn: "যে ব্যক্তি তথ্য জানতে চেয়েছে",
          acceptedTypes: ["person"],
          examples: ["She", "He", "Everyone", "The client"],
        },
        {
          name: "CLAUSE",
          description: "What the person wanted to know",
          description_bn: "ব্যক্তি কী জানতে চেয়েছে",
          acceptedTypes: ["clause"],
          examples: [
            "when I would arrive",
            "how much it cost",
            "if I was interested",
          ],
        },
      ],
      examples: [
        {
          en: "She wanted to know when I would arrive.",
          bn: "সে জানতে চেয়েছে আমি কখন পৌঁছাব।",
          slotValues: {
            PERSON: "She",
            CLAUSE: "when I would arrive",
          },
          topicArea: "travel",
        },
        {
          en: "He wanted to know how much it cost.",
          bn: "সে জানতে চেয়েছে এটার দাম কত।",
          slotValues: { PERSON: "He", CLAUSE: "how much it cost" },
          topicArea: "shopping",
        },
        {
          en: "Everyone wanted to know if I was okay.",
          bn: "সবাই জানতে চেয়েছে আমি ঠিক আছি কিনা।",
          slotValues: {
            PERSON: "Everyone",
            CLAUSE: "if I was okay",
          },
          topicArea: "health",
        },
        {
          en: "The client wanted to know when the project would be finished.",
          bn: "ক্লায়েন্ট জানতে চেয়েছে প্রজেক্ট কখন শেষ হবে।",
          slotValues: {
            PERSON: "The client",
            CLAUSE: "when the project would be finished",
          },
          topicArea: "work",
        },
        {
          en: "She wanted to know how I had learned English so well.",
          bn: "সে জানতে চেয়েছে আমি এত ভালো ইংরেজি কীভাবে শিখেছি।",
          slotValues: {
            PERSON: "She",
            CLAUSE: "how I had learned English so well",
          },
          topicArea: "education",
        },
        {
          en: "He wanted to know if there were any seats available.",
          bn: "সে জানতে চেয়েছে কোনো সিট খালি আছে কিনা।",
          slotValues: {
            PERSON: "He",
            CLAUSE: "if there were any seats available",
          },
          topicArea: "travel",
        },
        {
          en: "My parents wanted to know who I was going out with.",
          bn: "আমার বাবা-মা জানতে চেয়েছেন আমি কার সাথে বাইরে যাচ্ছি।",
          slotValues: {
            PERSON: "My parents",
            CLAUSE: "who I was going out with",
          },
          topicArea: "relationships",
        },
        {
          en: "The teacher wanted to know if we had any questions.",
          bn: "শিক্ষক জানতে চেয়েছেন আমাদের কোনো প্রশ্ন আছে কিনা।",
          slotValues: {
            PERSON: "The teacher",
            CLAUSE: "if we had any questions",
          },
          topicArea: "education",
        },
        {
          en: "She wanted to know what kind of food I liked.",
          bn: "সে জানতে চেয়েছে আমি কী ধরনের খাবার পছন্দ করি।",
          slotValues: {
            PERSON: "She",
            CLAUSE: "what kind of food I liked",
          },
          topicArea: "food",
        },
        {
          en: "He wanted to know how long the treatment would take.",
          bn: "সে জানতে চেয়েছে চিকিৎসায় কত সময় লাগবে।",
          slotValues: {
            PERSON: "He",
            CLAUSE: "how long the treatment would take",
          },
          topicArea: "health",
        },
        {
          en: "The manager wanted to know who was responsible.",
          bn: "ম্যানেজার জানতে চেয়েছেন দায়ী কে।",
          slotValues: {
            PERSON: "The manager",
            CLAUSE: "who was responsible",
          },
          topicArea: "work",
        },
        {
          en: "She wanted to know where I had found such a good deal.",
          bn: "সে জানতে চেয়েছে আমি এত ভালো দাম কোথায় পেলাম।",
          slotValues: {
            PERSON: "She",
            CLAUSE: "where I had found such a good deal",
          },
          topicArea: "shopping",
        },
        {
          en: "My friend wanted to know if I was coming to his wedding.",
          bn: "আমার বন্ধু জানতে চেয়েছে আমি তার বিয়েতে আসছি কিনা।",
          slotValues: {
            PERSON: "My friend",
            CLAUSE: "if I was coming to his wedding",
          },
          topicArea: "relationships",
        },
        {
          en: "He wanted to know what the homework assignment was.",
          bn: "সে জানতে চেয়েছে হোমওয়ার্কের বিষয় কী।",
          slotValues: {
            PERSON: "He",
            CLAUSE: "what the homework assignment was",
          },
          topicArea: "education",
        },
        {
          en: "The receptionist wanted to know if I had an appointment.",
          bn: "রিসেপশনিস্ট জানতে চেয়েছে আমার অ্যাপয়েন্টমেন্ট আছে কিনা।",
          slotValues: {
            PERSON: "The receptionist",
            CLAUSE: "if I had an appointment",
          },
          topicArea: "health",
        },
      ],
      formality: "polite",
      difficulty: "intermediate",
      usageNote:
        "'Wanted to know' is a softer alternative to 'asked'. It can be used with any question word or 'if/whether'.",
      usageNote_bn:
        "'Wanted to know' হলো 'asked' এর একটি নরম বিকল্প। যেকোনো প্রশ্নবাচক শব্দ বা 'if/whether' দিয়ে ব্যবহার করা যায়।",
    },
  ],
};
