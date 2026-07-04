// components/About/AboutCta.tsx
"use client";

import Link from "next/link";
import Icon from "@/components/Icon";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function AboutCTA() {
  const { t } = useLanguage();
  const cta = t.aboutCta;

  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop text-center relative overflow-hidden">
      {/* Radial bloom glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto">
        <h2 className="font-headline-lg text-headline-lg mb-8">
          {cta.headline}
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-gutter">
          <Link
            href="/contact"
            className="bg-primary-container text-on-primary-container px-8 py-4 rounded-xl font-label-md text-label-md hover:opacity-90 transition-all active:scale-95 flex items-center gap-2"
          >
            {cta.cta1}
            <Icon name="arrow_forward" />
          </Link>

          <button className="border border-outline-variant text-on-surface px-8 py-4 rounded-xl font-label-md text-label-md hover:bg-surface-variant/30 transition-all">
            {cta.cta2}
          </button>
        </div>
      </div>
    </section>
  );
}