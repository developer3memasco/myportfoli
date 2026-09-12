"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bot,
  User,
  Send,
  Sparkles,
  Terminal,
  RefreshCw,
  Copy,
  Check,
  Zap,
} from "lucide-react";

interface Message {
  id: string;
  sender: "user" | "assistant";
  text: string;
  timestamp: string;
  codeSnippet?: string;
  actions?: { label: string; href: string }[];
}

const promptChips = [
  "What are Anish's top projects?",
  "Explain Anish's React & tech stack",
  "What is Anish's work experience?",
  "Tell me about Anish's education & certifications",
];

const knowledgeBase: Record<
  string,
  { text: string; codeSnippet?: string; actions?: { label: string; href: string }[] }
> = {
  "what are anish's top projects?": {
    text: "Anish has built several high-impact web applications:\n\n1. **Viral Landing Page (Raj Viral)** (2024): High-conversion responsive landing page with optimized asset loading, 60fps animations, DOM rendering optimizations, and lead capture.\n2. **E-Commerce Web Application** (2023): Complete product search, dynamic category filtering, cart management, checkout logic, and lazy loading.\n3. **Interactive Task Management Dashboard** (2023): Full CRUD dashboard with task prioritization, status filtering, LocalStorage, and React memoization.\n4. **AI / LLM Workflow Playground** (2024): Modern Next.js 14 AI playground for prompt engineering and real-time streaming.",
    actions: [{ label: "View Projects", href: "#projects" }],
  },
  "explain anish's react & tech stack": {
    text: "Anish's core technical stack includes:\n\n• **Frontend**: React.js, Next.js 14, JavaScript (ES6+), TypeScript, Tailwind CSS, Bootstrap, HTML5, CSS3\n• **Backend & APIs**: Node.js, Express.js, RESTful API integrations, CRUD architectures\n• **Databases**: MongoDB (NoSQL), SQL (Relational)\n• **Tools**: Git, GitHub, VS Code, Postman, Chrome DevTools, npm",
    codeSnippet: `// React State & Memoization Example by Anish
const filteredTasks = useMemo(() => {
  return tasks.filter(task => 
    task.status === activeFilter && 
    task.priority >= priorityThreshold
  );
}, [tasks, activeFilter, priorityThreshold]);`,
    actions: [{ label: "Explore Skills Grid", href: "#skills" }],
  },
  "what is anish's work experience?": {
    text: "Anish Sharma's career experience:\n\n• **Full Stack Developer** @ **MEMAS Commodities FZCO** (Aug 2026 – Present):\n  - Full-stack web application development and maintenance\n  - Frontend features in React.js, Next.js, and TypeScript\n  - REST API integrations and backend service optimization\n\n• **Full Stack Development Trainee** @ **NxtWave CCBP 4.0** (Sept 2022 – Sept 2023):\n  - Designed & developed 15+ interactive web apps using React.js and modern JavaScript\n  - Built RESTful API integrations and optimized state management with React Hooks & Context API.",
    actions: [{ label: "View Timeline", href: "#experience" }],
  },
  "tell me about anish's education & certifications": {
    text: "Anish Sharma's academic background & credentials:\n\n🎓 **Bachelor of Technology (B.Tech) in Computer Science Engineering**\n  - Ramgarh Engineering College (Ramgarh, Jharkhand | 2022 – 2026 | CGPA: 6.5)\n\n📜 **Industry Ready Certification in Full Stack Development (IRC 4.0)**\n  - NxtWave CCBP, India (Sept 2022 – Sept 2023)\n  - 200+ hours of intensive coding bootcamps\n\n🏆 **Additional Certifications**:\n  - Research Certification from CSIR-CIMFR\n  - Responsive Web Design using Flexbox\n  - JavaScript Essentials Certification",
    actions: [{ label: "Contact Anish", href: "#contact" }],
  },
};

export const AIChatPreview: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "msg-1",
      sender: "assistant",
      text: "Hello! I'm Anish's AI Portfolio Assistant. Ask me anything about Anish's full-stack development experience, React.js projects, technical certifications, or work availability.",
      timestamp: "Just now",
      actions: [
        { label: "View Projects", href: "#projects" },
        { label: "Contact Anish", href: "#contact" },
      ],
    },
  ]);

  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);
  const chatBottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSend = (textToSend?: string) => {
    const query = (textToSend || inputValue).trim();
    if (!query || isTyping) return;

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: query,
      timestamp: "Just now",
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI inference & streaming response
    setTimeout(() => {
      const normalized = query.toLowerCase();
      let match = knowledgeBase[normalized];

      if (!match) {
        // Fallback fuzzy search
        const foundKey = Object.keys(knowledgeBase).find((key) =>
          normalized.includes(key) || key.includes(normalized)
        );
        match = foundKey
          ? knowledgeBase[foundKey]
          : {
              text: `Anish Sharma is a Full Stack Web Developer and React.js Specialist from Dhanbad, India. He builds responsive web applications with React.js, Next.js, Node.js, Express, and MongoDB/SQL. You can reach out directly at anish947173@gmail.com!`,
              actions: [
                { label: "View Projects", href: "#projects" },
                { label: "Send Message", href: "#contact" },
              ],
            };
      }

      const botMsg: Message = {
        id: `assistant-${Date.now()}`,
        sender: "assistant",
        text: match.text,
        timestamp: "Just now",
        codeSnippet: match.codeSnippet,
        actions: match.actions,
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 800);
  };

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleReset = () => {
    setMessages([
      {
        id: "msg-init",
        sender: "assistant",
        text: "Chat reset. How can I assist you with Anish Sharma's resume or full-stack engineering work?",
        timestamp: "Just now",
      },
    ]);
  };

  return (
    <section id="ai-demo" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-600/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      {/* Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-3">
          <Bot className="w-3.5 h-3.5" />
          <span>Interactive AI Terminal</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
          Ask My <span className="gradient-text-cyan">AI Copilot</span>
        </h2>
        <p className="mt-3 text-zinc-400 max-w-2xl text-sm sm:text-base">
          An interactive assistant loaded with Anish Sharma&apos;s verified resume data, technical skills,
          and engineering background.
        </p>
      </div>

      {/* Futuristic Chat Window Mock */}
      <div className="relative rounded-3xl p-1 bg-gradient-to-b from-purple-500/30 via-indigo-500/20 to-cyan-500/30 shadow-[0_0_50px_-10px_rgba(56,189,248,0.25)]">
        <div className="rounded-[22px] bg-[#0c0d16] border border-white/10 overflow-hidden flex flex-col h-[560px] shadow-2xl">
          {/* Top Chat Bar */}
          <div className="p-4 bg-[#10111e] border-b border-white/8 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-purple-600 p-[1px] flex items-center justify-center">
                  <div className="w-full h-full bg-[#0a0b12] rounded-[11px] flex items-center justify-center">
                    <Bot className="w-5 h-5 text-cyan-300" />
                  </div>
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#0c0d16]" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-white">Anish AI Assistant</span>
                  <span className="text-[10px] font-mono bg-cyan-500/15 text-cyan-300 px-1.5 py-0.5 rounded border border-cyan-500/25">
                    v2.4-active
                  </span>
                </div>
                <div className="flex items-center gap-2 text-[11px] text-zinc-400">
                  <span className="flex items-center gap-1 text-emerald-400">
                    <Zap className="w-3 h-3" />
                    Real-time response
                  </span>
                  <span>•</span>
                  <span>Resume & Projects Indexed</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleReset}
                title="Reset Conversation"
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-400 hover:text-white transition-colors"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Prompt Chips Bar */}
          <div className="p-3 bg-[#0e0f1a]/80 border-b border-white/5 flex items-center gap-2 overflow-x-auto no-scrollbar">
            <span className="text-[11px] font-mono text-zinc-500 shrink-0 flex items-center gap-1 pl-1">
              <Sparkles className="w-3 h-3 text-purple-400" />
              Suggested:
            </span>
            {promptChips.map((chip) => (
              <button
                key={chip}
                onClick={() => handleSend(chip)}
                className="shrink-0 text-xs px-3 py-1 rounded-full bg-white/[0.04] hover:bg-purple-600/20 border border-white/8 hover:border-purple-500/40 text-zinc-300 hover:text-purple-200 transition-all font-sans"
              >
                {chip}
              </button>
            ))}
          </div>

          {/* Chat Messages Feed */}
          <div className="flex-1 p-5 overflow-y-auto space-y-4 font-sans text-sm">
            <AnimatePresence initial={false}>
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className={`flex items-start gap-3 ${
                    msg.sender === "user" ? "flex-row-reverse" : "flex-row"
                  }`}
                >
                  {/* Avatar */}
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                      msg.sender === "user"
                        ? "bg-purple-600 text-white shadow-[0_0_10px_rgba(168,85,247,0.4)]"
                        : "bg-[#161826] border border-cyan-500/30 text-cyan-300"
                    }`}
                  >
                    {msg.sender === "user" ? (
                      <User className="w-4 h-4" />
                    ) : (
                      <Bot className="w-4 h-4" />
                    )}
                  </div>

                  {/* Message Bubble */}
                  <div
                    className={`max-w-[85%] sm:max-w-[75%] rounded-2xl p-4 ${
                      msg.sender === "user"
                        ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-tr-sm shadow-md"
                        : "bg-[#131522] border border-white/8 text-zinc-200 rounded-tl-sm shadow-inner"
                    }`}
                  >
                    <p className="whitespace-pre-wrap leading-relaxed text-xs sm:text-sm">
                      {msg.text}
                    </p>

                    {/* Code Snippet if present */}
                    {msg.codeSnippet && (
                      <div className="mt-3 relative rounded-xl bg-[#080910] border border-white/10 p-3 font-mono text-[11px] text-purple-200">
                        <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10 text-zinc-500">
                          <span className="flex items-center gap-1">
                            <Terminal className="w-3 h-3 text-cyan-400" />
                            <span>javascript</span>
                          </span>
                          <button
                            onClick={() => handleCopy(msg.codeSnippet!)}
                            className="hover:text-white transition-colors"
                          >
                            {copiedCode ? (
                              <Check className="w-3.5 h-3.5 text-emerald-400" />
                            ) : (
                              <Copy className="w-3.5 h-3.5" />
                            )}
                          </button>
                        </div>
                        <pre className="overflow-x-auto">
                          <code>{msg.codeSnippet}</code>
                        </pre>
                      </div>
                    )}

                    {/* Action Chips */}
                    {msg.actions && msg.actions.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-2 pt-2 border-t border-white/5">
                        {msg.actions.map((act) => (
                          <a
                            key={act.label}
                            href={act.href}
                            className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-purple-300 hover:text-white transition-colors"
                          >
                            {act.label} →
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-7 h-7 rounded-lg bg-[#161826] border border-cyan-500/30 text-cyan-300 flex items-center justify-center">
                    <Bot className="w-4 h-4 animate-spin" />
                  </div>
                  <div className="bg-[#131522] border border-white/8 rounded-2xl rounded-tl-sm p-3.5 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce" />
                    <span className="w-2 h-2 rounded-full bg-indigo-400 animate-bounce [animation-delay:0.15s]" />
                    <span className="w-2 h-2 rounded-full bg-purple-400 animate-bounce [animation-delay:0.3s]" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            <div ref={chatBottomRef} />
          </div>

          {/* Chat Input Bar */}
          <div className="p-4 bg-[#10111e] border-t border-white/8">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2 rounded-2xl bg-[#080910] border border-white/10 p-1.5 focus-within:border-purple-500/50 focus-within:shadow-[0_0_20px_rgba(168,85,247,0.2)] transition-all"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about Anish's React projects, full-stack experience, or availability..."
                className="flex-1 bg-transparent px-3 py-2 text-xs sm:text-sm text-white placeholder-zinc-500 focus:outline-none"
              />
              <button
                type="submit"
                disabled={!inputValue.trim() || isTyping}
                className="p-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-90 transition-opacity flex items-center justify-center"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
