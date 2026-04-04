"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

import { ComponentPropsWithoutRef } from "react";

interface ButtonProps extends ComponentPropsWithoutRef<typeof motion.button> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export default function Button({
  className,
  variant = "primary",
  size = "md",
  children,
  ...props
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-bold transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed tracking-wide shadow-sm";
  
  // Sharp, authentic editorial styling
  const variants = {
    primary: "bg-[#064E3B] text-[#F0EEE9] hover:bg-[#022C22] border border-[#064E3B] hover:shadow-lg", 
    secondary: "bg-[#10B981] text-[#022C22] hover:bg-[#059669] hover:text-[#F0EEE9] border border-[#10B981] hover:shadow-lg",
    outline: "bg-transparent text-[#064E3B] border-2 border-[#064E3B] hover:bg-[#064E3B] hover:text-[#F0EEE9]",
    ghost: "bg-transparent text-[#064E3B] hover:bg-[#D1FAE5] shadow-none",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      style={{ fontFamily: "var(--font-body)" }}
      {...props}
    >
      {children}
    </motion.button>
  );
}
