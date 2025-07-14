import { RefObject, Dispatch, SetStateAction } from "react";
import { MenuItem } from "@/types/global";

// Menu component types
export interface MenuProps {
  className?: string;
}

// Menu hook types
export interface MenuHookReturn {
  currentIndex: number;
  currentSectionIndex: number;
  nextIndex: number;
  currentItems: MenuItem[];
  isActiveItem: (index: number) => boolean;
  isActiveSection: (index: number) => boolean;
  handleSectionChange: (index: number) => void;
  handleItemChange: (index: number) => void;
  handleNavigation: (direction: "next" | "prev") => void;
  previousIndex: RefObject<number>;
  setCurrentIndex: Dispatch<SetStateAction<number>>;
}

export interface MenuAnimationsHookProps {
  container: RefObject<HTMLDivElement | null>;
  currentSectionIndex: number;
  currentIndex: number;
}
