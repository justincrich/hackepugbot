import React from "react";

export const SocialProofSection = () => {
  return (
    <section className="w-full max-w-6xl mx-auto px-8 py-16">
      <h2 className="title1 text-center text-sand mb-12">
        Trusted by Leading AI Companies
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Testimonial 1 */}
        <div className="bg-light-brown p-8 rounded-lg border border-cream/20">
          <div className="text-4xl mb-4">⚡</div>
          <blockquote className="text-lg text-cream mb-4 italic">
            "Reduced our AI model evaluation time by 60% while improving
            accuracy metrics across our entire platform."
          </blockquote>
          <div className="text-sand font-semibold">Technical Director</div>
          <div className="text-cream text-sm">AI-First Startup</div>
        </div>

        {/* Testimonial 2 */}
        <div className="bg-light-brown p-8 rounded-lg border border-cream/20">
          <div className="text-4xl mb-4">🚀</div>
          <blockquote className="text-lg text-cream mb-4 italic">
            "Justin delivered a production-ready AI content system that now
            serves over 100,000 users daily."
          </blockquote>
          <div className="text-sand font-semibold">VP of Engineering</div>
          <div className="text-cream text-sm">Mid-Stage Company</div>
        </div>
      </div>
    </section>
  );
};
