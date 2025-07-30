import React from "react";

export const AboutSection = () => {
  return (
    <section className="w-full max-w-6xl mx-auto px-8 py-16">
      <h2 className="title1 text-center text-sand mb-12">
        Meet Your AI Infrastructure Partner
      </h2>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Photo placeholder with pug mascot */}
        <div className="text-center">
          <div className="bg-light-brown p-8 rounded-lg border border-cream/20 mb-4">
            <div className="text-8xl mb-4">👨🏻‍💻</div>
            <div className="text-sm text-cream">Professional photo</div>
            <div className="text-xs text-cream mt-2">
              (with pug mascot subtly in background)
            </div>
          </div>
        </div>

        {/* About content */}
        <div>
          <p className="text-lg text-cream mb-6 leading-relaxed">
            I'm Justin Rich, a full-stack engineer with 7+ years building AI
            infrastructure that scales. As Technical Co-Founder of Formulist,
            I've helped companies from startups to enterprises ship AI products
            that serve millions of users.
          </p>

          <p className="text-lg text-cream mb-8 leading-relaxed">
            My background spans from building developer tools at DoorDash to
            architecting distributed AI systems for leading AI companies. I
            specialize in taking AI from prototype to production.
          </p>

          {/* Key credentials */}
          <div className="bg-light-brown p-6 rounded-lg border border-cream/20">
            <h3 className="title2 text-sand mb-4">Key Credentials</h3>
            <ul className="space-y-3">
              <li className="text-cream flex items-start">
                <span className="text-sand mr-3">🎯</span>
                7+ years full-stack AI infrastructure
              </li>
              <li className="text-cream flex items-start">
                <span className="text-sand mr-3">🚀</span>
                Technical Co-Founder, Formulist
              </li>
              <li className="text-cream flex items-start">
                <span className="text-sand mr-3">🏢</span>
                Former DoorDash (100k+ merchants)
              </li>
              <li className="text-cream flex items-start">
                <span className="text-sand mr-3">🎓</span>
                Carnegie Mellon MS, Information Systems
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
