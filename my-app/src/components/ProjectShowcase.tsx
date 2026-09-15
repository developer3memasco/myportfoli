"use client";

import React, { useState } from "react";
import ProjectCard, { ProjectCardProps } from "./ProjectCard";
import { ExternalLink, Code2, Layers, Cpu, Database } from "lucide-react";
import { Icons } from "./Icons";
import { Badge } from "./ui/Badge";
import { Button } from "./ui/Button";

// Example Mock Dataset showcasing dynamic data loading via props
export const sampleProjects: ProjectCardProps[] = [
  {
    title: "OmniFlow AI Engine",
    subtitle: "AI Workflows & Orchestration",
    description:
      "A high-throughput distributed agentic execution pipeline featuring real-time stream processing, dynamic tool routing, and automated failure recovery.",
    status: {
      label: "Live v2.4",
      variant: "live",
      pulse: true,
    },
    codeSnippet: {
      fileName: "agent-router.ts",
      language: "TypeScript",
      code: `import { AgentRunner, ToolRegistry } from '@omniflow/core';

export async function executeWorkflow(task: TaskRequest) {
  const runner = new AgentRunner({ timeoutMs: 5000 });
  runner.registerTools(ToolRegistry.getAvailable());

  const result = await runner.dispatch({
    intent: task.intent,
    context: task.payload,
  });

  return result.output;
}`,
    },
    features: [
      {
        title: "Sub-50ms Event Latency",
        desc: "Optimized with Rust webassembly edge workers",
      },
      {
        title: "Autonomous Tool Calling",
        desc: "Supports dynamic MCP server capabilities",
      },
      {
        title: "Fault-Tolerant Replays",
        desc: "State checkpointing with zero data loss",
      },
      {
        title: "Granular Telemetry",
        desc: "Built-in Prometheus & OpenTelemetry hooks",
      },
    ],
    tags: [
      { name: "Next.js 16", variant: "violet" },
      { name: "TypeScript", variant: "cyan" },
      { name: "Tailwind CSS", variant: "default" },
      { name: "WebAssembly", variant: "amber" },
      { name: "Redis", variant: "secondary" },
    ],
    actions: [
      {
        label: "Live Playground",
        href: "/rajviral",
        variant: "primary",
        iconRight: <ExternalLink className="h-4 w-4" />,
      },
      {
        label: "GitHub Source",
        href: "https://github.com/developer3memasco/myportfoli",
        variant: "secondary",
        icon: <Icons.github className="h-4 w-4" />,
      },
    ],
  },
  {
    title: "HyperScale Vector Database",
    subtitle: "Database Architecture",
    description:
      "Cloud-native indexing engine capable of performing sub-millisecond similarity search across billions of high-dimensional embeddings.",
    status: {
      label: "Beta Release",
      variant: "cyan",
      pulse: true,
    },
    codeSnippet: {
      fileName: "vector_index.rs",
      language: "Rust",
      code: `use hyperscale_core::{HNSWIndex, VectorQuery};

pub fn search_nearest(query_vec: &[f32], k: usize) -> Vec<Match> {
    let index = HNSWIndex::mmap_load("/var/data/index.bin")?;
    let query = VectorQuery::new(query_vec).with_ef_search(128);
    
    index.knn_search(&query, k)
}`,
    },
    features: [
      {
        title: "HNSW Graph Indexing",
        desc: "SIMD hardware accelerated distance calculations",
      },
      {
        title: "Zero-Copy Memory Map",
        desc: "Instant cold start & low memory footprint",
      },
      {
        title: "Horizontal Sharding",
        desc: "Auto-balancing partition keys across nodes",
      },
    ],
    tags: [
      { name: "Rust", variant: "amber" },
      { name: "gRPC", variant: "cyan" },
      { name: "Docker", variant: "secondary" },
      { name: "Kubernetes", variant: "violet" },
    ],
    actions: [
      {
        label: "Explore Benchmarks",
        href: "https://benchmarks.example.com",
        variant: "primary",
        iconRight: <ExternalLink className="h-4 w-4" />,
      },
      {
        label: "View Repository",
        href: "https://github.com/example/hyperscale",
        variant: "secondary",
        icon: <Icons.github className="h-4 w-4" />,
      },
    ],
  },
];

export function ProjectShowcase() {
  const [activeTab, setActiveTab] = useState<"all" | "ai" | "db">("all");

  const filteredProjects = sampleProjects.filter((p) => {
    if (activeTab === "ai") return p.title.includes("Engine");
    if (activeTab === "db") return p.title.includes("Database");
    return true;
  });

  return (
    <section className="w-full min-h-screen bg-slate-950 text-slate-100 py-16 px-4 sm:px-6 lg:px-8 bg-grid-pattern">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Title Section */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-violet-500/30 bg-violet-950/40 text-violet-300 text-xs font-mono backdrop-blur-md">
            <Layers className="h-3.5 w-3.5" />
            <span>Developer Portfolio Project Cards</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight gradient-text-hero">
            High-End Project Component
          </h1>
          <p className="max-w-2xl mx-auto text-base text-slate-400">
            Modular React & Tailwind CSS component featuring dark glassmorphism, interactive code snippet box, dynamic status indicators, feature lists, and dynamic prop injection.
          </p>

          {/* Filter Bar */}
          <div className="pt-4 flex justify-center gap-2">
            <Button
              variant={activeTab === "all" ? "primary" : "secondary"}
              size="sm"
              onClick={() => setActiveTab("all")}
            >
              All Projects ({sampleProjects.length})
            </Button>
            <Button
              variant={activeTab === "ai" ? "primary" : "secondary"}
              size="sm"
              onClick={() => setActiveTab("ai")}
              icon={<Cpu className="h-3.5 w-3.5" />}
            >
              AI Systems
            </Button>
            <Button
              variant={activeTab === "db" ? "primary" : "secondary"}
              size="sm"
              onClick={() => setActiveTab("db")}
              icon={<Database className="h-3.5 w-3.5" />}
            >
              Database
            </Button>
          </div>
        </div>

        {/* Dynamic Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {filteredProjects.map((projectProps, idx) => (
            <ProjectCard key={idx} {...projectProps} />
          ))}
        </div>

        {/* Code Usage Guide Section */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 md:p-8 backdrop-blur-md space-y-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Code2 className="h-5 w-5 text-violet-400" />
            How to Pass Data Dynamically Using Props
          </h2>
          <p className="text-sm text-slate-300">
            Import <code className="text-violet-300 bg-slate-950 px-1.5 py-0.5 rounded font-mono">ProjectCard</code> into your Next.js page or portfolio section and pass your project data dynamically:
          </p>

          <pre className="overflow-x-auto rounded-xl bg-slate-950 p-4 text-xs font-mono text-slate-300 border border-slate-800">
            <code>{`import ProjectCard from '@/components/ProjectCard';

const myProjectData = {
  title: "OmniFlow AI Engine",
  subtitle: "AI Workflows & Orchestration",
  description: "A high-throughput distributed agentic execution pipeline...",
  status: { label: "Live v2.4", variant: "live", pulse: true },
  codeSnippet: {
    fileName: "agent-router.ts",
    language: "TypeScript",
    code: \`import { AgentRunner } from '@omniflow/core';...\`
  },
  features: [
    { title: "Sub-50ms Event Latency", desc: "Optimized with Rust" },
    { title: "Autonomous Tool Calling" }
  ],
  tags: [
    { name: "Next.js 16", variant: "violet" },
    { name: "TypeScript", variant: "cyan" }
  ],
  actions: [
    { label: "Live Playground", href: "https://demo.com", variant: "primary" },
    { label: "GitHub Source", href: "https://github.com", variant: "secondary" }
  ]
};

export default function PortfolioPage() {
  return <ProjectCard {...myProjectData} />;
}`}</code>
          </pre>
        </div>
      </div>
    </section>
  );
}
