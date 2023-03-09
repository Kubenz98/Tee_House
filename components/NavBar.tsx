import React, { useState } from "react";
import Image from "next/image";
import Burger from "./Burger/Burger";
import Link from "next/link";
import useUser from "@/hooks/useUser";
import useLogout from "@/hooks/useLogout";
import {
  faCartShopping,
  faPowerOff,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const { library } = require("@fortawesome/fontawesome-svg-core");
//require helps for hydration error

const NavBar = () => {
  const [navActive, setNavActive] = useState<boolean>(false);
  const navHandler = () => setNavActive((state) => !state);
  const logout = useLogout();
  const { user } = useUser();
  library.add(faCartShopping, faPowerOff, faRightToBracket);

  const mobileNavClassname = `flex flex-col justify-center min-[640px]:hidden text-center bg-slate-100 overflow-hidden${
    navActive && user ? " h-[160px]" : " h-0"
  } ${
    navActive && !user ? " h-[85px]" : " h-0"
  } transition-[height] ease duration-300`;

  return (
    <header className="fixed top-0 left-0 right-0 text-stone-700 text-md border-b border-gray-300 shadow z-10">
      <nav className="py-4 px-4 flex justify-between items-center h-[72px] bg-slate-100">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={160} height={36} priority />
        </Link>
        <ul className="max-[639px]:hidden flex gap-6 items-center">
          {user ? (
            <>
              <li>{`Hi ${user.name}!`}</li>
              <li className="py-2 px-2 bg-stone-700 rounded text-white cursor-pointer">
                <Link href="/cart">
                  <FontAwesomeIcon
                    icon="cart-shopping"
                    width={20}
                    className="inline-block mr-2"
                  />
                  Cart
                </Link>
              </li>
              <li>
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
            <li>
              <Link href="/sign-in">
                {" "}
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
        <Burger navState={navActive} navHandler={navHandler} />
      </nav>
      <nav>
        <ul className={mobileNavClassname}>
          {user ? (
            <>
              <li className="py-3">{`Hi ${user.name}!`}</li>
              <li className="py-3">
                <Link href="/cart">
                  <FontAwesomeIcon
                    icon="cart-shopping"
                    width={20}
                    className="inline-block mr-2"
                  />
                  Cart
                </Link>
              </li>
              <li className="py-3">
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
            <li>
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
      </nav>
    </header>
  );
};

export default NavBar;
