// One timing system for the whole site. Matches the original hero CSS curve.
export const ease = [0.2, 0.7, 0.3, 1];
export const duration = 0.52;
export const stagger = 0.09;
export const rise = 6; // px of upward travel on entry

// Trigger a little before the element fully enters, and only once.
export const viewport = { once: true, margin: "0px 0px -10% 0px" };

export const fadeUp = {
  hidden: { opacity: 0, y: rise },
  show: { opacity: 1, y: 0, transition: { duration, ease } },
};
