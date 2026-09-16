"use client";

import Link from "next/link";
import { Reveal, MaskReveal } from "./primitives";

/* The Field Index — an editorial directory of every chapter of the site.
   All one-liners are factual strings drawn from the scraped content. */
const INDEX = [
  {
    href: "/programs",
    numeral: "CH. II",
    title: "Programs",
    note: "Eight job-ready tracks · from ₹20,000 · 2–3 months",
  },
  {
    href: "/placements",
    numeral: "CH. III",
    title: "Placements",
    note: "85% placement rate · 60+ graduates placed · 12 hiring partners",
  },
  {
    href: "/crt",
    numeral: "CH. IV",
    title: "CRT for Colleges",
    note: "Campus Recruitment Training — a 4-phase transformation program",
  },
  {
    href: "/study-abroad",
    numeral: "CH. V",
    title: "Study Abroad",
    note: "With SIG Global Edu · 500+ universities · 8 destinations",
  },
  {
    href: "/become-a-trainer",
    numeral: "CH. VI",
    title: "Teach With Us",
    note: "Now inviting trainers & creators · 10+ years industry experience",
  },
  {
    href: "/contact",
    numeral: "CH. VII",
    title: "Contact",
    note: "Manjeera Majestic Commercial, Kukatpally · Mon–Sat 9 AM – 7 PM",
  },
];

export default function Directory() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        {/* Section head */}
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Reveal className="flex items-center gap-4">
              <span className="font-mono text-[11px] tracking-[0.3em] text-marigold">
                INDEX
              </span>
              <span className="h-px w-10 bg-line" />
              <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-ink-mute">
                The Field Index
              </span>
            </Reveal>
            <MaskReveal delay={120}>
              <h2 className="mt-5 font-display text-[clamp(2rem,4.6vw,3.4rem)] font-semibold leading-tight text-ink">
                Every chapter, one page away.
              </h2>
            </MaskReveal>
          </div>
          <Reveal
            delay={200}
            className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute"
          >
            {String(INDEX.length).padStart(2, "0")} entries · pick yours
          </Reveal>
        </div>

        {/* Rows */}
        <div className="mt-12 border-t border-line">
          {INDEX.map((item, i) => (
            <Reveal key={item.href} delay={Math.min(i * 60, 300)}>
              <Link
                href={item.href}
                className="group relative grid grid-cols-[auto_1fr_auto] items-center gap-5 border-b border-line px-2 py-7 transition-colors duration-500 hover:bg-paper-card md:grid-cols-[90px_1fr_auto_56px] md:gap-8 md:px-4 md:py-8"
              >
                <span className="font-mono text-[11px] tracking-[0.2em] text-marigold">
                  {item.numeral}
                </span>
                <span className="min-w-0">
                  <span className="block font-display text-[1.55rem] font-semibold leading-tight text-ink transition-transform duration-500 group-hover:translate-x-2 md:text-3xl">
                    {item.title}
                  </span>
                  <span className="mt-1.5 block font-mono text-[10px] uppercase leading-relaxed tracking-[0.16em] text-ink-mute md:text-[10.5px]">
                    {item.note}
                  </span>
                </span>
                <span className="hidden max-w-xs text-right font-mono text-[9px] uppercase tracking-[0.2em] text-ink-mute opacity-0 transition-all duration-500 group-hover:opacity-100 lg:block">
                  Open chapter →
                </span>
                <span
                  className="flex h-10 w-10 items-center justify-center border border-line text-ink transition-all duration-500 group-hover:border-ink group-hover:bg-ink group-hover:text-paper"
                  aria-hidden
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 12h13m0 0-5.5-5.5M18 12l-5.5 5.5"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-leaf transition-all duration-700 ease-out group-hover:w-full" />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
