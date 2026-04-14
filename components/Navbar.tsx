"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";

const links = [
  { href: "#profile", label: "Profile" },
  { href: "#resume", label: "Resume" },
  { href: "#work", label: "Work" },
  /*{ href: "#skills", label: "Skills" },*/
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    gsap.from(nav, {
      y: -60,
      opacity: 0,
      duration: 0.8,
      delay: 0.2,
      ease: "power3.out",
    });

    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      ref={navRef}
      className={`fixed top-4 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-2xl bg-[var(--bg)]/55 border-b border-[var(--border)] shadow-[0_8px_30px_rgba(43,50,30,0.08)]"
          : "backdrop-blur-md bg-[var(--bg)]/80 border-b border-[var(--border-soft)]"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
        <a
          href="#profile"
          className="font-[family-name:var(--font-syne)] font-bold text-xl tracking-tight text-[var(--text)] hover:text-[var(--accent)] transition-colors"
        >
          AM<span className="text-[var(--accent)]">.</span>
        </a>
        <ul className="hidden md:flex items-center gap-5 lg:gap-7 text-sm font-semibold text-[var(--text)]">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="nav-link hover:text-[var(--accent)] transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="hidden lg:inline-block text-sm font-[family-name:var(--font-jetbrains)] font-medium text-[var(--bg)] bg-[var(--accent)] hover:bg-[var(--highlight)] transition-all px-4 py-2 rounded-full"
        >
          get in touch
        </a>
        <a
          href="#profile"
          className="md:hidden text-[var(--accent)] font-[family-name:var(--font-jetbrains)] text-xs font-medium border border-[var(--accent)] px-3 py-1.5 rounded-full"
        >
          menu
        </a>
      </div>
    </nav>
  );
}
