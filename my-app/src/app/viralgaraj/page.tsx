"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  ChevronUp,
  Cpu,
  Zap,
  Shield,
  Layers,
  Globe,
  BarChart3,
  Bot,
  Terminal,
  CheckCircle2,
  Lock,
  ArrowUpRight,
  Database,
  Rocket,
  Compass,
  Code2,
} from "lucide-react";

export default function ViralgarajLandingPage() {
  const [activeTab, setActiveTab] = useState<"neural" | "cloud" | "security">("neural");
  const [emailInput, setEmailInput] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmailInput("");
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-[#050508] text-[#f3f4f6] selection:bg-purple-500/30 selection:text-white font-sans relative overflow-x-hidden">
      {/* Dynamic Background: Blurred Code, Matrix Grid & Multi-Color Nebulae */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Neon Glow Flares: Cyan, Purple, and Gold */}
        <div className="absolute -top-40 left-1/4 w-[650px] h-[500px] bg-gradient-to-tr from-cyan-500/15 via-blue-600/10 to-transparent rounded-full blur-[160px] animate-pulse-slow" />
        <div className="absolute top-1/3 -right-40 w-[600px] h-[600px] bg-gradient-to-bl from-purple-600/20 via-pink-600/10 to-transparent rounded-full blur-[180px]" />
        <div className="absolute bottom-10 left-10 w-[550px] h-[450px] bg-gradient-to-tr from-amber-500/15 via-yellow-600/10 to-transparent rounded-full blur-[170px]" />

        {/* Subtle Cyber Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_80%)]" />

        {/* Blurred Code Matrix Ambience */}
        <div className="absolute top-20 left-10 text-[11px] font-mono text-cyan-400/10 select-none opacity-40 blur-[1px] leading-relaxed hidden lg:block">
          <code>
            {`import { NeuralCore, QuantumSync } from '@viralgaraj/ai-mesh';
const pipeline = new NeuralCore({ latency: '< 2.4ms', encryption: 'AES-256-GCM' });
await pipeline.orchestrate({ autonomous: true, scale: 'infinite' });`}
          </code>
        </div>
        <div className="absolute bottom-40 right-10 text-[11px] font-mono text-amber-400/10 select-none opacity-40 blur-[1px] leading-relaxed hidden lg:block">
          <code>
            {`// Viralgaraj Enterprise Architecture v4.2
export const cluster = defineCluster({ nodes: 1024, fallback: 'geo-redundant' });
cluster.on('anomaly_detected', autoRemediate);`}
          </code>
        </div>
      </div>

      {/* Navigation Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 sm:pt-6 transition-all duration-300">
        <nav
          className={`w-full max-w-6xl rounded-full transition-all duration-300 flex items-center justify-between px-6 py-3.5 ${
            isScrolled
              ? "bg-[#090a12]/85 backdrop-blur-xl border border-white/10 shadow-[0_10px_35px_-10px_rgba(0,0,0,0.8)]"
              : "bg-[#0d0e1a]/60 backdrop-blur-md border border-white/5"
          }`}
        >
          {/* Brand Logo */}
          <Link href="/viralgaraj" className="flex items-center gap-2.5 group focus:outline-none">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-400 via-purple-500 to-amber-400 p-[1.5px] shadow-[0_0_20px_rgba(168,85,247,0.4)] group-hover:shadow-[0_0_30px_rgba(56,189,248,0.6)] transition-all">
              <div className="w-full h-full bg-[#07070d] rounded-[10px] flex items-center justify-center">
                <Rocket className="w-5 h-5 text-cyan-300 group-hover:scale-110 transition-transform" />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-lg tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                  Viralgaraj
                </span>
                <span className="text-[9px] font-mono font-bold uppercase tracking-widest px-1.5 py-0.5 rounded bg-amber-500/15 text-amber-300 border border-amber-500/30">
                  AI TECH
                </span>
              </div>
            </div>
          </Link>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-6 text-xs font-medium text-zinc-300">
            <a href="#hero" className="hover:text-cyan-300 transition-colors">
              Home
            </a>
            <a href="#solutions" className="hover:text-purple-300 transition-colors">
              Solutions
            </a>
            <a href="#about-us" className="hover:text-amber-300 transition-colors">
              About Us
            </a>
            <a href="#features" className="hover:text-cyan-300 transition-colors">
              Platform
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>

          {/* Action CTA */}
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="text-xs text-zinc-400 hover:text-white transition-colors px-3 py-1.5 rounded-full border border-white/5 hover:border-white/20 hidden sm:inline-block"
            >
              ← Portfolio
            </Link>
            <a
              href="#contact"
              className="relative group px-4 py-2 rounded-full overflow-hidden text-xs font-semibold text-white shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all hover:scale-105"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-600 to-amber-500 group-hover:opacity-90 transition-opacity" />
              <span className="relative flex items-center gap-1.5">
                <span>Launch App</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </a>
          </div>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section
        id="hero"
        className="relative pt-36 sm:pt-44 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto flex flex-col items-center text-center"
      >
        {/* Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#121324]/90 border border-purple-500/30 text-purple-300 text-xs font-mono shadow-[0_0_25px_rgba(168,85,247,0.25)] mb-8 backdrop-blur-xl"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin-slow" />
          <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-300 to-amber-300">
            Next-Gen Autonomous Enterprise AI
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
        </motion.div>

        {/* Bold Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-5xl leading-[1.08]"
        >
          AI-Powered Solutions for a{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-amber-300 drop-shadow-[0_0_35px_rgba(168,85,247,0.4)] block sm:inline">
            Smarter Tomorrow
          </span>
        </motion.h1>

        {/* Descriptive Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-base sm:text-lg lg:text-xl text-zinc-300 max-w-3xl font-normal leading-relaxed"
        >
          Viralgaraj engineers intelligent autonomous architectures, generative pipelines, and
          ultra-resilient cloud infrastructures that unlock exponential scale and transform modern businesses.
        </motion.p>

        {/* Two Prominent Call-to-Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-5"
        >
          {/* Primary CTA: Get Started */}
          <a
            href="#solutions"
            className="relative group px-8 py-4 rounded-full overflow-hidden text-sm sm:text-base font-bold text-white shadow-[0_0_35px_rgba(56,189,248,0.45)] hover:shadow-[0_0_55px_rgba(168,85,247,0.7)] transition-all duration-300 hover:scale-[1.03]"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-600 to-amber-400 group-hover:from-cyan-400 group-hover:to-amber-300 transition-all duration-300" />
            <span className="relative flex items-center gap-2.5">
              <span>Get Started</span>
              <Rocket className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
            </span>
          </a>

          {/* Secondary CTA: Read More */}
          <a
            href="#about-us"
            className="relative group px-8 py-4 rounded-full bg-[#111222]/90 hover:bg-[#181a30] border border-white/15 hover:border-amber-400/50 text-sm sm:text-base font-semibold text-zinc-200 hover:text-white shadow-lg transition-all duration-300 hover:scale-[1.03]"
          >
            <span className="flex items-center gap-2">
              <span>Read More</span>
              <ArrowUpRight className="w-4 h-4 text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </span>
          </a>
        </motion.div>

        {/* Live Key Metrics Bar */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-4 p-5 rounded-3xl bg-[#0e0f1d]/80 border border-white/10 backdrop-blur-xl shadow-2xl"
        >
          <div className="flex flex-col items-center text-center p-2 border-r border-white/5 last:border-0">
            <span className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">
              99.99%
            </span>
            <span className="text-xs font-mono text-zinc-400 mt-1">Uptime Reliability</span>
          </div>
          <div className="flex flex-col items-center text-center p-2 border-r border-white/5 last:border-0">
            <span className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-400">
              10x
            </span>
            <span className="text-xs font-mono text-zinc-400 mt-1">Faster Automation</span>
          </div>
          <div className="flex flex-col items-center text-center p-2 border-r border-white/5 last:border-0">
            <span className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-400">
              500k+
            </span>
            <span className="text-xs font-mono text-zinc-400 mt-1">Inference Requests</span>
          </div>
          <div className="flex flex-col items-center text-center p-2">
            <span className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-400">
              $25M+
            </span>
            <span className="text-xs font-mono text-zinc-400 mt-1">Client Value Generated</span>
          </div>
        </motion.div>
      </section>

      {/* VISUAL CARDS SECTION: TWO CLEAN ROUNDED CONTENT CARDS WITH ABSTRACT 3D ILLUSTRATIONS */}
      <section id="solutions" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Next-Gen Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Architected for <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-amber-300">Peak Velocity</span>
          </h2>
          <p className="mt-3 text-zinc-400 max-w-2xl text-sm sm:text-base">
            Explore our flagship AI and Quantum Cloud engines designed to handle mission-critical corporate workloads.
          </p>
        </div>

        {/* 2 Big Visual Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* Visual Card 1: Autonomous AI Engine */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative rounded-3xl p-1 bg-gradient-to-b from-cyan-500/40 via-purple-500/20 to-transparent shadow-[0_0_50px_-10px_rgba(56,189,248,0.25)] hover:shadow-[0_0_60px_rgba(56,189,248,0.45)] transition-all duration-500"
          >
            <div className="relative rounded-[22px] bg-[#0b0c17] p-6 sm:p-8 overflow-hidden border border-white/10 flex flex-col justify-between h-full">
              {/* Inner ambient glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

              <div>
                {/* Badge & Telemetry */}
                <div className="flex items-center justify-between mb-6">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
                    <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                    <span>NeuralCore v4.5</span>
                  </div>
                  <span className="text-xs font-mono text-zinc-500">LATENCY: &lt;1.8ms</span>
                </div>

                {/* 3D Illustration Container */}
                <div className="relative w-full h-64 sm:h-72 rounded-2xl overflow-hidden mb-6 border border-cyan-500/30 shadow-2xl group-hover:border-cyan-400/60 transition-colors">
                  <Image
                    src="/viralgaraj/ai-engine.jpg"
                    alt="Autonomous Neural AI Core"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Neon Overlay Tag */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c17] via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono bg-[#070810]/85 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10">
                    <span className="text-cyan-300 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      Dynamic Neural Mesh
                    </span>
                    <span className="text-zinc-400">99.8% Accuracy</span>
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  Autonomous AI Neural Engine
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  Self-optimizing machine learning clusters that ingest enterprise telemetry, automate
                  complex decision pipelines, and trigger zero-latency execution cycles.
                </p>

                {/* Feature Bullet Pills */}
                <div className="grid grid-cols-2 gap-2.5 text-xs text-zinc-300 font-mono mb-6">
                  <div className="flex items-center gap-2 p-2 rounded-xl bg-white/[0.03] border border-white/5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>Multi-Agent Swarms</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-xl bg-white/[0.03] border border-white/5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>Real-time RAG Pipeline</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-xl bg-white/[0.03] border border-white/5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>Vector Semantic Search</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-xl bg-white/[0.03] border border-white/5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>Fine-tuned LLM Models</span>
                  </div>
                </div>
              </div>

              {/* Action Link */}
              <a
                href="#contact"
                className="inline-flex items-center justify-between w-full p-3.5 rounded-2xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 font-semibold text-xs tracking-wide transition-all group-hover:border-cyan-400"
              >
                <span>Deploy Neural Core Solutions</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Visual Card 2: Quantum Cloud Infrastructure */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="group relative rounded-3xl p-1 bg-gradient-to-b from-purple-500/40 via-amber-500/20 to-transparent shadow-[0_0_50px_-10px_rgba(168,85,247,0.25)] hover:shadow-[0_0_60px_rgba(245,158,11,0.45)] transition-all duration-500"
          >
            <div className="relative rounded-[22px] bg-[#0b0c17] p-6 sm:p-8 overflow-hidden border border-white/10 flex flex-col justify-between h-full">
              {/* Inner ambient glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

              <div>
                {/* Badge & Telemetry */}
                <div className="flex items-center justify-between mb-6">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono">
                    <Zap className="w-3.5 h-3.5 text-amber-400" />
                    <span>QuantumMesh 2.0</span>
                  </div>
                  <span className="text-xs font-mono text-zinc-500">THROUGHPUT: 1.2M OPS</span>
                </div>

                {/* 3D Illustration Container */}
                <div className="relative w-full h-64 sm:h-72 rounded-2xl overflow-hidden mb-6 border border-amber-500/30 shadow-2xl group-hover:border-amber-400/60 transition-colors">
                  <Image
                    src="/viralgaraj/cloud-scale.jpg"
                    alt="Quantum Cloud Infrastructure"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Neon Overlay Tag */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c17] via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono bg-[#070810]/85 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10">
                    <span className="text-amber-300 flex items-center gap-1.5">
                      <Lock className="w-3 h-3 text-amber-400" />
                      Zero-Trust Quantum Crypto
                    </span>
                    <span className="text-zinc-400">Geo-Distributed</span>
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-amber-300 transition-colors">
                  Quantum Cloud Scalability
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  Hyper-elastic distributed serverless compute capable of instant horizontal scaling,
                  multi-region synchronization, and military-grade data protection.
                </p>

                {/* Feature Bullet Pills */}
                <div className="grid grid-cols-2 gap-2.5 text-xs text-zinc-300 font-mono mb-6">
                  <div className="flex items-center gap-2 p-2 rounded-xl bg-white/[0.03] border border-white/5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>Instant Auto-Scaling</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-xl bg-white/[0.03] border border-white/5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>Sub-millisecond Global Edge</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-xl bg-white/[0.03] border border-white/5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>Self-Healing Microservices</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-xl bg-white/[0.03] border border-white/5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>SOC2 & ISO Compliant</span>
                  </div>
                </div>
              </div>

              {/* Action Link */}
              <a
                href="#contact"
                className="inline-flex items-center justify-between w-full p-3.5 rounded-2xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-300 font-semibold text-xs tracking-wide transition-all group-hover:border-amber-400"
              >
                <span>Scale Enterprise Infrastructure</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT US SECTION: UNLOCK YOUR BUSINESS POTENTIAL */}
      <section id="about-us" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="relative rounded-3xl p-1 bg-gradient-to-r from-purple-600/30 via-cyan-500/20 to-amber-500/30 shadow-[0_0_60px_-10px_rgba(168,85,247,0.3)]">
          <div className="rounded-[22px] bg-[#0a0b14] p-8 sm:p-12 border border-white/10 overflow-hidden relative">
            {/* Background Ambient Gradient */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Column Text */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>About Viralgaraj</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                  Unlock Your Business <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-amber-300">Potential</span>
                </h2>

                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                  At <strong className="text-white">Viralgaraj</strong>, we empower fast-growing technology
                  startups and global corporations to harness the frontier of artificial intelligence. We bridge
                  the gap between theoretical research and robust, revenue-generating software solutions.
                </p>

                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  Whether you are looking to deploy custom LLM workflows, optimize real-time customer data
                  funnels, or construct ultra-scalable cloud architectures, our specialized engineering squad
                  delivers high-performance software tailored to your vision.
                </p>

                {/* 3 Core Value Props */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10">
                  <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/5">
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-2">
                      <BarChart3 className="w-4 h-4" />
                    </div>
                    <h4 className="font-bold text-white text-xs mb-1">Predictive ROI</h4>
                    <p className="text-[11px] text-zinc-400">Measurable efficiency gains in under 30 days.</p>
                  </div>

                  <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/5">
                    <div className="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center mb-2">
                      <Shield className="w-4 h-4" />
                    </div>
                    <h4 className="font-bold text-white text-xs mb-1">Enterprise Grade</h4>
                    <p className="text-[11px] text-zinc-400">Military-level data privacy and security guarantees.</p>
                  </div>

                  <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/5">
                    <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center mb-2">
                      <Rocket className="w-4 h-4" />
                    </div>
                    <h4 className="font-bold text-white text-xs mb-1">Rapid Deployment</h4>
                    <p className="text-[11px] text-zinc-400">Continuous integration with zero downtime.</p>
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive Capability Preview */}
              <div className="lg:col-span-5 flex flex-col gap-3">
                <div className="p-5 rounded-2xl bg-[#0e101e] border border-purple-500/30 shadow-[0_0_30px_rgba(168,85,247,0.2)]">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4 text-xs font-mono text-zinc-400">
                    <span className="flex items-center gap-1.5 text-purple-300">
                      <Terminal className="w-3.5 h-3.5" />
                      viralgaraj_stack.config
                    </span>
                    <span className="text-emerald-400">● ACTIVE</span>
                  </div>

                  <div className="space-y-2 text-xs font-mono text-zinc-300">
                    <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-between">
                      <span className="text-zinc-400">AI Core:</span>
                      <span className="text-cyan-300 font-semibold">PyTorch / HuggingFace / OpenAI</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-between">
                      <span className="text-zinc-400">Frontend:</span>
                      <span className="text-purple-300 font-semibold">Next.js 15 / React / Tailwind</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-between">
                      <span className="text-zinc-400">Databases:</span>
                      <span className="text-amber-300 font-semibold">MongoDB Atlas / Redis / Qdrant</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-between">
                      <span className="text-zinc-400">Cloud Mesh:</span>
                      <span className="text-emerald-300 font-semibold">AWS / Kubernetes / Docker</span>
                    </div>
                  </div>

                  <div className="mt-3 p-3 rounded-xl bg-white/[0.03] border border-white/8 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl overflow-hidden border border-purple-500/40 relative shadow-md">
                        <Image
                          src="/anish.png"
                          alt="Anish Sharma - Lead AI Architect"
                          width={40}
                          height={40}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-white block">Anish Sharma</span>
                        <span className="text-[10px] font-mono text-cyan-300">Lead Full-Stack & AI Architect</span>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                      Verified
                    </span>
                  </div>

                  <a
                    href="#contact"
                    className="mt-4 w-full py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-lg transition-all"
                  >
                    <span>Request Technical Briefing</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LEAD CONVERSION & CONTACT CTA */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#101222] to-[#0a0b14] border border-white/10 shadow-[0_0_50px_rgba(56,189,248,0.2)]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>Ready for Acceleration?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Transform Your Vision with <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-amber-300">Viralgaraj</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto mb-8">
            Schedule an architectural discovery session with our lead full-stack & AI engineers today.
          </p>

          {submitted ? (
            <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-semibold max-w-md mx-auto flex items-center justify-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              <span>Inquiry received! A Viralgaraj architect will reach out shortly.</span>
            </div>
          ) : (
            <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                required
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                placeholder="Enter work email (e.g. alex@company.com)"
                className="flex-1 px-4 py-3 rounded-2xl bg-white/[0.04] border border-white/10 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400/60 focus:bg-white/[0.06] transition-all"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 via-purple-600 to-amber-400 text-white font-bold text-sm shadow-lg hover:shadow-cyan-500/30 transition-all hover:scale-105"
              >
                Get Started
              </button>
            </form>
          )}

          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-500">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              Free Architectural Audit
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              Non-Disclosure Agreement Protected
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              24-Hour Rapid Response
            </span>
          </div>
        </div>
      </section>

      {/* FOOTER WITH 'GO BACK TOP' LINK */}
      <footer className="border-t border-white/8 bg-[#040407] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand Info */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-400 to-purple-600 p-[1px] flex items-center justify-center">
              <div className="w-full h-full bg-[#050508] rounded-[7px] flex items-center justify-center">
                <Rocket className="w-4 h-4 text-cyan-300" />
              </div>
            </div>
            <div>
              <span className="font-bold text-white text-sm">Viralgaraj Technologies</span>
              <p className="text-[11px] text-zinc-500">© 2026 Viralgaraj Inc. All rights reserved.</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex items-center gap-6 text-xs text-zinc-400">
            <a href="#hero" className="hover:text-white transition-colors">
              Home
            </a>
            <a href="#solutions" className="hover:text-white transition-colors">
              Solutions
            </a>
            <a href="#about-us" className="hover:text-white transition-colors">
              About Us
            </a>
            <Link href="/" className="text-purple-400 hover:text-purple-300 transition-colors">
              Developer Portfolio
            </Link>
          </div>

          {/* Prominent 'Go Back Top' Button */}
          <button
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-amber-400/50 text-xs font-mono text-zinc-300 hover:text-amber-300 transition-all shadow-md"
          >
            <span>Go Back Top</span>
            <ChevronUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform text-amber-400" />
          </button>
        </div>
      </footer>
    </div>
  );
}
