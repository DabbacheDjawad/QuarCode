// components/About/OurStory.tsx
"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function OurStory() {
  const { t } = useLanguage();
  const s = t.ourStory;

  const milestones = [
    { year: s.milestone1Year, label: s.milestone1Label },
    { year: s.milestone2Year, label: s.milestone2Label },
    { year: s.milestone3Year, label: s.milestone3Label },
  ];

  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-section-gap items-center">
        {/* Left — copy */}
        <div>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-outline-variant/30 bg-surface-container mb-6">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="font-code-sm text-code-sm uppercase tracking-widest text-on-surface-variant">
              {s.badge}
            </span>
          </div>

          <h2 className="font-headline-md text-headline-md mb-6">{s.headline}</h2>

          <div className="space-y-4 text-on-surface-variant font-body-md text-body-md">
            <p>{s.body1}</p>
            <p>{s.body2}</p>
          </div>
        </div>

        {/* Right — timeline milestones */}
        <div className="relative flex flex-col gap-8 ps-8 border-s border-outline-variant/30">
          {milestones.map((m, i) => (
            <div key={i} className="relative">
              {/* dot on the timeline line */}
              <span className="absolute -start-[calc(2rem+1px)] top-1 w-3 h-3 rounded-full bg-primary border-2 border-background" />
              <div className="font-headline-sm text-headline-sm text-primary mb-1">
                {m.year}
              </div>
              <div className="font-label-md text-label-md text-on-surface-variant">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}