"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/ui/Button";
import { Menu, X } from "lucide-react";
import posthog from "posthog-js";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "The Protocol", href: "#how-it-works" },
    { name: "Project", href: "#projects" },
    { name: "Initialize", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b-2 border-[#064E3B] ${
        isScrolled
          ? "bg-[#F0EEE9] py-3"
          : "bg-[#F0EEE9] py-5"
      }`}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center select-none cursor-pointer group" onClick={() => window.scrollTo(0, 0)}>
            <span className="text-2xl font-black tracking-tight text-[#022C22] transition-colors uppercase" style={{ fontFamily: "var(--font-display)" }}>
              Un<span className="text-[#10B981] mx-[2px]" style={{ fontSize: "1.3em", lineHeight: 0, verticalAlign: "middle" }}>·</span>Project
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => posthog.capture('nav_link_click', { linkName: link.name })}
                  className="text-sm font-bold text-[#064E3B] hover:text-[#10B981] transition-colors uppercase tracking-wide"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {link.name}
                </a>
              ))}
            </div>
            <Button
              onClick={() => {
                posthog.capture('nav_cta_click');
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              variant="primary"
              size="sm"
            >
              Start Building
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#064E3B] focus:outline-none"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full left-0 w-full bg-[#F0EEE9] border-b-2 border-[#064E3B] py-6 px-4 flex flex-col gap-6 md:hidden"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-bold text-[#064E3B] text-center uppercase tracking-wide"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {link.name}
                </a>
              ))}
              <Button
                onClick={() => {
                  setMobileMenuOpen(false);
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                variant="primary"
                className="w-full"
              >
                Start Building
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
