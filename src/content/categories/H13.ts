import { PatternCategory } from "@/types/pattern";

export const categoryH13: PatternCategory = {
  id: "H13",
  slug: "self-correction-conversation",
  name: "Self-Correction in Conversation",
  name_bn: "কথার মাঝে নিজেকে সংশোধন করা",
  description: "Learn how to correct yourself mid-sentence naturally — I mean, actually, wait no, what I meant was.",
  description_bn: "কথা বলতে বলতে ভুল হলে কীভাবে সুন্দরভাবে ঠিক করতে হয় — মানে, আসলে, থামো না — এগুলো শেখো।",
  icon: "🔄",
  group: "H",
  groupName: "WH-Questions & Information",
  groupName_bn: "প্রশ্ন ও তথ্য",
  difficulty: "intermediate",
  patterns: [
    {
      id: "H13.1",
      patternName: "I mean",
      patternName_bn: "মানে বলা / ব্যাখ্যা করা",
      concept_bn: "মানে",
      formula: "I mean, [CORRECTION/CLARIFICATION]",
      formula_bn: "মানে, [সঠিক কথা/ব্যাখ্যা]",
      formulaPronunciation_bn: "আই মিন, [কথা]",
      usageNote: "Use 'I mean' when you want to clarify, rephrase, or correct something you just said. It's very common in natural conversation and helps you sound more fluent even when you make small mistakes. You can use it to add more detail, change what you said, or explain yourself better.",
      usageNote_bn: "কথা বলার সময় যদি মনে হয় আরেকটু ভালো করে বলতে পারতাম, বা একটু ভুল হয়ে গেছে, তখন 'আই মিন' বলে নতুন করে বলতে পারো। এটা খুব স্বাভাবিক — সবাই এভাবে কথা বলে। ইংরেজিতে ভুল হলে ঘাবড়ানোর দরকার নেই — 'আই মিন' বলে ঠিক করে নাও।",
      difficulty: "intermediate",
      formality: "casual",
      banglaStructureMap: "বাংলা: মানে, আমি কাল যাবো → English: I mean, I'll go tomorrow",
      bridgeRuleIds: ["BR1", "BR7"],
      conversionSteps: {
        banglaThought: "আমি আজকে... মানে কালকে যাবো",
        steps: [
          {
            step_bn: "প্রথমে যা বলেছি তা রাখো",
            result: "I'll go today"
          },
          {
            step_bn: "এরপর 'মানে' যোগ করো",
            result: "I'll go today... I mean"
          },
          {
            step_bn: "শেষে সঠিক কথা বলো",
            result: "I'll go today... I mean, tomorrow"
          }
        ],
        finalResult: "I mean, I'll go tomorrow",
        finalResult_bn: "মানে, আমি কাল যাবো"
      },
      commonMistakes: [
        {
          wrong: "I mean is tomorrow",
          correct: "I mean, tomorrow",
          explanation_bn: "'আই মিন' এর পরে কমা দাও, তারপর সরাসরি সঠিক কথা বলো — 'ইজ' বা 'দ্যাট' লাগবে না"
        },
        {
          wrong: "I mean that I want food",
          correct: "I mean, I want food",
          explanation_bn: "'আই মিন' এর পরে 'দ্যাট' না বলে সরাসরি কমা দিয়ে কথা বলো — এটা সংশোধন, ব্যাখ্যা নয়"
        },
        {
          wrong: "Mean, I will go",
          correct: "I mean, I will go",
          explanation_bn: "'মিন' একা বলা যায় না — সবসময় 'আই মিন' বলতে হবে"
        }
      ],
      simpleRules: [
        {
          rule_bn: "যখন মনে হয় ভুল বলে ফেলেছি, তখন 'আই মিন' বলে সঠিক কথা বলো",
          example: "She's coming on Friday... I mean, Saturday"
        },
        {
          rule_bn: "'আই মিন' এর পরে সবসময় কমা দিয়ে তারপর নতুন কথা",
          example: "It costs 200 taka, I mean, 250 taka"
        },
        {
          rule_bn: "একই বাক্যে একবার 'আই মিন' যথেষ্ট — বারবার বললে অস্বাভাবিক শোনায়",
          example: "I need three... I mean, four tickets (ঠিক আছে) NOT: I mean, I mean, four tickets"
        }
      ],
      usageSituations: [
        {
          situation_bn: "দোকানে দাম বলতে গিয়ে ভুল সংখ্যা বলে ফেলেছ",
          situation_en: "You said the wrong price at a shop",
          exampleSentence: "That's 300 taka... I mean, 350 taka",
          exampleSentence_bn: "ওটা ৩০০ টাকা... মানে, ৩৫০ টাকা"
        },
        {
          situation_bn: "অফিসে মিটিং এর দিন ভুল বলেছ",
          situation_en: "You said the wrong meeting day at office",
          exampleSentence: "The meeting is on Monday... I mean, Tuesday",
          exampleSentence_bn: "মিটিং সোমবার... মানে, মঙ্গলবার"
        },
        {
          situation_bn: "বাসে নেমে যাওয়ার জায়গা বলতে গিয়ে ভুল নাম বলেছ",
          situation_en: "You mentioned the wrong bus stop location",
          exampleSentence: "I'll get off at Farmgate... I mean, Shahbag",
          exampleSentence_bn: "আমি ফার্মগেট নামবো... মানে, শাহবাগ"
        }
      ],
      sentenceBuilding: [
        {
          previousPatternId: "A1.1",
          previousFormula: "I want [ITEM]",
          previousFormula_bn: "আমি [জিনিস] চাই",
          combined: "I want tea... I mean, coffee",
          combined_bn: "আমি চা চাই... মানে, কফি"
        },
        {
          previousPatternId: "A1.2",
          previousFormula: "I need [ITEM]",
          previousFormula_bn: "আমি [জিনিস] দরকার",
          combined: "I need 2 kilos... I mean, 3 kilos",
          combined_bn: "আমার ২ কেজি দরকার... মানে, ৩ কেজি"
        }
      ],
      memoryTrick_bn: "বাংলায় যেমন 'মানে' বলে সংশোধন করি, ইংরেজিতেও তাই — 'আই মিন' বলে ঠিক করে নাও",
      chunks: [
        {
          en: "I mean",
          bn: "মানে / আমি বলতে চাচ্ছি",
          pronunciation_bn: "আই মিন"
        },
        {
          en: "I mean, not that",
          bn: "মানে, ওটা না",
          pronunciation_bn: "আই মিন, নট দ্যাট"
        },
        {
          en: "What I mean is",
          bn: "আমি যা বলতে চাচ্ছি তা হলো",
          pronunciation_bn: "হোয়াট আই মিন ইজ"
        }
      ],
      wordMap: {
        bn_sentence: "মানে, আমি কাল যাবো",
        en_sentence: "I mean, I'll go tomorrow",
        mappings: [
          { bn_word: "মানে", en_word: "I mean", type: "direct", bridgeRuleId: "BR1" },
          { bn_word: "আমি", en_word: "I", type: "direct", bridgeRuleId: "BR1" },
          { bn_word: "যাবো", en_word: "will go", type: "split", bridgeRuleId: "BR7" },
          { bn_word: "কাল", en_word: "tomorrow", type: "direct" }
        ]
      },
      answerTemplates: [
        {
          situation_bn: "কেউ যদি ভুল সংশোধন করে, তুমি কী বলবে",
          question: "How do you respond when someone corrects themselves?",
          question_bn: "কেউ নিজের ভুল ঠিক করলে কী বলবে?",
          answerFormula: "Oh, okay / Got it / No problem",
          answerFormula_bn: "ও, আচ্ছা / বুঝেছি / সমস্যা নেই",
          pronunciation_bn: "ও, ওকে / গট ইট / নো প্রবলেম",
          examples: [
            {
              answer: "Oh, okay. Tuesday then",
              answer_bn: "ও আচ্ছা, তাহলে মঙ্গলবার",
              pronunciation_bn: "ও, ওকে। টিউজডে দেন"
            },
            {
              answer: "Got it, 350 taka",
              answer_bn: "বুঝেছি, ৩৫০ টাকা",
              pronunciation_bn: "গট ইট, থ্রি ফিফটি টাকা"
            },
            {
              answer: "No problem, I understand",
              answer_bn: "কোনো সমস্যা নেই, বুঝেছি",
              pronunciation_bn: "নো প্রবলেম, আই আন্ডারস্ট্যান্ড"
            }
          ]
        },
        {
          situation_bn: "দোকানদার যদি দাম ঠিক করে",
          question: "Shopkeeper corrects the price",
          question_bn: "দোকানদার দাম ঠিক করলে",
          answerFormula: "Okay, [AMOUNT] taka / That's fine",
          answerFormula_bn: "আচ্ছা, [টাকা] / ঠিক আছে",
          pronunciation_bn: "ওকে, [অ্যামাউন্ট] টাকা / দ্যাটস ফাইন",
          examples: [
            {
              answer: "Okay, 500 taka total",
              answer_bn: "আচ্ছা, মোট ৫০০ টাকা",
              pronunciation_bn: "ওকে, ফাইভ হান্ড্রেড টাকা টোটাল"
            },
            {
              answer: "That's fine, here you go",
              answer_bn: "ঠিক আছে, নাও",
              pronunciation_bn: "দ্যাটস ফাইন, হিয়ার ইউ গো"
            },
            {
              answer: "Alright, let me pay that",
              answer_bn: "ঠিক আছে, তাহলে দিচ্ছি",
              pronunciation_bn: "অলরাইট, লেট মি পে দ্যাট"
            }
          ]
        },
        {
          situation_bn: "সহকর্মী যদি সময় ঠিক করে",
          question: "Colleague corrects the meeting time",
          question_bn: "সহকর্মী মিটিং এর সময় ঠিক করলে",
          answerFormula: "Sure, I'll be there at [TIME]",
          answerFormula_bn: "ঠিক আছে, আমি [সময়] এ থাকবো",
          pronunciation_bn: "শিওর, আইল বি দেয়ার অ্যাট [টাইম]",
          examples: [
            {
              answer: "Sure, I'll be there at 3 PM",
              answer_bn: "ঠিক আছে, আমি ৩টায় থাকবো",
              pronunciation_bn: "শিওর, আইল বি দেয়ার অ্যাট থ্রি পিএম"
            },
            {
              answer: "Got it, see you at 10 AM",
              answer_bn: "বুঝেছি, ১০টায় দেখা হবে",
              pronunciation_bn: "গট ইট, সি ইউ অ্যাট টেন এএম"
            },
            {
              answer: "Okay, I'll come at 2 o'clock",
              answer_bn: "আচ্ছা, আমি ২টায় আসবো",
              pronunciation_bn: "ওকে, আইল কাম অ্যাট টু ও'ক্লক"
            }
          ]
        }
      ],
      variations: [
        {
          variant: "past_correction",
          label: "Past tense correction",
          label_bn: "আগের কথা ঠিক করা",
          formula: "I mean, [PAST CORRECTION]",
          formula_bn: "মানে, [আগের সঠিক কথা]",
          examples: [
            {
              en: "I went yesterday... I mean, day before yesterday",
              bn: "আমি গতকাল গিয়েছিলাম... মানে, পরশু",
              pronunciation_bn: "আই ওয়েন্ট ইয়েস্টারডে... আই মিন, ডে বিফোর ইয়েস্টারডে",
              slotValues: { CORRECTION: "day before yesterday" },
              stage: 2
            },
            {
              en: "He called at 5... I mean, at 6 PM",
              bn: "সে ৫টায় ফোন করেছিল... মানে, ৬টায়",
              pronunciation_bn: "হি কল্ড অ্যাট ফাইভ... আই মিন, অ্যাট সিক্স পিএম",
              slotValues: { CORRECTION: "at 6 PM" },
              stage: 1
            },
            {
              en: "She bought 2 sarees... I mean, 3 sarees",
              bn: "সে ২টা শাড়ি কিনেছিল... মানে, ৩টা",
              pronunciation_bn: "শি বট টু শাড়িজ... আই মিন, থ্রি শাড়িজ",
              slotValues: { CORRECTION: "3 sarees" },
              stage: 1
            }
          ]
        },
        {
          variant: "number_correction",
          label: "Correcting numbers",
          label_bn: "সংখ্যা ঠিক করা",
          formula: "I mean, [CORRECT NUMBER]",
          formula_bn: "মানে, [সঠিক সংখ্যা]",
          examples: [
            {
              en: "It costs 1000 taka... I mean, 1200 taka",
              bn: "এটা ১০০০ টাকা... মানে, ১২০০ টাকা",
              pronunciation_bn: "ইট কস্টস ওয়ান থাউজেন্ড টাকা... আই মিন, টুয়েলভ হান্ড্রেড টাকা",
              slotValues: { NUMBER: "1200 taka" },
              stage: 1
            },
            {
              en: "We need 10 chairs... I mean, 12 chairs",
              bn: "আমাদের ১০টা চেয়ার দরকার... মানে, ১২টা",
              pronunciation_bn: "উই নিড টেন চেয়ারস... আই মিন, টুয়েলভ চেয়ারস",
              slotValues: { NUMBER: "12 chairs" },
              stage: 2
            },
            {
              en: "Give me 5 pieces... I mean, 6 pieces",
              bn: "আমাকে ৫টা দাও... মানে, ৬টা",
              pronunciation_bn: "গিভ মি ফাইভ পিসেস... আই মিন, সিক্স পিসেস",
              slotValues: { NUMBER: "6 pieces" },
              stage: 1
            }
          ]
        },
        {
          variant: "explanation_expansion",
          label: "Adding explanation",
          label_bn: "ব্যাখ্যা যোগ করা",
          formula: "I mean, [ADDITIONAL EXPLANATION]",
          formula_bn: "মানে, [আরো ব্যাখ্যা]",
          examples: [
            {
              en: "I'm busy today... I mean, I have three meetings",
              bn: "আমি আজ ব্যস্ত... মানে, আমার তিনটা মিটিং আছে",
              pronunciation_bn: "আইম বিজি টুডে... আই মিন, আই হ্যাভ থ্রি মিটিংস",
              slotValues: { EXPLANATION: "I have three meetings" },
              stage: 2
            },
            {
              en: "It's far... I mean, it takes 2 hours by bus",
              bn: "এটা দূরে... মানে, বাসে ২ঘন্টা লাগে",
              pronunciation_bn: "ইটস ফার... আই মিন, ইট টেকস টু আওয়ারস বাই বাস",
              slotValues: { EXPLANATION: "it takes 2 hours by bus" },
              stage: 3
            },
            {
              en: "He's good... I mean, he works very carefully",
              bn: "সে ভালো... মানে, সে খুব মনোযোগ দিয়ে কাজ করে",
              pronunciation_bn: "হিজ গুড... আই মিন, হি ওয়ার্কস ভেরি কেয়ারফুলি",
              slotValues: { EXPLANATION: "he works very carefully" },
              stage: 3
            }
          ]
        }
      ],
      dialogueChains: [
        {
          id: "H13.1-dialogue-1",
          title_bn: "বাজারে দাম নিয়ে আলোচনা",
          title_en: "Price discussion at the market",
          situation_bn: "তুমি মাছ কিনছো, দোকানদার দাম বলার সময় ভুল করছে",
          icon: "🐟",
          turns: [
            {
              speaker_bn: "তুমি",
              en: "How much for this rui fish?",
              bn: "এই রুই মাছের দাম কত?",
              pronunciation_bn: "হাউ মাচ ফর দিস রুই ফিশ?",
              patternId: "G2.1"
            },
            {
              speaker_bn: "দোকানদার",
              en: "400 taka per kilo... I mean, 450 taka",
              bn: "৪০০ টাকা কেজি... মানে, ৪৫০ টাকা",
              pronunciation_bn: "ফোর হান্ড্রেড টাকা পার কিলো... আই মিন, ফোর ফিফটি টাকা",
              patternId: "H13.1"
            },
            {
              speaker_bn: "তুমি",
              en: "Okay, give me 2 kilos... I mean, just 1 kilo",
              bn: "আচ্ছা, ২ কেজি দাও... মানে, ১ কেজিই দাও",
              pronunciation_bn: "ওকে, গিভ মি টু কিলোস... আই মিন, জাস্ট ওয়ান কিলো",
              patternId: "H13.1"
            },
            {
              speaker_bn: "দোকানদার",
              en: "Sure. That's 450 taka total",
              bn: "ঠিক আছে। মোট ৪৫০ টাকা",
              pronunciation_bn: "শিওর। দ্যাটস ফোর ফিফটি টাকা টোটাল",
              patternId: "A1.7"
            }
          ],
          patternsUsed: ["G2.1", "H13.1", "A1.7"]
        }
      ],
      slots: [
        {
          name: "CORRECTION/CLARIFICATION",
          description: "The corrected or clarified information you want to say instead",
          description_bn: "যে সঠিক কথা বা ব্যাখ্যা তুমি বলতে চাও",
          acceptedTypes: ["any statement", "number", "time", "place", "explanation"],
          examples: [
            "I'll go tomorrow",
            "350 taka",
            "at 3 PM",
            "at Shahbag",
            "I have a meeting"
          ]
        }
      ],
      examples: [
        {
          en: "I want tea... I mean, coffee",
          bn: "আমি চা চাই... মানে, কফি",
          pronunciation_bn: "আই ওয়ান্ট টি... আই মিন, কফি",
          slotValues: { "CORRECTION/CLARIFICATION": "coffee" },
          topicArea: "food",
          stage: 1,
          miniStory: {
            situation_bn: "রেস্তোরাঁয় অর্ডার দিচ্ছো, প্রথমে চা বললে কিন্তু কফি খেতে চাও",
            icon: "☕"
          }
        },
        {
          en: "The meeting is on Monday... I mean, Tuesday",
          bn: "মিটিং সোমবার... মানে, মঙ্গলবার",
          pronunciation_bn: "দ্য মিটিং ইজ অন মান্ডে... আই মিন, টিউজডে",
          slotValues: { "CORRECTION/CLARIFICATION": "Tuesday" },
          topicArea: "work",
          stage: 1
        },
        {
          en: "It costs 200 taka... I mean, 250 taka",
          bn: "এটার দাম ২০০ টাকা... মানে, ২৫০ টাকা",
          pronunciation_bn: "ইট কস্টস টু হান্ড্রেড টাকা... আই মিন, টু ফিফটি টাকা",
          slotValues: { "CORRECTION/CLARIFICATION": "250 taka" },
          topicArea: "shopping",
          stage: 1
        },
        {
          en: "I need 3 books... I mean, 4 books",
          bn: "আমার ৩টা বই দরকার... মানে, ৪টা",
          pronunciation_bn: "আই নিড থ্রি বুক্স... আই মিন, ফোর বুক্স",
          slotValues: { "CORRECTION/CLARIFICATION": "4 books" },
          topicArea: "education",
          stage: 1
        },
        {
          en: "She's coming at 5... I mean, at 6 o'clock",
          bn: "সে ৫টায় আসছে... মানে, ৬টায়",
          pronunciation_bn: "শিজ কামিং অ্যাট ফাইভ... আই মিন, অ্যাট সিক্স ও'ক্লক",
          slotValues: { "CORRECTION/CLARIFICATION": "at 6 o'clock" },
          topicArea: "social_interaction",
          stage: 1,
          miniStory: {
            situation_bn: "বন্ধুকে ফোনে বলছো কখন আসবে, সময় ভুল বলে ফেলেছ",
            icon: "📞"
          }
        },
        {
          en: "I'll get off at Farmgate... I mean, Shahbag",
          bn: "আমি ফার্মগেট নামবো... মানে, শাহবাগ",
          pronunciation_bn: "আইল গেট অফ অ্যাট ফার্মগেট... আই মিন, শাহবাগ",
          slotValues: { "CORRECTION/CLARIFICATION": "Shahbag" },
          topicArea: "transport",
          stage: 2,
          miniStory: {
            situation_bn: "বাসে কন্ডাক্টরকে বলছো কোথায় নামবে, জায়গার নাম ভুল বলেছ",
            icon: "🚌"
          }
        },
        {
          en: "He went yesterday... I mean, day before yesterday",
          bn: "সে গতকাল গিয়েছিল... মানে, পরশু",
          pronunciation_bn: "হি ওয়েন্ট ইয়েস্টারডে... আই মিন, ডে বিফোর ইয়েস্টারডে",
          slotValues: { "CORRECTION/CLARIFICATION": "day before yesterday" },
          topicArea: "daily_life",
          stage: 2
        },
        {
          en: "I'm free on Friday... I mean, I'm free on Saturday",
          bn: "আমি শুক্রবার ফ্রি... মানে, শনিবার ফ্রি",
          pronunciation_bn: "আইম ফ্রি অন ফ্রাইডে... আই মিন, আইম ফ্রি অন স্যাটারডে",
          slotValues: { "CORRECTION/CLARIFICATION": "I'm free on Saturday" },
          topicArea: "social_interaction",
          stage: 2
        },
        {
          en: "The doctor is available at 10 AM... I mean, at 11 AM",
          bn: "ডাক্তার সকাল ১০টায় আছেন... মানে, ১১টায়",
          pronunciation_bn: "দ্য ডক্টর ইজ অ্যাভেইলেবল অ্যাট টেন এএম... আই মিন, অ্যাট ইলেভেন এএম",
          slotValues: { "CORRECTION/CLARIFICATION": "at 11 AM" },
          topicArea: "health",
          stage: 2
        },
        {
          en: "Give me half kilo... I mean, 1 kilo of rice",
          bn: "আমাকে আধা কেজি দাও... মানে, ১ কেজি চাল",
          pronunciation_bn: "গিভ মি হাফ কিলো... আই মিন, ওয়ান কিলো অফ রাইস",
          slotValues: { "CORRECTION/CLARIFICATION": "1 kilo of rice" },
          topicArea: "shopping",
          stage: 2,
          miniStory: {
            situation_bn: "মুদি দোকানে চাল কিনছো, প্রথমে কম বলে ফেলেছ",
            icon: "🛒"
          }
        },
        {
          en: "My salary is 20,000... I mean, 25,000 taka per month",
          bn: "আমার বেতন ২০,০০০... মানে, ২৫,০০০ টাকা মাসে",
          pronunciation_bn: "মাই স্যালারি ইজ টুয়েন্টি থাউজেন্ড... আই মিন, টুয়েন্টি ফাইভ থাউজেন্ড টাকা পার মান্থ",
          slotValues: { "CORRECTION/CLARIFICATION": "25,000 taka per month" },
          topicArea: "finance",
          stage: 3
        },
        {
          en: "I'm busy... I mean, I have three meetings today",
          bn: "আমি ব্যস্ত... মানে, আজ আমার তিনটা মিটিং আছে",
          pronunciation_bn: "আইম বিজি... আই মিন, আই হ্যাভ থ্রি মিটিংস টুডে",
          slotValues: { "CORRECTION/CLARIFICATION": "I have three meetings today" },
          topicArea: "work",
          stage: 3,
          miniStory: {
            situation_bn: "সহকর্মী জিজ্ঞেস করেছে বিকেলে ফ্রি কিনা, তুমি কারণ বলছো",
            icon: "💼"
          }
        },
        {
          en: "He prays five times... I mean, he goes to mosque five times daily",
          bn: "সে পাঁচবার নামাজ পড়ে... মানে, সে প্রতিদিন পাঁচবার মসজিদে যায়",
          pronunciation_bn: "হি প্রেজ ফাইভ টাইমস... আই মিন, হি গোজ টু মস্ক ফাইভ টাইমস ডেইলি",
          slotValues: { "CORRECTION/CLARIFICATION": "he goes to mosque five times daily" },
          topicArea: "religion",
          stage: 3
        },
        {
          en: "It's near... I mean, it's only 10 minutes walk from here",
          bn: "এটা কাছে... মানে, এখান থেকে মাত্র ১০ মিনিট হাঁটা",
          pronunciation_bn: "ইটস নিয়ার... আই মিন, ইটস অনলি টেন মিনিটস ওয়াক ফ্রম হিয়ার",
          slotValues: { "CORRECTION/CLARIFICATION": "it's only 10 minutes walk from here" },
          topicArea: "daily_life",
          stage: 3
        },
        {
          en: "I want the red one... I mean, the blue shirt on the left",
          bn: "আমি লাল টা চাই... মানে, বাম পাশের নীল শার্ট",
          pronunciation_bn: "আই ওয়ান্ট দ্য রেড ওয়ান... আই মিন, দ্য ব্লু শার্ট অন দ্য লেফট",
          slotValues: { "CORRECTION/CLARIFICATION": "the blue shirt on the left" },
          topicArea: "shopping",
          stage: 3,
          miniStory: {
            situation_bn: "কাপড়ের দোকানে শার্ট দেখছো, কোনটা চাও বুঝিয়ে বলছো",
            icon: "👔"
          }
        }
      ]
    },
    {
      id: "H13.2",
      patternName: "Actually (correction)",
      patternName_bn: "আসলে বলে ঠিক করা",
      concept_bn: "আসলে",
      formula: "Actually, [CORRECTION]",
      formula_bn: "আসলে, [সঠিক কথা]",
      formulaPronunciation_bn: "অ্যাকচুয়ালি, [কথা]",
      usageNote: "Use 'actually' when you want to correct what someone else said, or to correct your own previous statement. It's slightly more formal than 'I mean' and often used when the correction is important. You can use it to politely disagree or provide the correct information.",
      usageNote_bn: "কেউ ভুল বললে বা তোমার নিজের আগের কথা ঠিক করতে হলে 'অ্যাকচুয়ালি' ব্যবহার করো। এটা 'আই মিন' থেকে একটু বেশি ফর্মাল এবং সঠিক তথ্য দেওয়ার জন্য ভালো। ভদ্রভাবে দ্বিমত করতে বা সঠিক তথ্য দিতে এটা ব্যবহার করা যায়।",
      difficulty: "intermediate",
      formality: "casual",
      banglaStructureMap: "বাংলা: আসলে, আমি রবিবার ফ্রি → English: Actually, I'm free on Sunday",
      bridgeRuleIds: ["BR1", "BR7"],
      conversionSteps: {
        banglaThought: "আসলে, আমি শনিবার না, রবিবার ফ্রি",
        steps: [
          {
            step_bn: "প্রথমে 'আসলে' দিয়ে শুরু করো",
            result: "Actually"
          },
          {
            step_bn: "কমা দিয়ে সঠিক তথ্য বলো",
            result: "Actually, I'm free"
          },
          {
            step_bn: "শেষে কখন ফ্রি তা যোগ করো",
            result: "Actually, I'm free on Sunday"
          }
        ],
        finalResult: "Actually, I'm free on Sunday",
        finalResult_bn: "আসলে, আমি রবিবার ফ্রি"
      },
      commonMistakes: [
        {
          wrong: "Actual, I'm free",
          correct: "Actually, I'm free",
          explanation_bn: "'অ্যাকচুয়াল' না বলে 'অ্যাকচুয়ালি' বলতে হবে — শেষে 'লি' যোগ করো"
        },
        {
          wrong: "Actually I am free (কমা ছাড়া)",
          correct: "Actually, I am free",
          explanation_bn: "'অ্যাকচুয়ালি' এর পরে সবসময় কমা দাও"
        },
        {
          wrong: "In actually, I'm free",
          correct: "Actually, I'm free",
          explanation_bn: "'ইন অ্যাকচুয়ালি' বলার দরকার নেই — শুধু 'অ্যাকচুয়ালি' যথেষ্ট"
        }
      ],
      simpleRules: [
        {
          rule_bn: "কেউ ভুল বললে ভদ্রভাবে ঠিক করতে 'অ্যাকচুয়ালি' দিয়ে শুরু করো",
          example: "Person A: The shop closes at 8. Person B: Actually, it closes at 9"
        },
        {
          rule_bn: "'অ্যাকচুয়ালি' এর পরে কমা দিয়ে তারপর সঠিক তথ্য",
          example: "Actually, the meeting is tomorrow"
        },
        {
          rule_bn: "নিজের ভুল ঠিক করতেও 'অ্যাকচুয়ালি' ব্যবহার করা যায়",
          example: "I said Monday, but actually, it's Tuesday"
        }
      ],
      usageSituations: [
        {
          situation_bn: "কেউ দোকান বন্ধ হওয়ার সময় ভুল বলেছে",
          situation_en: "Someone said the wrong shop closing time",
          exampleSentence: "Actually, the shop closes at 9 PM, not 8 PM",
          exampleSentence_bn: "আসলে, দোকান ৯টায় বন্ধ হয়, ৮টায় না"
        },
        {
          situation_bn: "সহকর্মী মিটিং এর দিন ভুল বলেছে",
          situation_en: "Colleague mentioned wrong meeting day",
          exampleSentence: "Actually, the meeting is on Wednesday",
          exampleSentence_bn: "আসলে, মিটিং বুধবার"
        },
        {
          situation_bn: "কেউ তোমার নাম ভুল উচ্চারণ করেছে",
          situation_en: "Someone mispronounced your name",
          exampleSentence: "Actually, it's pronounced Rahim, not Raheem",
          exampleSentence_bn: "আসলে, উচ্চারণ রহিম, রাহিম না"
        }
      ],
      sentenceBuilding: [
        {
          previousPatternId: "A1.7",
          previousFormula: "That's [ITEM]",
          previousFormula_bn: "ওটা [জিনিস]",
          combined: "That's 500 taka. Actually, it's 600 taka",
          combined_bn: "ওটা ৫০০ টাকা। আসলে, ৬০০ টাকা"
        },
        {
          previousPatternId: "C14.1",
          previousFormula: "I think [OPINION]",
          previousFormula_bn: "আমি মনে করি [মতামত]",
          combined: "I think it's open. Actually, it's closed today",
          combined_bn: "আমি মনে করি খোলা আছে। আসলে, আজ বন্ধ"
        }
      ],
      memoryTrick_bn: "বাংলায় যেমন 'আসলে তো' বলে সঠিক তথ্য দেই, ইংরেজিতেও 'অ্যাকচুয়ালি' বলে ঠিক করো",
      chunks: [
        {
          en: "Actually",
          bn: "আসলে / প্রকৃতপক্ষে",
          pronunciation_bn: "অ্যাকচুয়ালি"
        },
        {
          en: "Actually, no",
          bn: "আসলে, না",
          pronunciation_bn: "অ্যাকচুয়ালি, নো"
        },
        {
          en: "Actually, that's not right",
          bn: "আসলে, ওটা ঠিক না",
          pronunciation_bn: "অ্যাকচুয়ালি, দ্যাটস নট রাইট"
        }
      ],
      wordMap: {
        bn_sentence: "আসলে, আমি রবিবার ফ্রি",
        en_sentence: "Actually, I'm free on Sunday",
        mappings: [
          { bn_word: "আসলে", en_word: "Actually", type: "direct", bridgeRuleId: "BR1" },
          { bn_word: "আমি", en_word: "I", type: "direct", bridgeRuleId: "BR1" },
          { bn_word: "ফ্রি", en_word: "free", type: "direct" },
          { bn_word: "রবিবার", en_word: "on Sunday", type: "split", bridgeRuleId: "BR7" }
        ]
      },
      answerTemplates: [
        {
          situation_bn: "কেউ যদি তোমার সংশোধন মেনে নেয়",
          question: "How do you respond when someone accepts your correction?",
          question_bn: "কেউ তোমার সংশোধন মানলে কী বলবে?",
          answerFormula: "Oh, thanks for correcting me / Good to know",
          answerFormula_bn: "ও, ঠিক করার জন্য ধন্যবাদ / জেনে ভালো লাগলো",
          pronunciation_bn: "ও, থ্যাংকস ফর কারেক্টিং মি / গুড টু নো",
          examples: [
            {
              answer: "Oh, thanks for letting me know",
              answer_bn: "ও, জানানোর জন্য ধন্যবাদ",
              pronunciation_bn: "ও, থ্যাংকস ফর লেটিং মি নো"
            },
            {
              answer: "Good to know, thanks",
              answer_bn: "জেনে ভালো লাগলো, ধন্যবাদ",
              pronunciation_bn: "গুড টু নো, থ্যাংকস"
            },
            {
              answer: "Oh okay, I didn't know that",
              answer_bn: "ও আচ্ছা, আমি জানতাম না",
              pronunciation_bn: "ও ওকে, আই ডিডন্ট নো দ্যাট"
            }
          ]
        },
        {
          situation_bn: "কেউ যদি তোমাকে সংশোধন করে",
          question: "Someone corrects you with 'actually'",
          question_bn: "কেউ তোমাকে 'অ্যাকচুয়ালি' বলে ঠিক করলে",
          answerFormula: "Oh, sorry / My mistake / Thanks for correcting",
          answerFormula_bn: "ও, দুঃখিত / আমার ভুল / ঠিক করার জন্য ধন্যবাদ",
          pronunciation_bn: "ও, সরি / মাই মিসটেক / থ্যাংকস ফর কারেক্টিং",
          examples: [
            {
              answer: "Oh, sorry, my mistake",
              answer_bn: "ও, সরি, আমার ভুল",
              pronunciation_bn: "ও, সরি, মাই মিসটেক"
            },
            {
              answer: "Thanks for correcting me",
              answer_bn: "ঠিক করার জন্য ধন্যবাদ",
              pronunciation_bn: "থ্যাংকস ফর কারেক্টিং মি"
            },
            {
              answer: "Oh, I see. Thanks",
              answer_bn: "ও, বুঝেছি। ধন্যবাদ",
              pronunciation_bn: "ও, আই সি। থ্যাংকস"
            }
          ]
        },
        {
          situation_bn: "দোকানদার যদি সময় সংশোধন করে",
          question: "Shopkeeper corrects the opening time",
          question_bn: "দোকানদার খোলার সময় ঠিক করলে",
          answerFormula: "Okay, I'll come at [CORRECT TIME] then",
          answerFormula_bn: "আচ্ছা, তাহলে [সঠিক সময়] এ আসবো",
          pronunciation_bn: "ওকে, আইল কাম অ্যাট [টাইম] দেন",
          examples: [
            {
              answer: "Okay, I'll come at 9 AM then",
              answer_bn: "আচ্ছা, তাহলে সকাল ৯টায় আসবো",
              pronunciation_bn: "ওকে, আইল কাম অ্যাট নাইন এএম দেন"
            },
            {
              answer: "Got it, see you at 10",
              answer_bn: "বুঝেছি, ১০টায় দেখা হবে",
              pronunciation_bn: "গট ইট, সি ইউ অ্যাট টেন"
            },
            {
              answer: "Alright, I'll be there at 8:30",
              answer_bn: "ঠিক আছে, সাড়ে ৮টায় থাকবো",
              pronunciation_bn: "অলরাইট, আইল বি দেয়ার অ্যাট এইট থার্টি"
            }
          ]
        }
      ],
      variations: [
        {
          variant: "polite_disagreement",
          label: "Polite disagreement",
          label_bn: "ভদ্রভাবে দ্বিমত",
          formula: "Actually, I think [DIFFERENT OPINION]",
          formula_bn: "আসলে, আমি মনে করি [অন্য মতামত]",
          examples: [
            {
              en: "Actually, I think the shop is closed today",
              bn: "আসলে, আমি মনে করি দোকান আজ বন্ধ",
              pronunciation_bn: "অ্যাকচুয়ালি, আই থিংক দ্য শপ ইজ ক্লোজড টুডে",
              slotValues: { OPINION: "the shop is closed today" },
              stage: 2
            },
            {
              en: "Actually, I think we should wait",
              bn: "আসলে, আমি মনে করি আমাদের অপেক্ষা করা উচিত",
              pronunciation_bn: "অ্যাকচুয়ালি, আই থিংক উই শুড ওয়েট",
              slotValues: { OPINION: "we should wait" },
              stage: 3
            },
            {
              en: "Actually, I think biryani is better",
              bn: "আসলে, আমি মনে করি বিরিয়ানি ভালো",
              pronunciation_bn: "অ্যাকচুয়ালি, আই থিংক বিরিয়ানি ইজ বেটার",
              slotValues: { OPINION: "biryani is better" },
              stage: 1
            }
          ]
        },
        {
          variant: "correcting_time",
          label: "Correcting time/date",
          label_bn: "সময়/তারিখ ঠিক করা",
          formula: "Actually, it's [CORRECT TIME/DATE]",
          formula_bn: "আসলে, [সঠিক সময়/তারিখ]",
          examples: [
            {
              en: "Actually, it's 3 PM now",
              bn: "আসলে, এখন বিকেল ৩টা",
              pronunciation_bn: "অ্যাকচুয়ালি, ইটস থ্রি পিএম নাউ",
              slotValues: { TIME: "3 PM" },
              stage: 1
            },
            {
              en: "Actually, the meeting is tomorrow, not today",
              bn: "আসলে, মিটিং কাল, আজ না",
              pronunciation_bn: "অ্যাকচুয়ালি, দ্য মিটিং ইজ টুমরো, নট টুডে",
              slotValues: { DATE: "tomorrow" },
              stage: 2
            },
            {
              en: "Actually, Friday is a holiday here",
              bn: "আসলে, শুক্রবার এখানে ছুটি",
              pronunciation_bn: "অ্যাকচুয়ালি, ফ্রাইডে ইজ এ হলিডে হিয়ার",
              slotValues: { DATE: "Friday" },
              stage: 2
            }
          ]
        },
        {
          variant: "correcting_location",
          label: "Correcting place/location",
          label_bn: "জায়গা ঠিক করা",
          formula: "Actually, it's in/at [CORRECT LOCATION]",
          formula_bn: "আসলে, [সঠিক জায়গা] তে",
          examples: [
            {
              en: "Actually, it's in Dhanmondi, not Gulshan",
              bn: "আসলে, এটা ধানমন্ডিতে, গুলশানে না",
              pronunciation_bn: "অ্যাকচুয়ালি, ইটস ইন ধানমন্ডি, নট গুলশান",
              slotValues: { LOCATION: "Dhanmondi" },
              stage: 2
            },
            {
              en: "Actually, the pharmacy is next to the mosque",
              bn: "আসলে, ফার্মেসি মসজিদের পাশে",
              pronunciation_bn: "অ্যাকচুয়ালি, দ্য ফার্মেসি ইজ নেক্সট টু দ্য মস্ক",
              slotValues: { LOCATION: "next to the mosque" },
              stage: 3
            },
            {
              en: "Actually, his office is on the 5th floor",
              bn: "আসলে, তার অফিস ৫ তলায়",
              pronunciation_bn: "অ্যাকচুয়ালি, হিজ অফিস ইজ অন দ্য ফিফথ ফ্লোর",
              slotValues: { LOCATION: "on the 5th floor" },
              stage: 3
            }
          ]
        }
      ],
      dialogueChains: [
        {
          id: "H13.2-dialogue-1",
          title_bn: "অফিসে মিটিং এর সময় নিয়ে আলোচনা",
          title_en: "Office meeting time discussion",
          situation_bn: "নতুন সহকর্মী মিটিং এর সময় ভুল বলেছে, তুমি ঠিক করে দিচ্ছো",
          icon: "💼",
          turns: [
            {
              speaker_bn: "নতুন সহকর্মী",
              en: "The weekly meeting is on Friday, right?",
              bn: "সাপ্তাহিক মিটিং শুক্রবার, তাই না?",
              pronunciation_bn: "দ্য উইকলি মিটিং ইজ অন ফ্রাইডে, রাইট?",
              patternId: "G2.23"
            },
            {
              speaker_bn: "তুমি",
              en: "Actually, it's on Thursday at 3 PM",
              bn: "আসলে, এটা বৃহস্পতিবার বিকেল ৩টায়",
              pronunciation_bn: "অ্যাকচুয়ালি, ইটস অন থার্সডে অ্যাট থ্রি পিএম",
              patternId: "H13.2"
            },
            {
              speaker_bn: "নতুন সহকর্মী",
              en: "Oh, thanks for correcting me. And where is the meeting room?",
              bn: "ও, ঠিক করার জন্য ধন্যবাদ। আর মিটিং রুম কোথায়?",
              pronunciation_bn: "ও, থ্যাংকস ফর কারেক্টিং মি। অ্যান্ড হোয়্যার ইজ দ্য মিটিং রুম?",
              patternId: "G2.2"
            },
            {
              speaker_bn: "তুমি",
              en: "Actually, we use the conference room on the 3rd floor",
              bn: "আসলে, আমরা ৩য় তলার কনফারেন্স রুম ব্যবহার করি",
              pronunciation_bn: "অ্যাকচুয়ালি, উই ইউজ দ্য কনফারেন্স রুম অন দ্য থার্ড ফ্লোর",
              patternId: "H13.2"
            },
            {
              speaker_bn: "নতুন সহকর্মী",
              en: "Got it, I'll be there on Thursday at 3",
              bn: "বুঝেছি, আমি বৃহস্পতিবার ৩টায় থাকবো",
              pronunciation_bn: "গট ইট, আইল বি দেয়ার অন থার্সডে অ্যাট থ্রি",
              patternId: "A1.1"
            }
          ],
          patternsUsed: ["G2.23", "H13.2", "G2.2", "A1.1"]
        }
      ],
      slots: [
        {
          name: "CORRECTION",
          description: "The correct information you want to provide",
          description_bn: "যে সঠিক তথ্য তুমি দিতে চাও",
          acceptedTypes: ["statement", "fact", "time", "place", "opinion"],
          examples: [
            "I'm free on Sunday",
            "the shop closes at 9",
            "it's in Dhanmondi",
            "the meeting is tomorrow",
            "that's 500 taka"
          ]
        }
      ],
      examples: [
        {
          en: "Actually, I'm free on Sunday",
          bn: "আসলে, আমি রবিবার ফ্রি",
          pronunciation_bn: "অ্যাকচুয়ালি, আইম ফ্রি অন সান্ডে",
          slotValues: { CORRECTION: "I'm free on Sunday" },
          topicArea: "social_interaction",
          stage: 1,
          miniStory: {
            situation_bn: "বন্ধু জিজ্ঞেস করেছে শনিবার ফ্রি কিনা, তুমি ঠিক করে দিচ্ছো",
            icon: "📅"
          }
        },
        {
          en: "Actually, the shop closes at 9 PM",
          bn: "আসলে, দোকান রাত ৯টায় বন্ধ হয়",
          pronunciation_bn: "অ্যাকচুয়ালি, দ্য শপ ক্লোজেস অ্যাট নাইন পিএম",
          slotValues: { CORRECTION: "the shop closes at 9 PM" },
          topicArea: "shopping",
          stage: 1
        },
        {
          en: "Actually, it's 500 taka, not 400",
          bn: "আসলে, এটা ৫০০ টাকা, ৪০০ না",
          pronunciation_bn: "অ্যাকচুয়ালি, ইটস ফাইভ হান্ড্রেড টাকা, নট ফোর হান্ড্রেড",
          slotValues: { CORRECTION: "it's 500 taka, not 400" },
          topicArea: "shopping",
          stage: 1
        },
        {
          en: "Actually, the doctor is available at 11 AM",
          bn: "আসলে, ডাক্তার সকাল ১১টায় আছেন",
          pronunciation_bn: "অ্যাকচুয়ালি, দ্য ডক্টর ইজ অ্যাভেইলেবল অ্যাট ইলেভেন এএম",
          slotValues: { CORRECTION: "the doctor is available at 11 AM" },
          topicArea: "health",
          stage: 1
        },
        {
          en: "Actually, the bus goes to Uttara, not Mirpur",
          bn: "আসলে, বাস উত্তরা যায়, মিরপুর না",
          pronunciation_bn: "অ্যাকচুয়ালি, দ্য বাস গোজ টু উত্তরা, নট মিরপুর",
          slotValues: { CORRECTION: "the bus goes to Uttara, not Mirpur" },
          topicArea: "transport",
          stage: 2,
          miniStory: {
            situation_bn: "বাস স্ট্যান্ডে কেউ ভুল তথ্য দিচ্ছে, তুমি ঠিক করে দিচ্ছো",
            icon: "🚌"
          }
        },
        {
          en: "Actually, Friday is a public holiday",
          bn: "আসলে, শুক্রবার সরকারি ছুটি",
          pronunciation_bn: "অ্যাকচুয়ালি, ফ্রাইডে ইজ এ পাবলিক হলিডে",
          slotValues: { CORRECTION: "Friday is a public holiday" },
          topicArea: "work",
          stage: 2
        },
        {
          en: "Actually, I work at a garments factory",
          bn: "আসলে, আমি গার্মেন্টস ফ্যাক্টরিতে কাজ করি",
          pronunciation_bn: "অ্যাকচুয়ালি, আই ওয়ার্ক অ্যাট এ গার্মেন্টস ফ্যাক্টরি",
          slotValues: { CORRECTION: "I work at a garments factory" },
          topicArea: "work",
          stage: 2
        },
        {
          en: "Actually, that's not halal",
          bn: "আসলে, ওটা হালাল না",
          pronunciation_bn: "অ্যাকচুয়ালি, দ্যাটস নট হালাল",
          slotValues: { CORRECTION: "that's not halal" },
          topicArea: "religion",
          stage: 2,
          miniStory: {
            situation_bn: "রেস্তোরাঁয় কেউ ভুল মেনু দেখাচ্ছে, তুমি বলছো",
            icon: "🍽️"
          }
        },
        {
          en: "Actually, we need to pay 10% advance",
          bn: "আসলে, আমাদের ১০% অগ্রিম দিতে হবে",
          pronunciation_bn: "অ্যাকচুয়ালি, উই নিড টু পে টেন পার্সেন্ট অ্যাডভান্স",
          slotValues: { CORRECTION: "we need to pay 10% advance" },
          topicArea: "finance",
          stage: 3
        },
        {
          en: "Actually, the exam is next Monday, not this Monday",
          bn: "আসলে, পরীক্ষা আগামী সোমবার, এই সোমবার না",
          pronunciation_bn: "অ্যাকচুয়ালি, দি এক্সাম ইজ নেক্সট মান্ডে, নট দিস মান্ডে",
          slotValues: { CORRECTION: "the exam is next Monday, not this Monday" },
          topicArea: "education",
          stage: 3,
          miniStory: {
            situation_bn: "ক্লাসে সহপাঠী পরীক্ষার তারিখ ভুল বলেছে, তুমি ঠিক করছো",
            icon: "📚"
          }
        },
        {
          en: "Actually, his name is Karim, not Rahim",
          bn: "আসলে, তার নাম করিম, রহিম না",
          pronunciation_bn: "অ্যাকচুয়ালি, হিজ নেম ইজ করিম, নট রহিম",
          slotValues: { CORRECTION: "his name is Karim, not Rahim" },
          topicArea: "social_interaction",
          stage: 2
        },
        {
          en: "Actually, biryani here is better than pulao",
          bn: "আসলে, এখানে বিরিয়ানি পোলাও থেকে ভালো",
          pronunciation_bn: "অ্যাকচুয়ালি, বিরিয়ানি হিয়ার ইজ বেটার দ্যান পোলাও",
          slotValues: { CORRECTION: "biryani here is better than pulao" },
          topicArea: "food",
          stage: 3
        },
        {
          en: "Actually, the pharmacy is next to the mosque, not the school",
          bn: "আসলে, ফার্মেসি মসজিদের পাশে, স্কুলের পাশে না",
          pronunciation_bn: "অ্যাকচুয়ালি, দ্য ফার্মেসি ইজ নেক্সট টু দ্য মস্ক, নট দ্য স্কুল",
          slotValues: { CORRECTION: "the pharmacy is next to the mosque, not the school" },
          topicArea: "daily_life",
          stage: 3
        },
        {
          en: "Actually, I prefer tea without sugar",
          bn: "আসলে, আমি চিনি ছাড়া চা পছন্দ করি",
          pronunciation_bn: "অ্যাকচুয়ালি, আই প্রিফার টি উইদাউট সুগার",
          slotValues: { CORRECTION: "I prefer tea without sugar" },
          topicArea: "food",
          stage: 2
        },
        {
          en: "Actually, the rickshaw fare is 30 taka, not 50",
          bn: "আসলে, রিকশা ভাড়া ৩০ টাকা, ৫০ না",
          pronunciation_bn: "অ্যাকচুয়ালি, দ্য রিকশা ফেয়ার ইজ থার্টি টাকা, নট ফিফটি",
          slotValues: { CORRECTION: "the rickshaw fare is 30 taka, not 50" },
          topicArea: "transport",
          stage: 2,
          miniStory: {
            situation_bn: "রিকশাওয়ালা বেশি ভাড়া চাইছে, তুমি সঠিক ভাড়া বলছো",
            icon: "🛺"
          }
        }
      ]
    },
    {
      id: "H13.3",
      patternName: "Wait, no",
      patternName_bn: "থামো না / না না বলা",
      concept_bn: "না না",
      formula: "Wait, no — [CORRECTION]",
      formula_bn: "থামো, না — [সঠিক কথা]",
      formulaPronunciation_bn: "ওয়েট, নো — [কথা]",
      usageNote: "Use 'Wait, no' when you realize you made a mistake immediately and want to correct it right away. It's very casual and shows you caught your own error. The dash (—) shows you're stopping yourself and starting over. It's common in fast, natural conversation.",
      usageNote_bn: "যখন বলার সাথে সাথেই বুঝতে পারো ভুল হয়ে গেছে এবং এক্ষুণি ঠিক করতে চাও তখন 'ওয়েট, নো' ব্যবহার করো। এটা খুবই নৈমিত্তিক এবং দেখায় যে তুমি নিজেই ভুল ধরে ফেলেছ। এটা দ্রুত স্বাভাবিক কথাবার্তায় খুব সাধারণ।",
      difficulty: "intermediate",
      formality: "casual",
      banglaStructureMap: "বাংলা: থামো, না — সোমবার না, মঙ্গলবার → English: Wait, no — not Monday, Tuesday",
      bridgeRuleIds: ["BR1", "BR7"],
      conversionSteps: {
        banglaThought: "সোমবার... থামো না, মঙ্গলবার",
        steps: [
          {
            step_bn: "প্রথমে 'ওয়েট, নো' বলে নিজেকে থামাও",
            result: "Wait, no"
          },
          {
            step_bn: "ড্যাশ (—) দিয়ে ভুল কথা বাতিল করো",
            result: "Wait, no —"
          },
          {
            step_bn: "তারপর সঠিক কথা বলো",
            result: "Wait, no — not Monday, Tuesday"
          }
        ],
        finalResult: "Wait, no — not Monday, Tuesday",
        finalResult_bn: "থামো, না — সোমবার না, মঙ্গলবার"
      },
      commonMistakes: [
        {
          wrong: "Wait no (কমা ছাড়া)",
          correct: "Wait, no",
          explanation_bn: "'ওয়েট' এর পরে সবসময় কমা দিতে হবে"
        },
        {
          wrong: "Wait, no, Tuesday (ড্যাশ ছাড়া)",
          correct: "Wait, no — Tuesday",
          explanation_bn: "'নো' এর পরে ড্যাশ (—) দিয়ে তারপর সঠিক কথা — দ্বিতীয় কমা নয়"
        },
        {
          wrong: "Wait, not Monday",
          correct: "Wait, no — not Monday",
          explanation_bn: "'ওয়েট' এর পরে 'নো' বলতে হবে, তবেই ড্যাশ এবং সঠিক কথা"
        }
      ],
      simpleRules: [
        {
          rule_bn: "যখন বলার সাথে সাথেই ভুল বুঝতে পারো তখন 'ওয়েট, নো' বলে থামো",
          example: "I need 3... wait, no — 4 books"
        },
        {
          rule_bn: "'ওয়েট' এর পরে কমা, 'নো' এর পরে ড্যাশ (—) দাও",
          example: "It's Monday... wait, no — Tuesday"
        },
        {
          rule_bn: "এটা খুব নৈমিত্তিক — বন্ধুদের সাথে বা অনানুষ্ঠানিক কথায় ভালো",
          example: "Give me tea... wait, no — coffee please"
        }
      ],
      usageSituations: [
        {
          situation_bn: "রেস্তোরাঁয় অর্ডার দিচ্ছো, হঠাৎ মন বদলালো",
          situation_en: "Ordering at restaurant, suddenly changed your mind",
          exampleSentence: "I want tea... wait, no — coffee, please",
          exampleSentence_bn: "আমি চা চাই... থামো, না — কফি দাও প্লিজ"
        },
        {
          situation_bn: "দোকানে পরিমাণ বলতে গিয়ে ভুল হচ্ছে",
          situation_en: "Saying the wrong quantity at shop",
          exampleSentence: "Give me 2 kilos... wait, no — 3 kilos",
          exampleSentence_bn: "আমাকে ২ কেজি দাও... থামো, না — ৩ কেজি"
        },
        {
          situation_bn: "বাসে ভুল জায়গা বলে ফেলছো",
          situation_en: "Mentioning wrong bus stop",
          exampleSentence: "I'll get off at Farmgate... wait, no — Shahbag",
          exampleSentence_bn: "আমি ফার্মগেট নামবো... থামো, না — শাহবাগ"
        }
      ],
      sentenceBuilding: [
        {
          previousPatternId: "A1.1",
          previousFormula: "I want [ITEM]",
          previousFormula_bn: "আমি [জিনিস] চাই",
          combined: "I want rice... wait, no — ruti",
          combined_bn: "আমি ভাত চাই... থামো, না — রুটি"
        },
        {
          previousPatternId: "A1.2",
          previousFormula: "I need [ITEM]",
          previousFormula_bn: "আমি [জিনিস] দরকার",
          combined: "I need 500 taka... wait, no — 1000 taka",
          combined_bn: "আমার ৫০০ টাকা দরকার... থামো, না — ১০০০ টাকা"
        }
      ],
      memoryTrick_bn: "বাংলায় যেমন হঠাৎ 'না না' বলে থামিয়ে ঠিক করি, ইংরেজিতে 'ওয়েট, নো' বলো",
      chunks: [
        {
          en: "Wait, no",
          bn: "থামো, না / দাঁড়াও, না",
          pronunciation_bn: "ওয়েট, নো"
        },
        {
          en: "Wait, no — not that",
          bn: "থামো, না — ওটা না",
          pronunciation_bn: "ওয়েট, নো — নট দ্যাট"
        },
        {
          en: "Wait, hold on",
          bn: "থামো, একটু দাঁড়াও",
          pronunciation_bn: "ওয়েট, হোল্ড অন"
        }
      ],
      wordMap: {
        bn_sentence: "থামো, না — সোমবার না, মঙ্গলবার",
        en_sentence: "Wait, no — not Monday, Tuesday",
        mappings: [
          { bn_word: "থামো", en_word: "Wait", type: "direct", bridgeRuleId: "BR1" },
          { bn_word: "না", en_word: "no", type: "direct" },
          { bn_word: "সোমবার না", en_word: "not Monday", type: "direct", bridgeRuleId: "BR7" },
          { bn_word: "মঙ্গলবার", en_word: "Tuesday", type: "direct" }
        ]
      },
      answerTemplates: [
        {
          situation_bn: "কেউ যদি হঠাৎ নিজেকে থামিয়ে ঠিক করে",
          question: "How do you respond when someone corrects themselves quickly?",
          question_bn: "কেউ হঠাৎ নিজেকে ঠিক করলে কী বলবে?",
          answerFormula: "Okay / No problem / Got it",
          answerFormula_bn: "আচ্ছা / সমস্যা নেই / বুঝেছি",
          pronunciation_bn: "ওকে / নো প্রবলেম / গট ইট",
          examples: [
            {
              answer: "Okay, Tuesday then",
              answer_bn: "আচ্ছা, তাহলে মঙ্গলবার",
              pronunciation_bn: "ওকে, টিউজডে দেন"
            },
            {
              answer: "No problem, 3 kilos",
              answer_bn: "সমস্যা নেই, ৩ কেজি",
              pronunciation_bn: "নো প্রবলেম, থ্রি কিলোস"
            },
            {
              answer: "Got it, coffee it is",
              answer_bn: "বুঝেছি, তাহলে কফি",
              pronunciation_bn: "গট ইট, কফি ইট ইজ"
            }
          ]
        },
        {
          situation_bn: "রেস্তোরাঁর ওয়েটার যদি অর্ডার নিশ্চিত করে",
          question: "Waiter confirms your corrected order",
          question_bn: "ওয়েটার তোমার ঠিক করা অর্ডার নিশ্চিত করলে",
          answerFormula: "Yes, [ITEM] please / That's right",
          answerFormula_bn: "হ্যাঁ, [জিনিস] দাও প্লিজ / ঠিক আছে",
          pronunciation_bn: "ইয়েস, [আইটেম] প্লিজ / দ্যাটস রাইট",
          examples: [
            {
              answer: "Yes, coffee please",
              answer_bn: "হ্যাঁ, কফি দাও প্লিজ",
              pronunciation_bn: "ইয়েস, কফি প্লিজ"
            },
            {
              answer: "That's right, biryani",
              answer_bn: "ঠিক আছে, বিরিয়ানি",
              pronunciation_bn: "দ্যাটস রাইট, বিরিয়ানি"
            },
            {
              answer: "Yes, make it 2 plates",
              answer_bn: "হ্যাঁ, ২ প্লেট করো",
              pronunciation_bn: "ইয়েস, মেক ইট টু প্লেটস"
            }
          ]
        },
        {
          situation_bn: "দোকানদার যদি পরিমাণ নিশ্চিত করে",
          question: "Shopkeeper confirms the corrected quantity",
          question_bn: "দোকানদার ঠিক করা পরিমাণ নিশ্চিত করলে",
          answerFormula: "Yes, [QUANTITY] / Exactly",
          answerFormula_bn: "হ্যাঁ, [পরিমাণ] / ঠিক",
          pronunciation_bn: "ইয়েস, [কোয়ান্টিটি] / এক্স্যাক্টলি",
          examples: [
            {
              answer: "Yes, 3 kilos total",
              answer_bn: "হ্যাঁ, মোট ৩ কেজি",
              pronunciation_bn: "ইয়েস, থ্রি কিলোস টোটাল"
            },
            {
              answer: "Exactly, 1000 taka",
              answer_bn: "ঠিক, ১০০০ টাকা",
              pronunciation_bn: "এক্স্যাক্টলি, ওয়ান থাউজেন্ড টাকা"
            },
            {
              answer: "Yes, 5 pieces please",
              answer_bn: "হ্যাঁ, ৫টা দাও প্লিজ",
              pronunciation_bn: "ইয়েস, ফাইভ পিসেস প্লিজ"
            }
          ]
        }
      ],
      variations: [
        {
          variant: "quick_number_change",
          label: "Quick number correction",
          label_bn: "হঠাৎ সংখ্যা ঠিক করা",
          formula: "Wait, no — [CORRECT NUMBER]",
          formula_bn: "থামো, না — [সঠিক সংখ্যা]",
          examples: [
            {
              en: "I need 2... wait, no — 3 tickets",
              bn: "আমার ২টা... থামো, না — ৩টা টিকিট দরকার",
              pronunciation_bn: "আই নিড টু... ওয়েট, নো — থ্রি টিকিটস",
              slotValues: { NUMBER: "3 tickets" },
              stage: 1
            },
            {
              en: "Give me 500... wait, no — 1000 taka",
              bn: "আমাকে ৫০০... থামো, না — ১০০০ টাকা দাও",
              pronunciation_bn: "গিভ মি ফাইভ হান্ড্রেড... ওয়েট, নো — ওয়ান থাউজেন্ড টাকা",
              slotValues: { NUMBER: "1000 taka" },
              stage: 1
            },
            {
              en: "It costs 300... wait, no — 350 taka",
              bn: "এটা ৩০০... থামো, না — ৩৫০ টাকা",
              pronunciation_bn: "ইট কস্টস থ্রি হান্ড্রেড... ওয়েট, নো — থ্রি ফিফটি টাকা",
              slotValues: { NUMBER: "350 taka" },
              stage: 2
            }
          ]
        },
        {
          variant: "item_replacement",
          label: "Changing item/choice",
          label_bn: "জিনিস/পছন্দ বদলানো",
          formula: "Wait, no — [DIFFERENT ITEM]",
          formula_bn: "থামো, না — [অন্য জিনিস]",
          examples: [
            {
              en: "I want tea... wait, no — coffee",
              bn: "আমি চা চাই... থামো, না — কফি",
              pronunciation_bn: "আই ওয়ান্ট টি... ওয়েট, নো — কফি",
              slotValues: { ITEM: "coffee" },
              stage: 1
            },
            {
              en: "Give me rice... wait, no — ruti please",
              bn: "আমাকে ভাত দাও... থামো, না — রুটি দাও প্লিজ",
              pronunciation_bn: "গিভ মি রাইস... ওয়েট, নো — রুটি প্লিজ",
              slotValues: { ITEM: "ruti" },
              stage: 1
            },
            {
              en: "I'll take the red one... wait, no — the blue one",
              bn: "আমি লাল টা নেবো... থামো, না — নীল টা",
              pronunciation_bn: "আইল টেক দ্য রেড ওয়ান... ওয়েট, নো — দ্য ব্লু ওয়ান",
              slotValues: { ITEM: "the blue one" },
              stage: 2
            }
          ]
        },
        {
          variant: "day_time_change",
          label: "Quick day/time change",
          label_bn: "হঠাৎ দিন/সময় বদলানো",
          formula: "Wait, no — [CORRECT DAY/TIME]",
          formula_bn: "থামো, না — [সঠিক দিন/সময়]",
          examples: [
            {
              en: "Come on Monday... wait, no — Tuesday",
              bn: "সোমবার এসো... থামো, না — মঙ্গলবার",
              pronunciation_bn: "কাম অন মান্ডে... ওয়েট, নো — টিউজডে",
              slotValues: { DAY: "Tuesday" },
              stage: 2
            },
            {
              en: "At 3 PM... wait, no — at 4 PM",
              bn: "বিকেল ৩টায়... থামো, না — ৪টায়",
              pronunciation_bn: "অ্যাট থ্রি পিএম... ওয়েট, নো — অ্যাট ফোর পিএম",
              slotValues: { TIME: "at 4 PM" },
              stage: 2
            },
            {
              en: "Tomorrow morning... wait, no — tomorrow evening",
              bn: "কাল সকালে... থামো, না — কাল সন্ধ্যায়",
              pronunciation_bn: "টুমরো মর্নিং... ওয়েট, নো — টুমরো ইভনিং",
              slotValues: { TIME: "tomorrow evening" },
              stage: 3
            }
          ]
        }
      ],
      dialogueChains: [
        {
          id: "H13.3-dialogue-1",
          title_bn: "চায়ের দোকানে অর্ডার বদলানো",
          title_en: "Changing order at tea stall",
          situation_bn: "চায়ের দোকানে অর্ডার দিচ্ছো, হঠাৎ মন বদলে যাচ্ছে",
          icon: "☕",
          turns: [
            {
              speaker_bn: "দোকানদার",
              en: "What do you want?",
              bn: "কী লাগবে?",
              pronunciation_bn: "হোয়াট ডু ইউ ওয়ান্ট?",
              patternId: "G2.1"
            },
            {
              speaker_bn: "তুমি",
              en: "I want tea... wait, no — coffee, please",
              bn: "আমি চা চাই... থামো, না — কফি দাও প্লিজ",
              pronunciation_bn: "আই ওয়ান্ট টি... ওয়েট, নো — কফি, প্লিজ",
              patternId: "H13.3"
            },
            {
              speaker_bn: "দোকানদার",
              en: "Okay, coffee. With sugar?",
              bn: "আচ্ছা, কফি। চিনি দিয়ে?",
              pronunciation_bn: "ওকে, কফি। উইথ সুগার?",
              patternId: "G2.23"
            },
            {
              speaker_bn: "তুমি",
              en: "Yes... wait, no — without sugar",
              bn: "হ্যাঁ... থামো, না — চিনি ছাড়া",
              pronunciation_bn: "ইয়েস... ওয়েট, নো — উইদাউট সুগার",
              patternId: "H13.3"
            },
            {
              speaker_bn: "দোকানদার",
              en: "Got it. Coffee without sugar. 20 taka",
              bn: "বুঝেছি। চিনি ছাড়া কফি। ২০ টাকা",
              pronunciation_bn: "গট ইট। কফি উইদাউট সুগার। টুয়েন্টি টাকা",
              patternId: "A1.7"
            }
          ],
          patternsUsed: ["G2.1", "H13.3", "G2.23", "A1.7"]
        }
      ],
      slots: [
        {
          name: "CORRECTION",
          description: "The correct information you realized immediately after speaking",
          description_bn: "বলার সাথে সাথে যে সঠিক কথা তোমার মনে পড়েছে",
          acceptedTypes: ["any replacement", "number", "item", "time", "place"],
          examples: [
            "not Monday, Tuesday",
            "3 kilos",
            "coffee",
            "at 4 PM",
            "Shahbag"
          ]
        }
      ],
      examples: [
        {
          en: "I want tea... wait, no — coffee",
          bn: "আমি চা চাই... থামো, না — কফি",
          pronunciation_bn: "আই ওয়ান্ট টি... ওয়েট, নো — কফি",
          slotValues: { CORRECTION: "coffee" },
          topicArea: "food",
          stage: 1,
          miniStory: {
            situation_bn: "চায়ের দোকানে অর্ডার দিচ্ছো, হঠাৎ মনে পড়লো কফি খেতে চাও",
            icon: "☕"
          }
        },
        {
          en: "Give me 2 kilos... wait, no — 3 kilos",
          bn: "আমাকে ২ কেজি দাও... থামো, না — ৩ কেজি",
          pronunciation_bn: "গিভ মি টু কিলোস... ওয়েট, নো — থ্রি কিলোস",
          slotValues: { CORRECTION: "3 kilos" },
          topicArea: "shopping",
          stage: 1
        },
        {
          en: "Come on Monday... wait, no — Tuesday",
          bn: "সোমবার এসো... থামো, না — মঙ্গলবার",
          pronunciation_bn: "কাম অন মান্ডে... ওয়েট, নো — টিউজডে",
          slotValues: { CORRECTION: "Tuesday" },
          topicArea: "social_interaction",
          stage: 1
        },
        {
          en: "I'll get off at Farmgate... wait, no — Shahbag",
          bn: "আমি ফার্মগেট নামবো... থামো, না — শাহবাগ",
          pronunciation_bn: "আইল গেট অফ অ্যাট ফার্মগেট... ওয়েট, নো — শাহবাগ",
          slotValues: { CORRECTION: "Shahbag" },
          topicArea: "transport",
          stage: 1
        },
        {
          en: "I need 500 taka... wait, no — 1000 taka",
          bn: "আমার ৫০০ টাকা দরকার... থামো, না — ১০০০ টাকা",
          pronunciation_bn: "আই নিড ফাইভ হান্ড্রেড টাকা... ওয়েট, নো — ওয়ান থাউজেন্ড টাকা",
          slotValues: { CORRECTION: "1000 taka" },
          topicArea: "finance",
          stage: 1,
          miniStory: {
            situation_bn: "বন্ধুকে টাকা ধার চাইছো, হঠাৎ মনে পড়লো বেশি লাগবে",
            icon: "💰"
          }
        },
        {
          en: "Give me rice... wait, no — ruti please",
          bn: "আমাকে ভাত দাও... থামো, না — রুটি দাও প্লিজ",
          pronunciation_bn: "গিভ মি রাইস... ওয়েট, নো — রুটি প্লিজ",
          slotValues: { CORRECTION: "ruti please" },
          topicArea: "food",
          stage: 2,
          miniStory: {
            situation_bn: "রেস্তোরাঁয় খাবার নিচ্ছো, হঠাৎ মন বদলে গেল",
            icon: "🍽️"
          }
        },
        {
          en: "The class is at 10... wait, no — at 11 AM",
          bn: "ক্লাস ১০টায়... থামো, না — ১১টায়",
          pronunciation_bn: "দ্য ক্লাস ইজ অ্যাট টেন... ওয়েট, নো — অ্যাট ইলেভেন এএম",
          slotValues: { CORRECTION: "at 11 AM" },
          topicArea: "education",
          stage: 2
        },
        {
          en: "I want the red shirt... wait, no — the blue one",
          bn: "আমি লাল শার্ট চাই... থামো, না — নীল টা",
          pronunciation_bn: "আই ওয়ান্ট দ্য রেড শার্ট... ওয়েট, নো — দ্য ব্লু ওয়ান",
          slotValues: { CORRECTION: "the blue one" },
          topicArea: "shopping",
          stage: 2
        },
        {
          en: "He's coming at 3... wait, no — at 4 PM",
          bn: "সে ৩টায় আসছে... থামো, না — ৪টায়",
          pronunciation_bn: "হিজ কামিং অ্যাট থ্রি... ওয়েট, নো — অ্যাট ফোর পিএম",
          slotValues: { CORRECTION: "at 4 PM" },
          topicArea: "social_interaction",
          stage: 2
        },
        {
          en: "I work at a shop... wait, no — at a garments factory",
          bn: "আমি দোকানে কাজ করি... থামো, না — গার্মেন্টস ফ্যাক্টরিতে",
          pronunciation_bn: "আই ওয়ার্ক অ্যাট এ শপ... ওয়েট, নো — অ্যাট এ গার্মেন্টস ফ্যাক্টরি",
          slotValues: { CORRECTION: "at a garments factory" },
          topicArea: "work",
          stage: 3,
          miniStory: {
            situation_bn: "নতুন পরিচিতকে বলছো কোথায় কাজ করো, ভুল বলে ফেলেছ",
            icon: "🏭"
          }
        },
        {
          en: "The medicine costs 100... wait, no — 150 taka",
          bn: "ওষুধের দাম ১০০... থামো, না — ১৫০ টাকা",
          pronunciation_bn: "দ্য মেডিসিন কস্টস ওয়ান হান্ড্রেড... ওয়েট, নো — ওয়ান ফিফটি টাকা",
          slotValues: { CORRECTION: "150 taka" },
          topicArea: "health",
          stage: 2
        },
        {
          en: "Meet me tomorrow... wait, no — day after tomorrow",
          bn: "কাল দেখা করো... থামো, না — পরশু",
          pronunciation_bn: "মিট মি টুমরো... ওয়েট, নো — ডে আফটার টুমরো",
          slotValues: { CORRECTION: "day after tomorrow" },
          topicArea: "social_interaction",
          stage: 3
        },
        {
          en: "Take the green bus... wait, no — the red one",
          bn: "সবুজ বাস ধরো... থামো, না — লাল টা",
          pronunciation_bn: "টেক দ্য গ্রিন বাস... ওয়েট, নো — দ্য রেড ওয়ান",
          slotValues: { CORRECTION: "the red one" },
          topicArea: "transport",
          stage: 3,
          miniStory: {
            situation_bn: "কাউকে বাস স্ট্যান্ডে রাস্তা বলছো, ভুল বাসের কথা বলে ফেলেছ",
            icon: "🚌"
          }
        },
        {
          en: "I pray at home... wait, no — at the mosque",
          bn: "আমি বাসায় নামাজ পড়ি... থামো, না — মসজিদে",
          pronunciation_bn: "আই প্রে অ্যাট হোম... ওয়েট, নো — অ্যাট দ্য মস্ক",
          slotValues: { CORRECTION: "at the mosque" },
          topicArea: "religion",
          stage: 3
        },
        {
          en: "My salary is 20,000... wait, no — 25,000 taka",
          bn: "আমার বেতন ২০,০০০... থামো, না — ২৫,০০০ টাকা",
          pronunciation_bn: "মাই স্যালারি ইজ টুয়েন্টি থাউজেন্ড... ওয়েট, নো — টুয়েন্টি ফাইভ থাউজেন্ড টাকা",
          slotValues: { CORRECTION: "25,000 taka" },
          topicArea: "finance",
          stage: 3,
          miniStory: {
            situation_bn: "চাকরির ইন্টারভিউতে বেতনের কথা বলছো, ভুল সংখ্যা বলে ফেলেছ",
            icon: "💼"
          }
        }
      ]
    },
    {
      id: "H13.4",
      patternName: "What I meant was",
      patternName_bn: "আমি আসলে বলতে চাইছিলাম",
      concept_bn: "বলতে চাইছিলাম",
      formula: "What I meant was [CLARIFICATION]",
      formula_bn: "আমি আসলে বলতে চাইছিলাম [ব্যাখ্যা]",
      formulaPronunciation_bn: "হোয়াট আই মেন্ট ওয়াজ [ব্যাখ্যা]",
      usageNote: "Use 'What I meant was' when someone misunderstood you and you want to explain clearly what you actually wanted to say. It's more formal than 'I mean' and shows you're taking time to clarify properly. Common in work settings, serious conversations, or when giving important information.",
      usageNote_bn: "যখন কেউ তোমার কথা ভুল বুঝেছে এবং তুমি ঠিকভাবে বুঝাতে চাও তখন 'হোয়াট আই মেন্ট ওয়াজ' ব্যবহার করো। এটা 'আই মিন' থেকে একটু বেশি আনুষ্ঠানিক এবং দেখায় যে তুমি ভালোভাবে ব্যাখ্যা করতে সময় নিচ্ছ। অফিসের কাজে, গুরুত্বপূর্ণ আলোচনায়, বা জরুরি তথ্য দেওয়ার সময় এটা খুব কাজের।",
      difficulty: "intermediate",
      formality: "casual",
      banglaStructureMap: "বাংলা: আমি আসলে বলতে চাইছিলাম কাল আসবো → English: What I meant was I'll come tomorrow",
      bridgeRuleIds: ["BR1", "BR7", "BR8"],
      conversionSteps: {
        banglaThought: "আমি আসলে বলতে চাইছিলাম সকালে আসবো",
        steps: [
          {
            step_bn: "প্রথমে 'হোয়াট আই মেন্ট ওয়াজ' বলো",
            result: "What I meant was"
          },
          {
            step_bn: "তারপর যা বলতে চেয়েছিলে তা স্পষ্টভাবে বলো",
            result: "What I meant was I'll come in the morning"
          },
          {
            step_bn: "কোনো কমা বা 'দ্যাট' লাগবে না, সরাসরি বলো",
            result: "What I meant was I'll come in the morning"
          }
        ],
        finalResult: "What I meant was I'll come in the morning",
        finalResult_bn: "আমি আসলে বলতে চাইছিলাম সকালে আসবো"
      },
      commonMistakes: [
        {
          wrong: "What I meant is I'll come tomorrow (বর্তমান কাল)",
          correct: "What I meant was I'll come tomorrow",
          explanation_bn: "'মেন্ট' মানে অতীত, তাই 'ওয়াজ' ব্যবহার করতে হবে — 'ইজ' নয়"
        },
        {
          wrong: "What I meant was that I'll come",
          correct: "What I meant was I'll come",
          explanation_bn: "'ওয়াজ' এর পরে 'দ্যাট' না বলে সরাসরি ব্যাখ্যা বলো"
        },
        {
          wrong: "What I mean was tomorrow (মিশ্রিত কাল)",
          correct: "What I meant was tomorrow",
          explanation_bn: "'মিন' এবং 'ওয়াজ' একসাথে বলা যায় না — 'মেন্ট ওয়াজ' বলতে হবে"
        }
      ],
      simpleRules: [
        {
          rule_bn: "যখন কেউ ভুল বুঝেছে তখন 'হোয়াট আই মেন্ট ওয়াজ' বলে স্পষ্ট করো",
          example: "What I meant was I need it by tomorrow, not today"
        },
        {
          rule_bn: "সবসময় 'মেন্ট ওয়াজ' একসাথে — 'মিন ইজ' নয়",
          example: "What I meant was 500 taka, not 50"
        },
        {
          rule_bn: "এটা একটু আনুষ্ঠানিক — গুরুত্বপূর্ণ কথা ব্যাখ্যা করার জন্য ভালো",
          example: "What I meant was we should meet on Saturday"
        }
      ],
      usageSituations: [
        {
          situation_bn: "অফিসে বস ভুল বুঝেছেন, স্পষ্ট করতে হবে",
          situation_en: "Boss misunderstood at office, need to clarify",
          exampleSentence: "What I meant was the deadline is Friday, not Monday",
          exampleSentence_bn: "আমি আসলে বলতে চাইছিলাম শেষ সময় শুক্রবার, সোমবার নয়"
        },
        {
          situation_bn: "দোকানে দাম নিয়ে ভুল বোঝাবুঝি হয়েছে",
          situation_en: "Price confusion at shop",
          exampleSentence: "What I meant was 350 taka for each, not total",
          exampleSentence_bn: "আমি আসলে বলতে চাইছিলাম প্রতিটার জন্য ৩৫০ টাকা, মোট নয়"
        },
        {
          situation_bn: "ডাক্তারকে লক্ষণ ব্যাখ্যা করতে হবে",
          situation_en: "Explaining symptoms to doctor",
          exampleSentence: "What I meant was the pain is in my chest, not my stomach",
          exampleSentence_bn: "আমি আসলে বলতে চাইছিলাম ব্যথা বুকে, পেটে নয়"
        }
      ],
      sentenceBuilding: [
        {
          previousPatternId: "A1.2",
          previousFormula: "I need [ITEM]",
          previousFormula_bn: "আমার [জিনিস] দরকার",
          combined: "What I meant was I need it by tomorrow morning",
          combined_bn: "আমি আসলে বলতে চাইছিলাম আমার কাল সকালের মধ্যে দরকার"
        },
        {
          previousPatternId: "G2.5",
          previousFormula: "When [QUESTION]?",
          previousFormula_bn: "কখন [প্রশ্ন]?",
          combined: "What I meant was when will you finish the work?",
          combined_bn: "আমি আসলে বলতে চাইছিলাম কখন কাজ শেষ করবে?"
        }
      ],
      memoryTrick_bn: "বাংলায় যেমন বলি 'আমি আসলে বলতে চাইছিলাম...', ইংরেজিতে 'হোয়াট আই মেন্ট ওয়াজ...' — মনে রাখো 'মেন্ট ওয়াজ' মানে অতীতে যা বলতে চেয়েছিলাম",
      chunks: [
        {
          en: "What I meant was",
          bn: "আমি আসলে বলতে চাইছিলাম",
          pronunciation_bn: "হোয়াট আই মেন্ট ওয়াজ"
        },
        {
          en: "What I really meant",
          bn: "আমি সত্যিই বলতে চাইছিলাম",
          pronunciation_bn: "হোয়াট আই রিয়েলি মেন্ট"
        },
        {
          en: "Let me clarify — what I meant was",
          bn: "আমি পরিষ্কার করে বলি — আমি বলতে চাইছিলাম",
          pronunciation_bn: "লেট মি ক্ল্যারিফাই — হোয়াট আই মেন্ট ওয়াজ"
        }
      ],
      wordMap: {
        bn_sentence: "আমি আসলে বলতে চাইছিলাম কাল সকালে আসবো",
        en_sentence: "What I meant was I'll come tomorrow morning",
        mappings: [
          { bn_word: "আমি বলতে চাইছিলাম", en_word: "What I meant was", type: "split", bridgeRuleId: "BR8" },
          { bn_word: "আসবো", en_word: "I'll come", type: "split", bridgeRuleId: "BR7" },
          { bn_word: "কাল সকালে", en_word: "tomorrow morning", type: "direct" }
        ]
      },
      answerTemplates: [
        {
          situation_bn: "তোমার ব্যাখ্যা শুনে কেউ বুঝলো",
          question: "How do people respond when you clarify?",
          question_bn: "তুমি ব্যাখ্যা করলে লোকে কী বলে?",
          answerFormula: "Oh, I see / Got it / That makes sense",
          answerFormula_bn: "ও, বুঝেছি / আচ্ছা / এখন পরিষ্কার",
          pronunciation_bn: "ও, আই সি / গট ইট / দ্যাট মেক্স সেন্স",
          examples: [
            {
              answer: "Oh, I see. So Friday is the deadline",
              answer_bn: "ও, বুঝেছি। তাহলে শুক্রবার শেষ সময়",
              pronunciation_bn: "ও, আই সি। সো ফ্রাইডে ইজ দ্য ডেডলাইন"
            },
            {
              answer: "Got it. 350 taka each, not total",
              answer_bn: "বুঝেছি। ৩৫০ টাকা প্রতিটা, মোট নয়",
              pronunciation_bn: "গট ইট। থ্রি ফিফটি টাকা ইচ, নট টোটাল"
            },
            {
              answer: "That makes sense now. Thanks for clarifying",
              answer_bn: "এখন পরিষ্কার হয়েছে। ব্যাখ্যা করার জন্য ধন্যবাद",
              pronunciation_bn: "দ্যাট মেক্স সেন্স নাউ। থ্যাংকস ফর ক্ল্যারিফাইং"
            }
          ]
        },
        {
          situation_bn: "বস বা শিক্ষক যদি আরও জানতে চান",
          question: "Boss/teacher wants more details",
          question_bn: "বস/শিক্ষক আরও বিস্তারিত চাইলে",
          answerFormula: "Okay, please explain more / Can you repeat that?",
          answerFormula_bn: "আচ্ছা, আরেকটু বলো / আবার বলবে?",
          pronunciation_bn: "ওকে, প্লিজ এক্সপ্লেইন মোর / ক্যান ইউ রিপিট দ্যাট?",
          examples: [
            {
              answer: "Okay, so you need it by Friday morning?",
              answer_bn: "আচ্ছা, তাহলে শুক্রবার সকালের মধ্যে লাগবে?",
              pronunciation_bn: "ওকে, সো ইউ নিড ইট বাই ফ্রাইডে মর্নিং?"
            },
            {
              answer: "Can you repeat that? I want to be sure",
              answer_bn: "আবার বলবে? আমি নিশ্চিত হতে চাই",
              pronunciation_bn: "ক্যান ইউ রিপিট দ্যাট? আই ওয়ান্ট টু বি শিওর"
            },
            {
              answer: "Please explain more. I need to understand clearly",
              answer_bn: "আরেকটু বুঝিয়ে বলো। আমাকে স্পষ্ট বুঝতে হবে",
              pronunciation_bn: "প্লিজ এক্সপ্লেইন মোর। আই নিড টু আন্ডারস্ট্যান্ড ক্লিয়ারলি"
            }
          ]
        },
        {
          situation_bn: "দোকানদার বা সার্ভিস প্রদানকারী নিশ্চিত করছে",
          question: "Shopkeeper/service provider confirms",
          question_bn: "দোকানদার/সেবাদাতা নিশ্চিত করছে",
          answerFormula: "Yes, exactly / That's right",
          answerFormula_bn: "হ্যাঁ, ঠিক তাই / একদম ঠিক",
          pronunciation_bn: "ইয়েস, এক্স্যাক্টলি / দ্যাটস রাইট",
          examples: [
            {
              answer: "Yes, exactly. 350 taka for each item",
              answer_bn: "হ্যাঁ, ঠিক তাই। প্রতিটা জিনিসের জন্য ৩৫০ টাকা",
              pronunciation_bn: "ইয়েস, এক্স্যাক্টলি। থ্রি ফিফটি টাকা ফর ইচ আইটেম"
            },
            {
              answer: "That's right. I understand now",
              answer_bn: "একদম ঠিক। এখন বুঝেছি",
              pronunciation_bn: "দ্যাটস রাইট। আই আন্ডারস্ট্যান্ড নাউ"
            },
            {
              answer: "Okay, so total is 1050 taka then",
              answer_bn: "আচ্ছা, তাহলে মোট ১০৫০ টাকা",
              pronunciation_bn: "ওকে, সো টোটাল ইজ ওয়ান থাউজেন্ড ফিফটি টাকা দেন"
            }
          ]
        }
      ],
      variations: [
        {
          variant: "time_clarification",
          label: "Clarifying time/deadline",
          label_bn: "সময়/শেষ সময় স্পষ্ট করা",
          formula: "What I meant was [CORRECT TIME/DEADLINE]",
          formula_bn: "আমি আসলে বলতে চাইছিলাম [সঠিক সময়/শেষ সময়]",
          examples: [
            {
              en: "What I meant was the meeting is at 10 AM, not 10 PM",
              bn: "আমি আসলে বলতে চাইছিলাম মিটিং সকাল ১০টায়, রাত ১০টায় নয়",
              pronunciation_bn: "হোয়াট আই মেন্ট ওয়াজ দ্য মিটিং ইজ অ্যাট টেন এএম, নট টেন পিএম",
              slotValues: { CLARIFICATION: "the meeting is at 10 AM, not 10 PM" },
              stage: 1
            },
            {
              en: "What I meant was I need it by tomorrow morning",
              bn: "আমি আসলে বলতে চাইছিলাম কাল সকালের মধ্যে দরকার",
              pronunciation_bn: "হোয়াট আই মেন্ট ওয়াজ আই নিড ইট বাই টুমরো মর্নিং",
              slotValues: { CLARIFICATION: "I need it by tomorrow morning" },
              stage: 1
            },
            {
              en: "What I meant was the deadline is Friday, not Monday",
              bn: "আমি আসলে বলতে চাইছিলাম শেষ সময় শুক্রবার, সোমবার নয়",
              pronunciation_bn: "হোয়াট আই মেন্ট ওয়াজ দ্য ডেডলাইন ইজ ফ্রাইডে, নট মান্ডে",
              slotValues: { CLARIFICATION: "the deadline is Friday, not Monday" },
              stage: 2
            }
          ]
        },
        {
          variant: "price_quantity_clarification",
          label: "Clarifying price/quantity",
          label_bn: "দাম/পরিমাণ স্পষ্ট করা",
          formula: "What I meant was [CORRECT PRICE/QUANTITY]",
          formula_bn: "আমি আসলে বলতে চাইছিলাম [সঠিক দাম/পরিমাণ]",
          examples: [
            {
              en: "What I meant was 350 taka for each, not total",
              bn: "আমি আসলে বলতে চাইছিলাম প্রতিটার জন্য ৩৫০ টাকা, মোট নয়",
              pronunciation_bn: "হোয়াট আই মেন্ট ওয়াজ থ্রি ফিফটি টাকা ফর ইচ, নট টোটাল",
              slotValues: { CLARIFICATION: "350 taka for each, not total" },
              stage: 1
            },
            {
              en: "What I meant was 3 kilos of rice, not 3 bags",
              bn: "আমি আসলে বলতে চাইছিলাম ৩ কেজি চাল, ৩ ব্যাগ নয়",
              pronunciation_bn: "হোয়াট আই মেন্ট ওয়াজ থ্রি কিলোস অফ রাইস, নট থ্রি ব্যাগস",
              slotValues: { CLARIFICATION: "3 kilos of rice, not 3 bags" },
              stage: 2
            },
            {
              en: "What I meant was the total is 1500 taka including delivery",
              bn: "আমি আসলে বলতে চাইছিলাম মোট ১৫০০ টাকা ডেলিভারি সহ",
              pronunciation_bn: "হোয়াট আই মেন্ট ওয়াজ দ্য টোটাল ইজ ফিফটিন হান্ড্রেড টাকা ইনক্লুডিং ডেলিভারি",
              slotValues: { CLARIFICATION: "the total is 1500 taka including delivery" },
              stage: 3
            }
          ]
        },
        {
          variant: "location_clarification",
          label: "Clarifying place/location",
          label_bn: "জায়গা/অবস্থান স্পষ্ট করা",
          formula: "What I meant was [CORRECT LOCATION]",
          formula_bn: "আমি আসলে বলতে চাইছিলাম [সঠিক জায়গা]",
          examples: [
            {
              en: "What I meant was I'll meet you at Shahbag, not Farmgate",
              bn: "আমি আসলে বলতে চাইছিলাম তোমার সাথে শাহবাগে দেখা হবে, ফার্মগেট নয়",
              pronunciation_bn: "হোয়াট আই মেন্ট ওয়াজ আইল মিট ইউ অ্যাট শাহবাগ, নট ফার্মগেট",
              slotValues: { CLARIFICATION: "I'll meet you at Shahbag, not Farmgate" },
              stage: 2
            },
            {
              en: "What I meant was the office is on the 3rd floor, not ground floor",
              bn: "আমি আসলে বলতে চাইছিলাম অফিস তৃতীয় তলায়, নিচতলায় নয়",
              pronunciation_bn: "হোয়াট আই মেন্ট ওয়াজ দি অফিস ইজ অন দ্য থার্ড ফ্লোর, নট গ্রাউন্ড ফ্লোর",
              slotValues: { CLARIFICATION: "the office is on the 3rd floor, not ground floor" },
              stage: 2
            },
            {
              en: "What I meant was the pain is in my chest, not stomach",
              bn: "আমি আসলে বলতে চাইছিলাম ব্যথা বুকে, পেটে নয়",
              pronunciation_bn: "হোয়াট আই মেন্ট ওয়াজ দ্য পেইন ইজ ইন মাই চেস্ট, নট স্টমাক",
              slotValues: { CLARIFICATION: "the pain is in my chest, not stomach" },
              stage: 3
            }
          ]
        }
      ],
      dialogueChains: [
        {
          id: "H13.4-dialogue-1",
          title_bn: "অফিসে প্রজেক্ট ডেডলাইন নিয়ে আলোচনা",
          title_en: "Discussing project deadline at office",
          situation_bn: "বসের সাথে প্রজেক্টের শেষ সময় নিয়ে ভুল বোঝাবুঝি হচ্ছে",
          icon: "💼",
          turns: [
            {
              speaker_bn: "বস",
              en: "So you need the report by Monday?",
              bn: "তাহলে সোমবারের মধ্যে রিপোর্ট লাগবে?",
              pronunciation_bn: "সো ইউ নিড দ্য রিপোর্ট বাই মান্ডে?",
              patternId: "G2.23"
            },
            {
              speaker_bn: "তুমি",
              en: "No sir, what I meant was the deadline is Friday",
              bn: "না স্যার, আমি আসলে বলতে চাইছিলাম শেষ সময় শুক্রবার",
              pronunciation_bn: "নো স্যার, হোয়াট আই মেন্ট ওয়াজ দ্য ডেডলাইন ইজ ফ্রাইডে",
              patternId: "H13.4"
            },
            {
              speaker_bn: "বস",
              en: "Oh, I see. So Friday, not Monday",
              bn: "ও, বুঝেছি। তাহলে শুক্রবার, সোমবার নয়",
              pronunciation_bn: "ও, আই সি। সো ফ্রাইডে, নট মান্ডে",
              patternId: "H13.2"
            },
            {
              speaker_bn: "তুমি",
              en: "Yes sir, Friday by 5 PM",
              bn: "হ্যাঁ স্যার, শুক্রবার বিকেল ৫টার মধ্যে",
              pronunciation_bn: "ইয়েস স্যার, ফ্রাইডে বাই ফাইভ পিএম",
              patternId: "A1.7"
            },
            {
              speaker_bn: "বস",
              en: "Got it. Can you finish by then?",
              bn: "বুঝেছি। তার মধ্যে শেষ করতে পারবে?",
              pronunciation_bn: "গট ইট। ক্যান ইউ ফিনিশ বাই দেন?",
              patternId: "G2.1"
            },
            {
              speaker_bn: "তুমি",
              en: "Yes sir, I'll finish it on time",
              bn: "হ্যাঁ স্যার, সময়মতো শেষ করবো",
              pronunciation_bn: "ইয়েস স্যার, আইল ফিনিশ ইট অন টাইম",
              patternId: "A1.3"
            }
          ],
          patternsUsed: ["G2.23", "H13.4", "H13.2", "A1.7", "G2.1", "A1.3"]
        }
      ],
      slots: [
        {
          name: "CLARIFICATION",
          description: "The clear explanation of what you actually wanted to say",
          description_bn: "তুমি আসলে কী বলতে চেয়েছিলে তার স্পষ্ট ব্যাখ্যা",
          acceptedTypes: ["complete sentence", "phrase with details", "comparison (not X, but Y)"],
          examples: [
            "the deadline is Friday, not Monday",
            "350 taka for each, not total",
            "I need it by tomorrow morning",
            "the meeting is at 10 AM, not 10 PM",
            "I'll meet you at Shahbag"
          ]
        }
      ],
      examples: [
        {
          en: "What I meant was the meeting is at 10 AM, not 10 PM",
          bn: "আমি আসলে বলতে চাইছিলাম মিটিং সকাল ১০টায়, রাত ১০টায় নয়",
          pronunciation_bn: "হোয়াট আই মেন্ট ওয়াজ দ্য মিটিং ইজ অ্যাট টেন এএম, নট টেন পিএম",
          slotValues: { CLARIFICATION: "the meeting is at 10 AM, not 10 PM" },
          topicArea: "work",
          stage: 1,
          miniStory: {
            situation_bn: "অফিসের সহকর্মীকে মিটিং এর সময় জানাচ্ছো, ভুল বুঝেছে",
            icon: "💼"
          }
        },
        {
          en: "What I meant was 350 taka for each, not total",
          bn: "আমি আসলে বলতে চাইছিলাম প্রতিটার জন্য ৩৫০ টাকা, মোট নয়",
          pronunciation_bn: "হোয়াট আই মেন্ট ওয়াজ থ্রি ফিফটি টাকা ফর ইচ, নট টোটাল",
          slotValues: { CLARIFICATION: "350 taka for each, not total" },
          topicArea: "shopping",
          stage: 1
        },
        {
          en: "What I meant was I need it by tomorrow morning",
          bn: "আমি আসলে বলতে চাইছিলাম কাল সকালের মধ্যে দরকার",
          pronunciation_bn: "হোয়াট আই মেন্ট ওয়াজ আই নিড ইট বাই টুমরো মর্নিং",
          slotValues: { CLARIFICATION: "I need it by tomorrow morning" },
          topicArea: "work",
          stage: 1
        },
        {
          en: "What I meant was the deadline is Friday, not Monday",
          bn: "আমি আসলে বলতে চাইছিলাম শেষ সময় শুক্রবার, সোমবার নয়",
          pronunciation_bn: "হোয়াট আই মেন্ট ওয়াজ দ্য ডেডলাইন ইজ ফ্রাইডে, নট মান্ডে",
          slotValues: { CLARIFICATION: "the deadline is Friday, not Monday" },
          topicArea: "work",
          stage: 1
        },
        {
          en: "What I meant was I'll meet you at Shahbag, not Farmgate",
          bn: "আমি আসলে বলতে চাইছিলাম তোমার সাথে শাহবাগে দেখা হবে, ফার্মগেট নয়",
          pronunciation_bn: "হোয়াট আই মেন্ট ওয়াজ আইল মিট ইউ অ্যাট শাহবাগ, নট ফার্মগেট",
          slotValues: { CLARIFICATION: "I'll meet you at Shahbag, not Farmgate" },
          topicArea: "social_interaction",
          stage: 1,
          miniStory: {
            situation_bn: "বন্ধুকে দেখা করার জায়গা বলছো, ভুল জায়গা বলে ফেলেছ",
            icon: "🚌"
          }
        },
        {
          en: "What I meant was 3 kilos of rice, not 3 bags",
          bn: "আমি আসলে বলতে চাইছিলাম ৩ কেজি চাল, ৩ ব্যাগ নয়",
          pronunciation_bn: "হোয়াট আই মেন্ট ওয়াজ থ্রি কিলোস অফ রাইস, নট থ্রি ব্যাগস",
          slotValues: { CLARIFICATION: "3 kilos of rice, not 3 bags" },
          topicArea: "shopping",
          stage: 2,
          miniStory: {
            situation_bn: "বাজারে চাল কিনছো, দোকানদার পরিমাণ ভুল বুঝেছে",
            icon: "🛒"
          }
        },
        {
          en: "What I meant was the pain is in my chest, not stomach",
          bn: "আমি আসলে বলতে চাইছিলাম ব্যথা বুকে, পেটে নয়",
          pronunciation_bn: "হোয়াট আই মেন্ট ওয়াজ দ্য পেইন ইজ ইন মাই চেস্ট, নট স্টমাক",
          slotValues: { CLARIFICATION: "the pain is in my chest, not stomach" },
          topicArea: "health",
          stage: 2
        },
        {
          en: "What I meant was the office is on the 3rd floor, not ground floor",
          bn: "আমি আসলে বলতে চাইছিলাম অফিস তৃতীয় তলায়, নিচতলায় নয়",
          pronunciation_bn: "হোয়াট আই মেন্ট ওয়াজ দি অফিস ইজ অন দ্য থার্ড ফ্লোর, নট গ্রাউন্ড ফ্লোর",
          slotValues: { CLARIFICATION: "the office is on the 3rd floor, not ground floor" },
          topicArea: "work",
          stage: 2
        },
        {
          en: "What I meant was we should leave at 8 AM, not 8 PM",
          bn: "আমি আসলে বলতে চাইছিলাম আমাদের সকাল ৮টায় বের হওয়া উচিত, রাত ৮টায় নয়",
          pronunciation_bn: "হোয়াট আই মেন্ট ওয়াজ উই শুড লিভ অ্যাট এইট এএম, নট এইট পিএম",
          slotValues: { CLARIFICATION: "we should leave at 8 AM, not 8 PM" },
          topicArea: "transport",
          stage: 2
        },
        {
          en: "What I meant was the doctor's appointment is on Tuesday, not Wednesday",
          bn: "আমি আসলে বলতে চাইছিলাম ডাক্তারের অ্যাপয়েন্টমেন্ট মঙ্গলবার, বুধবার নয়",
          pronunciation_bn: "হোয়াট আই মেন্ট ওয়াজ দ্য ডক্টরস অ্যাপয়েন্টমেন্ট ইজ অন টিউজডে, নট ওয়েডনেসডে",
          slotValues: { CLARIFICATION: "the doctor's appointment is on Tuesday, not Wednesday" },
          topicArea: "health",
          stage: 2,
          miniStory: {
            situation_bn: "পরিবারকে ডাক্তারের দিন বলছো, ভুল দিন বলে ফেলেছ",
            icon: "🏥"
          }
        },
        {
          en: "What I meant was the total is 1500 taka including delivery",
          bn: "আমি আসলে বলতে চাইছিলাম মোট ১৫০০ টাকা ডেলিভারি সহ",
          pronunciation_bn: "হোয়াট আই মেন্ট ওয়াজ দ্য টোটাল ইজ ফিফটিন হান্ড্রেড টাকা ইনক্লুডিং ডেলিভারি",
          slotValues: { CLARIFICATION: "the total is 1500 taka including delivery" },
          topicArea: "finance",
          stage: 3
        },
        {
          en: "What I meant was I work in a garments factory, not a shop",
          bn: "আমি আসলে বলতে চাইছিলাম আমি গার্মেন্টস ফ্যাক্টরিতে কাজ করি, দোকানে নয়",
          pronunciation_bn: "হোয়াট আই মেন্ট ওয়াজ আই ওয়ার্ক ইন এ গার্মেন্টস ফ্যাক্টরি, নট এ শপ",
          slotValues: { CLARIFICATION: "I work in a garments factory, not a shop" },
          topicArea: "work",
          stage: 3
        },
        {
          en: "What I meant was the class starts at 9 AM sharp, not 9:30",
          bn: "আমি আসলে বলতে চাইছিলাম ক্লাস ঠিক সকাল ৯টায় শুরু, সাড়ে ৯টায় নয়",
          pronunciation_bn: "হোয়াট আই মেন্ট ওয়াজ দ্য ক্লাস স্টার্টস অ্যাট নাইন এএম শার্প, নট নাইন থার্টি",
          slotValues: { CLARIFICATION: "the class starts at 9 AM sharp, not 9:30" },
          topicArea: "education",
          stage: 3,
          miniStory: {
            situation_bn: "ক্লাসমেটকে ক্লাস শুরুর সময় জানাচ্ছো, ভুল সময় বলেছ",
            icon: "📚"
          }
        },
        {
          en: "What I meant was we need to pay rent by the 5th, not the 15th",
          bn: "আমি আসলে বলতে চাইছিলাম ৫ তারিখের মধ্যে ভাড়া দিতে হবে, ১৫ তারিখ নয়",
          pronunciation_bn: "হোয়াট আই মেন্ট ওয়াজ উই নিড টু পে রেন্ট বাই দ্য ফিফথ, নট দ্য ফিফটিনথ",
          slotValues: { CLARIFICATION: "we need to pay rent by the 5th, not the 15th" },
          topicArea: "finance",
          stage: 3
        },
        {
          en: "What I meant was I pray at the mosque, not at home",
          bn: "আমি আসলে বলতে চাইছিলাম আমি মসজিদে নামাজ পড়ি, বাসায় নয়",
          pronunciation_bn: "হোয়াট আই মেন্ট ওয়াজ আই প্রে অ্যাট দ্য মস্ক, নট অ্যাট হোম",
          slotValues: { CLARIFICATION: "I pray at the mosque, not at home" },
          topicArea: "religion",
          stage: 3,
          miniStory: {
            situation_bn: "প্রতিবেশীর সাথে নামাজের স্থান নিয়ে কথা হচ্ছে",
            icon: "🕌"
          }
        }
      ]
    },
    {
      id: "H13.5",
      patternName: "Sorry, let me rephrase",
      patternName_bn: "সরি, আবার বলি",
      concept_bn: "আবার বলি",
      formula: "Sorry, let me rephrase — [BETTER VERSION]",
      formula_bn: "সরি, আবার বলি — [ভালো করে বলা]",
      formulaPronunciation_bn: "সরি, লেট মি রিফ্রেজ — [কথা]",
      usageNote: "Use 'Sorry, let me rephrase' when you realize you said something poorly or confusingly and want to say it again in a better way. It's polite and shows you care about being understood. Common in professional settings, teaching, or when giving important information. The dash (—) shows you're pausing to think of a better way to say it.",
      usageNote_bn: "যখন বুঝতে পারো তুমি কথাটা ভালোভাবে বা স্পষ্টভাবে বলতে পারোনি এবং আবার ভালো করে বলতে চাও তখন 'সরি, লেট মি রিফ্রেজ' ব্যবহার করো। এটা ভদ্র এবং দেখায় যে তুমি স্পষ্টভাবে বোঝাতে চাও। অফিসের কাজে, পড়ানোর সময়, বা গুরুত্বপূর্ণ তথ্য দেওয়ার সময় এটা খুব কাজের। ড্যাশ (—) দেখায় যে তুমি ভালো উপায়ে বলার জন্য একটু ভাবছো।",
      difficulty: "intermediate",
      formality: "polite",
      banglaStructureMap: "বাংলা: সরি, আবার বলি — আমি কাল আসতে পারবো না → English: Sorry, let me rephrase — I can't come tomorrow",
      bridgeRuleIds: ["BR1", "BR7", "BR11"],
      conversionSteps: {
        banglaThought: "সরি, আবার বলি — আমি ব্যস্ত আছি, কাল আসতে পারবো না",
        steps: [
          {
            step_bn: "প্রথমে 'সরি, লেট মি রিফ্রেজ' বলে ক্ষমা চাও",
            result: "Sorry, let me rephrase"
          },
          {
            step_bn: "ড্যাশ (—) দিয়ে একটু থামো",
            result: "Sorry, let me rephrase —"
          },
          {
            step_bn: "তারপর ভালো করে, পরিষ্কারভাবে বলো",
            result: "Sorry, let me rephrase — I'm busy, so I can't come tomorrow"
          }
        ],
        finalResult: "Sorry, let me rephrase — I'm busy, so I can't come tomorrow",
        finalResult_bn: "সরি, আবার বলি — আমি ব্যস্ত, তাই কাল আসতে পারবো না"
      },
      commonMistakes: [
        {
          wrong: "Sorry, let me phrase again",
          correct: "Sorry, let me rephrase",
          explanation_bn: "'রিফ্রেজ' একটা শব্দ — 'ফ্রেজ অ্যাগেইন' আলাদা করে বলা যায় না"
        },
        {
          wrong: "Sorry, let me rephrase, I can't come (কমা দিয়ে)",
          correct: "Sorry, let me rephrase — I can't come",
          explanation_bn: "'রিফ্রেজ' এর পরে ড্যাশ (—) দিতে হবে, কমা নয়"
        },
        {
          wrong: "Let me rephrase — I can't come (সরি ছাড়া)",
          correct: "Sorry, let me rephrase — I can't come",
          explanation_bn: "'সরি' বলা ভদ্রতা — না বললে রূঢ় শোনাতে পারে"
        }
      ],
      simpleRules: [
        {
          rule_bn: "যখন কথা অস্পষ্ট হয়ে গেছে তখন 'সরি, লেট মি রিফ্রেজ' বলে আবার বলো",
          example: "Sorry, let me rephrase — I need your help with this"
        },
        {
          rule_bn: "'সরি' এর পরে কমা, 'রিফ্রেজ' এর পরে ড্যাশ (—) দাও",
          example: "Sorry, let me rephrase — the meeting is tomorrow at 10"
        },
        {
          rule_bn: "এটা ভদ্র এবং পেশাদার — অফিস বা গুরুত্বপূর্ণ কথায় ভালো",
          example: "Sorry, let me rephrase — we need to finish by Friday"
        }
      ],
      usageSituations: [
        {
          situation_bn: "অফিসে বস বা ক্লায়েন্টকে ভুল বুঝিয়ে ফেলেছ",
          situation_en: "Explained poorly to boss or client at office",
          exampleSentence: "Sorry, let me rephrase — the project will take 2 weeks, not 2 days",
          exampleSentence_bn: "সরি, আবার বলি — প্রজেক্ট ২ সপ্তাহ লাগবে, ২ দিন নয়"
        },
        {
          situation_bn: "শিক্ষার্থীকে বুঝাচ্ছো কিন্তু বুঝছে না",
          situation_en: "Teaching student but they don't understand",
          exampleSentence: "Sorry, let me rephrase — you need to study chapters 1 to 5",
          exampleSentence_bn: "সরি, আবার বলি — তোমাকে অধ্যায় ১ থেকে ৫ পড়তে হবে"
        },
        {
          situation_bn: "ডাক্তারকে লক্ষণ বলতে গিয়ে গোলমাল হয়ে গেছে",
          situation_en: "Describing symptoms to doctor got confusing",
          exampleSentence: "Sorry, let me rephrase — the pain comes after I eat, not before",
          exampleSentence_bn: "সরি, আবার বলি — খাওয়ার পরে ব্যথা হয়, আগে নয়"
        }
      ],
      sentenceBuilding: [
        {
          previousPatternId: "A1.2",
          previousFormula: "I need [ITEM]",
          previousFormula_bn: "আমার [জিনিস] দরকার",
          combined: "Sorry, let me rephrase — I need your help by tomorrow",
          combined_bn: "সরি, আবার বলি — আমার কালকের মধ্যে তোমার সাহায্য দরকার"
        },
        {
          previousPatternId: "A1.3",
          previousFormula: "I will [ACTION]",
          previousFormula_bn: "আমি [কাজ] করবো",
          combined: "Sorry, let me rephrase — I will finish it by Friday evening",
          combined_bn: "সরি, আবার বলি — আমি শুক্রবার সন্ধ্যার মধ্যে শেষ করবো"
        }
      ],
      memoryTrick_bn: "বাংলায় যেমন বলি 'সরি, আবার বলছি...', ইংরেজিতে 'সরি, লেট মি রিফ্রেজ' — 'রিফ্রেজ' মানে আবার নতুন করে বলা",
      chunks: [
        {
          en: "Sorry, let me rephrase",
          bn: "সরি, আবার বলি",
          pronunciation_bn: "সরি, লেট মি রিফ্রেজ"
        },
        {
          en: "Let me say that again",
          bn: "আমি আবার বলি",
          pronunciation_bn: "লেট মি সে দ্যাট অ্যাগেইন"
        },
        {
          en: "Sorry, I'll explain better",
          bn: "সরি, আমি আরও ভালো করে বলি",
          pronunciation_bn: "সরি, আইল এক্সপ্লেইন বেটার"
        }
      ],
      wordMap: {
        bn_sentence: "সরি, আবার বলি — আমি কাল আসতে পারবো না",
        en_sentence: "Sorry, let me rephrase — I can't come tomorrow",
        mappings: [
          { bn_word: "সরি", en_word: "Sorry", type: "direct" },
          { bn_word: "আবার বলি", en_word: "let me rephrase", type: "split", bridgeRuleId: "BR11" },
          { bn_word: "পারবো না", en_word: "can't", type: "split", bridgeRuleId: "BR7" },
          { bn_word: "কাল", en_word: "tomorrow", type: "direct" }
        ]
      },
      answerTemplates: [
        {
          situation_bn: "তোমার আবার বলা শুনে কেউ বুঝলো",
          question: "How do people respond when you rephrase?",
          question_bn: "তুমি আবার বললে লোকে কী বলে?",
          answerFormula: "Okay, I understand now / That's clearer / Got it",
          answerFormula_bn: "আচ্ছা, এখন বুঝেছি / এখন পরিষ্কার / বুঝেছি",
          pronunciation_bn: "ওকে, আই আন্ডারস্ট্যান্ড নাউ / দ্যাটস ক্লিয়ারার / গট ইট",
          examples: [
            {
              answer: "Okay, I understand now. 2 weeks, not 2 days",
              answer_bn: "আচ্ছা, এখন বুঝেছি। ২ সপ্তাহ, ২ দিন নয়",
              pronunciation_bn: "ওকে, আই আন্ডারস্ট্যান্ড নাউ। টু উইকস, নট টু ডেজ"
            },
            {
              answer: "That's clearer. Thank you for explaining",
              answer_bn: "এখন পরিষ্কার। ব্যাখ্যা করার জন্য ধন্যবাদ",
              pronunciation_bn: "দ্যাটস ক্লিয়ারার। থ্যাংক ইউ ফর এক্সপ্লেইনিং"
            },
            {
              answer: "Got it. After eating, not before",
              answer_bn: "বুঝেছি। খাওয়ার পরে, আগে নয়",
              pronunciation_bn: "গট ইট। আফটার ইটিং, নট বিফোর"
            }
          ]
        },
        {
          situation_bn: "বস বা শিক্ষক যদি নিশ্চিত করেন",
          question: "Boss/teacher confirms understanding",
          question_bn: "বস/শিক্ষক বোঝা নিশ্চিত করলে",
          answerFormula: "Yes, exactly / That's right / Correct",
          answerFormula_bn: "হ্যাঁ, ঠিক তাই / একদম ঠিক / সঠিক",
          pronunciation_bn: "ইয়েস, এক্স্যাক্টলি / দ্যাটস রাইট / কারেক্ট",
          examples: [
            {
              answer: "Yes, exactly. By Friday evening",
              answer_bn: "হ্যাঁ, ঠিক তাই। শুক্রবার সন্ধ্যার মধ্যে",
              pronunciation_bn: "ইয়েস, এক্স্যাক্টলি। বাই ফ্রাইডে ইভনিং"
            },
            {
              answer: "That's right. Chapters 1 to 5",
              answer_bn: "একদম ঠিক। অধ্যায় ১ থেকে ৫",
              pronunciation_bn: "দ্যাটস রাইট। চ্যাপটারস ওয়ান টু ফাইভ"
            },
            {
              answer: "Correct. I need help by tomorrow",
              answer_bn: "সঠিক। আমার কালকের মধ্যে সাহায্য দরকার",
              pronunciation_bn: "কারেক্ট। আই নিড হেল্প বাই টুমরো"
            }
          ]
        },
        {
          situation_bn: "ডাক্তার বা সেবাদাতা যদি আরও জানতে চান",
          question: "Doctor/service provider wants more details",
          question_bn: "ডাক্তার/সেবাদাতা আরও বিস্তারিত চাইলে",
          answerFormula: "Can you tell me more? / When does it happen?",
          answerFormula_bn: "আরও বলবে? / কখন হয়?",
          pronunciation_bn: "ক্যান ইউ টেল মি মোর? / হোয়েন ডাজ ইট হ্যাপেন?",
          examples: [
            {
              answer: "Can you tell me more about the pain?",
              answer_bn: "ব্যথা সম্পর্কে আরও বলবে?",
              pronunciation_bn: "ক্যান ইউ টেল মি মোর অ্যাবাউট দ্য পেইন?"
            },
            {
              answer: "When does it happen exactly?",
              answer_bn: "ঠিক কখন হয়?",
              pronunciation_bn: "হোয়েন ডাজ ইট হ্যাপেন এক্স্যাক্টলি?"
            },
            {
              answer: "How long has this been happening?",
              answer_bn: "কতদিন ধরে এটা হচ্ছে?",
              pronunciation_bn: "হাউ লং হ্যাজ দিস বিন হ্যাপেনিং?"
            }
          ]
        }
      ],
      variations: [
        {
          variant: "time_rephrasing",
          label: "Rephrasing time/schedule",
          label_bn: "সময়/সূচি আবার বলা",
          formula: "Sorry, let me rephrase — [CLEARER TIME EXPLANATION]",
          formula_bn: "সরি, আবার বলি — [পরিষ্কার সময় ব্যাখ্যা]",
          examples: [
            {
              en: "Sorry, let me rephrase — the meeting is tomorrow at 10 AM",
              bn: "সরি, আবার বলি — মিটিং কাল সকাল ১০টায়",
              pronunciation_bn: "সরি, লেট মি রিফ্রেজ — দ্য মিটিং ইজ টুমরো অ্যাট টেন এএম",
              slotValues: { BETTER_VERSION: "the meeting is tomorrow at 10 AM" },
              stage: 1
            },
            {
              en: "Sorry, let me rephrase — I need it by Friday evening, not Monday",
              bn: "সরি, আবার বলি — শুক্রবার সন্ধ্যার মধ্যে দরকার, সোমবার নয়",
              pronunciation_bn: "সরি, লেট মি রিফ্রেজ — আই নিড ইট বাই ফ্রাইডে ইভনিং, নট মান্ডে",
              slotValues: { BETTER_VERSION: "I need it by Friday evening, not Monday" },
              stage: 1
            },
            {
              en: "Sorry, let me rephrase — the class starts at 9 sharp, so come 10 minutes early",
              bn: "সরি, আবার বলি — ক্লাস ঠিক ৯টায় শুরু, তাই ১০ মিনিট আগে আসবে",
              pronunciation_bn: "সরি, লেট মি রিফ্রেজ — দ্য ক্লাস স্টার্টস অ্যাট নাইন শার্প, সো কাম টেন মিনিটস আর্লি",
              slotValues: { BETTER_VERSION: "the class starts at 9 sharp, so come 10 minutes early" },
              stage: 2
            }
          ]
        },
        {
          variant: "work_rephrasing",
          label: "Rephrasing work instructions",
          label_bn: "কাজের নির্দেশনা আবার বলা",
          formula: "Sorry, let me rephrase — [CLEARER WORK INSTRUCTION]",
          formula_bn: "সরি, আবার বলি — [পরিষ্কার কাজের নির্দেশ]",
          examples: [
            {
              en: "Sorry, let me rephrase — the project will take 2 weeks, not 2 days",
              bn: "সরি, আবার বলি — প্রজেক্ট ২ সপ্তাহ লাগবে, ২ দিন নয়",
              pronunciation_bn: "সরি, লেট মি রিফ্রেজ — দ্য প্রজেক্ট উইল টেক টু উইকস, নট টু ডেজ",
              slotValues: { BETTER_VERSION: "the project will take 2 weeks, not 2 days" },
              stage: 1
            },
            {
              en: "Sorry, let me rephrase — I need your help with the report, not the presentation",
              bn: "সরি, আবার বলি — রিপোর্ট নিয়ে তোমার সাহায্য দরকার, প্রেজেন্টেশন নয়",
              pronunciation_bn: "সরি, লেট মি রিফ্রেজ — আই নিড ইউর হেল্প উইথ দ্য রিপোর্ট, নট দ্য প্রেজেন্টেশন",
              slotValues: { BETTER_VERSION: "I need your help with the report, not the presentation" },
              stage: 2
            },
            {
              en: "Sorry, let me rephrase — we should finish this today so we can start the next one tomorrow",
              bn: "সরি, আবার বলি — আমাদের আজ এটা শেষ করা উচিত যাতে কাল নতুন টা শুরু করতে পারি",
              pronunciation_bn: "সরি, লেট মি রিফ্রেজ — উই শুড ফিনিশ দিস টুডে সো উই ক্যান স্টার্ট দ্য নেক্সট ওয়ান টুমরো",
              slotValues: { BETTER_VERSION: "we should finish this today so we can start the next one tomorrow" },
              stage: 3
            }
          ]
        },
        {
          variant: "health_rephrasing",
          label: "Rephrasing health symptoms",
          label_bn: "স্বাস্থ্য লক্ষণ আবার বলা",
          formula: "Sorry, let me rephrase — [CLEARER SYMPTOM DESCRIPTION]",
          formula_bn: "সরি, আবার বলি — [পরিষ্কার লক্ষণ বর্ণনা]",
          examples: [
            {
              en: "Sorry, let me rephrase — the pain comes after I eat, not before",
              bn: "সরি, আবার বলি — খাওয়ার পরে ব্যথা হয়, আগে নয়",
              pronunciation_bn: "সরি, লেট মি রিফ্রেজ — দ্য পেইন কামস আফটার আই ইট, নট বিফোর",
              slotValues: { BETTER_VERSION: "the pain comes after I eat, not before" },
              stage: 2
            },
            {
              en: "Sorry, let me rephrase — it hurts when I walk, not when I sit",
              bn: "সরি, আবার বলি — হাঁটলে ব্যথা হয়, বসলে না",
              pronunciation_bn: "সরি, লেট মি রিফ্রেজ — ইট হার্টস হোয়েন আই ওয়াক, নট হোয়েন আই সিট",
              slotValues: { BETTER_VERSION: "it hurts when I walk, not when I sit" },
              stage: 2
            },
            {
              en: "Sorry, let me rephrase — I've had this fever for 3 days, and it gets worse at night",
              bn: "সরি, আবার বলি — ৩ দিন ধরে জ্বর আছে, আর রাতে বেশি হয়",
              pronunciation_bn: "সরি, লেট মি রিফ্রেজ — আইভ হ্যাড দিস ফিভার ফর থ্রি ডেজ, অ্যান্ড ইট গেটস ওয়ার্স অ্যাট নাইট",
              slotValues: { BETTER_VERSION: "I've had this fever for 3 days, and it gets worse at night" },
              stage: 3
            }
          ]
        }
      ],
      dialogueChains: [
        {
          id: "H13.5-dialogue-1",
          title_bn: "অফিসে প্রজেক্টের সময় নিয়ে আলোচনা",
          title_en: "Discussing project timeline at office",
          situation_bn: "বসকে প্রজেক্টের সময় বলতে গিয়ে গোলমাল হচ্ছে",
          icon: "💼",
          turns: [
            {
              speaker_bn: "বস",
              en: "How long will this project take?",
              bn: "এই প্রজেক্ট কতদিন লাগবে?",
              pronunciation_bn: "হাউ লং উইল দিস প্রজেক্ট টেক?",
              patternId: "G2.5"
            },
            {
              speaker_bn: "তুমি",
              en: "It will take... um... 2 days. Sorry, let me rephrase — 2 weeks",
              bn: "এটা... উম... ২ দিন লাগবে। সরি, আবার বলি — ২ সপ্তাহ",
              pronunciation_bn: "ইট উইল টেক... আম... টু ডেজ। সরি, লেট মি রিফ্রেজ — টু উইকস",
              patternId: "H13.5"
            },
            {
              speaker_bn: "বস",
              en: "Okay, so 2 weeks. That's fine",
              bn: "আচ্ছা, তাহলে ২ সপ্তাহ। ঠিক আছে",
              pronunciation_bn: "ওকে, সো টু উইকস। দ্যাটস ফাইন",
              patternId: "H13.2"
            },
            {
              speaker_bn: "তুমি",
              en: "Yes sir, I'll finish it by then",
              bn: "হ্যাঁ স্যার, তার মধ্যে শেষ করবো",
              pronunciation_bn: "ইয়েস স্যার, আইল ফিনিশ ইট বাই দেন",
              patternId: "A1.3"
            },
            {
              speaker_bn: "বস",
              en: "Good. Keep me updated",
              bn: "ভালো। আমাকে জানাতে থেকো",
              pronunciation_bn: "গুড। কিপ মি আপডেটেড",
              patternId: "A1.4"
            }
          ],
          patternsUsed: ["G2.5", "H13.5", "H13.2", "A1.3", "A1.4"]
        }
      ],
      slots: [
        {
          name: "BETTER_VERSION",
          description: "The clearer, better way of saying what you wanted to say",
          description_bn: "যা বলতে চেয়েছিলে তা আরও পরিষ্কার ও ভালো করে বলা",
          acceptedTypes: ["complete sentence", "detailed explanation", "clearer comparison"],
          examples: [
            "the project will take 2 weeks, not 2 days",
            "I need it by Friday evening",
            "the pain comes after I eat, not before",
            "we should finish this today",
            "the meeting is tomorrow at 10 AM"
          ]
        }
      ],
      examples: [
        {
          en: "Sorry, let me rephrase — the meeting is tomorrow at 10 AM",
          bn: "সরি, আবার বলি — মিটিং কাল সকাল ১০টায়",
          pronunciation_bn: "সরি, লেট মি রিফ্রেজ — দ্য মিটিং ইজ টুমরো অ্যাট টেন এএম",
          slotValues: { BETTER_VERSION: "the meeting is tomorrow at 10 AM" },
          topicArea: "work",
          stage: 1,
          miniStory: {
            situation_bn: "সহকর্মীকে মিটিং এর সময় বলছো, প্রথমবার অস্পষ্ট হয়েছে",
            icon: "💼"
          }
        },
        {
          en: "Sorry, let me rephrase — I need it by Friday evening, not Monday",
          bn: "সরি, আবার বলি — শুক্রবার সন্ধ্যার মধ্যে দরকার, সোমবার নয়",
          pronunciation_bn: "সরি, লেট মি রিফ্রেজ — আই নিড ইট বাই ফ্রাইডে ইভনিং, নট মান্ডে",
          slotValues: { BETTER_VERSION: "I need it by Friday evening, not Monday" },
          topicArea: "work",
          stage: 1
        },
        {
          en: "Sorry, let me rephrase — the project will take 2 weeks, not 2 days",
          bn: "সরি, আবার বলি — প্রজেক্ট ২ সপ্তাহ লাগবে, ২ দিন নয়",
          pronunciation_bn: "সরি, লেট মি রিফ্রেজ — দ্য প্রজেক্ট উইল টেক টু উইকস, নট টু ডেজ",
          slotValues: { BETTER_VERSION: "the project will take 2 weeks, not 2 days" },
          topicArea: "work",
          stage: 1
        },
        {
          en: "Sorry, let me rephrase — you need to study chapters 1 to 5",
          bn: "সরি, আবার বলি — তোমাকে অধ্যায় ১ থেকে ৫ পড়তে হবে",
          pronunciation_bn: "সরি, লেট মি রিফ্রেজ — ইউ নিড টু স্টাডি চ্যাপটারস ওয়ান টু ফাইভ",
          slotValues: { BETTER_VERSION: "you need to study chapters 1 to 5" },
          topicArea: "education",
          stage: 1
        },
        {
          en: "Sorry, let me rephrase — the pain comes after I eat, not before",
          bn: "সরি, আবার বলি — খাওয়ার পরে ব্যথা হয়, আগে নয়",
          pronunciation_bn: "সরি, লেট মি রিফ্রেজ — দ্য পেইন কামস আফটার আই ইট, নট বিফোর",
          slotValues: { BETTER_VERSION: "the pain comes after I eat, not before" },
          topicArea: "health",
          stage: 1,
          miniStory: {
            situation_bn: "ডাক্তারকে লক্ষণ বলছো, প্রথমে ভালো বুঝাতে পারোনি",
            icon: "🏥"
          }
        },
        {
          en: "Sorry, let me rephrase — I need your help with the report, not the presentation",
          bn: "সরি, আবার বলি — রিপোর্ট নিয়ে তোমার সাহায্য দরকার, প্রেজেন্টেশন নয়",
          pronunciation_bn: "সরি, লেট মি রিফ্রেজ — আই নিড ইউর হেল্প উইথ দ্য রিপোর্ট, নট দ্য প্রেজেন্টেশন",
          slotValues: { BETTER_VERSION: "I need your help with the report, not the presentation" },
          topicArea: "work",
          stage: 2,
          miniStory: {
            situation_bn: "সহকর্মীকে সাহায্য চাইছো, কোন কাজে লাগবে সেটা স্পষ্ট করছো",
            icon: "💼"
          }
        },
        {
          en: "Sorry, let me rephrase — it hurts when I walk, not when I sit",
          bn: "সরি, আবার বলি — হাঁটলে ব্যথা হয়, বসলে না",
          pronunciation_bn: "সরি, লেট মি রিফ্রেজ — ইট হার্টস হোয়েন আই ওয়াক, নট হোয়েন আই সিট",
          slotValues: { BETTER_VERSION: "it hurts when I walk, not when I sit" },
          topicArea: "health",
          stage: 2
        },
        {
          en: "Sorry, let me rephrase — the class starts at 9 sharp, so come 10 minutes early",
          bn: "সরি, আবার বলি — ক্লাস ঠিক ৯টায় শুরু, তাই ১০ মিনিট আগে আসবে",
          pronunciation_bn: "সরি, লেট মি রিফ্রেজ — দ্য ক্লাস স্টার্টস অ্যাট নাইন শার্প, সো কাম টেন মিনিটস আর্লি",
          slotValues: { BETTER_VERSION: "the class starts at 9 sharp, so come 10 minutes early" },
          topicArea: "education",
          stage: 2
        },
        {
          en: "Sorry, let me rephrase — the fare is 50 taka to Shahbag, 80 taka to Farmgate",
          bn: "সরি, আবার বলি — শাহবাগ পর্যন্ত ভাড়া ৫০ টাকা, ফার্মগেট পর্যন্ত ৮০ টাকা",
          pronunciation_bn: "সরি, লেট মি রিফ্রেজ — দ্য ফেয়ার ইজ ফিফটি টাকা টু শাহবাগ, এইটি টাকা টু ফার্মগেট",
          slotValues: { BETTER_VERSION: "the fare is 50 taka to Shahbag, 80 taka to Farmgate" },
          topicArea: "transport",
          stage: 2
        },
        {
          en: "Sorry, let me rephrase — we need to pay the rent by the 5th, not the 15th",
          bn: "সরি, আবার বলি — ৫ তারিখের মধ্যে ভাড়া দিতে হবে, ১৫ তারিখ নয়",
          pronunciation_bn: "সরি, লেট মি রিফ্রেজ — উই নিড টু পে দ্য রেন্ট বাই দ্য ফিফথ, নট দ্য ফিফটিনথ",
          slotValues: { BETTER_VERSION: "we need to pay the rent by the 5th, not the 15th" },
          topicArea: "finance",
          stage: 2,
          miniStory: {
            situation_bn: "রুমমেটকে ভাড়ার তারিখ বলছো, ভুল তারিখ বলে ফেলেছ",
            icon: "🏠"
          }
        },
        {
          en: "Sorry, let me rephrase — we should finish this today so we can start the next one tomorrow",
          bn: "সরি, আবার বলি — আমাদের আজ এটা শেষ করা উচিত যাতে কাল নতুন টা শুরু করতে পারি",
          pronunciation_bn: "সরি, লেট মি রিফ্রেজ — উই শুড ফিনিশ দিস টুডে সো উই ক্যান স্টার্ট দ্য নেক্সট ওয়ান টুমরো",
          slotValues: { BETTER_VERSION: "we should finish this today so we can start the next one tomorrow" },
          topicArea: "work",
          stage: 3
        },
        {
          en: "Sorry, let me rephrase — I've had this fever for 3 days, and it gets worse at night",
          bn: "সরি, আবার বলি — ৩ দিন ধরে জ্বর আছে, আর রাতে বেশি হয়",
          pronunciation_bn: "সরি, লেট মি রিফ্রেজ — আইভ হ্যাড দিস ফিভার ফর থ্রি ডেজ, অ্যান্ড ইট গেটস ওয়ার্স অ্যাট নাইট",
          slotValues: { BETTER_VERSION: "I've had this fever for 3 days, and it gets worse at night" },
          topicArea: "health",
          stage: 3,
          miniStory: {
            situation_bn: "ডাক্তারকে জ্বরের বিস্তারিত বলছো, আরও পরিষ্কারভাবে",
            icon: "🏥"
          }
        },
        {
          en: "Sorry, let me rephrase — the shop closes at 8 PM on weekdays, 9 PM on weekends",
          bn: "সরি, আবার বলি — সপ্তাহের দিনে দোকান রাত ৮টায় বন্ধ, শনি-রবি ৯টায়",
          pronunciation_bn: "সরি, লেট মি রিফ্রেজ — দ্য শপ ক্লোজেস অ্যাট এইট পিএম অন উইকডেজ, নাইন পিএম অন উইকএন্ডস",
          slotValues: { BETTER_VERSION: "the shop closes at 8 PM on weekdays, 9 PM on weekends" },
          topicArea: "shopping",
          stage: 3
        },
        {
          en: "Sorry, let me rephrase — Jumma prayer starts at 1 PM, so we should leave by 12:30",
          bn: "সরি, আবার বলি — জুম্মার নামাজ দুপুর ১টায় শুরু, তাই সাড়ে ১২টায় বের হওয়া উচিত",
          pronunciation_bn: "সরি, লেট মি রিফ্রেজ — জুম্মা প্রেয়ার স্টার্টস অ্যাট ওয়ান পিএম, সো উই শুড লিভ বাই টুয়েলভ থার্টি",
          slotValues: { BETTER_VERSION: "Jumma prayer starts at 1 PM, so we should leave by 12:30" },
          topicArea: "religion",
          stage: 3
        },
        {
          en: "Sorry, let me rephrase — I work night shift, 8 PM to 4 AM",
          bn: "সরি, আবার বলি — আমি রাতের শিফটে কাজ করি, রাত ৮টা থেকে ভোর ৪টা",
          pronunciation_bn: "সরি, লেট মি রিফ্রেজ — আই ওয়ার্ক নাইট শিফট, এইট পিএম টু ফোর এএম",
          slotValues: { BETTER_VERSION: "I work night shift, 8 PM to 4 AM" },
          topicArea: "work",
          stage: 3,
          miniStory: {
            situation_bn: "নতুন পরিচিত কাউকে কাজের সময় বলছো, প্রথমে অস্পষ্ট ছিল",
            icon: "🌙"
          }
        }
      ]
    },
    {
      id: "H13.6",
      patternName: "Or rather",
      patternName_bn: "মানে বলতে চাইছি বলা",
      concept_bn: "মানে বলতে চাইছি",
      formula: "[STATEMENT], or rather, [CORRECTION]",
      formula_bn: "[কথা], মানে বলতে চাইছি, [সঠিক কথা]",
      formulaPronunciation_bn: "[কথা], অর র‍্যাদার, [সঠিক কথা]",
      usageNote: "Use 'or rather' when you want to correct or make more precise what you just said. It's more elegant than 'I mean' and shows you're refining your statement. Common in thoughtful conversation, writing, or when you want to sound more sophisticated. The commas around 'or rather' are important.",
      usageNote_bn: "যখন তুমি এইমাত্র যা বলেছ তা ঠিক করতে বা আরও সুনির্দিষ্ট করতে চাও তখন 'অর র‍্যাদার' ব্যবহার করো। এটা 'আই মিন' থেকে একটু বেশি সুন্দর এবং দেখায় যে তুমি কথাটা আরও পরিমার্জন করছো। ভাবপূর্ণ কথোপকথনে, লেখায়, বা একটু উন্নত শোনাতে চাইলে এটা ভালো। 'অর র‍্যাদার' এর দুইপাশে কমা দেওয়া গুরুত্বপূর্ণ।",
      difficulty: "intermediate",
      formality: "casual",
      banglaStructureMap: "বাংলা: সে ভালো, মানে বলতে চাইছি, চমৎকার → English: He's good, or rather, excellent",
      bridgeRuleIds: ["BR1", "BR7"],
      conversionSteps: {
        banglaThought: "সে ভালো, মানে বলতে চাইছি, চমৎকার",
        steps: [
          {
            step_bn: "প্রথমে সাধারণ কথা বলো",
            result: "He's good"
          },
          {
            step_bn: "তারপর কমা দিয়ে 'অর র‍্যাদার' যোগ করো",
            result: "He's good, or rather"
          },
          {
            step_bn: "শেষে আরেকটা কমা দিয়ে আরও নির্দিষ্ট/ভালো কথা বলো",
            result: "He's good, or rather, excellent"
          }
        ],
        finalResult: "He's good, or rather, excellent",
        finalResult_bn: "সে ভালো, মানে বলতে চাইছি, চমৎকার"
      },
      commonMistakes: [
        {
          wrong: "He's good or rather excellent (কমা ছাড়া)",
          correct: "He's good, or rather, excellent",
          explanation_bn: "'অর র‍্যাদার' এর আগে এবং পরে উভয় জায়গায় কমা লাগবে"
        },
        {
          wrong: "He's good, rather, excellent",
          correct: "He's good, or rather, excellent",
          explanation_bn: "'র‍্যাদার' একা বলা যায় না — সবসময় 'অর র‍্যাদার' বলতে হবে"
        },
        {
          wrong: "He's good, or rather than, excellent",
          correct: "He's good, or rather, excellent",
          explanation_bn: "'অর র‍্যাদার দ্যান' নয় — শুধু 'অর র‍্যাদার' বলতে হবে"
        }
      ],
      simpleRules: [
        {
          rule_bn: "যখন একটু আগে বলা কথা আরও নির্দিষ্ট করতে চাও তখন 'অর র‍্যাদার' ব্যবহার করো",
          example: "She's talented, or rather, exceptional"
        },
        {
          rule_bn: "'অর র‍্যাদার' এর আগে এবং পরে কমা দিতে হবে",
          example: "It's expensive, or rather, overpriced"
        },
        {
          rule_bn: "এটা 'আই মিন' থেকে একটু বেশি মার্জিত — চিন্তাভাবনা করে বলার সময় ভালো",
          example: "The project is difficult, or rather, challenging"
        }
      ],
      usageSituations: [
        {
          situation_bn: "কাউকে বর্ণনা করছো, আরও সঠিক শব্দ খুঁজছো",
          situation_en: "Describing someone, finding more accurate word",
          exampleSentence: "He's smart, or rather, brilliant",
          exampleSentence_bn: "সে বুদ্ধিমান, মানে বলতে চাইছি, প্রতিভাবান"
        },
        {
          situation_bn: "কিছুর মূল্যায়ন করছো, আরও নির্দিষ্ট হতে চাও",
          situation_en: "Evaluating something, want to be more specific",
          exampleSentence: "The food is good, or rather, delicious",
          exampleSentence_bn: "খাবার ভালো, মানে বলতে চাইছি, সুস্বাদু"
        },
        {
          situation_bn: "সময় বা পরিমাণ বলছো, আরও সঠিক করছো",
          situation_en: "Stating time or amount, being more precise",
          exampleSentence: "It takes an hour, or rather, an hour and a half",
          exampleSentence_bn: "এক ঘণ্টা লাগে, মানে বলতে চাইছি, দেড় ঘণ্টা"
        }
      ],
      sentenceBuilding: [
        {
          previousPatternId: "A1.1",
          previousFormula: "I want [ITEM]",
          previousFormula_bn: "আমি [জিনিস] চাই",
          combined: "I want tea, or rather, coffee",
          combined_bn: "আমি চা চাই, মানে বলতে চাইছি, কফি"
        },
        {
          previousPatternId: "A1.7",
          previousFormula: "This is [DESCRIPTION]",
          previousFormula_bn: "এটা [বর্ণনা]",
          combined: "This is good, or rather, excellent work",
          combined_bn: "এটা ভালো, মানে বলতে চাইছি, চমৎকার কাজ"
        }
      ],
      memoryTrick_bn: "বাংলায় যেমন বলি 'মানে বলতে চাইছি...' কথা সংশোধন করতে, ইংরেজিতে 'অর র‍্যাদার' বলো — মনে রাখো দুইপাশে কমা",
      chunks: [
        {
          en: "or rather",
          bn: "মানে বলতে চাইছি",
          pronunciation_bn: "অর র‍্যাদার"
        },
        {
          en: ", or rather,",
          bn: ", মানে বলতে চাইছি,",
          pronunciation_bn: ", অর র‍্যাদার,"
        },
        {
          en: "or more precisely",
          bn: "বা আরও সঠিকভাবে",
          pronunciation_bn: "অর মোর প্রিসাইসলি"
        }
      ],
      wordMap: {
        bn_sentence: "সে ভালো, মানে বলতে চাইছি, চমৎকার",
        en_sentence: "He's good, or rather, excellent",
        mappings: [
          { bn_word: "সে", en_word: "He's", type: "direct", bridgeRuleId: "BR1" },
          { bn_word: "ভালো", en_word: "good", type: "direct" },
          { bn_word: "মানে বলতে চাইছি", en_word: "or rather", type: "split" },
          { bn_word: "চমৎকার", en_word: "excellent", type: "direct" }
        ]
      },
      answerTemplates: [
        {
          situation_bn: "তোমার পরিমার্জিত কথা শুনে কেউ সম্মত হলো",
          question: "How do people respond to your refined statement?",
          question_bn: "তোমার পরিমার্জিত কথায় লোকে কী বলে?",
          answerFormula: "Yes, exactly / That's more accurate / I agree",
          answerFormula_bn: "হ্যাঁ, ঠিক / এটা আরও সঠিক / আমিও তাই মনে করি",
          pronunciation_bn: "ইয়েস, এক্স্যাক্টলি / দ্যাটস মোর অ্যাকিউরেট / আই এগ্রি",
          examples: [
            {
              answer: "Yes, exactly. Excellent is the right word",
              answer_bn: "হ্যাঁ, ঠিক। চমৎকার সঠিক শব্দ",
              pronunciation_bn: "ইয়েস, এক্স্যাক্টলি। এক্সিলেন্ট ইজ দ্য রাইট ওয়ার্ড"
            },
            {
              answer: "That's more accurate. He is brilliant",
              answer_bn: "এটা আরও সঠিক। সে প্রতিভাবান",
              pronunciation_bn: "দ্যাটস মোর অ্যাকিউরেট। হি ইজ ব্রিলিয়ান্ট"
            },
            {
              answer: "I agree. The food is delicious",
              answer_bn: "আমিও তাই মনে করি। খাবার সুস্বাদু",
              pronunciation_bn: "আই এগ্রি। দ্য ফুড ইজ ডেলিশাস"
            }
          ]
        },
        {
          situation_bn: "কেউ যদি তোমার মূল্যায়নে সহমত না হয়",
          question: "Someone disagrees with your assessment",
          question_bn: "কেউ তোমার মূল্যায়নে একমত না হলে",
          answerFormula: "I don't think so / Maybe / Not really",
          answerFormula_bn: "আমি তা মনে করি না / হয়তো / আসলে তা নয়",
          pronunciation_bn: "আই ডোন্ট থিংক সো / মেবি / নট রিয়েলি",
          examples: [
            {
              answer: "I don't think so. He's good but not excellent",
              answer_bn: "আমি তা মনে করি না। সে ভালো কিন্তু চমৎকার নয়",
              pronunciation_bn: "আই ডোন্ট থিংক সো। হিজ গুড বাট নট এক্সিলেন্ট"
            },
            {
              answer: "Maybe. I think it's just okay",
              answer_bn: "হয়তো। আমার মনে হয় এটা শুধু মোটামুটি",
              pronunciation_bn: "মেবি। আই থিংক ইটস জাস্ট ওকে"
            },
            {
              answer: "Not really. It's expensive but worth it",
              answer_bn: "আসলে তা নয়। এটা দামি কিন্তু মূল্যবান",
              pronunciation_bn: "নট রিয়েলি। ইটস এক্সপেনসিভ বাট ওয়ার্থ ইট"
            }
          ]
        },
        {
          situation_bn: "কেউ যদি তোমার বর্ণনা সম্পর্কে জিজ্ঞাসা করে",
          question: "Someone asks about your description",
          question_bn: "কেউ তোমার বর্ণনা সম্পর্কে জানতে চাইলে",
          answerFormula: "Really? / What makes you say that?",
          answerFormula_bn: "সত্যিই? / কেন তাই মনে করো?",
          pronunciation_bn: "রিয়েলি? / হোয়াট মেক্স ইউ সে দ্যাট?",
          examples: [
            {
              answer: "Really? Is he that good?",
              answer_bn: "সত্যিই? সে এতটা ভালো?",
              pronunciation_bn: "রিয়েলি? ইজ হি দ্যাট গুড?"
            },
            {
              answer: "What makes you say that? Give me an example",
              answer_bn: "কেন তাই মনে করো? একটা উদাহরণ দাও",
              pronunciation_bn: "হোয়াট মেক্স ইউ সে দ্যাট? গিভ মি অ্যান এগজাম্পল"
            },
            {
              answer: "Excellent? Tell me more about it",
              answer_bn: "চমৎকার? এটা সম্পর্কে আরও বলো",
              pronunciation_bn: "এক্সিলেন্ট? টেল মি মোর অ্যাবাউট ইট"
            }
          ]
        }
      ],
      variations: [
        {
          variant: "quality_upgrade",
          label: "Upgrading quality description",
          label_bn: "মানের বর্ণনা উন্নত করা",
          formula: "[BASIC], or rather, [BETTER QUALITY]",
          formula_bn: "[সাধারণ], মানে বলতে চাইছি, [আরও ভালো মান]",
          examples: [
            {
              en: "He's good, or rather, excellent",
              bn: "সে ভালো, মানে বলতে চাইছি, চমৎকার",
              pronunciation_bn: "হিজ গুড, অর র‍্যাদার, এক্সিলেন্ট",
              slotValues: { STATEMENT: "He's good", CORRECTION: "excellent" },
              stage: 1
            },
            {
              en: "The food is good, or rather, delicious",
              bn: "খাবার ভালো, মানে বলতে চাইছি, সুস্বাদু",
              pronunciation_bn: "দ্য ফুড ইজ গুড, অর র‍্যাদার, ডেলিশাস",
              slotValues: { STATEMENT: "The food is good", CORRECTION: "delicious" },
              stage: 1
            },
            {
              en: "She's talented, or rather, exceptional",
              bn: "সে প্রতিভাবান, মানে বলতে চাইছি, অসাধারণ",
              pronunciation_bn: "শিজ ট্যালেন্টেড, অর র‍্যাদার, এক্সেপশনাল",
              slotValues: { STATEMENT: "She's talented", CORRECTION: "exceptional" },
              stage: 2
            }
          ]
        },
        {
          variant: "precision_refinement",
          label: "Making more precise",
          label_bn: "আরও নির্দিষ্ট করা",
          formula: "[APPROXIMATE], or rather, [PRECISE]",
          formula_bn: "[আনুমানিক], মানে বলতে চাইছি, [নির্দিষ্ট]",
          examples: [
            {
              en: "It takes an hour, or rather, an hour and a half",
              bn: "এক ঘণ্টা লাগে, মানে বলতে চাইছি, দেড় ঘণ্টা",
              pronunciation_bn: "ইট টেক্স অ্যান আওয়ার, অর র‍্যাদার, অ্যান আওয়ার অ্যান্ড এ হাফ",
              slotValues: { STATEMENT: "It takes an hour", CORRECTION: "an hour and a half" },
              stage: 2
            },
            {
              en: "It costs 500 taka, or rather, 550 taka",
              bn: "এটা ৫০০ টাকা, মানে বলতে চাইছি, ৫৫০ টাকা",
              pronunciation_bn: "ইট কস্টস ফাইভ হান্ড্রেড টাকা, অর র‍্যাদার, ফাইভ ফিফটি টাকা",
              slotValues: { STATEMENT: "It costs 500 taka", CORRECTION: "550 taka" },
              stage: 1
            },
            {
              en: "He's coming today, or rather, this evening",
              bn: "সে আজ আসছে, মানে বলতে চাইছি, আজ সন্ধ্যায়",
              pronunciation_bn: "হিজ কামিং টুডে, অর র‍্যাদার, দিস ইভনিং",
              slotValues: { STATEMENT: "He's coming today", CORRECTION: "this evening" },
              stage: 2
            }
          ]
        },
        {
          variant: "negative_to_worse",
          label: "Making negative stronger",
          label_bn: "নেতিবাচক কথা আরও জোরালো করা",
          formula: "[NEGATIVE], or rather, [STRONGER NEGATIVE]",
          formula_bn: "[নেতিবাচক], মানে বলতে চাইছি, [আরও জোরালো নেতিবাচক]",
          examples: [
            {
              en: "It's expensive, or rather, overpriced",
              bn: "এটা দামি, মানে বলতে চাইছি, বেশি দামি",
              pronunciation_bn: "ইটস এক্সপেনসিভ, অর র‍্যাদার, ওভারপ্রাইসড",
              slotValues: { STATEMENT: "It's expensive", CORRECTION: "overpriced" },
              stage: 2
            },
            {
              en: "The project is difficult, or rather, challenging",
              bn: "প্রজেক্ট কঠিন, মানে বলতে চাইছি, চ্যালেঞ্জিং",
              pronunciation_bn: "দ্য প্রজেক্ট ইজ ডিফিকাল্ট, অর র‍্যাদার, চ্যালেঞ্জিং",
              slotValues: { STATEMENT: "The project is difficult", CORRECTION: "challenging" },
              stage: 3
            },
            {
              en: "He's late, or rather, he forgot completely",
              bn: "সে দেরি করছে, মানে বলতে চাইছি, পুরো ভুলে গেছে",
              pronunciation_bn: "হিজ লেট, অর র‍্যাদার, হি ফরগট কমপ্লিটলি",
              slotValues: { STATEMENT: "He's late", CORRECTION: "he forgot completely" },
              stage: 3
            }
          ]
        }
      ],
      dialogueChains: [
        {
          id: "H13.6-dialogue-1",
          title_bn: "রেস্তোরাঁয় খাবার নিয়ে আলোচনা",
          title_en: "Discussing food at restaurant",
          situation_bn: "বন্ধুর সাথে খাবারের মান নিয়ে কথা হচ্ছে",
          icon: "🍽️",
          turns: [
            {
              speaker_bn: "বন্ধু",
              en: "How's the biryani?",
              bn: "বিরিয়ানি কেমন?",
              pronunciation_bn: "হাউজ দ্য বিরিয়ানি?",
              patternId: "G2.3"
            },
            {
              speaker_bn: "তুমি",
              en: "It's good, or rather, delicious",
              bn: "ভালো, মানে বলতে চাইছি, সুস্বাদু",
              pronunciation_bn: "ইটস গুড, অর র‍্যাদার, ডেলিশাস",
              patternId: "H13.6"
            },
            {
              speaker_bn: "বন্ধু",
              en: "Really? That good?",
              bn: "সত্যিই? এতটা ভালো?",
              pronunciation_bn: "রিয়েলি? দ্যাট গুড?",
              patternId: "G2.23"
            },
            {
              speaker_bn: "তুমি",
              en: "Yes, you should try it",
              bn: "হ্যাঁ, তোমার চেষ্টা করা উচিত",
              pronunciation_bn: "ইয়েস, ইউ শুড ট্রাই ইট",
              patternId: "A1.4"
            },
            {
              speaker_bn: "বন্ধু",
              en: "Okay, I'll order one plate",
              bn: "আচ্ছা, আমি এক প্লেট অর্ডার দেবো",
              pronunciation_bn: "ওকে, আইল অর্ডার ওয়ান প্লেট",
              patternId: "A1.3"
            }
          ],
          patternsUsed: ["G2.3", "H13.6", "G2.23", "A1.4", "A1.3"]
        }
      ],
      slots: [
        {
          name: "STATEMENT",
          description: "The initial statement you want to refine",
          description_bn: "যে প্রাথমিক কথা তুমি পরিমার্জন করতে চাও",
          acceptedTypes: ["quality description", "quantity", "time", "opinion"],
          examples: [
            "He's good",
            "It takes an hour",
            "It's expensive",
            "The food is good"
          ]
        },
        {
          name: "CORRECTION",
          description: "The more precise or stronger version",
          description_bn: "আরও নির্দিষ্ট বা জোরালো সংস্করণ",
          acceptedTypes: ["better quality", "precise number/time", "stronger adjective"],
          examples: [
            "excellent",
            "an hour and a half",
            "overpriced",
            "delicious"
          ]
        }
      ],
      examples: [
        {
          en: "He's good, or rather, excellent",
          bn: "সে ভালো, মানে বলতে চাইছি, চমৎকার",
          pronunciation_bn: "হিজ গুড, অর র‍্যাদার, এক্সিলেন্ট",
          slotValues: { STATEMENT: "He's good", CORRECTION: "excellent" },
          topicArea: "social_interaction",
          stage: 1,
          miniStory: {
            situation_bn: "সহকর্মীর কাজ সম্পর্কে বসকে বলছো, আরও সঠিক শব্দ খুঁজছো",
            icon: "💼"
          }
        },
        {
          en: "The food is good, or rather, delicious",
          bn: "খাবার ভালো, মানে বলতে চাইছি, সুস্বাদু",
          pronunciation_bn: "দ্য ফুড ইজ গুড, অর র‍্যাদার, ডেলিশাস",
          slotValues: { STATEMENT: "The food is good", CORRECTION: "delicious" },
          topicArea: "food",
          stage: 1
        },
        {
          en: "It takes an hour, or rather, an hour and a half",
          bn: "এক ঘণ্টা লাগে, মানে বলতে চাইছি, দেড় ঘণ্টা",
          pronunciation_bn: "ইট টেক্স অ্যান আওয়ার, অর র‍্যাদার, অ্যান আওয়ার অ্যান্ড এ হাফ",
          slotValues: { STATEMENT: "It takes an hour", CORRECTION: "an hour and a half" },
          topicArea: "transport",
          stage: 1
        },
        {
          en: "It costs 500 taka, or rather, 550 taka",
          bn: "এটা ৫০০ টাকা, মানে বলতে চাইছি, ৫৫০ টাকা",
          pronunciation_bn: "ইট কস্টস ফাইভ হান্ড্রেড টাকা, অর র‍্যাদার, ফাইভ ফিফটি টাকা",
          slotValues: { STATEMENT: "It costs 500 taka", CORRECTION: "550 taka" },
          topicArea: "shopping",
          stage: 1
        },
        {
          en: "He's coming today, or rather, this evening",
          bn: "সে আজ আসছে, মানে বলতে চাইছি, আজ সন্ধ্যায়",
          pronunciation_bn: "হিজ কামিং টুডে, অর র‍্যাদার, দিস ইভনিং",
          slotValues: { STATEMENT: "He's coming today", CORRECTION: "this evening" },
          topicArea: "social_interaction",
          stage: 1,
          miniStory: {
            situation_bn: "পরিবারকে অতিথি আসার সময় জানাচ্ছো, আরও নির্দিষ্ট করছো",
            icon: "🏠"
          }
        },
        {
          en: "She's talented, or rather, exceptional",
          bn: "সে প্রতিভাবান, মানে বলতে চাইছি, অসাধারণ",
          pronunciation_bn: "শিজ ট্যালেন্টেড, অর র‍্যাদার, এক্সেপশনাল",
          slotValues: { STATEMENT: "She's talented", CORRECTION: "exceptional" },
          topicArea: "work",
          stage: 2,
          miniStory: {
            situation_bn: "নতুন সহকর্মী সম্পর্কে বসকে বলছো, তার দক্ষতা বর্ণনা করছো",
            icon: "💼"
          }
        },
        {
          en: "It's expensive, or rather, overpriced",
          bn: "এটা দামি, মানে বলতে চাইছি, বেশি দামি",
          pronunciation_bn: "ইটস এক্সপেনসিভ, অর র‍্যাদার, ওভারপ্রাইসড",
          slotValues: { STATEMENT: "It's expensive", CORRECTION: "overpriced" },
          topicArea: "shopping",
          stage: 2
        },
        {
          en: "The project is difficult, or rather, challenging",
          bn: "প্রজেক্ট কঠিন, মানে বলতে চাইছি, চ্যালেঞ্জিং",
          pronunciation_bn: "দ্য প্রজেক্ট ইজ ডিফিকাল্ট, অর র‍্যাদার, চ্যালেঞ্জিং",
          slotValues: { STATEMENT: "The project is difficult", CORRECTION: "challenging" },
          topicArea: "work",
          stage: 2
        },
        {
          en: "He's smart, or rather, brilliant",
          bn: "সে বুদ্ধিমান, মানে বলতে চাইছি, প্রতিভাবান",
          pronunciation_bn: "হিজ স্মার্ট, অর র‍্যাদার, ব্রিলিয়ান্ট",
          slotValues: { STATEMENT: "He's smart", CORRECTION: "brilliant" },
          topicArea: "education",
          stage: 2
        },
        {
          en: "The class is hard, or rather, demanding",
          bn: "ক্লাস কঠিন, মানে বলতে চাইছি, দাবিদার",
          pronunciation_bn: "দ্য ক্লাস ইজ হার্ড, অর র‍্যাদার, ডিমান্ডিং",
          slotValues: { STATEMENT: "The class is hard", CORRECTION: "demanding" },
          topicArea: "education",
          stage: 2,
          miniStory: {
            situation_bn: "সহপাঠীকে নতুন ক্লাস সম্পর্কে বলছো, কত কঠিন সেটা বোঝাচ্ছো",
            icon: "📚"
          }
        },
        {
          en: "He's late, or rather, he forgot completely",
          bn: "সে দেরি করছে, মানে বলতে চাইছি, পুরো ভুলে গেছে",
          pronunciation_bn: "হিজ লেট, অর র‍্যাদার, হি ফরগট কমপ্লিটলি",
          slotValues: { STATEMENT: "He's late", CORRECTION: "he forgot completely" },
          topicArea: "social_interaction",
          stage: 3
        },
        {
          en: "The shop is busy, or rather, packed with customers",
          bn: "দোকান ব্যস্ত, মানে বলতে চাইছি, ক্রেতায় ভর্তি",
          pronunciation_bn: "দ্য শপ ইজ বিজি, অর র‍্যাদার, প্যাকড উইথ কাস্টমারস",
          slotValues: { STATEMENT: "The shop is busy", CORRECTION: "packed with customers" },
          topicArea: "shopping",
          stage: 3,
          miniStory: {
            situation_bn: "বন্ধুকে বাজারের অবস্থা বলছো, কত ভিড় সেটা বোঝাচ্ছো",
            icon: "🛒"
          }
        },
        {
          en: "My shift is long, or rather, exhausting",
          bn: "আমার শিফট লম্বা, মানে বলতে চাইছি, ক্লান্তিকর",
          pronunciation_bn: "মাই শিফট ইজ লং, অর র‍্যাদার, এক্সহস্টিং",
          slotValues: { STATEMENT: "My shift is long", CORRECTION: "exhausting" },
          topicArea: "work",
          stage: 3
        },
        {
          en: "The medicine is strong, or rather, very effective",
          bn: "ওষুধটা শক্তিশালী, মানে বলতে চাইছি, খুব কার্যকর",
          pronunciation_bn: "দ্য মেডিসিন ইজ স্ট্রং, অর র‍্যাদার, ভেরি ইফেক্টিভ",
          slotValues: { STATEMENT: "The medicine is strong", CORRECTION: "very effective" },
          topicArea: "health",
          stage: 3,
          miniStory: {
            situation_bn: "ফার্মাসিস্টকে ওষুধ সম্পর্কে জিজ্ঞাসা করছো, কত ভালো কাজ করে",
            icon: "💊"
          }
        },
        {
          en: "The bus fare increased, or rather, doubled",
          bn: "বাসের ভাড়া বেড়েছে, মানে বলতে চাইছি, দ্বিগুণ হয়েছে",
          pronunciation_bn: "দ্য বাস ফেয়ার ইনক্রিজড, অর র‍্যাদার, ডাবলড",
          slotValues: { STATEMENT: "The bus fare increased", CORRECTION: "doubled" },
          topicArea: "transport",
          stage: 3
        }
      ]
    }
  ]
};
