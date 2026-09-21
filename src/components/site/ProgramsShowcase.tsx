"use client";

import Link from "next/link";
import Image from "next/image";
import { PROGRAMS, CONTACT } from "@/lib/content";
import { Reveal, ChapterHead, ArrowLink } from "./primitives";

export default function ProgramsShowcase() {
  // Select top 4 high-demand flagship tracks for homepage showcase
  const flagships = [
    PROGRAMS[0], // Power BI 60-Day Mastery
    PROGRAMS[5], // DevSecOps Mastery
    PROGRAMS[1], // Senior Business Analyst
    PROGRAMS[3], // AI-Powered Product Management
  ];

  return (
    <section className="relative bg-paper-deep/60 py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <ChapterHead
              numeral="CH. II"
              kicker="Specialised Tracks"
              title={
                <>
                  High-Demand Programs.{" "}
                  <em className="font-display italic text-marigold">
                    Job-Ready in 2–3 Months.
                  </em>
                </>
              }
              sub="Every track is reverse-engineered from enterprise hiring specifications in Hyderabad and global GCCs. Built for freshers, career switchers, and promotion seekers."
            />
          </div>
          <Reveal delay={200}>
            <Link
              href="/programs"
              className="inline-flex items-center gap-2 rounded-md border border-line bg-paper px-5 py-3 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-ink shadow-sm transition-all hover:border-marigold hover:text-marigold"
            >
              <span>Explore All 8 Tracks</span>
              <span>→</span>
            </Link>
          </Reveal>
        </div>

        {/* Featured Program Cards Grid */}
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10">
          {flagships.map((p, i) => (
            <Reveal
              key={p.code}
              delay={i * 80}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-line bg-paper-card p-8 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-marigold/50 hover:shadow-xl md:p-10"
            >
              <div>
                {/* Top Meta Bar */}
                <div className="flex items-center justify-between gap-3 border-b border-line-soft pb-4">
                  <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-marigold">
                    {p.badge}
                  </span>
                  <div className="flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.12em] text-ink-mute">
                    <span>{p.meta[0]}</span>
                    <span>·</span>
                    <span>{p.meta[1]}</span>
                  </div>
                </div>

                {/* Title & Desc */}
                <h3 className="mt-5 font-display text-2xl font-bold leading-tight text-ink transition-colors group-hover:text-marigold md:text-[1.75rem]">
                  {p.name}
                </h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-ink-soft">
                  {p.desc}
                </p>

                {/* Modules Checklist */}
                <div className="mt-6 space-y-2">
                  <p className="font-mono text-[9.5px] uppercase tracking-[0.22em] text-ink-mute">
                    Key Modules
                  </p>
                  <ul className="space-y-1.5">
                    {p.modules.slice(0, 3).map((m) => (
                      <li key={m} className="flex items-baseline gap-2.5 text-[13.5px] text-ink">
                        <span className="h-1.5 w-1.5 rounded-full bg-marigold shrink-0" />
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tool Badges */}
                <div className="mt-6 flex flex-wrap gap-1.5">
                  {p.tools.map((t) => (
                    <span
                      key={t}
                      className="rounded border border-line bg-paper-deep/50 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-ink-soft"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Info Bar: Roles & Pay + CTA */}
              <div className="mt-8 border-t border-line-soft pt-5">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <span className="block font-mono text-[9px] uppercase tracking-[0.2em] text-ink-mute">
                      Typical Target Package
                    </span>
                    <span className="font-display text-2xl font-bold text-leaf">
                      {p.pay}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Link
                      href="/programs"
                      className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-ink underline decoration-line underline-offset-4 transition-colors hover:text-marigold hover:decoration-marigold"
                    >
                      Syllabus
                    </Link>
                    <a
                      href={CONTACT.whatsappPrograms}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded bg-ink px-4 py-2 font-mono text-[10.5px] font-medium uppercase tracking-[0.16em] text-white transition-colors hover:bg-marigold"
                    >
                      Enquire
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Career Advisory Banner */}
        <Reveal delay={250} className="mt-14 rounded-2xl border border-line bg-paper-card p-8 md:p-10">
          <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <span className="font-mono text-[10px] font-medium uppercase tracking-[0.24em] text-marigold">
                Free Diagnostic
              </span>
              <h4 className="mt-2 font-display text-2xl font-bold text-ink md:text-3xl">
                Not sure which track matches your background?
              </h4>
              <p className="mt-2 text-[14.5px] leading-relaxed text-ink-soft">
                Schedule a 1-on-1 career audit. We review your academic or IT background, analyze industry trends, and recommend the track with the highest placement probability for you.
              </p>
            </div>
            <div className="flex justify-start lg:col-span-4 lg:justify-end">
              <a
                href={CONTACT.whatsappPrograms}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-marigold px-6 py-3.5 font-mono text-[11.5px] font-semibold uppercase tracking-[0.16em] text-white shadow-md transition-all hover:bg-marigold-deep"
              >
                <span>Book Free Career Audit</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
