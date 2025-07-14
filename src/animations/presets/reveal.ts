/**
 * Common reveal animation presets for scroll-triggered animations
 */
export const revealPresets = {
  fadeUp: {
    from: { opacity: 0, y: 50 },
    to: { opacity: 1, y: 0 },
    duration: 0.8,
    ease: "power2.out",
  },
  fadeDown: {
    from: { opacity: 0, y: -50 },
    to: { opacity: 1, y: 0 },
    duration: 0.8,
    ease: "power2.out",
  },
  fadeLeft: {
    from: { opacity: 0, x: 50 },
    to: { opacity: 1, x: 0 },
    duration: 0.8,
    ease: "power2.out",
  },
  fadeRight: {
    from: { opacity: 0, x: -50 },
    to: { opacity: 1, x: 0 },
    duration: 0.8,
    ease: "power2.out",
  },
  fadeIn: {
    from: { opacity: 0 },
    to: { opacity: 1 },
    duration: 1,
    ease: "power2.out",
  },
  scaleUp: {
    from: { opacity: 0, scale: 0.8 },
    to: { opacity: 1, scale: 1 },
    duration: 0.8,
    ease: "back.out(1.7)",
  },
  scaleDown: {
    from: { opacity: 0, scale: 1.2 },
    to: { opacity: 1, scale: 1 },
    duration: 0.8,
    ease: "power2.out",
  },
} as const;

export type RevealPresetKeys = keyof typeof revealPresets;
