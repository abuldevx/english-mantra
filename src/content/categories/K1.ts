import { PatternCategory } from "@/types/pattern";

export const categoryK1: PatternCategory = {
  id: "K1",
  slug: "reporting-statements",
  name: "Reporting Statements",
  name_bn: "বিবৃতি প্রতিবেদন",
  description:
    "Learn to report what others said using indirect speech patterns.",
  description_bn:
    "পরোক্ষ উক্তি ব্যবহার করে অন্যরা কী বলেছে তা জানাতে শিখুন।",
  icon: "🗣️",
  group: "K",
  groupName: "Reported Speech & Communication",
  groupName_bn: "পরোক্ষ উক্তি ও যোগাযোগ",
  difficulty: "intermediate",
  patterns: [
    {
      id: "K1.1",
      formula: "[PERSON] said that [CLAUSE]",
      formula_bn: "[ব্যক্তি] বলেছে যে [উপবাক্য]",
      patternName: "Basic Reported Statement",
      patternName_bn: "সাধারণ পরোক্ষ বিবৃতি",
      slots: [
        {
          name: "PERSON",
          description: "The person whose words are being reported",
          description_bn: "যে ব্যক্তির কথা জানানো হচ্ছে",
          acceptedTypes: ["person"],
          examples: ["She", "He", "My boss", "The teacher"],
        },
        {
          name: "CLAUSE",
          description: "The reported statement in past tense",
          description_bn: "অতীতকালে পরোক্ষ বিবৃতি",
          acceptedTypes: ["clause"],
          examples: ["she was tired", "he would come later", "it was raining"],
        },
      ],
      examples: [
        {
          en: "She said that she was tired.",
          bn: "সে বলেছে যে সে ক্লান্ত ছিল।",
          slotValues: { PERSON: "She", CLAUSE: "she was tired" },
          topicArea: "daily_life",
        },
        {
          en: "He said that he would come later.",
          bn: "সে বলেছে যে সে পরে আসবে।",
          slotValues: { PERSON: "He", CLAUSE: "he would come later" },
          topicArea: "daily_life",
        },
        {
          en: "My boss said that the meeting was canceled.",
          bn: "আমার বস বলেছেন যে মিটিং বাতিল হয়ে গেছে।",
          slotValues: {
            PERSON: "My boss",
            CLAUSE: "the meeting was canceled",
          },
          topicArea: "work",
        },
        {
          en: "The teacher said that the exam would be easy.",
          bn: "শিক্ষক বলেছেন যে পরীক্ষা সহজ হবে।",
          slotValues: {
            PERSON: "The teacher",
            CLAUSE: "the exam would be easy",
          },
          topicArea: "education",
        },
        {
          en: "She said that she had already eaten.",
          bn: "সে বলেছে যে সে আগেই খেয়ে ফেলেছে।",
          slotValues: { PERSON: "She", CLAUSE: "she had already eaten" },
          topicArea: "food",
        },
        {
          en: "He said that he didn't feel well.",
          bn: "সে বলেছে যে তার শরীর ভালো লাগছে না।",
          slotValues: { PERSON: "He", CLAUSE: "he didn't feel well" },
          topicArea: "health",
        },
        {
          en: "My friend said that he was moving to Dhaka.",
          bn: "আমার বন্ধু বলেছে যে সে ঢাকায় চলে যাচ্ছে।",
          slotValues: {
            PERSON: "My friend",
            CLAUSE: "he was moving to Dhaka",
          },
          topicArea: "relationships",
        },
        {
          en: "The doctor said that I needed more rest.",
          bn: "ডাক্তার বলেছেন যে আমার আরও বিশ্রাম দরকার।",
          slotValues: {
            PERSON: "The doctor",
            CLAUSE: "I needed more rest",
          },
          topicArea: "health",
        },
        {
          en: "She said that she couldn't come to the party.",
          bn: "সে বলেছে যে সে পার্টিতে আসতে পারবে না।",
          slotValues: {
            PERSON: "She",
            CLAUSE: "she couldn't come to the party",
          },
          topicArea: "relationships",
        },
        {
          en: "My mother said that dinner was ready.",
          bn: "আমার মা বলেছেন যে রাতের খাবার তৈরি।",
          slotValues: { PERSON: "My mother", CLAUSE: "dinner was ready" },
          topicArea: "food",
        },
        {
          en: "The manager said that he was impressed with my work.",
          bn: "ম্যানেজার বলেছেন যে তিনি আমার কাজে মুগ্ধ।",
          slotValues: {
            PERSON: "The manager",
            CLAUSE: "he was impressed with my work",
          },
          topicArea: "work",
        },
        {
          en: "He said that the train had already left.",
          bn: "সে বলেছে যে ট্রেন আগেই ছেড়ে দিয়েছে।",
          slotValues: {
            PERSON: "He",
            CLAUSE: "the train had already left",
          },
          topicArea: "travel",
        },
        {
          en: "She said that she was planning a trip.",
          bn: "সে বলেছে যে সে একটা ভ্রমণের পরিকল্পনা করছে।",
          slotValues: { PERSON: "She", CLAUSE: "she was planning a trip" },
          topicArea: "travel",
        },
        {
          en: "The shopkeeper said that the price had gone up.",
          bn: "দোকানদার বলেছেন যে দাম বেড়ে গেছে।",
          slotValues: {
            PERSON: "The shopkeeper",
            CLAUSE: "the price had gone up",
          },
          topicArea: "shopping",
        },
        {
          en: "My colleague said that he was quitting his job.",
          bn: "আমার সহকর্মী বলেছে যে সে চাকরি ছেড়ে দিচ্ছে।",
          slotValues: {
            PERSON: "My colleague",
            CLAUSE: "he was quitting his job",
          },
          topicArea: "work",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "The most common way to report what someone said. The tense usually shifts back (present becomes past).",
      usageNote_bn:
        "কেউ কী বলেছে তা জানানোর সবচেয়ে সাধারণ উপায়। কাল সাধারণত পিছিয়ে যায় (বর্তমান অতীত হয়)।",
    },
    {
      id: "K1.2",
      formula: "[PERSON] told me that [CLAUSE]",
      formula_bn: "[ব্যক্তি] আমাকে বলেছে যে [উপবাক্য]",
      patternName: "Reported Statement with Listener",
      patternName_bn: "শ্রোতাসহ পরোক্ষ বিবৃতি",
      slots: [
        {
          name: "PERSON",
          description: "The person whose words are being reported",
          description_bn: "যে ব্যক্তির কথা জানানো হচ্ছে",
          acceptedTypes: ["person"],
          examples: ["She", "He", "My father", "The boss"],
        },
        {
          name: "CLAUSE",
          description: "The reported statement",
          description_bn: "পরোক্ষ বিবৃতি",
          acceptedTypes: ["clause"],
          examples: [
            "I should study harder",
            "the project was due Friday",
            "he was proud of me",
          ],
        },
      ],
      examples: [
        {
          en: "She told me that she was leaving early.",
          bn: "সে আমাকে বলেছে যে সে তাড়াতাড়ি চলে যাচ্ছে।",
          slotValues: { PERSON: "She", CLAUSE: "she was leaving early" },
          topicArea: "daily_life",
        },
        {
          en: "He told me that I should study harder.",
          bn: "সে আমাকে বলেছে যে আমার আরও পড়াশোনা করা উচিত।",
          slotValues: { PERSON: "He", CLAUSE: "I should study harder" },
          topicArea: "education",
        },
        {
          en: "My father told me that he was proud of me.",
          bn: "আমার বাবা আমাকে বলেছেন যে তিনি আমাকে নিয়ে গর্বিত।",
          slotValues: {
            PERSON: "My father",
            CLAUSE: "he was proud of me",
          },
          topicArea: "relationships",
        },
        {
          en: "The boss told me that the project was due Friday.",
          bn: "বস আমাকে বলেছেন যে প্রজেক্ট শুক্রবারের মধ্যে শেষ করতে হবে।",
          slotValues: {
            PERSON: "The boss",
            CLAUSE: "the project was due Friday",
          },
          topicArea: "work",
        },
        {
          en: "She told me that she had found a new apartment.",
          bn: "সে আমাকে বলেছে যে সে নতুন একটা অ্যাপার্টমেন্ট পেয়েছে।",
          slotValues: {
            PERSON: "She",
            CLAUSE: "she had found a new apartment",
          },
          topicArea: "daily_life",
        },
        {
          en: "My neighbor told me that there was a power cut.",
          bn: "আমার প্রতিবেশী আমাকে বলেছে যে বিদ্যুৎ চলে গেছে।",
          slotValues: {
            PERSON: "My neighbor",
            CLAUSE: "there was a power cut",
          },
          topicArea: "daily_life",
        },
        {
          en: "The receptionist told me that the doctor was busy.",
          bn: "রিসেপশনিস্ট আমাকে বলেছে যে ডাক্তার ব্যস্ত আছেন।",
          slotValues: {
            PERSON: "The receptionist",
            CLAUSE: "the doctor was busy",
          },
          topicArea: "health",
        },
        {
          en: "He told me that he couldn't make it to dinner.",
          bn: "সে আমাকে বলেছে যে সে রাতের খাবারে আসতে পারবে না।",
          slotValues: {
            PERSON: "He",
            CLAUSE: "he couldn't make it to dinner",
          },
          topicArea: "food",
        },
        {
          en: "My sister told me that she was getting married.",
          bn: "আমার বোন আমাকে বলেছে যে সে বিয়ে করছে।",
          slotValues: {
            PERSON: "My sister",
            CLAUSE: "she was getting married",
          },
          topicArea: "relationships",
        },
        {
          en: "The travel agent told me that the flight was delayed.",
          bn: "ট্রাভেল এজেন্ট আমাকে বলেছে যে ফ্লাইট দেরি হচ্ছে।",
          slotValues: {
            PERSON: "The travel agent",
            CLAUSE: "the flight was delayed",
          },
          topicArea: "travel",
        },
        {
          en: "She told me that she needed some time alone.",
          bn: "সে আমাকে বলেছে যে তার একটু একা থাকা দরকার।",
          slotValues: {
            PERSON: "She",
            CLAUSE: "she needed some time alone",
          },
          topicArea: "relationships",
        },
        {
          en: "My teacher told me that my essay was excellent.",
          bn: "আমার শিক্ষক আমাকে বলেছেন যে আমার রচনা চমৎকার হয়েছে।",
          slotValues: {
            PERSON: "My teacher",
            CLAUSE: "my essay was excellent",
          },
          topicArea: "education",
        },
        {
          en: "He told me that the store was closing soon.",
          bn: "সে আমাকে বলেছে যে দোকান শীঘ্রই বন্ধ হয়ে যাবে।",
          slotValues: {
            PERSON: "He",
            CLAUSE: "the store was closing soon",
          },
          topicArea: "shopping",
        },
        {
          en: "The coach told me that I had great potential.",
          bn: "কোচ আমাকে বলেছেন যে আমার অনেক সম্ভাবনা আছে।",
          slotValues: {
            PERSON: "The coach",
            CLAUSE: "I had great potential",
          },
          topicArea: "health",
        },
        {
          en: "My wife told me that she wanted to visit her parents.",
          bn: "আমার স্ত্রী আমাকে বলেছে যে সে তার বাবা-মায়ের কাছে যেতে চায়।",
          slotValues: {
            PERSON: "My wife",
            CLAUSE: "she wanted to visit her parents",
          },
          topicArea: "relationships",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "'Told' always requires an object (told me/him/her). Never say 'told that' without a person.",
      usageNote_bn:
        "'Told' এর পরে সবসময় একটি ব্যক্তি লাগে (told me/him/her)। ব্যক্তি ছাড়া কখনো 'told that' বলবেন না।",
    },
    {
      id: "K1.3",
      formula: "[PERSON] mentioned that [CLAUSE]",
      formula_bn: "[ব্যক্তি] উল্লেখ করেছে যে [উপবাক্য]",
      patternName: "Casual Report with 'Mentioned'",
      patternName_bn: "'উল্লেখ করা' দিয়ে অনানুষ্ঠানিক প্রতিবেদন",
      slots: [
        {
          name: "PERSON",
          description: "The person who mentioned something",
          description_bn: "যে ব্যক্তি কিছু উল্লেখ করেছে",
          acceptedTypes: ["person"],
          examples: ["She", "He", "My colleague", "Someone"],
        },
        {
          name: "CLAUSE",
          description: "What was mentioned casually",
          description_bn: "যা অনানুষ্ঠানিকভাবে উল্লেখ করা হয়েছে",
          acceptedTypes: ["clause"],
          examples: [
            "there was a sale going on",
            "he might be late",
            "the restaurant was good",
          ],
        },
      ],
      examples: [
        {
          en: "She mentioned that there was a sale at the mall.",
          bn: "সে উল্লেখ করেছে যে মলে সেল চলছে।",
          slotValues: {
            PERSON: "She",
            CLAUSE: "there was a sale at the mall",
          },
          topicArea: "shopping",
        },
        {
          en: "He mentioned that he might be late.",
          bn: "সে উল্লেখ করেছে যে তার দেরি হতে পারে।",
          slotValues: { PERSON: "He", CLAUSE: "he might be late" },
          topicArea: "daily_life",
        },
        {
          en: "My colleague mentioned that the deadline had changed.",
          bn: "আমার সহকর্মী উল্লেখ করেছে যে ডেডলাইন পরিবর্তন হয়ে গেছে।",
          slotValues: {
            PERSON: "My colleague",
            CLAUSE: "the deadline had changed",
          },
          topicArea: "work",
        },
        {
          en: "Someone mentioned that the restaurant was really good.",
          bn: "কেউ উল্লেখ করেছে যে রেস্তোরাঁটা সত্যিই ভালো।",
          slotValues: {
            PERSON: "Someone",
            CLAUSE: "the restaurant was really good",
          },
          topicArea: "food",
        },
        {
          en: "She mentioned that she had been to Paris.",
          bn: "সে উল্লেখ করেছে যে সে প্যারিসে গিয়েছিল।",
          slotValues: {
            PERSON: "She",
            CLAUSE: "she had been to Paris",
          },
          topicArea: "travel",
        },
        {
          en: "My friend mentioned that he was looking for a new job.",
          bn: "আমার বন্ধু উল্লেখ করেছে যে সে নতুন চাকরি খুঁজছে।",
          slotValues: {
            PERSON: "My friend",
            CLAUSE: "he was looking for a new job",
          },
          topicArea: "work",
        },
        {
          en: "He mentioned that the weather would be bad this weekend.",
          bn: "সে উল্লেখ করেছে যে এই সপ্তাহান্তে আবহাওয়া খারাপ থাকবে।",
          slotValues: {
            PERSON: "He",
            CLAUSE: "the weather would be bad this weekend",
          },
          topicArea: "daily_life",
        },
        {
          en: "The professor mentioned that there would be a quiz.",
          bn: "প্রফেসর উল্লেখ করেছেন যে একটা কুইজ হবে।",
          slotValues: {
            PERSON: "The professor",
            CLAUSE: "there would be a quiz",
          },
          topicArea: "education",
        },
        {
          en: "She mentioned that her brother was visiting.",
          bn: "সে উল্লেখ করেছে যে তার ভাই বেড়াতে আসছে।",
          slotValues: {
            PERSON: "She",
            CLAUSE: "her brother was visiting",
          },
          topicArea: "relationships",
        },
        {
          en: "He mentioned that the gym had new equipment.",
          bn: "সে উল্লেখ করেছে যে জিমে নতুন যন্ত্রপাতি এসেছে।",
          slotValues: {
            PERSON: "He",
            CLAUSE: "the gym had new equipment",
          },
          topicArea: "health",
        },
        {
          en: "My aunt mentioned that she was feeling better.",
          bn: "আমার খালা উল্লেখ করেছেন যে তিনি এখন ভালো বোধ করছেন।",
          slotValues: {
            PERSON: "My aunt",
            CLAUSE: "she was feeling better",
          },
          topicArea: "health",
        },
        {
          en: "The waiter mentioned that the special was fish curry.",
          bn: "ওয়েটার উল্লেখ করেছে যে আজকের বিশেষ পদ মাছের তরকারি।",
          slotValues: {
            PERSON: "The waiter",
            CLAUSE: "the special was fish curry",
          },
          topicArea: "food",
        },
        {
          en: "She mentioned that she had just graduated.",
          bn: "সে উল্লেখ করেছে যে সে সদ্য গ্র্যাজুয়েশন শেষ করেছে।",
          slotValues: {
            PERSON: "She",
            CLAUSE: "she had just graduated",
          },
          topicArea: "education",
        },
        {
          en: "He mentioned that the hotel had a great view.",
          bn: "সে উল্লেখ করেছে যে হোটেল থেকে দারুণ দৃশ্য দেখা যায়।",
          slotValues: {
            PERSON: "He",
            CLAUSE: "the hotel had a great view",
          },
          topicArea: "travel",
        },
        {
          en: "My neighbor mentioned that she was selling her car.",
          bn: "আমার প্রতিবেশী উল্লেখ করেছে যে সে তার গাড়ি বিক্রি করছে।",
          slotValues: {
            PERSON: "My neighbor",
            CLAUSE: "she was selling her car",
          },
          topicArea: "shopping",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "'Mentioned' implies something was said casually or in passing, not as a main point.",
      usageNote_bn:
        "'Mentioned' বোঝায় যে কিছু অনানুষ্ঠানিকভাবে বা পার্শ্বকথায় বলা হয়েছে, প্রধান বিষয় হিসেবে নয়।",
    },
    {
      id: "K1.4",
      formula: "[PERSON] explained that [CLAUSE]",
      formula_bn: "[ব্যক্তি] ব্যাখ্যা করেছে যে [উপবাক্য]",
      patternName: "Reporting an Explanation",
      patternName_bn: "ব্যাখ্যা প্রতিবেদন",
      slots: [
        {
          name: "PERSON",
          description: "The person who gave the explanation",
          description_bn: "যে ব্যক্তি ব্যাখ্যা দিয়েছে",
          acceptedTypes: ["person"],
          examples: ["The teacher", "He", "She", "The guide"],
        },
        {
          name: "CLAUSE",
          description: "The explanation that was given",
          description_bn: "যে ব্যাখ্যা দেওয়া হয়েছে",
          acceptedTypes: ["clause"],
          examples: [
            "the process was simple",
            "we needed to restart",
            "it took time to heal",
          ],
        },
      ],
      examples: [
        {
          en: "The teacher explained that the process was simple.",
          bn: "শিক্ষক ব্যাখ্যা করেছেন যে প্রক্রিয়াটি সহজ।",
          slotValues: {
            PERSON: "The teacher",
            CLAUSE: "the process was simple",
          },
          topicArea: "education",
        },
        {
          en: "He explained that he had been stuck in traffic.",
          bn: "সে ব্যাখ্যা করেছে যে সে ট্র্যাফিকে আটকে গিয়েছিল।",
          slotValues: {
            PERSON: "He",
            CLAUSE: "he had been stuck in traffic",
          },
          topicArea: "travel",
        },
        {
          en: "She explained that the delay was unavoidable.",
          bn: "সে ব্যাখ্যা করেছে যে বিলম্ব এড়ানো সম্ভব ছিল না।",
          slotValues: {
            PERSON: "She",
            CLAUSE: "the delay was unavoidable",
          },
          topicArea: "work",
        },
        {
          en: "The doctor explained that the surgery was routine.",
          bn: "ডাক্তার ব্যাখ্যা করেছেন যে অস্ত্রোপচারটি রুটিন মাফিক।",
          slotValues: {
            PERSON: "The doctor",
            CLAUSE: "the surgery was routine",
          },
          topicArea: "health",
        },
        {
          en: "The guide explained that the temple was very old.",
          bn: "গাইড ব্যাখ্যা করেছেন যে মন্দিরটি অনেক পুরনো।",
          slotValues: {
            PERSON: "The guide",
            CLAUSE: "the temple was very old",
          },
          topicArea: "travel",
        },
        {
          en: "My manager explained that the budget had been cut.",
          bn: "আমার ম্যানেজার ব্যাখ্যা করেছেন যে বাজেট কমানো হয়েছে।",
          slotValues: {
            PERSON: "My manager",
            CLAUSE: "the budget had been cut",
          },
          topicArea: "work",
        },
        {
          en: "She explained that she couldn't attend because she was sick.",
          bn: "সে ব্যাখ্যা করেছে যে অসুস্থ থাকায় সে উপস্থিত হতে পারেনি।",
          slotValues: {
            PERSON: "She",
            CLAUSE: "she couldn't attend because she was sick",
          },
          topicArea: "health",
        },
        {
          en: "The chef explained that the dish needed fresh ingredients.",
          bn: "শেফ ব্যাখ্যা করেছেন যে পদটিতে তাজা উপকরণ দরকার।",
          slotValues: {
            PERSON: "The chef",
            CLAUSE: "the dish needed fresh ingredients",
          },
          topicArea: "food",
        },
        {
          en: "He explained that the system was being updated.",
          bn: "সে ব্যাখ্যা করেছে যে সিস্টেম আপডেট করা হচ্ছে।",
          slotValues: {
            PERSON: "He",
            CLAUSE: "the system was being updated",
          },
          topicArea: "work",
        },
        {
          en: "The instructor explained that safety came first.",
          bn: "প্রশিক্ষক ব্যাখ্যা করেছেন যে নিরাপত্তা সবার আগে।",
          slotValues: {
            PERSON: "The instructor",
            CLAUSE: "safety came first",
          },
          topicArea: "education",
        },
        {
          en: "She explained that the refund would take a few days.",
          bn: "সে ব্যাখ্যা করেছে যে রিফান্ড পেতে কয়েকদিন লাগবে।",
          slotValues: {
            PERSON: "She",
            CLAUSE: "the refund would take a few days",
          },
          topicArea: "shopping",
        },
        {
          en: "The pharmacist explained that the medicine should be taken after meals.",
          bn: "ফার্মাসিস্ট ব্যাখ্যা করেছেন যে ওষুধটি খাবার পরে খেতে হবে।",
          slotValues: {
            PERSON: "The pharmacist",
            CLAUSE: "the medicine should be taken after meals",
          },
          topicArea: "health",
        },
        {
          en: "He explained that the road was closed for repairs.",
          bn: "সে ব্যাখ্যা করেছে যে মেরামতের জন্য রাস্তা বন্ধ ছিল।",
          slotValues: {
            PERSON: "He",
            CLAUSE: "the road was closed for repairs",
          },
          topicArea: "travel",
        },
        {
          en: "My professor explained that the theory had many applications.",
          bn: "আমার প্রফেসর ব্যাখ্যা করেছেন যে তত্ত্বটির অনেক প্রয়োগ আছে।",
          slotValues: {
            PERSON: "My professor",
            CLAUSE: "the theory had many applications",
          },
          topicArea: "education",
        },
        {
          en: "She explained that the event had been postponed.",
          bn: "সে ব্যাখ্যা করেছে যে অনুষ্ঠানটি স্থগিত করা হয়েছে।",
          slotValues: {
            PERSON: "She",
            CLAUSE: "the event had been postponed",
          },
          topicArea: "daily_life",
        },
      ],
      formality: "polite",
      difficulty: "intermediate",
      usageNote:
        "'Explained' implies the speaker gave reasons or details, not just a simple statement.",
      usageNote_bn:
        "'Explained' বোঝায় যে বক্তা কারণ বা বিস্তারিত দিয়েছে, শুধু একটি সাধারণ বক্তব্য নয়।",
    },
    {
      id: "K1.5",
      formula: "[PERSON] claimed that [CLAUSE]",
      formula_bn: "[ব্যক্তি] দাবি করেছে যে [উপবাক্য]",
      patternName: "Reporting a Claim",
      patternName_bn: "দাবি প্রতিবেদন",
      slots: [
        {
          name: "PERSON",
          description: "The person who made the claim",
          description_bn: "যে ব্যক্তি দাবি করেছে",
          acceptedTypes: ["person"],
          examples: ["He", "She", "The company", "The politician"],
        },
        {
          name: "CLAUSE",
          description: "The claim that was made",
          description_bn: "যে দাবি করা হয়েছে",
          acceptedTypes: ["clause"],
          examples: [
            "he was innocent",
            "the product was safe",
            "it was the best deal",
          ],
        },
      ],
      examples: [
        {
          en: "He claimed that he was innocent.",
          bn: "সে দাবি করেছে যে সে নির্দোষ।",
          slotValues: { PERSON: "He", CLAUSE: "he was innocent" },
          topicArea: "daily_life",
        },
        {
          en: "The company claimed that the product was completely safe.",
          bn: "কোম্পানি দাবি করেছে যে পণ্যটি সম্পূর্ণ নিরাপদ।",
          slotValues: {
            PERSON: "The company",
            CLAUSE: "the product was completely safe",
          },
          topicArea: "shopping",
        },
        {
          en: "She claimed that she had never been there before.",
          bn: "সে দাবি করেছে যে সে আগে কখনো সেখানে যায়নি।",
          slotValues: {
            PERSON: "She",
            CLAUSE: "she had never been there before",
          },
          topicArea: "travel",
        },
        {
          en: "He claimed that he had finished all the work.",
          bn: "সে দাবি করেছে যে সে সব কাজ শেষ করে ফেলেছে।",
          slotValues: {
            PERSON: "He",
            CLAUSE: "he had finished all the work",
          },
          topicArea: "work",
        },
        {
          en: "The seller claimed that the phone was brand new.",
          bn: "বিক্রেতা দাবি করেছে যে ফোনটি একদম নতুন।",
          slotValues: {
            PERSON: "The seller",
            CLAUSE: "the phone was brand new",
          },
          topicArea: "shopping",
        },
        {
          en: "She claimed that the food had made her sick.",
          bn: "সে দাবি করেছে যে খাবার থেকে তার অসুস্থ হয়েছে।",
          slotValues: {
            PERSON: "She",
            CLAUSE: "the food had made her sick",
          },
          topicArea: "food",
        },
        {
          en: "He claimed that he could speak five languages.",
          bn: "সে দাবি করেছে যে সে পাঁচটি ভাষায় কথা বলতে পারে।",
          slotValues: {
            PERSON: "He",
            CLAUSE: "he could speak five languages",
          },
          topicArea: "education",
        },
        {
          en: "The student claimed that the exam was unfair.",
          bn: "ছাত্রটি দাবি করেছে যে পরীক্ষা অন্যায্য ছিল।",
          slotValues: {
            PERSON: "The student",
            CLAUSE: "the exam was unfair",
          },
          topicArea: "education",
        },
        {
          en: "She claimed that she had seen a ghost.",
          bn: "সে দাবি করেছে যে সে ভূত দেখেছে।",
          slotValues: {
            PERSON: "She",
            CLAUSE: "she had seen a ghost",
          },
          topicArea: "daily_life",
        },
        {
          en: "The driver claimed that it wasn't his fault.",
          bn: "ড্রাইভার দাবি করেছে যে এটা তার দোষ ছিল না।",
          slotValues: {
            PERSON: "The driver",
            CLAUSE: "it wasn't his fault",
          },
          topicArea: "travel",
        },
        {
          en: "He claimed that the medicine had no side effects.",
          bn: "সে দাবি করেছে যে ওষুধটির কোনো পার্শ্বপ্রতিক্রিয়া নেই।",
          slotValues: {
            PERSON: "He",
            CLAUSE: "the medicine had no side effects",
          },
          topicArea: "health",
        },
        {
          en: "The advertisement claimed that it was the best deal ever.",
          bn: "বিজ্ঞাপনে দাবি করা হয়েছে যে এটি এখন পর্যন্ত সেরা অফার।",
          slotValues: {
            PERSON: "The advertisement",
            CLAUSE: "it was the best deal ever",
          },
          topicArea: "shopping",
        },
        {
          en: "She claimed that she had won the competition.",
          bn: "সে দাবি করেছে যে সে প্রতিযোগিতায় জিতেছে।",
          slotValues: {
            PERSON: "She",
            CLAUSE: "she had won the competition",
          },
          topicArea: "daily_life",
        },
        {
          en: "He claimed that the hotel had lost his booking.",
          bn: "সে দাবি করেছে যে হোটেল তার বুকিং হারিয়ে ফেলেছে।",
          slotValues: {
            PERSON: "He",
            CLAUSE: "the hotel had lost his booking",
          },
          topicArea: "travel",
        },
        {
          en: "The patient claimed that the treatment wasn't working.",
          bn: "রোগী দাবি করেছে যে চিকিৎসায় কাজ হচ্ছে না।",
          slotValues: {
            PERSON: "The patient",
            CLAUSE: "the treatment wasn't working",
          },
          topicArea: "health",
        },
      ],
      formality: "polite",
      difficulty: "intermediate",
      usageNote:
        "'Claimed' suggests you might doubt what was said, or that it hasn't been proven true.",
      usageNote_bn:
        "'Claimed' বোঝায় যে আপনি হয়তো বলা কথায় সন্দেহ করছেন, অথবা এটি সত্য প্রমাণিত হয়নি।",
    },
  ],
};
