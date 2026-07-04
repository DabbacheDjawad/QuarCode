"use server";

import { Resend } from "resend";
import { ContactEmailTemplate } from "@/components/Contact/ContactEmailTemplate";

// ── Types ─────────────────────────────────────────────────────────────────────

export type FormState = {
  status: "idle" | "success" | "error" | "validation";
  message: string;
  fieldErrors?: {
    fullName?: string;
    email?: string;
    projectType?: string;
    message?: string;
  };
};

type Messages = {
  success: string;
  error: string;
  validationSummary: string;
  fieldErrors: {
    fullName: string;
    email: string;
    projectType: string;
    message: string;
  };
};

const MESSAGES: Record<string, Messages> = {
  en: {
    success: "Your message has been sent! We'll get back to you within 24 hours.",
    error: "Failed to send your message. Please try again or email us directly at djawadmne@gmail.com.",
    validationSummary: "Please fix the errors below.",
    fieldErrors: {
      fullName: "Please enter your full name (at least 2 characters).",
      email: "Please enter a valid email address.",
      projectType: "Please select a project type.",
      message: "Please describe your project (at least 20 characters).",
    },
  },
  fr: {
    success: "Votre message a bien été envoyé ! Nous vous répondrons dans les 24 heures.",
    error: "Échec de l'envoi. Veuillez réessayer ou nous contacter directement à djawadmne@gmail.com.",
    validationSummary: "Veuillez corriger les erreurs ci-dessous.",
    fieldErrors: {
      fullName: "Veuillez saisir votre nom complet (au moins 2 caractères).",
      email: "Veuillez saisir une adresse e-mail valide.",
      projectType: "Veuillez sélectionner un type de projet.",
      message: "Veuillez décrire votre projet (au moins 20 caractères).",
    },
  },
  ar: {
    success: "تم إرسال رسالتك بنجاح! سنرد عليك في غضون 24 ساعة.",
    error: "فشل إرسال رسالتك. يرجى المحاولة مجدداً أو مراسلتنا مباشرةً على djawadmne@gmail.com.",
    validationSummary: "يرجى تصحيح الأخطاء أدناه.",
    fieldErrors: {
      fullName: "يرجى إدخال اسمك الكامل (حرفان على الأقل).",
      email: "يرجى إدخال عنوان بريد إلكتروني صحيح.",
      projectType: "يرجى اختيار نوع المشروع.",
      message: "يرجى وصف مشروعك (20 حرفاً على الأقل).",
    },
  },
};

// ── Helpers ───────────────────────────────────────────────────────────────────

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

function getMessages(locale: string): Messages {
  return MESSAGES[locale] ?? MESSAGES.en;
}

// ── Action ────────────────────────────────────────────────────────────────────

export async function sendContactEmail(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const fullName    = (formData.get("fullName")    as string | null)?.trim() ?? "";
  const email       = (formData.get("email")       as string | null)?.trim() ?? "";
  const projectType = (formData.get("projectType") as string | null)?.trim() ?? "";
  const message     = (formData.get("message")     as string | null)?.trim() ?? "";

  const locale      = (formData.get("locale")      as string | null)?.trim() ?? "en";

  const msg = getMessages(locale);

  // ── Field-level validation ─────────────────────────────────────────────────
  const fieldErrors: NonNullable<FormState["fieldErrors"]> = {};

  if (!fullName || fullName.length < 2)    fieldErrors.fullName    = msg.fieldErrors.fullName;
  if (!email    || !isValidEmail(email))   fieldErrors.email       = msg.fieldErrors.email;
  if (!projectType)                        fieldErrors.projectType = msg.fieldErrors.projectType;
  if (!message  || message.length < 20)   fieldErrors.message     = msg.fieldErrors.message;

  if (Object.keys(fieldErrors).length > 0) {
    return { status: "validation", message: msg.validationSummary, fieldErrors };
  }

  // ── Send via Resend ────────────────────────────────────────────────────────
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { error } = await resend.emails.send({
      from:    "Contact Form <onboarding@resend.dev>",
      to:      ["djawadmne@gmail.com"],
      replyTo: email,
      subject: `[Quarcode] New ${projectType} inquiry from ${fullName}`,
      react:   ContactEmailTemplate({ fullName, email, projectType, message }),
    });

    if (error) {
      console.error("[Resend error]", error);
      return { status: "error", message: msg.error };
    }

    return { status: "success", message: msg.success };
  } catch (err) {
    console.error("[sendContactEmail unexpected]", err);
    return { status: "error", message: msg.error };
  }
}