"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

const steps = [
  {
    step: "01",
    title: "Direct Requirements Intake",
    desc: "Submit your rubric and deadline. Our engineering team performs a rapid assessment to confirm an immediate start.",
  },
  {
    step: "02",
    title: "Zero-Delay Engineering",
    desc: "Building starts instantly. We write clean, scratch-made code at lightning speed, strictly following your instructions.",
  },
  {
    step: "03",
    title: "Express Setup Call",
    desc: "Once finished, we perform an instant remote installation and a high-speed walkthrough of the system logic.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-32 relative bg-[var(--bg-root)] border-y var(--editorial-border)">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        
        <div className="mb-24">
          <SectionHeading
            title="The Protocol"
            subtitle="A simple, straightforward process to get your project done and explained."
          />
        </div>

        <div className="flex flex-col gap-0 border-t-2 border-[#064E3B]">
          {steps.map((step) => (
            <motion.div
              key={step.step}
              className="group grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center py-16 sm:py-24 border-b border-[#064E3B]/20 relative overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Massive background number transition */}
              <div 
                className="absolute right-0 top-1/2 -translate-y-1/2 text-[150px] sm:text-[250px] md:text-[350px] leading-none font-black text-[#064E3B]/5 select-none pointer-events-none group-hover:text-[#10B981]/10 group-hover:scale-110 transition-all duration-700" 
                style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.05em" }}
              >
                {step.step}
              </div>

              {/* Left Column: Number Marker */}
              <div className="md:col-span-3 flex items-start">
                <div className="text-4xl sm:text-5xl font-black text-[#064E3B] opacity-80" style={{ fontFamily: "var(--font-mono)" }}>
                  [{step.step}]
                </div>
              </div>

              {/* Right Column: Content */}
              <div className="md:col-span-9 relative z-10 pl-0 md:pl-8 lg:pl-16 md:border-l border-[#064E3B]/30">
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#022C22] mb-6 uppercase tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
                  {step.title}
                </h3>
                <p className="text-lg sm:text-xl text-[#064E3B] leading-relaxed font-medium max-w-3xl" style={{ fontFamily: "var(--font-body)" }}>
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
