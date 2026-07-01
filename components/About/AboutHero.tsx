export default function AboutHero() {
  return (
    <section className="pt-[160px] pb-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto overflow-hidden relative">
      <div className="relative z-10 max-w-3xl">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-outline-variant/30 bg-surface-container mb-6">
          <span className="w-2 h-2 rounded-full bg-tertiary" />
          <span className="font-code-sm text-code-sm uppercase tracking-widest text-on-surface-variant">
            Engineering Algerian Innovation
          </span>
        </div>

        <h1 className="font-headline-xl text-headline-xl mb-8 leading-none">
          Architecting the{" "}
          <span className="primary-gradient-text">
            Future of Algeria
          </span>{" "}
          through Code.
        </h1>

        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          Quarcode is a premier software solutions agency dedicated to
          elevating the digital landscape of Algeria. We blend local insight
          with global engineering standards to build high-performance
          software.
        </p>
      </div>
    </section>
  );
}