import type { BridgeRule } from "@/types/pattern";

/**
 * সেতু নিয়ম (Bridge Rules)
 *
 * 12 universal rules that explain ALL differences between Bangla and English.
 * Learn these 12 rules → you can convert ANY Bangla thought to English.
 */
export const bridgeRules: BridgeRule[] = [
  {
    id: "BR1",
    name_bn: "শব্দক্রম উল্টাও",
    shortName_bn: "ক্রম",
    description_bn:
      "বাংলায় ক্রিয়া (কাজের শব্দ) শেষে বসে। ইংরেজিতে ক্রিয়া মাঝখানে বসে। কে → কী করে → কাকে/কী।",
    banglaWay: "আমি পানি চাই",
    englishWay: "I want water",
    icon: "🔄",
  },
  {
    id: "BR2",
    name_bn: "প্রশ্নশব্দ প্রথমে",
    shortName_bn: "প্রশ্ন",
    description_bn:
      "বাংলায় প্রশ্নের শব্দ (কী, কোথায়, কখন) শেষে বা মাঝে বসে। ইংরেজিতে সবসময় একদম শুরুতে বসে।",
    banglaWay: "তোমার নাম কী?",
    englishWay: "What is your name?",
    icon: "❓",
  },
  {
    id: "BR3",
    name_bn: "সাহায্যকারী শব্দ লাগে",
    shortName_bn: "সাহায্যকারী",
    description_bn:
      "বাংলায় 'তুমি যাও?' — এভাবেই প্রশ্ন করা যায়। কিন্তু ইংরেজিতে is, are, do, does, did, will — এরকম একটা সাহায্যকারী শব্দ লাগবেই।",
    banglaWay: "তুমি যাও?",
    englishWay: "Do you go?",
    icon: "🔗",
  },
  {
    id: "BR4",
    name_bn: "the/a লাগে",
    shortName_bn: "the/a",
    description_bn:
      "বাংলায় 'আমি বই পড়ি' — কোনো 'টা' বা 'একটা' না বললেও চলে। ইংরেজিতে a (একটা), the (ওই নির্দিষ্টটা) লাগে।",
    banglaWay: "আমি বই পড়ি",
    englishWay: "I read a book",
    icon: "📎",
  },
  {
    id: "BR5",
    name_bn: "সে = he অথবা she",
    shortName_bn: "he/she",
    description_bn:
      "বাংলায় 'সে' দিয়ে সবাইকে বোঝায় — ছেলে, মেয়ে সবাই। ইংরেজিতে ছেলে = he, মেয়ে = she, জিনিস = it।",
    banglaWay: "সে যায়",
    englishWay: "He goes / She goes",
    icon: "👫",
  },
  {
    id: "BR6",
    name_bn: "সে/তিনি করলে -s লাগে",
    shortName_bn: "-s",
    description_bn:
      "আমি যাই = I go — এখানে 'go' ঠিক আছে। কিন্তু সে যায় = He goes — কাজের শব্দে -s যোগ করতে হবে। শুধু he, she, it এর জন্য।",
    banglaWay: "সে খায়",
    englishWay: "He eats",
    icon: "✏️",
  },
  {
    id: "BR7",
    name_bn: "'না' বলতে not লাগে",
    shortName_bn: "not",
    description_bn:
      "বাংলায় ক্রিয়ার সাথে 'না' বসে: 'যাই না'। ইংরেজিতে সাহায্যকারী শব্দের পরে 'not' বসে: 'do not go'।",
    banglaWay: "আমি যাই না",
    englishWay: "I do not go",
    icon: "🚫",
  },
  {
    id: "BR8",
    name_bn: "কে করছে সেটা বলতেই হবে",
    shortName_bn: "কর্তা",
    description_bn:
      "বাংলায় 'ভালো আছি' বললেই বোঝা যায় 'আমি' ভালো আছি। ইংরেজিতে 'I' বলতেই হবে — 'I am fine'। 'Am fine' বললে ভুল।",
    banglaWay: "ভালো আছি",
    englishWay: "I am fine",
    icon: "👆",
  },
  {
    id: "BR9",
    name_bn: "সময়ের কথা শেষে বলো",
    shortName_bn: "সময়",
    description_bn:
      "বাংলায় 'আমি সকালে যাই' — 'সকালে' মাঝখানে। ইংরেজিতে সময়ের কথা সাধারণত শেষে বসে: 'I go in the morning'।",
    banglaWay: "আমি সকালে যাই",
    englishWay: "I go in the morning",
    icon: "🕐",
  },
  {
    id: "BR10",
    name_bn: "বিভক্তি → আলাদা শব্দ",
    shortName_bn: "in/on/at",
    description_bn:
      "বাংলায় শব্দের শেষে -তে, -য়, -র যোগ হয়: 'ঢাকায়', 'টেবিলে'। ইংরেজিতে আলাদা শব্দ ব্যবহার করো: 'in Dhaka', 'on the table'।",
    banglaWay: "ঢাকায় থাকি",
    englishWay: "I live in Dhaka",
    icon: "📍",
  },
  {
    id: "BR11",
    name_bn: "অনেক বোঝাতে -s লাগাও",
    shortName_bn: "-s বহুবচন",
    description_bn:
      "বাংলায় 'বইগুলো', 'ছেলেরা' — আলাদা শব্দ যোগ হয়। ইংরেজিতে জিনিসের নামের শেষে -s বা -es যোগ করো: 'books', 'boys'।",
    banglaWay: "বইগুলো",
    englishWay: "books",
    icon: "📚",
  },
  {
    id: "BR12",
    name_bn: "সময় বদলালে সাহায্যকারী বদলায়",
    shortName_bn: "কাল",
    description_bn:
      "বাংলায় ক্রিয়ার রূপ বদলায়: করি, করলাম, করব। ইংরেজিতে সাহায্যকারী শব্দ বদলায়: এখন = do, আগে = did, পরে = will।",
    banglaWay: "করি / করলাম / করব",
    englishWay: "do / did / will",
    icon: "⏰",
  },
];

export function getBridgeRule(id: string): BridgeRule | undefined {
  return bridgeRules.find((r) => r.id === id);
}

export function getBridgeRules(ids: string[]): BridgeRule[] {
  return ids.map((id) => bridgeRules.find((r) => r.id === id)).filter(Boolean) as BridgeRule[];
}
