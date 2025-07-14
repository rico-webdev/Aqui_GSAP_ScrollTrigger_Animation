import { CldImage } from "next-cloudinary";
import { RefObject, Dispatch, SetStateAction } from "react";
import { MenuItem } from "@/types";
import MenuNavigation from "../MenuNavigation";

interface MenuImagesProps {
  items: MenuItem[];
  currentIndex: number;
  isActiveItem: (index: number) => boolean;
  currentSectionIndex: number;
  handleNavigation: (direction: "next" | "prev") => void;
  previousIndex: RefObject<number>;
  setCurrentIndex: Dispatch<SetStateAction<number>>;
}

const MenuImages = ({
  items,
  currentIndex,
  isActiveItem,
  currentSectionIndex,
  handleNavigation,
  previousIndex,
  setCurrentIndex,
}: MenuImagesProps) => {
  return (
    <div id="item-container" role="region" aria-live="polite" aria-atomic="true">
      <div className="image-container">
        {items.map((item, i) => {
          return (
            <CldImage
              key={item.id}
              alt={item.name}
              aria-hidden={!isActiveItem(i)}
              src={item.src}
              fill
              sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw"
              className={`item-image ${isActiveItem(i) ? "opacity-100" : "opacity-0"}`}
            />
          );
        })}
        <div className="gradient-highlight"></div>
        <MenuNavigation
          currentSectionIndex={currentSectionIndex}
          handleNavigation={handleNavigation}
          currentIndex={currentIndex}
          previousIndex={previousIndex}
          setCurrentIndex={setCurrentIndex}
          className="absolute -inset-y-15 inset-x-0 md:-inset-x-20 z-10"
          bulletPosition="self-end"
        />
      </div>
    </div>
  );
};

export default MenuImages;
