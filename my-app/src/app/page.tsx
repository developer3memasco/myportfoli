import React from "react";
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
import ProjectCard, { ProjectCardProps } from "@/components/ProjectCard";
import { ExternalLink, Layers, Sparkles } from "lucide-react";
import { Icons } from "@/components/Icons";

// Sample project data matching design requirements
const featuredProjectData: ProjectCardProps = {
  title: "E-Commerce Dynamic Web Application",
  subtitle: "Full-Featured Web Architecture",
  description:
    "A complete e-commerce platform with real-time product search, dynamic category filtering, cart management, and seamless checkout logic.",
  status: {
    label: "Sub-Second Load",
    variant: "live",
    pulse: true,
  },
  codeSnippet: {
    fileName: "ecommerce-dispatcher.ts",
    language: "TypeScript",
    code: `// Dynamic Filter & Cart Dispatcher
const filteredProducts = useMemo(() => {
  return products.filter(p => 
    p.category.includes(selectedCategory) && 
    p.price <= maxBudget
  );
}, [products, selectedCategory, maxBudget]);`,
  },
  features: [
    {
      title: "Instant product search & multi-parameter dynamic filtering",
    },
    {
      title: "Persistent cart state with quantity adjustments & pricing totals",
    },
    {
      title: "Lazy loading & image optimization for lightning-fast loads",
    },
  ],
  tags: [
    { name: "React.js", variant: "violet" },
    { name: "REST API", variant: "cyan" },
    { name: "CSS Grid", variant: "secondary" },
    { name: "State Management", variant: "amber" },
    { name: "Cart Logic", variant: "secondary" },
    { name: "Lazy Loading", variant: "secondary" },
  ],
  actions: [
    {
      label: "Live Demo",
      href: "/ecommerce",
      variant: "primary",
      iconRight: <ExternalLink className="h-4 w-4" />,
    },
    {
      label: "GitHub",
      href: "https://github.com/developer3memasco/myportfoli",
      variant: "secondary",
      icon: <Icons.github className="h-4 w-4" />,
    },
  ],
  detailsHref: "#projects",
};

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#070709] text-[#f3f4f6] selection:bg-purple-500/30 selection:text-purple-200">
      {/* Ambient background light orbs */}
      <AmbientBackground />

      {/* Navigation */}
      <Navbar />

      <main className="relative z-10 flex flex-col gap-12">
        <Hero />

        {/* Featured Project Showcase Section */}
        <section id="showcase" className="relative py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full">
          <div className="text-center mb-8 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-violet-500/30 bg-violet-950/40 text-violet-300 text-xs font-mono backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Featured Component Showcase</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Modular <span className="gradient-text-hero">Project Card Organism</span>
            </h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto">
              Rendered dynamically via props with syntax-highlighted terminal box, status badge, feature checklist, and reusable UI atoms.
            </p>
          </div>

          {/* Dynamically Injected ProjectCard Component */}
          <ProjectCard {...featuredProjectData} />
        </section>

        <About />
        <Skills />
        <Projects />
        <AIChatPreview />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
