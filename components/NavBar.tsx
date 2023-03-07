import React, { useState } from "react";
import Image from "next/image";
import Burger from "./Burger/Burger";
import Link from "next/link";
import useUser from "@/hooks/useUser";
import useLogout from "@/hooks/useLogout";

const NavBar = () => {
  const [navActive, setNavActive] = useState<boolean>(false);
  const navHandler = () => setNavActive((state) => !state);
  const logout = useLogout()

  const { user } = useUser();

  return (
    <header className="fixed bg-slate-100 top-0 left-0 right-0 border-b border-gray-300 shadow z-10">
      <nav className="py-4 px-4 flex justify-between items-center">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={160} height={36} priority />
        </Link>
        <ul className="max-[640px]:hidden">
          {user ? (
            <div className="flex gap-4">
              <li>{`Hi ${user.name}!`}</li>
              <li>
                <button onClick={logout}>Sign Out</button>
              </li>
            </div>
          ) : (
            <li>
              <Link href="/sign-in">Sign In</Link>
            </li>
          )}
        </ul>
        <Burger navState={navActive} navHandler={navHandler} />
      </nav>
    </header>
  );
};

export default NavBar;
