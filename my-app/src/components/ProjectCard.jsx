"use client";

import React, { useState } from "react";
import { Button } from "./ui/Button";
import { Badge } from "./ui/Badge";
import { CheckCircle2, Copy, Check, Terminal, Sparkles, ChevronRight } from "lucide-react";

const escapeHtml = (str) =>
  str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

const highlightCodeLine = (line) => {
  const tokenRegex = /(\/\/[^\n]*)|("[^"\\]*(?:\\.[^"\\]*)*"|'[^'\\]*(?:\\.[^'\\]*)*'|`[^`\\]*(?:\\.[^`\\]*)*`)|(\b(?:import|export|default|async|function|const|let|var|return|new|await|from|useMemo|filter|includes)\b)|(\b[A-Z][a-zA-Z0-9_]*\b)|([{}[\]()=>?:;,])/g;

  let lastIndex = 0;
  let html = "";
  let match;

  while ((match = tokenRegex.exec(line)) !== null) {
    if (match.index > lastIndex) {
      html += escapeHtml(line.slice(lastIndex, match.index));
    }

    const [, comment, str, keyword, capId, symbol] = match;

    if (comment) {
      html += `<span class="text-slate-500 italic">${escapeHtml(comment)}</span>`;
    } else if (str) {
      html += `<span class="text-emerald-300">${escapeHtml(str)}</span>`;
    } else if (keyword) {
      html += `<span class="text-purple-400 font-semibold">${escapeHtml(keyword)}</span>`;
    } else if (capId) {
      html += `<span class="text-amber-300 font-medium">${escapeHtml(capId)}</span>`;
    } else if (symbol) {
      html += `<span class="text-slate-400">${escapeHtml(symbol)}</span>`;
    }

    lastIndex = tokenRegex.lastIndex;
  }

  if (lastIndex < line.length) {
    html += escapeHtml(line.slice(lastIndex));
  }

  return html;
};

/**
 * Modern Developer Portfolio Project Card Component
 */
export default function ProjectCard({
  title,
  subtitle,
  description,
  status = { label: "Sub-Second Load", variant: "live", pulse: true },
  codeSnippet = {
    fileName: "ecommerce-dispatcher.ts",
    language: "TypeScript",
    code: `// Dynamic Filter & Cart Dispatcher\nconst filteredProducts = useMemo(() => {\n  return products.filter(p => \n    p.category.includes(selectedCategory) && \n    p.price <= maxBudget\n  );\n}, [products, selectedCategory, maxBudget]);`,
  },
  features = [],
  tags = [],
  actions = [],
  detailsHref,
  onDetailsClick,
  className = "",
}) {
  const [copied, setCopied] = useState(false);

  const handleCopyCode = async () => {
    if (!codeSnippet?.code) return;
    try {
      await navigator.clipboard.writeText(codeSnippet.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy code snippet:", err);
    }
  };

  const renderFormattedCode = (rawCode) => {
    if (!rawCode) return null;
    const lines = rawCode.split("\n");

    return lines.map((line, idx) => {
      const formattedHtml = highlightCodeLine(line);

      return (
        <div key={idx} className="table-row font-mono text-xs leading-6">
          <span className="table-cell select-none pr-4 text-right text-slate-600 font-mono text-[11px] w-6">
            {idx + 1}
          </span>
          <span
            className="table-cell whitespace-pre text-slate-200"
            dangerouslySetInnerHTML={{ __html: formattedHtml }}
          />
        </div>
      );
    });
  };

  return (
    <article
      className={`group relative w-full overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950/80 p-6 md:p-8 backdrop-blur-xl shadow-2xl transition-all duration-300 hover:border-violet-500/40 hover:shadow-[0_0_50px_-12px_rgba(124,58,237,0.25)] ${className}`}
    >
      {/* Background ambient gradient glows */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-violet-600/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-cyan-600/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

      {/* Top Section: Dedicated Code Snippet Display Box */}
      {codeSnippet && (
        <div className="relative mb-6 overflow-hidden rounded-xl border border-slate-800/90 bg-slate-900/90 shadow-inner">
          {/* Terminal Window Header */}
          <div className="flex items-center justify-between border-b border-slate-800/80 bg-slate-950/90 px-4 py-2.5">
            <div className="flex items-center space-x-2">
              <span className="h-3 w-3 rounded-full bg-rose-500/80 border border-rose-600/40 inline-block" />
              <span className="h-3 w-3 rounded-full bg-amber-500/80 border border-amber-600/40 inline-block" />
              <span className="h-3 w-3 rounded-full bg-emerald-500/80 border border-emerald-600/40 inline-block" />
              <div className="ml-2 flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                <Terminal className="h-3.5 w-3.5 text-violet-400" />
                <span className="text-slate-300">{codeSnippet.fileName || "code-snippet.ts"}</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {codeSnippet.language && (
                <span className="rounded bg-slate-800 px-2 py-0.5 text-[10px] font-mono font-medium text-slate-400 border border-slate-700/50">
                  {codeSnippet.language}
                </span>
              )}
              <button
                onClick={handleCopyCode}
                type="button"
                className="flex items-center gap-1 rounded bg-slate-800/90 px-2 py-1 text-[11px] font-mono text-slate-300 transition-colors hover:bg-slate-700 hover:text-white border border-slate-700/60 focus:outline-none"
                title="Copy code snippet"
              >
                {copied ? (
                  <>
                    <Check className="h-3 w-3 text-emerald-400" />
                    <span className="text-emerald-400 font-medium">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3 w-3 text-slate-400" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Code Body Container */}
          <div className="max-h-56 overflow-x-auto overflow-y-auto p-4 bg-slate-950/70">
            <div className="table min-w-full font-mono text-xs">
              {renderFormattedCode(codeSnippet.code)}
            </div>
          </div>
        </div>
      )}

      {/* Main Content Section */}
      <div className="space-y-4">
        {/* Header Metadata Row */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          {subtitle && (
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-violet-400 flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5" />
              {subtitle}
            </span>
          )}
          {status && (
            <Badge variant={status.variant || "live"} pulseDot={status.pulse ?? true}>
              {status.label}
            </Badge>
          )}
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold tracking-tight text-white group-hover:text-violet-200 transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm leading-relaxed text-slate-300/90">
          {description}
        </p>

        {/* Checkmark Feature List */}
        {features && features.length > 0 && (
          <div className="pt-2">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-2.5">
              Key Capabilities & Highlights
            </h4>
            <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {features.map((feature, idx) => {
                const isObject = typeof feature === "object" && feature !== null;
                const featTitle = isObject ? feature.title : feature;
                const featDesc = isObject ? feature.desc : null;

                return (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400 mt-0.5" />
                    <div className="text-xs leading-tight">
                      <span className="font-medium text-slate-200">{featTitle}</span>
                      {featDesc && (
                        <p className="text-[11px] text-slate-400 mt-0.5">{featDesc}</p>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        )}

        {/* Technology Tags Section */}
        {tags && tags.length > 0 && (
          <div className="pt-3 border-t border-slate-800/80">
            <div className="flex flex-wrap items-center gap-1.5">
              {tags.map((tag, idx) => {
                const tagName = typeof tag === "string" ? tag : tag.name;
                const tagVariant = typeof tag === "string" ? "secondary" : (tag.variant || "secondary");
                return (
                  <Badge key={idx} variant={tagVariant}>
                    {tagName}
                  </Badge>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Bottom Action Bar */}
      <div className="mt-6 flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-800/80">
        <div className="flex flex-wrap items-center gap-3">
          {actions.map((action, idx) => (
            <Button
              key={idx}
              variant={action.variant || (idx === 0 ? "primary" : "secondary")}
              size={action.size || "md"}
              href={action.href}
              target={action.target || "_blank"}
              icon={action.icon}
              iconRight={action.iconRight}
              onClick={action.onClick}
            >
              {action.label}
            </Button>
          ))}
        </div>

        {(detailsHref || onDetailsClick) && (
          <a
            href={detailsHref || "#"}
            onClick={onDetailsClick}
            className="inline-flex items-center gap-1 text-xs font-mono text-slate-400 hover:text-violet-300 transition-colors"
          >
            <span>Details</span>
            <ChevronRight className="h-3.5 w-3.5" />
          </a>
        )}
      </div>
    </article>
  );
}
