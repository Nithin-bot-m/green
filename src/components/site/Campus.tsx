"use client";

import { useState } from "react";
import { CRT, CONTACT } from "@/lib/content";
import { Reveal, ChapterHead, Marker, ArrowLink } from "./primitives";

/* Interactive 4-phase explorer */
function PhaseExplorer() {
  const [active, setActive] = useState(0);
  const phase = CRT.phases[active];

  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
      {/* Phase selector */}
      <div className="lg:col-span-4">
        <ol className="flex gap-3 overflow-x-auto pb-2 lg:flex-col lg:gap-0 lg:overflow-visible lg:pb-0">
          {CRT.phases.map((p, i) => (
            <li key={p.n} className="shrink-0 lg:w-full">
              <button
                onClick={() => setActive(i)}
                aria-pressed={active === i}
                className={`group flex w-full items-baseline gap-4 border px-4 py-4 text-left transition-all duration-300 lg:border-x-0 lg:border-b lg:border-t-0 lg:px-0 lg:py-5 ${
                  active === i
                    ? "border-ink bg-ink text-paper lg:border-b lg:bg-transparent lg:text-ink"
                    : "border-line text-ink hover:border-ink lg:border-line"
                }`}
              >
                <span
                  className={`font-mono text-[11px] tracking-[0.2em] ${
                    active === i ? "text-marigold" : "text-marigold"
                  }`}
                >
                  {p.n}
                </span>
                <span className="min-w-0">
                  <span
                    className={`block font-mono text-[9px] uppercase tracking-[0.2em] ${
                      active === i ? "text-paper/70 lg:text-ink-mute" : "text-ink-mute"
                    }`}
                  >
                    {p.phase}
                  </span>
                  <span
                    className={`mt-1 block font-display text-lg font-semibold leading-tight ${
                      active === i ? "lg:text-ink" : "text-ink"
                    }`}
                  >
                    {p.title}
                  </span>
                </span>
              </button>
            </li>
          ))}
        </ol>
      </div>

      {/* Phase detail */}
      <div className="lg:col-span-8">
        <div key={active} className="border border-line bg-paper-card p-7 md:p-10">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-marigold">
            {phase.phase}
          </p>
          <h4 className="mt-3 font-display text-[1.7rem] font-semibold leading-tight text-ink md:text-3xl">
            {phase.title}
          </h4>
          <p className="mt-4 max-w-2xl text-[14.5px] leading-relaxed text-ink-soft">
            {phase.body}
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {"items" in phase && phase.items && (
              <ul className="space-y-2.5">
                {phase.items.map((it) => (
                  <li key={it} className="flex items-baseline gap-2.5 text-[14px] text-ink">
                    <span className="mt-[7px] h-1 w-1 shrink-0 rotate-45 bg-leaf" />
                    {it}
                  </li>
                ))}
              </ul>
            )}
            {"groups" in phase && phase.groups && (
              <div className="space-y-6 sm:col-span-2 sm:grid sm:grid-cols-2">
                {phase.groups.map((g) => (
                  <div key={g.title}>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-mute">
                      {g.title}
                    </p>
                    <ul className="mt-3 space-y-2">
                      {g.items.map((it) => (
                        <li key={it} className="flex items-baseline gap-2.5 text-[14px] text-ink">
                          <span className="mt-[7px] h-1 w-1 shrink-0 rotate-45 bg-leaf" />
                          {it}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="mt-8 border-l-2 border-leaf bg-leaf/5 px-5 py-4">
            <p className="font-mono text-[9.5px] uppercase tracking-[0.25em] text-leaf">
              ✦ Outcome
            </p>
            <p className="mt-1.5 font-display text-[15.5px] font-medium text-ink">
              {phase.outcome}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Campus() {
  return (
    <section id="campus" className="relative bg-paper-deep py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <ChapterHead
          numeral="CH. IV"
          kicker={CRT.kicker}
          title={CRT.title}
          sub={CRT.intro}
        />

        {/* Tags + mission */}
        <Reveal delay={200} className="mt-8 flex flex-wrap gap-2.5">
          {CRT.tags.map((t) => (
            <span
              key={t}
              className="border border-line bg-paper px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-soft"
            >
              {t}
            </span>
          ))}
        </Reveal>
        <Reveal delay={280} className="mt-8 max-w-3xl">
          <p className="border-l-2 border-marigold pl-5 font-display text-xl font-medium italic leading-snug text-ink md:text-2xl">
            {CRT.mission}
          </p>
        </Reveal>

        {/* CRT stats strip */}
        <Reveal delay={140} className="mt-12 grid grid-cols-2 border border-line bg-paper md:grid-cols-4">
          {CRT.crtStats.map((s, i) => (
            <div
              key={s.label}
              className={`px-6 py-6 ${i < 3 ? "md:border-r md:border-line" : ""} ${
                i % 2 === 0 ? "border-r border-line md:border-r" : ""
              } ${i >= 2 ? "border-t border-line md:border-t-0" : ""}`}
            >
              <p className="font-display text-3xl font-semibold text-ink md:text-4xl">
                {s.num}
              </p>
              <p className="mt-2 font-mono text-[9.5px] uppercase tracking-[0.2em] text-ink-mute">
                {s.label}
              </p>
            </div>
          ))}
        </Reveal>

        {/* About + academy + Real Campus Video */}
        <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <h3 className="font-display text-[clamp(1.6rem,3vw,2.3rem)] font-semibold leading-tight text-ink">
              {CRT.aboutTitle}
            </h3>
            <Reveal delay={150}>
              <p className="mt-5 text-[15px] leading-relaxed text-ink-soft">
                {CRT.aboutBody}
              </p>
            </Reveal>
            <Reveal delay={250} className="mt-8 border border-line bg-paper p-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-ember">
                {CRT.visionTitle}
              </p>
              <p className="mt-2 font-display text-lg font-medium leading-snug text-ink">
                {CRT.visionBody}
              </p>
            </Reveal>

            {/* Video preview: Live Classroom Training */}
            <div className="mt-8 overflow-hidden border border-line bg-night shadow-md">
              <div className="relative aspect-[16/9] w-full">
                <video
                  src="/assets/video/classroom-training.mp4"
                  poster="/assets/video/classroom-training-poster.webp"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-night/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-paper">
                  <div>
                    <span className="stamp bg-leaf text-[9px] font-semibold uppercase tracking-wider text-paper">
                      Live Campus Session
                    </span>
                    <p className="mt-1 font-mono text-[11px] font-medium text-paper">
                      Technical Training Lab · Kukatpally Center
                    </p>
                  </div>
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-paper/20 backdrop-blur-sm text-paper font-mono text-[10px]">
                    ▶
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <Reveal variant="right" className="h-full border border-line bg-night p-7 text-night-ink md:p-9">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-night-mute">
                {CRT.academyTitle}
              </p>
              <p className="mt-6 font-mono text-[9.5px] uppercase tracking-[0.25em] text-ember">
                {CRT.academySub}
              </p>
              <ul className="mt-3">
                {CRT.academyPrograms.map((p, i) => (
                  <li
                    key={p}
                    className="flex items-baseline justify-between border-b border-night-line py-3 last:border-0"
                  >
                    <span className="font-display text-lg font-medium">{p}</span>
                    <span className="font-mono text-[10px] text-marigold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-[13.5px] leading-relaxed text-night-mute">
                {CRT.academyNote}
              </p>
            </Reveal>
          </div>
        </div>

        {/* 3 Challenges */}
        <div className="mt-24">
          <ChapterHead numeral="IV·2" kicker="The Problem We Solve" title={CRT.challengesTitle} sub={CRT.challengesSub} />
          <div className="mt-12 grid grid-cols-1 gap-px border border-line bg-line md:grid-cols-3">
            {CRT.challenges.map((c, i) => (
              <Reveal key={c.n} delay={i * 110} className="group bg-paper p-7 transition-colors duration-500 hover:bg-paper-card md:p-8">
                <span className="font-display text-5xl font-black text-line transition-colors duration-500 group-hover:text-marigold">
                  {c.n}
                </span>
                <h4 className="mt-5 font-display text-xl font-semibold leading-snug text-ink">
                  {c.title}
                </h4>
                <p className="mt-3 text-[13.5px] leading-relaxed text-ink-soft">
                  {c.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        {/* 4 Phases explorer */}
        <div className="mt-24">
          <ChapterHead numeral="IV·3" kicker="CRT Curriculum" title={CRT.phasesTitle} sub={CRT.phasesSub} />
          <div className="mt-12">
            <PhaseExplorer />
          </div>
        </div>

        {/* Methodology */}
        <div className="mt-24">
          <ChapterHead numeral="IV·4" kicker="How We Train" title={CRT.methodTitle} />
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {CRT.method.map((m, i) => (
              <Reveal key={m.title} delay={i * 90} className="border-t-2 border-ink pt-5">
                <span className="font-mono text-[10px] tracking-[0.2em] text-marigold">
                  M{i + 1}
                </span>
                <h4 className="mt-3 font-display text-lg font-semibold leading-snug text-ink">
                  {m.title}
                </h4>
                <p className="mt-2.5 text-[13.5px] leading-relaxed text-ink-soft">
                  {m.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Advantage */}
        <div className="mt-24">
          <ChapterHead numeral="IV·5" kicker="What Makes Us Different" title={CRT.advantageTitle} />
          <ol className="mt-10 border-t border-line">
            {CRT.advantage.map((a, i) => (
              <Reveal as="li" key={a.n} delay={i * 60} className="group grid grid-cols-[56px_1fr] gap-5 border-b border-line py-7 transition-all md:grid-cols-[80px_340px_1fr] md:gap-8">
                <span className="pt-1 font-mono text-[11px] tracking-[0.2em] text-marigold">
                  {a.n}
                </span>
                <h4 className="font-display text-xl font-semibold leading-snug text-ink md:text-[1.35rem]">
                  {a.title}
                </h4>
                <p className="col-span-2 text-[14px] leading-relaxed text-ink-soft md:col-span-1">
                  {a.body}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>

        {/* Before / After */}
        <div className="mt-24">
          <ChapterHead numeral="IV·6" kicker="Student Journey" title={CRT.beforeAfterTitle} />
          <div className="mt-10 grid grid-cols-1 overflow-hidden border border-line md:grid-cols-2">
            <div className="bg-paper p-8 md:p-10">
              <h4 className="font-display text-2xl font-medium text-ink-mute">
                Before CRT
              </h4>
              <ul className="mt-6 space-y-3.5">
                {CRT.before.map((b) => (
                  <li key={b} className="flex items-baseline gap-3 text-[14px] text-ink-mute">
                    <span className="font-mono text-xs text-clay">×</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative bg-night p-8 text-night-ink md:p-10">
              <h4 className="font-display text-2xl font-medium">
                After CRT
              </h4>
              <ul className="mt-6 space-y-3.5">
                {CRT.after.map((a) => (
                  <li key={a} className="flex items-baseline gap-3 text-[14px] text-night-ink">
                    <span className="font-mono text-xs text-marigold">✦</span>
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Formats */}
        <div className="mt-24">
          <ChapterHead numeral="IV·7" kicker="Program Options" title={CRT.formatsTitle} />
          <div className="mt-10 border-t border-line">
            {CRT.formats.map((f, i) => (
              <Reveal key={f.title} delay={i * 60} className="group grid grid-cols-[auto_1fr] items-baseline gap-6 border-b border-line py-6 transition-all hover:bg-paper-card md:grid-cols-[60px_320px_1fr]">
                <span className="font-mono text-[11px] text-marigold">
                  F{String(i + 1).padStart(2, "0")}
                </span>
                <h4 className="font-display text-xl font-semibold text-ink transition-transform duration-500 group-hover:translate-x-2">
                  {f.title}
                </h4>
                <p className="col-span-2 text-[14px] text-ink-soft md:col-span-1">
                  {f.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Voices */}
        <div className="mt-24">
          <ChapterHead numeral="IV·8" kicker="Student Voices" title={CRT.voicesTitle} />
          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
            {CRT.voices.map((v, i) => (
              <Reveal key={v.initials} delay={i * 110} className="stack-reveal border border-line bg-paper-card p-7">
                <blockquote className="text-[14.5px] leading-relaxed text-ink">
                  &ldquo;{v.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3 border-t border-line-soft pt-4">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-ink font-mono text-[10px] text-ink">
                    {v.initials}
                  </span>
                  <span className="font-mono text-[9.5px] uppercase tracking-[0.16em] text-ink-mute">
                    {v.role}
                  </span>
                </figcaption>
              </Reveal>
            ))}
          </div>
        </div>

        {/* College partnership */}
        <Reveal className="mt-24">
          <div className="grid grid-cols-1 border border-ink bg-paper-card lg:grid-cols-2">
            <div className="p-8 md:p-12">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-marigold">
                For Institutions
              </p>
              <h3 className="mt-4 font-display text-[clamp(1.8rem,3.4vw,2.6rem)] font-semibold leading-tight text-ink">
                Let&apos;s Build <Marker>Careers Together.</Marker>
              </h3>
              <p className="mt-4 max-w-md text-[14.5px] leading-relaxed text-ink-soft">
                {CRT.collabBody}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {CRT.collabLinks.map((l) => (
                  <span key={l} className="border border-line bg-paper px-3 py-1.5 font-mono text-[9.5px] uppercase tracking-[0.12em] text-ink-soft">
                    {l}
                  </span>
                ))}
              </div>
              <div className="mt-8">
                <ArrowLink
                  href="https://wa.me/919989823438?text=Hi%20Greenroots%2C%20we%20are%20interested%20in%20exploring%20a%20Campus%20Recruitment%20Training%20%28CRT%29%20partnership%20for%20our%20college."
                  external
                  className="border border-ink bg-ink px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.18em] text-paper transition-all duration-300 hover:bg-ember hover:border-ember"
                >
                  Partner With Us via WhatsApp
                </ArrowLink>
              </div>
            </div>
            <div className="border-t border-line bg-paper p-8 md:p-12 lg:border-l lg:border-t-0">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink-mute">
                {CRT.benefitsTitle}
              </p>
              <ul className="mt-5 space-y-4">
                {CRT.benefits.map((b, i) => (
                  <li key={b} className="flex items-baseline gap-4">
                    <span className="font-mono text-[10px] text-marigold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[14px] leading-relaxed text-ink">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
