"use client";

import { motion, useReducedMotion } from "motion/react";

interface CircleConfig {
  cx: number | string;
  cy: number | string;
  r: number;
  opacity?: number;
  fill?: string;
  type?: "float" | "pulse";
  duration?: number;
  delay?: number;
}

interface AnimatedCirclesProps {
  circles: CircleConfig[];
}

function AnimatedCircle({ circle }: { circle: CircleConfig }) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <circle
        cx={circle.cx}
        cy={circle.cy}
        r={circle.r}
        fill={circle.fill || "white"}
        opacity={circle.opacity ?? 0.05}
      />
    );
  }

  const floatY = circle.r * 0.2;
  const pulseScale = 1.15;

  const animate:
    | { y: number[]; transition: { duration: number; repeat: number; ease: "easeInOut"; delay: number } }
    | { scale: number[]; opacity: number[]; transition: { duration: number; repeat: number; ease: "easeInOut"; delay: number } } =
    circle.type === "float"
      ? {
          y: [0, -floatY, 0],
          transition: {
            duration: circle.duration || 4,
            repeat: Infinity,
            ease: "easeInOut" as const,
            delay: circle.delay || 0,
          },
        }
      : {
          scale: [1, pulseScale, 1],
          opacity: [
            circle.opacity ?? 0.05,
            (circle.opacity ?? 0.05) * 1.8,
            circle.opacity ?? 0.05,
          ],
          transition: {
            duration: circle.duration || 3,
            repeat: Infinity,
            ease: "easeInOut" as const,
            delay: circle.delay || 0,
          },
        };

  return (
    <motion.circle
      cx={circle.cx}
      cy={circle.cy}
      r={circle.r}
      fill={circle.fill || "white"}
      opacity={circle.opacity ?? 0.05}
      animate={animate}
      style={{ originX: "50%", originY: "50%" }}
    />
  );
}

export default function AnimatedCircles({ circles }: AnimatedCirclesProps) {
  return (
    <>
      {circles.map((circle, i) => (
        <AnimatedCircle key={i} circle={circle} />
      ))}
    </>
  );
}
