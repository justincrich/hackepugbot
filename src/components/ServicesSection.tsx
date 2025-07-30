import React from "react";

export const ServicesSection = () => {
  const services = [
    {
      icon: "🏗️",
      title: "AI Infrastructure Architecture",
      description:
        "Distributed evaluation platforms, LLM integration and scaling, Real-time monitoring and APIs",
      result: "40% performance improvements",
      features: [
        "Distributed evaluation platforms",
        "LLM integration and scaling",
        "Real-time monitoring and APIs",
        "Microservices architecture",
      ],
    },
    {
      icon: "⚡",
      title: "Full-Stack AI Development",
      description:
        "Python/TypeScript AI applications, SDK and developer tool creation, Containerized microservices",
      result: "50% faster deployment times",
      features: [
        "Python/TypeScript AI applications",
        "SDK and developer tool creation",
        "Containerized microservices",
        "API development and optimization",
      ],
    },
    {
      icon: "🔍",
      title: "Technical Due Diligence",
      description:
        "AI system audits and optimization, Scalability assessments, Performance bottleneck elimination",
      result: "70% processing time reductions",
      features: [
        "AI system audits and optimization",
        "Scalability assessments",
        "Performance bottleneck elimination",
        "Architecture reviews",
      ],
    },
  ];

  return (
    <section className="w-full max-w-6xl mx-auto px-8 py-16">
      <h2 className="title1 text-center text-sand mb-4">How I Help You Win</h2>
      <p className="text-center text-cream mb-12 max-w-2xl mx-auto">
        Three core service pillars that transform your AI infrastructure from
        prototype to production
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-light-brown p-8 rounded-lg border border-cream/20 hover:border-sand/50 transition-colors"
          >
            <div className="text-5xl mb-4">{service.icon}</div>
            <h3 className="title2 text-sand mb-4">{service.title}</h3>

            <ul className="space-y-2 mb-6">
              {service.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="text-cream flex items-start">
                  <span className="text-sand mr-2">•</span>
                  {feature}
                </li>
              ))}
            </ul>

            <div className="bg-dark-brown p-3 rounded text-center">
              <div className="text-sand font-semibold">Result:</div>
              <div className="text-cream">{service.result}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
