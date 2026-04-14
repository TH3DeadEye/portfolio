"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import TitleHeader from "./TitleHeader";

export default function WorkSamples() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".work-card").forEach((card, index) => {
        gsap.from(card, {
          y: 60,
          opacity: 0,
          duration: 1,
          delay: index * 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="work"
      className="relative w-full px-5 md:px-10 py-32 border-t border-[var(--border-soft)]"
    >
      <TitleHeader
        number="03 / selected work"
        sub="Shipped code, not screenshots"
        title="Things I've actually built."
      />

      <div className="mt-20 max-w-6xl mx-auto showcase-layout">
        {/* Left — featured project: NBA Coach Assist (no image — terminal-style hero) */}
        <div className="work-card first-project-wrapper card card-border rounded-xl p-6 md:p-10">
          <div className="image-wrapper bg-[var(--text)] flex items-center justify-center p-8">
            <div className="w-full h-full flex flex-col justify-center gap-3 font-[family-name:var(--font-jetbrains)] text-[0.7rem] md:text-sm leading-relaxed">
              <div className="flex gap-2 mb-2">
                <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
              </div>
              <p className="text-[var(--sage)]">$ curl -X GET /api/v1/recommend</p>
              <p className="text-[var(--bg)]/50">200 OK · 42ms</p>
              <p className="text-[var(--sage)]">
                {"{"} &ldquo;lineup&rdquo;: [&ldquo;SG&rdquo;, &ldquo;PF&rdquo;], &ldquo;win_prob&rdquo;: 0.71 {"}"}
              </p>
              <p className="text-[var(--bg)]/50 mt-2">$ pytest tests/ -v</p>
              <p className="text-[var(--sage)]">==== 47 passed in 2.14s ====</p>
              <p className="text-[var(--bg)]/50 mt-2">$ git push origin main</p>
              <p className="text-[var(--sage)]">✓ ci/backtest · ✓ lint · ✓ tests</p>
            </div>
          </div>
          <div className="mt-8">
            <p className="font-[family-name:var(--font-jetbrains)] text-xs text-[var(--accent)] mb-3">
              project 01 · Nov — Dec 2025
            </p>
            <h3 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-4xl text-[var(--text)] leading-tight">
              NBA Coach Assist — a decision-support API built solo.
            </h3>
            <p className="mt-5 text-[var(--muted)] leading-relaxed text-base md:text-lg">
              A FastAPI backend that ingests live game data, runs scoring
              models, and returns actionable recommendations. I owned the
              pipeline from prototype to production — automated ingestion into
              PostgreSQL, historical backtesting loops to tune scoring weights,
              and modular REST endpoints gated by unit + integration tests in
              CI/CD.
            </p>

            <div className="flex flex-wrap gap-2 mt-6">
              {["FastAPI", "Python", "PostgreSQL", "Supabase", "CI/CD"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1 border border-[var(--border)] rounded-full text-[var(--muted)] font-[family-name:var(--font-jetbrains)]"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>

            <a
              href="https://github.com/armanmilani84"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 text-sm font-[family-name:var(--font-jetbrains)] text-[var(--highlight)] hover:gap-3 transition-all"
            >
              view on github &rarr;
            </a>
          </div>
        </div>

        {/* Right — stacked projects */}
        <div className="project-list-wrapper">
          <div className="work-card project-tile card card-border rounded-xl overflow-hidden">
            <div className="image-wrapper bg-[var(--bg)]">
              <Image
                src="/images/project2.png"
                alt="Darsoon AI Platform"
                fill
                className="object-cover"
                sizes="(min-width: 1280px) 40vw, 100vw"
              />
            </div>
            <div className="p-6 md:p-8">
              <p className="font-[family-name:var(--font-jetbrains)] text-xs text-[var(--accent)] mb-2">
                project 02 · Jul 2025 — Present
              </p>
              <h3 className="font-[family-name:var(--font-syne)] font-semibold text-xl md:text-2xl text-[var(--text)] leading-tight">
                Darsoon AI Platform — Text-to-SQL & RAG.
              </h3>
              <p className="mt-4 text-[var(--muted)] leading-relaxed text-sm">
                Production AI features on AWS Bedrock — RAG pipelines, Knowledge
                Bases, vector retrieval — so non-technical users can query
                operational data in plain English. The Text-to-SQL engine
                validates query plans against Supabase before anything runs.
              </p>
              <div className="flex flex-wrap gap-2 mt-5">
                {["Next.js", "TypeScript", "AWS Bedrock", "PostgreSQL"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2.5 py-1 border border-[var(--border)] rounded-full text-[var(--muted)] font-[family-name:var(--font-jetbrains)]"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>

          <div className="work-card project-tile card card-border rounded-xl overflow-hidden">
            <div className="image-wrapper bg-[var(--bg)]">
              <Image
                src="/images/project3.png"
                alt="Personal portfolio site"
                fill
                className="object-cover"
                sizes="(min-width: 1280px) 40vw, 100vw"
              />
            </div>
            <div className="p-6 md:p-8">
              <p className="font-[family-name:var(--font-jetbrains)] text-xs text-[var(--accent)] mb-2">
                project 03 · 2026
              </p>
              <h3 className="font-[family-name:var(--font-syne)] font-semibold text-xl md:text-2xl text-[var(--text)] leading-tight">
                This portfolio — Next.js + GSAP + R3F.
              </h3>
              <p className="mt-4 text-[var(--muted)] leading-relaxed text-sm">
                The site you&apos;re on right now. Built from scratch with
                Next.js 16, TypeScript, Tailwind, GSAP, and react-three-fiber —
                custom cursor, scroll-triggered timeline, typewriter hero, and a
                few easter eggs for the curious.
              </p>
              <div className="flex flex-wrap gap-2 mt-5">
                {["Next.js", "TypeScript", "GSAP", "Three.js"].map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2.5 py-1 border border-[var(--border)] rounded-full text-[var(--muted)] font-[family-name:var(--font-jetbrains)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="mt-16 text-center text-sm text-[var(--muted-dim)] font-[family-name:var(--font-jetbrains)]">
        more on{" "}
        <a
          href="https://github.com/armanmilani84"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--highlight)] hover:underline underline-offset-4"
        >
          github &rarr;
        </a>
      </p>
    </section>
  );
}
