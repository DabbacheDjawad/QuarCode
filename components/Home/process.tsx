"use client";

const phases = [
  {
    num: "PHASE 01",
    title: "Discovery",
    desc: "We map your technical landscape, constraints, and goals in a structured kick-off sprint.",
  },
  {
    num: "PHASE 02",
    title: "Architecture",
    desc: "Systems design, API contracts, and data models — agreed before a line of code is written.",
  },
  {
    num: "PHASE 03",
    title: "Build",
    desc: "Two-week sprints with weekly demos. You see progress, not promises.",
  },
  {
    num: "PHASE 04",
    title: "Launch & Scale",
    desc: "Deployment, monitoring setup, handoff docs, and ongoing retainer options.",
  },
] as const;

export default function Process() {
  return (
    <div
      className="py-[70px] px-10 border-t border-b border-white/[0.06]"
      style={{ background: "#0e0f1a" }}
    >
      <div className="max-w-[1280px] mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-3.5 mb-12">
          <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#4f6eff]">
            // how we work
          </span>
          <div className="h-px flex-1 bg-white/[0.07]" />
        </div>

        {/* Steps */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 rounded-[14px] overflow-hidden border border-white/[0.07]"
          style={{ gap: "1px", background: "rgba(255,255,255,0.07)" }}
        >
          {phases.map((phase) => (
            <div
              key={phase.num}
              className="px-6 py-7 transition-colors duration-200 hover:bg-[#13141f]"
              style={{ background: "#07080f" }}
            >
              <div className="font-mono text-[10px] tracking-[0.1em] text-[#4b4c6a] mb-3">
                {phase.num}
              </div>
              <div className="text-[14px] font-bold text-[#f0f1ff] mb-2">
                {phase.title}
              </div>
              <p className="text-[12.5px] text-[#8889a8] leading-[1.6]">
                {phase.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}