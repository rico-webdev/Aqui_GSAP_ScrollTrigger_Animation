import { gsap, SplitText } from "@/plugins/index";
import { createRevealAnimation, revealPresets } from "@/animations";

// MENU CONTENT ANIMATIONS
// =================================================
export const createMenuItemAnimation = () => {
  const stagger = 0.05;
  const ease = "power4.in";

  const splitTitle = SplitText.create("#item-title", {
    type: "lines",
  });
  const splitSubtitle = SplitText.create("#item-subtitle", {
    type: "lines",
  });
  const splitGarnish = SplitText.create("#item-garnish", {
    type: "lines",
  });
  const splitDescription = SplitText.create("#item-description", {
    type: "lines",
  });

  const itemContentTimeline = gsap.timeline({
    id: "menu_item_anim",
    defaults: { duration: 0.5, ease, opacity: 0, y: 20, stagger },
  });

  itemContentTimeline.from(splitTitle.lines, {});
  itemContentTimeline.from(splitSubtitle.lines, {}, 0.1);
  itemContentTimeline.from(splitGarnish.lines, {}, 0.1);
  itemContentTimeline.from(splitDescription.lines, {}, 0.1);
};

// MENU REVEAL ANIMATIONS (ScrollTrigger)
// =================================================
export const createMenuRevealAnimations = () => {
  const mm = gsap.matchMedia();

  mm.add("all", () => {
    // Create reveal animation for menu title
    createRevealAnimation({
      trigger: "#menu-title",
      animation: revealPresets.fadeLeft,
      markers: true,
    });

    // Create reveal animation for navigation with different trigger
    createRevealAnimation({
      trigger: "#item-navigation",
      target: "#item-navigation li", // Animate list items
      animation: {
        ...revealPresets.fadeUp,
        stagger: 0.1, // Add stagger for multiple elements
      },
      start: "top 85%",
    });
  });
};
