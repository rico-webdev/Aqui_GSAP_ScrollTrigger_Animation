import { useEffect, useCallback } from "react";

interface UseKeyboardNavigationProps {
  isClient: boolean;
  isAnimating: boolean;
  onNext: () => void;
  onPrev: () => void;
}

export const useKeyboardNavigation = ({
  isClient,
  isAnimating,
  onNext,
  onPrev,
}: UseKeyboardNavigationProps) => {
  const handleKeyPress = useCallback(
    (e: KeyboardEvent) => {
      if (isAnimating) return;

      switch (e.key) {
        case "ArrowLeft":
          e.preventDefault();
          onPrev();
          break;
        case "ArrowRight":
          e.preventDefault();
          onNext();
          break;
      }
    },
    [isAnimating, onNext, onPrev]
  );

  useEffect(() => {
    if (!isClient) return;

    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [isClient, handleKeyPress]);
};
