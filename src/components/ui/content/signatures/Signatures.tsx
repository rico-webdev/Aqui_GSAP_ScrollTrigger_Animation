"use client";

import { CldImage } from "next-cloudinary";
import React, { useRef } from "react";
import { menu } from "@/constants/constants";
import { useGSAP } from "@/plugins/index";
import { MenuItem } from "@/types/global";
import { signaturesAnim } from "./Signatures.animations";

const Signatures = () => {
  const container = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      signaturesAnim();
    },
    { scope: container }
  );
  return (
    <div className="relative" ref={container}>
      <section
        id="signatures"
        className="container flex flex-col mx-auto relative z-10 min-h-dvh px-10 pb-[400px] md:pb-10 md:px-0">
        <h2
          id="signatures-heading"
          className="absolute z-10 -top-70 left-1/2 transform -translate-x-1/2 md:relative md:top-auto md:left-auto md:translate-x-0 md:transform-none text-[clamp(1.5rem,_6vw,_2.5rem)] text-neutral-400 text-center w-full max-w-3xl mx-auto px-3 my-20 font-light leading-tight">
          {/* NOTE: Any content change here may require updating the GSAP animations target start values */}
          <div>Savour the signatures that never fade. Poured with care, served with soul.</div>
        </h2>

        <div className="col-center gap-10 md:flex-row">
          {menu.map((section) => (
            <React.Fragment key={section.id}>
              <div className="relative col-center md:basis-1/3">
                <h3 className="list-title text-neutral-500 text-7xl capitalize font-dancing-script mb-2 md:-mb-5">
                  {section.name}
                </h3>
                <ul className="list z-10 col-center gap-4 gap-y-10 max-w-3xl">
                  {section.items.map((item: MenuItem) => (
                    <li key={item.id} className="list-item col-center gap-2 text-center">
                      <h4 className="text-2xl font-bold text-highlight font-cinzel">{item.name}</h4>
                      <p className="text-sm font-light">
                        {item.origin} {item.servingMethod ? `| ${item.servingMethod} |` : "|"} $
                        {item.price.toFixed(2)}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </React.Fragment>
          ))}
        </div>
      </section>
      {/* leaf images here */}
      <CldImage
        aria-hidden="true"
        id="cocktail-left-leaf"
        src="leaf_ftxwjf"
        alt=""
        width={200}
        height={200}
        priority={false}
        loading="lazy"
        className="absolute -left-25 -bottom-20 rotate-45 hidden md:block w-[280px]"
        data-speed="1.15"
      />
      <div>
        <CldImage
          aria-hidden="true"
          id="cocktail-right-leaf"
          src="leaf_ftxwjf"
          alt="green leaf"
          width={280}
          height={280}
          priority={false}
          loading="lazy"
          className=" hidden md:block absolute -right-25 -bottom-10 -rotate-45 -scale-x-100 w-[280px]"
          data-speed="1.15"
        />
      </div>
    </div>
  );
};

export default Signatures;
