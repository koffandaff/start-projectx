// ══════════════════════════════════════════════════════════════
// PROJECT X — Framer Motion Variant Library
// ══════════════════════════════════════════════════════════════

import type { Variants } from "framer-motion";

// Standard fade-up (most sections)
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

// Scale-up (for cards, stat blocks)
export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.93 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

// Slide in from left
export const slideLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

// Word-by-word reveal (ORION hero style)
export const wordReveal: Variants = {
  hidden: { opacity: 0, y: 20, rotateX: 20 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

// Stagger container
export const stagger = (staggerDelay = 0.1): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: staggerDelay,
      delayChildren: 0.1,
    },
  },
});

// Filter transition (projects section)
export const filterExit = {
  opacity: 0,
  scale: 0.92,
  transition: { duration: 0.2 },
};

export const filterEnter = {
  opacity: 1,
  scale: 1,
  transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
};
