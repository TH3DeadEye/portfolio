"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

const subtitleSegments: { text: string; highlight: boolean }[] = [
  { text: "Software engineer building ", highlight: false },
  { text: "full-stack", highlight: true },
  { text: " & ", highlight: false },
  { text: "AI-powered", highlight: true },
  { text: " products.", highlight: false },
];

export default function Hero() {
  const nameRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const caretRef = useRef<HTMLSpanElement>(null);
  const bioRef = useRef<HTMLDivElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const name = nameRef.current;
    if (!name) return;

    const text = name.textContent || "";
    name.innerHTML = text
      .split("")
      .map((char) =>
        char === " "
          ? `<span class="inline-block w-[0.3em]"></span>`
          : `<span class="inline-block char">${char}</span>`
      )
      .join("");

    const chars = name.querySelectorAll(".char");
    const typeChars = subtitleRef.current?.querySelectorAll(".type-char") ?? [];

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(chars, {
      y: 80,
      opacity: 0,
      rotateX: -90,
      stagger: 0.04,
      duration: 0.9,
    })
      .set(caretRef.current, { opacity: 1 }, "-=0.2")
      .to(
        typeChars,
        {
          opacity: 1,
          duration: 0.01,
          stagger: 0.035,
          ease: "steps(1)",
        },
        "-=0.1"
      )
      .from(
        bioRef.current,
        { y: 20, opacity: 0, duration: 0.8 },
        "-=0.3"
      )
      .from(
        metaRef.current?.children || [],
        { y: 20, opacity: 0, stagger: 0.1, duration: 0.6 },
        "-=0.5"
      );

    if (glowRef.current) {
      gsap.to(glowRef.current, {
        scale: 1.15,
        opacity: 0.6,
        duration: 4,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
    }
  }, []);

  return (
    <section
      id="profile"
      className="relative min-h-screen flex items-center justify-center px-6 md:px-10 pt-24 pb-20"
    >
      <div
        ref={glowRef}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full opacity-60 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(197,216,157,0.7) 0%, rgba(156,171,132,0.35) 40%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div className="relative max-w-4xl w-full z-10">
        <p className="font-[family-name:var(--font-jetbrains)] text-xs md:text-sm text-[var(--accent)] mb-6 flex items-center gap-3">
          <span className="inline-block w-8 h-px bg-[var(--accent)]" />
          hello, I&apos;m
        </p>
        <h1
          ref={nameRef}
          className="font-[family-name:var(--font-syne)] font-bold text-5xl sm:text-6xl md:text-8xl leading-[0.95] tracking-tight text-[var(--text)] mb-6"
        >
          Arman Milani
        </h1>
        <p
          ref={subtitleRef}
          className="font-[family-name:var(--font-syne)] text-xl md:text-3xl text-[var(--muted)] mb-10 leading-snug min-h-[2.5em]"
        >
          {subtitleSegments.map((seg, i) => (
            <span
              key={i}
              className={seg.highlight ? "text-[var(--highlight)]" : ""}
            >
              {seg.text.split("").map((ch, j) => (
                <span
                  key={j}
                  className="type-char inline-block whitespace-pre opacity-0"
                >
                  {ch}
                </span>
              ))}
            </span>
          ))}
          <span
            ref={caretRef}
            className="type-caret inline-block w-[2px] h-[0.9em] ml-1 bg-[var(--highlight)] align-[-0.1em] opacity-0"
            aria-hidden="true"
          />
        </p>
        <div
          ref={bioRef}
          className="max-w-2xl text-base md:text-lg text-[var(--muted-dim)] leading-relaxed mb-10"
        >
          <p>
            I&apos;m in my final stretch at George Brown College studying Computer
            Programming &amp; Analysis, and I spend my days at Darsoon Inc. as an
            AI Developer &mdash; writing Python, TypeScript, and a fair amount
            of SQL. I like when things ship, and I like when they&apos;re
            actually correct.
          </p>
        </div>
        <div
          ref={metaRef}
          className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-[family-name:var(--font-jetbrains)] text-[var(--muted)]"
        >
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[var(--highlight)] animate-pulse" />
            Toronto, ON
          </span>
          <span className="text-[var(--border)]">/</span>
          <a
            href="mailto:armanmilani84@gmail.com"
            className="hover:text-[var(--highlight)] transition-colors"
          >
            armanmilani84@gmail.com
          </a>
          <span className="text-[var(--border)]">/</span>
          <a
            href="#resume"
            className="hover:text-[var(--highlight)] transition-colors"
          >
            see my work &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
