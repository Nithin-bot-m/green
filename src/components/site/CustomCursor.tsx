"use client";

import { useEffect, useRef } from "react";

/* ── Custom field cursor ──────────────────────────────────────
   A bold, thick-outlined arrow in the brand's stamp aesthetic:
   a two-band fill split by a hard stripe, exactly like the
   reference mark. The palette re-inks itself to the theme under
   the pointer — paper sections wear marigold × leaf with a paper
   stripe and ink outline; night sections flip to leaf-bright ×
   marigold with a cut-through ink stripe and night-ink outline.
   The tip is the control point — it sits exactly on the OS
   pointer with zero lag — and the body swings around it with
   velocity tilt, swells over interactive elements, shrinks to a
   quiet mono mark over form fields, and presses down on click.
   Touch devices keep native behaviour.                        */

const GLYPH = 42; // rendered glyph size (px)
const HOT_X = (29.5 * GLYPH) / 40; // arrow tip = pointer hotspot
const HOT_Y = (24.5 * GLYPH) / 40;

const ARROW_PATH = "M3.4 3.2 L29.5 24.5 L13.6 23 L6.2 31.2 L3.4 36.9 Z";

/* Walk up from the hovered element to the first painted background
   and judge it by relative luminance — dark ink/night sections flip
   the cursor palette automatically, no per-section annotations. */
function isNight(el: Element | null): boolean {
  let node: Element | null = el;
  while (node && node !== document.documentElement) {
    const bg = window.getComputedStyle(node).backgroundColor;
    if (bg && bg !== "transparent" && !/^rgba\(0, 0, 0, 0\)$/.test(bg)) {
      const m = bg.match(/(\d+)[,\s]+(\d+)[,\s]+(\d+)/);
      if (m) {
        const lum =
          (0.2126 * Number(m[1]) +
            0.7152 * Number(m[2]) +
            0.0722 * Number(m[3])) /
          255;
        return lum < 0.45;
      }
    }
    node = node.parentElement;
  }
  return false;
}

export default function CustomCursor() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const glyphRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    const glyph = glyphRef.current;
    if (!root || !glyph) return;

    /* opt out only on genuinely touch-driven devices: multi-touch
       hardware whose primary pointer is coarse / hover-less. Mouse-
       driven environments (even those reporting no hover) keep the
       custom cursor. */
    if (
      navigator.maxTouchPoints > 0 &&
      (window.matchMedia("(pointer: coarse)").matches ||
        window.matchMedia("(hover: none)").matches)
    )
      return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const docEl = document.documentElement;
    docEl.setAttribute("data-cursor", "on");

    let tx = window.innerWidth / 2; // pointer position (hotspot = arrow tip)
    let ty = window.innerHeight / 3;
    let prevTx = tx; // previous frame's pointer x, for velocity tilt
    let tilt = 0;
    let scale = 1;
    let press = false;
    let seen = false;
    let raf = 0;
    let lastT = performance.now();
    let lastEl: Element | null = null;

    /* palette probe — re-evaluates only when the element under
       the pointer changes, so the loop stays cheap */
    const probe = () => {
      const el = document.elementFromPoint(tx, ty);
      if (el === lastEl) return;
      lastEl = el;
      const host = el as HTMLElement | null;
      const field = host?.closest("input, textarea, select");
      const active = host?.closest(
        'a, button, [role="button"], summary, label, [data-cursor="link"]'
      );
      root.dataset.mode = field ? "text" : active ? "link" : "idle";
      root.dataset.bg = isNight(host) ? "night" : "paper";
    };

    const move = (e: PointerEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      if (!seen) {
        seen = true;
        root.classList.add("is-on");
      }
    };
    const down = () => {
      press = true;
    };
    const up = () => {
      press = false;
    };
    const hide = () => {
      seen = false;
      root.classList.remove("is-on");
      lastEl = null;
    };

    /* hard fallback — one real touch retires the custom cursor for
       the session and hands pointer duties back to the OS */
    const retire = () => {
      hide();
      docEl.removeAttribute("data-cursor");
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerdown", down);
      window.removeEventListener("pointerup", up);
      docEl.removeEventListener("mouseleave", hide);
      window.removeEventListener("blur", hide);
    };

    const frame = (now: number) => {
      raf = requestAnimationFrame(frame);
      const dt = Math.min(48, now - lastT);
      lastT = now;

      if (reduce.matches) {
        prevTx = tx;
        tilt = 0;
      } else {
        /* the tip is pinned to the pointer — no positional lag, so hover
           and clicks land exactly where the arrow points. The tilt reads
           the pointer's own velocity instead, swinging the body around
           the pinned tip. */
        const vx = tx - prevTx;
        prevTx = tx;
        const lean = Math.max(-14, Math.min(14, vx * 0.45));
        tilt += (lean - tilt) * (1 - Math.pow(0.78, dt / 16.7));
      }

      const want = press
        ? 0.8
        : root.dataset.mode === "link"
          ? 1.3
          : root.dataset.mode === "text"
            ? 0.62
            : 1;
      scale += (want - scale) * (reduce.matches ? 1 : 1 - Math.pow(0.75, dt / 16.7));

      /* exact hotspot: the SVG tip sits at (HOT_X, HOT_Y) inside the
         glyph, so this translation puts the tip precisely on the OS
         pointer — the control point IS the tip. */
      root.style.transform = `translate3d(${(tx - HOT_X).toFixed(2)}px, ${(
        ty - HOT_Y
      ).toFixed(2)}px, 0)`;
      glyph.style.transform = `rotate(${tilt.toFixed(2)}deg) scale(${scale.toFixed(3)})`;
      probe();
    };
    raf = requestAnimationFrame(frame);

    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerdown", down, { passive: true });
    window.addEventListener("pointerup", up, { passive: true });
    docEl.addEventListener("mouseleave", hide);
    window.addEventListener("blur", hide);
    window.addEventListener("touchstart", retire, { passive: true, once: true });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerdown", down);
      window.removeEventListener("pointerup", up);
      docEl.removeEventListener("mouseleave", hide);
      window.removeEventListener("blur", hide);
      window.removeEventListener("touchstart", retire);
      docEl.removeAttribute("data-cursor");
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className="cursor-root"
      data-bg="paper"
      data-mode="idle"
      aria-hidden="true"
    >
      <div ref={glyphRef} className="cursor-glyph">
        <svg
          width={GLYPH}
          height={GLYPH}
          viewBox="0 0 40 40"
          fill="none"
          aria-hidden="true"
        >
          <defs>
            {/* bands run top-left → bottom-right, after the reference:
                fill A | stripe | fill B | stripe | fill A */}
            <linearGradient
              id="gr-cursor-fill"
              gradientUnits="userSpaceOnUse"
              x1="5"
              y1="6"
              x2="16"
              y2="35"
            >
              <stop offset="0" className="cursor-stop-a" />
              <stop offset="0.3" className="cursor-stop-a" />
              <stop offset="0.3" className="cursor-stop-s" />
              <stop offset="0.4" className="cursor-stop-s" />
              <stop offset="0.4" className="cursor-stop-b" />
              <stop offset="0.66" className="cursor-stop-b" />
              <stop offset="0.66" className="cursor-stop-s" />
              <stop offset="0.76" className="cursor-stop-s" />
              <stop offset="0.76" className="cursor-stop-a" />
              <stop offset="1" className="cursor-stop-a" />
            </linearGradient>
          </defs>
          <path
            d={ARROW_PATH}
            fill="url(#gr-cursor-fill)"
            className="cursor-stroke"
            strokeWidth="2.6"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}
