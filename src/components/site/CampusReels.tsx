"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { CONTACT } from "@/lib/content";
import { Reveal, ChapterHead } from "./primitives";

interface ReelItem {
  id: string;
  title: string;
  badge: string;
  description: string;
  videoSrc: string;
  posterSrc: string;
}

const REELS: ReelItem[] = [
  {
    id: "classroom",
    title: "Classroom Training & Collaborative Pods",
    badge: "Kukatpally Academy",
    description:
      "A mini corporate ecosystem with modern desks, interactive whiteboards, and production lab setups. Students learn in cohorts and work on real company sprints.",
    videoSrc: "/assets/video/classroom-training.mp4",
    posterSrc: "/assets/video/classroom-training.webp",
  },
  {
    id: "analytics",
    title: "Analytics & Power BI Studio",
    badge: "Hands-on Labs",
    description:
      "From SQL databases to enterprise Power BI Service and cloud data pipelines. Real project datasets from retail, healthcare, and finance.",
    videoSrc: "/assets/video/analytics-reel.mp4",
    posterSrc: "/assets/video/analytics-reel.webp",
  },
  {
    id: "counseling",
    title: "1-on-1 Career Audit & Counseling",
    badge: "Personal Guidance",
    description:
      "Direct consultation evaluating your academic branch, career gap, or non-IT background to map your fastest road into high-growth tech roles.",
    videoSrc: "/assets/video/counselor-reel.mp4",
    posterSrc: "/assets/video/counselor-reel.webp",
  },
];

export default function CampusReels() {
  const [activeTab, setActiveTab] = useState(0);
  const activeReel = REELS[activeTab];
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const switchTab = (idx: number) => {
    setActiveTab(idx);
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
    }
  };

  return (
    <section className="relative bg-paper py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <ChapterHead
              numeral="CH. IV"
              kicker="The Environment"
              title={
                <>
                  Experience the Academy.{" "}
                  <em className="font-display italic text-marigold">
                    A Mini Corporate Hub.
                  </em>
                </>
              }
              sub="Located at Manjeera Majestic Commercial, Kukatpally (Opposite JNTU, Next to Lulu Mall). Hands-on labs, collaborative pods, and active placement drives."
            />
          </div>

          <Reveal delay={200}>
            <div className="flex rounded-lg border border-line bg-paper-card p-1 shadow-sm">
              {REELS.map((reel, idx) => (
                <button
                  key={reel.id}
                  onClick={() => switchTab(idx)}
                  className={`rounded-md px-4 py-2 font-mono text-[10.5px] font-medium uppercase tracking-[0.14em] transition-all ${
                    activeTab === idx
                      ? "bg-ink text-white shadow-xs"
                      : "text-ink-soft hover:text-ink"
                  }`}
                >
                  {reel.badge}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Cinematic Media Showcase */}
        <div className="mt-12 grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Left: Interactive Video Player */}
          <div className="lg:col-span-7">
            <Reveal className="video-reel-frame relative aspect-[16/10] w-full overflow-hidden bg-night-deep shadow-2xl">
              <video
                key={activeReel.videoSrc}
                ref={videoRef}
                src={activeReel.videoSrc}
                poster={activeReel.posterSrc}
                playsInline
                autoPlay
                muted
                loop
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-white">
                <div>
                  <span className="rounded bg-marigold px-2.5 py-0.5 font-mono text-[9px] font-bold uppercase tracking-[0.18em]">
                    {activeReel.badge}
                  </span>
                  <p className="mt-1.5 font-display text-xl font-bold md:text-2xl">
                    {activeReel.title}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: Editorial Context & Walk-In Information */}
          <div className="lg:col-span-5">
            <Reveal delay={150}>
              <div className="rounded-2xl border border-line bg-paper-card p-8 shadow-sm md:p-10">
                <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-marigold">
                  Live Learning Culture
                </span>
                <h3 className="mt-3 font-display text-2xl font-bold leading-tight text-ink md:text-3xl">
                  {activeReel.title}
                </h3>
                <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
                  {activeReel.description}
                </p>

                <div className="mt-8 space-y-4 border-t border-line-soft pt-6">
                  <div className="flex items-start gap-3">
                    <span className="mt-1 text-marigold">📍</span>
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-mute">
                        Academy Campus
                      </p>
                      <p className="text-[13.5px] font-medium text-ink">
                        {CONTACT.address}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="mt-1 text-leaf">⏱</span>
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-mute">
                        Walk-In Hours
                      </p>
                      <p className="text-[13.5px] font-medium text-ink">
                        {CONTACT.hours}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <a
                    href={CONTACT.whatsappPrograms}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center rounded-md bg-ink py-3.5 font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-white transition-colors hover:bg-marigold"
                  >
                    Schedule a Campus Visit →
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
