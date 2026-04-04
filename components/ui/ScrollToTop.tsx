"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import posthog from "posthog-js";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    posthog.capture('scroll_to_top_click');
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const openWhatsApp = () => {
    posthog.capture('floating_whatsapp_click');
    window.open(`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "6356173533"}`, "_blank");
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 z-[100] flex flex-col items-end gap-4">
          
          {/* Sharp Editorial Tag - Fixed & Compact */}
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            className="bg-[#10B981] border-2 border-[#022C22] px-2 py-1 shadow-[2px_2px_0_#022C22] mb-1 flex flex-col items-end gap-0.5"
          >
            <span className="text-[#022C22] font-black text-[9px] uppercase tracking-tighter" style={{ fontFamily: "var(--font-mono)" }}>
              FAST BUILD • FAST DELIVER
            </span>
            <div className="w-full h-[1px] bg-[#022C22] opacity-20" />
            <span className="text-[#022C22] font-black text-[8px] uppercase tracking-tighter italic" style={{ fontFamily: "var(--font-mono)" }}>
              AFFORDABLE • EASY TO UNDERSTAND
            </span>
          </motion.div>

          {/* WhatsApp Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.1, y: -2 }}
            onClick={openWhatsApp}
            className="w-14 h-14 bg-[#25D366] border-[4px] border-[#022C22] flex items-center justify-center shadow-[6px_6px_0_#022C22] hover:bg-[#128C7E] transition-all group"
            aria-label="Contact on WhatsApp"
          >
            <MessageCircle className="w-7 h-7 text-[#022C22]" fill="currentColor" />
          </motion.button>

          {/* Scroll To Top Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            whileHover={{ y: -5 }}
            onClick={scrollToTop}
            className="w-12 h-12 bg-[#10B981] border-[3px] border-[#022C22] flex items-center justify-center shadow-[4px_4px_0_#022C22] transition-colors hover:bg-[#064E3B] group"
            aria-label="Scroll to top"
          >
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="text-[#022C22] group-hover:text-[#F0EEE9]"
            >
              <path 
                d="M12 19V5M5 12L12 5L19 12" 
                stroke="currentColor" 
                strokeWidth="3" 
                strokeLinecap="square" 
                strokeLinejoin="miter" 
              />
            </svg>
          </motion.button>
        </div>
      )}
    </AnimatePresence>
  );
}
