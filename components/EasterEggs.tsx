"use client";

import { useEffect } from "react";

const KONAMI = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

const AWAY_TITLES = [
  "come back :(",
  "wait, where are you going",
  "i was about to hire you",
  "psst... over here",
  "miss u already",
];

export default function EasterEggs() {
  useEffect(() => {
    // 1. Console message for the devs who actually inspect
    const styleBig =
      "font-family: monospace; font-size: 14px; color: #89986D; line-height: 1.3;";
    const styleMuted =
      "font-family: monospace; font-size: 12px; color: #5C664A;";
    const styleAccent =
      "font-family: monospace; font-size: 12px; color: #5A6A3F; font-weight: bold;";

    console.log(
      `%c
   █████╗ ██████╗ ███╗   ███╗ █████╗ ███╗   ██╗
  ██╔══██╗██╔══██╗████╗ ████║██╔══██╗████╗  ██║
  ███████║██████╔╝██╔████╔██║███████║██╔██╗ ██║
  ██╔══██║██╔══██╗██║╚██╔╝██║██╔══██║██║╚██╗██║
  ██║  ██║██║  ██║██║ ╚═╝ ██║██║  ██║██║ ╚████║
  ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝
      `,
      styleBig
    );
    console.log(
      "%chey, nice to see a fellow inspector in here 👀",
      styleMuted
    );
    console.log(
      "%cbuilt with: %cnext.js · typescript · tailwind · gsap · vercel",
      styleMuted,
      styleAccent
    );
    console.log(
      "%cfun fact: there are 3 easter eggs on this site. you just found one.",
      styleMuted
    );
    console.log(
      "%chint: try the konami code. you know the one. ↑↑↓↓←→←→ba",
      styleAccent
    );
    console.log(
      "%cif you're hiring: armanmilani84@gmail.com",
      styleMuted
    );

    // 2. Tab-blur title swap — ask them to come back
    const originalTitle = document.title;
    let awayIndex = 0;

    const onBlur = () => {
      document.title = AWAY_TITLES[awayIndex % AWAY_TITLES.length];
      awayIndex++;
    };
    const onFocus = () => {
      document.title = originalTitle;
    };

    window.addEventListener("blur", onBlur);
    window.addEventListener("focus", onFocus);

    // 3. Konami code → mint confetti rain + console praise
    let buffer: string[] = [];

    const dropConfetti = () => {
      const count = 60;
      const colors = ["#89986D", "#9CAB84", "#C5D89D", "#5A6A3F"];
      for (let i = 0; i < count; i++) {
        const dot = document.createElement("div");
        dot.className = "confetti-dot";
        dot.style.left = `${Math.random() * 100}vw`;
        dot.style.background =
          colors[Math.floor(Math.random() * colors.length)];
        dot.style.width = `${6 + Math.random() * 10}px`;
        dot.style.height = dot.style.width;
        dot.style.animationDuration = `${1.5 + Math.random() * 2}s`;
        dot.style.animationDelay = `${Math.random() * 0.8}s`;
        document.body.appendChild(dot);
        setTimeout(() => dot.remove(), 5000);
      }
      console.log(
        "%c🎉 up up down down left right left right b a — you beautiful nerd",
        "font-family: monospace; color: #5A6A3F; font-size: 14px; font-weight: bold;"
      );
    };

    const onKey = (e: KeyboardEvent) => {
      buffer.push(e.key);
      if (buffer.length > KONAMI.length) {
        buffer = buffer.slice(-KONAMI.length);
      }
      if (buffer.length === KONAMI.length) {
        const match = buffer.every(
          (k, i) => k.toLowerCase() === KONAMI[i].toLowerCase()
        );
        if (match) {
          dropConfetti();
          buffer = [];
        }
      }
    };

    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("blur", onBlur);
      window.removeEventListener("focus", onFocus);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  return null;
}
