"use client";

// react and next imports
import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";

// gsap imports
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// internal imports
import { navLinks } from "@/constants/constants";

const Navbar = () => {
  const navRef = useRef(null);
  const isAnimating = useRef(false);

  useGSAP(() => {
    gsap.from(navRef.current, {
      y: -100,
      opacity: 0,
      delay: 1.38,
      duration: 0.6,
      ease: "power1.out",
    });
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
            ease: "power1.out",
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
            ease: "power1.out",
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
    <nav ref={navRef} className="fixed top-0 left-0 z-50 w-full font-extralight px-4 md:px-8">
      <div className="container col-center gap-5 md:flex-row md:justify-between py-5 mx-auto">
        <Link href="/" className="row-center gap-2">
          <Image src="/images/logo.png" alt="Logo" width={20} height={20} />
          <p className="tracking-wide">Aqui - Pub and Bar</p>
        </Link>
        <ul className="row-center gap-4 lg:gap-12">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link href={link.href}>
                <p className="tracking-widest">{link.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
