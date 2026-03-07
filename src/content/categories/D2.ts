import { PatternCategory } from "@/types/pattern";

export const categoryD2: PatternCategory = {
  id: "D2",
  slug: "must-should-obligation",
  name: "What You Must/Should Do",
  name_bn: "আপনাকে কী করতে হবে/উচিত",
  description:
    "Learn how to express obligation, duty, and advice using must, should, and similar patterns.",
  description_bn:
    "must, should এবং অনুরূপ প্যাটার্ন ব্যবহার করে বাধ্যবাধকতা, কর্তব্য এবং পরামর্শ প্রকাশ করতে শিখুন।",
  icon: "📌",
  group: "D",
  groupName: "Ability, Obligation & Possibility",
  groupName_bn: "সক্ষমতা, বাধ্যবাধকতা এবং সম্ভাবনা",
  difficulty: "intermediate",
  patterns: [
    {
      id: "D2.1",
      formula: "I have to [ACTION]",
      formula_bn: "আমাকে [কাজ] করতে হবে",
      patternName: "External Obligation",
      patternName_bn: "বাহ্যিক বাধ্যবাধকতা",
      slots: [
        {
          name: "ACTION",
          description: "A base verb or verb phrase describing an obligation",
          description_bn: "একটি মূল ক্রিয়া বা ক্রিয়া পদবন্ধ যা একটি বাধ্যবাধকতা বর্ণনা করে",
          acceptedTypes: ["verb"],
          examples: ["go to work", "pay the bills", "finish this assignment"],
        },
      ],
      examples: [
        {
          en: "I have to go to work early tomorrow.",
          bn: "আমাকে আগামীকাল তাড়াতাড়ি কাজে যেতে হবে।",
          slotValues: { ACTION: "go to work early tomorrow" },
          topicArea: "work",
        },
        {
          en: "I have to pay the electricity bill.",
          bn: "আমাকে বিদ্যুৎ বিল দিতে হবে।",
          slotValues: { ACTION: "pay the electricity bill" },
          topicArea: "daily_life",
        },
        {
          en: "I have to finish this assignment by Friday.",
          bn: "আমাকে শুক্রবারের মধ্যে এই অ্যাসাইনমেন্ট শেষ করতে হবে।",
          slotValues: { ACTION: "finish this assignment by Friday" },
          topicArea: "education",
        },
        {
          en: "I have to take my medicine.",
          bn: "আমাকে ওষুধ খেতে হবে।",
          slotValues: { ACTION: "take my medicine" },
          topicArea: "health",
        },
        {
          en: "I have to renew my passport.",
          bn: "আমাকে পাসপোর্ট নবায়ন করতে হবে।",
          slotValues: { ACTION: "renew my passport" },
          topicArea: "travel",
        },
        {
          en: "I have to pick up the kids from school.",
          bn: "আমাকে স্কুল থেকে বাচ্চাদের নিয়ে আসতে হবে।",
          slotValues: { ACTION: "pick up the kids from school" },
          topicArea: "relationships",
        },
        {
          en: "I have to return this shirt.",
          bn: "আমাকে এই শার্টটা ফেরত দিতে হবে।",
          slotValues: { ACTION: "return this shirt" },
          topicArea: "shopping",
        },
        {
          en: "I have to submit the report today.",
          bn: "আমাকে আজ রিপোর্ট জমা দিতে হবে।",
          slotValues: { ACTION: "submit the report today" },
          topicArea: "work",
        },
        {
          en: "I have to cook dinner tonight.",
          bn: "আমাকে আজ রাতে রাতের খাবার রান্না করতে হবে।",
          slotValues: { ACTION: "cook dinner tonight" },
          topicArea: "food",
        },
        {
          en: "I have to study for the test.",
          bn: "আমাকে পরীক্ষার জন্য পড়াশোনা করতে হবে।",
          slotValues: { ACTION: "study for the test" },
          topicArea: "education",
        },
        {
          en: "I have to visit the dentist.",
          bn: "আমাকে দাঁতের ডাক্তারের কাছে যেতে হবে।",
          slotValues: { ACTION: "visit the dentist" },
          topicArea: "health",
        },
        {
          en: "I have to catch a flight at six.",
          bn: "আমাকে ছয়টায় ফ্লাইট ধরতে হবে।",
          slotValues: { ACTION: "catch a flight at six" },
          topicArea: "travel",
        },
        {
          en: "I have to call my parents.",
          bn: "আমাকে বাবা-মাকে ফোন করতে হবে।",
          slotValues: { ACTION: "call my parents" },
          topicArea: "relationships",
        },
        {
          en: "I have to clean the house before guests arrive.",
          bn: "আমাকে অতিথি আসার আগে ঘর পরিষ্কার করতে হবে।",
          slotValues: { ACTION: "clean the house before guests arrive" },
          topicArea: "daily_life",
        },
        {
          en: "I have to buy groceries on the way home.",
          bn: "আমাকে বাড়ি যাওয়ার পথে মুদি কিনতে হবে।",
          slotValues: { ACTION: "buy groceries on the way home" },
          topicArea: "shopping",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "'Have to' expresses external obligation—something required by rules, circumstances, or other people.",
      usageNote_bn:
        "'Have to' বাহ্যিক বাধ্যবাধকতা প্রকাশ করে—নিয়ম, পরিস্থিতি বা অন্য মানুষদের দ্বারা প্রয়োজনীয় কিছু।",
      combinableWith: ["D2.3"],
      banglaStructureMap:
        "আমাকে (Subject) + [ACTION] (Object) + করতে হবে (Verb)",
    },
    {
      id: "D2.2",
      formula: "I must [ACTION]",
      formula_bn: "আমাকে অবশ্যই [কাজ] করতে হবে",
      patternName: "Strong Obligation",
      patternName_bn: "জোরালো বাধ্যবাধকতা",
      slots: [
        {
          name: "ACTION",
          description: "A base verb or verb phrase describing a strong duty",
          description_bn: "একটি মূল ক্রিয়া বা ক্রিয়া পদবন্ধ যা জোরালো কর্তব্য বর্ণনা করে",
          acceptedTypes: ["verb"],
          examples: ["be on time", "tell the truth", "focus on my studies"],
        },
      ],
      examples: [
        {
          en: "I must be on time for the interview.",
          bn: "আমাকে অবশ্যই ইন্টারভিউয়ে সময়মতো পৌঁছাতে হবে।",
          slotValues: { ACTION: "be on time for the interview" },
          topicArea: "work",
        },
        {
          en: "I must tell the truth.",
          bn: "আমাকে অবশ্যই সত্যি কথা বলতে হবে।",
          slotValues: { ACTION: "tell the truth" },
          topicArea: "relationships",
        },
        {
          en: "I must focus on my studies.",
          bn: "আমাকে অবশ্যই পড়াশোনায় মনোযোগ দিতে হবে।",
          slotValues: { ACTION: "focus on my studies" },
          topicArea: "education",
        },
        {
          en: "I must drink more water.",
          bn: "আমাকে অবশ্যই বেশি পানি পান করতে হবে।",
          slotValues: { ACTION: "drink more water" },
          topicArea: "health",
        },
        {
          en: "I must remember to lock the door.",
          bn: "আমাকে অবশ্যই দরজা তালা দেওয়ার কথা মনে রাখতে হবে।",
          slotValues: { ACTION: "remember to lock the door" },
          topicArea: "daily_life",
        },
        {
          en: "I must not waste food.",
          bn: "আমাকে অবশ্যই খাবার নষ্ট করা চলবে না।",
          slotValues: { ACTION: "not waste food" },
          topicArea: "food",
        },
        {
          en: "I must get my visa before traveling.",
          bn: "আমাকে অবশ্যই ভ্রমণের আগে ভিসা পেতে হবে।",
          slotValues: { ACTION: "get my visa before traveling" },
          topicArea: "travel",
        },
        {
          en: "I must apologize to her.",
          bn: "আমাকে অবশ্যই তার কাছে ক্ষমা চাইতে হবে।",
          slotValues: { ACTION: "apologize to her" },
          topicArea: "relationships",
        },
        {
          en: "I must finish this project this week.",
          bn: "আমাকে অবশ্যই এই সপ্তাহে প্রকল্পটি শেষ করতে হবে।",
          slotValues: { ACTION: "finish this project this week" },
          topicArea: "work",
        },
        {
          en: "I must check the price before buying.",
          bn: "আমাকে অবশ্যই কেনার আগে দাম দেখতে হবে।",
          slotValues: { ACTION: "check the price before buying" },
          topicArea: "shopping",
        },
        {
          en: "I must exercise regularly.",
          bn: "আমাকে অবশ্যই নিয়মিত ব্যায়াম করতে হবে।",
          slotValues: { ACTION: "exercise regularly" },
          topicArea: "health",
        },
        {
          en: "I must read more books this year.",
          bn: "আমাকে অবশ্যই এই বছর আরও বই পড়তে হবে।",
          slotValues: { ACTION: "read more books this year" },
          topicArea: "education",
        },
        {
          en: "I must save money for emergencies.",
          bn: "আমাকে অবশ্যই জরুরি পরিস্থিতির জন্য টাকা সঞ্চয় করতে হবে।",
          slotValues: { ACTION: "save money for emergencies" },
          topicArea: "daily_life",
        },
        {
          en: "I must try this restaurant.",
          bn: "আমাকে অবশ্যই এই রেস্তোরাঁটি চেষ্টা করতে হবে।",
          slotValues: { ACTION: "try this restaurant" },
          topicArea: "food",
        },
        {
          en: "I must book the hotel early.",
          bn: "আমাকে অবশ্যই আগে থেকে হোটেল বুক করতে হবে।",
          slotValues: { ACTION: "book the hotel early" },
          topicArea: "travel",
        },
      ],
      formality: "polite",
      difficulty: "intermediate",
      usageNote:
        "'Must' expresses strong personal obligation or determination. It sounds more formal and emphatic than 'have to'.",
      usageNote_bn:
        "'Must' শক্তিশালী ব্যক্তিগত বাধ্যবাধকতা বা দৃঢ়তা প্রকাশ করে। এটি 'have to'-এর চেয়ে বেশি আনুষ্ঠানিক ও জোরালো শোনায়।",
      combinableWith: ["D2.1"],
      banglaStructureMap:
        "আমাকে অবশ্যই (Subject + Emphasis) + [ACTION] (Object) + করতে হবে (Verb)",
    },
    {
      id: "D2.3",
      formula: "I should [ACTION]",
      formula_bn: "আমার [কাজ] করা উচিত",
      patternName: "Giving Advice / Soft Obligation",
      patternName_bn: "পরামর্শ দেওয়া / মৃদু বাধ্যবাধকতা",
      slots: [
        {
          name: "ACTION",
          description: "A base verb or verb phrase describing an advisable action",
          description_bn: "একটি মূল ক্রিয়া বা ক্রিয়া পদবন্ধ যা পরামর্শযোগ্য কাজ বর্ণনা করে",
          acceptedTypes: ["verb"],
          examples: ["eat healthier", "call her", "start saving"],
        },
      ],
      examples: [
        {
          en: "I should eat healthier.",
          bn: "আমার স্বাস্থ্যকর খাবার খাওয়া উচিত।",
          slotValues: { ACTION: "eat healthier" },
          topicArea: "health",
        },
        {
          en: "I should call her back.",
          bn: "আমার তাকে ফোন করা উচিত।",
          slotValues: { ACTION: "call her back" },
          topicArea: "relationships",
        },
        {
          en: "I should start saving money.",
          bn: "আমার টাকা জমানো শুরু করা উচিত।",
          slotValues: { ACTION: "start saving money" },
          topicArea: "daily_life",
        },
        {
          en: "I should apply for the job.",
          bn: "আমার চাকরিটার জন্য আবেদন করা উচিত।",
          slotValues: { ACTION: "apply for the job" },
          topicArea: "work",
        },
        {
          en: "I should study more for the exam.",
          bn: "আমার পরীক্ষার জন্য আরও পড়াশোনা করা উচিত।",
          slotValues: { ACTION: "study more for the exam" },
          topicArea: "education",
        },
        {
          en: "I should try the local food.",
          bn: "আমার স্থানীয় খাবার চেষ্টা করা উচিত।",
          slotValues: { ACTION: "try the local food" },
          topicArea: "food",
        },
        {
          en: "I should visit my grandparents more often.",
          bn: "আমার আরও বেশি দাদা-দাদিকে দেখতে যাওয়া উচিত।",
          slotValues: { ACTION: "visit my grandparents more often" },
          topicArea: "relationships",
        },
        {
          en: "I should go to bed early tonight.",
          bn: "আমার আজ রাতে তাড়াতাড়ি ঘুমাতে যাওয়া উচিত।",
          slotValues: { ACTION: "go to bed early tonight" },
          topicArea: "health",
        },
        {
          en: "I should compare prices before buying.",
          bn: "আমার কেনার আগে দাম তুলনা করা উচিত।",
          slotValues: { ACTION: "compare prices before buying" },
          topicArea: "shopping",
        },
        {
          en: "I should plan my trip in advance.",
          bn: "আমার আগে থেকে ভ্রমণের পরিকল্পনা করা উচিত।",
          slotValues: { ACTION: "plan my trip in advance" },
          topicArea: "travel",
        },
        {
          en: "I should take a break.",
          bn: "আমার বিরতি নেওয়া উচিত।",
          slotValues: { ACTION: "take a break" },
          topicArea: "work",
        },
        {
          en: "I should learn to cook.",
          bn: "আমার রান্না শেখা উচিত।",
          slotValues: { ACTION: "learn to cook" },
          topicArea: "food",
        },
        {
          en: "I should update my resume.",
          bn: "আমার জীবনবৃত্তান্ত আপডেট করা উচিত।",
          slotValues: { ACTION: "update my resume" },
          topicArea: "work",
        },
        {
          en: "I should read more about this topic.",
          bn: "আমার এই বিষয়ে আরও পড়া উচিত।",
          slotValues: { ACTION: "read more about this topic" },
          topicArea: "education",
        },
        {
          en: "I should walk instead of taking a rickshaw.",
          bn: "আমার রিকশা না নিয়ে হেঁটে যাওয়া উচিত।",
          slotValues: { ACTION: "walk instead of taking a rickshaw" },
          topicArea: "travel",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "'Should' gives advice or suggests the right thing to do. It's softer than 'must' or 'have to'.",
      usageNote_bn:
        "'Should' পরামর্শ দেয় বা সঠিক কাজের পরামর্শ দেয়। এটি 'must' বা 'have to'-এর চেয়ে নরম।",
      combinableWith: ["D2.5"],
      banglaStructureMap:
        "আমার (Subject) + [ACTION] (Object) + করা উচিত (Verb + Adj)",
    },
    {
      id: "D2.4",
      formula: "I'm supposed to [ACTION]",
      formula_bn: "আমার [কাজ] করার কথা",
      patternName: "Expected Obligation",
      patternName_bn: "প্রত্যাশিত বাধ্যবাধকতা",
      slots: [
        {
          name: "ACTION",
          description:
            "A base verb or verb phrase describing what is expected of you",
          description_bn:
            "একটি মূল ক্রিয়া বা ক্রিয়া পদবন্ধ যা আপনার কাছ থেকে প্রত্যাশিত",
          acceptedTypes: ["verb"],
          examples: ["be there at nine", "wear a uniform", "submit the form"],
        },
      ],
      examples: [
        {
          en: "I'm supposed to be there at nine.",
          bn: "আমার নয়টায় সেখানে থাকার কথা।",
          slotValues: { ACTION: "be there at nine" },
          topicArea: "work",
        },
        {
          en: "I'm supposed to wear a uniform.",
          bn: "আমার ইউনিফর্ম পরার কথা।",
          slotValues: { ACTION: "wear a uniform" },
          topicArea: "education",
        },
        {
          en: "I'm supposed to submit the form today.",
          bn: "আমার আজ ফর্মটি জমা দেওয়ার কথা।",
          slotValues: { ACTION: "submit the form today" },
          topicArea: "work",
        },
        {
          en: "I'm supposed to take this medicine twice a day.",
          bn: "আমার দিনে দুইবার এই ওষুধ খাওয়ার কথা।",
          slotValues: { ACTION: "take this medicine twice a day" },
          topicArea: "health",
        },
        {
          en: "I'm supposed to meet her at the café.",
          bn: "আমার তার সাথে ক্যাফেতে দেখা করার কথা।",
          slotValues: { ACTION: "meet her at the café" },
          topicArea: "relationships",
        },
        {
          en: "I'm supposed to bring snacks to the party.",
          bn: "আমার পার্টিতে নাস্তা নিয়ে যাওয়ার কথা।",
          slotValues: { ACTION: "bring snacks to the party" },
          topicArea: "food",
        },
        {
          en: "I'm supposed to check out by noon.",
          bn: "আমার দুপুরের মধ্যে চেক আউট করার কথা।",
          slotValues: { ACTION: "check out by noon" },
          topicArea: "travel",
        },
        {
          en: "I'm supposed to follow the dress code.",
          bn: "আমার ড্রেস কোড মানার কথা।",
          slotValues: { ACTION: "follow the dress code" },
          topicArea: "work",
        },
        {
          en: "I'm supposed to fast during Ramadan.",
          bn: "আমার রমজানে রোজা রাখার কথা।",
          slotValues: { ACTION: "fast during Ramadan" },
          topicArea: "daily_life",
        },
        {
          en: "I'm supposed to return the book by Friday.",
          bn: "আমার শুক্রবারের মধ্যে বইটি ফেরত দেওয়ার কথা।",
          slotValues: { ACTION: "return the book by Friday" },
          topicArea: "education",
        },
        {
          en: "I'm supposed to avoid sugar.",
          bn: "আমার চিনি এড়িয়ে চলার কথা।",
          slotValues: { ACTION: "avoid sugar" },
          topicArea: "health",
        },
        {
          en: "I'm supposed to keep the receipt.",
          bn: "আমার রসিদটি রাখার কথা।",
          slotValues: { ACTION: "keep the receipt" },
          topicArea: "shopping",
        },
        {
          en: "I'm supposed to attend the meeting.",
          bn: "আমার মিটিংয়ে উপস্থিত থাকার কথা।",
          slotValues: { ACTION: "attend the meeting" },
          topicArea: "work",
        },
        {
          en: "I'm supposed to pick up my sister.",
          bn: "আমার বোনকে নিয়ে আসার কথা।",
          slotValues: { ACTION: "pick up my sister" },
          topicArea: "relationships",
        },
        {
          en: "I'm supposed to board from gate five.",
          bn: "আমার পাঁচ নম্বর গেট থেকে বোর্ড করার কথা।",
          slotValues: { ACTION: "board from gate five" },
          topicArea: "travel",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "'Be supposed to' indicates an expectation or arrangement, often implying you might not actually do it.",
      usageNote_bn:
        "'Be supposed to' একটি প্রত্যাশা বা ব্যবস্থা নির্দেশ করে, প্রায়ই বোঝায় যে আপনি হয়তো আসলে করবেন না।",
      combinableWith: ["D2.1"],
      banglaStructureMap:
        "আমার (Subject) + [ACTION] (Object) + করার কথা (Verb + Noun)",
    },
    {
      id: "D2.5",
      formula: "I ought to [ACTION]",
      formula_bn: "আমার [কাজ] করা উচিত",
      patternName: "Moral Obligation",
      patternName_bn: "নৈতিক বাধ্যবাধকতা",
      slots: [
        {
          name: "ACTION",
          description:
            "A base verb or verb phrase describing a morally right or expected action",
          description_bn:
            "একটি মূল ক্রিয়া বা ক্রিয়া পদবন্ধ যা নৈতিকভাবে সঠিক বা প্রত্যাশিত কাজ বর্ণনা করে",
          acceptedTypes: ["verb"],
          examples: ["help them", "be more patient", "respect my elders"],
        },
      ],
      examples: [
        {
          en: "I ought to help them.",
          bn: "আমার তাদের সাহায্য করা উচিত।",
          slotValues: { ACTION: "help them" },
          topicArea: "relationships",
        },
        {
          en: "I ought to be more patient.",
          bn: "আমার আরও ধৈর্যশীল হওয়া উচিত।",
          slotValues: { ACTION: "be more patient" },
          topicArea: "daily_life",
        },
        {
          en: "I ought to respect my elders.",
          bn: "আমার বড়দের সম্মান করা উচিত।",
          slotValues: { ACTION: "respect my elders" },
          topicArea: "relationships",
        },
        {
          en: "I ought to eat less junk food.",
          bn: "আমার কম জাঙ্ক ফুড খাওয়া উচিত।",
          slotValues: { ACTION: "eat less junk food" },
          topicArea: "food",
        },
        {
          en: "I ought to exercise more often.",
          bn: "আমার আরও বেশি ব্যায়াম করা উচিত।",
          slotValues: { ACTION: "exercise more often" },
          topicArea: "health",
        },
        {
          en: "I ought to spend less time on my phone.",
          bn: "আমার ফোনে কম সময় কাটানো উচিত।",
          slotValues: { ACTION: "spend less time on my phone" },
          topicArea: "daily_life",
        },
        {
          en: "I ought to thank him for his help.",
          bn: "আমার তার সাহায্যের জন্য ধন্যবাদ দেওয়া উচিত।",
          slotValues: { ACTION: "thank him for his help" },
          topicArea: "work",
        },
        {
          en: "I ought to study harder.",
          bn: "আমার আরও কঠোর পড়াশোনা করা উচিত।",
          slotValues: { ACTION: "study harder" },
          topicArea: "education",
        },
        {
          en: "I ought to visit my hometown more often.",
          bn: "আমার আরও বেশি নিজের শহরে যাওয়া উচিত।",
          slotValues: { ACTION: "visit my hometown more often" },
          topicArea: "travel",
        },
        {
          en: "I ought to save more and spend less.",
          bn: "আমার বেশি সঞ্চয় করা এবং কম খরচ করা উচিত।",
          slotValues: { ACTION: "save more and spend less" },
          topicArea: "shopping",
        },
        {
          en: "I ought to take better care of my health.",
          bn: "আমার স্বাস্থ্যের আরও ভালো যত্ন নেওয়া উচিত।",
          slotValues: { ACTION: "take better care of my health" },
          topicArea: "health",
        },
        {
          en: "I ought to prepare for the presentation.",
          bn: "আমার প্রেজেন্টেশনের জন্য প্রস্তুতি নেওয়া উচিত।",
          slotValues: { ACTION: "prepare for the presentation" },
          topicArea: "work",
        },
        {
          en: "I ought to learn from my mistakes.",
          bn: "আমার ভুল থেকে শেখা উচিত।",
          slotValues: { ACTION: "learn from my mistakes" },
          topicArea: "education",
        },
        {
          en: "I ought to try cooking at home more.",
          bn: "আমার বাড়িতে আরও বেশি রান্না করার চেষ্টা করা উচিত।",
          slotValues: { ACTION: "try cooking at home more" },
          topicArea: "food",
        },
        {
          en: "I ought to keep in touch with old friends.",
          bn: "আমার পুরোনো বন্ধুদের সাথে যোগাযোগ রাখা উচিত।",
          slotValues: { ACTION: "keep in touch with old friends" },
          topicArea: "relationships",
        },
      ],
      formality: "formal",
      difficulty: "intermediate",
      usageNote:
        "'Ought to' is similar to 'should' but sounds more formal and carries a sense of moral duty.",
      usageNote_bn:
        "'Ought to' 'should'-এর মতো কিন্তু আরও আনুষ্ঠানিক শোনায় এবং নৈতিক কর্তব্যের অনুভূতি বহন করে।",
      combinableWith: ["D2.3"],
      banglaStructureMap:
        "আমার (Subject) + [ACTION] (Object) + করা উচিত (Verb + Adj)",
    },
  ],
};
