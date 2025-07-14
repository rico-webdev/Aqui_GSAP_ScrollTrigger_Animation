import { RefObject, Dispatch, SetStateAction } from "react";
import { menu } from "@/constants/constants";
import { CldImage } from "next-cloudinary";
import type { MenuItem } from "@/types/global";

interface ArrowNavigationProps {
  currentSectionIndex: number;
  handleNavigation: (direction: "next" | "prev") => void;
  currentIndex: number;
  previousIndex: RefObject<number>;
  setCurrentIndex: Dispatch<SetStateAction<number>>;
  className?: string;
  bulletPosition: string;
}

const ArrowNavigation = ({
  currentSectionIndex,
  handleNavigation,
  currentIndex,
  previousIndex,
  setCurrentIndex,
  className,
  bulletPosition,
}: ArrowNavigationProps) => {
  return (
    <div
      className={`z-10 flex justify-evenly items-end md:gap-5 sm:items-center sm:justify-between flex-1 ${className}`}>
      {/* Navigation arrows */}
      <button
        onClick={() => handleNavigation("prev")}
        className="p-3 rounded-full bg-highlight/20 hover:bg-highlight/80 transition-all duration-300 group"
        aria-label="Previous item">
        <CldImage
          src="right-arrow_pgdwry"
          alt="Previous"
          width={24}
          height={24}
          className="group-hover:scale-110 transition-transform duration-300"
        />
      </button>

      <div className={`col-center h-[48px] gap-3 ${bulletPosition}`}>
        <div className="row-center gap-3">
          {menu[currentSectionIndex].items.map((_: MenuItem, i: number) => (
            <button
              key={i}
              onClick={() => {
                previousIndex.current = currentIndex;
                setCurrentIndex(i);
              }}
              className={`w-2 aspect-square rounded-full transition-all duration-300 col-center ${
                i === currentIndex ? "bg-highlight scale-125" : "bg-light/30 hover:bg-light/50"
              }`}
              aria-label={`Go to item ${i + 1}`}></button>
          ))}
        </div>
      </div>

      <button
        onClick={() => handleNavigation("next")}
        className="p-3 rounded-full bg-highlight/20 hover:bg-highlight/80 transition-all duration-300 group"
        aria-label="Next item">
        <CldImage
          src="left-arrow_npxosx"
          alt="Next"
          width={24}
          height={24}
          className="group-hover:scale-110 transition-transform duration-300"
        />
      </button>
    </div>
  );
};

export default ArrowNavigation;
