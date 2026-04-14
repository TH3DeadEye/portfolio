"use client";

export default function Footer() {
  return (
    <footer className="relative py-12 px-6 md:px-10 border-t border-[var(--border-soft)]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-[family-name:var(--font-jetbrains)] text-[var(--muted-dim)]">
        <p>© {new Date().getFullYear()} Arman Milani. Toronto, ON.</p>
        <div className="flex gap-6">
          <a
            href="mailto:armanmilani84@gmail.com"
            className="hover:text-[var(--highlight)] transition-colors"
          >
            email
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--highlight)] transition-colors"
          >
            resume
          </a>
          <a
            href="https://github.com/th3deadeye"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--highlight)] transition-colors"
          >
            github
          </a>
          <a
            href="#profile"
            className="hover:text-[var(--highlight)] transition-colors"
          >
            back to top &uarr;
          </a>
        </div>
      </div>
    </footer>
  );
}
