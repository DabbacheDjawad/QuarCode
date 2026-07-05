"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/lib/i18n/LanguageContext";

// ── Inline SVG icons ──────────────────────────────────────────────────────────

const ServiceIcons: Record<string, React.FC<{ color?: string }>> = {
  computer: ({ color = "currentColor" }) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5">
      <rect x="2" y="3" width="20" height="14" rx="2"/>
      <path d="M8 21h8M12 17v4"/>
    </svg>
  ),
  shopping_cart: ({ color = "currentColor" }) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5">
      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
      <path d="M3 6h18M16 10a4 4 0 0 1-8 0"/>
    </svg>
  ),
  code_blocks: ({ color = "currentColor" }) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5">
      <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
    </svg>
  ),
  draw: ({ color = "currentColor" }) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5">
      <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
    </svg>
  ),
  travel_explore: ({ color = "currentColor" }) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5">
      <circle cx="12" cy="12" r="10"/>
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  ),
  speed: ({ color = "currentColor" }) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5">
      <path d="M12 2a10 10 0 1 0 10 10"/><path d="M12 12l4-4"/>
    </svg>
  ),
  build: ({ color = "currentColor" }) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
    </svg>
  ),
  cloud: ({ color = "currentColor" }) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5">
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
    </svg>
  ),
  palette: ({ color = "currentColor" }) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5">
      <circle cx="13.5" cy="6.5" r=".5" fill={color}/>
      <circle cx="17.5" cy="10.5" r=".5" fill={color}/>
      <circle cx="8.5"  cy="7.5"  r=".5" fill={color}/>
      <circle cx="6.5"  cy="12.5" r=".5" fill={color}/>
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>
    </svg>
  ),
  arrow_forward: ({ color = "currentColor" }) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
      <path d="M5 12h14M12 5l7 7-7 7"/>
    </svg>
  ),
};

const WhyIcons: Record<string, React.FC> = {
  shield: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  ),
  bolt: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
    </svg>
  ),
  people: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  ),
};

// ── Styling config ────────────────────────────────────────────────────────────
// FIX: ecom now has colSpan "md:col-span-4" so the 12-col grid fills correctly.
// Previously colSpan was "" which left the card without an explicit span,
// causing it to shrink to its content width and clip.

const serviceStyles: Record<string, {
  colSpan: string;
  iconKey: string;
  accentHex: string;
  tag: string;
  wide: boolean;
}> = {
  web:         { colSpan: "md:col-span-8", iconKey: "computer",      accentHex: "#4f6eff", tag: "01", wide: true  },
  ecom:        { colSpan: "md:col-span-4", iconKey: "shopping_cart", accentHex: "#38debb", tag: "02", wide: false }, // ← fixed
  app:         { colSpan: "",              iconKey: "code_blocks",   accentHex: "#4f6eff", tag: "03", wide: false },
  design:      { colSpan: "",              iconKey: "draw",           accentHex: "#38debb", tag: "04", wide: false },
  seo:         { colSpan: "",              iconKey: "travel_explore", accentHex: "#8b5cf6", tag: "05", wide: false },
  perf:        { colSpan: "",              iconKey: "speed",          accentHex: "#38debb", tag: "06", wide: false },
  maintenance: { colSpan: "",              iconKey: "build",          accentHex: "#4f6eff", tag: "07", wide: false },
  hosting:     { colSpan: "",              iconKey: "cloud",          accentHex: "#8b5cf6", tag: "08", wide: false },
  brand:       { colSpan: "",              iconKey: "palette",        accentHex: "#4f6eff", tag: "09", wide: false },
};

const whyIconKeys = ["shield", "bolt", "people"];

type ServiceTranslation = {
  id: string;
  title: string;
  description: string;
  items: readonly string[];
  perfectFor?: readonly string[];
};

type StyledService = ServiceTranslation & (typeof serviceStyles)[string];

// ── ServiceCard ───────────────────────────────────────────────────────────────
// FIX: colSpan is always applied (not gated on `wide`), so both the 8-col and
// 4-col cards get their correct span class inside the 12-column grid row.

function ServiceCard({ s, getAQuote }: { s: StyledService; getAQuote: string }) {
  const Icon = ServiceIcons[s.iconKey] ?? ServiceIcons["computer"];
  const Arrow = ServiceIcons["arrow_forward"];

  return (
    <div
      className={`
        ${s.colSpan}
        group relative rounded-2xl border border-white/[0.07] p-8
        flex flex-col transition-colors duration-200 hover:bg-[#13141f]
        min-w-0
      `}
      style={{ background: "#0e0f1a" }}
    >
      {/* Top accent bar */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-white/[0.04] overflow-hidden rounded-t-2xl">
        <div
          className="absolute inset-0 w-0 group-hover:w-full transition-all duration-500 ease-out"
          style={{ background: s.accentHex }}
        />
      </div>

      {/* Icon + tag */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-[9px] border border-white/[0.07] bg-[#1a1b2a] flex items-center justify-center flex-shrink-0">
          <Icon color={s.accentHex} />
        </div>
        <span className="font-mono text-[10px] uppercase tracking-[0.14em]" style={{ color: s.accentHex }}>
          {s.tag}
        </span>
      </div>

      {/* Title */}
      <h2 className={`font-extrabold tracking-[-0.02em] leading-[1.25] mb-3 text-[#f0f1ff] ${s.wide ? "text-[22px]" : "text-[17px]"}`}>
        {s.title}
      </h2>

      {/* Description */}
      <p className="text-[13.5px] text-[#8889a8] leading-[1.7] mb-5 flex-grow">
        {s.description}
      </p>

      {/* Feature list */}
      <ul className="flex flex-col gap-1.5 mb-5">
        {s.items.map((item) => (
          <li key={item} className="flex items-start gap-2.5 font-mono text-[12px] text-[#4b4c6a]">
            <span className="mt-[5px] flex-shrink-0 text-[10px]" style={{ color: s.accentHex }}>→</span>
            {item}
          </li>
        ))}
      </ul>

      {/* Perfect-for tags */}
      {s.perfectFor && s.perfectFor.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-5">
          {s.perfectFor.map((pf) => (
            <span
              key={pf}
              className="font-mono text-[10.5px] px-2 py-0.5 rounded-md border border-white/[0.07] text-[#4b4c6a]"
              style={{ background: "#1a1b2a" }}
            >
              {pf}
            </span>
          ))}
        </div>
      )}

      {/* CTA */}
      <div className="mt-auto pt-4">
        <Link
          href="/Contact"
          className="inline-flex items-center gap-2 text-[13px] font-semibold transition-all duration-200 group-hover:gap-3"
          style={{ color: s.accentHex }}
        >
          {getAQuote}
          {Arrow && <Arrow color={s.accentHex} />}
        </Link>
      </div>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function ServicesPage() {
  const { t } = useLanguage();
  const page = t.servicesPage;

  const services: StyledService[] = page.mainServices.map((s) => ({
    ...s,
    ...(serviceStyles[s.id] ?? serviceStyles["web"]),
  }));

  const row1 = services.slice(0, 2);  // web (col-span-8) + ecom (col-span-4)
  const row2 = services.slice(2, 5);  // app + design + seo
  const row3 = services.slice(5, 8);  // perf + maintenance + hosting
  const row4 = services.slice(8, 9);  // brand

  const getAQuote = page.getAQuote;

  return (
    <>
      <Navbar activePage="services" />

      <main className="pt-[140px]">

        {/* ── Hero ── */}
        <section className="relative px-10 max-w-[1280px] mx-auto mb-[100px] overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute top-[-60px] right-[-100px] w-[600px] h-[500px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(79,110,255,0.07) 0%, transparent 65%)" }}
          />
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 border border-[#4f6eff]/30 bg-[#4f6eff]/7 rounded-full px-3 py-1.5 mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-[#38debb] animate-pulse" />
              <span className="font-mono text-[11px] text-[#38debb] uppercase tracking-[0.1em]">
                {page.hero.badge}
              </span>
            </div>
            <h1 className="text-[clamp(36px,4vw,58px)] font-extrabold leading-[1.08] tracking-[-0.03em] mb-5 text-[#f0f1ff]">
              {page.hero.headline1}{" "}
              <span className="bg-gradient-to-r from-[#6b8eff] to-[#38debb] bg-clip-text text-transparent">
                {page.hero.headline2}
              </span>
              .
            </h1>
            <p className="text-[16px] text-[#8889a8] leading-[1.75] max-w-[560px]">
              {page.hero.body}
            </p>
          </div>
        </section>

        {/* ── Services bento grid ── */}
        <section className="px-10 max-w-[1280px] mx-auto mb-[100px] space-y-3">

          {/*
            Row 1: 12-col grid.
            web  → md:col-span-8   (explicitly set in serviceStyles)
            ecom → md:col-span-4   (explicitly set in serviceStyles — THE FIX)
            Both cards receive their colSpan class directly, so the grid
            fills its 12 columns and neither card overflows or clips.
          */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
            {row1.map((s) => (
              <ServiceCard key={s.id} s={s} getAQuote={getAQuote} />
            ))}
          </div>

          {/* Row 2: three equal thirds */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {row2.map((s) => (
              <ServiceCard key={s.id} s={s} getAQuote={getAQuote} />
            ))}
          </div>

          {/* Row 3: three equal thirds */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {row3.map((s) => (
              <ServiceCard key={s.id} s={s} getAQuote={getAQuote} />
            ))}
          </div>

          {/* Row 4: brand — single card, one third width */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {row4.map((s) => (
              <ServiceCard key={s.id} s={s} getAQuote={getAQuote} />
            ))}
          </div>

        </section>

        {/* ── Why Quarcode ── */}
        <section className="py-[100px] border-t border-white/[0.06]" style={{ background: "#0e0f1a" }}>
          <div className="px-10 max-w-[1280px] mx-auto">
            <div className="flex items-center gap-3.5 mb-14">
              <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#4f6eff]">
                // why quarcode
              </span>
              <div className="h-px flex-1 bg-white/[0.07]" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-end mb-12">
              <h2 className="text-[clamp(24px,2.8vw,36px)] font-extrabold tracking-[-0.03em] leading-[1.15] text-[#f0f1ff]">
                {page.why.sectionTitle}
              </h2>
              <p className="text-[15px] text-[#8889a8] leading-[1.75]">
                {page.why.sectionBody}
              </p>
            </div>
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 rounded-2xl overflow-hidden border border-white/[0.07]"
              style={{ gap: "1px", background: "rgba(255,255,255,0.07)" }}
            >
              {page.why.items.map((item, i) => {
                const WhyIcon = WhyIcons[whyIconKeys[i] ?? "shield"];
                return (
                  <div
                    key={item.title}
                    className="group px-7 py-8 transition-colors duration-200 hover:bg-[#13141f]"
                    style={{ background: "#07080f" }}
                  >
                    <div className="w-10 h-10 rounded-[9px] border border-white/[0.07] bg-[#1a1b2a] flex items-center justify-center text-[#4f6eff] mb-5">
                      <WhyIcon />
                    </div>
                    <h3 className="text-[15px] font-bold tracking-[-0.01em] mb-2.5 text-[#f0f1ff]">
                      {item.title}
                    </h3>
                    <p className="text-[13px] text-[#8889a8] leading-[1.7]">
                      {item.body}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Our Process ── */}
        <section className="py-[100px] border-t border-white/[0.06]" style={{ background: "#07080f" }}>
          <div className="px-10 max-w-[1280px] mx-auto">
            <div className="flex items-center gap-3.5 mb-14">
              <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#4f6eff]">
                // our process
              </span>
              <div className="h-px flex-1 bg-white/[0.07]" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-end mb-12">
              <h2 className="text-[clamp(24px,2.8vw,36px)] font-extrabold tracking-[-0.03em] leading-[1.15] text-[#f0f1ff]">
                {page.process.sectionTitle}
              </h2>
              <p className="text-[15px] text-[#8889a8] leading-[1.75]">
                {page.process.sectionBody}
              </p>
            </div>
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 rounded-2xl overflow-hidden border border-white/[0.07]"
              style={{ gap: "1px", background: "rgba(255,255,255,0.07)" }}
            >
              {page.process.steps.map((step) => (
                <div
                  key={step.number}
                  className="group px-6 py-7 transition-colors duration-200 hover:bg-[#13141f]"
                  style={{ background: "#0e0f1a" }}
                >
                  <div className="font-mono text-[11px] uppercase tracking-[0.1em] text-[#4b4c6a] mb-3">
                    {step.number}
                  </div>
                  <h3 className="text-[14px] font-bold text-[#f0f1ff] mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-[12.5px] text-[#8889a8] leading-[1.6]">
                    {step.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="px-10 max-w-[1280px] mx-auto py-[100px]">
          <div
            className="rounded-2xl border border-[#4f6eff]/20 px-10 py-20 text-center relative overflow-hidden"
            style={{ background: "rgba(79,110,255,0.05)" }}
          >
            <div aria-hidden className="pointer-events-none absolute top-0 right-0 w-64 h-64 rounded-full blur-[100px]" style={{ background: "rgba(79,110,255,0.08)" }} />
            <div aria-hidden className="pointer-events-none absolute bottom-0 left-0 w-64 h-64 rounded-full blur-[100px]" style={{ background: "rgba(56,222,187,0.06)" }} />
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-[clamp(26px,3vw,40px)] font-extrabold tracking-[-0.03em] leading-[1.15] mb-5 text-[#f0f1ff]">
                {page.cta.headline}
              </h2>
              <p className="text-[15px] text-[#8889a8] leading-[1.75] mb-10 max-w-xl mx-auto">
                {page.cta.body}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/contact"
                  className="bg-[#4f6eff] text-white px-8 py-3.5 rounded-[10px] text-[14px] font-semibold transition-all duration-150 hover:-translate-y-px hover:shadow-[0_8px_28px_rgba(79,110,255,0.35)]"
                >
                  {page.cta.cta1}
                </Link>
                <Link
                  href="/faq"
                  className="text-[#8889a8] border border-white/[0.07] px-8 py-3.5 rounded-[10px] text-[14px] font-medium transition-all duration-150 hover:border-[#4f6eff]/35 hover:text-[#f0f1ff]"
                >
                  {page.cta.cta2}
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer
        columns={page.footerColumns}
        copyright={page.footerCopyright}
      />
    </>
  );
}