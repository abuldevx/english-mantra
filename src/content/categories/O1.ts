import { PatternCategory } from "@/types/pattern";

export const categoryO1: PatternCategory = {
  id: "O1",
  slug: "starting-a-story",
  name: "Starting a Story",
  name_bn: "গল্প শুরু করা",
  description:
    "Learn natural ways to begin telling a story or recount an event in English.",
  description_bn:
    "ইংরেজিতে স্বাভাবিকভাবে গল্প বলা বা ঘটনা বর্ণনা শুরু করার উপায় শিখুন।",
  icon: "📖",
  group: "O",
  groupName: "Narrating & Storytelling",
  groupName_bn: "বর্ণনা ও গল্প বলা",
  difficulty: "intermediate",
  patterns: [
    {
      id: "O1.1",
      formula: "One day, [EVENT]",
      formula_bn: "একদিন, [ঘটনা]",
      patternName: "One Day (Story Opener)",
      patternName_bn: "একদিন (গল্পের সূচনা)",
      slots: [
        {
          name: "EVENT",
          description: "A past event that begins the story",
          description_bn: "গল্প শুরু করে এমন একটি অতীত ঘটনা",
          acceptedTypes: ["clause", "event"],
          examples: [
            "I got a phone call from an old friend",
            "I found a wallet on the street",
            "something strange happened",
          ],
        },
      ],
      examples: [
        {
          en: "One day, I got a phone call from an old friend.",
          bn: "একদিন, আমি একজন পুরোনো বন্ধুর ফোন পেলাম।",
          slotValues: { EVENT: "I got a phone call from an old friend" },
          topicArea: "relationships",
        },
        {
          en: "One day, I found a wallet on the street.",
          bn: "একদিন, আমি রাস্তায় একটা মানিব্যাগ পেলাম।",
          slotValues: { EVENT: "I found a wallet on the street" },
          topicArea: "daily_life",
        },
        {
          en: "One day, something strange happened at work.",
          bn: "একদিন, অফিসে অদ্ভুত একটা ঘটনা ঘটল।",
          slotValues: { EVENT: "something strange happened at work" },
          topicArea: "work",
        },
        {
          en: "One day, I decided to learn cooking.",
          bn: "একদিন, আমি রান্না শেখার সিদ্ধান্ত নিলাম।",
          slotValues: { EVENT: "I decided to learn cooking" },
          topicArea: "food",
        },
        {
          en: "One day, I missed my bus and had to walk.",
          bn: "একদিন, আমার বাস মিস হলো আর হেঁটে যেতে হলো।",
          slotValues: { EVENT: "I missed my bus and had to walk" },
          topicArea: "travel",
        },
        {
          en: "One day, my neighbor knocked on my door at midnight.",
          bn: "একদিন, আমার প্রতিবেশী মাঝরাতে দরজায় নক করল।",
          slotValues: {
            EVENT: "my neighbor knocked on my door at midnight",
          },
          topicArea: "daily_life",
        },
        {
          en: "One day, I woke up with a terrible headache.",
          bn: "একদিন, আমি ভয়ানক মাথা ব্যথা নিয়ে ঘুম থেকে উঠলাম।",
          slotValues: { EVENT: "I woke up with a terrible headache" },
          topicArea: "health",
        },
        {
          en: "One day, my boss called me into his office.",
          bn: "একদিন, আমার বস আমাকে তার অফিসে ডাকলেন।",
          slotValues: { EVENT: "my boss called me into his office" },
          topicArea: "work",
        },
        {
          en: "One day, I received a letter from a university.",
          bn: "একদিন, আমি একটা বিশ্ববিদ্যালয় থেকে চিঠি পেলাম।",
          slotValues: { EVENT: "I received a letter from a university" },
          topicArea: "education",
        },
        {
          en: "One day, I saw a famous actor at the mall.",
          bn: "একদিন, মলে আমি একজন বিখ্যাত অভিনেতাকে দেখলাম।",
          slotValues: { EVENT: "I saw a famous actor at the mall" },
          topicArea: "shopping",
        },
        {
          en: "One day, I tried a completely new recipe.",
          bn: "একদিন, আমি একেবারে নতুন একটা রেসিপি ট্রাই করলাম।",
          slotValues: { EVENT: "I tried a completely new recipe" },
          topicArea: "food",
        },
        {
          en: "One day, we got lost in the mountains.",
          bn: "একদিন, আমরা পাহাড়ে হারিয়ে গেলাম।",
          slotValues: { EVENT: "we got lost in the mountains" },
          topicArea: "travel",
        },
        {
          en: "One day, I ran into my childhood teacher.",
          bn: "একদিন, আমি আমার ছোটবেলার শিক্ষকের সাথে দেখা হলো।",
          slotValues: { EVENT: "I ran into my childhood teacher" },
          topicArea: "relationships",
        },
        {
          en: "One day, the power went out during an important meeting.",
          bn: "একদিন, গুরুত্বপূর্ণ মিটিংয়ের সময় বিদ্যুৎ চলে গেল।",
          slotValues: {
            EVENT: "the power went out during an important meeting",
          },
          topicArea: "work",
        },
        {
          en: "One day, I found a very rare book at a second-hand shop.",
          bn: "একদিন, আমি একটা পুরোনো দোকানে খুব দুর্লভ একটা বই পেলাম।",
          slotValues: {
            EVENT: "I found a very rare book at a second-hand shop",
          },
          topicArea: "education",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "'One day' is a classic and simple way to begin telling a past story. It sets a casual, conversational tone.",
      usageNote_bn:
        "'One day' অতীত গল্প শুরু করার একটি ক্লাসিক ও সহজ উপায়। এটি সাধারণ, কথোপকথনমূলক সুর তৈরি করে।",
    },
    {
      id: "O1.2",
      formula: "So, what happened was [CLAUSE]",
      formula_bn: "তো, যেটা হয়েছিল [বাক্যাংশ]",
      patternName: "What Happened Was (Explanation)",
      patternName_bn: "যেটা হয়েছিল (ব্যাখ্যা)",
      slots: [
        {
          name: "CLAUSE",
          description: "The main event or explanation",
          description_bn: "মূল ঘটনা বা ব্যাখ্যা",
          acceptedTypes: ["clause"],
          examples: [
            "I forgot to set my alarm",
            "the flight got cancelled",
            "they changed the schedule without telling us",
          ],
        },
      ],
      examples: [
        {
          en: "So, what happened was I forgot to set my alarm.",
          bn: "তো, যেটা হয়েছিল আমি অ্যালার্ম দিতে ভুলে গেছিলাম।",
          slotValues: { CLAUSE: "I forgot to set my alarm" },
          topicArea: "daily_life",
        },
        {
          en: "So, what happened was the flight got cancelled.",
          bn: "তো, যেটা হয়েছিল ফ্লাইট বাতিল হয়ে গেল।",
          slotValues: { CLAUSE: "the flight got cancelled" },
          topicArea: "travel",
        },
        {
          en: "So, what happened was they changed the schedule without telling us.",
          bn: "তো, যেটা হয়েছিল তারা আমাদের না বলেই সিডিউল বদলে দিল।",
          slotValues: {
            CLAUSE: "they changed the schedule without telling us",
          },
          topicArea: "work",
        },
        {
          en: "So, what happened was the restaurant was fully booked.",
          bn: "তো, যেটা হয়েছিল রেস্তোরাঁটা পুরো বুক ছিল।",
          slotValues: { CLAUSE: "the restaurant was fully booked" },
          topicArea: "food",
        },
        {
          en: "So, what happened was my phone died in the middle of the exam.",
          bn: "তো, যেটা হয়েছিল পরীক্ষার মাঝখানে আমার ফোন বন্ধ হয়ে গেল।",
          slotValues: {
            CLAUSE: "my phone died in the middle of the exam",
          },
          topicArea: "education",
        },
        {
          en: "So, what happened was the doctor was running two hours late.",
          bn: "তো, যেটা হয়েছিল ডাক্তার দুই ঘণ্টা দেরি করছিলেন।",
          slotValues: {
            CLAUSE: "the doctor was running two hours late",
          },
          topicArea: "health",
        },
        {
          en: "So, what happened was I accidentally sent the email to the wrong person.",
          bn: "তো, যেটা হয়েছিল আমি ভুল করে ভুল লোককে ইমেইল পাঠিয়ে দিলাম।",
          slotValues: {
            CLAUSE: "I accidentally sent the email to the wrong person",
          },
          topicArea: "work",
        },
        {
          en: "So, what happened was we took the wrong train.",
          bn: "তো, যেটা হয়েছিল আমরা ভুল ট্রেনে উঠে গেলাম।",
          slotValues: { CLAUSE: "we took the wrong train" },
          topicArea: "travel",
        },
        {
          en: "So, what happened was the price doubled overnight.",
          bn: "তো, যেটা হয়েছিল রাতারাতি দাম দ্বিগুণ হয়ে গেল।",
          slotValues: { CLAUSE: "the price doubled overnight" },
          topicArea: "shopping",
        },
        {
          en: "So, what happened was she forgot our anniversary.",
          bn: "তো, যেটা হয়েছিল সে আমাদের বার্ষিকী ভুলে গেল।",
          slotValues: { CLAUSE: "she forgot our anniversary" },
          topicArea: "relationships",
        },
        {
          en: "So, what happened was my car broke down on the highway.",
          bn: "তো, যেটা হয়েছিল হাইওয়েতে আমার গাড়ি নষ্ট হয়ে গেল।",
          slotValues: { CLAUSE: "my car broke down on the highway" },
          topicArea: "travel",
        },
        {
          en: "So, what happened was the power went out during cooking.",
          bn: "তো, যেটা হয়েছিল রান্নার সময় বিদ্যুৎ চলে গেল।",
          slotValues: { CLAUSE: "the power went out during cooking" },
          topicArea: "food",
        },
        {
          en: "So, what happened was I got the dates mixed up.",
          bn: "তো, যেটা হয়েছিল আমি তারিখ গুলিয়ে ফেলেছিলাম।",
          slotValues: { CLAUSE: "I got the dates mixed up" },
          topicArea: "daily_life",
        },
        {
          en: "So, what happened was the medicine had expired.",
          bn: "তো, যেটা হয়েছিল ওষুধের মেয়াদ শেষ হয়ে গিয়েছিল।",
          slotValues: { CLAUSE: "the medicine had expired" },
          topicArea: "health",
        },
        {
          en: "So, what happened was nobody showed up for the study group.",
          bn: "তো, যেটা হয়েছিল স্টাডি গ্রুপে কেউ আসেনি।",
          slotValues: {
            CLAUSE: "nobody showed up for the study group",
          },
          topicArea: "education",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "'So, what happened was...' builds suspense and is very natural in spoken English when explaining a situation.",
      usageNote_bn:
        "'So, what happened was...' সাসপেন্স তৈরি করে এবং কোনো পরিস্থিতি ব্যাখ্যা করতে কথ্য ইংরেজিতে অনেক স্বাভাবিক।",
    },
    {
      id: "O1.3",
      formula: "You won't believe what happened — [EVENT]",
      formula_bn: "তুমি বিশ্বাস করবে না কী হয়েছে — [ঘটনা]",
      patternName: "You Won't Believe (Dramatic Opener)",
      patternName_bn: "বিশ্বাস করবে না (নাটকীয় সূচনা)",
      slots: [
        {
          name: "EVENT",
          description: "A surprising or dramatic event",
          description_bn: "একটি আশ্চর্যজনক বা নাটকীয় ঘটনা",
          acceptedTypes: ["clause", "event"],
          examples: [
            "I won a prize",
            "I met a celebrity",
            "they offered me the job",
          ],
        },
      ],
      examples: [
        {
          en: "You won't believe what happened — I won a prize!",
          bn: "তুমি বিশ্বাস করবে না কী হয়েছে — আমি পুরস্কার জিতেছি!",
          slotValues: { EVENT: "I won a prize" },
          topicArea: "daily_life",
        },
        {
          en: "You won't believe what happened — I met a celebrity at the airport!",
          bn: "তুমি বিশ্বাস করবে না কী হয়েছে — বিমানবন্দরে সেলিব্রিটির সাথে দেখা হলো!",
          slotValues: { EVENT: "I met a celebrity at the airport" },
          topicArea: "travel",
        },
        {
          en: "You won't believe what happened — they offered me the job!",
          bn: "তুমি বিশ্বাস করবে না কী হয়েছে — তারা আমাকে চাকরিটা দিয়ে দিল!",
          slotValues: { EVENT: "they offered me the job" },
          topicArea: "work",
        },
        {
          en: "You won't believe what happened — I cooked a perfect biryani!",
          bn: "তুমি বিশ্বাস করবে না কী হয়েছে — আমি পারফেক্ট বিরিয়ানি রান্না করলাম!",
          slotValues: { EVENT: "I cooked a perfect biryani" },
          topicArea: "food",
        },
        {
          en: "You won't believe what happened — I passed the exam with full marks!",
          bn: "তুমি বিশ্বাস করবে না কী হয়েছে — আমি পূর্ণ নম্বর পেয়ে পরীক্ষায় পাশ করলাম!",
          slotValues: {
            EVENT: "I passed the exam with full marks",
          },
          topicArea: "education",
        },
        {
          en: "You won't believe what happened — the doctor said I'm completely healthy!",
          bn: "তুমি বিশ্বাস করবে না কী হয়েছে — ডাক্তার বললেন আমি সম্পূর্ণ সুস্থ!",
          slotValues: {
            EVENT: "the doctor said I'm completely healthy",
          },
          topicArea: "health",
        },
        {
          en: "You won't believe what happened — I found my lost ring!",
          bn: "তুমি বিশ্বাস করবে না কী হয়েছে — আমি আমার হারানো আংটি খুঁজে পেলাম!",
          slotValues: { EVENT: "I found my lost ring" },
          topicArea: "daily_life",
        },
        {
          en: "You won't believe what happened — we got upgraded to first class!",
          bn: "তুমি বিশ্বাস করবে না কী হয়েছে — আমরা ফার্স্ট ক্লাসে আপগ্রেড পেলাম!",
          slotValues: { EVENT: "we got upgraded to first class" },
          topicArea: "travel",
        },
        {
          en: "You won't believe what happened — my old friend surprised me!",
          bn: "তুমি বিশ্বাস করবে না কী হয়েছে — আমার পুরোনো বন্ধু আমাকে সারপ্রাইজ দিল!",
          slotValues: { EVENT: "my old friend surprised me" },
          topicArea: "relationships",
        },
        {
          en: "You won't believe what happened — I got a huge discount!",
          bn: "তুমি বিশ্বাস করবে না কী হয়েছে — আমি বিশাল ডিসকাউন্ট পেলাম!",
          slotValues: { EVENT: "I got a huge discount" },
          topicArea: "shopping",
        },
        {
          en: "You won't believe what happened — my boss praised me in front of everyone!",
          bn: "তুমি বিশ্বাস করবে না কী হয়েছে — বস সবার সামনে আমার প্রশংসা করলেন!",
          slotValues: {
            EVENT: "my boss praised me in front of everyone",
          },
          topicArea: "work",
        },
        {
          en: "You won't believe what happened — the restaurant gave us free dessert!",
          bn: "তুমি বিশ্বাস করবে না কী হয়েছে — রেস্তোরাঁ আমাদের বিনামূল্যে ডেজার্ট দিল!",
          slotValues: {
            EVENT: "the restaurant gave us free dessert",
          },
          topicArea: "food",
        },
        {
          en: "You won't believe what happened — I finished the whole book in one day!",
          bn: "তুমি বিশ্বাস করবে না কী হয়েছে — আমি একদিনে পুরো বইটা শেষ করলাম!",
          slotValues: {
            EVENT: "I finished the whole book in one day",
          },
          topicArea: "education",
        },
        {
          en: "You won't believe what happened — they refunded my money without any hassle!",
          bn: "তুমি বিশ্বাস করবে না কী হয়েছে — কোনো ঝামেলা ছাড়াই টাকা ফেরত দিল!",
          slotValues: {
            EVENT: "they refunded my money without any hassle",
          },
          topicArea: "shopping",
        },
        {
          en: "You won't believe what happened — my allergy just disappeared!",
          bn: "তুমি বিশ্বাস করবে না কী হয়েছে — আমার অ্যালার্জি এমনিই চলে গেল!",
          slotValues: { EVENT: "my allergy just disappeared" },
          topicArea: "health",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "This pattern grabs the listener's attention before revealing the main event. Very popular in casual storytelling.",
      usageNote_bn:
        "মূল ঘটনা বলার আগে এই প্যাটার্ন শ্রোতার মনোযোগ আকর্ষণ করে। সাধারণ গল্প বলায় অনেক জনপ্রিয়।",
    },
    {
      id: "O1.4",
      formula: "Let me tell you about [EVENT/THING]",
      formula_bn: "তোমাকে বলি [ঘটনা/জিনিস] সম্পর্কে",
      patternName: "Let Me Tell You (Introduction)",
      patternName_bn: "তোমাকে বলি (ভূমিকা)",
      slots: [
        {
          name: "EVENT/THING",
          description: "The topic or event you want to share",
          description_bn: "আপনি যে বিষয় বা ঘটনা শেয়ার করতে চান",
          acceptedTypes: ["event", "noun_phrase", "clause"],
          examples: [
            "what happened yesterday",
            "my trip to Cox's Bazar",
            "the funniest thing",
          ],
        },
      ],
      examples: [
        {
          en: "Let me tell you about what happened yesterday.",
          bn: "তোমাকে বলি গতকাল কী হয়েছিল।",
          slotValues: { "EVENT/THING": "what happened yesterday" },
          topicArea: "daily_life",
        },
        {
          en: "Let me tell you about my trip to Cox's Bazar.",
          bn: "তোমাকে বলি আমার কক্সবাজার ভ্রমণের কথা।",
          slotValues: { "EVENT/THING": "my trip to Cox's Bazar" },
          topicArea: "travel",
        },
        {
          en: "Let me tell you about the funniest thing that happened at work.",
          bn: "তোমাকে বলি অফিসে সবচেয়ে মজার কী ঘটেছিল।",
          slotValues: {
            "EVENT/THING": "the funniest thing that happened at work",
          },
          topicArea: "work",
        },
        {
          en: "Let me tell you about this amazing restaurant I found.",
          bn: "তোমাকে বলি একটা অসাধারণ রেস্তোরাঁ খুঁজে পেয়েছি।",
          slotValues: {
            "EVENT/THING": "this amazing restaurant I found",
          },
          topicArea: "food",
        },
        {
          en: "Let me tell you about my new teacher.",
          bn: "তোমাকে বলি আমার নতুন শিক্ষক সম্পর্কে।",
          slotValues: { "EVENT/THING": "my new teacher" },
          topicArea: "education",
        },
        {
          en: "Let me tell you about my experience at the hospital.",
          bn: "তোমাকে বলি হাসপাতালে আমার অভিজ্ঞতা।",
          slotValues: { "EVENT/THING": "my experience at the hospital" },
          topicArea: "health",
        },
        {
          en: "Let me tell you about this deal I got.",
          bn: "তোমাকে বলি আমি কী দারুণ দাম পেয়েছি।",
          slotValues: { "EVENT/THING": "this deal I got" },
          topicArea: "shopping",
        },
        {
          en: "Let me tell you about our new neighbor.",
          bn: "তোমাকে বলি আমাদের নতুন প্রতিবেশী সম্পর্কে।",
          slotValues: { "EVENT/THING": "our new neighbor" },
          topicArea: "relationships",
        },
        {
          en: "Let me tell you about the time I got lost.",
          bn: "তোমাকে বলি সেই সময়ের কথা যখন আমি হারিয়ে গিয়েছিলাম।",
          slotValues: { "EVENT/THING": "the time I got lost" },
          topicArea: "travel",
        },
        {
          en: "Let me tell you about this book I just finished.",
          bn: "তোমাকে বলি এই বইটার কথা যেটা আমি সবে শেষ করেছি।",
          slotValues: { "EVENT/THING": "this book I just finished" },
          topicArea: "education",
        },
        {
          en: "Let me tell you about my worst day ever.",
          bn: "তোমাকে বলি আমার জীবনের সবচেয়ে খারাপ দিনটার কথা।",
          slotValues: { "EVENT/THING": "my worst day ever" },
          topicArea: "daily_life",
        },
        {
          en: "Let me tell you about how I met my best friend.",
          bn: "তোমাকে বলি কীভাবে আমার সবচেয়ে ভালো বন্ধুর সাথে দেখা হয়েছিল।",
          slotValues: {
            "EVENT/THING": "how I met my best friend",
          },
          topicArea: "relationships",
        },
        {
          en: "Let me tell you about the interview.",
          bn: "তোমাকে বলি ইন্টারভিউয়ের কথা।",
          slotValues: { "EVENT/THING": "the interview" },
          topicArea: "work",
        },
        {
          en: "Let me tell you about the recipe my grandmother taught me.",
          bn: "তোমাকে বলি আমার দাদি আমাকে যে রেসিপি শিখিয়েছিলেন।",
          slotValues: {
            "EVENT/THING": "the recipe my grandmother taught me",
          },
          topicArea: "food",
        },
        {
          en: "Let me tell you about a home remedy that actually worked.",
          bn: "তোমাকে বলি একটা ঘরোয়া টোটকার কথা যেটা সত্যিই কাজ করেছে।",
          slotValues: {
            "EVENT/THING": "a home remedy that actually worked",
          },
          topicArea: "health",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "'Let me tell you about...' signals you have something interesting to share. It invites the listener to pay attention.",
      usageNote_bn:
        "'Let me tell you about...' জানায় আপনার কাছে শেয়ার করার মতো কিছু আকর্ষণীয় আছে। এটি শ্রোতাকে মনোযোগ দিতে আমন্ত্রণ জানায়।",
    },
    {
      id: "O1.5",
      formula: "This is the story of how [CLAUSE]",
      formula_bn: "এটা সেই গল্প কীভাবে [বাক্যাংশ]",
      patternName: "This Is the Story Of (Framing)",
      patternName_bn: "এটা সেই গল্প (ফ্রেমিং)",
      slots: [
        {
          name: "CLAUSE",
          description: "The outcome or main event being introduced",
          description_bn: "যে ফলাফল বা মূল ঘটনা পরিচয় করানো হচ্ছে",
          acceptedTypes: ["clause"],
          examples: [
            "I ended up in a different country",
            "I got my dream job",
            "we became best friends",
          ],
        },
      ],
      examples: [
        {
          en: "This is the story of how I ended up in a different country.",
          bn: "এটা সেই গল্প কীভাবে আমি অন্য একটা দেশে গিয়ে পড়লাম।",
          slotValues: { CLAUSE: "I ended up in a different country" },
          topicArea: "travel",
        },
        {
          en: "This is the story of how I got my dream job.",
          bn: "এটা সেই গল্প কীভাবে আমি আমার স্বপ্নের চাকরি পেলাম।",
          slotValues: { CLAUSE: "I got my dream job" },
          topicArea: "work",
        },
        {
          en: "This is the story of how we became best friends.",
          bn: "এটা সেই গল্প কীভাবে আমরা সবচেয়ে ভালো বন্ধু হলাম।",
          slotValues: { CLAUSE: "we became best friends" },
          topicArea: "relationships",
        },
        {
          en: "This is the story of how I learned to cook.",
          bn: "এটা সেই গল্প কীভাবে আমি রান্না শিখলাম।",
          slotValues: { CLAUSE: "I learned to cook" },
          topicArea: "food",
        },
        {
          en: "This is the story of how I passed the hardest exam.",
          bn: "এটা সেই গল্প কীভাবে আমি সবচেয়ে কঠিন পরীক্ষায় পাশ করলাম।",
          slotValues: { CLAUSE: "I passed the hardest exam" },
          topicArea: "education",
        },
        {
          en: "This is the story of how I overcame my fear.",
          bn: "এটা সেই গল্প কীভাবে আমি আমার ভয় জয় করলাম।",
          slotValues: { CLAUSE: "I overcame my fear" },
          topicArea: "health",
        },
        {
          en: "This is the story of how I lost everything and started over.",
          bn: "এটা সেই গল্প কীভাবে আমি সবকিছু হারিয়ে নতুন করে শুরু করলাম।",
          slotValues: {
            CLAUSE: "I lost everything and started over",
          },
          topicArea: "daily_life",
        },
        {
          en: "This is the story of how our family business started.",
          bn: "এটা সেই গল্প কীভাবে আমাদের পারিবারিক ব্যবসা শুরু হয়েছিল।",
          slotValues: { CLAUSE: "our family business started" },
          topicArea: "work",
        },
        {
          en: "This is the story of how I found the perfect gift.",
          bn: "এটা সেই গল্প কীভাবে আমি পারফেক্ট উপহার খুঁজে পেলাম।",
          slotValues: { CLAUSE: "I found the perfect gift" },
          topicArea: "shopping",
        },
        {
          en: "This is the story of how I survived a week without my phone.",
          bn: "এটা সেই গল্প কীভাবে আমি ফোন ছাড়া এক সপ্তাহ কাটিয়েছি।",
          slotValues: {
            CLAUSE: "I survived a week without my phone",
          },
          topicArea: "daily_life",
        },
        {
          en: "This is the story of how I discovered my favorite dish.",
          bn: "এটা সেই গল্প কীভাবে আমি আমার প্রিয় খাবার আবিষ্কার করলাম।",
          slotValues: { CLAUSE: "I discovered my favorite dish" },
          topicArea: "food",
        },
        {
          en: "This is the story of how I traveled across the country alone.",
          bn: "এটা সেই গল্প কীভাবে আমি একা পুরো দেশ ঘুরেছি।",
          slotValues: {
            CLAUSE: "I traveled across the country alone",
          },
          topicArea: "travel",
        },
        {
          en: "This is the story of how I met my spouse.",
          bn: "এটা সেই গল্প কীভাবে আমি আমার সঙ্গীর সাথে দেখা হয়েছিল।",
          slotValues: { CLAUSE: "I met my spouse" },
          topicArea: "relationships",
        },
        {
          en: "This is the story of how I recovered from a serious illness.",
          bn: "এটা সেই গল্প কীভাবে আমি গুরুতর অসুস্থতা থেকে সেরে উঠলাম।",
          slotValues: {
            CLAUSE: "I recovered from a serious illness",
          },
          topicArea: "health",
        },
        {
          en: "This is the story of how I finally graduated.",
          bn: "এটা সেই গল্প কীভাবে আমি অবশেষে গ্র্যাজুয়েট হলাম।",
          slotValues: { CLAUSE: "I finally graduated" },
          topicArea: "education",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "'This is the story of how...' frames the entire narrative by revealing the ending first, then building up to it.",
      usageNote_bn:
        "'This is the story of how...' প্রথমে শেষটা জানিয়ে পুরো বর্ণনাটাকে ফ্রেম করে, তারপর সেদিকে এগিয়ে যায়।",
    },
  ],
};
