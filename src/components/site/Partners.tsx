"use client";

import { PLACEMENTS } from "@/lib/content";
import { Reveal } from "./primitives";

export default function Partners() {
  const items = PLACEMENTS.partners;
  const doubled = [...items, ...items];

  return (
    <section aria-label={PLACEMENTS.partnersTitle} className="relative overflow-hidden border-y border-line bg-ink py-10">
      <Reveal className="mx-auto mb-8 max-w-[1400px] px-5 md:px-10">
        <div className="flex items-center gap-4">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-night-mute">
            {PLACEMENTS.partnersTitle}
          </span>
          <span className="h-px flex-1 bg-night-line" />
          <span className="font-mono text-[10px] tracking-[0.3em] text-marigold">
            {String(items.length)} firms
          </span>
        </div>
      </Reveal>

      <div
        className="relative"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div className="marquee-track items-center gap-0">
          {doubled.map((name, i) => (
            <div key={`${name}-${i}`} className="flex items-center">
              <span className="whitespace-nowrap px-8 font-display text-[clamp(1.6rem,3.2vw,2.8rem)] font-medium text-night-ink/90 transition-colors duration-300 hover:text-paper md:px-12">
                {name}
              </span>
              <span className="h-1.5 w-1.5 rotate-45 bg-marigold/70" aria-hidden />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
