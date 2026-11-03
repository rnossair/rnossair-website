"use client";

import { m, useReducedMotion } from "motion/react";
import { effects, viewport } from "./tokens";

/**
 * Plays a one-off entrance once, when the element scrolls into view.
 * effect: "fade" (default), "wipe" (clip reveal), or "draw" (line grows from left).
 * With reduced motion on, it renders in its final state.
 */
export default function Reveal({ as = "div", effect = "fade", delay, className, style, children, ...rest }) {
  const reduce = useReducedMotion();
  const fx = effects[effect];
  const Tag = m[as];
  return (
    <Tag
      {...rest}
      className={className}
      style={{ ...fx.style, ...style }}
      initial={reduce ? false : fx.initial}
      whileInView={fx.animate}
      viewport={viewport}
      transition={delay === undefined ? fx.transition : { ...fx.transition, delay }}
    >
      {children}
    </Tag>
  );
}
