import React, { useEffect, useState, useCallback } from "react";

const useDropdownHandler = (
  ref: React.RefObject<HTMLLIElement | HTMLDivElement>,
  globalClick: boolean
) => {
  const [dropdownActive, setDropdownActive] = useState<boolean>(false);

  const disableDropDown = useCallback(() => {
    if (dropdownActive) setDropdownActive(false);
  }, [dropdownActive]);

  const handleClick = useCallback(
    (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        disableDropDown();
      }
    },
    [disableDropDown, ref]
  );

  useEffect(() => {
    if (globalClick) {
      document.addEventListener("click", handleClick);
      return () => {
        document.removeEventListener("click", handleClick);
      };
    }
  }, [dropdownActive, disableDropDown, handleClick, ref, globalClick]);

  const toggleDropdown = () => setDropdownActive((state) => !state);

  return { dropdownActive, disableDropDown, toggleDropdown };
};

export default useDropdownHandler;
