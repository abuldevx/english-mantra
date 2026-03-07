import { PatternCategory } from "@/types/pattern";

export const categoryC12: PatternCategory = {
  id: "C12",
  slug: "causative-patterns",
  name: "Causative (Have/Get/Make/Let)",
  name_bn: "প্রেরণামূলক (করানো/দেওয়া)",
  description:
    "Learn how to talk about getting someone else to do something for you or allowing someone to do something.",
  description_bn:
    "অন্য কাউকে দিয়ে কিছু করানো বা কাউকে কিছু করতে দেওয়া সম্পর্কে কথা বলতে শিখুন।",
  icon: "🔧",
  group: "C",
  groupName: "Actions & Time Patterns",
  groupName_bn: "কর্ম এবং সময়ের প্যাটার্ন",
  difficulty: "advanced",
  patterns: [
    {
      id: "C12.1",
      formula: "I had [PERSON] [ACTION]",
      formula_bn: "আমি [ব্যক্তি]-কে দিয়ে [কাজ] করিয়েছি",
      patternName: "Causative Have (Someone Do)",
      patternName_bn: "কজেটিভ Have (কাউকে দিয়ে করানো)",
      slots: [
        {
          name: "PERSON",
          description: "The person who performed the action for you",
          description_bn: "যে ব্যক্তি আপনার জন্য কাজটি করেছে",
          acceptedTypes: ["person"],
          examples: ["the mechanic", "my brother", "the tailor"],
        },
        {
          name: "ACTION",
          description: "A base verb for the action the person did",
          description_bn: "ব্যক্তিটি যে কাজ করেছে তার জন্য একটি মূল ক্রিয়া",
          acceptedTypes: ["verb"],
          examples: ["fix my car", "help me move", "alter the dress"],
        },
      ],
      examples: [
        {
          en: "I had the mechanic fix my car.",
          bn: "আমি মেকানিককে দিয়ে আমার গাড়ি ঠিক করিয়েছি।",
          slotValues: { PERSON: "the mechanic", ACTION: "fix my car" },
          topicArea: "daily_life",
        },
        {
          en: "I had my brother help me move.",
          bn: "আমি আমার ভাইকে দিয়ে বাড়ি বদলাতে সাহায্য করিয়েছি।",
          slotValues: { PERSON: "my brother", ACTION: "help me move" },
          topicArea: "relationships",
        },
        {
          en: "I had the tailor alter the dress.",
          bn: "আমি দর্জিকে দিয়ে পোশাকটি পরিবর্তন করিয়েছি।",
          slotValues: { PERSON: "the tailor", ACTION: "alter the dress" },
          topicArea: "shopping",
        },
        {
          en: "I had the doctor check my blood pressure.",
          bn: "আমি ডাক্তারকে দিয়ে রক্তচাপ পরীক্ষা করিয়েছি।",
          slotValues: {
            PERSON: "the doctor",
            ACTION: "check my blood pressure",
          },
          topicArea: "health",
        },
        {
          en: "I had the waiter bring extra napkins.",
          bn: "আমি ওয়েটারকে দিয়ে অতিরিক্ত ন্যাপকিন আনিয়েছি।",
          slotValues: {
            PERSON: "the waiter",
            ACTION: "bring extra napkins",
          },
          topicArea: "food",
        },
        {
          en: "I had my assistant send the emails.",
          bn: "আমি আমার সহকারীকে দিয়ে ইমেইল পাঠিয়েছি।",
          slotValues: { PERSON: "my assistant", ACTION: "send the emails" },
          topicArea: "work",
        },
        {
          en: "I had the tutor explain the lesson again.",
          bn: "আমি টিউটরকে দিয়ে আবার পাঠটি ব্যাখ্যা করিয়েছি।",
          slotValues: {
            PERSON: "the tutor",
            ACTION: "explain the lesson again",
          },
          topicArea: "education",
        },
        {
          en: "I had the driver take me to the airport.",
          bn: "আমি ড্রাইভারকে দিয়ে বিমানবন্দরে নিয়ে গিয়েছি।",
          slotValues: {
            PERSON: "the driver",
            ACTION: "take me to the airport",
          },
          topicArea: "travel",
        },
        {
          en: "I had the plumber fix the leaking pipe.",
          bn: "আমি প্লাম্বারকে দিয়ে লিক হওয়া পাইপ ঠিক করিয়েছি।",
          slotValues: {
            PERSON: "the plumber",
            ACTION: "fix the leaking pipe",
          },
          topicArea: "daily_life",
        },
        {
          en: "I had the chef prepare a special dish.",
          bn: "আমি শেফকে দিয়ে বিশেষ পদ তৈরি করিয়েছি।",
          slotValues: {
            PERSON: "the chef",
            ACTION: "prepare a special dish",
          },
          topicArea: "food",
        },
        {
          en: "I had the IT guy install the software.",
          bn: "আমি আইটি লোককে দিয়ে সফটওয়্যার ইনস্টল করিয়েছি।",
          slotValues: {
            PERSON: "the IT guy",
            ACTION: "install the software",
          },
          topicArea: "work",
        },
        {
          en: "I had the dentist check my teeth.",
          bn: "আমি ডেন্টিস্টকে দিয়ে দাঁত পরীক্ষা করিয়েছি।",
          slotValues: { PERSON: "the dentist", ACTION: "check my teeth" },
          topicArea: "health",
        },
        {
          en: "I had my friend pick up the tickets.",
          bn: "আমি আমার বন্ধুকে দিয়ে টিকিট তুলিয়েছি।",
          slotValues: {
            PERSON: "my friend",
            ACTION: "pick up the tickets",
          },
          topicArea: "travel",
        },
        {
          en: "I had the teacher review my essay.",
          bn: "আমি শিক্ষককে দিয়ে আমার রচনা পর্যালোচনা করিয়েছি।",
          slotValues: {
            PERSON: "the teacher",
            ACTION: "review my essay",
          },
          topicArea: "education",
        },
        {
          en: "I had the shopkeeper wrap the gift.",
          bn: "আমি দোকানদারকে দিয়ে উপহারটি মুড়িয়েছি।",
          slotValues: {
            PERSON: "the shopkeeper",
            ACTION: "wrap the gift",
          },
          topicArea: "shopping",
        },
      ],
      formality: "casual",
      difficulty: "advanced",
      usageNote:
        "'Have someone do something' means you arranged for them to do it. The person uses the base verb (no 'to'). This is common for professional services.",
      usageNote_bn:
        "'Have someone do something' মানে আপনি তাদের দিয়ে করার ব্যবস্থা করেছেন। ব্যক্তিটি মূল ক্রিয়া ব্যবহার করে ('to' ছাড়া)। এটি পেশাদার সেবার জন্য সাধারণ।",
      combinableWith: ["C12.2", "C12.3"],
      banglaStructureMap:
        "আমি (Subject) + [PERSON] (ব্যক্তি) + কে দিয়ে + [ACTION] (Verb) + করিয়েছি (Causative Aux)",
    },
    {
      id: "C12.2",
      formula: "I got [PERSON] to [ACTION]",
      formula_bn: "আমি [ব্যক্তি]-কে দিয়ে [কাজ] করিয়ে নিয়েছি",
      patternName: "Causative Get (Persuade Someone)",
      patternName_bn: "কজেটিভ Get (কাউকে রাজি করানো)",
      slots: [
        {
          name: "PERSON",
          description: "The person you persuaded to do the action",
          description_bn: "যে ব্যক্তিকে আপনি কাজটি করতে রাজি করিয়েছেন",
          acceptedTypes: ["person"],
          examples: ["my boss", "my friend", "the landlord"],
        },
        {
          name: "ACTION",
          description: "A base verb for what they agreed to do",
          description_bn: "তারা যা করতে রাজি হয়েছে তার জন্য একটি মূল ক্রিয়া",
          acceptedTypes: ["verb"],
          examples: ["approve my leave", "lend me his car", "fix the heater"],
        },
      ],
      examples: [
        {
          en: "I got my boss to approve my leave.",
          bn: "আমি আমার বসকে রাজি করিয়ে ছুটি অনুমোদন করিয়ে নিয়েছি।",
          slotValues: { PERSON: "my boss", ACTION: "approve my leave" },
          topicArea: "work",
        },
        {
          en: "I got my friend to lend me his car.",
          bn: "আমি আমার বন্ধুকে রাজি করিয়ে তার গাড়ি ধার নিয়েছি।",
          slotValues: { PERSON: "my friend", ACTION: "lend me his car" },
          topicArea: "relationships",
        },
        {
          en: "I got the landlord to fix the heater.",
          bn: "আমি বাড়িওয়ালাকে দিয়ে হিটার ঠিক করিয়ে নিয়েছি।",
          slotValues: { PERSON: "the landlord", ACTION: "fix the heater" },
          topicArea: "daily_life",
        },
        {
          en: "I got the waiter to change our table.",
          bn: "আমি ওয়েটারকে বলে আমাদের টেবিল বদল করিয়ে নিয়েছি।",
          slotValues: {
            PERSON: "the waiter",
            ACTION: "change our table",
          },
          topicArea: "food",
        },
        {
          en: "I got the professor to extend the deadline.",
          bn: "আমি প্রফেসরকে রাজি করিয়ে ডেডলাইন বাড়িয়ে নিয়েছি।",
          slotValues: {
            PERSON: "the professor",
            ACTION: "extend the deadline",
          },
          topicArea: "education",
        },
        {
          en: "I got the doctor to prescribe a different medicine.",
          bn: "আমি ডাক্তারকে বলে ভিন্ন ওষুধ লিখিয়ে নিয়েছি।",
          slotValues: {
            PERSON: "the doctor",
            ACTION: "prescribe a different medicine",
          },
          topicArea: "health",
        },
        {
          en: "I got the hotel to upgrade our room.",
          bn: "আমি হোটেলকে বলে আমাদের রুম আপগ্রেড করিয়ে নিয়েছি।",
          slotValues: { PERSON: "the hotel", ACTION: "upgrade our room" },
          topicArea: "travel",
        },
        {
          en: "I got the store to give me a discount.",
          bn: "আমি দোকানকে বলে ছাড় দেওয়ায়ে নিয়েছি।",
          slotValues: {
            PERSON: "the store",
            ACTION: "give me a discount",
          },
          topicArea: "shopping",
        },
        {
          en: "I got my sister to help me with the cooking.",
          bn: "আমি আমার বোনকে রাজি করিয়ে রান্নায় সাহায্য নিয়েছি।",
          slotValues: {
            PERSON: "my sister",
            ACTION: "help me with the cooking",
          },
          topicArea: "food",
        },
        {
          en: "I got my colleague to cover my shift.",
          bn: "আমি আমার সহকর্মীকে রাজি করিয়ে আমার শিফট নেওয়ায়ে নিয়েছি।",
          slotValues: {
            PERSON: "my colleague",
            ACTION: "cover my shift",
          },
          topicArea: "work",
        },
        {
          en: "I got the librarian to reserve the book for me.",
          bn: "আমি লাইব্রেরিয়ানকে বলে বইটি আমার জন্য রিজার্ভ করিয়ে নিয়েছি।",
          slotValues: {
            PERSON: "the librarian",
            ACTION: "reserve the book for me",
          },
          topicArea: "education",
        },
        {
          en: "I got the nurse to check my temperature again.",
          bn: "আমি নার্সকে বলে আবার তাপমাত্রা পরীক্ষা করিয়ে নিয়েছি।",
          slotValues: {
            PERSON: "the nurse",
            ACTION: "check my temperature again",
          },
          topicArea: "health",
        },
        {
          en: "I got my neighbor to water my plants while I was away.",
          bn: "আমি আমার প্রতিবেশীকে রাজি করিয়ে আমার অনুপস্থিতিতে গাছে পানি দেওয়ায়ে নিয়েছি।",
          slotValues: {
            PERSON: "my neighbor",
            ACTION: "water my plants while I was away",
          },
          topicArea: "daily_life",
        },
        {
          en: "I got the airline to rebook my flight.",
          bn: "আমি এয়ারলাইনকে বলে আমার ফ্লাইট পুনর্বুক করিয়ে নিয়েছি।",
          slotValues: {
            PERSON: "the airline",
            ACTION: "rebook my flight",
          },
          topicArea: "travel",
        },
        {
          en: "I got the seller to include free shipping.",
          bn: "আমি বিক্রেতাকে রাজি করিয়ে ফ্রি শিপিং দেওয়ায়ে নিয়েছি।",
          slotValues: {
            PERSON: "the seller",
            ACTION: "include free shipping",
          },
          topicArea: "shopping",
        },
      ],
      formality: "casual",
      difficulty: "advanced",
      usageNote:
        "'Get someone to do' implies persuasion or effort. Unlike 'have someone do', 'get' suggests it took some convincing. Note: 'get' uses 'to + verb'.",
      usageNote_bn:
        "'Get someone to do' প্ররোচনা বা প্রচেষ্টা বোঝায়। 'have someone do' এর বিপরীতে, 'get' বোঝায় যে কিছু বোঝানো লেগেছে। লক্ষ্য করুন: 'get' এ 'to + verb' ব্যবহার হয়।",
      combinableWith: ["C12.1", "C12.3"],
      banglaStructureMap:
        "আমি (Subject) + [PERSON] (ব্যক্তি) + কে রাজি করিয়ে + [ACTION] (Verb) + করিয়ে নিয়েছি (Causative Get)",
    },
    {
      id: "C12.3",
      formula: "[PERSON] made me [ACTION]",
      formula_bn: "[ব্যক্তি] আমাকে [কাজ] করতে বাধ্য করেছে",
      patternName: "Causative Make (Force/Cause)",
      patternName_bn: "কজেটিভ Make (বাধ্য করা)",
      slots: [
        {
          name: "PERSON",
          description: "The person who forced or caused the action",
          description_bn: "যে ব্যক্তি কাজটি করতে বাধ্য করেছে বা ঘটিয়েছে",
          acceptedTypes: ["person", "noun"],
          examples: ["my teacher", "my parents", "the boss"],
        },
        {
          name: "ACTION",
          description: "A base verb for what you were forced to do",
          description_bn:
            "আপনি যা করতে বাধ্য হয়েছেন তার জন্য একটি মূল ক্রিয়া",
          acceptedTypes: ["verb"],
          examples: ["rewrite the essay", "clean my room", "stay late"],
        },
      ],
      examples: [
        {
          en: "My teacher made me rewrite the essay.",
          bn: "আমার শিক্ষক আমাকে রচনাটি আবার লিখতে বাধ্য করেছেন।",
          slotValues: { PERSON: "My teacher", ACTION: "rewrite the essay" },
          topicArea: "education",
        },
        {
          en: "My parents made me clean my room.",
          bn: "আমার বাবা-মা আমাকে ঘর পরিষ্কার করতে বাধ্য করেছেন।",
          slotValues: { PERSON: "My parents", ACTION: "clean my room" },
          topicArea: "daily_life",
        },
        {
          en: "The boss made me stay late.",
          bn: "বস আমাকে দেরি করে থাকতে বাধ্য করেছেন।",
          slotValues: { PERSON: "The boss", ACTION: "stay late" },
          topicArea: "work",
        },
        {
          en: "The movie made me cry.",
          bn: "সিনেমাটি আমাকে কাঁদিয়েছে।",
          slotValues: { PERSON: "The movie", ACTION: "cry" },
          topicArea: "daily_life",
        },
        {
          en: "The spicy food made me drink lots of water.",
          bn: "ঝাল খাবারটি আমাকে অনেক পানি খেতে বাধ্য করেছে।",
          slotValues: {
            PERSON: "The spicy food",
            ACTION: "drink lots of water",
          },
          topicArea: "food",
        },
        {
          en: "The doctor made me take the test again.",
          bn: "ডাক্তার আমাকে আবার পরীক্ষা দিতে বাধ্য করেছেন।",
          slotValues: {
            PERSON: "The doctor",
            ACTION: "take the test again",
          },
          topicArea: "health",
        },
        {
          en: "My friend made me laugh so hard.",
          bn: "আমার বন্ধু আমাকে খুব হাসিয়েছে।",
          slotValues: { PERSON: "My friend", ACTION: "laugh so hard" },
          topicArea: "relationships",
        },
        {
          en: "The delay made me miss my flight.",
          bn: "বিলম্ব আমার ফ্লাইট মিস করিয়েছে।",
          slotValues: { PERSON: "The delay", ACTION: "miss my flight" },
          topicArea: "travel",
        },
        {
          en: "The sale made me buy things I didn't need.",
          bn: "সেল আমাকে অপ্রয়োজনীয় জিনিস কিনতে বাধ্য করেছে।",
          slotValues: {
            PERSON: "The sale",
            ACTION: "buy things I didn't need",
          },
          topicArea: "shopping",
        },
        {
          en: "The professor made me present in front of the whole class.",
          bn: "প্রফেসর আমাকে পুরো ক্লাসের সামনে উপস্থাপনা করতে বাধ্য করেছেন।",
          slotValues: {
            PERSON: "The professor",
            ACTION: "present in front of the whole class",
          },
          topicArea: "education",
        },
        {
          en: "My manager made me redo the entire report.",
          bn: "আমার ম্যানেজার আমাকে পুরো রিপোর্ট আবার করতে বাধ্য করেছেন।",
          slotValues: {
            PERSON: "My manager",
            ACTION: "redo the entire report",
          },
          topicArea: "work",
        },
        {
          en: "The cold weather made me stay inside.",
          bn: "ঠান্ডা আবহাওয়া আমাকে ভেতরে থাকতে বাধ্য করেছে।",
          slotValues: {
            PERSON: "The cold weather",
            ACTION: "stay inside",
          },
          topicArea: "daily_life",
        },
        {
          en: "The trainer made me run five extra laps.",
          bn: "ট্রেইনার আমাকে পাঁচটি অতিরিক্ত চক্কর দৌড়াতে বাধ্য করেছেন।",
          slotValues: {
            PERSON: "The trainer",
            ACTION: "run five extra laps",
          },
          topicArea: "health",
        },
        {
          en: "Her smile made me feel better.",
          bn: "তার হাসি আমাকে ভালো অনুভব করিয়েছে।",
          slotValues: { PERSON: "Her smile", ACTION: "feel better" },
          topicArea: "relationships",
        },
        {
          en: "The bland food made me add extra spices.",
          bn: "পানসে খাবারটি আমাকে অতিরিক্ত মশলা যোগ করতে বাধ্য করেছে।",
          slotValues: {
            PERSON: "The bland food",
            ACTION: "add extra spices",
          },
          topicArea: "food",
        },
      ],
      formality: "casual",
      difficulty: "advanced",
      usageNote:
        "'Make someone do' implies force, obligation, or causation. The person has no choice. It uses the base verb (no 'to'). It can also express emotions: 'made me happy'.",
      usageNote_bn:
        "'Make someone do' বল, বাধ্যবাধকতা, বা কারণ বোঝায়। ব্যক্তির কোনো পছন্দ নেই। এটি মূল ক্রিয়া ব্যবহার করে ('to' ছাড়া)। আবেগও প্রকাশ করতে পারে: 'made me happy'।",
      combinableWith: ["C12.1", "C12.4"],
      banglaStructureMap:
        "[PERSON] (ব্যক্তি) + আমাকে (Object) + [ACTION] (Verb) + করতে বাধ্য করেছে (Causative Make)",
    },
    {
      id: "C12.4",
      formula: "[PERSON] let me [ACTION]",
      formula_bn: "[ব্যক্তি] আমাকে [কাজ] করতে দিয়েছে",
      patternName: "Causative Let (Allow)",
      patternName_bn: "কজেটিভ Let (অনুমতি দেওয়া)",
      slots: [
        {
          name: "PERSON",
          description: "The person who gave permission",
          description_bn: "যে ব্যক্তি অনুমতি দিয়েছেন",
          acceptedTypes: ["person"],
          examples: ["my mom", "the teacher", "my boss"],
        },
        {
          name: "ACTION",
          description: "A base verb for the action you were allowed to do",
          description_bn:
            "আপনি যা করতে অনুমতি পেয়েছেন তার জন্য একটি মূল ক্রিয়া",
          acceptedTypes: ["verb"],
          examples: ["stay up late", "leave early", "borrow his phone"],
        },
      ],
      examples: [
        {
          en: "My mom let me stay up late.",
          bn: "আমার মা আমাকে রাত জাগতে দিয়েছেন।",
          slotValues: { PERSON: "My mom", ACTION: "stay up late" },
          topicArea: "daily_life",
        },
        {
          en: "The teacher let me leave early.",
          bn: "শিক্ষক আমাকে তাড়াতাড়ি যেতে দিয়েছেন।",
          slotValues: { PERSON: "The teacher", ACTION: "leave early" },
          topicArea: "education",
        },
        {
          en: "My boss let me work from home today.",
          bn: "আমার বস আমাকে আজ বাসা থেকে কাজ করতে দিয়েছেন।",
          slotValues: { PERSON: "My boss", ACTION: "work from home today" },
          topicArea: "work",
        },
        {
          en: "My friend let me borrow his phone.",
          bn: "আমার বন্ধু আমাকে তার ফোন ধার নিতে দিয়েছে।",
          slotValues: { PERSON: "My friend", ACTION: "borrow his phone" },
          topicArea: "relationships",
        },
        {
          en: "The restaurant let me change my order.",
          bn: "রেস্তোরাঁ আমাকে অর্ডার পরিবর্তন করতে দিয়েছে।",
          slotValues: {
            PERSON: "The restaurant",
            ACTION: "change my order",
          },
          topicArea: "food",
        },
        {
          en: "The doctor let me go home after the checkup.",
          bn: "ডাক্তার আমাকে চেকআপের পর বাড়ি যেতে দিয়েছেন।",
          slotValues: {
            PERSON: "The doctor",
            ACTION: "go home after the checkup",
          },
          topicArea: "health",
        },
        {
          en: "The airline let me bring an extra bag.",
          bn: "এয়ারলাইন আমাকে অতিরিক্ত ব্যাগ আনতে দিয়েছে।",
          slotValues: {
            PERSON: "The airline",
            ACTION: "bring an extra bag",
          },
          topicArea: "travel",
        },
        {
          en: "The shop let me try the shoes on.",
          bn: "দোকান আমাকে জুতা পরে দেখতে দিয়েছে।",
          slotValues: { PERSON: "The shop", ACTION: "try the shoes on" },
          topicArea: "shopping",
        },
        {
          en: "My parents let me choose my own career.",
          bn: "আমার বাবা-মা আমাকে নিজের ক্যারিয়ার বেছে নিতে দিয়েছেন।",
          slotValues: {
            PERSON: "My parents",
            ACTION: "choose my own career",
          },
          topicArea: "work",
        },
        {
          en: "The coach let me skip practice today.",
          bn: "কোচ আমাকে আজ অনুশীলন বাদ দিতে দিয়েছেন।",
          slotValues: {
            PERSON: "The coach",
            ACTION: "skip practice today",
          },
          topicArea: "health",
        },
        {
          en: "My sister let me use her laptop.",
          bn: "আমার বোন আমাকে তার ল্যাপটপ ব্যবহার করতে দিয়েছে।",
          slotValues: { PERSON: "My sister", ACTION: "use her laptop" },
          topicArea: "daily_life",
        },
        {
          en: "The professor let me submit the paper late.",
          bn: "প্রফেসর আমাকে দেরিতে পেপার জমা দিতে দিয়েছেন।",
          slotValues: {
            PERSON: "The professor",
            ACTION: "submit the paper late",
          },
          topicArea: "education",
        },
        {
          en: "My grandmother let me eat as much as I wanted.",
          bn: "আমার দাদি আমাকে যত খুশি খেতে দিয়েছেন।",
          slotValues: {
            PERSON: "My grandmother",
            ACTION: "eat as much as I wanted",
          },
          topicArea: "food",
        },
        {
          en: "The guide let me take photos inside the museum.",
          bn: "গাইড আমাকে মিউজিয়ামের ভেতরে ছবি তুলতে দিয়েছে।",
          slotValues: {
            PERSON: "The guide",
            ACTION: "take photos inside the museum",
          },
          topicArea: "travel",
        },
        {
          en: "My father let me drive the car for the first time.",
          bn: "আমার বাবা আমাকে প্রথমবার গাড়ি চালাতে দিয়েছেন।",
          slotValues: {
            PERSON: "My father",
            ACTION: "drive the car for the first time",
          },
          topicArea: "relationships",
        },
      ],
      formality: "casual",
      difficulty: "advanced",
      usageNote:
        "'Let someone do' means allowing or giving permission. It uses the base verb (no 'to'). It is the opposite of 'make' - here the person has a choice.",
      usageNote_bn:
        "'Let someone do' অনুমতি দেওয়া বোঝায়। এটি মূল ক্রিয়া ব্যবহার করে ('to' ছাড়া)। এটি 'make' এর বিপরীত - এখানে ব্যক্তির পছন্দ আছে।",
      combinableWith: ["C12.3"],
      banglaStructureMap:
        "[PERSON] (ব্যক্তি) + আমাকে (Object) + [ACTION] (Verb) + করতে দিয়েছে (Causative Let)",
    },
    {
      id: "C12.5",
      formula: "I had [THING] [PAST PARTICIPLE]",
      formula_bn: "আমি [জিনিস] [কাজ] করিয়েছি",
      patternName: "Causative Have (Thing Done)",
      patternName_bn: "কজেটিভ Have (জিনিস করানো)",
      slots: [
        {
          name: "THING",
          description: "The thing or object that received the service",
          description_bn: "যে জিনিস বা বস্তু সেবা গ্রহণ করেছে",
          acceptedTypes: ["noun", "noun_phrase"],
          examples: ["my hair", "the car", "my suit"],
        },
        {
          name: "PAST PARTICIPLE",
          description:
            "A verb in past participle form for the service performed",
          description_bn:
            "সম্পাদিত সেবার জন্য অতীত কৃদন্ত রূপের একটি ক্রিয়া",
          acceptedTypes: ["past_participle"],
          examples: ["cut", "repaired", "cleaned"],
        },
      ],
      examples: [
        {
          en: "I had my hair cut yesterday.",
          bn: "আমি গতকাল চুল কাটিয়েছি।",
          slotValues: { THING: "my hair", "PAST PARTICIPLE": "cut" },
          topicArea: "daily_life",
        },
        {
          en: "I had the car repaired last week.",
          bn: "আমি গত সপ্তাহে গাড়ি মেরামত করিয়েছি।",
          slotValues: { THING: "the car", "PAST PARTICIPLE": "repaired" },
          topicArea: "travel",
        },
        {
          en: "I had my suit dry-cleaned.",
          bn: "আমি আমার স্যুট ড্রাই ক্লিন করিয়েছি।",
          slotValues: { THING: "my suit", "PAST PARTICIPLE": "dry-cleaned" },
          topicArea: "shopping",
        },
        {
          en: "I had my eyes tested last month.",
          bn: "আমি গত মাসে চোখ পরীক্ষা করিয়েছি।",
          slotValues: { THING: "my eyes", "PAST PARTICIPLE": "tested" },
          topicArea: "health",
        },
        {
          en: "I had the kitchen renovated.",
          bn: "আমি রান্নাঘর সংস্কার করিয়েছি।",
          slotValues: {
            THING: "the kitchen",
            "PAST PARTICIPLE": "renovated",
          },
          topicArea: "daily_life",
        },
        {
          en: "I had my nails done at the salon.",
          bn: "আমি সেলুনে নখ করিয়েছি।",
          slotValues: { THING: "my nails", "PAST PARTICIPLE": "done" },
          topicArea: "shopping",
        },
        {
          en: "I had the food delivered to my house.",
          bn: "আমি বাড়িতে খাবার ডেলিভারি করিয়েছি।",
          slotValues: { THING: "the food", "PAST PARTICIPLE": "delivered" },
          topicArea: "food",
        },
        {
          en: "I had the essay proofread by a professional.",
          bn: "আমি পেশাদার দ্বারা রচনা প্রুফরিড করিয়েছি।",
          slotValues: {
            THING: "the essay",
            "PAST PARTICIPLE": "proofread",
          },
          topicArea: "education",
        },
        {
          en: "I had the contract reviewed by a lawyer.",
          bn: "আমি আইনজীবী দ্বারা চুক্তি পর্যালোচনা করিয়েছি।",
          slotValues: {
            THING: "the contract",
            "PAST PARTICIPLE": "reviewed",
          },
          topicArea: "work",
        },
        {
          en: "I had my passport renewed last year.",
          bn: "আমি গত বছর পাসপোর্ট নবায়ন করিয়েছি।",
          slotValues: { THING: "my passport", "PAST PARTICIPLE": "renewed" },
          topicArea: "travel",
        },
        {
          en: "I had my photo taken for the application.",
          bn: "আমি আবেদনের জন্য ছবি তুলিয়েছি।",
          slotValues: { THING: "my photo", "PAST PARTICIPLE": "taken" },
          topicArea: "work",
        },
        {
          en: "I had the cake decorated for the party.",
          bn: "আমি পার্টির জন্য কেক সাজিয়েছি।",
          slotValues: {
            THING: "the cake",
            "PAST PARTICIPLE": "decorated",
          },
          topicArea: "food",
        },
        {
          en: "I had my teeth cleaned at the dentist.",
          bn: "আমি ডেন্টিস্টে দাঁত পরিষ্কার করিয়েছি।",
          slotValues: { THING: "my teeth", "PAST PARTICIPLE": "cleaned" },
          topicArea: "health",
        },
        {
          en: "I had the wedding invitations printed.",
          bn: "আমি বিয়ের আমন্ত্রণপত্র ছাপিয়েছি।",
          slotValues: {
            THING: "the wedding invitations",
            "PAST PARTICIPLE": "printed",
          },
          topicArea: "relationships",
        },
        {
          en: "I had my thesis checked by the advisor.",
          bn: "আমি উপদেষ্টা দ্বারা থিসিস পরীক্ষা করিয়েছি।",
          slotValues: { THING: "my thesis", "PAST PARTICIPLE": "checked" },
          topicArea: "education",
        },
      ],
      formality: "casual",
      difficulty: "advanced",
      usageNote:
        "'Have something done' (have + object + past participle) means you arranged for a service. You didn't do it yourself - someone else did it for you. This is very common for services.",
      usageNote_bn:
        "'Have something done' (have + object + past participle) মানে আপনি একটি সেবার ব্যবস্থা করেছেন। আপনি নিজে করেননি - অন্য কেউ আপনার জন্য করেছে। এটি সেবার জন্য খুব সাধারণ।",
      combinableWith: ["C12.1", "C12.2"],
      banglaStructureMap:
        "আমি (Subject) + [THING] (বস্তু) + [PP] (ক্রিয়া) + করিয়েছি (Causative Have + PP)",
    },
    {
      id: "C12.6",
      formula: "I got [THING] [PAST PARTICIPLE]",
      formula_bn: "আমি [জিনিস] [কাজ] করিয়ে নিয়েছি",
      patternName: "Causative with Get (Informal)",
      patternName_bn: "কজেটিভ Get (অনানুষ্ঠানিক জিনিস করানো)",
      slots: [
        {
          name: "THING",
          description: "The thing or object that received the service",
          description_bn: "যে জিনিস বা বস্তু সেবা গ্রহণ করেছে",
          acceptedTypes: ["noun", "noun_phrase"],
          examples: ["my car", "her hair", "the door"],
        },
        {
          name: "PAST PARTICIPLE",
          description:
            "A verb in past participle form for the service performed",
          description_bn:
            "সম্পাদিত সেবার জন্য অতীত কৃদন্ত রূপের একটি ক্রিয়া",
          acceptedTypes: ["past_participle"],
          examples: ["washed", "cut", "fixed"],
        },
      ],
      examples: [
        {
          en: "I got my car washed.",
          bn: "আমি আমার গাড়ি ধুইয়ে নিয়েছি।",
          slotValues: { THING: "my car", "PAST PARTICIPLE": "washed" },
          topicArea: "daily_life",
        },
        {
          en: "She got her hair cut.",
          bn: "সে তার চুল কাটিয়ে নিয়েছে।",
          slotValues: { THING: "her hair", "PAST PARTICIPLE": "cut" },
          topicArea: "daily_life",
        },
        {
          en: "I got the door fixed.",
          bn: "আমি দরজা ঠিক করিয়ে নিয়েছি।",
          slotValues: { THING: "the door", "PAST PARTICIPLE": "fixed" },
          topicArea: "daily_life",
        },
        {
          en: "He got his suit cleaned.",
          bn: "সে তার স্যুট পরিষ্কার করিয়ে নিয়েছে।",
          slotValues: { THING: "his suit", "PAST PARTICIPLE": "cleaned" },
          topicArea: "shopping",
        },
        {
          en: "I got my phone repaired.",
          bn: "আমি আমার ফোন মেরামত করিয়ে নিয়েছি।",
          slotValues: { THING: "my phone", "PAST PARTICIPLE": "repaired" },
          topicArea: "daily_life",
        },
        {
          en: "She got her nails done.",
          bn: "সে তার নখ করিয়ে নিয়েছে।",
          slotValues: { THING: "her nails", "PAST PARTICIPLE": "done" },
          topicArea: "shopping",
        },
        {
          en: "I got the document translated.",
          bn: "আমি ডকুমেন্টটি অনুবাদ করিয়ে নিয়েছি।",
          slotValues: { THING: "the document", "PAST PARTICIPLE": "translated" },
          topicArea: "work",
        },
        {
          en: "He got his eyes checked.",
          bn: "সে তার চোখ পরীক্ষা করিয়ে নিয়েছে।",
          slotValues: { THING: "his eyes", "PAST PARTICIPLE": "checked" },
          topicArea: "health",
        },
        {
          en: "I got my shoes polished.",
          bn: "আমি আমার জুতা পলিশ করিয়ে নিয়েছি।",
          slotValues: { THING: "my shoes", "PAST PARTICIPLE": "polished" },
          topicArea: "daily_life",
        },
        {
          en: "She got her dress altered.",
          bn: "সে তার পোশাক পরিবর্তন করিয়ে নিয়েছে।",
          slotValues: { THING: "her dress", "PAST PARTICIPLE": "altered" },
          topicArea: "shopping",
        },
        {
          en: "I got the AC serviced.",
          bn: "আমি এসি সার্ভিসিং করিয়ে নিয়েছি।",
          slotValues: { THING: "the AC", "PAST PARTICIPLE": "serviced" },
          topicArea: "daily_life",
        },
        {
          en: "He got his room painted.",
          bn: "সে তার ঘর রং করিয়ে নিয়েছে।",
          slotValues: { THING: "his room", "PAST PARTICIPLE": "painted" },
          topicArea: "daily_life",
        },
        {
          en: "I got my passport renewed.",
          bn: "আমি আমার পাসপোর্ট নবায়ন করিয়ে নিয়েছি।",
          slotValues: { THING: "my passport", "PAST PARTICIPLE": "renewed" },
          topicArea: "travel",
        },
        {
          en: "She got her photo taken.",
          bn: "সে তার ছবি তুলিয়ে নিয়েছে।",
          slotValues: { THING: "her photo", "PAST PARTICIPLE": "taken" },
          topicArea: "work",
        },
        {
          en: "I got the computer updated.",
          bn: "আমি কম্পিউটার আপডেট করিয়ে নিয়েছি।",
          slotValues: { THING: "the computer", "PAST PARTICIPLE": "updated" },
          topicArea: "work",
        },
      ],
      formality: "casual",
      difficulty: "advanced",
      usageNote:
        "'Get something done' (get + object + past participle) is the informal equivalent of 'have something done'. It means you arranged for a service to be performed. More common in everyday spoken English than 'have something done'.",
      usageNote_bn:
        "'Get something done' (get + object + past participle) হলো 'have something done'-এর অনানুষ্ঠানিক সংস্করণ। এটির অর্থ আপনি একটি সেবা সম্পাদনের ব্যবস্থা করেছেন। দৈনন্দিন কথ্য ইংরেজিতে 'have something done'-এর চেয়ে বেশি সাধারণ।",
      combinableWith: ["C12.5", "C12.1"],
      banglaStructureMap:
        "আমি (Subject) + [THING] (বস্তু) + [PP] (ক্রিয়া) + করিয়ে নিয়েছি (Causative Get + PP)",
    },
  ],
};
