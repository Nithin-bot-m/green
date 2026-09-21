"use client";

import Image from "next/image";
import { PLACEMENTS, CONTACT } from "@/lib/content";
import { Reveal, ChapterHead, Counter, ArrowLink } from "./primitives";

export default function Record() {
  return (
    <section id="record" className="relative py-20 md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <ChapterHead
          numeral="CH. III"
          kicker="Placements & Outcomes"
          title={PLACEMENTS.title}
          sub={PLACEMENTS.sub}
        />

        {/* Stats Grid */}
        <div className="mt-14 grid grid-cols-2 border border-line bg-paper shadow-sm md:grid-cols-4">
          {PLACEMENTS.stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 80}
              className={`p-6 md:p-8 ${
                i < 3 ? "md:border-r md:border-line" : ""
              } ${i % 2 === 0 ? "border-r border-line md:border-r" : ""} ${
                i >= 2 ? "border-t border-line md:border-t-0" : ""
              }`}
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-ember">
                Metric {String(i + 1).padStart(2, "0")}
              </p>
              <p className="mt-3 font-display text-[clamp(2.4rem,4.5vw,3.8rem)] font-bold leading-none text-ink">
                <Counter value={s.num} suffix={s.suffix} />
              </p>
              <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-mute">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>

        {/* Visual Storytelling: Student Engineer & Career Transformation */}
        <Reveal delay={150} className="mt-16 overflow-hidden border border-line bg-paper">
          <div className="grid grid-cols-1 items-center lg:grid-cols-12">
            <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-line lg:col-span-6 lg:aspect-auto lg:h-full lg:border-b-0 lg:border-r">
              <Image
                src="/assets/images/student-engineer.webp"
                alt="Greenroots Engineering Trainee Working on Enterprise Cloud Labs"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-night/80 via-night/20 to-transparent lg:bg-gradient-to-r" />
              <div className="absolute bottom-6 left-6 right-6 text-paper">
                <span className="stamp bg-leaf text-[10px] font-semibold uppercase tracking-wider text-paper">
                  Verified Trainee Outcome
                </span>
                <p className="mt-2 font-display text-xl font-bold text-paper">
                  From Foundational Coding to Enterprise Cloud & Data Roles
                </p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-night-mute">
                  Hands-on project capstone · Production deployments · Hyderabad
                </p>
              </div>
            </div>

            <div className="p-8 lg:col-span-6 lg:p-12">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-marigold">
                The Placement Formula
              </span>
              <h3 className="mt-3 font-display text-2xl font-bold text-ink sm:text-3xl">
                We Bridge the Gap Between Academic Theory and Enterprise Hiring Mandates.
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
                Hiring managers at top IT firms and GCCs reject over 90% of resumes because of generic projects, buzzword stuffing, and lack of real production experience. Greenroots transforms candidates by building ATS-audited portfolios, simulating rigorous technical rounds, and directly mapping candidates to open requirements.
              </p>

              <div className="mt-6 space-y-3.5 border-t border-line-soft pt-6 font-mono text-[11.5px] uppercase tracking-wider text-ink">
                <div className="flex items-center gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-leaf/15 text-leaf font-bold">✓</span>
                  <span>ATS-Optimised Resume & Naukri / LinkedIn Overhaul</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-leaf/15 text-leaf font-bold">✓</span>
                  <span>10+ Real-World Capstones on GitHub</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-leaf/15 text-leaf font-bold">✓</span>
                  <span>3+ Rigorous Mock Interviews with Working Architects</span>
                </div>
              </div>

              <div className="mt-8">
                <ArrowLink
                  href={CONTACT.whatsappPlacements}
                  external
                  className="border border-ink bg-ink px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.16em] text-paper transition-all hover:bg-ember hover:border-ember"
                >
                  Talk to Placement Officer
                </ArrowLink>
              </div>
            </div>
          </div>
        </Reveal>

        {/* 5-Stage Placement Journey */}
        <div className="mt-24 md:mt-32">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-ember">
                  Systematic Progression
                </span>
                <h3 className="mt-2 font-display text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold text-ink">
                  {PLACEMENTS.journeyTitle}
                </h3>
              </div>
              <p className="max-w-md font-mono text-[11px] uppercase tracking-wider text-ink-mute">
                Every graduate completes these 5 rigorous milestones before their resume is forwarded to our hiring partners.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {PLACEMENTS.journey.map((step, i) => (
              <Reveal
                key={step.n}
                delay={i * 90}
                className="group relative border border-line bg-paper p-6 transition-all duration-300 hover:-translate-y-1 hover:border-ink hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/20 bg-paper-deep font-display text-lg font-bold text-ink transition-colors group-hover:border-ember group-hover:bg-ember group-hover:text-paper">
                    {step.n}
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-ink-mute">
                    Stage {i + 1}
                  </span>
                </div>

                <h4 className="mt-6 font-display text-lg font-bold leading-snug text-ink transition-colors group-hover:text-ember">
                  {step.title}
                </h4>

                <p className="mt-3 text-[13.5px] leading-relaxed text-ink-soft">
                  {step.body}
                </p>

                <div className="mt-5 border-t border-line-soft pt-3">
                  <span className="font-mono text-[9.5px] uppercase tracking-wider text-ink-mute">
                    Mandatory Checkpoint
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Before / After Transformation Comparison Matrix */}
        <Reveal delay={200} className="mt-24 overflow-hidden border border-line bg-paper p-8 md:p-12">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <span className="stamp bg-marigold text-[10px] font-semibold uppercase tracking-wider text-night">
                The Greenroots Impact
              </span>
              <h3 className="mt-4 font-display text-2xl font-bold text-ink md:text-3xl">
                Before Greenroots vs. After Greenroots
              </h3>
              <p className="mt-3 text-[14.5px] leading-relaxed text-ink-soft">
                See what changes when you transition from generic textbook learning to an intensive, industry-mentored engineering environment.
              </p>

              <div className="relative mt-6 aspect-[4/3] w-full overflow-hidden border border-line shadow-sm">
                <Image
                  src="/assets/images/before-after.webp"
                  alt="Career Transformation Comparison Matrix"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="space-y-4 lg:col-span-7">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {/* Traditional State */}
                <div className="border border-clay/30 bg-paper-deep/60 p-5">
                  <p className="font-mono text-[10.5px] font-bold uppercase tracking-wider text-clay">
                    ✕ Conventional College / Institute
                  </p>
                  <ul className="mt-3 space-y-2 text-[13px] text-ink-soft">
                    <li>• Theory-heavy slide presentations</li>
                    <li>• Outdated syllabus (Java 8, legacy tools)</li>
                    <li>• Zero ATS resume guidance</li>
                    <li>• Generic group projects easily caught by interviewers</li>
                    <li>• No post-course mock evaluations</li>
                  </ul>
                </div>

                {/* Greenroots State */}
                <div className="border border-leaf/40 bg-leaf/5 p-5">
                  <p className="font-mono text-[10.5px] font-bold uppercase tracking-wider text-leaf">
                    ✓ The Greenroots Transformation
                  </p>
                  <ul className="mt-3 space-y-2 text-[13px] text-ink">
                    <li>• 100% hands-on project labs & production code</li>
                    <li>• Tools matching 2026 enterprise mandates (Power BI, Docker, K8s, Playwright)</li>
                    <li>• ATS-tested resume + Naukri / LinkedIn optimization</li>
                    <li>• Individual GitHub capstone with live dashboards</li>
                    <li>• Continuous mock interviews until placement</li>
                  </ul>
                </div>
              </div>

              {/* Placement Policy Note */}
              <div className="border-t border-line-soft pt-6 text-[13.5px] text-ink-soft">
                <p>
                  <strong className="font-semibold text-ink">Transparent Placement Policy:</strong> We do not make false guarantees. We provide structured placement assistance, mock evaluations, direct client drives, and interview preparation. Placement service charges apply only upon successful job offer letter receipt.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
