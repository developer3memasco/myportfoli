"use client";

import React from "react";
import { motion } from "framer-motion";

export const AmbientBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Background Grid & Dot overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />
      <div className="absolute inset-0 bg-dot-pattern opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />

      {/* Top Left - Indigo / Purple Glow Orb */}
      <motion.div
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -30, 20, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-32 -left-32 w-[550px] h-[550px] rounded-full bg-purple-600/20 blur-[140px]"
      />

      {/* Center Right - Cyan / Sky Glow Orb */}
      <motion.div
        animate={{
          x: [0, -40, 20, 0],
          y: [0, 40, -30, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute top-1/3 -right-32 w-[600px] h-[600px] rounded-full bg-cyan-500/15 blur-[150px]"
      />

      {/* Bottom Center / Left - Crimson / Violet Glow Orb */}
      <motion.div
        animate={{
          x: [0, 35, -25, 0],
          y: [0, -25, 30, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
        className="absolute -bottom-40 left-1/4 w-[650px] h-[650px] rounded-full bg-indigo-600/18 blur-[160px]"
      />

      {/* Deep Pink Accent Orb */}
      <motion.div
        animate={{
          opacity: [0.12, 0.22, 0.12],
          scale: [0.95, 1.08, 0.95],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-2/3 left-10 w-[450px] h-[450px] rounded-full bg-pink-600/10 blur-[130px]"
      />

      {/* Top subtle vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#070709]/40 to-[#070709]/95" />
    </div>
  );
};
