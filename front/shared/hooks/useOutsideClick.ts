import { useEffect, useRef } from "react";

export const useOutsideClick = (cb: () => void) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        event.target instanceof HTMLDivElement &&
        ref.current &&
        !ref.current.contains(event.target)
      ) {
        cb();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [cb]);

  return { ref };
};
