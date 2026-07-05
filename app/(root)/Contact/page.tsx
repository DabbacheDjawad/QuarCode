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

      <main className="pt-[140px] pb-[100px]">
        <div className="max-w-[1280px] mx-auto px-10">
          <ContactHero />

          {/* 12-col grid: form 7 cols, sidebar 5 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <ContactForm />
            <ContactSidebar />
          </div>
        </div>
      </main>

      <Footer
        tagline={cp.footerTagline}
        columns={cp.footerColumns}
        copyright={cp.footerCopyright}
      />
    </>
  );
}