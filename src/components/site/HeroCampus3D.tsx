"use client";

import { useEffect, useRef, useState } from "react";

export default function HeroCampus3D() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  // Smooth mouse tilt parallax for 3D depth
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const normX = (e.clientX / window.innerWidth - 0.5) * 2;
      const normY = (e.clientY / window.innerHeight - 0.5) * 2;
      setTilt({ x: normX * 5, y: -normY * 3.5 });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full overflow-hidden select-none pointer-events-none"
      style={{ perspective: 1200 }}
    >
      {/* ── 3D Transforming Stage (Background Image & Subtle Depth) ── */}
      <div
        className="absolute inset-0 w-full h-full transition-transform duration-200 ease-out will-change-transform"
        style={{
          transform: `scale(1.05) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Background Image: College Campus with students walking up the path */}
        <img
          src="/assets/images/hero-campus-future.jpg"
          alt="Greenroots Eco-Tech Campus Hyderabad"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* ── Atmospheric Sun Glow ── */}
        <div
          className="absolute left-[54%] top-[27%] -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-amber-200/25 blur-3xl animate-pulse"
          style={{ animationDuration: "6s" }}
        />

        {/* ── Holographic Rings on the Lawn Globe Sculpture ── */}
        <div
          className="absolute left-[45.8%] top-[56.5%] -translate-x-1/2 -translate-y-1/2 z-10"
          style={{ transform: "translateZ(30px)" }}
        >
          <div className="relative h-28 w-28 sm:h-36 sm:w-36 flex items-center justify-center">
            <div
              className="absolute inset-0 rounded-full border-2 border-emerald-400/60 animate-spin"
              style={{ animationDuration: "12s" }}
            />
            <div
              className="absolute inset-2 rounded-full border border-dashed border-emerald-300/40 animate-spin"
              style={{ animationDuration: "8s", animationDirection: "reverse" }}
            />
            <div className="absolute h-16 w-16 rounded-full bg-emerald-500/20 blur-md animate-pulse" />
          </div>
        </div>

        {/* ── Left Editorial Scrim Gradients (Guarantees Razor-Sharp Readability for Headline) ── */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#051510] via-transparent to-[#051510]/50" />
        <div className="pointer-events-none absolute inset-y-0 left-0 w-full sm:w-[70%] lg:w-[56%] bg-gradient-to-r from-[#051510]/95 via-[#051510]/80 to-transparent" />
      </div>
    </div>
  );
}
