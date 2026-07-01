import Image from "next/image";

type Leader = {
  name: string;
  role: string;
  src: string;
  alt: string;
};

const leaders: Leader[] = [
  {
    name: "Amine B.",
    role: "Chief Architect",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuANlbLguVualJU4QR6BIXNDxmru67NTDUjdtIPdIvUR-slvcVBwaRm6wdhM08SpoZxq0drWaVmgHVPT8Nw5sTi0UEtsv0Qi8aRfhOY58--oIe1i4GTd1scpyWtYAmMIOK9HEfcJt1QGbGorCkgwBUA-0ctRwsWelby5sPSlBswzJeu561n4VN3vEXCdD1lSlGzOkoyrZYN_WHlnvCKvau9B9TnNhfkl8wbTQ6Jz75s4hqFCJChWn0VKIksqJlKIQ1opGGuRHF1otrXf",
    alt: "Amine B., Chief Architect — professional portrait in a modern technology hub",
  },
  {
    name: "Sara K.",
    role: "Product Strategy",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuArcEZ3s6HnzTRDY8cz_YeJoNUWzkTnI_YR7hey3RYI5RODBY5WOzoZgpqzJ8t3T--RfRpxILDSHfFM3IzBtlfFffTnWS-xQHyGbDdf4f-e_lel63syYAsnQNB-_KXNew4rNOrmRST2sYb2qV-mpjQoX6H-I6gRe_y7lFqtdwTkBULPO0BmtDzbCTNBVRGwbWnW0Hydcdzc2M1Nn0YRd633h9k7AluDpy07fHQ43e3Ad7ppK7AyDex0VTU9pJsUTREPLxxYRUfAYhZV",
    alt: "Sara K., Product Strategy Lead — professional portrait in a high-tech office setting",
  },
];

const stats = [
  { value: "45+", label: "Active Engineers" },
  { value: "120+", label: "Projects Delivered" },
];

export default function Leadership() {
  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto overflow-hidden">
      <div className="bg-surface-container rounded-3xl p-margin-mobile md:p-stack-lg flex flex-col md:flex-row items-center gap-stack-lg border border-outline-variant/20">

        {/* Left — copy + stat counters */}
        <div className="w-full md:w-1/2">
          <h2 className="font-headline-md text-headline-md mb-6">
            The Minds Behind Quarcode
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mb-8">
            Our leadership team consists of seasoned software architects,
            product strategists, and business consultants with decades of
            combined experience in both local and international tech sectors.
            We believe in leading by example, which is why our directors are
            still hands-on with our most complex technical challenges.
          </p>

          <div className="grid grid-cols-2 gap-stack-md">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="font-headline-sm text-headline-sm text-primary mb-1">
                  {stat.value}
                </div>
                <div className="font-label-md text-label-md text-on-surface-variant">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — staggered portrait grid */}
        <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
          {/* First column offset down to create a staggered look */}
          <div className="space-y-4 pt-12">
            <PortraitCard leader={leaders[0]} />
          </div>
          {/* Second column flush to the top */}
          <div className="space-y-4">
            <PortraitCard leader={leaders[1]} />
          </div>
        </div>
      </div>
    </section>
  );
}

function PortraitCard({ leader }: { leader: Leader }) {
  return (
    <div className="rounded-xl overflow-hidden aspect-[4/5] relative group">
      <Image
        src={leader.src}
        alt={leader.alt}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
      />
      {/* Caption — slides in from bottom on hover via opacity */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
        <div className="font-label-md text-label-md font-bold">{leader.name}</div>
        <div className="text-xs opacity-70">{leader.role}</div>
      </div>
    </div>
  );
}