import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { cn } from "../../lib/utils";
import { Loader2 } from "lucide-react";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "danger";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ReactNode;
  iconRight?: React.ReactNode;
  isLoading?: boolean;
  href?: string;
  target?: string;
  rel?: string;
  fullWidth?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "relative group bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 text-white font-medium border border-violet-400/30 shadow-[0_0_20px_rgba(124,58,237,0.35)] hover:shadow-[0_0_30px_rgba(124,58,237,0.6)] hover:border-violet-300/60 active:scale-[0.98]",
  secondary:
    "bg-slate-900/90 text-slate-100 font-medium border border-slate-700/80 backdrop-blur-md hover:bg-slate-800 hover:border-slate-500/80 hover:text-white hover:shadow-[0_0_20px_rgba(255,255,255,0.08)] active:scale-[0.98]",
  outline:
    "bg-transparent text-slate-300 font-medium border border-slate-800 hover:border-violet-500/50 hover:text-violet-300 hover:bg-violet-950/20 active:scale-[0.98]",
  ghost:
    "bg-transparent text-slate-400 hover:text-slate-100 hover:bg-slate-800/60 active:scale-[0.98]",
  danger:
    "bg-rose-600/90 text-white font-medium border border-rose-500/40 shadow-[0_0_15px_rgba(244,63,94,0.3)] hover:bg-rose-500 hover:shadow-[0_0_25px_rgba(244,63,94,0.5)] active:scale-[0.98]",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-xs rounded-lg gap-1.5",
  md: "px-4 py-2 text-sm rounded-xl gap-2",
  lg: "px-6 py-3 text-base rounded-xl gap-2.5",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant = "primary",
      size = "md",
      icon,
      iconRight,
      isLoading = false,
      disabled,
      href,
      target,
      rel,
      fullWidth = false,
      type = "button",
      ...props
    },
    ref
  ) => {
    const baseClasses = cn(
      "inline-flex items-center justify-center transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/80 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 select-none",
      variantStyles[variant],
      sizeStyles[size],
      fullWidth && "w-full",
      className
    );

    const content = (
      <>
        {isLoading ? (
          <Loader2 className="w-4 h-4 animate-spin text-current" />
        ) : (
          icon && <span className="shrink-0 transition-transform group-hover:scale-110 duration-200">{icon}</span>
        )}
        <span>{children}</span>
        {!isLoading && iconRight && (
          <span className="shrink-0 transition-transform group-hover:translate-x-0.5 duration-200">{iconRight}</span>
        )}
      </>
    );

    if (href) {
      return (
        <a
          href={href}
          target={target}
          rel={target === "_blank" ? (rel || "noopener noreferrer") : rel}
          className={baseClasses}
        >
          {content}
        </a>
      );
    }

    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled || isLoading}
        className={baseClasses}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
