"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Icon from "@/components/Icon";
import { useLanguage } from "@/lib/i18n/LanguageContext";

// ── Styling map for each service (id matches translation keys) ─────────────

const serviceStyles: Record<
  string,
  {
    colSpan: string;
    icon: string;
    iconColor: string;
    titleSize: string;
    accentColor: "primary" | "tertiary";
    hoverBorder: string;
    wide: boolean;
  }
> = {
  web: {
    colSpan: "md:col-span-8",
    icon: "computer",
    iconColor: "text-primary",
    titleSize: "text-headline-md font-headline-md",
    accentColor: "primary",
    hoverBorder: "hover:border-primary",
    wide: true,
  },
  ecom: {
    colSpan: "md:col-span-4",
    icon: "shopping_cart",
    iconColor: "text-tertiary",
    titleSize: "text-headline-sm font-headline-sm",
    accentColor: "tertiary",
    hoverBorder: "hover:border-tertiary",
    wide: false,
  },
  app: {
    colSpan: "md:col-span-4",
    icon: "code_blocks",
    iconColor: "text-primary-fixed-dim",
    titleSize: "text-headline-sm font-headline-sm",
    accentColor: "primary",
    hoverBorder: "hover:border-primary",
    wide: false,
  },
  design: {
    colSpan: "md:col-span-4",
    icon: "draw",
    iconColor: "text-tertiary",
    titleSize: "text-headline-sm font-headline-sm",
    accentColor: "tertiary",
    hoverBorder: "hover:border-tertiary",
    wide: false,
  },
  seo: {
    colSpan: "md:col-span-4",
    icon: "travel_explore",
    iconColor: "text-primary",
    titleSize: "text-headline-sm font-headline-sm",
    accentColor: "primary",
    hoverBorder: "hover:border-primary",
    wide: false,
  },
  perf: {
    colSpan: "md:col-span-4",
    icon: "speed",
    iconColor: "text-tertiary",
    titleSize: "text-headline-sm font-headline-sm",
    accentColor: "tertiary",
    hoverBorder: "hover:border-tertiary",
    wide: false,
  },
  maintenance: {
    colSpan: "md:col-span-4",
    icon: "build",
    iconColor: "text-primary",
    titleSize: "text-headline-sm font-headline-sm",
    accentColor: "primary",
    hoverBorder: "hover:border-primary",
    wide: false,
  },
  hosting: {
    colSpan: "md:col-span-4",
    icon: "cloud",
    iconColor: "text-tertiary",
    titleSize: "text-headline-sm font-headline-sm",
    accentColor: "tertiary",
    hoverBorder: "hover:border-tertiary",
    wide: false,
  },
  brand: {
    colSpan: "md:col-span-4",
    icon: "palette",
    iconColor: "text-primary",
    titleSize: "text-headline-sm font-headline-sm",
    accentColor: "primary",
    hoverBorder: "hover:border-primary",
    wide: false,
  },
};

// ── Helpers ───────────────────────────────────────────────────────────────────

function accentClass(color: "primary" | "tertiary", prefix: string) {
  return color === "tertiary" ? `${prefix}-tertiary` : `${prefix}-primary`;
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function ServicesPage() {
  const { t } = useLanguage();
  const page = t.servicesPage;

  // Build the service list by merging translations with presentation styles
  const services = page.mainServices.map((s) => ({
    ...s,
    ...serviceStyles[s.id],
  }));

  // Split into rows matching the bento layout
  const row1 = services.slice(0, 2); // web (wide) + ecom
  const row2 = services.slice(2, 5); // app + design + seo
  const row3 = services.slice(5, 8); // perf + maintenance + hosting
  const row4 = services.slice(8, 9); // brand (single)

  return (
    <>
      <Navbar activePage="services" />

      <main className="pt-32 selection:bg-primary/30 selection:text-primary">
        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <section className="relative px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-section-gap overflow-hidden">
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-highest rounded-full mb-6 border border-outline-variant">
              <span className="w-2 h-2 bg-tertiary rounded-full animate-pulse" />
              <span className="text-code-sm font-code-sm uppercase tracking-widest text-on-surface-variant">
                {page.hero.badge}
              </span>
            </div>

            <h1 className="font-headline-xl text-headline-xl text-on-surface mb-stack-md">
              {page.hero.headline1}{" "}
              <span className="bg-gradient-to-r from-primary to-tertiary bg-clip-text text-transparent">
                {page.hero.headline2}
              </span>
              .
            </h1>

            <p className="font-body-lg text-body-lg text-on-surface-variant mb-stack-lg max-w-2xl">
              {page.hero.body}
            </p>
          </div>
        </section>

        {/* ── Services bento grid ───────────────────────────────────────── */}
        <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-section-gap space-y-gutter">
          {/* Row 1: Website Development (wide) + E-Commerce (narrow) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            {row1.map((s) => (
              <ServiceCard key={s.id} service={s} />
            ))}
          </div>

          {/* Row 2: Custom App + UI/UX + SEO (three equal) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {row2.map((s) => (
              <ServiceCard key={s.id} service={s} />
            ))}
          </div>

          {/* Row 3: Performance + Maintenance + Hosting (three equal) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {row3.map((s) => (
              <ServiceCard key={s.id} service={s} />
            ))}
          </div>

          {/* Row 4: Brand Identity — centred single card */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {row4.map((s) => (
              <ServiceCard key={s.id} service={s} />
            ))}
          </div>
        </section>

        {/* ── Why Choose Quarcode ───────────────────────────────────────── */}
        <section className="bg-surface-container-lowest py-section-gap">
          <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
            <div className="text-center mb-stack-lg">
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-stack-md">
                {page.why.sectionTitle}
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-xl mx-auto">
                {page.why.sectionBody}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter">
              {page.why.items.map((item) => (
                <div
                  key={item.title}
                  className="bg-surface-container-low border border-outline-variant/30 rounded-xl p-stack-md card-glow"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <Icon name={item.icon} className="text-[20px]" />
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">
                    {item.title}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Our Process ───────────────────────────────────────────────── */}
        <section className="py-section-gap">
          <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
            <div className="text-center mb-section-gap">
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-stack-md">
                {page.process.sectionTitle}
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-xl mx-auto">
                {page.process.sectionBody}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-gutter">
              {page.process.steps.map((step, index) => (
                <div key={step.number} className="relative">
                  <div className="text-headline-sm font-headline-sm text-outline-variant/30 mb-3">
                    {step.number}
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">
                    {step.title}
                  </h3>
                  <p className="text-body-md font-body-md text-on-surface-variant text-sm">
                    {step.body}
                  </p>
                  {/* connector line only for non‑last items in the original layout */}
                  {index < page.process.steps.length - 1 && (
                    <div className="hidden lg:block absolute top-4 -right-4 w-8 h-px bg-outline-variant/30" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────────────────── */}
        <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto py-section-gap">
          <div className="bg-primary-container/10 border border-primary/20 rounded-xl p-stack-lg md:p-24 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-tertiary/5 rounded-full blur-[100px] pointer-events-none" />

            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-stack-md relative z-10">
              {page.cta.headline}
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-stack-lg max-w-xl mx-auto relative z-10">
              {page.cta.body}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center relative z-10">
              <Link
                href="/contact"
                className="bg-primary text-on-primary px-8 py-3 rounded-xl font-label-md text-label-md hover:bg-primary-fixed-dim transition-colors"
              >
                {page.cta.cta1}
              </Link>
              <Link
                href="/faq"
                className="border border-outline-variant text-on-surface px-8 py-3 rounded-xl font-label-md text-label-md hover:bg-surface-variant transition-colors"
              >
                {page.cta.cta2}
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer
        columns={page.footerColumns}
        showNewsletter={false}
        copyright={page.footerCopyright}
      />
    </>
  );
}

// ── ServiceCard ───────────────────────────────────────────────────────────────

type Service = ReturnType<
  typeof useLanguage
>["t"]["servicesPage"]["mainServices"][number] & {
  colSpan: string;
  icon: string;
  iconColor: string;
  titleSize: string;
  accentColor: "primary" | "tertiary";
  hoverBorder: string;
  wide: boolean;
};

function ServiceCard({ service: s }: { service: Service }) {
  const { t } = useLanguage();
  const getAQuote = t.servicesPage.getAQuote;

  const accent = s.accentColor;
  const iconColorClass = s.iconColor;
  const linkColorClass = accentClass(accent, "text");
  const borderHoverClass = s.hoverBorder;

  return (
    <div
      className={`${s.colSpan} bg-surface-container-low border border-outline-variant/30 rounded-xl p-stack-lg relative overflow-hidden group ${borderHoverClass} transition-all duration-500 glow-hover flex flex-col`}
    >
      {/* Corner hatch */}
      <div className="absolute top-0 right-0 w-24 h-24 pixel-trace opacity-10 pointer-events-none" />

      <div className="relative z-10 flex flex-col h-full">
        <Icon
          name={s.icon}
          className={`${iconColorClass} text-4xl mb-stack-md`}
        />

        <h2 className={`${s.titleSize} text-on-surface mb-stack-sm`}>
          {s.title}
        </h2>

        <p className="font-body-md text-body-md text-on-surface-variant mb-stack-md">
          {s.description}
        </p>

        {/* Feature list */}
        <ul className="space-y-1.5 mb-stack-md flex-grow">
          {s.items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 text-body-md text-on-surface-variant"
            >
              <span
                className={`mt-1.5 w-1 h-1 rounded-full shrink-0 inline-block ${
                  accent === "tertiary" ? "bg-tertiary" : "bg-primary"
                }`}
              />
              {item}
            </li>
          ))}
        </ul>

        {/* Perfect-for tags */}
        {s.perfectFor && s.perfectFor.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-stack-md">
            {s.perfectFor.map((pf) => (
              <span
                key={pf}
                className="px-2 py-0.5 bg-surface-container-highest text-code-sm font-code-sm rounded border border-outline-variant/40"
              >
                {pf}
              </span>
            ))}
          </div>
        )}

        <div className="mt-auto pt-stack-sm">
          <Link
            href="/contact"
            className={`inline-flex items-center gap-2 ${linkColorClass} font-label-md text-label-md group-hover:gap-4 transition-all duration-300`}
          >
            {getAQuote} <Icon name="arrow_forward" />
          </Link>
        </div>
      </div>
    </div>
  );
}
