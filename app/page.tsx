import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import WorkSamples from "@/components/WorkSamples";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";
import EasterEggs from "@/components/EasterEggs";

export default function Home() {
  return (
    <>
      <Cursor />
      <EasterEggs />
      <Navbar />
      <main className="relative">
        <Hero />
        <Experience />
        {/* <WorkSamples /> */}
        <Skills />
        <Achievements />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
