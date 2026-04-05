"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { MessageCircle, Code2, Database } from "lucide-react";
import posthog from "posthog-js";

export default function Hero() {
  const scrollToContact = () => {
    posthog.capture('hero_initiate_click');
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const steps = [
    { icon: MessageCircle, title: "1. Rapid 5-Min Sync", desc: "Share your requirements and deadline. We confirm immediately and start the build at blazing speeds." },
    { icon: Code2, title: "2. Scratch Engineering", desc: "We build your entire project from the ground up. Original, high-quality, and delivered well before your deadline." },
    { icon: Database, title: "3. Setup & Explanation", desc: "We personally set up the system on your machine and explain every line so you're ready for any faculty inquiry." },
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-16 lg:pt-24 lg:pb-12 overflow-hidden bg-[var(--bg-root)] border-b var(--editorial-border)">
      
      {/* Desktop Left Banner */}
      <div className="hidden lg:flex absolute left-0 top-0 bottom-0 w-12 border-r-2 border-[#064E3B] bg-[#10B981] items-center justify-center z-20 shadow-[4px_0_0_#064E3B]">
        <p className="text-[#022C22] font-mono tracking-[0.2em] transform -rotate-180 uppercase text-sm font-bold whitespace-nowrap" style={{ writingMode: 'vertical-rl' }}>
          We build your project & explain it to you
        </p>
      </div>

      {/* Desktop Right Banner */}
      <div className="hidden lg:flex absolute right-0 top-0 bottom-0 w-12 border-l-2 border-[#064E3B] bg-[#10B981] items-center justify-center z-20 shadow-[-4px_0_0_#064E3B]">
        <p className="text-[#022C22] font-mono tracking-[0.2em] uppercase text-sm font-bold whitespace-nowrap" style={{ writingMode: 'vertical-rl' }}>
          We teach you how to beat the system
        </p>
      </div>

      {/* Editorial Grid Background */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: "linear-gradient(#064E3B 1px, transparent 1px), linear-gradient(90deg, #064E3B 1px, transparent 1px)", backgroundSize: "4rem 4rem" }} 
      />

      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl w-full relative z-10 font-[var(--font-body)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          
          {/* Left: Punchy Editorial Copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start text-left relative"
          >
            {/* Minimalist marker */}
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "100px" }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="h-1 bg-[#10B981] mb-8"
            />

            <motion.h1
              className="mt-2 text-4xl sm:text-5xl lg:text-[4rem] xl:text-[4.5rem] font-black leading-none tracking-tighter text-[#022C22] pb-2 uppercase"
              style={{ fontFamily: "var(--font-display)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              WE BUILD IT. <br />
              <span className="text-[#064E3B]">
                WE SETUP IT.
              </span> <br />
              WE EXPLAIN IT.
            </motion.h1>

            <motion.p
              className="mt-8 text-base sm:text-lg lg:text-xl text-[#064E3B]/90 max-w-2xl leading-relaxed font-medium"
              style={{ fontFamily: "var(--font-body)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Get your academic and professional projects delivered with blazing fast speed. We don&apos;t just build; we personally set up the system on your laptop and explain every single component so you can present it to faculties with 100% confidence. Affordable, original, and zero-headache.
            </motion.p>

            <motion.div
              className="mt-12 flex flex-col sm:flex-row gap-5 w-full sm:w-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <Button onClick={scrollToContact} variant="primary" size="lg" className="w-full sm:w-auto uppercase tracking-widest text-[#F0EEE9]">
                Initiate Project
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto uppercase tracking-widest text-[#064E3B]"
                onClick={() => {
                  posthog.capture('hero_whatsapp_click');
                  window.open(`https://wa.me/919904270301?text=I%20need%20help%20with%20the%20project`, "_blank");
                }}
              >
                Immediate Inquiry
              </Button>
            </motion.div>
          </motion.div>

          {/* Right: Architectural Wireframe Dashboard */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
            className="lg:col-span-5 w-full relative sm:h-auto lg:h-[650px] flex items-center justify-center lg:justify-end mt-12 lg:mt-0 px-2 sm:px-0"
          >
            <div className="relative w-full max-w-[100%] sm:max-w-[420px] mx-auto lg:ml-auto lg:mr-0 bg-[#F0EEE9] border-2 border-[#064E3B] flex flex-col p-5 sm:p-8 shadow-[10px_10px_0_#064E3B] rounded-2xl">
              
              {/* Sharp UI Header */}
              <div className="flex items-center justify-between border-b-2 border-[#064E3B] pb-5 mb-8">
                 <div className="text-[#064E3B] text-[10px] sm:text-xs font-bold tracking-widest uppercase" style={{ fontFamily: "var(--font-mono)" }}>
                    {">"} SYS.ARCH.V1
                 </div>
                 <div className="flex gap-2">
                    <div className="w-4 h-4 border border-[#064E3B] bg-transparent" />
                    <div className="w-4 h-4 bg-[#064E3B]" />
                 </div>
              </div>

              {/* Minimalist Workflow */}
              <div className="flex flex-col gap-8 relative">
                 {/* Stark Vertical Connecting Line */}
                 <div className="absolute left-[15px] sm:left-[19px] top-6 bottom-6 w-0.5 bg-[#064E3B]/20 z-0">
                    <motion.div 
                      className="absolute top-0 left-0 right-0 bg-[#10B981]"
                      initial={{ height: "0%" }}
                      animate={{ height: "100%" }}
                      transition={{ duration: 3, ease: "linear", delay: 1 }}
                    />
                 </div>

                 {steps.map((step, i) => (
                    <motion.div 
                      key={i}
                      className="relative z-10 flex gap-5 sm:gap-6 items-start"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.5 + (i * 0.4) }}
                    >
                       {/* Rounded Box icon */}
                       <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 bg-[#F0EEE9] border-2 border-[#064E3B] flex items-center justify-center relative group rounded-xl">
                          <step.icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#064E3B] relative z-10" />
                       </div>
                       
                       {/* Content */}
                       <div className="pt-0.5 flex-1 pl-2">
                          <h4 className="text-[#022C22] font-black text-sm sm:text-base tracking-wide mb-1" style={{ fontFamily: "var(--font-display)" }}>
                            {step.title}
                          </h4>
                          <p className="text-[11px] sm:text-[13px] text-[#064E3B]/80 font-medium leading-snug" style={{ fontFamily: "var(--font-body)" }}>
                            {step.desc}
                          </p>
                       </div>
                    </motion.div>
                 ))}
              </div>
            </div>
            
            {/* Precise overlay floating brutalist badge */}
            <motion.div 
              className="absolute -bottom-8 left-0 right-0 mx-auto w-max sm:left-auto sm:mx-0 sm:right-auto sm:-bottom-6 sm:-left-6 bg-[#10B981] text-[#022C22] py-2 sm:py-3 px-4 sm:px-6 flex items-center justify-center gap-3 sm:gap-4 z-20 border-2 border-[#022C22] shadow-[6px_6px_0_#022C22]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.2, type: "spring", bounce: 0.4 }}
            >
               <div className="w-8 h-8 sm:w-10 sm:h-10 border border-[#022C22] bg-[#F0EEE9] flex items-center justify-center text-lg sm:text-xl font-bold font-mono">
                  100
               </div>
               <div className="flex flex-col">
                 <span className="text-[10px] font-bold tracking-widest uppercase mb-0.5" style={{ fontFamily: "var(--font-mono)" }}>GUARANTEE</span>
                 <span className="font-black text-sm uppercase tracking-tight" style={{ fontFamily: "var(--font-display)" }}>Zero Headache</span>
               </div>
            </motion.div>

          </motion.div>

          {/* Mobile banners */}
          <div className="lg:hidden col-span-1 flex flex-col w-full border-2 border-[#064E3B] mt-8 bg-[#10B981] shadow-[6px_6px_0_#064E3B]">
            <div className="py-3 px-4 border-b-2 border-[#064E3B] text-center bg-[#F0EEE9]">
              <span className="text-[#022C22] font-mono tracking-wider uppercase text-xs sm:text-sm font-bold">We build your project & explain it to you</span>
            </div>
            <div className="py-3 px-4 text-center">
              <span className="text-[#022C22] font-mono tracking-wider uppercase text-xs sm:text-sm font-bold">We teach you how to beat the system</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
