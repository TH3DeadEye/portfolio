import type { Metadata } from "next";
import { Syne, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Arman Milani — Software Engineer",
  description:
    "Portfolio of Arman Milani, software engineering student at George Brown College and AI Developer at Darsoon Inc. Full-stack developer working in Python, TypeScript, and AWS.",
  keywords: [
    "Arman Milani",
    "Software Engineer",
    "AI Developer",
    "Full Stack",
    "Python",
    "TypeScript",
    "Next.js",
    "AWS",
    "George Brown College",
  ],
  authors: [{ name: "Arman Milani" }],
  openGraph: {
    title: "Arman Milani — Software Engineer",
    description:
      "Full-stack software engineer & AI developer. Python, TypeScript, AWS, Next.js.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${dmSans.variable} ${jetbrains.variable}`}
    >
      <body className="grain">{children}</body>
    </html>
  );
}
