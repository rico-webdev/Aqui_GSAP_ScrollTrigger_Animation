import { gsap, SplitText, ScrollTrigger } from "@/plugins/index";

// SIGNATURES ANIMATIONS
// =================================================
export const signaturesAnim = () => {
  // Initialize text splitting
  const headingSplit = SplitText.create("#signatures-heading div", {
    type: "words",
  });

  const listTitleSplits = SplitText.create(".list-title", {
    type: "chars",
  });

  // Create main timeline for initial animations
  const tl = gsap.timeline({
    defaults: { ease: "power2.out" },
  });

  // Heading animation
  tl.from(headingSplit.words, {
    opacity: 0,
    y: 30,
    duration: 0.8,
    stagger: 0.1,
  });

  // List titles animation
  tl.from(
    listTitleSplits.chars,
    {
      opacity: 0,
      y: 50,
      rotation: 10,
      duration: 0.6,
      stagger: 0.02,
    },
    "-=0.4"
  );

  // ScrollTrigger for list items
  ScrollTrigger.create({
    trigger: ".list",
    start: "top 80%",
    onEnter: () => {
      gsap.from(".list-item", {
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
      });
    },
  });

  // Leaf images animation
  ScrollTrigger.create({
    trigger: "#signatures",
    start: "top 70%",
    onEnter: () => {
      gsap.from("#cocktail-left-leaf", {
        opacity: 0,
        x: -100,
        rotation: -45,
        duration: 1,
        ease: "power2.out",
      });

      gsap.from("#cocktail-right-leaf", {
        opacity: 0,
        x: 100,
        rotation: 45,
        duration: 1,
        delay: 0.2,
        ease: "power2.out",
      });
    },
  });

  return tl;
};
