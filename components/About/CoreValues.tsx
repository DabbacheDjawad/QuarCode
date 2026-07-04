// components/About/CoreValues.tsx
"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";

// Static icon/color data — UI concerns, not translatable content
const valueStyles = [
  { icon: "verified", iconColor: "text-primary", barColor: "bg-primary" },
  { icon: "lightbulb", iconColor: "text-tertiary", barColor: "bg-tertiary" },
  { icon: "shield", iconColor: "text-secondary", barColor: "bg-secondary" },
] as const;

export default function CoreValues() {
  const { t } = useLanguage();
  const cv = t.coreValues;

  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      {/* Section header */}
      <div className="text-center mb-16">
        <h2 className="font-headline-md text-headline-md mb-4">
          {cv.sectionTitle}
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
          {cv.sectionBody}
        </p>
      </div>

      {/* Value cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
        {cv.items.map((item, i) => {
          const style = valueStyles[i];
          return (
            <div key={item.title} className="group">
              {/* Animated top bar — fills on hover */}
              <div className="h-1 bg-outline-variant/20 mb-6 relative overflow-hidden">
                <div
                  className={`absolute inset-0 ${style.barColor} w-0 group-hover:w-full transition-all duration-500`}
                />
              </div>

              <div className="flex items-center space-x-3 mb-4">
                <span
                  className={`material-symbols-outlined ${style.iconColor}`}
                >
                  {style.icon}
                </span>
                <h4 className="font-headline-sm text-headline-sm">
                  {item.title}
                </h4>
              </div>

              <p className="font-body-md text-body-md text-on-surface-variant">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
