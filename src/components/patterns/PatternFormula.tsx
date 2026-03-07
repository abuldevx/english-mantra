"use client";

import { useSettings } from "@/contexts/SettingsContext";

interface PatternFormulaProps {
  formula: string;
  formula_bn?: string;
  size?: "sm" | "md" | "lg";
}

function highlightSlots(text: string, size: "sm" | "md" | "lg") {
  const sizeClass = size === "lg" ? "text-lg" : size === "md" ? "text-base" : "text-sm";
  const parts = text.split(/(\[[^\]]+\])/g);
  return (
    <span className={sizeClass}>
      {parts.map((part, i) =>
        part.startsWith("[") && part.endsWith("]") ? (
          <span key={i} className="slot">
            {part.slice(1, -1)}
          </span>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </span>
  );
}

export function PatternFormula({
  formula,
  formula_bn,
  size = "md",
}: PatternFormulaProps) {
  const { settings } = useSettings();

  return (
    <div className="space-y-1">
      <div className="font-semibold leading-relaxed">
        {highlightSlots(formula, size)}
      </div>
      {settings.showBangla && formula_bn && (
        <div className="font-bangla text-muted leading-relaxed">
          {highlightSlots(formula_bn, size)}
        </div>
      )}
    </div>
  );
}
