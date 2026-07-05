"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/i18n/LanguageContext";

function SectionLabel({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3.5 mb-12">
      <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#4f6eff]">
        {text}
      </span>
      <div className="h-px flex-1 bg-white/[0.07]" />
    </div>
  );
}

const leaderImages = [
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuANlbLguVualJU4QR6BIXNDxmru67NTDUjdtIPdIvUR-slvcVBwaRm6wdhM08SpoZxq0drWaVmgHVPT8Nw5sTi0UEtsv0Qi8aRfhOY58--oIe1i4GTd1scpyWtYAmMIOK9HEfcJt1QGbGorCkgwBUA-0ctRwsWelby5sPSlBswzJeu561n4VN3vEXCdD1lSlGzOkoyrZYN_WHlnvCKvau9B9TnNhfkl8wbTQ6Jz75s4hqFCJChWn0VKIksqJlKIQ1opGGuRHF1otrXf",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuArcEZ3s6HnzTRDY8cz_YeJoNUWzkTnI_YR7hey3RYI5RODBY5WOzoZgpqzJ8t3T--RfRpxILDSHfFM3IzBtlfFffTnWS-xQHyGbDdf4f-e_lel63syYAsnQNB-_KXNew4rNOrmRST2sYb2qV-mpjQoX6H-I6gRe_y7lFqtdwTkBULPO0BmtDzbCTNBVRGwbWnW0Hydcdzc2M1Nn0YRd633h9k7AluDpy07fHQ43e3Ad7ppK7AyDex0VTU9pJsUTREPLxxYRUfAYhZV",
  },
];

function PortraitCard({
  src,
  name,
  role,
  offset = false,
}: {
  src: string;
  name: string;
  role: string;
  offset?: boolean;
}) {
  return (
    <div className={`rounded-xl overflow-hidden aspect-[4/5] relative group ${offset ? "mt-10" : ""}`}>
      <Image
        src={src}
        alt={`${name} — ${role}`}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#07080f] via-transparent to-transparent opacity-90" />

      {/* Name tag */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <div className="text-[14px] font-bold text-[#f0f1ff] tracking-[-0.01em]">
          {name}
        </div>
        <div className="font-mono text-[11px] text-[#8889a8] mt-0.5 uppercase tracking-[0.08em]">
          {role}
        </div>
      </div>

      {/* Hover border accent */}
      <div className="absolute inset-0 border border-white/[0.07] rounded-xl group-hover:border-[#4f6eff]/30 transition-colors duration-300" />
    </div>
  );
}

export default function Leadership() {
  const { t } = useLanguage();
  const l = t.leadership;

  return (
    <section className="py-[100px] px-10 border-t border-white/[0.06]" style={{ background: "#07080f" }}>
      <div className="max-w-[1280px] mx-auto">
        <SectionLabel text="// the team" />

        <div
          className="rounded-2xl border border-white/[0.07] p-10 md:p-14 grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
          style={{ background: "#0e0f1a" }}
        >
          {/* Left — copy + stats */}
          <div>
            <h2 className="text-[clamp(24px,2.8vw,34px)] font-extrabold tracking-[-0.03em] leading-[1.2] mb-5 text-[#f0f1ff]">
              {l.sectionTitle}
            </h2>
            <p className="text-[15px] text-[#8889a8] leading-[1.75] mb-10">
              {l.sectionBody}
            </p>

            {/* Stat grid */}
            <div
              className="grid grid-cols-2 rounded-xl overflow-hidden border border-white/[0.07]"
              style={{ gap: "1px", background: "rgba(255,255,255,0.07)" }}
            >
              {l.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="px-6 py-5"
                  style={{ background: "#07080f" }}
                >
                  <div className="text-[26px] font-extrabold tracking-[-0.03em] text-[#4f6eff] leading-none mb-1">
                    {stat.value}
                  </div>
                  <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#4b4c6a]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — staggered portraits */}
          <div className="grid grid-cols-2 gap-4">
            <PortraitCard
              src={leaderImages[0].src}
              name={l.leaders[0].name}
              role={l.leaders[0].role}
              offset={true}
            />
            <PortraitCard
              src={leaderImages[1].src}
              name={l.leaders[1].name}
              role={l.leaders[1].role}
              offset={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}