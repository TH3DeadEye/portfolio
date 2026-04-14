"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    if (!dot) return;

    const xTo = gsap.quickTo(dot, "x", { duration: 0.25, ease: "power3.out" });
    const yTo = gsap.quickTo(dot, "y", { duration: 0.25, ease: "power3.out" });

    const onMove = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    const onEnterInteractive = () => dot.classList.add("hovering");
    const onLeaveInteractive = () => dot.classList.remove("hovering");

    window.addEventListener("mousemove", onMove);

    const interactive = document.querySelectorAll(
      "a, button, input, .skill-tag, .project-card, .ach-card"
    );
    interactive.forEach((el) => {
      el.addEventListener("mouseenter", onEnterInteractive);
      el.addEventListener("mouseleave", onLeaveInteractive);
    });

    return () => {
      window.removeEventListener("mousemove", onMove);
      interactive.forEach((el) => {
        el.removeEventListener("mouseenter", onEnterInteractive);
        el.removeEventListener("mouseleave", onLeaveInteractive);
      });
    };
  }, []);

  return <div ref={dotRef} className="cursor-dot" aria-hidden="true" />;
}
