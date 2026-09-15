"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Sparkles,
  CheckCircle2,
  ChevronRight,
  Code2,
  ShoppingCart,
  CheckSquare,
  Bot,
  Zap,
} from "lucide-react";
import { Icons } from "./Icons";

interface Project {
  id: string;
  title: string;
  category: "all" | "react" | "fullstack" | "ai";
  categoryLabel: string;
  year: string;
  description: string;
  longDescription: string;
  tags: string[];
  metrics: { label: string; value: string };
  demoUrl: string;
  githubUrl: string;
  gradient: string;
  accentBorder: string;
  previewCode: string;
  highlights: string[];
}

const projectsData: Project[] = [
  {
    id: "project-1",
    title: "Viral Landing Page Application (Raj Viral)",
    category: "react",
    categoryLabel: "High-Conversion Web",
    year: "2024",
    description:
      "Designed and developed a responsive viral landing page built for maximum campaign engagement and rapid user acquisition.",
    longDescription:
      "Engineered with React.js and CSS3 with optimized asset loading, silky 60fps animations, DOM rendering optimizations for mobile devices, interactive lead capture forms, and analytics tracking.",
    tags: ["React.js", "Next.js", "High-Conversion UX", "CSS3", "Lead Capture", "Responsive Design"],
    metrics: { label: "Engagement", value: "High Conversion" },
    demoUrl: "https://developer3memasco.github.io/myportfoli/rajviral",
    githubUrl: "https://github.com/developer3memasco/myportfoli",
    gradient: "from-purple-900/40 via-indigo-900/30 to-violet-950/50",
    accentBorder: "group-hover:border-purple-500/50",
    previewCode: "// High-Conversion Engagement Engine\nconst [leadCaptured, setLeadCaptured] = useState(false);\nconst handleViralShare = async (data) => {\n  await trackAnalytics('campaign_signup', data);\n  triggerRewardFlow();\n};",
    highlights: [
      "Optimized asset loading, animations & DOM rendering",
      "Interactive UI elements & conversion-focused lead capture",
      "Strict mobile-first responsive layout with fast interaction",
    ],
  },
  {
    id: "project-2",
    title: "E-Commerce Dynamic Web Application",
    category: "react",
    categoryLabel: "Full-Featured Web",
    year: "2023",
    description:
      "A complete e-commerce platform with real-time product search, dynamic category filtering, cart management, and seamless checkout logic.",
    longDescription:
      "Built with React.js, REST API integrations, and CSS Grid. Refactored layout architecture with lazy loading to drastically cut page load times and improve Core Web Vitals.",
    tags: ["React.js", "REST API", "CSS Grid", "State Management", "Cart Logic", "Lazy Loading"],
    metrics: { label: "Performance", value: "Sub-Second Load" },
    demoUrl: "https://example.com/ecommerce-demo",
    githubUrl: "https://github.com/anish-sharma",
    gradient: "from-cyan-900/40 via-blue-900/30 to-slate-950/50",
    accentBorder: "group-hover:border-cyan-500/50",
    previewCode: "// Dynamic Filter & Cart Dispatcher\nconst filteredProducts = useMemo(() => {\n  return products.filter(p => \n    p.category.includes(selectedCategory) && \n    p.price <= maxBudget\n  );\n}, [products, selectedCategory, maxBudget]);",
    highlights: [
      "Instant product search & multi-parameter dynamic filtering",
      "Persistent cart state with quantity adjustments & pricing totals",
      "Lazy loading & image optimization for lightning-fast loads",
    ],
  },
  {
    id: "project-3",
    title: "Interactive Task Management Dashboard",
    category: "react",
    categoryLabel: "Productivity App",
    year: "2023",
    description:
      "Full-featured productivity dashboard supporting full CRUD operations, task prioritization, status filtering, and local data persistence.",
    longDescription:
      "Engineered with React.js, LocalStorage, and advanced React lifecycle hooks. Optimized React component re-renders through targeted memoization and lightweight state dispatchers.",
    tags: ["React.js", "JavaScript (ES6+)", "LocalStorage", "Memoization", "CRUD", "Custom Hooks"],
    metrics: { label: "Re-Render Speed", value: "Zero Lag (60fps)" },
    demoUrl: "https://example.com/task-dashboard",
    githubUrl: "https://github.com/anish-sharma",
    gradient: "from-pink-900/40 via-purple-900/30 to-zinc-950/50",
    accentBorder: "group-hover:border-pink-500/50",
    previewCode: "// Memoized Task Lifecycle Handler\nconst handleTaskStatusUpdate = useCallback((id, status) => {\n  setTasks(prev => prev.map(t => \n    t.id === id ? { ...t, status, updatedAt: Date.now() } : t\n  ));\n}, []);",
    highlights: [
      "Complete CRUD capabilities with priority tags & deadline reminders",
      "LocalStorage persistence for continuous offline productivity",
      "React memoization to eliminate unnecessary component re-renders",
    ],
  },
  {
    id: "project-4",
    title: "AI / LLM Workflow Playground & Copilot",
    category: "ai",
    categoryLabel: "AI & Next.js",
    year: "2024",
    description:
      "Modern AI studio showcasing LLM prompt engineering, dynamic context injection, streaming token telemetry, and interactive agent assistance.",
    longDescription:
      "Developed with Next.js 14, Tailwind CSS, and API integrations. Provides a sandbox environment for testing generative AI prompts and structured JSON outputs.",
    tags: ["Next.js 14", "React.js", "Tailwind CSS", "OpenAI API", "Framer Motion", "TypeScript"],
    metrics: { label: "Inference UI", value: "Real-time Stream" },
    demoUrl: "#ai-demo",
    githubUrl: "https://github.com/anish-sharma",
    gradient: "from-emerald-900/40 via-teal-900/30 to-zinc-950/50",
    accentBorder: "group-hover:border-emerald-500/50",
    previewCode: "// AI Copilot Streaming Gateway\nconst response = await fetch('/api/copilot', {\n  method: 'POST',\n  body: JSON.stringify({ prompt, temperature: 0.7 })\n});",
    highlights: [
      "Interactive prompt playground with live typing simulation",
      "Dark futuristic glassmorphic UI with micro-interactions",
      "Structured output parsing and quick preset chips",
    ],
  },
];

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<"all" | "react" | "ai">("all");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredProjects = projectsData.filter((p) =>
    activeFilter === "all" ? true : p.category === activeFilter
  );

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-10 w-[550px] h-[350px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      {/* Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-300 text-xs font-mono uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Featured Projects</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
          Real-World Applications & <span className="gradient-text-hero">Platforms</span>
        </h2>
        <p className="mt-3 text-zinc-400 max-w-2xl text-sm sm:text-base">
          A showcase of high-impact web applications, viral landing pages, e-commerce architectures,
          and interactive dashboards engineered with React.js and modern technologies.
        </p>

        {/* Category Filters */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-full bg-[#0d0e17] border border-white/10 backdrop-blur-xl">
          {[
            { id: "all", label: "All Projects" },
            { id: "react", label: "React.js & Web Apps" },
            { id: "ai", label: "AI & Next.js" },
          ].map((tab) => {
            const isSelected = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as any)}
                className={`relative px-4 py-2 rounded-full text-xs font-medium transition-all ${
                  isSelected
                    ? "text-white font-semibold"
                    : "text-zinc-400 hover:text-zinc-200 hover:bg-white/5"
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="activeProjectFilter"
                    className="absolute inset-0 bg-gradient-to-r from-purple-600/40 via-indigo-600/40 to-pink-600/40 border border-purple-500/50 rounded-full shadow-[0_0_20px_rgba(168,85,247,0.3)]"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AnimatePresence>
          {filteredProjects.map((project, idx) => {
            const isExpanded = expandedId === project.id;

            return (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className={`group relative rounded-3xl bg-[#0f1019]/90 border border-white/8 backdrop-blur-xl transition-all duration-300 hover:bg-[#141525] ${project.accentBorder} flex flex-col justify-between overflow-hidden hover:shadow-[0_15px_40px_-15px_rgba(0,0,0,0.8)]`}
              >
                {/* Visual Mock Container / Card Thumbnail Header */}
                <div className={`relative h-48 w-full p-4 bg-gradient-to-br ${project.gradient} border-b border-white/8 overflow-hidden flex flex-col justify-between`}>
                  {/* Glowing background inside mock */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none" />

                  {/* Top Bar of thumbnail */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-[#080910]/80 border border-white/15 text-white/90 backdrop-blur-md">
                      {project.categoryLabel} ({project.year})
                    </span>
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/70 border border-emerald-500/30 text-emerald-300 text-[10px] font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>{project.metrics.value}</span>
                    </div>
                  </div>

                  {/* Code snippet / Visual graphic representation */}
                  <div className="relative z-10 p-2.5 rounded-xl bg-[#080910]/85 border border-white/10 font-mono text-[11px] text-zinc-300 overflow-hidden shadow-inner backdrop-blur-md">
                    <pre className="text-[10.5px] leading-relaxed text-purple-200/90 whitespace-pre-wrap">
                      <code>{project.previewCode}</code>
                    </pre>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors leading-snug">
                      {project.title}
                    </h3>
                    <p className="mt-2.5 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                      {isExpanded ? project.longDescription : project.description}
                    </p>

                    {/* Architecture highlights pill list */}
                    <div className="mt-4 space-y-1.5">
                      {project.highlights.map((h) => (
                        <div key={h} className="flex items-center gap-2 text-xs text-zinc-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack Tags */}
                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10.5px] font-mono px-2 py-0.5 rounded-md bg-white/[0.04] text-zinc-300 border border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Action Footer */}
                  <div className="mt-6 pt-4 border-t border-white/6 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {project.demoUrl.startsWith("/") ? (
                        <Link
                          href={project.demoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-600/20 hover:bg-purple-600/30 border border-purple-500/30 text-purple-300 text-xs font-semibold transition-all group-hover:scale-105"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Live Demo</span>
                        </Link>
                      ) : (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-600/20 hover:bg-purple-600/30 border border-purple-500/30 text-purple-300 text-xs font-semibold transition-all group-hover:scale-105"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Live Demo</span>
                        </a>
                      )}
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 text-xs font-semibold transition-all hover:text-white"
                      >
                        <Icons.github className="w-3.5 h-3.5" />
                        <span>GitHub</span>
                      </a>
                    </div>

                    <button
                      onClick={() => setExpandedId(isExpanded ? null : project.id)}
                      className="text-[11px] font-mono text-zinc-400 hover:text-purple-300 flex items-center gap-0.5 transition-colors"
                    >
                      <span>{isExpanded ? "Less" : "Details"}</span>
                      <ChevronRight className={`w-3 h-3 transition-transform ${isExpanded ? "rotate-90" : ""}`} />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};
