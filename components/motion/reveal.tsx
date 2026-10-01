"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  as?: "div" | "article" | "li";
  children: ReactNode;
  className?: string;
  delay?: number;
  tabIndex?: number;
};

const hidden = { opacity: 0, y: 16 };
const visible = { opacity: 1, y: 0 };
const viewport = { once: true, amount: 0.1, margin: "0px 0px -48px 0px" } as const;
const ease = [0.16, 1, 0.3, 1] as const;

export function Reveal({
  as = "div",
  children,
  className,
  delay = 0,
  tabIndex,
}: RevealProps) {
  const reducedMotion = useReducedMotion();
  const props = {
    className: `focus-within:opacity-100! focus-within:transform-none! motion-reduce:opacity-100! motion-reduce:transform-none! ${className ?? ""}`,
    initial: reducedMotion ? false : hidden,
    animate: reducedMotion ? visible : undefined,
    whileInView: reducedMotion ? undefined : visible,
    viewport,
    transition: reducedMotion ? { duration: 0 } : { duration: 0.6, delay, ease },
    tabIndex,
    children,
  };

  if (as === "article") return <motion.article {...props} />;
  if (as === "li") return <motion.li {...props} />;
  return <motion.div {...props} />;
}
