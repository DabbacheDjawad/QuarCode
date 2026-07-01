import Icon from "@/components/Icon";

const socialIcons = [
  { icon: "share", label: "LinkedIn" },
  { icon: "terminal", label: "GitHub" },
  { icon: "hub", label: "Network" },
];

export default function ContactSidebar() {
  return (
    <div className="lg:col-span-5 space-y-gutter">
      {/* Info card */}
      <div className="bg-surface-container-lowest border border-outline-variant/20 p-8 rounded-xl space-y-stack-lg">
        {/* Office address */}
        <div className="flex gap-4">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
            <Icon name="location_on" />
          </div>
          <div>
            <h4 className="text-headline-sm font-headline-sm text-on-surface mb-2">
              Our Office
            </h4>
            <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
              Ali Mendjeli, UV 14
              <br />
              Constantine, 25019
              <br />
              Algeria
            </p>
          </div>
        </div>

        {/* Email contact */}
        <div className="flex gap-4">
          <div className="w-12 h-12 rounded-lg bg-tertiary/10 flex items-center justify-center text-tertiary shrink-0">
            <Icon name="alternate_email" />
          </div>
          <div>
            <h4 className="text-headline-sm font-headline-sm text-on-surface mb-2">
              Electronic Mail
            </h4>
            <a
              href="mailto:hello@quarcode.dz"
              className="block text-body-md font-body-md text-on-surface-variant hover:text-primary transition-colors"
            >
              hello@quarcode.dz
            </a>
            <a
              href="mailto:careers@quarcode.dz"
              className="block text-body-md font-body-md text-on-surface-variant hover:text-primary transition-colors"
            >
              careers@quarcode.dz
            </a>
          </div>
        </div>

        {/* Social links */}
        <div>
          <h4 className="text-label-md font-label-md text-on-surface-variant uppercase tracking-widest mb-4">
            Connect with us
          </h4>
          <div className="flex gap-4">
            {socialIcons.map((social) => (
              <a
                key={social.label}
                href="#"
                aria-label={social.label}
                className="w-10 h-10 rounded-full border border-outline-variant/30 flex items-center justify-center text-on-surface hover:bg-primary hover:text-on-primary hover:border-primary transition-all duration-300"
              >
                <Icon name={social.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Real map */}
      <OfficeMap />
    </div>
  );
}

/**
 * Embeds a real Google Maps tile centred on Ali Mendjeli, Constantine
 * (36.2567° N, 6.5789° E) with a branded ping marker layered on top.
 *
 * The iframe is pointer-events-none by default so the card hover state
 * doesn't fight with map interactions; clicking the "Open in Maps" button
 * lets users interact with the full map in a new tab.
 */
function OfficeMap() {
  const lat = 36.256694;
  const lng = 6.578917;
  const zoom = 14;

  // Embed URL — no API key required for the basic embed
  const embedSrc = `https://maps.google.com/maps?q=${lat},${lng}&z=${zoom}&output=embed&hl=en`;

  // Link to open full map
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;

  return (
    <div className="relative h-64 rounded-xl overflow-hidden border border-outline-variant/20 group">

      {/* ── Real map iframe ── */}
      <iframe
        src={embedSrc}
        title="Quarcode office location — Ali Mendjeli, Constantine"
        width="100%"
        height="100%"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute inset-0 w-full h-full pointer-events-none grayscale group-hover:grayscale-0 transition-all duration-700 border-0"
        aria-hidden="true"
      />

      {/* ── Dark tint overlay — fades out on hover ── */}
      <div className="absolute inset-0 bg-background/50 group-hover:bg-background/10 transition-all duration-700 pointer-events-none" />

      {/* ── Ping marker — centred over the pin ── */}
      <div
        className="absolute pointer-events-none"
        /*
         * The Google Maps embed places the pin at exactly 50% horizontal and
         * ~46% vertical (it offsets slightly upward for the teardrop shape).
         * We mirror that so our ring sits on the real pin.
         */
        style={{ top: "46%", left: "50%", transform: "translate(-50%, -50%)" }}
      >
        {/* Outer ping ring */}
        <span className="absolute inline-flex h-8 w-8 rounded-full bg-primary/40 animate-ping -translate-x-1/2 -translate-y-1/2" />
        {/* Inner solid dot */}
        <span className="relative inline-flex h-4 w-4 rounded-full bg-primary border-2 border-background shadow-lg shadow-primary/40 -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* ── Location label ── */}
      <div className="absolute bottom-3 left-0 right-0 flex justify-center pointer-events-none">
        <span className="text-label-md font-label-md text-primary bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full border border-primary/30 shadow">
          Ali Mendjeli · Constantine
        </span>
      </div>

      {/* ── "Open in Maps" — only interactive element ── */}
      <a
        href={mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open office location in Google Maps"
        className="absolute top-3 right-3 flex items-center gap-1.5 text-code-sm font-code-sm text-on-surface bg-background/90 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-outline-variant/30 hover:border-primary hover:text-primary transition-all duration-200 shadow"
      >
        <Icon name="open_in_new" className="text-[14px]" />
        Open in Maps
      </a>
    </div>
  );
}