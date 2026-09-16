"use client";

import { PLACEMENTS } from "@/lib/content";
import { Reveal, ChapterHead, Counter, RootVine } from "./primitives";

export default function Record() {
  return (
    <section id="record" className="relative py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <ChapterHead
          numeral="CH. III"
          kicker="Placements"
          title={PLACEMENTS.title}
          sub={PLACEMENTS.sub}
        />

        {/* Stats as ledger entries */}
        <div className="mt-14 grid grid-cols-2 border border-line md:grid-cols-4">
          {PLACEMENTS.stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 90}
              className={`px-6 py-8 md:py-10 ${
                i < 3 ? "md:border-r md:border-line" : ""
              } ${i % 2 === 0 ? "border-r border-line md:border-r" : ""} ${
                i >= 2 ? "border-t border-line md:border-t-0" : ""
              }`}
            >
              <p className="font-display text-[clamp(2.4rem,4.5vw,4rem)] font-semibold leading-none text-ink">
                <Counter value={s.num} suffix={s.suffix} />
              </p>
              <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>

        {/* Journey — steps along a drawn root */}
        <div className="mt-24 md:mt-32">
          <Reveal>
            <h3 className="font-display text-[clamp(1.7rem,3.4vw,2.6rem)] font-semibold text-ink">
              {PLACEMENTS.journeyTitle}
            </h3>
          </Reveal>

          <div className="relative mt-12">
            {/* connecting root line (desktop) */}
            <svg
              className="absolute left-0 top-7 hidden h-2 w-full md:block"
              viewBox="0 0 1000 8"
              preserveAspectRatio="none"
              aria-hidden
            >
              <path
                d="M0 4 H1000"
                stroke="var(--color-line)"
                strokeWidth="1.5"
                strokeDasharray="6 6"
              />
            </svg>
            <ol className="grid grid-cols-1 gap-10 md:grid-cols-5 md:gap-6">
              {PLACEMENTS.journey.map((step, i) => (
                <Reveal as="li" key={step.n} delay={i * 110} className="relative">
                  <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-ink bg-paper font-display text-xl font-semibold text-ink">
                    {step.n}
                    <span className="absolute inset-0 rounded-full border border-leaf/0 transition-all duration-500 hover:border-leaf/60" />
                  </div>
                  <h4 className="mt-5 font-display text-xl font-semibold text-ink">
                    {step.title}
                  </h4>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-ink-soft">
                    {step.body}
                  </p>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>

      {/* Root vine transition into partners */}
      <div className="pointer-events-none mx-auto -mt-4 hidden h-40 w-24 text-leaf/70 md:block">
        <RootVine className="h-full w-full" />
      </div>
    </section>
  );
}
