import React, { useRef } from "react";
import Burger from "../Burger/Burger";
import NavBarList from "./NavBarList";
import useNavHandler from "@/hooks/useNavHandler";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import Logo from "./Logo";

const NavBar = () => {
  const navRef = useRef<HTMLDivElement>(null);
  const { navActive, disableNav, toggleNav } = useNavHandler(navRef);

  return (
    <header
      ref={navRef}
      className="fixed top-0 left-0 right-0 min-w-[320px] mx-auto text-stone-700 text-md bg-slate-100 border-b border-gray-300 shadow z-10 dark:bg-neutral-800 dark:text-zinc-300 dark:border-neutral-800"
    >
      <nav className="flex justify-between items-center flex-wrap max-w-[1920px] mx-auto desktop:px-5 h-[72px]">
        <Logo />
        <div className="flex gap-10 h-full desktop:order-last">
          <ThemeSwitch />
          <Burger navState={navActive} navHandler={toggleNav} />
        </div>
        <NavBarList navState={navActive} disableNavFn={disableNav} />
      </nav>
    </header>
  );
};

export default NavBar;
