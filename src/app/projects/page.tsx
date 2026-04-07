import React from "react";
import { Header } from "@/components/Header";
import { ProjectsSection } from "@/components/ProjectsSection";

export default function ProjectsPage() {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <Header />
      <ProjectsSection />
    </div>
  );
}
