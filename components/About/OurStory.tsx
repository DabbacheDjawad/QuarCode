import Image from "next/image";

export default function OurStory() {
  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        {/* Text column */}
        <div className="md:col-span-8 flex flex-col justify-center">
          <h2 className="font-headline-md text-headline-md mb-6">
            Our Story
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mb-6">
            Born from a shared vision in Algiers, Quarcode was founded by
            engineers who recognized a gap between standard enterprise IT and
            the specific, high-velocity needs of the Algerian tech ecosystem.
            We didn&apos;t want to just build software; we wanted to establish a
            benchmark for engineering excellence that proves Algerian talent
            can compete on any global stage.
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Since our inception, we have scaled from a boutique consulting
            group into a full-cycle product development partner, helping
            local businesses and government entities transform through
            robust, scalable, and secure digital infrastructure.
          </p>
        </div>

        {/* Image card */}
        <div className="md:col-span-4 h-full min-h-[400px] rounded-xl overflow-hidden relative group">
          {/* Gradient overlay fades bottom of image into background */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />

          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2Ps5hiBggsxKjZ9nkPCal9enQ1x1fPPWmQ7hCLa9SCJRb9MBbRiUfoSohdQtlo_p3LRaMEdPgd_-5WINA_hnYfn8zbhooEZfqhI-zdheOu2RjjNUl6GXTrma7OkGZKAG-iJsPLoy6gFJ17RiP_d0YYoz8Hv1dnF-hbcS1Za2pOUgTmXQalW-SO8glBw8nhbm2TzJJ1gwb3KW90mf58OIdYmPovEAwW_k7_Jn3-16ID-gAgnEzRVw0GRw6GHVtfd18qLq7q3pHLgy4"
            alt="Modern office space in Algiers with sleek glass partitions reflecting blue and purple neon lights"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Caption overlay */}
          <div className="absolute bottom-6 left-6 z-20">
            <div className="font-headline-sm text-headline-sm font-bold">
              Est. 2021
            </div>
            <div className="font-label-md text-label-md text-primary">
              Headquartered in Algiers
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}