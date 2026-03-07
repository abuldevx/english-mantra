import { PatternCategory } from "@/types/pattern";

export const categoryA9: PatternCategory = {
  id: "A9",
  slug: "expressing-regret",
  name: "Expressing Regret",
  name_bn: "আফসোস প্রকাশ করা",
  description:
    "Learn how to express regret about past actions or missed opportunities.",
  description_bn:
    "অতীতের কাজ বা হারানো সুযোগ নিয়ে আফসোস প্রকাশ করতে শিখুন।",
  icon: "😔",
  group: "A",
  groupName: "Wanting, Needing & Preferences",
  groupName_bn: "চাওয়া, প্রয়োজন এবং পছন্দ",
  difficulty: "intermediate",
  prerequisites: ["A1", "A8"],
  patterns: [
    {
      id: "A9.1",
      formula: "I wish I had [PAST PARTICIPLE]",
      formula_bn: "যদি আমি [অতীত কৃদন্ত] করতাম",
      patternName: "Regretting the Past",
      patternName_bn: "অতীত নিয়ে আফসোস",
      slots: [
        {
          name: "PAST PARTICIPLE",
          description:
            "A past participle phrase describing what you wish had happened",
          description_bn:
            "একটি অতীত কৃদন্ত পদবন্ধ যা আপনি ঘটলে ভালো হতো বলে মনে করেন",
          acceptedTypes: ["past_participle"],
          examples: ["studied harder", "saved more money", "listened to you"],
        },
      ],
      examples: [
        {
          en: "I wish I had studied harder.",
          bn: "যদি আমি আরও কঠোর পড়াশোনা করতাম!",
          slotValues: { "PAST PARTICIPLE": "studied harder" },
          topicArea: "education",
        },
        {
          en: "I wish I had saved more money.",
          bn: "যদি আমি আরও বেশি টাকা জমাতাম!",
          slotValues: { "PAST PARTICIPLE": "saved more money" },
          topicArea: "shopping",
        },
        {
          en: "I wish I had listened to you.",
          bn: "যদি আমি তোমার কথা শুনতাম!",
          slotValues: { "PAST PARTICIPLE": "listened to you" },
          topicArea: "relationships",
        },
        {
          en: "I wish I had taken that job offer.",
          bn: "যদি আমি সেই চাকরির প্রস্তাব গ্রহণ করতাম!",
          slotValues: { "PAST PARTICIPLE": "taken that job offer" },
          topicArea: "work",
        },
        {
          en: "I wish I had traveled more when I was young.",
          bn: "যদি আমি তরুণ বয়সে আরও বেশি ভ্রমণ করতাম!",
          slotValues: { "PAST PARTICIPLE": "traveled more when I was young" },
          topicArea: "travel",
        },
        {
          en: "I wish I had eaten before the meeting.",
          bn: "যদি আমি মিটিংয়ের আগে খেয়ে নিতাম!",
          slotValues: { "PAST PARTICIPLE": "eaten before the meeting" },
          topicArea: "food",
        },
        {
          en: "I wish I had gone to the doctor sooner.",
          bn: "যদি আমি আরও আগে ডাক্তারের কাছে যেতাম!",
          slotValues: { "PAST PARTICIPLE": "gone to the doctor sooner" },
          topicArea: "health",
        },
        {
          en: "I wish I had kept in touch with my old friends.",
          bn: "যদি আমি আমার পুরনো বন্ধুদের সাথে যোগাযোগ রাখতাম!",
          slotValues: {
            "PAST PARTICIPLE": "kept in touch with my old friends",
          },
          topicArea: "relationships",
        },
        {
          en: "I wish I had brought an umbrella.",
          bn: "যদি আমি ছাতা আনতাম!",
          slotValues: { "PAST PARTICIPLE": "brought an umbrella" },
          topicArea: "daily_life",
        },
        {
          en: "I wish I had learned to cook earlier.",
          bn: "যদি আমি আগেই রান্না শিখতাম!",
          slotValues: { "PAST PARTICIPLE": "learned to cook earlier" },
          topicArea: "food",
        },
        {
          en: "I wish I had been more careful with my health.",
          bn: "যদি আমি আমার স্বাস্থ্যের ব্যাপারে আরও সতর্ক থাকতাম!",
          slotValues: {
            "PAST PARTICIPLE": "been more careful with my health",
          },
          topicArea: "health",
        },
        {
          en: "I wish I had booked the tickets earlier.",
          bn: "যদি আমি আগেই টিকিট বুক করতাম!",
          slotValues: { "PAST PARTICIPLE": "booked the tickets earlier" },
          topicArea: "travel",
        },
        {
          en: "I wish I had applied for the scholarship.",
          bn: "যদি আমি বৃত্তির জন্য আবেদন করতাম!",
          slotValues: { "PAST PARTICIPLE": "applied for the scholarship" },
          topicArea: "education",
        },
        {
          en: "I wish I had asked for a raise sooner.",
          bn: "যদি আমি আগেই বেতন বৃদ্ধি চাইতাম!",
          slotValues: { "PAST PARTICIPLE": "asked for a raise sooner" },
          topicArea: "work",
        },
        {
          en: "I wish I had bought that when it was on sale.",
          bn: "যদি আমি সেটা সেলে থাকতে কিনতাম!",
          slotValues: {
            "PAST PARTICIPLE": "bought that when it was on sale",
          },
          topicArea: "shopping",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "'I wish I had...' (past perfect) expresses regret about something that did NOT happen in the past.",
      usageNote_bn:
        "'I wish I had...' (অতীত পূর্ণ কাল) অতীতে যা ঘটেনি তার আফসোস প্রকাশ করে।",
      combinableWith: ["A9.4"],
      banglaStructureMap:
        "যদি আমি (If + Subject) + [PAST PARTICIPLE] (Past participle phrase) + করতাম (Past verb)",
    },
    {
      id: "A9.2",
      formula: "If only I had [PAST PARTICIPLE]",
      formula_bn: "যদি আমি শুধু [অতীত কৃদন্ত] করতাম",
      patternName: "Emphatic Past Regret",
      patternName_bn: "জোরালো অতীত আফসোস",
      slots: [
        {
          name: "PAST PARTICIPLE",
          description:
            "A past participle phrase describing the action you regret not having done",
          description_bn:
            "একটি অতীত কৃদন্ত পদবন্ধ যা না করায় আপনি আফসোস করছেন",
          acceptedTypes: ["past_participle"],
          examples: ["known earlier", "been more careful", "told the truth"],
        },
      ],
      examples: [
        {
          en: "If only I had known earlier.",
          bn: "যদি আমি শুধু আগে জানতাম!",
          slotValues: { "PAST PARTICIPLE": "known earlier" },
          topicArea: "daily_life",
        },
        {
          en: "If only I had been more careful.",
          bn: "যদি আমি শুধু আরও সতর্ক থাকতাম!",
          slotValues: { "PAST PARTICIPLE": "been more careful" },
          topicArea: "health",
        },
        {
          en: "If only I had told the truth.",
          bn: "যদি আমি শুধু সত্যি কথা বলতাম!",
          slotValues: { "PAST PARTICIPLE": "told the truth" },
          topicArea: "relationships",
        },
        {
          en: "If only I had prepared for the interview.",
          bn: "যদি আমি শুধু ইন্টারভিউয়ের জন্য প্রস্তুতি নিতাম!",
          slotValues: { "PAST PARTICIPLE": "prepared for the interview" },
          topicArea: "work",
        },
        {
          en: "If only I had paid attention in class.",
          bn: "যদি আমি শুধু ক্লাসে মনোযোগ দিতাম!",
          slotValues: { "PAST PARTICIPLE": "paid attention in class" },
          topicArea: "education",
        },
        {
          en: "If only I had tried the local food.",
          bn: "যদি আমি শুধু স্থানীয় খাবার খেয়ে দেখতাম!",
          slotValues: { "PAST PARTICIPLE": "tried the local food" },
          topicArea: "food",
        },
        {
          en: "If only I had planned the trip better.",
          bn: "যদি আমি শুধু ভ্রমণের আরও ভালো পরিকল্পনা করতাম!",
          slotValues: { "PAST PARTICIPLE": "planned the trip better" },
          topicArea: "travel",
        },
        {
          en: "If only I had checked the price before buying.",
          bn: "যদি আমি শুধু কেনার আগে দাম দেখে নিতাম!",
          slotValues: {
            "PAST PARTICIPLE": "checked the price before buying",
          },
          topicArea: "shopping",
        },
        {
          en: "If only I had started exercising years ago.",
          bn: "যদি আমি শুধু কয়েক বছর আগে ব্যায়াম শুরু করতাম!",
          slotValues: { "PAST PARTICIPLE": "started exercising years ago" },
          topicArea: "health",
        },
        {
          en: "If only I had spoken up when I had the chance.",
          bn: "যদি আমি শুধু সুযোগ থাকতে মুখ খুলতাম!",
          slotValues: {
            "PAST PARTICIPLE": "spoken up when I had the chance",
          },
          topicArea: "work",
        },
        {
          en: "If only I had apologized sooner.",
          bn: "যদি আমি শুধু আগে ক্ষমা চাইতাম!",
          slotValues: { "PAST PARTICIPLE": "apologized sooner" },
          topicArea: "relationships",
        },
        {
          en: "If only I had chosen a different subject.",
          bn: "যদি আমি শুধু অন্য একটা বিষয় বেছে নিতাম!",
          slotValues: { "PAST PARTICIPLE": "chosen a different subject" },
          topicArea: "education",
        },
        {
          en: "If only I had brought more snacks.",
          bn: "যদি আমি শুধু আরও স্ন্যাকস আনতাম!",
          slotValues: { "PAST PARTICIPLE": "brought more snacks" },
          topicArea: "food",
        },
        {
          en: "If only I had reserved a seat in advance.",
          bn: "যদি আমি শুধু আগে থেকে সিট রিজার্ভ করতাম!",
          slotValues: { "PAST PARTICIPLE": "reserved a seat in advance" },
          topicArea: "travel",
        },
        {
          en: "If only I had read the reviews first.",
          bn: "যদি আমি শুধু আগে রিভিউ পড়ে নিতাম!",
          slotValues: { "PAST PARTICIPLE": "read the reviews first" },
          topicArea: "shopping",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "'If only I had...' is a more emotional and emphatic version of 'I wish I had...'. It conveys deeper regret.",
      usageNote_bn:
        "'If only I had...' হলো 'I wish I had...'-এর আরও আবেগপূর্ণ ও জোরালো রূপ। এটি গভীরতর আফসোস প্রকাশ করে।",
      combinableWith: ["A9.1"],
      banglaStructureMap:
        "যদি আমি শুধু (If only + Subject) + [PAST PARTICIPLE] (Past participle phrase) + করতাম (Past verb)",
    },
    {
      id: "A9.3",
      formula: "I regret [DOING]",
      formula_bn: "আমি [করায়] আফসোস করি",
      patternName: "Stating Regret",
      patternName_bn: "আফসোস জানানো",
      slots: [
        {
          name: "DOING",
          description:
            "A gerund (-ing form) phrase describing the action you regret",
          description_bn:
            "একটি জেরান্ড (-ing রূপ) পদবন্ধ যা আপনি যে কাজটি নিয়ে আফসোস করছেন তা বর্ণনা করে",
          acceptedTypes: ["gerund"],
          examples: [
            "not studying abroad",
            "saying those words",
            "leaving that job",
          ],
        },
      ],
      examples: [
        {
          en: "I regret not studying abroad.",
          bn: "আমি বিদেশে পড়াশোনা না করায় আফসোস করি।",
          slotValues: { DOING: "not studying abroad" },
          topicArea: "education",
        },
        {
          en: "I regret saying those words.",
          bn: "আমি সেই কথাগুলো বলায় আফসোস করি।",
          slotValues: { DOING: "saying those words" },
          topicArea: "relationships",
        },
        {
          en: "I regret leaving that job.",
          bn: "আমি সেই চাকরি ছাড়ায় আফসোস করি।",
          slotValues: { DOING: "leaving that job" },
          topicArea: "work",
        },
        {
          en: "I regret not eating breakfast this morning.",
          bn: "আমি আজ সকালে নাশতা না খাওয়ায় আফসোস করি।",
          slotValues: { DOING: "not eating breakfast this morning" },
          topicArea: "food",
        },
        {
          en: "I regret not visiting the doctor earlier.",
          bn: "আমি আগে ডাক্তারের কাছে না যাওয়ায় আফসোস করি।",
          slotValues: { DOING: "not visiting the doctor earlier" },
          topicArea: "health",
        },
        {
          en: "I regret spending so much on that trip.",
          bn: "আমি সেই ভ্রমণে এত খরচ করায় আফসোস করি।",
          slotValues: { DOING: "spending so much on that trip" },
          topicArea: "travel",
        },
        {
          en: "I regret buying that expensive phone.",
          bn: "আমি সেই দামি ফোনটি কেনায় আফসোস করি।",
          slotValues: { DOING: "buying that expensive phone" },
          topicArea: "shopping",
        },
        {
          en: "I regret not making more effort.",
          bn: "আমি আরও চেষ্টা না করায় আফসোস করি।",
          slotValues: { DOING: "not making more effort" },
          topicArea: "daily_life",
        },
        {
          en: "I regret not learning English sooner.",
          bn: "আমি আগে ইংরেজি না শেখায় আফসোস করি।",
          slotValues: { DOING: "not learning English sooner" },
          topicArea: "education",
        },
        {
          en: "I regret arguing with my best friend.",
          bn: "আমি আমার সবচেয়ে ভালো বন্ধুর সাথে তর্ক করায় আফসোস করি।",
          slotValues: { DOING: "arguing with my best friend" },
          topicArea: "relationships",
        },
        {
          en: "I regret not negotiating my salary.",
          bn: "আমি আমার বেতন নিয়ে দরকষাকষি না করায় আফসোস করি।",
          slotValues: { DOING: "not negotiating my salary" },
          topicArea: "work",
        },
        {
          en: "I regret eating too much last night.",
          bn: "আমি গতকাল রাতে অতিরিক্ত খাওয়ায় আফসোস করি।",
          slotValues: { DOING: "eating too much last night" },
          topicArea: "food",
        },
        {
          en: "I regret ignoring the warning signs.",
          bn: "আমি সতর্কতার লক্ষণগুলো উপেক্ষা করায় আফসোস করি।",
          slotValues: { DOING: "ignoring the warning signs" },
          topicArea: "health",
        },
        {
          en: "I regret not exploring the city more.",
          bn: "আমি শহরটি আরও ঘুরে না দেখায় আফসোস করি।",
          slotValues: { DOING: "not exploring the city more" },
          topicArea: "travel",
        },
        {
          en: "I regret not comparing prices before buying.",
          bn: "আমি কেনার আগে দাম তুলনা না করায় আফসোস করি।",
          slotValues: { DOING: "not comparing prices before buying" },
          topicArea: "shopping",
        },
      ],
      formality: "polite",
      difficulty: "intermediate",
      usageNote:
        "'I regret' + gerund is used to express regret about something you did (or didn't do) in the past.",
      usageNote_bn:
        "'I regret' + জেরান্ড অতীতে আপনি কিছু করেছিলেন (বা করেননি) তার আফসোস প্রকাশ করতে ব্যবহৃত হয়।",
      combinableWith: ["A9.1", "A9.4"],
      banglaStructureMap:
        "আমি (Subject) + [DOING] (Gerund phrase) + করায়/না করায় (Reason) + আফসোস করি (Verb)",
    },
    {
      id: "A9.4",
      formula: "I should have [PAST PARTICIPLE]",
      formula_bn: "আমার [অতীত কৃদন্ত] করা উচিত ছিল",
      patternName: "Missed Obligation Regret",
      patternName_bn: "মিস করা কর্তব্যে আফসোস",
      slots: [
        {
          name: "PAST PARTICIPLE",
          description:
            "A past participle phrase describing what you should have done but didn't",
          description_bn:
            "একটি অতীত কৃদন্ত পদবন্ধ যা আপনার করা উচিত ছিল কিন্তু করেননি",
          acceptedTypes: ["past_participle"],
          examples: [
            "been more careful",
            "called you sooner",
            "taken that chance",
          ],
        },
      ],
      examples: [
        {
          en: "I should have been more careful.",
          bn: "আমার আরও সতর্ক হওয়া উচিত ছিল।",
          slotValues: { "PAST PARTICIPLE": "been more careful" },
          topicArea: "daily_life",
        },
        {
          en: "I should have called you sooner.",
          bn: "আমার তোমাকে আগে ফোন করা উচিত ছিল।",
          slotValues: { "PAST PARTICIPLE": "called you sooner" },
          topicArea: "relationships",
        },
        {
          en: "I should have taken that chance.",
          bn: "আমার সেই সুযোগটা নেওয়া উচিত ছিল।",
          slotValues: { "PAST PARTICIPLE": "taken that chance" },
          topicArea: "work",
        },
        {
          en: "I should have studied for the test.",
          bn: "আমার পরীক্ষার জন্য পড়া উচিত ছিল।",
          slotValues: { "PAST PARTICIPLE": "studied for the test" },
          topicArea: "education",
        },
        {
          en: "I should have ordered the chicken.",
          bn: "আমার চিকেন অর্ডার করা উচিত ছিল।",
          slotValues: { "PAST PARTICIPLE": "ordered the chicken" },
          topicArea: "food",
        },
        {
          en: "I should have packed lighter.",
          bn: "আমার হালকা মালপত্র বাঁধা উচিত ছিল।",
          slotValues: { "PAST PARTICIPLE": "packed lighter" },
          topicArea: "travel",
        },
        {
          en: "I should have seen the doctor earlier.",
          bn: "আমার আগে ডাক্তার দেখানো উচিত ছিল।",
          slotValues: { "PAST PARTICIPLE": "seen the doctor earlier" },
          topicArea: "health",
        },
        {
          en: "I should have saved the receipt.",
          bn: "আমার রসিদটা রাখা উচিত ছিল।",
          slotValues: { "PAST PARTICIPLE": "saved the receipt" },
          topicArea: "shopping",
        },
        {
          en: "I should have listened to my parents.",
          bn: "আমার বাবা-মায়ের কথা শোনা উচিত ছিল।",
          slotValues: { "PAST PARTICIPLE": "listened to my parents" },
          topicArea: "relationships",
        },
        {
          en: "I should have left earlier to avoid traffic.",
          bn: "আমার যানজট এড়াতে আগে বের হওয়া উচিত ছিল।",
          slotValues: {
            "PAST PARTICIPLE": "left earlier to avoid traffic",
          },
          topicArea: "travel",
        },
        {
          en: "I should have asked for help.",
          bn: "আমার সাহায্য চাওয়া উচিত ছিল।",
          slotValues: { "PAST PARTICIPLE": "asked for help" },
          topicArea: "work",
        },
        {
          en: "I should have eaten something before the exam.",
          bn: "আমার পরীক্ষার আগে কিছু খাওয়া উচিত ছিল।",
          slotValues: {
            "PAST PARTICIPLE": "eaten something before the exam",
          },
          topicArea: "food",
        },
        {
          en: "I should have drunk more water.",
          bn: "আমার আরও বেশি পানি পান করা উচিত ছিল।",
          slotValues: { "PAST PARTICIPLE": "drunk more water" },
          topicArea: "health",
        },
        {
          en: "I should have read the instructions first.",
          bn: "আমার আগে নির্দেশনাগুলো পড়া উচিত ছিল।",
          slotValues: { "PAST PARTICIPLE": "read the instructions first" },
          topicArea: "education",
        },
        {
          en: "I should have waited for the sale.",
          bn: "আমার সেলের জন্য অপেক্ষা করা উচিত ছিল।",
          slotValues: { "PAST PARTICIPLE": "waited for the sale" },
          topicArea: "shopping",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "'Should have + past participle' criticizes a past action. You are saying you made the wrong choice.",
      usageNote_bn:
        "'Should have + past participle' অতীতের একটি কাজের সমালোচনা করে। আপনি বলছেন আপনি ভুল সিদ্ধান্ত নিয়েছিলেন।",
      combinableWith: ["A9.1", "A9.5"],
      banglaStructureMap:
        "আমার (Possessor) + [PAST PARTICIPLE] (Past participle phrase) + করা উচিত ছিল (Obligation + Past)",
    },
    {
      id: "A9.5",
      formula: "I shouldn't have [PAST PARTICIPLE]",
      formula_bn: "আমার [অতীত কৃদন্ত] করা উচিত হয়নি",
      patternName: "Regretting a Past Action",
      patternName_bn: "অতীতের কাজে আফসোস",
      slots: [
        {
          name: "PAST PARTICIPLE",
          description:
            "A past participle phrase describing the action you regret having done",
          description_bn:
            "একটি অতীত কৃদন্ত পদবন্ধ যা করে ফেলায় আপনি আফসোস করছেন",
          acceptedTypes: ["past_participle"],
          examples: [
            "said that",
            "stayed up so late",
            "spent so much money",
          ],
        },
      ],
      examples: [
        {
          en: "I shouldn't have said that.",
          bn: "আমার ওকথা বলা উচিত হয়নি।",
          slotValues: { "PAST PARTICIPLE": "said that" },
          topicArea: "relationships",
        },
        {
          en: "I shouldn't have stayed up so late.",
          bn: "আমার এত রাত পর্যন্ত জেগে থাকা উচিত হয়নি।",
          slotValues: { "PAST PARTICIPLE": "stayed up so late" },
          topicArea: "health",
        },
        {
          en: "I shouldn't have spent so much money.",
          bn: "আমার এত টাকা খরচ করা উচিত হয়নি।",
          slotValues: { "PAST PARTICIPLE": "spent so much money" },
          topicArea: "shopping",
        },
        {
          en: "I shouldn't have skipped the meeting.",
          bn: "আমার মিটিং বাদ দেওয়া উচিত হয়নি।",
          slotValues: { "PAST PARTICIPLE": "skipped the meeting" },
          topicArea: "work",
        },
        {
          en: "I shouldn't have cheated on the exam.",
          bn: "আমার পরীক্ষায় নকল করা উচিত হয়নি।",
          slotValues: { "PAST PARTICIPLE": "cheated on the exam" },
          topicArea: "education",
        },
        {
          en: "I shouldn't have eaten that street food.",
          bn: "আমার সেই রাস্তার খাবার খাওয়া উচিত হয়নি।",
          slotValues: { "PAST PARTICIPLE": "eaten that street food" },
          topicArea: "food",
        },
        {
          en: "I shouldn't have traveled without insurance.",
          bn: "আমার বীমা ছাড়া ভ্রমণ করা উচিত হয়নি।",
          slotValues: { "PAST PARTICIPLE": "traveled without insurance" },
          topicArea: "travel",
        },
        {
          en: "I shouldn't have ignored your advice.",
          bn: "আমার তোমার পরামর্শ উপেক্ষা করা উচিত হয়নি।",
          slotValues: { "PAST PARTICIPLE": "ignored your advice" },
          topicArea: "relationships",
        },
        {
          en: "I shouldn't have been so rude.",
          bn: "আমার এত রূঢ় হওয়া উচিত হয়নি।",
          slotValues: { "PAST PARTICIPLE": "been so rude" },
          topicArea: "daily_life",
        },
        {
          en: "I shouldn't have drunk that much coffee.",
          bn: "আমার এত কফি পান করা উচিত হয়নি।",
          slotValues: { "PAST PARTICIPLE": "drunk that much coffee" },
          topicArea: "food",
        },
        {
          en: "I shouldn't have stopped taking the medicine.",
          bn: "আমার ওষুধ খাওয়া বন্ধ করা উচিত হয়নি।",
          slotValues: { "PAST PARTICIPLE": "stopped taking the medicine" },
          topicArea: "health",
        },
        {
          en: "I shouldn't have quit my previous job.",
          bn: "আমার আগের চাকরি ছেড়ে দেওয়া উচিত হয়নি।",
          slotValues: { "PAST PARTICIPLE": "quit my previous job" },
          topicArea: "work",
        },
        {
          en: "I shouldn't have procrastinated.",
          bn: "আমার কাজ ফেলে রাখা উচিত হয়নি।",
          slotValues: { "PAST PARTICIPLE": "procrastinated" },
          topicArea: "education",
        },
        {
          en: "I shouldn't have lost my luggage tag.",
          bn: "আমার লাগেজ ট্যাগ হারানো উচিত হয়নি।",
          slotValues: { "PAST PARTICIPLE": "lost my luggage tag" },
          topicArea: "travel",
        },
        {
          en: "I shouldn't have bought that without checking the return policy.",
          bn: "আমার রিটার্ন পলিসি না দেখে সেটা কেনা উচিত হয়নি।",
          slotValues: {
            "PAST PARTICIPLE":
              "bought that without checking the return policy",
          },
          topicArea: "shopping",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "'Shouldn't have + past participle' expresses regret about something you DID do. Opposite of 'should have'.",
      usageNote_bn:
        "'Shouldn't have + past participle' আপনি যা করেছিলেন তার আফসোস প্রকাশ করে। 'Should have'-এর বিপরীত।",
      combinableWith: ["A9.4"],
      banglaStructureMap:
        "আমার (Possessor) + [PAST PARTICIPLE] (Past participle phrase) + করা উচিত হয়নি (Obligation Negative + Past)",
    },
    {
      id: "A9.6",
      formula: "I wish I hadn't [PAST PARTICIPLE]",
      formula_bn: "আমি চাই যেন আমি [অতীত কাজ] না করতাম",
      patternName: "Negative Regret (Wish I Hadn't)",
      patternName_bn: "নেতিবাচক আফসোস (যদি না করতাম)",
      slots: [
        {
          name: "PAST PARTICIPLE",
          description:
            "A past participle phrase describing the action you regret having done",
          description_bn:
            "একটি অতীত কৃদন্ত পদবন্ধ যা করে ফেলায় আপনি আফসোস করছেন",
          acceptedTypes: ["past_participle"],
          examples: ["said that", "eaten so much", "quit my job"],
        },
      ],
      examples: [
        {
          en: "I wish I hadn't said that.",
          bn: "আমি চাই যেন আমি ওকথা না বলতাম।",
          slotValues: { "PAST PARTICIPLE": "said that" },
          topicArea: "relationships",
        },
        {
          en: "I wish I hadn't eaten so much.",
          bn: "আমি চাই যেন আমি এত বেশি না খেতাম।",
          slotValues: { "PAST PARTICIPLE": "eaten so much" },
          topicArea: "food",
        },
        {
          en: "I wish I hadn't quit my job.",
          bn: "আমি চাই যেন আমি আমার চাকরি না ছাড়তাম।",
          slotValues: { "PAST PARTICIPLE": "quit my job" },
          topicArea: "work",
        },
        {
          en: "I wish I hadn't trusted him.",
          bn: "আমি চাই যেন আমি তাকে বিশ্বাস না করতাম।",
          slotValues: { "PAST PARTICIPLE": "trusted him" },
          topicArea: "relationships",
        },
        {
          en: "I wish I hadn't sold my car.",
          bn: "আমি চাই যেন আমি আমার গাড়ি না বেচতাম।",
          slotValues: { "PAST PARTICIPLE": "sold my car" },
          topicArea: "shopping",
        },
        {
          en: "I wish I hadn't stayed up so late.",
          bn: "আমি চাই যেন আমি এত রাত পর্যন্ত না জাগতাম।",
          slotValues: { "PAST PARTICIPLE": "stayed up so late" },
          topicArea: "health",
        },
        {
          en: "I wish I hadn't skipped breakfast.",
          bn: "আমি চাই যেন আমি সকালের নাস্তা বাদ না দিতাম।",
          slotValues: { "PAST PARTICIPLE": "skipped breakfast" },
          topicArea: "food",
        },
        {
          en: "I wish I hadn't dropped out of college.",
          bn: "আমি চাই যেন আমি কলেজ ছেড়ে না দিতাম।",
          slotValues: { "PAST PARTICIPLE": "dropped out of college" },
          topicArea: "education",
        },
        {
          en: "I wish I hadn't spent all my savings.",
          bn: "আমি চাই যেন আমি আমার সমস্ত সঞ্চয় খরচ না করতাম।",
          slotValues: { "PAST PARTICIPLE": "spent all my savings" },
          topicArea: "shopping",
        },
        {
          en: "I wish I hadn't ignored the doctor's advice.",
          bn: "আমি চাই যেন আমি ডাক্তারের পরামর্শ উপেক্ষা না করতাম।",
          slotValues: { "PAST PARTICIPLE": "ignored the doctor's advice" },
          topicArea: "health",
        },
        {
          en: "I wish I hadn't missed that flight.",
          bn: "আমি চাই যেন আমি সেই ফ্লাইট মিস না করতাম।",
          slotValues: { "PAST PARTICIPLE": "missed that flight" },
          topicArea: "travel",
        },
        {
          en: "I wish I hadn't lied to my parents.",
          bn: "আমি চাই যেন আমি আমার বাবা-মায়ের কাছে মিথ্যা না বলতাম।",
          slotValues: { "PAST PARTICIPLE": "lied to my parents" },
          topicArea: "relationships",
        },
        {
          en: "I wish I hadn't signed that contract.",
          bn: "আমি চাই যেন আমি সেই চুক্তিতে সই না করতাম।",
          slotValues: { "PAST PARTICIPLE": "signed that contract" },
          topicArea: "work",
        },
        {
          en: "I wish I hadn't canceled the trip.",
          bn: "আমি চাই যেন আমি ভ্রমণটি বাতিল না করতাম।",
          slotValues: { "PAST PARTICIPLE": "canceled the trip" },
          topicArea: "travel",
        },
        {
          en: "I wish I hadn't cheated on the exam.",
          bn: "আমি চাই যেন আমি পরীক্ষায় নকল না করতাম।",
          slotValues: { "PAST PARTICIPLE": "cheated on the exam" },
          topicArea: "education",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "'I wish I hadn't...' expresses regret about something you DID do. It is the negative counterpart of 'I wish I had...'.",
      usageNote_bn:
        "'I wish I hadn't...' আপনি যা করেছিলেন তার আফসোস প্রকাশ করে। এটি 'I wish I had...'-এর নেতিবাচক প্রতিরূপ।",
      combinableWith: ["A9.1", "A9.5"],
      banglaStructureMap:
        "আমি চাই যেন আমি (Subject + Wish) + [PAST PARTICIPLE] (Past participle phrase) + না করতাম (Negative + Past verb)",
    },
    {
      id: "A9.7",
      formula: "What was I thinking [DOING]?",
      formula_bn: "আমি কী ভাবছিলাম [কাজ] করে?",
      patternName: "Self-Questioning Regret",
      patternName_bn: "আত্ম-প্রশ্নমূলক আফসোস",
      slots: [
        {
          name: "DOING",
          description:
            "A gerund (-ing form) phrase describing the regrettable action",
          description_bn:
            "একটি জেরান্ড (-ing রূপ) পদবন্ধ যা আফসোসজনক কাজটি বর্ণনা করে",
          acceptedTypes: ["gerund"],
          examples: [
            "buying that car",
            "agreeing to this",
            "staying up all night",
          ],
        },
      ],
      examples: [
        {
          en: "What was I thinking buying that car?",
          bn: "আমি কী ভাবছিলাম সেই গাড়িটা কিনে?",
          slotValues: { DOING: "buying that car" },
          topicArea: "shopping",
        },
        {
          en: "What was I thinking agreeing to this?",
          bn: "আমি কী ভাবছিলাম এতে রাজি হয়ে?",
          slotValues: { DOING: "agreeing to this" },
          topicArea: "work",
        },
        {
          en: "What was I thinking staying up all night?",
          bn: "আমি কী ভাবছিলাম সারারাত জেগে থেকে?",
          slotValues: { DOING: "staying up all night" },
          topicArea: "health",
        },
        {
          en: "What was I thinking eating that much?",
          bn: "আমি কী ভাবছিলাম এত খেয়ে?",
          slotValues: { DOING: "eating that much" },
          topicArea: "food",
        },
        {
          en: "What was I thinking quitting my job?",
          bn: "আমি কী ভাবছিলাম চাকরি ছেড়ে দিয়ে?",
          slotValues: { DOING: "quitting my job" },
          topicArea: "work",
        },
        {
          en: "What was I thinking lending him money?",
          bn: "আমি কী ভাবছিলাম তাকে টাকা ধার দিয়ে?",
          slotValues: { DOING: "lending him money" },
          topicArea: "relationships",
        },
        {
          en: "What was I thinking skipping the exam?",
          bn: "আমি কী ভাবছিলাম পরীক্ষা বাদ দিয়ে?",
          slotValues: { DOING: "skipping the exam" },
          topicArea: "education",
        },
        {
          en: "What was I thinking booking that cheap hotel?",
          bn: "আমি কী ভাবছিলাম সেই সস্তা হোটেল বুক করে?",
          slotValues: { DOING: "booking that cheap hotel" },
          topicArea: "travel",
        },
        {
          en: "What was I thinking arguing with my boss?",
          bn: "আমি কী ভাবছিলাম আমার বসের সাথে তর্ক করে?",
          slotValues: { DOING: "arguing with my boss" },
          topicArea: "work",
        },
        {
          en: "What was I thinking ignoring the symptoms?",
          bn: "আমি কী ভাবছিলাম উপসর্গগুলো উপেক্ষা করে?",
          slotValues: { DOING: "ignoring the symptoms" },
          topicArea: "health",
        },
        {
          en: "What was I thinking spending that much on a bag?",
          bn: "আমি কী ভাবছিলাম একটা ব্যাগে এত খরচ করে?",
          slotValues: { DOING: "spending that much on a bag" },
          topicArea: "shopping",
        },
        {
          en: "What was I thinking not studying for the test?",
          bn: "আমি কী ভাবছিলাম পরীক্ষার জন্য না পড়ে?",
          slotValues: { DOING: "not studying for the test" },
          topicArea: "education",
        },
        {
          en: "What was I thinking traveling without a plan?",
          bn: "আমি কী ভাবছিলাম পরিকল্পনা ছাড়া ভ্রমণ করে?",
          slotValues: { DOING: "traveling without a plan" },
          topicArea: "travel",
        },
        {
          en: "What was I thinking saying that to her?",
          bn: "আমি কী ভাবছিলাম তাকে ওকথা বলে?",
          slotValues: { DOING: "saying that to her" },
          topicArea: "relationships",
        },
        {
          en: "What was I thinking trying to cook without a recipe?",
          bn: "আমি কী ভাবছিলাম রেসিপি ছাড়া রান্না করতে গিয়ে?",
          slotValues: { DOING: "trying to cook without a recipe" },
          topicArea: "food",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "'What was I thinking' is a rhetorical self-questioning expression used to express disbelief or regret at your own past decisions. Very informal and expressive.",
      usageNote_bn:
        "'What was I thinking' একটি অলঙ্কারিক আত্ম-প্রশ্নমূলক অভিব্যক্তি যা নিজের অতীত সিদ্ধান্তে অবিশ্বাস বা আফসোস প্রকাশ করতে ব্যবহৃত হয়। খুবই অনানুষ্ঠানিক ও অভিব্যক্তিপূর্ণ।",
      combinableWith: ["A9.5", "A9.6"],
      banglaStructureMap:
        "আমি কী ভাবছিলাম (Subject + What + Past Continuous) + [DOING] (Gerund phrase) + করে? (Participle)",
    },
  ],
};
