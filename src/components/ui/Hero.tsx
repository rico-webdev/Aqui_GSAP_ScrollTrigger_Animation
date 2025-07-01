"use client";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";

import { useGSAP } from "@/plugins/index";

import dynamic from "next/dynamic";
import { initAnimation } from "@/utils/animations/textAnimations";
const VideoScrollAnim = dynamic(() => import("./VideoScroll"), {
  ssr: false,
});

const Hero = () => {
  const heroSection = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    initAnimation();
  }, []);

  return (
    <div className="relative" ref={heroSection}>
      <section
        id="hero"
        className="relative z-10 min-h-dvh flex flex-col md:justify-between px-4 lg:px-8 pb-4 lg:pb-8 pt-25">
        <h1
          id="title"
          className="text-[clamp(6rem,15vw,12rem)] text-center font-cinzel font-extralight">
          aquí
        </h1>

        {/* content here */}
        <div className="container w-full mx-auto col-center md:flex-row md:justify-between">
          <div id="slogan" className="hidden md:block text-center">
            <p>Bold. Local. Unforgettable.</p>
            <p className="text-[clamp(2rem,5vw,4rem)] text-highlight">
              The Soul of
              <span className="block -mt-5 font-dancing-script">the City</span>
            </p>
          </div>
          <div className="col-center md:items-end gap-2 max-w-xl md:max-w-[18.75rem] lg:max-w-md xl:text-lg text-shadow-light">
            <p id="view-cocktails-text" className="text-center md:text-right">
              Explore our wide selection of craft beers, signature cocktails, and local favorites —
              each poured with passion.
            </p>
            <Link
              id="view-cocktails-link"
              href="#cocktails"
              className="font-semibold text-right hover:text-hover">
              View cocktails
            </Link>
          </div>
        </div>
      </section>

      {/* animated video */}
      <div id="video" className="absolute inset-0">
        <VideoScrollAnim />
      </div>

      {/* leaf images here */}
      <Image
        id="left-leaf"
        src="/images/leaf1.png"
        alt="green leaf"
        width={400}
        height={400}
        priority
        className="absolute -left-1/10 bottom-5 md:bottom-0 w-[25%] md:w-[30%] lg:w-[25%] xl:w-[20%] h-auto transform rotate-45"
        data-speed="1.35"
      />
      <div>
        <Image
          id="right-leaf"
          src="/images/leaf1.png"
          alt="green leaf"
          width={400}
          height={400}
          priority
          className="absolute -right-1/12 top-5 w-[30%] md:w-[30%] lg:w-[20%] h-auto transform -rotate-135"
          data-speed="1.2"
        />
      </div>
    </div>
  );
};

export default Hero;
