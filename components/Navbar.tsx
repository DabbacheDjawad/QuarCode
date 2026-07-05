"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "@/lib/i18n/LanguageContext";

type Page = "services" | "about" | "work" | "contact" | "pricing";

type NavbarProps = {
  activePage?: Page;
};

export default function Navbar({ activePage }: NavbarProps) {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [activePage]);

  type NavLink = { href: string; label: string; page: Page };
  const navLinks: NavLink[] = [
    { href: "/Services",  label: t.nav.services, page: "services" },
    { href: "/About",     label: t.nav.about,    page: "about"    },
    { href: "/Pricings",  label: t.nav.pricing,  page: "pricing"  },
    { href: "/Contact",   label: t.nav.contact,  page: "contact"  },
  ];

  return (
    <nav
      className={`
        fixed top-0 w-full z-50 transition-all duration-300
        bg-[#07080f]/85 backdrop-blur-xl
        border-b border-white/[0.06]
        ${scrolled ? "bg-[#07080f]/95" : ""}
      `}
    >
      <div className="flex justify-between items-center max-w-[1280px] mx-auto px-10 h-[60px]">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-7 h-7 rounded-[7px] bg-gradient-to-br from-[#4f6eff] to-[#8b5cf6] flex items-center justify-center font-mono text-[13px] font-bold text-white tracking-tighter">
            {"</>"}
          </div>
          <span className="text-[16px] font-bold tracking-[-0.3px] text-[#f0f1ff]">
            Quarcode
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activePage === link.page;
            return (
              <Link
                key={link.page}
                href={link.href}
                className={`text-[13.5px] tracking-[0.01em] transition-colors duration-150 ${
                  isActive
                    ? "text-[#4f6eff]"
                    : "text-[#8889a8] hover:text-[#f0f1ff]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          <LanguageSwitcher />
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[#f0f1ff] p-1"
          aria-label={mobileOpen ? t.nav.closeMenu : t.nav.openMenu}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12h18M3 6h18M3 18h18"/>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-[#07080f]/95 backdrop-blur-xl border-t border-white/[0.06] px-10 py-6 flex flex-col gap-5">
          {navLinks.map((link) => {
            const isActive = activePage === link.page;
            return (
              <Link
                key={link.page}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`text-[14px] transition-colors ${
                  isActive ? "text-[#4f6eff]" : "text-[#8889a8]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <LanguageSwitcher compact />
          <button className="bg-[#4f6eff] text-white px-6 py-3 rounded-lg text-[13px] font-semibold w-full mt-1">
            {t.nav.cta}
          </button>
        </div>
      )}
    </nav>
  );
}