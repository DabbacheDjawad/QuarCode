"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/lib/i18n/LanguageContext";

// ── Inline SVG icons ──────────────────────────────────────────────────────────

const Icons: Record<string, React.FC<{ size?: number; color?: string }>> = {
  computer: ({ size = 24, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5">
      <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" />
    </svg>
  ),
  shopping_cart: ({ size = 24, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5">
      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><path d="M3 6h18M16 10a4 4 0 0 1-8 0" />
    </svg>
  ),
  code_blocks: ({ size = 24, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5">
      <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  draw: ({ size = 24, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5">
      <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
    </svg>
  ),
  travel_explore: ({ size = 24, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5">
      <circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
  speed: ({ size = 24, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5">
      <path d="M12 2a10 10 0 1 0 10 10" /><path d="M12 12l4-4" />
    </svg>
  ),
  build: ({ size = 24, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  ),
  cloud: ({ size = 24, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5">
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
    </svg>
  ),
  palette: ({ size = 24, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5">
      <circle cx="13.5" cy="6.5" r=".5" fill={color} /><circle cx="17.5" cy="10.5" r=".5" fill={color} />
      <circle cx="8.5" cy="7.5" r=".5" fill={color} /><circle cx="6.5" cy="12.5" r=".5" fill={color} />
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
    </svg>
  ),
  check: ({ size = 16, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  arrowLeft: ({ size = 16, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
      <path d="M19 12H5M12 5l-7 7 7 7" />
    </svg>
  ),
  arrowRight: ({ size = 16, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  ),
  send: ({ size = 16, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
      <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
    </svg>
  ),
  plus: ({ size = 14, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5">
      <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  ),
  minus: ({ size = 14, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5">
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  ),
};

// ── Style map (mirrors Services/page.tsx) ─────────────────────────────────────

const serviceStyles: Record<string, { iconKey: string; accentHex: string; tag: string }> = {
  web:         { iconKey: "computer",      accentHex: "#4f6eff", tag: "01" },
  ecom:        { iconKey: "shopping_cart", accentHex: "#38debb", tag: "02" },
  app:         { iconKey: "code_blocks",   accentHex: "#4f6eff", tag: "03" },
  design:      { iconKey: "draw",          accentHex: "#38debb", tag: "04" },
  seo:         { iconKey: "travel_explore",accentHex: "#8b5cf6", tag: "05" },
  perf:        { iconKey: "speed",         accentHex: "#38debb", tag: "06" },
  maintenance: { iconKey: "build",         accentHex: "#4f6eff", tag: "07" },
  hosting:     { iconKey: "cloud",         accentHex: "#8b5cf6", tag: "08" },
};

// ── FAQ accordion item ────────────────────────────────────────────────────────

import { useState } from "react";

function FaqItem({
  question,
  answer,
  accent,
}: {
  question: string;
  answer: string;
  accent: string;
}) {
  const [open, setOpen] = useState(false);
  const PlusIcon  = Icons.plus;
  const MinusIcon = Icons.minus;

  return (
    <div
      className="border border-white/[0.07] rounded-xl overflow-hidden transition-colors duration-200"
      style={{ background: open ? "#13141f" : "#0e0f1a" }}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-[14.5px] font-semibold text-[#f0f1ff] leading-snug">
          {question}
        </span>
        <span
          className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center border border-white/[0.07] transition-all duration-200"
          style={{ background: open ? accent + "22" : "#1a1b2a", borderColor: open ? accent + "44" : undefined }}
        >
          {open
            ? <MinusIcon size={12} color={accent} />
            : <PlusIcon  size={12} color="#8889a8" />
          }
        </span>
      </button>

      {open && (
        <div className="px-6 pb-5">
          <p className="text-[13.5px] text-[#8889a8] leading-[1.75]">{answer}</p>
        </div>
      )}
    </div>
  );
}

// ── Section label ─────────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-10">
      <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#4f6eff]">
        // {children}
      </span>
      <div className="h-px flex-1 bg-white/[0.07]" />
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function ServiceDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { t } = useLanguage();

  const page   = t.servicesPage;
  const detail = t.serviceDetails;

  // Find matching service from both data sources
  const mainService = page.mainServices.find((s) => s.id === id);
  const detailData  = detail.services.find((s) => s.id === id);

  // If unknown service id — soft 404
  if (!mainService || !detailData) {
    return (
      <>
        <Navbar activePage="services" />
        <main className="pt-[140px] pb-[100px] min-h-screen flex items-center justify-center">
          <div className="text-center">
            <p className="font-mono text-[#4f6eff] text-[12px] uppercase tracking-[0.12em] mb-4">404</p>
            <h1 className="text-[28px] font-extrabold text-[#f0f1ff] mb-4">Service not found</h1>
            <Link href="/Services" className="text-[13.5px] text-[#8889a8] hover:text-[#f0f1ff] transition-colors">
              ← Back to all services
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const style    = serviceStyles[id] ?? serviceStyles["web"];
  const accent   = style.accentHex;
  const Icon     = Icons[style.iconKey] ?? Icons["computer"];
  const CheckIcon     = Icons.check;
  const ArrowRight    = Icons.arrowRight;
  const ArrowLeft     = Icons.arrowLeft;
  const SendIcon      = Icons.send;

  // Related services: look them up in mainServices + style map
  const relatedServices = detailData.related
    .map((relId) => {
      const ms = page.mainServices.find((s) => s.id === relId);
      const st = serviceStyles[relId];
      return ms && st ? { ...ms, ...st } : null;
    })
    .filter(Boolean) as (typeof mainService & typeof style)[];

  return (
    <>
      <Navbar activePage="services" />

      <main className="pt-[120px] pb-[100px]">
        <div className="max-w-[1280px] mx-auto px-10">

          {/* ── Breadcrumb ──────────────────────────────────────────────────── */}
          <div className="flex items-center gap-2 mb-10">
            <Link
              href="/Services"
              className="flex items-center gap-1.5 font-mono text-[12px] uppercase tracking-[0.08em] text-[#4b4c6a] hover:text-[#8889a8] transition-colors"
            >
              <ArrowLeft size={13} color="currentColor" />
              {detail.backLabel}
            </Link>
            <span className="text-[#1a1b2a]">/</span>
            <span className="font-mono text-[12px] uppercase tracking-[0.08em]" style={{ color: accent }}>
              {mainService.title}
            </span>
          </div>

          {/* ── Hero ────────────────────────────────────────────────────────── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-20">

            {/* Left: headline + description */}
            <div className="lg:col-span-7 flex flex-col justify-center">

              {/* Tag row */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-11 h-11 rounded-[10px] flex items-center justify-center flex-shrink-0"
                  style={{ background: accent + "18", border: `1px solid ${accent}33` }}
                >
                  <Icon size={22} color={accent} />
                </div>
                <span className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: accent }}>
                  {style.tag} · {mainService.title}
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-[40px] md:text-[52px] font-extrabold tracking-[-0.03em] leading-[1.1] text-[#f0f1ff] mb-4">
                {detailData.tagline}
              </h1>

              {/* Long description */}
              <p className="text-[15.5px] text-[#8889a8] leading-[1.8] mb-8 max-w-[560px]">
                {detailData.longDescription}
              </p>

              {/* CTA buttons */}
              <div className="flex flex-wrap gap-3">
                <Link
                  href={`/Contact?service=${encodeURIComponent(mainService.title)}`}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-[10px] text-[14px] font-semibold text-white transition-all duration-150 hover:-translate-y-px hover:shadow-[0_8px_24px_rgba(79,110,255,0.3)]"
                  style={{ background: accent }}
                >
                  <SendIcon size={15} color="white" />
                  {detail.getQuoteLabel}
                </Link>
                <Link
                  href="/Services"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-[10px] text-[14px] font-semibold text-[#8889a8] border border-white/[0.08] transition-all duration-150 hover:text-[#f0f1ff] hover:border-white/[0.15]"
                  style={{ background: "#0e0f1a" }}
                >
                  {detail.backLabel}
                </Link>
              </div>
            </div>

            {/* Right: included + perfect-for card */}
            <div className="lg:col-span-5">
              <div
                className="rounded-2xl border border-white/[0.07] p-8 h-full relative overflow-hidden"
                style={{ background: "#0e0f1a" }}
              >
                {/* Top accent */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] opacity-70"
                  style={{ background: `linear-gradient(90deg, ${accent}, transparent)` }}
                />

                {/* Included */}
                <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#4f6eff] mb-4">
                  // {detail.includedLabel}
                </p>
                <ul className="flex flex-col gap-2.5 mb-7">
                  {mainService.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[13.5px] text-[#8889a8]">
                      <span className="mt-[3px] flex-shrink-0">
                        <CheckIcon size={14} color={accent} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Perfect-for */}
                {mainService.perfectFor && mainService.perfectFor.length > 0 && (
                  <>
                    <div className="h-px bg-white/[0.06] mb-6" />
                    <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#4f6eff] mb-4">
                      // {detail.perfectForLabel}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {mainService.perfectFor.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-[11px] px-2.5 py-1 rounded-lg border border-white/[0.07] text-[#4b4c6a]"
                          style={{ background: "#1a1b2a" }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* ── Benefits ────────────────────────────────────────────────────── */}
          <section className="mb-20">
            <SectionLabel>{detail.benefitsLabel}</SectionLabel>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {detailData.benefits.map((b, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-white/[0.07] p-6 flex flex-col gap-3 hover:border-white/[0.12] transition-colors duration-200"
                  style={{ background: "#0e0f1a" }}
                >
                  <div
                    className="w-8 h-8 rounded-[7px] flex items-center justify-center flex-shrink-0"
                    style={{ background: accent + "18" }}
                  >
                    <CheckIcon size={14} color={accent} />
                  </div>
                  <div>
                    <p className="text-[14px] font-bold text-[#f0f1ff] mb-1.5">{b.title}</p>
                    <p className="text-[13px] text-[#4b4c6a] leading-[1.7]">{b.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Process ─────────────────────────────────────────────────────── */}
          <section className="mb-20">
            <SectionLabel>{detail.processLabel}</SectionLabel>
            <div className="relative">
              {/* Connecting line */}
              <div
                className="hidden lg:block absolute top-[28px] left-[28px] right-[28px] h-px"
                style={{ background: `linear-gradient(90deg, ${accent}44, ${accent}11, transparent)` }}
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
                {detailData.process.map((step, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-white/[0.07] p-5 flex flex-col gap-4"
                    style={{ background: "#0e0f1a" }}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-mono text-[11px] font-bold"
                        style={{ background: accent + "22", color: accent, border: `1px solid ${accent}44` }}
                      >
                        {step.step}
                      </div>
                    </div>
                    <div>
                      <p className="text-[13.5px] font-bold text-[#f0f1ff] mb-2">{step.title}</p>
                      <p className="text-[12.5px] text-[#4b4c6a] leading-[1.7]">{step.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── FAQ ─────────────────────────────────────────────────────────── */}
          <section className="mb-20">
            <SectionLabel>{detail.faqLabel}</SectionLabel>
            <div className="max-w-[760px] flex flex-col gap-3">
              {detailData.faqs.map((faq, i) => (
                <FaqItem key={i} question={faq.question} answer={faq.answer} accent={accent} />
              ))}
            </div>
          </section>

          {/* ── Related services ────────────────────────────────────────────── */}
          {relatedServices.length > 0 && (
            <section className="mb-20">
              <SectionLabel>{detail.relatedLabel}</SectionLabel>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {relatedServices.map((rel) => {
                  const RelIcon = Icons[rel.iconKey] ?? Icons["computer"];
                  return (
                    <Link
                      key={rel.id}
                      href={`/Services/${rel.id}`}
                      className="group rounded-xl border border-white/[0.07] p-6 flex items-start gap-4 hover:border-white/[0.14] hover:bg-[#13141f] transition-all duration-200"
                      style={{ background: "#0e0f1a" }}
                    >
                      <div
                        className="w-10 h-10 rounded-[9px] flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ background: rel.accentHex + "18", border: `1px solid ${rel.accentHex}33` }}
                      >
                        <RelIcon size={20} color={rel.accentHex} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2 mb-1.5">
                          <p className="text-[14px] font-bold text-[#f0f1ff] group-hover:text-white transition-colors">
                            {rel.title}
                          </p>
                          <ArrowRight size={14} color={rel.accentHex} />
                        </div>
                        <p className="text-[12.5px] text-[#4b4c6a] leading-[1.6] line-clamp-2">
                          {rel.description}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </section>
          )}

          {/* ── Bottom CTA ──────────────────────────────────────────────────── */}
          <section>
            <div
              className="rounded-2xl border border-white/[0.07] p-10 md:p-14 relative overflow-hidden text-center"
              style={{ background: "#0e0f1a" }}
            >
              {/* Glow */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse 60% 50% at 50% 100%, ${accent}18, transparent)`,
                }}
              />
              {/* Top accent */}
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[160px] h-[2px] rounded-full opacity-80"
                style={{ background: accent }}
              />

              <p className="font-mono text-[11px] uppercase tracking-[0.12em] mb-5" style={{ color: accent }}>
                // {mainService.title}
              </p>
              <h2 className="text-[30px] md:text-[38px] font-extrabold tracking-[-0.02em] text-[#f0f1ff] mb-4">
                {detail.ctaHeadline}
              </h2>
              <p className="text-[15px] text-[#8889a8] leading-[1.75] mb-8 max-w-[480px] mx-auto">
                {detail.ctaBody}
              </p>
              <Link
                href={`/Contact?service=${encodeURIComponent(mainService.title)}`}
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-[10px] text-[14.5px] font-semibold text-white transition-all duration-150 hover:-translate-y-px hover:shadow-[0_12px_32px_rgba(0,0,0,0.4)]"
                style={{ background: accent }}
              >
                <SendIcon size={16} color="white" />
                {detail.ctaButton}
              </Link>
            </div>
          </section>

        </div>
      </main>

      <Footer
        tagline={page.footerColumns?.[0] ? undefined : undefined}
        columns={page.footerColumns}
        copyright={page.footerCopyright}
      />
    </>
  );
}