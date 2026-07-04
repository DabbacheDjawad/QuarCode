// components/Footer.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import Icon from "./Icon";
import { useLanguage } from "@/lib/i18n/LanguageContext";

type FooterLink = { label: string; href: string };
type FooterColumn = { heading: string; links: readonly FooterLink[] };

type FooterProps = {
  /** Override the tagline (e.g. the About page has its own tagline). Falls back to the locale default. */
  tagline?: string;
  /** Override the column set. Falls back to the locale default. */
  columns?: readonly FooterColumn[];
  /** Show / hide the newsletter block. Defaults to true. */
  showNewsletter?: boolean;
  /** Override the copyright line. Falls back to the locale default. */
  copyright?: string;
};

export default function Footer({
  tagline,
  columns,
  showNewsletter = true,
  copyright,
}: FooterProps = {}) {
  const { t } = useLanguage();
  const f = t.footer;

  // Callers can supply overrides; if not provided, fall back to locale defaults
  const resolvedTagline = tagline ?? f.tagline;
  const resolvedColumns = (columns ?? f.columns) as readonly FooterColumn[];
  const resolvedCopyright = copyright ?? f.copyright;

  return (
    <footer className="w-full py-section-gap bg-surface-container-lowest border-t border-outline-variant/20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        {/* Brand */}
        <div>
          <Link href="/" className="flex items-center gap-3 mb-stack-md">
            <Image
              alt="Quarcode logo"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfHAj1frqBT2u6P3OiWJjdfztKszxzHmGMuPMN9y5sWa01YbZn4e28h34_uvfAuZV8XA6jAn3Ec3u8Y7LWhzxUdZ2ETvMtzQhnabQVR05pTyssHY5s96m8wHmbHhtH0eZ6BK7738vaUjTPVxs1sQ488tTcckdtXrSpGwa9j6ZEmSjBph03mQtu67_lvRP46zi0pwkTqZ62CqDFmGV26vmqHYtJPrmdqfyPHfOvZjDtJTBhlf8aL-a_FQkkMu_xhiMTCCCOxgg1IbNK"
              width={24}
              height={24}
              className="h-6 w-auto"
            />
            <span className="text-headline-sm font-headline-sm font-bold text-on-surface">
              Quarcode
            </span>
          </Link>
          <p className="text-on-surface-variant text-sm leading-relaxed">
            {resolvedTagline}
          </p>
        </div>

        {/* Dynamic columns */}
        {resolvedColumns.map((col) => (
          <div key={col.heading}>
            <h4 className="font-label-md text-label-md font-bold text-primary mb-stack-md uppercase tracking-widest">
              {col.heading}
            </h4>
            <ul className="space-y-4">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-on-surface-variant hover:text-primary hover:underline transition-all text-label-md font-label-md"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Newsletter — optional */}
        {showNewsletter && (
          <div>
            <h4 className="font-label-md text-label-md font-bold text-primary mb-stack-md uppercase tracking-widest">
              {f.newsletter.heading}
            </h4>
            <p className="text-sm text-on-surface-variant mb-stack-md leading-relaxed">
              {f.newsletter.body}
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder={f.newsletter.emailPlaceholder}
                aria-label={f.newsletter.emailLabel}
                className="bg-surface-container border border-outline-variant rounded-lg px-4 py-2 w-full text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary transition-colors"
              />
              <button
                type="submit"
                aria-label={f.newsletter.subscribeLabel}
                className="bg-primary-container text-on-primary-container p-2 rounded-lg hover:opacity-90 transition-opacity shrink-0"
              >
                <Icon name="send" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Bottom bar */}
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mt-section-gap pt-stack-lg border-t border-outline-variant/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="text-on-surface-variant text-sm">{resolvedCopyright}</span>
        <div className="flex gap-6">
          <Link
            href="#"
            className="text-on-surface-variant hover:text-primary text-sm transition-colors"
          >
            {f.privacy}
          </Link>
          <Link
            href="#"
            className="text-on-surface-variant hover:text-primary text-sm transition-colors"
          >
            {f.terms}
          </Link>
        </div>
      </div>
    </footer>
  );
}