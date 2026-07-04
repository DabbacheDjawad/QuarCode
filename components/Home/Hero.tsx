'use client';
import Image from "next/image";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
  const h = t.hero;

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center pt-section-gap px-margin-mobile md:px-margin-desktop pixel-pattern overflow-hidden">
      <div className="absolute inset-0 hero-glow -z-10" />

      <div className="text-center max-w-4xl z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-surface-container rounded-full border border-outline-variant/30 mb-stack-md">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-code-sm font-code-sm text-primary uppercase tracking-widest">
            {h.badge}
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-headline-xl text-headline-xl text-on-background mb-stack-md">
          {h.headline1}{" "}
          <span className="bg-gradient-to-r from-primary to-tertiary bg-clip-text text-transparent">
            {h.headline2}
          </span>
        </h1>

        {/* Body */}
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-stack-lg max-w-2xl mx-auto">
          {h.body}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-primary-container text-on-primary-container px-10 py-4 rounded-xl text-label-md font-label-md font-bold text-lg hover:shadow-[0_0_20px_rgba(46,91,255,0.4)] transition-all">
            {h.cta1}
          </button>
          <button className="border border-outline px-10 py-4 rounded-xl text-label-md font-label-md font-bold text-lg hover:bg-surface-variant/30 transition-all">
            {h.cta2}
          </button>
        </div>
      </div>

      {/* Hero image */}
      <div className="mt-section-gap w-full max-w-5xl relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-primary to-tertiary rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
        <div className="relative bg-surface-container rounded-xl border border-outline-variant/50 overflow-hidden shadow-2xl">
          <div className="relative w-full h-[400px] md:h-[600px]">
            <Image
              alt={h.imageAlt}
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