import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import { VertiNavBarProps } from "@/lib/navbar";

const VerticalNavBarList = ({ navState, user, loading, logout, }: VertiNavBarProps) => {
  const mobileNavClassname = `flex flex-col justify-center w-full min-[640px]:hidden text-center bg-slate-100 overflow-hidden${
    navState && user ? " h-[160px]" : " h-0"
  } ${
    navState && !user ? " h-[85px]" : " h-0"
  } transition-[height] ease duration-300`;

  return (
    <ul className={mobileNavClassname}>
      {user ? (
        <>
          <li className="py-3 font-medium">{`Hi ${user.name}!`}</li>
          <li className="py-3 font-medium">
            <Link href="/cart">
              <FontAwesomeIcon
                icon="cart-shopping"
                width={20}
                className="inline-block mr-2"
              />
              Cart
            </Link>
          </li>
          <li className="py-3 font-medium">
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
        <li className="py-3 font-medium">
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

export default VerticalNavBarList;
