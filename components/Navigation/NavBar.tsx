import React, { useState } from "react";
import Image from "next/image";
import Burger from "../Burger/Burger";
import Link from "next/link";
import NavBarList from "./NavBarList";

const NavBar = () => {
  const [navActive, setNavActive] = useState<boolean>(false);
  const toggleNav = () => setNavActive((state) => !state);
  const disableNav = () => {
    if (navActive) setNavActive(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 min-w-[290px] mx-auto text-stone-700 text-md bg-slate-100 border-b border-gray-300 shadow z-10">
      <nav className="flex justify-between items-center flex-wrap lg:px-5 h-[72px]">
        <Link href="/" className="mx-4 w-[160px]">
          <Image src="/logo.png" alt="logo" width={160} height={36} priority />
        </Link>
        <Burger navState={navActive} navHandler={toggleNav} />
        <NavBarList navState={navActive} disableNavFn={disableNav} />
      </nav>
    </header>
  );
};

export default NavBar;
