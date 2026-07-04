// components/Contact/ContactSideBar.tsx
"use client";

import Icon from "@/components/Icon";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const socialIcons = [
  {
    icon: "facebook",
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61591658214352",
  },
  {
    icon: "github",
    label: "GitHub",
    href: "https://github.com/DabbacheDjawad",
  },
  {
    icon: "instagram",
    label: "Instagram",
    href: "#",
  },
];

export default function ContactSidebar() {
  const { t } = useLanguage();
  const s = t.contactSidebar;

  // Split the newline-delimited address into JSX lines
  const addressLines = s.officeAddress.split("\n");

  return (
    <div className="lg:col-span-5 space-y-gutter">
      {/* Info card */}
      <div className="bg-surface-container-lowest border border-outline-variant/20 p-8 rounded-xl space-y-stack-lg">
        {/* Office address */}
        <div className="flex gap-4">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
            <Icon name="location_on" />
          </div>
          <div>
            <h4 className="text-headline-sm font-headline-sm text-on-surface mb-2">
              {s.officeTitle}
            </h4>
            <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
              {addressLines.map((line, i) => (
                <span key={i}>
                  {line}
                  {i < addressLines.length - 1 && <br />}
                </span>
              ))}
            </p>
          </div>
        </div>

        {/* Email contact */}
        <div className="flex gap-4">
          <div className="w-12 h-12 rounded-lg bg-tertiary/10 flex items-center justify-center text-tertiary shrink-0">
            <Icon name="alternate_email" />
          </div>
          <div>
            <h4 className="text-headline-sm font-headline-sm text-on-surface mb-2">
              {s.emailTitle}
            </h4>
            <a
              href="mailto:hello@quarcode.dz"
              className="block text-body-md font-body-md text-on-surface-variant hover:text-primary transition-colors"
            >
              quarcode2026@gmail.com
            </a>
          </div>
        </div>

        {/* Social links */}
        <div>
          <h4 className="text-label-md font-label-md text-on-surface-variant uppercase tracking-widest mb-4">
            {s.connectTitle}
          </h4>
          <div className="flex gap-4">
            {socialIcons.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href === "#" ? undefined : "_blank"}
                rel={social.href === "#" ? undefined : "noopener noreferrer"}
                aria-label={social.label}
                className="w-10 h-10 rounded-full border border-outline-variant/30 flex items-center justify-center text-on-surface hover:bg-primary hover:text-on-primary hover:border-primary transition-all duration-300"
              >
                <Icon name={social.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Map */}
      <OfficeMap openLabel={s.openInMaps} mapTitle={s.mapTitle} locationLabel={s.mapLabel} />
    </div>
  );
}

function OfficeMap({
  openLabel,
  mapTitle,
  locationLabel,
}: {
  openLabel: string;
  mapTitle: string;
  locationLabel: string;
}) {
  const lat = 36.256694;
  const lng = 6.578917;
  const zoom = 14;

  const embedSrc = `https://maps.google.com/maps?q=${lat},${lng}&z=${zoom}&output=embed&hl=en`;
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;

  return (
    <div className="relative h-64 rounded-xl overflow-hidden border border-outline-variant/20 group">
      {/* Real map iframe */}
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

      {/* Dark tint overlay */}
      <div className="absolute inset-0 bg-background/50 group-hover:bg-background/10 transition-all duration-700 pointer-events-none" />

      {/* Ping marker */}
      <div
        className="absolute pointer-events-none"
        style={{ top: "46%", left: "50%", transform: "translate(-50%, -50%)" }}
      >
        <span className="absolute inline-flex h-8 w-8 rounded-full bg-primary/40 animate-ping -translate-x-1/2 -translate-y-1/2" />
        <span className="relative inline-flex h-4 w-4 rounded-full bg-primary border-2 border-background shadow-lg shadow-primary/40 -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Location label */}
      <div className="absolute bottom-3 left-0 right-0 flex justify-center pointer-events-none">
        <span className="text-label-md font-label-md text-primary bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full border border-primary/30 shadow">
          {locationLabel}
        </span>
      </div>

      {/* Open in Maps link */}
      <a
        href={mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={openLabel}
        className="absolute top-3 right-3 flex items-center gap-1.5 text-code-sm font-code-sm text-on-surface bg-background/90 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-outline-variant/30 hover:border-primary hover:text-primary transition-all duration-200 shadow"
      >
        <Icon name="open_in_new" className="text-[14px]" />
        {openLabel}
      </a>
    </div>
  );
}