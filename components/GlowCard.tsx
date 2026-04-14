"use client";

import { useRef, MouseEvent, ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function GlowCard({ children, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = ref.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
    angle = (angle + 360) % 360;

    card.style.setProperty("--start", String(angle + 60));
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className={`card card-border timeline-card rounded-xl p-6 md:p-8 break-inside-avoid-column flex flex-col h-full ${className}`}
    >
      <div className="glow" />
      {children}
    </div>
  );
}
