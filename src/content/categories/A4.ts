import { PatternCategory } from "@/types/pattern";

export const categoryA4: PatternCategory = {
  id: "A4",
  slug: "asking-for-permission",
  name: "Asking for Permission",
  name_bn: "অনুমতি চাওয়া",
  description:
    "Learn different ways to ask for permission, from casual to formal English.",
  description_bn:
    "সাধারণ থেকে আনুষ্ঠানিক ইংরেজিতে অনুমতি চাওয়ার বিভিন্ন উপায় শিখুন।",
  icon: "🚪",
  group: "A",
  groupName: "Wanting, Needing & Preferences",
  groupName_bn: "চাওয়া, প্রয়োজন এবং পছন্দ",
  difficulty: "beginner",
  prerequisites: ["A1"],
  patterns: [
    {
      id: "A4.1",
      formula: "Can I [ACTION]?",
      formula_bn: "আমি কি [কাজ] করতে পারি?",
      patternName: "Casual Permission",
      patternName_bn: "সাধারণ অনুমতি",
      slots: [
        {
          name: "ACTION",
          description: "A base-form verb phrase you want permission for",
          description_bn:
            "একটি মূল-রূপ ক্রিয়া পদবন্ধ যার জন্য আপনি অনুমতি চান",
          acceptedTypes: ["verb"],
          examples: ["sit here", "use your phone", "leave early"],
        },
      ],
      examples: [
        {
          en: "Can I sit here?",
          bn: "আমি কি এখানে বসতে পারি?",
          slotValues: { ACTION: "sit here" },
          topicArea: "daily_life",
        },
        {
          en: "Can I use your phone?",
          bn: "আমি কি তোমার ফোন ব্যবহার করতে পারি?",
          slotValues: { ACTION: "use your phone" },
          topicArea: "daily_life",
        },
        {
          en: "Can I leave early today?",
          bn: "আমি কি আজ তাড়াতাড়ি যেতে পারি?",
          slotValues: { ACTION: "leave early today" },
          topicArea: "work",
        },
        {
          en: "Can I try this on?",
          bn: "আমি কি এটা পরে দেখতে পারি?",
          slotValues: { ACTION: "try this on" },
          topicArea: "shopping",
        },
        {
          en: "Can I taste this?",
          bn: "আমি কি এটা চেখে দেখতে পারি?",
          slotValues: { ACTION: "taste this" },
          topicArea: "food",
        },
        {
          en: "Can I borrow your pen?",
          bn: "আমি কি তোমার কলমটা ধার নিতে পারি?",
          slotValues: { ACTION: "borrow your pen" },
          topicArea: "education",
        },
        {
          en: "Can I take a photo here?",
          bn: "আমি কি এখানে ছবি তুলতে পারি?",
          slotValues: { ACTION: "take a photo here" },
          topicArea: "travel",
        },
        {
          en: "Can I open the window?",
          bn: "আমি কি জানালাটা খুলতে পারি?",
          slotValues: { ACTION: "open the window" },
          topicArea: "daily_life",
        },
        {
          en: "Can I bring a friend?",
          bn: "আমি কি একজন বন্ধু আনতে পারি?",
          slotValues: { ACTION: "bring a friend" },
          topicArea: "relationships",
        },
        {
          en: "Can I see the doctor now?",
          bn: "আমি কি এখন ডাক্তার দেখাতে পারি?",
          slotValues: { ACTION: "see the doctor now" },
          topicArea: "health",
        },
        {
          en: "Can I pay by card?",
          bn: "আমি কি কার্ডে পেমেন্ট করতে পারি?",
          slotValues: { ACTION: "pay by card" },
          topicArea: "shopping",
        },
        {
          en: "Can I change my seat?",
          bn: "আমি কি আমার সিট পরিবর্তন করতে পারি?",
          slotValues: { ACTION: "change my seat" },
          topicArea: "travel",
        },
        {
          en: "Can I have a look at the answer?",
          bn: "আমি কি উত্তরটা দেখতে পারি?",
          slotValues: { ACTION: "have a look at the answer" },
          topicArea: "education",
        },
        {
          en: "Can I take a break?",
          bn: "আমি কি একটু বিরতি নিতে পারি?",
          slotValues: { ACTION: "take a break" },
          topicArea: "work",
        },
        {
          en: "Can I eat the last piece?",
          bn: "আমি কি শেষ টুকরোটা খেতে পারি?",
          slotValues: { ACTION: "eat the last piece" },
          topicArea: "food",
        },
      ],
      formality: "casual",
      difficulty: "beginner",
      usageNote:
        "The simplest way to ask permission. Common in everyday speech with friends, family, and familiar people.",
      usageNote_bn:
        "অনুমতি চাওয়ার সবচেয়ে সহজ উপায়। বন্ধু, পরিবার এবং পরিচিত মানুষদের সাথে দৈনন্দিন কথায় সাধারণ।",
      combinableWith: ["A4.4"],
      responsePatterns: ["B4.1"],
      banglaStructureMap:
        "আমি কি (Subject + Question) + [ACTION] (Verb phrase) + করতে পারি (Ability)?",
    },
    {
      id: "A4.2",
      formula: "Do you mind if I [ACTION]?",
      formula_bn: "আমি [কাজ] করলে কি আপনার আপত্তি আছে?",
      patternName: "Polite Permission Check",
      patternName_bn: "বিনয়ী অনুমতি যাচাই",
      slots: [
        {
          name: "ACTION",
          description:
            "A base-form verb phrase you want to check permission for",
          description_bn:
            "একটি মূল-রূপ ক্রিয়া পদবন্ধ যার জন্য আপনি অনুমতি যাচাই করতে চান",
          acceptedTypes: ["verb"],
          examples: ["sit here", "smoke", "turn on the AC"],
        },
      ],
      examples: [
        {
          en: "Do you mind if I sit here?",
          bn: "আমি এখানে বসলে কি আপনার আপত্তি আছে?",
          slotValues: { ACTION: "sit here" },
          topicArea: "daily_life",
        },
        {
          en: "Do you mind if I close the window?",
          bn: "আমি জানালাটা বন্ধ করলে কি আপনার আপত্তি আছে?",
          slotValues: { ACTION: "close the window" },
          topicArea: "daily_life",
        },
        {
          en: "Do you mind if I turn on the AC?",
          bn: "আমি এসি চালু করলে কি আপনার আপত্তি আছে?",
          slotValues: { ACTION: "turn on the AC" },
          topicArea: "daily_life",
        },
        {
          en: "Do you mind if I join you?",
          bn: "আমি আপনার সাথে যোগ দিলে কি আপত্তি আছে?",
          slotValues: { ACTION: "join you" },
          topicArea: "relationships",
        },
        {
          en: "Do you mind if I take a day off?",
          bn: "আমি একদিন ছুটি নিলে কি আপত্তি আছে?",
          slotValues: { ACTION: "take a day off" },
          topicArea: "work",
        },
        {
          en: "Do you mind if I order something different?",
          bn: "আমি ভিন্ন কিছু অর্ডার করলে কি আপত্তি আছে?",
          slotValues: { ACTION: "order something different" },
          topicArea: "food",
        },
        {
          en: "Do you mind if I record this lecture?",
          bn: "আমি এই লেকচারটি রেকর্ড করলে কি আপত্তি আছে?",
          slotValues: { ACTION: "record this lecture" },
          topicArea: "education",
        },
        {
          en: "Do you mind if I take a look around?",
          bn: "আমি একটু ঘুরে দেখলে কি আপত্তি আছে?",
          slotValues: { ACTION: "take a look around" },
          topicArea: "shopping",
        },
        {
          en: "Do you mind if I bring my luggage here?",
          bn: "আমি আমার লাগেজ এখানে আনলে কি আপত্তি আছে?",
          slotValues: { ACTION: "bring my luggage here" },
          topicArea: "travel",
        },
        {
          en: "Do you mind if I rest for a while?",
          bn: "আমি কিছুক্ষণ বিশ্রাম নিলে কি আপত্তি আছে?",
          slotValues: { ACTION: "rest for a while" },
          topicArea: "health",
        },
        {
          en: "Do you mind if I use the bathroom?",
          bn: "আমি বাথরুম ব্যবহার করলে কি আপত্তি আছে?",
          slotValues: { ACTION: "use the bathroom" },
          topicArea: "daily_life",
        },
        {
          en: "Do you mind if I invite a few friends?",
          bn: "আমি কয়েকজন বন্ধু দাওয়াত দিলে কি আপত্তি আছে?",
          slotValues: { ACTION: "invite a few friends" },
          topicArea: "relationships",
        },
        {
          en: "Do you mind if I leave the meeting early?",
          bn: "আমি মিটিং থেকে তাড়াতাড়ি চলে গেলে কি আপত্তি আছে?",
          slotValues: { ACTION: "leave the meeting early" },
          topicArea: "work",
        },
        {
          en: "Do you mind if I take the last samosa?",
          bn: "আমি শেষ সমুচাটা নিলে কি আপত্তি আছে?",
          slotValues: { ACTION: "take the last samosa" },
          topicArea: "food",
        },
        {
          en: "Do you mind if I ask a personal question?",
          bn: "আমি একটি ব্যক্তিগত প্রশ্ন করলে কি আপত্তি আছে?",
          slotValues: { ACTION: "ask a personal question" },
          topicArea: "relationships",
        },
      ],
      formality: "polite",
      difficulty: "beginner",
      usageNote:
        "Polite way to ask permission. Remember: 'No, I don't mind' means 'Go ahead'. 'Yes, I do mind' means 'Please don't'.",
      usageNote_bn:
        "অনুমতি চাওয়ার বিনয়ী উপায়। মনে রাখুন: 'No, I don't mind' মানে 'করুন'। 'Yes, I do mind' মানে 'দয়া করে করবেন না'।",
      combinableWith: ["A4.1"],
      responsePatterns: ["B4.2"],
      banglaStructureMap:
        "আমি (Subject) + [ACTION] (Verb phrase) + করলে কি (Conditional + Question) + আপনার আপত্তি আছে (Objection)?",
    },
    {
      id: "A4.3",
      formula: "Would it be alright if I [ACTION+ED]?",
      formula_bn: "[কাজ] করলে কি ঠিক হবে?",
      patternName: "Tentative Permission Request",
      patternName_bn: "দ্বিধাপূর্ণ অনুমতির অনুরোধ",
      slots: [
        {
          name: "ACTION+ED",
          description:
            "A past-tense verb phrase (subjunctive mood for hypothetical permission)",
          description_bn:
            "একটি অতীতকালের ক্রিয়া পদবন্ধ (কল্পনামূলক অনুমতির জন্য সাবজাংটিভ মুড)",
          acceptedTypes: ["verb"],
          examples: ["came a bit late", "used your computer", "stayed longer"],
        },
      ],
      examples: [
        {
          en: "Would it be alright if I came a bit late?",
          bn: "আমি একটু দেরিতে আসলে কি ঠিক হবে?",
          slotValues: { "ACTION+ED": "came a bit late" },
          topicArea: "work",
        },
        {
          en: "Would it be alright if I used your computer?",
          bn: "আমি আপনার কম্পিউটার ব্যবহার করলে কি ঠিক হবে?",
          slotValues: { "ACTION+ED": "used your computer" },
          topicArea: "daily_life",
        },
        {
          en: "Would it be alright if I stayed a little longer?",
          bn: "আমি আরেকটু থাকলে কি ঠিক হবে?",
          slotValues: { "ACTION+ED": "stayed a little longer" },
          topicArea: "relationships",
        },
        {
          en: "Would it be alright if I brought my child?",
          bn: "আমি আমার বাচ্চাকে নিয়ে আসলে কি ঠিক হবে?",
          slotValues: { "ACTION+ED": "brought my child" },
          topicArea: "daily_life",
        },
        {
          en: "Would it be alright if I worked from home tomorrow?",
          bn: "আমি আগামীকাল বাসা থেকে কাজ করলে কি ঠিক হবে?",
          slotValues: { "ACTION+ED": "worked from home tomorrow" },
          topicArea: "work",
        },
        {
          en: "Would it be alright if I ordered dessert?",
          bn: "আমি ডেজার্ট অর্ডার করলে কি ঠিক হবে?",
          slotValues: { "ACTION+ED": "ordered dessert" },
          topicArea: "food",
        },
        {
          en: "Would it be alright if I submitted the assignment on Monday?",
          bn: "আমি সোমবার অ্যাসাইনমেন্ট জমা দিলে কি ঠিক হবে?",
          slotValues: { "ACTION+ED": "submitted the assignment on Monday" },
          topicArea: "education",
        },
        {
          en: "Would it be alright if I returned this tomorrow?",
          bn: "আমি এটা আগামীকাল ফেরত দিলে কি ঠিক হবে?",
          slotValues: { "ACTION+ED": "returned this tomorrow" },
          topicArea: "shopping",
        },
        {
          en: "Would it be alright if I checked in early?",
          bn: "আমি আগে চেক ইন করলে কি ঠিক হবে?",
          slotValues: { "ACTION+ED": "checked in early" },
          topicArea: "travel",
        },
        {
          en: "Would it be alright if I rescheduled the appointment?",
          bn: "আমি অ্যাপয়েন্টমেন্ট পুনঃনির্ধারণ করলে কি ঠিক হবে?",
          slotValues: { "ACTION+ED": "rescheduled the appointment" },
          topicArea: "health",
        },
        {
          en: "Would it be alright if I took a quick shower?",
          bn: "আমি তাড়াতাড়ি একটু গোসল করে নিলে কি ঠিক হবে?",
          slotValues: { "ACTION+ED": "took a quick shower" },
          topicArea: "daily_life",
        },
        {
          en: "Would it be alright if I invited my sister?",
          bn: "আমি আমার বোনকে দাওয়াত দিলে কি ঠিক হবে?",
          slotValues: { "ACTION+ED": "invited my sister" },
          topicArea: "relationships",
        },
        {
          en: "Would it be alright if I left my bag here?",
          bn: "আমি আমার ব্যাগ এখানে রেখে গেলে কি ঠিক হবে?",
          slotValues: { "ACTION+ED": "left my bag here" },
          topicArea: "travel",
        },
        {
          en: "Would it be alright if I skipped the meeting?",
          bn: "আমি মিটিংটা বাদ দিলে কি ঠিক হবে?",
          slotValues: { "ACTION+ED": "skipped the meeting" },
          topicArea: "work",
        },
        {
          en: "Would it be alright if I changed the topic?",
          bn: "আমি বিষয় পরিবর্তন করলে কি ঠিক হবে?",
          slotValues: { "ACTION+ED": "changed the topic" },
          topicArea: "education",
        },
      ],
      formality: "formal",
      difficulty: "beginner",
      usageNote:
        "Uses the subjunctive/past tense to sound hypothetical and extra polite. Great for delicate situations.",
      usageNote_bn:
        "কল্পনামূলক এবং অতিরিক্ত বিনয়ী শোনাতে সাবজাংটিভ/অতীতকাল ব্যবহার করে। সংবেদনশীল পরিস্থিতির জন্য দারুণ।",
      combinableWith: ["A4.2"],
      responsePatterns: ["B4.1"],
      banglaStructureMap:
        "আমি (Subject) + [ACTION+ED] (Past verb phrase) + করলে কি ঠিক হবে (Conditional + Acceptability)?",
    },
    {
      id: "A4.4",
      formula: "Is it okay if I [ACTION]?",
      formula_bn: "আমি [কাজ] করলে কি ঠিক আছে?",
      patternName: "Casual Permission Check",
      patternName_bn: "সাধারণ অনুমতি যাচাই",
      slots: [
        {
          name: "ACTION",
          description: "A base-form verb phrase you want permission for",
          description_bn:
            "একটি মূল-রূপ ক্রিয়া পদবন্ধ যার জন্য আপনি অনুমতি চান",
          acceptedTypes: ["verb"],
          examples: ["park here", "eat at my desk", "come in"],
        },
      ],
      examples: [
        {
          en: "Is it okay if I park here?",
          bn: "আমি কি এখানে গাড়ি রাখলে ঠিক আছে?",
          slotValues: { ACTION: "park here" },
          topicArea: "daily_life",
        },
        {
          en: "Is it okay if I eat at my desk?",
          bn: "আমি কি আমার ডেস্কে খেলে ঠিক আছে?",
          slotValues: { ACTION: "eat at my desk" },
          topicArea: "work",
        },
        {
          en: "Is it okay if I come in?",
          bn: "আমি কি ভেতরে আসলে ঠিক আছে?",
          slotValues: { ACTION: "come in" },
          topicArea: "daily_life",
        },
        {
          en: "Is it okay if I share this with others?",
          bn: "আমি কি এটা অন্যদের সাথে শেয়ার করলে ঠিক আছে?",
          slotValues: { ACTION: "share this with others" },
          topicArea: "work",
        },
        {
          en: "Is it okay if I take some food to go?",
          bn: "আমি কি কিছু খাবার প্যাক করে নিয়ে গেলে ঠিক আছে?",
          slotValues: { ACTION: "take some food to go" },
          topicArea: "food",
        },
        {
          en: "Is it okay if I use a calculator?",
          bn: "আমি কি ক্যালকুলেটর ব্যবহার করলে ঠিক আছে?",
          slotValues: { ACTION: "use a calculator" },
          topicArea: "education",
        },
        {
          en: "Is it okay if I check out a bit later?",
          bn: "আমি কি একটু পরে চেক আউট করলে ঠিক আছে?",
          slotValues: { ACTION: "check out a bit later" },
          topicArea: "travel",
        },
        {
          en: "Is it okay if I lie down for a while?",
          bn: "আমি কি কিছুক্ষণ শুয়ে থাকলে ঠিক আছে?",
          slotValues: { ACTION: "lie down for a while" },
          topicArea: "health",
        },
        {
          en: "Is it okay if I call you later?",
          bn: "আমি কি তোমাকে পরে ফোন করলে ঠিক আছে?",
          slotValues: { ACTION: "call you later" },
          topicArea: "relationships",
        },
        {
          en: "Is it okay if I exchange this?",
          bn: "আমি কি এটা বদলালে ঠিক আছে?",
          slotValues: { ACTION: "exchange this" },
          topicArea: "shopping",
        },
        {
          en: "Is it okay if I turn off the TV?",
          bn: "আমি কি টিভি বন্ধ করলে ঠিক আছে?",
          slotValues: { ACTION: "turn off the TV" },
          topicArea: "daily_life",
        },
        {
          en: "Is it okay if I take a personal call?",
          bn: "আমি কি একটা ব্যক্তিগত ফোন রিসিভ করলে ঠিক আছে?",
          slotValues: { ACTION: "take a personal call" },
          topicArea: "work",
        },
        {
          en: "Is it okay if I bring my own food?",
          bn: "আমি কি নিজের খাবার আনলে ঠিক আছে?",
          slotValues: { ACTION: "bring my own food" },
          topicArea: "food",
        },
        {
          en: "Is it okay if I go out for a walk?",
          bn: "আমি কি হাঁটতে বের হলে ঠিক আছে?",
          slotValues: { ACTION: "go out for a walk" },
          topicArea: "health",
        },
        {
          en: "Is it okay if I ask the teacher?",
          bn: "আমি কি শিক্ষককে জিজ্ঞাসা করলে ঠিক আছে?",
          slotValues: { ACTION: "ask the teacher" },
          topicArea: "education",
        },
      ],
      formality: "casual",
      difficulty: "beginner",
      usageNote:
        "Friendly and casual. Slightly more considerate than 'Can I...' because it explicitly checks if the other person is okay with it.",
      usageNote_bn:
        "বন্ধুত্বপূর্ণ এবং সাধারণ। 'Can I...'-এর চেয়ে সামান্য বেশি বিবেচনাপূর্ণ কারণ এটি সরাসরি জিজ্ঞাসা করে অন্য ব্যক্তি সম্মত কিনা।",
      combinableWith: ["A4.1"],
      responsePatterns: ["B4.1"],
      banglaStructureMap:
        "আমি (Subject) + [ACTION] (Verb phrase) + করলে কি ঠিক আছে (Conditional + Acceptability)?",
    },
    {
      id: "A4.5",
      formula: "Am I allowed to [ACTION]?",
      formula_bn: "আমার কি [কাজ] করার অনুমতি আছে?",
      patternName: "Checking Rules/Regulations",
      patternName_bn: "নিয়ম-কানুন যাচাই",
      slots: [
        {
          name: "ACTION",
          description:
            "A base-form verb phrase you want to know if it's permitted",
          description_bn:
            "একটি মূল-রূপ ক্রিয়া পদবন্ধ যার অনুমতি আছে কিনা আপনি জানতে চান",
          acceptedTypes: ["verb"],
          examples: ["park here", "bring food inside", "enter without a pass"],
        },
      ],
      examples: [
        {
          en: "Am I allowed to park here?",
          bn: "আমার কি এখানে গাড়ি রাখার অনুমতি আছে?",
          slotValues: { ACTION: "park here" },
          topicArea: "daily_life",
        },
        {
          en: "Am I allowed to bring food inside?",
          bn: "আমার কি ভেতরে খাবার আনার অনুমতি আছে?",
          slotValues: { ACTION: "bring food inside" },
          topicArea: "food",
        },
        {
          en: "Am I allowed to use my phone during the exam?",
          bn: "আমার কি পরীক্ষার সময় ফোন ব্যবহারের অনুমতি আছে?",
          slotValues: { ACTION: "use my phone during the exam" },
          topicArea: "education",
        },
        {
          en: "Am I allowed to take photos in the museum?",
          bn: "আমার কি জাদুঘরে ছবি তোলার অনুমতি আছে?",
          slotValues: { ACTION: "take photos in the museum" },
          topicArea: "travel",
        },
        {
          en: "Am I allowed to work overtime?",
          bn: "আমার কি ওভারটাইম কাজ করার অনুমতি আছে?",
          slotValues: { ACTION: "work overtime" },
          topicArea: "work",
        },
        {
          en: "Am I allowed to visit the patient?",
          bn: "আমার কি রোগীকে দেখতে যাওয়ার অনুমতি আছে?",
          slotValues: { ACTION: "visit the patient" },
          topicArea: "health",
        },
        {
          en: "Am I allowed to haggle on the price?",
          bn: "আমার কি দাম নিয়ে দরাদরি করার অনুমতি আছে?",
          slotValues: { ACTION: "haggle on the price" },
          topicArea: "shopping",
        },
        {
          en: "Am I allowed to speak to the manager?",
          bn: "আমার কি ম্যানেজারের সাথে কথা বলার অনুমতি আছে?",
          slotValues: { ACTION: "speak to the manager" },
          topicArea: "work",
        },
        {
          en: "Am I allowed to bring my pet?",
          bn: "আমার কি আমার পোষা প্রাণী আনার অনুমতি আছে?",
          slotValues: { ACTION: "bring my pet" },
          topicArea: "travel",
        },
        {
          en: "Am I allowed to eat in the library?",
          bn: "আমার কি লাইব্রেরিতে খাওয়ার অনুমতি আছে?",
          slotValues: { ACTION: "eat in the library" },
          topicArea: "education",
        },
        {
          en: "Am I allowed to leave the hospital?",
          bn: "আমার কি হাসপাতাল ছাড়ার অনুমতি আছে?",
          slotValues: { ACTION: "leave the hospital" },
          topicArea: "health",
        },
        {
          en: "Am I allowed to return this after a week?",
          bn: "আমার কি এক সপ্তাহ পরে এটা ফেরত দেওয়ার অনুমতি আছে?",
          slotValues: { ACTION: "return this after a week" },
          topicArea: "shopping",
        },
        {
          en: "Am I allowed to stay here overnight?",
          bn: "আমার কি এখানে রাত কাটানোর অনুমতি আছে?",
          slotValues: { ACTION: "stay here overnight" },
          topicArea: "travel",
        },
        {
          en: "Am I allowed to cook in the room?",
          bn: "আমার কি রুমে রান্না করার অনুমতি আছে?",
          slotValues: { ACTION: "cook in the room" },
          topicArea: "daily_life",
        },
        {
          en: "Am I allowed to request a different partner?",
          bn: "আমার কি ভিন্ন সঙ্গী চাওয়ার অনুমতি আছে?",
          slotValues: { ACTION: "request a different partner" },
          topicArea: "relationships",
        },
      ],
      formality: "polite",
      difficulty: "beginner",
      usageNote:
        "Used when asking about rules, regulations, or official permissions. More about what's permitted than personal permission.",
      usageNote_bn:
        "নিয়ম-কানুন বা আনুষ্ঠানিক অনুমতি সম্পর্কে জিজ্ঞাসা করতে ব্যবহৃত হয়। ব্যক্তিগত অনুমতির চেয়ে কী অনুমোদিত তা নিয়ে বেশি।",
      combinableWith: ["A4.1", "A4.4"],
      responsePatterns: ["B4.1"],
      banglaStructureMap:
        "আমার কি (Possessor + Question) + [ACTION] (Verb phrase) + করার অনুমতি আছে (Permission + Existence)?",
    },
  ],
};
