"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

// Terminal lines rendered progressively for the animated build log
const TERMINAL_LINES = [
  { text: "$ quarcode deploy --env production", type: "cmd" },
  { text: "", type: "blank" },
  { text: "▶  Initializing build pipeline...", type: "info" },
  { text: "✔  Dependencies resolved", suffix: "127 packages", type: "success" },
  { text: "✔  TypeScript compiled", suffix: "0 errors", type: "success" },
  { text: "✔  Test suite passed", suffix: "248/248", type: "success" },
  { text: "✔  Bundle optimized", suffix: "142 kb gzipped", type: "success" },
  { text: "", type: "blank" },
  { text: "▶  Deploying to edge network...", type: "info" },
  { text: "✔  CDN propagated", suffix: "38 regions", type: "success" },
  { text: "✔  Health checks nominal", type: "success" },
  { text: "✔  SSL certificates renewed", type: "success" },
  { text: "", type: "blank" },
  { text: "◆  Deploy complete", suffix: "in 1m 42s", type: "done" },
  { text: "   → https://app.acme.io", suffix: "live", type: "url" },
  { text: "", type: "blank" },
  { text: "$", type: "prompt" },
] as const;

function TerminalLine({
  line,
}: {
  line: (typeof TERMINAL_LINES)[number];
}) {
  const dimClass = "text-[#4b4c6a]";
  const accentClass = "text-[#4f6eff]";
  const greenClass = "text-[#4ade80]";
  const goldClass = "text-[#d4a96a]";
  const purpleClass = "text-[#c084fc]";
  const whiteClass = "text-[#f0f1ff]";

  if (line.type === "blank") return <span className="block h-[1.8em]" />;

  if (line.type === "cmd")
    return <span className={`block ${dimClass}`}>{line.text}</span>;

  if (line.type === "info")
    return (
      <span className="block">
        <span className={accentClass}>
          {line.text.slice(0, 1)}
        </span>
        <span className={dimClass}>{line.text.slice(1)}</span>
      </span>
    );

  if (line.type === "success")
    return (
      <span className="block">
        <span className={greenClass}>{"✔"}</span>
        <span className={dimClass}>{line.text.slice(1)}</span>
        {"suffix" in line && line.suffix ? (
          <span className={`ml-2 ${goldClass}`}>{line.suffix}</span>
        ) : null}
      </span>
    );

  if (line.type === "done")
    return (
      <span className="block">
        <span className={purpleClass}>{"◆"}</span>
        <span className={whiteClass}>{line.text.slice(1)}</span>
        {"suffix" in line && line.suffix ? (
          <span className={`ml-2 ${dimClass}`}>{line.suffix}</span>
        ) : null}
      </span>
    );

  if (line.type === "url")
    return (
      <span className={`block ${dimClass}`}>
        {line.text}
        {"suffix" in line && line.suffix ? (
          <span className={`ml-2 ${greenClass}`}>{line.suffix}</span>
        ) : null}
      </span>
    );

  if (line.type === "prompt")
    return (
      <span className={`block ${dimClass}`}>
        {line.text}
        <span className="inline-block w-[7px] h-[14px] bg-[#4f6eff] align-[-2px] ml-0.5 animate-[blink_1s_steps(1)_infinite]" />
      </span>
    );

  return null;
}

export default function Hero() {
  const { t } = useLanguage();
  const h = t.hero;

  const [visibleLines, setVisibleLines] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Animate lines appearing one by one
  useEffect(() => {
    if (visibleLines < TERMINAL_LINES.length) {
      timerRef.current = setTimeout(
        () => setVisibleLines((v) => v + 1),
        visibleLines === 0 ? 400 : 120
      );
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [visibleLines]);

  const stats = [
    { value: "98%", label: "Uptime SLA" },
    { value: "3.2×", label: "Faster delivery" },
    { value: "64+", label: "Products shipped" },
  ];

  const trustedBy = ["ACME Corp", "Meridian AI", "Vanta Labs", "Nexbridge", "Stellar.io"];

  return (
    <>
      {/* ── HERO ── */}
      <section className="pt-[60px] min-h-screen flex items-center relative overflow-hidden">
        {/* Background glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute top-[-100px] right-[-200px] w-[700px] h-[700px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(79,110,255,0.08) 0%, transparent 65%)",
          }}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center max-w-[1280px] mx-auto px-10 py-20 w-full">
          {/* Left */}
          <div className="lg:pr-16">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 border border-[#4f6eff]/30 bg-[#4f6eff]/7 rounded-full px-3 py-1.5 mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4f6eff] animate-pulse" />
              <span className="font-mono text-[11px] text-[#4f6eff] uppercase tracking-[0.1em]">
                Accepting projects — Q3 2026
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-[clamp(36px,4vw,56px)] font-extrabold leading-[1.1] tracking-[-0.03em] mb-5 text-[#f0f1ff]">
              {h.headline1}{" "}
              <span className="bg-gradient-to-r from-[#6b8eff] to-[#a78bfa] bg-clip-text text-transparent">
                {h.headline2}
              </span>
            </h1>

            {/* Body */}
            <p className="text-[16px] text-[#8889a8] leading-[1.7] max-w-[400px] mb-9">
              {h.body}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
              <button className="bg-[#4f6eff] text-white px-7 py-3.5 rounded-[10px] text-[14px] font-semibold tracking-[0.01em] transition-all duration-150 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(79,110,255,0.35)] active:scale-[0.98]">
                {h.cta1}
              </button>
              <button className="flex items-center gap-2 text-[#8889a8] border border-white/[0.07] px-6 py-3.5 rounded-[10px] text-[14px] font-medium transition-all duration-150 hover:border-[#4f6eff]/35 hover:text-[#f0f1ff]">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <polygon points="10 8 16 12 10 16 10 8"/>
                </svg>
                {h.cta2}
              </button>
            </div>
          </div>

          {/* Right — Terminal */}
          <div className="mt-14 lg:mt-0">
            <div
              className="rounded-[14px] border border-white/[0.07] overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.5)] relative"
              style={{ background: "#0e0f1a" }}
            >
              {/* Subtle inner glow */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(79,110,255,0.03) 0%, transparent 60%)",
                }}
              />

              {/* Title bar */}
              <div
                className="flex items-center gap-2.5 px-4 py-3 border-b border-white/[0.06]"
                style={{ background: "#13141f" }}
              >
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                </div>
                <span className="font-mono text-[12px] text-[#4b4c6a] mx-auto">
                  quarcode — build log
                </span>
              </div>

              {/* Log output */}
              <div className="p-5 font-mono text-[12.5px] leading-[1.8] min-h-[320px]">
                {TERMINAL_LINES.slice(0, visibleLines).map((line, i) => (
                  <TerminalLine key={i} line={line} />
                ))}
              </div>
            </div>

            {/* Stats row */}
            <div
              className="grid grid-cols-3 mt-5 rounded-xl overflow-hidden border border-white/[0.07]"
              style={{ gap: "1px", background: "rgba(255,255,255,0.07)" }}
            >
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="text-center py-4 px-5"
                  style={{ background: "#0e0f1a" }}
                >
                  <div className="text-[24px] font-extrabold tracking-[-0.03em] text-[#f0f1ff] leading-none mb-1">
                    {s.value}
                  </div>
                  <div className="font-mono text-[11.5px] uppercase tracking-[0.04em] text-[#4b4c6a]">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAND ── */}
      <div className="border-t border-white/[0.06] py-12 px-10">
        <div className="max-w-[1280px] mx-auto">
          <p className="text-center font-mono text-[10.5px] uppercase tracking-[0.1em] text-[#4b4c6a] mb-7">
            Trusted by engineering teams at
          </p>
          <div className="flex items-center justify-center gap-10 flex-wrap">
            {trustedBy.map((name) => (
              <span
                key={name}
                className="font-mono text-[13px] font-semibold tracking-[0.05em] text-[#4b4c6a] opacity-50"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}