import { PatternCategory } from "@/types/pattern";

export const categoryC6: PatternCategory = {
  id: "C6",
  slug: "past-before-past",
  name: "Past Before Past (Had Done)",
  name_bn: "অতীতের আগের অতীত (করেছিলাম)",
  description:
    "Talk about events that happened before another past event using the past perfect tense.",
  description_bn:
    "পাস্ট পারফেক্ট টেন্স ব্যবহার করে অন্য একটি অতীত ঘটনার আগে ঘটেছিল এমন ঘটনা সম্পর্কে বলুন।",
  icon: "⏪",
  group: "C",
  groupName: "Actions & Time Patterns",
  groupName_bn: "কর্ম এবং সময়ের প্যাটার্ন",
  difficulty: "intermediate",
  patterns: [
    {
      id: "C6.1",
      formula: "I had already [PAST PARTICIPLE] when [EVENT]",
      formula_bn: "আমি ইতিমধ্যে [কাজ] করেছিলাম যখন [ঘটনা]",
      patternName: "Past Perfect + When",
      patternName_bn: "পাস্ট পারফেক্ট + যখন",
      slots: [
        {
          name: "PAST PARTICIPLE",
          description: "A verb in past participle form for the earlier action",
          description_bn: "আগের কাজটির জন্য অতীত কৃদন্ত রূপের একটি ক্রিয়া",
          acceptedTypes: ["past_participle"],
          examples: ["eaten", "finished", "left"],
        },
        {
          name: "EVENT",
          description: "A past event that happened after the first action",
          description_bn: "একটি অতীত ঘটনা যা প্রথম কাজের পরে ঘটেছিল",
          acceptedTypes: ["event", "clause"],
          examples: ["he arrived", "the movie started", "she called"],
        },
      ],
      examples: [
        {
          en: "I had already eaten when he arrived.",
          bn: "সে আসার আগেই আমি খেয়ে ফেলেছিলাম।",
          slotValues: { "PAST PARTICIPLE": "eaten", EVENT: "he arrived" },
          topicArea: "food",
        },
        {
          en: "I had already finished my homework when Mom called.",
          bn: "মা ডাকার আগেই আমি আমার বাড়ির কাজ শেষ করে ফেলেছিলাম।",
          slotValues: {
            "PAST PARTICIPLE": "finished my homework",
            EVENT: "Mom called",
          },
          topicArea: "education",
        },
        {
          en: "I had already left the office when it started raining.",
          bn: "বৃষ্টি শুরু হওয়ার আগেই আমি অফিস থেকে চলে গিয়েছিলাম।",
          slotValues: {
            "PAST PARTICIPLE": "left the office",
            EVENT: "it started raining",
          },
          topicArea: "work",
        },
        {
          en: "I had already booked the tickets when the price dropped.",
          bn: "দাম কমার আগেই আমি টিকিট বুক করে ফেলেছিলাম।",
          slotValues: {
            "PAST PARTICIPLE": "booked the tickets",
            EVENT: "the price dropped",
          },
          topicArea: "travel",
        },
        {
          en: "I had already gone to bed when you texted me.",
          bn: "তুমি মেসেজ করার আগেই আমি ঘুমাতে গিয়েছিলাম।",
          slotValues: {
            "PAST PARTICIPLE": "gone to bed",
            EVENT: "you texted me",
          },
          topicArea: "daily_life",
        },
        {
          en: "I had already taken my medicine when the doctor called.",
          bn: "ডাক্তার ফোন করার আগেই আমি ওষুধ খেয়ে ফেলেছিলাম।",
          slotValues: {
            "PAST PARTICIPLE": "taken my medicine",
            EVENT: "the doctor called",
          },
          topicArea: "health",
        },
        {
          en: "I had already paid the bill when she offered to help.",
          bn: "সে সাহায্য করতে চাওয়ার আগেই আমি বিল দিয়ে দিয়েছিলাম।",
          slotValues: {
            "PAST PARTICIPLE": "paid the bill",
            EVENT: "she offered to help",
          },
          topicArea: "shopping",
        },
        {
          en: "I had already cooked dinner when the guests arrived.",
          bn: "অতিথিরা আসার আগেই আমি রাতের খাবার রান্না করে ফেলেছিলাম।",
          slotValues: {
            "PAST PARTICIPLE": "cooked dinner",
            EVENT: "the guests arrived",
          },
          topicArea: "food",
        },
        {
          en: "I had already submitted the report when my boss asked for it.",
          bn: "বস চাওয়ার আগেই আমি রিপোর্ট জমা দিয়ে দিয়েছিলাম।",
          slotValues: {
            "PAST PARTICIPLE": "submitted the report",
            EVENT: "my boss asked for it",
          },
          topicArea: "work",
        },
        {
          en: "I had already read the book when the movie came out.",
          bn: "মুভি বের হওয়ার আগেই আমি বইটি পড়ে ফেলেছিলাম।",
          slotValues: {
            "PAST PARTICIPLE": "read the book",
            EVENT: "the movie came out",
          },
          topicArea: "education",
        },
        {
          en: "I had already cleaned the house when my parents visited.",
          bn: "বাবা-মা আসার আগেই আমি ঘর পরিষ্কার করে ফেলেছিলাম।",
          slotValues: {
            "PAST PARTICIPLE": "cleaned the house",
            EVENT: "my parents visited",
          },
          topicArea: "daily_life",
        },
        {
          en: "I had already apologized when he brought it up again.",
          bn: "সে আবার বিষয়টি তোলার আগেই আমি ক্ষমা চেয়ে ফেলেছিলাম।",
          slotValues: {
            "PAST PARTICIPLE": "apologized",
            EVENT: "he brought it up again",
          },
          topicArea: "relationships",
        },
        {
          en: "I had already packed my bags when the trip was canceled.",
          bn: "ট্রিপ বাতিল হওয়ার আগেই আমি ব্যাগ গুছিয়ে ফেলেছিলাম।",
          slotValues: {
            "PAST PARTICIPLE": "packed my bags",
            EVENT: "the trip was canceled",
          },
          topicArea: "travel",
        },
        {
          en: "I had already exercised when the gym closed early.",
          bn: "জিম তাড়াতাড়ি বন্ধ হওয়ার আগেই আমি ব্যায়াম করে ফেলেছিলাম।",
          slotValues: {
            "PAST PARTICIPLE": "exercised",
            EVENT: "the gym closed early",
          },
          topicArea: "health",
        },
        {
          en: "I had already bought the groceries when she sent the list.",
          bn: "সে তালিকা পাঠানোর আগেই আমি বাজার করে ফেলেছিলাম।",
          slotValues: {
            "PAST PARTICIPLE": "bought the groceries",
            EVENT: "she sent the list",
          },
          topicArea: "shopping",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "Use 'had already + past participle' to emphasize that one action was completed before another past event. 'Already' adds emphasis that it was done beforehand.",
      usageNote_bn:
        "একটি কাজ অন্য একটি অতীত ঘটনার আগে সম্পন্ন হয়েছিল তা জোর দিতে 'had already + past participle' ব্যবহার করুন। 'Already' আগেই হয়ে গিয়েছিল এই বিষয়ে জোর দেয়।",
      combinableWith: ["C6.2", "C6.3"],
      banglaStructureMap:
        "[EVENT] (ঘটনা) + এর আগেই + আমি (Subject) + [PP] (Verb) + করে ফেলেছিলাম (Past Perfect Aux)",
    },
    {
      id: "C6.2",
      formula: "By the time [EVENT], I had [PAST PARTICIPLE]",
      formula_bn: "[ঘটনা] হওয়ার মধ্যে, আমি [কাজ] করে ফেলেছিলাম",
      patternName: "By the Time + Past Perfect",
      patternName_bn: "বাই দ্য টাইম + পাস্ট পারফেক্ট",
      slots: [
        {
          name: "EVENT",
          description: "A past event or time reference",
          description_bn: "একটি অতীত ঘটনা বা সময়ের রেফারেন্স",
          acceptedTypes: ["event", "clause"],
          examples: ["he came back", "the bell rang", "we reached home"],
        },
        {
          name: "PAST PARTICIPLE",
          description:
            "A verb in past participle form for the action completed earlier",
          description_bn:
            "আগে সম্পন্ন হওয়া কাজটির জন্য অতীত কৃদন্ত রূপের একটি ক্রিয়া",
          acceptedTypes: ["past_participle"],
          examples: ["finished", "left", "fallen asleep"],
        },
      ],
      examples: [
        {
          en: "By the time he came back, I had finished the work.",
          bn: "সে ফিরে আসার মধ্যে আমি কাজটি শেষ করে ফেলেছিলাম।",
          slotValues: {
            EVENT: "he came back",
            "PAST PARTICIPLE": "finished the work",
          },
          topicArea: "work",
        },
        {
          en: "By the time the bell rang, I had solved all the questions.",
          bn: "ঘণ্টা বাজার মধ্যে আমি সব প্রশ্নের উত্তর দিয়ে ফেলেছিলাম।",
          slotValues: {
            EVENT: "the bell rang",
            "PAST PARTICIPLE": "solved all the questions",
          },
          topicArea: "education",
        },
        {
          en: "By the time we reached home, it had stopped raining.",
          bn: "আমরা বাড়ি পৌঁছানোর মধ্যে বৃষ্টি থেমে গিয়েছিল।",
          slotValues: {
            EVENT: "we reached home",
            "PAST PARTICIPLE": "stopped raining",
          },
          topicArea: "daily_life",
        },
        {
          en: "By the time the waiter came, I had decided what to order.",
          bn: "ওয়েটার আসার মধ্যে আমি কী অর্ডার করব তা ঠিক করে ফেলেছিলাম।",
          slotValues: {
            EVENT: "the waiter came",
            "PAST PARTICIPLE": "decided what to order",
          },
          topicArea: "food",
        },
        {
          en: "By the time she called, I had already gone to sleep.",
          bn: "সে ফোন করার মধ্যে আমি ঘুমিয়ে পড়েছিলাম।",
          slotValues: {
            EVENT: "she called",
            "PAST PARTICIPLE": "already gone to sleep",
          },
          topicArea: "relationships",
        },
        {
          en: "By the time the doctor arrived, the patient had recovered.",
          bn: "ডাক্তার আসার মধ্যে রোগী সুস্থ হয়ে গিয়েছিল।",
          slotValues: {
            EVENT: "the doctor arrived",
            "PAST PARTICIPLE": "recovered",
          },
          topicArea: "health",
        },
        {
          en: "By the time we got to the airport, the plane had taken off.",
          bn: "আমরা বিমানবন্দরে পৌঁছানোর মধ্যে বিমান উড়ে গিয়েছিল।",
          slotValues: {
            EVENT: "we got to the airport",
            "PAST PARTICIPLE": "taken off",
          },
          topicArea: "travel",
        },
        {
          en: "By the time I got to the store, it had closed.",
          bn: "আমি দোকানে পৌঁছানোর মধ্যে দোকান বন্ধ হয়ে গিয়েছিল।",
          slotValues: {
            EVENT: "I got to the store",
            "PAST PARTICIPLE": "closed",
          },
          topicArea: "shopping",
        },
        {
          en: "By the time he woke up, I had prepared breakfast.",
          bn: "সে ঘুম থেকে ওঠার মধ্যে আমি নাস্তা তৈরি করে ফেলেছিলাম।",
          slotValues: {
            EVENT: "he woke up",
            "PAST PARTICIPLE": "prepared breakfast",
          },
          topicArea: "food",
        },
        {
          en: "By the time the meeting started, I had reviewed all the files.",
          bn: "মিটিং শুরু হওয়ার মধ্যে আমি সব ফাইল দেখে ফেলেছিলাম।",
          slotValues: {
            EVENT: "the meeting started",
            "PAST PARTICIPLE": "reviewed all the files",
          },
          topicArea: "work",
        },
        {
          en: "By the time I turned 20, I had traveled to five countries.",
          bn: "২০ বছর বয়স হওয়ার মধ্যে আমি পাঁচটি দেশে ভ্রমণ করেছিলাম।",
          slotValues: {
            EVENT: "I turned 20",
            "PAST PARTICIPLE": "traveled to five countries",
          },
          topicArea: "travel",
        },
        {
          en: "By the time the teacher arrived, the students had left.",
          bn: "শিক্ষক আসার মধ্যে ছাত্ররা চলে গিয়েছিল।",
          slotValues: {
            EVENT: "the teacher arrived",
            "PAST PARTICIPLE": "left",
          },
          topicArea: "education",
        },
        {
          en: "By the time I finished running, I had burned 500 calories.",
          bn: "দৌড় শেষ করার মধ্যে আমি ৫০০ ক্যালোরি বার্ন করেছিলাম।",
          slotValues: {
            EVENT: "I finished running",
            "PAST PARTICIPLE": "burned 500 calories",
          },
          topicArea: "health",
        },
        {
          en: "By the time she apologized, I had forgiven her.",
          bn: "সে ক্ষমা চাওয়ার মধ্যে আমি তাকে মাফ করে দিয়েছিলাম।",
          slotValues: {
            EVENT: "she apologized",
            "PAST PARTICIPLE": "forgiven her",
          },
          topicArea: "relationships",
        },
        {
          en: "By the time the alarm went off, I had already woken up.",
          bn: "অ্যালার্ম বাজার আগেই আমি জেগে গিয়েছিলাম।",
          slotValues: {
            EVENT: "the alarm went off",
            "PAST PARTICIPLE": "already woken up",
          },
          topicArea: "daily_life",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "'By the time' introduces the later event. The past perfect (had + past participle) shows which action happened first. This pattern clearly orders two past events.",
      usageNote_bn:
        "'By the time' পরবর্তী ঘটনাটি পরিচয় করায়। পাস্ট পারফেক্ট (had + past participle) দেখায় কোন কাজটি আগে ঘটেছিল। এই প্যাটার্ন দুটি অতীত ঘটনার ক্রম স্পষ্ট করে।",
      combinableWith: ["C6.1"],
      banglaStructureMap:
        "[EVENT] (ঘটনা) + হওয়ার মধ্যে + আমি (Subject) + [PP] (Verb) + করে ফেলেছিলাম (Past Perfect Aux)",
    },
    {
      id: "C6.3",
      formula: "I had never [PAST PARTICIPLE] before [EVENT]",
      formula_bn: "[ঘটনা]-র আগে আমি কখনো [কাজ] করিনি",
      patternName: "First Time Experience in Past",
      patternName_bn: "অতীতে প্রথমবারের অভিজ্ঞতা",
      slots: [
        {
          name: "PAST PARTICIPLE",
          description:
            "A verb in past participle form for something not done before",
          description_bn:
            "আগে করা হয়নি এমন কিছুর জন্য অতীত কৃদন্ত রূপের একটি ক্রিয়া",
          acceptedTypes: ["past_participle"],
          examples: ["seen", "tasted", "tried"],
        },
        {
          name: "EVENT",
          description: "The event or time when the experience first happened",
          description_bn: "যে ঘটনা বা সময়ে অভিজ্ঞতাটি প্রথম ঘটেছিল",
          acceptedTypes: ["event", "clause"],
          examples: ["that day", "I moved here", "last year"],
        },
      ],
      examples: [
        {
          en: "I had never seen snow before I moved to Canada.",
          bn: "কানাডায় যাওয়ার আগে আমি কখনো তুষারপাত দেখিনি।",
          slotValues: {
            "PAST PARTICIPLE": "seen snow",
            EVENT: "I moved to Canada",
          },
          topicArea: "travel",
        },
        {
          en: "I had never tasted sushi before that trip to Japan.",
          bn: "জাপান ভ্রমণের আগে আমি কখনো সুশি খাইনি।",
          slotValues: {
            "PAST PARTICIPLE": "tasted sushi",
            EVENT: "that trip to Japan",
          },
          topicArea: "food",
        },
        {
          en: "I had never driven on a highway before that day.",
          bn: "সেদিনের আগে আমি কখনো হাইওয়েতে গাড়ি চালাইনি।",
          slotValues: {
            "PAST PARTICIPLE": "driven on a highway",
            EVENT: "that day",
          },
          topicArea: "travel",
        },
        {
          en: "I had never worked in a team before my first job.",
          bn: "প্রথম চাকরির আগে আমি কখনো দলে কাজ করিনি।",
          slotValues: {
            "PAST PARTICIPLE": "worked in a team",
            EVENT: "my first job",
          },
          topicArea: "work",
        },
        {
          en: "I had never spoken in public before that presentation.",
          bn: "সেই প্রেজেন্টেশনের আগে আমি কখনো জনসম্মুখে কথা বলিনি।",
          slotValues: {
            "PAST PARTICIPLE": "spoken in public",
            EVENT: "that presentation",
          },
          topicArea: "education",
        },
        {
          en: "I had never lived alone before I went to university.",
          bn: "বিশ্ববিদ্যালয়ে যাওয়ার আগে আমি কখনো একা থাকিনি।",
          slotValues: {
            "PAST PARTICIPLE": "lived alone",
            EVENT: "I went to university",
          },
          topicArea: "daily_life",
        },
        {
          en: "I had never felt so happy before I met her.",
          bn: "তার সাথে দেখা হওয়ার আগে আমি কখনো এত খুশি হইনি।",
          slotValues: {
            "PAST PARTICIPLE": "felt so happy",
            EVENT: "I met her",
          },
          topicArea: "relationships",
        },
        {
          en: "I had never run a marathon before last year.",
          bn: "গত বছরের আগে আমি কখনো ম্যারাথন দৌড়াইনি।",
          slotValues: {
            "PAST PARTICIPLE": "run a marathon",
            EVENT: "last year",
          },
          topicArea: "health",
        },
        {
          en: "I had never bought anything so expensive before that watch.",
          bn: "সেই ঘড়ির আগে আমি কখনো এত দামি কিছু কিনিনি।",
          slotValues: {
            "PAST PARTICIPLE": "bought anything so expensive",
            EVENT: "that watch",
          },
          topicArea: "shopping",
        },
        {
          en: "I had never cooked a full meal before I got married.",
          bn: "বিয়ের আগে আমি কখনো পুরো একটি খাবার রান্না করিনি।",
          slotValues: {
            "PAST PARTICIPLE": "cooked a full meal",
            EVENT: "I got married",
          },
          topicArea: "food",
        },
        {
          en: "I had never managed a project before that role.",
          bn: "সেই পদের আগে আমি কখনো কোনো প্রকল্প পরিচালনা করিনি।",
          slotValues: {
            "PAST PARTICIPLE": "managed a project",
            EVENT: "that role",
          },
          topicArea: "work",
        },
        {
          en: "I had never studied abroad before my exchange program.",
          bn: "এক্সচেঞ্জ প্রোগ্রামের আগে আমি কখনো বিদেশে পড়িনি।",
          slotValues: {
            "PAST PARTICIPLE": "studied abroad",
            EVENT: "my exchange program",
          },
          topicArea: "education",
        },
        {
          en: "I had never stayed up all night before that exam.",
          bn: "সেই পরীক্ষার আগে আমি কখনো সারারাত জেগে থাকিনি।",
          slotValues: {
            "PAST PARTICIPLE": "stayed up all night",
            EVENT: "that exam",
          },
          topicArea: "daily_life",
        },
        {
          en: "I had never been to a hospital before that accident.",
          bn: "সেই দুর্ঘটনার আগে আমি কখনো হাসপাতালে যাইনি।",
          slotValues: {
            "PAST PARTICIPLE": "been to a hospital",
            EVENT: "that accident",
          },
          topicArea: "health",
        },
        {
          en: "I had never trusted anyone so much before I met him.",
          bn: "তার সাথে দেখা হওয়ার আগে আমি কখনো কাউকে এতটা বিশ্বাস করিনি।",
          slotValues: {
            "PAST PARTICIPLE": "trusted anyone so much",
            EVENT: "I met him",
          },
          topicArea: "relationships",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "'Had never ... before' emphasizes that something was a first-time experience. The 'before' clause gives the reference point in the past.",
      usageNote_bn:
        "'Had never ... before' জোর দেয় যে কিছু প্রথমবারের অভিজ্ঞতা ছিল। 'Before' ক্লজটি অতীতে রেফারেন্স পয়েন্ট দেয়।",
      combinableWith: ["C6.1", "C6.2"],
      banglaStructureMap:
        "[EVENT] (ঘটনা) + এর আগে + আমি (Subject) + কখনো (Adverb) + [PP] (Verb) + করিনি (Neg Past Perfect Aux)",
    },
    {
      id: "C6.4",
      formula: "After I had [PAST PARTICIPLE], I [PAST ACTION]",
      formula_bn: "আমি [কাজ] করার পরে, আমি [পরের কাজ] করলাম",
      patternName: "After + Past Perfect Sequence",
      patternName_bn: "আফটার + পাস্ট পারফেক্ট ক্রম",
      slots: [
        {
          name: "PAST PARTICIPLE",
          description:
            "A verb in past participle form for the first completed action",
          description_bn:
            "প্রথম সম্পন্ন কাজটির জন্য অতীত কৃদন্ত রূপের একটি ক্রিয়া",
          acceptedTypes: ["past_participle"],
          examples: ["eaten", "finished", "packed"],
        },
        {
          name: "PAST ACTION",
          description: "A verb in simple past for the next action",
          description_bn: "পরবর্তী কাজের জন্য সিম্পল পাস্টে একটি ক্রিয়া",
          acceptedTypes: ["verb"],
          examples: ["went out", "started working", "left"],
        },
      ],
      examples: [
        {
          en: "After I had eaten breakfast, I went to work.",
          bn: "নাস্তা খাওয়ার পরে, আমি কাজে গেলাম।",
          slotValues: {
            "PAST PARTICIPLE": "eaten breakfast",
            "PAST ACTION": "went to work",
          },
          topicArea: "daily_life",
        },
        {
          en: "After I had finished the exam, I felt relieved.",
          bn: "পরীক্ষা শেষ করার পরে, আমি স্বস্তি অনুভব করলাম।",
          slotValues: {
            "PAST PARTICIPLE": "finished the exam",
            "PAST ACTION": "felt relieved",
          },
          topicArea: "education",
        },
        {
          en: "After I had packed my bags, I called a taxi.",
          bn: "ব্যাগ গোছানোর পরে, আমি ট্যাক্সি ডাকলাম।",
          slotValues: {
            "PAST PARTICIPLE": "packed my bags",
            "PAST ACTION": "called a taxi",
          },
          topicArea: "travel",
        },
        {
          en: "After I had saved enough money, I bought a new phone.",
          bn: "যথেষ্ট টাকা জমানোর পরে, আমি একটি নতুন ফোন কিনলাম।",
          slotValues: {
            "PAST PARTICIPLE": "saved enough money",
            "PAST ACTION": "bought a new phone",
          },
          topicArea: "shopping",
        },
        {
          en: "After I had completed the training, I got promoted.",
          bn: "প্রশিক্ষণ শেষ করার পরে, আমি পদোন্নতি পেলাম।",
          slotValues: {
            "PAST PARTICIPLE": "completed the training",
            "PAST ACTION": "got promoted",
          },
          topicArea: "work",
        },
        {
          en: "After I had exercised, I took a long shower.",
          bn: "ব্যায়াম করার পরে, আমি অনেকক্ষণ গোসল করলাম।",
          slotValues: {
            "PAST PARTICIPLE": "exercised",
            "PAST ACTION": "took a long shower",
          },
          topicArea: "health",
        },
        {
          en: "After I had cooked dinner, I watched a movie.",
          bn: "রাতের খাবার রান্না করার পরে, আমি একটি সিনেমা দেখলাম।",
          slotValues: {
            "PAST PARTICIPLE": "cooked dinner",
            "PAST ACTION": "watched a movie",
          },
          topicArea: "food",
        },
        {
          en: "After I had apologized, we made up.",
          bn: "ক্ষমা চাওয়ার পরে, আমরা মিটমাট করলাম।",
          slotValues: {
            "PAST PARTICIPLE": "apologized",
            "PAST ACTION": "made up",
          },
          topicArea: "relationships",
        },
        {
          en: "After I had checked in, I explored the city.",
          bn: "চেক ইন করার পরে, আমি শহর ঘুরে দেখলাম।",
          slotValues: {
            "PAST PARTICIPLE": "checked in",
            "PAST ACTION": "explored the city",
          },
          topicArea: "travel",
        },
        {
          en: "After I had cleaned the kitchen, I sat down to relax.",
          bn: "রান্নাঘর পরিষ্কার করার পরে, আমি বসে আরাম করলাম।",
          slotValues: {
            "PAST PARTICIPLE": "cleaned the kitchen",
            "PAST ACTION": "sat down to relax",
          },
          topicArea: "daily_life",
        },
        {
          en: "After I had taken the medicine, I started feeling better.",
          bn: "ওষুধ খাওয়ার পরে, আমি ভালো অনুভব করতে শুরু করলাম।",
          slotValues: {
            "PAST PARTICIPLE": "taken the medicine",
            "PAST ACTION": "started feeling better",
          },
          topicArea: "health",
        },
        {
          en: "After I had reviewed the notes, I wrote the essay.",
          bn: "নোটগুলো দেখার পরে, আমি রচনাটি লিখলাম।",
          slotValues: {
            "PAST PARTICIPLE": "reviewed the notes",
            "PAST ACTION": "wrote the essay",
          },
          topicArea: "education",
        },
        {
          en: "After I had sent the email, I left the office.",
          bn: "ইমেইল পাঠানোর পরে, আমি অফিস থেকে বেরিয়ে গেলাম।",
          slotValues: {
            "PAST PARTICIPLE": "sent the email",
            "PAST ACTION": "left the office",
          },
          topicArea: "work",
        },
        {
          en: "After I had compared the prices, I chose the cheaper one.",
          bn: "দাম তুলনা করার পরে, আমি সস্তাটি বেছে নিলাম।",
          slotValues: {
            "PAST PARTICIPLE": "compared the prices",
            "PAST ACTION": "chose the cheaper one",
          },
          topicArea: "shopping",
        },
        {
          en: "After I had spoken to her, I understood the situation.",
          bn: "তার সাথে কথা বলার পরে, আমি পরিস্থিতি বুঝতে পারলাম।",
          slotValues: {
            "PAST PARTICIPLE": "spoken to her",
            "PAST ACTION": "understood the situation",
          },
          topicArea: "relationships",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "'After' + past perfect clearly shows the first action was completed before the second began. The second clause uses simple past.",
      usageNote_bn:
        "'After' + পাস্ট পারফেক্ট স্পষ্টভাবে দেখায় যে প্রথম কাজটি দ্বিতীয়টি শুরু হওয়ার আগে সম্পন্ন হয়েছিল। দ্বিতীয় ক্লজটি সিম্পল পাস্ট ব্যবহার করে।",
      combinableWith: ["C6.1", "C6.5"],
      banglaStructureMap:
        "আমি (Subject) + [PP] (Verb) + করার পরে + আমি (Subject) + [PAST ACTION] (Verb) + করলাম (Past Aux)",
    },
    {
      id: "C6.5",
      formula: "If I had [PAST PARTICIPLE], I would have [PAST PARTICIPLE]",
      formula_bn:
        "যদি আমি [কাজ] করতাম, তাহলে আমি [ফলাফল] করতাম",
      patternName: "Past Unreal Condition (Third Conditional)",
      patternName_bn: "অতীতের অবাস্তব শর্ত (তৃতীয় কন্ডিশনাল)",
      slots: [
        {
          name: "PAST PARTICIPLE",
          description:
            "A verb in past participle form for the hypothetical past action",
          description_bn:
            "কল্পিত অতীত কাজের জন্য অতীত কৃদন্ত রূপের একটি ক্রিয়া",
          acceptedTypes: ["past_participle"],
          examples: ["studied harder", "known", "left earlier"],
        },
        {
          name: "RESULT",
          description:
            "A verb in past participle form for the hypothetical result",
          description_bn: "কল্পিত ফলাফলের জন্য অতীত কৃদন্ত রূপের একটি ক্রিয়া",
          acceptedTypes: ["past_participle"],
          examples: ["passed", "gone", "arrived on time"],
        },
      ],
      examples: [
        {
          en: "If I had studied harder, I would have passed the exam.",
          bn: "যদি আমি আরও পড়তাম, তাহলে পরীক্ষায় পাস করতাম।",
          slotValues: {
            "PAST PARTICIPLE": "studied harder",
            RESULT: "passed the exam",
          },
          topicArea: "education",
        },
        {
          en: "If I had left earlier, I would have caught the train.",
          bn: "যদি আমি আগে বের হতাম, তাহলে ট্রেন ধরতে পারতাম।",
          slotValues: {
            "PAST PARTICIPLE": "left earlier",
            RESULT: "caught the train",
          },
          topicArea: "travel",
        },
        {
          en: "If I had known about the sale, I would have bought the jacket.",
          bn: "যদি আমি সেলের কথা জানতাম, তাহলে জ্যাকেটটি কিনতাম।",
          slotValues: {
            "PAST PARTICIPLE": "known about the sale",
            RESULT: "bought the jacket",
          },
          topicArea: "shopping",
        },
        {
          en: "If I had eaten less, I would have felt better.",
          bn: "যদি আমি কম খেতাম, তাহলে ভালো অনুভব করতাম।",
          slotValues: {
            "PAST PARTICIPLE": "eaten less",
            RESULT: "felt better",
          },
          topicArea: "health",
        },
        {
          en: "If I had prepared the report, I would have impressed my boss.",
          bn: "যদি আমি রিপোর্ট তৈরি করতাম, তাহলে বসকে প্রভাবিত করতে পারতাম।",
          slotValues: {
            "PAST PARTICIPLE": "prepared the report",
            RESULT: "impressed my boss",
          },
          topicArea: "work",
        },
        {
          en: "If I had woken up earlier, I would have had time for breakfast.",
          bn: "যদি আমি আগে উঠতাম, তাহলে নাস্তার সময় পেতাম।",
          slotValues: {
            "PAST PARTICIPLE": "woken up earlier",
            RESULT: "had time for breakfast",
          },
          topicArea: "daily_life",
        },
        {
          en: "If I had called her, she would have forgiven me.",
          bn: "যদি আমি তাকে ফোন করতাম, তাহলে সে আমাকে মাফ করত।",
          slotValues: {
            "PAST PARTICIPLE": "called her",
            RESULT: "forgiven me",
          },
          topicArea: "relationships",
        },
        {
          en: "If I had followed the recipe, the food would have tasted better.",
          bn: "যদি আমি রেসিপি অনুসরণ করতাম, তাহলে খাবারের স্বাদ ভালো হতো।",
          slotValues: {
            "PAST PARTICIPLE": "followed the recipe",
            RESULT: "tasted better",
          },
          topicArea: "food",
        },
        {
          en: "If I had booked earlier, I would have gotten a cheaper flight.",
          bn: "যদি আমি আগে বুক করতাম, তাহলে সস্তা ফ্লাইট পেতাম।",
          slotValues: {
            "PAST PARTICIPLE": "booked earlier",
            RESULT: "gotten a cheaper flight",
          },
          topicArea: "travel",
        },
        {
          en: "If I had saved more money, I would have bought a car.",
          bn: "যদি আমি আরও টাকা জমাতাম, তাহলে গাড়ি কিনতাম।",
          slotValues: {
            "PAST PARTICIPLE": "saved more money",
            RESULT: "bought a car",
          },
          topicArea: "shopping",
        },
        {
          en: "If I had taken the job, I would have moved to London.",
          bn: "যদি আমি চাকরিটি নিতাম, তাহলে লন্ডনে চলে যেতাম।",
          slotValues: {
            "PAST PARTICIPLE": "taken the job",
            RESULT: "moved to London",
          },
          topicArea: "work",
        },
        {
          en: "If I had practiced more, I would have played better.",
          bn: "যদি আমি আরও অনুশীলন করতাম, তাহলে ভালো খেলতে পারতাম।",
          slotValues: {
            "PAST PARTICIPLE": "practiced more",
            RESULT: "played better",
          },
          topicArea: "health",
        },
        {
          en: "If I had listened to my teacher, I would have learned faster.",
          bn: "যদি আমি শিক্ষকের কথা শুনতাম, তাহলে দ্রুত শিখতে পারতাম।",
          slotValues: {
            "PAST PARTICIPLE": "listened to my teacher",
            RESULT: "learned faster",
          },
          topicArea: "education",
        },
        {
          en: "If I had slept well, I would have been more productive.",
          bn: "যদি আমি ভালো ঘুমাতাম, তাহলে আরও বেশি কাজ করতে পারতাম।",
          slotValues: {
            "PAST PARTICIPLE": "slept well",
            RESULT: "been more productive",
          },
          topicArea: "daily_life",
        },
        {
          en: "If I had been honest, she would have trusted me.",
          bn: "যদি আমি সৎ থাকতাম, তাহলে সে আমাকে বিশ্বাস করত।",
          slotValues: {
            "PAST PARTICIPLE": "been honest",
            RESULT: "trusted me",
          },
          topicArea: "relationships",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "The third conditional talks about unreal past situations and their imagined results. Neither the condition nor the result actually happened.",
      usageNote_bn:
        "তৃতীয় কন্ডিশনাল অবাস্তব অতীত পরিস্থিতি এবং তাদের কল্পিত ফলাফল সম্পর্কে বলে। শর্ত বা ফলাফল কোনোটিই আসলে ঘটেনি।",
      combinableWith: ["C6.1", "C6.4"],
      banglaStructureMap:
        "যদি + আমি (Subject) + [PP] (Verb) + করতাম (Past Unreal) + তাহলে + আমি (Subject) + [RESULT] (Verb) + করতাম (Unreal Result)",
    },
    {
      id: "C6.6",
      formula: "I had been [DOING] for [TIME] before [EVENT]",
      formula_bn: "[ঘটনা]-এর আগে আমি [সময়] ধরে [কাজ করছিলাম]",
      patternName: "Past Perfect Continuous",
      patternName_bn: "পাস্ট পারফেক্ট কন্টিনিউয়াস",
      slots: [
        {
          name: "DOING",
          description: "A verb in -ing form for the ongoing past action before another past event",
          description_bn:
            "অন্য একটি অতীত ঘটনার আগে চলমান অতীত কাজের জন্য একটি -ing রূপের ক্রিয়া",
          acceptedTypes: ["gerund"],
          examples: ["waiting", "studying", "living"],
        },
        {
          name: "TIME",
          description: "A duration indicating how long the action had been going on",
          description_bn: "কাজটি কতক্ষণ ধরে চলছিল তা নির্দেশকারী সময়কাল",
          acceptedTypes: ["time"],
          examples: ["an hour", "all night", "10 years"],
        },
        {
          name: "EVENT",
          description: "A past event that interrupted or followed the ongoing action",
          description_bn: "একটি অতীত ঘটনা যা চলমান কাজকে বাধা দিয়েছে বা তার পরে ঘটেছে",
          acceptedTypes: ["event", "clause"],
          examples: ["the bus came", "the exam", "they moved"],
        },
      ],
      examples: [
        {
          en: "I had been waiting for an hour before the bus came.",
          bn: "বাস আসার আগে আমি এক ঘণ্টা ধরে অপেক্ষা করছিলাম।",
          slotValues: { DOING: "waiting", TIME: "an hour", EVENT: "the bus came" },
          topicArea: "travel",
        },
        {
          en: "She had been studying all night before the exam.",
          bn: "পরীক্ষার আগে সে সারারাত পড়ছিল।",
          slotValues: { DOING: "studying", TIME: "all night", EVENT: "the exam" },
          topicArea: "education",
        },
        {
          en: "They had been living there for 10 years before they moved.",
          bn: "তারা সরে যাওয়ার আগে ১০ বছর ধরে সেখানে থাকছিল।",
          slotValues: { DOING: "living there", TIME: "10 years", EVENT: "they moved" },
          topicArea: "daily_life",
        },
        {
          en: "I had been working for five hours before I took a break.",
          bn: "বিরতি নেওয়ার আগে আমি পাঁচ ঘণ্টা ধরে কাজ করছিলাম।",
          slotValues: { DOING: "working", TIME: "five hours", EVENT: "I took a break" },
          topicArea: "work",
        },
        {
          en: "He had been running for 30 minutes before he felt tired.",
          bn: "ক্লান্ত অনুভব করার আগে সে ৩০ মিনিট ধরে দৌড়াচ্ছিল।",
          slotValues: { DOING: "running", TIME: "30 minutes", EVENT: "he felt tired" },
          topicArea: "health",
        },
        {
          en: "She had been cooking for two hours before the guests arrived.",
          bn: "অতিথিরা আসার আগে সে দুই ঘণ্টা ধরে রান্না করছিল।",
          slotValues: { DOING: "cooking", TIME: "two hours", EVENT: "the guests arrived" },
          topicArea: "food",
        },
        {
          en: "I had been looking for a job for months before I got this one.",
          bn: "এই চাকরি পাওয়ার আগে আমি কয়েক মাস ধরে চাকরি খুঁজছিলাম।",
          slotValues: { DOING: "looking for a job", TIME: "months", EVENT: "I got this one" },
          topicArea: "work",
        },
        {
          en: "We had been traveling for six hours before we reached the hotel.",
          bn: "হোটেলে পৌঁছানোর আগে আমরা ছয় ঘণ্টা ধরে ভ্রমণ করছিলাম।",
          slotValues: { DOING: "traveling", TIME: "six hours", EVENT: "we reached the hotel" },
          topicArea: "travel",
        },
        {
          en: "He had been saving money for a year before he bought the car.",
          bn: "গাড়ি কেনার আগে সে এক বছর ধরে টাকা জমাচ্ছিল।",
          slotValues: { DOING: "saving money", TIME: "a year", EVENT: "he bought the car" },
          topicArea: "shopping",
        },
        {
          en: "She had been teaching for 20 years before she retired.",
          bn: "অবসর নেওয়ার আগে সে ২০ বছর ধরে পড়াচ্ছিল।",
          slotValues: { DOING: "teaching", TIME: "20 years", EVENT: "she retired" },
          topicArea: "education",
        },
        {
          en: "I had been feeling sick for days before I went to the doctor.",
          bn: "ডাক্তারের কাছে যাওয়ার আগে আমি কয়েকদিন ধরে অসুস্থ অনুভব করছিলাম।",
          slotValues: { DOING: "feeling sick", TIME: "days", EVENT: "I went to the doctor" },
          topicArea: "health",
        },
        {
          en: "They had been arguing for an hour before they finally agreed.",
          bn: "অবশেষে একমত হওয়ার আগে তারা এক ঘণ্টা ধরে তর্ক করছিল।",
          slotValues: { DOING: "arguing", TIME: "an hour", EVENT: "they finally agreed" },
          topicArea: "relationships",
        },
        {
          en: "I had been reading for three hours before the power went out.",
          bn: "বিদ্যুৎ চলে যাওয়ার আগে আমি তিন ঘণ্টা ধরে পড়ছিলাম।",
          slotValues: { DOING: "reading", TIME: "three hours", EVENT: "the power went out" },
          topicArea: "daily_life",
        },
        {
          en: "She had been planning the party for weeks before the big day.",
          bn: "বড় দিনটির আগে সে কয়েক সপ্তাহ ধরে পার্টির পরিকল্পনা করছিল।",
          slotValues: { DOING: "planning the party", TIME: "weeks", EVENT: "the big day" },
          topicArea: "relationships",
        },
        {
          en: "We had been trying that recipe for a long time before we got it right.",
          bn: "সঠিকভাবে করার আগে আমরা অনেকদিন ধরে সেই রেসিপি চেষ্টা করছিলাম।",
          slotValues: { DOING: "trying that recipe", TIME: "a long time", EVENT: "we got it right" },
          topicArea: "food",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "The past perfect continuous (had been + -ing) emphasizes the duration of an ongoing action that happened before another past event. Use 'for' with durations. 'Before' introduces the later past event.",
      usageNote_bn:
        "পাস্ট পারফেক্ট কন্টিনিউয়াস (had been + -ing) অন্য একটি অতীত ঘটনার আগে চলমান একটি কাজের সময়কাল জোর দেয়। সময়কালের সাথে 'for' ব্যবহার করুন। 'Before' পরবর্তী অতীত ঘটনা পরিচয় করায়।",
      combinableWith: ["C6.1", "C6.2"],
      banglaStructureMap:
        "[EVENT] (ঘটনা) + এর আগে + আমি (Subject) + [TIME] ধরে (Duration) + [DOING] (Verb) + করছিলাম (Past Perfect Prog Aux)",
    },
  ],
};
