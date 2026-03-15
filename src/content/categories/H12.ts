import { PatternCategory } from "@/types/pattern";

export const categoryH12: PatternCategory = {
  id: "H12",
  slug: "listener-responses",
  name: "Listener Responses",
  name_bn: "শুনে সায় দেওয়া",
  description: "Learn how to show you're listening and engaged in conversation.",
  description_bn: "কথা শোনার সময় কীভাবে সায় দিতে হয়, বোঝাতে হয় যে তুমি শুনছো — সেটা শেখো।",
  icon: "👂",
  group: "H",
  groupName: "Social Interactions & Etiquette",
  groupName_bn: "সামাজিক কথাবার্তা",
  difficulty: "beginner",
  patterns: [
    {
      id: "H12.1",
      patternName: "Uh-huh / Yeah / Mm-hmm",
      patternName_bn: "সায় দেওয়া",
      formula: "[RESPONSE]",
      formula_bn: "[সায়]",
      formulaPronunciation_bn: "[রেস্পন্স]",
      concept_bn: "হুম",
      formality: "casual",
      difficulty: "beginner",
      usageNote: "Short sounds showing you're listening. Use while someone is talking to show you're paying attention.",
      usageNote_bn: "ছোট আওয়াজ দিয়ে বোঝাও যে তুমি মনোযোগ দিয়ে শুনছো। কেউ কথা বলার সময় মাঝে মাঝে বলো, যাতে তারা বুঝতে পারে তুমি শুনছো।",
      bridgeRuleIds: ["BR1", "BR11"],
      conversionSteps: {
        banglaThought: "তুমি বাংলায় ভাবো: 'হুম, শুনছি'",
        steps: [
          { step_bn: "ছোট সায় দেওয়ার শব্দ বেছে নাও — uh-huh / yeah / mm-hmm", result: "Uh-huh" },
          { step_bn: "তারা কথা বলার সময় আস্তে বলো", result: "Uh-huh (softly)" }
        ],
        finalResult: "Uh-huh",
        finalResult_bn: "হুম, শুনছি"
      },
      banglaStructureMap: "বাংলা: হুম/হ্যাঁ → English: Uh-huh/Yeah/Mm-hmm",
      commonMistakes: [
        {
          wrong: "(complete silence)",
          correct: "Uh-huh (say it softly every few seconds)",
          explanation_bn: "একদম চুপ থাকলে মনে হয় তুমি শুনছো না বা আগ্রহ নেই — মাঝে মাঝে আস্তে বলো"
        },
        {
          wrong: "UH-HUH! UH-HUH! UH-HUH! (too loud/often)",
          correct: "Uh-huh (softly, 2-3 times per minute)",
          explanation_bn: "খুব জোরে বা ঘন ঘন বললে কথা বলার মাঝে বাধা দিচ্ছো — আস্তে বলো, মিনিটে ২-৩ বার"
        },
        {
          wrong: "Uh-huh, uh-huh, uh-huh (same word always)",
          correct: "Mix: uh-huh, yeah, mm-hmm, right",
          explanation_bn: "শুধু একটা শব্দ বারবার বললে রোবটের মতো শোনায় — মিশিয়ে বলো"
        }
      ],
      simpleRules: [
        {
          rule_bn: "কেউ কথা বলার সময় আস্তে বলো",
          example: "They: I went to market... You: Uh-huh"
        },
        {
          rule_bn: "তাদের বাক্য শেষ হওয়ার আগে বাধা দিও না",
          example: "Wait for small pause, then say mm-hmm"
        },
        {
          rule_bn: "প্রতিবার আলাদা শব্দ বলো",
          example: "First: uh-huh, then: yeah, then: mm-hmm"
        }
      ],
      usageSituations: [
        {
          situation_bn: "বন্ধু লম্বা গল্প বলছে",
          situation_en: "Friend telling a long story",
          exampleSentence: "Uh-huh... uh-huh... yeah",
          exampleSentence_bn: "আহ-হাহ... আহ-হাহ... ইয়া"
        },
        {
          situation_bn: "বস নির্দেশ দিচ্ছে",
          situation_en: "Boss giving instructions",
          exampleSentence: "Mm-hmm, I understand",
          exampleSentence_bn: "এম-হুম, বুঝছি"
        },
        {
          situation_bn: "পরিবারের সাথে ফোনে কথা",
          situation_en: "On phone with family",
          exampleSentence: "Yeah... yeah... okay",
          exampleSentence_bn: "ইয়া... ইয়া... ওকে"
        }
      ],
      sentenceBuilding: [
        {
          previousPatternId: "H12.2",
          previousFormula: "I [VERB]",
          previousFormula_bn: "আমি [বুঝছি]",
          combined: "Uh-huh... I see",
          combined_bn: "আহ-হাহ... আই সি (বুঝলাম)"
        },
        {
          previousPatternId: "H12.5",
          previousFormula: "That's [ADJECTIVE]",
          previousFormula_bn: "ওটা [বিশেষণ]",
          combined: "Mm-hmm... That's interesting",
          combined_bn: "এম-হুম... দ্যাটস ইন্টারেস্টিং (দারুণ তো)"
        }
      ],
      memoryTrick_bn: "মনে রাখো: বাংলায় যেমন 'হুম হুম' বলো শুনতে শুনতে, ইংরেজিতেও তেমনি 'আহ-হাহ' বলো। চুপ থেকো না!",
      chunks: [
        { en: "Uh-huh", bn: "হুম, শুনছি", pronunciation_bn: "আহ-হাহ" },
        { en: "Yeah", bn: "হ্যাঁ, ঠিক", pronunciation_bn: "ইয়া" },
        { en: "Mm-hmm", bn: "হুমম, বুঝছি", pronunciation_bn: "এম-হুম" }
      ],
      wordMap: {
        bn_sentence: "হুম / হ্যাঁ / হুমম",
        en_sentence: "Uh-huh / Yeah / Mm-hmm",
        mappings: [
          { bn_word: "হুম", en_word: "Uh-huh", type: "direct", bridgeRuleId: "BR1" },
          { bn_word: "হ্যাঁ", en_word: "Yeah", type: "direct", bridgeRuleId: "BR1" },
          { bn_word: "হুমম", en_word: "Mm-hmm", type: "direct", bridgeRuleId: "BR1" }
        ]
      },
      answerTemplates: [
        {
          situation_bn: "কেউ কথা বলছে, তুমি শুনছো",
          question: "Are you listening?",
          question_bn: "শুনছো?",
          answerFormula: "[RESPONSE]",
          answerFormula_bn: "[সায়]",
          pronunciation_bn: "আহ-হাহ",
          examples: [
            { answer: "Uh-huh (with nod)", answer_bn: "আহ-হাহ (মাথা নেড়ে)", pronunciation_bn: "আহ-হাহ" },
            { answer: "Yeah (with eye contact)", answer_bn: "ইয়া (চোখে চোখ রেখে)", pronunciation_bn: "ইয়া" },
            { answer: "Mm-hmm (with small smile)", answer_bn: "এম-হুম (হালকা হেসে)", pronunciation_bn: "এম-হুম" }
          ]
        }
      ],
      slots: [
        {
          name: "RESPONSE",
          description: "Short listening sound",
          description_bn: "শোনার ছোট আওয়াজ",
          acceptedTypes: ["interjection"],
          examples: ["Uh-huh", "Yeah", "Mm-hmm", "Right", "Okay"]
        }
      ],
      variations: [
        {
          variant: "tones",
          label: "Different tones",
          label_bn: "আলাদা সুর",
          formula: "[RESPONSE] (with tone)",
          formula_bn: "[সায়] (সুর সহ)",
          examples: [
            {
              en: "Uh-huh? (questioning)",
              bn: "আহ-হাহ? (প্রশ্ন করার সুরে)",
              pronunciation_bn: "আহ-হাহ? (প্রশ্ন করার সুরে)",
              slotValues: { RESPONSE: "Uh-huh?" },
              stage: 1
            },
            {
              en: "Yeah! (excited)",
              bn: "ইয়া! (উত্তেজিত)",
              pronunciation_bn: "ইয়া! (এক্সাইটেড)",
              slotValues: { RESPONSE: "Yeah!" },
              stage: 2
            },
            {
              en: "Mm-hmm... (thoughtful)",
              bn: "এম-হুম... (ভাবছো)",
              pronunciation_bn: "এম-হুম... (থটফুল)",
              slotValues: { RESPONSE: "Mm-hmm..." },
              stage: 1
            }
          ]
        },
        {
          variant: "gestures",
          label: "With gestures",
          label_bn: "ইশারা সহ",
          formula: "[RESPONSE] (with gesture)",
          formula_bn: "[সায়] (ইশারা সহ)",
          examples: [
            {
              en: "Uh-huh (nodding)",
              bn: "আহ-হাহ (মাথা নেড়ে)",
              pronunciation_bn: "আহ-হাহ (নডিং)",
              slotValues: { RESPONSE: "Uh-huh (nodding)" },
              stage: 2
            },
            {
              en: "Yeah (leaning forward)",
              bn: "ইয়া (সামনে ঝুঁকে)",
              pronunciation_bn: "ইয়া (লিনিং ফরওয়ার্ড)",
              slotValues: { RESPONSE: "Yeah (leaning forward)" },
              stage: 3
            },
            {
              en: "Mm-hmm (eyes wide)",
              bn: "এম-হুম (চোখ বড় করে)",
              pronunciation_bn: "এম-হুম (আইজ ওয়াইড)",
              slotValues: { RESPONSE: "Mm-hmm (eyes wide)" },
              stage: 2
            }
          ]
        },
        {
          variant: "combined",
          label: "Combined responses",
          label_bn: "মিলিয়ে বলা",
          formula: "[RESPONSE], [RESPONSE]",
          formula_bn: "[সায়], [সায়]",
          examples: [
            {
              en: "Uh-huh, yeah",
              bn: "আহ-হাহ, ইয়া",
              pronunciation_bn: "আহ-হাহ, ইয়া",
              slotValues: { RESPONSE: "Uh-huh, yeah" },
              stage: 3
            },
            {
              en: "Yeah, mm-hmm",
              bn: "ইয়া, এম-হুম",
              pronunciation_bn: "ইয়া, এম-হুম",
              slotValues: { RESPONSE: "Yeah, mm-hmm" },
              stage: 3
            },
            {
              en: "Mm-hmm, right",
              bn: "এম-হুম, রাইট",
              pronunciation_bn: "এম-হুম, রাইট",
              slotValues: { RESPONSE: "Mm-hmm, right" },
              stage: 3
            }
          ]
        }
      ],
      dialogueChains: [
        {
          id: "H12.1-d1",
          title_bn: "বন্ধুর চাকরির সমস্যা",
          title_en: "Friend's job problems",
          situation_bn: "চায়ের দোকানে বন্ধু চাকরির সমস্যা বলছে",
          icon: "☕",
          turns: [
            { speaker_bn: "বন্ধু", en: "My boss is very difficult", bn: "আমার বস খুব কঠিন", pronunciation_bn: "মাই বস ইজ ভেরি ডিফিকাল্ট" },
            { speaker_bn: "তুমি", en: "Uh-huh", bn: "হুম", pronunciation_bn: "আহ-হাহ", patternId: "H12.1" },
            { speaker_bn: "বন্ধু", en: "He gives me too much work", bn: "সে আমাকে অনেক কাজ দেয়", pronunciation_bn: "হি গিভস মি টু মাচ ওয়ার্ক" },
            { speaker_bn: "তুমি", en: "Yeah", bn: "হ্যাঁ", pronunciation_bn: "ইয়া", patternId: "H12.1" },
            { speaker_bn: "বন্ধু", en: "And no extra pay", bn: "আর বাড়তি বেতন নেই", pronunciation_bn: "অ্যান্ড নো এক্সট্রা পে" },
            { speaker_bn: "তুমি", en: "Mm-hmm", bn: "হুমম", pronunciation_bn: "এম-হুম", patternId: "H12.1" }
          ],
          patternsUsed: ["H12.1"]
        }
      ],
      examples: [
        {
          en: "Uh-huh",
          bn: "হুম, শুনছি",
          pronunciation_bn: "আহ-হাহ",
          slotValues: { RESPONSE: "Uh-huh" },
          topicArea: "daily_life",
          stage: 1,
          miniStory: { situation_bn: "বন্ধু ফোনে কথা বলছে, তুমি শুনছো আর মাঝে মাঝে বলছো 'আহ-হাহ'", icon: "🏠" }
        },
        {
          en: "Yeah",
          bn: "হ্যাঁ, শুনছি",
          pronunciation_bn: "ইয়া",
          slotValues: { RESPONSE: "Yeah" },
          topicArea: "work",
          stage: 1,
          miniStory: { situation_bn: "বস নির্দেশ দিচ্ছে, তুমি মাথা নেড়ে বলছো 'ইয়া'", icon: "💼" }
        },
        {
          en: "Mm-hmm",
          bn: "হুমম, বুঝছি",
          pronunciation_bn: "এম-হুম",
          slotValues: { RESPONSE: "Mm-hmm" },
          topicArea: "relationships",
          stage: 1,
          miniStory: { situation_bn: "মা ফোনে গল্প করছে, তুমি শুনছো আর বলছো 'এম-হুম'", icon: "👥" }
        },
        {
          en: "Right",
          bn: "ঠিক, হ্যাঁ",
          pronunciation_bn: "রাইট",
          slotValues: { RESPONSE: "Right" },
          topicArea: "education",
          stage: 1,
          miniStory: { situation_bn: "শিক্ষক বোঝাচ্ছে, তুমি মনোযোগ দিয়ে বলছো 'রাইট'", icon: "📚" }
        },
        {
          en: "Okay",
          bn: "ঠিক আছে",
          pronunciation_bn: "ওকে",
          slotValues: { RESPONSE: "Okay" },
          topicArea: "health",
          stage: 1,
          miniStory: { situation_bn: "ডাক্তার পরামর্শ দিচ্ছে, তুমি শুনছো আর বলছো 'ওকে'", icon: "🏥" }
        },
        {
          en: "Uh-huh, I see",
          bn: "হুম, বুঝলাম",
          pronunciation_bn: "আহ-হাহ, আই সি",
          slotValues: { RESPONSE: "Uh-huh" },
          topicArea: "shopping",
          stage: 2,
          miniStory: { situation_bn: "দোকানদার দাম বলছে, তুমি শুনে বলছো 'আহ-হাহ, আই সি'", icon: "🛍️" }
        },
        {
          en: "Yeah, go on",
          bn: "হ্যাঁ, বলো",
          pronunciation_bn: "ইয়া, গো অন",
          slotValues: { RESPONSE: "Yeah" },
          topicArea: "travel",
          stage: 2,
          miniStory: { situation_bn: "রিকশাওয়ালা রাস্তার বর্ণনা দিচ্ছে, তুমি উৎসাহিত করছো 'ইয়া, গো অন'", icon: "🚌" }
        },
        {
          en: "Mm-hmm, really?",
          bn: "হুমম, সত্যি?",
          pronunciation_bn: "এম-হুম, রিয়েলি?",
          slotValues: { RESPONSE: "Mm-hmm" },
          topicArea: "daily_life",
          stage: 2,
          miniStory: { situation_bn: "প্রতিবেশী খবর বলছে, তুমি আগ্রহ নিয়ে বলছো 'এম-হুম, রিয়েলি?'", icon: "🏠" }
        },
        {
          en: "Right, that makes sense",
          bn: "ঠিক, মানে বুঝছি",
          pronunciation_bn: "রাইট, দ্যাট মেইকস সেন্স",
          slotValues: { RESPONSE: "Right" },
          topicArea: "finance",
          stage: 2,
          miniStory: { situation_bn: "ব্যাংক কর্মচারী হিসাব বুঝিয়ে দিচ্ছে, তুমি বলছো 'রাইট, দ্যাট মেইকস সেন্স'", icon: "💰" }
        },
        {
          en: "Okay, continue",
          bn: "ঠিক আছে, চালিয়ে যাও",
          pronunciation_bn: "ওকে, কন্টিনিউ",
          slotValues: { RESPONSE: "Okay" },
          topicArea: "work",
          stage: 2,
          miniStory: { situation_bn: "সহকর্মী প্রজেক্টের কথা বলছে, তুমি বলছো 'ওকে, কন্টিনিউ'", icon: "💼" }
        },
        {
          en: "Uh-huh, uh-huh, yeah",
          bn: "হুম, হুম, হ্যাঁ",
          pronunciation_bn: "আহ-হাহ, আহ-হাহ, ইয়া",
          slotValues: { RESPONSE: "Uh-huh" },
          topicArea: "food",
          stage: 3,
          miniStory: { situation_bn: "রান্নার বিস্তারিত রেসিপি শুনছো, মাঝে মাঝে বলছো 'আহ-হাহ, আহ-হাহ, ইয়া'", icon: "🍽️" }
        },
        {
          en: "Yeah, absolutely",
          bn: "হ্যাঁ, একদম",
          pronunciation_bn: "ইয়া, অ্যাবসলিউটলি",
          slotValues: { RESPONSE: "Yeah" },
          topicArea: "religion",
          stage: 3,
          miniStory: { situation_bn: "ইমাম সাহেব নসিহত করছে, তুমি সম্মতি দিয়ে বলছো 'ইয়া, অ্যাবসলিউটলি'", icon: "🕌" }
        },
        {
          en: "Mm-hmm, I hear you",
          bn: "হুমম, শুনছি তোমার কথা",
          pronunciation_bn: "এম-হুম, আই হিয়ার ইউ",
          slotValues: { RESPONSE: "Mm-hmm" },
          topicArea: "relationships",
          stage: 3,
          miniStory: { situation_bn: "বোন সমস্যা শেয়ার করছে, তুমি সহানুভূতি দেখিয়ে বলছো 'এম-হুম, আই হিয়ার ইউ'", icon: "👥" }
        },
        {
          en: "Right, I understand completely",
          bn: "ঠিক, পুরোপুরি বুঝছি",
          pronunciation_bn: "রাইট, আই আন্ডারস্ট্যান্ড কমপ্লিটলি",
          slotValues: { RESPONSE: "Right" },
          topicArea: "emergency",
          stage: 3,
          miniStory: { situation_bn: "অসুস্থ রোগী তার ব্যথা বর্ণনা করছে, তুমি বলছো 'রাইট, আই আন্ডারস্ট্যান্ড কমপ্লিটলি'", icon: "🚨" }
        },
        {
          en: "Okay, I'm with you",
          bn: "ঠিক আছে, তোমার সাথে আছি",
          pronunciation_bn: "ওকে, আইম উইথ ইউ",
          slotValues: { RESPONSE: "Okay" },
          topicArea: "travel",
          stage: 3,
          miniStory: { situation_bn: "বাস কন্ডাক্টর জটিল রুটের ব্যাখ্যা দিচ্ছে, তুমি ধাপে ধাপে বুঝছো আর বলছো 'ওকে, আইম উইথ ইউ'", icon: "🚌" }
        }
      ]
    },
    {
      id: "H12.2",
      patternName: "I see / I understand",
      patternName_bn: "বুঝলাম বলা",
      formula: "I [VERB]",
      formula_bn: "আমি [বুঝছি]",
      formulaPronunciation_bn: "আই [ভার্ব]",
      concept_bn: "বুঝলাম",
      formality: "casual",
      difficulty: "beginner",
      usageNote: "Show that you understand what someone is saying. More active than uh-huh.",
      usageNote_bn: "বোঝাও যে তুমি কথাটা বুঝেছো। শুধু 'হুম' বলার চেয়ে একটু বেশি সক্রিয় উত্তর।",
      bridgeRuleIds: ["BR1", "BR2", "BR11"],
      conversionSteps: {
        banglaThought: "তুমি বাংলায় ভাবো: 'বুঝলাম / ধরতে পারছি'",
        steps: [
          { step_bn: "বোঝার শব্দ বেছে নাও — see / understand / get it", result: "see" },
          { step_bn: "'আই' দিয়ে শুরু করো + শব্দ বলো", result: "I see" }
        ],
        finalResult: "I see",
        finalResult_bn: "বুঝলাম"
      },
      banglaStructureMap: "বাংলা: বুঝলাম → English: I see | বাংলা: বুঝতে পারছি → English: I understand",
      commonMistakes: [
        { wrong: "I am see", correct: "I see", explanation_bn: "'সি' শব্দের আগে 'অ্যাম' লাগে না" },
        { wrong: "I understood (when just explained)", correct: "I understand", explanation_bn: "কেউ এইমাত্র বোঝালো মানে বর্তমান কাল বলো" },
        { wrong: "I see (when you don't understand)", correct: "I don't understand, can you explain?", explanation_bn: "না বুঝলে 'আই সি' বলো না — ওরা ভাবে তুমি বুঝেছো" }
      ],
      simpleRules: [
        { rule_bn: "কেউ কিছু বোঝানোর পরে বলো", example: "They explain, you say 'I see'" },
        { rule_bn: "'আই সি' মানে এখন বুঝলাম — চোখ দিয়ে দেখা নয়", example: "I see = I understand now" },
        { rule_bn: "'নাউ' যোগ করতে পারো আরো স্পষ্ট করতে", example: "I see now / I understand now" }
      ],
      usageSituations: [
        { situation_bn: "কেউ রাস্তা বোঝাচ্ছে", situation_en: "Someone explaining directions", exampleSentence: "I see, straight then left", exampleSentence_bn: "আই সি, সোজা তারপর বামে" },
        { situation_bn: "বস কাজ বুঝিয়ে দিচ্ছে", situation_en: "Boss explaining task", exampleSentence: "I understand, I'll do it by Friday", exampleSentence_bn: "আই আন্ডারস্ট্যান্ড, আইল ডু ইট বাই ফ্রাইডে" },
        { situation_bn: "বন্ধু সমস্যার কারণ বলছে", situation_en: "Friend telling problem reason", exampleSentence: "Oh, I see why you're upset", exampleSentence_bn: "ও, আই সি হোয়াই ইউর আপসেট" }
      ],
      sentenceBuilding: [
        { previousPatternId: "H12.5", previousFormula: "That's [ADJECTIVE]", previousFormula_bn: "ওটা [বিশেষণ]", combined: "I see, that makes sense", combined_bn: "আই সি, দ্যাট মেইকস সেন্স" },
        { previousPatternId: "H12.1", previousFormula: "[RESPONSE]", previousFormula_bn: "[সায়]", combined: "I understand, thank you for explaining", combined_bn: "আই আন্ডারস্ট্যান্ড, থ্যাংক ইউ ফর এক্সপ্লেইনিং" }
      ],
      memoryTrick_bn: "মনে রাখো: 'আই সি' মানে চোখে দেখা নয়, মাথায় বুঝলাম। বাংলায় যেমন বলো 'বুঝলাম', তেমনি ইংরেজিতে 'আই সি'।",
      chunks: [
        { en: "I see", bn: "বুঝলাম", pronunciation_bn: "আই সি" },
        { en: "I understand", bn: "বুঝতে পারছি", pronunciation_bn: "আই আন্ডারস্ট্যান্ড" },
        { en: "I get it", bn: "ধরতে পারলাম", pronunciation_bn: "আই গেট ইট" }
      ],
      wordMap: {
        bn_sentence: "আমি বুঝলাম",
        en_sentence: "I see",
        mappings: [
          { bn_word: "আমি", en_word: "I", type: "direct", bridgeRuleId: "BR1" },
          { bn_word: "বুঝলাম", en_word: "see", type: "direct", bridgeRuleId: "BR2" }
        ]
      },
      answerTemplates: [
        {
          situation_bn: "কেউ কিছু বুঝিয়ে দিলো",
          question: "Do you understand?",
          question_bn: "বুঝেছো?",
          answerFormula: "I [VERB]",
          answerFormula_bn: "আমি [বুঝছি]",
          pronunciation_bn: "আই সি",
          examples: [
            { answer: "I see", answer_bn: "বুঝলাম", pronunciation_bn: "আই সি" },
            { answer: "I understand, should I start now?", answer_bn: "বুঝেছি, এখন শুরু করব?", pronunciation_bn: "আই আন্ডারস্ট্যান্ড, শুড আই স্টার্ট নাউ?" },
            { answer: "I see, so you want it by Monday", answer_bn: "বুঝলাম, মানে সোমবারের মধ্যে চাও", pronunciation_bn: "আই সি, সো ইউ ওয়ান্ট ইট বাই মান্ডে" }
          ]
        }
      ],
      slots: [
        {
          name: "VERB",
          description: "Understanding verb",
          description_bn: "বোঝার শব্দ",
          acceptedTypes: ["verb"],
          examples: ["see", "understand", "get it", "got it", "follow"]
        }
      ],
      variations: [
        {
          variant: "past",
          label: "Past tense",
          label_bn: "অতীত কাল",
          formula: "I [PAST_VERB]",
          formula_bn: "আমি [বুঝেছিলাম]",
          examples: [
            {
              en: "I saw",
              bn: "বুঝেছিলাম",
              pronunciation_bn: "আই স",
              slotValues: { VERB: "saw" },
              stage: 2
            },
            {
              en: "I understood",
              bn: "বুঝতে পেরেছিলাম",
              pronunciation_bn: "আই আন্ডারস্টুড",
              slotValues: { VERB: "understood" },
              stage: 2
            },
            {
              en: "I got it",
              bn: "ধরতে পেরেছিলাম",
              pronunciation_bn: "আই গট ইট",
              slotValues: { VERB: "got it" },
              stage: 1
            }
          ]
        },
        {
          variant: "negative",
          label: "Negative",
          label_bn: "না-বাচক",
          formula: "I don't [VERB]",
          formula_bn: "আমি [বুঝছি] না",
          examples: [
            {
              en: "I don't see",
              bn: "বুঝছি না",
              pronunciation_bn: "আই ডোন্ট সি",
              slotValues: { VERB: "don't see" },
              stage: 2
            },
            {
              en: "I don't understand",
              bn: "বুঝতে পারছি না",
              pronunciation_bn: "আই ডোন্ট আন্ডারস্ট্যান্ড",
              slotValues: { VERB: "don't understand" },
              stage: 1
            },
            {
              en: "I don't get it",
              bn: "ধরতে পারছি না",
              pronunciation_bn: "আই ডোন্ট গেট ইট",
              slotValues: { VERB: "don't get it" },
              stage: 1
            }
          ]
        },
        {
          variant: "emphasis",
          label: "With emphasis",
          label_bn: "জোর দিয়ে",
          formula: "I [ADVERB] [VERB]",
          formula_bn: "আমি [জোর দিয়ে] [বুঝছি]",
          examples: [
            {
              en: "Oh, I see now",
              bn: "ও, এখন বুঝলাম",
              pronunciation_bn: "ও, আই সি নাউ",
              slotValues: { VERB: "see now" },
              stage: 2
            },
            {
              en: "I completely understand",
              bn: "পুরোপুরি বুঝছি",
              pronunciation_bn: "আই কমপ্লিটলি আন্ডারস্ট্যান্ড",
              slotValues: { VERB: "completely understand" },
              stage: 3
            },
            {
              en: "I finally get it",
              bn: "অবশেষে ধরতে পারলাম",
              pronunciation_bn: "আই ফাইনালি গেট ইট",
              slotValues: { VERB: "finally get it" },
              stage: 3
            }
          ]
        }
      ],
      dialogueChains: [
        {
          id: "H12.2-d1",
          title_bn: "ওষুধের নির্দেশ",
          title_en: "Getting medicine instructions",
          situation_bn: "ফার্মেসিতে ওষুধের নির্দেশ নিচ্ছো",
          icon: "💊",
          turns: [
            { speaker_bn: "ফার্মাসিস্ট", en: "Take one tablet after breakfast", bn: "নাস্তার পরে একটা ট্যাবলেট খাবে", pronunciation_bn: "টেক ওয়ান ট্যাবলেট আফটার ব্রেকফাস্ট" },
            { speaker_bn: "তুমি", en: "I see", bn: "বুঝলাম", pronunciation_bn: "আই সি", patternId: "H12.2" },
            { speaker_bn: "ফার্মাসিস্ট", en: "And one more after dinner", bn: "আর একটা রাতের খাবারের পরে", pronunciation_bn: "অ্যান্ড ওয়ান মোর আফটার ডিনার" },
            { speaker_bn: "তুমি", en: "I understand, twice a day", bn: "বুঝেছি, দিনে দুইবার", pronunciation_bn: "আই আন্ডারস্ট্যান্ড, টোয়াইস আ ডে", patternId: "H12.2" }
          ],
          patternsUsed: ["H12.2"]
        }
      ],
      examples: [
        {
          en: "I see",
          bn: "বুঝলাম",
          pronunciation_bn: "আই সি",
          slotValues: { VERB: "see" },
          topicArea: "daily_life",
          stage: 1,
          miniStory: { situation_bn: "প্রতিবেশী নতুন দোকানের জায়গা বোঝাচ্ছে, তুমি বলছো 'আই সি'", icon: "🏠" }
        },
        {
          en: "I understand",
          bn: "বুঝতে পারছি",
          pronunciation_bn: "আই আন্ডারস্ট্যান্ড",
          slotValues: { VERB: "understand" },
          topicArea: "work",
          stage: 1,
          miniStory: { situation_bn: "বস প্রজেক্ট বোঝাচ্ছে, তুমি মনোযোগ দিয়ে বলছো 'আই আন্ডারস্ট্যান্ড'", icon: "💼" }
        },
        {
          en: "I get it",
          bn: "ধরতে পারলাম",
          pronunciation_bn: "আই গেট ইট",
          slotValues: { VERB: "get it" },
          topicArea: "education",
          stage: 1,
          miniStory: { situation_bn: "শিক্ষক অঙ্ক বোঝাচ্ছে, কঠিন ছিল কিন্তু এখন বলছো 'আই গেট ইট'", icon: "📚" }
        },
        {
          en: "I follow",
          bn: "বুঝতে পারছি",
          pronunciation_bn: "আই ফলো",
          slotValues: { VERB: "follow" },
          topicArea: "travel",
          stage: 1,
          miniStory: { situation_bn: "বাস কন্ডাক্টর রুট বলছে, তুমি সাথে সাথে বলছো 'আই ফলো'", icon: "🚌" }
        },
        {
          en: "Got it",
          bn: "বুঝেছি",
          pronunciation_bn: "গট ইট",
          slotValues: { VERB: "got it" },
          topicArea: "shopping",
          stage: 1,
          miniStory: { situation_bn: "দোকানদার দাম আর অফার বলছে, তুমি দ্রুত বলছো 'গট ইট'", icon: "🛍️" }
        },
        {
          en: "I see what you mean",
          bn: "তুমি কী বলতে চাচ্ছো বুঝলাম",
          pronunciation_bn: "আই সি হোয়াট ইউ মিন",
          slotValues: { VERB: "see" },
          topicArea: "relationships",
          stage: 2,
          miniStory: { situation_bn: "বন্ধু তার সমস্যার কারণ বলছে, তুমি বুঝে বলছো 'আই সি হোয়াট ইউ মিন'", icon: "👥" }
        },
        {
          en: "I understand now",
          bn: "এখন বুঝতে পারছি",
          pronunciation_bn: "আই আন্ডারস্ট্যান্ড নাউ",
          slotValues: { VERB: "understand now" },
          topicArea: "finance",
          stage: 2,
          miniStory: { situation_bn: "ব্যাংক কর্মচারী সুদের হিসাব বোঝাচ্ছে, তুমি অবশেষে বলছো 'আই আন্ডারস্ট্যান্ড নাউ'", icon: "💰" }
        },
        {
          en: "I get it now",
          bn: "এখন ধরতে পারলাম",
          pronunciation_bn: "আই গেট ইট নাউ",
          slotValues: { VERB: "get it now" },
          topicArea: "health",
          stage: 2,
          miniStory: { situation_bn: "ডাক্তার রোগের কারণ বলছে, প্রথমে জটিল লেগেছিল কিন্তু এখন বলছো 'আই গেট ইট নাউ'", icon: "🏥" }
        },
        {
          en: "I follow you",
          bn: "তোমার কথা বুঝছি",
          pronunciation_bn: "আই ফলো ইউ",
          slotValues: { VERB: "follow" },
          topicArea: "work",
          stage: 2,
          miniStory: { situation_bn: "সহকর্মী লম্বা প্ল্যান বলছে, তুমি সাথে সাথে বলছো 'আই ফলো ইউ'", icon: "💼" }
        },
        {
          en: "Oh, I got it",
          bn: "ও, বুঝেছি",
          pronunciation_bn: "ও, আই গট ইট",
          slotValues: { VERB: "got it" },
          topicArea: "food",
          stage: 2,
          miniStory: { situation_bn: "রান্নার রেসিপির কঠিন ধাপ বুঝিয়ে দিলো, তুমি হঠাৎ বলছো 'ও, আই গট ইট'", icon: "🍽️" }
        },
        {
          en: "I see, that makes sense",
          bn: "বুঝলাম, মানে হচ্ছে",
          pronunciation_bn: "আই সি, দ্যাট মেইকস সেন্স",
          slotValues: { VERB: "see" },
          topicArea: "daily_life",
          stage: 3,
          miniStory: { situation_bn: "ইলেকট্রিশিয়ান বিদ্যুৎ বিল বেশি হওয়ার কারণ বলছে, তুমি বলছো 'আই সি, দ্যাট মেইকস সেন্স'", icon: "🏠" }
        },
        {
          en: "I completely understand your situation",
          bn: "তোমার অবস্থা পুরোপুরি বুঝতে পারছি",
          pronunciation_bn: "আই কমপ্লিটলি আন্ডারস্ট্যান্ড ইউর সিচুয়েশন",
          slotValues: { VERB: "completely understand" },
          topicArea: "relationships",
          stage: 3,
          miniStory: { situation_bn: "বন্ধু চাকরি ছাড়ার কারণ ব্যাখ্যা করছে, তুমি সহানুভূতি দিয়ে বলছো 'আই কমপ্লিটলি আন্ডারস্ট্যান্ড ইউর সিচুয়েশন'", icon: "👥" }
        },
        {
          en: "I finally get what you're saying",
          bn: "তুমি কী বলছো অবশেষে ধরতে পারলাম",
          pronunciation_bn: "আই ফাইনালি গেট হোয়াট ইউর সেয়িং",
          slotValues: { VERB: "finally get" },
          topicArea: "religion",
          stage: 3,
          miniStory: { situation_bn: "হুজুর জটিল মাসআলা বুঝিয়ে দিচ্ছে, তুমি অবশেষে বলছো 'আই ফাইনালি গেট হোয়াট ইউর সেয়িং'", icon: "🕌" }
        },
        {
          en: "I see exactly what you need",
          bn: "তোমার ঠিক কী দরকার বুঝলাম",
          pronunciation_bn: "আই সি এক্সাক্টলি হোয়াট ইউ নিড",
          slotValues: { VERB: "see" },
          topicArea: "shopping",
          stage: 3,
          miniStory: { situation_bn: "গ্রাহক তার প্রয়োজন বোঝাচ্ছে, তুমি দোকানদার হিসেবে বলছো 'আই সি এক্সাক্টলি হোয়াট ইউ নিড'", icon: "🛍️" }
        },
        {
          en: "I understand, thank you for explaining",
          bn: "বুঝেছি, বোঝানোর জন্য ধন্যবাদ",
          pronunciation_bn: "আই আন্ডারস্ট্যান্ড, থ্যাংক ইউ ফর এক্সপ্লেইনিং",
          slotValues: { VERB: "understand" },
          topicArea: "emergency",
          stage: 3,
          miniStory: { situation_bn: "হাসপাতালে ডাক্তার চিকিৎসা পদ্ধতি বিস্তারিত বলছে, তুমি বলছো 'আই আন্ডারস্ট্যান্ড, থ্যাংক ইউ ফর এক্সপ্লেইনিং'", icon: "🚨" }
        }
      ]
    },
    {
      id: "H12.3",
      patternName: "Really? / Seriously?",
      patternName_bn: "সত্যি? বলা",
      formula: "[QUESTION]?",
      formula_bn: "[প্রশ্ন]?",
      formulaPronunciation_bn: "[কোয়েশ্চন]?",
      concept_bn: "সত্যি",
      formality: "casual",
      difficulty: "beginner",
      usageNote: "Show surprise or interest when someone tells you something unexpected.",
      usageNote_bn: "কেউ অপ্রত্যাশিত কিছু বললে অবাক হওয়া বা আগ্রহ দেখাও।",
      bridgeRuleIds: ["BR1", "BR8", "BR11"],
      conversionSteps: {
        banglaThought: "তুমি বাংলায় ভাবো: 'সত্যি? / সিরিয়াস?'",
        steps: [
          { step_bn: "অবাক হওয়ার শব্দ বেছে নাও — really / seriously / no way", result: "Really" },
          { step_bn: "উপরে ওঠানো সুরে বলো", result: "Really?" }
        ],
        finalResult: "Really?",
        finalResult_bn: "সত্যি?"
      },
      banglaStructureMap: "বাংলা: সত্যি? → English: Really? | বাংলা: সিরিয়াস? → English: Seriously?",
      commonMistakes: [
        { wrong: "Really. (flat tone)", correct: "Really? (rising tone)", explanation_bn: "সমান সুরে বললে মনে হয় তোমার আগ্রহ নেই — সুর উপরে তোলো" },
        { wrong: "Really? Really? Really? (every sentence)", correct: "Really? (only for surprising news)", explanation_bn: "খুব ঘন ঘন বললে মনে হয় বিশ্বাস করছো না — শুধু অবাক করা খবরে বলো" },
        { wrong: "Real?", correct: "Really?", explanation_bn: "'রিয়াল?' না বলে 'রিয়েলি?' বলো — এটাই সঠিক রূপ" }
      ],
      simpleRules: [
        { rule_bn: "খবর শুনে অবাক লাগলে বলো", example: "They: I won lottery. You: Really?!" },
        { rule_bn: "শেষে গলার স্বর উপরে তোলো", example: "Really? Seriously?" },
        { rule_bn: "আরো অবাক হলে দুইবার বলতে পারো", example: "Really? Really?!" }
      ],
      usageSituations: [
        { situation_bn: "বন্ধু পদোন্নতি পেয়েছে", situation_en: "Friend got promotion", exampleSentence: "Really? Congratulations!", exampleSentence_bn: "রিয়েলি? কংগ্রাচুলেশনস!" },
        { situation_bn: "অবিশ্বাস্য খবর শুনছো", situation_en: "Hearing unbelievable news", exampleSentence: "Seriously?", exampleSentence_bn: "সিরিয়াসলি?" },
        { situation_bn: "কারো ভাগ্যের গল্প", situation_en: "Someone's lucky story", exampleSentence: "No way!", exampleSentence_bn: "নো ওয়ে!" }
      ],
      sentenceBuilding: [
        { previousPatternId: "H12.5", previousFormula: "That's [ADJECTIVE]", previousFormula_bn: "ওটা [বিশেষণ]", combined: "Really? That's great!", combined_bn: "রিয়েলি? দ্যাটস গ্রেট!" },
        { previousPatternId: "H12.2", previousFormula: "I [VERB]", previousFormula_bn: "আমি [বুঝছি]", combined: "Seriously? I didn't know that", combined_bn: "সিরিয়াসলি? আই ডিডন্ট নো দ্যাট" }
      ],
      memoryTrick_bn: "মনে রাখো: বাংলায় যেমন 'সত্যি নাকি?' বলো অবাক হয়ে, ইংরেজিতে তেমনি 'রিয়েলি?' বলো। গলার স্বর উপরে তোলো!",
      chunks: [
        { en: "Really?", bn: "সত্যি?", pronunciation_bn: "রিয়েলি?" },
        { en: "Seriously?", bn: "সিরিয়াস?", pronunciation_bn: "সিরিয়াসলি?" },
        { en: "No way!", bn: "হতে পারে না!", pronunciation_bn: "নো ওয়ে!" }
      ],
      wordMap: {
        bn_sentence: "সত্যি?",
        en_sentence: "Really?",
        mappings: [
          { bn_word: "সত্যি?", en_word: "Really?", type: "direct", bridgeRuleId: "BR1" }
        ]
      },
      answerTemplates: [
        {
          situation_bn: "কেউ অবাক করা খবর দিলো",
          question: "Did you hear that?",
          question_bn: "শুনেছো?",
          answerFormula: "[QUESTION]?",
          answerFormula_bn: "[প্রশ্ন]?",
          pronunciation_bn: "রিয়েলি?",
          examples: [
            { answer: "Really? Really?!", answer_bn: "সত্যি? সত্যি?!", pronunciation_bn: "রিয়েলি? রিয়েলি?!" },
            { answer: "Seriously? How did that happen?", answer_bn: "সিরিয়াস? কীভাবে হলো?", pronunciation_bn: "সিরিয়াসলি? হাউ ডিড দ্যাট হ্যাপেন?" },
            { answer: "No way!", answer_bn: "হতে পারে না!", pronunciation_bn: "নো ওয়ে!" }
          ]
        }
      ],
      slots: [
        {
          name: "QUESTION",
          description: "Surprise question word",
          description_bn: "অবাক হওয়ার প্রশ্নের শব্দ",
          acceptedTypes: ["interjection"],
          examples: ["Really", "Seriously", "No way", "Are you kidding", "You're joking"]
        }
      ],
      variations: [
        {
          variant: "intensity",
          label: "Different intensity",
          label_bn: "আলাদা জোর",
          formula: "[QUESTION]?",
          formula_bn: "[প্রশ্ন]?",
          examples: [
            {
              en: "Really? (mild surprise)",
              bn: "সত্যি? (হালকা অবাক)",
              pronunciation_bn: "রিয়েলি? (মাইল্ড সারপ্রাইজ)",
              slotValues: { QUESTION: "Really" },
              stage: 1
            },
            {
              en: "Seriously?! (strong surprise)",
              bn: "সিরিয়াস?! (জোর অবাক)",
              pronunciation_bn: "সিরিয়াসলি?! (স্ট্রং সারপ্রাইজ)",
              slotValues: { QUESTION: "Seriously" },
              stage: 2
            },
            {
              en: "No way! (complete shock)",
              bn: "হতে পারে না! (পুরো ধাক্কা)",
              pronunciation_bn: "নো ওয়ে! (কমপ্লিট শক)",
              slotValues: { QUESTION: "No way" },
              stage: 2
            }
          ]
        },
        {
          variant: "confirming",
          label: "Confirming questions",
          label_bn: "নিশ্চিত করার প্রশ্ন",
          formula: "Are you [WORD]?",
          formula_bn: "তুমি কি [শব্দ]?",
          examples: [
            {
              en: "Are you sure?",
              bn: "নিশ্চিত?",
              pronunciation_bn: "আর ইউ শিউর?",
              slotValues: { QUESTION: "Are you sure" },
              stage: 2
            },
            {
              en: "Are you kidding?",
              bn: "মজা করছো?",
              pronunciation_bn: "আর ইউ কিডিং?",
              slotValues: { QUESTION: "Are you kidding" },
              stage: 3
            },
            {
              en: "You're joking!",
              bn: "রসিকতা করছো!",
              pronunciation_bn: "ইউর জোকিং!",
              slotValues: { QUESTION: "You're joking" },
              stage: 3
            }
          ]
        },
        {
          variant: "repeated",
          label: "Repeated for emphasis",
          label_bn: "জোর দিতে দুইবার বলা",
          formula: "[QUESTION]? [QUESTION]?",
          formula_bn: "[প্রশ্ন]? [প্রশ্ন]?",
          examples: [
            {
              en: "Really? Really?",
              bn: "সত্যি? সত্যি?",
              pronunciation_bn: "রিয়েলি? রিয়েলি?",
              slotValues: { QUESTION: "Really" },
              stage: 1
            },
            {
              en: "Seriously? Are you serious?",
              bn: "সিরিয়াস? তুমি সিরিয়াস?",
              pronunciation_bn: "সিরিয়াসলি? আর ইউ সিরিয়াস?",
              slotValues: { QUESTION: "Seriously" },
              stage: 3
            },
            {
              en: "No way! No way!",
              bn: "হতে পারে না! হতে পারে না!",
              pronunciation_bn: "নো ওয়ে! নো ওয়ে!",
              slotValues: { QUESTION: "No way" },
              stage: 2
            }
          ]
        }
      ],
      dialogueChains: [
        {
          id: "H12.3-d1",
          title_bn: "দাম বৃদ্ধির খবর",
          title_en: "Surprising price increase",
          situation_bn: "বাজারে দাম বৃদ্ধির চমকে দেওয়া খবর শুনছো",
          icon: "🧅",
          turns: [
            { speaker_bn: "বিক্রেতা", en: "Onion is 120 taka per kilo", bn: "পেঁয়াজ ১২০ টাকা কেজি", pronunciation_bn: "অনিয়ন ইজ ওয়ান টুয়েন্টি টাকা পার কিলো" },
            { speaker_bn: "তুমি", en: "Seriously?", bn: "সিরিয়াস?", pronunciation_bn: "সিরিয়াসলি?", patternId: "H12.3" },
            { speaker_bn: "বিক্রেতা", en: "Yes, price went up yesterday", bn: "হ্যাঁ, গতকাল দাম বেড়েছে", pronunciation_bn: "ইয়েস, প্রাইস ওয়েন্ট আপ ইয়েস্টারডে" },
            { speaker_bn: "তুমি", en: "No way! It was 60 last week", bn: "হতে পারে না! গত সপ্তাহে ৬০ ছিল", pronunciation_bn: "নো ওয়ে! ইট ওয়াজ সিক্সটি লাস্ট উইক", patternId: "H12.3" }
          ],
          patternsUsed: ["H12.3"]
        }
      ],
      examples: [
        {
          en: "Really?",
          bn: "সত্যি?",
          pronunciation_bn: "রিয়েলি?",
          slotValues: { QUESTION: "Really" },
          topicArea: "daily_life",
          stage: 1,
          miniStory: { situation_bn: "বন্ধু বলছে সে নতুন বাইক কিনেছে, তুমি অবাক হয়ে বলছো 'রিয়েলি?'", icon: "🏠" }
        },
        {
          en: "Seriously?",
          bn: "সিরিয়াস?",
          pronunciation_bn: "সিরিয়াসলি?",
          slotValues: { QUESTION: "Seriously" },
          topicArea: "work",
          stage: 1,
          miniStory: { situation_bn: "সহকর্মী বলছে বস সবাইকে বোনাস দেবে, তুমি বলছো 'সিরিয়াসলি?'", icon: "💼" }
        },
        {
          en: "No way!",
          bn: "হতে পারে না!",
          pronunciation_bn: "নো ওয়ে!",
          slotValues: { QUESTION: "No way" },
          topicArea: "relationships",
          stage: 1,
          miniStory: { situation_bn: "প্রতিবেশী বলছে সিনেমা তারকা তাদের এলাকায় এসেছে, তুমি বলছো 'নো ওয়ে!'", icon: "👥" }
        },
        {
          en: "Are you sure?",
          bn: "নিশ্চিত?",
          pronunciation_bn: "আর ইউ শিউর?",
          slotValues: { QUESTION: "Are you sure" },
          topicArea: "travel",
          stage: 1,
          miniStory: { situation_bn: "রিকশাওয়ালা বলছে নতুন ফ্লাইওভার তৈরি হয়েছে, তুমি জিজ্ঞেস করছো 'আর ইউ শিউর?'", icon: "🚌" }
        },
        {
          en: "You're kidding!",
          bn: "মজা করছো!",
          pronunciation_bn: "ইউর কিডিং!",
          slotValues: { QUESTION: "You're kidding" },
          topicArea: "food",
          stage: 1,
          miniStory: { situation_bn: "দোস্ত বলছে নতুন রেস্তোরাঁয় বিরিয়ানি মাত্র ৮০ টাকা, তুমি বলছো 'ইউর কিডিং!'", icon: "🍽️" }
        },
        {
          en: "Really? That's amazing!",
          bn: "সত্যি? দারুণ তো!",
          pronunciation_bn: "রিয়েলি? দ্যাটস অ্যামেজিং!",
          slotValues: { QUESTION: "Really" },
          topicArea: "education",
          stage: 2,
          miniStory: { situation_bn: "ছোট ভাই বলছে সে স্কলারশিপ পেয়েছে, তুমি খুশি হয়ে বলছো 'রিয়েলি? দ্যাটস অ্যামেজিং!'", icon: "📚" }
        },
        {
          en: "Seriously? How did that happen?",
          bn: "সিরিয়াস? কীভাবে হলো?",
          pronunciation_bn: "সিরিয়াসলি? হাউ ডিড দ্যাট হ্যাপেন?",
          slotValues: { QUESTION: "Seriously" },
          topicArea: "emergency",
          stage: 2,
          miniStory: { situation_bn: "কেউ বলছে গতকাল বড় দুর্ঘটনা হয়েছে, তুমি বলছো 'সিরিয়াসলি? হাউ ডিড দ্যাট হ্যাপেন?'", icon: "🚨" }
        },
        {
          en: "No way! When did this happen?",
          bn: "হতে পারে না! কখন হলো এটা?",
          pronunciation_bn: "নো ওয়ে! হোয়েন ডিড দিস হ্যাপেন?",
          slotValues: { QUESTION: "No way" },
          topicArea: "work",
          stage: 2,
          miniStory: { situation_bn: "সহকর্মী বলছে কোম্পানি অফিস পরিবর্তন করবে, তুমি বলছো 'নো ওয়ে! হোয়েন ডিড দিস হ্যাপেন?'", icon: "💼" }
        },
        {
          en: "Are you sure? I heard different",
          bn: "নিশ্চিত? আমি ভিন্ন শুনেছি",
          pronunciation_bn: "আর ইউ শিউর? আই হার্ড ডিফারেন্ট",
          slotValues: { QUESTION: "Are you sure" },
          topicArea: "finance",
          stage: 2,
          miniStory: { situation_bn: "কেউ বলছে ডলারের দাম কমেছে, তুমি সন্দেহ করে বলছো 'আর ইউ শিউর? আই হার্ড ডিফারেন্ট'", icon: "💰" }
        },
        {
          en: "You're joking! That can't be true",
          bn: "রসিকতা করছো! সেটা সত্য হতে পারে না",
          pronunciation_bn: "ইউর জোকিং! দ্যাট ক্যান্ট বি ট্রু",
          slotValues: { QUESTION: "You're joking" },
          topicArea: "health",
          stage: 2,
          miniStory: { situation_bn: "কেউ বলছে নতুন ওষুধে সব রোগ সারে, তুমি সন্দেহ করে বলছো 'ইউর জোকিং! দ্যাট ক্যান্ট বি ট্রু'", icon: "🏥" }
        },
        {
          en: "Really? Really? I can't believe it!",
          bn: "সত্যি? সত্যি? বিশ্বাস করতে পারছি না!",
          pronunciation_bn: "রিয়েলি? রিয়েলি? আই ক্যান্ট বিলিভ ইট!",
          slotValues: { QUESTION: "Really" },
          topicArea: "shopping",
          stage: 3,
          miniStory: { situation_bn: "দোকানদার বলছে তোমার লটারি টিকিট জিতেছে, তুমি চমকে বলছো 'রিয়েলি? রিয়েলি? আই ক্যান্ট বিলিভ ইট!'", icon: "🛍️" }
        },
        {
          en: "Seriously? Are you absolutely certain?",
          bn: "সিরিয়াস? তুমি একদম নিশ্চিত?",
          pronunciation_bn: "সিরিয়াসলি? আর ইউ অ্যাবসলিউটলি সার্টেন?",
          slotValues: { QUESTION: "Seriously" },
          topicArea: "religion",
          stage: 3,
          miniStory: { situation_bn: "কেউ বলছে মসজিদে বিখ্যাত ইমাম আসবে, তুমি নিশ্চিত হতে বলছো 'সিরিয়াসলি? আর ইউ অ্যাবসলিউটলি সার্টেন?'", icon: "🕌" }
        },
        {
          en: "No way! No way! Show me proof",
          bn: "হতে পারে না! হতে পারে না! প্রমাণ দেখাও",
          pronunciation_bn: "নো ওয়ে! নো ওয়ে! শো মি প্রুফ",
          slotValues: { QUESTION: "No way" },
          topicArea: "daily_life",
          stage: 3,
          miniStory: { situation_bn: "কেউ বলছে প্রধানমন্ত্রী তোমার এলাকায় আসবে, তুমি বিশ্বাস করছো না আর বলছো 'নো ওয়ে! নো ওয়ে! শো মি প্রুফ'", icon: "🏠" }
        },
        {
          en: "Are you kidding me right now?",
          bn: "তুমি এখন আমার সাথে মজা করছো?",
          pronunciation_bn: "আর ইউ কিডিং মি রাইট নাউ?",
          slotValues: { QUESTION: "Are you kidding" },
          topicArea: "work",
          stage: 3,
          miniStory: { situation_bn: "বস বলছে এই সপ্তাহে ৭ দিন কাজ করতে হবে, তুমি অবিশ্বাসে বলছো 'আর ইউ কিডিং মি রাইট নাউ?'", icon: "💼" }
        },
        {
          en: "You're joking! This is unbelievable!",
          bn: "রসিকতা করছো! এটা অবিশ্বাস্য!",
          pronunciation_bn: "ইউর জোকিং! দিস ইজ আনবিলিভেবল!",
          slotValues: { QUESTION: "You're joking" },
          topicArea: "travel",
          stage: 3,
          miniStory: { situation_bn: "ট্রাভেল এজেন্ট বলছে বিমান টিকিট অর্ধেক দামে পাওয়া যাচ্ছে, তুমি অবাক হয়ে বলছো 'ইউর জোকিং! দিস ইজ আনবিলিভেবল!'", icon: "🚌" }
        }
      ]
    },
    {
      id: "H12.4",
      patternName: "Right / Exactly / Of course",
      patternName_bn: "ঠিক বলেছো বলা",
      formula: "[AGREEMENT]",
      formula_bn: "[একমত]",
      formulaPronunciation_bn: "[এগ্রিমেন্ট]",
      concept_bn: "ঠিক",
      formality: "casual",
      difficulty: "beginner",
      usageNote: "Show strong agreement with what someone is saying.",
      usageNote_bn: "কেউ যা বলছে তার সাথে জোরালো একমত পোষণ করো।",
      bridgeRuleIds: ["BR1", "BR11"],
      conversionSteps: {
        banglaThought: "তুমি বাংলায় ভাবো: 'ঠিক / একদম ঠিক'",
        steps: [
          { step_bn: "একমত হওয়ার শব্দ বেছে নাও — right / exactly / of course", result: "Exactly" },
          { step_bn: "দৃঢ়ভাবে বলো", result: "Exactly!" }
        ],
        finalResult: "Exactly!",
        finalResult_bn: "একদম ঠিক!"
      },
      banglaStructureMap: "বাংলা: ঠিক → English: Right | বাংলা: একদম ঠিক → English: Exactly | বাংলা: অবশ্যই → English: Of course",
      commonMistakes: [
        { wrong: "Yes (weak)", correct: "Right / Exactly (strong agreement)", explanation_bn: "'ইয়েস' দুর্বল — 'রাইট' বা 'এক্সাক্টলি' জোরালো একমত দেখায়" },
        { wrong: "Exact!", correct: "Exactly!", explanation_bn: "'এক্সাক্ট!' না বলে 'এক্সাক্টলি!' বলো — এটাই সঠিক রূপ" },
        { wrong: "Exactly! (when you don't understand)", correct: "I see (if unsure)", explanation_bn: "না বুঝে একমত বলো না — সত্যিই একমত হলে তবেই বলো" }
      ],
      simpleRules: [
        { rule_bn: "কেউ ভালো পয়েন্ট করলে বলো", example: "They: Traffic is terrible. You: Right!" },
        { rule_bn: "'এক্সাক্টলি' মানে তুমিও একই মনে করো", example: "They: It's too expensive. You: Exactly!" },
        { rule_bn: "'অফ কোর্স' মানে এটা স্বাভাবিক", example: "They: You'll come? You: Of course!" }
      ],
      usageSituations: [
        { situation_bn: "বন্ধু কোনো কিছুর অভিযোগ করছে", situation_en: "Friend complaining", exampleSentence: "Right, so annoying!", exampleSentence_bn: "রাইট, খুব বিরক্তিকর!" },
        { situation_bn: "কেউ তোমার মনের কথা বলছে", situation_en: "Someone saying what you think", exampleSentence: "Exactly! I can't take it", exampleSentence_bn: "এক্সাক্টলি! আমি সহ্য করতে পারছি না" },
        { situation_bn: "স্বাভাবিক কিছু করতে বলা হচ্ছে", situation_en: "Asked to do something normal", exampleSentence: "Of course!", exampleSentence_bn: "অফ কোর্স!" }
      ],
      sentenceBuilding: [
        { previousPatternId: "H12.1", previousFormula: "[RESPONSE]", previousFormula_bn: "[সায়]", combined: "Right, I totally agree", combined_bn: "রাইট, আই টোটালি এগ্রি" },
        { previousPatternId: "H12.5", previousFormula: "That's [ADJECTIVE]", previousFormula_bn: "ওটা [বিশেষণ]", combined: "Exactly! That's what I said", combined_bn: "এক্সাক্টলি! দ্যাটস হোয়াট আই সেড" }
      ],
      memoryTrick_bn: "মনে রাখো: 'রাইট' মানে ঠিক বলেছো। 'এক্সাক্টলি' মানে একদম ঠিক, আমিও তাই ভাবি। 'অফ কোর্স' মানে অবশ্যই, এটা তো স্বাভাবিক।",
      chunks: [
        { en: "Right", bn: "ঠিক", pronunciation_bn: "রাইট" },
        { en: "Exactly", bn: "একদম ঠিক", pronunciation_bn: "এক্সাক্টলি" },
        { en: "Of course", bn: "অবশ্যই", pronunciation_bn: "অফ কোর্স" }
      ],
      wordMap: {
        bn_sentence: "ঠিক / একদম ঠিক / অবশ্যই",
        en_sentence: "Right / Exactly / Of course",
        mappings: [
          { bn_word: "ঠিক", en_word: "Right", type: "direct", bridgeRuleId: "BR1" },
          { bn_word: "একদম ঠিক", en_word: "Exactly", type: "direct", bridgeRuleId: "BR1" },
          { bn_word: "অবশ্যই", en_word: "Of course", type: "direct", bridgeRuleId: "BR1" }
        ]
      },
      answerTemplates: [
        {
          situation_bn: "কেউ ভালো পয়েন্ট করলো",
          question: "Do you agree?",
          question_bn: "একমত?",
          answerFormula: "[AGREEMENT]!",
          answerFormula_bn: "[একমত]!",
          pronunciation_bn: "রাইট! / এক্সাক্টলি! / অফ কোর্স!",
          examples: [
            { answer: "Right!", answer_bn: "ঠিক!", pronunciation_bn: "রাইট!" },
            { answer: "Exactly! I saw that yesterday too", answer_bn: "একদম! আমিও গতকাল দেখেছি", pronunciation_bn: "এক্সাক্টলি! আই স দ্যাট ইয়েস্টারডে টু" },
            { answer: "Of course!", answer_bn: "অবশ্যই!", pronunciation_bn: "অফ কোর্স!" }
          ]
        }
      ],
      slots: [
        {
          name: "AGREEMENT",
          description: "Strong agreement word",
          description_bn: "জোরালো একমতের শব্দ",
          acceptedTypes: ["interjection", "adverb"],
          examples: ["Right", "Exactly", "Of course", "Absolutely", "Definitely", "For sure"]
        }
      ],
      variations: [
        {
          variant: "strength",
          label: "Different strength",
          label_bn: "আলাদা জোর",
          formula: "[AGREEMENT]",
          formula_bn: "[একমত]",
          examples: [
            {
              en: "Right (basic agreement)",
              bn: "ঠিক (মৌলিক একমত)",
              pronunciation_bn: "রাইট (বেসিক এগ্রিমেন্ট)",
              slotValues: { AGREEMENT: "Right" },
              stage: 1
            },
            {
              en: "Absolutely (strong agreement)",
              bn: "একদম (জোরালো একমত)",
              pronunciation_bn: "অ্যাবসলিউটলি (স্ট্রং এগ্রিমেন্ট)",
              slotValues: { AGREEMENT: "Absolutely" },
              stage: 2
            },
            {
              en: "Exactly right (very strong)",
              bn: "একদম ঠিক (খুব জোরালো)",
              pronunciation_bn: "এক্সাক্টলি রাইট (ভেরি স্ট্রং)",
              slotValues: { AGREEMENT: "Exactly right" },
              stage: 3
            }
          ]
        },
        {
          variant: "emphasis",
          label: "With emphasis",
          label_bn: "জোর দিয়ে",
          formula: "[EMPHASIS] [AGREEMENT]",
          formula_bn: "[জোর] [একমত]",
          examples: [
            {
              en: "That's right",
              bn: "ওটাই ঠিক",
              pronunciation_bn: "দ্যাটস রাইট",
              slotValues: { AGREEMENT: "That's right" },
              stage: 2
            },
            {
              en: "Exactly right",
              bn: "একদম ঠিক",
              pronunciation_bn: "এক্সাক্টলি রাইট",
              slotValues: { AGREEMENT: "Exactly right" },
              stage: 2
            },
            {
              en: "Of course, yes",
              bn: "অবশ্যই, হ্যাঁ",
              pronunciation_bn: "অফ কোর্স, ইয়েস",
              slotValues: { AGREEMENT: "Of course, yes" },
              stage: 3
            }
          ]
        },
        {
          variant: "casual",
          label: "Casual variations",
          label_bn: "নৈমিত্তিক বৈচিত্র্য",
          formula: "[CASUAL_AGREEMENT]",
          formula_bn: "[নৈমিত্তিক একমত]",
          examples: [
            {
              en: "Yeah, right",
              bn: "হ্যাঁ, ঠিক",
              pronunciation_bn: "ইয়া, রাইট",
              slotValues: { AGREEMENT: "Yeah, right" },
              stage: 1
            },
            {
              en: "For sure",
              bn: "নিশ্চিত",
              pronunciation_bn: "ফর শিউর",
              slotValues: { AGREEMENT: "For sure" },
              stage: 2
            },
            {
              en: "Definitely",
              bn: "নিশ্চিতভাবে",
              pronunciation_bn: "ডেফিনিটলি",
              slotValues: { AGREEMENT: "Definitely" },
              stage: 3
            }
          ]
        }
      ],
      dialogueChains: [
        {
          id: "H12.4-d1",
          title_bn: "ট্রাফিক সমস্যা আলোচনা",
          title_en: "Discussing traffic problems",
          situation_bn: "বাস স্টপে ট্রাফিক সমস্যা নিয়ে আলোচনা",
          icon: "🚌",
          turns: [
            { speaker_bn: "ব্যক্তি", en: "Traffic gets worse every year", bn: "প্রতি বছর ট্রাফিক আরো খারাপ হচ্ছে", pronunciation_bn: "ট্রাফিক গেটস ওয়ার্স এভরি ইয়ার" },
            { speaker_bn: "তুমি", en: "Right", bn: "ঠিক", pronunciation_bn: "রাইট", patternId: "H12.4" },
            { speaker_bn: "ব্যক্তি", en: "Government should do something", bn: "সরকারের কিছু করা উচিত", pronunciation_bn: "গভর্নমেন্ট শুড ডু সামথিং" },
            { speaker_bn: "তুমি", en: "Exactly! That's what I think too", bn: "একদম! আমিও তাই ভাবি", pronunciation_bn: "এক্সাক্টলি! দ্যাটস হোয়াট আই থিংক টু", patternId: "H12.4" }
          ],
          patternsUsed: ["H12.4"]
        }
      ],
      examples: [
        {
          en: "Right",
          bn: "ঠিক",
          pronunciation_bn: "রাইট",
          slotValues: { AGREEMENT: "Right" },
          topicArea: "daily_life",
          stage: 1,
          miniStory: { situation_bn: "প্রতিবেশী বলছে বিদ্যুৎ বিল বেশি, তুমি একমত হয়ে বলছো 'রাইট'", icon: "🏠" }
        },
        {
          en: "Exactly",
          bn: "একদম ঠিক",
          pronunciation_bn: "এক্সাক্টলি",
          slotValues: { AGREEMENT: "Exactly" },
          topicArea: "work",
          stage: 1,
          miniStory: { situation_bn: "সহকর্মী বলছে অফিস গরম, তুমি বলছো 'এক্সাক্টলি' কারণ তুমিও তাই ভাবছিলে", icon: "💼" }
        },
        {
          en: "Of course",
          bn: "অবশ্যই",
          pronunciation_bn: "অফ কোর্স",
          slotValues: { AGREEMENT: "Of course" },
          topicArea: "relationships",
          stage: 1,
          miniStory: { situation_bn: "মা জিজ্ঞেস করছে তুমি সাহায্য করবে কি না, তুমি বলছো 'অফ কোর্স'", icon: "👥" }
        },
        {
          en: "Absolutely",
          bn: "একদম",
          pronunciation_bn: "অ্যাবসলিউটলি",
          slotValues: { AGREEMENT: "Absolutely" },
          topicArea: "food",
          stage: 1,
          miniStory: { situation_bn: "বন্ধু বলছে এই রেস্তোরাঁর খাবার সুস্বাদু, তুমি জোরালো একমত হয়ে বলছো 'অ্যাবসলিউটলি'", icon: "🍽️" }
        },
        {
          en: "Definitely",
          bn: "নিশ্চিতভাবে",
          pronunciation_bn: "ডেফিনিটলি",
          slotValues: { AGREEMENT: "Definitely" },
          topicArea: "travel",
          stage: 1,
          miniStory: { situation_bn: "কেউ বলছে এই রুট দ্রুততর, তুমি একমত হয়ে বলছো 'ডেফিনিটলি'", icon: "🚌" }
        },
        {
          en: "Right, I know",
          bn: "ঠিক, জানি",
          pronunciation_bn: "রাইট, আই নো",
          slotValues: { AGREEMENT: "Right" },
          topicArea: "shopping",
          stage: 2,
          miniStory: { situation_bn: "দোস্ত বলছে এই দোকান দামি, তুমি বলছো 'রাইট, আই নো'", icon: "🛍️" }
        },
        {
          en: "Exactly what I was thinking",
          bn: "আমিও তাই ভাবছিলাম",
          pronunciation_bn: "এক্সাক্টলি হোয়াট আই ওয়াজ থিংকিং",
          slotValues: { AGREEMENT: "Exactly" },
          topicArea: "education",
          stage: 2,
          miniStory: { situation_bn: "সহপাঠী বলছে পরীক্ষা কঠিন ছিল, তুমি বলছো 'এক্সাক্টলি হোয়াট আই ওয়াজ থিংকিং'", icon: "📚" }
        },
        {
          en: "Of course I will",
          bn: "অবশ্যই করব",
          pronunciation_bn: "অফ কোর্স আই উইল",
          slotValues: { AGREEMENT: "Of course" },
          topicArea: "work",
          stage: 2,
          miniStory: { situation_bn: "বস জিজ্ঞেস করছে তুমি কাজ শেষ করবে কি না, তুমি বলছো 'অফ কোর্স আই উইল'", icon: "💼" }
        },
        {
          en: "Absolutely right",
          bn: "একদম ঠিক",
          pronunciation_bn: "অ্যাবসলিউটলি রাইট",
          slotValues: { AGREEMENT: "Absolutely right" },
          topicArea: "health",
          stage: 2,
          miniStory: { situation_bn: "ডাক্তার বলছে নিয়মিত ব্যায়াম করা দরকার, তুমি বলছো 'অ্যাবসলিউটলি রাইট'", icon: "🏥" }
        },
        {
          en: "Definitely, no doubt",
          bn: "নিশ্চিতভাবে, কোনো সন্দেহ নেই",
          pronunciation_bn: "ডেফিনিটলি, নো ডাউট",
          slotValues: { AGREEMENT: "Definitely" },
          topicArea: "finance",
          stage: 2,
          miniStory: { situation_bn: "ব্যাংক কর্মচারী বলছে সঞ্চয় করা উচিত, তুমি বলছো 'ডেফিনিটলি, নো ডাউট'", icon: "💰" }
        },
        {
          en: "That's right, I agree completely",
          bn: "ওটাই ঠিক, পুরোপুরি একমত",
          pronunciation_bn: "দ্যাটস রাইট, আই এগ্রি কমপ্লিটলি",
          slotValues: { AGREEMENT: "That's right" },
          topicArea: "daily_life",
          stage: 3,
          miniStory: { situation_bn: "পাড়ার মানুষ বলছে রাস্তা মেরামত দরকার, তুমি বলছো 'দ্যাটস রাইট, আই এগ্রি কমপ্লিটলি'", icon: "🏠" }
        },
        {
          en: "Exactly right, couldn't agree more",
          bn: "একদম ঠিক, এর চেয়ে বেশি একমত হতে পারি না",
          pronunciation_bn: "এক্সাক্টলি রাইট, কুডন্ট এগ্রি মোর",
          slotValues: { AGREEMENT: "Exactly right" },
          topicArea: "relationships",
          stage: 3,
          miniStory: { situation_bn: "বন্ধু বলছে পরিবারকে সময় দেওয়া গুরুত্বপূর্ণ, তুমি বলছো 'এক্সাক্টলি রাইট, কুডন্ট এগ্রি মোর'", icon: "👥" }
        },
        {
          en: "Of course, that's obvious",
          bn: "অবশ্যই, এটা তো স্পষ্ট",
          pronunciation_bn: "অফ কোর্স, দ্যাটস অবভিয়াস",
          slotValues: { AGREEMENT: "Of course" },
          topicArea: "religion",
          stage: 3,
          miniStory: { situation_bn: "ইমাম সাহেব বলছে সত্য কথা বলা উচিত, তুমি বলছো 'অফ কোর্স, দ্যাটস অবভিয়াস'", icon: "🕌" }
        },
        {
          en: "Absolutely, I've been saying this for years",
          bn: "একদম, আমি বছরের পর বছর ধরে এটাই বলছি",
          pronunciation_bn: "অ্যাবসলিউটলি, আইভ বিন সেয়িং দিস ফর ইয়ার্স",
          slotValues: { AGREEMENT: "Absolutely" },
          topicArea: "emergency",
          stage: 3,
          miniStory: { situation_bn: "কেউ বলছে হাসপাতালে আরো সুবিধা দরকার, তুমি বলছো 'অ্যাবসলিউটলি, আইভ বিন সেয়িং দিস ফর ইয়ার্স'", icon: "🚨" }
        },
        {
          en: "Definitely, you're spot on",
          bn: "নিশ্চিতভাবে, তুমি একদম ঠিক বলেছো",
          pronunciation_bn: "ডেফিনিটলি, ইউর স্পট অন",
          slotValues: { AGREEMENT: "Definitely" },
          topicArea: "work",
          stage: 3,
          miniStory: { situation_bn: "সহকর্মী বলছে প্রজেক্ট প্ল্যান ভালো, তুমি বলছো 'ডেফিনিটলি, ইউর স্পট অন'", icon: "💼" }
        }
      ]
    },
    {
      id: "H12.5",
      patternName: "That's great / That's interesting",
      patternName_bn: "ভালো লাগছে বলা",
      formula: "That's [ADJECTIVE]",
      formula_bn: "ওটা [বিশেষণ]",
      formulaPronunciation_bn: "দ্যাটস [অ্যাডজেকটিভ]",
      concept_bn: "দারুণ",
      formality: "casual",
      difficulty: "beginner",
      usageNote: "Show positive reaction to what someone is telling you.",
      usageNote_bn: "কেউ যা বলছে তাতে ইতিবাচক প্রতিক্রিয়া দেখাও।",
      bridgeRuleIds: ["BR1", "BR2", "BR11"],
      conversionSteps: {
        banglaThought: "তুমি বাংলায় ভাবো: 'দারুণ / ভালো লাগছে / মজার'",
        steps: [
          { step_bn: "ইতিবাচক বিশেষণ বেছে নাও — great / interesting / nice", result: "great" },
          { step_bn: "'দ্যাটস' দিয়ে শুরু করো + বিশেষণ বলো", result: "That's great!" }
        ],
        finalResult: "That's great!",
        finalResult_bn: "দারুণ!"
      },
      banglaStructureMap: "বাংলা: দারুণ → English: That's great | বাংলা: মজার → English: That's interesting",
      commonMistakes: [
        { wrong: "Great!", correct: "That's great!", explanation_bn: "'দ্যাটস' ভুলো না — শুধু 'গ্রেট' বললে অসম্পূর্ণ শোনায়" },
        { wrong: "That's great, that's great, that's great (same always)", correct: "That's great / That's interesting / That's wonderful", explanation_bn: "সবকিছুতে একই শব্দ না বলে মিশিয়ে বলো" },
        { wrong: "That's terrible (for good news)", correct: "That's great / wonderful / amazing", explanation_bn: "ভালো খবরে ইতিবাচক শব্দ বলো — 'টেরিবল' সমালোচনা মনে হয়" }
      ],
      simpleRules: [
        { rule_bn: "ভালো খবর বা গল্পে ব্যবহার করো", example: "They: I got new job. You: That's great!" },
        { rule_bn: "খবর অনুযায়ী বিশেষণ বদলাও", example: "Amazing news = That's amazing! Interesting story = That's interesting!" },
        { rule_bn: "উৎসাহ নিয়ে বলো — হেসে ও জোশের সাথে", example: "That's great! (with smile)" }
      ],
      usageSituations: [
        { situation_bn: "কেউ ভালো খবর শেয়ার করছে", situation_en: "Someone shares good news", exampleSentence: "That's wonderful!", exampleSentence_bn: "দ্যাটস ওয়ান্ডারফুল!" },
        { situation_bn: "মজার তথ্য শুনছো", situation_en: "Hearing an interesting fact", exampleSentence: "That's interesting!", exampleSentence_bn: "দ্যাটস ইন্টারেস্টিং!" },
        { situation_bn: "কেউ ভালো কিছু করেছে", situation_en: "Someone did something nice", exampleSentence: "That's nice of you!", exampleSentence_bn: "দ্যাটস নাইস অফ ইউ!" }
      ],
      sentenceBuilding: [
        { previousPatternId: "H12.4", previousFormula: "[AGREEMENT]", previousFormula_bn: "[একমত]", combined: "That's great! Congratulations!", combined_bn: "দ্যাটস গ্রেট! কংগ্রাচুলেশনস!" },
        { previousPatternId: "H12.6", previousFormula: "[QUESTION]?", previousFormula_bn: "[প্রশ্ন]?", combined: "That's interesting, tell me more", combined_bn: "দ্যাটস ইন্টারেস্টিং, টেল মি মোর" }
      ],
      memoryTrick_bn: "মনে রাখো: বাংলায় যেমন 'দারুণ তো!' বলো খুশি হয়ে, ইংরেজিতে তেমনি 'দ্যাটস গ্রেট!' বলো। 'দ্যাটস' ভুলো না!",
      chunks: [
        { en: "That's great", bn: "দারুণ", pronunciation_bn: "দ্যাটস গ্রেট" },
        { en: "That's interesting", bn: "মজার", pronunciation_bn: "দ্যাটস ইন্টারেস্টিং" },
        { en: "That's wonderful", bn: "অসাধারণ", pronunciation_bn: "দ্যাটস ওয়ান্ডারফুল" }
      ],
      wordMap: {
        bn_sentence: "ওটা দারুণ",
        en_sentence: "That's great",
        mappings: [
          { bn_word: "ওটা", en_word: "That's", type: "direct", bridgeRuleId: "BR1" },
          { bn_word: "দারুণ", en_word: "great", type: "direct", bridgeRuleId: "BR2" }
        ]
      },
      answerTemplates: [
        {
          situation_bn: "কেউ ভালো খবর দিলো",
          question: "I got promoted!",
          question_bn: "আমার পদোন্নতি হয়েছে!",
          answerFormula: "That's [ADJECTIVE]!",
          answerFormula_bn: "ওটা [বিশেষণ]!",
          pronunciation_bn: "দ্যাটস গ্রেট!",
          examples: [
            { answer: "That's great!", answer_bn: "দারুণ!", pronunciation_bn: "দ্যাটস গ্রেট!" },
            { answer: "That's interesting! How did you do it?", answer_bn: "মজার! কীভাবে করলে?", pronunciation_bn: "দ্যাটস ইন্টারেস্টিং! হাউ ডিড ইউ ডু ইট?" },
            { answer: "That's wonderful! Congratulations!", answer_bn: "অসাধারণ! অভিনন্দন!", pronunciation_bn: "দ্যাটস ওয়ান্ডারফুল! কংগ্রাচুলেশনস!" }
          ]
        }
      ],
      slots: [
        {
          name: "ADJECTIVE",
          description: "Positive descriptive word",
          description_bn: "ইতিবাচক বর্ণনার শব্দ",
          acceptedTypes: ["adjective"],
          examples: ["great", "interesting", "wonderful", "amazing", "nice", "awesome", "fantastic"]
        }
      ],
      variations: [
        {
          variant: "enthusiasm",
          label: "Different enthusiasm levels",
          label_bn: "আলাদা উৎসাহের মাত্রা",
          formula: "That's [ADJECTIVE]",
          formula_bn: "ওটা [বিশেষণ]",
          examples: [
            {
              en: "That's nice (mild positive)",
              bn: "ভালো (হালকা ইতিবাচক)",
              pronunciation_bn: "দ্যাটস নাইস (মাইল্ড পজিটিভ)",
              slotValues: { ADJECTIVE: "nice" },
              stage: 1
            },
            {
              en: "That's great (medium positive)",
              bn: "দারুণ (মাঝারি ইতিবাচক)",
              pronunciation_bn: "দ্যাটস গ্রেট (মিডিয়াম পজিটিভ)",
              slotValues: { ADJECTIVE: "great" },
              stage: 1
            },
            {
              en: "That's amazing! (high positive)",
              bn: "অসাধারণ! (খুব ইতিবাচক)",
              pronunciation_bn: "দ্যাটস অ্যামেজিং! (হাই পজিটিভ)",
              slotValues: { ADJECTIVE: "amazing" },
              stage: 2
            }
          ]
        },
        {
          variant: "situations",
          label: "For different situations",
          label_bn: "আলাদা পরিস্থিতিতে",
          formula: "That's [ADJECTIVE]",
          formula_bn: "ওটা [বিশেষণ]",
          examples: [
            {
              en: "That's wonderful",
              bn: "অসাধারণ",
              pronunciation_bn: "দ্যাটস ওয়ান্ডারফুল",
              slotValues: { ADJECTIVE: "wonderful" },
              stage: 2
            },
            {
              en: "That's awesome",
              bn: "দুর্দান্ত",
              pronunciation_bn: "দ্যাটস অসাম",
              slotValues: { ADJECTIVE: "awesome" },
              stage: 2
            },
            {
              en: "That's fantastic",
              bn: "চমৎকার",
              pronunciation_bn: "দ্যাটস ফ্যান্টাস্টিক",
              slotValues: { ADJECTIVE: "fantastic" },
              stage: 3
            }
          ]
        },
        {
          variant: "extra_words",
          label: "With extra words",
          label_bn: "অতিরিক্ত শব্দ সহ",
          formula: "That's [ADVERB] [ADJECTIVE]",
          formula_bn: "ওটা [জোর] [বিশেষণ]",
          examples: [
            {
              en: "That's really great",
              bn: "সত্যিই দারুণ",
              pronunciation_bn: "দ্যাটস রিয়েলি গ্রেট",
              slotValues: { ADJECTIVE: "really great" },
              stage: 2
            },
            {
              en: "That's so interesting",
              bn: "খুবই মজার",
              pronunciation_bn: "দ্যাটস সো ইন্টারেস্টিং",
              slotValues: { ADJECTIVE: "so interesting" },
              stage: 2
            },
            {
              en: "That's absolutely wonderful",
              bn: "একদম অসাধারণ",
              pronunciation_bn: "দ্যাটস অ্যাবসলিউটলি ওয়ান্ডারফুল",
              slotValues: { ADJECTIVE: "absolutely wonderful" },
              stage: 3
            }
          ]
        }
      ],
      dialogueChains: [
        {
          id: "H12.5-d1",
          title_bn: "পদোন্নতির খবর",
          title_en: "Friend sharing promotion news",
          situation_bn: "রেস্তোরাঁয় বন্ধু পদোন্নতির খবর শেয়ার করছে",
          icon: "🎉",
          turns: [
            { speaker_bn: "বন্ধু", en: "I got promoted to manager", bn: "আমার ম্যানেজার পদে পদোন্নতি হয়েছে", pronunciation_bn: "আই গট প্রমোটেড টু ম্যানেজার" },
            { speaker_bn: "তুমি", en: "That's wonderful!", bn: "অসাধারণ!", pronunciation_bn: "দ্যাটস ওয়ান্ডারফুল!", patternId: "H12.5" },
            { speaker_bn: "বন্ধু", en: "And they're giving me 30% raise", bn: "আর ৩০% বেতন বৃদ্ধি দিচ্ছে", pronunciation_bn: "অ্যান্ড দেয়ার গিভিং মি থার্টি পারসেন্ট রেইজ" },
            { speaker_bn: "তুমি", en: "That's amazing! Congratulations!", bn: "অসাধারণ! অভিনন্দন!", pronunciation_bn: "দ্যাটস অ্যামেজিং! কংগ্রাচুলেশনস!", patternId: "H12.5" }
          ],
          patternsUsed: ["H12.5"]
        }
      ],
      examples: [
        {
          en: "That's great",
          bn: "দারুণ",
          pronunciation_bn: "দ্যাটস গ্রেট",
          slotValues: { ADJECTIVE: "great" },
          topicArea: "daily_life",
          stage: 1,
          miniStory: { situation_bn: "প্রতিবেশী বলছে তার ছেলে ভালো রেজাল্ট করেছে, তুমি বলছো 'দ্যাটস গ্রেট'", icon: "🏠" }
        },
        {
          en: "That's interesting",
          bn: "মজার",
          pronunciation_bn: "দ্যাটস ইন্টারেস্টিং",
          slotValues: { ADJECTIVE: "interesting" },
          topicArea: "education",
          stage: 1,
          miniStory: { situation_bn: "শিক্ষক নতুন তথ্য বলছে, তুমি শুনে বলছো 'দ্যাটস ইন্টারেস্টিং'", icon: "📚" }
        },
        {
          en: "That's nice",
          bn: "ভালো",
          pronunciation_bn: "দ্যাটস নাইস",
          slotValues: { ADJECTIVE: "nice" },
          topicArea: "relationships",
          stage: 1,
          miniStory: { situation_bn: "বন্ধু বলছে সে তার মাকে উপহার দিয়েছে, তুমি বলছো 'দ্যাটস নাইস'", icon: "👥" }
        },
        {
          en: "That's wonderful",
          bn: "অসাধারণ",
          pronunciation_bn: "দ্যাটস ওয়ান্ডারফুল",
          slotValues: { ADJECTIVE: "wonderful" },
          topicArea: "work",
          stage: 1,
          miniStory: { situation_bn: "সহকর্মী বলছে প্রজেক্ট সফল হয়েছে, তুমি খুশি হয়ে বলছো 'দ্যাটস ওয়ান্ডারফুল'", icon: "💼" }
        },
        {
          en: "That's awesome",
          bn: "দুর্দান্ত",
          pronunciation_bn: "দ্যাটস অসাম",
          slotValues: { ADJECTIVE: "awesome" },
          topicArea: "travel",
          stage: 1,
          miniStory: { situation_bn: "বন্ধু বলছে সে কক্সবাজার গিয়েছিল, তুমি বলছো 'দ্যাটস অসাম'", icon: "🚌" }
        },
        {
          en: "That's really great",
          bn: "সত্যিই দারুণ",
          pronunciation_bn: "দ্যাটস রিয়েলি গ্রেট",
          slotValues: { ADJECTIVE: "really great" },
          topicArea: "shopping",
          stage: 2,
          miniStory: { situation_bn: "প্রতিবেশী বলছে নতুন মার্কেটে সব পাওয়া যায়, তুমি বলছো 'দ্যাটস রিয়েলি গ্রেট'", icon: "🛍️" }
        },
        {
          en: "That's so interesting, tell me more",
          bn: "খুবই মজার, আরো বলো",
          pronunciation_bn: "দ্যাটস সো ইন্টারেস্টিং, টেল মি মোর",
          slotValues: { ADJECTIVE: "so interesting" },
          topicArea: "food",
          stage: 2,
          miniStory: { situation_bn: "কেউ নতুন রেসিপির কথা বলছে, তুমি আগ্রহী হয়ে বলছো 'দ্যাটস সো ইন্টারেস্টিং, টেল মি মোর'", icon: "🍽️" }
        },
        {
          en: "That's very nice of you",
          bn: "খুব ভালো কাজ করেছো",
          pronunciation_bn: "দ্যাটস ভেরি নাইস অফ ইউ",
          slotValues: { ADJECTIVE: "very nice" },
          topicArea: "relationships",
          stage: 2,
          miniStory: { situation_bn: "কেউ বলছে সে গরিবদের সাহায্য করেছে, তুমি বলছো 'দ্যাটস ভেরি নাইস অফ ইউ'", icon: "👥" }
        },
        {
          en: "That's absolutely wonderful news",
          bn: "একদম অসাধারণ খবর",
          pronunciation_bn: "দ্যাটস অ্যাবসলিউটলি ওয়ান্ডারফুল নিউজ",
          slotValues: { ADJECTIVE: "absolutely wonderful" },
          topicArea: "health",
          stage: 2,
          miniStory: { situation_bn: "বন্ধু বলছে তার বাবা সুস্থ হয়ে বাড়ি ফিরেছে, তুমি বলছো 'দ্যাটস অ্যাবসলিউটলি ওয়ান্ডারফুল নিউজ'", icon: "🏥" }
        },
        {
          en: "That's pretty awesome",
          bn: "বেশ দুর্দান্ত",
          pronunciation_bn: "দ্যাটস প্রিটি অসাম",
          slotValues: { ADJECTIVE: "pretty awesome" },
          topicArea: "work",
          stage: 2,
          miniStory: { situation_bn: "সহকর্মী বলছে কোম্পানি নতুন বেনিফিট দিচ্ছে, তুমি বলছো 'দ্যাটস প্রিটি অসাম'", icon: "💼" }
        },
        {
          en: "That's amazing! How did you manage that?",
          bn: "অসাধারণ! তুমি কীভাবে সামলালে?",
          pronunciation_bn: "দ্যাটস অ্যামেজিং! হাউ ডিড ইউ ম্যানেজ দ্যাট?",
          slotValues: { ADJECTIVE: "amazing" },
          topicArea: "education",
          stage: 3,
          miniStory: { situation_bn: "ছাত্র বলছে সে কঠিন পরীক্ষায় ভালো করেছে, তুমি বলছো 'দ্যাটস অ্যামেজিং! হাউ ডিড ইউ ম্যানেজ দ্যাট?'", icon: "📚" }
        },
        {
          en: "That's fantastic news! I'm so happy for you",
          bn: "চমৎকার খবর! তোমার জন্য খুব খুশি",
          pronunciation_bn: "দ্যাটস ফ্যান্টাস্টিক নিউজ! আইম সো হ্যাপি ফর ইউ",
          slotValues: { ADJECTIVE: "fantastic" },
          topicArea: "relationships",
          stage: 3,
          miniStory: { situation_bn: "বন্ধু বলছে তার বিয়ে ঠিক হয়েছে, তুমি খুশিতে বলছো 'দ্যাটস ফ্যান্টাস্টিক নিউজ! আইম সো হ্যাপি ফর ইউ'", icon: "👥" }
        },
        {
          en: "That's incredibly interesting, I never knew",
          bn: "অবিশ্বাস্য মজার, আমি কখনো জানতাম না",
          pronunciation_bn: "দ্যাটস ইনক্রেডিবলি ইন্টারেস্টিং, আই নেভার নিউ",
          slotValues: { ADJECTIVE: "incredibly interesting" },
          topicArea: "religion",
          stage: 3,
          miniStory: { situation_bn: "হুজুর ইসলামের ইতিহাসের নতুন তথ্য বলছে, তুমি বলছো 'দ্যাটস ইনক্রেডিবলি ইন্টারেস্টিং, আই নেভার নিউ'", icon: "🕌" }
        },
        {
          en: "That's really nice, you should be proud",
          bn: "সত্যিই ভালো, তোমার গর্বিত হওয়া উচিত",
          pronunciation_bn: "দ্যাটস রিয়েলি নাইস, ইউ শুড বি প্রাউড",
          slotValues: { ADJECTIVE: "really nice" },
          topicArea: "finance",
          stage: 3,
          miniStory: { situation_bn: "কেউ বলছে সে প্রথমবার সঞ্চয় করেছে, তুমি উৎসাহিত করে বলছো 'দ্যাটস রিয়েলি নাইস, ইউ শুড বি প্রাউড'", icon: "💰" }
        },
        {
          en: "That's absolutely amazing! Congratulations!",
          bn: "একদম অসাধারণ! অভিনন্দন!",
          pronunciation_bn: "দ্যাটস অ্যাবসলিউটলি অ্যামেজিং! কংগ্রাচুলেশনস!",
          slotValues: { ADJECTIVE: "absolutely amazing" },
          topicArea: "emergency",
          stage: 3,
          miniStory: { situation_bn: "ডাক্তার বলছে জটিল অপারেশন সফল হয়েছে, পরিবার খুশিতে বলছে 'দ্যাটস অ্যাবসলিউটলি অ্যামেজিং! কংগ্রাচুলেশনস!'", icon: "🚨" }
        }
      ]
    },
    {
      id: "H12.6",
      patternName: "And then? / What happened?",
      patternName_bn: "তারপর? জিজ্ঞেস করা",
      formula: "[QUESTION]?",
      formula_bn: "[প্রশ্ন]?",
      formulaPronunciation_bn: "[কোয়েশ্চন]?",
      concept_bn: "তারপর",
      formality: "casual",
      difficulty: "beginner",
      usageNote: "Encourage someone to continue their story. Shows you want to hear more.",
      usageNote_bn: "কাউকে তাদের গল্প চালিয়ে যেতে উৎসাহিত করো। বোঝাও যে আরো শুনতে চাও।",
      bridgeRuleIds: ["BR1", "BR8", "BR11"],
      conversionSteps: {
        banglaThought: "তুমি বাংলায় ভাবো: 'তারপর? / কী হলো?'",
        steps: [
          { step_bn: "চালিয়ে যাওয়ার প্রশ্ন বেছে নাও — and then / what happened / go on", result: "And then" },
          { step_bn: "আগ্রহ নিয়ে জিজ্ঞেস করো", result: "And then?" }
        ],
        finalResult: "And then?",
        finalResult_bn: "তারপর?"
      },
      banglaStructureMap: "বাংলা: তারপর? → English: And then? | বাংলা: কী হলো? → English: What happened?",
      commonMistakes: [
        { wrong: "AND THEN?! (too impatient)", correct: "And then? (calm, gentle tone)", explanation_bn: "খুব অধৈর্যভাবে বললে ওরা তাড়া অনুভব করে — শান্তভাবে বলো" },
        { wrong: "And then? (flat, not caring)", correct: "And then? (leaning forward, interested)", explanation_bn: "যত্ন না দেখালে ভদ্রতা মনে হয় — সামনে ঝুঁকে আগ্রহ দেখাও" },
        { wrong: "And then?! (interrupting their pause)", correct: "...(wait 2-3 seconds)... And then?", explanation_bn: "তাদের থামা কাটো না — ওরা হয়তো ভাবছে, একটু অপেক্ষা করো" }
      ],
      simpleRules: [
        { rule_bn: "গল্প থামলে ব্যবহার করো", example: "They pause, you say 'And then?'" },
        { rule_bn: "'হোয়াট হ্যাপেন্ড?' রোমাঞ্চকর অংশে ব্যবহার করো", example: "They build suspense, you ask 'What happened?'" },
        { rule_bn: "শ্রোতার আওয়াজের সাথে মিলিয়ে বলতে পারো", example: "Uh-huh... and then?" }
      ],
      usageSituations: [
        {
          situation_en: "Friend telling long story",
          situation_bn: "বন্ধু লম্বা গল্প বলছে",
          exampleSentence: "Friend pauses, you: 'And then? What happened next?'",
          exampleSentence_bn: "বন্ধু থামে, তুমি: 'অ্যান্ড দেন? হোয়াট হ্যাপেন্ড নেক্সট?'"
        },
        {
          situation_en: "Exciting story at suspense point",
          situation_bn: "রোমাঞ্চকর গল্পের সাসপেন্স পয়েন্টে",
          exampleSentence: "They: 'I opened the door and...' You: 'What happened?!'",
          exampleSentence_bn: "ওরা: 'আমি দরজা খুললাম আর...' তুমি: 'হোয়াট হ্যাপেন্ড?!'"
        },
        {
          situation_en: "Encouraging shy person to talk",
          situation_bn: "লাজুক মানুষকে কথা বলতে উৎসাহিত করা",
          exampleSentence: "They hesitate, you: 'Go on, I'm listening'",
          exampleSentence_bn: "ওরা দ্বিধা করে, তুমি: 'গো অন, আইম লিসেনিং'"
        }
      ],
      sentenceBuilding: [
        {
          previousPatternId: "H12.5",
          previousFormula: "I see / I understand",
          previousFormula_bn: "আমি বুঝতে পারছি",
          combined: "I see. And then? What did you do?",
          combined_bn: "আমি বুঝতে পারছি। অ্যান্ড দেন? হোয়াট ডিড ইউ ডু?"
        },
        {
          previousPatternId: "H12.4",
          previousFormula: "Really?",
          previousFormula_bn: "সত্যি?",
          combined: "Really? What happened after that?",
          combined_bn: "সত্যি? হোয়াট হ্যাপেন্ড আফটার দ্যাট?"
        }
      ],
      memoryTrick_bn: "মনে রাখো: বাংলায় যেমন 'তারপর?' বলো গল্প শুনতে শুনতে, ইংরেজিতে তেমনি 'অ্যান্ড দেন?' বলো। আগ্রহ দেখাও!",
      chunks: [
        { en: "And then?", bn: "তারপর?", pronunciation_bn: "অ্যান্ড দেন?" },
        { en: "What happened?", bn: "কী হলো?", pronunciation_bn: "হোয়াট হ্যাপেন্ড?" },
        { en: "Go on", bn: "চালিয়ে যাও", pronunciation_bn: "গো অন" }
      ],
      wordMap: {
        bn_sentence: "তারপর? কী হলো?",
        en_sentence: "And then? What happened?",
        mappings: [
          { bn_word: "তারপর", en_word: "And then", type: "direct", bridgeRuleId: "BR1" },
          { bn_word: "কী", en_word: "What", type: "moved", bridgeRuleId: "BR2" },
          { bn_word: "হলো", en_word: "happened", type: "direct" },
          { bn_word: "(নেই)", en_word: "?", type: "added", bridgeRuleId: "BR8" }
        ]
      },
      answerTemplates: [
        {
          situation_bn: "যখন বন্ধু গল্প বলতে বলতে থামে",
          question: "And then?",
          question_bn: "তারপর?",
          answerFormula: "[PERSON] continues the story",
          answerFormula_bn: "[ব্যক্তি] গল্প চালিয়ে যায়",
          pronunciation_bn: "অ্যান্ড দেন?",
          examples: [
            { answer: "So then I ran to catch the bus!", answer_bn: "তারপর আমি বাস ধরতে দৌড়ালাম!", pronunciation_bn: "সো দেন আই র‍্যান টু ক্যাচ দ্য বাস!" },
            { answer: "After that, we went home.", answer_bn: "তারপর আমরা বাসায় গেলাম।", pronunciation_bn: "আফটার দ্যাট, উই ওয়েন্ট হোম।" },
            { answer: "Then the teacher came in!", answer_bn: "তারপর টিচার ঢুকলেন!", pronunciation_bn: "দেন দ্য টিচার কেম ইন!" }
          ]
        },
        {
          situation_bn: "যখন রোমাঞ্চকর মুহূর্তে জানতে চাও কী হলো",
          question: "What happened?!",
          question_bn: "কী হলো?!",
          answerFormula: "[PERSON] tells what happened",
          answerFormula_bn: "[ব্যক্তি] বলে কী হয়েছিল",
          pronunciation_bn: "হোয়াট হ্যাপেন্ড?!",
          examples: [
            { answer: "The rickshaw hit a pothole!", answer_bn: "রিকশা একটা গর্তে পড়লো!", pronunciation_bn: "দ্য রিকশা হিট আ পটহোল!" },
            { answer: "Everyone started shouting!", answer_bn: "সবাই চিৎকার শুরু করলো!", pronunciation_bn: "এভরিওয়ান স্টার্টেড শাউটিং!" },
            { answer: "The lights went out suddenly!", answer_bn: "হঠাৎ লাইট চলে গেলো!", pronunciation_bn: "দ্য লাইটস ওয়েন্ট আউট সাডেনলি!" }
          ]
        },
        {
          situation_bn: "যখন লাজুক মানুষকে গল্প বলতে উৎসাহিত করো",
          question: "Go on, I'm listening.",
          question_bn: "চালিয়ে যাও, শুনছি।",
          answerFormula: "[PERSON] continues with confidence",
          answerFormula_bn: "[ব্যক্তি] সাহস পেয়ে চালিয়ে যায়",
          pronunciation_bn: "গো অন, আইম লিসেনিং।",
          examples: [
            { answer: "Okay, so after that...", answer_bn: "আচ্ছা, তারপর...", pronunciation_bn: "ওকে, সো আফটার দ্যাট..." },
            { answer: "Well, the thing is...", answer_bn: "আসলে ব্যাপারটা হলো...", pronunciation_bn: "ওয়েল, দ্য থিং ইজ..." },
            { answer: "So basically what happened was...", answer_bn: "মূলত যা হয়েছিল...", pronunciation_bn: "সো বেসিক্যালি হোয়াট হ্যাপেন্ড ওয়াজ..." }
          ]
        }
      ],
      slots: [
        {
          name: "QUESTION",
          description: "Continuation question",
          description_bn: "চালিয়ে যাওয়ার প্রশ্ন",
          acceptedTypes: ["question"],
          examples: ["And then", "What happened", "Go on", "What next", "Then what", "Continue"]
        }
      ],
      variations: [
        {
          variant: "ways_to_ask",
          label: "Different ways to ask",
          label_bn: "আলাদাভাবে জিজ্ঞেস করা",
          formula: "[QUESTION]?",
          formula_bn: "[প্রশ্ন]?",
          examples: [
            {
              en: "And then?",
              bn: "তারপর?",
              pronunciation_bn: "অ্যান্ড দেন?",
              slotValues: { QUESTION: "And then" },
              topicArea: "daily_life",
              stage: 1
            },
            {
              en: "What happened next?",
              bn: "তারপর কী হলো?",
              pronunciation_bn: "হোয়াট হ্যাপেন্ড নেক্সট?",
              slotValues: { QUESTION: "What happened next" },
              topicArea: "daily_life",
              stage: 2
            },
            {
              en: "Then what did you do?",
              bn: "তারপর তুমি কী করলে?",
              pronunciation_bn: "দেন হোয়াট ডিড ইউ ডু?",
              slotValues: { QUESTION: "Then what did you do" },
              topicArea: "daily_life",
              stage: 3
            }
          ]
        },
        {
          variant: "encouraging",
          label: "Encouraging versions",
          label_bn: "উৎসাহদায়ক সংস্করণ",
          formula: "[ENCOURAGEMENT]",
          formula_bn: "[উৎসাহ]",
          examples: [
            {
              en: "Go on",
              bn: "চালিয়ে যাও",
              pronunciation_bn: "গো অন",
              slotValues: { QUESTION: "Go on" },
              topicArea: "daily_life",
              stage: 1
            },
            {
              en: "Keep going",
              bn: "চালিয়ে যাও",
              pronunciation_bn: "কিপ গোয়িং",
              slotValues: { QUESTION: "Keep going" },
              topicArea: "daily_life",
              stage: 2
            },
            {
              en: "Continue, I'm listening",
              bn: "চালিয়ে যাও, শুনছি",
              pronunciation_bn: "কন্টিনিউ, আইম লিসেনিং",
              slotValues: { QUESTION: "Continue" },
              topicArea: "daily_life",
              stage: 3
            }
          ]
        },
        {
          variant: "excited",
          label: "Excited versions",
          label_bn: "উত্তেজিত সংস্করণ",
          formula: "[QUESTION]?!",
          formula_bn: "[প্রশ্ন]?!",
          examples: [
            {
              en: "And then what?!",
              bn: "তারপর কী?!",
              pronunciation_bn: "অ্যান্ড দেন হোয়াট?!",
              slotValues: { QUESTION: "And then what" },
              topicArea: "daily_life",
              stage: 2
            },
            {
              en: "What happened after that?!",
              bn: "তার পরে কী হলো?!",
              pronunciation_bn: "হোয়াট হ্যাপেন্ড আফটার দ্যাট?!",
              slotValues: { QUESTION: "What happened after that" },
              topicArea: "daily_life",
              stage: 2
            },
            {
              en: "Oh my god, what happened next?!",
              bn: "ও মাই গড, তারপর কী হলো?!",
              pronunciation_bn: "ও মাই গড, হোয়াট হ্যাপেন্ড নেক্সট?!",
              slotValues: { QUESTION: "What happened next" },
              topicArea: "daily_life",
              stage: 3
            }
          ]
        }
      ],
      dialogueChains: [
        {
          id: "dc-h12.6-1",
          title_bn: "রোমাঞ্চকর দুর্ঘটনার গল্প শুনছো",
          title_en: "Hearing exciting accident story",
          situation_bn: "চায়ের দোকানে বন্ধু দুর্ঘটনার গল্প বলছে, তুমি আগ্রহ দেখাচ্ছো",
          icon: "🚌",
          turns: [
            {
              speaker_bn: "ব্যক্তি",
              en: "The bus was going too fast",
              bn: "বাসটা খুব জোরে যাচ্ছিল",
              pronunciation_bn: "দ্য বাস ওয়াজ গোয়িং টু ফাস্ট"
            },
            {
              speaker_bn: "তুমি",
              en: "And then?",
              bn: "তারপর?",
              pronunciation_bn: "অ্যান্ড দেন?",
              patternId: "H12.6"
            },
            {
              speaker_bn: "ব্যক্তি",
              en: "Suddenly a rickshaw came from the side",
              bn: "হঠাৎ পাশ থেকে একটা রিকশা আসলো",
              pronunciation_bn: "সাডেনলি আ রিকশা কেম ফ্রম দ্য সাইড"
            },
            {
              speaker_bn: "তুমি",
              en: "What happened?!",
              bn: "কী হলো?!",
              pronunciation_bn: "হোয়াট হ্যাপেন্ড?!",
              patternId: "H12.6"
            },
            {
              speaker_bn: "ব্যক্তি",
              en: "The driver braked hard, we all fell forward",
              bn: "ড্রাইভার জোরে ব্রেক করলো, আমরা সবাই সামনে পড়ে গেলাম",
              pronunciation_bn: "দ্য ড্রাইভার ব্রেক্ড হার্ড, উই অল ফেল ফরওয়ার্ড"
            },
            {
              speaker_bn: "তুমি",
              en: "Then what? Was anyone hurt?",
              bn: "তারপর কী? কেউ আহত হয়েছিল?",
              pronunciation_bn: "দেন হোয়াট? ওয়াজ এনিওয়ান হার্ট?",
              patternId: "H12.6"
            }
          ],
          patternsUsed: ["H12.6"]
        }
      ],
      examples: [
        {
          en: "And then?",
          bn: "তারপর?",
          pronunciation_bn: "অ্যান্ড দেন?",
          slotValues: { QUESTION: "And then" },
          topicArea: "daily_life",
          stage: 1,
          miniStory: { situation_bn: "বন্ধু বাজারের ঘটনা বলছে আর থামে, তুমি জিজ্ঞেস করছো 'অ্যান্ড দেন?'", icon: "🏠" }
        },
        {
          en: "What happened?",
          bn: "কী হলো?",
          pronunciation_bn: "হোয়াট হ্যাপেন্ড?",
          slotValues: { QUESTION: "What happened" },
          topicArea: "emergency",
          stage: 1,
          miniStory: { situation_bn: "কেউ দুর্ঘটনার গল্প বলছে, তুমি আগ্রহী হয়ে জিজ্ঞেস করছো 'হোয়াট হ্যাপেন্ড?'", icon: "🚨" }
        },
        {
          en: "Go on",
          bn: "চালিয়ে যাও",
          pronunciation_bn: "গো অন",
          slotValues: { QUESTION: "Go on" },
          topicArea: "relationships",
          stage: 1,
          miniStory: { situation_bn: "বোন দ্বিধা করে কথা বলছে, তুমি উৎসাহিত করছো 'গো অন'", icon: "👥" }
        },
        {
          en: "Then what?",
          bn: "তারপর কী?",
          pronunciation_bn: "দেন হোয়াট?",
          slotValues: { QUESTION: "Then what" },
          topicArea: "work",
          stage: 1,
          miniStory: { situation_bn: "সহকর্মী অফিসের ঘটনা বলছে, তুমি জিজ্ঞেস করছো 'দেন হোয়াট?'", icon: "💼" }
        },
        {
          en: "What next?",
          bn: "পরে কী?",
          pronunciation_bn: "হোয়াট নেক্সট?",
          slotValues: { QUESTION: "What next" },
          topicArea: "travel",
          stage: 1,
          miniStory: { situation_bn: "রিকশাওয়ালা তার যাত্রার গল্প বলছে, তুমি জিজ্ঞেস করছো 'হোয়াট নেক্সট?'", icon: "🚌" }
        },
        {
          en: "And then what happened?",
          bn: "তারপর কী হলো?",
          pronunciation_bn: "অ্যান্ড দেন হোয়াট হ্যাপেন্ড?",
          slotValues: { QUESTION: "And then what happened" },
          topicArea: "shopping",
          stage: 2,
          miniStory: { situation_bn: "দোকানদার ঠকবাজির গল্প বলছে, তুমি জিজ্ঞেস করছো 'অ্যান্ড দেন হোয়াট হ্যাপেন্ড?'", icon: "🛍️" }
        },
        {
          en: "What did you do then?",
          bn: "তারপর তুমি কী করলে?",
          pronunciation_bn: "হোয়াট ডিড ইউ ডু দেন?",
          slotValues: { QUESTION: "What did you do then" },
          topicArea: "health",
          stage: 2,
          miniStory: { situation_bn: "রোগী বলছে তার ব্যথা শুরু হয়েছিল, তুমি জিজ্ঞেস করছো 'হোয়াট ডিড ইউ ডু দেন?'", icon: "🏥" }
        },
        {
          en: "Keep going, I'm listening",
          bn: "চালিয়ে যাও, শুনছি",
          pronunciation_bn: "কিপ গোয়িং, আইম লিসেনিং",
          slotValues: { QUESTION: "Keep going" },
          topicArea: "education",
          stage: 2,
          miniStory: { situation_bn: "ছাত্র তার পরীক্ষার অভিজ্ঞতা বলছে, তুমি উৎসাহিত করছো 'কিপ গোয়িং, আইম লিসেনিং'", icon: "📚" }
        },
        {
          en: "Continue, don't stop",
          bn: "চালিয়ে যাও, থেমো না",
          pronunciation_bn: "কন্টিনিউ, ডোন্ট স্টপ",
          slotValues: { QUESTION: "Continue" },
          topicArea: "food",
          stage: 2,
          miniStory: { situation_bn: "রাঁধুনি রেসিপির গল্প বলছে, তুমি বলছো 'কন্টিনিউ, ডোন্ট স্টপ'", icon: "🍽️" }
        },
        {
          en: "What happened after that?",
          bn: "তার পরে কী হলো?",
          pronunciation_bn: "হোয়াট হ্যাপেন্ড আফটার দ্যাট?",
          slotValues: { QUESTION: "What happened after that" },
          topicArea: "finance",
          stage: 2,
          miniStory: { situation_bn: "ব্যাংক কর্মচারী জালিয়াতির ঘটনা বলছে, তুমি জিজ্ঞেস করছো 'হোয়াট হ্যাপেন্ড আফটার দ্যাট?'", icon: "💰" }
        },
        {
          en: "And then what? Tell me everything!",
          bn: "তারপর কী? সব বলো!",
          pronunciation_bn: "অ্যান্ড দেন হোয়াট? টেল মি এভরিথিং!",
          slotValues: { QUESTION: "And then what" },
          topicArea: "daily_life",
          stage: 3,
          miniStory: { situation_bn: "প্রতিবেশী রোমাঞ্চকর ঘটনা বলছে, তুমি উত্তেজিত হয়ে বলছো 'অ্যান্ড দেন হোয়াট? টেল মি এভরিথিং!'", icon: "🏠" }
        },
        {
          en: "Oh my god, what happened next?!",
          bn: "ও মাই গড, তারপর কী হলো?!",
          pronunciation_bn: "ও মাই গড, হোয়াট হ্যাপেন্ড নেক্সট?!",
          slotValues: { QUESTION: "What happened next" },
          topicArea: "emergency",
          stage: 3,
          miniStory: { situation_bn: "কেউ ভয়ানক দুর্ঘটনার কথা বলছে, তুমি চমকে জিজ্ঞেস করছো 'ও মাই গড, হোয়াট হ্যাপেন্ড নেক্সট?!'", icon: "🚨" }
        },
        {
          en: "Then what did you do? I need to know!",
          bn: "তারপর তুমি কী করলে? আমার জানতে হবে!",
          pronunciation_bn: "দেন হোয়াট ডিড ইউ ডু? আই নিড টু নো!",
          slotValues: { QUESTION: "Then what did you do" },
          topicArea: "work",
          stage: 3,
          miniStory: { situation_bn: "সহকর্মী অফিসে বড় সমস্যার গল্প বলছে, তুমি আগ্রহ নিয়ে বলছো 'দেন হোয়াট ডিড ইউ ডু? আই নিড টু নো!'", icon: "💼" }
        },
        {
          en: "Continue please, this is fascinating",
          bn: "চালিয়ে যাও প্লিজ, এটা অসাধারণ",
          pronunciation_bn: "কন্টিনিউ প্লিজ, দিস ইজ ফ্যাসিনেটিং",
          slotValues: { QUESTION: "Continue" },
          topicArea: "religion",
          stage: 3,
          miniStory: { situation_bn: "হুজুর ইসলামের ইতিহাসের গল্প বলছে, তুমি মুগ্ধ হয়ে বলছো 'কন্টিনিউ প্লিজ, দিস ইজ ফ্যাসিনেটিং'", icon: "🕌" }
        },
        {
          en: "What happened after that? Don't leave me hanging!",
          bn: "তার পরে কী হলো? আমাকে ঝুলিয়ে রেখো না!",
          pronunciation_bn: "হোয়াট হ্যাপেন্ড আফটার দ্যাট? ডোন্ট লিভ মি হ্যাঙ্গিং!",
          slotValues: { QUESTION: "What happened after that" },
          topicArea: "relationships",
          stage: 3,
          miniStory: { situation_bn: "বন্ধু তার প্রেমের গল্পের সাসপেন্স পয়েন্টে থামে, তুমি বলছো 'হোয়াট হ্যাপেন্ড আফটার দ্যাট? ডোন্ট লিভ মি হ্যাঙ্গিং!'", icon: "👥" }
        }
      ]
    }
  ]
};
