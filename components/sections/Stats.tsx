"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Bot, Layers, Zap } from "lucide-react";

export default function Stats() {
  const stats = [
    { number: "24h", label: "Average Delivery", icon: Zap },
    { number: "100%", label: "Plagiarism Free", icon: CheckCircle2 },
    { number: "0", label: "AI Scaffolding", icon: Bot },
    { number: "3+", label: "Architectures", icon: Layers },
  ];

  return (
    <section className="py-16 bg-[#064E3B] border-y-2 border-[#022C22] relative z-20">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x-2 divide-[#10B981]/20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="flex flex-col items-center justify-center text-center px-4"
            >
              <stat.icon className="w-6 h-6 text-[#10B981] mb-4 opacity-80" strokeWidth={2} />
              <div className="text-4xl sm:text-5xl font-black text-[#F0EEE9] mb-2 tracking-tighter" style={{ fontFamily: "var(--font-display)" }}>
                {stat.number}
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#10B981] uppercase tracking-widest" style={{ fontFamily: "var(--font-mono)" }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
