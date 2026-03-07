import { PatternCategory } from "@/types/pattern";

export const categoryH3: PatternCategory = {
  id: "H3",
  slug: "starting-conversations",
  name: "Starting & Sustaining Conversations",
  name_bn: "কথোপকথন শুরু ও চালিয়ে যাওয়া",
  description:
    "Learn how to start conversations and keep them going naturally in English.",
  description_bn:
    "ইংরেজিতে স্বাভাবিকভাবে কথোপকথন শুরু করতে এবং চালিয়ে যেতে শিখুন।",
  icon: "💬",
  group: "H",
  groupName: "Social Interactions",
  groupName_bn: "সামাজিক যোগাযোগ",
  difficulty: "beginner",
  patterns: [
    {
      id: "H3.1",
      formula: "Do you have a minute?",
      formula_bn: "আপনার কি একটু সময় আছে?",
      patternName: "Requesting Someone's Time",
      patternName_bn: "কারো সময় চাওয়া",
      slots: [],
      examples: [
        {
          en: "Do you have a minute?",
          bn: "আপনার কি একটু সময় আছে?",
          slotValues: {},
          topicArea: "daily_life",
        },
        {
          en: "Do you have a minute? I need to discuss the project.",
          bn: "আপনার কি একটু সময় আছে? আমাকে প্রজেক্টটা নিয়ে আলোচনা করতে হবে।",
          slotValues: {},
          topicArea: "work",
        },
        {
          en: "Do you have a minute to talk?",
          bn: "আপনার কি একটু কথা বলার সময় আছে?",
          slotValues: {},
          topicArea: "daily_life",
        },
        {
          en: "Do you have a minute? I have a question about the homework.",
          bn: "আপনার কি একটু সময় আছে? হোমওয়ার্ক নিয়ে আমার একটা প্রশ্ন আছে।",
          slotValues: {},
          topicArea: "education",
        },
        {
          en: "Do you have a minute? I want to tell you something.",
          bn: "তোমার কি একটু সময় আছে? আমি তোমাকে কিছু বলতে চাই।",
          slotValues: {},
          topicArea: "relationships",
        },
        {
          en: "Do you have a minute? I need some advice.",
          bn: "আপনার কি একটু সময় আছে? আমার কিছু পরামর্শ দরকার।",
          slotValues: {},
          topicArea: "daily_life",
        },
        {
          en: "Do you have a minute? I'd like to go over the menu.",
          bn: "আপনার কি একটু সময় আছে? আমি মেনুটা দেখতে চাই।",
          slotValues: {},
          topicArea: "food",
        },
        {
          en: "Do you have a minute? I need help with directions.",
          bn: "আপনার কি একটু সময় আছে? আমাকে রাস্তা দেখাতে সাহায্য করবেন?",
          slotValues: {},
          topicArea: "travel",
        },
        {
          en: "Do you have a minute? I'm not feeling well.",
          bn: "আপনার কি একটু সময় আছে? আমার শরীর ভালো লাগছে না।",
          slotValues: {},
          topicArea: "health",
        },
        {
          en: "Do you have a minute to review this report?",
          bn: "এই রিপোর্টটা দেখার একটু সময় আছে কি?",
          slotValues: {},
          topicArea: "work",
        },
        {
          en: "Do you have a minute? I found a great deal at the store.",
          bn: "তোমার কি একটু সময় আছে? দোকানে দারুণ একটা অফার পেয়েছি।",
          slotValues: {},
          topicArea: "shopping",
        },
        {
          en: "Do you have a minute before the class starts?",
          bn: "ক্লাস শুরু হওয়ার আগে একটু সময় আছে?",
          slotValues: {},
          topicArea: "education",
        },
        {
          en: "Do you have a minute? I want to catch up.",
          bn: "তোমার কি একটু সময় আছে? খোঁজখবর নিতে চাই।",
          slotValues: {},
          topicArea: "relationships",
        },
        {
          en: "Do you have a minute? The doctor wants to see you.",
          bn: "আপনার কি একটু সময় আছে? ডাক্তার আপনাকে দেখতে চান।",
          slotValues: {},
          topicArea: "health",
        },
        {
          en: "Do you have a minute? I need your opinion on something.",
          bn: "আপনার কি একটু সময় আছে? একটা বিষয়ে আপনার মতামত দরকার।",
          slotValues: {},
          topicArea: "work",
        },
      ],
      formality: "polite",
      difficulty: "beginner",
      usageNote:
        "A polite way to ask for someone's attention before starting a conversation. Shows respect for their time.",
      usageNote_bn:
        "কথোপকথন শুরু করার আগে কারো মনোযোগ চাওয়ার একটি ভদ্র উপায়। তাদের সময়ের প্রতি সম্মান প্রদর্শন করে।",
      banglaStructureMap:
        "আপনার (Your) + কি (Question marker) + একটু সময় (A minute) + আছে (Have)",
    },
    {
      id: "H3.2",
      formula: "How's [THING] going?",
      formula_bn: "[জিনিস] কেমন চলছে?",
      patternName: "Asking About Progress",
      patternName_bn: "অগ্রগতি সম্পর্কে জিজ্ঞাসা",
      slots: [
        {
          name: "THING",
          description: "An activity, project, or aspect of life you are asking about",
          description_bn:
            "একটি কার্যকলাপ, প্রকল্প, বা জীবনের দিক যার সম্পর্কে জিজ্ঞাসা করছেন",
          acceptedTypes: ["noun", "gerund"],
          examples: ["work", "the project", "your new job"],
        },
      ],
      examples: [
        {
          en: "How's work going?",
          bn: "কাজ কেমন চলছে?",
          slotValues: { THING: "work" },
          topicArea: "work",
        },
        {
          en: "How's the project going?",
          bn: "প্রজেক্ট কেমন চলছে?",
          slotValues: { THING: "the project" },
          topicArea: "work",
        },
        {
          en: "How's your new job going?",
          bn: "তোমার নতুন চাকরি কেমন চলছে?",
          slotValues: { THING: "your new job" },
          topicArea: "work",
        },
        {
          en: "How's the studying going?",
          bn: "পড়াশোনা কেমন চলছে?",
          slotValues: { THING: "the studying" },
          topicArea: "education",
        },
        {
          en: "How's life going?",
          bn: "জীবন কেমন চলছে?",
          slotValues: { THING: "life" },
          topicArea: "daily_life",
        },
        {
          en: "How's the renovation going?",
          bn: "সংস্কারের কাজ কেমন চলছে?",
          slotValues: { THING: "the renovation" },
          topicArea: "daily_life",
        },
        {
          en: "How's your recovery going?",
          bn: "তোমার সুস্থতা কেমন চলছে?",
          slotValues: { THING: "your recovery" },
          topicArea: "health",
        },
        {
          en: "How's the trip going so far?",
          bn: "এখন পর্যন্ত ভ্রমণ কেমন চলছে?",
          slotValues: { THING: "the trip" },
          topicArea: "travel",
        },
        {
          en: "How's the cooking going?",
          bn: "রান্না কেমন চলছে?",
          slotValues: { THING: "the cooking" },
          topicArea: "food",
        },
        {
          en: "How's your relationship going?",
          bn: "তোমার সম্পর্ক কেমন চলছে?",
          slotValues: { THING: "your relationship" },
          topicArea: "relationships",
        },
        {
          en: "How's the training going?",
          bn: "ট্রেনিং কেমন চলছে?",
          slotValues: { THING: "the training" },
          topicArea: "health",
        },
        {
          en: "How's the wedding planning going?",
          bn: "বিয়ের পরিকল্পনা কেমন চলছে?",
          slotValues: { THING: "the wedding planning" },
          topicArea: "relationships",
        },
        {
          en: "How's your business going?",
          bn: "তোমার ব্যবসা কেমন চলছে?",
          slotValues: { THING: "your business" },
          topicArea: "work",
        },
        {
          en: "How's the house hunting going?",
          bn: "বাড়ি খোঁজা কেমন চলছে?",
          slotValues: { THING: "the house hunting" },
          topicArea: "shopping",
        },
        {
          en: "How's the exam preparation going?",
          bn: "পরীক্ষার প্রস্তুতি কেমন চলছে?",
          slotValues: { THING: "the exam preparation" },
          topicArea: "education",
        },
      ],
      formality: "casual",
      difficulty: "beginner",
      usageNote:
        "A great conversation starter that shows genuine interest in someone's activities. It invites a detailed response.",
      usageNote_bn:
        "একটি দুর্দান্ত কথোপকথন শুরু করার উপায় যা কারো কার্যকলাপে প্রকৃত আগ্রহ দেখায়। এটি বিস্তারিত উত্তরের আমন্ত্রণ জানায়।",
      banglaStructureMap:
        "[THING] (Subject) + কেমন (How) + চলছে (Going - Verb)",
    },
    {
      id: "H3.3",
      formula: "That reminds me of [THING]",
      formula_bn: "এটা আমাকে [জিনিসের] কথা মনে করিয়ে দিচ্ছে",
      patternName: "Connecting Topics",
      patternName_bn: "বিষয় সংযুক্ত করা",
      slots: [
        {
          name: "THING",
          description: "A memory, story, or related topic that came to mind",
          description_bn:
            "একটি স্মৃতি, গল্প, বা সম্পর্কিত বিষয় যা মনে পড়েছে",
          acceptedTypes: ["noun", "clause"],
          examples: [
            "a funny story",
            "my trip to India",
            "something my teacher said",
          ],
        },
      ],
      examples: [
        {
          en: "That reminds me of a funny story.",
          bn: "এটা আমাকে একটা মজার গল্পের কথা মনে করিয়ে দিচ্ছে।",
          slotValues: { THING: "a funny story" },
          topicArea: "daily_life",
        },
        {
          en: "That reminds me of my trip to India.",
          bn: "এটা আমাকে আমার ভারত ভ্রমণের কথা মনে করিয়ে দিচ্ছে।",
          slotValues: { THING: "my trip to India" },
          topicArea: "travel",
        },
        {
          en: "That reminds me of something my teacher said.",
          bn: "এটা আমাকে আমার শিক্ষক যা বলেছিলেন তার কথা মনে করিয়ে দিচ্ছে।",
          slotValues: { THING: "something my teacher said" },
          topicArea: "education",
        },
        {
          en: "That reminds me of my childhood.",
          bn: "এটা আমাকে আমার ছোটবেলার কথা মনে করিয়ে দিচ্ছে।",
          slotValues: { THING: "my childhood" },
          topicArea: "relationships",
        },
        {
          en: "That reminds me of a restaurant I went to last week.",
          bn: "এটা আমাকে গত সপ্তাহে যে রেস্তোরাঁয় গিয়েছিলাম তার কথা মনে করিয়ে দিচ্ছে।",
          slotValues: { THING: "a restaurant I went to last week" },
          topicArea: "food",
        },
        {
          en: "That reminds me of a meeting we had last month.",
          bn: "এটা আমাকে গত মাসে আমাদের যে মিটিং হয়েছিল তার কথা মনে করিয়ে দিচ্ছে।",
          slotValues: { THING: "a meeting we had last month" },
          topicArea: "work",
        },
        {
          en: "That reminds me of when I was in the hospital.",
          bn: "এটা আমাকে যখন আমি হাসপাতালে ছিলাম তার কথা মনে করিয়ে দিচ্ছে।",
          slotValues: { THING: "when I was in the hospital" },
          topicArea: "health",
        },
        {
          en: "That reminds me of a song I love.",
          bn: "এটা আমাকে আমার পছন্দের একটা গানের কথা মনে করিয়ে দিচ্ছে।",
          slotValues: { THING: "a song I love" },
          topicArea: "daily_life",
        },
        {
          en: "That reminds me of my grandmother's cooking.",
          bn: "এটা আমাকে আমার দাদি/নানির রান্নার কথা মনে করিয়ে দিচ্ছে।",
          slotValues: { THING: "my grandmother's cooking" },
          topicArea: "food",
        },
        {
          en: "That reminds me of a book I read recently.",
          bn: "এটা আমাকে সম্প্রতি পড়া একটা বইয়ের কথা মনে করিয়ে দিচ্ছে।",
          slotValues: { THING: "a book I read recently" },
          topicArea: "education",
        },
        {
          en: "That reminds me of something I wanted to buy.",
          bn: "এটা আমাকে এমন কিছুর কথা মনে করিয়ে দিচ্ছে যা আমি কিনতে চেয়েছিলাম।",
          slotValues: { THING: "something I wanted to buy" },
          topicArea: "shopping",
        },
        {
          en: "That reminds me of my first day at work.",
          bn: "এটা আমাকে কাজের প্রথম দিনের কথা মনে করিয়ে দিচ্ছে।",
          slotValues: { THING: "my first day at work" },
          topicArea: "work",
        },
        {
          en: "That reminds me of the time we got lost in Cox's Bazar.",
          bn: "এটা আমাকে কক্সবাজারে যখন আমরা হারিয়ে গিয়েছিলাম তার কথা মনে করিয়ে দিচ্ছে।",
          slotValues: { THING: "the time we got lost in Cox's Bazar" },
          topicArea: "travel",
        },
        {
          en: "That reminds me of my old friend Rubel.",
          bn: "এটা আমাকে আমার পুরোনো বন্ধু রুবেলের কথা মনে করিয়ে দিচ্ছে।",
          slotValues: { THING: "my old friend Rubel" },
          topicArea: "relationships",
        },
        {
          en: "That reminds me of a yoga class I took.",
          bn: "এটা আমাকে একটা যোগব্যায়াম ক্লাসের কথা মনে করিয়ে দিচ্ছে যেটা আমি করেছিলাম।",
          slotValues: { THING: "a yoga class I took" },
          topicArea: "health",
        },
      ],
      formality: "casual",
      difficulty: "beginner",
      usageNote:
        "A natural way to keep a conversation flowing by connecting the current topic to a related memory or thought.",
      usageNote_bn:
        "বর্তমান বিষয়কে সম্পর্কিত স্মৃতি বা চিন্তার সাথে যুক্ত করে কথোপকথন চালিয়ে যাওয়ার স্বাভাবিক উপায়।",
      banglaStructureMap:
        "এটা (This) + আমাকে (Me) + [THING]-এর কথা (Of thing) + মনে করিয়ে দিচ্ছে (Reminds)",
    },
    {
      id: "H3.4",
      formula: "I wanted to talk about [TOPIC]",
      formula_bn: "আমি [বিষয়] নিয়ে কথা বলতে চেয়েছিলাম",
      patternName: "Introducing a Topic",
      patternName_bn: "একটি বিষয় উত্থাপন করা",
      slots: [
        {
          name: "TOPIC",
          description: "The subject or issue you want to discuss",
          description_bn: "যে বিষয় বা ইস্যু নিয়ে আলোচনা করতে চান",
          acceptedTypes: ["noun", "clause"],
          examples: [
            "the schedule",
            "our vacation plans",
            "something important",
          ],
        },
      ],
      examples: [
        {
          en: "I wanted to talk about the schedule.",
          bn: "আমি সময়সূচি নিয়ে কথা বলতে চেয়েছিলাম।",
          slotValues: { TOPIC: "the schedule" },
          topicArea: "work",
        },
        {
          en: "I wanted to talk about our vacation plans.",
          bn: "আমি আমাদের ছুটির পরিকল্পনা নিয়ে কথা বলতে চেয়েছিলাম।",
          slotValues: { TOPIC: "our vacation plans" },
          topicArea: "travel",
        },
        {
          en: "I wanted to talk about something important.",
          bn: "আমি গুরুত্বপূর্ণ কিছু নিয়ে কথা বলতে চেয়েছিলাম।",
          slotValues: { TOPIC: "something important" },
          topicArea: "daily_life",
        },
        {
          en: "I wanted to talk about the exam results.",
          bn: "আমি পরীক্ষার ফলাফল নিয়ে কথা বলতে চেয়েছিলাম।",
          slotValues: { TOPIC: "the exam results" },
          topicArea: "education",
        },
        {
          en: "I wanted to talk about what happened yesterday.",
          bn: "আমি গতকাল কী হয়েছিল তা নিয়ে কথা বলতে চেয়েছিলাম।",
          slotValues: { TOPIC: "what happened yesterday" },
          topicArea: "relationships",
        },
        {
          en: "I wanted to talk about your health check-up.",
          bn: "আমি আপনার স্বাস্থ্য পরীক্ষা নিয়ে কথা বলতে চেয়েছিলাম।",
          slotValues: { TOPIC: "your health check-up" },
          topicArea: "health",
        },
        {
          en: "I wanted to talk about the dinner menu.",
          bn: "আমি ডিনারের মেনু নিয়ে কথা বলতে চেয়েছিলাম।",
          slotValues: { TOPIC: "the dinner menu" },
          topicArea: "food",
        },
        {
          en: "I wanted to talk about the budget for the trip.",
          bn: "আমি ভ্রমণের বাজেট নিয়ে কথা বলতে চেয়েছিলাম।",
          slotValues: { TOPIC: "the budget for the trip" },
          topicArea: "travel",
        },
        {
          en: "I wanted to talk about your performance review.",
          bn: "আমি আপনার কর্মদক্ষতা পর্যালোচনা নিয়ে কথা বলতে চেয়েছিলাম।",
          slotValues: { TOPIC: "your performance review" },
          topicArea: "work",
        },
        {
          en: "I wanted to talk about the new discount offers.",
          bn: "আমি নতুন ছাড়ের অফার নিয়ে কথা বলতে চেয়েছিলাম।",
          slotValues: { TOPIC: "the new discount offers" },
          topicArea: "shopping",
        },
        {
          en: "I wanted to talk about our future together.",
          bn: "আমি আমাদের একসাথে ভবিষ্যৎ নিয়ে কথা বলতে চেয়েছিলাম।",
          slotValues: { TOPIC: "our future together" },
          topicArea: "relationships",
        },
        {
          en: "I wanted to talk about the course selection.",
          bn: "আমি কোর্স নির্বাচন নিয়ে কথা বলতে চেয়েছিলাম।",
          slotValues: { TOPIC: "the course selection" },
          topicArea: "education",
        },
        {
          en: "I wanted to talk about my diet plan.",
          bn: "আমি আমার ডায়েট প্ল্যান নিয়ে কথা বলতে চেয়েছিলাম।",
          slotValues: { TOPIC: "my diet plan" },
          topicArea: "health",
        },
        {
          en: "I wanted to talk about the team meeting tomorrow.",
          bn: "আমি আগামীকালের টিম মিটিং নিয়ে কথা বলতে চেয়েছিলাম।",
          slotValues: { TOPIC: "the team meeting tomorrow" },
          topicArea: "work",
        },
        {
          en: "I wanted to talk about the weekend plans.",
          bn: "আমি সপ্তাহান্তের পরিকল্পনা নিয়ে কথা বলতে চেয়েছিলাম।",
          slotValues: { TOPIC: "the weekend plans" },
          topicArea: "daily_life",
        },
      ],
      formality: "polite",
      difficulty: "beginner",
      usageNote:
        "Using past tense 'wanted' makes this softer and more polite than 'I want to talk about'. Good for bringing up sensitive topics.",
      usageNote_bn:
        "অতীত কাল 'wanted' ব্যবহার করলে এটি 'I want to talk about'-এর চেয়ে নরম ও বেশি ভদ্র হয়। সংবেদনশীল বিষয় উত্থাপনের জন্য ভালো।",
      banglaStructureMap:
        "আমি (Subject) + [TOPIC] নিয়ে (About topic) + কথা বলতে চেয়েছিলাম (Wanted to talk - Verb)",
    },
  ],
};
