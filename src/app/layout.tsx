import type { Metadata, Viewport } from "next";
import { Inter, Hind_Siliguri } from "next/font/google";
import "./globals.css";
import { SettingsProvider } from "@/contexts/SettingsContext";
import { ProgressProvider } from "@/contexts/ProgressContext";
import { Header } from "@/components/layout/Header";
import { BottomNav } from "@/components/layout/BottomNav";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const hindSiliguri = Hind_Siliguri({
  variable: "--font-hind-siliguri",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["bengali", "latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "EnglishMantra - ইংলিশ মন্ত্র | Learn English with Pattern Formulas",
  description:
    "Learn English the easy way! Fill slots in proven pattern formulas to build unlimited sentences. Designed for Bangla speakers. No grammar rules needed.",
  keywords: [
    "learn english",
    "english for bangla speakers",
    "englishmantra",
    "english learning app",
    "ইংরেজি শেখা",
  ],
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "EnglishMantra",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${hindSiliguri.variable} font-sans antialiased bg-background text-foreground`}
      >
        <SettingsProvider>
          <ProgressProvider>
            <Header />
            <main className="min-h-screen pb-safe">{children}</main>
            <BottomNav />
          </ProgressProvider>
        </SettingsProvider>
      </body>
    </html>
  );
}
