"use client";

import { useState } from "react";
import { PROGRAMS, PROGRAMS_INTRO, CONTACT } from "@/lib/content";
import { Reveal, ChapterHead, ArrowLink } from "./primitives";

export default function SpecimenIndex() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="programs" className="relative bg-paper-deep py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <ChapterHead
          numeral="CH. II"
          kicker="The Specimen Index"
          title={PROGRAMS_INTRO.title}
          sub={PROGRAMS_INTRO.sub}
        />

        {/* Banner strip */}
        <Reveal delay={200} className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
          <span className="stamp bg-ink text-[11px] text-paper" style={{ transform: "rotate(-1.5deg)" }}>
            {PROGRAMS_INTRO.banner}
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-mute">
            {PROGRAMS_INTRO.bannerSub}
          </span>
        </Reveal>

        {/* Index rows */}
        <div className="mt-12 border-t border-line">
          {PROGRAMS.map((p, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={p.code} delay={Math.min(i * 50, 300)}>
                <article
                  className={`specimen-row group border-b border-line transition-colors duration-500 ${
                    isOpen ? "is-open bg-paper-card" : "hover:bg-paper-card/60"
                  }`}
                >
                  {/* Row header */}
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="grid w-full grid-cols-[auto_1fr_auto] items-center gap-4 px-2 py-6 text-left md:grid-cols-[56px_120px_1fr_auto_32px] md:gap-7 md:px-4"
                  >
                    <span className="font-mono text-[11px] tracking-[0.2em] text-marigold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="hidden font-mono text-[10px] uppercase tracking-[0.14em] text-ink-mute md:block">
                      {p.code}
                    </span>
                    <span className="min-w-0">
                      <span className="flex flex-wrap items-center gap-x-3 gap-y-1">
                        <span className="font-display text-[1.35rem] font-semibold leading-tight text-ink md:text-2xl">
                          {p.name}
                        </span>
                        <span className="hidden font-mono text-[9px] uppercase tracking-[0.18em] text-clay sm:inline">
                          · {p.badge}
                        </span>
                      </span>
                      <span className="mt-1.5 flex flex-wrap gap-x-4 gap-y-1 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-mute md:hidden">
                        <span>{p.code}</span>
                        {p.meta.map((m) => (
                          <span key={m}>{m}</span>
                        ))}
                      </span>
                    </span>
                    <span className="hidden gap-5 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-mute md:flex">
                      {p.meta.map((m) => (
                        <span key={m}>{m}</span>
                      ))}
                    </span>
                    <span
                      className={`specimen-chevron flex h-8 w-8 items-center justify-center border ${
                        isOpen ? "border-ink bg-ink text-paper" : "border-line text-ink"
                      }`}
                      aria-hidden
                    >
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path
                          d="M6 1v10M1 6h10"
                          stroke="currentColor"
                          strokeWidth="1.4"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  </button>

                  {/* Expandable body */}
                  <div className="specimen-body">
                    <div>
                      <div className="grid grid-cols-1 gap-10 px-4 pb-10 pt-2 md:grid-cols-12 md:gap-8 md:px-4">
                        {/* Description + modules */}
                        <div className="md:col-span-7">
                          <p className="max-w-xl text-[15px] leading-relaxed text-ink-soft">
                            {p.desc}
                          </p>
                          <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.25em] text-ink-mute">
                            What you&apos;ll master
                          </p>
                          <ul className="mt-3 space-y-2.5">
                            {p.modules.map((m, mi) => (
                              <li key={m} className="flex items-baseline gap-3 text-[14.5px] text-ink">
                                <span className="font-mono text-[10px] text-marigold">
                                  {String(mi + 1).padStart(2, "0")}
                                </span>
                                {m}
                              </li>
                            ))}
                          </ul>
                          {/* Tools as pressed tags */}
                          <div className="mt-6 flex flex-wrap gap-2">
                            {p.tools.map((t) => (
                              <span
                                key={t}
                                className="border border-line bg-paper px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-ink-soft transition-colors hover:border-ink hover:text-ink"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Outcomes ledger */}
                        <div className="md:col-span-5">
                          <div className="border border-line bg-paper p-6">
                            <div className="border-b border-line-soft pb-4">
                              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute">
                                Leads to roles
                              </p>
                              <p className="mt-2 font-display text-lg font-medium leading-snug text-ink">
                                {p.roles}
                              </p>
                            </div>
                            <div className="border-b border-line-soft py-4">
                              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute">
                                Typical pay
                              </p>
                              <p className="mt-1 font-display text-3xl font-semibold text-leaf">
                                {p.pay}
                              </p>
                            </div>
                            <a
                              href={CONTACT.whatsappPrograms}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mt-5 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-ink underline decoration-line underline-offset-4 transition-colors hover:text-leaf hover:decoration-leaf"
                            >
                              Book Free Counselling →
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* Unsure block */}
        <Reveal className="mt-16">
          <div className="relative mx-auto max-w-3xl border border-line bg-paper-card p-8 text-center md:p-12">
            <span className="stamp absolute -top-3 left-1/2 -translate-x-1/2 bg-paper text-[10px] text-clay">
              Free · Career Audit
            </span>
            <h3 className="font-display text-2xl font-semibold text-ink md:text-3xl">
              {PROGRAMS_INTRO.unsureTitle}
            </h3>
            <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-ink-soft">
              {PROGRAMS_INTRO.unsureBody}
            </p>
            <div className="mt-7">
              <ArrowLink
                href={CONTACT.whatsappPrograms}
                external
                className="border border-ink bg-ink px-7 py-3.5 font-mono text-[11px] uppercase tracking-[0.18em] text-paper transition-colors duration-300 hover:bg-transparent hover:text-ink"
              >
                Book Free Counselling
              </ArrowLink>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
