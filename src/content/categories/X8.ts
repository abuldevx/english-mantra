import { PatternCategory } from "@/types/pattern";

export const categoryX8: PatternCategory = {
  id: "X8",
  slug: "direct-translation-traps",
  name: "Direct Translation Traps",
  name_bn: "সরাসরি অনুবাদ ফাঁদ",
  description:
    "Stop translating word-by-word from Bangla! These are common phrases where direct translation leads to wrong English.",
  description_bn:
    "বাংলা থেকে শব্দে শব্দে অনুবাদ করা বন্ধ করুন! এগুলো সাধারণ বাক্যাংশ যেখানে সরাসরি অনুবাদ ভুল ইংরেজি তৈরি করে।",
  icon: "⚠️",
  group: "X",
  groupName: "Common Mistakes by Bangla Speakers",
  groupName_bn: "বাংলা ভাষীদের সাধারণ ভুল",
  difficulty: "beginner",
  patterns: [
    {
      id: "X8.1",
      formula: "I [VERB]",
      formula_bn: "আমি [ক্রিয়া]",
      patternName: '"I am agree" → "I agree" (Verbs, Not Adjectives)',
      patternName_bn:
        '"I am agree" → "I agree" (ক্রিয়া, বিশেষণ নয়)',
      slots: [
        {
          name: "VERB",
          description:
            "A verb used directly — NOT with 'am/is/are'. Wrong: 'I am agree'. Right: 'I agree'.",
          description_bn:
            "একটি ক্রিয়া সরাসরি ব্যবহার করুন — 'am/is/are' ছাড়া। ভুল: 'I am agree'। সঠিক: 'I agree'।",
          acceptedTypes: ["verb", "verb_phrase"],
          examples: ["agree", "understand", "know"],
        },
      ],
      examples: [
        {
          en: "I agree with you.",
          bn: "আমি তোমার সাথে একমত।",
          slotValues: { VERB: "agree with you" },
          topicArea: "daily_life",
        },
        {
          en: "I disagree with this decision.",
          bn: "আমি এই সিদ্ধান্তের সাথে দ্বিমত।",
          slotValues: { VERB: "disagree with this decision" },
          topicArea: "work",
        },
        {
          en: "I understand the problem.",
          bn: "আমি সমস্যাটা বুঝি।",
          slotValues: { VERB: "understand the problem" },
          topicArea: "daily_life",
        },
        {
          en: "I know the answer.",
          bn: "আমি উত্তর জানি।",
          slotValues: { VERB: "know the answer" },
          topicArea: "education",
        },
        {
          en: "I remember your name.",
          bn: "আমি তোমার নাম মনে রাখি।",
          slotValues: { VERB: "remember your name" },
          topicArea: "relationships",
        },
        {
          en: "I appreciate your help.",
          bn: "আমি তোমার সাহায্যের কদর করি।",
          slotValues: { VERB: "appreciate your help" },
          topicArea: "relationships",
        },
        {
          en: "I apologize for the mistake.",
          bn: "আমি ভুলের জন্য ক্ষমা চাইছি।",
          slotValues: { VERB: "apologize for the mistake" },
          topicArea: "work",
        },
        {
          en: "I refuse to do this.",
          bn: "আমি এটা করতে অস্বীকার করি।",
          slotValues: { VERB: "refuse to do this" },
          topicArea: "daily_life",
        },
        {
          en: "I accept your offer.",
          bn: "আমি তোমার প্রস্তাব গ্রহণ করি।",
          slotValues: { VERB: "accept your offer" },
          topicArea: "work",
        },
        {
          en: "I promise I will be there.",
          bn: "আমি প্রতিশ্রুতি দিচ্ছি আমি সেখানে থাকবো।",
          slotValues: { VERB: "promise I will be there" },
          topicArea: "relationships",
        },
        {
          en: "I insist on paying.",
          bn: "আমি পরিশোধ করতে জোর দিচ্ছি।",
          slotValues: { VERB: "insist on paying" },
          topicArea: "food",
        },
        {
          en: "I recommend this restaurant.",
          bn: "আমি এই রেস্তোরাঁ সুপারিশ করি।",
          slotValues: { VERB: "recommend this restaurant" },
          topicArea: "food",
        },
        {
          en: "I suggest we go tomorrow.",
          bn: "আমি প্রস্তাব করি আমরা আগামীকাল যাই।",
          slotValues: { VERB: "suggest we go tomorrow" },
          topicArea: "daily_life",
        },
        {
          en: "I prefer tea over coffee.",
          bn: "আমি কফির চেয়ে চা পছন্দ করি।",
          slotValues: { VERB: "prefer tea over coffee" },
          topicArea: "food",
        },
        {
          en: "I doubt it will rain today.",
          bn: "আমি সন্দেহ করি আজ বৃষ্টি হবে।",
          slotValues: { VERB: "doubt it will rain today" },
          topicArea: "daily_life",
        },
      ],
      formality: "casual",
      difficulty: "beginner",
      usageNote:
        "In Bangla, 'আমি রাজি' literally translates as 'I am agree'. But in English, 'agree' is a verb, not an adjective. Say 'I agree', not 'I am agree'. The same applies to: understand (not 'I am understand'), know (not 'I am know'), remember (not 'I am remember').",
      usageNote_bn:
        "বাংলায় 'আমি রাজি' আক্ষরিকভাবে 'I am agree' অনুবাদ হয়। কিন্তু ইংরেজিতে 'agree' একটি ক্রিয়া, বিশেষণ নয়। বলুন 'I agree', 'I am agree' নয়। একইভাবে: understand ('I am understand' নয়), know ('I am know' নয়), remember ('I am remember' নয়)।",
      banglaStructureMap:
        "আমি (Subject) + [VERB] (ক্রিয়া — am/is/are ছাড়া)",
    },
    {
      id: "X8.2",
      formula: "[PERSON] said that [CLAUSE]",
      formula_bn: "[ব্যক্তি] বলেছিল যে [উপবাক্য]",
      patternName: '"He told that" → "He said that" (Say vs Tell)',
      patternName_bn:
        '"He told that" → "He said that" (Say বনাম Tell)',
      slots: [
        {
          name: "PERSON",
          description: "The person who spoke",
          description_bn: "যে ব্যক্তি কথা বলেছে",
          acceptedTypes: ["person"],
          examples: ["He", "She", "The teacher"],
        },
        {
          name: "CLAUSE",
          description: "What the person said — the reported speech",
          description_bn: "ব্যক্তি কী বলেছে — পরোক্ষ উক্তি",
          acceptedTypes: ["clause"],
          examples: ["he was coming", "it was closed", "she was busy"],
        },
      ],
      examples: [
        {
          en: "He said that he was coming.",
          bn: "সে বলেছিল যে সে আসছে।",
          slotValues: { PERSON: "He", CLAUSE: "he was coming" },
          topicArea: "daily_life",
        },
        {
          en: "She told me that she was busy.",
          bn: "সে আমাকে বলেছিল যে সে ব্যস্ত।",
          slotValues: { PERSON: "She", CLAUSE: "she was busy" },
          topicArea: "daily_life",
        },
        {
          en: "The teacher said that the exam was postponed.",
          bn: "শিক্ষক বলেছিলেন যে পরীক্ষা স্থগিত হয়েছে।",
          slotValues: {
            PERSON: "The teacher",
            CLAUSE: "the exam was postponed",
          },
          topicArea: "education",
        },
        {
          en: "My mother told me to come home early.",
          bn: "আমার মা আমাকে তাড়াতাড়ি বাড়ি আসতে বলেছিলেন।",
          slotValues: { PERSON: "My mother", CLAUSE: "to come home early" },
          topicArea: "relationships",
        },
        {
          en: "He said that the shop was closed.",
          bn: "সে বলেছিল যে দোকান বন্ধ ছিল।",
          slotValues: { PERSON: "He", CLAUSE: "the shop was closed" },
          topicArea: "shopping",
        },
        {
          en: "She told him that dinner was ready.",
          bn: "সে তাকে বলেছিল যে রাতের খাবার তৈরি।",
          slotValues: { PERSON: "She", CLAUSE: "dinner was ready" },
          topicArea: "food",
        },
        {
          en: "The doctor said that I need rest.",
          bn: "ডাক্তার বলেছিলেন যে আমার বিশ্রাম দরকার।",
          slotValues: { PERSON: "The doctor", CLAUSE: "I need rest" },
          topicArea: "health",
        },
        {
          en: "My boss told me to finish the report.",
          bn: "আমার বস আমাকে রিপোর্ট শেষ করতে বলেছিলেন।",
          slotValues: { PERSON: "My boss", CLAUSE: "to finish the report" },
          topicArea: "work",
        },
        {
          en: "They said that the flight was delayed.",
          bn: "তারা বলেছিল যে ফ্লাইট দেরি হয়েছে।",
          slotValues: { PERSON: "They", CLAUSE: "the flight was delayed" },
          topicArea: "travel",
        },
        {
          en: "She told us that she was getting married.",
          bn: "সে আমাদের বলেছিল যে সে বিয়ে করছে।",
          slotValues: {
            PERSON: "She",
            CLAUSE: "she was getting married",
          },
          topicArea: "relationships",
        },
        {
          en: "He said that he liked the food.",
          bn: "সে বলেছিল যে তার খাবার ভালো লেগেছে।",
          slotValues: { PERSON: "He", CLAUSE: "he liked the food" },
          topicArea: "food",
        },
        {
          en: "The manager told the team to work harder.",
          bn: "ম্যানেজার টিমকে আরও পরিশ্রম করতে বলেছিলেন।",
          slotValues: {
            PERSON: "The manager",
            CLAUSE: "to work harder",
          },
          topicArea: "work",
        },
        {
          en: "My friend said that the movie was great.",
          bn: "আমার বন্ধু বলেছিল যে সিনেমাটি দারুণ ছিল।",
          slotValues: {
            PERSON: "My friend",
            CLAUSE: "the movie was great",
          },
          topicArea: "daily_life",
        },
        {
          en: "She told me that she couldn't come.",
          bn: "সে আমাকে বলেছিল যে সে আসতে পারবে না।",
          slotValues: { PERSON: "She", CLAUSE: "she couldn't come" },
          topicArea: "relationships",
        },
        {
          en: "He said that he would call later.",
          bn: "সে বলেছিল যে সে পরে ফোন করবে।",
          slotValues: { PERSON: "He", CLAUSE: "he would call later" },
          topicArea: "daily_life",
        },
      ],
      formality: "casual",
      difficulty: "beginner",
      usageNote:
        "TELL needs a person: He told ME that... She told HIM that... SAY doesn't need a person: He SAID that... Wrong: 'He told that he is coming.' Right: 'He said that he is coming' OR 'He told me that he is coming.' In Bangla, 'বলা' is used for both say and tell, causing confusion.",
      usageNote_bn:
        "TELL-এর পরে একজন ব্যক্তি লাগে: He told ME that... She told HIM that... SAY-এর পরে ব্যক্তি লাগে না: He SAID that... ভুল: 'He told that he is coming.' সঠিক: 'He said that he is coming' অথবা 'He told me that he is coming.' বাংলায় 'বলা' say এবং tell উভয়ের জন্য ব্যবহার হয়, যা বিভ্রান্তি তৈরি করে।",
      banglaStructureMap:
        "[PERSON] (Subject) + বলেছিল/বলেছিলেন (said/told) + যে (that) + [CLAUSE] (উপবাক্য)",
    },
    {
      id: "X8.3",
      formula: "Turn [ON/OFF] the [DEVICE]",
      formula_bn: "[DEVICE] [চালু/বন্ধ] করো",
      patternName:
        '"Open the light" → "Turn on the light" (Turn On/Off)',
      patternName_bn:
        '"Open the light" → "Turn on the light" (চালু/বন্ধ করা)',
      slots: [
        {
          name: "ON/OFF",
          description:
            "Use 'on' to start and 'off' to stop. NOT open/close for devices.",
          description_bn:
            "শুরু করতে 'on' এবং বন্ধ করতে 'off' ব্যবহার করুন। ডিভাইসের জন্য open/close নয়।",
          acceptedTypes: ["adverb"],
          examples: ["on", "off"],
        },
        {
          name: "DEVICE",
          description:
            "An electrical device or appliance: light, fan, TV, AC, computer, etc.",
          description_bn:
            "একটি বৈদ্যুতিক ডিভাইস বা যন্ত্র: light, fan, TV, AC, computer ইত্যাদি।",
          acceptedTypes: ["noun"],
          examples: ["light", "fan", "TV", "AC"],
        },
      ],
      examples: [
        {
          en: "Turn on the light, please.",
          bn: "দয়া করে বাতি জ্বালাও।",
          slotValues: { "ON/OFF": "on", DEVICE: "light" },
          topicArea: "daily_life",
        },
        {
          en: "Turn off the fan before you leave.",
          bn: "যাওয়ার আগে ফ্যান বন্ধ করো।",
          slotValues: { "ON/OFF": "off", DEVICE: "fan" },
          topicArea: "daily_life",
        },
        {
          en: "Can you turn on the TV?",
          bn: "তুমি কি টিভি চালু করতে পারো?",
          slotValues: { "ON/OFF": "on", DEVICE: "TV" },
          topicArea: "daily_life",
        },
        {
          en: "Please turn off the AC.",
          bn: "দয়া করে এসি বন্ধ করো।",
          slotValues: { "ON/OFF": "off", DEVICE: "AC" },
          topicArea: "daily_life",
        },
        {
          en: "Switch on the computer.",
          bn: "কম্পিউটার চালু করো।",
          slotValues: { "ON/OFF": "on", DEVICE: "computer" },
          topicArea: "work",
        },
        {
          en: "Turn off the heater, it's too hot.",
          bn: "হিটার বন্ধ করো, অনেক গরম।",
          slotValues: { "ON/OFF": "off", DEVICE: "heater" },
          topicArea: "daily_life",
        },
        {
          en: "Turn on the radio, I want to hear the news.",
          bn: "রেডিও চালু করো, আমি খবর শুনতে চাই।",
          slotValues: { "ON/OFF": "on", DEVICE: "radio" },
          topicArea: "daily_life",
        },
        {
          en: "Don't forget to turn off the oven.",
          bn: "ওভেন বন্ধ করতে ভুলো না।",
          slotValues: { "ON/OFF": "off", DEVICE: "oven" },
          topicArea: "food",
        },
        {
          en: "Turn on the microphone before speaking.",
          bn: "কথা বলার আগে মাইক্রোফোন চালু করো।",
          slotValues: { "ON/OFF": "on", DEVICE: "microphone" },
          topicArea: "work",
        },
        {
          en: "Turn off the projector after the meeting.",
          bn: "মিটিংয়ের পরে প্রজেক্টর বন্ধ করো।",
          slotValues: { "ON/OFF": "off", DEVICE: "projector" },
          topicArea: "work",
        },
        {
          en: "Can someone turn on the washing machine?",
          bn: "কেউ কি ওয়াশিং মেশিন চালু করতে পারো?",
          slotValues: { "ON/OFF": "on", DEVICE: "washing machine" },
          topicArea: "daily_life",
        },
        {
          en: "Turn off the printer when you're done.",
          bn: "কাজ শেষ হলে প্রিন্টার বন্ধ করো।",
          slotValues: { "ON/OFF": "off", DEVICE: "printer" },
          topicArea: "work",
        },
        {
          en: "Turn on the WiFi router.",
          bn: "ওয়াইফাই রাউটার চালু করো।",
          slotValues: { "ON/OFF": "on", DEVICE: "WiFi router" },
          topicArea: "daily_life",
        },
        {
          en: "Please turn off your phone during the exam.",
          bn: "পরীক্ষার সময় দয়া করে ফোন বন্ধ করো।",
          slotValues: { "ON/OFF": "off", DEVICE: "phone" },
          topicArea: "education",
        },
        {
          en: "Turn on the air purifier.",
          bn: "এয়ার পিউরিফায়ার চালু করো।",
          slotValues: { "ON/OFF": "on", DEVICE: "air purifier" },
          topicArea: "health",
        },
      ],
      formality: "casual",
      difficulty: "beginner",
      usageNote:
        "Bangla uses 'খোলা/বন্ধ করা' (open/close) for lights and devices. English uses 'turn on/turn off' or 'switch on/switch off'. Wrong: 'Open the light' or 'Close the fan'. Right: 'Turn on the light' or 'Turn off the fan'. 'Open/close' is only for doors, windows, boxes, books, etc.",
      usageNote_bn:
        "বাংলায় বাতি এবং ডিভাইসের জন্য 'খোলা/বন্ধ করা' ব্যবহার হয়। ইংরেজিতে 'turn on/turn off' বা 'switch on/switch off' ব্যবহার হয়। ভুল: 'Open the light' বা 'Close the fan'। সঠিক: 'Turn on the light' বা 'Turn off the fan'। 'Open/close' শুধু দরজা, জানালা, বাক্স, বই ইত্যাদির জন্য।",
      banglaStructureMap:
        "Turn [ON/OFF] (চালু/বন্ধ করো) + the [DEVICE] (ডিভাইস)",
    },
    {
      id: "X8.4",
      formula: "[NATURAL ENGLISH PHRASE]",
      formula_bn: "[স্বাভাবিক ইংরেজি বাক্যাংশ]",
      patternName:
        '"What is your good name?" → Natural English (Overly Formal)',
      patternName_bn:
        '"What is your good name?" → স্বাভাবিক ইংরেজি (অতিরিক্ত আনুষ্ঠানিক)',
      slots: [
        {
          name: "NATURAL ENGLISH PHRASE",
          description:
            "The natural, direct English way to say common Bangla-influenced expressions",
          description_bn:
            "সাধারণ বাংলা-প্রভাবিত অভিব্যক্তি বলার স্বাভাবিক, সরাসরি ইংরেজি উপায়",
          acceptedTypes: ["clause"],
          examples: ["What is your name?", "How are you?", "Let me know"],
        },
      ],
      examples: [
        {
          en: "What is your name?",
          bn: "তোমার নাম কী? (ভুল: 'What is your good name?')",
          slotValues: { "NATURAL ENGLISH PHRASE": "What is your name?" },
          topicArea: "daily_life",
        },
        {
          en: "How are you?",
          bn: "তুমি কেমন আছো? (ভুল: 'How is your health?')",
          slotValues: { "NATURAL ENGLISH PHRASE": "How are you?" },
          topicArea: "daily_life",
        },
        {
          en: "I have a question.",
          bn: "আমার একটা প্রশ্ন আছে। (ভুল: 'I have a doubt')",
          slotValues: { "NATURAL ENGLISH PHRASE": "I have a question." },
          topicArea: "education",
        },
        {
          en: "Please sit down.",
          bn: "দয়া করে বসুন। (ভুল: 'Please be seated comfortably')",
          slotValues: { "NATURAL ENGLISH PHRASE": "Please sit down." },
          topicArea: "daily_life",
        },
        {
          en: "Let me know.",
          bn: "আমাকে জানাও। (ভুল: 'Kindly do the needful')",
          slotValues: { "NATURAL ENGLISH PHRASE": "Let me know." },
          topicArea: "work",
        },
        {
          en: "I'm going home.",
          bn: "আমি বাড়ি যাচ্ছি। (ভুল: 'I'm going to my home side')",
          slotValues: { "NATURAL ENGLISH PHRASE": "I'm going home." },
          topicArea: "daily_life",
        },
        {
          en: "I failed the exam.",
          bn: "আমি পরীক্ষায় ফেল করেছি। (ভুল: 'I got failed in the exam')",
          slotValues: { "NATURAL ENGLISH PHRASE": "I failed the exam." },
          topicArea: "education",
        },
        {
          en: "The train is late.",
          bn: "ট্রেন দেরি হয়েছে। (ভুল: 'The train is getting late')",
          slotValues: { "NATURAL ENGLISH PHRASE": "The train is late." },
          topicArea: "travel",
        },
        {
          en: "He is older than me.",
          bn: "সে আমার চেয়ে বড়। (ভুল: 'He is elder than me')",
          slotValues: { "NATURAL ENGLISH PHRASE": "He is older than me." },
          topicArea: "relationships",
        },
        {
          en: "I couldn't attend.",
          bn: "আমি উপস্থিত থাকতে পারিনি। (ভুল: 'I couldn't attend there')",
          slotValues: { "NATURAL ENGLISH PHRASE": "I couldn't attend." },
          topicArea: "work",
        },
        {
          en: "She is married to him.",
          bn: "সে তার সাথে বিবাহিত। (ভুল: 'She is married with him')",
          slotValues: {
            "NATURAL ENGLISH PHRASE": "She is married to him.",
          },
          topicArea: "relationships",
        },
        {
          en: "I have to go.",
          bn: "আমাকে যেতে হবে। (ভুল: 'I have a need to go')",
          slotValues: { "NATURAL ENGLISH PHRASE": "I have to go." },
          topicArea: "daily_life",
        },
        {
          en: "Please come in.",
          bn: "দয়া করে ভিতরে আসুন। (ভুল: 'Please come inside')",
          slotValues: { "NATURAL ENGLISH PHRASE": "Please come in." },
          topicArea: "daily_life",
        },
        {
          en: "I don't have any money.",
          bn: "আমার কোনো টাকা নেই। (ভুল: 'I haven't any money')",
          slotValues: {
            "NATURAL ENGLISH PHRASE": "I don't have any money.",
          },
          topicArea: "daily_life",
        },
        {
          en: "Call me when you arrive.",
          bn: "তুমি পৌঁছালে আমাকে ফোন করো। (ভুল: 'Give me a ring when you arrive')",
          slotValues: {
            "NATURAL ENGLISH PHRASE": "Call me when you arrive.",
          },
          topicArea: "daily_life",
        },
      ],
      formality: "casual",
      difficulty: "beginner",
      usageNote:
        "Bangla speakers often translate Bangla expressions word-by-word into English, creating phrases that sound unnatural. 'What is your good name?' comes from 'আপনার শুভ নাম কী?'. 'I have a doubt' comes from 'আমার একটা সন্দেহ আছে' (but in English, 'doubt' means you don't believe something). Learn the natural English versions!",
      usageNote_bn:
        "বাংলা ভাষীরা প্রায়ই বাংলা অভিব্যক্তি শব্দে শব্দে ইংরেজিতে অনুবাদ করে, যা অস্বাভাবিক বাক্যাংশ তৈরি করে। 'What is your good name?' আসে 'আপনার শুভ নাম কী?' থেকে। 'I have a doubt' আসে 'আমার একটা সন্দেহ আছে' থেকে (কিন্তু ইংরেজিতে 'doubt' মানে আপনি কিছু বিশ্বাস করেন না)। স্বাভাবিক ইংরেজি সংস্করণ শিখুন!",
      banglaStructureMap:
        "বাংলা অভিব্যক্তি → [NATURAL ENGLISH PHRASE] (স্বাভাবিক ইংরেজি)",
    },
    {
      id: "X8.5",
      formula: "I have [NOUN]",
      formula_bn: "আমার [বিশেষ্য] আছে",
      patternName:
        '"I am having two brothers" → "I have" (Simple Have for Possession)',
      patternName_bn:
        '"I am having two brothers" → "I have" (অধিকারের জন্য সাধারণ Have)',
      slots: [
        {
          name: "NOUN",
          description:
            "Something you possess — use simple 'have', NOT 'am having'. Wrong: 'I am having two brothers'. Right: 'I have two brothers'.",
          description_bn:
            "আপনার মালিকানায় কিছু — সাধারণ 'have' ব্যবহার করুন, 'am having' নয়। ভুল: 'I am having two brothers'। সঠিক: 'I have two brothers'।",
          acceptedTypes: ["noun", "noun_phrase"],
          examples: ["two brothers", "a car", "a lot of money"],
        },
      ],
      examples: [
        {
          en: "I have two brothers.",
          bn: "আমার দুই ভাই আছে।",
          slotValues: { NOUN: "two brothers" },
          topicArea: "relationships",
        },
        {
          en: "She has a car.",
          bn: "তার একটি গাড়ি আছে।",
          slotValues: { NOUN: "a car" },
          topicArea: "daily_life",
        },
        {
          en: "He has a lot of money.",
          bn: "তার অনেক টাকা আছে।",
          slotValues: { NOUN: "a lot of money" },
          topicArea: "daily_life",
        },
        {
          en: "I have an idea.",
          bn: "আমার একটি আইডিয়া আছে।",
          slotValues: { NOUN: "an idea" },
          topicArea: "work",
        },
        {
          en: "They have three children.",
          bn: "তাদের তিনটি সন্তান আছে।",
          slotValues: { NOUN: "three children" },
          topicArea: "relationships",
        },
        {
          en: "We have a meeting at 3 o'clock.",
          bn: "আমাদের ৩টায় একটি মিটিং আছে।",
          slotValues: { NOUN: "a meeting at 3 o'clock" },
          topicArea: "work",
        },
        {
          en: "She has a headache.",
          bn: "তার মাথা ব্যথা আছে।",
          slotValues: { NOUN: "a headache" },
          topicArea: "health",
        },
        {
          en: "I have a phone.",
          bn: "আমার একটি ফোন আছে।",
          slotValues: { NOUN: "a phone" },
          topicArea: "daily_life",
        },
        {
          en: "He has ten years of experience.",
          bn: "তার দশ বছরের অভিজ্ঞতা আছে।",
          slotValues: { NOUN: "ten years of experience" },
          topicArea: "work",
        },
        {
          en: "We have enough food for everyone.",
          bn: "আমাদের সবার জন্য যথেষ্ট খাবার আছে।",
          slotValues: { NOUN: "enough food for everyone" },
          topicArea: "food",
        },
        {
          en: "She has many friends.",
          bn: "তার অনেক বন্ধু আছে।",
          slotValues: { NOUN: "many friends" },
          topicArea: "relationships",
        },
        {
          en: "I have no time.",
          bn: "আমার সময় নেই।",
          slotValues: { NOUN: "no time" },
          topicArea: "daily_life",
        },
        {
          en: "They have a big house.",
          bn: "তাদের একটি বড় বাড়ি আছে।",
          slotValues: { NOUN: "a big house" },
          topicArea: "daily_life",
        },
        {
          en: "He has a good job.",
          bn: "তার একটি ভালো চাকরি আছে।",
          slotValues: { NOUN: "a good job" },
          topicArea: "work",
        },
        {
          en: "I have a fever.",
          bn: "আমার জ্বর আছে।",
          slotValues: { NOUN: "a fever" },
          topicArea: "health",
        },
      ],
      formality: "casual",
      difficulty: "beginner",
      usageNote:
        "Bangla: 'আমার দুই ভাই আছে'. Bangla speakers often say 'I am having two brothers' because they translate the present continuous structure. In English, use simple 'have' for possession, relationships, and states. 'Having' is ONLY used for actions: 'I am having lunch' (eating) is OK, but 'I am having a car' is WRONG.",
      usageNote_bn:
        "বাংলা: 'আমার দুই ভাই আছে'। বাংলা ভাষীরা প্রায়ই 'I am having two brothers' বলে কারণ তারা বর্তমান চলমান কাঠামো অনুবাদ করে। ইংরেজিতে অধিকার, সম্পর্ক এবং অবস্থার জন্য সাধারণ 'have' ব্যবহার করুন। 'Having' শুধু কাজের জন্য: 'I am having lunch' (খাচ্ছি) ঠিক আছে, কিন্তু 'I am having a car' ভুল।",
      banglaStructureMap:
        "আমার/তার (Subject) + [NOUN] (Object) + আছে (have — NOT am having)",
    },
  ],
};
