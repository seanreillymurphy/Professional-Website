import type { Variants, Transition } from "motion/react";

// ===== TRANSITION PRESETS =====
export const springSnap: Transition = { type: "spring", stiffness: 300, damping: 24 };
export const springGentle: Transition = { type: "spring", stiffness: 120, damping: 14 };
export const springWobbly: Transition = { type: "spring", stiffness: 180, damping: 12 };
export const springStiff: Transition = { type: "spring", stiffness: 300, damping: 20 };
export const springMolasses: Transition = { type: "spring", stiffness: 280, damping: 120 };
export const tweenPremium: Transition = { duration: 0.6, ease: [0.16, 1, 0.3, 1] };
export const tweenAppleInOut: Transition = { duration: 0.6, ease: [0.76, 0, 0.24, 1] };

// ===== ENTRANCE VARIANTS =====
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export const fadeUpBlur: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
  visible: {
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1, scale: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

export const slideLeft: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1, x: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export const slideRight: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1, x: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

// ===== STAGGER CONTAINERS =====
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delayChildren: 0.2, staggerChildren: 0.1 },
  },
};

export const staggerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delayChildren: 0.1, staggerChildren: 0.05 },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1, y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
};