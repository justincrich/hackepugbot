import React, { useState } from "react";

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How quickly can you start?",
      answer:
        "I typically start with a discovery call within 48 hours of initial contact. For full projects, I can usually begin implementation within 1-2 weeks, depending on current workload and project complexity.",
    },
    {
      question: "Do you work with existing teams?",
      answer:
        "Absolutely! I integrate seamlessly with existing engineering teams, providing technical leadership, mentoring, and hands-on development. I believe in knowledge transfer and team empowerment throughout the engagement.",
    },
    {
      question: "What if we're early stage?",
      answer:
        "I work with companies at all stages, from early-stage startups to established enterprises. For early-stage companies, I focus on building scalable foundations that can grow with your business, often at reduced rates for equity.",
    },
    {
      question: "How do you handle IP/security?",
      answer:
        "I take intellectual property and security very seriously. All work is covered by comprehensive NDAs, and I follow enterprise-grade security practices including secure development, code review processes, and compliance with industry standards.",
    },
  ];

  return (
    <section className="w-full max-w-4xl mx-auto px-8 py-16">
      <h2 className="title1 text-center text-sand mb-12">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-light-brown rounded-lg border border-cream/20 overflow-hidden"
          >
            <button
              className="w-full p-6 text-left flex justify-between items-center hover:bg-cream/5 transition-colors"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <h3 className="title2 text-sand pr-4">{faq.question}</h3>
              <span className="text-sand text-2xl flex-shrink-0">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            {openIndex === index && (
              <div className="px-6 pb-6">
                <p className="text-cream leading-relaxed">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
