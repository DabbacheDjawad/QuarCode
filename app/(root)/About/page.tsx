import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHero from "@/components/About/AboutHero";
import OurStory from "@/components/About/OurStory";
import MissionVision from "@/components/About/MissionVision";
import CoreValues from "@/components/About/CoreValues";
import Leadership from "@/components/About/Leadership";
import AboutCTA from "@/components/About/AboutCta";

export const metadata: Metadata = {
  title: "About Us | Quarcode – Engineering Excellence",
};

const aboutFooterColumns = [
  {
    heading: "Quick Links",
    links: [
      { label: "Services", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Case Studies", href: "#" },
      { label: "Careers", href: "#" },
    ],
  },
  {
    heading: "Connect",
    links: [
      { label: "LinkedIn", href: "#" },
      { label: "GitHub", href: "#" },
      { label: "Twitter", href: "#" },
      { label: "Facebook", href: "#" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar activePage="about" />

      {/* mesh-gradient-bg scoped to this page only, not global body */}
      <div className="mesh-gradient-bg min-h-screen">
        <main>
          <AboutHero />
          <OurStory />
          <MissionVision />
          <CoreValues />
          <Leadership />
          <AboutCTA />
        </main>
      </div>

      <Footer
        tagline="Pioneering software engineering excellence in Algeria since 2021."
        columns={aboutFooterColumns}
        showNewsletter={false}
        copyright="© 2024 Quarcode. Engineering Excellence from Algeria."
      />
    </>
  );
}