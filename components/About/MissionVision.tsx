type CardProps = {
  decorIcon: string;
  accentIcon: string;
  accentColor: "text-primary" | "text-tertiary";
  title: string;
  body: string;
};

function MissionCard({ decorIcon, accentIcon, accentColor, title, body }: CardProps) {
  return (
    <div className="p-stack-lg rounded-xl bg-surface border border-outline-variant/30 relative overflow-hidden card-glow transition-all duration-300">
      {/* Large ghost icon decoration — filled variant via inline style */}
      <div className="absolute top-4 right-4 opacity-10 pointer-events-none">
        <span
          className="material-symbols-outlined text-[120px]"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          {decorIcon}
        </span>
      </div>

      {/* Accent icon */}
      <span
        className={`material-symbols-outlined ${accentColor} mb-4 block`}
        style={{ fontVariationSettings: "'FILL' 1" }}
      >
        {accentIcon}
      </span>

      <h3 className="font-headline-md text-headline-md mb-4">{title}</h3>
      <p className="font-body-md text-body-md text-on-surface-variant">{body}</p>
    </div>
  );
}

export default function MissionVision() {
  return (
    <section className="py-section-gap bg-surface-container relative">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-stack-lg">
        <MissionCard
          decorIcon="rocket_launch"
          accentIcon="target"
          accentColor="text-primary"
          title="Our Mission"
          body="To empower Algerian enterprises with world-class software that drives growth, streamlines operations, and fosters local innovation. We are committed to nurturing the next generation of Algerian engineers through mentorship and high-standard project execution."
        />
        <MissionCard
          decorIcon="visibility"
          accentIcon="auto_awesome"
          accentColor="text-tertiary"
          title="Our Vision"
          body="To become the definitive leader in Algerian digital transformation, recognized globally as the hub for engineering excellence in the Maghreb region. We envision a future where 'Built by Quarcode' is synonymous with uncompromising quality."
        />
      </div>
    </section>
  );
}