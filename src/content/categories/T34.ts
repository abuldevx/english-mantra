import { PatternCategory } from "@/types/pattern";

export const categoryT34: PatternCategory = {
  id: "T34",
  slug: "social-media-texting",
  name: "Social Media & Texting",
  name_bn: "সোশ্যাল মিডিয়া ও টেক্সটিং",
  description:
    "Modern English patterns for social media, texting, and online communication.",
  description_bn:
    "সোশ্যাল মিডিয়া, টেক্সটিং এবং অনলাইন যোগাযোগের জন্য আধুনিক ইংরেজি প্যাটার্ন।",
  icon: "📱",
  group: "T",
  groupName: "Situational Patterns",
  groupName_bn: "পরিস্থিতিগত প্যাটার্ন",
  difficulty: "beginner",
  patterns: [
    {
      id: "T34.1",
      formula: "Check out [THING]! / Just [PAST ACTION]!",
      formula_bn: "[জিনিস] দেখো! / এইমাত্র [কাজ] করলাম!",
      patternName: "Posting & Sharing",
      patternName_bn: "পোস্টিং ও শেয়ারিং",
      slots: [
        {
          name: "THING",
          description: "Something you want others to see or notice",
          description_bn: "এমন কিছু যা আপনি অন্যদের দেখাতে বা জানাতে চান",
          acceptedTypes: ["noun", "noun_phrase", "event"],
          examples: ["this sunset", "my new project", "this amazing recipe"],
        },
        {
          name: "PAST ACTION",
          description: "An action you recently completed and want to share",
          description_bn:
            "একটি কাজ যা আপনি সম্প্রতি সম্পন্ন করেছেন এবং শেয়ার করতে চান",
          acceptedTypes: ["verb_phrase"],
          examples: [
            "finished my first marathon",
            "launched my new project",
            "visited Paris",
          ],
        },
      ],
      examples: [
        {
          en: "Check out this sunset!",
          bn: "এই সূর্যাস্তটা দেখো!",
          slotValues: { THING: "this sunset" },
          topicArea: "daily_life",
        },
        {
          en: "Just finished my first marathon!",
          bn: "এইমাত্র আমার প্রথম ম্যারাথন শেষ করলাম!",
          slotValues: { PAST_ACTION: "finished my first marathon" },
          topicArea: "daily_life",
        },
        {
          en: "Look what I found!",
          bn: "দেখো আমি কী পেয়েছি!",
          slotValues: { THING: "what I found" },
          topicArea: "daily_life",
        },
        {
          en: "Sharing this amazing recipe!",
          bn: "এই অসাধারণ রেসিপিটা শেয়ার করছি!",
          slotValues: { THING: "this amazing recipe" },
          topicArea: "food",
        },
        {
          en: "Can't believe this happened!",
          bn: "বিশ্বাস করতে পারছি না এটা হয়েছে!",
          slotValues: { THING: "this happened" },
          topicArea: "daily_life",
        },
        {
          en: "So excited about this!",
          bn: "এটা নিয়ে খুব উত্তেজিত!",
          slotValues: { THING: "this" },
          topicArea: "daily_life",
        },
        {
          en: "Throwback to when we visited Paris!",
          bn: "প্যারিস ভ্রমণের সেই স্মৃতি!",
          slotValues: { PAST_ACTION: "visited Paris" },
          topicArea: "travel",
        },
        {
          en: "This made my day!",
          bn: "এটা আমার দিনটা সুন্দর করে দিল!",
          slotValues: { THING: "this" },
          topicArea: "daily_life",
        },
        {
          en: "Must try this place!",
          bn: "এই জায়গাটা অবশ্যই ঘুরে দেখতে হবে!",
          slotValues: { THING: "this place" },
          topicArea: "travel",
        },
        {
          en: "New post alert!",
          bn: "নতুন পোস্ট এসেছে!",
          slotValues: { THING: "new post" },
          topicArea: "daily_life",
        },
        {
          en: "Happy to announce that I got promoted!",
          bn: "আনন্দের সাথে জানাচ্ছি যে আমি প্রমোশন পেয়েছি!",
          slotValues: { PAST_ACTION: "got promoted" },
          topicArea: "work",
        },
        {
          en: "Here's a quick update!",
          bn: "এই যে একটা ছোট আপডেট!",
          slotValues: { THING: "a quick update" },
          topicArea: "daily_life",
        },
        {
          en: "Feeling blessed today!",
          bn: "আজ খুব ধন্য বোধ করছি!",
          slotValues: { THING: "blessed" },
          topicArea: "daily_life",
        },
        {
          en: "Big news everyone!",
          bn: "সবার জন্য বড় খবর!",
          slotValues: { THING: "big news" },
          topicArea: "daily_life",
        },
        {
          en: "Just launched my new project!",
          bn: "এইমাত্র আমার নতুন প্রজেক্ট লঞ্চ করলাম!",
          slotValues: { PAST_ACTION: "launched my new project" },
          topicArea: "work",
        },
      ],
      formality: "casual",
      difficulty: "beginner",
      usageNote:
        "These are common patterns used when posting on social media platforms like Facebook, Instagram, or Twitter. They are casual and expressive.",
      usageNote_bn:
        "ফেসবুক, ইনস্টাগ্রাম বা টুইটারের মতো সোশ্যাল মিডিয়া প্ল্যাটফর্মে পোস্ট করার সময় এই প্যাটার্নগুলো সাধারণত ব্যবহৃত হয়। এগুলো অনানুষ্ঠানিক ও আবেগপূর্ণ।",
      combinableWith: ["T34.2"],
      banglaStructureMap:
        "[জিনিস] দেখো (Object + Verb) / এইমাত্র [কাজ] করলাম (Adverb + Object + Verb)",
    },
    {
      id: "T34.2",
      formula: "This is [REACTION]! / [PERSON], you look [ADJECTIVE]!",
      formula_bn: "এটা [প্রতিক্রিয়া]! / [ব্যক্তি], তোমাকে [বিশেষণ] লাগছে!",
      patternName: "Commenting & Reacting",
      patternName_bn: "মন্তব্য ও প্রতিক্রিয়া",
      slots: [
        {
          name: "REACTION",
          description: "An adjective or exclamation expressing your reaction",
          description_bn:
            "আপনার প্রতিক্রিয়া প্রকাশকারী একটি বিশেষণ বা বিস্ময়সূচক শব্দ",
          acceptedTypes: ["adjective", "exclamation"],
          examples: ["amazing", "incredible", "beautiful"],
        },
        {
          name: "ADJECTIVE",
          description:
            "A positive adjective to compliment someone's appearance or work",
          description_bn:
            "কারো চেহারা বা কাজের প্রশংসা করতে একটি ইতিবাচক বিশেষণ",
          acceptedTypes: ["adjective"],
          examples: ["stunning", "great", "fantastic"],
        },
      ],
      examples: [
        {
          en: "This is amazing!",
          bn: "এটা অসাধারণ!",
          slotValues: { REACTION: "amazing" },
          topicArea: "daily_life",
        },
        {
          en: "Great shot!",
          bn: "দারুণ ছবি!",
          slotValues: { REACTION: "great" },
          topicArea: "daily_life",
        },
        {
          en: "Love this!",
          bn: "এটা ভালো লাগলো!",
          slotValues: { REACTION: "love" },
          topicArea: "daily_life",
        },
        {
          en: "So true!",
          bn: "একদম সত্যি!",
          slotValues: { REACTION: "true" },
          topicArea: "daily_life",
        },
        {
          en: "Congratulations!",
          bn: "অভিনন্দন!",
          slotValues: { REACTION: "congratulations" },
          topicArea: "daily_life",
        },
        {
          en: "Beautiful!",
          bn: "সুন্দর!",
          slotValues: { REACTION: "beautiful" },
          topicArea: "daily_life",
        },
        {
          en: "You nailed it!",
          bn: "তুমি দারুণ করেছো!",
          slotValues: { REACTION: "nailed it" },
          topicArea: "work",
        },
        {
          en: "I totally agree!",
          bn: "আমি পুরোপুরি একমত!",
          slotValues: { REACTION: "agree" },
          topicArea: "daily_life",
        },
        {
          en: "This is so relatable!",
          bn: "এটা এতটাই মিলে যায়!",
          slotValues: { REACTION: "relatable" },
          topicArea: "daily_life",
        },
        {
          en: "Haha, so funny!",
          bn: "হাহা, খুব মজার!",
          slotValues: { REACTION: "funny" },
          topicArea: "daily_life",
        },
        {
          en: "Wow, that's impressive!",
          bn: "ওয়াও, এটা চমৎকার!",
          slotValues: { REACTION: "impressive" },
          topicArea: "daily_life",
        },
        {
          en: "You look stunning!",
          bn: "তোমাকে অসাধারণ লাগছে!",
          slotValues: { ADJECTIVE: "stunning" },
          topicArea: "relationships",
        },
        {
          en: "Keep it up!",
          bn: "এভাবে চালিয়ে যাও!",
          slotValues: { REACTION: "keep it up" },
          topicArea: "work",
        },
        {
          en: "Goals!",
          bn: "লক্ষ্য!",
          slotValues: { REACTION: "goals" },
          topicArea: "daily_life",
        },
        {
          en: "Well said!",
          bn: "সুন্দর বলেছো!",
          slotValues: { REACTION: "well said" },
          topicArea: "daily_life",
        },
      ],
      formality: "casual",
      difficulty: "beginner",
      usageNote:
        "Short, expressive comments commonly used on social media posts. These are quick reactions to show appreciation or agreement.",
      usageNote_bn:
        "সোশ্যাল মিডিয়া পোস্টে সাধারণত ব্যবহৃত সংক্ষিপ্ত, আবেগপূর্ণ মন্তব্য। এগুলো প্রশংসা বা একমত প্রকাশের দ্রুত প্রতিক্রিয়া।",
      combinableWith: ["T34.1"],
      banglaStructureMap:
        "এটা (Subject) + [প্রতিক্রিয়া] (Adjective) / [ব্যক্তি] (Vocative) + তোমাকে [বিশেষণ] লাগছে (Complement + Verb)",
    },
    {
      id: "T34.3",
      formula: "Hey, [MESSAGE]",
      formula_bn: "হেই, [বার্তা]",
      patternName: "Direct Messages",
      patternName_bn: "সরাসরি বার্তা",
      slots: [
        {
          name: "MESSAGE",
          description:
            "A short message for a private or direct conversation online",
          description_bn:
            "অনলাইনে ব্যক্তিগত বা সরাসরি কথোপকথনের জন্য একটি সংক্ষিপ্ত বার্তা",
          acceptedTypes: ["sentence", "phrase"],
          examples: [
            "are you free tonight?",
            "just wanted to check in",
            "can we talk later?",
          ],
        },
      ],
      examples: [
        {
          en: "Hey, are you free tonight?",
          bn: "হেই, তুমি কি আজ রাতে ফ্রি?",
          slotValues: { MESSAGE: "are you free tonight?" },
          topicArea: "relationships",
        },
        {
          en: "Just wanted to check in.",
          bn: "শুধু খোঁজ নিতে চাইছিলাম।",
          slotValues: { MESSAGE: "just wanted to check in" },
          topicArea: "relationships",
        },
        {
          en: "Did you see my message?",
          bn: "তুমি কি আমার মেসেজটা দেখেছো?",
          slotValues: { MESSAGE: "did you see my message?" },
          topicArea: "daily_life",
        },
        {
          en: "Can we talk later?",
          bn: "আমরা কি পরে কথা বলতে পারি?",
          slotValues: { MESSAGE: "can we talk later?" },
          topicArea: "relationships",
        },
        {
          en: "Thanks for connecting!",
          bn: "যুক্ত হওয়ার জন্য ধন্যবাদ!",
          slotValues: { MESSAGE: "thanks for connecting!" },
          topicArea: "work",
        },
        {
          en: "Sorry for the late reply.",
          bn: "দেরিতে উত্তর দেওয়ার জন্য দুঃখিত।",
          slotValues: { MESSAGE: "sorry for the late reply" },
          topicArea: "daily_life",
        },
        {
          en: "Are you still coming?",
          bn: "তুমি কি এখনো আসছো?",
          slotValues: { MESSAGE: "are you still coming?" },
          topicArea: "daily_life",
        },
        {
          en: "I'll send you the link.",
          bn: "আমি তোমাকে লিংকটা পাঠাচ্ছি।",
          slotValues: { MESSAGE: "I'll send you the link" },
          topicArea: "daily_life",
        },
        {
          en: "Let me get back to you.",
          bn: "আমাকে পরে জানাতে দাও।",
          slotValues: { MESSAGE: "let me get back to you" },
          topicArea: "work",
        },
        {
          en: "That sounds great!",
          bn: "সেটা দারুণ শোনাচ্ছে!",
          slotValues: { MESSAGE: "that sounds great!" },
          topicArea: "daily_life",
        },
        {
          en: "I'm running late.",
          bn: "আমার দেরি হচ্ছে।",
          slotValues: { MESSAGE: "I'm running late" },
          topicArea: "daily_life",
        },
        {
          en: "Can you send me the address?",
          bn: "তুমি কি আমাকে ঠিকানাটা পাঠাতে পারো?",
          slotValues: { MESSAGE: "can you send me the address?" },
          topicArea: "travel",
        },
        {
          en: "Let's catch up soon.",
          bn: "চলো শীঘ্রই দেখা করি।",
          slotValues: { MESSAGE: "let's catch up soon" },
          topicArea: "relationships",
        },
        {
          en: "I forwarded your message.",
          bn: "আমি তোমার মেসেজটা ফরওয়ার্ড করেছি।",
          slotValues: { MESSAGE: "I forwarded your message" },
          topicArea: "work",
        },
        {
          en: "Talk to you later!",
          bn: "পরে কথা হবে!",
          slotValues: { MESSAGE: "talk to you later!" },
          topicArea: "relationships",
        },
      ],
      formality: "casual",
      difficulty: "beginner",
      usageNote:
        "Common phrases used in direct messages on social media or messaging apps. These are informal and conversational.",
      usageNote_bn:
        "সোশ্যাল মিডিয়া বা মেসেজিং অ্যাপে ডাইরেক্ট মেসেজে ব্যবহৃত সাধারণ বাক্য। এগুলো অনানুষ্ঠানিক ও কথোপকথনমূলক।",
      combinableWith: ["T34.1"],
      banglaStructureMap:
        "হেই (Greeting) + [বার্তা] (Message content)",
    },
    {
      id: "T34.4",
      formula: "[ABBREVIATION] means [FULL FORM]",
      formula_bn: "[সংক্ষেপ] মানে হলো [পূর্ণ রূপ]",
      patternName: "Common Abbreviations",
      patternName_bn: "সাধারণ সংক্ষেপণ",
      slots: [
        {
          name: "ABBREVIATION",
          description:
            "A common internet or texting abbreviation",
          description_bn:
            "একটি সাধারণ ইন্টারনেট বা টেক্সটিং সংক্ষেপণ",
          acceptedTypes: ["abbreviation"],
          examples: ["BTW", "IMO", "ASAP"],
        },
        {
          name: "FULL FORM",
          description: "The expanded meaning of the abbreviation",
          description_bn: "সংক্ষেপণটির পূর্ণ অর্থ",
          acceptedTypes: ["phrase"],
          examples: [
            "by the way",
            "in my opinion",
            "as soon as possible",
          ],
        },
      ],
      examples: [
        {
          en: "BTW means by the way.",
          bn: "BTW মানে হলো by the way (যাই হোক)।",
          slotValues: { ABBREVIATION: "BTW", FULL_FORM: "by the way" },
          topicArea: "daily_life",
        },
        {
          en: "IMO means in my opinion.",
          bn: "IMO মানে হলো in my opinion (আমার মতে)।",
          slotValues: { ABBREVIATION: "IMO", FULL_FORM: "in my opinion" },
          topicArea: "daily_life",
        },
        {
          en: "ASAP means as soon as possible.",
          bn: "ASAP মানে হলো as soon as possible (যত দ্রুত সম্ভব)।",
          slotValues: {
            ABBREVIATION: "ASAP",
            FULL_FORM: "as soon as possible",
          },
          topicArea: "work",
        },
        {
          en: "FYI means for your information.",
          bn: "FYI মানে হলো for your information (আপনার জানার জন্য)।",
          slotValues: {
            ABBREVIATION: "FYI",
            FULL_FORM: "for your information",
          },
          topicArea: "work",
        },
        {
          en: "TBH means to be honest.",
          bn: "TBH মানে হলো to be honest (সত্যি বলতে)।",
          slotValues: { ABBREVIATION: "TBH", FULL_FORM: "to be honest" },
          topicArea: "daily_life",
        },
        {
          en: "IDK means I don't know.",
          bn: "IDK মানে হলো I don't know (আমি জানি না)।",
          slotValues: { ABBREVIATION: "IDK", FULL_FORM: "I don't know" },
          topicArea: "daily_life",
        },
        {
          en: "OMG means oh my God.",
          bn: "OMG মানে হলো oh my God (হায় খোদা)।",
          slotValues: { ABBREVIATION: "OMG", FULL_FORM: "oh my God" },
          topicArea: "daily_life",
        },
        {
          en: "BRB means be right back.",
          bn: "BRB মানে হলো be right back (এখনই আসছি)।",
          slotValues: { ABBREVIATION: "BRB", FULL_FORM: "be right back" },
          topicArea: "daily_life",
        },
        {
          en: "LOL means laughing out loud.",
          bn: "LOL মানে হলো laughing out loud (জোরে হাসা)।",
          slotValues: {
            ABBREVIATION: "LOL",
            FULL_FORM: "laughing out loud",
          },
          topicArea: "daily_life",
        },
        {
          en: "DM means direct message.",
          bn: "DM মানে হলো direct message (সরাসরি বার্তা)।",
          slotValues: { ABBREVIATION: "DM", FULL_FORM: "direct message" },
          topicArea: "daily_life",
        },
        {
          en: "FOMO means fear of missing out.",
          bn: "FOMO মানে হলো fear of missing out (বাদ পড়ার ভয়)।",
          slotValues: {
            ABBREVIATION: "FOMO",
            FULL_FORM: "fear of missing out",
          },
          topicArea: "daily_life",
        },
        {
          en: "TL;DR means too long, didn't read.",
          bn: "TL;DR মানে হলো too long, didn't read (অনেক লম্বা, পড়িনি)।",
          slotValues: {
            ABBREVIATION: "TL;DR",
            FULL_FORM: "too long, didn't read",
          },
          topicArea: "daily_life",
        },
        {
          en: "NVM means never mind.",
          bn: "NVM মানে হলো never mind (কিছু মনে করো না)।",
          slotValues: { ABBREVIATION: "NVM", FULL_FORM: "never mind" },
          topicArea: "daily_life",
        },
        {
          en: "SMH means shaking my head.",
          bn: "SMH মানে হলো shaking my head (মাথা নাড়ানো/হতাশা)।",
          slotValues: {
            ABBREVIATION: "SMH",
            FULL_FORM: "shaking my head",
          },
          topicArea: "daily_life",
        },
        {
          en: "GOAT means greatest of all time.",
          bn: "GOAT মানে হলো greatest of all time (সর্বকালের সেরা)।",
          slotValues: {
            ABBREVIATION: "GOAT",
            FULL_FORM: "greatest of all time",
          },
          topicArea: "daily_life",
        },
      ],
      formality: "casual",
      difficulty: "beginner",
      usageNote:
        "These abbreviations are widely used in texting, social media, and online chats. Understanding them is essential for modern digital communication.",
      usageNote_bn:
        "এই সংক্ষেপণগুলো টেক্সটিং, সোশ্যাল মিডিয়া এবং অনলাইন চ্যাটে ব্যাপকভাবে ব্যবহৃত হয়। আধুনিক ডিজিটাল যোগাযোগের জন্য এগুলো বোঝা অপরিহার্য।",
      combinableWith: ["T34.3"],
      banglaStructureMap:
        "[সংক্ষেপ] (Subject) + মানে হলো (Copula) + [পূর্ণ রূপ] (Complement)",
    },
    {
      id: "T34.5",
      formula: "Please [DO/DON'T] [ACTION] online",
      formula_bn: "অনুগ্রহ করে অনলাইনে [কাজ] [করুন/করবেন না]",
      patternName: "Online Etiquette",
      patternName_bn: "অনলাইন শিষ্টাচার",
      slots: [
        {
          name: "ACTION",
          description:
            "An action related to respectful or appropriate online behavior",
          description_bn:
            "সম্মানজনক বা উপযুক্ত অনলাইন আচরণ সম্পর্কিত একটি কাজ",
          acceptedTypes: ["verb_phrase"],
          examples: [
            "be respectful to others",
            "share without permission",
            "give credit to the creator",
          ],
        },
      ],
      examples: [
        {
          en: "Please be respectful to others online.",
          bn: "অনুগ্রহ করে অনলাইনে অন্যদের প্রতি সম্মানজনক হোন।",
          slotValues: { ACTION: "be respectful to others" },
          topicArea: "daily_life",
        },
        {
          en: "Please don't share someone's photo without permission.",
          bn: "অনুগ্রহ করে অনুমতি ছাড়া কারো ছবি শেয়ার করবেন না।",
          slotValues: {
            ACTION: "share someone's photo without permission",
          },
          topicArea: "daily_life",
        },
        {
          en: "Please give credit when you share someone's work.",
          bn: "অনুগ্রহ করে কারো কাজ শেয়ার করার সময় ক্রেডিট দিন।",
          slotValues: { ACTION: "give credit when you share someone's work" },
          topicArea: "work",
        },
        {
          en: "Please don't spam people with messages.",
          bn: "অনুগ্রহ করে মানুষদের মেসেজ দিয়ে বিরক্ত করবেন না।",
          slotValues: { ACTION: "spam people with messages" },
          topicArea: "daily_life",
        },
        {
          en: "Please think before you post something.",
          bn: "অনুগ্রহ করে কিছু পোস্ট করার আগে ভাবুন।",
          slotValues: { ACTION: "think before you post something" },
          topicArea: "daily_life",
        },
        {
          en: "Please don't spread false information online.",
          bn: "অনুগ্রহ করে অনলাইনে ভুল তথ্য ছড়াবেন না।",
          slotValues: { ACTION: "spread false information" },
          topicArea: "daily_life",
        },
        {
          en: "Please be careful with your tone in messages.",
          bn: "অনুগ্রহ করে মেসেজে আপনার কথার ধরন সম্পর্কে সতর্ক থাকুন।",
          slotValues: { ACTION: "be careful with your tone in messages" },
          topicArea: "daily_life",
        },
        {
          en: "Please ask before adding someone to a group.",
          bn: "অনুগ্রহ করে কাউকে গ্রুপে যোগ করার আগে জিজ্ঞেস করুন।",
          slotValues: { ACTION: "ask before adding someone to a group" },
          topicArea: "daily_life",
        },
        {
          en: "Please don't leave negative comments without reason.",
          bn: "অনুগ্রহ করে কারণ ছাড়া নেতিবাচক মন্তব্য করবেন না।",
          slotValues: {
            ACTION: "leave negative comments without reason",
          },
          topicArea: "daily_life",
        },
        {
          en: "Please respect other people's privacy online.",
          bn: "অনুগ্রহ করে অনলাইনে অন্যদের গোপনীয়তাকে সম্মান করুন।",
          slotValues: { ACTION: "respect other people's privacy" },
          topicArea: "daily_life",
        },
        {
          en: "Please don't share personal information publicly.",
          bn: "অনুগ্রহ করে ব্যক্তিগত তথ্য প্রকাশ্যে শেয়ার করবেন না।",
          slotValues: { ACTION: "share personal information publicly" },
          topicArea: "daily_life",
        },
        {
          en: "Please report any abusive content you see.",
          bn: "অনুগ্রহ করে কোনো আপত্তিকর বিষয়বস্তু দেখলে রিপোর্ট করুন।",
          slotValues: { ACTION: "report any abusive content you see" },
          topicArea: "daily_life",
        },
        {
          en: "Please don't engage with trolls online.",
          bn: "অনুগ্রহ করে অনলাইনে ট্রলদের সাথে জড়াবেন না।",
          slotValues: { ACTION: "engage with trolls" },
          topicArea: "daily_life",
        },
        {
          en: "Please use appropriate language in your posts.",
          bn: "অনুগ্রহ করে আপনার পোস্টে উপযুক্ত ভাষা ব্যবহার করুন।",
          slotValues: { ACTION: "use appropriate language in your posts" },
          topicArea: "daily_life",
        },
        {
          en: "Please don't copy someone's content without asking.",
          bn: "অনুগ্রহ করে না জিজ্ঞেস করে কারো কন্টেন্ট কপি করবেন না।",
          slotValues: {
            ACTION: "copy someone's content without asking",
          },
          topicArea: "work",
        },
      ],
      formality: "polite",
      difficulty: "beginner",
      usageNote:
        "These patterns teach respectful online behavior and digital etiquette. They are important for maintaining a positive online presence.",
      usageNote_bn:
        "এই প্যাটার্নগুলো সম্মানজনক অনলাইন আচরণ এবং ডিজিটাল শিষ্টাচার শেখায়। একটি ইতিবাচক অনলাইন উপস্থিতি বজায় রাখার জন্য এগুলো গুরুত্বপূর্ণ।",
      combinableWith: ["T34.3"],
      banglaStructureMap:
        "অনুগ্রহ করে (Polite marker) + অনলাইনে (Locative) + [কাজ] (Action) + [করুন/করবেন না] (Verb + Polite imperative)",
    },
  ],
};
