import React, { useState } from "react";
import Image from "next/image";
import Burger from "../Burger/Burger";
import Link from "next/link";
import useUser from "@/hooks/useUser";
import useLogout from "@/hooks/useLogout";
import NavBarList from "./NavBarList";

const NavBar = () => {
  const [navActive, setNavActive] = useState<boolean>(false);
  const navHandler = () => setNavActive((state) => !state);
  const logout = useLogout();
  const { user, userIsLoading } = useUser();

  return (
    <header className="fixed top-0 left-0 right-0 min-w-[290px] mx-auto text-stone-700 text-md bg-slate-100 border-b border-gray-300 shadow z-10">
      <nav className="flex justify-between items-center flex-wrap lg:px-5 h-[72px]">
        <Link href="/" className="mx-4 w-[44%]">
          <Image src="/logo.png" alt="logo" width={160} height={36} priority />
        </Link>
        <Burger navState={navActive} navHandler={navHandler} />
        <NavBarList
          navState={navActive}
          user={user}
          loading={userIsLoading}
          logout={logout}
        />
      </nav>
    </header>
  );
};

export default NavBar;
