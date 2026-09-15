import React from "react";
import { ProjectShowcase } from "@/components/ProjectShowcase";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Developer Portfolio Project Card Showcase",
  description: "Modern glassmorphism developer portfolio project card built with React, Next.js, and Tailwind CSS.",
};

export default function ProjectCardDemoPage() {
  return <ProjectShowcase />;
}
