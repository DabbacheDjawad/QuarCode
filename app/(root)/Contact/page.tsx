// app/contact/page.tsx
"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactHero from "@/components/Contact/ContactHero";
import ContactForm from "@/components/Contact/ContactForm";
import ContactSidebar from "@/components/Contact/ContactSideBar";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function ContactPage() {
  const { t } = useLanguage();
  const cp = t.contactPage;

  return (
    <>
      <Navbar activePage="contact" />

      <div className="mesh-bg min-h-screen selection:bg-primary/30">
        <main className="pt-32 pb-section-gap">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <ContactHero />

            {/* 12-column grid: form takes 7 cols, sidebar takes 5 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
              <ContactForm />
              <ContactSidebar />
            </div>
          </div>
        </main>
      </div>

      <Footer
        tagline={cp.footerTagline}
        columns={cp.footerColumns}
        showNewsletter={false}
        copyright={cp.footerCopyright}
      />
    </>
  );
}