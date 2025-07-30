import React from "react";

export const CaseStudiesSection = () => {
  const caseStudies = [
    {
      company: "Galileo AI",
      project: "Distributed Evaluation Platform",
      description:
        "Built distributed evaluation platform for LLM agents using Python backends and TypeScript frontends",
      tech: ["Python", "TypeScript", "Distributed Systems", "LLM Evaluation"],
      impact: "Platform now processes 10M+ evaluations monthly",
      icon: "🧠",
    },
    {
      company: "Inkitt",
      project: "AI Content Generation System",
      description:
        "Architected full-stack AI content generation system serving 100k+ users with 40% performance improvement",
      tech: [
        "Full-Stack Development",
        "AI Content Generation",
        "Performance Optimization",
      ],
      impact: "40% performance improvement, 100k+ active users",
      icon: "✍️",
    },
    {
      company: "Okoa Capital",
      project: "ML Document Processing",
      description:
        "Developed ML-powered document processing system reducing processing time by 70%",
      tech: [
        "Machine Learning",
        "Document Processing",
        "Pipeline Optimization",
      ],
      impact: "70% processing time reduction",
      icon: "📄",
    },
  ];

  return (
    <section id="case-studies" className="w-full max-w-6xl mx-auto px-8 py-16">
      <h2 className="title1 text-center text-sand mb-4">
        Real Results for real Companies
      </h2>
      <p className="text-center text-cream mb-12 max-w-2xl mx-auto">
        Proven track record of delivering production-ready AI infrastructure
        that scales
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {caseStudies.map((study, index) => (
          <div
            key={index}
            className="bg-light-brown p-8 rounded-lg border border-cream/20 hover:border-sand/50 transition-colors"
          >
            <div className="text-4xl mb-4">{study.icon}</div>
            <h3 className="title2 text-sand mb-2">{study.company}</h3>
            <h4 className="text-cream font-semibold mb-4">{study.project}</h4>
            <p className="text-cream mb-6 leading-relaxed">
              {study.description}
            </p>

            {/* Tech stack */}
            <div className="mb-6">
              <div className="text-sand text-sm font-semibold mb-2">
                Technologies:
              </div>
              <div className="flex flex-wrap gap-2">
                {study.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-dark-brown text-cream px-2 py-1 rounded text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Impact */}
            <div className="bg-dark-brown p-3 rounded">
              <div className="text-sand font-semibold text-sm mb-1">
                Impact:
              </div>
              <div className="text-cream text-sm">{study.impact}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
