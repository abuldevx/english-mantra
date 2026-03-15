// Master index of all categories with their slugs
// This allows us to map slugs to category IDs synchronously

export interface CategoryMeta {
  id: string;
  slug: string;
  name: string;
  name_bn: string;
  group: string;
  icon: string;
}

export const categoryMeta: CategoryMeta[] = [
  // GROUP A: Wanting, Needing & Preferences
  { id: "A1", slug: "expressing-wants-needs", name: "Expressing What You Want/Need", name_bn: "চাওয়া ও প্রয়োজন প্রকাশ", group: "A", icon: "🎯" },
  { id: "A2", slug: "asking-for-things", name: "Asking for Things", name_bn: "জিনিস চাওয়া", group: "A", icon: "🛒" },
  { id: "A3", slug: "asking-someone-to-do", name: "Asking Someone to Do Something", name_bn: "কাউকে কিছু করতে বলা", group: "A", icon: "🙏" },
  { id: "A4", slug: "asking-for-permission", name: "Asking for Permission", name_bn: "অনুমতি চাওয়া", group: "A", icon: "🚪" },
  { id: "A5", slug: "expressing-preferences", name: "Expressing Preferences", name_bn: "পছন্দ প্রকাশ", group: "A", icon: "⭐" },
  { id: "A6", slug: "expressing-priorities", name: "Expressing Priorities", name_bn: "অগ্রাধিকার প্রকাশ", group: "A", icon: "🥇" },
  { id: "A7", slug: "expressing-indifference", name: "Expressing Indifference", name_bn: "উদাসীনতা প্রকাশ", group: "A", icon: "😐" },
  { id: "A8", slug: "expressing-wishes-dreams", name: "Expressing Wishes and Dreams", name_bn: "ইচ্ছা ও স্বপ্ন প্রকাশ", group: "A", icon: "✨" },
  { id: "A9", slug: "expressing-regret", name: "Expressing Regret", name_bn: "আফসোস প্রকাশ", group: "A", icon: "😔" },
  { id: "A10", slug: "would-rather-had-better", name: "Would Rather / Had Better / Might As Well", name_bn: "বরং / উচিত / যেহেতু", group: "A", icon: "🤔" },

  // GROUP B: Describing People, Things & Situations
  { id: "B1", slug: "describing-people", name: "Describing People (Be/Have/Feel)", name_bn: "মানুষ বর্ণনা করা", group: "B", icon: "👤" },
  { id: "B2", slug: "sensory-verbs", name: "Describing with Linking/Sensory Verbs", name_bn: "সংবেদনশীল ক্রিয়া দিয়ে বর্ণনা", group: "B", icon: "👁️" },
  { id: "B3", slug: "there-is-are", name: "There Is/Are Patterns", name_bn: "আছে/নেই প্যাটার্ন", group: "B", icon: "📍" },
  { id: "B4", slug: "it-is-patterns", name: "It Is Patterns", name_bn: "এটা প্যাটার্ন", group: "B", icon: "💡" },
  { id: "B5", slug: "relative-clauses", name: "Relative Clauses (Who/Which/That)", name_bn: "সম্পর্কবাচক উপবাক্য", group: "B", icon: "🔗" },
  { id: "B6", slug: "cleft-sentences", name: "Cleft Sentences (Emphasis)", name_bn: "জোরদার বাক্য", group: "B", icon: "🎯" },
  { id: "B7", slug: "defining-explaining", name: "Defining and Explaining Things", name_bn: "সংজ্ঞায়িত ও ব্যাখ্যা করা", group: "B", icon: "📖" },
  { id: "B8", slug: "describing-appearance", name: "Describing Appearance", name_bn: "চেহারা বর্ণনা", group: "B", icon: "🪞" },
  { id: "B9", slug: "describing-personality", name: "Describing Personality & Character", name_bn: "ব্যক্তিত্ব ও চরিত্র বর্ণনা", group: "B", icon: "🧠" },
  { id: "B10", slug: "expressing-location", name: "Expressing Location & Position", name_bn: "অবস্থান প্রকাশ", group: "B", icon: "📌" },
  { id: "B11", slug: "expressing-possession", name: "Expressing Possession", name_bn: "অধিকার প্রকাশ", group: "B", icon: "🤲" },
  { id: "B12", slug: "describing-processes", name: "Describing Processes", name_bn: "প্রক্রিয়া বর্ণনা", group: "B", icon: "⚙️" },
  { id: "B13", slug: "quantifiers-amounts", name: "Quantifiers & Amounts", name_bn: "পরিমাণবাচক ও পরিমাণ", group: "B", icon: "🔢" },
  { id: "B14", slug: "numbers-measurements", name: "Numbers, Counting & Measurements", name_bn: "সংখ্যা, গণনা ও পরিমাপ", group: "B", icon: "📏" },
  { id: "B15", slug: "adjective-intensity", name: "Adjective Degree & Intensity", name_bn: "বিশেষণের মাত্রা ও তীব্রতা", group: "B", icon: "📊" },

  // GROUP C: Actions & Time Patterns
  { id: "C1", slug: "present-habits", name: "What You Regularly Do (Present Habits)", name_bn: "নিয়মিত যা করেন", group: "C", icon: "🔄" },
  { id: "C2", slug: "happening-now", name: "What Is Happening Now (Ongoing)", name_bn: "এখন যা হচ্ছে", group: "C", icon: "▶️" },
  { id: "C3", slug: "past-actions", name: "What Already Happened (Past)", name_bn: "যা ইতিমধ্যে ঘটেছে", group: "C", icon: "⏪" },
  { id: "C4", slug: "future-actions", name: "What Will Happen (Future)", name_bn: "যা ঘটবে", group: "C", icon: "⏩" },
  { id: "C5", slug: "experience-duration", name: "Experience & Duration (Have Done)", name_bn: "অভিজ্ঞতা ও সময়কাল", group: "C", icon: "✅" },
  { id: "C6", slug: "past-before-past", name: "Past Before Past (Had Done)", name_bn: "অতীতের আগের অতীত", group: "C", icon: "⏮️" },
  { id: "C7", slug: "past-habits", name: "Past Habits (Used To / Would)", name_bn: "অতীতের অভ্যাস", group: "C", icon: "🕰️" },
  { id: "C8", slug: "getting-used-to", name: "Getting Used To Things", name_bn: "অভ্যস্ত হওয়া", group: "C", icon: "🔁" },
  { id: "C9", slug: "future-arrangements", name: "Future Arrangements & Near Future", name_bn: "ভবিষ্যৎ পরিকল্পনা", group: "C", icon: "📅" },
  { id: "C10", slug: "future-progress-completion", name: "Future Progress & Completion", name_bn: "ভবিষ্যৎ অগ্রগতি ও সমাপ্তি", group: "C", icon: "🏁" },
  { id: "C11", slug: "passive-voice", name: "Passive (What Was/Is/Will Be Done)", name_bn: "কর্মবাচ্য", group: "C", icon: "🔀" },
  { id: "C12", slug: "causative-patterns", name: "Causative (Have/Get/Make/Let)", name_bn: "কারণবাচক প্যাটার্ন", group: "C", icon: "🎬" },
  { id: "C13", slug: "infinitive-vs-gerund", name: "Infinitive vs Gerund (Doing vs To Do)", name_bn: "ইনফিনিটিভ বনাম জেরান্ড", group: "C", icon: "⚖️" },
  { id: "C14", slug: "phrasal-verbs", name: "Phrasal Verb Patterns", name_bn: "ফ্রেজাল ভার্ব প্যাটার্ন", group: "C", icon: "🧩" },
  { id: "C15", slug: "get-patterns", name: "Get Patterns", name_bn: "গেট প্যাটার্ন", group: "C", icon: "🎯" },

  // GROUP D: Ability, Obligation & Possibility
  { id: "D1", slug: "can-cant-ability", name: "What You Can/Can't Do", name_bn: "যা পারেন/পারেন না", group: "D", icon: "💪" },
  { id: "D2", slug: "must-should-obligation", name: "What You Must/Should Do", name_bn: "যা করতে হবে/উচিত", group: "D", icon: "📌" },
  { id: "D3", slug: "expressing-possibility", name: "Expressing Possibility", name_bn: "সম্ভাবনা প্রকাশ", group: "D", icon: "🎲" },
  { id: "D4", slug: "certainty-uncertainty", name: "Certainty & Uncertainty", name_bn: "নিশ্চয়তা ও অনিশ্চয়তা", group: "D", icon: "🎯" },
  { id: "D5", slug: "necessity-lack", name: "Necessity & Lack of Necessity", name_bn: "প্রয়োজনীয়তা", group: "D", icon: "❗" },
  { id: "D6", slug: "prohibition-restriction", name: "Prohibition & Restriction", name_bn: "নিষেধ ও সীমাবদ্ধতা", group: "D", icon: "🚫" },
  { id: "D7", slug: "expressing-expectations", name: "Expressing Expectations", name_bn: "প্রত্যাশা প্রকাশ", group: "D", icon: "🔮" },

  // GROUP E: Opinions, Emotions & Attitudes
  { id: "E1", slug: "giving-opinions", name: "Giving Opinions", name_bn: "মতামত দেওয়া", group: "E", icon: "💭" },
  { id: "E2", slug: "agreeing-disagreeing", name: "Agreeing & Disagreeing", name_bn: "সম্মতি ও অসম্মতি", group: "E", icon: "🤝" },
  { id: "E3", slug: "likes-dislikes", name: "Likes, Dislikes & Interests", name_bn: "পছন্দ, অপছন্দ ও আগ্রহ", group: "E", icon: "❤️" },
  { id: "E4", slug: "expressing-surprise", name: "Expressing Surprise", name_bn: "বিস্ময় প্রকাশ", group: "E", icon: "😮" },
  { id: "E5", slug: "expressing-disappointment", name: "Expressing Disappointment", name_bn: "হতাশা প্রকাশ", group: "E", icon: "😞" },
  { id: "E6", slug: "expressing-worry", name: "Expressing Worry & Concern", name_bn: "চিন্তা ও উদ্বেগ", group: "E", icon: "😟" },
  { id: "E7", slug: "expressing-anger", name: "Expressing Anger & Frustration", name_bn: "রাগ ও হতাশা", group: "E", icon: "😤" },
  { id: "E8", slug: "expressing-happiness", name: "Expressing Happiness & Excitement", name_bn: "খুশি ও উত্তেজনা", group: "E", icon: "😊" },
  { id: "E9", slug: "expressing-sympathy", name: "Expressing Sympathy & Condolence", name_bn: "সহানুভূতি ও সমবেদনা", group: "E", icon: "🤗" },
  { id: "E10", slug: "satisfaction-dissatisfaction", name: "Satisfaction & Dissatisfaction", name_bn: "সন্তুষ্টি ও অসন্তুষ্টি", group: "E", icon: "👍" },
  { id: "E11", slug: "interest-boredom", name: "Interest & Boredom", name_bn: "আগ্রহ ও একঘেয়েমি", group: "E", icon: "🧐" },
  { id: "E12", slug: "confidence-doubt", name: "Confidence & Doubt", name_bn: "আত্মবিশ্বাস ও সন্দেহ", group: "E", icon: "🤔" },
  { id: "E13", slug: "expressing-relief", name: "Expressing Relief", name_bn: "স্বস্তি প্রকাশ", group: "E", icon: "😌" },
  { id: "E14", slug: "expressing-embarrassment", name: "Expressing Embarrassment & Shame", name_bn: "লজ্জা প্রকাশ", group: "E", icon: "😳" },
  { id: "E15", slug: "expressing-envy", name: "Expressing Envy & Jealousy", name_bn: "ঈর্ষা প্রকাশ", group: "E", icon: "😒" },

  // GROUP F: Suggestions, Offers & Invitations
  { id: "F1", slug: "making-suggestions", name: "Making Suggestions", name_bn: "পরামর্শ দেওয়া", group: "F", icon: "💡" },
  { id: "F2", slug: "making-offers", name: "Making Offers", name_bn: "প্রস্তাব দেওয়া", group: "F", icon: "🤲" },
  { id: "F3", slug: "accepting-declining-offers", name: "Accepting & Declining Offers", name_bn: "প্রস্তাব গ্রহণ ও প্রত্যাখ্যান", group: "F", icon: "✅" },
  { id: "F4", slug: "inviting-someone", name: "Inviting Someone", name_bn: "আমন্ত্রণ করা", group: "F", icon: "📩" },
  { id: "F5", slug: "accepting-declining-invitations", name: "Accepting & Declining Invitations", name_bn: "আমন্ত্রণ গ্রহণ ও প্রত্যাখ্যান", group: "F", icon: "📨" },
  { id: "F6", slug: "warning-cautioning", name: "Warning & Cautioning", name_bn: "সতর্কতা", group: "F", icon: "⚠️" },
  { id: "F7", slug: "encouraging-motivating", name: "Encouraging & Motivating", name_bn: "উৎসাহ ও অনুপ্রেরণা", group: "F", icon: "💪" },

  // GROUP G: All Question Types
  { id: "G1", slug: "yes-no-questions", name: "Yes/No Questions", name_bn: "হ্যাঁ/না প্রশ্ন", group: "G", icon: "❓" },
  { id: "G2", slug: "wh-questions", name: "WH- Information Questions", name_bn: "WH- তথ্য প্রশ্ন", group: "G", icon: "🔍" },
  { id: "G3", slug: "indirect-questions", name: "Embedded/Indirect Questions", name_bn: "পরোক্ষ প্রশ্ন", group: "G", icon: "🤔" },
  { id: "G4", slug: "tag-questions", name: "Tag Questions", name_bn: "ট্যাগ প্রশ্ন", group: "G", icon: "🏷️" },
  { id: "G5", slug: "frequency-questions", name: "Asking About Frequency", name_bn: "কতবার জিজ্ঞাসা", group: "G", icon: "🔄" },
  { id: "G6", slug: "duration-questions", name: "Asking About Duration", name_bn: "সময়কাল জিজ্ঞাসা", group: "G", icon: "⏱️" },
  { id: "G7", slug: "quantity-questions", name: "Asking About Quantity & Amount", name_bn: "পরিমাণ জিজ্ঞাসা", group: "G", icon: "🔢" },
  { id: "G8", slug: "ability-knowledge-questions", name: "Asking About Ability & Knowledge", name_bn: "সক্ষমতা জিজ্ঞাসা", group: "G", icon: "🧠" },
  { id: "G9", slug: "opinion-advice-questions", name: "Asking for Opinions & Advice", name_bn: "মতামত ও পরামর্শ চাওয়া", group: "G", icon: "💬" },
  { id: "G10", slug: "explanation-questions", name: "Asking for Explanations", name_bn: "ব্যাখ্যা চাওয়া", group: "G", icon: "📖" },
  { id: "G11", slug: "confirmation-questions", name: "Asking for Confirmation", name_bn: "নিশ্চিতকরণ চাওয়া", group: "G", icon: "✅" },
  { id: "G12", slug: "repetition-clarification", name: "Asking for Repetition & Clarification", name_bn: "পুনরাবৃত্তি ও স্পষ্টীকরণ", group: "G", icon: "🔁" },
  { id: "G13", slug: "rhetorical-questions", name: "Rhetorical Questions", name_bn: "অলংকারিক প্রশ্ন", group: "G", icon: "🎭" },
  { id: "G14", slug: "direction-instruction-questions", name: "Asking for Directions & Instructions", name_bn: "দিকনির্দেশ ও নির্দেশনা", group: "G", icon: "🗺️" },
  { id: "G15", slug: "choice-questions", name: "Choice Questions", name_bn: "পছন্দ প্রশ্ন", group: "G", icon: "🔀" },

  // GROUP H: Social Interactions
  { id: "H1", slug: "greetings-goodbyes", name: "Greeting & Saying Goodbye", name_bn: "অভিবাদন ও বিদায়", group: "H", icon: "👋" },
  { id: "H2", slug: "introductions", name: "Introducing Yourself & Others", name_bn: "পরিচয় দেওয়া", group: "H", icon: "🤝" },
  { id: "H3", slug: "starting-conversations", name: "Starting & Sustaining Conversations", name_bn: "কথোপকথন শুরু করা", group: "H", icon: "💬" },
  { id: "H4", slug: "thanking-responding", name: "Thanking & Responding", name_bn: "ধন্যবাদ দেওয়া ও সাড়া দেওয়া", group: "H", icon: "🙏" },
  { id: "H5", slug: "apologizing-responding", name: "Apologizing & Responding", name_bn: "ক্ষমা চাওয়া ও সাড়া দেওয়া", group: "H", icon: "😊" },
  { id: "H6", slug: "making-small-talk", name: "Making Small Talk", name_bn: "হালকা কথা বলা", group: "H", icon: "☕" },
  { id: "H7", slug: "congratulating-praising", name: "Congratulating & Praising", name_bn: "অভিনন্দন ও প্রশংসা", group: "H", icon: "🎉" },
  { id: "H8", slug: "complimenting", name: "Complimenting", name_bn: "প্রশংসা করা", group: "H", icon: "⭐" },
  { id: "H9", slug: "interrupting-politely", name: "Interrupting Politely", name_bn: "ভদ্রভাবে বাধা দেওয়া", group: "H", icon: "✋" },
  { id: "H10", slug: "changing-topics", name: "Changing & Managing Topics", name_bn: "বিষয় পরিবর্তন", group: "H", icon: "🔀" },
  { id: "H11", slug: "ending-conversations", name: "Ending a Conversation", name_bn: "কথোপকথন শেষ করা", group: "H", icon: "👋" },
  { id: "H12", slug: "listener-responses", name: "Listener Responses", name_bn: "শুনে সায় দেওয়া", group: "H", icon: "👂" },
  { id: "H13", slug: "self-correction-conversation", name: "Self-Correction in Conversation", name_bn: "কথার মাঝে নিজেকে সংশোধন করা", group: "H", icon: "🔄" },

  // GROUP I: Comparing & Contrasting
  { id: "I1", slug: "basic-comparisons", name: "Basic Comparisons", name_bn: "সাধারণ তুলনা", group: "I", icon: "⚖️" },
  { id: "I2", slug: "as-as-patterns", name: "As...As Patterns", name_bn: "যেমন...তেমন প্যাটার্ন", group: "I", icon: "🟰" },
  { id: "I3", slug: "so-that-such-that", name: "So...That / Such...That", name_bn: "এত...যে প্যাটার্ন", group: "I", icon: "📊" },
  { id: "I4", slug: "too-to-enough-to", name: "Too...To / Enough To", name_bn: "অত্যন্ত...যে / যথেষ্ট", group: "I", icon: "📏" },
  { id: "I5", slug: "expressing-similarity", name: "Expressing Similarity", name_bn: "মিল প্রকাশ", group: "I", icon: "🔗" },
  { id: "I6", slug: "expressing-difference", name: "Expressing Difference", name_bn: "পার্থক্য প্রকাশ", group: "I", icon: "↔️" },
  { id: "I7", slug: "proportion-degree", name: "Proportion & Degree", name_bn: "অনুপাত ও মাত্রা", group: "I", icon: "📈" },
  { id: "I8", slug: "equality-worth", name: "Equality & Worth", name_bn: "সমতা ও মূল্য", group: "I", icon: "💎" },
  { id: "I9", slug: "expressing-alternatives", name: "Expressing Alternatives", name_bn: "বিকল্প প্রকাশ", group: "I", icon: "🔀" },
  { id: "I10", slug: "expressing-addition", name: "Expressing Addition", name_bn: "সংযোজন প্রকাশ", group: "I", icon: "➕" },

  // GROUP J: Explaining, Reasoning & Conditions
  { id: "J1", slug: "giving-reasons", name: "Giving Reasons (Because/Since)", name_bn: "কারণ দেওয়া", group: "J", icon: "💡" },
  { id: "J2", slug: "showing-results", name: "Showing Results (So/Therefore)", name_bn: "ফলাফল দেখানো", group: "J", icon: "➡️" },
  { id: "J3", slug: "concession-contrast", name: "Concession & Contrast", name_bn: "ছাড় ও বৈপরীত্য", group: "J", icon: "🔄" },
  { id: "J4", slug: "expressing-purpose", name: "Expressing Purpose", name_bn: "উদ্দেশ্য প্রকাশ", group: "J", icon: "🎯" },
  { id: "J5", slug: "giving-examples", name: "Giving Examples", name_bn: "উদাহরণ দেওয়া", group: "J", icon: "📋" },
  { id: "J6", slug: "generalizing-specifying", name: "Generalizing & Specifying", name_bn: "সাধারণীকরণ ও নির্দিষ্টকরণ", group: "J", icon: "🔍" },
  { id: "J7", slug: "real-conditions", name: "Real Conditions (If/Unless)", name_bn: "বাস্তব শর্ত", group: "J", icon: "🔀" },
  { id: "J8", slug: "unreal-present-conditions", name: "Unreal Present Conditions", name_bn: "অবাস্তব বর্তমান শর্ত", group: "J", icon: "💭" },
  { id: "J9", slug: "unreal-past-conditions", name: "Unreal Past Conditions", name_bn: "অবাস্তব অতীত শর্ত", group: "J", icon: "⏪" },
  { id: "J10", slug: "mixed-conditions", name: "Mixed Conditions", name_bn: "মিশ্র শর্ত", group: "J", icon: "🔀" },
  { id: "J11", slug: "expressing-exceptions", name: "Expressing Exceptions", name_bn: "ব্যতিক্রম প্রকাশ", group: "J", icon: "❌" },
  { id: "J12", slug: "sequencing-ordering", name: "Sequencing & Ordering", name_bn: "ক্রমবিন্যাস", group: "J", icon: "📊" },

  // GROUP K: Reported Speech & Communication
  { id: "K1", slug: "reporting-statements", name: "Reporting Statements", name_bn: "বিবৃতি রিপোর্ট করা", group: "K", icon: "🗣️" },
  { id: "K2", slug: "reporting-questions", name: "Reporting Questions", name_bn: "প্রশ্ন রিপোর্ট করা", group: "K", icon: "❓" },
  { id: "K3", slug: "quoting-directly", name: "Quoting Directly", name_bn: "সরাসরি উদ্ধৃতি", group: "K", icon: "💬" },
  { id: "K4", slug: "reporting-commands", name: "Reporting Commands & Requests", name_bn: "আদেশ ও অনুরোধ রিপোর্ট", group: "K", icon: "📢" },
  { id: "K5", slug: "saying-telling", name: "Saying & Telling Patterns", name_bn: "বলা ও জানানো প্যাটার্ন", group: "K", icon: "🗨️" },
  { id: "K6", slug: "promising-committing", name: "Promising & Committing", name_bn: "প্রতিশ্রুতি দেওয়া", group: "K", icon: "🤝" },
  { id: "K7", slug: "complaining", name: "Complaining", name_bn: "অভিযোগ করা", group: "K", icon: "😤" },
  { id: "K8", slug: "short-responses", name: "Short Responses (So do I / Neither do I)", name_bn: "সংক্ষিপ্ত সাড়া", group: "K", icon: "💬" },
  { id: "K9", slug: "giving-responding-news", name: "Giving & Responding to News", name_bn: "খবর দেওয়া ও সাড়া দেওয়া", group: "K", icon: "📰" },
  { id: "K10", slug: "paraphrasing-summarizing", name: "Paraphrasing & Summarizing", name_bn: "পুনঃউক্তি ও সারসংক্ষেপ", group: "K", icon: "📝" },

  // GROUP L: Time Expression Patterns
  { id: "L1", slug: "time-prepositions", name: "Time Prepositions (At/In/On)", name_bn: "সময়ের অব্যয়", group: "L", icon: "⏰" },
  { id: "L2", slug: "expressing-duration", name: "Expressing Duration", name_bn: "সময়কাল প্রকাশ", group: "L", icon: "⏳" },
  { id: "L3", slug: "expressing-frequency", name: "Expressing Frequency", name_bn: "কতবার প্রকাশ", group: "L", icon: "🔄" },
  { id: "L4", slug: "timing-relationships", name: "Timing Relationships", name_bn: "সময়ের সম্পর্ক", group: "L", icon: "🔗" },
  { id: "L5", slug: "deadlines-schedules", name: "Deadlines & Schedules", name_bn: "সময়সীমা ও সময়সূচী", group: "L", icon: "📅" },
  { id: "L6", slug: "clock-calendar", name: "Clock & Calendar", name_bn: "ঘড়ি ও ক্যালেন্ডার", group: "L", icon: "🕐" },

  // GROUP M: Place & Preposition Patterns
  { id: "M1", slug: "location-prepositions", name: "Location Prepositions (At/In/On)", name_bn: "অবস্থানের অব্যয়", group: "M", icon: "📍" },
  { id: "M2", slug: "movement-direction", name: "Movement & Direction", name_bn: "চলাচল ও দিক", group: "M", icon: "🚶" },
  { id: "M3", slug: "expressing-distance", name: "Expressing Distance", name_bn: "দূরত্ব প্রকাশ", group: "M", icon: "📏" },
  { id: "M4", slug: "where-things-happen", name: "Where Things Happen", name_bn: "যেখানে ঘটনা ঘটে", group: "M", icon: "🗺️" },
  { id: "M5", slug: "origin-destination", name: "Origin & Destination", name_bn: "উৎপত্তি ও গন্তব্য", group: "M", icon: "✈️" },
  { id: "M6", slug: "transport-prepositions", name: "Transport Prepositions", name_bn: "পরিবহন অব্যয়", group: "M", icon: "🚌" },
  { id: "M7", slug: "giving-directions", name: "Giving Directions", name_bn: "দিকনির্দেশ দেওয়া", group: "M", icon: "🧭" },
  { id: "M8", slug: "indoor-locations", name: "Indoor Locations", name_bn: "অভ্যন্তরীণ অবস্থান", group: "M", icon: "🏠" },

  // GROUP N: Articles, Determiners & Quantifiers
  { id: "N1", slug: "article-patterns", name: "Article Patterns (A/An/The/Zero)", name_bn: "আর্টিকেল প্যাটার্ন", group: "N", icon: "🔤" },
  { id: "N2", slug: "quantifier-patterns", name: "Quantifier Patterns", name_bn: "পরিমাণবাচক প্যাটার্ন", group: "N", icon: "🔢" },
  { id: "N3", slug: "demonstrative-patterns", name: "Demonstrative Patterns", name_bn: "নির্দেশক প্যাটার্ন", group: "N", icon: "👉" },
  { id: "N4", slug: "possessive-patterns", name: "Possessive Patterns", name_bn: "অধিকারবাচক প্যাটার্ন", group: "N", icon: "🤲" },
  { id: "N5", slug: "indefinite-pronouns", name: "Indefinite Pronouns", name_bn: "অনির্দিষ্ট সর্বনাম", group: "N", icon: "❓" },
  { id: "N6", slug: "another-other", name: "Another/Other/The Other", name_bn: "আরেকটি/অন্য/অপরটি", group: "N", icon: "🔀" },
  { id: "N7", slug: "one-as-pronoun", name: "One as Pronoun", name_bn: "সর্বনাম হিসেবে One", group: "N", icon: "1️⃣" },
  { id: "N8", slug: "degree-nuance-expressions", name: "Degree & Nuance Expressions", name_bn: "মাত্রা ও সূক্ষ্মতার ভাব প্রকাশ", group: "N", icon: "📊" },

  // GROUP O: Narrating & Storytelling
  { id: "O1", slug: "starting-a-story", name: "Starting a Story", name_bn: "গল্প শুরু করা", group: "O", icon: "📖" },
  { id: "O2", slug: "sequencing-events", name: "Sequencing Events", name_bn: "ঘটনা সাজানো", group: "O", icon: "📊" },
  { id: "O3", slug: "adding-background", name: "Adding Background", name_bn: "পটভূমি যোগ করা", group: "O", icon: "🎨" },
  { id: "O4", slug: "simultaneous-actions", name: "Simultaneous Actions", name_bn: "একসাথে ঘটনা", group: "O", icon: "⏸️" },
  { id: "O5", slug: "unexpected-events", name: "Unexpected Events", name_bn: "অপ্রত্যাশিত ঘটনা", group: "O", icon: "😮" },
  { id: "O6", slug: "reporting-hearsay", name: "Reporting Hearsay & Rumors", name_bn: "শোনা কথা রিপোর্ট", group: "O", icon: "👂" },
  { id: "O7", slug: "describing-experiences", name: "Describing Experiences", name_bn: "অভিজ্ঞতা বর্ণনা", group: "O", icon: "🌟" },
  { id: "O8", slug: "how-something-happened", name: "How Something Happened", name_bn: "কিভাবে ঘটলো", group: "O", icon: "🔍" },
  { id: "O9", slug: "describing-changes", name: "Describing Changes", name_bn: "পরিবর্তন বর্ণনা", group: "O", icon: "🔄" },
  { id: "O10", slug: "quoting-sayings", name: "Quoting Sayings & Proverbs", name_bn: "প্রবাদ উদ্ধৃতি", group: "O", icon: "💬" },

  // GROUP P: Exclamations & Emphasis
  { id: "P1", slug: "exclamatory-patterns", name: "Exclamatory Patterns", name_bn: "বিস্ময়সূচক প্যাটার্ন", group: "P", icon: "❗" },
  { id: "P2", slug: "emphatic-do-does-did", name: "Emphatic Do/Does/Did", name_bn: "জোরদার Do/Does/Did", group: "P", icon: "💪" },
  { id: "P3", slug: "emphasizing-adverbs", name: "Emphasizing with Adverbs", name_bn: "ক্রিয়া-বিশেষণ দিয়ে জোর", group: "P", icon: "📢" },
  { id: "P4", slug: "emphatic-inversion", name: "Emphatic Inversion", name_bn: "জোরদার বিপরীতকরণ", group: "P", icon: "🔃" },
  { id: "P5", slug: "strong-agreement", name: "Strong Agreement", name_bn: "দৃঢ় সম্মতি", group: "P", icon: "✅" },
  { id: "P6", slug: "disbelief-amazement", name: "Disbelief & Amazement", name_bn: "অবিশ্বাস ও বিস্ময়", group: "P", icon: "🤯" },
  { id: "P7", slug: "understating-hedging", name: "Understating (Hedging)", name_bn: "কম বলা", group: "P", icon: "🤏" },

  // GROUP Q: Advice, Instructions & Commands
  { id: "Q1", slug: "giving-advice", name: "Giving Advice", name_bn: "পরামর্শ দেওয়া", group: "Q", icon: "💡" },
  { id: "Q2", slug: "giving-instructions", name: "Giving Instructions", name_bn: "নির্দেশনা দেওয়া", group: "Q", icon: "📋" },
  { id: "Q3", slug: "orders-commands", name: "Orders & Commands", name_bn: "আদেশ", group: "Q", icon: "📢" },
  { id: "Q4", slug: "making-rules", name: "Making Rules", name_bn: "নিয়ম তৈরি", group: "Q", icon: "📏" },
  { id: "Q5", slug: "giving-permission", name: "Giving Permission", name_bn: "অনুমতি দেওয়া", group: "Q", icon: "✅" },
  { id: "Q6", slug: "refusing-permission", name: "Refusing Permission", name_bn: "অনুমতি প্রত্যাখ্যান", group: "Q", icon: "🚫" },
  { id: "Q7", slug: "expressing-obligation", name: "Expressing Obligation & Duty", name_bn: "কর্তব্য প্রকাশ", group: "Q", icon: "📌" },
  { id: "Q8", slug: "expressing-lack-obligation", name: "Expressing Lack of Obligation", name_bn: "বাধ্যবাধকতার অভাব", group: "Q", icon: "🆓" },

  // GROUP R: Logical & Discourse Patterns
  { id: "R1", slug: "listing-enumerating", name: "Listing & Enumerating", name_bn: "তালিকা করা", group: "R", icon: "📋" },
  { id: "R2", slug: "drawing-conclusions", name: "Drawing Conclusions", name_bn: "সিদ্ধান্তে আসা", group: "R", icon: "🎯" },
  { id: "R3", slug: "expressing-assumptions", name: "Expressing Assumptions", name_bn: "অনুমান প্রকাশ", group: "R", icon: "💭" },
  { id: "R4", slug: "correcting-misunderstandings", name: "Correcting Misunderstandings", name_bn: "ভুল বোঝাবুঝি সংশোধন", group: "R", icon: "✏️" },
  { id: "R5", slug: "adding-information", name: "Adding Information", name_bn: "তথ্য যোগ করা", group: "R", icon: "➕" },
  { id: "R6", slug: "cause-effect-chains", name: "Cause & Effect Chains", name_bn: "কারণ ও ফলাফল", group: "R", icon: "🔗" },
  { id: "R7", slug: "expressing-approximation", name: "Expressing Approximation", name_bn: "আনুমানিক প্রকাশ", group: "R", icon: "🎯" },
  { id: "R8", slug: "hedging-softening", name: "Hedging & Softening", name_bn: "নমনীয়করণ", group: "R", icon: "🤏" },
  { id: "R9", slug: "inclusion-exclusion", name: "Inclusion & Exclusion", name_bn: "অন্তর্ভুক্তি ও বর্জন", group: "R", icon: "🔀" },
  { id: "R10", slug: "otherwise-or-else", name: "Otherwise/Or Else", name_bn: "নতুবা/অন্যথায়", group: "R", icon: "⚠️" },
  { id: "R11", slug: "even-patterns", name: "Even Patterns", name_bn: "\"Even\" প্যাটার্ন", group: "R", icon: "❗" },
  { id: "R12", slug: "only-patterns", name: "Only Patterns", name_bn: "\"Only\" প্যাটার্ন", group: "R", icon: "☝️" },
  { id: "R13", slug: "no-matter-patterns", name: "No Matter Patterns", name_bn: "\"যাই হোক\" প্যাটার্ন", group: "R", icon: "🤷" },
  { id: "R14", slug: "qualifying-statements", name: "Qualifying Statements", name_bn: "শর্তসাপেক্ষ বিবৃতি", group: "R", icon: "⚖️" },
  { id: "R15", slug: "expressing-importance", name: "Expressing Importance", name_bn: "গুরুত্ব প্রকাশ", group: "R", icon: "⭐" },
  { id: "R16", slug: "conversation-fillers", name: "Conversation Fillers", name_bn: "কথার ফাঁকে ফাঁকে বলা কথা", group: "R", icon: "🗨️" },

  // GROUP S: Advanced Structural Patterns
  { id: "S1", slug: "non-defining-relative", name: "Non-Defining Relative Clauses", name_bn: "অতিরিক্ত তথ্য উপবাক্য", group: "S", icon: "🔗" },
  { id: "S2", slug: "participle-clauses", name: "Participle Clauses", name_bn: "কৃদন্ত উপবাক্য", group: "S", icon: "📝" },
  { id: "S3", slug: "subjunctive-patterns", name: "Subjunctive Patterns", name_bn: "সাবজাংটিভ প্যাটার্ন", group: "S", icon: "🎭" },
  { id: "S4", slug: "gerund-as-subject", name: "Gerund as Subject", name_bn: "কর্তা হিসেবে জেরান্ড", group: "S", icon: "📌" },
  { id: "S5", slug: "ellipsis-substitution", name: "Ellipsis & Substitution", name_bn: "লোপ ও প্রতিস্থাপন", group: "S", icon: "✂️" },
  { id: "S6", slug: "noun-clause-patterns", name: "Noun Clause Patterns", name_bn: "বিশেষ্য উপবাক্য", group: "S", icon: "📦" },
  { id: "S7", slug: "appositive-patterns", name: "Appositive Patterns", name_bn: "সমার্থক প্যাটার্ন", group: "S", icon: "🔗" },
  { id: "S8", slug: "correlative-conjunctions", name: "Correlative Conjunctions", name_bn: "যুগ্ম সংযোজন", group: "S", icon: "🔀" },
  { id: "S9", slug: "what-how-as-subject", name: "What/How as Subject", name_bn: "কর্তা হিসেবে What/How", group: "S", icon: "❓" },
  { id: "S10", slug: "it-preparatory-subject", name: "It as Preparatory Subject", name_bn: "প্রস্তুতিমূলক It", group: "S", icon: "💡" },
  { id: "S11", slug: "double-object-patterns", name: "Double Object Patterns", name_bn: "দ্বৈত কর্ম প্যাটার্ন", group: "S", icon: "🎁" },
  { id: "S12", slug: "verb-object-complement", name: "Verb + Object + Complement", name_bn: "ক্রিয়া + কর্ম + পূরক", group: "S", icon: "🧩" },
  { id: "S13", slug: "complex-infinitive", name: "Complex Infinitive", name_bn: "জটিল ইনফিনিটিভ", group: "S", icon: "🔗" },
  { id: "S14", slug: "seem-appear-turn-out", name: "Seem/Appear/Turn Out", name_bn: "মনে হয়/দেখা যায়", group: "S", icon: "👁️" },
  { id: "S15", slug: "wish-patterns-complete", name: "Wish Patterns (Complete)", name_bn: "ইচ্ছা প্যাটার্ন (সম্পূর্ণ)", group: "S", icon: "⭐" },
  { id: "S16", slug: "rather-patterns-extended", name: "Rather Patterns (Extended)", name_bn: "বরং প্যাটার্ন (বিস্তৃত)", group: "S", icon: "🔀" },
  { id: "S17", slug: "as-if-as-though", name: "As If / As Though", name_bn: "যেন/মনে হয় যেন", group: "S", icon: "🎭" },
  { id: "S18", slug: "have-something-done", name: "Have Something Done", name_bn: "কিছু করানো", group: "S", icon: "🔧" },
  { id: "S19", slug: "about-to-on-verge", name: "About To / On the Verge Of", name_bn: "করতে যাচ্ছি", group: "S", icon: "⏰" },
  { id: "S20", slug: "tend-to-likely-to", name: "Tend To / Be Likely To", name_bn: "প্রবণতা/সম্ভাবনা", group: "S", icon: "📊" },

  // GROUP T: Situational Patterns
  { id: "T1", slug: "asking-giving-information", name: "Asking for & Giving Information", name_bn: "তথ্য চাওয়া ও দেওয়া", group: "T", icon: "ℹ️" },
  { id: "T2", slug: "appointments-arrangements", name: "Appointments & Arrangements", name_bn: "অ্যাপয়েন্টমেন্ট ও ব্যবস্থা", group: "T", icon: "📅" },
  { id: "T3", slug: "ordering-buying", name: "Ordering & Buying", name_bn: "অর্ডার ও কেনাকাটা", group: "T", icon: "🛒" },
  { id: "T4", slug: "phone-call-patterns", name: "Phone Call Patterns", name_bn: "ফোন কল প্যাটার্ন", group: "T", icon: "📞" },
  { id: "T5", slug: "email-messaging", name: "Email/Messaging Patterns", name_bn: "ইমেইল/মেসেজ প্যাটার্ন", group: "T", icon: "📧" },
  { id: "T6", slug: "health-sickness", name: "Health & Sickness", name_bn: "স্বাস্থ্য ও অসুস্থতা", group: "T", icon: "🏥" },
  { id: "T7", slug: "weather-patterns", name: "Weather", name_bn: "আবহাওয়া", group: "T", icon: "🌤️" },
  { id: "T8", slug: "work-jobs", name: "Work & Jobs", name_bn: "কাজ ও চাকরি", group: "T", icon: "💼" },
  { id: "T9", slug: "education-learning", name: "Education & Learning", name_bn: "শিক্ষা ও শেখা", group: "T", icon: "📚" },
  { id: "T10", slug: "cost-price-value", name: "Cost, Price & Value", name_bn: "খরচ, দাম ও মূল্য", group: "T", icon: "💰" },
  { id: "T11", slug: "food-eating", name: "Food & Eating", name_bn: "খাবার ও খাওয়া", group: "T", icon: "🍽️" },
  { id: "T12", slug: "technology", name: "Technology", name_bn: "প্রযুক্তি", group: "T", icon: "💻" },
  { id: "T13", slug: "travel", name: "Travel", name_bn: "ভ্রমণ", group: "T", icon: "✈️" },
  { id: "T14", slug: "relationships", name: "Relationships", name_bn: "সম্পর্ক", group: "T", icon: "❤️" },
  { id: "T15", slug: "plans-goals", name: "Plans & Goals", name_bn: "পরিকল্পনা ও লক্ষ্য", group: "T", icon: "🎯" },
  { id: "T16", slug: "negotiating-bargaining", name: "Negotiating & Bargaining", name_bn: "দরকষাকষি", group: "T", icon: "🤝" },
  { id: "T17", slug: "making-predictions", name: "Making Predictions", name_bn: "ভবিষ্যদ্বাণী করা", group: "T", icon: "🔮" },
  { id: "T18", slug: "speculating-present", name: "Speculating About Present", name_bn: "বর্তমান সম্পর্কে অনুমান", group: "T", icon: "🤔" },
  { id: "T19", slug: "speculating-past", name: "Speculating About Past", name_bn: "অতীত সম্পর্কে অনুমান", group: "T", icon: "🕰️" },
  { id: "T20", slug: "habits-routines", name: "Habits & Routines", name_bn: "অভ্যাস ও রুটিন", group: "T", icon: "🔄" },
  { id: "T21", slug: "sleep-patterns", name: "Sleep", name_bn: "ঘুম", group: "T", icon: "😴" },
  { id: "T22", slug: "physical-sensations", name: "Physical Sensations", name_bn: "শারীরিক অনুভূতি", group: "T", icon: "🤒" },
  { id: "T23", slug: "age-life-stages", name: "Age & Life Stages", name_bn: "বয়স ও জীবনের ধাপ", group: "T", icon: "👶" },
  { id: "T24", slug: "ability-progress", name: "Ability Progress", name_bn: "সক্ষমতার অগ্রগতি", group: "T", icon: "📈" },
  { id: "T25", slug: "memories", name: "Memories", name_bn: "স্মৃতি", group: "T", icon: "🧠" },
  { id: "T26", slug: "expressing-hope", name: "Expressing Hope", name_bn: "আশা প্রকাশ", group: "T", icon: "🌟" },
  { id: "T27", slug: "expressing-fear", name: "Expressing Fear", name_bn: "ভয় প্রকাশ", group: "T", icon: "😨" },
  { id: "T28", slug: "problems-solutions", name: "Problems & Solutions", name_bn: "সমস্যা ও সমাধান", group: "T", icon: "🔧" },
  { id: "T29", slug: "opinions-past-events", name: "Opinions About Past Events", name_bn: "অতীত ঘটনা সম্পর্কে মতামত", group: "T", icon: "💭" },
  { id: "T30", slug: "readiness-preparedness", name: "Readiness & Preparedness", name_bn: "প্রস্তুতি", group: "T", icon: "🏁" },
  { id: "T31", slug: "banking-money", name: "Banking & Money", name_bn: "ব্যাংকিং ও টাকা", group: "T", icon: "🏦" },
  { id: "T32", slug: "emergency-situations", name: "Emergency Situations", name_bn: "জরুরি পরিস্থিতি", group: "T", icon: "🚨" },
  { id: "T33", slug: "housing-rent", name: "Housing & Rent", name_bn: "বাসস্থান ও ভাড়া", group: "T", icon: "🏠" },
  { id: "T34", slug: "social-media-texting", name: "Social Media & Texting", name_bn: "সোশ্যাল মিডিয়া ও টেক্সটিং", group: "T", icon: "📱" },
  { id: "T35", slug: "driving-traffic", name: "Driving & Traffic", name_bn: "গাড়ি চালানো ও ট্রাফিক", group: "T", icon: "🚗" },
  { id: "T36", slug: "high-frequency-fixed-phrases", name: "High-Frequency Fixed Phrases", name_bn: "সবচেয়ে বেশি ব্যবহৃত কথা", group: "T", icon: "💬" },

  // GROUP U: Idiom-Based Structural Patterns
  { id: "U1", slug: "its-time-patterns", name: "It's Time Patterns", name_bn: "সময় হয়েছে প্যাটার্ন", group: "U", icon: "⏰" },
  { id: "U2", slug: "no-use-no-point", name: "No Use / No Point", name_bn: "লাভ নেই", group: "U", icon: "🚫" },
  { id: "U3", slug: "cant-help-cant-stand", name: "Can't Help / Can't Stand", name_bn: "থামাতে পারি না / সহ্য করতে পারি না", group: "U", icon: "😩" },
  { id: "U4", slug: "end-up-turn-out", name: "End Up / Turn Out", name_bn: "শেষ পর্যন্ত / প্রমাণিত হওয়া", group: "U", icon: "🔚" },
  { id: "U5", slug: "make-sure-make-sense", name: "Make Sure / Make Sense", name_bn: "নিশ্চিত করা / অর্থবোধক হওয়া", group: "U", icon: "✅" },
  { id: "U6", slug: "take-patterns", name: "Take Patterns", name_bn: "Take প্যাটার্ন", group: "U", icon: "🤲" },
  { id: "U7", slug: "keep-patterns", name: "Keep Patterns", name_bn: "Keep প্যাটার্ন", group: "U", icon: "🔄" },
  { id: "U8", slug: "come-patterns", name: "Come Patterns", name_bn: "Come প্যাটার্ন", group: "U", icon: "🚶" },
  { id: "U9", slug: "go-patterns", name: "Go Patterns", name_bn: "Go প্যাটার্ন", group: "U", icon: "🏃" },
  { id: "U10", slug: "put-patterns", name: "Put Patterns", name_bn: "Put প্যাটার্ন", group: "U", icon: "📥" },
  { id: "U11", slug: "do-vs-make", name: "Do vs Make Distinction", name_bn: "Do বনাম Make", group: "U", icon: "⚖️" },
  { id: "U12", slug: "run-patterns", name: "Run Patterns", name_bn: "Run প্যাটার্ন", group: "U", icon: "🏃" },
  { id: "U13", slug: "look-patterns", name: "Look Patterns", name_bn: "Look প্যাটার্ন", group: "U", icon: "👀" },
  { id: "U14", slug: "have-patterns", name: "Have Patterns", name_bn: "Have প্যাটার্ন", group: "U", icon: "🤲" },
  { id: "U15", slug: "give-patterns", name: "Give Patterns", name_bn: "Give প্যাটার্ন", group: "U", icon: "🎁" },

  // GROUP V: Politeness & Register
  { id: "V1", slug: "formal-requests", name: "Formal Requests", name_bn: "আনুষ্ঠানিক অনুরোধ", group: "V", icon: "🎩" },
  { id: "V2", slug: "formal-email-openings", name: "Formal Email Openings", name_bn: "আনুষ্ঠানিক ইমেইল শুরু", group: "V", icon: "📧" },
  { id: "V3", slug: "formal-email-closings", name: "Formal Email Closings", name_bn: "আনুষ্ঠানিক ইমেইল শেষ", group: "V", icon: "📨" },
  { id: "V4", slug: "softening-negative", name: "Softening Negative Messages", name_bn: "নেতিবাচক বার্তা নরমকরণ", group: "V", icon: "🤝" },
  { id: "V5", slug: "hedging-opinions", name: "Hedging Opinions", name_bn: "মতামত নমনীয়করণ", group: "V", icon: "🤔" },
  { id: "V6", slug: "polite-disagreement", name: "Polite Disagreement", name_bn: "ভদ্র অসম্মতি", group: "V", icon: "🙅" },
  { id: "V7", slug: "indirect-softened", name: "Indirect/Softened Statements", name_bn: "পরোক্ষ/নরম বিবৃতি", group: "V", icon: "💬" },
  { id: "V8", slug: "formal-gratitude", name: "Formal Gratitude", name_bn: "আনুষ্ঠানিক কৃতজ্ঞতা", group: "V", icon: "🙏" },
  { id: "V9", slug: "casual-slang", name: "Casual/Slang Patterns", name_bn: "অনানুষ্ঠানিক/স্ল্যাং", group: "V", icon: "😎" },
  { id: "V10", slug: "sarcasm-irony", name: "Sarcasm & Irony", name_bn: "ব্যঙ্গ ও বিদ্রূপ", group: "V", icon: "🙄" },

  // GROUP W: Academic & Professional
  { id: "W1", slug: "presenting-explaining", name: "Presenting & Explaining", name_bn: "উপস্থাপনা ও ব্যাখ্যা", group: "W", icon: "🎓" },
  { id: "W2", slug: "pros-and-cons", name: "Analyzing Pros & Cons", name_bn: "সুবিধা ও অসুবিধা বিশ্লেষণ", group: "W", icon: "⚖️" },
  { id: "W3", slug: "describing-trends", name: "Describing Trends", name_bn: "প্রবণতা বর্ণনা", group: "W", icon: "📈" },
  { id: "W4", slug: "academic-possibility", name: "Academic Possibility", name_bn: "একাডেমিক সম্ভাবনা", group: "W", icon: "🔬" },
  { id: "W5", slug: "citing-sources", name: "Citing Sources", name_bn: "সূত্র উদ্ধৃতি", group: "W", icon: "📚" },
  { id: "W6", slug: "academic-cause-effect", name: "Academic Cause & Effect", name_bn: "একাডেমিক কারণ ও ফলাফল", group: "W", icon: "🔗" },
  { id: "W7", slug: "making-generalizations", name: "Making Generalizations", name_bn: "সাধারণীকরণ করা", group: "W", icon: "🌐" },
  { id: "W8", slug: "qualifying-academic", name: "Qualifying Statements", name_bn: "শর্তসাপেক্ষ বিবৃতি", group: "W", icon: "⚖️" },
  { id: "W9", slug: "describing-purpose-academic", name: "Describing Purpose", name_bn: "উদ্দেশ্য বর্ণনা", group: "W", icon: "🎯" },
  { id: "W10", slug: "linking-paragraphs", name: "Linking Paragraphs", name_bn: "অনুচ্ছেদ সংযোগ", group: "W", icon: "🔗" },
  { id: "W11", slug: "job-interview", name: "Job Interview Patterns", name_bn: "চাকরির সাক্ষাৎকার", group: "W", icon: "💼" },
  { id: "W12", slug: "meeting-patterns", name: "Meeting Patterns", name_bn: "সভা প্যাটার্ন", group: "W", icon: "🤝" },
  { id: "W13", slug: "technical-processes", name: "Describing Technical Processes", name_bn: "প্রযুক্তিগত প্রক্রিয়া", group: "W", icon: "⚙️" },
  { id: "W14", slug: "expressing-uncertainty-academic", name: "Expressing Uncertainty (Academic)", name_bn: "অনিশ্চয়তা প্রকাশ (একাডেমিক)", group: "W", icon: "❓" },
  { id: "W15", slug: "expressing-importance-academic", name: "Expressing Importance", name_bn: "গুরুত্ব প্রকাশ", group: "W", icon: "⭐" },

  // GROUP X: Common Mistakes by Bangla Speakers
  { id: "X1", slug: "article-mistakes", name: "Article Mistakes (A/An/The)", name_bn: "আর্টিকেল ভুল (A/An/The)", group: "X", icon: "📝" },
  { id: "X2", slug: "preposition-confusion", name: "Preposition Confusion", name_bn: "পদান্বয়ী অব্যয় বিভ্রান্তি", group: "X", icon: "🔀" },
  { id: "X3", slug: "subject-verb-agreement", name: "Subject-Verb Agreement", name_bn: "কর্তা-ক্রিয়া সামঞ্জস্য", group: "X", icon: "✓" },
  { id: "X4", slug: "tense-confusion", name: "Tense Confusion", name_bn: "কাল বিভ্রান্তি", group: "X", icon: "⏰" },
  { id: "X5", slug: "word-order-fixes", name: "Word Order Fixes", name_bn: "শব্দ ক্রম সংশোধন", group: "X", icon: "🔤" },
  { id: "X6", slug: "pronoun-mistakes", name: "Pronoun Mistakes", name_bn: "সর্বনাম ভুল", group: "X", icon: "👤" },
  { id: "X7", slug: "uncountable-noun-mistakes", name: "Uncountable Noun Mistakes", name_bn: "অগণনীয় বিশেষ্য ভুল", group: "X", icon: "📊" },
  { id: "X8", slug: "direct-translation-traps", name: "Direct Translation Traps", name_bn: "সরাসরি অনুবাদ ফাঁদ", group: "X", icon: "⚠️" },
  { id: "X9", slug: "do-does-did-confusion", name: "Do/Does/Did Confusion", name_bn: "Do/Does/Did বিভ্রান্তি", group: "X", icon: "❓" },
  { id: "X10", slug: "confusing-word-pairs", name: "Confusing Word Pairs", name_bn: "বিভ্রান্তিকর শব্দ জোড়া", group: "X", icon: "🔄" },
  { id: "X11", slug: "casual-speech-reductions", name: "Casual Speech Reductions", name_bn: "চলতি কথার সংক্ষেপ", group: "X", icon: "⚡" },
  { id: "X12", slug: "collocations-word-partnerships", name: "Collocations — Word Partnerships", name_bn: "শব্দ জুটি — কোন শব্দের সাথে কোনটা যায়", group: "X", icon: "🤝" },
  { id: "X13", slug: "connected-speech", name: "Connected Speech — How English Really Sounds", name_bn: "আসল ইংরেজি উচ্চারণ — দ্রুত বলার ধরন", group: "X", icon: "🎧" },
];

// Slug to ID mapping
export function getCategoryIdBySlug(slug: string): string | undefined {
  return categoryMeta.find((c) => c.slug === slug)?.id;
}

export function getCategoryMetaBySlug(slug: string): CategoryMeta | undefined {
  return categoryMeta.find((c) => c.slug === slug);
}

export function getCategoryMetaByGroup(groupId: string): CategoryMeta[] {
  return categoryMeta.filter((c) => c.group === groupId);
}

export function getAllSlugs(): string[] {
  return categoryMeta.map((c) => c.slug);
}
