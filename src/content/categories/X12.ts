import { PatternCategory } from "@/types/pattern";

export const categoryX12: PatternCategory = {
  id: "X12",
  slug: "collocations-word-partnerships",
  name: "Collocations — Word Partnerships",
  name_bn: "শব্দ জুটি — কোন শব্দের সাথে কোনটা যায়",
  description: "Learn which words go together naturally in English — make a decision, not do a decision.",
  description_bn: "ইংরেজিতে কোন শব্দের সাথে কোন শব্দ বসে সেটা শেখো। বাংলায় 'ওষুধ খাওয়া' বলি কিন্তু ইংরেজিতে 'take medicine' বলতে হয়, 'eat medicine' না।",
  icon: "🤝",
  group: "X",
  groupName: "Common Mistakes & Awareness",
  groupName_bn: "ভুল এড়ানো ও সচেতনতা",
  difficulty: "intermediate",
  patterns: [
    {
      id: "X12.1",
      patternName: "make a [THING] — decision/plan/mistake",
      patternName_bn: "make দিয়ে বলা",
      formula: "make a [THING]",
      formula_bn: "make a [জিনিস]",
      concept_bn: "make",
      formulaPronunciation_bn: "মেইক আ [জিনিস]",
      bridgeRuleIds: ["BR1", "BR3"],
      usageNote: "Use 'make' with decisions, plans, mistakes, choices, and attempts. Don't use 'do' for these.",
      usageNote_bn: "সিদ্ধান্ত, পরিকল্পনা, ভুল, পছন্দ এগুলোর সাথে 'make' ব্যবহার করো, 'do' না। বাংলায় আমরা 'করা' বলি কিন্তু ইংরেজিতে এগুলোর জন্য 'make' বলতে হয়।",
      formality: "casual",
      difficulty: "intermediate",
      conversionSteps: {
        banglaThought: "তুমি বাংলায় বলো: 'আমি একটা সিদ্ধান্ত করবো'",
        steps: [
          {
            step_bn: "বাংলায় 'সিদ্ধান্ত করা' বলি — decision-এর সাথে make বসে",
            result: "make"
          },
          {
            step_bn: "প্রথমে I বসাও, তারপর make বসবে দুটোর মাঝে",
            result: "I make"
          },
          {
            step_bn: "make এবং decision-এর মাঝে a বসাও",
            result: "I make a decision"
          }
        ],
        finalResult: "I make a decision",
        finalResult_bn: "আমি একটা সিদ্ধান্ত করবো"
      },
      commonMistakes: [
        {
          wrong: "I do a decision",
          correct: "I make a decision",
          explanation_bn: "decision-এর সাথে do না, make বলতে হয়"
        },
        {
          wrong: "I make homework",
          correct: "I do homework",
          explanation_bn: "homework-এর সাথে make না, do বলতে হয়"
        },
        {
          wrong: "He made a work",
          correct: "He did work",
          explanation_bn: "work-এর সাথে make না, do বলতে হয়"
        }
      ],
      simpleRules: [
        { rule_bn: "সিদ্ধান্ত, পরিকল্পনা, ভুল এগুলোর সাথে make বসে", example: "I make a decision" },
        { rule_bn: "make-এর পরে a/an বসে যদি একটা হয়", example: "make a plan" },
        { rule_bn: "তৈরি করা জিনিস না, মাথায় ভাবা জিনিসের জন্য make", example: "make a choice" }
      ],
      usageSituations: [
        { situation_bn: "অফিসে বস যখন সিদ্ধান্ত নেয়", situation_en: "When the boss makes a decision at office", exampleSentence: "I need to make a decision", exampleSentence_bn: "আমাকে একটা সিদ্ধান্ত নিতে হবে" },
        { situation_bn: "পরীক্ষার আগে পড়ার পরিকল্পনা করো", situation_en: "Making a study plan before exams", exampleSentence: "Let me make a plan", exampleSentence_bn: "আমাকে একটা পরিকল্পনা করতে দাও" },
        { situation_bn: "গণিতে ভুল হলে বলো", situation_en: "When you make a mistake in math", exampleSentence: "I made a mistake", exampleSentence_bn: "আমি একটা ভুল করেছি" }
      ],
      sentenceBuilding: [
        {
          previousPatternId: "C5.2",
          previousFormula: "I need to [ACTION]",
          previousFormula_bn: "আমাকে [কাজ] করতে হবে",
          combined: "I need time to make a decision",
          combined_bn: "আমাকে সিদ্ধান্ত নেওয়ার জন্য সময় দরকার"
        },
        {
          previousPatternId: "F3.1",
          previousFormula: "always [ACTION]",
          previousFormula_bn: "সবসময় [কাজ]",
          combined: "She always makes plans before traveling",
          combined_bn: "সে সবসময় ভ্রমণের আগে পরিকল্পনা করে"
        }
      ],
      memoryTrick_bn: "Make মানে তৈরি করা - সিদ্ধান্ত মাথায় তৈরি হয়, ভুল তৈরি হয়, পরিকল্পনা তৈরি হয়। তাই make a decision, make a mistake, make a plan।",
      chunks: [
        {
          en: "make a decision",
          bn: "সিদ্ধান্ত নেওয়া",
          pronunciation_bn: "মেইক আ ডিসিশন"
        },
        {
          en: "make a plan",
          bn: "পরিকল্পনা করা",
          pronunciation_bn: "মেইক আ প্ল্যান"
        },
        {
          en: "make a mistake",
          bn: "ভুল করা",
          pronunciation_bn: "মেইক আ মিসটেইক"
        }
      ],
      wordMap: {
        bn_sentence: "সিদ্ধান্ত করা",
        en_sentence: "make a decision",
        mappings: [
          { bn_word: "সিদ্ধান্ত", en_word: "decision", type: "direct" },
          { bn_word: "করা", en_word: "make", type: "direct", bridgeRuleId: "BR1" },
          { bn_word: "(নেই)", en_word: "a", type: "added", bridgeRuleId: "BR3" }
        ]
      },
      answerTemplates: [
        {
          situation_bn: "কেউ জিজ্ঞেস করলে সিদ্ধান্ত নিয়েছো কিনা",
          question: "Have you made a decision?",
          question_bn: "তুমি কি সিদ্ধান্ত নিয়েছো?",
          answerFormula: "Yes, I made a decision / Not yet, I need time",
          answerFormula_bn: "হ্যাঁ, আমি সিদ্ধান্ত নিয়েছি / এখনো না, সময় দরকার",
          pronunciation_bn: "ইয়েস, আই মেইড আ ডিসিশন",
          examples: [
            { answer: "Yes, I made a decision to change my job", answer_bn: "হ্যাঁ, আমি চাকরি বদলানোর সিদ্ধান্ত নিয়েছি", pronunciation_bn: "ইয়েস, আই মেইড আ ডিসিশন টু চেইঞ্জ মাই জব" }
          ]
        },
        {
          situation_bn: "কেউ পরিকল্পনা জিজ্ঞেস করলে",
          question: "Are you making a plan?",
          question_bn: "তুমি কি পরিকল্পনা করছো?",
          answerFormula: "I'm making a plan for [thing]",
          answerFormula_bn: "আমি [জিনিসের] জন্য পরিকল্পনা করছি",
          pronunciation_bn: "আইম মেইকিং আ প্ল্যান ফর",
          examples: [
            { answer: "I'm making a plan for my wedding", answer_bn: "আমি আমার বিয়ের জন্য পরিকল্পনা করছি", pronunciation_bn: "আইম মেইকিং আ প্ল্যান ফর মাই ওয়েডিং" }
          ]
        },
        {
          situation_bn: "ভুল করলে স্বীকার করা",
          question: "What happened?",
          question_bn: "কী হয়েছে?",
          answerFormula: "Sorry, I made a mistake",
          answerFormula_bn: "দুঃখিত, আমি ভুল করেছি",
          pronunciation_bn: "সরি, আই মেইড আ মিসটেইক",
          examples: [
            { answer: "Sorry, I made a mistake in the report", answer_bn: "দুঃখিত, আমি রিপোর্টে ভুল করেছি", pronunciation_bn: "সরি, আই মেইড আ মিসটেইক ইন দ্য রিপোর্ট" }
          ]
        }
      ],
      variations: [
        {
          variant: "past",
          label: "Past (অতীত)",
          label_bn: "আগে করেছিলাম",
          formula: "made a [THING]",
          formula_bn: "[জিনিস] করেছিলাম",
          examples: [
            { en: "I made a good decision", bn: "আমি ভালো সিদ্ধান্ত নিয়েছিলাম", pronunciation_bn: "আই মেইড আ গুড ডিসিশন", slotValues: { THING: "good decision" }, stage: 1 },
            { en: "She made a plan yesterday", bn: "সে গতকাল পরিকল্পনা করেছিল", pronunciation_bn: "শি মেইড আ প্ল্যান ইয়েস্টারডে", slotValues: { THING: "plan yesterday" }, stage: 2 },
            { en: "They made several mistakes", bn: "ওরা কয়েকটা ভুল করেছিল", pronunciation_bn: "দে মেইড সেভারাল মিসটেইকস", slotValues: { THING: "several mistakes" }, stage: 3 }
          ]
        },
        {
          variant: "negative",
          label: "Negative (না করা)",
          label_bn: "করিনি",
          formula: "didn't make [THING]",
          formula_bn: "[জিনিস] করিনি",
          examples: [
            { en: "I didn't make any mistakes", bn: "আমি কোনো ভুল করিনি", pronunciation_bn: "আই ডিডন্ট মেইক এনি মিসটেইকস", slotValues: { THING: "any mistakes" }, stage: 1 },
            { en: "He doesn't make plans", bn: "সে পরিকল্পনা করে না", pronunciation_bn: "হি ডাজন্ট মেইক প্ল্যানস", slotValues: { THING: "plans" }, stage: 2 },
            { en: "We won't make that mistake again", bn: "আমরা সেই ভুল আর করবো না", pronunciation_bn: "উই ওন্ট মেইক দ্যাট মিসটেইক এগেইন", slotValues: { THING: "that mistake again" }, stage: 3 }
          ]
        },
        {
          variant: "question",
          label: "Question (জিজ্ঞাসা)",
          label_bn: "করেছো কিনা জানতে",
          formula: "Did you make [THING]?",
          formula_bn: "তুমি কি [জিনিস] করেছো?",
          examples: [
            { en: "Did you make a decision?", bn: "তুমি কি সিদ্ধান্ত নিয়েছো?", pronunciation_bn: "ডিড ইউ মেইক আ ডিসিশন", slotValues: { THING: "decision" }, stage: 1 },
            { en: "Are you making a plan?", bn: "তুমি কি পরিকল্পনা করছো?", pronunciation_bn: "আর ইউ মেইকিং আ প্ল্যান", slotValues: { THING: "plan" }, stage: 2 },
            { en: "Have you made any mistakes?", bn: "তুমি কি কোনো ভুল করেছো?", pronunciation_bn: "হ্যাভ ইউ মেইড এনি মিসটেইকস", slotValues: { THING: "any mistakes" }, stage: 3 }
          ]
        }
      ],
      dialogueChains: [
        {
          id: "X12.1-d1",
          title_bn: "অফিসে বস সিদ্ধান্ত জিজ্ঞেস করছে",
          title_en: "Boss asking about decisions at office",
          situation_bn: "অফিসে বস সিদ্ধান্ত জিজ্ঞেস করছে",
          icon: "💼",
          turns: [
            { speaker_bn: "বস", en: "Did you make a decision about the project?", bn: "তুমি কি প্রজেক্ট নিয়ে সিদ্ধান্ত নিয়েছো?", pronunciation_bn: "ডিড ইউ মেইক আ ডিসিশন এবাউট দ্য প্রজেক্ট", patternId: "X12.1" },
            { speaker_bn: "কর্মী", en: "Yes sir, I made a decision", bn: "জি স্যার, আমি সিদ্ধান্ত নিয়েছি", pronunciation_bn: "ইয়েস স্যার, আই মেইড আ ডিসিশন", patternId: "X12.1" },
            { speaker_bn: "বস", en: "Good. Did you make a plan?", bn: "ভালো। তুমি কি পরিকল্পনা করেছো?", pronunciation_bn: "গুড। ডিড ইউ মেইক আ প্ল্যান", patternId: "X12.1" },
            { speaker_bn: "কর্মী", en: "I'm making a plan now", bn: "আমি এখন পরিকল্পনা করছি", pronunciation_bn: "আইম মেইকিং আ প্ল্যান নাউ", patternId: "X12.1" },
            { speaker_bn: "বস", en: "Please don't make any mistakes", bn: "প্লিজ কোনো ভুল কোরো না", pronunciation_bn: "প্লিজ ডোন্ট মেইক এনি মিসটেইকস", patternId: "X12.1" }
          ],
          patternsUsed: ["X12.1"]
        }
      ],
      slots: [
        {
          name: "THING",
          description: "Decision, plan, mistake, choice, attempt — things made in the mind",
          description_bn: "সিদ্ধান্ত, পরিকল্পনা, ভুল, পছন্দ — মাথায় তৈরি হয় যেগুলো",
          acceptedTypes: ["noun", "noun_phrase"],
          examples: ["decision", "plan", "mistake", "choice", "attempt"]
        }
      ],
      examples: [
        { en: "I need to make a decision", bn: "আমাকে একটা সিদ্ধান্ত নিতে হবে", pronunciation_bn: "আই নিড টু মেইক আ ডিসিশন", slotValues: { THING: "decision" }, topicArea: "work", stage: 1, miniStory: { situation_bn: "চাকরি ছাড়বে নাকি থাকবে ভাবছে", icon: "💼" } },
        { en: "She makes good plans", bn: "সে ভালো পরিকল্পনা করে", pronunciation_bn: "শি মেইকস গুড প্ল্যানস", slotValues: { THING: "good plans" }, topicArea: "daily_life", stage: 1, miniStory: { situation_bn: "মেয়ে সব সময় আগে থেকে ভেবে রাখে", icon: "📋" } },
        { en: "He made a big mistake", bn: "সে বড় ভুল করেছে", pronunciation_bn: "হি মেইড আ বিগ মিসটেইক", slotValues: { THING: "big mistake" }, topicArea: "work", stage: 1, miniStory: { situation_bn: "অফিসে রিপোর্টে ভুল সংখ্যা দিয়েছে", icon: "❌" } },
        { en: "We made a plan for the wedding", bn: "আমরা বিয়ের জন্য পরিকল্পনা করেছি", pronunciation_bn: "উই মেইড আ প্ল্যান ফর দ্য ওয়েডিং", slotValues: { THING: "plan for the wedding" }, topicArea: "family", stage: 1, miniStory: { situation_bn: "বোনের বিয়ে, সব ঠিক করে রাখছে", icon: "💒" } },
        { en: "They make decisions together", bn: "ওরা একসাথে সিদ্ধান্ত নেয়", pronunciation_bn: "দে মেইক ডিসিশনস টুগেদার", slotValues: { THING: "decisions together" }, topicArea: "family", stage: 1, miniStory: { situation_bn: "স্বামী-স্ত্রী মিলে সব ঠিক করে", icon: "👫" } },
        { en: "I made a choice to study abroad", bn: "আমি বিদেশে পড়ার পছন্দ করেছি", pronunciation_bn: "আই মেইড আ চয়েস টু স্টাডি এব্রড", slotValues: { THING: "choice to study abroad" }, topicArea: "education", stage: 2, miniStory: { situation_bn: "IELTS দিয়ে কানাডা যাবে পড়তে", icon: "🎓" } },
        { en: "She's making an attempt to quit smoking", bn: "সে সিগারেট ছাড়ার চেষ্টা করছে", pronunciation_bn: "শিজ মেইকিং অ্যান অ্যাটেম্পট টু কুইট স্মোকিং", slotValues: { THING: "attempt to quit smoking" }, topicArea: "health", stage: 2, miniStory: { situation_bn: "ডাক্তার বলেছে ছাড়তে, এখন চেষ্টা করছে", icon: "🚭" } },
        { en: "He made a promise to help", bn: "সে সাহায্য করার প্রতিশ্রুতি দিয়েছে", pronunciation_bn: "হি মেইড আ প্রমিস টু হেল্প", slotValues: { THING: "promise to help" }, topicArea: "relationships", stage: 2, miniStory: { situation_bn: "বন্ধু বিপদে, তাই সাহায্যের কথা দিল", icon: "🤝" } },
        { en: "We made several mistakes in the exam", bn: "আমরা পরীক্ষায় কয়েকটা ভুল করেছি", pronunciation_bn: "উই মেইড সেভারাল মিসটেইকস ইন দি এক্সাম", slotValues: { THING: "several mistakes in the exam" }, topicArea: "education", stage: 2, miniStory: { situation_bn: "গণিতে সহজ প্রশ্নে ভুল হয়ে গেছে", icon: "📝" } },
        { en: "They're making plans for next year", bn: "ওরা আগামী বছরের জন্য পরিকল্পনা করছে", pronunciation_bn: "দেয়ার মেইকিং প্ল্যানস ফর নেক্সট ইয়ার", slotValues: { THING: "plans for next year" }, topicArea: "business", stage: 2, miniStory: { situation_bn: "নতুন দোকান খুলবে পরের বছর", icon: "🏪" } },
        { en: "The manager makes important decisions", bn: "ম্যানেজার গুরুত্বপূর্ণ সিদ্ধান্ত নেয়", pronunciation_bn: "দ্য ম্যানেজার মেইকস ইম্পরট্যান্ট ডিসিশনস", slotValues: { THING: "important decisions" }, topicArea: "work", stage: 3, miniStory: { situation_bn: "বড় অফিসার, সবার চাকরি তার হাতে", icon: "👔" } },
        { en: "I shouldn't have made that mistake", bn: "আমার ওই ভুল করা উচিত হয়নি", pronunciation_bn: "আই শুডন্ট হ্যাভ মেইড দ্যাট মিসটেইক", slotValues: { THING: "that mistake" }, topicArea: "work", stage: 3, miniStory: { situation_bn: "বসকে ভুল তথ্য দিয়ে ফেলেছে, এখন সমস্যা", icon: "😔" } },
        { en: "She made a wise choice", bn: "সে বুদ্ধিমানের মতো পছন্দ করেছে", pronunciation_bn: "শি মেইড আ ওয়াইজ চয়েস", slotValues: { THING: "wise choice" }, topicArea: "career", stage: 3, miniStory: { situation_bn: "সরকারি চাকরি নিয়েছে, প্রাইভেট ছেড়ে", icon: "🎯" } },
        { en: "Have you made a plan for the meeting?", bn: "তুমি কি মিটিংয়ের জন্য পরিকল্পনা করেছো?", pronunciation_bn: "হ্যাভ ইউ মেইড আ প্ল্যান ফর দ্য মিটিং", slotValues: { THING: "plan for the meeting" }, topicArea: "work", stage: 3, miniStory: { situation_bn: "আজ বড় মিটিং, কী বলবে ঠিক করতে হবে", icon: "📊" } },
        { en: "Don't make the same mistake twice", bn: "একই ভুল দুইবার কোরো না", pronunciation_bn: "ডোন্ট মেইক দ্য সেইম মিসটেইক টুয়াইস", slotValues: { THING: "same mistake twice" }, topicArea: "advice", stage: 3, miniStory: { situation_bn: "মা মেয়েকে বোঝাচ্ছে আগের ভুল যেন আর না হয়", icon: "⚠️" } }
      ]
    },
    {
      id: "X12.2",
      patternName: "do [THING] — homework/exercise/work",
      patternName_bn: "do দিয়ে বলা",
      formula: "do [THING]",
      formula_bn: "do [জিনিস]",
      concept_bn: "do",
      formulaPronunciation_bn: "ডু [জিনিস]",
      bridgeRuleIds: ["BR1", "BR3"],
      usageNote: "Use 'do' with homework, exercise, work, job, task, and favor. Don't use 'make' for these.",
      usageNote_bn: "বাড়ির কাজ, ব্যায়াম, কাজ এগুলোর সাথে 'do' ব্যবহার করো, 'make' না। বাংলায় সব 'করা' কিন্তু ইংরেজিতে আলাদা।",
      formality: "casual",
      difficulty: "intermediate",
      conversionSteps: {
        banglaThought: "তুমি বাংলায় বলো: 'আমি বাড়ির কাজ করি'",
        steps: [
          { step_bn: "বাংলায় 'কাজ করা' বলি — homework-এর সাথে do বসে", result: "do" },
          { step_bn: "প্রথমে I বসাও, তারপর do বসবে দুটোর মাঝে", result: "I do" },
          { step_bn: "do এবং homework মিলে সম্পূর্ণ হয়", result: "I do homework" }
        ],
        finalResult: "I do homework",
        finalResult_bn: "আমি বাড়ির কাজ করি"
      },
      commonMistakes: [
        { wrong: "I make homework", correct: "I do homework", explanation_bn: "homework-এর সাথে do বলতে হয়, make না" },
        { wrong: "She makes exercise", correct: "She does exercise", explanation_bn: "exercise-এর সাথে do বলতে হয়" },
        { wrong: "He makes his job", correct: "He does his job", explanation_bn: "job-এর সাথে do বলতে হয়" }
      ],
      simpleRules: [
        { rule_bn: "কাজ, ব্যায়াম, বাড়ির কাজ এগুলোর সাথে do বসে", example: "I do homework" },
        { rule_bn: "শারীরিক কাজ হলে do, মানসিক সিদ্ধান্ত হলে make", example: "do exercise / make a decision" },
        { rule_bn: "do-এর পরে the বসে যদি নির্দিষ্ট কাজ হয়", example: "do the dishes" }
      ],
      usageSituations: [
        { situation_bn: "স্কুলের ছাত্র বাড়ির কাজ করছে", situation_en: "Student doing homework", exampleSentence: "I do my homework every day", exampleSentence_bn: "আমি প্রতিদিন বাড়ির কাজ করি" },
        { situation_bn: "সকালে পার্কে ব্যায়াম করছো", situation_en: "Doing exercise in the morning", exampleSentence: "I do exercise in the park", exampleSentence_bn: "আমি পার্কে ব্যায়াম করি" },
        { situation_bn: "অফিসে তোমার কাজ করছো", situation_en: "Doing your work at office", exampleSentence: "I'm doing my work", exampleSentence_bn: "আমি আমার কাজ করছি" }
      ],
      sentenceBuilding: [
        { previousPatternId: "F3.1", previousFormula: "every [TIME]", previousFormula_bn: "প্রতি [সময়]", combined: "I do homework every evening", combined_bn: "আমি প্রতিদিন সন্ধ্যায় বাড়ির কাজ করি" },
        { previousPatternId: "C5.2", previousFormula: "need to [ACTION]", previousFormula_bn: "[কাজ] করতে হবে", combined: "She needs to do exercise daily", combined_bn: "তাকে প্রতিদিন ব্যায়াম করতে হবে" }
      ],
      memoryTrick_bn: "Do মানে করা - যে কাজ তুমি physically করো, হাতে-কলমে করো সেগুলোতে do। Homework করো, exercise করো, কাজ করো। তাই do homework, do exercise, do work।",
      chunks: [
        { en: "do homework", bn: "বাড়ির কাজ করা", pronunciation_bn: "ডু হোমওয়ার্ক" },
        { en: "do exercise", bn: "ব্যায়াম করা", pronunciation_bn: "ডু এক্সারসাইজ" },
        { en: "do work", bn: "কাজ করা", pronunciation_bn: "ডু ওয়ার্ক" }
      ],
      wordMap: {
        bn_sentence: "কাজ করা",
        en_sentence: "do work",
        mappings: [
          { bn_word: "কাজ", en_word: "work", type: "direct" },
          { bn_word: "করা", en_word: "do", type: "direct", bridgeRuleId: "BR1" }
        ]
      },
      answerTemplates: [
        {
          situation_bn: "কেউ জিজ্ঞেস করলে কাজ করেছো কিনা",
          question: "Did you do your homework?",
          question_bn: "তুমি কি তোমার বাড়ির কাজ করেছো?",
          answerFormula: "Yes, I did it / Not yet, I'll do it soon",
          answerFormula_bn: "হ্যাঁ, করেছি / এখনো না, শীঘ্রই করবো",
          pronunciation_bn: "ইয়েস, আই ডিড ইট",
          examples: [{ answer: "Yes, I did my homework", answer_bn: "হ্যাঁ, আমি বাড়ির কাজ করেছি", pronunciation_bn: "ইয়েস, আই ডিড মাই হোমওয়ার্ক" }]
        },
        {
          situation_bn: "ব্যায়াম নিয়ে কথা হলে",
          question: "Do you do exercise?",
          question_bn: "তুমি কি ব্যায়াম করো?",
          answerFormula: "I do exercise [when]",
          answerFormula_bn: "আমি [কখন] ব্যায়াম করি",
          pronunciation_bn: "আই ডু এক্সারসাইজ",
          examples: [{ answer: "I do exercise every morning", answer_bn: "আমি প্রতিদিন সকালে ব্যায়াম করি", pronunciation_bn: "আই ডু এক্সারসাইজ এভরি মর্নিং" }]
        },
        {
          situation_bn: "কাজ সম্পর্কে বলা",
          question: "What are you doing?",
          question_bn: "তুমি কী করছো?",
          answerFormula: "I'm doing [work type]",
          answerFormula_bn: "আমি [কাজের ধরন] করছি",
          pronunciation_bn: "আইম ডুয়িং",
          examples: [{ answer: "I'm doing office work", answer_bn: "আমি অফিসের কাজ করছি", pronunciation_bn: "আইম ডুয়িং অফিস ওয়ার্ক" }]
        }
      ],
      variations: [
        {
          variant: "past", label: "Past (অতীত)", label_bn: "আগে করেছিলাম", formula: "did [THING]", formula_bn: "[জিনিস] করেছিলাম",
          examples: [
            { en: "I did my homework", bn: "আমি আমার বাড়ির কাজ করেছি", pronunciation_bn: "আই ডিড মাই হোমওয়ার্ক", slotValues: { THING: "my homework" }, stage: 1 },
            { en: "She did exercise yesterday", bn: "সে গতকাল ব্যায়াম করেছিল", pronunciation_bn: "শি ডিড এক্সারসাইজ ইয়েস্টারডে", slotValues: { THING: "exercise yesterday" }, stage: 2 },
            { en: "They did good work", bn: "ওরা ভালো কাজ করেছিল", pronunciation_bn: "দে ডিড গুড ওয়ার্ক", slotValues: { THING: "good work" }, stage: 3 }
          ]
        },
        {
          variant: "negative", label: "Negative (না করা)", label_bn: "করিনি", formula: "didn't do [THING]", formula_bn: "[জিনিস] করিনি",
          examples: [
            { en: "I didn't do my homework", bn: "আমি আমার বাড়ির কাজ করিনি", pronunciation_bn: "আই ডিডন্ট ডু মাই হোমওয়ার্ক", slotValues: { THING: "my homework" }, stage: 1 },
            { en: "He doesn't do exercise", bn: "সে ব্যায়াম করে না", pronunciation_bn: "হি ডাজন্ট ডু এক্সারসাইজ", slotValues: { THING: "exercise" }, stage: 2 },
            { en: "We won't do extra work", bn: "আমরা বাড়তি কাজ করবো না", pronunciation_bn: "উই ওন্ট ডু এক্সট্রা ওয়ার্ক", slotValues: { THING: "extra work" }, stage: 3 }
          ]
        },
        {
          variant: "question", label: "Question (জিজ্ঞাসা)", label_bn: "করেছো কিনা জানতে", formula: "Did you do [THING]?", formula_bn: "তুমি কি [জিনিস] করেছো?",
          examples: [
            { en: "Did you do your homework?", bn: "তুমি কি তোমার বাড়ির কাজ করেছো?", pronunciation_bn: "ডিড ইউ ডু ইয়োর হোমওয়ার্ক", slotValues: { THING: "your homework" }, stage: 1 },
            { en: "Are you doing exercise?", bn: "তুমি কি ব্যায়াম করছো?", pronunciation_bn: "আর ইউ ডুয়িং এক্সারসাইজ", slotValues: { THING: "exercise" }, stage: 2 },
            { en: "Have you done the work?", bn: "তুমি কি কাজ করেছো?", pronunciation_bn: "হ্যাভ ইউ ডান দ্য ওয়ার্ক", slotValues: { THING: "the work" }, stage: 3 }
          ]
        }
      ],
      dialogueChains: [
        {
          id: "X12.2-d1", title_bn: "মা ছেলেকে বাড়ির কাজ করতে বলছে", title_en: "Mother asking son to do homework", situation_bn: "মা ছেলেকে বাড়ির কাজ করতে বলছে", icon: "📚",
          turns: [
            { speaker_bn: "মা", en: "Did you do your homework?", bn: "তুমি কি তোমার বাড়ির কাজ করেছো?", pronunciation_bn: "ডিড ইউ ডু ইয়োর হোমওয়ার্ক", patternId: "X12.2" },
            { speaker_bn: "ছেলে", en: "Not yet, I'll do it now", bn: "এখনো না, এখন করবো", pronunciation_bn: "নট ইয়েট, আইল ডু ইট নাউ", patternId: "X12.2" },
            { speaker_bn: "মা", en: "Do your homework before TV", bn: "টিভির আগে বাড়ির কাজ করো", pronunciation_bn: "ডু ইয়োর হোমওয়ার্ক বিফোর টিভি", patternId: "X12.2" },
            { speaker_bn: "ছেলে", en: "Okay, I'm doing it", bn: "ঠিক আছে, করছি", pronunciation_bn: "ওকে, আইম ডুয়িং ইট", patternId: "X12.2" }
          ],
          patternsUsed: ["X12.2"]
        }
      ],
      slots: [
        {
          name: "THING",
          description: "Homework, exercise, work, job, task — things you physically do",
          description_bn: "বাড়ির কাজ, ব্যায়াম, কাজ — যেগুলো হাতে-কলমে করো",
          acceptedTypes: ["noun", "noun_phrase"],
          examples: ["homework", "exercise", "work", "job", "task"]
        }
      ],
      examples: [
        {
          en: "I do my homework every day",
          bn: "আমি প্রতিদিন আমার বাড়ির কাজ করি",
          pronunciation_bn: "আই ডু মাই হোমওয়ার্ক এভরি ডে",
          slotValues: { THING: "my homework every day" },
          topicArea: "education",
          stage: 1
        },
        { en: "She does exercise in the morning", bn: "সে সকালে ব্যায়াম করে", pronunciation_bn: "শি ডাজ এক্সারসাইজ ইন দ্য মর্নিং", slotValues: { THING: "exercise in the morning" }, topicArea: "health", stage: 1, miniStory: { situation_bn: "প্রতিদিন সকালে পার্কে হাঁটে", icon: "🏃" } },
        { en: "He's doing his work", bn: "সে তার কাজ করছে", pronunciation_bn: "হিজ ডুয়িং হিজ ওয়ার্ক", slotValues: { THING: "his work" }, topicArea: "work", stage: 1, miniStory: { situation_bn: "অফিসে বসে কম্পিউটারে টাইপ করছে", icon: "💻" } },
        { en: "We do housework together", bn: "আমরা একসাথে ঘরের কাজ করি", pronunciation_bn: "উই ডু হাউজওয়ার্ক টুগেদার", slotValues: { THING: "housework together" }, topicArea: "family", stage: 1, miniStory: { situation_bn: "ছুটির দিনে স্বামী-স্ত্রী মিলে ঘর পরিষ্কার করে", icon: "🏠" } },
        { en: "They do their job well", bn: "ওরা ওদের কাজ ভালো করে", pronunciation_bn: "দে ডু দেয়ার জব ওয়েল", slotValues: { THING: "their job well" }, topicArea: "work", stage: 1, miniStory: { situation_bn: "দোকানদার সব কাস্টমারকে ভালো সেবা দেয়", icon: "🏪" } },
        { en: "I need to do some exercise", bn: "আমার কিছু ব্যায়াম করা দরকার", pronunciation_bn: "আই নিড টু ডু সাম এক্সারসাইজ", slotValues: { THING: "some exercise" }, topicArea: "health", stage: 2, miniStory: { situation_bn: "ডাক্তার বলেছে ওজন কমাতে", icon: "⚕️" } },
        { en: "She's doing research work", bn: "সে গবেষণার কাজ করছে", pronunciation_bn: "শিজ ডুয়িং রিসার্চ ওয়ার্ক", slotValues: { THING: "research work" }, topicArea: "education", stage: 2, miniStory: { situation_bn: "বিশ্ববিদ্যালয়ে PhD করছে", icon: "🔬" } },
        { en: "He does volunteer work", bn: "সে স্বেচ্ছাসেবার কাজ করে", pronunciation_bn: "হি ডাজ ভলান্টিয়ার ওয়ার্ক", slotValues: { THING: "volunteer work" }, topicArea: "social", stage: 2, miniStory: { situation_bn: "বন্যায় ত্রাণ বিতরণ করে", icon: "🤲" } },
        { en: "We're doing a project", bn: "আমরা একটা প্রজেক্ট করছি", pronunciation_bn: "উইয়ার ডুয়িং এ প্রজেক্ট", slotValues: { THING: "a project" }, topicArea: "education", stage: 2, miniStory: { situation_bn: "ক্লাসের গ্রুপ প্রজেক্ট চলছে", icon: "📋" } },
        { en: "They do business together", bn: "ওরা একসাথে ব্যবসা করে", pronunciation_bn: "দে ডু বিজনেস টুগেদার", slotValues: { THING: "business together" }, topicArea: "business", stage: 2, miniStory: { situation_bn: "দুই বন্ধু মিলে কাপড়ের দোকান দিয়েছে", icon: "👔" } },
        { en: "I haven't done my assignment yet", bn: "আমি এখনো আমার এসাইনমেন্ট করিনি", pronunciation_bn: "আই হ্যাভেন্ট ডান মাই অ্যাসাইনমেন্ট ইয়েট", slotValues: { THING: "my assignment yet" }, topicArea: "education", stage: 3, miniStory: { situation_bn: "কাল সাবমিট করতে হবে, এখনো শুরু করেনি", icon: "📝" } },
        { en: "She does yoga every evening", bn: "সে প্রতি সন্ধ্যায় যোগব্যায়াম করে", pronunciation_bn: "শি ডাজ ইয়োগা এভরি ইভনিং", slotValues: { THING: "yoga every evening" }, topicArea: "health", stage: 3, miniStory: { situation_bn: "অফিস থেকে ফিরে ছাদে যোগব্যায়াম করে", icon: "🧘" } },
        { en: "He does odd jobs for money", bn: "সে টাকার জন্য খুচরো কাজ করে", pronunciation_bn: "হি ডাজ অড জবস ফর মানি", slotValues: { THING: "odd jobs for money" }, topicArea: "work", stage: 3, miniStory: { situation_bn: "কোনো স্থায়ী কাজ নেই, যা পায় তাই করে", icon: "🔧" } },
        { en: "Can you do me a favor?", bn: "তুমি কি আমার একটা উপকার করবে?", pronunciation_bn: "ক্যান ইউ ডু মি এ ফেভার", slotValues: { THING: "me a favor" }, topicArea: "relationships", stage: 3, miniStory: { situation_bn: "বন্ধুকে বাজার থেকে কিছু কিনে আনতে বলছে", icon: "🤝" } },
        { en: "Don't do anything foolish", bn: "বোকার মতো কিছু কোরো না", pronunciation_bn: "ডোন্ট ডু এনিথিং ফুলিশ", slotValues: { THING: "anything foolish" }, topicArea: "advice", stage: 3, miniStory: { situation_bn: "বাবা ছেলেকে সাবধান করছে", icon: "⚠️" } }
      ]
    },
    {
      id: "X12.3",
      patternName: "take [THING] — photo/break/medicine",
      patternName_bn: "take দিয়ে বলা",
      formula: "take [THING]",
      formula_bn: "take [জিনিস]",
      concept_bn: "take",
      formulaPronunciation_bn: "টেইক [জিনিস]",
      bridgeRuleIds: ["BR1", "BR3"],
      usageNote: "Use 'take' with photo, break, medicine, shower, exam, and time. Bangla speakers often confuse this.",
      usageNote_bn: "ছবি তোলা, বিশ্রাম নেওয়া, ওষুধ খাওয়া — এসবে 'take' বসে। বাংলায় 'খাওয়া' বলি কিন্তু ইংরেজিতে medicine-এর জন্য 'take' বলতে হয়, 'eat' না।",
      formality: "casual",
      difficulty: "intermediate",
      conversionSteps: {
        banglaThought: "তুমি বাংলায় বলো: 'আমি ওষুধ খাই'",
        steps: [
          { step_bn: "বাংলায় 'ওষুধ খাওয়া' বলি — medicine-এর সাথে take বসে", result: "take" },
          { step_bn: "প্রথমে I বসাও, তারপর take বসবে দুটোর মাঝে", result: "I take" },
          { step_bn: "take এবং medicine মিলে সম্পূর্ণ হয়", result: "I take medicine" }
        ],
        finalResult: "I take medicine",
        finalResult_bn: "আমি ওষুধ খাই"
      },
      commonMistakes: [
        {
          wrong: "I eat medicine",
          correct: "I take medicine",
          explanation_bn: "medicine-এর সাথে eat না, take বলতে হয়"
        },
        {
          wrong: "Let me make a photo",
          correct: "Let me take a photo",
          explanation_bn: "photo-র সাথে make না, take বলতে হয়"
        },
        {
          wrong: "I need to do a shower",
          correct: "I need to take a shower",
          explanation_bn: "shower-এর সাথে do না, take বলতে হয়"
        }
      ],
      simpleRules: [
        { rule_bn: "ছবি, ওষুধ, বিশ্রাম এগুলোর সাথে take বসে", example: "take medicine" },
        { rule_bn: "take-এর পরে a/an বসে যদি একটা হয়", example: "take a photo" },
        { rule_bn: "নিজের জন্য নেওয়া জিনিসে take", example: "take a break" }
      ],
      usageSituations: [
        { situation_bn: "অসুখ হলে ডাক্তার ওষুধ দেয়", situation_en: "When doctor prescribes medicine", exampleSentence: "Take this medicine twice a day", exampleSentence_bn: "এই ওষুধ দিনে দুইবার খাও" },
        { situation_bn: "ঘুরতে গিয়ে ছবি তুলছো", situation_en: "Taking photos while traveling", exampleSentence: "Let me take a photo", exampleSentence_bn: "আমাকে একটা ছবি তুলতে দাও" },
        { situation_bn: "অফিসে চা খেতে বিশ্রাম নাও", situation_en: "Taking a break at office", exampleSentence: "I need to take a break", exampleSentence_bn: "আমার বিশ্রাম নেওয়া দরকার" }
      ],
      sentenceBuilding: [
        { previousPatternId: "C5.2", previousFormula: "need to [ACTION]", previousFormula_bn: "[কাজ] করতে হবে", combined: "I need to take medicine twice daily", combined_bn: "আমাকে দিনে দুইবার ওষুধ খেতে হবে" },
        { previousPatternId: "C4.1", previousFormula: "love [ACTION]", previousFormula_bn: "[কাজ] ভালোবাসা", combined: "She loves taking photos of nature", combined_bn: "সে প্রকৃতির ছবি তুলতে ভালোবাসে" }
      ],
      memoryTrick_bn: "Take মানে নেওয়া - ওষুধ নাও, ছবি নাও, বিশ্রাম নাও। নিজের জন্য যা নাও সবে take। তাই take medicine, take a photo, take a break।",
      chunks: [
        { en: "take medicine", bn: "ওষুধ খাওয়া", pronunciation_bn: "টেইক মেডিসিন" },
        { en: "take a photo", bn: "ছবি তোলা", pronunciation_bn: "টেইক আ ফটো" },
        { en: "take a break", bn: "বিশ্রাম নেওয়া", pronunciation_bn: "টেইক আ ব্রেইক" }
      ],
      wordMap: {
        bn_sentence: "ওষুধ খাওয়া",
        en_sentence: "take medicine",
        mappings: [
          { bn_word: "ওষুধ", en_word: "medicine", type: "direct" },
          { bn_word: "খাওয়া", en_word: "take", type: "direct", bridgeRuleId: "BR1" }
        ]
      },
      answerTemplates: [
        { situation_bn: "ডাক্তার ওষুধ নিয়ে জিজ্ঞেস করলে", question: "Did you take your medicine?", question_bn: "তুমি কি ওষুধ খেয়েছো?", answerFormula: "Yes, I take it [when]", answerFormula_bn: "হ্যাঁ, আমি [কখন] খাই", pronunciation_bn: "ইয়েস, আই টেইক ইট", examples: [{ answer: "Yes, I take it twice a day", answer_bn: "হ্যাঁ, আমি দিনে দুইবার খাই", pronunciation_bn: "ইয়েস, আই টেইক ইট টুয়াইস আ ডে" }] },
        { situation_bn: "কেউ ছবি তুলতে চাইলে", question: "Can I take a photo?", question_bn: "আমি কি ছবি তুলতে পারি?", answerFormula: "Let me take a photo of [thing]", answerFormula_bn: "আমাকে [জিনিসের] ছবি তুলতে দাও", pronunciation_bn: "লেট মি টেইক আ ফটো অফ", examples: [{ answer: "Let me take a photo of this view", answer_bn: "আমাকে এই দৃশ্যের ছবি তুলতে দাও", pronunciation_bn: "লেট মি টেইক আ ফটো অফ দিস ভিউ" }] },
        { situation_bn: "কাজে ক্লান্ত হলে", question: "Are you tired?", question_bn: "তুমি কি ক্লান্ত?", answerFormula: "I need to take a break", answerFormula_bn: "আমার বিশ্রাম নেওয়া দরকার", pronunciation_bn: "আই নিড টু টেইক আ ব্রেইক", examples: [{ answer: "I need to take a break for 10 minutes", answer_bn: "আমার ১০ মিনিট বিশ্রাম দরকার", pronunciation_bn: "আই নিড টু টেইক আ ব্রেইক ফর টেন মিনিটস" }] }
      ],
      variations: [
        {
          variant: "past", label: "Past (অতীত)", label_bn: "আগে নিয়েছিলাম", formula: "took [THING]", formula_bn: "[জিনিস] নিয়েছিলাম",
          examples: [
            {
              en: "I took my medicine",
              bn: "আমি আমার ওষুধ খেয়েছি",
              pronunciation_bn: "আই টুক মাই মেডিসিন",
              slotValues: { THING: "my medicine" },
              stage: 1
            },
            {
              en: "She took a photo yesterday",
              bn: "সে গতকাল একটা ছবি তুলেছিল",
              pronunciation_bn: "শি টুক আ ফটো ইয়েস্টারডে",
              slotValues: { THING: "a photo yesterday" },
              stage: 2
            },
            {
              en: "They took a long break",
              bn: "ওরা লম্বা বিশ্রাম নিয়েছিল",
              pronunciation_bn: "দে টুক আ লং ব্রেইক",
              slotValues: { THING: "a long break" },
              stage: 3
            }
          ]
        },
        {
          variant: "negative", label: "Negative (না নেওয়া)", label_bn: "নিইনি", formula: "didn't take [THING]", formula_bn: "[জিনিস] নিইনি",
          examples: [
            {
              en: "I didn't take my medicine",
              bn: "আমি আমার ওষুধ খাইনি",
              pronunciation_bn: "আই ডিডন্ট টেইক মাই মেডিসিন",
              slotValues: { THING: "my medicine" },
              stage: 1
            },
            {
              en: "He doesn't take photos",
              bn: "সে ছবি তোলে না",
              pronunciation_bn: "হি ডাজন্ট টেইক ফটোস",
              slotValues: { THING: "photos" },
              stage: 2
            },
            {
              en: "We won't take a break",
              bn: "আমরা বিশ্রাম নেবো না",
              pronunciation_bn: "উই ওন্ট টেইক আ ব্রেইক",
              slotValues: { THING: "a break" },
              stage: 3
            }
          ]
        },
        {
          variant: "question", label: "Question (জিজ্ঞাসা)", label_bn: "নিয়েছো কিনা জানতে", formula: "Did you take [THING]?", formula_bn: "তুমি কি [জিনিস] নিয়েছো?",
          examples: [
            {
              en: "Did you take your medicine?",
              bn: "তুমি কি তোমার ওষুধ খেয়েছো?",
              pronunciation_bn: "ডিড ইউ টেইক ইয়োর মেডিসিন",
              slotValues: { THING: "your medicine" },
              stage: 1
            },
            {
              en: "Are you taking a photo?",
              bn: "তুমি কি ছবি তুলছো?",
              pronunciation_bn: "আর ইউ টেইকিং আ ফটো",
              slotValues: { THING: "a photo" },
              stage: 2
            },
            {
              en: "Have you taken a shower?",
              bn: "তুমি কি গোসল করেছো?",
              pronunciation_bn: "হ্যাভ ইউ টেকেন আ শাওয়ার",
              slotValues: { THING: "a shower" },
              stage: 3
            }
          ]
        }
      ],
      dialogueChains: [
        {
          id: "X12.3-d1", title_bn: "ডাক্তার রোগীকে ওষুধ নিয়ে বলছে", title_en: "Doctor telling patient about medicine", situation_bn: "ডাক্তার রোগীকে ওষুধ নিয়ে বলছে", icon: "🏥",
          turns: [
            { speaker_bn: "ডাক্তার", en: "Take this medicine twice a day", bn: "এই ওষুধ দিনে দুইবার খাবেন", pronunciation_bn: "টেইক দিস মেডিসিন টুয়াইস আ ডে", patternId: "X12.3" },
            { speaker_bn: "রোগী", en: "Should I take it after food?", bn: "খাবার পরে খাবো?", pronunciation_bn: "শুড আই টেইক ইট আফটার ফুড", patternId: "X12.3" },
            { speaker_bn: "ডাক্তার", en: "Yes, take it after meals", bn: "হ্যাঁ, খাবারের পরে খাবেন", pronunciation_bn: "ইয়েস, টেইক ইট আফটার মিলস", patternId: "X12.3" },
            { speaker_bn: "রোগী", en: "I'll take it regularly", bn: "আমি নিয়মিত খাবো", pronunciation_bn: "আইল টেইক ইট রেগুলারলি", patternId: "X12.3" }
          ],
          patternsUsed: ["X12.3"]
        }
      ],
      slots: [
        {
          name: "THING",
          description: "Photo, break, medicine, shower, exam — things you take for yourself",
          description_bn: "ছবি, বিশ্রাম, ওষুধ — যেগুলো নিজের জন্য নাও",
          acceptedTypes: ["noun", "noun_phrase"],
          examples: ["photo", "break", "medicine", "shower", "exam"]
        }
      ],
      examples: [
        {
          en: "I take medicine every morning",
          bn: "আমি প্রতিদিন সকালে ওষুধ খাই",
          pronunciation_bn: "আই টেইক মেডিসিন এভরি মর্নিং",
          slotValues: { THING: "medicine every morning" },
          topicArea: "health",
          stage: 1,
          miniStory: { situation_bn: "ডায়াবেটিসের ওষুধ প্রতিদিন খেতে হয়", icon: "💊" }
        },
        {
          en: "She takes beautiful photos",
          bn: "সে সুন্দর ছবি তোলে",
          pronunciation_bn: "শি টেইকস বিউটিফুল ফটোস",
          slotValues: { THING: "beautiful photos" },
          topicArea: "hobbies",
          stage: 1,
          miniStory: { situation_bn: "", icon: "📖" }
        },
        {
          en: "He's taking a break",
          bn: "সে বিশ্রাম নিচ্ছে",
          pronunciation_bn: "হিজ টেইকিং আ ব্রেইক",
          slotValues: { THING: "a break" },
          topicArea: "work",
          stage: 1,
          miniStory: { situation_bn: "", icon: "📖" }
        },
        {
          en: "We take a shower before prayers",
          bn: "আমরা নামাজের আগে গোসল করি",
          pronunciation_bn: "উই টেইক আ শাওয়ার বিফোর প্রেয়ারস",
          slotValues: { THING: "a shower before prayers" },
          topicArea: "daily_life",
          stage: 1,
          miniStory: { situation_bn: "", icon: "📖" }
        },
        {
          en: "They take the exam tomorrow",
          bn: "ওরা কাল পরীক্ষা দেবে",
          pronunciation_bn: "দে টেইক দি এক্সাম টুমরো",
          slotValues: { THING: "the exam tomorrow" },
          topicArea: "education",
          stage: 1,
          miniStory: { situation_bn: "", icon: "📖" }
        },
        {
          en: "I need to take a rest",
          bn: "আমার বিশ্রাম নেওয়া দরকার",
          pronunciation_bn: "আই নিড টু টেইক আ রেস্ট",
          slotValues: { THING: "a rest" },
          topicArea: "health",
          stage: 2,
          miniStory: { situation_bn: "", icon: "📖" }
        },
        {
          en: "She takes her time choosing",
          bn: "সে বেছে নিতে সময় নেয়",
          pronunciation_bn: "শি টেইকস হার টাইম চুজিং",
          slotValues: { THING: "her time choosing" },
          topicArea: "shopping",
          stage: 2,
          miniStory: { situation_bn: "", icon: "📖" }
        },
        {
          en: "He took painkillers for headache",
          bn: "সে মাথা ব্যথার জন্য ব্যথার ওষুধ খেয়েছে",
          pronunciation_bn: "হি টুক পেইনকিলারস ফর হেডেইক",
          slotValues: { THING: "painkillers for headache" },
          topicArea: "health",
          stage: 2,
          miniStory: { situation_bn: "", icon: "📖" }
        },
        {
          en: "We're taking a vacation next month",
          bn: "আমরা পরের মাসে ছুটি নিচ্ছি",
          pronunciation_bn: "উইয়ার টেইকিং এ ভ্যাকেশন নেক্সট মান্থ",
          slotValues: { THING: "a vacation next month" },
          topicArea: "travel",
          stage: 2,
          miniStory: { situation_bn: "", icon: "📖" }
        },
        {
          en: "They took selfies at the beach",
          bn: "ওরা সমুদ্র সৈকতে সেলফি তুলেছে",
          pronunciation_bn: "দে টুক সেলফিস অ্যাট দ্য বিচ",
          slotValues: { THING: "selfies at the beach" },
          topicArea: "travel",
          stage: 2,
          miniStory: { situation_bn: "", icon: "📖" }
        },
        {
          en: "I haven't taken my vitamins today",
          bn: "আমি আজ আমার ভিটামিন খাইনি",
          pronunciation_bn: "আই হ্যাভেন্ট টেকেন মাই ভিটামিনস টুডে",
          slotValues: { THING: "my vitamins today" },
          topicArea: "health",
          stage: 3,
          miniStory: { situation_bn: "", icon: "📖" }
        },
        {
          en: "She takes notes during class",
          bn: "সে ক্লাসের সময় নোট করে",
          pronunciation_bn: "শি টেইকস নোটস ডিউরিং ক্লাস",
          slotValues: { THING: "notes during class" },
          topicArea: "education",
          stage: 3,
          miniStory: { situation_bn: "", icon: "📖" }
        },
        {
          en: "He takes responsibility seriously",
          bn: "সে দায়িত্ব গুরুত্বের সাথে নেয়",
          pronunciation_bn: "হি টেইকস রেসপনসিবিলিটি সিরিয়াসলি",
          slotValues: { THING: "responsibility seriously" },
          topicArea: "work",
          stage: 3,
          miniStory: { situation_bn: "", icon: "📖" }
        },
        {
          en: "Can you take a message for me?",
          bn: "তুমি কি আমার জন্য একটা খবর নিতে পারবে?",
          pronunciation_bn: "ক্যান ইউ টেইক আ মেসেজ ফর মি",
          slotValues: { THING: "a message for me" },
          topicArea: "communication",
          stage: 3,
          miniStory: { situation_bn: "", icon: "📖" }
        },
        {
          en: "Don't take too much stress",
          bn: "বেশি চাপ নিও না",
          pronunciation_bn: "ডোন্ট টেইক টু মাচ স্ট্রেস",
          slotValues: { THING: "too much stress" },
          topicArea: "advice",
          stage: 3,
          miniStory: { situation_bn: "", icon: "📖" }
        }
      ]
    },
    {
      id: "X12.4",
      patternName: "have a [THING] — meeting/problem/look",
      patternName_bn: "have দিয়ে বলা",
      formula: "have a [THING]",
      formula_bn: "have a [জিনিস]",
      concept_bn: "have",
      formulaPronunciation_bn: "হ্যাভ আ [জিনিস]",
      bridgeRuleIds: ["BR1", "BR3"],
      usageNote: "Use 'have' with meeting, problem, look, conversation, chance, and time. Don't use 'do' or 'make' for these.",
      usageNote_bn: "মিটিং, সমস্যা, কথাবার্তা এগুলোর সাথে 'have' ব্যবহার করো। বাংলায় 'মিটিং করা' বলি কিন্তু ইংরেজিতে 'have a meeting' বলতে হয়।",
      formality: "casual",
      difficulty: "intermediate",
      conversionSteps: {
        banglaThought: "তুমি বাংলায় বলো: 'আমার একটা মিটিং আছে'",
        steps: [
          { step_bn: "বাংলায় 'মিটিং আছে' বলি — meeting-এর সাথে have বসে", result: "have" },
          { step_bn: "প্রথমে I বসাও, তারপর have বসবে দুটোর মাঝে", result: "I have" },
          { step_bn: "have এবং meeting-এর মাঝে a বসাও", result: "I have a meeting" }
        ],
        finalResult: "I have a meeting",
        finalResult_bn: "আমার একটা মিটিং আছে"
      },
      commonMistakes: [
        {
          wrong: "I do a meeting",
          correct: "I have a meeting",
          explanation_bn: "meeting-এর সাথে do না, have বলতে হয়"
        },
        {
          wrong: "She makes a problem",
          correct: "She has a problem",
          explanation_bn: "problem-এর সাথে make না, have বলতে হয়"
        },
        {
          wrong: "Let me take a look",
          correct: "Let me have a look",
          explanation_bn: "look-এর সাথে take না, have বলতে হয় (though take is sometimes used in informal speech)"
        }
      ],
      simpleRules: [
        { rule_bn: "মিটিং, সমস্যা, দেখা এগুলোর সাথে have বসে", example: "I have a meeting" },
        { rule_bn: "have-এর পরে a/an বসে যদি একটা হয়", example: "have a problem" },
        { rule_bn: "অভিজ্ঞতা করা জিনিসে have", example: "have a look" }
      ],
      usageSituations: [
        { situation_bn: "অফিসে মিটিং হবে বলা", situation_en: "Telling about a meeting at office", exampleSentence: "I have a meeting at 3", exampleSentence_bn: "তিনটায় আমার মিটিং আছে" },
        { situation_bn: "সমস্যা হলে বলা", situation_en: "When you have a problem", exampleSentence: "I have a problem", exampleSentence_bn: "আমার একটা সমস্যা আছে" },
        { situation_bn: "কিছু একটু দেখতে চাওয়া", situation_en: "When you want to look at something", exampleSentence: "Can I have a look?", exampleSentence_bn: "আমি কি একটু দেখতে পারি?" }
      ],
      sentenceBuilding: [
        { previousPatternId: "F1.2", previousFormula: "at [TIME]", previousFormula_bn: "[সময়]-এ", combined: "I have a meeting at 3 PM", combined_bn: "বিকেল তিনটায় আমার মিটিং আছে" },
        { previousPatternId: "F3.1", previousFormula: "always [ACTION]", previousFormula_bn: "সবসময় [কাজ]", combined: "She always has problems with her phone", combined_bn: "তার ফোনে সবসময় সমস্যা হয়" }
      ],
      memoryTrick_bn: "Have মানে আছে - মিটিং আছে, সমস্যা আছে, সময় আছে। অভিজ্ঞতা বা পরিস্থিতি যেটা তোমার কাছে আছে সেটাতে have। তাই have a meeting, have a problem, have a look।",
      chunks: [
        { en: "have a meeting", bn: "মিটিং হওয়া", pronunciation_bn: "হ্যাভ আ মিটিং" },
        { en: "have a problem", bn: "সমস্যা আছে", pronunciation_bn: "হ্যাভ আ প্রবলেম" },
        { en: "have a look", bn: "একটু দেখা", pronunciation_bn: "হ্যাভ আ লুক" }
      ],
      wordMap: {
        bn_sentence: "মিটিং আছে",
        en_sentence: "have a meeting",
        mappings: [
          { bn_word: "মিটিং", en_word: "meeting", type: "direct" },
          { bn_word: "আছে", en_word: "have", type: "direct", bridgeRuleId: "BR1" },
          { bn_word: "(নেই)", en_word: "a", type: "added", bridgeRuleId: "BR3" }
        ]
      },
      answerTemplates: [
        { situation_bn: "কেউ মিটিং নিয়ে জিজ্ঞেস করলে", question: "Do you have a meeting?", question_bn: "তোমার কি মিটিং আছে?", answerFormula: "Yes, I have a meeting at [time]", answerFormula_bn: "হ্যাঁ, [সময়]-এ আমার মিটিং আছে", pronunciation_bn: "ইয়েস, আই হ্যাভ আ মিটিং অ্যাট", examples: [{ answer: "Yes, I have a meeting at 2 PM", answer_bn: "হ্যাঁ, দুইটায় আমার মিটিং আছে", pronunciation_bn: "ইয়েস, আই হ্যাভ আ মিটিং অ্যাট টু পিএম" }] },
        { situation_bn: "সমস্যা হলে বলা", question: "What's wrong?", question_bn: "কী সমস্যা?", answerFormula: "I have a problem with [thing]", answerFormula_bn: "আমার [জিনিস] নিয়ে সমস্যা আছে", pronunciation_bn: "আই হ্যাভ আ প্রবলেম উইথ", examples: [{ answer: "I have a problem with my computer", answer_bn: "আমার কম্পিউটারে সমস্যা আছে", pronunciation_bn: "আই হ্যাভ আ প্রবলেম উইথ মাই কম্পিউটার" }] },
        { situation_bn: "কিছু দেখতে চাওয়া", question: "Do you want to see it?", question_bn: "দেখতে চাও?", answerFormula: "Can I have a look?", answerFormula_bn: "আমি কি একটু দেখতে পারি?", pronunciation_bn: "ক্যান আই হ্যাভ আ লুক", examples: [{ answer: "Can I have a look at your phone?", answer_bn: "তোমার ফোনটা কি একটু দেখতে পারি?", pronunciation_bn: "ক্যান আই হ্যাভ আ লুক অ্যাট ইয়োর ফোন" }] }
      ],
      variations: [
        {
          variant: "past", label: "Past (অতীত)", label_bn: "আগে ছিল", formula: "had a [THING]", formula_bn: "[জিনিস] ছিল",
          examples: [
            {
              en: "I had a meeting yesterday",
              bn: "গতকাল আমার মিটিং ছিল",
              pronunciation_bn: "আই হ্যাড আ মিটিং ইয়েস্টারডে",
              slotValues: { THING: "meeting yesterday" },
              stage: 1
            },
            {
              en: "She had a problem last week",
              bn: "গত সপ্তাহে তার সমস্যা ছিল",
              pronunciation_bn: "শি হ্যাড আ প্রবলেম লাস্ট উইক",
              slotValues: { THING: "problem last week" },
              stage: 2
            },
            {
              en: "They had a conversation",
              bn: "ওদের কথাবার্তা হয়েছিল",
              pronunciation_bn: "দে হ্যাড আ কনভারসেশন",
              slotValues: { THING: "conversation" },
              stage: 3
            }
          ]
        },
        {
          variant: "negative", label: "Negative (নেই)", label_bn: "নেই", formula: "don't have [THING]", formula_bn: "[জিনিস] নেই",
          examples: [
            {
              en: "I don't have any meetings",
              bn: "আমার কোনো মিটিং নেই",
              pronunciation_bn: "আই ডোন্ট হ্যাভ এনি মিটিংস",
              slotValues: { THING: "any meetings" },
              stage: 1
            },
            {
              en: "He doesn't have problems",
              bn: "তার সমস্যা নেই",
              pronunciation_bn: "হি ডাজন্ট হ্যাভ প্রবলেমস",
              slotValues: { THING: "problems" },
              stage: 2
            },
            {
              en: "We won't have time",
              bn: "আমাদের সময় হবে না",
              pronunciation_bn: "উই ওন্ট হ্যাভ টাইম",
              slotValues: { THING: "time" },
              stage: 3
            }
          ]
        },
        {
          variant: "question", label: "Question (জিজ্ঞাসা)", label_bn: "আছে কিনা জানতে", formula: "Do you have [THING]?", formula_bn: "তোমার কি [জিনিস] আছে?",
          examples: [
            {
              en: "Do you have a meeting?",
              bn: "তোমার কি মিটিং আছে?",
              pronunciation_bn: "ডু ইউ হ্যাভ আ মিটিং",
              slotValues: { THING: "meeting" },
              stage: 1
            },
            {
              en: "Are you having problems?",
              bn: "তোমার কি সমস্যা হচ্ছে?",
              pronunciation_bn: "আর ইউ হ্যাভিং প্রবলেমস",
              slotValues: { THING: "problems" },
              stage: 2
            },
            {
              en: "Have you had a chance to see it?",
              bn: "তুমি কি দেখার সুযোগ পেয়েছো?",
              pronunciation_bn: "হ্যাভ ইউ হ্যাড আ চান্স টু সি ইট",
              slotValues: { THING: "chance to see it" },
              stage: 3
            }
          ]
        }
      ],
      dialogueChains: [
        {
          id: "X12.4-d1", title_bn: "সহকর্মী মিটিং নিয়ে জিজ্ঞেস করছে", title_en: "Colleague asking about meeting", situation_bn: "সহকর্মী মিটিং নিয়ে জিজ্ঞেস করছে", icon: "🏢",
          turns: [
            { speaker_bn: "সহকর্মী", en: "Do you have a meeting today?", bn: "আজ তোমার মিটিং আছে?", pronunciation_bn: "ডু ইউ হ্যাভ আ মিটিং টুডে", patternId: "X12.4" },
            { speaker_bn: "তুমি", en: "Yes, I have a meeting at 3", bn: "হ্যাঁ, তিনটায় আমার মিটিং আছে", pronunciation_bn: "ইয়েস, আই হ্যাভ আ মিটিং অ্যাট থ্রি", patternId: "X12.4" },
            { speaker_bn: "সহকর্মী", en: "Can I have a word with you after?", bn: "পরে তোমার সাথে কথা বলতে পারি?", pronunciation_bn: "ক্যান আই হ্যাভ আ ওয়ার্ড উইথ ইউ আফটার", patternId: "X12.4" },
            { speaker_bn: "তুমি", en: "Sure, I'll have time then", bn: "অবশ্যই, তখন আমার সময় থাকবে", pronunciation_bn: "শিউর, আইল হ্যাভ টাইম দেন", patternId: "X12.4" }
          ],
          patternsUsed: ["X12.4"]
        }
      ],
      slots: [
        {
          name: "THING",
          description: "Meeting, problem, look, conversation, chance — experiences or situations",
          description_bn: "মিটিং, সমস্যা, দেখা — অভিজ্ঞতা বা পরিস্থিতি",
          acceptedTypes: ["noun", "noun_phrase"],
          examples: ["meeting", "problem", "look", "conversation", "chance"]
        }
      ],
      examples: [
        {
          en: "I have a meeting at 10 AM",
          bn: "সকাল দশটায় আমার মিটিং আছে",
          pronunciation_bn: "আই হ্যাভ আ মিটিং অ্যাট টেন এএম",
          slotValues: { THING: "meeting at 10 AM" },
          topicArea: "work",
          stage: 1,
          miniStory: { situation_bn: "", icon: "📖" }
        },
        {
          en: "She has a big problem",
          bn: "তার বড় সমস্যা আছে",
          pronunciation_bn: "শি হ্যাজ আ বিগ প্রবলেম",
          slotValues: { THING: "big problem" },
          topicArea: "daily_life",
          stage: 1,
          miniStory: { situation_bn: "", icon: "📖" }
        },
        {
          en: "Can I have a look?",
          bn: "আমি কি একটু দেখতে পারি?",
          pronunciation_bn: "ক্যান আই হ্যাভ আ লুক",
          slotValues: { THING: "look" },
          topicArea: "shopping",
          stage: 1,
          miniStory: { situation_bn: "", icon: "📖" }
        },
        {
          en: "We have a party tonight",
          bn: "আজ রাতে আমাদের পার্টি আছে",
          pronunciation_bn: "উই হ্যাভ আ পার্টি টুনাইট",
          slotValues: { THING: "party tonight" },
          topicArea: "social",
          stage: 1,
          miniStory: { situation_bn: "", icon: "📖" }
        },
        {
          en: "They have a test tomorrow",
          bn: "কাল ওদের পরীক্ষা আছে",
          pronunciation_bn: "দে হ্যাভ আ টেস্ট টুমরো",
          slotValues: { THING: "test tomorrow" },
          topicArea: "education",
          stage: 1,
          miniStory: { situation_bn: "", icon: "📖" }
        },
        {
          en: "I have a question about this",
          bn: "এই নিয়ে আমার একটা প্রশ্ন আছে",
          pronunciation_bn: "আই হ্যাভ আ কোয়েশ্চেন এবাউট দিস",
          slotValues: { THING: "question about this" },
          topicArea: "education",
          stage: 2,
          miniStory: { situation_bn: "", icon: "📖" }
        },
        {
          en: "She's having difficulties at work",
          bn: "কর্মস্থলে তার কষ্ট হচ্ছে",
          pronunciation_bn: "শিজ হ্যাভিং ডিফিকাল্টিজ অ্যাট ওয়ার্ক",
          slotValues: { THING: "difficulties at work" },
          topicArea: "work",
          stage: 2,
          miniStory: { situation_bn: "", icon: "📖" }
        },
        {
          en: "He had a chat with the manager",
          bn: "ম্যানেজারের সাথে তার কথা হয়েছে",
          pronunciation_bn: "হি হ্যাড আ চ্যাট উইথ দ্য ম্যানেজার",
          slotValues: { THING: "chat with the manager" },
          topicArea: "work",
          stage: 2,
          miniStory: { situation_bn: "", icon: "📖" }
        },
        {
          en: "We're having a discussion now",
          bn: "আমরা এখন আলোচনা করছি",
          pronunciation_bn: "উইয়ার হ্যাভিং আ ডিসকাশন নাউ",
          slotValues: { THING: "discussion now" },
          topicArea: "work",
          stage: 2,
          miniStory: { situation_bn: "", icon: "📖" }
        },
        {
          en: "They had a wonderful time",
          bn: "ওদের দারুণ সময় কেটেছে",
          pronunciation_bn: "দে হ্যাড আ ওয়ান্ডারফুল টাইম",
          slotValues: { THING: "wonderful time" },
          topicArea: "travel",
          stage: 2,
          miniStory: { situation_bn: "", icon: "📖" }
        },
        {
          en: "I don't have time for this",
          bn: "এর জন্য আমার সময় নেই",
          pronunciation_bn: "আই ডোন্ট হ্যাভ টাইম ফর দিস",
          slotValues: { THING: "time for this" },
          topicArea: "work",
          stage: 3,
          miniStory: { situation_bn: "", icon: "📖" }
        },
        {
          en: "She has a habit of coming late",
          bn: "তার দেরিতে আসার অভ্যাস আছে",
          pronunciation_bn: "শি হ্যাজ আ হ্যাবিট অফ কামিং লেইট",
          slotValues: { THING: "habit of coming late" },
          topicArea: "work",
          stage: 3,
          miniStory: { situation_bn: "", icon: "📖" }
        },
        {
          en: "He has a good relationship with everyone",
          bn: "সবার সাথে তার ভালো সম্পর্ক আছে",
          pronunciation_bn: "হি হ্যাজ আ গুড রিলেশনশিপ উইথ এভরিওয়ান",
          slotValues: { THING: "good relationship with everyone" },
          topicArea: "relationships",
          stage: 3,
          miniStory: { situation_bn: "", icon: "📖" }
        },
        {
          en: "Have you had a chance to think about it?",
          bn: "তুমি কি এটা নিয়ে ভাবার সুযোগ পেয়েছো?",
          pronunciation_bn: "হ্যাভ ইউ হ্যাড আ চান্স টু থিংক এবাউট ইট",
          slotValues: { THING: "chance to think about it" },
          topicArea: "work",
          stage: 3,
          miniStory: { situation_bn: "", icon: "📖" }
        },
        {
          en: "Don't have any doubts about this",
          bn: "এই নিয়ে কোনো সন্দেহ রেখো না",
          pronunciation_bn: "ডোন্ট হ্যাভ এনি ডাউটস এবাউট দিস",
          slotValues: { THING: "any doubts about this" },
          topicArea: "advice",
          stage: 3,
          miniStory: { situation_bn: "", icon: "📖" }
        }
      ]
    },
    {
      id: "X12.5",
      patternName: "heavy/light + [THING] — rain/meal/traffic",
      patternName_bn: "heavy/light জুটি",
      formula: "heavy/light + [THING]",
      formula_bn: "heavy/light + [জিনিস]",
      concept_bn: "ভারী/হালকা",
      formulaPronunciation_bn: "হেভি/লাইট + [জিনিস]",
      bridgeRuleIds: ["BR1", "BR2"],
      usageNote: "Use 'heavy' or 'light' with rain, traffic, meal, sleep, and workload. Don't use 'strong' or 'weak' for these.",
      usageNote_bn: "বৃষ্টি, ট্রাফিক, খাবার, ঘুম এগুলোর সাথে 'heavy' বা 'light' ব্যবহার করো। বাংলায় 'জোরে বৃষ্টি' বলি কিন্তু ইংরেজিতে 'heavy rain' বলতে হয়, 'strong rain' না।",
      formality: "casual",
      difficulty: "intermediate",
      conversionSteps: {
        banglaThought: "তুমি বাংলায় বলো: 'জোরে বৃষ্টি হচ্ছে'",
        steps: [
          { step_bn: "বাংলায় 'জোরে বৃষ্টি' বলি — rain-এর সাথে heavy বসে", result: "heavy" },
          { step_bn: "প্রথমে rain বলো, heavy বসবে rain-এর আগে", result: "heavy rain" },
          { step_bn: "heavy এবং rain মিলে সম্পূর্ণ হয়", result: "heavy rain" }
        ],
        finalResult: "heavy rain",
        finalResult_bn: "জোরে বৃষ্টি"
      },
      commonMistakes: [
        {
          wrong: "strong rain",
          correct: "heavy rain",
          explanation_bn: "rain-এর সাথে strong না, heavy বলতে হয়"
        },
        {
          wrong: "big traffic",
          correct: "heavy traffic",
          explanation_bn: "traffic-এর সাথে big না, heavy বলতে হয়"
        },
        {
          wrong: "small meal",
          correct: "light meal",
          explanation_bn: "meal-এর সাথে small না, light বলতে হয়"
        }
      ],
      simpleRules: [
        { rule_bn: "বৃষ্টি, ট্রাফিক, কাজ যদি অনেক হয় তাহলে heavy", example: "heavy rain" },
        { rule_bn: "খাবার, ঘুম যদি কম হয় তাহলে light", example: "light meal" },
        { rule_bn: "strong বা big না, heavy/light বলতে হবে", example: "heavy traffic, not big traffic" }
      ],
      usageSituations: [
        { situation_bn: "বৃষ্টি হলে আবহাওয়া বর্ণনা", situation_en: "Describing weather during rain", exampleSentence: "There's heavy rain today", exampleSentence_bn: "আজ জোরে বৃষ্টি হচ্ছে" },
        { situation_bn: "রাস্তায় জ্যাম দেখলে", situation_en: "When seeing traffic jam on the road", exampleSentence: "The traffic is heavy", exampleSentence_bn: "ট্রাফিক ভারী" },
        { situation_bn: "হালকা নাস্তা করলে", situation_en: "When having a light meal", exampleSentence: "I had a light meal", exampleSentence_bn: "আমি হালকা খাবার খেয়েছি" }
      ],
      sentenceBuilding: [
        { previousPatternId: "E2.1", previousFormula: "because of [REASON]", previousFormula_bn: "[কারণে]", combined: "We can't go out because of heavy rain", combined_bn: "জোরে বৃষ্টির কারণে আমরা বের হতে পারছি না" },
        { previousPatternId: "F3.1", previousFormula: "always [ACTION]", previousFormula_bn: "সবসময় [কাজ]", combined: "The traffic is always heavy in the morning", combined_bn: "সকালে সবসময় ট্রাফিক ভারী থাকে" }
      ],
      memoryTrick_bn: "Heavy মানে ভারী - বেশি বৃষ্টি ভারী, বেশি ট্রাফিক ভারী, বেশি খাবার ভারী। Light মানে হালকা - কম খাবার হালকা, কম ঘুম হালকা। তাই heavy rain, light meal।",
      chunks: [
        { en: "heavy rain", bn: "জোরে বৃষ্টি", pronunciation_bn: "হেভি রেইন" },
        { en: "heavy traffic", bn: "ঘন জ্যাম", pronunciation_bn: "হেভি ট্রাফিক" },
        { en: "light meal", bn: "হালকা খাবার", pronunciation_bn: "লাইট মিল" }
      ],
      wordMap: {
        bn_sentence: "জোরে বৃষ্টি",
        en_sentence: "heavy rain",
        mappings: [
          { bn_word: "জোরে", en_word: "heavy", type: "direct", bridgeRuleId: "BR1" },
          { bn_word: "বৃষ্টি", en_word: "rain", type: "direct" }
        ]
      },
      answerTemplates: [
        { situation_bn: "আবহাওয়া নিয়ে কথা হলে", question: "How's the weather?", question_bn: "আবহাওয়া কেমন?", answerFormula: "There's heavy rain today", answerFormula_bn: "আজ জোরে বৃষ্টি হচ্ছে", pronunciation_bn: "দেয়ারস হেভি রেইন টুডে", examples: [{ answer: "There's heavy rain today, stay home", answer_bn: "আজ জোরে বৃষ্টি, বাসায় থাকো", pronunciation_bn: "দেয়ারস হেভি রেইন টুডে, স্টে হোম" }] },
        { situation_bn: "রাস্তার অবস্থা জিজ্ঞেস করলে", question: "How's the traffic?", question_bn: "ট্রাফিক কেমন?", answerFormula: "The traffic is [heavy/light]", answerFormula_bn: "ট্রাফিক [ভারী/হালকা]", pronunciation_bn: "দ্য ট্রাফিক ইজ", examples: [{ answer: "The traffic is very heavy now", answer_bn: "এখন ট্রাফিক অনেক ভারী", pronunciation_bn: "দ্য ট্রাফিক ইজ ভেরি হেভি নাউ" }] },
        { situation_bn: "খাবার নিয়ে বলা", question: "What did you eat?", question_bn: "কী খেয়েছো?", answerFormula: "I had a light/heavy meal", answerFormula_bn: "আমি হালকা/ভারী খাবার খেয়েছি", pronunciation_bn: "আই হ্যাড আ লাইট মিল", examples: [{ answer: "I had a light meal, just some snacks", answer_bn: "হালকা খাবার খেয়েছি, শুধু কিছু নাস্তা", pronunciation_bn: "আই হ্যাড আ লাইট মিল, জাস্ট সাম স্ন্যাকস" }] }
      ],
      variations: [
        {
          variant: "past", label: "Past (অতীত)", label_bn: "আগে ছিল", formula: "heavy/light [THING] was", formula_bn: "[জিনিস] ভারী/হালকা ছিল",
          examples: [
            {
              en: "There was heavy rain yesterday",
              bn: "গতকাল জোরে বৃষ্টি হয়েছিল",
              pronunciation_bn: "দেয়ার ওয়াজ হেভি রেইন ইয়েস্টারডে",
              slotValues: { THING: "rain yesterday" },
              stage: 1
            },
            {
              en: "The traffic was light this morning",
              bn: "আজ সকালে ট্রাফিক হালকা ছিল",
              pronunciation_bn: "দ্য ট্রাফিক ওয়াজ লাইট দিস মর্নিং",
              slotValues: { THING: "traffic this morning" },
              stage: 2
            },
            {
              en: "I had a heavy meal at lunch",
              bn: "দুপুরে আমি ভারী খাবার খেয়েছি",
              pronunciation_bn: "আই হ্যাড আ হেভি মিল অ্যাট লাঞ্চ",
              slotValues: { THING: "meal at lunch" },
              stage: 3
            }
          ]
        },
        {
          variant: "negative", label: "Negative (না)", label_bn: "না", formula: "no heavy [THING]", formula_bn: "[জিনিস] ভারী না",
          examples: [
            {
              en: "There's no heavy rain today",
              bn: "আজ জোরে বৃষ্টি হচ্ছে না",
              pronunciation_bn: "দেয়ারস নো হেভি রেইন টুডে",
              slotValues: { THING: "rain today" },
              stage: 1
            },
            {
              en: "The traffic isn't heavy",
              bn: "ট্রাফিক ভারী না",
              pronunciation_bn: "দ্য ট্রাফিক ইজন্ট হেভি",
              slotValues: { THING: "traffic" },
              stage: 2
            },
            {
              en: "I don't want a heavy meal",
              bn: "আমি ভারী খাবার চাই না",
              pronunciation_bn: "আই ডোন্ট ওয়ান্ট আ হেভি মিল",
              slotValues: { THING: "meal" },
              stage: 3
            }
          ]
        },
        {
          variant: "question", label: "Question (জিজ্ঞাসা)", label_bn: "কেমন জানতে", formula: "Is it heavy [THING]?", formula_bn: "[জিনিস] কি ভারী?",
          examples: [
            {
              en: "Is there heavy rain?",
              bn: "কি জোরে বৃষ্টি হচ্ছে?",
              pronunciation_bn: "ইজ দেয়ার হেভি রেইন",
              slotValues: { THING: "rain" },
              stage: 1
            },
            {
              en: "Is the traffic heavy?",
              bn: "ট্রাফিক কি ভারী?",
              pronunciation_bn: "ইজ দ্য ট্রাফিক হেভি",
              slotValues: { THING: "traffic" },
              stage: 2
            },
            {
              en: "Do you want a light or heavy meal?",
              bn: "তুমি হালকা না ভারী খাবার চাও?",
              pronunciation_bn: "ডু ইউ ওয়ান্ট আ লাইট অর হেভি মিল",
              slotValues: { THING: "meal" },
              stage: 3
            }
          ]
        }
      ],
      dialogueChains: [
        {
          id: "X12.5-d1", title_bn: "বৃষ্টিতে বাসায় ফোন করছে", title_en: "Calling home during rain", situation_bn: "বৃষ্টিতে বাসায় ফোন করছে", icon: "🌧️",
          turns: [
            {
              speaker_bn: "ছেলে",
              en: "There's heavy rain here",
              bn: "এখানে জোরে বৃষ্টি হচ্ছে",
              pronunciation_bn: "দেয়ারস হেভি রেইন হিয়ার",
              patternId: "X12.5"
            },
            {
              speaker_bn: "Mother",
              en: "Stay there, don't come now",
              bn: "ওখানেই থাক, এখন আসিস না",
              pronunciation_bn: "স্টে দেয়ার, ডোন্ট কাম নাউ",
              patternId: "X12.5"
            },
            {
              speaker_bn: "Son",
              en: "The traffic will be heavy too",
              bn: "ট্রাফিকও ভারী হবে",
              pronunciation_bn: "দ্য ট্রাফিক উইল বি হেভি টু",
              patternId: "X12.5"
            },
            {
              speaker_bn: "Mother",
              en: "Wait for light rain",
              bn: "হালকা বৃষ্টির জন্য অপেক্ষা কর",
              pronunciation_bn: "ওয়েইট ফর লাইট রেইন",
              patternId: "X12.5"
            }
          ],
          patternsUsed: ["X12.5"]
        }
      ],
      slots: [
        {
          name: "THING",
          description: "Rain, traffic, meal, sleep, workload — things that can be heavy or light in intensity",
          description_bn: "বৃষ্টি, ট্রাফিক, খাবার — যেগুলো ভারী বা হালকা হতে পারে",
          acceptedTypes: ["noun", "noun_phrase"],
          examples: ["rain", "traffic", "meal", "sleep", "workload"]
        }
      ],
      examples: [
        {
          en: "There's heavy rain today",
          bn: "আজ জোরে বৃষ্টি হচ্ছে",
          pronunciation_bn: "দেয়ারস হেভি রেইন টুডে",
          slotValues: { THING: "rain today" },
          topicArea: "weather",
          stage: 1,
          miniStory: { situation_bn: "", icon: "📖" }
        },
        {
          en: "The traffic is always heavy here",
          bn: "এখানে সবসময় ট্রাফিক ভারী",
          pronunciation_bn: "দ্য ট্রাফিক ইজ অলওয়েজ হেভি হিয়ার",
          slotValues: { THING: "traffic here" },
          topicArea: "transportation",
          stage: 1,
          miniStory: { situation_bn: "", icon: "📖" }
        },
        {
          en: "I had a light meal",
          bn: "আমি হালকা খাবার খেয়েছি",
          pronunciation_bn: "আই হ্যাড আ লাইট মিল",
          slotValues: { THING: "meal" },
          topicArea: "food",
          stage: 1,
          miniStory: { situation_bn: "", icon: "📖" }
        },
        {
          en: "We had light snow last night",
          bn: "গত রাতে হালকা তুষারপাত হয়েছিল",
          pronunciation_bn: "উই হ্যাড লাইট স্নো লাস্ট নাইট",
          slotValues: { THING: "snow last night" },
          topicArea: "weather",
          stage: 1,
          miniStory: { situation_bn: "", icon: "📖" }
        },
        {
          en: "She got light sleep",
          bn: "তার হালকা ঘুম হয়েছে",
          pronunciation_bn: "শি গট লাইট স্লিপ",
          slotValues: { THING: "sleep" },
          topicArea: "health",
          stage: 1,
          miniStory: { situation_bn: "", icon: "📖" }
        },
        {
          en: "There was heavy fog in the morning",
          bn: "সকালে ঘন কুয়াশা ছিল",
          pronunciation_bn: "দেয়ার ওয়াজ হেভি ফগ ইন দ্য মর্নিং",
          slotValues: { THING: "fog in the morning" },
          topicArea: "weather",
          stage: 2,
          miniStory: { situation_bn: "", icon: "📖" }
        },
        {
          en: "The traffic is light on Fridays",
          bn: "শুক্রবারে ট্রাফিক হালকা থাকে",
          pronunciation_bn: "দ্য ট্রাফিক ইজ লাইট অন ফ্রাইডেজ",
          slotValues: { THING: "traffic on Fridays" },
          topicArea: "transportation",
          stage: 2,
          miniStory: { situation_bn: "", icon: "📖" }
        },
        {
          en: "He has a heavy workload",
          bn: "তার কাজের চাপ অনেক",
          pronunciation_bn: "হি হ্যাজ আ হেভি ওয়ার্কলোড",
          slotValues: { THING: "workload" },
          topicArea: "work",
          stage: 2,
          miniStory: { situation_bn: "", icon: "📖" }
        },
        {
          en: "We're expecting heavy rain tomorrow",
          bn: "আগামীকাল জোরে বৃষ্টির আশঙ্কা",
          pronunciation_bn: "উইয়ার এক্সপেক্টিং হেভি রেইন টুমরো",
          slotValues: { THING: "rain tomorrow" },
          topicArea: "weather",
          stage: 2,
          miniStory: { situation_bn: "", icon: "📖" }
        },
        {
          en: "Just take a light breakfast",
          bn: "শুধু হালকা নাস্তা করো",
          pronunciation_bn: "জাস্ট টেইক আ লাইট ব্রেকফাস্ট",
          slotValues: { THING: "breakfast" },
          topicArea: "food",
          stage: 2,
          miniStory: { situation_bn: "", icon: "📖" }
        },
        {
          en: "The city faces heavy air pollution",
          bn: "শহর ভারী বায়ু দূষণের মুখোমুখি",
          pronunciation_bn: "দ্য সিটি ফেইসেস হেভি এয়ার পলিউশন",
          slotValues: { THING: "air pollution" },
          topicArea: "environment",
          stage: 3,
          miniStory: { situation_bn: "", icon: "📖" }
        },
        {
          en: "She's a light sleeper",
          bn: "তার ঘুম হালকা",
          pronunciation_bn: "শিজ আ লাইট স্লিপার",
          slotValues: { THING: "sleeper" },
          topicArea: "health",
          stage: 3,
          miniStory: { situation_bn: "", icon: "📖" }
        },
        {
          en: "They had a heavy lunch",
          bn: "ওরা ভারী দুপুরের খাবার খেয়েছে",
          pronunciation_bn: "দে হ্যাড আ হেভি লাঞ্চ",
          slotValues: { THING: "lunch" },
          topicArea: "food",
          stage: 3,
          miniStory: { situation_bn: "", icon: "📖" }
        },
        {
          en: "Avoid heavy food before exercise",
          bn: "ব্যায়ামের আগে ভারী খাবার এড়াও",
          pronunciation_bn: "এভয়েড হেভি ফুড বিফোর এক্সারসাইজ",
          slotValues: { THING: "food before exercise" },
          topicArea: "health",
          stage: 3,
          miniStory: { situation_bn: "", icon: "📖" }
        },
        {
          en: "Don't expect light traffic during rush hour",
          bn: "রাশ আওয়ারে হালকা ট্রাফিক আশা কোরো না",
          pronunciation_bn: "ডোন্ট এক্সপেক্ট লাইট ট্রাফিক ডিউরিং রাশ আওয়ার",
          slotValues: { THING: "traffic during rush hour" },
          topicArea: "transportation",
          stage: 3,
          miniStory: { situation_bn: "", icon: "📖" }
        }
      ]
    },
    {
      id: "X12.6",
      patternName: "catch [THING] — bus/cold/flight",
      patternName_bn: "catch দিয়ে বলা",
      formula: "catch [THING]",
      formula_bn: "catch [জিনিস]",
      concept_bn: "catch",
      formulaPronunciation_bn: "ক্যাচ [জিনিস]",
      bridgeRuleIds: ["BR1", "BR3"],
      usageNote: "Use 'catch' with bus, cold, flight, train, and attention. Don't use 'take' for illness.",
      usageNote_bn: "বাস, ঠান্ডা লাগা, ফ্লাইট এগুলোর সাথে 'catch' ব্যবহার করো। বাংলায় 'ঠান্ডা লাগা' বলি কিন্তু ইংরেজিতে 'catch a cold' বলতে হয়, 'take a cold' না।",
      formality: "casual",
      difficulty: "intermediate",
      conversionSteps: {
        banglaThought: "তুমি বাংলায় বলো: 'আমি বাস ধরি'",
        steps: [
          { step_bn: "বাংলায় 'বাস ধরা' বলি — bus-এর সাথে catch বসে", result: "catch" },
          { step_bn: "প্রথমে I বসাও, তারপর catch বসবে দুটোর মাঝে", result: "I catch" },
          { step_bn: "catch এবং bus-এর মাঝে the বসাও", result: "I catch the bus" }
        ],
        finalResult: "I catch the bus",
        finalResult_bn: "আমি বাস ধরি"
      },
      commonMistakes: [
        {
          wrong: "I take a cold",
          correct: "I catch a cold",
          explanation_bn: "cold-এর সাথে take না, catch বলতে হয়"
        },
        {
          wrong: "He rides the flight",
          correct: "He catches the flight",
          explanation_bn: "flight-এর সাথে ride না, catch বলতে হয়"
        },
        {
          wrong: "She gets a cold",
          correct: "She catches a cold",
          explanation_bn: "cold-এর সাথে get না, catch বলতে হয় (though get is sometimes acceptable)"
        }
      ],
      simpleRules: [
        { rule_bn: "বাস, ট্রেন, ফ্লাইট ধরায় catch বসে", example: "catch the bus" },
        { rule_bn: "ঠান্ডা লাগায় catch a cold বলতে হয়", example: "I caught a cold" },
        { rule_bn: "নজর পেতে catch attention বলো", example: "catch his attention" }
      ],
      usageSituations: [
        { situation_bn: "সকালে বাস ধরতে দৌড়াও", situation_en: "Running to catch the morning bus", exampleSentence: "I catch the bus every morning", exampleSentence_bn: "আমি প্রতিদিন সকালে বাস ধরি" },
        { situation_bn: "বৃষ্টিতে ভিজে ঠান্ডা লেগেছে", situation_en: "Caught a cold after getting wet in rain", exampleSentence: "I caught a cold", exampleSentence_bn: "আমার ঠান্ডা লেগেছে" },
        { situation_bn: "বিমানবন্দরে তাড়াতাড়ি যাও ফ্লাইট ধরতে", situation_en: "Going early to airport to catch flight", exampleSentence: "We need to catch the flight", exampleSentence_bn: "আমাদের ফ্লাইট ধরতে হবে" }
      ],
      sentenceBuilding: [
        { previousPatternId: "F1.2", previousFormula: "at [TIME]", previousFormula_bn: "[সময়]-এ", combined: "I catch the bus at 7 AM every day", combined_bn: "আমি প্রতিদিন সকাল ৭টায় বাস ধরি" },
        { previousPatternId: "E2.1", previousFormula: "because of [REASON]", previousFormula_bn: "[কারণে]", combined: "She caught a cold because of rain", combined_bn: "বৃষ্টির কারণে তার ঠান্ডা লেগেছে" }
      ],
      memoryTrick_bn: "Catch মানে ধরা - বাস ধরো, ট্রেন ধরো, ফ্লাইট ধরো। ঠান্ডাও তোমাকে ধরে ফেলে তাই catch a cold। যা চলে যায় তা ধরতে হয়, তাই catch।",
      chunks: [
        { en: "catch the bus", bn: "বাস ধরা", pronunciation_bn: "ক্যাচ দ্য বাস" },
        { en: "catch a cold", bn: "ঠান্ডা লাগা", pronunciation_bn: "ক্যাচ আ কোল্ড" },
        { en: "catch the flight", bn: "ফ্লাইট ধরা", pronunciation_bn: "ক্যাচ দ্য ফ্লাইট" }
      ],
      wordMap: {
        bn_sentence: "বাস ধরা",
        en_sentence: "catch the bus",
        mappings: [
          { bn_word: "বাস", en_word: "bus", type: "direct" },
          { bn_word: "ধরা", en_word: "catch", type: "direct", bridgeRuleId: "BR1" },
          { bn_word: "(নেই)", en_word: "the", type: "added", bridgeRuleId: "BR3" }
        ]
      },
      answerTemplates: [
        { situation_bn: "কেউ বাস নিয়ে জিজ্ঞেস করলে", question: "How do you go to work?", question_bn: "তুমি কীভাবে অফিসে যাও?", answerFormula: "I catch the [number] bus", answerFormula_bn: "আমি [নম্বর] বাস ধরি", pronunciation_bn: "আই ক্যাচ দ্য বাস", examples: [{ answer: "I catch the 7 AM bus from Mohakhali", answer_bn: "আমি মহাখালী থেকে সকাল ৭টার বাস ধরি", pronunciation_bn: "আই ক্যাচ দ্য সেভেন এএম বাস ফ্রম মহাখালী" }] },
        { situation_bn: "অসুস্থ হলে বলা", question: "What happened?", question_bn: "কী হয়েছে?", answerFormula: "I caught a cold", answerFormula_bn: "আমার ঠান্ডা লেগেছে", pronunciation_bn: "আই কট আ কোল্ড", examples: [{ answer: "I caught a cold yesterday", answer_bn: "গতকাল আমার ঠান্ডা লেগেছে", pronunciation_bn: "আই কট আ কোল্ড ইয়েস্টারডে" }] },
        { situation_bn: "ভ্রমণের সময়সূচী নিয়ে", question: "When is your flight?", question_bn: "তোমার ফ্লাইট কখন?", answerFormula: "I need to catch the [transport] at [time]", answerFormula_bn: "আমাকে [সময়]-এ [যানবাহন] ধরতে হবে", pronunciation_bn: "আই নিড টু ক্যাচ দ্য", examples: [{ answer: "I need to catch the flight at 6 PM", answer_bn: "আমাকে সন্ধ্যা ৬টায় ফ্লাইট ধরতে হবে", pronunciation_bn: "আই নিড টু ক্যাচ দ্য ফ্লাইট অ্যাট সিক্স পিএম" }] }
      ],
      variations: [
        {
          variant: "past", label: "Past (অতীত)", label_bn: "আগে ধরেছিলাম", formula: "caught [THING]", formula_bn: "[জিনিস] ধরেছিলাম",
          examples: [
            {
              en: "I caught the last bus",
              bn: "আমি শেষ বাস ধরেছিলাম",
              pronunciation_bn: "আই কট দ্য লাস্ট বাস",
              slotValues: { THING: "the last bus" },
              stage: 1
            },
            {
              en: "She caught a cold last week",
              bn: "গত সপ্তাহে তার ঠান্ডা লেগেছিল",
              pronunciation_bn: "শি কট আ কোল্ড লাস্ট উইক",
              slotValues: { THING: "a cold last week" },
              stage: 2
            },
            {
              en: "They caught their flight on time",
              bn: "ওরা সময়মতো ফ্লাইট ধরেছিল",
              pronunciation_bn: "দে কট দেয়ার ফ্লাইট অন টাইম",
              slotValues: { THING: "their flight on time" },
              stage: 3
            }
          ]
        },
        {
          variant: "negative", label: "Negative (না ধরা)", label_bn: "ধরিনি", formula: "didn't catch [THING]", formula_bn: "[জিনিস] ধরিনি",
          examples: [
            {
              en: "I didn't catch the bus",
              bn: "আমি বাস ধরতে পারিনি",
              pronunciation_bn: "আই ডিডন্ট ক্যাচ দ্য বাস",
              slotValues: { THING: "the bus" },
              stage: 1
            },
            {
              en: "He doesn't catch colds easily",
              bn: "তার সহজে ঠান্ডা লাগে না",
              pronunciation_bn: "হি ডাজন্ট ক্যাচ কোল্ডস ইজিলি",
              slotValues: { THING: "colds easily" },
              stage: 2
            },
            {
              en: "We won't catch that train",
              bn: "আমরা সেই ট্রেন ধরতে পারবো না",
              pronunciation_bn: "উই ওন্ট ক্যাচ দ্যাট ট্রেইন",
              slotValues: { THING: "that train" },
              stage: 3
            }
          ]
        },
        {
          variant: "question", label: "Question (জিজ্ঞাসা)", label_bn: "ধরেছো কিনা জানতে", formula: "Did you catch [THING]?", formula_bn: "তুমি কি [জিনিস] ধরেছো?",
          examples: [
            {
              en: "Did you catch the bus?",
              bn: "তুমি কি বাস ধরেছো?",
              pronunciation_bn: "ডিড ইউ ক্যাচ দ্য বাস",
              slotValues: { THING: "the bus" },
              stage: 1
            },
            {
              en: "Are you catching a cold?",
              bn: "তোমার কি ঠান্ডা লাগছে?",
              pronunciation_bn: "আর ইউ ক্যাচিং আ কোল্ড",
              slotValues: { THING: "a cold" },
              stage: 2
            },
            {
              en: "Have you caught your flight yet?",
              bn: "তুমি কি ফ্লাইট ধরেছো এখনো?",
              pronunciation_bn: "হ্যাভ ইউ কট ইয়োর ফ্লাইট ইয়েট",
              slotValues: { THING: "your flight yet" },
              stage: 3
            }
          ]
        }
      ],
      dialogueChains: [
        {
          id: "X12.6-d1", title_bn: "অফিসে যাওয়ার জন্য তাড়াহুড়ো", title_en: "Rushing to office", icon: "🏃",
          situation_bn: "অফিসে যাওয়ার জন্য তাড়াহুড়ো",
          turns: [
            {
              speaker_bn: "Wife",
              en: "Hurry up! You'll miss the bus",
              bn: "তাড়াতাড়ি করো! বাস মিস করবে",
              pronunciation_bn: "হারি আপ! ইউল মিস দ্য বাস",
              patternId: "X12.6"
            },
            {
              speaker_bn: "Husband",
              en: "I can catch the next one",
              bn: "আমি পরেরটা ধরতে পারবো",
              pronunciation_bn: "আই ক্যান ক্যাচ দ্য নেক্সট ওয়ান",
              patternId: "X12.6"
            },
            {
              speaker_bn: "Wife",
              en: "You'll be late for the meeting",
              bn: "মিটিংয়ে দেরি হবে",
              pronunciation_bn: "ইউল বি লেইট ফর দ্য মিটিং",
              patternId: "X12.4"
            },
            {
              speaker_bn: "Husband",
              en: "Okay, I'm going to catch it now",
              bn: "ঠিক আছে, এখনই ধরছি",
              pronunciation_bn: "ওকে, আইম গোয়িং টু ক্যাচ ইট নাউ",
              patternId: "X12.6"
            }
          ],
          patternsUsed: ["X12.4", "X12.6"]
        }
      ],
      slots: [
        {
          name: "THING",
          description: "Bus, cold, flight, train, attention — things you catch or that catch you",
          description_bn: "বাস, ঠান্ডা, ফ্লাইট — যা ধরো বা যা তোমাকে ধরে",
          acceptedTypes: ["noun", "noun_phrase"],
          examples: ["bus", "cold", "flight", "train", "attention"]
        }
      ],
      examples: [
        {
          en: "I catch the bus every morning",
          bn: "আমি প্রতিদিন সকালে বাস ধরি",
          pronunciation_bn: "আই ক্যাচ দ্য বাস এভরি মর্নিং",
          slotValues: { THING: "the bus every morning" },
          topicArea: "transportation",
          stage: 1,
          miniStory: { situation_bn: "", icon: "📖" }
        },
        {
          en: "She caught a cold",
          bn: "তার ঠান্ডা লেগেছে",
          pronunciation_bn: "শি কট আ কোল্ড",
          slotValues: { THING: "a cold" },
          topicArea: "health",
          stage: 1,
          miniStory: { situation_bn: "", icon: "📖" }
        },
        {
          en: "He's catching the train",
          bn: "সে ট্রেন ধরছে",
          pronunciation_bn: "হিজ ক্যাচিং দ্য ট্রেইন",
          slotValues: { THING: "the train" },
          topicArea: "transportation",
          stage: 1,
          miniStory: { situation_bn: "", icon: "📖" }
        },
        {
          en: "We need to catch the flight",
          bn: "আমাদের ফ্লাইট ধরতে হবে",
          pronunciation_bn: "উই নিড টু ক্যাচ দ্য ফ্লাইট",
          slotValues: { THING: "the flight" },
          topicArea: "travel",
          stage: 1,
          miniStory: { situation_bn: "", icon: "📖" }
        },
        {
          en: "They caught the last metro",
          bn: "ওরা শেষ মেট্রো ধরেছে",
          pronunciation_bn: "দে কট দ্য লাস্ট মেট্রো",
          slotValues: { THING: "the last metro" },
          topicArea: "transportation",
          stage: 1,
          miniStory: { situation_bn: "", icon: "📖" }
        },
        {
          en: "I always catch a cold in winter",
          bn: "শীতে আমার সবসময় ঠান্ডা লাগে",
          pronunciation_bn: "আই অলওয়েজ ক্যাচ আ কোল্ড ইন উইন্টার",
          slotValues: { THING: "a cold in winter" },
          topicArea: "health",
          stage: 2,
          miniStory: { situation_bn: "", icon: "📖" }
        },
        {
          en: "She caught the early morning flight",
          bn: "সে ভোরের ফ্লাইট ধরেছে",
          pronunciation_bn: "শি কট দি আর্লি মর্নিং ফ্লাইট",
          slotValues: { THING: "the early morning flight" },
          topicArea: "travel",
          stage: 2,
          miniStory: { situation_bn: "", icon: "📖" }
        },
        {
          en: "He can catch a taxi from here",
          bn: "সে এখান থেকে ট্যাক্সি ধরতে পারবে",
          pronunciation_bn: "হি ক্যান ক্যাচ আ ট্যাক্সি ফ্রম হিয়ার",
          slotValues: { THING: "a taxi from here" },
          topicArea: "transportation",
          stage: 2,
          miniStory: { situation_bn: "", icon: "📖" }
        },
        {
          en: "We're trying to catch attention",
          bn: "আমরা মনোযোগ আকর্ষণ করার চেষ্টা করছি",
          pronunciation_bn: "উইয়ার ট্রাইং টু ক্যাচ অ্যাটেনশন",
          slotValues: { THING: "attention" },
          topicArea: "business",
          stage: 2,
          miniStory: { situation_bn: "", icon: "📖" }
        },
        {
          en: "They caught the connecting flight",
          bn: "ওরা সংযোগ ফ্লাইট ধরেছে",
          pronunciation_bn: "দে কট দ্য কানেক্টিং ফ্লাইট",
          slotValues: { THING: "the connecting flight" },
          topicArea: "travel",
          stage: 2,
          miniStory: { situation_bn: "", icon: "📖" }
        },
        {
          en: "I barely caught the deadline",
          bn: "আমি কোনোমতে সময়সীমা ধরেছি",
          pronunciation_bn: "আই বেয়ারলি কট দ্য ডেডলাইন",
          slotValues: { THING: "the deadline" },
          topicArea: "work",
          stage: 3,
          miniStory: { situation_bn: "", icon: "📖" }
        },
        {
          en: "She caught the flu from her child",
          bn: "তার বাচ্চার থেকে ফ্লু হয়েছে",
          pronunciation_bn: "শি কট দ্য ফ্লু ফ্রম হার চাইল্ড",
          slotValues: { THING: "the flu from her child" },
          topicArea: "health",
          stage: 3,
          miniStory: { situation_bn: "", icon: "📖" }
        },
        {
          en: "He caught the ball brilliantly",
          bn: "সে দারুণভাবে বল ধরেছে",
          pronunciation_bn: "হি কট দ্য বল ব্রিলিয়ান্টলি",
          slotValues: { THING: "the ball brilliantly" },
          topicArea: "sports",
          stage: 3,
          miniStory: { situation_bn: "", icon: "📖" }
        },
        {
          en: "Can you catch what he's saying?",
          bn: "তুমি কি ধরতে পারছো সে কী বলছে?",
          pronunciation_bn: "ক্যান ইউ ক্যাচ হোয়াট হিজ সেয়িং",
          slotValues: { THING: "what he's saying" },
          topicArea: "communication",
          stage: 3,
          miniStory: { situation_bn: "", icon: "📖" }
        },
        {
          en: "Don't catch his bad habits",
          bn: "তার খারাপ অভ্যাস ধরো না",
          pronunciation_bn: "ডোন্ট ক্যাচ হিজ ব্যাড হ্যাবিটস",
          slotValues: { THING: "his bad habits" },
          topicArea: "advice",
          stage: 3,
          miniStory: { situation_bn: "", icon: "📖" }
        }
      ]
    },
    {
      id: "X12.7",
      patternName: "get [DESCRIPTION] — married/lost/ready",
      patternName_bn: "get দিয়ে বলা",
      formula: "get [DESCRIPTION]",
      formula_bn: "get [অবস্থা]",
      concept_bn: "get",
      formulaPronunciation_bn: "গেট [অবস্থা]",
      bridgeRuleIds: ["BR1", "BR4"],
      usageNote: "Use 'get' with married, lost, ready, tired, sick, and angry. Don't use 'become' for these common changes.",
      usageNote_bn: "বিয়ে করা, হারিয়ে যাওয়া, প্রস্তুত হওয়া এগুলোর সাথে 'get' ব্যবহার করো। বাংলায় 'বিয়ে হওয়া' বলি কিন্তু ইংরেজিতে 'get married' বলতে হয়, 'become married' না।",
      formality: "casual",
      difficulty: "intermediate",
      conversionSteps: {
        banglaThought: "তুমি বাংলায় বলো: 'আমি বিয়ে করবো'",
        steps: [
          { step_bn: "বাংলায় 'বিয়ে হওয়া' বলি — married-এর সাথে get বসে", result: "get" },
          { step_bn: "প্রথমে I বসাও, তারপর get বসবে দুটোর মাঝে", result: "I get" },
          { step_bn: "get এবং married মিলে সম্পূর্ণ হয়", result: "I get married" }
        ],
        finalResult: "I get married",
        finalResult_bn: "আমি বিয়ে করবো"
      },
      commonMistakes: [
        {
          wrong: "I become married",
          correct: "I get married",
          explanation_bn: "married-এর সাথে become না, get বলতে হয়"
        },
        {
          wrong: "He made ready",
          correct: "He got ready",
          explanation_bn: "ready-র সাথে make না, get বলতে হয়"
        },
        {
          wrong: "We became lost",
          correct: "We got lost",
          explanation_bn: "lost-এর সাথে become না, get বলতে হয়"
        }
      ],
      simpleRules: [
        { rule_bn: "অবস্থা পরিবর্তনে get বসে - বিয়ে, রাগ, ক্লান্ত", example: "get married, get angry" },
        { rule_bn: "get-এর পরে বিশেষণ (adjective) বসে", example: "get ready, get tired" },
        { rule_bn: "become না, get বলতে হবে দৈনন্দিন কথায়", example: "get lost, not become lost" }
      ],
      usageSituations: [
        { situation_bn: "কেউ বিয়ে করলে বলা", situation_en: "When someone gets married", exampleSentence: "I'm getting married next month", exampleSentence_bn: "পরের মাসে আমার বিয়ে হচ্ছে" },
        { situation_bn: "রাস্তায় হারিয়ে গেলে", situation_en: "When you get lost on the road", exampleSentence: "I got lost in the city", exampleSentence_bn: "শহরে আমি হারিয়ে গেছি" },
        { situation_bn: "বের হওয়ার আগে প্রস্তুত হওয়া", situation_en: "Getting ready before going out", exampleSentence: "Get ready, we're leaving", exampleSentence_bn: "প্রস্তুত হও, আমরা যাচ্ছি" }
      ],
      sentenceBuilding: [
        { previousPatternId: "F1.3", previousFormula: "next [TIME]", previousFormula_bn: "পরের [সময়]", combined: "I'm getting married next month", combined_bn: "পরের মাসে আমার বিয়ে হচ্ছে" },
        { previousPatternId: "F2.2", previousFormula: "after [TIME]", previousFormula_bn: "[সময়]-এর পরে", combined: "She gets tired after work", combined_bn: "কাজের পরে সে ক্লান্ত হয়ে যায়" }
      ],
      memoryTrick_bn: "Get মানে হয়ে যাওয়া - বিয়ে হয়ে যাওয়া, হারিয়ে যাওয়া, প্রস্তুত হয়ে যাওয়া। অবস্থা বদলায় তাই get। Get married, get lost, get ready।",
      chunks: [
        { en: "get married", bn: "বিয়ে করা", pronunciation_bn: "গেট ম্যারিড" },
        { en: "get lost", bn: "হারিয়ে যাওয়া", pronunciation_bn: "গেট লস্ট" },
        { en: "get ready", bn: "প্রস্তুত হওয়া", pronunciation_bn: "গেট রেডি" }
      ],
      wordMap: {
        bn_sentence: "বিয়ে হওয়া",
        en_sentence: "get married",
        mappings: [
          { bn_word: "বিয়ে", en_word: "married", type: "direct" },
          { bn_word: "হওয়া", en_word: "get", type: "direct", bridgeRuleId: "BR4" }
        ]
      },
      answerTemplates: [
        { situation_bn: "বিয়ে নিয়ে কথা হলে", question: "Are you getting married?", question_bn: "তোমার কি বিয়ে হচ্ছে?", answerFormula: "I'm getting married [when]", answerFormula_bn: "আমার [কখন] বিয়ে হচ্ছে", pronunciation_bn: "আইম গেটিং ম্যারিড", examples: [{ answer: "I'm getting married in December", answer_bn: "ডিসেম্বরে আমার বিয়ে হচ্ছে", pronunciation_bn: "আইম গেটিং ম্যারিড ইন ডিসেম্বর" }] },
        { situation_bn: "হারিয়ে গেলে", question: "Are you lost?", question_bn: "তুমি কি হারিয়ে গেছো?", answerFormula: "I got lost in [place]", answerFormula_bn: "আমি [জায়গায়] হারিয়ে গেছি", pronunciation_bn: "আই গট লস্ট ইন", examples: [{ answer: "I got lost in this area", answer_bn: "এই এলাকায় আমি হারিয়ে গেছি", pronunciation_bn: "আই গট লস্ট ইন দিস এরিয়া" }] },
        { situation_bn: "প্রস্তুতি নিয়ে জিজ্ঞেস করলে", question: "Are you ready?", question_bn: "তুমি কি প্রস্তুত?", answerFormula: "I'm getting ready", answerFormula_bn: "আমি প্রস্তুত হচ্ছি", pronunciation_bn: "আইম গেটিং রেডি", examples: [{ answer: "I'm getting ready, wait a bit", answer_bn: "প্রস্তুত হচ্ছি, একটু অপেক্ষা করো", pronunciation_bn: "আইম গেটিং রেডি, ওয়েইট আ বিট" }] }
      ],
      variations: [
        {
          variant: "past", label: "Past (অতীত)", label_bn: "আগে হয়েছিল", formula: "got [DESCRIPTION]", formula_bn: "[অবস্থা] হয়ে গেছিল",
          examples: [
            {
              en: "I got married last year",
              bn: "গত বছর আমার বিয়ে হয়েছে",
              pronunciation_bn: "আই গট ম্যারিড লাস্ট ইয়ার",
              slotValues: { DESCRIPTION: "married last year" },
              stage: 1
            },
            {
              en: "She got lost yesterday",
              bn: "গতকাল সে হারিয়ে গিয়েছিল",
              pronunciation_bn: "শি গট লস্ট ইয়েস্টারডে",
              slotValues: { DESCRIPTION: "lost yesterday" },
              stage: 2
            },
            {
              en: "They got tired after the journey",
              bn: "যাত্রার পর ওরা ক্লান্ত হয়ে গিয়েছিল",
              pronunciation_bn: "দে গট টায়ার্ড আফটার দ্য জার্নি",
              slotValues: { DESCRIPTION: "tired after the journey" },
              stage: 3
            }
          ]
        },
        {
          variant: "negative", label: "Negative (না হওয়া)", label_bn: "হয়নি", formula: "not getting [DESCRIPTION]", formula_bn: "[অবস্থা] হচ্ছে না",
          examples: [
            {
              en: "I'm not getting married yet",
              bn: "আমার এখনো বিয়ে হচ্ছে না",
              pronunciation_bn: "আইম নট গেটিং ম্যারিড ইয়েট",
              slotValues: { DESCRIPTION: "married yet" },
              stage: 1
            },
            {
              en: "He didn't get lost",
              bn: "সে হারায়নি",
              pronunciation_bn: "হি ডিডন্ট গেট লস্ট",
              slotValues: { DESCRIPTION: "lost" },
              stage: 2
            },
            {
              en: "We won't get angry",
              bn: "আমরা রাগ করবো না",
              pronunciation_bn: "উই ওন্ট গেট অ্যাংগ্রি",
              slotValues: { DESCRIPTION: "angry" },
              stage: 3
            }
          ]
        },
        {
          variant: "question", label: "Question (জিজ্ঞাসা)", label_bn: "হয়েছে কিনা জানতে", formula: "Are you getting [DESCRIPTION]?", formula_bn: "তুমি কি [অবস্থা] হচ্ছো?",
          examples: [
            {
              en: "Are you getting married?",
              bn: "তোমার কি বিয়ে হচ্ছে?",
              pronunciation_bn: "আর ইউ গেটিং ম্যারিড",
              slotValues: { DESCRIPTION: "married" },
              stage: 1
            },
            {
              en: "Did you get ready?",
              bn: "তুমি কি প্রস্তুত হয়েছো?",
              pronunciation_bn: "ডিড ইউ গেট রেডি",
              slotValues: { DESCRIPTION: "ready" },
              stage: 2
            },
            {
              en: "Have you gotten tired?",
              bn: "তুমি কি ক্লান্ত হয়ে গেছো?",
              pronunciation_bn: "হ্যাভ ইউ গটেন টায়ার্ড",
              slotValues: { DESCRIPTION: "tired" },
              stage: 3
            }
          ]
        }
      ],
      dialogueChains: [
        {
          id: "X12.7-d1",
          title_bn: "বিয়ের খবর জানাচ্ছে বন্ধুকে",
          title_en: "Sharing wedding news with friend",
          situation_bn: "বিয়ের খবর জানাচ্ছে বন্ধুকে",
          icon: "💍",
          turns: [
            {
              speaker_bn: "Friend",
              en: "I heard you're getting married!",
              bn: "শুনলাম তোমার বিয়ে হচ্ছে!",
              pronunciation_bn: "আই হার্ড ইউয়ার গেটিং ম্যারিড",
              patternId: "X12.7"
            },
            {
              speaker_bn: "You",
              en: "Yes, I'm getting married next month",
              bn: "হ্যাঁ, পরের মাসে আমার বিয়ে হচ্ছে",
              pronunciation_bn: "ইয়েস, আইম গেটিং ম্যারিড নেক্সট মান্থ",
              patternId: "X12.7"
            },
            {
              speaker_bn: "Friend",
              en: "Are you getting nervous?",
              bn: "তুমি কি নার্ভাস হচ্ছো?",
              pronunciation_bn: "আর ইউ গেটিং নার্ভাস",
              patternId: "X12.7"
            },
            {
              speaker_bn: "You",
              en: "A little, but I'm getting ready",
              bn: "একটু, কিন্তু আমি প্রস্তুত হচ্ছি",
              pronunciation_bn: "আ লিটল, বাট আইম গেটিং রেডি",
              patternId: "X12.7"
            },
            {
              speaker_bn: "Friend",
              en: "Don't get stressed, enjoy it!",
              bn: "স্ট্রেস নিও না, উপভোগ করো!",
              pronunciation_bn: "ডোন্ট গেট স্ট্রেসড, এনজয় ইট",
              patternId: "X12.7"
            }
          ],
          patternsUsed: ["X12.7"]
        }
      ],
      slots: [
        {
          name: "DESCRIPTION",
          description: "Married, lost, ready, tired, sick, angry — states or conditions you change into",
          description_bn: "বিয়ে, হারানো, প্রস্তুত — যে অবস্থায় পরিবর্তন হও",
          acceptedTypes: ["adjective", "past_participle"],
          examples: ["married", "lost", "ready", "tired", "sick", "angry"]
        }
      ],
      examples: [
        {
          en: "I'm getting married next year",
          bn: "আগামী বছর আমার বিয়ে হচ্ছে",
          pronunciation_bn: "আইম গেটিং ম্যারিড নেক্সট ইয়ার",
          slotValues: { DESCRIPTION: "married next year" },
          topicArea: "family",
          stage: 1,
          miniStory: { situation_bn: "", icon: "📖" }
        },
        {
          en: "She gets ready quickly",
          bn: "সে তাড়াতাড়ি প্রস্তুত হয়",
          pronunciation_bn: "শি গেটস রেডি কুইকলি",
          slotValues: { DESCRIPTION: "ready quickly" },
          topicArea: "daily_life",
          stage: 1,
          miniStory: { situation_bn: "", icon: "📖" }
        },
        {
          en: "He got lost in the city",
          bn: "সে শহরে হারিয়ে গেছে",
          pronunciation_bn: "হি গট লস্ট ইন দ্য সিটি",
          slotValues: { DESCRIPTION: "lost in the city" },
          topicArea: "transportation",
          stage: 1,
          miniStory: { situation_bn: "", icon: "📖" }
        },
        {
          en: "We get tired easily",
          bn: "আমরা সহজে ক্লান্ত হই",
          pronunciation_bn: "উই গেট টায়ার্ড ইজিলি",
          slotValues: { DESCRIPTION: "tired easily" },
          topicArea: "health",
          stage: 1,
          miniStory: { situation_bn: "", icon: "📖" }
        },
        {
          en: "They got angry at the service",
          bn: "সেবা দেখে ওরা রাগ করেছে",
          pronunciation_bn: "দে গট অ্যাংগ্রি অ্যাট দ্য সার্ভিস",
          slotValues: { DESCRIPTION: "angry at the service" },
          topicArea: "social",
          stage: 1,
          miniStory: { situation_bn: "", icon: "📖" }
        },
        {
          en: "I'm getting sick of this",
          bn: "আমি এটা নিয়ে বিরক্ত হচ্ছি",
          pronunciation_bn: "আইম গেটিং সিক অফ দিস",
          slotValues: { DESCRIPTION: "sick of this" },
          topicArea: "work",
          stage: 2,
          miniStory: { situation_bn: "", icon: "📖" }
        },
        {
          en: "She's getting better now",
          bn: "সে এখন ভালো হচ্ছে",
          pronunciation_bn: "শিজ গেটিং বেটার নাউ",
          slotValues: { DESCRIPTION: "better now" },
          topicArea: "health",
          stage: 2,
          miniStory: { situation_bn: "", icon: "📖" }
        },
        {
          en: "He got confused about directions",
          bn: "পথনির্দেশ নিয়ে সে বিভ্রান্ত হয়েছে",
          pronunciation_bn: "হি গট কনফিউজড এবাউট ডিরেকশনস",
          slotValues: { DESCRIPTION: "confused about directions" },
          topicArea: "transportation",
          stage: 2,
          miniStory: { situation_bn: "", icon: "📖" }
        },
        {
          en: "We're getting older",
          bn: "আমরা বুড়ো হচ্ছি",
          pronunciation_bn: "উইয়ার গেটিং ওল্ডার",
          slotValues: { DESCRIPTION: "older" },
          topicArea: "family",
          stage: 2,
          miniStory: { situation_bn: "", icon: "📖" }
        },
        {
          en: "They got divorced last year",
          bn: "গত বছর ওদের ডিভোর্স হয়েছে",
          pronunciation_bn: "দে গট ডিভোর্সড লাস্ট ইয়ার",
          slotValues: { DESCRIPTION: "divorced last year" },
          topicArea: "family",
          stage: 2,
          miniStory: { situation_bn: "", icon: "📖" }
        },
        {
          en: "I'm not getting any younger",
          bn: "আমি কোনোভাবেই ছোট হচ্ছি না (বয়স বাড়ছেই)",
          pronunciation_bn: "আইম নট গেটিং এনি ইয়াঙ্গার",
          slotValues: { DESCRIPTION: "any younger" },
          topicArea: "advice",
          stage: 3,
          miniStory: { situation_bn: "", icon: "📖" }
        },
        {
          en: "She got promoted at work",
          bn: "কর্মস্থলে তার পদোন্নতি হয়েছে",
          pronunciation_bn: "শি গট প্রোমোটেড অ্যাট ওয়ার্ক",
          slotValues: { DESCRIPTION: "promoted at work" },
          topicArea: "work",
          stage: 3,
          miniStory: { situation_bn: "", icon: "📖" }
        },
        {
          en: "He's getting used to the new job",
          bn: "সে নতুন চাকরিতে অভ্যস্ত হচ্ছে",
          pronunciation_bn: "হিজ গেটিং ইউজড টু দ্য নিউ জব",
          slotValues: { DESCRIPTION: "used to the new job" },
          topicArea: "work",
          stage: 3,
          miniStory: { situation_bn: "", icon: "📖" }
        },
        {
          en: "Don't get too excited",
          bn: "বেশি উত্তেজিত হয়ো না",
          pronunciation_bn: "ডোন্ট গেট টু এক্সাইটেড",
          slotValues: { DESCRIPTION: "too excited" },
          topicArea: "advice",
          stage: 3,
          miniStory: { situation_bn: "", icon: "📖" }
        },
        {
          en: "Get dressed, we're leaving",
          bn: "কাপড় পরো, আমরা যাচ্ছি",
          pronunciation_bn: "গেট ড্রেসড, উইয়ার লিভিং",
          slotValues: { DESCRIPTION: "dressed" },
          topicArea: "daily_life",
          stage: 3,
          miniStory: { situation_bn: "", icon: "📖" }
        }
      ]
    }
  ],
  // crossPatternDialogues removed — field not in PatternCategory type
  // TODO: Add crossPatternDialogues support to PatternCategory type, then restore content
};
