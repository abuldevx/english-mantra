import { PatternCategory } from "@/types/pattern";

export const categoryR16: PatternCategory = {
  id: "R16",
  slug: "conversation-fillers",
  name: "Conversation Fillers",
  name_bn: "কথার ফাঁকে ফাঁকে বলা কথা",
  description: "Learn natural conversation fillers that make your English sound fluent.",
  description_bn: "ইংরেজিতে কথা বলার সময় ফাঁকে ফাঁকে যে কথাগুলো বলে — Well, Actually, You know — সেগুলো শেখো।",
  icon: "🗨️",
  group: "R",
  groupName: "Logical & Discourse Connectors",
  groupName_bn: "যুক্তি ও কথার সংযোগ",
  difficulty: "intermediate",
  patterns: [
    {
      id: "R16.1",
      patternName: "Using 'Well' to start or soften",
      patternName_bn: "আচ্ছা... বলা",
      formula: "Well, [STATEMENT]",
      formula_bn: "আচ্ছা, [কথা]",
      concept_bn: "আচ্ছা",
      formulaPronunciation_bn: "ওয়েল, [স্টেটমেন্ট]",
      bridgeRuleIds: ["BR1", "BR6"],
      usageNote: "Well is used to start a response, show hesitation, or soften what you're about to say. It's very common in natural conversation.",
      usageNote_bn: "আচ্ছা — এইটা দিয়ে জবাব শুরু করা যায়, একটু দ্বিধা দেখানো যায়, বা কথা নরম করা যায়। দৈনন্দিন কথায় খুবই স্বাভাবিক।",
      formality: "casual",
      difficulty: "intermediate",
      slots: [
        {
          name: "STATEMENT",
          description: "What you want to say",
          description_bn: "যে কথা তুমি বলতে চাও",
          acceptedTypes: ["clause", "statement"],
          examples: [
            "I think we should go",
            "the bus is late",
            "I'm not really sure",
            "that's a good question"
          ]
        }
      ],
      conversionSteps: {
        banglaThought: "তুমি বাংলায় বলো: 'আচ্ছা, আমি মনে করি আমাদের এখন যাওয়া উচিত'",
        steps: [
          {
            step_bn: "ইংরেজিতে 'Well' দিয়ে শুরু করো",
            result: "Well,"
          },
          {
            step_bn: "তোমার কথা যোগ করো",
            result: "Well, I think we should go now"
          }
        ],
        finalResult: "Well, I think we should go now",
        finalResult_bn: "আচ্ছা, আমি মনে করি আমাদের এখন যাওয়া উচিত"
      },
      commonMistakes: [
        {
          wrong: "Good, I think we should go",
          correct: "Well, I think we should go",
          explanation_bn: "Well একটা ফিলার, Good আলাদা জিনিস — ভালো মানে"
        },
        {
          wrong: "Well I think we should go",
          correct: "Well, I think we should go",
          explanation_bn: "Well এর পরে কমা দিতেই হবে"
        },
        {
          wrong: "Wells, I think we should go",
          correct: "Well, I think we should go",
          explanation_bn: "Well এ 's' লাগবে না"
        }
      ],
      simpleRules: [
        {
          rule_bn: "বাংলায় আচ্ছা বললে ইংরেজিতে Well বলো — একদম কথা শুরুতে",
          example: "Well, I think we should go"
        },
        {
          rule_bn: "Well এর পর সবসময় কমা দাও",
          example: "Well, the bus is late"
        },
        {
          rule_bn: "কোনো প্রশ্নের উত্তর দিতে একটু সময় লাগলে Well দিয়ে শুরু করো",
          example: "Well, let me think about it"
        }
      ],
      usageSituations: [
        {
          situation_bn: "বস অফিসে প্রশ্ন করলে একটু ভেবে জবাব দিতে",
          situation_en: "When your boss asks a question and you need time to think",
          exampleSentence: "Well, I think we can finish it by Friday",
          exampleSentence_bn: "আচ্ছা, আমার মনে হয় শুক্রবারের মধ্যে শেষ করতে পারব"
        },
        {
          situation_bn: "বাসে কন্ডাক্টর জিজ্ঞেস করলে কোথায় যাবে",
          situation_en: "When a bus conductor asks where you're going",
          exampleSentence: "Well, I'm going to Motijheel",
          exampleSentence_bn: "আচ্ছা, আমি মতিঝিল যাচ্ছি"
        },
        {
          situation_bn: "দোকানে দাম শুনে একটু হতবাক হলে",
          situation_en: "When surprised by a price at a shop",
          exampleSentence: "Well, that's quite expensive",
          exampleSentence_bn: "আচ্ছা, এটা তো বেশ দামি"
        }
      ],
      sentenceBuilding: [
        {
          previousPatternId: "L7.3",
          previousFormula: "I need to [ACTION]",
          previousFormula_bn: "আমার [কাজ] করতে হবে",
          combined: "Well, I need to think about it",
          combined_bn: "আচ্ছা, আমার এটা নিয়ে ভাবতে হবে"
        },
        {
          previousPatternId: "C7.2",
          previousFormula: "I don't know [CLAUSE]",
          previousFormula_bn: "আমি জানি না [বাক্য]",
          combined: "Well, I don't really know what to say",
          combined_bn: "আচ্ছা, আমি সত্যি জানি না কি বলব"
        }
      ],
      memoryTrick_bn: "বাংলায় আচ্ছা বললে ইংরেজিতে Well — একদম সহজ মনে রাখো",
      chunks: [
        {
          en: "Well, I think",
          bn: "আচ্ছা, আমার মনে হয়",
          pronunciation_bn: "ওয়েল, আই থিংক"
        },
        {
          en: "Well, let me see",
          bn: "আচ্ছা, একটু দেখি",
          pronunciation_bn: "ওয়েল, লেট মি সি"
        },
        {
          en: "Well, actually",
          bn: "আচ্ছা, আসলে",
          pronunciation_bn: "ওয়েল, অ্যাকচুয়ালি"
        }
      ],
      wordMap: {
        bn_sentence: "আচ্ছা, আমি মনে করি আমাদের যাওয়া উচিত",
        en_sentence: "Well, I think we should go",
        mappings: [
          { bn_word: "আচ্ছা", en_word: "Well", type: "direct", bridgeRuleId: "BR1" }
        ]
      },
      answerTemplates: [
        {
          situation_bn: "কেউ ভালো কথা বললে",
          question: "What do you think?",
          question_bn: "তুমি কি মনে করো?",
          answerFormula: "Well, maybe you're right",
          answerFormula_bn: "আচ্ছা, হয়তো তুমি ঠিক বলছো",
          pronunciation_bn: "ওয়েল, মেবি ইউয়ার রাইট",
          examples: [
            {
              answer: "Well, maybe you're right",
              answer_bn: "আচ্ছা, হয়তো তুমি ঠিক বলছো",
              pronunciation_bn: "ওয়েল, মেবি ইউয়ার রাইট"
            }
          ]
        },
        {
          situation_bn: "সিদ্ধান্ত নিতে সময় লাগলে",
          question: "Can you decide now?",
          question_bn: "এখন কি সিদ্ধান্ত নিতে পারো?",
          answerFormula: "Well, I'll think about it",
          answerFormula_bn: "আচ্ছা, আমি ভেবে দেখব",
          pronunciation_bn: "ওয়েল, আইল থিংক অ্যাবাউট ইট",
          examples: [
            {
              answer: "Well, I'll think about it",
              answer_bn: "আচ্ছা, আমি ভেবে দেখব",
              pronunciation_bn: "ওয়েল, আইল থিংক অ্যাবাউট ইট"
            }
          ]
        },
        {
          situation_bn: "উত্তর শর্তসাপেক্ষ হলে",
          question: "Will you come?",
          question_bn: "তুমি কি আসবে?",
          answerFormula: "Well, that depends",
          answerFormula_bn: "আচ্ছা, সেটা নির্ভর করে",
          pronunciation_bn: "ওয়েল, দ্যাট ডিপেন্ডস",
          examples: [
            {
              answer: "Well, that depends",
              answer_bn: "আচ্ছা, সেটা নির্ভর করে",
              pronunciation_bn: "ওয়েল, দ্যাট ডিপেন্ডস"
            }
          ]
        }
      ],
      variations: [
        {
          variant: "with_hesitation",
          label: "With Hesitation (দ্বিধা সহ)",
          label_bn: "দ্বিধা সহ",
          formula: "Well, I'm not sure, but [STATEMENT]",
          formula_bn: "আচ্ছা, আমি নিশ্চিত না, তবে [কথা]",
          examples: [
            {
              en: "Well, I'm not sure, but I think the shop closes at 8",
              bn: "আচ্ছা, আমি নিশ্চিত না, তবে মনে হয় দোকান ৮টায় বন্ধ হয়",
              pronunciation_bn: "ওয়েল, আইম নট শিওর, বাট আই থিংক দ্য শপ ক্লোজেস অ্যাট এইট",
              slotValues: { STATEMENT: "I think the shop closes at 8" },
              stage: 2
            },
            {
              en: "Well, I'm not sure, but maybe we can try tomorrow",
              bn: "আচ্ছা, আমি নিশ্চিত না, তবে হয়তো কাল চেষ্টা করতে পারি",
              pronunciation_bn: "ওয়েল, আইম নট শিওর, বাট মেবি উই ক্যান ট্রাই টুমরো",
              slotValues: { STATEMENT: "maybe we can try tomorrow" },
              stage: 2
            },
            {
              en: "Well, I'm not sure, but he usually comes in the morning",
              bn: "আচ্ছা, আমি নিশ্চিত না, তবে সে সাধারণত সকালে আসে",
              pronunciation_bn: "ওয়েল, আইম নট শিওর, বাট হি ইউজুয়ালি কামস ইন দ্য মর্নিং",
              slotValues: { STATEMENT: "he usually comes in the morning" },
              stage: 2
            }
          ]
        },
        {
          variant: "with_emphasis",
          label: "With Emphasis (জোর দিয়ে)",
          label_bn: "জোর দিয়ে",
          formula: "Well, actually, [STATEMENT]",
          formula_bn: "আচ্ছা, আসলে, [কথা]",
          examples: [
            {
              en: "Well, actually, I was thinking the opposite",
              bn: "আচ্ছা, আসলে, আমি উল্টোটা ভাবছিলাম",
              pronunciation_bn: "ওয়েল, অ্যাকচুয়ালি, আই ওয়াজ থিংকিং দি অপোজিট",
              slotValues: { STATEMENT: "I was thinking the opposite" },
              stage: 3
            },
            {
              en: "Well, actually, the meeting is at 3, not 2",
              bn: "আচ্ছা, আসলে, মিটিং ৩টায়, ২টায় না",
              pronunciation_bn: "ওয়েল, অ্যাকচুয়ালি, দ্য মিটিং ইজ অ্যাট থ্রি, নট টু",
              slotValues: { STATEMENT: "the meeting is at 3, not 2" },
              stage: 3
            },
            {
              en: "Well, actually, I already paid the bill",
              bn: "আচ্ছা, আসলে, আমি তো বিল দিয়ে দিয়েছি",
              pronunciation_bn: "ওয়েল, অ্যাকচুয়ালি, আই অলরেডি পেইড দ্য বিল",
              slotValues: { STATEMENT: "I already paid the bill" },
              stage: 2
            }
          ]
        },
        {
          variant: "soften_bad_news",
          label: "To Soften Bad News (খারাপ খবর নরম করতে)",
          label_bn: "খারাপ খবর নরম করতে",
          formula: "Well, unfortunately, [STATEMENT]",
          formula_bn: "আচ্ছা, দুর্ভাগ্যবশত, [কথা]",
          examples: [
            {
              en: "Well, unfortunately, we're out of stock",
              bn: "আচ্ছা, দুর্ভাগ্যবশত, আমাদের স্টক নেই",
              pronunciation_bn: "ওয়েল, আনফরচুনেটলি, উইয়ার আউট অফ স্টক",
              slotValues: { STATEMENT: "we're out of stock" },
              stage: 3
            },
            {
              en: "Well, unfortunately, the bus just left",
              bn: "আচ্ছা, দুর্ভাগ্যবশত, বাস এইমাত্র চলে গেছে",
              pronunciation_bn: "ওয়েল, আনফরচুনেটলি, দ্য বাস জাস্ট লেফট",
              slotValues: { STATEMENT: "the bus just left" },
              stage: 2
            },
            {
              en: "Well, unfortunately, I can't help you today",
              bn: "আচ্ছা, দুর্ভাগ্যবশত, আমি আজকে তোমাকে সাহায্য করতে পারব না",
              pronunciation_bn: "ওয়েল, আনফরচুনেটলি, আই ক্যান্ট হেল্প ইউ টুডে",
              slotValues: { STATEMENT: "I can't help you today" },
              stage: 2
            }
          ]
        }
      ],
      dialogueChains: [
        {
          id: "R16.1-dc1",
          title_bn: "মোবাইল দোকানে",
          title_en: "At the mobile shop",
          situation_bn: "ঢাকার মোবাইল দোকানে ফোন কিনতে গেছো",
          icon: "📱",
          turns: [
            {
              speaker_bn: "ক্রেতা",
              en: "Is this phone available in black?",
              bn: "এই ফোন কি কালো রঙে পাওয়া যায়?",
              pronunciation_bn: "ইজ দিস ফোন অ্যাভেইলেবল ইন ব্ল্যাক?",
              patternId: "C6.1"
            },
            {
              speaker_bn: "দোকানদার",
              en: "Well, let me check the stock",
              bn: "আচ্ছা, আমি স্টক চেক করে দেখি",
              pronunciation_bn: "ওয়েল, লেট মি চেক দ্য স্টক",
              patternId: "R16.1"
            },
            {
              speaker_bn: "ক্রেতা",
              en: "How long will it take?",
              bn: "কতক্ষণ লাগবে?",
              pronunciation_bn: "হাউ লং উইল ইট টেক?",
              patternId: "G2.8"
            },
            {
              speaker_bn: "দোকানদার",
              en: "Well, just give me two minutes",
              bn: "আচ্ছা, আমাকে শুধু দুই মিনিট দাও",
              pronunciation_bn: "ওয়েল, জাস্ট গিভ মি টু মিনিটস",
              patternId: "R16.1"
            },
            {
              speaker_bn: "দোকানদার",
              en: "Well, unfortunately we don't have black right now",
              bn: "আচ্ছা, দুর্ভাগ্যবশত আমাদের কাছে এখন কালো নেই",
              pronunciation_bn: "ওয়েল, আনফরচুনেটলি উই ডোন্ট হ্যাভ ব্ল্যাক রাইট নাউ",
              patternId: "R16.1"
            }
          ],
          patternsUsed: ["C6.1", "R16.1", "G2.8"]
        }
      ],
      examples: [
        {
          en: "Well, I think we should leave now",
          bn: "আচ্ছা, আমার মনে হয় আমাদের এখন যাওয়া উচিত",
          pronunciation_bn: "ওয়েল, আই থিংক উই শুড লিভ নাউ",
          slotValues: { STATEMENT: "I think we should leave now" },
          topicArea: "daily_life",
          stage: 1
        },
        {
          en: "Well, the bus is late again",
          bn: "আচ্ছা, বাস আবার লেট হয়ে গেছে",
          pronunciation_bn: "ওয়েল, দ্য বাস ইজ লেট অ্যাগেইন",
          slotValues: { STATEMENT: "the bus is late again" },
          topicArea: "transport",
          stage: 1,
          miniStory: {
            situation_bn: "রহিম প্রতিদিন ৮টার বাসে অফিস যায়। আজ ৮টা ১৫ মিনিট হয়ে গেল, বাস আসেনি। সে তার সহকর্মীকে বলল: Well, the bus is late again।",
            icon: "🚌"
          }
        },
        {
          en: "Well, I'm not really sure about that",
          bn: "আচ্ছা, আমি সেটা নিয়ে সত্যি নিশ্চিত না",
          pronunciation_bn: "ওয়েল, আইম নট রিয়েলি শিওর অ্যাবাউট দ্যাট",
          slotValues: { STATEMENT: "I'm not really sure about that" },
          topicArea: "work",
          stage: 1
        },
        {
          en: "Well, that's a good question",
          bn: "আচ্ছা, এটা একটা ভালো প্রশ্ন",
          pronunciation_bn: "ওয়েল, দ্যাটস এ গুড কোয়েশ্চেন",
          slotValues: { STATEMENT: "that's a good question" },
          topicArea: "education",
          stage: 1,
          miniStory: {
            situation_bn: "ক্লাসে শিক্ষক বললেন বাংলাদেশে কেন বন্যা হয়। একটা ছাত্র জিজ্ঞেস করল ভারতেও কি হয়? শিক্ষক বললেন: Well, that's a good question।",
            icon: "📚"
          }
        },
        {
          en: "Well, I can help you with that",
          bn: "আচ্ছা, আমি তোমাকে সেটায় সাহায্য করতে পারি",
          pronunciation_bn: "ওয়েল, আই ক্যান হেল্প ইউ উইথ দ্যাট",
          slotValues: { STATEMENT: "I can help you with that" },
          topicArea: "social",
          stage: 1
        },
        {
          en: "Well, maybe we should ask the doctor",
          bn: "আচ্ছা, হয়তো আমাদের ডাক্তারকে জিজ্ঞেস করা উচিত",
          pronunciation_bn: "ওয়েল, মেবি উই শুড আস্ক দ্য ডক্টর",
          slotValues: { STATEMENT: "maybe we should ask the doctor" },
          topicArea: "health",
          stage: 2,
          miniStory: {
            situation_bn: "সালমার মা অসুস্থ। জ্বর ২ দিন ধরে থাকছে। সালমা ওষুধের দোকানে গেল। দোকানদার বলল: Well, maybe we should ask the doctor।",
            icon: "🏥"
          }
        },
        {
          en: "Well, I don't know what to say",
          bn: "আচ্ছা, আমি জানি না কি বলব",
          pronunciation_bn: "ওয়েল, আই ডোন্ট নো হোয়াট টু সে",
          slotValues: { STATEMENT: "I don't know what to say" },
          topicArea: "social",
          stage: 2
        },
        {
          en: "Well, the price seems a bit high",
          bn: "আচ্ছা, দাম একটু বেশি মনে হচ্ছে",
          pronunciation_bn: "ওয়েল, দ্য প্রাইস সিমস এ বিট হাই",
          slotValues: { STATEMENT: "the price seems a bit high" },
          topicArea: "shopping",
          stage: 2,
          miniStory: {
            situation_bn: "করিম বাজারে মাছ কিনতে গেছে। দোকানদার বলল রুই মাছ ৬০০ টাকা কেজি। করিম বলল: Well, the price seems a bit high।",
            icon: "🐟"
          }
        },
        {
          en: "Well, let me think about it for a moment",
          bn: "আচ্ছা, আমাকে একটু ভাবতে দাও",
          pronunciation_bn: "ওয়েল, লেট মি থিংক অ্যাবাউট ইট ফর এ মোমেন্ট",
          slotValues: { STATEMENT: "let me think about it for a moment" },
          topicArea: "work",
          stage: 2
        },
        {
          en: "Well, I suppose you have a point",
          bn: "আচ্ছা, আমার মনে হয় তোমার একটা পয়েন্ট আছে",
          pronunciation_bn: "ওয়েল, আই সাপোজ ইউ হ্যাভ এ পয়েন্ট",
          slotValues: { STATEMENT: "I suppose you have a point" },
          topicArea: "social",
          stage: 2
        },
        {
          en: "Well, it depends on the situation",
          bn: "আচ্ছা, সেটা পরিস্থিতির উপর নির্ভর করে",
          pronunciation_bn: "ওয়েল, ইট ডিপেন্ডস অন দ্য সিচুয়েশন",
          slotValues: { STATEMENT: "it depends on the situation" },
          topicArea: "work",
          stage: 3,
          miniStory: {
            situation_bn: "অফিসে বস জিজ্ঞেস করলেন প্রজেক্ট কি শুক্রবারের মধ্যে শেষ হবে? জাহিদ বলল: Well, it depends on the situation।",
            icon: "💼"
          }
        },
        {
          en: "Well, I wasn't expecting that response",
          bn: "আচ্ছা, আমি এই জবাব আশা করিনি",
          pronunciation_bn: "ওয়েল, আই ওয়াজন্ট এক্সপেক্টিং দ্যাট রেসপন্স",
          slotValues: { STATEMENT: "I wasn't expecting that response" },
          topicArea: "social",
          stage: 3
        },
        {
          en: "Well, I'm afraid I can't make it tonight",
          bn: "আচ্ছা, আমার ভয় হচ্ছে আমি আজ রাতে পারব না",
          pronunciation_bn: "ওয়েল, আইম অ্যাফ্রেইড আই ক্যান্ট মেক ইট টুনাইট",
          slotValues: { STATEMENT: "I'm afraid I can't make it tonight" },
          topicArea: "social",
          stage: 3,
          miniStory: {
            situation_bn: "রাকিবকে বন্ধু বিয়ের দাওয়াত দিল আজ রাতে। কিন্তু রাকিবের মায়ের ডাক্তারের অ্যাপয়েন্টমেন্ট আছে। সে বলল: Well, I'm afraid I can't make it tonight।",
            icon: "💒"
          }
        },
        {
          en: "Well, to be honest, I haven't decided yet",
          bn: "আচ্ছা, সত্যি বলতে কি, আমি এখনো ঠিক করিনি",
          pronunciation_bn: "ওয়েল, টু বি অনেস্ট, আই হ্যাভেন্ট ডিসাইডেড ইয়েট",
          slotValues: { STATEMENT: "to be honest, I haven't decided yet" },
          topicArea: "daily_life",
          stage: 3
        },
        {
          en: "Well, now that you mention it, I do remember",
          bn: "আচ্ছা, এখন যখন তুমি বললে, আমার মনে পড়ছে",
          pronunciation_bn: "ওয়েল, নাউ দ্যাট ইউ মেনশন ইট, আই ডু রিমেম্বার",
          slotValues: { STATEMENT: "now that you mention it, I do remember" },
          topicArea: "social",
          stage: 3
        }
      ]
    },
    {
      id: "R16.2",
      patternName: "Using 'Actually' to correct or clarify",
      patternName_bn: "আসলে... বলা",
      formula: "Actually, [STATEMENT]",
      formula_bn: "আসলে, [কথা]",
      concept_bn: "আসলে",
      formulaPronunciation_bn: "অ্যাকচুয়ালি, [স্টেটমেন্ট]",
      bridgeRuleIds: ["BR1", "BR6"],
      usageNote: "Actually is used to correct information, add surprising facts, or politely disagree. It shows something is different from what was said or expected.",
      usageNote_bn: "আসলে — এইটা দিয়ে ভুল শুধরানো যায়, চমকপ্রদ তথ্য দেওয়া যায়, বা নম্রভাবে দ্বিমত করা যায়। কিছু আলাদা বা অপ্রত্যাশিত জানাতে ব্যবহার হয়।",
      formality: "casual",
      difficulty: "intermediate",
      slots: [
        {
          name: "STATEMENT",
          description: "The correct or surprising information",
          description_bn: "সঠিক বা চমকপ্রদ তথ্য",
          acceptedTypes: ["clause", "statement"],
          examples: [
            "I'm from Chittagong",
            "the meeting is tomorrow",
            "I've never been there",
            "it's quite expensive"
          ]
        }
      ],
      conversionSteps: {
        banglaThought: "তুমি বাংলায় বলো: 'আসলে, আমি চট্টগ্রামের, ঢাকার না'",
        steps: [
          {
            step_bn: "'Actually' দিয়ে শুরু করো",
            result: "Actually,"
          },
          {
            step_bn: "সঠিক তথ্য দাও",
            result: "Actually, I'm from Chittagong"
          }
        ],
        finalResult: "Actually, I'm from Chittagong",
        finalResult_bn: "আসলে, আমি চট্টগ্রামের"
      },
      commonMistakes: [
        {
          wrong: "Really, I'm from Chittagong",
          correct: "Actually, I'm from Chittagong",
          explanation_bn: "Really মানে সত্যিই, Actually মানে আসলে — দুইটা আলাদা"
        },
        {
          wrong: "Actual, I'm from Chittagong",
          correct: "Actually, I'm from Chittagong",
          explanation_bn: "Actual না, Actually বলতে হবে"
        },
        {
          wrong: "Actually I'm from Chittagong",
          correct: "Actually, I'm from Chittagong",
          explanation_bn: "Actually এর পর কমা দাও"
        }
      ],
      simpleRules: [
        {
          rule_bn: "বাংলায় আসলে বললে ইংরেজিতে Actually বলো — ভুল শুধরাতে",
          example: "Actually, I'm from Chittagong"
        },
        {
          rule_bn: "Actually এর পর কমা দিতে হবে",
          example: "Actually, the meeting is tomorrow"
        },
        {
          rule_bn: "কেউ ভুল ধারণা করলে Actually দিয়ে সঠিক তথ্য দাও",
          example: "Actually, the shop closes at 9, not 8"
        }
      ],
      usageSituations: [
        {
          situation_bn: "কেউ তোমার সম্পর্কে ভুল তথ্য বললে শুধরাতে",
          situation_en: "When correcting wrong information about yourself",
          exampleSentence: "Actually, I work at Grameen Bank, not BRAC",
          exampleSentence_bn: "আসলে, আমি গ্রামীণ ব্যাংকে কাজ করি, BRAC-এ না"
        },
        {
          situation_bn: "দোকানে দাম ভুল বললে",
          situation_en: "When correcting a price at the shop",
          exampleSentence: "Actually, the price is 500 taka, not 400",
          exampleSentence_bn: "আসলে, দাম ৫০০ টাকা, ৪০০ না"
        },
        {
          situation_bn: "বন্ধু ভুল জায়গার নাম বললে",
          situation_en: "When a friend names the wrong place",
          exampleSentence: "Actually, that restaurant is in Dhanmondi, not Gulshan",
          exampleSentence_bn: "আসলে, ঐ রেস্তোরাঁ ধানমন্ডিতে, গুলশানে না"
        }
      ],
      sentenceBuilding: [
        {
          previousPatternId: "E3.1",
          previousFormula: "I have [PAST PARTICIPLE]",
          previousFormula_bn: "আমি [কাজ] করেছি",
          combined: "Actually, I have been to Cox's Bazar before",
          combined_bn: "আসলে, আমি আগে কক্সবাজার গিয়েছি"
        },
        {
          previousPatternId: "A3.2",
          previousFormula: "I don't like [THING]",
          previousFormula_bn: "আমি [জিনিস] পছন্দ করি না",
          combined: "Actually, I don't like spicy food",
          combined_bn: "আসলে, আমি ঝাল খাবার পছন্দ করি না"
        }
      ],
      memoryTrick_bn: "বাংলায় আসলে মানে ইংরেজিতে Actually — ভুল শুধরানোর সময় ব্যবহার করো",
      chunks: [
        {
          en: "Actually, I think",
          bn: "আসলে, আমার মনে হয়",
          pronunciation_bn: "অ্যাকচুয়ালি, আই থিংক"
        },
        {
          en: "Actually, I'm not sure",
          bn: "আসলে, আমি নিশ্চিত না",
          pronunciation_bn: "অ্যাকচুয়ালি, আইম নট শিওর"
        },
        {
          en: "Actually, to be honest",
          bn: "আসলে, সত্যি বলতে",
          pronunciation_bn: "অ্যাকচুয়ালি, টু বি অনেস্ট"
        }
      ],
      wordMap: {
        bn_sentence: "আসলে, আমি চট্টগ্রামের",
        en_sentence: "Actually, I'm from Chittagong",
        mappings: [
          { bn_word: "আসলে", en_word: "Actually", type: "direct", bridgeRuleId: "BR1" }
        ]
      },
      answerTemplates: [
        {
          situation_bn: "কেউ Actually দিয়ে তোমাকে শুধরালে",
          question: "Actually, the meeting is tomorrow",
          question_bn: "আসলে, মিটিং কাল",
          answerFormula: "Oh, I didn't know that",
          answerFormula_bn: "ওহ, আমি জানতাম না",
          pronunciation_bn: "ওহ, আই ডিডন্ট নো দ্যাট",
          examples: [
            {
              answer: "Oh, I didn't know that",
              answer_bn: "ওহ, আমি জানতাম না",
              pronunciation_bn: "ওহ, আই ডিডন্ট নো দ্যাট"
            }
          ]
        },
        {
          situation_bn: "শুধরানোর কথা শুনে অবাক হলে",
          question: "Actually, the price is 500, not 400",
          question_bn: "আসলে, দাম ৫০০, ৪০০ না",
          answerFormula: "Really? I thought it was different",
          answerFormula_bn: "সত্যি? আমি ভেবেছিলাম আলাদা",
          pronunciation_bn: "রিয়েলি? আই থট ইট ওয়াজ ডিফারেন্ট",
          examples: [
            {
              answer: "Really? I thought it was different",
              answer_bn: "সত্যি? আমি ভেবেছিলাম আলাদা",
              pronunciation_bn: "রিয়েলি? আই থট ইট ওয়াজ ডিফারেন্ট"
            }
          ]
        },
        {
          situation_bn: "শুধরানোর প্রশংসা করতে",
          question: "Actually, you need to turn left here",
          question_bn: "আসলে, তোমাকে এখানে বামে যেতে হবে",
          answerFormula: "Thanks for correcting me",
          answerFormula_bn: "শুধরানোর জন্য ধন্যবাদ",
          pronunciation_bn: "থ্যাংকস ফর কারেক্টিং মি",
          examples: [
            {
              answer: "Thanks for correcting me",
              answer_bn: "শুধরানোর জন্য ধন্যবাদ",
              pronunciation_bn: "থ্যাংকস ফর কারেক্টিং মি"
            }
          ]
        }
      ],
      variations: [
        {
          variant: "polite_correction",
          label: "Polite Correction (নম্র সংশোধন)",
          label_bn: "নম্র সংশোধন",
          formula: "Actually, I think [STATEMENT]",
          formula_bn: "আসলে, আমার মনে হয় [কথা]",
          examples: [
            {
              en: "Actually, I think the office is closed on Fridays",
              bn: "আসলে, আমার মনে হয় অফিস শুক্রবার বন্ধ থাকে",
              pronunciation_bn: "অ্যাকচুয়ালি, আই থিংক দি অফিস ইজ ক্লোজড অন ফ্রাইডেজ",
              slotValues: { STATEMENT: "I think the office is closed on Fridays" },
              stage: 2
            },
            {
              en: "Actually, I think he said 3 PM, not 2 PM",
              bn: "আসলে, আমার মনে হয় সে বলেছিল ৩টা, ২টা না",
              pronunciation_bn: "অ্যাকচুয়ালি, আই থিংক হি সেড থ্রি পিএম, নট টু পিএম",
              slotValues: { STATEMENT: "I think he said 3 PM, not 2 PM" },
              stage: 2
            },
            {
              en: "Actually, I think the train leaves from platform 2",
              bn: "আসলে, আমার মনে হয় ট্রেন প্ল্যাটফর্ম ২ থেকে ছাড়ে",
              pronunciation_bn: "অ্যাকচুয়ালি, আই থিংক দ্য ট্রেইন লিভস ফ্রম প্ল্যাটফর্ম টু",
              slotValues: { STATEMENT: "I think the train leaves from platform 2" },
              stage: 2
            }
          ]
        },
        {
          variant: "surprising_fact",
          label: "Surprising Fact (চমকপ্রদ তথ্য)",
          label_bn: "চমকপ্রদ তথ্য",
          formula: "Actually, [SURPRISING STATEMENT]",
          formula_bn: "আসলে, [চমকপ্রদ কথা]",
          examples: [
            {
              en: "Actually, he's been working here for 10 years",
              bn: "আসলে, সে এখানে ১০ বছর ধরে কাজ করছে",
              pronunciation_bn: "অ্যাকচুয়ালি, হিজ বিন ওয়ার্কিং হেয়ার ফর টেন ইয়ারস",
              slotValues: { STATEMENT: "he's been working here for 10 years" },
              stage: 3
            },
            {
              en: "Actually, this is my first time in Dhaka",
              bn: "আসলে, এটা আমার প্রথমবার ঢাকায়",
              pronunciation_bn: "অ্যাকচুয়ালি, দিস ইজ মাই ফার্স্ট টাইম ইন ঢাকা",
              slotValues: { STATEMENT: "this is my first time in Dhaka" },
              stage: 2
            },
            {
              en: "Actually, I've never tried biryani before",
              bn: "আসলে, আমি কখনো বিরিয়ানি খাইনি আগে",
              pronunciation_bn: "অ্যাকচুয়ালি, আইভ নেভার ট্রাইড বিরিয়ানি বিফোর",
              slotValues: { STATEMENT: "I've never tried biryani before" },
              stage: 3
            }
          ]
        },
        {
          variant: "strong_disagreement",
          label: "Strong Disagreement (জোরালো দ্বিমত)",
          label_bn: "জোরালো দ্বিমত",
          formula: "Actually, that's not quite right. [STATEMENT]",
          formula_bn: "আসলে, সেটা পুরোপুরি ঠিক না। [কথা]",
          examples: [
            {
              en: "Actually, that's not quite right. The deadline is next Monday",
              bn: "আসলে, সেটা পুরোপুরি ঠিক না। ডেডলাইন পরের সোমবার",
              pronunciation_bn: "অ্যাকচুয়ালি, দ্যাটস নট কোয়াইট রাইট। দ্য ডেডলাইন ইজ নেক্সট মানডে",
              slotValues: { STATEMENT: "that's not quite right. The deadline is next Monday" },
              stage: 3
            },
            {
              en: "Actually, that's not quite right. He's the manager, not the owner",
              bn: "আসলে, সেটা পুরোপুরি ঠিক না। সে ম্যানেজার, মালিক না",
              pronunciation_bn: "অ্যাকচুয়ালি, দ্যাটস নট কোয়াইট রাইট। হিজ দ্য ম্যানেজার, নট দি ওনার",
              slotValues: { STATEMENT: "that's not quite right. He's the manager, not the owner" },
              stage: 3
            },
            {
              en: "Actually, that's not quite right. The shop is open till 10",
              bn: "আসলে, সেটা পুরোপুরি ঠিক না। দোকান ১০টা পর্যন্ত খোলা",
              pronunciation_bn: "অ্যাকচুয়ালি, দ্যাটস নট কোয়াইট রাইট। দ্য শপ ইজ ওপেন টিল টেন",
              slotValues: { STATEMENT: "that's not quite right. The shop is open till 10" },
              stage: 3
            }
          ]
        }
      ],
      dialogueChains: [
        {
          id: "R16.2-dc1",
          title_bn: "অফিসে প্রথম দিন",
          title_en: "First day at office in Dhaka",
          situation_bn: "ঢাকার অফিসে প্রথম দিনে সহকর্মীর সাথে আলাপ",
          icon: "🏢",
          turns: [
            {
              speaker_bn: "সহকর্মী",
              en: "So you're from Dhaka, right?",
              bn: "তাহলে তুমি ঢাকার, তাই না?",
              pronunciation_bn: "সো ইউয়ার ফ্রম ঢাকা, রাইট?",
              patternId: "C11.2"
            },
            {
              speaker_bn: "তুমি",
              en: "Actually, I'm from Chittagong",
              bn: "আসলে, আমি চট্টগ্রাম থেকে",
              pronunciation_bn: "অ্যাকচুয়ালি, আইম ফ্রম চট্টগ্রাম",
              patternId: "R16.2"
            },
            {
              speaker_bn: "সহকর্মী",
              en: "Oh, I didn't know that. How long have you been in Dhaka?",
              bn: "ওহ, আমি জানতাম না। ঢাকায় কতদিন হলো?",
              pronunciation_bn: "ওহ, আই ডিডন্ট নো দ্যাট। হাউ লং হ্যাভ ইউ বিন ইন ঢাকা?",
              patternId: "G2.8"
            },
            {
              speaker_bn: "তুমি",
              en: "Actually, I just moved here last month",
              bn: "আসলে, আমি গত মাসে এখানে এসেছি",
              pronunciation_bn: "অ্যাকচুয়ালি, আই জাস্ট মুভড হেয়ার লাস্ট মানথ",
              patternId: "R16.2"
            }
          ],
          patternsUsed: ["C11.2", "R16.2", "G2.8"]
        }
      ],
      examples: [
        {
          en: "Actually, I'm from Chittagong, not Dhaka",
          bn: "আসলে, আমি চট্টগ্রামের, ঢাকার না",
          pronunciation_bn: "অ্যাকচুয়ালি, আইম ফ্রম চট্টগ্রাম, নট ঢাকা",
          slotValues: { STATEMENT: "I'm from Chittagong, not Dhaka" },
          topicArea: "personal_info",
          stage: 1
        },
        {
          en: "Actually, the meeting is tomorrow",
          bn: "আসলে, মিটিং কাল",
          pronunciation_bn: "অ্যাকচুয়ালি, দ্য মিটিং ইজ টুমরো",
          slotValues: { STATEMENT: "the meeting is tomorrow" },
          topicArea: "work",
          stage: 1,
          miniStory: {
            situation_bn: "অফিসে সবাই ভাবছে মিটিং আজ। কিন্তু সানিয়া ইমেইল চেক করে দেখল কাল। সে বলল: Actually, the meeting is tomorrow।",
            icon: "📅"
          }
        },
        {
          en: "Actually, I've never been there",
          bn: "আসলে, আমি কখনো ওখানে যাইনি",
          pronunciation_bn: "অ্যাকচুয়ালি, আইভ নেভার বিন দেয়ার",
          slotValues: { STATEMENT: "I've never been there" },
          topicArea: "travel",
          stage: 1
        },
        {
          en: "Actually, it's quite expensive",
          bn: "আসলে, এটা বেশ দামি",
          pronunciation_bn: "অ্যাকচুয়ালি, ইটস কোয়াইট এক্সপেন্সিভ",
          slotValues: { STATEMENT: "it's quite expensive" },
          topicArea: "shopping",
          stage: 1,
          miniStory: {
            situation_bn: "রফিক নতুন ফোন কিনতে চায়। বন্ধু বলল Xiaomi সস্তা। রফিক দোকানে দেখে বলল: Actually, it's quite expensive।",
            icon: "📱"
          }
        },
        {
          en: "Actually, I prefer tea over coffee",
          bn: "আসলে, আমি কফির চেয়ে চা পছন্দ করি",
          pronunciation_bn: "অ্যাকচুয়ালি, আই প্রিফার টি ওভার কফি",
          slotValues: { STATEMENT: "I prefer tea over coffee" },
          topicArea: "food_drink",
          stage: 1
        },
        {
          en: "Actually, he works at Grameen Bank",
          bn: "আসলে, সে গ্রামীণ ব্যাংকে কাজ করে",
          pronunciation_bn: "অ্যাকচুয়ালি, হি ওয়ার্কস অ্যাট গ্রামীণ ব্যাংক",
          slotValues: { STATEMENT: "he works at Grameen Bank" },
          topicArea: "work",
          stage: 2,
          miniStory: {
            situation_bn: "পার্টিতে কেউ বলল তাহসিন BRAC-এ কাজ করে। তার বন্ধু শুনে বলল: Actually, he works at Grameen Bank।",
            icon: "🏦"
          }
        },
        {
          en: "Actually, that's not how it works",
          bn: "আসলে, এইভাবে হয় না",
          pronunciation_bn: "অ্যাকচুয়ালি, দ্যাটস নট হাউ ইট ওয়ার্কস",
          slotValues: { STATEMENT: "that's not how it works" },
          topicArea: "work",
          stage: 2
        },
        {
          en: "Actually, I already finished the report",
          bn: "আসলে, আমি রিপোর্ট শেষ করে ফেলেছি",
          pronunciation_bn: "অ্যাকচুয়ালি, আই অলরেডি ফিনিশড দ্য রিপোর্ট",
          slotValues: { STATEMENT: "I already finished the report" },
          topicArea: "work",
          stage: 2,
          miniStory: {
            situation_bn: "বস জিজ্ঞেস করলেন রিপোর্ট কবে শেষ হবে। নাহিদ বলল: Actually, I already finished the report।",
            icon: "📝"
          }
        },
        {
          en: "Actually, the shop closes at 9, not 8",
          bn: "আসলে, দোকান ৯টায় বন্ধ হয়, ৮টায় না",
          pronunciation_bn: "অ্যাকচুয়ালি, দ্য শপ ক্লোজেস অ্যাট নাইন, নট এইট",
          slotValues: { STATEMENT: "the shop closes at 9, not 8" },
          topicArea: "shopping",
          stage: 2
        },
        {
          en: "Actually, I don't eat meat",
          bn: "আসলে, আমি মাংস খাই না",
          pronunciation_bn: "অ্যাকচুয়ালি, আই ডোন্ট ইট মিট",
          slotValues: { STATEMENT: "I don't eat meat" },
          topicArea: "food_drink",
          stage: 2
        },
        {
          en: "Actually, this is my first job",
          bn: "আসলে, এটা আমার প্রথম চাকরি",
          pronunciation_bn: "অ্যাকচুয়ালি, দিস ইজ মাই ফার্স্ট জব",
          slotValues: { STATEMENT: "this is my first job" },
          topicArea: "work",
          stage: 3,
          miniStory: {
            situation_bn: "ইন্টারভিউতে জিজ্ঞেস করা হলো আগে কোথায় কাজ করেছ। সাবিলা বলল: Actually, this is my first job।",
            icon: "💼"
          }
        },
        {
          en: "Actually, I was planning to go next week",
          bn: "আসলে, আমি পরের সপ্তাহে যাওয়ার পরিকল্পনা করছিলাম",
          pronunciation_bn: "অ্যাকচুয়ালি, আই ওয়াজ প্ল্যানিং টু গো নেক্সট উইক",
          slotValues: { STATEMENT: "I was planning to go next week" },
          topicArea: "travel",
          stage: 3
        },
        {
          en: "Actually, you need to take a left at the next signal",
          bn: "আসলে, তোমাকে পরের সিগন্যালে বাম দিকে যেতে হবে",
          pronunciation_bn: "অ্যাকচুয়ালি, ইউ নিড টু টেক এ লেফট অ্যাট দ্য নেক্সট সিগন্যাল",
          slotValues: { STATEMENT: "you need to take a left at the next signal" },
          topicArea: "directions",
          stage: 3,
          miniStory: {
            situation_bn: "রিকশায় যাত্রী বলল ডানে যাও। ড্রাইভার জানে সেটা ভুল পথ। বলল: Actually, you need to take a left at the next signal।",
            icon: "🛺"
          }
        },
        {
          en: "Actually, I was thinking of something different",
          bn: "আসলে, আমি আলাদা কিছু ভাবছিলাম",
          pronunciation_bn: "অ্যাকচুয়ালি, আই ওয়াজ থিংকিং অফ সামথিং ডিফারেন্ট",
          slotValues: { STATEMENT: "I was thinking of something different" },
          topicArea: "work",
          stage: 3
        },
        {
          en: "Actually, that idea won't work in our context",
          bn: "আসলে, সেই আইডিয়া আমাদের পরিস্থিতিতে কাজ করবে না",
          pronunciation_bn: "অ্যাকচুয়ালি, দ্যাট আইডিয়া ওন্ট ওয়ার্ক ইন আওয়ার কনটেক্সট",
          slotValues: { STATEMENT: "that idea won't work in our context" },
          topicArea: "work",
          stage: 3
        }
      ]
    },
    {
      id: "R16.3",
      patternName: "Using 'You know' to check understanding",
      patternName_bn: "জানো তো... বলা",
      formula: "You know, [STATEMENT]",
      formula_bn: "জানো তো, [কথা]",
      concept_bn: "জানো তো",
      formulaPronunciation_bn: "ইউ নো, [স্টেটমেন্ট]",
      bridgeRuleIds: ["BR1", "BR6"],
      usageNote: "You know is used to check if someone understands, to make conversation more casual, or to emphasize a shared experience.",
      usageNote_bn: "জানো তো — এইটা দিয়ে দেখা যায় কেউ বুঝছে কিনা, কথাকে আরো আড্ডার মত করা যায়, বা কোনো সাধারণ অভিজ্ঞতা জোর দিয়ে বলা যায়।",
      formality: "casual",
      difficulty: "intermediate",
      slots: [
        {
          name: "STATEMENT",
          description: "What you want to say",
          description_bn: "যে কথা তুমি বলতে চাও",
          acceptedTypes: ["clause", "statement"],
          examples: [
            "it's really hot today",
            "traffic in Dhaka is crazy",
            "I've been thinking about it",
            "life can be difficult sometimes"
          ]
        }
      ],
      conversionSteps: {
        banglaThought: "তুমি বাংলায় বলো: 'জানো তো, ঢাকার ট্রাফিক সত্যি পাগলামি'",
        steps: [
          {
            step_bn: "'You know' দিয়ে শুরু করো",
            result: "You know,"
          },
          {
            step_bn: "তোমার কথা যোগ করো",
            result: "You know, traffic in Dhaka is crazy"
          }
        ],
        finalResult: "You know, traffic in Dhaka is crazy",
        finalResult_bn: "জানো তো, ঢাকার ট্রাফিক পাগলামি"
      },
      commonMistakes: [
        {
          wrong: "Do you know, traffic is bad",
          correct: "You know, traffic is bad",
          explanation_bn: "'Do you know' না, 'You know' বলতে হবে — এইটা ফিলার"
        },
        {
          wrong: "You knows, traffic is bad",
          correct: "You know, traffic is bad",
          explanation_bn: "You know এ 's' লাগবে না"
        },
        {
          wrong: "You know traffic is bad",
          correct: "You know, traffic is bad",
          explanation_bn: "You know এর পর কমা দাও"
        }
      ],
      simpleRules: [
        {
          rule_bn: "বাংলায় জানো তো বললে ইংরেজিতে You know বলো — আড্ডা মত করে",
          example: "You know, it's really hot today"
        },
        {
          rule_bn: "You know এর পর কমা দিতে হবে",
          example: "You know, traffic is crazy"
        },
        {
          rule_bn: "সাধারণ অভিজ্ঞতা শেয়ার করতে You know দিয়ে শুরু করো",
          example: "You know, life can be difficult sometimes"
        }
      ],
      usageSituations: [
        {
          situation_bn: "বন্ধুর সাথে আড্ডায় সাধারণ কথা বলতে",
          situation_en: "When chatting casually with a friend",
          exampleSentence: "You know, Dhaka summers are unbearable",
          exampleSentence_bn: "জানো তো, ঢাকার গ্রীষ্মকাল অসহ্য"
        },
        {
          situation_bn: "সহকর্মীর সাথে অফিসের কষ্ট বলতে",
          situation_en: "When sharing work frustrations with a colleague",
          exampleSentence: "You know, working late every day is exhausting",
          exampleSentence_bn: "জানো তো, প্রতিদিন দেরি করে কাজ করা ক্লান্তিকর"
        },
        {
          situation_bn: "পরিচিত কারো সাথে সহমত জানাতে",
          situation_en: "When agreeing with someone you know",
          exampleSentence: "You know, you're absolutely right about that",
          exampleSentence_bn: "জানো তো, তুমি সেটা নিয়ে একদম ঠিক বলেছো"
        }
      ],
      sentenceBuilding: [
        {
          previousPatternId: "C3.1",
          previousFormula: "It's [ADJECTIVE]",
          previousFormula_bn: "এটা [বিশেষণ]",
          combined: "You know, it's getting really late",
          combined_bn: "জানো তো, অনেক রাত হয়ে যাচ্ছে"
        },
        {
          previousPatternId: "E3.1",
          previousFormula: "I have [PAST PARTICIPLE]",
          previousFormula_bn: "আমি [কাজ] করেছি",
          combined: "You know, I've been to that place before",
          combined_bn: "জানো তো, আমি ঐ জায়গায় আগে গিয়েছি"
        }
      ],
      memoryTrick_bn: "বাংলায় জানো তো মানে ইংরেজিতে You know — আড্ডা দিতে ব্যবহার করো",
      chunks: [
        {
          en: "You know what",
          bn: "জানো কি",
          pronunciation_bn: "ইউ নো হোয়াট"
        },
        {
          en: "You know something",
          bn: "জানো একটা কথা",
          pronunciation_bn: "ইউ নো সামথিং"
        },
        {
          en: "You know what I mean",
          bn: "জানো তো আমি কি বলতে চাচ্ছি",
          pronunciation_bn: "ইউ নো হোয়াট আই মিন"
        }
      ],
      wordMap: {
        bn_sentence: "জানো তো, ঢাকার ট্রাফিক পাগলামি",
        en_sentence: "You know, traffic in Dhaka is crazy",
        mappings: [
          { bn_word: "জানো তো", en_word: "You know", type: "direct", bridgeRuleId: "BR1" }
        ]
      },
      answerTemplates: [
        {
          situation_bn: "You know এর সাথে একমত হলে",
          question: "You know, it's really hot today",
          question_bn: "জানো তো, আজ সত্যি অনেক গরম",
          answerFormula: "Yeah, I totally get it",
          answerFormula_bn: "হ্যাঁ, আমি পুরো বুঝতে পারছি",
          pronunciation_bn: "ইয়াহ, আই টোটালি গেট ইট",
          examples: [
            {
              answer: "Yeah, I totally get it",
              answer_bn: "হ্যাঁ, আমি পুরো বুঝতে পারছি",
              pronunciation_bn: "ইয়াহ, আই টোটালি গেট ইট"
            }
          ]
        },
        {
          situation_bn: "জোরালোভাবে একমত হলে",
          question: "You know, traffic is getting worse every day",
          question_bn: "জানো তো, ট্রাফিক প্রতিদিন আরো খারাপ হচ্ছে",
          answerFormula: "Exactly! That's what I was thinking",
          answerFormula_bn: "একদম! আমিও তাই ভাবছিলাম",
          pronunciation_bn: "এক্জ্যাক্টলি! দ্যাটস হোয়াট আই ওয়াজ থিংকিং",
          examples: [
            {
              answer: "Exactly! That's what I was thinking",
              answer_bn: "একদম! আমিও তাই ভাবছিলাম",
              pronunciation_bn: "এক্জ্যাক্টলি! দ্যাটস হোয়াট আই ওয়াজ থিংকিং"
            }
          ]
        },
        {
          situation_bn: "আনুষ্ঠানিক নয় এমন একমত",
          question: "You know, prices keep going up",
          question_bn: "জানো তো, দাম বাড়তেই থাকে",
          answerFormula: "I know right?",
          answerFormula_bn: "জানি তো, তাই না?",
          pronunciation_bn: "আই নো রাইট?",
          examples: [
            {
              answer: "I know right?",
              answer_bn: "জানি তো, তাই না?",
              pronunciation_bn: "আই নো রাইট?"
            }
          ]
        }
      ],
      variations: [
        {
          variant: "emphasizing_difficulty",
          label: "Emphasizing Difficulty (কষ্ট জোর দিয়ে বলা)",
          label_bn: "কষ্ট জোর দিয়ে বলা",
          formula: "You know, it's really [ADJECTIVE]",
          formula_bn: "জানো তো, সত্যিই [বিশেষণ]",
          examples: [
            {
              en: "You know, it's really hard to find good workers these days",
              bn: "জানো তো, আজকাল ভালো কর্মী পাওয়া সত্যিই কঠিন",
              pronunciation_bn: "ইউ নো, ইটস রিয়েলি হার্ড টু ফাইন্ড গুড ওয়ার্কার্স দিজ ডেজ",
              slotValues: { STATEMENT: "it's really hard to find good workers these days" },
              stage: 2
            },
            {
              en: "You know, it's really expensive to live in Dhaka",
              bn: "জানো তো, ঢাকায় থাকা সত্যিই ব্যয়বহুল",
              pronunciation_bn: "ইউ নো, ইটস রিয়েলি এক্সপেন্সিভ টু লিভ ইন ঢাকা",
              slotValues: { STATEMENT: "it's really expensive to live in Dhaka" },
              stage: 2
            },
            {
              en: "You know, it's really difficult to manage everything alone",
              bn: "জানো তো, একা সব সামলানো সত্যিই কঠিন",
              pronunciation_bn: "ইউ নো, ইটস রিয়েলি ডিফিকাল্ট টু ম্যানেজ এভরিথিং এলোন",
              slotValues: { STATEMENT: "it's really difficult to manage everything alone" },
              stage: 2
            }
          ]
        },
        {
          variant: "shared_experience",
          label: "Shared Experience (সাধারণ অভিজ্ঞতা)",
          label_bn: "সাধারণ অভিজ্ঞতা",
          formula: "You know how [CLAUSE]",
          formula_bn: "জানো তো কেমন [বাক্য]",
          examples: [
            {
              en: "You know how crazy the traffic gets during Eid",
              bn: "জানো তো ঈদের সময় ট্রাফিক কেমন পাগলামি হয়",
              pronunciation_bn: "ইউ নো হাউ ক্রেজি দ্য ট্রাফিক গেটস ডিউরিং ঈদ",
              slotValues: { STATEMENT: "how crazy the traffic gets during Eid" },
              stage: 3
            },
            {
              en: "You know how hot it gets in April",
              bn: "জানো তো এপ্রিলে কেমন গরম পড়ে",
              pronunciation_bn: "ইউ নো হাউ হট ইট গেটস ইন এপ্রিল",
              slotValues: { STATEMENT: "how hot it gets in April" },
              stage: 2
            },
            {
              en: "You know how difficult it is to get a rickshaw in the rain",
              bn: "জানো তো বৃষ্টিতে রিকশা পাওয়া কত কঠিন",
              pronunciation_bn: "ইউ নো হাউ ডিফিকাল্ট ইট ইজ টু গেট এ রিকশা ইন দ্য রেইন",
              slotValues: { STATEMENT: "how difficult it is to get a rickshaw in the rain" },
              stage: 3
            }
          ]
        },
        {
          variant: "adding_information",
          label: "Adding Information (তথ্য যোগ করা)",
          label_bn: "তথ্য যোগ করা",
          formula: "You know, I heard that [CLAUSE]",
          formula_bn: "জানো তো, আমি শুনেছি যে [বাক্য]",
          examples: [
            {
              en: "You know, I heard that they're opening a new metro line",
              bn: "জানো তো, আমি শুনেছি তারা নতুন মেট্রো লাইন খুলছে",
              pronunciation_bn: "ইউ নো, আই হার্ড দ্যাট দেয়ার ওপেনিং এ নিউ মেট্রো লাইন",
              slotValues: { STATEMENT: "I heard that they're opening a new metro line" },
              stage: 3
            },
            {
              en: "You know, I heard that prices are going up again",
              bn: "জানো তো, আমি শুনেছি দাম আবার বাড়ছে",
              pronunciation_bn: "ইউ নো, আই হার্ড দ্যাট প্রাইসেস আর গোয়িং আপ এগেইন",
              slotValues: { STATEMENT: "I heard that prices are going up again" },
              stage: 2
            },
            {
              en: "You know, I heard that the shop is closing down",
              bn: "জানো তো, আমি শুনেছি দোকান বন্ধ হয়ে যাচ্ছে",
              pronunciation_bn: "ইউ নো, আই হার্ড দ্যাট দ্য শপ ইজ ক্লোজিং ডাউন",
              slotValues: { STATEMENT: "I heard that the shop is closing down" },
              stage: 2
            }
          ]
        }
      ],
      dialogueChains: [
        {
          id: "R16.3-dc1",
          title_bn: "বাস স্টপে অপেক্ষা",
          title_en: "Waiting for bus at Mohakhali",
          situation_bn: "মহাখালীতে দুই বন্ধু বাসের জন্য অপেক্ষা করছে",
          icon: "🚏",
          turns: [
            {
              speaker_bn: "বন্ধু ১",
              en: "The bus is late again!",
              bn: "বাস আবার লেট হয়েছে!",
              pronunciation_bn: "দ্য বাস ইজ লেট এগেইন!",
              patternId: "C3.1"
            },
            {
              speaker_bn: "বন্ধু ২",
              en: "You know, this happens every single day",
              bn: "জানো তো, এটা প্রতিদিনই হয়",
              pronunciation_bn: "ইউ নো, দিস হ্যাপেন্স এভরি সিঙ্গেল ডে",
              patternId: "R16.3"
            },
            {
              speaker_bn: "বন্ধু ১",
              en: "I know right? It's so frustrating",
              bn: "জানি তো, তাই না? খুব বিরক্তিকর",
              pronunciation_bn: "আই নো রাইট? ইটস সো ফ্রাস্ট্রেটিং",
              patternId: "C4.1"
            },
            {
              speaker_bn: "বন্ধু ২",
              en: "You know, maybe we should leave earlier",
              bn: "জানো তো, হয়তো আমাদের আগে বের হওয়া উচিত",
              pronunciation_bn: "ইউ নো, মেবি উই শুড লিভ আর্লিয়ার",
              patternId: "R16.3"
            }
          ],
          patternsUsed: ["C3.1", "R16.3", "C4.1"]
        }
      ],
      examples: [
        {
          en: "You know, it's really hot today",
          bn: "জানো তো, আজ সত্যি অনেক গরম",
          pronunciation_bn: "ইউ নো, ইটস রিয়েলি হট টুডে",
          slotValues: { STATEMENT: "it's really hot today" },
          topicArea: "weather",
          stage: 1
        },
        {
          en: "You know, traffic in Dhaka is crazy",
          bn: "জানো তো, ঢাকার ট্রাফিক পাগলামি",
          pronunciation_bn: "ইউ নো, ট্রাফিক ইন ঢাকা ইজ ক্রেজি",
          slotValues: { STATEMENT: "traffic in Dhaka is crazy" },
          topicArea: "transport",
          stage: 1,
          miniStory: {
            situation_bn: "দুই সহকর্মী অফিস থেকে বের হচ্ছে। একজন বলল রিকশায় যাব। অন্যজন বলল: You know, traffic in Dhaka is crazy।",
            icon: "🚗"
          }
        },
        {
          en: "You know, I've been thinking about it",
          bn: "জানো তো, আমি এটা নিয়ে ভাবছি",
          pronunciation_bn: "ইউ নো, আইভ বিন থিংকিং অ্যাবাউট ইট",
          slotValues: { STATEMENT: "I've been thinking about it" },
          topicArea: "daily_life",
          stage: 1
        },
        {
          en: "You know, life can be difficult sometimes",
          bn: "জানো তো, জীবন কখনো কখনো কঠিন হতে পারে",
          pronunciation_bn: "ইউ নো, লাইফ ক্যান বি ডিফিকাল্ট সামটাইমস",
          slotValues: { STATEMENT: "life can be difficult sometimes" },
          topicArea: "philosophy",
          stage: 1,
          miniStory: {
            situation_bn: "চা দোকানে দুই বন্ধু বসে আছে। একজন চাকরি হারিয়েছে। অন্যজন সান্ত্বনা দিয়ে বলল: You know, life can be difficult sometimes।",
            icon: "☕"
          }
        },
        {
          en: "You know, I really appreciate your help",
          bn: "জানো তো, আমি তোমার সাহায্য সত্যিই কদর করি",
          pronunciation_bn: "ইউ নো, আই রিয়েলি অ্যাপ্রিশিয়েট ইওর হেল্প",
          slotValues: { STATEMENT: "I really appreciate your help" },
          topicArea: "gratitude",
          stage: 1
        },
        {
          en: "You know, this restaurant makes the best biryani",
          bn: "জানো তো, এই রেস্তোরাঁ সবচেয়ে ভালো বিরিয়ানি বানায়",
          pronunciation_bn: "ইউ নো, দিস রেস্টুরেন্ট মেক্স দ্য বেস্ট বিরিয়ানি",
          slotValues: { STATEMENT: "this restaurant makes the best biryani" },
          topicArea: "food_drink",
          stage: 2,
          miniStory: {
            situation_bn: "নতুন বন্ধুকে খানার দাবাত দিয়ে আমানা হোটেলে নিয়ে গেল। বলল: You know, this restaurant makes the best biryani।",
            icon: "🍚"
          }
        },
        {
          en: "You know, working from home has its benefits",
          bn: "জানো তো, বাসা থেকে কাজ করার সুবিধা আছে",
          pronunciation_bn: "ইউ নো, ওয়ার্কিং ফ্রম হোম হ্যাজ ইটস বেনিফিটস",
          slotValues: { STATEMENT: "working from home has its benefits" },
          topicArea: "work",
          stage: 2
        },
        {
          en: "You know, I haven't seen him in ages",
          bn: "জানো তো, আমি তাকে যুগ যুগ দেখিনি",
          pronunciation_bn: "ইউ নো, আই হ্যাভেন্ট সিন হিম ইন এইজেস",
          slotValues: { STATEMENT: "I haven't seen him in ages" },
          topicArea: "social",
          stage: 2,
          miniStory: {
            situation_bn: "পুরানো বন্ধু রাস্তায় দেখা। এক বন্ধু বলল কামাল কেমন আছে? অন্যজন বলল: You know, I haven't seen him in ages।",
            icon: "👋"
          }
        },
        {
          en: "You know, prices keep going up every month",
          bn: "জানো তো, দাম প্রতি মাসে বাড়তেই থাকে",
          pronunciation_bn: "ইউ নো, প্রাইসেস কিপ গোয়িং আপ এভরি মানথ",
          slotValues: { STATEMENT: "prices keep going up every month" },
          topicArea: "economy",
          stage: 2
        },
        {
          en: "You know, I'm not really a morning person",
          bn: "জানো তো, আমি আসলে সকালের মানুষ না",
          pronunciation_bn: "ইউ নো, আইম নট রিয়েলি এ মর্নিং পার্সন",
          slotValues: { STATEMENT: "I'm not really a morning person" },
          topicArea: "personal_info",
          stage: 2
        },
        {
          en: "You know, I was actually planning to call you today",
          bn: "জানো তো, আমি আসলে আজ তোমাকে ফোন দিতে যাচ্ছিলাম",
          pronunciation_bn: "ইউ নো, আই ওয়াজ অ্যাকচুয়ালি প্ল্যানিং টু কল ইউ টুডে",
          slotValues: { STATEMENT: "I was actually planning to call you today" },
          topicArea: "communication",
          stage: 3,
          miniStory: {
            situation_bn: "বন্ধু হঠাৎ ফোন দিল। অবাক হয়ে বলল: You know, I was actually planning to call you today।",
            icon: "📞"
          }
        },
        {
          en: "You know, we've been working on this for months",
          bn: "জানো তো, আমরা এটা নিয়ে মাসের পর মাস কাজ করছি",
          pronunciation_bn: "ইউ নো, উইভ বিন ওয়ার্কিং অন দিস ফর মানথস",
          slotValues: { STATEMENT: "we've been working on this for months" },
          topicArea: "work",
          stage: 3
        },
        {
          en: "You know, that's not what I meant at all",
          bn: "জানো তো, আমি মোটেও সেটা বলতে চাইনি",
          pronunciation_bn: "ইউ নো, দ্যাটস নট হোয়াট আই মেন্ট অ্যাট অল",
          slotValues: { STATEMENT: "that's not what I meant at all" },
          topicArea: "clarification",
          stage: 3,
          miniStory: {
            situation_bn: "অফিসে মিটিংয়ে কথা ভুল বুঝল সবাই। জামাল বলল: You know, that's not what I meant at all।",
            icon: "🤦"
          }
        },
        {
          en: "You know, I think we should discuss this more carefully",
          bn: "জানো তো, আমার মনে হয় আমাদের এটা আরো সাবধানে আলোচনা করা উচিত",
          pronunciation_bn: "ইউ নো, আই থিংক উই শুড ডিসকাস দিস মোর কেয়ারফুলি",
          slotValues: { STATEMENT: "I think we should discuss this more carefully" },
          topicArea: "work",
          stage: 3
        },
        {
          en: "You know, there's something I've been meaning to tell you",
          bn: "জানো তো, একটা কথা আছে যেটা আমি তোমাকে বলতে চাচ্ছিলাম",
          pronunciation_bn: "ইউ নো, দেয়ারস সামথিং আইভ বিন মিনিং টু টেল ইউ",
          slotValues: { STATEMENT: "there's something I've been meaning to tell you" },
          topicArea: "communication",
          stage: 3
        }
      ]
    },
    {
      id: "R16.4",
      patternName: "Using 'By the way' to change topic",
      patternName_bn: "যাই হোক... বলা",
      formula: "By the way, [STATEMENT]",
      formula_bn: "যাই হোক, [কথা]",
      concept_bn: "যাই হোক",
      formulaPronunciation_bn: "বাই দ্য ওয়ে, [স্টেটমেন্ট]",
      bridgeRuleIds: ["BR1", "BR6"],
      usageNote: "By the way is used to introduce a new topic, add related information, or bring up something you just remembered. It smoothly transitions conversation.",
      usageNote_bn: "যাই হোক — এইটা দিয়ে নতুন টপিক আনা যায়, সম্পর্কিত তথ্য দেওয়া যায়, বা হঠাৎ মনে পড়া কিছু বলা যায়। কথার বিষয় সহজে বদলাতে সাহায্য করে।",
      formality: "casual",
      difficulty: "intermediate",
      slots: [
        {
          name: "STATEMENT",
          description: "New topic or additional information",
          description_bn: "নতুন টপিক বা অতিরিক্ত তথ্য",
          acceptedTypes: ["clause", "statement"],
          examples: [
            "have you seen my phone?",
            "did you hear about the new office?",
            "I met your brother yesterday",
            "the meeting is at 3 PM"
          ]
        }
      ],
      conversionSteps: {
        banglaThought: "তুমি বাংলায় বলো: 'যাই হোক, তুমি কি আমার ফোন দেখেছ?'",
        steps: [
          {
            step_bn: "'By the way' দিয়ে শুরু করো",
            result: "By the way,"
          },
          {
            step_bn: "নতুন টপিক যোগ করো",
            result: "By the way, have you seen my phone?"
          }
        ],
        finalResult: "By the way, have you seen my phone?",
        finalResult_bn: "যাই হোক, তুমি কি আমার ফোন দেখেছ?"
      },
      commonMistakes: [
        {
          wrong: "In the way, have you seen it?",
          correct: "By the way, have you seen it?",
          explanation_bn: "'In the way' না, 'By the way' বলতে হবে"
        },
        {
          wrong: "By way, have you seen it?",
          correct: "By the way, have you seen it?",
          explanation_bn: "পুরো বলো 'By the way' — শুধু 'By way' না"
        },
        {
          wrong: "By the way have you seen it?",
          correct: "By the way, have you seen it?",
          explanation_bn: "By the way এর পর কমা দাও"
        }
      ],
      simpleRules: [
        {
          rule_bn: "বাংলায় যাই হোক বললে ইংরেজিতে By the way বলো — টপিক বদলাতে",
          example: "By the way, have you seen my phone?"
        },
        {
          rule_bn: "By the way এর পর কমা দিতে হবে",
          example: "By the way, the meeting is at 3 PM"
        },
        {
          rule_bn: "হঠাৎ কিছু মনে পড়লে By the way দিয়ে বলো",
          example: "By the way, I forgot to tell you something"
        }
      ],
      usageSituations: [
        {
          situation_bn: "কথার মাঝে হঠাৎ মনে পড়ল কিছু",
          situation_en: "When you suddenly remember something during conversation",
          exampleSentence: "By the way, did you pay the electricity bill?",
          exampleSentence_bn: "যাই হোক, তুমি কি বিদ্যুতের বিল দিয়েছ?"
        },
        {
          situation_bn: "অফিসে টপিক বদলাতে",
          situation_en: "When changing topic at the office",
          exampleSentence: "By the way, have you heard about the new project?",
          exampleSentence_bn: "যাই হোক, তুমি কি নতুন প্রজেক্টের কথা শুনেছ?"
        },
        {
          situation_bn: "বন্ধুকে আরেকটা তথ্য দিতে",
          situation_en: "When sharing additional info with a friend",
          exampleSentence: "By the way, I saw your cousin at the mall yesterday",
          exampleSentence_bn: "যাই হোক, আমি গতকাল মলে তোমার কাজিনকে দেখেছি"
        }
      ],
      sentenceBuilding: [
        {
          previousPatternId: "E2.1",
          previousFormula: "I [VERB-ed] [THING]",
          previousFormula_bn: "আমি [কাজ] করেছি",
          combined: "By the way, I finished the report yesterday",
          combined_bn: "যাই হোক, আমি গতকাল রিপোর্ট শেষ করেছি"
        },
        {
          previousPatternId: "G2.1",
          previousFormula: "What is [THING]?",
          previousFormula_bn: "[জিনিস] কী?",
          combined: "By the way, where did you buy that shirt?",
          combined_bn: "যাই হোক, তুমি ঐ শার্ট কোথায় কিনেছ?"
        }
      ],
      memoryTrick_bn: "বাংলায় যাই হোক মানে ইংরেজিতে By the way — টপিক বদলাতে ব্যবহার করো",
      chunks: [
        {
          en: "By the way, I forgot to mention",
          bn: "যাই হোক, আমি বলতে ভুলে গেছিলাম",
          pronunciation_bn: "বাই দ্য ওয়ে, আই ফরগট টু মেনশন"
        },
        {
          en: "Oh, by the way",
          bn: "ওহ, যাই হোক",
          pronunciation_bn: "ওহ, বাই দ্য ওয়ে"
        },
        {
          en: "By the way, did you know",
          bn: "যাই হোক, তুমি কি জানো",
          pronunciation_bn: "বাই দ্য ওয়ে, ডিড ইউ নো"
        }
      ],
      wordMap: {
        bn_sentence: "যাই হোক, তুমি কি আমার ফোন দেখেছ?",
        en_sentence: "By the way, have you seen my phone?",
        mappings: [
          { bn_word: "যাই হোক", en_word: "By the way", type: "direct", bridgeRuleId: "BR1" }
        ]
      },
      answerTemplates: [
        {
          situation_bn: "কেউ By the way দিয়ে নতুন তথ্য দিলে",
          question: "By the way, the office is moving next month",
          question_bn: "যাই হোক, অফিস পরের মাসে সরে যাচ্ছে",
          answerFormula: "Oh really? I didn't know that",
          answerFormula_bn: "ও সত্যি? আমি জানতাম না",
          pronunciation_bn: "ওহ রিয়েলি? আই ডিডন্ট নো দ্যাট",
          examples: [
            {
              answer: "Oh really? I didn't know that",
              answer_bn: "ও সত্যি? আমি জানতাম না",
              pronunciation_bn: "ওহ রিয়েলি? আই ডিডন্ট নো দ্যাট"
            }
          ]
        },
        {
          situation_bn: "কেউ কিছু মনে করিয়ে দিলে",
          question: "By the way, don't forget the meeting at 3",
          question_bn: "যাই হোক, ৩টার মিটিং ভুলো না",
          answerFormula: "Thanks for reminding me",
          answerFormula_bn: "মনে করিয়ে দেওয়ার জন্য ধন্যবাদ",
          pronunciation_bn: "থ্যাংকস ফর রিমাইন্ডিং মি",
          examples: [
            {
              answer: "Thanks for reminding me",
              answer_bn: "মনে করিয়ে দেওয়ার জন্য ধন্যবাদ",
              pronunciation_bn: "থ্যাংকস ফর রিমাইন্ডিং মি"
            }
          ]
        },
        {
          situation_bn: "মনে করানোর উত্তর দিতে",
          question: "By the way, did you pay the bill?",
          question_bn: "যাই হোক, তুমি কি বিল দিয়েছ?",
          answerFormula: "Oh yes, I almost forgot",
          answerFormula_bn: "ও হ্যাঁ, আমি প্রায় ভুলেই গিয়েছিলাম",
          pronunciation_bn: "ওহ ইয়েস, আই অলমোস্ট ফরগট",
          examples: [
            {
              answer: "Oh yes, I almost forgot",
              answer_bn: "ও হ্যাঁ, আমি প্রায় ভুলেই গিয়েছিলাম",
              pronunciation_bn: "ওহ ইয়েস, আই অলমোস্ট ফরগট"
            }
          ]
        }
      ],
      variations: [
        {
          variant: "with_question",
          label: "With Question (প্রশ্ন সহ)",
          label_bn: "প্রশ্ন সহ",
          formula: "By the way, [QUESTION]",
          formula_bn: "যাই হোক, [প্রশ্ন]",
          examples: [
            {
              en: "By the way, where are you going for Eid?",
              bn: "যাই হোক, তুমি ঈদে কোথায় যাচ্ছ?",
              pronunciation_bn: "বাই দ্য ওয়ে, হোয়্যার আর ইউ গোয়িং ফর ঈদ?",
              slotValues: { STATEMENT: "where are you going for Eid?" },
              stage: 2
            },
            {
              en: "By the way, have you met the new manager?",
              bn: "যাই হোক, তুমি কি নতুন ম্যানেজারের সাথে দেখা করেছ?",
              pronunciation_bn: "বাই দ্য ওয়ে, হ্যাভ ইউ মেট দ্য নিউ ম্যানেজার?",
              slotValues: { STATEMENT: "have you met the new manager?" },
              stage: 2
            },
            {
              en: "By the way, did you get my message yesterday?",
              bn: "যাই হোক, তুমি কি গতকাল আমার মেসেজ পেয়েছ?",
              pronunciation_bn: "বাই দ্য ওয়ে, ডিড ইউ গেট মাই মেসেজ ইয়েস্টারডে?",
              slotValues: { STATEMENT: "did you get my message yesterday?" },
              stage: 2
            }
          ]
        },
        {
          variant: "adding_information",
          label: "Adding Information (তথ্য যোগ করা)",
          label_bn: "তথ্য যোগ করা",
          formula: "Oh, by the way, [STATEMENT]",
          formula_bn: "ওহ, যাই হোক, [কথা]",
          examples: [
            {
              en: "Oh, by the way, the shop is closed on Fridays",
              bn: "ওহ, যাই হোক, দোকান শুক্রবার বন্ধ থাকে",
              pronunciation_bn: "ওহ, বাই দ্য ওয়ে, দ্য শপ ইজ ক্লোজড অন ফ্রাইডেজ",
              slotValues: { STATEMENT: "the shop is closed on Fridays" },
              stage: 2
            },
            {
              en: "Oh, by the way, your brother called this morning",
              bn: "ওহ, যাই হোক, তোমার ভাই আজ সকালে ফোন দিয়েছিল",
              pronunciation_bn: "ওহ, বাই দ্য ওয়ে, ইওর ব্রাদার কলড দিস মর্নিং",
              slotValues: { STATEMENT: "your brother called this morning" },
              stage: 3
            },
            {
              en: "Oh, by the way, I saw your colleague at the restaurant",
              bn: "ওহ, যাই হোক, আমি তোমার সহকর্মীকে রেস্তোরাঁয় দেখেছি",
              pronunciation_bn: "ওহ, বাই দ্য ওয়ে, আই স দ্য ইওর কলিগ অ্যাট দ্য রেস্তোরাঁ",
              slotValues: { STATEMENT: "I saw your colleague at the restaurant" },
              stage: 3
            }
          ]
        },
        {
          variant: "reminder",
          label: "Reminder (মনে করিয়ে দেওয়া)",
          label_bn: "মনে করিয়ে দেওয়া",
          formula: "By the way, don't forget to [ACTION]",
          formula_bn: "যাই হোক, ভুলো না [কাজ]",
          examples: [
            {
              en: "By the way, don't forget to lock the door",
              bn: "যাই হোক, দরজা লক করতে ভুলো না",
              pronunciation_bn: "বাই দ্য ওয়ে, ডোন্ট ফরগেট টু লক দ্য ডোর",
              slotValues: { STATEMENT: "don't forget to lock the door" },
              stage: 2
            },
            {
              en: "By the way, don't forget we have a meeting at 3",
              bn: "যাই হোক, ভুলো না আমাদের ৩টায় মিটিং আছে",
              pronunciation_bn: "বাই দ্য ওয়ে, ডোন্ট ফরগেট উই হ্যাভ এ মিটিং অ্যাট থ্রি",
              slotValues: { STATEMENT: "don't forget we have a meeting at 3" },
              stage: 2
            },
            {
              en: "By the way, don't forget to bring the documents",
              bn: "যাই হোক, কাগজপত্র আনতে ভুলো না",
              pronunciation_bn: "বাই দ্য ওয়ে, ডোন্ট ফরগেট টু ব্রিং দ্য ডকুমেন্টস",
              slotValues: { STATEMENT: "don't forget to bring the documents" },
              stage: 2
            }
          ]
        }
      ],
      dialogueChains: [
        {
          id: "R16.4-dc1",
          title_bn: "অফিসে কথাবার্তা",
          title_en: "Office conversation",
          situation_bn: "অফিসে দুই সহকর্মী কথা বলছে",
          icon: "🏢",
          turns: [
            {
              speaker_bn: "সহকর্মী ১",
              en: "The report is almost done",
              bn: "রিপোর্ট প্রায় শেষ",
              pronunciation_bn: "দ্য রিপোর্ট ইজ অলমোস্ট ডান",
              patternId: "C3.1"
            },
            {
              speaker_bn: "সহকর্মী ২",
              en: "That's great! By the way, did you hear about the new policy?",
              bn: "দারুণ! যাই হোক, তুমি কি নতুন পলিসির কথা শুনেছ?",
              pronunciation_bn: "দ্যাটস গ্রেট! বাই দ্য ওয়ে, ডিড ইউ হেয়ার অ্যাবাউট দ্য নিউ পলিসি?",
              patternId: "R16.4"
            },
            {
              speaker_bn: "সহকর্মী ১",
              en: "No, what policy?",
              bn: "না, কোন পলিসি?",
              pronunciation_bn: "নো, হোয়াট পলিসি?",
              patternId: "G2.1"
            },
            {
              speaker_bn: "সহকর্মী ২",
              en: "By the way, we can discuss it after lunch",
              bn: "যাই হোক, আমরা দুপুরের খাবারের পরে আলোচনা করতে পারি",
              pronunciation_bn: "বাই দ্য ওয়ে, উই ক্যান ডিসকাস ইট আফটার লাঞ্চ",
              patternId: "R16.4"
            }
          ],
          patternsUsed: ["C3.1", "R16.4", "G2.1"]
        }
      ],
      examples: [
        {
          en: "By the way, have you seen my phone?",
          bn: "যাই হোক, তুমি কি আমার ফোন দেখেছ?",
          pronunciation_bn: "বাই দ্য ওয়ে, হ্যাভ ইউ সিন মাই ফোন?",
          slotValues: { STATEMENT: "have you seen my phone?" },
          topicArea: "daily_life",
          stage: 1
        },
        {
          en: "By the way, did you hear about the new office?",
          bn: "যাই হোক, তুমি কি নতুন অফিসের কথা শুনেছ?",
          pronunciation_bn: "বাই দ্য ওয়ে, ডিড ইউ হেয়ার অ্যাবাউট দ্য নিউ অফিস?",
          slotValues: { STATEMENT: "did you hear about the new office?" },
          topicArea: "work",
          stage: 1,
          miniStory: {
            situation_bn: "চায়ের দোকানে দুই সহকর্মী বসে আছে। প্রজেক্টের কথা বলছিল। একজন হঠাৎ বলল: By the way, did you hear about the new office?",
            icon: "☕"
          }
        },
        {
          en: "By the way, I met your brother yesterday",
          bn: "যাই হোক, আমি গতকাল তোমার ভাইয়ের সাথে দেখা করেছি",
          pronunciation_bn: "বাই দ্য ওয়ে, আই মেট ইওর ব্রাদার ইয়েস্টারডে",
          slotValues: { STATEMENT: "I met your brother yesterday" },
          topicArea: "social",
          stage: 1
        },
        {
          en: "By the way, the meeting is at 3 PM",
          bn: "যাই হোক, মিটিং বিকাল ৩টায়",
          pronunciation_bn: "বাই দ্য ওয়ে, দ্য মিটিং ইজ অ্যাট থ্রি পিএম",
          slotValues: { STATEMENT: "the meeting is at 3 PM" },
          topicArea: "work",
          stage: 1,
          miniStory: {
            situation_bn: "অফিসে দুজন কথা বলছে লাঞ্চের কথা। হঠাৎ নাদিয়া মনে করিয়ে দিল: By the way, the meeting is at 3 PM।",
            icon: "📅"
          }
        },
        {
          en: "By the way, how is your mother doing?",
          bn: "যাই হোক, তোমার মা কেমন আছেন?",
          pronunciation_bn: "বাই দ্য ওয়ে, হাউ ইজ ইওর মাদার ডুয়িং?",
          slotValues: { STATEMENT: "how is your mother doing?" },
          topicArea: "health",
          stage: 1
        },
        {
          en: "By the way, I forgot to tell you something",
          bn: "যাই হোক, আমি তোমাকে একটা কথা বলতে ভুলে গেছিলাম",
          pronunciation_bn: "বাই দ্য ওয়ে, আই ফরগট টু টেল ইউ সামথিং",
          slotValues: { STATEMENT: "I forgot to tell you something" },
          topicArea: "communication",
          stage: 2,
          miniStory: {
            situation_bn: "ফোনে বন্ধু সব কথা শেষ করে বিদায় নিচ্ছে। হঠাৎ মনে পড়ল: By the way, I forgot to tell you something।",
            icon: "📞"
          }
        },
        {
          en: "By the way, there's a sale at the mall",
          bn: "যাই হোক, মলে সেল চলছে",
          pronunciation_bn: "বাই দ্য ওয়ে, দেয়ারস এ সেল অ্যাট দ্য মল",
          slotValues: { STATEMENT: "there's a sale at the mall" },
          topicArea: "shopping",
          stage: 2
        },
        {
          en: "By the way, did you pay the electricity bill?",
          bn: "যাই হোক, তুমি কি বিদ্যুতের বিল দিয়েছ?",
          pronunciation_bn: "বাই দ্য ওয়ে, ডিড ইউ পে দ্য ইলেক্ট্রিসিটি বিল?",
          slotValues: { STATEMENT: "did you pay the electricity bill?" },
          topicArea: "home",
          stage: 2,
          miniStory: {
            situation_bn: "স্বামী-স্ত্রী রাতে খেতে বসেছে। হঠাৎ স্ত্রী মনে করল: By the way, did you pay the electricity bill?",
            icon: "💡"
          }
        },
        {
          en: "By the way, I'm leaving early today",
          bn: "যাই হোক, আমি আজ তাড়াতাড়ি চলে যাচ্ছি",
          pronunciation_bn: "বাই দ্য ওয়ে, আইম লিভিং আর্লি টুডে",
          slotValues: { STATEMENT: "I'm leaving early today" },
          topicArea: "work",
          stage: 2
        },
        {
          en: "By the way, that restaurant closed down last month",
          bn: "যাই হোক, ঐ রেস্তোরাঁ গত মাসে বন্ধ হয়ে গেছে",
          pronunciation_bn: "বাই দ্য ওয়ে, দ্যাট রেস্তোরাঁ ক্লোজড ডাউন লাস্ট মানথ",
          slotValues: { STATEMENT: "that restaurant closed down last month" },
          topicArea: "food_drink",
          stage: 2
        },
        {
          en: "By the way, I've been meaning to ask you about that project",
          bn: "যাই হোক, আমি তোমাকে ঐ প্রজেক্ট সম্পর্কে জিজ্ঞেস করতে চাচ্ছিলাম",
          pronunciation_bn: "বাই দ্য ওয়ে, আইভ বিন মিনিং টু আস্ক ইউ অ্যাবাউট দ্যাট প্রজেক্ট",
          slotValues: { STATEMENT: "I've been meaning to ask you about that project" },
          topicArea: "work",
          stage: 3,
          miniStory: {
            situation_bn: "প্রজেক্ট মিটিং শেষ হওয়ার পর করিম টিমলিডকে বলল: By the way, I've been meaning to ask you about that project।",
            icon: "💼"
          }
        },
        {
          en: "By the way, your cousin got married last week",
          bn: "যাই হোক, তোমার কাজিন গত সপ্তাহে বিয়ে করেছে",
          pronunciation_bn: "বাই দ্য ওয়ে, ইওর কাজিন গট ম্যারিড লাস্ট উইক",
          slotValues: { STATEMENT: "your cousin got married last week" },
          topicArea: "family",
          stage: 3
        },
        {
          en: "By the way, you might want to check your email",
          bn: "যাই হোক, তুমি হয়তো তোমার ইমেইল চেক করতে চাইবে",
          pronunciation_bn: "বাই দ্য ওয়ে, ইউ মাইট ওয়ান্ট টু চেক ইওর ইমেইল",
          slotValues: { STATEMENT: "you might want to check your email" },
          topicArea: "work",
          stage: 3,
          miniStory: {
            situation_bn: "অফিসে লাঞ্চ শেষে ফিরছে দুজন। একজন বলল: By the way, you might want to check your email — বস কিছু পাঠিয়েছে।",
            icon: "📧"
          }
        },
        {
          en: "By the way, I heard they're hiring at your company",
          bn: "যাই হোক, আমি শুনেছি তোমার কোম্পানিতে নিয়োগ দিচ্ছে",
          pronunciation_bn: "বাই দ্য ওয়ে, আই হার্ড দেয়ার হায়ারিং অ্যাট ইওর কোম্পানি",
          slotValues: { STATEMENT: "I heard they're hiring at your company" },
          topicArea: "work",
          stage: 3
        },
        {
          en: "By the way, I won't be able to make it to the party",
          bn: "যাই হোক, আমি পার্টিতে যেতে পারব না",
          pronunciation_bn: "বাই দ্য ওয়ে, আই ওন্ট বি এবল টু মেক ইট টু দ্য পার্টি",
          slotValues: { STATEMENT: "I won't be able to make it to the party" },
          topicArea: "social",
          stage: 3
        }
      ]
    }
  ]
};
