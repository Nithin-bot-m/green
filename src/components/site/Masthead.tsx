"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { BRAND, CONTACT } from "@/lib/content";

const PAGES = [
  { href: "/programs", label: "Programs" },
  { href: "/placements", label: "Placements" },
  { href: "/crt", label: "CRT for Colleges" },
  { href: "/study-abroad", label: "Study Abroad" },
  { href: "/become-a-trainer", label: "Teach With Us" },
  { href: "/contact", label: "Contact" },
];

export default function Masthead() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Lock body scroll while the mobile sheet is open */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeSheet = () => setOpen(false);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b border-line bg-paper/96 backdrop-blur-md transition-all duration-300 ${
          scrolled ? "h-16 shadow-sm md:h-18" : "h-18 md:h-20"
        }`}
      >
        <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8 xl:px-10">
          {/* Authentic Brand Identity */}
          <Link
            href="/"
            className="group flex shrink-0 items-center gap-3 transition-transform duration-300 hover:scale-[1.01]"
            aria-label={`${BRAND.fullName} — home`}
          >
            <div className="relative h-9 w-9 shrink-0 transition-transform duration-300 group-hover:scale-105 md:h-10 md:w-10">
              <Image
                src="/assets/logo/greenroots-emblem.webp"
                alt="Greenroots Emblem"
                fill
                sizes="40px"
                className="object-contain"
                priority
              />
            </div>
            <div className="leading-tight shrink-0">
              <span className="block font-display text-[18px] font-black tracking-tight text-ink md:text-[20px]">
                GREEN<span className="text-ember">ROOTS</span>
              </span>
              <span className="block font-mono text-[8px] uppercase tracking-[0.24em] text-ink-mute">
                Training &amp; Placements
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden h-full items-center gap-4 lg:flex xl:gap-6 2xl:gap-7"
            aria-label="Pages"
          >
            {PAGES.map((p) => {
              const active = pathname === p.href;
              return (
                <Link
                  key={p.href}
                  href={p.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative flex h-full shrink-0 items-center whitespace-nowrap px-1 font-mono text-[11px] uppercase tracking-[0.14em] transition-colors duration-200 xl:text-[11.5px] ${
                    active
                      ? "font-bold text-ink"
                      : "text-ink-soft hover:text-ink"
                  }`}
                >
                  {p.label}
                  {/* active tab indicator pill */}
                  <span
                    className={`absolute inset-x-0 bottom-0 h-[2.5px] bg-ember transition-all duration-300 ${
                      active ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
                    }`}
                    aria-hidden
                  />
                </Link>
              );
            })}
          </nav>

          {/* Direct CTA Action Group */}
          <div className="flex shrink-0 items-center gap-3 xl:gap-4">
            <a
              href={CONTACT.phoneHref}
              className="hidden shrink-0 items-center gap-2 whitespace-nowrap font-mono text-[11px] tracking-wider text-ink-soft transition-colors hover:text-ember xl:inline-flex"
            >
              <span
                className="inline-block h-1.5 w-1.5 shrink-0 animate-pulse rounded-full bg-leaf"
                aria-hidden
              />
              <span>{CONTACT.phoneDisplay}</span>
            </a>

            <a
              href={CONTACT.whatsappPrograms}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-md bg-[#ff5b22] px-4 py-2.5 font-mono text-[11px] font-bold uppercase tracking-[0.14em] !text-white shadow-[0_4px_14px_rgba(255,91,34,0.35)] transition-all duration-300 hover:!bg-[#0a2920] hover:shadow-md"
            >
              <span className="!text-white">Free Career Audit</span>
              <span aria-hidden className="!text-white">→</span>
            </a>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              className="flex h-10 w-10 shrink-0 flex-col items-center justify-center gap-1.5 rounded-md border border-line bg-paper-card shadow-sm transition-colors hover:border-ink lg:hidden"
            >
              <span
                className={`h-[1.5px] w-5 bg-ink transition-transform duration-300 ${
                  open ? "translate-y-[4.5px] rotate-45" : ""
                }`}
              />
              <span
                className={`h-[1.5px] w-5 bg-ink transition-opacity duration-300 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`h-[1.5px] w-5 bg-ink transition-transform duration-300 ${
                  open ? "-translate-y-[4.5px] -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div
          className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 flex h-full w-[88%] max-w-md flex-col overflow-y-auto bg-paper shadow-2xl transition-transform duration-500 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex h-20 shrink-0 items-center justify-between border-b border-line px-6">
            <div className="flex items-center gap-3">
              <div className="relative h-8 w-8">
                <Image
                  src="/assets/logo/greenroots-emblem.webp"
                  alt="Greenroots Emblem"
                  fill
                  sizes="32px"
                  className="object-contain"
                />
              </div>
              <span className="font-display text-lg font-black tracking-tight text-ink">
                GREEN<span className="text-marigold">ROOTS</span>
              </span>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="flex h-9 w-9 items-center justify-center rounded-md border border-line text-ink"
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>

          <nav className="flex-1 px-6 pt-4" aria-label="Mobile Navigation">
            {PAGES.map((p, i) => {
              const active = pathname === p.href;
              return (
                <Link
                  key={p.href}
                  href={p.href}
                  onClick={closeSheet}
                  className={`group flex items-baseline justify-between border-b border-line-soft py-4.5 transition-all duration-300 ${
                    open ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0"
                  }`}
                  style={{ transitionDelay: open ? `${100 + i * 40}ms` : "0ms" }}
                >
                  <span
                    className={`font-display text-2xl font-medium leading-tight transition-colors ${
                      active ? "text-marigold" : "text-ink group-hover:text-marigold"
                    }`}
                  >
                    {p.label}
                  </span>
                  <span className="font-mono text-[10px] tracking-[0.25em] text-ink-mute">
                    0{i + 1}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Mobile Footer Contact Details */}
          <div className="shrink-0 space-y-4 border-t border-line px-6 pb-10 pt-6">
            <div className="space-y-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-soft">
              <p>
                <a href={CONTACT.phoneHref} className="hover:text-marigold">
                  {CONTACT.phoneDisplay}
                </a>
              </p>
              <p>
                <a href={CONTACT.emailHref} className="hover:text-marigold">
                  {CONTACT.email}
                </a>
              </p>
              <p className="text-[10px] text-ink-mute">{CONTACT.hours}</p>
            </div>
            <a
              href={CONTACT.whatsappPrograms}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center rounded-md bg-ember px-4 py-3.5 font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-white shadow-md transition-colors hover:bg-night"
            >
              Book Free Career Audit
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
