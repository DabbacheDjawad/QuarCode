// app/faq/page.tsx
"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FaqShell from "@/components/FAQ/FAQShell";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { type FaqCategory } from "@/data/FAQ";
import { type AccordionItem } from "@/components/FAQ/FAQAccordion";

// ── Static per-item metadata (icons + categories don't change by locale) ─────

const FAQ_META: Array<{ id: string; icon: string; category: FaqCategory }> = [
  { id: "cost",        icon: "payments",       category: "pricing"  },
  { id: "timeline",    icon: "schedule",        category: "process"  },
  { id: "mobile",      icon: "smartphone",      category: "process"  },
  { id: "cms",         icon: "edit",            category: "support"  },
  { id: "seo",         icon: "travel_explore",  category: "process"  },
  { id: "hosting",     icon: "cloud",           category: "process"  },
  { id: "maintenance", icon: "build",           category: "support"  },
  { id: "revisions",   icon: "sync",            category: "support"  },
  { id: "remote",      icon: "language",        category: "process"  },
  { id: "start",       icon: "rocket_launch",   category: "support"  },
  { id: "ownership",   icon: "verified_user",   category: "pricing"  },
  { id: "why",         icon: "star",            category: "pricing"  },
];

export default function FaqPage() {
  const { t } = useLanguage();
  const fp = t.faqPage;
  const rawItems = t.faqItems;

  // Merge translated content with static icon/category metadata
  const faqEntries: (AccordionItem & { category: FaqCategory })[] = FAQ_META.map(
    (meta) => {
      const translated = rawItems.find((item) => item.id === meta.id)!;
      return {
        id: meta.id,
        icon: meta.icon,
        category: meta.category,
        question: translated.question,
        answer: translated.answer,
      };
    }
  );

  return (
    <>
      <Navbar activePage="contact" />

      <main className="pt-32">
        {/* ── Hero ── */}
        <header className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-section-gap relative">
          {/* Ambient glow */}
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-high rounded-full border border-outline-variant/30 mb-stack-md">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-code-sm font-code-sm text-on-surface-variant tracking-widest uppercase">
                {fp.hero.badge}
              </span>
            </div>

            <h1 className="text-headline-xl font-headline-xl mb-6 leading-tight text-on-surface">
              {fp.hero.headline1}{" "}
              <br className="hidden sm:block" />
              <span className="text-primary-fixed-dim">{fp.hero.headline2}</span>
            </h1>

            <p className="text-body-lg font-body-lg text-on-surface-variant max-w-xl">
              {fp.hero.body}
            </p>
          </div>
        </header>

        {/* ── FAQ grid (sidebar + accordion) ── */}
        <FaqShell items={faqEntries} />
      </main>

      <Footer
        columns={fp.footerColumns}
        showNewsletter={false}
        tagline={fp.footerTagline}
        copyright={fp.footerCopyright}
      />
    </>
  );
}