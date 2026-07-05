"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";

// ── Inline SVGs ───────────────────────────────────────────────────────────────

const IconLocation = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const IconMail = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="M2 8l10 7 10-7"/>
  </svg>
);

const IconOpenNew = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);

// Social brand SVGs
const IconFacebook = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const IconGithub = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
  </svg>
);

const IconInstagram = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const socialLinks = [
  { Icon: IconFacebook, label: "Facebook", href: "https://www.facebook.com/profile.php?id=61591658214352" },
  { Icon: IconGithub,   label: "GitHub",   href: "https://github.com/DabbacheDjawad" },
  { Icon: IconInstagram,label: "Instagram",href: "#" },
] as const;

// ── Map sub-component ─────────────────────────────────────────────────────────

function OfficeMap({
  openLabel,
  mapTitle,
  locationLabel,
}: {
  openLabel: string;
  mapTitle: string;
  locationLabel: string;
}) {
  const lat  = 36.256694;
  const lng  = 6.578917;
  const zoom = 14;

  const embedSrc = `https://maps.google.com/maps?q=${lat},${lng}&z=${zoom}&output=embed&hl=en`;
  const mapsUrl  = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;

  return (
    <div className="relative h-56 rounded-2xl overflow-hidden border border-white/[0.07] group mt-4">
      <iframe
        src={embedSrc}
        title={mapTitle}
        width="100%"
        height="100%"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute inset-0 w-full h-full pointer-events-none grayscale group-hover:grayscale-0 transition-all duration-700 border-0"
        aria-hidden="true"
      />

      {/* Dark tint */}
      <div className="absolute inset-0 bg-[#07080f]/55 group-hover:bg-[#07080f]/10 transition-all duration-700 pointer-events-none" />

      {/* Ping marker */}
      <div
        className="absolute pointer-events-none"
        style={{ top: "46%", left: "50%", transform: "translate(-50%, -50%)" }}
      >
        <span className="absolute inline-flex h-8 w-8 rounded-full bg-[#4f6eff]/40 animate-ping -translate-x-1/2 -translate-y-1/2" />
        <span className="relative inline-flex h-4 w-4 rounded-full bg-[#4f6eff] border-2 border-[#07080f] shadow-lg shadow-[#4f6eff]/40 -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Location pill */}
      <div className="absolute bottom-3 left-0 right-0 flex justify-center pointer-events-none">
        <span className="font-mono text-[11px] text-[#4f6eff] bg-[#07080f]/90 backdrop-blur-sm px-3 py-1 rounded-full border border-[#4f6eff]/30">
          {locationLabel}
        </span>
      </div>

      {/* Open link */}
      <a
        href={mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={openLabel}
        className="absolute top-3 right-3 flex items-center gap-1.5 font-mono text-[11px] text-[#8889a8] bg-[#07080f]/90 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/[0.07] hover:border-[#4f6eff]/40 hover:text-[#4f6eff] transition-all duration-200 shadow"
      >
        <IconOpenNew />
        {openLabel}
      </a>
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────

export default function ContactSidebar() {
  const { t } = useLanguage();
  const s = t.contactSidebar;

  const addressLines = s.officeAddress.split("\n");

  return (
    <div className="lg:col-span-5 flex flex-col gap-4">

      {/* Info card */}
      <div
        className="rounded-2xl border border-white/[0.07] p-8 flex flex-col gap-7"
        style={{ background: "#0e0f1a" }}
      >
        {/* Section label */}
        <div className="flex items-center gap-3.5">
          <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#4f6eff]">
            // get in touch
          </span>
          <div className="h-px flex-1 bg-white/[0.07]" />
        </div>

        {/* Office */}
        <div className="flex gap-4">
          <div className="w-10 h-10 rounded-[9px] border border-white/[0.07] bg-[#1a1b2a] flex items-center justify-center text-[#4f6eff] flex-shrink-0">
            <IconLocation />
          </div>
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#4b4c6a] mb-1">
              {s.officeTitle}
            </div>
            <p className="text-[14px] font-semibold text-[#f0f1ff] leading-[1.6]">
              {addressLines.map((line, i) => (
                <span key={i}>
                  {line}
                  {i < addressLines.length - 1 && <br />}
                </span>
              ))}
            </p>
          </div>
        </div>

        {/* Email */}
        <div className="flex gap-4">
          <div className="w-10 h-10 rounded-[9px] border border-white/[0.07] bg-[#1a1b2a] flex items-center justify-center text-[#38debb] flex-shrink-0">
            <IconMail />
          </div>
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#4b4c6a] mb-1">
              {s.emailTitle}
            </div>
            <a
              href="mailto:quarcode2026@gmail.com"
              className="text-[14px] font-semibold text-[#f0f1ff] hover:text-[#4f6eff] transition-colors duration-150"
            >
              quarcode2026@gmail.com
            </a>
          </div>
        </div>

        {/* Social */}
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#4b4c6a] mb-4">
            {s.connectTitle}
          </div>
          <div className="flex gap-3">
            {socialLinks.map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target={href === "#" ? undefined : "_blank"}
                rel={href === "#" ? undefined : "noopener noreferrer"}
                aria-label={label}
                className="w-9 h-9 rounded-[9px] border border-white/[0.07] bg-[#1a1b2a] flex items-center justify-center text-[#4b4c6a] hover:bg-[#4f6eff] hover:text-white hover:border-[#4f6eff] transition-all duration-200"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Map */}
      <OfficeMap
        openLabel={s.openInMaps}
        mapTitle={s.mapTitle}
        locationLabel={s.mapLabel}
      />
    </div>
  );
}