import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import { NavBarListProps } from "@/lib/navbar";

const NavBarList = ({ navState, user, logout }: NavBarListProps) => {
  let navClasses = `flex flex-col justify-center w-full sm:flex-row sm:gap-6 sm:justify-start sm:items-center sm:w-fit sm:px-4 text-center bg-slate-100 overflow-hidden transition-[height] ease duration-300`;

  if (navState && user) {
    navClasses += " h-[160px] sm:h-auto";
  } else if (navState && !user) {
    navClasses += " h-[85px] sm:h-auto";
  } else {
    navClasses += " h-0 sm:h-auto";
  }

  return (
    <ul className={navClasses}>
      {user ? (
        <>
          <li className="py-3 font-medium">{`Hi ${user.name}!`}</li>
          <li>
            <Link
              href="/cart"
              className="py-3 rounded font-medium sm:py-2 sm:px-2 sm:bg-stone-700 sm:text-white sm:cursor-pointer md:hover:bg-stone-500 transition-colors duration-200 ease"
            >
              <FontAwesomeIcon
                icon="cart-shopping"
                width={20}
                className="inline-block mr-2"
              />
              Cart
            </Link>
          </li>
          <li className="py-3 font-medium md:hover:text-stone-500 transition-colors duration-200 ease">
            <button onClick={logout}>
              <FontAwesomeIcon
                icon="power-off"
                width={20}
                className="inline-block mr-2"
              />
              Sign Out
            </button>
          </li>
        </>
      ) : (
        <li className="py-3 font-medium md:hover:text-stone-500 transition-colors duration-200 ease">
          <Link href="/sign-in">
            <FontAwesomeIcon
              icon="right-to-bracket"
              width={20}
              className="inline-block mr-2"
            />
            Sign In
          </Link>
        </li>
      )}
    </ul>
  );
};

export default NavBarList;
