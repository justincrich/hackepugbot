import React from "react";
import { Button } from "./Button";

export const HeroSection = () => {
  return (
    <section className="w-full max-w-6xl mx-auto px-8 py-16 text-center">
      {/* Pug mascot placeholder - keeping it professional but friendly */}
      <div className="mb-8">
        <div className="text-6xl mb-4">🐕‍🦺</div>
        <div className="text-sm text-cream">
          Professional AI Infrastructure Expert
        </div>
      </div>

      {/* Main headline */}
      <h1 className="text-4xl md:text-6xl font-bold text-sand mb-6">
        Ship AI Products That Scale
      </h1>

      {/* Subheadline */}
      <p className="text-xl md:text-2xl text-cream mb-12 max-w-4xl mx-auto leading-relaxed">
        I help companies build production-ready AI infrastructure that serves
        millions of users. From evaluation platforms to content generation
        systems, I&apos;ve architected the backend systems that power
        tomorrow&apos;s AI applications.
      </p>

      {/* CTAs */}
      <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
        <Button
          type={Button.Type.Default}
          size={Button.Size.Large}
          href="#contact"
        >
          📅 Book a Strategy Call
        </Button>
        <Button
          type={Button.Type.Outline}
          size={Button.Size.Large}
          href="#case-studies"
        >
          📊 View Case Studies
        </Button>
      </div>
    </section>
  );
};
