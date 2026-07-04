// components/About/AboutHero.tsx
"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function AboutHero() {
  const { t } = useLanguage();
  const h = t.aboutHero;

  return (
    <section className="pt-[160px] pb-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto overflow-hidden relative">
      <div className="relative z-10 max-w-3xl">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-outline-variant/30 bg-surface-container mb-6">
          <span className="w-2 h-2 rounded-full bg-tertiary" />
          <span className="font-code-sm text-code-sm uppercase tracking-widest text-on-surface-variant">
            {h.badge}
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-headline-xl text-headline-xl mb-8 leading-none">
          {h.headline1}{" "}
          <span className="primary-gradient-text">{h.headline2}</span>{" "}
          {h.headline3}
        </h1>

        {/* Body */}
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          {h.body}
        </p>
      </div>
    </section>
  );
}