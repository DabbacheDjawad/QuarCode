// components/Home/Contact.tsx
"use client";

import Icon from "../Icon";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();
  const c = t.contact;

  return (
    <section
      id="contact"
      className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container relative"
    >
      <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-section-gap">
        {/* Left col — info */}
        <div>
          <h2 className="font-headline-lg text-headline-lg mb-stack-md">
            {c.headline1} <span className="text-primary">{c.headline2}</span>?
          </h2>
          <p className="text-on-surface-variant font-body-md text-lg mb-stack-lg">
            {c.body}
          </p>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                <Icon name="mail" />
              </div>
              <div>
                <div className="text-sm text-on-surface-variant">
                  {c.emailLabel}
                </div>
                <div className="font-bold">{c.email}</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                <Icon name="location_on" />
              </div>
              <div>
                <div className="text-sm text-on-surface-variant">
                  {c.locationLabel}
                </div>
                <div className="font-bold">{c.location}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right col — form */}
        <div className="bg-surface p-8 md:p-12 rounded-xl border border-outline-variant shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
            <Icon name="contact_page" className="text-9xl" />
          </div>
          <form className="space-y-6 relative z-10">
            <div className="group">
              <label
                htmlFor="fullName"
                className="block text-label-md font-label-md text-on-surface-variant mb-2 group-focus-within:text-primary transition-colors"
              >
                {c.fields.name}
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                placeholder={c.fields.namePlaceholder}
                className="w-full bg-surface-container border-b border-outline-variant focus:border-primary focus:ring-0 transition-all p-3 text-on-surface"
              />
            </div>
            <div className="group">
              <label
                htmlFor="email"
                className="block text-label-md font-label-md text-on-surface-variant mb-2 group-focus-within:text-primary transition-colors"
              >
                {c.fields.email}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder={c.fields.emailPlaceholder}
                className="w-full bg-surface-container border-b border-outline-variant focus:border-primary focus:ring-0 transition-all p-3 text-on-surface"
              />
            </div>
            <div className="group">
              <label
                htmlFor="message"
                className="block text-label-md font-label-md text-on-surface-variant mb-2 group-focus-within:text-primary transition-colors"
              >
                {c.fields.message}
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder={c.fields.messagePlaceholder}
                className="w-full bg-surface-container border-b border-outline-variant focus:border-primary focus:ring-0 transition-all p-3 text-on-surface"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary-container text-on-primary-container py-4 rounded-xl font-bold text-lg hover:shadow-[0_0_20px_rgba(46,91,255,0.4)] transition-all"
            >
              {c.fields.submit}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
