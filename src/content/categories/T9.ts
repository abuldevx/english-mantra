import { PatternCategory } from "@/types/pattern";

export const categoryT9: PatternCategory = {
  id: "T9",
  slug: "education-learning",
  name: "Education & Learning",
  name_bn: "শিক্ষা ও শেখা",
  description:
    "Learn how to talk about your studies, qualifications, and learning goals in English.",
  description_bn:
    "ইংরেজিতে আপনার পড়াশোনা, যোগ্যতা এবং শেখার লক্ষ্য নিয়ে কথা বলতে শিখুন।",
  icon: "📚",
  group: "T",
  groupName: "Situational Patterns",
  groupName_bn: "পরিস্থিতিগত প্যাটার্ন",
  difficulty: "beginner",
  patterns: [
    {
      id: "T9.1",
      formula: "I'm studying [SUBJECT]",
      formula_bn: "আমি [বিষয়] পড়ছি",
      patternName: "Current Studies",
      patternName_bn: "বর্তমান পড়াশোনা",
      slots: [
        {
          name: "SUBJECT",
          description: "An academic subject, course, or field of study",
          description_bn: "একটি একাডেমিক বিষয়, কোর্স, বা পড়াশোনার ক্ষেত্র",
          acceptedTypes: ["noun", "noun_phrase", "topic"],
          examples: ["computer science", "English literature", "medicine"],
        },
      ],
      examples: [
        {
          en: "I'm studying computer science.",
          bn: "আমি কম্পিউটার সায়েন্স পড়ছি।",
          slotValues: { SUBJECT: "computer science" },
          topicArea: "education",
        },
        {
          en: "I'm studying English literature.",
          bn: "আমি ইংরেজি সাহিত্য পড়ছি।",
          slotValues: { SUBJECT: "English literature" },
          topicArea: "education",
        },
        {
          en: "I'm studying medicine.",
          bn: "আমি মেডিসিন পড়ছি।",
          slotValues: { SUBJECT: "medicine" },
          topicArea: "health",
        },
        {
          en: "I'm studying business administration.",
          bn: "আমি ব্যবসায় প্রশাসন পড়ছি।",
          slotValues: { SUBJECT: "business administration" },
          topicArea: "work",
        },
        {
          en: "I'm studying mathematics.",
          bn: "আমি গণিত পড়ছি।",
          slotValues: { SUBJECT: "mathematics" },
          topicArea: "education",
        },
        {
          en: "I'm studying law.",
          bn: "আমি আইন পড়ছি।",
          slotValues: { SUBJECT: "law" },
          topicArea: "education",
        },
        {
          en: "I'm studying journalism.",
          bn: "আমি সাংবাদিকতা পড়ছি।",
          slotValues: { SUBJECT: "journalism" },
          topicArea: "work",
        },
        {
          en: "I'm studying electrical engineering.",
          bn: "আমি ইলেকট্রিক্যাল ইঞ্জিনিয়ারিং পড়ছি।",
          slotValues: { SUBJECT: "electrical engineering" },
          topicArea: "education",
        },
        {
          en: "I'm studying psychology.",
          bn: "আমি মনোবিজ্ঞান পড়ছি।",
          slotValues: { SUBJECT: "psychology" },
          topicArea: "health",
        },
        {
          en: "I'm studying economics.",
          bn: "আমি অর্থনীতি পড়ছি।",
          slotValues: { SUBJECT: "economics" },
          topicArea: "education",
        },
        {
          en: "I'm studying architecture.",
          bn: "আমি স্থাপত্যবিদ্যা পড়ছি।",
          slotValues: { SUBJECT: "architecture" },
          topicArea: "education",
        },
        {
          en: "I'm studying environmental science.",
          bn: "আমি পরিবেশ বিজ্ঞান পড়ছি।",
          slotValues: { SUBJECT: "environmental science" },
          topicArea: "education",
        },
        {
          en: "I'm studying pharmacy.",
          bn: "আমি ফার্মেসি পড়ছি।",
          slotValues: { SUBJECT: "pharmacy" },
          topicArea: "health",
        },
        {
          en: "I'm studying history.",
          bn: "আমি ইতিহাস পড়ছি।",
          slotValues: { SUBJECT: "history" },
          topicArea: "education",
        },
        {
          en: "I'm studying graphic design.",
          bn: "আমি গ্রাফিক ডিজাইন পড়ছি।",
          slotValues: { SUBJECT: "graphic design" },
          topicArea: "work",
        },
      ],
      formality: "casual",
      difficulty: "beginner",
      usageNote:
        "A simple way to tell someone what you are currently learning. Very common among students.",
      usageNote_bn:
        "আপনি বর্তমানে কী শিখছেন তা কাউকে বলার একটি সহজ উপায়। ছাত্রদের মধ্যে খুবই সাধারণ।",
      combinableWith: ["T9.3"],
      banglaStructureMap:
        "আমি (Subject) + [SUBJECT] (Object) + পড়ছি (Verb - Progressive)",
    },
    {
      id: "T9.2",
      formula: "I graduated from [SCHOOL] in [YEAR]",
      formula_bn: "আমি [বছরে] [প্রতিষ্ঠান] থেকে গ্র্যাজুয়েট হয়েছি",
      patternName: "Stating Educational Background",
      patternName_bn: "শিক্ষাগত পটভূমি জানানো",
      slots: [
        {
          name: "SCHOOL",
          description:
            "The name or type of educational institution you graduated from",
          description_bn:
            "যে শিক্ষা প্রতিষ্ঠান থেকে আপনি গ্র্যাজুয়েট হয়েছেন তার নাম বা ধরন",
          acceptedTypes: ["noun", "noun_phrase", "place"],
          examples: ["Dhaka University", "medical school", "MIT"],
        },
        {
          name: "YEAR",
          description: "The year of graduation",
          description_bn: "গ্র্যাজুয়েশনের বছর",
          acceptedTypes: ["number", "time"],
          examples: ["2020", "2015", "2023"],
        },
      ],
      examples: [
        {
          en: "I graduated from Dhaka University in 2020.",
          bn: "আমি ২০২০ সালে ঢাকা বিশ্ববিদ্যালয় থেকে গ্র্যাজুয়েট হয়েছি।",
          slotValues: { SCHOOL: "Dhaka University", YEAR: "2020" },
          topicArea: "education",
        },
        {
          en: "I graduated from medical school in 2015.",
          bn: "আমি ২০১৫ সালে মেডিকেল স্কুল থেকে গ্র্যাজুয়েট হয়েছি।",
          slotValues: { SCHOOL: "medical school", YEAR: "2015" },
          topicArea: "health",
        },
        {
          en: "I graduated from BUET in 2018.",
          bn: "আমি ২০১৮ সালে বুয়েট থেকে গ্র্যাজুয়েট হয়েছি।",
          slotValues: { SCHOOL: "BUET", YEAR: "2018" },
          topicArea: "education",
        },
        {
          en: "I graduated from high school in 2019.",
          bn: "আমি ২০১৯ সালে উচ্চ বিদ্যালয় থেকে গ্র্যাজুয়েট হয়েছি।",
          slotValues: { SCHOOL: "high school", YEAR: "2019" },
          topicArea: "education",
        },
        {
          en: "I graduated from Rajshahi University in 2016.",
          bn: "আমি ২০১৬ সালে রাজশাহী বিশ্ববিদ্যালয় থেকে গ্র্যাজুয়েট হয়েছি।",
          slotValues: { SCHOOL: "Rajshahi University", YEAR: "2016" },
          topicArea: "education",
        },
        {
          en: "I graduated from a culinary institute in 2021.",
          bn: "আমি ২০২১ সালে একটি রন্ধন প্রতিষ্ঠান থেকে গ্র্যাজুয়েট হয়েছি।",
          slotValues: { SCHOOL: "a culinary institute", YEAR: "2021" },
          topicArea: "food",
        },
        {
          en: "I graduated from business school in 2017.",
          bn: "আমি ২০১৭ সালে বিজনেস স্কুল থেকে গ্র্যাজুয়েট হয়েছি।",
          slotValues: { SCHOOL: "business school", YEAR: "2017" },
          topicArea: "work",
        },
        {
          en: "I graduated from Chittagong University in 2022.",
          bn: "আমি ২০২২ সালে চট্টগ্রাম বিশ্ববিদ্যালয় থেকে গ্র্যাজুয়েট হয়েছি।",
          slotValues: { SCHOOL: "Chittagong University", YEAR: "2022" },
          topicArea: "education",
        },
        {
          en: "I graduated from nursing college in 2019.",
          bn: "আমি ২০১৯ সালে নার্সিং কলেজ থেকে গ্র্যাজুয়েট হয়েছি।",
          slotValues: { SCHOOL: "nursing college", YEAR: "2019" },
          topicArea: "health",
        },
        {
          en: "I graduated from a polytechnic institute in 2014.",
          bn: "আমি ২০১৪ সালে একটি পলিটেকনিক ইনস্টিটিউট থেকে গ্র্যাজুয়েট হয়েছি।",
          slotValues: { SCHOOL: "a polytechnic institute", YEAR: "2014" },
          topicArea: "education",
        },
        {
          en: "I graduated from law school in 2023.",
          bn: "আমি ২০২৩ সালে ল স্কুল থেকে গ্র্যাজুয়েট হয়েছি।",
          slotValues: { SCHOOL: "law school", YEAR: "2023" },
          topicArea: "education",
        },
        {
          en: "I graduated from a teacher training college in 2020.",
          bn: "আমি ২০২০ সালে একটি শিক্ষক প্রশিক্ষণ কলেজ থেকে গ্র্যাজুয়েট হয়েছি।",
          slotValues: { SCHOOL: "a teacher training college", YEAR: "2020" },
          topicArea: "education",
        },
        {
          en: "I graduated from an art school in 2018.",
          bn: "আমি ২০১৮ সালে একটি আর্ট স্কুল থেকে গ্র্যাজুয়েট হয়েছি।",
          slotValues: { SCHOOL: "an art school", YEAR: "2018" },
          topicArea: "education",
        },
        {
          en: "I graduated from the national university in 2021.",
          bn: "আমি ২০২১ সালে জাতীয় বিশ্ববিদ্যালয় থেকে গ্র্যাজুয়েট হয়েছি।",
          slotValues: { SCHOOL: "the national university", YEAR: "2021" },
          topicArea: "education",
        },
        {
          en: "I graduated from a tourism and hospitality school in 2016.",
          bn: "আমি ২০১৬ সালে একটি ট্যুরিজম ও হসপিটালিটি স্কুল থেকে গ্র্যাজুয়েট হয়েছি।",
          slotValues: {
            SCHOOL: "a tourism and hospitality school",
            YEAR: "2016",
          },
          topicArea: "travel",
        },
      ],
      formality: "polite",
      difficulty: "beginner",
      usageNote:
        "Used to share your educational background. Common in job interviews, social introductions, and networking.",
      usageNote_bn:
        "আপনার শিক্ষাগত পটভূমি শেয়ার করতে ব্যবহৃত হয়। চাকরির ইন্টারভিউ, সামাজিক পরিচিতি এবং নেটওয়ার্কিংয়ে সাধারণ।",
      combinableWith: ["T9.1"],
      banglaStructureMap:
        "আমি (Subject) + [YEAR] সালে (Time + Postposition) + [SCHOOL] থেকে (Place + Postposition) + গ্র্যাজুয়েট হয়েছি (Verb - Past Perfect)",
    },
    {
      id: "T9.3",
      formula: "I'm taking a course in [SUBJECT]",
      formula_bn: "আমি [বিষয়ে] একটি কোর্স করছি",
      patternName: "Enrolled in a Course",
      patternName_bn: "কোর্সে ভর্তি",
      slots: [
        {
          name: "SUBJECT",
          description: "The topic or subject of the course",
          description_bn: "কোর্সের বিষয় বা প্রসঙ্গ",
          acceptedTypes: ["noun", "noun_phrase", "topic"],
          examples: [
            "digital marketing",
            "first aid",
            "web development",
          ],
        },
      ],
      examples: [
        {
          en: "I'm taking a course in digital marketing.",
          bn: "আমি ডিজিটাল মার্কেটিংয়ে একটি কোর্স করছি।",
          slotValues: { SUBJECT: "digital marketing" },
          topicArea: "work",
        },
        {
          en: "I'm taking a course in first aid.",
          bn: "আমি প্রাথমিক চিকিৎসায় একটি কোর্স করছি।",
          slotValues: { SUBJECT: "first aid" },
          topicArea: "health",
        },
        {
          en: "I'm taking a course in web development.",
          bn: "আমি ওয়েব ডেভেলপমেন্টে একটি কোর্স করছি।",
          slotValues: { SUBJECT: "web development" },
          topicArea: "work",
        },
        {
          en: "I'm taking a course in photography.",
          bn: "আমি ফটোগ্রাফিতে একটি কোর্স করছি।",
          slotValues: { SUBJECT: "photography" },
          topicArea: "daily_life",
        },
        {
          en: "I'm taking a course in spoken English.",
          bn: "আমি স্পোকেন ইংলিশে একটি কোর্স করছি।",
          slotValues: { SUBJECT: "spoken English" },
          topicArea: "education",
        },
        {
          en: "I'm taking a course in data science.",
          bn: "আমি ডাটা সায়েন্সে একটি কোর্স করছি।",
          slotValues: { SUBJECT: "data science" },
          topicArea: "education",
        },
        {
          en: "I'm taking a course in cooking.",
          bn: "আমি রান্নায় একটি কোর্স করছি।",
          slotValues: { SUBJECT: "cooking" },
          topicArea: "food",
        },
        {
          en: "I'm taking a course in project management.",
          bn: "আমি প্রজেক্ট ম্যানেজমেন্টে একটি কোর্স করছি।",
          slotValues: { SUBJECT: "project management" },
          topicArea: "work",
        },
        {
          en: "I'm taking a course in travel and tourism.",
          bn: "আমি ট্রাভেল ও ট্যুরিজমে একটি কোর্স করছি।",
          slotValues: { SUBJECT: "travel and tourism" },
          topicArea: "travel",
        },
        {
          en: "I'm taking a course in public speaking.",
          bn: "আমি পাবলিক স্পিকিংয়ে একটি কোর্স করছি।",
          slotValues: { SUBJECT: "public speaking" },
          topicArea: "education",
        },
        {
          en: "I'm taking a course in financial planning.",
          bn: "আমি আর্থিক পরিকল্পনায় একটি কোর্স করছি।",
          slotValues: { SUBJECT: "financial planning" },
          topicArea: "work",
        },
        {
          en: "I'm taking a course in nutrition.",
          bn: "আমি পুষ্টিবিদ্যায় একটি কোর্স করছি।",
          slotValues: { SUBJECT: "nutrition" },
          topicArea: "health",
        },
        {
          en: "I'm taking a course in yoga and meditation.",
          bn: "আমি যোগ ও ধ্যানে একটি কোর্স করছি।",
          slotValues: { SUBJECT: "yoga and meditation" },
          topicArea: "health",
        },
        {
          en: "I'm taking a course in creative writing.",
          bn: "আমি সৃজনশীল লেখায় একটি কোর্স করছি।",
          slotValues: { SUBJECT: "creative writing" },
          topicArea: "education",
        },
        {
          en: "I'm taking a course in fashion design.",
          bn: "আমি ফ্যাশন ডিজাইনে একটি কোর্স করছি।",
          slotValues: { SUBJECT: "fashion design" },
          topicArea: "shopping",
        },
      ],
      formality: "casual",
      difficulty: "beginner",
      usageNote:
        "Used to talk about courses you are currently enrolled in, whether formal or informal. Common in casual conversations.",
      usageNote_bn:
        "আপনি বর্তমানে যে কোর্সে ভর্তি আছেন সেগুলো সম্পর্কে কথা বলতে ব্যবহৃত হয়, আনুষ্ঠানিক বা অনানুষ্ঠানিক যাই হোক। অনানুষ্ঠানিক কথোপকথনে সাধারণ।",
      combinableWith: ["T9.4"],
      banglaStructureMap:
        "আমি (Subject) + [SUBJECT]-এ (Topic + Postposition) + একটি কোর্স (Object) + করছি (Verb - Progressive)",
    },
    {
      id: "T9.4",
      formula: "I need to improve my [SKILL]",
      formula_bn: "আমার [দক্ষতা] উন্নত করা দরকার",
      patternName: "Identifying Skill Gaps",
      patternName_bn: "দক্ষতার ঘাটতি চিহ্নিতকরণ",
      slots: [
        {
          name: "SKILL",
          description: "A skill or ability you want to get better at",
          description_bn:
            "একটি দক্ষতা বা সক্ষমতা যেখানে আপনি আরও ভালো হতে চান",
          acceptedTypes: ["noun", "noun_phrase"],
          examples: ["English speaking", "writing skills", "time management"],
        },
      ],
      examples: [
        {
          en: "I need to improve my English speaking.",
          bn: "আমার ইংরেজি বলা উন্নত করা দরকার।",
          slotValues: { SKILL: "English speaking" },
          topicArea: "education",
        },
        {
          en: "I need to improve my writing skills.",
          bn: "আমার লেখার দক্ষতা উন্নত করা দরকার।",
          slotValues: { SKILL: "writing skills" },
          topicArea: "education",
        },
        {
          en: "I need to improve my time management.",
          bn: "আমার সময় ব্যবস্থাপনা উন্নত করা দরকার।",
          slotValues: { SKILL: "time management" },
          topicArea: "work",
        },
        {
          en: "I need to improve my pronunciation.",
          bn: "আমার উচ্চারণ উন্নত করা দরকার।",
          slotValues: { SKILL: "pronunciation" },
          topicArea: "education",
        },
        {
          en: "I need to improve my computer skills.",
          bn: "আমার কম্পিউটার দক্ষতা উন্নত করা দরকার।",
          slotValues: { SKILL: "computer skills" },
          topicArea: "work",
        },
        {
          en: "I need to improve my cooking skills.",
          bn: "আমার রান্নার দক্ষতা উন্নত করা দরকার।",
          slotValues: { SKILL: "cooking skills" },
          topicArea: "food",
        },
        {
          en: "I need to improve my listening comprehension.",
          bn: "আমার শোনার বোধগম্যতা উন্নত করা দরকার।",
          slotValues: { SKILL: "listening comprehension" },
          topicArea: "education",
        },
        {
          en: "I need to improve my presentation skills.",
          bn: "আমার উপস্থাপনা দক্ষতা উন্নত করা দরকার।",
          slotValues: { SKILL: "presentation skills" },
          topicArea: "work",
        },
        {
          en: "I need to improve my fitness level.",
          bn: "আমার শারীরিক সক্ষমতার মাত্রা উন্নত করা দরকার।",
          slotValues: { SKILL: "fitness level" },
          topicArea: "health",
        },
        {
          en: "I need to improve my communication skills.",
          bn: "আমার যোগাযোগ দক্ষতা উন্নত করা দরকার।",
          slotValues: { SKILL: "communication skills" },
          topicArea: "relationships",
        },
        {
          en: "I need to improve my vocabulary.",
          bn: "আমার শব্দভান্ডার উন্নত করা দরকার।",
          slotValues: { SKILL: "vocabulary" },
          topicArea: "education",
        },
        {
          en: "I need to improve my driving skills.",
          bn: "আমার ড্রাইভিং দক্ষতা উন্নত করা দরকার।",
          slotValues: { SKILL: "driving skills" },
          topicArea: "travel",
        },
        {
          en: "I need to improve my negotiation skills.",
          bn: "আমার আলোচনার দক্ষতা উন্নত করা দরকার।",
          slotValues: { SKILL: "negotiation skills" },
          topicArea: "work",
        },
        {
          en: "I need to improve my grammar.",
          bn: "আমার ব্যাকরণ উন্নত করা দরকার।",
          slotValues: { SKILL: "grammar" },
          topicArea: "education",
        },
        {
          en: "I need to improve my customer handling.",
          bn: "আমার কাস্টমার হ্যান্ডলিং উন্নত করা দরকার।",
          slotValues: { SKILL: "customer handling" },
          topicArea: "shopping",
        },
      ],
      formality: "casual",
      difficulty: "beginner",
      usageNote:
        "A humble and self-aware way to acknowledge areas for growth. Shows motivation to learn.",
      usageNote_bn:
        "উন্নতির ক্ষেত্রগুলো স্বীকার করার একটি বিনয়ী ও আত্ম-সচেতন উপায়। শেখার প্রেরণা দেখায়।",
      combinableWith: ["T9.3"],
      banglaStructureMap:
        "আমার (Subject + Possessive) + [SKILL] (Object) + উন্নত করা দরকার (Verb + Need)",
    },
    {
      id: "T9.5",
      formula: "I'm preparing for [EXAM]",
      formula_bn: "আমি [পরীক্ষার] জন্য প্রস্তুতি নিচ্ছি",
      patternName: "Exam Preparation",
      patternName_bn: "পরীক্ষার প্রস্তুতি",
      slots: [
        {
          name: "EXAM",
          description: "The name or type of exam you are preparing for",
          description_bn:
            "যে পরীক্ষার জন্য আপনি প্রস্তুতি নিচ্ছেন তার নাম বা ধরন",
          acceptedTypes: ["noun", "noun_phrase", "event"],
          examples: ["IELTS", "the final exam", "my driving test"],
        },
      ],
      examples: [
        {
          en: "I'm preparing for IELTS.",
          bn: "আমি আইইএলটিএস-এর জন্য প্রস্তুতি নিচ্ছি।",
          slotValues: { EXAM: "IELTS" },
          topicArea: "education",
        },
        {
          en: "I'm preparing for the final exam.",
          bn: "আমি ফাইনাল পরীক্ষার জন্য প্রস্তুতি নিচ্ছি।",
          slotValues: { EXAM: "the final exam" },
          topicArea: "education",
        },
        {
          en: "I'm preparing for my driving test.",
          bn: "আমি আমার ড্রাইভিং টেস্টের জন্য প্রস্তুতি নিচ্ছি।",
          slotValues: { EXAM: "my driving test" },
          topicArea: "travel",
        },
        {
          en: "I'm preparing for the BCS exam.",
          bn: "আমি বিসিএস পরীক্ষার জন্য প্রস্তুতি নিচ্ছি।",
          slotValues: { EXAM: "the BCS exam" },
          topicArea: "work",
        },
        {
          en: "I'm preparing for TOEFL.",
          bn: "আমি টোফেলের জন্য প্রস্তুতি নিচ্ছি।",
          slotValues: { EXAM: "TOEFL" },
          topicArea: "education",
        },
        {
          en: "I'm preparing for the midterm exam.",
          bn: "আমি মিডটার্ম পরীক্ষার জন্য প্রস্তুতি নিচ্ছি।",
          slotValues: { EXAM: "the midterm exam" },
          topicArea: "education",
        },
        {
          en: "I'm preparing for the entrance exam.",
          bn: "আমি ভর্তি পরীক্ষার জন্য প্রস্তুতি নিচ্ছি।",
          slotValues: { EXAM: "the entrance exam" },
          topicArea: "education",
        },
        {
          en: "I'm preparing for a job interview.",
          bn: "আমি একটি চাকরির ইন্টারভিউয়ের জন্য প্রস্তুতি নিচ্ছি।",
          slotValues: { EXAM: "a job interview" },
          topicArea: "work",
        },
        {
          en: "I'm preparing for the SSC exam.",
          bn: "আমি এসএসসি পরীক্ষার জন্য প্রস্তুতি নিচ্ছি।",
          slotValues: { EXAM: "the SSC exam" },
          topicArea: "education",
        },
        {
          en: "I'm preparing for a certification test.",
          bn: "আমি একটি সার্টিফিকেশন পরীক্ষার জন্য প্রস্তুতি নিচ্ছি।",
          slotValues: { EXAM: "a certification test" },
          topicArea: "work",
        },
        {
          en: "I'm preparing for the GRE.",
          bn: "আমি জিআরই-এর জন্য প্রস্তুতি নিচ্ছি।",
          slotValues: { EXAM: "the GRE" },
          topicArea: "education",
        },
        {
          en: "I'm preparing for the HSC exam.",
          bn: "আমি এইচএসসি পরীক্ষার জন্য প্রস্তুতি নিচ্ছি।",
          slotValues: { EXAM: "the HSC exam" },
          topicArea: "education",
        },
        {
          en: "I'm preparing for a medical licensing exam.",
          bn: "আমি একটি মেডিকেল লাইসেন্সিং পরীক্ষার জন্য প্রস্তুতি নিচ্ছি।",
          slotValues: { EXAM: "a medical licensing exam" },
          topicArea: "health",
        },
        {
          en: "I'm preparing for a cooking competition.",
          bn: "আমি একটি রান্নার প্রতিযোগিতার জন্য প্রস্তুতি নিচ্ছি।",
          slotValues: { EXAM: "a cooking competition" },
          topicArea: "food",
        },
        {
          en: "I'm preparing for the bar exam.",
          bn: "আমি বার পরীক্ষার জন্য প্রস্তুতি নিচ্ছি।",
          slotValues: { EXAM: "the bar exam" },
          topicArea: "education",
        },
      ],
      formality: "casual",
      difficulty: "beginner",
      usageNote:
        "A common way to let others know you are busy studying for an upcoming test or evaluation.",
      usageNote_bn:
        "আসন্ন পরীক্ষা বা মূল্যায়নের জন্য আপনি পড়াশোনায় ব্যস্ত তা অন্যদের জানানোর একটি সাধারণ উপায়।",
      combinableWith: ["T9.4"],
      banglaStructureMap:
        "আমি (Subject) + [EXAM]-এর জন্য (Event + Postposition) + প্রস্তুতি নিচ্ছি (Verb - Progressive)",
    },
  ],
};
