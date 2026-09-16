"use client";

import { useState } from "react";
import Link from "next/link";
import { CONTACT_SECTION, CONTACT, COURSE_OPTIONS, STATUS_OPTIONS, SOCIAL } from "@/lib/content";
import { Reveal, ChapterHead, ArrowLink } from "./primitives";

export default function Desk() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    course: "",
    status: "",
    msg: "",
  });
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hi Greenroots! I'd like to know more about your training programs.\n\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email || "-"}\nInterested Course: ${form.course}\nCurrent Status: ${form.status}\nMessage: ${form.msg || "-"}`
    );
    window.open(`https://wa.me/919549543898?text=${text}`, "_blank");
    setSent(true);
  };

  const inputCls =
    "w-full border-b border-line bg-transparent px-0 py-3 text-[15px] text-ink outline-none transition-colors placeholder:text-ink-mute/70 focus:border-leaf";

  const infoRows = [
    { label: CONTACT_SECTION.infoLabels.phone, value: CONTACT.phoneDisplay, href: CONTACT.phoneHref },
    { label: CONTACT_SECTION.infoLabels.website, value: "grootstechnologies.com", href: "https://grootstechnologies.com" },
    { label: CONTACT_SECTION.infoLabels.address, value: CONTACT.address, href: undefined },
    { label: CONTACT_SECTION.infoLabels.hours, value: CONTACT.hours, href: undefined },
  ];

  return (
    <section id="desk" className="relative bg-paper-deep py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <ChapterHead
          numeral="CH. VII"
          kicker={CONTACT_SECTION.kicker}
          title={CONTACT_SECTION.title}
          sub={CONTACT_SECTION.sub}
        />

        <div className="mt-14 grid grid-cols-1 gap-14 lg:grid-cols-12">
          {/* Info ledger */}
          <div className="lg:col-span-5">
            <Reveal className="border border-line bg-paper-card">
              {infoRows.map((row, i) => (
                <div
                  key={row.label}
                  className={`grid grid-cols-[110px_1fr] gap-4 px-7 py-6 ${
                    i < infoRows.length - 1 ? "border-b border-line-soft" : ""
                  }`}
                >
                  <span className="pt-0.5 font-mono text-[9.5px] uppercase tracking-[0.22em] text-ink-mute">
                    {row.label}
                  </span>
                  {row.href ? (
                    <a
                      href={row.href}
                      target={row.href.startsWith("http") ? "_blank" : undefined}
                      rel={row.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="font-display text-[17px] font-medium leading-snug text-ink underline decoration-line underline-offset-4 transition-colors hover:text-leaf hover:decoration-leaf"
                    >
                      {row.value}
                    </a>
                  ) : (
                    <span className="font-display text-[17px] font-medium leading-snug text-ink">
                      {row.value}
                    </span>
                  )}
                </div>
              ))}
            </Reveal>

            <Reveal delay={150} className="mt-6">
              <ArrowLink
                href={CONTACT.whatsappPrograms}
                external
                className="border border-ink bg-ink w-full justify-center px-6 py-4 font-mono text-[11px] uppercase tracking-[0.18em] text-paper transition-colors duration-300 hover:bg-transparent hover:text-ink"
              >
                {CONTACT_SECTION.whatsappCta}
              </ArrowLink>
            </Reveal>

            {/* Social */}
            <Reveal delay={250} className="mt-10">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink-mute">
                Follow the journal
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {[
                  { name: "LinkedIn", href: SOCIAL.linkedin },
                  { name: "Instagram", href: SOCIAL.instagram },
                  { name: "YouTube", href: SOCIAL.youtube },
                ].map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="u-slide font-mono text-[11px] uppercase tracking-[0.18em] text-ink"
                  >
                    {s.name} ↗
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Enquiry form */}
          <div className="lg:col-span-7">
            <Reveal variant="right" className="border border-line bg-paper-card p-7 md:p-10">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-2xl font-semibold text-ink">
                  {CONTACT_SECTION.formTitle}
                </h3>
                <p className="font-mono text-[9.5px] uppercase tracking-[0.16em] text-ink-mute">
                  {CONTACT_SECTION.formSub}
                </p>
              </div>

              {sent ? (
                <div className="flex flex-col items-center py-16 text-center">
                  <span className="stamp text-[11px] text-leaf">Enquiry Drafted</span>
                  <p className="mt-6 font-display text-2xl font-semibold text-ink">
                    Your enquiry is ready to send.
                  </p>
                  <p className="mt-3 max-w-sm text-[14px] leading-relaxed text-ink-soft">
                    We&apos;ve opened WhatsApp with your details pre-filled. Our team
                    replies with a personalised program recommendation within 4 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={submit} className="mt-9 grid grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2">
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
                    type="email"
                    className={inputCls}
                    placeholder="Email Address"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                  <select
                    required
                    className={`cursor-pointer ${inputCls} ${form.course ? "" : "text-ink-mute/70"}`}
                    value={form.course}
                    onChange={(e) => setForm({ ...form, course: e.target.value })}
                  >
                    <option value="" disabled>
                      Interested Course *
                    </option>
                    {COURSE_OPTIONS.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                  <select
                    required
                    className={`cursor-pointer ${inputCls} sm:col-span-2 ${form.status ? "" : "text-ink-mute/70"}`}
                    value={form.status}
                    onChange={(e) => setForm({ ...form, status: e.target.value })}
                  >
                    <option value="" disabled>
                      Current Status
                    </option>
                    {STATUS_OPTIONS.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                  <textarea
                    rows={3}
                    className={`${inputCls} resize-none sm:col-span-2`}
                    placeholder="Your Message (optional)"
                    value={form.msg}
                    onChange={(e) => setForm({ ...form, msg: e.target.value })}
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
                      <span className="arrow-slide-label">Send an Enquiry</span>
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
