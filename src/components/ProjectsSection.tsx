import React from "react";
import { Github, ExternalLink, Lock, Rocket, Brain, Layers, Terminal, Navigation } from "lucide-react";

type ProjectStatus = "public" | "in-development" | "private-client";

interface PersonalProject {
  name: string;
  tagline: string;
  description: string;
  tags: string[];
  status: ProjectStatus;
  githubUrl?: string;
  icon: React.ReactNode;
}

interface ClientProject {
  name: string;
  client: string;
  description: string;
  tags: string[];
  productUrl?: string;
  accent: "sand" | "cream";
}

const personalProjects: PersonalProject[] = [
  {
    name: "Holocron",
    tagline: "Personal knowledge management, across every device",
    description:
      "My personal system for capturing and retrieving learning insights. Built with iOS, MCP servers, and Convex — everything I know lives here, queryable by AI.",
    tags: ["iOS", "MCP", "Convex", "Claude API"],
    status: "public",
    githubUrl: "https://github.com/hackerpug-ai/holocron",
    icon: <Brain className="w-5 h-5 text-sand" strokeWidth={1.5} />,
  },
  {
    name: "PixelPerfect",
    tagline: "Atomic design discipline for Claude Code",
    description:
      "A Claude Code plugin that enforces consistent UI design across agentic sessions. Coding agents are notoriously inconsistent — PixelPerfect standardizes via Storybook integration.",
    tags: ["Claude Code", "Plugin", "Storybook", "TypeScript"],
    status: "public",
    githubUrl: "https://github.com/justincrich/pixel-perfect",
    icon: <Layers className="w-5 h-5 text-sand" strokeWidth={1.5} />,
  },
  {
    name: "Captain's Ready Room",
    tagline: "Captain Picard as your personal life coach",
    description:
      "A fun hack that puts Captain Picard (TNG) in the role of life coach. Built in a weekend — part AI experiment, part love letter to Star Trek. Still surprisingly useful advice.",
    tags: ["AI", "React", "OpenAI", "Fun"],
    status: "public",
    githubUrl: "https://github.com/justincrich/captains-readyroom",
    icon: <Terminal className="w-5 h-5 text-sand" strokeWidth={1.5} />,
  },
  {
    name: "Ship Commander",
    tagline: "Agentic workflow orchestration",
    description:
      "A tool for commanding and orchestrating multi-agent workflows. Built for managing complex AI pipelines with visibility into every step of the process.",
    tags: ["Multi-Agent", "TypeScript", "Claude API"],
    status: "in-development",
    icon: <Rocket className="w-5 h-5 text-sand" strokeWidth={1.5} />,
  },
  {
    name: "LaneShadow",
    tagline: "Intelligent traffic and routing intelligence",
    description:
      "Real-time data processing and intelligence layer for traffic and navigation systems. Exploring how AI can make routing smarter at scale.",
    tags: ["TypeScript", "Real-time", "AI"],
    status: "in-development",
    icon: <Navigation className="w-5 h-5 text-sand" strokeWidth={1.5} />,
  },
];

const clientProjects: ClientProject[] = [
  {
    name: "CtrlEnter",
    client: "Enter Health",
    description:
      "An Electron desktop app that gives doctors an AI copilot — capable of chatting with their screen in real time. I bootstrapped v1 in under a month: architecture, UI, multi-agent orchestration, and HIPAA-compliant data handling.",
    tags: ["Electron", "React", "OpenAI Vision", "Multi-Agent", "HIPAA"],
    productUrl: "https://www.enter.health/ctrl-enter",
    accent: "cream",
  },
  {
    name: "Agent Reliability Manager",
    client: "Galileo AI",
    description:
      "Built the agent mapper for Galileo's reliability platform — a visual interface for tracking, debugging, and managing complex LLM agent flows. Created the foundational UI patterns their team now builds on.",
    tags: ["React", "Agent Visualization", "LLM Evaluation", "TypeScript"],
    productUrl: "https://galileo.ai/agent-reliability",
    accent: "sand",
  },
];

function StatusBadge({ status }: { status: ProjectStatus }) {
  if (status === "public") {
    return null;
  }
  if (status === "in-development") {
    return (
      <span className="flex items-center gap-1.5 text-xs text-amber-300/90 font-medium">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400" />
        </span>
        In Development
      </span>
    );
  }
  return null;
}

function PersonalProjectCard({ project }: { project: PersonalProject }) {
  return (
    <div className="relative bg-dark-brown/50 border border-sand/20 p-6 rounded-lg hover:border-sand/40 transition-colors flex flex-col gap-4 group">
      {/* Header row */}
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-3">
          <div className="flex-shrink-0 w-9 h-9 rounded-md bg-light-brown/60 flex items-center justify-center">
            {project.icon}
          </div>
          <div>
            <h3 className="title2 text-sand leading-tight">{project.name}</h3>
            <p className="text-xs text-cream/70 mt-0.5">{project.tagline}</p>
          </div>
        </div>
        <div className="flex-shrink-0 flex items-center gap-2 pt-0.5">
          <StatusBadge status={project.status} />
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/50 hover:text-sand transition-colors"
              aria-label={`View ${project.name} on GitHub`}
            >
              <Github className="w-4 h-4" strokeWidth={1.5} />
            </a>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-lite/75 text-sm leading-relaxed">{project.description}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-0.5 bg-cream/10 text-cream/80 text-xs rounded-full border border-cream/20"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

function ClientProjectCard({ project }: { project: ClientProject }) {
  const accentClass =
    project.accent === "sand" ? "border-sand" : "border-cream";
  const labelClass =
    project.accent === "sand" ? "text-sand" : "text-cream";

  return (
    <div
      className={`border-l-4 ${accentClass} pl-6 bg-dark-brown/30 p-5 rounded-r-lg flex flex-col gap-3`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className={`text-lg font-semibold ${labelClass}`}>
            {project.name}
          </h3>
          <p className="text-sm text-cream/60 mt-0.5">{project.client}</p>
        </div>
        <div className="flex items-center gap-3 pt-0.5 flex-shrink-0">
          <span className="flex items-center gap-1.5 text-xs text-lite/40 font-medium">
            <Lock className="w-3 h-3" />
            Private Source
          </span>
          {project.productUrl && (
            <a
              href={project.productUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs text-cream/60 hover:text-sand transition-colors font-medium"
            >
              View Product
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>
      </div>
      <p className="text-lite/75 text-sm leading-relaxed">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className={`px-2.5 py-0.5 text-xs rounded-full border ${
              project.accent === "sand"
                ? "bg-sand/10 text-sand/80 border-sand/20"
                : "bg-cream/10 text-cream/80 border-cream/20"
            }`}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export const ProjectsSection = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 w-full">
      {/* Page Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-sand mb-3">Projects</h1>
        <p className="text-lite/70 text-lg leading-relaxed max-w-2xl">
          A mix of open source tools I use daily, experiments I built for fun, and
          client work I&apos;m proud of — even when I can&apos;t share the code.
        </p>
      </div>

      {/* Personal Projects */}
      <section className="mb-14">
        <h2 className="title1 text-sand mb-6">Personal &amp; Open Source</h2>
        <div className="grid grid-cols-2 md:grid-cols-1 gap-5">
          {personalProjects.map((project) => (
            <PersonalProjectCard key={project.name} project={project} />
          ))}
        </div>
      </section>

      {/* Client Work */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <h2 className="title1 text-sand">Client Work</h2>
          <span className="px-2.5 py-0.5 text-xs rounded-full border border-lite/20 text-lite/40 font-medium">
            Source under NDA
          </span>
        </div>
        <div className="space-y-6">
          {clientProjects.map((project) => (
            <ClientProjectCard key={project.name} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
};
