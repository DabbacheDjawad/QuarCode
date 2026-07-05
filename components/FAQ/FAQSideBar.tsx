"use client";

import Link from "next/link";
import { categories, type FaqCategory } from "@/data/FAQ";
import { useLanguage } from "@/lib/i18n/LanguageContext";

// Inline SVG icons replacing Material Symbols
const SidebarIcons: Record<string, React.FC> = {
  apps: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
      <rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>
    </svg>
  ),
  payments: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="1" y="4" width="22" height="16" rx="2"/><path d="M1 10h22"/>
    </svg>
  ),
  build: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
    </svg>
  ),
  schedule: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
    </svg>
  ),
  arrow_forward: () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14M12 5l7 7-7 7"/>
    </svg>
  ),
};

// Fallback icon
const DefaultIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="12" r="10"/>
  </svg>
);

// Map FAQ category icons to our local SVG set
const CATEGORY_ICON_MAP: Record<string, string> = {
  pricing: "payments",
  process: "schedule",
  support: "build",
};

type Props = {
  active: FaqCategory | "all";
  onChange: (cat: FaqCategory | "all") => void;
};

export default function FaqSidebar({ active, onChange }: Props) {
  const { t } = useLanguage();
  const s = t.faqSidebar;

  const allCategories = [
    { id: "all" as const, icon: "apps", label: s.allLabel },
    ...categories.map((c) => ({ ...c, icon: CATEGORY_ICON_MAP[c.id] ?? "apps" })),
  ];

  return (
    <aside className="lg:col-span-3 space-y-2">
      {/* Label */}
      <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#4b4c6a] mb-5">
        {s.categoriesLabel}
      </div>

      {/* Category buttons */}
      <nav className="flex flex-col gap-1.5" aria-label={s.categoriesLabel}>
        {allCategories.map((cat) => {
          const isActive = active === cat.id;
          const CatIcon = SidebarIcons[cat.icon] ?? DefaultIcon;
          return (
            <button
              key={cat.id}
              onClick={() => onChange(cat.id)}
              className={`
                flex items-center gap-3 px-4 py-3 rounded-xl text-left text-[13.5px]
                transition-all duration-150 font-medium
                ${isActive
                  ? "bg-[#4f6eff] text-white"
                  : "text-[#8889a8] hover:text-[#f0f1ff] hover:bg-[#13141f]"
                }
              `}
            >
              <span className="flex-shrink-0">
                <CatIcon />
              </span>
              {cat.label}
            </button>
          );
        })}
      </nav>

      {/* Still Curious card */}
      <div
        className="mt-6 p-6 rounded-2xl border border-white/[0.07] relative overflow-hidden"
        style={{ background: "#0e0f1a" }}
      >
        {/* Subtle glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute top-0 right-0 w-32 h-32 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(79,110,255,0.06) 0%, transparent 70%)" }}
        />

        <div className="relative z-10">
          <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#4f6eff] mb-3">
            // still curious?
          </div>
          <h4 className="text-[15px] font-bold tracking-[-0.02em] mb-2.5 text-[#f0f1ff]">
            {s.stillCuriousTitle}
          </h4>
          <p className="text-[13px] text-[#8889a8] leading-[1.65] mb-5">
            {s.stillCuriousBody}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-[#4f6eff] text-[13px] font-semibold transition-all duration-150 hover:gap-3"
          >
            {s.stillCuriousCta}
            {(() => {
              const ArrowIcon = SidebarIcons["arrow_forward"] ?? DefaultIcon;
              return <ArrowIcon />;
            })()}
          </Link>
        </div>
      </div>
    </aside>
  );
}