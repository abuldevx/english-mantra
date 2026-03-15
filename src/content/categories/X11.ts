import { PatternCategory } from "@/types/pattern";

export const categoryX11: PatternCategory = {
  id: "X11",
  slug: "casual-speech-reductions",
  name: "Casual Speech Reductions",
  name_bn: "চলতি কথার সংক্ষেপ",
  description: "Learn the most common speech reductions used in everyday casual English — gonna, wanna, gotta, and more.",
  description_bn: "প্রতিদিনের ইংরেজি কথায় সবচেয়ে বেশি যেসব সংক্ষেপ ব্যবহার হয় — gonna, wanna, gotta — সেগুলো শেখো।",
  icon: "⚡",
  group: "X",
  groupName: "Fluency & Spoken English",
  groupName_bn: "ফ্লুয়েন্সি ও কথ্য ইংরেজি",
  difficulty: "intermediate",
  patterns: [
    {
      id: "X11.1",
      patternName: "Gonna (Going to)",
      patternName_bn: "গনা মানে 'করবো' বলা",
      concept_bn: "করবো",
      formula: "I'm gonna [VERB]",
      formula_bn: "আমি [কাজ] করবো",
      formulaPronunciation_bn: "আইম গনা [কাজ]",
      usageNote: "Gonna is the casual spoken reduction of 'going to'. It's used universally in American and British casual speech for future intentions. Never write 'gonna' in formal emails or reports — it's only for speaking and informal texting.",
      usageNote_bn: "গনা মানে 'going to' এর সংক্ষেপ। এটা মুখের কথা, লেখার ইংরেজি না। আমেরিকান, ব্রিটিশ সবাই দোস্ত-বন্ধুর সাথে এভাবে বলে। অফিসের ইমেইল বা রিপোর্টে লিখবে না, শুধু কথায় বলবে।",
      difficulty: "intermediate",
      formality: "casual",
      banglaStructureMap: "বাংলা: আমি খাবো → English: I'm gonna eat",
      bridgeRuleIds: ["BR1", "BR7"],
      conversionSteps: {
        banglaThought: "আমি ভাত খাবো",
        steps: [
          {
            step_bn: "প্রথমে বলো 'আমি' মানে I'm",
            result: "I'm"
          },
          {
            step_bn: "তারপর বলো 'করবো' মানে gonna",
            result: "I'm gonna"
          },
          {
            step_bn: "শেষে কাজটা বলো — খাবো মানে eat",
            result: "I'm gonna eat"
          }
        ],
        finalResult: "I'm gonna eat rice",
        finalResult_bn: "আইম গনা ইট রাইস"
      },
      commonMistakes: [
        {
          wrong: "I'm going to eat (সব সময়)",
          correct: "I'm gonna eat (বন্ধুর সাথে)",
          explanation_bn: "বন্ধু-পরিবারের সাথে gonna বলবে। অফিসের বসকে going to বলবে।"
        },
        {
          wrong: "I gonna eat (I নাই)",
          correct: "I'm gonna eat",
          explanation_bn: "gonna এর আগে সব সময় I'm, he's, she's, we're, they're লাগবে।"
        },
        {
          wrong: "I'm gonna to eat (to দুইবার)",
          correct: "I'm gonna eat",
          explanation_bn: "gonna মানেই going to, তাই আরেকবার to লাগবে না।"
        }
      ],
      simpleRules: [
        {
          rule_bn: "gonna শুধু কথায় বলো, চিঠি-ইমেইলে লিখো না",
          example: "Friends: I'm gonna watch a movie. Boss: I'm going to complete the report."
        },
        {
          rule_bn: "gonna এর আগে I'm, he's, she's, we're, they're এগুলো লাগবে",
          example: "I'm gonna go. She's gonna call. They're gonna visit."
        },
        {
          rule_bn: "gonna মানে 'করবো' — ভবিষ্যতের কথা বলার সবচেয়ে সহজ উপায়",
          example: "I'm gonna buy a phone. We're gonna eat biryani."
        }
      ],
      usageSituations: [
        {
          situation_bn: "বন্ধুকে তোমার পরিকল্পনা বলছো",
          situation_en: "Telling a friend your plan",
          exampleSentence: "I'm gonna visit my village next Friday.",
          exampleSentence_bn: "আমি আগামী শুক্রবার গ্রামে যাবো।"
        },
        {
          situation_bn: "পরিবারকে জানাচ্ছো তুমি কী করবে",
          situation_en: "Informing family what you'll do",
          exampleSentence: "I'm gonna cook chicken tonight.",
          exampleSentence_bn: "আমি আজ রাতে মুরগি রান্না করবো।"
        },
        {
          situation_bn: "সহকর্মীকে বলছো তুমি কোথায় যাচ্ছো",
          situation_en: "Telling a colleague where you're heading",
          exampleSentence: "I'm gonna grab some tea from the stall.",
          exampleSentence_bn: "আমি দোকান থেকে চা আনতে যাচ্ছি।"
        }
      ],
      sentenceBuilding: [
        {
          previousPatternId: "A1.1",
          previousFormula: "I want [THING]",
          previousFormula_bn: "আমি [জিনিস] চাই",
          combined: "I want some biryani, so I'm gonna buy it.",
          combined_bn: "আমি বিরিয়ানি চাই, তাই কিনবো।"
        },
        {
          previousPatternId: "C14.1",
          previousFormula: "I think [STATEMENT]",
          previousFormula_bn: "আমার মনে হয় [কথা]",
          combined: "I think I'm gonna take a rickshaw.",
          combined_bn: "আমার মনে হয় আমি রিকশা নেবো।"
        }
      ],
      memoryTrick_bn: "gonna = গন্না (going to) — 'করবো' বলার সবচেয়ে সহজ ও দ্রুত উপায়। বন্ধুর সাথে সব সময় gonna বলো।",
      chunks: [
        {
          en: "I'm gonna",
          bn: "আমি করবো",
          pronunciation_bn: "আইম গনা"
        },
        {
          en: "You're gonna",
          bn: "তুমি করবে",
          pronunciation_bn: "ইউর গনা"
        },
        {
          en: "We're gonna",
          bn: "আমরা করবো",
          pronunciation_bn: "উইর গনা"
        },
        {
          en: "They're gonna",
          bn: "তারা করবে",
          pronunciation_bn: "দেয়ার গনা"
        }
      ],
      wordMap: {
        bn_sentence: "আমি বাজার যাবো",
        en_sentence: "I'm gonna go to the market",
        mappings: [
          {
            bn_word: "আমি",
            en_word: "I'm",
            type: "direct",
            bridgeRuleId: "BR1"
          },
          {
            bn_word: "যাবো",
            en_word: "gonna go",
            type: "direct",
            bridgeRuleId: "BR7"
          },
          {
            bn_word: "বাজার",
            en_word: "to the market",
            type: "direct"
          }
        ]
      },
      answerTemplates: [
        {
          situation_bn: "কেউ জিজ্ঞেস করছে তুমি কী করবে",
          question: "What are you gonna do today?",
          question_bn: "আজ কী করবে?",
          answerFormula: "I'm gonna [VERB]",
          answerFormula_bn: "আমি [কাজ] করবো",
          pronunciation_bn: "আইম গনা [কাজ]",
          examples: [
            {
              answer: "I'm gonna rest at home.",
              answer_bn: "আমি বাসায় বিশ্রাম করবো।",
              pronunciation_bn: "আইম গনা রেস্ট অ্যাট হোম"
            },
            {
              answer: "I'm gonna meet my cousin.",
              answer_bn: "আমি আমার কাজিনের সাথে দেখা করবো।",
              pronunciation_bn: "আইম গনা মিট মাই কাজিন"
            },
            {
              answer: "I'm gonna finish my assignment.",
              answer_bn: "আমি আমার এসাইনমেন্ট শেষ করবো।",
              pronunciation_bn: "আইম গনা ফিনিশ মাই অ্যাসাইনমেন্ট"
            }
          ]
        },
        {
          situation_bn: "বন্ধু জানতে চাইছে তুমি কোথায় যাবে",
          question: "Where are you gonna go after work?",
          question_bn: "কাজের পরে কোথায় যাবে?",
          answerFormula: "I'm gonna go to [PLACE]",
          answerFormula_bn: "আমি [জায়গা] যাবো",
          pronunciation_bn: "আইম গনা গো টু [জায়গা]",
          examples: [
            {
              answer: "I'm gonna go to the market.",
              answer_bn: "আমি বাজার যাবো।",
              pronunciation_bn: "আইম গনা গো টু দ্য মার্কেট"
            },
            {
              answer: "I'm gonna go home.",
              answer_bn: "আমি বাসায় যাবো।",
              pronunciation_bn: "আইম গনা গো হোম"
            },
            {
              answer: "I'm gonna go to the gym.",
              answer_bn: "আমি জিম যাবো।",
              pronunciation_bn: "আইম গনা গো টু দ্য জিম"
            }
          ]
        },
        {
          situation_bn: "পরিবার জিজ্ঞেস করছে তুমি কখন আসবে",
          question: "When are you gonna come back?",
          question_bn: "কখন ফিরবে?",
          answerFormula: "I'm gonna come back [TIME]",
          answerFormula_bn: "আমি [সময়] ফিরবো",
          pronunciation_bn: "আইম গনা কাম ব্যাক [সময়]",
          examples: [
            {
              answer: "I'm gonna come back at 7.",
              answer_bn: "আমি ৭টায় ফিরবো।",
              pronunciation_bn: "আইম গনা কাম ব্যাক অ্যাট সেভেন"
            },
            {
              answer: "I'm gonna come back after maghrib.",
              answer_bn: "আমি মাগরিবের পরে ফিরবো।",
              pronunciation_bn: "আইম গনা কাম ব্যাক আফটার মাগরিব"
            },
            {
              answer: "I'm gonna come back soon.",
              answer_bn: "আমি শীঘ্রই ফিরবো।",
              pronunciation_bn: "আইম গনা কাম ব্যাক সুন"
            }
          ]
        }
      ],
      variations: [
        {
          variant: "negative",
          label: "Not gonna (করবো না)",
          label_bn: "নট গনা — করবো না",
          formula: "I'm not gonna [VERB]",
          formula_bn: "আমি [কাজ] করবো না",
          examples: [
            {
              en: "I'm not gonna eat now.",
              bn: "আমি এখন খাবো না।",
              pronunciation_bn: "আইম নট গনা ইট নাউ",
              slotValues: { VERB: "eat now" },
              stage: 1
            },
            {
              en: "He's not gonna attend the meeting.",
              bn: "সে মিটিংয়ে আসবে না।",
              pronunciation_bn: "হিজ নট গনা অ্যাটেন্ড দ্য মিটিং",
              slotValues: { VERB: "attend the meeting" },
              stage: 2
            },
            {
              en: "They're not gonna approve this budget.",
              bn: "তারা এই বাজেট অনুমোদন করবে না।",
              pronunciation_bn: "দেয়ার নট গনা অ্যাপ্রুভ দিস বাজেট",
              slotValues: { VERB: "approve this budget" },
              stage: 3
            }
          ]
        },
        {
          variant: "question",
          label: "Gonna question (করবে কি?)",
          label_bn: "গনা প্রশ্ন — করবে কি?",
          formula: "Are you gonna [VERB]?",
          formula_bn: "তুমি কি [কাজ] করবে?",
          examples: [
            {
              en: "Are you gonna come?",
              bn: "তুমি কি আসবে?",
              pronunciation_bn: "আর ইউ গনা কাম",
              slotValues: { VERB: "come" },
              stage: 1
            },
            {
              en: "Is she gonna call me back?",
              bn: "সে কি আমাকে ফোন করবে?",
              pronunciation_bn: "ইজ শি গনা কল মি ব্যাক",
              slotValues: { VERB: "call me back" },
              stage: 2
            },
            {
              en: "Are they gonna submit the proposal tomorrow?",
              bn: "তারা কি কাল প্রস্তাবটা জমা দেবে?",
              pronunciation_bn: "আর দে গনা সাবমিট দ্য প্রপোজাল টুমরো",
              slotValues: { VERB: "submit the proposal tomorrow" },
              stage: 3
            }
          ]
        },
        {
          variant: "past_plan",
          label: "Was gonna (করতে যাচ্ছিলাম কিন্তু করিনি)",
          label_bn: "ওয়াজ গনা — করতে যাচ্ছিলাম কিন্তু করিনি",
          formula: "I was gonna [VERB]",
          formula_bn: "আমি [কাজ] করতে যাচ্ছিলাম",
          examples: [
            {
              en: "I was gonna call you, but I forgot.",
              bn: "আমি তোমাকে ফোন করতে যাচ্ছিলাম, কিন্তু ভুলে গেছি।",
              pronunciation_bn: "আই ওয়াজ গনা কল ইউ, বাট আই ফরগট",
              slotValues: { VERB: "call you" },
              stage: 2
            },
            {
              en: "She was gonna join us for dinner.",
              bn: "সে আমাদের সাথে রাতের খাবার খেতে আসতে যাচ্ছিলো।",
              pronunciation_bn: "শি ওয়াজ গনা জয়েন আস ফর ডিনার",
              slotValues: { VERB: "join us for dinner" },
              stage: 2
            },
            {
              en: "We were gonna book the tickets earlier.",
              bn: "আমরা আগেই টিকিট বুক করতে যাচ্ছিলাম।",
              pronunciation_bn: "উই ওয়ার গনা বুক দ্য টিকেটস আরলিয়ার",
              slotValues: { VERB: "book the tickets earlier" },
              stage: 3
            }
          ]
        }
      ],
      dialogueChains: [
        {
          id: "X11.1-chain-1",
          title_bn: "চা-দোকানে বন্ধুর সাথে আড্ডা",
          title_en: "Chat with friend at tea stall",
          situation_bn: "দুই বন্ধু চা-দোকানে বসে সন্ধ্যার পরিকল্পনা নিয়ে কথা বলছে",
          icon: "☕",
          turns: [
            {
              speaker_bn: "রাকিব",
              en: "What are you gonna do after work?",
              bn: "কাজের পরে কী করবে?",
              pronunciation_bn: "হোয়াট আর ইউ গনা ডু আফটার ওয়ার্ক",
              patternId: "X11.1"
            },
            {
              speaker_bn: "সজীব",
              en: "I'm gonna visit my uncle. He's sick.",
              bn: "আমি আমার চাচার বাসায় যাবো। উনি অসুস্থ।",
              pronunciation_bn: "আইম গনা ভিজিট মাই আঙ্কল। হিজ সিক।",
              patternId: "X11.1"
            },
            {
              speaker_bn: "রাকিব",
              en: "Oh, sorry to hear that. Are you gonna stay long?",
              bn: "ও, সেটা শুনে খারাপ লাগলো। অনেকক্ষণ থাকবে?",
              pronunciation_bn: "ও, সরি টু হিয়ার দ্যাট। আর ইউ গনা স্টে লং?",
              patternId: "X11.1"
            },
            {
              speaker_bn: "সজীব",
              en: "No, I'm gonna come back by 8. My mom is gonna cook special dinner tonight.",
              bn: "না, আমি ৮টার মধ্যে ফিরবো। আমার মা আজ রাতে স্পেশাল রান্না করবে।",
              pronunciation_bn: "নো, আইম গনা কাম ব্যাক বাই এইট। মাই মম ইজ গনা কুক স্পেশাল ডিনার টুনাইট।",
              patternId: "X11.1"
            },
            {
              speaker_bn: "রাকিব",
              en: "Nice! I'm gonna just watch cricket at home.",
              bn: "সুন্দর! আমি বাসায় ক্রিকেট দেখবো।",
              pronunciation_bn: "নাইস! আইম গনা জাস্ট ওয়াচ ক্রিকেট অ্যাট হোম।",
              patternId: "X11.1"
            }
          ],
          patternsUsed: ["X11.1"]
        }
      ],
      slots: [
        {
          name: "VERB",
          description: "Any action you plan to do in the future",
          description_bn: "যে কাজ তুমি ভবিষ্যতে করতে চাও",
          acceptedTypes: ["verb", "verb phrase"],
          examples: ["eat", "go home", "visit my friend", "buy a phone", "watch a movie", "cook dinner", "take a shower", "call my mom", "finish this work", "sleep early"]
        }
      ],
      examples: [
        {
          en: "I'm gonna eat rice now.",
          bn: "আমি এখন ভাত খাবো।",
          pronunciation_bn: "আইম গনা ইট রাইস নাউ",
          slotValues: { VERB: "eat rice now" },
          topicArea: "daily_life",
          stage: 1
        },
        {
          en: "I'm gonna go to the market.",
          bn: "আমি বাজার যাবো।",
          pronunciation_bn: "আইম গনা গো টু দ্য মার্কেট",
          slotValues: { VERB: "go to the market" },
          topicArea: "shopping",
          stage: 1,
          miniStory: {
            situation_bn: "শুক্রবার সকালে বাজারে সবজি কিনতে যাচ্ছো",
            icon: "🛒"
          }
        },
        {
          en: "I'm gonna call my mom.",
          bn: "আমি আমার মাকে ফোন করবো।",
          pronunciation_bn: "আইম গনা কল মাই মম",
          slotValues: { VERB: "call my mom" },
          topicArea: "social_interaction",
          stage: 1
        },
        {
          en: "I'm gonna visit my village next Friday.",
          bn: "আমি আগামী শুক্রবার গ্রামে যাবো।",
          pronunciation_bn: "আইম গনা ভিজিট মাই ভিলেজ নেক্সট ফ্রাইডে",
          slotValues: { VERB: "visit my village next Friday" },
          topicArea: "daily_life",
          stage: 1
        },
        {
          en: "I'm gonna watch the cricket match tonight.",
          bn: "আমি আজ রাতে ক্রিকেট ম্যাচ দেখবো।",
          pronunciation_bn: "আইম গনা ওয়াচ দ্য ক্রিকেট ম্যাচ টুনাইট",
          slotValues: { VERB: "watch the cricket match tonight" },
          topicArea: "daily_life",
          stage: 1,
          miniStory: {
            situation_bn: "বাংলাদেশ-ভারত ম্যাচ রাত ৯টায়, তুমি বন্ধুদের সাথে দেখবে",
            icon: "🏏"
          }
        },
        {
          en: "She's gonna submit the report tomorrow.",
          bn: "সে কাল রিপোর্ট জমা দেবে।",
          pronunciation_bn: "শিজ গনা সাবমিট দ্য রিপোর্ট টুমরো",
          slotValues: { VERB: "submit the report tomorrow" },
          topicArea: "work",
          stage: 2
        },
        {
          en: "We're gonna have biryani for lunch.",
          bn: "আমরা দুপুরে বিরিয়ানি খাবো।",
          pronunciation_bn: "উইর গনা হ্যাভ বিরিয়ানি ফর লাঞ্চ",
          slotValues: { VERB: "have biryani for lunch" },
          topicArea: "food",
          stage: 2,
          miniStory: {
            situation_bn: "অফিসের সবাই মিলে কাছের রেস্টুরেন্টে খেতে যাবে",
            icon: "🍛"
          }
        },
        {
          en: "He's gonna start a new job next month.",
          bn: "সে আগামী মাসে নতুন চাকরি শুরু করবে।",
          pronunciation_bn: "হিজ গনা স্টার্ট অ্যা নিউ জব নেক্সট মান্থ",
          slotValues: { VERB: "start a new job next month" },
          topicArea: "work",
          stage: 2
        },
        {
          en: "They're gonna repair the road.",
          bn: "তারা রাস্তা মেরামত করবে।",
          pronunciation_bn: "দেয়ার গনা রিপেয়ার দ্য রোড",
          slotValues: { VERB: "repair the road" },
          topicArea: "daily_life",
          stage: 2,
          miniStory: {
            situation_bn: "তোমার এলাকার রাস্তা খারাপ, সিটি কর্পোরেশন ঠিক করবে",
            icon: "🚧"
          }
        },
        {
          en: "I'm gonna pay the electricity bill today.",
          bn: "আমি আজ বিদ্যুৎ বিল দেবো।",
          pronunciation_bn: "আইম গনা পে দ্য ইলেকট্রিসিটি বিল টুডে",
          slotValues: { VERB: "pay the electricity bill today" },
          topicArea: "finance",
          stage: 2
        },
        {
          en: "The doctor is gonna check my blood pressure.",
          bn: "ডাক্তার আমার রক্তচাপ পরীক্ষা করবেন।",
          pronunciation_bn: "দ্য ডক্টর ইজ গনা চেক মাই ব্লাড প্রেশার",
          slotValues: { VERB: "check my blood pressure" },
          topicArea: "health",
          stage: 3,
          miniStory: {
            situation_bn: "তুমি হাসপাতালে গেছো, ডাক্তার চেকআপ করবেন",
            icon: "🏥"
          }
        },
        {
          en: "My sister is gonna get married in December.",
          bn: "আমার বোনের বিয়ে ডিসেম্বরে হবে।",
          pronunciation_bn: "মাই সিস্টার ইজ গনা গেট ম্যারিড ইন ডিসেম্বর",
          slotValues: { VERB: "get married in December" },
          topicArea: "social_interaction",
          stage: 3
        },
        {
          en: "The company is gonna launch a new product.",
          bn: "কোম্পানি নতুন পণ্য বাজারে আনবে।",
          pronunciation_bn: "দ্য কোম্পানি ইজ গনা লঞ্চ অ্যা নিউ প্রোডাক্ট",
          slotValues: { VERB: "launch a new product" },
          topicArea: "work",
          stage: 3
        },
        {
          en: "We're gonna offer Jummah prayer at the new mosque.",
          bn: "আমরা নতুন মসজিদে জুম্মার নামাজ পড়বো।",
          pronunciation_bn: "উইর গনা অফার জুম্মাহ প্রেয়ার অ্যাট দ্য নিউ মস্ক",
          slotValues: { VERB: "offer Jummah prayer at the new mosque" },
          topicArea: "religion",
          stage: 3,
          miniStory: {
            situation_bn: "এলাকায় নতুন বড় মসজিদ হয়েছে, সবাই সেখানে জুম্মা পড়তে যাবে",
            icon: "🕌"
          }
        },
        {
          en: "The government is gonna increase the minimum wage.",
          bn: "সরকার সর্বনিম্ন মজুরি বাড়াবে।",
          pronunciation_bn: "দ্য গভর্নমেন্ট ইজ গনা ইনক্রিজ দ্য মিনিমাম ওয়েজ",
          slotValues: { VERB: "increase the minimum wage" },
          topicArea: "finance",
          stage: 3
        }
      ]
    },
    {
      id: "X11.2",
      patternName: "Wanna (Want to)",
      patternName_bn: "ওয়ানা মানে 'চাই' বলা",
      concept_bn: "চাই",
      formula: "I wanna [VERB]",
      formula_bn: "আমি [কাজ] করতে চাই",
      formulaPronunciation_bn: "আই ওয়ানা [কাজ]",
      usageNote: "Wanna is the casual spoken reduction of 'want to'. It's extremely common in everyday American and British speech. Use it with friends and family, but avoid it in formal business situations or written communication.",
      usageNote_bn: "ওয়ানা মানে 'want to' এর সংক্ষেপ। বন্ধু-পরিবারের সাথে কথায় সবচেয়ে বেশি ব্যবহার হয়। অফিসের মিটিং বা লেখায় ব্যবহার করবে না, শুধু মুখের কথায়।",
      difficulty: "intermediate",
      formality: "casual",
      banglaStructureMap: "বাংলা: আমি যেতে চাই → English: I wanna go",
      bridgeRuleIds: ["BR1", "BR7"],
      conversionSteps: {
        banglaThought: "আমি চা খেতে চাই",
        steps: [
          {
            step_bn: "প্রথমে বলো 'আমি' মানে I",
            result: "I"
          },
          {
            step_bn: "তারপর বলো 'চাই' মানে wanna",
            result: "I wanna"
          },
          {
            step_bn: "শেষে কাজটা বলো — চা খেতে মানে have tea",
            result: "I wanna have tea"
          }
        ],
        finalResult: "I wanna have tea",
        finalResult_bn: "আই ওয়ানা হ্যাভ টি"
      },
      commonMistakes: [
        {
          wrong: "I wanna to go (to দুইবার)",
          correct: "I wanna go",
          explanation_bn: "wanna মানেই want to, তাই আরেকবার to লাগবে না।"
        },
        {
          wrong: "I wanna rice (জিনিসের নাম)",
          correct: "I want rice (জিনিস), I wanna eat rice (কাজ)",
          explanation_bn: "wanna এর পরে সব সময় কাজ বলতে হবে। শুধু জিনিস চাইলে want বলো।"
        },
        {
          wrong: "He wanna go (He এর সাথে wanna)",
          correct: "He wants to go (অফিসিয়াল) বা He wanna go (খুবই ক্যাজুয়াল)",
          explanation_bn: "he/she/it এর সাথে wanna খুবই ক্যাজুয়াল শোনায়, wants to বলা ভালো।"
        }
      ],
      simpleRules: [
        {
          rule_bn: "wanna শুধু কথায় বলো, বসকে ইমেইল লিখলে want to লেখো",
          example: "Friend: I wanna leave early. Boss (email): I want to request early leave."
        },
        {
          rule_bn: "wanna এর পরে সব সময় কাজ বলবে, জিনিসের নাম না",
          example: "I wanna eat biryani. (কাজ = eat) NOT: I wanna biryani."
        },
        {
          rule_bn: "wanna মানে 'চাই' — তোমার ইচ্ছা বা আগ্রহ বোঝায়",
          example: "I wanna learn English. I wanna visit Cox's Bazar."
        }
      ],
      usageSituations: [
        {
          situation_bn: "বন্ধুকে বলছো তুমি কী করতে চাও",
          situation_en: "Telling a friend what you want to do",
          exampleSentence: "I wanna watch a movie tonight.",
          exampleSentence_bn: "আমি আজ রাতে সিনেমা দেখতে চাই।"
        },
        {
          situation_bn: "পরিবারকে জানাচ্ছো তোমার ইচ্ছা",
          situation_en: "Sharing your wish with family",
          exampleSentence: "I wanna buy a new phone.",
          exampleSentence_bn: "আমি নতুন ফোন কিনতে চাই।"
        },
        {
          situation_bn: "সহকর্মীর কাছে তোমার পরিকল্পনা প্রকাশ করছো",
          situation_en: "Expressing your plan to a colleague",
          exampleSentence: "I wanna learn graphic design.",
          exampleSentence_bn: "আমি গ্রাফিক ডিজাইন শিখতে চাই।"
        }
      ],
      sentenceBuilding: [
        {
          previousPatternId: "X11.1",
          previousFormula: "I'm gonna [VERB]",
          previousFormula_bn: "আমি [কাজ] করবো",
          combined: "I wanna rest, so I'm gonna go home early.",
          combined_bn: "আমি বিশ্রাম নিতে চাই, তাই তাড়াতাড়ি বাসায় যাবো।"
        },
        {
          previousPatternId: "C14.2",
          previousFormula: "I don't think [STATEMENT]",
          previousFormula_bn: "আমার মনে হয় না [কথা]",
          combined: "I don't think I wanna go to the party.",
          combined_bn: "আমার মনে হয় না আমি পার্টিতে যেতে চাই।"
        }
      ],
      memoryTrick_bn: "wanna = ওয়ান্না (want to) — 'চাই' বলার সবচেয়ে সহজ উপায়। বন্ধুর সাথে সব সময় wanna বলো।",
      chunks: [
        {
          en: "I wanna",
          bn: "আমি চাই",
          pronunciation_bn: "আই ওয়ানা"
        },
        {
          en: "You wanna",
          bn: "তুমি চাও",
          pronunciation_bn: "ইউ ওয়ানা"
        },
        {
          en: "We wanna",
          bn: "আমরা চাই",
          pronunciation_bn: "উই ওয়ানা"
        },
        {
          en: "They wanna",
          bn: "তারা চায়",
          pronunciation_bn: "দে ওয়ানা"
        }
      ],
      wordMap: {
        bn_sentence: "আমি কক্সবাজার যেতে চাই",
        en_sentence: "I wanna go to Cox's Bazar",
        mappings: [
          {
            bn_word: "আমি",
            en_word: "I",
            type: "direct",
            bridgeRuleId: "BR1"
          },
          {
            bn_word: "যেতে চাই",
            en_word: "wanna go",
            type: "direct",
            bridgeRuleId: "BR7"
          },
          {
            bn_word: "কক্সবাজার",
            en_word: "to Cox's Bazar",
            type: "direct"
          }
        ]
      },
      answerTemplates: [
        {
          situation_bn: "কেউ জিজ্ঞেস করছে তুমি কী করতে চাও",
          question: "What do you wanna do this weekend?",
          question_bn: "এই উইকেন্ডে কী করতে চাও?",
          answerFormula: "I wanna [VERB]",
          answerFormula_bn: "আমি [কাজ] করতে চাই",
          pronunciation_bn: "আই ওয়ানা [কাজ]",
          examples: [
            {
              answer: "I wanna visit my grandparents.",
              answer_bn: "আমি আমার দাদা-দাদীর সাথে দেখা করতে চাই।",
              pronunciation_bn: "আই ওয়ানা ভিজিট মাই গ্র্যান্ডপ্যারেন্টস"
            },
            {
              answer: "I wanna relax at home.",
              answer_bn: "আমি বাসায় বিশ্রাম নিতে চাই।",
              pronunciation_bn: "আই ওয়ানা রিল্যাক্স অ্যাট হোম"
            },
            {
              answer: "I wanna go to the river.",
              answer_bn: "আমি নদীতে যেতে চাই।",
              pronunciation_bn: "আই ওয়ানা গো টু দ্য রিভার"
            }
          ]
        },
        {
          situation_bn: "বন্ধু জানতে চাইছে তুমি কী শিখতে চাও",
          question: "What skill do you wanna learn?",
          question_bn: "কী দক্ষতা শিখতে চাও?",
          answerFormula: "I wanna learn [SKILL]",
          answerFormula_bn: "আমি [দক্ষতা] শিখতে চাই",
          pronunciation_bn: "আই ওয়ানা লার্ন [দক্ষতা]",
          examples: [
            {
              answer: "I wanna learn coding.",
              answer_bn: "আমি কোডিং শিখতে চাই।",
              pronunciation_bn: "আই ওয়ানা লার্ন কোডিং"
            },
            {
              answer: "I wanna learn to drive.",
              answer_bn: "আমি গাড়ি চালানো শিখতে চাই।",
              pronunciation_bn: "আই ওয়ানা লার্ন টু ড্রাইভ"
            },
            {
              answer: "I wanna learn Arabic.",
              answer_bn: "আমি আরবি শিখতে চাই।",
              pronunciation_bn: "আই ওয়ানা লার্ন অ্যারাবিক"
            }
          ]
        },
        {
          situation_bn: "পরিবার জিজ্ঞেস করছে তুমি কী খেতে চাও",
          question: "What do you wanna eat for dinner?",
          question_bn: "রাতে কী খেতে চাও?",
          answerFormula: "I wanna have [FOOD]",
          answerFormula_bn: "আমি [খাবার] খেতে চাই",
          pronunciation_bn: "আই ওয়ানা হ্যাভ [খাবার]",
          examples: [
            {
              answer: "I wanna have fish curry.",
              answer_bn: "আমি মাছের ঝোল খেতে চাই।",
              pronunciation_bn: "আই ওয়ানা হ্যাভ ফিশ কারি"
            },
            {
              answer: "I wanna have chicken.",
              answer_bn: "আমি মুরগি খেতে চাই।",
              pronunciation_bn: "আই ওয়ানা হ্যাভ চিকেন"
            },
            {
              answer: "I wanna have something light.",
              answer_bn: "আমি হালকা কিছু খেতে চাই।",
              pronunciation_bn: "আই ওয়ানা হ্যাভ সামথিং লাইট"
            }
          ]
        }
      ],
      variations: [
        {
          variant: "negative",
          label: "Don't wanna (করতে চাই না)",
          label_bn: "ডোন্ট ওয়ানা — করতে চাই না",
          formula: "I don't wanna [VERB]",
          formula_bn: "আমি [কাজ] করতে চাই না",
          examples: [
            {
              en: "I don't wanna go.",
              bn: "আমি যেতে চাই না।",
              pronunciation_bn: "আই ডোন্ট ওয়ানা গো",
              slotValues: { VERB: "go" },
              stage: 1
            },
            {
              en: "She doesn't wanna talk about it.",
              bn: "সে এটা নিয়ে কথা বলতে চায় না।",
              pronunciation_bn: "শি ডাজন্ট ওয়ানা টক অ্যাবাউট ইট",
              slotValues: { VERB: "talk about it" },
              stage: 2
            },
            {
              en: "They don't wanna invest in this project.",
              bn: "তারা এই প্রকল্পে বিনিয়োগ করতে চায় না।",
              pronunciation_bn: "দে ডোন্ট ওয়ানা ইনভেস্ট ইন দিস প্রজেক্ট",
              slotValues: { VERB: "invest in this project" },
              stage: 3
            }
          ]
        },
        {
          variant: "question",
          label: "Wanna question (করতে চাও কি?)",
          label_bn: "ওয়ানা প্রশ্ন — করতে চাও কি?",
          formula: "Do you wanna [VERB]?",
          formula_bn: "তুমি কি [কাজ] করতে চাও?",
          examples: [
            {
              en: "Do you wanna come with me?",
              bn: "তুমি কি আমার সাথে আসতে চাও?",
              pronunciation_bn: "ডু ইউ ওয়ানা কাম উইথ মি",
              slotValues: { VERB: "come with me" },
              stage: 1
            },
            {
              en: "Does he wanna join our team?",
              bn: "সে কি আমাদের টিমে যোগ দিতে চায়?",
              pronunciation_bn: "ডাজ হি ওয়ানা জয়েন আওয়ার টিম",
              slotValues: { VERB: "join our team" },
              stage: 2
            },
            {
              en: "Do they wanna participate in the competition?",
              bn: "তারা কি প্রতিযোগিতায় অংশ নিতে চায়?",
              pronunciation_bn: "ডু দে ওয়ানা পার্টিসিপেট ইন দ্য কম্পিটিশন",
              slotValues: { VERB: "participate in the competition" },
              stage: 3
            }
          ]
        },
        {
          variant: "past",
          label: "Wanted to (চেয়েছিলাম)",
          label_bn: "ওয়ান্টেড টু — চেয়েছিলাম",
          formula: "I wanted to [VERB]",
          formula_bn: "আমি [কাজ] করতে চেয়েছিলাম",
          examples: [
            {
              en: "I wanted to tell you earlier.",
              bn: "আমি আগে তোমাকে বলতে চেয়েছিলাম।",
              pronunciation_bn: "আই ওয়ান্টেড টু টেল ইউ আরলিয়ার",
              slotValues: { VERB: "tell you earlier" },
              stage: 2
            },
            {
              en: "She wanted to buy that dress.",
              bn: "সে ওই জামাটা কিনতে চেয়েছিলো।",
              pronunciation_bn: "শি ওয়ান্টেড টু বাই দ্যাট ড্রেস",
              slotValues: { VERB: "buy that dress" },
              stage: 2
            },
            {
              en: "We wanted to apply for the scholarship.",
              bn: "আমরা বৃত্তির জন্য আবেদন করতে চেয়েছিলাম।",
              pronunciation_bn: "উই ওয়ান্টেড টু অ্যাপ্লাই ফর দ্য স্কলারশিপ",
              slotValues: { VERB: "apply for the scholarship" },
              stage: 3
            }
          ]
        }
      ],
      dialogueChains: [
        {
          id: "X11.2-chain-1",
          title_bn: "বাসে দুই সহকর্মীর কথোপকথন",
          title_en: "Two colleagues talking on the bus",
          situation_bn: "অফিস ফেরত দুই সহকর্মী বাসে কথা বলছে",
          icon: "🚌",
          turns: [
            {
              speaker_bn: "নাজিয়া",
              en: "I'm so tired. I wanna go home and sleep.",
              bn: "আমি খুব ক্লান্ত। বাসায় গিয়ে ঘুমাতে চাই।",
              pronunciation_bn: "আইম সো টায়ার্ড। আই ওয়ানা গো হোম অ্যান্ড স্লিপ।",
              patternId: "X11.2"
            },
            {
              speaker_bn: "রুমানা",
              en: "Me too. Do you wanna grab some tea first?",
              bn: "আমিও। আগে কি চা খাবে?",
              pronunciation_bn: "মি টু। ডু ইউ ওয়ানা গ্র্যাব সাম টি ফার্স্ট?",
              patternId: "X11.2"
            },
            {
              speaker_bn: "নাজিয়া",
              en: "Yeah, I wanna have tea. There's a good stall near my house.",
              bn: "হ্যাঁ, চা খেতে চাই। আমার বাসার কাছে ভালো দোকান আছে।",
              pronunciation_bn: "ইয়্যাহ, আই ওয়ানা হ্যাভ টি। দেয়ারজ অ্যা গুড স্টল নিয়ার মাই হাউস।",
              patternId: "X11.2"
            },
            {
              speaker_bn: "রুমানা",
              en: "Great! I don't wanna cook tonight anyway.",
              bn: "দারুণ! আমিও আজ রাতে রান্না করতে চাই না।",
              pronunciation_bn: "গ্রেট! আই ডোন্ট ওয়ানা কুক টুনাইট এনিওয়ে।",
              patternId: "X11.2"
            },
            {
              speaker_bn: "নাজিয়া",
              en: "Same here. Let's buy some singara too.",
              bn: "আমিও তাই। চলো কিছু সিঙ্গারাও কিনি।",
              pronunciation_bn: "সেম হিয়ার। লেটস বাই সাম সিঙ্গারা টু।",
              patternId: "X11.2"
            }
          ],
          patternsUsed: ["X11.2"]
        }
      ],
      slots: [
        {
          name: "VERB",
          description: "Any action you want to do",
          description_bn: "যে কাজ তুমি করতে চাও",
          acceptedTypes: ["verb", "verb phrase"],
          examples: ["go", "eat", "learn", "buy", "watch", "visit", "sleep", "talk", "study", "work"]
        }
      ],
      examples: [
        {
          en: "I wanna eat now.",
          bn: "আমি এখন খেতে চাই।",
          pronunciation_bn: "আই ওয়ানা ইট নাউ",
          slotValues: { VERB: "eat now" },
          topicArea: "daily_life",
          stage: 1
        },
        {
          en: "I wanna go home.",
          bn: "আমি বাসায় যেতে চাই।",
          pronunciation_bn: "আই ওয়ানা গো হোম",
          slotValues: { VERB: "go home" },
          topicArea: "daily_life",
          stage: 1,
          miniStory: {
            situation_bn: "অফিসে অনেক কাজ, তুমি ক্লান্ত, বাসায় যেতে চাও",
            icon: "🏠"
          }
        },
        {
          en: "I wanna learn English.",
          bn: "আমি ইংরেজি শিখতে চাই।",
          pronunciation_bn: "আই ওয়ানা লার্ন ইংলিশ",
          slotValues: { VERB: "learn English" },
          topicArea: "education",
          stage: 1
        },
        {
          en: "I wanna buy a new shirt.",
          bn: "আমি নতুন শার্ট কিনতে চাই।",
          pronunciation_bn: "আই ওয়ানা বাই অ্যা নিউ শার্ট",
          slotValues: { VERB: "buy a new shirt" },
          topicArea: "shopping",
          stage: 1
        },
        {
          en: "I wanna visit Cox's Bazar.",
          bn: "আমি কক্সবাজার যেতে চাই।",
          pronunciation_bn: "আই ওয়ানা ভিজিট কক্সেস বাজার",
          slotValues: { VERB: "visit Cox's Bazar" },
          topicArea: "daily_life",
          stage: 1,
          miniStory: {
            situation_bn: "ঈদের ছুটিতে পরিবার নিয়ে সমুদ্র দেখতে যাবে",
            icon: "🏖️"
          }
        },
        {
          en: "She wanna talk to the manager.",
          bn: "সে ম্যানেজারের সাথে কথা বলতে চায়।",
          pronunciation_bn: "শি ওয়ানা টক টু দ্য ম্যানেজার",
          slotValues: { VERB: "talk to the manager" },
          topicArea: "work",
          stage: 2
        },
        {
          en: "We wanna have biryani for lunch.",
          bn: "আমরা দুপুরে বিরিয়ানি খেতে চাই।",
          pronunciation_bn: "উই ওয়ানা হ্যাভ বিরিয়ানি ফর লাঞ্চ",
          slotValues: { VERB: "have biryani for lunch" },
          topicArea: "food",
          stage: 2,
          miniStory: {
            situation_bn: "শুক্রবার দুপুর, বন্ধুরা মিলে হাজির বিরিয়ানি খেতে যাবে",
            icon: "🍛"
          }
        },
        {
          en: "They wanna start a new business.",
          bn: "তারা নতুন ব্যবসা শুরু করতে চায়।",
          pronunciation_bn: "দে ওয়ানা স্টার্ট অ্যা নিউ বিজনেস",
          slotValues: { VERB: "start a new business" },
          topicArea: "finance",
          stage: 2
        },
        {
          en: "I wanna save money for Hajj.",
          bn: "আমি হজ্জের জন্য টাকা জমাতে চাই।",
          pronunciation_bn: "আই ওয়ানা সেভ মানি ফর হজ্জ",
          slotValues: { VERB: "save money for Hajj" },
          topicArea: "religion",
          stage: 2,
          miniStory: {
            situation_bn: "তুমি প্রতি মাসে কিছু টাকা রেখে হজ্জ করতে চাও",
            icon: "🕋"
          }
        },
        {
          en: "He wanna get his blood test done.",
          bn: "সে রক্ত পরীক্ষা করাতে চায়।",
          pronunciation_bn: "হি ওয়ানা গেট হিজ ব্লাড টেস্ট ডান",
          slotValues: { VERB: "get his blood test done" },
          topicArea: "health",
          stage: 2
        },
        {
          en: "My cousin wanna apply for a visa.",
          bn: "আমার কাজিন ভিসার জন্য আবেদন করতে চায়।",
          pronunciation_bn: "মাই কাজিন ওয়ানা অ্যাপ্লাই ফর অ্যা ভিসা",
          slotValues: { VERB: "apply for a visa" },
          topicArea: "work",
          stage: 3,
          miniStory: {
            situation_bn: "তোমার কাজিন দুবাই যেতে চায়, ভিসার কাগজপত্র করছে",
            icon: "✈️"
          }
        },
        {
          en: "The workers wanna increase their salary.",
          bn: "শ্রমিকরা তাদের বেতন বাড়াতে চায়।",
          pronunciation_bn: "দ্য ওয়ার্কারস ওয়ানা ইনক্রিজ দেয়ার স্যালারি",
          slotValues: { VERB: "increase their salary" },
          topicArea: "finance",
          stage: 3
        },
        {
          en: "I wanna open a bank account.",
          bn: "আমি ব্যাংক একাউন্ট খুলতে চাই।",
          pronunciation_bn: "আই ওয়ানা ওপেন অ্যা ব্যাংক অ্যাকাউন্ট",
          slotValues: { VERB: "open a bank account" },
          topicArea: "finance",
          stage: 3
        },
        {
          en: "The students wanna reschedule the exam.",
          bn: "ছাত্ররা পরীক্ষার সময় পরিবর্তন করতে চায়।",
          pronunciation_bn: "দ্য স্টুডেন্টস ওয়ানা রিশিডিউল দ্য এক্সাম",
          slotValues: { VERB: "reschedule the exam" },
          topicArea: "education",
          stage: 3,
          miniStory: {
            situation_bn: "পরীক্ষা ঈদের আগে, সবাই চায় পরে হোক",
            icon: "📚"
          }
        },
        {
          en: "We wanna organize a community iftar.",
          bn: "আমরা কমিউনিটি ইফতার আয়োজন করতে চাই।",
          pronunciation_bn: "উই ওয়ানা অর্গানাইজ অ্যা কমিউনিটি ইফতার",
          slotValues: { VERB: "organize a community iftar" },
          topicArea: "religion",
          stage: 3,
          miniStory: {
            situation_bn: "রমজানে মহল্লার সবার জন্য বড় ইফতার আয়োজন করবে",
            icon: "🌙"
          }
        }
      ]
    },
    {
      id: "X11.3",
      patternName: "Gotta (Got to / Have to)",
      patternName_bn: "গটা মানে 'লাগবে/করতে হবে' বলা",
      concept_bn: "করতে হবে",
      formula: "I gotta [VERB]",
      formula_bn: "আমাকে [কাজ] করতে হবে",
      formulaPronunciation_bn: "আই গটা [কাজ]",
      usageNote: "Gotta is the casual spoken reduction of 'got to' or 'have to'. It expresses necessity or obligation in a relaxed, conversational way. Use it with friends and family, but stick to 'have to' or 'need to' in formal situations.",
      usageNote_bn: "গটা মানে 'got to' বা 'have to' এর সংক্ষেপ। এটা বাধ্যবাধকতা বা দরকার বোঝায় — যা করতেই হবে। বন্ধু-পরিবারের সাথে গটা বলো, অফিসের মিটিং বা লেখায় have to বা need to বলো।",
      difficulty: "intermediate",
      formality: "casual",
      banglaStructureMap: "বাংলা: আমাকে যেতে হবে → English: I gotta go",
      bridgeRuleIds: ["BR1", "BR7"],
      conversionSteps: {
        banglaThought: "আমাকে এখন যেতে হবে",
        steps: [
          {
            step_bn: "প্রথমে বলো 'আমাকে' মানে I",
            result: "I"
          },
          {
            step_bn: "তারপর বলো 'হবে/লাগবে' মানে gotta",
            result: "I gotta"
          },
          {
            step_bn: "শেষে কাজটা বলো — যেতে মানে go",
            result: "I gotta go"
          }
        ],
        finalResult: "I gotta go now",
        finalResult_bn: "আই গটা গো নাউ"
      },
      commonMistakes: [
        {
          wrong: "I gotta to go (to দুইবার)",
          correct: "I gotta go",
          explanation_bn: "gotta মানেই got to, তাই আরেকবার to লাগবে না।"
        },
        {
          wrong: "I gotta (শুধু gotta, কাজ নাই)",
          correct: "I gotta go / I gotta work",
          explanation_bn: "gotta এর পরে সব সময় কাজ বলতে হবে — কী করতে হবে সেটা।"
        },
        {
          wrong: "He gotta go (He এর সাথে gotta)",
          correct: "He's gotta go বা He has to go",
          explanation_bn: "he/she/it এর সাথে gotta বলতে হলে আগে he's/she's লাগবে। নইলে has to বলো।"
        }
      ],
      simpleRules: [
        {
          rule_bn: "gotta মানে 'লাগবে' বা 'করতে হবে' — এটা বাধ্যবাধকতা",
          example: "I gotta finish this work. I gotta pay the rent."
        },
        {
          rule_bn: "gotta শুধু কথায় বলো, চিঠি-ইমেইলে have to লেখো",
          example: "Friend: I gotta leave. Boss (email): I have to attend a meeting."
        },
        {
          rule_bn: "gotta এর পরে সব সময় কাজ বলবে",
          example: "I gotta go. I gotta study. I gotta call my mom."
        }
      ],
      usageSituations: [
        {
          situation_bn: "বন্ধুকে বলছো তোমাকে যেতে হবে",
          situation_en: "Telling a friend you have to leave",
          exampleSentence: "Sorry, I gotta go now. My mom is calling.",
          exampleSentence_bn: "সরি, এখন যেতে হবে। মা ডাকছে।"
        },
        {
          situation_bn: "সহকর্মীকে জানাচ্ছো তোমার দায়িত্ব",
          situation_en: "Informing a colleague about your responsibility",
          exampleSentence: "I gotta submit the report by tomorrow.",
          exampleSentence_bn: "কাল পর্যন্ত রিপোর্ট জমা দিতে হবে।"
        },
        {
          situation_bn: "পরিবারকে বলছো তোমার কাজ",
          situation_en: "Telling family about your task",
          exampleSentence: "I gotta finish my homework first.",
          exampleSentence_bn: "প্রথমে হোমওয়ার্ক শেষ করতে হবে।"
        }
      ],
      sentenceBuilding: [
        {
          previousPatternId: "X11.1",
          previousFormula: "I'm gonna [VERB]",
          previousFormula_bn: "আমি [কাজ] করবো",
          combined: "I gotta finish this work, then I'm gonna rest.",
          combined_bn: "এই কাজ শেষ করতে হবে, তারপর বিশ্রাম নেবো।"
        },
        {
          previousPatternId: "X11.2",
          previousFormula: "I wanna [VERB]",
          previousFormula_bn: "আমি [কাজ] করতে চাই",
          combined: "I wanna watch TV, but I gotta study.",
          combined_bn: "আমি টিভি দেখতে চাই, কিন্তু পড়তে হবে।"
        }
      ],
      memoryTrick_bn: "gotta = গটা (got to) — 'করতেই হবে' বলার সবচেয়ে সহজ উপায়। বাধ্যবাধকতা আছে এমন কাজে gotta ব্যবহার করো।",
      chunks: [
        {
          en: "I gotta",
          bn: "আমাকে লাগবে",
          pronunciation_bn: "আই গটা"
        },
        {
          en: "You gotta",
          bn: "তোমাকে লাগবে",
          pronunciation_bn: "ইউ গটা"
        },
        {
          en: "We gotta",
          bn: "আমাদের লাগবে",
          pronunciation_bn: "উই গটা"
        },
        {
          en: "They gotta",
          bn: "তাদের লাগবে",
          pronunciation_bn: "দে গটা"
        }
      ],
      wordMap: {
        bn_sentence: "আমাকে অফিসে যেতে হবে",
        en_sentence: "I gotta go to the office",
        mappings: [
          {
            bn_word: "আমাকে",
            en_word: "I",
            type: "direct",
            bridgeRuleId: "BR1"
          },
          {
            bn_word: "যেতে হবে",
            en_word: "gotta go",
            type: "direct",
            bridgeRuleId: "BR7"
          },
          {
            bn_word: "অফিসে",
            en_word: "to the office",
            type: "direct"
          }
        ]
      },
      answerTemplates: [
        {
          situation_bn: "কেউ জিজ্ঞেস করছে তোমাকে কী করতে হবে",
          question: "What do you gotta do today?",
          question_bn: "আজ কী করতে হবে?",
          answerFormula: "I gotta [VERB]",
          answerFormula_bn: "আমাকে [কাজ] করতে হবে",
          pronunciation_bn: "আই গটা [কাজ]",
          examples: [
            {
              answer: "I gotta pay my bills.",
              answer_bn: "আমাকে বিল দিতে হবে।",
              pronunciation_bn: "আই গটা পে মাই বিলস"
            },
            {
              answer: "I gotta pick up my kid from school.",
              answer_bn: "আমাকে স্কুল থেকে বাচ্চা নিয়ে আসতে হবে।",
              pronunciation_bn: "আই গটা পিক আপ মাই কিড ফ্রম স্কুল"
            },
            {
              answer: "I gotta meet a client.",
              answer_bn: "আমাকে একজন ক্লায়েন্টের সাথে দেখা করতে হবে।",
              pronunciation_bn: "আই গটা মিট অ্যা ক্লায়েন্ট"
            }
          ]
        },
        {
          situation_bn: "বন্ধু জানতে চাইছে তুমি কেন যাচ্ছো",
          question: "Why are you leaving so early?",
          question_bn: "এত তাড়াতাড়ি কেন যাচ্ছো?",
          answerFormula: "I gotta [VERB]",
          answerFormula_bn: "আমাকে [কাজ] করতে হবে",
          pronunciation_bn: "আই গটা [কাজ]",
          examples: [
            {
              answer: "I gotta catch the bus.",
              answer_bn: "আমাকে বাস ধরতে হবে।",
              pronunciation_bn: "আই গটা ক্যাচ দ্য বাস"
            },
            {
              answer: "I gotta see the doctor.",
              answer_bn: "আমাকে ডাক্তার দেখাতে হবে।",
              pronunciation_bn: "আই গটা সি দ্য ডক্টর"
            },
            {
              answer: "I gotta finish some urgent work.",
              answer_bn: "আমাকে জরুরি কিছু কাজ শেষ করতে হবে।",
              pronunciation_bn: "আই গটা ফিনিশ সাম আরজেন্ট ওয়ার্ক"
            }
          ]
        },
        {
          situation_bn: "পরিবার জিজ্ঞেস করছে তুমি কী করতে যাচ্ছো",
          question: "What do you gotta do before you go out?",
          question_bn: "বাইরে যাওয়ার আগে কী করতে হবে?",
          answerFormula: "I gotta [VERB] first",
          answerFormula_bn: "প্রথমে [কাজ] করতে হবে",
          pronunciation_bn: "আই গটা [কাজ] ফার্স্ট",
          examples: [
            {
              answer: "I gotta pray Asr first.",
              answer_bn: "প্রথমে আসর পড়তে হবে।",
              pronunciation_bn: "আই গটা প্রে আসর ফার্স্ট"
            },
            {
              answer: "I gotta change my clothes first.",
              answer_bn: "প্রথমে কাপড় বদলাতে হবে।",
              pronunciation_bn: "আই গটা চেঞ্জ মাই ক্লোথস ফার্স্ট"
            },
            {
              answer: "I gotta eat something first.",
              answer_bn: "প্রথমে কিছু খেতে হবে।",
              pronunciation_bn: "আই গটা ইট সামথিং ফার্স্ট"
            }
          ]
        }
      ],
      variations: [
        {
          variant: "negative",
          label: "Don't gotta (করতে হবে না)",
          label_bn: "ডোন্ট গটা — করতে হবে না",
          formula: "I don't gotta [VERB]",
          formula_bn: "আমাকে [কাজ] করতে হবে না",
          examples: [
            {
              en: "I don't gotta work tomorrow.",
              bn: "আমাকে কাল কাজ করতে হবে না।",
              pronunciation_bn: "আই ডোন্ট গটা ওয়ার্ক টুমরো",
              slotValues: { VERB: "work tomorrow" },
              stage: 1
            },
            {
              en: "You don't gotta wait for me.",
              bn: "তোমাকে আমার জন্য অপেক্ষা করতে হবে না।",
              pronunciation_bn: "ইউ ডোন্ট গটা ওয়েইট ফর মি",
              slotValues: { VERB: "wait for me" },
              stage: 2
            },
            {
              en: "They don't gotta submit the application today.",
              bn: "তাদের আজ আবেদন জমা দিতে হবে না।",
              pronunciation_bn: "দে ডোন্ট গটা সাবমিট দ্য অ্যাপ্লিকেশন টুডে",
              slotValues: { VERB: "submit the application today" },
              stage: 3
            }
          ]
        },
        {
          variant: "question",
          label: "Gotta question (করতে হবে কি?)",
          label_bn: "গটা প্রশ্ন — করতে হবে কি?",
          formula: "Do I gotta [VERB]?",
          formula_bn: "আমাকে কি [কাজ] করতে হবে?",
          examples: [
            {
              en: "Do I gotta come?",
              bn: "আমাকে কি আসতে হবে?",
              pronunciation_bn: "ডু আই গটা কাম",
              slotValues: { VERB: "come" },
              stage: 1
            },
            {
              en: "Do we gotta bring our own food?",
              bn: "আমাদের কি নিজেদের খাবার আনতে হবে?",
              pronunciation_bn: "ডু উই গটা ব্রিং আওয়ার ওউন ফুড",
              slotValues: { VERB: "bring our own food" },
              stage: 2
            },
            {
              en: "Do they gotta register before the deadline?",
              bn: "তাদের কি শেষ তারিখের আগে নিবন্ধন করতে হবে?",
              pronunciation_bn: "ডু দে গটা রেজিস্টার বিফোর দ্য ডেডলাইন",
              slotValues: { VERB: "register before the deadline" },
              stage: 3
            }
          ]
        },
        {
          variant: "emphasis",
          label: "You gotta (তোমাকে অবশ্যই — পরামর্শ)",
          label_bn: "ইউ গটা — তোমাকে অবশ্যই করা উচিত",
          formula: "You gotta [VERB]",
          formula_bn: "তোমাকে অবশ্যই [কাজ] করতে হবে",
          examples: [
            {
              en: "You gotta try this biryani!",
              bn: "তোমাকে এই বিরিয়ানি চেষ্টা করতেই হবে!",
              pronunciation_bn: "ইউ গটা ট্রাই দিস বিরিয়ানি",
              slotValues: { VERB: "try this biryani" },
              stage: 2
            },
            {
              en: "You gotta see this movie.",
              bn: "তোমাকে এই সিনেমা দেখতেই হবে।",
              pronunciation_bn: "ইউ গটা সি দিস মুভি",
              slotValues: { VERB: "see this movie" },
              stage: 2
            },
            {
              en: "You gotta be more careful with your documents.",
              bn: "তোমাকে তোমার কাগজপত্র নিয়ে আরো সাবধান হতে হবে।",
              pronunciation_bn: "ইউ গটা বি মোর কেয়ারফুল উইথ ইউর ডকুমেন্টস",
              slotValues: { VERB: "be more careful with your documents" },
              stage: 3
            }
          ]
        }
      ],
      dialogueChains: [
        {
          id: "X11.3-chain-1",
          title_bn: "বাজারে দুই বন্ধুর কথোপকথন",
          title_en: "Two friends talking at the market",
          situation_bn: "দুই বন্ধু বাজারে দেখা হলো, একজন তাড়াহুড়ো করছে",
          icon: "🛒",
          turns: [
            {
              speaker_bn: "শাকিল",
              en: "Hey! Long time! Do you have time for tea?",
              bn: "হেই! অনেক দিন! চায়ের সময় আছে?",
              pronunciation_bn: "হেই! লং টাইম! ডু ইউ হ্যাভ টাইম ফর টি?",
              patternId: "X11.3"
            },
            {
              speaker_bn: "রাশেদ",
              en: "Sorry man, I gotta go home fast. My wife is sick.",
              bn: "সরি ভাই, তাড়াতাড়ি বাসায় যেতে হবে। আমার বউ অসুস্থ।",
              pronunciation_bn: "সরি ম্যান, আই গটা গো হোম ফাস্ট। মাই ওয়াইফ ইজ সিক।",
              patternId: "X11.3"
            },
            {
              speaker_bn: "শাকিল",
              en: "Oh no! Do you gotta take her to the hospital?",
              bn: "ও না! তাকে হাসপাতালে নিতে হবে?",
              pronunciation_bn: "ও নো! ডু ইউ গটা টেক হার টু দ্য হসপিটাল?",
              patternId: "X11.3"
            },
            {
              speaker_bn: "রাশেদ",
              en: "Not sure yet. I gotta check her fever first.",
              bn: "এখনো নিশ্চিত না। প্রথমে জ্বর দেখতে হবে।",
              pronunciation_bn: "নট শিওর ইয়েট। আই গটা চেক হার ফিভার ফার্স্ট।",
              patternId: "X11.3"
            },
            {
              speaker_bn: "শাকিল",
              en: "Okay, go fast. You gotta take care of her.",
              bn: "ঠিক আছে, তাড়াতাড়ি যাও। তার যত্ন নিতে হবে।",
              pronunciation_bn: "ওকে, গো ফাস্ট। ইউ গটা টেক কেয়ার অফ হার।",
              patternId: "X11.3"
            },
            {
              speaker_bn: "রাশেদ",
              en: "Thanks. I gotta buy some medicine too. Talk later!",
              bn: "ধন্যবাদ। কিছু ওষুধও কিনতে হবে। পরে কথা হবে!",
              pronunciation_bn: "থ্যাংকস। আই গটা বাই সাম মেডিসিন টু। টক লেটার!",
              patternId: "X11.3"
            }
          ],
          patternsUsed: ["X11.3"]
        }
      ],
      slots: [
        {
          name: "VERB",
          description: "Any action you must do or have to do",
          description_bn: "যে কাজ তোমাকে করতেই হবে",
          acceptedTypes: ["verb", "verb phrase"],
          examples: ["go", "work", "study", "pay", "finish", "submit", "call", "leave", "attend", "check"]
        }
      ],
      examples: [
        {
          en: "I gotta go now.",
          bn: "আমাকে এখন যেতে হবে।",
          pronunciation_bn: "আই গটা গো নাউ",
          slotValues: { VERB: "go now" },
          topicArea: "daily_life",
          stage: 1
        },
        {
          en: "I gotta work tomorrow.",
          bn: "আমাকে কাল কাজ করতে হবে।",
          pronunciation_bn: "আই গটা ওয়ার্ক টুমরো",
          slotValues: { VERB: "work tomorrow" },
          topicArea: "work",
          stage: 1,
          miniStory: {
            situation_bn: "শুক্রবার কিন্তু অফিসে জরুরি কাজ আছে",
            icon: "💼"
          }
        },
        {
          en: "I gotta pray Maghrib.",
          bn: "আমাকে মাগরিব পড়তে হবে।",
          pronunciation_bn: "আই গটা প্রে মাগরিব",
          slotValues: { VERB: "pray Maghrib" },
          topicArea: "religion",
          stage: 1
        },
        {
          en: "I gotta catch the bus.",
          bn: "আমাকে বাস ধরতে হবে।",
          pronunciation_bn: "আই গটা ক্যাচ দ্য বাস",
          slotValues: { VERB: "catch the bus" },
          topicArea: "transport",
          stage: 1
        },
        {
          en: "I gotta call my mom.",
          bn: "আমাকে মাকে ফোন করতে হবে।",
          pronunciation_bn: "আই গটা কল মাই মম",
          slotValues: { VERB: "call my mom" },
          topicArea: "social_interaction",
          stage: 1,
          miniStory: {
            situation_bn: "তুমি গ্রামে গেছো, মাকে জানাতে হবে",
            icon: "📞"
          }
        },
        {
          en: "She's gotta submit the assignment today.",
          bn: "তাকে আজ এসাইনমেন্ট জমা দিতে হবে।",
          pronunciation_bn: "শিজ গটা সাবমিট দ্য অ্যাসাইনমেন্ট টুডে",
          slotValues: { VERB: "submit the assignment today" },
          topicArea: "education",
          stage: 2
        },
        {
          en: "We gotta pay the rent by Friday.",
          bn: "আমাদের শুক্রবারের মধ্যে ভাড়া দিতে হবে।",
          pronunciation_bn: "উই গটা পে দ্য রেন্ট বাই ফ্রাইডে",
          slotValues: { VERB: "pay the rent by Friday" },
          topicArea: "finance",
          stage: 2,
          miniStory: {
            situation_bn: "মাসের শেষ, বাড়িওয়ালা ভাড়া চাইছে",
            icon: "🏠"
          }
        },
        {
          en: "He's gotta see the doctor about his back pain.",
          bn: "তাকে পিঠের ব্যথা নিয়ে ডাক্তার দেখাতে হবে।",
          pronunciation_bn: "হিজ গটা সি দ্য ডক্টর অ্যাবাউট হিজ ব্যাক পেইন",
          slotValues: { VERB: "see the doctor about his back pain" },
          topicArea: "health",
          stage: 2
        },
        {
          en: "They gotta finish the project by next week.",
          bn: "তাদের আগামী সপ্তাহের মধ্যে প্রজেক্ট শেষ করতে হবে।",
          pronunciation_bn: "দে গটা ফিনিশ দ্য প্রজেক্ট বাই নেক্সট উইক",
          slotValues: { VERB: "finish the project by next week" },
          topicArea: "work",
          stage: 2,
          miniStory: {
            situation_bn: "ক্লায়েন্ট ডেডলাইন দিয়েছে, শেষ করতেই হবে",
            icon: "⏰"
          }
        },
        {
          en: "I gotta buy vegetables for the week.",
          bn: "আমাকে সপ্তাহের জন্য সবজি কিনতে হবে।",
          pronunciation_bn: "আই গটা বাই ভেজিটেবলস ফর দ্য উইক",
          slotValues: { VERB: "buy vegetables for the week" },
          topicArea: "shopping",
          stage: 2
        },
        {
          en: "The teacher's gotta prepare the exam papers.",
          bn: "শিক্ষককে পরীক্ষার প্রশ্নপত্র তৈরি করতে হবে।",
          pronunciation_bn: "দ্য টিচারজ গটা প্রিপেয়ার দ্য এক্সাম পেপারস",
          slotValues: { VERB: "prepare the exam papers" },
          topicArea: "education",
          stage: 3,
          miniStory: {
            situation_bn: "পরীক্ষা আগামী সপ্তাহে, শিক্ষক প্রশ্ন বানাচ্ছেন",
            icon: "📝"
          }
        },
        {
          en: "We gotta renew our trade license this month.",
          bn: "আমাদের এই মাসে ট্রেড লাইসেন্স নবায়ন করতে হবে।",
          pronunciation_bn: "উই গটা রিনিউ আওয়ার ট্রেড লাইসেন্স দিস মান্থ",
          slotValues: { VERB: "renew our trade license this month" },
          topicArea: "finance",
          stage: 3
        },
        {
          en: "My brother's gotta appear for his visa interview.",
          bn: "আমার ভাইকে ভিসা ইন্টারভিউতে যেতে হবে।",
          pronunciation_bn: "মাই ব্রাদারজ গটা অ্যাপিয়ার ফর হিজ ভিসা ইন্টারভিউ",
          slotValues: { VERB: "appear for his visa interview" },
          topicArea: "work",
          stage: 3
        },
        {
          en: "The workers gotta complete the construction before monsoon.",
          bn: "শ্রমিকদের বর্ষার আগে নির্মাণ শেষ করতে হবে।",
          pronunciation_bn: "দ্য ওয়ার্কারজ গটা কমপ্লিট দ্য কন্সট্রাকশন বিফোর মনসুন",
          slotValues: { VERB: "complete the construction before monsoon" },
          topicArea: "work",
          stage: 3,
          miniStory: {
            situation_bn: "ভবন নির্মাণ চলছে, বৃষ্টি আসার আগে ছাদ ঢালতে হবে",
            icon: "🏗️"
          }
        },
        {
          en: "I gotta get my passport renewed for Umrah.",
          bn: "আমাকে ওমরাহর জন্য পাসপোর্ট নবায়ন করাতে হবে।",
          pronunciation_bn: "আই গটা গেট মাই পাসপোর্ট রিনিউড ফর ওমরাহ",
          slotValues: { VERB: "get my passport renewed for Umrah" },
          topicArea: "religion",
          stage: 3,
          miniStory: {
            situation_bn: "তুমি ওমরাহ যাবে, পাসপোর্ট মেয়াদ শেষ হয়ে গেছে",
            icon: "🕋"
          }
        }
      ]
    },
    {
      id: "X11.4",
      patternName: "Lemme (Let me)",
      patternName_bn: "লেমি মানে 'করতে দাও' বলা",
      concept_bn: "করতে দাও",
      formula: "Lemme [VERB]",
      formula_bn: "আমাকে [কাজ] করতে দাও",
      formulaPronunciation_bn: "লেমি [কাজ]",
      usageNote: "Lemme is the casual spoken reduction of 'let me'. It's used when you want permission or when offering to do something. Common in American and British casual speech. Never use it in formal writing or professional situations.",
      usageNote_bn: "লেমি মানে 'let me' এর সংক্ষেপ। যখন তুমি অনুমতি চাও বা কিছু করার ইচ্ছা প্রকাশ করো তখন বলো। এটা শুধু মুখের কথা, লেখার জন্য না। অফিসের ইমেইল বা রিপোর্টে 'let me' লেখো।",
      difficulty: "intermediate",
      formality: "casual",
      banglaStructureMap: "বাংলা: আমাকে দেখতে দাও → English: Lemme see",
      bridgeRuleIds: ["BR1", "BR7"],
      conversionSteps: {
        banglaThought: "আমাকে চেষ্টা করতে দাও",
        steps: [
          {
            step_bn: "প্রথমে বলো 'আমাকে করতে দাও' মানে lemme",
            result: "Lemme"
          },
          {
            step_bn: "তারপর কাজটা বলো — চেষ্টা করতে মানে try",
            result: "Lemme try"
          }
        ],
        finalResult: "Lemme try",
        finalResult_bn: "লেমি ট্রাই"
      },
      commonMistakes: [
        {
          wrong: "Let me see (সব সময় পুরো বলা)",
          correct: "Lemme see (বন্ধুর সাথে)",
          explanation_bn: "বন্ধু-পরিবারের সাথে lemme বলো। বসকে let me বলো।"
        },
        {
          wrong: "Lemme to see (to লাগানো)",
          correct: "Lemme see",
          explanation_bn: "lemme মানেই let me, তাই to লাগবে না।"
        },
        {
          wrong: "Lemme (শুধু lemme, কাজ নাই)",
          correct: "Lemme help / Lemme check",
          explanation_bn: "lemme এর পরে সব সময় কাজ বলতে হবে — কী করতে চাও সেটা।"
        }
      ],
      simpleRules: [
        {
          rule_bn: "lemme মানে 'করতে দাও' — অনুমতি চাওয়া বা সাহায্য করার ইচ্ছা",
          example: "Lemme see your phone. Lemme help you."
        },
        {
          rule_bn: "lemme শুধু কথায় বলো, লেখায় let me লেখো",
          example: "Friend: Lemme check. Boss (email): Let me review this."
        },
        {
          rule_bn: "lemme এর পরে সব সময় কাজ বলবে",
          example: "Lemme try. Lemme think. Lemme call you."
        }
      ],
      usageSituations: [
        {
          situation_bn: "বন্ধুর ফোন দেখতে চাইছো",
          situation_en: "Asking to see friend's phone",
          exampleSentence: "Lemme see that video on your phone.",
          exampleSentence_bn: "তোমার ফোনে ভিডিওটা দেখতে দাও।"
        },
        {
          situation_bn: "কাউকে সাহায্য করতে চাইছো",
          situation_en: "Offering to help someone",
          exampleSentence: "Lemme carry that bag for you.",
          exampleSentence_bn: "আমাকে তোমার ব্যাগ বহন করতে দাও।"
        },
        {
          situation_bn: "কিছু চেষ্টা করার অনুমতি চাইছো",
          situation_en: "Asking permission to try something",
          exampleSentence: "Lemme fix this problem.",
          exampleSentence_bn: "আমাকে এই সমস্যা ঠিক করতে দাও।"
        }
      ],
      sentenceBuilding: [
        {
          previousPatternId: "X11.2",
          previousFormula: "I wanna [VERB]",
          previousFormula_bn: "আমি [কাজ] করতে চাই",
          combined: "I wanna help you. Lemme carry your bag.",
          combined_bn: "আমি তোমাকে সাহায্য করতে চাই। তোমার ব্যাগ বহন করতে দাও।"
        },
        {
          previousPatternId: "G2.1",
          previousFormula: "What [QUESTION]?",
          previousFormula_bn: "কী [প্রশ্ন]?",
          combined: "What's the problem? Lemme check.",
          combined_bn: "সমস্যা কী? আমাকে দেখতে দাও।"
        }
      ],
      memoryTrick_bn: "lemme = লেমি (let me) — 'করতে দাও' বলার সবচেয়ে সহজ উপায়। সাহায্য করতে চাইলে বা অনুমতি চাইলে lemme বলো।",
      chunks: [
        {
          en: "Lemme see",
          bn: "দেখতে দাও",
          pronunciation_bn: "লেমি সি"
        },
        {
          en: "Lemme check",
          bn: "চেক করতে দাও",
          pronunciation_bn: "লেমি চেক"
        },
        {
          en: "Lemme try",
          bn: "চেষ্টা করতে দাও",
          pronunciation_bn: "লেমি ট্রাই"
        },
        {
          en: "Lemme help",
          bn: "সাহায্য করতে দাও",
          pronunciation_bn: "লেমি হেল্প"
        }
      ],
      wordMap: {
        bn_sentence: "আমাকে তোমার ফোন দেখতে দাও",
        en_sentence: "Lemme see your phone",
        mappings: [
          {
            bn_word: "আমাকে দেখতে দাও",
            en_word: "Lemme see",
            type: "direct",
            bridgeRuleId: "BR7"
          },
          {
            bn_word: "তোমার ফোন",
            en_word: "your phone",
            type: "direct",
            bridgeRuleId: "BR1"
          }
        ]
      },
      answerTemplates: [
        {
          situation_bn: "কেউ সমস্যায় পড়েছে, তুমি সাহায্য করতে চাইছো",
          question: "Can you fix this?",
          question_bn: "এটা ঠিক করতে পারবে?",
          answerFormula: "Lemme [VERB]",
          answerFormula_bn: "আমাকে [কাজ] করতে দাও",
          pronunciation_bn: "লেমি [কাজ]",
          examples: [
            {
              answer: "Lemme try.",
              answer_bn: "আমাকে চেষ্টা করতে দাও।",
              pronunciation_bn: "লেমি ট্রাই"
            },
            {
              answer: "Lemme check it first.",
              answer_bn: "প্রথমে চেক করতে দাও।",
              pronunciation_bn: "লেমি চেক ইট ফার্স্ট"
            },
            {
              answer: "Lemme see what's wrong.",
              answer_bn: "কী সমস্যা দেখতে দাও।",
              pronunciation_bn: "লেমি সি হোয়াটস রং"
            }
          ]
        },
        {
          situation_bn: "বন্ধু কিছু দেখাচ্ছে, তুমিও দেখতে চাও",
          question: "Look at this!",
          question_bn: "এটা দেখো!",
          answerFormula: "Lemme see",
          answerFormula_bn: "আমাকে দেখতে দাও",
          pronunciation_bn: "লেমি সি",
          examples: [
            {
              answer: "Lemme see!",
              answer_bn: "দেখতে দাও!",
              pronunciation_bn: "লেমি সি"
            },
            {
              answer: "Lemme see that.",
              answer_bn: "ওটা দেখতে দাও।",
              pronunciation_bn: "লেমি সি দ্যাট"
            },
            {
              answer: "Lemme see the photo.",
              answer_bn: "ছবি দেখতে দাও।",
              pronunciation_bn: "লেমি সি দ্য ফটো"
            }
          ]
        },
        {
          situation_bn: "কেউ কিছু ভারী জিনিস বহন করছে",
          question: "This is so heavy!",
          question_bn: "এটা খুব ভারী!",
          answerFormula: "Lemme help you",
          answerFormula_bn: "আমাকে সাহায্য করতে দাও",
          pronunciation_bn: "লেমি হেল্প ইউ",
          examples: [
            {
              answer: "Lemme carry that for you.",
              answer_bn: "আমাকে বহন করতে দাও।",
              pronunciation_bn: "লেমি ক্যারি দ্যাট ফর ইউ"
            },
            {
              answer: "Lemme help you with that.",
              answer_bn: "আমাকে ওটাতে সাহায্য করতে দাও।",
              pronunciation_bn: "লেমি হেল্প ইউ উইথ দ্যাট"
            },
            {
              answer: "Lemme hold it.",
              answer_bn: "আমাকে ধরতে দাও।",
              pronunciation_bn: "লেমি হোল্ড ইট"
            }
          ]
        }
      ],
      variations: [
        {
          variant: "polite_request",
          label: "Lemme know (জানাও)",
          label_bn: "লেমি নো — আমাকে জানাও",
          formula: "Lemme know [THING]",
          formula_bn: "আমাকে [জিনিস] জানাও",
          examples: [
            {
              en: "Lemme know when you arrive.",
              bn: "তুমি পৌঁছালে জানাও।",
              pronunciation_bn: "লেমি নো হোয়েন ইউ অ্যারাইভ",
              slotValues: { VERB: "know when you arrive" },
              stage: 1
            },
            {
              en: "Lemme know if you need anything.",
              bn: "কিছু লাগলে জানাও।",
              pronunciation_bn: "লেমি নো ইফ ইউ নিড এনিথিং",
              slotValues: { VERB: "know if you need anything" },
              stage: 2
            },
            {
              en: "Lemme know the final decision by tomorrow.",
              bn: "কাল পর্যন্ত চূড়ান্ত সিদ্ধান্ত জানাও।",
              pronunciation_bn: "লেমি নো দ্য ফাইনাল ডিসিশন বাই টুমরো",
              slotValues: { VERB: "know the final decision by tomorrow" },
              stage: 3
            }
          ]
        },
        {
          variant: "offer_help",
          label: "Lemme help (সাহায্য করতে দাও)",
          label_bn: "লেমি হেল্প — সাহায্য করতে দাও",
          formula: "Lemme help [PERSON/THING]",
          formula_bn: "আমাকে [ব্যক্তি/জিনিস] সাহায্য করতে দাও",
          examples: [
            {
              en: "Lemme help you with that.",
              bn: "আমাকে ওটাতে সাহায্য করতে দাও।",
              pronunciation_bn: "লেমি হেল্প ইউ উইথ দ্যাট",
              slotValues: { VERB: "help you with that" },
              stage: 1
            },
            {
              en: "Lemme help you carry the boxes.",
              bn: "আমাকে বাক্স বহন করতে সাহায্য করতে দাও।",
              pronunciation_bn: "লেমি হেল্প ইউ ক্যারি দ্য বক্সেস",
              slotValues: { VERB: "help you carry the boxes" },
              stage: 2
            },
            {
              en: "Lemme help organize the event.",
              bn: "আমাকে অনুষ্ঠান সাজাতে সাহায্য করতে দাও।",
              pronunciation_bn: "লেমি হেল্প অর্গানাইজ দ্য ইভেন্ট",
              slotValues: { VERB: "help organize the event" },
              stage: 3
            }
          ]
        },
        {
          variant: "thinking",
          label: "Lemme think (ভাবতে দাও)",
          label_bn: "লেমি থিংক — ভাবতে দাও",
          formula: "Lemme think [ABOUT THING]",
          formula_bn: "আমাকে [বিষয়] ভাবতে দাও",
          examples: [
            {
              en: "Lemme think about it.",
              bn: "আমাকে ভাবতে দাও।",
              pronunciation_bn: "লেমি থিংক অ্যাবাউট ইট",
              slotValues: { VERB: "think about it" },
              stage: 2
            },
            {
              en: "Lemme think for a minute.",
              bn: "আমাকে এক মিনিট ভাবতে দাও।",
              pronunciation_bn: "লেমি থিংক ফর অ্যা মিনিট",
              slotValues: { VERB: "think for a minute" },
              stage: 2
            },
            {
              en: "Lemme think about the offer carefully.",
              bn: "আমাকে প্রস্তাবটা ভালোভাবে ভাবতে দাও।",
              pronunciation_bn: "লেমি থিংক অ্যাবাউট দ্য অফার কেয়ারফুলি",
              slotValues: { VERB: "think about the offer carefully" },
              stage: 3
            }
          ]
        }
      ],
      dialogueChains: [
        {
          id: "X11.4-chain-1",
          title_bn: "অফিসে দুই সহকর্মীর কথোপকথন",
          title_en: "Two colleagues talking at office",
          situation_bn: "একজন কম্পিউটার ঠিক করতে পারছে না, অন্যজন সাহায্য করছে",
          icon: "💻",
          turns: [
            {
              speaker_bn: "ফারুক",
              en: "My laptop is not working. It keeps freezing.",
              bn: "আমার ল্যাপটপ কাজ করছে না। বার বার আটকে যাচ্ছে।",
              pronunciation_bn: "মাই ল্যাপটপ ইজ নট ওয়ার্কিং। ইট কিপস ফ্রিজিং।",
              patternId: "X11.4"
            },
            {
              speaker_bn: "রফিক",
              en: "Lemme check. Did you try restarting?",
              bn: "দেখতে দাও। রিস্টার্ট দিয়ে দেখেছো?",
              pronunciation_bn: "লেমি চেক। ডিড ইউ ট্রাই রিস্টার্টিং?",
              patternId: "X11.4"
            },
            {
              speaker_bn: "ফারুক",
              en: "Yes, but nothing changed.",
              bn: "হ্যাঁ, কিন্তু কোনো পরিবর্তন নাই।",
              pronunciation_bn: "ইয়েস, বাট নাথিং চেঞ্জড।",
              patternId: "X11.4"
            },
            {
              speaker_bn: "রফিক",
              en: "Lemme see the task manager. Maybe too many programs are running.",
              bn: "টাস্ক ম্যানেজার দেখতে দাও। হয়তো অনেক প্রোগ্রাম চলছে।",
              pronunciation_bn: "লেমি সি দ্য টাস্ক ম্যানেজার। মেবি টু মেনি প্রোগ্রামস আর রানিং।",
              patternId: "X11.4"
            },
            {
              speaker_bn: "ফারুক",
              en: "Okay. Lemme know if you find the problem.",
              bn: "ঠিক আছে। সমস্যা পেলে জানাও।",
              pronunciation_bn: "ওকে। লেমি নো ইফ ইউ ফাইন্ড দ্য প্রবলেম।",
              patternId: "X11.4"
            },
            {
              speaker_bn: "রফিক",
              en: "Sure. Lemme try closing some apps first.",
              bn: "অবশ্যই। প্রথমে কিছু অ্যাপ বন্ধ করতে দাও।",
              pronunciation_bn: "শিওর। লেমি ট্রাই ক্লোজিং সাম অ্যাপস ফার্স্ট।",
              patternId: "X11.4"
            }
          ],
          patternsUsed: ["X11.4"]
        }
      ],
      slots: [
        {
          name: "VERB",
          description: "Any action you want permission to do or offering to do",
          description_bn: "যে কাজ তুমি করার অনুমতি চাও বা করতে চাও",
          acceptedTypes: ["verb", "verb phrase"],
          examples: ["see", "check", "try", "help", "think", "know", "call", "ask", "show", "explain"]
        }
      ],
      examples: [
        {
          en: "Lemme see.",
          bn: "দেখতে দাও।",
          pronunciation_bn: "লেমি সি",
          slotValues: { VERB: "see" },
          topicArea: "daily_life",
          stage: 1
        },
        {
          en: "Lemme help you.",
          bn: "আমাকে সাহায্য করতে দাও।",
          pronunciation_bn: "লেমি হেল্প ইউ",
          slotValues: { VERB: "help you" },
          topicArea: "social_interaction",
          stage: 1,
          miniStory: {
            situation_bn: "বন্ধু ভারী ব্যাগ বহন করছে, তুমি সাহায্য করতে চাও",
            icon: "🤝"
          }
        },
        {
          en: "Lemme try.",
          bn: "আমাকে চেষ্টা করতে দাও।",
          pronunciation_bn: "লেমি ট্রাই",
          slotValues: { VERB: "try" },
          topicArea: "daily_life",
          stage: 1
        },
        {
          en: "Lemme check my phone.",
          bn: "আমাকে ফোন চেক করতে দাও।",
          pronunciation_bn: "লেমি চেক মাই ফোন",
          slotValues: { VERB: "check my phone" },
          topicArea: "daily_life",
          stage: 1
        },
        {
          en: "Lemme know when you're ready.",
          bn: "তৈরি হলে জানাও।",
          pronunciation_bn: "লেমি নো হোয়েন ইউর রেডি",
          slotValues: { VERB: "know when you're ready" },
          topicArea: "social_interaction",
          stage: 1,
          miniStory: {
            situation_bn: "বন্ধুর সাথে বাইরে যাবে, সে তৈরি হচ্ছে",
            icon: "⏰"
          }
        },
        {
          en: "Lemme call you back.",
          bn: "আমাকে তোমাকে ফোন করতে দাও।",
          pronunciation_bn: "লেমি কল ইউ ব্যাক",
          slotValues: { VERB: "call you back" },
          topicArea: "social_interaction",
          stage: 2
        },
        {
          en: "Lemme carry that bag for you.",
          bn: "আমাকে তোমার ব্যাগ বহন করতে দাও।",
          pronunciation_bn: "লেমি ক্যারি দ্যাট ব্যাগ ফর ইউ",
          slotValues: { VERB: "carry that bag for you" },
          topicArea: "daily_life",
          stage: 2,
          miniStory: {
            situation_bn: "বাসে বয়স্ক মানুষ ভারী ব্যাগ নিয়ে দাঁড়িয়ে আছে",
            icon: "🎒"
          }
        },
        {
          en: "Lemme explain it to you.",
          bn: "আমাকে তোমাকে বুঝিয়ে দিতে দাও।",
          pronunciation_bn: "লেমি এক্সপ্লেইন ইট টু ইউ",
          slotValues: { VERB: "explain it to you" },
          topicArea: "education",
          stage: 2
        },
        {
          en: "Lemme think about it for a day.",
          bn: "আমাকে একদিন ভাবতে দাও।",
          pronunciation_bn: "লেমি থিংক অ্যাবাউট ইট ফর অ্যা ডে",
          slotValues: { VERB: "think about it for a day" },
          topicArea: "work",
          stage: 2,
          miniStory: {
            situation_bn: "চাকরির অফার পেয়েছো, সিদ্ধান্ত নিতে সময় চাইছো",
            icon: "💭"
          }
        },
        {
          en: "Lemme show you how to do it.",
          bn: "আমাকে তোমাকে দেখাতে দাও কীভাবে করতে হয়।",
          pronunciation_bn: "লেমি শো ইউ হাউ টু ডু ইট",
          slotValues: { VERB: "show you how to do it" },
          topicArea: "education",
          stage: 2
        },
        {
          en: "Lemme ask my manager about this.",
          bn: "আমাকে আমার ম্যানেজারকে এটা জিজ্ঞেস করতে দাও।",
          pronunciation_bn: "লেমি আস্ক মাই ম্যানেজার অ্যাবাউট দিস",
          slotValues: { VERB: "ask my manager about this" },
          topicArea: "work",
          stage: 3,
          miniStory: {
            situation_bn: "ক্লায়েন্ট নতুন রিকোয়েস্ট করেছে, ম্যানেজারকে জিজ্ঞেস করতে হবে",
            icon: "💼"
          }
        },
        {
          en: "Lemme fix the printer for you.",
          bn: "আমাকে তোমার জন্য প্রিন্টার ঠিক করতে দাও।",
          pronunciation_bn: "লেমি ফিক্স দ্য প্রিন্টার ফর ইউ",
          slotValues: { VERB: "fix the printer for you" },
          topicArea: "work",
          stage: 3
        },
        {
          en: "Lemme verify the bank details first.",
          bn: "প্রথমে ব্যাংক ডিটেইলস যাচাই করতে দাও।",
          pronunciation_bn: "লেমি ভেরিফাই দ্য ব্যাংক ডিটেইলস ফার্স্ট",
          slotValues: { VERB: "verify the bank details first" },
          topicArea: "finance",
          stage: 3
        },
        {
          en: "Lemme consult with the doctor about your prescription.",
          bn: "আমাকে ডাক্তারের সাথে তোমার প্রেসক্রিপশন নিয়ে পরামর্শ করতে দাও।",
          pronunciation_bn: "লেমি কনসাল্ট উইথ দ্য ডক্টর অ্যাবাউট ইউর প্রেসক্রিপশন",
          slotValues: { VERB: "consult with the doctor about your prescription" },
          topicArea: "health",
          stage: 3,
          miniStory: {
            situation_bn: "ফার্মেসিতে ওষুধ কিনতে গেছো, ফার্মাসিস্ট ডাক্তারকে ফোন করবে",
            icon: "💊"
          }
        },
        {
          en: "Lemme arrange the Iftar items properly.",
          bn: "আমাকে ইফতারের জিনিস সুন্দরভাবে সাজাতে দাও।",
          pronunciation_bn: "লেমি অ্যারেঞ্জ দ্য ইফতার আইটেমস প্রপারলি",
          slotValues: { VERB: "arrange the Iftar items properly" },
          topicArea: "religion",
          stage: 3,
          miniStory: {
            situation_bn: "মসজিদে ইফতার বিতরণের আয়োজন, তুমি সাজাতে চাও",
            icon: "🌙"
          }
        }
      ]
    },
    {
      id: "X11.5",
      patternName: "Kinda (Kind of)",
      patternName_bn: "কাইন্ডা মানে 'একটু' বলা",
      concept_bn: "একটু",
      formula: "It's kinda [ADJECTIVE] / I kinda [VERB]",
      formula_bn: "এটা একটু [কেমন] / আমি একটু [কাজ করি]",
      formulaPronunciation_bn: "ইটস কাইন্ডা [কেমন] / আই কাইন্ডা [কাজ]",
      usageNote: "Kinda is the casual spoken reduction of 'kind of'. It softens statements and makes them less direct — like saying 'a bit' or 'sort of'. Very common in everyday American and British speech. Don't use it in formal writing.",
      usageNote_bn: "কাইন্ডা মানে 'kind of' এর সংক্ষেপ। এটা কথা নরম করে, পুরোপুরি না বলে 'একটু' বোঝায়। আমেরিকান-ব্রিটিশ সবাই মুখের কথায় ব্যবহার করে। অফিসের লেখায় kind of বা a bit লেখো।",
      difficulty: "intermediate",
      formality: "casual",
      banglaStructureMap: "বাংলা: এটা একটু ঠান্ডা → English: It's kinda cold",
      bridgeRuleIds: ["BR1", "BR3"],
      conversionSteps: {
        banglaThought: "এটা একটু কঠিন",
        steps: [
          {
            step_bn: "প্রথমে বলো 'এটা' মানে It's",
            result: "It's"
          },
          {
            step_bn: "তারপর বলো 'একটু' মানে kinda",
            result: "It's kinda"
          },
          {
            step_bn: "শেষে বলো কেমন — কঠিন মানে difficult",
            result: "It's kinda difficult"
          }
        ],
        finalResult: "It's kinda difficult",
        finalResult_bn: "ইটস কাইন্ডা ডিফিকাল্ট"
      },
      commonMistakes: [
        {
          wrong: "It's kind of (সব সময় পুরো বলা)",
          correct: "It's kinda (বন্ধুর সাথে)",
          explanation_bn: "বন্ধু-পরিবারের সাথে kinda বলো। অফিসে kind of বলো।"
        },
        {
          wrong: "I'm kinda (I'm এর সাথে kinda)",
          correct: "I kinda like it (কাজ বোঝাতে) বা I'm kinda tired (অনুভূতি বোঝাতে)",
          explanation_bn: "কাজ বোঝাতে I kinda বলো। অনুভূতি বোঝাতে I'm kinda বলো।"
        },
        {
          wrong: "Kinda good (শুধু kinda good)",
          correct: "It's kinda good",
          explanation_bn: "kinda এর আগে It's বা I বা অন্য কিছু লাগবে।"
        }
      ],
      simpleRules: [
        {
          rule_bn: "kinda মানে 'একটু' বা 'কিছুটা' — পুরোপুরি না বলে হালকা বোঝায়",
          example: "It's kinda cold. I kinda like it."
        },
        {
          rule_bn: "kinda শুধু কথায় বলো, লেখায় kind of লেখো",
          example: "Friend: It's kinda late. Boss (email): It's kind of urgent."
        },
        {
          rule_bn: "It's kinda + কেমন (ঠান্ডা, গরম, কঠিন) / I kinda + কাজ (চাই, পছন্দ করি)",
          example: "It's kinda hot. I kinda want ice cream."
        }
      ],
      usageSituations: [
        {
          situation_bn: "বন্ধু জিজ্ঞেস করছে খাবার কেমন",
          situation_en: "Friend asking how the food is",
          exampleSentence: "It's kinda spicy, but I like it.",
          exampleSentence_bn: "একটু ঝাল, কিন্তু পছন্দ হচ্ছে।"
        },
        {
          situation_bn: "কাউকে বলছো তোমার মতামত",
          situation_en: "Sharing your opinion softly",
          exampleSentence: "I kinda agree with you.",
          exampleSentence_bn: "আমি একটু তোমার সাথে একমত।"
        },
        {
          situation_bn: "আবহাওয়া নিয়ে কথা বলছো",
          situation_en: "Talking about weather",
          exampleSentence: "It's kinda cold today.",
          exampleSentence_bn: "আজ একটু ঠান্ডা।"
        }
      ],
      sentenceBuilding: [
        {
          previousPatternId: "X11.2",
          previousFormula: "I wanna [VERB]",
          previousFormula_bn: "আমি [কাজ] করতে চাই",
          combined: "It's kinda late, but I wanna finish this work.",
          combined_bn: "একটু দেরি হয়ে গেছে, কিন্তু এই কাজ শেষ করতে চাই।"
        },
        {
          previousPatternId: "C14.1",
          previousFormula: "I think [STATEMENT]",
          previousFormula_bn: "আমার মনে হয় [কথা]",
          combined: "I think it's kinda risky.",
          combined_bn: "আমার মনে হয় এটা একটু ঝুঁকিপূর্ণ।"
        }
      ],
      memoryTrick_bn: "kinda = কাইন্ডা (kind of) — 'একটু' বা 'কিছুটা' বোঝায়। পুরোপুরি না বলে হালকা করে বলতে kinda ব্যবহার করো।",
      chunks: [
        {
          en: "It's kinda",
          bn: "এটা একটু",
          pronunciation_bn: "ইটস কাইন্ডা"
        },
        {
          en: "I kinda",
          bn: "আমি একটু",
          pronunciation_bn: "আই কাইন্ডা"
        },
        {
          en: "Kinda like",
          bn: "একটু পছন্দ",
          pronunciation_bn: "কাইন্ডা লাইক"
        },
        {
          en: "Kinda feel",
          bn: "একটু মনে হয়",
          pronunciation_bn: "কাইন্ডা ফিল"
        }
      ],
      wordMap: {
        bn_sentence: "আজ একটু ঠান্ডা লাগছে",
        en_sentence: "It's kinda cold today",
        mappings: [
          {
            bn_word: "এটা",
            en_word: "It's",
            type: "direct",
            bridgeRuleId: "BR1"
          },
          {
            bn_word: "একটু",
            en_word: "kinda",
            type: "direct",
            bridgeRuleId: "BR3"
          },
          {
            bn_word: "ঠান্ডা",
            en_word: "cold",
            type: "direct"
          },
          {
            bn_word: "আজ",
            en_word: "today",
            type: "direct"
          }
        ]
      },
      answerTemplates: [
        {
          situation_bn: "কেউ জিজ্ঞেস করছে কেমন লাগছে",
          question: "How's the weather?",
          question_bn: "আবহাওয়া কেমন?",
          answerFormula: "It's kinda [ADJECTIVE]",
          answerFormula_bn: "একটু [কেমন]",
          pronunciation_bn: "ইটস কাইন্ডা [কেমন]",
          examples: [
            {
              answer: "It's kinda hot.",
              answer_bn: "একটু গরম।",
              pronunciation_bn: "ইটস কাইন্ডা হট"
            },
            {
              answer: "It's kinda humid today.",
              answer_bn: "আজ একটু স্যাঁতসেঁতে।",
              pronunciation_bn: "ইটস কাইন্ডা হিউমিড টুডে"
            },
            {
              answer: "It's kinda nice actually.",
              answer_bn: "আসলে একটু ভালো।",
              pronunciation_bn: "ইটস কাইন্ডা নাইস অ্যাকচুয়ালি"
            }
          ]
        },
        {
          situation_bn: "বন্ধু জানতে চাইছে তুমি কী চাও",
          question: "Do you want to go to the party?",
          question_bn: "পার্টিতে যেতে চাও?",
          answerFormula: "I kinda [VERB]",
          answerFormula_bn: "আমি একটু [কাজ]",
          pronunciation_bn: "আই কাইন্ডা [কাজ]",
          examples: [
            {
              answer: "I kinda wanna go.",
              answer_bn: "আমি একটু যেতে চাই।",
              pronunciation_bn: "আই কাইন্ডা ওয়ানা গো"
            },
            {
              answer: "I kinda don't feel like it.",
              answer_bn: "আমার একটু ইচ্ছা করছে না।",
              pronunciation_bn: "আই কাইন্ডা ডোন্ট ফিল লাইক ইট"
            },
            {
              answer: "I kinda prefer staying home.",
              answer_bn: "আমি একটু বাসায় থাকা পছন্দ করি।",
              pronunciation_bn: "আই কাইন্ডা প্রিফার স্টেয়িং হোম"
            }
          ]
        },
        {
          situation_bn: "সহকর্মী জিজ্ঞেস করছে প্রজেক্ট কেমন লাগছে",
          question: "How's the new project?",
          question_bn: "নতুন প্রজেক্ট কেমন?",
          answerFormula: "It's kinda [ADJECTIVE]",
          answerFormula_bn: "এটা একটু [কেমন]",
          pronunciation_bn: "ইটস কাইন্ডা [কেমন]",
          examples: [
            {
              answer: "It's kinda challenging.",
              answer_bn: "এটা একটু চ্যালেঞ্জিং।",
              pronunciation_bn: "ইটস কাইন্ডা চ্যালেঞ্জিং"
            },
            {
              answer: "It's kinda interesting.",
              answer_bn: "এটা একটু মজার।",
              pronunciation_bn: "ইটস কাইন্ডা ইন্টারেস্টিং"
            },
            {
              answer: "It's kinda complicated.",
              answer_bn: "এটা একটু জটিল।",
              pronunciation_bn: "ইটস কাইন্ডা কমপ্লিকেটেড"
            }
          ]
        }
      ],
      variations: [
        {
          variant: "adjective",
          label: "Kinda + adjective (একটু কেমন)",
          label_bn: "কাইন্ডা + বিশেষণ — একটু কেমন",
          formula: "It's kinda [ADJECTIVE]",
          formula_bn: "এটা একটু [কেমন]",
          examples: [
            {
              en: "It's kinda cold today.",
              bn: "আজ একটু ঠান্ডা।",
              pronunciation_bn: "ইটস কাইন্ডা কোল্ড টুডে",
              slotValues: { ADJECTIVE: "cold" },
              stage: 1
            },
            {
              en: "The movie is kinda boring.",
              bn: "সিনেমাটা একটু বোরিং।",
              pronunciation_bn: "দ্য মুভি ইজ কাইন্ডা বোরিং",
              slotValues: { ADJECTIVE: "boring" },
              stage: 2
            },
            {
              en: "This problem is kinda complicated.",
              bn: "এই সমস্যা একটু জটিল।",
              pronunciation_bn: "দিস প্রবলেম ইজ কাইন্ডা কমপ্লিকেটেড",
              slotValues: { ADJECTIVE: "complicated" },
              stage: 3
            }
          ]
        },
        {
          variant: "verb",
          label: "Kinda + verb (একটু করি)",
          label_bn: "কাইন্ডা + ক্রিয়া — একটু করি",
          formula: "I kinda [VERB]",
          formula_bn: "আমি একটু [কাজ করি]",
          examples: [
            {
              en: "I kinda like it.",
              bn: "আমি একটু পছন্দ করি।",
              pronunciation_bn: "আই কাইন্ডা লাইক ইট",
              slotValues: { VERB: "like it" },
              stage: 1
            },
            {
              en: "I kinda agree with you.",
              bn: "আমি একটু তোমার সাথে একমত।",
              pronunciation_bn: "আই কাইন্ডা অ্যাগ্রি উইথ ইউ",
              slotValues: { VERB: "agree with you" },
              stage: 2
            },
            {
              en: "I kinda forgot about the meeting.",
              bn: "আমি একটু মিটিংয়ের কথা ভুলে গিয়েছিলাম।",
              pronunciation_bn: "আই কাইন্ডা ফরগট অ্যাবাউট দ্য মিটিং",
              slotValues: { VERB: "forgot about the meeting" },
              stage: 3
            }
          ]
        },
        {
          variant: "feeling",
          label: "I'm kinda (আমি একটু অনুভব করছি)",
          label_bn: "আইম কাইন্ডা — আমি একটু অনুভব করছি",
          formula: "I'm kinda [FEELING]",
          formula_bn: "আমি একটু [অনুভূতি]",
          examples: [
            {
              en: "I'm kinda tired.",
              bn: "আমি একটু ক্লান্ত।",
              pronunciation_bn: "আইম কাইন্ডা টায়ার্ড",
              slotValues: { FEELING: "tired" },
              stage: 1
            },
            {
              en: "I'm kinda hungry.",
              bn: "আমার একটু খিদে পেয়েছে।",
              pronunciation_bn: "আইম কাইন্ডা হাংরি",
              slotValues: { FEELING: "hungry" },
              stage: 2
            },
            {
              en: "I'm kinda worried about the deadline.",
              bn: "আমি ডেডলাইন নিয়ে একটু চিন্তিত।",
              pronunciation_bn: "আইম কাইন্ডা ওরিড অ্যাবাউট দ্য ডেডলাইন",
              slotValues: { FEELING: "worried about the deadline" },
              stage: 3
            }
          ]
        }
      ],
      dialogueChains: [
        {
          id: "X11.5-chain-1",
          title_bn: "রেস্টুরেন্টে দুই বন্ধুর কথোপকথন",
          title_en: "Two friends talking at a restaurant",
          situation_bn: "দুই বন্ধু রেস্টুরেন্টে খাবার খাচ্ছে ও মতামত দিচ্ছে",
          icon: "🍽️",
          turns: [
            {
              speaker_bn: "তানভীর",
              en: "How's your biryani?",
              bn: "তোমার বিরিয়ানি কেমন?",
              pronunciation_bn: "হাউজ ইউর বিরিয়ানি?",
              patternId: "X11.5"
            },
            {
              speaker_bn: "শাফিন",
              en: "It's kinda spicy, but I like it.",
              bn: "একটু ঝাল, কিন্তু পছন্দ হচ্ছে।",
              pronunciation_bn: "ইটস কাইন্ডা স্পাইসি, বাট আই লাইক ইট।",
              patternId: "X11.5"
            },
            {
              speaker_bn: "তানভীর",
              en: "Really? I kinda think it's perfect.",
              bn: "সত্যি? আমার তো মনে হয় একদম পারফেক্ট।",
              pronunciation_bn: "রিয়েলি? আই কাইন্ডা থিংক ইটস পারফেক্ট।",
              patternId: "X11.5"
            },
            {
              speaker_bn: "শাফিন",
              en: "Yeah, it's kinda better than the last place we went.",
              bn: "হ্যাঁ, গত যে জায়গায় গিয়েছিলাম সেটার চেয়ে একটু ভালো।",
              pronunciation_bn: "ইয়্যাহ, ইটস কাইন্ডা বেটার দ্যান দ্য লাস্ট প্লেস উই ওয়েন্ট।",
              patternId: "X11.5"
            },
            {
              speaker_bn: "তানভীর",
              en: "True! I'm kinda full now though.",
              bn: "ঠিক! আমার পেট তো একটু ভরে গেছে।",
              pronunciation_bn: "ট্রু! আইম কাইন্ডা ফুল নাউ দো।",
              patternId: "X11.5"
            },
            {
              speaker_bn: "শাফিন",
              en: "Me too. But I kinda wanna try their firni.",
              bn: "আমিও। কিন্তু তাদের ফিরনি একটু চেষ্টা করতে চাই।",
              pronunciation_bn: "মি টু। বাট আই কাইন্ডা ওয়ানা ট্রাই দেয়ার ফিরনি।",
              patternId: "X11.5"
            }
          ],
          patternsUsed: ["X11.5"]
        }
      ],
      slots: [
        {
          name: "ADJECTIVE",
          description: "Any describing word (how something is)",
          description_bn: "যে কোনো বর্ণনা (কেমন)",
          acceptedTypes: ["adjective"],
          examples: ["cold", "hot", "difficult", "easy", "boring", "interesting", "spicy", "sweet", "tired", "hungry"]
        },
        {
          name: "VERB",
          description: "Any action or feeling",
          description_bn: "যে কোনো কাজ বা অনুভূতি",
          acceptedTypes: ["verb", "verb phrase"],
          examples: ["like", "want", "think", "feel", "agree", "prefer", "understand", "know", "forgot", "remember"]
        }
      ],
      examples: [
        {
          en: "It's kinda cold.",
          bn: "একটু ঠান্ডা।",
          pronunciation_bn: "ইটস কাইন্ডা কোল্ড",
          slotValues: { ADJECTIVE: "cold" },
          topicArea: "daily_life",
          stage: 1
        },
        {
          en: "I kinda like it.",
          bn: "আমি একটু পছন্দ করি।",
          pronunciation_bn: "আই কাইন্ডা লাইক ইট",
          slotValues: { VERB: "like it" },
          topicArea: "daily_life",
          stage: 1,
          miniStory: {
            situation_bn: "বন্ধু তোমাকে নতুন গান শোনাচ্ছে, তোমার কিছুটা পছন্দ",
            icon: "🎵"
          }
        },
        {
          en: "It's kinda hot today.",
          bn: "আজ একটু গরম।",
          pronunciation_bn: "ইটস কাইন্ডা হট টুডে",
          slotValues: { ADJECTIVE: "hot today" },
          topicArea: "daily_life",
          stage: 1
        },
        {
          en: "I'm kinda tired.",
          bn: "আমি একটু ক্লান্ত।",
          pronunciation_bn: "আইম কাইন্ডা টায়ার্ড",
          slotValues: { ADJECTIVE: "tired" },
          topicArea: "daily_life",
          stage: 1
        },
        {
          en: "It's kinda expensive.",
          bn: "এটা একটু দামি।",
          pronunciation_bn: "ইটস কাইন্ডা এক্সপেন্সিভ",
          slotValues: { ADJECTIVE: "expensive" },
          topicArea: "shopping",
          stage: 1,
          miniStory: {
            situation_bn: "বাজারে জামা দেখছো, দাম একটু বেশি মনে হচ্ছে",
            icon: "👕"
          }
        },
        {
          en: "I kinda wanna stay home.",
          bn: "আমি একটু বাসায় থাকতে চাই।",
          pronunciation_bn: "আই কাইন্ডা ওয়ানা স্টে হোম",
          slotValues: { VERB: "wanna stay home" },
          topicArea: "social_interaction",
          stage: 2
        },
        {
          en: "The food is kinda spicy.",
          bn: "খাবার একটু ঝাল।",
          pronunciation_bn: "দ্য ফুড ইজ কাইন্ডা স্পাইসি",
          slotValues: { ADJECTIVE: "spicy" },
          topicArea: "food",
          stage: 2,
          miniStory: {
            situation_bn: "রেস্টুরেন্টে কাচ্চি খাচ্ছো, একটু বেশি ঝাল",
            icon: "🌶️"
          }
        },
        {
          en: "I kinda agree with your point.",
          bn: "আমি তোমার কথার সাথে একটু একমত।",
          pronunciation_bn: "আই কাইন্ডা অ্যাগ্রি উইথ ইউর পয়েন্ট",
          slotValues: { VERB: "agree with your point" },
          topicArea: "social_interaction",
          stage: 2
        },
        {
          en: "It's kinda difficult to understand.",
          bn: "এটা বুঝতে একটু কঠিন।",
          pronunciation_bn: "ইটস কাইন্ডা ডিফিকাল্ট টু আন্ডারস্ট্যান্ড",
          slotValues: { ADJECTIVE: "difficult to understand" },
          topicArea: "education",
          stage: 2,
          miniStory: {
            situation_bn: "ক্লাসে নতুন টপিক পড়ানো হচ্ছে, একটু জটিল লাগছে",
            icon: "📚"
          }
        },
        {
          en: "I'm kinda hungry now.",
          bn: "আমার এখন একটু খিদে পেয়েছে।",
          pronunciation_bn: "আইম কাইন্ডা হাংরি নাউ",
          slotValues: { ADJECTIVE: "hungry now" },
          topicArea: "food",
          stage: 2
        },
        {
          en: "The situation is kinda complicated.",
          bn: "পরিস্থিতি একটু জটিল।",
          pronunciation_bn: "দ্য সিচুয়েশন ইজ কাইন্ডা কমপ্লিকেটেড",
          slotValues: { ADJECTIVE: "complicated" },
          topicArea: "work",
          stage: 3,
          miniStory: {
            situation_bn: "অফিসে প্রজেক্ট নিয়ে সমস্যা, পরিস্থিতি জটিল হয়ে গেছে",
            icon: "⚠️"
          }
        },
        {
          en: "I kinda forgot about the deadline.",
          bn: "আমি ডেডলাইনের কথা একটু ভুলে গিয়েছিলাম।",
          pronunciation_bn: "আই কাইন্ডা ফরগট অ্যাবাউট দ্য ডেডলাইন",
          slotValues: { VERB: "forgot about the deadline" },
          topicArea: "work",
          stage: 3
        },
        {
          en: "The new policy is kinda confusing.",
          bn: "নতুন নীতি একটু বিভ্রান্তিকর।",
          pronunciation_bn: "দ্য নিউ পলিসি ইজ কাইন্ডা কনফিউজিং",
          slotValues: { ADJECTIVE: "confusing" },
          topicArea: "work",
          stage: 3
        },
        {
          en: "I kinda understand his frustration.",
          bn: "আমি তার হতাশা একটু বুঝতে পারি।",
          pronunciation_bn: "আই কাইন্ডা আন্ডারস্ট্যান্ড হিজ ফ্রাস্ট্রেশন",
          slotValues: { VERB: "understand his frustration" },
          topicArea: "social_interaction",
          stage: 3,
          miniStory: {
            situation_bn: "সহকর্মী প্রমোশন পায়নি, তুমি তার মনোভাব বুঝতে পারছো",
            icon: "😔"
          }
        },
        {
          en: "The interest rate is kinda high for this loan.",
          bn: "এই ঋণের সুদের হার একটু বেশি।",
          pronunciation_bn: "দ্য ইন্টারেস্ট রেট ইজ কাইন্ডা হাই ফর দিস লোন",
          slotValues: { ADJECTIVE: "high for this loan" },
          topicArea: "finance",
          stage: 3,
          miniStory: {
            situation_bn: "ব্যাংক থেকে লোন নিতে গেছো, সুদের হার বেশি মনে হচ্ছে",
            icon: "🏦"
          }
        }
      ]
    },
    {
      id: "X11.6",
      patternName: "Hafta (Have to)",
      patternName_bn: "হ্যাফটা মানে 'করতে হবে' বলা",
      concept_bn: "করতে হবে",
      formula: "I hafta [VERB]",
      formula_bn: "আমাকে [কাজ] করতে হবে",
      formulaPronunciation_bn: "আই হ্যাফটা [কাজ]",
      usageNote: "Hafta is the casual spoken reduction of 'have to'. It's very similar to 'gotta' but comes from 'have to' instead of 'got to'. Used in American casual speech. Don't use it in formal writing or professional situations.",
      usageNote_bn: "হ্যাফটা মানে 'have to' এর সংক্ষেপ। এটা gotta এর মতো — বাধ্যবাধকতা বোঝায়। আমেরিকানরা মুখের কথায় বলে। অফিসের লেখায় have to বা need to লেখো।",
      difficulty: "intermediate",
      formality: "casual",
      banglaStructureMap: "বাংলা: আমাকে যেতে হবে → English: I hafta go",
      bridgeRuleIds: ["BR1", "BR7"],
      conversionSteps: {
        banglaThought: "আমাকে কাজ শেষ করতে হবে",
        steps: [
          {
            step_bn: "প্রথমে বলো 'আমাকে' মানে I",
            result: "I"
          },
          {
            step_bn: "তারপর বলো 'করতে হবে' মানে hafta",
            result: "I hafta"
          },
          {
            step_bn: "শেষে কাজটা বলো — শেষ করতে মানে finish",
            result: "I hafta finish"
          }
        ],
        finalResult: "I hafta finish the work",
        finalResult_bn: "আই হ্যাফটা ফিনিশ দ্য ওয়ার্ক"
      },
      commonMistakes: [
        {
          wrong: "I hafta to go (to দুইবার)",
          correct: "I hafta go",
          explanation_bn: "hafta মানেই have to, তাই আরেকবার to লাগবে না।"
        },
        {
          wrong: "I hafta (শুধু hafta, কাজ নাই)",
          correct: "I hafta work / I hafta leave",
          explanation_bn: "hafta এর পরে সব সময় কাজ বলতে হবে — কী করতে হবে সেটা।"
        },
        {
          wrong: "Hafta = gotta (একই মনে করা)",
          correct: "Both mean obligation, slightly different origin",
          explanation_bn: "hafta আর gotta দুটোই 'করতে হবে' মানে, কিন্তু hafta = have to, gotta = got to।"
        }
      ],
      simpleRules: [
        {
          rule_bn: "hafta মানে 'করতে হবে' — gotta এর মতোই বাধ্যবাধকতা বোঝায়",
          example: "I hafta go. I hafta finish this."
        },
        {
          rule_bn: "hafta শুধু কথায় বলো, লেখায় have to লেখো",
          example: "Friend: I hafta leave. Boss (email): I have to attend a meeting."
        },
        {
          rule_bn: "hafta এর পরে সব সময় কাজ বলবে",
          example: "I hafta work. I hafta study. I hafta call."
        }
      ],
      usageSituations: [
        {
          situation_bn: "বন্ধুকে বলছো তোমাকে যেতে হবে",
          situation_en: "Telling a friend you have to leave",
          exampleSentence: "I hafta go now. My bus is coming.",
          exampleSentence_bn: "আমাকে এখন যেতে হবে। আমার বাস আসছে।"
        },
        {
          situation_bn: "পরিবারকে জানাচ্ছো তোমার কাজ",
          situation_en: "Informing family about your task",
          exampleSentence: "I hafta finish my assignment tonight.",
          exampleSentence_bn: "আমাকে আজ রাতে এসাইনমেন্ট শেষ করতে হবে।"
        },
        {
          situation_bn: "সহকর্মীকে বলছো তোমার বাধ্যবাধকতা",
          situation_en: "Telling colleague your obligation",
          exampleSentence: "I hafta attend the training tomorrow.",
          exampleSentence_bn: "আমাকে কাল ট্রেনিংয়ে যেতে হবে।"
        }
      ],
      sentenceBuilding: [
        {
          previousPatternId: "X11.1",
          previousFormula: "I'm gonna [VERB]",
          previousFormula_bn: "আমি [কাজ] করবো",
          combined: "I hafta work late, so I'm gonna skip dinner.",
          combined_bn: "আমাকে রাত পর্যন্ত কাজ করতে হবে, তাই রাতের খাবার বাদ দেবো।"
        },
        {
          previousPatternId: "X11.3",
          previousFormula: "I gotta [VERB]",
          previousFormula_bn: "আমাকে [কাজ] করতে হবে",
          combined: "I hafta finish this first, then I gotta meet my client.",
          combined_bn: "প্রথমে এটা শেষ করতে হবে, তারপর ক্লায়েন্টের সাথে দেখা করতে হবে।"
        }
      ],
      memoryTrick_bn: "hafta = হ্যাফটা (have to) — 'করতে হবে' বলার আরেক সহজ উপায়। gotta এর মতোই, শুধু উচ্চারণ আলাদা।",
      chunks: [
        {
          en: "I hafta",
          bn: "আমাকে লাগবে",
          pronunciation_bn: "আই হ্যাফটা"
        },
        {
          en: "You hafta",
          bn: "তোমাকে লাগবে",
          pronunciation_bn: "ইউ হ্যাফটা"
        },
        {
          en: "We hafta",
          bn: "আমাদের লাগবে",
          pronunciation_bn: "উই হ্যাফটা"
        },
        {
          en: "They hafta",
          bn: "তাদের লাগবে",
          pronunciation_bn: "দে হ্যাফটা"
        }
      ],
      wordMap: {
        bn_sentence: "আমাকে বাজার যেতে হবে",
        en_sentence: "I hafta go to the market",
        mappings: [
          {
            bn_word: "আমাকে",
            en_word: "I",
            type: "direct",
            bridgeRuleId: "BR1"
          },
          {
            bn_word: "যেতে হবে",
            en_word: "hafta go",
            type: "direct",
            bridgeRuleId: "BR7"
          },
          {
            bn_word: "বাজার",
            en_word: "to the market",
            type: "direct"
          }
        ]
      },
      answerTemplates: [
        {
          situation_bn: "কেউ জিজ্ঞেস করছে তুমি কী করবে",
          question: "What are you doing later?",
          question_bn: "পরে কী করবে?",
          answerFormula: "I hafta [VERB]",
          answerFormula_bn: "আমাকে [কাজ] করতে হবে",
          pronunciation_bn: "আই হ্যাফটা [কাজ]",
          examples: [
            {
              answer: "I hafta work.",
              answer_bn: "আমাকে কাজ করতে হবে।",
              pronunciation_bn: "আই হ্যাফটা ওয়ার্ক"
            },
            {
              answer: "I hafta study for the exam.",
              answer_bn: "আমাকে পরীক্ষার জন্য পড়তে হবে।",
              pronunciation_bn: "আই হ্যাফটা স্টাডি ফর দ্য এক্সাম"
            },
            {
              answer: "I hafta visit my aunt.",
              answer_bn: "আমাকে আমার খালার বাসায় যেতে হবে।",
              pronunciation_bn: "আই হ্যাফটা ভিজিট মাই আন্ট"
            }
          ]
        },
        {
          situation_bn: "বন্ধু জানতে চাইছে তুমি কেন ব্যস্ত",
          question: "Why can't you come to the party?",
          question_bn: "তুমি পার্টিতে আসতে পারছো না কেন?",
          answerFormula: "I hafta [VERB]",
          answerFormula_bn: "আমাকে [কাজ] করতে হবে",
          pronunciation_bn: "আই হ্যাফটা [কাজ]",
          examples: [
            {
              answer: "I hafta take care of my grandma.",
              answer_bn: "আমাকে দাদীর যত্ন নিতে হবে।",
              pronunciation_bn: "আই হ্যাফটা টেক কেয়ার অফ মাই গ্র্যান্ডমা"
            },
            {
              answer: "I hafta finish my project.",
              answer_bn: "আমাকে আমার প্রজেক্ট শেষ করতে হবে।",
              pronunciation_bn: "আই হ্যাফটা ফিনিশ মাই প্রজেক্ট"
            },
            {
              answer: "I hafta work overtime.",
              answer_bn: "আমাকে অতিরিক্ত সময় কাজ করতে হবে।",
              pronunciation_bn: "আই হ্যাফটা ওয়ার্ক ওভারটাইম"
            }
          ]
        },
        {
          situation_bn: "পরিবার জিজ্ঞেস করছে তোমার পরিকল্পনা",
          question: "What do you hafta do tomorrow?",
          question_bn: "কাল কী করতে হবে?",
          answerFormula: "I hafta [VERB] first",
          answerFormula_bn: "প্রথমে [কাজ] করতে হবে",
          pronunciation_bn: "আই হ্যাফটা [কাজ] ফার্স্ট",
          examples: [
            {
              answer: "I hafta go to the bank first.",
              answer_bn: "প্রথমে ব্যাংকে যেতে হবে।",
              pronunciation_bn: "আই হ্যাফটা গো টু দ্য ব্যাংক ফার্স্ট"
            },
            {
              answer: "I hafta submit my tax return first.",
              answer_bn: "প্রথমে ট্যাক্স রিটার্ন জমা দিতে হবে।",
              pronunciation_bn: "আই হ্যাফটা সাবমিট মাই ট্যাক্স রিটার্ন ফার্স্ট"
            },
            {
              answer: "I hafta renew my driving license first.",
              answer_bn: "প্রথমে ড্রাইভিং লাইসেন্স নবায়ন করতে হবে।",
              pronunciation_bn: "আই হ্যাফটা রিনিউ মাই ড্রাইভিং লাইসেন্স ফার্স্ট"
            }
          ]
        }
      ],
      variations: [
        {
          variant: "negative",
          label: "Don't hafta (করতে হবে না)",
          label_bn: "ডোন্ট হ্যাফটা — করতে হবে না",
          formula: "I don't hafta [VERB]",
          formula_bn: "আমাকে [কাজ] করতে হবে না",
          examples: [
            {
              en: "I don't hafta work tomorrow.",
              bn: "আমাকে কাল কাজ করতে হবে না।",
              pronunciation_bn: "আই ডোন্ট হ্যাফটা ওয়ার্ক টুমরো",
              slotValues: { VERB: "work tomorrow" },
              stage: 1
            },
            {
              en: "You don't hafta worry about it.",
              bn: "তোমাকে এটা নিয়ে চিন্তা করতে হবে না।",
              pronunciation_bn: "ইউ ডোন্ট হ্যাফটা ওরি অ্যাবাউট ইট",
              slotValues: { VERB: "worry about it" },
              stage: 2
            },
            {
              en: "We don't hafta pay extra fees.",
              bn: "আমাদের অতিরিক্ত ফি দিতে হবে না।",
              pronunciation_bn: "উই ডোন্ট হ্যাফটা পে এক্সট্রা ফিজ",
              slotValues: { VERB: "pay extra fees" },
              stage: 3
            }
          ]
        },
        {
          variant: "question",
          label: "Hafta question (করতে হবে কি?)",
          label_bn: "হ্যাফটা প্রশ্ন — করতে হবে কি?",
          formula: "Do I hafta [VERB]?",
          formula_bn: "আমাকে কি [কাজ] করতে হবে?",
          examples: [
            {
              en: "Do I hafta come early?",
              bn: "আমাকে কি তাড়াতাড়ি আসতে হবে?",
              pronunciation_bn: "ডু আই হ্যাফটা কাম আরলি",
              slotValues: { VERB: "come early" },
              stage: 1
            },
            {
              en: "Do we hafta bring anything?",
              bn: "আমাদের কি কিছু আনতে হবে?",
              pronunciation_bn: "ডু উই হ্যাফটা ব্রিং এনিথিং",
              slotValues: { VERB: "bring anything" },
              stage: 2
            },
            {
              en: "Do they hafta submit the documents today?",
              bn: "তাদের কি আজ ডকুমেন্ট জমা দিতে হবে?",
              pronunciation_bn: "ডু দে হ্যাফটা সাবমিট দ্য ডকুমেন্টস টুডে",
              slotValues: { VERB: "submit the documents today" },
              stage: 3
            }
          ]
        },
        {
          variant: "emphasis",
          label: "You hafta (তোমাকে অবশ্যই)",
          label_bn: "ইউ হ্যাফটা — তোমাকে অবশ্যই",
          formula: "You hafta [VERB]",
          formula_bn: "তোমাকে অবশ্যই [কাজ] করতে হবে",
          examples: [
            {
              en: "You hafta see this place!",
              bn: "তোমাকে এই জায়গা দেখতেই হবে!",
              pronunciation_bn: "ইউ হ্যাফটা সি দিস প্লেস",
              slotValues: { VERB: "see this place" },
              stage: 2
            },
            {
              en: "You hafta try this new restaurant.",
              bn: "তোমাকে এই নতুন রেস্টুরেন্ট চেষ্টা করতেই হবে।",
              pronunciation_bn: "ইউ হ্যাফটা ট্রাই দিস নিউ রেস্টুরেন্ট",
              slotValues: { VERB: "try this new restaurant" },
              stage: 2
            },
            {
              en: "You hafta be more careful with financial decisions.",
              bn: "তোমাকে আর্থিক সিদ্ধান্তে আরো সতর্ক হতে হবে।",
              pronunciation_bn: "ইউ হ্যাফটা বি মোর কেয়ারফুল উইথ ফাইন্যান্সিয়াল ডিসিশনস",
              slotValues: { VERB: "be more careful with financial decisions" },
              stage: 3
            }
          ]
        }
      ],
      dialogueChains: [
        {
          id: "X11.6-chain-1",
          title_bn: "অফিসে দুই সহকর্মীর কথোপকথন",
          title_en: "Two colleagues talking at office",
          situation_bn: "দুই সহকর্মী কাজের চাপ নিয়ে কথা বলছে",
          icon: "💼",
          turns: [
            {
              speaker_bn: "নাহিদ",
              en: "Are you free for lunch today?",
              bn: "আজ দুপুরে খাওয়ার জন্য সময় আছে?",
              pronunciation_bn: "আর ইউ ফ্রি ফর লাঞ্চ টুডে?",
              patternId: "X11.6"
            },
            {
              speaker_bn: "সাব্বির",
              en: "Sorry, I hafta finish this report by 2 PM.",
              bn: "সরি, আমাকে ২টার মধ্যে এই রিপোর্ট শেষ করতে হবে।",
              pronunciation_bn: "সরি, আই হ্যাফটা ফিনিশ দিস রিপোর্ট বাই টু পিএম।",
              patternId: "X11.6"
            },
            {
              speaker_bn: "নাহিদ",
              en: "That's a lot of work! Do you hafta do it alone?",
              bn: "অনেক কাজ তো! একা করতে হবে?",
              pronunciation_bn: "দ্যাটস অ্যা লট অফ ওয়ার্ক! ডু ইউ হ্যাফটা ডু ইট অ্যালোন?",
              patternId: "X11.6"
            },
            {
              speaker_bn: "সাব্বির",
              en: "Yeah, I hafta present it to the manager today.",
              bn: "হ্যাঁ, আজ ম্যানেজারকে প্রেজেন্ট করতে হবে।",
              pronunciation_bn: "ইয়্যাহ, আই হ্যাফটা প্রেজেন্ট ইট টু দ্য ম্যানেজার টুডে।",
              patternId: "X11.6"
            },
            {
              speaker_bn: "নাহিদ",
              en: "Okay, I understand. You hafta focus on work.",
              bn: "ঠিক আছে, বুঝলাম। তোমাকে কাজে ফোকাস করতে হবে।",
              pronunciation_bn: "ওকে, আই আন্ডারস্ট্যান্ড। ইউ হ্যাফটা ফোকাস অন ওয়ার্ক।",
              patternId: "X11.6"
            },
            {
              speaker_bn: "সাব্বির",
              en: "Thanks! Maybe tomorrow we don't hafta rush.",
              bn: "ধন্যবাদ! হয়তো কাল তাড়াহুড়ো করতে হবে না।",
              pronunciation_bn: "থ্যাংকস! মেবি টুমরো উই ডোন্ট হ্যাফটা রাশ।",
              patternId: "X11.6"
            }
          ],
          patternsUsed: ["X11.6"]
        }
      ],
      slots: [
        {
          name: "VERB",
          description: "Any action you must do or have to do",
          description_bn: "যে কাজ তোমাকে করতেই হবে",
          acceptedTypes: ["verb", "verb phrase"],
          examples: ["go", "work", "study", "finish", "submit", "attend", "pay", "complete", "check", "visit"]
        }
      ],
      examples: [
        {
          en: "I hafta go.",
          bn: "আমাকে যেতে হবে।",
          pronunciation_bn: "আই হ্যাফটা গো",
          slotValues: { VERB: "go" },
          topicArea: "daily_life",
          stage: 1
        },
        {
          en: "I hafta work today.",
          bn: "আমাকে আজ কাজ করতে হবে।",
          pronunciation_bn: "আই হ্যাফটা ওয়ার্ক টুডে",
          slotValues: { VERB: "work today" },
          topicArea: "work",
          stage: 1,
          miniStory: {
            situation_bn: "শুক্রবার কিন্তু অফিসে জরুরি মিটিং আছে",
            icon: "📅"
          }
        },
        {
          en: "I hafta study tonight.",
          bn: "আমাকে আজ রাতে পড়তে হবে।",
          pronunciation_bn: "আই হ্যাফটা স্টাডি টুনাইট",
          slotValues: { VERB: "study tonight" },
          topicArea: "education",
          stage: 1
        },
        {
          en: "I hafta catch the morning bus.",
          bn: "আমাকে সকালের বাস ধরতে হবে।",
          pronunciation_bn: "আই হ্যাফটা ক্যাচ দ্য মর্নিং বাস",
          slotValues: { VERB: "catch the morning bus" },
          topicArea: "transport",
          stage: 1
        },
        {
          en: "I hafta call my dad.",
          bn: "আমাকে বাবাকে ফোন করতে হবে।",
          pronunciation_bn: "আই হ্যাফটা কল মাই ড্যাড",
          slotValues: { VERB: "call my dad" },
          topicArea: "social_interaction",
          stage: 1,
          miniStory: {
            situation_bn: "বাবা গ্রামে আছে, খবর নিতে হবে",
            icon: "📱"
          }
        },
        {
          en: "She hafta submit her application today.",
          bn: "তাকে আজ আবেদন জমা দিতে হবে।",
          pronunciation_bn: "শি হ্যাফটা সাবমিট হার অ্যাপ্লিকেশন টুডে",
          slotValues: { VERB: "submit her application today" },
          topicArea: "work",
          stage: 2
        },
        {
          en: "We hafta finish this by Friday.",
          bn: "আমাদের শুক্রবারের মধ্যে এটা শেষ করতে হবে।",
          pronunciation_bn: "উই হ্যাফটা ফিনিশ দিস বাই ফ্রাইডে",
          slotValues: { VERB: "finish this by Friday" },
          topicArea: "work",
          stage: 2,
          miniStory: {
            situation_bn: "অফিসে প্রজেক্ট চলছে, শুক্রবার ডেডলাইন",
            icon: "⏰"
          }
        },
        {
          en: "He hafta get his medicine from the pharmacy.",
          bn: "তাকে ফার্মেসি থেকে ওষুধ আনতে হবে।",
          pronunciation_bn: "হি হ্যাফটা গেট হিজ মেডিসিন ফ্রম দ্য ফার্মেসি",
          slotValues: { VERB: "get his medicine from the pharmacy" },
          topicArea: "health",
          stage: 2
        },
        {
          en: "They hafta attend the workshop tomorrow.",
          bn: "তাদের কাল ওয়ার্কশপে যেতে হবে।",
          pronunciation_bn: "দে হ্যাফটা অ্যাটেন্ড দ্য ওয়ার্কশপ টুমরো",
          slotValues: { VERB: "attend the workshop tomorrow" },
          topicArea: "work",
          stage: 2,
          miniStory: {
            situation_bn: "কোম্পানি সবার জন্য ট্রেনিং ওয়ার্কশপ আয়োজন করেছে",
            icon: "📊"
          }
        },
        {
          en: "I hafta pay the house rent today.",
          bn: "আমাকে আজ বাড়ি ভাড়া দিতে হবে।",
          pronunciation_bn: "আই হ্যাফটা পে দ্য হাউস রেন্ট টুডে",
          slotValues: { VERB: "pay the house rent today" },
          topicArea: "finance",
          stage: 2
        },
        {
          en: "The manager hafta approve the budget proposal.",
          bn: "ম্যানেজারকে বাজেট প্রস্তাব অনুমোদন করতে হবে।",
          pronunciation_bn: "দ্য ম্যানেজার হ্যাফটা অ্যাপ্রুভ দ্য বাজেট প্রপোজাল",
          slotValues: { VERB: "approve the budget proposal" },
          topicArea: "work",
          stage: 3,
          miniStory: {
            situation_bn: "তুমি বাজেট তৈরি করেছো, এখন ম্যানেজারের অনুমোদন দরকার",
            icon: "💰"
          }
        },
        {
          en: "We hafta renew our business license this month.",
          bn: "আমাদের এই মাসে ব্যবসা লাইসেন্স নবায়ন করতে হবে।",
          pronunciation_bn: "উই হ্যাফটা রিনিউ আওয়ার বিজনেস লাইসেন্স দিস মান্থ",
          slotValues: { VERB: "renew our business license this month" },
          topicArea: "finance",
          stage: 3
        },
        {
          en: "My cousin hafta apply for her passport soon.",
          bn: "আমার কাজিনকে শীঘ্রই পাসপোর্টের জন্য আবেদন করতে হবে।",
          pronunciation_bn: "মাই কাজিন হ্যাফটা অ্যাপ্লাই ফর হার পাসপোর্ট সুন",
          slotValues: { VERB: "apply for her passport soon" },
          topicArea: "work",
          stage: 3
        },
        {
          en: "The workers hafta wear safety equipment on site.",
          bn: "শ্রমিকদের সাইটে নিরাপত্তা সরঞ্জাম পরতে হবে।",
          pronunciation_bn: "দ্য ওয়ার্কারস হ্যাফটা ওয়্যার সেফটি ইকুইপমেন্ট অন সাইট",
          slotValues: { VERB: "wear safety equipment on site" },
          topicArea: "work",
          stage: 3,
          miniStory: {
            situation_bn: "নির্মাণ সাইটে কাজ চলছে, সবাইকে হেলমেট পরতে হবে",
            icon: "👷"
          }
        },
        {
          en: "I hafta prepare for Ramadan by cleaning the house.",
          bn: "আমাকে রমজানের জন্য বাসা পরিষ্কার করে প্রস্তুত হতে হবে।",
          pronunciation_bn: "আই হ্যাফটা প্রিপেয়ার ফর রমজান বাই ক্লিনিং দ্য হাউস",
          slotValues: { VERB: "prepare for Ramadan by cleaning the house" },
          topicArea: "religion",
          stage: 3,
          miniStory: {
            situation_bn: "রমজান আসছে, সবাই বাসা পরিষ্কার করছে",
            icon: "🌙"
          }
        }
      ]
    }
  ]
};
