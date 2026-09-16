"use client";

import { CONTACT, HERO } from "@/lib/content";
import { Reveal, ArrowLink } from "./primitives";

/* Closing band — every page ends at the same desk.
   All strings reused from the scraped content (free career audit,
   talk to a counsellor, reply window, opening hours). */
export default function CtaBand() {
  return (
    <section className="relative overflow-hidden border-t border-line bg-ink py-16 text-paper md:py-24">
      {/* faint ruled lines, inverted */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        aria-hidden
        style={{
          backgroundImage:
            "repeating-linear-gradient(to bottom, transparent 0, transparent 35px, #e9e4d2 35px, #e9e4d2 36px)",
        }}
      />
      <div className="relative mx-auto grid max-w-[1400px] grid-cols-1 items-end gap-12 px-5 md:px-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Reveal className="flex items-center gap-4">
            <span className="font-mono text-[11px] tracking-[0.3em] text-marigold">
              FREE · CAREER AUDIT
            </span>
            <span className="h-px w-10 bg-night-line" />
          </Reveal>
          <Reveal delay={120}>
            <h2 className="mt-6 font-display text-[clamp(2.1rem,4.6vw,3.6rem)] font-semibold leading-[1.05] tracking-tight">
              {HERO.ctaSecondary.split(" ").slice(0, -1).join(" ")}{" "}
              <em className="italic text-marigold">
                {HERO.ctaSecondary.split(" ").slice(-1)}.
              </em>
            </h2>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-5 max-w-xl text-[14.5px] leading-relaxed text-night-mute">
              We assess your background, strengths, and market fit — then
              recommend the exact track that maximises your placement odds.
              Free counselling, reply within 4 hours.
            </p>
          </Reveal>
        </div>

        <Reveal delay={300} className="lg:col-span-5">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center lg:justify-end">
            <ArrowLink
              href={CONTACT.whatsappPrograms}
              external
              className="border border-paper bg-paper px-7 py-4 font-mono text-[11px] uppercase tracking-[0.18em] text-ink transition-colors duration-300 hover:bg-transparent hover:text-paper"
            >
              Book Free Counselling
            </ArrowLink>
            <a
              href={CONTACT.phoneHref}
              className="group inline-flex items-baseline gap-3 px-1 py-2"
            >
              <span
                className="inline-block h-1.5 w-1.5 self-center rounded-full bg-leaf"
                aria-hidden
              />
              <span className="font-display text-xl font-medium text-paper transition-colors group-hover:text-marigold">
                {CONTACT.phoneDisplay}
              </span>
            </a>
          </div>
          <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.2em] text-night-mute lg:text-right">
            {CONTACT.hours}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
