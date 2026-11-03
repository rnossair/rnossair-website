"use client";

import { LazyMotion, MotionConfig, domMax } from "motion/react";

// domMax includes layout animations (used by the nav's sliding underline).
// reducedMotion="user" drops transform animations when the OS asks for it.
export default function MotionProvider({ children }) {
  return (
    <MotionConfig reducedMotion="user">
      <LazyMotion features={domMax} strict>
        {children}
      </LazyMotion>
    </MotionConfig>
  );
}
