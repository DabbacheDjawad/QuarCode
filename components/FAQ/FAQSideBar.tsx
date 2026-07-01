"use client";

import Link from "next/link";
import Icon from "../Icon";
import { categories, type FaqCategory } from "@/data/FAQ";

type Props = {
  active: FaqCategory | "all";
  onChange: (cat: FaqCategory | "all") => void;
};

const allCategories = [
  { id: "all" as const, icon: "apps", label: "All Questions" },
  ...categories,
];

export default function FaqSidebar({ active, onChange }: Props) {
  return (
    <aside className="lg:col-span-3 space-y-4">
      <h3 className="text-label-md font-label-md text-on-surface-variant uppercase tracking-widest mb-stack-md">
        Categories
      </h3>

      <nav className="flex flex-col gap-2" aria-label="FAQ categories">
        {allCategories.map((cat) => {
          const isActive = active === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onChange(cat.id)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-200 ${
                isActive
                  ? "bg-primary-container text-on-primary-container font-medium"
                  : "hover:bg-surface-variant/50 text-on-surface-variant hover:text-on-surface"
              }`}
            >
              <Icon name={cat.icon} className="text-[20px] shrink-0" />
              {cat.label}
            </button>
          );
        })}
      </nav>

      {/* Still Curious card */}
      <div className="mt-stack-lg p-6 rounded-xl glass-card relative overflow-hidden">
        <div className="absolute top-0 right-0 w-16 h-16 pixel-trace opacity-20 pointer-events-none" />
        <h4 className="text-headline-sm font-headline-sm mb-3">
          Still Curious?
        </h4>
        <p className="text-on-surface-variant mb-5 text-body-md font-body-md">
          Can't find the answer you're looking for? Chat with our team directly.
        </p>
        <Link
          href="/contact"
          className="text-primary font-bold inline-flex items-center gap-2 hover:gap-3 transition-all duration-200"
        >
          Contact Us <Icon name="arrow_forward" className="text-[18px]" />
        </Link>
      </div>
    </aside>
  );
}