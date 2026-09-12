import React from "react";

export const Icons = {
  github: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  ),
  linkedin: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  ),
  x: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M4 4l11.733 16h4.267l-11.733-16z" />
      <path d="M4 20l6.768-6.768m2.464-2.464l6.768-6.768" />
    </svg>
  ),
  discord: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M18 6h0a14.5 14.5 0 0 0-4-1.5 10 10 0 0 0-.5 1.5 12.6 12.6 0 0 0-3 0 10 10 0 0 0-.5-1.5 14.5 14.5 0 0 0-4 1.5C3.5 10 3 14 3.5 18a15.8 15.8 0 0 0 5 2.5 11.2 11.2 0 0 0 1-1.5 8.7 8.7 0 0 1-2-.9c.2-.1.3-.3.5-.4a10.8 10.8 0 0 0 8 0c.2.1.3.3.5.4a8.7 8.7 0 0 1-2 .9 11.2 11.2 0 0 0 1 1.5 15.8 15.8 0 0 0 5-2.5c.7-4.5 0-8.5-2.5-12z" />
      <circle cx="8.5" cy="13.5" r="1.5" />
      <circle cx="15.5" cy="13.5" r="1.5" />
    </svg>
  ),
};
