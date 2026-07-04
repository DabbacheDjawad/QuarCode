// components/Home/Services.tsx
"use client";

import Icon from "../Icon";
import { useLanguage } from "@/lib/i18n/LanguageContext";

// Static icon data stays outside translations (UI concern, not content)
const serviceIcons = [
  { icon: "language", decorIcon: "code" },
  { icon: "terminal", decorIcon: "settings_ethernet" },
  { icon: "insights", decorIcon: "rocket_launch" },
] as const;

function ServiceCard({
  title,
  description,
  features,
  icon,
  decorIcon,
}: {
  title: string;
  description: string;
  features: readonly string[];
  icon: string;
  decorIcon: string;
}) {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="bg-surface-container-low border border-outline-variant p-stack-lg rounded-xl hover:border-primary transition-all group relative overflow-hidden"
    >
      <div className="mb-stack-lg text-primary">
        <Icon name={icon} className="text-4xl" />
      </div>
      <h3 className="font-headline-sm text-headline-sm mb-stack-sm">{title}</h3>
      <p className="text-on-surface-variant font-body-md mb-stack-lg">
        {description}
      </p>
      <ul className="space-y-2 mb-stack-lg">
        {features.map((feature) => (
          <li key={feature} className="flex items-center gap-2 text-code-sm">
            <span className="w-1 h-1 bg-primary shrink-0" /> {feature}
          </li>
        ))}
      </ul>
      <div className="absolute bottom-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
        <Icon name={decorIcon} className="text-6xl" />
      </div>
    </div>
  );
}

export default function Services() {
  const { t } = useLanguage();
  const s = t.services;

  return (
    <section
      id="services"
      className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto"
    >
      <div className="flex flex-col md:flex-row justify-between items-end mb-section-gap gap-8">
        <div className="max-w-2xl">
          <h2 className="font-headline-lg text-headline-lg mb-stack-md">
            {s.sectionHeadline1}{" "}
            <span className="text-primary">{s.sectionHeadline2}</span>
          </h2>
          <p className="text-on-surface-variant font-body-md text-lg">
            {s.sectionBody}
          </p>
        </div>
        <div className="flex gap-4">
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
        {s.items.map((item, i) => (
          <ServiceCard
            key={item.title}
            title={item.title}
            description={item.description}
            features={item.features}
            icon={serviceIcons[i].icon}
            decorIcon={serviceIcons[i].decorIcon}
          />
        ))}
      </div>
    </section>
  );
}