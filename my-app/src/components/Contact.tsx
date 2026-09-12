"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  Mail,
  Sparkles,
  Copy,
  Check,
  Phone,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  MapPin,
} from "lucide-react";
import { Icons } from "./Icons";

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Full Stack Web Application",
    budget: "$1k - $5k",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("anish947173@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText("+919715568176");
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        projectType: "Full Stack Web Application",
        budget: "$1k - $5k",
        message: "",
      });
    }, 1200);
  };

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[350px] bg-pink-600/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      {/* Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-300 text-xs font-mono uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Get in Touch</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
          Let&apos;s Build Something <span className="gradient-text-hero">Impactful</span>
        </h2>
        <p className="mt-3 text-zinc-400 max-w-2xl text-sm sm:text-base">
          Open for full-time full stack roles, React.js frontend engineering, contract builds, and collaborative projects.
        </p>
      </div>

      {/* 2-Column Contact Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left Info Column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5 flex flex-col justify-between gap-6"
        >
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">
              Direct Contact & Socials
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              Looking for a dedicated React.js & Full Stack Developer who delivers clean code and responsive interfaces? Reach out directly below!
            </p>

            {/* Email Card with 1-Click Copy */}
            <div className="p-4 rounded-2xl bg-[#0f1019]/90 border border-white/8 backdrop-blur-xl flex items-center justify-between group hover:border-purple-500/40 transition-colors">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-zinc-400 block">Direct Email</span>
                  <span className="text-sm font-semibold text-white">anish947173@gmail.com</span>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-400 hover:text-white transition-colors"
                title="Copy Email Address"
              >
                {copiedEmail ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Phone Card with 1-Click Copy */}
            <div className="p-4 rounded-2xl bg-[#0f1019]/90 border border-white/8 backdrop-blur-xl flex items-center justify-between group hover:border-cyan-500/40 transition-colors">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-zinc-400 block">Phone & WhatsApp</span>
                  <span className="text-sm font-semibold text-white">+91 9715568176</span>
                </div>
              </div>
              <button
                onClick={handleCopyPhone}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-400 hover:text-white transition-colors"
                title="Copy Phone Number"
              >
                {copiedPhone ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Location & Quick Guarantees */}
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2.5 text-xs text-zinc-400">
              <div className="flex items-center gap-2 text-zinc-300">
                <MapPin className="w-4 h-4 text-pink-400" />
                <span>Dhanbad, Jharkhand, India (Available for Remote & Onsite)</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Fast response time — usually within 12 hours</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-400" />
                <span>High-performance React & Next.js code standards</span>
              </div>
            </div>
          </div>

          {/* Social Presence Grid */}
          <div className="pt-4 border-t border-white/8">
            <span className="text-xs font-mono text-zinc-500 block mb-3">Connect with Anish:</span>
            <div className="grid grid-cols-2 gap-2">
              <a
                href="https://linkedin.com/in/anish-sharma-363b6b278"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-white/[0.03] hover:bg-blue-600/20 border border-white/8 hover:border-blue-500/40 text-zinc-300 text-xs font-medium transition-all"
              >
                <Icons.linkedin className="w-4 h-4 text-blue-400" />
                <span>LinkedIn Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
              </a>
              <a
                href="https://github.com/anish-sharma"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/8 text-zinc-300 text-xs font-medium transition-all hover:text-white"
              >
                <Icons.github className="w-4 h-4 text-purple-400" />
                <span>GitHub Repos</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Form Column */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7"
        >
          <div className="relative rounded-3xl p-1 bg-gradient-to-b from-purple-500/20 via-indigo-500/10 to-pink-500/20 shadow-[0_0_40px_rgba(0,0,0,0.8)]">
            <div className="rounded-[22px] bg-[#0c0d16] p-6 sm:p-8 border border-white/10">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="py-12 flex flex-col items-center text-center space-y-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                      <Check className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Message Transmitted!</h3>
                    <p className="text-xs sm:text-sm text-zinc-400 max-w-sm">
                      Thank you for reaching out. Anish has received your message and will reply to your email shortly.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="mt-4 px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-zinc-200 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                          Your Name <span className="text-pink-400">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="John Doe"
                          className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-purple-500/60 focus:bg-white/[0.05] transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                          Email Address <span className="text-pink-400">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="john@company.com"
                          className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-purple-500/60 focus:bg-white/[0.05] transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                          Inquiry Type
                        </label>
                        <select
                          value={formData.projectType}
                          onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-[#11121d] border border-white/10 text-xs text-white focus:outline-none focus:border-purple-500/60 transition-all"
                        >
                          <option>Full-Time / Software Engineer Role</option>
                          <option>Full Stack Web Application Build</option>
                          <option>React.js / Next.js Frontend Project</option>
                          <option>RESTful API & Database Integration</option>
                          <option>Contract / Freelance Work</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                          Timeline / Budget
                        </label>
                        <select
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-[#11121d] border border-white/10 text-xs text-white focus:outline-none focus:border-purple-500/60 transition-all"
                        >
                          <option>Immediate / Full-Time Employment</option>
                          <option>&lt; $1,000 (Quick Sprint / Feature)</option>
                          <option>$1,000 - $5,000 (Standard MVP)</option>
                          <option>$5,000+ (Enterprise Platform)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                        Message Details <span className="text-pink-400">*</span>
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell Anish about your company, project requirements, or opportunity..."
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-purple-500/60 focus:bg-white/[0.05] transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="relative w-full group overflow-hidden rounded-2xl p-[1px] focus:outline-none mt-2"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 rounded-2xl opacity-90 group-hover:opacity-100 transition-opacity blur-[2px]" />
                      <span className="relative flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-[#090a12] text-sm font-semibold text-white group-hover:bg-[#121320] transition-colors">
                        {isSubmitting ? (
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                          <>
                            <Sparkles className="w-4 h-4 text-purple-400" />
                            <span>Send Message to Anish</span>
                            <Send className="w-4 h-4 text-zinc-400 group-hover:translate-x-1 group-hover:text-white transition-all" />
                          </>
                        )}
                      </span>
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
