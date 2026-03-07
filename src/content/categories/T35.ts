import { PatternCategory } from "@/types/pattern";

export const categoryT35: PatternCategory = {
  id: "T35",
  slug: "driving-traffic",
  name: "Driving & Traffic",
  name_bn: "গাড়ি চালানো ও ট্রাফিক",
  description:
    "Essential patterns for driving, traffic situations, and road-related conversations.",
  description_bn:
    "গাড়ি চালানো, ট্রাফিক পরিস্থিতি এবং রাস্তা সম্পর্কিত কথোপকথনের অপরিহার্য প্যাটার্ন।",
  icon: "🚗",
  group: "T",
  groupName: "Situational Patterns",
  groupName_bn: "পরিস্থিতিগত প্যাটার্ন",
  difficulty: "beginner",
  patterns: [
    {
      id: "T35.1",
      formula: "[TURN/GO] [DIRECTION] at the [LANDMARK]",
      formula_bn: "[ল্যান্ডমার্ক]-এর কাছে [দিক]-এ [ঘুরুন/যান]",
      patternName: "Driving Directions",
      patternName_bn: "গাড়ি চালানোর দিকনির্দেশনা",
      slots: [
        {
          name: "TURN/GO",
          description: "A direction verb like turn, go, take, or make",
          description_bn: "একটি দিক-নির্দেশক ক্রিয়া যেমন ঘোরা, যাওয়া, নেওয়া",
          acceptedTypes: ["verb"],
          examples: ["turn", "go", "take"],
        },
        {
          name: "DIRECTION",
          description: "A direction like left, right, straight, or a specific route",
          description_bn: "একটি দিক যেমন বামে, ডানে, সোজা, বা নির্দিষ্ট রুট",
          acceptedTypes: ["adverb", "direction"],
          examples: ["left", "right", "straight"],
        },
        {
          name: "LANDMARK",
          description: "A reference point like traffic light, intersection, or building",
          description_bn:
            "একটি রেফারেন্স পয়েন্ট যেমন ট্রাফিক লাইট, মোড়, বা ভবন",
          acceptedTypes: ["noun", "noun_phrase"],
          examples: ["traffic light", "intersection", "mosque"],
        },
      ],
      examples: [
        {
          en: "Turn left at the traffic light.",
          bn: "ট্রাফিক লাইটে বামে ঘুরুন।",
          slotValues: {
            "TURN/GO": "turn",
            DIRECTION: "left",
            LANDMARK: "traffic light",
          },
          topicArea: "travel",
        },
        {
          en: "Go straight for two blocks.",
          bn: "দুই ব্লক সোজা যান।",
          slotValues: {
            "TURN/GO": "go",
            DIRECTION: "straight",
            LANDMARK: "two blocks",
          },
          topicArea: "travel",
        },
        {
          en: "Take the highway towards the airport.",
          bn: "বিমানবন্দরের দিকে হাইওয়ে ধরুন।",
          slotValues: {
            "TURN/GO": "take",
            DIRECTION: "towards the airport",
            LANDMARK: "highway",
          },
          topicArea: "travel",
        },
        {
          en: "Make a U-turn at the next intersection.",
          bn: "পরের মোড়ে ইউ-টার্ন নিন।",
          slotValues: {
            "TURN/GO": "make",
            DIRECTION: "U-turn",
            LANDMARK: "next intersection",
          },
          topicArea: "travel",
        },
        {
          en: "Turn right after the bridge.",
          bn: "ব্রিজের পরে ডানে ঘুরুন।",
          slotValues: {
            "TURN/GO": "turn",
            DIRECTION: "right",
            LANDMARK: "bridge",
          },
          topicArea: "travel",
        },
        {
          en: "Keep going straight until you see the mosque.",
          bn: "মসজিদ না দেখা পর্যন্ত সোজা যেতে থাকুন।",
          slotValues: {
            "TURN/GO": "keep going",
            DIRECTION: "straight",
            LANDMARK: "mosque",
          },
          topicArea: "travel",
        },
        {
          en: "Take the second exit at the roundabout.",
          bn: "রাউন্ডঅ্যাবাউটে দ্বিতীয় বের হওয়ার রাস্তা নিন।",
          slotValues: {
            "TURN/GO": "take",
            DIRECTION: "second exit",
            LANDMARK: "roundabout",
          },
          topicArea: "travel",
        },
        {
          en: "Go past the school and turn left.",
          bn: "স্কুলটা পার হয়ে বামে ঘুরুন।",
          slotValues: {
            "TURN/GO": "go",
            DIRECTION: "past and left",
            LANDMARK: "school",
          },
          topicArea: "travel",
        },
        {
          en: "Follow the signs to the city center.",
          bn: "শহরের কেন্দ্রে যাওয়ার সাইনবোর্ড অনুসরণ করুন।",
          slotValues: {
            "TURN/GO": "follow",
            DIRECTION: "to the city center",
            LANDMARK: "signs",
          },
          topicArea: "travel",
        },
        {
          en: "Stay in the left lane for the next turn.",
          bn: "পরের মোড়ের জন্য বাম লেনে থাকুন।",
          slotValues: {
            "TURN/GO": "stay",
            DIRECTION: "left lane",
            LANDMARK: "next turn",
          },
          topicArea: "travel",
        },
        {
          en: "Merge onto the expressway here.",
          bn: "এখানে এক্সপ্রেসওয়েতে মিশে যান।",
          slotValues: {
            "TURN/GO": "merge",
            DIRECTION: "onto",
            LANDMARK: "expressway",
          },
          topicArea: "travel",
        },
        {
          en: "Take a left at the gas station.",
          bn: "গ্যাস স্টেশনে বামে ঘুরুন।",
          slotValues: {
            "TURN/GO": "take",
            DIRECTION: "left",
            LANDMARK: "gas station",
          },
          topicArea: "travel",
        },
        {
          en: "The destination is on your right side.",
          bn: "গন্তব্য আপনার ডান দিকে।",
          slotValues: {
            "TURN/GO": "is",
            DIRECTION: "right side",
            LANDMARK: "destination",
          },
          topicArea: "travel",
        },
        {
          en: "Cross the intersection and go straight.",
          bn: "মোড় পার করে সোজা যান।",
          slotValues: {
            "TURN/GO": "cross and go",
            DIRECTION: "straight",
            LANDMARK: "intersection",
          },
          topicArea: "travel",
        },
        {
          en: "You'll see the hospital on the left after the market.",
          bn: "বাজারের পরে বামে হাসপাতাল দেখতে পাবেন।",
          slotValues: {
            "TURN/GO": "see",
            DIRECTION: "left",
            LANDMARK: "market",
          },
          topicArea: "travel",
        },
      ],
      formality: "casual",
      difficulty: "beginner",
      usageNote:
        "These patterns are essential for giving and understanding driving directions. They are commonly used in GPS navigation, asking locals for directions, and ride-sharing situations.",
      usageNote_bn:
        "গাড়ি চালানোর দিকনির্দেশনা দেওয়া ও বোঝার জন্য এই প্যাটার্নগুলো অপরিহার্য। জিপিএস নেভিগেশন, স্থানীয়দের কাছে দিক জিজ্ঞেস করা এবং রাইড-শেয়ারিং পরিস্থিতিতে এগুলো সাধারণত ব্যবহৃত হয়।",
      combinableWith: ["T35.2"],
      banglaStructureMap:
        "[ল্যান্ডমার্ক]-এর কাছে (Landmark + Postposition) + [দিক]-এ (Direction + Postposition) + [ঘুরুন/যান] (Verb + Imperative)",
    },
    {
      id: "T35.2",
      formula: "The traffic is [CONDITION] because of [REASON]",
      formula_bn: "[কারণ]-এর জন্য ট্রাফিক [অবস্থা]",
      patternName: "Traffic Situations",
      patternName_bn: "ট্রাফিক পরিস্থিতি",
      slots: [
        {
          name: "CONDITION",
          description:
            "A word or phrase describing the traffic situation",
          description_bn:
            "ট্রাফিকের অবস্থা বর্ণনাকারী একটি শব্দ বা বাক্যাংশ",
          acceptedTypes: ["adjective", "adjective_phrase"],
          examples: ["terrible", "heavy", "moving slowly"],
        },
        {
          name: "REASON",
          description: "The cause of the traffic condition",
          description_bn: "ট্রাফিক অবস্থার কারণ",
          acceptedTypes: ["noun", "noun_phrase"],
          examples: ["an accident", "road construction", "rush hour"],
        },
      ],
      examples: [
        {
          en: "The traffic is terrible today.",
          bn: "আজ ট্রাফিক ভয়াবহ।",
          slotValues: { CONDITION: "terrible" },
          topicArea: "travel",
        },
        {
          en: "There's a traffic jam on the highway.",
          bn: "হাইওয়েতে ট্রাফিক জ্যাম আছে।",
          slotValues: { CONDITION: "jam", REASON: "on the highway" },
          topicArea: "travel",
        },
        {
          en: "The road is blocked because of an accident.",
          bn: "দুর্ঘটনার কারণে রাস্তা বন্ধ।",
          slotValues: { CONDITION: "blocked", REASON: "an accident" },
          topicArea: "travel",
        },
        {
          en: "I'm stuck in traffic.",
          bn: "আমি ট্রাফিকে আটকে আছি।",
          slotValues: { CONDITION: "stuck" },
          topicArea: "travel",
        },
        {
          en: "The traffic is heavy because of rush hour.",
          bn: "রাশ আওয়ারের কারণে ট্রাফিক ভারী।",
          slotValues: { CONDITION: "heavy", REASON: "rush hour" },
          topicArea: "travel",
        },
        {
          en: "Traffic is moving very slowly today.",
          bn: "আজ ট্রাফিক খুব ধীরে চলছে।",
          slotValues: { CONDITION: "moving very slowly" },
          topicArea: "travel",
        },
        {
          en: "The traffic is backed up for miles.",
          bn: "মাইলের পর মাইল ট্রাফিক জমে আছে।",
          slotValues: { CONDITION: "backed up for miles" },
          topicArea: "travel",
        },
        {
          en: "There's road construction ahead, expect delays.",
          bn: "সামনে রাস্তার নির্মাণকাজ চলছে, দেরি হতে পারে।",
          slotValues: { CONDITION: "delays", REASON: "road construction" },
          topicArea: "travel",
        },
        {
          en: "The traffic signal is not working.",
          bn: "ট্রাফিক সিগন্যাল কাজ করছে না।",
          slotValues: { CONDITION: "not working" },
          topicArea: "travel",
        },
        {
          en: "We should take an alternate route to avoid traffic.",
          bn: "ট্রাফিক এড়াতে আমাদের বিকল্প রাস্তা নেওয়া উচিত।",
          slotValues: { CONDITION: "heavy" },
          topicArea: "travel",
        },
        {
          en: "The traffic is clear now, we can go faster.",
          bn: "এখন ট্রাফিক পরিষ্কার, আমরা দ্রুত যেতে পারি।",
          slotValues: { CONDITION: "clear" },
          topicArea: "travel",
        },
        {
          en: "I'll be late because of traffic.",
          bn: "ট্রাফিকের কারণে আমার দেরি হবে।",
          slotValues: { CONDITION: "late", REASON: "traffic" },
          topicArea: "work",
        },
        {
          en: "The traffic gets worse during the rainy season.",
          bn: "বর্ষাকালে ট্রাফিক আরো খারাপ হয়।",
          slotValues: { CONDITION: "worse", REASON: "rainy season" },
          topicArea: "travel",
        },
        {
          en: "There's a detour because the road is under repair.",
          bn: "রাস্তা মেরামতের কাজ চলায় ঘুরপথ আছে।",
          slotValues: {
            CONDITION: "detour",
            REASON: "road is under repair",
          },
          topicArea: "travel",
        },
        {
          en: "The intersection is always congested during office hours.",
          bn: "অফিসের সময় এই মোড়টা সবসময় ভিড় থাকে।",
          slotValues: { CONDITION: "congested", REASON: "office hours" },
          topicArea: "travel",
        },
      ],
      formality: "casual",
      difficulty: "beginner",
      usageNote:
        "These patterns help describe traffic conditions and are useful for explaining delays, planning routes, or discussing commute experiences.",
      usageNote_bn:
        "এই প্যাটার্নগুলো ট্রাফিক অবস্থা বর্ণনা করতে সাহায্য করে এবং বিলম্ব ব্যাখ্যা করা, রুট পরিকল্পনা করা বা যাতায়াতের অভিজ্ঞতা আলোচনা করতে কাজে আসে।",
      combinableWith: ["T35.1"],
      banglaStructureMap:
        "[কারণ]-এর জন্য (Reason + Postposition) + ট্রাফিক (Subject) + [অবস্থা] (Adjective/Condition)",
    },
    {
      id: "T35.3",
      formula: "My car [PROBLEM] on [LOCATION]",
      formula_bn: "আমার গাড়ি [স্থান]-এ [সমস্যা]",
      patternName: "Accident & Breakdown",
      patternName_bn: "দুর্ঘটনা ও গাড়ি বিকল",
      slots: [
        {
          name: "PROBLEM",
          description:
            "A car problem or incident such as breakdown, flat tire, or accident",
          description_bn:
            "গাড়ির সমস্যা বা ঘটনা যেমন বিকল হওয়া, টায়ার পাংচার, বা দুর্ঘটনা",
          acceptedTypes: ["verb_phrase"],
          examples: ["broke down", "had a flat tire", "won't start"],
        },
        {
          name: "LOCATION",
          description: "The place where the car problem occurred",
          description_bn: "যেখানে গাড়ির সমস্যা হয়েছে সেই স্থান",
          acceptedTypes: ["noun_phrase", "location"],
          examples: ["the highway", "Main Street", "the parking lot"],
        },
      ],
      examples: [
        {
          en: "My car broke down on the highway.",
          bn: "আমার গাড়ি হাইওয়েতে বিকল হয়ে গেছে।",
          slotValues: { PROBLEM: "broke down", LOCATION: "the highway" },
          topicArea: "travel",
        },
        {
          en: "I had a flat tire on my way to work.",
          bn: "কাজে যাওয়ার পথে আমার টায়ার পাংচার হয়ে গেছে।",
          slotValues: {
            PROBLEM: "had a flat tire",
            LOCATION: "my way to work",
          },
          topicArea: "travel",
        },
        {
          en: "There was an accident ahead on the main road.",
          bn: "মূল রাস্তায় সামনে একটা দুর্ঘটনা ঘটেছে।",
          slotValues: {
            PROBLEM: "was an accident",
            LOCATION: "the main road",
          },
          topicArea: "travel",
        },
        {
          en: "My car won't start this morning.",
          bn: "আমার গাড়ি আজ সকালে স্টার্ট হচ্ছে না।",
          slotValues: { PROBLEM: "won't start" },
          topicArea: "daily_life",
        },
        {
          en: "I ran out of gas on the expressway.",
          bn: "এক্সপ্রেসওয়েতে আমার গাড়ির তেল ফুরিয়ে গেছে।",
          slotValues: {
            PROBLEM: "ran out of gas",
            LOCATION: "the expressway",
          },
          topicArea: "travel",
        },
        {
          en: "I need to call a tow truck.",
          bn: "আমাকে একটা টো ট্রাক ডাকতে হবে।",
          slotValues: { PROBLEM: "need a tow truck" },
          topicArea: "travel",
        },
        {
          en: "My engine is overheating.",
          bn: "আমার গাড়ির ইঞ্জিন অতিরিক্ত গরম হয়ে যাচ্ছে।",
          slotValues: { PROBLEM: "engine is overheating" },
          topicArea: "travel",
        },
        {
          en: "Someone hit my car in the parking lot.",
          bn: "পার্কিং লটে কেউ আমার গাড়িতে ধাক্কা দিয়েছে।",
          slotValues: {
            PROBLEM: "someone hit my car",
            LOCATION: "the parking lot",
          },
          topicArea: "travel",
        },
        {
          en: "The brakes are not working properly.",
          bn: "ব্রেক ঠিকমতো কাজ করছে না।",
          slotValues: { PROBLEM: "brakes are not working properly" },
          topicArea: "travel",
        },
        {
          en: "I got a scratch on my car door.",
          bn: "আমার গাড়ির দরজায় আঁচড় লেগেছে।",
          slotValues: { PROBLEM: "got a scratch", LOCATION: "car door" },
          topicArea: "daily_life",
        },
        {
          en: "My battery is dead, I need a jump start.",
          bn: "আমার ব্যাটারি মরে গেছে, জাম্প স্টার্ট দরকার।",
          slotValues: { PROBLEM: "battery is dead" },
          topicArea: "daily_life",
        },
        {
          en: "I was involved in a minor accident.",
          bn: "আমি একটি ছোট দুর্ঘটনায় পড়েছি।",
          slotValues: { PROBLEM: "was involved in a minor accident" },
          topicArea: "travel",
        },
        {
          en: "The check engine light came on.",
          bn: "চেক ইঞ্জিন লাইট জ্বলে উঠেছে।",
          slotValues: { PROBLEM: "check engine light came on" },
          topicArea: "travel",
        },
        {
          en: "I need roadside assistance immediately.",
          bn: "আমার এখনই রোডসাইড সাহায্য দরকার।",
          slotValues: { PROBLEM: "need roadside assistance" },
          topicArea: "travel",
        },
        {
          en: "My windshield got cracked on the highway.",
          bn: "হাইওয়েতে আমার উইন্ডশিল্ড ফেটে গেছে।",
          slotValues: {
            PROBLEM: "windshield got cracked",
            LOCATION: "the highway",
          },
          topicArea: "travel",
        },
      ],
      formality: "casual",
      difficulty: "beginner",
      usageNote:
        "These patterns are critical for emergency situations involving vehicles. Knowing how to describe car problems clearly can help when calling for assistance or talking to mechanics.",
      usageNote_bn:
        "গাড়ি সংক্রান্ত জরুরি পরিস্থিতিতে এই প্যাটার্নগুলো অত্যন্ত গুরুত্বপূর্ণ। গাড়ির সমস্যা স্পষ্টভাবে বর্ণনা করতে পারলে সাহায্য চাওয়ার সময় বা মেকানিকের সাথে কথা বলার সময় কাজে আসে।",
      combinableWith: ["T35.2"],
      banglaStructureMap:
        "আমার গাড়ি (Subject + Possessive) + [স্থান]-এ (Location + Postposition) + [সমস্যা] (Problem/Verb phrase)",
    },
    {
      id: "T35.4",
      formula: "Is there [PARKING] near [PLACE]?",
      formula_bn: "[জায়গা]-এর কাছে কি [পার্কিং] আছে?",
      patternName: "Parking",
      patternName_bn: "পার্কিং",
      slots: [
        {
          name: "PARKING",
          description:
            "A type of parking such as parking lot, free parking, or street parking",
          description_bn:
            "পার্কিংয়ের ধরন যেমন পার্কিং লট, ফ্রি পার্কিং, বা রাস্তার পার্কিং",
          acceptedTypes: ["noun", "noun_phrase"],
          examples: ["parking", "a parking lot", "free parking"],
        },
        {
          name: "PLACE",
          description: "A location or destination you are asking about",
          description_bn:
            "একটি স্থান বা গন্তব্য যার সম্পর্কে আপনি জিজ্ঞেস করছেন",
          acceptedTypes: ["noun", "noun_phrase", "location"],
          examples: ["the mall", "the office", "the restaurant"],
        },
      ],
      examples: [
        {
          en: "Is there parking near here?",
          bn: "এখানে কাছে কি পার্কিং আছে?",
          slotValues: { PARKING: "parking", PLACE: "here" },
          topicArea: "travel",
        },
        {
          en: "Where can I park my car?",
          bn: "আমি কোথায় গাড়ি পার্ক করতে পারি?",
          slotValues: { PARKING: "park my car" },
          topicArea: "travel",
        },
        {
          en: "The parking lot is full.",
          bn: "পার্কিং লট ভর্তি।",
          slotValues: { PARKING: "parking lot" },
          topicArea: "travel",
        },
        {
          en: "This is a no-parking zone.",
          bn: "এটি নো-পার্কিং জোন।",
          slotValues: { PARKING: "no-parking zone" },
          topicArea: "travel",
        },
        {
          en: "How much is the parking fee?",
          bn: "পার্কিং ফি কত?",
          slotValues: { PARKING: "parking fee" },
          topicArea: "travel",
        },
        {
          en: "Is there free parking at the mall?",
          bn: "মলে কি ফ্রি পার্কিং আছে?",
          slotValues: { PARKING: "free parking", PLACE: "the mall" },
          topicArea: "shopping",
        },
        {
          en: "I got a parking ticket.",
          bn: "আমি পার্কিং টিকেট পেয়েছি।",
          slotValues: { PARKING: "parking ticket" },
          topicArea: "daily_life",
        },
        {
          en: "Can I park here for an hour?",
          bn: "আমি কি এখানে এক ঘণ্টার জন্য পার্ক করতে পারি?",
          slotValues: { PARKING: "park here", PLACE: "here" },
          topicArea: "travel",
        },
        {
          en: "The underground parking is available.",
          bn: "আন্ডারগ্রাউন্ড পার্কিং পাওয়া যাচ্ছে।",
          slotValues: { PARKING: "underground parking" },
          topicArea: "travel",
        },
        {
          en: "Please don't park in front of the gate.",
          bn: "অনুগ্রহ করে গেটের সামনে পার্ক করবেন না।",
          slotValues: { PARKING: "park", PLACE: "the gate" },
          topicArea: "daily_life",
        },
        {
          en: "I need to find a parking spot quickly.",
          bn: "আমাকে তাড়াতাড়ি একটা পার্কিং জায়গা খুঁজতে হবে।",
          slotValues: { PARKING: "parking spot" },
          topicArea: "travel",
        },
        {
          en: "Is there valet parking at the hotel?",
          bn: "হোটেলে কি ভ্যালেট পার্কিং আছে?",
          slotValues: { PARKING: "valet parking", PLACE: "the hotel" },
          topicArea: "travel",
        },
        {
          en: "My parking meter has expired.",
          bn: "আমার পার্কিং মিটারের সময় শেষ হয়ে গেছে।",
          slotValues: { PARKING: "parking meter" },
          topicArea: "travel",
        },
        {
          en: "You can park on the street after 6 PM.",
          bn: "সন্ধ্যা ৬টার পরে রাস্তায় পার্ক করতে পারবেন।",
          slotValues: { PARKING: "park on the street" },
          topicArea: "travel",
        },
        {
          en: "The parking garage is behind the building.",
          bn: "পার্কিং গ্যারেজ বিল্ডিংয়ের পেছনে।",
          slotValues: {
            PARKING: "parking garage",
            PLACE: "the building",
          },
          topicArea: "travel",
        },
      ],
      formality: "casual",
      difficulty: "beginner",
      usageNote:
        "Parking-related patterns are very practical for everyday driving situations. These help when looking for a spot, understanding parking rules, or dealing with parking issues.",
      usageNote_bn:
        "পার্কিং সম্পর্কিত প্যাটার্নগুলো দৈনন্দিন গাড়ি চালানোর পরিস্থিতিতে খুবই ব্যবহারিক। পার্কিং জায়গা খোঁজা, পার্কিং নিয়ম বোঝা বা পার্কিং সমস্যা সমাধানে এগুলো সাহায্য করে।",
      combinableWith: ["T35.1"],
      banglaStructureMap:
        "[জায়গা]-এর কাছে (Place + Postposition) + কি (Question particle) + [পার্কিং] (Parking type) + আছে (Verb)?",
    },
    {
      id: "T35.5",
      formula: "I need to [ACTION] at the gas station",
      formula_bn: "আমাকে গ্যাস স্টেশনে [কাজ] করতে হবে",
      patternName: "Gas Station",
      patternName_bn: "গ্যাস স্টেশন",
      slots: [
        {
          name: "ACTION",
          description:
            "An action you need to perform at a gas station such as filling up, checking tires, or paying",
          description_bn:
            "গ্যাস স্টেশনে আপনার করণীয় কাজ যেমন তেল ভরা, টায়ার চেক করা, বা পেমেন্ট করা",
          acceptedTypes: ["verb_phrase"],
          examples: [
            "fill up the tank",
            "check the tire pressure",
            "get regular gas",
          ],
        },
      ],
      examples: [
        {
          en: "Fill it up, please.",
          bn: "ফুল ট্যাংক করে দিন, প্লিজ।",
          slotValues: { ACTION: "fill it up" },
          topicArea: "travel",
        },
        {
          en: "I need regular gas.",
          bn: "আমার রেগুলার গ্যাস দরকার।",
          slotValues: { ACTION: "get regular gas" },
          topicArea: "travel",
        },
        {
          en: "Where is the nearest gas station?",
          bn: "সবচেয়ে কাছের গ্যাস স্টেশন কোথায়?",
          slotValues: { ACTION: "find the nearest gas station" },
          topicArea: "travel",
        },
        {
          en: "Can you check the tire pressure?",
          bn: "আপনি কি টায়ারের প্রেশার চেক করতে পারবেন?",
          slotValues: { ACTION: "check the tire pressure" },
          topicArea: "travel",
        },
        {
          en: "The gas price went up again.",
          bn: "গ্যাসের দাম আবার বেড়ে গেছে।",
          slotValues: { ACTION: "noticed the gas price went up" },
          topicArea: "daily_life",
        },
        {
          en: "I'd like twenty dollars of premium gas.",
          bn: "আমি বিশ ডলারের প্রিমিয়াম গ্যাস চাই।",
          slotValues: { ACTION: "get twenty dollars of premium gas" },
          topicArea: "travel",
        },
        {
          en: "Do you accept credit cards?",
          bn: "আপনারা কি ক্রেডিট কার্ড নেন?",
          slotValues: { ACTION: "pay with credit card" },
          topicArea: "travel",
        },
        {
          en: "I need to use the restroom at the gas station.",
          bn: "আমাকে গ্যাস স্টেশনে রেস্টরুম ব্যবহার করতে হবে।",
          slotValues: { ACTION: "use the restroom" },
          topicArea: "travel",
        },
        {
          en: "Can you clean the windshield, please?",
          bn: "আপনি কি উইন্ডশিল্ড পরিষ্কার করে দিতে পারবেন, প্লিজ?",
          slotValues: { ACTION: "clean the windshield" },
          topicArea: "travel",
        },
        {
          en: "My tank is almost empty.",
          bn: "আমার ট্যাংক প্রায় খালি।",
          slotValues: { ACTION: "fill the tank" },
          topicArea: "travel",
        },
        {
          en: "Which pump should I use?",
          bn: "আমি কোন পাম্প ব্যবহার করবো?",
          slotValues: { ACTION: "find the right pump" },
          topicArea: "travel",
        },
        {
          en: "I need to put air in my tires.",
          bn: "আমাকে টায়ারে বাতাস দিতে হবে।",
          slotValues: { ACTION: "put air in my tires" },
          topicArea: "travel",
        },
        {
          en: "Is this station self-service or full-service?",
          bn: "এই স্টেশনটা কি সেলফ-সার্ভিস নাকি ফুল-সার্ভিস?",
          slotValues: { ACTION: "know the service type" },
          topicArea: "travel",
        },
        {
          en: "Can I get a receipt, please?",
          bn: "আমি কি একটা রিসিট পেতে পারি, প্লিজ?",
          slotValues: { ACTION: "get a receipt" },
          topicArea: "travel",
        },
        {
          en: "I also need to buy some engine oil.",
          bn: "আমাকে কিছু ইঞ্জিন অয়েলও কিনতে হবে।",
          slotValues: { ACTION: "buy some engine oil" },
          topicArea: "shopping",
        },
      ],
      formality: "casual",
      difficulty: "beginner",
      usageNote:
        "These patterns cover common interactions at gas stations. They are useful for fueling up, requesting services, and handling payments at the pump.",
      usageNote_bn:
        "এই প্যাটার্নগুলো গ্যাস স্টেশনে সাধারণ কথোপকথন কভার করে। তেল ভরা, সেবা অনুরোধ করা এবং পাম্পে পেমেন্ট করার জন্য এগুলো কাজে আসে।",
      combinableWith: ["T35.3"],
      banglaStructureMap:
        "আমাকে (Subject + Particle) + গ্যাস স্টেশনে (Location + Postposition) + [কাজ] (Action) + করতে হবে (Verb + Necessity)",
    },
  ],
};
