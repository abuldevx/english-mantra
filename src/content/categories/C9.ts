import { PatternCategory } from "@/types/pattern";

export const categoryC9: PatternCategory = {
  id: "C9",
  slug: "future-arrangements-near-future",
  name: "Future Arrangements & Near Future",
  name_bn: "ভবিষ্যৎ পরিকল্পনা এবং নিকট ভবিষ্যৎ",
  description:
    "Talk about planned future events using present continuous for arrangements and 'be about to' for immediate future.",
  description_bn:
    "পরিকল্পিত ভবিষ্যৎ ঘটনার জন্য প্রেজেন্ট কন্টিনিউয়াস এবং তাৎক্ষণিক ভবিষ্যতের জন্য 'be about to' ব্যবহার করে বলুন।",
  icon: "📅",
  group: "C",
  groupName: "Actions & Time Patterns",
  groupName_bn: "কর্ম এবং সময়ের প্যাটার্ন",
  difficulty: "intermediate",
  patterns: [
    {
      id: "C9.1",
      formula: "I'm [DOING] [TIME]",
      formula_bn: "আমি [সময়] [কাজ] করছি/করব",
      patternName: "Planned Arrangement",
      patternName_bn: "পরিকল্পিত ব্যবস্থা",
      slots: [
        {
          name: "DOING",
          description: "A verb in -ing form for a definite future arrangement",
          description_bn:
            "নিশ্চিত ভবিষ্যৎ ব্যবস্থার জন্য একটি -ing রূপের ক্রিয়া",
          acceptedTypes: ["gerund"],
          examples: ["meeting", "flying", "having dinner"],
        },
        {
          name: "TIME",
          description: "A future time expression",
          description_bn: "একটি ভবিষ্যৎ সময়সূচক অভিব্যক্তি",
          acceptedTypes: ["time", "time_expression"],
          examples: ["tomorrow", "next week", "this evening"],
        },
      ],
      examples: [
        {
          en: "I'm meeting my friend tomorrow.",
          bn: "আমি আগামীকাল আমার বন্ধুর সাথে দেখা করছি।",
          slotValues: { DOING: "meeting my friend", TIME: "tomorrow" },
          topicArea: "relationships",
        },
        {
          en: "I'm flying to London next Monday.",
          bn: "আমি আগামী সোমবার লন্ডনে উড়ছি।",
          slotValues: { DOING: "flying to London", TIME: "next Monday" },
          topicArea: "travel",
        },
        {
          en: "I'm having dinner with my boss this evening.",
          bn: "আমি আজ সন্ধ্যায় আমার বসের সাথে রাতের খাবার খাচ্ছি।",
          slotValues: {
            DOING: "having dinner with my boss",
            TIME: "this evening",
          },
          topicArea: "work",
        },
        {
          en: "I'm starting a new course next week.",
          bn: "আমি আগামী সপ্তাহে নতুন কোর্স শুরু করছি।",
          slotValues: { DOING: "starting a new course", TIME: "next week" },
          topicArea: "education",
        },
        {
          en: "I'm seeing the doctor on Friday.",
          bn: "আমি শুক্রবার ডাক্তার দেখাচ্ছি।",
          slotValues: { DOING: "seeing the doctor", TIME: "on Friday" },
          topicArea: "health",
        },
        {
          en: "I'm cooking a special meal tonight.",
          bn: "আমি আজ রাতে বিশেষ খাবার রান্না করছি।",
          slotValues: { DOING: "cooking a special meal", TIME: "tonight" },
          topicArea: "food",
        },
        {
          en: "I'm moving to a new apartment next month.",
          bn: "আমি আগামী মাসে নতুন অ্যাপার্টমেন্টে যাচ্ছি।",
          slotValues: {
            DOING: "moving to a new apartment",
            TIME: "next month",
          },
          topicArea: "daily_life",
        },
        {
          en: "I'm picking up the kids at three.",
          bn: "আমি তিনটায় বাচ্চাদের নিতে যাচ্ছি।",
          slotValues: { DOING: "picking up the kids", TIME: "at three" },
          topicArea: "relationships",
        },
        {
          en: "I'm attending a conference this weekend.",
          bn: "আমি এই সপ্তাহান্তে একটি সম্মেলনে যাচ্ছি।",
          slotValues: {
            DOING: "attending a conference",
            TIME: "this weekend",
          },
          topicArea: "work",
        },
        {
          en: "I'm going shopping this afternoon.",
          bn: "আমি আজ বিকেলে কেনাকাটা করতে যাচ্ছি।",
          slotValues: { DOING: "going shopping", TIME: "this afternoon" },
          topicArea: "shopping",
        },
        {
          en: "I'm visiting my parents this Sunday.",
          bn: "আমি এই রবিবার আমার বাবা-মায়ের সাথে দেখা করতে যাচ্ছি।",
          slotValues: { DOING: "visiting my parents", TIME: "this Sunday" },
          topicArea: "relationships",
        },
        {
          en: "I'm taking an English test next Tuesday.",
          bn: "আমি আগামী মঙ্গলবার ইংরেজি পরীক্ষা দিচ্ছি।",
          slotValues: {
            DOING: "taking an English test",
            TIME: "next Tuesday",
          },
          topicArea: "education",
        },
        {
          en: "I'm joining a yoga class tomorrow morning.",
          bn: "আমি আগামীকাল সকালে যোগব্যায়ামের ক্লাসে যোগ দিচ্ছি।",
          slotValues: {
            DOING: "joining a yoga class",
            TIME: "tomorrow morning",
          },
          topicArea: "health",
        },
        {
          en: "I'm trying a new restaurant on Saturday.",
          bn: "আমি শনিবার নতুন রেস্তোরাঁ চেষ্টা করছি।",
          slotValues: {
            DOING: "trying a new restaurant",
            TIME: "on Saturday",
          },
          topicArea: "food",
        },
        {
          en: "I'm catching an early flight tomorrow.",
          bn: "আমি আগামীকাল ভোরের ফ্লাইট ধরছি।",
          slotValues: {
            DOING: "catching an early flight",
            TIME: "tomorrow",
          },
          topicArea: "travel",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "Use present continuous with a future time word to talk about definite arrangements. These are plans you have already confirmed or scheduled.",
      usageNote_bn:
        "নিশ্চিত ব্যবস্থাপনা সম্পর্কে বলতে ভবিষ্যৎ সময়ের শব্দসহ প্রেজেন্ট কন্টিনিউয়াস ব্যবহার করুন। এগুলো এমন পরিকল্পনা যা আপনি ইতিমধ্যে নিশ্চিত বা নির্ধারণ করেছেন।",
      combinableWith: ["C9.2", "C9.3"],
      banglaStructureMap:
        "আমি (Subject) + [TIME] (Time) + [DOING] (Verb-ing) + করছি (Present Continuous)",
    },
    {
      id: "C9.2",
      formula: "I'm about to [ACTION]",
      formula_bn: "আমি এখনই [কাজ] করতে যাচ্ছি",
      patternName: "Immediate Future",
      patternName_bn: "তাৎক্ষণিক ভবিষ্যৎ",
      slots: [
        {
          name: "ACTION",
          description:
            "A base verb for something that will happen very soon, in the next few moments",
          description_bn:
            "এমন কাজের মূল ক্রিয়া যা খুব শীঘ্রই, পরবর্তী কয়েক মুহূর্তে ঘটবে",
          acceptedTypes: ["verb"],
          examples: ["leave", "start", "eat"],
        },
      ],
      examples: [
        {
          en: "I'm about to leave the house.",
          bn: "আমি এখনই বাড়ি থেকে বের হতে যাচ্ছি।",
          slotValues: { ACTION: "leave the house" },
          topicArea: "daily_life",
        },
        {
          en: "I'm about to start cooking.",
          bn: "আমি এখনই রান্না শুরু করতে যাচ্ছি।",
          slotValues: { ACTION: "start cooking" },
          topicArea: "food",
        },
        {
          en: "I'm about to call you back.",
          bn: "আমি এখনই তোমাকে আবার ফোন করতে যাচ্ছি।",
          slotValues: { ACTION: "call you back" },
          topicArea: "relationships",
        },
        {
          en: "I'm about to send the email.",
          bn: "আমি এখনই ইমেইল পাঠাতে যাচ্ছি।",
          slotValues: { ACTION: "send the email" },
          topicArea: "work",
        },
        {
          en: "I'm about to take off.",
          bn: "আমি এখনই উড়তে যাচ্ছি।",
          slotValues: { ACTION: "take off" },
          topicArea: "travel",
        },
        {
          en: "I'm about to finish this chapter.",
          bn: "আমি এখনই এই অধ্যায়টি শেষ করতে যাচ্ছি।",
          slotValues: { ACTION: "finish this chapter" },
          topicArea: "education",
        },
        {
          en: "I'm about to go to the gym.",
          bn: "আমি এখনই জিমে যেতে যাচ্ছি।",
          slotValues: { ACTION: "go to the gym" },
          topicArea: "health",
        },
        {
          en: "I'm about to order the food.",
          bn: "আমি এখনই খাবার অর্ডার করতে যাচ্ছি।",
          slotValues: { ACTION: "order the food" },
          topicArea: "food",
        },
        {
          en: "I'm about to pay for this.",
          bn: "আমি এখনই এটার পেমেন্ট করতে যাচ্ছি।",
          slotValues: { ACTION: "pay for this" },
          topicArea: "shopping",
        },
        {
          en: "I'm about to enter the meeting.",
          bn: "আমি এখনই মিটিংয়ে ঢুকতে যাচ্ছি।",
          slotValues: { ACTION: "enter the meeting" },
          topicArea: "work",
        },
        {
          en: "I'm about to fall asleep.",
          bn: "আমি এখনই ঘুমিয়ে পড়তে যাচ্ছি।",
          slotValues: { ACTION: "fall asleep" },
          topicArea: "daily_life",
        },
        {
          en: "I'm about to board the train.",
          bn: "আমি এখনই ট্রেনে উঠতে যাচ্ছি।",
          slotValues: { ACTION: "board the train" },
          topicArea: "travel",
        },
        {
          en: "I'm about to take my medicine.",
          bn: "আমি এখনই ওষুধ খেতে যাচ্ছি।",
          slotValues: { ACTION: "take my medicine" },
          topicArea: "health",
        },
        {
          en: "I'm about to submit my assignment.",
          bn: "আমি এখনই আমার অ্যাসাইনমেন্ট জমা দিতে যাচ্ছি।",
          slotValues: { ACTION: "submit my assignment" },
          topicArea: "education",
        },
        {
          en: "I'm about to text her.",
          bn: "আমি এখনই তাকে মেসেজ করতে যাচ্ছি।",
          slotValues: { ACTION: "text her" },
          topicArea: "relationships",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "'Be about to' means something will happen very soon, within seconds or minutes. Do NOT use a future time word with this pattern.",
      usageNote_bn:
        "'Be about to' মানে কিছু খুব শীঘ্রই ঘটবে, সেকেন্ড বা মিনিটের মধ্যে। এই প্যাটার্নের সাথে ভবিষ্যৎ সময়ের শব্দ ব্যবহার করবেন না।",
      combinableWith: ["C9.1"],
      banglaStructureMap:
        "আমি (Subject) + এখনই + [ACTION] (Verb) + করতে যাচ্ছি (about to)",
    },
    {
      id: "C9.3",
      formula: "I'm going to [ACTION] [TIME]",
      formula_bn: "আমি [সময়] [কাজ] করব",
      patternName: "Future Intention",
      patternName_bn: "ভবিষ্যৎ উদ্দেশ্য",
      slots: [
        {
          name: "ACTION",
          description: "A base verb for a planned future action or intention",
          description_bn:
            "পরিকল্পিত ভবিষ্যৎ কাজ বা উদ্দেশ্যের জন্য একটি মূল ক্রিয়া",
          acceptedTypes: ["verb"],
          examples: ["study", "travel", "buy"],
        },
        {
          name: "TIME",
          description: "A future time expression",
          description_bn: "একটি ভবিষ্যৎ সময়সূচক অভিব্যক্তি",
          acceptedTypes: ["time", "time_expression"],
          examples: ["next year", "after lunch", "soon"],
        },
      ],
      examples: [
        {
          en: "I'm going to study harder next semester.",
          bn: "আমি আগামী সেমিস্টারে আরও কঠোর পড়াশোনা করব।",
          slotValues: { ACTION: "study harder", TIME: "next semester" },
          topicArea: "education",
        },
        {
          en: "I'm going to travel to Europe next summer.",
          bn: "আমি আগামী গ্রীষ্মে ইউরোপ ভ্রমণ করব।",
          slotValues: { ACTION: "travel to Europe", TIME: "next summer" },
          topicArea: "travel",
        },
        {
          en: "I'm going to buy a new laptop soon.",
          bn: "আমি শীঘ্রই একটি নতুন ল্যাপটপ কিনব।",
          slotValues: { ACTION: "buy a new laptop", TIME: "soon" },
          topicArea: "shopping",
        },
        {
          en: "I'm going to cook biryani this weekend.",
          bn: "আমি এই সপ্তাহান্তে বিরিয়ানি রান্না করব।",
          slotValues: { ACTION: "cook biryani", TIME: "this weekend" },
          topicArea: "food",
        },
        {
          en: "I'm going to join a gym next month.",
          bn: "আমি আগামী মাসে জিমে যোগ দেব।",
          slotValues: { ACTION: "join a gym", TIME: "next month" },
          topicArea: "health",
        },
        {
          en: "I'm going to apply for a new job after the holidays.",
          bn: "আমি ছুটির পর নতুন চাকরির জন্য আবেদন করব।",
          slotValues: {
            ACTION: "apply for a new job",
            TIME: "after the holidays",
          },
          topicArea: "work",
        },
        {
          en: "I'm going to clean the house this afternoon.",
          bn: "আমি আজ বিকেলে ঘর পরিষ্কার করব।",
          slotValues: { ACTION: "clean the house", TIME: "this afternoon" },
          topicArea: "daily_life",
        },
        {
          en: "I'm going to call my sister tonight.",
          bn: "আমি আজ রাতে আমার বোনকে ফোন করব।",
          slotValues: { ACTION: "call my sister", TIME: "tonight" },
          topicArea: "relationships",
        },
        {
          en: "I'm going to learn to drive this year.",
          bn: "আমি এই বছর গাড়ি চালানো শিখব।",
          slotValues: { ACTION: "learn to drive", TIME: "this year" },
          topicArea: "travel",
        },
        {
          en: "I'm going to read that book next week.",
          bn: "আমি আগামী সপ্তাহে সেই বইটি পড়ব।",
          slotValues: { ACTION: "read that book", TIME: "next week" },
          topicArea: "education",
        },
        {
          en: "I'm going to start eating healthy tomorrow.",
          bn: "আমি আগামীকাল থেকে স্বাস্থ্যকর খাবার খাওয়া শুরু করব।",
          slotValues: { ACTION: "start eating healthy", TIME: "tomorrow" },
          topicArea: "food",
        },
        {
          en: "I'm going to take a day off next Friday.",
          bn: "আমি আগামী শুক্রবার একদিন ছুটি নেব।",
          slotValues: { ACTION: "take a day off", TIME: "next Friday" },
          topicArea: "work",
        },
        {
          en: "I'm going to start running after the rain stops.",
          bn: "বৃষ্টি থামলে আমি দৌড়ানো শুরু করব।",
          slotValues: {
            ACTION: "start running",
            TIME: "after the rain stops",
          },
          topicArea: "health",
        },
        {
          en: "I'm going to redecorate my room this month.",
          bn: "আমি এই মাসে আমার ঘর সাজাব।",
          slotValues: { ACTION: "redecorate my room", TIME: "this month" },
          topicArea: "daily_life",
        },
        {
          en: "I'm going to save more money from next month.",
          bn: "আমি আগামী মাস থেকে আরও টাকা জমাব।",
          slotValues: { ACTION: "save more money", TIME: "from next month" },
          topicArea: "shopping",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "'Going to' expresses intentions or plans you have already decided on. It is different from present continuous arrangements, which are more definite and confirmed.",
      usageNote_bn:
        "'Going to' আপনি ইতিমধ্যে সিদ্ধান্ত নিয়েছেন এমন উদ্দেশ্য বা পরিকল্পনা প্রকাশ করে। এটি প্রেজেন্ট কন্টিনিউয়াস ব্যবস্থাপনা থেকে আলাদা, যেগুলো আরও নিশ্চিত।",
      combinableWith: ["C9.1", "C9.4"],
      banglaStructureMap:
        "আমি (Subject) + [TIME] (Time) + [ACTION] (Verb) + করব (Future Aux)",
    },
    {
      id: "C9.4",
      formula: "I'm not [DOING] [TIME]",
      formula_bn: "আমি [সময়] [কাজ] করছি না",
      patternName: "Cancelled or No Arrangement",
      patternName_bn: "বাতিল বা কোনো ব্যবস্থা নেই",
      slots: [
        {
          name: "DOING",
          description:
            "A verb in -ing form for a future activity that is not happening",
          description_bn:
            "যে ভবিষ্যৎ কাজ হচ্ছে না তার জন্য একটি -ing রূপের ক্রিয়া",
          acceptedTypes: ["gerund"],
          examples: ["working", "going", "coming"],
        },
        {
          name: "TIME",
          description: "A future time expression",
          description_bn: "একটি ভবিষ্যৎ সময়সূচক অভিব্যক্তি",
          acceptedTypes: ["time", "time_expression"],
          examples: ["tomorrow", "next week", "on Monday"],
        },
      ],
      examples: [
        {
          en: "I'm not working tomorrow.",
          bn: "আমি আগামীকাল কাজ করছি না।",
          slotValues: { DOING: "working", TIME: "tomorrow" },
          topicArea: "work",
        },
        {
          en: "I'm not going to the party this weekend.",
          bn: "আমি এই সপ্তাহান্তে পার্টিতে যাচ্ছি না।",
          slotValues: { DOING: "going to the party", TIME: "this weekend" },
          topicArea: "relationships",
        },
        {
          en: "I'm not coming to class on Monday.",
          bn: "আমি সোমবার ক্লাসে আসছি না।",
          slotValues: { DOING: "coming to class", TIME: "on Monday" },
          topicArea: "education",
        },
        {
          en: "I'm not cooking tonight.",
          bn: "আমি আজ রাতে রান্না করছি না।",
          slotValues: { DOING: "cooking", TIME: "tonight" },
          topicArea: "food",
        },
        {
          en: "I'm not traveling this month.",
          bn: "আমি এই মাসে ভ্রমণ করছি না।",
          slotValues: { DOING: "traveling", TIME: "this month" },
          topicArea: "travel",
        },
        {
          en: "I'm not exercising today.",
          bn: "আমি আজ ব্যায়াম করছি না।",
          slotValues: { DOING: "exercising", TIME: "today" },
          topicArea: "health",
        },
        {
          en: "I'm not shopping this weekend.",
          bn: "আমি এই সপ্তাহান্তে কেনাকাটা করছি না।",
          slotValues: { DOING: "shopping", TIME: "this weekend" },
          topicArea: "shopping",
        },
        {
          en: "I'm not attending the meeting on Friday.",
          bn: "আমি শুক্রবারের মিটিংয়ে যাচ্ছি না।",
          slotValues: { DOING: "attending the meeting", TIME: "on Friday" },
          topicArea: "work",
        },
        {
          en: "I'm not staying home this evening.",
          bn: "আমি আজ সন্ধ্যায় বাড়িতে থাকছি না।",
          slotValues: { DOING: "staying home", TIME: "this evening" },
          topicArea: "daily_life",
        },
        {
          en: "I'm not visiting anyone next week.",
          bn: "আমি আগামী সপ্তাহে কারো সাথে দেখা করছি না।",
          slotValues: { DOING: "visiting anyone", TIME: "next week" },
          topicArea: "relationships",
        },
        {
          en: "I'm not taking any classes this summer.",
          bn: "আমি এই গ্রীষ্মে কোনো ক্লাস নিচ্ছি না।",
          slotValues: { DOING: "taking any classes", TIME: "this summer" },
          topicArea: "education",
        },
        {
          en: "I'm not eating out tonight.",
          bn: "আমি আজ রাতে বাইরে খাচ্ছি না।",
          slotValues: { DOING: "eating out", TIME: "tonight" },
          topicArea: "food",
        },
        {
          en: "I'm not flying anywhere next month.",
          bn: "আমি আগামী মাসে কোথাও উড়ছি না।",
          slotValues: { DOING: "flying anywhere", TIME: "next month" },
          topicArea: "travel",
        },
        {
          en: "I'm not running the marathon this year.",
          bn: "আমি এই বছর ম্যারাথন দৌড়াচ্ছি না।",
          slotValues: { DOING: "running the marathon", TIME: "this year" },
          topicArea: "health",
        },
        {
          en: "I'm not moving house this month.",
          bn: "আমি এই মাসে বাড়ি বদল করছি না।",
          slotValues: { DOING: "moving house", TIME: "this month" },
          topicArea: "daily_life",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "The negative form tells people that a previously expected or possible arrangement will NOT happen. It is useful for cancelling plans or clarifying your schedule.",
      usageNote_bn:
        "নেতিবাচক রূপটি মানুষকে জানায় যে পূর্বে প্রত্যাশিত বা সম্ভাব্য ব্যবস্থা ঘটবে না। পরিকল্পনা বাতিল করতে বা সময়সূচি স্পষ্ট করতে এটি কার্যকর।",
      combinableWith: ["C9.1", "C9.5"],
      banglaStructureMap:
        "আমি (Subject) + [TIME] (Time) + [DOING] (Verb-ing) + করছি না (Neg Present Continuous)",
    },
    {
      id: "C9.5",
      formula: "Are you [DOING] [TIME]?",
      formula_bn: "তুমি কি [সময়] [কাজ] করছ?",
      patternName: "Asking About Plans",
      patternName_bn: "পরিকল্পনা সম্পর্কে জিজ্ঞাসা",
      slots: [
        {
          name: "DOING",
          description:
            "A verb in -ing form for the future activity you are asking about",
          description_bn:
            "যে ভবিষ্যৎ কাজ সম্পর্কে জিজ্ঞাসা করছেন তার জন্য একটি -ing রূপের ক্রিয়া",
          acceptedTypes: ["gerund"],
          examples: ["coming", "working", "doing anything"],
        },
        {
          name: "TIME",
          description: "A future time expression",
          description_bn: "একটি ভবিষ্যৎ সময়সূচক অভিব্যক্তি",
          acceptedTypes: ["time", "time_expression"],
          examples: ["tomorrow", "this weekend", "on Friday"],
        },
      ],
      examples: [
        {
          en: "Are you coming to the party tomorrow?",
          bn: "তুমি কি আগামীকাল পার্টিতে আসছ?",
          slotValues: { DOING: "coming to the party", TIME: "tomorrow" },
          topicArea: "relationships",
        },
        {
          en: "Are you working this Saturday?",
          bn: "তুমি কি এই শনিবার কাজ করছ?",
          slotValues: { DOING: "working", TIME: "this Saturday" },
          topicArea: "work",
        },
        {
          en: "Are you doing anything this evening?",
          bn: "তুমি কি আজ সন্ধ্যায় কিছু করছ?",
          slotValues: { DOING: "doing anything", TIME: "this evening" },
          topicArea: "daily_life",
        },
        {
          en: "Are you traveling anywhere next month?",
          bn: "তুমি কি আগামী মাসে কোথাও যাচ্ছ?",
          slotValues: { DOING: "traveling anywhere", TIME: "next month" },
          topicArea: "travel",
        },
        {
          en: "Are you cooking dinner tonight?",
          bn: "তুমি কি আজ রাতে রাতের খাবার রান্না করছ?",
          slotValues: { DOING: "cooking dinner", TIME: "tonight" },
          topicArea: "food",
        },
        {
          en: "Are you joining the class tomorrow?",
          bn: "তুমি কি আগামীকাল ক্লাসে যোগ দিচ্ছ?",
          slotValues: { DOING: "joining the class", TIME: "tomorrow" },
          topicArea: "education",
        },
        {
          en: "Are you going to the gym today?",
          bn: "তুমি কি আজ জিমে যাচ্ছ?",
          slotValues: { DOING: "going to the gym", TIME: "today" },
          topicArea: "health",
        },
        {
          en: "Are you buying anything from the sale?",
          bn: "তুমি কি সেল থেকে কিছু কিনছ?",
          slotValues: { DOING: "buying anything from the sale", TIME: "" },
          topicArea: "shopping",
        },
        {
          en: "Are you meeting your friends this weekend?",
          bn: "তুমি কি এই সপ্তাহান্তে বন্ধুদের সাথে দেখা করছ?",
          slotValues: {
            DOING: "meeting your friends",
            TIME: "this weekend",
          },
          topicArea: "relationships",
        },
        {
          en: "Are you attending the seminar next week?",
          bn: "তুমি কি আগামী সপ্তাহে সেমিনারে যাচ্ছ?",
          slotValues: { DOING: "attending the seminar", TIME: "next week" },
          topicArea: "work",
        },
        {
          en: "Are you taking the kids to school tomorrow?",
          bn: "তুমি কি আগামীকাল বাচ্চাদের স্কুলে নিয়ে যাচ্ছ?",
          slotValues: {
            DOING: "taking the kids to school",
            TIME: "tomorrow",
          },
          topicArea: "daily_life",
        },
        {
          en: "Are you having lunch with us today?",
          bn: "তুমি কি আজ আমাদের সাথে দুপুরের খাবার খাচ্ছ?",
          slotValues: { DOING: "having lunch with us", TIME: "today" },
          topicArea: "food",
        },
        {
          en: "Are you studying for the exam this weekend?",
          bn: "তুমি কি এই সপ্তাহান্তে পরীক্ষার জন্য পড়ছ?",
          slotValues: {
            DOING: "studying for the exam",
            TIME: "this weekend",
          },
          topicArea: "education",
        },
        {
          en: "Are you seeing the doctor on Monday?",
          bn: "তুমি কি সোমবার ডাক্তার দেখাচ্ছ?",
          slotValues: { DOING: "seeing the doctor", TIME: "on Monday" },
          topicArea: "health",
        },
        {
          en: "Are you catching the morning flight?",
          bn: "তুমি কি সকালের ফ্লাইট ধরছ?",
          slotValues: { DOING: "catching the morning flight", TIME: "" },
          topicArea: "travel",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "Use this question form to ask about someone's future plans or arrangements. It is a common way to invite, make plans, or confirm schedules.",
      usageNote_bn:
        "কারো ভবিষ্যৎ পরিকল্পনা বা ব্যবস্থা সম্পর্কে জিজ্ঞাসা করতে এই প্রশ্ন রূপটি ব্যবহার করুন। আমন্ত্রণ জানানো, পরিকল্পনা করা বা সময়সূচি নিশ্চিত করার এটি একটি সাধারণ উপায়।",
      combinableWith: ["C9.1", "C9.4"],
      banglaStructureMap:
        "তুমি কি (Subject + Q) + [TIME] (Time) + [DOING] (Verb-ing) + করছ? (Present Continuous Q)",
    },
    {
      id: "C9.6",
      formula: "[EVENT] is coming up [TIME]",
      formula_bn: "[ঘটনা] [সময়] আসছে",
      patternName: "Near Future Event",
      patternName_bn: "নিকট ভবিষ্যৎ ঘটনা",
      slots: [
        {
          name: "EVENT",
          description: "An upcoming event or occasion",
          description_bn: "একটি আসন্ন ঘটনা বা অনুষ্ঠান",
          acceptedTypes: ["noun", "noun_phrase"],
          examples: ["The exam", "My birthday", "Eid"],
        },
        {
          name: "TIME",
          description: "A near future time expression",
          description_bn: "একটি নিকট ভবিষ্যৎ সময়সূচক অভিব্যক্তি",
          acceptedTypes: ["time", "time_expression"],
          examples: ["next week", "soon", "this month"],
        },
      ],
      examples: [
        {
          en: "The exam is coming up next week.",
          bn: "পরীক্ষা আগামী সপ্তাহে আসছে।",
          slotValues: { EVENT: "The exam", TIME: "next week" },
          topicArea: "education",
        },
        {
          en: "My birthday is coming up soon.",
          bn: "আমার জন্মদিন শীঘ্রই আসছে।",
          slotValues: { EVENT: "My birthday", TIME: "soon" },
          topicArea: "relationships",
        },
        {
          en: "Eid is coming up this month.",
          bn: "ঈদ এই মাসে আসছে।",
          slotValues: { EVENT: "Eid", TIME: "this month" },
          topicArea: "daily_life",
        },
        {
          en: "The deadline is coming up tomorrow.",
          bn: "ডেডলাইন আগামীকাল আসছে।",
          slotValues: { EVENT: "The deadline", TIME: "tomorrow" },
          topicArea: "work",
        },
        {
          en: "Our anniversary is coming up in March.",
          bn: "আমাদের বার্ষিকী মার্চে আসছে।",
          slotValues: { EVENT: "Our anniversary", TIME: "in March" },
          topicArea: "relationships",
        },
        {
          en: "The meeting is coming up this afternoon.",
          bn: "মিটিং আজ বিকেলে আসছে।",
          slotValues: { EVENT: "The meeting", TIME: "this afternoon" },
          topicArea: "work",
        },
        {
          en: "The holidays are coming up soon.",
          bn: "ছুটির দিনগুলো শীঘ্রই আসছে।",
          slotValues: { EVENT: "The holidays", TIME: "soon" },
          topicArea: "daily_life",
        },
        {
          en: "The rainy season is coming up.",
          bn: "বর্ষাকাল আসছে।",
          slotValues: { EVENT: "The rainy season", TIME: "" },
          topicArea: "daily_life",
        },
        {
          en: "The election is coming up next year.",
          bn: "নির্বাচন আগামী বছর আসছে।",
          slotValues: { EVENT: "The election", TIME: "next year" },
          topicArea: "daily_life",
        },
        {
          en: "A big sale is coming up this weekend.",
          bn: "একটি বড় সেল এই সপ্তাহান্তে আসছে।",
          slotValues: { EVENT: "A big sale", TIME: "this weekend" },
          topicArea: "shopping",
        },
        {
          en: "The festival is coming up in two days.",
          bn: "উৎসব দুই দিনের মধ্যে আসছে।",
          slotValues: { EVENT: "The festival", TIME: "in two days" },
          topicArea: "daily_life",
        },
        {
          en: "The interview is coming up on Monday.",
          bn: "ইন্টারভিউ সোমবার আসছে।",
          slotValues: { EVENT: "The interview", TIME: "on Monday" },
          topicArea: "work",
        },
        {
          en: "The school year is coming up in January.",
          bn: "স্কুল বছর জানুয়ারিতে আসছে।",
          slotValues: { EVENT: "The school year", TIME: "in January" },
          topicArea: "education",
        },
        {
          en: "The concert is coming up in a few weeks.",
          bn: "কনসার্ট কয়েক সপ্তাহের মধ্যে আসছে।",
          slotValues: { EVENT: "The concert", TIME: "in a few weeks" },
          topicArea: "daily_life",
        },
        {
          en: "Winter is coming up fast.",
          bn: "শীতকাল দ্রুত আসছে।",
          slotValues: { EVENT: "Winter", TIME: "fast" },
          topicArea: "daily_life",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "'Coming up' means an event is approaching or about to happen soon. It creates a sense of anticipation or urgency about an upcoming event.",
      usageNote_bn:
        "'Coming up' মানে একটি ঘটনা এগিয়ে আসছে বা শীঘ্রই ঘটতে চলেছে। এটি একটি আসন্ন ঘটনা সম্পর্কে প্রত্যাশা বা জরুরি অনুভূতি তৈরি করে।",
      combinableWith: ["C9.1", "C9.3"],
      banglaStructureMap:
        "[EVENT] (ঘটনা) + [TIME] (সময়) + আসছে (Coming up)",
    },
    {
      id: "C9.7",
      formula: "I'm due to [ACTION] at [TIME]",
      formula_bn: "আমার [সময়]-এ [কাজ] করার কথা",
      patternName: "Scheduled/Expected Action",
      patternName_bn: "নির্ধারিত/প্রত্যাশিত কাজ",
      slots: [
        {
          name: "ACTION",
          description:
            "A base verb for a scheduled or expected action",
          description_bn:
            "নির্ধারিত বা প্রত্যাশিত কাজের জন্য একটি মূল ক্রিয়া",
          acceptedTypes: ["verb"],
          examples: ["arrive", "start", "leave"],
        },
        {
          name: "TIME",
          description: "A scheduled time expression",
          description_bn: "একটি নির্ধারিত সময়সূচক অভিব্যক্তি",
          acceptedTypes: ["time", "time_expression"],
          examples: ["5 PM", "Monday", "next month"],
        },
      ],
      examples: [
        {
          en: "I'm due to arrive at 5 PM.",
          bn: "আমার বিকেল ৫টায় পৌঁছানোর কথা।",
          slotValues: { ACTION: "arrive", TIME: "5 PM" },
          topicArea: "travel",
        },
        {
          en: "She's due to start work on Monday.",
          bn: "তার সোমবার কাজ শুরু করার কথা।",
          slotValues: { ACTION: "start work", TIME: "on Monday" },
          topicArea: "work",
        },
        {
          en: "The train is due to leave at 3:30.",
          bn: "ট্রেন ৩:৩০-এ ছাড়ার কথা।",
          slotValues: { ACTION: "leave", TIME: "at 3:30" },
          topicArea: "travel",
        },
        {
          en: "He's due to graduate next month.",
          bn: "তার আগামী মাসে গ্র্যাজুয়েশন করার কথা।",
          slotValues: { ACTION: "graduate", TIME: "next month" },
          topicArea: "education",
        },
        {
          en: "I'm due to see the doctor at 10.",
          bn: "আমার ১০টায় ডাক্তার দেখানোর কথা।",
          slotValues: { ACTION: "see the doctor", TIME: "at 10" },
          topicArea: "health",
        },
        {
          en: "The project is due to finish by December.",
          bn: "প্রজেক্ট ডিসেম্বরের মধ্যে শেষ হওয়ার কথা।",
          slotValues: { ACTION: "finish", TIME: "by December" },
          topicArea: "work",
        },
        {
          en: "She's due to give a presentation tomorrow.",
          bn: "তার আগামীকাল প্রেজেন্টেশন দেওয়ার কথা।",
          slotValues: { ACTION: "give a presentation", TIME: "tomorrow" },
          topicArea: "work",
        },
        {
          en: "The package is due to arrive today.",
          bn: "প্যাকেজ আজ পৌঁছানোর কথা।",
          slotValues: { ACTION: "arrive", TIME: "today" },
          topicArea: "shopping",
        },
        {
          en: "He's due to return from abroad next week.",
          bn: "তার আগামী সপ্তাহে বিদেশ থেকে ফেরার কথা।",
          slotValues: { ACTION: "return from abroad", TIME: "next week" },
          topicArea: "travel",
        },
        {
          en: "I'm due to renew my passport soon.",
          bn: "আমার শীঘ্রই পাসপোর্ট নবায়ন করার কথা।",
          slotValues: { ACTION: "renew my passport", TIME: "soon" },
          topicArea: "daily_life",
        },
        {
          en: "The bus is due to come in 10 minutes.",
          bn: "বাস ১০ মিনিটের মধ্যে আসার কথা।",
          slotValues: { ACTION: "come", TIME: "in 10 minutes" },
          topicArea: "travel",
        },
        {
          en: "She's due to have her baby in April.",
          bn: "তার এপ্রিলে বাচ্চা হওয়ার কথা।",
          slotValues: { ACTION: "have her baby", TIME: "in April" },
          topicArea: "health",
        },
        {
          en: "The report is due to be submitted Friday.",
          bn: "রিপোর্ট শুক্রবার জমা দেওয়ার কথা।",
          slotValues: { ACTION: "be submitted", TIME: "Friday" },
          topicArea: "work",
        },
        {
          en: "He's due to retire next year.",
          bn: "তার আগামী বছর অবসর নেওয়ার কথা।",
          slotValues: { ACTION: "retire", TIME: "next year" },
          topicArea: "work",
        },
        {
          en: "The results are due to be announced soon.",
          bn: "ফলাফল শীঘ্রই ঘোষণা হওয়ার কথা।",
          slotValues: { ACTION: "be announced", TIME: "soon" },
          topicArea: "education",
        },
      ],
      formality: "polite",
      difficulty: "intermediate",
      usageNote:
        "'Due to' indicates something is scheduled or expected to happen at a particular time. It is commonly used for transport schedules, appointments, and deadlines.",
      usageNote_bn:
        "'Due to' নির্দেশ করে যে কিছু একটি নির্দিষ্ট সময়ে হওয়ার কথা বা প্রত্যাশিত। এটি সাধারণত পরিবহন সময়সূচি, অ্যাপয়েন্টমেন্ট এবং ডেডলাইনের জন্য ব্যবহৃত হয়।",
      combinableWith: ["C9.1", "C9.6"],
      banglaStructureMap:
        "আমার (Subject) + [TIME] (সময়)-এ + [ACTION] (ক্রিয়া) + করার কথা (due to)",
    },
    {
      id: "C9.8",
      formula: "I have plans to [ACTION]",
      formula_bn: "আমার [কাজ] করার পরিকল্পনা আছে",
      patternName: "Intended Future Action",
      patternName_bn: "অভিপ্রেত ভবিষ্যৎ কাজ",
      slots: [
        {
          name: "ACTION",
          description:
            "A base verb for a planned or intended future action",
          description_bn:
            "পরিকল্পিত বা অভিপ্রেত ভবিষ্যৎ কাজের জন্য একটি মূল ক্রিয়া",
          acceptedTypes: ["verb"],
          examples: ["visit", "open", "travel"],
        },
      ],
      examples: [
        {
          en: "I have plans to visit my hometown.",
          bn: "আমার নিজের শহরে যাওয়ার পরিকল্পনা আছে।",
          slotValues: { ACTION: "visit my hometown" },
          topicArea: "travel",
        },
        {
          en: "She has plans to open a shop.",
          bn: "তার একটি দোকান খোলার পরিকল্পনা আছে।",
          slotValues: { ACTION: "open a shop" },
          topicArea: "work",
        },
        {
          en: "We have plans to travel to Cox's Bazar.",
          bn: "আমাদের কক্সবাজার ভ্রমণের পরিকল্পনা আছে।",
          slotValues: { ACTION: "travel to Cox's Bazar" },
          topicArea: "travel",
        },
        {
          en: "He has plans to learn driving.",
          bn: "তার গাড়ি চালানো শেখার পরিকল্পনা আছে।",
          slotValues: { ACTION: "learn driving" },
          topicArea: "daily_life",
        },
        {
          en: "I have plans to change my career.",
          bn: "আমার ক্যারিয়ার পরিবর্তনের পরিকল্পনা আছে।",
          slotValues: { ACTION: "change my career" },
          topicArea: "work",
        },
        {
          en: "She has plans to study abroad.",
          bn: "তার বিদেশে পড়াশোনা করার পরিকল্পনা আছে।",
          slotValues: { ACTION: "study abroad" },
          topicArea: "education",
        },
        {
          en: "We have plans to move to a bigger house.",
          bn: "আমাদের বড় বাড়িতে যাওয়ার পরিকল্পনা আছে।",
          slotValues: { ACTION: "move to a bigger house" },
          topicArea: "daily_life",
        },
        {
          en: "He has plans to start a business.",
          bn: "তার ব্যবসা শুরু করার পরিকল্পনা আছে।",
          slotValues: { ACTION: "start a business" },
          topicArea: "work",
        },
        {
          en: "I have plans to get married next year.",
          bn: "আমার আগামী বছর বিয়ে করার পরিকল্পনা আছে।",
          slotValues: { ACTION: "get married next year" },
          topicArea: "relationships",
        },
        {
          en: "She has plans to take a cooking class.",
          bn: "তার রান্নার ক্লাস নেওয়ার পরিকল্পনা আছে।",
          slotValues: { ACTION: "take a cooking class" },
          topicArea: "food",
        },
        {
          en: "We have plans to renovate the kitchen.",
          bn: "আমাদের রান্নাঘর সংস্কারের পরিকল্পনা আছে।",
          slotValues: { ACTION: "renovate the kitchen" },
          topicArea: "daily_life",
        },
        {
          en: "He has plans to save for a car.",
          bn: "তার গাড়ির জন্য সঞ্চয় করার পরিকল্পনা আছে।",
          slotValues: { ACTION: "save for a car" },
          topicArea: "shopping",
        },
        {
          en: "I have plans to improve my English.",
          bn: "আমার ইংরেজি উন্নত করার পরিকল্পনা আছে।",
          slotValues: { ACTION: "improve my English" },
          topicArea: "education",
        },
        {
          en: "She has plans to join a gym.",
          bn: "তার জিমে যোগ দেওয়ার পরিকল্পনা আছে।",
          slotValues: { ACTION: "join a gym" },
          topicArea: "health",
        },
        {
          en: "We have plans to host a dinner party.",
          bn: "আমাদের ডিনার পার্টি দেওয়ার পরিকল্পনা আছে।",
          slotValues: { ACTION: "host a dinner party" },
          topicArea: "food",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "'Have plans to' expresses an intention or goal for the future that you have thought about but may not have a fixed time for. It is softer and less definite than 'going to'.",
      usageNote_bn:
        "'Have plans to' ভবিষ্যতের জন্য একটি উদ্দেশ্য বা লক্ষ্য প্রকাশ করে যা আপনি ভেবেছেন কিন্তু নির্দিষ্ট সময় নাও থাকতে পারে। এটি 'going to'-এর চেয়ে নরম এবং কম নিশ্চিত।",
      combinableWith: ["C9.3", "C9.6"],
      banglaStructureMap:
        "আমার (Subject) + [ACTION] (ক্রিয়া) + করার পরিকল্পনা আছে (have plans to)",
    },
  ],
};
