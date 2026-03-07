import { PatternCategory } from "@/types/pattern";

export const categoryB1: PatternCategory = {
  id: "B1",
  slug: "describing-people",
  name: "Describing People (Be/Have/Feel)",
  name_bn: "মানুষ বর্ণনা করা (হওয়া/থাকা/অনুভব করা)",
  description:
    "Learn how to describe people using basic verbs like be, have, feel, look, and seem.",
  description_bn:
    "be, have, feel, look, এবং seem-এর মতো মৌলিক ক্রিয়া ব্যবহার করে মানুষ বর্ণনা করতে শিখুন।",
  icon: "👤",
  group: "B",
  groupName: "Describing People, Things & Situations",
  groupName_bn: "মানুষ, জিনিস এবং পরিস্থিতি বর্ণনা",
  difficulty: "beginner",
  patterns: [
    {
      id: "B1.1",
      formula: "[PERSON] is [DESCRIPTION]",
      formula_bn: "[ব্যক্তি] [বর্ণনা]",
      patternName: "Describing with 'Be'",
      patternName_bn: "'Be' দিয়ে বর্ণনা",
      slots: [
        {
          name: "PERSON",
          description: "A person or pronoun (he, she, my friend, etc.)",
          description_bn: "একজন ব্যক্তি বা সর্বনাম (সে, আমার বন্ধু, ইত্যাদি)",
          acceptedTypes: ["person"],
          examples: ["He", "She", "My teacher"],
        },
        {
          name: "DESCRIPTION",
          description: "An adjective or descriptive phrase",
          description_bn: "একটি বিশেষণ বা বর্ণনামূলক পদবন্ধ",
          acceptedTypes: ["adjective", "description"],
          examples: ["tall", "very kind", "from Bangladesh"],
        },
      ],
      examples: [
        {
          en: "He is tall.",
          bn: "সে লম্বা।",
          slotValues: { PERSON: "He", DESCRIPTION: "tall" },
          topicArea: "daily_life",
        },
        {
          en: "She is very intelligent.",
          bn: "সে খুব বুদ্ধিমান।",
          slotValues: { PERSON: "She", DESCRIPTION: "very intelligent" },
          topicArea: "education",
        },
        {
          en: "My boss is strict but fair.",
          bn: "আমার বস কঠোর কিন্তু ন্যায়পরায়ণ।",
          slotValues: { PERSON: "My boss", DESCRIPTION: "strict but fair" },
          topicArea: "work",
        },
        {
          en: "My mother is the kindest person I know.",
          bn: "আমার মা আমার চেনা সবচেয়ে দয়ালু মানুষ।",
          slotValues: {
            PERSON: "My mother",
            DESCRIPTION: "the kindest person I know",
          },
          topicArea: "relationships",
        },
        {
          en: "The doctor is very experienced.",
          bn: "ডাক্তার খুব অভিজ্ঞ।",
          slotValues: {
            PERSON: "The doctor",
            DESCRIPTION: "very experienced",
          },
          topicArea: "health",
        },
        {
          en: "He is from Dhaka.",
          bn: "সে ঢাকা থেকে।",
          slotValues: { PERSON: "He", DESCRIPTION: "from Dhaka" },
          topicArea: "travel",
        },
        {
          en: "My sister is really creative.",
          bn: "আমার বোন সত্যিই সৃজনশীল।",
          slotValues: { PERSON: "My sister", DESCRIPTION: "really creative" },
          topicArea: "relationships",
        },
        {
          en: "The new student is very shy.",
          bn: "নতুন ছাত্রটি খুব লাজুক।",
          slotValues: {
            PERSON: "The new student",
            DESCRIPTION: "very shy",
          },
          topicArea: "education",
        },
        {
          en: "She is always punctual.",
          bn: "সে সবসময় সময়নিষ্ঠ।",
          slotValues: { PERSON: "She", DESCRIPTION: "always punctual" },
          topicArea: "work",
        },
        {
          en: "My grandfather is ninety years old.",
          bn: "আমার দাদার বয়স নব্বই বছর।",
          slotValues: {
            PERSON: "My grandfather",
            DESCRIPTION: "ninety years old",
          },
          topicArea: "relationships",
        },
        {
          en: "The shopkeeper is very friendly.",
          bn: "দোকানদার খুব বন্ধুভাবাপন্ন।",
          slotValues: {
            PERSON: "The shopkeeper",
            DESCRIPTION: "very friendly",
          },
          topicArea: "shopping",
        },
        {
          en: "He is good at cooking.",
          bn: "সে রান্নায় ভালো।",
          slotValues: { PERSON: "He", DESCRIPTION: "good at cooking" },
          topicArea: "food",
        },
        {
          en: "My neighbor is quite helpful.",
          bn: "আমার প্রতিবেশী বেশ সাহায্যকারী।",
          slotValues: { PERSON: "My neighbor", DESCRIPTION: "quite helpful" },
          topicArea: "daily_life",
        },
        {
          en: "The tour guide is very knowledgeable.",
          bn: "ট্যুর গাইড খুব জ্ঞানী।",
          slotValues: {
            PERSON: "The tour guide",
            DESCRIPTION: "very knowledgeable",
          },
          topicArea: "travel",
        },
        {
          en: "She is the best player on the team.",
          bn: "সে দলের সেরা খেলোয়াড়।",
          slotValues: {
            PERSON: "She",
            DESCRIPTION: "the best player on the team",
          },
          topicArea: "daily_life",
        },
      ],
      formality: "casual",
      difficulty: "beginner",
      usageNote:
        "The most basic way to describe someone. Use 'is' for singular and 'are' for plural subjects.",
      usageNote_bn:
        "কাউকে বর্ণনা করার সবচেয়ে মৌলিক উপায়। একবচনের জন্য 'is' এবং বহুবচনের জন্য 'are' ব্যবহার করুন।",
      combinableWith: ["B1.2", "B1.3"],
      banglaStructureMap:
        "[PERSON] (কর্তা) + [DESCRIPTION] (বিশেষণ/বর্ণনা)",
    },
    {
      id: "B1.2",
      formula: "[PERSON] has [THING]",
      formula_bn: "[ব্যক্তির] [জিনিস] আছে",
      patternName: "Describing Possession",
      patternName_bn: "অধিকার বর্ণনা",
      slots: [
        {
          name: "PERSON",
          description: "A person or pronoun",
          description_bn: "একজন ব্যক্তি বা সর্বনাম",
          acceptedTypes: ["person"],
          examples: ["He", "She", "My brother"],
        },
        {
          name: "THING",
          description: "A noun or noun phrase describing what the person has",
          description_bn:
            "একটি বিশেষ্য বা বিশেষ্য পদবন্ধ যা ব্যক্তির কাছে আছে",
          acceptedTypes: ["noun"],
          examples: ["blue eyes", "a car", "long hair"],
        },
      ],
      examples: [
        {
          en: "She has beautiful eyes.",
          bn: "তার সুন্দর চোখ আছে।",
          slotValues: { PERSON: "She", THING: "beautiful eyes" },
          topicArea: "daily_life",
        },
        {
          en: "He has a lot of experience.",
          bn: "তার অনেক অভিজ্ঞতা আছে।",
          slotValues: { PERSON: "He", THING: "a lot of experience" },
          topicArea: "work",
        },
        {
          en: "My father has a big library.",
          bn: "আমার বাবার একটি বড় লাইব্রেরি আছে।",
          slotValues: { PERSON: "My father", THING: "a big library" },
          topicArea: "education",
        },
        {
          en: "She has a warm smile.",
          bn: "তার একটি উষ্ণ হাসি আছে।",
          slotValues: { PERSON: "She", THING: "a warm smile" },
          topicArea: "relationships",
        },
        {
          en: "He has two children.",
          bn: "তার দুটি সন্তান আছে।",
          slotValues: { PERSON: "He", THING: "two children" },
          topicArea: "relationships",
        },
        {
          en: "The patient has a high fever.",
          bn: "রোগীর প্রচণ্ড জ্বর আছে।",
          slotValues: { PERSON: "The patient", THING: "a high fever" },
          topicArea: "health",
        },
        {
          en: "My friend has a great sense of humor.",
          bn: "আমার বন্ধুর দারুণ রসবোধ আছে।",
          slotValues: {
            PERSON: "My friend",
            THING: "a great sense of humor",
          },
          topicArea: "relationships",
        },
        {
          en: "She has a degree in engineering.",
          bn: "তার ইঞ্জিনিয়ারিংয়ে ডিগ্রি আছে।",
          slotValues: {
            PERSON: "She",
            THING: "a degree in engineering",
          },
          topicArea: "education",
        },
        {
          en: "He has curly hair.",
          bn: "তার কোঁকড়া চুল আছে।",
          slotValues: { PERSON: "He", THING: "curly hair" },
          topicArea: "daily_life",
        },
        {
          en: "My colleague has a new car.",
          bn: "আমার সহকর্মীর একটি নতুন গাড়ি আছে।",
          slotValues: { PERSON: "My colleague", THING: "a new car" },
          topicArea: "work",
        },
        {
          en: "She has a talent for singing.",
          bn: "তার গান গাওয়ার প্রতিভা আছে।",
          slotValues: { PERSON: "She", THING: "a talent for singing" },
          topicArea: "daily_life",
        },
        {
          en: "He has a strong accent.",
          bn: "তার একটি জোরালো উচ্চারণভঙ্গি আছে।",
          slotValues: { PERSON: "He", THING: "a strong accent" },
          topicArea: "education",
        },
        {
          en: "The chef has years of training.",
          bn: "শেফের বছরের পর বছর প্রশিক্ষণ আছে।",
          slotValues: { PERSON: "The chef", THING: "years of training" },
          topicArea: "food",
        },
        {
          en: "She has a passport from two countries.",
          bn: "তার দুটি দেশের পাসপোর্ট আছে।",
          slotValues: {
            PERSON: "She",
            THING: "a passport from two countries",
          },
          topicArea: "travel",
        },
        {
          en: "My uncle has a shop in the market.",
          bn: "আমার চাচার বাজারে একটি দোকান আছে।",
          slotValues: {
            PERSON: "My uncle",
            THING: "a shop in the market",
          },
          topicArea: "shopping",
        },
      ],
      formality: "casual",
      difficulty: "beginner",
      usageNote:
        "'Has' is used for singular third person (he/she/it). Use 'have' for I/you/we/they.",
      usageNote_bn:
        "'Has' একবচন তৃতীয় পুরুষের জন্য (he/she/it) ব্যবহৃত হয়। I/you/we/they-এর জন্য 'have' ব্যবহার করুন।",
      combinableWith: ["B1.1"],
      banglaStructureMap:
        "[PERSON]-র (কর্তা + বিভক্তি) + [THING] (কর্ম) + আছে (ক্রিয়া)",
    },
    {
      id: "B1.3",
      formula: "[PERSON] feels [FEELING]",
      formula_bn: "[ব্যক্তি] [অনুভূতি] অনুভব করে",
      patternName: "Describing Feelings",
      patternName_bn: "অনুভূতি বর্ণনা",
      slots: [
        {
          name: "PERSON",
          description: "A person or pronoun",
          description_bn: "একজন ব্যক্তি বা সর্বনাম",
          acceptedTypes: ["person"],
          examples: ["I", "She", "My brother"],
        },
        {
          name: "FEELING",
          description: "An adjective describing an emotional or physical state",
          description_bn:
            "একটি বিশেষণ যা মানসিক বা শারীরিক অবস্থা বর্ণনা করে",
          acceptedTypes: ["feeling", "adjective"],
          examples: ["happy", "tired", "nervous"],
        },
      ],
      examples: [
        {
          en: "I feel happy today.",
          bn: "আজ আমি খুশি অনুভব করছি।",
          slotValues: { PERSON: "I", FEELING: "happy today" },
          topicArea: "daily_life",
        },
        {
          en: "She feels tired after work.",
          bn: "কাজের পরে সে ক্লান্ত অনুভব করে।",
          slotValues: { PERSON: "She", FEELING: "tired after work" },
          topicArea: "work",
        },
        {
          en: "He feels nervous about the exam.",
          bn: "পরীক্ষা নিয়ে সে উদ্বিগ্ন অনুভব করছে।",
          slotValues: {
            PERSON: "He",
            FEELING: "nervous about the exam",
          },
          topicArea: "education",
        },
        {
          en: "I feel sick.",
          bn: "আমি অসুস্থ অনুভব করছি।",
          slotValues: { PERSON: "I", FEELING: "sick" },
          topicArea: "health",
        },
        {
          en: "She feels lonely without her family.",
          bn: "পরিবার ছাড়া সে একা অনুভব করে।",
          slotValues: {
            PERSON: "She",
            FEELING: "lonely without her family",
          },
          topicArea: "relationships",
        },
        {
          en: "He feels confident about the presentation.",
          bn: "উপস্থাপনা নিয়ে সে আত্মবিশ্বাসী অনুভব করছে।",
          slotValues: {
            PERSON: "He",
            FEELING: "confident about the presentation",
          },
          topicArea: "work",
        },
        {
          en: "I feel grateful for your help.",
          bn: "তোমার সাহায্যের জন্য আমি কৃতজ্ঞ অনুভব করছি।",
          slotValues: {
            PERSON: "I",
            FEELING: "grateful for your help",
          },
          topicArea: "relationships",
        },
        {
          en: "She feels excited about the trip.",
          bn: "ভ্রমণ নিয়ে সে উত্তেজিত অনুভব করছে।",
          slotValues: {
            PERSON: "She",
            FEELING: "excited about the trip",
          },
          topicArea: "travel",
        },
        {
          en: "He feels hungry.",
          bn: "সে ক্ষুধার্ত অনুভব করছে।",
          slotValues: { PERSON: "He", FEELING: "hungry" },
          topicArea: "food",
        },
        {
          en: "I feel overwhelmed with all this work.",
          bn: "এত কাজে আমি হাঁপিয়ে যাচ্ছি।",
          slotValues: {
            PERSON: "I",
            FEELING: "overwhelmed with all this work",
          },
          topicArea: "work",
        },
        {
          en: "She feels proud of her son.",
          bn: "সে তার ছেলেকে নিয়ে গর্বিত অনুভব করে।",
          slotValues: { PERSON: "She", FEELING: "proud of her son" },
          topicArea: "relationships",
        },
        {
          en: "He feels much better now.",
          bn: "সে এখন অনেক ভালো অনুভব করছে।",
          slotValues: { PERSON: "He", FEELING: "much better now" },
          topicArea: "health",
        },
        {
          en: "I feel lost in this new city.",
          bn: "এই নতুন শহরে আমি হারিয়ে যাওয়া অনুভব করছি।",
          slotValues: {
            PERSON: "I",
            FEELING: "lost in this new city",
          },
          topicArea: "travel",
        },
        {
          en: "She feels disappointed with the result.",
          bn: "ফলাফলে সে হতাশ অনুভব করছে।",
          slotValues: {
            PERSON: "She",
            FEELING: "disappointed with the result",
          },
          topicArea: "education",
        },
        {
          en: "I feel full after that meal.",
          bn: "ওই খাবারের পরে আমি পেট ভরা অনুভব করছি।",
          slotValues: {
            PERSON: "I",
            FEELING: "full after that meal",
          },
          topicArea: "food",
        },
      ],
      formality: "casual",
      difficulty: "beginner",
      usageNote:
        "'Feel' describes internal states. It can be used for both emotions and physical sensations.",
      usageNote_bn:
        "'Feel' অভ্যন্তরীণ অবস্থা বর্ণনা করে। এটি আবেগ এবং শারীরিক সংবেদন উভয়ের জন্য ব্যবহার করা যায়।",
      combinableWith: ["B1.4", "B1.5"],
      banglaStructureMap:
        "[PERSON] (কর্তা) + [FEELING] (বিশেষণ) + অনুভব করে (ক্রিয়া)",
    },
    {
      id: "B1.4",
      formula: "[PERSON] looks [DESCRIPTION]",
      formula_bn: "[ব্যক্তিকে] [বর্ণনা] দেখায়/লাগে",
      patternName: "Describing Appearance",
      patternName_bn: "চেহারা বর্ণনা",
      slots: [
        {
          name: "PERSON",
          description: "A person or pronoun",
          description_bn: "একজন ব্যক্তি বা সর্বনাম",
          acceptedTypes: ["person"],
          examples: ["He", "She", "You"],
        },
        {
          name: "DESCRIPTION",
          description:
            "An adjective describing how the person appears visually",
          description_bn:
            "একটি বিশেষণ যা ব্যক্তিকে দেখতে কেমন লাগে তা বর্ণনা করে",
          acceptedTypes: ["adjective", "description"],
          examples: ["tired", "beautiful", "young"],
        },
      ],
      examples: [
        {
          en: "You look tired.",
          bn: "তোমাকে ক্লান্ত দেখাচ্ছে।",
          slotValues: { PERSON: "You", DESCRIPTION: "tired" },
          topicArea: "daily_life",
        },
        {
          en: "She looks beautiful in that dress.",
          bn: "ওই পোশাকে তাকে সুন্দর দেখাচ্ছে।",
          slotValues: {
            PERSON: "She",
            DESCRIPTION: "beautiful in that dress",
          },
          topicArea: "shopping",
        },
        {
          en: "He looks much younger than his age.",
          bn: "তাকে তার বয়সের চেয়ে অনেক কম বয়সী দেখায়।",
          slotValues: {
            PERSON: "He",
            DESCRIPTION: "much younger than his age",
          },
          topicArea: "daily_life",
        },
        {
          en: "You look happy today.",
          bn: "তোমাকে আজ খুশি দেখাচ্ছে।",
          slotValues: { PERSON: "You", DESCRIPTION: "happy today" },
          topicArea: "daily_life",
        },
        {
          en: "She looks stressed.",
          bn: "তাকে চাপে থাকা মনে হচ্ছে।",
          slotValues: { PERSON: "She", DESCRIPTION: "stressed" },
          topicArea: "work",
        },
        {
          en: "He looks ready for the interview.",
          bn: "তাকে সাক্ষাৎকারের জন্য প্রস্তুত দেখাচ্ছে।",
          slotValues: {
            PERSON: "He",
            DESCRIPTION: "ready for the interview",
          },
          topicArea: "work",
        },
        {
          en: "The patient looks pale.",
          bn: "রোগীকে ফ্যাকাসে দেখাচ্ছে।",
          slotValues: { PERSON: "The patient", DESCRIPTION: "pale" },
          topicArea: "health",
        },
        {
          en: "My mother looks worried.",
          bn: "আমার মাকে চিন্তিত দেখাচ্ছে।",
          slotValues: { PERSON: "My mother", DESCRIPTION: "worried" },
          topicArea: "relationships",
        },
        {
          en: "You look great in blue.",
          bn: "নীলে তোমাকে দারুণ দেখাচ্ছে।",
          slotValues: { PERSON: "You", DESCRIPTION: "great in blue" },
          topicArea: "shopping",
        },
        {
          en: "She looks confident on stage.",
          bn: "মঞ্চে তাকে আত্মবিশ্বাসী দেখায়।",
          slotValues: {
            PERSON: "She",
            DESCRIPTION: "confident on stage",
          },
          topicArea: "education",
        },
        {
          en: "He looks like his father.",
          bn: "তাকে তার বাবার মতো দেখতে।",
          slotValues: { PERSON: "He", DESCRIPTION: "like his father" },
          topicArea: "relationships",
        },
        {
          en: "You look different with short hair.",
          bn: "ছোট চুলে তোমাকে অন্যরকম দেখাচ্ছে।",
          slotValues: {
            PERSON: "You",
            DESCRIPTION: "different with short hair",
          },
          topicArea: "daily_life",
        },
        {
          en: "She looks exhausted after the flight.",
          bn: "ফ্লাইটের পরে তাকে ক্লান্ত দেখাচ্ছে।",
          slotValues: {
            PERSON: "She",
            DESCRIPTION: "exhausted after the flight",
          },
          topicArea: "travel",
        },
        {
          en: "He looks healthy these days.",
          bn: "ইদানীং তাকে সুস্থ দেখাচ্ছে।",
          slotValues: {
            PERSON: "He",
            DESCRIPTION: "healthy these days",
          },
          topicArea: "health",
        },
        {
          en: "The children look excited about the picnic.",
          bn: "বাচ্চাদের পিকনিক নিয়ে উত্তেজিত দেখাচ্ছে।",
          slotValues: {
            PERSON: "The children",
            DESCRIPTION: "excited about the picnic",
          },
          topicArea: "daily_life",
        },
      ],
      formality: "casual",
      difficulty: "beginner",
      usageNote:
        "'Looks' describes outward appearance. It's based on visual observation, not internal feeling.",
      usageNote_bn:
        "'Looks' বাহ্যিক চেহারা বর্ণনা করে। এটি দৃশ্যমান পর্যবেক্ষণের উপর ভিত্তি করে, অভ্যন্তরীণ অনুভূতি নয়।",
      combinableWith: ["B1.3", "B1.5"],
      banglaStructureMap:
        "[PERSON]-কে (কর্তা + বিভক্তি) + [DESCRIPTION] (বিশেষণ) + দেখায় (ক্রিয়া)",
    },
    {
      id: "B1.5",
      formula: "[PERSON] seems [DESCRIPTION]",
      formula_bn: "[ব্যক্তিকে] [বর্ণনা] মনে হয়",
      patternName: "Describing Impressions",
      patternName_bn: "ধারণা বর্ণনা",
      slots: [
        {
          name: "PERSON",
          description: "A person or pronoun",
          description_bn: "একজন ব্যক্তি বা সর্বনাম",
          acceptedTypes: ["person"],
          examples: ["He", "She", "The manager"],
        },
        {
          name: "DESCRIPTION",
          description:
            "An adjective or phrase describing an impression or perception",
          description_bn:
            "একটি বিশেষণ বা পদবন্ধ যা একটি ধারণা বা উপলব্ধি বর্ণনা করে",
          acceptedTypes: ["adjective", "description"],
          examples: ["nice", "upset", "interested"],
        },
      ],
      examples: [
        {
          en: "He seems nice.",
          bn: "তাকে ভালো মনে হয়।",
          slotValues: { PERSON: "He", DESCRIPTION: "nice" },
          topicArea: "daily_life",
        },
        {
          en: "She seems upset about something.",
          bn: "কোনো কিছু নিয়ে তাকে বিচলিত মনে হচ্ছে।",
          slotValues: {
            PERSON: "She",
            DESCRIPTION: "upset about something",
          },
          topicArea: "relationships",
        },
        {
          en: "The manager seems busy today.",
          bn: "ম্যানেজারকে আজ ব্যস্ত মনে হচ্ছে।",
          slotValues: {
            PERSON: "The manager",
            DESCRIPTION: "busy today",
          },
          topicArea: "work",
        },
        {
          en: "He seems interested in the topic.",
          bn: "বিষয়টিতে তাকে আগ্রহী মনে হচ্ছে।",
          slotValues: {
            PERSON: "He",
            DESCRIPTION: "interested in the topic",
          },
          topicArea: "education",
        },
        {
          en: "She seems very talented.",
          bn: "তাকে খুব প্রতিভাবান মনে হয়।",
          slotValues: { PERSON: "She", DESCRIPTION: "very talented" },
          topicArea: "daily_life",
        },
        {
          en: "The patient seems uncomfortable.",
          bn: "রোগীকে অস্বস্তিতে মনে হচ্ছে।",
          slotValues: {
            PERSON: "The patient",
            DESCRIPTION: "uncomfortable",
          },
          topicArea: "health",
        },
        {
          en: "He seems reluctant to join.",
          bn: "তাকে যোগ দিতে অনিচ্ছুক মনে হচ্ছে।",
          slotValues: {
            PERSON: "He",
            DESCRIPTION: "reluctant to join",
          },
          topicArea: "work",
        },
        {
          en: "She seems happy with her new job.",
          bn: "তাকে তার নতুন চাকরিতে খুশি মনে হচ্ছে।",
          slotValues: {
            PERSON: "She",
            DESCRIPTION: "happy with her new job",
          },
          topicArea: "work",
        },
        {
          en: "You seem confused.",
          bn: "তোমাকে বিভ্রান্ত মনে হচ্ছে।",
          slotValues: { PERSON: "You", DESCRIPTION: "confused" },
          topicArea: "education",
        },
        {
          en: "He seems trustworthy.",
          bn: "তাকে বিশ্বাসযোগ্য মনে হয়।",
          slotValues: { PERSON: "He", DESCRIPTION: "trustworthy" },
          topicArea: "relationships",
        },
        {
          en: "The driver seems lost.",
          bn: "ড্রাইভারকে পথ হারিয়ে ফেলা মনে হচ্ছে।",
          slotValues: { PERSON: "The driver", DESCRIPTION: "lost" },
          topicArea: "travel",
        },
        {
          en: "She seems pleased with the food.",
          bn: "তাকে খাবার নিয়ে সন্তুষ্ট মনে হচ্ছে।",
          slotValues: {
            PERSON: "She",
            DESCRIPTION: "pleased with the food",
          },
          topicArea: "food",
        },
        {
          en: "He seems well-prepared.",
          bn: "তাকে ভালোভাবে প্রস্তুত মনে হচ্ছে।",
          slotValues: { PERSON: "He", DESCRIPTION: "well-prepared" },
          topicArea: "education",
        },
        {
          en: "The seller seems honest.",
          bn: "বিক্রেতাকে সৎ মনে হচ্ছে।",
          slotValues: { PERSON: "The seller", DESCRIPTION: "honest" },
          topicArea: "shopping",
        },
        {
          en: "She seems to be in a hurry.",
          bn: "তাকে তাড়াহুড়ায় আছে মনে হচ্ছে।",
          slotValues: {
            PERSON: "She",
            DESCRIPTION: "to be in a hurry",
          },
          topicArea: "daily_life",
        },
      ],
      formality: "polite",
      difficulty: "beginner",
      usageNote:
        "'Seems' implies uncertainty—you're describing your impression, not a definite fact.",
      usageNote_bn:
        "'Seems' অনিশ্চয়তা বোঝায়—আপনি একটি নিশ্চিত তথ্য নয়, বরং আপনার ধারণা বর্ণনা করছেন।",
      combinableWith: ["B1.1", "B1.4"],
      banglaStructureMap:
        "[PERSON]-কে (কর্তা + বিভক্তি) + [DESCRIPTION] (বিশেষণ) + মনে হয় (ক্রিয়া)",
    },
    {
      id: "B1.6",
      formula: "[PERSON] comes across as [DESCRIPTION]",
      formula_bn: "[ব্যক্তি]-কে [বর্ণনা] মনে হয়",
      patternName: "First Impression (Comes Across As)",
      patternName_bn: "প্রথম ধারণা (মনে হয়)",
      slots: [
        {
          name: "PERSON",
          description: "A person or pronoun",
          description_bn: "একজন ব্যক্তি বা সর্বনাম",
          acceptedTypes: ["person"],
          examples: ["He", "She", "They"],
        },
        {
          name: "DESCRIPTION",
          description: "An adjective or descriptive phrase about the impression",
          description_bn: "ধারণা সম্পর্কে একটি বিশেষণ বা বর্ণনামূলক পদবন্ধ",
          acceptedTypes: ["adjective", "description"],
          examples: ["confident", "shy", "very professional"],
        },
      ],
      examples: [
        {
          en: "He comes across as confident.",
          bn: "তাকে আত্মবিশ্বাসী মনে হয়।",
          slotValues: { PERSON: "He", DESCRIPTION: "confident" },
          topicArea: "daily_life",
        },
        {
          en: "She comes across as shy at first.",
          bn: "প্রথমে তাকে লাজুক মনে হয়।",
          slotValues: { PERSON: "She", DESCRIPTION: "shy at first" },
          topicArea: "relationships",
        },
        {
          en: "They come across as very professional.",
          bn: "তাদের খুব পেশাদার মনে হয়।",
          slotValues: { PERSON: "They", DESCRIPTION: "very professional" },
          topicArea: "work",
        },
        {
          en: "You come across as friendly.",
          bn: "তোমাকে বন্ধুভাবাপন্ন মনে হয়।",
          slotValues: { PERSON: "You", DESCRIPTION: "friendly" },
          topicArea: "relationships",
        },
        {
          en: "He comes across as arrogant, but he's actually kind.",
          bn: "তাকে অহংকারী মনে হয়, কিন্তু সে আসলে দয়ালু।",
          slotValues: { PERSON: "He", DESCRIPTION: "arrogant" },
          topicArea: "relationships",
        },
        {
          en: "She comes across as very knowledgeable in meetings.",
          bn: "মিটিংয়ে তাকে খুব জ্ঞানী মনে হয়।",
          slotValues: { PERSON: "She", DESCRIPTION: "very knowledgeable" },
          topicArea: "work",
        },
        {
          en: "The new teacher comes across as strict.",
          bn: "নতুন শিক্ষককে কঠোর মনে হয়।",
          slotValues: { PERSON: "The new teacher", DESCRIPTION: "strict" },
          topicArea: "education",
        },
        {
          en: "He comes across as someone you can trust.",
          bn: "তাকে বিশ্বাসযোগ্য কেউ মনে হয়।",
          slotValues: { PERSON: "He", DESCRIPTION: "someone you can trust" },
          topicArea: "daily_life",
        },
        {
          en: "She comes across as calm under pressure.",
          bn: "চাপের মধ্যে তাকে শান্ত মনে হয়।",
          slotValues: { PERSON: "She", DESCRIPTION: "calm under pressure" },
          topicArea: "work",
        },
        {
          en: "The doctor comes across as very caring.",
          bn: "ডাক্তারকে খুব যত্নশীল মনে হয়।",
          slotValues: { PERSON: "The doctor", DESCRIPTION: "very caring" },
          topicArea: "health",
        },
        {
          en: "He comes across as a bit rude sometimes.",
          bn: "মাঝে মাঝে তাকে কিছুটা অভদ্র মনে হয়।",
          slotValues: { PERSON: "He", DESCRIPTION: "a bit rude sometimes" },
          topicArea: "daily_life",
        },
        {
          en: "She comes across as enthusiastic about everything.",
          bn: "তাকে সবকিছু নিয়ে উৎসাহী মনে হয়।",
          slotValues: { PERSON: "She", DESCRIPTION: "enthusiastic about everything" },
          topicArea: "daily_life",
        },
        {
          en: "The shopkeeper comes across as honest.",
          bn: "দোকানদারকে সৎ মনে হয়।",
          slotValues: { PERSON: "The shopkeeper", DESCRIPTION: "honest" },
          topicArea: "shopping",
        },
        {
          en: "He comes across as older than he actually is.",
          bn: "তাকে তার প্রকৃত বয়সের চেয়ে বেশি বয়সী মনে হয়।",
          slotValues: { PERSON: "He", DESCRIPTION: "older than he actually is" },
          topicArea: "daily_life",
        },
        {
          en: "The tour guide comes across as passionate about history.",
          bn: "ট্যুর গাইডকে ইতিহাস নিয়ে আবেগী মনে হয়।",
          slotValues: { PERSON: "The tour guide", DESCRIPTION: "passionate about history" },
          topicArea: "travel",
        },
      ],
      formality: "casual",
      difficulty: "beginner",
      usageNote:
        "'Comes across as' describes the impression someone gives to others. It may not reflect their true personality.",
      usageNote_bn:
        "'Comes across as' অন্যদের কাছে কেউ যে ধারণা দেয় তা বর্ণনা করে। এটি তাদের প্রকৃত ব্যক্তিত্ব প্রতিফলিত নাও করতে পারে।",
      combinableWith: ["B1.4", "B1.5"],
      banglaStructureMap:
        "[PERSON]-কে (কর্তা + বিভক্তি) + [DESCRIPTION] (বিশেষণ) + মনে হয় (ক্রিয়া)",
    },
  ],
};
