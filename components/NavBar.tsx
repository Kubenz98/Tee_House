import React, { useState } from "react";
import Image from "next/image";
import Burger from "./Burger/Burger";
import Link from "next/link";
import useUser from "@/hooks/useUser";
import useLogout from "@/hooks/useLogout";
import HorizontalNavBarList from "./HorizontalNavBarList";
import VerticalNavBarList from "./VerticalNavBarList";

const NavBar = () => {
  const [navActive, setNavActive] = useState<boolean>(false);
  const navHandler = () => setNavActive((state) => !state);
  const logout = useLogout();
  const { user, loading } = useUser();

  return (
    <header className="fixed top-0 left-0 right-0 min-w-[290px] max-w-[1400px] mx-auto text-stone-700 text-md border-b border-gray-300 shadow z-10">
      <nav className="flex justify-between items-center flex-wrap h-[72px] bg-slate-100">
        <Link href="/" className="mx-4">
          <Image src="/logo.png" alt="logo" width={160} height={36} priority />
        </Link>
        <HorizontalNavBarList user={user} loading={loading} logout={logout} />
        <Burger navState={navActive} navHandler={navHandler} />
        <VerticalNavBarList
          navState={navActive}
          user={user}
          loading={loading}
          logout={logout}
        />
      </nav>
    </header>
  );
};

export default NavBar;
