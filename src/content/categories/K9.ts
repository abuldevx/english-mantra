import { PatternCategory } from "@/types/pattern";

export const categoryK9: PatternCategory = {
  id: "K9",
  slug: "giving-responding-news",
  name: "Giving & Responding to News",
  name_bn: "খবর দেওয়া ও সাড়া দেওয়া",
  description:
    "Learn patterns for sharing news and reacting to news from others.",
  description_bn:
    "খবর শেয়ার করার এবং অন্যদের খবরে সাড়া দেওয়ার ধরন শিখুন।",
  icon: "📰",
  group: "K",
  groupName: "Reported Speech & Communication",
  groupName_bn: "পরোক্ষ উক্তি ও যোগাযোগ",
  difficulty: "intermediate",
  patterns: [
    {
      id: "K9.1",
      formula: "Guess what? [NEWS]",
      formula_bn: "জানো কী হয়েছে? [খবর]",
      patternName: "Sharing Exciting News",
      patternName_bn: "উত্তেজনাপূর্ণ খবর শেয়ার করা",
      slots: [
        {
          name: "NEWS",
          description: "The exciting news to share",
          description_bn: "শেয়ার করার উত্তেজনাপূর্ণ খবর",
          acceptedTypes: ["clause", "statement"],
          examples: [
            "I got the job!",
            "We're going on vacation!",
            "I passed the exam!",
          ],
        },
      ],
      examples: [
        {
          en: "Guess what? I got the job!",
          bn: "জানো কী হয়েছে? আমি চাকরি পেয়েছি!",
          slotValues: { NEWS: "I got the job!" },
          topicArea: "work",
        },
        {
          en: "Guess what? We're going on vacation to Cox's Bazar!",
          bn: "জানো কী হয়েছে? আমরা কক্সবাজারে ছুটিতে যাচ্ছি!",
          slotValues: {
            NEWS: "We're going on vacation to Cox's Bazar!",
          },
          topicArea: "travel",
        },
        {
          en: "Guess what? I passed the exam!",
          bn: "জানো কী হয়েছে? আমি পরীক্ষায় পাশ করেছি!",
          slotValues: { NEWS: "I passed the exam!" },
          topicArea: "education",
        },
        {
          en: "Guess what? I found a great new restaurant!",
          bn: "জানো কী হয়েছে? আমি একটা দারুণ নতুন রেস্তোরাঁ পেয়েছি!",
          slotValues: {
            NEWS: "I found a great new restaurant!",
          },
          topicArea: "food",
        },
        {
          en: "Guess what? I lost five kilos!",
          bn: "জানো কী হয়েছে? আমার পাঁচ কেজি ওজন কমেছে!",
          slotValues: { NEWS: "I lost five kilos!" },
          topicArea: "health",
        },
        {
          en: "Guess what? My sister is getting married!",
          bn: "জানো কী হয়েছে? আমার বোনের বিয়ে হচ্ছে!",
          slotValues: { NEWS: "My sister is getting married!" },
          topicArea: "relationships",
        },
        {
          en: "Guess what? I got a huge discount on this phone!",
          bn: "জানো কী হয়েছে? এই ফোনে আমি বিশাল ছাড় পেয়েছি!",
          slotValues: {
            NEWS: "I got a huge discount on this phone!",
          },
          topicArea: "shopping",
        },
        {
          en: "Guess what? I got promoted!",
          bn: "জানো কী হয়েছে? আমি প্রমোশন পেয়েছি!",
          slotValues: { NEWS: "I got promoted!" },
          topicArea: "work",
        },
        {
          en: "Guess what? We're going to have a baby!",
          bn: "জানো কী হয়েছে? আমাদের বাচ্চা আসছে!",
          slotValues: { NEWS: "We're going to have a baby!" },
          topicArea: "relationships",
        },
        {
          en: "Guess what? I won a scholarship!",
          bn: "জানো কী হয়েছে? আমি স্কলারশিপ পেয়েছি!",
          slotValues: { NEWS: "I won a scholarship!" },
          topicArea: "education",
        },
        {
          en: "Guess what? I learned to cook biryani!",
          bn: "জানো কী হয়েছে? আমি বিরিয়ানি রান্না শিখেছি!",
          slotValues: { NEWS: "I learned to cook biryani!" },
          topicArea: "food",
        },
        {
          en: "Guess what? The doctor said I'm completely healthy!",
          bn: "জানো কী হয়েছে? ডাক্তার বলেছেন আমি সম্পূর্ণ সুস্থ!",
          slotValues: {
            NEWS: "The doctor said I'm completely healthy!",
          },
          topicArea: "health",
        },
        {
          en: "Guess what? I booked tickets to Thailand!",
          bn: "জানো কী হয়েছে? আমি থাইল্যান্ডের টিকেট বুক করেছি!",
          slotValues: {
            NEWS: "I booked tickets to Thailand!",
          },
          topicArea: "travel",
        },
        {
          en: "Guess what? I met my childhood friend today!",
          bn: "জানো কী হয়েছে? আজ আমার ছোটবেলার বন্ধুর সাথে দেখা হলো!",
          slotValues: {
            NEWS: "I met my childhood friend today!",
          },
          topicArea: "relationships",
        },
        {
          en: "Guess what? I got a raise!",
          bn: "জানো কী হয়েছে? আমার বেতন বেড়েছে!",
          slotValues: { NEWS: "I got a raise!" },
          topicArea: "work",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "'Guess what?' creates excitement and anticipation before sharing good news. It's very informal and friendly.",
      usageNote_bn:
        "'Guess what?' ভালো খবর শেয়ার করার আগে উত্তেজনা ও প্রত্যাশা তৈরি করে। এটি খুবই অনানুষ্ঠানিক ও বন্ধুত্বপূর্ণ।",
    },
    {
      id: "K9.2",
      formula: "Did you hear about [THING]?",
      formula_bn: "[বিষয়] সম্পর্কে শুনেছ?",
      patternName: "Asking About News",
      patternName_bn: "খবর সম্পর্কে জিজ্ঞাসা",
      slots: [
        {
          name: "THING",
          description: "The news topic being asked about",
          description_bn: "যে খবরের বিষয়ে জিজ্ঞাসা করা হচ্ছে",
          acceptedTypes: ["topic", "noun_phrase", "event"],
          examples: [
            "the new project",
            "what happened at school",
            "the accident",
          ],
        },
      ],
      examples: [
        {
          en: "Did you hear about the new project at work?",
          bn: "কাজের নতুন প্রজেক্টের কথা শুনেছ?",
          slotValues: { THING: "the new project at work" },
          topicArea: "work",
        },
        {
          en: "Did you hear about what happened at school?",
          bn: "স্কুলে কী হয়েছে শুনেছ?",
          slotValues: { THING: "what happened at school" },
          topicArea: "education",
        },
        {
          en: "Did you hear about the accident on the highway?",
          bn: "হাইওয়েতে দুর্ঘটনার কথা শুনেছ?",
          slotValues: { THING: "the accident on the highway" },
          topicArea: "travel",
        },
        {
          en: "Did you hear about the new restaurant in town?",
          bn: "শহরের নতুন রেস্তোরাঁর কথা শুনেছ?",
          slotValues: { THING: "the new restaurant in town" },
          topicArea: "food",
        },
        {
          en: "Did you hear about the big sale at the mall?",
          bn: "মলে বড় সেলের কথা শুনেছ?",
          slotValues: { THING: "the big sale at the mall" },
          topicArea: "shopping",
        },
        {
          en: "Did you hear about the new health guidelines?",
          bn: "নতুন স্বাস্থ্য নির্দেশিকার কথা শুনেছ?",
          slotValues: { THING: "the new health guidelines" },
          topicArea: "health",
        },
        {
          en: "Did you hear about Rahim's promotion?",
          bn: "রহিমের প্রমোশনের কথা শুনেছ?",
          slotValues: { THING: "Rahim's promotion" },
          topicArea: "work",
        },
        {
          en: "Did you hear about the wedding?",
          bn: "বিয়ের কথা শুনেছ?",
          slotValues: { THING: "the wedding" },
          topicArea: "relationships",
        },
        {
          en: "Did you hear about the new flight routes to Sylhet?",
          bn: "সিলেটে নতুন ফ্লাইট রুটের কথা শুনেছ?",
          slotValues: {
            THING: "the new flight routes to Sylhet",
          },
          topicArea: "travel",
        },
        {
          en: "Did you hear about the food festival next week?",
          bn: "আগামী সপ্তাহের ফুড ফেস্টিভ্যালের কথা শুনেছ?",
          slotValues: {
            THING: "the food festival next week",
          },
          topicArea: "food",
        },
        {
          en: "Did you hear about the exam schedule change?",
          bn: "পরীক্ষার সময়সূচি পরিবর্তনের কথা শুনেছ?",
          slotValues: {
            THING: "the exam schedule change",
          },
          topicArea: "education",
        },
        {
          en: "Did you hear about the new gym in our area?",
          bn: "আমাদের এলাকায় নতুন জিমের কথা শুনেছ?",
          slotValues: {
            THING: "the new gym in our area",
          },
          topicArea: "health",
        },
        {
          en: "Did you hear about the power outage last night?",
          bn: "গত রাতের বিদ্যুৎ বিভ্রাটের কথা শুনেছ?",
          slotValues: {
            THING: "the power outage last night",
          },
          topicArea: "daily_life",
        },
        {
          en: "Did you hear about the price drop on electronics?",
          bn: "ইলেকট্রনিক্সে দাম কমার কথা শুনেছ?",
          slotValues: {
            THING: "the price drop on electronics",
          },
          topicArea: "shopping",
        },
        {
          en: "Did you hear about their engagement?",
          bn: "তাদের এনগেজমেন্টের কথা শুনেছ?",
          slotValues: { THING: "their engagement" },
          topicArea: "relationships",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "'Did you hear about' is used to check if someone already knows a piece of news before sharing details.",
      usageNote_bn:
        "'Did you hear about' বিস্তারিত শেয়ার করার আগে কেউ কোনো খবর জানে কিনা তা যাচাই করতে ব্যবহৃত হয়।",
    },
    {
      id: "K9.3",
      formula: "I have some good/bad news: [NEWS]",
      formula_bn: "আমার একটা ভালো/খারাপ খবর আছে: [খবর]",
      patternName: "Introducing News",
      patternName_bn: "খবর পরিচয় করানো",
      slots: [
        {
          name: "NEWS",
          description: "The news being shared",
          description_bn: "যে খবর শেয়ার করা হচ্ছে",
          acceptedTypes: ["clause", "statement"],
          examples: [
            "we got the contract",
            "the event has been canceled",
            "I got accepted into university",
          ],
        },
      ],
      examples: [
        {
          en: "I have some good news: we got the contract!",
          bn: "আমার একটা ভালো খবর আছে: আমরা চুক্তি পেয়েছি!",
          slotValues: { NEWS: "we got the contract!" },
          topicArea: "work",
        },
        {
          en: "I have some bad news: the event has been canceled.",
          bn: "আমার একটা খারাপ খবর আছে: অনুষ্ঠান বাতিল হয়ে গেছে।",
          slotValues: { NEWS: "the event has been canceled." },
          topicArea: "daily_life",
        },
        {
          en: "I have some good news: I got accepted into university!",
          bn: "আমার একটা ভালো খবর আছে: আমি বিশ্ববিদ্যালয়ে ভর্তি হয়েছি!",
          slotValues: {
            NEWS: "I got accepted into university!",
          },
          topicArea: "education",
        },
        {
          en: "I have some bad news: the flight has been delayed.",
          bn: "আমার একটা খারাপ খবর আছে: ফ্লাইট দেরি হয়ে গেছে।",
          slotValues: { NEWS: "the flight has been delayed." },
          topicArea: "travel",
        },
        {
          en: "I have some good news: the test results are normal.",
          bn: "আমার একটা ভালো খবর আছে: পরীক্ষার ফলাফল স্বাভাবিক।",
          slotValues: { NEWS: "the test results are normal." },
          topicArea: "health",
        },
        {
          en: "I have some bad news: the store is closing down.",
          bn: "আমার একটা খারাপ খবর আছে: দোকান বন্ধ হয়ে যাচ্ছে।",
          slotValues: { NEWS: "the store is closing down." },
          topicArea: "shopping",
        },
        {
          en: "I have some good news: Mom is coming to visit!",
          bn: "আমার একটা ভালো খবর আছে: মা বেড়াতে আসছেন!",
          slotValues: { NEWS: "Mom is coming to visit!" },
          topicArea: "relationships",
        },
        {
          en: "I have some good news: we won the award!",
          bn: "আমার একটা ভালো খবর আছে: আমরা পুরস্কার জিতেছি!",
          slotValues: { NEWS: "we won the award!" },
          topicArea: "work",
        },
        {
          en: "I have some bad news: the recipe didn't turn out well.",
          bn: "আমার একটা খারাপ খবর আছে: রেসিপি ভালো হয়নি।",
          slotValues: {
            NEWS: "the recipe didn't turn out well.",
          },
          topicArea: "food",
        },
        {
          en: "I have some good news: the new park is finally open!",
          bn: "আমার একটা ভালো খবর আছে: নতুন পার্ক অবশেষে খুলেছে!",
          slotValues: {
            NEWS: "the new park is finally open!",
          },
          topicArea: "daily_life",
        },
        {
          en: "I have some bad news: the train strike starts tomorrow.",
          bn: "আমার একটা খারাপ খবর আছে: আগামীকাল থেকে ট্রেন ধর্মঘট শুরু।",
          slotValues: {
            NEWS: "the train strike starts tomorrow.",
          },
          topicArea: "travel",
        },
        {
          en: "I have some good news: I got full marks in the test!",
          bn: "আমার একটা ভালো খবর আছে: পরীক্ষায় পূর্ণ নম্বর পেয়েছি!",
          slotValues: {
            NEWS: "I got full marks in the test!",
          },
          topicArea: "education",
        },
        {
          en: "I have some bad news: the doctor wants to run more tests.",
          bn: "আমার একটা খারাপ খবর আছে: ডাক্তার আরও পরীক্ষা করতে চান।",
          slotValues: {
            NEWS: "the doctor wants to run more tests.",
          },
          topicArea: "health",
        },
        {
          en: "I have some good news: I found a great deal on a laptop!",
          bn: "আমার একটা ভালো খবর আছে: ল্যাপটপে দারুণ অফার পেয়েছি!",
          slotValues: {
            NEWS: "I found a great deal on a laptop!",
          },
          topicArea: "shopping",
        },
        {
          en: "I have some good news: we're all invited to the reunion!",
          bn: "আমার একটা ভালো খবর আছে: আমরা সবাই পুনর্মিলনীতে আমন্ত্রিত!",
          slotValues: {
            NEWS: "we're all invited to the reunion!",
          },
          topicArea: "relationships",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "'I have some good/bad news' prepares the listener for what's coming. It's a considerate way to deliver news.",
      usageNote_bn:
        "'I have some good/bad news' শ্রোতাকে আসন্ন খবরের জন্য প্রস্তুত করে। খবর দেওয়ার একটি বিবেচনাপূর্ণ উপায়।",
    },
    {
      id: "K9.4",
      formula: "That's [REACTION]!",
      formula_bn: "এটা তো [প্রতিক্রিয়া]!",
      patternName: "Reacting to News",
      patternName_bn: "খবরে প্রতিক্রিয়া",
      slots: [
        {
          name: "REACTION",
          description: "An adjective expressing your reaction",
          description_bn: "আপনার প্রতিক্রিয়া প্রকাশকারী বিশেষণ",
          acceptedTypes: ["adjective", "adjective_phrase"],
          examples: [
            "amazing",
            "terrible",
            "wonderful",
            "unbelievable",
          ],
        },
      ],
      examples: [
        {
          en: "That's amazing! Congratulations!",
          bn: "এটা তো দারুণ! অভিনন্দন!",
          slotValues: { REACTION: "amazing" },
          topicArea: "daily_life",
        },
        {
          en: "That's terrible! I'm so sorry to hear that.",
          bn: "এটা তো ভয়ানক! শুনে খুব দুঃখিত।",
          slotValues: { REACTION: "terrible" },
          topicArea: "daily_life",
        },
        {
          en: "That's wonderful news about your promotion!",
          bn: "তোমার প্রমোশনের এটা দারুণ খবর!",
          slotValues: { REACTION: "wonderful" },
          topicArea: "work",
        },
        {
          en: "That's unbelievable! I can't believe you won!",
          bn: "এটা তো অবিশ্বাস্য! তুমি জিতেছ বিশ্বাস করতে পারছি না!",
          slotValues: { REACTION: "unbelievable" },
          topicArea: "daily_life",
        },
        {
          en: "That's fantastic! You passed with flying colors!",
          bn: "এটা তো চমৎকার! তুমি দারুণ নম্বরে পাশ করেছ!",
          slotValues: { REACTION: "fantastic" },
          topicArea: "education",
        },
        {
          en: "That's awful! How did the accident happen?",
          bn: "এটা তো খুব খারাপ! দুর্ঘটনা কীভাবে হলো?",
          slotValues: { REACTION: "awful" },
          topicArea: "travel",
        },
        {
          en: "That's great news! Your health report is perfect!",
          bn: "এটা দারুণ খবর! তোমার স্বাস্থ্য রিপোর্ট নিখুঁত!",
          slotValues: { REACTION: "great" },
          topicArea: "health",
        },
        {
          en: "That's so exciting! A new baby!",
          bn: "কী উত্তেজনাপূর্ণ! নতুন বাচ্চা!",
          slotValues: { REACTION: "so exciting" },
          topicArea: "relationships",
        },
        {
          en: "That's incredible! What a deal you got!",
          bn: "এটা তো অসাধারণ! কী দারুণ দাম পেয়েছ!",
          slotValues: { REACTION: "incredible" },
          topicArea: "shopping",
        },
        {
          en: "That's shocking! I had no idea.",
          bn: "এটা তো চমকে দেওয়ার মতো! আমার ধারণাই ছিল না।",
          slotValues: { REACTION: "shocking" },
          topicArea: "daily_life",
        },
        {
          en: "That's disappointing. I was looking forward to the trip.",
          bn: "এটা হতাশাজনক। আমি ভ্রমণের অপেক্ষায় ছিলাম।",
          slotValues: { REACTION: "disappointing" },
          topicArea: "travel",
        },
        {
          en: "That's lovely! I'm happy for you both.",
          bn: "এটা তো চমৎকার! তোমাদের দুজনের জন্যই খুশি।",
          slotValues: { REACTION: "lovely" },
          topicArea: "relationships",
        },
        {
          en: "That's brilliant! You deserve the scholarship!",
          bn: "এটা তো দারুণ! তুমি স্কলারশিপ পাওয়ার যোগ্য!",
          slotValues: { REACTION: "brilliant" },
          topicArea: "education",
        },
        {
          en: "That's heartbreaking. I hope things get better.",
          bn: "এটা তো হৃদয়বিদারক। আশা করি পরিস্থিতি ভালো হবে।",
          slotValues: { REACTION: "heartbreaking" },
          topicArea: "health",
        },
        {
          en: "That's impressive! You closed the biggest deal this year!",
          bn: "এটা তো চিত্তাকর্ষক! তুমি এ বছরের সবচেয়ে বড় চুক্তি পেয়েছ!",
          slotValues: { REACTION: "impressive" },
          topicArea: "work",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "'That's + adjective' is the most natural way to react to news in English. Match the adjective to the positive or negative nature of the news.",
      usageNote_bn:
        "'That's + বিশেষণ' ইংরেজিতে খবরে সাড়া দেওয়ার সবচেয়ে স্বাভাবিক উপায়। খবরের ইতিবাচক বা নেতিবাচক প্রকৃতির সাথে বিশেষণ মেলান।",
    },
    {
      id: "K9.5",
      formula: "Have you heard? [NEWS]",
      formula_bn: "তুমি কি শুনেছ? [খবর]",
      patternName: "Spreading News",
      patternName_bn: "খবর ছড়ানো",
      slots: [
        {
          name: "NEWS",
          description: "The news being shared",
          description_bn: "যে খবর শেয়ার করা হচ্ছে",
          acceptedTypes: ["clause", "statement"],
          examples: [
            "They're building a new school.",
            "The prices went up again.",
            "She got a new job.",
          ],
        },
      ],
      examples: [
        {
          en: "Have you heard? They're building a new school nearby.",
          bn: "তুমি কি শুনেছ? কাছাকাছি নতুন স্কুল তৈরি হচ্ছে।",
          slotValues: {
            NEWS: "They're building a new school nearby.",
          },
          topicArea: "education",
        },
        {
          en: "Have you heard? The prices went up again.",
          bn: "তুমি কি শুনেছ? দাম আবার বেড়ে গেছে।",
          slotValues: { NEWS: "The prices went up again." },
          topicArea: "shopping",
        },
        {
          en: "Have you heard? She got a new job in Dubai.",
          bn: "তুমি কি শুনেছ? সে দুবাইতে নতুন চাকরি পেয়েছে।",
          slotValues: {
            NEWS: "She got a new job in Dubai.",
          },
          topicArea: "work",
        },
        {
          en: "Have you heard? They're opening a new food court.",
          bn: "তুমি কি শুনেছ? নতুন ফুড কোর্ট খুলছে।",
          slotValues: {
            NEWS: "They're opening a new food court.",
          },
          topicArea: "food",
        },
        {
          en: "Have you heard? The airport is getting an upgrade.",
          bn: "তুমি কি শুনেছ? বিমানবন্দর আপগ্রেড হচ্ছে।",
          slotValues: {
            NEWS: "The airport is getting an upgrade.",
          },
          topicArea: "travel",
        },
        {
          en: "Have you heard? There's a new vaccine available.",
          bn: "তুমি কি শুনেছ? নতুন ভ্যাকসিন পাওয়া যাচ্ছে।",
          slotValues: {
            NEWS: "There's a new vaccine available.",
          },
          topicArea: "health",
        },
        {
          en: "Have you heard? They got engaged!",
          bn: "তুমি কি শুনেছ? তাদের এনগেজমেন্ট হয়েছে!",
          slotValues: { NEWS: "They got engaged!" },
          topicArea: "relationships",
        },
        {
          en: "Have you heard? The company is hiring new people.",
          bn: "তুমি কি শুনেছ? কোম্পানি নতুন লোক নিচ্ছে।",
          slotValues: {
            NEWS: "The company is hiring new people.",
          },
          topicArea: "work",
        },
        {
          en: "Have you heard? The school is organizing a trip.",
          bn: "তুমি কি শুনেছ? স্কুল একটা ভ্রমণের আয়োজন করছে।",
          slotValues: {
            NEWS: "The school is organizing a trip.",
          },
          topicArea: "education",
        },
        {
          en: "Have you heard? The new bakery has amazing cakes.",
          bn: "তুমি কি শুনেছ? নতুন বেকারিতে দারুণ কেক আছে।",
          slotValues: {
            NEWS: "The new bakery has amazing cakes.",
          },
          topicArea: "food",
        },
        {
          en: "Have you heard? They canceled the holiday.",
          bn: "তুমি কি শুনেছ? তারা ছুটি বাতিল করেছে।",
          slotValues: { NEWS: "They canceled the holiday." },
          topicArea: "daily_life",
        },
        {
          en: "Have you heard? The marathon registration is open.",
          bn: "তুমি কি শুনেছ? ম্যারাথনে রেজিস্ট্রেশন শুরু হয়েছে।",
          slotValues: {
            NEWS: "The marathon registration is open.",
          },
          topicArea: "health",
        },
        {
          en: "Have you heard? The bridge is finally finished.",
          bn: "তুমি কি শুনেছ? সেতু অবশেষে শেষ হয়েছে।",
          slotValues: {
            NEWS: "The bridge is finally finished.",
          },
          topicArea: "travel",
        },
        {
          en: "Have you heard? There's a buy-one-get-one offer at the shop.",
          bn: "তুমি কি শুনেছ? দোকানে একটা কিনলে একটা ফ্রি অফার চলছে।",
          slotValues: {
            NEWS: "There's a buy-one-get-one offer at the shop.",
          },
          topicArea: "shopping",
        },
        {
          en: "Have you heard? Our old neighbors are moving back!",
          bn: "তুমি কি শুনেছ? আমাদের পুরনো প্রতিবেশীরা ফিরে আসছে!",
          slotValues: {
            NEWS: "Our old neighbors are moving back!",
          },
          topicArea: "relationships",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "'Have you heard?' is used to share news in a conversational way. It implies the news is recent and possibly surprising.",
      usageNote_bn:
        "'Have you heard?' কথোপকথনে খবর শেয়ার করতে ব্যবহৃত হয়। এটি বোঝায় যে খবরটি সাম্প্রতিক এবং সম্ভবত চমকপ্রদ।",
    },
  ],
};
