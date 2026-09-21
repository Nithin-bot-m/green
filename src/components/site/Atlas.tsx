"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ABROAD, CONTACT } from "@/lib/content";
import { Reveal, ChapterHead, ArrowLink } from "./primitives";

export default function Atlas() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    destination: "",
    qualification: "",
    intake: "",
    msg: "",
  });
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hi Greenroots & SIG Global Edu! I'd like a free counselling call.\n\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email || "-"}\nDestination: ${form.destination}\nQualification: ${form.qualification}\nTarget intake: ${form.intake}\nNotes: ${form.msg || "-"}`
    );
    window.open(`https://wa.me/919549543898?text=${text}`, "_blank");
    setSent(true);
  };

  const inputCls =
    "w-full border-b border-line bg-transparent px-0 py-3 text-[15px] text-ink outline-none transition-colors placeholder:text-ink-mute/70 focus:border-leaf";

  return (
    <section id="atlas" className="relative bg-paper py-24 text-ink md:py-36">
      {/* faint latitude grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        aria-hidden
        style={{
          backgroundImage:
            "repeating-linear-gradient(to right, transparent 0, transparent 119px, #0b3d2e 119px, #0b3d2e 120px), repeating-linear-gradient(to bottom, transparent 0, transparent 119px, #0b3d2e 119px, #0b3d2e 120px)",
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-5 md:px-10">
        <ChapterHead
          numeral="CH. V"
          kicker={ABROAD.kicker}
          title={
            <>
              Your Career. Your Country.{" "}
              <em className="font-display italic text-marigold">Your Future.</em>
            </>
          }
          sub={ABROAD.intro}
        />

        {/* Hero stats — departure board */}
        <Reveal delay={200} className="mt-12 flex flex-wrap gap-px border border-line bg-line">
          {ABROAD.heroStats.map((s) => (
            <div key={s.label} className="min-w-[120px] flex-1 bg-paper-card px-5 py-6">
              <p className="font-display text-3xl font-semibold text-ink md:text-4xl">
                {s.num}
              </p>
              <p className="mt-1.5 font-mono text-[9.5px] uppercase tracking-[0.2em] text-ink-mute">
                {s.label}
              </p>
            </div>
          ))}
        </Reveal>

        <Reveal delay={280} className="mt-6">
          <p className="font-mono text-[10.5px] uppercase leading-loose tracking-[0.18em] text-marigold">
            {ABROAD.ribbon}
          </p>
        </Reveal>

        {/* SIG partnership */}
        <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal className="border border-line bg-paper-card p-7 md:p-9 shadow-sm">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-ember">
                Our Overseas Education Partner
              </p>
              <h3 className="mt-4 font-display text-2xl font-bold leading-snug md:text-[1.8rem]">
                {ABROAD.partnerTitle}
              </h3>
              <p className="mt-4 text-[14px] leading-relaxed text-ink-soft">
                {ABROAD.partnerBody}
              </p>
              <div className="mt-7 grid grid-cols-2 gap-px border border-line bg-line">
                {ABROAD.partnerStats.map((s) => (
                  <div key={s.label} className="bg-paper px-4 py-4">
                    <p className="font-display text-2xl font-bold text-ink">{s.num}</p>
                    <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.16em] text-ink-mute">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-7 flex items-center gap-4 border-t border-line-soft pt-5">
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 border-marigold/60 shadow-sm">
                  <Image
                    src="/assets/images/counselor-portrait.webp"
                    alt="Overseas Education Counselor"
                    fill
                    sizes="60px"
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <p className="font-display text-sm font-bold text-ink">
                    1-on-1 Visa & University Advisory
                  </p>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-ember">
                    Unit 204, Manjeera Majestic · Kukatpally
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <h3 className="font-display text-[clamp(1.5rem,2.6vw,2.1rem)] font-semibold">
              {ABROAD.roofTitle}
            </h3>
            <Reveal delay={150}>
              <p className="mt-4 max-w-xl text-[14.5px] leading-relaxed text-ink-soft">
                {ABROAD.roofSub}
              </p>
            </Reveal>
            <div className="mt-8 space-y-0 border-t border-line">
              {ABROAD.roof.map((r, i) => (
                <Reveal key={r.title} delay={i * 90} className="grid grid-cols-[44px_1fr] gap-5 border-b border-line py-6">
                  <span className="pt-1 font-mono text-[11px] text-marigold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h4 className="font-display text-xl font-semibold">{r.title}</h4>
                    <p className="mt-2 text-[13.5px] leading-relaxed text-ink-soft">
                      {r.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* Destinations — boarding pass index */}
        <div className="mt-24">
          <ChapterHead numeral="V·2" kicker="Destinations" title={ABROAD.destTitle} sub={ABROAD.destSub} />
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {ABROAD.destinations.map((d, i) => (
              <Reveal key={d.name} delay={(i % 4) * 90}>
                <div className="group h-full border border-line bg-paper-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-ink/40">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-2xl font-black tracking-tight text-ink">
                      {d.flag}
                    </span>
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-marigold">
                      {d.tag}
                    </span>
                  </div>
                  <h4 className="mt-5 font-display text-xl font-semibold">
                    {d.name}
                  </h4>
                  <div className="mt-3 h-px w-full ink-dash opacity-30" />
                  <p className="mt-3 text-[13px] leading-relaxed text-ink-soft">
                    {d.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Six stages */}
        <div className="mt-24">
          <ChapterHead
            numeral="V·3"
            kicker="End-to-end services"
            title={ABROAD.stepsTitle}
            sub={ABROAD.stepsSub}
          />
          <div className="mt-12 grid grid-cols-1 gap-px border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
            {ABROAD.steps.map((s, i) => (
              <Reveal key={s.n} delay={(i % 3) * 90} className="group bg-paper-card p-7 transition-colors duration-500 hover:bg-paper-deep">
                <div className="flex items-baseline justify-between">
                  <span className="font-mono text-[10px] tracking-[0.25em] text-marigold">
                    {s.n}
                  </span>
                  <span className="h-px w-8 bg-line transition-all duration-500 group-hover:w-14 group-hover:bg-marigold" />
                </div>
                <h4 className="mt-4 font-display text-xl font-semibold">
                  {s.title}
                </h4>
                <p className="mt-2.5 text-[13px] leading-relaxed text-ink-soft">
                  {s.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Test prep — ticket stubs */}
        <div className="mt-24">
          <ChapterHead numeral="V·4" kicker="Test preparation" title={ABROAD.testsTitle} sub={ABROAD.testsSub} />
          <div className="mt-10 flex flex-wrap gap-3">
            {ABROAD.tests.map((t, i) => (
              <Reveal key={t.name} delay={i * 60}>
                <div className="group flex items-center gap-4 border border-dashed border-line px-5 py-3.5 transition-all duration-300 hover:border-marigold hover:bg-paper-deep">
                  <span className="font-display text-xl font-bold tracking-wide">
                    {t.name}
                  </span>
                  <span className="h-6 w-px bg-line" />
                  <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-ink-mute">
                    {t.type}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Abroad enquiry form */}
        <Reveal className="mt-24">
          <div className="grid grid-cols-1 border border-line lg:grid-cols-12">
            <div className="bg-paper-deep p-8 md:p-12 lg:col-span-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-marigold">
                Talk to a counsellor
              </p>
              <h3 className="mt-4 font-display text-[clamp(1.7rem,3vw,2.4rem)] font-semibold leading-tight">
                {ABROAD.formTitle}
              </h3>
              <p className="mt-4 text-[14px] leading-relaxed text-ink-soft">
                {ABROAD.formSub}
              </p>
              <div className="mt-8 space-y-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-mute">
                <p>Free Counselling · Reply within 4 hours</p>
                <p>{CONTACT.hours}</p>
              </div>
            </div>
            <div className="p-8 md:p-12 lg:col-span-7">
              {sent ? (
                <div className="flex h-full flex-col items-center justify-center py-10 text-center">
                  <span className="stamp text-[11px] text-marigold">Opening WhatsApp</span>
                  <p className="mt-6 font-display text-2xl font-semibold">
                    Your counselling request is drafted.
                  </p>
                  <p className="mt-3 max-w-sm text-[14px] leading-relaxed text-ink-soft">
                    We&apos;ve opened WhatsApp with your details pre-filled — just press
                    send and the SIG counselling desk will take it from there.
                  </p>
                </div>
              ) : (
                <form onSubmit={submit} className="grid grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2">
                  <div>
                    <input
                      required
                      className={inputCls}
                      placeholder="Full Name *"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <input
                      required
                      type="tel"
                      className={inputCls}
                      placeholder="Phone Number *"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <input
                      type="email"
                      className={inputCls}
                      placeholder="Email Address"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>
                  <div>
                    <select
                      required
                      className={`${inputCls} cursor-pointer ${form.destination ? "" : "text-ink-mute/70"}`}
                      value={form.destination}
                      onChange={(e) => setForm({ ...form, destination: e.target.value })}
                    >
                      <option value="" disabled>
                        Destination Country *
                      </option>
                      {ABROAD.destinationOptions.map((o) => (
                        <option key={o} value={o} className="bg-paper">
                          {o}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <select
                      required
                      className={`${inputCls} cursor-pointer ${form.qualification ? "" : "text-ink-mute/70"}`}
                      value={form.qualification}
                      onChange={(e) => setForm({ ...form, qualification: e.target.value })}
                    >
                      <option value="" disabled>
                        Current Qualification
                      </option>
                      {ABROAD.qualificationOptions.map((o) => (
                        <option key={o} value={o} className="bg-paper">
                          {o}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <select
                      required
                      className={`${inputCls} cursor-pointer ${form.intake ? "" : "text-ink-mute/70"}`}
                      value={form.intake}
                      onChange={(e) => setForm({ ...form, intake: e.target.value })}
                    >
                      <option value="" disabled>
                        Target Intake
                      </option>
                      {ABROAD.intakeOptions.map((o) => (
                        <option key={o} value={o} className="bg-paper">
                          {o}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <textarea
                      rows={2}
                      className={`${inputCls} resize-none`}
                      placeholder="Anything specific we should know? (optional)"
                      value={form.msg}
                      onChange={(e) => setForm({ ...form, msg: e.target.value })}
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <p className="mb-5 font-mono text-[9.5px] leading-relaxed tracking-[0.1em] text-ink-mute">
                      By submitting, I agree to be contacted by Greenroots and SIG Global
                      Edu about overseas education and to the{" "}
                      <Link
                        href="/privacy"
                        className="underline underline-offset-2 transition-colors hover:text-marigold"
                      >
                        Privacy Policy
                      </Link>
                      .
                    </p>
                    <button
                      type="submit"
                      className="arrow-slide group inline-flex items-center gap-3 border border-ink bg-ink px-7 py-3.5 font-mono text-[11px] uppercase tracking-[0.18em] text-paper transition-all duration-300 hover:bg-ember hover:border-ember"
                    >
                      <span className="arrow-slide-label">Request Counselling Call</span>
                      <span className="arrow-slide-icon" aria-hidden>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                          <path d="M4 12h15m0 0-6-6m6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
