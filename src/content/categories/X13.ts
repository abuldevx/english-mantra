import { PatternCategory } from "@/types/pattern";

export const categoryX13: PatternCategory = {
  id: "X13",
  slug: "connected-speech",
  name: "Connected Speech — How English Really Sounds",
  name_bn: "আসল ইংরেজি উচ্চারণ — দ্রুত বলার ধরন",
  description: "Understand how English words blend together in fast speech — 'Did you eat?' becomes 'Djeet?'",
  description_bn: "ইংরেজিতে দ্রুত কথা বলার সময় শব্দ একসাথে মিশে যায়। 'Did you eat?' হয়ে যায় 'Djeet?' — এই ধরনগুলো শেখো।",
  icon: "🎧",
  group: "X",
  groupName: "Common Mistakes & Awareness",
  groupName_bn: "ভুল এড়ানো ও সচেতনতা",
  difficulty: "advanced",
  patterns: [
    {
      id: "X13.1",
      patternName: "Djuwanna [ACTION]? — Do you want to [ACTION]?",
      patternName_bn: "জুওয়ানা — তুমি কি চাও",
      formula: "Djuwanna [ACTION]?",
      formula_bn: "জুওয়ানা [কাজ]?",
      concept_bn: "জুওয়ানা",
      formulaPronunciation_bn: "জুওয়ানা [কাজ]?",
      formality: "casual",
      difficulty: "advanced",
      usageNote: "In fast casual speech, 'Do you want to' sounds like 'Djuwanna' (জুওয়ানা). Native speakers blend these words together. Listen for this sound in movies, conversations.",
      usageNote_bn: "দ্রুত কথা বলার সময় 'Do you want to' শোনায় 'জুওয়ানা'। নেটিভরা এভাবেই বলে। মুভি, কথাবার্তায় এই সাউন্ড শোনো।",
      banglaStructureMap: "বাংলা: তুমি কি চাও? → English: Do you want to? → Fast: Djuwanna?",
      bridgeRuleIds: ["BR1", "BR5"],
      conversionSteps: {
        banglaThought: "তুমি বাংলায় বলো: 'তুমি কি যেতে চাও?'",
        steps: [
          { step_bn: "ফুল ইংরেজি ভাবো: 'Do you want to go?'", result: "Do you want to go?" },
          { step_bn: "দ্রুত বলো — শব্দ মিশিয়ে দাও", result: "Djuwanna go?" },
          { step_bn: "'Do you want to' মিশে হয়ে যায় 'Djuwanna'", result: "Djuwanna go?" }
        ],
        finalResult: "Djuwanna go?",
        finalResult_bn: "তুমি কি যেতে চাও?"
      },
      commonMistakes: [
        { wrong: "Do you want to go? (আলাদা আলাদা)", correct: "Djuwanna go?", explanation_bn: "নেটিভরা আলাদা করে বলে না, একসাথে মিশিয়ে বলে" },
        { wrong: "'ডু ইউ ওয়ান্ট টু' — এভাবে স্লো বলা", correct: "'জুওয়ানা' — দ্রুত বলো", explanation_bn: "দ্রুত কথায় এটা 'জুওয়ানা' শোনায়" },
        { wrong: "শুধু ফুল ফর্ম মনে রাখা", correct: "দুইটা ফর্ম জানো — ফুল আর ফাস্ট", explanation_bn: "মুভিতে ফাস্ট ফর্ম শুনবে, তুমি দুইটাই বুঝতে হবে" }
      ],
      simpleRules: [
        { rule_bn: "নেটিভরা 'Do you want to' বলে 'জুওয়ানা' মতো", example: "Djuwanna go?" },
        { rule_bn: "শব্দগুলো আলাদা নয়, একসাথে মিশে যায়", example: "Djuwanna eat something?" },
        { rule_bn: "মুভিতে শুনবে 'জুওয়ানা', তুমি বুঝবে 'Do you want to'", example: "Djuwanna try this?" }
      ],
      usageSituations: [
        { situation_bn: "বন্ধু জিজ্ঞেস করছে: খেতে যাবে নাকি?", situation_en: "Friend asking if you want to go eat", exampleSentence: "Djuwanna go eat?", exampleSentence_bn: "খেতে যাবে?" },
        { situation_bn: "রিকশায় — চালক বলছে: শর্টকাট যাবে?", situation_en: "Rickshaw driver offering a shortcut", exampleSentence: "Djuwanna take the shortcut?", exampleSentence_bn: "শর্টকাট যাবে?" },
        { situation_bn: "অফিসে — কলিগ বলছে: চা খাবে?", situation_en: "Colleague offering tea at office", exampleSentence: "Djuwanna have tea?", exampleSentence_bn: "চা খাবে?" }
      ],
      sentenceBuilding: [
        { previousPatternId: "A1.1", previousFormula: "I want [THING]", previousFormula_bn: "আমি [জিনিস] চাই", combined: "Djuwanna go? I'm hungry.", combined_bn: "যেতে চাও? আমি খিদে পেয়েছি।" },
        { previousPatternId: "B3.2", previousFormula: "Come with [PERSON]", previousFormula_bn: "[ব্যক্তি]-র সাথে আসো", combined: "Djuwanna come with me?", combined_bn: "আমার সাথে আসবে?" }
      ],
      memoryTrick_bn: "'জুওয়ানা' মনে রাখো — মনে করো রিকশাওয়ালা দ্রুত বলছে 'শর্টকাট যাওয়ানা চাও?'",
      chunks: [
        { en: "Djuwanna go", bn: "যেতে চাও?", pronunciation_bn: "জুওয়ানা গো" },
        { en: "Djuwanna eat", bn: "খেতে চাও?", pronunciation_bn: "জুওয়ানা ঈট" },
        { en: "Djuwanna see", bn: "দেখতে চাও?", pronunciation_bn: "জুওয়ানা সি" }
      ],
      answerTemplates: [
        { situation_bn: "হ্যাঁ বলার সহজ উপায়", question: "Djuwanna go?", question_bn: "যেতে চাও?", answerFormula: "Yeah, let's [ACTION]", answerFormula_bn: "হ্যাঁ, চলো [কাজ]", pronunciation_bn: "ইয়া, লেট্স গো", examples: [{ answer: "Yeah, let's go", answer_bn: "হ্যাঁ, চলো যাই", pronunciation_bn: "ইয়া, লেট্স গো" }] },
        { situation_bn: "না বলার নরমাল উপায়", question: "Djuwanna go?", question_bn: "যেতে চাও?", answerFormula: "Nah, I'm good", answerFormula_bn: "না, ঠিক আছি", pronunciation_bn: "না, আইম গুড", examples: [{ answer: "Nah, I'm good", answer_bn: "না, আমি ঠিক আছি", pronunciation_bn: "না, আইম গুড" }] },
        { situation_bn: "পরে হবে বলার উপায়", question: "Djuwanna go?", question_bn: "যেতে চাও?", answerFormula: "Maybe later", answerFormula_bn: "হয়তো পরে", pronunciation_bn: "মেইবি লেটার", examples: [{ answer: "Maybe later", answer_bn: "হয়তো পরে", pronunciation_bn: "মেইবি লেটার" }] }
      ],
      variations: [
        {
          variant: "past",
          label: "Djuwanna [ACTION] yesterday?",
          label_bn: "গতকাল চেয়েছিলে?",
          formula: "Djuwanna [ACTION] yesterday?",
          formula_bn: "জুওয়ানা [কাজ] গতকাল?",
          examples: [
            { en: "Djuwanna go yesterday?", bn: "গতকাল যেতে চেয়েছিলে?", pronunciation_bn: "জুওয়ানা গো ইয়েস্টারডে?", slotValues: { ACTION: "go" }, stage: 2 },
            { en: "Djuwanna eat with us yesterday?", bn: "গতকাল আমাদের সাথে খেতে চেয়েছিলে?", pronunciation_bn: "জুওয়ানা ঈট উইথ আস ইয়েস্টারডে?", slotValues: { ACTION: "eat" }, stage: 2 },
            { en: "Djuwanna come yesterday?", bn: "গতকাল আসতে চেয়েছিলে?", pronunciation_bn: "জুওয়ানা কাম ইয়েস্টারডে?", slotValues: { ACTION: "come" }, stage: 3 }
          ]
        },
        {
          variant: "negative",
          label: "Djuwanna NOT [ACTION]?",
          label_bn: "তুমি কি চাও না?",
          formula: "Djuwanna not [ACTION]?",
          formula_bn: "জুওয়ানা নট [কাজ]?",
          examples: [
            { en: "Djuwanna not go?", bn: "তুমি যেতে চাও না?", pronunciation_bn: "জুওয়ানা নট গো?", slotValues: { ACTION: "go" }, stage: 1 },
            { en: "Djuwanna not try?", bn: "তুমি চেষ্টা করতে চাও না?", pronunciation_bn: "জুওয়ানা নট ট্রাই?", slotValues: { ACTION: "try" }, stage: 2 },
            { en: "Djuwanna not see?", bn: "তুমি দেখতে চাও না?", pronunciation_bn: "জুওয়ানা নট সি?", slotValues: { ACTION: "see" }, stage: 3 }
          ]
        },
        {
          variant: "invitation",
          label: "Djuwanna [ACTION] with me?",
          label_bn: "আমার সাথে চাও?",
          formula: "Djuwanna [ACTION] with me?",
          formula_bn: "জুওয়ানা [কাজ] উইথ মি?",
          examples: [
            { en: "Djuwanna go shopping with me?", bn: "আমার সাথে কেনাকাটা যেতে চাও?", pronunciation_bn: "জুওয়ানা গো শপিং উইথ মি?", slotValues: { ACTION: "go shopping" }, stage: 2 },
            { en: "Djuwanna watch a movie with me?", bn: "আমার সাথে মুভি দেখতে চাও?", pronunciation_bn: "জুওয়ানা ওয়াচ এ মুভি উইথ মি?", slotValues: { ACTION: "watch a movie" }, stage: 3 },
            { en: "Djuwanna play cricket with me?", bn: "আমার সাথে ক্রিকেট খেলতে চাও?", pronunciation_bn: "জুওয়ানা প্লে ক্রিকেট উইথ মি?", slotValues: { ACTION: "play cricket" }, stage: 1 }
          ]
        }
      ],
      dialogueChains: [
        {
          id: "X13.1-D1",
          title_bn: "অফিসে লাঞ্চ ব্রেক",
          title_en: "Lunch break at office",
          situation_bn: "অফিসে লাঞ্চ টাইম, কলিগ খেতে যাওয়ার কথা বলছে",
          icon: "🍱",
          turns: [
            { speaker_bn: "করিম", en: "Djuwanna go for lunch?", bn: "দুপুরে খেতে যাবে?", pronunciation_bn: "জুওয়ানা গো ফর লাঞ্চ?", patternId: "X13.1" },
            { speaker_bn: "রহিম", en: "Yeah, where?", bn: "হ্যাঁ, কোথায়?", pronunciation_bn: "ইয়া, হোয়্যার?", patternId: "D1.1" },
            { speaker_bn: "করিম", en: "Djuwanna try that new biryani place?", bn: "নতুন বিরিয়ানির দোকান ট্রাই করবে?", pronunciation_bn: "জুওয়ানা ট্রাই দ্যাট নিউ বিরিয়ানি প্লেস?", patternId: "X13.1" },
            { speaker_bn: "রহিম", en: "Perfect! Let's go.", bn: "পারফেক্ট! চলো যাই।", pronunciation_bn: "পারফেক্ট! লেট্স গো।", patternId: "C1.2" }
          ],
          patternsUsed: ["X13.1", "D1.1", "C1.2"]
        }
      ],
      slots: [
        {
          name: "ACTION",
          description: "Any action verb",
          description_bn: "যেকোনো কাজ",
          acceptedTypes: ["verb"],
          examples: ["go", "eat", "try", "see", "come"]
        }
      ],
      examples: [
        { en: "Djuwanna go?", bn: "যেতে চাও?", pronunciation_bn: "জুওয়ানা গো?", slotValues: { ACTION: "go" }, topicArea: "social", stage: 1, miniStory: { situation_bn: "রহিম বন্ধুকে দোকানে যাওয়ার জন্য ডাকছে", icon: "🚶" } },
        { en: "Djuwanna eat something?", bn: "কিছু খাবে?", pronunciation_bn: "জুওয়ানা ঈট সামথিং?", slotValues: { ACTION: "eat" }, topicArea: "food", stage: 1, miniStory: { situation_bn: "মা ছেলেকে খাবার অফার করছে", icon: "🍽️" } },
        { en: "Djuwanna see the new movie?", bn: "নতুন মুভি দেখবে?", pronunciation_bn: "জুওয়ানা সি দ্য নিউ মুভি?", slotValues: { ACTION: "see" }, topicArea: "entertainment", stage: 1, miniStory: { situation_bn: "বন্ধু সিনেমা হলে যাওয়ার প্ল্যান করছে", icon: "🎬" } },
        { en: "Djuwanna come with us?", bn: "আমাদের সাথে আসবে?", pronunciation_bn: "জুওয়ানা কাম উইথ আস?", slotValues: { ACTION: "come" }, topicArea: "social", stage: 1, miniStory: { situation_bn: "কলিগরা পিকনিকে যাচ্ছে, রহিমকে ডাকছে", icon: "🌳" } },
        { en: "Djuwanna try this?", bn: "এটা ট্রাই করবে?", pronunciation_bn: "জুওয়ানা ট্রাই দিস?", slotValues: { ACTION: "try" }, topicArea: "food", stage: 1, miniStory: { situation_bn: "দোকানদার নতুন খাবার টেস্ট করতে দিচ্ছে", icon: "🍜" } },
        { en: "Djuwanna play cricket?", bn: "ক্রিকেট খেলবে?", pronunciation_bn: "জুওয়ানা প্লে ক্রিকেট?", slotValues: { ACTION: "play" }, topicArea: "sports", stage: 2, miniStory: { situation_bn: "বিকেলে ছেলেরা মাঠে ক্রিকেট খেলছে", icon: "🏏" } },
        { en: "Djuwanna watch TV?", bn: "টিভি দেখবে?", pronunciation_bn: "জুওয়ানা ওয়াচ টিভি?", slotValues: { ACTION: "watch" }, topicArea: "entertainment", stage: 2, miniStory: { situation_bn: "বাবা ছেলেকে খবর দেখার জন্য ডাকছে", icon: "📺" } },
        { en: "Djuwanna take a break?", bn: "একটু ব্রেক নিবে?", pronunciation_bn: "জুওয়ানা টেক এ ব্রেক?", slotValues: { ACTION: "take a break" }, topicArea: "work", stage: 2, miniStory: { situation_bn: "অফিসে ম্যানেজার টিমকে রেস্ট নিতে বলছে", icon: "☕" } },
        { en: "Djuwanna buy this?", bn: "এটা কিনবে?", pronunciation_bn: "জুওয়ানা বাই দিস?", slotValues: { ACTION: "buy" }, topicArea: "shopping", stage: 2, miniStory: { situation_bn: "বাজারে বিক্রেতা জামা কিনতে বলছে", icon: "👕" } },
        { en: "Djuwanna leave now?", bn: "এখনই যাবে?", pronunciation_bn: "জুওয়ানা লিভ নাও?", slotValues: { ACTION: "leave" }, topicArea: "transport", stage: 2, miniStory: { situation_bn: "বাসে যাওয়ার আগে বন্ধু জিজ্ঞেস করছে", icon: "🚌" } },
        { en: "Djuwanna check your phone?", bn: "তোমার ফোন চেক করবে?", pronunciation_bn: "জুওয়ানা চেক ইয়োর ফোন?", slotValues: { ACTION: "check" }, topicArea: "technology", stage: 3, miniStory: { situation_bn: "কলিগ রহিমের ফোনে মিসড কল আছে বলছে", icon: "📱" } },
        { en: "Djuwanna visit Dhaka?", bn: "ঢাকা ভিজিট করবে?", pronunciation_bn: "জুওয়ানা ভিজিট ঢাকা?", slotValues: { ACTION: "visit" }, topicArea: "travel", stage: 3, miniStory: { situation_bn: "আত্মীয় রহিমকে ঢাকায় আসতে বলছে", icon: "🏙️" } },
        { en: "Djuwanna order food?", bn: "খাবার অর্ডার করবে?", pronunciation_bn: "জুওয়ানা অর্ডার ফুড?", slotValues: { ACTION: "order" }, topicArea: "food", stage: 3, miniStory: { situation_bn: "রেস্টুরেন্টে ওয়েটার অর্ডার নিচ্ছে", icon: "🍛" } },
        { en: "Djuwanna join our group?", bn: "আমাদের গ্রুপে জয়েন করবে?", pronunciation_bn: "জুওয়ানা জয়েন আওয়ার গ্রুপ?", slotValues: { ACTION: "join" }, topicArea: "social", stage: 3, miniStory: { situation_bn: "হোয়াটসঅ্যাপ গ্রুপে এড করতে বলছে", icon: "💬" } },
        { en: "Djuwanna borrow my bike?", bn: "আমার বাইক ধার নিবে?", pronunciation_bn: "জুওয়ানা বরো মাই বাইক?", slotValues: { ACTION: "borrow" }, topicArea: "daily_life", stage: 3, miniStory: { situation_bn: "বন্ধু রহিমকে বাইক ব্যবহার করতে দিচ্ছে", icon: "🏍️" } }
      ]
    },
    {
      id: "X13.2",
      patternName: "Djeet? / Djueet [THING]? — Did you eat [THING]?",
      patternName_bn: "জিট — তুমি কি খেয়েছো",
      formula: "Djeet [THING]?",
      formula_bn: "জিট [খাবার]?",
      concept_bn: "জিট",
      formulaPronunciation_bn: "জিট [খাবার]?",
      formality: "casual",
      difficulty: "advanced",
      usageNote: "'Did you eat?' becomes 'Djeet?' (জিট?) in super fast speech. This is one of the most common connected speech patterns in American English.",
      usageNote_bn: "'Did you eat?' দ্রুত বলায় হয়ে যায় 'জিট?'। আমেরিকান ইংরেজিতে খুবই কমন। শোনো আর চিনো।",
      banglaStructureMap: "বাংলা: তুমি কি খেয়েছো? → English: Did you eat? → Fast: Djeet?",
      bridgeRuleIds: ["BR1", "BR5"],
      conversionSteps: {
        banglaThought: "তুমি বাংলায় বলো: 'তুমি কি খেয়েছো?'",
        steps: [
          { step_bn: "ফুল ইংরেজি ভাবো: 'Did you eat?'", result: "Did you eat?" },
          { step_bn: "দ্রুত বলো — সব শব্দ মিশিয়ে দাও", result: "Djeet?" },
          { step_bn: "'Did you eat' মিশে হয়ে যায় 'Djeet'", result: "Djeet?" }
        ],
        finalResult: "Djeet?",
        finalResult_bn: "তুমি কি খেয়েছো?"
      },
      commonMistakes: [
        { wrong: "'ডিড ইউ ঈট' — ধীরে বলা", correct: "'জিট' — একসাথে দ্রুত", explanation_bn: "নেটিভরা এত দ্রুত বলে যে সব মিলে 'জিট' হয়ে যায়" },
        { wrong: "শুধু 'eat' এর সাথে ব্যবহার করা", correct: "অন্য খাবারের সাথেও — 'Djueet rice?'", explanation_bn: "'Did you eat' যেকোনো খাবার নামের আগে আসতে পারে" },
        { wrong: "এটা নতুন শব্দ ভাবা", correct: "এটা 'Did you eat' এর দ্রুত সাউন্ড", explanation_bn: "নতুন কিছু না, পুরোনো শব্দের দ্রুত বলা ফর্ম" }
      ],
      simpleRules: [
        { rule_bn: "'Did you eat' দ্রুত বলায় 'জিট' শোনায়", example: "Djeet?" },
        { rule_bn: "খাবারের নাম যোগ করলে 'জুঈট (খাবার)?' হয়", example: "Djueet rice?" },
        { rule_bn: "আমেরিকান মুভি, সিরিয়ালে খুব শুনবে এটা", example: "Djeet yet?" }
      ],
      usageSituations: [
        { situation_bn: "বাসায় ফিরে — মা জিজ্ঞেস করছে খেয়েছো কিনা", situation_en: "Coming home — mom asking if you ate", exampleSentence: "Djeet?", exampleSentence_bn: "খেয়েছো?" },
        { situation_bn: "অফিসে — কলিগ লাঞ্চ করেছে কিনা জানতে চাইছে", situation_en: "At office — colleague asking about lunch", exampleSentence: "Djueet lunch?", exampleSentence_bn: "লাঞ্চ করেছো?" },
        { situation_bn: "রেস্টুরেন্টে — বন্ধু জিজ্ঞেস করছে কী খেয়েছিলে", situation_en: "At restaurant — friend asking what you ate", exampleSentence: "Djueet anything good?", exampleSentence_bn: "ভালো কিছু খেয়েছো?" }
      ],
      sentenceBuilding: [
        { previousPatternId: "A1.1", previousFormula: "I want [THING]", previousFormula_bn: "আমি [জিনিস] চাই", combined: "Djeet? I'm starving!", combined_bn: "খেয়েছো? আমি ভীষণ খিদে!" },
        { previousPatternId: "C5.1", previousFormula: "Not yet", previousFormula_bn: "এখনো না", combined: "Djueet lunch? Not yet.", combined_bn: "দুপুরে খেয়েছো? এখনো না।" }
      ],
      memoryTrick_bn: "'জিট' মনে রাখো — মা বাসায় ঢুকেই জিজ্ঞেস করে 'জিট?' (খেয়েছো?)",
      chunks: [
        { en: "Djeet?", bn: "খেয়েছো?", pronunciation_bn: "জিট?" },
        { en: "Djueet lunch", bn: "দুপুরের খাবার খেয়েছো?", pronunciation_bn: "জুঈট লাঞ্চ" },
        { en: "Djueet anything", bn: "কিছু খেয়েছো?", pronunciation_bn: "জুঈট এনিথিং" }
      ],
      answerTemplates: [
        { situation_bn: "হ্যাঁ, খেয়েছি বলার উপায়", question: "Djeet?", question_bn: "খেয়েছো?", answerFormula: "Yeah, I ate [THING]", answerFormula_bn: "হ্যাঁ, আমি [খাবার] খেয়েছি", pronunciation_bn: "ইয়া, আই এট রাইস", examples: [{ answer: "Yeah, I ate rice", answer_bn: "হ্যাঁ, ভাত খেয়েছি", pronunciation_bn: "ইয়া, আই এট রাইস" }] },
        { situation_bn: "না, এখনো খাইনি", question: "Djeet?", question_bn: "খেয়েছো?", answerFormula: "Nope, not yet", answerFormula_bn: "না, এখনো না", pronunciation_bn: "নোপ, নট ইয়েট", examples: [{ answer: "Nope, not yet", answer_bn: "না, এখনো খাইনি", pronunciation_bn: "নোপ, নট ইয়েট" }] },
        { situation_bn: "এইমাত্র খেয়েছি", question: "Djeet?", question_bn: "খেয়েছো?", answerFormula: "Just had [THING]", answerFormula_bn: "এইমাত্র [খাবার] খেয়েছি", pronunciation_bn: "জাস্ট হ্যাড টি", examples: [{ answer: "Just had tea", answer_bn: "এইমাত্র চা খেয়েছি", pronunciation_bn: "জাস্ট হ্যাড টি" }] }
      ],
      variations: [
        {
          variant: "with_food",
          label: "Djueet [SPECIFIC FOOD]?",
          label_bn: "নির্দিষ্ট খাবার খেয়েছো?",
          formula: "Djueet [FOOD]?",
          formula_bn: "জুঈট [খাবার]?",
          examples: [
            { en: "Djueet rice?", bn: "ভাত খেয়েছো?", pronunciation_bn: "জুঈট রাইস?", slotValues: { THING: "rice" }, stage: 1 },
            { en: "Djueet breakfast?", bn: "সকালের নাস্তা করেছো?", pronunciation_bn: "জুঈট ব্রেকফাস্ট?", slotValues: { THING: "breakfast" }, stage: 2 },
            { en: "Djueet anything?", bn: "কিছু খেয়েছো?", pronunciation_bn: "জুঈট এনিথিং?", slotValues: { THING: "anything" }, stage: 2 }
          ]
        },
        {
          variant: "time_based",
          label: "Djeet today/yet?",
          label_bn: "আজ/এখনো খেয়েছো?",
          formula: "Djeet today/yet?",
          formula_bn: "জিট আজ/এখনো?",
          examples: [
            { en: "Djeet today?", bn: "আজ খেয়েছো?", pronunciation_bn: "জিট টুডে?", slotValues: { THING: "today" }, stage: 1 },
            { en: "Djeet yet?", bn: "এখনো খেয়েছো?", pronunciation_bn: "জিট ইয়েট?", slotValues: { THING: "yet" }, stage: 2 },
            { en: "Djeet already?", bn: "এরই মধ্যে খেয়ে ফেলেছো?", pronunciation_bn: "জিট অলরেডি?", slotValues: { THING: "already" }, stage: 3 }
          ]
        },
        {
          variant: "negative",
          label: "Djeet nothing?",
          label_bn: "কিছুই খাওনি?",
          formula: "Djeet nothing?",
          formula_bn: "জিট নাথিং?",
          examples: [
            { en: "Djeet nothing all day?", bn: "সারাদিন কিছুই খাওনি?", pronunciation_bn: "জিট নাথিং অল ডে?", slotValues: { THING: "nothing" }, stage: 2 },
            { en: "Djeet nothing since morning?", bn: "সকাল থেকে কিছু খাওনি?", pronunciation_bn: "জিট নাথিং সিন্স মর্নিং?", slotValues: { THING: "nothing" }, stage: 3 },
            { en: "Djeet nothing yet?", bn: "এখনো কিছু খাওনি?", pronunciation_bn: "জিট নাথিং ইয়েট?", slotValues: { THING: "nothing" }, stage: 2 }
          ]
        }
      ],
      dialogueChains: [
        {
          id: "X13.2-D1",
          title_bn: "অফিস থেকে বাসায় ফিরছে",
          title_en: "Coming home from work",
          situation_bn: "ছেলে অফিস থেকে বাসায় ঢুকছে, মা জিজ্ঞেস করছে",
          icon: "🏠",
          turns: [
            { speaker_bn: "মা", en: "Djeet?", bn: "খেয়েছো?", pronunciation_bn: "জিট?", patternId: "X13.2" },
            { speaker_bn: "ছেলে", en: "Nope, not yet.", bn: "না, এখনো না।", pronunciation_bn: "নোপ, নট ইয়েট।", patternId: "C5.1" },
            { speaker_bn: "মা", en: "I made rice and fish. Come.", bn: "ভাত মাছ রেডি আছে। আসো।", pronunciation_bn: "আই মেইড রাইস অ্যান্ড ফিশ। কাম।", patternId: "C1.2" },
            { speaker_bn: "ছেলে", en: "Perfect! I'm so hungry.", bn: "পারফেক্ট! খুব খিদে পেয়েছে।", pronunciation_bn: "পারফেক্ট! আইম সো হাংগ্রি।", patternId: "A1.1" }
          ],
          patternsUsed: ["X13.2", "C5.1", "C1.2", "A1.1"]
        }
      ],
      slots: [
        {
          name: "THING",
          description: "Food item or meal time",
          description_bn: "খাবারের নাম বা সময়",
          acceptedTypes: ["noun"],
          examples: ["rice", "lunch", "breakfast", "anything", "yet"]
        }
      ],
      examples: [
        { en: "Djeet?", bn: "খেয়েছো?", pronunciation_bn: "জিট?", slotValues: { THING: "" }, topicArea: "food", stage: 1, miniStory: { situation_bn: "মা বাসায় ছেলেকে দেখেই জিজ্ঞেস করছে", icon: "🍽️" } },
        { en: "Djueet rice?", bn: "ভাত খেয়েছো?", pronunciation_bn: "জুঈট রাইস?", slotValues: { THING: "rice" }, topicArea: "food", stage: 1, miniStory: { situation_bn: "দুপুরে মা দেখছে ছেলে খেয়েছে কিনা", icon: "🍚" } },
        { en: "Djueet lunch?", bn: "দুপুরের খাবার খেয়েছো?", pronunciation_bn: "জুঈট লাঞ্চ?", slotValues: { THING: "lunch" }, topicArea: "work", stage: 1, miniStory: { situation_bn: "অফিসে কলিগ জিজ্ঞেস করছে", icon: "🍱" } },
        { en: "Djueet breakfast?", bn: "সকালের নাস্তা করেছো?", pronunciation_bn: "জুঈট ব্রেকফাস্ট?", slotValues: { THING: "breakfast" }, topicArea: "food", stage: 1, miniStory: { situation_bn: "বাবা ছেলেকে সকালে জিজ্ঞেস করছে", icon: "🥪" } },
        { en: "Djueet anything?", bn: "কিছু খেয়েছো?", pronunciation_bn: "জুঈট এনিথিং?", slotValues: { THING: "anything" }, topicArea: "food", stage: 1, miniStory: { situation_bn: "বন্ধু জানতে চাইছে কিছু খেয়েছে কিনা", icon: "🍴" } },
        { en: "Djeet yet?", bn: "এখনো খেয়েছো?", pronunciation_bn: "জিট ইয়েট?", slotValues: { THING: "yet" }, topicArea: "daily_life", stage: 2, miniStory: { situation_bn: "রুমমেট দেখছে খাবার টেবিলে রেডি আছে", icon: "⏰" } },
        { en: "Djueet dinner?", bn: "রাতের খাবার খেয়েছো?", pronunciation_bn: "জুঈট ডিনার?", slotValues: { THING: "dinner" }, topicArea: "food", stage: 2, miniStory: { situation_bn: "রাতে স্ত্রী স্বামীকে জিজ্ঞেস করছে", icon: "🌙" } },
        { en: "Djeet today?", bn: "আজ খেয়েছো?", pronunciation_bn: "জিট টুডে?", slotValues: { THING: "today" }, topicArea: "health", stage: 2, miniStory: { situation_bn: "ডাক্তার রোগীকে জিজ্ঞেস করছে আজ খেয়েছে কিনা", icon: "👨‍⚕️" } },
        { en: "Djueet anything at all?", bn: "একদমই কিছু খেয়েছো?", pronunciation_bn: "জুঈট এনিথিং অ্যাট অল?", slotValues: { THING: "anything at all" }, topicArea: "food", stage: 2, miniStory: { situation_bn: "মা চিন্তিত যে ছেলে কিছু খায়নি", icon: "😟" } },
        { en: "Djueet biryani?", bn: "বিরিয়ানি খেয়েছো?", pronunciation_bn: "জুঈট বিরিয়ানি?", slotValues: { THING: "biryani" }, topicArea: "food", stage: 2, miniStory: { situation_bn: "বন্ধু জানতে চাইছে বিরিয়ানি ট্রাই করেছে কিনা", icon: "🍛" } },
        { en: "Djeet already?", bn: "এরই মধ্যে খেয়ে ফেলেছো?", pronunciation_bn: "জিট অলরেডি?", slotValues: { THING: "already" }, topicArea: "social", stage: 3, miniStory: { situation_bn: "বন্ধু দেখছে তাড়াতাড়ি খেয়ে ফেলেছে", icon: "⚡" } },
        { en: "Djueet anything good?", bn: "ভালো কিছু খেয়েছো?", pronunciation_bn: "জুঈট এনিথিং গুড?", slotValues: { THING: "anything good" }, topicArea: "food", stage: 3, miniStory: { situation_bn: "রেস্টুরেন্টে বন্ধু জিজ্ঞেস করছে", icon: "🍽️" } },
        { en: "Djeet since morning?", bn: "সকাল থেকে খেয়েছো?", pronunciation_bn: "জিট সিন্স মর্নিং?", slotValues: { THING: "since morning" }, topicArea: "health", stage: 3, miniStory: { situation_bn: "ডাক্তার জানতে চাইছে কতক্ষণ খায়নি", icon: "🏥" } },
        { en: "Djueet something spicy?", bn: "ঝাল কিছু খেয়েছো?", pronunciation_bn: "জুঈট সামথিং স্পাইসি?", slotValues: { THING: "something spicy" }, topicArea: "food", stage: 3, miniStory: { situation_bn: "বন্ধু জানতে চাইছে ঝাল খেয়েছে কিনা", icon: "🌶️" } },
        { en: "Djeet before coming?", bn: "আসার আগে খেয়েছো?", pronunciation_bn: "জিট বিফোর কামিং?", slotValues: { THING: "before coming" }, topicArea: "social", stage: 3, miniStory: { situation_bn: "বাসায় গেস্ট আসছে, হোস্ট জিজ্ঞেস করছে", icon: "🏠" } }
      ]
    },
    {
      id: "X13.3",
      patternName: "Coulda/Shoulda/Woulda [ACTION] — Could have/Should have/Would have [ACTION]",
      patternName_bn: "কুডা/শুডা/উডা — করতে পারতাম/করা উচিত ছিল/করতাম",
      formula: "[COULDA/SHOULDA/WOULDA] [ACTION]",
      formula_bn: "[কুডা/শুডা/উডা] [কাজ]",
      concept_bn: "কুডা/শুডা/উডা",
      formulaPronunciation_bn: "[কুডা/শুডা/উডা] [কাজ]",
      formality: "casual",
      difficulty: "advanced",
      usageNote: "In fast speech 'could have' becomes 'coulda' (কুডা), 'should have' becomes 'shoulda' (শুডা), 'would have' becomes 'woulda' (উডা). Very common in everyday American English.",
      usageNote_bn: "দ্রুত কথায় 'could have' হয়ে যায় 'কুডা', 'should have' হয়ে যায় 'শুডা', 'would have' হয়ে যায় 'উডা'। আমেরিকানরা প্রতিদিন এভাবেই বলে।",
      banglaStructureMap: "বাংলা: করতে পারতাম/উচিত ছিল/করতাম → English: Could have/Should have/Would have → Fast: Coulda/Shoulda/Woulda",
      bridgeRuleIds: ["BR1", "BR5"],
      conversionSteps: {
        banglaThought: "তুমি বাংলায় বলো: 'আমার আগে যাওয়া উচিত ছিল'",
        steps: [
          { step_bn: "ফুল ইংরেজি ভাবো: 'I should have gone earlier'", result: "I should have gone earlier" },
          { step_bn: "দ্রুত বলো — 'should have' মিশিয়ে দাও", result: "I shoulda gone earlier" },
          { step_bn: "'should have' মিশে হয়ে যায় 'shoulda'", result: "I shoulda gone earlier" }
        ],
        finalResult: "I shoulda gone earlier",
        finalResult_bn: "আমার আগে যাওয়া উচিত ছিল"
      },
      commonMistakes: [
        { wrong: "I should of gone", correct: "I shoulda gone (should have)", explanation_bn: "'of' না — এটা আসলে 'have' এর দ্রুত সাউন্ড, শুধু শোনায় 'অফ' মতো" },
        { wrong: "'কুড হ্যাভ' — ধীরে আলাদা করে বলা", correct: "'কুডা' — একসাথে দ্রুত", explanation_bn: "নেটিভরা আলাদা করে বলে না, 'কুডা' একটাই সাউন্ড" },
        { wrong: "শুধু 'coulda' জানা, 'shoulda/woulda' না জানা", correct: "তিনটাই শেখো — coulda, shoulda, woulda", explanation_bn: "তিনটা একই রকম — 'have' বাদ দিয়ে 'a' যোগ হয়" }
      ],
      simpleRules: [
        { rule_bn: "'could have' দ্রুত বলায় 'কুডা' — পারতাম", example: "I coulda done it" },
        { rule_bn: "'should have' দ্রুত বলায় 'শুডা' — উচিত ছিল", example: "I shoulda called" },
        { rule_bn: "'would have' দ্রুত বলায় 'উডা' — করতাম", example: "I woulda helped" }
      ],
      usageSituations: [
        { situation_bn: "পরীক্ষায় খারাপ করার পর — আরো পড়া উচিত ছিল", situation_en: "After doing badly in exam — should have studied more", exampleSentence: "I shoulda studied more", exampleSentence_bn: "আমার আরো পড়া উচিত ছিল" },
        { situation_bn: "বাস মিস করার পর — আগে বের হতে পারতাম", situation_en: "After missing the bus — could have left earlier", exampleSentence: "I coulda left earlier", exampleSentence_bn: "আমি আগে বের হতে পারতাম" },
        { situation_bn: "বন্ধু সাহায্য চেয়েছিল — আমি সাহায্য করতাম", situation_en: "Friend asked for help — I would have helped", exampleSentence: "I woulda helped you", exampleSentence_bn: "আমি তোমাকে সাহায্য করতাম" }
      ],
      sentenceBuilding: [
        { previousPatternId: "A1.1", previousFormula: "I want [THING]", previousFormula_bn: "আমি [জিনিস] চাই", combined: "I shoulda bought it. I want it now.", combined_bn: "আমার কেনা উচিত ছিল। এখন সেটা চাই।" },
        { previousPatternId: "X13.1", previousFormula: "Djuwanna [ACTION]?", previousFormula_bn: "জুওয়ানা [কাজ]?", combined: "I coulda gone. Djuwanna go tomorrow?", combined_bn: "আমি যেতে পারতাম। কাল যাবে?" }
      ],
      memoryTrick_bn: "মনে রাখো: কুডা-শুডা-উডা — তিন ভাই। 'পারতাম-উচিত ছিল-করতাম' — সব শেষে 'আ' সাউন্ড।",
      chunks: [
        { en: "I coulda", bn: "আমি পারতাম", pronunciation_bn: "আই কুডা" },
        { en: "I shoulda", bn: "আমার উচিত ছিল", pronunciation_bn: "আই শুডা" },
        { en: "I woulda", bn: "আমি করতাম", pronunciation_bn: "আই উডা" }
      ],
      wordMap: {
        bn_sentence: "আমার যাওয়া উচিত ছিল",
        en_sentence: "I shoulda gone",
        mappings: [
          { bn_word: "আমার", en_word: "I", type: "direct" },
          { bn_word: "উচিত ছিল", en_word: "shoulda", type: "split", bridgeRuleId: "BR5" },
          { bn_word: "যাওয়া", en_word: "gone", type: "direct" }
        ]
      },
      answerTemplates: [
        {
          situation_bn: "কেউ বলছে 'উচিত ছিল' — তুমি সান্ত্বনা দিচ্ছো",
          question: "I shoulda studied more.",
          question_bn: "আমার আরো পড়া উচিত ছিল।",
          answerFormula: "It's okay, next time [ACTION]",
          answerFormula_bn: "ঠিক আছে, পরের বার [কাজ]",
          pronunciation_bn: "ইটস ওকে, নেক্সট টাইম",
          examples: [
            { answer: "It's okay, next time study early", answer_bn: "ঠিক আছে, পরের বার আগে পড়ো", pronunciation_bn: "ইটস ওকে, নেক্সট টাইম স্টাডি আর্লি" }
          ]
        },
        {
          situation_bn: "কেউ বলছে 'পারতাম' — তুমি একমত",
          question: "I coulda finished it.",
          question_bn: "আমি শেষ করতে পারতাম।",
          answerFormula: "Yeah, you coulda [ACTION]",
          answerFormula_bn: "হ্যাঁ, তুমি [কাজ] পারতে",
          pronunciation_bn: "ইয়া, ইউ কুডা",
          examples: [
            { answer: "Yeah, you coulda done it easily", answer_bn: "হ্যাঁ, তুমি সহজেই পারতে", pronunciation_bn: "ইয়া, ইউ কুডা ডান ইট ইজিলি" }
          ]
        },
        {
          situation_bn: "কেউ বলছে 'করতাম' — তুমি ধন্যবাদ দিচ্ছো",
          question: "I woulda helped you.",
          question_bn: "আমি তোমাকে সাহায্য করতাম।",
          answerFormula: "Thanks, that means a lot",
          answerFormula_bn: "ধন্যবাদ, অনেক মানে রাখে",
          pronunciation_bn: "থ্যাংকস, দ্যাট মিনস এ লট",
          examples: [
            { answer: "Thanks, I appreciate it", answer_bn: "ধন্যবাদ, আমি কদর করি", pronunciation_bn: "থ্যাংকস, আই অ্যাপ্রিশিয়েট ইট" }
          ]
        }
      ],
      variations: [
        {
          variant: "coulda",
          label: "Coulda [ACTION]",
          label_bn: "পারতাম",
          formula: "I coulda [ACTION]",
          formula_bn: "আই কুডা [কাজ]",
          examples: [
            { en: "I coulda won the match", bn: "আমি ম্যাচ জিততে পারতাম", pronunciation_bn: "আই কুডা ওয়ান দ্য ম্যাচ", slotValues: { ACTION: "won the match" }, stage: 1 },
            { en: "I coulda caught the bus", bn: "আমি বাস ধরতে পারতাম", pronunciation_bn: "আই কুডা কট দ্য বাস", slotValues: { ACTION: "caught the bus" }, stage: 2 },
            { en: "I coulda saved more money", bn: "আমি আরো টাকা জমাতে পারতাম", pronunciation_bn: "আই কুডা সেভড মোর মানি", slotValues: { ACTION: "saved more money" }, stage: 3 }
          ]
        },
        {
          variant: "shoulda",
          label: "Shoulda [ACTION]",
          label_bn: "উচিত ছিল",
          formula: "I shoulda [ACTION]",
          formula_bn: "আই শুডা [কাজ]",
          examples: [
            { en: "I shoulda called earlier", bn: "আমার আগে ফোন করা উচিত ছিল", pronunciation_bn: "আই শুডা কল্ড আর্লিয়ার", slotValues: { ACTION: "called earlier" }, stage: 1 },
            { en: "I shoulda listened to my mom", bn: "আমার মায়ের কথা শোনা উচিত ছিল", pronunciation_bn: "আই শুডা লিসেন্ড টু মাই মম", slotValues: { ACTION: "listened to my mom" }, stage: 2 },
            { en: "I shoulda brought my umbrella", bn: "আমার ছাতা আনা উচিত ছিল", pronunciation_bn: "আই শুডা ব্রট মাই আমব্রেলা", slotValues: { ACTION: "brought my umbrella" }, stage: 3 }
          ]
        },
        {
          variant: "woulda",
          label: "Woulda [ACTION]",
          label_bn: "করতাম",
          formula: "I woulda [ACTION]",
          formula_bn: "আই উডা [কাজ]",
          examples: [
            { en: "I woulda come if you asked", bn: "তুমি বললে আমি আসতাম", pronunciation_bn: "আই উডা কাম ইফ ইউ অ্যাস্কড", slotValues: { ACTION: "come if you asked" }, stage: 2 },
            { en: "I woulda helped with the cooking", bn: "আমি রান্নায় সাহায্য করতাম", pronunciation_bn: "আই উডা হেল্পড উইথ দ্য কুকিং", slotValues: { ACTION: "helped with the cooking" }, stage: 2 },
            { en: "I woulda told you sooner", bn: "আমি তোমাকে আগে বলতাম", pronunciation_bn: "আই উডা টোল্ড ইউ সুনার", slotValues: { ACTION: "told you sooner" }, stage: 3 }
          ]
        }
      ],
      dialogueChains: [
        {
          id: "X13.3-D1",
          title_bn: "পরীক্ষার পর আফসোস",
          title_en: "Regret after exam",
          situation_bn: "দুই বন্ধু পরীক্ষার রেজাল্ট পেয়েছে, একজন খারাপ করেছে",
          icon: "📝",
          turns: [
            { speaker_bn: "করিম", en: "I shoulda studied more, man.", bn: "আমার আরো পড়া উচিত ছিল, ভাই।", pronunciation_bn: "আই শুডা স্টাডিড মোর, ম্যান।", patternId: "X13.3" },
            { speaker_bn: "রহিম", en: "Yeah, I coulda helped you.", bn: "হ্যাঁ, আমি তোমাকে সাহায্য করতে পারতাম।", pronunciation_bn: "ইয়া, আই কুডা হেল্পড ইউ।", patternId: "X13.3" },
            { speaker_bn: "করিম", en: "I woulda passed if I studied one more day.", bn: "আরেকদিন পড়লে পাশ করতাম।", pronunciation_bn: "আই উডা প্যাসড ইফ আই স্টাডিড ওয়ান মোর ডে।", patternId: "X13.3" },
            { speaker_bn: "রহিম", en: "It's okay. Next time study early.", bn: "ঠিক আছে। পরের বার আগে পড়ো।", pronunciation_bn: "ইটস ওকে। নেক্সট টাইম স্টাডি আর্লি।" }
          ],
          patternsUsed: ["X13.3"]
        }
      ],
      slots: [
        {
          name: "COULDA/SHOULDA/WOULDA",
          description: "One of the three connected speech forms: coulda, shoulda, or woulda",
          description_bn: "তিনটার যেকোনো একটা: কুডা, শুডা, বা উডা",
          acceptedTypes: ["verb"],
          examples: ["coulda", "shoulda", "woulda"]
        },
        {
          name: "ACTION",
          description: "Past participle verb — the action that could/should/would have been done",
          description_bn: "যে কাজটা করা যেত, করা উচিত ছিল, বা করা হতো",
          acceptedTypes: ["past_participle", "verb_phrase"],
          examples: ["gone", "studied", "called", "helped", "told you"]
        }
      ],
      examples: [
        { en: "I shoulda studied more.", bn: "আমার আরো পড়া উচিত ছিল।", pronunciation_bn: "আই শুডা স্টাডিড মোর।", slotValues: { "COULDA/SHOULDA/WOULDA": "shoulda", ACTION: "studied more" }, topicArea: "education", stage: 1, miniStory: { situation_bn: "পরীক্ষার রেজাল্ট খারাপ, রহিম আফসোস করছে", icon: "📚" } },
        { en: "I coulda caught the bus.", bn: "আমি বাস ধরতে পারতাম।", pronunciation_bn: "আই কুডা কট দ্য বাস।", slotValues: { "COULDA/SHOULDA/WOULDA": "coulda", ACTION: "caught the bus" }, topicArea: "transport", stage: 1, miniStory: { situation_bn: "বাস চলে গেছে, দেরি হয়ে গেল", icon: "🚌" } },
        { en: "I woulda helped you.", bn: "আমি তোমাকে সাহায্য করতাম।", pronunciation_bn: "আই উডা হেল্পড ইউ।", slotValues: { "COULDA/SHOULDA/WOULDA": "woulda", ACTION: "helped you" }, topicArea: "social", stage: 1, miniStory: { situation_bn: "বন্ধু বলছে আগে বললে সাহায্য করতাম", icon: "🤝" } },
        { en: "I shoulda called earlier.", bn: "আমার আগে ফোন করা উচিত ছিল।", pronunciation_bn: "আই শুডা কল্ড আর্লিয়ার।", slotValues: { "COULDA/SHOULDA/WOULDA": "shoulda", ACTION: "called earlier" }, topicArea: "daily_life", stage: 1, miniStory: { situation_bn: "জরুরি খবর দেরিতে পৌঁছেছে", icon: "📞" } },
        { en: "I coulda done it myself.", bn: "আমি নিজেই করতে পারতাম।", pronunciation_bn: "আই কুডা ডান ইট মাইসেলফ।", slotValues: { "COULDA/SHOULDA/WOULDA": "coulda", ACTION: "done it myself" }, topicArea: "work", stage: 1, miniStory: { situation_bn: "কলিগ কাজ করে দিয়েছে, রহিম বলছে পারতাম", icon: "💼" } },
        { en: "I shoulda brought my umbrella.", bn: "আমার ছাতা আনা উচিত ছিল।", pronunciation_bn: "আই শুডা ব্রট মাই আমব্রেলা।", slotValues: { "COULDA/SHOULDA/WOULDA": "shoulda", ACTION: "brought my umbrella" }, topicArea: "daily_life", stage: 2, miniStory: { situation_bn: "বৃষ্টিতে ভিজে গেছে, ছাতা আনেনি", icon: "🌧️" } },
        { en: "I woulda come if you asked.", bn: "তুমি বললে আমি আসতাম।", pronunciation_bn: "আই উডা কাম ইফ ইউ অ্যাস্কড।", slotValues: { "COULDA/SHOULDA/WOULDA": "woulda", ACTION: "come if you asked" }, topicArea: "social", stage: 2, miniStory: { situation_bn: "বন্ধু দাওয়াতে ডাকেনি, রহিম বলছে বললে আসতাম", icon: "🎉" } },
        { en: "I coulda saved more money.", bn: "আমি আরো টাকা জমাতে পারতাম।", pronunciation_bn: "আই কুডা সেভড মোর মানি।", slotValues: { "COULDA/SHOULDA/WOULDA": "coulda", ACTION: "saved more money" }, topicArea: "finance", stage: 2, miniStory: { situation_bn: "মাস শেষে টাকা নেই, আফসোস করছে", icon: "💰" } },
        { en: "I shoulda listened to my mom.", bn: "আমার মায়ের কথা শোনা উচিত ছিল।", pronunciation_bn: "আই শুডা লিসেন্ড টু মাই মম।", slotValues: { "COULDA/SHOULDA/WOULDA": "shoulda", ACTION: "listened to my mom" }, topicArea: "family", stage: 2, miniStory: { situation_bn: "মায়ের পরামর্শ শোনেনি, এখন বুঝছে ঠিক ছিল", icon: "👩" } },
        { en: "I woulda told you sooner.", bn: "আমি তোমাকে আগে বলতাম।", pronunciation_bn: "আই উডা টোল্ড ইউ সুনার।", slotValues: { "COULDA/SHOULDA/WOULDA": "woulda", ACTION: "told you sooner" }, topicArea: "social", stage: 2, miniStory: { situation_bn: "গুরুত্বপূর্ণ খবর দেরিতে জানিয়েছে", icon: "⏰" } },
        { en: "I coulda won the match.", bn: "আমি ম্যাচ জিততে পারতাম।", pronunciation_bn: "আই কুডা ওয়ান দ্য ম্যাচ।", slotValues: { "COULDA/SHOULDA/WOULDA": "coulda", ACTION: "won the match" }, topicArea: "sports", stage: 3, miniStory: { situation_bn: "ক্রিকেট ম্যাচে হেরে গেছে, আফসোস", icon: "🏏" } },
        { en: "I shoulda taken the other road.", bn: "আমার অন্য রাস্তা দিয়ে যাওয়া উচিত ছিল।", pronunciation_bn: "আই শুডা টেকেন দি আদার রোড।", slotValues: { "COULDA/SHOULDA/WOULDA": "shoulda", ACTION: "taken the other road" }, topicArea: "transport", stage: 3, miniStory: { situation_bn: "জ্যামে আটকে গেছে, অন্য রাস্তা ভালো ছিল", icon: "🚗" } },
        { en: "I woulda cooked biryani for you.", bn: "আমি তোমার জন্য বিরিয়ানি রান্না করতাম।", pronunciation_bn: "আই উডা কুকড বিরিয়ানি ফর ইউ।", slotValues: { "COULDA/SHOULDA/WOULDA": "woulda", ACTION: "cooked biryani for you" }, topicArea: "food", stage: 3, miniStory: { situation_bn: "গেস্ট এসেছিল, আগে জানলে বিরিয়ানি বানাতাম", icon: "🍛" } },
        { en: "I shoulda checked my phone.", bn: "আমার ফোন চেক করা উচিত ছিল।", pronunciation_bn: "আই শুডা চেকড মাই ফোন।", slotValues: { "COULDA/SHOULDA/WOULDA": "shoulda", ACTION: "checked my phone" }, topicArea: "technology", stage: 3, miniStory: { situation_bn: "গুরুত্বপূর্ণ মেসেজ মিস হয়ে গেছে", icon: "📱" } },
        { en: "I coulda finished the work today.", bn: "আমি আজকেই কাজটা শেষ করতে পারতাম।", pronunciation_bn: "আই কুডা ফিনিশড দ্য ওয়ার্ক টুডে।", slotValues: { "COULDA/SHOULDA/WOULDA": "coulda", ACTION: "finished the work today" }, topicArea: "work", stage: 3, miniStory: { situation_bn: "ডেডলাইন মিস, আজ শেষ করা সম্ভব ছিল", icon: "📋" } }
      ]
    },
    {
      id: "X13.4",
      patternName: "Whaddaya [ACTION]? — What do you [ACTION]?",
      patternName_bn: "হোয়াডায়া — তুমি কী করো",
      formula: "Whaddaya [ACTION]?",
      formula_bn: "হোয়াডায়া [কাজ]?",
      concept_bn: "হোয়াডায়া",
      formulaPronunciation_bn: "হোয়াডায়া [কাজ]?",
      formality: "casual",
      difficulty: "advanced",
      usageNote: "In fast speech 'What do you' blends to 'Whaddaya' (হোয়াডায়া). Extremely common in American English conversations, movies, TV shows.",
      usageNote_bn: "দ্রুত কথায় 'What do you' মিশে হয়ে যায় 'হোয়াডায়া'। আমেরিকান কথাবার্তা, মুভি, সিরিয়ালে প্রচুর শুনবে।",
      banglaStructureMap: "বাংলা: তুমি কী করো? → English: What do you do? → Fast: Whaddaya do?",
      bridgeRuleIds: ["BR1", "BR2", "BR5"],
      conversionSteps: {
        banglaThought: "তুমি বাংলায় বলো: 'তুমি কী মনে করো?'",
        steps: [
          { step_bn: "ফুল ইংরেজি ভাবো: 'What do you think?'", result: "What do you think?" },
          { step_bn: "দ্রুত বলো — 'What do you' মিশিয়ে দাও", result: "Whaddaya think?" },
          { step_bn: "'What do you' মিশে হয়ে যায় 'Whaddaya'", result: "Whaddaya think?" }
        ],
        finalResult: "Whaddaya think?",
        finalResult_bn: "তুমি কী মনে করো?"
      },
      commonMistakes: [
        { wrong: "'হোয়াট ডু ইউ' — ধীরে আলাদা বলা", correct: "'হোয়াডায়া' — একসাথে দ্রুত", explanation_bn: "নেটিভরা তিনটা শব্দ মিশিয়ে একটা সাউন্ড বানায়" },
        { wrong: "'Whaddaya' লেখায় ব্যবহার করা", correct: "লেখায় 'What do you' লেখো, মুখে 'হোয়াডায়া' বলো", explanation_bn: "এটা শুধু মুখে বলার ধরন, অফিসিয়াল লেখায় না" },
        { wrong: "শুধু 'What' মনে রাখা", correct: "'What do you' পুরোটা = 'Whaddaya'", explanation_bn: "তিনটা শব্দ মিলে একটা সাউন্ড — শুধু 'What' না" }
      ],
      simpleRules: [
        { rule_bn: "'What do you' দ্রুত বলায় 'হোয়াডায়া' শোনায়", example: "Whaddaya think?" },
        { rule_bn: "যেকোনো কাজের আগে বসে — 'হোয়াডায়া [কাজ]?'", example: "Whaddaya want?" },
        { rule_bn: "মুভিতে শুনলে বুঝবে — 'তুমি কী [কাজ]?'", example: "Whaddaya mean?" }
      ],
      usageSituations: [
        { situation_bn: "রেস্টুরেন্টে — ওয়েটার জিজ্ঞেস করছে কী চাও", situation_en: "At restaurant — waiter asking what you want", exampleSentence: "Whaddaya wanna eat?", exampleSentence_bn: "কী খেতে চাও?" },
        { situation_bn: "অফিসে — বস জিজ্ঞেস করছে তোমার মতামত কী", situation_en: "At office — boss asking for your opinion", exampleSentence: "Whaddaya think about this?", exampleSentence_bn: "এটা নিয়ে তোমার কী মনে হয়?" },
        { situation_bn: "বাজারে — দোকানদার বলছে কী লাগবে", situation_en: "At market — shopkeeper asking what you need", exampleSentence: "Whaddaya need?", exampleSentence_bn: "কী লাগবে?" }
      ],
      sentenceBuilding: [
        { previousPatternId: "A1.1", previousFormula: "I want [THING]", previousFormula_bn: "আমি [জিনিস] চাই", combined: "Whaddaya want? I want biryani.", combined_bn: "কী চাও? আমি বিরিয়ানি চাই।" },
        { previousPatternId: "X13.1", previousFormula: "Djuwanna [ACTION]?", previousFormula_bn: "জুওয়ানা [কাজ]?", combined: "Whaddaya think? Djuwanna go?", combined_bn: "কী মনে হয়? যেতে চাও?" }
      ],
      memoryTrick_bn: "'হোয়াডায়া' মনে রাখো — দোকানদার দ্রুত বলছে 'হোয়াডায়া ওয়ান্ট?' (কী চাও?)",
      chunks: [
        { en: "Whaddaya think", bn: "কী মনে করো?", pronunciation_bn: "হোয়াডায়া থিংক" },
        { en: "Whaddaya want", bn: "কী চাও?", pronunciation_bn: "হোয়াডায়া ওয়ান্ট" },
        { en: "Whaddaya mean", bn: "কী বোঝাতে চাও?", pronunciation_bn: "হোয়াডায়া মিন" }
      ],
      wordMap: {
        bn_sentence: "তুমি কী মনে করো?",
        en_sentence: "Whaddaya think?",
        mappings: [
          { bn_word: "কী", en_word: "What", type: "moved", bridgeRuleId: "BR2" },
          { bn_word: "(তুমি)", en_word: "do you", type: "added", bridgeRuleId: "BR5" },
          { bn_word: "মনে করো", en_word: "think", type: "direct" }
        ]
      },
      answerTemplates: [
        {
          situation_bn: "কেউ জিজ্ঞেস করছে কী চাও",
          question: "Whaddaya want?",
          question_bn: "কী চাও?",
          answerFormula: "I want [THING]",
          answerFormula_bn: "আমি [জিনিস] চাই",
          pronunciation_bn: "আই ওয়ান্ট",
          examples: [
            { answer: "I want some tea", answer_bn: "আমি একটু চা চাই", pronunciation_bn: "আই ওয়ান্ট সাম টি" }
          ]
        },
        {
          situation_bn: "কেউ জিজ্ঞেস করছে কী মনে হয়",
          question: "Whaddaya think?",
          question_bn: "কী মনে করো?",
          answerFormula: "I think [OPINION]",
          answerFormula_bn: "আমার মনে হয় [মতামত]",
          pronunciation_bn: "আই থিংক",
          examples: [
            { answer: "I think it's a good idea", answer_bn: "আমার মনে হয় ভালো আইডিয়া", pronunciation_bn: "আই থিংক ইটস এ গুড আইডিয়া" }
          ]
        },
        {
          situation_bn: "কেউ জিজ্ঞেস করছে কী বোঝাতে চাও",
          question: "Whaddaya mean?",
          question_bn: "কী বোঝাতে চাও?",
          answerFormula: "I mean [EXPLANATION]",
          answerFormula_bn: "আমি বোঝাচ্ছি [ব্যাখ্যা]",
          pronunciation_bn: "আই মিন",
          examples: [
            { answer: "I mean we should wait", answer_bn: "আমি বোঝাচ্ছি অপেক্ষা করা উচিত", pronunciation_bn: "আই মিন উই শুড ওয়েট" }
          ]
        }
      ],
      variations: [
        {
          variant: "opinion",
          label: "Whaddaya think about [TOPIC]?",
          label_bn: "কী মনে করো [বিষয়] নিয়ে?",
          formula: "Whaddaya think about [TOPIC]?",
          formula_bn: "হোয়াডায়া থিংক অ্যাবাউট [বিষয়]?",
          examples: [
            { en: "Whaddaya think about the new boss?", bn: "নতুন বসকে কেমন লাগছে?", pronunciation_bn: "হোয়াডায়া থিংক অ্যাবাউট দ্য নিউ বস?", slotValues: { ACTION: "think about the new boss" }, stage: 1 },
            { en: "Whaddaya think about this plan?", bn: "এই প্ল্যান নিয়ে কী মনে হয়?", pronunciation_bn: "হোয়াডায়া থিংক অ্যাবাউট দিস প্ল্যান?", slotValues: { ACTION: "think about this plan" }, stage: 2 },
            { en: "Whaddaya think about moving to Dhaka?", bn: "ঢাকায় যাওয়ার ব্যাপারে কী মনে হয়?", pronunciation_bn: "হোয়াডায়া থিংক অ্যাবাউট মুভিং টু ঢাকা?", slotValues: { ACTION: "think about moving to Dhaka" }, stage: 3 }
          ]
        },
        {
          variant: "want",
          label: "Whaddaya want [THING]?",
          label_bn: "কী চাও?",
          formula: "Whaddaya want [THING]?",
          formula_bn: "হোয়াডায়া ওয়ান্ট [জিনিস]?",
          examples: [
            { en: "Whaddaya want for lunch?", bn: "দুপুরে কী খেতে চাও?", pronunciation_bn: "হোয়াডায়া ওয়ান্ট ফর লাঞ্চ?", slotValues: { ACTION: "want for lunch" }, stage: 1 },
            { en: "Whaddaya want me to do?", bn: "আমাকে কী করতে বলো?", pronunciation_bn: "হোয়াডায়া ওয়ান্ট মি টু ডু?", slotValues: { ACTION: "want me to do" }, stage: 2 },
            { en: "Whaddaya want from the shop?", bn: "দোকান থেকে কী লাগবে?", pronunciation_bn: "হোয়াডায়া ওয়ান্ট ফ্রম দ্য শপ?", slotValues: { ACTION: "want from the shop" }, stage: 3 }
          ]
        },
        {
          variant: "doing",
          label: "Whaddaya doing?",
          label_bn: "কী করছো?",
          formula: "Whaddaya doing?",
          formula_bn: "হোয়াডায়া ডুইং?",
          examples: [
            { en: "Whaddaya doing tonight?", bn: "আজ রাতে কী করছো?", pronunciation_bn: "হোয়াডায়া ডুইং টুনাইট?", slotValues: { ACTION: "doing tonight" }, stage: 1 },
            { en: "Whaddaya doing after work?", bn: "অফিসের পর কী করবে?", pronunciation_bn: "হোয়াডায়া ডুইং আফটার ওয়ার্ক?", slotValues: { ACTION: "doing after work" }, stage: 2 },
            { en: "Whaddaya doing this weekend?", bn: "এই উইকেন্ডে কী করবে?", pronunciation_bn: "হোয়াডায়া ডুইং দিস উইকেন্ড?", slotValues: { ACTION: "doing this weekend" }, stage: 3 }
          ]
        }
      ],
      dialogueChains: [
        {
          id: "X13.4-D1",
          title_bn: "চায়ের দোকানে প্ল্যান করা",
          title_en: "Making plans at tea stall",
          situation_bn: "দুই বন্ধু চায়ের দোকানে বসে উইকেন্ডের প্ল্যান করছে",
          icon: "☕",
          turns: [
            { speaker_bn: "করিম", en: "Whaddaya doing this Friday?", bn: "এই শুক্রবার কী করবে?", pronunciation_bn: "হোয়াডায়া ডুইং দিস ফ্রাইডে?", patternId: "X13.4" },
            { speaker_bn: "রহিম", en: "Nothing much. Why?", bn: "তেমন কিছু না। কেন?", pronunciation_bn: "নাথিং মাচ। হোয়াই?" },
            { speaker_bn: "করিম", en: "Djuwanna go to Cox's Bazar?", bn: "কক্সবাজার যাবে?", pronunciation_bn: "জুওয়ানা গো টু কক্সবাজার?", patternId: "X13.1" },
            { speaker_bn: "রহিম", en: "Whaddaya think — bus or train?", bn: "কী মনে হয় — বাস না ট্রেন?", pronunciation_bn: "হোয়াডায়া থিংক — বাস অর ট্রেন?", patternId: "X13.4" }
          ],
          patternsUsed: ["X13.4", "X13.1"]
        }
      ],
      slots: [
        {
          name: "ACTION",
          description: "Any action verb or verb phrase",
          description_bn: "যেকোনো কাজ",
          acceptedTypes: ["verb", "verb_phrase"],
          examples: ["think", "want", "mean", "do", "need"]
        }
      ],
      examples: [
        { en: "Whaddaya think?", bn: "কী মনে করো?", pronunciation_bn: "হোয়াডায়া থিংক?", slotValues: { ACTION: "think" }, topicArea: "social", stage: 1, miniStory: { situation_bn: "বন্ধু রহিমের মতামত চাইছে নতুন প্ল্যান নিয়ে", icon: "🤔" } },
        { en: "Whaddaya want?", bn: "কী চাও?", pronunciation_bn: "হোয়াডায়া ওয়ান্ট?", slotValues: { ACTION: "want" }, topicArea: "daily_life", stage: 1, miniStory: { situation_bn: "দোকানদার কাস্টমারকে জিজ্ঞেস করছে", icon: "🏪" } },
        { en: "Whaddaya mean?", bn: "কী বোঝাতে চাও?", pronunciation_bn: "হোয়াডায়া মিন?", slotValues: { ACTION: "mean" }, topicArea: "social", stage: 1, miniStory: { situation_bn: "কথা বুঝতে পারেনি, আবার জিজ্ঞেস করছে", icon: "❓" } },
        { en: "Whaddaya need?", bn: "কী দরকার?", pronunciation_bn: "হোয়াডায়া নিড?", slotValues: { ACTION: "need" }, topicArea: "shopping", stage: 1, miniStory: { situation_bn: "ফার্মেসিতে দোকানদার জিজ্ঞেস করছে", icon: "💊" } },
        { en: "Whaddaya do for work?", bn: "তুমি কী কাজ করো?", pronunciation_bn: "হোয়াডায়া ডু ফর ওয়ার্ক?", slotValues: { ACTION: "do for work" }, topicArea: "work", stage: 1, miniStory: { situation_bn: "নতুন পরিচয়ে কেউ চাকরি নিয়ে জানতে চাইছে", icon: "💼" } },
        { en: "Whaddaya want for lunch?", bn: "দুপুরে কী খেতে চাও?", pronunciation_bn: "হোয়াডায়া ওয়ান্ট ফর লাঞ্চ?", slotValues: { ACTION: "want for lunch" }, topicArea: "food", stage: 2, miniStory: { situation_bn: "অফিসে কলিগ লাঞ্চ অর্ডার করছে", icon: "🍱" } },
        { en: "Whaddaya doing tonight?", bn: "আজ রাতে কী করবে?", pronunciation_bn: "হোয়াডায়া ডুইং টুনাইট?", slotValues: { ACTION: "doing tonight" }, topicArea: "social", stage: 2, miniStory: { situation_bn: "বন্ধু রাতে কোথাও যাওয়ার প্ল্যান করছে", icon: "🌙" } },
        { en: "Whaddaya think about this shirt?", bn: "এই জামাটা কেমন লাগছে?", pronunciation_bn: "হোয়াডায়া থিংক অ্যাবাউট দিস শার্ট?", slotValues: { ACTION: "think about this shirt" }, topicArea: "shopping", stage: 2, miniStory: { situation_bn: "কাপড়ের দোকানে বন্ধু মতামত চাইছে", icon: "👔" } },
        { en: "Whaddaya want me to bring?", bn: "আমাকে কী আনতে বলো?", pronunciation_bn: "হোয়াডায়া ওয়ান্ট মি টু ব্রিং?", slotValues: { ACTION: "want me to bring" }, topicArea: "social", stage: 2, miniStory: { situation_bn: "দাওয়াতে যাচ্ছে, কী আনবে জিজ্ঞেস করছে", icon: "🎁" } },
        { en: "Whaddaya say?", bn: "কী বলো?", pronunciation_bn: "হোয়াডায়া সে?", slotValues: { ACTION: "say" }, topicArea: "social", stage: 2, miniStory: { situation_bn: "একটা প্রস্তাব দিয়ে মতামত চাইছে", icon: "💬" } },
        { en: "Whaddaya know about this place?", bn: "এই জায়গা নিয়ে কী জানো?", pronunciation_bn: "হোয়াডায়া নো অ্যাবাউট দিস প্লেস?", slotValues: { ACTION: "know about this place" }, topicArea: "travel", stage: 3, miniStory: { situation_bn: "নতুন এলাকায় এসেছে, তথ্য চাইছে", icon: "🗺️" } },
        { en: "Whaddaya expect me to do?", bn: "আমার কাছে কী চাও?", pronunciation_bn: "হোয়াডায়া এক্সপেক্ট মি টু ডু?", slotValues: { ACTION: "expect me to do" }, topicArea: "work", stage: 3, miniStory: { situation_bn: "বস অনেক কাজ দিচ্ছে, কলিগ বলছে", icon: "😤" } },
        { en: "Whaddaya recommend here?", bn: "এখানে কী ভালো আছে?", pronunciation_bn: "হোয়াডায়া রেকমেন্ড হিয়ার?", slotValues: { ACTION: "recommend here" }, topicArea: "food", stage: 3, miniStory: { situation_bn: "নতুন রেস্টুরেন্টে ওয়েটারকে জিজ্ঞেস করছে", icon: "🍽️" } },
        { en: "Whaddaya want from the bazar?", bn: "বাজার থেকে কী লাগবে?", pronunciation_bn: "হোয়াডায়া ওয়ান্ট ফ্রম দ্য বাজার?", slotValues: { ACTION: "want from the bazar" }, topicArea: "shopping", stage: 3, miniStory: { situation_bn: "বাজারে যাচ্ছে, পরিবারের কাছে জিজ্ঞেস করছে", icon: "🛒" } },
        { en: "Whaddaya feel like doing?", bn: "কী করতে ইচ্ছে করছে?", pronunciation_bn: "হোয়াডায়া ফিল লাইক ডুইং?", slotValues: { ACTION: "feel like doing" }, topicArea: "social", stage: 3, miniStory: { situation_bn: "ছুটির দিনে বন্ধু জিজ্ঞেস করছে কী করবে", icon: "🎉" } }
      ]
    },
    {
      id: "X13.5",
      patternName: "Hafta [ACTION] — Have to [ACTION]",
      patternName_bn: "হ্যাফটা — করতে হবে",
      formula: "I hafta [ACTION]",
      formula_bn: "আই হ্যাফটা [কাজ]",
      concept_bn: "হ্যাফটা",
      formulaPronunciation_bn: "আই হ্যাফটা [কাজ]",
      formality: "casual",
      difficulty: "advanced",
      usageNote: "'Have to' becomes 'Hafta' (হ্যাফটা) in fast casual speech. Very common — you'll hear this in almost every English conversation.",
      usageNote_bn: "'Have to' দ্রুত বলায় হয়ে যায় 'হ্যাফটা'। খুবই কমন — প্রায় প্রতিটা ইংরেজি কথাবার্তায় শুনবে।",
      banglaStructureMap: "বাংলা: আমাকে যেতে হবে → English: I have to go → Fast: I hafta go",
      bridgeRuleIds: ["BR1", "BR5"],
      conversionSteps: {
        banglaThought: "তুমি বাংলায় বলো: 'আমাকে এখন যেতে হবে'",
        steps: [
          { step_bn: "ফুল ইংরেজি ভাবো: 'I have to go now'", result: "I have to go now" },
          { step_bn: "দ্রুত বলো — 'have to' মিশিয়ে দাও", result: "I hafta go now" },
          { step_bn: "'have to' মিশে হয়ে যায় 'hafta'", result: "I hafta go now" }
        ],
        finalResult: "I hafta go now",
        finalResult_bn: "আমাকে এখন যেতে হবে"
      },
      commonMistakes: [
        { wrong: "'হ্যাভ টু' — ধীরে আলাদা বলা", correct: "'হ্যাফটা' — একসাথে দ্রুত", explanation_bn: "নেটিভরা 'have to' আলাদা করে বলে না, 'হ্যাফটা' বলে" },
        { wrong: "'hafta' লেখায় ব্যবহার করা", correct: "লেখায় 'have to' লেখো, মুখে 'হ্যাফটা' বলো", explanation_bn: "এটা শুধু কথায়, লেখায় 'have to' লেখো" },
        { wrong: "শুধু 'I' দিয়ে ব্যবহার করা", correct: "You hafta, We hafta, They hafta — সবার সাথে চলে", explanation_bn: "'hafta' যেকোনো মানুষের সাথে বসে" }
      ],
      simpleRules: [
        { rule_bn: "'have to' দ্রুত বলায় 'হ্যাফটা' শোনায়", example: "I hafta go" },
        { rule_bn: "যেকোনো মানুষের সাথে চলে — I/You/We hafta", example: "You hafta try this" },
        { rule_bn: "'করতে হবে' বোঝাতে 'হ্যাফটা' বলো", example: "We hafta hurry" }
      ],
      usageSituations: [
        { situation_bn: "অফিস থেকে বের হতে হবে — কলিগকে বলছে", situation_en: "Need to leave office — telling colleague", exampleSentence: "I hafta go now", exampleSentence_bn: "আমাকে এখন যেতে হবে" },
        { situation_bn: "বাসায় ফিরতে হবে — বন্ধুকে বলছে", situation_en: "Need to go home — telling friend", exampleSentence: "I hafta get home early", exampleSentence_bn: "আমাকে তাড়াতাড়ি বাসায় যেতে হবে" },
        { situation_bn: "কাজ শেষ করতে হবে — ম্যানেজারকে বলছে", situation_en: "Need to finish work — telling manager", exampleSentence: "I hafta finish this today", exampleSentence_bn: "আমাকে আজকেই এটা শেষ করতে হবে" }
      ],
      sentenceBuilding: [
        { previousPatternId: "A1.1", previousFormula: "I want [THING]", previousFormula_bn: "আমি [জিনিস] চাই", combined: "I hafta go. I want to finish early.", combined_bn: "আমাকে যেতে হবে। তাড়াতাড়ি শেষ করতে চাই।" },
        { previousPatternId: "X13.3", previousFormula: "[COULDA/SHOULDA/WOULDA] [ACTION]", previousFormula_bn: "[কুডা/শুডা/উডা] [কাজ]", combined: "I hafta study. I shoulda started earlier.", combined_bn: "আমাকে পড়তে হবে। আগে শুরু করা উচিত ছিল।" }
      ],
      memoryTrick_bn: "'হ্যাফটা' মনে রাখো — মনে করো মা বলছে 'হ্যাফটা গো স্কুল!' (স্কুলে যেতে হবে!)",
      chunks: [
        { en: "I hafta go", bn: "আমাকে যেতে হবে", pronunciation_bn: "আই হ্যাফটা গো" },
        { en: "You hafta try", bn: "তোমাকে ট্রাই করতে হবে", pronunciation_bn: "ইউ হ্যাফটা ট্রাই" },
        { en: "We hafta hurry", bn: "আমাদের তাড়াতাড়ি করতে হবে", pronunciation_bn: "উই হ্যাফটা হারি" }
      ],
      wordMap: {
        bn_sentence: "আমাকে যেতে হবে",
        en_sentence: "I hafta go",
        mappings: [
          { bn_word: "আমাকে", en_word: "I", type: "direct" },
          { bn_word: "হবে", en_word: "hafta", type: "split", bridgeRuleId: "BR5" },
          { bn_word: "যেতে", en_word: "go", type: "direct" }
        ]
      },
      answerTemplates: [
        {
          situation_bn: "কেউ বলছে যেতে হবে — তুমি বলছো ঠিক আছে",
          question: "I hafta go now.",
          question_bn: "আমাকে এখন যেতে হবে।",
          answerFormula: "Okay, see you later",
          answerFormula_bn: "ঠিক আছে, পরে দেখা হবে",
          pronunciation_bn: "ওকে, সি ইউ লেটার",
          examples: [
            { answer: "Okay, see you tomorrow", answer_bn: "ঠিক আছে, কাল দেখা হবে", pronunciation_bn: "ওকে, সি ইউ টুমরো" }
          ]
        },
        {
          situation_bn: "কেউ বলছে কাজ করতে হবে — তুমি সাহায্য দিচ্ছো",
          question: "I hafta finish this report.",
          question_bn: "আমাকে এই রিপোর্ট শেষ করতে হবে।",
          answerFormula: "Need any help?",
          answerFormula_bn: "কোনো সাহায্য লাগবে?",
          pronunciation_bn: "নিড এনি হেল্প?",
          examples: [
            { answer: "Need any help with that?", answer_bn: "এটা নিয়ে কোনো সাহায্য লাগবে?", pronunciation_bn: "নিড এনি হেল্প উইথ দ্যাট?" }
          ]
        },
        {
          situation_bn: "কেউ বলছে তাড়াতাড়ি করতে হবে — তুমি তাড়া দিচ্ছো",
          question: "We hafta hurry!",
          question_bn: "আমাদের তাড়াতাড়ি করতে হবে!",
          answerFormula: "Let's go, come on!",
          answerFormula_bn: "চলো চলো, তাড়াতাড়ি!",
          pronunciation_bn: "লেটস গো, কাম অন!",
          examples: [
            { answer: "Let's go right now!", answer_bn: "এখনই চলো!", pronunciation_bn: "লেটস গো রাইট নাও!" }
          ]
        }
      ],
      variations: [
        {
          variant: "you_hafta",
          label: "You hafta [ACTION]",
          label_bn: "তোমাকে করতে হবে",
          formula: "You hafta [ACTION]",
          formula_bn: "ইউ হ্যাফটা [কাজ]",
          examples: [
            { en: "You hafta see this!", bn: "তোমাকে এটা দেখতে হবে!", pronunciation_bn: "ইউ হ্যাফটা সি দিস!", slotValues: { ACTION: "see this" }, stage: 1 },
            { en: "You hafta try the biryani here.", bn: "তোমাকে এখানকার বিরিয়ানি খেতে হবে।", pronunciation_bn: "ইউ হ্যাফটা ট্রাই দ্য বিরিয়ানি হিয়ার।", slotValues: { ACTION: "try the biryani here" }, stage: 2 },
            { en: "You hafta be more careful.", bn: "তোমাকে আরো সাবধান থাকতে হবে।", pronunciation_bn: "ইউ হ্যাফটা বি মোর কেয়ারফুল।", slotValues: { ACTION: "be more careful" }, stage: 3 }
          ]
        },
        {
          variant: "we_hafta",
          label: "We hafta [ACTION]",
          label_bn: "আমাদের করতে হবে",
          formula: "We hafta [ACTION]",
          formula_bn: "উই হ্যাফটা [কাজ]",
          examples: [
            { en: "We hafta leave now.", bn: "আমাদের এখন যেতে হবে।", pronunciation_bn: "উই হ্যাফটা লিভ নাও।", slotValues: { ACTION: "leave now" }, stage: 1 },
            { en: "We hafta talk about this.", bn: "আমাদের এটা নিয়ে কথা বলতে হবে।", pronunciation_bn: "উই হ্যাফটা টক অ্যাবাউট দিস।", slotValues: { ACTION: "talk about this" }, stage: 2 },
            { en: "We hafta save more money.", bn: "আমাদের আরো টাকা জমাতে হবে।", pronunciation_bn: "উই হ্যাফটা সেভ মোর মানি।", slotValues: { ACTION: "save more money" }, stage: 3 }
          ]
        },
        {
          variant: "negative",
          label: "Don't hafta [ACTION]",
          label_bn: "করতে হবে না",
          formula: "You don't hafta [ACTION]",
          formula_bn: "ইউ ডোন্ট হ্যাফটা [কাজ]",
          examples: [
            { en: "You don't hafta worry.", bn: "তোমাকে চিন্তা করতে হবে না।", pronunciation_bn: "ইউ ডোন্ট হ্যাফটা ওয়ারি।", slotValues: { ACTION: "worry" }, stage: 2 },
            { en: "You don't hafta come early.", bn: "তোমাকে তাড়াতাড়ি আসতে হবে না।", pronunciation_bn: "ইউ ডোন্ট হ্যাফটা কাম আর্লি।", slotValues: { ACTION: "come early" }, stage: 2 },
            { en: "You don't hafta pay for this.", bn: "এটার জন্য টাকা দিতে হবে না।", pronunciation_bn: "ইউ ডোন্ট হ্যাফটা পে ফর দিস।", slotValues: { ACTION: "pay for this" }, stage: 3 }
          ]
        }
      ],
      dialogueChains: [
        {
          id: "X13.5-D1",
          title_bn: "সকালে তাড়াহুড়ো",
          title_en: "Morning rush",
          situation_bn: "সকালে অফিসে যেতে দেরি হচ্ছে, স্বামী-স্ত্রী তাড়াহুড়ো করছে",
          icon: "⏰",
          turns: [
            { speaker_bn: "স্বামী", en: "I hafta go now, I'm late!", bn: "আমাকে এখনই যেতে হবে, দেরি হচ্ছে!", pronunciation_bn: "আই হ্যাফটা গো নাও, আইম লেট!", patternId: "X13.5" },
            { speaker_bn: "স্ত্রী", en: "Wait! You hafta eat breakfast first.", bn: "দাঁড়াও! আগে নাস্তা করতে হবে।", pronunciation_bn: "ওয়েট! ইউ হ্যাফটা ঈট ব্রেকফাস্ট ফার্স্ট।", patternId: "X13.5" },
            { speaker_bn: "স্বামী", en: "I don't hafta — I'll eat at the office.", bn: "হবে না — অফিসে খাবো।", pronunciation_bn: "আই ডোন্ট হ্যাফটা — আইল ঈট অ্যাট দি অফিস।", patternId: "X13.5" },
            { speaker_bn: "স্ত্রী", en: "At least take your tiffin box!", bn: "অন্তত টিফিন বক্স নিয়ে যাও!", pronunciation_bn: "অ্যাট লিস্ট টেক ইয়োর টিফিন বক্স!" }
          ],
          patternsUsed: ["X13.5"]
        }
      ],
      slots: [
        {
          name: "ACTION",
          description: "Any action verb or verb phrase",
          description_bn: "যেকোনো কাজ",
          acceptedTypes: ["verb", "verb_phrase"],
          examples: ["go", "leave", "finish", "study", "work"]
        }
      ],
      examples: [
        { en: "I hafta go now.", bn: "আমাকে এখন যেতে হবে।", pronunciation_bn: "আই হ্যাফটা গো নাও।", slotValues: { ACTION: "go now" }, topicArea: "daily_life", stage: 1, miniStory: { situation_bn: "অফিসে দেরি হচ্ছে, তাড়াতাড়ি বের হতে হবে", icon: "🏃" } },
        { en: "I hafta finish this.", bn: "আমাকে এটা শেষ করতে হবে।", pronunciation_bn: "আই হ্যাফটা ফিনিশ দিস।", slotValues: { ACTION: "finish this" }, topicArea: "work", stage: 1, miniStory: { situation_bn: "ডেডলাইন কাল, কাজ শেষ করতে হবে", icon: "📋" } },
        { en: "I hafta call my mom.", bn: "আমাকে মাকে ফোন করতে হবে।", pronunciation_bn: "আই হ্যাফটা কল মাই মম।", slotValues: { ACTION: "call my mom" }, topicArea: "family", stage: 1, miniStory: { situation_bn: "মা ফোন করতে বলেছিল, এখনো করা হয়নি", icon: "📞" } },
        { en: "I hafta study tonight.", bn: "আমাকে আজ রাতে পড়তে হবে।", pronunciation_bn: "আই হ্যাফটা স্টাডি টুনাইট।", slotValues: { ACTION: "study tonight" }, topicArea: "education", stage: 1, miniStory: { situation_bn: "আগামীকাল পরীক্ষা, রাতে পড়তে হবে", icon: "📚" } },
        { en: "I hafta pay the rent.", bn: "আমাকে ভাড়া দিতে হবে।", pronunciation_bn: "আই হ্যাফটা পে দ্য রেন্ট।", slotValues: { ACTION: "pay the rent" }, topicArea: "finance", stage: 1, miniStory: { situation_bn: "মাসের শুরু, বাড়িওয়ালাকে ভাড়া দিতে হবে", icon: "🏠" } },
        { en: "You hafta try this biryani!", bn: "তোমাকে এই বিরিয়ানি খেতে হবে!", pronunciation_bn: "ইউ হ্যাফটা ট্রাই দিস বিরিয়ানি!", slotValues: { ACTION: "try this biryani" }, topicArea: "food", stage: 2, miniStory: { situation_bn: "বন্ধু নতুন রেস্টুরেন্টের বিরিয়ানি ট্রাই করতে বলছে", icon: "🍛" } },
        { en: "We hafta leave early tomorrow.", bn: "আমাদের কাল তাড়াতাড়ি বের হতে হবে।", pronunciation_bn: "উই হ্যাফটা লিভ আর্লি টুমরো।", slotValues: { ACTION: "leave early tomorrow" }, topicArea: "travel", stage: 2, miniStory: { situation_bn: "কাল ট্রেন সকালে, তাড়াতাড়ি যেতে হবে", icon: "🚂" } },
        { en: "I hafta get a new phone.", bn: "আমাকে নতুন ফোন কিনতে হবে।", pronunciation_bn: "আই হ্যাফটা গেট এ নিউ ফোন।", slotValues: { ACTION: "get a new phone" }, topicArea: "technology", stage: 2, miniStory: { situation_bn: "পুরোনো ফোন নষ্ট হয়ে গেছে", icon: "📱" } },
        { en: "I hafta wake up at five.", bn: "আমাকে পাঁচটায় উঠতে হবে।", pronunciation_bn: "আই হ্যাফটা ওয়েক আপ অ্যাট ফাইভ।", slotValues: { ACTION: "wake up at five" }, topicArea: "daily_life", stage: 2, miniStory: { situation_bn: "ফজরের নামাজের জন্য তাড়াতাড়ি উঠতে হবে", icon: "🕌" } },
        { en: "I hafta send this email.", bn: "আমাকে এই ইমেইল পাঠাতে হবে।", pronunciation_bn: "আই হ্যাফটা সেন্ড দিস ইমেইল।", slotValues: { ACTION: "send this email" }, topicArea: "work", stage: 2, miniStory: { situation_bn: "বসের ইমেইলের রিপ্লাই এখনো দেওয়া হয়নি", icon: "📧" } },
        { en: "I hafta pick up my kid from school.", bn: "আমাকে স্কুল থেকে বাচ্চাকে নিয়ে আসতে হবে।", pronunciation_bn: "আই হ্যাফটা পিক আপ মাই কিড ফ্রম স্কুল।", slotValues: { ACTION: "pick up my kid from school" }, topicArea: "family", stage: 3, miniStory: { situation_bn: "স্কুল ছুটি হচ্ছে, বাচ্চাকে আনতে যেতে হবে", icon: "🏫" } },
        { en: "We hafta save more for Eid.", bn: "আমাদের ঈদের জন্য আরো জমাতে হবে।", pronunciation_bn: "উই হ্যাফটা সেভ মোর ফর ঈদ।", slotValues: { ACTION: "save more for Eid" }, topicArea: "finance", stage: 3, miniStory: { situation_bn: "ঈদ আসছে, কেনাকাটার জন্য টাকা জমাতে হবে", icon: "🌙" } },
        { en: "I hafta renew my passport.", bn: "আমাকে পাসপোর্ট রিনিউ করতে হবে।", pronunciation_bn: "আই হ্যাফটা রিনিউ মাই পাসপোর্ট।", slotValues: { ACTION: "renew my passport" }, topicArea: "government", stage: 3, miniStory: { situation_bn: "পাসপোর্টের মেয়াদ শেষ হচ্ছে", icon: "🛂" } },
        { en: "You hafta be there by nine.", bn: "তোমাকে নয়টার মধ্যে পৌঁছাতে হবে।", pronunciation_bn: "ইউ হ্যাফটা বি দেয়ার বাই নাইন।", slotValues: { ACTION: "be there by nine" }, topicArea: "work", stage: 3, miniStory: { situation_bn: "মিটিং নয়টায়, দেরি করা যাবে না", icon: "🕘" } },
        { en: "I hafta fix the fan before summer.", bn: "আমাকে গরমের আগে ফ্যান ঠিক করতে হবে।", pronunciation_bn: "আই হ্যাফটা ফিক্স দ্য ফ্যান বিফোর সামার।", slotValues: { ACTION: "fix the fan before summer" }, topicArea: "daily_life", stage: 3, miniStory: { situation_bn: "গরম আসছে, ফ্যান কাজ করছে না", icon: "🪭" } }
      ]
    },
    {
      id: "X13.6",
      patternName: "Useta [ACTION] — Used to [ACTION]",
      patternName_bn: "ইউসটা — আগে করতাম",
      formula: "I useta [ACTION]",
      formula_bn: "আই ইউসটা [কাজ]",
      concept_bn: "ইউসটা",
      formulaPronunciation_bn: "আই ইউসটা [কাজ]",
      formality: "casual",
      difficulty: "advanced",
      usageNote: "'Used to' becomes 'Useta' (ইউসটা) in fast speech. It means something you did regularly before but don't do anymore.",
      usageNote_bn: "'Used to' দ্রুত বলায় হয়ে যায় 'ইউসটা'। মানে এমন কিছু যা আগে করতে কিন্তু এখন আর করো না।",
      banglaStructureMap: "বাংলা: আমি আগে খেলতাম → English: I used to play → Fast: I useta play",
      bridgeRuleIds: ["BR1", "BR5"],
      conversionSteps: {
        banglaThought: "তুমি বাংলায় বলো: 'আমি আগে ক্রিকেট খেলতাম'",
        steps: [
          { step_bn: "ফুল ইংরেজি ভাবো: 'I used to play cricket'", result: "I used to play cricket" },
          { step_bn: "দ্রুত বলো — 'used to' মিশিয়ে দাও", result: "I useta play cricket" },
          { step_bn: "'used to' মিশে হয়ে যায় 'useta'", result: "I useta play cricket" }
        ],
        finalResult: "I useta play cricket",
        finalResult_bn: "আমি আগে ক্রিকেট খেলতাম"
      },
      commonMistakes: [
        { wrong: "'ইউজড টু' — ধীরে আলাদা বলা", correct: "'ইউসটা' — একসাথে দ্রুত", explanation_bn: "নেটিভরা 'used to' আলাদা করে বলে না, 'ইউসটা' বলে" },
        { wrong: "'use to' লেখা (d বাদ দেওয়া)", correct: "লেখায় 'used to' লেখো, মুখে 'ইউসটা' বলো", explanation_bn: "লেখায় 'd' থাকে, কিন্তু মুখে 'd' শোনা যায় না" },
        { wrong: "এখনো করে এমন কিছুর জন্য ব্যবহার", correct: "শুধু আগে করতাম কিন্তু এখন করি না — এমন কিছুর জন্য", explanation_bn: "'useta' মানে আগের অভ্যাস — এখন আর হয় না" }
      ],
      simpleRules: [
        { rule_bn: "'used to' দ্রুত বলায় 'ইউসটা' শোনায়", example: "I useta live here" },
        { rule_bn: "'আগে করতাম' বোঝাতে 'ইউসটা' বলো", example: "I useta walk to school" },
        { rule_bn: "এটা শুধু পুরোনো অভ্যাসের জন্য — এখন আর করি না", example: "I useta smoke" }
      ],
      usageSituations: [
        { situation_bn: "পুরোনো দিনের কথা মনে করছে — আগে গ্রামে থাকতাম", situation_en: "Remembering old days — used to live in village", exampleSentence: "I useta live in a village", exampleSentence_bn: "আমি আগে গ্রামে থাকতাম" },
        { situation_bn: "ছোটবেলার কথা বলছে — আগে ক্রিকেট খেলতাম", situation_en: "Talking about childhood — used to play cricket", exampleSentence: "I useta play cricket every day", exampleSentence_bn: "আমি আগে রোজ ক্রিকেট খেলতাম" },
        { situation_bn: "খাবারের অভ্যাস বদলেছে — আগে মিষ্টি খেতাম অনেক", situation_en: "Food habit changed — used to eat lots of sweets", exampleSentence: "I useta eat sweets a lot", exampleSentence_bn: "আমি আগে অনেক মিষ্টি খেতাম" }
      ],
      sentenceBuilding: [
        { previousPatternId: "A1.1", previousFormula: "I want [THING]", previousFormula_bn: "আমি [জিনিস] চাই", combined: "I useta want a bike. Now I want a car.", combined_bn: "আমি আগে বাইক চাইতাম। এখন গাড়ি চাই।" },
        { previousPatternId: "X13.5", previousFormula: "I hafta [ACTION]", previousFormula_bn: "আই হ্যাফটা [কাজ]", combined: "I useta walk to school. Now I hafta take the bus.", combined_bn: "আমি আগে হেঁটে স্কুলে যেতাম। এখন বাসে যেতে হয়।" }
      ],
      memoryTrick_bn: "'ইউসটা' মনে রাখো — দাদু বলছে 'আমি ইউসটা ওয়াক টু স্কুল' (আগে হেঁটে স্কুলে যেতাম)",
      chunks: [
        { en: "I useta", bn: "আমি আগে করতাম", pronunciation_bn: "আই ইউসটা" },
        { en: "I useta live", bn: "আমি আগে থাকতাম", pronunciation_bn: "আই ইউসটা লিভ" },
        { en: "I useta play", bn: "আমি আগে খেলতাম", pronunciation_bn: "আই ইউসটা প্লে" }
      ],
      wordMap: {
        bn_sentence: "আমি আগে খেলতাম",
        en_sentence: "I useta play",
        mappings: [
          { bn_word: "আমি", en_word: "I", type: "direct" },
          { bn_word: "আগে", en_word: "useta", type: "split", bridgeRuleId: "BR5" },
          { bn_word: "খেলতাম", en_word: "play", type: "direct" }
        ]
      },
      answerTemplates: [
        {
          situation_bn: "কেউ পুরোনো অভ্যাসের কথা বলছে — তুমিও বলছো",
          question: "I useta play cricket.",
          question_bn: "আমি আগে ক্রিকেট খেলতাম।",
          answerFormula: "Me too! I useta [ACTION] too",
          answerFormula_bn: "আমিও! আমিও আগে [কাজ] করতাম",
          pronunciation_bn: "মি টু! আই ইউসটা [কাজ] টু",
          examples: [
            { answer: "Me too! I useta play every evening", answer_bn: "আমিও! আমিও প্রতিদিন বিকেলে খেলতাম", pronunciation_bn: "মি টু! আই ইউসটা প্লে এভরি ইভনিং" }
          ]
        },
        {
          situation_bn: "কেউ আগের কথা বলছে — তুমি জানতে চাইছো কেন ছেড়ে দিল",
          question: "I useta swim a lot.",
          question_bn: "আমি আগে অনেক সাঁতার কাটতাম।",
          answerFormula: "Why did you stop?",
          answerFormula_bn: "কেন ছেড়ে দিলে?",
          pronunciation_bn: "হোয়াই ডিড ইউ স্টপ?",
          examples: [
            { answer: "Why did you stop swimming?", answer_bn: "সাঁতার কেন ছেড়ে দিলে?", pronunciation_bn: "হোয়াই ডিড ইউ স্টপ সুইমিং?" }
          ]
        },
        {
          situation_bn: "কেউ বলছে আগে এখানে থাকতাম — তুমি আগ্রহী",
          question: "I useta live in Sylhet.",
          question_bn: "আমি আগে সিলেটে থাকতাম।",
          answerFormula: "Really? When was that?",
          answerFormula_bn: "সত্যি? কবে?",
          pronunciation_bn: "রিয়ালি? হোয়েন ওয়াজ দ্যাট?",
          examples: [
            { answer: "Really? When did you move?", answer_bn: "সত্যি? কবে চলে এলে?", pronunciation_bn: "রিয়ালি? হোয়েন ডিড ইউ মুভ?" }
          ]
        }
      ],
      variations: [
        {
          variant: "question",
          label: "Did you useta [ACTION]?",
          label_bn: "তুমি কি আগে করতে?",
          formula: "Did you useta [ACTION]?",
          formula_bn: "ডিড ইউ ইউসটা [কাজ]?",
          examples: [
            { en: "Did you useta live here?", bn: "তুমি কি আগে এখানে থাকতে?", pronunciation_bn: "ডিড ইউ ইউসটা লিভ হিয়ার?", slotValues: { ACTION: "live here" }, stage: 1 },
            { en: "Did you useta play football?", bn: "তুমি কি আগে ফুটবল খেলতে?", pronunciation_bn: "ডিড ইউ ইউসটা প্লে ফুটবল?", slotValues: { ACTION: "play football" }, stage: 2 },
            { en: "Did you useta work in Dhaka?", bn: "তুমি কি আগে ঢাকায় চাকরি করতে?", pronunciation_bn: "ডিড ইউ ইউসটা ওয়ার্ক ইন ঢাকা?", slotValues: { ACTION: "work in Dhaka" }, stage: 3 }
          ]
        },
        {
          variant: "negative",
          label: "I never useta [ACTION]",
          label_bn: "আমি আগে কখনো করতাম না",
          formula: "I never useta [ACTION]",
          formula_bn: "আই নেভার ইউসটা [কাজ]",
          examples: [
            { en: "I never useta cook.", bn: "আমি আগে কখনো রান্না করতাম না।", pronunciation_bn: "আই নেভার ইউসটা কুক।", slotValues: { ACTION: "cook" }, stage: 2 },
            { en: "I never useta wake up early.", bn: "আমি আগে কখনো তাড়াতাড়ি উঠতাম না।", pronunciation_bn: "আই নেভার ইউসটা ওয়েক আপ আর্লি।", slotValues: { ACTION: "wake up early" }, stage: 2 },
            { en: "I never useta like fish.", bn: "আমি আগে কখনো মাছ পছন্দ করতাম না।", pronunciation_bn: "আই নেভার ইউসটা লাইক ফিশ।", slotValues: { ACTION: "like fish" }, stage: 3 }
          ]
        },
        {
          variant: "comparison",
          label: "I useta [ACTION], but now I [ACTION]",
          label_bn: "আগে করতাম, কিন্তু এখন করি",
          formula: "I useta [ACTION], but now I [ACTION]",
          formula_bn: "আই ইউসটা [কাজ], বাট নাও আই [কাজ]",
          examples: [
            { en: "I useta walk, but now I take the bus.", bn: "আমি আগে হাঁটতাম, কিন্তু এখন বাসে যাই।", pronunciation_bn: "আই ইউসটা ওয়াক, বাট নাও আই টেক দ্য বাস।", slotValues: { ACTION: "walk" }, stage: 1 },
            { en: "I useta hate vegetables, but now I love them.", bn: "আমি আগে সবজি পছন্দ করতাম না, কিন্তু এখন ভালোবাসি।", pronunciation_bn: "আই ইউসটা হেট ভেজিটেবলস, বাট নাও আই লাভ দেম।", slotValues: { ACTION: "hate vegetables" }, stage: 2 },
            { en: "I useta be shy, but now I'm confident.", bn: "আমি আগে লাজুক ছিলাম, কিন্তু এখন আত্মবিশ্বাসী।", pronunciation_bn: "আই ইউসটা বি শাই, বাট নাও আইম কনফিডেন্ট।", slotValues: { ACTION: "be shy" }, stage: 3 }
          ]
        }
      ],
      dialogueChains: [
        {
          id: "X13.6-D1",
          title_bn: "পুরোনো বন্ধুর সাথে দেখা",
          title_en: "Meeting an old friend",
          situation_bn: "অনেকদিন পর দুই স্কুল বন্ধুর দেখা হয়েছে, পুরোনো দিনের কথা বলছে",
          icon: "👋",
          turns: [
            { speaker_bn: "করিম", en: "Hey! I useta see you at the playground every day!", bn: "হেই! আমি তোমাকে রোজ মাঠে দেখতাম!", pronunciation_bn: "হেই! আই ইউসটা সি ইউ অ্যাট দ্য প্লেগ্রাউন্ড এভরি ডে!", patternId: "X13.6" },
            { speaker_bn: "রহিম", en: "Yeah! We useta play cricket all evening.", bn: "হ্যাঁ! আমরা সারা বিকেল ক্রিকেট খেলতাম।", pronunciation_bn: "ইয়া! উই ইউসটা প্লে ক্রিকেট অল ইভনিং।", patternId: "X13.6" },
            { speaker_bn: "করিম", en: "I useta be the best bowler!", bn: "আমি সবচেয়ে ভালো বোলার ছিলাম!", pronunciation_bn: "আই ইউসটা বি দ্য বেস্ট বোলার!", patternId: "X13.6" },
            { speaker_bn: "রহিম", en: "Ha! You wish! Djuwanna play again sometime?", bn: "হা! স্বপ্ন দেখো! আবার কখনো খেলবে?", pronunciation_bn: "হা! ইউ উইশ! জুওয়ানা প্লে এগেইন সামটাইম?", patternId: "X13.1" }
          ],
          patternsUsed: ["X13.6", "X13.1"]
        }
      ],
      slots: [
        {
          name: "ACTION",
          description: "Any action verb or verb phrase — something you did before but not anymore",
          description_bn: "যে কাজ আগে করতে কিন্তু এখন আর করো না",
          acceptedTypes: ["verb", "verb_phrase"],
          examples: ["play", "live here", "walk to school", "eat sweets", "work there"]
        }
      ],
      examples: [
        { en: "I useta live in a village.", bn: "আমি আগে গ্রামে থাকতাম।", pronunciation_bn: "আই ইউসটা লিভ ইন এ ভিলেজ।", slotValues: { ACTION: "live in a village" }, topicArea: "daily_life", stage: 1, miniStory: { situation_bn: "রহিম ঢাকায় এসেছে, আগে গ্রামে থাকতো", icon: "🏡" } },
        { en: "I useta play cricket every day.", bn: "আমি আগে রোজ ক্রিকেট খেলতাম।", pronunciation_bn: "আই ইউসটা প্লে ক্রিকেট এভরি ডে।", slotValues: { ACTION: "play cricket every day" }, topicArea: "sports", stage: 1, miniStory: { situation_bn: "স্কুলের সময় রোজ মাঠে ক্রিকেট খেলতো", icon: "🏏" } },
        { en: "I useta walk to school.", bn: "আমি আগে হেঁটে স্কুলে যেতাম।", pronunciation_bn: "আই ইউসটা ওয়াক টু স্কুল।", slotValues: { ACTION: "walk to school" }, topicArea: "education", stage: 1, miniStory: { situation_bn: "ছোটবেলায় স্কুল কাছে ছিল, হেঁটে যেতো", icon: "🚶" } },
        { en: "I useta eat a lot of sweets.", bn: "আমি আগে অনেক মিষ্টি খেতাম।", pronunciation_bn: "আই ইউসটা ঈট এ লট অফ সুইটস।", slotValues: { ACTION: "eat a lot of sweets" }, topicArea: "food", stage: 1, miniStory: { situation_bn: "ছোটবেলায় মিষ্টি খুব পছন্দ ছিল", icon: "🍬" } },
        { en: "I useta ride a bicycle.", bn: "আমি আগে সাইকেল চালাতাম।", pronunciation_bn: "আই ইউসটা রাইড এ বাইসিকেল।", slotValues: { ACTION: "ride a bicycle" }, topicArea: "transport", stage: 1, miniStory: { situation_bn: "স্কুলে সাইকেলে যেতো, এখন বাইকে", icon: "🚲" } },
        { en: "I useta wake up at five for Fajr.", bn: "আমি আগে ফজরের জন্য পাঁচটায় উঠতাম।", pronunciation_bn: "আই ইউসটা ওয়েক আপ অ্যাট ফাইভ ফর ফজর।", slotValues: { ACTION: "wake up at five for Fajr" }, topicArea: "religion", stage: 2, miniStory: { situation_bn: "আগে রোজ ফজরের নামাজ পড়তো, এখন অনিয়মিত", icon: "🕌" } },
        { en: "I useta work in a garment factory.", bn: "আমি আগে গার্মেন্টসে কাজ করতাম।", pronunciation_bn: "আই ইউসটা ওয়ার্ক ইন এ গার্মেন্ট ফ্যাক্টরি।", slotValues: { ACTION: "work in a garment factory" }, topicArea: "work", stage: 2, miniStory: { situation_bn: "আগে গার্মেন্টসে ছিল, এখন নিজের ব্যবসা করে", icon: "🧵" } },
        { en: "I useta take the train to Chittagong.", bn: "আমি আগে চট্টগ্রাম ট্রেনে যেতাম।", pronunciation_bn: "আই ইউসটা টেক দ্য ট্রেন টু চিটাগাং।", slotValues: { ACTION: "take the train to Chittagong" }, topicArea: "travel", stage: 2, miniStory: { situation_bn: "আগে ট্রেনে যেতো, এখন বাসে", icon: "🚂" } },
        { en: "I useta teach at a school.", bn: "আমি আগে স্কুলে পড়াতাম।", pronunciation_bn: "আই ইউসটা টিচ অ্যাট এ স্কুল।", slotValues: { ACTION: "teach at a school" }, topicArea: "education", stage: 2, miniStory: { situation_bn: "আগে স্কুল টিচার ছিল, এখন কলেজে", icon: "👨‍🏫" } },
        { en: "I useta shop at the old bazar.", bn: "আমি আগে পুরোনো বাজারে কেনাকাটা করতাম।", pronunciation_bn: "আই ইউসটা শপ অ্যাট দি ওল্ড বাজার।", slotValues: { ACTION: "shop at the old bazar" }, topicArea: "shopping", stage: 2, miniStory: { situation_bn: "পুরোনো বাজার ভেঙে দিয়েছে, এখন সুপারশপে যায়", icon: "🏪" } },
        { en: "We useta have family dinners every Friday.", bn: "আমরা আগে প্রতি শুক্রবার পরিবারে একসাথে খেতাম।", pronunciation_bn: "উই ইউসটা হ্যাভ ফ্যামিলি ডিনারস এভরি ফ্রাইডে।", slotValues: { ACTION: "have family dinners every Friday" }, topicArea: "family", stage: 3, miniStory: { situation_bn: "আগে প্রতি শুক্রবার পুরো পরিবার একসাথে খেতো", icon: "👨‍👩‍👧‍👦" } },
        { en: "I useta be scared of the dark.", bn: "আমি আগে অন্ধকারে ভয় পেতাম।", pronunciation_bn: "আই ইউসটা বি স্কেয়ার্ড অফ দ্য ডার্ক।", slotValues: { ACTION: "be scared of the dark" }, topicArea: "daily_life", stage: 3, miniStory: { situation_bn: "ছোটবেলায় অন্ধকারে ভয় লাগতো, এখন লাগে না", icon: "🌑" } },
        { en: "I useta send letters to my grandma.", bn: "আমি আগে দাদিকে চিঠি লিখতাম।", pronunciation_bn: "আই ইউসটা সেন্ড লেটারস টু মাই গ্র্যান্ডমা।", slotValues: { ACTION: "send letters to my grandma" }, topicArea: "family", stage: 3, miniStory: { situation_bn: "মোবাইলের আগে দাদিকে চিঠি পাঠাতো", icon: "✉️" } },
        { en: "I useta sell vegetables at the market.", bn: "আমি আগে বাজারে সবজি বিক্রি করতাম।", pronunciation_bn: "আই ইউসটা সেল ভেজিটেবলস অ্যাট দ্য মার্কেট।", slotValues: { ACTION: "sell vegetables at the market" }, topicArea: "work", stage: 3, miniStory: { situation_bn: "আগে বাজারে সবজি বিক্রি করতো, এখন দোকান দিয়েছে", icon: "🥬" } },
        { en: "I useta fish in the river near our house.", bn: "আমি আগে বাড়ির পাশের নদীতে মাছ ধরতাম।", pronunciation_bn: "আই ইউসটা ফিশ ইন দ্য রিভার নিয়ার আওয়ার হাউস।", slotValues: { ACTION: "fish in the river near our house" }, topicArea: "daily_life", stage: 3, miniStory: { situation_bn: "গ্রামে নদীতে মাছ ধরতো, শহরে এসে আর পারে না", icon: "🎣" } }
      ]
    }
  ]
};
