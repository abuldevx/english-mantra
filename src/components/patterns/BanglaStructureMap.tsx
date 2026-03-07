"use client";

import { useSettings } from "@/contexts/SettingsContext";

interface BanglaStructureMapProps {
  mapping: string; // e.g. "আমি [কিছু] চাই ↔ I want [THING]"
}

export function BanglaStructureMap({ mapping }: BanglaStructureMapProps) {
  const { settings } = useSettings();

  if (!settings.showBangla || !mapping) return null;

  const parts = mapping.split("↔").map((s) => s.trim());
  if (parts.length !== 2) return null;

  return (
    <div className="p-3 rounded-lg bg-accent-light border border-card-border">
      <div className="text-xs font-medium text-accent mb-2">
        Word Order Map (SOV ↔ SVO)
      </div>
      <div className="flex items-center gap-3 text-sm">
        <div className="flex-1 text-center">
          <div className="text-[10px] text-muted mb-1">Bangla (SOV)</div>
          <div className="font-bangla font-medium">{parts[0]}</div>
        </div>
        <div className="text-lg text-accent">↔</div>
        <div className="flex-1 text-center">
          <div className="text-[10px] text-muted mb-1">English (SVO)</div>
          <div className="font-medium">{parts[1]}</div>
        </div>
      </div>
    </div>
  );
}
