import { gsap, SplitText } from "@/plugins/index";

// HERO TEXT ANIMATIONS
// =================================================
export const initAnimation = () => {
  // Initialize text splitting
  const titleSplit = SplitText.create("#title", {
    type: "chars",
  });

  const sloganSplit = SplitText.create("#slogan p", {
    type: "words",
  });

  const cocktailsTextSplit = SplitText.create("#view-cocktails-text", {
    type: "words",
  });

  const cocktailsLinkSplit = SplitText.create("#view-cocktails-link", {
    type: "chars",
  });

  // Create main timeline
  const tl = gsap.timeline({
    defaults: { ease: "power2.out" },
  });

  // Title animation
  tl.from(titleSplit.chars, {
    opacity: 0,
    y: 100,
    rotation: 15,
    duration: 1.2,
    stagger: 0.02,
  });

  // Slogan animation
  tl.from(
    sloganSplit.words,
    {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.1,
    },
    "-=0.5"
  );

  // Cocktails text animation
  tl.from(
    cocktailsTextSplit.words,
    {
      opacity: 0,
      y: 20,
      duration: 0.6,
      stagger: 0.05,
    },
    "-=0.3"
  );

  // Cocktails link animation
  tl.from(
    cocktailsLinkSplit.chars,
    {
      opacity: 0,
      y: 10,
      duration: 0.4,
      stagger: 0.02,
    },
    "-=0.2"
  );

  // Leaf images animation
  tl.from(
    "#left-leaf",
    {
      opacity: 0,
      x: -100,
      rotation: -45,
      duration: 1,
    },
    "-=0.8"
  );

  tl.from(
    "#right-leaf",
    {
      opacity: 0,
      x: 100,
      rotation: 45,
      duration: 1,
    },
    "-=0.9"
  );

  return tl;
};
