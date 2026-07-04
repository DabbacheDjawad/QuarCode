// components/About/MissionVision.tsx
"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";

type CardProps = {
  decorIcon: string;
  accentIcon: string;
  accentColor: "text-primary" | "text-tertiary";
  title: string;
  body: string;
};

function MissionCard({ decorIcon, accentIcon, accentColor, title, body }: CardProps) {
  return (
    <div className="p-stack-lg rounded-xl bg-surface border border-outline-variant/30 relative overflow-hidden card-glow transition-all duration-300">
      {/* Large ghost icon decoration */}
      <div className="absolute top-4 right-4 opacity-10 pointer-events-none">
        <span
          className="material-symbols-outlined text-[120px]"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          {decorIcon}
        </span>
      </div>

      {/* Accent icon */}
      <span
        className={`material-symbols-outlined ${accentColor} mb-4 block`}
        style={{ fontVariationSettings: "'FILL' 1" }}
      >
        {accentIcon}
      </span>

      <h3 className="font-headline-md text-headline-md mb-4">{title}</h3>
      <p className="font-body-md text-body-md text-on-surface-variant">{body}</p>
    </div>
  );
}

export default function MissionVision() {
  const { t } = useLanguage();
  const mv = t.missionVision;

  return (
    <section className="py-section-gap bg-surface-container relative">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-stack-lg">
        <MissionCard
          decorIcon="rocket_launch"
          accentIcon="target"
          accentColor="text-primary"
          title={mv.mission.title}
          body={mv.mission.body}
        />
        <MissionCard
          decorIcon="visibility"
          accentIcon="auto_awesome"
          accentColor="text-tertiary"
          title={mv.vision.title}
          body={mv.vision.body}
        />
      </div>
    </section>
  );
}