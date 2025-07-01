"use client";

import Image from "next/image";
import { useRef } from "react";
import { menu } from "@/constants/constants";
import { menuAnimations } from "@/utils/animations/textAnimations";
import { useGSAP } from "@/plugins/index";

const Menu = () => {
  const container = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      menuAnimations();
    },
    { scope: container }
  );
  return (
    <div className="relative" ref={container}>
      <section
        id="menu"
        className="container flex flex-col mx-auto relative z-10 min-h-dvh px-10 pb-[330px] md:px-0">
        <h2
          id="menu-heading"
          className="absolute z-10 -top-70 left-1/2 transform -translate-x-1/2 md:relative md:top-auto md:left-auto md:translate-x-0 md:transform-none text-[clamp(2rem,_6vw,_2.5rem)] text-neutral-300 leading-tight my-20 text-center">
          <div className="">favourites</div>
          <div className="whitespace-nowrap">poured with care.</div>
        </h2>

        <div className="col-center md:flex-row gap-20 justify-between mx-10">
          {menu.map((section) => (
            <div key={section.id} className="relative col-center w-[245px] ">
              <h3 className="list-title text-neutral-500 text-7xl capitalize font-dancing-script mb-2 md:-mb-5">
                {section.title}
              </h3>
              <ul className="list z-10 col-center gap-4 gap-y-10 max-w-3xl">
                {section.items.map((item) => (
                  <li key={item.id} className="list-item col-center gap-2 text-center">
                    <h4
                      className={`text-2xl font-bold ${
                        item.id.startsWith("cocktail") ? "text-cinnabar" : "text-citron"
                      } font-cinzel`}>
                      {item.name}
                    </h4>
                    <p className="text-sm font-light">
                      {item.origin} | {item.serving} | ${item.price.toFixed(2)}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      {/* leaf images here */}
      <Image
        aria-hidden="true"
        id="cocktail-left-leaf"
        src="/images/leaf.png"
        alt=""
        width={200}
        height={200}
        priority={false}
        loading="lazy"
        className="absolute -left-20 -bottom-10 md:top-auto rotate-45 hidden md:block h-auto w-auto"
        data-speed="1.15"
      />
      <div>
        <Image
          aria-hidden="true"
          id="cocktail-right-leaf"
          src="/images/leaf.png"
          alt="green leaf"
          width={200}
          height={200}
          priority={false}
          loading="lazy"
          className="absolute -right-20 bottom-10 md:top-auto -rotate-45 -scale-x-100 hidden md:block h-auto w-auto"
          data-speed="1.35"
        />
      </div>
    </div>
  );
};

export default Menu;
