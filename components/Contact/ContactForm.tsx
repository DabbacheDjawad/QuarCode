"use client";

import { useActionState, useRef, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { sendContactEmail, type FormState } from "@/app/(root)/actions/sendContactEmail";

const initialState: FormState = {
  status: "idle",
  message: "",
};

// ── Inline SVGs ───────────────────────────────────────────────────────────────

const IconSend = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
  </svg>
);

const IconCheck = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#38debb" strokeWidth="2">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
    <polyline points="22 4 12 14.01 9 11.01"/>
  </svg>
);

const IconError = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f87171" strokeWidth="2">
    <circle cx="12" cy="12" r="10"/>
    <line x1="15" y1="9" x2="9" y2="15"/>
    <line x1="9" y1="9" x2="15" y2="15"/>
  </svg>
);

const IconFieldError = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10"/>
    <line x1="12" y1="8" x2="12" y2="12"/>
    <line x1="12" y1="16" x2="12.01" y2="16"/>
  </svg>
);

function SpinnerIcon() {
  return (
    <svg
      className="animate-spin h-4 w-4 shrink-0"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
    </svg>
  );
}

// ── Sub-components ────────────────────────────────────────────────────────────

function FormField({
  id, name, label, type, placeholder, error, disabled,
}: {
  id: string; name: string; label: string; type: string;
  placeholder: string; error?: string; disabled?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="font-mono text-[12px] uppercase tracking-[0.04em] font-semibold text-[#8889a8]"
      >
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        aria-describedby={error ? `${id}-error` : undefined}
        aria-invalid={error ? "true" : undefined}
        className={`
          bg-[#13141f] border rounded-[9px]
          px-3.5 py-[11px] text-[14px] text-[#f0f1ff]
          placeholder:text-[#4b4c6a]
          focus:outline-none focus:bg-[#1a1b2a]
          transition-colors duration-150
          disabled:opacity-50
          ${error
            ? "border-red-500/60 focus:border-red-500/80"
            : "border-white/[0.07] focus:border-[#4f6eff]/50"
          }
        `}
      />
      {error && (
        <p id={`${id}-error`} role="alert" className="flex items-center gap-1.5 text-red-400 font-mono text-[11px] mt-0.5">
          <IconFieldError />
          {error}
        </p>
      )}
    </div>
  );
}

// ── Matches the ?service= param against the translated projectTypes list ──────
// e.g. "Website Development" → "Web Development"
// Strategy: exact → first-keyword-prefix → substring fallback
function resolveProjectType(serviceParam: string, projectTypes: readonly string[]): string {
  const fallback = projectTypes[0] ?? "";
  if (!serviceParam) return fallback;
  const param = serviceParam.toLowerCase();

  // 1. Exact
  const exact = projectTypes.find((pt) => pt.toLowerCase() === param);
  if (exact) return exact;

  // 2. Keyword prefix — "website" starts with "web", so "Website Development"
  //    matches "Web Development"
  const paramWords = param.split(/\s+/);
  const byKeyword = projectTypes.find((pt) =>
    pt.toLowerCase().split(/\s+/).some((pw) =>
      paramWords.some((aw) => aw.startsWith(pw) || pw.startsWith(aw))
    )
  );
  if (byKeyword) return byKeyword;

  // 3. Substring
  const bySub = projectTypes.find(
    (pt) => pt.toLowerCase().includes(param) || param.includes(pt.toLowerCase())
  );
  return bySub ?? fallback;
}

// ── Main component ────────────────────────────────────────────────────────────

export default function ContactForm() {
  const { t, locale } = useLanguage();
  const f = t.contactForm;
  const searchParams = useSearchParams();

  const serviceParam = searchParams.get("service") ?? "";

  // Controlled select — useState guarantees React owns the value after
  // hydration, so the pre-selection is never silently dropped.
  const [projectType, setProjectType] = useState<string>(() =>
    resolveProjectType(serviceParam, f.projectTypes)
  );

  const [state, formAction, isPending] = useActionState(sendContactEmail, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  // Keep the select in sync if the user navigates between service cards
  // without a full page reload (Next.js soft navigation).
  useEffect(() => {
    setProjectType(resolveProjectType(serviceParam, f.projectTypes));
  }, [serviceParam, f.projectTypes]);

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
      setProjectType(f.projectTypes[0] ?? "");
    }
  }, [state.status, f.projectTypes]);

  return (
    <div
      className="lg:col-span-7 rounded-2xl border border-white/[0.07] p-10 relative overflow-hidden"
      style={{ background: "#0e0f1a" }}
    >
      {/* Subtle top accent */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#4f6eff] via-[#8b5cf6] to-transparent opacity-60" />

      {/* Section label */}
      <div className="flex items-center gap-3.5 mb-8">
        <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#4f6eff]">
          // send a message
        </span>
        <div className="h-px flex-1 bg-white/[0.07]" />
      </div>

      {/* Success banner */}
      {state.status === "success" && (
        <div
          role="status"
          aria-live="polite"
          className="mb-6 flex items-start gap-3 px-4 py-3 rounded-xl border border-[#38debb]/25 text-[#f0f1ff] text-[13.5px]"
          style={{ background: "rgba(56,222,187,0.07)" }}
        >
          <span className="flex-shrink-0 mt-0.5"><IconCheck /></span>
          <p>{state.message}</p>
        </div>
      )}

      {/* Error banner */}
      {state.status === "error" && (
        <div
          role="alert"
          aria-live="assertive"
          className="mb-6 flex items-start gap-3 px-4 py-3 rounded-xl border border-red-500/25 text-[#f0f1ff] text-[13.5px]"
          style={{ background: "rgba(248,113,113,0.07)" }}
        >
          <span className="flex-shrink-0 mt-0.5"><IconError /></span>
          <p>{state.message}</p>
        </div>
      )}

      <form ref={formRef} action={formAction} className="flex flex-col gap-0">
        <input type="hidden" name="locale" value={locale} />

        {/* Pre-selected service indicator */}
        {serviceParam && (
          <div
            className="mb-5 flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-[#4f6eff]/20 text-[13px] text-[#8889a8]"
            style={{ background: "rgba(79,110,255,0.06)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#4f6eff] flex-shrink-0" />
            <span>
              Enquiring about{" "}
              <span className="font-semibold text-[#f0f1ff]">{serviceParam}</span>
            </span>
          </div>
        )}

        {/* Name + Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <FormField
            id="fullName" name="fullName"
            label={f.fields.name} type="text"
            placeholder={f.fields.namePlaceholder}
            error={state.fieldErrors?.fullName} disabled={isPending}
          />
          <FormField
            id="email" name="email"
            label={f.fields.email} type="email"
            placeholder={f.fields.emailPlaceholder}
            error={state.fieldErrors?.email} disabled={isPending}
          />
        </div>

        {/* Project type */}
        <div className="flex flex-col gap-1.5 mb-4">
          <label
            htmlFor="projectType"
            className="font-mono text-[12px] uppercase tracking-[0.04em] font-semibold text-[#8889a8]"
          >
            {f.fields.projectType}
          </label>
          <select
            id="projectType"
            name="projectType"
            disabled={isPending}
            value={projectType}
            onChange={(e) => setProjectType(e.target.value)}
            className={`
              bg-[#13141f] border rounded-[9px]
              px-3.5 py-[11px] text-[14px] text-[#8889a8]
              focus:outline-none focus:bg-[#1a1b2a]
              transition-colors duration-150 cursor-pointer
              appearance-none disabled:opacity-50
              ${state.fieldErrors?.projectType
                ? "border-red-500/60"
                : "border-white/[0.07] focus:border-[#4f6eff]/50"
              }
            `}
          >
            {f.projectTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
          {state.fieldErrors?.projectType && (
            <p role="alert" className="flex items-center gap-1.5 text-red-400 font-mono text-[11px] mt-0.5">
              <IconFieldError /> {state.fieldErrors.projectType}
            </p>
          )}
        </div>

        {/* Message */}
        <div className="flex flex-col gap-1.5 mb-6">
          <label
            htmlFor="message"
            className="font-mono text-[12px] uppercase tracking-[0.04em] font-semibold text-[#8889a8]"
          >
            {f.fields.message}
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            placeholder={f.fields.messagePlaceholder}
            disabled={isPending}
            className={`
              bg-[#13141f] border rounded-[9px]
              px-3.5 py-[11px] text-[14px] text-[#f0f1ff]
              placeholder:text-[#4b4c6a] leading-[1.6] resize-y
              focus:outline-none focus:bg-[#1a1b2a]
              transition-colors duration-150
              disabled:opacity-50
              ${state.fieldErrors?.message
                ? "border-red-500/60"
                : "border-white/[0.07] focus:border-[#4f6eff]/50"
              }
            `}
          />
          {state.fieldErrors?.message && (
            <p role="alert" className="flex items-center gap-1.5 text-red-400 font-mono text-[11px] mt-0.5">
              <IconFieldError /> {state.fieldErrors.message}
            </p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isPending || state.status === "success"}
          className="
            w-full md:w-auto self-start
            bg-[#4f6eff] text-white
            px-8 py-3.5 rounded-[10px]
            text-[14px] font-semibold tracking-[0.02em]
            flex items-center gap-2
            transition-all duration-150
            hover:-translate-y-px hover:shadow-[0_8px_24px_rgba(79,110,255,0.35)]
            active:scale-[0.99]
            disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none
          "
        >
          {isPending ? (
            <><SpinnerIcon /> {f.fields.sending}</>
          ) : (
            <><IconSend /> {f.fields.submit}</>
          )}
        </button>
      </form>
    </div>
  );
}