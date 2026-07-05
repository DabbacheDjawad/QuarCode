import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Pricing & Service Packs | Quarcode",
};

// ── Types ─────────────────────────────────────────────────────────────────────

type FeatureItem =
  | { type: "check";  label: string }
  | { type: "bolt";   label: string }
  | { type: "cancel"; label: string };

type PricingTier = {
  name:         string;
  tag:          string;
  tagline:      string;
  price:        string;
  priceSuffix?: string;
  features:     FeatureItem[];
  cta:          string;
  variant:      "default" | "featured" | "enterprise";
};

// ── Data ──────────────────────────────────────────────────────────────────────

const tiers: PricingTier[] = [
  {
    name:        "Startup",
    tag:         "01",
    tagline:     "Ideal for early-stage validation and MVPs.",
    price:       "$4,900",
    priceSuffix: "/project",
    features: [
      { type: "check",  label: "Custom Design System"  },
      { type: "check",  label: "Responsive Web App"    },
      { type: "check",  label: "SEO Optimisation"      },
      { type: "cancel", label: "Dedicated Support"     },
    ],
    cta:     "Get started",
    variant: "default",
  },
  {
    name:        "Business",
    tag:         "02",
    tagline:     "Scale your operations with high-performance tools.",
    price:       "$12,500",
    priceSuffix: "/project",
    features: [
      { type: "bolt",  label: "Everything in Startup"      },
      { type: "check", label: "Custom Backend Engineering"  },
      { type: "check", label: "40 hrs Support / Month"      },
      { type: "check", label: "CMS Integration"             },
    ],
    cta:     "Get started",
    variant: "featured",
  },
  {
    name:    "Enterprise",
    tag:     "03",
    tagline: "Bespoke technical ecosystems for large organisations.",
    price:   "Custom",
    features: [
      { type: "check", label: "Unlimited Revisions"          },
      { type: "check", label: "Microservices Architecture"   },
      { type: "check", label: "24/7 Dedicated Team"          },
      { type: "check", label: "Security & Compliance Audits" },
    ],
    cta:     "Contact sales",
    variant: "enterprise",
  },
];

// ── Inline SVGs ───────────────────────────────────────────────────────────────

const IconCheck = ({ color }: { color: string }) => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" style={{ flexShrink: 0 }}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
    <polyline points="22 4 12 14.01 9 11.01"/>
  </svg>
);

const IconBolt = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="#38debb" stroke="#38debb" strokeWidth="1" style={{ flexShrink: 0 }}>
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
  </svg>
);

const IconCancel = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4b4c6a" strokeWidth="2" style={{ flexShrink: 0 }}>
    <circle cx="12" cy="12" r="10"/>
    <line x1="15" y1="9" x2="9" y2="15"/>
    <line x1="9" y1="9" x2="15" y2="15"/>
  </svg>
);

const IconSpeed = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#38debb" strokeWidth="1.2">
    <path d="M12 2a10 10 0 1 0 10 10"/><path d="M12 12l4-4"/>
  </svg>
);

const IconCloud = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#4f6eff" strokeWidth="1.2">
    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
    <polyline points="12 12 12 18"/><polyline points="9 15 12 18 15 15"/>
  </svg>
);

// ── Feature line ──────────────────────────────────────────────────────────────

function FeatureLine({ item }: { item: FeatureItem }) {
  if (item.type === "cancel") {
    return (
      <li className="flex items-center gap-3 text-[#4b4c6a]">
        <IconCancel />
        <span className="line-through text-[13.5px]">{item.label}</span>
      </li>
    );
  }
  if (item.type === "bolt") {
    return (
      <li className="flex items-center gap-3 text-[#38debb]">
        <IconBolt />
        <span className="font-semibold text-[13.5px]">{item.label}</span>
      </li>
    );
  }
  return (
    <li className="flex items-center gap-3 text-[#8889a8]">
      <IconCheck color="#4f6eff" />
      <span className="text-[13.5px]">{item.label}</span>
    </li>
  );
}

// ── Pricing card ──────────────────────────────────────────────────────────────

function PricingCard({ tier }: { tier: PricingTier }) {
  const isFeatured   = tier.variant === "featured";
  const isEnterprise = tier.variant === "enterprise";

  return (
    <div
      className={`
        group relative flex flex-col p-9 overflow-hidden
        transition-colors duration-200
        ${isFeatured
          ? "bg-[#0e0f1a]"
          : "bg-[#07080f] hover:bg-[#0e0f1a]"
        }
      `}
    >
      {/* Featured top glow bar */}
      {isFeatured && (
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#4f6eff] via-[#8b5cf6] to-[#38debb]" />
      )}

      {/* "Most Popular" badge */}
      {isFeatured && (
        <div className="absolute top-5 right-6">
          <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#4f6eff] bg-[#4f6eff]/10 border border-[#4f6eff]/25 px-2.5 py-1 rounded-full">
            Most popular
          </span>
        </div>
      )}

      {/* Tag + name */}
      <div className="flex items-center gap-3 mb-5">
        <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#4b4c6a]">
          {tier.tag}
        </span>
      </div>

      <h3 className="text-[20px] font-extrabold tracking-[-0.02em] text-[#f0f1ff] mb-1.5">
        {tier.name}
      </h3>
      <p className="text-[13px] text-[#4b4c6a] mb-7 leading-[1.6]">
        {tier.tagline}
      </p>

      {/* Price */}
      <div className="mb-7">
        <span
          className="text-[40px] font-extrabold tracking-[-0.04em] leading-none"
          style={{ color: isFeatured ? "#4f6eff" : isEnterprise ? "#8b5cf6" : "#f0f1ff" }}
        >
          {tier.price}
        </span>
        {tier.priceSuffix && (
          <span className="font-mono text-[12px] text-[#4b4c6a] ml-2">
            {tier.priceSuffix}
          </span>
        )}
      </div>

      {/* Features */}
      <ul className="flex flex-col gap-3.5 mb-8 flex-grow">
        {tier.features.map((f) => (
          <FeatureLine key={f.label} item={f} />
        ))}
      </ul>

      {/* CTA */}
      <button
        className={`
          w-full py-3.5 rounded-[10px] text-[14px] font-semibold tracking-[0.01em]
          transition-all duration-150 active:scale-[0.99]
          ${isFeatured
            ? "bg-[#4f6eff] text-white hover:-translate-y-px hover:shadow-[0_8px_24px_rgba(79,110,255,0.35)]"
            : isEnterprise
            ? "border border-[#8b5cf6]/40 text-[#8b5cf6] hover:bg-[#8b5cf6]/10"
            : "border border-white/[0.12] text-[#8889a8] hover:text-[#f0f1ff] hover:border-[#4f6eff]/35"
          }
        `}
      >
        {tier.cta}
      </button>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function PricingPage() {
  return (
    <>
      <Navbar />

      <main className="pt-[140px] overflow-x-hidden">

        {/* ── Hero ── */}
        <section className="max-w-[1280px] mx-auto px-10 mb-[80px] relative">
          {/* Glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute top-[-80px] left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(79,110,255,0.07) 0%, transparent 65%)" }}
          />

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 border border-[#4f6eff]/30 bg-[#4f6eff]/7 rounded-full px-3 py-1.5 mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4f6eff]" />
              <span className="font-mono text-[11px] text-[#4f6eff] uppercase tracking-[0.1em]">
                Pricing strategy
              </span>
            </div>

            <h1 className="text-[clamp(34px,4vw,54px)] font-extrabold leading-[1.1] tracking-[-0.03em] mb-5 text-[#f0f1ff]">
              Scalable solutions for{" "}
              <span className="bg-gradient-to-r from-[#6b8eff] to-[#38debb] bg-clip-text text-transparent">
                modern engineering
              </span>
            </h1>

            <p className="text-[16px] text-[#8889a8] leading-[1.75] max-w-xl mx-auto">
              Transparent pricing tiers designed to accelerate your product development, from MVP to global enterprise scale.
            </p>
          </div>
        </section>

        {/* ── Pricing cards ── */}
        <section className="max-w-[1280px] mx-auto px-10 mb-[100px]">
          <div
            className="grid grid-cols-1 md:grid-cols-3 rounded-2xl overflow-hidden border border-white/[0.07]"
            style={{ gap: "1px", background: "rgba(255,255,255,0.07)" }}
          >
            {tiers.map((tier) => (
              <PricingCard key={tier.name} tier={tier} />
            ))}
          </div>

          {/* Footnote */}
          <p className="text-center font-mono text-[11px] text-[#4b4c6a] mt-6">
            All prices are project-based estimates. Final quote depends on scope and complexity.
          </p>
        </section>

        {/* ── Technical depth comparison ── */}
        <section className="py-[100px] border-t border-white/[0.06]" style={{ background: "#0e0f1a" }}>
          <div className="max-w-[1280px] mx-auto px-10">

            {/* Section label */}
            <div className="flex items-center gap-3.5 mb-14">
              <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#4f6eff]">
                // what's under the hood
              </span>
              <div className="h-px flex-1 bg-white/[0.07]" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-3">

              {/* Security — wide */}
              <div
                className="md:col-span-2 rounded-2xl border border-white/[0.07] p-8 flex flex-col justify-between"
                style={{ background: "#07080f" }}
              >
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#4f6eff] mb-3">
                    Security
                  </div>
                  <p className="text-[14px] text-[#8889a8] leading-[1.7]">
                    Advanced encryption and compliance protocols baked into every line of code we ship.
                  </p>
                </div>
                <div className="flex gap-2 mt-6">
                  {["SSL", "OAUTH2", "SOC2"].map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[11px] uppercase tracking-[0.06em] px-3 py-1.5 rounded-lg border border-white/[0.07] text-[#4b4c6a]"
                      style={{ background: "#1a1b2a" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Uptime */}
              <div
                className="rounded-2xl border border-white/[0.07] p-8 flex flex-col items-center justify-center gap-3 text-center"
                style={{ background: "#07080f" }}
              >
                <IconSpeed />
                <div className="text-[32px] font-extrabold tracking-[-0.04em] text-[#f0f1ff] leading-none">
                  99.9<span className="text-[20px] text-[#38debb]">%</span>
                </div>
                <div className="font-mono text-[11px] uppercase tracking-[0.1em] text-[#4b4c6a]">
                  Uptime guarantee
                </div>
              </div>

              {/* CI/CD */}
              <div
                className="rounded-2xl border border-white/[0.07] p-8 flex flex-col items-center justify-center gap-3 text-center"
                style={{ background: "#07080f" }}
              >
                <IconCloud />
                <div className="text-[32px] font-extrabold tracking-[-0.04em] text-[#f0f1ff] leading-none">
                  CI<span className="text-[20px] text-[#4f6eff]">/</span>CD
                </div>
                <div className="font-mono text-[11px] uppercase tracking-[0.1em] text-[#4b4c6a]">
                  Automated pipeline
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── FAQ CTA ── */}
        <section className="py-[100px] border-t border-white/[0.06]" style={{ background: "#07080f" }}>
          <div className="max-w-[1280px] mx-auto px-10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-10">

              <div className="max-w-xl">
                <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#4f6eff] mb-4">
                  // custom requirements?
                </div>
                <h2 className="text-[clamp(22px,2.5vw,32px)] font-extrabold tracking-[-0.03em] leading-[1.2] mb-4 text-[#f0f1ff]">
                  Have specific requirements?
                </h2>
                <p className="text-[14.5px] text-[#8889a8] leading-[1.75]">
                  Our engineering team specialises in tailoring solutions to unique business challenges. Let's discuss your project constraints and goals.
                </p>
              </div>

              <div className="flex gap-3 flex-shrink-0">
                <button className="px-7 py-3.5 rounded-[10px] text-[14px] font-medium text-[#8889a8] border border-white/[0.07] hover:text-[#f0f1ff] hover:border-white/[0.14] transition-all duration-150">
                  Book a call
                </button>
                <button className="px-7 py-3.5 rounded-[10px] text-[14px] font-semibold bg-[#4f6eff] text-white transition-all duration-150 hover:-translate-y-px hover:shadow-[0_8px_24px_rgba(79,110,255,0.35)]">
                  View case studies
                </button>
              </div>

            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}