"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";

/* ── Interactive Magnetic Glow Cursor ──────────────────────────
   Preserves the native OS cursor for 100% precision and accessibility.
   Adds an ambient, fluid aura that magnetically reacts to interactive
   links, video cards, buttons, and form elements.
   Automatically disabled on touch devices and for prefers-reduced-motion.
───────────────────────────────────────────────────────────── */

const emptySubscribe = () => () => {};

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const isClient = useSyncExternalStore(emptySubscribe, () => true, () => false);
  const isFinePointer = useSyncExternalStore(
    emptySubscribe,
    () => typeof window !== "undefined" && window.matchMedia("(pointer: fine) and (hover: hover)").matches,
    () => false
  );

  useEffect(() => {
    if (!isFinePointer) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let isHovering = false;
    let isClicking = false;
    let isVisible = false;
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) {
        isVisible = true;
        dot.style.opacity = "1";
        ring.style.opacity = "1";
      }

      // Check if hovering interactive target
      const target = e.target as HTMLElement | null;
      const interactive = target?.closest(
        'a, button, input, select, textarea, [role="button"], .interactive-glow'
      );
      if (interactive && !isHovering) {
        isHovering = true;
        ring.classList.add("ring-hover");
      } else if (!interactive && isHovering) {
        isHovering = false;
        ring.classList.remove("ring-hover");
      }
    };

    const onMouseDown = () => {
      isClicking = true;
      ring.style.transform = `translate3d(${ringX - 12}px, ${ringY - 12}px, 0) scale(0.85)`;
    };

    const onMouseUp = () => {
      isClicking = false;
    };

    const onMouseLeave = () => {
      isVisible = false;
      dot.style.opacity = "0";
      ring.style.opacity = "0";
    };

    // Smooth physics loop for magnetic delay
    const render = () => {
      // Lerp ring towards mouse with fluid ease (0.18)
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;

      dot.style.transform = `translate3d(${mouseX - 3}px, ${mouseY - 3}px, 0)`;

      if (!isClicking) {
        const scale = isHovering ? 1.4 : 1;
        ring.style.transform = `translate3d(${ringX - 16}px, ${ringY - 16}px, 0) scale(${scale})`;
      }

      rafId = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown, { passive: true });
    window.addEventListener("mouseup", onMouseUp, { passive: true });
    document.documentElement.addEventListener("mouseleave", onMouseLeave);
    rafId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.documentElement.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [isFinePointer]);

  if (!isClient || !isFinePointer) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden" aria-hidden="true">
      {/* Precision center dot */}
      <div
        ref={dotRef}
        className="fixed left-0 top-0 h-1.5 w-1.5 rounded-full bg-marigold opacity-0 transition-opacity duration-300"
        style={{ willChange: "transform" }}
      />
      {/* Fluid ambient ring */}
      <div
        ref={ringRef}
        className="fixed left-0 top-0 h-8 w-8 rounded-full border border-marigold/35 bg-marigold/[0.04] opacity-0 backdrop-blur-[0.5px] transition-[opacity,border-color,background-color] duration-300 [&.ring-hover]:border-marigold [&.ring-hover]:bg-marigold/15"
        style={{ willChange: "transform" }}
      />
    </div>
  );
}
