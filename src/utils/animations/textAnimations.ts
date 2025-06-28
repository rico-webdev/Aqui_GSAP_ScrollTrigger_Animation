import { gsap, SplitText, ScrollTrigger } from "@/plugins/index";

export const initAnimation = () => {
  const heroTimeline = gsap.timeline({
    defaults: { ease: "power1.inOut", duration: 0.5 },
  });

  let charsAnim: gsap.core.Tween | null = null;
  const splitTextTitle = SplitText.create("#title", {
    type: "chars",
    charsClass: "split-char",
    autoSplit: true,
    onSplit: (self) => {
      charsAnim = gsap.from(self.chars, {
        y: 100,
        opacity: 0,
        stagger: 0.06,
        duration: 0.5,
      });
      return charsAnim;
    },
  });

  if (charsAnim) {
    heroTimeline.add(charsAnim, 0);
  }

  // Apply text-gradient class once before animating
  splitTextTitle.chars.forEach((char) => char.classList.add("text-gradient"));

  let linesAnim: gsap.core.Tween | null = null;
  SplitText.create("#slogan", {
    type: "lines",
    autoSplit: true,
    onSplit: (self) => {
      linesAnim = gsap.from(self.lines, {
        x: -100,
        opacity: 0,
        stagger: 0.1,
      });
    },
  });
  if (linesAnim) {
    heroTimeline.add(linesAnim, "-=0.3");
  }

  let viewCocktailsAnim: gsap.core.Tween | null = null;
  SplitText.create("#view-cocktails-text", {
    type: "lines",
    autoSplit: true,
    onSplit: (self) => {
      viewCocktailsAnim = gsap.from(self.lines, {
        y: 100,
        opacity: 0,
        stagger: 0.03,
      });
    },
  });
  if (viewCocktailsAnim) {
    heroTimeline.add(viewCocktailsAnim, "-=0.3");
  }

  heroTimeline.from(
    "#view-cocktails-link",
    {
      y: 100,
      opacity: 0,
    },
    "-=0.3"
  );

  heroTimeline.from(
    "#video",
    {
      opacity: 0,
      x: 100,
      ease: "power1.inOut",
      duration: 0.5,
    },

    "-=0.3"
  );
};

export const leafAnimation = () => {
  const mm = gsap.matchMedia();
  mm.add("(min-width: 767px)", () => {
    gsap.to("#left-leaf", {
      scrollTrigger: {
        trigger: "#left-leaf",
        start: "top 15%",
        scrub: 1,
      },
      y: 250,
    });
  });

  mm.add("(max-width: 767px)", () => {
    gsap.to("#left-leaf", {
      scrollTrigger: {
        trigger: "#left-leaf",
        start: "top 60%",
        scrub: 1,
      },
      y: -200,
    });
  });

  gsap.to("#right-leaf", {
    scrollTrigger: {
      trigger: "#right-leaf",
      start: "top 15%",
      scrub: 1,
    },
    y: -200,
  });
};

export const navbarAnimation = (
  navRef: React.RefObject<HTMLDivElement | null>,
  isAnimating: React.RefObject<boolean>
) => {
  gsap.from(navRef.current, {
    y: -100,
    opacity: 0,
    delay: 1.38,
    duration: 0.6,
    ease: "power1.out",
  });
  ScrollTrigger.create({
    start: 0,
    end: "max",
    onUpdate: (self) => {
      const scrollingUp = self.direction === -1;

      if (scrollingUp && !isAnimating.current) {
        isAnimating.current = true;

        gsap.to(navRef.current, {
          y: 0,
          backgroundColor: "#00000050",
          backdropFilter: "blur(8px)",
          ease: "power1.out",
          duration: 0.7,
          onComplete: () => {
            isAnimating.current = false;
          },
        });
      } else if (!scrollingUp && !isAnimating.current) {
        isAnimating.current = true;

        gsap.to(navRef.current, {
          y: "-100%",
          ease: "power1.out",
          duration: 0.7,
          onComplete: () => {
            isAnimating.current = false;
          },
        });
      }
    },
  });
};
