import { PatternCategory } from "@/types/pattern";

export const categoryN8: PatternCategory = {
  id: "N8",
  slug: "degree-nuance-expressions",
  name: "Degree & Nuance Expressions",
  name_bn: "মাত্রা ও সূক্ষ্মতার ভাব প্রকাশ",
  description: "Express degrees of certainty, intensity, and nuance — from 'kind of' to 'absolutely'",
  description_bn: "নিশ্চয়তা, তীব্রতা এবং সূক্ষ্মতার মাত্রা প্রকাশ করো — 'একটু' থেকে 'একদম' পর্যন্ত",
  icon: "📊",
  group: "N",
  groupName: "Articles, Determiners & Quantifiers",
  groupName_bn: "আর্টিকেল, নির্ধারক এবং পরিমাণবাচক",
  difficulty: "intermediate",
  patterns: [
    {
      id: "N8.1",
      patternName: "Kind of / Sort of",
      patternName_bn: "একটু / এমনিতে বলা",
      concept_bn: "একটু",
      formula: "I kind of [VERB]",
      formula_bn: "আমি একটু [কাজ করি]",
      formulaPronunciation_bn: "আই কাইন্ড অফ [কাজ]",
      formality: "casual",
      difficulty: "intermediate",
      banglaStructureMap: "বাংলা: আমি একটু ভয় পাই → English: I kind of feel scared",
      bridgeRuleIds: ["BR1", "BR7"],
      usageNote: "Use 'kind of' or 'sort of' to soften statements, express partial agreement, or show uncertainty. Very common in casual conversation to sound less direct.",
      usageNote_bn: "কাইন্ড অফ বা সর্ট অফ ব্যবহার করো যখন তুমি একদম পাক্কা না, বা একটু নরম করে বলতে চাও। যেমন তুমি বলো 'আমি একটু ক্লান্ত', সেটা ইংরেজিতে 'I kind of feel tired' — এটা বেশি নরম শোনায়।",
      conversionSteps: {
        banglaThought: "আমি একটু ক্ষুধার্ত",
        steps: [
          {
            step_bn: "পুরো ভাবটা চিন্তা করো — একদম না, একটু একটু",
            result: "I'm hungry... but not fully"
          },
          {
            step_bn: "'kind of' যোগ করো নরম করতে",
            result: "I kind of hungry"
          },
          {
            step_bn: "'feel' বা আসল কাজটা ঠিক করো",
            result: "I kind of feel hungry"
          }
        ],
        finalResult: "I kind of feel hungry.",
        finalResult_bn: "আমি একটু ক্ষুধার্ত।"
      },
      commonMistakes: [
        {
          wrong: "I'm kind of tired very much",
          correct: "I'm kind of tired",
          explanation_bn: "'kind of' মানেই একটু একটু — 'very much' দিয়ে আবার জোরালো করা যায় না। একটা দিয়েই বলো।"
        },
        {
          wrong: "I kind of don't want",
          correct: "I don't really want",
          explanation_bn: "না বলতে হলে 'kind of' না, বরং 'not really' বলো — সেটা বেশি ঠিক শোনায়।"
        },
        {
          wrong: "I kind of very like it",
          correct: "I kind of like it",
          explanation_bn: "'kind of' আর 'very' একসাথে যায় না — 'kind of' মানেই একটু কম, 'very' মানে বেশি। একটাই বলবে।"
        }
      ],
      simpleRules: [
        {
          rule_bn: "'kind of' আর 'sort of' একই মানে — দুটোই তুমি ব্যবহার করতে পারো একটু নরম করে বলার জন্য",
          example: "I kind of agree = I sort of agree (দুটোই ঠিক)"
        },
        {
          rule_bn: "কাজের আগে বলো — 'kind of' তারপর তোমার কাজ",
          example: "I kind of understand (বুঝি), I kind of forgot (ভুলে গেছি)"
        },
        {
          rule_bn: "কথা বলার সময় 'kinda' বলে উচ্চারণ করো — লেখার সময় 'kind of' লেখো",
          example: "বলো: I kinda like it | লেখো: I kind of like it"
        }
      ],
      usageSituations: [
        {
          situation_bn: "দোকানে জিনিস পছন্দ হয়েছে কিন্তু একদম নিশ্চিত না",
          situation_en: "At a shop when you like something but not completely sure",
          exampleSentence: "I kind of like this shirt, but let me see the blue one too.",
          exampleSentence_bn: "আমি এই শার্টটা একটু পছন্দ করি, কিন্তু নীলটাও দেখাও।"
        },
        {
          situation_bn: "অফিসে মিটিং-এ অন্যের আইডিয়া নিয়ে সন্দেহ আছে",
          situation_en: "In office meeting when you have doubts about someone's idea",
          exampleSentence: "I kind of feel this plan won't work on time.",
          exampleSentence_bn: "আমার মনে হচ্ছে এই প্ল্যান সময়মত হবে না।"
        },
        {
          situation_bn: "বাসায় খাবার নিয়ে যখন একদম খুশি না কিন্তু খারাপও বলতে চাও না",
          situation_en: "At home about food when not fully happy but don't want to complain",
          exampleSentence: "The dal is kind of bland today.",
          exampleSentence_bn: "ডালটা আজকে একটু ফ্যাকাসে লাগছে।"
        }
      ],
      sentenceBuilding: [
        {
          previousPatternId: "A1.1",
          previousFormula: "I want [THING]",
          previousFormula_bn: "আমি [জিনিস] চাই",
          combined: "I kind of want to go home early today.",
          combined_bn: "আমি আজকে একটু তাড়াতাড়ি বাড়ি যেতে চাই।"
        },
        {
          previousPatternId: "C14.2",
          previousFormula: "I think [STATEMENT]",
          previousFormula_bn: "আমার মনে হয় [কথা]",
          combined: "I think the manager kind of knows about the delay.",
          combined_bn: "আমার মনে হয় ম্যানেজার হয়তো দেরির ব্যাপারটা জানেন।"
        }
      ],
      memoryTrick_bn: "বাংলায় যখন তুমি 'একটু', 'খানিকটা', 'হয়তো একটু' বলো, ইংরেজিতে সেটাই 'kind of' — যেমন 'আমি একটু ক্লান্ত' মানে 'I kind of feel tired'।",
      chunks: [
        {
          en: "kind of tired",
          bn: "একটু ক্লান্ত",
          pronunciation_bn: "কাইন্ড অফ টায়ার্ড"
        },
        {
          en: "kind of busy",
          bn: "একটু ব্যস্ত",
          pronunciation_bn: "কাইন্ড অফ বিজি"
        },
        {
          en: "kind of agree",
          bn: "একটু একমত",
          pronunciation_bn: "কাইন্ড অফ এগ্রি"
        }
      ],
      wordMap: {
        bn_sentence: "আমি একটু ক্লান্ত বোধ করছি",
        en_sentence: "I kind of feel tired",
        mappings: [
          { bn_word: "আমি", en_word: "I", type: "direct", bridgeRuleId: "BR1" },
          { bn_word: "একটু", en_word: "kind of", type: "direct", bridgeRuleId: "BR7" },
          { bn_word: "বোধ করছি", en_word: "feel", type: "direct" },
          { bn_word: "ক্লান্ত", en_word: "tired", type: "direct" }
        ]
      },
      answerTemplates: [
        {
          situation_bn: "কেউ জিজ্ঞেস করলো তুমি ক্লান্ত কিনা",
          question: "Are you tired?",
          question_bn: "তুমি কি ক্লান্ত?",
          answerFormula: "Kind of. / I kind of am.",
          answerFormula_bn: "একটু। / আমি একটু আছি।",
          pronunciation_bn: "কাইন্ড অফ। / আই কাইন্ড অফ অ্যাম।",
          examples: [
            {
              answer: "Kind of, but I can finish this.",
              answer_bn: "একটু, কিন্তু এটা শেষ করতে পারবো।",
              pronunciation_bn: "কাইন্ড অফ, বাট আই ক্যান ফিনিশ দিস।"
            },
            {
              answer: "I kind of am, yeah.",
              answer_bn: "হ্যাঁ, আমি একটু আছি।",
              pronunciation_bn: "আই কাইন্ড অফ অ্যাম, ইয়াহ।"
            },
            {
              answer: "Not really, I'm kind of okay.",
              answer_bn: "না তেমন না, আমি একটু ঠিক আছি।",
              pronunciation_bn: "নট রিয়েলি, আইম কাইন্ড অফ ওকে।"
            }
          ]
        },
        {
          situation_bn: "কেউ জানতে চাইলো তুমি তার আইডিয়া পছন্দ করেছো কিনা",
          question: "Do you like my idea?",
          question_bn: "তুমি কি আমার আইডিয়া পছন্দ করেছো?",
          answerFormula: "I kind of [LIKE/DON'T LIKE] it.",
          answerFormula_bn: "আমি একটু [পছন্দ/পছন্দ করি না] করি।",
          pronunciation_bn: "আই কাইন্ড অফ [লাইক/ডোন্ট লাইক] ইট।",
          examples: [
            {
              answer: "I kind of like it, but can we change the timing?",
              answer_bn: "আমি একটু পছন্দ করি, কিন্তু সময়টা বদলাতে পারি?",
              pronunciation_bn: "আই কাইন্ড অফ লাইক ইট, বাট ক্যান উই চেঞ্জ দ্য টাইমিং?"
            },
            {
              answer: "Kind of, yes. Let's try it.",
              answer_bn: "একটু হ্যাঁ। চেষ্টা করি।",
              pronunciation_bn: "কাইন্ড অফ, ইয়েস। লেটস ট্রাই ইট।"
            },
            {
              answer: "I kind of see the problem with it.",
              answer_bn: "আমি এর সমস্যাটা একটু বুঝতে পারছি।",
              pronunciation_bn: "আই কাইন্ড অফ সি দ্য প্রবলেম উইথ ইট।"
            }
          ]
        },
        {
          situation_bn: "রিকশাওয়ালা জিজ্ঞেস করলো তুমি রাস্তা চেনো কিনা",
          question: "Do you know the way?",
          question_bn: "তুমি রাস্তা চেনো?",
          answerFormula: "Kind of. / I kind of know it.",
          answerFormula_bn: "একটু। / আমি একটু চিনি।",
          pronunciation_bn: "কাইন্ড অফ। / আই কাইন্ড অফ নো ইট।",
          examples: [
            {
              answer: "Kind of, go straight then ask again.",
              answer_bn: "একটু চিনি, সোজা যাও তারপর আবার জিজ্ঞেস করো।",
              pronunciation_bn: "কাইন্ড অফ, গো স্ট্রেইট দেন আস্ক এগেইন।"
            },
            {
              answer: "I kind of know, but I'm not sure.",
              answer_bn: "আমি একটু জানি, কিন্তু নিশ্চিত না।",
              pronunciation_bn: "আই কাইন্ড অফ নো, বাট আইম নট শিওর।"
            },
            {
              answer: "Kind of. After the market, turn left.",
              answer_bn: "একটু। বাজারের পরে বামে ঘুরবে।",
              pronunciation_bn: "কাইন্ড অফ। আফটার দ্য মার্কেট, টার্ন লেফট।"
            }
          ]
        }
      ],
      variations: [
        {
          variant: "sort of",
          label: "Alternative form (same meaning)",
          label_bn: "আরেকভাবে বলা (একই মানে)",
          formula: "I sort of [VERB]",
          formula_bn: "আমি একটু [কাজ করি]",
          examples: [
            {
              en: "I sort of understand the problem now.",
              bn: "আমি এখন সমস্যাটা একটু বুঝতে পারছি।",
              pronunciation_bn: "আই সর্ট অফ আন্ডারস্ট্যান্ড দ্য প্রবলেম নাউ।",
              slotValues: { VERB: "understand" },
              stage: 1
            },
            {
              en: "She sort of knows about the plan.",
              bn: "সে প্ল্যান সম্পর্কে একটু জানে।",
              pronunciation_bn: "শি সর্ট অফ নোজ এবাউট দ্য প্ল্যান।",
              slotValues: { VERB: "knows" },
              stage: 2
            },
            {
              en: "The manager sort of agreed to extend the deadline.",
              bn: "ম্যানেজার ডেডলাইন বাড়াতে একটু রাজি হয়েছেন।",
              pronunciation_bn: "দ্য ম্যানেজার সর্ট অফ এগ্রিড টু এক্সটেন্ড দ্য ডেডলাইন।",
              slotValues: { VERB: "agreed" },
              stage: 3
            }
          ]
        },
        {
          variant: "past_tense",
          label: "Past events",
          label_bn: "আগের ঘটনা",
          formula: "I kind of [PAST VERB]",
          formula_bn: "আমি একটু [কাজ করেছিলাম]",
          examples: [
            {
              en: "I kind of forgot to bring the file.",
              bn: "আমি ফাইলটা আনতে একটু ভুলে গেছিলাম।",
              pronunciation_bn: "আই কাইন্ড অফ ফরগট টু ব্রিং দ্য ফাইল।",
              slotValues: { "PAST VERB": "forgot" },
              stage: 1
            },
            {
              en: "He kind of hinted at the problem yesterday.",
              bn: "সে গতকাল সমস্যার দিকে একটু ইশারা করেছিল।",
              pronunciation_bn: "হি কাইন্ড অফ হিন্টেড অ্যাট দ্য প্রবলেম ইয়েস্টারডে।",
              slotValues: { "PAST VERB": "hinted" },
              stage: 2
            },
            {
              en: "They kind of expected us to finish early.",
              bn: "তারা আশা করেছিল আমরা তাড়াতাড়ি শেষ করবো।",
              pronunciation_bn: "দে কাইন্ড অফ এক্সপেক্টেড আস টু ফিনিশ আর্লি।",
              slotValues: { "PAST VERB": "expected" },
              stage: 3
            }
          ]
        },
        {
          variant: "with_adjective",
          label: "With describing words",
          label_bn: "বর্ণনা শব্দ দিয়ে",
          formula: "It's kind of [ADJECTIVE]",
          formula_bn: "এটা একটু [বর্ণনা]",
          examples: [
            {
              en: "It's kind of expensive for me.",
              bn: "এটা আমার জন্য একটু দামি।",
              pronunciation_bn: "ইটস কাইন্ড অফ এক্সপেনসিভ ফর মি।",
              slotValues: { ADJECTIVE: "expensive" },
              stage: 1
            },
            {
              en: "The weather is kind of strange today.",
              bn: "আজকের আবহাওয়া একটু অদ্ভুত।",
              pronunciation_bn: "দ্য ওয়েদার ইজ কাইন্ড অফ স্ট্রেঞ্জ টুডে।",
              slotValues: { ADJECTIVE: "strange" },
              stage: 2
            },
            {
              en: "This solution is kind of complicated but effective.",
              bn: "এই সমাধানটা একটু জটিল কিন্তু কার্যকর।",
              pronunciation_bn: "দিস সলিউশন ইজ কাইন্ড অফ কম্প্লিকেটেড বাট ইফেক্টিভ।",
              slotValues: { ADJECTIVE: "complicated" },
              stage: 3
            }
          ]
        }
      ],
      dialogueChains: [
        {
          id: "N8.1-dialogue-1",
          title_bn: "গার্মেন্টস ফ্যাক্টরিতে নতুন অর্ডার নিয়ে আলোচনা",
          title_en: "Discussing new order at garments factory",
          situation_bn: "সুপারভাইজার আর অপারেটর নতুন ডিজাইন নিয়ে কথা বলছে",
          icon: "👔",
          turns: [
            {
              speaker_bn: "সুপারভাইজার",
              en: "What do you think about this new design?",
              bn: "এই নতুন ডিজাইন সম্পর্কে তোমার কী মনে হয়?",
              pronunciation_bn: "হোয়াট ডু ইউ থিংক এবাউট দিস নিউ ডিজাইন?",
              patternId: "C14.2"
            },
            {
              speaker_bn: "অপারেটর",
              en: "I kind of like it, but the stitching will take more time.",
              bn: "আমি একটু পছন্দ করি, কিন্তু সেলাইয়ে বেশি সময় লাগবে।",
              pronunciation_bn: "আই কাইন্ড অফ লাইক ইট, বাট দ্য স্টিচিং উইল টেক মোর টাইম।",
              patternId: "N8.1"
            },
            {
              speaker_bn: "সুপারভাইজার",
              en: "How much more time? Can we finish by Friday?",
              bn: "কতটা বেশি সময়? শুক্রবারের মধ্যে শেষ করতে পারবো?",
              pronunciation_bn: "হাউ মাচ মোর টাইম? ক্যান উই ফিনিশ বাই ফ্রাইডে?",
              patternId: "G2.1"
            },
            {
              speaker_bn: "অপারেটর",
              en: "I kind of feel it's possible if we start tomorrow morning.",
              bn: "আমার মনে হয় সম্ভব যদি আমরা কালকে সকালে শুরু করি।",
              pronunciation_bn: "আই কাইন্ড অফ ফিল ইটস পসিবল ইফ উই স্টার্ট টুমরো মর্নিং।",
              patternId: "N8.1"
            },
            {
              speaker_bn: "সুপারভাইজার",
              en: "Okay, I'll arrange the materials tonight.",
              bn: "ঠিক আছে, আমি আজ রাতে মালামাল ঠিক করে রাখি।",
              pronunciation_bn: "ওকে, আইল অ্যারেঞ্জ দ্য ম্যাটেরিয়ালস টুনাইট।",
              patternId: "F24.1"
            }
          ],
          patternsUsed: ["N8.1", "C14.2", "G2.1", "F24.1"]
        }
      ],
      slots: [
        {
          name: "VERB",
          description: "Any action or state",
          description_bn: "যেকোনো কাজ বা অবস্থা",
          acceptedTypes: ["verb", "verb phrase"],
          examples: ["feel tired", "understand", "agree", "like it", "know", "forgot"]
        }
      ],
      examples: [
        {
          en: "I kind of want to go home now.",
          bn: "আমি এখন বাড়ি যেতে চাই একটু।",
          pronunciation_bn: "আই কাইন্ড অফ ওয়ান্ট টু গো হোম নাউ।",
          slotValues: { VERB: "want" },
          topicArea: "daily_life",
          stage: 1,
          miniStory: {
            situation_bn: "অফিসে সারাদিন কাজ করে ক্লান্ত হয়ে গেছো",
            icon: "💼"
          }
        },
        {
          en: "I kind of like this shirt.",
          bn: "আমি এই শার্টটা একটু পছন্দ করি।",
          pronunciation_bn: "আই কাইন্ড অফ লাইক দিস শার্ট।",
          slotValues: { VERB: "like" },
          topicArea: "shopping",
          stage: 1
        },
        {
          en: "I kind of feel tired today.",
          bn: "আমি আজকে একটু ক্লান্ত বোধ করছি।",
          pronunciation_bn: "আই কাইন্ড অফ ফিল টায়ার্ড টুডে।",
          slotValues: { VERB: "feel tired" },
          topicArea: "health",
          stage: 1
        },
        {
          en: "I kind of forgot to call him.",
          bn: "আমি তাকে ফোন করতে একটু ভুলে গেছিলাম।",
          pronunciation_bn: "আই কাইন্ড অফ ফরগট টু কল হিম।",
          slotValues: { VERB: "forgot" },
          topicArea: "social",
          stage: 1,
          miniStory: {
            situation_bn: "বন্ধুকে ফোন করার কথা মনে ছিল না",
            icon: "📱"
          }
        },
        {
          en: "I kind of understand what you mean.",
          bn: "তুমি কী বলতে চাও আমি একটু বুঝতে পারছি।",
          pronunciation_bn: "আই কাইন্ড অফ আন্ডারস্ট্যান্ড হোয়াট ইউ মিন।",
          slotValues: { VERB: "understand" },
          topicArea: "communication",
          stage: 1
        },
        {
          en: "The bus is kind of late today.",
          bn: "বাসটা আজকে একটু দেরি হচ্ছে।",
          pronunciation_bn: "দ্য বাস ইজ কাইন্ড অফ লেট টুডে।",
          slotValues: { VERB: "is late" },
          topicArea: "transportation",
          stage: 2,
          miniStory: {
            situation_bn: "বাস স্ট্যান্ডে দাঁড়িয়ে ১৫ মিনিট হয়ে গেছে",
            icon: "🚌"
          }
        },
        {
          en: "I kind of agree with your plan.",
          bn: "আমি তোমার প্ল্যানের সাথে একটু একমত।",
          pronunciation_bn: "আই কাইন্ড অফ এগ্রি উইথ ইওর প্ল্যান।",
          slotValues: { VERB: "agree" },
          topicArea: "work",
          stage: 2
        },
        {
          en: "She kind of knows about the problem.",
          bn: "সে সমস্যাটা সম্পর্কে একটু জানে।",
          pronunciation_bn: "শি কাইন্ড অফ নোজ এবাউট দ্য প্রবলেম।",
          slotValues: { VERB: "knows" },
          topicArea: "work",
          stage: 2
        },
        {
          en: "The price is kind of high for me.",
          bn: "দামটা আমার জন্য একটু বেশি।",
          pronunciation_bn: "দ্য প্রাইস ইজ কাইন্ড অফ হাই ফর মি।",
          slotValues: { VERB: "is high" },
          topicArea: "shopping",
          stage: 2,
          miniStory: {
            situation_bn: "বাজারে জিনিস কিনতে গিয়ে দাম শুনে চমকে গেছো",
            icon: "🛒"
          }
        },
        {
          en: "I kind of expected this to happen.",
          bn: "আমি আশা করেছিলাম এটা হবে।",
          pronunciation_bn: "আই কাইন্ড অফ এক্সপেক্টেড দিস টু হ্যাপেন।",
          slotValues: { VERB: "expected" },
          topicArea: "daily_life",
          stage: 2
        },
        {
          en: "The manager kind of hinted at a salary increase next month.",
          bn: "ম্যানেজার আগামী মাসে বেতন বৃদ্ধির দিকে একটু ইশারা করেছেন।",
          pronunciation_bn: "দ্য ম্যানেজার কাইন্ড অফ হিন্টেড অ্যাট এ স্যালারি ইনক্রিজ নেক্সট মান্থ।",
          slotValues: { VERB: "hinted" },
          topicArea: "work",
          stage: 3,
          miniStory: {
            situation_bn: "মাসিক মিটিং-এ ম্যানেজার ভালো পারফরম্যান্সের কথা বলেছেন",
            icon: "💰"
          }
        },
        {
          en: "I kind of regret not taking that job offer.",
          bn: "আমি সেই চাকরির অফারটা না নেয়ার জন্য একটু অনুশোচনা করছি।",
          pronunciation_bn: "আই কাইন্ড অফ রিগ্রেট নট টেকিং দ্যাট জব অফার।",
          slotValues: { VERB: "regret" },
          topicArea: "career",
          stage: 3
        },
        {
          en: "The weather kind of reminds me of our village during monsoon.",
          bn: "আবহাওয়াটা আমাকে বর্ষাকালে আমাদের গ্রামের কথা মনে করিয়ে দিচ্ছে একটু।",
          pronunciation_bn: "দ্য ওয়েদার কাইন্ড অফ রিমাইন্ডস মি অফ আওয়ার ভিলেজ ডিউরিং মনসুন।",
          slotValues: { VERB: "reminds" },
          topicArea: "weather",
          stage: 3
        },
        {
          en: "I kind of sense that he's not telling the complete truth.",
          bn: "আমার মনে হচ্ছে সে সম্পূর্ণ সত্য বলছে না একটু।",
          pronunciation_bn: "আই কাইন্ড অফ সেন্স দ্যাট হিজ নট টেলিং দ্য কমপ্লিট ট্রুথ।",
          slotValues: { VERB: "sense" },
          topicArea: "social",
          stage: 3,
          miniStory: {
            situation_bn: "সহকর্মী কোনো একটা বিষয়ে ঘুরিয়ে কথা বলছে",
            icon: "🤔"
          }
        },
        {
          en: "They kind of assumed we would work overtime without asking.",
          bn: "তারা ধরে নিয়েছিল আমরা না জিজ্ঞেস করেই ওভারটাইম করবো।",
          pronunciation_bn: "দে কাইন্ড অফ অ্যাজিউমড উই উড ওয়ার্ক ওভারটাইম উইদাউট আস্কিং।",
          slotValues: { VERB: "assumed" },
          topicArea: "work",
          stage: 3
        }
      ]
    },
    {
      id: "N8.2",
      patternName: "Pretty much / Basically",
      patternName_bn: "মোটামুটি / মূলত বলা",
      concept_bn: "মোটামুটি",
      formula: "I pretty much [VERB]",
      formula_bn: "আমি মোটামুটি [কাজ করি]",
      formulaPronunciation_bn: "আই প্রিটি মাচ [কাজ]",
      formality: "casual",
      difficulty: "intermediate",
      banglaStructureMap: "বাংলা: আমি মোটামুটি বুঝি → English: I pretty much understand",
      bridgeRuleIds: ["BR1", "BR7"],
      usageNote: "Use 'pretty much' or 'basically' to mean 'almost completely' or 'in simple terms'. Both are very common in casual English to summarize or express near-certainty.",
      usageNote_bn: "প্রিটি মাচ বা বেসিক্যালি ব্যবহার করো যখন তুমি বলতে চাও 'মোটামুটি', 'প্রায় পুরোটা', বা 'সোজা কথায়'। যেমন তুমি বলো 'আমি মোটামুটি সব জানি', সেটা ইংরেজিতে 'I pretty much know everything' বা 'I basically know everything'।",
      conversionSteps: {
        banglaThought: "আমি মোটামুটি সব কাজ শেষ করেছি",
        steps: [
          {
            step_bn: "পুরো ভাবটা চিন্তা করো — প্রায় সব, মোটামুটি শেষ",
            result: "I finished almost all work"
          },
          {
            step_bn: "'pretty much' যোগ করো মোটামুটির ভাবটা আনতে",
            result: "I pretty much finished"
          },
          {
            step_bn: "বাকি অংশ ঠিক করো",
            result: "I pretty much finished all the work"
          }
        ],
        finalResult: "I pretty much finished all the work.",
        finalResult_bn: "আমি মোটামুটি সব কাজ শেষ করেছি।"
      },
      commonMistakes: [
        {
          wrong: "I'm pretty much very tired",
          correct: "I'm pretty much exhausted",
          explanation_bn: "'pretty much' মানেই প্রায় পুরোটা — আবার 'very' না দিয়ে সরাসরি বলো। অথবা 'exhausted' (একদম ক্লান্ত) বলো।"
        },
        {
          wrong: "I pretty much don't know",
          correct: "I don't really know / I hardly know",
          explanation_bn: "না জানলে 'pretty much' বলা যায় না — 'don't really' বা 'hardly' বলো।"
        },
        {
          wrong: "It's pretty much kind of done",
          correct: "It's pretty much done",
          explanation_bn: "'pretty much' আর 'kind of' একসাথে না — একটাই বলবে। 'pretty much' মানে প্রায় পুরো, 'kind of' মানে একটু।"
        }
      ],
      simpleRules: [
        {
          rule_bn: "'pretty much' আর 'basically' একই মানে — দুটোই তুমি ব্যবহার করতে পারো মোটামুটি বোঝাতে",
          example: "I pretty much agree = I basically agree (দুটোই ঠিক)"
        },
        {
          rule_bn: "কাজের আগে বলো — 'pretty much' তারপর তোমার কাজ, অথবা শুরুতে 'basically' বলো",
          example: "I pretty much finished / Basically, I finished (দুটোই ঠিক)"
        },
        {
          rule_bn: "'pretty much' মানে প্রায় ১০০%, 'kind of' মানে ৫০% — ফরক মনে রাখো",
          example: "I kind of know (৫০%) vs I pretty much know (৯৫%)"
        }
      ],
      usageSituations: [
        {
          situation_bn: "অফিসে কেউ জিজ্ঞেস করলো তুমি প্রজেক্ট শেষ করেছো কিনা",
          situation_en: "At office when someone asks if you finished the project",
          exampleSentence: "Pretty much, just need to check the final page.",
          exampleSentence_bn: "মোটামুটি, শুধু শেষ পাতাটা চেক করতে হবে।"
        },
        {
          situation_bn: "বাসায় রান্না হয়ে গেছে কিনা জানতে চাইলো কেউ",
          situation_en: "At home when someone asks if cooking is done",
          exampleSentence: "Basically done, just adding salt.",
          exampleSentence_bn: "মূলত হয়ে গেছে, শুধু লবণ দিচ্ছি।"
        },
        {
          situation_bn: "দোকানে কাপড় দেখে অন্যজন জানতে চাইলো এটা পছন্দ হয়েছে কিনা",
          situation_en: "At shop when someone asks if you like the cloth",
          exampleSentence: "I pretty much love it, I'll take this one.",
          exampleSentence_bn: "আমি মোটামুটি পছন্দ করেছি, এটাই নেবো।"
        }
      ],
      sentenceBuilding: [
        {
          previousPatternId: "C14.1",
          previousFormula: "I know [THING]",
          previousFormula_bn: "আমি [জিনিস] জানি",
          combined: "I pretty much know all the shortcuts in this area.",
          combined_bn: "আমি এই এলাকার সব শর্টকাট মোটামুটি জানি।"
        },
        {
          previousPatternId: "D3.1",
          previousFormula: "I finished [THING]",
          previousFormula_bn: "আমি [জিনিস] শেষ করেছি",
          combined: "I pretty much finished the report, just proofreading left.",
          combined_bn: "আমি রিপোর্ট মোটামুটি শেষ করেছি, শুধু প্রুফরিডিং বাকি।"
        }
      ],
      memoryTrick_bn: "বাংলায় যখন তুমি 'মোটামুটি', 'প্রায় সব', 'সোজা কথায়' বলো, ইংরেজিতে সেটাই 'pretty much' বা 'basically' — যেমন 'আমি মোটামুটি সব জানি' মানে 'I pretty much know everything'।",
      chunks: [
        {
          en: "pretty much done",
          bn: "মোটামুটি শেষ",
          pronunciation_bn: "প্রিটি মাচ ডান"
        },
        {
          en: "basically the same",
          bn: "মূলত একই",
          pronunciation_bn: "বেসিক্যালি দ্য সেইম"
        },
        {
          en: "pretty much everything",
          bn: "মোটামুটি সব",
          pronunciation_bn: "প্রিটি মাচ এভরিথিং"
        }
      ],
      wordMap: {
        bn_sentence: "আমি মোটামুটি সব জানি",
        en_sentence: "I pretty much know everything",
        mappings: [
          { bn_word: "আমি", en_word: "I", type: "direct", bridgeRuleId: "BR1" },
          { bn_word: "মোটামুটি", en_word: "pretty much", type: "direct", bridgeRuleId: "BR7" },
          { bn_word: "জানি", en_word: "know", type: "direct" },
          { bn_word: "সব", en_word: "everything", type: "direct" }
        ]
      },
      answerTemplates: [
        {
          situation_bn: "কেউ জিজ্ঞেস করলো তুমি কাজ শেষ করেছো কিনা",
          question: "Did you finish the work?",
          question_bn: "তুমি কি কাজ শেষ করেছো?",
          answerFormula: "Pretty much. / I pretty much did.",
          answerFormula_bn: "মোটামুটি। / আমি মোটামুটি করেছি।",
          pronunciation_bn: "প্রিটি মাচ। / আই প্রিটি মাচ ডিড।",
          examples: [
            {
              answer: "Pretty much, just a few details left.",
              answer_bn: "মোটামুটি, শুধু কয়েকটা ডিটেইল বাকি।",
              pronunciation_bn: "প্রিটি মাচ, জাস্ট এ ফিউ ডিটেইলস লেফট।"
            },
            {
              answer: "Basically yes, wrapping up now.",
              answer_bn: "মূলত হ্যাঁ, এখন গুটিয়ে নিচ্ছি।",
              pronunciation_bn: "বেসিক্যালি ইয়েস, র্যাপিং আপ নাউ।"
            },
            {
              answer: "I pretty much finished everything.",
              answer_bn: "আমি মোটামুটি সব শেষ করে ফেলেছি।",
              pronunciation_bn: "আই প্রিটি মাচ ফিনিশড এভরিথিং।"
            }
          ]
        },
        {
          situation_bn: "কেউ জানতে চাইলো তুমি পুরো শহরটা চেনো কিনা",
          question: "Do you know the whole city?",
          question_bn: "তুমি কি পুরো শহর চেনো?",
          answerFormula: "Pretty much. / I basically know it.",
          answerFormula_bn: "মোটামুটি। / আমি মূলত চিনি।",
          pronunciation_bn: "প্রিটি মাচ। / আই বেসিক্যালি নো ইট।",
          examples: [
            {
              answer: "Pretty much, been here for 10 years.",
              answer_bn: "মোটামুটি, এখানে ১০ বছর ধরে আছি।",
              pronunciation_bn: "প্রিটি মাচ, বিন হেয়ার ফর টেন ইয়ার্স।"
            },
            {
              answer: "Basically yes, except the new areas.",
              answer_bn: "মূলত হ্যাঁ, নতুন এলাকাগুলো ছাড়া।",
              pronunciation_bn: "বেসিক্যালি ইয়েস, এক্সসেপ্ট দ্য নিউ এরিয়াস।"
            },
            {
              answer: "I pretty much know all the main roads.",
              answer_bn: "আমি মোটামুটি সব মূল রাস্তা চিনি।",
              pronunciation_bn: "আই প্রিটি মাচ নো অল দ্য মেইন রোডস।"
            }
          ]
        },
        {
          situation_bn: "বন্ধু জানতে চাইলো তুমি তার পরিকল্পনার সাথে একমত কিনা",
          question: "Do you agree with my plan?",
          question_bn: "তুমি কি আমার পরিকল্পনার সাথে একমত?",
          answerFormula: "Pretty much. / Basically, yes.",
          answerFormula_bn: "মোটামুটি। / মূলত, হ্যাঁ।",
          pronunciation_bn: "প্রিটি মাচ। / বেসিক্যালি, ইয়েস।",
          examples: [
            {
              answer: "Pretty much, it sounds good to me.",
              answer_bn: "মোটামুটি, আমার কাছে ভালো লাগছে।",
              pronunciation_bn: "প্রিটি মাচ, ইট সাউন্ডস গুড টু মি।"
            },
            {
              answer: "Basically yes, let's do it.",
              answer_bn: "মূলত হ্যাঁ, এটা করি।",
              pronunciation_bn: "বেসিক্যালি ইয়েস, লেটস ডু ইট।"
            },
            {
              answer: "I pretty much support your idea.",
              answer_bn: "আমি তোমার আইডিয়াকে মোটামুটি সমর্থন করি।",
              pronunciation_bn: "আই প্রিটি মাচ সাপোর্ট ইওর আইডিয়া।"
            }
          ]
        }
      ],
      variations: [
        {
          variant: "basically",
          label: "Alternative form (same meaning)",
          label_bn: "আরেকভাবে বলা (একই মানে)",
          formula: "Basically, [STATEMENT]",
          formula_bn: "মূলত, [কথা]",
          examples: [
            {
              en: "Basically, we need more time for this project.",
              bn: "মূলত, এই প্রজেক্টের জন্য আমাদের আরও সময় দরকার।",
              pronunciation_bn: "বেসিক্যালি, উই নিড মোর টাইম ফর দিস প্রজেক্ট।",
              slotValues: { STATEMENT: "we need more time" },
              stage: 1
            },
            {
              en: "Basically, he's saying we should wait.",
              bn: "মূলত, সে বলছে আমাদের অপেক্ষা করা উচিত।",
              pronunciation_bn: "বেসিক্যালি, হিজ সেইয়িং উই শুড ওয়েইট।",
              slotValues: { STATEMENT: "he's saying we should wait" },
              stage: 2
            },
            {
              en: "Basically, the entire system needs to be upgraded.",
              bn: "মূলত, পুরো সিস্টেমটা আপগ্রেড করতে হবে।",
              pronunciation_bn: "বেসিক্যালি, দি এনটায়ার সিস্টেম নিডস টু বি আপগ্রেডেড।",
              slotValues: { STATEMENT: "the system needs upgrade" },
              stage: 3
            }
          ]
        },
        {
          variant: "past_tense",
          label: "Past events",
          label_bn: "আগের ঘটনা",
          formula: "I pretty much [PAST VERB]",
          formula_bn: "আমি মোটামুটি [কাজ করেছিলাম]",
          examples: [
            {
              en: "I pretty much finished everything yesterday.",
              bn: "আমি গতকাল মোটামুটি সব শেষ করেছিলাম।",
              pronunciation_bn: "আই প্রিটি মাচ ফিনিশড এভরিথিং ইয়েস্টারডে।",
              slotValues: { "PAST VERB": "finished" },
              stage: 1
            },
            {
              en: "We basically solved the problem last week.",
              bn: "আমরা গত সপ্তাহে মূলত সমস্যাটা সমাধান করেছিলাম।",
              pronunciation_bn: "উই বেসিক্যালি সলভড দ্য প্রবলেম লাস্ট উইক।",
              slotValues: { "PAST VERB": "solved" },
              stage: 2
            },
            {
              en: "They pretty much confirmed the delivery date this morning.",
              bn: "তারা আজ সকালে মোটামুটি ডেলিভারির তারিখ নিশ্চিত করেছে।",
              pronunciation_bn: "দে প্রিটি মাচ কনফার্মড দ্য ডেলিভারি ডেট দিস মর্নিং।",
              slotValues: { "PAST VERB": "confirmed" },
              stage: 3
            }
          ]
        },
        {
          variant: "with_adjective",
          label: "With describing words",
          label_bn: "বর্ণনা শব্দ দিয়ে",
          formula: "It's pretty much [ADJECTIVE]",
          formula_bn: "এটা মোটামুটি [বর্ণনা]",
          examples: [
            {
              en: "It's pretty much ready to go.",
              bn: "এটা মোটামুটি যাওয়ার জন্য প্রস্তুত।",
              pronunciation_bn: "ইটস প্রিটি মাচ রেডি টু গো।",
              slotValues: { ADJECTIVE: "ready" },
              stage: 1
            },
            {
              en: "The situation is basically under control now.",
              bn: "পরিস্থিতি এখন মূলত নিয়ন্ত্রণে।",
              pronunciation_bn: "দ্য সিচুয়েশন ইজ বেসিক্যালি আন্ডার কন্ট্রোল নাউ।",
              slotValues: { ADJECTIVE: "under control" },
              stage: 2
            },
            {
              en: "The whole process is pretty much automated at this point.",
              bn: "পুরো প্রক্রিয়াটা এই পর্যায়ে মোটামুটি স্বয়ংক্রিয়।",
              pronunciation_bn: "দ্য হোল প্রসেস ইজ প্রিটি মাচ অটোমেটেড অ্যাট দিস পয়েন্ট।",
              slotValues: { ADJECTIVE: "automated" },
              stage: 3
            }
          ]
        }
      ],
      dialogueChains: [
        {
          id: "N8.2-dialogue-1",
          title_bn: "বাসায় রান্নার প্রস্তুতি",
          title_en: "Cooking preparation at home",
          situation_bn: "বাবা মাকে জিজ্ঞেস করছে খাবার প্রস্তুতি নিয়ে",
          icon: "🍛",
          turns: [
            {
              speaker_bn: "বাবা",
              en: "Is dinner ready? Guests will arrive soon.",
              bn: "রাতের খাবার প্রস্তুত? মেহমানরা শিগগিরই আসবে।",
              pronunciation_bn: "ইজ ডিনার রেডি? গেস্টস উইল অ্যারাইভ সুন।",
              patternId: "G2.5"
            },
            {
              speaker_bn: "মা",
              en: "Pretty much done, just frying the fish now.",
              bn: "মোটামুটি হয়ে গেছে, এখন শুধু মাছ ভাজছি।",
              pronunciation_bn: "প্রিটি মাচ ডান, জাস্ট ফ্রাইং দ্য ফিশ নাউ।",
              patternId: "N8.2"
            },
            {
              speaker_bn: "বাবা",
              en: "Do we have enough rice?",
              bn: "আমাদের কি পর্যাপ্ত ভাত আছে?",
              pronunciation_bn: "ডু উই হ্যাভ ইনাফ রাইস?",
              patternId: "G2.5"
            },
            {
              speaker_bn: "মা",
              en: "Basically yes, I cooked extra just in case.",
              bn: "মূলত হ্যাঁ, আমি সতর্কতার জন্য বেশি রান্না করেছি।",
              pronunciation_bn: "বেসিক্যালি ইয়েস, আই কুকড এক্সট্রা জাস্ট ইন কেস।",
              patternId: "N8.2"
            },
            {
              speaker_bn: "বাবা",
              en: "Great! I'll set the table then.",
              bn: "দারুণ! তাহলে আমি টেবিল সাজাই।",
              pronunciation_bn: "গ্রেট! আইল সেট দ্য টেবল দেন।",
              patternId: "F24.1"
            }
          ],
          patternsUsed: ["N8.2", "G2.5", "F24.1"]
        }
      ],
      slots: [
        {
          name: "VERB",
          description: "Any action or state",
          description_bn: "যেকোনো কাজ বা অবস্থা",
          acceptedTypes: ["verb", "verb phrase"],
          examples: ["finished", "know", "understand", "agree", "done", "ready"]
        }
      ],
      examples: [
        {
          en: "I pretty much finished the report.",
          bn: "আমি রিপোর্টটা মোটামুটি শেষ করেছি।",
          pronunciation_bn: "আই প্রিটি মাচ ফিনিশড দ্য রিপোর্ট।",
          slotValues: { VERB: "finished" },
          topicArea: "work",
          stage: 1,
          miniStory: {
            situation_bn: "অফিসে সারাদিন কাজ করে প্রায় শেষের দিকে",
            icon: "📄"
          }
        },
        {
          en: "I basically know all the routes.",
          bn: "আমি মূলত সব রাস্তা চিনি।",
          pronunciation_bn: "আই বেসিক্যালি নো অল দ্য রুটস।",
          slotValues: { VERB: "know" },
          topicArea: "transportation",
          stage: 1
        },
        {
          en: "Pretty much everyone came to the meeting.",
          bn: "মোটামুটি সবাই মিটিং-এ এসেছিল।",
          pronunciation_bn: "প্রিটি মাচ এভরিওয়ান কেম টু দ্য মিটিং।",
          slotValues: { VERB: "came" },
          topicArea: "work",
          stage: 1
        },
        {
          en: "Basically, we need more time.",
          bn: "মূলত, আমাদের আরও সময় দরকার।",
          pronunciation_bn: "বেসিক্যালি, উই নিড মোর টাইম।",
          slotValues: { VERB: "need" },
          topicArea: "work",
          stage: 1,
          miniStory: {
            situation_bn: "প্রজেক্ট ডেডলাইন নিয়ে টিমের সাথে আলোচনা",
            icon: "⏰"
          }
        },
        {
          en: "I pretty much understand the problem.",
          bn: "আমি সমস্যাটা মোটামুটি বুঝতে পারছি।",
          pronunciation_bn: "আই প্রিটি মাচ আন্ডারস্ট্যান্ড দ্য প্রবলেম।",
          slotValues: { VERB: "understand" },
          topicArea: "daily_life",
          stage: 1
        },
        {
          en: "The work is basically done.",
          bn: "কাজটা মূলত হয়ে গেছে।",
          pronunciation_bn: "দ্য ওয়ার্ক ইজ বেসিক্যালি ডান।",
          slotValues: { VERB: "is done" },
          topicArea: "work",
          stage: 2,
          miniStory: {
            situation_bn: "ঠিকাদার বাড়ির সংস্কারের কাজ প্রায় শেষ করেছে",
            icon: "🏠"
          }
        },
        {
          en: "I pretty much agree with your suggestion.",
          bn: "আমি তোমার পরামর্শের সাথে মোটামুটি একমত।",
          pronunciation_bn: "আই প্রিটি মাচ এগ্রি উইথ ইওর সাজেশন।",
          slotValues: { VERB: "agree" },
          topicArea: "communication",
          stage: 2
        },
        {
          en: "We're basically on the same page now.",
          bn: "আমরা এখন মূলত একই বিষয়ে আছি।",
          pronunciation_bn: "উইআর বেসিক্যালি অন দ্য সেইম পেজ নাউ।",
          slotValues: { VERB: "are on the same page" },
          topicArea: "work",
          stage: 2
        },
        {
          en: "I pretty much covered everything in the presentation.",
          bn: "আমি প্রেজেন্টেশনে মোটামুটি সব কভার করেছি।",
          pronunciation_bn: "আই প্রিটি মাচ কভার্ড এভরিথিং ইন দ্য প্রেজেন্টেশন।",
          slotValues: { VERB: "covered" },
          topicArea: "work",
          stage: 2,
          miniStory: {
            situation_bn: "অফিসে ক্লায়েন্টের সামনে উপস্থাপনা শেষ হয়েছে",
            icon: "📊"
          }
        },
        {
          en: "Basically, the plan is to start next Monday.",
          bn: "মূলত, প্ল্যান হলো আগামী সোমবার শুরু করা।",
          pronunciation_bn: "বেসিক্যালি, দ্য প্ল্যান ইজ টু স্টার্ট নেক্সট মানডে।",
          slotValues: { VERB: "is to start" },
          topicArea: "planning",
          stage: 2
        },
        {
          en: "I pretty much memorized all the important dates for the exam.",
          bn: "আমি পরীক্ষার জন্য সব গুরুত্বপূর্ণ তারিখ মোটামুটি মুখস্থ করেছি।",
          pronunciation_bn: "আই প্রিটি মাচ মেমোরাইজড অল দ্য ইম্পরট্যান্ট ডেটস ফর দি এক্সাম।",
          slotValues: { VERB: "memorized" },
          topicArea: "education",
          stage: 3,
          miniStory: {
            situation_bn: "ইতিহাস পরীক্ষার আগের রাতে পড়ছো",
            icon: "📚"
          }
        },
        {
          en: "Basically, what he's saying is we need to cut costs.",
          bn: "মূলত, সে যা বলছে তা হলো আমাদের খরচ কমাতে হবে।",
          pronunciation_bn: "বেসিক্যালি, হোয়াট হিজ সেইয়িং ইজ উই নিড টু কাট কস্টস।",
          slotValues: { VERB: "is saying" },
          topicArea: "finance",
          stage: 3
        },
        {
          en: "I pretty much mastered this technique after six months of practice.",
          bn: "ছয় মাস অনুশীলনের পর আমি এই কৌশলটা মোটামুটি আয়ত্ত করেছি।",
          pronunciation_bn: "আই প্রিটি মাচ মাস্টার্ড দিস টেকনিক আফটার সিক্স মান্থস অফ প্র্যাক্টিস।",
          slotValues: { VERB: "mastered" },
          topicArea: "skills",
          stage: 3
        },
        {
          en: "We basically rebuilt the entire system from scratch.",
          bn: "আমরা মূলত পুরো সিস্টেমটা শুরু থেকে নতুন করে তৈরি করেছি।",
          pronunciation_bn: "উই বেসিক্যালি রিবিল্ট দি এনটায়ার সিস্টেম ফ্রম স্ক্র্যাচ।",
          slotValues: { VERB: "rebuilt" },
          topicArea: "technology",
          stage: 3,
          miniStory: {
            situation_bn: "আইটি টিম পুরোনো সফটওয়্যার নতুন করে বানিয়েছে",
            icon: "💻"
          }
        },
        {
          en: "I pretty much predicted this outcome based on the early data.",
          bn: "আমি প্রাথমিক তথ্যের ভিত্তিতে এই ফলাফল মোটামুটি আগেই বলে দিয়েছিলাম।",
          pronunciation_bn: "আই প্রিটি মাচ প্রিডিক্টেড দিস আউটকাম বেসড অন দ্য আর্লি ডাটা।",
          slotValues: { VERB: "predicted" },
          topicArea: "analytics",
          stage: 3
        }
      ]
    },
    {
      id: "N8.3",
      patternName: "Not really",
      patternName_bn: "তেমন না / আসলে না বলা",
      concept_bn: "তেমন না",
      formula: "I don't really [VERB]",
      formula_bn: "আমি তেমন [কাজ করি না]",
      formulaPronunciation_bn: "আই ডোন্ট রিয়েলি [কাজ]",
      formality: "casual",
      difficulty: "intermediate",
      banglaStructureMap: "বাংলা: আমি তেমন পছন্দ করি না → English: I don't really like it",
      bridgeRuleIds: ["BR1", "BR5"],
      usageNote: "Use 'not really' to politely disagree, express mild negative feelings, or soften a 'no' answer. Very common in casual conversation to avoid being too direct.",
      usageNote_bn: "নট রিয়েলি ব্যবহার করো যখন তুমি নরম করে 'না' বলতে চাও, বা সরাসরি না বলতে চাও না। যেমন তুমি বলো 'আমি তেমন পছন্দ করি না', সেটা ইংরেজিতে 'I don't really like it' — এটা সরাসরি 'I don't like it' বলার চেয়ে নরম।",
      conversionSteps: {
        banglaThought: "আমি তেমন বুঝি না",
        steps: [
          {
            step_bn: "পুরো ভাবটা চিন্তা করো — একদম বুঝি না তা নয়, কিন্তু তেমন না",
            result: "I don't understand... but not completely no"
          },
          {
            step_bn: "'not really' যোগ করো নরম করতে",
            result: "I don't really understand"
          },
          {
            step_bn: "বাকি অংশ ঠিক করো",
            result: "I don't really understand"
          }
        ],
        finalResult: "I don't really understand.",
        finalResult_bn: "আমি তেমন বুঝি না।"
      },
      commonMistakes: [
        {
          wrong: "I'm not really very like it",
          correct: "I don't really like it",
          explanation_bn: "'not really' এর সাথে 'very' যায় না — আর 'not really like' বলো, 'am not really' না।"
        },
        {
          wrong: "I not really understand",
          correct: "I don't really understand",
          explanation_bn: "'not really' এর আগে 'don't' বা 'doesn't' দিতে হয় — 'I not really' ভুল।"
        },
        {
          wrong: "Not really I want to go",
          correct: "I don't really want to go",
          explanation_bn: "'not really' আগে বসে না — 'I don't really' এভাবে সাজাও।"
        }
      ],
      simpleRules: [
        {
          rule_bn: "'not really' মানে 'তেমন না' — একদম না নয়, কিন্তু বেশি হ্যাঁও না",
          example: "Do you like it? Not really. (তেমন পছন্দ না)"
        },
        {
          rule_bn: "'don't really' বা 'doesn't really' দিয়ে শুরু করো, তারপর তোমার কাজ",
          example: "I don't really know / She doesn't really care"
        },
        {
          rule_bn: "প্রশ্নের উত্তরে শুধু 'Not really' বললেও হয় — পুরো বাক্য না বললেও চলে",
          example: "Are you tired? Not really. (তেমন না)"
        }
      ],
      usageSituations: [
        {
          situation_bn: "দোকানে কেউ জিজ্ঞেস করলো একটা রং পছন্দ হয়েছে কিনা",
          situation_en: "At shop when someone asks if you like a color",
          exampleSentence: "Not really, do you have it in blue?",
          exampleSentence_bn: "তেমন না, নীলে আছে?"
        },
        {
          situation_bn: "অফিসে কেউ জানতে চাইলো তুমি কোনো সফটওয়্যার জানো কিনা",
          situation_en: "At office when someone asks if you know a software",
          exampleSentence: "I don't really know Excel that well.",
          exampleSentence_bn: "আমি এক্সেল তেমন ভালো জানি না।"
        },
        {
          situation_bn: "বন্ধু জিজ্ঞেস করলো তুমি ক্লান্ত কিনা",
          situation_en: "Friend asks if you're tired",
          exampleSentence: "Not really, I can walk a bit more.",
          exampleSentence_bn: "তেমন না, আমি আরেকটু হাঁটতে পারবো।"
        }
      ],
      sentenceBuilding: [
        {
          previousPatternId: "A1.2",
          previousFormula: "I like [THING]",
          previousFormula_bn: "আমি [জিনিস] পছন্দ করি",
          combined: "I don't really like spicy food.",
          combined_bn: "আমি ঝাল খাবার তেমন পছন্দ করি না।"
        },
        {
          previousPatternId: "C14.1",
          previousFormula: "I know [THING]",
          previousFormula_bn: "আমি [জিনিস] জানি",
          combined: "I don't really know him that well.",
          combined_bn: "আমি তাকে তেমন ভালো চিনি না।"
        }
      ],
      memoryTrick_bn: "বাংলায় যখন তুমি 'তেমন না', 'আসলে না', 'খুব একটা না' বলো, ইংরেজিতে সেটাই 'not really' — যেমন 'আমি তেমন পছন্দ করি না' মানে 'I don't really like it'।",
      chunks: [
        {
          en: "not really sure",
          bn: "তেমন নিশ্চিত না",
          pronunciation_bn: "নট রিয়েলি শিওর"
        },
        {
          en: "don't really care",
          bn: "তেমন পাত্তা দিই না",
          pronunciation_bn: "ডোন্ট রিয়েলি কেয়ার"
        },
        {
          en: "not really interested",
          bn: "তেমন আগ্রহী না",
          pronunciation_bn: "নট রিয়েলি ইন্টারেস্টেড"
        }
      ],
      wordMap: {
        bn_sentence: "আমি তেমন বুঝি না",
        en_sentence: "I don't really understand",
        mappings: [
          { bn_word: "আমি", en_word: "I", type: "direct", bridgeRuleId: "BR1" },
          { bn_word: "না", en_word: "don't", type: "direct", bridgeRuleId: "BR5" },
          { bn_word: "তেমন", en_word: "really", type: "direct", bridgeRuleId: "BR7" },
          { bn_word: "বুঝি", en_word: "understand", type: "direct" }
        ]
      },
      answerTemplates: [
        {
          situation_bn: "কেউ জিজ্ঞেস করলো তুমি ক্লান্ত কিনা",
          question: "Are you tired?",
          question_bn: "তুমি কি ক্লান্ত?",
          answerFormula: "Not really. / I'm not really tired.",
          answerFormula_bn: "তেমন না। / আমি তেমন ক্লান্ত না।",
          pronunciation_bn: "নট রিয়েলি। / আইম নট রিয়েলি টায়ার্ড।",
          examples: [
            {
              answer: "Not really, I'm okay.",
              answer_bn: "তেমন না, আমি ঠিক আছি।",
              pronunciation_bn: "নট রিয়েলি, আইম ওকে।"
            },
            {
              answer: "I'm not really tired, just a bit sleepy.",
              answer_bn: "আমি তেমন ক্লান্ত না, শুধু একটু ঘুম পাচ্ছে।",
              pronunciation_bn: "আইম নট রিয়েলি টায়ার্ড, জাস্ট এ বিট স্লিপি।"
            },
            {
              answer: "Not really, let's continue.",
              answer_bn: "তেমন না, চলো এগিয়ে যাই।",
              pronunciation_bn: "নট রিয়েলি, লেটস কন্টিনিউ।"
            }
          ]
        },
        {
          situation_bn: "কেউ জানতে চাইলো তুমি কোনো জায়গা পছন্দ করেছো কিনা",
          question: "Do you like this place?",
          question_bn: "তুমি কি এই জায়গাটা পছন্দ করো?",
          answerFormula: "Not really. / I don't really like it.",
          answerFormula_bn: "তেমন না। / আমি তেমন পছন্দ করি না।",
          pronunciation_bn: "নট রিয়েলি। / আই ডোন্ট রিয়েলি লাইক ইট।",
          examples: [
            {
              answer: "Not really, it's too crowded.",
              answer_bn: "তেমন না, এখানে খুব ভিড়।",
              pronunciation_bn: "নট রিয়েলি, ইটস টু ক্রাউডেড।"
            },
            {
              answer: "I don't really like it, let's try another one.",
              answer_bn: "আমি তেমন পছন্দ করি না, অন্যটা চেষ্টা করি।",
              pronunciation_bn: "আই ডোন্ট রিয়েলি লাইক ইট, লেটস ট্রাই এনাদার ওয়ান।"
            },
            {
              answer: "Not really my type of place.",
              answer_bn: "আমার ধরনের জায়গা তেমন না।",
              pronunciation_bn: "নট রিয়েলি মাই টাইপ অফ প্লেস।"
            }
          ]
        },
        {
          situation_bn: "দোকানদার জিজ্ঞেস করলো তুমি কোনো জিনিস চাও কিনা",
          question: "Do you need anything else?",
          question_bn: "তোমার আর কিছু লাগবে?",
          answerFormula: "Not really. / I don't really need anything.",
          answerFormula_bn: "তেমন না। / আমার তেমন কিছু লাগবে না।",
          pronunciation_bn: "নট রিয়েলি। / আই ডোন্ট রিয়েলি নিড এনিথিং।",
          examples: [
            {
              answer: "Not really, that's all for today.",
              answer_bn: "তেমন না, আজকের জন্য এইটুকুই।",
              pronunciation_bn: "নট রিয়েলি, দ্যাটস অল ফর টুডে।"
            },
            {
              answer: "I don't really need anything else, thanks.",
              answer_bn: "আমার তেমন আর কিছু লাগবে না, ধন্যবাদ।",
              pronunciation_bn: "আই ডোন্ট রিয়েলি নিড এনিথিং এল্স, থ্যাংকস।"
            },
            {
              answer: "Not really, just this.",
              answer_bn: "তেমন না, শুধু এটাই।",
              pronunciation_bn: "নট রিয়েলি, জাস্ট দিস।"
            }
          ]
        }
      ],
      variations: [
        {
          variant: "not_really_alone",
          label: "Short answer form",
          label_bn: "ছোট উত্তর",
          formula: "Not really.",
          formula_bn: "তেমন না।",
          examples: [
            {
              en: "Are you hungry? Not really.",
              bn: "তুমি কি ক্ষুধার্ত? তেমন না।",
              pronunciation_bn: "আর ইউ হাংরি? নট রিয়েলি।",
              slotValues: {},
              stage: 1
            },
            {
              en: "Do you understand the problem? Not really.",
              bn: "তুমি কি সমস্যাটা বুঝতে পারছো? তেমন না।",
              pronunciation_bn: "ডু ইউ আন্ডারস্ট্যান্ড দ্য প্রবলেম? নট রিয়েলি।",
              slotValues: {},
              stage: 2
            },
            {
              en: "Were you satisfied with the results? Not really.",
              bn: "তুমি কি ফলাফল নিয়ে সন্তুষ্ট ছিলে? তেমন না।",
              pronunciation_bn: "ওয়ার ইউ স্যাটিসফাইড উইথ দ্য রিজাল্টস? নট রিয়েলি।",
              slotValues: {},
              stage: 3
            }
          ]
        },
        {
          variant: "past_tense",
          label: "Past events",
          label_bn: "আগের ঘটনা",
          formula: "I didn't really [VERB]",
          formula_bn: "আমি তেমন [কাজ করিনি]",
          examples: [
            {
              en: "I didn't really enjoy the movie.",
              bn: "আমি সিনেমাটা তেমন উপভোগ করিনি।",
              pronunciation_bn: "আই ডিডন্ট রিয়েলি এনজয় দ্য মুভি।",
              slotValues: { VERB: "enjoy" },
              stage: 1
            },
            {
              en: "She didn't really pay attention during the meeting.",
              bn: "সে মিটিং-এ তেমন মনোযোগ দেয়নি।",
              pronunciation_bn: "শি ডিডন্ট রিয়েলি পে অ্যাটেনশন ডিউরিং দ্য মিটিং।",
              slotValues: { VERB: "pay attention" },
              stage: 2
            },
            {
              en: "They didn't really consider the budget constraints before planning.",
              bn: "তারা পরিকল্পনা করার আগে বাজেট সীমাবদ্ধতা তেমন বিবেচনা করেনি।",
              pronunciation_bn: "দে ডিডন্ট রিয়েলি কনসিডার দ্য বাজেট কনস্ট্রেইন্টস বিফোর প্ল্যানিং।",
              slotValues: { VERB: "consider" },
              stage: 3
            }
          ]
        },
        {
          variant: "with_adjective",
          label: "With describing words",
          label_bn: "বর্ণনা শব্দ দিয়ে",
          formula: "I'm not really [ADJECTIVE]",
          formula_bn: "আমি তেমন [বর্ণনা] না",
          examples: [
            {
              en: "I'm not really hungry right now.",
              bn: "আমি এখন তেমন ক্ষুধার্ত না।",
              pronunciation_bn: "আইম নট রিয়েলি হাংরি রাইট নাউ।",
              slotValues: { ADJECTIVE: "hungry" },
              stage: 1
            },
            {
              en: "She's not really interested in sports.",
              bn: "সে খেলাধুলায় তেমন আগ্রহী না।",
              pronunciation_bn: "শিজ নট রিয়েলি ইন্টারেস্টেড ইন স্পোর্টস।",
              slotValues: { ADJECTIVE: "interested" },
              stage: 2
            },
            {
              en: "The solution is not really practical for our current situation.",
              bn: "সমাধানটা আমাদের বর্তমান পরিস্থিতির জন্য তেমন বাস্তবসম্মত না।",
              pronunciation_bn: "দ্য সলিউশন ইজ নট রিয়েলি প্র্যাক্টিক্যাল ফর আওয়ার কারেন্ট সিচুয়েশন।",
              slotValues: { ADJECTIVE: "practical" },
              stage: 3
            }
          ]
        }
      ],
      dialogueChains: [
        {
          id: "N8.3-dialogue-1",
          title_bn: "ফার্মেসিতে ওষুধ কিনতে",
          title_en: "Buying medicine at pharmacy",
          situation_bn: "ফার্মাসিস্ট রোগীকে ওষুধ সম্পর্কে জিজ্ঞেস করছে",
          icon: "💊",
          turns: [
            {
              speaker_bn: "ফার্মাসিস্ট",
              en: "Are you feeling better after taking the medicine?",
              bn: "ওষুধ খাওয়ার পরে কি ভালো বোধ করছেন?",
              pronunciation_bn: "আর ইউ ফিলিং বেটার আফটার টেকিং দ্য মেডিসিন?",
              patternId: "G2.5"
            },
            {
              speaker_bn: "রোগী",
              en: "Not really, the fever is still there.",
              bn: "তেমন না, জ্বর এখনও আছে।",
              pronunciation_bn: "নট রিয়েলি, দ্য ফিভার ইজ স্টিল দেয়ার।",
              patternId: "N8.3"
            },
            {
              speaker_bn: "ফার্মাসিস্ট",
              en: "How many days have you been taking it?",
              bn: "কতদিন ধরে খাচ্ছেন?",
              pronunciation_bn: "হাউ মেনি ডেজ হ্যাভ ইউ বিন টেকিং ইট?",
              patternId: "G2.1"
            },
            {
              speaker_bn: "রোগী",
              en: "Two days, but I don't really feel any improvement.",
              bn: "দুই দিন, কিন্তু আমি তেমন কোনো উন্নতি বোধ করছি না।",
              pronunciation_bn: "টু ডেজ, বাট আই ডোন্ট রিয়েলি ফিল এনি ইমপ্রুভমেন্ট।",
              patternId: "N8.3"
            },
            {
              speaker_bn: "ফার্মাসিস্ট",
              en: "You should visit a doctor then.",
              bn: "তাহলে আপনার ডাক্তারের কাছে যাওয়া উচিত।",
              pronunciation_bn: "ইউ শুড ভিজিট এ ডক্টর দেন।",
              patternId: "S7.1"
            }
          ],
          patternsUsed: ["N8.3", "G2.5", "G2.1", "S7.1"]
        }
      ],
      slots: [
        {
          name: "VERB",
          description: "Any action or state",
          description_bn: "যেকোনো কাজ বা অবস্থা",
          acceptedTypes: ["verb", "verb phrase"],
          examples: ["like", "understand", "know", "care", "need", "want"]
        }
      ],
      examples: [
        {
          en: "I don't really like spicy food.",
          bn: "আমি ঝাল খাবার তেমন পছন্দ করি না।",
          pronunciation_bn: "আই ডোন্ট রিয়েলি লাইক স্পাইসি ফুড।",
          slotValues: { VERB: "like" },
          topicArea: "food",
          stage: 1,
          miniStory: {
            situation_bn: "রেস্টুরেন্টে খাবার অর্ডার করার সময়",
            icon: "🍽️"
          }
        },
        {
          en: "I don't really know him.",
          bn: "আমি তাকে তেমন চিনি না।",
          pronunciation_bn: "আই ডোন্ট রিয়েলি নো হিম।",
          slotValues: { VERB: "know" },
          topicArea: "social",
          stage: 1
        },
        {
          en: "Not really sure about this.",
          bn: "এটা নিয়ে তেমন নিশ্চিত না।",
          pronunciation_bn: "নট রিয়েলি শিওর এবাউট দিস।",
          slotValues: { VERB: "sure" },
          topicArea: "daily_life",
          stage: 1
        },
        {
          en: "I don't really care about the color.",
          bn: "আমি রং নিয়ে তেমন চিন্তা করি না।",
          pronunciation_bn: "আই ডোন্ট রিয়েলি কেয়ার এবাউট দ্য কালার।",
          slotValues: { VERB: "care" },
          topicArea: "shopping",
          stage: 1,
          miniStory: {
            situation_bn: "দোকানে শার্ট কিনতে গিয়ে দোকানদার রং জিজ্ঞেস করছে",
            icon: "👕"
          }
        },
        {
          en: "I don't really need new clothes.",
          bn: "আমার তেমন নতুন কাপড় দরকার নেই।",
          pronunciation_bn: "আই ডোন্ট রিয়েলি নিড নিউ ক্লোদস।",
          slotValues: { VERB: "need" },
          topicArea: "shopping",
          stage: 1
        },
        {
          en: "She doesn't really understand the problem.",
          bn: "সে সমস্যাটা তেমন বোঝে না।",
          pronunciation_bn: "শি ডাজন্ট রিয়েলি আন্ডারস্ট্যান্ড দ্য প্রবলেম।",
          slotValues: { VERB: "understand" },
          topicArea: "communication",
          stage: 2,
          miniStory: {
            situation_bn: "অফিসে কলিগের সাথে টেকনিক্যাল বিষয় নিয়ে আলোচনা",
            icon: "💬"
          }
        },
        {
          en: "I don't really want to go out tonight.",
          bn: "আমি আজ রাতে তেমন বাইরে যেতে চাই না।",
          pronunciation_bn: "আই ডোন্ট রিয়েলি ওয়ান্ট টু গো আউট টুনাইট।",
          slotValues: { VERB: "want" },
          topicArea: "social",
          stage: 2
        },
        {
          en: "Not really interested in watching cricket.",
          bn: "ক্রিকেট দেখতে তেমন আগ্রহী না।",
          pronunciation_bn: "নট রিয়েলি ইন্টারেস্টেড ইন ওয়াচিং ক্রিকেট।",
          slotValues: { VERB: "interested" },
          topicArea: "entertainment",
          stage: 2
        },
        {
          en: "I don't really follow politics much.",
          bn: "আমি রাজনীতি তেমন ফলো করি না।",
          pronunciation_bn: "আই ডোন্ট রিয়েলি ফলো পলিটিক্স মাচ।",
          slotValues: { VERB: "follow" },
          topicArea: "current_affairs",
          stage: 2,
          miniStory: {
            situation_bn: "চায়ের দোকানে রাজনীতি নিয়ে আলোচনা চলছে",
            icon: "☕"
          }
        },
        {
          en: "The bus doesn't really come on time here.",
          bn: "বাসটা এখানে তেমন সময়মত আসে না।",
          pronunciation_bn: "দ্য বাস ডাজন্ট রিয়েলি কাম অন টাইম হেয়ার।",
          slotValues: { VERB: "come on time" },
          topicArea: "transportation",
          stage: 2
        },
        {
          en: "I don't really comprehend why they rejected the proposal outright.",
          bn: "আমি তেমন বুঝতে পারছি না কেন তারা প্রস্তাবটা একেবারে প্রত্যাখ্যান করলো।",
          pronunciation_bn: "আই ডোন্ট রিয়েলি কমপ্রিহেন্ড হোয়াই দে রিজেক্টেড দ্য প্রপোজাল আউটরাইট।",
          slotValues: { VERB: "comprehend" },
          topicArea: "work",
          stage: 3,
          miniStory: {
            situation_bn: "অফিসে প্রজেক্ট প্রপোজাল নাকচ হয়ে গেছে",
            icon: "📋"
          }
        },
        {
          en: "We don't really have the resources to implement this system right now.",
          bn: "এই সিস্টেম চালু করার জন্য আমাদের কাছে তেমন সম্পদ নেই এই মুহূর্তে।",
          pronunciation_bn: "উই ডোন্ট রিয়েলি হ্যাভ দ্য রিসোর্সেস টু ইমপ্লিমেন্ট দিস সিস্টেম রাইট নাউ।",
          slotValues: { VERB: "have" },
          topicArea: "technology",
          stage: 3
        },
        {
          en: "The new policy doesn't really address the core issues we're facing.",
          bn: "নতুন নীতিটা আমরা যে মূল সমস্যায় পড়ে আছি সেগুলো তেমন সমাধান করে না।",
          pronunciation_bn: "দ্য নিউ পলিসি ডাজন্ট রিয়েলি অ্যাড্রেস দ্য কোর ইস্যুস উইআর ফেসিং।",
          slotValues: { VERB: "address" },
          topicArea: "governance",
          stage: 3
        },
        {
          en: "I didn't really expect them to approve my leave request so quickly.",
          bn: "আমি তেমন আশা করিনি যে তারা এত তাড়াতাড়ি আমার ছুটির আবেদন অনুমোদন করবে।",
          pronunciation_bn: "আই ডিডন্ট রিয়েলি এক্সপেক্ট দেম টু অ্যাপ্রুভ মাই লিভ রিকোয়েস্ট সো কুইকলি।",
          slotValues: { VERB: "expect" },
          topicArea: "work",
          stage: 3,
          miniStory: {
            situation_bn: "অফিসে ছুটির আবেদন দ্রুত অনুমোদিত হয়েছে",
            icon: "✅"
          }
        },
        {
          en: "They don't really appreciate how much effort goes into maintaining quality.",
          bn: "মান বজায় রাখতে কতটা পরিশ্রম লাগে সেটা তারা তেমন মূল্যায়ন করে না।",
          pronunciation_bn: "দে ডোন্ট রিয়েলি অ্যাপ্রিশিয়েট হাউ মাচ এফর্ট গোজ ইনটু মেইনটেইনিং কোয়ালিটি।",
          slotValues: { VERB: "appreciate" },
          topicArea: "work",
          stage: 3
        }
      ]
    },
    {
      id: "N8.4",
      patternName: "Absolutely / Definitely",
      patternName_bn: "একদম / অবশ্যই বলা",
      concept_bn: "একদম",
      formula: "I [VERB] absolutely / I definitely [VERB]",
      formula_bn: "আমি একদম [কাজ করি] / আমি অবশ্যই [কাজ করি]",
      formulaPronunciation_bn: "আই অ্যাবসোলিউটলি [কাজ] / আই ডেফিনিটলি [কাজ]",
      formality: "casual",
      difficulty: "intermediate",
      banglaStructureMap: "বাংলা: আমি একদম রাজি → English: I absolutely agree",
      bridgeRuleIds: ["BR1", "BR7"],
      usageNote: "Use 'absolutely' or 'definitely' to express strong agreement, full certainty, or emphasis. Both are very common in everyday English to show you are 100% sure or fully committed.",
      usageNote_bn: "অ্যাবসোলিউটলি বা ডেফিনিটলি ব্যবহার করো যখন তুমি একদম পাক্কা, পুরোপুরি রাজি, বা জোর দিয়ে কিছু বলতে চাও। যেমন তুমি বলো 'আমি একদম রাজি', সেটা ইংরেজিতে 'I absolutely agree' — এটা বোঝায় তুমি ১০০% রাজি।",
      conversionSteps: {
        banglaThought: "আমি একদম রাজি",
        steps: [
          {
            step_bn: "পুরো ভাবটা চিন্তা করো — একটুও সন্দেহ নাই, পুরোপুরি হ্যাঁ",
            result: "I agree... completely"
          },
          {
            step_bn: "'absolutely' যোগ করো জোর দেওয়ার জন্য",
            result: "I absolutely agree"
          },
          {
            step_bn: "পুরো বাক্যটা ঠিক করো",
            result: "I absolutely agree with you"
          }
        ],
        finalResult: "I absolutely agree with you.",
        finalResult_bn: "আমি তোমার সাথে একদম রাজি।"
      },
      commonMistakes: [
        {
          wrong: "I'm absolutely much agree",
          correct: "I absolutely agree",
          explanation_bn: "'absolutely' নিজেই জোরালো — 'much' বা 'very' আর লাগবে না। শুধু 'absolutely agree' বলো।"
        },
        {
          wrong: "Absolutely I am go",
          correct: "I'm definitely going",
          explanation_bn: "'absolutely' বাক্যের মাঝে বসে, শুরুতে বসলে আলাদাভাবে বসে। 'I'm definitely going' এভাবে বলো।"
        },
        {
          wrong: "I definite want this",
          correct: "I definitely want this",
          explanation_bn: "'definite' না, 'definitely' বলতে হয় — শেষে '-ly' লাগাও তাহলে ঠিক হবে।"
        }
      ],
      simpleRules: [
        {
          rule_bn: "'absolutely' আর 'definitely' দুটোই একই মানে — একদম পাক্কা, ১০০% নিশ্চিত বোঝায়",
          example: "I absolutely love it = I definitely love it (দুটোই ঠিক)"
        },
        {
          rule_bn: "কাজের আগে বসাও — 'definitely' তারপর তোমার কাজ",
          example: "I definitely want this / She definitely knows"
        },
        {
          rule_bn: "প্রশ্নের উত্তরে শুধু 'Absolutely!' বা 'Definitely!' বললেও হয় — পুরো বাক্য না বললেও চলে",
          example: "Will you come? Absolutely! (একদম আসবো!)"
        }
      ],
      usageSituations: [
        {
          situation_bn: "বন্ধু জিজ্ঞেস করলো তুমি তার বিয়েতে যাবে কিনা",
          situation_en: "Friend asks if you'll attend their wedding",
          exampleSentence: "Absolutely! I'll definitely be there.",
          exampleSentence_bn: "একদম! আমি অবশ্যই যাবো।"
        },
        {
          situation_bn: "বস জানতে চাইলো তুমি কাজটা করতে পারবে কিনা",
          situation_en: "Boss asks if you can complete the task",
          exampleSentence: "I can definitely finish it by tomorrow.",
          exampleSentence_bn: "আমি অবশ্যই কাল এর মধ্যে শেষ করতে পারবো।"
        },
        {
          situation_bn: "ডাক্তার জিজ্ঞেস করলো ওষুধ খেয়ে ভালো লেগেছে কিনা",
          situation_en: "Doctor asks if the medicine helped",
          exampleSentence: "I definitely feel better now.",
          exampleSentence_bn: "আমি অবশ্যই এখন ভালো বোধ করছি।"
        }
      ],
      sentenceBuilding: [
        {
          previousPatternId: "A1.2",
          previousFormula: "I like [THING]",
          previousFormula_bn: "আমি [জিনিস] পছন্দ করি",
          combined: "I absolutely love biryani.",
          combined_bn: "আমি একদম বিরিয়ানি ভালোবাসি।"
        },
        {
          previousPatternId: "N8.1",
          previousFormula: "I kind of [VERB]",
          previousFormula_bn: "আমি একটু [কাজ করি]",
          combined: "I don't kind of agree — I absolutely agree!",
          combined_bn: "আমি একটু রাজি না — আমি একদম রাজি!"
        }
      ],
      memoryTrick_bn: "বাংলায় যখন তুমি 'একদম!', 'অবশ্যই!', '১০০% পাক্কা!' বলো, ইংরেজিতে সেটাই 'absolutely' বা 'definitely' — যেমন 'আমি একদম রাজি' মানে 'I absolutely agree'।",
      chunks: [
        {
          en: "absolutely love",
          bn: "একদম ভালোবাসি",
          pronunciation_bn: "অ্যাবসোলিউটলি লাভ"
        },
        {
          en: "definitely agree",
          bn: "অবশ্যই রাজি",
          pronunciation_bn: "ডেফিনিটলি এগ্রি"
        },
        {
          en: "absolutely sure",
          bn: "একদম নিশ্চিত",
          pronunciation_bn: "অ্যাবসোলিউটলি শিওর"
        }
      ],
      wordMap: {
        bn_sentence: "আমি একদম রাজি",
        en_sentence: "I absolutely agree",
        mappings: [
          { bn_word: "আমি", en_word: "I", type: "direct", bridgeRuleId: "BR1" },
          { bn_word: "একদম", en_word: "absolutely", type: "direct", bridgeRuleId: "BR7" },
          { bn_word: "রাজি", en_word: "agree", type: "direct" }
        ]
      },
      answerTemplates: [
        {
          situation_bn: "কেউ জিজ্ঞেস করলো তুমি আসবে কিনা",
          question: "Will you come to the party?",
          question_bn: "তুমি কি পার্টিতে আসবে?",
          answerFormula: "Absolutely! / I'll definitely come.",
          answerFormula_bn: "একদম! / আমি অবশ্যই আসবো।",
          pronunciation_bn: "অ্যাবসোলিউটলি! / আইল ডেফিনিটলি কাম।",
          examples: [
            {
              answer: "Absolutely! I wouldn't miss it.",
              answer_bn: "একদম! আমি মিস করবো না।",
              pronunciation_bn: "অ্যাবসোলিউটলি! আই উডন্ট মিস ইট।"
            },
            {
              answer: "I'll definitely be there by 7.",
              answer_bn: "আমি অবশ্যই ৭টার মধ্যে পৌঁছে যাবো।",
              pronunciation_bn: "আইল ডেফিনিটলি বি দেয়ার বাই সেভেন।"
            },
            {
              answer: "Definitely! Let me know the time.",
              answer_bn: "অবশ্যই! সময়টা জানিও।",
              pronunciation_bn: "ডেফিনিটলি! লেট মি নো দ্য টাইম।"
            }
          ]
        },
        {
          situation_bn: "অফিসে কেউ জিজ্ঞেস করলো তুমি কাজটা করতে রাজি কিনা",
          question: "Can you handle this project?",
          question_bn: "তুমি কি এই প্রজেক্টটা সামলাতে পারবে?",
          answerFormula: "Absolutely! / I can definitely handle it.",
          answerFormula_bn: "একদম! / আমি অবশ্যই পারবো।",
          pronunciation_bn: "অ্যাবসোলিউটলি! / আই ক্যান ডেফিনিটলি হ্যান্ডেল ইট।",
          examples: [
            {
              answer: "Absolutely, I've done similar work before.",
              answer_bn: "একদম, আমি আগেও এরকম কাজ করেছি।",
              pronunciation_bn: "অ্যাবসোলিউটলি, আইভ ডান সিমিলার ওয়ার্ক বিফোর।"
            },
            {
              answer: "I can definitely manage it within the deadline.",
              answer_bn: "আমি অবশ্যই ডেডলাইনের মধ্যে সামলাতে পারবো।",
              pronunciation_bn: "আই ক্যান ডেফিনিটলি ম্যানেজ ইট উইদিন দ্য ডেডলাইন।"
            },
            {
              answer: "Definitely! Just send me the details.",
              answer_bn: "অবশ্যই! শুধু বিস্তারিতটা পাঠিয়ে দাও।",
              pronunciation_bn: "ডেফিনিটলি! জাস্ট সেন্ড মি দ্য ডিটেইলস।"
            }
          ]
        },
        {
          situation_bn: "বাজারে দোকানদার জিজ্ঞেস করলো জিনিসটা ভালো লেগেছে কিনা",
          question: "Do you like this one?",
          question_bn: "এটা কি পছন্দ হয়েছে?",
          answerFormula: "Absolutely! / I definitely like this one.",
          answerFormula_bn: "একদম! / এটা আমি অবশ্যই পছন্দ করেছি।",
          pronunciation_bn: "অ্যাবসোলিউটলি! / আই ডেফিনিটলি লাইক দিস ওয়ান।",
          examples: [
            {
              answer: "Absolutely! This is exactly what I wanted.",
              answer_bn: "একদম! এটাই আমি চাইছিলাম।",
              pronunciation_bn: "অ্যাবসোলিউটলি! দিস ইজ এক্সাক্টলি হোয়াট আই ওয়ান্টেড।"
            },
            {
              answer: "I definitely like this color better.",
              answer_bn: "আমি অবশ্যই এই রংটা বেশি পছন্দ করি।",
              pronunciation_bn: "আই ডেফিনিটলি লাইক দিস কালার বেটার।"
            },
            {
              answer: "Definitely! Pack it up please.",
              answer_bn: "অবশ্যই! প্যাক করে দিন।",
              pronunciation_bn: "ডেফিনিটলি! প্যাক ইট আপ প্লিজ।"
            }
          ]
        }
      ],
      variations: [
        {
          variant: "short_answer",
          label: "Short answer form",
          label_bn: "ছোট উত্তর",
          formula: "Absolutely! / Definitely!",
          formula_bn: "একদম! / অবশ্যই!",
          examples: [
            {
              en: "Will you help me? Absolutely!",
              bn: "তুমি কি আমাকে সাহায্য করবে? একদম!",
              pronunciation_bn: "উইল ইউ হেল্প মি? অ্যাবসোলিউটলি!",
              slotValues: {},
              stage: 1
            },
            {
              en: "Is this the right way? Definitely.",
              bn: "এটা কি ঠিক রাস্তা? অবশ্যই।",
              pronunciation_bn: "ইজ দিস দ্য রাইট ওয়ে? ডেফিনিটলি।",
              slotValues: {},
              stage: 2
            },
            {
              en: "Should we invest in this plan? Absolutely.",
              bn: "আমরা কি এই প্ল্যানে টাকা লাগাবো? একদম।",
              pronunciation_bn: "শুড উই ইনভেস্ট ইন দিস প্ল্যান? অ্যাবসোলিউটলি।",
              slotValues: {},
              stage: 3
            }
          ]
        },
        {
          variant: "past_tense",
          label: "Past events",
          label_bn: "আগের ঘটনা",
          formula: "I definitely [PAST VERB]",
          formula_bn: "আমি অবশ্যই [কাজ করেছিলাম]",
          examples: [
            {
              en: "I definitely saw him at the bazaar.",
              bn: "আমি তাকে বাজারে একদম দেখেছি।",
              pronunciation_bn: "আই ডেফিনিটলি স দ্য হিম অ্যাট দ্য বাজার।",
              slotValues: { VERB: "saw" },
              stage: 1
            },
            {
              en: "She definitely told me about the meeting time.",
              bn: "সে আমাকে অবশ্যই মিটিং-এর সময়টা বলেছিল।",
              pronunciation_bn: "শি ডেফিনিটলি টোল্ড মি এবাউট দ্য মিটিং টাইম।",
              slotValues: { VERB: "told" },
              stage: 2
            },
            {
              en: "They definitely received the payment last week.",
              bn: "তারা গত সপ্তাহে অবশ্যই পেমেন্ট পেয়েছে।",
              pronunciation_bn: "দে ডেফিনিটলি রিসিভড দ্য পেমেন্ট লাস্ট উইক।",
              slotValues: { VERB: "received" },
              stage: 3
            }
          ]
        },
        {
          variant: "future_plan",
          label: "Future plans",
          label_bn: "ভবিষ্যৎ পরিকল্পনা",
          formula: "I'll definitely [VERB]",
          formula_bn: "আমি অবশ্যই [কাজ করবো]",
          examples: [
            {
              en: "I'll definitely call you tomorrow.",
              bn: "আমি অবশ্যই তোমাকে কাল ফোন করবো।",
              pronunciation_bn: "আইল ডেফিনিটলি কল ইউ টুমরো।",
              slotValues: { VERB: "call" },
              stage: 1
            },
            {
              en: "We'll definitely visit Sylhet this winter.",
              bn: "আমরা অবশ্যই এই শীতে সিলেট যাবো।",
              pronunciation_bn: "উইল ডেফিনিটলি ভিজিট সিলেট দিস উইন্টার।",
              slotValues: { VERB: "visit" },
              stage: 2
            },
            {
              en: "I'll definitely consider your suggestion before making a decision.",
              bn: "আমি সিদ্ধান্ত নেওয়ার আগে অবশ্যই তোমার পরামর্শ বিবেচনা করবো।",
              pronunciation_bn: "আইল ডেফিনিটলি কনসিডার ইওর সাজেশন বিফোর মেকিং এ ডিসিশন।",
              slotValues: { VERB: "consider" },
              stage: 3
            }
          ]
        }
      ],
      dialogueChains: [
        {
          id: "N8.4-dialogue-1",
          title_bn: "বন্ধুর বিয়ের দাওয়াত",
          title_en: "Friend's wedding invitation",
          situation_bn: "বন্ধু তোমাকে বিয়েতে দাওয়াত দিচ্ছে",
          icon: "💒",
          turns: [
            {
              speaker_bn: "বন্ধু",
              en: "My wedding is next Friday. Can you come?",
              bn: "আমার বিয়ে আগামী শুক্রবার। তুমি কি আসতে পারবে?",
              pronunciation_bn: "মাই ওয়েডিং ইজ নেক্সট ফ্রাইডে। ক্যান ইউ কাম?",
              patternId: "G2.1"
            },
            {
              speaker_bn: "তুমি",
              en: "Absolutely! I'll definitely be there.",
              bn: "একদম! আমি অবশ্যই আসবো।",
              pronunciation_bn: "অ্যাবসোলিউটলি! আইল ডেফিনিটলি বি দেয়ার।",
              patternId: "N8.4"
            },
            {
              speaker_bn: "বন্ধু",
              en: "Great! Can you bring your family too?",
              bn: "দারুণ! তোমার পরিবারকেও নিয়ে আসতে পারবে?",
              pronunciation_bn: "গ্রেট! ক্যান ইউ ব্রিং ইওর ফ্যামিলি টু?",
              patternId: "G2.1"
            },
            {
              speaker_bn: "তুমি",
              en: "Definitely! My wife and kids would love to come.",
              bn: "অবশ্যই! আমার বউ আর বাচ্চারা আসতে খুব পছন্দ করবে।",
              pronunciation_bn: "ডেফিনিটলি! মাই ওয়াইফ অ্যান্ড কিডস উড লাভ টু কাম।",
              patternId: "N8.4"
            },
            {
              speaker_bn: "বন্ধু",
              en: "I absolutely appreciate it, brother!",
              bn: "একদম ধন্যবাদ, ভাই!",
              pronunciation_bn: "আই অ্যাবসোলিউটলি অ্যাপ্রিশিয়েট ইট, ব্রাদার!",
              patternId: "N8.4"
            }
          ],
          patternsUsed: ["N8.4", "G2.1"]
        }
      ],
      slots: [
        {
          name: "VERB",
          description: "Any action or state word",
          description_bn: "যেকোনো কাজ বা অবস্থা",
          acceptedTypes: ["verb", "verb_phrase"],
          examples: ["agree", "love", "want", "need", "know", "recommend"]
        }
      ],
      examples: [
        {
          en: "I absolutely agree with you.",
          bn: "আমি তোমার সাথে একদম রাজি।",
          pronunciation_bn: "আই অ্যাবসোলিউটলি এগ্রি উইথ ইউ।",
          slotValues: { VERB: "agree" },
          topicArea: "social",
          stage: 1,
          miniStory: {
            situation_bn: "বন্ধুর সাথে চায়ের দোকানে আড্ডায় মত মিলে গেছে",
            icon: "☕"
          }
        },
        {
          en: "I definitely want to visit Cox's Bazar.",
          bn: "আমি অবশ্যই কক্সবাজার যেতে চাই।",
          pronunciation_bn: "আই ডেফিনিটলি ওয়ান্ট টু ভিজিট কক্সবাজার।",
          slotValues: { VERB: "want" },
          topicArea: "travel",
          stage: 1
        },
        {
          en: "She absolutely loves this restaurant.",
          bn: "সে একদম এই রেস্টুরেন্টটা ভালোবাসে।",
          pronunciation_bn: "শি অ্যাবসোলিউটলি লাভস দিস রেস্টুরেন্ট।",
          slotValues: { VERB: "loves" },
          topicArea: "food",
          stage: 1
        },
        {
          en: "I definitely need to rest today.",
          bn: "আমার আজকে অবশ্যই বিশ্রাম নেওয়া দরকার।",
          pronunciation_bn: "আই ডেফিনিটলি নিড টু রেস্ট টুডে।",
          slotValues: { VERB: "need" },
          topicArea: "health",
          stage: 1,
          miniStory: {
            situation_bn: "সারাদিন গার্মেন্টসে কাজ করে শরীর ব্যথা করছে",
            icon: "😫"
          }
        },
        {
          en: "He definitely knows the way to the hospital.",
          bn: "সে অবশ্যই হাসপাতালে যাওয়ার রাস্তা জানে।",
          pronunciation_bn: "হি ডেফিনিটলি নোজ দ্য ওয়ে টু দ্য হসপিটাল।",
          slotValues: { VERB: "knows" },
          topicArea: "health",
          stage: 1,
          miniStory: {
            situation_bn: "রাস্তায় হারিয়ে গিয়ে লোকাল মানুষকে জিজ্ঞেস করেছো",
            icon: "🏥"
          }
        },
        {
          en: "I absolutely recommend this tailor.",
          bn: "আমি একদম এই দর্জিকে রেকমেন্ড করি।",
          pronunciation_bn: "আই অ্যাবসোলিউটলি রেকমেন্ড দিস টেইলর।",
          slotValues: { VERB: "recommend" },
          topicArea: "shopping",
          stage: 2,
          miniStory: {
            situation_bn: "প্রতিবেশী জানতে চেয়েছে কোন দর্জি ভালো",
            icon: "🧵"
          }
        },
        {
          en: "We definitely need to finish this report by Friday.",
          bn: "আমাদের অবশ্যই শুক্রবারের মধ্যে এই রিপোর্ট শেষ করতে হবে।",
          pronunciation_bn: "উই ডেফিনিটলি নিড টু ফিনিশ দিস রিপোর্ট বাই ফ্রাইডে।",
          slotValues: { VERB: "need" },
          topicArea: "work",
          stage: 2
        },
        {
          en: "I absolutely trust my team on this.",
          bn: "আমি এই ব্যাপারে আমার টিমকে একদম বিশ্বাস করি।",
          pronunciation_bn: "আই অ্যাবসোলিউটলি ট্রাস্ট মাই টিম অন দিস।",
          slotValues: { VERB: "trust" },
          topicArea: "work",
          stage: 2
        },
        {
          en: "They definitely understand the urgency of this matter.",
          bn: "তারা অবশ্যই এই বিষয়ের জরুরিটা বুঝতে পারে।",
          pronunciation_bn: "দে ডেফিনিটলি আন্ডারস্ট্যান্ড দ্য আর্জেন্সি অফ দিস ম্যাটার।",
          slotValues: { VERB: "understand" },
          topicArea: "work",
          stage: 2,
          miniStory: {
            situation_bn: "অফিসে জরুরি ডেলিভারি নিয়ে সবাই সচেতন",
            icon: "⚡"
          }
        },
        {
          en: "I definitely prefer the morning shift.",
          bn: "আমি অবশ্যই সকালের শিফট পছন্দ করি।",
          pronunciation_bn: "আই ডেফিনিটলি প্রিফার দ্য মর্নিং শিফট।",
          slotValues: { VERB: "prefer" },
          topicArea: "work",
          stage: 2
        },
        {
          en: "I absolutely believe we can win this contract if we prepare well.",
          bn: "আমি একদম বিশ্বাস করি ভালো প্রস্তুতি নিলে আমরা এই চুক্তি পাবো।",
          pronunciation_bn: "আই অ্যাবসোলিউটলি বিলিভ উই ক্যান উইন দিস কন্ট্র্যাক্ট ইফ উই প্রিপেয়ার ওয়েল।",
          slotValues: { VERB: "believe" },
          topicArea: "business",
          stage: 3,
          miniStory: {
            situation_bn: "কোম্পানির বড় টেন্ডারের জন্য প্রস্তুতি নিচ্ছো",
            icon: "📋"
          }
        },
        {
          en: "She definitely deserves the promotion after all her hard work.",
          bn: "এতো পরিশ্রমের পর সে অবশ্যই প্রমোশন পাওয়ার যোগ্য।",
          pronunciation_bn: "শি ডেফিনিটলি ডিজার্ভস দ্য প্রমোশন আফটার অল হার হার্ড ওয়ার্ক।",
          slotValues: { VERB: "deserves" },
          topicArea: "career",
          stage: 3
        },
        {
          en: "I absolutely support the decision to expand the business to Chattogram.",
          bn: "আমি চট্টগ্রামে ব্যবসা বাড়ানোর সিদ্ধান্তকে একদম সমর্থন করি।",
          pronunciation_bn: "আই অ্যাবসোলিউটলি সাপোর্ট দ্য ডিসিশন টু এক্সপ্যান্ড দ্য বিজনেস টু চিটাগং।",
          slotValues: { VERB: "support" },
          topicArea: "business",
          stage: 3,
          miniStory: {
            situation_bn: "কোম্পানি বোর্ড মিটিং-এ ব্যবসা সম্প্রসারণ নিয়ে আলোচনা",
            icon: "🏢"
          }
        },
        {
          en: "We definitely appreciate the community's support during the flood relief effort.",
          bn: "বন্যা ত্রাণ কাজে সম্প্রদায়ের সহায়তা আমরা অবশ্যই কদর করি।",
          pronunciation_bn: "উই ডেফিনিটলি অ্যাপ্রিশিয়েট দ্য কমিউনিটিজ সাপোর্ট ডিউরিং দ্য ফ্লাড রিলিফ এফর্ট।",
          slotValues: { VERB: "appreciate" },
          topicArea: "social",
          stage: 3
        },
        {
          en: "I absolutely intend to complete my degree before applying for the government job.",
          bn: "সরকারি চাকরিতে আবেদন করার আগে আমি একদম আমার ডিগ্রি শেষ করতে চাই।",
          pronunciation_bn: "আই অ্যাবসোলিউটলি ইনটেন্ড টু কমপ্লিট মাই ডিগ্রি বিফোর অ্যাপ্লাইং ফর দ্য গভর্নমেন্ট জব।",
          slotValues: { VERB: "intend" },
          topicArea: "education",
          stage: 3
        }
      ]
    },
    {
      id: "N8.5",
      patternName: "Barely / Hardly",
      patternName_bn: "কোনোমতে / একদম কম বলা",
      concept_bn: "কোনোমতে",
      formula: "I can barely [VERB]",
      formula_bn: "আমি কোনোমতে [কাজ করতে পারি]",
      formulaPronunciation_bn: "আই ক্যান বেয়ারলি [কাজ]",
      formality: "casual",
      difficulty: "intermediate",
      banglaStructureMap: "বাংলা: আমি কোনোমতে চলতে পারি → English: I can barely walk",
      bridgeRuleIds: ["BR1", "BR7"],
      usageNote: "Use 'barely' or 'hardly' to express that something is possible but only just, or to a very small degree. Shows extreme difficulty or very minimal ability.",
      usageNote_bn: "বেয়ারলি বা হার্ডলি ব্যবহার করো যখন তুমি কোনোমতে কিছু করতে পারো, বা খুব কম পারো। যেমন তুমি বলো 'আমি কোনোমতে হাঁটতে পারি', সেটা ইংরেজিতে 'I can barely walk' — এটা বোঝায় খুব কষ্ট করে সামান্য পারো।",
      conversionSteps: {
        banglaThought: "আমি কোনোমতে চলতে পারি",
        steps: [
          {
            step_bn: "পুরো ভাবটা চিন্তা করো — পারো কিন্তু খুব কষ্টে",
            result: "I can walk... but with great difficulty"
          },
          {
            step_bn: "'barely' যোগ করো কোনোমতের ভাব আনতে",
            result: "I can barely walk"
          },
          {
            step_bn: "পুরো বাক্যটা ঠিক করো",
            result: "I can barely walk today"
          }
        ],
        finalResult: "I can barely walk today.",
        finalResult_bn: "আমি আজকে কোনোমতে হাঁটতে পারছি।"
      },
      commonMistakes: [
        {
          wrong: "I barely can't walk",
          correct: "I can barely walk",
          explanation_bn: "'barely' নিজেই 'কম' বোঝায় — 'can't' আর লাগবে না। 'can barely' বলো, 'barely can't' না।"
        },
        {
          wrong: "I hardly not understand",
          correct: "I can hardly understand",
          explanation_bn: "'hardly' নিজেই 'না'-এর মতো — আর 'not' যোগ করলে উল্টো হয়ে যায়। শুধু 'hardly' ব্যবহার করো।"
        },
        {
          wrong: "I bare walk",
          correct: "I can barely walk",
          explanation_bn: "'bare' না, 'barely' বলতে হয় — শেষে '-ly' লাগাও, আর 'can' দিয়ে শুরু করো।"
        }
      ],
      simpleRules: [
        {
          rule_bn: "'barely' আর 'hardly' দুটোই একই মানে — কোনোমতে, খুব কষ্টে, একদম কম",
          example: "I can barely hear = I can hardly hear (দুটোই ঠিক)"
        },
        {
          rule_bn: "'can barely' দিয়ে শুরু করো, তারপর তোমার কাজ — 'barely' এর সাথে 'not' লাগবে না",
          example: "I can barely see / She can barely speak"
        },
        {
          rule_bn: "'barely' বা 'hardly' মানেই প্রায় না — পারো কিন্তু কোনোমতে",
          example: "I barely slept last night (গত রাতে কোনোমতে ঘুমিয়েছি)"
        }
      ],
      usageSituations: [
        {
          situation_bn: "গার্মেন্টসে সারাদিন দাঁড়িয়ে কাজ করে পা ব্যথায় হাঁটতে কষ্ট হচ্ছে",
          situation_en: "After standing all day at garments factory, feet hurt badly",
          exampleSentence: "I can barely walk after standing all day.",
          exampleSentence_bn: "সারাদিন দাঁড়িয়ে থেকে আমি কোনোমতে হাঁটতে পারছি।"
        },
        {
          situation_bn: "রিকশায় বসে ট্রাফিকের শব্দে ফোনে কথা শুনতে পাচ্ছো না",
          situation_en: "In a rickshaw, traffic noise making it hard to hear phone",
          exampleSentence: "I can barely hear you, there's too much traffic noise.",
          exampleSentence_bn: "আমি কোনোমতে শুনতে পাচ্ছি, এখানে খুব ট্রাফিকের শব্দ।"
        },
        {
          situation_bn: "মাস শেষে টাকা প্রায় শেষ, কোনোমতে চলতে হচ্ছে",
          situation_en: "End of month, almost no money left",
          exampleSentence: "I can barely manage my expenses this month.",
          exampleSentence_bn: "এই মাসে আমি কোনোমতে খরচ সামলাচ্ছি।"
        }
      ],
      sentenceBuilding: [
        {
          previousPatternId: "A1.1",
          previousFormula: "I want [THING]",
          previousFormula_bn: "আমি [জিনিস] চাই",
          combined: "I can barely afford it, but I really want it.",
          combined_bn: "কোনোমতে কিনতে পারবো, কিন্তু আমি সত্যিই চাই।"
        },
        {
          previousPatternId: "N8.3",
          previousFormula: "I don't really [VERB]",
          previousFormula_bn: "আমি তেমন [কাজ করি না]",
          combined: "I don't really complain, even though I can barely manage.",
          combined_bn: "আমি তেমন অভিযোগ করি না, যদিও কোনোমতে চালাচ্ছি।"
        }
      ],
      memoryTrick_bn: "বাংলায় যখন তুমি 'কোনোমতে', 'একদম কম', 'খুব কষ্টে' বলো, ইংরেজিতে সেটাই 'barely' বা 'hardly' — যেমন 'আমি কোনোমতে ঘুমিয়েছি' মানে 'I barely slept'।",
      chunks: [
        {
          en: "can barely walk",
          bn: "কোনোমতে হাঁটতে পারি",
          pronunciation_bn: "ক্যান বেয়ারলি ওয়াক"
        },
        {
          en: "can hardly hear",
          bn: "কোনোমতে শুনতে পাই",
          pronunciation_bn: "ক্যান হার্ডলি হিয়ার"
        },
        {
          en: "barely survived",
          bn: "কোনোমতে বেঁচে গেছি",
          pronunciation_bn: "বেয়ারলি সারভাইভড"
        }
      ],
      wordMap: {
        bn_sentence: "আমি কোনোমতে হাঁটতে পারি",
        en_sentence: "I can barely walk",
        mappings: [
          { bn_word: "আমি", en_word: "I", type: "direct", bridgeRuleId: "BR1" },
          { bn_word: "পারি", en_word: "can", type: "moved", bridgeRuleId: "BR1" },
          { bn_word: "কোনোমতে", en_word: "barely", type: "direct", bridgeRuleId: "BR7" },
          { bn_word: "হাঁটতে", en_word: "walk", type: "direct" }
        ]
      },
      answerTemplates: [
        {
          situation_bn: "কেউ জিজ্ঞেস করলো তুমি ক্লান্ত কিনা",
          question: "Are you okay? You look tired.",
          question_bn: "তুমি ঠিক আছো? ক্লান্ত লাগছে।",
          answerFormula: "I can barely stand. / I barely slept last night.",
          answerFormula_bn: "আমি কোনোমতে দাঁড়িয়ে আছি। / গত রাতে কোনোমতে ঘুমিয়েছি।",
          pronunciation_bn: "আই ক্যান বেয়ারলি স্ট্যান্ড। / আই বেয়ারলি স্লেপ্ট লাস্ট নাইট।",
          examples: [
            {
              answer: "I can barely keep my eyes open.",
              answer_bn: "আমি কোনোমতে চোখ খোলা রাখতে পারছি।",
              pronunciation_bn: "আই ক্যান বেয়ারলি কিপ মাই আইজ ওপেন।"
            },
            {
              answer: "I barely slept two hours last night.",
              answer_bn: "গত রাতে কোনোমতে দুই ঘণ্টা ঘুমিয়েছি।",
              pronunciation_bn: "আই বেয়ারলি স্লেপ্ট টু আওয়ারস লাস্ট নাইট।"
            },
            {
              answer: "I can barely walk, my feet hurt so much.",
              answer_bn: "কোনোমতে হাঁটতে পারছি, পা এত ব্যথা করছে।",
              pronunciation_bn: "আই ক্যান বেয়ারলি ওয়াক, মাই ফিট হার্ট সো মাচ।"
            }
          ]
        },
        {
          situation_bn: "দোকানদার জিজ্ঞেস করলো কেমন চলছে ব্যবসা",
          question: "How's business these days?",
          question_bn: "এখন ব্যবসা কেমন চলছে?",
          answerFormula: "I can barely make ends meet. / Business is hardly moving.",
          answerFormula_bn: "কোনোমতে চলছে। / ব্যবসা একদম চলছে না।",
          pronunciation_bn: "আই ক্যান বেয়ারলি মেক এন্ডস মিট। / বিজনেস ইজ হার্ডলি মুভিং।",
          examples: [
            {
              answer: "I can barely pay the rent this month.",
              answer_bn: "এই মাসে কোনোমতে ভাড়া দিতে পারছি।",
              pronunciation_bn: "আই ক্যান বেয়ারলি পে দ্য রেন্ট দিস মান্থ।"
            },
            {
              answer: "We can barely cover the costs with these sales.",
              answer_bn: "এই বিক্রি দিয়ে কোনোমতে খরচ চলছে।",
              pronunciation_bn: "উই ক্যান বেয়ারলি কাভার দ্য কস্টস উইথ দিজ সেলস।"
            },
            {
              answer: "I can barely afford to keep the shop open.",
              answer_bn: "কোনোমতে দোকান চালু রাখতে পারছি।",
              pronunciation_bn: "আই ক্যান বেয়ারলি অ্যাফোর্ড টু কিপ দ্য শপ ওপেন।"
            }
          ]
        },
        {
          situation_bn: "রিকশাচালকের সাথে কথা, রাস্তা জ্যামে আটকে আছো",
          question: "Can you still see the road ahead?",
          question_bn: "সামনের রাস্তা দেখতে পাচ্ছেন?",
          answerFormula: "I can barely see anything. / I can hardly move forward.",
          answerFormula_bn: "কোনোমতে কিছু দেখতে পাচ্ছি। / সামনে একদম এগোতে পারছি না।",
          pronunciation_bn: "আই ক্যান বেয়ারলি সি এনিথিং। / আই ক্যান হার্ডলি মুভ ফরওয়ার্ড।",
          examples: [
            {
              answer: "I can barely see through all this fog.",
              answer_bn: "এই কুয়াশায় কোনোমতে দেখতে পাচ্ছি।",
              pronunciation_bn: "আই ক্যান বেয়ারলি সি থ্রু অল দিস ফগ।"
            },
            {
              answer: "I can hardly move in this traffic jam.",
              answer_bn: "এই জ্যামে কোনোমতে এগোতে পারছি।",
              pronunciation_bn: "আই ক্যান হার্ডলি মুভ ইন দিস ট্রাফিক জ্যাম।"
            },
            {
              answer: "We can barely fit through this narrow road.",
              answer_bn: "এই সরু রাস্তায় কোনোমতে যেতে পারছি।",
              pronunciation_bn: "উই ক্যান বেয়ারলি ফিট থ্রু দিস ন্যারো রোড।"
            }
          ]
        }
      ],
      variations: [
        {
          variant: "past_tense",
          label: "Past events",
          label_bn: "আগের ঘটনা",
          formula: "I barely [PAST VERB]",
          formula_bn: "আমি কোনোমতে [কাজ করেছিলাম]",
          examples: [
            {
              en: "I barely passed the exam.",
              bn: "আমি কোনোমতে পরীক্ষায় পাস করেছি।",
              pronunciation_bn: "আই বেয়ারলি পাসড দ্য এক্সাম।",
              slotValues: { VERB: "passed" },
              stage: 1
            },
            {
              en: "She barely caught the last bus home.",
              bn: "সে কোনোমতে শেষ বাস ধরেছে।",
              pronunciation_bn: "শি বেয়ারলি কট দ্য লাস্ট বাস হোম।",
              slotValues: { VERB: "caught" },
              stage: 2
            },
            {
              en: "They barely managed to submit the tender before the deadline.",
              bn: "তারা কোনোমতে ডেডলাইনের আগে টেন্ডার জমা দিতে পেরেছে।",
              pronunciation_bn: "দে বেয়ারলি ম্যানেজড টু সাবমিট দ্য টেন্ডার বিফোর দ্য ডেডলাইন।",
              slotValues: { VERB: "managed" },
              stage: 3
            }
          ]
        },
        {
          variant: "hardly_any",
          label: "With amount/quantity",
          label_bn: "পরিমাণ বোঝাতে",
          formula: "There's hardly any [THING]",
          formula_bn: "প্রায় কোনো [জিনিস] নেই",
          examples: [
            {
              en: "There's hardly any rice left.",
              bn: "প্রায় কোনো চাল নেই।",
              pronunciation_bn: "দেয়ারস হার্ডলি এনি রাইস লেফট।",
              slotValues: { THING: "rice" },
              stage: 1
            },
            {
              en: "There's hardly any water in the tank.",
              bn: "ট্যাংকিতে প্রায় কোনো পানি নেই।",
              pronunciation_bn: "দেয়ারস হার্ডলি এনি ওয়াটার ইন দ্য ট্যাংক।",
              slotValues: { THING: "water" },
              stage: 2
            },
            {
              en: "There's hardly any time left before the submission deadline.",
              bn: "জমা দেওয়ার ডেডলাইনের আগে প্রায় কোনো সময় নেই।",
              pronunciation_bn: "দেয়ারস হার্ডলি এনি টাইম লেফট বিফোর দ্য সাবমিশন ডেডলাইন।",
              slotValues: { THING: "time" },
              stage: 3
            }
          ]
        },
        {
          variant: "negative_emphasis",
          label: "Strong inability",
          label_bn: "একদম পারছি না",
          formula: "I can hardly [VERB] at all",
          formula_bn: "আমি একদমই [কাজ করতে পারছি না]",
          examples: [
            {
              en: "I can hardly breathe in this heat.",
              bn: "এই গরমে আমি একদমই শ্বাস নিতে পারছি না।",
              pronunciation_bn: "আই ক্যান হার্ডলি ব্রিদ ইন দিস হিট।",
              slotValues: { VERB: "breathe" },
              stage: 1
            },
            {
              en: "She can hardly concentrate with all this noise.",
              bn: "এত শব্দে সে একদমই মনোযোগ দিতে পারছে না।",
              pronunciation_bn: "শি ক্যান হার্ডলি কনসেন্ট্রেট উইথ অল দিস নয়েজ।",
              slotValues: { VERB: "concentrate" },
              stage: 2
            },
            {
              en: "The students can hardly focus during the afternoon session in the hot classroom.",
              bn: "গরম ক্লাসরুমে বিকেলের ক্লাসে ছাত্ররা একদমই মনোযোগ দিতে পারছে না।",
              pronunciation_bn: "দ্য স্টুডেন্টস ক্যান হার্ডলি ফোকাস ডিউরিং দ্য আফটারনুন সেশন ইন দ্য হট ক্লাসরুম।",
              slotValues: { VERB: "focus" },
              stage: 3
            }
          ]
        }
      ],
      dialogueChains: [
        {
          id: "N8.5-dialogue-1",
          title_bn: "গার্মেন্টসে লম্বা শিফটের পর",
          title_en: "After a long shift at garments factory",
          situation_bn: "গার্মেন্টস থেকে ফেরার পর বাসায় কথা হচ্ছে",
          icon: "🏭",
          turns: [
            {
              speaker_bn: "মা",
              en: "You look very tired. How was work today?",
              bn: "তোমাকে খুব ক্লান্ত দেখাচ্ছে। আজকে কাজ কেমন ছিল?",
              pronunciation_bn: "ইউ লুক ভেরি টায়ার্ড। হাউ ওয়াজ ওয়ার্ক টুডে?",
              patternId: "G2.1"
            },
            {
              speaker_bn: "তুমি",
              en: "I can barely walk. We had to stand for twelve hours.",
              bn: "আমি কোনোমতে হাঁটতে পারছি। বারো ঘণ্টা দাঁড়িয়ে থাকতে হয়েছে।",
              pronunciation_bn: "আই ক্যান বেয়ারলি ওয়াক। উই হ্যাড টু স্ট্যান্ড ফর টুয়েলভ আওয়ারস।",
              patternId: "N8.5"
            },
            {
              speaker_bn: "মা",
              en: "Did you eat anything?",
              bn: "কিছু খেয়েছো?",
              pronunciation_bn: "ডিড ইউ ইট এনিথিং?",
              patternId: "G2.1"
            },
            {
              speaker_bn: "তুমি",
              en: "I barely had time for lunch. Just a few biscuits.",
              bn: "দুপুরের খাবারের সময় কোনোমতে পেয়েছি। শুধু কয়েকটা বিস্কুট।",
              pronunciation_bn: "আই বেয়ারলি হ্যাড টাইম ফর লাঞ্চ। জাস্ট এ ফিউ বিস্কুটস।",
              patternId: "N8.5"
            },
            {
              speaker_bn: "মা",
              en: "Sit down, I'll bring you food right away.",
              bn: "বসো, এখনই খাবার নিয়ে আসছি।",
              pronunciation_bn: "সিট ডাউন, আইল ব্রিং ইউ ফুড রাইট অ্যাওয়ে।",
              patternId: "A1.1"
            }
          ],
          patternsUsed: ["N8.5", "G2.1", "A1.1"]
        }
      ],
      slots: [
        {
          name: "VERB",
          description: "Any action or state word",
          description_bn: "যেকোনো কাজ বা অবস্থা",
          acceptedTypes: ["verb", "verb_phrase"],
          examples: ["walk", "hear", "see", "breathe", "sleep", "afford"]
        }
      ],
      examples: [
        {
          en: "I can barely walk after the long shift.",
          bn: "লম্বা শিফটের পর আমি কোনোমতে হাঁটতে পারছি।",
          pronunciation_bn: "আই ক্যান বেয়ারলি ওয়াক আফটার দ্য লং শিফট।",
          slotValues: { VERB: "walk" },
          topicArea: "work",
          stage: 1,
          miniStory: {
            situation_bn: "গার্মেন্টসে ১২ ঘণ্টা দাঁড়িয়ে কাজ করে বাসায় ফিরছো",
            icon: "🏭"
          }
        },
        {
          en: "I can barely hear you on the phone.",
          bn: "ফোনে তোমার কথা কোনোমতে শুনতে পাচ্ছি।",
          pronunciation_bn: "আই ক্যান বেয়ারলি হিয়ার ইউ অন দ্য ফোন।",
          slotValues: { VERB: "hear" },
          topicArea: "communication",
          stage: 1
        },
        {
          en: "I barely slept last night because of the mosquitoes.",
          bn: "মশার জন্য গত রাতে কোনোমতে ঘুমিয়েছি।",
          pronunciation_bn: "আই বেয়ারলি স্লেপ্ট লাস্ট নাইট বিকজ অফ দ্য মস্কিটোজ।",
          slotValues: { VERB: "slept" },
          topicArea: "daily_life",
          stage: 1,
          miniStory: {
            situation_bn: "গরমে জানালা খুলে ঘুমিয়েছিলে, সারারাত মশা কামড়েছে",
            icon: "🦟"
          }
        },
        {
          en: "She can barely see without her glasses.",
          bn: "চশমা ছাড়া সে কোনোমতে দেখতে পায়।",
          pronunciation_bn: "শি ক্যান বেয়ারলি সি উইদাউট হার গ্লাসেস।",
          slotValues: { VERB: "see" },
          topicArea: "health",
          stage: 1
        },
        {
          en: "I can barely afford the bus fare these days.",
          bn: "ইদানীং বাসের ভাড়া কোনোমতে দিতে পারছি।",
          pronunciation_bn: "আই ক্যান বেয়ারলি অ্যাফোর্ড দ্য বাস ফেয়ার দিজ ডেজ।",
          slotValues: { VERB: "afford" },
          topicArea: "transportation",
          stage: 1,
          miniStory: {
            situation_bn: "বাসের ভাড়া বেড়ে গেছে, মাসের শেষে টাকা কম",
            icon: "🚌"
          }
        },
        {
          en: "He can barely speak English, but he's trying hard.",
          bn: "সে কোনোমতে ইংরেজি বলতে পারে, কিন্তু খুব চেষ্টা করছে।",
          pronunciation_bn: "হি ক্যান বেয়ারলি স্পিক ইংলিশ, বাট হিজ ট্রাইং হার্ড।",
          slotValues: { VERB: "speak" },
          topicArea: "education",
          stage: 2,
          miniStory: {
            situation_bn: "নতুন অফিসে ইংরেজিতে কথা বলতে হচ্ছে, কষ্ট হচ্ছে",
            icon: "💬"
          }
        },
        {
          en: "I can barely breathe in this crowded bus.",
          bn: "এই ভিড় বাসে আমি কোনোমতে শ্বাস নিতে পারছি।",
          pronunciation_bn: "আই ক্যান বেয়ারলি ব্রিদ ইন দিস ক্রাউডেড বাস।",
          slotValues: { VERB: "breathe" },
          topicArea: "transportation",
          stage: 2
        },
        {
          en: "We can barely fit everyone in this small room.",
          bn: "এই ছোট রুমে সবাইকে কোনোমতে জায়গা দিতে পারছি।",
          pronunciation_bn: "উই ক্যান বেয়ারলি ফিট এভরিওয়ান ইন দিস স্মল রুম।",
          slotValues: { VERB: "fit" },
          topicArea: "daily_life",
          stage: 2
        },
        {
          en: "I barely recognized him after so many years.",
          bn: "এত বছর পর তাকে কোনোমতে চিনতে পেরেছি।",
          pronunciation_bn: "আই বেয়ারলি রিকগনাইজড হিম আফটার সো মেনি ইয়ারস।",
          slotValues: { VERB: "recognized" },
          topicArea: "social",
          stage: 2,
          miniStory: {
            situation_bn: "গ্রামের পুরোনো বন্ধুর সাথে ঢাকায় দেখা হয়েছে",
            icon: "🤝"
          }
        },
        {
          en: "The rickshaw barely made it through the narrow lane.",
          bn: "রিকশাটা কোনোমতে সরু গলি দিয়ে যেতে পেরেছে।",
          pronunciation_bn: "দ্য রিকশা বেয়ারলি মেড ইট থ্রু দ্য ন্যারো লেন।",
          slotValues: { VERB: "made it" },
          topicArea: "transportation",
          stage: 2
        },
        {
          en: "I can barely concentrate on work because of the construction noise outside.",
          bn: "বাইরের নির্মাণ কাজের শব্দে আমি কোনোমতে কাজে মনোযোগ দিতে পারছি।",
          pronunciation_bn: "আই ক্যান বেয়ারলি কনসেন্ট্রেট অন ওয়ার্ক বিকজ অফ দ্য কনস্ট্রাকশন নয়েজ আউটসাইড।",
          slotValues: { VERB: "concentrate" },
          topicArea: "work",
          stage: 3,
          miniStory: {
            situation_bn: "অফিসের পাশে বিল্ডিং তৈরি হচ্ছে, শব্দে কাজ করতে পারছো না",
            icon: "🏗️"
          }
        },
        {
          en: "The farmers barely survived the flood this year with their crops damaged.",
          bn: "এবার বন্যায় ফসল নষ্ট হয়ে কৃষকরা কোনোমতে টিকে আছে।",
          pronunciation_bn: "দ্য ফার্মারস বেয়ারলি সারভাইভড দ্য ফ্লাড দিস ইয়ার উইথ দেয়ার ক্রপস ড্যামেজড।",
          slotValues: { VERB: "survived" },
          topicArea: "agriculture",
          stage: 3
        },
        {
          en: "I can barely keep up with the workload since two colleagues resigned.",
          bn: "দুই সহকর্মী চলে যাওয়ার পর কোনোমতে কাজের চাপ সামলাচ্ছি।",
          pronunciation_bn: "আই ক্যান বেয়ারলি কিপ আপ উইথ দ্য ওয়ার্কলোড সিন্স টু কলিগস রিজাইন্ড।",
          slotValues: { VERB: "keep up" },
          topicArea: "work",
          stage: 3
        },
        {
          en: "We can barely maintain the school building without proper government funding.",
          bn: "সরকারি ফান্ড ছাড়া আমরা কোনোমতে স্কুলের ভবন রক্ষণাবেক্ষণ করছি।",
          pronunciation_bn: "উই ক্যান বেয়ারলি মেইনটেইন দ্য স্কুল বিল্ডিং উইদাউট প্রপার গভর্নমেন্ট ফান্ডিং।",
          slotValues: { VERB: "maintain" },
          topicArea: "education",
          stage: 3,
          miniStory: {
            situation_bn: "গ্রামের স্কুলের প্রধান শিক্ষক সরকারি সাহায্যের অভাবে চিন্তিত",
            icon: "🏫"
          }
        },
        {
          en: "The hospital can barely accommodate all the patients during the dengue season.",
          bn: "ডেঙ্গু মৌসুমে হাসপাতাল কোনোমতে সব রোগীকে জায়গা দিতে পারছে।",
          pronunciation_bn: "দ্য হসপিটাল ক্যান বেয়ারলি অ্যাকোমোডেট অল দ্য পেশেন্টস ডিউরিং দ্য ডেঙ্গু সিজন।",
          slotValues: { VERB: "accommodate" },
          topicArea: "health",
          stage: 3
        }
      ]
    },
    {
      id: "N8.6",
      patternName: "Quite / Rather",
      patternName_bn: "বেশ / বরং বলা",
      concept_bn: "বেশ",
      formula: "It's quite [ADJECTIVE]",
      formula_bn: "এটা বেশ [বর্ণনা]",
      formulaPronunciation_bn: "ইটস কোয়াইট [বর্ণনা]",
      formality: "polite",
      difficulty: "intermediate",
      banglaStructureMap: "বাংলা: এটা বেশ ভালো → English: It's quite good",
      bridgeRuleIds: ["BR1", "BR7"],
      usageNote: "Use 'quite' or 'rather' to express a moderate-to-significant degree of something. 'Quite' is very common and polite. 'Rather' sounds slightly more formal. Both mean 'বেশ' — more than a little, but not the most.",
      usageNote_bn: "কোয়াইট বা রাদার ব্যবহার করো যখন তুমি 'বেশ' বা 'বরং' বলতে চাও। যেমন 'এটা বেশ ভালো' মানে ইংরেজিতে 'It's quite good' — এটা বোঝায় মোটামুটি না, বেশ ভালো, কিন্তু একদম সেরা না।",
      conversionSteps: {
        banglaThought: "এটা বেশ ভালো",
        steps: [
          {
            step_bn: "পুরো ভাবটা চিন্তা করো — শুধু ভালো না, বেশ ভালো",
            result: "It's good... more than just okay"
          },
          {
            step_bn: "'quite' যোগ করো বেশ-এর ভাব আনতে",
            result: "It's quite good"
          },
          {
            step_bn: "পুরো বাক্যটা ঠিক করো",
            result: "It's quite good actually"
          }
        ],
        finalResult: "It's quite good actually.",
        finalResult_bn: "এটা আসলে বেশ ভালো।"
      },
      commonMistakes: [
        {
          wrong: "It's quite very good",
          correct: "It's quite good",
          explanation_bn: "'quite' নিজেই 'বেশ' বোঝায় — 'very' আর যোগ করার দরকার নেই। একটাই ব্যবহার করো।"
        },
        {
          wrong: "I'm quiet hungry",
          correct: "I'm quite hungry",
          explanation_bn: "'quiet' (কোয়ায়েট) মানে চুপচাপ, 'quite' (কোয়াইট) মানে বেশ — বানান ভুল করো না!"
        },
        {
          wrong: "It rather is expensive",
          correct: "It's rather expensive",
          explanation_bn: "'rather' বর্ণনা শব্দের আগে বসে — 'rather expensive' বলো, 'rather is expensive' না।"
        }
      ],
      simpleRules: [
        {
          rule_bn: "'quite' আর 'rather' দুটোই 'বেশ' মানে — 'quite' বেশি চলে দৈনন্দিন কথায়, 'rather' একটু ভদ্র শোনায়",
          example: "It's quite hot = It's rather hot (দুটোই ঠিক)"
        },
        {
          rule_bn: "বর্ণনা শব্দের আগে বসাও — 'quite' তারপর তোমার বর্ণনা",
          example: "Quite good / Quite expensive / Quite far"
        },
        {
          rule_bn: "'quite' দিয়ে ভদ্রভাবে বলো — সরাসরি 'very' বলার চেয়ে নরম শোনায়",
          example: "This is quite expensive (বেশ দাম) — 'very expensive' বলার চেয়ে নরম"
        }
      ],
      usageSituations: [
        {
          situation_bn: "বাজারে দাম শুনে বেশি মনে হচ্ছে কিন্তু ভদ্রভাবে বলতে চাও",
          situation_en: "At bazaar when price seems high but you want to say politely",
          exampleSentence: "That's quite expensive, can you give a discount?",
          exampleSentence_bn: "এটা বেশ দাম, একটু কম করা যায়?"
        },
        {
          situation_bn: "রেস্টুরেন্টে খাবার খেয়ে মতামত বলতে চাও",
          situation_en: "At restaurant after tasting food and giving feedback",
          exampleSentence: "The biryani is quite good here.",
          exampleSentence_bn: "এখানকার বিরিয়ানি বেশ ভালো।"
        },
        {
          situation_bn: "অফিসে কাজের পরিমাণ নিয়ে কথা বলছো",
          situation_en: "At office discussing workload",
          exampleSentence: "This project is quite challenging.",
          exampleSentence_bn: "এই প্রজেক্টটা বেশ চ্যালেঞ্জিং।"
        }
      ],
      sentenceBuilding: [
        {
          previousPatternId: "N8.1",
          previousFormula: "I kind of [VERB]",
          previousFormula_bn: "আমি একটু [কাজ করি]",
          combined: "I kind of expected it would be quite difficult.",
          combined_bn: "আমি একটু আশা করেছিলাম এটা বেশ কঠিন হবে।"
        },
        {
          previousPatternId: "A1.2",
          previousFormula: "I like [THING]",
          previousFormula_bn: "আমি [জিনিস] পছন্দ করি",
          combined: "I like this place — it's quite peaceful.",
          combined_bn: "আমি এই জায়গাটা পছন্দ করি — বেশ শান্তি।"
        }
      ],
      memoryTrick_bn: "বাংলায় যখন তুমি 'বেশ ভালো', 'বেশ দূর', 'বেশ গরম' বলো, ইংরেজিতে সেটাই 'quite good', 'quite far', 'quite hot' — 'বেশ' = 'quite' মনে রাখো!",
      chunks: [
        {
          en: "quite good",
          bn: "বেশ ভালো",
          pronunciation_bn: "কোয়াইট গুড"
        },
        {
          en: "rather expensive",
          bn: "বরং দামি",
          pronunciation_bn: "রাদার এক্সপেনসিভ"
        },
        {
          en: "quite far",
          bn: "বেশ দূর",
          pronunciation_bn: "কোয়াইট ফার"
        }
      ],
      wordMap: {
        bn_sentence: "এটা বেশ ভালো",
        en_sentence: "It's quite good",
        mappings: [
          { bn_word: "এটা", en_word: "It's", type: "direct", bridgeRuleId: "BR1" },
          { bn_word: "বেশ", en_word: "quite", type: "direct", bridgeRuleId: "BR7" },
          { bn_word: "ভালো", en_word: "good", type: "direct" }
        ]
      },
      answerTemplates: [
        {
          situation_bn: "কেউ জিজ্ঞেস করলো খাবার কেমন হয়েছে",
          question: "How's the food?",
          question_bn: "খাবার কেমন হয়েছে?",
          answerFormula: "It's quite good. / It's rather tasty.",
          answerFormula_bn: "বেশ ভালো হয়েছে। / বরং মজাদার।",
          pronunciation_bn: "ইটস কোয়াইট গুড। / ইটস রাদার টেস্টি।",
          examples: [
            {
              answer: "It's quite good, I like the spice level.",
              answer_bn: "বেশ ভালো হয়েছে, ঝালটা ঠিক আছে।",
              pronunciation_bn: "ইটস কোয়াইট গুড, আই লাইক দ্য স্পাইস লেভেল।"
            },
            {
              answer: "The dal is quite tasty today.",
              answer_bn: "আজকের ডাল বেশ মজা হয়েছে।",
              pronunciation_bn: "দ্য ডাল ইজ কোয়াইট টেস্টি টুডে।"
            },
            {
              answer: "Rather good actually, better than I expected.",
              answer_bn: "আসলে বরং ভালো, আমার ধারণার চেয়ে ভালো।",
              pronunciation_bn: "রাদার গুড অ্যাকচুয়ালি, বেটার দ্যান আই এক্সপেক্টেড।"
            }
          ]
        },
        {
          situation_bn: "কেউ জানতে চাইলো দূরত্ব কতটুকু",
          question: "Is the hospital far from here?",
          question_bn: "হাসপাতাল কি এখান থেকে দূরে?",
          answerFormula: "It's quite far. / It's rather close actually.",
          answerFormula_bn: "বেশ দূর। / আসলে বরং কাছেই।",
          pronunciation_bn: "ইটস কোয়াইট ফার। / ইটস রাদার ক্লোজ অ্যাকচুয়ালি।",
          examples: [
            {
              answer: "It's quite far, you should take a rickshaw.",
              answer_bn: "বেশ দূর, রিকশায় যাও।",
              pronunciation_bn: "ইটস কোয়াইট ফার, ইউ শুড টেক এ রিকশা।"
            },
            {
              answer: "It's rather close, maybe ten minutes on foot.",
              answer_bn: "বরং কাছেই, হেঁটে দশ মিনিট হবে।",
              pronunciation_bn: "ইটস রাদার ক্লোজ, মেবি টেন মিনিটস অন ফুট।"
            },
            {
              answer: "Quite far actually, about 5 kilometers.",
              answer_bn: "আসলে বেশ দূর, প্রায় ৫ কিলোমিটার।",
              pronunciation_bn: "কোয়াইট ফার অ্যাকচুয়ালি, এবাউট ফাইভ কিলোমিটারস।"
            }
          ]
        },
        {
          situation_bn: "অফিসে বস জিজ্ঞেস করলো প্রজেক্ট কেমন চলছে",
          question: "How's the project going?",
          question_bn: "প্রজেক্ট কেমন চলছে?",
          answerFormula: "It's quite challenging. / We're making quite good progress.",
          answerFormula_bn: "বেশ চ্যালেঞ্জিং। / বেশ ভালো এগোচ্ছে।",
          pronunciation_bn: "ইটস কোয়াইট চ্যালেঞ্জিং। / উইআর মেকিং কোয়াইট গুড প্রগ্রেস।",
          examples: [
            {
              answer: "It's quite challenging, but we're managing.",
              answer_bn: "বেশ চ্যালেঞ্জিং, কিন্তু সামলাচ্ছি।",
              pronunciation_bn: "ইটস কোয়াইট চ্যালেঞ্জিং, বাট উইআর ম্যানেজিং।"
            },
            {
              answer: "We're making quite good progress actually.",
              answer_bn: "আসলে বেশ ভালো এগোচ্ছে।",
              pronunciation_bn: "উইআর মেকিং কোয়াইট গুড প্রগ্রেস অ্যাকচুয়ালি।"
            },
            {
              answer: "It's rather complex, but we'll deliver on time.",
              answer_bn: "বরং জটিল, কিন্তু সময়মতো দেবো।",
              pronunciation_bn: "ইটস রাদার কমপ্লেক্স, বাট উইল ডেলিভার অন টাইম।"
            }
          ]
        }
      ],
      variations: [
        {
          variant: "with_noun",
          label: "With things",
          label_bn: "জিনিসের সাথে",
          formula: "It's quite a [NOUN]",
          formula_bn: "এটা বেশ একটা [জিনিস]",
          examples: [
            {
              en: "It's quite a journey from Dhaka to Sylhet.",
              bn: "ঢাকা থেকে সিলেট বেশ একটা যাত্রা।",
              pronunciation_bn: "ইটস কোয়াইট এ জার্নি ফ্রম ঢাকা টু সিলেট।",
              slotValues: { NOUN: "journey" },
              stage: 1
            },
            {
              en: "That's quite a challenge for a new employee.",
              bn: "নতুন কর্মীর জন্য এটা বেশ একটা চ্যালেঞ্জ।",
              pronunciation_bn: "দ্যাটস কোয়াইট এ চ্যালেঞ্জ ফর এ নিউ এমপ্লয়ি।",
              slotValues: { NOUN: "challenge" },
              stage: 2
            },
            {
              en: "It was quite an achievement for our small company to win that contract.",
              bn: "আমাদের ছোট কোম্পানির জন্য সেই চুক্তি পাওয়া বেশ একটা অর্জন ছিল।",
              pronunciation_bn: "ইট ওয়াজ কোয়াইট অ্যান অ্যাচিভমেন্ট ফর আওয়ার স্মল কোম্পানি টু উইন দ্যাট কন্ট্র্যাক্ট।",
              slotValues: { NOUN: "achievement" },
              stage: 3
            }
          ]
        },
        {
          variant: "rather_would",
          label: "Preference (rather)",
          label_bn: "পছন্দ (বরং)",
          formula: "I'd rather [VERB]",
          formula_bn: "আমি বরং [কাজ করতাম]",
          examples: [
            {
              en: "I'd rather take a rickshaw.",
              bn: "আমি বরং রিকশায় যেতাম।",
              pronunciation_bn: "আইড রাদার টেক এ রিকশা।",
              slotValues: { VERB: "take" },
              stage: 1
            },
            {
              en: "I'd rather eat at home than go to a restaurant.",
              bn: "আমি বরং রেস্টুরেন্টে না গিয়ে বাসায় খেতাম।",
              pronunciation_bn: "আইড রাদার ইট অ্যাট হোম দ্যান গো টু এ রেস্টুরেন্ট।",
              slotValues: { VERB: "eat" },
              stage: 2
            },
            {
              en: "I'd rather invest in education than spend on luxury items.",
              bn: "আমি বরং বিলাসিতায় খরচ না করে শিক্ষায় বিনিয়োগ করতাম।",
              pronunciation_bn: "আইড রাদার ইনভেস্ট ইন এডুকেশন দ্যান স্পেন্ড অন লাক্সারি আইটেমস।",
              slotValues: { VERB: "invest" },
              stage: 3
            }
          ]
        },
        {
          variant: "negative",
          label: "Not quite",
          label_bn: "পুরোপুরি না",
          formula: "It's not quite [ADJECTIVE]",
          formula_bn: "এটা পুরোপুরি [বর্ণনা] না",
          examples: [
            {
              en: "It's not quite ready yet.",
              bn: "এটা এখনও পুরোপুরি তৈরি হয়নি।",
              pronunciation_bn: "ইটস নট কোয়াইট রেডি ইয়েট।",
              slotValues: { ADJECTIVE: "ready" },
              stage: 1
            },
            {
              en: "The design is not quite what we discussed.",
              bn: "ডিজাইনটা আমরা যেটা আলোচনা করেছিলাম পুরোপুরি সেটা না।",
              pronunciation_bn: "দ্য ডিজাইন ইজ নট কোয়াইট হোয়াট উই ডিসকাসড।",
              slotValues: { ADJECTIVE: "what we discussed" },
              stage: 2
            },
            {
              en: "The quarterly results are not quite satisfactory compared to our targets.",
              bn: "আমাদের লক্ষ্যমাত্রার তুলনায় ত্রৈমাসিক ফলাফল পুরোপুরি সন্তোষজনক না।",
              pronunciation_bn: "দ্য কোয়ার্টারলি রিজাল্টস আর নট কোয়াইট স্যাটিসফ্যাক্টরি কমপেয়ার্ড টু আওয়ার টার্গেটস।",
              slotValues: { ADJECTIVE: "satisfactory" },
              stage: 3
            }
          ]
        }
      ],
      dialogueChains: [
        {
          id: "N8.6-dialogue-1",
          title_bn: "বাজারে জামা কিনতে",
          title_en: "Buying clothes at bazaar",
          situation_bn: "নিউমার্কেটে জামা কিনতে গিয়ে দোকানদারের সাথে কথা",
          icon: "👕",
          turns: [
            {
              speaker_bn: "তুমি",
              en: "How much is this shirt?",
              bn: "এই শার্টটার দাম কত?",
              pronunciation_bn: "হাউ মাচ ইজ দিস শার্ট?",
              patternId: "G2.1"
            },
            {
              speaker_bn: "দোকানদার",
              en: "This one is 1200 taka, very good quality.",
              bn: "এটা ১২০০ টাকা, খুব ভালো কোয়ালিটি।",
              pronunciation_bn: "দিস ওয়ান ইজ টুয়েলভ হান্ড্রেড টাকা, ভেরি গুড কোয়ালিটি।",
              patternId: "A1.1"
            },
            {
              speaker_bn: "তুমি",
              en: "That's quite expensive. Can you give a discount?",
              bn: "এটা বেশ দাম। একটু কম করা যায়?",
              pronunciation_bn: "দ্যাটস কোয়াইট এক্সপেনসিভ। ক্যান ইউ গিভ এ ডিসকাউন্ট?",
              patternId: "N8.6"
            },
            {
              speaker_bn: "দোকানদার",
              en: "Okay, I can give you 100 taka off. It's quite a good deal.",
              bn: "ঠিক আছে, ১০০ টাকা কম দিচ্ছি। বেশ ভালো দামই বলছি।",
              pronunciation_bn: "ওকে, আই ক্যান গিভ ইউ ওয়ান হান্ড্রেড টাকা অফ। ইটস কোয়াইট এ গুড ডিল।",
              patternId: "N8.6"
            },
            {
              speaker_bn: "তুমি",
              en: "The quality is quite good, I'll take it.",
              bn: "কোয়ালিটি বেশ ভালো, আমি নিচ্ছি।",
              pronunciation_bn: "দ্য কোয়ালিটি ইজ কোয়াইট গুড, আইল টেক ইট।",
              patternId: "N8.6"
            }
          ],
          patternsUsed: ["N8.6", "G2.1", "A1.1"]
        }
      ],
      slots: [
        {
          name: "ADJECTIVE",
          description: "Any describing word",
          description_bn: "যেকোনো বর্ণনা শব্দ",
          acceptedTypes: ["adjective", "adjective_phrase"],
          examples: ["good", "expensive", "far", "hot", "difficult", "interesting"]
        }
      ],
      examples: [
        {
          en: "The weather is quite hot today.",
          bn: "আজকে আবহাওয়া বেশ গরম।",
          pronunciation_bn: "দ্য ওয়েদার ইজ কোয়াইট হট টুডে।",
          slotValues: { ADJECTIVE: "hot" },
          topicArea: "weather",
          stage: 1,
          miniStory: {
            situation_bn: "এপ্রিল মাসে ঢাকায় তীব্র গরম পড়েছে",
            icon: "☀️"
          }
        },
        {
          en: "This biryani is quite good.",
          bn: "এই বিরিয়ানিটা বেশ ভালো।",
          pronunciation_bn: "দিস বিরিয়ানি ইজ কোয়াইট গুড।",
          slotValues: { ADJECTIVE: "good" },
          topicArea: "food",
          stage: 1
        },
        {
          en: "The hospital is quite far from here.",
          bn: "হাসপাতাল এখান থেকে বেশ দূর।",
          pronunciation_bn: "দ্য হসপিটাল ইজ কোয়াইট ফার ফ্রম হিয়ার।",
          slotValues: { ADJECTIVE: "far" },
          topicArea: "health",
          stage: 1,
          miniStory: {
            situation_bn: "রাতে অসুস্থ হয়ে হাসপাতালের দূরত্ব জানতে চাইছো",
            icon: "🏥"
          }
        },
        {
          en: "That saree is quite beautiful.",
          bn: "সেই শাড়িটা বেশ সুন্দর।",
          pronunciation_bn: "দ্যাট সাড়ি ইজ কোয়াইট বিউটিফুল।",
          slotValues: { ADJECTIVE: "beautiful" },
          topicArea: "shopping",
          stage: 1
        },
        {
          en: "The rickshaw fare is quite reasonable here.",
          bn: "এখানে রিকশার ভাড়া বেশ যুক্তিসঙ্গত।",
          pronunciation_bn: "দ্য রিকশা ফেয়ার ইজ কোয়াইট রিজনেবল হিয়ার।",
          slotValues: { ADJECTIVE: "reasonable" },
          topicArea: "transportation",
          stage: 1,
          miniStory: {
            situation_bn: "নতুন এলাকায় এসে রিকশার ভাড়া জানলে",
            icon: "🛺"
          }
        },
        {
          en: "The new office is quite spacious compared to the old one.",
          bn: "পুরোনোটার তুলনায় নতুন অফিস বেশ বড়।",
          pronunciation_bn: "দ্য নিউ অফিস ইজ কোয়াইট স্পেশাস কমপেয়ার্ড টু দ্য ওল্ড ওয়ান।",
          slotValues: { ADJECTIVE: "spacious" },
          topicArea: "work",
          stage: 2,
          miniStory: {
            situation_bn: "কোম্পানি নতুন অফিসে শিফট করেছে",
            icon: "🏢"
          }
        },
        {
          en: "I'm quite tired after the meeting.",
          bn: "মিটিং-এর পর আমি বেশ ক্লান্ত।",
          pronunciation_bn: "আইম কোয়াইট টায়ার্ড আফটার দ্য মিটিং।",
          slotValues: { ADJECTIVE: "tired" },
          topicArea: "work",
          stage: 2
        },
        {
          en: "The road to the village is rather bumpy.",
          bn: "গ্রামে যাওয়ার রাস্তাটা বরং এবড়োথেবড়ো।",
          pronunciation_bn: "দ্য রোড টু দ্য ভিলেজ ইজ রাদার বাম্পি।",
          slotValues: { ADJECTIVE: "bumpy" },
          topicArea: "transportation",
          stage: 2
        },
        {
          en: "The tea here is quite strong.",
          bn: "এখানকার চা বেশ কড়া।",
          pronunciation_bn: "দ্য টি হিয়ার ইজ কোয়াইট স্ট্রং।",
          slotValues: { ADJECTIVE: "strong" },
          topicArea: "food",
          stage: 2,
          miniStory: {
            situation_bn: "রাস্তার চায়ের দোকানে কড়া লিকার চা পেয়েছো",
            icon: "🍵"
          }
        },
        {
          en: "The market is quite crowded during Eid shopping.",
          bn: "ঈদের শপিং-এ বাজার বেশ ভিড়।",
          pronunciation_bn: "দ্য মার্কেট ইজ কোয়াইট ক্রাউডেড ডিউরিং ঈদ শপিং।",
          slotValues: { ADJECTIVE: "crowded" },
          topicArea: "shopping",
          stage: 2
        },
        {
          en: "The training program was quite helpful for understanding the new system.",
          bn: "নতুন সিস্টেম বোঝার জন্য ট্রেনিং প্রোগ্রামটা বেশ সহায়ক ছিল।",
          pronunciation_bn: "দ্য ট্রেনিং প্রোগ্রাম ওয়াজ কোয়াইট হেল্পফুল ফর আন্ডারস্ট্যান্ডিং দ্য নিউ সিস্টেম।",
          slotValues: { ADJECTIVE: "helpful" },
          topicArea: "work",
          stage: 3,
          miniStory: {
            situation_bn: "অফিসে নতুন সফটওয়্যার ট্রেনিং-এ গিয়েছিলে",
            icon: "💻"
          }
        },
        {
          en: "The government's new policy is quite controversial among the business community.",
          bn: "সরকারের নতুন নীতি ব্যবসায়ী সমাজে বেশ বিতর্কিত।",
          pronunciation_bn: "দ্য গভর্নমেন্টস নিউ পলিসি ইজ কোয়াইট কন্ট্রোভার্শাল অ্যামাং দ্য বিজনেস কমিউনিটি।",
          slotValues: { ADJECTIVE: "controversial" },
          topicArea: "governance",
          stage: 3
        },
        {
          en: "The flood situation in the northern districts is rather alarming this year.",
          bn: "এবার উত্তরের জেলাগুলোতে বন্যা পরিস্থিতি বরং উদ্বেগজনক।",
          pronunciation_bn: "দ্য ফ্লাড সিচুয়েশন ইন দ্য নর্দার্ন ডিস্ট্রিক্টস ইজ রাদার অ্যালার্মিং দিস ইয়ার।",
          slotValues: { ADJECTIVE: "alarming" },
          topicArea: "environment",
          stage: 3
        },
        {
          en: "The new healthcare facility is quite impressive with modern equipment.",
          bn: "আধুনিক যন্ত্রপাতি নিয়ে নতুন স্বাস্থ্যকেন্দ্রটা বেশ চমৎকার।",
          pronunciation_bn: "দ্য নিউ হেলথকেয়ার ফ্যাসিলিটি ইজ কোয়াইট ইমপ্রেসিভ উইথ মডার্ন ইকুইপমেন্ট।",
          slotValues: { ADJECTIVE: "impressive" },
          topicArea: "health",
          stage: 3,
          miniStory: {
            situation_bn: "উপজেলায় নতুন হাসপাতাল উদ্বোধন হয়েছে",
            icon: "🏥"
          }
        },
        {
          en: "Managing both the factory and the export business is quite demanding for one person.",
          bn: "একজনের জন্য কারখানা আর রপ্তানি ব্যবসা দুটো সামলানো বেশ কঠিন।",
          pronunciation_bn: "ম্যানেজিং বোথ দ্য ফ্যাক্টরি অ্যান্ড দ্য এক্সপোর্ট বিজনেস ইজ কোয়াইট ডিমান্ডিং ফর ওয়ান পার্সন।",
          slotValues: { ADJECTIVE: "demanding" },
          topicArea: "business",
          stage: 3
        }
      ]
    }
  ]
};
