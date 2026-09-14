"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  GraduationCap,
  MapPin,
  Sparkles,
  Award,
  Terminal,
  Activity,
  Database,
  Mail,
  CheckCircle2,
  Layout,
  Server,
} from "lucide-react";
import { Icons } from "./Icons";

export const About: React.FC = () => {
  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Professional Background</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
          Engineering Dynamic, High-Performance{" "}
          <span className="gradient-text-neon">Web Experiences</span>
        </h2>
        <p className="mt-3 text-zinc-400 max-w-2xl text-sm sm:text-base">
          Results-driven Full Stack Developer specializing in React.js, Next.js, and dynamic frontend
          architectures with robust RESTful backend integrations.
        </p>
      </div>

      {/* 2-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Interactive Portrait & Holographic Frame */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 flex flex-col gap-5"
        >
          {/* Main Visual Card */}
          <div className="relative rounded-3xl p-1 bg-gradient-to-b from-purple-500/40 via-indigo-500/20 to-cyan-500/40 shadow-[0_0_50px_-10px_rgba(168,85,247,0.3)]">
            <div className="relative rounded-[22px] bg-[#0c0d16] p-6 overflow-hidden border border-white/10">
              {/* Subtle background glow inside card */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-600/15 rounded-full blur-3xl pointer-events-none" />

              {/* Top Bar of Portrait Container */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-zinc-400 bg-white/5 px-2.5 py-1 rounded-md border border-white/5">
                  <Terminal className="w-3 h-3 text-purple-400" />
                  <span>anish_sharma.profile</span>
                </div>
              </div>

              {/* Actual Portrait Photo with Holographic Neon Rings */}
              <div className="relative mx-auto w-56 h-72 sm:w-64 sm:h-80 rounded-2xl flex items-center justify-center p-1.5 mb-6 group">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-cyan-500 animate-pulse-slow opacity-80 blur-md" />
                
                <div className="relative w-full h-full rounded-2xl bg-[#090a12] border-2 border-purple-500/40 overflow-hidden shadow-2xl flex flex-col justify-end">
                  <Image
                    src="/anish.png"
                    alt="Anish Sharma - Full Stack Developer"
                    fill
                    sizes="(max-width: 640px) 240px, 280px"
                    priority
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Gradient Vignette over image bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#090a12] via-[#090a12]/70 to-transparent flex flex-col justify-end p-3.5 text-left z-10">
                    <span className="font-bold text-white text-base tracking-tight drop-shadow-md">
                      Anish Sharma
                    </span>
                    <span className="text-[11px] font-mono text-cyan-300 drop-shadow">
                      Full Stack Web Developer
                    </span>
                  </div>
                </div>

                {/* Floating Tech Chips */}
                <div className="absolute -bottom-3 -left-3 bg-[#12131f] border border-purple-500/50 text-purple-300 text-[10px] font-mono px-3 py-1.5 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.8)] flex items-center gap-1.5 z-20 backdrop-blur-md">
                  <Activity className="w-3.5 h-3.5 text-purple-400" />
                  <span>React.js / Next.js</span>
                </div>
                <div className="absolute -top-3 -right-3 bg-[#12131f] border border-cyan-500/50 text-cyan-300 text-[10px] font-mono px-3 py-1.5 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.8)] flex items-center gap-1.5 z-20 backdrop-blur-md">
                  <Database className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Node / MongoDB / SQL</span>
                </div>
              </div>

              {/* Developer Metadata Grid */}
              <div className="space-y-2.5 text-xs text-zinc-300 font-sans">
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                  <span className="text-zinc-400 flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-pink-400" />
                    Location
                  </span>
                  <span className="font-medium text-white">Dhanbad, Jharkhand, India</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                  <span className="text-zinc-400 flex items-center gap-2">
                    <GraduationCap className="w-3.5 h-3.5 text-purple-400" />
                    Education
                  </span>
                  <span className="font-medium text-white">B.Tech CSE (2022–2026)</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                  <span className="text-zinc-400 flex items-center gap-2">
                    <Award className="w-3.5 h-3.5 text-cyan-400" />
                    Certification
                  </span>
                  <span className="font-mono text-[11px] text-cyan-300">IRC 4.0 - NxtWave CCBP</span>
                </div>
              </div>

              {/* Action Buttons inside Card */}
              <div className="grid grid-cols-2 gap-2 mt-5">
                <a
                  href="#contact"
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-purple-600/20 hover:bg-purple-600/30 border border-purple-500/30 text-purple-300 text-xs font-semibold transition-all"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Email Anish</span>
                </a>
                <a
                  href="https://linkedin.com/in/anish-sharma-363b6b278"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 text-xs font-semibold transition-all hover:text-white"
                >
                  <Icons.linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn Profile</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Bio Highlight Cards */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 flex flex-col gap-4"
        >
          {/* Highlight 1: React.js & Next.js Architecture */}
          <div className="group relative p-6 rounded-2xl bg-[#0e1019]/80 border border-white/8 backdrop-blur-xl transition-all duration-300 hover:bg-[#131522] hover:border-purple-500/40 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/25 text-purple-400 group-hover:scale-110 group-hover:bg-purple-500/20 transition-all">
                <Layout className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-white group-hover:text-purple-300 transition-colors">
                    React.js & Dynamic Frontend Engineering
                  </h3>
                  <span className="text-[10px] font-mono uppercase bg-purple-500/10 text-purple-300 px-2 py-0.5 rounded border border-purple-500/20">
                    Core Specialization
                  </span>
                </div>
                <p className="mt-2 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  Specializing in component architecture, state management with React Hooks & Context API,
                  re-render optimization using memoization, dynamic routing, and accessible responsive layouts.
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {["React.js", "Next.js", "JavaScript (ES6+)", "TypeScript", "Tailwind CSS", "Bootstrap", "Flexbox & Grid"].map((t) => (
                    <span key={t} className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white/[0.04] text-zinc-300 border border-white/5">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Highlight 2: Full-Stack APIs & Data Management */}
          <div className="group relative p-6 rounded-2xl bg-[#0e1019]/80 border border-white/8 backdrop-blur-xl transition-all duration-300 hover:bg-[#131522] hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(56,189,248,0.15)]">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all">
                <Server className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                    RESTful API Integrations & Backend Services
                  </h3>
                  <span className="text-[10px] font-mono uppercase bg-cyan-500/10 text-cyan-300 px-2 py-0.5 rounded border border-cyan-500/20">
                    Full-Stack
                  </span>
                </div>
                <p className="mt-2 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  Skilled in engineering Node.js and Express.js backend services, connecting MongoDB and SQL databases,
                  implementing clean business logic, and optimizing end-to-end data pipelines.
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {["Node.js", "Express.js", "MongoDB", "SQL", "RESTful APIs", "Postman", "CRUD Operations"].map((t) => (
                    <span key={t} className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white/[0.04] text-zinc-300 border border-white/5">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Highlight 3: Education & Intensive Bootcamp Training */}
          <div className="group relative p-6 rounded-2xl bg-[#0e1019]/80 border border-white/8 backdrop-blur-xl transition-all duration-300 hover:bg-[#131522] hover:border-pink-500/40 hover:shadow-[0_0_30px_rgba(236,72,153,0.15)]">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-pink-500/10 border border-pink-500/25 text-pink-400 group-hover:scale-110 group-hover:bg-pink-500/20 transition-all">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-white group-hover:text-pink-300 transition-colors">
                    Computer Science Degree & Industry Certifications
                  </h3>
                  <span className="text-[10px] font-mono uppercase bg-pink-500/10 text-pink-300 px-2 py-0.5 rounded border border-pink-500/20">
                    Credentials
                  </span>
                </div>
                <div className="mt-3 space-y-2 text-xs text-zinc-300">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>B.Tech in CSE</strong> — Ramgarh Engineering College (2022–2026, CGPA: 6.5)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <span><strong>Industry Ready Certification (IRC 4.0)</strong> — NxtWave CCBP (Sept 2022 – Sept 2023)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span><strong>Certifications</strong>: CSIR-CIMFR Research, Flexbox Responsive Design, JavaScript Essentials</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
