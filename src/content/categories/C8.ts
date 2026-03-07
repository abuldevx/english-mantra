import { PatternCategory } from "@/types/pattern";

export const categoryC8: PatternCategory = {
  id: "C8",
  slug: "getting-used-to-things",
  name: "Getting Used To Things",
  name_bn: "জিনিসে অভ্যস্ত হওয়া",
  description:
    "Express familiarity with situations or the process of becoming familiar with them using 'used to' and 'get used to'.",
  description_bn:
    "'used to' এবং 'get used to' ব্যবহার করে পরিস্থিতির সাথে পরিচিতি বা পরিচিত হওয়ার প্রক্রিয়া প্রকাশ করুন।",
  icon: "🔄",
  group: "C",
  groupName: "Actions & Time Patterns",
  groupName_bn: "কর্ম এবং সময়ের প্যাটার্ন",
  difficulty: "intermediate",
  patterns: [
    {
      id: "C8.1",
      formula: "I'm used to [DOING/THING]",
      formula_bn: "আমি [কাজ/জিনিস]-এ অভ্যস্ত",
      patternName: "Accustomed To (Present)",
      patternName_bn: "অভ্যস্ত (বর্তমান)",
      slots: [
        {
          name: "DOING/THING",
          description:
            "A gerund or noun for something you are familiar and comfortable with",
          description_bn:
            "এমন কিছুর জন্য জেরান্ড বা বিশেষ্য যার সাথে আপনি পরিচিত এবং স্বাচ্ছন্দ্য",
          acceptedTypes: ["gerund", "noun"],
          examples: ["waking up early", "the noise", "working long hours"],
        },
      ],
      examples: [
        {
          en: "I'm used to waking up early.",
          bn: "আমি সকালে তাড়াতাড়ি উঠতে অভ্যস্ত।",
          slotValues: { "DOING/THING": "waking up early" },
          topicArea: "daily_life",
        },
        {
          en: "I'm used to the noise in this city.",
          bn: "আমি এই শহরের শব্দে অভ্যস্ত।",
          slotValues: { "DOING/THING": "the noise in this city" },
          topicArea: "daily_life",
        },
        {
          en: "I'm used to working long hours.",
          bn: "আমি দীর্ঘ সময় কাজ করতে অভ্যস্ত।",
          slotValues: { "DOING/THING": "working long hours" },
          topicArea: "work",
        },
        {
          en: "I'm used to cooking for myself.",
          bn: "আমি নিজের জন্য রান্না করতে অভ্যস্ত।",
          slotValues: { "DOING/THING": "cooking for myself" },
          topicArea: "food",
        },
        {
          en: "I'm used to studying under pressure.",
          bn: "আমি চাপের মধ্যে পড়তে অভ্যস্ত।",
          slotValues: { "DOING/THING": "studying under pressure" },
          topicArea: "education",
        },
        {
          en: "I'm used to exercising in the morning.",
          bn: "আমি সকালে ব্যায়াম করতে অভ্যস্ত।",
          slotValues: { "DOING/THING": "exercising in the morning" },
          topicArea: "health",
        },
        {
          en: "I'm used to traveling alone.",
          bn: "আমি একা ভ্রমণ করতে অভ্যস্ত।",
          slotValues: { "DOING/THING": "traveling alone" },
          topicArea: "travel",
        },
        {
          en: "I'm used to bargaining at the market.",
          bn: "আমি বাজারে দর কষাকষি করতে অভ্যস্ত।",
          slotValues: { "DOING/THING": "bargaining at the market" },
          topicArea: "shopping",
        },
        {
          en: "I'm used to living away from my family.",
          bn: "আমি পরিবার থেকে দূরে থাকতে অভ্যস্ত।",
          slotValues: { "DOING/THING": "living away from my family" },
          topicArea: "relationships",
        },
        {
          en: "I'm used to spicy food.",
          bn: "আমি ঝাল খাবারে অভ্যস্ত।",
          slotValues: { "DOING/THING": "spicy food" },
          topicArea: "food",
        },
        {
          en: "I'm used to giving presentations.",
          bn: "আমি প্রেজেন্টেশন দিতে অভ্যস্ত।",
          slotValues: { "DOING/THING": "giving presentations" },
          topicArea: "work",
        },
        {
          en: "I'm used to taking online classes.",
          bn: "আমি অনলাইন ক্লাস নিতে অভ্যস্ত।",
          slotValues: { "DOING/THING": "taking online classes" },
          topicArea: "education",
        },
        {
          en: "I'm used to hot weather.",
          bn: "আমি গরম আবহাওয়ায় অভ্যস্ত।",
          slotValues: { "DOING/THING": "hot weather" },
          topicArea: "daily_life",
        },
        {
          en: "I'm used to walking long distances.",
          bn: "আমি দীর্ঘ দূরত্ব হাঁটতে অভ্যস্ত।",
          slotValues: { "DOING/THING": "walking long distances" },
          topicArea: "health",
        },
        {
          en: "I'm used to being away from home during holidays.",
          bn: "আমি ছুটিতে বাড়ি থেকে দূরে থাকতে অভ্যস্ত।",
          slotValues: {
            "DOING/THING": "being away from home during holidays",
          },
          topicArea: "travel",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "'Be used to' + gerund/-ing noun means you are already comfortable with something. Don't confuse this with 'used to' (past habit).",
      usageNote_bn:
        "'Be used to' + gerund/-ing বিশেষ্য মানে আপনি ইতিমধ্যে কিছুতে অভ্যস্ত। এটি 'used to' (অতীত অভ্যাস) এর সাথে গুলিয়ে ফেলবেন না।",
      combinableWith: ["C8.2", "C8.3"],
      banglaStructureMap:
        "আমি (Subject) + [DOING/THING] (Gerund/Noun) + এ অভ্যস্ত (be used to)",
    },
    {
      id: "C8.2",
      formula: "I'm getting used to [DOING/THING]",
      formula_bn: "আমি [কাজ/জিনিস]-এ অভ্যস্ত হচ্ছি",
      patternName: "Becoming Accustomed To",
      patternName_bn: "অভ্যস্ত হয়ে যাচ্ছি",
      slots: [
        {
          name: "DOING/THING",
          description:
            "A gerund or noun for something you are gradually becoming comfortable with",
          description_bn:
            "এমন কিছুর জন্য জেরান্ড বা বিশেষ্য যার সাথে আপনি ধীরে ধীরে অভ্যস্ত হচ্ছেন",
          acceptedTypes: ["gerund", "noun"],
          examples: [
            "the new schedule",
            "living alone",
            "driving on the left",
          ],
        },
      ],
      examples: [
        {
          en: "I'm getting used to the new schedule.",
          bn: "আমি নতুন সময়সূচিতে অভ্যস্ত হচ্ছি।",
          slotValues: { "DOING/THING": "the new schedule" },
          topicArea: "work",
        },
        {
          en: "I'm getting used to living alone.",
          bn: "আমি একা থাকতে অভ্যস্ত হচ্ছি।",
          slotValues: { "DOING/THING": "living alone" },
          topicArea: "daily_life",
        },
        {
          en: "I'm getting used to driving on the left side.",
          bn: "আমি বামদিকে গাড়ি চালাতে অভ্যস্ত হচ্ছি।",
          slotValues: { "DOING/THING": "driving on the left side" },
          topicArea: "travel",
        },
        {
          en: "I'm getting used to eating less sugar.",
          bn: "আমি কম চিনি খেতে অভ্যস্ত হচ্ছি।",
          slotValues: { "DOING/THING": "eating less sugar" },
          topicArea: "food",
        },
        {
          en: "I'm getting used to studying in English.",
          bn: "আমি ইংরেজিতে পড়তে অভ্যস্ত হচ্ছি।",
          slotValues: { "DOING/THING": "studying in English" },
          topicArea: "education",
        },
        {
          en: "I'm getting used to waking up at 5 AM.",
          bn: "আমি সকাল ৫টায় উঠতে অভ্যস্ত হচ্ছি।",
          slotValues: { "DOING/THING": "waking up at 5 AM" },
          topicArea: "health",
        },
        {
          en: "I'm getting used to working from home.",
          bn: "আমি বাসা থেকে কাজ করতে অভ্যস্ত হচ্ছি।",
          slotValues: { "DOING/THING": "working from home" },
          topicArea: "work",
        },
        {
          en: "I'm getting used to the cold weather here.",
          bn: "আমি এখানকার ঠান্ডা আবহাওয়ায় অভ্যস্ত হচ্ছি।",
          slotValues: { "DOING/THING": "the cold weather here" },
          topicArea: "daily_life",
        },
        {
          en: "I'm getting used to online shopping.",
          bn: "আমি অনলাইনে কেনাকাটায় অভ্যস্ত হচ্ছি।",
          slotValues: { "DOING/THING": "online shopping" },
          topicArea: "shopping",
        },
        {
          en: "I'm getting used to being a parent.",
          bn: "আমি বাবা/মা হওয়ায় অভ্যস্ত হচ্ছি।",
          slotValues: { "DOING/THING": "being a parent" },
          topicArea: "relationships",
        },
        {
          en: "I'm getting used to cooking without oil.",
          bn: "আমি তেল ছাড়া রান্না করতে অভ্যস্ত হচ্ছি।",
          slotValues: { "DOING/THING": "cooking without oil" },
          topicArea: "food",
        },
        {
          en: "I'm getting used to taking the subway.",
          bn: "আমি সাবওয়েতে যেতে অভ্যস্ত হচ্ছি।",
          slotValues: { "DOING/THING": "taking the subway" },
          topicArea: "travel",
        },
        {
          en: "I'm getting used to doing yoga every morning.",
          bn: "আমি প্রতি সকালে যোগব্যায়াম করতে অভ্যস্ত হচ্ছি।",
          slotValues: { "DOING/THING": "doing yoga every morning" },
          topicArea: "health",
        },
        {
          en: "I'm getting used to the new software at work.",
          bn: "আমি কাজের নতুন সফটওয়্যারে অভ্যস্ত হচ্ছি।",
          slotValues: { "DOING/THING": "the new software at work" },
          topicArea: "work",
        },
        {
          en: "I'm getting used to reading academic papers.",
          bn: "আমি একাডেমিক পেপার পড়তে অভ্যস্ত হচ্ছি।",
          slotValues: { "DOING/THING": "reading academic papers" },
          topicArea: "education",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "'Getting used to' shows the process is still ongoing - you are not fully comfortable yet but adapting. Use gerund or noun after 'to'.",
      usageNote_bn:
        "'Getting used to' দেখায় যে প্রক্রিয়াটি এখনও চলমান - আপনি এখনও পুরোপুরি স্বাচ্ছন্দ্য নন কিন্তু মানিয়ে নিচ্ছেন। 'to' এর পরে gerund বা noun ব্যবহার করুন।",
      combinableWith: ["C8.1", "C8.3"],
      banglaStructureMap:
        "আমি (Subject) + [DOING/THING] (Gerund/Noun) + এ অভ্যস্ত হচ্ছি (getting used to)",
    },
    {
      id: "C8.3",
      formula: "I can't get used to [DOING/THING]",
      formula_bn: "আমি [কাজ/জিনিস]-এ অভ্যস্ত হতে পারছি না",
      patternName: "Struggling to Adapt",
      patternName_bn: "মানিয়ে নিতে কষ্ট হচ্ছে",
      slots: [
        {
          name: "DOING/THING",
          description:
            "A gerund or noun for something you find difficult to adapt to",
          description_bn:
            "এমন কিছুর জন্য জেরান্ড বা বিশেষ্য যার সাথে মানিয়ে নিতে কষ্ট হচ্ছে",
          acceptedTypes: ["gerund", "noun"],
          examples: [
            "the traffic here",
            "eating with chopsticks",
            "the cold",
          ],
        },
      ],
      examples: [
        {
          en: "I can't get used to the traffic here.",
          bn: "আমি এখানকার যানজটে অভ্যস্ত হতে পারছি না।",
          slotValues: { "DOING/THING": "the traffic here" },
          topicArea: "travel",
        },
        {
          en: "I can't get used to eating with chopsticks.",
          bn: "আমি চপস্টিক দিয়ে খেতে অভ্যস্ত হতে পারছি না।",
          slotValues: { "DOING/THING": "eating with chopsticks" },
          topicArea: "food",
        },
        {
          en: "I can't get used to the cold winters here.",
          bn: "আমি এখানকার ঠান্ডা শীতে অভ্যস্ত হতে পারছি না।",
          slotValues: { "DOING/THING": "the cold winters here" },
          topicArea: "daily_life",
        },
        {
          en: "I can't get used to waking up so early.",
          bn: "আমি এত সকালে উঠতে অভ্যস্ত হতে পারছি না।",
          slotValues: { "DOING/THING": "waking up so early" },
          topicArea: "daily_life",
        },
        {
          en: "I can't get used to the new office rules.",
          bn: "আমি অফিসের নতুন নিয়মে অভ্যস্ত হতে পারছি না।",
          slotValues: { "DOING/THING": "the new office rules" },
          topicArea: "work",
        },
        {
          en: "I can't get used to studying online.",
          bn: "আমি অনলাইনে পড়তে অভ্যস্ত হতে পারছি না।",
          slotValues: { "DOING/THING": "studying online" },
          topicArea: "education",
        },
        {
          en: "I can't get used to running in the heat.",
          bn: "আমি গরমে দৌড়াতে অভ্যস্ত হতে পারছি না।",
          slotValues: { "DOING/THING": "running in the heat" },
          topicArea: "health",
        },
        {
          en: "I can't get used to shopping without cash.",
          bn: "আমি নগদ ছাড়া কেনাকাটায় অভ্যস্ত হতে পারছি না।",
          slotValues: { "DOING/THING": "shopping without cash" },
          topicArea: "shopping",
        },
        {
          en: "I can't get used to being away from my friends.",
          bn: "আমি বন্ধুদের থেকে দূরে থাকতে অভ্যস্ত হতে পারছি না।",
          slotValues: { "DOING/THING": "being away from my friends" },
          topicArea: "relationships",
        },
        {
          en: "I can't get used to the food in this country.",
          bn: "আমি এই দেশের খাবারে অভ্যস্ত হতে পারছি না।",
          slotValues: { "DOING/THING": "the food in this country" },
          topicArea: "food",
        },
        {
          en: "I can't get used to working night shifts.",
          bn: "আমি রাতের শিফটে কাজ করতে অভ্যস্ত হতে পারছি না।",
          slotValues: { "DOING/THING": "working night shifts" },
          topicArea: "work",
        },
        {
          en: "I can't get used to the long commute.",
          bn: "আমি দীর্ঘ যাতায়াতে অভ্যস্ত হতে পারছি না।",
          slotValues: { "DOING/THING": "the long commute" },
          topicArea: "travel",
        },
        {
          en: "I can't get used to reading without my glasses.",
          bn: "আমি চশমা ছাড়া পড়তে অভ্যস্ত হতে পারছি না।",
          slotValues: { "DOING/THING": "reading without my glasses" },
          topicArea: "education",
        },
        {
          en: "I can't get used to sleeping without a fan.",
          bn: "আমি ফ্যান ছাড়া ঘুমাতে অভ্যস্ত হতে পারছি না।",
          slotValues: { "DOING/THING": "sleeping without a fan" },
          topicArea: "daily_life",
        },
        {
          en: "I can't get used to exercising every day.",
          bn: "আমি প্রতিদিন ব্যায়াম করতে অভ্যস্ত হতে পারছি না।",
          slotValues: { "DOING/THING": "exercising every day" },
          topicArea: "health",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "'Can't get used to' expresses ongoing difficulty adapting to a new situation. It shows that the process of adjustment is not succeeding.",
      usageNote_bn:
        "'Can't get used to' একটি নতুন পরিস্থিতির সাথে মানিয়ে নিতে চলমান অসুবিধা প্রকাশ করে। এটি দেখায় যে মানিয়ে নেওয়ার প্রক্রিয়া সফল হচ্ছে না।",
      combinableWith: ["C8.1", "C8.2"],
      banglaStructureMap:
        "আমি (Subject) + [DOING/THING] (Gerund/Noun) + এ অভ্যস্ত হতে পারছি না (can't get used to)",
    },
    {
      id: "C8.4",
      formula: "I wasn't used to [DOING/THING]",
      formula_bn: "আমি [কাজ/জিনিস]-এ অভ্যস্ত ছিলাম না",
      patternName: "Not Accustomed To (Past)",
      patternName_bn: "অভ্যস্ত ছিলাম না (অতীত)",
      slots: [
        {
          name: "DOING/THING",
          description:
            "A gerund or noun for something you were not accustomed to in the past",
          description_bn:
            "এমন কিছুর জন্য জেরান্ড বা বিশেষ্য যার সাথে আপনি অতীতে অভ্যস্ত ছিলেন না",
          acceptedTypes: ["gerund", "noun"],
          examples: [
            "the heat",
            "speaking in front of people",
            "working so hard",
          ],
        },
      ],
      examples: [
        {
          en: "I wasn't used to the heat when I first moved here.",
          bn: "এখানে প্রথম আসার সময় আমি গরমে অভ্যস্ত ছিলাম না।",
          slotValues: { "DOING/THING": "the heat" },
          topicArea: "daily_life",
        },
        {
          en: "I wasn't used to speaking in front of people.",
          bn: "আমি মানুষের সামনে কথা বলায় অভ্যস্ত ছিলাম না।",
          slotValues: { "DOING/THING": "speaking in front of people" },
          topicArea: "work",
        },
        {
          en: "I wasn't used to working so hard.",
          bn: "আমি এত কঠোর পরিশ্রমে অভ্যস্ত ছিলাম না।",
          slotValues: { "DOING/THING": "working so hard" },
          topicArea: "work",
        },
        {
          en: "I wasn't used to eating so late.",
          bn: "আমি এত দেরিতে খেতে অভ্যস্ত ছিলাম না।",
          slotValues: { "DOING/THING": "eating so late" },
          topicArea: "food",
        },
        {
          en: "I wasn't used to studying in a noisy environment.",
          bn: "আমি শোরগোলের পরিবেশে পড়তে অভ্যস্ত ছিলাম না।",
          slotValues: { "DOING/THING": "studying in a noisy environment" },
          topicArea: "education",
        },
        {
          en: "I wasn't used to running long distances.",
          bn: "আমি দীর্ঘ দূরত্ব দৌড়াতে অভ্যস্ত ছিলাম না।",
          slotValues: { "DOING/THING": "running long distances" },
          topicArea: "health",
        },
        {
          en: "I wasn't used to traveling by bus.",
          bn: "আমি বাসে ভ্রমণে অভ্যস্ত ছিলাম না।",
          slotValues: { "DOING/THING": "traveling by bus" },
          topicArea: "travel",
        },
        {
          en: "I wasn't used to spending so carefully.",
          bn: "আমি এত সাবধানে খরচ করায় অভ্যস্ত ছিলাম না।",
          slotValues: { "DOING/THING": "spending so carefully" },
          topicArea: "shopping",
        },
        {
          en: "I wasn't used to living with roommates.",
          bn: "আমি রুমমেটদের সাথে থাকতে অভ্যস্ত ছিলাম না।",
          slotValues: { "DOING/THING": "living with roommates" },
          topicArea: "relationships",
        },
        {
          en: "I wasn't used to bland food.",
          bn: "আমি পানসে খাবারে অভ্যস্ত ছিলাম না।",
          slotValues: { "DOING/THING": "bland food" },
          topicArea: "food",
        },
        {
          en: "I wasn't used to managing a team.",
          bn: "আমি দল পরিচালনায় অভ্যস্ত ছিলাম না।",
          slotValues: { "DOING/THING": "managing a team" },
          topicArea: "work",
        },
        {
          en: "I wasn't used to reading in English.",
          bn: "আমি ইংরেজিতে পড়তে অভ্যস্ত ছিলাম না।",
          slotValues: { "DOING/THING": "reading in English" },
          topicArea: "education",
        },
        {
          en: "I wasn't used to being alone on weekends.",
          bn: "আমি সপ্তাহান্তে একা থাকতে অভ্যস্ত ছিলাম না।",
          slotValues: { "DOING/THING": "being alone on weekends" },
          topicArea: "daily_life",
        },
        {
          en: "I wasn't used to waking up without an alarm.",
          bn: "আমি অ্যালার্ম ছাড়া ঘুম থেকে উঠতে অভ্যস্ত ছিলাম না।",
          slotValues: { "DOING/THING": "waking up without an alarm" },
          topicArea: "health",
        },
        {
          en: "I wasn't used to long-distance relationships.",
          bn: "আমি দূরত্বের সম্পর্কে অভ্যস্ত ছিলাম না।",
          slotValues: { "DOING/THING": "long-distance relationships" },
          topicArea: "relationships",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "'Wasn't used to' describes something you were not comfortable with at a specific time in the past. It often implies you may have adapted since then.",
      usageNote_bn:
        "'Wasn't used to' অতীতের একটি নির্দিষ্ট সময়ে আপনি যেটিতে স্বাচ্ছন্দ্য ছিলেন না তা বর্ণনা করে। এটি প্রায়ই বোঝায় যে আপনি তারপর থেকে মানিয়ে নিয়ে থাকতে পারেন।",
      combinableWith: ["C8.1", "C8.5"],
      banglaStructureMap:
        "আমি (Subject) + [DOING/THING] (Gerund/Noun) + এ অভ্যস্ত ছিলাম না (wasn't used to)",
    },
    {
      id: "C8.5",
      formula: "Are you used to [DOING/THING]?",
      formula_bn: "তুমি কি [কাজ/জিনিস]-এ অভ্যস্ত?",
      patternName: "Asking About Familiarity",
      patternName_bn: "অভ্যস্ততা সম্পর্কে জিজ্ঞাসা",
      slots: [
        {
          name: "DOING/THING",
          description:
            "A gerund or noun for something you are asking if the person is accustomed to",
          description_bn:
            "এমন কিছুর জন্য জেরান্ড বা বিশেষ্য যাতে ব্যক্তি অভ্যস্ত কিনা জিজ্ঞাসা করছেন",
          acceptedTypes: ["gerund", "noun"],
          examples: [
            "living here",
            "the weather",
            "working with the new team",
          ],
        },
      ],
      examples: [
        {
          en: "Are you used to living here now?",
          bn: "তুমি কি এখন এখানে থাকতে অভ্যস্ত?",
          slotValues: { "DOING/THING": "living here now" },
          topicArea: "daily_life",
        },
        {
          en: "Are you used to the weather in London?",
          bn: "তুমি কি লন্ডনের আবহাওয়ায় অভ্যস্ত?",
          slotValues: { "DOING/THING": "the weather in London" },
          topicArea: "travel",
        },
        {
          en: "Are you used to working with the new team?",
          bn: "তুমি কি নতুন দলের সাথে কাজ করতে অভ্যস্ত?",
          slotValues: { "DOING/THING": "working with the new team" },
          topicArea: "work",
        },
        {
          en: "Are you used to cooking for yourself?",
          bn: "তুমি কি নিজের জন্য রান্না করতে অভ্যস্ত?",
          slotValues: { "DOING/THING": "cooking for yourself" },
          topicArea: "food",
        },
        {
          en: "Are you used to speaking English every day?",
          bn: "তুমি কি প্রতিদিন ইংরেজি বলতে অভ্যস্ত?",
          slotValues: { "DOING/THING": "speaking English every day" },
          topicArea: "education",
        },
        {
          en: "Are you used to getting up at dawn?",
          bn: "তুমি কি ভোরে উঠতে অভ্যস্ত?",
          slotValues: { "DOING/THING": "getting up at dawn" },
          topicArea: "health",
        },
        {
          en: "Are you used to the noise in this area?",
          bn: "তুমি কি এই এলাকার শব্দে অভ্যস্ত?",
          slotValues: { "DOING/THING": "the noise in this area" },
          topicArea: "daily_life",
        },
        {
          en: "Are you used to shopping online?",
          bn: "তুমি কি অনলাইনে কেনাকাটায় অভ্যস্ত?",
          slotValues: { "DOING/THING": "shopping online" },
          topicArea: "shopping",
        },
        {
          en: "Are you used to being away from your family?",
          bn: "তুমি কি পরিবার থেকে দূরে থাকতে অভ্যস্ত?",
          slotValues: { "DOING/THING": "being away from your family" },
          topicArea: "relationships",
        },
        {
          en: "Are you used to eating with your hands?",
          bn: "তুমি কি হাত দিয়ে খেতে অভ্যস্ত?",
          slotValues: { "DOING/THING": "eating with your hands" },
          topicArea: "food",
        },
        {
          en: "Are you used to taking public transport?",
          bn: "তুমি কি গণপরিবহনে যেতে অভ্যস্ত?",
          slotValues: { "DOING/THING": "taking public transport" },
          topicArea: "travel",
        },
        {
          en: "Are you used to working under pressure?",
          bn: "তুমি কি চাপের মধ্যে কাজ করতে অভ্যস্ত?",
          slotValues: { "DOING/THING": "working under pressure" },
          topicArea: "work",
        },
        {
          en: "Are you used to studying with background music?",
          bn: "তুমি কি ব্যাকগ্রাউন্ড মিউজিক দিয়ে পড়তে অভ্যস্ত?",
          slotValues: { "DOING/THING": "studying with background music" },
          topicArea: "education",
        },
        {
          en: "Are you used to exercising in the evening?",
          bn: "তুমি কি সন্ধ্যায় ব্যায়াম করতে অভ্যস্ত?",
          slotValues: { "DOING/THING": "exercising in the evening" },
          topicArea: "health",
        },
        {
          en: "Are you used to staying up late?",
          bn: "তুমি কি রাত জাগতে অভ্যস্ত?",
          slotValues: { "DOING/THING": "staying up late" },
          topicArea: "daily_life",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "This question form checks if someone has already adapted to a situation. It is commonly used when someone has recently changed their lifestyle.",
      usageNote_bn:
        "এই প্রশ্ন রূপটি কেউ ইতিমধ্যে একটি পরিস্থিতির সাথে মানিয়ে নিয়েছে কিনা তা যাচাই করে। সাধারণত কেউ সম্প্রতি জীবনযাত্রা পরিবর্তন করলে এটি ব্যবহৃত হয়।",
      combinableWith: ["C8.1", "C8.2"],
      banglaStructureMap:
        "তুমি কি (Subject + Q) + [DOING/THING] (Gerund/Noun) + এ অভ্যস্ত? (used to + Q)",
    },
  ],
};
