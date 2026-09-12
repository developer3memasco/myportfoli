import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anish Sharma | Full Stack Web Developer & React.js Specialist",
  description:
    "Portfolio of Anish Sharma - Results-driven Full Stack Developer specializing in React.js, Next.js, RESTful API integrations, and modern AI / full-stack architectures.",
  keywords: [
    "Anish Sharma",
    "Full Stack Developer",
    "React.js Specialist",
    "Next.js Developer",
    "Frontend Engineer",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "MongoDB",
    "Dhanbad",
    "India",
  ],
  authors: [{ name: "Anish Sharma" }],
  openGraph: {
    title: "Anish Sharma | Full Stack Web Developer & React.js Specialist",
    description:
      "Results-driven Full Stack Developer specializing in React.js, Next.js, and dynamic frontend architectures.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-[#070709] text-[#f3f4f6] font-sans antialiased selection:bg-purple-500/30 selection:text-purple-200 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
