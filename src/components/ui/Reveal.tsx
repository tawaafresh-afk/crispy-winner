"use client";

import { motion, type Variants } from "framer-motion";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "up" | "in" | "left" | "right" | "scale";
  once?: boolean;
};

const variants: Record<string, Variants> = {
  up: {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0 },
  },
  in: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  left: {
    hidden: { opacity: 0, x: -36 },
    visible: { opacity: 1, x: 0 },
  },
  right: {
    hidden: { opacity: 0, x: 36 },
    visible: { opacity: 1, x: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.92 },
    visible: { opacity: 1, scale: 1 },
  },
};

export function Reveal({ children, className, delay = 0, as = "up", once = true }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-80px" }}
      variants={variants[as]}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function RevealGroup({
  children,
  className,
  stagger = 0.12,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className,
  as = "up",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "up" | "in" | "scale";
}) {
  return (
    <motion.div className={className} variants={variants[as]} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
      {children}
    </motion.div>
  );
}
