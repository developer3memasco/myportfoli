"use client";

import React, { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import anishImg from "../../public/anish.png";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Copy,
  Check,
  Trophy,
  Crown,
  Share2,
  Users,
  Flame,
  Award,
  Zap,
  Gift,
  ArrowUpRight,
  TrendingUp,
  Search,
  CheckCircle2,
  Lock,
  Unlock,
  ChevronRight,
} from "lucide-react";

interface LeaderboardUser {
  rank: number;
  name: string;
  username: string;
  avatar: string | StaticImageData;
  points: number;
  referrals: number;
  tier: "Grand Master" | "Diamond VIP" | "Gold Creator" | "Silver Pro";
  badgeColor: string;
  trend: "up" | "same" | "down";
  trendAmount: number;
}

const initialLeaderboard: LeaderboardUser[] = [
  {
    rank: 1,
    name: "Aarav Mehta",
    username: "@aarav_growth",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
    points: 14850,
    referrals: 142,
    tier: "Grand Master",
    badgeColor: "from-amber-400 to-yellow-600 text-amber-950",
    trend: "up",
    trendAmount: 2,
  },
  {
    rank: 2,
    name: "Anish Sharma",
    username: "@dev_anish",
    avatar: anishImg,
    points: 12400,
    referrals: 118,
    tier: "Diamond VIP",
    badgeColor: "from-cyan-400 to-blue-600 text-cyan-950",
    trend: "up",
    trendAmount: 1,
  },
  {
    rank: 3,
    name: "Sophia Chen",
    username: "@sophia_builds",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80",
    points: 10920,
    referrals: 98,
    tier: "Diamond VIP",
    badgeColor: "from-purple-400 to-indigo-600 text-purple-950",
    trend: "same",
    trendAmount: 0,
  },
  {
    rank: 4,
    name: "Rahul Verma",
    username: "@rahul_tech",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
    points: 8750,
    referrals: 74,
    tier: "Gold Creator",
    badgeColor: "from-amber-300 to-amber-500 text-amber-950",
    trend: "up",
    trendAmount: 3,
  },
  {
    rank: 5,
    name: "Elena Rostova",
    username: "@elena_ux",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
    points: 7600,
    referrals: 62,
    tier: "Gold Creator",
    badgeColor: "from-amber-300 to-amber-500 text-amber-950",
    trend: "down",
    trendAmount: 1,
  },
  {
    rank: 6,
    name: "Vikram Malhotra",
    username: "@vikram_dev",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80",
    points: 6200,
    referrals: 51,
    tier: "Silver Pro",
    badgeColor: "from-zinc-300 to-zinc-500 text-zinc-950",
    trend: "up",
    trendAmount: 1,
  },
];

const tiersList = [
  {
    threshold: 1,
    name: "Early Pioneer",
    reward: "100 Bonus Coins & Pioneer Badge",
    unlocked: true,
  },
  {
    threshold: 3,
    name: "Gold Creator",
    reward: "Pro Analytics & Custom Profile URL",
    unlocked: true,
  },
  {
    threshold: 5,
    name: "VIP Master Dashboard",
    reward: "VIP Dashboard Access & Priority AI Copilot",
    unlocked: false,
  },
  {
    threshold: 10,
    name: "Grand Champion",
    reward: "Lifetime Revenue Share & 3D Diamond Trophy",
    unlocked: false,
  },
];

export const RajViralReferral: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [referralCode] = useState("ANISH-VIRAL-VIP");
  const [referralCount, setReferralCount] = useState(3);
  const [searchQuery, setSearchQuery] = useState("");
  const [timeFilter, setTimeFilter] = useState<"weekly" | "allTime">("weekly");
  const [showSimulateToast, setShowSimulateToast] = useState(false);
  const [referralLink, setReferralLink] = useState(`/rajviral?ref=${referralCode}`);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setReferralLink(`${window.location.origin}/rajviral?ref=${referralCode}`);
    }
  }, [referralCode]);

  const nextTier = tiersList.find((t) => referralCount < t.threshold) || tiersList[tiersList.length - 1];
  const currentTier = tiersList.filter((t) => referralCount >= t.threshold).slice(-1)[0] || tiersList[0];
  const progressPercent = Math.min(100, Math.round((referralCount / (nextTier.threshold || 10)) * 100));

  const handleCopyLink = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSimulateInvite = () => {
    setReferralCount((prev) => prev + 1);
    setShowSimulateToast(true);
    setTimeout(() => setShowSimulateToast(false), 3000);
  };

  const filteredLeaderboard = initialLeaderboard.filter(
    (u) =>
      u.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      u.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="referral-leaderboard" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background Radial Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-purple-600/15 via-cyan-500/15 to-transparent rounded-full blur-[160px] pointer-events-none -z-10" />

      {/* Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-amber-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono uppercase tracking-wider mb-4 shadow-[0_0_20px_rgba(168,85,247,0.2)]">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Raj Viral Growth Engine</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white max-w-3xl">
          Invite Friends. Climb Leaderboard.{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-amber-300">
            Unlock VIP Perks.
          </span>
        </h2>
        <p className="mt-4 text-zinc-400 max-w-2xl text-sm sm:text-base leading-relaxed">
          Share your custom referral link, accumulate viral points, and compete on the global leaderboard
          to unlock high-value creator tiers.
        </p>
      </div>

      {/* 2-Column Main Section Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* LEFT COLUMN: Unique Link Generator & Live Tier-Unlock Progress (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Card 1: Unique Referral Link Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative rounded-3xl p-[1px] bg-gradient-to-b from-purple-500/40 via-cyan-500/20 to-transparent shadow-[0_0_40px_-10px_rgba(168,85,247,0.3)]"
          >
            <div className="rounded-[23px] bg-[#0d0e1b] p-6 sm:p-7 border border-white/10 relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                    <Gift className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">Your Unique Referral Link</h3>
                    <p className="text-xs text-zinc-400">Earn +100 points for every friend who joins</p>
                  </div>
                </div>
              </div>

              {/* Referral Link Input Box */}
              <div className="relative mt-4 flex items-center rounded-2xl bg-[#141628] border border-purple-500/30 p-1.5 shadow-inner group focus-within:border-cyan-400/60 transition-all">
                <input
                  type="text"
                  readOnly
                  value={referralLink}
                  className="w-full bg-transparent px-3 py-2 text-xs sm:text-sm font-mono text-cyan-300 focus:outline-none select-all"
                />
                <button
                  onClick={handleCopyLink}
                  className="shrink-0 flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white text-xs font-semibold shadow-md transition-all duration-300 hover:scale-105"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-200" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy Link</span>
                    </>
                  )}
                </button>
              </div>

              {/* Social Quick Share Buttons */}
              <div className="mt-5 pt-4 border-t border-white/8">
                <span className="text-[11px] font-mono text-zinc-400 block mb-2.5">Quick Social Share:</span>
                <div className="grid grid-cols-3 gap-2">
                  <a
                    href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                      `Join me on Raj Viral! Use my invite link: ${referralLink}`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-medium transition-all"
                  >
                    <span>WhatsApp</span>
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                      `Unlock VIP perks on Raj Viral with my invite link: ${referralLink}`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-sky-500/10 hover:bg-sky-500/20 border border-sky-500/30 text-sky-300 text-xs font-medium transition-all"
                  >
                    <span>Twitter/X</span>
                  </a>
                  <a
                    href={`https://t.me/share/url?url=${encodeURIComponent(referralLink)}&text=${encodeURIComponent(
                      "Join Raj Viral VIP Growth!"
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 text-blue-300 text-xs font-medium transition-all"
                  >
                    <span>Telegram</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Live Tier-Unlock Progress Tracker */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative rounded-3xl p-[1px] bg-gradient-to-b from-cyan-500/40 via-purple-500/20 to-transparent shadow-[0_0_40px_-10px_rgba(56,189,248,0.3)]"
          >
            <div className="rounded-[23px] bg-[#0d0e1b] p-6 sm:p-7 border border-white/10 space-y-5">
              {/* Header & Current Status */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                    <Crown className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">Tier-Unlock Progression</h3>
                    <p className="text-xs text-zinc-400">
                      Current Tier: <span className="text-amber-300 font-semibold">{currentTier.name}</span>
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-lg font-extrabold text-cyan-300">{referralCount}</span>
                  <span className="text-xs text-zinc-500 block font-mono">Invites Done</span>
                </div>
              </div>

              {/* Progress Bar Container */}
              <div>
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="text-zinc-300 font-medium">
                    {referralCount < 5 ? (
                      <>
                        Share with <strong className="text-cyan-300">{5 - referralCount} more friends</strong> to unlock{" "}
                        <strong className="text-amber-300">VIP Dashboard</strong>
                      </>
                    ) : (
                      <>
                        <strong className="text-emerald-400">VIP Dashboard Unlocked!</strong> Share {10 - referralCount}{" "}
                        more for Grand Champion
                      </>
                    )}
                  </span>
                  <span className="font-mono font-bold text-purple-300">{progressPercent}%</span>
                </div>

                <div className="w-full h-3 rounded-full bg-[#181a2e] overflow-hidden p-0.5 border border-white/10 relative">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progressPercent}%` }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="h-full rounded-full bg-gradient-to-r from-purple-500 via-cyan-400 to-amber-400 shadow-[0_0_15px_rgba(56,189,248,0.8)]"
                  />
                </div>
              </div>

              {/* Milestones List */}
              <div className="space-y-2.5 pt-2">
                {tiersList.map((tier, idx) => {
                  const isReached = referralCount >= tier.threshold;
                  return (
                    <div
                      key={idx}
                      className={`p-3 rounded-xl flex items-center justify-between transition-all ${
                        isReached
                          ? "bg-purple-500/10 border border-purple-500/30 text-white"
                          : "bg-white/[0.02] border border-white/5 text-zinc-500"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {isReached ? (
                          <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                            <Check className="w-3.5 h-3.5" />
                          </div>
                        ) : (
                          <div className="w-6 h-6 rounded-full bg-white/5 text-zinc-500 flex items-center justify-center shrink-0">
                            <Lock className="w-3.5 h-3.5" />
                          </div>
                        )}
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold">{tier.name}</span>
                            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/5">
                              {tier.threshold} {tier.threshold === 1 ? "Invite" : "Invites"}
                            </span>
                          </div>
                          <span className="text-[11px] text-zinc-400 block">{tier.reward}</span>
                        </div>
                      </div>

                      {isReached && (
                        <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                          Active
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Interactive Simulation Button for Testing */}
              <button
                onClick={handleSimulateInvite}
                className="w-full py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-cyan-400/40 text-xs font-mono text-zinc-300 hover:text-cyan-300 flex items-center justify-center gap-2 transition-all"
              >
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                <span>Simulate 1 Friend Invite (+100 pts)</span>
              </button>

              <AnimatePresence>
                {showSimulateToast && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    className="p-2.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs text-center font-mono"
                  >
                    🎉 Referral Added! +100 Points & Progress Updated!
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: Clean Styled Leaderboard Table (7 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-7 relative rounded-3xl p-[1px] bg-gradient-to-b from-purple-500/30 via-indigo-500/20 to-cyan-500/30 shadow-[0_0_50px_-10px_rgba(168,85,247,0.3)]"
        >
          <div className="rounded-[23px] bg-[#0b0c17] p-6 sm:p-8 border border-white/10 overflow-hidden">
            {/* Table Header Controls */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-2xl bg-gradient-to-tr from-amber-400 to-yellow-600 text-amber-950 shadow-[0_0_20px_rgba(245,158,11,0.4)]">
                  <Trophy className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Top Viral Referrers</h3>
                  <p className="text-xs text-zinc-400">Live rankings updated in real-time</p>
                </div>
              </div>

              {/* Search and Time Range Filter */}
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search user..."
                    className="pl-8 pr-3 py-1.5 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-purple-500/60 transition-all w-36 sm:w-44"
                  />
                </div>

                <div className="flex p-0.5 rounded-xl bg-[#141525] border border-white/5 text-[11px] font-medium">
                  <button
                    onClick={() => setTimeFilter("weekly")}
                    className={`px-2.5 py-1 rounded-lg transition-all ${
                      timeFilter === "weekly" ? "bg-purple-600 text-white shadow" : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    Weekly
                  </button>
                  <button
                    onClick={() => setTimeFilter("allTime")}
                    className={`px-2.5 py-1 rounded-lg transition-all ${
                      timeFilter === "allTime" ? "bg-purple-600 text-white shadow" : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    All-Time
                  </button>
                </div>
              </div>
            </div>

            {/* Top 3 Podium Highlights */}
            <div className="grid grid-cols-3 gap-3 my-6">
              {/* Rank 2 */}
              <div className="p-3.5 rounded-2xl bg-[#101222] border border-cyan-500/30 flex flex-col items-center text-center shadow-lg relative group hover:border-cyan-400 transition-all">
                <span className="absolute -top-2.5 px-2 py-0.5 rounded-full bg-cyan-500 text-cyan-950 text-[10px] font-bold font-mono shadow">
                  #2 SILVER
                </span>
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-cyan-400 mb-2 mt-1 relative">
                  <Image
                    src={initialLeaderboard[1].avatar}
                    alt={initialLeaderboard[1].name}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-xs font-bold text-white truncate max-w-full">{initialLeaderboard[1].name}</span>
                <span className="text-[11px] font-mono text-cyan-300 font-semibold">{initialLeaderboard[1].points.toLocaleString()} pts</span>
                <span className="text-[10px] text-zinc-500 font-mono mt-0.5">{initialLeaderboard[1].referrals} invites</span>
              </div>

              {/* Rank 1 Crown */}
              <div className="p-4 rounded-2xl bg-gradient-to-b from-amber-500/20 via-[#141528] to-[#0f1020] border-2 border-amber-400/60 flex flex-col items-center text-center shadow-[0_0_30px_rgba(245,158,11,0.25)] relative group hover:scale-[1.02] transition-all">
                <span className="absolute -top-3 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 text-amber-950 text-[10px] font-extrabold font-mono shadow-md flex items-center gap-1">
                  <Crown className="w-3 h-3 text-amber-950 fill-amber-950" />
                  #1 CHAMPION
                </span>
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-amber-400 mb-2 mt-1 relative shadow-[0_0_15px_rgba(245,158,11,0.5)]">
                  <Image
                    src={initialLeaderboard[0].avatar}
                    alt={initialLeaderboard[0].name}
                    width={56}
                    height={56}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-xs font-extrabold text-white truncate max-w-full">{initialLeaderboard[0].name}</span>
                <span className="text-xs font-mono text-amber-300 font-bold">{initialLeaderboard[0].points.toLocaleString()} pts</span>
                <span className="text-[10px] text-amber-400/80 font-mono mt-0.5">{initialLeaderboard[0].referrals} invites</span>
              </div>

              {/* Rank 3 */}
              <div className="p-3.5 rounded-2xl bg-[#101222] border border-purple-500/30 flex flex-col items-center text-center shadow-lg relative group hover:border-purple-400 transition-all">
                <span className="absolute -top-2.5 px-2 py-0.5 rounded-full bg-purple-500 text-purple-950 text-[10px] font-bold font-mono shadow">
                  #3 BRONZE
                </span>
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-purple-400 mb-2 mt-1 relative">
                  <Image
                    src={initialLeaderboard[2].avatar}
                    alt={initialLeaderboard[2].name}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-xs font-bold text-white truncate max-w-full">{initialLeaderboard[2].name}</span>
                <span className="text-[11px] font-mono text-purple-300 font-semibold">{initialLeaderboard[2].points.toLocaleString()} pts</span>
                <span className="text-[10px] text-zinc-500 font-mono mt-0.5">{initialLeaderboard[2].referrals} invites</span>
              </div>
            </div>

            {/* Styled Table Body */}
            <div className="space-y-2 mt-4">
              <div className="grid grid-cols-12 px-4 py-2 text-[11px] font-mono text-zinc-500 uppercase tracking-wider">
                <span className="col-span-1">Rank</span>
                <span className="col-span-6 sm:col-span-5">Member</span>
                <span className="col-span-2 text-center">Invites</span>
                <span className="col-span-3 sm:col-span-4 text-right">Points</span>
              </div>

              {filteredLeaderboard.map((user) => {
                const isTop3 = user.rank <= 3;
                return (
                  <motion.div
                    key={user.rank}
                    whileHover={{ scale: 1.01 }}
                    className={`grid grid-cols-12 items-center px-4 py-3 rounded-2xl transition-all ${
                      user.username === "@dev_anish"
                        ? "bg-purple-600/15 border border-purple-500/40 shadow-[0_0_20px_rgba(168,85,247,0.15)]"
                        : "bg-white/[0.02] hover:bg-white/[0.05] border border-white/5"
                    }`}
                  >
                    {/* Rank Badge */}
                    <div className="col-span-1 flex items-center">
                      <span
                        className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-mono font-bold ${
                          user.rank === 1
                            ? "bg-amber-400 text-amber-950 shadow-[0_0_10px_rgba(245,158,11,0.5)]"
                            : user.rank === 2
                            ? "bg-cyan-400 text-cyan-950 shadow-[0_0_10px_rgba(56,189,248,0.5)]"
                            : user.rank === 3
                            ? "bg-purple-400 text-purple-950"
                            : "bg-white/5 text-zinc-400"
                        }`}
                      >
                        {user.rank}
                      </span>
                    </div>

                    {/* Member Profile */}
                    <div className="col-span-6 sm:col-span-5 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full overflow-hidden border border-white/10 relative shrink-0">
                        <Image
                          src={user.avatar}
                          alt={user.name}
                          width={32}
                          height={32}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="truncate">
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs font-bold text-white truncate">{user.name}</span>
                          {user.username === "@dev_anish" && (
                            <span className="text-[9px] font-mono px-1 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
                              YOU
                            </span>
                          )}
                        </div>
                        <span className="text-[11px] font-mono text-zinc-500 block truncate">{user.username}</span>
                      </div>
                    </div>

                    {/* Referrals Count */}
                    <div className="col-span-2 text-center font-mono text-xs font-semibold text-zinc-300">
                      {user.referrals}
                    </div>

                    {/* Total Points & Trend */}
                    <div className="col-span-3 sm:col-span-4 flex items-center justify-end gap-2">
                      <div className="text-right">
                        <span className="text-xs sm:text-sm font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300">
                          {user.points.toLocaleString()}
                        </span>
                        <span className="text-[10px] text-zinc-500 block font-mono">pts</span>
                      </div>

                      {user.trend === "up" && (
                        <div className="hidden sm:flex items-center text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">
                          <TrendingUp className="w-3 h-3 mr-0.5" />
                          <span>+{user.trendAmount}</span>
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RajViralReferral;
