"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";

type FooterLink = { label: string; href: string };
type FooterColumn = { heading: string; links: readonly FooterLink[] };

type FooterProps = {
  tagline?: string;
  columns?: readonly FooterColumn[];
  copyright?: string;
};

export default function Footer({
  tagline,
  columns,
  copyright,
}: FooterProps = {}) {
  const { t } = useLanguage();
  const f = t.footer;

  const resolvedTagline   = tagline   ?? f.tagline;
  const resolvedColumns   = (columns  ?? f.columns) as readonly FooterColumn[];
  const resolvedCopyright = copyright ?? f.copyright;

  return (
    <footer
      className="w-full pt-16 pb-8 border-t border-white/[0.06]"
      style={{ background: "#0e0f1a" }}
    >
      <div className="max-w-[1280px] mx-auto px-10">

        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-12 mb-14">

          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-7 h-7 rounded-[7px] bg-gradient-to-br from-[#4f6eff] to-[#8b5cf6] flex items-center justify-center font-mono text-[13px] font-bold text-white tracking-tighter">
                {"</>"}
              </div>
              <span className="text-[16px] font-bold tracking-[-0.3px] text-[#f0f1ff]">
                Quarcode
              </span>
            </Link>
            <p className="text-[13px] text-[#4b4c6a] leading-[1.7] max-w-[240px]">
              {resolvedTagline}
            </p>
          </div>

          {/* Dynamic columns */}
          {resolvedColumns.map((col) => (
            <div key={col.heading}>
              <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#4f6eff] block mb-4">
                // {col.heading.toLowerCase()}
              </span>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[13px] text-[#4b4c6a] hover:text-[#f0f1ff] transition-colors duration-150"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.06] pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="font-mono text-[11px] tracking-[0.03em] text-[#4b4c6a]">
            {resolvedCopyright}
          </span>
          <div className="flex gap-6">
            <Link
              href="/Privacy"
              className="text-[12px] text-[#4b4c6a] hover:text-[#8889a8] transition-colors duration-150"
            >
              {f.privacy}
            </Link>
            <Link
              href="/Terms"
              className="text-[12px] text-[#4b4c6a] hover:text-[#8889a8] transition-colors duration-150"
            >
              {f.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}