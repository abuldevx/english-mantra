import { PatternCategory } from "@/types/pattern";

export const categoryK5: PatternCategory = {
  id: "K5",
  slug: "saying-telling-patterns",
  name: "Saying & Telling Patterns",
  name_bn: "বলা ও জানানোর ধরন",
  description:
    "Learn various patterns for saying and telling things to people.",
  description_bn:
    "মানুষকে বিভিন্নভাবে কিছু বলা ও জানানোর ধরন শিখুন।",
  icon: "💭",
  group: "K",
  groupName: "Reported Speech & Communication",
  groupName_bn: "পরোক্ষ উক্তি ও যোগাযোগ",
  difficulty: "intermediate",
  patterns: [
    {
      id: "K5.1",
      formula: "I told [PERSON] about [THING]",
      formula_bn: "আমি [ব্যক্তি]-কে [বিষয়] সম্পর্কে বলেছি",
      patternName: "Telling Someone About Something",
      patternName_bn: "কাউকে কিছু সম্পর্কে বলা",
      slots: [
        {
          name: "PERSON",
          description: "The person who was told",
          description_bn: "যাকে বলা হয়েছে",
          acceptedTypes: ["person"],
          examples: ["him", "her", "my friend", "my boss"],
        },
        {
          name: "THING",
          description: "The topic that was discussed",
          description_bn: "যে বিষয়ে আলোচনা করা হয়েছে",
          acceptedTypes: ["topic", "noun_phrase"],
          examples: ["the trip", "my new job", "the problem"],
        },
      ],
      examples: [
        {
          en: "I told him about the trip.",
          bn: "আমি তাকে ভ্রমণের কথা বলেছি।",
          slotValues: { PERSON: "him", THING: "the trip" },
          topicArea: "travel",
        },
        {
          en: "I told her about my new job.",
          bn: "আমি তাকে আমার নতুন চাকরির কথা বলেছি।",
          slotValues: { PERSON: "her", THING: "my new job" },
          topicArea: "work",
        },
        {
          en: "I told my friend about the problem.",
          bn: "আমি আমার বন্ধুকে সমস্যার কথা বলেছি।",
          slotValues: { PERSON: "my friend", THING: "the problem" },
          topicArea: "daily_life",
        },
        {
          en: "I told my boss about the delay.",
          bn: "আমি আমার বসকে বিলম্বের কথা বলেছি।",
          slotValues: { PERSON: "my boss", THING: "the delay" },
          topicArea: "work",
        },
        {
          en: "I told my parents about my exam results.",
          bn: "আমি আমার বাবা-মাকে পরীক্ষার ফলাফলের কথা বলেছি।",
          slotValues: {
            PERSON: "my parents",
            THING: "my exam results",
          },
          topicArea: "education",
        },
        {
          en: "I told her about the new restaurant.",
          bn: "আমি তাকে নতুন রেস্তোরাঁর কথা বলেছি।",
          slotValues: { PERSON: "her", THING: "the new restaurant" },
          topicArea: "food",
        },
        {
          en: "I told him about my health issues.",
          bn: "আমি তাকে আমার স্বাস্থ্য সমস্যার কথা বলেছি।",
          slotValues: { PERSON: "him", THING: "my health issues" },
          topicArea: "health",
        },
        {
          en: "I told my sister about the surprise party.",
          bn: "আমি আমার বোনকে সারপ্রাইজ পার্টির কথা বলেছি।",
          slotValues: {
            PERSON: "my sister",
            THING: "the surprise party",
          },
          topicArea: "relationships",
        },
        {
          en: "I told my teacher about my absence.",
          bn: "আমি আমার শিক্ষককে আমার অনুপস্থিতির কথা বলেছি।",
          slotValues: { PERSON: "my teacher", THING: "my absence" },
          topicArea: "education",
        },
        {
          en: "I told him about the sale at the market.",
          bn: "আমি তাকে বাজারের সেলের কথা বলেছি।",
          slotValues: {
            PERSON: "him",
            THING: "the sale at the market",
          },
          topicArea: "shopping",
        },
        {
          en: "I told her about the beautiful beach in Cox's Bazar.",
          bn: "আমি তাকে কক্সবাজারের সুন্দর সমুদ্র সৈকতের কথা বলেছি।",
          slotValues: {
            PERSON: "her",
            THING: "the beautiful beach in Cox's Bazar",
          },
          topicArea: "travel",
        },
        {
          en: "I told my colleague about the meeting schedule.",
          bn: "আমি আমার সহকর্মীকে মিটিংয়ের সময়সূচির কথা বলেছি।",
          slotValues: {
            PERSON: "my colleague",
            THING: "the meeting schedule",
          },
          topicArea: "work",
        },
        {
          en: "I told her about the recipe I found online.",
          bn: "আমি তাকে অনলাইনে পাওয়া রেসিপির কথা বলেছি।",
          slotValues: {
            PERSON: "her",
            THING: "the recipe I found online",
          },
          topicArea: "food",
        },
        {
          en: "I told my doctor about the headaches.",
          bn: "আমি আমার ডাক্তারকে মাথা ব্যথার কথা বলেছি।",
          slotValues: {
            PERSON: "my doctor",
            THING: "the headaches",
          },
          topicArea: "health",
        },
        {
          en: "I told my neighbor about the noise complaint.",
          bn: "আমি আমার প্রতিবেশীকে শব্দের অভিযোগের কথা বলেছি।",
          slotValues: {
            PERSON: "my neighbor",
            THING: "the noise complaint",
          },
          topicArea: "relationships",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "'Tell someone about' is used to share information on a topic. 'Tell' always needs a person as object.",
      usageNote_bn:
        "'Tell someone about' কোনো বিষয়ে তথ্য শেয়ার করতে ব্যবহৃত হয়। 'Tell' এর পরে সবসময় একজন ব্যক্তি লাগে।",
    },
    {
      id: "K5.2",
      formula: "Let me tell you about [THING]",
      formula_bn: "আমাকে [বিষয়] সম্পর্কে বলতে দাও",
      patternName: "Introducing a Topic",
      patternName_bn: "বিষয় পরিচিতি",
      slots: [
        {
          name: "THING",
          description: "The topic you want to share",
          description_bn: "যে বিষয় আপনি শেয়ার করতে চান",
          acceptedTypes: ["topic", "noun_phrase"],
          examples: [
            "my experience",
            "what happened yesterday",
            "this amazing place",
          ],
        },
      ],
      examples: [
        {
          en: "Let me tell you about my experience.",
          bn: "আমার অভিজ্ঞতার কথা বলি শোনো।",
          slotValues: { THING: "my experience" },
          topicArea: "daily_life",
        },
        {
          en: "Let me tell you about what happened yesterday.",
          bn: "গতকাল কী হয়েছিল বলি শোনো।",
          slotValues: { THING: "what happened yesterday" },
          topicArea: "daily_life",
        },
        {
          en: "Let me tell you about this amazing restaurant.",
          bn: "এই অসাধারণ রেস্তোরাঁর কথা বলি শোনো।",
          slotValues: { THING: "this amazing restaurant" },
          topicArea: "food",
        },
        {
          en: "Let me tell you about our trip to Sylhet.",
          bn: "আমাদের সিলেট ভ্রমণের কথা বলি শোনো।",
          slotValues: { THING: "our trip to Sylhet" },
          topicArea: "travel",
        },
        {
          en: "Let me tell you about my new project at work.",
          bn: "আমার কাজের নতুন প্রজেক্টের কথা বলি শোনো।",
          slotValues: { THING: "my new project at work" },
          topicArea: "work",
        },
        {
          en: "Let me tell you about a book I just read.",
          bn: "আমি সদ্য যে বইটা পড়েছি সেটার কথা বলি শোনো।",
          slotValues: { THING: "a book I just read" },
          topicArea: "education",
        },
        {
          en: "Let me tell you about this new exercise routine.",
          bn: "এই নতুন ব্যায়ামের রুটিনের কথা বলি শোনো।",
          slotValues: { THING: "this new exercise routine" },
          topicArea: "health",
        },
        {
          en: "Let me tell you about my cousin's wedding.",
          bn: "আমার কাজিনের বিয়ের কথা বলি শোনো।",
          slotValues: { THING: "my cousin's wedding" },
          topicArea: "relationships",
        },
        {
          en: "Let me tell you about this great deal I found.",
          bn: "আমি যে দারুণ অফার পেয়েছি সেটার কথা বলি শোনো।",
          slotValues: { THING: "this great deal I found" },
          topicArea: "shopping",
        },
        {
          en: "Let me tell you about the course I'm taking.",
          bn: "আমি যে কোর্সটা করছি সেটার কথা বলি শোনো।",
          slotValues: { THING: "the course I'm taking" },
          topicArea: "education",
        },
        {
          en: "Let me tell you about the best biryani I've ever had.",
          bn: "আমার জীবনে খাওয়া সেরা বিরিয়ানির কথা বলি শোনো।",
          slotValues: { THING: "the best biryani I've ever had" },
          topicArea: "food",
        },
        {
          en: "Let me tell you about my morning routine.",
          bn: "আমার সকালের রুটিনের কথা বলি শোনো।",
          slotValues: { THING: "my morning routine" },
          topicArea: "health",
        },
        {
          en: "Let me tell you about the place I stayed in Chittagong.",
          bn: "চট্টগ্রামে আমি যেখানে ছিলাম সেটার কথা বলি শোনো।",
          slotValues: {
            THING: "the place I stayed in Chittagong",
          },
          topicArea: "travel",
        },
        {
          en: "Let me tell you about my interview.",
          bn: "আমার ইন্টারভিউয়ের কথা বলি শোনো।",
          slotValues: { THING: "my interview" },
          topicArea: "work",
        },
        {
          en: "Let me tell you about something funny that happened.",
          bn: "একটা মজার ঘটনার কথা বলি শোনো।",
          slotValues: { THING: "something funny that happened" },
          topicArea: "relationships",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "'Let me tell you about' is a friendly way to introduce a story or topic in conversation.",
      usageNote_bn:
        "'Let me tell you about' কথোপকথনে একটি গল্প বা বিষয় পরিচয় করিয়ে দেওয়ার বন্ধুত্বপূর্ণ উপায়।",
    },
    {
      id: "K5.3",
      formula: "I was saying that [CLAUSE]",
      formula_bn: "আমি বলছিলাম যে [উপবাক্য]",
      patternName: "Continuing a Point",
      patternName_bn: "একটি বক্তব্য চালিয়ে যাওয়া",
      slots: [
        {
          name: "CLAUSE",
          description: "The point being continued or repeated",
          description_bn: "যে বক্তব্য চালিয়ে যাওয়া বা পুনরাবৃত্তি করা হচ্ছে",
          acceptedTypes: ["clause"],
          examples: [
            "we should leave early",
            "the plan needs to change",
            "this food is really good",
          ],
        },
      ],
      examples: [
        {
          en: "I was saying that we should leave early.",
          bn: "আমি বলছিলাম যে আমাদের তাড়াতাড়ি বের হওয়া উচিত।",
          slotValues: { CLAUSE: "we should leave early" },
          topicArea: "daily_life",
        },
        {
          en: "I was saying that the plan needs to change.",
          bn: "আমি বলছিলাম যে পরিকল্পনা পরিবর্তন করা দরকার।",
          slotValues: { CLAUSE: "the plan needs to change" },
          topicArea: "work",
        },
        {
          en: "I was saying that this food is really good.",
          bn: "আমি বলছিলাম যে এই খাবার সত্যিই ভালো।",
          slotValues: { CLAUSE: "this food is really good" },
          topicArea: "food",
        },
        {
          en: "I was saying that we need more practice.",
          bn: "আমি বলছিলাম যে আমাদের আরও অনুশীলন দরকার।",
          slotValues: { CLAUSE: "we need more practice" },
          topicArea: "education",
        },
        {
          en: "I was saying that the hotel was overpriced.",
          bn: "আমি বলছিলাম যে হোটেলের দাম বেশি ছিল।",
          slotValues: { CLAUSE: "the hotel was overpriced" },
          topicArea: "travel",
        },
        {
          en: "I was saying that exercise helps reduce stress.",
          bn: "আমি বলছিলাম যে ব্যায়াম মানসিক চাপ কমাতে সাহায্য করে।",
          slotValues: {
            CLAUSE: "exercise helps reduce stress",
          },
          topicArea: "health",
        },
        {
          en: "I was saying that we should invite more people.",
          bn: "আমি বলছিলাম যে আমাদের আরও লোক দাওয়াত দেওয়া উচিত।",
          slotValues: {
            CLAUSE: "we should invite more people",
          },
          topicArea: "relationships",
        },
        {
          en: "I was saying that the deadline is too tight.",
          bn: "আমি বলছিলাম যে ডেডলাইন খুব কম।",
          slotValues: { CLAUSE: "the deadline is too tight" },
          topicArea: "work",
        },
        {
          en: "I was saying that online shopping is more convenient.",
          bn: "আমি বলছিলাম যে অনলাইন শপিং বেশি সুবিধাজনক।",
          slotValues: {
            CLAUSE: "online shopping is more convenient",
          },
          topicArea: "shopping",
        },
        {
          en: "I was saying that the weather has been unpredictable.",
          bn: "আমি বলছিলাম যে আবহাওয়া অনিশ্চিত হয়ে গেছে।",
          slotValues: {
            CLAUSE: "the weather has been unpredictable",
          },
          topicArea: "daily_life",
        },
        {
          en: "I was saying that we should try that new cafe.",
          bn: "আমি বলছিলাম যে আমাদের সেই নতুন ক্যাফে ট্রাই করা উচিত।",
          slotValues: {
            CLAUSE: "we should try that new cafe",
          },
          topicArea: "food",
        },
        {
          en: "I was saying that the children need to study harder.",
          bn: "আমি বলছিলাম যে বাচ্চাদের আরও পড়াশোনা করা উচিত।",
          slotValues: {
            CLAUSE: "the children need to study harder",
          },
          topicArea: "education",
        },
        {
          en: "I was saying that the flight tickets are expensive.",
          bn: "আমি বলছিলাম যে ফ্লাইটের টিকেট দামি।",
          slotValues: {
            CLAUSE: "the flight tickets are expensive",
          },
          topicArea: "travel",
        },
        {
          en: "I was saying that we should visit grandma this weekend.",
          bn: "আমি বলছিলাম যে এই সপ্তাহান্তে দাদির কাছে যাওয়া উচিত।",
          slotValues: {
            CLAUSE: "we should visit grandma this weekend",
          },
          topicArea: "relationships",
        },
        {
          en: "I was saying that walking is great for your health.",
          bn: "আমি বলছিলাম যে হাঁটা স্বাস্থ্যের জন্য দারুণ।",
          slotValues: {
            CLAUSE: "walking is great for your health",
          },
          topicArea: "health",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "'I was saying that' is used to resume a point after being interrupted, or to repeat something for emphasis.",
      usageNote_bn:
        "'I was saying that' বাধা পাওয়ার পর বক্তব্য আবার শুরু করতে, বা জোর দেওয়ার জন্য পুনরাবৃত্তি করতে ব্যবহৃত হয়।",
    },
    {
      id: "K5.4",
      formula: "They say that [CLAUSE]",
      formula_bn: "বলা হয় যে [উপবাক্য]",
      patternName: "Reporting General Beliefs",
      patternName_bn: "সাধারণ বিশ্বাস প্রতিবেদন",
      slots: [
        {
          name: "CLAUSE",
          description: "A common saying or general belief",
          description_bn: "একটি প্রচলিত কথা বা সাধারণ বিশ্বাস",
          acceptedTypes: ["clause"],
          examples: [
            "laughter is the best medicine",
            "breakfast is the most important meal",
            "travel broadens the mind",
          ],
        },
      ],
      examples: [
        {
          en: "They say that laughter is the best medicine.",
          bn: "বলা হয় যে হাসি সেরা ওষুধ।",
          slotValues: {
            CLAUSE: "laughter is the best medicine",
          },
          topicArea: "health",
        },
        {
          en: "They say that breakfast is the most important meal of the day.",
          bn: "বলা হয় যে সকালের নাস্তা দিনের সবচেয়ে গুরুত্বপূর্ণ খাবার।",
          slotValues: {
            CLAUSE: "breakfast is the most important meal of the day",
          },
          topicArea: "food",
        },
        {
          en: "They say that travel broadens the mind.",
          bn: "বলা হয় যে ভ্রমণ মনকে প্রসারিত করে।",
          slotValues: { CLAUSE: "travel broadens the mind" },
          topicArea: "travel",
        },
        {
          en: "They say that practice makes perfect.",
          bn: "বলা হয় যে অনুশীলনে নিখুঁততা আসে।",
          slotValues: { CLAUSE: "practice makes perfect" },
          topicArea: "education",
        },
        {
          en: "They say that money can't buy happiness.",
          bn: "বলা হয় যে টাকা দিয়ে সুখ কেনা যায় না।",
          slotValues: { CLAUSE: "money can't buy happiness" },
          topicArea: "shopping",
        },
        {
          en: "They say that first impressions matter.",
          bn: "বলা হয় যে প্রথম ধারণা গুরুত্বপূর্ণ।",
          slotValues: { CLAUSE: "first impressions matter" },
          topicArea: "work",
        },
        {
          en: "They say that good things come to those who wait.",
          bn: "বলা হয় যে যারা অপেক্ষা করে তারা ভালো জিনিস পায়।",
          slotValues: {
            CLAUSE: "good things come to those who wait",
          },
          topicArea: "daily_life",
        },
        {
          en: "They say that fish is good for the brain.",
          bn: "বলা হয় যে মাছ মস্তিষ্কের জন্য ভালো।",
          slotValues: { CLAUSE: "fish is good for the brain" },
          topicArea: "food",
        },
        {
          en: "They say that sleeping eight hours is essential.",
          bn: "বলা হয় যে আট ঘণ্টা ঘুম অপরিহার্য।",
          slotValues: {
            CLAUSE: "sleeping eight hours is essential",
          },
          topicArea: "health",
        },
        {
          en: "They say that you learn something new every day.",
          bn: "বলা হয় যে প্রতিদিন নতুন কিছু শেখা হয়।",
          slotValues: {
            CLAUSE: "you learn something new every day",
          },
          topicArea: "education",
        },
        {
          en: "They say that home is where the heart is.",
          bn: "বলা হয় যে যেখানে মন সেখানেই ঘর।",
          slotValues: { CLAUSE: "home is where the heart is" },
          topicArea: "relationships",
        },
        {
          en: "They say that the customer is always right.",
          bn: "বলা হয় যে ক্রেতা সবসময় সঠিক।",
          slotValues: {
            CLAUSE: "the customer is always right",
          },
          topicArea: "shopping",
        },
        {
          en: "They say that hard work pays off.",
          bn: "বলা হয় যে কঠোর পরিশ্রমের ফল মেলে।",
          slotValues: { CLAUSE: "hard work pays off" },
          topicArea: "work",
        },
        {
          en: "They say that the best things in life are free.",
          bn: "বলা হয় যে জীবনের সেরা জিনিসগুলো বিনামূল্যে পাওয়া যায়।",
          slotValues: {
            CLAUSE: "the best things in life are free",
          },
          topicArea: "daily_life",
        },
        {
          en: "They say that experience is the best teacher.",
          bn: "বলা হয় যে অভিজ্ঞতা সেরা শিক্ষক।",
          slotValues: {
            CLAUSE: "experience is the best teacher",
          },
          topicArea: "travel",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "'They say' is used to report common beliefs, proverbs, or widely held opinions without specifying who exactly said it.",
      usageNote_bn:
        "'They say' ঠিক কে বলেছে তা উল্লেখ না করে প্রচলিত বিশ্বাস, প্রবাদ বা সাধারণ মতামত জানাতে ব্যবহৃত হয়।",
    },
    {
      id: "K5.5",
      formula: "I have to say, [CLAUSE]",
      formula_bn: "আমাকে বলতেই হবে, [উপবাক্য]",
      patternName: "Emphatic Statement",
      patternName_bn: "জোরদার বক্তব্য",
      slots: [
        {
          name: "CLAUSE",
          description: "A strong opinion or observation",
          description_bn: "একটি জোরালো মতামত বা পর্যবেক্ষণ",
          acceptedTypes: ["clause"],
          examples: [
            "I'm really impressed",
            "this is delicious",
            "you did a great job",
          ],
        },
      ],
      examples: [
        {
          en: "I have to say, I'm really impressed.",
          bn: "আমাকে বলতেই হবে, আমি সত্যিই মুগ্ধ।",
          slotValues: { CLAUSE: "I'm really impressed" },
          topicArea: "daily_life",
        },
        {
          en: "I have to say, this biryani is delicious.",
          bn: "আমাকে বলতেই হবে, এই বিরিয়ানি অসাধারণ।",
          slotValues: { CLAUSE: "this biryani is delicious" },
          topicArea: "food",
        },
        {
          en: "I have to say, you did a great job on the presentation.",
          bn: "আমাকে বলতেই হবে, প্রেজেন্টেশনে তুমি দারুণ করেছ।",
          slotValues: {
            CLAUSE: "you did a great job on the presentation",
          },
          topicArea: "work",
        },
        {
          en: "I have to say, the view from here is stunning.",
          bn: "আমাকে বলতেই হবে, এখান থেকে দৃশ্যটা অসাধারণ।",
          slotValues: {
            CLAUSE: "the view from here is stunning",
          },
          topicArea: "travel",
        },
        {
          en: "I have to say, I'm a bit disappointed.",
          bn: "আমাকে বলতেই হবে, আমি একটু হতাশ।",
          slotValues: { CLAUSE: "I'm a bit disappointed" },
          topicArea: "daily_life",
        },
        {
          en: "I have to say, the students have improved a lot.",
          bn: "আমাকে বলতেই হবে, ছাত্ররা অনেক উন্নতি করেছে।",
          slotValues: {
            CLAUSE: "the students have improved a lot",
          },
          topicArea: "education",
        },
        {
          en: "I have to say, I feel so much better after the treatment.",
          bn: "আমাকে বলতেই হবে, চিকিৎসার পর আমি অনেক ভালো অনুভব করছি।",
          slotValues: {
            CLAUSE: "I feel so much better after the treatment",
          },
          topicArea: "health",
        },
        {
          en: "I have to say, your family is very welcoming.",
          bn: "আমাকে বলতেই হবে, তোমার পরিবার খুবই আন্তরিক।",
          slotValues: {
            CLAUSE: "your family is very welcoming",
          },
          topicArea: "relationships",
        },
        {
          en: "I have to say, this deal is too good to pass up.",
          bn: "আমাকে বলতেই হবে, এই অফার ছাড়ার মতো না।",
          slotValues: {
            CLAUSE: "this deal is too good to pass up",
          },
          topicArea: "shopping",
        },
        {
          en: "I have to say, this course is really challenging.",
          bn: "আমাকে বলতেই হবে, এই কোর্সটা সত্যিই চ্যালেঞ্জিং।",
          slotValues: {
            CLAUSE: "this course is really challenging",
          },
          topicArea: "education",
        },
        {
          en: "I have to say, the team has done an outstanding job.",
          bn: "আমাকে বলতেই হবে, দলটি অসামান্য কাজ করেছে।",
          slotValues: {
            CLAUSE: "the team has done an outstanding job",
          },
          topicArea: "work",
        },
        {
          en: "I have to say, the food at the wedding was amazing.",
          bn: "আমাকে বলতেই হবে, বিয়ের খাবার অসাধারণ ছিল।",
          slotValues: {
            CLAUSE: "the food at the wedding was amazing",
          },
          topicArea: "food",
        },
        {
          en: "I have to say, Bangladesh is a beautiful country.",
          bn: "আমাকে বলতেই হবে, বাংলাদেশ একটি সুন্দর দেশ।",
          slotValues: {
            CLAUSE: "Bangladesh is a beautiful country",
          },
          topicArea: "travel",
        },
        {
          en: "I have to say, you look much healthier now.",
          bn: "আমাকে বলতেই হবে, তুমি এখন অনেক স্বাস্থ্যবান দেখাচ্ছ।",
          slotValues: {
            CLAUSE: "you look much healthier now",
          },
          topicArea: "health",
        },
        {
          en: "I have to say, the kids were so well-behaved.",
          bn: "আমাকে বলতেই হবে, বাচ্চারা খুব ভদ্র ছিল।",
          slotValues: {
            CLAUSE: "the kids were so well-behaved",
          },
          topicArea: "relationships",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "'I have to say' adds emphasis and sincerity. It signals that you feel strongly about what follows.",
      usageNote_bn:
        "'I have to say' জোর ও আন্তরিকতা যোগ করে। এটি বোঝায় যে আপনি পরবর্তী কথায় দৃঢ়ভাবে অনুভব করেন।",
    },
  ],
};
