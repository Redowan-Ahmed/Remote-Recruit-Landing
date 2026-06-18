"use client";

import { ReactNode } from "react";
import { motion, useReducedMotion, type Variant } from "motion/react";

type AnimationVariant = "fade-in" | "slide-up" | "slide-left" | "slide-right" | "scale-up";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  variant?: AnimationVariant;
  delay?: number;
  duration?: number;
  as?: "div" | "section" | "article" | "header" | "footer";
}

const variants: Record<AnimationVariant, { hidden: Variant; visible: Variant }> = {
  "fade-in": {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  "slide-up": {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  },
  "slide-left": {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 },
  },
  "slide-right": {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 },
  },
  "scale-up": {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  },
};

const defaultTransition = {
  duration: 0.6,
  ease: [0.25, 0.1, 0.25, 1] as const,
};

export default function AnimatedSection({
  children,
  className = "",
  variant = "slide-up",
  delay = 0,
  duration = 0.6,
  as: Tag = "div",
}: AnimatedSectionProps) {
  const prefersReducedMotion = useReducedMotion();

  const MotionTag = motion[Tag as keyof typeof motion] as typeof motion.div;

  if (!MotionTag || prefersReducedMotion) {
    return <Tag className={className}>{children}</Tag>;
  }

  const variantConfig = variants[variant];

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: variantConfig.hidden,
        visible: variantConfig.visible,
      }}
      transition={{
        ...defaultTransition,
        duration,
        delay,
      }}
    >
      {children}
    </MotionTag>
  );
}
