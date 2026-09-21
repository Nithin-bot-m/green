"use client";

import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type CSSProperties,
} from "react";
import Link from "next/link";

/* ── useInView: IntersectionObserver hook ──────────────────── */
export function useInView<T extends HTMLElement>(threshold = 0.1) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setInView(true);
            io.disconnect();
          }
        });
      },
      { threshold, rootMargin: "60px 0px 60px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return { ref, inView };
}

/* ── Reveal: generic scroll reveal wrapper ─────────────────── */
export function Reveal({
  children,
  className = "",
  delay = 0,
  variant = "up",
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: "up" | "left" | "right";
  as?: "div" | "section" | "span" | "li" | "article" | "header";
}) {
  const { ref, inView } = useInView<HTMLDivElement>(0.12);
  const base =
    variant === "left" ? "rv-l" : variant === "right" ? "rv-r" : "rv";
  return (
    <Tag
      ref={ref as never}
      className={`${base} ${inView ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

/* ── MaskReveal: headline clip-path sweep ────────────────────
   NOTE: the observed wrapper must NOT carry the clip-path itself —
   a fully-clipped element reports 0% intersection and never fires. */
export function MaskReveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, inView } = useInView<HTMLDivElement>(0.2);
  return (
    <div ref={ref} className={className}>
      <div
        className={`mask-reveal ${inView ? "is-visible" : ""}`}
        style={{ transitionDelay: `${delay}ms` }}
      >
        {children}
      </div>
    </div>
  );
}

/* ── Marker: [87] marker-pen highlight ─────────────────────── */
export function Marker({
  children,
  leaf = false,
  className = "",
}: {
  children: ReactNode;
  leaf?: boolean;
  className?: string;
}) {
  const { ref, inView } = useInView<HTMLSpanElement>(0.5);
  return (
    <span
      ref={ref}
      className={`marker ${leaf ? "marker--leaf" : ""} ${
        inView ? "is-visible" : ""
      } ${className}`}
    >
      {children}
    </span>
  );
}

/* ── Counter: animated number roll-up ────────────────────────
   Only animates values that are a clean number with an optional
   prefix (₹) — anything like "2–3" or "₹20K" renders statically
   to avoid mangling the source data. */
export function Counter({
  value,
  suffix = "",
  className = "",
  duration = 1600,
}: {
  value: string;
  suffix?: string;
  className?: string;
  duration?: number;
}) {
  const { ref, inView } = useInView<HTMLSpanElement>(0.4);
  const m = value.match(/^([^\d]*)(\d+(?:\.\d+)?)$/);
  const prefix = m?.[1] ?? "";
  const numStr = m?.[2] ?? "";
  const numeric = m ? parseFloat(numStr) : NaN;
  const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;
  const [display, setDisplay] = useState(() =>
    m ? `${prefix}0` : value
  );

  useEffect(() => {
    if (!inView || isNaN(numeric)) return;
    const start = performance.now();
    let raf: number;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 4);
      setDisplay(
        prefix +
          (numeric * eased).toLocaleString("en-IN", {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals,
          })
      );
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, numeric, decimals, prefix, duration]);

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  );
}

/* ── ChapterHead: kicker rule + chapter numeral + serif title ── */
export function ChapterHead({
  numeral,
  kicker,
  title,
  sub,
  invert = false,
  align = "left",
}: {
  numeral: string;
  kicker: string;
  title: ReactNode;
  sub?: string;
  invert?: boolean;
  align?: "left" | "center";
}) {
  const line = invert ? "bg-night-line" : "bg-line";
  const kickerColor = invert ? "text-night-mute" : "text-ink-mute";
  return (
    <div className={align === "center" ? "text-center" : ""}>
      <Reveal
        className={`flex items-center gap-4 ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        <span className="font-mono text-[11px] tracking-[0.3em] text-marigold">
          {numeral}
        </span>
        <span className={`h-px w-10 ${line}`} />
        <span
          className={`font-mono text-[11px] uppercase tracking-[0.3em] ${kickerColor}`}
        >
          {kicker}
        </span>
      </Reveal>
      <MaskReveal delay={120}>
        <h2
          className={`mt-6 font-display text-[clamp(2.1rem,5.2vw,4rem)] font-semibold leading-[1.04] tracking-tight ${
            invert ? "text-night-ink" : "text-ink"
          }`}
        >
          {title}
        </h2>
      </MaskReveal>
      {sub && (
        <Reveal delay={250}>
          <p
            className={`mt-5 max-w-2xl text-[15px] leading-relaxed md:text-base ${
              invert ? "text-night-mute" : "text-ink-soft"
            } ${align === "center" ? "mx-auto" : ""}`}
          >
            {sub}
          </p>
        </Reveal>
      )}
    </div>
  );
}

/* ── ArrowLink: [97] arrow-slide CTA ───────────────────────── */
export function ArrowLink({
  href,
  children,
  className = "",
  external = false,
  onClick,
}: {
  href?: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
  onClick?: () => void;
}) {
  const cls = `arrow-slide group inline-flex ${className}`;
  const inner = (
    <>
      <span className="arrow-slide-label">{children}</span>
      <span className="arrow-slide-icon" aria-hidden>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path
            d="M4 12h15m0 0-6-6m6 6-6 6"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </>
  );

  /* Internal routes use next/link for client-side navigation */
  if (href && href.startsWith("/")) {
    return (
      <Link href={href} onClick={onClick} className={cls}>
        {inner}
      </Link>
    );
  }

  const Tag = href ? "a" : "button";
  return (
    <Tag
      href={href}
      onClick={onClick}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={cls}
    >
      {inner}
    </Tag>
  );
}

/* ── Stars: ink star marks for reviews ─────────────────────── */
export function Stars({ n, invert = false }: { n: number; invert?: boolean }) {
  return (
    <div className="flex gap-1" aria-label={`${n} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="13" height="13" viewBox="0 0 24 24" aria-hidden>
          <path
            d="M12 2.5l2.95 6.32 6.93.84-5.12 4.76 1.35 6.86L12 17.9l-6.11 3.38 1.35-6.86-5.12-4.76 6.93-.84L12 2.5z"
            fill={i < n ? (invert ? "#e9e4d2" : "#0b3d2e") : "none"}
            stroke={invert ? "#9db3a6" : "#0b3d2e"}
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
        </svg>
      ))}
    </div>
  );
}

/* ── RootVine: organic connector that draws itself on scroll ── */
export function RootVine({
  className = "",
  flip = false,
  stroke = "currentColor",
  style,
}: {
  className?: string;
  flip?: boolean;
  stroke?: string;
  style?: CSSProperties;
}) {
  const { ref, inView } = useInView<HTMLDivElement>(0.3);
  return (
    <div
      ref={ref}
      className={`root-draw ${inView ? "is-visible" : ""} ${className}`}
      style={{ ...style, transform: flip ? "scaleX(-1)" : undefined }}
      aria-hidden
    >
      <svg
        viewBox="0 0 120 160"
        fill="none"
        className="h-full w-full"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M60 0 C58 30 64 42 58 62 C52 82 60 96 54 118 C50 134 58 148 56 160"
          stroke={stroke}
          strokeWidth="1.6"
          style={{ ["--dash" as string]: 320 }}
        />
        <path
          d="M58 40 C46 46 38 44 28 52"
          stroke={stroke}
          strokeWidth="1.2"
          strokeLinecap="round"
          style={{ ["--dash" as string]: 60, transitionDelay: "0.7s" }}
        />
        <path
          d="M59 78 C74 84 82 80 94 88"
          stroke={stroke}
          strokeWidth="1.2"
          strokeLinecap="round"
          style={{ ["--dash" as string]: 70, transitionDelay: "1.1s" }}
        />
        <path
          d="M55 104 C42 110 36 108 24 116"
          stroke={stroke}
          strokeWidth="1.2"
          strokeLinecap="round"
          style={{ ["--dash" as string]: 60, transitionDelay: "1.5s" }}
        />
        <circle
          cx="28"
          cy="52"
          r="2.4"
          stroke={stroke}
          strokeWidth="1.2"
          style={{ ["--dash" as string]: 20, transitionDelay: "1.9s" }}
        />
        <circle
          cx="94"
          cy="88"
          r="2.4"
          stroke={stroke}
          strokeWidth="1.2"
          style={{ ["--dash" as string]: 20, transitionDelay: "2.1s" }}
        />
        <circle
          cx="24"
          cy="116"
          r="2.4"
          stroke={stroke}
          strokeWidth="1.2"
          style={{ ["--dash" as string]: 20, transitionDelay: "2.3s" }}
        />
      </svg>
    </div>
  );
}

/* ── Tape: masking-tape strip for field notes ──────────────── */
export function Tape({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute h-6 w-24 bg-[#e4d9b8]/80 shadow-sm backdrop-blur-[1px] ${className}`}
      style={{
        clipPath: "polygon(2% 12%, 98% 0%, 100% 82%, 0% 100%)",
      }}
    />
  );
}
