import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface SignOutButtonProps {
  logoutFn: () => Promise<void>;
  disableNavFn: () => void;
}

const SignOutButton = ({ logoutFn, disableNavFn }: SignOutButtonProps) => {
  const clickHandler = () => {
    logoutFn();
    disableNavFn();
  };

  return (
    <li className="inline-block mt-8 font-medium desktop:hover:text-stone-500 desktop:mt-0 desktop:p-2 desktop:text-lg transition-colors duration-200 ease">
      <button onClick={clickHandler}>
        <FontAwesomeIcon
          icon="power-off"
          width={22}
          className="inline-block pb-1 mr-2"
        />
        Sign Out
      </button>
    </li>
  );
};

export default SignOutButton;
