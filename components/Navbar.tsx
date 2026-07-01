"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Icon from "./Icon";

type Page = "services" | "about" | "work" | "contact" | "pricing";

type NavLink = {
  href: string;
  label: string;
  page: Page;
};

const navLinks: NavLink[] = [
  { href: "/Services", label: "Services", page: "services" },
  { href: "/About",    label: "About",    page: "about"    },
  { href: "/Pricings",     label: "Pricings",     page: "pricing"     },
  { href: "/Contact",  label: "Contact",  page: "contact"  },
];

type NavbarProps = {
  activePage?: Page;
};

export default function Navbar({ activePage }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change (Next.js soft navigation)
  useEffect(() => {
    setMobileOpen(false);
  }, [activePage]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-outline-variant/30 transition-all duration-300 ${
        scrolled ? "bg-background/95" : ""
      }`}
    >
      <div className="flex justify-between items-center max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            alt="Quarcode logo"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfHAj1frqBT2u6P3OiWJjdfztKszxzHmGMuPMN9y5sWa01YbZn4e28h34_uvfAuZV8XA6jAn3Ec3u8Y7LWhzxUdZ2ETvMtzQhnabQVR05pTyssHY5s96m8wHmbHhtH0eZ6BK7738vaUjTPVxs1sQ488tTcckdtXrSpGwa9j6ZEmSjBph03mQtu67_lvRP46zi0pwkTqZ62CqDFmGV26vmqHYtJPrmdqfyPHfOvZjDtJTBhlf8aL-a_FQkkMu_xhiMTCCCOxgg1IbNK"
            width={32}
            height={32}
            className="h-8 w-auto"
          />
          <span className="text-headline-sm font-headline-sm font-bold tracking-tight text-on-surface">
            Quarcode
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => {
            const isActive = activePage === link.page;
            return (
              <Link
                key={link.page}
                href={link.href}
                className={`text-label-md font-label-md transition-colors ${
                  isActive
                    ? "text-primary border-b-2 border-primary pb-1"
                    : "text-on-surface-variant hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <button className="bg-primary-container text-on-primary-container px-6 py-2 rounded-xl text-label-md font-label-md font-bold transition-all active:scale-95 duration-150 ease-in-out">
            Get Started
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-on-surface p-1"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <Icon name={mobileOpen ? "close" : "menu"} />
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-outline-variant/20 px-margin-mobile py-6 flex flex-col gap-5">
          {navLinks.map((link) => {
            const isActive = activePage === link.page;
            return (
              <Link
                key={link.page}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`text-label-md font-label-md transition-colors ${
                  isActive ? "text-primary" : "text-on-surface-variant"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <button className="bg-primary-container text-on-primary-container px-6 py-3 rounded-xl text-label-md font-label-md font-bold w-full mt-2">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
}