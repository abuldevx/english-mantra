import { PatternCategory } from "@/types/pattern";

export const categoryT8: PatternCategory = {
  id: "T8",
  slug: "work-jobs",
  name: "Work & Jobs",
  name_bn: "কাজ ও চাকরি",
  description:
    "Learn how to talk about your job, responsibilities, and career in English.",
  description_bn:
    "ইংরেজিতে আপনার চাকরি, দায়িত্ব এবং ক্যারিয়ার নিয়ে কথা বলতে শিখুন।",
  icon: "💼",
  group: "T",
  groupName: "Situational Patterns",
  groupName_bn: "পরিস্থিতিগত প্যাটার্ন",
  difficulty: "beginner",
  patterns: [
    {
      id: "T8.1",
      formula: "I work as a [JOB] at [COMPANY]",
      formula_bn: "আমি [কোম্পানিতে] [পেশায়] কাজ করি",
      patternName: "Introducing Your Job",
      patternName_bn: "আপনার পেশার পরিচয়",
      slots: [
        {
          name: "JOB",
          description: "Your job title or profession",
          description_bn: "আপনার পদবি বা পেশা",
          acceptedTypes: ["noun", "noun_phrase"],
          examples: ["teacher", "software engineer", "nurse"],
        },
        {
          name: "COMPANY",
          description: "The name of the organization or type of workplace",
          description_bn: "প্রতিষ্ঠানের নাম বা কর্মক্ষেত্রের ধরন",
          acceptedTypes: ["noun", "noun_phrase", "place"],
          examples: ["a hospital", "Google", "a local school"],
        },
      ],
      examples: [
        {
          en: "I work as a teacher at a local school.",
          bn: "আমি একটি স্থানীয় স্কুলে শিক্ষক হিসেবে কাজ করি।",
          slotValues: { JOB: "teacher", COMPANY: "a local school" },
          topicArea: "education",
        },
        {
          en: "I work as a software engineer at Google.",
          bn: "আমি গুগলে সফটওয়্যার ইঞ্জিনিয়ার হিসেবে কাজ করি।",
          slotValues: { JOB: "software engineer", COMPANY: "Google" },
          topicArea: "work",
        },
        {
          en: "I work as a nurse at a hospital.",
          bn: "আমি একটি হাসপাতালে নার্স হিসেবে কাজ করি।",
          slotValues: { JOB: "nurse", COMPANY: "a hospital" },
          topicArea: "health",
        },
        {
          en: "I work as an accountant at a bank.",
          bn: "আমি একটি ব্যাংকে হিসাবরক্ষক হিসেবে কাজ করি।",
          slotValues: { JOB: "accountant", COMPANY: "a bank" },
          topicArea: "work",
        },
        {
          en: "I work as a chef at a restaurant.",
          bn: "আমি একটি রেস্তোরাঁয় শেফ হিসেবে কাজ করি।",
          slotValues: { JOB: "chef", COMPANY: "a restaurant" },
          topicArea: "food",
        },
        {
          en: "I work as a salesperson at a clothing store.",
          bn: "আমি একটি পোশাকের দোকানে বিক্রয়কর্মী হিসেবে কাজ করি।",
          slotValues: { JOB: "salesperson", COMPANY: "a clothing store" },
          topicArea: "shopping",
        },
        {
          en: "I work as a receptionist at a hotel.",
          bn: "আমি একটি হোটেলে রিসেপশনিস্ট হিসেবে কাজ করি।",
          slotValues: { JOB: "receptionist", COMPANY: "a hotel" },
          topicArea: "travel",
        },
        {
          en: "I work as a journalist at a newspaper.",
          bn: "আমি একটি পত্রিকায় সাংবাদিক হিসেবে কাজ করি।",
          slotValues: { JOB: "journalist", COMPANY: "a newspaper" },
          topicArea: "work",
        },
        {
          en: "I work as a driver at a logistics company.",
          bn: "আমি একটি লজিস্টিক্স কোম্পানিতে ড্রাইভার হিসেবে কাজ করি।",
          slotValues: { JOB: "driver", COMPANY: "a logistics company" },
          topicArea: "work",
        },
        {
          en: "I work as a pharmacist at a drugstore.",
          bn: "আমি একটি ওষুধের দোকানে ফার্মাসিস্ট হিসেবে কাজ করি।",
          slotValues: { JOB: "pharmacist", COMPANY: "a drugstore" },
          topicArea: "health",
        },
        {
          en: "I work as a professor at the university.",
          bn: "আমি বিশ্ববিদ্যালয়ে অধ্যাপক হিসেবে কাজ করি।",
          slotValues: { JOB: "professor", COMPANY: "the university" },
          topicArea: "education",
        },
        {
          en: "I work as a designer at an advertising agency.",
          bn: "আমি একটি বিজ্ঞাপন সংস্থায় ডিজাইনার হিসেবে কাজ করি।",
          slotValues: { JOB: "designer", COMPANY: "an advertising agency" },
          topicArea: "work",
        },
        {
          en: "I work as a security guard at a shopping mall.",
          bn: "আমি একটি শপিং মলে নিরাপত্তা রক্ষী হিসেবে কাজ করি।",
          slotValues: { JOB: "security guard", COMPANY: "a shopping mall" },
          topicArea: "shopping",
        },
        {
          en: "I work as a tour guide at a travel agency.",
          bn: "আমি একটি ট্রাভেল এজেন্সিতে ট্যুর গাইড হিসেবে কাজ করি।",
          slotValues: { JOB: "tour guide", COMPANY: "a travel agency" },
          topicArea: "travel",
        },
        {
          en: "I work as a manager at a garment factory.",
          bn: "আমি একটি গার্মেন্টস ফ্যাক্টরিতে ম্যানেজার হিসেবে কাজ করি।",
          slotValues: { JOB: "manager", COMPANY: "a garment factory" },
          topicArea: "work",
        },
      ],
      formality: "casual",
      difficulty: "beginner",
      usageNote:
        "The standard way to introduce your profession and workplace. Very common in social introductions.",
      usageNote_bn:
        "আপনার পেশা ও কর্মক্ষেত্রের পরিচয় দেওয়ার মানসম্মত উপায়। সামাজিক পরিচিতিতে খুবই সাধারণ।",
      combinableWith: ["T8.2"],
      banglaStructureMap:
        "আমি (Subject) + [COMPANY]-তে (Place + Postposition) + [JOB] হিসেবে (Role + Postposition) + কাজ করি (Verb)",
    },
    {
      id: "T8.2",
      formula: "My job involves [DOING]",
      formula_bn: "আমার কাজে [করা] অন্তর্ভুক্ত",
      patternName: "Describing Job Activities",
      patternName_bn: "কাজের কার্যকলাপ বর্ণনা",
      slots: [
        {
          name: "DOING",
          description: "Activities or tasks that are part of your job",
          description_bn:
            "কার্যকলাপ বা কাজ যা আপনার চাকরির অংশ",
          acceptedTypes: ["gerund", "verb_phrase"],
          examples: [
            "managing a team",
            "writing reports",
            "teaching students",
          ],
        },
      ],
      examples: [
        {
          en: "My job involves managing a team.",
          bn: "আমার কাজে একটি দল পরিচালনা করা অন্তর্ভুক্ত।",
          slotValues: { DOING: "managing a team" },
          topicArea: "work",
        },
        {
          en: "My job involves writing reports.",
          bn: "আমার কাজে রিপোর্ট লেখা অন্তর্ভুক্ত।",
          slotValues: { DOING: "writing reports" },
          topicArea: "work",
        },
        {
          en: "My job involves teaching students.",
          bn: "আমার কাজে ছাত্রদের পড়ানো অন্তর্ভুক্ত।",
          slotValues: { DOING: "teaching students" },
          topicArea: "education",
        },
        {
          en: "My job involves talking to customers.",
          bn: "আমার কাজে কাস্টমারদের সাথে কথা বলা অন্তর্ভুক্ত।",
          slotValues: { DOING: "talking to customers" },
          topicArea: "shopping",
        },
        {
          en: "My job involves cooking for large groups.",
          bn: "আমার কাজে বড় দলের জন্য রান্না করা অন্তর্ভুক্ত।",
          slotValues: { DOING: "cooking for large groups" },
          topicArea: "food",
        },
        {
          en: "My job involves caring for patients.",
          bn: "আমার কাজে রোগীদের সেবা করা অন্তর্ভুক্ত।",
          slotValues: { DOING: "caring for patients" },
          topicArea: "health",
        },
        {
          en: "My job involves traveling to different cities.",
          bn: "আমার কাজে বিভিন্ন শহরে ভ্রমণ করা অন্তর্ভুক্ত।",
          slotValues: { DOING: "traveling to different cities" },
          topicArea: "travel",
        },
        {
          en: "My job involves handling money.",
          bn: "আমার কাজে টাকা পরিচালনা করা অন্তর্ভুক্ত।",
          slotValues: { DOING: "handling money" },
          topicArea: "work",
        },
        {
          en: "My job involves designing websites.",
          bn: "আমার কাজে ওয়েবসাইট ডিজাইন করা অন্তর্ভুক্ত।",
          slotValues: { DOING: "designing websites" },
          topicArea: "work",
        },
        {
          en: "My job involves organizing events.",
          bn: "আমার কাজে ইভেন্ট আয়োজন করা অন্তর্ভুক্ত।",
          slotValues: { DOING: "organizing events" },
          topicArea: "work",
        },
        {
          en: "My job involves grading papers.",
          bn: "আমার কাজে খাতা মূল্যায়ন করা অন্তর্ভুক্ত।",
          slotValues: { DOING: "grading papers" },
          topicArea: "education",
        },
        {
          en: "My job involves a lot of problem-solving.",
          bn: "আমার কাজে অনেক সমস্যা সমাধান অন্তর্ভুক্ত।",
          slotValues: { DOING: "a lot of problem-solving" },
          topicArea: "work",
        },
        {
          en: "My job involves meeting new people every day.",
          bn: "আমার কাজে প্রতিদিন নতুন মানুষের সাথে দেখা করা অন্তর্ভুক্ত।",
          slotValues: { DOING: "meeting new people every day" },
          topicArea: "daily_life",
        },
        {
          en: "My job involves maintaining equipment.",
          bn: "আমার কাজে যন্ত্রপাতি রক্ষণাবেক্ষণ করা অন্তর্ভুক্ত।",
          slotValues: { DOING: "maintaining equipment" },
          topicArea: "work",
        },
        {
          en: "My job involves answering phone calls.",
          bn: "আমার কাজে ফোন কল রিসিভ করা অন্তর্ভুক্ত।",
          slotValues: { DOING: "answering phone calls" },
          topicArea: "work",
        },
      ],
      formality: "casual",
      difficulty: "beginner",
      usageNote:
        "A natural way to describe what you do at work without listing every task. Good for conversations and interviews.",
      usageNote_bn:
        "প্রতিটি কাজ তালিকা না করে কর্মক্ষেত্রে আপনি কী করেন তা বর্ণনা করার একটি স্বাভাবিক উপায়। কথোপকথন ও ইন্টারভিউয়ের জন্য ভালো।",
      combinableWith: ["T8.1", "T8.3"],
      banglaStructureMap:
        "আমার কাজে (Subject + Possessive + Postposition) + [DOING] (Activity - gerund) + অন্তর্ভুক্ত (Verb)",
    },
    {
      id: "T8.3",
      formula: "I'm responsible for [THING]",
      formula_bn: "আমি [বিষয়ের] জন্য দায়ী",
      patternName: "Stating Responsibilities",
      patternName_bn: "দায়িত্ব জানানো",
      slots: [
        {
          name: "THING",
          description:
            "A task, area, or duty you are responsible for at work",
          description_bn:
            "একটি কাজ, ক্ষেত্র, বা দায়িত্ব যার জন্য আপনি কর্মক্ষেত্রে দায়ী",
          acceptedTypes: ["noun", "noun_phrase", "gerund"],
          examples: [
            "the marketing department",
            "training new employees",
            "customer complaints",
          ],
        },
      ],
      examples: [
        {
          en: "I'm responsible for the marketing department.",
          bn: "আমি মার্কেটিং বিভাগের জন্য দায়ী।",
          slotValues: { THING: "the marketing department" },
          topicArea: "work",
        },
        {
          en: "I'm responsible for training new employees.",
          bn: "আমি নতুন কর্মীদের প্রশিক্ষণের জন্য দায়ী।",
          slotValues: { THING: "training new employees" },
          topicArea: "work",
        },
        {
          en: "I'm responsible for customer complaints.",
          bn: "আমি কাস্টমার অভিযোগের জন্য দায়ী।",
          slotValues: { THING: "customer complaints" },
          topicArea: "shopping",
        },
        {
          en: "I'm responsible for the daily schedule.",
          bn: "আমি দৈনিক সময়সূচির জন্য দায়ী।",
          slotValues: { THING: "the daily schedule" },
          topicArea: "work",
        },
        {
          en: "I'm responsible for ordering supplies.",
          bn: "আমি সরবরাহ অর্ডার করার জন্য দায়ী।",
          slotValues: { THING: "ordering supplies" },
          topicArea: "work",
        },
        {
          en: "I'm responsible for patient records.",
          bn: "আমি রোগীদের রেকর্ডের জন্য দায়ী।",
          slotValues: { THING: "patient records" },
          topicArea: "health",
        },
        {
          en: "I'm responsible for the class timetable.",
          bn: "আমি ক্লাসের সময়সূচির জন্য দায়ী।",
          slotValues: { THING: "the class timetable" },
          topicArea: "education",
        },
        {
          en: "I'm responsible for inventory management.",
          bn: "আমি মজুদ ব্যবস্থাপনার জন্য দায়ী।",
          slotValues: { THING: "inventory management" },
          topicArea: "shopping",
        },
        {
          en: "I'm responsible for the company's social media.",
          bn: "আমি কোম্পানির সোশ্যাল মিডিয়ার জন্য দায়ী।",
          slotValues: { THING: "the company's social media" },
          topicArea: "work",
        },
        {
          en: "I'm responsible for quality control.",
          bn: "আমি মান নিয়ন্ত্রণের জন্য দায়ী।",
          slotValues: { THING: "quality control" },
          topicArea: "work",
        },
        {
          en: "I'm responsible for booking travel arrangements.",
          bn: "আমি ভ্রমণ ব্যবস্থা বুকিংয়ের জন্য দায়ী।",
          slotValues: { THING: "booking travel arrangements" },
          topicArea: "travel",
        },
        {
          en: "I'm responsible for the kitchen menu.",
          bn: "আমি রান্নাঘরের মেনুর জন্য দায়ী।",
          slotValues: { THING: "the kitchen menu" },
          topicArea: "food",
        },
        {
          en: "I'm responsible for data entry.",
          bn: "আমি ডাটা এন্ট্রির জন্য দায়ী।",
          slotValues: { THING: "data entry" },
          topicArea: "work",
        },
        {
          en: "I'm responsible for the safety of the building.",
          bn: "আমি ভবনের নিরাপত্তার জন্য দায়ী।",
          slotValues: { THING: "the safety of the building" },
          topicArea: "work",
        },
        {
          en: "I'm responsible for managing the budget.",
          bn: "আমি বাজেট পরিচালনার জন্য দায়ী।",
          slotValues: { THING: "managing the budget" },
          topicArea: "work",
        },
      ],
      formality: "polite",
      difficulty: "beginner",
      usageNote:
        "A professional way to describe your duties and accountability at work. Common in interviews and workplace discussions.",
      usageNote_bn:
        "কর্মক্ষেত্রে আপনার কর্তব্য ও জবাবদিহিতা বর্ণনা করার একটি পেশাদার উপায়। ইন্টারভিউ ও কর্মক্ষেত্রের আলোচনায় সাধারণ।",
      combinableWith: ["T8.1"],
      banglaStructureMap:
        "আমি (Subject) + [THING]-এর জন্য (Object + Postposition) + দায়ী (Adjective)",
    },
    {
      id: "T8.4",
      formula: "I've been working here for [TIME]",
      formula_bn: "আমি [সময়] ধরে এখানে কাজ করছি",
      patternName: "Stating Work Duration",
      patternName_bn: "কাজের সময়কাল জানানো",
      slots: [
        {
          name: "TIME",
          description: "The duration you have worked at the current place",
          description_bn:
            "বর্তমান জায়গায় আপনি কতদিন কাজ করেছেন তার সময়কাল",
          acceptedTypes: ["time", "time_expression"],
          examples: ["five years", "six months", "over a decade"],
        },
      ],
      examples: [
        {
          en: "I've been working here for five years.",
          bn: "আমি পাঁচ বছর ধরে এখানে কাজ করছি।",
          slotValues: { TIME: "five years" },
          topicArea: "work",
        },
        {
          en: "I've been working here for six months.",
          bn: "আমি ছয় মাস ধরে এখানে কাজ করছি।",
          slotValues: { TIME: "six months" },
          topicArea: "work",
        },
        {
          en: "I've been working here for over a decade.",
          bn: "আমি এক দশকেরও বেশি সময় ধরে এখানে কাজ করছি।",
          slotValues: { TIME: "over a decade" },
          topicArea: "work",
        },
        {
          en: "I've been working here for about two years.",
          bn: "আমি প্রায় দুই বছর ধরে এখানে কাজ করছি।",
          slotValues: { TIME: "about two years" },
          topicArea: "work",
        },
        {
          en: "I've been working here for just a few weeks.",
          bn: "আমি মাত্র কয়েক সপ্তাহ ধরে এখানে কাজ করছি।",
          slotValues: { TIME: "just a few weeks" },
          topicArea: "work",
        },
        {
          en: "I've been working here for three years now.",
          bn: "আমি এখন তিন বছর ধরে এখানে কাজ করছি।",
          slotValues: { TIME: "three years now" },
          topicArea: "work",
        },
        {
          en: "I've been working here for almost ten years.",
          bn: "আমি প্রায় দশ বছর ধরে এখানে কাজ করছি।",
          slotValues: { TIME: "almost ten years" },
          topicArea: "work",
        },
        {
          en: "I've been working here for a year and a half.",
          bn: "আমি দেড় বছর ধরে এখানে কাজ করছি।",
          slotValues: { TIME: "a year and a half" },
          topicArea: "work",
        },
        {
          en: "I've been working here for fifteen years.",
          bn: "আমি পনেরো বছর ধরে এখানে কাজ করছি।",
          slotValues: { TIME: "fifteen years" },
          topicArea: "work",
        },
        {
          en: "I've been working here for since I graduated.",
          bn: "আমি গ্র্যাজুয়েশনের পর থেকে এখানে কাজ করছি।",
          slotValues: { TIME: "since I graduated" },
          topicArea: "education",
        },
        {
          en: "I've been working here for a couple of months.",
          bn: "আমি কয়েক মাস ধরে এখানে কাজ করছি।",
          slotValues: { TIME: "a couple of months" },
          topicArea: "work",
        },
        {
          en: "I've been working here for quite some time.",
          bn: "আমি বেশ কিছুদিন ধরে এখানে কাজ করছি।",
          slotValues: { TIME: "quite some time" },
          topicArea: "work",
        },
        {
          en: "I've been working here for seven years.",
          bn: "আমি সাত বছর ধরে এখানে কাজ করছি।",
          slotValues: { TIME: "seven years" },
          topicArea: "work",
        },
        {
          en: "I've been working here for less than a year.",
          bn: "আমি এক বছরেরও কম সময় ধরে এখানে কাজ করছি।",
          slotValues: { TIME: "less than a year" },
          topicArea: "work",
        },
        {
          en: "I've been working here for twenty years.",
          bn: "আমি বিশ বছর ধরে এখানে কাজ করছি।",
          slotValues: { TIME: "twenty years" },
          topicArea: "work",
        },
      ],
      formality: "casual",
      difficulty: "beginner",
      usageNote:
        "Uses the present perfect continuous to show ongoing employment. Very natural when talking about your career.",
      usageNote_bn:
        "চলমান কর্মসংস্থান দেখাতে বর্তমান পূর্ণ ধারাবাহিক কাল ব্যবহার করে। ক্যারিয়ার নিয়ে কথা বলার সময় খুবই স্বাভাবিক।",
      combinableWith: ["T8.1"],
      banglaStructureMap:
        "আমি (Subject) + [TIME] ধরে (Duration + Postposition) + এখানে (Place) + কাজ করছি (Verb - Progressive)",
    },
    {
      id: "T8.5",
      formula: "I'm looking for a job in [FIELD]",
      formula_bn: "আমি [ক্ষেত্রে] চাকরি খুঁজছি",
      patternName: "Job Searching",
      patternName_bn: "চাকরি খোঁজা",
      slots: [
        {
          name: "FIELD",
          description: "An industry, sector, or area of work",
          description_bn: "একটি শিল্প, খাত, বা কাজের ক্ষেত্র",
          acceptedTypes: ["noun", "noun_phrase"],
          examples: ["marketing", "healthcare", "IT"],
        },
      ],
      examples: [
        {
          en: "I'm looking for a job in marketing.",
          bn: "আমি মার্কেটিংয়ে চাকরি খুঁজছি।",
          slotValues: { FIELD: "marketing" },
          topicArea: "work",
        },
        {
          en: "I'm looking for a job in healthcare.",
          bn: "আমি স্বাস্থ্যসেবায় চাকরি খুঁজছি।",
          slotValues: { FIELD: "healthcare" },
          topicArea: "health",
        },
        {
          en: "I'm looking for a job in IT.",
          bn: "আমি আইটিতে চাকরি খুঁজছি।",
          slotValues: { FIELD: "IT" },
          topicArea: "work",
        },
        {
          en: "I'm looking for a job in education.",
          bn: "আমি শিক্ষা ক্ষেত্রে চাকরি খুঁজছি।",
          slotValues: { FIELD: "education" },
          topicArea: "education",
        },
        {
          en: "I'm looking for a job in the hospitality industry.",
          bn: "আমি হসপিটালিটি ইন্ডাস্ট্রিতে চাকরি খুঁজছি।",
          slotValues: { FIELD: "the hospitality industry" },
          topicArea: "travel",
        },
        {
          en: "I'm looking for a job in finance.",
          bn: "আমি ফিন্যান্সে চাকরি খুঁজছি।",
          slotValues: { FIELD: "finance" },
          topicArea: "work",
        },
        {
          en: "I'm looking for a job in retail.",
          bn: "আমি খুচরা বিক্রয়ে চাকরি খুঁজছি।",
          slotValues: { FIELD: "retail" },
          topicArea: "shopping",
        },
        {
          en: "I'm looking for a job in the food industry.",
          bn: "আমি খাদ্য শিল্পে চাকরি খুঁজছি।",
          slotValues: { FIELD: "the food industry" },
          topicArea: "food",
        },
        {
          en: "I'm looking for a job in engineering.",
          bn: "আমি ইঞ্জিনিয়ারিংয়ে চাকরি খুঁজছি।",
          slotValues: { FIELD: "engineering" },
          topicArea: "work",
        },
        {
          en: "I'm looking for a job in graphic design.",
          bn: "আমি গ্রাফিক ডিজাইনে চাকরি খুঁজছি।",
          slotValues: { FIELD: "graphic design" },
          topicArea: "work",
        },
        {
          en: "I'm looking for a job in customer service.",
          bn: "আমি কাস্টমার সার্ভিসে চাকরি খুঁজছি।",
          slotValues: { FIELD: "customer service" },
          topicArea: "work",
        },
        {
          en: "I'm looking for a job in the tourism sector.",
          bn: "আমি পর্যটন খাতে চাকরি খুঁজছি।",
          slotValues: { FIELD: "the tourism sector" },
          topicArea: "travel",
        },
        {
          en: "I'm looking for a job in construction.",
          bn: "আমি নির্মাণ খাতে চাকরি খুঁজছি।",
          slotValues: { FIELD: "construction" },
          topicArea: "work",
        },
        {
          en: "I'm looking for a job in media.",
          bn: "আমি মিডিয়ায় চাকরি খুঁজছি।",
          slotValues: { FIELD: "media" },
          topicArea: "work",
        },
        {
          en: "I'm looking for a job in teaching.",
          bn: "আমি শিক্ষকতায় চাকরি খুঁজছি।",
          slotValues: { FIELD: "teaching" },
          topicArea: "education",
        },
      ],
      formality: "casual",
      difficulty: "beginner",
      usageNote:
        "A straightforward way to tell someone you are searching for employment. Useful in networking and job interviews.",
      usageNote_bn:
        "কাউকে বলার একটি সরাসরি উপায় যে আপনি চাকরি খুঁজছেন। নেটওয়ার্কিং ও চাকরির ইন্টারভিউতে উপযোগী।",
      combinableWith: ["T8.1"],
      banglaStructureMap:
        "আমি (Subject) + [FIELD]-এ (Field + Postposition) + চাকরি (Object) + খুঁজছি (Verb - Progressive)",
    },
  ],
};
