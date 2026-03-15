import { PatternCategory } from "@/types/pattern";

export const categoryT36: PatternCategory = {
  id: "T36",
  slug: "high-frequency-fixed-phrases",
  name: "High-Frequency Fixed Phrases",
  name_bn: "সবচেয়ে বেশি ব্যবহৃত কথা",
  description: "Master the most commonly used fixed phrases in everyday English.",
  description_bn: "ইংরেজিতে প্রতিদিন সবচেয়ে বেশি যে কথাগুলো বলা হয় — সেগুলো শেখো।",
  icon: "💬",
  group: "T",
  groupName: "Topic-Based Patterns",
  groupName_bn: "বিষয়ভিত্তিক প্যাটার্ন",
  difficulty: "beginner",
  patterns: [
    {
      id: "T36.1",
      patternName: "No worries / No problem",
      patternName_bn: "কোনো সমস্যা নেই বলা",
      concept_bn: "সমস্যা নেই",
      formula: "No worries / No problem",
      formula_bn: "নো ওয়ারিজ / নো প্রবলেম",
      formulaPronunciation_bn: "নো ওয়ারিজ / নো প্রবলেম",
      usageNote: "Use 'No worries' or 'No problem' to respond when someone thanks you or apologizes. It's very common in casual conversation.",
      usageNote_bn: "কেউ তোমাকে থ্যাংক ইউ বললে বা সরি বললে, তুমি বলতে পারো 'নো ওয়ারিজ' বা 'নো প্রবলেম'। মানে হলো — কোনো সমস্যা নেই, চিন্তা করো না।",
      difficulty: "beginner",
      formality: "casual",
      bridgeRuleIds: ["BR1", "BR7"],
      conversionSteps: {
        banglaThought: "তুমি বাংলায় বলো: 'কোনো সমস্যা নেই'",
        steps: [
          {
            step_bn: "বাংলা চিন্তা থেকে শুরু করো — 'কোনো সমস্যা নেই'",
            result: "No worries"
          },
          {
            step_bn: "সরাসরি ফিক্সড ফ্রেজ বলো",
            result: "No worries"
          },
          {
            step_bn: "অন্য উপায়: নো প্রবলেম",
            result: "No problem"
          }
        ],
        finalResult: "No worries / No problem",
        finalResult_bn: "কোনো সমস্যা নেই"
      },
      commonMistakes: [
        {
          wrong: "Not problem",
          correct: "No problem",
          explanation_bn: "'নো' মানে 'না আছে', 'নট' মানে 'না'। এখানে 'নো প্রবলেম' মানে 'সমস্যা নেই'।"
        },
        {
          wrong: "No worry",
          correct: "No worries",
          explanation_bn: "সবসময় 'ওয়ারিজ' বলতে হয় 's' দিয়ে। এটা ফিক্সড কথা।"
        },
        {
          wrong: "Don't worry (থ্যাংক ইউ-এর জবাবে)",
          correct: "No worries",
          explanation_bn: "'ডোন্ট ওয়ারি' মানে 'চিন্তা করো না'। কিন্তু থ্যাংক ইউ-এর জবাবে 'নো ওয়ারিজ' বা 'নো প্রবলেম' বলতে হয়।"
        }
      ],
      simpleRules: [
        {
          rule_bn: "কেউ তোমাকে ধন্যবাদ দিলে 'নো ওয়ারিজ' বা 'নো প্রবলেম' বলো",
          example: "A: Thank you! B: No worries!"
        },
        {
          rule_bn: "কেউ তোমার কাছে ক্ষমা চাইলে 'নো ওয়ারিজ' বা 'নো প্রবলেম' বলো",
          example: "A: Sorry! B: No problem!"
        },
        {
          rule_bn: "'ওয়ারিজ'-এ সবসময় 's' থাকবে",
          example: "No worries (NOT No worry)"
        }
      ],
      usageSituations: [
        {
          situation_bn: "বাজারে দোকানদার যখন দাম কমিয়ে দেয়",
          situation_en: "When a shopkeeper gives a discount and you thank them",
          exampleSentence: "No worries!",
          exampleSentence_bn: "কোনো সমস্যা নেই!"
        },
        {
          situation_bn: "অফিসে কেউ ভুল করে ক্ষমা চাইলে",
          situation_en: "When a colleague apologizes for a mistake",
          exampleSentence: "No problem!",
          exampleSentence_bn: "কোনো প্রবলেম নেই!"
        },
        {
          situation_bn: "গাড়িতে বা রাস্তায় কেউ দুর্ঘটনাবশত ধাক্কা দিলে",
          situation_en: "When someone accidentally bumps into you",
          exampleSentence: "No worries!",
          exampleSentence_bn: "কোনো সমস্যা নেই!"
        }
      ],
      sentenceBuilding: [
        {
          previousPatternId: "E5.1",
          previousFormula: "Thank you for [ACTION]",
          previousFormula_bn: "[কাজ]-এর জন্য ধন্যবাদ",
          combined: "A: Thank you for helping me. B: No worries!",
          combined_bn: "A: আমাকে সাহায্য করার জন্য ধন্যবাদ। B: কোনো সমস্যা নেই!"
        },
        {
          previousPatternId: "E1.1",
          previousFormula: "Sorry I'm [REASON]",
          previousFormula_bn: "সরি আমি [কারণ]",
          combined: "A: Sorry I'm late. B: No problem, it happens.",
          combined_bn: "A: সরি দেরি হলো। B: কোনো সমস্যা নেই, এসব হয়।"
        }
      ],
      memoryTrick_bn: "'ওয়ারিজ' মানে চিন্তা। 'নো ওয়ারিজ' মানে চিন্তা নেই। বাংলায় যেমন বলো 'কোনো সমস্যা নেই' — ইংরেজিতে তেমনি 'নো ওয়ারিজ'।",
      chunks: [
        {
          en: "No worries",
          bn: "কোনো চিন্তা নেই",
          pronunciation_bn: "নো ওয়ারিজ"
        },
        {
          en: "No problem",
          bn: "কোনো সমস্যা নেই",
          pronunciation_bn: "নো প্রবলেম"
        },
        {
          en: "No worries at all",
          bn: "একদমই কোনো সমস্যা নেই",
          pronunciation_bn: "নো ওয়ারিজ অ্যাট অল"
        }
      ],
      wordMap: {
        bn_sentence: "কোনো সমস্যা নেই",
        en_sentence: "No worries",
        mappings: [
          {
            bn_word: "কোনো",
            en_word: "No",
            type: "direct",
            bridgeRuleId: "BR1"
          },
          {
            bn_word: "সমস্যা/চিন্তা",
            en_word: "worries / problem",
            type: "direct",
            bridgeRuleId: "BR1"
          }
        ]
      },
      answerTemplates: [
        {
          situation_bn: "কেউ ধন্যবাদ দিলে",
          question: "Thank you!",
          question_bn: "থ্যাংক ইউ!",
          answerFormula: "No worries!",
          answerFormula_bn: "নো ওয়ারিজ!",
          pronunciation_bn: "নো ওয়ারিজ!",
          examples: [
            { answer: "No worries!", answer_bn: "কোনো সমস্যা নেই!", pronunciation_bn: "নো ওয়ারিজ!" }
          ]
        },
        {
          situation_bn: "কেউ ক্ষমা চাইলে জোর দিয়ে বলার জন্য",
          question: "Sorry about that!",
          question_bn: "এজন্য সরি!",
          answerFormula: "No problem at all",
          answerFormula_bn: "নো প্রবলেম অ্যাট অল",
          pronunciation_bn: "নো প্রবলেম অ্যাট অল",
          examples: [
            { answer: "No problem at all!", answer_bn: "একদমই কোনো সমস্যা নেই!", pronunciation_bn: "নো প্রবলেম অ্যাট অল!" }
          ]
        },
        {
          situation_bn: "হাসিমুখে বলতে চাইলে",
          question: "Thank you so much!",
          question_bn: "অনেক ধন্যবাদ!",
          answerFormula: "It's all good / No worries",
          answerFormula_bn: "ইটস অল গুড / নো ওয়ারিজ",
          pronunciation_bn: "ইটস অল গুড / নো ওয়ারিজ",
          examples: [
            { answer: "It's all good!", answer_bn: "সব ঠিক আছে!", pronunciation_bn: "ইটস অল গুড!" }
          ]
        }
      ],
      variations: [
        {
          variant: "emphasis",
          label: "With 'at all' for emphasis",
          label_bn: "জোর দিয়ে বলার জন্য 'অ্যাট অল' দিয়ে",
          formula: "No worries at all",
          formula_bn: "নো ওয়ারিজ অ্যাট অল",
          examples: [
            {
              en: "No worries at all",
              bn: "একদমই কোনো সমস্যা নেই",
              pronunciation_bn: "নো ওয়ারিজ অ্যাট অল",
              slotValues: {},
              stage: 1
            },
            {
              en: "No problem at all",
              bn: "একদমই কোনো প্রবলেম নেই",
              pronunciation_bn: "নো প্রবলেম অ্যাট অল",
              slotValues: {},
              stage: 2
            },
            {
              en: "It's no problem at all for me",
              bn: "আমার জন্য একদমই কোনো সমস্যা না",
              pronunciation_bn: "ইটস নো প্রবলেম অ্যাট অল ফর মি",
              slotValues: {},
              stage: 3
            }
          ]
        },
        {
          variant: "alternative",
          label: "Alternative: It's okay / It's fine",
          label_bn: "আরেক উপায়: ইটস ওকে / ইটস ফাইন",
          formula: "It's okay / It's fine",
          formula_bn: "ইটস ওকে / ইটস ফাইন",
          examples: [
            {
              en: "It's okay",
              bn: "ঠিক আছে",
              pronunciation_bn: "ইটস ওকে",
              slotValues: {},
              stage: 1
            },
            {
              en: "It's fine, don't worry",
              bn: "ঠিক আছে, চিন্তা করো না",
              pronunciation_bn: "ইটস ফাইন, ডোন্ট ওয়ারি",
              slotValues: {},
              stage: 2
            },
            {
              en: "It's all good, no need to apologize",
              bn: "সব ঠিক আছে, সরি বলার দরকার নেই",
              pronunciation_bn: "ইটস অল গুড, নো নিড টু অ্যাপলজাইজ",
              slotValues: {},
              stage: 3
            }
          ]
        },
        {
          variant: "formal",
          label: "Formal version: Not at all",
          label_bn: "ফর্মাল বলার উপায়: নট অ্যাট অল",
          formula: "Not at all",
          formula_bn: "নট অ্যাট অল",
          examples: [
            {
              en: "Not at all",
              bn: "একদমই না",
              pronunciation_bn: "নট অ্যাট অল",
              slotValues: {},
              stage: 1
            },
            {
              en: "Not at all, sir",
              bn: "একদমই না, স্যার",
              pronunciation_bn: "নট অ্যাট অল, স্যার",
              slotValues: {},
              stage: 2
            },
            {
              en: "Not a problem at all",
              bn: "একদমই কোনো সমস্যা না",
              pronunciation_bn: "নট আ প্রবলেম অ্যাট অল",
              slotValues: {},
              stage: 3
            }
          ]
        }
      ],
      dialogueChains: [
        {
          id: "T36.1-dc1",
          title_bn: "দোকানে ডিসকাউন্টের পর ধন্যবাদ",
          title_en: "Thanking shopkeeper for discount",
          situation_bn: "একজন কাস্টমার দোকানদারকে ডিসকাউন্ট দেয়ার জন্য ধন্যবাদ দিচ্ছে",
          icon: "🛍️",
          turns: [
            {
              speaker_bn: "কাস্টমার",
              en: "Thank you for the discount!",
              bn: "ডিসকাউন্ট দেয়ার জন্য থ্যাংক ইউ!",
              pronunciation_bn: "থ্যাংক ইউ ফর দ্য ডিসকাউন্ট!",
              patternId: "E5.1"
            },
            {
              speaker_bn: "দোকানদার",
              en: "No worries!",
              bn: "কোনো সমস্যা নেই!",
              pronunciation_bn: "নো ওয়ারিজ!",
              patternId: "T36.1"
            },
            {
              speaker_bn: "কাস্টমার",
              en: "You are very kind",
              bn: "আপনি খুব ভালো",
              pronunciation_bn: "ইউ আর ভেরি কাইন্ড",
              patternId: "A5.3"
            },
            {
              speaker_bn: "দোকানদার",
              en: "Come again!",
              bn: "আবার আসবেন!",
              pronunciation_bn: "কাম অ্যাগেইন!",
              patternId: "B4.2"
            }
          ],
          patternsUsed: ["E5.1", "T36.1", "A5.3", "B4.2"]
        }
      ],
      slots: [
        {
          name: "CONTEXT",
          description: "The situation where you say this phrase",
          description_bn: "যে পরিস্থিতিতে তুমি এই কথা বলছো",
          acceptedTypes: ["statement"],
          examples: [
            "when someone thanks you",
            "when someone apologizes",
            "when someone says sorry for being late"
          ]
        }
      ],
      examples: [
        {
          en: "No worries!",
          bn: "কোনো সমস্যা নেই!",
          pronunciation_bn: "নো ওয়ারিজ!",
          slotValues: {},
          topicArea: "social_interaction",
          stage: 1,
          miniStory: { situation_bn: "তোমার বন্ধু তোমাকে পেন ধার দিয়েছিল। তুমি ফেরত দিলে সে থ্যাংক ইউ বলল। তুমি হাসিমুখে বললে, 'No worries!'", icon: "✏️" }
        },
        {
          en: "No problem",
          bn: "কোনো প্রবলেম নেই",
          pronunciation_bn: "নো প্রবলেম",
          slotValues: {},
          topicArea: "daily_life",
          stage: 1,
          miniStory: { situation_bn: "অফিসে তোমার সহকর্মী ভুলে তোমার ফাইল নিয়ে গিয়েছিল। সে ফেরত দিয়ে সরি বলল। তুমি বললে, 'No problem.'", icon: "💼" }
        },
        {
          en: "No worries at all",
          bn: "একদমই কোনো সমস্যা নেই",
          pronunciation_bn: "নো ওয়ারিজ অ্যাট অল",
          slotValues: {},
          topicArea: "work",
          stage: 1
        },
        {
          en: "No problem, take your time",
          bn: "কোনো সমস্যা নেই, তোমার সময় নাও",
          pronunciation_bn: "নো প্রবলেম, টেক ইওর টাইম",
          slotValues: {},
          topicArea: "social_interaction",
          stage: 1,
          miniStory: { situation_bn: "তোমার বন্ধু তোমাকে টাকা ফেরত দিতে বলেছিল কিন্তু ভুলে গেছে। সে সরি বললে তুমি বললে, 'No problem, take your time.'", icon: "💰" }
        },
        {
          en: "It's no problem",
          bn: "এটা কোনো সমস্যা না",
          pronunciation_bn: "ইটস নো প্রবলেম",
          slotValues: {},
          topicArea: "daily_life",
          stage: 1
        },
        {
          en: "No worries, I understand",
          bn: "কোনো সমস্যা নেই, আমি বুঝি",
          pronunciation_bn: "নো ওয়ারিজ, আই আন্ডারস্ট্যান্ড",
          slotValues: {},
          topicArea: "work",
          stage: 2,
          miniStory: { situation_bn: "তোমার সহকর্মী মিটিং-এ দেরি করল কারণ তার বাচ্চা অসুস্থ ছিল। সে সরি বললে তুমি বললে, 'No worries, I understand.'", icon: "🤝" }
        },
        {
          en: "No problem, happy to help",
          bn: "কোনো সমস্যা নেই, হেল্প করতে পেরে খুশি",
          pronunciation_bn: "নো প্রবলেম, হ্যাপি টু হেল্প",
          slotValues: {},
          topicArea: "social_interaction",
          stage: 2
        },
        {
          en: "No worries, these things happen",
          bn: "কোনো সমস্যা নেই, এসব হয়",
          pronunciation_bn: "নো ওয়ারিজ, দিজ থিংস হ্যাপেন",
          slotValues: {},
          topicArea: "daily_life",
          stage: 2,
          miniStory: { situation_bn: "বাসে একজন যাত্রী তোমার পায়ে পা ফেলে গেল। সে সরি বললে তুমি বললে, 'No worries, these things happen.'", icon: "🚌" }
        },
        {
          en: "Not a problem at all",
          bn: "একদমই কোনো সমস্যা না",
          pronunciation_bn: "নট আ প্রবলেম অ্যাট অল",
          slotValues: {},
          topicArea: "work",
          stage: 2
        },
        {
          en: "No worries, it's all good",
          bn: "কোনো সমস্যা নেই, সব ঠিক আছে",
          pronunciation_bn: "নো ওয়ারিজ, ইটস অল গুড",
          slotValues: {},
          topicArea: "social_interaction",
          stage: 2
        },
        {
          en: "No problem, I've done the same thing before",
          bn: "কোনো সমস্যা নেই, আমিও আগে একই জিনিস করেছি",
          pronunciation_bn: "নো প্রবলেম, আইভ ডান দ্য সেইম থিং বিফোর",
          slotValues: {},
          topicArea: "daily_life",
          stage: 3,
          miniStory: { situation_bn: "রেস্তোরাঁয় তোমার বন্ধু ভুলে নুন দিতে ভুলে গেল। সে সরি বললে তুমি বললে, 'No problem, I've done the same thing before.'", icon: "🍽️" }
        },
        {
          en: "No worries, mistakes happen to everyone",
          bn: "কোনো সমস্যা নেই, ভুল সবার হয়",
          pronunciation_bn: "নো ওয়ারিজ, মিসটেকস হ্যাপেন টু এভরিওয়ান",
          slotValues: {},
          topicArea: "work",
          stage: 3
        },
        {
          en: "It's absolutely no problem, don't worry about it",
          bn: "একদমই কোনো সমস্যা নেই, এটা নিয়ে চিন্তা করো না",
          pronunciation_bn: "ইটস অ্যাবসলিউটলি নো প্রবলেম, ডোন্ট ওয়ারি অ্যাবাউট ইট",
          slotValues: {},
          topicArea: "social_interaction",
          stage: 3
        },
        {
          en: "No worries, I know you didn't mean it",
          bn: "কোনো সমস্যা নেই, আমি জানি তুমি ইচ্ছে করে করনি",
          pronunciation_bn: "নো ওয়ারিজ, আই নো ইউ ডিডন্ট মিন ইট",
          slotValues: {},
          topicArea: "daily_life",
          stage: 3,
          miniStory: { situation_bn: "তোমার ছোট ভাই তোমার ফোন নিয়ে খেলতে গিয়ে ফেলে দিয়েছে। সে কাঁদতে শুরু করল। তুমি তাকে সান্ত্বনা দিয়ে বললে, 'No worries, I know you didn't mean it.'", icon: "📱" }
        },
        {
          en: "Not at all, sir, it's my pleasure",
          bn: "একদমই না স্যার, এটা আমার আনন্দ",
          pronunciation_bn: "নট অ্যাট অল স্যার, ইটস মাই প্লেজার",
          slotValues: {},
          topicArea: "work",
          stage: 3
        }
      ]
    },
    {
      id: "T36.2",
      patternName: "It depends / It depends on [THING]",
      patternName_bn: "নির্ভর করে বলা",
      concept_bn: "নির্ভর করে",
      formula: "It depends / It depends on [THING]",
      formula_bn: "ইট ডিপেন্ডস / ইট ডিপেন্ডস অন [জিনিস]",
      formulaPronunciation_bn: "ইট ডিপেন্ডস / ইট ডিপেন্ডস অন [জিনিস]",
      usageNote: "Use 'It depends' when your answer changes based on the situation. Add 'on [THING]' to specify what it depends on.",
      usageNote_bn: "যখন তোমার উত্তর পরিস্থিতির উপর নির্ভর করে, তখন 'ইট ডিপেন্ডস' বলো। কিসের উপর নির্ভর করে সেটা বলতে চাইলে 'ইট ডিপেন্ডস অন' দিয়ে বলো।",
      difficulty: "beginner",
      formality: "casual",
      bridgeRuleIds: ["BR1", "BR3"],
      conversionSteps: {
        banglaThought: "তুমি বাংলায় বলো: 'নির্ভর করে'",
        steps: [
          {
            step_bn: "বাংলা চিন্তা থেকে শুরু করো — 'নির্ভর করে'",
            result: "It depends"
          },
          {
            step_bn: "'ইট ডিপেন্ডস' বলো",
            result: "It depends"
          },
          {
            step_bn: "কিসের উপর নির্ভর করে বলতে চাইলে 'অন + জিনিস' যোগ করো",
            result: "It depends on the weather"
          }
        ],
        finalResult: "It depends on the weather",
        finalResult_bn: "আবহাওয়ার উপর নির্ভর করে"
      },
      commonMistakes: [
        {
          wrong: "It depend",
          correct: "It depends",
          explanation_bn: "'ইট' এর সাথে সবসময় 's' থাকবে। 'ইট ডিপেন্ডস'।"
        },
        {
          wrong: "Depend on",
          correct: "It depends on",
          explanation_bn: "শুরুতে 'ইট' বলতে হয়। তারপর 'ডিপেন্ডস অন'।"
        },
        {
          wrong: "It depends of",
          correct: "It depends on",
          explanation_bn: "'অফ' না, 'অন' বলতে হয়। 'ইট ডিপেন্ডস অন'।"
        }
      ],
      simpleRules: [
        {
          rule_bn: "'ডিপেন্ডস'-এ সবসময় 's' থাকবে",
          example: "It depends (NOT It depend)"
        },
        {
          rule_bn: "'ইট ডিপেন্ডস অন দ্য ওয়েদার' — আবহাওয়ার উপর নির্ভর করে",
          example: "It depends on the weather"
        },
        {
          rule_bn: "শুধু 'ইট ডিপেন্ডস' বললেও সঠিক উত্তর",
          example: "It depends."
        }
      ],
      usageSituations: [
        {
          situation_bn: "পরিকল্পনা আবহাওয়ার উপর নির্ভর করলে",
          situation_en: "When a plan depends on the weather",
          exampleSentence: "It depends on the weather",
          exampleSentence_bn: "আবহাওয়ার উপর নির্ভর করে"
        },
        {
          situation_bn: "উত্তর অনেক জিনিসের উপর নির্ভর করলে",
          situation_en: "When the answer depends on many factors",
          exampleSentence: "It depends on many things",
          exampleSentence_bn: "অনেক কিছুর উপর নির্ভর করে"
        },
        {
          situation_bn: "নিশ্চিত উত্তর দিতে না পারলে",
          situation_en: "When you can't give a definite answer",
          exampleSentence: "It depends",
          exampleSentence_bn: "নির্ভর করে"
        }
      ],
      sentenceBuilding: [
        {
          previousPatternId: "I11.1",
          previousFormula: "I need to [ACTION]",
          previousFormula_bn: "আমাকে [কাজ] করতে হবে",
          combined: "It depends. I need to check my schedule.",
          combined_bn: "নির্ভর করে। আমাকে সময়সূচি চেক করতে হবে।"
        },
        {
          previousPatternId: "N1.1",
          previousFormula: "If [CONDITION], I'll [ACTION]",
          previousFormula_bn: "যদি [শর্ত], আমি [কাজ] করব",
          combined: "It depends on the price. If it's cheap, I'll buy it.",
          combined_bn: "দামের উপর নির্ভর করে। সস্তা হলে কিনব।"
        }
      ],
      memoryTrick_bn: "'ডিপেন্ডস' মানে নির্ভর করে। বাংলায় যেমন বলো 'দেখা যাক' বা 'নির্ভর করে' — ইংরেজিতে তেমনি 'ইট ডিপেন্ডস'।",
      chunks: [
        {
          en: "It depends",
          bn: "নির্ভর করে",
          pronunciation_bn: "ইট ডিপেন্ডস"
        },
        {
          en: "It depends on",
          bn: "এর উপর নির্ভর করে",
          pronunciation_bn: "ইট ডিপেন্ডস অন"
        },
        {
          en: "That depends",
          bn: "ওটা নির্ভর করে",
          pronunciation_bn: "দ্যাট ডিপেন্ডস"
        }
      ],
      wordMap: {
        bn_sentence: "নির্ভর করে",
        en_sentence: "It depends",
        mappings: [
          {
            bn_word: "নির্ভর করে",
            en_word: "depends",
            type: "direct",
            bridgeRuleId: "BR1"
          },
          {
            bn_word: "(এর উপর)",
            en_word: "on",
            type: "added",
            bridgeRuleId: "BR3"
          }
        ]
      },
      answerTemplates: [
        {
          situation_bn: "সাধারণভাবে বলার জন্য",
          question: "Will you come?",
          question_bn: "তুমি আসবে?",
          answerFormula: "It depends",
          answerFormula_bn: "ইট ডিপেন্ডস",
          pronunciation_bn: "ইট ডিপেন্ডস",
          examples: [
            { answer: "It depends.", answer_bn: "নির্ভর করে।", pronunciation_bn: "ইট ডিপেন্ডস।" }
          ]
        },
        {
          situation_bn: "স্পষ্ট করে বলতে চাইলে",
          question: "Are you going to the picnic?",
          question_bn: "তুমি পিকনিকে যাবে?",
          answerFormula: "It depends on [THING]",
          answerFormula_bn: "ইট ডিপেন্ডস অন [জিনিস]",
          pronunciation_bn: "ইট ডিপেন্ডস অন [জিনিস]",
          examples: [
            { answer: "It depends on the weather.", answer_bn: "আবহাওয়ার উপর নির্ভর করে।", pronunciation_bn: "ইট ডিপেন্ডস অন দ্য ওয়েদার।" }
          ]
        },
        {
          situation_bn: "বিস্তারিত জানতে চাইলে",
          question: "Can you help me?",
          question_bn: "তুমি কি আমাকে সাহায্য করতে পারবে?",
          answerFormula: "Well, it depends. Why do you ask?",
          answerFormula_bn: "ওয়েল, ইট ডিপেন্ডস। হোয়াই ডু ইউ আস্ক?",
          pronunciation_bn: "ওয়েল, ইট ডিপেন্ডস। হোয়াই ডু ইউ আস্ক?",
          examples: [
            { answer: "Well, it depends. Why do you ask?", answer_bn: "ওয়েল, নির্ভর করে। কেন জিজ্ঞেস করছো?", pronunciation_bn: "ওয়েল, ইট ডিপেন্ডস। হোয়াই ডু ইউ আস্ক?" }
          ]
        }
      ],
      variations: [
        {
          variant: "specific_reason",
          label: "With specific reason",
          label_bn: "নির্দিষ্ট কারণ দিয়ে",
          formula: "It depends on [THING]",
          formula_bn: "ইট ডিপেন্ডস অন [জিনিস]",
          examples: [
            {
              en: "It depends on the price",
              bn: "দামের উপর নির্ভর করে",
              pronunciation_bn: "ইট ডিপেন্ডস অন দ্য প্রাইস",
              slotValues: { THING: "the price" },
              stage: 1
            },
            {
              en: "It depends on my schedule",
              bn: "আমার সময়সূচির উপর নির্ভর করে",
              pronunciation_bn: "ইট ডিপেন্ডস অন মাই শিডিউল",
              slotValues: { THING: "my schedule" },
              stage: 2
            },
            {
              en: "It depends on whether they approve it or not",
              bn: "তারা অনুমোদন দেয় কিনা তার উপর নির্ভর করে",
              pronunciation_bn: "ইট ডিপেন্ডস অন হুয়েদার দে অ্যাপ্রুভ ইট অর নট",
              slotValues: { THING: "whether they approve it or not" },
              stage: 3
            }
          ]
        },
        {
          variant: "alternative",
          label: "Alternative: That depends",
          label_bn: "আরেক উপায়: দ্যাট ডিপেন্ডস",
          formula: "That depends",
          formula_bn: "দ্যাট ডিপেন্ডস",
          examples: [
            {
              en: "That depends",
              bn: "ওটা নির্ভর করে",
              pronunciation_bn: "দ্যাট ডিপেন্ডস",
              slotValues: {},
              stage: 1
            },
            {
              en: "That depends on you",
              bn: "ওটা তোমার উপর নির্ভর করে",
              pronunciation_bn: "দ্যাট ডিপেন্ডস অন ইউ",
              slotValues: { THING: "you" },
              stage: 2
            },
            {
              en: "Well, that really depends on the situation",
              bn: "ওয়েল, ওটা সত্যিই পরিস্থিতির উপর নির্ভর করে",
              pronunciation_bn: "ওয়েল, দ্যাট রিয়েলি ডিপেন্ডস অন দ্য সিচুয়েশন",
              slotValues: { THING: "the situation" },
              stage: 3
            }
          ]
        },
        {
          variant: "multiple_factors",
          label: "With multiple factors",
          label_bn: "অনেক কিছুর উপর নির্ভর করলে",
          formula: "It depends on many things",
          formula_bn: "ইট ডিপেন্ডস অন মেনি থিংস",
          examples: [
            {
              en: "It depends on many things",
              bn: "অনেক কিছুর উপর নির্ভর করে",
              pronunciation_bn: "ইট ডিপেন্ডস অন মেনি থিংস",
              slotValues: { THING: "many things" },
              stage: 1
            },
            {
              en: "It depends on the time and the weather",
              bn: "সময় এবং আবহাওয়ার উপর নির্ভর করে",
              pronunciation_bn: "ইট ডিপেন্ডস অন দ্য টাইম অ্যান্ড দ্য ওয়েদার",
              slotValues: { THING: "the time and the weather" },
              stage: 2
            },
            {
              en: "It depends on several factors including cost and availability",
              bn: "খরচ এবং পাওয়া যাওয়াসহ অনেক কারণের উপর নির্ভর করে",
              pronunciation_bn: "ইট ডিপেন্ডস অন সেভারেল ফ্যাক্টরস ইনক্লুডিং কস্ট অ্যান্ড অ্যাভেইলেবিলিটি",
              slotValues: { THING: "several factors including cost and availability" },
              stage: 3
            }
          ]
        }
      ],
      dialogueChains: [
        {
          id: "T36.2-dc1",
          title_bn: "ট্রিপে যাওয়ার পরিকল্পনা",
          title_en: "Planning a trip with a friend",
          situation_bn: "একজন বন্ধু তোমাকে ট্রিপে ডাকছে",
          icon: "🏖️",
          turns: [
            {
              speaker_bn: "বন্ধু",
              en: "Will you join us for the trip?",
              bn: "তুমি কি ট্রিপে আসবে?",
              pronunciation_bn: "উইল ইউ জয়েন আস ফর দ্য ট্রিপ?",
              patternId: "H1.1"
            },
            {
              speaker_bn: "তুমি",
              en: "It depends on the cost",
              bn: "খরচের উপর নির্ভর করে",
              pronunciation_bn: "ইট ডিপেন্ডস অন দ্য কস্ট",
              patternId: "T36.2"
            },
            {
              speaker_bn: "বন্ধু",
              en: "It will be around 5000 taka",
              bn: "প্রায় ৫০০০ টাকা লাগবে",
              pronunciation_bn: "ইট উইল বি অ্যারাউন্ড ফাইভ থাউজেন্ড টাকা",
              patternId: "J1.1"
            },
            {
              speaker_bn: "তুমি",
              en: "Okay, I'll think about it",
              bn: "ওকে, আমি চিন্তা করব",
              pronunciation_bn: "ওকে, আইল থিংক অ্যাবাউট ইট",
              patternId: "I6.1"
            }
          ],
          patternsUsed: ["H1.1", "T36.2", "J1.1", "I6.1"]
        }
      ],
      slots: [
        {
          name: "THING",
          description: "What the answer depends on",
          description_bn: "কিসের উপর নির্ভর করে",
          acceptedTypes: ["noun", "noun_phrase"],
          examples: [
            "the weather",
            "my schedule",
            "the price",
            "you",
            "many things"
          ]
        }
      ],
      examples: [
        {
          en: "It depends",
          bn: "নির্ভর করে",
          pronunciation_bn: "ইট ডিপেন্ডস",
          slotValues: {},
          topicArea: "daily_life",
          stage: 1
        },
        {
          en: "It depends on the weather",
          bn: "আবহাওয়ার উপর নির্ভর করে",
          pronunciation_bn: "ইট ডিপেন্ডস অন দ্য ওয়েদার",
          slotValues: { THING: "the weather" },
          topicArea: "daily_life",
          stage: 1,
          miniStory: { situation_bn: "তোমার বন্ধু জিজ্ঞেস করল পার্কে যাবে কিনা। তুমি বললে, 'It depends on the weather' — কারণ বৃষ্টি হলে যাবে না।", icon: "🌧️" }
        },
        {
          en: "It depends on the price",
          bn: "দামের উপর নির্ভর করে",
          pronunciation_bn: "ইট ডিপেন্ডস অন দ্য প্রাইস",
          slotValues: { THING: "the price" },
          topicArea: "shopping",
          stage: 1,
          miniStory: { situation_bn: "দোকানে তোমাকে জিজ্ঞেস করল ফোন কিনবে কিনা। তুমি বললে, 'It depends on the price' — দাম ভালো হলে কিনবে।", icon: "📱" }
        },
        {
          en: "That depends",
          bn: "ওটা নির্ভর করে",
          pronunciation_bn: "দ্যাট ডিপেন্ডস",
          slotValues: {},
          topicArea: "social_interaction",
          stage: 1
        },
        {
          en: "It depends on my work schedule",
          bn: "আমার কাজের সময়সূচির উপর নির্ভর করে",
          pronunciation_bn: "ইট ডিপেন্ডস অন মাই ওয়ার্ক শিডিউল",
          slotValues: { THING: "my work schedule" },
          topicArea: "work",
          stage: 1,
          miniStory: { situation_bn: "অফিসের সহকর্মী জিজ্ঞেস করল সন্ধ্যায় চা খেতে যাবে কিনা। তুমি বললে, 'It depends on my work schedule' — ওভারটাইম হলে যেতে পারবে না।", icon: "💼" }
        },
        {
          en: "It depends on you",
          bn: "তোমার উপর নির্ভর করে",
          pronunciation_bn: "ইট ডিপেন্ডস অন ইউ",
          slotValues: { THING: "you" },
          topicArea: "social_interaction",
          stage: 2,
          miniStory: { situation_bn: "তোমার বন্ধু জিজ্ঞেস করল কোথায় খেতে যাবে। তুমি বললে, 'It depends on you' — তোমার কোনো পছন্দ নেই, সে যেখানে চায় যাবে।", icon: "🍽️" }
        },
        {
          en: "Well, it depends on the situation",
          bn: "ওয়েল, পরিস্থিতির উপর নির্ভর করে",
          pronunciation_bn: "ওয়েল, ইট ডিপেন্ডস অন দ্য সিচুয়েশন",
          slotValues: { THING: "the situation" },
          topicArea: "daily_life",
          stage: 2
        },
        {
          en: "It depends on how much time I have",
          bn: "আমার কতটা সময় আছে তার উপর নির্ভর করে",
          pronunciation_bn: "ইট ডিপেন্ডস অন হাউ মাচ টাইম আই হ্যাভ",
          slotValues: { THING: "how much time I have" },
          topicArea: "daily_life",
          stage: 2,
          miniStory: { situation_bn: "তোমার মা জিজ্ঞেস করল বাজার থেকে সবজি কিনে আনতে পারবে কিনা। তুমি বললে, 'It depends on how much time I have' — সময় থাকলে আনবে।", icon: "🥬" }
        },
        {
          en: "It really depends on many things",
          bn: "সত্যিই অনেক কিছুর উপর নির্ভর করে",
          pronunciation_bn: "ইট রিয়েলি ডিপেন্ডস অন মেনি থিংস",
          slotValues: { THING: "many things" },
          topicArea: "work",
          stage: 2
        },
        {
          en: "That depends on what they decide",
          bn: "তারা কী সিদ্ধান্ত নেয় তার উপর নির্ভর করে",
          pronunciation_bn: "দ্যাট ডিপেন্ডস অন হোয়াট দে ডিসাইড",
          slotValues: { THING: "what they decide" },
          topicArea: "work",
          stage: 2
        },
        {
          en: "It depends on whether the bus comes on time or not",
          bn: "বাস সময়মত আসে কিনা তার উপর নির্ভর করে",
          pronunciation_bn: "ইট ডিপেন্ডস অন হুয়েদার দ্য বাস কামস অন টাইম অর নট",
          slotValues: { THING: "whether the bus comes on time or not" },
          topicArea: "transportation",
          stage: 3,
          miniStory: { situation_bn: "তোমার বস জিজ্ঞেস করল অফিসে ৯টায় পৌঁছাতে পারবে কিনা। তুমি বললে, 'It depends on whether the bus comes on time or not' — বাস লেট হলে তুমিও লেট হবে।", icon: "🚌" }
        },
        {
          en: "It depends on several factors including the budget",
          bn: "বাজেটসহ অনেক কারণের উপর নির্ভর করে",
          pronunciation_bn: "ইট ডিপেন্ডস অন সেভারেল ফ্যাক্টরস ইনক্লুডিং দ্য বাজেট",
          slotValues: { THING: "several factors including the budget" },
          topicArea: "work",
          stage: 3
        },
        {
          en: "Well, it depends on how serious the problem is",
          bn: "ওয়েল, সমস্যাটা কতটা গুরুতর তার উপর নির্ভর করে",
          pronunciation_bn: "ওয়েল, ইট ডিপেন্ডস অন হাউ সিরিয়াস দ্য প্রবলেম ইজ",
          slotValues: { THING: "how serious the problem is" },
          topicArea: "daily_life",
          stage: 3,
          miniStory: { situation_bn: "ডাক্তার জিজ্ঞেস করল অপারেশন করতে হবে কিনা। অন্য ডাক্তার বললে, 'It depends on how serious the problem is' — প্রথমে টেস্ট করতে হবে।", icon: "🏥" }
        },
        {
          en: "It totally depends on what you want to achieve",
          bn: "তুমি কী অর্জন করতে চাও তার উপর সম্পূর্ণ নির্ভর করে",
          pronunciation_bn: "ইট টোটালি ডিপেন্ডস অন হোয়াট ইউ ওয়ান্ট টু অ্যাচিভ",
          slotValues: { THING: "what you want to achieve" },
          topicArea: "education",
          stage: 3
        },
        {
          en: "That really depends on whether they have stock or not",
          bn: "তাদের স্টক আছে কিনা তার উপর সত্যিই নির্ভর করে",
          pronunciation_bn: "দ্যাট রিয়েলি ডিপেন্ডস অন হুয়েদার দে হ্যাভ স্টক অর নট",
          slotValues: { THING: "whether they have stock or not" },
          topicArea: "shopping",
          stage: 3
        }
      ]
    },
    {
      id: "T36.3",
      patternName: "That makes sense",
      patternName_bn: "বুঝলাম/ঠিক আছে বলা",
      concept_bn: "বুঝলাম",
      formula: "That makes sense",
      formula_bn: "দ্যাট মেকস সেন্স",
      formulaPronunciation_bn: "দ্যাট মেকস সেন্স",
      usageNote: "Use 'That makes sense' when someone explains something and you understand it. It shows agreement and understanding.",
      usageNote_bn: "কেউ কিছু ব্যাখ্যা করলে এবং তুমি বুঝলে 'দ্যাট মেকস সেন্স' বলো। মানে হলো — বুঝলাম, ঠিক আছে, যুক্তি আছে।",
      difficulty: "beginner",
      formality: "casual",
      bridgeRuleIds: ["BR1", "BR7"],
      conversionSteps: {
        banglaThought: "তুমি বাংলায় বলো: 'বুঝলাম / যুক্তি আছে'",
        steps: [
          {
            step_bn: "বাংলা চিন্তা থেকে শুরু করো — 'বুঝলাম'",
            result: "That makes sense"
          },
          {
            step_bn: "ফিক্সড ফ্রেজ বলো",
            result: "That makes sense"
          },
          {
            step_bn: "চাইলে 'নাউ' বা 'ইয়া' যোগ করতে পারো",
            result: "Yeah, that makes sense"
          }
        ],
        finalResult: "That makes sense",
        finalResult_bn: "বুঝলাম / যুক্তি আছে"
      },
      commonMistakes: [
        {
          wrong: "That make sense",
          correct: "That makes sense",
          explanation_bn: "'দ্যাট' এর সাথে সবসময় 'মেকস' বলতে হয় 's' দিয়ে।"
        },
        {
          wrong: "It makes sense (কেউ কিছু বললে)",
          correct: "That makes sense",
          explanation_bn: "কেউ যা বলেছে সেটার কথা বলতে 'দ্যাট' ব্যবহার করতে হয়।"
        },
        {
          wrong: "That's make sense",
          correct: "That makes sense",
          explanation_bn: "'দ্যাটস' না, শুধু 'দ্যাট মেকস'।"
        }
      ],
      simpleRules: [
        {
          rule_bn: "কেউ কিছু বুঝিয়ে বললে এবং তুমি বুঝলে 'দ্যাট মেকস সেন্স' বলো",
          example: "A: The shop is closed on Friday. B: That makes sense."
        },
        {
          rule_bn: "'মেকস'-এ সবসময় 's' থাকবে",
          example: "That makes sense (NOT That make sense)"
        },
        {
          rule_bn: "'দ্যাট মেকস সেন্স' — এভাবে বলতে হয়",
          example: "That makes sense."
        }
      ],
      usageSituations: [
        {
          situation_bn: "অফিসে কেউ ব্যাখ্যা করলে",
          situation_en: "When a colleague explains something",
          exampleSentence: "That makes sense",
          exampleSentence_bn: "বুঝলাম"
        },
        {
          situation_bn: "কারণ শুনে সহমত হলে",
          situation_en: "When you agree with someone's reasoning",
          exampleSentence: "Yeah, that makes sense",
          exampleSentence_bn: "হ্যাঁ, বুঝলাম"
        },
        {
          situation_bn: "কিছু শিখে বুঝলে",
          situation_en: "When you learn and understand something",
          exampleSentence: "That makes sense now",
          exampleSentence_bn: "এখন বুঝলাম"
        }
      ],
      sentenceBuilding: [
        {
          previousPatternId: "G4.1",
          previousFormula: "Why is [THING] [DESCRIPTION]?",
          previousFormula_bn: "[জিনিস] কেন [বর্ণনা]?",
          combined: "Q: Why is it closed? A: They're on holiday. B: That makes sense.",
          combined_bn: "প্রশ্ন: কেন বন্ধ? উত্তর: তারা ছুটিতে। B: বুঝলাম।"
        },
        {
          previousPatternId: "E5.1",
          previousFormula: "Thank you for [ACTION]",
          previousFormula_bn: "[কাজ]-এর জন্য ধন্যবাদ",
          combined: "That makes sense. Thanks for explaining.",
          combined_bn: "বুঝলাম। ব্যাখ্যা করার জন্য ধন্যবাদ।"
        }
      ],
      memoryTrick_bn: "'মেকস সেন্স' মানে 'অর্থ হয়', 'বুঝ হয়'। বাংলায় যেমন বলো 'বুঝলাম' বা 'ঠিক আছে যুক্তি আছে' — ইংরেজিতে তেমনি 'দ্যাট মেকস সেন্স'।",
      chunks: [
        {
          en: "That makes sense",
          bn: "বুঝলাম / যুক্তি আছে",
          pronunciation_bn: "দ্যাট মেকস সেন্স"
        },
        {
          en: "Yeah, that makes sense",
          bn: "হ্যাঁ, বুঝলাম",
          pronunciation_bn: "ইয়া, দ্যাট মেকস সেন্স"
        },
        {
          en: "That makes sense now",
          bn: "এখন বুঝলাম",
          pronunciation_bn: "দ্যাট মেকস সেন্স নাউ"
        }
      ],
      wordMap: {
        bn_sentence: "বুঝলাম / যুক্তি আছে",
        en_sentence: "That makes sense",
        mappings: [
          {
            bn_word: "ওটা",
            en_word: "That",
            type: "direct",
            bridgeRuleId: "BR1"
          },
          {
            bn_word: "অর্থ হয়/বুঝ হয়",
            en_word: "makes sense",
            type: "direct",
            bridgeRuleId: "BR7"
          }
        ]
      },
      answerTemplates: [
        {
          situation_bn: "সাধারণভাবে বুঝলাম বলতে",
          question: "The shop is closed because of the holiday.",
          question_bn: "ছুটির কারণে দোকান বন্ধ।",
          answerFormula: "That makes sense",
          answerFormula_bn: "দ্যাট মেকস সেন্স",
          pronunciation_bn: "দ্যাট মেকস সেন্স",
          examples: [
            { answer: "That makes sense.", answer_bn: "বুঝলাম।", pronunciation_bn: "দ্যাট মেকস সেন্স।" }
          ]
        },
        {
          situation_bn: "হ্যাঁ বলে শুরু করতে",
          question: "We changed the meeting to Monday.",
          question_bn: "আমরা মিটিং সোমবারে সরিয়েছি।",
          answerFormula: "Yeah, that makes sense",
          answerFormula_bn: "ইয়া, দ্যাট মেকস সেন্স",
          pronunciation_bn: "ইয়া, দ্যাট মেকস সেন্স",
          examples: [
            { answer: "Yeah, that makes sense.", answer_bn: "হ্যাঁ, বুঝলাম।", pronunciation_bn: "ইয়া, দ্যাট মেকস সেন্স।" }
          ]
        },
        {
          situation_bn: "আগে বুঝিনি এখন বুঝলাম",
          question: "You forgot to add the tax.",
          question_bn: "তুমি ট্যাক্স যোগ করতে ভুলে গেছো।",
          answerFormula: "Oh, that makes sense now",
          answerFormula_bn: "ও, দ্যাট মেকস সেন্স নাউ",
          pronunciation_bn: "ও, দ্যাট মেকস সেন্স নাউ",
          examples: [
            { answer: "Oh, that makes sense now!", answer_bn: "ও, এখন বুঝলাম!", pronunciation_bn: "ও, দ্যাট মেকস সেন্স নাউ!" }
          ]
        }
      ],
      variations: [
        {
          variant: "with_now",
          label: "With 'now'",
          label_bn: "'নাউ' দিয়ে — এখন বুঝলাম",
          formula: "That makes sense now",
          formula_bn: "দ্যাট মেকস সেন্স নাউ",
          examples: [
            {
              en: "That makes sense now",
              bn: "এখন বুঝলাম",
              pronunciation_bn: "দ্যাট মেকস সেন্স নাউ",
              slotValues: {},
              stage: 1
            },
            {
              en: "Oh, that makes sense now!",
              bn: "ও, এখন বুঝলাম!",
              pronunciation_bn: "ও, দ্যাট মেকস সেন্স নাউ!",
              slotValues: {},
              stage: 2
            },
            {
              en: "Ah, okay, that makes sense now after you explained it",
              bn: "আহ, ওকে, তুমি ব্যাখ্যা করার পর এখন বুঝলাম",
              pronunciation_bn: "আহ, ওকে, দ্যাট মেকস সেন্স নাউ আফটার ইউ এক্সপ্লেইনড ইট",
              slotValues: {},
              stage: 3
            }
          ]
        },
        {
          variant: "agreement",
          label: "With agreement words",
          label_bn: "সম্মতি শব্দ দিয়ে",
          formula: "Yeah, that makes sense",
          formula_bn: "ইয়া, দ্যাট মেকস সেন্স",
          examples: [
            {
              en: "Yeah, that makes sense",
              bn: "হ্যাঁ, বুঝলাম",
              pronunciation_bn: "ইয়া, দ্যাট মেকস সেন্স",
              slotValues: {},
              stage: 1
            },
            {
              en: "Right, that makes sense",
              bn: "ঠিক, যুক্তি আছে",
              pronunciation_bn: "রাইট, দ্যাট মেকস সেন্স",
              slotValues: {},
              stage: 2
            },
            {
              en: "I see, yeah, that makes perfect sense",
              bn: "বুঝলাম, হ্যাঁ, একদম ঠিক",
              pronunciation_bn: "আই সি, ইয়া, দ্যাট মেকস পারফেক্ট সেন্স",
              slotValues: {},
              stage: 3
            }
          ]
        },
        {
          variant: "alternative",
          label: "Alternative: That's logical",
          label_bn: "আরেক উপায়: যুক্তিযুক্ত",
          formula: "That's logical",
          formula_bn: "দ্যাটস লজিক্যাল",
          examples: [
            {
              en: "That's logical",
              bn: "যুক্তিযুক্ত",
              pronunciation_bn: "দ্যাটস লজিক্যাল",
              slotValues: {},
              stage: 1
            },
            {
              en: "That's a fair point",
              bn: "ঠিক কথা",
              pronunciation_bn: "দ্যাটস আ ফেয়ার পয়েন্ট",
              slotValues: {},
              stage: 2
            },
            {
              en: "I can see your point, that makes sense",
              bn: "তোমার কথা বুঝতে পারছি, যুক্তি আছে",
              pronunciation_bn: "আই ক্যান সি ইওর পয়েন্ট, দ্যাট মেকস সেন্স",
              slotValues: {},
              stage: 3
            }
          ]
        }
      ],
      dialogueChains: [
        {
          id: "T36.3-dc1",
          title_bn: "শিক্ষকের কাছে ভুল বুঝা",
          title_en: "Understanding a mistake with a teacher",
          situation_bn: "একজন ছাত্র জিজ্ঞেস করছে তার উত্তর কেন ভুল",
          icon: "📝",
          turns: [
            {
              speaker_bn: "ছাত্র",
              en: "Why is this answer wrong?",
              bn: "এই উত্তরটা কেন ভুল?",
              pronunciation_bn: "হোয়াই ইজ দিস আনসার রং?",
              patternId: "G4.1"
            },
            {
              speaker_bn: "শিক্ষক",
              en: "You forgot to add the tax",
              bn: "তুমি ট্যাক্স যোগ করতে ভুলে গেছো",
              pronunciation_bn: "ইউ ফরগট টু অ্যাড দ্য ট্যাক্স",
              patternId: "A5.1"
            },
            {
              speaker_bn: "ছাত্র",
              en: "Oh, that makes sense now",
              bn: "ও, এখন বুঝলাম",
              pronunciation_bn: "ও, দ্যাট মেকস সেন্স নাউ",
              patternId: "T36.3"
            },
            {
              speaker_bn: "শিক্ষক",
              en: "Good, try again",
              bn: "ভালো, আবার চেষ্টা করো",
              pronunciation_bn: "গুড, ট্রাই অ্যাগেইন",
              patternId: "B4.2"
            }
          ],
          patternsUsed: ["G4.1", "A5.1", "T36.3", "B4.2"]
        }
      ],
      slots: [
        {
          name: "CONTEXT",
          description: "The explanation you understood",
          description_bn: "যে ব্যাখ্যা তুমি বুঝলে",
          acceptedTypes: ["statement"],
          examples: [
            "when someone explains why something happened",
            "after hearing a logical reason",
            "when you understand the explanation"
          ]
        }
      ],
      examples: [
        {
          en: "That makes sense",
          bn: "বুঝলাম",
          pronunciation_bn: "দ্যাট মেকস সেন্স",
          slotValues: {},
          topicArea: "daily_life",
          stage: 1,
          miniStory: { situation_bn: "তোমার বন্ধু বলল সে আসতে পারবে না কারণ তার মা অসুস্থ। তুমি বললে, 'That makes sense' — কারণটা যুক্তিযুক্ত।", icon: "💬" }
        },
        {
          en: "Yeah, that makes sense",
          bn: "হ্যাঁ, বুঝলাম",
          pronunciation_bn: "ইয়া, দ্যাট মেকস সেন্স",
          slotValues: {},
          topicArea: "work",
          stage: 1
        },
        {
          en: "That makes sense now",
          bn: "এখন বুঝলাম",
          pronunciation_bn: "দ্যাট মেকস সেন্স নাউ",
          slotValues: {},
          topicArea: "education",
          stage: 1,
          miniStory: { situation_bn: "শিক্ষক ব্যাখ্যা করলেন কিভাবে অংক করতে হয়। আগে বুঝনি, এখন বুঝলে। তুমি বললে, 'That makes sense now.'", icon: "📝" }
        },
        {
          en: "Oh, that makes sense",
          bn: "ও, বুঝলাম",
          pronunciation_bn: "ও, দ্যাট মেকস সেন্স",
          slotValues: {},
          topicArea: "daily_life",
          stage: 1
        },
        {
          en: "Right, that makes sense",
          bn: "ঠিক, যুক্তি আছে",
          pronunciation_bn: "রাইট, দ্যাট মেকস সেন্স",
          slotValues: {},
          topicArea: "social_interaction",
          stage: 1
        },
        {
          en: "That makes sense to me",
          bn: "আমার কাছে যুক্তিযুক্ত লাগছে",
          pronunciation_bn: "দ্যাট মেকস সেন্স টু মি",
          slotValues: {},
          topicArea: "work",
          stage: 2,
          miniStory: { situation_bn: "মিটিং-এ তোমার বস একটা নতুন নিয়ম ব্যাখ্যা করলেন। তুমি বললে, 'That makes sense to me' — তুমি সম্মত।", icon: "💼" }
        },
        {
          en: "That makes a lot of sense",
          bn: "খুবই যুক্তিযুক্ত",
          pronunciation_bn: "দ্যাট মেকস আ লট অফ সেন্স",
          slotValues: {},
          topicArea: "work",
          stage: 2
        },
        {
          en: "I see, that makes sense",
          bn: "বুঝলাম, ঠিক আছে",
          pronunciation_bn: "আই সি, দ্যাট মেকস সেন্স",
          slotValues: {},
          topicArea: "daily_life",
          stage: 2,
          miniStory: { situation_bn: "ডাক্তার বললেন কেন ঔষধ খেতে হবে। তুমি বললে, 'I see, that makes sense' — এখন বুঝলে।", icon: "🏥" }
        },
        {
          en: "Okay, that makes sense now",
          bn: "ওকে, এখন বুঝলাম",
          pronunciation_bn: "ওকে, দ্যাট মেকস সেন্স নাউ",
          slotValues: {},
          topicArea: "education",
          stage: 2
        },
        {
          en: "That makes perfect sense",
          bn: "একদম ঠিক",
          pronunciation_bn: "দ্যাট মেকস পারফেক্ট সেন্স",
          slotValues: {},
          topicArea: "work",
          stage: 2
        },
        {
          en: "Ah, that makes sense now after you explained it",
          bn: "আহ, তুমি ব্যাখ্যা করার পর এখন বুঝলাম",
          pronunciation_bn: "আহ, দ্যাট মেকস সেন্স নাউ আফটার ইউ এক্সপ্লেইনড ইট",
          slotValues: {},
          topicArea: "education",
          stage: 3,
          miniStory: { situation_bn: "তোমার সহপাঠী ব্যাখ্যা করল কিভাবে এই প্রশ্নের উত্তর দিতে হয়। আগে বুঝনি, তার ব্যাখ্যার পর বুঝলে। তুমি বললে, 'Ah, that makes sense now after you explained it.'", icon: "📝" }
        },
        {
          en: "I can see your point, that makes sense",
          bn: "তোমার কথা বুঝতে পারছি, যুক্তি আছে",
          pronunciation_bn: "আই ক্যান সি ইওর পয়েন্ট, দ্যাট মেকস সেন্স",
          slotValues: {},
          topicArea: "work",
          stage: 3
        },
        {
          en: "Oh right, that makes sense, I didn't think of that",
          bn: "ও ঠিক, বুঝলাম, আমি এটা ভাবিনি",
          pronunciation_bn: "ও রাইট, দ্যাট মেকস সেন্স, আই ডিডন্ট থিংক অফ দ্যাট",
          slotValues: {},
          topicArea: "daily_life",
          stage: 3
        },
        {
          en: "Yeah, that makes complete sense, thank you for clarifying",
          bn: "হ্যাঁ, একদম ঠিক, পরিষ্কার করার জন্য ধন্যবাদ",
          pronunciation_bn: "ইয়া, দ্যাট মেকস কমপ্লিট সেন্স, থ্যাংক ইউ ফর ক্ল্যারিফাইং",
          slotValues: {},
          topicArea: "work",
          stage: 3
        },
        {
          en: "That definitely makes sense given the circumstances",
          bn: "পরিস্থিতি দেখে এটা নিশ্চয়ই যুক্তিযুক্ত",
          pronunciation_bn: "দ্যাট ডেফিনিটলি মেকস সেন্স গিভেন দ্য সার্কামস্ট্যান্সেস",
          slotValues: {},
          topicArea: "work",
          stage: 3
        }
      ]
    },
    {
      id: "T36.4",
      patternName: "Sounds good / Sounds great",
      patternName_bn: "ভালো লাগছে বলা",
      concept_bn: "ভালো শোনাচ্ছে",
      formula: "Sounds good / Sounds great",
      formula_bn: "সাউন্ডস গুড / সাউন্ডস গ্রেট",
      formulaPronunciation_bn: "সাউন্ডস গুড / সাউন্ডস গ্রেট",
      usageNote: "Use 'Sounds good' or 'Sounds great' to agree with a plan or suggestion. It means you like the idea.",
      usageNote_bn: "কেউ কোনো পরিকল্পনা বা প্রস্তাব দিলে এবং তুমি রাজি হলে 'সাউন্ডস গুড' বা 'সাউন্ডস গ্রেট' বলো। মানে হলো — ভালো শোনাচ্ছে, রাজি আছি।",
      difficulty: "beginner",
      formality: "casual",
      bridgeRuleIds: ["BR1", "BR7"],
      conversionSteps: {
        banglaThought: "তুমি বাংলায় বলো: 'ভালো শোনাচ্ছে / রাজি আছি'",
        steps: [
          { step_bn: "বাংলা চিন্তা থেকে শুরু করো — 'ভালো শোনাচ্ছে'", result: "Sounds good" },
          { step_bn: "ফিক্সড ফ্রেজ বলো", result: "Sounds good" },
          { step_bn: "আরেক উপায়: সাউন্ডস গ্রেট (বেশি উৎসাহী)", result: "Sounds great!" }
        ],
        finalResult: "Sounds good / Sounds great",
        finalResult_bn: "ভালো শোনাচ্ছে"
      },
      commonMistakes: [
        { wrong: "Sound good", correct: "Sounds good", explanation_bn: "সবসময় 's' দিয়ে বলতে হয়। 'সাউন্ডস গুড'।" },
        { wrong: "It sounds good", correct: "Sounds good", explanation_bn: "এই ফ্রেজে 'ইট' লাগে না। শুধু 'সাউন্ডস গুড'।" },
        { wrong: "Good sounds", correct: "Sounds good", explanation_bn: "'সাউন্ডস' আগে, 'গুড' পরে।" }
      ],
      simpleRules: [
        { rule_bn: "কেউ প্ল্যান বললে তুমি রাজি থাকলে 'সাউন্ডস গুড' বলো", example: "A: Let's meet at 5. B: Sounds good!" },
        { rule_bn: "'সাউন্ডস'-এ সবসময় 's' থাকবে", example: "Sounds good (NOT Sound good)" },
        { rule_bn: "খুব খুশি হলে 'সাউন্ডস গ্রেট' বলো", example: "Sounds great!" }
      ],
      usageSituations: [
        { situation_bn: "বন্ধুর প্রস্তাবে রাজি হলে", situation_en: "When agreeing to a friend's suggestion", exampleSentence: "Sounds good!", exampleSentence_bn: "ভালো শোনাচ্ছে!" },
        { situation_bn: "অফিসে কোনো প্ল্যানে সম্মতি দিতে", situation_en: "When agreeing to a plan at work", exampleSentence: "Sounds good to me", exampleSentence_bn: "আমার কাছে ভালো লাগছে" },
        { situation_bn: "পরিবারের পরিকল্পনায় খুশি হলে", situation_en: "When happy with family plans", exampleSentence: "Sounds great!", exampleSentence_bn: "খুব ভালো শোনাচ্ছে!" }
      ],
      sentenceBuilding: [
        { previousPatternId: "T5.2", previousFormula: "See you [TIME]", previousFormula_bn: "[সময়] দেখা হবে", combined: "Sounds good. See you then!", combined_bn: "ভালো শোনাচ্ছে। তখন দেখা হবে!" },
        { previousPatternId: "I8.1", previousFormula: "I'm looking forward to [EVENT]", previousFormula_bn: "আমি [ঘটনা]-র জন্য উৎসুক", combined: "Sounds great! I'm looking forward to it.", combined_bn: "খুব ভালো শোনাচ্ছে! আমি উৎসুক।" }
      ],
      memoryTrick_bn: "'সাউন্ডস' মানে 'শোনাচ্ছে'। বাংলায় যেমন বলো 'ভালো শোনাচ্ছে' বা 'রাজি আছি' — ইংরেজিতে তেমনি 'সাউন্ডস গুড'।",
      chunks: [
        { en: "Sounds good", bn: "ভালো শোনাচ্ছে", pronunciation_bn: "সাউন্ডস গুড" },
        { en: "Sounds great", bn: "খুব ভালো শোনাচ্ছে", pronunciation_bn: "সাউন্ডস গ্রেট" },
        { en: "Sounds good to me", bn: "আমার কাছে ভালো লাগছে", pronunciation_bn: "সাউন্ডস গুড টু মি" }
      ],
      wordMap: {
        bn_sentence: "ভালো শোনাচ্ছে",
        en_sentence: "Sounds good",
        mappings: [
          { bn_word: "শোনাচ্ছে", en_word: "Sounds", type: "direct", bridgeRuleId: "BR1" },
          { bn_word: "ভালো", en_word: "good / great", type: "direct", bridgeRuleId: "BR1" }
        ]
      },
      answerTemplates: [
        { situation_bn: "সাধারণভাবে রাজি হতে", question: "Let's meet at 5.", question_bn: "৫টায় দেখা হবে।", answerFormula: "Sounds good", answerFormula_bn: "সাউন্ডস গুড", pronunciation_bn: "সাউন্ডস গুড", examples: [{ answer: "Sounds good!", answer_bn: "ভালো শোনাচ্ছে!", pronunciation_bn: "সাউন্ডস গুড!" }] },
        { situation_bn: "খুশি হয়ে রাজি হতে", question: "Let's go to Cox's Bazar!", question_bn: "চলো কক্সবাজার যাই!", answerFormula: "Sounds great!", answerFormula_bn: "সাউন্ডস গ্রেট!", pronunciation_bn: "সাউন্ডস গ্রেট!", examples: [{ answer: "Sounds great!", answer_bn: "খুব ভালো শোনাচ্ছে!", pronunciation_bn: "সাউন্ডস গ্রেট!" }] },
        { situation_bn: "আমার কোনো সমস্যা নেই বলতে", question: "How about 3 PM for the meeting?", question_bn: "মিটিং ৩টায় কেমন?", answerFormula: "Sounds good to me", answerFormula_bn: "সাউন্ডস গুড টু মি", pronunciation_bn: "সাউন্ডস গুড টু মি", examples: [{ answer: "Sounds good to me.", answer_bn: "আমার কাছে ভালো লাগছে।", pronunciation_bn: "সাউন্ডস গুড টু মি।" }] }
      ],
      variations: [
        {
          variant: "with_to_me",
          label: "With 'to me'",
          label_bn: "'টু মি' দিয়ে — আমার কাছে",
          formula: "Sounds good to me",
          formula_bn: "সাউন্ডস গুড টু মি",
          examples: [
            {
              en: "Sounds good to me",
              bn: "আমার কাছে ভালো লাগছে",
              pronunciation_bn: "সাউন্ডস গুড টু মি",
              slotValues: {},
              stage: 1
            },
            {
              en: "Sounds great to me!",
              bn: "আমার কাছে খুব ভালো লাগছে!",
              pronunciation_bn: "সাউন্ডস গ্রেট টু মি!",
              slotValues: {},
              stage: 2
            },
            {
              en: "That sounds perfect to me, let's do it",
              bn: "আমার কাছে পারফেক্ট লাগছে, চলো করি",
              pronunciation_bn: "দ্যাট সাউন্ডস পারফেক্ট টু মি, লেটস ডু ইট",
              slotValues: {},
              stage: 3
            }
          ]
        },
        {
          variant: "adjectives",
          label: "Different adjectives",
          label_bn: "অন্য শব্দ দিয়ে",
          formula: "Sounds [ADJECTIVE]",
          formula_bn: "সাউন্ডস [শব্দ]",
          examples: [
            {
              en: "Sounds perfect",
              bn: "পারফেক্ট শোনাচ্ছে",
              pronunciation_bn: "সাউন্ডস পারফেক্ট",
              slotValues: {},
              stage: 1
            },
            {
              en: "Sounds amazing",
              bn: "অসাধারণ শোনাচ্ছে",
              pronunciation_bn: "সাউন্ডস অ্যামেজিং",
              slotValues: {},
              stage: 2
            },
            {
              en: "Sounds like a plan",
              bn: "ভালো পরিকল্পনা শোনাচ্ছে",
              pronunciation_bn: "সাউন্ডস লাইক আ প্ল্যান",
              slotValues: {},
              stage: 3
            }
          ]
        },
        {
          variant: "with_that",
          label: "With 'That'",
          label_bn: "'দ্যাট' দিয়ে শুরু",
          formula: "That sounds good",
          formula_bn: "দ্যাট সাউন্ডস গুড",
          examples: [
            {
              en: "That sounds good",
              bn: "ওটা ভালো শোনাচ্ছে",
              pronunciation_bn: "দ্যাট সাউন্ডস গুড",
              slotValues: {},
              stage: 1
            },
            {
              en: "That sounds great to me",
              bn: "আমার কাছে ওটা খুব ভালো লাগছে",
              pronunciation_bn: "দ্যাট সাউন্ডস গ্রেট টু মি",
              slotValues: {},
              stage: 2
            },
            {
              en: "Oh yeah, that sounds really good",
              bn: "ও হ্যাঁ, ওটা সত্যিই ভালো শোনাচ্ছে",
              pronunciation_bn: "ও ইয়া, দ্যাট সাউন্ডস রিয়েলি গুড",
              slotValues: {},
              stage: 3
            }
          ]
        }
      ],
      dialogueChains: [
        {
          id: "T36.4-dc1",
          title_bn: "রেস্তোরাঁয় যাওয়ার পরিকল্পনা",
          title_en: "Planning to go to a restaurant",
          situation_bn: "দুই বন্ধু পরিকল্পনা করছে",
          icon: "🍽️",
          turns: [
            { speaker_bn: "বন্ধু এ", en: "Let's go to the new restaurant", bn: "চলো নতুন রেস্তোরাঁয় যাই", pronunciation_bn: "লেটস গো টু দ্য নিউ রেস্তোরাঁ", patternId: "B4.1" },
            { speaker_bn: "বন্ধু বি", en: "Sounds great! When?", bn: "খুব ভালো শোনাচ্ছে! কখন?", pronunciation_bn: "সাউন্ডস গ্রেট! হোয়েন?", patternId: "T36.4" },
            { speaker_bn: "বন্ধু এ", en: "How about Friday evening?", bn: "শুক্রবার সন্ধ্যা কেমন?", pronunciation_bn: "হাউ অ্যাবাউট ফ্রাইডে ইভনিং?", patternId: "G6.2" },
            { speaker_bn: "বন্ধু বি", en: "Perfect, see you then", bn: "পারফেক্ট, তখন দেখা হবে", pronunciation_bn: "পারফেক্ট, সি ইউ দেন", patternId: "T5.2" }
          ],
          patternsUsed: ["B4.1", "T36.4", "G6.2", "T5.2"]
        }
      ],
      slots: [
        {
          name: "CONTEXT",
          description: "The plan or suggestion",
          description_bn: "যে পরিকল্পনা বা প্রস্তাব দেয়া হয়েছে",
          acceptedTypes: ["statement"],
          examples: [
            "when someone suggests a meeting time",
            "when someone proposes a plan",
            "when you agree with an idea"
          ]
        }
      ],
      examples: [
        {
          en: "Sounds good",
          bn: "ভালো শোনাচ্ছে",
          pronunciation_bn: "সাউন্ডস গুড",
          slotValues: {},
          topicArea: "social_interaction",
          stage: 1,
          miniStory: { situation_bn: "তোমার বন্ধু বলল ৫টায় দেখা হবে। তুমি রাজি হয়ে বললে, 'Sounds good.'", icon: "🤝" }
        },
        {
          en: "Sounds great!",
          bn: "খুব ভালো শোনাচ্ছে!",
          pronunciation_bn: "সাউন্ডস গ্রেট!",
          slotValues: {},
          topicArea: "social_interaction",
          stage: 1
        },
        {
          en: "Sounds good to me",
          bn: "আমার কাছে ভালো লাগছে",
          pronunciation_bn: "সাউন্ডস গুড টু মি",
          slotValues: {},
          topicArea: "work",
          stage: 1,
          miniStory: { situation_bn: "মিটিং-এ তোমার বস একটা সময় প্রস্তাব করলেন। তুমি বললে, 'Sounds good to me' — তোমার কোনো সমস্যা নেই।", icon: "💼" }
        },
        {
          en: "Sounds perfect",
          bn: "পারফেক্ট শোনাচ্ছে",
          pronunciation_bn: "সাউন্ডস পারফেক্ট",
          slotValues: {},
          topicArea: "daily_life",
          stage: 1
        },
        {
          en: "That sounds good",
          bn: "ওটা ভালো শোনাচ্ছে",
          pronunciation_bn: "দ্যাট সাউন্ডস গুড",
          slotValues: {},
          topicArea: "social_interaction",
          stage: 1
        },
        {
          en: "Yeah, sounds great to me",
          bn: "হ্যাঁ, আমার কাছে খুব ভালো লাগছে",
          pronunciation_bn: "ইয়া, সাউন্ডস গ্রেট টু মি",
          slotValues: {},
          topicArea: "daily_life",
          stage: 2,
          miniStory: { situation_bn: "তোমার পরিবার বলল পরশু পিকনিকে যাবে। তুমি খুশি হয়ে বললে, 'Yeah, sounds great to me!'", icon: "🏖️" }
        },
        {
          en: "Sounds like a plan",
          bn: "ভালো পরিকল্পনা শোনাচ্ছে",
          pronunciation_bn: "সাউন্ডস লাইক আ প্ল্যান",
          slotValues: {},
          topicArea: "work",
          stage: 2
        },
        {
          en: "That sounds great, count me in",
          bn: "খুব ভালো শোনাচ্ছে, আমাকে রাখো",
          pronunciation_bn: "দ্যাট সাউন্ডস গ্রেট, কাউন্ট মি ইন",
          slotValues: {},
          topicArea: "social_interaction",
          stage: 2,
          miniStory: { situation_bn: "বন্ধুরা বলল কক্সবাজার ট্রিপে যাবে। তুমি বললে, 'That sounds great, count me in' — তুমিও যাবে।", icon: "🏖️" }
        },
        {
          en: "Sounds amazing",
          bn: "অসাধারণ শোনাচ্ছে",
          pronunciation_bn: "সাউন্ডস অ্যামেজিং",
          slotValues: {},
          topicArea: "social_interaction",
          stage: 2
        },
        {
          en: "That sounds really good to me",
          bn: "আমার কাছে সত্যিই ভালো লাগছে",
          pronunciation_bn: "দ্যাট সাউন্ডস রিয়েলি গুড টু মি",
          slotValues: {},
          topicArea: "work",
          stage: 2
        },
        {
          en: "Oh yeah, that sounds perfect to me, let's do it",
          bn: "ও হ্যাঁ, আমার কাছে পারফেক্ট লাগছে, চলো করি",
          pronunciation_bn: "ও ইয়া, দ্যাট সাউন্ডস পারফেক্ট টু মি, লেটস ডু ইট",
          slotValues: {},
          topicArea: "daily_life",
          stage: 3,
          miniStory: { situation_bn: "তোমার স্ত্রী বলল শনিবার মার্কেটে যাবে এবং রেস্তোরাঁয় খাবে। তুমি খুশি হয়ে বললে, 'Oh yeah, that sounds perfect to me, let's do it.'", icon: "🏠" }
        },
        {
          en: "That sounds like a great idea, I'm in",
          bn: "খুব ভালো আইডিয়া শোনাচ্ছে, আমি রাজি",
          pronunciation_bn: "দ্যাট সাউন্ডস লাইক আ গ্রেট আইডিয়া, আইম ইন",
          slotValues: {},
          topicArea: "work",
          stage: 3
        },
        {
          en: "Sounds fantastic, when do we start?",
          bn: "ফ্যান্টাস্টিক শোনাচ্ছে, কখন শুরু করব?",
          pronunciation_bn: "সাউন্ডস ফ্যান্টাস্টিক, হোয়েন ডু উই স্টার্ট?",
          slotValues: {},
          topicArea: "work",
          stage: 3
        },
        {
          en: "Yeah, that sounds really good, I don't have any other plans",
          bn: "হ্যাঁ, সত্যিই ভালো শোনাচ্ছে, আমার অন্য কোনো পরিকল্পনা নেই",
          pronunciation_bn: "ইয়া, দ্যাট সাউন্ডস রিয়েলি গুড, আই ডোন্ট হ্যাভ এনি আদার প্ল্যানস",
          slotValues: {},
          topicArea: "social_interaction",
          stage: 3
        },
        {
          en: "That sounds absolutely perfect, I've been wanting to try that place",
          bn: "একদম পারফেক্ট শোনাচ্ছে, আমি ওই জায়গা ট্রাই করতে চাইছিলাম",
          pronunciation_bn: "দ্যাট সাউন্ডস অ্যাবসলিউটলি পারফেক্ট, আইভ বিন ওয়ান্টিং টু ট্রাই দ্যাট প্লেস",
          slotValues: {},
          topicArea: "social_interaction",
          stage: 3
        }
      ]
    },
    {
      id: "T36.5",
      patternName: "I don't mind / It doesn't matter",
      patternName_bn: "আমার কিছু যায় আসে না বলা",
      concept_bn: "যায় আসে না",
      formula: "I don't mind / It doesn't matter",
      formula_bn: "আই ডোন্ট মাইন্ড / ইট ডাজন্ট ম্যাটার",
      formulaPronunciation_bn: "আই ডোন্ট মাইন্ড / ইট ডাজন্ট ম্যাটার",
      usageNote: "Use 'I don't mind' when you're okay with either option. Use 'It doesn't matter' when the choice is not important to you.",
      usageNote_bn: "যখন তুমি যেকোনো অপশনে খুশি, তখন 'আই ডোন্ট মাইন্ড' বলো। যখন তোমার কাছে পছন্দটা গুরুত্বপূর্ণ না, তখন 'ইট ডাজন্ট ম্যাটার' বলো।",
      difficulty: "beginner",
      formality: "casual",
      bridgeRuleIds: ["BR2", "BR7"],
      conversionSteps: {
        banglaThought: "তুমি বাংলায় বলো: 'আমার কিছু যায় আসে না'",
        steps: [
          { step_bn: "বাংলা চিন্তা থেকে শুরু করো — 'আমার কিছু যায় আসে না'", result: "I don't mind" },
          { step_bn: "ব্যক্তিগত পছন্দ জানাতে 'আই ডোন্ট মাইন্ড' বলো", result: "I don't mind" },
          { step_bn: "বা সাধারণভাবে 'ইট ডাজন্ট ম্যাটার' বলো", result: "It doesn't matter" }
        ],
        finalResult: "I don't mind / It doesn't matter",
        finalResult_bn: "আমার কিছু যায় আসে না"
      },
      commonMistakes: [
        { wrong: "I don't matter", correct: "I don't mind", explanation_bn: "'আই ডোন্ট ম্যাটার' মানে 'আমার কোনো গুরুত্ব নেই'। 'আই ডোন্ট মাইন্ড' মানে 'আমার আপত্তি নেই'।" },
        { wrong: "It's doesn't matter", correct: "It doesn't matter", explanation_bn: "'ইটস' না, 'ইট ডাজন্ট'।" },
        { wrong: "I'm not mind", correct: "I don't mind", explanation_bn: "'আইম নট' না, 'আই ডোন্ট মাইন্ড'।" }
      ],
      simpleRules: [
        { rule_bn: "যেটা হোক তোমার কোনো আপত্তি নেই তখন 'আই ডোন্ট মাইন্ড' বলো", example: "I don't mind." },
        { rule_bn: "নিজের কথা বলতে 'আই ডোন্ট মাইন্ড'", example: "I don't mind either way." },
        { rule_bn: "সাধারণভাবে বলতে 'ইট ডাজন্ট ম্যাটার'", example: "It doesn't matter." }
      ],
      usageSituations: [
        { situation_bn: "দুটো অপশন দিলে উভয়েই ঠিক থাকলে", situation_en: "When both options are fine", exampleSentence: "I don't mind", exampleSentence_bn: "আমার আপত্তি নেই" },
        { situation_bn: "পছন্দ জানতে চাইলে কিন্তু তোমার কোনো পছন্দ নেই", situation_en: "When asked your preference but you have none", exampleSentence: "It doesn't matter to me", exampleSentence_bn: "আমার কাছে গুরুত্বপূর্ণ না" },
        { situation_bn: "সিদ্ধান্ত অন্যের হাতে ছেড়ে দিতে", situation_en: "When leaving the decision to someone else", exampleSentence: "I don't mind, you decide", exampleSentence_bn: "আমার আপত্তি নেই, তুমি ঠিক করো" }
      ],
      sentenceBuilding: [
        { previousPatternId: "K2.3", previousFormula: "Either is [DESCRIPTION]", previousFormula_bn: "যেটা হোক [বর্ণনা]", combined: "I don't mind. Either is fine.", combined_bn: "আমার আপত্তি নেই। যেটা হোক ঠিক আছে।" },
        { previousPatternId: "B4.5", previousFormula: "You [ACTION]", previousFormula_bn: "তুমি [কাজ] করো", combined: "It doesn't matter. You decide.", combined_bn: "গুরুত্বপূর্ণ না। তুমি ঠিক করো।" }
      ],
      memoryTrick_bn: "'মাইন্ড' মানে 'আপত্তি'। 'আই ডোন্ট মাইন্ড' মানে 'আমার আপত্তি নেই'। 'ম্যাটার' মানে 'গুরুত্ব'। 'ইট ডাজন্ট ম্যাটার' মানে 'গুরুত্ব নেই'।",
      chunks: [
        { en: "I don't mind", bn: "আমার আপত্তি নেই", pronunciation_bn: "আই ডোন্ট মাইন্ড" },
        { en: "It doesn't matter", bn: "এটা গুরুত্বপূর্ণ না", pronunciation_bn: "ইট ডাজন্ট ম্যাটার" },
        { en: "I don't mind either way", bn: "যেভাবেই হোক আমার আপত্তি নেই", pronunciation_bn: "আই ডোন্ট মাইন্ড আইদার ওয়ে" }
      ],
      wordMap: {
        bn_sentence: "আমার কিছু যায় আসে না",
        en_sentence: "I don't mind / It doesn't matter",
        mappings: [
          { bn_word: "আমার আপত্তি নেই", en_word: "I don't mind", type: "direct", bridgeRuleId: "BR2" },
          { bn_word: "গুরুত্ব নেই", en_word: "doesn't matter", type: "direct", bridgeRuleId: "BR7" }
        ]
      },
      answerTemplates: [
        { situation_bn: "তোমার আপত্তি নেই বলতে", question: "Tea or coffee?", question_bn: "চা না কফি?", answerFormula: "I don't mind", answerFormula_bn: "আই ডোন্ট মাইন্ড", pronunciation_bn: "আই ডোন্ট মাইন্ড", examples: [{ answer: "I don't mind.", answer_bn: "আমার আপত্তি নেই।", pronunciation_bn: "আই ডোন্ট মাইন্ড।" }] },
        { situation_bn: "পছন্দটা গুরুত্বপূর্ণ না বলতে", question: "Which color do you want?", question_bn: "কোন রঙ চাও?", answerFormula: "It doesn't matter", answerFormula_bn: "ইট ডাজন্ট ম্যাটার", pronunciation_bn: "ইট ডাজন্ট ম্যাটার", examples: [{ answer: "It doesn't matter.", answer_bn: "গুরুত্বপূর্ণ না।", pronunciation_bn: "ইট ডাজন্ট ম্যাটার।" }] },
        { situation_bn: "যেকোনো উপায়ে রাজি বলতে", question: "Should we eat in or take away?", question_bn: "ভিতরে খাবে না নিয়ে যাবে?", answerFormula: "I don't mind either way", answerFormula_bn: "আই ডোন্ট মাইন্ড আইদার ওয়ে", pronunciation_bn: "আই ডোন্ট মাইন্ড আইদার ওয়ে", examples: [{ answer: "I don't mind either way.", answer_bn: "যেভাবেই হোক আমার আপত্তি নেই।", pronunciation_bn: "আই ডোন্ট মাইন্ড আইদার ওয়ে।" }] }
      ],
      variations: [
        {
          variant: "either_way",
          label: "With 'either way'",
          label_bn: "'আইদার ওয়ে' দিয়ে — যেভাবেই হোক",
          formula: "I don't mind either way",
          formula_bn: "আই ডোন্ট মাইন্ড আইদার ওয়ে",
          examples: [
            {
              en: "I don't mind either way",
              bn: "যেভাবেই হোক আমার আপত্তি নেই",
              pronunciation_bn: "আই ডোন্ট মাইন্ড আইদার ওয়ে",
              slotValues: {},
              stage: 1
            },
            {
              en: "It doesn't matter to me either way",
              bn: "আমার কাছে যেভাবেই হোক গুরুত্বপূর্ণ না",
              pronunciation_bn: "ইট ডাজন্ট ম্যাটার টু মি আইদার ওয়ে",
              slotValues: {},
              stage: 2
            },
            {
              en: "Honestly, I don't mind either way, whatever works for you",
              bn: "সত্যি বলতে, যেভাবেই হোক আমার আপত্তি নেই, তোমার যেটা সুবিধা",
              pronunciation_bn: "অনেস্টলি, আই ডোন্ট মাইন্ড আইদার ওয়ে, হোয়াটএভার ওয়ার্কস ফর ইউ",
              slotValues: {},
              stage: 3
            }
          ]
        },
        {
          variant: "to_me",
          label: "With 'to me'",
          label_bn: "'টু মি' দিয়ে — আমার কাছে",
          formula: "It doesn't matter to me",
          formula_bn: "ইট ডাজন্ট ম্যাটার টু মি",
          examples: [
            {
              en: "It doesn't matter to me",
              bn: "আমার কাছে গুরুত্বপূর্ণ না",
              pronunciation_bn: "ইট ডাজন্ট ম্যাটার টু মি",
              slotValues: {},
              stage: 1
            },
            {
              en: "It really doesn't matter to me",
              bn: "আমার কাছে সত্যিই গুরুত্বপূর্ণ না",
              pronunciation_bn: "ইট রিয়েলি ডাজন্ট ম্যাটার টু মি",
              slotValues: {},
              stage: 2
            },
            {
              en: "Honestly, it doesn't matter to me at all, you choose",
              bn: "সত্যি বলতে, আমার কাছে একদমই গুরুত্বপূর্ণ না, তুমি পছন্দ করো",
              pronunciation_bn: "অনেস্টলি, ইট ডাজন্ট ম্যাটার টু মি অ্যাট অল, ইউ চুজ",
              slotValues: {},
              stage: 3
            }
          ]
        },
        {
          variant: "alternative",
          label: "Alternative: Either is fine",
          label_bn: "আরেক উপায়: যেটা হোক ঠিক আছে",
          formula: "Either is fine",
          formula_bn: "আইদার ইজ ফাইন",
          examples: [
            {
              en: "Either is fine",
              bn: "যেটা হোক ঠিক আছে",
              pronunciation_bn: "আইদার ইজ ফাইন",
              slotValues: {},
              stage: 1
            },
            {
              en: "Whatever you prefer",
              bn: "তুমি যেটা পছন্দ করো",
              pronunciation_bn: "হোয়াটএভার ইউ প্রিফার",
              slotValues: {},
              stage: 2
            },
            {
              en: "I'm happy with either option, you decide",
              bn: "আমি যেকোনো অপশনে খুশি, তুমি ঠিক করো",
              pronunciation_bn: "আইম হ্যাপি উইথ আইদার অপশন, ইউ ডিসাইড",
              slotValues: {},
              stage: 3
            }
          ]
        }
      ],
      dialogueChains: [
        {
          id: "T36.5-dc1",
          title_bn: "চা না কফি পছন্দ করা",
          title_en: "Choosing tea or coffee",
          situation_bn: "একজন বন্ধু জিজ্ঞেস করছে তুমি কী পান করবে",
          icon: "☕",
          turns: [
            { speaker_bn: "বন্ধু", en: "Do you want tea or coffee?", bn: "তুমি চা না কফি খাবে?", pronunciation_bn: "ডু ইউ ওয়ান্ট টি অর কফি?", patternId: "H2.1" },
            { speaker_bn: "তুমি", en: "I don't mind, either is fine", bn: "আমার আপত্তি নেই, যেটা হোক ঠিক আছে", pronunciation_bn: "আই ডোন্ট মাইন্ড, আইদার ইজ ফাইন", patternId: "T36.5" },
            { speaker_bn: "বন্ধু", en: "Okay, I'll make tea then", bn: "ওকে, তাহলে চা বানাই", pronunciation_bn: "ওকে, আইল মেক টি দেন", patternId: "I6.1" }
          ],
          patternsUsed: ["H2.1", "T36.5", "I6.1"]
        }
      ],
      slots: [
        {
          name: "CONTEXT",
          description: "The choice being offered",
          description_bn: "যে পছন্দ করতে বলা হচ্ছে",
          acceptedTypes: ["statement"],
          examples: [
            "when given two options",
            "when asked your preference",
            "when the choice is not important"
          ]
        }
      ],
      examples: [
        {
          en: "I don't mind",
          bn: "আমার আপত্তি নেই",
          pronunciation_bn: "আই ডোন্ট মাইন্ড",
          slotValues: {},
          topicArea: "daily_life",
          stage: 1,
          miniStory: { situation_bn: "চায়ের দোকানে তোমার বন্ধু জিজ্ঞেস করল লাল চা না দুধ চা। তুমি বললে, 'I don't mind' — দুটোই ঠিক আছে।", icon: "☕" }
        },
        {
          en: "It doesn't matter",
          bn: "এটা গুরুত্বপূর্ণ না",
          pronunciation_bn: "ইট ডাজন্ট ম্যাটার",
          slotValues: {},
          topicArea: "daily_life",
          stage: 1
        },
        {
          en: "I don't mind either way",
          bn: "যেভাবেই হোক আমার আপত্তি নেই",
          pronunciation_bn: "আই ডোন্ট মাইন্ড আইদার ওয়ে",
          slotValues: {},
          topicArea: "social_interaction",
          stage: 1,
          miniStory: { situation_bn: "বন্ধুরা বলল সিনেমা হলে যাবে না বাসায় দেখবে। তুমি বললে, 'I don't mind either way' — যেখানেই হোক ঠিক আছে।", icon: "🎬" }
        },
        {
          en: "It doesn't matter to me",
          bn: "আমার কাছে গুরুত্বপূর্ণ না",
          pronunciation_bn: "ইট ডাজন্ট ম্যাটার টু মি",
          slotValues: {},
          topicArea: "work",
          stage: 1
        },
        {
          en: "Either is fine",
          bn: "যেটা হোক ঠিক আছে",
          pronunciation_bn: "আইদার ইজ ফাইন",
          slotValues: {},
          topicArea: "daily_life",
          stage: 1
        },
        {
          en: "I really don't mind",
          bn: "সত্যিই আমার আপত্তি নেই",
          pronunciation_bn: "আই রিয়েলি ডোন্ট মাইন্ড",
          slotValues: {},
          topicArea: "social_interaction",
          stage: 2,
          miniStory: { situation_bn: "তোমার স্ত্রী জিজ্ঞেস করল কোন রেস্তোরাঁয় যাবে। তুমি বললে, 'I really don't mind' — সে যেটা চায় সেটাই ঠিক আছে।", icon: "🏠" }
        },
        {
          en: "It really doesn't matter to me",
          bn: "আমার কাছে সত্যিই গুরুত্বপূর্ণ না",
          pronunciation_bn: "ইট রিয়েলি ডাজন্ট ম্যাটার টু মি",
          slotValues: {},
          topicArea: "work",
          stage: 2
        },
        {
          en: "Whatever you prefer",
          bn: "তুমি যেটা পছন্দ করো",
          pronunciation_bn: "হোয়াটএভার ইউ প্রিফার",
          slotValues: {},
          topicArea: "social_interaction",
          stage: 2,
          miniStory: { situation_bn: "বন্ধু জিজ্ঞেস করল কোন গান শুনবে। তুমি বললে, 'Whatever you prefer' — তুমি যেকোনো গান শুনতে পারো।", icon: "🎵" }
        },
        {
          en: "I don't mind, you choose",
          bn: "আমার আপত্তি নেই, তুমি পছন্দ করো",
          pronunciation_bn: "আই ডোন্ট মাইন্ড, ইউ চুজ",
          slotValues: {},
          topicArea: "daily_life",
          stage: 2
        },
        {
          en: "It doesn't really matter",
          bn: "সত্যি বলতে গুরুত্বপূর্ণ না",
          pronunciation_bn: "ইট ডাজন্ট রিয়েলি ম্যাটার",
          slotValues: {},
          topicArea: "work",
          stage: 2
        },
        {
          en: "Honestly, I don't mind either way, whatever works for you",
          bn: "সত্যি বলতে, যেভাবেই হোক আমার আপত্তি নেই, তোমার যেটা সুবিধা",
          pronunciation_bn: "অনেস্টলি, আই ডোন্ট মাইন্ড আইদার ওয়ে, হোয়াটএভার ওয়ার্কস ফর ইউ",
          slotValues: {},
          topicArea: "work",
          stage: 3,
          miniStory: { situation_bn: "সহকর্মী জিজ্ঞেস করল মিটিং সকালে না বিকেলে। তুমি বললে, 'Honestly, I don't mind either way, whatever works for you' — তোমার যেকোনো সময়েই সুবিধা।", icon: "💼" }
        },
        {
          en: "It really doesn't matter to me at all, you decide",
          bn: "আমার কাছে একদমই গুরুত্বপূর্ণ না, তুমি ঠিক করো",
          pronunciation_bn: "ইট রিয়েলি ডাজন্ট ম্যাটার টু মি অ্যাট অল, ইউ ডিসাইড",
          slotValues: {},
          topicArea: "social_interaction",
          stage: 3
        },
        {
          en: "I'm happy with either option, they're both fine",
          bn: "আমি যেকোনো অপশনে খুশি, দুটোই ঠিক আছে",
          pronunciation_bn: "আইম হ্যাপি উইথ আইদার অপশন, দেয়ার বোথ ফাইন",
          slotValues: {},
          topicArea: "daily_life",
          stage: 3
        },
        {
          en: "To be honest, it doesn't matter to me, whatever is more convenient",
          bn: "সত্যি বলতে, আমার কাছে গুরুত্বপূর্ণ না, যেটা বেশি সুবিধাজনক",
          pronunciation_bn: "টু বি অনেস্ট, ইট ডাজন্ট ম্যাটার টু মি, হোয়াটএভার ইজ মোর কনভিনিয়েন্ট",
          slotValues: {},
          topicArea: "work",
          stage: 3
        },
        {
          en: "I genuinely don't mind, both options sound good to me",
          bn: "সত্যিই আমার আপত্তি নেই, দুটো অপশনই আমার কাছে ভালো লাগছে",
          pronunciation_bn: "আই জেনুইনলি ডোন্ট মাইন্ড, বোথ অপশনস সাউন্ড গুড টু মি",
          slotValues: {},
          topicArea: "social_interaction",
          stage: 3
        }
      ]
    },
    {
      id: "T36.6",
      patternName: "My bad / My mistake",
      patternName_bn: "আমার ভুল বলা",
      concept_bn: "আমার ভুল",
      formula: "My bad / My mistake",
      formula_bn: "মাই ব্যাড / মাই মিসটেক",
      formulaPronunciation_bn: "মাই ব্যাড / মাই মিসটেক",
      usageNote: "Use 'My bad' or 'My mistake' to quickly admit you made an error. It's a casual way to apologize.",
      usageNote_bn: "তুমি ভুল করলে দ্রুত স্বীকার করতে 'মাই ব্যাড' বা 'মাই মিসটেক' বলো। এটা ক্যাজুয়াল উপায়ে ক্ষমা চাওয়া।",
      difficulty: "beginner",
      formality: "casual",
      bridgeRuleIds: ["BR1", "BR7"],
      conversionSteps: {
        banglaThought: "তুমি বাংলায় বলো: 'আমার ভুল'",
        steps: [
          { step_bn: "বাংলা চিন্তা থেকে শুরু করো — 'আমার ভুল'", result: "My bad" },
          { step_bn: "ফিক্সড ফ্রেজ বলো", result: "My bad" },
          { step_bn: "অন্য উপায়: মাই মিসটেক", result: "My mistake" }
        ],
        finalResult: "My bad / My mistake",
        finalResult_bn: "আমার ভুল"
      },
      commonMistakes: [
        { wrong: "I'm bad", correct: "My bad", explanation_bn: "'আইম ব্যাড' মানে 'আমি খারাপ মানুষ'। 'মাই ব্যাড' মানে 'আমার ভুল হয়েছে'।" },
        { wrong: "My wrong", correct: "My bad / My mistake", explanation_bn: "'মাই রং' বলে না। 'মাই ব্যাড' বা 'মাই মিসটেক' বলতে হয়।" },
        { wrong: "It's my bad", correct: "My bad", explanation_bn: "'ইটস' লাগে না। শুধু 'মাই ব্যাড'।" }
      ],
      simpleRules: [
        { rule_bn: "নিজের ভুল স্বীকার করতে 'মাই ব্যাড' বা 'মাই মিসটেক' বলো", example: "My bad, I forgot." },
        { rule_bn: "'মাই ব্যাড' বা 'মাই মিসটেক' — 'মাই' দিয়ে শুরু", example: "My mistake." },
        { rule_bn: "অফিসিয়াল নয়, বন্ধুবান্ধবের সাথে ব্যবহার করো", example: "My bad, sorry!" }
      ],
      usageSituations: [
        { situation_bn: "বন্ধুর কাছে ভুল স্বীকার করতে", situation_en: "When admitting a mistake to a friend", exampleSentence: "My bad!", exampleSentence_bn: "আমার ভুল!" },
        { situation_bn: "ছোট ভুলে ক্ষমা চাইতে", situation_en: "When apologizing for a small mistake", exampleSentence: "My bad, sorry", exampleSentence_bn: "আমার ভুল, সরি" },
        { situation_bn: "খেলায় বা কাজে ভুল স্বীকার করতে", situation_en: "When admitting a mistake in a game or at work", exampleSentence: "My mistake", exampleSentence_bn: "আমার ভুল" }
      ],
      sentenceBuilding: [
        { previousPatternId: "A10.1", previousFormula: "I forgot [THING]", previousFormula_bn: "আমি [জিনিস] ভুলে গেছি", combined: "My bad. I forgot.", combined_bn: "আমার ভুল। আমি ভুলে গেছি।" },
        { previousPatternId: "E1.1", previousFormula: "Sorry about [THING]", previousFormula_bn: "[জিনিস] নিয়ে সরি", combined: "My mistake. Sorry about that.", combined_bn: "আমার ভুল। এজন্য সরি।" }
      ],
      memoryTrick_bn: "'ব্যাড' মানে 'খারাপ'। 'মাই ব্যাড' মানে 'আমার খারাপ কাজ হয়েছে'। বাংলায় যেমন বলো 'আমার ভুল' — ইংরেজিতে তেমনি 'মাই ব্যাড'।",
      chunks: [
        { en: "My bad", bn: "আমার ভুল", pronunciation_bn: "মাই ব্যাড" },
        { en: "My mistake", bn: "আমার ভুল", pronunciation_bn: "মাই মিসটেক" },
        { en: "My bad, sorry", bn: "আমার ভুল, সরি", pronunciation_bn: "মাই ব্যাড, সরি" }
      ],
      wordMap: {
        bn_sentence: "আমার ভুল",
        en_sentence: "My bad / My mistake",
        mappings: [
          { bn_word: "আমার", en_word: "My", type: "direct", bridgeRuleId: "BR1" },
          { bn_word: "ভুল/খারাপ", en_word: "bad / mistake", type: "direct", bridgeRuleId: "BR1" }
        ]
      },
      answerTemplates: [
        { situation_bn: "তাড়াতাড়ি ভুল মেনে নিতে", question: "You sent the wrong file!", question_bn: "তুমি ভুল ফাইল পাঠিয়েছো!", answerFormula: "My bad", answerFormula_bn: "মাই ব্যাড", pronunciation_bn: "মাই ব্যাড", examples: [{ answer: "My bad!", answer_bn: "আমার ভুল!", pronunciation_bn: "মাই ব্যাড!" }] },
        { situation_bn: "একটু বেশি ফর্মাল উপায়ে", question: "This report has errors.", question_bn: "এই রিপোর্টে ভুল আছে।", answerFormula: "My mistake", answerFormula_bn: "মাই মিসটেক", pronunciation_bn: "মাই মিসটেক", examples: [{ answer: "My mistake, I'll fix it.", answer_bn: "আমার ভুল, আমি ঠিক করব।", pronunciation_bn: "মাই মিসটেক, আইল ফিক্স ইট।" }] },
        { situation_bn: "ক্ষমাও চাইতে", question: "You forgot our meeting!", question_bn: "তুমি আমাদের মিটিং ভুলে গেছো!", answerFormula: "My bad, sorry", answerFormula_bn: "মাই ব্যাড, সরি", pronunciation_bn: "মাই ব্যাড, সরি", examples: [{ answer: "My bad, sorry about that.", answer_bn: "আমার ভুল, এজন্য সরি।", pronunciation_bn: "মাই ব্যাড, সরি অ্যাবাউট দ্যাট।" }] }
      ],
      variations: [
        {
          variant: "with_apology",
          label: "With apology",
          label_bn: "ক্ষমা চেয়ে",
          formula: "My bad, sorry",
          formula_bn: "মাই ব্যাড, সরি",
          examples: [
            {
              en: "My bad, sorry",
              bn: "আমার ভুল, সরি",
              pronunciation_bn: "মাই ব্যাড, সরি",
              slotValues: {},
              stage: 1
            },
            {
              en: "My mistake, I apologize",
              bn: "আমার ভুল, আমি ক্ষমা চাই",
              pronunciation_bn: "মাই মিসটেক, আই অ্যাপলজাইজ",
              slotValues: {},
              stage: 2
            },
            {
              en: "My bad, sorry about that, won't happen again",
              bn: "আমার ভুল, এজন্য সরি, আর হবে না",
              pronunciation_bn: "মাই ব্যাড, সরি অ্যাবাউট দ্যাট, ওন্ট হ্যাপেন অ্যাগেইন",
              slotValues: {},
              stage: 3
            }
          ]
        },
        {
          variant: "with_explanation",
          label: "With explanation",
          label_bn: "ব্যাখ্যা দিয়ে",
          formula: "My bad, I [REASON]",
          formula_bn: "মাই ব্যাড, আই [কারণ]",
          examples: [
            {
              en: "My bad, I forgot",
              bn: "আমার ভুল, আমি ভুলে গিয়েছিলাম",
              pronunciation_bn: "মাই ব্যাড, আই ফরগট",
              slotValues: {},
              stage: 1
            },
            {
              en: "My mistake, I thought it was tomorrow",
              bn: "আমার ভুল, আমি ভেবেছিলাম কাল",
              pronunciation_bn: "মাই মিসটেক, আই থট ইট ওয়াজ টুমরো",
              slotValues: {},
              stage: 2
            },
            {
              en: "My bad, I misunderstood what you said",
              bn: "আমার ভুল, তুমি যা বলেছিলে আমি ভুল বুঝেছিলাম",
              pronunciation_bn: "মাই ব্যাড, আই মিসআন্ডারস্টুড হোয়াট ইউ সেড",
              slotValues: {},
              stage: 3
            }
          ]
        },
        {
          variant: "alternative",
          label: "Alternative: I was wrong",
          label_bn: "আরেক উপায়: আমি ভুল ছিলাম",
          formula: "I was wrong",
          formula_bn: "আই ওয়াজ রং",
          examples: [
            {
              en: "I was wrong",
              bn: "আমি ভুল ছিলাম",
              pronunciation_bn: "আই ওয়াজ রং",
              slotValues: {},
              stage: 1
            },
            {
              en: "That was my fault",
              bn: "ওটা আমার দোষ ছিল",
              pronunciation_bn: "দ্যাট ওয়াজ মাই ফল্ট",
              slotValues: {},
              stage: 2
            },
            {
              en: "I take full responsibility for that mistake",
              bn: "আমি ওই ভুলের সম্পূর্ণ দায় নিচ্ছি",
              pronunciation_bn: "আই টেক ফুল রেসপন্সিবিলিটি ফর দ্যাট মিসটেক",
              slotValues: {},
              stage: 3
            }
          ]
        }
      ],
      dialogueChains: [
        {
          id: "T36.6-dc1",
          title_bn: "বন্ধুর সাথে দেখা করতে ভুলে যাওয়া",
          title_en: "Forgetting to meet a friend",
          situation_bn: "তুমি বন্ধুর সাথে দেখা করতে ভুলে গেছো",
          icon: "☕",
          turns: [
            { speaker_bn: "বন্ধু", en: "I waited for you at the cafe", bn: "আমি তোমার জন্য ক্যাফেতে অপেক্ষা করেছিলাম", pronunciation_bn: "আই ওয়েটেড ফর ইউ অ্যাট দ্য ক্যাফে", patternId: "A8.1" },
            { speaker_bn: "তুমি", en: "My bad, I forgot", bn: "আমার ভুল, আমি ভুলে গিয়েছিলাম", pronunciation_bn: "মাই ব্যাড, আই ফরগট", patternId: "T36.6" },
            { speaker_bn: "বন্ধু", en: "It's okay, just let me know next time", bn: "ঠিক আছে, পরেরবার জানিও", pronunciation_bn: "ইটস ওকে, জাস্ট লেট মি নো নেক্সট টাইম", patternId: "T36.1" }
          ],
          patternsUsed: ["A8.1", "T36.6", "T36.1"]
        }
      ],
      slots: [
        {
          name: "CONTEXT",
          description: "The mistake you made",
          description_bn: "তুমি যে ভুল করেছো",
          acceptedTypes: ["statement"],
          examples: [
            "when you made an error",
            "when you forgot something",
            "when you need to apologize quickly"
          ]
        }
      ],
      examples: [
        {
          en: "My bad",
          bn: "আমার ভুল",
          pronunciation_bn: "মাই ব্যাড",
          slotValues: {},
          topicArea: "daily_life",
          stage: 1,
          miniStory: { situation_bn: "তুমি বন্ধুর কাছ থেকে পেন নিয়েছিলে কিন্তু ফেরত দিতে ভুলে গেছো। বন্ধু মনে করিয়ে দিলে তুমি বললে, 'My bad.'", icon: "✏️" }
        },
        {
          en: "My mistake",
          bn: "আমার ভুল",
          pronunciation_bn: "মাই মিসটেক",
          slotValues: {},
          topicArea: "work",
          stage: 1
        },
        {
          en: "My bad, sorry",
          bn: "আমার ভুল, সরি",
          pronunciation_bn: "মাই ব্যাড, সরি",
          slotValues: {},
          topicArea: "social_interaction",
          stage: 1,
          miniStory: { situation_bn: "রাস্তায় হাঁটতে গিয়ে তুমি কারো পায়ে পা ফেলেছো। তুমি দ্রুত বললে, 'My bad, sorry.'", icon: "🚶" }
        },
        {
          en: "Oh, my bad",
          bn: "ও, আমার ভুল",
          pronunciation_bn: "ও, মাই ব্যাড",
          slotValues: {},
          topicArea: "daily_life",
          stage: 1
        },
        {
          en: "My mistake, I forgot",
          bn: "আমার ভুল, আমি ভুলে গিয়েছিলাম",
          pronunciation_bn: "মাই মিসটেক, আই ফরগট",
          slotValues: {},
          topicArea: "work",
          stage: 1
        },
        {
          en: "My bad, I didn't realize",
          bn: "আমার ভুল, আমি বুঝিনি",
          pronunciation_bn: "মাই ব্যাড, আই ডিডন্ট রিয়েলাইজ",
          slotValues: {},
          topicArea: "daily_life",
          stage: 2,
          miniStory: { situation_bn: "তুমি বাসে কারো সিটে বসেছিলে। লোকটা বলল এটা তার সিট। তুমি বললে, 'My bad, I didn't realize.'", icon: "🚌" }
        },
        {
          en: "Oh my bad, I thought it was tomorrow",
          bn: "ও আমার ভুল, আমি ভেবেছিলাম কাল",
          pronunciation_bn: "ও মাই ব্যাড, আই থট ইট ওয়াজ টুমরো",
          slotValues: {},
          topicArea: "work",
          stage: 2
        },
        {
          en: "That's my mistake, sorry about that",
          bn: "ওটা আমার ভুল, এজন্য সরি",
          pronunciation_bn: "দ্যাটস মাই মিসটেক, সরি অ্যাবাউট দ্যাট",
          slotValues: {},
          topicArea: "work",
          stage: 2,
          miniStory: { situation_bn: "অফিসে তুমি ভুল ফাইল পাঠিয়েছিলে। সহকর্মী বলল এটা ভুল। তুমি বললে, 'That's my mistake, sorry about that.'", icon: "💼" }
        },
        {
          en: "My bad, I wasn't paying attention",
          bn: "আমার ভুল, আমি মনোযোগ দিচ্ছিলাম না",
          pronunciation_bn: "মাই ব্যাড, আই ওয়াজন্ট পেইং অ্যাটেনশন",
          slotValues: {},
          topicArea: "daily_life",
          stage: 2
        },
        {
          en: "My mistake, I should have checked",
          bn: "আমার ভুল, আমার চেক করা উচিত ছিল",
          pronunciation_bn: "মাই মিসটেক, আই শুড হ্যাভ চেকড",
          slotValues: {},
          topicArea: "work",
          stage: 2
        },
        {
          en: "My bad, sorry about that, won't happen again",
          bn: "আমার ভুল, এজন্য সরি, আর হবে না",
          pronunciation_bn: "মাই ব্যাড, সরি অ্যাবাউট দ্যাট, ওন্ট হ্যাপেন অ্যাগেইন",
          slotValues: {},
          topicArea: "work",
          stage: 3,
          miniStory: { situation_bn: "তুমি তিনবার মিটিং-এ দেরি করেছো। বস অসন্তুষ্ট। তুমি বললে, 'My bad, sorry about that, won't happen again.'", icon: "💼" }
        },
        {
          en: "Oh my bad, I completely misunderstood what you said",
          bn: "ও আমার ভুল, তুমি যা বলেছিলে আমি সম্পূর্ণ ভুল বুঝেছিলাম",
          pronunciation_bn: "ও মাই ব্যাড, আই কমপ্লিটলি মিসআন্ডারস্টুড হোয়াট ইউ সেড",
          slotValues: {},
          topicArea: "social_interaction",
          stage: 3
        },
        {
          en: "That was totally my mistake, I take full responsibility",
          bn: "ওটা সম্পূর্ণ আমার ভুল ছিল, আমি সম্পূর্ণ দায় নিচ্ছি",
          pronunciation_bn: "দ্যাট ওয়াজ টোটালি মাই মিসটেক, আই টেক ফুল রেসপন্সিবিলিটি",
          slotValues: {},
          topicArea: "work",
          stage: 3
        },
        {
          en: "My bad, I should have double-checked before sending it",
          bn: "আমার ভুল, পাঠানোর আগে আমার দুবার চেক করা উচিত ছিল",
          pronunciation_bn: "মাই ব্যাড, আই শুড হ্যাভ ডাবল-চেকড বিফোর সেন্ডিং ইট",
          slotValues: {},
          topicArea: "work",
          stage: 3
        },
        {
          en: "I was wrong about that, my mistake entirely",
          bn: "আমি ওই ব্যাপারে ভুল ছিলাম, সম্পূর্ণ আমার ভুল",
          pronunciation_bn: "আই ওয়াজ রং অ্যাবাউট দ্যাট, মাই মিসটেক এনটায়ারলি",
          slotValues: {},
          topicArea: "social_interaction",
          stage: 3
        }
      ]
    },
    {
      id: "T36.7",
      patternName: "Fair enough / Good point",
      patternName_bn: "ঠিকই বলেছো বলা",
      concept_bn: "ঠিকই বলেছো",
      formula: "Fair enough / Good point",
      formula_bn: "ফেয়ার এনাফ / গুড পয়েন্ট",
      formulaPronunciation_bn: "ফেয়ার এনাফ / গুড পয়েন্ট",
      usageNote: "Use 'Fair enough' when you accept someone's reasoning even if you disagree. Use 'Good point' when someone makes a valid argument.",
      usageNote_bn: "কেউ যুক্তি দিলে এবং তুমি মেনে নিলে 'ফেয়ার এনাফ' বলো। কেউ ভালো কথা বললে 'গুড পয়েন্ট' বলো। মানে হলো — ঠিকই বলেছো।",
      difficulty: "beginner",
      formality: "casual",
      bridgeRuleIds: ["BR1", "BR7"],
      conversionSteps: {
        banglaThought: "তুমি বাংলায় বলো: 'ঠিকই বলেছো'",
        steps: [
          { step_bn: "বাংলা চিন্তা থেকে শুরু করো — 'ঠিকই বলেছো'", result: "Fair enough" },
          { step_bn: "ফিক্সড ফ্রেজ বলো", result: "Fair enough" },
          { step_bn: "অন্য উপায়: গুড পয়েন্ট", result: "Good point" }
        ],
        finalResult: "Fair enough / Good point",
        finalResult_bn: "ঠিকই বলেছো"
      },
      commonMistakes: [
        { wrong: "Fair enough point", correct: "Fair enough / Good point", explanation_bn: "দুটো আলাদা ফ্রেজ। একসাথে মেশাবে না। হয় 'ফেয়ার এনাফ' নয় 'গুড পয়েন্ট'।" },
        { wrong: "Good enough", correct: "Fair enough", explanation_bn: "'গুড এনাফ' মানে 'যথেষ্ট ভালো'। 'ফেয়ার এনাফ' মানে 'ঠিক আছে, মানলাম'।" },
        { wrong: "Nice point", correct: "Good point", explanation_bn: "'নাইস পয়েন্ট' বলা হয় না। 'গুড পয়েন্ট' বলতে হয়।" }
      ],
      simpleRules: [
        { rule_bn: "কেউ যুক্তি দিলে মেনে নিতে 'ফেয়ার এনাফ' বলো", example: "Fair enough." },
        { rule_bn: "কেউ ভালো কথা বললে 'গুড পয়েন্ট' বলো", example: "Good point." },
        { rule_bn: "রাজি না হলেও সম্মান দেখাতে ব্যবহার করো", example: "Fair enough, I see your point." }
      ],
      usageSituations: [
        { situation_bn: "বন্ধু যুক্তি দিলে মেনে নিতে", situation_en: "When accepting a friend's reasoning", exampleSentence: "Fair enough!", exampleSentence_bn: "ঠিকই বলেছো!" },
        { situation_bn: "কেউ ভালো কথা বললে", situation_en: "When someone makes a valid argument", exampleSentence: "Good point!", exampleSentence_bn: "ভালো কথা!" },
        { situation_bn: "তর্কে অন্যের কথা মেনে নিতে", situation_en: "When conceding in a discussion", exampleSentence: "Fair enough, you're right", exampleSentence_bn: "ঠিকই বলেছো, তুমি সঠিক" }
      ],
      sentenceBuilding: [
        { previousPatternId: "T36.2", previousFormula: "It depends on [THING]", previousFormula_bn: "[জিনিসের] উপর নির্ভর করে", combined: "Good point. It depends on the weather.", combined_bn: "ভালো কথা। আবহাওয়ার উপর নির্ভর করে।" },
        { previousPatternId: "T36.1", previousFormula: "No worries", previousFormula_bn: "কোনো সমস্যা নেই", combined: "Fair enough. No worries.", combined_bn: "ঠিকই বলেছো। কোনো সমস্যা নেই।" }
      ],
      memoryTrick_bn: "'ফেয়ার' মানে 'ন্যায়সঙ্গত'। 'এনাফ' মানে 'যথেষ্ট'। তাহলে 'ফেয়ার এনাফ' মানে 'যথেষ্ট ন্যায়সঙ্গত' — অর্থাৎ 'ঠিকই বলেছো'। আর 'গুড পয়েন্ট' মানে 'ভালো কথা বলেছো'।",
      chunks: [
        { en: "Fair enough", bn: "ঠিকই বলেছো", pronunciation_bn: "ফেয়ার এনাফ" },
        { en: "Good point", bn: "ভালো কথা", pronunciation_bn: "গুড পয়েন্ট" },
        { en: "That's a good point", bn: "ওটা ভালো কথা", pronunciation_bn: "দ্যাটস আ গুড পয়েন্ট" }
      ],
      wordMap: {
        bn_sentence: "ঠিকই বলেছো / ভালো কথা",
        en_sentence: "Fair enough / Good point",
        mappings: [
          { bn_word: "ঠিকই/ন্যায়সঙ্গত", en_word: "Fair", type: "direct", bridgeRuleId: "BR1" },
          { bn_word: "যথেষ্ট", en_word: "enough", type: "direct", bridgeRuleId: "BR1" },
          { bn_word: "ভালো", en_word: "Good", type: "direct", bridgeRuleId: "BR1" },
          { bn_word: "কথা", en_word: "point", type: "direct", bridgeRuleId: "BR1" }
        ]
      },
      answerTemplates: [
        { situation_bn: "কেউ যুক্তি দিলে মেনে নিতে", question: "But it's raining, we shouldn't go!", question_bn: "কিন্তু বৃষ্টি হচ্ছে, আমাদের যাওয়া উচিত না!", answerFormula: "Fair enough", answerFormula_bn: "ফেয়ার এনাফ", pronunciation_bn: "ফেয়ার এনাফ", examples: [{ answer: "Fair enough, let's stay home.", answer_bn: "ঠিকই বলেছো, বাসায় থাকি।", pronunciation_bn: "ফেয়ার এনাফ, লেটস স্টে হোম।" }] },
        { situation_bn: "কারো ভালো যুক্তি শুনে", question: "If we leave early, we'll avoid traffic.", question_bn: "আগে বের হলে ট্রাফিক এড়াতে পারবো।", answerFormula: "Good point", answerFormula_bn: "গুড পয়েন্ট", pronunciation_bn: "গুড পয়েন্ট", examples: [{ answer: "Good point, let's do that.", answer_bn: "ভালো কথা, তাই করি।", pronunciation_bn: "গুড পয়েন্ট, লেটস ডু দ্যাট।" }] },
        { situation_bn: "তর্কে রাজি হতে", question: "We should save money first, not spend.", question_bn: "আগে টাকা জমাও, খরচ করো না।", answerFormula: "Fair enough, you're right", answerFormula_bn: "ফেয়ার এনাফ, তুমি ঠিক বলেছো", pronunciation_bn: "ফেয়ার এনাফ, ইউয়ার রাইট", examples: [{ answer: "Fair enough, you're right about that.", answer_bn: "ঠিকই বলেছো, ওই ব্যাপারে তুমি সঠিক।", pronunciation_bn: "ফেয়ার এনাফ, ইউয়ার রাইট অ্যাবাউট দ্যাট।" }] }
      ],
      variations: [
        {
          variant: "accepting_reasoning",
          label: "Accepting someone's reasoning",
          label_bn: "কারো যুক্তি মেনে নেওয়া",
          formula: "Fair enough",
          formula_bn: "ফেয়ার এনাফ",
          examples: [
            { en: "Fair enough", bn: "ঠিকই বলেছো", pronunciation_bn: "ফেয়ার এনাফ", slotValues: {}, topicArea: "daily_life", stage: 1 },
            { en: "Fair enough, I didn't think of that", bn: "ঠিকই বলেছো, আমি ওটা ভাবিনি", pronunciation_bn: "ফেয়ার এনাফ, আই ডিডন্ট থিংক অফ দ্যাট", slotValues: {}, topicArea: "daily_life", stage: 2 },
            { en: "Fair enough, I can see why you feel that way", bn: "ঠিকই বলেছো, আমি বুঝতে পারছি তুমি কেন এরকম মনে করো", pronunciation_bn: "ফেয়ার এনাফ, আই ক্যান সি হোয়াই ইউ ফিল দ্যাট ওয়ে", slotValues: {}, topicArea: "social_interaction", stage: 3 }
          ]
        },
        {
          variant: "praising_argument",
          label: "Praising someone's argument",
          label_bn: "কারো যুক্তি প্রশংসা করা",
          formula: "Good point",
          formula_bn: "গুড পয়েন্ট",
          examples: [
            { en: "Good point", bn: "ভালো কথা", pronunciation_bn: "গুড পয়েন্ট", slotValues: {}, topicArea: "daily_life", stage: 1 },
            { en: "That's a good point actually", bn: "ওটা আসলে ভালো কথা", pronunciation_bn: "দ্যাটস আ গুড পয়েন্ট অ্যাকচুয়ালি", slotValues: {}, topicArea: "work", stage: 2 },
            { en: "You make a really good point there", bn: "তুমি সত্যিই ভালো কথা বলেছো", pronunciation_bn: "ইউ মেইক আ রিয়েলি গুড পয়েন্ট দেয়ার", slotValues: {}, topicArea: "work", stage: 3 }
          ]
        },
        {
          variant: "formal",
          label: "More formal versions",
          label_bn: "আরো ফর্মাল উপায়",
          formula: "That's a valid point / You have a point",
          formula_bn: "দ্যাটস আ ভ্যালিড পয়েন্ট / ইউ হ্যাভ আ পয়েন্ট",
          examples: [
            { en: "You have a point", bn: "তোমার কথায় যুক্তি আছে", pronunciation_bn: "ইউ হ্যাভ আ পয়েন্ট", slotValues: {}, topicArea: "work", stage: 1 },
            { en: "That's a valid point", bn: "ওটা যুক্তিসঙ্গত কথা", pronunciation_bn: "দ্যাটস আ ভ্যালিড পয়েন্ট", slotValues: {}, topicArea: "work", stage: 2 },
            { en: "I have to admit, you raise an excellent point", bn: "মানতে হবে, তুমি খুব ভালো কথা তুলেছো", pronunciation_bn: "আই হ্যাভ টু অ্যাডমিট, ইউ রেইজ অ্যান এক্সেলেন্ট পয়েন্ট", slotValues: {}, topicArea: "work", stage: 3 }
          ]
        }
      ],
      dialogueChains: [
        {
          id: "T36.7-dc1",
          title_bn: "বন্ধুর সাথে খাবার নিয়ে তর্ক",
          title_en: "Debating food with a friend",
          situation_bn: "তুমি আর বন্ধু কোথায় খাবে তা নিয়ে আলোচনা করছো",
          icon: "🍛",
          turns: [
            { speaker_bn: "তুমি", en: "Let's eat biryani today", bn: "চলো আজ বিরিয়ানি খাই", pronunciation_bn: "লেটস ইট বিরিয়ানি টুডে", patternId: "A5.1" },
            { speaker_bn: "বন্ধু", en: "But we had biryani yesterday!", bn: "কিন্তু আমরা গতকাল বিরিয়ানি খেয়েছি!", pronunciation_bn: "বাট উই হ্যাড বিরিয়ানি ইয়েস্টারডে!", patternId: "A8.1" },
            { speaker_bn: "তুমি", en: "Fair enough. What about fried rice?", bn: "ঠিকই বলেছো। ফ্রাইড রাইস কেমন হয়?", pronunciation_bn: "ফেয়ার এনাফ। হোয়াট অ্যাবাউট ফ্রাইড রাইস?", patternId: "T36.7" },
            { speaker_bn: "বন্ধু", en: "Good point, that's cheaper too", bn: "ভালো কথা, সেটা সস্তাও", pronunciation_bn: "গুড পয়েন্ট, দ্যাটস চিপার টু", patternId: "T36.7" }
          ],
          patternsUsed: ["A5.1", "A8.1", "T36.7"]
        }
      ],
      slots: [
        {
          name: "CONTEXT",
          description: "The situation where you accept reasoning",
          description_bn: "যে পরিস্থিতিতে তুমি কারো যুক্তি মেনে নিচ্ছো",
          acceptedTypes: ["statement"],
          examples: [
            "when someone has a good argument",
            "when you want to concede politely",
            "when someone makes a valid point"
          ]
        }
      ],
      examples: [
        {
          en: "Fair enough",
          bn: "ঠিকই বলেছো",
          pronunciation_bn: "ফেয়ার এনাফ",
          slotValues: {},
          topicArea: "daily_life",
          stage: 1,
          miniStory: { situation_bn: "তুমি চায়ের দোকানে বসে চা খেতে চাইলে। বন্ধু বলল, 'দেরি হয়ে যাবে।' তুমি বললে, 'Fair enough.'", icon: "☕" }
        },
        {
          en: "Good point",
          bn: "ভালো কথা",
          pronunciation_bn: "গুড পয়েন্ট",
          slotValues: {},
          topicArea: "daily_life",
          stage: 1,
          miniStory: { situation_bn: "তুমি ছাতা ছাড়া বের হতে চাইলে। তোমার মা বলল, 'আকাশে মেঘ আছে।' তুমি বললে, 'Good point.'", icon: "🌧️" }
        },
        {
          en: "That's fair",
          bn: "সেটা ঠিক",
          pronunciation_bn: "দ্যাটস ফেয়ার",
          slotValues: {},
          topicArea: "social_interaction",
          stage: 1
        },
        {
          en: "Fair point",
          bn: "ঠিক কথা",
          pronunciation_bn: "ফেয়ার পয়েন্ট",
          slotValues: {},
          topicArea: "work",
          stage: 1
        },
        {
          en: "Yeah, good point",
          bn: "হ্যাঁ, ভালো কথা",
          pronunciation_bn: "ইয়্যা, গুড পয়েন্ট",
          slotValues: {},
          topicArea: "daily_life",
          stage: 1
        },
        {
          en: "Fair enough, I didn't think of that",
          bn: "ঠিকই বলেছো, আমি ওটা ভাবিনি",
          pronunciation_bn: "ফেয়ার এনাফ, আই ডিডন্ট থিংক অফ দ্যাট",
          slotValues: {},
          topicArea: "daily_life",
          stage: 2,
          miniStory: { situation_bn: "তুমি রিকশায় যেতে চাইলে। বন্ধু বলল, 'বাস সস্তা হবে।' তুমি বললে, 'Fair enough, I didn't think of that.'", icon: "🚌" }
        },
        {
          en: "Good point, I agree",
          bn: "ভালো কথা, আমি রাজি",
          pronunciation_bn: "গুড পয়েন্ট, আই অ্যাগ্রি",
          slotValues: {},
          topicArea: "work",
          stage: 2
        },
        {
          en: "That's a good point actually",
          bn: "ওটা আসলে ভালো কথা",
          pronunciation_bn: "দ্যাটস আ গুড পয়েন্ট অ্যাকচুয়ালি",
          slotValues: {},
          topicArea: "work",
          stage: 2,
          miniStory: { situation_bn: "অফিসে সহকর্মী বলল, 'আগে রিপোর্ট জমা দিলে বস খুশি হবে।' তুমি বললে, 'That's a good point actually.'", icon: "💼" }
        },
        {
          en: "Fair enough, let's do it your way",
          bn: "ঠিকই বলেছো, তোমার মতো করি",
          pronunciation_bn: "ফেয়ার এনাফ, লেটস ডু ইট ইয়োর ওয়ে",
          slotValues: {},
          topicArea: "daily_life",
          stage: 2
        },
        {
          en: "You make a good point there",
          bn: "তুমি ভালো কথা বলেছো",
          pronunciation_bn: "ইউ মেইক আ গুড পয়েন্ট দেয়ার",
          slotValues: {},
          topicArea: "social_interaction",
          stage: 2
        },
        {
          en: "Fair enough, I can see why you feel that way",
          bn: "ঠিকই বলেছো, আমি বুঝতে পারছি তুমি কেন এরকম মনে করো",
          pronunciation_bn: "ফেয়ার এনাফ, আই ক্যান সি হোয়াই ইউ ফিল দ্যাট ওয়ে",
          slotValues: {},
          topicArea: "social_interaction",
          stage: 3,
          miniStory: { situation_bn: "তোমার ভাই রাগ করেছে কারণ তুমি তার ফোন ব্যবহার করেছো বিনা অনুমতিতে। তুমি বললে, 'Fair enough, I can see why you feel that way.'", icon: "📱" }
        },
        {
          en: "You raise an excellent point, I hadn't considered that",
          bn: "তুমি দারুণ কথা বলেছো, আমি ওটা ভাবিনি",
          pronunciation_bn: "ইউ রেইজ অ্যান এক্সেলেন্ট পয়েন্ট, আই হ্যাডন্ট কনসিডার্ড দ্যাট",
          slotValues: {},
          topicArea: "work",
          stage: 3
        },
        {
          en: "Fair enough, I suppose you're right about that",
          bn: "ঠিকই বলেছো, মনে হয় ওই ব্যাপারে তুমি ঠিক",
          pronunciation_bn: "ফেয়ার এনাফ, আই সাপোজ ইউয়ার রাইট অ্যাবাউট দ্যাট",
          slotValues: {},
          topicArea: "social_interaction",
          stage: 3
        },
        {
          en: "Good point, I'll take that into consideration",
          bn: "ভালো কথা, আমি সেটা বিবেচনায় রাখবো",
          pronunciation_bn: "গুড পয়েন্ট, আইল টেক দ্যাট ইনটু কনসিডারেশন",
          slotValues: {},
          topicArea: "work",
          stage: 3,
          miniStory: { situation_bn: "বস তোমাকে প্রোজেক্ট নিয়ে ফিডব্যাক দিল। তুমি বললে, 'Good point, I'll take that into consideration.'", icon: "💼" }
        },
        {
          en: "That's a valid point, I need to rethink my approach",
          bn: "ওটা যুক্তিসঙ্গত কথা, আমার পদ্ধতি পুনর্বিবেচনা করা দরকার",
          pronunciation_bn: "দ্যাটস আ ভ্যালিড পয়েন্ট, আই নিড টু রিথিংক মাই অ্যাপ্রোচ",
          slotValues: {},
          topicArea: "work",
          stage: 3
        }
      ]
    },
    {
      id: "T36.8",
      patternName: "For sure / Definitely",
      patternName_bn: "অবশ্যই বলা",
      concept_bn: "অবশ্যই",
      formula: "For sure / Definitely",
      formula_bn: "ফর শিওর / ডেফিনিটলি",
      formulaPronunciation_bn: "ফর শিওর / ডেফিনিটলি",
      usageNote: "Use 'For sure' or 'Definitely' to strongly agree or confirm something. Very common in casual conversation.",
      usageNote_bn: "কেউ কিছু বললে তুমি জোর দিয়ে রাজি হতে 'ফর শিওর' বা 'ডেফিনিটলি' বলো। মানে হলো — অবশ্যই, নিশ্চিত।",
      difficulty: "beginner",
      formality: "casual",
      bridgeRuleIds: ["BR1", "BR7"],
      conversionSteps: {
        banglaThought: "তুমি বাংলায় বলো: 'অবশ্যই'",
        steps: [
          { step_bn: "বাংলা চিন্তা থেকে শুরু করো — 'অবশ্যই'", result: "For sure" },
          { step_bn: "ফিক্সড ফ্রেজ বলো", result: "For sure" },
          { step_bn: "অন্য উপায়: ডেফিনিটলি", result: "Definitely" }
        ],
        finalResult: "For sure / Definitely",
        finalResult_bn: "অবশ্যই / নিশ্চিত"
      },
      commonMistakes: [
        { wrong: "For surely", correct: "For sure", explanation_bn: "'শিওরলি' বলতে হয় না। 'ফর শিওর' ফিক্সড ফ্রেজ — এভাবেই বলো।" },
        { wrong: "Of sure", correct: "For sure", explanation_bn: "'অফ শিওর' না। 'ফর শিওর' — 'ফর' দিয়ে শুরু।" },
        { wrong: "Definately", correct: "Definitely", explanation_bn: "বানান ভুল করা সহজ। ডেফিনিটলি — 'ইট' আছে মাঝে।" }
      ],
      simpleRules: [
        { rule_bn: "জোর দিয়ে হ্যাঁ বলতে 'ফর শিওর' বা 'ডেফিনিটলি' বলো", example: "For sure!" },
        { rule_bn: "দুটোই একই মানে — 'অবশ্যই'", example: "Definitely!" },
        { rule_bn: "প্রশ্নের উত্তরে বা একমত হতে ব্যবহার করো", example: "Are you coming? For sure!" }
      ],
      usageSituations: [
        { situation_bn: "কেউ জিজ্ঞেস করলে তুমি আসবে কিনা", situation_en: "When someone asks if you're coming", exampleSentence: "For sure!", exampleSentence_bn: "অবশ্যই!" },
        { situation_bn: "কারো কথায় জোর দিয়ে রাজি হতে", situation_en: "When strongly agreeing with someone", exampleSentence: "Definitely!", exampleSentence_bn: "নিশ্চিত!" },
        { situation_bn: "কাউকে নিশ্চিত করতে", situation_en: "When confirming something firmly", exampleSentence: "For sure, I'll be there", exampleSentence_bn: "অবশ্যই, আমি থাকবো" }
      ],
      sentenceBuilding: [
        { previousPatternId: "T36.4", previousFormula: "Sounds good / Sounds great", previousFormula_bn: "সাউন্ডস গুড / সাউন্ডস গ্রেট", combined: "Sounds great! For sure, count me in.", combined_bn: "দারুণ শোনাচ্ছে! অবশ্যই, আমাকে রাখো।" },
        { previousPatternId: "T36.1", previousFormula: "No worries", previousFormula_bn: "কোনো সমস্যা নেই", combined: "No worries! I'll definitely help.", combined_bn: "কোনো সমস্যা নেই! আমি অবশ্যই সাহায্য করবো।" }
      ],
      memoryTrick_bn: "'শিওর' মানে 'নিশ্চিত'। 'ফর শিওর' মানে 'একদম নিশ্চিত'। আর 'ডেফিনিটলি' মানে 'অবশ্যই'। বাংলায় যেমন বলো 'অবশ্যই!' — ইংরেজিতে তেমনি 'ফর শিওর!' বা 'ডেফিনিটলি!'",
      chunks: [
        { en: "For sure", bn: "অবশ্যই", pronunciation_bn: "ফর শিওর" },
        { en: "Definitely", bn: "অবশ্যই/নিশ্চিত", pronunciation_bn: "ডেফিনিটলি" },
        { en: "Absolutely", bn: "একদম", pronunciation_bn: "অ্যাবসলিউটলি" }
      ],
      wordMap: {
        bn_sentence: "অবশ্যই / নিশ্চিত",
        en_sentence: "For sure / Definitely",
        mappings: [
          { bn_word: "(জন্য)", en_word: "For", type: "added", bridgeRuleId: "BR1" },
          { bn_word: "নিশ্চিত", en_word: "sure", type: "direct", bridgeRuleId: "BR1" },
          { bn_word: "অবশ্যই", en_word: "Definitely", type: "direct", bridgeRuleId: "BR1" }
        ]
      },
      answerTemplates: [
        { situation_bn: "কেউ জিজ্ঞেস করলে তুমি যাবে কিনা", question: "Are you coming to the party?", question_bn: "তুমি পার্টিতে আসছো?", answerFormula: "For sure!", answerFormula_bn: "ফর শিওর!", pronunciation_bn: "ফর শিওর!", examples: [{ answer: "For sure! I wouldn't miss it.", answer_bn: "অবশ্যই! মিস করবো না।", pronunciation_bn: "ফর শিওর! আই উডন্ট মিস ইট।" }] },
        { situation_bn: "কেউ জিজ্ঞেস করলে তুমি রাজি কিনা", question: "Do you want to eat together?", question_bn: "একসাথে খাবে?", answerFormula: "Definitely!", answerFormula_bn: "ডেফিনিটলি!", pronunciation_bn: "ডেফিনিটলি!", examples: [{ answer: "Definitely! Where should we go?", answer_bn: "অবশ্যই! কোথায় যাবো?", pronunciation_bn: "ডেফিনিটলি! হোয়্যার শুড উই গো?" }] },
        { situation_bn: "কাউকে সাহায্য করতে রাজি হওয়া", question: "Can you help me with this?", question_bn: "এটায় আমাকে সাহায্য করতে পারবে?", answerFormula: "For sure, I'll help", answerFormula_bn: "ফর শিওর, আমি সাহায্য করবো", pronunciation_bn: "ফর শিওর, আইল হেল্প", examples: [{ answer: "For sure, no problem.", answer_bn: "অবশ্যই, কোনো সমস্যা নেই।", pronunciation_bn: "ফর শিওর, নো প্রবলেম।" }] }
      ],
      variations: [
        {
          variant: "strong_agreement",
          label: "Strong agreement",
          label_bn: "জোর দিয়ে রাজি হওয়া",
          formula: "For sure / Definitely",
          formula_bn: "ফর শিওর / ডেফিনিটলি",
          examples: [
            { en: "For sure!", bn: "অবশ্যই!", pronunciation_bn: "ফর শিওর!", slotValues: {}, topicArea: "daily_life", stage: 1 },
            { en: "Definitely, I'm in!", bn: "অবশ্যই, আমি আছি!", pronunciation_bn: "ডেফিনিটলি, আইম ইন!", slotValues: {}, topicArea: "social_interaction", stage: 2 },
            { en: "For sure, you can count on me for that", bn: "অবশ্যই, এই ব্যাপারে তুমি আমার উপর ভরসা করতে পারো", pronunciation_bn: "ফর শিওর, ইউ ক্যান কাউন্ট অন মি ফর দ্যাট", slotValues: {}, topicArea: "work", stage: 3 }
          ]
        },
        {
          variant: "confirmation",
          label: "Confirming plans",
          label_bn: "পরিকল্পনা নিশ্চিত করা",
          formula: "For sure / Definitely + plan",
          formula_bn: "ফর শিওর / ডেফিনিটলি + পরিকল্পনা",
          examples: [
            { en: "For sure, I'll be there", bn: "অবশ্যই, আমি থাকবো", pronunciation_bn: "ফর শিওর, আইল বি দেয়ার", slotValues: {}, topicArea: "social_interaction", stage: 1 },
            { en: "Definitely, let's meet at 5", bn: "অবশ্যই, ৫টায় দেখা করি", pronunciation_bn: "ডেফিনিটলি, লেটস মিট অ্যাট ফাইভ", slotValues: {}, topicArea: "daily_life", stage: 2 },
            { en: "For sure, I'll finish it before the deadline", bn: "অবশ্যই, ডেডলাইনের আগে শেষ করবো", pronunciation_bn: "ফর শিওর, আইল ফিনিশ ইট বিফোর দ্য ডেডলাইন", slotValues: {}, topicArea: "work", stage: 3 }
          ]
        },
        {
          variant: "alternatives",
          label: "Alternative expressions",
          label_bn: "আরো উপায়",
          formula: "Absolutely / Of course / 100%",
          formula_bn: "অ্যাবসলিউটলি / অফ কোর্স / হান্ড্রেড পার্সেন্ট",
          examples: [
            { en: "Absolutely!", bn: "একদম!", pronunciation_bn: "অ্যাবসলিউটলি!", slotValues: {}, topicArea: "daily_life", stage: 1 },
            { en: "Of course, no doubt about it", bn: "অবশ্যই, কোনো সন্দেহ নেই", pronunciation_bn: "অফ কোর্স, নো ডাউট অ্যাবাউট ইট", slotValues: {}, topicArea: "work", stage: 2 },
            { en: "One hundred percent, I'm completely on board with that", bn: "শতভাগ, আমি সম্পূর্ণ রাজি", pronunciation_bn: "ওয়ান হান্ড্রেড পার্সেন্ট, আইম কমপ্লিটলি অন বোর্ড উইথ দ্যাট", slotValues: {}, topicArea: "work", stage: 3 }
          ]
        }
      ],
      dialogueChains: [
        {
          id: "T36.8-dc1",
          title_bn: "বন্ধুর বিয়েতে যাওয়ার পরিকল্পনা",
          title_en: "Planning to attend friend's wedding",
          situation_bn: "বন্ধু তোমাকে তার বিয়েতে দাওয়াত দিচ্ছে",
          icon: "💒",
          turns: [
            { speaker_bn: "বন্ধু", en: "My wedding is next Friday. Will you come?", bn: "আমার বিয়ে পরের শুক্রবার। তুমি আসবে?", pronunciation_bn: "মাই ওয়েডিং ইজ নেক্সট ফ্রাইডে। উইল ইউ কাম?", patternId: "A8.1" },
            { speaker_bn: "তুমি", en: "For sure! I wouldn't miss it!", bn: "অবশ্যই! মিস করবো না!", pronunciation_bn: "ফর শিওর! আই উডন্ট মিস ইট!", patternId: "T36.8" },
            { speaker_bn: "বন্ধু", en: "Can you come a bit early to help?", bn: "একটু আগে এসে সাহায্য করতে পারবে?", pronunciation_bn: "ক্যান ইউ কাম আ বিট আর্লি টু হেল্প?", patternId: "G4.1" },
            { speaker_bn: "তুমি", en: "Definitely, no problem at all", bn: "অবশ্যই, কোনো সমস্যা নেই", pronunciation_bn: "ডেফিনিটলি, নো প্রবলেম অ্যাট অল", patternId: "T36.8" }
          ],
          patternsUsed: ["A8.1", "T36.8", "G4.1"]
        }
      ],
      slots: [
        {
          name: "CONTEXT",
          description: "The situation where you strongly agree",
          description_bn: "যে পরিস্থিতিতে তুমি জোর দিয়ে রাজি হচ্ছো",
          acceptedTypes: ["statement"],
          examples: [
            "when confirming you'll attend",
            "when strongly agreeing",
            "when promising to help"
          ]
        }
      ],
      examples: [
        {
          en: "For sure!",
          bn: "অবশ্যই!",
          pronunciation_bn: "ফর শিওর!",
          slotValues: {},
          topicArea: "daily_life",
          stage: 1,
          miniStory: { situation_bn: "বন্ধু জিজ্ঞেস করলো, 'চা খাবে?' তুমি বললে, 'For sure!'", icon: "☕" }
        },
        {
          en: "Definitely",
          bn: "অবশ্যই",
          pronunciation_bn: "ডেফিনিটলি",
          slotValues: {},
          topicArea: "daily_life",
          stage: 1,
          miniStory: { situation_bn: "সহকর্মী জিজ্ঞেস করলো, 'লাঞ্চে যাবে?' তুমি বললে, 'Definitely.'", icon: "🍽️" }
        },
        {
          en: "For sure, I'll come",
          bn: "অবশ্যই, আমি আসবো",
          pronunciation_bn: "ফর শিওর, আইল কাম",
          slotValues: {},
          topicArea: "social_interaction",
          stage: 1
        },
        {
          en: "Absolutely!",
          bn: "একদম!",
          pronunciation_bn: "অ্যাবসলিউটলি!",
          slotValues: {},
          topicArea: "daily_life",
          stage: 1
        },
        {
          en: "Of course!",
          bn: "অবশ্যই!",
          pronunciation_bn: "অফ কোর্স!",
          slotValues: {},
          topicArea: "daily_life",
          stage: 1
        },
        {
          en: "For sure, I'll be there on time",
          bn: "অবশ্যই, আমি সময়মতো থাকবো",
          pronunciation_bn: "ফর শিওর, আইল বি দেয়ার অন টাইম",
          slotValues: {},
          topicArea: "work",
          stage: 2,
          miniStory: { situation_bn: "বস বলল, 'কাল সকাল ৯টায় মিটিং।' তুমি বললে, 'For sure, I'll be there on time.'", icon: "💼" }
        },
        {
          en: "Definitely, that sounds like a great idea",
          bn: "অবশ্যই, দারুণ আইডিয়া মনে হচ্ছে",
          pronunciation_bn: "ডেফিনিটলি, দ্যাট সাউন্ডস লাইক আ গ্রেট আইডিয়া",
          slotValues: {},
          topicArea: "social_interaction",
          stage: 2,
          miniStory: { situation_bn: "বন্ধু বলল, 'চলো ঈদে কক্সবাজার যাই।' তুমি বললে, 'Definitely, that sounds like a great idea.'", icon: "🏖️" }
        },
        {
          en: "For sure, no doubt about it",
          bn: "অবশ্যই, কোনো সন্দেহ নেই",
          pronunciation_bn: "ফর শিওর, নো ডাউট অ্যাবাউট ইট",
          slotValues: {},
          topicArea: "daily_life",
          stage: 2
        },
        {
          en: "Definitely, I'm interested",
          bn: "অবশ্যই, আমি আগ্রহী",
          pronunciation_bn: "ডেফিনিটলি, আইম ইন্টারেস্টেড",
          slotValues: {},
          topicArea: "work",
          stage: 2
        },
        {
          en: "For sure, count me in",
          bn: "অবশ্যই, আমাকে রাখো",
          pronunciation_bn: "ফর শিওর, কাউন্ট মি ইন",
          slotValues: {},
          topicArea: "social_interaction",
          stage: 2
        },
        {
          en: "For sure, you can always count on me for that",
          bn: "অবশ্যই, এই ব্যাপারে তুমি সবসময় আমার উপর ভরসা করতে পারো",
          pronunciation_bn: "ফর শিওর, ইউ ক্যান অলওয়েজ কাউন্ট অন মি ফর দ্যাট",
          slotValues: {},
          topicArea: "social_interaction",
          stage: 3,
          miniStory: { situation_bn: "পাড়ার চাচা বলল, 'বাচ্চাদের পড়াতে একটু সাহায্য লাগবে।' তুমি বললে, 'For sure, you can always count on me for that.'", icon: "📚" }
        },
        {
          en: "Definitely, I'll make sure everything is ready",
          bn: "অবশ্যই, আমি নিশ্চিত করবো সব প্রস্তুত",
          pronunciation_bn: "ডেফিনিটলি, আইল মেক শিওর এভরিথিং ইজ রেডি",
          slotValues: {},
          topicArea: "work",
          stage: 3
        },
        {
          en: "For sure, I wouldn't miss it for the world",
          bn: "অবশ্যই, দুনিয়ার কিছুর জন্যও মিস করবো না",
          pronunciation_bn: "ফর শিওর, আই উডন্ট মিস ইট ফর দ্য ওয়ার্ল্ড",
          slotValues: {},
          topicArea: "social_interaction",
          stage: 3,
          miniStory: { situation_bn: "তোমার সবচেয়ে ভালো বন্ধুর বিয়ে। সে জিজ্ঞেস করলো, 'আসবে তো?' তুমি বললে, 'For sure, I wouldn't miss it for the world.'", icon: "💒" }
        },
        {
          en: "Absolutely, one hundred percent, without a doubt",
          bn: "একদম, শতভাগ, কোনো সন্দেহ ছাড়া",
          pronunciation_bn: "অ্যাবসলিউটলি, ওয়ান হান্ড্রেড পার্সেন্ট, উইদাউট আ ডাউট",
          slotValues: {},
          topicArea: "daily_life",
          stage: 3
        },
        {
          en: "For sure, I've already started preparing for it",
          bn: "অবশ্যই, আমি ইতিমধ্যে প্রস্তুতি শুরু করেছি",
          pronunciation_bn: "ফর শিওর, আইভ অলরেডি স্টার্টেড প্রিপেয়ারিং ফর ইট",
          slotValues: {},
          topicArea: "work",
          stage: 3
        }
      ]
    }
  ]
};
