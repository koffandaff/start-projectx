"use client";

import { motion } from "framer-motion";
import { BookOpen, Video, MonitorPlay } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const services = [
  {
    id: "01",
    icon: BookOpen,
    title: "Blazing Fast Build",
    desc: "We build projects for any semester with zero delay. Whether it's basic or advanced, we deliver clean code at record speeds.",
  },
  {
    id: "02",
    icon: MonitorPlay,
    title: "Instant Setup & Install",
    desc: "No waiting around. We jump on a call and personally set everything up in your system so it's ready for immediate use.",
  },
  {
    id: "03",
    icon: Video,
    title: "Rapid Explanation",
    desc: "Get prepared fast. We explain every line clearly and quickly so you can face your faculties with absolute confidence.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative bg-[var(--bg-root)] border-b border-[#064E3B]/10">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        <div className="mb-20">
          <SectionHeading
            title="What We Build"
            subtitle="We handle everything from writing the code to setting it up and making sure you understand it."
          />
        </div>

        {/* Massive Editorial Horizontal List */}
        <div className="flex flex-col">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group border-t-2 border-[#064E3B] py-12 md:py-16 hover:bg-[#064E3B] transition-colors duration-500 cursor-default"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start px-2 sm:px-8">
                
                {/* Left: Indicator & Icon */}
                <div className="lg:col-span-3 flex items-center gap-6 mb-4 lg:mb-0">
                  <span className="text-xl sm:text-2xl font-bold text-[#10B981] group-hover:text-[#F0EEE9] transition-colors" style={{ fontFamily: "var(--font-mono)" }}>
                    {service.id}.
                  </span>
                  <service.icon className="w-10 h-10 text-[#064E3B] group-hover:text-[#10B981] transition-colors duration-500" strokeWidth={1.5} />
                </div>
                
                {/* Middle: Title */}
                <div className="lg:col-span-4 mb-2 lg:mb-0">
                  <h3 className="text-3xl sm:text-4xl font-black text-[#022C22] group-hover:text-[#F0EEE9] uppercase tracking-tighter transition-colors duration-500 break-words" style={{ fontFamily: "var(--font-display)" }}>
                    {service.title}
                  </h3>
                </div>

                {/* Right: Description */}
                <div className="lg:col-span-5">
                  <p className="text-base sm:text-lg text-[#064E3B] group-hover:text-[#D1FAE5] leading-relaxed font-medium transition-colors duration-500" style={{ fontFamily: "var(--font-body)" }}>
                    {service.desc}
                  </p>
                </div>

              </div>
            </motion.div>
          ))}
          {/* Closing bottom border */}
          <div className="border-t-2 border-[#064E3B]" />
        </div>
      </div>
    </section>
  );
}
