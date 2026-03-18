"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "হোম", icon: "🏠" },
  { href: "/path/blocks", label: "পথ", icon: "🧱" },
  { href: "/practice/daily", label: "অনুশীলন", icon: "💪" },
  { href: "/search", label: "খুঁজি", icon: "🔍" },
  { href: "/progress", label: "আমার", icon: "📊" },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-card-border bg-background/95 backdrop-blur md:hidden">
      <div className="flex items-center justify-around h-16 px-2">
        {navItems.map((item) => {
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-lg transition-colors ${
                isActive
                  ? "text-primary"
                  : "text-muted hover:text-foreground"
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="text-[10px] font-medium font-bangla">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
