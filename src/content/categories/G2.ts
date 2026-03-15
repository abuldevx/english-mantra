import { PatternCategory } from "@/types/pattern";

export const categoryG2: PatternCategory = {
  id: "G2",
  slug: "wh-questions",
  name: "WH- Information Questions",
  name_bn: "WH- তথ্যমূলক প্রশ্ন",
  description:
    "Learn how to ask information questions using what, where, when, why, how, who, whose, which, and how many/much — covering the 9 Bangla question words কী, কোথায়, কখন, কেন, কীভাবে, কে, কার, কোনটা, and কত.",
  description_bn:
    "কী, কোথায়, কখন, কেন, কীভাবে, কে, কার, কোনটা এবং কত — এই ৯টি বাংলা প্রশ্নবোধক শব্দ দিয়ে ইংরেজিতে তথ্যমূলক প্রশ্ন করতে শিখুন।",
  icon: "🔍",
  group: "G",
  groupName: "All Question Types",
  groupName_bn: "সব ধরনের প্রশ্ন",
  difficulty: "beginner",
  patterns: [
    // ==================== G2.1 — কী (What) ====================
    {
      id: "G2.1",
      formula: "What is [THING]?",
      formula_bn: "[জিনিস] কী?",
      patternName: "Asking What (কী)",
      patternName_bn: "কী জিজ্ঞেস করা",
      concept_bn: "কী",
      slots: [
        {
          name: "THING",
          description: "A noun or noun phrase you want to know about",
          description_bn:
            "যে বিষয় বা জিনিস সম্পর্কে তুমি জানতে চাও",
          acceptedTypes: ["noun", "noun_phrase"],
          examples: ["your name", "this", "the price", "the time", "your plan"],
        },
      ],
      examples: [
        {
          en: "What is your name?",
          bn: "তোমার নাম কী?",
          pronunciation_bn: "হোয়াট ইজ ইয়োর নেইম?",
          slotValues: { THING: "your name" },
          topicArea: "relationships",
          stage: 1,
          miniStory: {
            situation_bn: "তুমি নতুন স্কুলে গেছো। পাশের বেঞ্চে একটা ছেলে বসে আছে। তুমি তার সাথে কথা বলতে চাও।",
            icon: "🏫",
          },
        },
        {
          en: "What is the price of this shirt?",
          bn: "এই শার্টের দাম কী?",
          pronunciation_bn: "হোয়াট ইজ দা প্রাইস অফ দিস শার্ট?",
          slotValues: { THING: "the price of this shirt" },
          topicArea: "shopping",
          stage: 1,
          miniStory: {
            situation_bn: "তুমি নিউ মার্কেটে শার্ট কিনতে গেছো। একটা সুন্দর শার্ট পছন্দ হলো, কিন্তু দাম লেখা নেই।",
            icon: "🛍️",
          },
        },
        {
          en: "What is your job?",
          bn: "তোমার চাকরি কী?",
          pronunciation_bn: "হোয়াট ইজ ইয়োর জব?",
          slotValues: { THING: "your job" },
          topicArea: "work",
          stage: 2,
          miniStory: {
            situation_bn: "তুমি একটা বিয়ের অনুষ্ঠানে গেছো। পাশের টেবিলে একজন লোক বসে আছে। তুমি আলাপ শুরু করতে চাও।",
            icon: "💼",
          },
        },
        {
          en: "What is the homework for today?",
          bn: "আজকের হোমওয়ার্ক কী?",
          pronunciation_bn: "হোয়াট ইজ দা হোমওয়ার্ক ফর টুডে?",
          slotValues: { THING: "the homework for today" },
          topicArea: "education",
          stage: 2,
          miniStory: {
            situation_bn: "তুমি স্কুল থেকে বাড়ি ফিরেছো। আজকে স্কুলে যাওনি কারণ অসুস্থ ছিলে। বন্ধুকে ফোন করে জানতে চাও আজ কী হোমওয়ার্ক দিয়েছে।",
            icon: "📝",
          },
        },
        {
          en: "What is your favorite food?",
          bn: "তোমার প্রিয় খাবার কী?",
          pronunciation_bn: "হোয়াট ইজ ইয়োর ফেভারিট ফুড?",
          slotValues: { THING: "your favorite food" },
          topicArea: "food",
          stage: 3,
          miniStory: {
            situation_bn: "ঈদের দিনে পরিবারের সবাই একসাথে বসে খাচ্ছো। দূর থেকে আসা চাচাতো ভাইকে জিজ্ঞেস করছো তার সবচেয়ে প্রিয় খাবার কী।",
            icon: "🍽️",
          },
        },
      ],
      formality: "casual",
      difficulty: "beginner",
      usageNote:
        "Use 'What is...?' to ask about identity, definition, or information about something.",
      usageNote_bn:
        "কোনো কিছুর পরিচয়, অর্থ, বা তথ্য জানতে 'What is...?' ব্যবহার করো।",
      banglaStructureMap: "বাংলা: [জিনিস] কী? → English: What is [THING]?",
      conversionSteps: {
        banglaThought: "তুমি বাংলায় বলো: 'তোমার নাম কী?'",
        steps: [
          {
            step_bn: "প্রশ্নবোধক শব্দ 'কী' = 'What' দিয়ে শুরু করো",
            result: "What",
          },
          {
            step_bn: "'is' যোগ করো (কারণ বর্তমান কাল, একটা জিনিস)",
            result: "What is",
          },
          {
            step_bn: "বাকি অংশ যোগ করো: 'তোমার নাম' = 'your name'",
            result: "What is your name?",
          },
        ],
        finalResult: "What is your name?",
        finalResult_bn: "তোমার নাম কী?",
      },
      commonMistakes: [
        {
          wrong: "What your name?",
          correct: "What is your name?",
          explanation_bn:
            "'is' বাদ দেওয়া যাবে না — ইংরেজিতে প্রশ্নে সবসময় is/are/do/does লাগে।",
        },
        {
          wrong: "Your name what is?",
          correct: "What is your name?",
          explanation_bn:
            "বাংলায় 'কী' শেষে বসে, কিন্তু ইংরেজিতে 'What' সবসময় প্রথমে বসে।",
        },
        {
          wrong: "What is means this word?",
          correct: "What does this word mean?",
          explanation_bn:
            "ক্রিয়া থাকলে 'is' না, 'does' ব্যবহার করো — 'What does this word mean?'",
        },
      ],
      simpleRules: [
        {
          rule_bn: "একটা জিনিস → 'is' ব্যবহার করো",
          example: "What is your name?",
        },
        {
          rule_bn: "অনেক জিনিস → 'are' ব্যবহার করো",
          example: "What are your hobbies?",
        },
        {
          rule_bn: "অতীতে → 'was' বা 'were' ব্যবহার করো",
          example: "What was the problem?",
        },
        {
          rule_bn: "ভবিষ্যতে → 'will' ব্যবহার করো",
          example: "What will you do?",
        },
      ],
      usageSituations: [
        {
          situation_bn: "তথ্য জানতে",
          situation_en: "When asking for information",
          exampleSentence: "What is your phone number?",
          exampleSentence_bn: "তোমার ফোন নম্বর কী?",
        },
        {
          situation_bn: "দাম জানতে",
          situation_en: "When asking the price",
          exampleSentence: "What is the price?",
          exampleSentence_bn: "দাম কত?",
        },
        {
          situation_bn: "কোনো কিছুর অর্থ জানতে",
          situation_en: "When asking the meaning of something",
          exampleSentence: "What is the meaning of this word?",
          exampleSentence_bn: "এই শব্দের অর্থ কী?",
        },
        {
          situation_bn: "কারো পরিচয় জানতে",
          situation_en: "When asking about someone's identity",
          exampleSentence: "What is your father's name?",
          exampleSentence_bn: "তোমার বাবার নাম কী?",
        },
      ],
      sentenceBuilding: [
        {
          previousPatternId: "A1.1",
          previousFormula: "I want [THING]",
          previousFormula_bn: "আমি [জিনিস] চাই",
          combined: "What is the price? I want to buy this.",
          combined_bn: "দাম কত? আমি এটা কিনতে চাই।",
        },
        {
          previousPatternId: "H1.1",
          previousFormula: "Can you [ACTION]?",
          previousFormula_bn: "তুমি কি [কাজ] করতে পারো?",
          combined: "What is the homework? Can you help me?",
          combined_bn: "হোমওয়ার্ক কী? তুমি কি আমাকে সাহায্য করতে পারো?",
        },
        {
          previousPatternId: "T1.1",
          previousFormula: "I think [STATEMENT]",
          previousFormula_bn: "আমি মনে করি [কথা]",
          combined: "What is your plan? I think we should go early.",
          combined_bn: "তোমার পরিকল্পনা কী? আমি মনে করি আমাদের তাড়াতাড়ি যাওয়া উচিত।",
        },
      ],
      memoryTrick_bn:
        "মনে রাখো: বাংলায় 'কী' শেষে বসে, কিন্তু ইংরেজিতে 'What' সবসময় শুরুতে বসে। 'What + is/are + বাকি অংশ?' — এই ক্রম মনে রাখো।",
      chunks: [
        { en: "What is", bn: "কী", pronunciation_bn: "হোয়াট ইজ" },
        { en: "What do you", bn: "তুমি কী", pronunciation_bn: "হোয়াট ডু ইউ" },
        { en: "What are you doing", bn: "তুমি কী করছো", pronunciation_bn: "হোয়াট আর ইউ ডুইং" },
        { en: "Could you tell me what", bn: "আপনি কি বলবেন কী", pronunciation_bn: "কুড ইউ টেল মি হোয়াট" },
      ],
      bridgeRuleIds: ["BR2", "BR3"],
      formulaPronunciation_bn: "হোয়াট ইজ [জিনিস]?",
      wordMap: {
        bn_sentence: "তোমার নাম কী?",
        en_sentence: "What is your name?",
        mappings: [
          { bn_word: "কী", en_word: "What", type: "moved", bridgeRuleId: "BR2" },
          { bn_word: "(নেই)", en_word: "is", type: "added", bridgeRuleId: "BR3" },
          { bn_word: "তোমার", en_word: "your", type: "direct" },
          { bn_word: "নাম", en_word: "name", type: "direct" },
        ],
      },
      dialogueChains: [
        {
          id: "dc-g2.1-1",
          title_bn: "নতুন কাউকে চেনা",
          title_en: "Meeting someone new",
          situation_bn: "তুমি নতুন কাউকে চিনছো, তার সম্পর্কে জানতে চাও",
          icon: "🤝",
          turns: [
            { speaker_bn: "তুমি", en: "What is your name?", bn: "তোমার নাম কী?", pronunciation_bn: "হোয়াট ইজ ইয়োর নেইম?", patternId: "G2.1" },
            { speaker_bn: "অন্যজন", en: "My name is Karim.", bn: "আমার নাম করিম।", pronunciation_bn: "মাই নেইম ইজ করিম।" },
            { speaker_bn: "তুমি", en: "What is your job?", bn: "তোমার চাকরি কী?", pronunciation_bn: "হোয়াট ইজ ইয়োর জব?", patternId: "G2.1" },
            { speaker_bn: "অন্যজন", en: "I am a teacher.", bn: "আমি একজন শিক্ষক।", pronunciation_bn: "আই অ্যাম আ টিচার।" },
            { speaker_bn: "তুমি", en: "What is your phone number?", bn: "তোমার ফোন নম্বর কী?", pronunciation_bn: "হোয়াট ইজ ইয়োর ফোন নাম্বার?", patternId: "G2.1" },
          ],
          patternsUsed: ["G2.1"],
        },
        {
          id: "dc-cross-2",
          title_bn: "নতুন চাকরি — ইন্টারভিউ",
          title_en: "Job Interview",
          situation_bn: "তুমি একটা গার্মেন্টস ফ্যাক্টরিতে চাকরির ইন্টারভিউ দিতে গেছো। ম্যানেজার তোমাকে প্রশ্ন করছে।",
          icon: "💼",
          turns: [
            { speaker_bn: "ম্যানেজার", en: "What is your name?", bn: "তোমার নাম কী?", pronunciation_bn: "হোয়াট ইজ ইয়োর নেইম?", patternId: "G2.1" },
            { speaker_bn: "তুমি", en: "My name is Rahim.", bn: "আমার নাম রহিম।", pronunciation_bn: "মাই নেইম ইজ রহিম।" },
            { speaker_bn: "ম্যানেজার", en: "What is your experience?", bn: "তোমার অভিজ্ঞতা কী?", pronunciation_bn: "হোয়াট ইজ ইয়োর এক্সপেরিয়েন্স?", patternId: "G2.1" },
            { speaker_bn: "তুমি", en: "I worked in a factory for 2 years.", bn: "আমি ২ বছর ফ্যাক্টরিতে কাজ করেছি।", pronunciation_bn: "আই ওয়ার্কড ইন আ ফ্যাক্টরি ফর টু ইয়ার্স।" },
            { speaker_bn: "ম্যানেজার", en: "Why do you want this job?", bn: "তুমি কেন এই চাকরি চাও?", pronunciation_bn: "হোয়াই ডু ইউ ওয়ান্ট দিস জব?", patternId: "G2.4" },
            { speaker_bn: "তুমি", en: "Because I need money for my family.", bn: "কারণ আমার পরিবারের জন্য টাকা দরকার।", pronunciation_bn: "বিকজ আই নিড মানি ফর মাই ফ্যামিলি।" },
            { speaker_bn: "ম্যানেজার", en: "How do you come to work?", bn: "তুমি কীভাবে কাজে আসো?", pronunciation_bn: "হাও ডু ইউ কাম টু ওয়ার্ক?", patternId: "G2.5" },
            { speaker_bn: "তুমি", en: "By bus.", bn: "বাসে।", pronunciation_bn: "বাই বাস।" },
            { speaker_bn: "ম্যানেজার", en: "When can you start?", bn: "কবে শুরু করতে পারবে?", pronunciation_bn: "হোয়েন ক্যান ইউ স্টার্ট?", patternId: "G2.3" },
            { speaker_bn: "তুমি", en: "I can start tomorrow.", bn: "আমি আগামীকাল শুরু করতে পারি।", pronunciation_bn: "আই ক্যান স্টার্ট টুমরো।" },
          ],
          patternsUsed: ["G2.1", "G2.4", "G2.5", "G2.3"],
        },
      ],
      pluralNote: "What are [THINGS]?",
      pluralNote_bn: "[জিনিসগুলো] কী কী?",
      variations: [
        {
          variant: "past",
          label: "Past (অতীত)",
          label_bn: "অতীত",
          formula: "What was [THING]?",
          formula_bn: "[জিনিস] কী ছিল?",
          examples: [
            {
              en: "What was the interest rate?",
              bn: "সুদের হার কত ছিল?",
              pronunciation_bn: "হোয়াট ওয়াজ দা ইন্টারেস্ট রেট?",
              slotValues: { THING: "the interest rate" },
              topicArea: "finance",
            },
            {
              en: "What was the total bill?",
              bn: "মোট বিল কত ছিল?",
              pronunciation_bn: "হোয়াট ওয়াজ দা টোটাল বিল?",
              slotValues: { THING: "the total bill" },
              topicArea: "finance",
            },
            {
              en: "What was the question?",
              bn: "প্রশ্নটা কী ছিল?",
              pronunciation_bn: "হোয়াট ওয়াজ দা কোশ্চেন?",
              slotValues: { THING: "the question" },
              topicArea: "education",
            },
          ],
        },
        {
          variant: "future",
          label: "Future (ভবিষ্যৎ)",
          label_bn: "ভবিষ্যৎ",
          formula: "What will you [ACTION]?",
          formula_bn: "তুমি কী [কাজ] করবে?",
          examples: [
            {
              en: "What will you eat?",
              bn: "তুমি কী খাবে?",
              pronunciation_bn: "হোয়াট উইল ইউ ইট?",
              slotValues: { ACTION: "eat" },
              topicArea: "food",
            },
            {
              en: "What will you do tomorrow?",
              bn: "তুমি আগামীকাল কী করবে?",
              pronunciation_bn: "হোয়াট উইল ইউ ডু টুমরো?",
              slotValues: { ACTION: "do tomorrow" },
              topicArea: "daily_life",
            },
            {
              en: "What will you study?",
              bn: "তুমি কী পড়বে?",
              pronunciation_bn: "হোয়াট উইল ইউ স্টাডি?",
              slotValues: { ACTION: "study" },
              topicArea: "education",
            },
          ],
        },
        {
          variant: "did",
          label: "Past Action (অতীতে কাজ)",
          label_bn: "অতীতে কাজ",
          formula: "What did you [ACTION]?",
          formula_bn: "তুমি কী [কাজ] করেছিলে?",
          examples: [
            {
              en: "What did you eat?",
              bn: "তুমি কী খেয়েছিলে?",
              pronunciation_bn: "হোয়াট ডিড ইউ ইট?",
              slotValues: { ACTION: "eat" },
              topicArea: "food",
            },
            {
              en: "What did you buy?",
              bn: "তুমি কী কিনেছিলে?",
              pronunciation_bn: "হোয়াট ডিড ইউ বাই?",
              slotValues: { ACTION: "buy" },
              topicArea: "shopping",
            },
            {
              en: "What did you say?",
              bn: "তুমি কী বলেছিলে?",
              pronunciation_bn: "হোয়াট ডিড ইউ সে?",
              slotValues: { ACTION: "say" },
              topicArea: "relationships",
            },
          ],
        },
        {
          variant: "present_continuous",
          label: "Present Continuous (চলমান)",
          label_bn: "চলমান",
          formula: "What are you [VERB]-ing?",
          formula_bn: "তুমি কী [কাজ] করছো?",
          examples: [
            {
              en: "What are you doing?",
              bn: "তুমি কী করছো?",
              pronunciation_bn: "হোয়াট আর ইউ ডুইং?",
              slotValues: { VERB: "do" },
              topicArea: "daily_life",
            },
            {
              en: "What are you eating?",
              bn: "তুমি কী খাচ্ছো?",
              pronunciation_bn: "হোয়াট আর ইউ ইটিং?",
              slotValues: { VERB: "eat" },
              topicArea: "food",
            },
            {
              en: "What are you watching?",
              bn: "তুমি কী দেখছো?",
              pronunciation_bn: "হোয়াট আর ইউ ওয়াচিং?",
              slotValues: { VERB: "watch" },
              topicArea: "daily_life",
            },
          ],
        },
        {
          variant: "modal",
          label: "Modal (সম্ভাবনা)",
          label_bn: "সম্ভাবনা",
          formula: "What can I [VERB]?",
          formula_bn: "আমি কী [কাজ] করতে পারি?",
          examples: [
            {
              en: "What can I do?",
              bn: "আমি কী করতে পারি?",
              pronunciation_bn: "হোয়াট ক্যান আই ডু?",
              slotValues: { VERB: "do" },
              topicArea: "daily_life",
            },
            {
              en: "What can I eat here?",
              bn: "আমি এখানে কী খেতে পারি?",
              pronunciation_bn: "হোয়াট ক্যান আই ইট হিয়ার?",
              slotValues: { VERB: "eat here" },
              topicArea: "food",
            },
            {
              en: "What should I wear?",
              bn: "আমি কী পরবো?",
              pronunciation_bn: "হোয়াট শুড আই ওয়্যার?",
              slotValues: { VERB: "wear" },
              topicArea: "shopping",
            },
          ],
        },
        {
          variant: "polite",
          label: "Polite (বিনয়ী)",
          label_bn: "বিনয়ী",
          formula: "Could you tell me what [THING] is?",
          formula_bn: "আপনি কি বলবেন [জিনিস] কী?",
          examples: [
            {
              en: "Could you tell me what this is?",
              bn: "আপনি কি বলবেন এটা কী?",
              pronunciation_bn: "কুড ইউ টেল মি হোয়াট দিস ইজ?",
              slotValues: { THING: "this" },
              topicArea: "daily_life",
            },
            {
              en: "Could you tell me what time it is?",
              bn: "আপনি কি বলবেন কয়টা বাজে?",
              pronunciation_bn: "কুড ইউ টেল মি হোয়াট টাইম ইট ইজ?",
              slotValues: { THING: "time it" },
              topicArea: "daily_life",
            },
            {
              en: "Could you tell me what the price is?",
              bn: "আপনি কি বলবেন দাম কত?",
              pronunciation_bn: "কুড ইউ টেল মি হোয়াট দা প্রাইস ইজ?",
              slotValues: { THING: "the price" },
              topicArea: "shopping",
            },
          ],
        },
      ],
      answerTemplates: [
        {
          situation_bn: "যখন কেউ তোমার নাম জিজ্ঞেস করে",
          question: "What is your name?",
          question_bn: "তোমার নাম কী?",
          answerFormula: "My name is [NAME].",
          answerFormula_bn: "আমার নাম [নাম]।",
          pronunciation_bn: "মাই নেইম ইজ [নাম]।",
          examples: [
            { answer: "My name is Rahim.", answer_bn: "আমার নাম রহিম।", pronunciation_bn: "মাই নেইম ইজ রহিম।" },
            { answer: "My name is Fatema.", answer_bn: "আমার নাম ফাতেমা।", pronunciation_bn: "মাই নেইম ইজ ফাতেমা।" },
            { answer: "My name is Karim.", answer_bn: "আমার নাম করিম।", pronunciation_bn: "মাই নেইম ইজ করিম।" },
          ],
          notes_bn: "নিজের নাম বলার সময় সবসময় 'My name is' দিয়ে শুরু করো।",
        },
        {
          situation_bn: "যখন কেউ তোমার চাকরি জিজ্ঞেস করে",
          question: "What is your job?",
          question_bn: "তোমার চাকরি কী?",
          answerFormula: "I am a [JOB].",
          answerFormula_bn: "আমি একজন [পেশা]।",
          pronunciation_bn: "আই অ্যাম আ [পেশা]।",
          examples: [
            { answer: "I am a teacher.", answer_bn: "আমি একজন শিক্ষক।", pronunciation_bn: "আই অ্যাম আ টিচার।" },
            { answer: "I am a driver.", answer_bn: "আমি একজন ড্রাইভার।", pronunciation_bn: "আই অ্যাম আ ড্রাইভার।" },
            { answer: "I am a farmer.", answer_bn: "আমি একজন কৃষক।", pronunciation_bn: "আই অ্যাম আ ফার্মার।" },
          ],
          notes_bn: "পেশা বলার সময় 'I am a' ব্যবহার করো। স্বরবর্ণ দিয়ে শুরু হলে 'I am an' — যেমন 'I am an engineer'।",
        },
        {
          situation_bn: "যখন কেউ দাম জিজ্ঞেস করে",
          question: "What is the price?",
          question_bn: "দাম কত?",
          answerFormula: "It's [AMOUNT] taka.",
          answerFormula_bn: "এটা [পরিমাণ] টাকা।",
          pronunciation_bn: "ইটস [পরিমাণ] টাকা।",
          examples: [
            { answer: "It's 500 taka.", answer_bn: "এটা ৫০০ টাকা।", pronunciation_bn: "ইটস ফাইভ হান্ড্রেড টাকা।" },
            { answer: "It's 200 taka.", answer_bn: "এটা ২০০ টাকা।", pronunciation_bn: "ইটস টু হান্ড্রেড টাকা।" },
            { answer: "It's 50 taka per kg.", answer_bn: "এটা কেজি ৫০ টাকা।", pronunciation_bn: "ইটস ফিফটি টাকা পার কেজি।" },
          ],
          notes_bn: "দাম বলার সময় 'It's' দিয়ে শুরু করো।",
        },
        {
          situation_bn: "যখন কেউ সময় জিজ্ঞেস করে",
          question: "What is the time?",
          question_bn: "কয়টা বাজে?",
          answerFormula: "It's [TIME].",
          answerFormula_bn: "এখন [সময়]।",
          pronunciation_bn: "ইটস [সময়]।",
          examples: [
            { answer: "It's 3 o'clock.", answer_bn: "এখন ৩টা।", pronunciation_bn: "ইটস থ্রি অক্লক।" },
            { answer: "It's half past ten.", answer_bn: "এখন সাড়ে দশটা।", pronunciation_bn: "ইটস হাফ পাস্ট টেন।" },
            { answer: "It's 7:30 AM.", answer_bn: "এখন সকাল সাড়ে সাতটা।", pronunciation_bn: "ইটস সেভেন থার্টি এ.এম.।" },
          ],
          notes_bn: "সময় বলার সময় 'It's' দিয়ে শুরু করো।",
        },
      ],
    },

    // ==================== G2.2 — কোথায় (Where) ====================
    {
      id: "G2.2",
      formula: "Where is [THING]?",
      formula_bn: "[জিনিস] কোথায়?",
      patternName: "Asking Where (কোথায়)",
      patternName_bn: "কোথায় জিজ্ঞেস করা",
      concept_bn: "কোথায়",
      slots: [
        {
          name: "THING",
          description:
            "A noun or noun phrase referring to a place, object, or person",
          description_bn:
            "কোনো জায়গা, জিনিস, বা ব্যক্তি যার অবস্থান জানতে চাও",
          acceptedTypes: ["noun", "noun_phrase", "place", "person"],
          examples: [
            "the bathroom",
            "the bus stop",
            "my phone",
            "the hospital",
            "your brother",
          ],
        },
      ],
      examples: [
        {
          en: "Where is the bathroom?",
          bn: "বাথরুম কোথায়?",
          pronunciation_bn: "হোয়্যার ইজ দা বাথরুম?",
          slotValues: { THING: "the bathroom" },
          topicArea: "travel",
          stage: 1,
          miniStory: {
            situation_bn: "তুমি ঢাকা থেকে চট্টগ্রামে বাসে যাচ্ছো। মাঝপথে বাস থামলো একটা রেস্টুরেন্টে। তোমার খুব তাড়া আছে।",
            icon: "🚻",
          },
        },
        {
          en: "Where is the hospital?",
          bn: "হাসপাতাল কোথায়?",
          pronunciation_bn: "হোয়্যার ইজ দা হসপিটাল?",
          slotValues: { THING: "the hospital" },
          topicArea: "health",
          stage: 1,
          miniStory: {
            situation_bn: "তোমার বাচ্চার জ্বর হয়েছে। রাত ১২টা। তুমি রাস্তায় দাঁড়িয়ে একজন লোককে জিজ্ঞেস করছো।",
            icon: "🏥",
          },
        },
        {
          en: "Where is my phone?",
          bn: "আমার ফোন কোথায়?",
          pronunciation_bn: "হোয়্যার ইজ মাই ফোন?",
          slotValues: { THING: "my phone" },
          topicArea: "daily_life",
          stage: 2,
          miniStory: {
            situation_bn: "সকালে ঘুম থেকে উঠে দেখো ফোন বিছানায় নেই। অফিসে দেরি হচ্ছে। মা'কে জিজ্ঞেস করছো।",
            icon: "📱",
          },
        },
        {
          en: "Where is the nearest shop?",
          bn: "সবচেয়ে কাছের দোকান কোথায়?",
          pronunciation_bn: "হোয়্যার ইজ দা নিয়ারেস্ট শপ?",
          slotValues: { THING: "the nearest shop" },
          topicArea: "shopping",
          stage: 2,
          miniStory: {
            situation_bn: "গ্রামে বেড়াতে এসেছো। সন্ধ্যায় মোবাইলে ফ্লেক্সিলোড করতে হবে। কাছের কোনো দোকান খুঁজছো।",
            icon: "🌾",
          },
        },
        {
          en: "Where is your office?",
          bn: "তোমার অফিস কোথায়?",
          pronunciation_bn: "হোয়্যার ইজ ইয়োর অফিস?",
          slotValues: { THING: "your office" },
          topicArea: "work",
          stage: 3,
          miniStory: {
            situation_bn: "চায়ের দোকানে নতুন একজনের সাথে আলাপ হলো। সে বলছে সে চাকরি করে। তুমি জানতে চাও তার অফিস কোথায়।",
            icon: "💼",
          },
        },
      ],
      formality: "casual",
      difficulty: "beginner",
      usageNote:
        "Use 'Where is...?' to ask about the location of a person, place, or thing.",
      usageNote_bn:
        "কোনো ব্যক্তি, জায়গা বা জিনিসের অবস্থান জানতে 'Where is...?' ব্যবহার করো।",
      banglaStructureMap: "বাংলা: [জিনিস] কোথায়? → English: Where is [THING]?",
      conversionSteps: {
        banglaThought: "তুমি বাংলায় বলো: 'বাথরুম কোথায়?'",
        steps: [
          {
            step_bn: "প্রশ্নবোধক শব্দ 'কোথায়' = 'Where' দিয়ে শুরু করো",
            result: "Where",
          },
          {
            step_bn: "'is' যোগ করো (একটা জিনিস, বর্তমান কাল)",
            result: "Where is",
          },
          {
            step_bn: "বাকি অংশ যোগ করো: 'বাথরুম' = 'the bathroom'",
            result: "Where is the bathroom?",
          },
        ],
        finalResult: "Where is the bathroom?",
        finalResult_bn: "বাথরুম কোথায়?",
      },
      commonMistakes: [
        {
          wrong: "Where the bathroom?",
          correct: "Where is the bathroom?",
          explanation_bn:
            "'is' বাদ দেওয়া যাবে না — ইংরেজিতে 'Where' এর পরে সবসময় is/are লাগে।",
        },
        {
          wrong: "The bathroom where is?",
          correct: "Where is the bathroom?",
          explanation_bn:
            "বাংলায় 'কোথায়' শেষে বসে, কিন্তু ইংরেজিতে 'Where' সবসময় প্রথমে বসে।",
        },
        {
          wrong: "Where is the keys?",
          correct: "Where are the keys?",
          explanation_bn:
            "অনেকগুলো জিনিস (keys) → 'are' ব্যবহার করো, 'is' না।",
        },
      ],
      simpleRules: [
        {
          rule_bn: "একটা জিনিস → 'is' ব্যবহার করো",
          example: "Where is the hospital?",
        },
        {
          rule_bn: "অনেক জিনিস → 'are' ব্যবহার করো",
          example: "Where are my shoes?",
        },
        {
          rule_bn: "অতীতে → 'was' বা 'were' ব্যবহার করো",
          example: "Where was your bag?",
        },
        {
          rule_bn: "ভবিষ্যতে → 'will' ব্যবহার করো",
          example: "Where will you go?",
        },
      ],
      usageSituations: [
        {
          situation_bn: "রাস্তায় হারিয়ে গেলে",
          situation_en: "When lost on the road",
          exampleSentence: "Where is the bus stop?",
          exampleSentence_bn: "বাস স্টপ কোথায়?",
        },
        {
          situation_bn: "হাসপাতাল খুঁজতে",
          situation_en: "When looking for a hospital",
          exampleSentence: "Where is the nearest hospital?",
          exampleSentence_bn: "সবচেয়ে কাছের হাসপাতাল কোথায়?",
        },
        {
          situation_bn: "কারো অবস্থান জানতে",
          situation_en: "When asking someone's location",
          exampleSentence: "Where is your brother?",
          exampleSentence_bn: "তোমার ভাই কোথায়?",
        },
        {
          situation_bn: "হারানো জিনিস খুঁজতে",
          situation_en: "When looking for a lost item",
          exampleSentence: "Where is my wallet?",
          exampleSentence_bn: "আমার মানিব্যাগ কোথায়?",
        },
      ],
      sentenceBuilding: [
        {
          previousPatternId: "A1.2",
          previousFormula: "I need [THING]",
          previousFormula_bn: "আমার [জিনিস] দরকার",
          combined: "Where is the hospital? I need a doctor.",
          combined_bn: "হাসপাতাল কোথায়? আমার একজন ডাক্তার দরকার।",
        },
        {
          previousPatternId: "A1.1",
          previousFormula: "I want [THING]",
          previousFormula_bn: "আমি [জিনিস] চাই",
          combined: "Where is the nearest shop? I want to buy some medicine.",
          combined_bn: "সবচেয়ে কাছের দোকান কোথায়? আমি কিছু ওষুধ কিনতে চাই।",
        },
        {
          previousPatternId: "D2.1",
          previousFormula: "I have to [ACTION]",
          previousFormula_bn: "আমাকে [কাজ] করতে হবে",
          combined: "Where is the bus stop? I have to go to Dhaka.",
          combined_bn: "বাস স্টপ কোথায়? আমাকে ঢাকায় যেতে হবে।",
        },
      ],
      memoryTrick_bn:
        "মনে রাখো: 'Where' = 'কোথায়'। বাংলায় 'কোথায়' শেষে বসে, ইংরেজিতে 'Where' শুরুতে বসে। 'Where + is/are + জিনিস?' — এটুকু মনে রাখলেই হবে।",
      chunks: [
        { en: "Where is", bn: "কোথায়", pronunciation_bn: "হোয়্যার ইজ" },
        { en: "Where can I", bn: "আমি কোথায়", pronunciation_bn: "হোয়্যার ক্যান আই" },
        { en: "Where are you going", bn: "তুমি কোথায় যাচ্ছো", pronunciation_bn: "হোয়্যার আর ইউ গোইং" },
        { en: "Could you tell me where", bn: "আপনি কি বলবেন কোথায়", pronunciation_bn: "কুড ইউ টেল মি হোয়্যার" },
      ],
      bridgeRuleIds: ["BR2", "BR3", "BR4"],
      formulaPronunciation_bn: "হোয়্যার ইজ [জিনিস]?",
      wordMap: {
        bn_sentence: "বাথরুম কোথায়?",
        en_sentence: "Where is the bathroom?",
        mappings: [
          { bn_word: "কোথায়", en_word: "Where", type: "moved", bridgeRuleId: "BR2" },
          { bn_word: "(নেই)", en_word: "is", type: "added", bridgeRuleId: "BR3" },
          { bn_word: "(নেই)", en_word: "the", type: "added", bridgeRuleId: "BR4" },
          { bn_word: "বাথরুম", en_word: "bathroom", type: "direct" },
        ],
      },
      dialogueChains: [
        {
          id: "dc-g2.2-1",
          title_bn: "হাসপাতাল খুঁজতে",
          title_en: "Finding a hospital",
          situation_bn: "তুমি অসুস্থ, হাসপাতাল খুঁজছো",
          icon: "🏥",
          turns: [
            { speaker_bn: "তুমি", en: "Where is the hospital?", bn: "হাসপাতাল কোথায়?", pronunciation_bn: "হোয়্যার ইজ দা হসপিটাল?", patternId: "G2.2" },
            { speaker_bn: "লোক", en: "Go straight, then turn left.", bn: "সোজা যান, তারপর বাঁয়ে ঘুরুন।", pronunciation_bn: "গো স্ট্রেইট, দেন টার্ন লেফট।" },
            { speaker_bn: "তুমি", en: "Where is the pharmacy?", bn: "ফার্মেসি কোথায়?", pronunciation_bn: "হোয়্যার ইজ দা ফার্মেসি?", patternId: "G2.2" },
            { speaker_bn: "লোক", en: "It is next to the hospital.", bn: "এটা হাসপাতালের পাশে।", pronunciation_bn: "ইট ইজ নেক্সট টু দা হসপিটাল।" },
            { speaker_bn: "তুমি", en: "Thank you!", bn: "ধন্যবাদ!", pronunciation_bn: "থ্যাংক ইউ!" },
          ],
          patternsUsed: ["G2.2"],
        },
        {
          id: "dc-cross-1",
          title_bn: "হারিয়ে গেছো — নতুন শহরে",
          title_en: "Lost in a New City",
          situation_bn: "তুমি নতুন একটা শহরে এসেছো। রাস্তা চিনো না। একজন দোকানদারের কাছে সাহায্য চাইছো।",
          icon: "🗺️",
          turns: [
            { speaker_bn: "তুমি", en: "Excuse me, where is the bus stop?", bn: "মাফ করবেন, বাস স্টপ কোথায়?", pronunciation_bn: "এক্সকিউজ মি, হোয়্যার ইজ দা বাস স্টপ?", patternId: "G2.2" },
            { speaker_bn: "দোকানদার", en: "Go straight, then turn right.", bn: "সোজা যান, তারপর ডানে ঘুরুন।", pronunciation_bn: "গো স্ট্রেইট, দেন টার্ন রাইট।" },
            { speaker_bn: "তুমি", en: "How do I get to the train station?", bn: "ট্রেন স্টেশনে কীভাবে যাবো?", pronunciation_bn: "হাও ডু আই গেট টু দা ট্রেন স্টেশন?", patternId: "G2.5" },
            { speaker_bn: "দোকানদার", en: "Take a rickshaw. It is near the market.", bn: "রিকশা নিন। এটা বাজারের কাছে।", pronunciation_bn: "টেক আ রিকশা। ইট ইজ নিয়ার দা মার্কেট।" },
            { speaker_bn: "তুমি", en: "How much is the rickshaw fare?", bn: "রিকশা ভাড়া কত?", pronunciation_bn: "হাও মাচ ইজ দা রিকশা ফেয়ার?", patternId: "G2.9" },
            { speaker_bn: "দোকানদার", en: "About 30 taka.", bn: "প্রায় ৩০ টাকা।", pronunciation_bn: "অ্যাবাউট থার্টি টাকা।" },
            { speaker_bn: "তুমি", en: "Where can I find a rickshaw?", bn: "রিকশা কোথায় পাবো?", pronunciation_bn: "হোয়্যার ক্যান আই ফাইন্ড আ রিকশা?", patternId: "G2.2" },
            { speaker_bn: "দোকানদার", en: "Right there, at the corner.", bn: "ওখানে, কোণায়।", pronunciation_bn: "রাইট দেয়ার, অ্যাট দা কর্নার।" },
          ],
          patternsUsed: ["G2.2", "G2.5", "G2.9"],
        },
      ],
      pluralNote: "Where are [THINGS]?",
      pluralNote_bn: "[জিনিসগুলো] কোথায়?",
      variations: [
        {
          variant: "past",
          label: "Past (অতীত)",
          label_bn: "অতীত",
          formula: "Where was [THING]?",
          formula_bn: "[জিনিস] কোথায় ছিল?",
          examples: [
            {
              en: "Where was your bag?",
              bn: "তোমার ব্যাগ কোথায় ছিল?",
              pronunciation_bn: "হোয়্যার ওয়াজ ইয়োর ব্যাগ?",
              slotValues: { THING: "your bag" },
              topicArea: "daily_life",
            },
            {
              en: "Where was the meeting?",
              bn: "মিটিং কোথায় ছিল?",
              pronunciation_bn: "হোয়্যার ওয়াজ দা মিটিং?",
              slotValues: { THING: "the meeting" },
              topicArea: "work",
            },
            {
              en: "Where was the accident?",
              bn: "দুর্ঘটনা কোথায় হয়েছিল?",
              pronunciation_bn: "হোয়্যার ওয়াজ দা অ্যাক্সিডেন্ট?",
              slotValues: { THING: "the accident" },
              topicArea: "emergency",
            },
          ],
        },
        {
          variant: "past_action",
          label: "Past Action (অতীতে কাজ)",
          label_bn: "অতীতে কাজ",
          formula: "Where did you [ACTION]?",
          formula_bn: "তুমি কোথায় [কাজ] করেছিলে?",
          examples: [
            {
              en: "Where did you eat?",
              bn: "তুমি কোথায় খেয়েছিলে?",
              pronunciation_bn: "হোয়্যার ডিড ইউ ইট?",
              slotValues: { ACTION: "eat" },
              topicArea: "food",
            },
            {
              en: "Where did you study?",
              bn: "তুমি কোথায় পড়াশোনা করেছিলে?",
              pronunciation_bn: "হোয়্যার ডিড ইউ স্টাডি?",
              slotValues: { ACTION: "study" },
              topicArea: "education",
            },
            {
              en: "Where did you buy this?",
              bn: "তুমি এটা কোথায় কিনেছিলে?",
              pronunciation_bn: "হোয়্যার ডিড ইউ বাই দিস?",
              slotValues: { ACTION: "buy this" },
              topicArea: "shopping",
            },
          ],
        },
        {
          variant: "future",
          label: "Future (ভবিষ্যৎ)",
          label_bn: "ভবিষ্যৎ",
          formula: "Where will you [ACTION]?",
          formula_bn: "তুমি কোথায় [কাজ] করবে?",
          examples: [
            {
              en: "Where will you go?",
              bn: "তুমি কোথায় যাবে?",
              pronunciation_bn: "হোয়্যার উইল ইউ গো?",
              slotValues: { ACTION: "go" },
              topicArea: "travel",
            },
            {
              en: "Where will you stay?",
              bn: "তুমি কোথায় থাকবে?",
              pronunciation_bn: "হোয়্যার উইল ইউ স্টে?",
              slotValues: { ACTION: "stay" },
              topicArea: "travel",
            },
            {
              en: "Where will you work?",
              bn: "তুমি কোথায় কাজ করবে?",
              pronunciation_bn: "হোয়্যার উইল ইউ ওয়ার্ক?",
              slotValues: { ACTION: "work" },
              topicArea: "work",
            },
          ],
        },
        {
          variant: "present_continuous",
          label: "Present Continuous (চলমান)",
          label_bn: "চলমান",
          formula: "Where are you [VERB]-ing?",
          formula_bn: "তুমি কোথায় [কাজ] করছো?",
          examples: [
            {
              en: "Where are you going?",
              bn: "তুমি কোথায় যাচ্ছো?",
              pronunciation_bn: "হোয়্যার আর ইউ গোইং?",
              slotValues: { VERB: "go" },
              topicArea: "travel",
            },
            {
              en: "Where are you staying?",
              bn: "তুমি কোথায় থাকছো?",
              pronunciation_bn: "হোয়্যার আর ইউ স্টেইং?",
              slotValues: { VERB: "stay" },
              topicArea: "travel",
            },
            {
              en: "Where are you working?",
              bn: "তুমি কোথায় কাজ করছো?",
              pronunciation_bn: "হোয়্যার আর ইউ ওয়ার্কিং?",
              slotValues: { VERB: "work" },
              topicArea: "work",
            },
          ],
        },
        {
          variant: "modal",
          label: "Modal (সম্ভাবনা)",
          label_bn: "সম্ভাবনা",
          formula: "Where can I [VERB]?",
          formula_bn: "আমি কোথায় [কাজ] করতে পারি?",
          examples: [
            {
              en: "Where can I find a doctor?",
              bn: "আমি কোথায় ডাক্তার পাবো?",
              pronunciation_bn: "হোয়্যার ক্যান আই ফাইন্ড আ ডক্টর?",
              slotValues: { VERB: "find a doctor" },
              topicArea: "health",
            },
            {
              en: "Where can I park?",
              bn: "আমি কোথায় পার্ক করতে পারি?",
              pronunciation_bn: "হোয়্যার ক্যান আই পার্ক?",
              slotValues: { VERB: "park" },
              topicArea: "travel",
            },
            {
              en: "Where should I sit?",
              bn: "আমি কোথায় বসবো?",
              pronunciation_bn: "হোয়্যার শুড আই সিট?",
              slotValues: { VERB: "sit" },
              topicArea: "travel",
            },
          ],
        },
        {
          variant: "polite",
          label: "Polite (বিনয়ী)",
          label_bn: "বিনয়ী",
          formula: "Could you tell me where [THING] is?",
          formula_bn: "আপনি কি বলবেন [জিনিস] কোথায়?",
          examples: [
            {
              en: "Could you tell me where the station is?",
              bn: "আপনি কি বলবেন স্টেশন কোথায়?",
              pronunciation_bn: "কুড ইউ টেল মি হোয়্যার দা স্টেশন ইজ?",
              slotValues: { THING: "the station" },
              topicArea: "travel",
            },
            {
              en: "Could you tell me where the bathroom is?",
              bn: "আপনি কি বলবেন বাথরুম কোথায়?",
              pronunciation_bn: "কুড ইউ টেল মি হোয়্যার দা বাথরুম ইজ?",
              slotValues: { THING: "the bathroom" },
              topicArea: "travel",
            },
            {
              en: "Could you tell me where I can get a taxi?",
              bn: "আপনি কি বলবেন আমি কোথায় ট্যাক্সি পাবো?",
              pronunciation_bn: "কুড ইউ টেল মি হোয়্যার আই ক্যান গেট আ ট্যাক্সি?",
              slotValues: { THING: "I can get a taxi" },
              topicArea: "travel",
            },
          ],
        },
      ],
      answerTemplates: [
        {
          situation_bn: "যখন কেউ কোনো জায়গা জিজ্ঞেস করে এবং সেটা কাছেই আছে",
          question: "Where is the hospital?",
          question_bn: "হাসপাতাল কোথায়?",
          answerFormula: "It's near/in/on [PLACE].",
          answerFormula_bn: "এটা [জায়গা]-র কাছে/মধ্যে/উপরে।",
          pronunciation_bn: "ইটস নিয়ার/ইন/অন [জায়গা]।",
          examples: [
            { answer: "It's near the mosque.", answer_bn: "এটা মসজিদের কাছে।", pronunciation_bn: "ইটস নিয়ার দা মস্ক।" },
            { answer: "It's in the market area.", answer_bn: "এটা বাজার এলাকায়।", pronunciation_bn: "ইটস ইন দা মার্কেট এরিয়া।" },
            { answer: "It's on the main road.", answer_bn: "এটা মেইন রোডে।", pronunciation_bn: "ইটস অন দা মেইন রোড।" },
          ],
          notes_bn: "কাছে বলতে 'near', ভেতরে বলতে 'in', রাস্তায়/উপরে বলতে 'on' ব্যবহার করো।",
        },
        {
          situation_bn: "যখন কেউ রাস্তা জিজ্ঞেস করে এবং তোমাকে দিক নির্দেশনা দিতে হয়",
          question: "Where is the bus stop?",
          question_bn: "বাস স্টপ কোথায়?",
          answerFormula: "Go straight, then turn [DIRECTION].",
          answerFormula_bn: "সোজা যান, তারপর [দিক]-এ ঘুরুন।",
          pronunciation_bn: "গো স্ট্রেইট, দেন টার্ন [দিক]।",
          examples: [
            { answer: "Go straight, then turn left.", answer_bn: "সোজা যান, তারপর বাঁয়ে ঘুরুন।", pronunciation_bn: "গো স্ট্রেইট, দেন টার্ন লেফট।" },
            { answer: "Go straight, then turn right.", answer_bn: "সোজা যান, তারপর ডানে ঘুরুন।", pronunciation_bn: "গো স্ট্রেইট, দেন টার্ন রাইট।" },
            { answer: "Go straight for 5 minutes.", answer_bn: "৫ মিনিট সোজা যান।", pronunciation_bn: "গো স্ট্রেইট ফর ফাইভ মিনিটস।" },
          ],
          notes_bn: "দিক নির্দেশনা দিতে 'Go straight' (সোজা যান), 'turn left' (বাঁয়ে ঘুরুন), 'turn right' (ডানে ঘুরুন) ব্যবহার করো।",
        },
        {
          situation_bn: "যখন কেউ একটা বিল্ডিং-এ কোন ফ্লোরে কিছু আছে জিজ্ঞেস করে",
          question: "Where is the doctor's office?",
          question_bn: "ডাক্তারের চেম্বার কোথায়?",
          answerFormula: "It's on the [FLOOR].",
          answerFormula_bn: "এটা [তলায়]।",
          pronunciation_bn: "ইটস অন দা [তলা]।",
          examples: [
            { answer: "It's on the 2nd floor.", answer_bn: "এটা ২য় তলায়।", pronunciation_bn: "ইটস অন দা সেকেন্ড ফ্লোর।" },
            { answer: "It's on the 3rd floor.", answer_bn: "এটা ৩য় তলায়।", pronunciation_bn: "ইটস অন দা থার্ড ফ্লোর।" },
            { answer: "It's on the ground floor.", answer_bn: "এটা নিচতলায়।", pronunciation_bn: "ইটস অন দা গ্রাউন্ড ফ্লোর।" },
          ],
          notes_bn: "তলা বলার সময় 'on the' ব্যবহার করো — 'on the 2nd floor', 'on the ground floor'।",
        },
        {
          situation_bn: "যখন কোনো জিনিস কাছেই দেখা যাচ্ছে এবং তুমি হাত দিয়ে দেখাতে চাও",
          question: "Where is my bag?",
          question_bn: "আমার ব্যাগ কোথায়?",
          answerFormula: "Over there. / This way.",
          answerFormula_bn: "ওখানে। / এদিকে।",
          pronunciation_bn: "ওভার দেয়ার। / দিস ওয়ে।",
          examples: [
            { answer: "Over there, on the table.", answer_bn: "ওখানে, টেবিলের উপর।", pronunciation_bn: "ওভার দেয়ার, অন দা টেবল।" },
            { answer: "This way, come with me.", answer_bn: "এদিকে, আমার সাথে আসো।", pronunciation_bn: "দিস ওয়ে, কাম উইথ মি।" },
            { answer: "Right there, next to the door.", answer_bn: "ওইখানে, দরজার পাশে।", pronunciation_bn: "রাইট দেয়ার, নেক্সট টু দা ডোর।" },
          ],
          notes_bn: "কাছে দেখাতে 'over there' (ওখানে) বা 'this way' (এদিকে) বলো।",
        },
      ],
    },

    // ==================== G2.3 — কখন (When) ====================
    {
      id: "G2.3",
      formula: "When do you [ACTION]?",
      formula_bn: "তুমি কখন [কাজ] করো?",
      patternName: "Asking When (কখন)",
      patternName_bn: "কখন জিজ্ঞেস করা",
      concept_bn: "কখন",
      slots: [
        {
          name: "ACTION",
          description: "A verb or verb phrase describing an action",
          description_bn: "যে কাজের সময় জানতে চাও",
          acceptedTypes: ["verb", "verb_phrase"],
          examples: ["wake up", "eat lunch", "go to work", "sleep", "study"],
        },
      ],
      examples: [
        {
          en: "When do you wake up?",
          bn: "তুমি কখন ঘুম থেকে ওঠো?",
          pronunciation_bn: "হোয়েন ডু ইউ ওয়েক আপ?",
          slotValues: { ACTION: "wake up" },
          topicArea: "daily_life",
          stage: 1,
          miniStory: {
            situation_bn: "তোমার নতুন রুমমেট এসেছে হোস্টেলে। তুমি তার দৈনিক রুটিন জানতে চাও যাতে সময় ভাগ করে নিতে পারো।",
            icon: "🛏️",
          },
        },
        {
          en: "When do you eat lunch?",
          bn: "তুমি কখন দুপুরের খাবার খাও?",
          pronunciation_bn: "হোয়েন ডু ইউ ইট লাঞ্চ?",
          slotValues: { ACTION: "eat lunch" },
          topicArea: "food",
          stage: 1,
          miniStory: {
            situation_bn: "তুমি নতুন অফিসে জয়েন করেছো। সহকর্মীকে জিজ্ঞেস করছো কখন একসাথে লাঞ্চ করা যায়।",
            icon: "🍽️",
          },
        },
        {
          en: "When do you go to work?",
          bn: "তুমি কখন কাজে যাও?",
          pronunciation_bn: "হোয়েন ডু ইউ গো টু ওয়ার্ক?",
          slotValues: { ACTION: "go to work" },
          topicArea: "work",
          stage: 2,
          miniStory: {
            situation_bn: "তুমি তোমার প্রতিবেশীকে জিজ্ঞেস করছো কখন সে অফিসে যায়, কারণ তোমরা একই রাস্তায় যাও।",
            icon: "🚌",
          },
        },
        {
          en: "When do you study?",
          bn: "তুমি কখন পড়াশোনা করো?",
          pronunciation_bn: "হোয়েন ডু ইউ স্টাডি?",
          slotValues: { ACTION: "study" },
          topicArea: "education",
          stage: 2,
          miniStory: {
            situation_bn: "তোমার ছোট ভাই পরীক্ষায় ভালো করেছে। তুমি জানতে চাও সে কখন পড়াশোনা করে, কারণ সারাদিন তো তাকে খেলতে দেখো।",
            icon: "🏫",
          },
        },
        {
          en: "When do you exercise?",
          bn: "তুমি কখন ব্যায়াম করো?",
          pronunciation_bn: "হোয়েন ডু ইউ এক্সারসাইজ?",
          slotValues: { ACTION: "exercise" },
          topicArea: "health",
          stage: 3,
          miniStory: {
            situation_bn: "ডাক্তার তোমাকে বলেছে প্রতিদিন ব্যায়াম করতে। তোমার বন্ধু রোজ সকালে পার্কে দৌড়ায়। তুমি তাকে জিজ্ঞেস করছো কখন সে ব্যায়াম করে।",
            icon: "🏃",
          },
        },
      ],
      formality: "casual",
      difficulty: "beginner",
      usageNote:
        "Use 'When do you...?' to ask about the time or occasion something happens.",
      usageNote_bn:
        "কোনো কাজের সময় বা উপলক্ষ জানতে 'When do you...?' ব্যবহার করো।",
      banglaStructureMap:
        "বাংলা: তুমি কখন [কাজ] করো? → English: When do you [ACTION]?",
      conversionSteps: {
        banglaThought: "তুমি বাংলায় বলো: 'তুমি কখন ঘুমাও?'",
        steps: [
          {
            step_bn: "প্রশ্নবোধক শব্দ 'কখন' = 'When' দিয়ে শুরু করো",
            result: "When",
          },
          {
            step_bn: "'do' যোগ করো (কারণ বর্তমান কাল, কাজের প্রশ্ন)",
            result: "When do",
          },
          {
            step_bn: "'you' যোগ করো (তুমি)",
            result: "When do you",
          },
          {
            step_bn: "কাজটা যোগ করো: 'ঘুমাও' = 'sleep'",
            result: "When do you sleep?",
          },
        ],
        finalResult: "When do you sleep?",
        finalResult_bn: "তুমি কখন ঘুমাও?",
      },
      commonMistakes: [
        {
          wrong: "When you sleep?",
          correct: "When do you sleep?",
          explanation_bn:
            "'do' বাদ দেওয়া যাবে না — ইংরেজিতে কাজের প্রশ্নে সবসময় do/does লাগে।",
        },
        {
          wrong: "You when sleep?",
          correct: "When do you sleep?",
          explanation_bn:
            "বাংলায় 'কখন' মাঝখানে বসতে পারে, কিন্তু ইংরেজিতে 'When' সবসময় শুরুতে বসে।",
        },
        {
          wrong: "When does you go?",
          correct: "When do you go?",
          explanation_bn:
            "'you' এর সাথে 'do' ব্যবহার করো, 'does' না। 'does' শুধু he/she/it এর সাথে।",
        },
      ],
      simpleRules: [
        {
          rule_bn: "বর্তমান → 'do' বা 'does' ব্যবহার করো",
          example: "When do you eat? / When does he eat?",
        },
        {
          rule_bn: "অতীত → 'did' ব্যবহার করো",
          example: "When did you come?",
        },
        {
          rule_bn: "ভবিষ্যৎ → 'will' ব্যবহার করো",
          example: "When will you come?",
        },
      ],
      usageSituations: [
        {
          situation_bn: "সময়সূচি জানতে",
          situation_en: "When asking about a schedule",
          exampleSentence: "When does the train leave?",
          exampleSentence_bn: "ট্রেন কখন ছাড়ে?",
        },
        {
          situation_bn: "অ্যাপয়েন্টমেন্ট নিতে",
          situation_en: "When making an appointment",
          exampleSentence: "When do you have time?",
          exampleSentence_bn: "তোমার কখন সময় আছে?",
        },
        {
          situation_bn: "কারো রুটিন জানতে",
          situation_en: "When asking about someone's routine",
          exampleSentence: "When do you usually wake up?",
          exampleSentence_bn: "তুমি সাধারণত কখন ঘুম থেকে ওঠো?",
        },
      ],
      sentenceBuilding: [
        {
          previousPatternId: "C1",
          previousFormula: "I [ACTION] every [TIME]",
          previousFormula_bn: "আমি প্রতি [সময়] [কাজ] করি",
          combined: "When do you eat? I eat at 8 every day.",
          combined_bn: "তুমি কখন খাও? আমি প্রতিদিন ৮টায় খাই।",
        },
        {
          previousPatternId: "C4.1",
          previousFormula: "I will [ACTION]",
          previousFormula_bn: "আমি [কাজ] করবো",
          combined: "When do you go to work? I will go at 9 AM.",
          combined_bn: "তুমি কখন কাজে যাও? আমি সকাল ৯টায় যাবো।",
        },
        {
          previousPatternId: "A1.6",
          previousFormula: "I'd like [THING]",
          previousFormula_bn: "আমি [জিনিস] চাই (ভদ্রভাবে)",
          combined: "When do you have free time? I'd like to meet you.",
          combined_bn: "তোমার কখন সময় আছে? আমি তোমার সাথে দেখা করতে চাই।",
        },
      ],
      memoryTrick_bn:
        "মনে রাখো: 'When' = 'কখন'। কাজের প্রশ্নে সবসময় 'do/does/did' লাগে। 'When + do/does + ব্যক্তি + কাজ?' — এই ক্রম মুখস্থ করো।",
      chunks: [
        { en: "When do you", bn: "তুমি কখন", pronunciation_bn: "হোয়েন ডু ইউ" },
        { en: "When does it", bn: "এটা কখন", pronunciation_bn: "হোয়েন ডাজ ইট" },
        { en: "When can I", bn: "আমি কখন", pronunciation_bn: "হোয়েন ক্যান আই" },
        { en: "Do you know when", bn: "তুমি কি জানো কখন", pronunciation_bn: "ডু ইউ নো হোয়েন" },
      ],
      bridgeRuleIds: ["BR2", "BR3"],
      formulaPronunciation_bn: "হোয়েন ডু ইউ [কাজ]?",
      wordMap: {
        bn_sentence: "তুমি কখন ঘুমাও?",
        en_sentence: "When do you sleep?",
        mappings: [
          { bn_word: "কখন", en_word: "When", type: "moved", bridgeRuleId: "BR2" },
          { bn_word: "(নেই)", en_word: "do", type: "added", bridgeRuleId: "BR3" },
          { bn_word: "তুমি", en_word: "you", type: "direct" },
          { bn_word: "ঘুমাও", en_word: "sleep", type: "direct" },
        ],
      },
      dialogueChains: [
        {
          id: "dc-g2.3-1",
          title_bn: "বন্ধুর রুটিন জানা",
          title_en: "Learning a friend's routine",
          situation_bn: "তুমি তোমার বন্ধুর দৈনিক রুটিন জানতে চাও",
          icon: "📅",
          turns: [
            { speaker_bn: "তুমি", en: "When do you wake up?", bn: "তুমি কখন উঠো?", pronunciation_bn: "হোয়েন ডু ইউ ওয়েক আপ?", patternId: "G2.3" },
            { speaker_bn: "বন্ধু", en: "I wake up at 6 AM.", bn: "আমি সকাল ৬টায় উঠি।", pronunciation_bn: "আই ওয়েক আপ অ্যাট সিক্স এএম।" },
            { speaker_bn: "তুমি", en: "When do you go to work?", bn: "তুমি কখন কাজে যাও?", pronunciation_bn: "হোয়েন ডু ইউ গো টু ওয়ার্ক?", patternId: "G2.3" },
            { speaker_bn: "বন্ধু", en: "I go at 8 AM.", bn: "আমি সকাল ৮টায় যাই।", pronunciation_bn: "আই গো অ্যাট এইট এএম।" },
          ],
          patternsUsed: ["G2.3"],
        },
        {
          id: "G2.3-dc-bus",
          title_bn: "বাস স্ট্যান্ডে",
          title_en: "At the Bus Stand",
          situation_bn: "তুমি বাস স্ট্যান্ডে দাঁড়িয়ে আছো। ঢাকা যাবে। কন্ডাক্টরকে জিজ্ঞেস করছো।",
          icon: "🚌",
          turns: [
            { speaker_bn: "তুমি", en: "When does the next bus leave?", bn: "পরের বাস কখন ছাড়ে?", pronunciation_bn: "হোয়েন ডাজ দা নেক্সট বাস লিভ?", patternId: "G2.3" },
            { speaker_bn: "কন্ডাক্টর", en: "At 3 o'clock.", bn: "তিনটায়।", pronunciation_bn: "অ্যাট থ্রি ও'ক্লক।" },
            { speaker_bn: "তুমি", en: "When will we reach Dhaka?", bn: "ঢাকায় কখন পৌঁছাবো?", pronunciation_bn: "হোয়েন উইল উই রিচ ঢাকা?", patternId: "G2.3" },
            { speaker_bn: "কন্ডাক্টর", en: "Around 6 in the evening.", bn: "সন্ধ্যা ছয়টার দিকে।", pronunciation_bn: "অ্যারাউন্ড সিক্স ইন দা ইভনিং।" },
            { speaker_bn: "তুমি", en: "When do you stop for food?", bn: "খাবারের জন্য কখন থামবেন?", pronunciation_bn: "হোয়েন ডু ইউ স্টপ ফর ফুড?", patternId: "G2.3" },
            { speaker_bn: "কন্ডাক্টর", en: "We stop at Manikganj.", bn: "মানিকগঞ্জে থামি।", pronunciation_bn: "উই স্টপ অ্যাট মানিকগঞ্জ।" },
          ],
          patternsUsed: ["G2.3"],
        },
      ],
      variations: [
        {
          variant: "past",
          label: "Past (অতীত)",
          label_bn: "অতীত",
          formula: "When did you [ACTION]?",
          formula_bn: "তুমি কখন [কাজ] করেছিলে?",
          examples: [
            {
              en: "When did you arrive?",
              bn: "তুমি কখন পৌঁছেছিলে?",
              pronunciation_bn: "হোয়েন ডিড ইউ অ্যারাইভ?",
              slotValues: { ACTION: "arrive" },
              topicArea: "travel",
            },
            {
              en: "When did you eat?",
              bn: "তুমি কখন খেয়েছিলে?",
              pronunciation_bn: "হোয়েন ডিড ইউ ইট?",
              slotValues: { ACTION: "eat" },
              topicArea: "food",
            },
            {
              en: "When did you finish school?",
              bn: "তুমি কখন স্কুল শেষ করেছিলে?",
              pronunciation_bn: "হোয়েন ডিড ইউ ফিনিশ স্কুল?",
              slotValues: { ACTION: "finish school" },
              topicArea: "education",
            },
          ],
        },
        {
          variant: "future",
          label: "Future (ভবিষ্যৎ)",
          label_bn: "ভবিষ্যৎ",
          formula: "When will you [ACTION]?",
          formula_bn: "তুমি কখন [কাজ] করবে?",
          examples: [
            {
              en: "When will you come back?",
              bn: "তুমি কখন ফিরে আসবে?",
              pronunciation_bn: "হোয়েন উইল ইউ কাম ব্যাক?",
              slotValues: { ACTION: "come back" },
              topicArea: "relationships",
            },
            {
              en: "When will you start the job?",
              bn: "তুমি কখন চাকরি শুরু করবে?",
              pronunciation_bn: "হোয়েন উইল ইউ স্টার্ট দা জব?",
              slotValues: { ACTION: "start the job" },
              topicArea: "work",
            },
            {
              en: "When will you visit us?",
              bn: "তুমি কখন আমাদের কাছে আসবে?",
              pronunciation_bn: "হোয়েন উইল ইউ ভিজিট আস?",
              slotValues: { ACTION: "visit us" },
              topicArea: "relationships",
            },
          ],
        },
        {
          variant: "modal",
          label: "Modal (সম্ভাবনা)",
          label_bn: "সম্ভাবনা",
          formula: "When can I [VERB]?",
          formula_bn: "আমি কখন [কাজ] করতে পারি?",
          examples: [
            {
              en: "When can I see the doctor?",
              bn: "আমি কখন ডাক্তারের সাথে দেখা করতে পারি?",
              pronunciation_bn: "হোয়েন ক্যান আই সি দা ডক্টর?",
              slotValues: { VERB: "see the doctor" },
              topicArea: "health",
            },
            {
              en: "When can I get the loan?",
              bn: "আমি কখন লোন পেতে পারি?",
              pronunciation_bn: "হোয়েন ক্যান আই গেট দা লোন?",
              slotValues: { VERB: "get the loan" },
              topicArea: "finance",
            },
            {
              en: "When should I pay the rent?",
              bn: "আমি কখন ভাড়া দেবো?",
              pronunciation_bn: "হোয়েন শুড আই পে দা রেন্ট?",
              slotValues: { VERB: "pay the rent" },
              topicArea: "finance",
            },
          ],
        },
        {
          variant: "polite",
          label: "Polite (বিনয়ী)",
          label_bn: "বিনয়ী",
          formula: "Do you know when [THING]?",
          formula_bn: "তুমি কি জানো কখন [জিনিস]?",
          examples: [
            {
              en: "Do you know when the bus comes?",
              bn: "তুমি কি জানো বাস কখন আসে?",
              pronunciation_bn: "ডু ইউ নো হোয়েন দা বাস কামস?",
              slotValues: { THING: "the bus comes" },
              topicArea: "travel",
            },
            {
              en: "Do you know when the shop opens?",
              bn: "তুমি কি জানো দোকান কখন খোলে?",
              pronunciation_bn: "ডু ইউ নো হোয়েন দা শপ ওপেনস?",
              slotValues: { THING: "the shop opens" },
              topicArea: "shopping",
            },
            {
              en: "Do you know when the rain will stop?",
              bn: "তুমি কি জানো বৃষ্টি কখন থামবে?",
              pronunciation_bn: "ডু ইউ নো হোয়েন দা রেইন উইল স্টপ?",
              slotValues: { THING: "the rain will stop" },
              topicArea: "daily_life",
            },
          ],
        },
      ],
      answerTemplates: [
        {
          situation_bn: "যখন কেউ সময় জিজ্ঞেস করে এবং নির্দিষ্ট সময় বলতে হয়",
          question: "When do you wake up?",
          question_bn: "তুমি কখন ঘুম থেকে ওঠো?",
          answerFormula: "At [TIME].",
          answerFormula_bn: "[সময়]-এ।",
          pronunciation_bn: "অ্যাট [সময়]।",
          examples: [
            { answer: "At 6 AM.", answer_bn: "সকাল ৬টায়।", pronunciation_bn: "অ্যাট সিক্স এএম।" },
            { answer: "At 7 o'clock.", answer_bn: "৭টায়।", pronunciation_bn: "অ্যাট সেভেন অক্লক।" },
            { answer: "At noon.", answer_bn: "দুপুর ১২টায়।", pronunciation_bn: "অ্যাট নুন।" },
          ],
          notes_bn: "নির্দিষ্ট সময় বলতে 'at' ব্যবহার করো।",
        },
        {
          situation_bn: "যখন কেউ বার জিজ্ঞেস করে",
          question: "When is the meeting?",
          question_bn: "মিটিং কবে?",
          answerFormula: "On [DAY].",
          answerFormula_bn: "[বার]-এ।",
          pronunciation_bn: "অন [বার]।",
          examples: [
            { answer: "On Monday.", answer_bn: "সোমবারে।", pronunciation_bn: "অন মানডে।" },
            { answer: "On Friday morning.", answer_bn: "শুক্রবার সকালে।", pronunciation_bn: "অন ফ্রাইডে মর্নিং।" },
            { answer: "On the 15th.", answer_bn: "১৫ তারিখে।", pronunciation_bn: "অন দা ফিফটিন্থ।" },
          ],
          notes_bn: "বার বা তারিখ বলতে 'on' ব্যবহার করো।",
        },
        {
          situation_bn: "যখন কেউ মাস বা বছর জিজ্ঞেস করে",
          question: "When did you come to Dhaka?",
          question_bn: "তুমি কখন ঢাকায় এসেছিলে?",
          answerFormula: "In [MONTH/YEAR].",
          answerFormula_bn: "[মাস/বছর]-এ।",
          pronunciation_bn: "ইন [মাস/বছর]।",
          examples: [
            { answer: "In January.", answer_bn: "জানুয়ারিতে।", pronunciation_bn: "ইন জ্যানুয়ারি।" },
            { answer: "In 2020.", answer_bn: "২০২০ সালে।", pronunciation_bn: "ইন টুয়েন্টি টুয়েন্টি।" },
            { answer: "In the morning.", answer_bn: "সকালে।", pronunciation_bn: "ইন দা মর্নিং।" },
          ],
          notes_bn: "মাস, বছর, বা সময়ের অংশ বলতে 'in' ব্যবহার করো।",
        },
        {
          situation_bn: "যখন কেউ তোমার রুটিন জিজ্ঞেস করে এবং তুমি পুরো উত্তর দিতে চাও",
          question: "When do you go to work?",
          question_bn: "তুমি কখন কাজে যাও?",
          answerFormula: "I [ACTION] at [TIME].",
          answerFormula_bn: "আমি [সময়]-এ [কাজ] করি।",
          pronunciation_bn: "আই [কাজ] অ্যাট [সময়]।",
          examples: [
            { answer: "I go to work at 8 AM.", answer_bn: "আমি সকাল ৮টায় কাজে যাই।", pronunciation_bn: "আই গো টু ওয়ার্ক অ্যাট এইট এএম।" },
            { answer: "I eat lunch at 1 PM.", answer_bn: "আমি দুপুর ১টায় দুপুরের খাবার খাই।", pronunciation_bn: "আই ইট লাঞ্চ অ্যাট ওয়ান পিএম।" },
            { answer: "I study at night.", answer_bn: "আমি রাতে পড়াশোনা করি।", pronunciation_bn: "আই স্টাডি অ্যাট নাইট।" },
          ],
          notes_bn: "পুরো বাক্যে উত্তর দিলে 'I + কাজ + at + সময়' এই ক্রম ব্যবহার করো।",
        },
      ],
    },

    // ==================== G2.4 — কেন (Why) ====================
    {
      id: "G2.4",
      formula: "Why do you [ACTION]?",
      formula_bn: "তুমি কেন [কাজ] করো?",
      patternName: "Asking Why (কেন)",
      patternName_bn: "কেন জিজ্ঞেস করা",
      concept_bn: "কেন",
      slots: [
        {
          name: "ACTION",
          description: "A verb or verb phrase describing an action",
          description_bn: "যে কাজের কারণ জানতে চাও",
          acceptedTypes: ["verb", "verb_phrase"],
          examples: [
            "work so hard",
            "study English",
            "wake up early",
            "eat so much",
            "worry",
          ],
        },
      ],
      examples: [
        {
          en: "Why do you work so hard?",
          bn: "তুমি কেন এত বেশি কাজ করো?",
          pronunciation_bn: "হোয়াই ডু ইউ ওয়ার্ক সো হার্ড?",
          slotValues: { ACTION: "work so hard" },
          topicArea: "work",
          stage: 1,
          miniStory: { situation_bn: "তোমার বন্ধু হঠাৎ বাড়ি চলে যাচ্ছে। তুমি কারণ জানতে চাও।", icon: "🤔" },
        },
        {
          en: "Why do you study English?",
          bn: "তুমি কেন ইংরেজি পড়ো?",
          pronunciation_bn: "হোয়াই ডু ইউ স্টাডি ইংলিশ?",
          slotValues: { ACTION: "study English" },
          topicArea: "education",
          stage: 1,
          miniStory: { situation_bn: "তোমার ছেলে স্কুলে যেতে চায় না। তুমি কারণ জিজ্ঞেস করছো।", icon: "🏫" },
        },
        {
          en: "Why do you wake up so early?",
          bn: "তুমি কেন এত সকালে ওঠো?",
          pronunciation_bn: "হোয়াই ডু ইউ ওয়েক আপ সো আর্লি?",
          slotValues: { ACTION: "wake up so early" },
          topicArea: "religion",
          stage: 2,
          miniStory: {
            situation_bn: "তোমার রুমমেট প্রতিদিন ফজরের আগেই উঠে যায়। তুমি অবাক হয়ে জিজ্ঞেস করছো কেন এত সকালে ওঠে।",
            icon: "🌅",
          },
        },
        {
          en: "Why do you work at night?",
          bn: "তুমি রাতে কেন কাজ করো?",
          pronunciation_bn: "হোয়াই ডু ইউ ওয়ার্ক অ্যাট নাইট?",
          slotValues: { ACTION: "work at night" },
          topicArea: "work",
          stage: 2,
          miniStory: { situation_bn: "তোমার বন্ধু নাইট শিফটে কাজ করে। তুমি জানতে চাও কেন।", icon: "🌙" },
        },
        {
          en: "Why do you worry so much?",
          bn: "তুমি কেন এত চিন্তা করো?",
          pronunciation_bn: "হোয়াই ডু ইউ ওয়রি সো মাচ?",
          slotValues: { ACTION: "worry so much" },
          topicArea: "health",
          stage: 3,
          miniStory: {
            situation_bn: "তোমার মা সবসময় তোমার নিয়ে চিন্তা করে — খেয়েছো কিনা, ঠিকমতো ঘুমাচ্ছো কিনা। তুমি আদর করে বলছো কেন এত চিন্তা করো।",
            icon: "🏠",
          },
        },
      ],
      formality: "casual",
      difficulty: "beginner",
      usageNote:
        "Use 'Why do you...?' to ask about the reason or cause behind an action.",
      usageNote_bn:
        "কোনো কাজের কারণ বা উদ্দেশ্য জানতে 'Why do you...?' ব্যবহার করো।",
      banglaStructureMap:
        "বাংলা: তুমি কেন [কাজ] করো? → English: Why do you [ACTION]?",
      informalAlt: "How come [CLAUSE]?",
      informalAlt_bn:
        "অনানুষ্ঠানিক: 'How come you're late?' = 'কেন তুমি দেরি করলে?'",
      conversionSteps: {
        banglaThought: "তুমি বাংলায় বলো: 'তুমি কেন কাজ করো?'",
        steps: [
          {
            step_bn: "প্রশ্নবোধক শব্দ 'কেন' = 'Why' দিয়ে শুরু করো",
            result: "Why",
          },
          {
            step_bn: "'do' যোগ করো (কারণ বর্তমান কাল, কাজের প্রশ্ন)",
            result: "Why do",
          },
          {
            step_bn: "'you' যোগ করো (তুমি)",
            result: "Why do you",
          },
          {
            step_bn: "কাজটা যোগ করো: 'কাজ করো' = 'work'",
            result: "Why do you work?",
          },
        ],
        finalResult: "Why do you work?",
        finalResult_bn: "তুমি কেন কাজ করো?",
      },
      commonMistakes: [
        {
          wrong: "Why you work?",
          correct: "Why do you work?",
          explanation_bn:
            "'do' বাদ দেওয়া যাবে না — ইংরেজিতে 'Why' এর পরে কাজের প্রশ্নে do/does লাগে।",
        },
        {
          wrong: "You why work?",
          correct: "Why do you work?",
          explanation_bn:
            "বাংলায় 'কেন' মাঝখানে বসতে পারে, কিন্তু ইংরেজিতে 'Why' সবসময় শুরুতে বসে।",
        },
        {
          wrong: "Why are you work?",
          correct: "Why do you work?",
          explanation_bn:
            "কাজের প্রশ্নে 'are' না, 'do' ব্যবহার করো। 'are' শুধু বিশেষণ বা অবস্থার জন্য।",
        },
      ],
      simpleRules: [
        {
          rule_bn: "বর্তমান → 'do' বা 'does' ব্যবহার করো",
          example: "Why do you work? / Why does she cry?",
        },
        {
          rule_bn: "অতীত → 'did' ব্যবহার করো",
          example: "Why did you leave?",
        },
        {
          rule_bn: "ভবিষ্যৎ → 'will' ব্যবহার করো",
          example: "Why will you go?",
        },
        {
          rule_bn:
            "'How come'-এর পরে শব্দক্রম পরিবর্তন হয় না — সাধারণ বাক্যের মতো",
          example: "How come you are late? (NOT: How come are you late?)",
        },
      ],
      usageSituations: [
        {
          situation_bn: "কারণ জানতে",
          situation_en: "When asking for a reason",
          exampleSentence: "Why do you want to leave?",
          exampleSentence_bn: "তুমি কেন চলে যেতে চাও?",
        },
        {
          situation_bn: "সিদ্ধান্ত বুঝতে",
          situation_en: "When understanding a decision",
          exampleSentence: "Why did you choose this school?",
          exampleSentence_bn: "তুমি কেন এই স্কুল বেছে নিয়েছিলে?",
        },
        {
          situation_bn: "অভ্যাস সম্পর্কে জিজ্ঞেস করতে",
          situation_en: "When asking about habits",
          exampleSentence: "Why do you always drink tea?",
          exampleSentence_bn: "তুমি কেন সবসময় চা খাও?",
        },
      ],
      sentenceBuilding: [
        {
          previousPatternId: "J1",
          previousFormula: "Because [REASON]",
          previousFormula_bn: "কারণ [কারণ]",
          combined: "Why do you work so hard? Because I need money.",
          combined_bn: "তুমি কেন এত কাজ করো? কারণ আমার টাকা দরকার।",
        },
        {
          previousPatternId: "G2.5",
          previousFormula: "How do you [ACTION]?",
          previousFormula_bn: "তুমি কীভাবে [কাজ] করো?",
          combined: "Why do you wake up early? How do you do it every day?",
          combined_bn: "তুমি কেন সকালে ওঠো? প্রতিদিন কীভাবে করো?",
        },
        {
          previousPatternId: "A1.1",
          previousFormula: "I want [THING]",
          previousFormula_bn: "আমি [জিনিস] চাই",
          combined: "Why don't you try? I want to help you.",
          combined_bn: "তুমি কেন চেষ্টা করো না? আমি তোমাকে সাহায্য করতে চাই।",
        },
      ],
      memoryTrick_bn:
        "মনে রাখো: 'Why' = 'কেন'। 'Why' এর উত্তর সবসময় 'Because' দিয়ে দেওয়া যায়। 'Why + do + তুমি + কাজ?' — এই ছকটা মনে রাখো।",
      chunks: [
        { en: "Why do you", bn: "তুমি কেন", pronunciation_bn: "হোয়াই ডু ইউ" },
        { en: "Why don't you", bn: "তুমি কেন না", pronunciation_bn: "হোয়াই ডোন্ট ইউ" },
        { en: "Why are you", bn: "তুমি কেন", pronunciation_bn: "হোয়াই আর ইউ" },
      ],
      bridgeRuleIds: ["BR2", "BR3"],
      formulaPronunciation_bn: "হোয়াই ডু ইউ [কাজ]?",
      wordMap: {
        bn_sentence: "তুমি কেন কাঁদো?",
        en_sentence: "Why do you cry?",
        mappings: [
          { bn_word: "কেন", en_word: "Why", type: "moved", bridgeRuleId: "BR2" },
          { bn_word: "(নেই)", en_word: "do", type: "added", bridgeRuleId: "BR3" },
          { bn_word: "তুমি", en_word: "you", type: "direct" },
          { bn_word: "কাঁদো", en_word: "cry", type: "direct" },
        ],
      },
      dialogueChains: [
        {
          id: "dc-g2.4-1",
          title_bn: "দেরি করার কারণ",
          title_en: "Asking about being late",
          situation_bn: "তোমার বন্ধু দেরি করেছে, তুমি কারণ জানতে চাও",
          icon: "⏰",
          turns: [
            { speaker_bn: "তুমি", en: "Why are you late?", bn: "তুমি কেন দেরি করলে?", pronunciation_bn: "হোয়াই আর ইউ লেইট?", patternId: "G2.4" },
            { speaker_bn: "বন্ধু", en: "Because of traffic.", bn: "ট্রাফিকের জন্য।", pronunciation_bn: "বিকজ অফ ট্রাফিক।" },
            { speaker_bn: "তুমি", en: "Why did you not call me?", bn: "তুমি কেন আমাকে ফোন করোনি?", pronunciation_bn: "হোয়াই ডিড ইউ নট কল মি?", patternId: "G2.4" },
            { speaker_bn: "বন্ধু", en: "Sorry, my phone was dead.", bn: "দুঃখিত, আমার ফোনের চার্জ ছিল না।", pronunciation_bn: "সরি, মাই ফোন ওয়াজ ডেড।" },
          ],
          patternsUsed: ["G2.4"],
        },
        {
          id: "G2.4-dc-late",
          title_bn: "কাজে দেরি",
          title_en: "Late to Work",
          situation_bn: "তুমি কাজে দেরি করে এসেছো। সুপারভাইজার জিজ্ঞেস করছে।",
          icon: "⏰",
          turns: [
            { speaker_bn: "সুপারভাইজার", en: "Why are you late today?", bn: "আজকে দেরি কেন?", pronunciation_bn: "হোয়াই আর ইউ লেইট টুডে?", patternId: "G2.4" },
            { speaker_bn: "তুমি", en: "Because the bus was late.", bn: "কারণ বাস দেরিতে এসেছে।", pronunciation_bn: "বিকজ দা বাস ওয়াজ লেইট।" },
            { speaker_bn: "সুপারভাইজার", en: "Why didn't you take an earlier bus?", bn: "আগের বাসে কেন যাওনি?", pronunciation_bn: "হোয়াই ডিডন্ট ইউ টেইক অ্যান আর্লিয়ার বাস?", patternId: "G2.4" },
            { speaker_bn: "তুমি", en: "Because I had to drop my child at school.", bn: "কারণ বাচ্চাকে স্কুলে দিয়ে আসতে হয়েছে।", pronunciation_bn: "বিকজ আই হ্যাড টু ড্রপ মাই চাইল্ড অ্যাট স্কুল।" },
            { speaker_bn: "সুপারভাইজার", en: "Okay, but try to be on time tomorrow.", bn: "ঠিক আছে, কিন্তু কাল সময়মতো আসার চেষ্টা করো।", pronunciation_bn: "ওকে, বাট ট্রাই টু বি অন টাইম টুমরো।" },
          ],
          patternsUsed: ["G2.4"],
        },
      ],
      variations: [
        {
          variant: "past",
          label: "Past (অতীত)",
          label_bn: "অতীত",
          formula: "Why did you [ACTION]?",
          formula_bn: "তুমি কেন [কাজ] করেছিলে?",
          examples: [
            {
              en: "Why did you leave the job?",
              bn: "তুমি কেন চাকরি ছেড়ে দিয়েছিলে?",
              pronunciation_bn: "হোয়াই ডিড ইউ লিভ দা জব?",
              slotValues: { ACTION: "leave the job" },
              topicArea: "work",
            },
            {
              en: "Why did you come late?",
              bn: "তুমি কেন দেরি করে এসেছিলে?",
              pronunciation_bn: "হোয়াই ডিড ইউ কাম লেইট?",
              slotValues: { ACTION: "come late" },
              topicArea: "work",
            },
            {
              en: "Why did you skip breakfast?",
              bn: "তুমি কেন সকালের নাস্তা বাদ দিয়েছিলে?",
              pronunciation_bn: "হোয়াই ডিড ইউ স্কিপ ব্রেকফাস্ট?",
              slotValues: { ACTION: "skip breakfast" },
              topicArea: "food",
            },
          ],
        },
        {
          variant: "future",
          label: "Future (ভবিষ্যৎ)",
          label_bn: "ভবিষ্যৎ",
          formula: "Why will you [ACTION]?",
          formula_bn: "তুমি কেন [কাজ] করবে?",
          examples: [
            {
              en: "Why will you move to Dhaka?",
              bn: "তুমি কেন ঢাকায় যাবে?",
              pronunciation_bn: "হোয়াই উইল ইউ মুভ টু ঢাকা?",
              slotValues: { ACTION: "move to Dhaka" },
              topicArea: "travel",
            },
            {
              en: "Why will you sell your phone?",
              bn: "তুমি কেন তোমার ফোন বিক্রি করবে?",
              pronunciation_bn: "হোয়াই উইল ইউ সেল ইয়োর ফোন?",
              slotValues: { ACTION: "sell your phone" },
              topicArea: "shopping",
            },
            {
              en: "Why will you change schools?",
              bn: "তুমি কেন স্কুল বদলাবে?",
              pronunciation_bn: "হোয়াই উইল ইউ চেঞ্জ স্কুলস?",
              slotValues: { ACTION: "change schools" },
              topicArea: "education",
            },
          ],
        },
        {
          variant: "present_continuous",
          label: "Present Continuous (চলমান)",
          label_bn: "চলমান",
          formula: "Why are you [VERB]-ing?",
          formula_bn: "তুমি কেন [কাজ] করছো?",
          examples: [
            {
              en: "Why are you crying?",
              bn: "তুমি কেন কাঁদছো?",
              pronunciation_bn: "হোয়াই আর ইউ ক্রাইং?",
              slotValues: { ACTION: "crying" },
              topicArea: "relationships",
            },
            {
              en: "Why are you laughing?",
              bn: "তুমি কেন হাসছো?",
              pronunciation_bn: "হোয়াই আর ইউ লাফিং?",
              slotValues: { ACTION: "laughing" },
              topicArea: "relationships",
            },
            {
              en: "Why are you running?",
              bn: "তুমি কেন দৌড়াচ্ছো?",
              pronunciation_bn: "হোয়াই আর ইউ রানিং?",
              slotValues: { ACTION: "running" },
              topicArea: "emergency",
            },
          ],
        },
        {
          variant: "negative_suggestion",
          label: "Suggestion (পরামর্শ)",
          label_bn: "পরামর্শ",
          formula: "Why don't you [VERB]?",
          formula_bn: "তুমি কেন [কাজ] করো না?",
          examples: [
            {
              en: "Why don't you come with us?",
              bn: "তুমি কেন আমাদের সাথে আসো না?",
              pronunciation_bn: "হোয়াই ডোন্ট ইউ কাম উইথ আস?",
              slotValues: { ACTION: "come with us" },
              topicArea: "relationships",
            },
            {
              en: "Why don't you try?",
              bn: "তুমি কেন চেষ্টা করো না?",
              pronunciation_bn: "হোয়াই ডোন্ট ইউ ট্রাই?",
              slotValues: { ACTION: "try" },
              topicArea: "education",
            },
            {
              en: "Why don't you ask him?",
              bn: "তুমি কেন তাকে জিজ্ঞেস করো না?",
              pronunciation_bn: "হোয়াই ডোন্ট ইউ আস্ক হিম?",
              slotValues: { ACTION: "ask him" },
              topicArea: "relationships",
            },
          ],
        },
        {
          variant: "modal",
          label: "Modal (পারি না কেন)",
          label_bn: "পারি না কেন",
          formula: "Why can't I [VERB]?",
          formula_bn: "আমি কেন [কাজ] করতে পারি না?",
          examples: [
            {
              en: "Why can't I go?",
              bn: "আমি কেন যেতে পারি না?",
              pronunciation_bn: "হোয়াই ক্যান্ট আই গো?",
              slotValues: { ACTION: "go" },
              topicArea: "travel",
            },
            {
              en: "Why can't I stay?",
              bn: "আমি কেন থাকতে পারি না?",
              pronunciation_bn: "হোয়াই ক্যান্ট আই স্টে?",
              slotValues: { ACTION: "stay" },
              topicArea: "relationships",
            },
            {
              en: "Why can't I try?",
              bn: "আমি কেন চেষ্টা করতে পারি না?",
              pronunciation_bn: "হোয়াই ক্যান্ট আই ট্রাই?",
              slotValues: { ACTION: "try" },
              topicArea: "education",
            },
          ],
        },
      ],
      answerTemplates: [
        {
          situation_bn: "যখন কেউ 'Why' দিয়ে কারণ জানতে চায়",
          question: "Why do you work so hard?",
          question_bn: "তুমি কেন এত কাজ করো?",
          answerFormula: "Because [REASON].",
          answerFormula_bn: "কারণ [কারণ]।",
          pronunciation_bn: "বিকজ [কারণ]।",
          examples: [
            { answer: "Because I'm tired.", answer_bn: "কারণ আমি ক্লান্ত।", pronunciation_bn: "বিকজ আইম টায়ার্ড।" },
            { answer: "Because it's raining.", answer_bn: "কারণ বৃষ্টি হচ্ছে।", pronunciation_bn: "বিকজ ইটস রেইনিং।" },
            { answer: "Because I need money.", answer_bn: "কারণ আমার টাকা দরকার।", pronunciation_bn: "বিকজ আই নিড মানি।" },
          ],
        },
        {
          situation_bn: "যখন কাজের বাধ্যবাধকতা বলতে চাও",
          question: "Why are you leaving?",
          question_bn: "তুমি কেন চলে যাচ্ছো?",
          answerFormula: "Because I have to [ACTION].",
          answerFormula_bn: "কারণ আমাকে [কাজ] করতে হবে।",
          pronunciation_bn: "বিকজ আই হ্যাভ টু [কাজ]।",
          examples: [
            { answer: "Because I have to study.", answer_bn: "কারণ আমাকে পড়তে হবে।", pronunciation_bn: "বিকজ আই হ্যাভ টু স্টাডি।" },
            { answer: "Because I have to go home.", answer_bn: "কারণ আমাকে বাড়ি যেতে হবে।", pronunciation_bn: "বিকজ আই হ্যাভ টু গো হোম।" },
            { answer: "Because I have to work.", answer_bn: "কারণ আমাকে কাজ করতে হবে।", pronunciation_bn: "বিকজ আই হ্যাভ টু ওয়ার্ক।" },
          ],
        },
        {
          situation_bn: "যখন কারণ জানো না",
          question: "Why did he leave?",
          question_bn: "সে কেন চলে গেছে?",
          answerFormula: "I don't know why.",
          answerFormula_bn: "আমি জানি না কেন।",
          pronunciation_bn: "আই ডোন্ট নো হোয়াই।",
          examples: [
            { answer: "I don't know why.", answer_bn: "আমি জানি না কেন।", pronunciation_bn: "আই ডোন্ট নো হোয়াই।" },
            { answer: "I really don't know why.", answer_bn: "আমি সত্যিই জানি না কেন।", pronunciation_bn: "আই রিয়েলি ডোন্ট নো হোয়াই।" },
            { answer: "Nobody knows why.", answer_bn: "কেউ জানে না কেন।", pronunciation_bn: "নোবডি নোজ হোয়াই।" },
          ],
          notes_bn: "যখন সত্যিই কারণ জানো না তখন এটা ব্যবহার করো।",
        },
        {
          situation_bn: "যখন কোনো নির্দিষ্ট কারণ নেই",
          question: "Why are you smiling?",
          question_bn: "তুমি কেন হাসছো?",
          answerFormula: "No reason. / Just because.",
          answerFormula_bn: "এমনি। / কোনো কারণ নেই।",
          pronunciation_bn: "নো রিজন। / জাস্ট বিকজ।",
          examples: [
            { answer: "No reason.", answer_bn: "এমনি।", pronunciation_bn: "নো রিজন।" },
            { answer: "Just because.", answer_bn: "কোনো কারণ নেই।", pronunciation_bn: "জাস্ট বিকজ।" },
            { answer: "No particular reason.", answer_bn: "বিশেষ কোনো কারণ নেই।", pronunciation_bn: "নো পার্টিকুলার রিজন।" },
          ],
          notes_bn: "খুব ক্যাজুয়াল উত্তর — বন্ধু বা পরিবারের সাথে ব্যবহার করো।",
        },
      ],
    },

    // ==================== G2.5 — কীভাবে (How) ====================
    {
      id: "G2.5",
      formula: "How do you [ACTION]?",
      formula_bn: "তুমি কীভাবে [কাজ] করো?",
      patternName: "Asking How (কীভাবে)",
      patternName_bn: "কীভাবে জিজ্ঞেস করা",
      concept_bn: "কীভাবে",
      slots: [
        {
          name: "ACTION",
          description: "A verb or verb phrase describing the process you want to know about",
          description_bn: "যে কাজের পদ্ধতি জানতে চাও",
          acceptedTypes: ["verb", "verb_phrase"],
          examples: [
            "cook rice",
            "go to the airport",
            "say this in English",
            "make tea",
            "use this app",
          ],
        },
      ],
      examples: [
        {
          en: "How do you cook rice?",
          bn: "তুমি কীভাবে ভাত রান্না করো?",
          pronunciation_bn: "হাও ডু ইউ কুক রাইস?",
          slotValues: { ACTION: "cook rice" },
          topicArea: "food",
          stage: 1,
          miniStory: { situation_bn: "তুমি বাড়িতে মেহমান এসেছে। তুমি ভাত রান্না করতে চাও কিন্তু জানো না কীভাবে। মা'কে জিজ্ঞেস করছো।", icon: "🍚" },
        },
        {
          en: "How do you go to work?",
          bn: "তুমি কীভাবে কাজে যাও?",
          pronunciation_bn: "হাও ডু ইউ গো টু ওয়ার্ক?",
          slotValues: { ACTION: "go to work" },
          topicArea: "work",
          stage: 1,
          miniStory: { situation_bn: "তুমি নতুন শহরে এসেছো, অফিস অনেক দূর। সহকর্মীকে জিজ্ঞেস করছো কীভাবে যেতে হয়।", icon: "🚌" },
        },
        {
          en: "How do you say this in English?",
          bn: "তুমি কীভাবে এটা ইংরেজিতে বলো?",
          pronunciation_bn: "হাও ডু ইউ সে দিস ইন ইংলিশ?",
          slotValues: { ACTION: "say this in English" },
          topicArea: "education",
          stage: 2,
          miniStory: {
            situation_bn: "তুমি ইংরেজি ক্লাসে বসে আছো। একটা বাংলা শব্দ ইংরেজিতে কীভাবে বলতে হয় জানো না। শিক্ষককে জিজ্ঞেস করছো।",
            icon: "📖",
          },
        },
        {
          en: "How do you stay healthy?",
          bn: "তুমি কীভাবে সুস্থ থাকো?",
          pronunciation_bn: "হাও ডু ইউ স্টে হেলদি?",
          slotValues: { ACTION: "stay healthy" },
          topicArea: "health",
          stage: 2,
          miniStory: { situation_bn: "তুমি তোমার প্রতিবেশীকে দেখো সে সবসময় ফিট থাকে। জানতে চাও তার সিক্রেট কী।", icon: "🏃" },
        },
        {
          en: "How do you save money?",
          bn: "তুমি কীভাবে টাকা জমাও?",
          pronunciation_bn: "হাও ডু ইউ সেভ মানি?",
          slotValues: { ACTION: "save money" },
          topicArea: "shopping",
          stage: 3,
          miniStory: {
            situation_bn: "তোমার সহকর্মী প্রতি মাসে কিছু টাকা জমায়। তোমার বিয়ের জন্য টাকা জমাতে হবে। তুমি তাকে জিজ্ঞেস করছো কীভাবে সে টাকা জমায়।",
            icon: "💰",
          },
        },
      ],
      formality: "casual",
      difficulty: "beginner",
      usageNote:
        "Use 'How do you...?' to ask about the method or way of doing something.",
      usageNote_bn:
        "কোনো কাজ করার পদ্ধতি বা উপায় জানতে 'How do you...?' ব্যবহার করো।",
      banglaStructureMap:
        "বাংলা: তুমি কীভাবে [কাজ] করো? → English: How do you [ACTION]?",
      conversionSteps: {
        banglaThought: "তুমি বাংলায় বলো: 'তুমি কীভাবে রান্না করো?'",
        steps: [
          {
            step_bn: "প্রশ্নবোধক শব্দ 'কীভাবে' = 'How' দিয়ে শুরু করো",
            result: "How",
          },
          {
            step_bn: "'do' যোগ করো (বর্তমান কাল, কাজের প্রশ্ন)",
            result: "How do",
          },
          {
            step_bn: "'you' যোগ করো (তুমি)",
            result: "How do you",
          },
          {
            step_bn: "কাজটা যোগ করো: 'রান্না করো' = 'cook'",
            result: "How do you cook?",
          },
        ],
        finalResult: "How do you cook?",
        finalResult_bn: "তুমি কীভাবে রান্না করো?",
      },
      commonMistakes: [
        {
          wrong: "How you cook?",
          correct: "How do you cook?",
          explanation_bn:
            "'do' বাদ দেওয়া যাবে না — ইংরেজিতে কাজের প্রশ্নে 'do' লাগবেই।",
        },
        {
          wrong: "You how cook?",
          correct: "How do you cook?",
          explanation_bn:
            "বাংলায় 'কীভাবে' মাঝখানে বসতে পারে, কিন্তু ইংরেজিতে 'How' সবসময় প্রথমে বসে।",
        },
        {
          wrong: "How are you cook?",
          correct: "How do you cook?",
          explanation_bn:
            "কাজের প্রশ্নে 'are' না, 'do' ব্যবহার করো। 'How are you?' আলাদা প্রশ্ন — সেটা কুশল জিজ্ঞেস করা।",
        },
      ],
      simpleRules: [
        {
          rule_bn: "বর্তমান → 'do' বা 'does' ব্যবহার করো",
          example: "How do you cook? / How does she cook?",
        },
        {
          rule_bn: "অতীত → 'did' ব্যবহার করো",
          example: "How did you learn English?",
        },
        {
          rule_bn: "ভবিষ্যৎ → 'will' ব্যবহার করো",
          example: "How will you go there?",
        },
      ],
      usageSituations: [
        {
          situation_bn: "পদ্ধতি জানতে",
          situation_en: "When asking about a method",
          exampleSentence: "How do you make biryani?",
          exampleSentence_bn: "তুমি কীভাবে বিরিয়ানি বানাও?",
        },
        {
          situation_bn: "পরামর্শ চাইতে",
          situation_en: "When asking for advice",
          exampleSentence: "How do you deal with stress?",
          exampleSentence_bn: "তুমি কীভাবে মানসিক চাপ সামলাও?",
        },
        {
          situation_bn: "কাজ শিখতে",
          situation_en: "When learning to do something",
          exampleSentence: "How do you use this machine?",
          exampleSentence_bn: "তুমি কীভাবে এই মেশিন ব্যবহার করো?",
        },
      ],
      sentenceBuilding: [
        {
          previousPatternId: "A1.1",
          previousFormula: "I want [THING]",
          previousFormula_bn: "আমি [জিনিস] চাই",
          combined: "How do you make tea? I want to learn.",
          combined_bn: "তুমি কীভাবে চা বানাও? আমি শিখতে চাই।",
        },
        {
          previousPatternId: "G2.4",
          previousFormula: "Why do you [ACTION]?",
          previousFormula_bn: "তুমি কেন [কাজ] করো?",
          combined: "How do you go to work? Why do you take the bus?",
          combined_bn: "তুমি কীভাবে কাজে যাও? তুমি কেন বাসে যাও?",
        },
        {
          previousPatternId: "G2.2",
          previousFormula: "Where is [THING]?",
          previousFormula_bn: "[জিনিস] কোথায়?",
          combined: "Where is the hospital? How can I get there?",
          combined_bn: "হাসপাতাল কোথায়? আমি কীভাবে সেখানে যেতে পারি?",
        },
      ],
      memoryTrick_bn:
        "মনে রাখো: 'How' = 'কীভাবে'। পদ্ধতি বা উপায় জানতে চাইলে 'How' ব্যবহার করো। 'How + do + তুমি + কাজ?' — এই ছক মনে রাখো।",
      chunks: [
        { en: "How do you", bn: "তুমি কীভাবে", pronunciation_bn: "হাও ডু ইউ" },
        { en: "How can I", bn: "আমি কীভাবে", pronunciation_bn: "হাও ক্যান আই" },
        { en: "How about", bn: "কেমন হয়", pronunciation_bn: "হাও অ্যাবাউট" },
        { en: "Could you tell me how", bn: "আপনি কি বলবেন কীভাবে", pronunciation_bn: "কুড ইউ টেল মি হাও" },
      ],
      bridgeRuleIds: ["BR1", "BR2", "BR3"],
      formulaPronunciation_bn: "হাও ডু ইউ [কাজ]?",
      wordMap: {
        bn_sentence: "তুমি কীভাবে যাও?",
        en_sentence: "How do you go?",
        mappings: [
          { bn_word: "কীভাবে", en_word: "How", type: "moved", bridgeRuleId: "BR2" },
          { bn_word: "(নেই)", en_word: "do", type: "added", bridgeRuleId: "BR3" },
          { bn_word: "তুমি", en_word: "you", type: "direct" },
          { bn_word: "যাও", en_word: "go", type: "direct" },
        ],
      },
      dialogueChains: [
        {
          id: "dc-g2.5-1",
          title_bn: "রান্না শেখা",
          title_en: "Learning to cook",
          situation_bn: "তুমি কারো কাছে রান্না শিখতে চাও",
          icon: "🍳",
          turns: [
            { speaker_bn: "তুমি", en: "How do you make tea?", bn: "তুমি কীভাবে চা বানাও?", pronunciation_bn: "হাও ডু ইউ মেক টি?", patternId: "G2.5" },
            { speaker_bn: "অন্যজন", en: "First, boil water.", bn: "প্রথমে পানি ফুটাও।", pronunciation_bn: "ফার্স্ট, বয়েল ওয়াটার।" },
            { speaker_bn: "তুমি", en: "How do you add the milk?", bn: "তুমি কীভাবে দুধ দাও?", pronunciation_bn: "হাও ডু ইউ অ্যাড দা মিল্ক?", patternId: "G2.5" },
            { speaker_bn: "অন্যজন", en: "Add it after the tea leaves.", bn: "চা পাতার পরে দাও।", pronunciation_bn: "অ্যাড ইট আফটার দা টি লিভস।" },
          ],
          patternsUsed: ["G2.5"],
        },
        {
          id: "dc-cross-3",
          title_bn: "ডাক্তারের কাছে",
          title_en: "At the Doctor",
          situation_bn: "তোমার পেটে ব্যথা হচ্ছে। তুমি ডাক্তারের চেম্বারে গেছো। ডাক্তার তোমাকে প্রশ্ন করছে।",
          icon: "🏥",
          turns: [
            { speaker_bn: "ডাক্তার", en: "What is your problem?", bn: "তোমার সমস্যা কী?", pronunciation_bn: "হোয়াট ইজ ইয়োর প্রবলেম?", patternId: "G2.1" },
            { speaker_bn: "তুমি", en: "I have stomach pain.", bn: "আমার পেটে ব্যথা।", pronunciation_bn: "আই হ্যাভ স্টমাক পেইন।" },
            { speaker_bn: "ডাক্তার", en: "When did the pain start?", bn: "ব্যথা কখন শুরু হয়েছে?", pronunciation_bn: "হোয়েন ডিড দা পেইন স্টার্ট?", patternId: "G2.3" },
            { speaker_bn: "তুমি", en: "Yesterday morning.", bn: "গতকাল সকালে।", pronunciation_bn: "ইয়েস্টারডে মর্নিং।" },
            { speaker_bn: "ডাক্তার", en: "How do you feel now?", bn: "এখন কেমন লাগছে?", pronunciation_bn: "হাও ডু ইউ ফিল নাও?", patternId: "G2.5" },
            { speaker_bn: "তুমি", en: "It hurts a lot.", bn: "অনেক ব্যথা করছে।", pronunciation_bn: "ইট হার্টস আ লট।" },
            { speaker_bn: "ডাক্তার", en: "How many times did you eat today?", bn: "আজকে কতবার খেয়েছো?", pronunciation_bn: "হাও মেনি টাইমস ডিড ইউ ইট টুডে?", patternId: "G2.9" },
            { speaker_bn: "তুমি", en: "Only one time.", bn: "মাত্র একবার।", pronunciation_bn: "ওনলি ওয়ান টাইম।" },
            { speaker_bn: "ডাক্তার", en: "Take this medicine three times a day.", bn: "এই ওষুধ দিনে তিনবার খাবে।", pronunciation_bn: "টেক দিস মেডিসিন থ্রি টাইমস আ ডে।" },
            { speaker_bn: "তুমি", en: "When should I come back?", bn: "কবে আবার আসবো?", pronunciation_bn: "হোয়েন শুড আই কাম ব্যাক?", patternId: "G2.3" },
          ],
          patternsUsed: ["G2.1", "G2.3", "G2.5", "G2.9"],
        },
      ],
      variations: [
        {
          variant: "past",
          label: "Past (অতীত)",
          label_bn: "অতীত",
          formula: "How did you [ACTION]?",
          formula_bn: "তুমি কীভাবে [কাজ] করেছিলে?",
          examples: [
            {
              en: "How did you learn English?",
              bn: "তুমি কীভাবে ইংরেজি শিখেছিলে?",
              pronunciation_bn: "হাও ডিড ইউ লার্ন ইংলিশ?",
              slotValues: { ACTION: "learn English" },
              topicArea: "education",
            },
            {
              en: "How did you come here?",
              bn: "তুমি কীভাবে এখানে এসেছিলে?",
              pronunciation_bn: "হাও ডিড ইউ কাম হিয়ার?",
              slotValues: { ACTION: "come here" },
              topicArea: "travel",
            },
            {
              en: "How did you fix it?",
              bn: "তুমি কীভাবে এটা ঠিক করেছিলে?",
              pronunciation_bn: "হাও ডিড ইউ ফিক্স ইট?",
              slotValues: { ACTION: "fix it" },
              topicArea: "daily_life",
            },
          ],
        },
        {
          variant: "future",
          label: "Future (ভবিষ্যৎ)",
          label_bn: "ভবিষ্যৎ",
          formula: "How will you [ACTION]?",
          formula_bn: "তুমি কীভাবে [কাজ] করবে?",
          examples: [
            {
              en: "How will you go to the airport?",
              bn: "তুমি কীভাবে এয়ারপোর্টে যাবে?",
              pronunciation_bn: "হাও উইল ইউ গো টু দা এয়ারপোর্ট?",
              slotValues: { ACTION: "go to the airport" },
              topicArea: "travel",
            },
            {
              en: "How will you pay?",
              bn: "তুমি কীভাবে টাকা দেবে?",
              pronunciation_bn: "হাও উইল ইউ পে?",
              slotValues: { ACTION: "pay" },
              topicArea: "shopping",
            },
            {
              en: "How will you manage?",
              bn: "তুমি কীভাবে সামলাবে?",
              pronunciation_bn: "হাও উইল ইউ ম্যানেজ?",
              slotValues: { ACTION: "manage" },
              topicArea: "work",
            },
          ],
        },
        {
          variant: "modal",
          label: "Modal (কীভাবে পারি)",
          label_bn: "কীভাবে পারি",
          formula: "How can I [VERB]?",
          formula_bn: "আমি কীভাবে [কাজ] করতে পারি?",
          examples: [
            {
              en: "How can I help you?",
              bn: "আমি কীভাবে আপনাকে সাহায্য করতে পারি?",
              pronunciation_bn: "হাও ক্যান আই হেল্প ইউ?",
              slotValues: { ACTION: "help you" },
              topicArea: "work",
            },
            {
              en: "How can I learn English?",
              bn: "আমি কীভাবে ইংরেজি শিখতে পারি?",
              pronunciation_bn: "হাও ক্যান আই লার্ন ইংলিশ?",
              slotValues: { ACTION: "learn English" },
              topicArea: "education",
            },
            {
              en: "How can I get there?",
              bn: "আমি কীভাবে সেখানে যেতে পারি?",
              pronunciation_bn: "হাও ক্যান আই গেট দেয়ার?",
              slotValues: { ACTION: "get there" },
              topicArea: "travel",
            },
          ],
        },
        {
          variant: "polite",
          label: "Polite (ভদ্র)",
          label_bn: "ভদ্র",
          formula: "Could you tell me how to [VERB]?",
          formula_bn: "আপনি কি বলবেন কীভাবে [কাজ] করতে হয়?",
          examples: [
            {
              en: "Could you tell me how to get to the airport?",
              bn: "আপনি কি বলবেন কীভাবে এয়ারপোর্টে যেতে হয়?",
              pronunciation_bn: "কুড ইউ টেল মি হাও টু গেট টু দা এয়ারপোর্ট?",
              slotValues: { ACTION: "get to the airport" },
              topicArea: "travel",
            },
            {
              en: "Could you tell me how to send money by bKash?",
              bn: "আপনি কি বলবেন কীভাবে বিকাশে টাকা পাঠাতে হয়?",
              pronunciation_bn: "কুড ইউ টেল মি হাও টু সেন্ড মানি বাই বিকাশ?",
              slotValues: { ACTION: "send money by bKash" },
              topicArea: "finance",
            },
            {
              en: "Could you tell me how to cook this?",
              bn: "আপনি কি বলবেন কীভাবে এটা রান্না করতে হয়?",
              pronunciation_bn: "কুড ইউ টেল মি হাও টু কুক দিস?",
              slotValues: { ACTION: "cook this" },
              topicArea: "food",
            },
          ],
        },
        {
          variant: "suggestion",
          label: "Suggestion (পরামর্শ)",
          label_bn: "পরামর্শ",
          formula: "How about [SUGGESTION]?",
          formula_bn: "[পরামর্শ] কেমন হয়?",
          examples: [
            {
              en: "How about after Jummah prayer?",
              bn: "জুম্মার নামাজের পরে কেমন হয়?",
              pronunciation_bn: "হাও অ্যাবাউট আফটার জুম্মাহ প্রেয়ার?",
              slotValues: { ACTION: "after Jummah prayer" },
              topicArea: "religion",
            },
            {
              en: "How about tea?",
              bn: "চা কেমন হয়?",
              pronunciation_bn: "হাও অ্যাবাউট টি?",
              slotValues: { ACTION: "tea" },
              topicArea: "food",
            },
            {
              en: "How about going to the park?",
              bn: "পার্কে যাওয়া কেমন হয়?",
              pronunciation_bn: "হাও অ্যাবাউট গোইং টু দা পার্ক?",
              slotValues: { ACTION: "going to the park" },
              topicArea: "travel",
            },
          ],
        },
      ],
      answerTemplates: [
        {
          situation_bn: "যখন কেউ 'How' দিয়ে পদ্ধতি জানতে চায়",
          question: "How do you go to work?",
          question_bn: "তুমি কীভাবে কাজে যাও?",
          answerFormula: "By [METHOD].",
          answerFormula_bn: "[পদ্ধতিতে]।",
          pronunciation_bn: "বাই [পদ্ধতি]।",
          examples: [
            { answer: "By bus.", answer_bn: "বাসে।", pronunciation_bn: "বাই বাস।" },
            { answer: "By hand.", answer_bn: "হাতে।", pronunciation_bn: "বাই হ্যান্ড।" },
            { answer: "By phone.", answer_bn: "ফোনে।", pronunciation_bn: "বাই ফোন।" },
          ],
        },
        {
          situation_bn: "যখন বিস্তারিত ব্যাখ্যা দিতে চাও",
          question: "How do you come here?",
          question_bn: "তুমি কীভাবে এখানে আসো?",
          answerFormula: "I [EXPLANATION].",
          answerFormula_bn: "আমি [ব্যাখ্যা]।",
          pronunciation_bn: "আই [ব্যাখ্যা]।",
          examples: [
            { answer: "I walk.", answer_bn: "আমি হেঁটে আসি।", pronunciation_bn: "আই ওয়াক।" },
            { answer: "I take the train.", answer_bn: "আমি ট্রেনে আসি।", pronunciation_bn: "আই টেক দা ট্রেন।" },
            { answer: "I use Google Maps.", answer_bn: "আমি গুগল ম্যাপস ব্যবহার করি।", pronunciation_bn: "আই ইউজ গুগল ম্যাপস।" },
          ],
        },
        {
          situation_bn: "যখন সাধারণ মূল্যায়ন দিতে চাও",
          question: "How do you cook biryani?",
          question_bn: "তুমি কীভাবে বিরিয়ানি বানাও?",
          answerFormula: "It's easy/hard.",
          answerFormula_bn: "এটা সহজ/কঠিন।",
          pronunciation_bn: "ইটস ইজি/হার্ড।",
          examples: [
            { answer: "It's easy.", answer_bn: "এটা সহজ।", pronunciation_bn: "ইটস ইজি।" },
            { answer: "It's hard.", answer_bn: "এটা কঠিন।", pronunciation_bn: "ইটস হার্ড।" },
            { answer: "It's not that hard.", answer_bn: "এটা অতটাও কঠিন না।", pronunciation_bn: "ইটস নট দ্যাট হার্ড।" },
          ],
        },
        {
          situation_bn: "যখন ধাপে ধাপে বলতে চাও",
          question: "How do you make tea?",
          question_bn: "তুমি কীভাবে চা বানাও?",
          answerFormula: "First [STEP1], then [STEP2].",
          answerFormula_bn: "প্রথমে [ধাপ১], তারপর [ধাপ২]।",
          pronunciation_bn: "ফার্স্ট [ধাপ১], দেন [ধাপ২]।",
          examples: [
            { answer: "First boil water, then add tea leaves.", answer_bn: "প্রথমে পানি ফুটাও, তারপর চা পাতা দাও।", pronunciation_bn: "ফার্স্ট বয়েল ওয়াটার, দেন অ্যাড টি লিভস।" },
            { answer: "First open the app, then click the button.", answer_bn: "প্রথমে অ্যাপ খোলো, তারপর বাটনে ক্লিক করো।", pronunciation_bn: "ফার্স্ট ওপেন দা অ্যাপ, দেন ক্লিক দা বাটন।" },
            { answer: "First wash the rice, then cook it.", answer_bn: "প্রথমে চাল ধোও, তারপর রান্না করো।", pronunciation_bn: "ফার্স্ট ওয়াশ দা রাইস, দেন কুক ইট।" },
          ],
        },
      ],
    },

    // ==================== G2.6 — কে (Who) ====================
    {
      id: "G2.6",
      formula: "Who is [PERSON]?",
      formula_bn: "[ব্যক্তি] কে?",
      patternName: "Asking Who (কে)",
      patternName_bn: "কে জিজ্ঞেস করা",
      concept_bn: "কে",
      slots: [
        {
          name: "PERSON",
          description:
            "A noun or noun phrase referring to a person whose identity you want to know",
          description_bn: "যে ব্যক্তির পরিচয় জানতে চাও",
          acceptedTypes: ["person", "noun", "noun_phrase"],
          examples: [
            "that man",
            "your teacher",
            "the manager",
            "she",
            "the new student",
          ],
        },
      ],
      examples: [
        {
          en: "Who is that man?",
          bn: "ওই লোকটা কে?",
          pronunciation_bn: "হু ইজ দ্যাট ম্যান?",
          slotValues: { PERSON: "that man" },
          topicArea: "relationships",
          stage: 1,
          miniStory: { situation_bn: "তুমি বিয়ের অনুষ্ঠানে গেছো। অনেক নতুন মুখ দেখছো।", icon: "💒" },
        },
        {
          en: "Who is your teacher?",
          bn: "তোমার শিক্ষক কে?",
          pronunciation_bn: "হু ইজ ইয়োর টিচার?",
          slotValues: { PERSON: "your teacher" },
          topicArea: "education",
          stage: 1,
          miniStory: { situation_bn: "তোমার বাচ্চা জানতে চায় ওই ব্যক্তি কে।", icon: "👨‍👧" },
        },
        {
          en: "Who is the manager here?",
          bn: "এখানকার ম্যানেজার কে?",
          pronunciation_bn: "হু ইজ দা ম্যানেজার হিয়ার?",
          slotValues: { PERSON: "the manager here" },
          topicArea: "work",
          stage: 2,
          miniStory: { situation_bn: "অফিসে নতুন একজন এসেছে। তুমি তার পরিচয় জানতে চাও।", icon: "🏢" },
        },
        {
          en: "Who is your best friend?",
          bn: "তোমার সবচেয়ে ভালো বন্ধু কে?",
          pronunciation_bn: "হু ইজ ইয়োর বেস্ট ফ্রেন্ড?",
          slotValues: { PERSON: "your best friend" },
          topicArea: "relationships",
          stage: 2,
          miniStory: {
            situation_bn: "রিকশায় বসে বন্ধুর সাথে গল্প করছো। স্কুলের কথা মনে পড়ছে। তুমি জানতে চাও তার সবচেয়ে ভালো বন্ধু কে।",
            icon: "🛺",
          },
        },
        {
          en: "Who is the doctor on duty?",
          bn: "ডিউটিতে কোন ডাক্তার আছেন?",
          pronunciation_bn: "হু ইজ দা ডক্টর অন ডিউটি?",
          slotValues: { PERSON: "the doctor on duty" },
          topicArea: "health",
          stage: 3,
          miniStory: {
            situation_bn: "রাত ২টায় তোমার বাবার বুকে ব্যথা শুরু হয়েছে। হাসপাতালের ইমার্জেন্সিতে গেছো। নার্সকে জিজ্ঞেস করছো ডিউটিতে কোন ডাক্তার আছেন।",
            icon: "🏥",
          },
        },
      ],
      formality: "casual",
      difficulty: "beginner",
      usageNote:
        "Use 'Who is...?' to ask about the identity of a person. When asking who did an action, use 'Who' as subject: 'Who called?'",
      usageNote_bn:
        "কোনো ব্যক্তির পরিচয় জানতে 'Who is...?' ব্যবহার করো। কে কাজ করেছে জানতে 'Who' সরাসরি ব্যবহার করো: 'Who called?'",
      banglaStructureMap: "বাংলা: [ব্যক্তি] কে? → English: Who is [PERSON]?",
      conversionSteps: {
        banglaThought: "তুমি বাংলায় বলো: 'ওই লোকটা কে?'",
        steps: [
          {
            step_bn: "প্রশ্নবোধক শব্দ 'কে' = 'Who' দিয়ে শুরু করো",
            result: "Who",
          },
          {
            step_bn: "'is' যোগ করো (বর্তমান কাল)",
            result: "Who is",
          },
          {
            step_bn: "বাকি অংশ যোগ করো: 'ওই লোকটা' = 'that man'",
            result: "Who is that man?",
          },
        ],
        finalResult: "Who is that man?",
        finalResult_bn: "ওই লোকটা কে?",
      },
      commonMistakes: [
        {
          wrong: "Who that man?",
          correct: "Who is that man?",
          explanation_bn:
            "'is' বাদ দেওয়া যাবে না — 'Who' এর পরে সবসময় is/was লাগে।",
        },
        {
          wrong: "That man who is?",
          correct: "Who is that man?",
          explanation_bn:
            "বাংলায় 'কে' শেষে বসে, কিন্তু ইংরেজিতে 'Who' সবসময় শুরুতে বসে।",
        },
        {
          wrong: "Who did call?",
          correct: "Who called?",
          explanation_bn:
            "'Who' যখন কাজের কর্তা (subject) হয়, তখন 'did' লাগে না — সরাসরি 'Who called?' বলো।",
        },
      ],
      simpleRules: [
        {
          rule_bn: "বর্তমান → 'is' ব্যবহার করো",
          example: "Who is your boss?",
        },
        {
          rule_bn: "অতীত → 'was' ব্যবহার করো",
          example: "Who was your teacher?",
        },
        {
          rule_bn:
            "কে কাজ করেছে জিজ্ঞেস করলে 'Who' দিয়ে শুরু করো, 'did' লাগে না",
          example: "Who called? / Who broke the glass?",
        },
      ],
      usageSituations: [
        {
          situation_bn: "কারো পরিচয় জানতে",
          situation_en: "When asking about someone's identity",
          exampleSentence: "Who is that woman?",
          exampleSentence_bn: "ওই মহিলা কে?",
        },
        {
          situation_bn: "দায়িত্বশীল ব্যক্তি চিনতে",
          situation_en: "When identifying the person in charge",
          exampleSentence: "Who is the owner of this shop?",
          exampleSentence_bn: "এই দোকানের মালিক কে?",
        },
        {
          situation_bn: "কে কাজ করেছে জানতে",
          situation_en: "When asking who did something",
          exampleSentence: "Who cooked this food?",
          exampleSentence_bn: "এই খাবার কে রান্না করেছে?",
        },
      ],
      sentenceBuilding: [
        {
          previousPatternId: "B1",
          previousFormula: "He/She is [DESCRIPTION]",
          previousFormula_bn: "সে [বর্ণনা]",
          combined: "Who is that man? He is the manager.",
          combined_bn: "ওই লোকটা কে? সে ম্যানেজার।",
        },
        {
          previousPatternId: "G2.4",
          previousFormula: "Why do you [ACTION]?",
          previousFormula_bn: "তুমি কেন [কাজ] করো?",
          combined: "Who called you? Why did they call?",
          combined_bn: "তোমাকে কে ফোন করেছে? তারা কেন ফোন করেছে?",
        },
        {
          previousPatternId: "G2.2",
          previousFormula: "Where is [THING]?",
          previousFormula_bn: "[জিনিস] কোথায়?",
          combined: "Who is the teacher? Where is the classroom?",
          combined_bn: "শিক্ষক কে? ক্লাসরুম কোথায়?",
        },
      ],
      memoryTrick_bn:
        "মনে রাখো: 'Who' = 'কে'। পরিচয় জানতে 'Who is...?' আর কাজ জানতে সরাসরি 'Who + কাজ?' (যেমন 'Who called?')।",
      chunks: [
        { en: "Who is", bn: "কে", pronunciation_bn: "হু ইজ" },
        { en: "Who is calling", bn: "কে ফোন করছে", pronunciation_bn: "হু ইজ কলিং" },
        { en: "Do you know who", bn: "তুমি কি জানো কে", pronunciation_bn: "ডু ইউ নো হু" },
      ],
      bridgeRuleIds: ["BR2", "BR3"],
      formulaPronunciation_bn: "হু ইজ [ব্যক্তি/জিনিস]?",
      wordMap: {
        bn_sentence: "এই লোকটা কে?",
        en_sentence: "Who is this person?",
        mappings: [
          { bn_word: "কে", en_word: "Who", type: "moved", bridgeRuleId: "BR2" },
          { bn_word: "(নেই)", en_word: "is", type: "added", bridgeRuleId: "BR3" },
          { bn_word: "এই", en_word: "this", type: "direct" },
          { bn_word: "লোকটা", en_word: "person", type: "direct" },
        ],
      },
      dialogueChains: [
        {
          id: "dc-g2.6-1",
          title_bn: "অচেনা কাউকে চেনা",
          title_en: "Identifying someone",
          situation_bn: "তুমি একটা অনুষ্ঠানে আছো, অচেনা কাউকে দেখছো",
          icon: "👤",
          turns: [
            { speaker_bn: "তুমি", en: "Who is that man?", bn: "ঐ লোকটা কে?", pronunciation_bn: "হু ইজ দ্যাট ম্যান?", patternId: "G2.6" },
            { speaker_bn: "বন্ধু", en: "He is my uncle.", bn: "উনি আমার চাচা।", pronunciation_bn: "হি ইজ মাই আঙ্কেল।" },
            { speaker_bn: "তুমি", en: "Who is the woman next to him?", bn: "তার পাশের মহিলা কে?", pronunciation_bn: "হু ইজ দা উম্যান নেক্সট টু হিম?", patternId: "G2.6" },
            { speaker_bn: "বন্ধু", en: "She is his wife.", bn: "উনি তার স্ত্রী।", pronunciation_bn: "শি ইজ হিজ ওয়াইফ।" },
          ],
          patternsUsed: ["G2.6"],
        },
        {
          id: "dc-cross-5",
          title_bn: "স্কুলে প্রথম দিন",
          title_en: "First Day at School",
          situation_bn: "তোমার ছেলেকে নতুন স্কুলে ভর্তি করেছো। আজ প্রথম দিন। তুমি স্কুলে গেছো, একজন শিক্ষকের সাথে কথা বলছো।",
          icon: "🏫",
          turns: [
            { speaker_bn: "তুমি", en: "What is the name of this school?", bn: "এই স্কুলের নাম কী?", pronunciation_bn: "হোয়াট ইজ দা নেইম অফ দিস স্কুল?", patternId: "G2.1" },
            { speaker_bn: "শিক্ষক", en: "Green Valley School.", bn: "গ্রিন ভ্যালি স্কুল।", pronunciation_bn: "গ্রিন ভ্যালি স্কুল।" },
            { speaker_bn: "তুমি", en: "Who is my son's teacher?", bn: "আমার ছেলের শিক্ষক কে?", pronunciation_bn: "হু ইজ মাই সান্স টিচার?", patternId: "G2.6" },
            { speaker_bn: "শিক্ষক", en: "I am his class teacher.", bn: "আমি তার ক্লাস টিচার।", pronunciation_bn: "আই অ্যাম হিজ ক্লাস টিচার।" },
            { speaker_bn: "তুমি", en: "Where is his classroom?", bn: "তার ক্লাসরুম কোথায়?", pronunciation_bn: "হোয়্যার ইজ হিজ ক্লাসরুম?", patternId: "G2.2" },
            { speaker_bn: "শিক্ষক", en: "Room 5, on the second floor.", bn: "রুম ৫, দোতলায়।", pronunciation_bn: "রুম ফাইভ, অন দা সেকেন্ড ফ্লোর।" },
            { speaker_bn: "তুমি", en: "When does school start?", bn: "স্কুল কখন শুরু হয়?", pronunciation_bn: "হোয়েন ডাজ স্কুল স্টার্ট?", patternId: "G2.3" },
            { speaker_bn: "শিক্ষক", en: "At 8 o'clock in the morning.", bn: "সকাল ৮টায়।", pronunciation_bn: "অ্যাট এইট ও'ক্লক ইন দা মর্নিং।" },
            { speaker_bn: "তুমি", en: "When does school finish?", bn: "স্কুল কখন শেষ হয়?", pronunciation_bn: "হোয়েন ডাজ স্কুল ফিনিশ?", patternId: "G2.3" },
            { speaker_bn: "শিক্ষক", en: "At 2 o'clock.", bn: "দুপুর ২টায়।", pronunciation_bn: "অ্যাট টু ও'ক্লক।" },
          ],
          patternsUsed: ["G2.1", "G2.6", "G2.2", "G2.3"],
        },
      ],
      variations: [
        {
          variant: "past",
          label: "Past (অতীত)",
          label_bn: "অতীত",
          formula: "Who was [PERSON]?",
          formula_bn: "[ব্যক্তি] কে ছিল?",
          examples: [
            {
              en: "Who was your first teacher?",
              bn: "তোমার প্রথম শিক্ষক কে ছিল?",
              pronunciation_bn: "হু ওয়াজ ইয়োর ফার্স্ট টিচার?",
              slotValues: { PERSON: "your first teacher" },
              topicArea: "education",
            },
            {
              en: "Who was the previous manager?",
              bn: "আগের ম্যানেজার কে ছিল?",
              pronunciation_bn: "হু ওয়াজ দা প্রিভিয়াস ম্যানেজার?",
              slotValues: { PERSON: "the previous manager" },
              topicArea: "work",
            },
            {
              en: "Who was that on the phone?",
              bn: "ফোনে কে ছিল?",
              pronunciation_bn: "হু ওয়াজ দ্যাট অন দা ফোন?",
              slotValues: { PERSON: "that on the phone" },
              topicArea: "relationships",
            },
          ],
        },
        {
          variant: "past_action",
          label: "Past Action (কে করেছে)",
          label_bn: "কে করেছে",
          formula: "Who [PAST ACTION]?",
          formula_bn: "কে [কাজ করেছে]?",
          examples: [
            {
              en: "Who called you?",
              bn: "তোমাকে কে ফোন করেছে?",
              pronunciation_bn: "হু কলড ইউ?",
              slotValues: { "PAST ACTION": "called you" },
              topicArea: "relationships",
            },
            {
              en: "Who cooked this food?",
              bn: "এই খাবার কে রান্না করেছে?",
              pronunciation_bn: "হু কুকড দিস ফুড?",
              slotValues: { "PAST ACTION": "cooked this food" },
              topicArea: "food",
            },
            {
              en: "Who told you this?",
              bn: "তোমাকে এটা কে বলেছে?",
              pronunciation_bn: "হু টোল্ড ইউ দিস?",
              slotValues: { "PAST ACTION": "told you this" },
              topicArea: "relationships",
            },
          ],
        },
        {
          variant: "present_continuous",
          label: "Present Continuous (চলমান)",
          label_bn: "চলমান",
          formula: "Who is [VERB]-ing?",
          formula_bn: "কে [কাজ] করছে?",
          examples: [
            {
              en: "Who is calling?",
              bn: "কে ফোন করছে?",
              pronunciation_bn: "হু ইজ কলিং?",
              slotValues: { ACTION: "calling" },
              topicArea: "relationships",
            },
            {
              en: "Who is coming?",
              bn: "কে আসছে?",
              pronunciation_bn: "হু ইজ কামিং?",
              slotValues: { ACTION: "coming" },
              topicArea: "relationships",
            },
            {
              en: "Who is giving the Eid khutba?",
              bn: "ঈদের খুতবা কে দিচ্ছেন?",
              pronunciation_bn: "হু ইজ গিভিং দা ঈদ খুতবা?",
              slotValues: { ACTION: "giving the Eid khutba" },
              topicArea: "religion",
            },
          ],
        },
        {
          variant: "past_simple",
          label: "Past Simple (কে করেছে — সংক্ষিপ্ত)",
          label_bn: "কে করেছে — সংক্ষিপ্ত",
          formula: "Who [PAST_VERB]?",
          formula_bn: "কে [কাজ] করেছিল?",
          examples: [
            {
              en: "Who called?",
              bn: "কে ফোন করেছিল?",
              pronunciation_bn: "হু কলড?",
              slotValues: { ACTION: "called" },
              topicArea: "relationships",
            },
            {
              en: "Who told you?",
              bn: "তোমাকে কে বলেছিল?",
              pronunciation_bn: "হু টোল্ড ইউ?",
              slotValues: { ACTION: "told you" },
              topicArea: "relationships",
            },
            {
              en: "Who broke this?",
              bn: "এটা কে ভেঙেছে?",
              pronunciation_bn: "হু ব্রোক দিস?",
              slotValues: { ACTION: "broke this" },
              topicArea: "relationships",
            },
          ],
        },
      ],
      answerTemplates: [
        {
          situation_bn: "যখন কেউ 'Who' দিয়ে পরিচয় জানতে চায়",
          question: "Who is that man?",
          question_bn: "ওই লোকটা কে?",
          answerFormula: "He/She is [DESCRIPTION].",
          answerFormula_bn: "সে [বর্ণনা]।",
          pronunciation_bn: "হি/শি ইজ [বর্ণনা]।",
          examples: [
            { answer: "He is my brother.", answer_bn: "সে আমার ভাই।", pronunciation_bn: "হি ইজ মাই ব্রাদার।" },
            { answer: "She is my teacher.", answer_bn: "উনি আমার শিক্ষক।", pronunciation_bn: "শি ইজ মাই টিচার।" },
            { answer: "He is the boss.", answer_bn: "উনি বস।", pronunciation_bn: "হি ইজ দা বস।" },
          ],
        },
        {
          situation_bn: "যখন নাম বলতে চাও",
          question: "Who is she?",
          question_bn: "সে কে?",
          answerFormula: "He/She is [NAME].",
          answerFormula_bn: "সে [নাম]।",
          pronunciation_bn: "হি/শি ইজ [নাম]।",
          examples: [
            { answer: "He is Rahim.", answer_bn: "সে রহিম।", pronunciation_bn: "হি ইজ রাহিম।" },
            { answer: "She is Fatema.", answer_bn: "সে ফাতেমা।", pronunciation_bn: "শি ইজ ফাতেমা।" },
            { answer: "He is Karim bhai.", answer_bn: "উনি করিম ভাই।", pronunciation_bn: "হি ইজ করিম ভাই।" },
          ],
        },
        {
          situation_bn: "যখন জানো না",
          question: "Who is that person?",
          question_bn: "ওই লোকটা কে?",
          answerFormula: "I don't know.",
          answerFormula_bn: "আমি জানি না।",
          pronunciation_bn: "আই ডোন্ট নো।",
          examples: [
            { answer: "I don't know.", answer_bn: "আমি জানি না।", pronunciation_bn: "আই ডোন্ট নো।" },
            { answer: "I have no idea.", answer_bn: "আমার কোনো ধারণা নেই।", pronunciation_bn: "আই হ্যাভ নো আইডিয়া।" },
            { answer: "I'm not sure.", answer_bn: "আমি নিশ্চিত না।", pronunciation_bn: "আইম নট শিওর।" },
          ],
          notes_bn: "যখন সত্যিই চেনো না তখন এটা বলো।",
        },
        {
          situation_bn: "যখন নাম ও সম্পর্ক দুটোই বলতে চাও",
          question: "Who is that woman?",
          question_bn: "ওই মহিলা কে?",
          answerFormula: "That's [NAME], my [RELATION].",
          answerFormula_bn: "ওটা [নাম], আমার [সম্পর্ক]।",
          pronunciation_bn: "দ্যাটস [নাম], মাই [সম্পর্ক]।",
          examples: [
            { answer: "That's Rina, my sister.", answer_bn: "ওটা রিনা, আমার বোন।", pronunciation_bn: "দ্যাটস রিনা, মাই সিস্টার।" },
            { answer: "That's Kamal, my friend.", answer_bn: "ওটা কামাল, আমার বন্ধু।", pronunciation_bn: "দ্যাটস কামাল, মাই ফ্রেন্ড।" },
            { answer: "That's Mrs. Khan, my neighbor.", answer_bn: "ওটা মিসেস খান, আমার প্রতিবেশী।", pronunciation_bn: "দ্যাটস মিসেস খান, মাই নেইবার।" },
          ],
        },
      ],
    },

    // ==================== G2.7 — কার (Whose) ====================
    {
      id: "G2.7",
      formula: "Whose [THING] is this?",
      formula_bn: "এটা কার [জিনিস]?",
      patternName: "Asking Whose (কার)",
      patternName_bn: "কার জিজ্ঞেস করা",
      concept_bn: "কার",
      slots: [
        {
          name: "THING",
          description:
            "A noun referring to the object whose owner you want to identify",
          description_bn: "যে জিনিসের মালিক জানতে চাও",
          acceptedTypes: ["noun", "noun_phrase"],
          examples: ["bag", "phone", "car", "book", "pen"],
        },
      ],
      examples: [
        {
          en: "Whose bag is this?",
          bn: "এটা কার ব্যাগ?",
          pronunciation_bn: "হুজ ব্যাগ ইজ দিস?",
          slotValues: { THING: "bag" },
          topicArea: "education",
          stage: 1,
          miniStory: {
            situation_bn: "ক্লাসরুমে একটা ব্যাগ পড়ে আছে। কেউ জানে না এটা কার।",
            icon: "🎒",
          },
        },
        {
          en: "Whose phone is this?",
          bn: "এটা কার ফোন?",
          pronunciation_bn: "হুজ ফোন ইজ দিস?",
          slotValues: { THING: "phone" },
          topicArea: "religion",
          stage: 1,
          miniStory: {
            situation_bn: "মসজিদে নামাজ পড়ার পর দেখো একটা মোবাইল ফোন পড়ে আছে। কেউ ভুলে রেখে গেছে। তুমি পাশের লোককে জিজ্ঞেস করছো এটা কার।",
            icon: "🕌",
          },
        },
        {
          en: "Whose car is this?",
          bn: "এটা কার গাড়ি?",
          pronunciation_bn: "হুজ কার ইজ দিস?",
          slotValues: { THING: "car" },
          topicArea: "travel",
          stage: 2,
          miniStory: {
            situation_bn: "তোমার বাচ্চা অন্যের জিনিস নিয়ে খেলছে। মা জানতে চায় এটা কার।",
            icon: "👶",
          },
        },
        {
          en: "Whose book is this?",
          bn: "এটা কার বই?",
          pronunciation_bn: "হুজ বুক ইজ দিস?",
          slotValues: { THING: "book" },
          topicArea: "education",
          stage: 2,
          miniStory: {
            situation_bn: "স্কুলের লাইব্রেরিতে একটা বই টেবিলে পড়ে আছে। নাম লেখা নেই। তুমি লাইব্রেরিয়ানকে দেখাচ্ছো এটা কার বই।",
            icon: "📚",
          },
        },
        {
          en: "Whose lunch box is this?",
          bn: "এটা কার লাঞ্চ বক্স?",
          pronunciation_bn: "হুজ লাঞ্চ বক্স ইজ দিস?",
          slotValues: { THING: "lunch box" },
          topicArea: "food",
          stage: 3,
          miniStory: {
            situation_bn: "অফিসের ক্যান্টিনে টেবিলে একটা লাঞ্চ বক্স পড়ে আছে। কেউ রেখে গেছে। তুমি জানতে চাও এটা কার।",
            icon: "🍱",
          },
        },
      ],
      formality: "casual",
      difficulty: "beginner",
      usageNote:
        "Use 'Whose [THING] is this?' to ask about ownership. Don't confuse 'whose' (ownership) with 'who's' (who is).",
      usageNote_bn:
        "কোনো জিনিসের মালিক জানতে 'Whose [জিনিস] is this?' ব্যবহার করো। 'whose' (কার) আর 'who's' (কে) গুলিয়ে ফেলো না।",
      banglaStructureMap:
        "বাংলা: এটা কার [জিনিস]? → English: Whose [THING] is this?",
      conversionSteps: {
        banglaThought: "তুমি বাংলায় বলো: 'এটা কার ব্যাগ?'",
        steps: [
          {
            step_bn: "প্রশ্নবোধক শব্দ 'কার' = 'Whose' দিয়ে শুরু করো",
            result: "Whose",
          },
          {
            step_bn: "জিনিসটা যোগ করো: 'ব্যাগ' = 'bag'",
            result: "Whose bag",
          },
          {
            step_bn: "'is this?' যোগ করো (এটা কি?)",
            result: "Whose bag is this?",
          },
        ],
        finalResult: "Whose bag is this?",
        finalResult_bn: "এটা কার ব্যাগ?",
      },
      commonMistakes: [
        {
          wrong: "Who's bag is this?",
          correct: "Whose bag is this?",
          explanation_bn:
            "'who's' = 'who is' (কে), 'whose' = মালিকানা (কার)। মালিকানার প্রশ্নে 'whose' লেখো।",
        },
        {
          wrong: "This is whose bag?",
          correct: "Whose bag is this?",
          explanation_bn:
            "বাংলায় 'কার' মাঝে বসতে পারে, কিন্তু ইংরেজিতে 'Whose' সবসময় শুরুতে বসে।",
        },
        {
          wrong: "Whose is this bag?",
          correct: "Whose bag is this?",
          explanation_bn:
            "'Whose' এর ঠিক পরে জিনিসটার নাম বসে, তারপর 'is this?'।",
        },
      ],
      simpleRules: [
        {
          rule_bn: "whose = মালিকানা (কার), who's = who is (কে)",
          example: "Whose pen is this? vs Who's coming?",
        },
        {
          rule_bn: "'Whose' দিয়ে শুরু করো, তারপর জিনিসটার নাম, শেষে 'is this?'",
          example: "Whose umbrella is this?",
        },
        {
          rule_bn: "অতীতে → 'was' ব্যবহার করো",
          example: "Whose idea was this?",
        },
      ],
      usageSituations: [
        {
          situation_bn: "হারানো জিনিস ফেরত দিতে",
          situation_en: "When returning a lost item",
          exampleSentence: "Whose wallet is this?",
          exampleSentence_bn: "এটা কার মানিব্যাগ?",
        },
        {
          situation_bn: "মালিক চিনতে",
          situation_en: "When identifying the owner",
          exampleSentence: "Whose car is parked outside?",
          exampleSentence_bn: "বাইরে কার গাড়ি পার্ক করা?",
        },
        {
          situation_bn: "অফিসে জিনিস চিনতে",
          situation_en: "When identifying items at the office",
          exampleSentence: "Whose cup is this on my desk?",
          exampleSentence_bn: "আমার ডেস্কে এটা কার কাপ?",
        },
      ],
      sentenceBuilding: [
        {
          previousPatternId: "B1",
          previousFormula: "It is [DESCRIPTION]",
          previousFormula_bn: "এটা [বর্ণনা]",
          combined: "Whose phone is this? It is mine.",
          combined_bn: "এটা কার ফোন? এটা আমার।",
        },
        {
          previousPatternId: "G2.6",
          previousFormula: "Who is [PERSON]?",
          previousFormula_bn: "[ব্যক্তি] কে?",
          combined: "Whose bag is this? Who is the owner?",
          combined_bn: "এটা কার ব্যাগ? মালিক কে?",
        },
        {
          previousPatternId: "A1.1",
          previousFormula: "I want [THING]",
          previousFormula_bn: "আমি [জিনিস] চাই",
          combined: "Whose turn is it to cook? I want to rest today.",
          combined_bn: "এবার কার পালা রান্না করার? আমি আজ বিশ্রাম নিতে চাই।",
        },
      ],
      memoryTrick_bn:
        "মনে রাখো: 'Whose' = 'কার' (মালিকানা)। 'Who's' আর 'Whose' গুলিয়ে ফেলো না — 'who's' = 'who is', 'whose' = 'কার'।",
      chunks: [
        { en: "Whose", bn: "কার", pronunciation_bn: "হুজ" },
        { en: "is this", bn: "এটা", pronunciation_bn: "ইজ দিস" },
        { en: "Whose turn is it", bn: "এবার কার পালা", pronunciation_bn: "হুজ টার্ন ইজ ইট" },
      ],
      bridgeRuleIds: ["BR1", "BR2", "BR3"],
      formulaPronunciation_bn: "হুজ [জিনিস] ইজ দিস?",
      wordMap: {
        bn_sentence: "এটা কার বই?",
        en_sentence: "Whose book is this?",
        mappings: [
          { bn_word: "কার", en_word: "Whose", type: "moved", bridgeRuleId: "BR2" },
          { bn_word: "বই", en_word: "book", type: "direct" },
          { bn_word: "(নেই)", en_word: "is", type: "added", bridgeRuleId: "BR3" },
          { bn_word: "এটা", en_word: "this", type: "moved", bridgeRuleId: "BR1" },
        ],
      },
      dialogueChains: [
        {
          id: "dc-g2.7-1",
          title_bn: "হারানো জিনিস খুঁজতে",
          title_en: "Finding lost items",
          situation_bn: "ক্লাসরুমে কারো জিনিস পড়ে আছে, তুমি মালিক খুঁজছো",
          icon: "🔍",
          turns: [
            { speaker_bn: "তুমি", en: "Whose bag is this?", bn: "এটা কার ব্যাগ?", pronunciation_bn: "হুজ ব্যাগ ইজ দিস?", patternId: "G2.7" },
            { speaker_bn: "ছাত্র", en: "It is not mine.", bn: "এটা আমার না।", pronunciation_bn: "ইট ইজ নট মাইন।" },
            { speaker_bn: "তুমি", en: "Whose phone is this?", bn: "এটা কার ফোন?", pronunciation_bn: "হুজ ফোন ইজ দিস?", patternId: "G2.7" },
            { speaker_bn: "ছাত্র", en: "That is Rahim's phone.", bn: "ওটা রহিমের ফোন।", pronunciation_bn: "দ্যাট ইজ রহিমস ফোন।" },
          ],
          patternsUsed: ["G2.7"],
        },
        {
          id: "G2.7-dc-lost",
          title_bn: "বাসে হারানো জিনিস",
          title_en: "Lost Item on Bus",
          situation_bn: "বাসে একটা ব্যাগ পড়ে আছে। কার ব্যাগ খুঁজছো।",
          icon: "🎒",
          turns: [
            { speaker_bn: "তুমি", en: "Whose bag is this?", bn: "এটা কার ব্যাগ?", pronunciation_bn: "হুজ ব্যাগ ইজ দিস?", patternId: "G2.7" },
            { speaker_bn: "যাত্রী", en: "I don't know. It's not mine.", bn: "জানি না। আমার না।", pronunciation_bn: "আই ডোন্ট নো। ইটস নট মাইন।" },
            { speaker_bn: "তুমি", en: "Whose seat was this?", bn: "এই সিটে কে বসেছিল?", pronunciation_bn: "হুজ সিট ওয়াজ দিস?", patternId: "G2.7" },
            { speaker_bn: "কন্ডাক্টর", en: "Someone got off at the last stop.", bn: "গত স্টপে কেউ নেমে গেছে।", pronunciation_bn: "সামওয়ান গট অফ অ্যাট দা লাস্ট স্টপ।" },
          ],
          patternsUsed: ["G2.7"],
        },
      ],
      answerTemplates: [
        {
          situation_bn:
            "যখন কেউ 'Whose [THING] is this?' জিজ্ঞেস করে এবং তুমি মালিকের নাম জানো",
          question: "Whose bag is this?",
          question_bn: "এটা কার ব্যাগ?",
          answerFormula: "It's [PERSON]'s.",
          answerFormula_bn: "এটা [ব্যক্তির]।",
          pronunciation_bn: "ইটস [ব্যক্তির]স।",
          examples: [
            {
              answer: "It's Rahim's.",
              answer_bn: "এটা রহিমের।",
              pronunciation_bn: "ইটস রহিমস।",
            },
            {
              answer: "It's my mother's.",
              answer_bn: "এটা আমার মায়ের।",
              pronunciation_bn: "ইটস মাই মাদার্স।",
            },
            {
              answer: "It's the teacher's.",
              answer_bn: "এটা শিক্ষকের।",
              pronunciation_bn: "ইটস দা টিচার্স।",
            },
          ],
        },
        {
          situation_bn:
            "যখন কেউ 'Whose is this?' জিজ্ঞেস করে এবং তুমি সর্বনাম দিয়ে উত্তর দিতে চাও",
          question: "Whose phone is this?",
          question_bn: "এটা কার ফোন?",
          answerFormula: "It's mine/yours/his/hers.",
          answerFormula_bn: "এটা আমার/তোমার/তার।",
          pronunciation_bn: "ইটস মাইন/ইয়োর্স/হিজ/হার্স।",
          examples: [
            {
              answer: "It's mine.",
              answer_bn: "এটা আমার।",
              pronunciation_bn: "ইটস মাইন।",
            },
            {
              answer: "It's his.",
              answer_bn: "এটা তার (পুরুষ)।",
              pronunciation_bn: "ইটস হিজ।",
            },
            {
              answer: "It's yours.",
              answer_bn: "এটা তোমার।",
              pronunciation_bn: "ইটস ইয়োর্স।",
            },
          ],
        },
        {
          situation_bn: "যখন তুমি জানো না জিনিসটা কার",
          question: "Whose umbrella is this?",
          question_bn: "এটা কার ছাতা?",
          answerFormula: "I don't know whose it is.",
          answerFormula_bn: "আমি জানি না এটা কার।",
          pronunciation_bn: "আই ডোন্ট নো হুজ ইট ইজ।",
          examples: [
            {
              answer: "I don't know whose it is.",
              answer_bn: "আমি জানি না এটা কার।",
              pronunciation_bn: "আই ডোন্ট নো হুজ ইট ইজ।",
            },
          ],
          notes_bn:
            "জানো না বলতে 'I don't know whose it is' — এখানে 'whose' এর পরে সাধারণ ক্রম (it is), প্রশ্নের ক্রম না।",
        },
      ],
      variations: [
        {
          variant: "past",
          label: "Past (অতীত)",
          label_bn: "অতীত",
          formula: "Whose [THING] was this?",
          formula_bn: "এটা কার [জিনিস] ছিল?",
          examples: [
            {
              en: "Whose idea was this?",
              bn: "এটা কার আইডিয়া ছিল?",
              pronunciation_bn: "হুজ আইডিয়া ওয়াজ দিস?",
              slotValues: { THING: "idea" },
              topicArea: "work",
            },
            {
              en: "Whose salary was this?",
              bn: "এটা কার বেতন ছিল?",
              pronunciation_bn: "হুজ স্যালারি ওয়াজ দিস?",
              slotValues: { THING: "salary" },
              topicArea: "finance",
            },
            {
              en: "Whose fault was this?",
              bn: "এটা কার দোষ ছিল?",
              pronunciation_bn: "হুজ ফল্ট ওয়াজ দিস?",
              slotValues: { THING: "fault" },
              topicArea: "relationships",
            },
          ],
        },
        {
          variant: "whose_turn",
          label: "Whose Turn (কার পালা)",
          label_bn: "কার পালা",
          formula: "Whose turn is it to [VERB]?",
          formula_bn: "এবার কার পালা [কাজ] করার?",
          examples: [
            {
              en: "Whose turn is it to cook?",
              bn: "এবার কার পালা রান্না করার?",
              pronunciation_bn: "হুজ টার্ন ইজ ইট টু কুক?",
              slotValues: { VERB: "cook" },
              topicArea: "food",
            },
            {
              en: "Whose turn is it to clean?",
              bn: "এবার কার পালা পরিষ্কার করার?",
              pronunciation_bn: "হুজ টার্ন ইজ ইট টু ক্লিন?",
              slotValues: { VERB: "clean" },
              topicArea: "relationships",
            },
            {
              en: "Whose turn is it to pay?",
              bn: "এবার কার পালা টাকা দেওয়ার?",
              pronunciation_bn: "হুজ টার্ন ইজ ইট টু পে?",
              slotValues: { VERB: "pay" },
              topicArea: "shopping",
            },
          ],
        },
      ],
    },

    // ==================== G2.8 — কোনটা (Which) ====================
    {
      id: "G2.8",
      formula: "Which [THING] do you [ACTION]?",
      formula_bn: "তুমি কোন [জিনিস] [কাজ] করো?",
      patternName: "Asking Which (কোনটা)",
      patternName_bn: "কোনটা জিজ্ঞেস করা",
      concept_bn: "কোনটা",
      slots: [
        {
          name: "THING",
          description:
            "A noun referring to the category from which a choice is made",
          description_bn: "যে ধরনের জিনিস থেকে বেছে নিতে চাও",
          acceptedTypes: ["noun", "noun_phrase"],
          examples: ["color", "shirt", "bus", "book", "restaurant"],
        },
        {
          name: "ACTION",
          description: "A verb or verb phrase describing the action",
          description_bn: "যে কাজ করতে চাও",
          acceptedTypes: ["verb", "verb_phrase"],
          examples: ["like", "want", "prefer", "take", "recommend"],
        },
      ],
      examples: [
        {
          en: "Which color do you like?",
          bn: "তুমি কোন রং পছন্দ করো?",
          pronunciation_bn: "হুইচ কালার ডু ইউ লাইক?",
          slotValues: { THING: "color", ACTION: "like" },
          topicArea: "shopping",
          stage: 1,
          miniStory: {
            situation_bn:
              "দোকানে দুটো শার্ট পছন্দ হয়েছে। তুমি একটা বেছে নিতে চাও।",
            icon: "👔",
          },
        },
        {
          en: "Which bus do you take?",
          bn: "তুমি কোন বাসে যাও?",
          pronunciation_bn: "হুইচ বাস ডু ইউ টেক?",
          slotValues: { THING: "bus", ACTION: "take" },
          topicArea: "travel",
          stage: 1,
          miniStory: {
            situation_bn: "তুমি গাবতলী বাস স্ট্যান্ডে দাঁড়িয়ে আছো। অনেকগুলো বাস যাচ্ছে। পাশের লোককে জিজ্ঞেস করছো কোন বাসে চট্টগ্রাম যায়।",
            icon: "🚌",
          },
        },
        {
          en: "Which subject do you like?",
          bn: "তুমি কোন বিষয় পছন্দ করো?",
          pronunciation_bn: "হুইচ সাবজেক্ট ডু ইউ লাইক?",
          slotValues: { THING: "subject", ACTION: "like" },
          topicArea: "education",
          stage: 2,
          miniStory: { situation_bn: "তুমি স্কুলে বন্ধুর সাথে কথা বলছো। পড়াশোনার কথা হচ্ছে। কোন বিষয় ভালো লাগে জানতে চাও।", icon: "📖" },
        },
        {
          en: "Which restaurant do you recommend?",
          bn: "তুমি কোন রেস্টুরেন্ট সাজেস্ট করো?",
          pronunciation_bn: "হুইচ রেস্টুরেন্ট ডু ইউ রেকমেন্ড?",
          slotValues: { THING: "restaurant", ACTION: "recommend" },
          topicArea: "food",
          stage: 2,
          miniStory: {
            situation_bn: "অফিসের কাজ শেষে সহকর্মীরা মিলে বাইরে খেতে যেতে চাও। কেউ একজন এই এলাকার রেস্টুরেন্ট চেনে। তাকে জিজ্ঞেস করছো কোনটা ভালো।",
            icon: "🍽️",
          },
        },
        {
          en: "Which shift do you work?",
          bn: "তুমি কোন শিফটে কাজ করো?",
          pronunciation_bn: "হুইচ শিফট ডু ইউ ওয়ার্ক?",
          slotValues: { THING: "shift", ACTION: "work" },
          topicArea: "work",
          stage: 3,
          miniStory: {
            situation_bn:
              "তুমি গার্মেন্টস ফ্যাক্টরিতে নতুন জয়েন করেছো। জানতে চাও তোমার নতুন সহকর্মী কোন শিফটে কাজ করে।",
            icon: "🏭",
          },
        },
      ],
      formality: "casual",
      difficulty: "beginner",
      usageNote:
        "Use 'Which...?' when choosing from specific options. Use 'What...?' for open-ended questions.",
      usageNote_bn:
        "নির্দিষ্ট কিছু বিকল্প থেকে বেছে নেওয়ার সময় 'Which' ব্যবহার করো। সাধারণ/খোলা প্রশ্নে 'What' ব্যবহার করো।",
      banglaStructureMap:
        "বাংলা: তুমি কোন [জিনিস] [কাজ] করো? → English: Which [THING] do you [ACTION]?",
      conversionSteps: {
        banglaThought: "তুমি বাংলায় বলো: 'তুমি কোন রং পছন্দ করো?'",
        steps: [
          {
            step_bn: "প্রশ্নবোধক শব্দ 'কোন' = 'Which' দিয়ে শুরু করো",
            result: "Which",
          },
          {
            step_bn: "জিনিসের ধরন যোগ করো: 'রং' = 'color'",
            result: "Which color",
          },
          {
            step_bn: "'do you' যোগ করো (বর্তমান কাল, কাজের প্রশ্ন)",
            result: "Which color do you",
          },
          {
            step_bn: "কাজটা যোগ করো: 'পছন্দ করো' = 'like'",
            result: "Which color do you like?",
          },
        ],
        finalResult: "Which color do you like?",
        finalResult_bn: "তুমি কোন রং পছন্দ করো?",
      },
      commonMistakes: [
        {
          wrong: "Which color you like?",
          correct: "Which color do you like?",
          explanation_bn:
            "'do' বাদ দেওয়া যাবে না — কাজের প্রশ্নে 'do' লাগবেই।",
        },
        {
          wrong: "What color do you like?",
          correct: "Which color do you like?",
          explanation_bn:
            "নির্দিষ্ট বিকল্প থেকে বাছাই করতে 'which' ব্যবহার করো। 'what' = খোলা/সাধারণ প্রশ্ন, 'which' = নির্দিষ্ট অপশন থেকে।",
        },
        {
          wrong: "Which you like color?",
          correct: "Which color do you like?",
          explanation_bn:
            "'Which' এর ঠিক পরে জিনিসের ধরন বসে, তারপর 'do you' + কাজ।",
        },
      ],
      simpleRules: [
        {
          rule_bn:
            "'which' = নির্দিষ্ট বিকল্প থেকে বেছে নাও, 'what' = সাধারণ প্রশ্ন",
          example:
            "Which tea do you want — green or black? vs What do you want to drink?",
        },
        {
          rule_bn: "বর্তমান → 'do' ব্যবহার করো",
          example: "Which color do you like?",
        },
        {
          rule_bn: "অতীত → 'did' ব্যবহার করো",
          example: "Which movie did you watch?",
        },
        {
          rule_bn: "ভবিষ্যৎ → 'will' ব্যবহার করো",
          example: "Which dress will you wear?",
        },
      ],
      usageSituations: [
        {
          situation_bn: "পছন্দ জানতে",
          situation_en: "When asking about preferences",
          exampleSentence: "Which flavor do you want?",
          exampleSentence_bn: "তুমি কোন ফ্লেভার চাও?",
        },
        {
          situation_bn: "অর্ডার দিতে",
          situation_en: "When placing an order",
          exampleSentence: "Which size do you want — small or large?",
          exampleSentence_bn: "তুমি কোন সাইজ চাও — ছোট না বড়?",
        },
        {
          situation_bn: "বিকল্প বাছাই করতে",
          situation_en: "When choosing between options",
          exampleSentence: "Which road do you take to go home?",
          exampleSentence_bn: "তুমি বাড়ি যেতে কোন রাস্তা ধরো?",
        },
      ],
      sentenceBuilding: [
        {
          previousPatternId: "A1.1",
          previousFormula: "I want [THING]",
          previousFormula_bn: "আমি [জিনিস] চাই",
          combined: "Which color do you want? I want the blue one.",
          combined_bn: "তুমি কোন রং চাও? আমি নীলটা চাই।",
        },
        {
          previousPatternId: "G2.9",
          previousFormula: "How much is [THING]?",
          previousFormula_bn: "[জিনিস] কত?",
          combined: "Which shirt do you like? How much is the blue one?",
          combined_bn: "তুমি কোন শার্ট পছন্দ করো? নীলটার দাম কত?",
        },
        {
          previousPatternId: "B1",
          previousFormula: "It is [DESCRIPTION]",
          previousFormula_bn: "এটা [বর্ণনা]",
          combined: "Which one should I buy? This one is better.",
          combined_bn: "কোনটা আমার কেনা উচিত? এটা ভালো।",
        },
      ],
      memoryTrick_bn:
        "মনে রাখো: 'Which' = 'কোনটা/কোন'। যখন কয়েকটা অপশন থেকে একটা বেছে নিতে হবে, তখন 'Which' ব্যবহার করো। খোলা প্রশ্নে 'What' ব্যবহার করো।",
      chunks: [
        { en: "Which", bn: "কোনটা", pronunciation_bn: "হুইচ" },
        { en: "Which one", bn: "কোনটা", pronunciation_bn: "হুইচ ওয়ান" },
        {
          en: "Which one should I",
          bn: "কোনটা আমার উচিত",
          pronunciation_bn: "হুইচ ওয়ান শুড আই",
        },
      ],
      bridgeRuleIds: ["BR1", "BR2", "BR3"],
      formulaPronunciation_bn: "হুইচ [জিনিস] ডু ইউ [কাজ]?",
      wordMap: {
        bn_sentence: "তুমি কোন রং পছন্দ করো?",
        en_sentence: "Which color do you like?",
        mappings: [
          { bn_word: "কোন", en_word: "Which", type: "moved", bridgeRuleId: "BR2" },
          { bn_word: "রং", en_word: "color", type: "direct" },
          { bn_word: "(নেই)", en_word: "do", type: "added", bridgeRuleId: "BR3" },
          { bn_word: "তুমি", en_word: "you", type: "direct" },
          { bn_word: "পছন্দ করো", en_word: "like", type: "direct" },
        ],
      },
      dialogueChains: [
        {
          id: "dc-g2.8-1",
          title_bn: "দোকানে কেনাকাটা",
          title_en: "Shopping at a store",
          situation_bn: "তুমি দোকানে জামাকাপড় কিনছো",
          icon: "🛍️",
          turns: [
            { speaker_bn: "দোকানদার", en: "Can I help you?", bn: "আমি কি সাহায্য করতে পারি?", pronunciation_bn: "ক্যান আই হেল্প ইউ?" },
            { speaker_bn: "তুমি", en: "Which shirt is cheaper?", bn: "কোন শার্টটা সস্তা?", pronunciation_bn: "হুইচ শার্ট ইজ চিপার?", patternId: "G2.8" },
            { speaker_bn: "দোকানদার", en: "This blue one.", bn: "এই নীলটা।", pronunciation_bn: "দিস ব্লু ওয়ান।" },
            { speaker_bn: "তুমি", en: "Which size do you have?", bn: "কোন সাইজ আছে?", pronunciation_bn: "হুইচ সাইজ ডু ইউ হ্যাভ?", patternId: "G2.8" },
          ],
          patternsUsed: ["G2.8"],
        },
      ],
      answerTemplates: [
        {
          situation_bn:
            "যখন কেউ 'Which one?' জিজ্ঞেস করে এবং তুমি বিশেষণ দিয়ে উত্তর দিতে চাও",
          question: "Which shirt do you want?",
          question_bn: "তুমি কোন শার্ট চাও?",
          answerFormula: "The [ADJECTIVE] one.",
          answerFormula_bn: "[বিশেষণ]টা।",
          pronunciation_bn: "দা [বিশেষণ] ওয়ান।",
          examples: [
            {
              answer: "The blue one.",
              answer_bn: "নীলটা।",
              pronunciation_bn: "দা ব্লু ওয়ান।",
            },
            {
              answer: "The big one.",
              answer_bn: "বড়টা।",
              pronunciation_bn: "দা বিগ ওয়ান।",
            },
            {
              answer: "The cheap one.",
              answer_bn: "সস্তাটা।",
              pronunciation_bn: "দা চিপ ওয়ান।",
            },
          ],
        },
        {
          situation_bn:
            "যখন কেউ 'Which one?' জিজ্ঞেস করে এবং তুমি দেখিয়ে উত্তর দিতে চাও",
          question: "Which one do you like?",
          question_bn: "তুমি কোনটা পছন্দ করো?",
          answerFormula: "This one. / That one.",
          answerFormula_bn: "এটা। / ওটা।",
          pronunciation_bn: "দিস ওয়ান। / দ্যাট ওয়ান।",
          examples: [
            {
              answer: "This one.",
              answer_bn: "এটা।",
              pronunciation_bn: "দিস ওয়ান।",
            },
            {
              answer: "That one.",
              answer_bn: "ওটা।",
              pronunciation_bn: "দ্যাট ওয়ান।",
            },
          ],
        },
        {
          situation_bn:
            "যখন কেউ 'Which one?' জিজ্ঞেস করে এবং তুমি অবস্থান দিয়ে উত্তর দিতে চাও",
          question: "Which one do you want?",
          question_bn: "তুমি কোনটা চাও?",
          answerFormula: "I want the one on the [POSITION].",
          answerFormula_bn: "আমি [অবস্থান]ের টা চাই।",
          pronunciation_bn: "আই ওয়ান্ট দা ওয়ান অন দা [অবস্থান]।",
          examples: [
            {
              answer: "I want the one on the left.",
              answer_bn: "আমি বাঁদিকের টা চাই।",
              pronunciation_bn: "আই ওয়ান্ট দা ওয়ান অন দা লেফট।",
            },
            {
              answer: "I want the one on top.",
              answer_bn: "আমি উপরের টা চাই।",
              pronunciation_bn: "আই ওয়ান্ট দা ওয়ান অন টপ।",
            },
          ],
        },
      ],
      variations: [
        {
          variant: "past",
          label: "Past (অতীত)",
          label_bn: "অতীত",
          formula: "Which [THING] did you [ACTION]?",
          formula_bn: "তুমি কোন [জিনিস] [কাজ] করেছিলে?",
          examples: [
            {
              en: "Which movie did you watch?",
              bn: "তুমি কোন সিনেমা দেখেছিলে?",
              pronunciation_bn: "হুইচ মুভি ডিড ইউ ওয়াচ?",
              slotValues: { THING: "movie", ACTION: "watch" },
              topicArea: "relationships",
            },
            {
              en: "Which hotel did you stay at?",
              bn: "তুমি কোন হোটেলে ছিলে?",
              pronunciation_bn: "হুইচ হোটেল ডিড ইউ স্টে অ্যাট?",
              slotValues: { THING: "hotel", ACTION: "stay at" },
              topicArea: "travel",
            },
            {
              en: "Which medicine did you take?",
              bn: "তুমি কোন ওষুধ খেয়েছিলে?",
              pronunciation_bn: "হুইচ মেডিসিন ডিড ইউ টেক?",
              slotValues: { THING: "medicine", ACTION: "take" },
              topicArea: "health",
            },
          ],
        },
        {
          variant: "future",
          label: "Future (ভবিষ্যৎ)",
          label_bn: "ভবিষ্যৎ",
          formula: "Which [THING] will you [ACTION]?",
          formula_bn: "তুমি কোন [জিনিস] [কাজ] করবে?",
          examples: [
            {
              en: "Which dress will you wear?",
              bn: "তুমি কোন জামা পরবে?",
              pronunciation_bn: "হুইচ ড্রেস উইল ইউ ওয়্যার?",
              slotValues: { THING: "dress", ACTION: "wear" },
              topicArea: "shopping",
            },
            {
              en: "Which university will you apply to?",
              bn: "তুমি কোন বিশ্ববিদ্যালয়ে আবেদন করবে?",
              pronunciation_bn: "হুইচ ইউনিভার্সিটি উইল ইউ অ্যাপ্লাই টু?",
              slotValues: { THING: "university", ACTION: "apply to" },
              topicArea: "education",
            },
            {
              en: "Which flight will you take?",
              bn: "তুমি কোন ফ্লাইটে যাবে?",
              pronunciation_bn: "হুইচ ফ্লাইট উইল ইউ টেক?",
              slotValues: { THING: "flight", ACTION: "take" },
              topicArea: "travel",
            },
          ],
        },
        {
          variant: "modal",
          label: "Modal (উচিত)",
          label_bn: "উচিত",
          formula: "Which one should I [VERB]?",
          formula_bn: "কোনটা আমার [কাজ] করা উচিত?",
          examples: [
            {
              en: "Which one should I buy?",
              bn: "কোনটা আমার কেনা উচিত?",
              pronunciation_bn: "হুইচ ওয়ান শুড আই বাই?",
              slotValues: { VERB: "buy" },
              topicArea: "shopping",
            },
            {
              en: "Which bank should I open an account in?",
              bn: "কোন ব্যাংকে আমার অ্যাকাউন্ট খোলা উচিত?",
              pronunciation_bn: "হুইচ ব্যাংক শুড আই ওপেন অ্যান অ্যাকাউন্ট ইন?",
              slotValues: { VERB: "open an account in" },
              topicArea: "finance",
            },
            {
              en: "Which medicine should I take?",
              bn: "কোন ওষুধ আমার খাওয়া উচিত?",
              pronunciation_bn: "হুইচ মেডিসিন শুড আই টেক?",
              slotValues: { VERB: "take" },
              topicArea: "health",
            },
          ],
        },
        {
          variant: "polite",
          label: "Polite (ভদ্র)",
          label_bn: "ভদ্র",
          formula: "Could you tell me which [THING]?",
          formula_bn: "আপনি কি বলবেন কোনটা [জিনিস]?",
          examples: [
            {
              en: "Could you tell me which bus goes to Gulshan?",
              bn: "আপনি কি বলবেন কোন বাস গুলশান যায়?",
              pronunciation_bn: "কুড ইউ টেল মি হুইচ বাস গোজ টু গুলশান?",
              slotValues: { THING: "bus goes to Gulshan" },
              topicArea: "travel",
            },
            {
              en: "Could you tell me which counter for paying bills?",
              bn: "আপনি কি বলবেন বিল দেওয়ার কাউন্টার কোনটা?",
              pronunciation_bn: "কুড ইউ টেল মি হুইচ কাউন্টার ফর পেয়িং বিলস?",
              slotValues: { THING: "counter for paying bills" },
              topicArea: "finance",
            },
            {
              en: "Could you tell me which way?",
              bn: "আপনি কি বলবেন কোন দিকে?",
              pronunciation_bn: "কুড ইউ টেল মি হুইচ ওয়ে?",
              slotValues: { THING: "way" },
              topicArea: "travel",
            },
          ],
        },
      ],
    },

    // ==================== G2.9 — কত (How + Quantity) ====================
    {
      id: "G2.9",
      formula: "How many [THINGS] do you [ACTION]?",
      formula_bn: "তুমি কতগুলো [জিনিস] [কাজ] করো?",
      patternName: "Asking How Many/Much (কত)",
      patternName_bn: "কত জিজ্ঞেস করা",
      concept_bn: "কত",
      slots: [
        {
          name: "THINGS",
          description:
            "A plural countable noun you want to know the quantity of",
          description_bn: "যে গোনা যায় এমন জিনিসের সংখ্যা জানতে চাও",
          acceptedTypes: ["noun", "noun_phrase"],
          examples: ["books", "glasses of water", "brothers", "hours", "eggs"],
        },
        {
          name: "ACTION",
          description: "A verb or verb phrase describing the action",
          description_bn: "যে কাজটা করো",
          acceptedTypes: ["verb", "verb_phrase"],
          examples: ["have", "read", "need", "want", "drink"],
        },
      ],
      examples: [
        {
          en: "How many books do you read?",
          bn: "তুমি কতগুলো বই পড়ো?",
          pronunciation_bn: "হাও মেনি বুকস ডু ইউ রিড?",
          slotValues: { THINGS: "books", ACTION: "read" },
          topicArea: "education",
          stage: 1,
          miniStory: { situation_bn: "তুমি বন্ধুর সাথে কথা বলছো। সে বই পড়তে ভালোবাসে। জানতে চাও সে কতটা পড়ে।", icon: "📚" },
        },
        {
          en: "How many brothers do you have?",
          bn: "তোমার কতজন ভাই আছে?",
          pronunciation_bn: "হাও মেনি ব্রাদার্স ডু ইউ হ্যাভ?",
          slotValues: { THINGS: "brothers", ACTION: "have" },
          topicArea: "relationships",
          stage: 1,
          miniStory: { situation_bn: "তুমি নতুন কাউকে চিনেছো। পরিবারের কথা বলছো। সে জিজ্ঞেস করছে তোমার কতজন ভাই আছে।", icon: "👨‍👩‍👦‍👦" },
        },
        {
          en: "How many eggs do you need?",
          bn: "তোমার কতগুলো ডিম দরকার?",
          pronunciation_bn: "হাও মেনি এগস ডু ইউ নিড?",
          slotValues: { THINGS: "eggs", ACTION: "need" },
          topicArea: "food",
          stage: 2,
          miniStory: {
            situation_bn:
              "তুমি বাজারে সিঙ্গারা বানাতে চাও। দোকানদারকে জিজ্ঞেস করছো কতগুলো ডিম দরকার হবে।",
            icon: "🥚",
          },
        },
        {
          en: "How many hours do you work?",
          bn: "তুমি কত ঘণ্টা কাজ করো?",
          pronunciation_bn: "হাও মেনি আওয়ার্স ডু ইউ ওয়ার্ক?",
          slotValues: { THINGS: "hours", ACTION: "work" },
          topicArea: "work",
          stage: 2,
          miniStory: {
            situation_bn: "গার্মেন্টস ফ্যাক্টরিতে নতুন কাজ শুরু করেছো। পাশের লাইনের একজন কর্মীকে জিজ্ঞেস করছো সে প্রতিদিন কত ঘণ্টা কাজ করে।",
            icon: "🏭",
          },
        },
        {
          en: "How many glasses of water do you drink?",
          bn: "তুমি কত গ্লাস পানি খাও?",
          pronunciation_bn: "হাও মেনি গ্লাসেস অফ ওয়াটার ডু ইউ ড্রিংক?",
          slotValues: { THINGS: "glasses of water", ACTION: "drink" },
          topicArea: "health",
          stage: 3,
          miniStory: {
            situation_bn:
              "গরমের দিনে ডাক্তার তোমাকে বলেছে পানি বেশি খেতে। বন্ধু জানতে চায় তুমি কতটুকু পানি খাও।",
            icon: "💧",
          },
        },
      ],
      formality: "casual",
      difficulty: "beginner",
      usageNote:
        "Use 'How many' for countable things (1, 2, 3...) and 'How much' for uncountable things (water, money, time). Bangla uses 'কত' for both.",
      usageNote_bn:
        "বাংলায় 'কত' একটাই শব্দ, কিন্তু ইংরেজিতে গোনা যায় এমন জিনিসের জন্য 'How many' আর গোনা যায় না এমন জিনিসের জন্য 'How much' ব্যবহার করো।",
      banglaStructureMap:
        "বাংলা: তুমি কতগুলো [জিনিস] [কাজ] করো? → English: How many [THINGS] do you [ACTION]?",
      conversionSteps: {
        banglaThought: "তুমি বাংলায় বলো: 'তুমি কয়টা বই পড়ো?'",
        steps: [
          {
            step_bn:
              "'কয়টা/কতগুলো' = 'How many' দিয়ে শুরু করো (গোনা যায় এমন জিনিস)",
            result: "How many",
          },
          {
            step_bn: "জিনিসটা যোগ করো: 'বই' = 'books' (বহুবচন হবে)",
            result: "How many books",
          },
          {
            step_bn: "'do you' যোগ করো (বর্তমান কাল)",
            result: "How many books do you",
          },
          {
            step_bn: "কাজটা যোগ করো: 'পড়ো' = 'read'",
            result: "How many books do you read?",
          },
        ],
        finalResult: "How many books do you read?",
        finalResult_bn: "তুমি কয়টা বই পড়ো?",
      },
      commonMistakes: [
        {
          wrong: "How many book do you read?",
          correct: "How many books do you read?",
          explanation_bn:
            "'How many' এর পরে সবসময় বহুবচন (plural) হবে — 'book' না, 'books' লেখো।",
        },
        {
          wrong: "How much books do you have?",
          correct: "How many books do you have?",
          explanation_bn:
            "গোনা যায় এমন জিনিস (books, eggs, pens) → 'How many'। গোনা যায় না (water, money) → 'How much'।",
        },
        {
          wrong: "How many water do you drink?",
          correct: "How much water do you drink?",
          explanation_bn:
            "পানি গোনা যায় না — তাই 'How many' না, 'How much' ব্যবহার করো।",
        },
      ],
      simpleRules: [
        {
          rule_bn:
            "many = গণনাযোগ্য (বই, ডিম, মানুষ — ১, ২, ৩ করে গোনা যায়)",
          example: "How many eggs do you need?",
        },
        {
          rule_bn: "much = অগণনীয় (পানি, সময়, টাকা — গোনা যায় না)",
          example: "How much water do you need?",
        },
        {
          rule_bn: "long = সময়ের পরিমাণ (কত সময় লাগে)",
          example: "How long does it take?",
        },
        {
          rule_bn: "far = দূরত্ব (কত দূর)",
          example: "How far is the station?",
        },
        {
          rule_bn: "often = কত ঘন ঘন (কত বার করো)",
          example: "How often do you exercise?",
        },
        {
          rule_bn: "old = বয়স (কত বছর)",
          example: "How old is your son?",
        },
      ],
      usageSituations: [
        {
          situation_bn: "দাম জানতে",
          situation_en: "When asking the price",
          exampleSentence: "How much does this cost?",
          exampleSentence_bn: "এটার দাম কত?",
        },
        {
          situation_bn: "সময় জানতে",
          situation_en: "When asking about time",
          exampleSentence: "How long does it take to get there?",
          exampleSentence_bn: "সেখানে যেতে কত সময় লাগে?",
        },
        {
          situation_bn: "পরিমাণ জানতে",
          situation_en: "When asking about quantity",
          exampleSentence: "How many tickets do you need?",
          exampleSentence_bn: "তোমার কয়টা টিকিট দরকার?",
        },
        {
          situation_bn: "দূরত্ব জানতে",
          situation_en: "When asking about distance",
          exampleSentence: "How far is the airport from here?",
          exampleSentence_bn: "এখান থেকে এয়ারপোর্ট কত দূর?",
        },
      ],
      sentenceBuilding: [
        {
          previousPatternId: "A1.2",
          previousFormula: "I need [THING]",
          previousFormula_bn: "আমার [জিনিস] দরকার",
          combined: "How much water do you need? I need two glasses.",
          combined_bn: "তোমার কতটুকু পানি দরকার? আমার দুই গ্লাস দরকার।",
        },
        {
          previousPatternId: "G2.8",
          previousFormula: "Which [THING] do you [ACTION]?",
          previousFormula_bn: "তুমি কোন [জিনিস] [কাজ] করো?",
          combined:
            "How much does the shirt cost? Which color do you want?",
          combined_bn:
            "শার্টটার দাম কত? তুমি কোন রং চাও?",
        },
        {
          previousPatternId: "A1.1",
          previousFormula: "I want [THING]",
          previousFormula_bn: "আমি [জিনিস] চাই",
          combined:
            "How about some tea? I want green tea.",
          combined_bn:
            "চা কেমন হয়? আমি গ্রিন টি চাই।",
        },
      ],
      memoryTrick_bn:
        "মনে রাখো: বাংলায় 'কত' একটাই শব্দ, কিন্তু ইংরেজিতে অনেক রূপ — many (সংখ্যা), much (পরিমাণ), long (সময়), far (দূরত্ব), often (কতবার), old (বয়স)। প্রতিটা আলাদা করে মনে রাখো!",
      chunks: [
        { en: "How much", bn: "কত (পরিমাণ)", pronunciation_bn: "হাও মাচ" },
        { en: "How many", bn: "কত (সংখ্যা)", pronunciation_bn: "হাও মেনি" },
        { en: "How long", bn: "কতক্ষণ", pronunciation_bn: "হাও লং" },
        { en: "How far", bn: "কত দূর", pronunciation_bn: "হাও ফার" },
        {
          en: "How come",
          bn: "কেন (অনানুষ্ঠানিক)",
          pronunciation_bn: "হাও কাম",
        },
        { en: "How about", bn: "কেমন হয়", pronunciation_bn: "হাও অ্যাবাউট" },
      ],
      bridgeRuleIds: ["BR2", "BR3", "BR11"],
      formulaPronunciation_bn: "হাও মাচ/মেনি [জিনিস]?",
      wordMap: {
        bn_sentence: "এটার দাম কত?",
        en_sentence: "How much is this?",
        mappings: [
          { bn_word: "কত", en_word: "How much", type: "moved", bridgeRuleId: "BR2" },
          { bn_word: "(নেই)", en_word: "is", type: "added", bridgeRuleId: "BR3" },
          { bn_word: "এটার", en_word: "this", type: "direct" },
        ],
      },
      dialogueChains: [
        {
          id: "dc-g2.9-1",
          title_bn: "বাজারে দাম জিজ্ঞেস করা",
          title_en: "Asking prices at the market",
          situation_bn: "তুমি বাজারে সবজি কিনছো, দাম জানতে চাও",
          icon: "🛒",
          turns: [
            { speaker_bn: "তুমি", en: "How much is this?", bn: "এটার দাম কত?", pronunciation_bn: "হাও মাচ ইজ দিস?", patternId: "G2.9" },
            { speaker_bn: "দোকানদার", en: "50 taka per kg.", bn: "কেজি ৫০ টাকা।", pronunciation_bn: "ফিফটি টাকা পার কেজি।" },
            { speaker_bn: "তুমি", en: "How many do you want?", bn: "কতগুলো চাও?", pronunciation_bn: "হাও মেনি ডু ইউ ওয়ান্ট?", patternId: "G2.9" },
            { speaker_bn: "দোকানদার", en: "200 taka total.", bn: "মোট ২০০ টাকা।", pronunciation_bn: "টু হান্ড্রেড টাকা টোটাল।" },
          ],
          patternsUsed: ["G2.9"],
        },
        {
          id: "dc-cross-4",
          title_bn: "বাজারে কেনাকাটা",
          title_en: "Shopping at the Market",
          situation_bn: "তুমি কাপড়ের দোকানে গেছো। ঈদের জন্য জামা কিনতে চাও। দোকানদারের সাথে কথা বলছো।",
          icon: "👕",
          turns: [
            { speaker_bn: "তুমি", en: "How much is this shirt?", bn: "এই শার্টের দাম কত?", pronunciation_bn: "হাও মাচ ইজ দিস শার্ট?", patternId: "G2.9" },
            { speaker_bn: "দোকানদার", en: "800 taka.", bn: "৮০০ টাকা।", pronunciation_bn: "এইট হান্ড্রেড টাকা।" },
            { speaker_bn: "তুমি", en: "Which color do you have?", bn: "কোন কোন রঙ আছে?", pronunciation_bn: "হুইচ কালার ডু ইউ হ্যাভ?", patternId: "G2.8" },
            { speaker_bn: "দোকানদার", en: "Blue, white, and black.", bn: "নীল, সাদা, আর কালো।", pronunciation_bn: "ব্লু, হোয়াইট, অ্যান্ড ব্ল্যাক।" },
            { speaker_bn: "তুমি", en: "What is the price of the blue one?", bn: "নীলটার দাম কত?", pronunciation_bn: "হোয়াট ইজ দা প্রাইস অফ দা ব্লু ওয়ান?", patternId: "G2.1" },
            { speaker_bn: "দোকানদার", en: "900 taka.", bn: "৯০০ টাকা।", pronunciation_bn: "নাইন হান্ড্রেড টাকা।" },
            { speaker_bn: "তুমি", en: "How many shirts can I get for 2000 taka?", bn: "২০০০ টাকায় কতগুলো শার্ট পাবো?", pronunciation_bn: "হাও মেনি শার্টস ক্যান আই গেট ফর টু থাউজ্যান্ড টাকা?", patternId: "G2.9" },
            { speaker_bn: "দোকানদার", en: "Two shirts. I will give you a discount.", bn: "দুইটা শার্ট। ডিসকাউন্ট দিবো।", pronunciation_bn: "টু শার্টস। আই উইল গিভ ইউ আ ডিসকাউন্ট।" },
          ],
          patternsUsed: ["G2.9", "G2.8", "G2.1"],
        },
        {
          id: "G2-dc-chaistall",
          title_bn: "চায়ের দোকানে",
          title_en: "At the Tea Stall",
          situation_bn: "তুমি কাজের পর চায়ের দোকানে বসেছো। দোকানদার ও বন্ধুদের সাথে কথা বলছো।",
          icon: "☕",
          turns: [
            { speaker_bn: "তুমি", en: "How much is one cup of tea?", bn: "এক কাপ চায়ের দাম কত?", pronunciation_bn: "হাউ মাচ ইজ ওয়ান কাপ অফ টি?", patternId: "G2.9" },
            { speaker_bn: "দোকানদার", en: "10 taka.", bn: "১০ টাকা।", pronunciation_bn: "টেন টাকা।" },
            { speaker_bn: "তুমি", en: "What kind of biscuits do you have?", bn: "কী ধরনের বিস্কুট আছে?", pronunciation_bn: "হোয়াট কাইন্ড অফ বিস্কুটস ডু ইউ হ্যাভ?", patternId: "G2.1" },
            { speaker_bn: "দোকানদার", en: "Tiger and Bisk Club.", bn: "টাইগার আর বিস্ক ক্লাব।", pronunciation_bn: "টাইগার অ্যান্ড বিস্ক ক্লাব।" },
            { speaker_bn: "বন্ধু", en: "When did you finish work?", bn: "কখন কাজ শেষ করলে?", pronunciation_bn: "হোয়েন ডিড ইউ ফিনিশ ওয়ার্ক?", patternId: "G2.3" },
            { speaker_bn: "তুমি", en: "At 6 o'clock.", bn: "ছয়টায়।", pronunciation_bn: "অ্যাট সিক্স ও'ক্লক।" },
            { speaker_bn: "বন্ধু", en: "How was your day?", bn: "তোমার দিন কেমন ছিল?", pronunciation_bn: "হাউ ওয়াজ ইয়োর ডে?", patternId: "G2.5" },
            { speaker_bn: "তুমি", en: "Very tiring. Why is there so much work?", bn: "খুব ক্লান্তিকর। এত কাজ কেন?", pronunciation_bn: "ভেরি টায়ারিং। হোয়াই ইজ দেয়ার সো মাচ ওয়ার্ক?", patternId: "G2.4" },
          ],
          patternsUsed: ["G2.9", "G2.1", "G2.3", "G2.5", "G2.4"],
        },
      ],
      answerTemplates: [
        {
          situation_bn:
            "যখন কেউ 'How much?' বা 'How many?' জিজ্ঞেস করে এবং তুমি সংখ্যা/পরিমাণ বলতে চাও",
          question: "How much does this cost?",
          question_bn: "এটার দাম কত?",
          answerFormula: "[NUMBER/AMOUNT].",
          answerFormula_bn: "[সংখ্যা/পরিমাণ]।",
          pronunciation_bn: "[সংখ্যা/পরিমাণ]।",
          examples: [
            {
              answer: "500 taka.",
              answer_bn: "৫০০ টাকা।",
              pronunciation_bn: "ফাইভ হান্ড্রেড টাকা।",
            },
            {
              answer: "Three.",
              answer_bn: "তিনটা।",
              pronunciation_bn: "থ্রি।",
            },
            {
              answer: "About 2 hours.",
              answer_bn: "প্রায় ২ ঘণ্টা।",
              pronunciation_bn: "অ্যাবাউট টু আওয়ার্স।",
            },
          ],
        },
        {
          situation_bn: "যখন কেউ দাম জিজ্ঞেস করে",
          question: "How much is this?",
          question_bn: "এটার দাম কত?",
          answerFormula: "It costs [PRICE].",
          answerFormula_bn: "এটার দাম [দাম]।",
          pronunciation_bn: "ইট কস্টস [দাম]।",
          examples: [
            {
              answer: "It costs 1000 taka.",
              answer_bn: "এটার দাম ১০০০ টাকা।",
              pronunciation_bn: "ইট কস্টস ওয়ান থাউজ্যান্ড টাকা।",
            },
            {
              answer: "It costs 50 taka per kg.",
              answer_bn: "কেজি ৫০ টাকা।",
              pronunciation_bn: "ইট কস্টস ফিফটি টাকা পার কেজি।",
            },
          ],
        },
        {
          situation_bn: "যখন সংক্ষেপে উত্তর দিতে চাও",
          question: "How much work do you have?",
          question_bn: "তোমার কত কাজ আছে?",
          answerFormula: "Not much. / A lot.",
          answerFormula_bn: "বেশি না। / অনেক।",
          pronunciation_bn: "নট মাচ। / অ্যা লট।",
          examples: [
            {
              answer: "Not much.",
              answer_bn: "বেশি না।",
              pronunciation_bn: "নট মাচ।",
            },
            {
              answer: "A lot.",
              answer_bn: "অনেক।",
              pronunciation_bn: "অ্যা লট।",
            },
          ],
        },
        {
          situation_bn:
            "যখন কেউ সংখ্যা জিজ্ঞেস করে এবং তুমি নির্দিষ্ট সংখ্যা বলতে চাও",
          question: "How many brothers do you have?",
          question_bn: "তোমার কতজন ভাই আছে?",
          answerFormula: "I have [NUMBER].",
          answerFormula_bn: "আমার [সংখ্যা]টা আছে।",
          pronunciation_bn: "আই হ্যাভ [সংখ্যা]।",
          examples: [
            {
              answer: "I have two.",
              answer_bn: "আমার দুইজন আছে।",
              pronunciation_bn: "আই হ্যাভ টু।",
            },
            {
              answer: "I have five.",
              answer_bn: "আমার পাঁচটা আছে।",
              pronunciation_bn: "আই হ্যাভ ফাইভ।",
            },
            {
              answer: "I have many.",
              answer_bn: "আমার অনেক আছে।",
              pronunciation_bn: "আই হ্যাভ মেনি।",
            },
          ],
        },
      ],
      variations: [
        {
          variant: "how_much",
          label: "How Much (কতটুকু)",
          label_bn: "কতটুকু",
          formula: "How much [THING] do you [ACTION]?",
          formula_bn: "তুমি কতটুকু [জিনিস] [কাজ] করো?",
          examples: [
            {
              en: "How much water do you drink every day?",
              bn: "তুমি প্রতিদিন কতটুকু পানি খাও?",
              pronunciation_bn: "হাও মাচ ওয়াটার ডু ইউ ড্রিংক এভরি ডে?",
              slotValues: { THING: "water", ACTION: "drink every day" },
              topicArea: "health",
            },
            {
              en: "How much money do you need?",
              bn: "তোমার কত টাকা দরকার?",
              pronunciation_bn: "হাও মাচ মানি ডু ইউ নিড?",
              slotValues: { THING: "money", ACTION: "need" },
              topicArea: "shopping",
            },
            {
              en: "How much rice do you eat?",
              bn: "তুমি কতটুকু ভাত খাও?",
              pronunciation_bn: "হাও মাচ রাইস ডু ইউ ইট?",
              slotValues: { THING: "rice", ACTION: "eat" },
              topicArea: "food",
            },
          ],
        },
        {
          variant: "how_long",
          label: "How Long (কত সময়)",
          label_bn: "কত সময়",
          formula: "How long does it take to [ACTION]?",
          formula_bn: "[কাজ] করতে কত সময় লাগে?",
          examples: [
            {
              en: "How long does it take to get to the airport?",
              bn: "এয়ারপোর্টে যেতে কত সময় লাগে?",
              pronunciation_bn: "হাও লং ডাজ ইট টেক টু গেট টু দা এয়ারপোর্ট?",
              slotValues: { ACTION: "get to the airport" },
              topicArea: "travel",
            },
            {
              en: "How long does it take to learn English?",
              bn: "ইংরেজি শিখতে কত সময় লাগে?",
              pronunciation_bn: "হাও লং ডাজ ইট টেক টু লার্ন ইংলিশ?",
              slotValues: { ACTION: "learn English" },
              topicArea: "education",
            },
            {
              en: "How long does it take to cook biryani?",
              bn: "বিরিয়ানি রান্না করতে কত সময় লাগে?",
              pronunciation_bn: "হাও লং ডাজ ইট টেক টু কুক বিরিয়ানি?",
              slotValues: { ACTION: "cook biryani" },
              topicArea: "food",
            },
          ],
        },
        {
          variant: "how_far",
          label: "How Far (কত দূর)",
          label_bn: "কত দূর",
          formula: "How far is [PLACE]?",
          formula_bn: "[জায়গা] কত দূর?",
          examples: [
            {
              en: "How far is the station?",
              bn: "স্টেশন কত দূর?",
              pronunciation_bn: "হাও ফার ইজ দা স্টেশন?",
              slotValues: { PLACE: "the station" },
              topicArea: "travel",
            },
            {
              en: "How far is the hospital from here?",
              bn: "এখান থেকে হাসপাতাল কত দূর?",
              pronunciation_bn: "হাও ফার ইজ দা হসপিটাল ফ্রম হিয়ার?",
              slotValues: { PLACE: "the hospital from here" },
              topicArea: "health",
            },
            {
              en: "How far is your office?",
              bn: "তোমার অফিস কত দূর?",
              pronunciation_bn: "হাও ফার ইজ ইয়োর অফিস?",
              slotValues: { PLACE: "your office" },
              topicArea: "work",
            },
          ],
        },
        {
          variant: "how_often",
          label: "How Often (কত ঘন ঘন)",
          label_bn: "কত ঘন ঘন",
          formula: "How often do you [ACTION]?",
          formula_bn: "তুমি কত ঘন ঘন [কাজ] করো?",
          examples: [
            {
              en: "How often do you exercise?",
              bn: "তুমি কত ঘন ঘন ব্যায়াম করো?",
              pronunciation_bn: "হাও অফেন ডু ইউ এক্সারসাইজ?",
              slotValues: { ACTION: "exercise" },
              topicArea: "health",
            },
            {
              en: "How often do you eat out?",
              bn: "তুমি কত ঘন ঘন বাইরে খাও?",
              pronunciation_bn: "হাও অফেন ডু ইউ ইট আউট?",
              slotValues: { ACTION: "eat out" },
              topicArea: "food",
            },
            {
              en: "How often do you visit your parents?",
              bn: "তুমি কত ঘন ঘন বাবা-মাকে দেখতে যাও?",
              pronunciation_bn: "হাও অফেন ডু ইউ ভিজিট ইয়োর প্যারেন্টস?",
              slotValues: { ACTION: "visit your parents" },
              topicArea: "relationships",
            },
          ],
        },
        {
          variant: "how_old",
          label: "How Old (বয়স কত)",
          label_bn: "বয়স কত",
          formula: "How old is [PERSON/THING]?",
          formula_bn: "[ব্যক্তি/জিনিস]-এর বয়স কত?",
          examples: [
            {
              en: "How old is your son?",
              bn: "তোমার ছেলের বয়স কত?",
              pronunciation_bn: "হাও ওল্ড ইজ ইয়োর সান?",
              slotValues: { "PERSON/THING": "your son" },
              topicArea: "relationships",
            },
            {
              en: "How old is this building?",
              bn: "এই বিল্ডিংটার বয়স কত?",
              pronunciation_bn: "হাও ওল্ড ইজ দিস বিল্ডিং?",
              slotValues: { "PERSON/THING": "this building" },
              topicArea: "daily_life",
            },
            {
              en: "How old is your car?",
              bn: "তোমার গাড়ির বয়স কত?",
              pronunciation_bn: "হাও ওল্ড ইজ ইয়োর কার?",
              slotValues: { "PERSON/THING": "your car" },
              topicArea: "travel",
            },
          ],
        },
        {
          variant: "how_come",
          label: "How Come (কেন — অনানুষ্ঠানিক)",
          label_bn: "কেন (অনানুষ্ঠানিক)",
          formula: "How come [CLAUSE]?",
          formula_bn: "কেন [কথা]?",
          examples: [
            {
              en: "How come you're late?",
              bn: "কেন তুমি দেরি করলে?",
              pronunciation_bn: "হাও কাম ইয়োর লেট?",
              slotValues: { CLAUSE: "you're late" },
              topicArea: "work",
            },
            {
              en: "How come it's closed?",
              bn: "কেন বন্ধ?",
              pronunciation_bn: "হাও কাম ইটস ক্লোজড?",
              slotValues: { CLAUSE: "it's closed" },
              topicArea: "shopping",
            },
            {
              en: "How come you didn't come?",
              bn: "কেন তুমি আসোনি?",
              pronunciation_bn: "হাও কাম ইউ ডিডন্ট কাম?",
              slotValues: { CLAUSE: "you didn't come" },
              topicArea: "relationships",
            },
          ],
        },
        {
          variant: "how_about",
          label: "How About (কেমন হয়)",
          label_bn: "কেমন হয়",
          formula: "How about [SUGGESTION]?",
          formula_bn: "[পরামর্শ] কেমন হয়?",
          examples: [
            {
              en: "How about after Eid?",
              bn: "ঈদের পরে কেমন হয়?",
              pronunciation_bn: "হাও অ্যাবাউট আফটার ঈদ?",
              slotValues: { SUGGESTION: "after Eid" },
              topicArea: "religion",
            },
            {
              en: "How about some tea?",
              bn: "চা কেমন হয়?",
              pronunciation_bn: "হাও অ্যাবাউট সাম টি?",
              slotValues: { SUGGESTION: "some tea" },
              topicArea: "food",
            },
            {
              en: "How about we go together?",
              bn: "একসাথে যাই কেমন হয়?",
              pronunciation_bn: "হাও অ্যাবাউট উই গো টুগেদার?",
              slotValues: { SUGGESTION: "we go together" },
              topicArea: "relationships",
            },
          ],
        },
      ],
    },
  ],
};
