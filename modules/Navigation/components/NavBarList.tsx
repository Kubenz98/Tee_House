import React from "react";
import SignOutButton from "./Dropdown";
import navBarItems from "../data/ListItems";
import NavBarListItem from "./NavBarListItem";
import useUser from "@/hooks/useUser";

interface NavBarListProps {
  navState: boolean;
  disableNavFn: () => void;
}

const NavBarList = ({ navState, disableNavFn }: NavBarListProps) => {
  const { user, userIsLoading } = useUser();

  let navClasses = `flex flex-col w-full ml-auto desktop:mr-10 bg-slate-100 dark:bg-neutral-800 desktop:flex-row desktop:gap-2 desktop:justify-start desktop:items-center desktop:w-fit desktop:px-4 text-center shadow desktop:shadow-none overflow-hidden desktop:overflow-visible transition-[height] ease duration-300`;

  if (navState && user) {
    navClasses += " h-[320px] desktop:h-auto";
  } else if (navState && !user) {
    navClasses += " h-[85px] desktop:h-auto";
  } else {
    navClasses += " h-0 desktop:h-auto";
  }

  return (
    <ul className={navClasses}>
      {user ? (
        <>
          {navBarItems.map((item) => (
            <NavBarListItem
              key={item.title}
              title={item.title}
              href={item.href}
              icon={item.icon}
              disableNavFn={disableNavFn}
            />
          ))}
          <SignOutButton disableNavFn={disableNavFn} />
        </>
      ) : (
        <NavBarListItem
          title="Sign In"
          href="/sign-in"
          icon="right-to-bracket"
          disableNavFn={disableNavFn}
          userIsLoading={userIsLoading}
        />
      )}
    </ul>
  );
};

export default NavBarList;
