import { useState, useRef, useCallback } from "react";
import gsap from "gsap";

export const useMenuAnimations = (isClient: boolean) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const imageRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  const animateToItem = useCallback(
    async (callback: () => void) => {
      if (!isClient || isAnimating) return;

      setIsAnimating(true);

      if (imageRef.current && contentRef.current) {
        // Animate out current content
        await gsap.to([imageRef.current, contentRef.current], {
          opacity: 0,
          y: -20,
          duration: 0.3,
          ease: "power2.out",
        });
      }

      // Execute callback (state update)
      callback();

      if (imageRef.current && contentRef.current) {
        // Animate in new content
        gsap.fromTo(
          [imageRef.current, contentRef.current],
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: "power2.out",
            onComplete: () => setIsAnimating(false),
          }
        );
      } else {
        setIsAnimating(false);
      }
    },
    [isClient, isAnimating]
  );

  const animateSection = useCallback(
    async (callback: () => void) => {
      if (!isClient || isAnimating) return;

      setIsAnimating(true);

      if (imageRef.current && contentRef.current) {
        // Animate out current section
        await gsap.to([imageRef.current, contentRef.current], {
          opacity: 0,
          scale: 0.95,
          duration: 0.3,
          ease: "power2.out",
        });
      }

      // Execute callback (state update)
      callback();

      if (imageRef.current && contentRef.current) {
        // Animate in new section
        gsap.fromTo(
          [imageRef.current, contentRef.current],
          { opacity: 0, scale: 0.95 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.4,
            ease: "back.out(1.7)",
            onComplete: () => setIsAnimating(false),
          }
        );
      } else {
        setIsAnimating(false);
      }
    },
    [isClient, isAnimating]
  );

  const initialAnimation = useCallback(() => {
    if (!isClient || !imageRef.current || !contentRef.current) return;

    gsap.fromTo(
      [imageRef.current, contentRef.current],
      { opacity: 0, y: 30, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
        stagger: 0.1,
      }
    );
  }, [isClient]);

  return {
    isAnimating,
    imageRef,
    contentRef,
    animateToItem,
    animateSection,
    initialAnimation,
  };
};
