"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";

const HeroStats = [
  { value: "24h",   label: "Response time"    },
  { value: "100%",  label: "Transparency"      },
  { value: "2021",  label: "Founded"           },
] as const;

export default function ContactHero() {
  const { t } = useLanguage();
  const h = t.contactHero;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-16 items-center mb-14 relative">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-[-80px] left-[-120px] w-[500px] h-[400px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(79,110,255,0.07) 0%, transparent 65%)" }}
      />

      {/* Left — copy */}
      <div className="relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 border border-[#38debb]/30 bg-[#38debb]/7 rounded-full px-3 py-1.5 mb-7">
          <span className="w-1.5 h-1.5 rounded-full bg-[#38debb] animate-pulse" />
          <span className="font-mono text-[11px] text-[#38debb] uppercase tracking-[0.1em]">
            {h.badge}
          </span>
        </div>

        <h1 className="text-[clamp(34px,4vw,52px)] font-extrabold leading-[1.1] tracking-[-0.03em] mb-5 text-[#f0f1ff]">
          {h.headline1}{" "}
          <span className="text-[#4f6eff]">{h.headline2}</span>
          {h.headline3}
        </h1>

        <p className="text-[15.5px] text-[#8889a8] leading-[1.75] max-w-[480px]">
          {h.body}
        </p>
      </div>

      {/* Right — stat cards */}
      <div className="flex flex-col gap-3">
        {HeroStats.map((s) => (
          <div
            key={s.label}
            className="flex items-center gap-5 rounded-[12px] border border-white/[0.07] px-6 py-5 transition-colors duration-200 hover:bg-[#13141f]"
            style={{ background: "#0e0f1a" }}
          >
            <div className="text-[26px] font-extrabold tracking-[-0.03em] text-[#4f6eff] leading-none w-16 flex-shrink-0">
              {s.value}
            </div>
            <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#4b4c6a]">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}