"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";

const serviceIcons = [
  // Web Engineering
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
      <rect x="3" y="3" width="18" height="18" rx="2"/>
      <path d="M9 9l-3 3 3 3M15 9l3 3-3 3M13 7l-2 10"/>
    </svg>
  ),
  // Platform & APIs
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
      <rect x="2" y="3" width="20" height="14" rx="2"/>
      <path d="M8 21h8M12 17v4"/>
      <path d="M7 8h2M11 8h6M7 11h4M15 11h2"/>
    </svg>
  ),
  // Cloud & DevOps
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
    </svg>
  ),
];

const serviceTags = ["01 — Frontend", "02 — Backend", "03 — Infrastructure"];

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

function ServiceCard({
  title,
  description,
  features,
  icon,
  tag,
}: {
  title: string;
  description: string;
  features: readonly string[];
  icon: React.ReactNode;
  tag: string;
}) {
  return (
    <div
      className="
        group relative p-9 overflow-hidden
        transition-colors duration-200
        hover:bg-[#13141f]
        cursor-default
      "
      style={{ background: "#0e0f1a" }}
    >
      {/* Bottom accent line on hover */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(79,110,255,0.4)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Icon */}
      <div className="w-11 h-11 rounded-[10px] border border-white/[0.07] bg-[#1a1b2a] flex items-center justify-center mb-6 text-[#4f6eff]">
        {icon}
      </div>

      {/* Tag */}
      <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#4b4c6a] block mb-2.5">
        {tag}
      </span>

      {/* Title */}
      <h3 className="text-[18px] font-bold tracking-[-0.02em] leading-[1.3] mb-3 text-[#f0f1ff]">
        {title}
      </h3>

      {/* Description */}
      <p className="text-[13.5px] text-[#8889a8] leading-[1.7] mb-6">
        {description}
      </p>

      {/* Features */}
      <ul className="flex flex-col gap-2">
        {features.map((f) => (
          <li
            key={f}
            className="flex items-center gap-2.5 font-mono text-[12.5px] text-[#4b4c6a]"
          >
            <span className="text-[#4f6eff] text-[11px] flex-shrink-0">→</span>
            {f}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Services() {
  const { t } = useLanguage();
  const s = t.services;

  return (
    <section
      id="services"
      className="py-[100px] px-10 max-w-[1280px] mx-auto border-t border-white/[0.06]"
    >
      <SectionLabel text="// what we build" />

      {/* Header */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-end mb-16">
        <h2 className="text-[clamp(28px,3vw,42px)] font-extrabold tracking-[-0.03em] leading-[1.15] text-[#f0f1ff]">
          {s.sectionHeadline1}{" "}
          <span className="text-[#4f6eff]">{s.sectionHeadline2}</span>
        </h2>
        <p className="text-[15px] text-[#8889a8] leading-[1.75]">
          {s.sectionBody}
        </p>
      </div>

      {/* Cards — joined flush grid */}
      <div
        className="grid grid-cols-1 md:grid-cols-3 rounded-2xl overflow-hidden border border-white/[0.07]"
        style={{ gap: "1px", background: "rgba(255,255,255,0.07)" }}
      >
        {s.items.map((item, i) => (
          <ServiceCard
            key={item.title}
            title={item.title}
            description={item.description}
            features={item.features}
            icon={serviceIcons[i]}
            tag={serviceTags[i]}
          />
        ))}
      </div>
    </section>
  );
}