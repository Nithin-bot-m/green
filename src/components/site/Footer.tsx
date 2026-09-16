"use client";

import Link from "next/link";
import { FOOTER, BRAND, CONTACT, SOCIAL } from "@/lib/content";
import { Reveal, ArrowLink } from "./primitives";

export default function Footer() {
  return (
    <footer className="relative border-t border-line bg-paper">
      <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          {/* Brand block */}
          <div className="md:col-span-6">
            <Reveal>
              <Link href="/" className="group inline-block">
                <p className="font-display text-3xl font-black leading-[1.05] tracking-tight text-ink">
                  GREEN ROOTS
                  <span className="mt-1 block font-mono text-[9.5px] font-normal uppercase tracking-[0.34em] text-ink-mute">
                    Training &amp; Placements
                  </span>
                </p>
              </Link>
              <p className="mt-6 max-w-sm text-[13.5px] leading-relaxed text-ink-soft">
                {BRAND.footerBlurb}
              </p>
              <p className="mt-5 font-mono text-[10.5px] uppercase leading-relaxed tracking-[0.14em] text-ink-mute">
                {CONTACT.address}
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                {[
                  { name: "LinkedIn", href: SOCIAL.linkedin },
                  { name: "Instagram", href: SOCIAL.instagram },
                  { name: "YouTube", href: SOCIAL.youtube },
                  { name: "WhatsApp", href: CONTACT.whatsapp },
                ].map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="u-slide font-mono text-[10.5px] uppercase tracking-[0.16em] text-ink"
                  >
                    {s.name} ↗
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Index columns */}
          <div className="md:col-span-3">
            <Reveal delay={180}>
              <p className="font-mono text-[9.5px] uppercase tracking-[0.28em] text-marigold">
                Programs
              </p>
              <ul className="mt-5 space-y-2.5">
                {FOOTER.programs.map((p) => (
                  <li key={p}>
                    <Link
                      href="/programs"
                      className="u-slide text-left text-[13.5px] text-ink-soft transition-colors hover:text-ink"
                    >
                      {p}
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="md:col-span-3">
            <Reveal delay={260}>
              <p className="font-mono text-[9.5px] uppercase tracking-[0.28em] text-marigold">
                Services
              </p>
              <ul className="mt-5 space-y-2.5">
                {FOOTER.services.map((s) => (
                  <li key={s} className="text-[13.5px] text-ink-soft">
                    {s}
                  </li>
                ))}
              </ul>
              <p className="mt-8 font-mono text-[9.5px] uppercase tracking-[0.28em] text-marigold">
                {FOOTER.connectTitle}
              </p>
              <div className="mt-4 space-y-2">
                <a
                  href={CONTACT.phoneHref}
                  className="block font-display text-lg font-medium text-ink hover:text-leaf"
                >
                  {CONTACT.phoneDisplay}
                </a>
                <a
                  href={CONTACT.emailHref}
                  className="block font-mono text-[12px] text-ink-soft hover:text-leaf"
                >
                  {CONTACT.email}
                </a>
              </div>
              <div className="mt-6">
                <ArrowLink
                  href={CONTACT.whatsappPrograms}
                  external
                  className="font-mono text-[11px] uppercase tracking-[0.18em] text-leaf"
                >
                  {FOOTER.cta}
                </ArrowLink>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Bottom rule */}
        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-line pt-7 md:flex-row md:items-center">
          <p className="font-mono text-[10px] tracking-[0.12em] text-ink-mute">
            {BRAND.copyright}
          </p>
          <div className="flex items-center gap-6 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-mute">
            <Link href="/privacy" className="u-slide hover:text-ink">
              Privacy Policy
            </Link>
            <span className="h-3 w-px bg-line" />
            <span>Kukatpally · Hyderabad · {CONTACT.hours.split("·")[0]}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
