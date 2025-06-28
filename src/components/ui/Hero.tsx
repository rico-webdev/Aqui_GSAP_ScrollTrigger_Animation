"use client";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import { gsap, useGSAP, SplitText } from "@/plugins/index";

import dynamic from "next/dynamic";

const VideoScrollAnim = dynamic(() => import("./VideoScrollAnim"), {
  ssr: false,
});

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const sloganRef = useRef<HTMLDivElement | null>(null);
  const viewCocktailsTextRef = useRef<HTMLParagraphElement | null>(null);
  const viewCocktailsLinkRef = useRef<HTMLAnchorElement | null>(null);
  const leftLeafRef = useRef<HTMLImageElement | null>(null);
  const videoRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    // GSDevTools.create();
    const heroTimeline = gsap.timeline({
      defaults: { ease: "power1.inOut", duration: 0.5 },
    });
    const splitTextTitle = SplitText.create(titleRef.current, {
      type: "chars",
      charsClass: "split-char",
    });

    // Apply text-gradient class once before animating
    splitTextTitle.chars.forEach((char) => char.classList.add("text-gradient"));

    const splitTextSlogan = SplitText.create(sloganRef.current, {
      type: "lines",
    });
    const splitTextViewCocktails = SplitText.create(viewCocktailsTextRef.current, {
      type: "lines",
      linesClass: "text-center md:text-right",
    });

    const mm = gsap.matchMedia();
    mm.add("(min-width: 767px)", () => {
      gsap.to(leftLeafRef.current, {
        scrollTrigger: {
          trigger: leftLeafRef.current,
          start: "top 15%",
          scrub: 1,
        },
        y: 250,
      });
    });
    mm.add("(max-width: 767px)", () => {
      gsap.to(leftLeafRef.current, {
        scrollTrigger: {
          trigger: leftLeafRef.current,
          start: "top 60%",
          scrub: 1,
        },
        y: -200,
      });
    });

    heroTimeline.from(splitTextTitle.chars, {
      y: 100,
      opacity: 0,
      stagger: 0.06,
    });

    heroTimeline.from(
      splitTextSlogan.lines,
      {
        x: -100,
        opacity: 0,
        stagger: 0.1,
      },
      "-=0.3"
    );
    heroTimeline.from(
      splitTextViewCocktails.lines,
      {
        y: 100,
        opacity: 0,
        stagger: 0.03,
      },
      "<"
    );
    heroTimeline.from(
      viewCocktailsLinkRef.current,
      {
        y: 100,
        opacity: 0,
      },
      "-=0.3"
    );

    heroTimeline.from(
      videoRef.current,
      {
        opacity: 0,
        x: 100,
        ease: "power1.inOut",
        duration: 0.5,
      },

      "-=0.3"
    );

    console.log(heroTimeline.duration());
  }, []);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative">
      <section
        id="hero"
        className="relative z-10 min-h-dvh flex flex-col md:justify-between px-4 lg:px-8 pb-4 lg:pb-8 pt-25">
        <h1
          ref={titleRef}
          className="text-[clamp(6rem,7vw,10rem)] text-center font-bold mb-5 font-cinzel">
          Aquí
        </h1>

        {/* leaf images here */}
        <Image
          ref={leftLeafRef}
          className="absolute left-0 -bottom-20 md:top-40 w-[30%] md:w-1/5"
          src="/images/hero-left-leaf.png"
          alt="Hero Image"
          width={228}
          height={478}
        />
        <div>
          <Image
            className="absolute right-0 top-[20] w-1/4 md:w-1/6"
            src="/images/hero-right-leaf.png"
            alt="Hero Image"
            width={266}
            height={661}
          />
        </div>

        {/* content here */}
        <div className="container w-full mx-auto col-center md:flex-row md:justify-between">
          <div ref={sloganRef} className="hidden md:block text-center" aria-hidden={isMobile}>
            <p>Bold. Local. Unforgettable.</p>
            <p className="text-[clamp(2rem,5vw,4rem)] text-yellow">
              The Soul of
              <span className="block -mt-5 font-dancing-script">the City</span>
            </p>
          </div>
          <div className="col-center md:items-end gap-2 max-w-xl md:max-w-[18.75rem] lg:max-w-md xl:text-lg ">
            <p ref={viewCocktailsTextRef} className="text-center md:text-right">
              Explore our wide selection of craft beers, signature cocktails, and local favorites —
              each poured with passion.
            </p>
            <Link
              ref={viewCocktailsLinkRef}
              href="/cocktails"
              className="font-semibold text-right hover:text-hover">
              View cocktails
            </Link>
          </div>
        </div>
      </section>
      <div ref={videoRef} className="absolute inset-0">
        <VideoScrollAnim />
      </div>
    </div>
  );
};

export default Hero;
