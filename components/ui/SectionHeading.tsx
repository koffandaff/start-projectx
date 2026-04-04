"use client";

import { motion } from "framer-motion";

export default function SectionHeading({
  title,
  subtitle,
  centered = false,
}: {
  title: string;
  subtitle?: string;
  centered?: boolean;
}) {
  return (
    <div className={`flex flex-col ${centered ? "items-center text-center" : "items-start text-left"}`}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl font-black text-slate-900 drop-shadow-sm uppercase tracking-tight"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-base sm:text-lg text-slate-500 max-w-2xl font-medium"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
