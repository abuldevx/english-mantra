import { PatternCategory } from "@/types/pattern";

export const categoryK3: PatternCategory = {
  id: "K3",
  slug: "quoting-directly",
  name: "Quoting Directly",
  name_bn: "সরাসরি উদ্ধৃতি",
  description:
    "Learn to quote someone's exact words and attribute statements to people.",
  description_bn:
    "কারও সঠিক কথা উদ্ধৃত করতে এবং বক্তব্য কাউকে আরোপ করতে শিখুন।",
  icon: "💬",
  group: "K",
  groupName: "Reported Speech & Communication",
  groupName_bn: "পরোক্ষ উক্তি ও যোগাযোগ",
  difficulty: "intermediate",
  patterns: [
    {
      id: "K3.1",
      formula: "[PERSON] said, \"[QUOTE]\"",
      formula_bn: "[ব্যক্তি] বলেছে, \"[উদ্ধৃতি]\"",
      patternName: "Direct Quote with 'Said'",
      patternName_bn: "'বলেছে' দিয়ে সরাসরি উদ্ধৃতি",
      slots: [
        {
          name: "PERSON",
          description: "The person being quoted",
          description_bn: "যে ব্যক্তিকে উদ্ধৃত করা হচ্ছে",
          acceptedTypes: ["person"],
          examples: ["She", "He", "The boss", "My teacher"],
        },
        {
          name: "QUOTE",
          description: "The exact words spoken",
          description_bn: "বলা সঠিক কথা",
          acceptedTypes: ["statement"],
          examples: [
            "I'll be there at five.",
            "Don't worry about it.",
            "This is amazing!",
          ],
        },
      ],
      examples: [
        {
          en: "She said, \"I'll be there at five.\"",
          bn: "সে বলেছে, \"আমি পাঁচটায় সেখানে থাকব।\"",
          slotValues: {
            PERSON: "She",
            QUOTE: "I'll be there at five.",
          },
          topicArea: "daily_life",
        },
        {
          en: "He said, \"Don't worry about it.\"",
          bn: "সে বলেছে, \"এটা নিয়ে চিন্তা করো না।\"",
          slotValues: { PERSON: "He", QUOTE: "Don't worry about it." },
          topicArea: "daily_life",
        },
        {
          en: "The boss said, \"We need to finish this by Friday.\"",
          bn: "বস বলেছেন, \"শুক্রবারের মধ্যে আমাদের এটা শেষ করতে হবে।\"",
          slotValues: {
            PERSON: "The boss",
            QUOTE: "We need to finish this by Friday.",
          },
          topicArea: "work",
        },
        {
          en: "My teacher said, \"Practice makes perfect.\"",
          bn: "আমার শিক্ষক বলেছেন, \"অনুশীলনে দক্ষতা আসে।\"",
          slotValues: {
            PERSON: "My teacher",
            QUOTE: "Practice makes perfect.",
          },
          topicArea: "education",
        },
        {
          en: "She said, \"The food here is delicious!\"",
          bn: "সে বলেছে, \"এখানকার খাবার অসাধারণ!\"",
          slotValues: {
            PERSON: "She",
            QUOTE: "The food here is delicious!",
          },
          topicArea: "food",
        },
        {
          en: "He said, \"I'm feeling much better now.\"",
          bn: "সে বলেছে, \"আমি এখন অনেক ভালো বোধ করছি।\"",
          slotValues: {
            PERSON: "He",
            QUOTE: "I'm feeling much better now.",
          },
          topicArea: "health",
        },
        {
          en: "My mom said, \"Call me when you get there.\"",
          bn: "আমার মা বলেছেন, \"সেখানে পৌঁছে আমাকে ফোন করো।\"",
          slotValues: {
            PERSON: "My mom",
            QUOTE: "Call me when you get there.",
          },
          topicArea: "relationships",
        },
        {
          en: "The doctor said, \"You should rest for a week.\"",
          bn: "ডাক্তার বলেছেন, \"আপনার এক সপ্তাহ বিশ্রাম নেওয়া উচিত।\"",
          slotValues: {
            PERSON: "The doctor",
            QUOTE: "You should rest for a week.",
          },
          topicArea: "health",
        },
        {
          en: "She said, \"I've never seen such a beautiful place.\"",
          bn: "সে বলেছে, \"আমি এত সুন্দর জায়গা কখনো দেখিনি।\"",
          slotValues: {
            PERSON: "She",
            QUOTE: "I've never seen such a beautiful place.",
          },
          topicArea: "travel",
        },
        {
          en: "He said, \"Let me handle this.\"",
          bn: "সে বলেছে, \"এটা আমাকে সামলাতে দাও।\"",
          slotValues: { PERSON: "He", QUOTE: "Let me handle this." },
          topicArea: "work",
        },
        {
          en: "The waiter said, \"Your table is ready.\"",
          bn: "ওয়েটার বলেছে, \"আপনার টেবিল তৈরি।\"",
          slotValues: {
            PERSON: "The waiter",
            QUOTE: "Your table is ready.",
          },
          topicArea: "food",
        },
        {
          en: "She said, \"I'm so proud of you!\"",
          bn: "সে বলেছে, \"আমি তোমাকে নিয়ে খুব গর্বিত!\"",
          slotValues: {
            PERSON: "She",
            QUOTE: "I'm so proud of you!",
          },
          topicArea: "relationships",
        },
        {
          en: "The guide said, \"This temple is 500 years old.\"",
          bn: "গাইড বলেছেন, \"এই মন্দিরটি ৫০০ বছরের পুরনো।\"",
          slotValues: {
            PERSON: "The guide",
            QUOTE: "This temple is 500 years old.",
          },
          topicArea: "travel",
        },
        {
          en: "My friend said, \"You should try this store.\"",
          bn: "আমার বন্ধু বলেছে, \"তোমার এই দোকানে চেষ্টা করা উচিত।\"",
          slotValues: {
            PERSON: "My friend",
            QUOTE: "You should try this store.",
          },
          topicArea: "shopping",
        },
        {
          en: "The professor said, \"The exam will cover chapters one to five.\"",
          bn: "প্রফেসর বলেছেন, \"পরীক্ষায় প্রথম থেকে পঞ্চম অধ্যায় আসবে।\"",
          slotValues: {
            PERSON: "The professor",
            QUOTE: "The exam will cover chapters one to five.",
          },
          topicArea: "education",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "Direct quotes use the speaker's exact words inside quotation marks. The reporting verb usually comes before or after the quote.",
      usageNote_bn:
        "সরাসরি উদ্ধৃতিতে উদ্ধৃতি চিহ্নের ভিতরে বক্তার সঠিক কথা ব্যবহার হয়। রিপোর্টিং ক্রিয়া সাধারণত উদ্ধৃতির আগে বা পরে আসে।",
    },
    {
      id: "K3.2",
      formula: "According to [PERSON], [CLAUSE]",
      formula_bn: "[ব্যক্তি]-র মতে, [উপবাক্য]",
      patternName: "Attributing with 'According to'",
      patternName_bn: "'মতে' দিয়ে আরোপ করা",
      slots: [
        {
          name: "PERSON",
          description: "The source of the information",
          description_bn: "তথ্যের উৎস",
          acceptedTypes: ["person"],
          examples: [
            "the news",
            "my doctor",
            "the weather report",
            "experts",
          ],
        },
        {
          name: "CLAUSE",
          description: "The information attributed to the source",
          description_bn: "উৎসকে আরোপিত তথ্য",
          acceptedTypes: ["clause"],
          examples: [
            "the economy is improving",
            "we should drink more water",
            "it will rain tomorrow",
          ],
        },
      ],
      examples: [
        {
          en: "According to the news, the economy is improving.",
          bn: "খবর অনুযায়ী, অর্থনীতির উন্নতি হচ্ছে।",
          slotValues: {
            PERSON: "the news",
            CLAUSE: "the economy is improving",
          },
          topicArea: "daily_life",
        },
        {
          en: "According to my doctor, I should exercise more.",
          bn: "আমার ডাক্তারের মতে, আমার আরও ব্যায়াম করা উচিত।",
          slotValues: {
            PERSON: "my doctor",
            CLAUSE: "I should exercise more",
          },
          topicArea: "health",
        },
        {
          en: "According to the weather report, it will rain tomorrow.",
          bn: "আবহাওয়ার পূর্বাভাস অনুযায়ী, আগামীকাল বৃষ্টি হবে।",
          slotValues: {
            PERSON: "the weather report",
            CLAUSE: "it will rain tomorrow",
          },
          topicArea: "daily_life",
        },
        {
          en: "According to experts, learning a language takes time.",
          bn: "বিশেষজ্ঞদের মতে, ভাষা শেখায় সময় লাগে।",
          slotValues: {
            PERSON: "experts",
            CLAUSE: "learning a language takes time",
          },
          topicArea: "education",
        },
        {
          en: "According to my colleague, the meeting has been postponed.",
          bn: "আমার সহকর্মীর মতে, মিটিং স্থগিত করা হয়েছে।",
          slotValues: {
            PERSON: "my colleague",
            CLAUSE: "the meeting has been postponed",
          },
          topicArea: "work",
        },
        {
          en: "According to the recipe, you need two cups of flour.",
          bn: "রেসিপি অনুযায়ী, দুই কাপ ময়দা লাগবে।",
          slotValues: {
            PERSON: "the recipe",
            CLAUSE: "you need two cups of flour",
          },
          topicArea: "food",
        },
        {
          en: "According to the reviews, this hotel is excellent.",
          bn: "রিভিউ অনুযায়ী, এই হোটেলটি চমৎকার।",
          slotValues: {
            PERSON: "the reviews",
            CLAUSE: "this hotel is excellent",
          },
          topicArea: "travel",
        },
        {
          en: "According to my teacher, grammar is very important.",
          bn: "আমার শিক্ষকের মতে, ব্যাকরণ খুবই গুরুত্বপূর্ণ।",
          slotValues: {
            PERSON: "my teacher",
            CLAUSE: "grammar is very important",
          },
          topicArea: "education",
        },
        {
          en: "According to the schedule, the bus leaves at 8 AM.",
          bn: "সময়সূচি অনুযায়ী, বাস সকাল ৮টায় ছাড়বে।",
          slotValues: {
            PERSON: "the schedule",
            CLAUSE: "the bus leaves at 8 AM",
          },
          topicArea: "travel",
        },
        {
          en: "According to my friend, the store has a big sale.",
          bn: "আমার বন্ধুর মতে, দোকানে বড় সেল চলছে।",
          slotValues: {
            PERSON: "my friend",
            CLAUSE: "the store has a big sale",
          },
          topicArea: "shopping",
        },
        {
          en: "According to the manager, the office will close early today.",
          bn: "ম্যানেজারের মতে, আজ অফিস তাড়াতাড়ি বন্ধ হবে।",
          slotValues: {
            PERSON: "the manager",
            CLAUSE: "the office will close early today",
          },
          topicArea: "work",
        },
        {
          en: "According to the nutritionist, we should eat more vegetables.",
          bn: "পুষ্টিবিদের মতে, আমাদের বেশি সবজি খাওয়া উচিত।",
          slotValues: {
            PERSON: "the nutritionist",
            CLAUSE: "we should eat more vegetables",
          },
          topicArea: "food",
        },
        {
          en: "According to my sister, the movie was really boring.",
          bn: "আমার বোনের মতে, সিনেমাটা সত্যিই বিরক্তিকর ছিল।",
          slotValues: {
            PERSON: "my sister",
            CLAUSE: "the movie was really boring",
          },
          topicArea: "daily_life",
        },
        {
          en: "According to the pharmacist, this medicine has no side effects.",
          bn: "ফার্মাসিস্টের মতে, এই ওষুধের কোনো পার্শ্বপ্রতিক্রিয়া নেই।",
          slotValues: {
            PERSON: "the pharmacist",
            CLAUSE: "this medicine has no side effects",
          },
          topicArea: "health",
        },
        {
          en: "According to the label, this product is made in Bangladesh.",
          bn: "লেবেল অনুযায়ী, এই পণ্যটি বাংলাদেশে তৈরি।",
          slotValues: {
            PERSON: "the label",
            CLAUSE: "this product is made in Bangladesh",
          },
          topicArea: "shopping",
        },
      ],
      formality: "polite",
      difficulty: "intermediate",
      usageNote:
        "'According to' attributes information to a source without saying whether you agree or disagree.",
      usageNote_bn:
        "'According to' আপনি একমত বা দ্বিমত কিনা না বলে তথ্যকে একটি উৎসে আরোপ করে।",
    },
    {
      id: "K3.3",
      formula: "As [PERSON] put it, \"[QUOTE]\"",
      formula_bn: "[ব্যক্তি] যেমন বলেছে, \"[উদ্ধৃতি]\"",
      patternName: "Quoting with 'As Someone Put It'",
      patternName_bn: "'যেমন বলেছে' দিয়ে উদ্ধৃতি",
      slots: [
        {
          name: "PERSON",
          description: "The person being quoted",
          description_bn: "যে ব্যক্তিকে উদ্ধৃত করা হচ্ছে",
          acceptedTypes: ["person"],
          examples: ["she", "he", "my grandfather", "the speaker"],
        },
        {
          name: "QUOTE",
          description: "The memorable or notable words spoken",
          description_bn: "বলা স্মরণীয় বা উল্লেখযোগ্য কথা",
          acceptedTypes: ["statement"],
          examples: [
            "Actions speak louder than words.",
            "Life is too short to worry.",
            "Every problem has a solution.",
          ],
        },
      ],
      examples: [
        {
          en: "As she put it, \"Life is too short to worry.\"",
          bn: "সে যেমন বলেছে, \"জীবন এত ছোট যে চিন্তা করার সময় নেই।\"",
          slotValues: {
            PERSON: "she",
            QUOTE: "Life is too short to worry.",
          },
          topicArea: "daily_life",
        },
        {
          en: "As my grandfather put it, \"Hard work never goes to waste.\"",
          bn: "আমার দাদা যেমন বলতেন, \"পরিশ্রম কখনো বৃথা যায় না।\"",
          slotValues: {
            PERSON: "my grandfather",
            QUOTE: "Hard work never goes to waste.",
          },
          topicArea: "work",
        },
        {
          en: "As the teacher put it, \"There are no stupid questions.\"",
          bn: "শিক্ষক যেমন বলেছেন, \"কোনো বোকা প্রশ্ন নেই।\"",
          slotValues: {
            PERSON: "the teacher",
            QUOTE: "There are no stupid questions.",
          },
          topicArea: "education",
        },
        {
          en: "As he put it, \"You only live once.\"",
          bn: "সে যেমন বলেছে, \"জীবন একবারই পাওয়া যায়।\"",
          slotValues: {
            PERSON: "he",
            QUOTE: "You only live once.",
          },
          topicArea: "daily_life",
        },
        {
          en: "As the doctor put it, \"Prevention is better than cure.\"",
          bn: "ডাক্তার যেমন বলেছেন, \"প্রতিকারের চেয়ে প্রতিরোধ ভালো।\"",
          slotValues: {
            PERSON: "the doctor",
            QUOTE: "Prevention is better than cure.",
          },
          topicArea: "health",
        },
        {
          en: "As my mother put it, \"A family that eats together stays together.\"",
          bn: "আমার মা যেমন বলেন, \"যে পরিবার একসাথে খায়, তারা একসাথে থাকে।\"",
          slotValues: {
            PERSON: "my mother",
            QUOTE: "A family that eats together stays together.",
          },
          topicArea: "food",
        },
        {
          en: "As the manager put it, \"Teamwork makes the dream work.\"",
          bn: "ম্যানেজার যেমন বলেছেন, \"দলগত কাজে স্বপ্ন সফল হয়।\"",
          slotValues: {
            PERSON: "the manager",
            QUOTE: "Teamwork makes the dream work.",
          },
          topicArea: "work",
        },
        {
          en: "As she put it, \"Travel is the best education.\"",
          bn: "সে যেমন বলেছে, \"ভ্রমণ হলো সেরা শিক্ষা।\"",
          slotValues: {
            PERSON: "she",
            QUOTE: "Travel is the best education.",
          },
          topicArea: "travel",
        },
        {
          en: "As my friend put it, \"Money can't buy happiness.\"",
          bn: "আমার বন্ধু যেমন বলেছে, \"টাকা দিয়ে সুখ কেনা যায় না।\"",
          slotValues: {
            PERSON: "my friend",
            QUOTE: "Money can't buy happiness.",
          },
          topicArea: "shopping",
        },
        {
          en: "As the coach put it, \"No pain, no gain.\"",
          bn: "কোচ যেমন বলেছেন, \"কষ্ট ছাড়া ফল নেই।\"",
          slotValues: {
            PERSON: "the coach",
            QUOTE: "No pain, no gain.",
          },
          topicArea: "health",
        },
        {
          en: "As he put it, \"The early bird catches the worm.\"",
          bn: "সে যেমন বলেছে, \"যে আগে ওঠে সে বেশি পায়।\"",
          slotValues: {
            PERSON: "he",
            QUOTE: "The early bird catches the worm.",
          },
          topicArea: "work",
        },
        {
          en: "As the professor put it, \"Knowledge is power.\"",
          bn: "প্রফেসর যেমন বলেছেন, \"জ্ঞানই শক্তি।\"",
          slotValues: {
            PERSON: "the professor",
            QUOTE: "Knowledge is power.",
          },
          topicArea: "education",
        },
        {
          en: "As my father put it, \"Patience is a virtue.\"",
          bn: "আমার বাবা যেমন বলেন, \"ধৈর্য একটি গুণ।\"",
          slotValues: {
            PERSON: "my father",
            QUOTE: "Patience is a virtue.",
          },
          topicArea: "relationships",
        },
        {
          en: "As she put it, \"Home is where the heart is.\"",
          bn: "সে যেমন বলেছে, \"যেখানে মন সেখানেই ঘর।\"",
          slotValues: {
            PERSON: "she",
            QUOTE: "Home is where the heart is.",
          },
          topicArea: "travel",
        },
        {
          en: "As the chef put it, \"Good food takes time.\"",
          bn: "শেফ যেমন বলেছেন, \"ভালো খাবারে সময় লাগে।\"",
          slotValues: {
            PERSON: "the chef",
            QUOTE: "Good food takes time.",
          },
          topicArea: "food",
        },
      ],
      formality: "polite",
      difficulty: "intermediate",
      usageNote:
        "'As someone put it' is used when quoting something memorable or well-phrased. It gives credit to the original speaker.",
      usageNote_bn:
        "'As someone put it' কিছু স্মরণীয় বা সুন্দরভাবে বলা কথা উদ্ধৃত করতে ব্যবহৃত হয়। এটি মূল বক্তাকে কৃতিত্ব দেয়।",
    },
    {
      id: "K3.4",
      formula: "[PERSON] was like, \"[QUOTE]\"",
      formula_bn: "[ব্যক্তি] বলছিল, \"[উদ্ধৃতি]\"",
      patternName: "Informal Quoting with 'Was Like'",
      patternName_bn: "'Was Like' দিয়ে অনানুষ্ঠানিক উদ্ধৃতি",
      slots: [
        {
          name: "PERSON",
          description: "The person being quoted informally",
          description_bn: "যে ব্যক্তিকে অনানুষ্ঠানিকভাবে উদ্ধৃত করা হচ্ছে",
          acceptedTypes: ["person"],
          examples: ["She", "He", "My friend", "I"],
        },
        {
          name: "QUOTE",
          description: "The words or reaction being reported casually",
          description_bn: "অনানুষ্ঠানিকভাবে বলা কথা বা প্রতিক্রিয়া",
          acceptedTypes: ["statement"],
          examples: [
            "Are you serious?",
            "That's amazing!",
            "I can't believe it!",
          ],
        },
      ],
      examples: [
        {
          en: "She was like, \"Are you serious?\"",
          bn: "সে বলছিল, \"তুমি কি সিরিয়াস?\"",
          slotValues: { PERSON: "She", QUOTE: "Are you serious?" },
          topicArea: "daily_life",
        },
        {
          en: "He was like, \"That's amazing!\"",
          bn: "সে বলছিল, \"এটা দারুণ!\"",
          slotValues: { PERSON: "He", QUOTE: "That's amazing!" },
          topicArea: "daily_life",
        },
        {
          en: "I was like, \"I can't believe it!\"",
          bn: "আমি বলছিলাম, \"আমি বিশ্বাস করতে পারছি না!\"",
          slotValues: { PERSON: "I", QUOTE: "I can't believe it!" },
          topicArea: "daily_life",
        },
        {
          en: "My friend was like, \"Let's go right now!\"",
          bn: "আমার বন্ধু বলছিল, \"চলো এখনই যাই!\"",
          slotValues: {
            PERSON: "My friend",
            QUOTE: "Let's go right now!",
          },
          topicArea: "travel",
        },
        {
          en: "She was like, \"This food is incredible!\"",
          bn: "সে বলছিল, \"এই খাবার অবিশ্বাস্য!\"",
          slotValues: {
            PERSON: "She",
            QUOTE: "This food is incredible!",
          },
          topicArea: "food",
        },
        {
          en: "He was like, \"I just got promoted!\"",
          bn: "সে বলছিল, \"আমি এইমাত্র প্রমোশন পেলাম!\"",
          slotValues: {
            PERSON: "He",
            QUOTE: "I just got promoted!",
          },
          topicArea: "work",
        },
        {
          en: "I was like, \"We should totally do that.\"",
          bn: "আমি বলছিলাম, \"আমাদের অবশ্যই এটা করা উচিত।\"",
          slotValues: {
            PERSON: "I",
            QUOTE: "We should totally do that.",
          },
          topicArea: "daily_life",
        },
        {
          en: "She was like, \"I've never seen anything like this before.\"",
          bn: "সে বলছিল, \"আমি আগে কখনো এরকম কিছু দেখিনি।\"",
          slotValues: {
            PERSON: "She",
            QUOTE: "I've never seen anything like this before.",
          },
          topicArea: "travel",
        },
        {
          en: "He was like, \"Wait, that's my old classmate!\"",
          bn: "সে বলছিল, \"দাঁড়াও, এ তো আমার পুরোনো সহপাঠী!\"",
          slotValues: {
            PERSON: "He",
            QUOTE: "Wait, that's my old classmate!",
          },
          topicArea: "relationships",
        },
        {
          en: "My sister was like, \"You have to try this dress!\"",
          bn: "আমার বোন বলছিল, \"তোমাকে এই ড্রেসটা পরে দেখতে হবে!\"",
          slotValues: {
            PERSON: "My sister",
            QUOTE: "You have to try this dress!",
          },
          topicArea: "shopping",
        },
        {
          en: "I was like, \"That test was so hard!\"",
          bn: "আমি বলছিলাম, \"পরীক্ষাটা অনেক কঠিন ছিল!\"",
          slotValues: {
            PERSON: "I",
            QUOTE: "That test was so hard!",
          },
          topicArea: "education",
        },
        {
          en: "She was like, \"My head is killing me.\"",
          bn: "সে বলছিল, \"আমার মাথা ব্যথায় ফেটে যাচ্ছে।\"",
          slotValues: {
            PERSON: "She",
            QUOTE: "My head is killing me.",
          },
          topicArea: "health",
        },
        {
          en: "He was like, \"I don't care, I'm ordering dessert.\"",
          bn: "সে বলছিল, \"কিছু যায় আসে না, আমি ডেজার্ট অর্ডার করছি।\"",
          slotValues: {
            PERSON: "He",
            QUOTE: "I don't care, I'm ordering dessert.",
          },
          topicArea: "food",
        },
        {
          en: "My brother was like, \"This is the best day ever!\"",
          bn: "আমার ভাই বলছিল, \"আজ সবচেয়ে ভালো দিন!\"",
          slotValues: {
            PERSON: "My brother",
            QUOTE: "This is the best day ever!",
          },
          topicArea: "relationships",
        },
        {
          en: "She was like, \"I can't work with these people anymore.\"",
          bn: "সে বলছিল, \"আমি এই লোকগুলোর সাথে আর কাজ করতে পারছি না।\"",
          slotValues: {
            PERSON: "She",
            QUOTE: "I can't work with these people anymore.",
          },
          topicArea: "work",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "'Was like' is very informal and common in spoken English, especially among younger speakers. It often conveys emotion or surprise.",
      usageNote_bn:
        "'Was like' খুবই অনানুষ্ঠানিক এবং কথ্য ইংরেজিতে সাধারণ, বিশেষ করে তরুণদের মধ্যে। এটি প্রায়ই আবেগ বা বিস্ময় প্রকাশ করে।",
    },
    {
      id: "K3.5",
      formula: "In [PERSON]'s words, \"[QUOTE]\"",
      formula_bn: "[ব্যক্তি]-র ভাষায়, \"[উদ্ধৃতি]\"",
      patternName: "Formal Attribution",
      patternName_bn: "আনুষ্ঠানিক আরোপ",
      slots: [
        {
          name: "PERSON",
          description: "The person whose words are being quoted exactly",
          description_bn: "যার কথা হুবহু উদ্ধৃত করা হচ্ছে",
          acceptedTypes: ["person"],
          examples: ["the president", "the author", "her", "the CEO"],
        },
        {
          name: "QUOTE",
          description: "The exact words being attributed",
          description_bn: "যে সঠিক কথা আরোপ করা হচ্ছে",
          acceptedTypes: ["statement"],
          examples: [
            "We must work together.",
            "Education changes everything.",
            "The future looks bright.",
          ],
        },
      ],
      examples: [
        {
          en: "In the president's words, \"We must work together for a better future.\"",
          bn: "রাষ্ট্রপতির ভাষায়, \"আমাদের একটি সুন্দর ভবিষ্যতের জন্য একসাথে কাজ করতে হবে।\"",
          slotValues: {
            PERSON: "the president",
            QUOTE: "We must work together for a better future.",
          },
          topicArea: "daily_life",
        },
        {
          en: "In the author's words, \"Every story deserves to be told.\"",
          bn: "লেখকের ভাষায়, \"প্রতিটি গল্প বলা দরকার।\"",
          slotValues: {
            PERSON: "the author",
            QUOTE: "Every story deserves to be told.",
          },
          topicArea: "education",
        },
        {
          en: "In her words, \"I never thought I'd come this far.\"",
          bn: "তার ভাষায়, \"আমি কখনো ভাবিনি আমি এতদূর আসব।\"",
          slotValues: {
            PERSON: "her",
            QUOTE: "I never thought I'd come this far.",
          },
          topicArea: "work",
        },
        {
          en: "In the CEO's words, \"Innovation is our top priority.\"",
          bn: "সিইও-র ভাষায়, \"উদ্ভাবন আমাদের শীর্ষ অগ্রাধিকার।\"",
          slotValues: {
            PERSON: "the CEO",
            QUOTE: "Innovation is our top priority.",
          },
          topicArea: "work",
        },
        {
          en: "In the doctor's words, \"Health is wealth.\"",
          bn: "ডাক্তারের ভাষায়, \"স্বাস্থ্যই সম্পদ।\"",
          slotValues: {
            PERSON: "the doctor",
            QUOTE: "Health is wealth.",
          },
          topicArea: "health",
        },
        {
          en: "In my teacher's words, \"Never stop learning.\"",
          bn: "আমার শিক্ষকের ভাষায়, \"কখনো শেখা বন্ধ করো না।\"",
          slotValues: {
            PERSON: "my teacher",
            QUOTE: "Never stop learning.",
          },
          topicArea: "education",
        },
        {
          en: "In the chef's words, \"Cooking is an art, not a chore.\"",
          bn: "শেফের ভাষায়, \"রান্না একটি শিল্প, বাধ্যবাধকতা নয়।\"",
          slotValues: {
            PERSON: "the chef",
            QUOTE: "Cooking is an art, not a chore.",
          },
          topicArea: "food",
        },
        {
          en: "In the traveler's words, \"The journey matters more than the destination.\"",
          bn: "ভ্রমণকারীর ভাষায়, \"গন্তব্যের চেয়ে যাত্রাই বেশি গুরুত্বপূর্ণ।\"",
          slotValues: {
            PERSON: "the traveler",
            QUOTE: "The journey matters more than the destination.",
          },
          topicArea: "travel",
        },
        {
          en: "In his words, \"I gave it my best shot.\"",
          bn: "তার ভাষায়, \"আমি আমার সর্বোচ্চ চেষ্টা করেছি।\"",
          slotValues: {
            PERSON: "his",
            QUOTE: "I gave it my best shot.",
          },
          topicArea: "daily_life",
        },
        {
          en: "In the coach's words, \"Champions are made in practice.\"",
          bn: "কোচের ভাষায়, \"চ্যাম্পিয়ন তৈরি হয় অনুশীলনে।\"",
          slotValues: {
            PERSON: "the coach",
            QUOTE: "Champions are made in practice.",
          },
          topicArea: "health",
        },
        {
          en: "In my grandmother's words, \"Love is the answer to everything.\"",
          bn: "আমার দাদির ভাষায়, \"ভালোবাসা সবকিছুর উত্তর।\"",
          slotValues: {
            PERSON: "my grandmother",
            QUOTE: "Love is the answer to everything.",
          },
          topicArea: "relationships",
        },
        {
          en: "In the scientist's words, \"Curiosity drives discovery.\"",
          bn: "বিজ্ঞানীর ভাষায়, \"কৌতূহলই আবিষ্কারের চালিকাশক্তি।\"",
          slotValues: {
            PERSON: "the scientist",
            QUOTE: "Curiosity drives discovery.",
          },
          topicArea: "education",
        },
        {
          en: "In the farmer's words, \"Good soil gives good crops.\"",
          bn: "কৃষকের ভাষায়, \"ভালো মাটিতে ভালো ফসল হয়।\"",
          slotValues: {
            PERSON: "the farmer",
            QUOTE: "Good soil gives good crops.",
          },
          topicArea: "food",
        },
        {
          en: "In the pilot's words, \"Every flight is a new adventure.\"",
          bn: "পাইলটের ভাষায়, \"প্রতিটি উড়ান একটি নতুন অভিযান।\"",
          slotValues: {
            PERSON: "the pilot",
            QUOTE: "Every flight is a new adventure.",
          },
          topicArea: "travel",
        },
        {
          en: "In the manager's words, \"Customer satisfaction is everything.\"",
          bn: "ম্যানেজারের ভাষায়, \"গ্রাহক সন্তুষ্টিই সবকিছু।\"",
          slotValues: {
            PERSON: "the manager",
            QUOTE: "Customer satisfaction is everything.",
          },
          topicArea: "shopping",
        },
      ],
      formality: "formal",
      difficulty: "intermediate",
      usageNote:
        "'In someone's words' is a formal way to introduce an exact quote, emphasizing that you are using their precise language.",
      usageNote_bn:
        "'In someone's words' একটি আনুষ্ঠানিক উপায়ে সঠিক উদ্ধৃতি পরিচয় করায়, জোর দিয়ে যে আপনি তাদের সুনির্দিষ্ট ভাষা ব্যবহার করছেন।",
    },
  ],
};
