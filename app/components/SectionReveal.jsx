"use client";

import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

export default function SectionReveal({
  children,
  as: Tag = "div",
  className = "",
  stagger = false,
  delay = 0,
  y = 24,
  once = true,
}) {
  const MotionTag = motion[Tag] || motion.div;

  if (stagger) {
    return (
      <MotionTag
        className={className}
        initial="hidden"
        whileInView="show"
        viewport={{ once, margin: "-80px" }}
        variants={containerVariants}
      >
        {children}
      </MotionTag>
    );
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay }}
      viewport={{ once, margin: "-80px" }}
    >
      {children}
    </MotionTag>
  );
}

export function RevealItem({ children, className = "", as: Tag = "div" }) {
  const MotionTag = motion[Tag] || motion.div;
  return (
    <MotionTag className={className} variants={variants}>
      {children}
    </MotionTag>
  );
}
