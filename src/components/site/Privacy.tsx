import Link from "next/link";
import { PRIVACY, CONTACT } from "@/lib/content";
import { Reveal, MaskReveal, RootVine } from "./primitives";

export default function Privacy() {
  return (
    <section className="relative overflow-hidden bg-paper">
      {/* faint root vine anchoring the page, same motif as home */}
      <div className="pointer-events-none absolute -right-24 top-40 hidden opacity-[0.07] lg:block">
        <RootVine className="h-[560px] w-[560px] text-leaf" />
      </div>

      <div className="mx-auto max-w-[900px] px-5 py-20 md:px-10 md:py-28">
        {/* Ledger head */}
        <Reveal className="flex items-center gap-4">
          <span className="font-mono text-[11px] tracking-[0.3em] text-marigold">
            APPENDIX
          </span>
          <span className="h-px w-10 bg-line" />
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-ink-mute">
            Legal
          </span>
        </Reveal>

        <MaskReveal delay={120}>
          <h1 className="mt-6 font-display text-[clamp(2.4rem,6vw,4.2rem)] font-semibold leading-[1.02] tracking-tight text-ink">
            {PRIVACY.title}
          </h1>
        </MaskReveal>

        <Reveal delay={200}>
          <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-mute">
            {PRIVACY.updated}
          </p>
          <p className="mt-8 max-w-2xl text-[15.5px] leading-relaxed text-ink-soft md:text-base">
            {PRIVACY.intro}
          </p>
        </Reveal>

        {/* Sections as ledger entries */}
        <div className="mt-16 border-t border-line">
          {PRIVACY.sections.map((s, i) => (
            <Reveal key={s.heading} delay={Math.min(i * 60, 240)}>
              <article className="grid grid-cols-1 gap-4 border-b border-line py-10 md:grid-cols-[170px_1fr] md:gap-10">
                <h2 className="font-display text-[19px] font-semibold leading-snug text-ink md:sticky md:top-28 md:self-start">
                  {s.heading}
                </h2>
                <div>
                  {s.intro && (
                    <p className="mb-4 text-[14.5px] leading-relaxed text-ink-soft">
                      {s.intro}
                    </p>
                  )}
                  {s.bullets.length > 0 && (
                    <ul className="space-y-3">
                      {s.bullets.map((b) => (
                        <li
                          key={b}
                          className="relative pl-6 text-[14.5px] leading-relaxed text-ink-soft"
                        >
                          <span
                            aria-hidden
                            className="absolute left-0 top-[9px] h-1.5 w-1.5 rotate-45 bg-leaf"
                          />
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                  {s.outro && (
                    <p className="mt-4 text-[14.5px] font-medium leading-relaxed text-ink">
                      {s.outro}
                    </p>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Reach-the-desk card */}
        <Reveal delay={150} className="mt-14 border border-line bg-paper-card">
          <div className="px-7 py-8 md:px-10 md:py-10">
            <p className="font-mono text-[9.5px] uppercase tracking-[0.28em] text-marigold">
              Data Requests
            </p>
            <p className="mt-4 font-display text-xl font-medium text-ink md:text-2xl">
              {PRIVACY.reachUs.line}
            </p>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <p className="font-mono text-[9.5px] uppercase tracking-[0.22em] text-ink-mute">
                  Phone
                </p>
                <a
                  href={`tel:${CONTACT.phoneHref}`}
                  className="mt-2 block font-display text-lg font-medium text-ink transition-colors hover:text-leaf"
                >
                  {PRIVACY.reachUs.phone}
                </a>
              </div>
              <div>
                <p className="font-mono text-[9.5px] uppercase tracking-[0.22em] text-ink-mute">
                  Email
                </p>
                <a
                  href={`mailto:${PRIVACY.reachUs.email}`}
                  className="mt-2 block font-mono text-[13px] text-ink-soft transition-colors hover:text-leaf"
                >
                  {PRIVACY.reachUs.email}
                </a>
              </div>
            </div>
            <p className="mt-7 border-t border-line-soft pt-6 text-[13.5px] leading-relaxed text-ink-mute">
              {PRIVACY.reachUs.address}
            </p>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-12 font-mono text-[10.5px] uppercase tracking-[0.18em] text-ink-mute">
            Questions?{" "}
            <Link
              href="/contact"
              className="u-slide text-leaf hover:text-ink"
            >
              Send the desk an enquiry
            </Link>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
