"use client";

import Icon from "../Icon";

type Service = {
  icon: string;
  title: string;
  description: string;
  features: string[];
  decorIcon: string;
};

const services: Service[] = [
  {
    icon: "language",
    title: "Web Development",
    description:
      "High-speed, SEO-optimized web applications built with the latest frameworks like React and Next.js.",
    features: [
      "Progressive Web Apps",
      "Enterprise E-commerce",
      "Custom CMS Solutions",
    ],
    decorIcon: "code",
  },
  {
    icon: "terminal",
    title: "Custom Software",
    description:
      "Bespoke desktop and mobile software designed to automate complex business workflows and operations.",
    features: ["Cloud Architecture", "API Integrations", "Desktop Applications"],
    decorIcon: "settings_ethernet",
  },
  {
    icon: "insights",
    title: "Digital Strategy",
    description:
      "Data-driven roadmaps to help your business navigate the digital landscape and achieve sustainable growth.",
    features: ["Product Roadmapping", "UX/UI Research", "Market Analysis"],
    decorIcon: "rocket_launch",
  },
];

function ServiceCard({ service }: { service: Service }) {
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
        <Icon name={service.icon} className="text-4xl" />
      </div>
      <h3 className="font-headline-sm text-headline-sm mb-stack-sm">
        {service.title}
      </h3>
      <p className="text-on-surface-variant font-body-md mb-stack-lg">
        {service.description}
      </p>
      <ul className="space-y-2 mb-stack-lg">
        {service.features.map((feature) => (
          <li key={feature} className="flex items-center gap-2 text-code-sm">
            <span className="w-1 h-1 bg-primary" /> {feature}
          </li>
        ))}
      </ul>
      <div className="absolute bottom-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
        <Icon name={service.decorIcon} className="text-6xl" />
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section
      id="services"
      className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto"
    >
      <div className="flex flex-col md:flex-row justify-between items-end mb-section-gap gap-8">
        <div className="max-w-2xl">
          <h2 className="font-headline-lg text-headline-lg mb-stack-md">
            Solutions Tailored for{" "}
            <span className="text-primary">Performance</span>
          </h2>
          <p className="text-on-surface-variant font-body-md text-lg">
            We combine global engineering standards with local insights to
            deliver world-class software from the heart of Algeria.
          </p>
        </div>
        <div className="flex gap-4">
          <button
            aria-label="Previous"
            className="w-12 h-12 rounded-full border border-outline flex items-center justify-center hover:bg-primary hover:border-primary hover:text-on-primary transition-all"
          >
            <Icon name="arrow_back" />
          </button>
          <button
            aria-label="Next"
            className="w-12 h-12 rounded-full border border-outline flex items-center justify-center hover:bg-primary hover:border-primary hover:text-on-primary transition-all"
          >
            <Icon name="arrow_forward" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
        {services.map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </div>
    </section>
  );
}