import React from "react";
import { Brain, Code2, Building2, Sparkles } from "lucide-react";

export const ProfessionalIntro = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="">
        {/* Main Introduction */}
        <div className="text-center mb-12">
          {/* Hero Image */}
          <div className="flex justify-center mb-8">
            <img
              src="/hero.png"
              alt="Justin Rich - AI Engineering Consultant"
              className="object-contain rounded-lg"
            />
          </div>

          <h1 className="text-4xl font-bold text-sand mb-4">Justin Rich</h1>
          <h2 className="text-2xl text-cream font-semibold mb-6">
            AI Engineering Consultant
          </h2>
          <p className="text-lg text-lite/90 leading-relaxed max-w-3xl mx-auto">
            Technical Co-Founder and AI Strategy Consultant with 7+ years of
            experience building cutting-edge AI-powered applications. I
            specialize in integrating LLMs, generative AI, and machine learning
            into scalable frontend solutions that drive business transformation
            and exceptional user experiences.
          </p>
        </div>

        {/* Expertise Section */}
        <div className="mb-12">
          <h3 className="title1 text-sand mb-8 text-center">Core Expertise</h3>
          <div className="grid grid-cols-2 md:grid-cols-1 gap-8 max-w-4xl mx-auto">
            <div className="bg-dark-brown/50 border border-sand/20 p-8 rounded-lg hover:border-sand/40 transition-colors">
              <div className="flex items-center mb-4">
                <Brain className="w-8 h-8 text-sand mr-4" strokeWidth={1.5} />
                <h4 className="font-semibold text-sand text-lg">
                  AI Integration & Strategy
                </h4>
              </div>
              <p className="text-lite/80 text-sm leading-relaxed">
                LLM integration, prompt engineering, AI agent workflows, and
                generative AI evaluation platforms. Transforming complex AI
                capabilities into seamless user experiences.
              </p>
            </div>

            <div className="bg-dark-brown/50 border border-cream/20 p-8 rounded-lg hover:border-cream/40 transition-colors">
              <div className="flex items-center mb-4">
                <Code2 className="w-8 h-8 text-cream mr-4" strokeWidth={1.5} />
                <h4 className="font-semibold text-sand text-lg">
                  React & Next.js
                </h4>
              </div>
              <p className="text-lite/80 text-sm leading-relaxed">
                Building scalable, performant web applications with TypeScript,
                React Native, and modern frameworks. Creating responsive
                interfaces that users love.
              </p>
            </div>

            <div className="bg-dark-brown/50 border border-sand/20 p-8 rounded-lg hover:border-sand/40 transition-colors">
              <div className="flex items-center mb-4">
                <Building2
                  className="w-8 h-8 text-sand mr-4"
                  strokeWidth={1.5}
                />
                <h4 className="font-semibold text-sand text-lg">
                  Technical Architecture
                </h4>
              </div>
              <p className="text-lite/80 text-sm leading-relaxed">
                Full-stack architecture design, GraphQL APIs, vector databases,
                and AI-powered backend systems. Building robust foundations for
                scalable applications.
              </p>
            </div>

            <div className="bg-dark-brown/50 border border-cream/20 p-8 rounded-lg hover:border-cream/40 transition-colors">
              <div className="flex items-center mb-4">
                <Sparkles
                  className="w-8 h-8 text-cream mr-4"
                  strokeWidth={1.5}
                />
                <h4 className="font-semibold text-sand text-lg">
                  AI-Powered UX
                </h4>
              </div>
              <p className="text-lite/80 text-sm leading-relaxed">
                Conversational interfaces, AI debugging tools, and intelligent
                dashboards for complex workflows. Making AI accessible and
                delightful for end users.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="title1 text-sand mb-8 text-center">
            Client Engagements
          </h3>
          <div className="space-y-8">
            <div className="border-l-4 border-sand pl-6 bg-dark-brown/30 p-4 rounded-r-lg">
              <h4 className="text-xl font-semibold text-sand mb-2">
                Galileo AI
              </h4>
              <p className="text-sm text-cream/80 mb-3">
                April 2025 - July 2025
              </p>
              <p className="text-lite/90 mb-3">
                Architected agent management and evaluation systems for a
                Generative AI Evaluation Platform. Built React-based dashboards
                for LLM agent workflows and developed advanced debugging tools
                for AI failure mode visualization and analysis.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-sand/20 text-sand text-sm rounded-full border border-sand/30">
                  React
                </span>
                <span className="px-3 py-1 bg-sand/20 text-sand text-sm rounded-full border border-sand/30">
                  LLM Evaluation
                </span>
                <span className="px-3 py-1 bg-sand/20 text-sand text-sm rounded-full border border-sand/30">
                  AI Debugging
                </span>
                <span className="px-3 py-1 bg-sand/20 text-sand text-sm rounded-full border border-sand/30">
                  Agent Workflows
                </span>
              </div>
            </div>

            <div className="border-l-4 border-cream pl-6 bg-dark-brown/30 p-4 rounded-r-lg">
              <h4 className="text-xl font-semibold text-sand mb-2">Inkitt</h4>
              <p className="text-sm text-cream/80 mb-3">
                July 2024 - April 2025
              </p>
              <p className="text-lite/90 mb-3">
                Led development of next-generation AI storytelling platform with
                AI-powered content creation interfaces. Integrated Claude and
                OpenAI APIs for creative workflows and built React Native mobile
                applications with intelligent feedback systems.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-cream/20 text-cream text-sm rounded-full border border-cream/30">
                  Next.js
                </span>
                <span className="px-3 py-1 bg-cream/20 text-cream text-sm rounded-full border border-cream/30">
                  React Native
                </span>
                <span className="px-3 py-1 bg-cream/20 text-cream text-sm rounded-full border border-cream/30">
                  OpenAI API
                </span>
                <span className="px-3 py-1 bg-cream/20 text-cream text-sm rounded-full border border-cream/30">
                  Claude API
                </span>
                <span className="px-3 py-1 bg-cream/20 text-cream text-sm rounded-full border border-cream/30">
                  TypeScript
                </span>
              </div>
            </div>

            <div className="border-l-4 border-sand pl-6 bg-dark-brown/30 p-4 rounded-r-lg">
              <h4 className="text-xl font-semibold text-sand mb-2">
                Okoa Capital
              </h4>
              <p className="text-sm text-cream/80 mb-3">
                March 2024 - July 2024
              </p>
              <p className="text-lite/90 mb-3">
                Architected Real Estate Lending Intelligence platform with
                conversational AI interfaces for complex lending workflows.
                Developed document processing systems with natural language
                querying and AI-powered deal analysis dashboards.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-sand/20 text-sand text-sm rounded-full border border-sand/30">
                  Conversational AI
                </span>
                <span className="px-3 py-1 bg-sand/20 text-sand text-sm rounded-full border border-sand/30">
                  Document Processing
                </span>
                <span className="px-3 py-1 bg-sand/20 text-sand text-sm rounded-full border border-sand/30">
                  NLP
                </span>
                <span className="px-3 py-1 bg-sand/20 text-sand text-sm rounded-full border border-sand/30">
                  Real Estate
                </span>
              </div>
            </div>

            <div className="border-l-4 border-cream pl-6 bg-dark-brown/30 p-4 rounded-r-lg">
              <h4 className="text-xl font-semibold text-sand mb-2">
                Greenlite
              </h4>
              <p className="text-sm text-cream/80 mb-3">February 2024</p>
              <p className="text-lite/90 mb-3">
                Built Financial Compliance AI Platform with prompt evaluation
                systems for regulatory-compliant AI agents. Developed
                React-based monitoring dashboards and automated testing
                frameworks meeting federal banking regulatory standards.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-cream/20 text-cream text-sm rounded-full border border-cream/30">
                  Financial Compliance
                </span>
                <span className="px-3 py-1 bg-cream/20 text-cream text-sm rounded-full border border-cream/30">
                  Regulatory AI
                </span>
                <span className="px-3 py-1 bg-cream/20 text-cream text-sm rounded-full border border-cream/30">
                  Monitoring
                </span>
                <span className="px-3 py-1 bg-cream/20 text-cream text-sm rounded-full border border-cream/30">
                  Banking Standards
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-light-brown to-dark-brown border border-sand/30 text-lite rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-4 text-sand">
            Ready to Transform Your Business with AI?
          </h3>
          <p className="text-lg mb-6 text-lite/90">
            Whether you need AI strategy consulting, LLM integration, or
            cutting-edge frontend development, I bring proven expertise from
            Galileo AI, Inkitt, and other leading tech companies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:justin@hackerpug.com"
              className="bg-sand text-dark-brown px-8 py-3 rounded-lg font-semibold hover:bg-cream transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* Technologies */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-sand mb-6">
            Technologies & Tools
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "React",
              "TypeScript",
              "Next.js",
              "React Native",
              "Node.js",
              "GraphQL",
              "OpenAI API",
              "Claude API",
              "Langchain",
              "Vector Databases",
              "AWS",
              "Vercel",
              "Pinecone",
              "TailwindCSS",
              "Deepgram",
              "PlayHT",
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-dark-brown/60 border border-cream/30 text-cream rounded-full text-sm hover:border-cream/50 hover:bg-dark-brown/80 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
