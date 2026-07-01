import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Icon from "@/components/Icon";

export const metadata: Metadata = {
  title: "Pricing & Service Packs | Quarcode",
};

// ── Types ────────────────────────────────────────────────────────────────────

type FeatureItem =
  | { type: "check"; label: string }
  | { type: "bolt"; label: string }
  | { type: "cancel"; label: string };

type PricingTier = {
  name: string;
  tagline: string;
  price: string;
  priceSuffix?: string;
  features: FeatureItem[];
  cta: string;
  variant: "default" | "featured" | "enterprise";
};

// ── Data ─────────────────────────────────────────────────────────────────────

const tiers: PricingTier[] = [
  {
    name: "Startup",
    tagline: "Ideal for early-stage validation and MVPs.",
    price: "$4,900",
    priceSuffix: "/project",
    features: [
      { type: "check", label: "Custom Design System" },
      { type: "check", label: "Responsive Web App" },
      { type: "check", label: "SEO Optimisation" },
      { type: "cancel", label: "Dedicated Support" },
    ],
    cta: "Get Started",
    variant: "default",
  },
  {
    name: "Business",
    tagline: "Scale your operations with high-performance tools.",
    price: "$12,500",
    priceSuffix: "/project",
    features: [
      { type: "bolt", label: "Everything in Startup" },
      { type: "check", label: "Custom Backend Engineering" },
      { type: "check", label: "40 hrs Support / Month" },
      { type: "check", label: "CMS Integration" },
    ],
    cta: "Get Started",
    variant: "featured",
  },
  {
    name: "Enterprise",
    tagline: "Bespoke technical ecosystems for large organisations.",
    price: "Custom",
    features: [
      { type: "check", label: "Unlimited Revisions" },
      { type: "check", label: "Microservices Architecture" },
      { type: "check", label: "24/7 Dedicated Team" },
      { type: "check", label: "Security & Compliance Audits" },
    ],
    cta: "Contact Sales",
    variant: "enterprise",
  },
];

// ── Sub-components ────────────────────────────────────────────────────────────

function PixelTrace({ variant }: { variant: PricingTier["variant"] }) {
  const dot = (highlighted: boolean) => (
    <span
      className={`w-1 h-1 inline-block ${
        highlighted
          ? variant === "featured"
            ? "bg-primary"
            : "bg-tertiary"
          : "bg-outline-variant"
      }`}
    />
  );

  if (variant === "featured") {
    return (
      <div className="absolute top-3 right-3 grid grid-cols-3 gap-0.5">
        {dot(true)}{dot(true)}{dot(true)}
        {dot(true)}{dot(false)}{dot(true)}
        {dot(true)}{dot(true)}{dot(true)}
      </div>
    );
  }
  if (variant === "enterprise") {
    return (
      <div className="absolute top-3 right-3 grid grid-cols-3 gap-0.5">
        {dot(false)}{dot(false)}{dot(false)}
        {dot(false)}{dot(false)}{dot(false)}
        {dot(false)}{dot(false)}{dot(true)}
      </div>
    );
  }
  return (
    <div className="absolute top-3 right-3 grid grid-cols-3 gap-0.5">
      {dot(false)}{dot(false)}{dot(false)}
      {dot(false)}{dot(true)}{dot(false)}
      {dot(false)}{dot(false)}{dot(false)}
    </div>
  );
}

function FeatureLine({ item }: { item: FeatureItem }) {
  if (item.type === "cancel") {
    return (
      <li className="flex items-center gap-3 text-body-md text-on-surface-variant/50">
        <Icon name="cancel" className="text-[20px] shrink-0" />
        <span className="line-through">{item.label}</span>
      </li>
    );
  }
  if (item.type === "bolt") {
    return (
      <li className="flex items-center gap-3 text-body-md">
        <Icon
          name="bolt"
          className="text-tertiary text-[20px] shrink-0"
          style={{ fontVariationSettings: "'FILL' 1" }}
        />
        <span className="font-bold">{item.label}</span>
      </li>
    );
  }
  return (
    <li className="flex items-center gap-3 text-body-md">
      <Icon
        name="check_circle"
        className="text-tertiary text-[20px] shrink-0"
        style={{ fontVariationSettings: "'FILL' 1" }}
      />
      <span>{item.label}</span>
    </li>
  );
}

function PricingCard({ tier }: { tier: PricingTier }) {
  const isFeatured = tier.variant === "featured";
  const isEnterprise = tier.variant === "enterprise";

  const cardBase =
    "relative p-stack-lg rounded-xl flex flex-col h-full transition-all duration-300";

  const cardVariant = isFeatured
    ? "bg-surface-container border-2 border-primary primary-glow z-10 md:-translate-y-4"
    : "bg-surface-container-lowest border border-outline-variant card-hover";

  const ctaVariant = isFeatured
    ? "w-full py-4 primary-gradient-bg text-on-primary-container rounded-xl text-label-md font-label-md shadow-lg active:scale-95 duration-150"
    : isEnterprise
    ? "w-full py-4 border border-outline text-on-surface rounded-xl text-label-md font-label-md hover:bg-surface-variant/50 transition-colors active:scale-95"
    : "w-full py-4 border border-primary text-primary rounded-xl text-label-md font-label-md hover:bg-primary/10 transition-colors active:scale-95";

  return (
    <div className={`${cardBase} ${cardVariant}`}>
      {isFeatured && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-on-primary px-4 py-1 rounded-full text-label-md font-label-md uppercase whitespace-nowrap">
          Most Popular
        </div>
      )}

      <PixelTrace variant={tier.variant} />

      {/* Header */}
      <div className="mb-stack-md">
        <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">
          {tier.name}
        </h3>
        <p className="text-on-surface-variant text-body-md">{tier.tagline}</p>
      </div>

      {/* Price */}
      <div className="mb-stack-lg">
        <span className="font-headline-lg text-headline-lg text-primary">
          {tier.price}
        </span>
        {tier.priceSuffix && (
          <span className="text-on-surface-variant text-label-md ml-1">
            {tier.priceSuffix}
          </span>
        )}
      </div>

      {/* Features */}
      <ul className="space-y-4 mb-stack-lg flex-grow">
        {tier.features.map((f) => (
          <FeatureLine key={f.label} item={f} />
        ))}
      </ul>

      <button className={ctaVariant}>{tier.cta}</button>
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function PricingPage() {
  return (
    <>
      <Navbar />

      <main className="relative pt-32 overflow-x-hidden">
        {/* Background pixel pattern */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 pixel-pattern opacity-20" />
        </div>

        {/* ── Hero ── */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center mb-section-gap">
          <div className="inline-block mb-4 px-4 py-1 rounded-full border border-primary/30 bg-primary/5">
            <span className="text-primary text-code-sm font-code-sm uppercase tracking-widest">
              Pricing Strategy
            </span>
          </div>

          <h1 className="font-headline-xl text-headline-xl mb-stack-md tracking-tight">
            Scalable Solutions for{" "}
            <br className="hidden md:block" />
            <span className="primary-gradient-text">Modern Engineering.</span>
          </h1>

          <p className="text-on-surface-variant text-body-lg max-w-2xl mx-auto font-body-lg">
            Transparent pricing tiers designed to accelerate your product
            development, from MVP to global enterprise scale.
          </p>
        </section>

        {/* ── Pricing cards ── */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-section-gap">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter items-stretch">
            {tiers.map((tier) => (
              <PricingCard key={tier.name} tier={tier} />
            ))}
          </div>
        </section>

        {/* ── Technical Depth Comparison ── */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-section-gap">
          <h2 className="font-headline-md text-headline-md mb-stack-lg text-center">
            Technical Depth Comparison
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Security */}
            <div className="md:col-span-2 bg-surface-container-low p-stack-md rounded-xl border border-outline-variant/30 flex flex-col justify-between">
              <div>
                <h4 className="text-primary text-label-md font-label-md mb-2">
                  Security
                </h4>
                <p className="text-body-md">
                  Advanced encryption and compliance protocols baked into every
                  line of code.
                </p>
              </div>
              <div className="mt-4 flex gap-2">
                {["SSL", "OAUTH2", "SOC2"].map((tag) => (
                  <span
                    key={tag}
                    className="bg-surface-variant px-3 py-1 rounded text-code-sm font-code-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Uptime */}
            <div className="bg-surface-container-low p-stack-md rounded-xl border border-outline-variant/30 text-center flex flex-col items-center justify-center gap-2">
              <Icon name="speed" className="text-[48px] text-tertiary" />
              <h4 className="text-on-surface font-headline-sm text-headline-sm">
                99.9%
              </h4>
              <p className="text-on-surface-variant text-label-md">
                Uptime Guarantee
              </p>
            </div>

            {/* CI/CD */}
            <div className="bg-surface-container-low p-stack-md rounded-xl border border-outline-variant/30 text-center flex flex-col items-center justify-center gap-2">
              <Icon name="cloud_done" className="text-[48px] text-primary" />
              <h4 className="text-on-surface font-headline-sm text-headline-sm">
                CD/CI
              </h4>
              <p className="text-on-surface-variant text-label-md">
                Automated Pipeline
              </p>
            </div>
          </div>
        </section>

        {/* ── FAQ CTA ── */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-gap border-t border-outline-variant/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-stack-lg">
            <div className="max-w-xl">
              <h2 className="font-headline-md text-headline-md mb-4">
                Have specific requirements?
              </h2>
              <p className="text-on-surface-variant text-body-md">
                Our engineering team specialises in tailoring solutions to
                unique business challenges. Let's discuss your project
                constraints and goals.
              </p>
            </div>
            <div className="flex gap-4 shrink-0">
              <button className="px-8 py-4 bg-surface-variant rounded-xl text-label-md font-label-md hover:bg-surface-bright transition-colors">
                Book a Call
              </button>
              <button className="px-8 py-4 primary-gradient-bg text-on-primary-container rounded-xl text-label-md font-label-md">
                View Case Studies
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}