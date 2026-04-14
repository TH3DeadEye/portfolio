"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import GlowCard from "./GlowCard";
import TitleHeader from "./TitleHeader";

const items = [
  {
    title: "AWS Certified AI Practitioner",
    issuer: "Amazon Web Services",
    date: "Jan 2026",
    blurb:
      "Validated on AWS cloud services, AI/ML concepts, responsible-AI practices, and designing solutions with S3, Lambda, Bedrock, and SageMaker.",
    badge: "AWS",
  },
  {
    title: "Google Cloud Essentials",
    issuer: "Google Cloud",
    date: "May 2025",
    blurb:
      "Foundations of GCP services, infrastructure primitives, and cloud-native architecture.",
    badge: "GCP",
  },
  {
    title: "Advanced Diploma — Computer Programming & Analysis",
    issuer: "George Brown College (T177)",
    date: "In progress",
    blurb:
      "Software development, database design, and web application coursework — currently holding a 4.00 / 4.00 GPA.",
    badge: "GBC",
  },
  {
    title: "Perfect GPA",
    issuer: "4.00 / 4.00",
    date: "Ongoing",
    blurb:
      "Consistent top academic standing throughout the Computer Programming & Analysis program.",
    badge: "4.0",
  },
];

export default function Achievements() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".ach-card").forEach((el, i) => {
        gsap.from(el, {
          y: 40,
          opacity: 0,
          scale: 0.96,
          duration: 0.8,
          delay: i * 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="achievements"
      className="relative w-full px-5 md:px-10 py-32 border-t border-[var(--border-soft)]"
    >
      <TitleHeader
        number="04 / development & achievements"
        sub="Certifications, degrees, receipts"
        title="The paperwork behind the code."
      />

      <div className="mt-20 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        {items.map((item) => (
          <div key={item.title} className="ach-card h-full">
            <GlowCard>
              <div className="flex items-start justify-between mb-5">
                <div className="w-14 h-14 rounded-full border border-[var(--border)] bg-[var(--bg)] flex items-center justify-center font-[family-name:var(--font-syne)] font-bold text-xs text-[var(--highlight)]">
                  {item.badge}
                </div>
                <span className="text-xs font-[family-name:var(--font-jetbrains)] text-[var(--muted-dim)]">
                  {item.date}
                </span>
              </div>
              <h3 className="font-[family-name:var(--font-syne)] font-semibold text-lg md:text-xl text-[var(--text)] mb-2 leading-snug">
                {item.title}
              </h3>
              <p className="text-[var(--accent)] font-[family-name:var(--font-jetbrains)] text-xs mb-4">
                {item.issuer}
              </p>
              <p className="text-[var(--muted)] text-sm leading-relaxed">
                {item.blurb}
              </p>
            </GlowCard>
          </div>
        ))}
      </div>
    </section>
  );
}
