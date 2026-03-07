import { PatternCategory } from "@/types/pattern";

export const categoryK4: PatternCategory = {
  id: "K4",
  slug: "reporting-commands-requests",
  name: "Reporting Commands & Requests",
  name_bn: "আদেশ ও অনুরোধ প্রতিবেদন",
  description:
    "Learn to report commands, orders, and requests that others gave.",
  description_bn:
    "অন্যরা যে আদেশ, নির্দেশ ও অনুরোধ দিয়েছে তা জানাতে শিখুন।",
  icon: "📢",
  group: "K",
  groupName: "Reported Speech & Communication",
  groupName_bn: "পরোক্ষ উক্তি ও যোগাযোগ",
  difficulty: "intermediate",
  patterns: [
    {
      id: "K4.1",
      formula: "[PERSON] told me to [ACTION]",
      formula_bn: "[ব্যক্তি] আমাকে [কাজ] করতে বলেছে",
      patternName: "Reporting a Command",
      patternName_bn: "আদেশ প্রতিবেদন",
      slots: [
        {
          name: "PERSON",
          description: "The person who gave the command",
          description_bn: "যে ব্যক্তি আদেশ দিয়েছে",
          acceptedTypes: ["person"],
          examples: ["My boss", "The teacher", "She", "He"],
        },
        {
          name: "ACTION",
          description: "The action that was commanded",
          description_bn: "যে কাজের আদেশ দেওয়া হয়েছে",
          acceptedTypes: ["verb_phrase"],
          examples: [
            "finish the report",
            "clean my room",
            "wait outside",
          ],
        },
      ],
      examples: [
        {
          en: "My boss told me to finish the report by Monday.",
          bn: "আমার বস আমাকে সোমবারের মধ্যে রিপোর্ট শেষ করতে বলেছেন।",
          slotValues: {
            PERSON: "My boss",
            ACTION: "finish the report by Monday",
          },
          topicArea: "work",
        },
        {
          en: "The teacher told me to sit down.",
          bn: "শিক্ষক আমাকে বসতে বলেছেন।",
          slotValues: { PERSON: "The teacher", ACTION: "sit down" },
          topicArea: "education",
        },
        {
          en: "She told me to call her back later.",
          bn: "সে আমাকে পরে ফোন করতে বলেছে।",
          slotValues: { PERSON: "She", ACTION: "call her back later" },
          topicArea: "daily_life",
        },
        {
          en: "He told me to take my medicine on time.",
          bn: "সে আমাকে সময়মতো ওষুধ খেতে বলেছে।",
          slotValues: {
            PERSON: "He",
            ACTION: "take my medicine on time",
          },
          topicArea: "health",
        },
        {
          en: "My mother told me to clean my room.",
          bn: "আমার মা আমাকে ঘর পরিষ্কার করতে বলেছেন।",
          slotValues: { PERSON: "My mother", ACTION: "clean my room" },
          topicArea: "daily_life",
        },
        {
          en: "The doctor told me to stop eating junk food.",
          bn: "ডাক্তার আমাকে ফাস্ট ফুড খাওয়া বন্ধ করতে বলেছেন।",
          slotValues: {
            PERSON: "The doctor",
            ACTION: "stop eating junk food",
          },
          topicArea: "food",
        },
        {
          en: "The officer told me to show my ID.",
          bn: "অফিসার আমাকে আইডি দেখাতে বলেছেন।",
          slotValues: { PERSON: "The officer", ACTION: "show my ID" },
          topicArea: "travel",
        },
        {
          en: "She told me to be more careful.",
          bn: "সে আমাকে আরও সাবধান থাকতে বলেছে।",
          slotValues: { PERSON: "She", ACTION: "be more careful" },
          topicArea: "daily_life",
        },
        {
          en: "The manager told me to submit my timesheet.",
          bn: "ম্যানেজার আমাকে টাইমশিট জমা দিতে বলেছেন।",
          slotValues: {
            PERSON: "The manager",
            ACTION: "submit my timesheet",
          },
          topicArea: "work",
        },
        {
          en: "My father told me to drive carefully.",
          bn: "আমার বাবা আমাকে সাবধানে গাড়ি চালাতে বলেছেন।",
          slotValues: {
            PERSON: "My father",
            ACTION: "drive carefully",
          },
          topicArea: "travel",
        },
        {
          en: "The coach told me to practice every day.",
          bn: "কোচ আমাকে প্রতিদিন অনুশীলন করতে বলেছেন।",
          slotValues: {
            PERSON: "The coach",
            ACTION: "practice every day",
          },
          topicArea: "health",
        },
        {
          en: "He told me to send him the photos.",
          bn: "সে আমাকে ছবি পাঠাতে বলেছে।",
          slotValues: {
            PERSON: "He",
            ACTION: "send him the photos",
          },
          topicArea: "relationships",
        },
        {
          en: "The professor told me to rewrite my essay.",
          bn: "প্রফেসর আমাকে রচনা আবার লিখতে বলেছেন।",
          slotValues: {
            PERSON: "The professor",
            ACTION: "rewrite my essay",
          },
          topicArea: "education",
        },
        {
          en: "She told me to try the biryani.",
          bn: "সে আমাকে বিরিয়ানি খেয়ে দেখতে বলেছে।",
          slotValues: { PERSON: "She", ACTION: "try the biryani" },
          topicArea: "food",
        },
        {
          en: "The salesperson told me to check the warranty.",
          bn: "বিক্রয়কর্মী আমাকে ওয়ারেন্টি দেখতে বলেছে।",
          slotValues: {
            PERSON: "The salesperson",
            ACTION: "check the warranty",
          },
          topicArea: "shopping",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "Use 'told [person] to' for reporting commands and instructions. It's stronger than 'asked [person] to'.",
      usageNote_bn:
        "আদেশ ও নির্দেশ জানাতে 'told [person] to' ব্যবহার করুন। এটি 'asked [person] to' এর চেয়ে জোরালো।",
    },
    {
      id: "K4.2",
      formula: "[PERSON] asked me to [ACTION]",
      formula_bn: "[ব্যক্তি] আমাকে [কাজ] করতে বলেছে/অনুরোধ করেছে",
      patternName: "Reporting a Request",
      patternName_bn: "অনুরোধ প্রতিবেদন",
      slots: [
        {
          name: "PERSON",
          description: "The person who made the request",
          description_bn: "যে ব্যক্তি অনুরোধ করেছে",
          acceptedTypes: ["person"],
          examples: ["She", "He", "My neighbor", "The client"],
        },
        {
          name: "ACTION",
          description: "The action that was requested",
          description_bn: "যে কাজের অনুরোধ করা হয়েছে",
          acceptedTypes: ["verb_phrase"],
          examples: [
            "help with the project",
            "lend her some money",
            "pick up groceries",
          ],
        },
      ],
      examples: [
        {
          en: "She asked me to help her with the project.",
          bn: "সে আমাকে প্রজেক্টে সাহায্য করতে বলেছে।",
          slotValues: {
            PERSON: "She",
            ACTION: "help her with the project",
          },
          topicArea: "work",
        },
        {
          en: "He asked me to pick up some groceries.",
          bn: "সে আমাকে কিছু মুদি কিনে আনতে বলেছে।",
          slotValues: {
            PERSON: "He",
            ACTION: "pick up some groceries",
          },
          topicArea: "shopping",
        },
        {
          en: "My neighbor asked me to water her plants.",
          bn: "আমার প্রতিবেশী আমাকে তার গাছে পানি দিতে বলেছে।",
          slotValues: {
            PERSON: "My neighbor",
            ACTION: "water her plants",
          },
          topicArea: "daily_life",
        },
        {
          en: "The client asked me to send the proposal by email.",
          bn: "ক্লায়েন্ট আমাকে ইমেইলে প্রস্তাবটি পাঠাতে বলেছে।",
          slotValues: {
            PERSON: "The client",
            ACTION: "send the proposal by email",
          },
          topicArea: "work",
        },
        {
          en: "She asked me to keep it a secret.",
          bn: "সে আমাকে এটা গোপন রাখতে বলেছে।",
          slotValues: { PERSON: "She", ACTION: "keep it a secret" },
          topicArea: "relationships",
        },
        {
          en: "He asked me to give him a ride to the airport.",
          bn: "সে আমাকে বিমানবন্দরে পৌঁছে দিতে বলেছে।",
          slotValues: {
            PERSON: "He",
            ACTION: "give him a ride to the airport",
          },
          topicArea: "travel",
        },
        {
          en: "My sister asked me to lend her some money.",
          bn: "আমার বোন আমাকে কিছু টাকা ধার দিতে বলেছে।",
          slotValues: {
            PERSON: "My sister",
            ACTION: "lend her some money",
          },
          topicArea: "shopping",
        },
        {
          en: "The teacher asked me to read aloud.",
          bn: "শিক্ষক আমাকে জোরে পড়তে বলেছেন।",
          slotValues: { PERSON: "The teacher", ACTION: "read aloud" },
          topicArea: "education",
        },
        {
          en: "She asked me to bring some food to the party.",
          bn: "সে আমাকে পার্টিতে কিছু খাবার নিয়ে আসতে বলেছে।",
          slotValues: {
            PERSON: "She",
            ACTION: "bring some food to the party",
          },
          topicArea: "food",
        },
        {
          en: "The receptionist asked me to fill out a form.",
          bn: "রিসেপশনিস্ট আমাকে একটি ফর্ম পূরণ করতে বলেছে।",
          slotValues: {
            PERSON: "The receptionist",
            ACTION: "fill out a form",
          },
          topicArea: "health",
        },
        {
          en: "He asked me to join him for lunch.",
          bn: "সে আমাকে দুপুরের খাবারে যোগ দিতে বলেছে।",
          slotValues: {
            PERSON: "He",
            ACTION: "join him for lunch",
          },
          topicArea: "food",
        },
        {
          en: "My friend asked me to look after her cat.",
          bn: "আমার বন্ধু আমাকে তার বিড়াল দেখাশোনা করতে বলেছে।",
          slotValues: {
            PERSON: "My friend",
            ACTION: "look after her cat",
          },
          topicArea: "relationships",
        },
        {
          en: "The guide asked me to follow the group.",
          bn: "গাইড আমাকে দলের সাথে থাকতে বলেছেন।",
          slotValues: {
            PERSON: "The guide",
            ACTION: "follow the group",
          },
          topicArea: "travel",
        },
        {
          en: "She asked me to explain the math problem.",
          bn: "সে আমাকে গণিতের সমস্যাটি ব্যাখ্যা করতে বলেছে।",
          slotValues: {
            PERSON: "She",
            ACTION: "explain the math problem",
          },
          topicArea: "education",
        },
        {
          en: "He asked me to take a look at his report.",
          bn: "সে আমাকে তার রিপোর্টটা একটু দেখতে বলেছে।",
          slotValues: {
            PERSON: "He",
            ACTION: "take a look at his report",
          },
          topicArea: "work",
        },
      ],
      formality: "polite",
      difficulty: "intermediate",
      usageNote:
        "'Asked me to' is more polite than 'told me to'. It implies a request, not an order.",
      usageNote_bn:
        "'Asked me to' 'told me to' এর চেয়ে বেশি ভদ্র। এটি অনুরোধ বোঝায়, আদেশ নয়।",
    },
    {
      id: "K4.3",
      formula: "[PERSON] told me not to [ACTION]",
      formula_bn: "[ব্যক্তি] আমাকে [কাজ] না করতে বলেছে",
      patternName: "Reporting a Negative Command",
      patternName_bn: "নেতিবাচক আদেশ প্রতিবেদন",
      slots: [
        {
          name: "PERSON",
          description: "The person who gave the negative command",
          description_bn: "যে ব্যক্তি নেতিবাচক আদেশ দিয়েছে",
          acceptedTypes: ["person"],
          examples: ["She", "He", "The doctor", "My parents"],
        },
        {
          name: "ACTION",
          description: "The action that was forbidden",
          description_bn: "যে কাজ নিষেধ করা হয়েছে",
          acceptedTypes: ["verb_phrase"],
          examples: [
            "worry about it",
            "stay up late",
            "eat too much sugar",
          ],
        },
      ],
      examples: [
        {
          en: "She told me not to worry about it.",
          bn: "সে আমাকে এটা নিয়ে চিন্তা না করতে বলেছে।",
          slotValues: { PERSON: "She", ACTION: "worry about it" },
          topicArea: "daily_life",
        },
        {
          en: "The doctor told me not to eat too much sugar.",
          bn: "ডাক্তার আমাকে বেশি চিনি না খেতে বলেছেন।",
          slotValues: {
            PERSON: "The doctor",
            ACTION: "eat too much sugar",
          },
          topicArea: "health",
        },
        {
          en: "My parents told me not to stay up late.",
          bn: "আমার বাবা-মা আমাকে রাত জাগতে না করতে বলেছেন।",
          slotValues: {
            PERSON: "My parents",
            ACTION: "stay up late",
          },
          topicArea: "daily_life",
        },
        {
          en: "He told me not to tell anyone.",
          bn: "সে আমাকে কাউকে না বলতে বলেছে।",
          slotValues: { PERSON: "He", ACTION: "tell anyone" },
          topicArea: "relationships",
        },
        {
          en: "The teacher told me not to use my phone in class.",
          bn: "শিক্ষক আমাকে ক্লাসে ফোন ব্যবহার না করতে বলেছেন।",
          slotValues: {
            PERSON: "The teacher",
            ACTION: "use my phone in class",
          },
          topicArea: "education",
        },
        {
          en: "She told me not to be late for the meeting.",
          bn: "সে আমাকে মিটিংয়ে দেরি না করতে বলেছে।",
          slotValues: {
            PERSON: "She",
            ACTION: "be late for the meeting",
          },
          topicArea: "work",
        },
        {
          en: "My mother told me not to forget my umbrella.",
          bn: "আমার মা আমাকে ছাতা ভুলে না যেতে বলেছেন।",
          slotValues: {
            PERSON: "My mother",
            ACTION: "forget my umbrella",
          },
          topicArea: "daily_life",
        },
        {
          en: "The guide told me not to wander off alone.",
          bn: "গাইড আমাকে একা ঘুরে বেড়াতে না বলেছেন।",
          slotValues: {
            PERSON: "The guide",
            ACTION: "wander off alone",
          },
          topicArea: "travel",
        },
        {
          en: "He told me not to spend too much money.",
          bn: "সে আমাকে বেশি টাকা খরচ না করতে বলেছে।",
          slotValues: {
            PERSON: "He",
            ACTION: "spend too much money",
          },
          topicArea: "shopping",
        },
        {
          en: "The manager told me not to miss the deadline.",
          bn: "ম্যানেজার আমাকে ডেডলাইন মিস না করতে বলেছেন।",
          slotValues: {
            PERSON: "The manager",
            ACTION: "miss the deadline",
          },
          topicArea: "work",
        },
        {
          en: "She told me not to eat the raw fish.",
          bn: "সে আমাকে কাঁচা মাছ না খেতে বলেছে।",
          slotValues: { PERSON: "She", ACTION: "eat the raw fish" },
          topicArea: "food",
        },
        {
          en: "The instructor told me not to skip the warm-up.",
          bn: "প্রশিক্ষক আমাকে ওয়ার্ম-আপ বাদ না দিতে বলেছেন।",
          slotValues: {
            PERSON: "The instructor",
            ACTION: "skip the warm-up",
          },
          topicArea: "health",
        },
        {
          en: "He told me not to park here.",
          bn: "সে আমাকে এখানে পার্ক না করতে বলেছে।",
          slotValues: { PERSON: "He", ACTION: "park here" },
          topicArea: "travel",
        },
        {
          en: "My friend told me not to trust that website.",
          bn: "আমার বন্ধু আমাকে ওই ওয়েবসাইটে বিশ্বাস না করতে বলেছে।",
          slotValues: {
            PERSON: "My friend",
            ACTION: "trust that website",
          },
          topicArea: "shopping",
        },
        {
          en: "The professor told me not to plagiarize.",
          bn: "প্রফেসর আমাকে নকল না করতে বলেছেন।",
          slotValues: { PERSON: "The professor", ACTION: "plagiarize" },
          topicArea: "education",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "For negative commands, use 'told [person] not to [verb]'. The 'not' always comes before 'to'.",
      usageNote_bn:
        "নেতিবাচক আদেশের জন্য 'told [person] not to [verb]' ব্যবহার করুন। 'not' সবসময় 'to' এর আগে আসে।",
    },
    {
      id: "K4.4",
      formula: "[PERSON] ordered me to [ACTION]",
      formula_bn: "[ব্যক্তি] আমাকে [কাজ] করার আদেশ দিয়েছে",
      patternName: "Reporting a Strong Order",
      patternName_bn: "কড়া আদেশ প্রতিবেদন",
      slots: [
        {
          name: "PERSON",
          description: "The person who gave the order",
          description_bn: "যে ব্যক্তি আদেশ দিয়েছে",
          acceptedTypes: ["person"],
          examples: [
            "The captain",
            "The officer",
            "The principal",
            "He",
          ],
        },
        {
          name: "ACTION",
          description: "The action that was ordered",
          description_bn: "যে কাজের আদেশ দেওয়া হয়েছে",
          acceptedTypes: ["verb_phrase"],
          examples: [
            "leave the building",
            "stop talking",
            "hand over the documents",
          ],
        },
      ],
      examples: [
        {
          en: "The captain ordered me to leave the building immediately.",
          bn: "ক্যাপ্টেন আমাকে সঙ্গে সঙ্গে বিল্ডিং ছেড়ে যাওয়ার আদেশ দিয়েছেন।",
          slotValues: {
            PERSON: "The captain",
            ACTION: "leave the building immediately",
          },
          topicArea: "daily_life",
        },
        {
          en: "The officer ordered me to stop the car.",
          bn: "অফিসার আমাকে গাড়ি থামানোর আদেশ দিয়েছেন।",
          slotValues: {
            PERSON: "The officer",
            ACTION: "stop the car",
          },
          topicArea: "travel",
        },
        {
          en: "The principal ordered me to report to his office.",
          bn: "প্রিন্সিপাল আমাকে তাঁর অফিসে রিপোর্ট করার আদেশ দিয়েছেন।",
          slotValues: {
            PERSON: "The principal",
            ACTION: "report to his office",
          },
          topicArea: "education",
        },
        {
          en: "He ordered me to hand over the documents.",
          bn: "সে আমাকে কাগজপত্র দিয়ে দেওয়ার আদেশ দিয়েছে।",
          slotValues: {
            PERSON: "He",
            ACTION: "hand over the documents",
          },
          topicArea: "work",
        },
        {
          en: "The security guard ordered me to show my badge.",
          bn: "সিকিউরিটি গার্ড আমাকে ব্যাজ দেখানোর আদেশ দিয়েছে।",
          slotValues: {
            PERSON: "The security guard",
            ACTION: "show my badge",
          },
          topicArea: "work",
        },
        {
          en: "The doctor ordered me to stay in bed.",
          bn: "ডাক্তার আমাকে বিছানায় থাকার আদেশ দিয়েছেন।",
          slotValues: {
            PERSON: "The doctor",
            ACTION: "stay in bed",
          },
          topicArea: "health",
        },
        {
          en: "The referee ordered him to leave the field.",
          bn: "রেফারি তাকে মাঠ ছেড়ে যাওয়ার আদেশ দিয়েছেন।",
          slotValues: {
            PERSON: "The referee",
            ACTION: "leave the field",
          },
          topicArea: "health",
        },
        {
          en: "She ordered me to return the product.",
          bn: "সে আমাকে পণ্য ফেরত দেওয়ার আদেশ দিয়েছে।",
          slotValues: {
            PERSON: "She",
            ACTION: "return the product",
          },
          topicArea: "shopping",
        },
        {
          en: "The immigration officer ordered me to open my suitcase.",
          bn: "ইমিগ্রেশন অফিসার আমাকে সুটকেস খোলার আদেশ দিয়েছেন।",
          slotValues: {
            PERSON: "The immigration officer",
            ACTION: "open my suitcase",
          },
          topicArea: "travel",
        },
        {
          en: "The head chef ordered me to start over.",
          bn: "প্রধান শেফ আমাকে আবার শুরু করার আদেশ দিয়েছেন।",
          slotValues: {
            PERSON: "The head chef",
            ACTION: "start over",
          },
          topicArea: "food",
        },
        {
          en: "The judge ordered him to pay the fine.",
          bn: "বিচারক তাকে জরিমানা দেওয়ার আদেশ দিয়েছেন।",
          slotValues: {
            PERSON: "The judge",
            ACTION: "pay the fine",
          },
          topicArea: "daily_life",
        },
        {
          en: "The director ordered us to redo the presentation.",
          bn: "পরিচালক আমাদের প্রেজেন্টেশন আবার করার আদেশ দিয়েছেন।",
          slotValues: {
            PERSON: "The director",
            ACTION: "redo the presentation",
          },
          topicArea: "work",
        },
        {
          en: "He ordered me to apologize.",
          bn: "সে আমাকে ক্ষমা চাওয়ার আদেশ দিয়েছে।",
          slotValues: { PERSON: "He", ACTION: "apologize" },
          topicArea: "relationships",
        },
        {
          en: "The teacher ordered the students to be quiet.",
          bn: "শিক্ষক ছাত্রদের চুপ থাকার আদেশ দিয়েছেন।",
          slotValues: {
            PERSON: "The teacher",
            ACTION: "be quiet",
          },
          topicArea: "education",
        },
        {
          en: "The nurse ordered me to drink more water.",
          bn: "নার্স আমাকে বেশি পানি খাওয়ার আদেশ দিয়েছেন।",
          slotValues: {
            PERSON: "The nurse",
            ACTION: "drink more water",
          },
          topicArea: "health",
        },
      ],
      formality: "formal",
      difficulty: "intermediate",
      usageNote:
        "'Ordered' is much stronger than 'told' or 'asked'. Use it for authority figures giving strict commands.",
      usageNote_bn:
        "'Ordered' 'told' বা 'asked' এর চেয়ে অনেক বেশি জোরালো। কর্তৃত্বশীল ব্যক্তিদের কড়া আদেশের জন্য ব্যবহার করুন।",
    },
    {
      id: "K4.5",
      formula: "[PERSON] advised me to [ACTION]",
      formula_bn: "[ব্যক্তি] আমাকে [কাজ] করতে পরামর্শ দিয়েছে",
      patternName: "Reporting Advice",
      patternName_bn: "পরামর্শ প্রতিবেদন",
      slots: [
        {
          name: "PERSON",
          description: "The person who gave advice",
          description_bn: "যে ব্যক্তি পরামর্শ দিয়েছে",
          acceptedTypes: ["person"],
          examples: ["My doctor", "She", "He", "The counselor"],
        },
        {
          name: "ACTION",
          description: "The advised action",
          description_bn: "পরামর্শকৃত কাজ",
          acceptedTypes: ["verb_phrase"],
          examples: [
            "get more sleep",
            "save money",
            "take a vacation",
          ],
        },
      ],
      examples: [
        {
          en: "My doctor advised me to get more sleep.",
          bn: "আমার ডাক্তার আমাকে বেশি ঘুমাতে পরামর্শ দিয়েছেন।",
          slotValues: {
            PERSON: "My doctor",
            ACTION: "get more sleep",
          },
          topicArea: "health",
        },
        {
          en: "She advised me to save money for the future.",
          bn: "সে আমাকে ভবিষ্যতের জন্য টাকা জমাতে পরামর্শ দিয়েছে।",
          slotValues: {
            PERSON: "She",
            ACTION: "save money for the future",
          },
          topicArea: "shopping",
        },
        {
          en: "He advised me to take a vacation.",
          bn: "সে আমাকে ছুটি নিতে পরামর্শ দিয়েছে।",
          slotValues: { PERSON: "He", ACTION: "take a vacation" },
          topicArea: "travel",
        },
        {
          en: "The counselor advised me to talk to my family.",
          bn: "কাউন্সেলর আমাকে পরিবারের সাথে কথা বলতে পরামর্শ দিয়েছেন।",
          slotValues: {
            PERSON: "The counselor",
            ACTION: "talk to my family",
          },
          topicArea: "relationships",
        },
        {
          en: "My teacher advised me to read more books.",
          bn: "আমার শিক্ষক আমাকে আরও বই পড়তে পরামর্শ দিয়েছেন।",
          slotValues: {
            PERSON: "My teacher",
            ACTION: "read more books",
          },
          topicArea: "education",
        },
        {
          en: "She advised me to apply for the scholarship.",
          bn: "সে আমাকে স্কলারশিপের জন্য আবেদন করতে পরামর্শ দিয়েছে।",
          slotValues: {
            PERSON: "She",
            ACTION: "apply for the scholarship",
          },
          topicArea: "education",
        },
        {
          en: "The pharmacist advised me to take the medicine with food.",
          bn: "ফার্মাসিস্ট আমাকে খাবারের সাথে ওষুধ খেতে পরামর্শ দিয়েছেন।",
          slotValues: {
            PERSON: "The pharmacist",
            ACTION: "take the medicine with food",
          },
          topicArea: "health",
        },
        {
          en: "He advised me to learn a new skill.",
          bn: "সে আমাকে নতুন একটা দক্ষতা শিখতে পরামর্শ দিয়েছে।",
          slotValues: {
            PERSON: "He",
            ACTION: "learn a new skill",
          },
          topicArea: "work",
        },
        {
          en: "My friend advised me to try the local food.",
          bn: "আমার বন্ধু আমাকে স্থানীয় খাবার খেয়ে দেখতে পরামর্শ দিয়েছে।",
          slotValues: {
            PERSON: "My friend",
            ACTION: "try the local food",
          },
          topicArea: "food",
        },
        {
          en: "The mentor advised me to network more.",
          bn: "মেন্টর আমাকে আরও নেটওয়ার্কিং করতে পরামর্শ দিয়েছেন।",
          slotValues: {
            PERSON: "The mentor",
            ACTION: "network more",
          },
          topicArea: "work",
        },
        {
          en: "She advised me to book the tickets early.",
          bn: "সে আমাকে তাড়াতাড়ি টিকেট বুক করতে পরামর্শ দিয়েছে।",
          slotValues: {
            PERSON: "She",
            ACTION: "book the tickets early",
          },
          topicArea: "travel",
        },
        {
          en: "The nutritionist advised me to eat more protein.",
          bn: "পুষ্টিবিদ আমাকে বেশি প্রোটিন খেতে পরামর্শ দিয়েছেন।",
          slotValues: {
            PERSON: "The nutritionist",
            ACTION: "eat more protein",
          },
          topicArea: "food",
        },
        {
          en: "He advised me to compare prices before buying.",
          bn: "সে আমাকে কেনার আগে দাম তুলনা করতে পরামর্শ দিয়েছে।",
          slotValues: {
            PERSON: "He",
            ACTION: "compare prices before buying",
          },
          topicArea: "shopping",
        },
        {
          en: "My mother advised me to be patient.",
          bn: "আমার মা আমাকে ধৈর্য ধরতে পরামর্শ দিয়েছেন।",
          slotValues: { PERSON: "My mother", ACTION: "be patient" },
          topicArea: "relationships",
        },
        {
          en: "The manager advised me to update my resume.",
          bn: "ম্যানেজার আমাকে আমার রিজিউমি আপডেট করতে পরামর্শ দিয়েছেন।",
          slotValues: {
            PERSON: "The manager",
            ACTION: "update my resume",
          },
          topicArea: "work",
        },
      ],
      formality: "polite",
      difficulty: "intermediate",
      usageNote:
        "'Advised' implies helpful guidance, not a command. It suggests the listener has a choice.",
      usageNote_bn:
        "'Advised' সহায়ক নির্দেশনা বোঝায়, আদেশ নয়। এটি বোঝায় যে শ্রোতার পছন্দের সুযোগ আছে।",
    },
  ],
};
