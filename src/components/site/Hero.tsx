"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HERO, CONTACT } from "@/lib/content";
import { Reveal, Marker, Counter, ArrowLink } from "./primitives";

/* Rotating Tech Track Cycle */
function WordCycle({ words }: { words: readonly string[] }) {
  const [active, setActive] = useState(0);
  const [leaving, setLeaving] = useState(-1);

  useEffect(() => {
    const t = setInterval(() => {
      setLeaving(active);
      setActive((a) => (a + 1) % words.length);
      setTimeout(() => setLeaving(-1), 500);
    }, 2400);
    return () => clearInterval(t);
  }, [active, words.length]);

  return (
    <span className="word-cycle font-display font-semibold italic text-marigold">
      {words.map((w, i) => (
        <span
          key={w}
          className={`${i === active ? "is-active" : ""} ${
            i === leaving ? "is-leaving" : ""
          }`}
        >
          {w}
        </span>
      ))}
    </span>
  );
}

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsVideoPlaying(true);
    } else {
      videoRef.current.pause();
      setIsVideoPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  return (
    <section id="top" className="relative overflow-hidden pt-24 sm:pt-28 md:pt-32">
      {/* Subtle background lines */}
      <div className="ledger-lines pointer-events-none absolute inset-0 opacity-40" />

      <div className="relative mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="grid grid-cols-1 items-center gap-10 pb-14 pt-4 md:gap-12 md:pt-6 lg:grid-cols-12 lg:gap-12">
          {/* ── Left: Confident Editorial Headline & Strategy ── */}
          <div className="lg:col-span-7 xl:col-span-7">
            {/* Live Status Eyebrow */}
            <Reveal className="mb-5 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-leaf/30 bg-leaf/10 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-leaf">
                <span className="h-2 w-2 animate-pulse rounded-full bg-leaf" />
                Hyderabad Cohorts Active
              </span>
              <span className="hidden font-mono text-[10.5px] uppercase tracking-[0.22em] text-ink-mute sm:inline">
                · {HERO.kicker}
              </span>
            </Reveal>

            {/* Headline */}
            <h1 className="font-display text-[clamp(2.6rem,6vw,5.2rem)] font-black leading-[1.02] tracking-[-0.025em] text-ink">
              <Reveal as="span" className="block" delay={80}>
                {HERO.headlineA}
              </Reveal>
              <Reveal as="span" className="block" delay={180}>
                <span className="relative">
                  <Marker className="text-ink">
                    Industry Actually
                  </Marker>
                </span>
              </Reveal>
              <Reveal as="span" className="block text-ember" delay={280}>
                {HERO.headlineB}
              </Reveal>
            </h1>

            {/* Subtitle */}
            <Reveal delay={380} className="mt-6 max-w-xl">
              <p className="text-[16px] leading-relaxed text-ink-soft md:text-[17.5px]">
                {HERO.sub}
              </p>
            </Reveal>

            {/* Action Group */}
            <Reveal delay={480} className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/programs"
                className="group inline-flex items-center gap-3 rounded-md bg-ink px-7 py-3.5 font-mono text-[11.5px] font-semibold uppercase tracking-[0.16em] text-white shadow-[0_6px_20px_rgba(10,41,32,0.2)] transition-all duration-300 hover:bg-ember hover:shadow-[0_8px_25px_rgba(255,91,34,0.35)]"
              >
                <span>{HERO.ctaPrimary}</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <ArrowLink
                href={CONTACT.whatsappPrograms}
                external
                className="rounded-md border border-line bg-paper-card px-6 py-3.5 font-mono text-[11.5px] font-medium uppercase tracking-[0.16em] text-ink shadow-sm transition-all duration-300 hover:border-ink hover:bg-paper"
              >
                {HERO.ctaSecondary}
              </ArrowLink>
            </Reveal>

            {/* Rotating Track Indicator */}
            <Reveal delay={580} className="mt-8 flex flex-wrap items-baseline gap-3 border-t border-line-soft pt-4 text-ink-soft">
              <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-ink-mute">
                Curriculum In Focus
              </span>
              <span className="h-px w-6 bg-line" />
              <WordCycle words={HERO.techCycle} />
            </Reveal>
          </div>

          {/* ── Right: Cinematic Authentic Media & Video Reel ── */}
          <div className="relative lg:col-span-5 xl:col-span-5">
            <Reveal variant="right" delay={300} className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Media Frame */}
              <div className="video-reel-frame relative aspect-[4/5] w-full bg-night-deep">
                {/* Autoplaying muted video loop of Rushi / Academy */}
                <video
                  ref={videoRef}
                  src="/assets/video/rushi-headline.mp4"
                  poster="/assets/video/rushi-headline.webp"
                  playsInline
                  autoPlay
                  muted
                  loop
                  className="h-full w-full object-cover"
                />

                {/* Subtle gradient overlay to enhance readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

                {/* Top Media Tag */}
                <div className="absolute left-5 top-5 flex items-center gap-2">
                  <span className="rounded-full bg-black/60 px-3 py-1 font-mono text-[9.5px] font-medium uppercase tracking-[0.18em] text-white backdrop-blur-md">
                    ● Real Mentor Session
                  </span>
                </div>

                {/* Audio / Pause Controls */}
                <div className="absolute right-5 top-5 flex items-center gap-2">
                  <button
                    onClick={toggleMute}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md transition-transform hover:scale-110"
                    aria-label={isMuted ? "Unmute audio" : "Mute audio"}
                    title={isMuted ? "Unmute" : "Mute"}
                  >
                    {isMuted ? "🔇" : "🔊"}
                  </button>
                  <button
                    onClick={togglePlay}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md transition-transform hover:scale-110"
                    aria-label={isVideoPlaying ? "Pause video" : "Play video"}
                  >
                    {isVideoPlaying ? "⏸" : "▶"}
                  </button>
                </div>

                {/* Bottom Overlay Card */}
                <div className="absolute inset-x-5 bottom-5">
                  <div className="dark-glass-card rounded-xl p-5 text-white">
                    <div className="flex items-center justify-between gap-2">
                      <p className="font-display text-lg font-semibold leading-snug">
                        Rushi · Head Mentor
                      </p>
                      <span className="rounded bg-ember px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-[0.16em] text-white">
                        AWS &amp; DevOps
                      </span>
                    </div>
                    <p className="mt-1 font-mono text-[10px] tracking-[0.08em] text-night-mute">
                      Senior DevOps Architect · 10+ Yrs Enterprise Experience
                    </p>
                    <p className="mt-2 text-[12px] leading-relaxed text-white/90">
                      &ldquo;Every concept lands inside a real production scenario. You debug, deploy, and break things on day one.&rdquo;
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Verified Placement Stat Pill */}
              <div className="glass-card absolute -bottom-4 -left-3 hidden items-center gap-3 rounded-lg p-3 shadow-lg sm:flex lg:-left-5">
                <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-md border border-line bg-paper">
                  <Image
                    src="/assets/logo/greenroots-emblem.webp"
                    alt="Greenroots Placement Assurance"
                    fill
                    sizes="36px"
                    className="object-contain"
                  />
                </div>
                <div>
                  <p className="font-mono text-[8.5px] uppercase tracking-[0.18em] text-ink-mute">
                    Placement Support
                  </p>
                  <p className="font-display text-xs font-bold text-ink">
                    85% Placement · Top MNCs
                  </p>
                </div>
              </div>

              {/* Floating Badge on Top Right */}
              <div className="glass-card absolute right-3 top-3 hidden items-center gap-2 rounded-md px-3 py-1.5 shadow-sm sm:flex">
                <span className="h-1.5 w-1.5 rounded-full bg-leaf animate-pulse" />
                <span className="font-mono text-[9.5px] font-medium tracking-[0.14em] text-ink">
                  Kukatpally, Hyderabad
                </span>
              </div>
            </Reveal>
          </div>
        </div>

        {/* ── High-Impact Ledger Stats Row ── */}
        <Reveal delay={200} className="relative mt-4 border-t border-line">
          <dl className="grid grid-cols-2 divide-line md:grid-cols-4 md:divide-x">
            {HERO.stats.map((s, i) => (
              <div
                key={s.label}
                className={`px-3 py-8 md:px-8 ${
                  i >= 2 ? "border-t border-line-soft md:border-t-0" : ""
                } ${i % 2 === 1 ? "border-l border-line-soft md:border-l-0" : ""}`}
              >
                <dt className="order-2 mt-2 font-mono text-[10.5px] uppercase tracking-[0.22em] text-ink-mute">
                  {s.label}
                </dt>
                <dd className="order-1 font-display text-[clamp(2.3rem,4.5vw,3.8rem)] font-bold leading-none text-ink">
                  <Counter value={s.num} suffix={s.suffix} />
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
