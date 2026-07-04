// components/About/Leadership.tsx
"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/i18n/LanguageContext";

// Image sources stay outside translations — not linguistic content
const leaderImages = [
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuANlbLguVualJU4QR6BIXNDxmru67NTDUjdtIPdIvUR-slvcVBwaRm6wdhM08SpoZxq0drWaVmgHVPT8Nw5sTi0UEtsv0Qi8aRfhOY58--oIe1i4GTd1scpyWtYAmMIOK9HEfcJt1QGbGorCkgwBUA-0ctRwsWelby5sPSlBswzJeu561n4VN3vEXCdD1lSlGzOkoyrZYN_WHlnvCKvau9B9TnNhfkl8wbTQ6Jz75s4hqFCJChWn0VKIksqJlKIQ1opGGuRHF1otrXf",
    altKey: 0,
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuArcEZ3s6HnzTRDY8cz_YeJoNUWzkTnI_YR7hey3RYI5RODBY5WOzoZgpqzJ8t3T--RfRpxILDSHfFM3IzBtlfFffTnWS-xQHyGbDdf4f-e_lel63syYAsnQNB-_KXNew4rNOrmRST2sYb2qV-mpjQoX6H-I6gRe_y7lFqtdwTkBULPO0BmtDzbCTNBVRGwbWnW0Hydcdzc2M1Nn0YRd633h9k7AluDpy07fHQ43e3Ad7ppK7AyDex0VTU9pJsUTREPLxxYRUfAYhZV",
    altKey: 1,
  },
];

function PortraitCard({
  src,
  name,
  role,
}: {
  src: string;
  name: string;
  role: string;
}) {
  return (
    <div className="rounded-xl overflow-hidden aspect-[4/5] relative group">
      <Image
        src={src}
        alt={`${name} — ${role}`}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
        <div className="font-label-md text-label-md font-bold text-white">
          {name}
        </div>
        <div className="text-xs text-white/70">{role}</div>
      </div>
    </div>
  );
}

export default function Leadership() {
  const { t } = useLanguage();
  const l = t.leadership;

  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto overflow-hidden">
      <div className="bg-surface-container rounded-3xl p-margin-mobile md:p-stack-lg flex flex-col md:flex-row items-center gap-stack-lg border border-outline-variant/20">
        {/* Left — copy + stat counters */}
        <div className="w-full md:w-1/2">
          <h2 className="font-headline-md text-headline-md mb-6">
            {l.sectionTitle}
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mb-8">
            {l.sectionBody}
          </p>

          <div className="grid grid-cols-2 gap-stack-md">
            {l.stats.map((stat) => (
              <div key={stat.label}>
                <div className="font-headline-sm text-headline-sm text-primary mb-1">
                  {stat.value}
                </div>
                <div className="font-label-md text-label-md text-on-surface-variant">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — staggered portrait grid */}
        <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
          <div className="space-y-4 pt-12">
            <PortraitCard
              src={leaderImages[0].src}
              name={l.leaders[0].name}
              role={l.leaders[0].role}
            />
          </div>
          <div className="space-y-4">
            <PortraitCard
              src={leaderImages[1].src}
              name={l.leaders[1].name}
              role={l.leaders[1].role}
            />
          </div>
        </div>
      </div>
    </section>
  );
}