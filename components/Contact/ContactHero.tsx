export default function ContactHero() {
  return (
    <div className="mb-stack-lg relative">
      {/* Animated badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-variant/30 border border-outline-variant/20 rounded-full text-tertiary font-code-sm text-code-sm mb-4">
        <span className="w-1.5 h-1.5 bg-tertiary rounded-full animate-pulse" />
        READY TO COLLABORATE
      </div>

      <h1 className="text-headline-xl font-headline-xl text-on-surface max-w-3xl mb-6">
        Let&apos;s build something{" "}
        <span className="text-primary">extraordinary</span> together.
      </h1>

      <p className="text-body-lg font-body-lg text-on-surface-variant max-w-2xl">
        Based in the heart of Algiers, we bridge the gap between complex
        engineering and elegant design. Reach out to start your digital
        transformation.
      </p>
    </div>
  );
}