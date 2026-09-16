"use client";

import { useState } from "react";
import Link from "next/link";
import { TRAINER, CONTACT } from "@/lib/content";
import { Reveal, ChapterHead, Marker, ArrowLink } from "./primitives";

export default function Trainer() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    profile: "",
    exp: "",
    domain: "",
    handle: "",
    about: "",
  });
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hi Greenroots! I'm interested in becoming a trainer.\n\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nProfile: ${form.profile}\nExperience: ${form.exp}\nDomain: ${form.domain}\nHandle: ${form.handle || "-"}\nAbout: ${form.about || "-"}`
    );
    window.open(`https://wa.me/919549543898?text=${text}`, "_blank");
    setSent(true);
  };

  const inputCls =
    "w-full border-b border-line bg-transparent px-0 py-3 text-[15px] text-ink outline-none transition-colors placeholder:text-ink-mute/70 focus:border-leaf";

  return (
    <section id="teach" className="relative py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <ChapterHead
          numeral="CH. VI"
          kicker={TRAINER.kicker}
          title={
            <>
              Teach. Grow.{" "}
              <em className="font-display italic text-leaf">Earn More.</em>
            </>
          }
          sub={TRAINER.intro}
        />

        {/* Trainer stats */}
        <Reveal delay={200} className="mt-12 flex flex-wrap gap-px border border-line bg-line">
          {TRAINER.heroStats.map((s) => (
            <div key={s.label} className="min-w-[140px] flex-1 bg-paper px-5 py-6">
              <p className="font-display text-2xl font-semibold text-ink md:text-3xl">
                {s.num}
              </p>
              <p className="mt-1.5 font-mono text-[9.5px] uppercase tracking-[0.2em] text-ink-mute">
                {s.label}
              </p>
            </div>
          ))}
        </Reveal>

        {/* 3 profiles */}
        <div className="mt-24">
          <ChapterHead numeral="VI·2" kicker="Who We're Looking For" title={TRAINER.profilesTitle} sub={TRAINER.profilesSub} />
          <div className="mt-12 grid grid-cols-1 gap-px border border-line bg-line md:grid-cols-3">
            {TRAINER.profiles.map((p, i) => (
              <Reveal key={p.title} delay={i * 110} className="group bg-paper p-8 transition-colors duration-500 hover:bg-paper-card">
                <span className="font-mono text-[11px] tracking-[0.2em] text-marigold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h4 className="mt-4 font-display text-[1.45rem] font-semibold leading-snug text-ink">
                  {p.title}
                </h4>
                <p className="mt-3 text-[13.5px] leading-relaxed text-ink-soft">
                  {p.body}
                </p>
                <p className="mt-6 font-mono text-[9.5px] uppercase tracking-[0.2em] text-leaf">
                  {p.listTitle} ↓
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Why teach — 6 entries */}
        <div className="mt-24">
          <ChapterHead numeral="VI·3" kicker="The Greenroots Advantage" title={TRAINER.whyTitle} sub={TRAINER.whySub} />
          <div className="mt-10 grid grid-cols-1 gap-x-12 md:grid-cols-2">
            {TRAINER.why.map((w, i) => (
              <Reveal key={w.title} delay={(i % 2) * 100} className="border-t border-line py-7">
                <div className="flex items-baseline gap-5">
                  <span className="font-mono text-[10px] text-marigold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h4 className="font-display text-xl font-semibold text-ink">
                      {w.title}
                    </h4>
                    <p className="mt-2 text-[13.5px] leading-relaxed text-ink-soft">
                      {w.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Roles */}
        <div className="mt-24">
          <ChapterHead numeral="VI·4" kicker="Your Role" title={TRAINER.rolesTitle} sub={TRAINER.rolesSub} />
          <div className="mt-10 grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {TRAINER.roles.map((r, i) => (
              <Reveal key={r.n} delay={(i % 3) * 80} className="group bg-paper p-7 transition-colors duration-500 hover:bg-paper-card">
                <div className="flex items-baseline justify-between">
                  <span className="font-display text-4xl font-black text-line transition-colors duration-500 group-hover:text-leaf">
                    {r.n}
                  </span>
                </div>
                <h4 className="mt-4 font-display text-lg font-semibold leading-snug text-ink">
                  {r.title}
                </h4>
                <p className="mt-2.5 text-[13px] leading-relaxed text-ink-soft">
                  {r.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Income ledger */}
        <div className="mt-24">
          <ChapterHead
            numeral="VI·5"
            kicker="Income Potential"
            title={
              <>
                Double. Triple. <Marker>Your Income.</Marker>
              </>
            }
            sub={TRAINER.incomeSub}
          />
          <div className="mt-12 space-y-6">
            {TRAINER.incomeScenarios.map((s, i) => (
              <Reveal key={s.profile} delay={i * 110}>
                <div className="grid grid-cols-1 items-center gap-6 border border-line bg-paper-card p-7 md:grid-cols-12 md:gap-4 md:p-8">
                  <div className="md:col-span-3">
                    <p className="font-mono text-[9.5px] uppercase tracking-[0.2em] text-ink-mute">
                      Profile
                    </p>
                    <p className="mt-1.5 font-display text-xl font-semibold text-ink">
                      {s.profile}
                    </p>
                    <p className="mt-2 font-mono text-[10.5px] text-ink-mute">
                      {s.current}
                    </p>
                  </div>
                  <div className="hidden font-display text-3xl text-ink-mute md:col-span-1 md:block">
                    +
                  </div>
                  <div className="md:col-span-4">
                    <p className="font-mono text-[9.5px] uppercase tracking-[0.2em] text-ink-mute">
                      With Greenroots
                    </p>
                    <p className="mt-1.5 font-mono text-[13px] text-leaf">{s.add}</p>
                  </div>
                  <div className="md:col-span-2">
                    <p className="font-display text-[2.6rem] font-black leading-none text-ink md:text-4xl">
                      {s.total}
                    </p>
                  </div>
                  <div className="md:col-span-2 md:text-right">
                    <span className="stamp inline-block text-[9px] text-clay">
                      {s.note}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <p className="mt-5 font-mono text-[10px] leading-relaxed tracking-[0.06em] text-ink-mute">
              {TRAINER.incomeNote}
            </p>
          </Reveal>
        </div>

        {/* FAQ accordion */}
        <div className="mt-24">
          <ChapterHead numeral="VI·6" kicker="Common Questions" title={TRAINER.faqTitle} />
          <div className="mt-10 border-t border-line">
            {TRAINER.faqs.map((f, i) => {
              const isOpen = openFaq === i;
              return (
                <Reveal key={f.q} delay={i * 40} className="border-b border-line">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="group flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className="flex items-baseline gap-5">
                      <span className="font-mono text-[10px] text-marigold">
                        Q{i + 1}
                      </span>
                      <span
                        className={`font-display text-lg font-semibold transition-colors md:text-xl ${
                          isOpen ? "text-leaf" : "text-ink group-hover:text-leaf"
                        }`}
                      >
                        {f.q}
                      </span>
                    </span>
                    <span
                      className={`shrink-0 text-2xl font-light transition-transform duration-500 ${
                        isOpen ? "rotate-45 text-leaf" : "text-ink-mute"
                      }`}
                      aria-hidden
                    >
                      +
                    </span>
                  </button>
                  <div
                    className="grid transition-[grid-template-rows] duration-500"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-3xl pb-7 pl-10 text-[14px] leading-relaxed text-ink-soft">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Process + application form */}
        <div className="mt-24 grid grid-cols-1 gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h3 className="font-display text-[clamp(1.7rem,3vw,2.4rem)] font-semibold leading-tight text-ink">
              {TRAINER.applyTitle}
            </h3>
            <Reveal delay={150} className="mt-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-marigold">
                {TRAINER.afterTitle}
              </p>
              <p className="mt-3 text-[14px] leading-relaxed text-ink-soft">
                {TRAINER.afterSub}
              </p>
            </Reveal>
            <ol className="mt-8 space-y-0 border-t border-line">
              {TRAINER.process.map((p, i) => (
                <Reveal as="li" key={p.n} delay={i * 80} className="flex gap-6 border-b border-line py-5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ink font-mono text-[11px] text-ink">
                    {p.n}
                  </span>
                  <div>
                    <h5 className="font-display text-[17px] font-semibold text-ink">
                      {p.title}
                    </h5>
                    <p className="mt-1 text-[13px] leading-relaxed text-ink-soft">
                      {p.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ol>
            <Reveal delay={200} className="mt-8">
              <p className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-ink-mute">
                Questions?{" "}
                <a
                  href={CONTACT.whatsappTrainer}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-leaf underline decoration-line underline-offset-4 hover:decoration-leaf"
                >
                  WhatsApp us directly → {CONTACT.phoneDisplay}
                </a>
              </p>
            </Reveal>
          </div>

          {/* Application form */}
          <div className="lg:col-span-7">
            <Reveal variant="right" className="border border-line bg-paper-card p-7 md:p-10">
              <div className="flex items-center justify-between">
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-marigold">
                  Trainer Application
                </p>
                <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-ink-mute">
                  {TRAINER.formNote}
                </span>
              </div>

              {sent ? (
                <div className="flex flex-col items-center py-14 text-center">
                  <span className="stamp text-[11px] text-leaf">Application Drafted</span>
                  <p className="mt-6 font-display text-2xl font-semibold text-ink">
                    We review every application personally.
                  </p>
                  <p className="mt-3 max-w-sm text-[14px] leading-relaxed text-ink-soft">
                    Your details are ready in WhatsApp — press send and our team will
                    reach out within 48 hours to schedule a 20-minute discovery call.
                  </p>
                </div>
              ) : (
                <form onSubmit={submit} className="mt-8 grid grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2">
                  <input
                    required
                    className={inputCls}
                    placeholder="Full Name *"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                  <input
                    required
                    type="tel"
                    className={inputCls}
                    placeholder="Phone Number *"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  />
                  <input
                    required
                    type="email"
                    className={inputCls}
                    placeholder="Email Address *"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                  <select
                    required
                    className={`cursor-pointer ${inputCls} ${form.profile ? "" : "text-ink-mute/70"}`}
                    value={form.profile}
                    onChange={(e) => setForm({ ...form, profile: e.target.value })}
                  >
                    <option value="" disabled>
                      I Am A *
                    </option>
                    {TRAINER.profileOptions.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                  <select
                    required
                    className={`cursor-pointer ${inputCls} ${form.exp ? "" : "text-ink-mute/70"}`}
                    value={form.exp}
                    onChange={(e) => setForm({ ...form, exp: e.target.value })}
                  >
                    <option value="" disabled>
                      Years of Experience *
                    </option>
                    {TRAINER.expOptions.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                  <input
                    required
                    className={inputCls}
                    placeholder="Your Domain / Area of Expertise *"
                    value={form.domain}
                    onChange={(e) => setForm({ ...form, domain: e.target.value })}
                  />
                  <input
                    className={`${inputCls} sm:col-span-2`}
                    placeholder="LinkedIn / YouTube / Instagram Handle"
                    value={form.handle}
                    onChange={(e) => setForm({ ...form, handle: e.target.value })}
                  />
                  <textarea
                    rows={3}
                    className={`${inputCls} resize-none sm:col-span-2`}
                    placeholder="Tell Us About Yourself"
                    value={form.about}
                    onChange={(e) => setForm({ ...form, about: e.target.value })}
                  />
                  <div className="sm:col-span-2">
                    <p className="mb-5 font-mono text-[9.5px] leading-relaxed tracking-[0.1em] text-ink-mute">
                      By submitting, I agree to be contacted by Greenroots and to the{" "}
                      <Link
                        href="/privacy"
                        className="underline decoration-line underline-offset-2 transition-colors hover:text-leaf hover:decoration-leaf"
                      >
                        Privacy Policy
                      </Link>
                      .
                    </p>
                    <button
                      type="submit"
                      className="arrow-slide group inline-flex border border-ink bg-ink px-7 py-3.5 font-mono text-[11px] uppercase tracking-[0.18em] text-paper transition-colors duration-300 hover:bg-transparent hover:text-ink"
                    >
                      <span className="arrow-slide-label">Apply to Join Us</span>
                      <span className="arrow-slide-icon" aria-hidden>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                          <path d="M4 12h15m0 0-6-6m6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </button>
                  </div>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
