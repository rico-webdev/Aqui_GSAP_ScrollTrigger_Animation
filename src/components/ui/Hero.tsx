"use client";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";

import { useGSAP } from "@/plugins/index";

import dynamic from "next/dynamic";
import { initAnimation, leafAnimation } from "@/utils/animations/textAnimations";
const VideoScrollAnim = dynamic(() => import("./VideoScrollAnim"), {
  ssr: false,
});

const Hero = () => {
  const heroSection = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    initAnimation();
  }, []);

  useGSAP(
    () => {
      leafAnimation();
    },
    { scope: heroSection }
  );

  return (
    <div className="relative" ref={heroSection}>
      <section
        id="hero"
        className="relative z-10 min-h-dvh flex flex-col md:justify-between px-4 lg:px-8 pb-4 lg:pb-8 pt-25">
        <h1
          id="title"
          className="text-[clamp(6rem,7vw,10rem)] text-center font-bold mb-5 font-cinzel">
          Aquí
        </h1>

        {/* leaf images here */}
        <Image
          id="left-leaf"
          src="/images/hero-left-leaf.png"
          alt="green leaf"
          width={228}
          height={478}
          priority={false}
          loading="lazy"
          className="absolute left-0 -bottom-20 md:top-40 w-[30%] md:w-1/5"
        />
        <div>
          <Image
            id="right-leaf"
            src="/images/hero-right-leaf.png"
            alt="green leaf"
            width={266}
            height={661}
            priority={false}
            loading="lazy"
            className="absolute right-0 top-[20] w-1/4 md:w-1/6"
          />
        </div>

        {/* content here */}
        <div className="container w-full mx-auto col-center md:flex-row md:justify-between">
          <div id="slogan" className="hidden md:block text-center">
            <p>Bold. Local. Unforgettable.</p>
            <p className="text-[clamp(2rem,5vw,4rem)] text-yellow">
              The Soul of
              <span className="block -mt-5 font-dancing-script">the City</span>
            </p>
          </div>
          <div className="col-center md:items-end gap-2 max-w-xl md:max-w-[18.75rem] lg:max-w-md xl:text-lg ">
            <p id="view-cocktails-text" className="text-center md:text-right">
              Explore our wide selection of craft beers, signature cocktails, and local favorites —
              each poured with passion.
            </p>
            <Link
              id="view-cocktails-link"
              href="/cocktails"
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
    </div>
  );
};

export default Hero;
