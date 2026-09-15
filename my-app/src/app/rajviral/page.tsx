"use client";

import React from "react";
import Link from "next/link";
import { RajViralReferral } from "@/components/RajViralReferral";
import { Sparkles, ArrowLeft, Flame, Share2, Award, Zap } from "lucide-react";

export default function RajViralPage() {
  return (
    <main className="min-h-screen bg-[#050509] text-[#f3f4f6] selection:bg-purple-500/30 selection:text-white font-sans relative overflow-x-hidden">
      {/* Ambient background flares */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-32 left-1/3 w-[600px] h-[500px] bg-gradient-to-tr from-purple-600/15 via-indigo-600/10 to-cyan-500/15 rounded-full blur-[160px]" />
        <div className="absolute bottom-10 -right-20 w-[500px] h-[500px] bg-gradient-to-bl from-cyan-600/15 via-purple-600/10 to-transparent rounded-full blur-[170px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_80%)]" />
      </div>

      {/* Floating Top Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 sm:pt-6">
        <nav className="w-full max-w-6xl rounded-full bg-[#0d0e1b]/80 backdrop-blur-xl border border-white/10 shadow-[0_10px_35px_-10px_rgba(0,0,0,0.8)] px-6 py-3.5 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-xs font-semibold text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Portfolio</span>
          </Link>

          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-xs font-mono text-cyan-300 font-bold tracking-wider uppercase">
              Raj Viral v3.2 Live
            </span>
          </div>

          <Link
            href="/viralgaraj"
            className="text-xs text-purple-400 hover:text-purple-300 transition-colors font-medium hidden sm:inline-block"
          >
            Viralgaraj Solutions →
          </Link>
        </nav>
      </header>

      {/* Main Content Area */}
      <div className="pt-28 sm:pt-32 pb-16">
        <RajViralReferral />
      </div>

      {/* Footer */}
      <footer className="border-t border-white/8 py-8 text-center text-xs text-zinc-500 font-mono">
        <p>© 2026 Raj Viral Growth Systems • Engineered with Next.js, TypeScript & Tailwind CSS</p>
      </footer>
    </main>
  );
}
