export default function MistakesPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-6">
      <h1 className="text-2xl font-bold mb-2">Common Mistakes</h1>
      <p className="text-muted text-sm mb-2">
        Mistakes Bangla speakers commonly make in English
      </p>
      <p className="font-bangla text-muted text-sm mb-6">
        বাংলাভাষীরা ইংরেজিতে যে সাধারণ ভুলগুলো করে
      </p>

      <div className="space-y-4">
        {commonMistakes.map((mistake, i) => (
          <div
            key={i}
            className="p-4 rounded-xl border border-card-border bg-card"
          >
            <div className="flex items-start gap-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 rounded bg-danger-light text-danger text-xs font-medium">
                    Wrong
                  </span>
                  <span className="line-through text-danger text-sm">
                    {mistake.wrong}
                  </span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 rounded bg-success-light text-success text-xs font-medium">
                    Correct
                  </span>
                  <span className="text-success font-medium text-sm">
                    {mistake.correct}
                  </span>
                </div>
                <p className="text-xs text-muted mt-2">{mistake.explanation}</p>
                <p className="font-bangla text-xs text-muted mt-1">
                  {mistake.explanation_bn}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const commonMistakes = [
  {
    wrong: "I am agree with you.",
    correct: "I agree with you.",
    explanation:
      "\"Agree\" is a verb in English, not an adjective. Don't use \"am/is/are\" before it.",
    explanation_bn:
      "\"Agree\" ইংরেজিতে একটি ক্রিয়া, বিশেষণ নয়। এর আগে \"am/is/are\" ব্যবহার করবেন না।",
  },
  {
    wrong: "He told that he is coming.",
    correct: "He said that he is coming.",
    explanation:
      "\"Tell\" needs a person after it (tell me, tell him). \"Say\" is used without a person object.",
    explanation_bn:
      "\"Tell\"-এর পরে একজন ব্যক্তি লাগে (tell me, tell him)। \"Say\" ব্যক্তি ছাড়া ব্যবহৃত হয়।",
  },
  {
    wrong: "I am knowing the answer.",
    correct: "I know the answer.",
    explanation:
      "\"Know\" is a state verb and is not used in continuous/progressive form.",
    explanation_bn:
      "\"Know\" একটি অবস্থাবাচক ক্রিয়া এবং এটি চলমান রূপে ব্যবহৃত হয় না।",
  },
  {
    wrong: "He is more taller than me.",
    correct: "He is taller than me.",
    explanation:
      "Don't use \"more\" with \"-er\" comparatives. Use either \"more tall\" (incorrect for short adjectives) or \"taller\".",
    explanation_bn:
      "\"-er\" তুলনামূলক রূপের সাথে \"more\" ব্যবহার করবেন না। হয় \"taller\" ব্যবহার করুন।",
  },
  {
    wrong: "I have a doubt.",
    correct: "I have a question.",
    explanation:
      "In English, \"doubt\" means suspicion or uncertainty. When you want to ask something, use \"question\".",
    explanation_bn:
      "ইংরেজিতে \"doubt\" মানে সন্দেহ। কিছু জিজ্ঞাসা করতে চাইলে \"question\" ব্যবহার করুন।",
  },
  {
    wrong: "I am having two brothers.",
    correct: "I have two brothers.",
    explanation:
      "\"Have\" for possession is a state verb. Don't use it in continuous form.",
    explanation_bn:
      "অধিকার বোঝাতে \"have\" একটি অবস্থাবাচক ক্রিয়া। এটি চলমান রূপে ব্যবহার করবেন না।",
  },
  {
    wrong: "I went to abroad.",
    correct: "I went abroad.",
    explanation:
      "\"Abroad\" is an adverb, not a noun. Don't use \"to\" before it.",
    explanation_bn:
      "\"Abroad\" একটি ক্রিয়া-বিশেষণ, বিশেষ্য নয়। এর আগে \"to\" ব্যবহার করবেন না।",
  },
  {
    wrong: "He suggested me to go.",
    correct: "He suggested that I go. / He suggested going.",
    explanation:
      "\"Suggest\" is not followed by person + to. Use \"suggest that + clause\" or \"suggest + gerund\".",
    explanation_bn:
      "\"Suggest\"-এর পরে ব্যক্তি + to আসে না। \"suggest that + উপবাক্য\" বা \"suggest + gerund\" ব্যবহার করুন।",
  },
  {
    wrong: "I am interesting in music.",
    correct: "I am interested in music.",
    explanation:
      "\"-ed\" adjectives describe how you feel. \"-ing\" adjectives describe the thing that causes the feeling.",
    explanation_bn:
      "\"-ed\" বিশেষণ আপনার অনুভূতি বর্ণনা করে। \"-ing\" বিশেষণ যে জিনিস অনুভূতি সৃষ্টি করে তা বর্ণনা করে।",
  },
  {
    wrong: "Yesterday, I didn't went to school.",
    correct: "Yesterday, I didn't go to school.",
    explanation:
      "After \"didn't\", use the base form of the verb (go), not the past form (went).",
    explanation_bn:
      "\"didn't\"-এর পরে ক্রিয়ার মূল রূপ (go) ব্যবহার করুন, অতীত রূপ (went) নয়।",
  },
];
