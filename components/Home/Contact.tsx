"use client";

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

const IconMail = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="M2 8l10 7 10-7"/>
  </svg>
);

const IconPin = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const IconClock = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <circle cx="12" cy="12" r="10"/>
    <path d="M12 6v6l4 2"/>
  </svg>
);

const metaItems = [
  { Icon: IconMail,  label: "Email",         value: "hello@quarcode.dev" },
  { Icon: IconPin,   label: "Base",           value: "Algiers, Algeria — Remote-first" },
  { Icon: IconClock, label: "Response time",  value: "Within 24 hours" },
] as const;

export default function Contact() {
  const { t } = useLanguage();
  const c = t.contact;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Wire up to your preferred form handler / API route
  };

  return (
    <section
      id="contact"
      className="py-[100px] px-10 max-w-[1280px] mx-auto"
    >
      <SectionLabel text="// start here" />

      <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-16 items-start">

        {/* ── LEFT: info ── */}
        <div>
          <h2 className="text-[clamp(26px,3vw,38px)] font-extrabold tracking-[-0.03em] leading-[1.15] mb-4 text-[#f0f1ff]">
            {c.headline1}{" "}
            <span className="text-[#4f6eff]">{c.headline2}</span>?
          </h2>
          <p className="text-[14.5px] text-[#8889a8] leading-[1.7] mb-9">
            {c.body}
          </p>

          <div className="flex flex-col gap-4">
            {metaItems.map(({ Icon, label, value }) => (
              <div key={label} className="flex items-center gap-3.5">
                <div className="w-[38px] h-[38px] rounded-[9px] border border-white/[0.07] bg-[#0e0f1a] flex items-center justify-center text-[#4f6eff] flex-shrink-0">
                  <Icon />
                </div>
                <div>
                  <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#4b4c6a] mb-0.5">
                    {label}
                  </div>
                  <div className="text-[14px] font-semibold text-[#f0f1ff]">
                    {value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT: form ── */}
        <div
          className="rounded-2xl border border-white/[0.07] p-10"
          style={{ background: "#0e0f1a" }}
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-0">

            {/* Name + Email row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-[12px] uppercase tracking-[0.04em] font-semibold text-[#8889a8]">
                  {c.fields.name}
                </label>
                <input
                  type="text"
                  name="fullName"
                  placeholder={c.fields.namePlaceholder}
                  className="
                    bg-[#13141f] border border-white/[0.07] rounded-[9px]
                    px-3.5 py-[11px] text-[14px] text-[#f0f1ff]
                    placeholder:text-[#4b4c6a]
                    focus:outline-none focus:border-[#4f6eff]/50 focus:bg-[#1a1b2a]
                    transition-colors duration-150
                  "
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-[12px] uppercase tracking-[0.04em] font-semibold text-[#8889a8]">
                  {c.fields.email}
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder={c.fields.emailPlaceholder}
                  className="
                    bg-[#13141f] border border-white/[0.07] rounded-[9px]
                    px-3.5 py-[11px] text-[14px] text-[#f0f1ff]
                    placeholder:text-[#4b4c6a]
                    focus:outline-none focus:border-[#4f6eff]/50 focus:bg-[#1a1b2a]
                    transition-colors duration-150
                  "
                />
              </div>
            </div>

            {/* Company + Service row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-[12px] uppercase tracking-[0.04em] font-semibold text-[#8889a8]">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  placeholder="Acme Inc."
                  className="
                    bg-[#13141f] border border-white/[0.07] rounded-[9px]
                    px-3.5 py-[11px] text-[14px] text-[#f0f1ff]
                    placeholder:text-[#4b4c6a]
                    focus:outline-none focus:border-[#4f6eff]/50 focus:bg-[#1a1b2a]
                    transition-colors duration-150
                  "
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-[12px] uppercase tracking-[0.04em] font-semibold text-[#8889a8]">
                  Service
                </label>
                <select
                  name="service"
                  defaultValue=""
                  className="
                    bg-[#13141f] border border-white/[0.07] rounded-[9px]
                    px-3.5 py-[11px] text-[14px] text-[#8889a8]
                    focus:outline-none focus:border-[#4f6eff]/50 focus:bg-[#1a1b2a]
                    transition-colors duration-150 cursor-pointer
                    appearance-none
                  "
                >
                  <option value="" disabled>Select a service</option>
                  <option value="web">Web Engineering</option>
                  <option value="platform">Platform &amp; APIs</option>
                  <option value="cloud">Cloud &amp; DevOps</option>
                  <option value="full">Full engagement</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1.5 mb-5">
              <label className="font-mono text-[12px] uppercase tracking-[0.04em] font-semibold text-[#8889a8]">
                {c.fields.message}
              </label>
              <textarea
                name="message"
                rows={5}
                placeholder={c.fields.messagePlaceholder}
                className="
                  bg-[#13141f] border border-white/[0.07] rounded-[9px]
                  px-3.5 py-[11px] text-[14px] text-[#f0f1ff]
                  placeholder:text-[#4b4c6a] leading-[1.6] resize-y
                  focus:outline-none focus:border-[#4f6eff]/50 focus:bg-[#1a1b2a]
                  transition-colors duration-150
                "
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="
                w-full bg-[#4f6eff] text-white py-3.5 rounded-[10px]
                text-[14px] font-bold tracking-[0.02em]
                transition-all duration-150
                hover:-translate-y-px hover:shadow-[0_8px_24px_rgba(79,110,255,0.35)]
                active:scale-[0.99]
              "
            >
              {c.fields.submit} →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}