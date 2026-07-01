import Link from "next/link";
import Icon from "@/components/Icon";

export default function AboutCTA() {
  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop text-center relative overflow-hidden">
      {/* Radial bloom glow — purely decorative */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto">
        <h2 className="font-headline-lg text-headline-lg mb-8">
          Ready to Build Something Extraordinary?
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-gutter">
          <Link
            href="/contact"
            className="bg-primary-container text-on-primary-container px-8 py-4 rounded-xl font-label-md text-label-md hover:opacity-90 transition-all active:scale-95 flex items-center gap-2"
          >
            Work with Us
            <Icon name="arrow_forward" />
          </Link>

          <button className="border border-outline-variant text-on-surface px-8 py-4 rounded-xl font-label-md text-label-md hover:bg-surface-variant/30 transition-all">
            View Our Portfolio
          </button>
        </div>
      </div>
    </section>
  );
}