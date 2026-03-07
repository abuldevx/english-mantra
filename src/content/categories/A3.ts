import { PatternCategory } from "@/types/pattern";

export const categoryA3: PatternCategory = {
  id: "A3",
  slug: "asking-someone-to-do-something",
  name: "Asking Someone to Do Something",
  name_bn: "কাউকে কিছু করতে বলা",
  description:
    "Learn how to ask or request someone to perform an action, from casual to very polite.",
  description_bn:
    "সাধারণ থেকে খুব বিনয়ী পর্যন্ত কাউকে কোনো কাজ করতে বলা বা অনুরোধ করা শিখুন।",
  icon: "🙏",
  group: "A",
  groupName: "Wanting, Needing & Preferences",
  groupName_bn: "চাওয়া, প্রয়োজন এবং পছন্দ",
  difficulty: "beginner",
  prerequisites: ["A1", "A2"],
  patterns: [
    {
      id: "A3.1",
      formula: "Can you [ACTION]?",
      formula_bn: "তুমি কি [কাজ] করতে পারো?",
      patternName: "Simple Action Request",
      patternName_bn: "সাধারণ কাজের অনুরোধ",
      slots: [
        {
          name: "ACTION",
          description: "A base-form verb phrase describing the action",
          description_bn: "একটি মূল-রূপ ক্রিয়া পদবন্ধ যা কাজটি বর্ণনা করে",
          acceptedTypes: ["verb"],
          examples: ["help me", "open the window", "pass the salt"],
        },
      ],
      examples: [
        {
          en: "Can you help me?",
          bn: "তুমি কি আমাকে সাহায্য করতে পারো?",
          slotValues: { ACTION: "help me" },
          topicArea: "daily_life",
        },
        {
          en: "Can you open the window?",
          bn: "তুমি কি জানালাটা খুলতে পারো?",
          slotValues: { ACTION: "open the window" },
          topicArea: "daily_life",
        },
        {
          en: "Can you pass the salt?",
          bn: "তুমি কি লবণটা দিতে পারো?",
          slotValues: { ACTION: "pass the salt" },
          topicArea: "food",
        },
        {
          en: "Can you send me the file?",
          bn: "তুমি কি আমাকে ফাইলটা পাঠাতে পারো?",
          slotValues: { ACTION: "send me the file" },
          topicArea: "work",
        },
        {
          en: "Can you pick me up from the airport?",
          bn: "তুমি কি আমাকে এয়ারপোর্ট থেকে নিতে পারো?",
          slotValues: { ACTION: "pick me up from the airport" },
          topicArea: "travel",
        },
        {
          en: "Can you explain this to me?",
          bn: "তুমি কি আমাকে এটা ব্যাখ্যা করতে পারো?",
          slotValues: { ACTION: "explain this to me" },
          topicArea: "education",
        },
        {
          en: "Can you check my blood pressure?",
          bn: "তুমি কি আমার রক্তচাপ মাপতে পারো?",
          slotValues: { ACTION: "check my blood pressure" },
          topicArea: "health",
        },
        {
          en: "Can you hold this for a second?",
          bn: "তুমি কি এটা একটু ধরতে পারো?",
          slotValues: { ACTION: "hold this for a second" },
          topicArea: "daily_life",
        },
        {
          en: "Can you call me later?",
          bn: "তুমি কি আমাকে পরে ফোন করতে পারো?",
          slotValues: { ACTION: "call me later" },
          topicArea: "relationships",
        },
        {
          en: "Can you wrap this up for me?",
          bn: "তুমি কি এটা আমার জন্য মুড়িয়ে দিতে পারো?",
          slotValues: { ACTION: "wrap this up for me" },
          topicArea: "shopping",
        },
        {
          en: "Can you turn down the music?",
          bn: "তুমি কি গানের আওয়াজ কমাতে পারো?",
          slotValues: { ACTION: "turn down the music" },
          topicArea: "daily_life",
        },
        {
          en: "Can you recommend a good restaurant?",
          bn: "তুমি কি একটা ভালো রেস্তোরাঁ সুপারিশ করতে পারো?",
          slotValues: { ACTION: "recommend a good restaurant" },
          topicArea: "food",
        },
        {
          en: "Can you show me the way to the station?",
          bn: "তুমি কি আমাকে স্টেশনের রাস্তা দেখাতে পারো?",
          slotValues: { ACTION: "show me the way to the station" },
          topicArea: "travel",
        },
        {
          en: "Can you finish this by Friday?",
          bn: "তুমি কি এটা শুক্রবারের মধ্যে শেষ করতে পারো?",
          slotValues: { ACTION: "finish this by Friday" },
          topicArea: "work",
        },
        {
          en: "Can you lend me your notes?",
          bn: "তুমি কি আমাকে তোমার নোটস ধার দিতে পারো?",
          slotValues: { ACTION: "lend me your notes" },
          topicArea: "education",
        },
      ],
      formality: "casual",
      difficulty: "beginner",
      usageNote:
        "The most common casual way to ask someone to do something. Fine for friends and everyday situations.",
      usageNote_bn:
        "কাউকে কিছু করতে বলার সবচেয়ে সাধারণ উপায়। বন্ধু এবং দৈনন্দিন পরিস্থিতিতে উপযুক্ত।",
      combinableWith: ["A1.2"],
      responsePatterns: ["B3.1"],
      banglaStructureMap:
        "তুমি কি (Subject + Question) + [ACTION] (Verb phrase) + করতে পারো (Ability)?",
    },
    {
      id: "A3.2",
      formula: "Would you mind [DOING]?",
      formula_bn: "আপনার কি [করতে] আপত্তি আছে?",
      patternName: "Polite Action Request",
      patternName_bn: "বিনয়ী কাজের অনুরোধ",
      slots: [
        {
          name: "DOING",
          description: "A gerund (-ing form) phrase describing the action",
          description_bn: "একটি জেরান্ড (-ing রূপ) পদবন্ধ যা কাজটি বর্ণনা করে",
          acceptedTypes: ["gerund"],
          examples: [
            "closing the door",
            "moving over a bit",
            "waiting for me",
          ],
        },
      ],
      examples: [
        {
          en: "Would you mind closing the door?",
          bn: "দরজাটা বন্ধ করলে কি আপনার আপত্তি আছে?",
          slotValues: { DOING: "closing the door" },
          topicArea: "daily_life",
        },
        {
          en: "Would you mind moving over a bit?",
          bn: "একটু সরে গেলে কি আপনার আপত্তি আছে?",
          slotValues: { DOING: "moving over a bit" },
          topicArea: "daily_life",
        },
        {
          en: "Would you mind waiting for me?",
          bn: "আমার জন্য অপেক্ষা করলে কি আপনার আপত্তি আছে?",
          slotValues: { DOING: "waiting for me" },
          topicArea: "relationships",
        },
        {
          en: "Would you mind turning off the lights?",
          bn: "বাতি বন্ধ করলে কি আপনার আপত্তি আছে?",
          slotValues: { DOING: "turning off the lights" },
          topicArea: "daily_life",
        },
        {
          en: "Would you mind sharing your screen?",
          bn: "আপনার স্ক্রিন শেয়ার করলে কি আপনার আপত্তি আছে?",
          slotValues: { DOING: "sharing your screen" },
          topicArea: "work",
        },
        {
          en: "Would you mind keeping an eye on my bag?",
          bn: "আমার ব্যাগটার দিকে একটু নজর রাখলে কি আপনার আপত্তি আছে?",
          slotValues: { DOING: "keeping an eye on my bag" },
          topicArea: "travel",
        },
        {
          en: "Would you mind repeating that?",
          bn: "সেটা আবার বললে কি আপনার আপত্তি আছে?",
          slotValues: { DOING: "repeating that" },
          topicArea: "education",
        },
        {
          en: "Would you mind speaking a little slower?",
          bn: "একটু ধীরে কথা বললে কি আপনার আপত্তি আছে?",
          slotValues: { DOING: "speaking a little slower" },
          topicArea: "education",
        },
        {
          en: "Would you mind checking this for errors?",
          bn: "এটায় ভুল আছে কিনা দেখলে কি আপনার আপত্তি আছে?",
          slotValues: { DOING: "checking this for errors" },
          topicArea: "work",
        },
        {
          en: "Would you mind taking a photo of us?",
          bn: "আমাদের একটা ছবি তুললে কি আপনার আপত্তি আছে?",
          slotValues: { DOING: "taking a photo of us" },
          topicArea: "travel",
        },
        {
          en: "Would you mind lowering your voice?",
          bn: "আপনার গলার স্বর একটু নামালে কি আপত্তি আছে?",
          slotValues: { DOING: "lowering your voice" },
          topicArea: "daily_life",
        },
        {
          en: "Would you mind trying this on?",
          bn: "এটা পরে দেখলে কি আপনার আপত্তি আছে?",
          slotValues: { DOING: "trying this on" },
          topicArea: "shopping",
        },
        {
          en: "Would you mind giving me a hand?",
          bn: "আমাকে একটু সাহায্য করলে কি আপনার আপত্তি আছে?",
          slotValues: { DOING: "giving me a hand" },
          topicArea: "daily_life",
        },
        {
          en: "Would you mind filling out this form?",
          bn: "এই ফর্মটি পূরণ করলে কি আপনার আপত্তি আছে?",
          slotValues: { DOING: "filling out this form" },
          topicArea: "health",
        },
        {
          en: "Would you mind not smoking here?",
          bn: "এখানে ধূমপান না করলে কি আপনার আপত্তি আছে?",
          slotValues: { DOING: "not smoking here" },
          topicArea: "health",
        },
      ],
      formality: "polite",
      difficulty: "beginner",
      usageNote:
        "Very polite. Note: a positive answer is 'No, not at all' (meaning 'I don't mind doing it').",
      usageNote_bn:
        "খুব বিনয়ী। লক্ষ্য করুন: হ্যাঁ-সূচক উত্তর হলো 'No, not at all' (মানে 'আমার কোনো আপত্তি নেই')।",
      combinableWith: ["A3.1"],
      responsePatterns: ["B3.2"],
      banglaStructureMap:
        "[DOING] (Gerund phrase) + করলে কি (Conditional + Question) + আপনার আপত্তি আছে (Possessor + Objection)?",
    },
    {
      id: "A3.3",
      formula: "I need you to [ACTION]",
      formula_bn: "তোমাকে [কাজ] করতে হবে",
      patternName: "Direct Instruction",
      patternName_bn: "সরাসরি নির্দেশনা",
      slots: [
        {
          name: "ACTION",
          description:
            "A base-form verb phrase that you need the other person to perform",
          description_bn:
            "একটি মূল-রূপ ক্রিয়া পদবন্ধ যা আপনি অন্য ব্যক্তিকে করতে চান",
          acceptedTypes: ["verb"],
          examples: [
            "finish this by tomorrow",
            "listen carefully",
            "sign here",
          ],
        },
      ],
      examples: [
        {
          en: "I need you to finish this by tomorrow.",
          bn: "তোমাকে এটা আগামীকালের মধ্যে শেষ করতে হবে।",
          slotValues: { ACTION: "finish this by tomorrow" },
          topicArea: "work",
        },
        {
          en: "I need you to listen carefully.",
          bn: "তোমাকে মনোযোগ দিয়ে শুনতে হবে।",
          slotValues: { ACTION: "listen carefully" },
          topicArea: "education",
        },
        {
          en: "I need you to sign here.",
          bn: "তোমাকে এখানে সই করতে হবে।",
          slotValues: { ACTION: "sign here" },
          topicArea: "work",
        },
        {
          en: "I need you to stay calm.",
          bn: "তোমাকে শান্ত থাকতে হবে।",
          slotValues: { ACTION: "stay calm" },
          topicArea: "health",
        },
        {
          en: "I need you to call me when you arrive.",
          bn: "তোমাকে পৌঁছানোর পর আমাকে ফোন করতে হবে।",
          slotValues: { ACTION: "call me when you arrive" },
          topicArea: "travel",
        },
        {
          en: "I need you to pick up some groceries.",
          bn: "তোমাকে কিছু মুদিখানার জিনিস কিনে আনতে হবে।",
          slotValues: { ACTION: "pick up some groceries" },
          topicArea: "shopping",
        },
        {
          en: "I need you to be honest with me.",
          bn: "তোমাকে আমার সাথে সৎ থাকতে হবে।",
          slotValues: { ACTION: "be honest with me" },
          topicArea: "relationships",
        },
        {
          en: "I need you to prepare the presentation.",
          bn: "তোমাকে প্রেজেন্টেশনটি তৈরি করতে হবে।",
          slotValues: { ACTION: "prepare the presentation" },
          topicArea: "work",
        },
        {
          en: "I need you to take this medicine.",
          bn: "তোমাকে এই ওষুধটা খেতে হবে।",
          slotValues: { ACTION: "take this medicine" },
          topicArea: "health",
        },
        {
          en: "I need you to pay attention.",
          bn: "তোমাকে মনোযোগ দিতে হবে।",
          slotValues: { ACTION: "pay attention" },
          topicArea: "education",
        },
        {
          en: "I need you to clean your room.",
          bn: "তোমাকে তোমার ঘর পরিষ্কার করতে হবে।",
          slotValues: { ACTION: "clean your room" },
          topicArea: "daily_life",
        },
        {
          en: "I need you to book the hotel.",
          bn: "তোমাকে হোটেল বুক করতে হবে।",
          slotValues: { ACTION: "book the hotel" },
          topicArea: "travel",
        },
        {
          en: "I need you to try harder.",
          bn: "তোমাকে আরও চেষ্টা করতে হবে।",
          slotValues: { ACTION: "try harder" },
          topicArea: "education",
        },
        {
          en: "I need you to return this item.",
          bn: "তোমাকে এই জিনিসটা ফেরত দিতে হবে।",
          slotValues: { ACTION: "return this item" },
          topicArea: "shopping",
        },
        {
          en: "I need you to trust me.",
          bn: "তোমাকে আমাকে বিশ্বাস করতে হবে।",
          slotValues: { ACTION: "trust me" },
          topicArea: "relationships",
        },
      ],
      formality: "casual",
      difficulty: "beginner",
      usageNote:
        "Direct and firm. Can sound commanding. Best used when urgency is implied or in parent-child / boss-employee contexts.",
      usageNote_bn:
        "সরাসরি এবং দৃঢ়। আদেশের মতো শোনাতে পারে। জরুরি পরিস্থিতিতে বা বাবা-মা-সন্তান / বস-কর্মচারী প্রসঙ্গে সবচেয়ে ভালো।",
      combinableWith: ["A1.2"],
      responsePatterns: ["B3.1"],
      banglaStructureMap:
        "তোমাকে (Object) + [ACTION] (Verb phrase) + করতে হবে (Obligation)",
    },
    {
      id: "A3.4",
      formula: "Could you please [ACTION]?",
      formula_bn: "আপনি কি দয়া করে [কাজ] করতে পারবেন?",
      patternName: "Polite Request with Please",
      patternName_bn: "দয়া করে সহ বিনয়ী অনুরোধ",
      slots: [
        {
          name: "ACTION",
          description: "A base-form verb phrase describing the requested action",
          description_bn:
            "একটি মূল-রূপ ক্রিয়া পদবন্ধ যা অনুরোধকৃত কাজটি বর্ণনা করে",
          acceptedTypes: ["verb"],
          examples: [
            "send me the details",
            "wait a moment",
            "lower your voice",
          ],
        },
      ],
      examples: [
        {
          en: "Could you please send me the details?",
          bn: "আপনি কি দয়া করে আমাকে বিস্তারিত পাঠাতে পারবেন?",
          slotValues: { ACTION: "send me the details" },
          topicArea: "work",
        },
        {
          en: "Could you please wait a moment?",
          bn: "আপনি কি দয়া করে একটু অপেক্ষা করতে পারবেন?",
          slotValues: { ACTION: "wait a moment" },
          topicArea: "daily_life",
        },
        {
          en: "Could you please lower your voice?",
          bn: "আপনি কি দয়া করে আপনার গলার স্বর নামাতে পারবেন?",
          slotValues: { ACTION: "lower your voice" },
          topicArea: "daily_life",
        },
        {
          en: "Could you please show me the way?",
          bn: "আপনি কি দয়া করে আমাকে রাস্তা দেখাতে পারবেন?",
          slotValues: { ACTION: "show me the way" },
          topicArea: "travel",
        },
        {
          en: "Could you please pass me the menu?",
          bn: "আপনি কি দয়া করে মেনুটা আমাকে দিতে পারবেন?",
          slotValues: { ACTION: "pass me the menu" },
          topicArea: "food",
        },
        {
          en: "Could you please review my work?",
          bn: "আপনি কি দয়া করে আমার কাজটি পর্যালোচনা করতে পারবেন?",
          slotValues: { ACTION: "review my work" },
          topicArea: "work",
        },
        {
          en: "Could you please explain this again?",
          bn: "আপনি কি দয়া করে এটা আবার ব্যাখ্যা করতে পারবেন?",
          slotValues: { ACTION: "explain this again" },
          topicArea: "education",
        },
        {
          en: "Could you please call back later?",
          bn: "আপনি কি দয়া করে পরে আবার ফোন করতে পারবেন?",
          slotValues: { ACTION: "call back later" },
          topicArea: "relationships",
        },
        {
          en: "Could you please check my prescription?",
          bn: "আপনি কি দয়া করে আমার প্রেসক্রিপশনটি দেখতে পারবেন?",
          slotValues: { ACTION: "check my prescription" },
          topicArea: "health",
        },
        {
          en: "Could you please gift-wrap this?",
          bn: "আপনি কি দয়া করে এটা উপহার মোড়কে দিতে পারবেন?",
          slotValues: { ACTION: "gift-wrap this" },
          topicArea: "shopping",
        },
        {
          en: "Could you please take a look at this?",
          bn: "আপনি কি দয়া করে এটা একটু দেখতে পারবেন?",
          slotValues: { ACTION: "take a look at this" },
          topicArea: "work",
        },
        {
          en: "Could you please book a taxi for me?",
          bn: "আপনি কি দয়া করে আমার জন্য একটা ট্যাক্সি বুক করতে পারবেন?",
          slotValues: { ACTION: "book a taxi for me" },
          topicArea: "travel",
        },
        {
          en: "Could you please bring me some water?",
          bn: "আপনি কি দয়া করে আমাকে কিছু পানি আনতে পারবেন?",
          slotValues: { ACTION: "bring me some water" },
          topicArea: "food",
        },
        {
          en: "Could you please keep this a secret?",
          bn: "আপনি কি দয়া করে এটা গোপন রাখতে পারবেন?",
          slotValues: { ACTION: "keep this a secret" },
          topicArea: "relationships",
        },
        {
          en: "Could you please schedule a follow-up?",
          bn: "আপনি কি দয়া করে একটি ফলো-আপ নির্ধারণ করতে পারবেন?",
          slotValues: { ACTION: "schedule a follow-up" },
          topicArea: "health",
        },
      ],
      formality: "polite",
      difficulty: "beginner",
      usageNote:
        "Adding 'please' to 'could you' makes it extra polite. Suitable for most situations.",
      usageNote_bn:
        "'could you'-এর সাথে 'please' যোগ করলে এটি আরও বিনয়ী হয়। বেশিরভাগ পরিস্থিতিতে উপযুক্ত।",
      combinableWith: ["A3.1", "A3.2"],
      responsePatterns: ["B3.1"],
      banglaStructureMap:
        "আপনি কি দয়া করে (Subject + Question + Please) + [ACTION] (Verb phrase) + করতে পারবেন (Ability)?",
    },
    {
      id: "A3.5",
      formula: "I was wondering if you could [ACTION]",
      formula_bn: "আমি ভাবছিলাম আপনি কি [কাজ] করতে পারবেন",
      patternName: "Very Polite / Tentative Request",
      patternName_bn: "অত্যন্ত বিনয়ী / দ্বিধাপূর্ণ অনুরোধ",
      slots: [
        {
          name: "ACTION",
          description: "A base-form verb phrase describing the requested action",
          description_bn:
            "একটি মূল-রূপ ক্রিয়া পদবন্ধ যা অনুরোধকৃত কাজটি বর্ণনা করে",
          acceptedTypes: ["verb"],
          examples: [
            "give me a hand",
            "write me a recommendation",
            "cover my shift",
          ],
        },
      ],
      examples: [
        {
          en: "I was wondering if you could give me a hand.",
          bn: "আমি ভাবছিলাম আপনি কি আমাকে একটু সাহায্য করতে পারবেন।",
          slotValues: { ACTION: "give me a hand" },
          topicArea: "daily_life",
        },
        {
          en: "I was wondering if you could write me a recommendation.",
          bn: "আমি ভাবছিলাম আপনি কি আমার জন্য একটি সুপারিশপত্র লিখতে পারবেন।",
          slotValues: { ACTION: "write me a recommendation" },
          topicArea: "education",
        },
        {
          en: "I was wondering if you could cover my shift.",
          bn: "আমি ভাবছিলাম আপনি কি আমার শিফট সামলাতে পারবেন।",
          slotValues: { ACTION: "cover my shift" },
          topicArea: "work",
        },
        {
          en: "I was wondering if you could lend me some money.",
          bn: "আমি ভাবছিলাম আপনি কি আমাকে কিছু টাকা ধার দিতে পারবেন।",
          slotValues: { ACTION: "lend me some money" },
          topicArea: "daily_life",
        },
        {
          en: "I was wondering if you could drop me off at the station.",
          bn: "আমি ভাবছিলাম আপনি কি আমাকে স্টেশনে নামিয়ে দিতে পারবেন।",
          slotValues: { ACTION: "drop me off at the station" },
          topicArea: "travel",
        },
        {
          en: "I was wondering if you could proofread my essay.",
          bn: "আমি ভাবছিলাম আপনি কি আমার প্রবন্ধটি প্রুফরিড করতে পারবেন।",
          slotValues: { ACTION: "proofread my essay" },
          topicArea: "education",
        },
        {
          en: "I was wondering if you could recommend a specialist.",
          bn: "আমি ভাবছিলাম আপনি কি একজন বিশেষজ্ঞ সুপারিশ করতে পারবেন।",
          slotValues: { ACTION: "recommend a specialist" },
          topicArea: "health",
        },
        {
          en: "I was wondering if you could help me choose a gift.",
          bn: "আমি ভাবছিলাম আপনি কি আমাকে একটি উপহার বাছাই করতে সাহায্য করতে পারবেন।",
          slotValues: { ACTION: "help me choose a gift" },
          topicArea: "shopping",
        },
        {
          en: "I was wondering if you could make an exception.",
          bn: "আমি ভাবছিলাম আপনি কি একটু ব্যতিক্রম করতে পারবেন।",
          slotValues: { ACTION: "make an exception" },
          topicArea: "work",
        },
        {
          en: "I was wondering if you could join us for dinner.",
          bn: "আমি ভাবছিলাম আপনি কি আমাদের সাথে রাতের খাবারে যোগ দিতে পারবেন।",
          slotValues: { ACTION: "join us for dinner" },
          topicArea: "food",
        },
        {
          en: "I was wondering if you could forgive me.",
          bn: "আমি ভাবছিলাম আপনি কি আমাকে ক্ষমা করতে পারবেন।",
          slotValues: { ACTION: "forgive me" },
          topicArea: "relationships",
        },
        {
          en: "I was wondering if you could look after my cat.",
          bn: "আমি ভাবছিলাম আপনি কি আমার বিড়ালটির দেখাশোনা করতে পারবেন।",
          slotValues: { ACTION: "look after my cat" },
          topicArea: "daily_life",
        },
        {
          en: "I was wondering if you could change my appointment.",
          bn: "আমি ভাবছিলাম আপনি কি আমার অ্যাপয়েন্টমেন্ট পরিবর্তন করতে পারবেন।",
          slotValues: { ACTION: "change my appointment" },
          topicArea: "health",
        },
        {
          en: "I was wondering if you could guide me through the process.",
          bn: "আমি ভাবছিলাম আপনি কি আমাকে প্রক্রিয়াটির মধ্য দিয়ে গাইড করতে পারবেন।",
          slotValues: { ACTION: "guide me through the process" },
          topicArea: "work",
        },
        {
          en: "I was wondering if you could help me find a good hotel.",
          bn: "আমি ভাবছিলাম আপনি কি আমাকে একটা ভালো হোটেল খুঁজে পেতে সাহায্য করতে পারবেন।",
          slotValues: { ACTION: "help me find a good hotel" },
          topicArea: "travel",
        },
      ],
      formality: "very_formal",
      difficulty: "beginner",
      usageNote:
        "The past continuous ('I was wondering') creates distance and sounds very tentative and polite. Great for requests that might inconvenience someone.",
      usageNote_bn:
        "অতীত চলমান কাল ('I was wondering') দূরত্ব তৈরি করে এবং খুব দ্বিধাপূর্ণ ও বিনয়ী শোনায়। যে অনুরোধ কারো অসুবিধা করতে পারে তার জন্য দারুণ।",
      combinableWith: ["A3.4"],
      responsePatterns: ["B3.1"],
      banglaStructureMap:
        "আমি ভাবছিলাম (Subject + Past Continuous) + আপনি কি (Subject + Question) + [ACTION] (Verb phrase) + করতে পারবেন (Ability)",
    },
    {
      id: "A3.6",
      formula: "Could you do me a favor and [ACTION]?",
      formula_bn: "তুমি কি আমাকে একটু সাহায্য করবে এবং [কাজ] করবে?",
      patternName: "Favor-Based Request",
      patternName_bn: "সাহায্যভিত্তিক অনুরোধ",
      slots: [
        {
          name: "ACTION",
          description:
            "A base-form verb phrase describing the favor you are asking for",
          description_bn:
            "একটি মূল-রূপ ক্রিয়া পদবন্ধ যা আপনি যে সাহায্য চাইছেন তা বর্ণনা করে",
          acceptedTypes: ["verb"],
          examples: [
            "pick up my package",
            "cover my shift",
            "proofread this",
          ],
        },
      ],
      examples: [
        {
          en: "Could you do me a favor and pick up my package?",
          bn: "তুমি কি আমাকে একটু সাহায্য করবে এবং আমার পার্সেলটা নিয়ে আসবে?",
          slotValues: { ACTION: "pick up my package" },
          topicArea: "daily_life",
        },
        {
          en: "Could you do me a favor and cover my shift?",
          bn: "তুমি কি আমাকে একটু সাহায্য করবে এবং আমার শিফট সামলাবে?",
          slotValues: { ACTION: "cover my shift" },
          topicArea: "work",
        },
        {
          en: "Could you do me a favor and proofread this?",
          bn: "তুমি কি আমাকে একটু সাহায্য করবে এবং এটা প্রুফরিড করবে?",
          slotValues: { ACTION: "proofread this" },
          topicArea: "education",
        },
        {
          en: "Could you do me a favor and drive me to the airport?",
          bn: "তুমি কি আমাকে একটু সাহায্য করবে এবং আমাকে এয়ারপোর্টে নিয়ে যাবে?",
          slotValues: { ACTION: "drive me to the airport" },
          topicArea: "travel",
        },
        {
          en: "Could you do me a favor and water my plants?",
          bn: "তুমি কি আমাকে একটু সাহায্য করবে এবং আমার গাছগুলোতে পানি দেবে?",
          slotValues: { ACTION: "water my plants" },
          topicArea: "daily_life",
        },
        {
          en: "Could you do me a favor and lend me your charger?",
          bn: "তুমি কি আমাকে একটু সাহায্য করবে এবং তোমার চার্জার ধার দেবে?",
          slotValues: { ACTION: "lend me your charger" },
          topicArea: "daily_life",
        },
        {
          en: "Could you do me a favor and grab me a coffee?",
          bn: "তুমি কি আমাকে একটু সাহায্য করবে এবং আমার জন্য একটা কফি আনবে?",
          slotValues: { ACTION: "grab me a coffee" },
          topicArea: "food",
        },
        {
          en: "Could you do me a favor and save me a seat?",
          bn: "তুমি কি আমাকে একটু সাহায্য করবে এবং আমার জন্য একটা সিট রাখবে?",
          slotValues: { ACTION: "save me a seat" },
          topicArea: "education",
        },
        {
          en: "Could you do me a favor and drop this off at the post office?",
          bn: "তুমি কি আমাকে একটু সাহায্য করবে এবং এটা পোস্ট অফিসে জমা দেবে?",
          slotValues: { ACTION: "drop this off at the post office" },
          topicArea: "daily_life",
        },
        {
          en: "Could you do me a favor and check on my mom?",
          bn: "তুমি কি আমাকে একটু সাহায্য করবে এবং আমার মায়ের খবর নেবে?",
          slotValues: { ACTION: "check on my mom" },
          topicArea: "relationships",
        },
        {
          en: "Could you do me a favor and return this book to the library?",
          bn: "তুমি কি আমাকে একটু সাহায্য করবে এবং এই বইটা লাইব্রেরিতে ফেরত দেবে?",
          slotValues: { ACTION: "return this book to the library" },
          topicArea: "education",
        },
        {
          en: "Could you do me a favor and carry this bag for me?",
          bn: "তুমি কি আমাকে একটু সাহায্য করবে এবং আমার জন্য এই ব্যাগটা বহন করবে?",
          slotValues: { ACTION: "carry this bag for me" },
          topicArea: "shopping",
        },
        {
          en: "Could you do me a favor and call the restaurant to confirm?",
          bn: "তুমি কি আমাকে একটু সাহায্য করবে এবং রেস্তোরাঁয় ফোন করে নিশ্চিত করবে?",
          slotValues: { ACTION: "call the restaurant to confirm" },
          topicArea: "food",
        },
        {
          en: "Could you do me a favor and pick up the kids from school?",
          bn: "তুমি কি আমাকে একটু সাহায্য করবে এবং বাচ্চাদের স্কুল থেকে নিয়ে আসবে?",
          slotValues: { ACTION: "pick up the kids from school" },
          topicArea: "relationships",
        },
        {
          en: "Could you do me a favor and remind me about the appointment?",
          bn: "তুমি কি আমাকে একটু সাহায্য করবে এবং অ্যাপয়েন্টমেন্টের কথা মনে করিয়ে দেবে?",
          slotValues: { ACTION: "remind me about the appointment" },
          topicArea: "health",
        },
      ],
      formality: "polite",
      difficulty: "beginner",
      usageNote:
        "This pattern frames the request as a personal favor, making it feel more considerate. The phrase 'do me a favor' softens the request.",
      usageNote_bn:
        "এই প্যাটার্ন অনুরোধটিকে ব্যক্তিগত সাহায্য হিসেবে উপস্থাপন করে, যা এটিকে আরও বিবেচনাপূর্ণ করে তোলে। 'do me a favor' বাক্যাংশটি অনুরোধকে নরম করে।",
      combinableWith: ["A3.4"],
      responsePatterns: ["B3.1"],
      banglaStructureMap:
        "তুমি কি আমাকে একটু সাহায্য করবে (Favor intro) + এবং (Conjunction) + [ACTION] (Verb phrase) + করবে? (Verb)",
    },
    {
      id: "A3.7",
      formula: "I'd really appreciate it if you could [ACTION]",
      formula_bn: "আমি সত্যিই কৃতজ্ঞ হবো যদি তুমি [কাজ] করতে পারো",
      patternName: "Grateful Request",
      patternName_bn: "কৃতজ্ঞতাপূর্ণ অনুরোধ",
      slots: [
        {
          name: "ACTION",
          description:
            "A base-form verb phrase describing the action you would be grateful for",
          description_bn:
            "একটি মূল-রূপ ক্রিয়া পদবন্ধ যা করলে আপনি কৃতজ্ঞ হবেন",
          acceptedTypes: ["verb"],
          examples: [
            "help me move",
            "send me the notes",
            "look into this",
          ],
        },
      ],
      examples: [
        {
          en: "I'd really appreciate it if you could help me move.",
          bn: "আমি সত্যিই কৃতজ্ঞ হবো যদি তুমি আমাকে বাসা বদল করতে সাহায্য করতে পারো।",
          slotValues: { ACTION: "help me move" },
          topicArea: "daily_life",
        },
        {
          en: "I'd really appreciate it if you could send me the notes.",
          bn: "আমি সত্যিই কৃতজ্ঞ হবো যদি তুমি আমাকে নোটসগুলো পাঠাতে পারো।",
          slotValues: { ACTION: "send me the notes" },
          topicArea: "education",
        },
        {
          en: "I'd really appreciate it if you could look into this.",
          bn: "আমি সত্যিই কৃতজ্ঞ হবো যদি তুমি এটা দেখতে পারো।",
          slotValues: { ACTION: "look into this" },
          topicArea: "work",
        },
        {
          en: "I'd really appreciate it if you could give me a ride home.",
          bn: "আমি সত্যিই কৃতজ্ঞ হবো যদি তুমি আমাকে বাড়ি পৌঁছে দিতে পারো।",
          slotValues: { ACTION: "give me a ride home" },
          topicArea: "travel",
        },
        {
          en: "I'd really appreciate it if you could keep this between us.",
          bn: "আমি সত্যিই কৃতজ্ঞ হবো যদি তুমি এটা আমাদের মধ্যে রাখতে পারো।",
          slotValues: { ACTION: "keep this between us" },
          topicArea: "relationships",
        },
        {
          en: "I'd really appreciate it if you could review my report.",
          bn: "আমি সত্যিই কৃতজ্ঞ হবো যদি তুমি আমার রিপোর্ট পর্যালোচনা করতে পারো।",
          slotValues: { ACTION: "review my report" },
          topicArea: "work",
        },
        {
          en: "I'd really appreciate it if you could recommend a good doctor.",
          bn: "আমি সত্যিই কৃতজ্ঞ হবো যদি তুমি একজন ভালো ডাক্তার সুপারিশ করতে পারো।",
          slotValues: { ACTION: "recommend a good doctor" },
          topicArea: "health",
        },
        {
          en: "I'd really appreciate it if you could pick up some groceries.",
          bn: "আমি সত্যিই কৃতজ্ঞ হবো যদি তুমি কিছু মুদিখানার জিনিস কিনে আনতে পারো।",
          slotValues: { ACTION: "pick up some groceries" },
          topicArea: "shopping",
        },
        {
          en: "I'd really appreciate it if you could babysit tonight.",
          bn: "আমি সত্যিই কৃতজ্ঞ হবো যদি তুমি আজ রাতে বাচ্চাদের দেখাশোনা করতে পারো।",
          slotValues: { ACTION: "babysit tonight" },
          topicArea: "relationships",
        },
        {
          en: "I'd really appreciate it if you could extend the deadline.",
          bn: "আমি সত্যিই কৃতজ্ঞ হবো যদি তুমি সময়সীমা বাড়াতে পারো।",
          slotValues: { ACTION: "extend the deadline" },
          topicArea: "work",
        },
        {
          en: "I'd really appreciate it if you could explain this topic again.",
          bn: "আমি সত্যিই কৃতজ্ঞ হবো যদি তুমি এই বিষয়টি আবার ব্যাখ্যা করতে পারো।",
          slotValues: { ACTION: "explain this topic again" },
          topicArea: "education",
        },
        {
          en: "I'd really appreciate it if you could bring me some soup.",
          bn: "আমি সত্যিই কৃতজ্ঞ হবো যদি তুমি আমার জন্য কিছু স্যুপ আনতে পারো।",
          slotValues: { ACTION: "bring me some soup" },
          topicArea: "food",
        },
        {
          en: "I'd really appreciate it if you could show me around the city.",
          bn: "আমি সত্যিই কৃতজ্ঞ হবো যদি তুমি আমাকে শহরটা ঘুরিয়ে দেখাতে পারো।",
          slotValues: { ACTION: "show me around the city" },
          topicArea: "travel",
        },
        {
          en: "I'd really appreciate it if you could fill in for me tomorrow.",
          bn: "আমি সত্যিই কৃতজ্ঞ হবো যদি তুমি আগামীকাল আমার হয়ে কাজ করতে পারো।",
          slotValues: { ACTION: "fill in for me tomorrow" },
          topicArea: "work",
        },
        {
          en: "I'd really appreciate it if you could check my blood pressure.",
          bn: "আমি সত্যিই কৃতজ্ঞ হবো যদি তুমি আমার রক্তচাপ পরীক্ষা করতে পারো।",
          slotValues: { ACTION: "check my blood pressure" },
          topicArea: "health",
        },
      ],
      formality: "very_formal",
      difficulty: "beginner",
      usageNote:
        "This is an extremely polite way to make a request. Expressing gratitude in advance makes the listener feel valued and more willing to help.",
      usageNote_bn:
        "এটি অনুরোধ করার অত্যন্ত বিনয়ী উপায়। আগে থেকে কৃতজ্ঞতা প্রকাশ করলে শ্রোতা মূল্যবান অনুভব করেন এবং সাহায্য করতে আরও আগ্রহী হন।",
      combinableWith: ["A3.5"],
      responsePatterns: ["B3.1"],
      banglaStructureMap:
        "আমি সত্যিই কৃতজ্ঞ হবো (Grateful intro) + যদি তুমি (If + Subject) + [ACTION] (Verb phrase) + করতে পারো (Ability)",
    },
  ],
};
