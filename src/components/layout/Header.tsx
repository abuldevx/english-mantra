"use client";

import Link from "next/link";
import { useSettings } from "@/contexts/SettingsContext";

export function Header() {
  const { settings, updateSettings } = useSettings();

  const toggleDarkMode = () => {
    if (settings.darkMode === true) {
      updateSettings({ darkMode: false });
    } else if (settings.darkMode === false) {
      updateSettings({ darkMode: "system" });
    } else {
      updateSettings({ darkMode: true });
    }
  };

  const darkModeIcon =
    settings.darkMode === true
      ? "🌙"
      : settings.darkMode === false
        ? "☀️"
        : "💻";

  return (
    <header className="sticky top-0 z-50 border-b border-card-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-primary">English</span>
          <span className="text-xl font-bold">Mantra</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link
            href="/categories"
            className="text-muted hover:text-foreground transition-colors"
          >
            Categories
          </Link>
          <Link
            href="/practice"
            className="text-muted hover:text-foreground transition-colors"
          >
            Practice
          </Link>
          <Link
            href="/search"
            className="text-muted hover:text-foreground transition-colors"
          >
            Search
          </Link>
          <Link
            href="/progress"
            className="text-muted hover:text-foreground transition-colors"
          >
            Progress
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={() =>
              updateSettings({ showBangla: !settings.showBangla })
            }
            className="text-xs px-2 py-1 rounded-md border border-card-border hover:bg-card transition-colors font-bangla"
            title={settings.showBangla ? "Hide Bangla" : "Show Bangla"}
          >
            {settings.showBangla ? "বাং" : "EN"}
          </button>
          <button
            onClick={toggleDarkMode}
            className="text-lg p-1 rounded-md hover:bg-card transition-colors"
            title={`Dark mode: ${settings.darkMode}`}
          >
            {darkModeIcon}
          </button>
          <Link
            href="/settings"
            className="text-lg p-1 rounded-md hover:bg-card transition-colors"
            title="Settings"
          >
            ⚙️
          </Link>
        </div>
      </div>
    </header>
  );
}
