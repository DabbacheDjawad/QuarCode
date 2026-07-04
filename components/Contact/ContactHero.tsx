// components/Contact/ContactHero.tsx
"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function ContactHero() {
  const { t } = useLanguage();
  const h = t.contactHero;

  return (
    <div className="mb-stack-lg relative">
      {/* Animated badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-variant/30 border border-outline-variant/20 rounded-full text-tertiary font-code-sm text-code-sm mb-4">
        <span className="w-1.5 h-1.5 bg-tertiary rounded-full animate-pulse" />
        {h.badge}
      </div>

      <h1 className="text-headline-xl font-headline-xl text-on-surface max-w-3xl mb-6">
        {h.headline1}{" "}
        <span className="text-primary">{h.headline2}</span>
        {h.headline3}
      </h1>

      <p className="text-body-lg font-body-lg text-on-surface-variant max-w-2xl">
        {h.body}
      </p>
    </div>
  );
}