import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center pt-section-gap px-margin-mobile md:px-margin-desktop pixel-pattern overflow-hidden">
      <div className="absolute inset-0 hero-glow -z-10" />

      <div className="text-center max-w-4xl z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-surface-container rounded-full border border-outline-variant/30 mb-stack-md">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-code-sm font-code-sm text-primary uppercase tracking-widest">
            Engineering Excellence Algeria
          </span>
        </div>

        <h1 className="font-headline-xl text-headline-xl text-on-background mb-stack-md">
          Engineering Digital{" "}
          <span className="bg-gradient-to-r from-primary to-tertiary bg-clip-text text-transparent">
            Excellence
          </span>
        </h1>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-stack-lg max-w-2xl mx-auto">
          Algeria&apos;s premier partner for custom web and software
          solutions. We build high-performance digital products that scale
          with your vision.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-primary-container text-on-primary-container px-10 py-4 rounded-xl text-label-md font-label-md font-bold text-lg hover:shadow-[0_0_20px_rgba(46,91,255,0.4)] transition-all">
            Get a Free Consultation
          </button>
          <button className="border border-outline px-10 py-4 rounded-xl text-label-md font-label-md font-bold text-lg hover:bg-surface-variant/30 transition-all">
            View Our Work
          </button>
        </div>
      </div>

      <div className="mt-section-gap w-full max-w-5xl relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-primary to-tertiary rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
        <div className="relative bg-surface-container rounded-xl border border-outline-variant/50 overflow-hidden shadow-2xl">
          <div className="relative w-full h-[400px] md:h-[600px]">
            <Image
              alt="A sophisticated dark UI dashboard showing intricate data visualizations, code snippets in a high-contrast editor, and architectural software diagrams. The scene is lit with electric blue and purple neon highlights, reflecting a high-end software development environment with Algerian architectural subtle motifs in the background. Photorealistic, 8k, tech-forward aesthetic."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPJdj_dMLeD2RNFUatwpVWj6oJFNYR19D861JDpBaSHRqdPg41Rx2Q-NFTqMiPxeMleZJaghoSzoaaNC-Cg3wiwEzSD0Iuq6GBPsnpVIymdUUszy5_Iz0uJshylb-s33qcEdgZ2rTYSMapRbxk8Xt2yhaqJvl273hm14jSudEwLgWf35IpI6co-2d9aYDlJCWOVH4ys-4t_IZRcpO1SWX0oDE4uDaGQzZVoMvmjFPC9nyRCh3mbgiv2BSPvHnVD5I_xlTrPuIU1I8X"
              fill
              priority
              className="object-cover"
            />
          </div>

          <div className="absolute top-4 right-4 pixel-accent">
            <div />
            <div />
            <div />
            <div />
            <div className="opacity-0" />
            <div />
            <div />
            <div />
            <div />
          </div>
        </div>
      </div>
    </section>
  );
}