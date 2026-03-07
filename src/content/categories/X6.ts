import { PatternCategory } from "@/types/pattern";

export const categoryX6: PatternCategory = {
  id: "X6",
  slug: "pronoun-mistakes",
  name: "Pronoun Mistakes",
  name_bn: "সর্বনাম ভুল",
  description:
    "Fix pronoun errors. Bangla uses 'সে' for both he and she, causing gender confusion. Also fix subject/object pronoun mixing.",
  description_bn:
    "সর্বনামের ভুল ঠিক করুন। বাংলায় 'সে' পুরুষ ও মহিলা উভয়ের জন্য ব্যবহার হয়, যা লিঙ্গ বিভ্রান্তি সৃষ্টি করে।",
  icon: "👤",
  group: "X",
  groupName: "Common Mistakes by Bangla Speakers",
  groupName_bn: "বাংলা ভাষীদের সাধারণ ভুল",
  difficulty: "beginner",
  patterns: [
    {
      id: "X6.1",
      formula: "[HE/SHE] [VERB]",
      formula_bn: "সে [VERB] করে → [HE/SHE] [VERB]",
      patternName: "He vs She (Gender-Specific Pronouns)",
      patternName_bn: "He বনাম She (লিঙ্গ-নির্দিষ্ট সর্বনাম)",
      slots: [
        {
          name: "HE/SHE",
          description: "'He' for male, 'She' for female",
          description_bn: "পুরুষের জন্য 'He', মহিলার জন্য 'She'",
          acceptedTypes: ["person"],
          examples: ["He", "She"],
        },
        {
          name: "VERB",
          description: "The action or state being described",
          description_bn: "যে কাজ বা অবস্থা বর্ণনা করা হচ্ছে",
          acceptedTypes: ["verb", "verb_phrase"],
          examples: ["is a doctor", "works here", "likes cooking"],
        },
      ],
      examples: [
        {
          en: "He is my brother.",
          bn: "সে আমার ভাই।",
          slotValues: { "HE/SHE": "He", VERB: "is my brother" },
          topicArea: "relationships",
        },
        {
          en: "She is my sister.",
          bn: "সে আমার বোন।",
          slotValues: { "HE/SHE": "She", VERB: "is my sister" },
          topicArea: "relationships",
        },
        {
          en: "He works at a bank.",
          bn: "সে একটি ব্যাংকে কাজ করে।",
          slotValues: { "HE/SHE": "He", VERB: "works at a bank" },
          topicArea: "work",
        },
        {
          en: "She works at a hospital.",
          bn: "সে একটি হাসপাতালে কাজ করে।",
          slotValues: { "HE/SHE": "She", VERB: "works at a hospital" },
          topicArea: "work",
        },
        {
          en: "He is a good student.",
          bn: "সে একজন ভালো ছাত্র।",
          slotValues: { "HE/SHE": "He", VERB: "is a good student" },
          topicArea: "education",
        },
        {
          en: "She is a good student.",
          bn: "সে একজন ভালো ছাত্রী।",
          slotValues: { "HE/SHE": "She", VERB: "is a good student" },
          topicArea: "education",
        },
        {
          en: "He likes playing cricket.",
          bn: "সে ক্রিকেট খেলতে পছন্দ করে।",
          slotValues: { "HE/SHE": "He", VERB: "likes playing cricket" },
          topicArea: "daily_life",
        },
        {
          en: "She likes cooking biryani.",
          bn: "সে বিরিয়ানি রান্না করতে পছন্দ করে।",
          slotValues: { "HE/SHE": "She", VERB: "likes cooking biryani" },
          topicArea: "food",
        },
        {
          en: "He is my father.",
          bn: "তিনি আমার বাবা।",
          slotValues: { "HE/SHE": "He", VERB: "is my father" },
          topicArea: "relationships",
        },
        {
          en: "She is my mother.",
          bn: "তিনি আমার মা।",
          slotValues: { "HE/SHE": "She", VERB: "is my mother" },
          topicArea: "relationships",
        },
        {
          en: "He went to the market.",
          bn: "সে বাজারে গিয়েছিল।",
          slotValues: { "HE/SHE": "He", VERB: "went to the market" },
          topicArea: "shopping",
        },
        {
          en: "She went to the doctor.",
          bn: "সে ডাক্তারের কাছে গিয়েছিল।",
          slotValues: { "HE/SHE": "She", VERB: "went to the doctor" },
          topicArea: "health",
        },
        {
          en: "He is traveling to Chittagong.",
          bn: "সে চট্টগ্রাম ভ্রমণ করছে।",
          slotValues: { "HE/SHE": "He", VERB: "is traveling to Chittagong" },
          topicArea: "travel",
        },
        {
          en: "She is reading a novel.",
          bn: "সে একটি উপন্যাস পড়ছে।",
          slotValues: { "HE/SHE": "She", VERB: "is reading a novel" },
          topicArea: "education",
        },
        {
          en: "He bought a new shirt.",
          bn: "সে একটি নতুন শার্ট কিনেছিল।",
          slotValues: { "HE/SHE": "He", VERB: "bought a new shirt" },
          topicArea: "shopping",
        },
      ],
      formality: "casual",
      difficulty: "beginner",
      usageNote:
        "Bangla uses 'সে' for both males and females. In English, you MUST say 'he' for a man/boy and 'she' for a woman/girl. Getting this wrong is one of the most common mistakes for Bangla speakers.",
      usageNote_bn:
        "বাংলায় পুরুষ ও মহিলা উভয়ের জন্য 'সে' ব্যবহার হয়। ইংরেজিতে পুরুষ/ছেলের জন্য অবশ্যই 'he' এবং মহিলা/মেয়ের জন্য 'she' বলতে হবে। বাংলা ভাষীদের জন্য এটি সবচেয়ে সাধারণ ভুলগুলোর একটি।",
      banglaStructureMap:
        "সে (পুরুষ/মহিলা) → He (পুরুষ) / She (মহিলা)",
    },
    {
      id: "X6.2",
      formula: "[SUBJECT PRONOUN] [VERB] / [VERB] [OBJECT PRONOUN]",
      formula_bn: "[SUBJECT PRONOUN] [VERB] / [VERB] [OBJECT PRONOUN]",
      patternName: "Subject vs Object Pronouns",
      patternName_bn: "কর্তা বনাম কর্ম সর্বনাম",
      slots: [
        {
          name: "SUBJECT PRONOUN",
          description: "I, he, she, we, they (used as the doer of the action)",
          description_bn:
            "I, he, she, we, they (কাজের কর্তা হিসেবে ব্যবহৃত)",
          acceptedTypes: ["person"],
          examples: ["I", "He", "She", "We", "They"],
        },
        {
          name: "OBJECT PRONOUN",
          description:
            "me, him, her, us, them (used as the receiver of the action)",
          description_bn:
            "me, him, her, us, them (কাজের প্রাপক হিসেবে ব্যবহৃত)",
          acceptedTypes: ["person"],
          examples: ["me", "him", "her", "us", "them"],
        },
        {
          name: "VERB",
          description: "The action connecting subject and object",
          description_bn: "কর্তা ও কর্মকে সংযুক্তকারী ক্রিয়া",
          acceptedTypes: ["verb", "verb_phrase"],
          examples: ["helped", "told", "gave"],
        },
      ],
      examples: [
        {
          en: "I helped him.",
          bn: "আমি তাকে সাহায্য করেছি।",
          slotValues: {
            "SUBJECT PRONOUN": "I",
            VERB: "helped",
            "OBJECT PRONOUN": "him",
          },
          topicArea: "daily_life",
        },
        {
          en: "She told me the truth.",
          bn: "সে আমাকে সত্যি কথা বলেছে।",
          slotValues: {
            "SUBJECT PRONOUN": "She",
            VERB: "told",
            "OBJECT PRONOUN": "me",
          },
          topicArea: "relationships",
        },
        {
          en: "He gave her a gift.",
          bn: "সে তাকে একটি উপহার দিয়েছে।",
          slotValues: {
            "SUBJECT PRONOUN": "He",
            VERB: "gave",
            "OBJECT PRONOUN": "her",
          },
          topicArea: "relationships",
        },
        {
          en: "They invited us to the party.",
          bn: "তারা আমাদের পার্টিতে আমন্ত্রণ জানিয়েছে।",
          slotValues: {
            "SUBJECT PRONOUN": "They",
            VERB: "invited",
            "OBJECT PRONOUN": "us",
          },
          topicArea: "daily_life",
        },
        {
          en: "We called them yesterday.",
          bn: "আমরা গতকাল তাদের ফোন করেছিলাম।",
          slotValues: {
            "SUBJECT PRONOUN": "We",
            VERB: "called",
            "OBJECT PRONOUN": "them",
          },
          topicArea: "relationships",
        },
        {
          en: "I saw her at the market.",
          bn: "আমি তাকে বাজারে দেখেছি।",
          slotValues: {
            "SUBJECT PRONOUN": "I",
            VERB: "saw",
            "OBJECT PRONOUN": "her",
          },
          topicArea: "shopping",
        },
        {
          en: "She teaches us English.",
          bn: "সে আমাদের ইংরেজি পড়ায়।",
          slotValues: {
            "SUBJECT PRONOUN": "She",
            VERB: "teaches",
            "OBJECT PRONOUN": "us",
          },
          topicArea: "education",
        },
        {
          en: "He drove me to the hospital.",
          bn: "সে আমাকে হাসপাতালে নিয়ে গিয়েছিল।",
          slotValues: {
            "SUBJECT PRONOUN": "He",
            VERB: "drove",
            "OBJECT PRONOUN": "me",
          },
          topicArea: "health",
        },
        {
          en: "They showed him the way.",
          bn: "তারা তাকে রাস্তা দেখিয়েছে।",
          slotValues: {
            "SUBJECT PRONOUN": "They",
            VERB: "showed",
            "OBJECT PRONOUN": "him",
          },
          topicArea: "travel",
        },
        {
          en: "I will meet them at the office.",
          bn: "আমি তাদের সাথে অফিসে দেখা করব।",
          slotValues: {
            "SUBJECT PRONOUN": "I",
            VERB: "will meet",
            "OBJECT PRONOUN": "them",
          },
          topicArea: "work",
        },
        {
          en: "She sent him an email.",
          bn: "সে তাকে একটি ইমেইল পাঠিয়েছে।",
          slotValues: {
            "SUBJECT PRONOUN": "She",
            VERB: "sent",
            "OBJECT PRONOUN": "him",
          },
          topicArea: "work",
        },
        {
          en: "We love her very much.",
          bn: "আমরা তাকে খুব ভালোবাসি।",
          slotValues: {
            "SUBJECT PRONOUN": "We",
            VERB: "love",
            "OBJECT PRONOUN": "her",
          },
          topicArea: "relationships",
        },
        {
          en: "He asked me a question.",
          bn: "সে আমাকে একটি প্রশ্ন করেছে।",
          slotValues: {
            "SUBJECT PRONOUN": "He",
            VERB: "asked",
            "OBJECT PRONOUN": "me",
          },
          topicArea: "education",
        },
        {
          en: "They cooked for us.",
          bn: "তারা আমাদের জন্য রান্না করেছে।",
          slotValues: {
            "SUBJECT PRONOUN": "They",
            VERB: "cooked for",
            "OBJECT PRONOUN": "us",
          },
          topicArea: "food",
        },
        {
          en: "I bought it for her.",
          bn: "আমি তার জন্য এটি কিনেছি।",
          slotValues: {
            "SUBJECT PRONOUN": "I",
            VERB: "bought it for",
            "OBJECT PRONOUN": "her",
          },
          topicArea: "shopping",
        },
      ],
      formality: "casual",
      difficulty: "beginner",
      usageNote:
        "Subject pronouns (I, he, she, we, they) do the action. Object pronouns (me, him, her, us, them) receive the action. Wrong: 'Me go to school.' Correct: 'I go to school.' Wrong: 'Give it to I.' Correct: 'Give it to me.'",
      usageNote_bn:
        "Subject pronouns (I, he, she, we, they) কাজটি করে। Object pronouns (me, him, her, us, them) কাজটি গ্রহণ করে। ভুল: 'Me go to school.' সঠিক: 'I go to school.' ভুল: 'Give it to I.' সঠিক: 'Give it to me.'",
      banglaStructureMap:
        "আমি/সে/তারা (কর্তা) + আমাকে/তাকে/তাদের (কর্ম) → I/He/They (Subject) + me/him/them (Object)",
    },
    {
      id: "X6.3",
      formula: "[MY/YOUR/HIS/HER] [NOUN]",
      formula_bn: "[MY/YOUR/HIS/HER] [NOUN]",
      patternName: "Possessive Adjectives (My, Your, His, Her)",
      patternName_bn: "অধিকারসূচক বিশেষণ (My, Your, His, Her)",
      slots: [
        {
          name: "MY/YOUR/HIS/HER",
          description:
            "Possessive adjective: my, your, his, her, our, their, its",
          description_bn:
            "অধিকারসূচক বিশেষণ: my, your, his, her, our, their, its",
          acceptedTypes: ["adjective"],
          examples: ["my", "your", "his", "her", "our", "their"],
        },
        {
          name: "NOUN",
          description: "The thing that is owned or belongs to someone",
          description_bn: "যে জিনিস কারো মালিকানায় বা কারো সম্পর্কিত",
          acceptedTypes: ["noun", "noun_phrase"],
          examples: ["book", "phone", "name"],
        },
      ],
      examples: [
        {
          en: "This is my book.",
          bn: "এটা আমার বই।",
          slotValues: { "MY/YOUR/HIS/HER": "my", NOUN: "book" },
          topicArea: "education",
        },
        {
          en: "What is your name?",
          bn: "তোমার নাম কী?",
          slotValues: { "MY/YOUR/HIS/HER": "your", NOUN: "name" },
          topicArea: "daily_life",
        },
        {
          en: "His phone is ringing.",
          bn: "তার ফোন বাজছে।",
          slotValues: { "MY/YOUR/HIS/HER": "His", NOUN: "phone" },
          topicArea: "daily_life",
        },
        {
          en: "Her dress is beautiful.",
          bn: "তার পোশাক সুন্দর।",
          slotValues: { "MY/YOUR/HIS/HER": "Her", NOUN: "dress" },
          topicArea: "shopping",
        },
        {
          en: "Our house is near the school.",
          bn: "আমাদের বাড়ি স্কুলের কাছে।",
          slotValues: { "MY/YOUR/HIS/HER": "Our", NOUN: "house" },
          topicArea: "daily_life",
        },
        {
          en: "Their children go to this school.",
          bn: "তাদের বাচ্চারা এই স্কুলে যায়।",
          slotValues: { "MY/YOUR/HIS/HER": "Their", NOUN: "children" },
          topicArea: "education",
        },
        {
          en: "I forgot my password.",
          bn: "আমি আমার পাসওয়ার্ড ভুলে গেছি।",
          slotValues: { "MY/YOUR/HIS/HER": "my", NOUN: "password" },
          topicArea: "work",
        },
        {
          en: "Is this your bag?",
          bn: "এটা কি তোমার ব্যাগ?",
          slotValues: { "MY/YOUR/HIS/HER": "your", NOUN: "bag" },
          topicArea: "travel",
        },
        {
          en: "His office is on the 5th floor.",
          bn: "তার অফিস পঞ্চম তলায়।",
          slotValues: { "MY/YOUR/HIS/HER": "His", NOUN: "office" },
          topicArea: "work",
        },
        {
          en: "Her cooking is amazing.",
          bn: "তার রান্না অসাধারণ।",
          slotValues: { "MY/YOUR/HIS/HER": "Her", NOUN: "cooking" },
          topicArea: "food",
        },
        {
          en: "I need my medicine.",
          bn: "আমার ওষুধ দরকার।",
          slotValues: { "MY/YOUR/HIS/HER": "my", NOUN: "medicine" },
          topicArea: "health",
        },
        {
          en: "Our team won the match.",
          bn: "আমাদের দল ম্যাচ জিতেছে।",
          slotValues: { "MY/YOUR/HIS/HER": "Our", NOUN: "team" },
          topicArea: "daily_life",
        },
        {
          en: "Their shop closes at 9 PM.",
          bn: "তাদের দোকান রাত ৯টায় বন্ধ হয়।",
          slotValues: { "MY/YOUR/HIS/HER": "Their", NOUN: "shop" },
          topicArea: "shopping",
        },
        {
          en: "She loves her family.",
          bn: "সে তার পরিবারকে ভালোবাসে।",
          slotValues: { "MY/YOUR/HIS/HER": "her", NOUN: "family" },
          topicArea: "relationships",
        },
        {
          en: "Where is your passport?",
          bn: "তোমার পাসপোর্ট কোথায়?",
          slotValues: { "MY/YOUR/HIS/HER": "your", NOUN: "passport" },
          topicArea: "travel",
        },
      ],
      formality: "casual",
      difficulty: "beginner",
      usageNote:
        "In Bangla, 'আমার বই' uses the possessive form of the pronoun. In English, you must use possessive adjectives (my, your, his, her, our, their) BEFORE the noun. Wrong: 'I book' or 'book of me'. Correct: 'my book'.",
      usageNote_bn:
        "বাংলায় 'আমার বই' সর্বনামের অধিকারসূচক রূপ ব্যবহার করে। ইংরেজিতে বিশেষ্যের আগে অধিকারসূচক বিশেষণ (my, your, his, her, our, their) ব্যবহার করতে হবে। ভুল: 'I book' বা 'book of me'। সঠিক: 'my book'।",
      banglaStructureMap:
        "আমার (Possessive) + বই (Noun) → my (Possessive Adj) + book (Noun)",
    },
    {
      id: "X6.4",
      formula: "It is [CONDITION]",
      formula_bn: "[CONDITION] → It is [CONDITION]",
      patternName: "It as Dummy Subject (Weather/Time/Distance)",
      patternName_bn: "It ডামি কর্তা হিসেবে (আবহাওয়া/সময়/দূরত্ব)",
      slots: [
        {
          name: "CONDITION",
          description:
            "A weather condition, time, or distance expression",
          description_bn: "আবহাওয়ার অবস্থা, সময়, বা দূরত্বের প্রকাশ",
          acceptedTypes: ["condition", "description", "time_expression"],
          examples: ["raining", "3 o'clock", "cold today", "far from here"],
        },
      ],
      examples: [
        {
          en: "It is raining.",
          bn: "বৃষ্টি হচ্ছে।",
          slotValues: { CONDITION: "raining" },
          topicArea: "daily_life",
        },
        {
          en: "It is 3 o'clock.",
          bn: "৩টা বাজে।",
          slotValues: { CONDITION: "3 o'clock" },
          topicArea: "daily_life",
        },
        {
          en: "It is cold today.",
          bn: "আজ ঠান্ডা।",
          slotValues: { CONDITION: "cold today" },
          topicArea: "daily_life",
        },
        {
          en: "It is far from here.",
          bn: "এখান থেকে দূরে।",
          slotValues: { CONDITION: "far from here" },
          topicArea: "travel",
        },
        {
          en: "It is getting dark.",
          bn: "অন্ধকার হয়ে যাচ্ছে।",
          slotValues: { CONDITION: "getting dark" },
          topicArea: "daily_life",
        },
        {
          en: "It is sunny outside.",
          bn: "বাইরে রোদ আছে।",
          slotValues: { CONDITION: "sunny outside" },
          topicArea: "daily_life",
        },
        {
          en: "It is very hot in summer.",
          bn: "গ্রীষ্মে খুব গরম থাকে।",
          slotValues: { CONDITION: "very hot in summer" },
          topicArea: "daily_life",
        },
        {
          en: "It is 10 kilometers from my house.",
          bn: "আমার বাড়ি থেকে ১০ কিলোমিটার।",
          slotValues: { CONDITION: "10 kilometers from my house" },
          topicArea: "travel",
        },
        {
          en: "It is time to go.",
          bn: "যাওয়ার সময় হয়েছে।",
          slotValues: { CONDITION: "time to go" },
          topicArea: "daily_life",
        },
        {
          en: "It is windy today.",
          bn: "আজ বাতাস বইছে।",
          slotValues: { CONDITION: "windy today" },
          topicArea: "daily_life",
        },
        {
          en: "It is too late now.",
          bn: "এখন অনেক দেরি হয়ে গেছে।",
          slotValues: { CONDITION: "too late now" },
          topicArea: "daily_life",
        },
        {
          en: "It is snowing heavily.",
          bn: "ভারী তুষারপাত হচ্ছে।",
          slotValues: { CONDITION: "snowing heavily" },
          topicArea: "travel",
        },
        {
          en: "It is a long way to the airport.",
          bn: "বিমানবন্দর অনেক দূরে।",
          slotValues: { CONDITION: "a long way to the airport" },
          topicArea: "travel",
        },
        {
          en: "It is almost midnight.",
          bn: "প্রায় মধ্যরাত।",
          slotValues: { CONDITION: "almost midnight" },
          topicArea: "daily_life",
        },
        {
          en: "It is foggy this morning.",
          bn: "আজ সকালে কুয়াশা আছে।",
          slotValues: { CONDITION: "foggy this morning" },
          topicArea: "daily_life",
        },
      ],
      formality: "casual",
      difficulty: "beginner",
      usageNote:
        "English requires 'it' as a dummy subject for weather, time, and distance. Bangla doesn't need this. Wrong: 'Is raining' or 'Is cold'. Correct: 'It is raining', 'It is cold'.",
      usageNote_bn:
        "ইংরেজিতে আবহাওয়া, সময় এবং দূরত্বের জন্য 'it' ডামি কর্তা হিসেবে প্রয়োজন। বাংলায় এটি দরকার হয় না। ভুল: 'Is raining' বা 'Is cold'। সঠিক: 'It is raining', 'It is cold'।",
      banglaStructureMap:
        "বৃষ্টি হচ্ছে (no subject) → It (Dummy Subject) + is raining (Verb)",
    },
    {
      id: "X6.5",
      formula: "[SUBJECT] [VERB] [REFLEXIVE PRONOUN]",
      formula_bn: "[SUBJECT] নিজেকে [VERB] করে → [SUBJECT] [VERB] [REFLEXIVE PRONOUN]",
      patternName: "Reflexive Pronouns (myself, yourself, himself, etc.)",
      patternName_bn: "আত্মবাচক সর্বনাম (myself, yourself, himself ইত্যাদি)",
      slots: [
        {
          name: "SUBJECT",
          description: "The person performing the action on themselves",
          description_bn: "যে ব্যক্তি নিজের উপর কাজটি করছে",
          acceptedTypes: ["person", "noun"],
          examples: ["I", "He", "She", "We", "They"],
        },
        {
          name: "VERB",
          description: "The action being done to oneself",
          description_bn: "নিজের উপর করা কাজ",
          acceptedTypes: ["verb"],
          examples: ["hurt", "taught", "introduced"],
        },
        {
          name: "REFLEXIVE PRONOUN",
          description:
            "myself, yourself, himself, herself, ourselves, themselves",
          description_bn:
            "myself, yourself, himself, herself, ourselves, themselves",
          acceptedTypes: ["person"],
          examples: ["myself", "yourself", "himself", "herself"],
        },
      ],
      examples: [
        {
          en: "I hurt myself.",
          bn: "আমি নিজেকে আঘাত করেছি।",
          slotValues: {
            SUBJECT: "I",
            VERB: "hurt",
            "REFLEXIVE PRONOUN": "myself",
          },
          topicArea: "health",
        },
        {
          en: "She taught herself to cook.",
          bn: "সে নিজে নিজে রান্না শিখেছে।",
          slotValues: {
            SUBJECT: "She",
            VERB: "taught",
            "REFLEXIVE PRONOUN": "herself",
          },
          topicArea: "food",
        },
        {
          en: "He introduced himself to the team.",
          bn: "সে দলের কাছে নিজের পরিচয় দিয়েছে।",
          slotValues: {
            SUBJECT: "He",
            VERB: "introduced",
            "REFLEXIVE PRONOUN": "himself",
          },
          topicArea: "work",
        },
        {
          en: "We enjoyed ourselves at the party.",
          bn: "আমরা পার্টিতে নিজেরা আনন্দ করেছি।",
          slotValues: {
            SUBJECT: "We",
            VERB: "enjoyed",
            "REFLEXIVE PRONOUN": "ourselves",
          },
          topicArea: "daily_life",
        },
        {
          en: "They prepared themselves for the exam.",
          bn: "তারা পরীক্ষার জন্য নিজেদের প্রস্তুত করেছে।",
          slotValues: {
            SUBJECT: "They",
            VERB: "prepared",
            "REFLEXIVE PRONOUN": "themselves",
          },
          topicArea: "education",
        },
        {
          en: "I made myself a cup of tea.",
          bn: "আমি নিজের জন্য এক কাপ চা বানিয়েছি।",
          slotValues: {
            SUBJECT: "I",
            VERB: "made",
            "REFLEXIVE PRONOUN": "myself",
          },
          topicArea: "food",
        },
        {
          en: "She cut herself while cooking.",
          bn: "সে রান্না করতে গিয়ে নিজেকে কেটে ফেলেছে।",
          slotValues: {
            SUBJECT: "She",
            VERB: "cut",
            "REFLEXIVE PRONOUN": "herself",
          },
          topicArea: "health",
        },
        {
          en: "He bought himself a new watch.",
          bn: "সে নিজের জন্য একটি নতুন ঘড়ি কিনেছে।",
          slotValues: {
            SUBJECT: "He",
            VERB: "bought",
            "REFLEXIVE PRONOUN": "himself",
          },
          topicArea: "shopping",
        },
        {
          en: "You should believe in yourself.",
          bn: "তোমার নিজের উপর বিশ্বাস রাখা উচিত।",
          slotValues: {
            SUBJECT: "You",
            VERB: "should believe in",
            "REFLEXIVE PRONOUN": "yourself",
          },
          topicArea: "daily_life",
        },
        {
          en: "We need to take care of ourselves.",
          bn: "আমাদের নিজেদের যত্ন নেওয়া দরকার।",
          slotValues: {
            SUBJECT: "We",
            VERB: "need to take care of",
            "REFLEXIVE PRONOUN": "ourselves",
          },
          topicArea: "health",
        },
        {
          en: "I taught myself English.",
          bn: "আমি নিজে নিজে ইংরেজি শিখেছি।",
          slotValues: {
            SUBJECT: "I",
            VERB: "taught",
            "REFLEXIVE PRONOUN": "myself",
          },
          topicArea: "education",
        },
        {
          en: "She looked at herself in the mirror.",
          bn: "সে আয়নায় নিজেকে দেখেছে।",
          slotValues: {
            SUBJECT: "She",
            VERB: "looked at",
            "REFLEXIVE PRONOUN": "herself",
          },
          topicArea: "daily_life",
        },
        {
          en: "He blamed himself for the mistake.",
          bn: "সে ভুলের জন্য নিজেকে দোষ দিয়েছে।",
          slotValues: {
            SUBJECT: "He",
            VERB: "blamed",
            "REFLEXIVE PRONOUN": "himself",
          },
          topicArea: "work",
        },
        {
          en: "They found themselves lost in the city.",
          bn: "তারা শহরে নিজেদের হারিয়ে গেছে বলে অনুভব করেছে।",
          slotValues: {
            SUBJECT: "They",
            VERB: "found",
            "REFLEXIVE PRONOUN": "themselves",
          },
          topicArea: "travel",
        },
        {
          en: "You can help yourself to the food.",
          bn: "তুমি নিজেই খাবার নিয়ে নাও।",
          slotValues: {
            SUBJECT: "You",
            VERB: "can help",
            "REFLEXIVE PRONOUN": "yourself",
          },
          topicArea: "food",
        },
      ],
      formality: "casual",
      difficulty: "beginner",
      usageNote:
        "Use reflexive pronouns when the subject and object are the SAME person. I = myself, you = yourself, he = himself, she = herself, we = ourselves, they = themselves. Wrong: 'I hurt me.' Correct: 'I hurt myself.'",
      usageNote_bn:
        "যখন কর্তা ও কর্ম একই ব্যক্তি হয় তখন আত্মবাচক সর্বনাম ব্যবহার করুন। I = myself, you = yourself, he = himself, she = herself, we = ourselves, they = themselves। ভুল: 'I hurt me.' সঠিক: 'I hurt myself.'",
      banglaStructureMap:
        "আমি (কর্তা) + নিজেকে (আত্মবাচক) + আঘাত করেছি (ক্রিয়া) → I (Subject) + hurt (Verb) + myself (Reflexive)",
    },
  ],
};
