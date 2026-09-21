"use client";

import Link from "next/link";
import Image from "next/image";
import { FOOTER, BRAND, CONTACT, SOCIAL } from "@/lib/content";
import { Reveal, ArrowLink } from "./primitives";

export default function Footer() {
  return (
    <footer className="relative border-t border-line bg-paper-deep/80 text-ink">
      <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Brand & Address Column */}
          <div className="lg:col-span-5">
            <Reveal>
              <Link href="/" className="group inline-flex items-center gap-3.5">
                <div className="relative h-11 w-11 shrink-0 drop-shadow-sm transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src="/assets/logo/greenroots-emblem.webp"
                    alt="Greenroots Emblem"
                    fill
                    sizes="44px"
                    className="object-contain"
                  />
                </div>
                <div className="leading-none">
                  <p className="font-display text-2xl font-black tracking-tight text-ink md:text-3xl">
                    GREEN<span className="text-marigold">ROOTS</span>
                  </p>
                  <span className="mt-1 block font-mono text-[9px] uppercase tracking-[0.28em] text-ink-mute">
                    Training &amp; Placements
                  </span>
                </div>
              </Link>

              <p className="mt-6 max-w-md text-[14.5px] leading-relaxed text-ink-soft">
                {BRAND.footerBlurb}
              </p>

              <div className="mt-6 border-l-2 border-marigold/60 pl-4">
                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-ink-mute">
                  Headquarters
                </p>
                <p className="mt-1 text-[13.5px] leading-relaxed text-ink">
                  {CONTACT.address}
                </p>
                <p className="mt-1.5 font-mono text-[11px] text-marigold">
                  {CONTACT.hours}
                </p>
              </div>

              {/* Social Channels */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
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
                    className="rounded border border-line bg-paper px-3 py-1.5 font-mono text-[10.5px] uppercase tracking-[0.14em] text-ink transition-all hover:border-marigold hover:text-marigold"
                  >
                    {s.name} ↗
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Programs Navigation */}
          <div className="sm:col-span-1 md:col-span-3 lg:col-span-3">
            <Reveal delay={120}>
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-marigold">
                Specialized Programs
              </p>
              <ul className="mt-5 space-y-2.5">
                {FOOTER.programs.map((p) => (
                  <li key={p}>
                    <Link
                      href="/programs"
                      className="u-slide text-[14px] text-ink-soft transition-colors hover:text-ink"
                    >
                      {p}
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Quick Links & Services */}
          <div className="sm:col-span-1 md:col-span-4 lg:col-span-4">
            <Reveal delay={200}>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-marigold">
                    Offerings
                  </p>
                  <ul className="mt-5 space-y-2.5">
                    {FOOTER.services.map((s) => (
                      <li key={s} className="text-[13.5px] text-ink-soft">
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-marigold">
                    Portals
                  </p>
                  <ul className="mt-5 space-y-2.5">
                    <li>
                      <Link href="/placements" className="u-slide text-[13.5px] text-ink-soft hover:text-ink">
                        Placement Record
                      </Link>
                    </li>
                    <li>
                      <Link href="/crt" className="u-slide text-[13.5px] text-ink-soft hover:text-ink">
                        CRT for Colleges
                      </Link>
                    </li>
                    <li>
                      <Link href="/study-abroad" className="u-slide text-[13.5px] text-ink-soft hover:text-ink">
                        Study Abroad (SIG)
                      </Link>
                    </li>
                    <li>
                      <Link href="/become-a-trainer" className="u-slide text-[13.5px] text-ink-soft hover:text-ink">
                        Teach With Us
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact" className="u-slide text-[13.5px] text-ink-soft hover:text-ink">
                        Contact Desk
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Direct Counselor Box */}
              <div className="mt-8 rounded-lg border border-line bg-paper p-5 shadow-sm">
                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-ink-mute">
                  Direct Counselor Helpline
                </p>
                <div className="mt-2 flex flex-wrap items-center justify-between gap-3">
                  <a
                    href={CONTACT.phoneHref}
                    className="font-display text-lg font-semibold text-ink transition-colors hover:text-marigold"
                  >
                    {CONTACT.phoneDisplay}
                  </a>
                  <a
                    href={CONTACT.whatsappPrograms}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded bg-ink px-3 py-1.5 font-mono text-[9.5px] uppercase tracking-[0.16em] text-paper transition-colors hover:bg-marigold"
                  >
                    WhatsApp ↗
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Bottom Colophon Bar */}
        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-line pt-8 md:flex-row md:items-center">
          <p className="font-mono text-[10.5px] tracking-[0.08em] text-ink-mute">
            {BRAND.copyright}
          </p>
          <div className="flex flex-wrap items-center gap-6 font-mono text-[10.5px] uppercase tracking-[0.14em] text-ink-mute">
            <Link href="/privacy" className="u-slide transition-colors hover:text-ink">
              Privacy Policy (DPDP Act 2023)
            </Link>
            <span className="hidden h-3 w-px bg-line sm:inline" />
            <span className="text-ink-soft">
              Kukatpally · Opposite JNTU · Hyderabad
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
