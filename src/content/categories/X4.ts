import { PatternCategory } from "@/types/pattern";

export const categoryX4: PatternCategory = {
  id: "X4",
  slug: "tense-confusion",
  name: "Tense Confusion",
  name_bn: "কাল বিভ্রান্তি",
  description:
    "Fix common tense mistakes. Bangla has a simpler tense system, so Present Perfect vs Simple Past is especially confusing.",
  description_bn:
    "সাধারণ কালের ভুল ঠিক করুন। বাংলায় কালের ব্যবস্থা সরল, তাই Present Perfect বনাম Simple Past বিশেষভাবে বিভ্রান্তিকর।",
  icon: "⏰",
  group: "X",
  groupName: "Common Mistakes by Bangla Speakers",
  groupName_bn: "বাংলা ভাষীদের সাধারণ ভুল",
  difficulty: "beginner",
  patterns: [
    {
      id: "X4.1",
      formula: "I [PAST VERB] [TIME EXPRESSION]",
      formula_bn: "আমি [TIME EXPRESSION]-এ [PAST VERB] করেছি",
      patternName: "Simple Past with Specific Time (not Present Perfect)",
      patternName_bn: "নির্দিষ্ট সময়ে Simple Past (Present Perfect নয়)",
      slots: [
        {
          name: "PAST VERB",
          description: "A verb in simple past tense (went, ate, saw, etc.)",
          description_bn: "Simple Past Tense-এ ক্রিয়া (went, ate, saw ইত্যাদি)",
          acceptedTypes: ["verb"],
          examples: ["went", "ate", "finished"],
        },
        {
          name: "TIME EXPRESSION",
          description:
            "A specific time reference (yesterday, last week, in 2020, etc.)",
          description_bn:
            "একটি নির্দিষ্ট সময়ের উল্লেখ (yesterday, last week, in 2020 ইত্যাদি)",
          acceptedTypes: ["time_expression"],
          examples: ["yesterday", "last week", "in 2020"],
        },
      ],
      examples: [
        {
          en: "I went to school yesterday.",
          bn: "আমি গতকাল স্কুলে গিয়েছিলাম।",
          slotValues: { "PAST VERB": "went", "TIME EXPRESSION": "yesterday" },
          topicArea: "education",
        },
        {
          en: "She called me last night.",
          bn: "সে গত রাতে আমাকে ফোন করেছিল।",
          slotValues: {
            "PAST VERB": "called",
            "TIME EXPRESSION": "last night",
          },
          topicArea: "relationships",
        },
        {
          en: "We ate lunch an hour ago.",
          bn: "আমরা এক ঘণ্টা আগে দুপুরের খাবার খেয়েছিলাম।",
          slotValues: {
            "PAST VERB": "ate",
            "TIME EXPRESSION": "an hour ago",
          },
          topicArea: "food",
        },
        {
          en: "I finished the project last week.",
          bn: "আমি গত সপ্তাহে প্রজেক্টটি শেষ করেছিলাম।",
          slotValues: {
            "PAST VERB": "finished",
            "TIME EXPRESSION": "last week",
          },
          topicArea: "work",
        },
        {
          en: "He moved to Dhaka in 2018.",
          bn: "সে ২০১৮ সালে ঢাকায় চলে গিয়েছিল।",
          slotValues: { "PAST VERB": "moved", "TIME EXPRESSION": "in 2018" },
          topicArea: "daily_life",
        },
        {
          en: "They visited us last month.",
          bn: "তারা গত মাসে আমাদের দেখতে এসেছিল।",
          slotValues: {
            "PAST VERB": "visited",
            "TIME EXPRESSION": "last month",
          },
          topicArea: "relationships",
        },
        {
          en: "I saw that movie two days ago.",
          bn: "আমি দুই দিন আগে সেই সিনেমাটি দেখেছিলাম।",
          slotValues: {
            "PAST VERB": "saw",
            "TIME EXPRESSION": "two days ago",
          },
          topicArea: "daily_life",
        },
        {
          en: "She bought a new phone yesterday.",
          bn: "সে গতকাল একটি নতুন ফোন কিনেছিল।",
          slotValues: {
            "PAST VERB": "bought",
            "TIME EXPRESSION": "yesterday",
          },
          topicArea: "shopping",
        },
        {
          en: "We arrived at the hotel last evening.",
          bn: "আমরা গত সন্ধ্যায় হোটেলে পৌঁছেছিলাম।",
          slotValues: {
            "PAST VERB": "arrived",
            "TIME EXPRESSION": "last evening",
          },
          topicArea: "travel",
        },
        {
          en: "I met him at the party on Friday.",
          bn: "আমি শুক্রবার পার্টিতে তার সাথে দেখা করেছিলাম।",
          slotValues: { "PAST VERB": "met", "TIME EXPRESSION": "on Friday" },
          topicArea: "relationships",
        },
        {
          en: "The doctor checked me this morning.",
          bn: "ডাক্তার আজ সকালে আমাকে পরীক্ষা করেছিলেন।",
          slotValues: {
            "PAST VERB": "checked",
            "TIME EXPRESSION": "this morning",
          },
          topicArea: "health",
        },
        {
          en: "I graduated in 2020.",
          bn: "আমি ২০২০ সালে গ্র্যাজুয়েট হয়েছিলাম।",
          slotValues: {
            "PAST VERB": "graduated",
            "TIME EXPRESSION": "in 2020",
          },
          topicArea: "education",
        },
        {
          en: "He left the office ten minutes ago.",
          bn: "সে দশ মিনিট আগে অফিস থেকে চলে গিয়েছিল।",
          slotValues: {
            "PAST VERB": "left",
            "TIME EXPRESSION": "ten minutes ago",
          },
          topicArea: "work",
        },
        {
          en: "I cooked dinner last night.",
          bn: "আমি গত রাতে রাতের খাবার রান্না করেছিলাম।",
          slotValues: {
            "PAST VERB": "cooked",
            "TIME EXPRESSION": "last night",
          },
          topicArea: "food",
        },
        {
          en: "We traveled to Cox's Bazar last summer.",
          bn: "আমরা গত গ্রীষ্মে কক্সবাজার ভ্রমণ করেছিলাম।",
          slotValues: {
            "PAST VERB": "traveled",
            "TIME EXPRESSION": "last summer",
          },
          topicArea: "travel",
        },
      ],
      formality: "casual",
      difficulty: "beginner",
      usageNote:
        "Use Simple Past (went/ate/saw) when you mention WHEN it happened (yesterday, last week, in 2020). Use Present Perfect (have gone/have eaten) when the time is NOT important or not mentioned.",
      usageNote_bn:
        "যখন আপনি উল্লেখ করেন কখন ঘটেছিল (yesterday, last week, in 2020), তখন Simple Past (went/ate/saw) ব্যবহার করুন। যখন সময় গুরুত্বপূর্ণ নয় বা উল্লেখ করা হয়নি, তখন Present Perfect (have gone/have eaten) ব্যবহার করুন।",
      banglaStructureMap:
        "আমি (Subject) + [TIME EXPRESSION] (সময়) + [PAST VERB] করেছিলাম (Verb - Past)",
    },
    {
      id: "X4.2",
      formula: "I have [PAST PARTICIPLE] [FOR/SINCE] [TIME]",
      formula_bn: "আমি [TIME] [FOR/SINCE] [PAST PARTICIPLE] করেছি",
      patternName: "For vs Since with Present Perfect",
      patternName_bn: "Present Perfect-এ For বনাম Since",
      slots: [
        {
          name: "PAST PARTICIPLE",
          description: "A verb in past participle form (lived, worked, known, etc.)",
          description_bn:
            "Past participle রূপে ক্রিয়া (lived, worked, known ইত্যাদি)",
          acceptedTypes: ["past_participle"],
          examples: ["lived", "worked", "known"],
        },
        {
          name: "FOR/SINCE",
          description: "'for' (duration) or 'since' (point in time)",
          description_bn:
            "'for' (সময়কাল) অথবা 'since' (সময়ের বিন্দু)",
          acceptedTypes: ["noun"],
          examples: ["for", "since"],
        },
        {
          name: "TIME",
          description: "A duration (for) or a starting point (since)",
          description_bn: "একটি সময়কাল (for) অথবা একটি শুরুর বিন্দু (since)",
          acceptedTypes: ["time_expression"],
          examples: ["5 years", "2020", "morning"],
        },
      ],
      examples: [
        {
          en: "I have lived here for 10 years.",
          bn: "আমি ১০ বছর ধরে এখানে বাস করছি।",
          slotValues: {
            "PAST PARTICIPLE": "lived",
            "FOR/SINCE": "for",
            TIME: "10 years",
          },
          topicArea: "daily_life",
        },
        {
          en: "I have lived here since 2015.",
          bn: "আমি ২০১৫ সাল থেকে এখানে বাস করছি।",
          slotValues: {
            "PAST PARTICIPLE": "lived",
            "FOR/SINCE": "since",
            TIME: "2015",
          },
          topicArea: "daily_life",
        },
        {
          en: "She has worked at this company for 3 years.",
          bn: "সে ৩ বছর ধরে এই কোম্পানিতে কাজ করছে।",
          slotValues: {
            "PAST PARTICIPLE": "worked",
            "FOR/SINCE": "for",
            TIME: "3 years",
          },
          topicArea: "work",
        },
        {
          en: "She has worked here since January.",
          bn: "সে জানুয়ারি থেকে এখানে কাজ করছে।",
          slotValues: {
            "PAST PARTICIPLE": "worked",
            "FOR/SINCE": "since",
            TIME: "January",
          },
          topicArea: "work",
        },
        {
          en: "We have known each other for a long time.",
          bn: "আমরা দীর্ঘদিন ধরে একে অপরকে চিনি।",
          slotValues: {
            "PAST PARTICIPLE": "known",
            "FOR/SINCE": "for",
            TIME: "a long time",
          },
          topicArea: "relationships",
        },
        {
          en: "We have known each other since childhood.",
          bn: "আমরা ছোটবেলা থেকে একে অপরকে চিনি।",
          slotValues: {
            "PAST PARTICIPLE": "known",
            "FOR/SINCE": "since",
            TIME: "childhood",
          },
          topicArea: "relationships",
        },
        {
          en: "He has studied English for 6 months.",
          bn: "সে ৬ মাস ধরে ইংরেজি পড়ছে।",
          slotValues: {
            "PAST PARTICIPLE": "studied",
            "FOR/SINCE": "for",
            TIME: "6 months",
          },
          topicArea: "education",
        },
        {
          en: "He has studied English since last year.",
          bn: "সে গত বছর থেকে ইংরেজি পড়ছে।",
          slotValues: {
            "PAST PARTICIPLE": "studied",
            "FOR/SINCE": "since",
            TIME: "last year",
          },
          topicArea: "education",
        },
        {
          en: "I have waited for two hours.",
          bn: "আমি দুই ঘণ্টা ধরে অপেক্ষা করছি।",
          slotValues: {
            "PAST PARTICIPLE": "waited",
            "FOR/SINCE": "for",
            TIME: "two hours",
          },
          topicArea: "daily_life",
        },
        {
          en: "I have waited since 3 o'clock.",
          bn: "আমি ৩টা থেকে অপেক্ষা করছি।",
          slotValues: {
            "PAST PARTICIPLE": "waited",
            "FOR/SINCE": "since",
            TIME: "3 o'clock",
          },
          topicArea: "daily_life",
        },
        {
          en: "They have been married for 20 years.",
          bn: "তারা ২০ বছর ধরে বিবাহিত।",
          slotValues: {
            "PAST PARTICIPLE": "been married",
            "FOR/SINCE": "for",
            TIME: "20 years",
          },
          topicArea: "relationships",
        },
        {
          en: "They have been married since 2005.",
          bn: "তারা ২০০৫ সাল থেকে বিবাহিত।",
          slotValues: {
            "PAST PARTICIPLE": "been married",
            "FOR/SINCE": "since",
            TIME: "2005",
          },
          topicArea: "relationships",
        },
        {
          en: "I have not eaten anything for 8 hours.",
          bn: "আমি ৮ ঘণ্টা ধরে কিছু খাইনি।",
          slotValues: {
            "PAST PARTICIPLE": "not eaten",
            "FOR/SINCE": "for",
            TIME: "8 hours",
          },
          topicArea: "food",
        },
        {
          en: "She has been sick since Monday.",
          bn: "সে সোমবার থেকে অসুস্থ।",
          slotValues: {
            "PAST PARTICIPLE": "been sick",
            "FOR/SINCE": "since",
            TIME: "Monday",
          },
          topicArea: "health",
        },
        {
          en: "I have not traveled for a whole year.",
          bn: "আমি পুরো এক বছর ধরে ভ্রমণ করিনি।",
          slotValues: {
            "PAST PARTICIPLE": "not traveled",
            "FOR/SINCE": "for",
            TIME: "a whole year",
          },
          topicArea: "travel",
        },
      ],
      formality: "casual",
      difficulty: "beginner",
      usageNote:
        "FOR = how long (for 5 years, for 3 hours). SINCE = when it started (since 2020, since morning). Bangla uses 'ধরে' for both.",
      usageNote_bn:
        "FOR = কতক্ষণ (for 5 years, for 3 hours)। SINCE = কখন শুরু হয়েছিল (since 2020, since morning)। বাংলায় উভয়ের জন্য 'ধরে' ব্যবহার হয়।",
      banglaStructureMap:
        "আমি (Subject) + [TIME] ধরে/থেকে (Time + Postposition) + [PAST PARTICIPLE] করেছি (Verb)",
    },
    {
      id: "X4.3",
      formula: "I [VERB] [THING]",
      formula_bn: "আমি [THING] [VERB] করি",
      patternName: "Stative Verbs (No Continuous Form)",
      patternName_bn: "অবস্থাবাচক ক্রিয়া (Continuous Form নেই)",
      slots: [
        {
          name: "VERB",
          description:
            "A stative verb in simple form (know, like, want, believe, understand, need, have, belong)",
          description_bn:
            "Simple form-এ অবস্থাবাচক ক্রিয়া (know, like, want, believe, understand, need, have, belong)",
          acceptedTypes: ["verb"],
          examples: ["know", "like", "want", "believe"],
        },
        {
          name: "THING",
          description: "The object of the stative verb",
          description_bn: "অবস্থাবাচক ক্রিয়ার কর্ম",
          acceptedTypes: ["noun", "noun_phrase", "clause"],
          examples: ["the answer", "pizza", "coffee"],
        },
      ],
      examples: [
        {
          en: "I know the answer.",
          bn: "আমি উত্তরটি জানি।",
          slotValues: { VERB: "know", THING: "the answer" },
          topicArea: "education",
        },
        {
          en: "I like pizza.",
          bn: "আমি পিৎজা পছন্দ করি।",
          slotValues: { VERB: "like", THING: "pizza" },
          topicArea: "food",
        },
        {
          en: "I want coffee.",
          bn: "আমি কফি চাই।",
          slotValues: { VERB: "want", THING: "coffee" },
          topicArea: "food",
        },
        {
          en: "I believe you.",
          bn: "আমি তোমাকে বিশ্বাস করি।",
          slotValues: { VERB: "believe", THING: "you" },
          topicArea: "relationships",
        },
        {
          en: "I understand the problem.",
          bn: "আমি সমস্যাটি বুঝি।",
          slotValues: { VERB: "understand", THING: "the problem" },
          topicArea: "work",
        },
        {
          en: "I need help.",
          bn: "আমার সাহায্য দরকার।",
          slotValues: { VERB: "need", THING: "help" },
          topicArea: "daily_life",
        },
        {
          en: "She has two brothers.",
          bn: "তার দুই ভাই আছে।",
          slotValues: { VERB: "has", THING: "two brothers" },
          topicArea: "relationships",
        },
        {
          en: "This book belongs to me.",
          bn: "এই বইটি আমার।",
          slotValues: { VERB: "belongs to", THING: "me" },
          topicArea: "daily_life",
        },
        {
          en: "I love my family.",
          bn: "আমি আমার পরিবারকে ভালোবাসি।",
          slotValues: { VERB: "love", THING: "my family" },
          topicArea: "relationships",
        },
        {
          en: "He hates waiting in line.",
          bn: "সে লাইনে দাঁড়িয়ে অপেক্ষা করা ঘৃণা করে।",
          slotValues: { VERB: "hates", THING: "waiting in line" },
          topicArea: "daily_life",
        },
        {
          en: "I prefer tea over coffee.",
          bn: "আমি কফির চেয়ে চা পছন্দ করি।",
          slotValues: { VERB: "prefer", THING: "tea over coffee" },
          topicArea: "food",
        },
        {
          en: "She remembers everything.",
          bn: "সে সব কিছু মনে রাখে।",
          slotValues: { VERB: "remembers", THING: "everything" },
          topicArea: "daily_life",
        },
        {
          en: "I own a small shop.",
          bn: "আমার একটি ছোট দোকান আছে।",
          slotValues: { VERB: "own", THING: "a small shop" },
          topicArea: "work",
        },
        {
          en: "He seems tired today.",
          bn: "সে আজ ক্লান্ত মনে হচ্ছে।",
          slotValues: { VERB: "seems", THING: "tired today" },
          topicArea: "health",
        },
        {
          en: "I suppose you are right.",
          bn: "আমি মনে করি তুমি ঠিক।",
          slotValues: { VERB: "suppose", THING: "you are right" },
          topicArea: "daily_life",
        },
      ],
      formality: "casual",
      difficulty: "beginner",
      usageNote:
        "Some verbs (know, like, want, believe, understand, need, have (possession), belong) CANNOT use -ing form. These are called stative verbs.",
      usageNote_bn:
        "কিছু ক্রিয়া (know, like, want, believe, understand, need, have (অধিকার), belong) -ing রূপ ব্যবহার করতে পারে না। এগুলোকে stative verbs বলে।",
      banglaStructureMap:
        "আমি (Subject) + [THING] (Object) + [VERB] করি (Verb - Simple)",
    },
    {
      id: "X4.4",
      formula: "I have [ALREADY/JUST] [PAST PARTICIPLE]",
      formula_bn: "আমি [ALREADY/JUST] [PAST PARTICIPLE] করেছি",
      patternName: "Already/Yet/Just Placement",
      patternName_bn: "Already/Yet/Just-এর সঠিক অবস্থান",
      slots: [
        {
          name: "ALREADY/JUST",
          description:
            "'already' (completed), 'just' (very recently), or 'yet' (in negatives/questions)",
          description_bn:
            "'already' (সম্পন্ন), 'just' (এইমাত্র), অথবা 'yet' (নেতিবাচক/প্রশ্নে)",
          acceptedTypes: ["adverb"],
          examples: ["already", "just", "yet"],
        },
        {
          name: "PAST PARTICIPLE",
          description: "A verb in past participle form",
          description_bn: "Past participle রূপে ক্রিয়া",
          acceptedTypes: ["past_participle"],
          examples: ["eaten", "finished", "arrived"],
        },
      ],
      examples: [
        {
          en: "I have already eaten.",
          bn: "আমি ইতিমধ্যে খেয়েছি।",
          slotValues: {
            "ALREADY/JUST": "already",
            "PAST PARTICIPLE": "eaten",
          },
          topicArea: "food",
        },
        {
          en: "She has just arrived.",
          bn: "সে এইমাত্র পৌঁছেছে।",
          slotValues: {
            "ALREADY/JUST": "just",
            "PAST PARTICIPLE": "arrived",
          },
          topicArea: "travel",
        },
        {
          en: "I haven't finished yet.",
          bn: "আমি এখনও শেষ করিনি।",
          slotValues: {
            "ALREADY/JUST": "yet",
            "PAST PARTICIPLE": "finished",
          },
          topicArea: "work",
        },
        {
          en: "He has already left the office.",
          bn: "সে ইতিমধ্যে অফিস থেকে চলে গেছে।",
          slotValues: {
            "ALREADY/JUST": "already",
            "PAST PARTICIPLE": "left",
          },
          topicArea: "work",
        },
        {
          en: "We have just started the meeting.",
          bn: "আমরা এইমাত্র মিটিং শুরু করেছি।",
          slotValues: {
            "ALREADY/JUST": "just",
            "PAST PARTICIPLE": "started",
          },
          topicArea: "work",
        },
        {
          en: "Have you finished your homework yet?",
          bn: "তুমি কি এখনও তোমার হোমওয়ার্ক শেষ করোনি?",
          slotValues: {
            "ALREADY/JUST": "yet",
            "PAST PARTICIPLE": "finished",
          },
          topicArea: "education",
        },
        {
          en: "I have already paid the bill.",
          bn: "আমি ইতিমধ্যে বিল দিয়ে দিয়েছি।",
          slotValues: {
            "ALREADY/JUST": "already",
            "PAST PARTICIPLE": "paid",
          },
          topicArea: "shopping",
        },
        {
          en: "She has just called me.",
          bn: "সে এইমাত্র আমাকে ফোন করেছে।",
          slotValues: {
            "ALREADY/JUST": "just",
            "PAST PARTICIPLE": "called",
          },
          topicArea: "relationships",
        },
        {
          en: "They haven't replied yet.",
          bn: "তারা এখনও উত্তর দেয়নি।",
          slotValues: {
            "ALREADY/JUST": "yet",
            "PAST PARTICIPLE": "replied",
          },
          topicArea: "daily_life",
        },
        {
          en: "I have already booked the tickets.",
          bn: "আমি ইতিমধ্যে টিকিট বুক করেছি।",
          slotValues: {
            "ALREADY/JUST": "already",
            "PAST PARTICIPLE": "booked",
          },
          topicArea: "travel",
        },
        {
          en: "He has just woken up.",
          bn: "সে এইমাত্র ঘুম থেকে উঠেছে।",
          slotValues: {
            "ALREADY/JUST": "just",
            "PAST PARTICIPLE": "woken up",
          },
          topicArea: "daily_life",
        },
        {
          en: "I haven't seen the doctor yet.",
          bn: "আমি এখনও ডাক্তার দেখাইনি।",
          slotValues: {
            "ALREADY/JUST": "yet",
            "PAST PARTICIPLE": "seen",
          },
          topicArea: "health",
        },
        {
          en: "We have already discussed this topic.",
          bn: "আমরা ইতিমধ্যে এই বিষয়টি আলোচনা করেছি।",
          slotValues: {
            "ALREADY/JUST": "already",
            "PAST PARTICIPLE": "discussed",
          },
          topicArea: "education",
        },
        {
          en: "The food has just been delivered.",
          bn: "খাবার এইমাত্র ডেলিভারি হয়েছে।",
          slotValues: {
            "ALREADY/JUST": "just",
            "PAST PARTICIPLE": "been delivered",
          },
          topicArea: "food",
        },
        {
          en: "She hasn't bought the groceries yet.",
          bn: "সে এখনও বাজার করেনি।",
          slotValues: {
            "ALREADY/JUST": "yet",
            "PAST PARTICIPLE": "bought",
          },
          topicArea: "shopping",
        },
      ],
      formality: "casual",
      difficulty: "beginner",
      usageNote:
        "ALREADY and JUST go between 'have' and the past participle: 'I have already eaten', 'I have just arrived'. YET goes at the END of negative sentences and questions: 'I haven't eaten yet', 'Have you eaten yet?'",
      usageNote_bn:
        "ALREADY এবং JUST 'have' এবং past participle-এর মাঝে বসে: 'I have already eaten', 'I have just arrived'। YET নেতিবাচক বাক্য এবং প্রশ্নের শেষে বসে: 'I haven't eaten yet', 'Have you eaten yet?'",
      banglaStructureMap:
        "আমি (Subject) + ইতিমধ্যে/এইমাত্র (Adverb) + [PAST PARTICIPLE] করেছি (Verb)",
    },
    {
      id: "X4.5",
      formula: "I'm going to [ACTION]",
      formula_bn: "আমি [ACTION] করতে যাচ্ছি",
      patternName: "Going to (Plans) vs Will (Spontaneous)",
      patternName_bn: "Going to (পরিকল্পনা) বনাম Will (তাৎক্ষণিক)",
      slots: [
        {
          name: "ACTION",
          description:
            "A base verb representing a planned future action",
          description_bn:
            "একটি মূল ক্রিয়া যা পরিকল্পিত ভবিষ্যৎ কাজ প্রকাশ করে",
          acceptedTypes: ["verb", "verb_phrase"],
          examples: ["study tonight", "visit my parents", "buy a car"],
        },
      ],
      examples: [
        {
          en: "I'm going to study tonight.",
          bn: "আমি আজ রাতে পড়াশোনা করতে যাচ্ছি।",
          slotValues: { ACTION: "study tonight" },
          topicArea: "education",
        },
        {
          en: "She's going to visit her parents this weekend.",
          bn: "সে এই সপ্তাহান্তে তার বাবা-মাকে দেখতে যাচ্ছে।",
          slotValues: { ACTION: "visit her parents this weekend" },
          topicArea: "relationships",
        },
        {
          en: "We're going to buy a new house next year.",
          bn: "আমরা আগামী বছর একটি নতুন বাড়ি কিনতে যাচ্ছি।",
          slotValues: { ACTION: "buy a new house next year" },
          topicArea: "daily_life",
        },
        {
          en: "I'm going to cook biryani for dinner.",
          bn: "আমি রাতের খাবারে বিরিয়ানি রান্না করতে যাচ্ছি।",
          slotValues: { ACTION: "cook biryani for dinner" },
          topicArea: "food",
        },
        {
          en: "He's going to apply for a new job.",
          bn: "সে একটি নতুন চাকরিতে আবেদন করতে যাচ্ছে।",
          slotValues: { ACTION: "apply for a new job" },
          topicArea: "work",
        },
        {
          en: "I'll help you with that.",
          bn: "আমি সেটায় তোমাকে সাহায্য করব।",
          slotValues: { ACTION: "help you with that" },
          topicArea: "daily_life",
        },
        {
          en: "I'll call you back later.",
          bn: "আমি পরে তোমাকে ফোন করব।",
          slotValues: { ACTION: "call you back later" },
          topicArea: "relationships",
        },
        {
          en: "They're going to travel to Europe next month.",
          bn: "তারা আগামী মাসে ইউরোপ ভ্রমণ করতে যাচ্ছে।",
          slotValues: { ACTION: "travel to Europe next month" },
          topicArea: "travel",
        },
        {
          en: "I'll have the chicken, please.",
          bn: "আমি চিকেন নেব, প্লিজ।",
          slotValues: { ACTION: "have the chicken" },
          topicArea: "food",
        },
        {
          en: "She's going to start a new course in March.",
          bn: "সে মার্চে একটি নতুন কোর্স শুরু করতে যাচ্ছে।",
          slotValues: { ACTION: "start a new course in March" },
          topicArea: "education",
        },
        {
          en: "I'll open the window for you.",
          bn: "আমি তোমার জন্য জানালা খুলে দেব।",
          slotValues: { ACTION: "open the window for you" },
          topicArea: "daily_life",
        },
        {
          en: "We're going to move to a bigger apartment.",
          bn: "আমরা একটি বড় অ্যাপার্টমেন্টে যেতে যাচ্ছি।",
          slotValues: { ACTION: "move to a bigger apartment" },
          topicArea: "daily_life",
        },
        {
          en: "I'll lend you the money, don't worry.",
          bn: "আমি তোমাকে টাকা ধার দেব, চিন্তা করো না।",
          slotValues: { ACTION: "lend you the money" },
          topicArea: "relationships",
        },
        {
          en: "He's going to see the doctor tomorrow.",
          bn: "সে আগামীকাল ডাক্তার দেখাতে যাচ্ছে।",
          slotValues: { ACTION: "see the doctor tomorrow" },
          topicArea: "health",
        },
        {
          en: "I'll take this one, thank you.",
          bn: "আমি এইটা নেব, ধন্যবাদ।",
          slotValues: { ACTION: "take this one" },
          topicArea: "shopping",
        },
      ],
      formality: "casual",
      difficulty: "beginner",
      usageNote:
        "Going to = you already decided/planned. Will = you decide right now, or for promises/predictions.",
      usageNote_bn:
        "Going to = আপনি আগেই সিদ্ধান্ত/পরিকল্পনা করেছেন। Will = আপনি এখনই সিদ্ধান্ত নিচ্ছেন, অথবা প্রতিশ্রুতি/ভবিষ্যদ্বাণীর জন্য।",
      banglaStructureMap:
        "আমি (Subject) + [ACTION] করতে যাচ্ছি (Verb - Planned Future)",
    },
  ],
};
