import { useEffect } from "react";

export function useKeyboardNavigation(
  next: () => void,
  prev: () => void
) {
  useEffect(() => {
    const handleKeyDown = (
      e: KeyboardEvent
    ) => {
      switch (e.key) {
        case "ArrowRight":
        case "ArrowDown":
          next();
          break;

        case "ArrowLeft":
        case "ArrowUp":
          prev();
          break;
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () =>
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
  }, [next, prev]);
}