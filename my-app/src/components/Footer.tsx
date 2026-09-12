"use client";

import React from "react";
import {
  Mail,
  ArrowUp,
  Sparkles,
  Bot,
} from "lucide-react";
import { Icons } from "./Icons";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/8 bg-[#05060a] pt-16 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Ambient footer glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[200px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Top Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Brand & Bio */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-cyan-400 p-[1px] flex items-center justify-center">
                <div className="w-full h-full bg-[#090a10] rounded-[11px] flex items-center justify-center">
                  <span className="font-mono text-xs font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-cyan-300">
                    AS
                  </span>
                </div>
              </div>
              <span className="text-base font-bold text-white tracking-tight">
                Anish Sharma
              </span>
              <span className="text-[10px] font-mono uppercase bg-purple-500/10 text-purple-300 px-2 py-0.5 rounded border border-purple-500/20">
                Full Stack Developer
              </span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-sm leading-relaxed">
              Engineering responsive web platforms, high-conversion landing pages, and full-stack architectures with React.js, Next.js, Node.js, and modern databases.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Available for full-time roles & engineering contracts</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4 grid grid-cols-2 gap-4 text-xs font-medium">
            <div className="space-y-2.5">
              <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider block">
                Explore
              </span>
              <ul className="space-y-2">
                <li>
                  <a href="#hero" className="text-zinc-400 hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-zinc-400 hover:text-white transition-colors">
                    About & Bio
                  </a>
                </li>
                <li>
                  <a href="#skills" className="text-zinc-400 hover:text-white transition-colors">
                    Technical Skills
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-zinc-400 hover:text-white transition-colors">
                    Featured Work
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-2.5">
              <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider block">
                Interact
              </span>
              <ul className="space-y-2">
                <li>
                  <a href="#ai-demo" className="text-zinc-400 hover:text-cyan-300 transition-colors flex items-center gap-1">
                    <Bot className="w-3 h-3 text-cyan-400" />
                    <span>AI Copilot</span>
                  </a>
                </li>
                <li>
                  <a href="#experience" className="text-zinc-400 hover:text-white transition-colors">
                    Experience Timeline
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-zinc-400 hover:text-pink-300 transition-colors">
                    Contact & Inquiries
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/in/anish-sharma-363b6b278"
                    target="_blank"
                    rel="noreferrer"
                    className="text-zinc-400 hover:text-purple-300 transition-colors"
                  >
                    LinkedIn Connect
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Socials & Back to top */}
          <div className="md:col-span-3 flex flex-col md:items-end justify-between gap-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 hover:text-white text-xs font-semibold transition-all group"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            <div className="flex items-center gap-2">
              {[
                { icon: Icons.linkedin, href: "https://linkedin.com/in/anish-sharma-363b6b278", label: "LinkedIn" },
                { icon: Icons.github, href: "https://github.com/anish-sharma", label: "GitHub" },
                { icon: () => <Mail className="w-4 h-4" />, href: "mailto:anish947173@gmail.com", label: "Email" },
              ].map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-purple-600/20 border border-white/8 hover:border-purple-500/40 text-zinc-400 hover:text-white transition-all hover:scale-105"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-zinc-500">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Anish Sharma. All rights reserved.</span>
            <span>•</span>
            <span className="text-zinc-400">Next.js 14 & Tailwind CSS</span>
          </div>

          <div className="flex items-center gap-1.5 text-zinc-400">
            <span>Dhanbad, Jharkhand, India</span>
            <Sparkles className="w-3 h-3 text-purple-400" />
          </div>
        </div>
      </div>
    </footer>
  );
};
