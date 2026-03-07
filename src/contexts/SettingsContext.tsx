"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import type { UserSettings } from "@/types/pattern";

const defaultSettings: UserSettings = {
  showBangla: true,
  banglaFirst: false,
  displayMode: "side_by_side",
  fontSize: "medium",
  darkMode: "system",
  practiceLevel: 1,
  dailyGoal: 10,
};

interface SettingsContextType {
  settings: UserSettings;
  updateSettings: (partial: Partial<UserSettings>) => void;
}

const SettingsContext = createContext<SettingsContextType>({
  settings: defaultSettings,
  updateSettings: () => {},
});

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<UserSettings>(defaultSettings);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("pe-settings");
    if (stored) {
      try {
        setSettings({ ...defaultSettings, ...JSON.parse(stored) });
      } catch {
        // ignore invalid JSON
      }
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    // Apply dark mode
    const isDark =
      settings.darkMode === true ||
      (settings.darkMode === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    document.documentElement.classList.toggle("dark", isDark);

    // Persist settings
    localStorage.setItem("pe-settings", JSON.stringify(settings));
  }, [settings, mounted]);

  const updateSettings = (partial: Partial<UserSettings>) => {
    setSettings((prev) => ({ ...prev, ...partial }));
  };

  return (
    <SettingsContext.Provider value={{ settings, updateSettings }}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  return useContext(SettingsContext);
}
