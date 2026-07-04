// components/FAQ/FAQAccordion.tsx
"use client";

import { useState } from "react";
import Icon from "../Icon";

// ── Answer shape (mirrors the faqItems answer object in translations) ─────────

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
  /** highlight text inside intro — e.g. "30,000 DA" or "fully responsive" */
  highlights?: readonly string[];
};

type Props = {
  items: AccordionItem[];
};

// ── Small answer building blocks ─────────────────────────────────────────────

function Tag({ label }: { label: string }) {
  return (
    <span className="px-2 py-1 bg-surface-variant text-code-sm font-code-sm rounded border border-outline-variant/30 uppercase tracking-tighter">
      {label}
    </span>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2">
      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
      <span>{children}</span>
    </li>
  );
}

function Step({ number, children }: { number: number; children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-code-sm font-code-sm shrink-0 mt-0.5">
        {number}
      </span>
      <span>{children}</span>
    </li>
  );
}

function Check({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-center gap-2">
      <span
        className="text-tertiary text-[16px] material-symbols-outlined"
        style={{ fontVariationSettings: "'FILL' 1" }}
      >
        check_circle
      </span>
      <span>{children}</span>
    </li>
  );
}

// ── Renders a structured AnswerData object as JSX ─────────────────────────────

function AnswerBody({ answer }: { answer: AnswerData }) {
  return (
    <div className="space-y-3">
      {answer.intro && <p>{answer.intro}</p>}

      {answer.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-3">
          {answer.tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>
      )}

      {answer.bullets.length > 0 && (
        <ul className="mt-3 space-y-2">
          {answer.bullets.map((b) => (
            <Bullet key={b}>{b}</Bullet>
          ))}
        </ul>
      )}

      {answer.steps.length > 0 && (
        <ol className="mt-3 space-y-2">
          {answer.steps.map((s, i) => (
            <Step key={i} number={i + 1}>{s}</Step>
          ))}
        </ol>
      )}

      {answer.checks.length > 0 && (
        <ul className="space-y-2">
          {answer.checks.map((c) => (
            <Check key={c}>{c}</Check>
          ))}
        </ul>
      )}

      {answer.note && (
        <p className="mt-3 text-sm">{answer.note}</p>
      )}
    </div>
  );
}

// ── Main accordion ────────────────────────────────────────────────────────────

export default function FaqAccordion({ items }: Props) {
  const [openId, setOpenId] = useState<string>(items[0]?.id ?? "");

  const toggle = (id: string) => setOpenId((prev) => (prev === id ? "" : id));

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openId === item.id;

        return (
          <div
            key={item.id}
            className={`glass-card rounded-xl overflow-hidden transition-all duration-300 ${
              isOpen ? "border-outline-variant/60" : ""
            }`}
          >
            {/* Trigger */}
            <button
              className="w-full flex items-center justify-between p-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded-xl"
              onClick={() => toggle(item.id)}
              aria-expanded={isOpen}
              aria-controls={`faq-body-${item.id}`}
            >
              <div className="flex items-center gap-4">
                {/* Number badge */}
                <span className="hidden sm:flex w-7 h-7 rounded-lg bg-surface-container-high items-center justify-center text-on-surface-variant text-code-sm font-code-sm shrink-0">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {/* Icon badge */}
                <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Icon name={item.icon} className="text-[18px]" />
                </span>
                <span className="text-headline-sm font-headline-sm text-on-surface pr-4">
                  {item.question}
                </span>
              </div>
              <Icon
                name="expand_more"
                className={`text-on-surface-variant transition-transform duration-300 shrink-0 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Body — CSS height via grid trick */}
            <div
              id={`faq-body-${item.id}`}
              role="region"
              className={`grid transition-all duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-6 pb-6 ms-6 border-s-2 border-primary/20 ps-6 space-y-4 text-on-surface-variant text-body-md font-body-md leading-relaxed">
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