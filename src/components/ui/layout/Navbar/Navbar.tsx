"use client";

// react and next imports
import React, { useRef } from "react";
import Link from "next/link";
import { CldImage } from "next-cloudinary";

// gsap imports
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// internal imports
import { navLinks } from "@/constants/constants";
import { navbarAnimation } from "./Navbar.animations";

const Navbar = () => {
  const navRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      navbarAnimation(navRef);
    },
    { scope: navRef }
  );

  return (
    <nav ref={navRef} className="fixed top-0 left-0 z-50 w-full font-extralight text-5xl ">
      <div className="container col-center gap-5 md:flex-row md:justify-between py-5 mx-auto">
        <Link href="/" className="row-center gap-2">
          <CldImage src="logo_atmu8v" alt="Logo" width={20} height={20} />
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
