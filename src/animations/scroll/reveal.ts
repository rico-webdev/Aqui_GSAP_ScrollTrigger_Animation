import { gsap, ScrollTrigger } from "@/plugins";

export interface RevealAnimationConfig {
  trigger: string | Element;
  target?: string | Element; // If not provided, uses trigger
  start?: string;
  end?: string;
  toggleActions?: string;
  animation?: {
    from?: gsap.TweenVars;
    to?: gsap.TweenVars;
    duration?: number;
    ease?: string;
    stagger?: number;
  };
  markers?: boolean;
}

/**
 * Creates a reveal animation triggered by ScrollTrigger
 * @param config - Configuration object for the reveal animation
 * @returns ScrollTrigger instance
 */
export const createRevealAnimation = (config: RevealAnimationConfig) => {
  const {
    trigger,
    target = trigger, // Use trigger as target if not specified
    start = "top 90%",
    end,
    toggleActions = "play none none reverse",
    animation = {
      from: { opacity: 0, y: 50 },
      to: { opacity: 1, y: 0 },
      duration: 0.8,
      ease: "power2.out",
    },
    markers = false,
  } = config;

  return ScrollTrigger.create({
    trigger,
    start,
    end,
    toggleActions,
    markers,
    animation: gsap.fromTo(
      target,
      {
        ...animation.from,
      },
      {
        ...animation.to,
        duration: animation.duration,
        ease: animation.ease,
        stagger: animation.stagger,
      }
    ),
  });
};
