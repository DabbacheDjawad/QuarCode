import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Icon from "@/components/Icon";

export const metadata: Metadata = {
  title: "Services | Quarcode – Engineering Excellence",
};

// ── Data ─────────────────────────────────────────────────────────────────────

const mainServices = [
  {
    id: "web",
    colSpan: "md:col-span-8",
    icon: "computer",
    iconColor: "text-primary",
    titleSize: "text-headline-md font-headline-md",
    title: "Website Development",
    description:
      "We create professional websites that showcase your business and help convert visitors into customers. Every site is built for speed, security, and results.",
    items: [
      "Custom website development",
      "Modern and responsive design",
      "Fast loading performance",
      "Contact forms & Google Maps",
      "SSL (HTTPS) included",
      "Basic SEO optimisation",
      "Cross-browser compatibility",
    ],
    perfectFor: ["Small businesses", "Restaurants", "Doctors", "Lawyers", "Agencies", "Schools", "Freelancers"],
    accentColor: "primary",
    hoverBorder: "hover:border-primary",
    wide: true,
  },
  {
    id: "ecom",
    colSpan: "md:col-span-4",
    icon: "shopping_cart",
    iconColor: "text-tertiary",
    titleSize: "text-headline-sm font-headline-sm",
    title: "E-Commerce Development",
    description:
      "Sell your products online with a secure, easy-to-manage store built for growth.",
    items: [
      "Product catalog & categories",
      "Shopping cart & checkout",
      "Order & inventory management",
      "Customer accounts",
      "Discount codes",
      "Analytics integration",
    ],
    accentColor: "tertiary",
    hoverBorder: "hover:border-tertiary",
    wide: false,
  },
  {
    id: "app",
    colSpan: "md:col-span-4",
    icon: "code_blocks",
    iconColor: "text-primary-fixed-dim",
    titleSize: "text-headline-sm font-headline-sm",
    title: "Custom Web Applications",
    description:
      "Need something beyond a standard website? We build bespoke solutions designed around your exact business processes.",
    items: [
      "Booking systems",
      "CRM platforms",
      "Internal dashboards",
      "Client & employee portals",
      "Inventory systems",
    ],
    accentColor: "primary",
    hoverBorder: "hover:border-primary",
    wide: false,
  },
  {
    id: "design",
    colSpan: "md:col-span-4",
    icon: "draw",
    iconColor: "text-tertiary",
    titleSize: "text-headline-sm font-headline-sm",
    title: "UI/UX Design",
    description:
      "A great website isn't just beautiful — it's easy to use. We design interfaces that are clean, modern, intuitive, and mobile-friendly.",
    items: [
      "Clean & modern interfaces",
      "Mobile-first approach",
      "User-focused layouts",
      "Intuitive navigation",
      "Accessibility-ready",
    ],
    accentColor: "tertiary",
    hoverBorder: "hover:border-tertiary",
    wide: false,
  },
  {
    id: "seo",
    colSpan: "md:col-span-4",
    icon: "travel_explore",
    iconColor: "text-primary",
    titleSize: "text-headline-sm font-headline-sm",
    title: "SEO Optimisation",
    description:
      "A beautiful website is only valuable if people can find it. We help your business gain more visibility on Google.",
    items: [
      "Website structure audit",
      "Page speed improvements",
      "Meta tags & schema",
      "Image optimisation",
      "Mobile performance",
      "Technical SEO",
    ],
    accentColor: "primary",
    hoverBorder: "hover:border-primary",
    wide: false,
  },
  {
    id: "perf",
    colSpan: "md:col-span-4",
    icon: "speed",
    iconColor: "text-tertiary",
    titleSize: "text-headline-sm font-headline-sm",
    title: "Performance Optimisation",
    description:
      "Speed matters. A faster website means happier visitors, lower bounce rates, and higher conversions.",
    items: [
      "Faster loading times",
      "Better Core Web Vitals",
      "Improved user experience",
      "Lower bounce rates",
      "Higher conversion rates",
    ],
    accentColor: "tertiary",
    hoverBorder: "hover:border-tertiary",
    wide: false,
  },
  {
    id: "maintenance",
    colSpan: "md:col-span-4",
    icon: "build",
    iconColor: "text-primary",
    titleSize: "text-headline-sm font-headline-sm",
    title: "Website Maintenance",
    description:
      "Keep your website secure and running smoothly. Focus on your business while we handle the technical side.",
    items: [
      "Security updates",
      "Bug fixes",
      "Regular backups",
      "Performance monitoring",
      "Content updates",
      "Technical support",
    ],
    accentColor: "primary",
    hoverBorder: "hover:border-primary",
    wide: false,
  },
  {
    id: "hosting",
    colSpan: "md:col-span-4",
    icon: "cloud",
    iconColor: "text-tertiary",
    titleSize: "text-headline-sm font-headline-sm",
    title: "Hosting & Deployment",
    description:
      "We take care of getting your website online. Your site will be ready for visitors from day one.",
    items: [
      "Domain configuration",
      "Hosting setup",
      "SSL installation",
      "Server deployment",
      "Email configuration",
      "Ongoing monitoring",
    ],
    accentColor: "tertiary",
    hoverBorder: "hover:border-tertiary",
    wide: false,
  },
  {
    id: "brand",
    colSpan: "md:col-span-4",
    icon: "palette",
    iconColor: "text-primary",
    titleSize: "text-headline-sm font-headline-sm",
    title: "Logo & Brand Identity",
    description:
      "Your brand deserves a strong visual identity. A consistent identity builds trust and recognition.",
    items: [
      "Professional logos",
      "Colour palettes",
      "Typography selection",
      "Brand guidelines",
      "Social media branding",
    ],
    accentColor: "primary",
    hoverBorder: "hover:border-primary",
    wide: false,
  },
];

const whyItems = [
  { icon: "bolt",            title: "Modern Technologies",  body: "We use reliable and modern technologies to build fast, secure, and scalable websites." },
  { icon: "devices",         title: "Responsive Design",    body: "Every website looks and performs beautifully on desktops, tablets, and smartphones." },
  { icon: "travel_explore",  title: "SEO-Friendly",         body: "Our websites are built with search engines in mind to help improve your online visibility." },
  { icon: "lock",            title: "Secure by Default",    body: "Security is integrated into every project using best practices and modern standards." },
  { icon: "tune",            title: "Tailored Solutions",   body: "Every business is unique. We build solutions that fit your goals — not generic templates." },
  { icon: "support_agent",   title: "Ongoing Support",      body: "Our relationship doesn't end at launch. We're here to support you as your business grows." },
];

const processSteps = [
  { number: "01", title: "Discovery",    body: "We learn about your business, goals, and requirements.",                                       connector: true  },
  { number: "02", title: "Planning",     body: "We define the project scope, structure, and timeline.",                                        connector: true  },
  { number: "03", title: "Design",       body: "We create a modern and intuitive user interface.",                                             connector: true  },
  { number: "04", title: "Development",  body: "We build your website using modern technologies and best practices.",                          connector: true  },
  { number: "05", title: "Testing",      body: "Every feature is carefully tested to ensure quality, performance, and security.",              connector: true  },
  { number: "06", title: "Launch",       body: "Your website goes live, fully optimised and ready for your customers.",                       connector: false },
];

// ── Helpers ───────────────────────────────────────────────────────────────────

function accentClass(color: string, prefix: string) {
  return color === "tertiary" ? `${prefix}-tertiary` : `${prefix}-primary`;
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function ServicesPage() {
  // Split the 9 services into layout rows that match the bento pattern:
  // Row 1: web (8) + ecom (4)
  // Row 2: app (4) + design (4) + seo (4)
  // Row 3: perf (4) + maintenance (4) + hosting (4)
  // Row 4: brand (4) — centred via offset
  const row1 = mainServices.slice(0, 2);   // web + ecom
  const row2 = mainServices.slice(2, 5);   // app + design + seo
  const row3 = mainServices.slice(5, 8);   // perf + maintenance + hosting
  const row4 = mainServices.slice(8);      // brand

  return (
    <>
      <Navbar activePage="services" />

      <main className="pt-32 selection:bg-primary/30 selection:text-primary">

        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <section className="relative px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-section-gap overflow-hidden">
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-highest rounded-full mb-6 border border-outline-variant">
              <span className="w-2 h-2 bg-tertiary rounded-full animate-pulse" />
              <span className="text-code-sm font-code-sm uppercase tracking-widest text-on-surface-variant">
                Our Services
              </span>
            </div>

            <h1 className="font-headline-xl text-headline-xl text-on-surface mb-stack-md">
              Building Digital Solutions That Help Your{" "}
              <span className="bg-gradient-to-r from-primary to-tertiary bg-clip-text text-transparent">
                Business Grow
              </span>
              .
            </h1>

            <p className="font-body-lg text-body-lg text-on-surface-variant mb-stack-lg max-w-2xl">
              At Quarcode, we design and develop modern, high-performance
              websites and web applications tailored to your business goals.
              Secure, scalable, and user-friendly digital solutions that make an
              impact.
            </p>
          </div>
        </section>

        {/* ── Services bento grid ───────────────────────────────────────── */}
        <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-section-gap space-y-gutter">

          {/* Row 1: Website Development (wide) + E-Commerce (narrow) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            {row1.map((s) => (
              <ServiceCard key={s.id} service={s} />
            ))}
          </div>

          {/* Row 2: Custom App + UI/UX + SEO (three equal) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {row2.map((s) => (
              <ServiceCard key={s.id} service={s} />
            ))}
          </div>

          {/* Row 3: Performance + Maintenance + Hosting (three equal) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {row3.map((s) => (
              <ServiceCard key={s.id} service={s} />
            ))}
          </div>

          {/* Row 4: Brand Identity — centred single card */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {row4.map((s) => (
              <ServiceCard key={s.id} service={s} />
            ))}
          </div>
        </section>

        {/* ── Why Choose Quarcode ───────────────────────────────────────── */}
        <section className="bg-surface-container-lowest py-section-gap">
          <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
            <div className="text-center mb-stack-lg">
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-stack-md">
                Why Choose Quarcode?
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-xl mx-auto">
                We don't just build websites — we build digital foundations that
                help your business thrive.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter">
              {whyItems.map((item) => (
                <div
                  key={item.title}
                  className="bg-surface-container-low border border-outline-variant/30 rounded-xl p-stack-md card-glow"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <Icon name={item.icon} className="text-[20px]" />
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">
                    {item.title}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Our Process ───────────────────────────────────────────────── */}
        <section className="py-section-gap">
          <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
            <div className="text-center mb-section-gap">
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-stack-md">
                Our Process
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-xl mx-auto">
                A clear, structured approach so you always know what's happening
                and what comes next.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-gutter">
              {processSteps.map((step) => (
                <div key={step.number} className="relative">
                  <div className="text-headline-sm font-headline-sm text-outline-variant/30 mb-3">
                    {step.number}
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">
                    {step.title}
                  </h3>
                  <p className="text-body-md font-body-md text-on-surface-variant text-sm">
                    {step.body}
                  </p>
                  {step.connector && (
                    <div className="hidden lg:block absolute top-4 -right-4 w-8 h-px bg-outline-variant/30" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────────────────── */}
        <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto py-section-gap">
          <div className="bg-primary-container/10 border border-primary/20 rounded-xl p-stack-lg md:p-24 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-tertiary/5 rounded-full blur-[100px] pointer-events-none" />

            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-stack-md relative z-10">
              Ready to Start Your Project?
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-stack-lg max-w-xl mx-auto relative z-10">
              Let's build a website that represents your brand, attracts
              customers, and helps your business grow. Contact Quarcode today
              for a free consultation and personalised quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center relative z-10">
              <Link
                href="/contact"
                className="bg-primary text-on-primary px-8 py-3 rounded-xl font-label-md text-label-md hover:bg-primary-fixed-dim transition-colors"
              >
                Get a Free Quote
              </Link>
              <Link
                href="/faq"
                className="border border-outline-variant text-on-surface px-8 py-3 rounded-xl font-label-md text-label-md hover:bg-surface-variant transition-colors"
              >
                Read Our FAQ
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer
        columns={[
          {
            heading: "Services",
            links: [
              { label: "Website Development",     href: "/services" },
              { label: "E-Commerce",              href: "/services" },
              { label: "Custom Web Applications", href: "/services" },
              { label: "SEO Optimisation",        href: "/services" },
            ],
          },
          {
            heading: "Connect",
            links: [
              { label: "LinkedIn",    href: "#" },
              { label: "GitHub",      href: "#" },
              { label: "Twitter / X", href: "#" },
            ],
          },
          {
            heading: "Legal",
            links: [
              { label: "Privacy Policy",   href: "#" },
              { label: "Terms of Service", href: "#" },
            ],
          },
        ]}
        showNewsletter={false}
        copyright="© 2024 Quarcode. Engineering Excellence from Algeria."
      />
    </>
  );
}

// ── ServiceCard ───────────────────────────────────────────────────────────────

type Service = (typeof mainServices)[number];

function ServiceCard({ service: s }: { service: Service }) {
  const isWide = s.wide === true;
  const accent = s.accentColor;

  const iconColorClass = s.iconColor;
  const linkColorClass = accentClass(accent, "text");
  const borderHoverClass = s.hoverBorder;

  return (
<div
  className={`${s.colSpan} bg-surface-container-low border border-outline-variant/30 rounded-xl p-stack-lg relative overflow-hidden group ${borderHoverClass} transition-all duration-500 glow-hover flex flex-col`}
>
      {/* Corner hatch */}
      <div className="absolute top-0 right-0 w-24 h-24 pixel-trace opacity-10 pointer-events-none" />

      <div className="relative z-10 flex flex-col h-full">
        <Icon name={s.icon} className={`${iconColorClass} text-4xl mb-stack-md`} />

        <h2 className={`${s.titleSize} text-on-surface mb-stack-sm`}>
          {s.title}
        </h2>

        <p className="font-body-md text-body-md text-on-surface-variant mb-stack-md">
          {s.description}
        </p>

        {/* Feature list */}
        <ul className="space-y-1.5 mb-stack-md flex-grow">
          {s.items.map((item) => (
            <li key={item} className="flex items-start gap-2 text-body-md text-on-surface-variant">
              <span
                className={`mt-1.5 w-1 h-1 rounded-full shrink-0 inline-block ${
                  accent === "tertiary" ? "bg-tertiary" : "bg-primary"
                }`}
              />
              {item}
            </li>
          ))}
        </ul>

        {/* Perfect-for tags (website dev card only) */}
        {s.perfectFor && (
          <div className="flex flex-wrap gap-2 mb-stack-md">
            {s.perfectFor.map((pf) => (
              <span
                key={pf}
                className="px-2 py-0.5 bg-surface-container-highest text-code-sm font-code-sm rounded border border-outline-variant/40"
              >
                {pf}
              </span>
            ))}
          </div>
        )}

        <div className="mt-auto pt-stack-sm">
          <Link
            href="/contact"
            className={`inline-flex items-center gap-2 ${linkColorClass} font-label-md text-label-md group-hover:gap-4 transition-all duration-300`}
          >
            Get a Quote <Icon name="arrow_forward" />
          </Link>
        </div>
      </div>
    </div>
  );
}