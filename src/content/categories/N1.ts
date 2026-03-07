import { PatternCategory } from "@/types/pattern";

export const categoryN1: PatternCategory = {
  id: "N1",
  slug: "article-patterns",
  name: "Article Patterns (A/An/The/Zero)",
  name_bn: "আর্টিকেল প্যাটার্ন",
  description:
    "Master when to use a, an, the, or no article in everyday English.",
  description_bn:
    "প্রতিদিনের ইংরেজিতে a, an, the বা শূন্য আর্টিকেল কখন ব্যবহার করবেন শিখুন।",
  icon: "📝",
  group: "N",
  groupName: "Articles, Determiners & Quantifiers",
  groupName_bn: "আর্টিকেল, নির্ধারক ও পরিমাণবাচক",
  difficulty: "intermediate",
  patterns: [
    {
      id: "N1.1",
      formula: "I need a [THING]",
      formula_bn: "আমার একটা [জিনিস] দরকার",
      patternName: "Indefinite Article (a)",
      patternName_bn: "অনির্দিষ্ট আর্টিকেল (a)",
      slots: [
        {
          name: "THING",
          description: "Any countable singular noun",
          description_bn: "যেকোনো গণনাযোগ্য একবচন বিশেষ্য",
          acceptedTypes: ["noun"],
          examples: ["pen", "doctor", "taxi"],
        },
      ],
      examples: [
        {
          en: "I need a pen.",
          bn: "আমার একটা কলম দরকার।",
          slotValues: { THING: "pen" },
          topicArea: "daily_life",
        },
        {
          en: "I need a doctor.",
          bn: "আমার একজন ডাক্তার দরকার।",
          slotValues: { THING: "doctor" },
          topicArea: "health",
        },
        {
          en: "I need a taxi.",
          bn: "আমার একটা ট্যাক্সি দরকার।",
          slotValues: { THING: "taxi" },
          topicArea: "travel",
        },
        {
          en: "I need a glass of water.",
          bn: "আমার এক গ্লাস পানি দরকার।",
          slotValues: { THING: "glass of water" },
          topicArea: "food",
        },
        {
          en: "I need a new phone.",
          bn: "আমার একটা নতুন ফোন দরকার।",
          slotValues: { THING: "new phone" },
          topicArea: "shopping",
        },
        {
          en: "I need a break.",
          bn: "আমার একটু বিরতি দরকার।",
          slotValues: { THING: "break" },
          topicArea: "work",
        },
        {
          en: "I need a ticket to Dhaka.",
          bn: "আমার ঢাকার একটা টিকিট দরকার।",
          slotValues: { THING: "ticket to Dhaka" },
          topicArea: "travel",
        },
        {
          en: "I need a bigger bag.",
          bn: "আমার একটা বড় ব্যাগ দরকার।",
          slotValues: { THING: "bigger bag" },
          topicArea: "shopping",
        },
        {
          en: "I need a translator.",
          bn: "আমার একজন অনুবাদক দরকার।",
          slotValues: { THING: "translator" },
          topicArea: "work",
        },
        {
          en: "I need a minute to think.",
          bn: "আমার ভাবার জন্য একটু সময় দরকার।",
          slotValues: { THING: "minute to think" },
          topicArea: "daily_life",
        },
        {
          en: "I need a ladder.",
          bn: "আমার একটা মই দরকার।",
          slotValues: { THING: "ladder" },
          topicArea: "daily_life",
        },
        {
          en: "I need a partner for this project.",
          bn: "আমার এই প্রকল্পের জন্য একজন সহযোগী দরকার।",
          slotValues: { THING: "partner for this project" },
          topicArea: "work",
        },
        {
          en: "I need a recipe for biryani.",
          bn: "আমার বিরিয়ানির একটা রেসিপি দরকার।",
          slotValues: { THING: "recipe for biryani" },
          topicArea: "food",
        },
        {
          en: "I need a haircut.",
          bn: "আমার চুল কাটা দরকার।",
          slotValues: { THING: "haircut" },
          topicArea: "daily_life",
        },
        {
          en: "I need a good night's sleep.",
          bn: "আমার একটা ভালো রাতের ঘুম দরকার।",
          slotValues: { THING: "good night's sleep" },
          topicArea: "health",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "Use 'a' before consonant sounds and 'an' before vowel sounds to refer to any one of something, not a specific one.",
      usageNote_bn:
        "ব্যঞ্জনধ্বনির আগে 'a' এবং স্বরধ্বনির আগে 'an' ব্যবহার করুন — কোনো নির্দিষ্ট জিনিস নয়, যেকোনো একটি বোঝাতে।",
    },
    {
      id: "N1.2",
      formula: "I need an [VOWEL-SOUND THING]",
      formula_bn: "আমার একটা [স্বরধ্বনি-জিনিস] দরকার",
      patternName: "Indefinite Article (an)",
      patternName_bn: "অনির্দিষ্ট আর্টিকেল (an)",
      slots: [
        {
          name: "VOWEL-SOUND THING",
          description:
            "A countable singular noun starting with a vowel sound",
          description_bn:
            "স্বরধ্বনি দিয়ে শুরু হওয়া গণনাযোগ্য একবচন বিশেষ্য",
          acceptedTypes: ["noun"],
          examples: ["apple", "umbrella", "idea"],
        },
      ],
      examples: [
        {
          en: "I need an apple.",
          bn: "আমার একটা আপেল দরকার।",
          slotValues: { "VOWEL-SOUND THING": "apple" },
          topicArea: "food",
        },
        {
          en: "I need an umbrella.",
          bn: "আমার একটা ছাতা দরকার।",
          slotValues: { "VOWEL-SOUND THING": "umbrella" },
          topicArea: "daily_life",
        },
        {
          en: "I need an idea.",
          bn: "আমার একটা আইডিয়া দরকার।",
          slotValues: { "VOWEL-SOUND THING": "idea" },
          topicArea: "work",
        },
        {
          en: "I need an hour to finish.",
          bn: "আমার শেষ করতে এক ঘণ্টা দরকার।",
          slotValues: { "VOWEL-SOUND THING": "hour to finish" },
          topicArea: "work",
        },
        {
          en: "I need an envelope.",
          bn: "আমার একটা খাম দরকার।",
          slotValues: { "VOWEL-SOUND THING": "envelope" },
          topicArea: "daily_life",
        },
        {
          en: "I need an answer right now.",
          bn: "আমার এখনই একটা উত্তর দরকার।",
          slotValues: { "VOWEL-SOUND THING": "answer right now" },
          topicArea: "work",
        },
        {
          en: "I need an appointment with the dentist.",
          bn: "আমার দাঁতের ডাক্তারের সাথে একটা অ্যাপয়েন্টমেন্ট দরকার।",
          slotValues: { "VOWEL-SOUND THING": "appointment with the dentist" },
          topicArea: "health",
        },
        {
          en: "I need an orange juice.",
          bn: "আমার একটা কমলার জুস দরকার।",
          slotValues: { "VOWEL-SOUND THING": "orange juice" },
          topicArea: "food",
        },
        {
          en: "I need an electrician.",
          bn: "আমার একজন ইলেকট্রিশিয়ান দরকার।",
          slotValues: { "VOWEL-SOUND THING": "electrician" },
          topicArea: "daily_life",
        },
        {
          en: "I need an extra chair.",
          bn: "আমার একটা বাড়তি চেয়ার দরকার।",
          slotValues: { "VOWEL-SOUND THING": "extra chair" },
          topicArea: "daily_life",
        },
        {
          en: "I need an honest opinion.",
          bn: "আমার একটা সৎ মতামত দরকার।",
          slotValues: { "VOWEL-SOUND THING": "honest opinion" },
          topicArea: "relationships",
        },
        {
          en: "I need an extension on the deadline.",
          bn: "আমার ডেডলাইন বাড়ানো দরকার।",
          slotValues: { "VOWEL-SOUND THING": "extension on the deadline" },
          topicArea: "work",
        },
        {
          en: "I need an ice pack.",
          bn: "আমার একটা আইস প্যাক দরকার।",
          slotValues: { "VOWEL-SOUND THING": "ice pack" },
          topicArea: "health",
        },
        {
          en: "I need an update on the project.",
          bn: "আমার প্রকল্পের একটা আপডেট দরকার।",
          slotValues: { "VOWEL-SOUND THING": "update on the project" },
          topicArea: "work",
        },
        {
          en: "I need an early morning flight.",
          bn: "আমার ভোরবেলার একটা ফ্লাইট দরকার।",
          slotValues: { "VOWEL-SOUND THING": "early morning flight" },
          topicArea: "travel",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "Use 'an' before vowel sounds (not just vowel letters). Note: 'an hour' (silent h) but 'a university' (sounds like 'yoo').",
      usageNote_bn:
        "স্বরধ্বনির আগে 'an' ব্যবহার করুন (শুধু স্বরবর্ণ নয়)। লক্ষ্য করুন: 'an hour' (নীরব h) কিন্তু 'a university' ('ইউ' ধ্বনি)।",
    },
    {
      id: "N1.3",
      formula: "I need the [SPECIFIC THING]",
      formula_bn: "আমার [নির্দিষ্ট জিনিসটা] দরকার",
      patternName: "Definite Article (the)",
      patternName_bn: "নির্দিষ্ট আর্টিকেল (the)",
      slots: [
        {
          name: "SPECIFIC THING",
          description:
            "A specific noun that both speaker and listener know about",
          description_bn:
            "একটি নির্দিষ্ট বিশেষ্য যা বক্তা ও শ্রোতা উভয়ই জানে",
          acceptedTypes: ["noun", "noun_phrase"],
          examples: ["car keys", "blue folder", "report from yesterday"],
        },
      ],
      examples: [
        {
          en: "I need the car keys.",
          bn: "আমার গাড়ির চাবিটা দরকার।",
          slotValues: { "SPECIFIC THING": "car keys" },
          topicArea: "daily_life",
        },
        {
          en: "I need the blue folder.",
          bn: "আমার নীল ফোল্ডারটা দরকার।",
          slotValues: { "SPECIFIC THING": "blue folder" },
          topicArea: "work",
        },
        {
          en: "I need the report from yesterday.",
          bn: "আমার গতকালের রিপোর্টটা দরকার।",
          slotValues: { "SPECIFIC THING": "report from yesterday" },
          topicArea: "work",
        },
        {
          en: "I need the password for the Wi-Fi.",
          bn: "আমার ওয়াই-ফাইয়ের পাসওয়ার্ডটা দরকার।",
          slotValues: { "SPECIFIC THING": "password for the Wi-Fi" },
          topicArea: "daily_life",
        },
        {
          en: "I need the medicine the doctor prescribed.",
          bn: "আমার ডাক্তারের দেওয়া ওষুধটা দরকার।",
          slotValues: { "SPECIFIC THING": "medicine the doctor prescribed" },
          topicArea: "health",
        },
        {
          en: "I need the map we used last time.",
          bn: "আমার গত বারের মানচিত্রটা দরকার।",
          slotValues: { "SPECIFIC THING": "map we used last time" },
          topicArea: "travel",
        },
        {
          en: "I need the receipt from the store.",
          bn: "আমার দোকানের রসিদটা দরকার।",
          slotValues: { "SPECIFIC THING": "receipt from the store" },
          topicArea: "shopping",
        },
        {
          en: "I need the book you borrowed.",
          bn: "আমার তুমি যে বইটা ধার নিয়েছিলে সেটা দরকার।",
          slotValues: { "SPECIFIC THING": "book you borrowed" },
          topicArea: "education",
        },
        {
          en: "I need the charger on the table.",
          bn: "আমার টেবিলের উপরের চার্জারটা দরকার।",
          slotValues: { "SPECIFIC THING": "charger on the table" },
          topicArea: "daily_life",
        },
        {
          en: "I need the red shirt for the interview.",
          bn: "আমার ইন্টারভিউয়ের জন্য লাল শার্টটা দরকার।",
          slotValues: { "SPECIFIC THING": "red shirt for the interview" },
          topicArea: "work",
        },
        {
          en: "I need the spice mix my mom made.",
          bn: "আমার মায়ের বানানো মশলার মিশ্রণটা দরকার।",
          slotValues: { "SPECIFIC THING": "spice mix my mom made" },
          topicArea: "food",
        },
        {
          en: "I need the contract we signed.",
          bn: "আমার আমরা যে চুক্তিটা সই করেছিলাম সেটা দরকার।",
          slotValues: { "SPECIFIC THING": "contract we signed" },
          topicArea: "work",
        },
        {
          en: "I need the umbrella by the door.",
          bn: "আমার দরজার পাশের ছাতাটা দরকার।",
          slotValues: { "SPECIFIC THING": "umbrella by the door" },
          topicArea: "daily_life",
        },
        {
          en: "I need the test results.",
          bn: "আমার পরীক্ষার ফলাফলটা দরকার।",
          slotValues: { "SPECIFIC THING": "test results" },
          topicArea: "health",
        },
        {
          en: "I need the biggest suitcase.",
          bn: "আমার সবচেয়ে বড় সুটকেসটা দরকার।",
          slotValues: { "SPECIFIC THING": "biggest suitcase" },
          topicArea: "travel",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "Use 'the' when both the speaker and listener know exactly which thing is being referred to, or when there is only one of it.",
      usageNote_bn:
        "'the' ব্যবহার করুন যখন বক্তা ও শ্রোতা উভয়ই জানে ঠিক কোন জিনিসের কথা বলা হচ্ছে, বা যখন সেটা একটাই।",
    },
    {
      id: "N1.4",
      formula: "I like [ZERO ARTICLE + PLURAL/UNCOUNTABLE]",
      formula_bn: "আমি [বহুবচন/অগণনীয়] পছন্দ করি",
      patternName: "Zero Article (General)",
      patternName_bn: "শূন্য আর্টিকেল (সাধারণ)",
      slots: [
        {
          name: "ZERO ARTICLE + PLURAL/UNCOUNTABLE",
          description:
            "A plural noun or uncountable noun used in a general sense",
          description_bn:
            "সাধারণ অর্থে ব্যবহৃত বহুবচন বা অগণনীয় বিশেষ্য",
          acceptedTypes: ["noun", "noun_phrase"],
          examples: ["cats", "music", "chocolate"],
        },
      ],
      examples: [
        {
          en: "I like cats.",
          bn: "আমি বিড়াল পছন্দ করি।",
          slotValues: { "ZERO ARTICLE + PLURAL/UNCOUNTABLE": "cats" },
          topicArea: "daily_life",
        },
        {
          en: "I like music.",
          bn: "আমি গান পছন্দ করি।",
          slotValues: { "ZERO ARTICLE + PLURAL/UNCOUNTABLE": "music" },
          topicArea: "daily_life",
        },
        {
          en: "I like chocolate.",
          bn: "আমি চকলেট পছন্দ করি।",
          slotValues: { "ZERO ARTICLE + PLURAL/UNCOUNTABLE": "chocolate" },
          topicArea: "food",
        },
        {
          en: "I like rainy days.",
          bn: "আমি বৃষ্টির দিন পছন্দ করি।",
          slotValues: { "ZERO ARTICLE + PLURAL/UNCOUNTABLE": "rainy days" },
          topicArea: "daily_life",
        },
        {
          en: "I like coffee.",
          bn: "আমি কফি পছন্দ করি।",
          slotValues: { "ZERO ARTICLE + PLURAL/UNCOUNTABLE": "coffee" },
          topicArea: "food",
        },
        {
          en: "I like old movies.",
          bn: "আমি পুরোনো সিনেমা পছন্দ করি।",
          slotValues: { "ZERO ARTICLE + PLURAL/UNCOUNTABLE": "old movies" },
          topicArea: "daily_life",
        },
        {
          en: "I like spicy food.",
          bn: "আমি ঝাল খাবার পছন্দ করি।",
          slotValues: { "ZERO ARTICLE + PLURAL/UNCOUNTABLE": "spicy food" },
          topicArea: "food",
        },
        {
          en: "I like long walks.",
          bn: "আমি দীর্ঘ হাঁটা পছন্দ করি।",
          slotValues: { "ZERO ARTICLE + PLURAL/UNCOUNTABLE": "long walks" },
          topicArea: "health",
        },
        {
          en: "I like science fiction books.",
          bn: "আমি সায়েন্স ফিকশন বই পছন্দ করি।",
          slotValues: {
            "ZERO ARTICLE + PLURAL/UNCOUNTABLE": "science fiction books",
          },
          topicArea: "education",
        },
        {
          en: "I like fresh vegetables.",
          bn: "আমি তাজা সবজি পছন্দ করি।",
          slotValues: {
            "ZERO ARTICLE + PLURAL/UNCOUNTABLE": "fresh vegetables",
          },
          topicArea: "food",
        },
        {
          en: "I like honesty.",
          bn: "আমি সততা পছন্দ করি।",
          slotValues: { "ZERO ARTICLE + PLURAL/UNCOUNTABLE": "honesty" },
          topicArea: "relationships",
        },
        {
          en: "I like road trips.",
          bn: "আমি রোড ট্রিপ পছন্দ করি।",
          slotValues: { "ZERO ARTICLE + PLURAL/UNCOUNTABLE": "road trips" },
          topicArea: "travel",
        },
        {
          en: "I like teamwork.",
          bn: "আমি দলগত কাজ পছন্দ করি।",
          slotValues: { "ZERO ARTICLE + PLURAL/UNCOUNTABLE": "teamwork" },
          topicArea: "work",
        },
        {
          en: "I like flowers.",
          bn: "আমি ফুল পছন্দ করি।",
          slotValues: { "ZERO ARTICLE + PLURAL/UNCOUNTABLE": "flowers" },
          topicArea: "daily_life",
        },
        {
          en: "I like traditional food.",
          bn: "আমি ঐতিহ্যবাহী খাবার পছন্দ করি।",
          slotValues: {
            "ZERO ARTICLE + PLURAL/UNCOUNTABLE": "traditional food",
          },
          topicArea: "food",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "No article is needed when talking about things in general. 'I like cats' means all cats, not specific ones.",
      usageNote_bn:
        "সাধারণভাবে কিছু বোঝাতে কোনো আর্টিকেল লাগে না। 'I like cats' মানে সব বিড়াল, নির্দিষ্ট কোনো বিড়াল নয়।",
    },
    {
      id: "N1.5",
      formula: "[PERSON] is a/an [PROFESSION/ROLE]",
      formula_bn: "[ব্যক্তি] একজন [পেশা/ভূমিকা]",
      patternName: "Article with Professions",
      patternName_bn: "পেশার সাথে আর্টিকেল",
      slots: [
        {
          name: "PERSON",
          description: "A person's name or pronoun",
          description_bn: "একজন ব্যক্তির নাম বা সর্বনাম",
          acceptedTypes: ["person"],
          examples: ["He", "My sister", "Rahim"],
        },
        {
          name: "PROFESSION/ROLE",
          description: "A job title or social role",
          description_bn: "একটি পেশা বা সামাজিক ভূমিকা",
          acceptedTypes: ["noun"],
          examples: ["teacher", "engineer", "artist"],
        },
      ],
      examples: [
        {
          en: "He is a teacher.",
          bn: "সে একজন শিক্ষক।",
          slotValues: { PERSON: "He", "PROFESSION/ROLE": "teacher" },
          topicArea: "work",
        },
        {
          en: "My sister is an engineer.",
          bn: "আমার বোন একজন ইঞ্জিনিয়ার।",
          slotValues: { PERSON: "My sister", "PROFESSION/ROLE": "engineer" },
          topicArea: "work",
        },
        {
          en: "Rahim is a doctor.",
          bn: "রহিম একজন ডাক্তার।",
          slotValues: { PERSON: "Rahim", "PROFESSION/ROLE": "doctor" },
          topicArea: "health",
        },
        {
          en: "She is an artist.",
          bn: "সে একজন শিল্পী।",
          slotValues: { PERSON: "She", "PROFESSION/ROLE": "artist" },
          topicArea: "work",
        },
        {
          en: "My father is a farmer.",
          bn: "আমার বাবা একজন কৃষক।",
          slotValues: { PERSON: "My father", "PROFESSION/ROLE": "farmer" },
          topicArea: "work",
        },
        {
          en: "Fatima is a journalist.",
          bn: "ফাতিমা একজন সাংবাদিক।",
          slotValues: { PERSON: "Fatima", "PROFESSION/ROLE": "journalist" },
          topicArea: "work",
        },
        {
          en: "He is an honest man.",
          bn: "সে একজন সৎ মানুষ।",
          slotValues: { PERSON: "He", "PROFESSION/ROLE": "honest man" },
          topicArea: "relationships",
        },
        {
          en: "My brother is a software developer.",
          bn: "আমার ভাই একজন সফটওয়্যার ডেভেলপার।",
          slotValues: {
            PERSON: "My brother",
            "PROFESSION/ROLE": "software developer",
          },
          topicArea: "work",
        },
        {
          en: "She is a wonderful cook.",
          bn: "সে একজন অসাধারণ রাঁধুনি।",
          slotValues: { PERSON: "She", "PROFESSION/ROLE": "wonderful cook" },
          topicArea: "food",
        },
        {
          en: "Karim is an architect.",
          bn: "করিম একজন স্থপতি।",
          slotValues: { PERSON: "Karim", "PROFESSION/ROLE": "architect" },
          topicArea: "work",
        },
        {
          en: "My neighbor is a retired soldier.",
          bn: "আমার প্রতিবেশী একজন অবসরপ্রাপ্ত সৈনিক।",
          slotValues: {
            PERSON: "My neighbor",
            "PROFESSION/ROLE": "retired soldier",
          },
          topicArea: "relationships",
        },
        {
          en: "He is a student at Dhaka University.",
          bn: "সে ঢাকা বিশ্ববিদ্যালয়ের একজন ছাত্র।",
          slotValues: {
            PERSON: "He",
            "PROFESSION/ROLE": "student at Dhaka University",
          },
          topicArea: "education",
        },
        {
          en: "My cousin is a pilot.",
          bn: "আমার কাজিন একজন পাইলট।",
          slotValues: { PERSON: "My cousin", "PROFESSION/ROLE": "pilot" },
          topicArea: "travel",
        },
        {
          en: "She is a good listener.",
          bn: "সে একজন ভালো শ্রোতা।",
          slotValues: { PERSON: "She", "PROFESSION/ROLE": "good listener" },
          topicArea: "relationships",
        },
        {
          en: "Nadia is an excellent swimmer.",
          bn: "নাদিয়া একজন চমৎকার সাঁতারু।",
          slotValues: {
            PERSON: "Nadia",
            "PROFESSION/ROLE": "excellent swimmer",
          },
          topicArea: "health",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "English requires an article before professions: 'She is a doctor' (not 'She is doctor'). Bangla doesn't need this.",
      usageNote_bn:
        "ইংরেজিতে পেশার আগে আর্টিকেল দরকার: 'She is a doctor' ('She is doctor' নয়)। বাংলায় এটা লাগে না।",
    },
  ],
};
