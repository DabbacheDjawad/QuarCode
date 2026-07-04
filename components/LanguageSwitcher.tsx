// components/LanguageSwitcher.tsx
"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import { Locale } from "@/lib/i18n/Translations";

const LOCALES: { value: Locale; label: string; flag: string }[] = [
  { value: "en", label: "EN", flag: "🇬🇧" },
  { value: "fr", label: "FR", flag: "🇫🇷" },
  { value: "ar", label: "ع",  flag: "🇩🇿" },
];

type LanguageSwitcherProps = {
  /** Compact pill variant — used inside the mobile drawer */
  compact?: boolean;
};

export default function LanguageSwitcher({ compact = false }: LanguageSwitcherProps) {
  const { locale, setLocale } = useLanguage();

  return (
    <div
      role="group"
      aria-label="Language switcher"
      className={`flex items-center rounded-xl border border-outline-variant/50 overflow-hidden ${
        compact ? "w-full" : ""
      }`}
    >
      {LOCALES.map(({ value, label, flag }) => {
        const isActive = locale === value;
        return (
          <button
            key={value}
            onClick={() => setLocale(value)}
            aria-pressed={isActive}
            aria-label={`Switch to ${label}`}
            className={`
              flex items-center gap-1 px-3 py-1.5 text-label-md font-label-md
              transition-all duration-150 select-none
              ${compact ? "flex-1 justify-center py-2" : ""}
              ${
                isActive
                  ? "bg-primary text-on-primary font-bold"
                  : "text-on-surface-variant hover:bg-surface-variant/30 hover:text-on-surface"
              }
            `}
          >
            <span className="text-base leading-none">{flag}</span>
            <span className={value === "ar" ? "font-[system-ui]" : ""}>
              {label}
            </span>
          </button>
        );
      })}
    </div>
  );
}