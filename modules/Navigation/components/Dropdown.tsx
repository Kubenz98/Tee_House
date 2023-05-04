import { useRef } from "react";
import useLogout from "@/hooks/useLogout";
import useUser from "@/hooks/useUser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useDropdownHandler from "@/hooks/useDropdownHandler";

interface DropdownProps {
  disableNavFn: () => void;
}

const Dropdown = ({ disableNavFn }: DropdownProps) => {
  const { user } = useUser();
  const logout = useLogout();
  const dropdownRef = useRef<HTMLLIElement>(null);
  
  const { dropdownActive, toggleDropdown } = useDropdownHandler(dropdownRef)

  const logoutHandler = () => {
    logout();
    disableNavFn();
  };

  return (
    <>
      <li
        className="relative w-max mt-8 mx-auto font-medium desktop:hover:text-stone-500 desktop:mt-0 desktop:p-2 desktop:text-lg transition-colors duration-200 ease cursor-pointer dark:hover:text-stone-100"
        onClick={toggleDropdown}
        ref={dropdownRef}
      >
        <FontAwesomeIcon
          icon={dropdownActive ? "chevron-down" : "chevron-up"}
          width={22}
          className="inline-block pb-1 mr-2"
        />
        {user.name}
        {dropdownActive && (
          <div className="absolute left-1/2 top-8 -translate-x-1/2 -translate-y-1/2 w-max mt-8 py-2 px-4 border font-medium desktop:top-16 desktop:hover:text-stone-500 desktop:mt-0 desktop:text-lg bg-white  transition-colors duration-200 ease z-20 dark:bg-neutral-800 dark:hover:text-stone-100">
            <button onClick={logoutHandler}>
              <FontAwesomeIcon
                icon="power-off"
                width={22}
                className="inline-block pb-1 mr-2"
              />
              Sign Out
            </button>
          </div>
        )}
      </li>
    </>
  );
};

export default Dropdown;
