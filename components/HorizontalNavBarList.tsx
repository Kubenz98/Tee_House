import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import { HoriNavBarProps } from "@/lib/navbar";

const HorizontalNavBarList = ({ user, loading, logout }: HoriNavBarProps) => {
  return loading ? (
    <p className="max-[639px]:hidden">Loading...</p>
  ) : (
    <ul className="max-[639px]:hidden flex gap-6 items-center mx-4">
      {user ? (
        <>
          <li className="font-medium">{`Hi ${user.name}!`}</li>
          <li className="py-2 px-2 bg-stone-700 rounded text-white cursor-pointer hover:bg-stone-500 transition-colors duration-200 ease">
            <Link href="/cart">
              <FontAwesomeIcon
                icon="cart-shopping"
                width={20}
                className="inline-block mr-2"
              />
              Cart
            </Link>
          </li>
          <li className="font-medium hover:text-stone-500 transition-colors duration-200 ease">
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
        <li className="font-medium hover:text-stone-500 transition-colors duration-200 ease">
          <Link href="/sign-in">
            <FontAwesomeIcon
              icon="right-to-bracket"
              width={20}
              className="inline-block mr-2"
            />{" "}
            Sign In
          </Link>
        </li>
      )}
    </ul>
  );
};

export default HorizontalNavBarList;
