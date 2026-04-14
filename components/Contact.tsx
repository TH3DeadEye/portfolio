"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState, FormEvent } from "react";
import { gsap } from "@/lib/gsap";
import TitleHeader from "./TitleHeader";

const ContactScene = dynamic(() => import("./ContactScene"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <p className="text-[var(--muted-dim)] font-[family-name:var(--font-jetbrains)] text-xs">
        loading 3D scene...
      </p>
    </div>
  ),
});

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [status, setStatus] = useState<"idle" | "sent">("idle");
  const [values, setValues] = useState({ name: "", email: "", message: "" });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".contact-reveal").forEach((el) => {
        gsap.from(el, {
          y: 40,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${values.name}`);
    const body = encodeURIComponent(
      `${values.message}\n\n— ${values.name} (${values.email})`
    );
    window.location.href = `mailto:armanmilani84@gmail.com?subject=${subject}&body=${body}`;
    setStatus("sent");
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative w-full px-5 md:px-10 py-32 border-t border-[var(--border-soft)]"
    >
      <TitleHeader
        number="05 / get in touch"
        sub="Let's build something good"
        title="Say hi — I actually read these."
      />

      <div className="mt-20 max-w-6xl mx-auto grid grid-cols-1 xl:grid-cols-12 gap-10 xl:gap-16 items-stretch">
        {/* Left — form */}
        <div className="contact-reveal xl:col-span-5 card card-border rounded-xl p-8 md:p-10">
          <form onSubmit={onSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="font-[family-name:var(--font-jetbrains)] text-xs text-[var(--accent)]"
              >
                your name
              </label>
              <input
                id="name"
                type="text"
                required
                value={values.name}
                onChange={(e) =>
                  setValues((v) => ({ ...v, name: e.target.value }))
                }
                placeholder="Arman Milani"
                className="bg-[var(--bg)] border border-[var(--border)] rounded-lg px-4 py-3 text-[var(--text)] placeholder:text-[var(--muted-dim)] focus:outline-none focus:border-[var(--highlight)] transition-colors"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="font-[family-name:var(--font-jetbrains)] text-xs text-[var(--accent)]"
              >
                your email
              </label>
              <input
                id="email"
                type="email"
                required
                value={values.email}
                onChange={(e) =>
                  setValues((v) => ({ ...v, email: e.target.value }))
                }
                placeholder="armanmilani84@gmail.com"
                className="bg-[var(--bg)] border border-[var(--border)] rounded-lg px-4 py-3 text-[var(--text)] placeholder:text-[var(--muted-dim)] focus:outline-none focus:border-[var(--highlight)] transition-colors"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="message"
                className="font-[family-name:var(--font-jetbrains)] text-xs text-[var(--accent)]"
              >
                your message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={values.message}
                onChange={(e) =>
                  setValues((v) => ({ ...v, message: e.target.value }))
                }
                placeholder="tell me what you're building..."
                className="bg-[var(--bg)] border border-[var(--border)] rounded-lg px-4 py-3 text-[var(--text)] placeholder:text-[var(--muted-dim)] focus:outline-none focus:border-[var(--highlight)] transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center gap-3 px-6 py-3 bg-[var(--accent)] hover:bg-[var(--highlight)] text-[var(--bg)] font-[family-name:var(--font-jetbrains)] text-sm rounded-full transition-colors"
            >
              <span>{status === "sent" ? "opening mail..." : "send message"}</span>
              <span>&rarr;</span>
            </button>

            <div className="pt-6 border-t border-[var(--border-soft)] flex flex-col gap-2 text-sm font-[family-name:var(--font-jetbrains)] text-[var(--muted)]">
              <a
                href="mailto:armanmilani84@gmail.com"
                className="hover:text-[var(--highlight)] transition-colors"
              >
                armanmilani84@gmail.com
              </a>
              <a
                href="https://linkedin.com/in/armanmilani"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--highlight)] transition-colors"
              >
                linkedin.com/in/armanmilani
              </a>
              <a
                href="https://github.com/armanmilani84"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--highlight)] transition-colors"
              >
                github.com/th3deadeye
              </a>
            </div>
          </form>
        </div>

        {/* Right — 3D scene */}
        <div className="contact-reveal xl:col-span-7 card card-border rounded-xl overflow-hidden min-h-[400px] md:min-h-[500px] xl:min-h-full">
          <ContactScene />
        </div>
      </div>
    </section>
  );
}
