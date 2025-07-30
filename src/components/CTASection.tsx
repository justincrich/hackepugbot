import React from "react";
import { Button } from "./Button";

export const CTASection = () => {
  return (
    <section
      id="contact"
      className="w-full max-w-4xl mx-auto px-8 py-16 text-center"
    >
      <h2 className="title1 text-sand mb-6">
        Ready to Scale Your AI Infrastructure?
      </h2>

      <p className="text-xl text-cream mb-12 max-w-2xl mx-auto leading-relaxed">
        Let's discuss how I can help you build production-ready AI systems that
        serve millions of users.
      </p>

      {/* Two CTA paths */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Primary CTA */}
        <div className="bg-light-brown p-8 rounded-lg border border-cream/20">
          <div className="text-4xl mb-4">📅</div>
          <h3 className="title2 text-sand mb-4">Book a Free Strategy Call</h3>
          <p className="text-cream mb-6">
            30-minute call to assess your needs and identify opportunities
          </p>
          <Button
            type={Button.Type.Default}
            size={Button.Size.Large}
            href="https://calendly.com/justinrich"
            target="_blank"
          >
            Schedule Call
          </Button>
        </div>

        {/* Secondary CTA */}
        <div className="bg-light-brown p-8 rounded-lg border border-cream/20">
          <div className="text-4xl mb-4">🔍</div>
          <h3 className="title2 text-sand mb-4">Get a Technical Assessment</h3>
          <p className="text-cream mb-6">
            Detailed analysis of your current AI infrastructure and roadmap
          </p>
          <Button
            type={Button.Type.Outline}
            size={Button.Size.Large}
            href="mailto:justin@hackerpug.com?subject=Technical Assessment Request"
          >
            Request Assessment
          </Button>
        </div>
      </div>

      {/* Contact info */}
      <div className="text-center">
        <p className="text-cream mb-4">Or reach out directly:</p>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <a
            href="mailto:justin@hackerpug.com"
            className="text-sand hover:text-cream transition-colors"
          >
            📧 justin@hackerpug.com
          </a>
          <span className="hidden md:block text-cream">•</span>
          <a
            href="https://linkedin.com/in/justinrich"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sand hover:text-cream transition-colors"
          >
            💼 LinkedIn Profile
          </a>
        </div>
      </div>
    </section>
  );
};
