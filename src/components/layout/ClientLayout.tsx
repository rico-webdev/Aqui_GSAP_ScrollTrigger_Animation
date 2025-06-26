"use client";
import { Navbar } from "@/components/index";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollSmoother } from "gsap/ScrollSmoother";
gsap.registerPlugin(ScrollSmoother);

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 2.5,
      effects: true,
      smoothTouch: 0.1,
    });
  }, []);

  return (
    <>
      <Navbar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="overflow-x-hidden">{children}</main>
        </div>
      </div>
    </>
  );
};

export default ClientLayout;
