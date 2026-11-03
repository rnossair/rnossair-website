"use client";

import { m } from "motion/react";
import { fadeUp, stagger, viewport } from "./tokens";

/**
 * Plays its StaggerItem descendants in order. Items can sit at any depth
 * (e.g. inside a server-rendered <Row>): variants flow through React context.
 * trigger="mount" plays on load (hero); "inView" plays on scroll (default).
 */
export default function Stagger({
  as = "div",
  trigger = "inView",
  delay = 0,
  gap = stagger,
  className,
  children,
}) {
  const Tag = m[as];
  const play = trigger === "mount" ? { animate: "show" } : { whileInView: "show", viewport };
  return (
    <Tag
      className={className}
      initial="hidden"
      {...play}
      variants={{ hidden: {}, show: { transition: { staggerChildren: gap, delayChildren: delay } } }}
    >
      {children}
    </Tag>
  );
}

/** One step in the parent Stagger. Pass `variants` to override the default fade-up. */
export function StaggerItem({ as = "div", variants = fadeUp, className, style, children }) {
  const Tag = m[as];
  return (
    <Tag className={className} style={style} variants={variants}>
      {children}
    </Tag>
  );
}
