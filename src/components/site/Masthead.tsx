"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
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

/* Pressed-leaf brand mark */
function LeafMark() {
  return (
    <span
      className="flex h-9 w-9 shrink-0 items-center justify-center border border-ink bg-ink text-paper transition-colors duration-300 group-hover:bg-transparent group-hover:text-ink"
      aria-hidden
    >
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 21.5V10.5M12 10.5C12 6 9.2 3.2 4 3.2c0 5.2 2.8 7.3 8 7.3zm0 2.2c0-4.2 2.8-6.6 8-6.6 0 5-2.8 6.9-8 6.9z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export default function Masthead() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
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
        className={`fixed inset-x-0 top-0 z-50 border-b border-line bg-paper/94 backdrop-blur-md transition-all duration-500 ${
          scrolled ? "h-16" : "h-16 md:h-20"
        }`}
      >
        <div className="mx-auto flex h-full max-w-[1400px] items-center justify-between gap-6 px-5 md:px-10">
          {/* Brand */}
          <Link
            href="/"
            className="group flex items-center gap-3"
            aria-label={`${BRAND.fullName} — home`}
          >
            <LeafMark />
            <span className="leading-none">
              <span className="block font-display text-[19px] font-black tracking-tight text-ink">
                GREENROOTS
              </span>
              <span className="mt-1 hidden font-mono text-[8px] uppercase tracking-[0.32em] text-ink-mute sm:block">
                Training&nbsp;&amp;&nbsp;Placements
              </span>
            </span>
          </Link>

          {/* Page index — desktop */}
          <nav
            className="hidden h-full items-stretch gap-7 xl:flex"
            aria-label="Pages"
          >
            {PAGES.map((p) => {
              const active = pathname === p.href;
              return (
                <Link
                  key={p.href}
                  href={p.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative flex items-center font-mono text-[10.5px] uppercase tracking-[0.16em] transition-colors duration-300 ${
                    active ? "text-ink" : "text-ink-soft hover:text-ink"
                  }`}
                >
                  {p.label}
                  {/* active tab marker */}
                  <span
                    className={`absolute inset-x-0 bottom-0 h-[2px] bg-marigold transition-transform duration-500 ${
                      active ? "scale-x-100" : "scale-x-0"
                    }`}
                    aria-hidden
                  />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={CONTACT.phoneHref}
              className="hidden items-center gap-2 font-mono text-[11px] tracking-[0.08em] text-ink-soft transition-colors hover:text-ink xl:inline-flex"
            >
              <span
                className="inline-block h-1.5 w-1.5 rounded-full bg-leaf"
                aria-hidden
              />
              {CONTACT.phoneDisplay}
            </a>
            <a
              href={CONTACT.whatsappPrograms}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden border border-ink bg-ink px-4 py-2.5 font-mono text-[10.5px] uppercase tracking-[0.16em] text-paper transition-colors duration-300 hover:bg-transparent hover:text-ink md:inline-flex"
            >
              Free Career Audit
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] border border-line bg-paper transition-colors hover:border-ink xl:hidden"
            >
              <span
                className={`h-px w-5 bg-ink transition-transform duration-300 ${
                  open ? "translate-y-[3px] rotate-45" : ""
                }`}
              />
              <span
                className={`h-px w-5 bg-ink transition-transform duration-300 ${
                  open ? "-translate-y-[3px] -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>

        {/* Reading-progress vine rides the header's bottom edge */}
        <ProgressVine />
      </header>

      {/* Mobile sheet */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 xl:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div
          className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 flex h-full w-[86%] max-w-md flex-col overflow-y-auto bg-paper shadow-2xl transition-transform duration-500 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex h-16 shrink-0 items-center justify-between border-b border-line px-6">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink-mute">
              Index
            </span>
            <span className="font-mono text-[10px] tracking-[0.3em] text-marigold">
              {String(PAGES.length).padStart(2, "0")} pages
            </span>
          </div>

          <nav className="flex-1 px-6 pt-2" aria-label="Pages">
            {PAGES.map((p, i) => {
              const active = pathname === p.href;
              return (
                <Link
                  key={p.href}
                  href={p.href}
                  onClick={closeSheet}
                  className={`group flex items-baseline justify-between border-b border-line-soft py-5 transition-all duration-500 ${
                    open ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
                  }`}
                  style={{ transitionDelay: open ? `${120 + i * 55}ms` : "0ms" }}
                >
                  <span
                    className={`font-display text-[1.65rem] font-medium leading-tight transition-colors ${
                      active ? "text-marigold" : "text-ink group-hover:text-marigold"
                    }`}
                  >
                    {p.label}
                  </span>
                  <span className="font-mono text-[10px] tracking-[0.25em] text-ink-mute">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Contact block */}
          <div className="shrink-0 space-y-4 px-6 pb-10 pt-8">
            <div className="space-y-2 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft">
              <p>
                <a href={CONTACT.phoneHref} className="u-slide">
                  {CONTACT.phoneDisplay}
                </a>
              </p>
              <p>
                <a href={CONTACT.emailHref} className="u-slide">
                  {CONTACT.email}
                </a>
              </p>
              <p className="text-ink-mute">{CONTACT.hours}</p>
            </div>
            <a
              href={CONTACT.whatsappPrograms}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center border border-ink bg-ink px-4 py-3.5 font-mono text-[11px] uppercase tracking-[0.18em] text-paper transition-colors duration-300 hover:bg-transparent hover:text-ink"
            >
              Free Career Audit
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

/* Ink progress line — sits on the header's bottom edge */
function ProgressVine() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? window.scrollY / total : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="absolute inset-x-0 bottom-0 z-10 h-[2px]" aria-hidden>
      <div
        className="h-full bg-marigold transition-[width] duration-150 ease-out"
        style={{ width: `${progress * 100}%` }}
      />
    </div>
  );
}
