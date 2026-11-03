"use client";

import { m } from "motion/react";
import { duration, ease, rise, viewport } from "./tokens";

/** Fades and lifts its children in once, when they scroll into view. */
export default function Reveal({ as = "div", delay = 0, y = rise, className, children }) {
  const Tag = m[as];
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration, ease, delay }}
    >
      {children}
    </Tag>
  );
}
