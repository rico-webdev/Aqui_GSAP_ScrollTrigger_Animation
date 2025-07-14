import { gsap, ScrollTrigger } from "@/plugins/index";

// NAVBAR ANIMATION
// =================================================
export const navbarAnimation = (navRef: React.RefObject<HTMLDivElement | null>) => {
  const ease = "power1.out";

  gsap.from(navRef.current, {
    y: -100,
    opacity: 0,
    delay: 1.38,
    duration: 0.6,
    ease,
  });

  ScrollTrigger.create({
    start: 0,
    end: "max",
    onUpdate: (self) => {
      const scrollingUp = self.direction === -1;
      if (scrollingUp) {
        gsap.to(navRef.current, {
          y: 0,
          backgroundColor: "#00000050",
          backdropFilter: "blur(8px)",
          ease,
          duration: 0.7,
        });
      } else {
        gsap.to(navRef.current, {
          y: "-100%",
          ease,
          duration: 0.7,
        });
      }
    },
  });
};
