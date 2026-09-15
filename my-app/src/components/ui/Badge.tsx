import React from "react";
import { cn } from "../../lib/utils";

export type BadgeVariant =
  | "default"
  | "live"
  | "violet"
  | "cyan"
  | "amber"
  | "rose"
  | "secondary"
  | "outline";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  pulseDot?: boolean;
  icon?: React.ReactNode;
}

const variantClasses: Record<BadgeVariant, string> = {
  default:
    "bg-slate-800/80 text-slate-300 border-slate-700/60 hover:bg-slate-800",
  live:
    "bg-emerald-950/60 text-emerald-400 border-emerald-500/40 shadow-[0_0_12px_rgba(16,185,129,0.2)]",
  violet:
    "bg-violet-950/60 text-violet-300 border-violet-500/40 shadow-[0_0_12px_rgba(139,92,246,0.2)]",
  cyan:
    "bg-cyan-950/60 text-cyan-300 border-cyan-500/40 shadow-[0_0_12px_rgba(6,182,212,0.2)]",
  amber:
    "bg-amber-950/60 text-amber-300 border-amber-500/40 shadow-[0_0_12px_rgba(245,158,11,0.2)]",
  rose:
    "bg-rose-950/60 text-rose-300 border-rose-500/40 shadow-[0_0_12px_rgba(244,63,94,0.2)]",
  secondary:
    "bg-slate-900/90 text-slate-400 border-slate-800 hover:text-slate-200",
  outline:
    "bg-transparent text-slate-300 border-slate-700 hover:border-slate-500",
};

const pulseColors: Record<BadgeVariant, string> = {
  live: "bg-emerald-400 shadow-[0_0_8px_#10b981]",
  violet: "bg-violet-400 shadow-[0_0_8px_#8b5cf6]",
  cyan: "bg-cyan-400 shadow-[0_0_8px_#06b6d4]",
  amber: "bg-amber-400 shadow-[0_0_8px_#f59e0b]",
  rose: "bg-rose-400 shadow-[0_0_8px_#f43f5e]",
  default: "bg-slate-400",
  secondary: "bg-slate-400",
  outline: "bg-slate-400",
};

export const Badge: React.FC<BadgeProps> = ({
  children,
  className,
  variant = "default",
  pulseDot = false,
  icon,
  ...props
}) => {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono font-medium rounded-full border backdrop-blur-md transition-colors duration-200 select-none",
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {(pulseDot || variant === "live") && (
        <span className="relative flex h-2 w-2 items-center justify-center">
          <span
            className={cn(
              "absolute inline-flex h-full w-full animate-ping rounded-full opacity-75",
              pulseColors[variant] || pulseColors.live
            )}
          />
          <span
            className={cn(
              "relative inline-flex h-1.5 w-1.5 rounded-full",
              pulseColors[variant] || pulseColors.live
            )}
          />
        </span>
      )}
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
