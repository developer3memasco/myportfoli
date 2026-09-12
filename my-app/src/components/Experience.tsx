"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Calendar,
  Sparkles,
  CheckCircle2,
  GraduationCap,
  Award,
} from "lucide-react";

interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string;
  achievements: string[];
  tech: string[];
  isCurrent?: boolean;
}

const experiences: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Full Stack Developer",
    company: "MEMAS Commodities FZCO",
    location: "India",
    period: "Aug 2026 – Present",
    type: "Contract (2 years, renewable)",
    isCurrent: true,
    description:
      "Working on full-stack web application development, frontend feature engineering, and database business logic optimization.",
    achievements: [
      "Develop high-performance frontend features using React.js, Next.js, and TypeScript.",
      "Integrate RESTful APIs and backend services with dynamic frontend applications.",
      "Work with databases, implement business logic, and optimize application features for scale and stability.",
    ],
    tech: ["React.js", "Next.js", "TypeScript", "REST APIs", "Node.js", "Databases"],
  },
  {
    id: "exp-2",
    role: "Full Stack Development Trainee",
    company: "NxtWave CCBP 4.0",
    location: "Hyderabad, India (Remote)",
    period: "Sept 2022 – Sept 2023",
    type: "Intensive Traineeship",
    description:
      "Completed 200+ hours of intensive hands-on coding bootcamps focused on modern full-stack architecture and real-world deployment.",
    achievements: [
      "Spearheaded the design and development of 15+ highly interactive, responsive web applications using React.js and modern JavaScript.",
      "Architected RESTful API integrations and optimized application state management using React Hooks and Context API.",
      "Engineered clean, accessible UI components following UI/UX and web accessibility best practices.",
      "Managed codebase, feature deployments, and continuous delivery for scalable web projects.",
    ],
    tech: ["React.js", "JavaScript (ES6+)", "Node.js", "Express.js", "MongoDB", "SQL", "HTML5/CSS3"],
  },
  {
    id: "exp-3",
    role: "B.Tech in Computer Science & Engineering",
    company: "Ramgarh Engineering College",
    location: "Ramgarh, Jharkhand, India",
    period: "Dec 2022 – Dec 2026",
    type: "Undergraduate Degree",
    description:
      "Bachelor of Technology in Computer Science & Engineering (CGPA: 6.5) focusing on computer systems, web performance, and algorithmic thinking.",
    achievements: [
      "Built strong foundation in Data Structures & Algorithms, Object-Oriented Programming (OOP), and Database Management Systems.",
      "Completed Research Certification at CSIR-CIMFR and certified in Responsive Web Design and JavaScript Essentials.",
      "Organized technical workshops and collaborated on full-stack web development initiatives.",
    ],
    tech: ["Data Structures", "Algorithms", "OOP", "Python", "SQL", "Web Performance"],
  },
];

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 -left-20 w-[500px] h-[350px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono uppercase tracking-wider mb-3">
          <Briefcase className="w-3.5 h-3.5" />
          <span>Career & Education</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
          Experience & <span className="gradient-text-neon">Milestones</span>
        </h2>
        <p className="mt-3 text-zinc-400 max-w-2xl text-sm sm:text-base">
          My professional development journey from comprehensive full-stack training to shipping
          production-grade web platforms.
        </p>
      </div>

      {/* Vertical Timeline Container */}
      <div className="relative pl-6 sm:pl-10 space-y-12">
        {/* Connecting Gradient Line */}
        <div className="absolute top-3 bottom-3 left-2 sm:left-4 w-[2px] bg-gradient-to-b from-purple-500 via-indigo-500 to-cyan-500/20" />

        {experiences.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="relative group"
          >
            {/* Glowing Circular Node */}
            <div className="absolute -left-[27px] sm:-left-[35px] top-6 flex items-center justify-center">
              <div className="relative flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#0c0d16] border-2 border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.6)]">
                {item.isCurrent ? (
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                ) : (
                  <span className="w-2 h-2 rounded-full bg-purple-400" />
                )}
              </div>
            </div>

            {/* Experience Glass Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-[#0e101a]/85 border border-white/8 backdrop-blur-xl transition-all duration-300 hover:bg-[#131524] hover:border-purple-500/40 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]">
              {/* Top Details */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-white/6">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                      {item.role}
                    </h3>
                    {item.isCurrent && (
                      <span className="px-2 py-0.5 text-[10px] font-mono uppercase bg-emerald-500/10 text-emerald-300 border border-emerald-500/25 rounded-full">
                        Current
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-purple-300 mt-1 font-medium">
                    <span>{item.company}</span>
                    <span className="text-zinc-600">•</span>
                    <span className="text-zinc-400">{item.location}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 bg-white/[0.03] px-3 py-1.5 rounded-xl border border-white/5 w-fit">
                  <Calendar className="w-3.5 h-3.5 text-purple-400" />
                  <span>{item.period}</span>
                </div>
              </div>

              {/* Description */}
              <p className="mt-4 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {item.description}
              </p>

              {/* Achievements Bullet List */}
              <div className="mt-4 space-y-2">
                {item.achievements.map((ach, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-zinc-400">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <span>{ach}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack Chips */}
              <div className="mt-6 flex flex-wrap gap-1.5 pt-4 border-t border-white/6">
                {item.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-white/[0.04] text-zinc-300 border border-white/5"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
