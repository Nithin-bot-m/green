"use client";

import Link from "next/link";
import { PLACEMENTS } from "@/lib/content";
import { Reveal, Stars } from "./primitives";

export default function FieldNotes({ limit }: { limit?: number }) {
  const total = PLACEMENTS.reviews.length;
  const shown = limit ? PLACEMENTS.reviews.slice(0, limit) : PLACEMENTS.reviews;

  return (
    <section className="relative bg-paper-deep/60 py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Reveal className="flex items-center gap-4">
              <span className="font-mono text-[11px] font-semibold tracking-[0.25em] text-marigold">
                PROOF OF TRANSFORMATION
              </span>
              <span className="h-px w-10 bg-line" />
              <span className="font-mono text-[10.5px] uppercase tracking-[0.25em] text-ink-mute">
                Graduate Notes
              </span>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="mt-4 font-display text-[clamp(2.1rem,4.6vw,3.5rem)] font-bold leading-tight text-ink">
                {PLACEMENTS.reviewsTitle}
              </h2>
            </Reveal>
          </div>
          {limit && limit < total ? (
            <Reveal delay={200}>
              <Link
                href="/placements"
                className="inline-flex items-center gap-2 rounded-md border border-line bg-paper px-4 py-2.5 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-ink shadow-xs transition-all hover:border-marigold hover:text-marigold"
              >
                <span>Read All {total} Stories</span>
                <span>→</span>
              </Link>
            </Reveal>
          ) : (
            <Reveal
              delay={200}
              className="rounded-full bg-paper px-3.5 py-1.5 font-mono text-[10.5px] uppercase tracking-[0.18em] text-ink-mute shadow-xs"
            >
              {total} Verified Graduate Stories
            </Reveal>
          )}
        </div>

        {/* Testimonial Cards Grid */}
        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {shown.map((r, i) => (
            <Reveal
              key={r.name}
              delay={(i % 3) * 100}
              className="flex"
            >
              <figure className="relative flex w-full flex-col justify-between rounded-2xl border border-line bg-paper-card p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:border-marigold/40 hover:shadow-[0_16px_40px_rgb(0,0,0,0.08)]">
                <div>
                  <div className="flex items-center justify-between gap-2 border-b border-line-soft pb-4">
                    <Stars n={r.stars} />
                    <span className="rounded-full bg-leaf/10 px-2.5 py-0.5 font-mono text-[9.5px] font-semibold uppercase tracking-[0.12em] text-leaf">
                      ✓ {r.placed}
                    </span>
                  </div>

                  <blockquote className="mt-5 text-[15px] leading-relaxed text-ink-soft">
                    &ldquo;{r.quote}&rdquo;
                  </blockquote>
                </div>

                <figcaption className="mt-6 flex items-center gap-3.5 border-t border-line-soft pt-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-marigold/10 font-mono text-xs font-bold text-marigold">
                    {r.initials}
                  </div>
                  <div className="min-w-0">
                    <p className="font-display text-[16px] font-bold text-ink">
                      {r.name}
                    </p>
                    <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-ink-mute">
                      {r.role}
                    </p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
