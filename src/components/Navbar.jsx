"use client";

import React, { useRef } from "react";
import { navLinks } from "@/constants/constants";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const Navbar = () => {
  const navRef = useRef(null);

  const isAnimating = useRef(false);

  useGSAP(() => {
    ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: (self) => {
        const scrollingUp = self.direction === -1;

        if (scrollingUp && !isAnimating.current) {
          isAnimating.current = true;

          gsap.to(navRef.current, {
            y: 0,
            backgroundColor: "#00000050",
            backdropFilter: "blur(8px)",
            ease: "power3.in",
            duration: 0.7,
            onComplete: () => {
              isAnimating.current = false;
            },
          });
        }

        if (!scrollingUp && !isAnimating.current) {
          isAnimating.current = true;

          gsap.to(navRef.current, {
            y: "-100%",
            ease: "power3.out",
            duration: 0.7,
            onComplete: () => {
              isAnimating.current = false;
            },
          });
        }
      },
    });
  }, []);

  return (
    <nav ref={navRef} className="fixed top-0 left-0 w-full z-50">
      <div>
        <a href="/" className="flex-center gap-2">
          <Image src="/images/logo.png" alt="Logo" width={20} height={20} />
          <p>Aqui - Pub and Bar</p>
        </a>
        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={link.href}>
                <p>{link.title}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
