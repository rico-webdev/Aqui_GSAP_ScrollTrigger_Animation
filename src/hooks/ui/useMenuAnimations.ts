import { useGSAP } from "@/plugins/index";
import {
  createMenuItemAnimation,
  createMenuRevealAnimations,
} from "@/components/ui/content/menu/Menu/Menu.animations";
import { MenuAnimationsHookProps } from "@/components/ui/content/menu/Menu/Menu.types";

export const useMenuAnimations = ({
  container,
  currentSectionIndex,
  currentIndex,
}: MenuAnimationsHookProps) => {
  // Item content animations (when switching items)
  useGSAP(
    () => {
      createMenuItemAnimation();
    },
    {
      scope: container,
      dependencies: [currentSectionIndex, currentIndex],
    }
  );

  // Initial reveal animations (ScrollTrigger)
  useGSAP(
    () => {
      createMenuRevealAnimations();
    },
    {
      scope: container,
      dependencies: [currentSectionIndex],
    }
  );
};
