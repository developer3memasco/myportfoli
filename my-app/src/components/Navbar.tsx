"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import anishImg from "../../public/anish.png";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Menu,
  X,
  ArrowUpRight,
  Bot,
  Layers,
  Code2,
  Cpu,
  Send,
  User,
  Briefcase,
  Flame,
} from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  isExternalPage?: boolean;
}

const navItems: NavItem[] = [
  { label: "Home", href: "#hero", icon: Cpu },
  { label: "About", href: "#about", icon: User },
  { label: "Skills", href: "#skills", icon: Layers },
  { label: "Projects", href: "#projects", icon: Code2 },
  { label: "Raj Viral", href: "/rajviral", icon: Flame, isExternalPage: true },
  { label: "AI Copilot", href: "#ai-demo", icon: Bot },
  { label: "Experience", href: "#experience", icon: Briefcase },
  { label: "Contact", href: "#contact", icon: Send },
];

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 sm:pt-6 transition-all duration-300">
      <nav
        className={`w-full max-w-6xl rounded-full transition-all duration-300 ${
          isScrolled
            ? "glass-nav py-2.5 px-4 sm:px-6 shadow-[0_10px_35px_-10px_rgba(0,0,0,0.8)] border-white/10"
            : "bg-[#0f1017]/70 backdrop-blur-md border border-white/8 py-3 px-5 sm:px-7"
        } flex items-center justify-between`}
      >
        {/* Logo / Brand with Profile Headshot */}
        <a
          href="#hero"
          className="flex items-center gap-2.5 group focus:outline-none"
        >
          <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-cyan-400 p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-[0_0_20px_rgba(168,85,247,0.35)] overflow-hidden">
            <Image
              src={anishImg}
              alt="Anish Sharma"
              width={36}
              height={36}
              className="w-full h-full object-cover object-top rounded-[10px]"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold tracking-tight text-white group-hover:text-purple-300 transition-colors">
                Anish Sharma
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 text-[10px] uppercase font-mono tracking-widest text-indigo-400/80 bg-indigo-500/10 px-1.5 py-0.5 rounded border border-indigo-500/20">
                React / Full-Stack
              </span>
            </div>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <div className="hidden lg:flex items-center gap-1 bg-[#141522]/60 p-1 rounded-full border border-white/5 backdrop-blur-lg">
          {navItems.map((item) => {
            const isActive = !item.isExternalPage && activeSection === item.href.substring(1);
            const className = `relative px-3.5 py-1.5 text-xs font-medium transition-colors rounded-full ${
              isActive
                ? "text-white font-semibold"
                : item.isExternalPage
                ? "text-purple-300 hover:text-white hover:bg-purple-500/10 font-semibold"
                : "text-zinc-400 hover:text-zinc-100 hover:bg-white/5"
            }`;

            if (item.href.startsWith("/")) {
              return (
                <Link key={item.label} href={item.href} className={className}>
                  <span className="relative z-10 flex items-center gap-1.5">
                    {item.label}
                  </span>
                </Link>
              );
            }

            return (
              <a key={item.label} href={item.href} className={className}>
                {isActive && (
                  <motion.div
                    layoutId="activeNavPill"
                    className="absolute inset-0 bg-gradient-to-r from-purple-600/30 via-indigo-600/30 to-pink-600/30 border border-purple-500/40 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.3)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  {item.label}
                </span>
              </a>
            );
          })}
        </div>

        {/* Action Button & Availability Badge */}
        <div className="flex items-center gap-3">
          {/* Availability Beacon */}
          <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/25 text-[11px] font-medium text-emerald-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Open for Roles</span>
          </div>

          {/* Primary CTA Button */}
          <a
            href="#contact"
            className="relative group overflow-hidden rounded-full p-[1px] focus:outline-none"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-500 rounded-full opacity-80 group-hover:opacity-100 transition-opacity duration-300 blur-[2px]" />
            <span className="relative flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#0a0b12] text-xs font-semibold text-white transition-colors duration-300 group-hover:bg-[#121320] border border-white/10">
              <Sparkles className="w-3.5 h-3.5 text-purple-400 group-hover:text-pink-300 transition-colors" />
              <span>Hire Me</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white transition-transform" />
            </span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            className="lg:hidden flex items-center justify-center w-9 h-9 rounded-full bg-white/5 border border-white/10 text-zinc-300 hover:text-white hover:bg-white/10 transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="w-4 h-4" />
            ) : (
              <Menu className="w-4 h-4" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="absolute top-20 left-4 right-4 max-w-lg mx-auto p-5 rounded-2xl bg-[#0e101a]/95 border border-white/10 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.9)] lg:hidden flex flex-col gap-2 z-50"
          >
            <div className="flex items-center justify-between pb-3 mb-2 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-medium text-emerald-300">
                  Open for Full-Stack & AI Roles
                </span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-zinc-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2 py-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = !item.isExternalPage && activeSection === item.href.substring(1);
                const className = `flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-medium transition-all ${
                  isActive
                    ? "bg-purple-600/20 text-purple-300 border border-purple-500/30"
                    : item.isExternalPage
                    ? "bg-purple-500/10 text-purple-300 hover:bg-purple-500/20 border border-purple-500/20 font-semibold"
                    : "text-zinc-300 hover:bg-white/5 hover:text-white border border-transparent"
                }`;

                if (item.href.startsWith("/")) {
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={className}
                    >
                      <Icon className="w-4 h-4 text-purple-400" />
                      <span>{item.label}</span>
                    </Link>
                  );
                }

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={className}
                  >
                    <Icon className="w-4 h-4 text-zinc-400" />
                    <span>{item.label}</span>
                  </a>
                );
              })}
            </div>

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-3 flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 text-white text-xs font-semibold shadow-lg shadow-purple-900/30"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Get in Touch with Anish</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
