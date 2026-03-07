import { PatternCategory } from "@/types/pattern";

export const categoryB10: PatternCategory = {
  id: "B10",
  slug: "expressing-location-position",
  name: "Expressing Location & Position",
  name_bn: "অবস্থান ও অবস্থিতি প্রকাশ করা",
  description:
    "Learn how to describe where things and people are located using prepositions of place and position.",
  description_bn:
    "স্থান ও অবস্থানের পদান্বয়ী অব্যয় ব্যবহার করে জিনিস ও মানুষ কোথায় আছে তা বর্ণনা করতে শিখুন।",
  icon: "📍",
  group: "B",
  groupName: "Describing People, Things & Situations",
  groupName_bn: "মানুষ, জিনিস এবং পরিস্থিতি বর্ণনা",
  difficulty: "beginner",
  patterns: [
    {
      id: "B10.1",
      formula: "[THING] is in/on/at [PLACE]",
      formula_bn: "[জিনিস] [জায়গায়] আছে",
      patternName: "Basic Location with In/On/At",
      patternName_bn: "In/On/At দিয়ে মৌলিক অবস্থান",
      slots: [
        {
          name: "THING",
          description: "The object or person being located",
          description_bn: "যে বস্তু বা ব্যক্তির অবস্থান বলা হচ্ছে",
          acceptedTypes: ["noun", "noun_phrase", "person"],
          examples: ["The book", "My phone", "She"],
        },
        {
          name: "PLACE",
          description: "The location using in, on, or at",
          description_bn: "in, on বা at ব্যবহার করে অবস্থান",
          acceptedTypes: ["place", "noun_phrase"],
          examples: ["the table", "the kitchen", "the bus stop"],
        },
      ],
      examples: [
        {
          en: "The book is on the table.",
          bn: "বইটি টেবিলের উপর আছে।",
          slotValues: { THING: "The book", PLACE: "the table" },
          topicArea: "daily_life",
        },
        {
          en: "My phone is in my bag.",
          bn: "আমার ফোন আমার ব্যাগে আছে।",
          slotValues: { THING: "My phone", PLACE: "my bag" },
          topicArea: "daily_life",
        },
        {
          en: "She is at the bus stop.",
          bn: "সে বাস স্টপে আছে।",
          slotValues: { THING: "She", PLACE: "the bus stop" },
          topicArea: "travel",
        },
        {
          en: "The keys are on the shelf.",
          bn: "চাবিগুলো তাকে আছে।",
          slotValues: { THING: "The keys", PLACE: "the shelf" },
          topicArea: "daily_life",
        },
        {
          en: "The milk is in the fridge.",
          bn: "দুধ ফ্রিজে আছে।",
          slotValues: { THING: "The milk", PLACE: "the fridge" },
          topicArea: "food",
        },
        {
          en: "He is at the office.",
          bn: "সে অফিসে আছে।",
          slotValues: { THING: "He", PLACE: "the office" },
          topicArea: "work",
        },
        {
          en: "The students are in the classroom.",
          bn: "শিক্ষার্থীরা ক্লাসরুমে আছে।",
          slotValues: { THING: "The students", PLACE: "the classroom" },
          topicArea: "education",
        },
        {
          en: "The medicine is in the drawer.",
          bn: "ওষুধ ড্রয়ারে আছে।",
          slotValues: { THING: "The medicine", PLACE: "the drawer" },
          topicArea: "health",
        },
        {
          en: "My wallet is in my pocket.",
          bn: "আমার মানিব্যাগ আমার পকেটে আছে।",
          slotValues: { THING: "My wallet", PLACE: "my pocket" },
          topicArea: "shopping",
        },
        {
          en: "The cat is on the sofa.",
          bn: "বিড়ালটি সোফার উপর আছে।",
          slotValues: { THING: "The cat", PLACE: "the sofa" },
          topicArea: "daily_life",
        },
        {
          en: "My mother is in the kitchen.",
          bn: "আমার মা রান্নাঘরে আছেন।",
          slotValues: { THING: "My mother", PLACE: "the kitchen" },
          topicArea: "relationships",
        },
        {
          en: "The hotel is at the corner of the street.",
          bn: "হোটেলটি রাস্তার কোণে আছে।",
          slotValues: {
            THING: "The hotel",
            PLACE: "the corner of the street",
          },
          topicArea: "travel",
        },
        {
          en: "The files are on my desk.",
          bn: "ফাইলগুলো আমার ডেস্কে আছে।",
          slotValues: { THING: "The files", PLACE: "my desk" },
          topicArea: "work",
        },
        {
          en: "The rice is in the pot.",
          bn: "ভাত পাতিলে আছে।",
          slotValues: { THING: "The rice", PLACE: "the pot" },
          topicArea: "food",
        },
        {
          en: "The children are at school.",
          bn: "বাচ্চারা স্কুলে আছে।",
          slotValues: { THING: "The children", PLACE: "school" },
          topicArea: "education",
        },
      ],
      formality: "casual",
      difficulty: "beginner",
      usageNote:
        "Use 'in' for enclosed spaces, 'on' for surfaces, and 'at' for specific points or locations.",
      usageNote_bn:
        "ঘেরা জায়গার জন্য 'in', পৃষ্ঠের জন্য 'on' এবং নির্দিষ্ট বিন্দু বা অবস্থানের জন্য 'at' ব্যবহার করুন।",
      combinableWith: ["B10.2", "B10.3"],
      banglaStructureMap:
        "[THING] (কর্তা) + [PLACE]-এ/তে (অবস্থান + বিভক্তি) + আছে (ক্রিয়া)",
    },
    {
      id: "B10.2",
      formula: "[THING] is next to [THING]",
      formula_bn: "[জিনিস] [জিনিসের] পাশে আছে",
      patternName: "Position: Next To / Beside",
      patternName_bn: "অবস্থান: পাশে",
      slots: [
        {
          name: "THING",
          description: "The object or place being located",
          description_bn: "যে বস্তু বা জায়গার অবস্থান বলা হচ্ছে",
          acceptedTypes: ["noun", "noun_phrase"],
          examples: ["The bank", "My house", "The pharmacy"],
        },
        {
          name: "THING",
          description: "The reference object or place",
          description_bn: "রেফারেন্স বস্তু বা জায়গা",
          acceptedTypes: ["noun", "noun_phrase"],
          examples: ["the post office", "the school", "the hospital"],
        },
      ],
      examples: [
        {
          en: "The bank is next to the post office.",
          bn: "ব্যাংকটি পোস্ট অফিসের পাশে আছে।",
          slotValues: { THING: "The bank", THING2: "the post office" },
          topicArea: "daily_life",
        },
        {
          en: "My house is next to the school.",
          bn: "আমার বাড়ি স্কুলের পাশে আছে।",
          slotValues: { THING: "My house", THING2: "the school" },
          topicArea: "education",
        },
        {
          en: "The pharmacy is next to the hospital.",
          bn: "ফার্মেসি হাসপাতালের পাশে আছে।",
          slotValues: { THING: "The pharmacy", THING2: "the hospital" },
          topicArea: "health",
        },
        {
          en: "The parking lot is next to the supermarket.",
          bn: "পার্কিং লট সুপারমার্কেটের পাশে আছে।",
          slotValues: {
            THING: "The parking lot",
            THING2: "the supermarket",
          },
          topicArea: "shopping",
        },
        {
          en: "His office is next to the meeting room.",
          bn: "তার অফিস মিটিং রুমের পাশে আছে।",
          slotValues: { THING: "His office", THING2: "the meeting room" },
          topicArea: "work",
        },
        {
          en: "The hotel is next to the train station.",
          bn: "হোটেলটি ট্রেন স্টেশনের পাশে আছে।",
          slotValues: { THING: "The hotel", THING2: "the train station" },
          topicArea: "travel",
        },
        {
          en: "The restaurant is next to the cinema.",
          bn: "রেস্তোরাঁটি সিনেমা হলের পাশে আছে।",
          slotValues: { THING: "The restaurant", THING2: "the cinema" },
          topicArea: "food",
        },
        {
          en: "My chair is next to the window.",
          bn: "আমার চেয়ার জানালার পাশে আছে।",
          slotValues: { THING: "My chair", THING2: "the window" },
          topicArea: "daily_life",
        },
        {
          en: "The library is next to the main building.",
          bn: "লাইব্রেরি মূল ভবনের পাশে আছে।",
          slotValues: { THING: "The library", THING2: "the main building" },
          topicArea: "education",
        },
        {
          en: "The clinic is next to the market.",
          bn: "ক্লিনিক বাজারের পাশে আছে।",
          slotValues: { THING: "The clinic", THING2: "the market" },
          topicArea: "health",
        },
        {
          en: "The shoe shop is next to the clothing store.",
          bn: "জুতার দোকান কাপড়ের দোকানের পাশে আছে।",
          slotValues: {
            THING: "The shoe shop",
            THING2: "the clothing store",
          },
          topicArea: "shopping",
        },
        {
          en: "Her desk is next to mine.",
          bn: "তার ডেস্ক আমার পাশে আছে।",
          slotValues: { THING: "Her desk", THING2: "mine" },
          topicArea: "work",
        },
        {
          en: "The bus stop is next to the park.",
          bn: "বাস স্টপ পার্কের পাশে আছে।",
          slotValues: { THING: "The bus stop", THING2: "the park" },
          topicArea: "travel",
        },
        {
          en: "The bakery is next to the tea stall.",
          bn: "বেকারি চায়ের দোকানের পাশে আছে।",
          slotValues: { THING: "The bakery", THING2: "the tea stall" },
          topicArea: "food",
        },
        {
          en: "My grandmother's house is next to the mosque.",
          bn: "আমার দাদির বাড়ি মসজিদের পাশে আছে।",
          slotValues: {
            THING: "My grandmother's house",
            THING2: "the mosque",
          },
          topicArea: "relationships",
        },
      ],
      formality: "casual",
      difficulty: "beginner",
      usageNote:
        "'Next to' means immediately beside something. 'Beside' has the same meaning. Both are very common in giving directions.",
      usageNote_bn:
        "'Next to' মানে কিছুর ঠিক পাশে। 'Beside'-এর একই অর্থ। দিকনির্দেশনা দেওয়ায় উভয়ই খুব সাধারণ।",
      combinableWith: ["B10.1", "B10.3"],
      banglaStructureMap:
        "[THING] (কর্তা) + [THING]-র পাশে (অবস্থান + বিভক্তি) + আছে (ক্রিয়া)",
    },
    {
      id: "B10.3",
      formula: "[THING] is behind/in front of [THING]",
      formula_bn: "[জিনিস] [জিনিসের] পিছনে/সামনে আছে",
      patternName: "Position: Behind / In Front Of",
      patternName_bn: "অবস্থান: পিছনে / সামনে",
      slots: [
        {
          name: "THING",
          description: "The object or place being located",
          description_bn: "যে বস্তু বা জায়গার অবস্থান বলা হচ্ছে",
          acceptedTypes: ["noun", "noun_phrase"],
          examples: ["The garden", "The car", "The shop"],
        },
        {
          name: "THING",
          description: "The reference object or place",
          description_bn: "রেফারেন্স বস্তু বা জায়গা",
          acceptedTypes: ["noun", "noun_phrase"],
          examples: ["the house", "the building", "the school"],
        },
      ],
      examples: [
        {
          en: "The garden is behind the house.",
          bn: "বাগানটি বাড়ির পিছনে আছে।",
          slotValues: { THING: "The garden", THING2: "the house" },
          topicArea: "daily_life",
        },
        {
          en: "The car is in front of the building.",
          bn: "গাড়িটি ভবনের সামনে আছে।",
          slotValues: { THING: "The car", THING2: "the building" },
          topicArea: "daily_life",
        },
        {
          en: "The playground is behind the school.",
          bn: "খেলার মাঠ স্কুলের পিছনে আছে।",
          slotValues: { THING: "The playground", THING2: "the school" },
          topicArea: "education",
        },
        {
          en: "The reception is in front of the hospital.",
          bn: "রিসেপশন হাসপাতালের সামনে আছে।",
          slotValues: { THING: "The reception", THING2: "the hospital" },
          topicArea: "health",
        },
        {
          en: "The warehouse is behind the factory.",
          bn: "গুদাম কারখানার পিছনে আছে।",
          slotValues: { THING: "The warehouse", THING2: "the factory" },
          topicArea: "work",
        },
        {
          en: "The taxi is in front of the hotel.",
          bn: "ট্যাক্সি হোটেলের সামনে আছে।",
          slotValues: { THING: "The taxi", THING2: "the hotel" },
          topicArea: "travel",
        },
        {
          en: "The kitchen is behind the dining room.",
          bn: "রান্নাঘর ডাইনিং রুমের পিছনে আছে।",
          slotValues: { THING: "The kitchen", THING2: "the dining room" },
          topicArea: "food",
        },
        {
          en: "The ATM is in front of the bank.",
          bn: "এটিএম ব্যাংকের সামনে আছে।",
          slotValues: { THING: "The ATM", THING2: "the bank" },
          topicArea: "shopping",
        },
        {
          en: "The tree is behind the wall.",
          bn: "গাছটি দেয়ালের পিছনে আছে।",
          slotValues: { THING: "The tree", THING2: "the wall" },
          topicArea: "daily_life",
        },
        {
          en: "My brother is standing in front of the gate.",
          bn: "আমার ভাই গেটের সামনে দাঁড়িয়ে আছে।",
          slotValues: { THING: "My brother", THING2: "the gate" },
          topicArea: "relationships",
        },
        {
          en: "The store room is behind the office.",
          bn: "স্টোর রুম অফিসের পিছনে আছে।",
          slotValues: { THING: "The store room", THING2: "the office" },
          topicArea: "work",
        },
        {
          en: "The parking area is behind the mall.",
          bn: "পার্কিং এরিয়া মলের পিছনে আছে।",
          slotValues: { THING: "The parking area", THING2: "the mall" },
          topicArea: "shopping",
        },
        {
          en: "The lab is behind the main hall.",
          bn: "ল্যাব প্রধান হলের পিছনে আছে।",
          slotValues: { THING: "The lab", THING2: "the main hall" },
          topicArea: "education",
        },
        {
          en: "The ambulance is in front of the emergency room.",
          bn: "অ্যাম্বুলেন্স ইমার্জেন্সি রুমের সামনে আছে।",
          slotValues: {
            THING: "The ambulance",
            THING2: "the emergency room",
          },
          topicArea: "health",
        },
        {
          en: "The fountain is in front of the museum.",
          bn: "ঝর্ণা জাদুঘরের সামনে আছে।",
          slotValues: { THING: "The fountain", THING2: "the museum" },
          topicArea: "travel",
        },
      ],
      formality: "casual",
      difficulty: "beginner",
      usageNote:
        "'Behind' means at the back of something. 'In front of' means facing the front side. Both are essential for giving directions.",
      usageNote_bn:
        "'Behind' মানে কিছুর পিছনে। 'In front of' মানে সামনের দিকে। দিকনির্দেশনা দেওয়ার জন্য উভয়ই অপরিহার্য।",
      combinableWith: ["B10.1", "B10.2"],
      banglaStructureMap:
        "[THING] (কর্তা) + [THING]-র পিছনে/সামনে (অবস্থান + বিভক্তি) + আছে (ক্রিয়া)",
    },
    {
      id: "B10.4",
      formula: "[THING] is between [THING] and [THING]",
      formula_bn: "[জিনিস] [জিনিস] এবং [জিনিসের] মাঝে আছে",
      patternName: "Position: Between Two Things",
      patternName_bn: "অবস্থান: দুটি জিনিসের মাঝে",
      slots: [
        {
          name: "THING",
          description: "The object or place in the middle",
          description_bn: "মাঝখানের বস্তু বা জায়গা",
          acceptedTypes: ["noun", "noun_phrase"],
          examples: ["The park", "My seat", "The shop"],
        },
        {
          name: "THING",
          description: "First reference point",
          description_bn: "প্রথম রেফারেন্স পয়েন্ট",
          acceptedTypes: ["noun", "noun_phrase"],
          examples: ["the bank", "Ali", "the mosque"],
        },
        {
          name: "THING",
          description: "Second reference point",
          description_bn: "দ্বিতীয় রেফারেন্স পয়েন্ট",
          acceptedTypes: ["noun", "noun_phrase"],
          examples: ["the school", "Rahim", "the market"],
        },
      ],
      examples: [
        {
          en: "The park is between the bank and the school.",
          bn: "পার্কটি ব্যাংক এবং স্কুলের মাঝে আছে।",
          slotValues: {
            THING: "The park",
            THING2: "the bank",
            THING3: "the school",
          },
          topicArea: "daily_life",
        },
        {
          en: "My seat is between Ali and Rahim.",
          bn: "আমার সিট আলি এবং রহিমের মাঝে আছে।",
          slotValues: {
            THING: "My seat",
            THING2: "Ali",
            THING3: "Rahim",
          },
          topicArea: "education",
        },
        {
          en: "The pharmacy is between the hospital and the market.",
          bn: "ফার্মেসি হাসপাতাল এবং বাজারের মাঝে আছে।",
          slotValues: {
            THING: "The pharmacy",
            THING2: "the hospital",
            THING3: "the market",
          },
          topicArea: "health",
        },
        {
          en: "The coffee shop is between the bookstore and the bank.",
          bn: "কফি শপ বইয়ের দোকান এবং ব্যাংকের মাঝে আছে।",
          slotValues: {
            THING: "The coffee shop",
            THING2: "the bookstore",
            THING3: "the bank",
          },
          topicArea: "food",
        },
        {
          en: "My office is between the elevator and the stairs.",
          bn: "আমার অফিস লিফট এবং সিঁড়ির মাঝে আছে।",
          slotValues: {
            THING: "My office",
            THING2: "the elevator",
            THING3: "the stairs",
          },
          topicArea: "work",
        },
        {
          en: "The museum is between the park and the river.",
          bn: "জাদুঘর পার্ক এবং নদীর মাঝে আছে।",
          slotValues: {
            THING: "The museum",
            THING2: "the park",
            THING3: "the river",
          },
          topicArea: "travel",
        },
        {
          en: "The toy shop is between the shoe shop and the sweet shop.",
          bn: "খেলনার দোকান জুতার দোকান এবং মিষ্টির দোকানের মাঝে আছে।",
          slotValues: {
            THING: "The toy shop",
            THING2: "the shoe shop",
            THING3: "the sweet shop",
          },
          topicArea: "shopping",
        },
        {
          en: "The garden is between the two buildings.",
          bn: "বাগানটি দুটি ভবনের মাঝে আছে।",
          slotValues: {
            THING: "The garden",
            THING2: "the two",
            THING3: "buildings",
          },
          topicArea: "daily_life",
        },
        {
          en: "The teacher's desk is between the board and the first row.",
          bn: "শিক্ষকের ডেস্ক বোর্ড এবং প্রথম সারির মাঝে আছে।",
          slotValues: {
            THING: "The teacher's desk",
            THING2: "the board",
            THING3: "the first row",
          },
          topicArea: "education",
        },
        {
          en: "The waiting room is between the doctor's chamber and the lab.",
          bn: "ওয়েটিং রুম ডাক্তারের চেম্বার এবং ল্যাবের মাঝে আছে।",
          slotValues: {
            THING: "The waiting room",
            THING2: "the doctor's chamber",
            THING3: "the lab",
          },
          topicArea: "health",
        },
        {
          en: "The canteen is between the office and the warehouse.",
          bn: "ক্যান্টিন অফিস এবং গুদামের মাঝে আছে।",
          slotValues: {
            THING: "The canteen",
            THING2: "the office",
            THING3: "the warehouse",
          },
          topicArea: "work",
        },
        {
          en: "My house is between the river and the road.",
          bn: "আমার বাড়ি নদী এবং রাস্তার মাঝে আছে।",
          slotValues: {
            THING: "My house",
            THING2: "the river",
            THING3: "the road",
          },
          topicArea: "daily_life",
        },
        {
          en: "The airport is between the city and the mountains.",
          bn: "বিমানবন্দর শহর এবং পাহাড়ের মাঝে আছে।",
          slotValues: {
            THING: "The airport",
            THING2: "the city",
            THING3: "the mountains",
          },
          topicArea: "travel",
        },
        {
          en: "The fridge is between the counter and the wall.",
          bn: "ফ্রিজ কাউন্টার এবং দেয়ালের মাঝে আছে।",
          slotValues: {
            THING: "The fridge",
            THING2: "the counter",
            THING3: "the wall",
          },
          topicArea: "food",
        },
        {
          en: "The trial room is between the billing counter and the exit.",
          bn: "ট্রায়াল রুম বিলিং কাউন্টার এবং বের হওয়ার দরজার মাঝে আছে।",
          slotValues: {
            THING: "The trial room",
            THING2: "the billing counter",
            THING3: "the exit",
          },
          topicArea: "shopping",
        },
      ],
      formality: "casual",
      difficulty: "beginner",
      usageNote:
        "'Between X and Y' places something in the middle of two reference points. Always use 'and' to connect the two things.",
      usageNote_bn:
        "'Between X and Y' কিছুকে দুটি রেফারেন্স পয়েন্টের মাঝে রাখে। দুটি জিনিস সংযুক্ত করতে সবসময় 'and' ব্যবহার করুন।",
      combinableWith: ["B10.1", "B10.5"],
      banglaStructureMap:
        "[THING] (কর্তা) + [THING] এবং [THING]-র মাঝে (অবস্থান) + আছে (ক্রিয়া)",
    },
    {
      id: "B10.5",
      formula: "There is [THING] [POSITION] [PLACE]",
      formula_bn: "[জায়গায়] [অবস্থানে] [জিনিস] আছে",
      patternName: "Existence at a Location",
      patternName_bn: "অবস্থানে অস্তিত্ব",
      slots: [
        {
          name: "THING",
          description: "The object or entity that exists at the location",
          description_bn: "যে বস্তু বা সত্তা অবস্থানে বিদ্যমান",
          acceptedTypes: ["noun", "noun_phrase"],
          examples: ["a park", "a pharmacy", "a nice cafe"],
        },
        {
          name: "POSITION",
          description: "Preposition of place (near, across from, above, below, etc.)",
          description_bn: "স্থানের পদান্বয়ী অব্যয় (কাছে, পাশে, উপরে, নিচে ইত্যাদি)",
          acceptedTypes: ["adverb"],
          examples: ["near", "across from", "above"],
        },
        {
          name: "PLACE",
          description: "The reference location",
          description_bn: "রেফারেন্স অবস্থান",
          acceptedTypes: ["place", "noun_phrase"],
          examples: ["our house", "the station", "the shop"],
        },
      ],
      examples: [
        {
          en: "There is a park near our house.",
          bn: "আমাদের বাড়ির কাছে একটি পার্ক আছে।",
          slotValues: {
            THING: "a park",
            POSITION: "near",
            PLACE: "our house",
          },
          topicArea: "daily_life",
        },
        {
          en: "There is a pharmacy across from the hospital.",
          bn: "হাসপাতালের ওপারে একটি ফার্মেসি আছে।",
          slotValues: {
            THING: "a pharmacy",
            POSITION: "across from",
            PLACE: "the hospital",
          },
          topicArea: "health",
        },
        {
          en: "There is a nice cafe near the university.",
          bn: "বিশ্ববিদ্যালয়ের কাছে একটি সুন্দর ক্যাফে আছে।",
          slotValues: {
            THING: "a nice cafe",
            POSITION: "near",
            PLACE: "the university",
          },
          topicArea: "education",
        },
        {
          en: "There is a clock above the door.",
          bn: "দরজার উপরে একটি ঘড়ি আছে।",
          slotValues: {
            THING: "a clock",
            POSITION: "above",
            PLACE: "the door",
          },
          topicArea: "daily_life",
        },
        {
          en: "There is a restaurant below our office.",
          bn: "আমাদের অফিসের নিচে একটি রেস্তোরাঁ আছে।",
          slotValues: {
            THING: "a restaurant",
            POSITION: "below",
            PLACE: "our office",
          },
          topicArea: "work",
        },
        {
          en: "There is a bus stop opposite the mosque.",
          bn: "মসজিদের বিপরীতে একটি বাস স্টপ আছে।",
          slotValues: {
            THING: "a bus stop",
            POSITION: "opposite",
            PLACE: "the mosque",
          },
          topicArea: "travel",
        },
        {
          en: "There is a sweet shop near the station.",
          bn: "স্টেশনের কাছে একটি মিষ্টির দোকান আছে।",
          slotValues: {
            THING: "a sweet shop",
            POSITION: "near",
            PLACE: "the station",
          },
          topicArea: "food",
        },
        {
          en: "There is a new mall opposite the park.",
          bn: "পার্কের বিপরীতে একটি নতুন মল আছে।",
          slotValues: {
            THING: "a new mall",
            POSITION: "opposite",
            PLACE: "the park",
          },
          topicArea: "shopping",
        },
        {
          en: "There is a mirror above the sink.",
          bn: "সিঙ্কের উপরে একটি আয়না আছে।",
          slotValues: {
            THING: "a mirror",
            POSITION: "above",
            PLACE: "the sink",
          },
          topicArea: "daily_life",
        },
        {
          en: "There is a temple near the river.",
          bn: "নদীর কাছে একটি মন্দির আছে।",
          slotValues: {
            THING: "a temple",
            POSITION: "near",
            PLACE: "the river",
          },
          topicArea: "travel",
        },
        {
          en: "There is a storage room below the stairs.",
          bn: "সিঁড়ির নিচে একটি স্টোরেজ রুম আছে।",
          slotValues: {
            THING: "a storage room",
            POSITION: "below",
            PLACE: "the stairs",
          },
          topicArea: "daily_life",
        },
        {
          en: "There is a library near the dormitory.",
          bn: "ছাত্রাবাসের কাছে একটি লাইব্রেরি আছে।",
          slotValues: {
            THING: "a library",
            POSITION: "near",
            PLACE: "the dormitory",
          },
          topicArea: "education",
        },
        {
          en: "There is a water cooler near the entrance.",
          bn: "প্রবেশদ্বারের কাছে একটি ওয়াটার কুলার আছে।",
          slotValues: {
            THING: "a water cooler",
            POSITION: "near",
            PLACE: "the entrance",
          },
          topicArea: "work",
        },
        {
          en: "There is a fruit stall opposite the school gate.",
          bn: "স্কুলের গেটের বিপরীতে একটি ফলের দোকান আছে।",
          slotValues: {
            THING: "a fruit stall",
            POSITION: "opposite",
            PLACE: "the school gate",
          },
          topicArea: "food",
        },
        {
          en: "There is a clinic near the bus stand.",
          bn: "বাস স্ট্যান্ডের কাছে একটি ক্লিনিক আছে।",
          slotValues: {
            THING: "a clinic",
            POSITION: "near",
            PLACE: "the bus stand",
          },
          topicArea: "health",
        },
      ],
      formality: "casual",
      difficulty: "beginner",
      usageNote:
        "'There is/are' announces the existence of something at a location. Use 'There is' for singular and 'There are' for plural.",
      usageNote_bn:
        "'There is/are' কোনো অবস্থানে কিছুর অস্তিত্ব ঘোষণা করে। একবচনের জন্য 'There is' এবং বহুবচনের জন্য 'There are' ব্যবহার করুন।",
      combinableWith: ["B10.1", "B10.4"],
      banglaStructureMap:
        "[PLACE]-র [POSITION] (অবস্থান) + [THING] (কর্তা) + আছে (ক্রিয়া)",
    },
  ],
};
