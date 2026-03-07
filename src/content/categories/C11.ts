import { PatternCategory } from "@/types/pattern";

export const categoryC11: PatternCategory = {
  id: "C11",
  slug: "passive-voice",
  name: "Passive (What Was/Is/Will Be Done)",
  name_bn: "কর্মবাচ্য (কী করা হয়েছিল/হচ্ছে/হবে)",
  description:
    "Learn how to describe actions focusing on what was done rather than who did it, using passive voice patterns.",
  description_bn:
    "কে করেছে তার বদলে কী করা হয়েছে তার উপর ফোকাস করে কর্মবাচ্য প্যাটার্ন ব্যবহার করে কাজ বর্ণনা করতে শিখুন।",
  icon: "🔀",
  group: "C",
  groupName: "Actions & Time Patterns",
  groupName_bn: "কর্ম এবং সময়ের প্যাটার্ন",
  difficulty: "intermediate",
  patterns: [
    {
      id: "C11.1",
      formula: "[THING] was [PAST PARTICIPLE] by [AGENT]",
      formula_bn: "[জিনিস] [কর্তা] দ্বারা [কাজ] করা হয়েছিল",
      patternName: "Past Passive with Agent",
      patternName_bn: "কর্তাসহ অতীত কর্মবাচ্য",
      slots: [
        {
          name: "THING",
          description: "The noun or noun phrase that received the action",
          description_bn: "যে বিশেষ্য বা বিশেষ্য পদবন্ধ কাজটি গ্রহণ করেছে",
          acceptedTypes: ["noun", "noun_phrase"],
          examples: ["the book", "this building", "the letter"],
        },
        {
          name: "PAST PARTICIPLE",
          description: "A verb in past participle form for the action done",
          description_bn: "সম্পন্ন কাজের জন্য অতীত কৃদন্ত রূপের একটি ক্রিয়া",
          acceptedTypes: ["past_participle"],
          examples: ["written", "built", "sent"],
        },
        {
          name: "AGENT",
          description: "The person or thing that performed the action",
          description_bn: "যে ব্যক্তি বা জিনিস কাজটি সম্পাদন করেছে",
          acceptedTypes: ["person", "noun"],
          examples: ["Shakespeare", "the Romans", "my teacher"],
        },
      ],
      examples: [
        {
          en: "The book was written by a famous author.",
          bn: "বইটি একজন বিখ্যাত লেখক দ্বারা লেখা হয়েছিল।",
          slotValues: {
            THING: "The book",
            "PAST PARTICIPLE": "written",
            AGENT: "a famous author",
          },
          topicArea: "education",
        },
        {
          en: "This building was designed by a local architect.",
          bn: "এই ভবনটি একজন স্থানীয় স্থপতি দ্বারা ডিজাইন করা হয়েছিল।",
          slotValues: {
            THING: "This building",
            "PAST PARTICIPLE": "designed",
            AGENT: "a local architect",
          },
          topicArea: "daily_life",
        },
        {
          en: "The letter was sent by my grandmother.",
          bn: "চিঠিটি আমার দাদি দ্বারা পাঠানো হয়েছিল।",
          slotValues: {
            THING: "The letter",
            "PAST PARTICIPLE": "sent",
            AGENT: "my grandmother",
          },
          topicArea: "relationships",
        },
        {
          en: "The meal was prepared by the head chef.",
          bn: "খাবারটি প্রধান শেফ দ্বারা তৈরি করা হয়েছিল।",
          slotValues: {
            THING: "The meal",
            "PAST PARTICIPLE": "prepared",
            AGENT: "the head chef",
          },
          topicArea: "food",
        },
        {
          en: "The report was completed by the entire team.",
          bn: "রিপোর্টটি পুরো দল দ্বারা সম্পন্ন করা হয়েছিল।",
          slotValues: {
            THING: "The report",
            "PAST PARTICIPLE": "completed",
            AGENT: "the entire team",
          },
          topicArea: "work",
        },
        {
          en: "The vaccine was developed by scientists.",
          bn: "টিকাটি বিজ্ঞানীদের দ্বারা তৈরি করা হয়েছিল।",
          slotValues: {
            THING: "The vaccine",
            "PAST PARTICIPLE": "developed",
            AGENT: "scientists",
          },
          topicArea: "health",
        },
        {
          en: "The bridge was built by the government.",
          bn: "সেতুটি সরকার দ্বারা নির্মিত হয়েছিল।",
          slotValues: {
            THING: "The bridge",
            "PAST PARTICIPLE": "built",
            AGENT: "the government",
          },
          topicArea: "travel",
        },
        {
          en: "The dress was made by a talented designer.",
          bn: "পোশাকটি একজন প্রতিভাবান ডিজাইনার দ্বারা তৈরি করা হয়েছিল।",
          slotValues: {
            THING: "The dress",
            "PAST PARTICIPLE": "made",
            AGENT: "a talented designer",
          },
          topicArea: "shopping",
        },
        {
          en: "The poem was recited by the student.",
          bn: "কবিতাটি ছাত্র দ্বারা আবৃত্তি করা হয়েছিল।",
          slotValues: {
            THING: "The poem",
            "PAST PARTICIPLE": "recited",
            AGENT: "the student",
          },
          topicArea: "education",
        },
        {
          en: "The garden was planted by my mother.",
          bn: "বাগানটি আমার মা দ্বারা লাগানো হয়েছিল।",
          slotValues: {
            THING: "The garden",
            "PAST PARTICIPLE": "planted",
            AGENT: "my mother",
          },
          topicArea: "daily_life",
        },
        {
          en: "The project was approved by the manager.",
          bn: "প্রকল্পটি ম্যানেজার দ্বারা অনুমোদিত হয়েছিল।",
          slotValues: {
            THING: "The project",
            "PAST PARTICIPLE": "approved",
            AGENT: "the manager",
          },
          topicArea: "work",
        },
        {
          en: "The song was sung by a local band.",
          bn: "গানটি একটি স্থানীয় ব্যান্ড দ্বারা গাওয়া হয়েছিল।",
          slotValues: {
            THING: "The song",
            "PAST PARTICIPLE": "sung",
            AGENT: "a local band",
          },
          topicArea: "daily_life",
        },
        {
          en: "The cake was baked by my sister.",
          bn: "কেকটি আমার বোন দ্বারা বানানো হয়েছিল।",
          slotValues: {
            THING: "The cake",
            "PAST PARTICIPLE": "baked",
            AGENT: "my sister",
          },
          topicArea: "food",
        },
        {
          en: "The surgery was performed by Dr. Rahman.",
          bn: "অপারেশনটি ডাঃ রহমান দ্বারা করা হয়েছিল।",
          slotValues: {
            THING: "The surgery",
            "PAST PARTICIPLE": "performed",
            AGENT: "Dr. Rahman",
          },
          topicArea: "health",
        },
        {
          en: "The gift was chosen by my best friend.",
          bn: "উপহারটি আমার সেরা বন্ধু দ্বারা বেছে নেওয়া হয়েছিল।",
          slotValues: {
            THING: "The gift",
            "PAST PARTICIPLE": "chosen",
            AGENT: "my best friend",
          },
          topicArea: "relationships",
        },
      ],
      formality: "polite",
      difficulty: "intermediate",
      usageNote:
        "The passive voice shifts focus from who did something to what was done. Use 'by' to mention the agent. The agent is optional if unknown or unimportant.",
      usageNote_bn:
        "কর্মবাচ্য কে করেছে থেকে কী করা হয়েছে তার দিকে ফোকাস সরায়। কর্তা উল্লেখ করতে 'by' ব্যবহার করুন। কর্তা অজানা বা গুরুত্বহীন হলে ঐচ্ছিক।",
      combinableWith: ["C11.2", "C11.3"],
      banglaStructureMap:
        "[THING] (বিশেষ্য) + [AGENT] (কর্তা) + দ্বারা + [PP] (ক্রিয়া) + করা হয়েছিল (Past Passive)",
    },
    {
      id: "C11.2",
      formula: "[THING] is being [PAST PARTICIPLE]",
      formula_bn: "[জিনিস] [কাজ] করা হচ্ছে",
      patternName: "Present Continuous Passive",
      patternName_bn: "প্রেজেন্ট কন্টিনিউয়াস কর্মবাচ্য",
      slots: [
        {
          name: "THING",
          description:
            "The noun or noun phrase currently receiving the action",
          description_bn:
            "যে বিশেষ্য বা বিশেষ্য পদবন্ধ বর্তমানে কাজটি গ্রহণ করছে",
          acceptedTypes: ["noun", "noun_phrase"],
          examples: ["the road", "my car", "the food"],
        },
        {
          name: "PAST PARTICIPLE",
          description:
            "A verb in past participle form for the action currently happening",
          description_bn:
            "বর্তমানে চলমান কাজের জন্য অতীত কৃদন্ত রূপের একটি ক্রিয়া",
          acceptedTypes: ["past_participle"],
          examples: ["repaired", "served", "discussed"],
        },
      ],
      examples: [
        {
          en: "The road is being repaired right now.",
          bn: "রাস্তাটি এখন মেরামত করা হচ্ছে।",
          slotValues: { THING: "The road", "PAST PARTICIPLE": "repaired" },
          topicArea: "travel",
        },
        {
          en: "My car is being washed at the moment.",
          bn: "আমার গাড়িটি এই মুহূর্তে ধোয়া হচ্ছে।",
          slotValues: { THING: "My car", "PAST PARTICIPLE": "washed" },
          topicArea: "daily_life",
        },
        {
          en: "The food is being served now.",
          bn: "খাবার এখন পরিবেশন করা হচ্ছে।",
          slotValues: { THING: "The food", "PAST PARTICIPLE": "served" },
          topicArea: "food",
        },
        {
          en: "The issue is being discussed in the meeting.",
          bn: "বিষয়টি মিটিংয়ে আলোচনা করা হচ্ছে।",
          slotValues: { THING: "The issue", "PAST PARTICIPLE": "discussed" },
          topicArea: "work",
        },
        {
          en: "The students are being tested today.",
          bn: "ছাত্রদের আজ পরীক্ষা নেওয়া হচ্ছে।",
          slotValues: {
            THING: "The students",
            "PAST PARTICIPLE": "tested",
          },
          topicArea: "education",
        },
        {
          en: "The patient is being examined by the doctor.",
          bn: "রোগীকে ডাক্তার পরীক্ষা করছেন।",
          slotValues: {
            THING: "The patient",
            "PAST PARTICIPLE": "examined",
          },
          topicArea: "health",
        },
        {
          en: "New products are being launched this week.",
          bn: "এই সপ্তাহে নতুন পণ্য বাজারে আনা হচ্ছে।",
          slotValues: {
            THING: "New products",
            "PAST PARTICIPLE": "launched",
          },
          topicArea: "shopping",
        },
        {
          en: "The children are being taken care of by their aunt.",
          bn: "বাচ্চাদের তাদের খালা দেখাশোনা করছেন।",
          slotValues: {
            THING: "The children",
            "PAST PARTICIPLE": "taken care of",
          },
          topicArea: "relationships",
        },
        {
          en: "The documents are being reviewed by the legal team.",
          bn: "কাগজপত্রগুলো আইনি দল দ্বারা পর্যালোচনা করা হচ্ছে।",
          slotValues: {
            THING: "The documents",
            "PAST PARTICIPLE": "reviewed",
          },
          topicArea: "work",
        },
        {
          en: "The dinner is being prepared in the kitchen.",
          bn: "রাতের খাবার রান্নাঘরে তৈরি করা হচ্ছে।",
          slotValues: {
            THING: "The dinner",
            "PAST PARTICIPLE": "prepared",
          },
          topicArea: "food",
        },
        {
          en: "The new library is being constructed near the park.",
          bn: "নতুন লাইব্রেরি পার্কের কাছে নির্মাণ করা হচ্ছে।",
          slotValues: {
            THING: "The new library",
            "PAST PARTICIPLE": "constructed",
          },
          topicArea: "education",
        },
        {
          en: "The house is being painted this week.",
          bn: "এই সপ্তাহে ঘরটি রং করা হচ্ছে।",
          slotValues: {
            THING: "The house",
            "PAST PARTICIPLE": "painted",
          },
          topicArea: "daily_life",
        },
        {
          en: "The flights are being delayed due to weather.",
          bn: "আবহাওয়ার কারণে ফ্লাইটগুলো বিলম্বিত হচ্ছে।",
          slotValues: {
            THING: "The flights",
            "PAST PARTICIPLE": "delayed",
          },
          topicArea: "travel",
        },
        {
          en: "The results are being analyzed by the researchers.",
          bn: "ফলাফলগুলো গবেষকদের দ্বারা বিশ্লেষণ করা হচ্ছে।",
          slotValues: {
            THING: "The results",
            "PAST PARTICIPLE": "analyzed",
          },
          topicArea: "health",
        },
        {
          en: "The invitations are being sent out today.",
          bn: "আজ আমন্ত্রণপত্র পাঠানো হচ্ছে।",
          slotValues: {
            THING: "The invitations",
            "PAST PARTICIPLE": "sent out",
          },
          topicArea: "relationships",
        },
      ],
      formality: "polite",
      difficulty: "intermediate",
      usageNote:
        "'Is/are being + past participle' shows an action in progress right now in passive voice. It emphasizes the action happening to the subject.",
      usageNote_bn:
        "'Is/are being + past participle' কর্মবাচ্যে এখনই চলমান একটি কাজ দেখায়। এটি কর্তার প্রতি ঘটছে এমন কাজের উপর জোর দেয়।",
      combinableWith: ["C11.1", "C11.3"],
      banglaStructureMap:
        "[THING] (বিশেষ্য) + [PP] (ক্রিয়া) + করা হচ্ছে (Present Continuous Passive)",
    },
    {
      id: "C11.3",
      formula: "[THING] will be [PAST PARTICIPLE]",
      formula_bn: "[জিনিস] [কাজ] করা হবে",
      patternName: "Future Passive",
      patternName_bn: "ভবিষ্যৎ কর্মবাচ্য",
      slots: [
        {
          name: "THING",
          description: "The noun or noun phrase that will receive the action",
          description_bn: "যে বিশেষ্য বা বিশেষ্য পদবন্ধ কাজটি গ্রহণ করবে",
          acceptedTypes: ["noun", "noun_phrase"],
          examples: ["the results", "the package", "the new rule"],
        },
        {
          name: "PAST PARTICIPLE",
          description: "A verb in past participle form for the future action",
          description_bn:
            "ভবিষ্যৎ কাজের জন্য অতীত কৃদন্ত রূপের একটি ক্রিয়া",
          acceptedTypes: ["past_participle"],
          examples: ["announced", "delivered", "implemented"],
        },
      ],
      examples: [
        {
          en: "The results will be announced next week.",
          bn: "ফলাফল আগামী সপ্তাহে ঘোষণা করা হবে।",
          slotValues: {
            THING: "The results",
            "PAST PARTICIPLE": "announced",
          },
          topicArea: "education",
        },
        {
          en: "The package will be delivered tomorrow.",
          bn: "পার্সেলটি আগামীকাল ডেলিভারি করা হবে।",
          slotValues: {
            THING: "The package",
            "PAST PARTICIPLE": "delivered",
          },
          topicArea: "shopping",
        },
        {
          en: "The new rule will be implemented next month.",
          bn: "নতুন নিয়ম আগামী মাসে কার্যকর করা হবে।",
          slotValues: {
            THING: "The new rule",
            "PAST PARTICIPLE": "implemented",
          },
          topicArea: "work",
        },
        {
          en: "The food will be served at 7 PM.",
          bn: "খাবার সন্ধ্যা ৭টায় পরিবেশন করা হবে।",
          slotValues: { THING: "The food", "PAST PARTICIPLE": "served" },
          topicArea: "food",
        },
        {
          en: "The road will be closed for repairs.",
          bn: "রাস্তাটি মেরামতের জন্য বন্ধ করা হবে।",
          slotValues: { THING: "The road", "PAST PARTICIPLE": "closed" },
          topicArea: "travel",
        },
        {
          en: "The vaccine will be made available to everyone.",
          bn: "টিকা সবার জন্য উপলব্ধ করা হবে।",
          slotValues: {
            THING: "The vaccine",
            "PAST PARTICIPLE": "made available",
          },
          topicArea: "health",
        },
        {
          en: "The apartment will be cleaned before you arrive.",
          bn: "তোমার আসার আগে অ্যাপার্টমেন্টটি পরিষ্কার করা হবে।",
          slotValues: {
            THING: "The apartment",
            "PAST PARTICIPLE": "cleaned",
          },
          topicArea: "daily_life",
        },
        {
          en: "The wedding will be held in December.",
          bn: "বিয়ে ডিসেম্বরে অনুষ্ঠিত হবে।",
          slotValues: { THING: "The wedding", "PAST PARTICIPLE": "held" },
          topicArea: "relationships",
        },
        {
          en: "The salary will be increased from next quarter.",
          bn: "আগামী ত্রৈমাসিক থেকে বেতন বাড়ানো হবে।",
          slotValues: {
            THING: "The salary",
            "PAST PARTICIPLE": "increased",
          },
          topicArea: "work",
        },
        {
          en: "The new textbook will be published next year.",
          bn: "নতুন পাঠ্যবই আগামী বছর প্রকাশিত হবে।",
          slotValues: {
            THING: "The new textbook",
            "PAST PARTICIPLE": "published",
          },
          topicArea: "education",
        },
        {
          en: "The bill will be paid by the company.",
          bn: "বিলটি কোম্পানি দ্বারা পরিশোধ করা হবে।",
          slotValues: { THING: "The bill", "PAST PARTICIPLE": "paid" },
          topicArea: "shopping",
        },
        {
          en: "The menu will be changed for the new season.",
          bn: "নতুন মৌসুমের জন্য মেনু পরিবর্তন করা হবে।",
          slotValues: { THING: "The menu", "PAST PARTICIPLE": "changed" },
          topicArea: "food",
        },
        {
          en: "The hospital will be expanded by next year.",
          bn: "আগামী বছরের মধ্যে হাসপাতালটি সম্প্রসারণ করা হবে।",
          slotValues: {
            THING: "The hospital",
            "PAST PARTICIPLE": "expanded",
          },
          topicArea: "health",
        },
        {
          en: "The new highway will be opened next month.",
          bn: "নতুন মহাসড়ক আগামী মাসে চালু করা হবে।",
          slotValues: {
            THING: "The new highway",
            "PAST PARTICIPLE": "opened",
          },
          topicArea: "travel",
        },
        {
          en: "The guests will be invited by the host family.",
          bn: "অতিথিদের আয়োজক পরিবার দ্বারা আমন্ত্রণ জানানো হবে।",
          slotValues: {
            THING: "The guests",
            "PAST PARTICIPLE": "invited",
          },
          topicArea: "relationships",
        },
      ],
      formality: "polite",
      difficulty: "intermediate",
      usageNote:
        "'Will be + past participle' describes actions that will happen in the future in passive form. This is common in formal announcements and news.",
      usageNote_bn:
        "'Will be + past participle' কর্মবাচ্যে ভবিষ্যতে ঘটবে এমন কাজ বর্ণনা করে। এটি আনুষ্ঠানিক ঘোষণা এবং সংবাদে সাধারণ।",
      combinableWith: ["C11.1", "C11.2"],
      banglaStructureMap:
        "[THING] (বিশেষ্য) + [PP] (ক্রিয়া) + করা হবে (Future Passive)",
    },
    {
      id: "C11.4",
      formula: "[THING] has been [PAST PARTICIPLE]",
      formula_bn: "[জিনিস] [কাজ] করা হয়েছে",
      patternName: "Present Perfect Passive",
      patternName_bn: "প্রেজেন্ট পারফেক্ট কর্মবাচ্য",
      slots: [
        {
          name: "THING",
          description: "The noun that has received the completed action",
          description_bn: "যে বিশেষ্য সম্পন্ন কাজটি গ্রহণ করেছে",
          acceptedTypes: ["noun", "noun_phrase"],
          examples: ["the work", "the order", "the problem"],
        },
        {
          name: "PAST PARTICIPLE",
          description: "A verb in past participle form for the completed action",
          description_bn:
            "সম্পন্ন কাজের জন্য অতীত কৃদন্ত রূপের একটি ক্রিয়া",
          acceptedTypes: ["past_participle"],
          examples: ["completed", "placed", "solved"],
        },
      ],
      examples: [
        {
          en: "The work has been completed on time.",
          bn: "কাজটি সময়মতো সম্পন্ন করা হয়েছে।",
          slotValues: {
            THING: "The work",
            "PAST PARTICIPLE": "completed",
          },
          topicArea: "work",
        },
        {
          en: "The order has been placed successfully.",
          bn: "অর্ডারটি সফলভাবে দেওয়া হয়েছে।",
          slotValues: { THING: "The order", "PAST PARTICIPLE": "placed" },
          topicArea: "shopping",
        },
        {
          en: "The problem has been solved.",
          bn: "সমস্যাটি সমাধান করা হয়েছে।",
          slotValues: {
            THING: "The problem",
            "PAST PARTICIPLE": "solved",
          },
          topicArea: "education",
        },
        {
          en: "The food has been ordered already.",
          bn: "খাবার ইতিমধ্যে অর্ডার করা হয়েছে।",
          slotValues: { THING: "The food", "PAST PARTICIPLE": "ordered" },
          topicArea: "food",
        },
        {
          en: "The appointment has been confirmed.",
          bn: "অ্যাপয়েন্টমেন্ট নিশ্চিত করা হয়েছে।",
          slotValues: {
            THING: "The appointment",
            "PAST PARTICIPLE": "confirmed",
          },
          topicArea: "health",
        },
        {
          en: "The room has been cleaned.",
          bn: "ঘরটি পরিষ্কার করা হয়েছে।",
          slotValues: { THING: "The room", "PAST PARTICIPLE": "cleaned" },
          topicArea: "daily_life",
        },
        {
          en: "The flight has been rescheduled.",
          bn: "ফ্লাইটটি পুনঃনির্ধারণ করা হয়েছে।",
          slotValues: {
            THING: "The flight",
            "PAST PARTICIPLE": "rescheduled",
          },
          topicArea: "travel",
        },
        {
          en: "The invitations have been sent out.",
          bn: "আমন্ত্রণপত্র পাঠানো হয়েছে।",
          slotValues: {
            THING: "The invitations",
            "PAST PARTICIPLE": "sent out",
          },
          topicArea: "relationships",
        },
        {
          en: "The contract has been signed by both parties.",
          bn: "চুক্তিটি উভয় পক্ষ দ্বারা স্বাক্ষরিত হয়েছে।",
          slotValues: {
            THING: "The contract",
            "PAST PARTICIPLE": "signed",
          },
          topicArea: "work",
        },
        {
          en: "The homework has been submitted.",
          bn: "বাড়ির কাজ জমা দেওয়া হয়েছে।",
          slotValues: {
            THING: "The homework",
            "PAST PARTICIPLE": "submitted",
          },
          topicArea: "education",
        },
        {
          en: "The package has been returned to the seller.",
          bn: "পার্সেলটি বিক্রেতার কাছে ফেরত দেওয়া হয়েছে।",
          slotValues: {
            THING: "The package",
            "PAST PARTICIPLE": "returned",
          },
          topicArea: "shopping",
        },
        {
          en: "The recipe has been shared with everyone.",
          bn: "রেসিপিটি সবার সাথে শেয়ার করা হয়েছে।",
          slotValues: { THING: "The recipe", "PAST PARTICIPLE": "shared" },
          topicArea: "food",
        },
        {
          en: "The test results have been released.",
          bn: "পরীক্ষার ফলাফল প্রকাশ করা হয়েছে।",
          slotValues: {
            THING: "The test results",
            "PAST PARTICIPLE": "released",
          },
          topicArea: "health",
        },
        {
          en: "The furniture has been rearranged.",
          bn: "আসবাবপত্র পুনর্বিন্যাস করা হয়েছে।",
          slotValues: {
            THING: "The furniture",
            "PAST PARTICIPLE": "rearranged",
          },
          topicArea: "daily_life",
        },
        {
          en: "The tickets have been booked for the whole family.",
          bn: "পুরো পরিবারের জন্য টিকিট বুক করা হয়েছে।",
          slotValues: {
            THING: "The tickets",
            "PAST PARTICIPLE": "booked",
          },
          topicArea: "travel",
        },
      ],
      formality: "polite",
      difficulty: "advanced",
      usageNote:
        "'Has/have been + past participle' shows a completed action with present relevance in passive voice. Often used when the result matters more than who did it.",
      usageNote_bn:
        "'Has/have been + past participle' কর্মবাচ্যে বর্তমান প্রাসঙ্গিকতাসহ একটি সম্পন্ন কাজ দেখায়। প্রায়ই ব্যবহৃত হয় যখন কে করেছে তার চেয়ে ফলাফল বেশি গুরুত্বপূর্ণ।",
      combinableWith: ["C11.1", "C11.5"],
      banglaStructureMap:
        "[THING] (বিশেষ্য) + [PP] (ক্রিয়া) + করা হয়েছে (Present Perfect Passive)",
    },
    {
      id: "C11.5",
      formula: "[THING] should be [PAST PARTICIPLE]",
      formula_bn: "[জিনিস] [কাজ] করা উচিত",
      patternName: "Passive with Modal (Should)",
      patternName_bn: "মোডালসহ কর্মবাচ্য (উচিত)",
      slots: [
        {
          name: "THING",
          description: "The noun that should receive the action",
          description_bn: "যে বিশেষ্যের প্রতি কাজটি হওয়া উচিত",
          acceptedTypes: ["noun", "noun_phrase"],
          examples: ["the rules", "the food", "the homework"],
        },
        {
          name: "PAST PARTICIPLE",
          description:
            "A verb in past participle form for the recommended action",
          description_bn:
            "প্রস্তাবিত কাজের জন্য অতীত কৃদন্ত রূপের একটি ক্রিয়া",
          acceptedTypes: ["past_participle"],
          examples: ["followed", "stored", "submitted"],
        },
      ],
      examples: [
        {
          en: "The rules should be followed by everyone.",
          bn: "নিয়মগুলো সবার অনুসরণ করা উচিত।",
          slotValues: {
            THING: "The rules",
            "PAST PARTICIPLE": "followed",
          },
          topicArea: "daily_life",
        },
        {
          en: "The food should be stored in the fridge.",
          bn: "খাবারটি ফ্রিজে রাখা উচিত।",
          slotValues: { THING: "The food", "PAST PARTICIPLE": "stored" },
          topicArea: "food",
        },
        {
          en: "The homework should be submitted by Friday.",
          bn: "শুক্রবারের মধ্যে বাড়ির কাজ জমা দেওয়া উচিত।",
          slotValues: {
            THING: "The homework",
            "PAST PARTICIPLE": "submitted",
          },
          topicArea: "education",
        },
        {
          en: "The email should be sent before noon.",
          bn: "দুপুরের আগে ইমেইল পাঠানো উচিত।",
          slotValues: { THING: "The email", "PAST PARTICIPLE": "sent" },
          topicArea: "work",
        },
        {
          en: "The medicine should be taken after meals.",
          bn: "খাবারের পরে ওষুধ খাওয়া উচিত।",
          slotValues: {
            THING: "The medicine",
            "PAST PARTICIPLE": "taken",
          },
          topicArea: "health",
        },
        {
          en: "The tickets should be booked in advance.",
          bn: "টিকিট আগে থেকে বুক করা উচিত।",
          slotValues: {
            THING: "The tickets",
            "PAST PARTICIPLE": "booked",
          },
          topicArea: "travel",
        },
        {
          en: "The receipt should be kept for returns.",
          bn: "ফেরতের জন্য রসিদটি রাখা উচিত।",
          slotValues: {
            THING: "The receipt",
            "PAST PARTICIPLE": "kept",
          },
          topicArea: "shopping",
        },
        {
          en: "Children should be treated with kindness.",
          bn: "বাচ্চাদের সাথে সদয় আচরণ করা উচিত।",
          slotValues: {
            THING: "Children",
            "PAST PARTICIPLE": "treated with kindness",
          },
          topicArea: "relationships",
        },
        {
          en: "The report should be proofread before submission.",
          bn: "জমা দেওয়ার আগে রিপোর্ট প্রুফরিড করা উচিত।",
          slotValues: {
            THING: "The report",
            "PAST PARTICIPLE": "proofread",
          },
          topicArea: "work",
        },
        {
          en: "The vegetables should be washed before cooking.",
          bn: "রান্নার আগে শাকসবজি ধোয়া উচিত।",
          slotValues: {
            THING: "The vegetables",
            "PAST PARTICIPLE": "washed",
          },
          topicArea: "food",
        },
        {
          en: "The assignment should be written in English.",
          bn: "অ্যাসাইনমেন্ট ইংরেজিতে লেখা উচিত।",
          slotValues: {
            THING: "The assignment",
            "PAST PARTICIPLE": "written",
          },
          topicArea: "education",
        },
        {
          en: "The wound should be cleaned regularly.",
          bn: "ক্ষতটি নিয়মিত পরিষ্কার করা উচিত।",
          slotValues: { THING: "The wound", "PAST PARTICIPLE": "cleaned" },
          topicArea: "health",
        },
        {
          en: "The doors should be locked at night.",
          bn: "রাতে দরজা তালা দেওয়া উচিত।",
          slotValues: { THING: "The doors", "PAST PARTICIPLE": "locked" },
          topicArea: "daily_life",
        },
        {
          en: "The luggage should be checked before the flight.",
          bn: "ফ্লাইটের আগে লাগেজ পরীক্ষা করা উচিত।",
          slotValues: {
            THING: "The luggage",
            "PAST PARTICIPLE": "checked",
          },
          topicArea: "travel",
        },
        {
          en: "Elderly people should be respected by everyone.",
          bn: "বয়স্কদের সবার সম্মান করা উচিত।",
          slotValues: {
            THING: "Elderly people",
            "PAST PARTICIPLE": "respected",
          },
          topicArea: "relationships",
        },
      ],
      formality: "polite",
      difficulty: "advanced",
      usageNote:
        "'Should be + past participle' gives advice or states an obligation in passive form. Other modals like 'must', 'can', 'might' also work: 'must be done', 'can be seen'.",
      usageNote_bn:
        "'Should be + past participle' কর্মবাচ্যে পরামর্শ দেয় বা বাধ্যবাধকতা বলে। 'must', 'can', 'might' এর মতো অন্য মোডালও কাজ করে: 'must be done', 'can be seen'।",
      combinableWith: ["C11.1", "C11.4"],
      banglaStructureMap:
        "[THING] (বিশেষ্য) + [PP] (ক্রিয়া) + করা উচিত (Modal Passive)",
    },
    {
      id: "C11.6",
      formula: "[THING] is [PAST PARTICIPLE]",
      formula_bn: "[জিনিস] [কৃত হয়]",
      patternName: "Simple Present Passive",
      patternName_bn: "সিম্পল প্রেজেন্ট কর্মবাচ্য",
      slots: [
        {
          name: "THING",
          description:
            "The noun or noun phrase that receives the action regularly",
          description_bn:
            "যে বিশেষ্য বা বিশেষ্য পদবন্ধ নিয়মিতভাবে কাজটি গ্রহণ করে",
          acceptedTypes: ["noun", "noun_phrase"],
          examples: ["rice", "English", "this road"],
        },
        {
          name: "PAST PARTICIPLE",
          description:
            "A verb in past participle form for the habitual or general action",
          description_bn:
            "অভ্যাসগত বা সাধারণ কাজের জন্য অতীত কৃদন্ত রূপের একটি ক্রিয়া",
          acceptedTypes: ["past_participle"],
          examples: ["grown", "spoken", "used"],
        },
      ],
      examples: [
        {
          en: "Rice is grown in Bangladesh.",
          bn: "বাংলাদেশে ধান চাষ করা হয়।",
          slotValues: { THING: "Rice", "PAST PARTICIPLE": "grown" },
          topicArea: "daily_life",
        },
        {
          en: "English is spoken worldwide.",
          bn: "সারা বিশ্বে ইংরেজি বলা হয়।",
          slotValues: { THING: "English", "PAST PARTICIPLE": "spoken" },
          topicArea: "education",
        },
        {
          en: "This road is used by thousands.",
          bn: "এই রাস্তা হাজার হাজার মানুষ ব্যবহার করে।",
          slotValues: { THING: "This road", "PAST PARTICIPLE": "used" },
          topicArea: "travel",
        },
        {
          en: "The gate is closed at 9 PM.",
          bn: "রাত ৯টায় গেট বন্ধ করা হয়।",
          slotValues: { THING: "The gate", "PAST PARTICIPLE": "closed" },
          topicArea: "daily_life",
        },
        {
          en: "Tea is served with breakfast.",
          bn: "সকালের নাস্তার সাথে চা পরিবেশন করা হয়।",
          slotValues: { THING: "Tea", "PAST PARTICIPLE": "served" },
          topicArea: "food",
        },
        {
          en: "The office is cleaned every day.",
          bn: "অফিস প্রতিদিন পরিষ্কার করা হয়।",
          slotValues: { THING: "The office", "PAST PARTICIPLE": "cleaned" },
          topicArea: "work",
        },
        {
          en: "Football is played everywhere.",
          bn: "সর্বত্র ফুটবল খেলা হয়।",
          slotValues: { THING: "Football", "PAST PARTICIPLE": "played" },
          topicArea: "daily_life",
        },
        {
          en: "Money is kept in the safe.",
          bn: "টাকা সিন্দুকে রাখা হয়।",
          slotValues: { THING: "Money", "PAST PARTICIPLE": "kept" },
          topicArea: "daily_life",
        },
        {
          en: "The newspaper is delivered daily.",
          bn: "প্রতিদিন পত্রিকা বিলি করা হয়।",
          slotValues: {
            THING: "The newspaper",
            "PAST PARTICIPLE": "delivered",
          },
          topicArea: "daily_life",
        },
        {
          en: "Water is purified before drinking.",
          bn: "পান করার আগে পানি বিশুদ্ধ করা হয়।",
          slotValues: { THING: "Water", "PAST PARTICIPLE": "purified" },
          topicArea: "health",
        },
        {
          en: "This book is read by many students.",
          bn: "এই বইটি অনেক ছাত্র পড়ে।",
          slotValues: { THING: "This book", "PAST PARTICIPLE": "read" },
          topicArea: "education",
        },
        {
          en: "Electricity is generated from gas.",
          bn: "গ্যাস থেকে বিদ্যুৎ উৎপন্ন করা হয়।",
          slotValues: {
            THING: "Electricity",
            "PAST PARTICIPLE": "generated",
          },
          topicArea: "daily_life",
        },
        {
          en: "Clothes are washed on Saturdays.",
          bn: "শনিবারে কাপড় ধোয়া হয়।",
          slotValues: { THING: "Clothes", "PAST PARTICIPLE": "washed" },
          topicArea: "daily_life",
        },
        {
          en: "These products are made in Dhaka.",
          bn: "এই পণ্যগুলো ঢাকায় তৈরি হয়।",
          slotValues: {
            THING: "These products",
            "PAST PARTICIPLE": "made",
          },
          topicArea: "shopping",
        },
        {
          en: "The exam is held every year.",
          bn: "পরীক্ষা প্রতি বছর অনুষ্ঠিত হয়।",
          slotValues: { THING: "The exam", "PAST PARTICIPLE": "held" },
          topicArea: "education",
        },
      ],
      formality: "polite",
      difficulty: "intermediate",
      usageNote:
        "The simple present passive is used for general truths, habitual actions, and regular events where the focus is on what happens rather than who does it.",
      usageNote_bn:
        "সিম্পল প্রেজেন্ট কর্মবাচ্য সাধারণ সত্য, অভ্যাসগত কাজ এবং নিয়মিত ঘটনার জন্য ব্যবহৃত হয় যেখানে কে করে তার চেয়ে কী ঘটে তার উপর ফোকাস থাকে।",
      combinableWith: ["C11.1", "C11.2"],
      banglaStructureMap:
        "[THING] (বিশেষ্য) + [PP] (ক্রিয়া) + করা হয় (Simple Present Passive)",
    },
    {
      id: "C11.7",
      formula: "[THING] was being [PAST PARTICIPLE]",
      formula_bn: "[জিনিস] [করা হচ্ছিল]",
      patternName: "Past Continuous Passive",
      patternName_bn: "পাস্ট কন্টিনিউয়াস কর্মবাচ্য",
      slots: [
        {
          name: "THING",
          description:
            "The noun or noun phrase that was receiving the ongoing past action",
          description_bn:
            "যে বিশেষ্য বা বিশেষ্য পদবন্ধ অতীতে চলমান কাজটি গ্রহণ করছিল",
          acceptedTypes: ["noun", "noun_phrase"],
          examples: ["the road", "the food", "the house"],
        },
        {
          name: "PAST PARTICIPLE",
          description:
            "A verb in past participle form for the action that was in progress",
          description_bn:
            "যে কাজটি চলমান ছিল তার জন্য অতীত কৃদন্ত রূপের একটি ক্রিয়া",
          acceptedTypes: ["past_participle"],
          examples: ["repaired", "prepared", "painted"],
        },
      ],
      examples: [
        {
          en: "The road was being repaired when I arrived.",
          bn: "আমি পৌঁছালে রাস্তাটি মেরামত করা হচ্ছিল।",
          slotValues: { THING: "The road", "PAST PARTICIPLE": "repaired" },
          topicArea: "travel",
        },
        {
          en: "The food was being prepared for the guests.",
          bn: "অতিথিদের জন্য খাবার তৈরি করা হচ্ছিল।",
          slotValues: { THING: "The food", "PAST PARTICIPLE": "prepared" },
          topicArea: "food",
        },
        {
          en: "The house was being painted last week.",
          bn: "গত সপ্তাহে ঘরটি রং করা হচ্ছিল।",
          slotValues: { THING: "The house", "PAST PARTICIPLE": "painted" },
          topicArea: "daily_life",
        },
        {
          en: "The patient was being treated at the hospital.",
          bn: "রোগীকে হাসপাতালে চিকিৎসা করা হচ্ছিল।",
          slotValues: {
            THING: "The patient",
            "PAST PARTICIPLE": "treated",
          },
          topicArea: "health",
        },
        {
          en: "The car was being washed outside.",
          bn: "বাইরে গাড়িটি ধোয়া হচ্ছিল।",
          slotValues: { THING: "The car", "PAST PARTICIPLE": "washed" },
          topicArea: "daily_life",
        },
        {
          en: "The report was being reviewed by the manager.",
          bn: "রিপোর্টটি ম্যানেজার দ্বারা পর্যালোচনা করা হচ্ছিল।",
          slotValues: {
            THING: "The report",
            "PAST PARTICIPLE": "reviewed",
          },
          topicArea: "work",
        },
        {
          en: "The clothes were being dried in the sun.",
          bn: "রোদে কাপড় শুকানো হচ্ছিল।",
          slotValues: { THING: "The clothes", "PAST PARTICIPLE": "dried" },
          topicArea: "daily_life",
        },
        {
          en: "The meeting was being recorded.",
          bn: "মিটিংটি রেকর্ড করা হচ্ছিল।",
          slotValues: {
            THING: "The meeting",
            "PAST PARTICIPLE": "recorded",
          },
          topicArea: "work",
        },
        {
          en: "The bridge was being constructed for months.",
          bn: "সেতুটি মাসের পর মাস নির্মাণ করা হচ্ছিল।",
          slotValues: {
            THING: "The bridge",
            "PAST PARTICIPLE": "constructed",
          },
          topicArea: "travel",
        },
        {
          en: "The game was being played in the rain.",
          bn: "বৃষ্টিতে খেলাটি খেলা হচ্ছিল।",
          slotValues: { THING: "The game", "PAST PARTICIPLE": "played" },
          topicArea: "daily_life",
        },
        {
          en: "The luggage was being checked at the airport.",
          bn: "বিমানবন্দরে লাগেজ পরীক্ষা করা হচ্ছিল।",
          slotValues: {
            THING: "The luggage",
            "PAST PARTICIPLE": "checked",
          },
          topicArea: "travel",
        },
        {
          en: "The order was being processed.",
          bn: "অর্ডারটি প্রক্রিয়া করা হচ্ছিল।",
          slotValues: { THING: "The order", "PAST PARTICIPLE": "processed" },
          topicArea: "shopping",
        },
        {
          en: "The students were being tested all morning.",
          bn: "সারা সকাল ছাত্রদের পরীক্ষা নেওয়া হচ্ছিল।",
          slotValues: {
            THING: "The students",
            "PAST PARTICIPLE": "tested",
          },
          topicArea: "education",
        },
        {
          en: "The building was being demolished.",
          bn: "ভবনটি ভেঙে ফেলা হচ্ছিল।",
          slotValues: {
            THING: "The building",
            "PAST PARTICIPLE": "demolished",
          },
          topicArea: "daily_life",
        },
        {
          en: "The new system was being installed.",
          bn: "নতুন সিস্টেম ইনস্টল করা হচ্ছিল।",
          slotValues: {
            THING: "The new system",
            "PAST PARTICIPLE": "installed",
          },
          topicArea: "work",
        },
      ],
      formality: "polite",
      difficulty: "advanced",
      usageNote:
        "'Was/were being + past participle' describes an action that was in progress at a specific time in the past, in passive voice. It emphasizes the ongoing nature of the past action.",
      usageNote_bn:
        "'Was/were being + past participle' অতীতে একটি নির্দিষ্ট সময়ে চলমান কাজ কর্মবাচ্যে বর্ণনা করে। এটি অতীত কাজের চলমান প্রকৃতির উপর জোর দেয়।",
      combinableWith: ["C11.1", "C11.2"],
      banglaStructureMap:
        "[THING] (বিশেষ্য) + [PP] (ক্রিয়া) + করা হচ্ছিল (Past Continuous Passive)",
    },
    {
      id: "C11.8",
      formula: "[THING] had been [PAST PARTICIPLE]",
      formula_bn: "[জিনিস] [করা হয়েছিল]",
      patternName: "Past Perfect Passive",
      patternName_bn: "পাস্ট পারফেক্ট কর্মবাচ্য",
      slots: [
        {
          name: "THING",
          description:
            "The noun or noun phrase that had received the action before another past event",
          description_bn:
            "যে বিশেষ্য বা বিশেষ্য পদবন্ধ অন্য একটি অতীত ঘটনার আগে কাজটি গ্রহণ করেছিল",
          acceptedTypes: ["noun", "noun_phrase"],
          examples: ["the work", "the tickets", "the letter"],
        },
        {
          name: "PAST PARTICIPLE",
          description:
            "A verb in past participle form for the action completed before another past event",
          description_bn:
            "অন্য একটি অতীত ঘটনার আগে সম্পন্ন কাজের জন্য অতীত কৃদন্ত রূপের একটি ক্রিয়া",
          acceptedTypes: ["past_participle"],
          examples: ["completed", "sold", "sent"],
        },
      ],
      examples: [
        {
          en: "The work had been completed before the deadline.",
          bn: "সময়সীমার আগেই কাজটি সম্পন্ন করা হয়েছিল।",
          slotValues: {
            THING: "The work",
            "PAST PARTICIPLE": "completed",
          },
          topicArea: "work",
        },
        {
          en: "The tickets had been sold out before we arrived.",
          bn: "আমরা পৌঁছানোর আগেই টিকিট বিক্রি হয়ে গিয়েছিল।",
          slotValues: {
            THING: "The tickets",
            "PAST PARTICIPLE": "sold out",
          },
          topicArea: "travel",
        },
        {
          en: "The letter had been sent before I called.",
          bn: "আমি ফোন করার আগেই চিঠি পাঠানো হয়েছিল।",
          slotValues: { THING: "The letter", "PAST PARTICIPLE": "sent" },
          topicArea: "daily_life",
        },
        {
          en: "The building had been abandoned for years.",
          bn: "ভবনটি বছরের পর বছর পরিত্যক্ত ছিল।",
          slotValues: {
            THING: "The building",
            "PAST PARTICIPLE": "abandoned",
          },
          topicArea: "daily_life",
        },
        {
          en: "The food had been cooked before the guests came.",
          bn: "অতিথিরা আসার আগেই খাবার রান্না করা হয়েছিল।",
          slotValues: { THING: "The food", "PAST PARTICIPLE": "cooked" },
          topicArea: "food",
        },
        {
          en: "The report had been submitted on time.",
          bn: "রিপোর্ট সময়মতো জমা দেওয়া হয়েছিল।",
          slotValues: {
            THING: "The report",
            "PAST PARTICIPLE": "submitted",
          },
          topicArea: "work",
        },
        {
          en: "The road had been blocked since morning.",
          bn: "সকাল থেকে রাস্তা বন্ধ ছিল।",
          slotValues: { THING: "The road", "PAST PARTICIPLE": "blocked" },
          topicArea: "travel",
        },
        {
          en: "The decision had been made without us.",
          bn: "আমাদের ছাড়াই সিদ্ধান্ত নেওয়া হয়েছিল।",
          slotValues: {
            THING: "The decision",
            "PAST PARTICIPLE": "made",
          },
          topicArea: "work",
        },
        {
          en: "The money had been stolen before the police came.",
          bn: "পুলিশ আসার আগেই টাকা চুরি হয়ে গিয়েছিল।",
          slotValues: { THING: "The money", "PAST PARTICIPLE": "stolen" },
          topicArea: "daily_life",
        },
        {
          en: "The project had been approved last month.",
          bn: "গত মাসে প্রকল্পটি অনুমোদিত হয়েছিল।",
          slotValues: {
            THING: "The project",
            "PAST PARTICIPLE": "approved",
          },
          topicArea: "work",
        },
        {
          en: "The walls had been painted just yesterday.",
          bn: "ঠিক গতকালই দেয়ালগুলো রং করা হয়েছিল।",
          slotValues: { THING: "The walls", "PAST PARTICIPLE": "painted" },
          topicArea: "daily_life",
        },
        {
          en: "All the seats had been reserved.",
          bn: "সব আসন সংরক্ষিত করা হয়েছিল।",
          slotValues: {
            THING: "All the seats",
            "PAST PARTICIPLE": "reserved",
          },
          topicArea: "travel",
        },
        {
          en: "The exam had been postponed twice.",
          bn: "পরীক্ষা দুবার স্থগিত করা হয়েছিল।",
          slotValues: {
            THING: "The exam",
            "PAST PARTICIPLE": "postponed",
          },
          topicArea: "education",
        },
        {
          en: "The documents had been destroyed.",
          bn: "কাগজপত্র ধ্বংস করা হয়েছিল।",
          slotValues: {
            THING: "The documents",
            "PAST PARTICIPLE": "destroyed",
          },
          topicArea: "work",
        },
        {
          en: "The invitation had been sent weeks ago.",
          bn: "কয়েক সপ্তাহ আগেই আমন্ত্রণ পাঠানো হয়েছিল।",
          slotValues: {
            THING: "The invitation",
            "PAST PARTICIPLE": "sent",
          },
          topicArea: "relationships",
        },
      ],
      formality: "polite",
      difficulty: "advanced",
      usageNote:
        "'Had been + past participle' describes an action that was completed before another past event, in passive voice. It establishes a clear sequence of past events.",
      usageNote_bn:
        "'Had been + past participle' অন্য একটি অতীত ঘটনার আগে সম্পন্ন কাজ কর্মবাচ্যে বর্ণনা করে। এটি অতীত ঘটনার একটি স্পষ্ট ক্রম প্রতিষ্ঠা করে।",
      combinableWith: ["C11.1", "C11.4"],
      banglaStructureMap:
        "[THING] (বিশেষ্য) + [PP] (ক্রিয়া) + করা হয়েছিল (Past Perfect Passive)",
    },
    {
      id: "C11.9",
      formula: "[THING] can/could/must be [PAST PARTICIPLE]",
      formula_bn: "[জিনিস] [করা যায়/হতে পারে/হতে হবে]",
      patternName: "Modal Passive",
      patternName_bn: "মোডাল কর্মবাচ্য",
      slots: [
        {
          name: "THING",
          description:
            "The noun or noun phrase that can, could, or must receive the action",
          description_bn:
            "যে বিশেষ্য বা বিশেষ্য পদবন্ধ কাজটি গ্রহণ করতে পারে বা করতে হবে",
          acceptedTypes: ["noun", "noun_phrase"],
          examples: ["this problem", "the form", "the meeting"],
        },
        {
          name: "PAST PARTICIPLE",
          description:
            "A verb in past participle form for the action with modal meaning",
          description_bn:
            "মোডাল অর্থসহ কাজের জন্য অতীত কৃদন্ত রূপের একটি ক্রিয়া",
          acceptedTypes: ["past_participle"],
          examples: ["solved", "filled out", "postponed"],
        },
      ],
      examples: [
        {
          en: "This problem can be solved easily.",
          bn: "এই সমস্যা সহজেই সমাধান করা যায়।",
          slotValues: {
            THING: "This problem",
            "PAST PARTICIPLE": "solved",
          },
          topicArea: "education",
        },
        {
          en: "The form must be filled out completely.",
          bn: "ফর্মটি সম্পূর্ণভাবে পূরণ করতে হবে।",
          slotValues: {
            THING: "The form",
            "PAST PARTICIPLE": "filled out",
          },
          topicArea: "work",
        },
        {
          en: "The meeting could be postponed.",
          bn: "মিটিংটি স্থগিত করা যেতে পারে।",
          slotValues: {
            THING: "The meeting",
            "PAST PARTICIPLE": "postponed",
          },
          topicArea: "work",
        },
        {
          en: "This should not be ignored.",
          bn: "এটি উপেক্ষা করা উচিত নয়।",
          slotValues: { THING: "This", "PAST PARTICIPLE": "ignored" },
          topicArea: "daily_life",
        },
        {
          en: "The document can be downloaded online.",
          bn: "ডকুমেন্টটি অনলাইনে ডাউনলোড করা যায়।",
          slotValues: {
            THING: "The document",
            "PAST PARTICIPLE": "downloaded",
          },
          topicArea: "work",
        },
        {
          en: "Children must be supervised at all times.",
          bn: "বাচ্চাদের সবসময় তত্ত্বাবধানে রাখতে হবে।",
          slotValues: {
            THING: "Children",
            "PAST PARTICIPLE": "supervised",
          },
          topicArea: "relationships",
        },
        {
          en: "The noise could be heard from far away.",
          bn: "শব্দটি অনেক দূর থেকে শোনা যেত।",
          slotValues: { THING: "The noise", "PAST PARTICIPLE": "heard" },
          topicArea: "daily_life",
        },
        {
          en: "The password must be changed regularly.",
          bn: "পাসওয়ার্ড নিয়মিত পরিবর্তন করতে হবে।",
          slotValues: {
            THING: "The password",
            "PAST PARTICIPLE": "changed",
          },
          topicArea: "daily_life",
        },
        {
          en: "This product can be recycled.",
          bn: "এই পণ্যটি পুনর্ব্যবহার করা যায়।",
          slotValues: {
            THING: "This product",
            "PAST PARTICIPLE": "recycled",
          },
          topicArea: "shopping",
        },
        {
          en: "The deadline cannot be extended.",
          bn: "সময়সীমা বাড়ানো যাবে না।",
          slotValues: {
            THING: "The deadline",
            "PAST PARTICIPLE": "extended",
          },
          topicArea: "work",
        },
        {
          en: "Mistakes can be corrected later.",
          bn: "ভুলগুলো পরে সংশোধন করা যায়।",
          slotValues: {
            THING: "Mistakes",
            "PAST PARTICIPLE": "corrected",
          },
          topicArea: "education",
        },
        {
          en: "The rules must be followed by everyone.",
          bn: "নিয়মগুলো সবাইকে মানতে হবে।",
          slotValues: { THING: "The rules", "PAST PARTICIPLE": "followed" },
          topicArea: "daily_life",
        },
        {
          en: "This information should be kept confidential.",
          bn: "এই তথ্য গোপন রাখা উচিত।",
          slotValues: {
            THING: "This information",
            "PAST PARTICIPLE": "kept confidential",
          },
          topicArea: "work",
        },
        {
          en: "Tickets can be purchased online.",
          bn: "টিকিট অনলাইনে কেনা যায়।",
          slotValues: { THING: "Tickets", "PAST PARTICIPLE": "purchased" },
          topicArea: "travel",
        },
        {
          en: "The damage could have been prevented.",
          bn: "ক্ষতি প্রতিরোধ করা যেত।",
          slotValues: {
            THING: "The damage",
            "PAST PARTICIPLE": "prevented",
          },
          topicArea: "daily_life",
        },
      ],
      formality: "polite",
      difficulty: "advanced",
      usageNote:
        "'Can/could/must be + past participle' expresses ability, possibility, or obligation in passive voice. Different modals convey different meanings: 'can' for ability, 'could' for possibility, 'must' for obligation.",
      usageNote_bn:
        "'Can/could/must be + past participle' কর্মবাচ্যে সক্ষমতা, সম্ভাবনা বা বাধ্যবাধকতা প্রকাশ করে। বিভিন্ন মোডাল বিভিন্ন অর্থ বহন করে: 'can' সক্ষমতার জন্য, 'could' সম্ভাবনার জন্য, 'must' বাধ্যবাধকতার জন্য।",
      combinableWith: ["C11.5", "C11.6"],
      banglaStructureMap:
        "[THING] (বিশেষ্য) + [PP] (ক্রিয়া) + করা যায়/হতে পারে/হতে হবে (Modal Passive)",
    },
    {
      id: "C11.10",
      formula: "[THING] is going to be [PAST PARTICIPLE]",
      formula_bn: "[জিনিস] [করা হতে যাচ্ছে]",
      patternName: "Going-to Passive",
      patternName_bn: "গোয়িং-টু কর্মবাচ্য",
      slots: [
        {
          name: "THING",
          description:
            "The noun or noun phrase that is planned to receive the action",
          description_bn:
            "যে বিশেষ্য বা বিশেষ্য পদবন্ধ পরিকল্পিতভাবে কাজটি গ্রহণ করতে যাচ্ছে",
          acceptedTypes: ["noun", "noun_phrase"],
          examples: ["the school", "a new mall", "the road"],
        },
        {
          name: "PAST PARTICIPLE",
          description:
            "A verb in past participle form for the planned future action",
          description_bn:
            "পরিকল্পিত ভবিষ্যৎ কাজের জন্য অতীত কৃদন্ত রূপের একটি ক্রিয়া",
          acceptedTypes: ["past_participle"],
          examples: ["renovated", "built", "widened"],
        },
      ],
      examples: [
        {
          en: "The school is going to be renovated next year.",
          bn: "আগামী বছর স্কুলটি সংস্কার করা হতে যাচ্ছে।",
          slotValues: {
            THING: "The school",
            "PAST PARTICIPLE": "renovated",
          },
          topicArea: "education",
        },
        {
          en: "A new mall is going to be built here.",
          bn: "এখানে একটি নতুন মল তৈরি হতে যাচ্ছে।",
          slotValues: { THING: "A new mall", "PAST PARTICIPLE": "built" },
          topicArea: "shopping",
        },
        {
          en: "The road is going to be widened soon.",
          bn: "শীঘ্রই রাস্তাটি চওড়া করা হতে যাচ্ছে।",
          slotValues: { THING: "The road", "PAST PARTICIPLE": "widened" },
          topicArea: "travel",
        },
        {
          en: "The old bridge is going to be replaced.",
          bn: "পুরানো সেতুটি প্রতিস্থাপন করা হতে যাচ্ছে।",
          slotValues: {
            THING: "The old bridge",
            "PAST PARTICIPLE": "replaced",
          },
          topicArea: "travel",
        },
        {
          en: "The event is going to be held in December.",
          bn: "ডিসেম্বরে অনুষ্ঠানটি আয়োজন করা হতে যাচ্ছে।",
          slotValues: { THING: "The event", "PAST PARTICIPLE": "held" },
          topicArea: "daily_life",
        },
        {
          en: "New teachers are going to be hired.",
          bn: "নতুন শিক্ষক নিয়োগ দেওয়া হতে যাচ্ছে।",
          slotValues: {
            THING: "New teachers",
            "PAST PARTICIPLE": "hired",
          },
          topicArea: "education",
        },
        {
          en: "The prices are going to be increased.",
          bn: "দাম বাড়ানো হতে যাচ্ছে।",
          slotValues: {
            THING: "The prices",
            "PAST PARTICIPLE": "increased",
          },
          topicArea: "shopping",
        },
        {
          en: "The rules are going to be changed.",
          bn: "নিয়মগুলো পরিবর্তন করা হতে যাচ্ছে।",
          slotValues: { THING: "The rules", "PAST PARTICIPLE": "changed" },
          topicArea: "daily_life",
        },
        {
          en: "A new hospital is going to be opened.",
          bn: "একটি নতুন হাসপাতাল খোলা হতে যাচ্ছে।",
          slotValues: {
            THING: "A new hospital",
            "PAST PARTICIPLE": "opened",
          },
          topicArea: "health",
        },
        {
          en: "The results are going to be announced tomorrow.",
          bn: "আগামীকাল ফলাফল ঘোষণা করা হতে যাচ্ছে।",
          slotValues: {
            THING: "The results",
            "PAST PARTICIPLE": "announced",
          },
          topicArea: "education",
        },
        {
          en: "The flights are going to be canceled.",
          bn: "ফ্লাইটগুলো বাতিল করা হতে যাচ্ছে।",
          slotValues: {
            THING: "The flights",
            "PAST PARTICIPLE": "canceled",
          },
          topicArea: "travel",
        },
        {
          en: "The factory is going to be closed down.",
          bn: "কারখানাটি বন্ধ করে দেওয়া হতে যাচ্ছে।",
          slotValues: {
            THING: "The factory",
            "PAST PARTICIPLE": "closed down",
          },
          topicArea: "work",
        },
        {
          en: "New laws are going to be introduced.",
          bn: "নতুন আইন প্রবর্তন করা হতে যাচ্ছে।",
          slotValues: {
            THING: "New laws",
            "PAST PARTICIPLE": "introduced",
          },
          topicArea: "daily_life",
        },
        {
          en: "The park is going to be cleaned up.",
          bn: "পার্কটি পরিষ্কার করা হতে যাচ্ছে।",
          slotValues: {
            THING: "The park",
            "PAST PARTICIPLE": "cleaned up",
          },
          topicArea: "daily_life",
        },
        {
          en: "The project is going to be completed by June.",
          bn: "জুনের মধ্যে প্রকল্পটি সম্পন্ন করা হতে যাচ্ছে।",
          slotValues: {
            THING: "The project",
            "PAST PARTICIPLE": "completed",
          },
          topicArea: "work",
        },
      ],
      formality: "polite",
      difficulty: "intermediate",
      usageNote:
        "'Is/are going to be + past participle' describes planned or expected future actions in passive voice. It implies the action has already been decided or arranged.",
      usageNote_bn:
        "'Is/are going to be + past participle' কর্মবাচ্যে পরিকল্পিত বা প্রত্যাশিত ভবিষ্যৎ কাজ বর্ণনা করে। এটি বোঝায় যে কাজটি ইতিমধ্যে সিদ্ধান্ত বা ব্যবস্থা করা হয়েছে।",
      combinableWith: ["C11.3", "C11.6"],
      banglaStructureMap:
        "[THING] (বিশেষ্য) + [PP] (ক্রিয়া) + করা হতে যাচ্ছে (Going-to Passive)",
    },
    {
      id: "C11.11",
      formula: "[PERSON/THING] got [PAST PARTICIPLE]",
      formula_bn: "[ব্যক্তি/জিনিস] [হয়ে গেল]",
      patternName: "Get-Passive",
      patternName_bn: "গেট-কর্মবাচ্য",
      slots: [
        {
          name: "PERSON/THING",
          description:
            "The person or thing that experienced the action, often unexpectedly",
          description_bn:
            "যে ব্যক্তি বা জিনিস কাজটি অনুভব করেছে, প্রায়ই অপ্রত্যাশিতভাবে",
          acceptedTypes: ["person", "noun", "noun_phrase"],
          examples: ["I", "he", "the car"],
        },
        {
          name: "PAST PARTICIPLE",
          description:
            "A verb in past participle form for the action that happened, often negative or unexpected",
          description_bn:
            "যে কাজটি ঘটেছে তার জন্য অতীত কৃদন্ত রূপের একটি ক্রিয়া, প্রায়ই নেতিবাচক বা অপ্রত্যাশিত",
          acceptedTypes: ["past_participle"],
          examples: ["stuck", "fired", "selected"],
        },
      ],
      examples: [
        {
          en: "I got stuck in traffic.",
          bn: "আমি ট্রাফিকে আটকে গেলাম।",
          slotValues: { "PERSON/THING": "I", "PAST PARTICIPLE": "stuck" },
          topicArea: "travel",
        },
        {
          en: "He got fired from his job.",
          bn: "সে তার চাকরি থেকে বরখাস্ত হয়ে গেল।",
          slotValues: { "PERSON/THING": "He", "PAST PARTICIPLE": "fired" },
          topicArea: "work",
        },
        {
          en: "She got selected for the team.",
          bn: "সে দলে নির্বাচিত হয়ে গেল।",
          slotValues: {
            "PERSON/THING": "She",
            "PAST PARTICIPLE": "selected",
          },
          topicArea: "daily_life",
        },
        {
          en: "We got invited to the wedding.",
          bn: "আমরা বিয়েতে আমন্ত্রিত হলাম।",
          slotValues: {
            "PERSON/THING": "We",
            "PAST PARTICIPLE": "invited",
          },
          topicArea: "relationships",
        },
        {
          en: "The car got damaged in the accident.",
          bn: "দুর্ঘটনায় গাড়িটি ক্ষতিগ্রস্ত হয়ে গেল।",
          slotValues: {
            "PERSON/THING": "The car",
            "PAST PARTICIPLE": "damaged",
          },
          topicArea: "travel",
        },
        {
          en: "My phone got stolen at the market.",
          bn: "বাজারে আমার ফোন চুরি হয়ে গেল।",
          slotValues: {
            "PERSON/THING": "My phone",
            "PAST PARTICIPLE": "stolen",
          },
          topicArea: "shopping",
        },
        {
          en: "He got promoted last month.",
          bn: "সে গত মাসে পদোন্নতি পেয়ে গেল।",
          slotValues: {
            "PERSON/THING": "He",
            "PAST PARTICIPLE": "promoted",
          },
          topicArea: "work",
        },
        {
          en: "The flight got delayed by two hours.",
          bn: "ফ্লাইট দুই ঘণ্টা বিলম্বিত হয়ে গেল।",
          slotValues: {
            "PERSON/THING": "The flight",
            "PAST PARTICIPLE": "delayed",
          },
          topicArea: "travel",
        },
        {
          en: "I got confused by the directions.",
          bn: "নির্দেশনায় আমি বিভ্রান্ত হয়ে গেলাম।",
          slotValues: {
            "PERSON/THING": "I",
            "PAST PARTICIPLE": "confused",
          },
          topicArea: "daily_life",
        },
        {
          en: "She got accepted into the university.",
          bn: "সে বিশ্ববিদ্যালয়ে ভর্তির সুযোগ পেয়ে গেল।",
          slotValues: {
            "PERSON/THING": "She",
            "PAST PARTICIPLE": "accepted",
          },
          topicArea: "education",
        },
        {
          en: "The package got lost in delivery.",
          bn: "ডেলিভারিতে পার্সেলটি হারিয়ে গেল।",
          slotValues: {
            "PERSON/THING": "The package",
            "PAST PARTICIPLE": "lost",
          },
          topicArea: "shopping",
        },
        {
          en: "He got injured during the game.",
          bn: "খেলার সময় সে আহত হয়ে গেল।",
          slotValues: {
            "PERSON/THING": "He",
            "PAST PARTICIPLE": "injured",
          },
          topicArea: "health",
        },
        {
          en: "We got caught in the rain.",
          bn: "আমরা বৃষ্টিতে আটকে গেলাম।",
          slotValues: { "PERSON/THING": "We", "PAST PARTICIPLE": "caught" },
          topicArea: "daily_life",
        },
        {
          en: "The project got canceled suddenly.",
          bn: "হঠাৎ প্রকল্পটি বাতিল হয়ে গেল।",
          slotValues: {
            "PERSON/THING": "The project",
            "PAST PARTICIPLE": "canceled",
          },
          topicArea: "work",
        },
        {
          en: "I got paid on Friday.",
          bn: "শুক্রবারে আমার বেতন হয়ে গেল।",
          slotValues: { "PERSON/THING": "I", "PAST PARTICIPLE": "paid" },
          topicArea: "work",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "'Got + past participle' is an informal passive form commonly used in spoken English. It often implies something unexpected, negative, or that happened without the subject's control.",
      usageNote_bn:
        "'Got + past participle' একটি অনানুষ্ঠানিক কর্মবাচ্য রূপ যা কথ্য ইংরেজিতে সাধারণত ব্যবহৃত হয়। এটি প্রায়ই অপ্রত্যাশিত, নেতিবাচক বা কর্তার নিয়ন্ত্রণের বাইরে ঘটে যাওয়া কিছু বোঝায়।",
      combinableWith: ["C11.1", "C11.6"],
      banglaStructureMap:
        "[PERSON/THING] (ব্যক্তি/বিশেষ্য) + [PP] (ক্রিয়া) + হয়ে গেল (Get-Passive)",
    },
  ],
};
