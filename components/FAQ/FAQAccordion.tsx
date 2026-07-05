"use client";

import { useState } from "react";

// ── Types (unchanged from original) ───────────────────────────────────────────

export type AnswerData = {
  intro: string;
  tags: readonly string[];
  bullets: readonly string[];
  steps: readonly string[];
  checks: readonly string[];
  note: string;
};

export type AccordionItem = {
  id: string;
  icon: string;
  question: string;
  answer: AnswerData;
  highlights?: readonly string[];
};

type Props = {
  items: AccordionItem[];
};

// ── Inline SVG icons ───────────────────────────────────────────────────────────

// Map Material icon names used in FAQ_META to local SVGs
const IconMap: Record<string, React.FC> = {
  payments: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="1" y="4" width="22" height="16" rx="2"/><path d="M1 10h22"/>
    </svg>
  ),
  schedule: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
    </svg>
  ),
  smartphone: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/>
    </svg>
  ),
  edit: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
    </svg>
  ),
  travel_explore: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10"/>
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  ),
  cloud: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
    </svg>
  ),
  build: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
    </svg>
  ),
  sync: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M21 2v6h-6M3 12a9 9 0 0 1 15-6.7L21 8M3 22v-6h6M21 12a9 9 0 0 1-15 6.7L3 16"/>
    </svg>
  ),
  language: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10"/>
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  ),
  rocket_launch: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
    </svg>
  ),
  verified_user: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      <path d="m9 12 2 2 4-4"/>
    </svg>
  ),
  star: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  ),
  check_circle: () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#38debb" strokeWidth="2">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
      <polyline points="22 4 12 14.01 9 11.01"/>
    </svg>
  ),
  expand_more: ({ rotated }: { rotated?: boolean }) => (
    <svg
      width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      style={{ transform: rotated ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s ease" }}
    >
      <polyline points="6 9 12 15 18 9"/>
    </svg>
  ),
};

const DefaultIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="12" r="10"/>
  </svg>
);

// ── Small answer building blocks ──────────────────────────────────────────────

function Tag({ label }: { label: string }) {
  return (
    <span
      className="font-mono px-2 py-1 rounded-md border border-white/[0.07] text-[11px] uppercase tracking-[0.06em] text-[#8889a8]"
      style={{ background: "#1a1b2a" }}
    >
      {label}
    </span>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2.5">
      <span className="mt-[7px] w-1 h-1 rounded-full bg-[#4f6eff] flex-shrink-0" />
      <span>{children}</span>
    </li>
  );
}

function Step({ number, children }: { number: number; children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#4f6eff]/10 text-[#4f6eff] font-mono text-[11px] flex-shrink-0 mt-0.5">
        {number}
      </span>
      <span>{children}</span>
    </li>
  );
}

function Check({ children }: { children: React.ReactNode }) {
  const CheckIcon = IconMap["check_circle"] as React.FC;

  return (
    <li className="flex items-center gap-2.5">
      <span className="flex-shrink-0">
        <CheckIcon />
      </span>
      <span>{children}</span>
    </li>
  );
}

function AnswerBody({ answer }: { answer: AnswerData }) {
  return (
    <div className="space-y-3 text-[13.5px] leading-[1.7]">
      {answer.intro && <p>{answer.intro}</p>}

      {answer.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-3">
          {answer.tags.map((tag) => <Tag key={tag} label={tag} />)}
        </div>
      )}

      {answer.bullets.length > 0 && (
        <ul className="mt-3 space-y-2">
          {answer.bullets.map((b) => <Bullet key={b}>{b}</Bullet>)}
        </ul>
      )}

      {answer.steps.length > 0 && (
        <ol className="mt-3 space-y-2">
          {answer.steps.map((s, i) => <Step key={i} number={i + 1}>{s}</Step>)}
        </ol>
      )}

      {answer.checks.length > 0 && (
        <ul className="space-y-2">
          {answer.checks.map((c) => <Check key={c}>{c}</Check>)}
        </ul>
      )}

      {answer.note && (
        <p className="mt-3 text-[12.5px] text-[#4b4c6a] font-mono">{answer.note}</p>
      )}
    </div>
  );
}

// ── Main accordion ────────────────────────────────────────────────────────────

export default function FaqAccordion({ items }: Props) {
  const [openId, setOpenId] = useState<string>(items[0]?.id ?? "");

  const toggle = (id: string) => setOpenId((prev) => (prev === id ? "" : id));

  return (
    <div className="flex flex-col gap-2">
      {items.map((item, index) => {
        const isOpen = openId === item.id;
        const ItemIcon = (IconMap[item.icon] as React.FC) ?? DefaultIcon;
        const ExpandIcon = IconMap["expand_more"] as React.FC<{ rotated?: boolean }>;

        return (
          <div
            key={item.id}
            className={`
              rounded-2xl border overflow-hidden transition-all duration-200
              ${isOpen
                ? "border-[#4f6eff]/25 bg-[#0e0f1a]"
                : "border-white/[0.07] bg-[#07080f] hover:bg-[#0e0f1a] hover:border-white/[0.1]"
              }
            `}
          >
            {/* Trigger */}
            <button
              className="w-full flex items-center justify-between px-6 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4f6eff]/40 rounded-2xl"
              onClick={() => toggle(item.id)}
              aria-expanded={isOpen}
              aria-controls={`faq-body-${item.id}`}
            >
              <div className="flex items-center gap-4 min-w-0">
                {/* Number badge */}
                <span className="hidden sm:flex w-7 h-7 rounded-lg border border-white/[0.07] bg-[#1a1b2a] items-center justify-center font-mono text-[10px] text-[#4b4c6a] flex-shrink-0">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Icon */}
                <span className="w-8 h-8 rounded-[8px] border border-white/[0.07] bg-[#1a1b2a] flex items-center justify-center text-[#4f6eff] flex-shrink-0">
                  <ItemIcon />
                </span>

                {/* Question */}
                <span className="text-[14.5px] font-semibold text-[#f0f1ff] tracking-[-0.01em] pr-4 leading-snug">
                  {item.question}
                </span>
              </div>

              <span className="text-[#4b4c6a] flex-shrink-0">
                <ExpandIcon rotated={isOpen} />
              </span>
            </button>

            {/* Body — CSS grid height trick */}
            <div
              id={`faq-body-${item.id}`}
              role="region"
              className={`grid transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
            >
              <div className="overflow-hidden">
                <div className="px-6 pb-6 ml-[72px] border-l border-[#4f6eff]/20 pl-5 text-[#8889a8]">
                  <AnswerBody answer={item.answer} />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}