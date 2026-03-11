"use client";

import Link from "next/link";
import { bridgeRules } from "@/content/bridge-rules";

export default function BridgeRulesPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="font-bangla text-2xl font-bold mb-1">সেতু নিয়ম</h1>
        <p className="text-lg text-muted">Bridge Rules</p>
        <p className="font-bangla text-sm text-muted mt-2">
          বাংলা আর ইংরেজির মাঝে মাত্র ১২টা মূল পার্থক্য আছে। এই ১২টা নিয়ম
          শিখলে তুমি যেকোনো বাংলা বাক্য ইংরেজিতে বলতে পারবে।
        </p>
        <p className="text-xs text-muted mt-1">
          There are only 12 key differences between Bangla and English. Learn
          these rules and you can convert any Bangla thought to English.
        </p>
      </div>

      {/* Rules */}
      <div className="space-y-4">
        {bridgeRules.map((rule) => (
          <div
            key={rule.id}
            className="p-4 rounded-xl border border-card-border bg-card"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">{rule.icon}</span>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-muted">
                    {rule.id}
                  </span>
                  <h2 className="font-bangla text-base font-bold">
                    {rule.name_bn}
                  </h2>
                </div>
              </div>
            </div>

            <p className="font-bangla text-sm mb-3">{rule.description_bn}</p>

            {/* Example */}
            <div className="p-3 rounded-lg bg-muted-bg">
              <div className="flex items-center gap-3">
                <div className="flex-1 text-center">
                  <div className="text-[10px] text-muted font-bangla mb-0.5">
                    বাংলা
                  </div>
                  <p className="font-bangla text-sm font-medium">
                    {rule.banglaWay}
                  </p>
                </div>
                <span className="text-primary font-bold text-lg shrink-0">
                  →
                </span>
                <div className="flex-1 text-center">
                  <div className="text-[10px] text-muted mb-0.5">English</div>
                  <p className="text-sm font-medium">{rule.englishWay}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Back link */}
      <div className="mt-8 pt-4 border-t border-card-border text-center">
        <Link
          href="/categories"
          className="text-sm text-primary hover:underline"
        >
          Start Learning Patterns →
        </Link>
      </div>
    </div>
  );
}
