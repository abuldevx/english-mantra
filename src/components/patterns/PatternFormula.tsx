"use client";

import { useSettings } from "@/contexts/SettingsContext";
import type { Slot } from "@/types/pattern";

// Map slot accepted types to color class
function getSlotColorClass(slotName: string, slots?: Slot[]): string {
  if (!slots) return "slot";

  const slot = slots.find(
    (s) => s.name.toUpperCase() === slotName.toUpperCase()
  );
  if (!slot) return "slot";

  const types = slot.acceptedTypes;

  if (types.some((t) => ["person"].includes(t))) return "slot slot-person";
  if (types.some((t) => ["verb", "verb_phrase", "to_verb", "gerund"].includes(t)))
    return "slot slot-action";
  if (types.some((t) => ["place"].includes(t))) return "slot slot-place";
  if (types.some((t) => ["time", "time_expression"].includes(t)))
    return "slot slot-time";
  if (types.some((t) => ["feeling", "adjective", "adjective_phrase"].includes(t)))
    return "slot slot-feeling";
  if (types.some((t) => ["noun", "noun_phrase", "amount", "number"].includes(t)))
    return "slot slot-thing";

  return "slot";
}

interface PatternFormulaProps {
  formula: string;
  formula_bn?: string;
  size?: "sm" | "md" | "lg";
  slots?: Slot[];
}

function highlightSlots(
  text: string,
  size: "sm" | "md" | "lg",
  slots?: Slot[]
) {
  const sizeClass =
    size === "lg" ? "text-lg" : size === "md" ? "text-base" : "text-sm";
  const parts = text.split(/(\[[^\]]+\])/g);
  return (
    <span className={sizeClass}>
      {parts.map((part, i) =>
        part.startsWith("[") && part.endsWith("]") ? (
          <span
            key={i}
            className={getSlotColorClass(part.slice(1, -1), slots)}
          >
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
  slots,
}: PatternFormulaProps) {
  const { settings } = useSettings();

  return (
    <div className="space-y-1">
      <div className="font-semibold leading-relaxed">
        {highlightSlots(formula, size, slots)}
      </div>
      {settings.showBangla && formula_bn && (
        <div className="font-bangla text-muted leading-relaxed">
          {highlightSlots(formula_bn, size)}
        </div>
      )}
    </div>
  );
}
