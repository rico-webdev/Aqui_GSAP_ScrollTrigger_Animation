"use client";

import { useRef } from "react";
import { menu } from "@/constants/constants";
import { useMenuState, useMenuAnimations } from "@/hooks/ui";
import { BackgroundNoise } from "@/components/ui";
import { SectionNavigation, ItemNavigation, MenuImages, MenuContent } from "../components/index";

const Menu = () => {
  const container = useRef<HTMLDivElement | null>(null);

  // Custom hooks handle all the logic
  const {
    currentIndex,
    currentSectionIndex,
    currentItems,
    isActiveItem,
    isActiveSection,
    handleSectionChange,
    handleItemChange,
    handleNavigation,
    previousIndex,
    setCurrentIndex,
  } = useMenuState();

  // Animations are handled in a separate hook
  useMenuAnimations({
    container,
    currentSectionIndex,
    currentIndex,
  });

  if (!currentItems) return null;

  return (
    <section id="menu" ref={container} aria-live="polite" aria-atomic="true">
      <h2 id="menu-title">Menu</h2>
      <nav>
        <SectionNavigation
          sections={menu}
          isActiveSection={isActiveSection}
          onSectionChange={handleSectionChange}
        />

        <ItemNavigation
          items={currentItems}
          isActiveItem={isActiveItem}
          onItemChange={handleItemChange}
        />
      </nav>

      <MenuImages
        items={currentItems}
        currentIndex={currentIndex}
        isActiveItem={isActiveItem}
        currentSectionIndex={currentSectionIndex}
        handleNavigation={handleNavigation}
        previousIndex={previousIndex}
        setCurrentIndex={setCurrentIndex}
      />

      <MenuContent item={currentItems[currentIndex]} />

      <BackgroundNoise />
    </section>
  );
};

export default Menu;
