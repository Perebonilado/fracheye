import { useRef, useEffect } from "react";

const useClickOutside = <T extends HTMLElement>(callback: () => void) => {
  const ref = useRef<T | null>(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      callback();
    }
  };

  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);

    return () => window.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return ref;
};

export default useClickOutside;
