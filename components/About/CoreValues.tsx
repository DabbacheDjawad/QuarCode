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

const IconVerified = ({ color }: { color: string }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    <path d="M9 12l2 2 4-4"/>
  </svg>
);

const IconBulb = ({ color }: { color: string }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5">
    <path d="M9 21h6M12 3a6 6 0 0 1 6 6c0 2.22-1.21 4.16-3 5.2V17H9v-2.8C7.21 13.16 6 11.22 6 9a6 6 0 0 1 6-6z"/>
  </svg>
);

const IconShield = ({ color }: { color: string }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);

const valueConfig = [
  {
    Icon: IconVerified,
    accent: "#4f6eff",
    tag: "01",
  },
  {
    Icon: IconBulb,
    accent: "#38debb",
    tag: "02",
  },
  {
    Icon: IconShield,
    accent: "#8b5cf6",
    tag: "03",
  },
] as const;

export default function CoreValues() {
  const { t } = useLanguage();
  const cv = t.coreValues;

  return (
    <section className="py-[100px] px-10 border-t border-white/[0.06]" style={{ background: "#0e0f1a" }}>
      <div className="max-w-[1280px] mx-auto">
        <SectionLabel text="// core values" />

        {/* Section header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-end mb-14">
          <h2 className="text-[clamp(24px,2.8vw,36px)] font-extrabold tracking-[-0.03em] leading-[1.15] text-[#f0f1ff]">
            {cv.sectionTitle}
          </h2>
          <p className="text-[15px] text-[#8889a8] leading-[1.75]">
            {cv.sectionBody}
          </p>
        </div>

        {/* Value cards */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 rounded-2xl overflow-hidden border border-white/[0.07]"
          style={{ gap: "1px", background: "rgba(255,255,255,0.07)" }}
        >
          {cv.items.map((item, i) => {
            const cfg = valueConfig[i];
            return (
              <div
                key={item.title}
                className="group relative px-8 py-10 transition-colors duration-200 hover:bg-[#13141f]"
                style={{ background: "#07080f" }}
              >
                {/* Top fill bar */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-white/[0.04]">
                  <div
                    className="absolute inset-0 w-0 group-hover:w-full transition-all duration-500 ease-out"
                    style={{ background: cfg.accent }}
                  />
                </div>

                {/* Icon + tag row */}
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-10 h-10 rounded-[9px] border border-white/[0.07] bg-[#1a1b2a] flex items-center justify-center flex-shrink-0"
                  >
                    <cfg.Icon color={cfg.accent} />
                  </div>
                  <span
                    className="font-mono text-[10px] uppercase tracking-[0.14em]"
                    style={{ color: cfg.accent }}
                  >
                    {cfg.tag}
                  </span>
                </div>

                <h4 className="text-[17px] font-bold tracking-[-0.02em] mb-3 text-[#f0f1ff]">
                  {item.title}
                </h4>
                <p className="text-[13.5px] text-[#8889a8] leading-[1.7]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}