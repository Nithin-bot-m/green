"use client";

import { PLACEMENTS } from "@/lib/content";
import { Reveal } from "./primitives";

export default function Partners() {
  const items = PLACEMENTS.partners;
  const doubled = [...items, ...items];

  return (
    <section aria-label={PLACEMENTS.partnersTitle} className="relative overflow-hidden border-y border-line bg-night py-12 text-night-ink">
      <Reveal className="mx-auto mb-8 max-w-[1400px] px-5 md:px-10">
        <div className="flex items-center gap-4">
          <span className="font-mono text-[10.5px] uppercase tracking-[0.28em] text-marigold">
            ✦ {PLACEMENTS.partnersTitle}
          </span>
          <span className="h-px flex-1 bg-night-line" />
          <span className="font-mono text-[10.5px] tracking-[0.24em] text-night-mute">
            {items.length} Active Hiring Partners
          </span>
        </div>
      </Reveal>

      <div
        className="relative"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <div className="marquee-track items-center gap-0">
          {doubled.map((name, i) => (
            <div key={`${name}-${i}`} className="flex items-center">
              <span className="whitespace-nowrap px-8 font-display text-[clamp(1.7rem,3.2vw,2.8rem)] font-bold tracking-tight text-night-ink/80 transition-colors duration-300 hover:text-white md:px-12">
                {name}
              </span>
              <span className="h-1.5 w-1.5 rotate-45 bg-marigold" aria-hidden />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
