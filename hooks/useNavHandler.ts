import React, { useEffect, useState } from "react";

const useNavHandler = (ref: React.RefObject<HTMLDivElement>) => {
  const [navActive, setNavActive] = useState<boolean>(false);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        disableNav();
      }
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [navActive]);

  const disableNav = () => {
    if (navActive) setNavActive(false);
  };
  const toggleNav = () => setNavActive((state) => !state);
  return { navActive, disableNav, toggleNav };
};

export default useNavHandler;
