// components/Contact/ContactForm.tsx
"use client";

import { useActionState, useRef, useEffect } from "react";
import Icon from "@/components/Icon";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { sendContactEmail, type FormState } from "@/app/(root)/actions/sendContactEmail";

const initialState: FormState = {
  status: "idle",
  message: "",
};

export default function ContactForm() {
  const { t, locale } = useLanguage();
  const f = t.contactForm;

  const [state, formAction, isPending] = useActionState(sendContactEmail, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  // Reset form fields on success
  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
    }
  }, [state.status]);

  return (
    <div className="lg:col-span-7 bg-surface-container border border-outline-variant/20 p-8 md:p-12 rounded-xl relative overflow-hidden gradient-border">
      {/* Decorative pixel pattern */}
      <div className="absolute top-0 right-0 w-24 h-24 opacity-10 text-primary pointer-events-none overflow-hidden">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      {/* ── Success banner ──────────────────────────────────────────────── */}
      {state.status === "success" && (
        <div
          role="status"
          aria-live="polite"
          className="mb-6 flex items-start gap-3 px-4 py-3 rounded-xl bg-tertiary/10 border border-tertiary/30 text-on-surface"
        >
          <Icon name="check_circle" className="text-tertiary mt-0.5 shrink-0" />
          <p className="text-body-md font-body-md">{state.message}</p>
        </div>
      )}

      {/* ── Error banner ─────────────────────────────────────────────────── */}
      {state.status === "error" && (
        <div
          role="alert"
          aria-live="assertive"
          className="mb-6 flex items-start gap-3 px-4 py-3 rounded-xl bg-error/10 border border-error/30 text-on-surface"
        >
          <Icon name="error" className="text-error mt-0.5 shrink-0" />
          <p className="text-body-md font-body-md">{state.message}</p>
        </div>
      )}

      <form ref={formRef} action={formAction} className="space-y-stack-md relative z-10">
        {/* Hidden locale field — tells the server action which language to use for messages */}
        <input type="hidden" name="locale" value={locale} />

        {/* Name + Email row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-md">
          <FormField
            id="fullName"
            name="fullName"
            label={f.fields.name}
            type="text"
            placeholder={f.fields.namePlaceholder}
            error={state.fieldErrors?.fullName}
            disabled={isPending}
          />
          <FormField
            id="email"
            name="email"
            label={f.fields.email}
            type="email"
            placeholder={f.fields.emailPlaceholder}
            error={state.fieldErrors?.email}
            disabled={isPending}
          />
        </div>

        {/* Project type select */}
        <div className="group space-y-2">
          <label
            htmlFor="projectType"
            className="block text-label-md font-label-md text-on-surface-variant group-focus-within:text-primary transition-colors"
          >
            {f.fields.projectType}
          </label>
          <select
            id="projectType"
            name="projectType"
            disabled={isPending}
            className={`w-full bg-background border rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all text-on-surface appearance-none disabled:opacity-50 ${
              state.fieldErrors?.projectType
                ? "border-error"
                : "border-outline-variant/40"
            }`}
          >
            {f.projectTypes.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
          {state.fieldErrors?.projectType && (
            <FieldError message={state.fieldErrors.projectType} />
          )}
        </div>

        {/* Message textarea */}
        <div className="group space-y-2">
          <label
            htmlFor="message"
            className="block text-label-md font-label-md text-on-surface-variant group-focus-within:text-primary transition-colors"
          >
            {f.fields.message}
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            placeholder={f.fields.messagePlaceholder}
            disabled={isPending}
            className={`w-full bg-background border rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-on-surface-variant/30 text-on-surface resize-none disabled:opacity-50 ${
              state.fieldErrors?.message
                ? "border-error"
                : "border-outline-variant/40"
            }`}
          />
          {state.fieldErrors?.message && (
            <FieldError message={state.fieldErrors.message} />
          )}
        </div>

        {/* Submit button */}
        <button
          type="submit"
          disabled={isPending || state.status === "success"}
          className="w-full md:w-auto bg-gradient-to-r from-primary-container to-tertiary-container text-on-primary-container px-10 py-4 rounded-xl font-headline-sm text-headline-sm hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          {isPending ? (
            <>
              <SpinnerIcon />
              {f.fields.sending}
            </>
          ) : (
            <>
              {f.fields.submit}
              <Icon name="send" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}

// ── Sub-components ────────────────────────────────────────────────────────────

function FormField({
  id,
  name,
  label,
  type,
  placeholder,
  error,
  disabled,
}: {
  id: string;
  name: string;
  label: string;
  type: string;
  placeholder: string;
  error?: string;
  disabled?: boolean;
}) {
  return (
    <div className="group space-y-2">
      <label
        htmlFor={id}
        className="block text-label-md font-label-md text-on-surface-variant group-focus-within:text-primary transition-colors"
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
        className={`w-full bg-background border rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-on-surface-variant/30 text-on-surface disabled:opacity-50 ${
          error ? "border-error" : "border-outline-variant/40"
        }`}
      />
      {error && <FieldError id={`${id}-error`} message={error} />}
    </div>
  );
}

function FieldError({ id, message }: { id?: string; message: string }) {
  return (
    <p
      id={id}
      role="alert"
      className="flex items-center gap-1.5 text-error text-code-sm font-code-sm mt-1"
    >
      <Icon name="error_outline" className="text-[14px] shrink-0" />
      {message}
    </p>
  );
}

function SpinnerIcon() {
  return (
    <svg
      className="animate-spin h-4 w-4 shrink-0"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
  );
}