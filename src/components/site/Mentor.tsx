"use client";

import { MENTOR } from "@/lib/content";
import { Reveal, Marker, ChapterHead } from "./primitives";

export default function Mentor() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
          {/* Specimen plate */}
          <div className="lg:col-span-5">
            <Reveal variant="left" className="relative">
              <div className="trace relative border border-line bg-night px-8 py-12 text-night-ink md:px-12 md:py-16">
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-night-mute">
                  — Your Mentor —
                </p>
                <p className="mt-8 font-display text-[clamp(3.4rem,7vw,5.5rem)] font-black leading-none">
                  R
                  <span className="ml-2 align-top font-mono text-[11px] font-normal tracking-[0.2em] text-marigold">
                    10+ YRS
                  </span>
                </p>
                <h3 className="mt-4 font-display text-3xl font-semibold md:text-4xl">
                  Rushi
                </h3>
                <p className="mt-2 font-mono text-[10.5px] uppercase leading-relaxed tracking-[0.18em] text-night-mute">
                  Senior DevOps Architect
                  <br />
                  AWS &amp; GCP Expert · Educator · Mentor
                </p>
                <div className="mt-10 flex items-center gap-3 border-t border-night-line pt-6">
                  <span aria-hidden>🚀</span>
                  <Marker className="font-display text-lg font-medium">
                    {MENTOR.headline}
                  </Marker>
                </div>
                {/* corner root ornament */}
                <svg
                  className="absolute bottom-4 right-4 h-10 w-10 text-night-mute/60"
                  viewBox="0 0 40 40"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M36 4 C30 14 26 16 18 22 C12 26 8 32 4 36 M18 22 C22 28 22 32 28 36"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </Reveal>
          </div>

          {/* Bio + skills */}
          <div className="lg:col-span-7">
            <ChapterHead numeral="CH. III·B" kicker={MENTOR.kicker} title={MENTOR.title} />
            <Reveal delay={250}>
              <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-ink-soft md:text-base">
                {MENTOR.intro}
              </p>
            </Reveal>

            <div className="mt-10 space-y-0 border-t border-line">
              {MENTOR.facts.map((f, i) => (
                <Reveal
                  key={f.title}
                  delay={i * 100}
                  className="group grid grid-cols-[130px_1fr] gap-6 border-b border-line py-6"
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-marigold">
                    {f.title}
                  </span>
                  <p className="text-[14.5px] leading-relaxed text-ink-soft">
                    {f.body}
                  </p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={200} className="mt-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink-mute">
                Working stack
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {MENTOR.skills.map((s) => (
                  <span
                    key={s}
                    className="border border-line bg-paper-card px-3 py-1.5 font-mono text-[10.5px] uppercase tracking-[0.12em] text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-ink"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
