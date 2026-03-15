import { DialogueChain } from "@/types/pattern";

// 12 verification conversations — 2 per level
// Each proves the learner can handle real situations using patterns from that level
// All turns have pronunciation_bn for speaking practice

export const verificationConversations: DialogueChain[] = [
  // ==================== Level 1: বেঁচে থাকা (Survival) ====================

  // VC-1: Bazaar — buying vegetables
  {
    id: "vc-1",
    title_bn: "বাজারে সবজি কেনা",
    title_en: "Buying Vegetables at the Bazaar",
    situation_bn: "তুমি কাওরান বাজারে গেছো সবজি কিনতে। দোকানদারের সাথে কথা বলছো।",
    icon: "🥬",
    turns: [
      { speaker_bn: "তুমি", en: "Hello! I want some vegetables.", bn: "হ্যালো! আমি কিছু সবজি চাই।", pronunciation_bn: "হ্যালো! আই ওয়ান্ট সাম ভেজিটেবলস।", patternId: "A1.1" },
      { speaker_bn: "দোকানদার", en: "Yes, what do you need?", bn: "হ্যাঁ, কী লাগবে?", pronunciation_bn: "ইয়েস, হোয়াট ডু ইউ নিড?", patternId: "G2.1" },
      { speaker_bn: "তুমি", en: "I need potatoes and onions.", bn: "আমার আলু আর পেঁয়াজ লাগবে।", pronunciation_bn: "আই নিড পটেটোজ অ্যান্ড আনিয়ানস।", patternId: "A1.2" },
      { speaker_bn: "দোকানদার", en: "How much do you want?", bn: "কতটুকু চাই?", pronunciation_bn: "হাউ মাচ ডু ইউ ওয়ান্ট?", patternId: "G2.7" },
      { speaker_bn: "তুমি", en: "I want two kilos of potatoes.", bn: "আমি দুই কেজি আলু চাই।", pronunciation_bn: "আই ওয়ান্ট টু কিলোজ অফ পটেটোজ।", patternId: "A1.1" },
      { speaker_bn: "তুমি", en: "How much is this?", bn: "এটার দাম কত?", pronunciation_bn: "হাউ মাচ ইজ দিস?", patternId: "G2.7" },
      { speaker_bn: "দোকানদার", en: "It is sixty taka per kilo.", bn: "প্রতি কেজি ষাট টাকা।", pronunciation_bn: "ইট ইজ সিক্সটি টাকা পার কিলো।", patternId: "B1.1" },
      { speaker_bn: "তুমি", en: "I want a discount.", bn: "আমি ছাড় চাই।", pronunciation_bn: "আই ওয়ান্ট আ ডিসকাউন্ট।", patternId: "A1.1" },
      { speaker_bn: "দোকানদার", en: "Okay, fifty taka. Is that okay?", bn: "আচ্ছা, পঞ্চাশ টাকা। ঠিক আছে?", pronunciation_bn: "ওকে, ফিফটি টাকা। ইজ দ্যাট ওকে?", patternId: "G1.1" },
      { speaker_bn: "তুমি", en: "Yes, thank you!", bn: "হ্যাঁ, ধন্যবাদ!", pronunciation_bn: "ইয়েস, থ্যাঙ্ক ইউ!", patternId: "H4.1" },
    ],
    patternsUsed: ["A1.1", "A1.2", "G2.1", "G2.7", "B1.1", "G1.1", "H4.1"],
  },

  // VC-2: Hospital Emergency
  {
    id: "vc-2",
    title_bn: "হাসপাতালে জরুরি সাহায্য",
    title_en: "Emergency at the Hospital",
    situation_bn: "তোমার মাথা ব্যথা ও জ্বর হচ্ছে। তুমি হাসপাতালে গেছো।",
    icon: "🏥",
    turns: [
      { speaker_bn: "তুমি", en: "I need help, please.", bn: "আমার সাহায্য দরকার, প্লিজ।", pronunciation_bn: "আই নিড হেল্প, প্লিজ।", patternId: "A1.2" },
      { speaker_bn: "নার্স", en: "What is the problem?", bn: "সমস্যা কী?", pronunciation_bn: "হোয়াট ইজ দা প্রবলেম?", patternId: "G2.1" },
      { speaker_bn: "তুমি", en: "I have a headache and fever.", bn: "আমার মাথা ব্যথা আর জ্বর আছে।", pronunciation_bn: "আই হ্যাভ আ হেডেক অ্যান্ড ফিভার।", patternId: "B1.1" },
      { speaker_bn: "নার্স", en: "How long have you had this?", bn: "কতদিন ধরে এটা হচ্ছে?", pronunciation_bn: "হাউ লং হ্যাভ ইউ হ্যাড দিস?", patternId: "G2.8" },
      { speaker_bn: "তুমি", en: "Two days.", bn: "দুইদিন।", pronunciation_bn: "টু ডেইজ।" },
      { speaker_bn: "নার্স", en: "Where is your pain?", bn: "ব্যথা কোথায়?", pronunciation_bn: "হোয়্যার ইজ ইয়োর পেইন?", patternId: "G2.2" },
      { speaker_bn: "তুমি", en: "Here. My head hurts a lot.", bn: "এখানে। আমার মাথায় অনেক ব্যথা।", pronunciation_bn: "হিয়ার। মাই হেড হার্টস আ লট।", patternId: "B1.1" },
      { speaker_bn: "ডাক্তার", en: "I want to check your temperature.", bn: "আমি তোমার তাপমাত্রা মাপতে চাই।", pronunciation_bn: "আই ওয়ান্ট টু চেক ইয়োর টেম্পারেচার।", patternId: "A1.1" },
      { speaker_bn: "তুমি", en: "Can I get some medicine?", bn: "আমি কি কিছু ওষুধ পেতে পারি?", pronunciation_bn: "ক্যান আই গেট সাম মেডিসিন?", patternId: "A2.1" },
      { speaker_bn: "ডাক্তার", en: "Yes, take this medicine three times a day.", bn: "হ্যাঁ, এই ওষুধ দিনে তিনবার খাও।", pronunciation_bn: "ইয়েস, টেক দিস মেডিসিন থ্রি টাইমস আ ডে।" },
    ],
    patternsUsed: ["A1.1", "A1.2", "A2.1", "G2.1", "G2.2", "G2.7", "G2.8", "B1.1"],
  },

  // ==================== Level 2: প্রতিদিন (Daily Life) ====================

  // VC-3: Bus ride
  {
    id: "vc-3",
    title_bn: "বাসে যাতায়াত",
    title_en: "Taking the Bus",
    situation_bn: "তুমি গুলিস্তান থেকে মিরপুরে বাসে যাচ্ছো।",
    icon: "🚌",
    turns: [
      { speaker_bn: "তুমি", en: "Excuse me, does this bus go to Mirpur?", bn: "মাফ করবেন, এই বাস কি মিরপুর যায়?", pronunciation_bn: "এক্সকিউজ মি, ডাজ দিস বাস গো টু মিরপুর?", patternId: "G1.1" },
      { speaker_bn: "হেলপার", en: "Yes, it goes to Mirpur 10.", bn: "হ্যাঁ, মিরপুর ১০ যায়।", pronunciation_bn: "ইয়েস, ইট গোজ টু মিরপুর টেন।", patternId: "C1.1" },
      { speaker_bn: "তুমি", en: "How long does it take?", bn: "কতক্ষণ লাগে?", pronunciation_bn: "হাউ লং ডাজ ইট টেক?", patternId: "G2.8" },
      { speaker_bn: "হেলপার", en: "It usually takes about forty minutes.", bn: "সাধারণত চল্লিশ মিনিট লাগে।", pronunciation_bn: "ইট ইউজুয়ালি টেকস অ্যাবাউট ফর্টি মিনিটস।", patternId: "C1.1" },
      { speaker_bn: "তুমি", en: "How much is the ticket?", bn: "টিকিট কত?", pronunciation_bn: "হাউ মাচ ইজ দা টিকেট?", patternId: "G2.7" },
      { speaker_bn: "হেলপার", en: "Thirty taka.", bn: "তিরিশ টাকা।", pronunciation_bn: "থার্টি টাকা।" },
      { speaker_bn: "তুমি", en: "I will sit near the window.", bn: "আমি জানালার পাশে বসবো।", pronunciation_bn: "আই উইল সিট নিয়ার দা উইন্ডো।", patternId: "C4.1" },
      { speaker_bn: "তুমি", en: "When is the next stop?", bn: "পরের স্টপ কখন?", pronunciation_bn: "হোয়েন ইজ দা নেক্সট স্টপ?", patternId: "G2.3" },
      { speaker_bn: "হেলপার", en: "We are coming to Farmgate now.", bn: "আমরা এখন ফার্মগেটে আসছি।", pronunciation_bn: "উই আর কামিং টু ফার্মগেট নাউ।", patternId: "C2.1" },
      { speaker_bn: "তুমি", en: "I got on the bus at Gulistan.", bn: "আমি গুলিস্তান থেকে বাসে উঠেছি।", pronunciation_bn: "আই গট অন দা বাস অ্যাট গুলিস্তান।", patternId: "C3.1" },
    ],
    patternsUsed: ["G1.1", "G2.3", "G2.7", "G2.8", "C1.1", "C2.1", "C3.1", "C4.1"],
  },

  // VC-4: Pharmacy
  {
    id: "vc-4",
    title_bn: "ফার্মেসিতে ওষুধ কেনা",
    title_en: "Buying Medicine at the Pharmacy",
    situation_bn: "তোমার ঠান্ডা লেগেছে। কাছের ফার্মেসিতে গেছো।",
    icon: "💊",
    turns: [
      { speaker_bn: "তুমি", en: "Good evening. I have a cold.", bn: "শুভ সন্ধ্যা। আমার ঠান্ডা লেগেছে।", pronunciation_bn: "গুড ইভনিং। আই হ্যাভ আ কোল্ড।", patternId: "H1.1" },
      { speaker_bn: "ফার্মাসিস্ট", en: "What are your symptoms?", bn: "কী কী সমস্যা হচ্ছে?", pronunciation_bn: "হোয়াট আর ইয়োর সিম্পটমস?", patternId: "G2.1" },
      { speaker_bn: "তুমি", en: "I have been coughing since yesterday.", bn: "গতকাল থেকে কাশি হচ্ছে।", pronunciation_bn: "আই হ্যাভ বিন কফিং সিন্স ইয়েস্টারডে।", patternId: "C5.1" },
      { speaker_bn: "তুমি", en: "My nose is running too.", bn: "আমার নাকও দিয়ে পানি পড়ছে।", pronunciation_bn: "মাই নোজ ইজ রানিং টু।", patternId: "C2.1" },
      { speaker_bn: "ফার্মাসিস্ট", en: "Do you have a fever?", bn: "জ্বর আছে?", pronunciation_bn: "ডু ইউ হ্যাভ আ ফিভার?", patternId: "G1.1" },
      { speaker_bn: "তুমি", en: "No, I don't have a fever.", bn: "না, আমার জ্বর নেই।", pronunciation_bn: "নো, আই ডোন্ট হ্যাভ আ ফিভার।" },
      { speaker_bn: "ফার্মাসিস্ট", en: "Take this syrup twice a day.", bn: "এই সিরাপ দিনে দুবার খান।", pronunciation_bn: "টেক দিস সিরাপ টোয়াইস আ ডে।" },
      { speaker_bn: "তুমি", en: "How much does it cost?", bn: "এটার দাম কত?", pronunciation_bn: "হাউ মাচ ডাজ ইট কস্ট?", patternId: "G2.7" },
      { speaker_bn: "ফার্মাসিস্ট", en: "It costs one hundred and fifty taka.", bn: "দাম একশ পঞ্চাশ টাকা।", pronunciation_bn: "ইট কস্টস ওয়ান হান্ড্রেড অ্যান্ড ফিফটি টাকা।" },
      { speaker_bn: "তুমি", en: "Thank you very much.", bn: "অনেক ধন্যবাদ।", pronunciation_bn: "থ্যাঙ্ক ইউ ভেরি মাচ।", patternId: "H4.1" },
    ],
    patternsUsed: ["H1.1", "G2.1", "G2.7", "C5.1", "C2.1", "G1.1", "H4.1"],
  },

  // ==================== Level 3: গল্প করা (Conversation) ====================

  // VC-5: Tea stall chat
  {
    id: "vc-5",
    title_bn: "চায়ের দোকানে আড্ডা",
    title_en: "Chat at the Tea Stall",
    situation_bn: "তুমি চায়ের দোকানে বসে পাশের লোকের সাথে গল্প করছো।",
    icon: "☕",
    turns: [
      { speaker_bn: "তুমি", en: "The weather is really nice today, isn't it?", bn: "আজকে আবহাওয়া অনেক ভালো, তাই না?", pronunciation_bn: "দা ওয়েদার ইজ রিয়েলি নাইস টুডে, ইজন্ট ইট?", patternId: "G4.1" },
      { speaker_bn: "প্রতিবেশী", en: "Yes, I think winter is the best season.", bn: "হ্যাঁ, আমার মনে হয় শীতকাল সেরা ঋতু।", pronunciation_bn: "ইয়েস, আই থিঙ্ক উইন্টার ইজ দা বেস্ট সিজন।", patternId: "E1.1" },
      { speaker_bn: "তুমি", en: "I agree! I love eating pitha in winter.", bn: "আমিও তাই মনে করি! শীতকালে পিঠা খেতে ভালোবাসি।", pronunciation_bn: "আই অ্যাগ্রি! আই লাভ ইটিং পিঠা ইন উইন্টার।", patternId: "E2.1" },
      { speaker_bn: "প্রতিবেশী", en: "By the way, I heard you got a new job.", bn: "যাই হোক, শুনলাম তুমি নতুন চাকরি পেয়েছো।", pronunciation_bn: "বাই দা ওয়ে, আই হার্ড ইউ গট আ নিউ জব।", patternId: "R16.4" },
      { speaker_bn: "তুমি", en: "Yes! I'm really happy about it.", bn: "হ্যাঁ! আমি খুবই খুশি এটা নিয়ে।", pronunciation_bn: "ইয়েস! আইম রিয়েলি হ্যাপি অ্যাবাউট ইট।", patternId: "E8.1" },
      { speaker_bn: "প্রতিবেশী", en: "That's great! What kind of work is it?", bn: "দারুণ! কী ধরনের কাজ?", pronunciation_bn: "দ্যাটস গ্রেট! হোয়াট কাইন্ড অফ ওয়ার্ক ইজ ইট?", patternId: "H12.5" },
      { speaker_bn: "তুমি", en: "I work in a garments factory. I should save more money.", bn: "আমি গার্মেন্টস ফ্যাক্টরিতে কাজ করি। আমার আরও টাকা জমানো উচিত।", pronunciation_bn: "আই ওয়ার্ক ইন আ গার্মেন্টস ফ্যাক্টরি। আই শুড সেভ মোর মানি।", patternId: "D2.1" },
      { speaker_bn: "প্রতিবেশী", en: "I see. How about we have another cup of tea?", bn: "বুঝলাম। আরেক কাপ চা হোক?", pronunciation_bn: "আই সি। হাউ অ্যাবাউট উই হ্যাভ অ্যানাদার কাপ অফ টি?", patternId: "F1.1" },
      { speaker_bn: "তুমি", en: "Sounds good! My treat this time.", bn: "ভালো শোনাচ্ছে! এইবার আমি দিচ্ছি।", pronunciation_bn: "সাউন্ডস গুড! মাই ট্রিট দিস টাইম।", patternId: "T36.4" },
    ],
    patternsUsed: ["G4.1", "E1.1", "E2.1", "R16.4", "E8.1", "H12.5", "D2.1", "F1.1", "T36.4"],
  },

  // VC-6: Phone call with friend
  {
    id: "vc-6",
    title_bn: "বন্ধুর সাথে ফোনে কথা",
    title_en: "Phone Call with a Friend",
    situation_bn: "তোমার পুরোনো বন্ধু ফোন করেছে। অনেকদিন পর কথা হচ্ছে।",
    icon: "📞",
    turns: [
      { speaker_bn: "বন্ধু", en: "Hey! How are you? I haven't talked to you in ages!", bn: "আরে! কেমন আছো? কত দিন কথা হয়নি!", pronunciation_bn: "হে! হাউ আর ইউ? আই হ্যাভন্ট টক্ড টু ইউ ইন এজেস!", patternId: "H1.1" },
      { speaker_bn: "তুমি", en: "I'm fine! I was just thinking about you.", bn: "ভালো আছি! তোমার কথাই মনে হচ্ছিলো।", pronunciation_bn: "আইম ফাইন! আই ওয়াজ জাস্ট থিঙ্কিং অ্যাবাউট ইউ।", patternId: "C2.1" },
      { speaker_bn: "বন্ধু", en: "Really? I hope everything is going well.", bn: "সত্যি? আশা করি সব ভালো চলছে।", pronunciation_bn: "রিয়েলি? আই হোপ এভরিথিং ইজ গোইং ওয়েল।", patternId: "T26.1" },
      { speaker_bn: "তুমি", en: "Actually, I got married last month!", bn: "আসলে, গত মাসে আমার বিয়ে হয়েছে!", pronunciation_bn: "অ্যাকচুয়ালি, আই গট ম্যারিড লাস্ট মান্থ!", patternId: "R16.2" },
      { speaker_bn: "বন্ধু", en: "Oh my God! Congratulations! I'm so happy for you!", bn: "সর্বনাশ! অভিনন্দন! আমি খুব খুশি!", pronunciation_bn: "ও মাই গড! কংগ্র্যাচুলেশনস! আইম সো হ্যাপি ফর ইউ!", patternId: "H7.1" },
      { speaker_bn: "তুমি", en: "Thank you! I wish you were there.", bn: "ধন্যবাদ! তুমি থাকলে ভালো হতো।", pronunciation_bn: "থ্যাঙ্ক ইউ! আই উইশ ইউ ওয়্যার দেয়ার।", patternId: "A8.1" },
      { speaker_bn: "বন্ধু", en: "I feel bad about missing it. Let's meet soon!", bn: "না যেতে পেরে খারাপ লাগছে। চলো শীঘ্রই দেখা করি!", pronunciation_bn: "আই ফিল ব্যাড অ্যাবাউট মিসিং ইট। লেটস মিট সুন!", patternId: "F1.1" },
      { speaker_bn: "তুমি", en: "For sure! Come to our house this Friday.", bn: "অবশ্যই! এই শুক্রবার আমাদের বাসায় এসো।", pronunciation_bn: "ফর শিওর! কাম টু আওয়ার হাউস দিস ফ্রাইডে।", patternId: "F4.1" },
    ],
    patternsUsed: ["H1.1", "C2.1", "T26.1", "R16.2", "H7.1", "A8.1", "F1.1", "F4.1"],
  },

  // ==================== Level 4: স্বাভাবিক (Natural) ====================

  // VC-7: Rickshaw negotiation (casual speech)
  {
    id: "vc-7",
    title_bn: "রিকশায় দরকষাকষি",
    title_en: "Negotiating with a Rickshaw Puller",
    situation_bn: "তুমি ধানমন্ডি থেকে গুলশান যেতে চাও। রিকশাওয়ালার সাথে দর করছো।",
    icon: "🚲",
    turns: [
      { speaker_bn: "তুমি", en: "Hey, I wanna go to Gulshan.", bn: "ভাই, আমি গুলশান যেতে চাই।", pronunciation_bn: "হে, আই ওয়ানা গো টু গুলশান।", patternId: "X11.2" },
      { speaker_bn: "রিকশাওয়ালা", en: "Gulshan? That's kinda far.", bn: "গুলশান? সেটা একটু দূরে।", pronunciation_bn: "গুলশান? দ্যাটস কাইন্ডা ফার।", patternId: "X11.4" },
      { speaker_bn: "তুমি", en: "Yeah, I know. How much?", bn: "হ্যাঁ, জানি। কত নেবেন?", pronunciation_bn: "ইয়াহ, আই নো। হাউ মাচ?" },
      { speaker_bn: "রিকশাওয়ালা", en: "Two hundred taka.", bn: "দুইশ টাকা।", pronunciation_bn: "টু হান্ড্রেড টাকা।" },
      { speaker_bn: "তুমি", en: "That's not really fair. It barely costs a hundred by CNG.", bn: "সেটা ঠিক ঠিক না। সিএনজিতে কোনোমতে একশ লাগে।", pronunciation_bn: "দ্যাটস নট রিয়েলি ফেয়ার। ইট বেয়ারলি কস্টস আ হান্ড্রেড বাই সিএনজি।", patternId: "N8.3" },
      { speaker_bn: "রিকশাওয়ালা", en: "But I hafta go through traffic.", bn: "কিন্তু ট্র্যাফিকের মধ্যে দিয়ে যেতে হবে।", pronunciation_bn: "বাট আই হ্যাফটা গো থ্রু ট্র্যাফিক।", patternId: "X13.5" },
      { speaker_bn: "তুমি", en: "I'm gonna give you a hundred and fifty. That's pretty much the right price.", bn: "আমি দেবো দেড়শ। এটাই মোটামুটি ঠিক দাম।", pronunciation_bn: "আইম গনা গিভ ইউ আ হান্ড্রেড অ্যান্ড ফিফটি। দ্যাটস প্রিটি মাচ দা রাইট প্রাইস।", patternId: "X11.1" },
      { speaker_bn: "রিকশাওয়ালা", en: "Okay, let's go.", bn: "আচ্ছা, চলেন।", pronunciation_bn: "ওকে, লেটস গো।" },
    ],
    patternsUsed: ["X11.1", "X11.2", "X11.4", "X13.5", "N8.3", "N8.2"],
  },

  // VC-8: Restaurant ordering (natural speech)
  {
    id: "vc-8",
    title_bn: "রেস্টুরেন্টে খাবার অর্ডার",
    title_en: "Ordering at a Restaurant",
    situation_bn: "তুমি বন্ধুদের সাথে স্টার কাবাবে খেতে গেছো।",
    icon: "🍽️",
    turns: [
      { speaker_bn: "ওয়েটার", en: "Good evening. Whaddaya like to order?", bn: "শুভ সন্ধ্যা। কী অর্ডার করবেন?", pronunciation_bn: "গুড ইভনিং। হোয়াডায়া লাইক টু অর্ডার?", patternId: "X13.4" },
      { speaker_bn: "তুমি", en: "Well, I'm kind of hungry. Lemme see the menu.", bn: "আচ্ছা, আমার একটু ক্ষিধা লেগেছে। মেনু দেখি।", pronunciation_bn: "ওয়েল, আইম কাইন্ড অফ হাংরি। লেমি সি দা মেনু।", patternId: "X11.5" },
      { speaker_bn: "বন্ধু", en: "I'm gonna have the biryani. It's absolutely delicious here.", bn: "আমি বিরিয়ানি নেবো। এখানকার পুরোপুরি অসাধারণ।", pronunciation_bn: "আইম গনা হ্যাভ দা বিরিয়ানি। ইটস অ্যাবসলিউটলি ডেলিশাস হিয়ার।", patternId: "N8.4" },
      { speaker_bn: "তুমি", en: "Sounds good. I'll have the same. And gimme a glass of water.", bn: "ভালো শোনাচ্ছে। আমিও তাই নেবো। আর আমাকে এক গ্লাস পানি দাও।", pronunciation_bn: "সাউন্ডস গুড। আইল হ্যাভ দা সেম। অ্যান্ড গিমি আ গ্লাস অফ ওয়াটার।", patternId: "X11.6" },
      { speaker_bn: "ওয়েটার", en: "Sure. Djuwanna try our special naan?", bn: "অবশ্যই। আমাদের স্পেশাল নান ট্রাই করবেন?", pronunciation_bn: "শিওর। জুওয়ানা ট্রাই আওয়ার স্পেশাল নান?", patternId: "X13.1" },
      { speaker_bn: "তুমি", en: "I dunno. Is it good?", bn: "জানি না। ভালো কি?", pronunciation_bn: "আই ডানো। ইজ ইট গুড?", patternId: "X11.7" },
      { speaker_bn: "ওয়েটার", en: "It's quite popular. Most people order it.", bn: "বেশ জনপ্রিয়। বেশিরভাগ মানুষ অর্ডার করে।", pronunciation_bn: "ইটস কোয়াইট পপুলার। মোস্ট পিপল অর্ডার ইট।", patternId: "N8.6" },
      { speaker_bn: "তুমি", en: "Fair enough. I'll take one.", bn: "ঠিক বলেছো। একটা নেবো।", pronunciation_bn: "ফেয়ার ইনাফ। আইল টেক ওয়ান।", patternId: "T36.7" },
    ],
    patternsUsed: ["X13.4", "X11.5", "X11.6", "X11.7", "X11.1", "X13.1", "N8.4", "N8.6", "T36.7"],
  },

  // ==================== Level 5: পেশাদার (Professional) ====================

  // VC-9: Job interview
  {
    id: "vc-9",
    title_bn: "চাকরির ইন্টারভিউ",
    title_en: "Job Interview",
    situation_bn: "তুমি একটা কোম্পানিতে ইন্টারভিউ দিতে গেছো।",
    icon: "💼",
    turns: [
      { speaker_bn: "ইন্টারভিউয়ার", en: "Good morning. Please have a seat.", bn: "শুভ সকাল। বসুন।", pronunciation_bn: "গুড মর্নিং। প্লিজ হ্যাভ আ সিট।" },
      { speaker_bn: "তুমি", en: "Good morning. Thank you for this opportunity.", bn: "শুভ সকাল। এই সুযোগের জন্য ধন্যবাদ।", pronunciation_bn: "গুড মর্নিং। থ্যাঙ্ক ইউ ফর দিস অপরচুনিটি।", patternId: "V8.1" },
      { speaker_bn: "ইন্টারভিউয়ার", en: "Could you tell me about your previous experience?", bn: "আপনার আগের অভিজ্ঞতা সম্পর্কে বলবেন?", pronunciation_bn: "কুড ইউ টেল মি অ্যাবাউট ইয়োর প্রিভিয়াস এক্সপিরিয়েন্স?", patternId: "V1.1" },
      { speaker_bn: "তুমি", en: "I worked at a garments factory for three years. I was responsible for quality control.", bn: "আমি তিন বছর গার্মেন্টস ফ্যাক্টরিতে কাজ করেছি। কোয়ালিটি কন্ট্রোলের দায়িত্বে ছিলাম।", pronunciation_bn: "আই ওয়ার্কড অ্যাট আ গার্মেন্টস ফ্যাক্টরি ফর থ্রি ইয়ার্স। আই ওয়াজ রেসপন্সিবল ফর কোয়ালিটি কন্ট্রোল।", patternId: "C3.1" },
      { speaker_bn: "ইন্টারভিউয়ার", en: "Why did you leave that position?", bn: "কেন সেই পদ ছাড়লেন?", pronunciation_bn: "হোয়াই ডিড ইউ লিভ দ্যাট পজিশন?", patternId: "G2.5" },
      { speaker_bn: "তুমি", en: "I am looking for better growth opportunities. I believe this company can offer that.", bn: "আমি ভালো উন্নতির সুযোগ খুঁজছি। আমি বিশ্বাস করি এই কোম্পানি সেটা দিতে পারবে।", pronunciation_bn: "আই অ্যাম লুকিং ফর বেটার গ্রোথ অপরচুনিটিজ। আই বিলিভ দিস কোম্পানি ক্যান অফার দ্যাট।", patternId: "E1.1" },
      { speaker_bn: "ইন্টারভিউয়ার", en: "What would you say is your greatest strength?", bn: "আপনার সবচেয়ে বড় শক্তি কী বলবেন?", pronunciation_bn: "হোয়াট উড ইউ সে ইজ ইয়োর গ্রেটেস্ট স্ট্রেংথ?", patternId: "G2.1" },
      { speaker_bn: "তুমি", en: "I would say I am a quick learner and I work well under pressure.", bn: "আমি বলবো আমি দ্রুত শিখি এবং চাপের মধ্যে ভালো কাজ করি।", pronunciation_bn: "আই উড সে আই অ্যাম আ কুইক লার্নার অ্যান্ড আই ওয়ার্ক ওয়েল আন্ডার প্রেশার।", patternId: "K1.1" },
      { speaker_bn: "ইন্টারভিউয়ার", en: "Thank you. We will let you know by next week.", bn: "ধন্যবাদ। আগামী সপ্তাহের মধ্যে জানাবো।", pronunciation_bn: "থ্যাঙ্ক ইউ। উই উইল লেট ইউ নো বাই নেক্সট উইক।" },
      { speaker_bn: "তুমি", en: "Thank you very much. I look forward to hearing from you.", bn: "অনেক ধন্যবাদ। আপনার কাছ থেকে শোনার অপেক্ষায় থাকবো।", pronunciation_bn: "থ্যাঙ্ক ইউ ভেরি মাচ। আই লুক ফরওয়ার্ড টু হিয়ারিং ফ্রম ইউ।", patternId: "V8.1" },
    ],
    patternsUsed: ["V8.1", "V1.1", "C3.1", "G2.1", "G2.5", "E1.1", "K1.1"],
  },

  // VC-10: Government office
  {
    id: "vc-10",
    title_bn: "সরকারি অফিসে কাজ",
    title_en: "At the Government Office",
    situation_bn: "তুমি পাসপোর্ট অফিসে নতুন পাসপোর্টের জন্য আবেদন করতে গেছো।",
    icon: "🏛️",
    turns: [
      { speaker_bn: "তুমি", en: "Good morning. I would like to apply for a new passport.", bn: "শুভ সকাল। আমি নতুন পাসপোর্টের জন্য আবেদন করতে চাই।", pronunciation_bn: "গুড মর্নিং। আই উড লাইক টু অ্যাপ্লাই ফর আ নিউ পাসপোর্ট।", patternId: "V1.1" },
      { speaker_bn: "কর্মকর্তা", en: "Do you have all the required documents?", bn: "সব প্রয়োজনীয় কাগজপত্র আছে?", pronunciation_bn: "ডু ইউ হ্যাভ অল দা রিকোয়ার্ড ডকুমেন্টস?", patternId: "G1.1" },
      { speaker_bn: "তুমি", en: "Yes, I have brought my NID, birth certificate, and photographs.", bn: "হ্যাঁ, এনআইডি, জন্ম সনদ, আর ছবি এনেছি।", pronunciation_bn: "ইয়েস, আই হ্যাভ ব্রট মাই এনআইডি, বার্থ সার্টিফিকেট, অ্যান্ড ফটোগ্রাফস।", patternId: "C5.1" },
      { speaker_bn: "কর্মকর্তা", en: "You need to fill out this form first.", bn: "আগে এই ফর্মটি পূরণ করতে হবে।", pronunciation_bn: "ইউ নিড টু ফিল আউট দিস ফর্ম ফার্স্ট।", patternId: "Q2.1" },
      { speaker_bn: "তুমি", en: "Could you please tell me where to submit it?", bn: "দয়া করে বলবেন কোথায় জমা দিতে হবে?", pronunciation_bn: "কুড ইউ প্লিজ টেল মি হোয়্যার টু সাবমিট ইট?", patternId: "V1.1" },
      { speaker_bn: "কর্মকর্তা", en: "Submit it at counter number three.", bn: "তিন নম্বর কাউন্টারে জমা দিন।", pronunciation_bn: "সাবমিট ইট অ্যাট কাউন্টার নাম্বার থ্রি।", patternId: "Q2.1" },
      { speaker_bn: "তুমি", en: "How long will it take to get the passport?", bn: "পাসপোর্ট পেতে কতদিন লাগবে?", pronunciation_bn: "হাউ লং উইল ইট টেক টু গেট দা পাসপোর্ট?", patternId: "G2.8" },
      { speaker_bn: "কর্মকর্তা", en: "The regular service takes about three weeks.", bn: "রেগুলার সার্ভিসে প্রায় তিন সপ্তাহ লাগে।", pronunciation_bn: "দা রেগুলার সার্ভিস টেকস অ্যাবাউট থ্রি উইকস।" },
      { speaker_bn: "তুমি", en: "I appreciate your help. Thank you.", bn: "আপনার সাহায্যের জন্য কৃতজ্ঞ। ধন্যবাদ।", pronunciation_bn: "আই অ্যাপ্রিশিয়েট ইয়োর হেল্প। থ্যাঙ্ক ইউ।", patternId: "V8.1" },
    ],
    patternsUsed: ["V1.1", "G1.1", "C5.1", "Q2.1", "G2.8", "V8.1"],
  },

  // ==================== Level 6: মাস্টার (Master) ====================

  // VC-11: Debate with colleague
  {
    id: "vc-11",
    title_bn: "সহকর্মীর সাথে তর্ক",
    title_en: "Debate with a Colleague",
    situation_bn: "তুমি আর তোমার সহকর্মী বাংলাদেশের শিক্ষা ব্যবস্থা নিয়ে কথা বলছো।",
    icon: "🗣️",
    turns: [
      { speaker_bn: "সহকর্মী", en: "In my opinion, the education system needs a complete overhaul.", bn: "আমার মতে, শিক্ষা ব্যবস্থার সম্পূর্ণ পরিবর্তন দরকার।", pronunciation_bn: "ইন মাই ওপিনিয়ন, দা এডুকেশন সিস্টেম নিডস আ কমপ্লিট ওভারহল।", patternId: "E1.1" },
      { speaker_bn: "তুমি", en: "I see your point, but I would argue that it's not that simple.", bn: "তোমার কথা বুঝলাম, কিন্তু আমি বলবো এটা অত সহজ না।", pronunciation_bn: "আই সি ইয়োর পয়েন্ট, বাট আই উড আর্গিউ দ্যাট ইটস নট দ্যাট সিম্পল।", patternId: "V6.1" },
      { speaker_bn: "সহকর্মী", en: "What I mean is, the curriculum doesn't prepare students for real life.", bn: "আমি বলতে চাচ্ছি, সিলেবাস ছাত্রদের আসল জীবনের জন্য তৈরি করে না।", pronunciation_bn: "হোয়াট আই মিন ইজ, দা কারিকুলাম ডাজন্ট প্রিপেয়ার স্টুডেন্টস ফর রিয়েল লাইফ।" },
      { speaker_bn: "তুমি", en: "That's a fair point. However, even if we changed the curriculum, the real problem lies in teacher training.", bn: "ঠিক বলেছো। কিন্তু, সিলেবাস পাল্টালেও আসল সমস্যা শিক্ষক প্রশিক্ষণে।", pronunciation_bn: "দ্যাটস আ ফেয়ার পয়েন্ট। হাওএভার, ইভেন ইফ উই চেঞ্জড দা কারিকুলাম, দা রিয়েল প্রবলেম লাইজ ইন টিচার ট্রেইনিং।", patternId: "J7.1" },
      { speaker_bn: "সহকর্মী", en: "Not only that, but the examination system is also outdated.", bn: "শুধু তাই না, পরীক্ষা পদ্ধতিও পুরোনো।", pronunciation_bn: "নট ওনলি দ্যাট, বাট দা এক্সামিনেশন সিস্টেম ইজ অলসো আউটডেটেড।", patternId: "S8.1" },
      { speaker_bn: "তুমি", en: "I couldn't agree more on that. It's high time we moved to continuous assessment.", bn: "সেটাতে আমি সম্পূর্ণ একমত। ক্রমাগত মূল্যায়নে যাওয়ার সময় হয়ে গেছে।", pronunciation_bn: "আই কুডন্ট অ্যাগ্রি মোর অন দ্যাট। ইটস হাই টাইম উই মুভড টু কন্টিনিউয়াস অ্যাসেসমেন্ট।", patternId: "U1.1" },
      { speaker_bn: "সহকর্মী", en: "The bottom line is, without political will, nothing will change.", bn: "মূল কথা হলো, রাজনৈতিক ইচ্ছা ছাড়া কিছুই বদলাবে না।", pronunciation_bn: "দা বটম লাইন ইজ, উইদাউট পলিটিক্যাল উইল, নাথিং উইল চেঞ্জ।", patternId: "R2.1" },
      { speaker_bn: "তুমি", en: "You've hit the nail on the head. That's exactly the issue.", bn: "একদম মাথায় পেরেক মেরেছো। এটাই আসল সমস্যা।", pronunciation_bn: "ইউভ হিট দা নেইল অন দা হেড। দ্যাটস এক্সাক্টলি দি ইশ্যু।" },
    ],
    patternsUsed: ["E1.1", "V6.1", "J7.1", "S8.1", "U1.1", "R2.1"],
  },

  // VC-12: Storytelling with humor
  {
    id: "vc-12",
    title_bn: "মজার গল্প বলা",
    title_en: "Telling a Funny Story",
    situation_bn: "তুমি বন্ধুদের সাথে বসে মজার একটা ঘটনা বলছো যেটা গতকাল বাসে হয়েছে।",
    icon: "😂",
    turns: [
      { speaker_bn: "তুমি", en: "You won't believe what happened to me yesterday!", bn: "গতকাল আমার সাথে কী হয়েছে বিশ্বাসই করবে না!", pronunciation_bn: "ইউ ওন্ট বিলিভ হোয়াট হ্যাপেন্ড টু মি ইয়েস্টারডে!", patternId: "P6.1" },
      { speaker_bn: "বন্ধু", en: "What? Tell us!", bn: "কী? বলো!", pronunciation_bn: "হোয়াট? টেল আস!" },
      { speaker_bn: "তুমি", en: "So, I was sitting on the bus, minding my own business...", bn: "তো, আমি বাসে বসে ছিলাম, নিজের কাজ নিয়ে ব্যস্ত...", pronunciation_bn: "সো, আই ওয়াজ সিটিং অন দা বাস, মাইন্ডিং মাই ওন বিজনেস...", patternId: "O1.1" },
      { speaker_bn: "তুমি", en: "When suddenly, this guy's phone rang with the loudest ringtone I have ever heard!", bn: "হঠাৎ, একজনের ফোন বাজলো এতো জোরে রিংটোন যে আমি জীবনে শুনিনি!", pronunciation_bn: "হোয়েন সাডেনলি, দিস গাইজ ফোন র্যাং উইদ দা লাউডেস্ট রিংটোন আই হ্যাভ এভার হার্ড!", patternId: "O5.1" },
      { speaker_bn: "বন্ধু", en: "No way! What was it?", bn: "না! কী ছিলো?", pronunciation_bn: "নো ওয়ে! হোয়াট ওয়াজ ইট?" },
      { speaker_bn: "তুমি", en: "It was a Bollywood song, and he just let it ring! As if nobody else was on the bus!", bn: "বলিউডের গান, আর উনি বাজতেই দিলেন! যেন বাসে আর কেউ নেই!", pronunciation_bn: "ইট ওয়াজ আ বলিউড সং, অ্যান্ড হি জাস্ট লেট ইট রিং! অ্যাজ ইফ নোবডি এলস ওয়াজ অন দা বাস!", patternId: "S17.1" },
      { speaker_bn: "তুমি", en: "What made it even funnier was that an old man next to him started singing along!", bn: "আরও মজার ব্যাপার হলো পাশের বুড়ো চাচা গানের সাথে গাইতে শুরু করলেন!", pronunciation_bn: "হোয়াট মেড ইট ইভেন ফানিয়ার ওয়াজ দ্যাট অ্যান ওল্ড ম্যান নেক্সট টু হিম স্টার্টেড সিঙ্গিং অ্যালং!", patternId: "R11.1" },
      { speaker_bn: "বন্ধু", en: "That is the funniest thing I have heard all week!", bn: "সারা সপ্তাহে এটাই সবচেয়ে মজার কথা শুনলাম!", pronunciation_bn: "দ্যাট ইজ দা ফানিয়েস্ট থিং আই হ্যাভ হার্ড অল উইক!", patternId: "P1.1" },
      { speaker_bn: "তুমি", en: "I know, right? The whole bus ended up laughing.", bn: "তাই না? পুরো বাস হাসতে শুরু করলো।", pronunciation_bn: "আই নো, রাইট? দা হোল বাস এন্ডেড আপ লাফিং।", patternId: "U4.1" },
    ],
    patternsUsed: ["P6.1", "O1.1", "O5.1", "S17.1", "R11.1", "P1.1", "U4.1"],
  },
];

// Helper functions

export function getConversationById(id: string): DialogueChain | undefined {
  return verificationConversations.find((c) => c.id === id);
}

export function getConversationsByLevel(levelId: number): DialogueChain[] {
  const start = (levelId - 1) * 2;
  return verificationConversations.slice(start, start + 2);
}
