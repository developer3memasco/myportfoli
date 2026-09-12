import { AmbientBackground } from "@/components/AmbientBackground";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { AIChatPreview } from "@/components/AIChatPreview";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#070709] text-[#f3f4f6] selection:bg-purple-500/30 selection:text-purple-200">
      {/* Fixed Ambient Light Orbs & Grid Texture */}
      <AmbientBackground />

      {/* Floating Glassmorphic Navigation Pill */}
      <Navbar />

      {/* Main Page Sections */}
      <main className="relative z-10 flex flex-col gap-8">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <AIChatPreview />
        <Experience />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
