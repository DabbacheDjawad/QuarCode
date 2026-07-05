"use client";

import { useState } from "react";
import FaqSidebar from "./FAQSideBar";
import FaqAccordion, { type AccordionItem } from "./FAQAccordion";
import { type FaqCategory } from "@/data/FAQ";

type RawItem = AccordionItem & { category: FaqCategory };

type Props = {
  items: RawItem[];
};

export default function FaqShell({ items }: Props) {
  const [activeCategory, setActiveCategory] = useState<FaqCategory | "all">("all");

  const filtered =
    activeCategory === "all"
      ? items
      : items.filter((i) => i.category === activeCategory);

  return (
    <section className="max-w-[1280px] mx-auto px-10 grid grid-cols-1 lg:grid-cols-12 gap-8 pb-[100px]">
      <FaqSidebar active={activeCategory} onChange={setActiveCategory} />
      <div className="lg:col-span-9">
        <FaqAccordion items={filtered} />
      </div>
    </section>
  );
}