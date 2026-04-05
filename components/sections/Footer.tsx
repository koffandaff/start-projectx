"use client";

import { Shield, Code2, Zap } from "lucide-react";
import posthog from "posthog-js";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#022C22] text-[#F0EEE9] py-16 lg:py-20 border-t-[4px] border-[#10B981] relative overflow-hidden">
      {/* Abstract Background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "linear-gradient(#F0EEE9 1px, transparent 1px)", backgroundSize: "4rem 4rem" }} />

      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-12">
          
          {/* Brand Col */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center select-none mb-6 cursor-pointer group" onClick={() => window.scrollTo(0, 0)}>
              <span className="text-2xl font-black tracking-tight text-[#F0EEE9] group-hover:text-[#10B981] transition-colors uppercase" style={{ fontFamily: "var(--font-display)" }}>
                Un<span className="text-[#10B981] mx-[2px]" style={{ fontSize: "1.3em", lineHeight: 0, verticalAlign: "middle" }}>·</span>Project
              </span>
            </div>
            <p className="text-[#10B981]/70 max-w-sm mb-8 leading-relaxed font-medium">
              Elite academic engineering. We build the code you submit. Flawless execution, absolute privacy, zero stress.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://github.com/projectx" target="_blank" rel="noreferrer" onClick={() => posthog.capture('footer_social_click', { platform: 'github' })} className="w-10 h-10 rounded-none bg-[#064E3B] border border-[#10B981]/30 flex items-center justify-center hover:bg-[#10B981] hover:text-[#022C22] transition-all duration-300">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              </a>
              <a href={process.env.NEXT_PUBLIC_INSTAGRAM_URL || "#"} target="_blank" rel="noreferrer" onClick={() => posthog.capture('footer_social_click', { platform: 'instagram' })} className="w-10 h-10 rounded-none bg-[#064E3B] border border-[#10B981]/30 flex items-center justify-center hover:bg-[#10B981] hover:text-[#022C22] transition-all duration-300">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-none bg-[#064E3B] border border-[#10B981]/30 flex items-center justify-center hover:bg-[#10B981] hover:text-[#022C22] transition-all duration-300">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#F0EEE9] font-bold mb-6 tracking-widest uppercase text-sm" style={{ fontFamily: "var(--font-mono)" }}>Navigation</h4>
            <ul className="space-y-4 font-medium">
              <li><a href="#services" onClick={() => posthog.capture('footer_nav_click', { linkName: 'Services' })} className="hover:text-[#10B981] transition-colors inline-block">Services</a></li>
              <li><a href="#how-it-works" onClick={() => posthog.capture('footer_nav_click', { linkName: 'The Protocol' })} className="hover:text-[#10B981] transition-colors inline-block">The Protocol</a></li>
              <li><a href="#projects" onClick={() => posthog.capture('footer_nav_click', { linkName: 'Project Vault' })} className="hover:text-[#10B981] transition-colors inline-block">Project Vault</a></li>
              <li><a href="#contact" onClick={() => posthog.capture('footer_nav_click', { linkName: 'Initialize' })} className="hover:text-[#10B981] transition-colors inline-block">Initialize</a></li>
            </ul>
          </div>

          {/* Badges col */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 p-3 rounded-none bg-[#064E3B]/20 border border-[#10B981]/20">
               <Shield className="w-5 h-5 text-[#10B981] shrink-0" />
               <span className="text-sm font-medium">End-to-End Privacy</span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-none bg-[#064E3B]/20 border border-[#10B981]/20">
               <Code2 className="w-5 h-5 text-[#10B981] shrink-0" />
               <span className="text-sm font-medium">Original Engineering</span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-none bg-[#064E3B]/20 border border-[#10B981]/20">
               <Zap className="w-5 h-5 text-[#10B981] shrink-0" />
               <span className="text-sm font-medium">Lightning Turnaround</span>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-[#064E3B] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#10B981]/50 text-sm font-medium">
            © {currentYear} Un·Project. Built for Academics, Backed by Engineering.
          </p>
          <div className="flex items-center gap-2 text-[#10B981]/50 text-sm font-mono tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Systems Operational
          </div>
        </div>
      </div>
    </footer>
  );
}
