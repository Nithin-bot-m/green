"use client";

import { WHY } from "@/lib/content";
import { Reveal, Marker, ChapterHead } from "./primitives";

export default function Ledger() {
  return (
    <section id="ledger" className="relative py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
          {/* Sticky chapter intro */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <ChapterHead
                numeral="CH. I"
                kicker={WHY.kicker}
                title={
                  <>
                    Not just training.{" "}
                    <em className="font-display italic text-leaf">
                      Transformation.
                    </em>
                  </>
                }
              />
              <Reveal delay={300}>
                <p className="mt-6 max-w-md text-[15px] leading-relaxed text-ink-soft md:text-base">
                  {WHY.intro}
                </p>
              </Reveal>
              <Reveal delay={420} className="mt-12 hidden lg:block">
                <div className="relative border-l-2 border-leaf pl-6">
                  <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-ink-mute">
                    Method note
                  </p>
                  <p className="mt-3 font-display text-xl font-medium leading-snug text-ink">
                    {WHY.tracksTitle}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">
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
                  delay={i * 70}
                  className="group relative border-b border-line"
                >
                  <div className="grid grid-cols-[auto_1fr] items-start gap-5 py-8 transition-all duration-500 md:grid-cols-[70px_1fr] md:gap-8 md:py-10">
                    <span className="pt-1 font-mono text-xs tracking-[0.2em] text-marigold">
                      {item.n}
                    </span>
                    <div>
                      <h3 className="font-display text-2xl font-semibold leading-tight text-ink transition-transform duration-500 group-hover:translate-x-2 md:text-[1.7rem]">
                        {item.title}
                      </h3>
                      <p className="mt-3 max-w-xl text-[14.5px] leading-relaxed text-ink-soft">
                        {item.body}
                      </p>
                    </div>
                  </div>
                  {/* leaf tick that grows on hover */}
                  <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-leaf transition-all duration-700 ease-out group-hover:w-full" />
                </Reveal>
              ))}
            </ol>

            <Reveal delay={200} className="mt-10 lg:hidden">
              <div className="relative border-l-2 border-leaf pl-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-ink-mute">
                  Method note
                </p>
                <p className="mt-3 font-display text-xl font-medium leading-snug text-ink">
                  {WHY.tracksTitle}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {WHY.tracksBody}
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Closing marker line */}
        <Reveal className="mt-20 md:mt-28">
          <p className="mx-auto max-w-3xl text-center font-display text-[clamp(1.4rem,3vw,2.2rem)] font-medium leading-snug text-ink">
            Every module is benchmarked to what TCS, Infosys, Accenture, Deloitte,
            and top GCCs are <Marker>actually hiring for</Marker> — not textbook
            theory.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
