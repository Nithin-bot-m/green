"use client";

import Image from "next/image";
import { WHY } from "@/lib/content";
import { Reveal, Marker, ChapterHead } from "./primitives";

export default function Ledger() {
  return (
    <section id="ledger" className="relative py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Sticky chapter intro + Media Block */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <ChapterHead
                numeral="CH. I"
                kicker={WHY.kicker}
                title={
                  <>
                    Not just training.{" "}
                    <em className="font-display italic text-marigold">
                      Transformation.
                    </em>
                  </>
                }
              />
              <Reveal delay={250}>
                <p className="mt-6 max-w-md text-[15.5px] leading-relaxed text-ink-soft md:text-base">
                  {WHY.intro}
                </p>
              </Reveal>

              {/* Editorial Media Card */}
              <Reveal delay={350} className="mt-8 hidden lg:block">
                <div className="group relative overflow-hidden rounded-xl border border-line bg-paper-card p-3 shadow-md transition-all duration-500 hover:shadow-xl">
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg bg-night-deep">
                    <Image
                      src="/assets/images/data-insights.webp"
                      alt="Hands-on Project Training"
                      fill
                      sizes="(max-width: 1024px) 100vw, 420px"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-marigold">
                        Hands-On Rigor
                      </span>
                      <p className="mt-0.5 font-display text-sm font-medium">
                        Production Projects From Week One
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Method Note */}
              <Reveal delay={420} className="mt-8 hidden lg:block">
                <div className="relative border-l-2 border-leaf pl-5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink-mute">
                    Curriculum Mapping
                  </p>
                  <p className="mt-2 font-display text-lg font-semibold leading-snug text-ink">
                    {WHY.tracksTitle}
                  </p>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-ink-soft">
                    {WHY.tracksBody}
                  </p>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Ledger entries */}
          <div className="lg:col-span-7">
            <ol className="border-t border-line">
              {WHY.items.map((item, i) => (
                <Reveal
                  as="li"
                  key={item.n}
                  delay={i * 60}
                  className="group relative border-b border-line transition-colors hover:bg-paper-deep/30"
                >
                  <div className="grid grid-cols-[auto_1fr] items-start gap-5 py-8 transition-all duration-300 md:grid-cols-[65px_1fr] md:gap-7 md:py-9">
                    <span className="pt-1 font-mono text-sm font-semibold tracking-[0.18em] text-marigold">
                      {item.n}
                    </span>
                    <div>
                      <h3 className="font-display text-2xl font-bold leading-tight text-ink transition-transform duration-300 group-hover:translate-x-1.5 md:text-[1.65rem]">
                        {item.title}
                      </h3>
                      <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-ink-soft">
                        {item.body}
                      </p>
                    </div>
                  </div>
                  {/* Bottom indicator line */}
                  <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-marigold transition-all duration-500 ease-out group-hover:w-full" />
                </Reveal>
              ))}
            </ol>

            {/* Mobile Method Note */}
            <Reveal delay={200} className="mt-10 lg:hidden">
              <div className="relative border-l-2 border-leaf pl-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink-mute">
                  Curriculum Mapping
                </p>
                <p className="mt-2 font-display text-lg font-semibold leading-snug text-ink">
                  {WHY.tracksTitle}
                </p>
                <p className="mt-2 text-[13.5px] leading-relaxed text-ink-soft">
                  {WHY.tracksBody}
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Closing editorial quote */}
        <Reveal className="mt-20 md:mt-28">
          <div className="rounded-2xl border border-line bg-paper-card p-8 text-center shadow-sm md:p-14">
            <p className="mx-auto max-w-3xl font-display text-[clamp(1.4rem,3vw,2.2rem)] font-medium leading-snug text-ink">
              Every module is benchmarked to what TCS, Infosys, Accenture, Deloitte,
              and top GCCs are <Marker className="font-semibold text-ink">actually hiring for</Marker> — not textbook
              theory.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
