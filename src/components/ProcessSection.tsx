import React from "react";

export const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Discovery Call",
      duration: "(30 mins)",
      description:
        "Assess your AI infrastructure needs and identify key bottlenecks and opportunities",
      icon: "🎯",
    },
    {
      number: "02",
      title: "Technical Deep Dive",
      duration: "(2-3 days)",
      description:
        "Architecture review and recommendations with proof of concept development",
      icon: "🔬",
    },
    {
      number: "03",
      title: "Implementation",
      duration: "(2-8 weeks)",
      description:
        "Hands-on development and deployment with team training and documentation",
      icon: "🚀",
    },
    {
      number: "04",
      title: "Scale & Optimize",
      duration: "(Ongoing)",
      description:
        "Performance monitoring and iterative improvements for continuous growth",
      icon: "📈",
    },
  ];

  return (
    <section className="w-full max-w-6xl mx-auto px-8 py-16">
      <h2 className="title1 text-center text-sand mb-4">
        How We Work Together
      </h2>
      <p className="text-center text-cream mb-12 max-w-2xl mx-auto">
        A proven 4-step process that takes your AI infrastructure from concept
        to scale
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="text-center">
            {/* Step number and connector */}
            <div className="relative mb-6">
              <div className="bg-sand text-dark w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-2">
                {step.number}
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-1/2 w-full border-t-2 border-cream/30 border-dashed"></div>
              )}
            </div>

            {/* Step content */}
            <div className="text-4xl mb-4">{step.icon}</div>
            <h3 className="title2 text-sand mb-2">{step.title}</h3>
            <div className="text-cream text-sm mb-3">{step.duration}</div>
            <p className="text-cream text-sm leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
