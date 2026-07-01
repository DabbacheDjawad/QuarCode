import type { Metadata } from "next";
import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FaqShell from "@/components/FAQ/FAQShell";
import { type FaqCategory } from "@/data/FAQ";

export const metadata: Metadata = {
  title: "FAQ | Quarcode – Engineering Excellence",
  description:
    "Answers to common questions about our pricing, process, timelines, and support services.",
};

// ── Reusable answer building blocks ──────────────────────────────────────────

function Tag({ label }: { label: string }) {
  return (
    <span className="px-2 py-1 bg-surface-variant text-code-sm font-code-sm rounded border border-outline-variant/30 uppercase tracking-tighter">
      {label}
    </span>
  );
}

function TagRow({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-2 mt-3">
      {tags.map((t) => (
        <Tag key={t} label={t} />
      ))}
    </div>
  );
}

function Bullet({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-2">
      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
      <span>{children}</span>
    </li>
  );
}

function Step({ number, children }: { number: number; children: ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-code-sm font-code-sm shrink-0 mt-0.5">
        {number}
      </span>
      <span>{children}</span>
    </li>
  );
}

function Check({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-center gap-2">
      <span className="text-tertiary text-[16px] material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
        check_circle
      </span>
      <span>{children}</span>
    </li>
  );
}

// ── Answer map ────────────────────────────────────────────────────────────────

const answers: Record<string, ReactNode> = {
  cost: (
    <>
      <p>
        The cost depends on the type of website and the features you need. Our
        pricing starts at{" "}
        <strong className="text-primary">30,000 DA</strong> for a professional
        business website. For custom projects, we provide a personalised quote
        based on your specific requirements.
      </p>
    </>
  ),

  timeline: (
    <>
      <p>The timeline depends on the project's complexity:</p>
      <TagRow tags={["Business Website: 5–7 days", "Custom Web App: 2–6 weeks"]} />
      <p className="mt-3 text-sm">
        A detailed project timeline will be provided before development begins.
      </p>
    </>
  ),

  mobile: (
    <p>
      Yes. Every website we build is{" "}
      <strong className="text-on-surface">fully responsive</strong>, ensuring
      an excellent experience on desktops, tablets, and smartphones.
    </p>
  ),

  cms: (
    <p>
      Yes. If your project includes an admin dashboard, you'll be able to
      easily manage your content, products, images, and blog posts{" "}
      <strong className="text-on-surface">without any technical knowledge</strong>.
    </p>
  ),

  seo: (
    <>
      <p>
        Yes. All our websites include{" "}
        <strong className="text-on-surface">basic SEO optimisation</strong> to
        help search engines understand your website. Our Business package also
        includes <strong className="text-on-surface">advanced SEO</strong> for
        improved online visibility.
      </p>
    </>
  ),

  hosting: (
    <>
      <p>
        Yes. We can handle everything for you, including:
      </p>
      <ul className="mt-3 space-y-2">
        <Bullet>Domain registration</Bullet>
        <Bullet>Web hosting</Bullet>
        <Bullet>SSL certificate (HTTPS)</Bullet>
        <Bullet>Server setup and deployment</Bullet>
      </ul>
      <p className="mt-3 text-sm">
        Your website will be delivered ready to go live.
      </p>
    </>
  ),

  maintenance: (
    <>
      <p>Yes. We provide maintenance services that include:</p>
      <ul className="mt-3 space-y-2">
        <Bullet>Security updates</Bullet>
        <Bullet>Regular backups</Bullet>
        <Bullet>Performance monitoring</Bullet>
        <Bullet>Bug fixes</Bullet>
        <Bullet>Technical support</Bullet>
      </ul>
      <p className="mt-3 text-sm">
        This keeps your website secure, fast, and up to date.
      </p>
    </>
  ),

  revisions: (
    <p>
      Absolutely. Minor revisions are included after delivery. If you need
      additional features or significant changes later, we offer{" "}
      <strong className="text-on-surface">
        flexible upgrade and maintenance services
      </strong>
      .
    </p>
  ),

  remote: (
    <p>
      No. We work with businesses and entrepreneurs{" "}
      <strong className="text-on-surface">in Algeria and internationally</strong>
      . The entire project can be completed remotely through online
      communication.
    </p>
  ),

  start: (
    <>
      <p>Getting started is simple:</p>
      <ol className="mt-3 space-y-2">
        <Step number={1}>Contact us.</Step>
        <Step number={2}>Tell us about your project.</Step>
        <Step number={3}>We'll discuss your requirements.</Step>
        <Step number={4}>You'll receive a detailed quotation.</Step>
        <Step number={5}>Once approved, we'll begin development.</Step>
      </ol>
    </>
  ),

  ownership: (
    <p>
      Yes. Once the project is completed and the final payment is made, you
      will have{" "}
      <strong className="text-on-surface">
        full ownership of your website and its content
      </strong>
      , according to the terms of our agreement.
    </p>
  ),

  why: (
    <>
      <p className="mb-3">Here's what sets Quarcode apart:</p>
      <ul className="space-y-2">
        <Check>Modern and professional design</Check>
        <Check>Fully custom development</Check>
        <Check>Fast, secure, and scalable websites</Check>
        <Check>SEO-friendly structure</Check>
        <Check>Responsive on all devices</Check>
        <Check>Ongoing support after launch</Check>
        <Check>Transparent communication</Check>
        <Check>On-time project delivery</Check>
        <Check>Solutions tailored to your business goals</Check>
      </ul>
    </>
  ),
};

// ── FAQ items ─────────────────────────────────────────────────────────────────

type FaqEntry = {
  id: string;
  icon: string;
  question: string;
  category: FaqCategory;
  answer: ReactNode;
};

const faqEntries: FaqEntry[] = [
  {
    id: "cost",
    icon: "payments",
    question: "How much does a website cost?",
    category: "pricing",
    answer: answers.cost,
  },
  {
    id: "timeline",
    icon: "schedule",
    question: "How long does it take to build a website?",
    category: "process",
    answer: answers.timeline,
  },
  {
    id: "mobile",
    icon: "smartphone",
    question: "Will my website work on mobile devices?",
    category: "process",
    answer: answers.mobile,
  },
  {
    id: "cms",
    icon: "edit",
    question: "Can I update my website myself?",
    category: "support",
    answer: answers.cms,
  },
  {
    id: "seo",
    icon: "travel_explore",
    question: "Is SEO included?",
    category: "process",
    answer: answers.seo,
  },
  {
    id: "hosting",
    icon: "cloud",
    question: "Do you provide hosting and domain registration?",
    category: "process",
    answer: answers.hosting,
  },
  {
    id: "maintenance",
    icon: "build",
    question: "Do you offer website maintenance?",
    category: "support",
    answer: answers.maintenance,
  },
  {
    id: "revisions",
    icon: "sync",
    question: "Can I request changes after delivery?",
    category: "support",
    answer: answers.revisions,
  },
  {
    id: "remote",
    icon: "language",
    question: "Do you work only with clients in Algeria?",
    category: "process",
    answer: answers.remote,
  },
  {
    id: "start",
    icon: "rocket_launch",
    question: "How do I get started?",
    category: "support",
    answer: answers.start,
  },
  {
    id: "ownership",
    icon: "verified_user",
    question: "Will I own my website?",
    category: "pricing",
    answer: answers.ownership,
  },
  {
    id: "why",
    icon: "star",
    question: "Why choose Quarcode?",
    category: "pricing",
    answer: answers.why,
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function FaqPage() {
  return (
    <>
      <Navbar activePage="contact" />

      <main className="pt-32">
        {/* ── Hero ── */}
        <header className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-section-gap relative">
          {/* Ambient glow */}
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-high rounded-full border border-outline-variant/30 mb-stack-md">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-code-sm font-code-sm text-on-surface-variant tracking-widest uppercase">
                Support Center
              </span>
            </div>

            <h1 className="text-headline-xl font-headline-xl mb-6 leading-tight text-on-surface">
              Frequently Asked{" "}
              <br className="hidden sm:block" />
              <span className="text-primary-fixed-dim">Questions.</span>
            </h1>

            <p className="text-body-lg font-body-lg text-on-surface-variant max-w-xl">
              Everything you need to know about our process, pricing, timelines,
              and how we build professional websites for businesses in Algeria
              and worldwide.
            </p>
          </div>
        </header>

        {/* ── FAQ grid (sidebar + accordion) — client interactive ── */}
        <FaqShell items={faqEntries} />
      </main>

      <Footer
        columns={[
          {
            heading: "Platform",
            links: [
              { label: "Project Management", href: "#" },
              { label: "Developer Portal",   href: "#" },
            ],
          },
          {
            heading: "Company",
            links: [
              { label: "Terms of Service", href: "#" },
              { label: "Privacy Policy",   href: "#" },
            ],
          },
          {
            heading: "Connect",
            links: [
              { label: "LinkedIn", href: "#" },
              { label: "GitHub",   href: "#" },
            ],
          },
        ]}
        showNewsletter={false}
        tagline="Engineering Excellence from Algeria. Building tomorrow's digital infrastructure today."
        copyright="© 2024 Quarcode. Engineering Excellence from Algeria."
      />
    </>
  );
}