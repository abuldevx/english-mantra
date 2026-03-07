import { PatternCategory } from "@/types/pattern";

export const categoryT5: PatternCategory = {
  id: "T5",
  slug: "email-messaging",
  name: "Email/Messaging Patterns",
  name_bn: "ইমেইল/মেসেজিং প্যাটার্ন",
  description:
    "Learn common English phrases for writing emails, messages, and digital communication.",
  description_bn:
    "ইমেইল, বার্তা এবং ডিজিটাল যোগাযোগ লেখার জন্য সাধারণ ইংরেজি বাক্যাংশ শিখুন।",
  icon: "📧",
  group: "T",
  groupName: "Situational Patterns",
  groupName_bn: "পরিস্থিতিগত প্যাটার্ন",
  difficulty: "beginner",
  patterns: [
    {
      id: "T5.1",
      formula: "I'm writing to [PURPOSE]",
      formula_bn: "আমি [উদ্দেশ্যে] লিখছি",
      patternName: "Stating Email Purpose",
      patternName_bn: "ইমেইলের উদ্দেশ্য জানানো",
      slots: [
        {
          name: "PURPOSE",
          description: "The reason or goal of your email or message",
          description_bn: "আপনার ইমেইল বা বার্তার কারণ বা লক্ষ্য",
          acceptedTypes: ["to_verb", "verb_phrase"],
          examples: [
            "inquire about the position",
            "request a refund",
            "confirm my attendance",
          ],
        },
      ],
      examples: [
        {
          en: "I'm writing to inquire about the position.",
          bn: "আমি পদটি সম্পর্কে জানতে লিখছি।",
          slotValues: { PURPOSE: "inquire about the position" },
          topicArea: "work",
        },
        {
          en: "I'm writing to request a refund.",
          bn: "আমি ফেরত চাইতে লিখছি।",
          slotValues: { PURPOSE: "request a refund" },
          topicArea: "shopping",
        },
        {
          en: "I'm writing to confirm my attendance.",
          bn: "আমি আমার উপস্থিতি নিশ্চিত করতে লিখছি।",
          slotValues: { PURPOSE: "confirm my attendance" },
          topicArea: "work",
        },
        {
          en: "I'm writing to apply for the scholarship.",
          bn: "আমি বৃত্তির জন্য আবেদন করতে লিখছি।",
          slotValues: { PURPOSE: "apply for the scholarship" },
          topicArea: "education",
        },
        {
          en: "I'm writing to complain about the service.",
          bn: "আমি সেবা সম্পর্কে অভিযোগ জানাতে লিখছি।",
          slotValues: { PURPOSE: "complain about the service" },
          topicArea: "daily_life",
        },
        {
          en: "I'm writing to schedule a meeting.",
          bn: "আমি একটি মিটিং ঠিক করতে লিখছি।",
          slotValues: { PURPOSE: "schedule a meeting" },
          topicArea: "work",
        },
        {
          en: "I'm writing to ask about the admission deadline.",
          bn: "আমি ভর্তির সময়সীমা সম্পর্কে জানতে লিখছি।",
          slotValues: { PURPOSE: "ask about the admission deadline" },
          topicArea: "education",
        },
        {
          en: "I'm writing to cancel my reservation.",
          bn: "আমি আমার রিজার্ভেশন বাতিল করতে লিখছি।",
          slotValues: { PURPOSE: "cancel my reservation" },
          topicArea: "travel",
        },
        {
          en: "I'm writing to inform you about my absence.",
          bn: "আমি আমার অনুপস্থিতি সম্পর্কে জানাতে লিখছি।",
          slotValues: { PURPOSE: "inform you about my absence" },
          topicArea: "work",
        },
        {
          en: "I'm writing to request medical records.",
          bn: "আমি মেডিকেল রেকর্ড চাইতে লিখছি।",
          slotValues: { PURPOSE: "request medical records" },
          topicArea: "health",
        },
        {
          en: "I'm writing to thank you for your help.",
          bn: "আমি আপনার সাহায্যের জন্য ধন্যবাদ জানাতে লিখছি।",
          slotValues: { PURPOSE: "thank you for your help" },
          topicArea: "relationships",
        },
        {
          en: "I'm writing to update you on the project.",
          bn: "আমি প্রজেক্ট সম্পর্কে আপডেট দিতে লিখছি।",
          slotValues: { PURPOSE: "update you on the project" },
          topicArea: "work",
        },
        {
          en: "I'm writing to ask about the menu for the event.",
          bn: "আমি অনুষ্ঠানের মেনু সম্পর্কে জানতে লিখছি।",
          slotValues: { PURPOSE: "ask about the menu for the event" },
          topicArea: "food",
        },
        {
          en: "I'm writing to book a room for two nights.",
          bn: "আমি দুই রাতের জন্য একটি রুম বুক করতে লিখছি।",
          slotValues: { PURPOSE: "book a room for two nights" },
          topicArea: "travel",
        },
        {
          en: "I'm writing to express my interest in the course.",
          bn: "আমি কোর্সে আমার আগ্রহ প্রকাশ করতে লিখছি।",
          slotValues: { PURPOSE: "express my interest in the course" },
          topicArea: "education",
        },
      ],
      formality: "formal",
      difficulty: "beginner",
      usageNote:
        "A professional way to open an email or letter. Sets the tone and lets the reader know the purpose immediately.",
      usageNote_bn:
        "ইমেইল বা চিঠি শুরু করার একটি পেশাদার উপায়। সুর নির্ধারণ করে এবং পাঠককে তাৎক্ষণিকভাবে উদ্দেশ্য জানায়।",
      combinableWith: ["T5.3"],
      banglaStructureMap:
        "আমি (Subject) + [PURPOSE] (Purpose - verb phrase) + লিখছি (Verb - Progressive)",
    },
    {
      id: "T5.2",
      formula: "Please find attached [THING]",
      formula_bn: "সংযুক্ত [জিনিস] দেখুন",
      patternName: "Referencing Attachments",
      patternName_bn: "সংযুক্তি উল্লেখ",
      slots: [
        {
          name: "THING",
          description: "The document, file, or item you have attached",
          description_bn:
            "যে দলিল, ফাইল, বা জিনিস আপনি সংযুক্ত করেছেন",
          acceptedTypes: ["noun", "noun_phrase"],
          examples: ["my resume", "the report", "the invoice"],
        },
      ],
      examples: [
        {
          en: "Please find attached my resume.",
          bn: "সংযুক্ত আমার জীবনবৃত্তান্ত দেখুন।",
          slotValues: { THING: "my resume" },
          topicArea: "work",
        },
        {
          en: "Please find attached the report.",
          bn: "সংযুক্ত রিপোর্টটি দেখুন।",
          slotValues: { THING: "the report" },
          topicArea: "work",
        },
        {
          en: "Please find attached the invoice.",
          bn: "সংযুক্ত চালানটি দেখুন।",
          slotValues: { THING: "the invoice" },
          topicArea: "shopping",
        },
        {
          en: "Please find attached the meeting agenda.",
          bn: "সংযুক্ত মিটিংয়ের এজেন্ডা দেখুন।",
          slotValues: { THING: "the meeting agenda" },
          topicArea: "work",
        },
        {
          en: "Please find attached my application form.",
          bn: "সংযুক্ত আমার আবেদনপত্র দেখুন।",
          slotValues: { THING: "my application form" },
          topicArea: "education",
        },
        {
          en: "Please find attached the travel itinerary.",
          bn: "সংযুক্ত ভ্রমণ সূচি দেখুন।",
          slotValues: { THING: "the travel itinerary" },
          topicArea: "travel",
        },
        {
          en: "Please find attached the medical certificate.",
          bn: "সংযুক্ত মেডিকেল সার্টিফিকেট দেখুন।",
          slotValues: { THING: "the medical certificate" },
          topicArea: "health",
        },
        {
          en: "Please find attached the project proposal.",
          bn: "সংযুক্ত প্রজেক্ট প্রস্তাবনা দেখুন।",
          slotValues: { THING: "the project proposal" },
          topicArea: "work",
        },
        {
          en: "Please find attached the photos from the trip.",
          bn: "সংযুক্ত ভ্রমণের ছবিগুলো দেখুন।",
          slotValues: { THING: "the photos from the trip" },
          topicArea: "travel",
        },
        {
          en: "Please find attached the receipt.",
          bn: "সংযুক্ত রসিদটি দেখুন।",
          slotValues: { THING: "the receipt" },
          topicArea: "shopping",
        },
        {
          en: "Please find attached the course syllabus.",
          bn: "সংযুক্ত কোর্সের পাঠ্যক্রম দেখুন।",
          slotValues: { THING: "the course syllabus" },
          topicArea: "education",
        },
        {
          en: "Please find attached the contract.",
          bn: "সংযুক্ত চুক্তিপত্রটি দেখুন।",
          slotValues: { THING: "the contract" },
          topicArea: "work",
        },
        {
          en: "Please find attached the prescription.",
          bn: "সংযুক্ত প্রেসক্রিপশনটি দেখুন।",
          slotValues: { THING: "the prescription" },
          topicArea: "health",
        },
        {
          en: "Please find attached the updated price list.",
          bn: "সংযুক্ত আপডেটকৃত মূল্য তালিকা দেখুন।",
          slotValues: { THING: "the updated price list" },
          topicArea: "shopping",
        },
        {
          en: "Please find attached the event invitation.",
          bn: "সংযুক্ত অনুষ্ঠানের আমন্ত্রণপত্র দেখুন।",
          slotValues: { THING: "the event invitation" },
          topicArea: "relationships",
        },
      ],
      formality: "formal",
      difficulty: "beginner",
      usageNote:
        "A standard formal phrase used in emails when you have attached a file. Very common in business communication.",
      usageNote_bn:
        "ইমেইলে ফাইল সংযুক্ত করলে ব্যবহৃত একটি মানসম্মত আনুষ্ঠানিক বাক্যাংশ। ব্যবসায়িক যোগাযোগে খুবই সাধারণ।",
      combinableWith: ["T5.1"],
      banglaStructureMap:
        "সংযুক্ত (Attached - Adjective) + [THING] (Object) + দেখুন (Verb - Imperative)",
    },
    {
      id: "T5.3",
      formula: "I look forward to hearing from you",
      formula_bn: "আপনার উত্তরের অপেক্ষায় রইলাম",
      patternName: "Closing with Expectation",
      patternName_bn: "প্রত্যাশাসহ সমাপ্তি",
      slots: [],
      examples: [
        {
          en: "I look forward to hearing from you.",
          bn: "আপনার উত্তরের অপেক্ষায় রইলাম।",
          slotValues: {},
          topicArea: "work",
        },
        {
          en: "I look forward to hearing from you soon.",
          bn: "শীঘ্রই আপনার উত্তরের অপেক্ষায় রইলাম।",
          slotValues: {},
          topicArea: "work",
        },
        {
          en: "I look forward to hearing from you at your earliest convenience.",
          bn: "আপনার সুবিধামতো দ্রুততম সময়ে উত্তরের অপেক্ষায় রইলাম।",
          slotValues: {},
          topicArea: "work",
        },
        {
          en: "I look forward to hearing from you regarding the application.",
          bn: "আবেদন সম্পর্কে আপনার উত্তরের অপেক্ষায় রইলাম।",
          slotValues: {},
          topicArea: "education",
        },
        {
          en: "I look forward to hearing from you about the job offer.",
          bn: "চাকরির অফার সম্পর্কে আপনার উত্তরের অপেক্ষায় রইলাম।",
          slotValues: {},
          topicArea: "work",
        },
        {
          en: "I look forward to hearing from you about the test results.",
          bn: "পরীক্ষার ফলাফল সম্পর্কে আপনার উত্তরের অপেক্ষায় রইলাম।",
          slotValues: {},
          topicArea: "health",
        },
        {
          en: "I look forward to hearing from you about the booking.",
          bn: "বুকিং সম্পর্কে আপনার উত্তরের অপেক্ষায় রইলাম।",
          slotValues: {},
          topicArea: "travel",
        },
        {
          en: "I look forward to hearing from you about the order.",
          bn: "অর্ডার সম্পর্কে আপনার উত্তরের অপেক্ষায় রইলাম।",
          slotValues: {},
          topicArea: "shopping",
        },
        {
          en: "I look forward to hearing from you before Friday.",
          bn: "শুক্রবারের আগে আপনার উত্তরের অপেক্ষায় রইলাম।",
          slotValues: {},
          topicArea: "work",
        },
        {
          en: "I look forward to hearing from you regarding the scholarship.",
          bn: "বৃত্তি সম্পর্কে আপনার উত্তরের অপেক্ষায় রইলাম।",
          slotValues: {},
          topicArea: "education",
        },
        {
          en: "I look forward to hearing from you about the appointment.",
          bn: "অ্যাপয়েন্টমেন্ট সম্পর্কে আপনার উত্তরের অপেক্ষায় রইলাম।",
          slotValues: {},
          topicArea: "health",
        },
        {
          en: "I look forward to hearing from you about the proposal.",
          bn: "প্রস্তাবনা সম্পর্কে আপনার উত্তরের অপেক্ষায় রইলাম।",
          slotValues: {},
          topicArea: "work",
        },
        {
          en: "I look forward to hearing from you about the refund.",
          bn: "ফেরত সম্পর্কে আপনার উত্তরের অপেক্ষায় রইলাম।",
          slotValues: {},
          topicArea: "shopping",
        },
        {
          en: "I look forward to hearing from you about the dinner plans.",
          bn: "রাতের খাবারের পরিকল্পনা সম্পর্কে আপনার উত্তরের অপেক্ষায় রইলাম।",
          slotValues: {},
          topicArea: "food",
        },
        {
          en: "I look forward to hearing from you about the travel dates.",
          bn: "ভ্রমণের তারিখ সম্পর্কে আপনার উত্তরের অপেক্ষায় রইলাম।",
          slotValues: {},
          topicArea: "travel",
        },
      ],
      formality: "formal",
      difficulty: "beginner",
      usageNote:
        "A very common professional email closing that expresses anticipation for a reply. Adds a warm yet formal tone.",
      usageNote_bn:
        "একটি খুবই সাধারণ পেশাদার ইমেইল সমাপ্তি যা উত্তরের প্রত্যাশা প্রকাশ করে। উষ্ণ কিন্তু আনুষ্ঠানিক সুর যোগ করে।",
      combinableWith: ["T5.1"],
      banglaStructureMap:
        "আপনার উত্তরের (Object + Possessive) + অপেক্ষায় রইলাম (Verb - Past habitual)",
    },
    {
      id: "T5.4",
      formula: "Just following up on [THING]",
      formula_bn: "শুধু [বিষয়ে] ফলো আপ করছি",
      patternName: "Following Up",
      patternName_bn: "ফলো আপ করা",
      slots: [
        {
          name: "THING",
          description:
            "A previous email, request, conversation, or topic you want to revisit",
          description_bn:
            "একটি পূর্ববর্তী ইমেইল, অনুরোধ, কথোপকথন, বা বিষয় যা আপনি পুনরায় উত্থাপন করতে চান",
          acceptedTypes: ["noun", "noun_phrase", "topic"],
          examples: [
            "my previous email",
            "the invoice I sent",
            "our conversation",
          ],
        },
      ],
      examples: [
        {
          en: "Just following up on my previous email.",
          bn: "শুধু আমার আগের ইমেইল সম্পর্কে ফলো আপ করছি।",
          slotValues: { THING: "my previous email" },
          topicArea: "work",
        },
        {
          en: "Just following up on the invoice I sent.",
          bn: "শুধু আমি যে চালান পাঠিয়েছিলাম সেটা সম্পর্কে ফলো আপ করছি।",
          slotValues: { THING: "the invoice I sent" },
          topicArea: "work",
        },
        {
          en: "Just following up on our conversation yesterday.",
          bn: "শুধু গতকালের আমাদের কথোপকথন সম্পর্কে ফলো আপ করছি।",
          slotValues: { THING: "our conversation yesterday" },
          topicArea: "daily_life",
        },
        {
          en: "Just following up on the job application.",
          bn: "শুধু চাকরির আবেদন সম্পর্কে ফলো আপ করছি।",
          slotValues: { THING: "the job application" },
          topicArea: "work",
        },
        {
          en: "Just following up on the order I placed last week.",
          bn: "শুধু গত সপ্তাহে আমি যে অর্ডার দিয়েছিলাম সেটা সম্পর্কে ফলো আপ করছি।",
          slotValues: { THING: "the order I placed last week" },
          topicArea: "shopping",
        },
        {
          en: "Just following up on the appointment request.",
          bn: "শুধু অ্যাপয়েন্টমেন্টের অনুরোধ সম্পর্কে ফলো আপ করছি।",
          slotValues: { THING: "the appointment request" },
          topicArea: "health",
        },
        {
          en: "Just following up on the booking confirmation.",
          bn: "শুধু বুকিং নিশ্চিতকরণ সম্পর্কে ফলো আপ করছি।",
          slotValues: { THING: "the booking confirmation" },
          topicArea: "travel",
        },
        {
          en: "Just following up on the course enrollment.",
          bn: "শুধু কোর্সে ভর্তি সম্পর্কে ফলো আপ করছি।",
          slotValues: { THING: "the course enrollment" },
          topicArea: "education",
        },
        {
          en: "Just following up on the feedback you promised.",
          bn: "শুধু আপনি যে মতামত দেওয়ার প্রতিশ্রুতি দিয়েছিলেন সেটা সম্পর্কে ফলো আপ করছি।",
          slotValues: { THING: "the feedback you promised" },
          topicArea: "work",
        },
        {
          en: "Just following up on the refund request.",
          bn: "শুধু ফেরত অনুরোধ সম্পর্কে ফলো আপ করছি।",
          slotValues: { THING: "the refund request" },
          topicArea: "shopping",
        },
        {
          en: "Just following up on the test results.",
          bn: "শুধু পরীক্ষার ফলাফল সম্পর্কে ফলো আপ করছি।",
          slotValues: { THING: "the test results" },
          topicArea: "health",
        },
        {
          en: "Just following up on the dinner plans.",
          bn: "শুধু রাতের খাবারের পরিকল্পনা সম্পর্কে ফলো আপ করছি।",
          slotValues: { THING: "the dinner plans" },
          topicArea: "food",
        },
        {
          en: "Just following up on the visa application.",
          bn: "শুধু ভিসার আবেদন সম্পর্কে ফলো আপ করছি।",
          slotValues: { THING: "the visa application" },
          topicArea: "travel",
        },
        {
          en: "Just following up on the assignment submission.",
          bn: "শুধু অ্যাসাইনমেন্ট জমা দেওয়ার বিষয়ে ফলো আপ করছি।",
          slotValues: { THING: "the assignment submission" },
          topicArea: "education",
        },
        {
          en: "Just following up on the party invitation.",
          bn: "শুধু পার্টির আমন্ত্রণ সম্পর্কে ফলো আপ করছি।",
          slotValues: { THING: "the party invitation" },
          topicArea: "relationships",
        },
      ],
      formality: "polite",
      difficulty: "beginner",
      usageNote:
        "A gentle and non-pushy way to remind someone about a pending matter. Very common in workplace emails.",
      usageNote_bn:
        "কাউকে একটি মুলতুবি বিষয়ে মনে করিয়ে দেওয়ার একটি নরম ও চাপহীন উপায়। কর্মক্ষেত্রের ইমেইলে খুবই সাধারণ।",
      combinableWith: ["T5.3"],
      banglaStructureMap:
        "শুধু (Adverb) + [THING] সম্পর্কে (Topic + Postposition) + ফলো আপ করছি (Verb - Progressive)",
    },
    {
      id: "T5.5",
      formula: "I wanted to let you know that [CLAUSE]",
      formula_bn: "আমি আপনাকে জানাতে চেয়েছিলাম যে [বাক্য]",
      patternName: "Informing Politely",
      patternName_bn: "বিনয়ের সাথে জানানো",
      slots: [
        {
          name: "CLAUSE",
          description:
            "A complete statement or piece of information you want to share",
          description_bn:
            "একটি সম্পূর্ণ বিবৃতি বা তথ্যের অংশ যা আপনি শেয়ার করতে চান",
          acceptedTypes: ["clause", "statement"],
          examples: [
            "the meeting has been moved",
            "I won't be available tomorrow",
            "the project is complete",
          ],
        },
      ],
      examples: [
        {
          en: "I wanted to let you know that the meeting has been moved.",
          bn: "আমি আপনাকে জানাতে চেয়েছিলাম যে মিটিংটি সরানো হয়েছে।",
          slotValues: { CLAUSE: "the meeting has been moved" },
          topicArea: "work",
        },
        {
          en: "I wanted to let you know that I won't be available tomorrow.",
          bn: "আমি আপনাকে জানাতে চেয়েছিলাম যে আমি আগামীকাল পাওয়া যাব না।",
          slotValues: { CLAUSE: "I won't be available tomorrow" },
          topicArea: "daily_life",
        },
        {
          en: "I wanted to let you know that the project is complete.",
          bn: "আমি আপনাকে জানাতে চেয়েছিলাম যে প্রজেক্টটি সম্পন্ন হয়েছে।",
          slotValues: { CLAUSE: "the project is complete" },
          topicArea: "work",
        },
        {
          en: "I wanted to let you know that your order has been shipped.",
          bn: "আমি আপনাকে জানাতে চেয়েছিলাম যে আপনার অর্ডার পাঠানো হয়েছে।",
          slotValues: { CLAUSE: "your order has been shipped" },
          topicArea: "shopping",
        },
        {
          en: "I wanted to let you know that the results are out.",
          bn: "আমি আপনাকে জানাতে চেয়েছিলাম যে ফলাফল প্রকাশিত হয়েছে।",
          slotValues: { CLAUSE: "the results are out" },
          topicArea: "education",
        },
        {
          en: "I wanted to let you know that I'll be late today.",
          bn: "আমি আপনাকে জানাতে চেয়েছিলাম যে আমি আজ দেরি করব।",
          slotValues: { CLAUSE: "I'll be late today" },
          topicArea: "work",
        },
        {
          en: "I wanted to let you know that the flight has been delayed.",
          bn: "আমি আপনাকে জানাতে চেয়েছিলাম যে ফ্লাইটটি বিলম্বিত হয়েছে।",
          slotValues: { CLAUSE: "the flight has been delayed" },
          topicArea: "travel",
        },
        {
          en: "I wanted to let you know that the prescription is ready.",
          bn: "আমি আপনাকে জানাতে চেয়েছিলাম যে প্রেসক্রিপশনটি তৈরি।",
          slotValues: { CLAUSE: "the prescription is ready" },
          topicArea: "health",
        },
        {
          en: "I wanted to let you know that we've changed the menu.",
          bn: "আমি আপনাকে জানাতে চেয়েছিলাম যে আমরা মেনু পরিবর্তন করেছি।",
          slotValues: { CLAUSE: "we've changed the menu" },
          topicArea: "food",
        },
        {
          en: "I wanted to let you know that I'm moving to a new city.",
          bn: "আমি আপনাকে জানাতে চেয়েছিলাম যে আমি নতুন শহরে যাচ্ছি।",
          slotValues: { CLAUSE: "I'm moving to a new city" },
          topicArea: "relationships",
        },
        {
          en: "I wanted to let you know that the store is having a sale.",
          bn: "আমি আপনাকে জানাতে চেয়েছিলাম যে দোকানে সেল চলছে।",
          slotValues: { CLAUSE: "the store is having a sale" },
          topicArea: "shopping",
        },
        {
          en: "I wanted to let you know that classes start next Monday.",
          bn: "আমি আপনাকে জানাতে চেয়েছিলাম যে আগামী সোমবার থেকে ক্লাস শুরু।",
          slotValues: { CLAUSE: "classes start next Monday" },
          topicArea: "education",
        },
        {
          en: "I wanted to let you know that the doctor is on leave.",
          bn: "আমি আপনাকে জানাতে চেয়েছিলাম যে ডাক্তার ছুটিতে আছেন।",
          slotValues: { CLAUSE: "the doctor is on leave" },
          topicArea: "health",
        },
        {
          en: "I wanted to let you know that I got the job.",
          bn: "আমি আপনাকে জানাতে চেয়েছিলাম যে আমি চাকরিটা পেয়েছি।",
          slotValues: { CLAUSE: "I got the job" },
          topicArea: "work",
        },
        {
          en: "I wanted to let you know that the hotel is fully booked.",
          bn: "আমি আপনাকে জানাতে চেয়েছিলাম যে হোটেলটি সম্পূর্ণ বুকড।",
          slotValues: { CLAUSE: "the hotel is fully booked" },
          topicArea: "travel",
        },
      ],
      formality: "polite",
      difficulty: "beginner",
      usageNote:
        "A soft and considerate way to share news or information. The past tense 'wanted' makes it less direct and more polite.",
      usageNote_bn:
        "সংবাদ বা তথ্য শেয়ার করার একটি নরম ও বিবেচনাশীল উপায়। অতীত কাল 'wanted' এটিকে কম সরাসরি ও বেশি বিনয়ী করে।",
      combinableWith: ["T5.3"],
      banglaStructureMap:
        "আমি (Subject) + আপনাকে (Indirect Object) + জানাতে চেয়েছিলাম (Verb) + যে (Conjunction) + [CLAUSE] (Subordinate clause)",
    },
  ],
};
