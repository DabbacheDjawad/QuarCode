"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";

function SectionLabel({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3.5 mb-12">
      <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#4f6eff]">
        {text}
      </span>
      <div className="h-px flex-1 bg-white/[0.07]" />
    </div>
  );
}

// Target / mission icon
const IconTarget = ({ color }: { color: string }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5">
    <circle cx="12" cy="12" r="10"/>
    <circle cx="12" cy="12" r="6"/>
    <circle cx="12" cy="12" r="2"/>
  </svg>
);

// Sparkle / vision icon
const IconSparkle = ({ color }: { color: string }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5">
    <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z"/>
  </svg>
);

// Large decorative ghost icon — rocket
const IconRocket = () => (
  <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.08">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M15 12v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
  </svg>
);

// Large decorative ghost icon — eye / visibility
const IconEye = () => (
  <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.08">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
);

type CardProps = {
  Ghost: React.FC;
  accent: string;
  AccentIcon: React.FC<{ color: string }>;
  title: string;
  body: string;
};

function MissionCard({ Ghost, accent, AccentIcon, title, body }: CardProps) {
  return (
    <div
      className="relative rounded-2xl border border-white/[0.07] p-10 overflow-hidden group transition-colors duration-200 hover:bg-[#13141f]"
      style={{ background: "#0e0f1a" }}
    >
      {/* Ghost icon decoration */}
      <div className="absolute top-4 right-4 pointer-events-none" style={{ color: accent }}>
        <Ghost />
      </div>

      {/* Bottom accent line on hover */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: `linear-gradient(90deg, transparent, ${accent}66, transparent)` }}
      />

      {/* Accent icon */}
      <div
        className="w-11 h-11 rounded-[10px] border border-white/[0.07] bg-[#1a1b2a] flex items-center justify-center mb-6"
      >
        <AccentIcon color={accent} />
      </div>

      {/* Tag */}
      <div
        className="font-mono text-[10px] uppercase tracking-[0.14em] mb-3"
        style={{ color: accent }}
      >
        {title === "Mission" || title === "مهمتنا" ? "// mission" : "// vision"}
      </div>

      <h3 className="text-[22px] font-bold tracking-[-0.02em] leading-[1.3] mb-4 text-[#f0f1ff]">
        {title}
      </h3>
      <p className="text-[14.5px] text-[#8889a8] leading-[1.75]">{body}</p>
    </div>
  );
}

export default function MissionVision() {
  const { t } = useLanguage();
  const mv = t.missionVision;

  return (
    <section className="py-[100px] px-10 border-t border-white/[0.06]" style={{ background: "#07080f" }}>
      <div className="max-w-[1280px] mx-auto">
        <SectionLabel text="// what drives us" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <MissionCard
            Ghost={IconRocket}
            accent="#4f6eff"
            AccentIcon={IconTarget}
            title={mv.mission.title}
            body={mv.mission.body}
          />
          <MissionCard
            Ghost={IconEye}
            accent="#38debb"
            AccentIcon={IconSparkle}
            title={mv.vision.title}
            body={mv.vision.body}
          />
        </div>
      </div>
    </section>
  );
}