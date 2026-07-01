import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactHero from "@/components/Contact/ContactHero";
import ContactForm from "@/components/Contact/ContactForm";
import ContactSidebar from "@/components/Contact/ContactSideBar";

export const metadata: Metadata = {
  title: "Contact Us | Quarcode Engineering Excellence",
};

const contactFooterColumns = [
  {
    heading: "Platform",
    links: [
      { label: "Services", href: "/" },
      { label: "About", href: "/about" },
      { label: "Work", href: "#" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
  },
  {
    heading: "Social",
    links: [
      { label: "LinkedIn", href: "#" },
      { label: "GitHub", href: "#" },
    ],
  },
];

export default function ContactPage() {
  return (
    <>
      <Navbar activePage="contact" />

      {/* mesh-bg + selection colour scoped to this page, not the shared body */}
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
        tagline="Forging the future of software in Algeria and beyond."
        columns={contactFooterColumns}
        showNewsletter={false}
        copyright="© 2024 Quarcode. Engineering Excellence from Algeria."
      />
    </>
  );
}