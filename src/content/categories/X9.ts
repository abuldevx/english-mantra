import { PatternCategory } from "@/types/pattern";

export const categoryX9: PatternCategory = {
  id: "X9",
  slug: "do-does-did-confusion",
  name: "Do/Does/Did Confusion",
  name_bn: "Do/Does/Did বিভ্রান্তি",
  description:
    "Master auxiliary verbs do/does/did for questions and negatives. Bangla doesn't use auxiliary verbs this way.",
  description_bn:
    "প্রশ্ন ও নেতিবাচক বাক্যের জন্য সহায়ক ক্রিয়া do/does/did আয়ত্ত করুন। বাংলায় এইভাবে সহায়ক ক্রিয়া ব্যবহার হয় না।",
  icon: "❓",
  group: "X",
  groupName: "Common Mistakes by Bangla Speakers",
  groupName_bn: "বাংলা ভাষীদের সাধারণ ভুল",
  difficulty: "beginner",
  patterns: [
    {
      id: "X9.1",
      formula: "Do you [VERB]?",
      formula_bn: "তুমি কি [ক্রিয়া]?",
      patternName: "Question Formation with Do/Does",
      patternName_bn: "Do/Does দিয়ে প্রশ্ন গঠন",
      slots: [
        {
          name: "VERB",
          description:
            "Base form of the verb. Use 'Do' with I/you/we/they. Use 'Does' with he/she/it.",
          description_bn:
            "ক্রিয়ার মূল রূপ। I/you/we/they-এর সাথে 'Do' ব্যবহার করুন। he/she/it-এর সাথে 'Does' ব্যবহার করুন।",
          acceptedTypes: ["verb", "verb_phrase"],
          examples: ["like tea", "speak English", "live here"],
        },
      ],
      examples: [
        {
          en: "Do you like tea?",
          bn: "তুমি কি চা পছন্দ করো?",
          slotValues: { VERB: "like tea" },
          topicArea: "food",
        },
        {
          en: "Does she speak English?",
          bn: "সে কি ইংরেজি বলে?",
          slotValues: { VERB: "speak English" },
          topicArea: "education",
        },
        {
          en: "Do they live in Dhaka?",
          bn: "তারা কি ঢাকায় থাকে?",
          slotValues: { VERB: "live in Dhaka" },
          topicArea: "daily_life",
        },
        {
          en: "Does he work here?",
          bn: "সে কি এখানে কাজ করে?",
          slotValues: { VERB: "work here" },
          topicArea: "work",
        },
        {
          en: "Do you understand the lesson?",
          bn: "তুমি কি পাঠটি বোঝো?",
          slotValues: { VERB: "understand the lesson" },
          topicArea: "education",
        },
        {
          en: "Does she eat fish?",
          bn: "সে কি মাছ খায়?",
          slotValues: { VERB: "eat fish" },
          topicArea: "food",
        },
        {
          en: "Do you have a car?",
          bn: "তোমার কি গাড়ি আছে?",
          slotValues: { VERB: "have a car" },
          topicArea: "daily_life",
        },
        {
          en: "Does he play cricket?",
          bn: "সে কি ক্রিকেট খেলে?",
          slotValues: { VERB: "play cricket" },
          topicArea: "daily_life",
        },
        {
          en: "Do you want some water?",
          bn: "তুমি কি কিছু পানি চাও?",
          slotValues: { VERB: "want some water" },
          topicArea: "food",
        },
        {
          en: "Does she know the way?",
          bn: "সে কি রাস্তা জানে?",
          slotValues: { VERB: "know the way" },
          topicArea: "travel",
        },
        {
          en: "Do we need a ticket?",
          bn: "আমাদের কি টিকিট দরকার?",
          slotValues: { VERB: "need a ticket" },
          topicArea: "travel",
        },
        {
          en: "Does it rain a lot here?",
          bn: "এখানে কি অনেক বৃষ্টি হয়?",
          slotValues: { VERB: "rain a lot here" },
          topicArea: "daily_life",
        },
        {
          en: "Do you take sugar in your coffee?",
          bn: "তুমি কি কফিতে চিনি নাও?",
          slotValues: { VERB: "take sugar in your coffee" },
          topicArea: "food",
        },
        {
          en: "Does your mother cook every day?",
          bn: "তোমার মা কি প্রতিদিন রান্না করেন?",
          slotValues: { VERB: "cook every day" },
          topicArea: "food",
        },
        {
          en: "Do they accept credit cards?",
          bn: "তারা কি ক্রেডিট কার্ড নেয়?",
          slotValues: { VERB: "accept credit cards" },
          topicArea: "shopping",
        },
      ],
      formality: "casual",
      difficulty: "beginner",
      usageNote:
        "In Bangla, questions are formed by adding 'কি' or changing intonation: 'তুমি চা পছন্দ করো?' In English, you MUST add Do/Does before the subject: 'Do you like tea?' Wrong: 'You like tea?' (as a real question). With he/she/it, use 'Does' and keep the verb in base form: 'Does she like tea?' NOT 'Does she likes tea?'",
      usageNote_bn:
        "বাংলায় 'কি' যোগ করে বা স্বরভঙ্গি পরিবর্তন করে প্রশ্ন করা হয়: 'তুমি চা পছন্দ করো?' ইংরেজিতে subject-এর আগে অবশ্যই Do/Does যোগ করতে হবে: 'Do you like tea?' ভুল: 'You like tea?' he/she/it-এর সাথে 'Does' ব্যবহার করুন এবং ক্রিয়া মূল রূপে রাখুন: 'Does she like tea?' 'Does she likes tea?' নয়।",
      banglaStructureMap:
        "Do/Does + তুমি/সে (Subject) + কি (question marker) + [VERB] (ক্রিয়া)?",
    },
    {
      id: "X9.2",
      formula: "I don't [VERB]",
      formula_bn: "আমি [ক্রিয়া] করি না",
      patternName: "Negative Formation with Don't/Doesn't",
      patternName_bn: "Don't/Doesn't দিয়ে নেতিবাচক গঠন",
      slots: [
        {
          name: "VERB",
          description:
            "Base form of the verb. Use 'don't' with I/you/we/they. Use 'doesn't' with he/she/it.",
          description_bn:
            "ক্রিয়ার মূল রূপ। I/you/we/they-এর সাথে 'don't', he/she/it-এর সাথে 'doesn't' ব্যবহার করুন।",
          acceptedTypes: ["verb", "verb_phrase"],
          examples: ["like fish", "know him", "want to go"],
        },
      ],
      examples: [
        {
          en: "I don't like fish.",
          bn: "আমি মাছ পছন্দ করি না।",
          slotValues: { VERB: "like fish" },
          topicArea: "food",
        },
        {
          en: "She doesn't know him.",
          bn: "সে তাকে চেনে না।",
          slotValues: { VERB: "know him" },
          topicArea: "relationships",
        },
        {
          en: "I don't want to go.",
          bn: "আমি যেতে চাই না।",
          slotValues: { VERB: "want to go" },
          topicArea: "daily_life",
        },
        {
          en: "He doesn't speak Bangla.",
          bn: "সে বাংলা বলে না।",
          slotValues: { VERB: "speak Bangla" },
          topicArea: "education",
        },
        {
          en: "We don't have enough time.",
          bn: "আমাদের যথেষ্ট সময় নেই।",
          slotValues: { VERB: "have enough time" },
          topicArea: "daily_life",
        },
        {
          en: "It doesn't matter.",
          bn: "এটা কিছু যায় আসে না।",
          slotValues: { VERB: "matter" },
          topicArea: "daily_life",
        },
        {
          en: "I don't understand this question.",
          bn: "আমি এই প্রশ্নটি বুঝি না।",
          slotValues: { VERB: "understand this question" },
          topicArea: "education",
        },
        {
          en: "She doesn't eat meat.",
          bn: "সে মাংস খায় না।",
          slotValues: { VERB: "eat meat" },
          topicArea: "food",
        },
        {
          en: "They don't live here anymore.",
          bn: "তারা আর এখানে থাকে না।",
          slotValues: { VERB: "live here anymore" },
          topicArea: "daily_life",
        },
        {
          en: "He doesn't work on Fridays.",
          bn: "সে শুক্রবারে কাজ করে না।",
          slotValues: { VERB: "work on Fridays" },
          topicArea: "work",
        },
        {
          en: "I don't need any help.",
          bn: "আমার কোনো সাহায্য দরকার নেই।",
          slotValues: { VERB: "need any help" },
          topicArea: "daily_life",
        },
        {
          en: "She doesn't drive.",
          bn: "সে গাড়ি চালায় না।",
          slotValues: { VERB: "drive" },
          topicArea: "travel",
        },
        {
          en: "We don't agree with this plan.",
          bn: "আমরা এই পরিকল্পনার সাথে একমত নই।",
          slotValues: { VERB: "agree with this plan" },
          topicArea: "work",
        },
        {
          en: "He doesn't have a passport.",
          bn: "তার পাসপোর্ট নেই।",
          slotValues: { VERB: "have a passport" },
          topicArea: "travel",
        },
        {
          en: "I don't drink coffee at night.",
          bn: "আমি রাতে কফি পান করি না।",
          slotValues: { VERB: "drink coffee at night" },
          topicArea: "food",
        },
      ],
      formality: "casual",
      difficulty: "beginner",
      usageNote:
        "In Bangla, negation is formed by adding 'না' after the verb: 'আমি জানি না'. In English, you need 'don't/doesn't' BEFORE the verb: 'I don't know.' Wrong: 'I not know' or 'I no like'. With he/she/it, use 'doesn't' and base verb: 'She doesn't like' NOT 'She doesn't likes'.",
      usageNote_bn:
        "বাংলায় ক্রিয়ার পরে 'না' যোগ করে নেতিবাচক বাক্য তৈরি হয়: 'আমি জানি না'। ইংরেজিতে ক্রিয়ার আগে 'don't/doesn't' দরকার: 'I don't know.' ভুল: 'I not know' বা 'I no like'। he/she/it-এর সাথে 'doesn't' এবং মূল ক্রিয়া ব্যবহার করুন: 'She doesn't like' 'She doesn't likes' নয়।",
      banglaStructureMap:
        "আমি (Subject) + don't/doesn't + [VERB] (ক্রিয়া — মূল রূপ) + না",
    },
    {
      id: "X9.3",
      formula: "Did you [VERB]?",
      formula_bn: "তুমি কি [ক্রিয়া] করেছিলে?",
      patternName: "Past Questions with Did",
      patternName_bn: "Did দিয়ে অতীত প্রশ্ন",
      slots: [
        {
          name: "VERB",
          description:
            "Base form of the verb (NOT past tense). After 'did', always use the base form.",
          description_bn:
            "ক্রিয়ার মূল রূপ (অতীত রূপ নয়)। 'did'-এর পরে সবসময় মূল রূপ ব্যবহার করুন।",
          acceptedTypes: ["verb", "verb_phrase"],
          examples: ["go", "eat", "see the movie"],
        },
      ],
      examples: [
        {
          en: "Did you go to school yesterday?",
          bn: "তুমি কি গতকাল স্কুলে গিয়েছিলে?",
          slotValues: { VERB: "go to school yesterday" },
          topicArea: "education",
        },
        {
          en: "Did she eat lunch?",
          bn: "সে কি দুপুরের খাবার খেয়েছে?",
          slotValues: { VERB: "eat lunch" },
          topicArea: "food",
        },
        {
          en: "Did they finish the project?",
          bn: "তারা কি প্রজেক্ট শেষ করেছে?",
          slotValues: { VERB: "finish the project" },
          topicArea: "work",
        },
        {
          en: "Did you see the movie?",
          bn: "তুমি কি সিনেমাটি দেখেছো?",
          slotValues: { VERB: "see the movie" },
          topicArea: "daily_life",
        },
        {
          en: "Did he call you?",
          bn: "সে কি তোমাকে ফোন করেছে?",
          slotValues: { VERB: "call you" },
          topicArea: "daily_life",
        },
        {
          en: "Did you buy the tickets?",
          bn: "তুমি কি টিকিট কিনেছো?",
          slotValues: { VERB: "buy the tickets" },
          topicArea: "travel",
        },
        {
          en: "Did she pass the exam?",
          bn: "সে কি পরীক্ষায় পাশ করেছে?",
          slotValues: { VERB: "pass the exam" },
          topicArea: "education",
        },
        {
          en: "Did you take your medicine?",
          bn: "তুমি কি ওষুধ খেয়েছো?",
          slotValues: { VERB: "take your medicine" },
          topicArea: "health",
        },
        {
          en: "Did they arrive on time?",
          bn: "তারা কি সময়মতো পৌঁছেছে?",
          slotValues: { VERB: "arrive on time" },
          topicArea: "travel",
        },
        {
          en: "Did he get the job?",
          bn: "সে কি চাকরি পেয়েছে?",
          slotValues: { VERB: "get the job" },
          topicArea: "work",
        },
        {
          en: "Did you sleep well?",
          bn: "তুমি কি ভালো ঘুমিয়েছো?",
          slotValues: { VERB: "sleep well" },
          topicArea: "health",
        },
        {
          en: "Did she like the gift?",
          bn: "সে কি উপহারটি পছন্দ করেছে?",
          slotValues: { VERB: "like the gift" },
          topicArea: "relationships",
        },
        {
          en: "Did you meet the manager?",
          bn: "তুমি কি ম্যানেজারের সাথে দেখা করেছো?",
          slotValues: { VERB: "meet the manager" },
          topicArea: "work",
        },
        {
          en: "Did he read the book?",
          bn: "সে কি বইটি পড়েছে?",
          slotValues: { VERB: "read the book" },
          topicArea: "education",
        },
        {
          en: "Did you enjoy the trip?",
          bn: "তুমি কি ভ্রমণ উপভোগ করেছো?",
          slotValues: { VERB: "enjoy the trip" },
          topicArea: "travel",
        },
      ],
      formality: "casual",
      difficulty: "beginner",
      usageNote:
        "In Bangla, past questions use the same word order with 'কি': 'তুমি কি গিয়েছিলে?' In English, you must start with 'Did': 'Did you go?' Wrong: 'You went?' (as a genuine question). Important: After 'did', use the BASE form: 'Did you go?' NOT 'Did you went?'",
      usageNote_bn:
        "বাংলায় অতীত প্রশ্নে একই শব্দক্রম 'কি' দিয়ে করা হয়: 'তুমি কি গিয়েছিলে?' ইংরেজিতে 'Did' দিয়ে শুরু করতে হবে: 'Did you go?' ভুল: 'You went?' গুরুত্বপূর্ণ: 'did'-এর পরে মূল রূপ ব্যবহার করুন: 'Did you go?' 'Did you went?' নয়।",
      banglaStructureMap:
        "Did + তুমি/সে (Subject) + [VERB] (ক্রিয়া — মূল রূপ)?",
    },
    {
      id: "X9.4",
      formula: "Did you [BASE VERB]?",
      formula_bn: "তুমি কি [মূল ক্রিয়া] করেছিলে?",
      patternName: "No Double Marking (Did + Base Verb)",
      patternName_bn: "দ্বিগুণ চিহ্নিতকরণ নেই (Did + মূল ক্রিয়া)",
      slots: [
        {
          name: "BASE VERB",
          description:
            "ALWAYS use the base form after 'did'. Wrong: 'Did you went?' Right: 'Did you go?' The word 'did' already shows past tense.",
          description_bn:
            "'did'-এর পরে সবসময় মূল রূপ ব্যবহার করুন। ভুল: 'Did you went?' সঠিক: 'Did you go?' 'did' শব্দটি ইতিমধ্যে অতীত কাল দেখায়।",
          acceptedTypes: ["verb", "verb_phrase"],
          examples: ["go", "eat", "come", "see"],
        },
      ],
      examples: [
        {
          en: "Did you go to the market?",
          bn: "তুমি কি বাজারে গিয়েছিলে? (ভুল: Did you went?)",
          slotValues: { "BASE VERB": "go to the market" },
          topicArea: "shopping",
        },
        {
          en: "Did she eat breakfast?",
          bn: "সে কি নাস্তা খেয়েছে? (ভুল: Did she ate?)",
          slotValues: { "BASE VERB": "eat breakfast" },
          topicArea: "food",
        },
        {
          en: "Did they come to the party?",
          bn: "তারা কি পার্টিতে এসেছিল? (ভুল: Did they came?)",
          slotValues: { "BASE VERB": "come to the party" },
          topicArea: "daily_life",
        },
        {
          en: "Did you see the accident?",
          bn: "তুমি কি দুর্ঘটনা দেখেছো? (ভুল: Did you saw?)",
          slotValues: { "BASE VERB": "see the accident" },
          topicArea: "daily_life",
        },
        {
          en: "Did he buy a new phone?",
          bn: "সে কি নতুন ফোন কিনেছে? (ভুল: Did he bought?)",
          slotValues: { "BASE VERB": "buy a new phone" },
          topicArea: "shopping",
        },
        {
          en: "Did you write the email?",
          bn: "তুমি কি ইমেইল লিখেছো? (ভুল: Did you wrote?)",
          slotValues: { "BASE VERB": "write the email" },
          topicArea: "work",
        },
        {
          en: "Did she take the bus?",
          bn: "সে কি বাসে গিয়েছে? (ভুল: Did she took?)",
          slotValues: { "BASE VERB": "take the bus" },
          topicArea: "travel",
        },
        {
          en: "Did they give you the money?",
          bn: "তারা কি তোমাকে টাকা দিয়েছে? (ভুল: Did they gave?)",
          slotValues: { "BASE VERB": "give you the money" },
          topicArea: "daily_life",
        },
        {
          en: "Did he run in the morning?",
          bn: "সে কি সকালে দৌড়েছে? (ভুল: Did he ran?)",
          slotValues: { "BASE VERB": "run in the morning" },
          topicArea: "health",
        },
        {
          en: "Did you drink enough water?",
          bn: "তুমি কি যথেষ্ট পানি পান করেছো? (ভুল: Did you drank?)",
          slotValues: { "BASE VERB": "drink enough water" },
          topicArea: "health",
        },
        {
          en: "Did she speak to the teacher?",
          bn: "সে কি শিক্ষকের সাথে কথা বলেছে? (ভুল: Did she spoke?)",
          slotValues: { "BASE VERB": "speak to the teacher" },
          topicArea: "education",
        },
        {
          en: "Did you know about this?",
          bn: "তুমি কি এটা জানতে? (ভুল: Did you knew?)",
          slotValues: { "BASE VERB": "know about this" },
          topicArea: "daily_life",
        },
        {
          en: "Did they make any mistakes?",
          bn: "তারা কি কোনো ভুল করেছে? (ভুল: Did they made?)",
          slotValues: { "BASE VERB": "make any mistakes" },
          topicArea: "work",
        },
        {
          en: "Did he drive to work?",
          bn: "সে কি গাড়িতে কাজে গিয়েছে? (ভুল: Did he drove?)",
          slotValues: { "BASE VERB": "drive to work" },
          topicArea: "work",
        },
        {
          en: "Did you find your keys?",
          bn: "তুমি কি তোমার চাবি খুঁজে পেয়েছো? (ভুল: Did you found?)",
          slotValues: { "BASE VERB": "find your keys" },
          topicArea: "daily_life",
        },
      ],
      formality: "casual",
      difficulty: "beginner",
      usageNote:
        "After did, ALWAYS use the base form (go, eat, see), NEVER the past form (went, ate, saw). 'Did' already shows past tense. This is called 'double marking' and it's a very common mistake. Wrong: 'Did you went?', 'Did she ate?', 'Did they came?' Right: 'Did you go?', 'Did she eat?', 'Did they come?'",
      usageNote_bn:
        "did-এর পরে সবসময় মূল রূপ (go, eat, see) ব্যবহার করুন, কখনো অতীত রূপ (went, ate, saw) নয়। 'Did' ইতিমধ্যে অতীত কাল দেখায়। একে 'double marking' বলে এবং এটি একটি খুব সাধারণ ভুল। ভুল: 'Did you went?', 'Did she ate?', 'Did they came?' সঠিক: 'Did you go?', 'Did she eat?', 'Did they come?'",
      banglaStructureMap:
        "Did + Subject + [BASE VERB] (মূল রূপ — went/ate/saw নয়)?",
    },
    {
      id: "X9.5",
      formula: "Yes, I [DO/DID]",
      formula_bn: "হ্যাঁ, আমি [DO/DID]",
      patternName: "Short Answers with Do/Does/Did",
      patternName_bn: "Do/Does/Did দিয়ে সংক্ষিপ্ত উত্তর",
      slots: [
        {
          name: "DO/DID",
          description:
            "Use 'do/don't' for present, 'did/didn't' for past. Match the auxiliary from the question.",
          description_bn:
            "বর্তমানের জন্য 'do/don't', অতীতের জন্য 'did/didn't' ব্যবহার করুন। প্রশ্নের সহায়ক ক্রিয়ার সাথে মিলিয়ে নিন।",
          acceptedTypes: ["verb"],
          examples: ["do", "don't", "does", "doesn't", "did", "didn't"],
        },
      ],
      examples: [
        {
          en: "Do you like coffee? — Yes, I do.",
          bn: "তুমি কি কফি পছন্দ করো? — হ্যাঁ, করি।",
          slotValues: { "DO/DID": "do" },
          topicArea: "food",
        },
        {
          en: "Does she work here? — No, she doesn't.",
          bn: "সে কি এখানে কাজ করে? — না, করে না।",
          slotValues: { "DO/DID": "doesn't" },
          topicArea: "work",
        },
        {
          en: "Did you finish your homework? — Yes, I did.",
          bn: "তুমি কি বাড়ির কাজ শেষ করেছো? — হ্যাঁ, করেছি।",
          slotValues: { "DO/DID": "did" },
          topicArea: "education",
        },
        {
          en: "Do they play football? — Yes, they do.",
          bn: "তারা কি ফুটবল খেলে? — হ্যাঁ, খেলে।",
          slotValues: { "DO/DID": "do" },
          topicArea: "daily_life",
        },
        {
          en: "Did he call you? — No, he didn't.",
          bn: "সে কি তোমাকে ফোন করেছে? — না, করেনি।",
          slotValues: { "DO/DID": "didn't" },
          topicArea: "daily_life",
        },
        {
          en: "Does it cost a lot? — Yes, it does.",
          bn: "এটা কি অনেক দাম? — হ্যাঁ, অনেক।",
          slotValues: { "DO/DID": "does" },
          topicArea: "shopping",
        },
        {
          en: "Do you understand? — No, I don't.",
          bn: "তুমি কি বোঝো? — না, বুঝি না।",
          slotValues: { "DO/DID": "don't" },
          topicArea: "education",
        },
        {
          en: "Did she pass? — Yes, she did.",
          bn: "সে কি পাশ করেছে? — হ্যাঁ, করেছে।",
          slotValues: { "DO/DID": "did" },
          topicArea: "education",
        },
        {
          en: "Do you want more? — No, I don't.",
          bn: "তুমি কি আরও চাও? — না, চাই না।",
          slotValues: { "DO/DID": "don't" },
          topicArea: "food",
        },
        {
          en: "Does he speak English? — Yes, he does.",
          bn: "সে কি ইংরেজি বলে? — হ্যাঁ, বলে।",
          slotValues: { "DO/DID": "does" },
          topicArea: "education",
        },
        {
          en: "Did you enjoy the movie? — Yes, I did.",
          bn: "তুমি কি সিনেমা উপভোগ করেছো? — হ্যাঁ, করেছি।",
          slotValues: { "DO/DID": "did" },
          topicArea: "daily_life",
        },
        {
          en: "Do you need help? — No, I don't.",
          bn: "তোমার কি সাহায্য দরকার? — না, দরকার নেই।",
          slotValues: { "DO/DID": "don't" },
          topicArea: "daily_life",
        },
        {
          en: "Did they arrive? — No, they didn't.",
          bn: "তারা কি পৌঁছেছে? — না, পৌঁছায়নি।",
          slotValues: { "DO/DID": "didn't" },
          topicArea: "travel",
        },
        {
          en: "Does she like her job? — Yes, she does.",
          bn: "সে কি তার চাকরি পছন্দ করে? — হ্যাঁ, করে।",
          slotValues: { "DO/DID": "does" },
          topicArea: "work",
        },
        {
          en: "Did you take your medicine? — Yes, I did.",
          bn: "তুমি কি ওষুধ খেয়েছো? — হ্যাঁ, খেয়েছি।",
          slotValues: { "DO/DID": "did" },
          topicArea: "health",
        },
      ],
      formality: "casual",
      difficulty: "beginner",
      usageNote:
        "In Bangla, short answers repeat the verb: 'তুমি কি চা পছন্দ করো?' — 'হ্যাঁ, করি।' In English, short answers use do/does/did: 'Do you like tea?' — 'Yes, I do.' (NOT 'Yes, I like'). Wrong: 'Yes, I like' or 'No, I not like'. Right: 'Yes, I do' or 'No, I don't'.",
      usageNote_bn:
        "বাংলায় সংক্ষিপ্ত উত্তরে ক্রিয়া পুনরাবৃত্তি হয়: 'তুমি কি চা পছন্দ করো?' — 'হ্যাঁ, করি।' ইংরেজিতে সংক্ষিপ্ত উত্তরে do/does/did ব্যবহার হয়: 'Do you like tea?' — 'Yes, I do.' ('Yes, I like' নয়)। ভুল: 'Yes, I like' বা 'No, I not like'। সঠিক: 'Yes, I do' বা 'No, I don't'।",
      banglaStructureMap:
        "Yes/No + Subject + [DO/DID] (do/don't/does/doesn't/did/didn't)",
    },
  ],
};
