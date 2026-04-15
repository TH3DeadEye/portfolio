"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import TitleHeader from "./TitleHeader";

type Skill = {
  name: string;
  icon?: string;
};

const rowOne: Skill[] = [
  { name: "Python", icon: "/images/logos/python.svg" },
  { name: "TypeScript", icon: "/images/logos/typescript.svg" },
  { name: "JavaScript", icon: "/images/logos/javascript.svg" },
  { name: "Next.js", icon: "/images/logos/nextjs.svg" },
  { name: "React", icon: "/images/logos/react.png" },
  { name: "FastAPI", icon: "/images/logos/fastapi.svg" },
  { name: "Node.js", icon: "/images/logos/node.png" },
  { name: "Tailwind CSS", icon: "/images/logos/tailwind.svg" },
  { name: "GSAP", icon: "/images/logos/gsap.svg" },
  { name: "Three.js", icon: "/images/logos/three.png" },
];

const rowTwo: Skill[] = [
  { name: "PostgreSQL", icon: "/images/logos/postgresql.svg" },
  { name: "Supabase", icon: "/images/logos/supabase.svg" },
  { name: "AWS Bedrock", icon: "/images/logos/aws.svg" },
  { name: "AWS Lambda", icon: "/images/logos/awslambda.svg" },
  { name: "Google Cloud", icon: "/images/logos/googlecloud.svg" },
  { name: "Vercel", icon: "/images/logos/vercel.svg" },
  { name: "MongoDB", icon: "/images/logos/mongodb.svg" },
  { name: "REST APIs" },
  { name: "RAG" },
  { name: "CI/CD" },
  { name: "Git", icon: "/images/logos/git.svg" },
  { name: "Agile" },
];

function SkillPill({ skill }: { skill: Skill }) {
  return (
    <div className="skill-pill flex items-center gap-3 px-6 py-3 border border-[var(--border)] rounded-full bg-[var(--surface)] whitespace-nowrap">
      {skill.icon && (
        <div className="relative w-5 h-5 shrink-0">
          <Image
            src={skill.icon}
            alt={skill.name}
            fill
            className="object-contain"
            sizes="20px"
          />
        </div>
      )}
      <span className="font-[family-name:var(--font-jetbrains)] text-sm text-[var(--text)]">
        {skill.name}
      </span>
    </div>
  );
}

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const rowOneRef = useRef<HTMLDivElement>(null);
  const rowTwoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (rowOneRef.current) {
        gsap.to(rowOneRef.current, {
          xPercent: -50,
          duration: 40,
          ease: "none",
          repeat: -1,
        });
      }
      if (rowTwoRef.current) {
        gsap.fromTo(
          rowTwoRef.current,
          { xPercent: -50 },
          {
            xPercent: 0,
            duration: 45,
            ease: "none",
            repeat: -1,
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative w-full py-32 border-t border-[var(--border-soft)] overflow-hidden"
    >
      <div className="px-5 md:px-10">
        <TitleHeader
          number="03 / stack"
          sub="Tools I reach for"
          title="The stack that ships."
        />
      </div>

      <div className="mt-20 relative">
        {/* Fade masks on edges */}
        <div className="absolute inset-y-0 left-0 w-24 md:w-40 z-10 pointer-events-none bg-gradient-to-r from-[var(--bg)] to-transparent" />
        <div className="absolute inset-y-0 right-0 w-24 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-[var(--bg)] to-transparent" />

        <div className="overflow-hidden">
          <div ref={rowOneRef} className="flex gap-4 w-max will-change-transform">
            {[...rowOne, ...rowOne].map((s, i) => (
              <SkillPill key={`r1-${i}`} skill={s} />
            ))}
          </div>
        </div>

        <div className="overflow-hidden mt-6">
          <div ref={rowTwoRef} className="flex gap-4 w-max will-change-transform">
            {[...rowTwo, ...rowTwo].map((s, i) => (
              <SkillPill key={`r2-${i}`} skill={s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
