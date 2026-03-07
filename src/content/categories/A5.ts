import { PatternCategory } from "@/types/pattern";

export const categoryA5: PatternCategory = {
  id: "A5",
  slug: "expressing-preferences",
  name: "Expressing Preferences",
  name_bn: "পছন্দ প্রকাশ করা",
  description:
    "Learn how to express what you prefer, like better, or would choose in English.",
  description_bn:
    "ইংরেজিতে আপনি কোনটি পছন্দ করেন, কোনটি বেশি ভালো লাগে বা কোনটি বাছাই করবেন তা প্রকাশ করতে শিখুন।",
  icon: "⭐",
  group: "A",
  groupName: "Wanting, Needing & Preferences",
  groupName_bn: "চাওয়া, প্রয়োজন এবং পছন্দ",
  difficulty: "beginner",
  prerequisites: ["A1"],
  patterns: [
    {
      id: "A5.1",
      formula: "I prefer [A] to [B]",
      formula_bn: "আমি [B]-এর চেয়ে [A] পছন্দ করি",
      patternName: "Stating a Preference",
      patternName_bn: "পছন্দ জানানো",
      slots: [
        {
          name: "A",
          description: "The preferred noun, gerund, or noun phrase",
          description_bn: "পছন্দের বিশেষ্য, জেরান্ড, বা বিশেষ্য পদবন্ধ",
          acceptedTypes: ["noun", "gerund"],
          examples: ["tea", "reading", "the morning"],
        },
        {
          name: "B",
          description: "The less preferred noun, gerund, or noun phrase",
          description_bn:
            "কম পছন্দের বিশেষ্য, জেরান্ড, বা বিশেষ্য পদবন্ধ",
          acceptedTypes: ["noun", "gerund"],
          examples: ["coffee", "watching TV", "the evening"],
        },
      ],
      examples: [
        {
          en: "I prefer tea to coffee.",
          bn: "আমি কফির চেয়ে চা পছন্দ করি।",
          slotValues: { A: "tea", B: "coffee" },
          topicArea: "food",
        },
        {
          en: "I prefer reading to watching TV.",
          bn: "আমি টিভি দেখার চেয়ে পড়া পছন্দ করি।",
          slotValues: { A: "reading", B: "watching TV" },
          topicArea: "daily_life",
        },
        {
          en: "I prefer the morning to the evening.",
          bn: "আমি সন্ধ্যার চেয়ে সকাল পছন্দ করি।",
          slotValues: { A: "the morning", B: "the evening" },
          topicArea: "daily_life",
        },
        {
          en: "I prefer working alone to working in a team.",
          bn: "আমি দলে কাজ করার চেয়ে একা কাজ করা পছন্দ করি।",
          slotValues: { A: "working alone", B: "working in a team" },
          topicArea: "work",
        },
        {
          en: "I prefer trains to buses.",
          bn: "আমি বাসের চেয়ে ট্রেন পছন্দ করি।",
          slotValues: { A: "trains", B: "buses" },
          topicArea: "travel",
        },
        {
          en: "I prefer home-cooked food to restaurant food.",
          bn: "আমি রেস্তোরাঁর খাবারের চেয়ে ঘরে রান্না করা খাবার পছন্দ করি।",
          slotValues: { A: "home-cooked food", B: "restaurant food" },
          topicArea: "food",
        },
        {
          en: "I prefer walking to driving.",
          bn: "আমি গাড়ি চালানোর চেয়ে হাঁটা পছন্দ করি।",
          slotValues: { A: "walking", B: "driving" },
          topicArea: "health",
        },
        {
          en: "I prefer online classes to in-person classes.",
          bn: "আমি সরাসরি ক্লাসের চেয়ে অনলাইন ক্লাস পছন্দ করি।",
          slotValues: { A: "online classes", B: "in-person classes" },
          topicArea: "education",
        },
        {
          en: "I prefer texting to calling.",
          bn: "আমি ফোন করার চেয়ে মেসেজ করা পছন্দ করি।",
          slotValues: { A: "texting", B: "calling" },
          topicArea: "relationships",
        },
        {
          en: "I prefer cash to card payment.",
          bn: "আমি কার্ড পেমেন্টের চেয়ে নগদ পছন্দ করি।",
          slotValues: { A: "cash", B: "card payment" },
          topicArea: "shopping",
        },
        {
          en: "I prefer the beach to the mountains.",
          bn: "আমি পাহাড়ের চেয়ে সমুদ্র সৈকত পছন্দ করি।",
          slotValues: { A: "the beach", B: "the mountains" },
          topicArea: "travel",
        },
        {
          en: "I prefer small groups to large crowds.",
          bn: "আমি বড় ভিড়ের চেয়ে ছোট দল পছন্দ করি।",
          slotValues: { A: "small groups", B: "large crowds" },
          topicArea: "relationships",
        },
        {
          en: "I prefer natural remedies to pills.",
          bn: "আমি বড়ির চেয়ে প্রাকৃতিক প্রতিকার পছন্দ করি।",
          slotValues: { A: "natural remedies", B: "pills" },
          topicArea: "health",
        },
        {
          en: "I prefer practical learning to theory.",
          bn: "আমি তত্ত্বের চেয়ে ব্যবহারিক শিক্ষা পছন্দ করি।",
          slotValues: { A: "practical learning", B: "theory" },
          topicArea: "education",
        },
        {
          en: "I prefer flexible hours to a fixed schedule.",
          bn: "আমি নির্দিষ্ট সময়সূচির চেয়ে নমনীয় সময় পছন্দ করি।",
          slotValues: { A: "flexible hours", B: "a fixed schedule" },
          topicArea: "work",
        },
      ],
      formality: "polite",
      difficulty: "beginner",
      usageNote:
        "Use 'to' (not 'than') with 'prefer' when comparing nouns or gerunds: 'I prefer A to B'.",
      usageNote_bn:
        "বিশেষ্য বা জেরান্ড তুলনা করার সময় 'prefer'-এর সাথে 'to' ব্যবহার করুন ('than' নয়): 'I prefer A to B'।",
      combinableWith: ["A5.2"],
      banglaStructureMap:
        "আমি (Subject) + [B]-এর চেয়ে (Comparison) + [A] (Preferred) + পছন্দ করি (Verb)",
    },
    {
      id: "A5.2",
      formula: "I'd rather [ACTION] than [ACTION]",
      formula_bn: "আমি [কাজ] করার চেয়ে [কাজ] করব",
      patternName: "Rather...Than Preference",
      patternName_bn: "বরং...চেয়ে পছন্দ",
      slots: [
        {
          name: "ACTION",
          description: "Base-form verb phrases being compared",
          description_bn: "তুলনা করা হচ্ছে এমন মূল-রূপ ক্রিয়া পদবন্ধ",
          acceptedTypes: ["verb"],
          examples: ["stay home", "walk", "cook myself"],
        },
      ],
      examples: [
        {
          en: "I'd rather stay home than go out.",
          bn: "আমি বাইরে যাওয়ার চেয়ে বরং বাড়িতে থাকব।",
          slotValues: { ACTION: "stay home | go out" },
          topicArea: "daily_life",
        },
        {
          en: "I'd rather walk than take the bus.",
          bn: "আমি বাসে চড়ার চেয়ে বরং হাঁটব।",
          slotValues: { ACTION: "walk | take the bus" },
          topicArea: "travel",
        },
        {
          en: "I'd rather cook myself than order food.",
          bn: "আমি খাবার অর্ডার করার চেয়ে বরং নিজে রান্না করব।",
          slotValues: { ACTION: "cook myself | order food" },
          topicArea: "food",
        },
        {
          en: "I'd rather work hard now than regret later.",
          bn: "আমি পরে আফসোস করার চেয়ে বরং এখন কঠোর পরিশ্রম করব।",
          slotValues: { ACTION: "work hard now | regret later" },
          topicArea: "work",
        },
        {
          en: "I'd rather study at night than in the morning.",
          bn: "আমি সকালে পড়ার চেয়ে বরং রাতে পড়ব।",
          slotValues: { ACTION: "study at night | study in the morning" },
          topicArea: "education",
        },
        {
          en: "I'd rather save money than spend it on unnecessary things.",
          bn: "আমি অপ্রয়োজনীয় জিনিসে খরচ করার চেয়ে বরং টাকা জমাব।",
          slotValues: {
            ACTION: "save money | spend it on unnecessary things",
          },
          topicArea: "shopping",
        },
        {
          en: "I'd rather rest than push myself too hard.",
          bn: "আমি নিজেকে অতিরিক্ত চাপ দেওয়ার চেয়ে বরং বিশ্রাম নেব।",
          slotValues: { ACTION: "rest | push myself too hard" },
          topicArea: "health",
        },
        {
          en: "I'd rather meet in person than talk on the phone.",
          bn: "আমি ফোনে কথা বলার চেয়ে বরং সামনাসামনি দেখা করব।",
          slotValues: { ACTION: "meet in person | talk on the phone" },
          topicArea: "relationships",
        },
        {
          en: "I'd rather fly than take a long train ride.",
          bn: "আমি দীর্ঘ ট্রেন ভ্রমণের চেয়ে বরং বিমানে যাব।",
          slotValues: { ACTION: "fly | take a long train ride" },
          topicArea: "travel",
        },
        {
          en: "I'd rather have rice than bread.",
          bn: "আমি রুটির চেয়ে বরং ভাত খাব।",
          slotValues: { ACTION: "have rice | have bread" },
          topicArea: "food",
        },
        {
          en: "I'd rather be honest than lie.",
          bn: "আমি মিথ্যা বলার চেয়ে বরং সৎ থাকব।",
          slotValues: { ACTION: "be honest | lie" },
          topicArea: "relationships",
        },
        {
          en: "I'd rather finish early than stay late.",
          bn: "আমি দেরি পর্যন্ত থাকার চেয়ে বরং তাড়াতাড়ি শেষ করব।",
          slotValues: { ACTION: "finish early | stay late" },
          topicArea: "work",
        },
        {
          en: "I'd rather do yoga than go to the gym.",
          bn: "আমি জিমে যাওয়ার চেয়ে বরং যোগব্যায়াম করব।",
          slotValues: { ACTION: "do yoga | go to the gym" },
          topicArea: "health",
        },
        {
          en: "I'd rather learn by doing than by reading textbooks.",
          bn: "আমি পাঠ্যবই পড়ে শেখার চেয়ে বরং করে শিখব।",
          slotValues: { ACTION: "learn by doing | read textbooks" },
          topicArea: "education",
        },
        {
          en: "I'd rather buy quality items than cheap ones.",
          bn: "আমি সস্তা জিনিস কেনার চেয়ে বরং মানসম্পন্ন জিনিস কিনব।",
          slotValues: { ACTION: "buy quality items | buy cheap ones" },
          topicArea: "shopping",
        },
      ],
      formality: "casual",
      difficulty: "beginner",
      usageNote:
        "'I'd rather' is followed by a base verb (not 'to + verb'). Use 'than' to introduce the less preferred option.",
      usageNote_bn:
        "'I'd rather'-এর পরে মূল ক্রিয়া আসে ('to + verb' নয়)। কম পছন্দের বিকল্প পরিচয় করাতে 'than' ব্যবহার করুন।",
      combinableWith: ["A5.1", "A10.1"],
      banglaStructureMap:
        "আমি (Subject) + [ACTION2] করার চেয়ে (Comparison) + বরং [ACTION1] করব (Preferred + Verb)",
    },
    {
      id: "A5.3",
      formula: "I like [A] better than [B]",
      formula_bn: "আমি [B]-এর চেয়ে [A] বেশি পছন্দ করি",
      patternName: "Liking One More",
      patternName_bn: "একটি বেশি পছন্দ করা",
      slots: [
        {
          name: "A",
          description: "The more liked noun, gerund, or noun phrase",
          description_bn:
            "বেশি পছন্দের বিশেষ্য, জেরান্ড, বা বিশেষ্য পদবন্ধ",
          acceptedTypes: ["noun", "gerund"],
          examples: ["chocolate", "swimming", "summer"],
        },
        {
          name: "B",
          description: "The less liked noun, gerund, or noun phrase",
          description_bn:
            "কম পছন্দের বিশেষ্য, জেরান্ড, বা বিশেষ্য পদবন্ধ",
          acceptedTypes: ["noun", "gerund"],
          examples: ["vanilla", "running", "winter"],
        },
      ],
      examples: [
        {
          en: "I like chocolate better than vanilla.",
          bn: "আমি ভ্যানিলার চেয়ে চকলেট বেশি পছন্দ করি।",
          slotValues: { A: "chocolate", B: "vanilla" },
          topicArea: "food",
        },
        {
          en: "I like swimming better than running.",
          bn: "আমি দৌড়ানোর চেয়ে সাঁতার বেশি পছন্দ করি।",
          slotValues: { A: "swimming", B: "running" },
          topicArea: "health",
        },
        {
          en: "I like summer better than winter.",
          bn: "আমি শীতকালের চেয়ে গ্রীষ্মকাল বেশি পছন্দ করি।",
          slotValues: { A: "summer", B: "winter" },
          topicArea: "daily_life",
        },
        {
          en: "I like working remotely better than going to the office.",
          bn: "আমি অফিসে যাওয়ার চেয়ে দূর থেকে কাজ করা বেশি পছন্দ করি।",
          slotValues: { A: "working remotely", B: "going to the office" },
          topicArea: "work",
        },
        {
          en: "I like traveling by plane better than by car.",
          bn: "আমি গাড়িতে ভ্রমণের চেয়ে বিমানে ভ্রমণ বেশি পছন্দ করি।",
          slotValues: { A: "traveling by plane", B: "traveling by car" },
          topicArea: "travel",
        },
        {
          en: "I like biryani better than pulao.",
          bn: "আমি পোলাওয়ের চেয়ে বিরিয়ানি বেশি পছন্দ করি।",
          slotValues: { A: "biryani", B: "pulao" },
          topicArea: "food",
        },
        {
          en: "I like morning walks better than evening walks.",
          bn: "আমি সন্ধ্যার হাঁটার চেয়ে সকালের হাঁটা বেশি পছন্দ করি।",
          slotValues: { A: "morning walks", B: "evening walks" },
          topicArea: "health",
        },
        {
          en: "I like group study better than studying alone.",
          bn: "আমি একা পড়ার চেয়ে দলীয় পড়া বেশি পছন্দ করি।",
          slotValues: { A: "group study", B: "studying alone" },
          topicArea: "education",
        },
        {
          en: "I like face-to-face meetings better than video calls.",
          bn: "আমি ভিডিও কলের চেয়ে সামনাসামনি দেখা বেশি পছন্দ করি।",
          slotValues: { A: "face-to-face meetings", B: "video calls" },
          topicArea: "relationships",
        },
        {
          en: "I like shopping online better than going to stores.",
          bn: "আমি দোকানে যাওয়ার চেয়ে অনলাইনে কেনাকাটা বেশি পছন্দ করি।",
          slotValues: { A: "shopping online", B: "going to stores" },
          topicArea: "shopping",
        },
        {
          en: "I like cats better than dogs.",
          bn: "আমি কুকুরের চেয়ে বিড়াল বেশি পছন্দ করি।",
          slotValues: { A: "cats", B: "dogs" },
          topicArea: "daily_life",
        },
        {
          en: "I like this hotel better than the last one.",
          bn: "আমি আগেরটার চেয়ে এই হোটেল বেশি পছন্দ করি।",
          slotValues: { A: "this hotel", B: "the last one" },
          topicArea: "travel",
        },
        {
          en: "I like creative work better than routine tasks.",
          bn: "আমি রুটিন কাজের চেয়ে সৃজনশীল কাজ বেশি পছন্দ করি।",
          slotValues: { A: "creative work", B: "routine tasks" },
          topicArea: "work",
        },
        {
          en: "I like learning languages better than math.",
          bn: "আমি গণিতের চেয়ে ভাষা শেখা বেশি পছন্দ করি।",
          slotValues: { A: "learning languages", B: "math" },
          topicArea: "education",
        },
        {
          en: "I like branded products better than local ones.",
          bn: "আমি স্থানীয় পণ্যের চেয়ে ব্র্যান্ডেড পণ্য বেশি পছন্দ করি।",
          slotValues: { A: "branded products", B: "local ones" },
          topicArea: "shopping",
        },
      ],
      formality: "casual",
      difficulty: "beginner",
      usageNote:
        "More conversational than 'prefer'. Uses 'than' (not 'to'). Very natural in spoken English.",
      usageNote_bn:
        "'prefer'-এর চেয়ে বেশি কথোপকথনমূলক। 'than' ব্যবহার করে ('to' নয়)। কথ্য ইংরেজিতে খুবই স্বাভাবিক।",
      combinableWith: ["A5.1"],
      banglaStructureMap:
        "আমি (Subject) + [B]-এর চেয়ে (Comparison) + [A] (Preferred) + বেশি পছন্দ করি (Verb + More)",
    },
    {
      id: "A5.4",
      formula: "Given the choice, I'd go with [THING]",
      formula_bn: "সুযোগ পেলে, আমি [জিনিস] বেছে নেব",
      patternName: "Hypothetical Preference",
      patternName_bn: "কল্পনামূলক পছন্দ",
      slots: [
        {
          name: "THING",
          description: "A noun or noun phrase that would be your choice",
          description_bn:
            "একটি বিশেষ্য বা বিশেষ্য পদবন্ধ যা আপনার পছন্দ হবে",
          acceptedTypes: ["noun"],
          examples: [
            "the blue one",
            "a quiet life",
            "the window seat",
          ],
        },
      ],
      examples: [
        {
          en: "Given the choice, I'd go with the blue one.",
          bn: "সুযোগ পেলে, আমি নীলটা বেছে নেব।",
          slotValues: { THING: "the blue one" },
          topicArea: "shopping",
        },
        {
          en: "Given the choice, I'd go with a quiet life.",
          bn: "সুযোগ পেলে, আমি শান্ত জীবন বেছে নেব।",
          slotValues: { THING: "a quiet life" },
          topicArea: "daily_life",
        },
        {
          en: "Given the choice, I'd go with the window seat.",
          bn: "সুযোগ পেলে, আমি জানালার পাশের সিট বেছে নেব।",
          slotValues: { THING: "the window seat" },
          topicArea: "travel",
        },
        {
          en: "Given the choice, I'd go with the chicken biryani.",
          bn: "সুযোগ পেলে, আমি চিকেন বিরিয়ানি বেছে নেব।",
          slotValues: { THING: "the chicken biryani" },
          topicArea: "food",
        },
        {
          en: "Given the choice, I'd go with the part-time role.",
          bn: "সুযোগ পেলে, আমি পার্ট-টাইম পদ বেছে নেব।",
          slotValues: { THING: "the part-time role" },
          topicArea: "work",
        },
        {
          en: "Given the choice, I'd go with the smaller class.",
          bn: "সুযোগ পেলে, আমি ছোট ক্লাস বেছে নেব।",
          slotValues: { THING: "the smaller class" },
          topicArea: "education",
        },
        {
          en: "Given the choice, I'd go with the herbal treatment.",
          bn: "সুযোগ পেলে, আমি ভেষজ চিকিৎসা বেছে নেব।",
          slotValues: { THING: "the herbal treatment" },
          topicArea: "health",
        },
        {
          en: "Given the choice, I'd go with honesty.",
          bn: "সুযোগ পেলে, আমি সততা বেছে নেব।",
          slotValues: { THING: "honesty" },
          topicArea: "relationships",
        },
        {
          en: "Given the choice, I'd go with the express train.",
          bn: "সুযোগ পেলে, আমি এক্সপ্রেস ট্রেন বেছে নেব।",
          slotValues: { THING: "the express train" },
          topicArea: "travel",
        },
        {
          en: "Given the choice, I'd go with the organic option.",
          bn: "সুযোগ পেলে, আমি অর্গানিক বিকল্প বেছে নেব।",
          slotValues: { THING: "the organic option" },
          topicArea: "food",
        },
        {
          en: "Given the choice, I'd go with the red dress.",
          bn: "সুযোগ পেলে, আমি লাল ড্রেসটা বেছে নেব।",
          slotValues: { THING: "the red dress" },
          topicArea: "shopping",
        },
        {
          en: "Given the choice, I'd go with a morning shift.",
          bn: "সুযোগ পেলে, আমি সকালের শিফট বেছে নেব।",
          slotValues: { THING: "a morning shift" },
          topicArea: "work",
        },
        {
          en: "Given the choice, I'd go with home schooling.",
          bn: "সুযোগ পেলে, আমি হোম স্কুলিং বেছে নেব।",
          slotValues: { THING: "home schooling" },
          topicArea: "education",
        },
        {
          en: "Given the choice, I'd go with prevention over cure.",
          bn: "সুযোগ পেলে, আমি চিকিৎসার চেয়ে প্রতিরোধ বেছে নেব।",
          slotValues: { THING: "prevention over cure" },
          topicArea: "health",
        },
        {
          en: "Given the choice, I'd go with a close friend over a stranger.",
          bn: "সুযোগ পেলে, আমি অপরিচিতের চেয়ে ঘনিষ্ঠ বন্ধু বেছে নেব।",
          slotValues: { THING: "a close friend over a stranger" },
          topicArea: "relationships",
        },
      ],
      formality: "polite",
      difficulty: "beginner",
      usageNote:
        "'Given the choice' sets up a hypothetical scenario. 'Go with' is informal for 'choose' or 'select'.",
      usageNote_bn:
        "'Given the choice' একটি কাল্পনিক পরিস্থিতি তৈরি করে। 'Go with' হলো 'choose' বা 'select'-এর অনানুষ্ঠানিক রূপ।",
      combinableWith: ["A5.1"],
      banglaStructureMap:
        "সুযোগ পেলে (Conditional) + আমি (Subject) + [THING] (Object) + বেছে নেব (Verb)",
    },
    {
      id: "A5.5",
      formula: "[THING] is more my thing",
      formula_bn: "[জিনিস] আমার বেশি পছন্দ",
      patternName: "Casual Personal Preference",
      patternName_bn: "সাধারণ ব্যক্তিগত পছন্দ",
      slots: [
        {
          name: "THING",
          description:
            "A noun or gerund phrase that suits you or matches your style",
          description_bn:
            "একটি বিশেষ্য বা জেরান্ড পদবন্ধ যা আপনার সাথে মানায় বা আপনার স্টাইলের সাথে মেলে",
          acceptedTypes: ["noun", "gerund"],
          examples: ["cooking", "jazz music", "small gatherings"],
        },
      ],
      examples: [
        {
          en: "Cooking is more my thing.",
          bn: "রান্না আমার বেশি পছন্দ।",
          slotValues: { THING: "Cooking" },
          topicArea: "food",
        },
        {
          en: "Jazz music is more my thing.",
          bn: "জ্যাজ সঙ্গীত আমার বেশি পছন্দ।",
          slotValues: { THING: "Jazz music" },
          topicArea: "daily_life",
        },
        {
          en: "Small gatherings are more my thing.",
          bn: "ছোট আড্ডা আমার বেশি পছন্দ।",
          slotValues: { THING: "Small gatherings" },
          topicArea: "relationships",
        },
        {
          en: "Working independently is more my thing.",
          bn: "স্বাধীনভাবে কাজ করা আমার বেশি পছন্দ।",
          slotValues: { THING: "Working independently" },
          topicArea: "work",
        },
        {
          en: "Adventure travel is more my thing.",
          bn: "অ্যাডভেঞ্চার ট্রাভেল আমার বেশি পছন্দ।",
          slotValues: { THING: "Adventure travel" },
          topicArea: "travel",
        },
        {
          en: "Spicy food is more my thing.",
          bn: "ঝাল খাবার আমার বেশি পছন্দ।",
          slotValues: { THING: "Spicy food" },
          topicArea: "food",
        },
        {
          en: "Yoga is more my thing.",
          bn: "যোগব্যায়াম আমার বেশি পছন্দ।",
          slotValues: { THING: "Yoga" },
          topicArea: "health",
        },
        {
          en: "Self-study is more my thing.",
          bn: "নিজে নিজে পড়া আমার বেশি পছন্দ।",
          slotValues: { THING: "Self-study" },
          topicArea: "education",
        },
        {
          en: "Casual clothing is more my thing.",
          bn: "ক্যাজুয়াল পোশাক আমার বেশি পছন্দ।",
          slotValues: { THING: "Casual clothing" },
          topicArea: "shopping",
        },
        {
          en: "Quiet evenings are more my thing.",
          bn: "শান্ত সন্ধ্যা আমার বেশি পছন্দ।",
          slotValues: { THING: "Quiet evenings" },
          topicArea: "daily_life",
        },
        {
          en: "Road trips are more my thing.",
          bn: "রোড ট্রিপ আমার বেশি পছন্দ।",
          slotValues: { THING: "Road trips" },
          topicArea: "travel",
        },
        {
          en: "One-on-one conversations are more my thing.",
          bn: "একান্তে কথোপকথন আমার বেশি পছন্দ।",
          slotValues: { THING: "One-on-one conversations" },
          topicArea: "relationships",
        },
        {
          en: "Freelancing is more my thing.",
          bn: "ফ্রিল্যান্সিং আমার বেশি পছন্দ।",
          slotValues: { THING: "Freelancing" },
          topicArea: "work",
        },
        {
          en: "Meditation is more my thing.",
          bn: "ধ্যান আমার বেশি পছন্দ।",
          slotValues: { THING: "Meditation" },
          topicArea: "health",
        },
        {
          en: "Hands-on workshops are more my thing.",
          bn: "হাতে-কলমে ওয়ার্কশপ আমার বেশি পছন্দ।",
          slotValues: { THING: "Hands-on workshops" },
          topicArea: "education",
        },
      ],
      formality: "casual",
      difficulty: "beginner",
      usageNote:
        "Very informal and natural in spoken English. 'My thing' means something that suits your taste or personality.",
      usageNote_bn:
        "কথ্য ইংরেজিতে খুবই অনানুষ্ঠানিক এবং স্বাভাবিক। 'My thing' মানে এমন কিছু যা আপনার রুচি বা ব্যক্তিত্বের সাথে মানায়।",
      combinableWith: ["A5.1"],
      banglaStructureMap:
        "[THING] (Subject) + আমার বেশি পছন্দ (Possessor + Preference)",
    },
    {
      id: "A5.6",
      formula: "I'm more of a [TYPE] person",
      formula_bn: "আমি বেশি [ধরন]-এর মানুষ",
      patternName: "Identity-Based Preference",
      patternName_bn: "পরিচয়ভিত্তিক পছন্দ",
      slots: [
        {
          name: "TYPE",
          description:
            "A noun or adjective describing a personality type or preference category",
          description_bn:
            "একটি বিশেষ্য বা বিশেষণ যা ব্যক্তিত্বের ধরন বা পছন্দের শ্রেণি বর্ণনা করে",
          acceptedTypes: ["noun", "adjective"],
          examples: ["tea", "morning", "dog"],
        },
      ],
      examples: [
        {
          en: "I'm more of a tea person.",
          bn: "আমি বেশি চা-এর মানুষ।",
          slotValues: { TYPE: "tea" },
          topicArea: "food",
        },
        {
          en: "I'm more of a morning person.",
          bn: "আমি বেশি সকালের মানুষ।",
          slotValues: { TYPE: "morning" },
          topicArea: "daily_life",
        },
        {
          en: "I'm more of a dog person.",
          bn: "আমি বেশি কুকুর-এর মানুষ।",
          slotValues: { TYPE: "dog" },
          topicArea: "daily_life",
        },
        {
          en: "I'm more of an indoor person.",
          bn: "আমি বেশি ঘরে থাকা মানুষ।",
          slotValues: { TYPE: "indoor" },
          topicArea: "daily_life",
        },
        {
          en: "She's more of a listener.",
          bn: "সে বেশি শ্রোতা ধরনের মানুষ।",
          slotValues: { TYPE: "listener" },
          topicArea: "relationships",
        },
        {
          en: "He's more of a cat person.",
          bn: "সে বেশি বিড়াল-এর মানুষ।",
          slotValues: { TYPE: "cat" },
          topicArea: "daily_life",
        },
        {
          en: "I'm more of a night owl.",
          bn: "আমি বেশি রাতজাগা মানুষ।",
          slotValues: { TYPE: "night owl" },
          topicArea: "daily_life",
        },
        {
          en: "I'm more of a book person than a movie person.",
          bn: "আমি সিনেমার চেয়ে বেশি বই-এর মানুষ।",
          slotValues: { TYPE: "book" },
          topicArea: "education",
        },
        {
          en: "She's more of a coffee person.",
          bn: "সে বেশি কফি-এর মানুষ।",
          slotValues: { TYPE: "coffee" },
          topicArea: "food",
        },
        {
          en: "I'm more of a casual dresser.",
          bn: "আমি বেশি ক্যাজুয়াল পোশাকের মানুষ।",
          slotValues: { TYPE: "casual dresser" },
          topicArea: "shopping",
        },
        {
          en: "He's more of a solo traveler.",
          bn: "সে বেশি একা ভ্রমণকারী ধরনের মানুষ।",
          slotValues: { TYPE: "solo traveler" },
          topicArea: "travel",
        },
        {
          en: "I'm more of a homebody.",
          bn: "আমি বেশি ঘরকুনো মানুষ।",
          slotValues: { TYPE: "homebody" },
          topicArea: "daily_life",
        },
        {
          en: "She's more of a planner than a spontaneous person.",
          bn: "সে বেশি পরিকল্পনাকারী ধরনের মানুষ।",
          slotValues: { TYPE: "planner" },
          topicArea: "work",
        },
        {
          en: "I'm more of a spicy food person.",
          bn: "আমি বেশি ঝাল খাবার-এর মানুষ।",
          slotValues: { TYPE: "spicy food" },
          topicArea: "food",
        },
        {
          en: "He's more of a team player.",
          bn: "সে বেশি দলগত কাজের মানুষ।",
          slotValues: { TYPE: "team player" },
          topicArea: "work",
        },
      ],
      formality: "casual",
      difficulty: "beginner",
      usageNote:
        "'More of a [TYPE] person' is a very natural way to describe your identity or personality preferences in casual conversation.",
      usageNote_bn:
        "'More of a [TYPE] person' অনানুষ্ঠানিক কথোপকথনে আপনার পরিচয় বা ব্যক্তিত্বের পছন্দ বর্ণনা করার খুবই স্বাভাবিক উপায়।",
      combinableWith: ["A5.5"],
      banglaStructureMap:
        "আমি (Subject) + বেশি [TYPE]-এর (Type + Possessive) + মানুষ (Person)",
    },
  ],
};
