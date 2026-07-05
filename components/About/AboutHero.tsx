"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";

// SVG icon: globe / network
const IconGlobe = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="12" r="10"/>
    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
);

const IconUsers = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

const IconCode = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <polyline points="16 18 22 12 16 6"/>
    <polyline points="8 6 2 12 8 18"/>
  </svg>
);

const heroStats = [
  { icon: <IconCode />,  value: "64+",   label: "Products shipped" },
  { icon: <IconUsers />, value: "12",    label: "Engineers" },
  { icon: <IconGlobe />, value: "3",     label: "Countries served" },
] as const;

export default function AboutHero() {
  const { t } = useLanguage();
  const h = t.aboutHero;

  return (
    <section className="pt-[140px] pb-[100px] px-10 max-w-[1280px] mx-auto overflow-hidden relative">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-[-200px] w-[700px] h-[600px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(79,110,255,0.07) 0%, transparent 65%)" }}
      />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-20 items-center">

        {/* Left — copy */}
        <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 border border-[#4f6eff]/30 bg-[#4f6eff]/7 rounded-full px-3 py-1.5 mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-[#38debb]" />
            <span className="font-mono text-[11px] text-[#38debb] uppercase tracking-[0.1em]">
              {h.badge}
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-[clamp(36px,4vw,58px)] font-extrabold leading-[1.08] tracking-[-0.03em] mb-6 text-[#f0f1ff]">
            {h.headline1}{" "}
            <span className="bg-gradient-to-r from-[#6b8eff] to-[#38debb] bg-clip-text text-transparent">
              {h.headline2}
            </span>{" "}
            {h.headline3}
          </h1>

          {/* Body */}
          <p className="text-[16px] text-[#8889a8] leading-[1.75] max-w-[520px]">
            {h.body}
          </p>
        </div>

        {/* Right — stat cards */}
        <div className="flex flex-col gap-3">
          {heroStats.map((s) => (
            <div
              key={s.label}
              className="flex items-center gap-5 rounded-[12px] border border-white/[0.07] px-6 py-5 transition-colors duration-200 hover:bg-[#13141f]"
              style={{ background: "#0e0f1a" }}
            >
              <div className="w-10 h-10 rounded-[9px] border border-white/[0.07] bg-[#1a1b2a] flex items-center justify-center text-[#4f6eff] flex-shrink-0">
                {s.icon}
              </div>
              <div>
                <div className="text-[26px] font-extrabold tracking-[-0.03em] text-[#f0f1ff] leading-none mb-0.5">
                  {s.value}
                </div>
                <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#4b4c6a]">
                  {s.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}