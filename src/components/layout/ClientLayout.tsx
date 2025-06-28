"use client";

import { gsap, useGSAP, ScrollSmoother } from "@/plugins/index";
import { Navbar } from "@/components/index";

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  useGSAP(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollSmoother);
      const smoother = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 2,
        effects: true,
        smoothTouch: 0.1,
        normalizeScroll: false,
        ignoreMobileResize: true,
      });

      return () => {
        smoother.kill();
      };
    }
  }, []);

  return (
    <>
      <Navbar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>{children}</main>
        </div>
      </div>
    </>
  );
};

export default ClientLayout;
