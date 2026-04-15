"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import TitleHeader from "./TitleHeader";

type ExpCard = {
  logoPath: string;
  logoAlt: string;
  logoWidth: number;
  logoHeight: number;
  title: string;
  date: string;
  company: string;
  responsibilities: string[];
};

const expCards: ExpCard[] = [
  {
    logoPath: "/images/darsoon.svg",
    logoAlt: "Darsoon Inc. logo",
    logoWidth: 400,
    logoHeight: 56,
    title: "AI Developer / Software Engineering Intern",
    date: "July 2025 — Present",
    company: "Darsoon Inc.",
    responsibilities: [
      "Built full-stack apps in Python, TypeScript, and Next.js — owning REST APIs end-to-end.",
      "Shipped AI features on AWS Bedrock (RAG, Knowledge Base, vector retrieval) for natural-language querying.",
      "Designed a Text-to-SQL engine that validates query plans against PostgreSQL / Supabase before execution.",
      "Reduced system errors meaningfully with guardrails, evaluation frameworks, and structured testing loops.",
    ],
  },
  {
    logoPath: "/images/gbc.svg",
    logoAlt: "George Brown College logo",
    logoWidth: 500,
    logoHeight: 323,
    title: "Advanced Diploma — Computer Programming & Analysis",
    date: "September 2023 — April 2027",
    company: "George Brown College (T177)",
    responsibilities: [
      "Coursework: software development, database design, web application development.",
      "Data structures & algorithms with a strong applied project focus.",
      "Agile methodologies, team-based sprint work, and peer code reviews.",
      "Consistent 4.00 / 4.00 GPA across all completed terms.",
    ],
  },
  {
    logoPath: "/images/nba.svg",
    logoAlt: "NBA Coach Assist mark",
    logoWidth: 64,
    logoHeight: 64,
    title: "NBA Coach Assist — Independent Project",
    date: "November 2025 — December 2025",
    company: "Solo Developer",
    responsibilities: [
      "Designed an ingestion pipeline that normalizes live data into PostgreSQL for real-time querying.",
      "Built scoring models and tuned weights through historical backtesting loops.",
      "Shipped clean REST endpoints with unit + integration tests gated in CI/CD.",
      "Deployed on Linux with full Git branch and pull-request workflows.",
    ],
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".exp-entry").forEach((entry) => {
        gsap.from(entry, {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: entry,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="resume"
      className="relative w-full px-5 md:px-10 py-32 border-t border-[var(--border-soft)]"
    >
      <TitleHeader
        number="02 / resume & experience"
        sub="Career, education, solo builds"
        title="Where I've been spending my time."
      />

      {/* Container holds one continuous gradient line + all entries */}
      <div className="mt-24 max-w-4xl mx-auto relative">
        {/* Single continuous timeline line — always visible */}
        <div
          className="gradient-line absolute top-0 bottom-0 w-[2px] pointer-events-none left-5 md:left-10 -translate-x-1/2"
          aria-hidden="true"
        />

        {expCards.map((card, idx) => (
          <div
            key={card.title}
            className={`exp-entry relative flex items-start gap-6 md:gap-10 ${
              idx < expCards.length - 1 ? "pb-20 md:pb-24" : ""
            }`}
          >
            {/* Logo sits on the line */}
            <div className="timeline-logo relative z-10 shrink-0">
              <Image
                src={card.logoPath}
                alt={card.logoAlt}
                width={card.logoWidth}
                height={card.logoHeight}
                className="max-w-[78%] max-h-[78%] w-auto h-auto object-contain"
              />
            </div>

            {/* Content */}
            <div className="flex-1 pt-1 md:pt-2 min-w-0">
              <p className="font-[family-name:var(--font-jetbrains)] text-xs text-[var(--accent)] mb-2">
                {card.company}
              </p>
              <h3 className="font-[family-name:var(--font-syne)] font-semibold text-2xl md:text-3xl text-[var(--text)] leading-tight">
                {card.title}
              </h3>
              <p className="my-4 text-[var(--muted)] font-[family-name:var(--font-jetbrains)] text-sm">
                {card.date}
              </p>
              <p className="text-[var(--accent)] italic font-[family-name:var(--font-jetbrains)] text-sm mb-3">
                Responsibilities
              </p>
              <ul className="space-y-3 text-[var(--text)]/85">
                {card.responsibilities.map((r, i) => (
                  <li key={i} className="flex gap-3 leading-relaxed">
                    <span className="text-[var(--accent)] mt-1.5 text-xs">
                      &#9632;
                    </span>
                    <span className="text-base">{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 flex justify-center">
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-6 py-3 bg-[var(--accent)] hover:bg-[var(--highlight)] text-[var(--bg)] font-[family-name:var(--font-jetbrains)] text-sm rounded-full transition-colors"
        >
          <span>download full resume.pdf</span>
          <span>&#8595;</span>
        </a>
      </div>
    </section>
  );
}
