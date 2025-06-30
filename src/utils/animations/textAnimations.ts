import { gsap, SplitText, ScrollTrigger } from "@/plugins/index";

// DEFAULT SETTINGS FOR SCROLLTRIGGER AND ANIMATIONS
// =================================================
// dev tools
const markers = false &&
  process.env.NODE_ENV === "development" && {
    fontSize: "12px",
    indent: 10,
  };
ScrollTrigger.defaults({
  toggleActions: "play revert none reverse",
  markers,
});

const ease = "power1.out";

// INIT: HERO ANIMATION
// ==================================================
export const initAnimation = () => {
  const heroTimeline = gsap.timeline({
    defaults: { ease, duration: 0.5 },
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
      ease,
      duration: 0.5,
    },

    "-=0.3"
  );
};

// NAVBAR ANIMATION
// =================================================
export const navbarAnimation = (
  navRef: React.RefObject<HTMLDivElement | null>,
  isAnimating: React.RefObject<boolean>
) => {
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

      if (scrollingUp && !isAnimating.current) {
        isAnimating.current = true;

        gsap.to(navRef.current, {
          y: 0,
          backgroundColor: "#00000050",
          backdropFilter: "blur(8px)",
          ease,
          duration: 0.7,
          onComplete: () => {
            isAnimating.current = false;
          },
        });
      } else if (!scrollingUp && !isAnimating.current) {
        isAnimating.current = true;

        gsap.to(navRef.current, {
          y: "-100%",
          ease,
          duration: 0.7,
          onComplete: () => {
            isAnimating.current = false;
          },
        });
      }
    },
  });
};

// MENU SECTION ANIMATION
// ====================
export const menuAnimations = () => {
  const splitText = SplitText.create("#menu-heading", {
    type: "lines, words",
    wordsClass: "word++",
  });

  // menu heading animation
  const mmHeading = gsap.matchMedia();
  mmHeading.add(
    {
      isMobile: "(max-width: 768px)",
      isDesktop: "(min-width: 769px)",
    },
    (context) => {
      const conditions = context.conditions;
      if (!conditions) return;

      const { isMobile } = conditions;

      ScrollTrigger.create({
        id: "menu_heading",
        trigger: "#menu",
        start: isMobile ? "top 76%" : "top 40%",
        markers,
        animation: gsap.from(splitText.lines, {
          y: 25,
          opacity: 0,
          stagger: 0.1,
        }),
      });
    }
  );

  // list heading animation (cocktails / beers )
  const mmListItems = gsap.matchMedia();
  mmListItems.add(
    {
      isMobile: "(max-width: 768px)",
      isDesktop: "(min-width: 769px)",
    },
    (context) => {
      const conditions = context.conditions;
      if (!conditions) return;

      const { isMobile } = conditions;

      gsap.utils.toArray<HTMLElement>("#list > *").forEach((el) => {
        gsap.from(el, {
          scrollTrigger: {
            id: `list_item`,
            trigger: el,
            start: isMobile ? "top 55%" : "top 70%",
            toggleActions: "play none none reverse",
            markers,
          },
          y: 25,
          opacity: 0,
          duration: 0.3,
          ease,
        });
      });

      gsap.utils.toArray<HTMLElement>("#list-title").forEach((el) => {
        gsap.from(el, {
          scrollTrigger: {
            id: `list_title`,
            trigger: el,
            start: isMobile ? "bottom 58%" : "top 70%",
            toggleActions: "play none none reverse",
            markers,
          },
          y: 25,
          opacity: 0,
          duration: 0.2,
          ease,
        });
      });
    }
  );
};
