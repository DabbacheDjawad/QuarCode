"use client";

import { useState } from "react";
import Icon from "../Icon";

export type AccordionItem = {
  id: string;
  icon: string;
  question: string;
  answer: React.ReactNode;
};

type Props = {
  items: AccordionItem[];
};

export default function FaqAccordion({ items }: Props) {
  // First item open by default
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

            {/* Body — CSS-animated height via grid trick (avoids JS height calc) */}
            <div
              id={`faq-body-${item.id}`}
              role="region"
              className={`grid transition-all duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-6 pb-6 ml-6 border-l-2 border-primary/20 pl-6 space-y-4 text-on-surface-variant text-body-md font-body-md leading-relaxed">
                  {item.answer}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}