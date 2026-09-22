"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HERO, CONTACT } from "@/lib/content";
import { Reveal, Marker, Counter, ArrowLink } from "./primitives";
import HeroCampus3D from "./HeroCampus3D";

/* Rotating Tech Track Cycle */
function WordCycle({ words }: { words: readonly string[] }) {
  const [active, setActive] = useState(0);
  const [leaving, setLeaving] = useState(-1);

  useEffect(() => {
    const t = setInterval(() => {
      setLeaving(active);
      setActive((a) => (a + 1) % words.length);
      setTimeout(() => setLeaving(-1), 500);
    }, 2400);
    return () => clearInterval(t);
  }, [active, words.length]);

  return (
    <span className="word-cycle font-display font-semibold italic text-marigold">
      {words.map((w, i) => (
        <span
          key={w}
          className={`${i === active ? "is-active" : ""} ${
            i === leaving ? "is-leaving" : ""
          }`}
        >
          {w}
        </span>
      ))}
    </span>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[760px] lg:min-h-[860px] overflow-hidden pt-24 sm:pt-28 md:pt-32 pb-12 flex flex-col justify-between bg-[#051510] text-white">
      {/* ── 3D Campus Background with Students Walking towards College ── */}
      <HeroCampus3D />

      {/* ── Foreground Content Container ── */}
      <div className="relative z-20 mx-auto max-w-[1440px] w-full px-4 sm:px-6 lg:px-8 xl:px-10 flex-1 flex flex-col justify-between">
        <div className="grid grid-cols-1 items-center gap-10 pb-10 pt-4 md:gap-12 md:pt-6 lg:grid-cols-12 lg:gap-8">
          {/* ── Left Column: High-Impact Editorial Copy ── */}
          <div className="lg:col-span-7 xl:col-span-7">
            {/* Live Status Eyebrow */}
            <Reveal className="mb-5 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-black/60 px-3.5 py-1.5 font-mono text-[10.5px] font-semibold uppercase tracking-[0.2em] text-emerald-300 backdrop-blur-md shadow-lg">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                Hyderabad Cohorts Active
              </span>
              <span className="hidden font-mono text-[10.5px] uppercase tracking-[0.22em] text-emerald-100/70 sm:inline drop-shadow-sm">
                · {HERO.kicker}
              </span>
            </Reveal>

            {/* Headline */}
            <h1 className="font-display text-[clamp(2.6rem,5.8vw,5rem)] font-black leading-[1.02] tracking-[-0.025em] text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
              <Reveal as="span" className="block" delay={80}>
                {HERO.headlineA}
              </Reveal>
              <Reveal as="span" className="block" delay={180}>
                <span className="relative text-emerald-300">
                  <Marker className="text-white">
                    Industry Actually
                  </Marker>
                </span>
              </Reveal>
              <Reveal as="span" className="block text-ember" delay={280}>
                {HERO.headlineB}
              </Reveal>
            </h1>

            {/* Subtitle */}
            <Reveal delay={380} className="mt-6 max-w-xl">
              <p className="text-[16px] leading-relaxed text-slate-100 md:text-[17.5px] drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                {HERO.sub}
              </p>
            </Reveal>

            {/* Action Buttons */}
            <Reveal delay={480} className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/programs"
                className="group inline-flex items-center gap-3 rounded-md bg-ember px-7 py-3.5 font-mono text-[11.5px] font-semibold uppercase tracking-[0.16em] text-white shadow-[0_8px_25px_rgba(255,91,34,0.4)] transition-all duration-300 hover:bg-ember-deep hover:shadow-[0_10px_30px_rgba(255,91,34,0.6)] hover:scale-[1.02]"
              >
                <span>{HERO.ctaPrimary}</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <ArrowLink
                href={CONTACT.whatsappPrograms}
                external
                className="rounded-md border border-white/30 bg-black/50 px-6 py-3.5 font-mono text-[11.5px] font-medium uppercase tracking-[0.16em] text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:border-white hover:bg-black/75"
              >
                {HERO.ctaSecondary}
              </ArrowLink>
            </Reveal>

            {/* Rotating Track Indicator */}
            <Reveal delay={580} className="mt-8 flex flex-wrap items-baseline gap-3 border-t border-white/15 pt-4 text-slate-200">
              <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-emerald-300/80">
                Curriculum In Focus
              </span>
              <span className="h-px w-6 bg-white/30" />
              <WordCycle words={HERO.techCycle} />
            </Reveal>
          </div>

          {/* ── Right Column: Unobstructed Panoramic View of Campus & Walkway ── */}
          <div className="hidden lg:block lg:col-span-5 xl:col-span-5 pointer-events-none" />
        </div>

        {/* ── High-Impact Ledger Stats Row (Glassmorphism on Campus Ground) ── */}
        <Reveal delay={200} className="relative mt-8 rounded-2xl border border-white/15 bg-black/65 backdrop-blur-md shadow-2xl overflow-hidden">
          <dl className="grid grid-cols-2 divide-white/10 md:grid-cols-4 md:divide-x">
            {HERO.stats.map((s, i) => (
              <div
                key={s.label}
                className={`px-4 py-6 md:px-8 ${
                  i >= 2 ? "border-t border-white/10 md:border-t-0" : ""
                } ${i % 2 === 1 ? "border-l border-white/10 md:border-l-0" : ""}`}
              >
                <dt className="order-2 mt-2 font-mono text-[10.5px] uppercase tracking-[0.22em] text-slate-300 font-medium">
                  {s.label}
                </dt>
                <dd className="order-1 font-display text-[clamp(2.3rem,4.5vw,3.8rem)] font-bold leading-none text-white drop-shadow-sm">
                  <Counter value={s.num} suffix={s.suffix} />
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
