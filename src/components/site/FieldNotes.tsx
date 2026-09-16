"use client";

import Link from "next/link";
import { PLACEMENTS } from "@/lib/content";
import { Reveal, Stars, Tape } from "./primitives";

/* Deterministic per-card rotation for a pinned-notes feel */
const ROTATIONS = ["-1.6deg", "1.2deg", "-0.8deg", "1.8deg", "-1.2deg", "0.9deg"];
const TAPE_POS = [
  "left-1/2 -top-3 -translate-x-1/2 -rotate-3",
  "left-8 -top-3 -rotate-6",
  "right-10 -top-3 rotate-2",
  "left-1/2 -top-3 -translate-x-1/2 rotate-1",
  "right-8 -top-3 rotate-6",
  "left-10 -top-3 -rotate-2",
];

export default function FieldNotes({ limit }: { limit?: number }) {
  const total = PLACEMENTS.reviews.length;
  const shown = limit ? PLACEMENTS.reviews.slice(0, limit) : PLACEMENTS.reviews;

  return (
    <section className="relative bg-paper-deep py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Reveal className="flex items-center gap-4">
              <span className="font-mono text-[11px] tracking-[0.3em] text-marigold">
                ANNEX
              </span>
              <span className="h-px w-10 bg-line" />
              <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-ink-mute">
                Field Notes
              </span>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="mt-5 font-display text-[clamp(2rem,4.6vw,3.4rem)] font-semibold leading-tight text-ink">
                {PLACEMENTS.reviewsTitle}
              </h2>
            </Reveal>
          </div>
          {limit && limit < total ? (
            <Reveal delay={200}>
              <Link
                href="/placements"
                className="u-slide font-mono text-[10.5px] uppercase tracking-[0.22em] text-ink"
              >
                All {total} graduate notes →
              </Link>
            </Reveal>
          ) : (
            <Reveal
              delay={200}
              className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute"
            >
              {String(total)} verified graduate notes
            </Reveal>
          )}
        </div>

        {/* Pinned note wall */}
        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-14">
          {shown.map((r, i) => (
            <Reveal
              key={r.name}
              delay={(i % 3) * 120}
              className={i % 3 === 1 ? "lg:translate-y-8" : ""}
            >
              <figure
                className={`stuck-note relative h-full border border-line bg-paper-card p-7 pt-9 shadow-[0_10px_30px_-18px_rgba(11,61,46,0.35)]`}
                style={{ transform: `rotate(${ROTATIONS[i % ROTATIONS.length]})` }}
              >
                <Tape className={TAPE_POS[i % TAPE_POS.length]} />
                <Stars n={r.stars} />
                <blockquote className="mt-4 text-[14.5px] leading-relaxed text-ink-soft">
                  &ldquo;{r.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-4 border-t border-line-soft pt-5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-ink font-mono text-[11px] tracking-[0.1em] text-ink">
                    {r.initials}
                  </span>
                  <div>
                    <p className="font-display text-[15px] font-semibold text-ink">
                      {r.name}
                    </p>
                    <p className="font-mono text-[9.5px] uppercase tracking-[0.14em] text-ink-mute">
                      {r.role}
                    </p>
                  </div>
                  <span className="stamp ml-auto shrink-0 text-[8.5px] text-leaf">
                    {r.placed}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
