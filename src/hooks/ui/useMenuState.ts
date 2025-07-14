import { useState, useRef } from "react";
import { menu } from "@/constants/constants";
import { MenuHookReturn } from "@/components/ui/navigation/menu/types/menu.types";

export const useMenuState = (): MenuHookReturn => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [currentSectionIndex, setCurrentSectionIndex] = useState<number>(0);
  const previousIndex = useRef<number>(-1);

  const currentItems = menu[currentSectionIndex].items;

  const isActiveItem = (index: number) => index === currentIndex;
  const isActiveSection = (index: number) => index === currentSectionIndex;

  const handleSectionChange = (index: number) => {
    setCurrentSectionIndex(index);
    setCurrentIndex(0);
  };

  const handleItemChange = (index: number) => {
    previousIndex.current = currentIndex;
    setCurrentIndex(index);
    setNextIndex(index === currentItems.length - 1 ? 0 : index + 1);
  };

  const handleNavigation = (direction: "next" | "prev") => {
    const maxIndex = currentItems.length - 1;
    let newIndex: number;

    if (direction === "next") {
      newIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1;
    } else {
      newIndex = currentIndex <= 0 ? maxIndex : currentIndex - 1;
    }
    previousIndex.current = currentIndex;
    setCurrentIndex(newIndex);
  };

  return {
    currentIndex,
    currentSectionIndex,
    nextIndex,
    currentItems,
    isActiveItem,
    isActiveSection,
    handleSectionChange,
    handleItemChange,
    handleNavigation,
    previousIndex,
    setCurrentIndex,
  };
};
