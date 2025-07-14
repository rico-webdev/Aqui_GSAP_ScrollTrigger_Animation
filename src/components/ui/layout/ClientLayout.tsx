"use client";

import { gsap, useGSAP, ScrollSmoother } from "@/plugins/index";
import { useRef } from "react";
import { Navbar } from "@/components/ui";

interface ClientLayoutProps {
  children: React.ReactNode;
}

const ClientLayout = ({ children }: ClientLayoutProps) => {
  const container = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollSmoother);

      const smoother = ScrollSmoother.create({
        smooth: 2.5,
        effects: true,
        smoothTouch: 0.1,
        normalizeScroll: false,
        ignoreMobileResize: true,
      });

      // Clean up function
      return () => {
        smoother?.kill();
      };
    },
    { scope: container }
  );

  return (
    <>
      {/* Fixed navbar - outside smooth scroller to maintain fixed positioning */}
      <Navbar />

      {/* Smooth scrolling container */}
      <div id="smooth-wrapper" ref={container}>
        <div id="smooth-content">
          <main>{children}</main>
        </div>
      </div>
    </>
  );
};

export default ClientLayout;
