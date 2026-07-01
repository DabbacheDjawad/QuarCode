type Value = {
  icon: string;
  iconColor: string;
  barColor: string;
  title: string;
  description: string;
};

const values: Value[] = [
  {
    icon: "verified",
    iconColor: "text-primary",
    barColor: "bg-primary",
    title: "Quality",
    description:
      "We don't settle for 'functional.' Our code is clean, our architectures are resilient, and our user experiences are flawless. Every project undergoes rigorous testing to meet enterprise benchmarks.",
  },
  {
    icon: "lightbulb",
    iconColor: "text-tertiary",
    barColor: "bg-tertiary",
    title: "Innovation",
    description:
      "We push boundaries by adopting cutting-edge technologies. From AI integration to advanced cloud-native architectures, we bring the latest global trends to the Algerian market.",
  },
  {
    icon: "shield",
    iconColor: "text-secondary",
    barColor: "bg-secondary",
    title: "Integrity",
    description:
      "Transparency is our default state. We build trust through honest communication, ethical data handling, and a commitment to long-term partnerships over short-term gains.",
  },
];

export default function CoreValues() {
  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <div className="text-center mb-16">
        <h2 className="font-headline-md text-headline-md mb-4">
          Our Foundational Values
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
          The core principles that guide every line of code we write and
          every decision we make.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
        {values.map((value) => (
          <div key={value.title} className="group">
            {/* Animated top bar — fills on group hover */}
            <div className="h-1 bg-outline-variant/20 mb-6 relative overflow-hidden">
              <div
                className={`absolute inset-0 ${value.barColor} w-0 group-hover:w-full transition-all duration-500`}
              />
            </div>

            <div className="flex items-center space-x-3 mb-4">
              <span className={`material-symbols-outlined ${value.iconColor}`}>
                {value.icon}
              </span>
              <h4 className="font-headline-sm text-headline-sm">{value.title}</h4>
            </div>

            <p className="font-body-md text-body-md text-on-surface-variant">
              {value.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}