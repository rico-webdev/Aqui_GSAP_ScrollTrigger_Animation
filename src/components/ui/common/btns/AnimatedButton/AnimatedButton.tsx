"use client";

import { useGSAP, gsap, SplitText } from "@/plugins";
import { AnimatedButtonProps } from "./AnimatedButton.types";
import React, { useRef } from "react";

const AnimatedButton = ({
  className = "",
  onClick,
  children,
  perspective = 18,
  isActive = false,
}: AnimatedButtonProps) => {
  const container = useRef<HTMLDivElement | null>(null);
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const btnCopyRef = useRef<HTMLButtonElement | null>(null);
  const btnTween = useRef<GSAPTimeline | null>(null);

  const ease = "power4.in"; // Smooth easing for 3D effect
  const stagger: gsap.StaggerVars = {
    from: "start",
    ease,
    amount: 0.2,
  };

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // animations for all screen sizes
      mm.add("(min-width: 1024px)", () => {
        // Create SplitText
        const split = SplitText.create(btnRef.current, {
          type: "chars",
        });

        const cloneSplit = SplitText.create(btnCopyRef.current, {
          type: "chars",
        });

        // Create timeline
        const tl = gsap.timeline({
          paused: true,
        });

        // Set initial positions with scaled transform origin and gap
        gsap.set(cloneSplit.chars, {
          rotateX: -90, // Slightly more rotation for bigger gap
          opacity: 0,
          transformOrigin: `50% 50% -${perspective}px`, // Adjusted for better perspective
        });

        //build animation
        tl.to(split.chars, {
          rotationX: 90,
          transformOrigin: `50% 50% -${perspective}px`,
          stagger: stagger,
        });
        tl.to(split.chars, { opacity: 0.3, stagger: stagger }, 0);
        //reveal the clones
        tl.to(cloneSplit.chars, { opacity: 1, stagger: stagger }, 0.001);
        //animate the clones
        tl.to(cloneSplit.chars, { rotateX: 0, stagger: stagger }, 0);

        btnTween.current = tl;

        // Cleanup function
        return () => {
          split.revert();
          cloneSplit.revert();
        };
      });
    },
    { scope: container }
  );

  // Determine colors based on active state - putting these last to override any className colors
  const activeColors = isActive ? "text-red-500" : "text-light/70 hover:text-white";
  const cloneColors = isActive ? "text-red-500" : "text-red-500";

  console.log("AnimatedButton rendered with colors:", {
    activeColors,
    cloneColors,
  });
  return (
    <div
      ref={container}
      className="relative inline-block perspective-[600px] p-2 border-l border-r border-neutral-700 px-5"
      onClick={() => onClick?.()}
      onMouseEnter={() => btnTween.current?.play()}
      onMouseLeave={() => btnTween.current?.reverse()}>
      <button ref={btnRef} className={`relative whitespace-nowrap ${className} ${activeColors}`}>
        {children}
      </button>
      <button
        ref={btnCopyRef}
        className={`absolute inset-0 whitespace-nowrap ${className} ${cloneColors}`}>
        {children}
      </button>
    </div>
  );
};

export default AnimatedButton;
