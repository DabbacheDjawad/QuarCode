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

export default function OurStory() {
  const { t } = useLanguage();
  const s = t.ourStory;

  const milestones = [
    { year: s.milestone1Year, label: s.milestone1Label },
    { year: s.milestone2Year, label: s.milestone2Label },
    { year: s.milestone3Year, label: s.milestone3Label },
  ];

  return (
    <section
      className="py-[100px] px-10 border-t border-white/[0.06]"
      style={{ background: "#0e0f1a" }}
    >
      <div className="max-w-[1280px] mx-auto">
        <SectionLabel text="// our story" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          {/* Left — copy */}
          <div>
            {/* Inline badge */}
            <div className="inline-flex items-center gap-2 border border-white/[0.07] bg-[#13141f] rounded-full px-3 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4f6eff]" />
              <span className="font-mono text-[11px] text-[#4b4c6a] uppercase tracking-[0.1em]">
                {s.badge}
              </span>
            </div>

            <h2 className="text-[clamp(24px,2.5vw,34px)] font-extrabold tracking-[-0.03em] leading-[1.2] mb-6 text-[#f0f1ff]">
              {s.headline}
            </h2>

            <div className="flex flex-col gap-4 text-[15px] text-[#8889a8] leading-[1.75]">
              <p>{s.body1}</p>
              <p>{s.body2}</p>
            </div>
          </div>

          {/* Right — timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-0 top-2 bottom-2 w-px bg-white/[0.07]" />

            <div className="flex flex-col gap-10 pl-8">
              {milestones.map((m, i) => (
                <div key={i} className="relative group">
                  {/* Timeline dot */}
                  <span className="absolute -left-[33px] top-1.5 w-3 h-3 rounded-full bg-[#4f6eff] border-2 border-[#07080f] transition-transform duration-200 group-hover:scale-125" />

                  <div
                    className="rounded-[12px] border border-white/[0.07] px-6 py-5 transition-colors duration-200 hover:bg-[#13141f]"
                    style={{ background: "#07080f" }}
                  >
                    <div className="font-mono text-[22px] font-bold text-[#4f6eff] tracking-[-0.02em] leading-none mb-2">
                      {m.year}
                    </div>
                    <div className="text-[13.5px] text-[#8889a8] leading-[1.6]">
                      {m.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}