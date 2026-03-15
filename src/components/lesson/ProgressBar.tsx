"use client";

interface Section {
  key: string;
  icon: string;
  label: string;
}

interface ProgressBarProps {
  sections: Section[];
  currentIndex: number;
}

/**
 * Dynamic lesson progress bar.
 * Supports 3-7 sections, adjusts automatically.
 * Shows icons + fill bars for completed/current/future sections.
 */
export function ProgressBar({ sections, currentIndex }: ProgressBarProps) {
  return (
    <div className="sticky top-0 z-10 bg-background/95 backdrop-blur px-4 py-2 border-b border-card-border">
      <div className="flex items-center gap-1 max-w-lg mx-auto">
        {sections.map((section, i) => (
          <div key={section.key} className="flex-1 flex items-center gap-1">
            <span
              className={`text-xs shrink-0 transition-all ${
                i <= currentIndex ? "" : "grayscale opacity-40"
              }`}
            >
              {section.icon}
            </span>
            <div
              className={`flex-1 h-1.5 rounded-full transition-all duration-500 ${
                i < currentIndex
                  ? "bg-success"
                  : i === currentIndex
                  ? "bg-primary"
                  : "bg-muted-bg"
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
