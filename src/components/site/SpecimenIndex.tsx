"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { PROGRAMS, PROGRAMS_INTRO, CONTACT } from "@/lib/content";
import { Reveal, ChapterHead, ArrowLink } from "./primitives";

type CategoryKey = "all" | "data" | "cloud" | "qa" | "product";

const CATEGORIES: { key: CategoryKey; label: string; count: number }[] = [
  { key: "all", label: "All Programs", count: 8 },
  { key: "data", label: "Data & BI", count: 3 },
  { key: "cloud", label: "Cloud & DevOps", count: 1 },
  { key: "qa", label: "QA & Testing", count: 2 },
  { key: "product", label: "Product & Strategy", count: 2 },
];

function getCategoryForProgram(code: string): CategoryKey {
  if (code.includes("PBI") || code.includes("DAF") || code.includes("DSP")) return "data";
  if (code.includes("DSO")) return "cloud";
  if (code.includes("QA") || code.includes("TOSCA")) return "qa";
  if (code.includes("BA") || code.includes("AIPM")) return "product";
  return "all";
}

export default function SpecimenIndex() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryKey>("all");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filteredPrograms = useMemo(() => {
    if (selectedCategory === "all") return PROGRAMS;
    return PROGRAMS.filter((p) => getCategoryForProgram(p.code) === selectedCategory);
  }, [selectedCategory]);

  return (
    <section id="programs" className="relative bg-paper-deep py-20 md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <ChapterHead
          numeral="CH. II"
          kicker="The Specimen Index"
          title={PROGRAMS_INTRO.title}
          sub={PROGRAMS_INTRO.sub}
        />

        {/* Feature Hero Card */}
        <Reveal delay={150} className="mt-12 overflow-hidden border border-line bg-paper shadow-sm">
          <div className="grid grid-cols-1 items-center lg:grid-cols-12">
            <div className="p-8 lg:col-span-7 lg:p-12">
              <div className="flex flex-wrap items-center gap-3">
                <span className="stamp bg-ember text-[11px] font-semibold uppercase tracking-wider text-paper">
                  {PROGRAMS_INTRO.banner}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-mute">
                  {PROGRAMS_INTRO.bannerSub}
                </span>
              </div>
              <h3 className="mt-5 font-display text-2xl font-bold text-ink sm:text-3xl lg:text-4xl">
                Industry-Mapped Tech Tracks Built for Real Enterprise Roles
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
                Every curriculum at Greenroots is designed from active hiring mandates across Hyderabad and Bangalore. No outdated syntax. 100% hands-on project labs, real dataset analysis, CI/CD pipelines, and direct mentor code reviews.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-6 border-t border-line-soft pt-6 font-mono text-[11px] uppercase tracking-wider text-ink-soft">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-leaf" />
                  <span>Weekend & Weekday Batches</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-marigold" />
                  <span>Offline Campus + Live Online</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-ember" />
                  <span>100% Placement Assistance</span>
                </div>
              </div>
            </div>

            <div className="relative aspect-[16/10] w-full overflow-hidden border-t border-line lg:col-span-5 lg:aspect-auto lg:h-full lg:border-l lg:border-t-0">
              <Image
                src="/assets/images/hero-data-dashboard.webp"
                alt="Greenroots Data & Tech Analytics Dashboard"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-night/80 via-night/30 to-transparent lg:bg-gradient-to-r" />
              <div className="absolute bottom-6 left-6 right-6 text-paper">
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-marigold">
                  Live Lab Environment
                </p>
                <p className="font-display text-lg font-medium text-paper">
                  Enterprise Tools, Real-World Data & Portfolio Capstones
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Category Filter Tabs */}
        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-b border-line pb-4">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => {
              const active = selectedCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => {
                    setSelectedCategory(cat.key);
                    setOpenIndex(0);
                  }}
                  className={`px-4 py-2 font-mono text-[11px] uppercase tracking-[0.16em] transition-all ${
                    active
                      ? "border border-ink bg-ink text-paper shadow-sm"
                      : "border border-line bg-paper text-ink-soft hover:border-ink hover:text-ink"
                  }`}
                >
                  {cat.label} ({cat.count})
                </button>
              );
            })}
          </div>

          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-mute">
            Showing {filteredPrograms.length} of {PROGRAMS.length} programs
          </p>
        </div>

        {/* Program Cards / Index Rows */}
        <div className="mt-8 space-y-4">
          {filteredPrograms.map((p, i) => {
            const isOpen = openIndex === i;
            const whatsappEnrollLink = `https://wa.me/919989823438?text=${encodeURIComponent(
              `Hi Greenroots, I would like more information and syllabus details for the ${p.name} (${p.code}) track.`
            )}`;

            return (
              <article
                key={p.code}
                className={`group border transition-all duration-300 ${
                  isOpen
                    ? "border-ink/80 bg-paper shadow-md"
                    : "border-line bg-paper hover:border-ink/40 hover:bg-paper-card"
                }`}
              >
                {/* Header row */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="grid w-full grid-cols-[auto_1fr_auto] items-center gap-4 p-5 text-left md:grid-cols-[60px_140px_1fr_auto_40px] md:gap-6 md:p-6"
                >
                  <span className="font-mono text-[12px] font-semibold tracking-wider text-ember">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <span className="hidden font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-ink-mute md:block">
                    {p.code}
                  </span>

                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <h4 className="font-display text-xl font-bold text-ink transition-colors group-hover:text-ember md:text-2xl">
                        {p.name}
                      </h4>
                      <span className="rounded-sm bg-leaf/10 px-2 py-0.5 font-mono text-[9.5px] font-semibold uppercase tracking-wider text-leaf">
                        {p.badge}
                      </span>
                    </div>
                    <p className="mt-1 line-clamp-1 text-[13px] text-ink-soft md:hidden">
                      {p.desc}
                    </p>
                  </div>

                  <div className="hidden flex-wrap items-center gap-3 font-mono text-[10.5px] uppercase tracking-wider text-ink-mute lg:flex">
                    {p.meta.map((m) => (
                      <span key={m} className="border-r border-line pr-3 last:border-0 last:pr-0">
                        {m}
                      </span>
                    ))}
                  </div>

                  <span
                    className={`flex h-9 w-9 items-center justify-center border transition-all ${
                      isOpen
                        ? "border-ink bg-ink text-paper"
                        : "border-line text-ink group-hover:border-ink"
                    }`}
                    aria-hidden
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      className={`transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                    >
                      <path
                        d="M6 1v10M1 6h10"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </button>

                {/* Expanded Details */}
                {isOpen && (
                  <div className="border-t border-line-soft bg-paper-card/40 p-6 md:p-8">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
                      {/* Left: Overview, Modules & Tools */}
                      <div className="lg:col-span-7">
                        <p className="text-[15px] font-medium leading-relaxed text-ink">
                          {p.desc}
                        </p>

                        <div className="mt-6">
                          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink-mute">
                            Core Modules & Learning Outcomes
                          </p>
                          <ul className="mt-3 space-y-2.5">
                            {p.modules.map((m, mi) => (
                              <li key={m} className="flex items-start gap-3 text-[14px] text-ink">
                                <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-ember/15 font-mono text-[9px] font-bold text-ember">
                                  {mi + 1}
                                </span>
                                <span>{m}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="mt-6">
                          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink-mute">
                            Tools & Stack Mastered
                          </p>
                          <div className="mt-2.5 flex flex-wrap gap-2">
                            {p.tools.map((t) => (
                              <span
                                key={t}
                                className="border border-line bg-paper px-3 py-1 font-mono text-[10.5px] uppercase tracking-wider text-ink transition-colors hover:border-ember hover:text-ember"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Right: Career Outcome Box */}
                      <div className="lg:col-span-5">
                        <div className="border border-line bg-paper p-6 shadow-sm">
                          <div>
                            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute">
                              Target Roles in Industry
                            </p>
                            <p className="mt-1.5 font-display text-base font-semibold leading-snug text-ink">
                              {p.roles}
                            </p>
                          </div>

                          <div className="mt-5 border-t border-line-soft pt-4">
                            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute">
                              Typical Starting Compensation
                            </p>
                            <div className="mt-1 flex items-baseline gap-2">
                              <p className="font-display text-3xl font-bold text-leaf">
                                {p.pay}
                              </p>
                              <span className="font-mono text-[10px] uppercase tracking-wider text-ink-mute">
                                / annum
                              </span>
                            </div>
                          </div>

                          <div className="mt-5 border-t border-line-soft pt-4">
                            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute">
                              Program Format
                            </p>
                            <div className="mt-1 flex flex-wrap gap-1.5">
                              {p.meta.map((item) => (
                                <span
                                  key={item}
                                  className="bg-paper-deep px-2 py-0.5 font-mono text-[10px] text-ink-soft"
                                >
                                  {item}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div className="mt-6 border-t border-line-soft pt-5">
                            <a
                              href={whatsappEnrollLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex w-full items-center justify-center gap-2 border border-ink bg-ink py-3.5 font-mono text-[11px] uppercase tracking-[0.16em] text-paper transition-all duration-300 hover:bg-ember hover:border-ember"
                            >
                              <span>Enroll via WhatsApp</span>
                              <span aria-hidden>→</span>
                            </a>
                            <p className="mt-2 text-center font-mono text-[9.5px] uppercase tracking-wider text-ink-mute">
                              Instant syllabus download · No spam
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>

        {/* 1-on-1 Academic Counselling Card */}
        <Reveal className="mt-20">
          <div className="relative overflow-hidden border border-line bg-paper p-8 shadow-sm md:p-12">
            <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-12">
              <div className="flex flex-col items-center text-center md:col-span-4 md:items-start md:text-left">
                <div className="relative h-28 w-28 overflow-hidden rounded-full border-2 border-marigold/60 shadow-md">
                  <Image
                    src="/assets/images/counselor-portrait.webp"
                    alt="Senior Career Counselor at Greenroots"
                    fill
                    sizes="120px"
                    className="object-cover object-top"
                  />
                </div>
                <div className="mt-4">
                  <p className="font-display text-lg font-bold text-ink">
                    Senior Career Advisory Desk
                  </p>
                  <p className="font-mono text-[10.5px] uppercase tracking-wider text-marigold">
                    Kukatpally Center · Hyderabad
                  </p>
                </div>
              </div>

              <div className="md:col-span-8">
                <span className="stamp bg-leaf text-[10px] font-semibold uppercase tracking-wider text-paper">
                  Free 1-on-1 Career Audit
                </span>
                <h3 className="mt-3 font-display text-2xl font-bold text-ink md:text-3xl">
                  {PROGRAMS_INTRO.unsureTitle}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                  {PROGRAMS_INTRO.unsureBody}
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <ArrowLink
                    href={CONTACT.whatsappPrograms}
                    external
                    className="border border-ink bg-ink px-7 py-3.5 font-mono text-[11px] uppercase tracking-[0.18em] text-paper transition-colors duration-300 hover:bg-ember hover:border-ember"
                  >
                    Schedule Free Career Audit
                  </ArrowLink>

                  <a
                    href={CONTACT.phoneHref}
                    className="font-mono text-[11px] uppercase tracking-wider text-ink-mute transition-colors hover:text-ink"
                  >
                    Call: {CONTACT.phoneDisplay}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
