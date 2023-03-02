import React, { useState } from "react";
import Image from "next/image";
import Burger from "./Burger/Burger";
import Link from "next/link";

const NavBar = () => {
  const [navActive, setNavActive] = useState<boolean>(false);

  const navHandler = () => setNavActive((state) => !state);

  return (
    <header className="fixed bg-slate-100 top-0 left-0 right-0 border-b border-gray-300 shadow z-10">
      <nav className="py-4 px-4 flex justify-between items-center">
        <Image src="/gh.png" alt="logo" width={220} height={34} priority />
          <ul className="max-[640px]:hidden">
            <li>
              <Link href="SignIn">Sign In</Link>
            </li>
          </ul>
          <Burger navState={navActive} navHandler={navHandler} />
      </nav>
    </header>
  );
};

export default NavBar;
