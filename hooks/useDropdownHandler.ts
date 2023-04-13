import React, { useEffect, useState } from "react";

const useDropdownHandler = (ref: React.RefObject<HTMLLIElement>) => {
  const [dropdownActive, setDropdownActive] = useState<boolean>(false);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        disableDropDown();
      }
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [dropdownActive]);

  const disableDropDown = () => {
    if (dropdownActive) setDropdownActive(false);
  };

  const toggleDropdown = () => setDropdownActive((state) => !state);

  return { dropdownActive, disableDropDown, toggleDropdown };
};

export default useDropdownHandler;
