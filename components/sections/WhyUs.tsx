"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { ShieldCheck, Zap, Clock, Code } from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "100% Confidentiality",
    desc: "Your identity remains completely hidden. We use secure private repositories and never share who we build for.",
  },
  {
    icon: Zap,
    title: "Lightning Fast Delivery",
    desc: "Tight deadline? No problem. Our engineers are trained to build fast, robust MVPs in just days.",
  },
  {
    icon: Clock,
    title: "Line-by-Line Explanations",
    desc: "A working project is useless if you can't explain it. We do a final handover call to teach you exactly how the code works.",
  },
  {
    icon: Code,
    title: "Clean, Scalable Code",
    desc: "We don't write generic AI spaghetti code. We write production-grade architectures that professors love to grade.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 sm:py-32 relative bg-[var(--bg-root)] border-t-2 border-[#064E3B] overflow-hidden">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <SectionHeading
          title="Why Choose Project X?"
          subtitle="We bridge the gap between struggling with syntax and confidently passing your degree."
          centered
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="bg-[#FAFAF8] border-[3px] border-[#064E3B] p-6 sm:p-8 flex flex-col sm:flex-row items-start gap-5 sm:gap-6 shadow-[6px_6px_0_#064E3B] hover:-translate-y-1 hover:shadow-[8px_8px_0_#064E3B] transition-all duration-300"
            >
              <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-[#064E3B] flex items-center justify-center">
                <reason.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#10B981]" />
              </div>
              <div className="flex-1 w-full">
                <h3 className="text-xl sm:text-2xl font-black text-[#022C22] mb-2 sm:mb-3 tracking-tight break-words" style={{ fontFamily: "var(--font-display)" }}>
                  {reason.title}
                </h3>
                <p className="text-[#064E3B]/90 text-sm sm:text-base font-medium leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                  {reason.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
