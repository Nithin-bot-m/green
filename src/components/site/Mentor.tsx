"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { MENTOR } from "@/lib/content";
import { Reveal, Marker, ChapterHead } from "./primitives";

export default function Mentor() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  return (
    <section className="relative py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* ── Left Column: Authentic Mentor Video Card ── */}
          <div className="lg:col-span-5">
            <Reveal variant="left" className="relative">
              <div className="group relative overflow-hidden rounded-2xl border border-line bg-night shadow-xl">
                {/* Real Mentor Video Footage */}
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-night-deep">
                  <video
                    ref={videoRef}
                    src="/assets/video/rushi-mentor.mp4"
                    poster="/assets/video/rushi-mentor.webp"
                    playsInline
                    autoPlay
                    muted
                    loop
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30" />

                  {/* Top Live Badge & Audio Toggle */}
                  <div className="absolute left-4 top-4 flex items-center gap-2">
                    <span className="rounded-full bg-black/60 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.2em] text-marigold backdrop-blur-md">
                      ● Active Mentor
                    </span>
                  </div>
                  <div className="absolute right-4 top-4 flex items-center gap-2">
                    <button
                      onClick={toggleMute}
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-xs text-white backdrop-blur-md hover:bg-black/80"
                      aria-label="Toggle mute"
                    >
                      {isMuted ? "🔇" : "🔊"}
                    </button>
                    <button
                      onClick={togglePlay}
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-xs text-white backdrop-blur-md hover:bg-black/80"
                      aria-label="Toggle play"
                    >
                      {isPlaying ? "⏸" : "▶"}
                    </button>
                  </div>

                  {/* Bottom Credentials Overlay */}
                  <div className="absolute inset-x-5 bottom-5">
                    <div className="rounded-xl border border-white/15 bg-black/60 p-4.5 backdrop-blur-md text-white">
                      <div className="flex items-center justify-between">
                        <h3 className="font-display text-2xl font-bold">Rushi</h3>
                        <span className="font-mono text-[11px] font-semibold text-marigold">
                          10+ YRS EXP
                        </span>
                      </div>
                      <p className="mt-1 font-mono text-[9.5px] uppercase tracking-[0.16em] text-night-mute">
                        Senior DevOps Architect · AWS &amp; GCP Expert
                      </p>
                      <div className="mt-3 flex items-center gap-2 border-t border-white/10 pt-2.5">
                        <span className="text-sm">✦</span>
                        <span className="font-display text-[13px] font-medium text-white/90">
                          {MENTOR.headline}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Secondary Trainer Card: Kiran (Senior Power BI Expert) */}
              <div className="mt-5 flex items-center gap-4 rounded-xl border border-line bg-paper-card p-4 shadow-sm">
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg border border-line">
                  <Image
                    src="/assets/images/mentor-kiran.webp"
                    alt="Kiran - Senior Power BI Expert"
                    fill
                    sizes="56px"
                    className="object-cover object-top"
                  />
                </div>
                <div className="min-w-0">
                  <p className="font-display text-[16px] font-bold text-ink">
                    Kiran
                  </p>
                  <p className="font-mono text-[9.5px] uppercase tracking-[0.14em] text-ink-mute">
                    Senior Power BI &amp; Analytics Expert
                  </p>
                  <p className="font-mono text-[10px] text-marigold">
                    Master Power BI &amp; DAX in 60–100 Days
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* ── Right Column: Bio, Methodology & Skills ── */}
          <div className="lg:col-span-7">
            <ChapterHead
              numeral="CH. III·B"
              kicker={MENTOR.kicker}
              title={MENTOR.title}
            />
            <Reveal delay={200}>
              <p className="mt-6 max-w-xl text-[15.5px] leading-relaxed text-ink-soft md:text-base">
                {MENTOR.intro}
              </p>
            </Reveal>

            {/* Fact rows */}
            <div className="mt-10 space-y-0 border-t border-line">
              {MENTOR.facts.map((f, i) => (
                <Reveal
                  key={f.title}
                  delay={i * 90}
                  className="group grid grid-cols-1 gap-2 border-b border-line py-6 sm:grid-cols-[140px_1fr] sm:gap-6"
                >
                  <span className="font-mono text-[10.5px] font-semibold uppercase tracking-[0.2em] text-marigold">
                    {f.title}
                  </span>
                  <p className="text-[14.5px] leading-relaxed text-ink-soft">
                    {f.body}
                  </p>
                </Reveal>
              ))}
            </div>

            {/* Working Tech Stack */}
            <Reveal delay={250} className="mt-10">
              <p className="font-mono text-[10.5px] uppercase tracking-[0.24em] text-ink-mute">
                Enterprise Technologies Taught
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {MENTOR.skills.map((s) => (
                  <span
                    key={s}
                    className="rounded-md border border-line bg-paper-card px-3 py-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-ink shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-marigold hover:text-marigold"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
