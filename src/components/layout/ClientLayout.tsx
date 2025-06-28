"use client";

import { gsap, useGSAP, ScrollSmoother } from "@/plugins/index";
import { useRef } from "react";
import { Navbar } from "@/components/index";

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  const container = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollSmoother);
      ScrollSmoother.create({
        smooth: 2,
        effects: true,
        smoothTouch: 0.1,
        normalizeScroll: false,
        ignoreMobileResize: true,
      });
    },
    { scope: container }
  );

  return (
    <>
      <Navbar />
      <div id="smooth-wrapper" ref={container}>
        <div id="smooth-content">
          <main>{children}</main>
        </div>
      </div>
    </>
  );
};

export default ClientLayout;
