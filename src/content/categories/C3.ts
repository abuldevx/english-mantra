import { PatternCategory } from "@/types/pattern";

export const categoryC3: PatternCategory = {
  id: "C3",
  slug: "past-actions",
  name: "What Already Happened (Past)",
  name_bn: "যা ইতোমধ্যে ঘটেছে (অতীত)",
  description:
    "Learn how to talk about completed actions and past events using the simple past tense.",
  description_bn:
    "সাধারণ অতীত কাল ব্যবহার করে সম্পন্ন কাজ এবং অতীত ঘটনা সম্পর্কে কথা বলতে শিখুন।",
  icon: "⏪",
  group: "C",
  groupName: "Actions & Time Patterns",
  groupName_bn: "কর্ম এবং সময়ের প্যাটার্ন",
  difficulty: "beginner",
  patterns: [
    {
      id: "C3.1",
      formula: "I [PAST ACTION] yesterday",
      formula_bn: "আমি গতকাল [কাজ] করেছি",
      patternName: "Yesterday's Action",
      patternName_bn: "গতকালের কাজ",
      slots: [
        {
          name: "PAST ACTION",
          description: "A verb in past tense describing what was done",
          description_bn:
            "একটি অতীত কালের ক্রিয়া যা কী করা হয়েছিল তা বর্ণনা করে",
          acceptedTypes: ["verb"],
          examples: ["went to the market", "finished", "called"],
        },
      ],
      examples: [
        {
          en: "I went to the market yesterday.",
          bn: "আমি গতকাল বাজারে গিয়েছিলাম।",
          slotValues: { "PAST ACTION": "went to the market" },
          topicArea: "shopping",
        },
        {
          en: "I finished my assignment yesterday.",
          bn: "আমি গতকাল আমার অ্যাসাইনমেন্ট শেষ করেছি।",
          slotValues: { "PAST ACTION": "finished my assignment" },
          topicArea: "education",
        },
        {
          en: "I called the doctor yesterday.",
          bn: "আমি গতকাল ডাক্তারকে ফোন করেছি।",
          slotValues: { "PAST ACTION": "called the doctor" },
          topicArea: "health",
        },
        {
          en: "I cooked biryani yesterday.",
          bn: "আমি গতকাল বিরিয়ানি রান্না করেছি।",
          slotValues: { "PAST ACTION": "cooked biryani" },
          topicArea: "food",
        },
        {
          en: "I met my old friend yesterday.",
          bn: "আমি গতকাল আমার পুরনো বন্ধুর সাথে দেখা করেছি।",
          slotValues: { "PAST ACTION": "met my old friend" },
          topicArea: "relationships",
        },
        {
          en: "I submitted my report yesterday.",
          bn: "আমি গতকাল আমার রিপোর্ট জমা দিয়েছি।",
          slotValues: { "PAST ACTION": "submitted my report" },
          topicArea: "work",
        },
        {
          en: "I visited the museum yesterday.",
          bn: "আমি গতকাল জাদুঘর দেখতে গিয়েছিলাম।",
          slotValues: { "PAST ACTION": "visited the museum" },
          topicArea: "travel",
        },
        {
          en: "I cleaned the entire house yesterday.",
          bn: "আমি গতকাল পুরো বাড়ি পরিষ্কার করেছি।",
          slotValues: { "PAST ACTION": "cleaned the entire house" },
          topicArea: "daily_life",
        },
        {
          en: "I bought a new shirt yesterday.",
          bn: "আমি গতকাল একটি নতুন শার্ট কিনেছি।",
          slotValues: { "PAST ACTION": "bought a new shirt" },
          topicArea: "shopping",
        },
        {
          en: "I exercised for an hour yesterday.",
          bn: "আমি গতকাল এক ঘণ্টা ব্যায়াম করেছি।",
          slotValues: { "PAST ACTION": "exercised for an hour" },
          topicArea: "health",
        },
        {
          en: "I studied three chapters yesterday.",
          bn: "আমি গতকাল তিনটি অধ্যায় পড়েছি।",
          slotValues: { "PAST ACTION": "studied three chapters" },
          topicArea: "education",
        },
        {
          en: "I ate sushi for dinner yesterday.",
          bn: "আমি গতকাল রাতের খাবারে সুশি খেয়েছি।",
          slotValues: { "PAST ACTION": "ate sushi for dinner" },
          topicArea: "food",
        },
        {
          en: "I talked to my boss yesterday.",
          bn: "আমি গতকাল আমার বসের সাথে কথা বলেছি।",
          slotValues: { "PAST ACTION": "talked to my boss" },
          topicArea: "work",
        },
        {
          en: "I walked five kilometers yesterday.",
          bn: "আমি গতকাল পাঁচ কিলোমিটার হেঁটেছি।",
          slotValues: { "PAST ACTION": "walked five kilometers" },
          topicArea: "health",
        },
        {
          en: "I watched a movie with my family yesterday.",
          bn: "আমি গতকাল পরিবারের সাথে একটি সিনেমা দেখেছি।",
          slotValues: { "PAST ACTION": "watched a movie with my family" },
          topicArea: "relationships",
        },
      ],
      formality: "casual",
      difficulty: "beginner",
      usageNote:
        "Use the past tense form of the verb. 'Yesterday' can also be placed at the beginning of the sentence. Irregular verbs have unique past forms (go->went, eat->ate).",
      usageNote_bn:
        "ক্রিয়ার অতীত কালের রূপ ব্যবহার করুন। 'Yesterday' বাক্যের শুরুতেও বসতে পারে। অনিয়মিত ক্রিয়ার নিজস্ব অতীত রূপ আছে (go->went, eat->ate)।",
      combinableWith: ["C3.5"],
      banglaStructureMap:
        "আমি (Subject) + গতকাল (Time) + [PAST ACTION] (Verb) + করেছি (Past Aux)",
    },
    {
      id: "C3.2",
      formula: "I didn't [ACTION]",
      formula_bn: "আমি [কাজ] করিনি",
      patternName: "Negative Past Action",
      patternName_bn: "নেতিবাচক অতীত কাজ",
      slots: [
        {
          name: "ACTION",
          description:
            "A base verb (not past tense) for something you did not do",
          description_bn:
            "একটি মূল ক্রিয়া (অতীত কাল নয়) যা আপনি করেননি",
          acceptedTypes: ["verb"],
          examples: ["go", "eat", "finish"],
        },
      ],
      examples: [
        {
          en: "I didn't go to work today.",
          bn: "আমি আজ কাজে যাইনি।",
          slotValues: { ACTION: "go to work today" },
          topicArea: "work",
        },
        {
          en: "I didn't eat breakfast this morning.",
          bn: "আমি আজ সকালে নাস্তা খাইনি।",
          slotValues: { ACTION: "eat breakfast this morning" },
          topicArea: "food",
        },
        {
          en: "I didn't finish my homework.",
          bn: "আমি আমার বাড়ির কাজ শেষ করিনি।",
          slotValues: { ACTION: "finish my homework" },
          topicArea: "education",
        },
        {
          en: "I didn't sleep well last night.",
          bn: "আমি গত রাতে ভালো ঘুমাইনি।",
          slotValues: { ACTION: "sleep well last night" },
          topicArea: "health",
        },
        {
          en: "I didn't call her back.",
          bn: "আমি তাকে ফোন করিনি।",
          slotValues: { ACTION: "call her back" },
          topicArea: "relationships",
        },
        {
          en: "I didn't buy anything at the mall.",
          bn: "আমি মলে কিছু কিনিনি।",
          slotValues: { ACTION: "buy anything at the mall" },
          topicArea: "shopping",
        },
        {
          en: "I didn't bring my umbrella.",
          bn: "আমি আমার ছাতা আনিনি।",
          slotValues: { ACTION: "bring my umbrella" },
          topicArea: "daily_life",
        },
        {
          en: "I didn't book the hotel room.",
          bn: "আমি হোটেল রুম বুক করিনি।",
          slotValues: { ACTION: "book the hotel room" },
          topicArea: "travel",
        },
        {
          en: "I didn't attend the meeting.",
          bn: "আমি মিটিংয়ে যোগ দিইনি।",
          slotValues: { ACTION: "attend the meeting" },
          topicArea: "work",
        },
        {
          en: "I didn't understand the question.",
          bn: "আমি প্রশ্নটি বুঝিনি।",
          slotValues: { ACTION: "understand the question" },
          topicArea: "education",
        },
        {
          en: "I didn't take my medicine.",
          bn: "আমি আমার ওষুধ খাইনি।",
          slotValues: { ACTION: "take my medicine" },
          topicArea: "health",
        },
        {
          en: "I didn't cook today.",
          bn: "আমি আজ রান্না করিনি।",
          slotValues: { ACTION: "cook today" },
          topicArea: "food",
        },
        {
          en: "I didn't tell anyone about it.",
          bn: "আমি কাউকে এটা বলিনি।",
          slotValues: { ACTION: "tell anyone about it" },
          topicArea: "relationships",
        },
        {
          en: "I didn't check the price before buying.",
          bn: "আমি কেনার আগে দাম দেখিনি।",
          slotValues: { ACTION: "check the price before buying" },
          topicArea: "shopping",
        },
        {
          en: "I didn't catch the train.",
          bn: "আমি ট্রেন ধরতে পারিনি।",
          slotValues: { ACTION: "catch the train" },
          topicArea: "travel",
        },
      ],
      formality: "casual",
      difficulty: "beginner",
      usageNote:
        "After 'didn't', always use the base form of the verb (not past tense). 'Didn't go' is correct, not 'didn't went'.",
      usageNote_bn:
        "'didn't'-এর পরে সবসময় ক্রিয়ার মূল রূপ ব্যবহার করুন (অতীত কাল নয়)। 'Didn't go' সঠিক, 'didn't went' নয়।",
      combinableWith: ["C3.1", "C3.3"],
      banglaStructureMap:
        "আমি (Subject) + [ACTION] (Verb) + করিনি (Neg Past Aux)",
    },
    {
      id: "C3.3",
      formula: "Did you [ACTION]?",
      formula_bn: "তুমি কি [কাজ] করেছ?",
      patternName: "Past Action Question",
      patternName_bn: "অতীত কাজের প্রশ্ন",
      slots: [
        {
          name: "ACTION",
          description: "A base verb for the action you are asking about",
          description_bn:
            "একটি মূল ক্রিয়া যে কাজ সম্পর্কে আপনি জিজ্ঞাসা করছেন",
          acceptedTypes: ["verb"],
          examples: ["see", "finish", "enjoy"],
        },
      ],
      examples: [
        {
          en: "Did you see the email I sent?",
          bn: "তুমি কি আমার পাঠানো ইমেইলটি দেখেছ?",
          slotValues: { ACTION: "see the email I sent" },
          topicArea: "work",
        },
        {
          en: "Did you finish your dinner?",
          bn: "তুমি কি রাতের খাবার শেষ করেছ?",
          slotValues: { ACTION: "finish your dinner" },
          topicArea: "food",
        },
        {
          en: "Did you enjoy the movie?",
          bn: "তুমি কি সিনেমাটি উপভোগ করেছ?",
          slotValues: { ACTION: "enjoy the movie" },
          topicArea: "daily_life",
        },
        {
          en: "Did you call the plumber?",
          bn: "তুমি কি প্লাম্বারকে ফোন করেছ?",
          slotValues: { ACTION: "call the plumber" },
          topicArea: "daily_life",
        },
        {
          en: "Did you pass the exam?",
          bn: "তুমি কি পরীক্ষায় পাশ করেছ?",
          slotValues: { ACTION: "pass the exam" },
          topicArea: "education",
        },
        {
          en: "Did you take your medicine?",
          bn: "তুমি কি তোমার ওষুধ খেয়েছ?",
          slotValues: { ACTION: "take your medicine" },
          topicArea: "health",
        },
        {
          en: "Did you buy the groceries?",
          bn: "তুমি কি মুদি কিনেছ?",
          slotValues: { ACTION: "buy the groceries" },
          topicArea: "shopping",
        },
        {
          en: "Did you book the flight tickets?",
          bn: "তুমি কি বিমানের টিকিট বুক করেছ?",
          slotValues: { ACTION: "book the flight tickets" },
          topicArea: "travel",
        },
        {
          en: "Did you talk to your manager?",
          bn: "তুমি কি তোমার ম্যানেজারের সাথে কথা বলেছ?",
          slotValues: { ACTION: "talk to your manager" },
          topicArea: "work",
        },
        {
          en: "Did you remember to lock the door?",
          bn: "তুমি কি দরজা তালা দিতে মনে রেখেছ?",
          slotValues: { ACTION: "remember to lock the door" },
          topicArea: "daily_life",
        },
        {
          en: "Did you invite your cousin?",
          bn: "তুমি কি তোমার চাচাতো ভাইকে দাওয়াত দিয়েছ?",
          slotValues: { ACTION: "invite your cousin" },
          topicArea: "relationships",
        },
        {
          en: "Did you eat lunch?",
          bn: "তুমি কি দুপুরের খাবার খেয়েছ?",
          slotValues: { ACTION: "eat lunch" },
          topicArea: "food",
        },
        {
          en: "Did you read the instructions?",
          bn: "তুমি কি নির্দেশনাগুলো পড়েছ?",
          slotValues: { ACTION: "read the instructions" },
          topicArea: "education",
        },
        {
          en: "Did you visit the doctor?",
          bn: "তুমি কি ডাক্তারের কাছে গিয়েছ?",
          slotValues: { ACTION: "visit the doctor" },
          topicArea: "health",
        },
        {
          en: "Did you get the receipt?",
          bn: "তুমি কি রসিদটি পেয়েছ?",
          slotValues: { ACTION: "get the receipt" },
          topicArea: "shopping",
        },
      ],
      formality: "casual",
      difficulty: "beginner",
      usageNote:
        "Use 'Did' at the start to form a yes/no question about the past. The main verb stays in the base form after 'Did'.",
      usageNote_bn:
        "অতীত সম্পর্কে হ্যাঁ/না প্রশ্ন করতে 'Did' দিয়ে শুরু করুন। 'Did'-এর পরে মূল ক্রিয়া মূল রূপে থাকে।",
      combinableWith: ["C3.1", "C3.2"],
      banglaStructureMap:
        "তুমি কি (Subject + Q) + [ACTION] (Verb) + করেছ? (Past Aux + Q)",
    },
    {
      id: "C3.4",
      formula: "I was [DOING] when [EVENT]",
      formula_bn: "আমি [কাজ] করছিলাম যখন [ঘটনা]",
      patternName: "Interrupted Past Action",
      patternName_bn: "বাধাপ্রাপ্ত অতীত কাজ",
      slots: [
        {
          name: "DOING",
          description: "A verb in -ing form for the ongoing past action",
          description_bn:
            "একটি -ing রূপের ক্রিয়া যা চলমান অতীত কাজ বর্ণনা করে",
          acceptedTypes: ["gerund"],
          examples: ["sleeping", "walking", "cooking"],
        },
        {
          name: "EVENT",
          description:
            "A clause describing the interrupting event in past simple",
          description_bn:
            "সাধারণ অতীত কালে বাধাদানকারী ঘটনা বর্ণনাকারী একটি উপবাক্য",
          acceptedTypes: ["clause"],
          examples: [
            "the phone rang",
            "it started raining",
            "someone knocked",
          ],
        },
      ],
      examples: [
        {
          en: "I was sleeping when the alarm went off.",
          bn: "আমি ঘুমাচ্ছিলাম যখন অ্যালার্ম বেজে উঠল।",
          slotValues: { DOING: "sleeping", EVENT: "the alarm went off" },
          topicArea: "daily_life",
        },
        {
          en: "I was cooking when the power went out.",
          bn: "আমি রান্না করছিলাম যখন বিদ্যুৎ চলে গেল।",
          slotValues: { DOING: "cooking", EVENT: "the power went out" },
          topicArea: "food",
        },
        {
          en: "I was walking to the office when it started raining.",
          bn: "আমি অফিসে হেঁটে যাচ্ছিলাম যখন বৃষ্টি শুরু হলো।",
          slotValues: {
            DOING: "walking to the office",
            EVENT: "it started raining",
          },
          topicArea: "travel",
        },
        {
          en: "I was studying when my friend called.",
          bn: "আমি পড়ছিলাম যখন আমার বন্ধু ফোন করল।",
          slotValues: { DOING: "studying", EVENT: "my friend called" },
          topicArea: "education",
        },
        {
          en: "I was working on the presentation when the boss arrived.",
          bn: "আমি প্রেজেন্টেশনে কাজ করছিলাম যখন বস এসে পৌঁছালেন।",
          slotValues: {
            DOING: "working on the presentation",
            EVENT: "the boss arrived",
          },
          topicArea: "work",
        },
        {
          en: "I was exercising when I felt a pain in my knee.",
          bn: "আমি ব্যায়াম করছিলাম যখন আমার হাঁটুতে ব্যথা অনুভব করলাম।",
          slotValues: {
            DOING: "exercising",
            EVENT: "I felt a pain in my knee",
          },
          topicArea: "health",
        },
        {
          en: "I was talking to my mother when someone knocked on the door.",
          bn: "আমি আমার মায়ের সাথে কথা বলছিলাম যখন কেউ দরজায় কড়া নাড়ল।",
          slotValues: {
            DOING: "talking to my mother",
            EVENT: "someone knocked on the door",
          },
          topicArea: "relationships",
        },
        {
          en: "I was watching TV when the earthquake happened.",
          bn: "আমি টিভি দেখছিলাম যখন ভূমিকম্প হলো।",
          slotValues: {
            DOING: "watching TV",
            EVENT: "the earthquake happened",
          },
          topicArea: "daily_life",
        },
        {
          en: "I was shopping when I ran into my neighbor.",
          bn: "আমি কেনাকাটা করছিলাম যখন আমার প্রতিবেশীর সাথে দেখা হলো।",
          slotValues: {
            DOING: "shopping",
            EVENT: "I ran into my neighbor",
          },
          topicArea: "shopping",
        },
        {
          en: "I was driving home when the tire burst.",
          bn: "আমি বাড়ি ফিরছিলাম যখন টায়ার ফেটে গেল।",
          slotValues: { DOING: "driving home", EVENT: "the tire burst" },
          topicArea: "travel",
        },
        {
          en: "I was eating lunch when my manager called a meeting.",
          bn: "আমি দুপুরের খাবার খাচ্ছিলাম যখন আমার ম্যানেজার মিটিং ডাকলেন।",
          slotValues: {
            DOING: "eating lunch",
            EVENT: "my manager called a meeting",
          },
          topicArea: "work",
        },
        {
          en: "I was reading when the lights went off.",
          bn: "আমি পড়ছিলাম যখন আলো নিভে গেল।",
          slotValues: { DOING: "reading", EVENT: "the lights went off" },
          topicArea: "education",
        },
        {
          en: "I was taking a shower when the doorbell rang.",
          bn: "আমি গোসল করছিলাম যখন ডোরবেল বাজল।",
          slotValues: {
            DOING: "taking a shower",
            EVENT: "the doorbell rang",
          },
          topicArea: "daily_life",
        },
        {
          en: "I was jogging when I twisted my ankle.",
          bn: "আমি জগিং করছিলাম যখন আমার গোড়ালি মচকে গেল।",
          slotValues: {
            DOING: "jogging",
            EVENT: "I twisted my ankle",
          },
          topicArea: "health",
        },
        {
          en: "I was making tea when the milk boiled over.",
          bn: "আমি চা বানাচ্ছিলাম যখন দুধ উথলে পড়ল।",
          slotValues: {
            DOING: "making tea",
            EVENT: "the milk boiled over",
          },
          topicArea: "food",
        },
      ],
      formality: "casual",
      difficulty: "beginner",
      usageNote:
        "This pattern combines past continuous (was + -ing) with past simple to show one action was interrupted by another. The ongoing action uses 'was/were + -ing' and the interrupting event uses past simple.",
      usageNote_bn:
        "এই প্যাটার্নটি অতীত চলমান কাল (was + -ing) এবং সাধারণ অতীত কালকে একত্রিত করে দেখায় যে একটি কাজ অন্য একটি দ্বারা বাধাপ্রাপ্ত হয়েছিল। চলমান কাজটি 'was/were + -ing' ব্যবহার করে এবং বাধাদানকারী ঘটনা সাধারণ অতীত কাল ব্যবহার করে।",
      combinableWith: ["C3.1"],
      banglaStructureMap:
        "আমি (Subject) + [DOING] (Verb) + করছিলাম (Past Prog) + যখন (Conj) + [EVENT] (Clause)",
    },
    {
      id: "C3.5",
      formula: "[PERSON] [PAST ACTION] last [TIME]",
      formula_bn: "[ব্যক্তি] গত [সময়] [কাজ] করেছে",
      patternName: "Someone's Past Action",
      patternName_bn: "কারো অতীত কাজ",
      slots: [
        {
          name: "PERSON",
          description: "The person who performed the action",
          description_bn: "যে ব্যক্তি কাজটি করেছে",
          acceptedTypes: ["person"],
          examples: ["He", "She", "My friend"],
        },
        {
          name: "PAST ACTION",
          description: "A verb in past tense describing the completed action",
          description_bn:
            "একটি অতীত কালের ক্রিয়া যা সম্পন্ন কাজ বর্ণনা করে",
          acceptedTypes: ["verb"],
          examples: ["visited", "graduated", "traveled"],
        },
        {
          name: "TIME",
          description: "A time period (week, month, year, summer, etc.)",
          description_bn: "একটি সময়কাল (সপ্তাহ, মাস, বছর, গ্রীষ্ম ইত্যাদি)",
          acceptedTypes: ["time"],
          examples: ["week", "month", "year"],
        },
      ],
      examples: [
        {
          en: "She visited her parents last weekend.",
          bn: "সে গত সপ্তাহান্তে তার বাবা-মায়ের সাথে দেখা করেছে।",
          slotValues: {
            PERSON: "She",
            "PAST ACTION": "visited her parents",
            TIME: "weekend",
          },
          topicArea: "relationships",
        },
        {
          en: "He graduated from university last year.",
          bn: "সে গত বছর বিশ্ববিদ্যালয় থেকে স্নাতক হয়েছে।",
          slotValues: {
            PERSON: "He",
            "PAST ACTION": "graduated from university",
            TIME: "year",
          },
          topicArea: "education",
        },
        {
          en: "My friend traveled to Japan last summer.",
          bn: "আমার বন্ধু গত গ্রীষ্মে জাপান ভ্রমণ করেছে।",
          slotValues: {
            PERSON: "My friend",
            "PAST ACTION": "traveled to Japan",
            TIME: "summer",
          },
          topicArea: "travel",
        },
        {
          en: "She changed her job last month.",
          bn: "সে গত মাসে তার চাকরি বদলেছে।",
          slotValues: {
            PERSON: "She",
            "PAST ACTION": "changed her job",
            TIME: "month",
          },
          topicArea: "work",
        },
        {
          en: "He had surgery last week.",
          bn: "তার গত সপ্তাহে সার্জারি হয়েছে।",
          slotValues: {
            PERSON: "He",
            "PAST ACTION": "had surgery",
            TIME: "week",
          },
          topicArea: "health",
        },
        {
          en: "My sister bought a new car last month.",
          bn: "আমার বোন গত মাসে একটি নতুন গাড়ি কিনেছে।",
          slotValues: {
            PERSON: "My sister",
            "PAST ACTION": "bought a new car",
            TIME: "month",
          },
          topicArea: "shopping",
        },
        {
          en: "He cooked a special dinner last Friday.",
          bn: "সে গত শুক্রবার একটি বিশেষ রাতের খাবার রান্না করেছে।",
          slotValues: {
            PERSON: "He",
            "PAST ACTION": "cooked a special dinner",
            TIME: "Friday",
          },
          topicArea: "food",
        },
        {
          en: "She moved to a new apartment last week.",
          bn: "সে গত সপ্তাহে একটি নতুন অ্যাপার্টমেন্টে চলে গেছে।",
          slotValues: {
            PERSON: "She",
            "PAST ACTION": "moved to a new apartment",
            TIME: "week",
          },
          topicArea: "daily_life",
        },
        {
          en: "My colleague presented at a conference last month.",
          bn: "আমার সহকর্মী গত মাসে একটি সম্মেলনে উপস্থাপনা করেছে।",
          slotValues: {
            PERSON: "My colleague",
            "PAST ACTION": "presented at a conference",
            TIME: "month",
          },
          topicArea: "work",
        },
        {
          en: "He completed his training last quarter.",
          bn: "সে গত ত্রৈমাসিকে তার প্রশিক্ষণ সম্পন্ন করেছে।",
          slotValues: {
            PERSON: "He",
            "PAST ACTION": "completed his training",
            TIME: "quarter",
          },
          topicArea: "education",
        },
        {
          en: "She ran a marathon last spring.",
          bn: "সে গত বসন্তে একটি ম্যারাথনে দৌড়েছে।",
          slotValues: {
            PERSON: "She",
            "PAST ACTION": "ran a marathon",
            TIME: "spring",
          },
          topicArea: "health",
        },
        {
          en: "My brother got married last winter.",
          bn: "আমার ভাই গত শীতে বিয়ে করেছে।",
          slotValues: {
            PERSON: "My brother",
            "PAST ACTION": "got married",
            TIME: "winter",
          },
          topicArea: "relationships",
        },
        {
          en: "She returned from her trip last Tuesday.",
          bn: "সে গত মঙ্গলবার তার ভ্রমণ থেকে ফিরেছে।",
          slotValues: {
            PERSON: "She",
            "PAST ACTION": "returned from her trip",
            TIME: "Tuesday",
          },
          topicArea: "travel",
        },
        {
          en: "He repainted his room last weekend.",
          bn: "সে গত সপ্তাহান্তে তার ঘর আবার রং করেছে।",
          slotValues: {
            PERSON: "He",
            "PAST ACTION": "repainted his room",
            TIME: "weekend",
          },
          topicArea: "daily_life",
        },
        {
          en: "My neighbor sold her old furniture last week.",
          bn: "আমার প্রতিবেশী গত সপ্তাহে তার পুরনো আসবাবপত্র বিক্রি করেছে।",
          slotValues: {
            PERSON: "My neighbor",
            "PAST ACTION": "sold her old furniture",
            TIME: "week",
          },
          topicArea: "shopping",
        },
      ],
      formality: "casual",
      difficulty: "beginner",
      usageNote:
        "'Last + time' refers to the most recent occurrence of that time period. Use the past tense of the verb. This pattern works for any person.",
      usageNote_bn:
        "'Last + time' সেই সময়কালের সবচেয়ে সাম্প্রতিক ঘটনা নির্দেশ করে। ক্রিয়ার অতীত কাল ব্যবহার করুন। এই প্যাটার্ন যেকোনো ব্যক্তির জন্য কাজ করে।",
      combinableWith: ["C3.1"],
      banglaStructureMap:
        "[PERSON] (Subject) + গত [TIME] (Time) + [PAST ACTION] (Verb) + করেছে (Past Aux)",
    },
    {
      id: "C3.6",
      formula: "I just [PAST ACTION]",
      formula_bn: "আমি এইমাত্র [অতীত কাজ]",
      patternName: "Recent Past with 'Just'",
      patternName_bn: "'Just' দিয়ে সাম্প্রতিক অতীত",
      slots: [
        {
          name: "PAST ACTION",
          description: "A verb in past tense describing something that happened very recently",
          description_bn:
            "একটি অতীত কালের ক্রিয়া যা খুব সম্প্রতি ঘটেছে তা বর্ণনা করে",
          acceptedTypes: ["verb"],
          examples: ["finished", "called", "arrived"],
        },
      ],
      examples: [
        {
          en: "I just finished my homework.",
          bn: "আমি এইমাত্র আমার বাড়ির কাজ শেষ করেছি।",
          slotValues: { "PAST ACTION": "finished my homework" },
          topicArea: "education",
        },
        {
          en: "She just called me.",
          bn: "সে এইমাত্র আমাকে ফোন করেছে।",
          slotValues: { "PAST ACTION": "called me" },
          topicArea: "relationships",
        },
        {
          en: "We just arrived at the hotel.",
          bn: "আমরা এইমাত্র হোটেলে পৌঁছেছি।",
          slotValues: { "PAST ACTION": "arrived at the hotel" },
          topicArea: "travel",
        },
        {
          en: "He just left the office.",
          bn: "সে এইমাত্র অফিস থেকে বের হয়েছে।",
          slotValues: { "PAST ACTION": "left the office" },
          topicArea: "work",
        },
        {
          en: "They just got married.",
          bn: "তারা এইমাত্র বিয়ে করেছে।",
          slotValues: { "PAST ACTION": "got married" },
          topicArea: "relationships",
        },
        {
          en: "I just ate lunch.",
          bn: "আমি এইমাত্র দুপুরের খাবার খেয়েছি।",
          slotValues: { "PAST ACTION": "ate lunch" },
          topicArea: "food",
        },
        {
          en: "She just bought a new phone.",
          bn: "সে এইমাত্র একটি নতুন ফোন কিনেছে।",
          slotValues: { "PAST ACTION": "bought a new phone" },
          topicArea: "shopping",
        },
        {
          en: "I just woke up.",
          bn: "আমি এইমাত্র ঘুম থেকে উঠেছি।",
          slotValues: { "PAST ACTION": "woke up" },
          topicArea: "daily_life",
        },
        {
          en: "He just passed the exam.",
          bn: "সে এইমাত্র পরীক্ষায় পাস করেছে।",
          slotValues: { "PAST ACTION": "passed the exam" },
          topicArea: "education",
        },
        {
          en: "I just took my medicine.",
          bn: "আমি এইমাত্র আমার ওষুধ খেয়েছি।",
          slotValues: { "PAST ACTION": "took my medicine" },
          topicArea: "health",
        },
        {
          en: "We just returned from our vacation.",
          bn: "আমরা এইমাত্র ছুটি থেকে ফিরেছি।",
          slotValues: { "PAST ACTION": "returned from our vacation" },
          topicArea: "travel",
        },
        {
          en: "She just sent the email.",
          bn: "সে এইমাত্র ইমেইল পাঠিয়েছে।",
          slotValues: { "PAST ACTION": "sent the email" },
          topicArea: "work",
        },
        {
          en: "I just finished cooking dinner.",
          bn: "আমি এইমাত্র রাতের খাবার রান্না শেষ করেছি।",
          slotValues: { "PAST ACTION": "finished cooking dinner" },
          topicArea: "food",
        },
        {
          en: "He just moved to a new apartment.",
          bn: "সে এইমাত্র নতুন অ্যাপার্টমেন্টে চলে গেছে।",
          slotValues: { "PAST ACTION": "moved to a new apartment" },
          topicArea: "daily_life",
        },
        {
          en: "I just paid for the groceries.",
          bn: "আমি এইমাত্র মুদির টাকা দিয়েছি।",
          slotValues: { "PAST ACTION": "paid for the groceries" },
          topicArea: "shopping",
        },
      ],
      formality: "casual",
      difficulty: "beginner",
      usageNote:
        "'Just' is placed before the past tense verb to indicate an action completed very recently. In American English, it is commonly used with simple past. In British English, it is often used with present perfect ('I have just finished').",
      usageNote_bn:
        "'Just' অতীত কালের ক্রিয়ার আগে বসে খুব সম্প্রতি সম্পন্ন একটি কাজ নির্দেশ করে। আমেরিকান ইংরেজিতে এটি সাধারণত সিম্পল পাস্টের সাথে ব্যবহৃত হয়। ব্রিটিশ ইংরেজিতে এটি প্রায়ই প্রেজেন্ট পারফেক্টের সাথে ব্যবহৃত হয় ('I have just finished')।",
      combinableWith: ["C3.1"],
      banglaStructureMap:
        "আমি (Subject) + এইমাত্র (Adverb) + [PAST ACTION] (Verb) + করেছি (Past Aux)",
    },
    {
      id: "C3.7",
      formula: "I ended up [DOING]",
      formula_bn: "শেষ পর্যন্ত আমি [কাজ] করলাম",
      patternName: "Unplanned Result (Ended Up)",
      patternName_bn: "অপরিকল্পিত ফলাফল (Ended Up)",
      slots: [
        {
          name: "DOING",
          description: "A verb in -ing form for the unplanned action or outcome",
          description_bn:
            "একটি -ing রূপের ক্রিয়া যা অপরিকল্পিত কাজ বা ফলাফল বর্ণনা করে",
          acceptedTypes: ["gerund"],
          examples: ["staying late", "going to a different restaurant", "buying three dresses"],
        },
      ],
      examples: [
        {
          en: "I ended up staying late at the office.",
          bn: "শেষ পর্যন্ত আমি অফিসে দেরি পর্যন্ত থেকে গেলাম।",
          slotValues: { DOING: "staying late at the office" },
          topicArea: "work",
        },
        {
          en: "We ended up going to a different restaurant.",
          bn: "শেষ পর্যন্ত আমরা অন্য একটি রেস্তোরাঁয় গেলাম।",
          slotValues: { DOING: "going to a different restaurant" },
          topicArea: "food",
        },
        {
          en: "She ended up buying three dresses.",
          bn: "শেষ পর্যন্ত সে তিনটি পোশাক কিনে ফেলল।",
          slotValues: { DOING: "buying three dresses" },
          topicArea: "shopping",
        },
        {
          en: "He ended up getting the job.",
          bn: "শেষ পর্যন্ত সে চাকরিটি পেয়ে গেল।",
          slotValues: { DOING: "getting the job" },
          topicArea: "work",
        },
        {
          en: "I ended up walking home in the rain.",
          bn: "শেষ পর্যন্ত আমি বৃষ্টিতে হেঁটে বাড়ি ফিরলাম।",
          slotValues: { DOING: "walking home in the rain" },
          topicArea: "daily_life",
        },
        {
          en: "We ended up taking a longer route.",
          bn: "শেষ পর্যন্ত আমরা লম্বা পথে গেলাম।",
          slotValues: { DOING: "taking a longer route" },
          topicArea: "travel",
        },
        {
          en: "She ended up studying all night.",
          bn: "শেষ পর্যন্ত সে সারারাত পড়াশোনা করল।",
          slotValues: { DOING: "studying all night" },
          topicArea: "education",
        },
        {
          en: "I ended up cooking for everyone.",
          bn: "শেষ পর্যন্ত আমি সবার জন্য রান্না করলাম।",
          slotValues: { DOING: "cooking for everyone" },
          topicArea: "food",
        },
        {
          en: "He ended up apologizing to her.",
          bn: "শেষ পর্যন্ত সে তার কাছে ক্ষমা চাইল।",
          slotValues: { DOING: "apologizing to her" },
          topicArea: "relationships",
        },
        {
          en: "I ended up spending more than I planned.",
          bn: "শেষ পর্যন্ত আমি পরিকল্পনার চেয়ে বেশি খরচ করে ফেললাম।",
          slotValues: { DOING: "spending more than I planned" },
          topicArea: "shopping",
        },
        {
          en: "We ended up missing the flight.",
          bn: "শেষ পর্যন্ত আমরা ফ্লাইট মিস করে ফেললাম।",
          slotValues: { DOING: "missing the flight" },
          topicArea: "travel",
        },
        {
          en: "She ended up becoming a doctor.",
          bn: "শেষ পর্যন্ত সে ডাক্তার হয়ে গেল।",
          slotValues: { DOING: "becoming a doctor" },
          topicArea: "health",
        },
        {
          en: "I ended up sleeping on the couch.",
          bn: "শেষ পর্যন্ত আমি সোফায় ঘুমিয়ে পড়লাম।",
          slotValues: { DOING: "sleeping on the couch" },
          topicArea: "daily_life",
        },
        {
          en: "He ended up teaching the whole class.",
          bn: "শেষ পর্যন্ত সে পুরো ক্লাস পড়িয়ে দিল।",
          slotValues: { DOING: "teaching the whole class" },
          topicArea: "education",
        },
        {
          en: "They ended up living next door to each other.",
          bn: "শেষ পর্যন্ত তারা একে অপরের পাশের বাড়িতে থাকতে লাগল।",
          slotValues: { DOING: "living next door to each other" },
          topicArea: "relationships",
        },
      ],
      formality: "casual",
      difficulty: "beginner",
      usageNote:
        "'End up' followed by a gerund (-ing form) describes an unplanned or unexpected result. It shows that the outcome was different from what was originally intended or expected.",
      usageNote_bn:
        "'End up'-এর পরে জেরান্ড (-ing রূপ) একটি অপরিকল্পিত বা অপ্রত্যাশিত ফলাফল বর্ণনা করে। এটি দেখায় যে ফলাফল মূলত যা ইচ্ছা বা প্রত্যাশিত ছিল তার থেকে ভিন্ন ছিল।",
      combinableWith: ["C3.1", "C3.4"],
      banglaStructureMap:
        "শেষ পর্যন্ত (Adverb) + আমি (Subject) + [DOING] (Verb) + করলাম (Past Aux)",
    },
  ],
};
