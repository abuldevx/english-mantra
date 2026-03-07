import { PatternCategory } from "@/types/pattern";

export const categoryB8: PatternCategory = {
  id: "B8",
  slug: "describing-appearance",
  name: "Describing Appearance",
  name_bn: "চেহারা বর্ণনা করা",
  description:
    "Learn how to describe what people look like, including physical features, hair, eyes, and clothing.",
  description_bn:
    "মানুষকে দেখতে কেমন তা বর্ণনা করতে শিখুন, যার মধ্যে শারীরিক বৈশিষ্ট্য, চুল, চোখ এবং পোশাক রয়েছে।",
  icon: "👁️",
  group: "B",
  groupName: "Describing People, Things & Situations",
  groupName_bn: "মানুষ, জিনিস এবং পরিস্থিতি বর্ণনা",
  difficulty: "intermediate",
  patterns: [
    {
      id: "B8.1",
      formula: "[PERSON] looks like [PERSON/THING]",
      formula_bn: "[ব্যক্তিকে] [ব্যক্তি/জিনিস]-এর মতো দেখতে",
      patternName: "Resemblance with 'Looks Like'",
      patternName_bn: "'Looks Like' দিয়ে সাদৃশ্য",
      slots: [
        {
          name: "PERSON",
          description: "The person being described",
          description_bn: "যে ব্যক্তিকে বর্ণনা করা হচ্ছে",
          acceptedTypes: ["person"],
          examples: ["He", "She", "The baby"],
        },
        {
          name: "PERSON/THING",
          description: "Someone or something they resemble",
          description_bn: "কেউ বা কিছু যার সাথে তার সাদৃশ্য আছে",
          acceptedTypes: ["person", "noun_phrase"],
          examples: ["his father", "a model", "a movie star"],
        },
      ],
      examples: [
        {
          en: "He looks like his father.",
          bn: "তাকে দেখতে তার বাবার মতো।",
          slotValues: { PERSON: "He", "PERSON/THING": "his father" },
          topicArea: "relationships",
        },
        {
          en: "She looks like a movie star.",
          bn: "তাকে দেখতে সিনেমার তারকার মতো।",
          slotValues: { PERSON: "She", "PERSON/THING": "a movie star" },
          topicArea: "daily_life",
        },
        {
          en: "The baby looks like her mother.",
          bn: "বাচ্চাটিকে দেখতে তার মায়ের মতো।",
          slotValues: { PERSON: "The baby", "PERSON/THING": "her mother" },
          topicArea: "relationships",
        },
        {
          en: "My brother looks like a cricket player.",
          bn: "আমার ভাইকে দেখতে ক্রিকেট খেলোয়াড়ের মতো।",
          slotValues: {
            PERSON: "My brother",
            "PERSON/THING": "a cricket player",
          },
          topicArea: "daily_life",
        },
        {
          en: "She looks like her grandmother when she was young.",
          bn: "তাকে দেখতে তার দাদির তরুণ বয়সের মতো।",
          slotValues: {
            PERSON: "She",
            "PERSON/THING": "her grandmother when she was young",
          },
          topicArea: "relationships",
        },
        {
          en: "He looks like a teacher with those glasses.",
          bn: "ওই চশমা নিয়ে তাকে দেখতে শিক্ষকের মতো।",
          slotValues: {
            PERSON: "He",
            "PERSON/THING": "a teacher with those glasses",
          },
          topicArea: "education",
        },
        {
          en: "The new manager looks like a very serious person.",
          bn: "নতুন ম্যানেজারকে দেখতে খুব গম্ভীর মানুষের মতো।",
          slotValues: {
            PERSON: "The new manager",
            "PERSON/THING": "a very serious person",
          },
          topicArea: "work",
        },
        {
          en: "She looks like someone who exercises regularly.",
          bn: "তাকে দেখতে এমন কেউ যে নিয়মিত ব্যায়াম করে।",
          slotValues: {
            PERSON: "She",
            "PERSON/THING": "someone who exercises regularly",
          },
          topicArea: "health",
        },
        {
          en: "He looks like a tourist with that big backpack.",
          bn: "ওই বড় ব্যাকপ্যাক নিয়ে তাকে দেখতে পর্যটকের মতো।",
          slotValues: {
            PERSON: "He",
            "PERSON/THING": "a tourist with that big backpack",
          },
          topicArea: "travel",
        },
        {
          en: "The twins look like each other.",
          bn: "যমজদের দেখতে একে অপরের মতো।",
          slotValues: {
            PERSON: "The twins",
            "PERSON/THING": "each other",
          },
          topicArea: "relationships",
        },
        {
          en: "My uncle looks like a chef in that apron.",
          bn: "ওই অ্যাপ্রন পরে আমার চাচাকে দেখতে শেফের মতো।",
          slotValues: {
            PERSON: "My uncle",
            "PERSON/THING": "a chef in that apron",
          },
          topicArea: "food",
        },
        {
          en: "She looks like a student even though she is a professor.",
          bn: "প্রফেসর হলেও তাকে দেখতে ছাত্রীর মতো।",
          slotValues: {
            PERSON: "She",
            "PERSON/THING": "a student even though she is a professor",
          },
          topicArea: "education",
        },
        {
          en: "He looks like his older brother.",
          bn: "তাকে দেখতে তার বড় ভাইয়ের মতো।",
          slotValues: {
            PERSON: "He",
            "PERSON/THING": "his older brother",
          },
          topicArea: "relationships",
        },
        {
          en: "The shopkeeper looks like a friendly person.",
          bn: "দোকানদারকে দেখতে বন্ধুভাবাপন্ন মানুষের মতো।",
          slotValues: {
            PERSON: "The shopkeeper",
            "PERSON/THING": "a friendly person",
          },
          topicArea: "shopping",
        },
        {
          en: "My daughter looks like me when I was her age.",
          bn: "আমার মেয়েকে দেখতে আমার মতো যখন আমি তার বয়সী ছিলাম।",
          slotValues: {
            PERSON: "My daughter",
            "PERSON/THING": "me when I was her age",
          },
          topicArea: "relationships",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "'Looks like' compares someone's appearance to another person or type. It's followed by a noun, not an adjective.",
      usageNote_bn:
        "'Looks like' কারো চেহারা অন্য কারো বা কোনো ধরনের সাথে তুলনা করে। এর পরে বিশেষ্য আসে, বিশেষণ নয়।",
      combinableWith: ["B8.2", "B8.3"],
      banglaStructureMap:
        "[PERSON]-কে (কর্তা) + [PERSON/THING]-র মতো (তুলনা) + দেখতে (ক্রিয়া)",
    },
    {
      id: "B8.2",
      formula: "[PERSON] has [COLOR] [FEATURE]",
      formula_bn: "[ব্যক্তির] [রঙ] [বৈশিষ্ট্য] আছে",
      patternName: "Describing Physical Features",
      patternName_bn: "শারীরিক বৈশিষ্ট্য বর্ণনা",
      slots: [
        {
          name: "PERSON",
          description: "The person being described",
          description_bn: "যে ব্যক্তিকে বর্ণনা করা হচ্ছে",
          acceptedTypes: ["person"],
          examples: ["She", "He", "My sister"],
        },
        {
          name: "COLOR",
          description: "A color or descriptive word for the feature",
          description_bn: "বৈশিষ্ট্যের জন্য একটি রঙ বা বর্ণনামূলক শব্দ",
          acceptedTypes: ["adjective"],
          examples: ["black", "brown", "long"],
        },
        {
          name: "FEATURE",
          description: "A physical feature like hair, eyes, or skin",
          description_bn: "চুল, চোখ বা ত্বকের মতো শারীরিক বৈশিষ্ট্য",
          acceptedTypes: ["noun"],
          examples: ["hair", "eyes", "skin"],
        },
      ],
      examples: [
        {
          en: "She has long black hair.",
          bn: "তার লম্বা কালো চুল আছে।",
          slotValues: { PERSON: "She", COLOR: "long black", FEATURE: "hair" },
          topicArea: "daily_life",
        },
        {
          en: "He has brown eyes.",
          bn: "তার বাদামি চোখ আছে।",
          slotValues: { PERSON: "He", COLOR: "brown", FEATURE: "eyes" },
          topicArea: "daily_life",
        },
        {
          en: "My sister has curly hair.",
          bn: "আমার বোনের কোঁকড়া চুল আছে।",
          slotValues: { PERSON: "My sister", COLOR: "curly", FEATURE: "hair" },
          topicArea: "relationships",
        },
        {
          en: "She has fair skin.",
          bn: "তার ফর্সা ত্বক আছে।",
          slotValues: { PERSON: "She", COLOR: "fair", FEATURE: "skin" },
          topicArea: "daily_life",
        },
        {
          en: "He has a thick beard.",
          bn: "তার ঘন দাড়ি আছে।",
          slotValues: { PERSON: "He", COLOR: "thick", FEATURE: "beard" },
          topicArea: "daily_life",
        },
        {
          en: "The teacher has grey hair.",
          bn: "শিক্ষকের ধূসর চুল আছে।",
          slotValues: {
            PERSON: "The teacher",
            COLOR: "grey",
            FEATURE: "hair",
          },
          topicArea: "education",
        },
        {
          en: "My boss has short hair.",
          bn: "আমার বসের ছোট চুল আছে।",
          slotValues: { PERSON: "My boss", COLOR: "short", FEATURE: "hair" },
          topicArea: "work",
        },
        {
          en: "She has big bright eyes.",
          bn: "তার বড় উজ্জ্বল চোখ আছে।",
          slotValues: { PERSON: "She", COLOR: "big bright", FEATURE: "eyes" },
          topicArea: "daily_life",
        },
        {
          en: "He has a round face.",
          bn: "তার গোল মুখ আছে।",
          slotValues: { PERSON: "He", COLOR: "round", FEATURE: "face" },
          topicArea: "daily_life",
        },
        {
          en: "My grandmother has white hair.",
          bn: "আমার দাদির সাদা চুল আছে।",
          slotValues: {
            PERSON: "My grandmother",
            COLOR: "white",
            FEATURE: "hair",
          },
          topicArea: "relationships",
        },
        {
          en: "The doctor has kind eyes.",
          bn: "ডাক্তারের দয়ালু চোখ আছে।",
          slotValues: {
            PERSON: "The doctor",
            COLOR: "kind",
            FEATURE: "eyes",
          },
          topicArea: "health",
        },
        {
          en: "She has dark wavy hair.",
          bn: "তার কালো ঢেউ খেলানো চুল আছে।",
          slotValues: { PERSON: "She", COLOR: "dark wavy", FEATURE: "hair" },
          topicArea: "daily_life",
        },
        {
          en: "He has broad shoulders.",
          bn: "তার চওড়া কাঁধ আছে।",
          slotValues: { PERSON: "He", COLOR: "broad", FEATURE: "shoulders" },
          topicArea: "daily_life",
        },
        {
          en: "The guide has a friendly smile.",
          bn: "গাইডের বন্ধুসুলভ হাসি আছে।",
          slotValues: {
            PERSON: "The guide",
            COLOR: "friendly",
            FEATURE: "smile",
          },
          topicArea: "travel",
        },
        {
          en: "My friend has straight black hair.",
          bn: "আমার বন্ধুর সোজা কালো চুল আছে।",
          slotValues: {
            PERSON: "My friend",
            COLOR: "straight black",
            FEATURE: "hair",
          },
          topicArea: "relationships",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "Use 'has' to describe permanent physical features. The color/descriptor comes before the feature noun.",
      usageNote_bn:
        "স্থায়ী শারীরিক বৈশিষ্ট্য বর্ণনা করতে 'has' ব্যবহার করুন। রঙ/বর্ণনাকারী বৈশিষ্ট্য বিশেষ্যের আগে আসে।",
      combinableWith: ["B8.1", "B8.3"],
      banglaStructureMap:
        "[PERSON]-র (কর্তা + বিভক্তি) + [COLOR] (বিশেষণ) + [FEATURE] (বিশেষ্য) + আছে (ক্রিয়া)",
    },
    {
      id: "B8.3",
      formula: "[PERSON] is wearing [CLOTHING]",
      formula_bn: "[ব্যক্তি] [পোশাক] পরেছে",
      patternName: "Describing Clothing",
      patternName_bn: "পোশাক বর্ণনা",
      slots: [
        {
          name: "PERSON",
          description: "The person being described",
          description_bn: "যে ব্যক্তিকে বর্ণনা করা হচ্ছে",
          acceptedTypes: ["person"],
          examples: ["She", "He", "The man"],
        },
        {
          name: "CLOTHING",
          description: "Clothing item(s) with optional color/style",
          description_bn: "ঐচ্ছিক রঙ/স্টাইল সহ পোশাকের আইটেম",
          acceptedTypes: ["noun_phrase"],
          examples: ["a red dress", "a blue shirt", "jeans and a t-shirt"],
        },
      ],
      examples: [
        {
          en: "She is wearing a red dress.",
          bn: "সে একটি লাল পোশাক পরেছে।",
          slotValues: { PERSON: "She", CLOTHING: "a red dress" },
          topicArea: "daily_life",
        },
        {
          en: "He is wearing a blue shirt and black pants.",
          bn: "সে একটি নীল শার্ট এবং কালো প্যান্ট পরেছে।",
          slotValues: {
            PERSON: "He",
            CLOTHING: "a blue shirt and black pants",
          },
          topicArea: "work",
        },
        {
          en: "The boy is wearing a school uniform.",
          bn: "ছেলেটি স্কুল ইউনিফর্ম পরেছে।",
          slotValues: { PERSON: "The boy", CLOTHING: "a school uniform" },
          topicArea: "education",
        },
        {
          en: "She is wearing a beautiful sari.",
          bn: "সে একটি সুন্দর শাড়ি পরেছে।",
          slotValues: { PERSON: "She", CLOTHING: "a beautiful sari" },
          topicArea: "shopping",
        },
        {
          en: "He is wearing a warm jacket.",
          bn: "সে একটি গরম জ্যাকেট পরেছে।",
          slotValues: { PERSON: "He", CLOTHING: "a warm jacket" },
          topicArea: "travel",
        },
        {
          en: "She is wearing jeans and a t-shirt.",
          bn: "সে জিন্স এবং টি-শার্ট পরেছে।",
          slotValues: { PERSON: "She", CLOTHING: "jeans and a t-shirt" },
          topicArea: "daily_life",
        },
        {
          en: "The doctor is wearing a white coat.",
          bn: "ডাক্তার সাদা কোট পরেছেন।",
          slotValues: { PERSON: "The doctor", CLOTHING: "a white coat" },
          topicArea: "health",
        },
        {
          en: "My mother is wearing gold jewelry.",
          bn: "আমার মা সোনার গয়না পরেছেন।",
          slotValues: { PERSON: "My mother", CLOTHING: "gold jewelry" },
          topicArea: "relationships",
        },
        {
          en: "He is wearing sunglasses and a cap.",
          bn: "সে সানগ্লাস এবং ক্যাপ পরেছে।",
          slotValues: {
            PERSON: "He",
            CLOTHING: "sunglasses and a cap",
          },
          topicArea: "travel",
        },
        {
          en: "She is wearing a green scarf.",
          bn: "সে একটি সবুজ স্কার্ফ পরেছে।",
          slotValues: { PERSON: "She", CLOTHING: "a green scarf" },
          topicArea: "shopping",
        },
        {
          en: "The chef is wearing an apron.",
          bn: "শেফ একটি অ্যাপ্রন পরেছেন।",
          slotValues: { PERSON: "The chef", CLOTHING: "an apron" },
          topicArea: "food",
        },
        {
          en: "My colleague is wearing a formal suit.",
          bn: "আমার সহকর্মী একটি ফর্মাল স্যুট পরেছে।",
          slotValues: { PERSON: "My colleague", CLOTHING: "a formal suit" },
          topicArea: "work",
        },
        {
          en: "The girl is wearing a pink ribbon in her hair.",
          bn: "মেয়েটি চুলে একটি গোলাপি ফিতা পরেছে।",
          slotValues: {
            PERSON: "The girl",
            CLOTHING: "a pink ribbon in her hair",
          },
          topicArea: "daily_life",
        },
        {
          en: "He is wearing sports shoes.",
          bn: "সে স্পোর্টস জুতা পরেছে।",
          slotValues: { PERSON: "He", CLOTHING: "sports shoes" },
          topicArea: "health",
        },
        {
          en: "She is wearing a traditional salwar kameez.",
          bn: "সে একটি ঐতিহ্যবাহী সালোয়ার কামিজ পরেছে।",
          slotValues: {
            PERSON: "She",
            CLOTHING: "a traditional salwar kameez",
          },
          topicArea: "daily_life",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "'Is wearing' describes what someone has on at the moment. Use present continuous for current clothing.",
      usageNote_bn:
        "'Is wearing' এই মুহূর্তে কেউ কী পরেছে তা বর্ণনা করে। বর্তমান পোশাকের জন্য present continuous ব্যবহার করুন।",
      combinableWith: ["B8.1", "B8.2"],
      banglaStructureMap:
        "[PERSON] (কর্তা) + [CLOTHING] (পোশাক) + পরেছে (ক্রিয়া)",
    },
    {
      id: "B8.4",
      formula: "[PERSON] is [HEIGHT/BUILD] with [FEATURE]",
      formula_bn: "[ব্যক্তি] [উচ্চতা/গঠন] এবং [বৈশিষ্ট্য] আছে",
      patternName: "Overall Physical Description",
      patternName_bn: "সামগ্রিক শারীরিক বর্ণনা",
      slots: [
        {
          name: "PERSON",
          description: "The person being described",
          description_bn: "যে ব্যক্তিকে বর্ণনা করা হচ্ছে",
          acceptedTypes: ["person"],
          examples: ["He", "She", "My father"],
        },
        {
          name: "HEIGHT/BUILD",
          description: "Height or body build description",
          description_bn: "উচ্চতা বা শরীরের গঠন বর্ণনা",
          acceptedTypes: ["adjective", "description"],
          examples: ["tall", "short and slim", "of medium height"],
        },
        {
          name: "FEATURE",
          description: "A distinguishing physical feature",
          description_bn: "একটি স্বতন্ত্র শারীরিক বৈশিষ্ট্য",
          acceptedTypes: ["noun_phrase"],
          examples: ["short hair", "a beard", "glasses"],
        },
      ],
      examples: [
        {
          en: "He is tall with short hair.",
          bn: "সে লম্বা এবং ছোট চুল আছে।",
          slotValues: {
            PERSON: "He",
            "HEIGHT/BUILD": "tall",
            FEATURE: "short hair",
          },
          topicArea: "daily_life",
        },
        {
          en: "She is slim with long black hair.",
          bn: "সে পাতলা গড়নের এবং লম্বা কালো চুল আছে।",
          slotValues: {
            PERSON: "She",
            "HEIGHT/BUILD": "slim",
            FEATURE: "long black hair",
          },
          topicArea: "daily_life",
        },
        {
          en: "My father is of medium height with a mustache.",
          bn: "আমার বাবা মাঝারি উচ্চতার এবং গোঁফ আছে।",
          slotValues: {
            PERSON: "My father",
            "HEIGHT/BUILD": "of medium height",
            FEATURE: "a mustache",
          },
          topicArea: "relationships",
        },
        {
          en: "He is well-built with broad shoulders.",
          bn: "সে সুগঠিত দেহের এবং চওড়া কাঁধ আছে।",
          slotValues: {
            PERSON: "He",
            "HEIGHT/BUILD": "well-built",
            FEATURE: "broad shoulders",
          },
          topicArea: "health",
        },
        {
          en: "She is short with curly hair and glasses.",
          bn: "সে খাটো এবং কোঁকড়া চুল ও চশমা আছে।",
          slotValues: {
            PERSON: "She",
            "HEIGHT/BUILD": "short",
            FEATURE: "curly hair and glasses",
          },
          topicArea: "education",
        },
        {
          en: "The manager is tall with grey hair.",
          bn: "ম্যানেজার লম্বা এবং ধূসর চুল আছে।",
          slotValues: {
            PERSON: "The manager",
            "HEIGHT/BUILD": "tall",
            FEATURE: "grey hair",
          },
          topicArea: "work",
        },
        {
          en: "My brother is thin with a friendly smile.",
          bn: "আমার ভাই রোগা এবং বন্ধুসুলভ হাসি আছে।",
          slotValues: {
            PERSON: "My brother",
            "HEIGHT/BUILD": "thin",
            FEATURE: "a friendly smile",
          },
          topicArea: "relationships",
        },
        {
          en: "She is average height with dark eyes.",
          bn: "সে গড় উচ্চতার এবং কালো চোখ আছে।",
          slotValues: {
            PERSON: "She",
            "HEIGHT/BUILD": "average height",
            FEATURE: "dark eyes",
          },
          topicArea: "daily_life",
        },
        {
          en: "The guide is stocky with a tanned face.",
          bn: "গাইড গাট্টাগোট্টা গড়নের এবং রোদে পোড়া মুখ আছে।",
          slotValues: {
            PERSON: "The guide",
            "HEIGHT/BUILD": "stocky",
            FEATURE: "a tanned face",
          },
          topicArea: "travel",
        },
        {
          en: "He is elderly with white hair and a walking stick.",
          bn: "তিনি বয়স্ক এবং সাদা চুল ও হাঁটার লাঠি আছে।",
          slotValues: {
            PERSON: "He",
            "HEIGHT/BUILD": "elderly",
            FEATURE: "white hair and a walking stick",
          },
          topicArea: "health",
        },
        {
          en: "The shopkeeper is plump with a cheerful face.",
          bn: "দোকানদার মোটাসোটা এবং হাসিখুশি মুখ আছে।",
          slotValues: {
            PERSON: "The shopkeeper",
            "HEIGHT/BUILD": "plump",
            FEATURE: "a cheerful face",
          },
          topicArea: "shopping",
        },
        {
          en: "My cousin is petite with big eyes.",
          bn: "আমার কাজিন খুদে গড়নের এবং বড় চোখ আছে।",
          slotValues: {
            PERSON: "My cousin",
            "HEIGHT/BUILD": "petite",
            FEATURE: "big eyes",
          },
          topicArea: "relationships",
        },
        {
          en: "The chef is short with a round face.",
          bn: "শেফ খাটো এবং গোল মুখ আছে।",
          slotValues: {
            PERSON: "The chef",
            "HEIGHT/BUILD": "short",
            FEATURE: "a round face",
          },
          topicArea: "food",
        },
        {
          en: "She is athletic with strong arms.",
          bn: "সে অ্যাথলেটিক গড়নের এবং শক্তিশালী বাহু আছে।",
          slotValues: {
            PERSON: "She",
            "HEIGHT/BUILD": "athletic",
            FEATURE: "strong arms",
          },
          topicArea: "health",
        },
        {
          en: "He is lean with a sharp jawline.",
          bn: "সে ছিপছিপে গড়নের এবং তীক্ষ্ণ চোয়ালের রেখা আছে।",
          slotValues: {
            PERSON: "He",
            "HEIGHT/BUILD": "lean",
            FEATURE: "a sharp jawline",
          },
          topicArea: "daily_life",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "Combine 'is [adjective]' with 'with [feature]' to give a fuller physical description of a person.",
      usageNote_bn:
        "একজন ব্যক্তির সম্পূর্ণ শারীরিক বর্ণনা দিতে 'is [adjective]' এবং 'with [feature]' একত্রিত করুন।",
      combinableWith: ["B8.1", "B8.2"],
      banglaStructureMap:
        "[PERSON] (কর্তা) + [HEIGHT/BUILD] (বিশেষণ) + এবং [FEATURE] (বৈশিষ্ট্য) + আছে",
    },
    {
      id: "B8.5",
      formula: "[PERSON] has a [ADJECTIVE] [FACE/BODY PART]",
      formula_bn: "[ব্যক্তির] [বিশেষণ] [মুখ/শরীরের অংশ] আছে",
      patternName: "Describing Face and Body Parts",
      patternName_bn: "মুখ ও শরীরের অংশ বর্ণনা",
      slots: [
        {
          name: "PERSON",
          description: "The person being described",
          description_bn: "যে ব্যক্তিকে বর্ণনা করা হচ্ছে",
          acceptedTypes: ["person"],
          examples: ["She", "He", "The man"],
        },
        {
          name: "ADJECTIVE",
          description: "A word describing the feature's quality",
          description_bn: "বৈশিষ্ট্যের গুণ বর্ণনাকারী শব্দ",
          acceptedTypes: ["adjective"],
          examples: ["pointed", "small", "deep"],
        },
        {
          name: "FACE/BODY PART",
          description: "A facial or body feature",
          description_bn: "মুখের বা শরীরের বৈশিষ্ট্য",
          acceptedTypes: ["noun"],
          examples: ["nose", "chin", "dimples"],
        },
      ],
      examples: [
        {
          en: "She has a pointed nose.",
          bn: "তার সরু নাক আছে।",
          slotValues: {
            PERSON: "She",
            ADJECTIVE: "pointed",
            "FACE/BODY PART": "nose",
          },
          topicArea: "daily_life",
        },
        {
          en: "He has a strong chin.",
          bn: "তার শক্তিশালী চিবুক আছে।",
          slotValues: {
            PERSON: "He",
            ADJECTIVE: "strong",
            "FACE/BODY PART": "chin",
          },
          topicArea: "daily_life",
        },
        {
          en: "She has deep dimples when she smiles.",
          bn: "হাসলে তার গভীর টোল পড়ে।",
          slotValues: {
            PERSON: "She",
            ADJECTIVE: "deep",
            "FACE/BODY PART": "dimples",
          },
          topicArea: "relationships",
        },
        {
          en: "He has a wide forehead.",
          bn: "তার চওড়া কপাল আছে।",
          slotValues: {
            PERSON: "He",
            ADJECTIVE: "wide",
            "FACE/BODY PART": "forehead",
          },
          topicArea: "daily_life",
        },
        {
          en: "She has a small mouth.",
          bn: "তার ছোট মুখ আছে।",
          slotValues: {
            PERSON: "She",
            ADJECTIVE: "small",
            "FACE/BODY PART": "mouth",
          },
          topicArea: "daily_life",
        },
        {
          en: "My grandfather has a wrinkled face.",
          bn: "আমার দাদার কুঁচকানো মুখ আছে।",
          slotValues: {
            PERSON: "My grandfather",
            ADJECTIVE: "wrinkled",
            "FACE/BODY PART": "face",
          },
          topicArea: "relationships",
        },
        {
          en: "The student has a round face.",
          bn: "ছাত্রটির গোল মুখ আছে।",
          slotValues: {
            PERSON: "The student",
            ADJECTIVE: "round",
            "FACE/BODY PART": "face",
          },
          topicArea: "education",
        },
        {
          en: "He has thick eyebrows.",
          bn: "তার ঘন ভ্রু আছে।",
          slotValues: {
            PERSON: "He",
            ADJECTIVE: "thick",
            "FACE/BODY PART": "eyebrows",
          },
          topicArea: "daily_life",
        },
        {
          en: "She has high cheekbones.",
          bn: "তার উঁচু গালের হাড় আছে।",
          slotValues: {
            PERSON: "She",
            ADJECTIVE: "high",
            "FACE/BODY PART": "cheekbones",
          },
          topicArea: "daily_life",
        },
        {
          en: "The nurse has gentle hands.",
          bn: "নার্সের কোমল হাত আছে।",
          slotValues: {
            PERSON: "The nurse",
            ADJECTIVE: "gentle",
            "FACE/BODY PART": "hands",
          },
          topicArea: "health",
        },
        {
          en: "He has a long neck.",
          bn: "তার লম্বা গলা আছে।",
          slotValues: {
            PERSON: "He",
            ADJECTIVE: "long",
            "FACE/BODY PART": "neck",
          },
          topicArea: "daily_life",
        },
        {
          en: "My boss has a square jaw.",
          bn: "আমার বসের চারকোনা চোয়াল আছে।",
          slotValues: {
            PERSON: "My boss",
            ADJECTIVE: "square",
            "FACE/BODY PART": "jaw",
          },
          topicArea: "work",
        },
        {
          en: "She has rosy cheeks.",
          bn: "তার গোলাপি গাল আছে।",
          slotValues: {
            PERSON: "She",
            ADJECTIVE: "rosy",
            "FACE/BODY PART": "cheeks",
          },
          topicArea: "daily_life",
        },
        {
          en: "The traveler has rough hands from climbing.",
          bn: "পর্বতারোহণ থেকে ভ্রমণকারীর রুক্ষ হাত আছে।",
          slotValues: {
            PERSON: "The traveler",
            ADJECTIVE: "rough",
            "FACE/BODY PART": "hands",
          },
          topicArea: "travel",
        },
        {
          en: "He has a flat nose.",
          bn: "তার চ্যাপ্টা নাক আছে।",
          slotValues: {
            PERSON: "He",
            ADJECTIVE: "flat",
            "FACE/BODY PART": "nose",
          },
          topicArea: "daily_life",
        },
      ],
      formality: "casual",
      difficulty: "intermediate",
      usageNote:
        "Use 'has a [adjective] [body part]' to describe specific facial or body features in detail.",
      usageNote_bn:
        "নির্দিষ্ট মুখের বা শরীরের বৈশিষ্ট্য বিস্তারিত বর্ণনা করতে 'has a [adjective] [body part]' ব্যবহার করুন।",
      combinableWith: ["B8.2", "B8.4"],
      banglaStructureMap:
        "[PERSON]-র (কর্তা + বিভক্তি) + [ADJECTIVE] (বিশেষণ) + [FACE/BODY PART] (বিশেষ্য) + আছে (ক্রিয়া)",
    },
  ],
};
