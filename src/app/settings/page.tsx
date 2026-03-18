"use client";

import { useSettings } from "@/contexts/SettingsContext";
import type { DisplayMode, FontSize } from "@/types/pattern";

export default function SettingsPage() {
  const { settings, updateSettings } = useSettings();

  return (
    <div className="mx-auto max-w-4xl px-4 py-6">
      <h1 className="text-2xl font-bold mb-1 font-bangla">সেটিংস</h1>
      <p className="text-sm text-muted mb-1">Settings</p>
      <p className="text-muted text-sm mb-6 font-bangla">তোমার শেখার অভিজ্ঞতা পরিবর্তন করো</p>

      <div className="space-y-6">
        {/* Language Display */}
        <SettingSection title="Language Display" title_bn="ভাষা প্রদর্শন">
          <ToggleSetting
            label="Show Bangla translations"
            label_bn="বাংলা অনুবাদ দেখান"
            checked={settings.showBangla}
            onChange={(v) => updateSettings({ showBangla: v })}
          />
          <ToggleSetting
            label="Bangla-First mode"
            label_bn="বাংলা-প্রথম মোড"
            checked={settings.banglaFirst}
            onChange={(v) => updateSettings({ banglaFirst: v })}
          />
          <SelectSetting
            label="Display mode"
            value={settings.displayMode}
            options={[
              { value: "en_first", label: "English first" },
              { value: "bn_first", label: "Bangla first" },
              { value: "side_by_side", label: "Side by side" },
            ]}
            onChange={(v) => updateSettings({ displayMode: v as DisplayMode })}
          />
        </SettingSection>

        {/* Appearance */}
        <SettingSection title="Appearance" title_bn="চেহারা">
          <SelectSetting
            label="Dark mode"
            value={String(settings.darkMode)}
            options={[
              { value: "system", label: "System" },
              { value: "false", label: "Light" },
              { value: "true", label: "Dark" },
            ]}
            onChange={(v) =>
              updateSettings({
                darkMode: v === "system" ? "system" : v === "true",
              })
            }
          />
          <SelectSetting
            label="Font size"
            value={settings.fontSize}
            options={[
              { value: "small", label: "Small" },
              { value: "medium", label: "Medium" },
              { value: "large", label: "Large" },
              { value: "xlarge", label: "Extra Large" },
            ]}
            onChange={(v) => updateSettings({ fontSize: v as FontSize })}
          />
        </SettingSection>

        {/* Practice */}
        <SettingSection title="Practice" title_bn="অনুশীলন">
          <SelectSetting
            label="Word bank difficulty"
            value={String(settings.practiceLevel)}
            options={[
              { value: "1", label: "Level 1 — 4 choices (easiest)" },
              { value: "2", label: "Level 2 — 8 choices" },
              { value: "3", label: "Level 3 — First letter hint" },
              { value: "4", label: "Level 4 — Free typing (hardest)" },
            ]}
            onChange={(v) =>
              updateSettings({ practiceLevel: Number(v) as 1 | 2 | 3 | 4 })
            }
          />
          <SelectSetting
            label="Daily goal (patterns per day)"
            value={String(settings.dailyGoal)}
            options={[
              { value: "5", label: "5 patterns" },
              { value: "10", label: "10 patterns" },
              { value: "15", label: "15 patterns" },
              { value: "20", label: "20 patterns" },
            ]}
            onChange={(v) => updateSettings({ dailyGoal: Number(v) })}
          />
        </SettingSection>
      </div>
    </div>
  );
}

function SettingSection({
  title,
  title_bn,
  children,
}: {
  title: string;
  title_bn: string;
  children: React.ReactNode;
}) {
  return (
    <div className="p-4 rounded-xl border border-card-border bg-card">
      <h2 className="font-bold mb-1 font-bangla">{title_bn}</h2>
      <p className="text-xs text-muted mb-4">{title}</p>
      <div className="space-y-4">{children}</div>
    </div>
  );
}

function ToggleSetting({
  label,
  label_bn,
  checked,
  onChange,
}: {
  label: string;
  label_bn?: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <span className="text-sm">{label}</span>
        {label_bn && (
          <span className="font-bangla text-xs text-muted ml-2">{label_bn}</span>
        )}
      </div>
      <button
        onClick={() => onChange(!checked)}
        className={`w-11 h-6 rounded-full transition-colors relative ${
          checked ? "bg-primary" : "bg-muted/30"
        }`}
      >
        <div
          className={`w-5 h-5 rounded-full bg-white shadow-sm absolute top-0.5 transition-transform ${
            checked ? "translate-x-5.5" : "translate-x-0.5"
          }`}
        />
      </button>
    </div>
  );
}

function SelectSetting({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: { value: string; label: string }[];
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="text-sm shrink-0">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="text-sm px-3 py-1.5 rounded-lg border border-card-border bg-background"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
