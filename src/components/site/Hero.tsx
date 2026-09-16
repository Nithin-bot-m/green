"use client";

import { useEffect, useState } from "react";
import { HERO, CONTACT } from "@/lib/content";
import { Reveal, Marker, Counter, ArrowLink, RootVine } from "./primitives";

/* [83] Fade Word Cycle */
function WordCycle({ words }: { words: readonly string[] }) {
  const [active, setActive] = useState(0);
  const [leaving, setLeaving] = useState(-1);

  useEffect(() => {
    const t = setInterval(() => {
      setLeaving(active);
      setActive((a) => (a + 1) % words.length);
      setTimeout(() => setLeaving(-1), 600);
    }, 2400);
    return () => clearInterval(t);
  }, [active, words.length]);

  return (
    <span className="word-cycle font-display italic text-leaf">
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
    <section id="top" className="relative overflow-hidden pt-16">
      {/* ruled ledger backdrop */}
      <div className="ledger-lines pointer-events-none absolute inset-0 opacity-60" />

      {/* vertical edge tab */}
      <div className="absolute left-0 top-24 hidden md:block">
        <div className="origin-top-left rotate-90">
          <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-ink-mute">
            {HERO.kicker}
          </span>
        </div>
      </div>

      <div className="relative mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid grid-cols-1 gap-10 pb-16 pt-14 md:pt-20 lg:grid-cols-12 lg:gap-6">
          {/* ── Headline column ── */}
          <div className="lg:col-span-8">
            <Reveal className="mb-8 flex items-center gap-3">
              <span className="inline-flex h-2 w-2 rounded-full bg-leaf" />
              <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-ink-soft md:hidden">
                {HERO.kicker}
              </span>
              <span className="hidden font-mono text-[11px] uppercase tracking-[0.3em] text-ink-soft md:inline">
                Field Journal · {HERO.kicker}
              </span>
              <span className="h-px w-16 bg-line" />
            </Reveal>

            <h1 className="font-display text-[clamp(3rem,8.5vw,7.2rem)] font-black leading-[0.98] tracking-[-0.02em] text-ink">
              <Reveal as="span" className="block" delay={80}>
                {HERO.headlineA}
              </Reveal>
              <Reveal as="span" className="block" delay={200}>
                <Marker leaf className="whitespace-nowrap">
                  Industry
                </Marker>{" "}
                <Marker leaf className="whitespace-nowrap">
                  Actually
                </Marker>
              </Reveal>
              <Reveal as="span" className="block" delay={320}>
                {HERO.headlineB}
              </Reveal>
            </h1>

            <Reveal delay={450} className="mt-8 max-w-xl">
              <p className="text-[15px] leading-relaxed text-ink-soft md:text-lg">
                {HERO.sub}
              </p>
            </Reveal>

            <Reveal delay={560} className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
              <div className="flex items-center gap-3">
                <ArrowLink
                  href="/programs"
                  className="border border-ink bg-ink px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.18em] text-paper transition-colors duration-300 hover:bg-transparent hover:text-ink"
                >
                  {HERO.ctaPrimary}
                </ArrowLink>
                <ArrowLink
                  href={CONTACT.whatsappPrograms}
                  external
                  className="border border-line px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.18em] text-ink transition-colors duration-300 hover:border-ink"
                >
                  {HERO.ctaSecondary}
                </ArrowLink>
              </div>
            </Reveal>

            <Reveal delay={660} className="mt-10 flex items-baseline gap-3 text-ink-soft">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink-mute">
                Tracks in rotation
              </span>
              <span className="h-px w-8 bg-line" />
              <WordCycle words={HERO.techCycle} />
            </Reveal>
          </div>

          {/* ── Specimen tag column ── */}
          <div className="relative lg:col-span-4">
            <Reveal
              variant="right"
              delay={500}
              className="trace relative ml-auto w-full max-w-sm border border-line bg-paper-card p-7 lg:mt-10"
            >
              <div className="absolute -top-3 left-6 bg-paper px-2">
                <span className="stamp text-[10px] text-clay">Field Notes</span>
              </div>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink-mute">
                Built for
              </p>
              <ul className="mt-4 space-y-0">
                {HERO.audiences.map((a, i) => (
                  <li
                    key={a}
                    className="group flex items-baseline justify-between border-b border-line-soft py-3 last:border-0"
                  >
                    <span className="font-display text-lg font-medium text-ink transition-transform duration-300 group-hover:translate-x-1.5">
                      {a}
                    </span>
                    <span className="font-mono text-[10px] text-marigold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* root vine drawing beside the card */}
            <RootVine
              className="absolute -bottom-24 left-2 hidden h-52 w-28 text-leaf lg:block"
              flip
            />
          </div>
        </div>

        {/* ── Ledger stats row ── */}
        <Reveal delay={200} className="relative border-t border-line">
          <dl className="grid grid-cols-2 divide-line md:grid-cols-4 md:divide-x">
            {HERO.stats.map((s, i) => (
              <div
                key={s.label}
                className={`px-2 py-7 md:px-8 ${
                  i >= 2 ? "border-t border-line-soft md:border-t-0" : ""
                } ${i % 2 === 1 ? "border-l border-line-soft md:border-l-0" : ""}`}
              >
                <dt className="order-2 mt-2 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute">
                  {s.label}
                </dt>
                <dd className="order-1 font-display text-[clamp(2.2rem,4vw,3.6rem)] font-semibold leading-none text-ink">
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
