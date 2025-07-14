// ========================================
// GLOBAL NAVIGATION TYPES
// ========================================
export interface NavLink {
  id: string;
  title: string;
  href: `#${string}`;
}

// ========================================
// GLOBAL MENU & RESTAURANT TYPES
// ========================================
export type ServingMethodDrinks =
  | "Draft"
  | "Bottle"
  | "On the Rocks"
  | "Blended"
  | "Frozen"
  | "Shaken"
  | "Built";

export interface Menu {
  name: string;
  items: MenuItem[];
  id: string;
  bgImage?: string;
}

export interface MenuItem {
  id: string;
  name: string;
  origin: string;
  alcohol: boolean;
  abv: number;
  servingMethod?: ServingMethodDrinks;
  garnish?: string;
  ingredients: string[];
  tasteProfile: string[];
  tags: string[];
  price: number;
  src: string;
  descriptionHeading: string;
  description: string;
}

// ========================================
// GLOBAL GSAP & ANIMATION TYPES
// ========================================
export type GSAPTween = gsap.core.Tween;
export type GSAPTimeline = gsap.core.Timeline;
export type GSAPTweenTarget = gsap.TweenTarget;
export type GSAPTweenVars = gsap.TweenVars;
