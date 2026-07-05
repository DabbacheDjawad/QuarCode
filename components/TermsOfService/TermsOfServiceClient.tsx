// app/terms-of-service/TermsOfServiceClient.tsx
"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import type { LegalSection } from "@/lib/i18n/Translations";

// ── Reusable prose components ───────────────────────────────────────────────

function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[14.5px] text-[#8889a8] leading-[1.8] mb-4 last:mb-0">
      {children}
    </p>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="text-[13px] font-bold text-[#f0f1ff] uppercase tracking-[0.06em] mt-6 mb-3 font-mono">
      {children}
    </h4>
  );
}

function Mono({ children }: { children: React.ReactNode }) {
  return (
    <code className="font-mono text-[13px] text-[#4f6eff] bg-[#4f6eff]/8 px-1.5 py-0.5 rounded-md border border-[#4f6eff]/15">
      {children}
    </code>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-2.5 mb-4">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-[14px] text-[#8889a8] leading-[1.7]">
          <span className="mt-[7px] w-1 h-1 rounded-full bg-[#4f6eff] flex-shrink-0" />
          {item}
        </li>
      ))}
    </ul>
  );
}

function Note({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-[#4f6eff]/20 bg-[#4f6eff]/5 px-5 py-4 mt-4">
      <p className="text-[13.5px] text-[#8889a8] leading-[1.7]">{children}</p>
    </div>
  );
}

function ContactBlock({ contact }: { contact: LegalSection["contact"] }) {
  if (!contact) return null;
  const entries = [
    { label: "Company", value: contact.company },
    { label: "Email", value: contact.email },
    { label: "Address", value: contact.address },
    { label: "Website", value: contact.website },
  ];
  return (
    <div
      className="mt-4 rounded-xl border border-white/[0.07] p-6 flex flex-col gap-4"
      style={{ background: "#13141f" }}
    >
      {entries.map(({ label, value }) => (
        <div key={label} className="flex items-baseline gap-4">
          <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#4b4c6a] w-16 flex-shrink-0">
            {label}
          </span>
          <span className="font-mono text-[13px] text-[#f0f1ff]">{value}</span>
        </div>
      ))}
    </div>
  );
}

// ── Section renderer ─────────────────────────────────────────────────────────

function SectionContent({ section }: { section: LegalSection }) {
  return (
    <>
      {section.intro && <P>{section.intro}</P>}

      {section.subSections?.map((sub, idx) => (
        <div key={idx}>
          <SubHeading>{sub.heading}</SubHeading>
          {sub.body && <P>{sub.body}</P>}
          {sub.bullets && <BulletList items={sub.bullets} />}
        </div>
      ))}

      {section.bullets && <BulletList items={section.bullets} />}

      {section.note && <Note>{section.note}</Note>}

      {section.contact && <ContactBlock contact={section.contact} />}
    </>
  );
}

// ── Main client component ────────────────────────────────────────────────────

export default function TermsOfServiceClient() {
  const { t } = useLanguage();
  const terms = t.termsOfService;

  return (
    <>
      <Navbar />

      <main className="pt-[140px] pb-[100px]">
        <div className="max-w-[1280px] mx-auto px-10">

          {/* ── Page header ── */}
          <div className="mb-14 relative">
            <div
              aria-hidden
              className="pointer-events-none absolute top-[-80px] left-[-120px] w-[500px] h-[400px] rounded-full"
              style={{ background: "radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 65%)" }}
            />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 border border-[#8b5cf6]/30 bg-[#8b5cf6]/7 rounded-full px-3 py-1.5 mb-7">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8b5cf6]" />
                <span className="font-mono text-[11px] text-[#8b5cf6] uppercase tracking-[0.1em]">
                  {terms.badge}
                </span>
              </div>

              <h1 className="text-[clamp(32px,4vw,50px)] font-extrabold leading-[1.1] tracking-[-0.03em] mb-4 text-[#f0f1ff]">
                {terms.headline1}{" "}
                <span className="bg-gradient-to-r from-[#a78bfa] to-[#38debb] bg-clip-text text-transparent">
                  {terms.headline2}
                </span>
              </h1>

              <div className="flex items-center gap-4">
                <span className="font-mono text-[12px] text-[#4b4c6a]">
                  Last updated:
                </span>
                <span className="font-mono text-[12px] text-[#8889a8]">
                  {terms.lastUpdated}
                </span>
              </div>
            </div>
          </div>

          {/* ── Two‑column layout: TOC sidebar + content ── */}
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 items-start">

            {/* Sidebar TOC — sticky */}
            <aside className="hidden lg:block">
              <div
                className="sticky top-24 rounded-2xl border border-white/[0.07] p-6"
                style={{ background: "#0e0f1a" }}
              >
                <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#8b5cf6] mb-5">
                  {terms.contentsLabel}
                </div>
                <nav className="flex flex-col gap-1">
                  {terms.sections.map((s) => (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      className="flex items-center gap-3 px-3 py-2 rounded-lg text-[12.5px] text-[#4b4c6a] hover:text-[#f0f1ff] hover:bg-[#13141f] transition-all duration-150 group"
                    >
                      <span className="font-mono text-[10px] text-[#8b5cf6] flex-shrink-0 group-hover:text-[#8b5cf6]">
                        {s.number}
                      </span>
                      {s.title}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Main content */}
            <div className="flex flex-col gap-3">
              {terms.sections.map((s) => (
                <section
                  key={s.id}
                  id={s.id}
                  className="rounded-2xl border border-white/[0.07] p-8 scroll-mt-28"
                  style={{ background: "#0e0f1a" }}
                >
                  {/* Section header */}
                  <div className="flex items-center gap-3 mb-6">
                    <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#8b5cf6]">
                      {s.number}
                    </span>
                    <div className="h-px flex-1 bg-white/[0.07]" />
                  </div>

                  <h2 className="text-[18px] font-bold tracking-[-0.02em] text-[#f0f1ff] mb-5">
                    {s.title}
                  </h2>

                  <SectionContent section={s} />
                </section>
              ))}
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}